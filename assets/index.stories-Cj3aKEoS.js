import{j as b}from"./jsx-runtime-NTOSteDC.js";import{r as g}from"./index-BgMO5fMJ.js";import{M as i}from"./index-D9dMJObP.js";import"./iframe-BUkh0iid.js";import"./index-C28A_p0A.js";import"./types-hv3_Alju.js";import"./color-mode-BcHFebzq.js";import"./iconBase-DFcsPij6.js";import"./icon-button-Dqr5M8AQ.js";import"./button-D3WYPjbr.js";import"./factory-YZL-MebO.js";import"./create-recipe-context-B6lnw0jF.js";import"./attr-DhmmAXiK.js";import"./spinner-DE_vzF3w.js";import"./skeleton-DQ_uYc-n.js";import"./index-hC8Z7bH0.js";import"./stack-DAh5ySsY.js";import"./flex-ZuSbZT_S.js";import"./icon-FGasikD9.js";import"./index-BT4bpkGG.js";import"./index-ONHcMoAU.js";import"./index-FeLt8IUj.js";import"./index.esm-4RWL7zEk.js";import"./index-Cu5ItxqC.js";import"./link-DheLqfli.js";import"./types-DrJRwLph.js";import"./index-BUb9W5xT.js";import"./h-stack-CIS-XTTr.js";import"./field-BPsqSJt3.js";import"./create-slot-recipe-context-CSuvDXA8.js";import"./use-field-context-DkQC7Qif.js";import"./create-context-C3vEtmld.js";import"./factory-C2f8oxBE.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DE0oUeWy.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-CsHhQW3k.js";import"./index-Dq0nvIc1.js";import"./index-B6rq3HoU.js";import"./use-locale-context-CYQX9JWo.js";import"./use-event-Do_RBIRI.js";import"./index-WPNXvGk-.js";import"./useColorFormatConverter-Dwm3Owkt.js";import"./index-DekC8wCP.js";import"./ReactIconWrapper-DWjTWd-J.js";import"./input-group-D6xzLdOS.js";import"./input-CqUf8Qk5.js";import"./useTranslation-torXD0NT.js";import"./context-BDrRBMaq.js";import"./portal-CRlldCw5.js";import"./v-stack-BC4l-pJ7.js";import"./menu-BSnmdVxs.js";import"./icons-BzoHp-Jq.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CFxS-foc.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
