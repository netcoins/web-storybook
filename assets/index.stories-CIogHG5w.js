import{j as b}from"./jsx-runtime-Cxzri3Pw.js";import{r as g}from"./index-CQyEhpui.js";import{M as i}from"./index-C0ZwkgBf.js";import"./iframe-BtcXhJ9A.js";import"./index-mck9Xd0g.js";import"./index-BSJtI-0M.js";import"./types-B2wLIgRL.js";import"./factory-BiiuT5Nv.js";import"./button-CBW8kfAc.js";import"./context-EVyQdOUc.js";import"./use-style-config-BFsyumYa.js";import"./spinner-1Wzioulx.js";import"./emotion-react.browser.esm-Bkn3hxZX.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-BcePpJJy.js";import"./flex-DfPIxoPv.js";import"./icon-BrvKO_hP.js";import"./text-H-5wkXYi.js";import"./index-CXz6D7AP.js";import"./index-BXHgw7CO.js";import"./index.esm-4sXSOt_G.js";import"./index-BZfdZYav.js";import"./index-CgHankdp.js";import"./iconBase-CHwgSB5w.js";import"./link-CLW6wFOd.js";import"./types-DPi3wbvO.js";import"./form-control-j8vYlO6h.js";import"./h-stack-uVX4HnHe.js";import"./stack-CSHKAkKz.js";import"./responsive-CzlaS7W-.js";import"./children-BecUbAd4.js";import"./use-checkbox-BmRSf6UL.js";import"./use-form-control-s7Gaciy5.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DCq13M0N.js";import"./use-safe-layout-effect-CosW4MJT.js";import"./use-update-effect-CjuSFJnb.js";import"./index-nygk6aWq.js";import"./useColorFormatConverter-U5hoAya3.js";import"./ReactIconWrapper-DIELMcuT.js";import"./input-group-Bgk7DDEk.js";import"./input-addon-D7_YPZZi.js";import"./input-CbXlIk9s.js";import"./useTranslation-BlcAoRsG.js";import"./context-DF4vkx7N.js";import"./box-DEvmMyh-.js";import"./menu-DDSVlhh-.js";import"./use-descendant-ChN0qjQ_.js";import"./use-popper-GXvmnmNt.js";import"./use-event-listener-CXa35tU_.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-BQVxu2uo.js";import"./use-disclosure-DnTmxnsJ.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Bptb3iP7.js";import"./menu-list-qI5QlHFj.js";import"./motion-CvQl6joN.js";import"./v-stack-Dju3V8vE.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c27c8bbf-ebd0-45f4-a1dc-524cb0aa60ba",e._sentryDebugIdIdentifier="sentry-dbid-c27c8bbf-ebd0-45f4-a1dc-524cb0aa60ba")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
