import{j as o}from"./jsx-runtime-F2b9qZUC.js";import{C as c}from"./index-BAsEU1vs.js";import"./iframe-DO6PTJH3.js";import{T as s}from"./text-f24MqBOH.js";import{F as x}from"./flex-Dmt0vVc3.js";import{B as b}from"./box-DYkp6abn.js";import"./use-style-config-ltM-VqRn.js";import"./index-DEIjWCZM.js";import"./factory-D4os3DTv.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="733cc849-9e82-449e-bd81-84b8b44f805e",e._sentryDebugIdIdentifier="sentry-dbid-733cc849-9e82-449e-bd81-84b8b44f805e")}catch{}const D={title:"colours/Reds",component:s,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.red.light).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})},n={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.red.dark).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})};var l,a,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.red.light).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(a=t.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.red.dark).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Light","Dark"];export{n as Dark,t as Light,S as __namedExportsOrder,D as default};
