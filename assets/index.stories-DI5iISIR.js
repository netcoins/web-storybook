import{j as b}from"./jsx-runtime-CFb-dJ-y.js";import{r as g}from"./index-CiZbjJZF.js";import{M as i}from"./index-D2FAAZjY.js";import"./iframe-BTnV4qdy.js";import"./index-BMdo2bXm.js";import"./index-Z55aSV6P.js";import"./types-BDz6Q2uQ.js";import"./factory-Ro1QILuS.js";import"./button-Cm2awKss.js";import"./context-DlYmRpvU.js";import"./use-style-config-BwOoHieX.js";import"./spinner-BfQ0aSyp.js";import"./emotion-react.browser.esm-Coto_Vv0.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DDDr9FUe.js";import"./flex-Bbi-2o1Z.js";import"./icon-QfhRCDRE.js";import"./text-Cms4Ma7f.js";import"./index-CxK5qnzF.js";import"./index-BCSIn74t.js";import"./index.esm-C5ZF3KUe.js";import"./index-BoCLBnfV.js";import"./index-DJin2CTS.js";import"./iconBase-DJsLEq5F.js";import"./link-Bv2jjzU9.js";import"./types-BAyw8xk6.js";import"./form-control-iFJ1-8KZ.js";import"./h-stack-DCYhkJ0J.js";import"./stack-C6XaTtQ4.js";import"./responsive-BZM1CppC.js";import"./children-phdannWK.js";import"./use-checkbox-D4VNE_L1.js";import"./use-form-control-jULCzC3t.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-BhdtL9aI.js";import"./use-safe-layout-effect-D-nJR4lJ.js";import"./use-update-effect-CWpgkBQd.js";import"./index-DpDQoDSv.js";import"./useColorFormatConverter-D_qWA8Ou.js";import"./ReactIconWrapper-WO6yOcko.js";import"./input-group-BC6wjstG.js";import"./input-addon-AZappnYJ.js";import"./input-DGXY4v6q.js";import"./useTranslation-HcHLSnj3.js";import"./context-B_Lo_Vud.js";import"./box-BE0ZO1h_.js";import"./menu-g4nhoVkj.js";import"./use-descendant-CiUu-z82.js";import"./use-popper-DaTe3lhT.js";import"./use-event-listener-Dl5CJ1TO.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BkEijOd1.js";import"./use-disclosure-M7vHb2_m.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-D0E5eS7O.js";import"./menu-list-B0I1OblH.js";import"./motion-D6WPvTTt.js";import"./v-stack-WqUPgw5y.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
