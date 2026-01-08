import{j as b}from"./jsx-runtime-Dhrbqpri.js";import{r as g}from"./index-CzSRUdrE.js";import{M as i}from"./index-BlFh8_Ba.js";import"./iframe-C8I02Bx3.js";import"./index-D1fO4OLZ.js";import"./index-Dq1R9zO6.js";import"./types-Bw3DbmIu.js";import"./factory-CBrbN6_W.js";import"./button-BflO-QOH.js";import"./context-DwezA3OE.js";import"./use-style-config-kh6Tc1aV.js";import"./spinner-C_sJvbn2.js";import"./emotion-react.browser.esm-Yq-PyLc8.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BZyy81Es.js";import"./flex-Cs8ShCrJ.js";import"./icon-BDLVmkxC.js";import"./text-Bt5-f5YI.js";import"./index-DtYmMO-x.js";import"./index-DUZyenWI.js";import"./index.esm-D624K_DY.js";import"./index-BfDhjCed.js";import"./index-6BCkbKkZ.js";import"./iconBase-Dsms7VPy.js";import"./link-CvIZnnRl.js";import"./types-rqaDjOut.js";import"./form-control-nv1pV6SB.js";import"./h-stack-BcyHCJ7a.js";import"./stack-Bz0_VSNn.js";import"./responsive-D_6LUXIn.js";import"./children-CRy4xU31.js";import"./use-checkbox-BwwtbQqR.js";import"./use-form-control-BCG9IpQT.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BvsL_xqi.js";import"./use-safe-layout-effect-BBg335iZ.js";import"./use-update-effect-Sb3YueJ2.js";import"./index-DZ_lYE3C.js";import"./useColorFormatConverter-D64kaTrg.js";import"./ReactIconWrapper-vBu3cUh6.js";import"./input-group-VlDJuIxa.js";import"./input-addon-B2DcNt5X.js";import"./input-DN3nsuQG.js";import"./useTranslation-BVvpdxkv.js";import"./context-B4zj4gMf.js";import"./box-CTSBZsvQ.js";import"./menu-DWV_Kwmg.js";import"./use-descendant-CqO_VXa3.js";import"./use-popper-DtipXCmM.js";import"./use-event-listener-DzueSwTk.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-DcMH9WWm.js";import"./use-disclosure-Cuggu3Cz.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BTZaeJbe.js";import"./menu-list-DQJnZJTZ.js";import"./motion-Bbp5MH_k.js";import"./v-stack-BWftV88w.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
