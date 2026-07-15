import{j as b}from"./jsx-runtime-BEkhRi9Z.js";import{r as g}from"./index-TzQF_aeA.js";import{M as i}from"./index-CJGSCD5q.js";import"./iframe-DtuCJnTg.js";import"./index-CEuNhfxt.js";import"./types-DcyUXyUQ.js";import"./color-mode-BXcjEgtS.js";import"./iconBase-C9qtZXyZ.js";import"./icon-button-CoDYX5q4.js";import"./button-DaRnAzp-.js";import"./factory-46RSImuz.js";import"./create-recipe-context-CzdCXJwV.js";import"./attr-DhmmAXiK.js";import"./spinner-82vpluQm.js";import"./skeleton-BNi_2YG0.js";import"./index-GJWyF3Il.js";import"./stack-Ba8Q0fCj.js";import"./flex-BaFULz4f.js";import"./icon-CIiTeoMS.js";import"./index-l7O5pEuN.js";import"./index-BN4YGac8.js";import"./index-kpZEGeQ2.js";import"./index.esm-CAgCwJ4H.js";import"./index-8K_KsJMa.js";import"./link-BcK8nlQi.js";import"./types-DcSaQQSM.js";import"./index-2U1y_rHc.js";import"./h-stack-5_IrqOpr.js";import"./field-CBvT7rSn.js";import"./create-slot-recipe-context-CVeXG7tx.js";import"./use-field-context-cmaDxZHy.js";import"./create-context-D9pv5gHz.js";import"./factory-C3zSMasy.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-D0aSbQI3.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-ChpTWvap.js";import"./index-LR3ipeoe.js";import"./index-8ngC4mk-.js";import"./use-locale-context-CjVEHTb9.js";import"./use-event-D6LH5rLg.js";import"./index-CbkX2Qbl.js";import"./useColorFormatConverter-DGTUtD3h.js";import"./index-Chmdyods.js";import"./ReactIconWrapper-DxV7FnZA.js";import"./input-group-DjYsIErR.js";import"./input-RGLUFxJe.js";import"./useTranslation-BK1ANhsz.js";import"./context-C0T65-Ns.js";import"./portal-BaTyFJ2U.js";import"./v-stack-CtReTOiM.js";import"./menu-CfLvSNQQ.js";import"./icons-DP0bG89f.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-CE9gB62E.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<Option<string | number>[]>([]);
    const handleSaveClick = (newSelectedOptions: Option<string | number>[]) => {
      setSelectedOptions(newSelectedOptions);
    };
    return <MultiSelectDropdown {...args} selectedOptions={selectedOptions} onSaveClick={handleSaveClick} setSelectedOptions={setSelectedOptions} />;
  },
  args: {
    options: [{
      value: 1,
      label: "Apple",
      desc: "Fruit"
    }, {
      value: 2,
      label: "Banana",
      desc: "Fruit"
    }, {
      value: 3,
      label: "Carrot",
      desc: "Vegetable"
    }, {
      value: 4,
      label: "Date",
      desc: "Fruit"
    }, {
      value: 5,
      label: "Eggplant",
      desc: "Vegetable"
    }],
    placeholder: "Select Produce"
  }
}`,...(c=(p=r.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => {
    const [selectedOptions, setSelectedOptions] = useState<Option<string | number>[]>([]);
    const handleSaveClick = (newSelectedOptions: Option<string | number>[]) => {
      setSelectedOptions(newSelectedOptions);
    };
    return <MultiSelectDropdown {...args} selectedOptions={selectedOptions} onSaveClick={handleSaveClick} setSelectedOptions={setSelectedOptions} />;
  },
  args: {
    search: true,
    options: [{
      value: 1,
      label: "Apple",
      desc: "Fruit"
    }, {
      value: 2,
      label: "Banana",
      desc: "Fruit"
    }, {
      value: 3,
      label: "Carrot",
      desc: "Vegetable"
    }, {
      value: 4,
      label: "Date",
      desc: "Fruit"
    }, {
      value: 5,
      label: "Eggplant",
      desc: "Vegetable"
    }],
    placeholder: "Select Produce"
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ye=["Default","Search"];export{r as Default,o as Search,ye as __namedExportsOrder,we as default};
