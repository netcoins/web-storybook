import{j as b}from"./jsx-runtime-C2GWZ_W3.js";import{r as g}from"./index-ELNt7lwK.js";import{M as i}from"./index-Bhy_s47y.js";import"./iframe-BhoQJi6U.js";import"./index-t1gjXq5s.js";import"./index-DPt7HP0x.js";import"./types-DuhQV6xA.js";import"./factory-ByB9Vezk.js";import"./button-BGHCPNJe.js";import"./context-DEaw93aE.js";import"./use-style-config-Cf47N2Lw.js";import"./spinner-DvHzZEW2.js";import"./emotion-react.browser.esm-ql283oEk.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DiUX7u9z.js";import"./flex-CzMWTp_E.js";import"./icon-Ch91KDQR.js";import"./text-B7yE0Q6c.js";import"./index--_n7VJ_r.js";import"./index-CUaI1yEC.js";import"./index.esm-BbqGliF4.js";import"./index-DXs2Jyer.js";import"./index-CWXQ1UYx.js";import"./iconBase-DPcfMA0j.js";import"./link-0xUu2Gb_.js";import"./types-O-yI6Onh.js";import"./form-control-CaKUgUf_.js";import"./h-stack-Tzk1smXE.js";import"./stack-DYzJWIKl.js";import"./responsive-B86ljmhN.js";import"./children-Bw_aNAeJ.js";import"./use-checkbox-CPISjfAq.js";import"./use-form-control-BsY7O5HP.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-z_gf96Ga.js";import"./use-safe-layout-effect-CJT_4pGR.js";import"./use-update-effect-CMEQEZjR.js";import"./index-BGyWouIS.js";import"./useColorFormatConverter-BIkeUeBn.js";import"./ReactIconWrapper-DZk0kYqD.js";import"./input-group-YhII4J0D.js";import"./input-addon-DxN5VQLb.js";import"./input-DGRHZj1Y.js";import"./useTranslation-ByBukGxF.js";import"./context-Bmqf5lZO.js";import"./box-DTedscfu.js";import"./menu-RmBF9TQe.js";import"./use-descendant-DkU9s4Lk.js";import"./use-popper-C5aH09Ua.js";import"./use-event-listener-Bv4rFJ8W.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CdrYHuQv.js";import"./use-disclosure-BhYVcYwS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-uS6LB4DZ.js";import"./menu-list-jVH4HwM7.js";import"./motion-W1DD8qk0.js";import"./v-stack-CavU_xWh.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
