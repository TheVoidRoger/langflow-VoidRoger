"use strict";(self.webpackChunkdocusaurus=self.webpackChunkdocusaurus||[]).push([[273],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||r;return t?a.createElement(h,l(l({ref:n},c),{},{components:t})):a.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=m;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=t(7462),o=(t(7294),t(3905));const r={},l="Deploy on Jina AI Cloud",i={unversionedId:"deployment/jina-deployment",id:"deployment/jina-deployment",title:"Deploy on Jina AI Cloud",description:"Langflow integrates with langchain-serve to provide a one-command deployment to Jina AI Cloud.",source:"@site/docs/deployment/jina-deployment.md",sourceDirName:"deployment",slug:"/deployment/jina-deployment",permalink:"/deployment/jina-deployment",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Deploy on Google Cloud Platform",permalink:"/deployment/gcp-deployment"},next:{title:"How to contribute?",permalink:"/contributing/how-contribute"}},s={},p=[{value:"API Usage (with python)",id:"api-usage-with-python",level:2}],c={toc:p},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-on-jina-ai-cloud"},"Deploy on Jina AI Cloud"),(0,o.kt)("p",null,"Langflow integrates with langchain-serve to provide a one-command deployment to ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/jina-ai/langchain-serve"},"Jina AI Cloud"),"."),(0,o.kt)("p",null,"Start by installing ",(0,o.kt)("inlineCode",{parentName:"p"},"langchain-serve")," with "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install -U langchain-serve\n")),(0,o.kt)("p",null,"Then, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"langflow --jcloud\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"\ud83c\udf89 Langflow server successfully deployed on Jina AI Cloud \ud83c\udf89\n\ud83d\udd17 Click on the link to open the server (please allow ~1-2 minutes for the server to startup): https://<your-app>.wolf.jina.ai/\n\ud83d\udcd6 Read more about managing the server: https://github.com/jina-ai/langchain-serve\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Complete (example) output:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"  \ud83d\ude80 Deploying Langflow server on Jina AI Cloud\n  \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 \ud83c\udf89 Flow is available! \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n  \u2502                                                                          \u2502\n  \u2502   ID                    langflow-e3dd8820ec                              \u2502\n  \u2502   Gateway (Websocket)   wss://langflow-e3dd8820ec.wolf.jina.ai           \u2502\n  \u2502   Dashboard             https://dashboard.wolf.jina.ai/flow/e3dd8820ec   \u2502\n  \u2502                                                                          \u2502\n  \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n  \u256d\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u252c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256e\n  \u2502 App ID       \u2502                     langflow-e3dd8820ec                                      \u2502\n  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n  \u2502 Phase        \u2502                            Serving                                           \u2502\n  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n  \u2502 Endpoint     \u2502          wss://langflow-e3dd8820ec.wolf.jina.ai                              \u2502\n  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n  \u2502 App logs     \u2502                  dashboards.wolf.jina.ai                                     \u2502\n  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n  \u2502 Swagger UI   \u2502          https://langflow-e3dd8820ec.wolf.jina.ai/docs                       \u2502\n  \u251c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u253c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2524\n  \u2502 OpenAPI JSON \u2502        https://langflow-e3dd8820ec.wolf.jina.ai/openapi.json                 \u2502\n  \u2570\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2534\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u256f\n\n  \ud83c\udf89 Langflow server successfully deployed on Jina AI Cloud \ud83c\udf89\n  \ud83d\udd17 Click on the link to open the server (please allow ~1-2 minutes for the server to startup): https://langflow-e3dd8820ec.wolf.jina.ai/\n  \ud83d\udcd6 Read more about managing the server: https://github.com/jina-ai/langchain-serve\n")),(0,o.kt)("h2",{id:"api-usage-with-python"},"API Usage (with python)"),(0,o.kt)("p",null,"You can use Langflow directly on your browser or the API endpoints on Jina AI Cloud to interact with the server."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'import requests\n\nBASE_API_URL = "https://langflow-e3dd8820ec.wolf.jina.ai/api/v1/predict"\nFLOW_ID = "864c4f98-2e59-468b-8e13-79cd8da07468"\n# You can tweak the flow by adding a tweaks dictionary\n# e.g {"OpenAI-XXXXX": {"model_name": "gpt-4"}}\nTWEAKS = {\n"ChatOpenAI-g4jEr": {},\n"ConversationChain-UidfJ": {}\n}\n\ndef run_flow(message: str, flow_id: str, tweaks: dict = None) -> dict:\n  """\n  Run a flow with a given message and optional tweaks.\n\n  :param message: The message to send to the flow\n  :param flow_id: The ID of the flow to run\n  :param tweaks: Optional tweaks to customize the flow\n  :return: The JSON response from the flow\n  """\n  api_url = f"{BASE_API_URL}/{flow_id}"\n\n  payload = {"message": message}\n\n  if tweaks:\n      payload["tweaks"] = tweaks\n\n  response = requests.post(api_url, json=payload)\n  return response.json()\n\n# Setup any tweaks you want to apply to the flow\nprint(run_flow("Your message", flow_id=FLOW_ID, tweaks=TWEAKS))\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n"result": "Great choice! Bangalore in the 1920s was a vibrant city with a rich cultural and political scene. Here are some suggestions for things to see and do:\\n\\n1. Visit the Bangalore Palace - built in 1887, this stunning palace is a perfect example of Tudor-style architecture. It was home to the Maharaja of Mysore and is now open to the public.\\n\\n2. Attend a performance at the Ravindra Kalakshetra - this cultural center was built in the 1920s and is still a popular venue for music and dance performances.\\n\\n3. Explore the neighborhoods of Basavanagudi and Malleswaram - both of these areas have retained much of their old-world charm and are great places to walk around and soak up the atmosphere.\\n\\n4. Check out the Bangalore Club - founded in 1868, this exclusive social club was a favorite haunt of the British expat community in the 1920s.\\n\\n5. Attend a meeting of the Indian National Congress - founded in 1885, the INC was a major force in the Indian independence movement and held many meetings and rallies in Bangalore in the 1920s.\\n\\nHope you enjoy your trip to 1920s Bangalore!"\n}\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Read more about resource customization, cost, and management of Langflow apps on Jina AI Cloud in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://github.com/jina-ai/langchain-serve"},"langchain-serve"))," repository.")))}d.isMDXComponent=!0}}]);