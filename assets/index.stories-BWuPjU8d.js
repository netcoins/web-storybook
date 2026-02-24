import{j as e}from"./jsx-runtime-BdkXbjko.js";import{i as C}from"./index-Xi3hdCwA.js";import{I as P}from"./index-DOurMrz4.js";import{a as y}from"./numericalFormatting-Lx2J5SEf.js";import{D as m}from"./decimal-C6g1TQWS.js";import{r as f}from"./index-DB51DUFv.js";import"./iframe-BdH25jYA.js";import{u as M}from"./useTranslation-GGhkpz1f.js";import{F as p}from"./flex-BxpYFeL2.js";import{T as a}from"./index-Bm1yYWlC.js";import{I}from"./image-Blhv9lky.js";import{B as D}from"./index-BIcqwx7Y.js";import{T as E,e as v,b,d as n,a as B,c as o}from"./table-DNuEkGsa.js";import{A as c,S as u}from"./types-BjS56Wjm.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-DOnzkkx-.js";import"./button-B8BXZL3n.js";import"./factory-CEv1ktPX.js";import"./create-recipe-context-cqBIdbee.js";import"./attr-DhmmAXiK.js";import"./spinner-C6Bgahz8.js";import"./icon-C3lFvyta.js";import"./index-Bd_b7Hno.js";import"./iconBase-Cci91VHL.js";import"./portal-BjNBTx2r.js";import"./index-CehdyC4B.js";import"./index-CA_foo3-.js";import"./index-C7Msfp21.js";import"./use-environment-context-D2xClmVb.js";import"./create-context-D2AkJT4o.js";import"./menu-BpcWmhZ7.js";import"./create-slot-recipe-context-BYz_odB4.js";import"./icons-C2zFHK-T.js";import"./create-split-props-1H4FxmAF.js";import"./split-presence-props-v67ewTJu.js";import"./use-presence-context-DuYzFG6w.js";import"./index-BLVBAjsL.js";import"./index-DofmaLkm.js";import"./use-event-CC6shJxy.js";import"./index-CkgrAf5i.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-BpECUZYK.js";import"./use-locale-context-DWo43fKx.js";import"./factory-TzRYTmhl.js";import"./stringFormatting-dCs2NKxR.js";import"./context-CJXSmzPe.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new r.Error().stack;i&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[i]="a6f7634d-7f6b-4354-93d1-60b6878f9f9b",r._sentryDebugIdIdentifier="sentry-dbid-a6f7634d-7f6b-4354-93d1-60b6878f9f9b")}catch{}const x=({stakes:r,onStakeMorePress:i,onUnstakePress:T,onViewDetailsPress:w})=>{const{t:s}=M("staking"),A=f.useCallback(t=>C[t],[]),j=f.useCallback((t,d)=>{const k=new m(t).gt(0),g=[{text:s("dashboard.earnMore"),onClick:()=>i(d)},{text:s("dashboard.viewDetails"),onClick:()=>w(d)}];return k&&g.splice(1,0,{text:s("dashboard.unstake"),onClick:()=>T(d)}),g},[]);return e.jsx(p,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"MyStakesTable","data-sentry-source-file":"index.tsx",children:e.jsxs(E,{"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(v,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(b,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:"1px solid",borderColor:"grey.light.10"}},bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(n,{px:0,pl:2,w:{sm:"25%",base:"50%"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(a,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(n,{px:0,display:{sm:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(a,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.stakedBalance")})}),e.jsx(n,{px:0,display:{lg:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx"}),e.jsx(n,{px:0,w:{lg:"25%",base:"50%"},textAlign:"right","data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(a,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.lifetimeRewards")})}),e.jsx(n,{width:"40px","data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx"})]})}),e.jsx(B,{"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:r.map(t=>e.jsxs(b,{w:"full",css:{"& td":{paddingLeft:0,paddingRight:0,paddingTop:4,paddingBottom:3,height:14}},children:[e.jsx(o,{children:e.jsxs(p,{gap:3,alignItems:"center",children:[e.jsx(I,{src:A(t.asset.toLocaleLowerCase()),width:{base:"28px",sm:"42px"},height:{base:"28px",sm:"42px"},alt:"Bitcoin icon",borderRadius:"full"}),e.jsxs(p,{flexDir:"column",children:[e.jsx(a,{textStyle:"ManropeSemiboldBodySmall",children:t.name}),e.jsx(a,{textStyle:{base:"ManropeSemiboldBodySmall",sm:"ManropeSemiboldXSmall"},color:"grey.light.50",children:t.asset.toUpperCase()})]})]})}),e.jsx(o,{textAlign:"right",display:{base:"none",sm:"table-cell"},children:e.jsxs(a,{textStyle:"ManropeSemiboldBodySmall",children:[y(new m(t.value),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(o,{textAlign:"center",display:{base:"none",lg:"table-cell"},children:e.jsx(a,{textStyle:"ManropeSemiboldBodySmall",children:t.interest_range+" "+s(t.compounds?"dashboard.apy":"dashboard.apr")})}),e.jsx(o,{textAlign:"right",children:e.jsxs(a,{textStyle:"ManropeSemiboldBodySmall",children:[y(new m(t.lifetime_rewards),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(o,{w:"40px",children:e.jsx(D,{display:"inline-block",verticalAlign:"middle",ml:2,children:e.jsx(P,{items:j(t.value,t)})})})]},t.asset))})]})})};try{x.displayName="MyStakesTable",x.__docgenInfo={description:"",displayName:"MyStakesTable",props:{stakes:{defaultValue:null,description:"",name:"stakes",required:!0,type:{name:'(APIStake & Pick<StakingInfo, "compounds" | "interest_range" | "lifetime_rewards"> & Pick<AssetDetailsFull, "name" | "precision">)[]'}},onStakeMorePress:{defaultValue:null,description:"",name:"onStakeMorePress",required:!0,type:{name:"(stake: APIStake) => void"}},onUnstakePress:{defaultValue:null,description:"",name:"onUnstakePress",required:!0,type:{name:"(stake: APIStake) => void"}},onViewDetailsPress:{defaultValue:null,description:"",name:"onViewDetailsPress",required:!0,type:{name:"(stake: APIStake) => void"}}}}}catch{}const Ee={component:x,tags:["pending"]},l={args:{stakes:[{uuid:"1",asset:u.ATOM,aggregate:"1",type:c.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Cosmos",precision:"8"},{uuid:"2",asset:u.SOL,aggregate:"1",type:c.UNSTAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Solana",precision:"8"},{uuid:"3",asset:u.ETH,aggregate:"1",type:c.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Ethereum",precision:"8"}],onStakeMorePress:()=>{},onUnstakePress:()=>{},onViewDetailsPress:()=>{}}};var h,S,_;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const ve=["Default"];export{l as Default,ve as __namedExportsOrder,Ee as default};
