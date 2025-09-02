import{j as e}from"./jsx-runtime-DCp243fw.js";import{i as _}from"./index-C0BIHFDV.js";import{R as j}from"./ReactIconWrapper-XCQmKdjf.js";import{C as g,E as y}from"./index-BvGvFhyo.js";import{a as k}from"./numericalFormatting-AL2xQBU0.js";import{D as A}from"./decimal-C6g1TQWS.js";import{r as C}from"./index-X37gZHMr.js";import{c as I}from"./index-Dfmnj34x.js";import"./iframe-CjW4I00D.js";import{u as E}from"./useTranslation-CUzMHgJo.js";import{F as i}from"./flex-Cd8PCP7_.js";import{T as D,a as u,b as o}from"./tr-ngr9IF7O.js";import{T as P}from"./thead-heUSlawx.js";import{T as d}from"./th-DNEvLQMg.js";import{T as n}from"./text-ds9L_zFH.js";import{T as v}from"./tbody-BnkDR2yj.js";import{I as w}from"./image-BdAFyPcz.js";import{B as p}from"./box-CymiGRYS.js";import{A as m,S as c}from"./types-B0EpKFyP.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./icon-CT-N4CCY.js";import"./use-style-config-BMocqkaz.js";import"./factory-BXOVdwo-.js";import"./stringFormatting-DowMODBc.js";import"./iconBase-UsA_wLJJ.js";import"./context-B35ttG2n.js";import"./context-CUL0MZ7i.js";import"./use-safe-layout-effect-CG6AAKpb.js";try{let a=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new a.Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="bb4ad35b-a454-4e57-b752-7a6925f513ee",a._sentryDebugIdIdentifier="sentry-dbid-bb4ad35b-a454-4e57-b752-7a6925f513ee")}catch{}const x=({pendingStakes:a,onRowClick:r})=>{const{t:s}=E("staking"),T=C.useCallback(t=>_[t],[]);return e.jsx(i,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"PendingStakesTable","data-sentry-source-file":"index.tsx",children:e.jsxs(D,{"data-sentry-element":"Table","data-sentry-source-file":"index.tsx",children:[e.jsx(P,{bg:"grey.light.5","data-sentry-element":"Thead","data-sentry-source-file":"index.tsx",children:e.jsxs(u,{sx:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:"1px solid",borderColor:"grey.light.10"}},"data-sentry-element":"Tr","data-sentry-source-file":"index.tsx",children:[e.jsx(d,{px:0,pl:2,w:{sm:"25%",base:"50%"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(n,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(d,{px:0,display:{sm:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(n,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.status")})}),e.jsx(d,{px:0,w:"50%",textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(n,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.amount")})}),e.jsx(d,{width:"40px","data-sentry-element":"Th","data-sentry-source-file":"index.tsx"})]})}),e.jsx(v,{"data-sentry-element":"Tbody","data-sentry-source-file":"index.tsx",children:a.map((t,S)=>e.jsxs(u,{cursor:"pointer",onClick:()=>r(t),w:"full",sx:{"& td":{paddingLeft:0,paddingRight:0,paddingTop:4,paddingBottom:3,height:14}},children:[e.jsx(o,{children:e.jsxs(i,{gap:1,flexDir:"column",children:[e.jsxs(i,{gap:3,alignItems:"center",flexDir:"row",children:[e.jsx(w,{src:T(t.asset.toLocaleLowerCase()),width:{base:"28px",sm:"42px"},height:{base:"28px",sm:"42px"},alt:"Bitcoin icon",borderRadius:"full"}),e.jsxs(i,{flexDir:"column",children:[e.jsx(n,{textStyle:"ManropeSemiboldBodySmall",children:t.name}),e.jsx(n,{textStyle:{base:"ManropeSemiboldBodySmall",sm:"ManropeSemiboldXSmall"},color:"grey.light.50",children:t.asset.toUpperCase()})]})]}),e.jsx(p,{display:{base:"flex",sm:"none"},children:e.jsx(g,{text:s(t.type==="stake"?"dashboard.bonding":"dashboard.unbonding"),variant:y.YELLOW})})]})}),e.jsx(o,{display:{base:"none",sm:"table-cell"},textAlign:"right",children:e.jsx(p,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:e.jsx(g,{text:s(t.type==="stake"?"dashboard.bonding":"dashboard.unbonding"),variant:y.YELLOW})})}),e.jsx(o,{textAlign:"right",children:e.jsxs(n,{textStyle:"ManropeSemiboldBodySmall",children:[k(new A(t.value).abs(),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(o,{w:"40px",children:e.jsx(p,{display:"flex",alignItems:"center",justifyContent:"center",ml:2,children:e.jsx(j,{icon:I,size:16,color:"grey.light.90"})})})]},t.asset+S))})]})})};try{x.displayName="PendingStakesTable",x.__docgenInfo={description:"",displayName:"PendingStakesTable",props:{pendingStakes:{defaultValue:null,description:"",name:"pendingStakes",required:!0,type:{name:'(APIStake & Pick<AssetDetailsFull, "name" | "precision">)[]'}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!0,type:{name:"(stake: APIStake) => void"}}}}}catch{}const pe={component:x,tags:["pending"]},l={args:{pendingStakes:[{uuid:"1",asset:c.ATOM,aggregate:"1",type:m.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",name:"Cosmos",precision:"8"},{uuid:"2",asset:c.SOL,aggregate:"1",type:m.UNSTAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",name:"Solana",precision:"8"},{uuid:"3",asset:c.ETH,aggregate:"1",type:m.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",name:"Ethereum",precision:"8"}],onRowClick:()=>{}}};var f,h,b;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    pendingStakes: [{
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
      name: "Ethereum",
      precision: "8"
    }],
    onRowClick: () => {}
  }
}`,...(b=(h=l.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};const me=["Default"];export{l as Default,me as __namedExportsOrder,pe as default};
