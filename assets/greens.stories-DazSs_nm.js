import{j as o}from"./jsx-runtime-LOmjKKCo.js";import{C as x}from"./index-DqkFk8z6.js";import"./iframe-D-491yR7.js";import{T as s}from"./text-D4L4hpxl.js";import{F as c}from"./flex-DJ4ueP6k.js";import{B as b}from"./box-nTzxF7C8.js";import"./use-style-config-2WUCjPTT.js";import"./index-212F8vul.js";import"./factory-CjEGmDaV.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="194b7a53-5d21-44f0-87eb-03d7d7da65f4",e._sentryDebugIdIdentifier="sentry-dbid-194b7a53-5d21-44f0-87eb-03d7d7da65f4")}catch{}const D={title:"colours/Greens",component:s,tags:["pending"]},t={render:()=>o.jsx(c,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(x.green.light).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})},n={render:()=>o.jsx(c,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(x.green.dark).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})};var a,l,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.green.light).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.green.dark).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Light","Dark"];export{n as Dark,t as Light,S as __namedExportsOrder,D as default};
