import{j as o}from"./jsx-runtime-DNabp6vP.js";import{C as c}from"./index-D6uUQPH9.js";import"./iframe-DhJ-F6cv.js";import{T as l}from"./index-C4ZcEYmH.js";import{F as x}from"./flex-7Uwqc4yV.js";import{B as u}from"./index-nf5oY5Co.js";import"./create-recipe-context-CY9Ln4QB.js";import"./index-mys4YnTk.js";import"./factory-RadjLeVb.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="ca618c6e-ef5b-4c61-9363-2329daa9d141",e._sentryDebugIdIdentifier="sentry-dbid-ca618c6e-ef5b-4c61-9363-2329daa9d141")}catch{}const B={title:"colours/Greys",component:l,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.grey.light).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})},a={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.grey.dark).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.grey.light).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.grey.dark).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Light","Dark"];export{a as Dark,t as Light,D as __namedExportsOrder,B as default};
