import{j as b}from"./jsx-runtime-61X6p04z.js";import{r as g}from"./index-FTHuyDgz.js";import{M as i}from"./index-C7CRbm0B.js";import"./iframe-w46rLmyV.js";import"./index-Deg6ioc1.js";import"./types-Htb8MD6O.js";import"./color-mode-5Ju0sEEN.js";import"./iconBase-Dn9Bs-L0.js";import"./icon-button-YEPExeRt.js";import"./button-C_1-umRw.js";import"./factory-1wIWHVn8.js";import"./create-recipe-context-51Wky_FY.js";import"./attr-DhmmAXiK.js";import"./spinner-Hh8fXAcT.js";import"./skeleton-GQSww-ul.js";import"./index-CIBiqLQk.js";import"./stack-CpKMBVjm.js";import"./flex-DOwOL4aM.js";import"./icon-BDrRINN6.js";import"./index-C1MnbaMG.js";import"./index-DBMOUP9Z.js";import"./index-C8gbJfdZ.js";import"./index.esm-CgJdVPbZ.js";import"./index-DCzpXCQR.js";import"./link-pQldUqwa.js";import"./types-B25YbRo0.js";import"./index-BLDur28M.js";import"./h-stack-C7YDIfC7.js";import"./field-Bi9gTM-F.js";import"./create-slot-recipe-context-CUHxvQJC.js";import"./use-field-context-BcJXzOac.js";import"./create-context-BhmVO2sS.js";import"./factory-B4n7juWv.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Cf8zmWsa.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-w-UAPwIN.js";import"./index-D1W9R6k_.js";import"./index-Cp15CQdA.js";import"./use-locale-context-BrabtY5T.js";import"./use-event-Bepjx-Jr.js";import"./index-tofAPn_H.js";import"./useColorFormatConverter-B_rbyqSE.js";import"./index-7R0dq5IQ.js";import"./ReactIconWrapper-BEomCaAl.js";import"./input-group-6wWCWxHL.js";import"./input-C3saveQT.js";import"./useTranslation-DPERHxE3.js";import"./context-D8v8lQS4.js";import"./portal-Cn4yajdo.js";import"./v-stack-D4Vxm39z.js";import"./menu-Dl8QbleQ.js";import"./icons-Of5vkunC.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CCbbFd7o.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
