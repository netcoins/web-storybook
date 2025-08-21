import{j as b}from"./jsx-runtime-NFq79fyV.js";import{r as g}from"./index-RAwrHW_h.js";import{M as i}from"./index-nQLGWlgo.js";import"./iframe-CxkFxdSA.js";import"./index-BRNqU0If.js";import"./index-BvbCDRNO.js";import"./types-B_dmd8L2.js";import"./use-style-config-BenyQIu3.js";import"./button-9CxX0Tp6.js";import"./context-DT_moMtn.js";import"./spinner-C786U4JJ.js";import"./emotion-react.browser.esm-DQ-YqFV4.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DIbw1re7.js";import"./flex-OVi7ykzh.js";import"./icon-txVS3clY.js";import"./text-C_4VDKuL.js";import"./index-qpJ_MXY_.js";import"./index-DYZrmZ2w.js";import"./index.esm-CM2IfhKT.js";import"./index-Byf53S5X.js";import"./index-CCmJI5cF.js";import"./iconBase-DtfGjKSI.js";import"./link-DWmtrSbL.js";import"./index-BaZYVsvL.js";import"./index-DixeMPPK.js";import"./useColorFormatConverter-NYn5O-zK.js";import"./index-DvTbSKHG.js";import"./IconWrapper-Dp64iUQq.js";import"./box-o87Yx8vG.js";import"./form-control-DlkMDdY5.js";import"./form-label-CgozJPuY.js";import"./input-group-CJXr4NIn.js";import"./children-CSce1ZK7.js";import"./input-addon-C_dBzK9B.js";import"./input-C-NBut_r.js";import"./use-form-control-tbLU_zHe.js";import"./call-all--NRVVPhS.js";import"./input-element-B2oMZCfK.js";import"./h-stack-DgZrKvs0.js";import"./stack-lVinR5ZN.js";import"./responsive-Cyxbk1_i.js";import"./use-checkbox-JQcM0bU6.js";import"./use-callback-ref-BLcLNgNt.js";import"./use-safe-layout-effect-BtKOlutr.js";import"./use-update-effect-CvE6moq8.js";import"./index-CWTAZYND.js";import"./ReactIconWrapper-ClzRevr4.js";import"./useTranslation-IfhETD2Y.js";import"./context-dlAKIVwU.js";import"./menu-list-C7AfFKoe.js";import"./use-descendant-CrkzGTPZ.js";import"./use-popper-DDtLHrjS.js";import"./use-event-listener-CF9N7m5V.js";import"./focusable-BqVRhDUB.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-QACPdsJa.js";import"./use-disclosure-CkOEObSW.js";import"./lazy-oo6M69xf.js";import"./motion-kodGPdyG.js";import"./v-stack-D1L66CCa.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8a47d5b4-62c5-4a74-b993-3681369bb401",e._sentryDebugIdIdentifier="sentry-dbid-8a47d5b4-62c5-4a74-b993-3681369bb401")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
