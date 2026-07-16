import{j as b}from"./jsx-runtime-CztcPgbW.js";import{r as g}from"./index-C6WcHQVu.js";import{M as i}from"./index-COJfC-6e.js";import"./iframe-ivN2um-2.js";import"./index-A53RqgmV.js";import"./types-BnhNrmdr.js";import"./color-mode-CwgZp5WT.js";import"./iconBase-BX0Px6ub.js";import"./icon-button-BFswoRTM.js";import"./button-COE5TYqy.js";import"./factory-CJkQxrme.js";import"./create-recipe-context-CwIDP-ao.js";import"./attr-DhmmAXiK.js";import"./spinner-p4Jfzthr.js";import"./skeleton-GIe9JoXB.js";import"./index-Cu59q5qw.js";import"./stack-GuBoGb4F.js";import"./flex-BMlFDfj1.js";import"./icon-B9_jY1jk.js";import"./index-DmjKt0-Y.js";import"./index-D4WiwPmu.js";import"./index-Ca5QIeBj.js";import"./index.esm-BRsAtpWO.js";import"./index-B_4-3Fm9.js";import"./link-Dt5sWHSW.js";import"./types-BYlYEmiw.js";import"./index-DgOEmS6m.js";import"./h-stack-vGihA0ar.js";import"./field-CV9dxmH0.js";import"./create-slot-recipe-context-BcxVd4Kv.js";import"./use-field-context-VcRSjQ1I.js";import"./create-context-B3XnG-Fl.js";import"./factory-2Ss3JzA2.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-dSjGDzpp.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-C-VG2e1r.js";import"./index-BgqstqNg.js";import"./index-Barifufe.js";import"./use-locale-context-Aly0yhC9.js";import"./use-event-Dk6QHYn8.js";import"./index-CB5ucCKY.js";import"./useColorFormatConverter-DVQkr4Vx.js";import"./index-nSsedJbZ.js";import"./ReactIconWrapper-BzlXMIgU.js";import"./input-group-DQ7wqQTL.js";import"./input-clCv_lEf.js";import"./useTranslation-DJHRQ7MJ.js";import"./context-DpOwhz1k.js";import"./portal-5S-HdmYy.js";import"./v-stack-CKiKHMs6.js";import"./menu-Dbkf6S3E.js";import"./icons-5EUryMJi.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-ZB6GwupR.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const ye=["Default","Search"];export{r as Default,o as Search,ye as __namedExportsOrder,we as default};
