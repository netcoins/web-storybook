import{j as b}from"./jsx-runtime-DIzLeBSg.js";import{r as g}from"./index-HfLk7_r9.js";import{M as i}from"./index-BZN2D2vJ.js";import"./iframe-NthpIpXS.js";import"./index-DxV9viNY.js";import"./index-DGVrMH4a.js";import"./types-9TP8tL8H.js";import"./use-style-config-XwpbuwHi.js";import"./button-CENBuNfy.js";import"./context-BKv63LUG.js";import"./spinner-CD4V-ZNa.js";import"./emotion-react.browser.esm-B3QBLT_b.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-Co7zkXVG.js";import"./flex-BovBxUVX.js";import"./icon-Qt3h4PRE.js";import"./text-5ESNzIeg.js";import"./index-CHJpMY-9.js";import"./index-BeYqpUHi.js";import"./index.esm-rHK01ihn.js";import"./index-CRo_KaAE.js";import"./index-h5EGf4KQ.js";import"./iconBase-Bl0CWZaD.js";import"./link-D4zsicLX.js";import"./index-DK9pv4Bz.js";import"./index-DBjpXi9u.js";import"./useColorFormatConverter-J70nT9dF.js";import"./index-DsbCze5I.js";import"./IconWrapper-USh8aYjd.js";import"./box-NNxW-TG4.js";import"./form-control-CtcJInkm.js";import"./form-label-CC1OCyy4.js";import"./input-group-BdZMo8It.js";import"./children-CPCSe9y1.js";import"./input-addon-B03MbKgo.js";import"./input-DsLsPXim.js";import"./use-form-control-CdKhJFfQ.js";import"./call-all--NRVVPhS.js";import"./input-element-Bpc2QZq-.js";import"./h-stack-CuQxPRKH.js";import"./stack-PIXNb_Vw.js";import"./responsive-Cp708Syc.js";import"./use-checkbox-Di6tU0XG.js";import"./use-callback-ref-CqY6_dnh.js";import"./use-safe-layout-effect-u1CJK6YM.js";import"./use-update-effect-CU5A9O6n.js";import"./index-C6qFs7WU.js";import"./ReactIconWrapper-DcGOKvcN.js";import"./useTranslation-DZADT0tm.js";import"./context-CQZ1kJwo.js";import"./menu-list-CubtbZy9.js";import"./use-descendant-CQB7ifwa.js";import"./use-popper-DUL81saP.js";import"./use-event-listener-zMnB1xkC.js";import"./focusable-DpwIps9l.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-XWYKtKkO.js";import"./use-disclosure-BUc-w3Iw.js";import"./lazy-oo6M69xf.js";import"./motion-DvjLKyOb.js";import"./v-stack-BWLqSESZ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c99cf149-1f5b-4d82-82a7-51ca0dffbc68",e._sentryDebugIdIdentifier="sentry-dbid-c99cf149-1f5b-4d82-82a7-51ca0dffbc68")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
