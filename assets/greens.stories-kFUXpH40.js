import{j as o}from"./jsx-runtime-dpHUe5oX.js";import{C as c}from"./index-V-bhHtkg.js";import"./iframe-D4J09tqF.js";import{T as l}from"./index-DRCMA9EB.js";import{F as x}from"./flex-DnvIn_-I.js";import{B as u}from"./index-BFDgfXC7.js";import"./create-recipe-context-3TfFPQ_z.js";import"./index-DPsTlIcQ.js";import"./factory-DcUfu5AJ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="7468d687-30d2-4354-9338-b11d34e2c9ed",e._sentryDebugIdIdentifier="sentry-dbid-7468d687-30d2-4354-9338-b11d34e2c9ed")}catch{}const B={title:"colours/Greens",component:l,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.green.light).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})},n={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.green.dark).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})};var a,s,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.green.light).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,d,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.green.dark).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Light","Dark"];export{n as Dark,t as Light,D as __namedExportsOrder,B as default};
