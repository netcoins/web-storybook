import{j as b}from"./jsx-runtime-CIqfBLiW.js";import{r as g}from"./index-k1jG6xPF.js";import{M as i}from"./index-CpoxlNPv.js";import"./iframe-CgiJZm3J.js";import"./index-E6rwqANW.js";import"./index-Lk48kYTW.js";import"./types-B9ro9maI.js";import"./factory-DGji_UzY.js";import"./button-32jUwA7i.js";import"./context-DUOxryss.js";import"./use-style-config-DID0GbhU.js";import"./spinner-ucY9bJ_5.js";import"./emotion-react.browser.esm-C5I8tLOS.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DfiD8wIE.js";import"./flex-DG9TD6-J.js";import"./icon-FneL2-dz.js";import"./text-0vmpramh.js";import"./index-BNdLjL0h.js";import"./index-Bn6SnRGy.js";import"./index.esm-sb9XZy4D.js";import"./index-DJGYbd1n.js";import"./index-B0bugIJk.js";import"./iconBase-CDzHQ3cO.js";import"./link-BQnkbd0f.js";import"./types-qxRC8LDa.js";import"./form-control-Brrh6gVB.js";import"./h-stack-kSoFQYzM.js";import"./stack-DPq8uHsY.js";import"./responsive-wqZbt8Z5.js";import"./children-Ba6STUgf.js";import"./use-checkbox-BUUznbof.js";import"./use-form-control-4mUeMgol.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-C71cmK3f.js";import"./use-safe-layout-effect-vuqKibam.js";import"./use-update-effect-qaQ-aU4k.js";import"./index-CLllZ8F-.js";import"./useColorFormatConverter-0uxC8t_G.js";import"./ReactIconWrapper-CEzjKQ4X.js";import"./input-group-B_NnEzkr.js";import"./input-addon-DesMqWLV.js";import"./input-C_fDvq3K.js";import"./useTranslation-BclWYDZd.js";import"./context-CBf-X5km.js";import"./box-Bzwi0K9I.js";import"./menu-Die-OPCz.js";import"./use-descendant-Ji-4j_kf.js";import"./use-popper-BA9rhYLp.js";import"./use-event-listener-BC-P5lEF.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BDkGSf8w.js";import"./use-disclosure-CvK4U0RW.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DU-JbOri.js";import"./menu-list-BCFEh9NY.js";import"./motion-CQZoWQSz.js";import"./v-stack-Bd9gAqLm.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8126297a-4321-49ce-a160-c82d6a789f18",e._sentryDebugIdIdentifier="sentry-dbid-8126297a-4321-49ce-a160-c82d6a789f18")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
