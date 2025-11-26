import{j as b}from"./jsx-runtime-DI6U_4IB.js";import{r as g}from"./index-agZ3C1za.js";import{M as i}from"./index-84cpjq_d.js";import"./iframe-DgfLTELc.js";import"./index-CYBlCMpp.js";import"./index-kp-VxLhr.js";import"./types-9Gabj8zw.js";import"./factory-CFgWEzc_.js";import"./button-DZKkFUq0.js";import"./context-BJm0OUv_.js";import"./use-style-config-EZ6_pcLD.js";import"./spinner-UeVRIPJe.js";import"./emotion-react.browser.esm-Brdn4Aia.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Bx6jzr8l.js";import"./flex-QlyG6JVf.js";import"./icon-CAuaTpcP.js";import"./text-CONdp2M0.js";import"./index-Bn6bXLmF.js";import"./index-DXUytH3h.js";import"./index.esm-BmKIXKU4.js";import"./index-BlAqH7Wf.js";import"./index-BVgvSdJU.js";import"./iconBase-Cpg_UNgP.js";import"./link-C-KIxL5n.js";import"./types-Ad9uDSa7.js";import"./form-control-DNc9SeYw.js";import"./h-stack-BbXPO-GG.js";import"./stack-D5j4jOCv.js";import"./responsive-C4C1brqy.js";import"./children-B7FJEDx8.js";import"./use-checkbox-CWkYOO83.js";import"./use-form-control-C_H7Ta_2.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-HyeqLHBU.js";import"./use-safe-layout-effect-DV-X3m1z.js";import"./use-update-effect-DNq4iLpn.js";import"./index-DzPgcF6w.js";import"./useColorFormatConverter-DafA-ueU.js";import"./ReactIconWrapper-A5y_ehXy.js";import"./input-group-DXtu0qtp.js";import"./input-addon-9sU8RXYd.js";import"./input-D9QvWpjU.js";import"./useTranslation-D4hvxz60.js";import"./context-DV1ILTZb.js";import"./box-BNRj7k3s.js";import"./menu-CQRJ-3W8.js";import"./use-descendant-DgN82Csi.js";import"./use-popper-BBFCqSpY.js";import"./use-event-listener-BskXR00q.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-Cy18mSUq.js";import"./use-disclosure-BSrh1nDS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-BYAiCEKt.js";import"./menu-list-_GqPN-Hp.js";import"./motion-ButxGAnF.js";import"./v-stack-BvBpiwXQ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
