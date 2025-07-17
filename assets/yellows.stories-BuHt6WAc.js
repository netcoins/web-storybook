import{j as r}from"./jsx-runtime-IV0hNWlL.js";import{C as d}from"./index-DfMnH9sW.js";import"./iframe-BXtP_xvY.js";import{T as a}from"./text-C1Bc78qT.js";import{F as x}from"./flex-Cp2APPf8.js";import{B as f}from"./box-DZuX9mkT.js";import"./index-2etZxnfb.js";import"./use-style-config-CDFdgQtb.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="3fe925ca-c649-4f15-a7ca-c6fe2c8eaa84",e._sentryDebugIdIdentifier="sentry-dbid-3fe925ca-c649-4f15-a7ca-c6fe2c8eaa84")}catch{}const B={title:"colours/Yellows",component:a,tags:["pending"]},t={render:()=>r.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(d.yellow.light).map(([e,o])=>r.jsx(f,{bgColor:o,h:"50px",w:"200px",position:"relative",children:r.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},o))})},l={render:()=>r.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(d.yellow.dark).map(([e,o])=>r.jsx(f,{bgColor:o,h:"50px",w:"200px",position:"relative",children:r.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},o))})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.yellow.light).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,c,m;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.yellow.dark).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(c=l.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const D=["Light","Dark"];export{l as Dark,t as Light,D as __namedExportsOrder,B as default};
