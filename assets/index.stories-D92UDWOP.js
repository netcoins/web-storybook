import{j as b}from"./jsx-runtime-DkZJPG3z.js";import{r as g}from"./index-DExMN8wL.js";import{M as i}from"./index-DAWK3Qdd.js";import"./iframe-BfYFZoBX.js";import"./index-BfT7cAv6.js";import"./types-Cq6n4dUe.js";import"./color-mode-CrFDGDnW.js";import"./iconBase-Cyt-L-X2.js";import"./icon-button-DXBNWRcQ.js";import"./button-D_XY9Ucb.js";import"./factory-CPEZs0lN.js";import"./create-recipe-context-RF6iu8gY.js";import"./attr-DhmmAXiK.js";import"./spinner-BnlPU65q.js";import"./skeleton-EPXg2M5P.js";import"./index-Yd8pjtEd.js";import"./stack-BOKpDuJB.js";import"./flex-DnxvsJus.js";import"./icon-Cz-Cw_vu.js";import"./index-CzKmmJX-.js";import"./index-CsxJ01Lx.js";import"./index-r-4tE08U.js";import"./index.esm-BQ7e1GhK.js";import"./index-DxbabN68.js";import"./link-ba2-dxsG.js";import"./types-YYOK-_q4.js";import"./index-DXpgHCy0.js";import"./h-stack-DNrJs_M8.js";import"./field-CV5cy-sU.js";import"./create-slot-recipe-context-Cd3KQfhl.js";import"./use-field-context-DgfImoCI.js";import"./create-context-BofXG7Yl.js";import"./factory-DE1tisMu.js";import"./index-ZoHJkkX0.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-B4EYAzen.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-C16Rs4p3.js";import"./index-BLVBAjsL.js";import"./index-CRQHZmnS.js";import"./index-C1Y7T-Q2.js";import"./index-BGdhcXXc.js";import"./use-locale-context-DDZby7qs.js";import"./use-event-DLBzEUAl.js";import"./index-CwaTYK7G.js";import"./useColorFormatConverter-CWBGtGMQ.js";import"./index-BwIp2Axg.js";import"./ReactIconWrapper-DQAK-Iuo.js";import"./input-group-DYyqE9IY.js";import"./input-DSFIIZSJ.js";import"./useTranslation-DGYp89X1.js";import"./context-B0JTXvFz.js";import"./portal-C0gygVRd.js";import"./v-stack-Gkerda-T.js";import"./menu-ByxnTzoR.js";import"./icons-_7FlVNAi.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DGsVa4jB.js";import"./index-COCaMt2I.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-cMlMUVsx.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="5f31c3d1-bbf1-424e-88ef-6d3c68625b3e",e._sentryDebugIdIdentifier="sentry-dbid-5f31c3d1-bbf1-424e-88ef-6d3c68625b3e")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
