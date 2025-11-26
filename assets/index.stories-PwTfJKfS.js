import{j as b}from"./jsx-runtime-BvBIwShg.js";import{r as g}from"./index-CDcfhRZO.js";import{M as i}from"./index-B1fKzgVN.js";import"./iframe-Ce724jq7.js";import"./index-BSCu76ar.js";import"./index-B1gw3FZT.js";import"./types-B409BuZL.js";import"./factory-0Wnaaj7g.js";import"./button-yImkGRrp.js";import"./context-CmScT-zJ.js";import"./use-style-config-Dj-RQsNg.js";import"./spinner-Dl2x9WxQ.js";import"./emotion-react.browser.esm-CbOQaUqZ.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-rWySpHWW.js";import"./flex-Do7w5v-x.js";import"./icon-dnSoyjh2.js";import"./text-B7cnHvWE.js";import"./index-C4Eo_kxc.js";import"./index-B97o9LCK.js";import"./index.esm-hhJQ9cYX.js";import"./index-DSGojdNy.js";import"./index-BfSf7RSQ.js";import"./iconBase-CETdczyv.js";import"./link-Ckov4bZD.js";import"./types-BgdgFazP.js";import"./form-control-hMrgMqrd.js";import"./h-stack-BUjAYq6V.js";import"./stack-eNwsQ4dR.js";import"./responsive-BRUd9t8z.js";import"./children-B48MNwnK.js";import"./use-checkbox-Dz0A94w_.js";import"./use-form-control-DDE0fgQt.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-uALQ6eL1.js";import"./use-safe-layout-effect-CDow6Rym.js";import"./use-update-effect-C75-GgUB.js";import"./index-CSG0UUMf.js";import"./useColorFormatConverter-tAW6LAVI.js";import"./ReactIconWrapper-cthae5I8.js";import"./input-group-BCYucYTA.js";import"./input-addon-CWChCS7n.js";import"./input-CW6EN-52.js";import"./useTranslation-DQZOAjNq.js";import"./context-CRQJeN3k.js";import"./box-sNQzjEPu.js";import"./menu-vv3iFZpN.js";import"./use-descendant-BG9BLeM6.js";import"./use-popper-CYAqpaxH.js";import"./use-event-listener-BmH9ZPbY.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-DDlW0rEu.js";import"./use-disclosure-BlMDU38O.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-2HN8D7Pw.js";import"./menu-list-Du8NkYX0.js";import"./motion-BBnsZVam.js";import"./v-stack-B9er-Ify.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
