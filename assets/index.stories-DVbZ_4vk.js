import{j as b}from"./jsx-runtime-B4yJAW4F.js";import{r as g}from"./index-7mQJAlOt.js";import{M as i}from"./index-CVMPVgsE.js";import"./iframe-uoe2xVnD.js";import"./index-DsGkuK_C.js";import"./index-BVxqEYXK.js";import"./types-DezzPfZJ.js";import"./use-style-config-BbW2_Tay.js";import"./button-kpeWf5m4.js";import"./context-pZcGTPqu.js";import"./spinner-B5tFgrvz.js";import"./emotion-react.browser.esm-HOelbQ7t.js";import"./define-styles-k0dS9I3S.js";import"./attr-DNG3tQ7M.js";import"./use-merge-refs-DrPKD2E9.js";import"./flex-BPty2MAD.js";import"./icon-CW6weW_y.js";import"./text-ckVTOhTF.js";import"./index-DEhzt2en.js";import"./index-DUWrhci5.js";import"./index.esm-1FzDA09A.js";import"./index-CMWqejqm.js";import"./index-4PzaVRRh.js";import"./iconBase-MUa0mIqo.js";import"./link-FV7zgGmy.js";import"./index-DUauHKOO.js";import"./index-CeYNawgj.js";import"./useColorFormatConverter-BeoaaeE4.js";import"./index-BDyClJ5q.js";import"./IconWrapper-gVrkYnM2.js";import"./box-CYwnp9cV.js";import"./form-control-CD8Ov2BQ.js";import"./form-label-CENYkKLo.js";import"./input-group-DBndln86.js";import"./children-0WRIqFam.js";import"./input-addon-D1C76tcZ.js";import"./input-2dSwiuRm.js";import"./use-form-control-FC1gUooy.js";import"./call-all--NRVVPhS.js";import"./input-element-CzX1dkFW.js";import"./h-stack-CJx6QTLH.js";import"./stack-C62ymJFo.js";import"./responsive-BdiobqNd.js";import"./use-checkbox-GFzvlxuR.js";import"./use-callback-ref-YjOusxPw.js";import"./use-safe-layout-effect-Cvp_rYKq.js";import"./use-update-effect-dh1lefLr.js";import"./index-BPJsYvtj.js";import"./ReactIconWrapper-Cn4GAbVZ.js";import"./useTranslation-Bzepq4CX.js";import"./context-TB_hab3F.js";import"./menu-list-CqYg7J6R.js";import"./use-descendant-BvVPTrXB.js";import"./use-popper-BuKun8oZ.js";import"./use-event-listener-WvEZldha.js";import"./focusable-DpwIps9l.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-clickable-BpbGOiUK.js";import"./use-disclosure-CLyy15bU.js";import"./lazy-oo6M69xf.js";import"./motion-CydpOdtg.js";import"./v-stack-DduXOKLC.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="c99cf149-1f5b-4d82-82a7-51ca0dffbc68",e._sentryDebugIdIdentifier="sentry-dbid-c99cf149-1f5b-4d82-82a7-51ca0dffbc68")}catch{}const we={component:i,tags:["pending"]},r={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}},o={render:e=>{const[t,n]=g.useState([]),l=a=>{n(a)};return b.jsx(i,{...e,selectedOptions:t,onSaveClick:l,setSelectedOptions:n})},args:{search:!0,options:[{value:1,label:"Apple",desc:"Fruit"},{value:2,label:"Banana",desc:"Fruit"},{value:3,label:"Carrot",desc:"Vegetable"},{value:4,label:"Date",desc:"Fruit"},{value:5,label:"Eggplant",desc:"Vegetable"}],placeholder:"Select Produce"}};var s,p,c;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
