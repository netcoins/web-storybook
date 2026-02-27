import{j as b}from"./jsx-runtime-Bd_uLZfo.js";import{r as g}from"./index-CxgFRPn3.js";import{M as i}from"./index-DyGR_Hp7.js";import"./iframe-CpMX_H7h.js";import"./index-BAQtxJyp.js";import"./types-BGt7So9X.js";import"./color-mode-C2okSAE4.js";import"./iconBase-DBTKs5ob.js";import"./icon-button-7dECXTm3.js";import"./button-BohgLnyo.js";import"./factory-gFx2QpjB.js";import"./create-recipe-context-DlBQf-jJ.js";import"./attr-DhmmAXiK.js";import"./spinner-CcCwajFp.js";import"./skeleton-V48d_c0o.js";import"./index-BUaUGkZ6.js";import"./stack-DfBA5ubA.js";import"./flex-VN0Y51Kf.js";import"./icon-Yfl4fxs0.js";import"./index-rxs8zegI.js";import"./index-9W3rtxoL.js";import"./index-Z_6WMktT.js";import"./index.esm-C1ROrdFb.js";import"./index-iodvhPMh.js";import"./link-CL8fo50D.js";import"./types-DB6FsCIZ.js";import"./index-DNcPTpfQ.js";import"./h-stack--BLLcCGu.js";import"./field-CORTpBW9.js";import"./create-slot-recipe-context-Tv3_qOYc.js";import"./use-field-context-D1--f4KZ.js";import"./create-context-C3qGVebL.js";import"./factory-CRHGz7QR.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Da9G7YOs.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DJOn_u41.js";import"./index-hTXVmOLT.js";import"./index-D40lv6CI.js";import"./use-locale-context-C1k0J02f.js";import"./use-event-DpMz9I9K.js";import"./index-Ck5abJWr.js";import"./useColorFormatConverter-CkSlUbtC.js";import"./index-DLYVuwIE.js";import"./ReactIconWrapper-C07uXPYJ.js";import"./input-group-B8KonVGD.js";import"./input-Bv4z4JNX.js";import"./useTranslation-AEe-PVSQ.js";import"./context-Cp0tEk8J.js";import"./portal-Cy4Gn-zx.js";import"./v-stack-U7aT1gD5.js";import"./menu-DtuC0zn1.js";import"./icons-BqczjFFQ.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DdnrkG75.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="ced1927d-dedd-4016-985a-e31908899b2c",e._sentryDebugIdIdentifier="sentry-dbid-ced1927d-dedd-4016-985a-e31908899b2c")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ee=["Default","Search"];export{r as Default,o as Search,Ee as __namedExportsOrder,ye as default};
