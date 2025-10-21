import{j as b}from"./jsx-runtime-CVi4Qpbx.js";import{r as g}from"./index-CReu0ybR.js";import{M as i}from"./index-vTdL3Z3Q.js";import"./iframe-CIKX4rQs.js";import"./index-CT4Tz3LA.js";import"./index-DC8BIHhn.js";import"./types-Dh7uXa7W.js";import"./factory-DKjfRhkG.js";import"./button-D0PwJoQd.js";import"./context-DYRdLxPr.js";import"./use-style-config-DxjlVjz9.js";import"./spinner-BnFTNDIe.js";import"./emotion-react.browser.esm-BEdH8kdH.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CeFgIJ4O.js";import"./flex-AfmMxkwZ.js";import"./icon-DsLrUxm8.js";import"./text-AaZOsKYA.js";import"./index-vJ2Dtsdz.js";import"./index-CWuhYuPI.js";import"./index.esm-DXKTHf8W.js";import"./index-BeYmTvnj.js";import"./index-28l1afoe.js";import"./iconBase-Dbvz94a_.js";import"./link-v-ucbNWy.js";import"./types-DI4W-VEb.js";import"./form-control-jmdVGMO0.js";import"./h-stack-CCmdRohQ.js";import"./stack-D30_3f0y.js";import"./responsive-C-jTW9u5.js";import"./children-BEfHEEQ4.js";import"./use-checkbox-DNJceo7C.js";import"./use-form-control-ORDF8w6D.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DzIgsaUD.js";import"./use-safe-layout-effect-trGvOfYP.js";import"./use-update-effect-BKcj8w6j.js";import"./index-DWu7EuU5.js";import"./useColorFormatConverter-U-PHrglK.js";import"./ReactIconWrapper-CW8o_bl6.js";import"./input-group-BOsxUBU-.js";import"./input-addon-8Wio8hvH.js";import"./input-ZT7M0TtG.js";import"./useTranslation-BZ69T7bp.js";import"./context-DFFegoOV.js";import"./box-CkWvgQfS.js";import"./menu-BKnU3ReA.js";import"./use-descendant-D7F-FgXq.js";import"./use-popper-KDDQDlXS.js";import"./use-event-listener-DW08eeR6.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-1rhuzQ3q.js";import"./use-disclosure-BqPPhRbs.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DsDxbPx6.js";import"./menu-list-CLKkggQl.js";import"./motion-e77wNtiD.js";import"./v-stack-CknFmOKL.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
