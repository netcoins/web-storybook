import{j as r}from"./jsx-runtime-F2b9qZUC.js";import{C as c}from"./index-BAsEU1vs.js";import"./iframe-DO6PTJH3.js";import{T as a}from"./text-f24MqBOH.js";import{F as x}from"./flex-Dmt0vVc3.js";import{B as b}from"./box-DYkp6abn.js";import"./use-style-config-ltM-VqRn.js";import"./index-DEIjWCZM.js";import"./factory-D4os3DTv.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new e.Error().stack;o&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[o]="ebb11ab5-5fcb-4ac9-bf2f-74387fa1f769",e._sentryDebugIdIdentifier="sentry-dbid-ebb11ab5-5fcb-4ac9-bf2f-74387fa1f769")}catch{}const D={title:"colours/Yellows",component:a,tags:["pending"]},t={render:()=>r.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.yellow.light).map(([e,o])=>r.jsx(b,{bgColor:o,h:"50px",w:"200px",position:"relative",children:r.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},o))})},l={render:()=>r.jsx(x,{flexDir:"column",rowGap:"0.5rem",pb:"0.5rem",children:Object.entries(c.yellow.dark).map(([e,o])=>r.jsx(b,{bgColor:o,h:"50px",w:"200px",position:"relative",children:r.jsx(a,{pos:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",textStyle:"ManropeSemiboldBody",color:"white",children:e})},o))})};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.yellow.light).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var p,m,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <Flex flexDir="column" rowGap="0.5rem" pb="0.5rem">
            {Object.entries(Colors.yellow.dark).map(([key, value]) => <Box key={value} bgColor={value} h="50px" w="200px" position={"relative"}>
                    <Text pos="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" textStyle="ManropeSemiboldBody" color="white">
                        {key}
                    </Text>
                </Box>)}
        </Flex>
}`,...(d=(m=l.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const S=["Light","Dark"];export{l as Dark,t as Light,S as __namedExportsOrder,D as default};
