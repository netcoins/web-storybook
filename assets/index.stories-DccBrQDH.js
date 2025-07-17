import{j as b}from"./jsx-runtime-CQAa4qDQ.js";import{r as g}from"./index-OILgKo3Z.js";import{M as i}from"./index-IBUNrPMG.js";import"./iframe-Cx_R9WK5.js";import"./index-BM7tOyK9.js";import"./index-C7PCIh9B.js";import"./types-eJVZr6dl.js";import"./use-style-config-j-GZR9Oi.js";import"./button-DimVdYr1.js";import"./context-CJ8BW1lH.js";import"./spinner-D5CHtvJn.js";import"./emotion-react.browser.esm-D1FLUpTm.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-S0LPA916.js";import"./flex-D2Ruh6ZN.js";import"./icon-C-nmj33d.js";import"./text-MAXgvpEP.js";import"./index-CsRdoNXr.js";import"./index-BP-OA4Gm.js";import"./index.esm-CBXh4UhA.js";import"./index-BoLjnouv.js";import"./index-B4gmFqFq.js";import"./iconBase-_SEFdOfM.js";import"./link-CmVv-xVa.js";import"./index-PBDA1Yqp.js";import"./index-Dl00q9dp.js";import"./useColorFormatConverter-BYj70T_c.js";import"./index-C-pSWYMG.js";import"./IconWrapper-DluD9LYt.js";import"./box-BUJHURtG.js";import"./form-control-C4Cg1bVr.js";import"./form-label-CN94gbud.js";import"./input-group-GJMUY7Dk.js";import"./children-rlgTPJZ4.js";import"./input-addon-DNzzIGrZ.js";import"./input-09ffhbUc.js";import"./use-form-control-Bc3PeJfc.js";import"./call-all--NRVVPhS.js";import"./input-element-B066tuwJ.js";import"./h-stack-BsohL-qU.js";import"./stack-qMFc6gl-.js";import"./responsive-DZP0y-tI.js";import"./use-checkbox-BY-Mvx9C.js";import"./use-callback-ref-D7H7xxcL.js";import"./use-safe-layout-effect-Cio8XRX9.js";import"./use-update-effect-BrkH73du.js";import"./index-DibNuyQU.js";import"./ReactIconWrapper-RNSBfswf.js";import"./useTranslation-3cz9vb_7.js";import"./context-BDEVUT7d.js";import"./menu-list-Cf9yHqZp.js";import"./use-descendant-DNBSiVyu.js";import"./use-popper-CqOKbpy-.js";import"./use-event-listener-DZmsqnDD.js";import"./focusable-DpwIps9l.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-LqjlHXFX.js";import"./use-disclosure-DPAGEqo2.js";import"./lazy-oo6M69xf.js";import"./motion-CiI77fs7.js";import"./v-stack-OWAuvVX6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c99cf149-1f5b-4d82-82a7-51ca0dffbc68",e._sentryDebugIdIdentifier="sentry-dbid-c99cf149-1f5b-4d82-82a7-51ca0dffbc68")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
