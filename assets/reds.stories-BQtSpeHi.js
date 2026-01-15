import{j as o}from"./jsx-runtime-Ciu9vFw6.js";import{C as c}from"./index-k4ysbLRL.js";import"./iframe-CYfU2A1M.js";import{T as l}from"./index-Po7Q-z57.js";import{F as x}from"./flex-CnHbzLHW.js";import{B as u}from"./index-BI4iJpE3.js";import"./create-recipe-context-XaO16wtv.js";import"./index-D3ZUCIWZ.js";import"./factory-8Q1V0TBv.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="5f248116-504c-4445-8086-dadcbe91ba42",e._sentryDebugIdIdentifier="sentry-dbid-5f248116-504c-4445-8086-dadcbe91ba42")}catch{}const B={title:"colours/Reds",component:l,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.red.light).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})},a={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.red.dark).map(([e,r])=>o.jsx(u,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(l,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
