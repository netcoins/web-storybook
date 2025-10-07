import{j as o}from"./jsx-runtime-Dl65b5Ft.js";import{C as c}from"./index-DxSGJHuL.js";import"./iframe-CspplzkO.js";import{T as s}from"./text-C_yf4AbR.js";import{F as x}from"./flex-CCsjEBiM.js";import{B as b}from"./box-xJmNwxIz.js";import"./use-style-config-Cg25QPWW.js";import"./index-Dx8U6HT0.js";import"./factory-BVSOBJDN.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new e.Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="9e6f4458-bdc9-441d-a977-eca36fb57ceb",e._sentryDebugIdIdentifier="sentry-dbid-9e6f4458-bdc9-441d-a977-eca36fb57ceb")}catch{}const D={title:"colours/Greens",component:s,tags:["pending"]},t={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.green.light).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})},n={render:()=>o.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.green.dark).map(([e,r])=>o.jsx(b,{bgColor:r,h:"50px",w:"200px",position:"relative",children:o.jsx(s,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},r))})};var a,l,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
