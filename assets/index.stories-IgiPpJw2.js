import{j as e}from"./jsx-runtime-UwRoxOis.js";import{R as v}from"./ReactIconWrapper-wcrhSyUX.js";import{u as H,a as M,C as P}from"./index-Cz5sjksL.js";import{T as q}from"./index-E3GwKVWa.js";import{L as F}from"./index-Dhsdn0DY.js";import{T as O}from"./index-DEsC0EsC.js";import{u as V}from"./useGetAssetDetails-CmG4vk3M.js";import{u as G}from"./useRegion-BqV5Dn0X.js";import{u as z}from"./useRestrictNavigation-BLDRC2kn.js";import{R as j}from"./routes-ioaB6aQ5.js";import{u as N}from"./useCalculateBalances--zYagpj6.js";import{r as x}from"./index-rQf-HDJx.js";import{c as U}from"./index-B9fSNEXB.js";import{I as X}from"./index-6mrMy_Jv.js";import"./iframe-CKtoteMt.js";import{u as L}from"./useTranslation-CHULjVxq.js";import{u as $}from"./use-token-C81JMcnm.js";import{F as _}from"./flex-sSglzitQ.js";import{T as u}from"./index-Clele84I.js";import{T as K,e as Q,b as k,d as B,a as W,c as J}from"./table-Nh3XBsZP.js";import"./icon-Dmj_bu5Z.js";import"./create-recipe-context-BzOF1OiO.js";import"./factory-D4a8xBd5.js";import"./index-DlgHMPWI.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CGNtch4E.js";import"./index-TLTQQWtv.js";import"./index-BjuesnZM.js";import"./numericalFormatting-CfOm6O8Y.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BZkZTDiM.js";import"./index-Dij4ZHnC.js";import"./iconBase-DsUadah2.js";import"./IconWrapper-1hfrdvNk.js";import"./useColorFormatConverter-DiySbfaW.js";import"./index-Cx4gDckJ.js";import"./selectors-BD6TV8pM.js";import"./splitApi-BAvX02EP.js";import"./config-BqqGJTJr.js";import"./apiSlice-CqnOZPZ9.js";import"./image-DaMGqXnZ.js";import"./skeleton-BcdZrhRf.js";import"./stack-C1sga2uC.js";import"./portal-DNVwmmFE.js";import"./index-ZoHJkkX0.js";import"./index-CLC5K_V_.js";import"./index-DwQ_QCwy.js";import"./use-environment-context-Z0prSxiy.js";import"./create-context-C0W2S-rB.js";import"./popover-CJ5uhLvY.js";import"./create-slot-recipe-context-QSL3U4Yy.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-CtvnDt4d.js";import"./index-BLVBAjsL.js";import"./index-FI9XQNsC.js";import"./use-event-mS_NdDdX.js";import"./index-BeIEPu7L.js";import"./index-pW82Y0Cx.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-ZUPMn3wG.js";import"./index-cMlMUVsx.js";import"./use-locale-context-BcrdLHZ3.js";import"./factory-BPHrUvf4.js";import"./link-DoSimJvQ.js";import"./hooks-DBfJ3Rnb.js";import"./apiSlice-CylcMaKi.js";import"./index-COaxt4rT.js";import"./chunk-JMJ3UQ3L-oV-zPKqx.js";import"./context-78IZNpbo.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="ca9ae4e7-1920-49ab-8084-c5654734e788",t._sentryDebugIdIdentifier="sentry-dbid-ca9ae4e7-1920-49ab-8084-c5654734e788")}catch{}function Y(){const{navigate:t}=z(),{t:a}=L("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=N(),{data:C,isLoading:s}=H(void 0),{data:o,isLoading:p}=V(),{isCAUser:g}=G(),h=()=>{t(j.DASHBOARD_TRADE)},n=c=>{t(`${j.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(r).map(([c,w])=>({symbol:c,balance:w,value:b(c,w)})),[r,i]),T=x.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:h,coins:l,allAssetDetails:o,dailyInsights:C,isLoading:T,tooltip:a(g?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:a,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:C})=>{const{t:s}=L("app"),[o,p]=x.useState(-1),g=$("colors","grey.light.10"),h=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*o),[t,o]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{variant:"line",css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(Q,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${g}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:o===1,isDesc:o===-1,px:0,text:s("dashboard.totalPerformance"),justifyContent:"flex-end",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(W,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(M,{},n)):e.jsx(e.Fragment,{children:r&&a&&t.length>0?h.map(({symbol:n,balance:l,value:T})=>n in a&&e.jsx(P,{assetDetails:a[n],assetInsights:r[n],onRowClick:()=>b(n),balance:l,value:T},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(J,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(F,{icon:U,text:s("dashboard.browseCoins"),onClick:C})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const gt={component:Y},y=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),f=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,R,S;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(S=(R=y.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var D,E,I;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <CoinBalanceTableComponent onAssetClick={() => {}} coins={[]} onBrowseCoinsClick={() => {}} tooltip="tooltip" />;
}`,...(I=(E=f.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ht=["Default","EmptyTable"];export{y as Default,f as EmptyTable,ht as __namedExportsOrder,gt as default};
