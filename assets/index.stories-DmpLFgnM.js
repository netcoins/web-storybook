import{j as b}from"./jsx-runtime-nFzByLiI.js";import{r as g}from"./index-CGZuSIq3.js";import{M as i}from"./index-C49sjvLO.js";import"./iframe-Bw6Up1i9.js";import"./index-Dl4uIM9L.js";import"./types-CNT9cKmJ.js";import"./color-mode-DNPU-OQz.js";import"./iconBase-CSMb_o5_.js";import"./icon-button-aBf93WeK.js";import"./button-DvW9NqUH.js";import"./factory-Btb8DIP_.js";import"./create-recipe-context-Dunp_Aku.js";import"./attr-DhmmAXiK.js";import"./spinner-C5bpsrGQ.js";import"./skeleton-D0FbdEAz.js";import"./index-DrqUaSaV.js";import"./stack-B45SJNnS.js";import"./flex-Chy164kH.js";import"./icon-CDLMSUbn.js";import"./index-Bap8cVM3.js";import"./index-Bq_l3bmK.js";import"./index-Crd8uaEm.js";import"./index.esm-DY1OEX1l.js";import"./index-VNMhfeE6.js";import"./link-iaxgTgUj.js";import"./types-BUI7fWe3.js";import"./index-pwhw57S2.js";import"./h-stack-CtQDN0FK.js";import"./field-CMz-YaxU.js";import"./create-slot-recipe-context-DLA_dLZQ.js";import"./use-field-context-D8ht8QAy.js";import"./create-context-Ixa4SXUd.js";import"./factory-DGthlQ1F.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BG-JW8dt.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-DMJnktWT.js";import"./index-C9ygYplY.js";import"./index-BevH-wRg.js";import"./use-locale-context-kAYMFkbv.js";import"./use-event-D2eprp5e.js";import"./index-EMJTt_Wf.js";import"./useColorFormatConverter-BfRVT7OR.js";import"./index-DYkQXI9g.js";import"./ReactIconWrapper-vIdd6ybs.js";import"./input-group-BA3AsbkE.js";import"./input-B5pAjb5J.js";import"./useTranslation-DuMCvqKF.js";import"./context-B-_7aQMa.js";import"./portal-tkxuokx_.js";import"./v-stack-CDcxlISZ.js";import"./menu-COH1SZsq.js";import"./icons-D7257whU.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-CHpgECfk.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
