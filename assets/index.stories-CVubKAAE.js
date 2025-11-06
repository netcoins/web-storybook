import{j as b}from"./jsx-runtime-DRShBPeI.js";import{r as g}from"./index-B2VlJjWb.js";import{M as i}from"./index-B_vxWt22.js";import"./iframe-ZaC8Zwxx.js";import"./index-DUYYrBt-.js";import"./index-HhqmLXvV.js";import"./types-BdfBcD7J.js";import"./factory-B11hK46P.js";import"./button-BLcaXX5h.js";import"./context-9lk6S7mv.js";import"./use-style-config-CQiCiY0w.js";import"./spinner-9XCehkc3.js";import"./emotion-react.browser.esm-D_jsQVjo.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CaaoeaH1.js";import"./flex-CBhiFaCq.js";import"./icon-CSAX3RXN.js";import"./text-BpvxKdaS.js";import"./index-BVOLCF7s.js";import"./index-Duamm1vV.js";import"./index.esm-eIQvhiLt.js";import"./index-BThC0BT-.js";import"./index-BLWuU74u.js";import"./iconBase-XGm4wShi.js";import"./link-BJXagm_i.js";import"./types-CXEp9DoE.js";import"./form-control-CrsV1wc2.js";import"./h-stack-DnRx5ISi.js";import"./stack-0vy5Mf0c.js";import"./responsive-DCzlBjhn.js";import"./children-2YnUwPMn.js";import"./use-checkbox-C3q4kKq2.js";import"./use-form-control-ClhQd8mQ.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-pSlB-86q.js";import"./use-safe-layout-effect-BOcaohG-.js";import"./use-update-effect-DLdFmM7w.js";import"./index-CVrqKlhc.js";import"./useColorFormatConverter-Mh-p7jcA.js";import"./ReactIconWrapper-DzsEI_NN.js";import"./input-group-c4aC6PA3.js";import"./input-addon-DhYup8yH.js";import"./input-BvBkdgg6.js";import"./useTranslation-DgBTnmVJ.js";import"./context-CWgnlxL2.js";import"./box-DEPENExG.js";import"./menu-C4Y33tI2.js";import"./use-descendant-ChDe9duZ.js";import"./use-popper-4omhdE9N.js";import"./use-event-listener-BqH9Rm-o.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-uChf0V6t.js";import"./use-disclosure--XPy7Saq.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-y3ihuZ_7.js";import"./menu-list-CVIEmf7T.js";import"./motion-BdxV3QwL.js";import"./v-stack-BemdOM4u.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c27c8bbf-ebd0-45f4-a1dc-524cb0aa60ba",e._sentryDebugIdIdentifier="sentry-dbid-c27c8bbf-ebd0-45f4-a1dc-524cb0aa60ba")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Fe=["Default","Search"];export{r as Default,o as Search,Fe as __namedExportsOrder,De as default};
