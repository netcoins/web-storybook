import{j as b}from"./jsx-runtime-BpYqQpYB.js";import{r as g}from"./index-DjG89Z2B.js";import{M as i}from"./index-DyB0GYj0.js";import"./iframe-vEyeFhkB.js";import"./index-CAGvx-Or.js";import"./index-2a_E6WzE.js";import"./types-B2SFjECo.js";import"./factory-3DviKehv.js";import"./button-GFJ_Re9F.js";import"./context-C5A39F5l.js";import"./use-style-config-B4krmTsC.js";import"./spinner-BrvMtYGz.js";import"./emotion-react.browser.esm-D6eAGPOF.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BTanDmtf.js";import"./flex-C8ffAcKe.js";import"./icon-DA8n6PgO.js";import"./text-jTJ9VSZj.js";import"./index-DWCWtfNA.js";import"./index-CzTgmPdg.js";import"./index.esm-DoyaEO4D.js";import"./index-CVtXRfuV.js";import"./index-CO2tabdQ.js";import"./iconBase-HBcpiIgO.js";import"./link-ACLu2djc.js";import"./types-CgeYtEi4.js";import"./form-control-D4PiLWX7.js";import"./h-stack-BXgTqPiD.js";import"./stack-BfDSZOon.js";import"./responsive-Rk1tAcWv.js";import"./children-C3P3kTPv.js";import"./use-checkbox-F0762WXa.js";import"./use-form-control-Ro9pFThm.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BbtNEzqx.js";import"./use-safe-layout-effect-BFAZaPli.js";import"./use-update-effect-Ckbjrd2C.js";import"./index-DpivHQgb.js";import"./useColorFormatConverter-CDBIy4xD.js";import"./ReactIconWrapper-86ofK8JI.js";import"./input-group-CgYvaq4f.js";import"./input-addon-C2NoGl5t.js";import"./input-7MeT6rPX.js";import"./useTranslation-CfT839Cp.js";import"./context-DBWJTjhB.js";import"./box-3BWZ-P-F.js";import"./menu-CCwC-ehi.js";import"./use-descendant-C_WAsysL.js";import"./use-popper-CEOFY1pD.js";import"./use-event-listener-DL0pOkPD.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-ok33nr8B.js";import"./use-disclosure-BR5EWT2I.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-p30GLkMt.js";import"./menu-list-O9zu8_UD.js";import"./motion-DDmYOQ7n.js";import"./v-stack-CuTh0BKL.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8126297a-4321-49ce-a160-c82d6a789f18",e._sentryDebugIdIdentifier="sentry-dbid-8126297a-4321-49ce-a160-c82d6a789f18")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
