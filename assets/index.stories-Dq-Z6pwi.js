import{j as e}from"./jsx-runtime-BNQDehop.js";import{i as P}from"./index-C5vDtgDI.js";import{I as M}from"./index-sN1D-TIu.js";import{a as y}from"./numericalFormatting-CtaoNkLe.js";import{D as m}from"./decimal-C6g1TQWS.js";import{r as f}from"./index-Dtvo63Fj.js";import"./iframe-BK-dEJ0W.js";import{u as I}from"./useTranslation-DbJ7AlNF.js";import{F as p}from"./flex-B7YzHcV8.js";import{T as C,a as b,b as n}from"./tr-D-8vum4n.js";import{T as D}from"./thead-CX2a7XL8.js";import{T as i}from"./th-DPAYPQqk.js";import{T as a}from"./text-DnKu5_yy.js";import{T as E}from"./tbody-Bo03Vjat.js";import{I as v}from"./image-DUk52YYK.js";import{B}from"./box-CDfQMF8X.js";import{A as c,S as u}from"./types-RI29SnaJ.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-u9657gCf.js";import"./iconBase-DKcCp5rX.js";import"./menu-DYL2_7G0.js";import"./use-descendant-mZ5hWIP-.js";import"./context-DhARttyT.js";import"./use-merge-refs-DJpphMDB.js";import"./use-popper-DRB3cs1y.js";import"./use-event-listener-BvrwqYMw.js";import"./use-callback-ref-B_axOoT8.js";import"./use-safe-layout-effect-X0MxaKpP.js";import"./use-update-effect-C0SCHU3z.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-clickable-CGe9DzVl.js";import"./attr-DNG3tQ7M.js";import"./use-disclosure-ndrtUGzx.js";import"./call-all--NRVVPhS.js";import"./lazy-oo6M69xf.js";import"./use-controllable-state-CSIKpcWv.js";import"./children-BulxUKbP.js";import"./use-style-config-CFTpPbOn.js";import"./factory-DjsCg92e.js";import"./menu-list-DlSrO5-K.js";import"./motion-CeR54XjC.js";import"./icon-button-BVfEC4RR.js";import"./button-UMOiJcpB.js";import"./spinner-Ka0LoZy-.js";import"./emotion-react.browser.esm-C2Aq-UjM.js";import"./define-styles-k0dS9I3S.js";import"./menu-item-BPY9PEu7.js";import"./menu-icon-D2d1rEQj.js";import"./stringFormatting-CsBdUs76.js";import"./context-DCqPBMu7.js";try{let r=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new r.Error().stack;o&&(r._sentryDebugIds=r._sentryDebugIds||{},r._sentryDebugIds[o]="2d4bba09-c5aa-43b4-b1f5-cd8eec052b6b",r._sentryDebugIdIdentifier="sentry-dbid-2d4bba09-c5aa-43b4-b1f5-cd8eec052b6b")}catch{}const x=({stakes:r,onStakeMorePress:o,onUnstakePress:T,onViewDetailsPress:w})=>{const{t:s}=I("staking"),A=f.useCallback(t=>P[t],[]),j=f.useCallback((t,d)=>{const k=new m(t).gt(0),g=[{text:s("dashboard.earnMore"),onClick:()=>o(d)},{text:s("dashboard.viewDetails"),onClick:()=>w(d)}];return k&&g.splice(1,0,{text:s("dashboard.unstake"),onClick:()=>T(d)}),g},[]);return e.jsx(p,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"MyStakesTable","data-sentry-source-file":"index.tsx",children:e.jsxs(C,{"data-sentry-element":"Table","data-sentry-source-file":"index.tsx",children:[e.jsx(D,{bg:"grey.light.5","data-sentry-element":"Thead","data-sentry-source-file":"index.tsx",children:e.jsxs(b,{sx:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:"1px solid",borderColor:"grey.light.10"}},"data-sentry-element":"Tr","data-sentry-source-file":"index.tsx",children:[e.jsx(i,{px:0,pl:2,w:{sm:"25%",base:"50%"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(a,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(i,{px:0,display:{sm:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(a,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.stakedBalance")})}),e.jsx(i,{px:0,display:{lg:"table-cell",base:"none"},w:"25%",textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx"}),e.jsx(i,{px:0,w:{lg:"25%",base:"50%"},textAlign:"right","data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(a,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.lifetimeRewards")})}),e.jsx(i,{width:"40px","data-sentry-element":"Th","data-sentry-source-file":"index.tsx"})]})}),e.jsx(E,{"data-sentry-element":"Tbody","data-sentry-source-file":"index.tsx",children:r.map(t=>e.jsxs(b,{w:"full",sx:{"& td":{paddingLeft:0,paddingRight:0,paddingTop:4,paddingBottom:3,height:14}},children:[e.jsx(n,{children:e.jsxs(p,{gap:3,alignItems:"center",children:[e.jsx(v,{src:A(t.asset.toLocaleLowerCase()),width:{base:"28px",sm:"42px"},height:{base:"28px",sm:"42px"},alt:"Bitcoin icon",borderRadius:"full"}),e.jsxs(p,{flexDir:"column",children:[e.jsx(a,{textStyle:"ManropeSemiboldBodySmall",children:t.name}),e.jsx(a,{textStyle:{base:"ManropeSemiboldBodySmall",sm:"ManropeSemiboldXSmall"},color:"grey.light.50",children:t.asset.toUpperCase()})]})]})}),e.jsx(n,{textAlign:"right",display:{base:"none",sm:"table-cell"},children:e.jsxs(a,{textStyle:"ManropeSemiboldBodySmall",children:[y(new m(t.value),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(n,{textAlign:"center",display:{base:"none",lg:"table-cell"},children:e.jsx(a,{textStyle:"ManropeSemiboldBodySmall",children:t.interest_range+" "+s(t.compounds?"dashboard.apy":"dashboard.apr")})}),e.jsx(n,{textAlign:"right",children:e.jsxs(a,{textStyle:"ManropeSemiboldBodySmall",children:[y(new m(t.lifetime_rewards),{precision:Number(t.precision),removeZerosAtTheEnd:!0})," ",t.asset.toUpperCase()]})}),e.jsx(n,{w:"40px",children:e.jsx(B,{display:"inline-block",verticalAlign:"middle",ml:2,children:e.jsx(M,{items:j(t.value,t)})})})]},t.asset))})]})})};try{x.displayName="MyStakesTable",x.__docgenInfo={description:"",displayName:"MyStakesTable",props:{stakes:{defaultValue:null,description:"",name:"stakes",required:!0,type:{name:'(APIStake & Pick<StakingInfo, "compounds" | "interest_range" | "lifetime_rewards"> & Pick<AssetDetailsFull, "name" | "precision">)[]'}},onStakeMorePress:{defaultValue:null,description:"",name:"onStakeMorePress",required:!0,type:{name:"(stake: APIStake) => void"}},onUnstakePress:{defaultValue:null,description:"",name:"onUnstakePress",required:!0,type:{name:"(stake: APIStake) => void"}},onViewDetailsPress:{defaultValue:null,description:"",name:"onViewDetailsPress",required:!0,type:{name:"(stake: APIStake) => void"}}}}}catch{}const Ue={component:x,tags:["pending"]},l={args:{stakes:[{uuid:"1",asset:u.ATOM,aggregate:"1",type:c.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Cosmos",precision:"8"},{uuid:"2",asset:u.SOL,aggregate:"1",type:c.UNSTAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Solana",precision:"8"},{uuid:"3",asset:u.ETH,aggregate:"1",type:c.STAKE,pending:!1,value:"1",asset_price:"1",completed_at:"1",completed_timer:1,created_at:"1",lifetime_rewards:"1",interest_range:"1",compounds:!0,name:"Ethereum",precision:"8"}],onStakeMorePress:()=>{},onUnstakePress:()=>{},onViewDetailsPress:()=>{}}};var h,S,_;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
