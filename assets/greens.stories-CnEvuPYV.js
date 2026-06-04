import{j as o}from"./jsx-runtime-D9n_btLS.js";import{C as c}from"./index-Cnig8v3c.js";import"./iframe-1RBj3wOP.js";import{T as a}from"./index-Bl4cAPWq.js";import{F as x}from"./flex-yBvgSHlG.js";import{B as b}from"./index-BLEa5hZ3.js";import"./create-recipe-context-DN1RLOxq.js";import"./index-B_wJ61bp.js";import"./factory-CyXdg-dj.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="1b121743-6cd6-4c2b-91af-57b327b3516d",e._sentryDebugIdIdentifier="sentry-dbid-1b121743-6cd6-4c2b-91af-57b327b3516d")}catch{}const B={title:"colours/Greens",component:a,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.green.light).map(([e,r])=>o.jsx(b,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})},n={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.green.dark).map(([e,r])=>o.jsx(b,{bgColor:r.value,h:"50px",w:"200px",position:"relative",children:o.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r.value))})};var l,s,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
