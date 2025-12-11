import{j as b}from"./jsx-runtime-CV680pqn.js";import{r as g}from"./index-DL9vO-rj.js";import{M as i}from"./index-hhg4nWlS.js";import"./iframe-DCqy6VzA.js";import"./index-QTNSNTZR.js";import"./index-B8IUy553.js";import"./types-Bs4OvTV8.js";import"./factory-D3yNxF8l.js";import"./button-CTQ2jDxh.js";import"./context--KVgOoiA.js";import"./use-style-config-Cbgaf-5n.js";import"./spinner-OIw-2hoQ.js";import"./emotion-react.browser.esm-W6MFcgzQ.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-tYiOXfA7.js";import"./flex-vj2tIqhx.js";import"./icon-2SqZ_3hO.js";import"./text-DKjMziLV.js";import"./index-BZEgXS0A.js";import"./index-CIqFC4wM.js";import"./index.esm-DHF0ek0D.js";import"./index-CckExQ3b.js";import"./index-DY1ieXN2.js";import"./iconBase-DMxfJ9H4.js";import"./link-D9AJyviA.js";import"./types-Cv2gSuHh.js";import"./form-control-DjhdtlDf.js";import"./h-stack-BFGT5915.js";import"./stack-aQUZKVkL.js";import"./responsive-CsPDZzkR.js";import"./children-B-3IhWZF.js";import"./use-checkbox-79k9sKr-.js";import"./use-form-control-LAj_GkV_.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-D8IQrGma.js";import"./use-safe-layout-effect-CMAg2atf.js";import"./use-update-effect-0eXWhn6w.js";import"./index-CcIPNv7S.js";import"./useColorFormatConverter-DLrIFdCL.js";import"./ReactIconWrapper-cliMcWPQ.js";import"./input-group-CnJASgGB.js";import"./input-addon-CUuHkqIY.js";import"./input-CneCRmbl.js";import"./useTranslation-CAfaLACr.js";import"./context-DKSDWGLU.js";import"./box-62PiFcGi.js";import"./menu-Cz6c3Q5n.js";import"./use-descendant-D4WdyLjm.js";import"./use-popper-BTpP3ilY.js";import"./use-event-listener-CCxWZA2q.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CwI9u2lN.js";import"./use-disclosure-sCokM12n.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DUCZE7kV.js";import"./menu-list-C03Zycm8.js";import"./motion-CqhC07O6.js";import"./v-stack-ChZGZXOa.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
