import{j as a}from"./jsx-runtime-D5DeI2s5.js";import{r as s}from"./index-C8i9cqqN.js";import{C as j,a as b,b as A}from"./index-M-3aLh_X.js";import"./iframe-C-XDvpdu.js";import{V as g}from"./v-stack-CVwCrKjn.js";import{T as E}from"./index-BfLgRuuH.js";import{B as I}from"./index-CXQPOW_k.js";import"./index-D5Csk7iv.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Dda0FgcA.js";import"./create-recipe-context-BRH5V4XP.js";import"./factory-kNuYJGc7.js";import"./flex-DKdUXSv4.js";import"./useTranslation-KzLdfBNZ.js";import"./context-DvK3fx0a.js";import"./image-CWSDln4w.js";import"./index-CW430clL.js";import"./iconBase-DMl_FT9g.js";import"./use-breakpoint-wc3uetVu.js";import"./use-callback-ref-sBZ3NBAb.js";import"./button-Co_WvyBc.js";import"./attr-DhmmAXiK.js";import"./spinner-BP9ad5oI.js";import"./input-group-CqMvzMSM.js";import"./input-uVa8jg9o.js";import"./factory-ZHcklB47.js";import"./index-ZoHJkkX0.js";import"./use-field-context-Dl8iMPum.js";import"./create-context-XQK9kIJ7.js";import"./menu-CxXHtgDD.js";import"./create-slot-recipe-context-U_n8nSAV.js";import"./icons-COkOUVff.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-DXzEKp2t.js";import"./use-presence-context-Cec51OVb.js";import"./index-BLVBAjsL.js";import"./index-DvYIvpKO.js";import"./index-DBUEsidC.js";import"./index-CTOKdcSd.js";import"./use-event-DeAaH8k1.js";import"./index-DjRw-LTH.js";import"./index-pW82Y0Cx.js";import"./index-CXpwuWEX.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-8lXC83iU.js";import"./use-environment-context-aix4a6ly.js";import"./use-locale-context-BrI47jrT.js";import"./stack-NR9H_vs6.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},t=new e.Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="72896460-8f34-46cb-8b8a-f069a70d6542",e._sentryDebugIdIdentifier="sentry-dbid-72896460-8f34-46cb-8b8a-f069a70d6542")}catch{}function w(e,t){var r;return a.jsx(a.Fragment,{children:(r=e==null?void 0:e.options)==null?void 0:r.map(i=>a.jsx(b,{option:i,onClick:()=>e.onSelect(i),selected:t===i.value},i.value))})}function v({categories:e,categoryGroups:t,selectedOption:r,search:i=!1,onSearchTermChange:l,mode:d="default"}){const[C,m]=s.useState(!1),[n,u]=s.useState(""),p=s.useMemo(()=>e?e.filter(o=>s.Children.count(o.children)>0):t==null?void 0:t.reduce((o,c)=>(c.options.length===0||o.push({title:c.title,children:w(c,r==null?void 0:r.value)}),o),[]),[e,t,r==null?void 0:r.value]),_=o=>{u(o),l==null||l(o)};return a.jsx(j,{open:C,setOpen:m,selectedOption:r,mode:d,searchTerm:i?n:void 0,onSearchChange:i?_:void 0,positionerWidth:{base:"calc(100% - 32px)",lg:"calc(100% - 64px)"},"data-sentry-element":"CoinSelectWrapper","data-sentry-component":"CategorizedCoinSelect","data-sentry-source-file":"index.tsx",children:a.jsx(g,{align:"stretch",gap:0,maxHeight:"400px",overflowY:"auto",borderColor:"grey.light.10",borderTopWidth:"1px",pb:1,"data-sentry-element":"VStack","data-sentry-source-file":"index.tsx",children:p==null?void 0:p.map((o,c)=>a.jsxs(g,{align:"stretch",gap:0,children:[o.title&&(p==null?void 0:p.length)>1&&a.jsx(E,{textStyle:"ManropeSemiboldBodySmall",color:"grey.light.70",px:4,py:"18.5px",children:o.title}),a.jsx(I,{onClick:()=>m(!1),children:o.children})]},`category-${c}`))})})}try{v.displayName="CategorizedCoinSelect",v.__docgenInfo={description:"",displayName:"CategorizedCoinSelect",props:{categories:{defaultValue:null,description:"",name:"categories",required:!1,type:{name:"CategoryItemProps[]"}},categoryGroups:{defaultValue:null,description:"",name:"categoryGroups",required:!1,type:{name:"CategoryGroupProps<T>[]"}},selectedOption:{defaultValue:null,description:"",name:"selectedOption",required:!1,type:{name:"Option<T>"}},search:{defaultValue:{value:"false"},description:"",name:"search",required:!1,type:{name:"boolean"}},onSearchTermChange:{defaultValue:null,description:"",name:"onSearchTermChange",required:!1,type:{name:"((searchTerm: string) => void)"}},mode:{defaultValue:{value:"default"},description:"",name:"mode",required:!1,type:{name:"CoinSelectMode"}}}}}catch{}const h=[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}],Ee={component:A,tags:["pending"]},S={render:e=>{const[t,r]=s.useState(h[0]);return a.jsx(A,{...e,selectedOption:t,setSelectedOption:r})},args:{search:!1,options:[{value:"BTC",label:"Bitcoin",desc:"BTC"},{value:"ETH",label:"Ethereum",desc:"ETH"},{value:"SOL",label:"Solana",desc:"SOL"},{value:"ADA",label:"Cardano",desc:"ADA"},{value:"SHIB",label:"Shiba",desc:"SHIB"}]}},f={render:()=>{const[e,t]=s.useState(h[0]),[r,i]=s.useState(""),l=r.trim().toLowerCase(),d=n=>l?n.filter(u=>u.label.toLowerCase().includes(l)||u.value.toString().toLowerCase().includes(l)):n,C=d(h.slice(0,2)),m=d(h.slice(2));return a.jsx(v,{search:!0,selectedOption:e,onSearchTermChange:i,categories:[{title:"My Holdings",children:C.map(n=>a.jsx(b,{option:n,onClick:()=>t(n),selected:(e==null?void 0:e.value)===n.value},n.value))},{title:"Coins Available to Convert",children:m.map(n=>a.jsx(b,{option:n,onClick:()=>t(n),selected:(e==null?void 0:e.value)===n.value},n.value))}]})}};var T,O,x;S.parameters={...S.parameters,docs:{...(T=S.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [selectedOption, setSelectedOption] = useState<Option<string | number>>(options[0]);
    return <CoinSelect {...args} selectedOption={selectedOption} setSelectedOption={setSelectedOption} />;
  },
  args: {
    search: false,
    options: [{
      value: "BTC",
      label: "Bitcoin",
      desc: "BTC"
    }, {
      value: "ETH",
      label: "Ethereum",
      desc: "ETH"
    }, {
      value: "SOL",
      label: "Solana",
      desc: "SOL"
    }, {
      value: "ADA",
      label: "Cardano",
      desc: "ADA"
    }, {
      value: "SHIB",
      label: "Shiba",
      desc: "SHIB"
    }]
  }
}`,...(x=(O=S.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var y,B,H;f.parameters={...f.parameters,docs:{...(y=f.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [selectedOption, setSelectedOption] = useState<Option<string | number>>(options[0]);
    const [searchTerm, setSearchTerm] = useState("");
    const normalizedSearchTerm = searchTerm.trim().toLowerCase();
    const filterOptions = (items: typeof options) => {
      if (!normalizedSearchTerm) return items;
      return items.filter(option => option.label.toLowerCase().includes(normalizedSearchTerm) || option.value.toString().toLowerCase().includes(normalizedSearchTerm));
    };
    const holdingsOptions = filterOptions(options.slice(0, 2));
    const availableOptions = filterOptions(options.slice(2));
    return <CategorizedCoinSelect search selectedOption={selectedOption} onSearchTermChange={setSearchTerm} categories={[{
      title: "My Holdings",
      children: holdingsOptions.map(option => <CoinOption key={option.value} option={option} onClick={() => setSelectedOption(option)} selected={selectedOption?.value === option.value} />)
    }, {
      title: "Coins Available to Convert",
      children: availableOptions.map(option => <CoinOption key={option.value} option={option} onClick={() => setSelectedOption(option)} selected={selectedOption?.value === option.value} />)
    }]} />;
  }
}`,...(H=(B=f.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};const Ie=["Default","Categorized"];export{f as Categorized,S as Default,Ie as __namedExportsOrder,Ee as default};
