import{j as e}from"./jsx-runtime-DPMpNnXZ.js";import{i as _}from"./index-CYIcUZXV.js";import{R as j}from"./ReactIconWrapper-BiBsPajd.js";import{C as g,E as u}from"./index-Cjk53CWf.js";import{a as k}from"./numericalFormatting-v8sCh4V0.js";import{D as A}from"./decimal-C6g1TQWS.js";import{r as C}from"./index-B84vUFZt.js";import{c as I}from"./index-B8mbdxED.js";import"./iframe-D4MesB1-.js";import{u as E}from"./useTranslation-tVwBD663.js";import{F as i}from"./flex-DRNaZEXn.js";import{T as n}from"./index-TWaqeXJZ.js";import{I as R}from"./image-BeoQDwl0.js";import{B as m}from"./index-BuaD3O4C.js";import{T as D,f as P,b as y,d as o,a as v,c as l}from"./table-67YccCTF.js";import{A as p,S as c}from"./types-C6y_pVZD.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./icon-Bo4cYvSi.js";import"./create-recipe-context-Dvnq3eBD.js";import"./factory-DyNYFw1b.js";import"./stringFormatting-B0zCRGTk.js";import"./iconBase-Ba8qU5zn.js";import"./context-v5lDWSZy.js";import"./create-slot-recipe-context-Dcgux3jd.js";try{let a=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},r=new a.Error().stack;r&&(a._sentryDebugIds=a._sentryDebugIds||{},a._sentryDebugIds[r]="4c2ee0f0-6961-47fc-ab14-8330ba971329",a._sentryDebugIdIdentifier="sentry-dbid-4c2ee0f0-6961-47fc-ab14-8330ba971329")}catch{}const x=({pendingStakes:a,onRowClick:r})=>{const{t:s}=E("staking"),S=C.useCallback(t=>_[t],[]);return e.jsx(i,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"PendingStakesTable","data-sentry-source-file":"index.tsx",children:e.jsxs(D,{"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(P,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(y,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:"1px solid",borderColor:"grey.light.10"}},bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(o,{px:0,pl:2,w:{sm:"25%",base:"50%"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(n,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(o,{px:0,display:{sm:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(n,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.status")})}),e.jsx(o,{px:0,w:"50%",textAlign:"right","data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(n,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.amount")})}),e.jsx(o,{minWidth:"40px","data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx"})]})}),e.jsx(v,{"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:a.map((t,T)=>e.jsxs(y,{cursor:"pointer",onClick:()=>r(t),w:"full",css:{"& td":{paddingLeft:0,paddingRight:0,paddingTop:4,paddingBottom:3,height:14}},children:[e.jsx(l,{children:e.jsxs(i,{gap:1,flexDir:"column",children:[e.jsxs(i,{gap:3,alignItems:"center",flexDir:"row",children:[e.jsx(R,{src:S(t.asset.toLocaleLowerCase()),width:{base:"28px",sm:"42px"},height:{base:"28px",sm:"42px"},alt:"Bitcoin icon",borderRadius:"full"}),e.jsxs(i,{flexDir:"column",children:[e.jsx(n,{textStyle:"ManropeSemiboldBodySmall",children:t.name}),e.jsx(n,{textStyle:{base:"ManropeSemiboldBodySmall",sm:"ManropeSemiboldXSmall"},color:"grey.light.50",children:t.asset.toUpperCase()})]})]}),e.jsx(m,{display:{base:"flex",sm:"none"},children:e.jsx(g,{text:s(t.type==="stake"?"dashboard.bonding":"dashboard.unbonding"),variant:u.YELLOW})})]})}),e.jsx(l,{display:{base:"none",sm:"table-cell"},textAlign:"right",children:e.jsx(m,{display:"flex",alignItems:"center",justifyContent:"flex-end",children:e.jsx(g,{text:s(t.type==="stake"?"dashboard.bonding":"dashboard.unbonding"),variant:u.YELLOW})})}),e.jsx(l,{textAlign:"right",children:e.jsxs(n,{textStyle:"ManropeSemiboldBodySmall",children:[k(new A(t.value).abs(),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(l,{minWidth:"40px",children:e.jsx(m,{display:"flex",alignItems:"center",justifyContent:"center",ml:2,children:e.jsx(j,{icon:I,size:16,color:"grey.light.90"})})})]},t.asset+T))})]})})};try{x.displayName="PendingStakesTable",x.__docgenInfo={description:"",displayName:"PendingStakesTable",props:{pendingStakes:{defaultValue:null,description:"",name:"pendingStakes",required:!0,type:{name:'(APIStake & Pick<AssetDetailsFull, "name" | "precision">)[]'}},onRowClick:{defaultValue:null,description:"",name:"onRowClick",required:!0,type:{name:"(stake: APIStake) => void"}}}}}catch{}const ie={component:x,tags:["pending"]},d={args:{pendingStakes:[{uuid:"1",asset:c.ATOM,aggregate:"1",type:p.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",name:"Cosmos",precision:"8"},{uuid:"2",asset:c.SOL,aggregate:"1",type:p.UNSTAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",name:"Solana",precision:"8"},{uuid:"3",asset:c.ETH,aggregate:"1",type:p.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",name:"Ethereum",precision:"8"}],onRowClick:()=>{}}};var f,b,h;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(h=(b=d.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};const oe=["Default"];export{d as Default,oe as __namedExportsOrder,ie as default};
