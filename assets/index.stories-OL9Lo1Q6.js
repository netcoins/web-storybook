import{j as b}from"./jsx-runtime-BLW7vmIs.js";import{r as g}from"./index-BuciqDi9.js";import{M as i}from"./index-5qFSx-gA.js";import"./iframe-DiZSclG8.js";import"./index-J01YztF2.js";import"./types-BX_FZ5N3.js";import"./color-mode-Dxala48Y.js";import"./iconBase-C3K2rWt0.js";import"./icon-button-BhaBh6Ba.js";import"./button-DwPqojo3.js";import"./factory-CQh60Vfe.js";import"./create-recipe-context-D7jXOWUf.js";import"./attr-DhmmAXiK.js";import"./spinner-fJR9AYKk.js";import"./skeleton-CFVHW_tn.js";import"./index-D_bZ587B.js";import"./stack-Du1QtMiS.js";import"./flex-Dc63DRfh.js";import"./icon-D7P6YC7o.js";import"./index-Bwe7Da_z.js";import"./index-BdJE0igq.js";import"./index-C56QOh0c.js";import"./index.esm-CotADk9P.js";import"./index-qtqEDoBs.js";import"./index-dKLz0I_1.js";import"./link-B4i8I74z.js";import"./types-I5b3Ifx_.js";import"./h-stack-lcEUEhH7.js";import"./field-C8LX5nN2.js";import"./create-slot-recipe-context-Dj9vmKFq.js";import"./use-field-context-Cqz2Vk_N.js";import"./create-context-D0c93ZHP.js";import"./factory-BgJucH8z.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-DmXLTmo3.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-87lNcsQn.js";import"./index-oN33ymx3.js";import"./index-BaJITF0q.js";import"./use-locale-context-B845lndu.js";import"./use-event-X0U5LbM3.js";import"./index-HlWGanMP.js";import"./useColorFormatConverter-DOeSRWk6.js";import"./index-Qx5QikyW.js";import"./ReactIconWrapper-BTu6MGrR.js";import"./input-group-C9whkEf1.js";import"./input-BbJE9QF1.js";import"./useTranslation-6mM8BpKG.js";import"./context-0b5LUJD6.js";import"./portal-CB73i-9f.js";import"./v-stack-BfQYNLDp.js";import"./menu-Bt1t7csX.js";import"./icons-r9qCEGln.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-VWuPa0EL.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
