import{j as e}from"./jsx-runtime-Crn6csNr.js";import{R as M}from"./ReactIconWrapper-Dtlo8b5O.js";import{u as F,a as O,C as P}from"./index-CCcCqn_h.js";import{T as q}from"./index-BMGZ05UW.js";import{L as V}from"./index-Fu4B4-U4.js";import{T as G}from"./index-BaIx8dUf.js";import{u as z}from"./useGetAssetDetails-CzwOhL2v.js";import{u as U}from"./useRegion-Bii-YHcN.js";import{u as N}from"./useRestrictNavigation-_W9PnYSH.js";import{R as A}from"./routes-NPhluj_y.js";import{u as X,D as $}from"./useCalculateBalances-CW6EP9xX.js";import{r as x}from"./index-DnSaMpA7.js";import{c as K}from"./index-DXsiVS27.js";import{I as Q}from"./index-bK-nhkAx.js";import"./iframe-btxaWulz.js";import{u as H}from"./useTranslation-D-5U7TPz.js";import{u as W}from"./use-token-EzaWUJUD.js";import{F as _}from"./flex-iGRZGE5B.js";import{T as u}from"./index-iiQGAJk2.js";import{T as J,e as Y,b as R,d as B,a as Z,c as ee}from"./table-C_Mw4Ie3.js";import"./icon-BDKhTHkF.js";import"./create-recipe-context-CNw3eJam.js";import"./factory-CfbmFtl0.js";import"./index-CM-Hg8Kj.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CDZn329o.js";import"./index-B60wDBro.js";import"./index-DCPFmYI_.js";import"./numericalFormatting-BUuJ6DHi.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DQDoSwpg.js";import"./index-B8U75IEm.js";import"./iconBase-DCpsZ7p3.js";import"./IconWrapper-BQR7NJog.js";import"./useColorFormatConverter-BQb__Fze.js";import"./index-gQQMWDxS.js";import"./selectors-JVerF2pv.js";import"./splitApi-DU-JZCyG.js";import"./config-D1yNQFWS.js";import"./apiSlice-C_CkxfNH.js";import"./image-DMVbjZyD.js";import"./skeleton-o_qAArb0.js";import"./stack-BZSSY1VK.js";import"./portal-BfDtzxBi.js";import"./index-ZoHJkkX0.js";import"./index-BPwD21JX.js";import"./index-Dhan9Jap.js";import"./use-environment-context-Dv5alifQ.js";import"./create-context-BvVJYA2y.js";import"./popover-doshOK6B.js";import"./create-slot-recipe-context-DIF2yOS6.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-DdraP2i4.js";import"./index-BLVBAjsL.js";import"./index-BD0E2p3x.js";import"./use-event-DGQmXmvT.js";import"./index-BeIEPu7L.js";import"./index-pW82Y0Cx.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-ZUPMn3wG.js";import"./index-cMlMUVsx.js";import"./use-locale-context-BsewbQfm.js";import"./factory-Dxcrw6Ie.js";import"./link-BKEWEJ9S.js";import"./hooks-BdyfuSpg.js";import"./apiSlice-D0AP-fhr.js";import"./index-BXYjmxtC.js";import"./chunk-JMJ3UQ3L-BKl4LSxV.js";import"./context-PhoKCkxa.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="57173239-ee34-4294-b59e-6750d0a1e445",t._sentryDebugIdIdentifier="sentry-dbid-57173239-ee34-4294-b59e-6750d0a1e445")}catch{}function te(){const{navigate:t}=N(),{t:o}=H("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=X(),{data:C,isLoading:s}=F(void 0),{data:a,isLoading:p}=z(),{isCAUser:T}=U(),g=()=>{t(A.DASHBOARD_TRADE)},n=c=>{t(`${A.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(r).reduce((c,[w,j])=>{const k=b(w,j);return k>=$&&c.push({symbol:w,balance:j,value:k}),c},[]),[r,i]),h=x.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:g,coins:l,allAssetDetails:a,dailyInsights:C,isLoading:h,tooltip:o(T?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:o,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:C})=>{const{t:s}=H("app"),[a,p]=x.useState(-1),T=W("colors","grey.light.10"),g=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*a),[t,a]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(J,{variant:"line",css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(Y,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(R,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${T}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(M,{icon:Q,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(G,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:a===1,isDesc:a===-1,px:0,text:s("dashboard.totalPerformance"),justifyContent:"flex-end",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(Z,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(O,{},n)):e.jsx(e.Fragment,{children:r&&o&&t.length>0?g.map(({symbol:n,balance:l,value:h})=>n in o&&e.jsx(P,{assetDetails:o[n],assetInsights:r[n],onRowClick:()=>b(n),balance:l,value:h},n)):e.jsx(R,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(ee,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(V,{icon:K,text:s("dashboard.browseCoins"),onClick:C})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const _t={component:te},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var S,D,E;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
  return <CoinBalanceTableComponent tooltip="tooltip" onBrowseCoinsClick={() => {}} onAssetClick={() => {}} coins={[{
    balance: "10000",
    symbol: "BTC",
    value: 1000
  }, {
    balance: "10000",
    symbol: "ETH",
    value: 1000
  }]} allAssetDetails={{
    BTC: {
      precision: "8",
      symbol: "BTC",
      name: "Bitcoin",
      price: "10000",
      "24h_percent": 1.23,
      restrictions: {
        withdraw: true,
        deposit: true,
        instant_buy: false,
        instant_sell: false,
        limit_buy: false,
        limit_sell: false,
        can_stake: false
      }
    },
    ETH: {
      precision: "8",
      symbol: "ETH",
      name: "Ethereum",
      price: "10000",
      "24h_percent": 1.23,
      restrictions: {
        withdraw: false,
        deposit: false,
        instant_buy: false,
        instant_sell: false,
        limit_buy: false,
        limit_sell: false,
        can_stake: false
      }
    }
  }} dailyInsights={{
    performance: {
      totalCost: "1000",
      simpleReturn: "1000",
      simpleReturnPercent: "10",
      unrealizedGL: "1000",
      unrealizedGLPercent: "10"
    }
  }} />;
}`,...(E=(D=f.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,L,v;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <CoinBalanceTableComponent onAssetClick={() => {}} coins={[]} onBrowseCoinsClick={() => {}} tooltip="tooltip" />;
}`,...(v=(L=y.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const Bt=["Default","EmptyTable"];export{f as Default,y as EmptyTable,Bt as __namedExportsOrder,_t as default};
