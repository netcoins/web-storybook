import{j as b}from"./jsx-runtime-BDAl52LU.js";import{r as g}from"./index-B1s4cwzX.js";import{M as i}from"./index-DdiNXyNL.js";import"./iframe-BhO2U3Xu.js";import"./index-BEQuvF6r.js";import"./index-7O9Fv4E-.js";import"./types-CUjUJ4OC.js";import"./factory-DHWnRJKK.js";import"./button-nXFIyEkq.js";import"./context-DrtiubOQ.js";import"./use-style-config-DCB5cbiP.js";import"./spinner-DFr6o78Q.js";import"./emotion-react.browser.esm-CvkHcGwz.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-C3ItJBsG.js";import"./flex-BDC1Xipk.js";import"./icon-DC___YkL.js";import"./text-STVW4P1z.js";import"./index-yM_j1xIJ.js";import"./index-CZeACX-x.js";import"./index.esm-BK215oCo.js";import"./index-DzUmlMb2.js";import"./index-CtK85GdA.js";import"./iconBase-CQOD9rGf.js";import"./link-CHoAlA8n.js";import"./types-Cw1COIiA.js";import"./form-control-BRV4ka79.js";import"./h-stack-DwFOBM_H.js";import"./stack-C5E1QWHo.js";import"./responsive-Ll8DVYnD.js";import"./children-oLpyxZx_.js";import"./use-checkbox-D-8hGrTA.js";import"./use-form-control-CD0eMEwM.js";import"./call-all--NRVVPhS.js";import"./use-callback-ref-DDebzxyp.js";import"./use-safe-layout-effect-aZdOLzAV.js";import"./use-update-effect-kHs7RVSV.js";import"./index-zx26AMZa.js";import"./useColorFormatConverter-BX7TKwBo.js";import"./ReactIconWrapper-CbTVDrIV.js";import"./input-group-DHpliLgf.js";import"./input-addon-DzEt7E3h.js";import"./input-BeAW8RGz.js";import"./useTranslation-n3gQRKx8.js";import"./context-BzrWg_Oq.js";import"./box-C-bloKO_.js";import"./menu-CMvy-N54.js";import"./use-descendant-CaUmujHX.js";import"./use-popper-HkX--r-X.js";import"./use-event-listener-g8z1gQnN.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-TdI2ZlRE.js";import"./use-disclosure-DoC0Yl95.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-DJRCHoza.js";import"./menu-list-1AK7OTBf.js";import"./motion-DN1i2K2F.js";import"./v-stack-6LHwn9qP.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72dafcaf-262e-417d-b41b-0d6010e4998f",e._sentryDebugIdIdentifier="sentry-dbid-72dafcaf-262e-417d-b41b-0d6010e4998f")}catch{}const De={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
