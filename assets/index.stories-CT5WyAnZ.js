import{j as b}from"./jsx-runtime-DjPZmkbi.js";import{r as g}from"./index-DTXxPIFw.js";import{M as i}from"./index-nVFZOG9w.js";import"./iframe-BLZSnykw.js";import"./index-BJA9qFvE.js";import"./index-BAp4g1Cp.js";import"./types-DSNbzllL.js";import"./factory-q5wLhK22.js";import"./button-i1X0Cyr-.js";import"./context-DCjw7QTu.js";import"./use-style-config-Bj4N7Blw.js";import"./spinner-D5fawEEG.js";import"./emotion-react.browser.esm-DXBpfigO.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DSzVtLhp.js";import"./flex-DwAoxwu-.js";import"./icon-CyBHApQ9.js";import"./text-yjNePx3r.js";import"./index-CjfJ4JGu.js";import"./index-D_RIo1ny.js";import"./index.esm-DlsSKOW2.js";import"./index-8c6UpNs9.js";import"./index-B7mBvpYP.js";import"./iconBase-b8Y9VbFy.js";import"./link-5NSGpdGw.js";import"./types-D1itbdrH.js";import"./form-control-TeQeVZTE.js";import"./h-stack-D73V61AJ.js";import"./stack-04loOHAf.js";import"./responsive-CvmNCj5m.js";import"./children-V4PxMHm4.js";import"./use-checkbox-9yW_w-dS.js";import"./use-form-control-C8H3SQwJ.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-D2KL2uja.js";import"./use-safe-layout-effect-CyiLue8j.js";import"./use-update-effect-Y9_yQDSV.js";import"./index-DMFzdVJ5.js";import"./useColorFormatConverter-B1c4Zw5s.js";import"./ReactIconWrapper-D8Woi65C.js";import"./input-group-DV1Q9b-0.js";import"./input-addon-BikAO-55.js";import"./input-Bie6Z0E7.js";import"./useTranslation-BZxYWo4e.js";import"./context-BKWgSycx.js";import"./box-BXTCu-RW.js";import"./menu-2DUAVjOW.js";import"./use-descendant-DZNhSZSI.js";import"./use-popper-DMR7w2dU.js";import"./use-event-listener-CjVtIcE1.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-D2ORdIKG.js";import"./use-disclosure-BAQxI5VD.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Bd2HB4Hr.js";import"./menu-list-BHa-VglI.js";import"./motion-B9keJsQg.js";import"./v-stack-BNKUdnd4.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d",e._sentryDebugIdIdentifier="sentry-dbid-0c0b0f6b-457d-4f9e-a7ac-707e7eb93c9d")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
