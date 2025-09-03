import{j as b}from"./jsx-runtime-DYS3PmO5.js";import{r as g}from"./index-G1StbVMZ.js";import{M as i}from"./index-T0FgtMoX.js";import"./iframe-CHXOveE0.js";import"./index-DfSQI7lc.js";import"./index-CXhamRV4.js";import"./types-Cnkok5xI.js";import"./factory-DT96eYgU.js";import"./button-Bvjy7dLD.js";import"./context-CX54VVWl.js";import"./use-style-config-CHATY7L4.js";import"./spinner-Bdy0hgj6.js";import"./emotion-react.browser.esm-D9lvTt6f.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-xeHasOaO.js";import"./flex-l2Oq0ReB.js";import"./icon-Nyb6EwFN.js";import"./text-BVzRHyYg.js";import"./index-CvjwRt66.js";import"./index-DvnlzbbI.js";import"./index.esm-pIPZPHhl.js";import"./index-CYesL8K4.js";import"./index-dBd6rems.js";import"./iconBase-BRhaRC0N.js";import"./link-DIY0rgM2.js";import"./types-BhrsJ_Kh.js";import"./form-control-lpsqPcMd.js";import"./h-stack-OZ8YKN_L.js";import"./stack-DKo5vXBr.js";import"./responsive-CcrVZyIX.js";import"./children-CcdxwiTe.js";import"./use-checkbox-WvJ8Dy35.js";import"./use-form-control-CfNMQjkN.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-CI_DSrbi.js";import"./use-safe-layout-effect-D61lC8va.js";import"./use-update-effect-hVpzPVe_.js";import"./index-C_Wjo4c-.js";import"./useColorFormatConverter-CxjK3LrN.js";import"./ReactIconWrapper-YyLHzb7E.js";import"./input-group-D-ozxHmm.js";import"./input-addon-DPXZfdBR.js";import"./input-CgWdvJZ8.js";import"./useTranslation-DczCcn_F.js";import"./context-CkpjnJoC.js";import"./box-Bvz5ZBjj.js";import"./menu-BcoLc6uL.js";import"./use-descendant-Cp8Bg-_l.js";import"./use-popper-DA59VA_L.js";import"./use-event-listener-C4WZ2tWD.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-C_VtCEBZ.js";import"./use-disclosure-BgzpdDmm.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-zGL3y5F5.js";import"./menu-list-lCNaDKWz.js";import"./motion-VMgT8B_6.js";import"./v-stack-C8EeCFHE.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="fabd7f25-98cc-4b30-a4d1-3377fe9b7173",e._sentryDebugIdIdentifier="sentry-dbid-fabd7f25-98cc-4b30-a4d1-3377fe9b7173")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
