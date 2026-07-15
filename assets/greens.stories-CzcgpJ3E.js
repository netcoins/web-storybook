import{j as o}from"./jsx-runtime-BTqjDgMf.js";import{C as b}from"./index-C7f6Qlo7.js";import"./iframe-BITn7V8B.js";import{T as a}from"./index-DS3Payst.js";import{F as x}from"./flex-BIV0zswu.js";import{B as c}from"./index-BZZ-eHkW.js";import"./create-recipe-context-BO7oV3LB.js";import"./index-DYWH3DXx.js";import"./factory-DMNV3kaj.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="927bb328-0813-4bb7-b24e-52a17ef0bbe5",e._sentryDebugIdIdentifier="sentry-dbid-927bb328-0813-4bb7-b24e-52a17ef0bbe5")}catch{}const B={title:"colours/Greens",component:a,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(b.green.light).map(([e,r])=>o.jsx(c,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})},n={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(b.green.dark).map(([e,r])=>o.jsx(c,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})};var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.green.light).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.green.dark).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const D=["Light","Dark"];export{n as Dark,t as Light,D as __namedExportsOrder,B as default};
