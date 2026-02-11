import{j as b}from"./jsx-runtime-C-DfjFgm.js";import{r as g}from"./index-CWoUtc2r.js";import{M as i}from"./index-D-o-K9zI.js";import"./iframe-DMi0SriE.js";import"./index-BN2fkIxe.js";import"./types-BcaaBaAZ.js";import"./color-mode-B6xlBy-w.js";import"./iconBase-D97UU3yC.js";import"./icon-button-Cnida6b9.js";import"./button-BssHtsSc.js";import"./factory-DcdjxUcj.js";import"./create-recipe-context-DihguQ24.js";import"./attr-DhmmAXiK.js";import"./spinner-C9j74I5p.js";import"./skeleton-DFZOHhUI.js";import"./index-CMqRwz5b.js";import"./stack-CBU187r_.js";import"./flex-euIY3QBo.js";import"./icon-BuIEVlED.js";import"./index-9cu0JOvW.js";import"./index-CCtaEfOS.js";import"./index-BpAdcnTE.js";import"./index.esm-CRZo0NFU.js";import"./index-Bu-PSWx4.js";import"./link-pChR1vwq.js";import"./types-vXVZKTWY.js";import"./index-B3x6KEvZ.js";import"./h-stack-DDDwBhDv.js";import"./field-BNFqrDwV.js";import"./create-slot-recipe-context-DR7d1sN0.js";import"./use-field-context-CrjG6H9E.js";import"./create-context-CVoT-_s9.js";import"./factory-D8FEuAQT.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-CUm5OVgO.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-C6D5kX8u.js";import"./index-BFRN0wtV.js";import"./index-BTtFvzRX.js";import"./use-locale-context-CS8eBo3-.js";import"./use-event-D4twu28G.js";import"./index-BzywDx9V.js";import"./useColorFormatConverter-B7lY-W6x.js";import"./index-uh2CiHY0.js";import"./ReactIconWrapper-DRB7Ltka.js";import"./input-group-BuqkJ_JO.js";import"./input-CSg65o8K.js";import"./useTranslation-BeWwz1BM.js";import"./context-DbkY_B0I.js";import"./portal-D7wQumOR.js";import"./v-stack-CRPRmzI3.js";import"./menu-r1a6AI6_.js";import"./icons-CnOCWCMV.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DiTzPc6d.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="6c27b679-d569-45e6-9067-38e4cc455d03",e._sentryDebugIdIdentifier="sentry-dbid-6c27b679-d569-45e6-9067-38e4cc455d03")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ee=["Default","Search"];export{r as Default,o as Search,Ee as __namedExportsOrder,ye as default};
