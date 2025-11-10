import{j as o}from"./jsx-runtime-B791eGeM.js";import{C as c}from"./index-CjWIw2WR.js";import"./iframe-CxvPOnKM.js";import{T as n}from"./text-BOMZCICA.js";import{F as x}from"./flex-DwRBA7jn.js";import{B as b}from"./box-B80E9g7g.js";import"./use-style-config-D4hZ3gJS.js";import"./index-DIojWxTx.js";import"./factory-CgJe7pVc.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="bf142653-c845-4bdd-8061-85e4eacfaa97",e._sentryDebugIdIdentifier="sentry-dbid-bf142653-c845-4bdd-8061-85e4eacfaa97")}catch{}const D={title:"colours/Greys",component:n,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.grey.light).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(n,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})},a={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.grey.dark).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(n,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})};var s,l,i;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.grey.light).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.grey.dark).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const S=["Light","Dark"];export{a as Dark,t as Light,S as __namedExportsOrder,D as default};
