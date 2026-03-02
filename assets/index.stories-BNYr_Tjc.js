import{j as e}from"./jsx-runtime-jg6pqZ_i.js";import{R as v}from"./ReactIconWrapper-B86_pAdi.js";import{u as H,a as M,C as P}from"./index-DXWW64wI.js";import{T as q}from"./index-DU_Ve7M2.js";import{L as F}from"./index-Bu6oTPdl.js";import{T as O}from"./index-D845WoKs.js";import{u as V}from"./useGetAssetDetails-Ci9ieqfM.js";import{u as G}from"./useRegion-KxlrhC00.js";import{u as z}from"./useRestrictNavigation-DfoGaT1G.js";import{R as j}from"./routes-DsVk_ko9.js";import{u as N}from"./useCalculateBalances-CF4HNPjT.js";import{r as b}from"./index-BSHGx6zv.js";import{c as U}from"./index-BnC4ewzb.js";import{I as X}from"./index-cGAnVuPR.js";import"./iframe-Bq0h1ODx.js";import{u as L}from"./useTranslation-BzgDT8-_.js";import{u as $}from"./use-token-BivgpTZK.js";import{F as _}from"./flex-BG3sCgss.js";import{T as u}from"./index-Bft7ftNQ.js";import{T as K,e as Q,b as k,d as B,a as W,c as J}from"./table-Sk_3y2RX.js";import"./icon-CCBnoYvA.js";import"./create-recipe-context-CDbsiUah.js";import"./factory-Bpf62hMT.js";import"./index-DOUQxQdn.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-B2M5M3qA.js";import"./index-DoxBQr9B.js";import"./index-BE_W_bPv.js";import"./numericalFormatting-DyvGi3Jg.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BoHlr-py.js";import"./index-BL80Sg3v.js";import"./iconBase-DdifFKa-.js";import"./IconWrapper-Bc0q67af.js";import"./useColorFormatConverter-B14i2pIP.js";import"./index-CfQae_a0.js";import"./selectors-Tm4hoiw8.js";import"./splitApi-B3urGvFr.js";import"./config-yqMvNJpB.js";import"./apiSlice-ZmbUiVh2.js";import"./image-CSBloTAU.js";import"./skeleton-CdsqxAT9.js";import"./stack-B7JwP2k5.js";import"./portal-BbvLTJp4.js";import"./index-CehdyC4B.js";import"./index-p10sExUS.js";import"./index-CDu8JjYl.js";import"./use-environment-context-CN6qV6zg.js";import"./create-context-C_3Soxv9.js";import"./popover-DrF8PRpM.js";import"./create-slot-recipe-context-CI5mfXeb.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-C6hHwYHd.js";import"./index-BLVBAjsL.js";import"./index-CZb1Hhv0.js";import"./use-event-BBxGEtYD.js";import"./index-DM8PzGVk.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-locale-context-Bfe2SuVb.js";import"./factory-C4_lmgJw.js";import"./link-C5iQWOjz.js";import"./hooks-Db2Sekzj.js";import"./apiSlice-BAeJV_OT.js";import"./index-BfXSmApj.js";import"./chunk-JMJ3UQ3L-Bq-WyiMc.js";import"./context-D_cdTDW0.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="cb8acfbe-317b-422d-a7ec-3ac823d7b83d",t._sentryDebugIdIdentifier="sentry-dbid-cb8acfbe-317b-422d-a7ec-3ac823d7b83d")}catch{}function Y(){const{navigate:t}=z(),{t:a}=L("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:x}=N(),{data:C,isLoading:s}=H(void 0),{data:o,isLoading:p}=V(),{isCAUser:g}=G(),h=()=>{t(j.DASHBOARD_TRADE)},n=c=>{t(`${j.MARKET_DETAILS}?asset=${c}`)},l=b.useMemo(()=>Object.entries(r).map(([c,w])=>({symbol:c,balance:w,value:x(c,w)})),[r,i]),T=b.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:h,coins:l,allAssetDetails:o,dailyInsights:C,isLoading:T,tooltip:a(g?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:a,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:x,onBrowseCoinsClick:C})=>{const{t:s}=L("app"),[o,p]=b.useState(-1),g=$("colors","grey.light.10"),h=b.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*o),[t,o]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{variant:"line",css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(Q,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${g}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:o===1,isDesc:o===-1,px:0,text:s("dashboard.totalPerformance"),justifyContent:"flex-end",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(W,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(M,{},n)):e.jsx(e.Fragment,{children:r&&a&&t.length>0?h.map(({symbol:n,balance:l,value:T})=>n in a&&e.jsx(P,{assetDetails:a[n],assetInsights:r[n],onRowClick:()=>x(n),balance:l,value:T},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(J,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(F,{icon:U,text:s("dashboard.browseCoins"),onClick:C})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const gt={component:Y},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,R,S;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(S=(R=f.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var D,E,I;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <CoinBalanceTableComponent onAssetClick={() => {}} coins={[]} onBrowseCoinsClick={() => {}} tooltip="tooltip" />;
}`,...(I=(E=y.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ht=["Default","EmptyTable"];export{f as Default,y as EmptyTable,ht as __namedExportsOrder,gt as default};
