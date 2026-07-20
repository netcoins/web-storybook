import{j as o}from"./jsx-runtime-NTOSteDC.js";import{C as x}from"./index-DekC8wCP.js";import"./iframe-BUkh0iid.js";import{T as l}from"./index-BT4bpkGG.js";import{F as c}from"./flex-ZuSbZT_S.js";import{B as u}from"./index-hC8Z7bH0.js";import"./create-recipe-context-B6lnw0jF.js";import"./index-BgMO5fMJ.js";import"./factory-YZL-MebO.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="4b5a984a-b9e8-4b83-ad9a-d2e0487ff072",e._sentryDebugIdIdentifier="sentry-dbid-4b5a984a-b9e8-4b83-ad9a-d2e0487ff072")}catch{}const B={title:"colours/Reds",component:l,tags:["pending"]},t={render:()=>o.jsx(c,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(x.red.light).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})},a={render:()=>o.jsx(c,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(x.red.dark).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.red.light).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.red.dark).map(([key, value]) => <Box key={value.value} bgColor={value.value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};const D=["Light","Dark"];export{a as Dark,t as Light,D as __namedExportsOrder,B as default};
