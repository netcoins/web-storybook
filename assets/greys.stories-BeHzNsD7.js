import{j as o}from"./jsx-runtime-F2b9qZUC.js";import{C as d}from"./index-BAsEU1vs.js";import"./iframe-DO6PTJH3.js";import{T as n}from"./text-f24MqBOH.js";import{F as x}from"./flex-Dmt0vVc3.js";import{B as f}from"./box-DYkp6abn.js";import"./use-style-config-ltM-VqRn.js";import"./index-DEIjWCZM.js";import"./factory-D4os3DTv.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="cb58263a-2990-48a8-83c2-4c0f2f6ca565",e._sentryDebugIdIdentifier="sentry-dbid-cb58263a-2990-48a8-83c2-4c0f2f6ca565")}catch{}const D={title:"colours/Greys",component:n,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(d.grey.light).map(([e,r])=>o.jsx(f,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(n,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})},a={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(d.grey.dark).map(([e,r])=>o.jsx(f,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(n,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.grey.light).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,m,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.grey.dark).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(c=(m=a.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const S=["Light","Dark"];export{a as Dark,t as Light,S as __namedExportsOrder,D as default};
