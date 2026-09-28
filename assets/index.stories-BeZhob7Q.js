import{j as b}from"./jsx-runtime-29Qfk9KL.js";import{r as g}from"./index-DNGu3sjt.js";import{M as i}from"./index-mN2_JqFe.js";import"./iframe-TOhJAv1u.js";import"./index-BKCIAVMb.js";import"./types-B6HYA5yd.js";import"./color-mode-eEnzZioz.js";import"./iconBase-0YgzzPuf.js";import"./icon-button-Dbupu2Hn.js";import"./button-CoO1RO3x.js";import"./factory-DLijOqeV.js";import"./create-recipe-context-BFVYoSYo.js";import"./attr-DhmmAXiK.js";import"./spinner-DYjKBXcP.js";import"./skeleton-BNyv3Gtv.js";import"./index-B3wK-pie.js";import"./stack-CeITEkXz.js";import"./flex-PuTe28AO.js";import"./icon-CL_v9C79.js";import"./index-CGHJav7I.js";import"./index-QN2lgaLx.js";import"./index-474OlfrP.js";import"./index.esm-jNa1J-tp.js";import"./index-DZPcegR9.js";import"./link-edomRBph.js";import"./types-Ctd9Yju_.js";import"./index-Bk5AU3ZK.js";import"./h-stack-ATbW2PCN.js";import"./field-BPnbzDPd.js";import"./create-slot-recipe-context-DHVJLOri.js";import"./use-field-context-B8kDCP13.js";import"./create-context-CkT0tWSw.js";import"./factory-BYUBUBzB.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CnTHevb8.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-DJaz1NvF.js";import"./index-CrIMUGgR.js";import"./index-h7__Mhkq.js";import"./use-locale-context-CI6jNlfZ.js";import"./use-event-Cooty9RI.js";import"./index-DNcY4Ukb.js";import"./useColorFormatConverter-BUVQ_yu9.js";import"./index-Dkc7SIy7.js";import"./ReactIconWrapper-D8wuKfeI.js";import"./input-group-CyYky3ak.js";import"./input-yhJSON8T.js";import"./useTranslation-CnF6If2R.js";import"./context-DR2RJ_w1.js";import"./portal-BovRLtgJ.js";import"./v-stack-BJSki3zy.js";import"./menu-BLnKLanb.js";import"./icons-pDmrogWB.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-CgZFnzUq.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
