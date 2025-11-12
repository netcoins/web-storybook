import{j as e}from"./jsx-runtime-BZwxaNNh.js";import{i as P}from"./index-C_AKyziO.js";import{I as M}from"./index-DHDC39yw.js";import{a as y}from"./numericalFormatting-BYBIA2sd.js";import{D as m}from"./decimal-C6g1TQWS.js";import{r as f}from"./index-BQhHUdl8.js";import"./iframe-ICbxuxEW.js";import{u as I}from"./useTranslation-Q40jE_wa.js";import{F as p}from"./flex-_4Xanptx.js";import{T as C,a as h,b as n}from"./tr-Bazmln5V.js";import{T as D}from"./thead-B7NW56Jc.js";import{T as i}from"./th-BCqUHpwj.js";import{T as s}from"./text-CUgKzfMJ.js";import{T as E}from"./tbody--SBnESdG.js";import{I as v}from"./image-zp7_hHi4.js";import{B}from"./box-Dx_9YnRk.js";import{A as c,S as u}from"./types-DeHMGxDY.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-B_BPouDO.js";import"./iconBase-BrtR3i37.js";import"./menu-tBWsJtA8.js";import"./use-descendant-2y8Thf_r.js";import"./context-CCG-6Xra.js";import"./use-merge-refs-C4R-i6dx.js";import"./use-popper-ZXfMEZuY.js";import"./use-event-listener-lvU6OWri.js";import"./use-callback-ref-_SvJKVsu.js";import"./use-safe-layout-effect-PZOpkBLl.js";import"./use-update-effect-nCDvy6p8.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-i_a_oO3a.js";import"./attr-DNG3tQ7M.js";import"./use-disclosure-CLgbq1Rv.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-Bvm4vZhH.js";import"./children-HmYKttmL.js";import"./use-style-config-C-wOO7jX.js";import"./factory-p3NdpFZJ.js";import"./menu-list-C_0EFETj.js";import"./motion-D89dB1b-.js";import"./icon-button-8mj9Wkff.js";import"./button-y5P0Rbbl.js";import"./spinner-BJ5_SpHj.js";import"./emotion-react.browser.esm-BVicuuqY.js";import"./define-styles-k0dS9I3S.js";import"./menu-item-CsE1KNE0.js";import"./menu-icon-CC2kfznI.js";import"./stringFormatting-fONYHf5e.js";import"./context-CVW9LEaw.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new r.Error().stack;o&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[o]="30b5edf4-ed79-47d5-9584-0b4f494afc7d",r._sentryDebugIdIdentifier="sentry-dbid-30b5edf4-ed79-47d5-9584-0b4f494afc7d")}catch{}const x=({stakes:r,onStakeMorePress:o,onUnstakePress:T,onViewDetailsPress:w})=>{const{t:a}=I("staking"),A=f.useCallback(t=>P[t],[]),j=f.useCallback((t,d)=>{const k=new m(t).gt(0),g=[{text:a("dashboard.earnMore"),onClick:()=>o(d)},{text:a("dashboard.viewDetails"),onClick:()=>w(d)}];return k&&g.splice(1,0,{text:a("dashboard.unstake"),onClick:()=>T(d)}),g},[]);return e.jsx(p,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"MyStakesTable","data-sentry-source-file":"index.tsx",children:e.jsxs(C,{"data-sentry-element":"Table","data-sentry-source-file":"index.tsx",children:[e.jsx(D,{bg:"grey.light.5","data-sentry-element":"Thead","data-sentry-source-file":"index.tsx",children:e.jsxs(h,{sx:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:"1px solid",borderColor:"grey.light.10"}},"data-sentry-element":"Tr","data-sentry-source-file":"index.tsx",children:[e.jsx(i,{px:0,pl:2,w:{sm:"25%",base:"50%"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(s,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.cryptoAssets")})}),e.jsx(i,{px:0,display:{sm:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(s,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.stakedBalance")})}),e.jsx(i,{px:0,display:{lg:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx"}),e.jsx(i,{px:0,w:{lg:"25%",base:"50%"},textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(s,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.lifetimeRewards")})}),e.jsx(i,{width:"40px","data-sentry-element":"Th","data-sentry-source-file":"index.tsx"})]})}),e.jsx(E,{"data-sentry-element":"Tbody","data-sentry-source-file":"index.tsx",children:r.map(t=>e.jsxs(h,{w:"full",sx:{"& td":{paddingLeft:0,paddingRight:0,paddingTop:4,paddingBottom:3,height:14}},children:[e.jsx(n,{children:e.jsxs(p,{gap:3,alignItems:"center",children:[e.jsx(v,{src:A(t.asset.toLocaleLowerCase()),width:{base:"28px",sm:"42px"},height:{base:"28px",sm:"42px"},alt:"Bitcoin icon",borderRadius:"full"}),e.jsxs(p,{flexDir:"column",children:[e.jsx(s,{textStyle:"ManropeSemiboldBodySmall",children:t.name}),e.jsx(s,{textStyle:{base:"ManropeSemiboldBodySmall",sm:"ManropeSemiboldXSmall"},color:"grey.light.50",children:t.asset.toUpperCase()})]})]})}),e.jsx(n,{textAlign:"right",display:{base:"none",sm:"table-cell"},children:e.jsxs(s,{textStyle:"ManropeSemiboldBodySmall",children:[y(new m(t.value),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(n,{textAlign:"center",display:{base:"none",lg:"table-cell"},children:e.jsx(s,{textStyle:"ManropeSemiboldBodySmall",children:t.interest_range+" "+a(t.compounds?"dashboard.apy":"dashboard.apr")})}),e.jsx(n,{textAlign:"right",children:e.jsxs(s,{textStyle:"ManropeSemiboldBodySmall",children:[y(new m(t.lifetime_rewards),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(n,{w:"40px",children:e.jsx(B,{display:"inline-block",verticalAlign:"middle",ml:2,children:e.jsx(M,{items:j(t.value,t)})})})]},t.asset))})]})})};try{x.displayName="MyStakesTable",x.__docgenInfo={description:"",displayName:"MyStakesTable",props:{stakes:{defaultValue:null,description:"",name:"stakes",required:!0,type:{name:'(APIStake & Pick<StakingInfo, "compounds" | "interest_range" | "lifetime_rewards"> & Pick<AssetDetailsFull, "name" | "precision">)[]'}},onStakeMorePress:{defaultValue:null,description:"",name:"onStakeMorePress",required:!0,type:{name:"(stake: APIStake) => void"}},onUnstakePress:{defaultValue:null,description:"",name:"onUnstakePress",required:!0,type:{name:"(stake: APIStake) => void"}},onViewDetailsPress:{defaultValue:null,description:"",name:"onViewDetailsPress",required:!0,type:{name:"(stake: APIStake) => void"}}}}}catch{}const Ue={component:x,tags:["pending"]},l={args:{stakes:[{uuid:"1",asset:u.ATOM,aggregate:"1",type:c.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Cosmos",precision:"8"},{uuid:"2",asset:u.SOL,aggregate:"1",type:c.UNSTAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Solana",precision:"8"},{uuid:"3",asset:u.ETH,aggregate:"1",type:c.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Ethereum",precision:"8"}],onStakeMorePress:()=>{},onUnstakePress:()=>{},onViewDetailsPress:()=>{}}};var b,S,_;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    stakes: [{
      uuid: "1",
      asset: StakeCryptoAssets.ATOM,
      aggregate: "1",
      type: APIStakeType.STAKE,
      pending: false,
      value: "1",
      asset_price: "1",
      completed_at: "1",
      completed_timer: 1,
      created_at: "1",
      lifetime_rewards: "1",
      interest_range: "1",
      compounds: true,
      name: "Cosmos",
      precision: "8"
    }, {
      uuid: "2",
      asset: StakeCryptoAssets.SOL,
      aggregate: "1",
      type: APIStakeType.UNSTAKE,
      pending: false,
      value: "1",
      asset_price: "1",
      completed_at: "1",
      completed_timer: 1,
      created_at: "1",
      lifetime_rewards: "1",
      interest_range: "1",
      compounds: true,
      name: "Solana",
      precision: "8"
    }, {
      uuid: "3",
      asset: StakeCryptoAssets.ETH,
      aggregate: "1",
      type: APIStakeType.STAKE,
      pending: false,
      value: "1",
      asset_price: "1",
      completed_at: "1",
      completed_timer: 1,
      created_at: "1",
      lifetime_rewards: "1",
      interest_range: "1",
      compounds: true,
      name: "Ethereum",
      precision: "8"
    }],
    onStakeMorePress: () => {},
    onUnstakePress: () => {},
    onViewDetailsPress: () => {}
  }
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const Ve=["Default"];export{l as Default,Ve as __namedExportsOrder,Ue as default};
