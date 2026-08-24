import{j as b}from"./jsx-runtime-DjZ9KS0r.js";import{r as g}from"./index-DxpgWG7b.js";import{M as i}from"./index-DbVkefiw.js";import"./iframe-Ca3FI6N_.js";import"./index-GHa_xewZ.js";import"./types-CChSWMN9.js";import"./color-mode-l7isAfj8.js";import"./iconBase-inQQw-X_.js";import"./icon-button-CITuGZP6.js";import"./button-DIm3ItXi.js";import"./factory-CkIswdXp.js";import"./create-recipe-context-Ca2ETeP7.js";import"./attr-DhmmAXiK.js";import"./spinner-BBupLXtE.js";import"./skeleton-CdxIYIE6.js";import"./index-RERI5SxM.js";import"./stack-X2DqdxXX.js";import"./flex-ie_KwMrI.js";import"./icon-Bjoi7iP7.js";import"./index-CA-zX646.js";import"./index-DsXrBDHd.js";import"./index-CqU-eZLh.js";import"./index.esm-C2rUt7kn.js";import"./index-D-JilUOC.js";import"./link-MLaFzWaj.js";import"./types-BT1VWJp3.js";import"./index-CiLjou_b.js";import"./h-stack-BHDE9i-N.js";import"./field-pwdFI1H1.js";import"./create-slot-recipe-context-DufNZYZ4.js";import"./use-field-context-r1MPkJdJ.js";import"./create-context-BJ1TGDfn.js";import"./factory-DnWGm3BK.js";import"./index-DzMh4kgF.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-C0ZaeCEi.js";import"./field.anatomy-DAItm6Mi.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-SirsIBBG.js";import"./index-BLVBAjsL.js";import"./index-Bo9ToQBr.js";import"./index-kwmH48ZG.js";import"./index-LR98TBys.js";import"./use-locale-context-DqqzijXe.js";import"./use-event-CjeWeC9c.js";import"./index-6ncHYlwr.js";import"./useColorFormatConverter-B-NBYLUG.js";import"./index-CXbguA4k.js";import"./ReactIconWrapper-hgzq4FSV.js";import"./input-group-BNEeqyej.js";import"./input-Dt7He6Ww.js";import"./useTranslation-nhcS6iBE.js";import"./context-CxkX8lrp.js";import"./portal-hl1SG00S.js";import"./v-stack-BT4Ou36a.js";import"./menu-Bnui3-uX.js";import"./icons-jfGilTQM.js";import"./split-presence-props-DLB6QQOD.js";import"./use-presence-context-D-L0EBUt.js";import"./index-wBejrI3a.js";import"./index-BuWMev8Y.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-C2wdLnPZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cdc2e513-e962-4ba7-984a-b62582ba6dc7",e._sentryDebugIdIdentifier="sentry-dbid-cdc2e513-e962-4ba7-984a-b62582ba6dc7")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
