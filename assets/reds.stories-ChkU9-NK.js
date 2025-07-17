import{j as o}from"./jsx-runtime-DIzLeBSg.js";import{C as x}from"./index-x7VWxpIH.js";import"./iframe-NthpIpXS.js";import{T as s}from"./text-5ESNzIeg.js";import{F as c}from"./flex-BovBxUVX.js";import{B as b}from"./box-NNxW-TG4.js";import"./index-HfLk7_r9.js";import"./use-style-config-XwpbuwHi.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="f630d59a-e38e-4d63-983f-7b079b708293",e._sentryDebugIdIdentifier="sentry-dbid-f630d59a-e38e-4d63-983f-7b079b708293")}catch{}const B={title:"colours/Reds",component:s,tags:["pending"]},t={render:()=>o.jsx(c,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(x.red.light).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})},n={render:()=>o.jsx(c,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(x.red.dark).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})};var a,l,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.red.light).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.red.dark).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Light","Dark"];export{n as Dark,t as Light,D as __namedExportsOrder,B as default};
