import{j as b}from"./jsx-runtime-Df5ADW8Y.js";import{r as g}from"./index-Bgn8tTkI.js";import{M as i}from"./index-BaIY2YHc.js";import"./iframe-B8afyZN2.js";import"./index-COObqiTH.js";import"./index-D5LICo9t.js";import"./types-DqubogP1.js";import"./factory-D-NwjwAb.js";import"./button-Bo4a7774.js";import"./context-CswDShTY.js";import"./use-style-config-CO91qvCY.js";import"./spinner-BLPsIJhP.js";import"./emotion-react.browser.esm-GJyol1lq.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-CXebeteH.js";import"./flex-BOwR_dYc.js";import"./icon-KSSt8GfX.js";import"./text-ByE2EP2N.js";import"./index-BfiA5aGa.js";import"./index-Dqv51VOQ.js";import"./index.esm-BrT-rgsv.js";import"./index-BEMSjZ1p.js";import"./index-Cr8Mkff3.js";import"./iconBase-CEJJA6yT.js";import"./link-BcMP13wQ.js";import"./types-COuxkORr.js";import"./form-control-BLuABZAd.js";import"./h-stack-BTYx8cIB.js";import"./stack-BW5WUvKR.js";import"./responsive-D6xQdvBY.js";import"./children-t3kESdEs.js";import"./use-checkbox-BSFKohGR.js";import"./use-form-control-DLMvYCc4.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-ZcN6Iqwp.js";import"./use-safe-layout-effect-CSTdT6-G.js";import"./use-update-effect-DAn70UZc.js";import"./index-Dwyou4uf.js";import"./useColorFormatConverter-9bG5M-ay.js";import"./ReactIconWrapper-Bwk2irZh.js";import"./input-group-CpT5rW6_.js";import"./input-addon-CDVztJ7z.js";import"./input-TcAGa4rN.js";import"./useTranslation-DCljGYXN.js";import"./context-6J5OFQlt.js";import"./box-B-tlfbsC.js";import"./menu-CzfC3Pg3.js";import"./use-descendant-BLirtNDl.js";import"./use-popper-D-y-Nt8b.js";import"./use-event-listener-DBKaOWyR.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CdgoAOTm.js";import"./use-disclosure-Fdoidv7i.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-D-sLSnmB.js";import"./menu-list-CaCrORCs.js";import"./motion-Ca0p9CuS.js";import"./v-stack-BywiRyqU.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="bd941cd4-7111-4500-95fd-ce12164075d7",e._sentryDebugIdIdentifier="sentry-dbid-bd941cd4-7111-4500-95fd-ce12164075d7")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
