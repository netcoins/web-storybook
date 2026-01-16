import{j as b}from"./jsx-runtime-DNabp6vP.js";import{r as g}from"./index-mys4YnTk.js";import{M as i}from"./index-BlOJIuVy.js";import"./iframe-DhJ-F6cv.js";import"./index-DtncMwXv.js";import"./types-DoKEtCm3.js";import"./color-mode-PhwhN050.js";import"./iconBase-DoarWgLq.js";import"./icon-button-2ul5Y4bg.js";import"./button-BNjCBTth.js";import"./factory-RadjLeVb.js";import"./create-recipe-context-CY9Ln4QB.js";import"./attr-DhmmAXiK.js";import"./spinner-DjxX-SyE.js";import"./skeleton-CY6KJtrO.js";import"./index-nf5oY5Co.js";import"./stack-NPgzWqCE.js";import"./flex-7Uwqc4yV.js";import"./icon-Cfligyfw.js";import"./index-C4ZcEYmH.js";import"./index-BLJH723M.js";import"./index-BLKdeQk_.js";import"./index.esm-Rbndk6w_.js";import"./index-D5-B0pG-.js";import"./index-ByF8BLu4.js";import"./link-BsBnZw4Z.js";import"./types-BDyAbaqb.js";import"./h-stack-BigO8wGn.js";import"./field-BbUmxP-p.js";import"./create-slot-recipe-context-jWUnwPt4.js";import"./use-field-context-DkpEc-Ex.js";import"./create-context-BpDIB9Vw.js";import"./factory-bJ7Kr9x0.js";import"./index-CehdyC4B.js";import"./create-split-props-1H4FxmAF.js";import"./use-environment-context-BFgurxnK.js";import"./field.anatomy-BD6VXUua.js";import"./index-pW82Y0Cx.js";import"./checkbox.anatomy-DjKn-5X5.js";import"./index-BianSkaQ.js";import"./index-BLVBAjsL.js";import"./index-T8xmJZXd.js";import"./index-CSovjGJd.js";import"./index-fLZKkVJm.js";import"./use-locale-context-C5uwjN8t.js";import"./use-event-HwovrUog.js";import"./index-CE0l3pFt.js";import"./useColorFormatConverter-B1vfirjJ.js";import"./index-D6uUQPH9.js";import"./ReactIconWrapper-BoxSElQ-.js";import"./input-group-ByRQvOgg.js";import"./input-BkFGTQyO.js";import"./useTranslation-DN5l764n.js";import"./context-CZyzaKiX.js";import"./portal-DVQ13UAm.js";import"./v-stack-DklV3VEo.js";import"./menu-CX3aR7FH.js";import"./icons-lEeQZ8zS.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-GuQffVLA.js";import"./index-CkgrAf5i.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="61677dfd-0f37-4a51-a647-409ae376481f",e._sentryDebugIdIdentifier="sentry-dbid-61677dfd-0f37-4a51-a647-409ae376481f")}catch{}const ye={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),a=l=>{n(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
