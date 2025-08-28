import{j as b}from"./jsx-runtime-MHZvqL_t.js";import{r as g}from"./index-BQja5mEm.js";import{M as i}from"./index-CBNJUq7E.js";import"./iframe-BS01ocFG.js";import"./index-CkaCs0Fe.js";import"./index-DSNW1-95.js";import"./types-DfwN-NFo.js";import"./factory-CqABM38r.js";import"./button-Dbyv7cOs.js";import"./context-CjJ0Wp3S.js";import"./use-style-config-C5kUKhAX.js";import"./spinner-DWd39qma.js";import"./emotion-react.browser.esm-D4mcBU_U.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-B0dABy0A.js";import"./flex-ClNkGKqe.js";import"./icon-C7PIpLv-.js";import"./text-CFn7IS6o.js";import"./index-e0VLRi9o.js";import"./index-C7hnf6YG.js";import"./index.esm-9XsWftmY.js";import"./index-poRBq0YZ.js";import"./index-CX5TbEnR.js";import"./iconBase-9XpoQhKd.js";import"./link-ZLRvO5lj.js";import"./index-BSEcwJz7.js";import"./index-BKBFAV8-.js";import"./useColorFormatConverter-B4LwLepL.js";import"./index-DdVQu4-d.js";import"./IconWrapper-CReWjnlc.js";import"./box-CNEYIEc2.js";import"./form-control-CSe84P0z.js";import"./form-label-C4MziY-Q.js";import"./input-group-DREaKnhU.js";import"./children-iOGQJqdJ.js";import"./input-addon-fJJIdD0M.js";import"./input--7OBSjo0.js";import"./use-form-control-DAUpvPNK.js";import"./call-all--NRVVPhS.js";import"./input-element-DEy3t-G_.js";import"./h-stack-BDUuF7Lr.js";import"./stack-Cpmdj1xd.js";import"./responsive-bTDqZ7l8.js";import"./use-checkbox-Cv4oU7P6.js";import"./use-callback-ref-DVW27AFN.js";import"./use-safe-layout-effect-DB3UvPb9.js";import"./use-update-effect-CWV0QlDb.js";import"./index-DMaZT_-P.js";import"./ReactIconWrapper-lGskK6Ai.js";import"./useTranslation-DGMNydqY.js";import"./context-DmGcVjL-.js";import"./menu-list-BbDRu_NR.js";import"./use-descendant-DcWYfiRo.js";import"./use-popper-7FaoNOUa.js";import"./use-event-listener-DWKxjR-K.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-C2UrC4Sb.js";import"./use-disclosure-CwO_tUym.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Cv1H0uQs.js";import"./motion-Cq2wECNI.js";import"./v-stack-tqJysRCM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="35c7fa79-01fb-4501-adfc-6cc6af99012d",e._sentryDebugIdIdentifier="sentry-dbid-35c7fa79-01fb-4501-adfc-6cc6af99012d")}catch{}const Ee={component:i,tags:["pending"]},n={render:e=>{const[t,r]=g.useState([]),a=l=>{r(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:r})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,r]=g.useState([]),a=l=>{r(l)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:a,setSelectedOptions:r})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(p=n.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const Ve=["Default","Search"];export{n as Default,o as Search,Ve as __namedExportsOrder,Ee as default};
