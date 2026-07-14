import{j as b}from"./jsx-runtime-BKsa-kTY.js";import{r as g}from"./index-S3kalpvb.js";import{M as i}from"./index-CV402oUm.js";import"./iframe-ymdZsafo.js";import"./index-WfH1QSAG.js";import"./types-D6A4QU2g.js";import"./color-mode-CgKgUysE.js";import"./iconBase-9F9zCqNZ.js";import"./icon-button-BxEszn14.js";import"./button-CyYs9oT3.js";import"./factory-DTRAecla.js";import"./create-recipe-context-C76SP1PL.js";import"./attr-DhmmAXiK.js";import"./spinner-DwxijqVz.js";import"./skeleton-CQJtnLQi.js";import"./index-DRJhr-Ay.js";import"./stack-C6pVxDps.js";import"./flex-DLdxf52l.js";import"./icon-DGRTBViV.js";import"./index-BPHdwlNW.js";import"./index-BDKj0NWH.js";import"./index-C7vOTCW9.js";import"./index.esm-CO0gMxPa.js";import"./index-2BLIkmtY.js";import"./link-JZnhgSyc.js";import"./types-DFgs2ml8.js";import"./index-DE2uMa8X.js";import"./h-stack-BdDRwzaw.js";import"./field-C_kiE8Um.js";import"./create-slot-recipe-context-xQzwiBEp.js";import"./use-field-context-DnVWDFjb.js";import"./create-context-CqOh1Gb_.js";import"./factory-B4wKdx-L.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-Pm7Gq5_G.js";import"./field.anatomy-BNAWhYI-.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-CUxqIB5C.js";import"./index-BLVBAjsL.js";import"./index-kQU88sZT.js";import"./index-CIlnl8IP.js";import"./index-BjQpxOce.js";import"./use-locale-context-Cd-pG421.js";import"./use-event-DJiXksnC.js";import"./index-DS7N8bj9.js";import"./useColorFormatConverter-CkqsxHSv.js";import"./index-tN8oabAU.js";import"./ReactIconWrapper-BQ0SuvU8.js";import"./input-group-DH7Hu1tZ.js";import"./input-C7InYPrk.js";import"./useTranslation-Sw0-WgDa.js";import"./context-D2toxkKl.js";import"./portal-CHQttBVX.js";import"./v-stack-Ddk1v-wt.js";import"./menu-MGVQDEl9.js";import"./icons-DmlnuD3M.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-DJ_Ccwut.js";import"./index-DjRw-LTH.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="125dd7c2-b7e6-4a59-8e9d-52e964cf71f2",e._sentryDebugIdIdentifier="sentry-dbid-125dd7c2-b7e6-4a59-8e9d-52e964cf71f2")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
