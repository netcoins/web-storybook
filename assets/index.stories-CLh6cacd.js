import{j as b}from"./jsx-runtime-Caq2BR7C.js";import{r as g}from"./index-D2__PtDf.js";import{M as i}from"./index-D1KkcaVy.js";import"./iframe-BXQyGLXf.js";import"./index-Dd_g0Ryj.js";import"./types-CZ60tLwk.js";import"./color-mode-CZe2XitF.js";import"./iconBase-Bco0OsWL.js";import"./icon-button-D-au2c1m.js";import"./button-qwRrpDpy.js";import"./factory-BcZat9-O.js";import"./create-recipe-context-DLHMpvKu.js";import"./attr-DhmmAXiK.js";import"./spinner-Dba7hITa.js";import"./skeleton-Hodq5eyh.js";import"./index-B1TfHqs7.js";import"./stack-BF6E-SXf.js";import"./flex-Cti_WHtH.js";import"./icon-CybC54FQ.js";import"./index-CvGFadaE.js";import"./index-j5smRVAS.js";import"./index-Babio1d3.js";import"./index.esm-BAR-iI7o.js";import"./index-CFJ3MrdH.js";import"./link-BUqQeAZ_.js";import"./types-B7ukgLhp.js";import"./index-Cnld1KN3.js";import"./h-stack-BiK9ktrn.js";import"./field-By6ijQ3d.js";import"./create-slot-recipe-context-_-LOkLUn.js";import"./use-field-context-vX8lToWm.js";import"./create-context-B8bSOmkY.js";import"./factory-B30C38N3.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Bukt8Mx6.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-B7Bbu9-J.js";import"./index-DDRJZLnx.js";import"./index-D5rrMGtP.js";import"./use-locale-context-CzwvvcMb.js";import"./use-event-DuJ9Zd6r.js";import"./index-CxOuF8kM.js";import"./useColorFormatConverter-Dq1hBwsm.js";import"./index-BR08H8eI.js";import"./ReactIconWrapper-DK_j6vRX.js";import"./input-group-BkViwIwg.js";import"./input-2sx_h1nd.js";import"./useTranslation-BMUtRz72.js";import"./context-JLgDRHFl.js";import"./portal-CTVvLRGz.js";import"./v-stack-DmHyK9Zy.js";import"./menu-D4PF0u2y.js";import"./icons-DaO0CoxE.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-BTb2Ce8o.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
