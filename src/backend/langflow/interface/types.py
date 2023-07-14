from langflow.interface.agents.base import agent_creator
from langflow.interface.chains.base import chain_creator
from langflow.interface.custom.constants import LANGCHAIN_BASE_TYPES
from langflow.interface.document_loaders.base import documentloader_creator
from langflow.interface.embeddings.base import embedding_creator
from langflow.interface.llms.base import llm_creator
from langflow.interface.memories.base import memory_creator
from langflow.interface.prompts.base import prompt_creator
from langflow.interface.text_splitters.base import textsplitter_creator
from langflow.interface.toolkits.base import toolkits_creator
from langflow.interface.tools.base import tool_creator
from langflow.interface.utilities.base import utility_creator
from langflow.interface.vector_store.base import vectorstore_creator
from langflow.interface.wrappers.base import wrapper_creator
from langflow.interface.output_parsers.base import output_parser_creator
from langflow.interface.custom.base import custom_component_creator
from langflow.interface.custom.custom_component import CustomComponent

from langflow.template.field.base import TemplateField
from langflow.template.frontend_node.tools import CustomComponentNode
from langflow.interface.retrievers.base import retriever_creator

import re
import warnings
import traceback
from fastapi import HTTPException
from langflow.utils.util import get_base_classes


# Used to get the base_classes list
def get_type_list():
    """Get a list of all langchain types"""
    all_types = build_langchain_types_dict()

    # all_types.pop("tools")

    for key, value in all_types.items():
        all_types[key] = [item["template"]["_type"] for item in value.values()]

    return all_types


def build_langchain_types_dict():  # sourcery skip: dict-assign-update-to-union
    """Build a dictionary of all langchain types"""

    all_types = {}

    creators = [
        chain_creator,
        agent_creator,
        prompt_creator,
        llm_creator,
        memory_creator,
        tool_creator,
        toolkits_creator,
        wrapper_creator,
        embedding_creator,
        vectorstore_creator,
        documentloader_creator,
        textsplitter_creator,
        utility_creator,
        output_parser_creator,
        retriever_creator,
        custom_component_creator,
    ]

    all_types = {}
    for creator in creators:
        created_types = creator.to_dict()
        if created_types[creator.type_name].values():
            all_types.update(created_types)

    return all_types


def process_type(field_type: str):
    return "prompt" if field_type == "Prompt" else field_type


# TODO: Move to correct place
def add_new_custom_field(
    template,
    field_name: str,
    field_type: str,
    field_value: str,
    field_required: bool,
    field_config: dict,
):
    # Check field_config if any of the keys are in it
    # if it is, update the value
    display_name = field_config.pop("display_name", field_name)
    field_type = field_config.pop("field_type", field_type)
    field_type = process_type(field_type)

    if "name" in field_config:
        warnings.warn(
            "The 'name' key in field_config is used to build the object and can't be changed."
        )
        field_config.pop("name", None)

    required = field_config.pop("required", field_required)
    placeholder = field_config.pop("placeholder", "")

    new_field = TemplateField(
        name=field_name,
        field_type=field_type,
        value=field_value,
        show=True,
        required=required,
        advanced=False,
        placeholder=placeholder,
        display_name=display_name,
        **field_config,
    )
    template.get("template")[field_name] = new_field.to_dict()
    template.get("custom_fields")[field_name] = None

    return template


# TODO: Move to correct place
def add_code_field(template, raw_code):
    # Field with the Python code to allow update
    code_field = {
        "code": {
            "dynamic": True,
            "required": True,
            "placeholder": "",
            "show": True,
            "multiline": True,
            "value": raw_code,
            "password": False,
            "name": "code",
            "advanced": False,
            "type": "code",
            "list": False,
        }
    }
    template.get("template")["code"] = code_field.get("code")

    return template


def extract_type_from_optional(field_type):
    """
    Extract the type from a string formatted as "Optional[<type>]".

    Parameters:
    field_type (str): The string from which to extract the type.

    Returns:
    str: The extracted type, or an empty string if no type was found.
    """
    match = re.search(r"\[(.*?)\]", field_type)
    return match[1] if match else None


def build_langchain_template_custom_component(custom_component: CustomComponent):
    # Build base "CustomComponent" template
    frontend_node = CustomComponentNode().to_dict().get(type(custom_component).__name__)

    function_args = custom_component.get_function_entrypoint_args
    return_type = custom_component.get_function_entrypoint_return_type
    # template_config = custom_component.get_template_config

    if function_args is not None:
        # Add extra fields
        for extra_field in function_args:
            field_name = extra_field.get("name") if "name" in extra_field else ""

            if field_name != "self":
                field_type = extra_field.get("type") if "type" in extra_field else ""
                field_value = (
                    extra_field.get("default") if "default" in extra_field else ""
                )
                field_required = True
                field_config = {}

                # TODO: Validate type - if is possible to render into frontend
                if "optional" in field_type.lower():
                    field_type = extract_type_from_optional(field_type)
                    field_required = False

                if not field_type:
                    field_type = "str"

                frontend_node = add_new_custom_field(
                    frontend_node,
                    field_name,
                    field_type,
                    field_value,
                    field_required,
                    field_config,
                )

    frontend_node = add_code_field(frontend_node, custom_component.code)

    # Get base classes from "return_type" and add to template.base_classes
    try:
        if return_type not in LANGCHAIN_BASE_TYPES or return_type is None:
            raise HTTPException(
                status_code=400,
                detail={
                    "error": (
                        "Invalid return type should be one of: "
                        f"{list(LANGCHAIN_BASE_TYPES.keys())}"
                    ),
                    "traceback": traceback.format_exc(),
                },
            )

        return_type_instance = LANGCHAIN_BASE_TYPES.get(return_type)
        base_classes = get_base_classes(return_type_instance)

    except (KeyError, AttributeError) as err:
        raise HTTPException(
            status_code=400,
            detail={"error": type(err).__name__, "traceback": traceback.format_exc()},
        ) from err

    for base_class in base_classes:
        frontend_node.get("base_classes").append(base_class)

    return frontend_node


langchain_types_dict = build_langchain_types_dict()