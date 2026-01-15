import{j as b}from"./jsx-runtime-Cvbzbb4L.js";import{r as g}from"./index-Bk_lK4dE.js";import{M as i}from"./index-WKZrP645.js";import"./iframe-BANvMm9q.js";import"./index-B-9Wq1os.js";import"./types-kGfg81NG.js";import"./color-mode-Bs0Z5gnl.js";import"./iconBase-CKnDgKXJ.js";import"./icon-button-DvH2sKob.js";import"./button-D6K6SuhU.js";import"./factory-C9gVng0o.js";import"./create-recipe-context-BGOEO3ph.js";import"./attr-DhmmAXiK.js";import"./spinner-CvdZAnEr.js";import"./skeleton-l1pwevfO.js";import"./index-DB9703Tc.js";import"./stack-NoryMxyE.js";import"./flex-CimcCm75.js";import"./icon-Ghh1BD4w.js";import"./index-DY4-VTHJ.js";import"./index-BoCSVRng.js";import"./index-D8wyHM-w.js";import"./index.esm-BLPaJsVZ.js";import"./index-B9rUSflb.js";import"./index-D5RNH5Gu.js";import"./link-FcbUd9Hl.js";import"./types-jNYe16-l.js";import"./h-stack-CYnRK9ej.js";import"./field-Bmvm4axY.js";import"./create-slot-recipe-context-c-kSauhy.js";import"./use-field-context-MsGG_O4V.js";import"./create-context-CoWaMeE1.js";import"./factory-oKi7FqA4.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C0ILbdRR.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-BUxGXZRA.js";import"./index-hbx5MZN1.js";import"./index-D5p_im79.js";import"./use-locale-context-nuxHRxt6.js";import"./use-event-CpHunfgM.js";import"./index-DgVaXdpT.js";import"./useColorFormatConverter-B3hvhfbR.js";import"./index-BEvLBB82.js";import"./ReactIconWrapper-Cx7VlQ-8.js";import"./input-group-ZRSUQcQx.js";import"./input-DsdY4g9o.js";import"./useTranslation-BOUHeP_h.js";import"./context-B6UT5zVr.js";import"./portal-D8oLY9XX.js";import"./v-stack-BAe3bpfk.js";import"./menu-i0szRa2y.js";import"./icons-Chn8PkmL.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-3tUKMedf.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
