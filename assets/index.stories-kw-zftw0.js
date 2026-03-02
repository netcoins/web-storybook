import{j as e}from"./jsx-runtime-CP4nKzdQ.js";import{R as v}from"./ReactIconWrapper-loKi814z.js";import{u as H,a as M,C as P}from"./index-C75Km0Qw.js";import{T as q}from"./index-Bjvb3NRg.js";import{L as F}from"./index-ClOxTZGg.js";import{T as O}from"./index-B7u_QKjL.js";import{u as V}from"./useGetAssetDetails-BZlhdbPn.js";import{u as G}from"./useRegion-1O5n82Cq.js";import{u as z}from"./useRestrictNavigation-A8jsdPGP.js";import{R as j}from"./routes-B-eFaI0a.js";import{u as N}from"./useCalculateBalances-CAkSU3cZ.js";import{r as b}from"./index-BtIgOQNS.js";import{c as U}from"./index-KPJcWTlx.js";import{I as X}from"./index-BZ8p1e-U.js";import"./iframe-wiFF9nb3.js";import{u as L}from"./useTranslation-DwnucpJ3.js";import{u as $}from"./use-token-1b2lApHF.js";import{F as _}from"./flex-lv2J4Goy.js";import{T as u}from"./index-B6NYvjTU.js";import{T as K,e as Q,b as k,d as B,a as W,c as J}from"./table-CAtqwW2q.js";import"./icon-FOYHG5uR.js";import"./create-recipe-context-KDjhqFwd.js";import"./factory-eHtKlpVN.js";import"./index-BHnloJhS.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-V4esO1JQ.js";import"./index-CnxuPyCl.js";import"./index-CwlMb2h4.js";import"./numericalFormatting-QpoYVPwV.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-33G5uw3q.js";import"./index-CQZ2_0rY.js";import"./iconBase-BtQ6vqoS.js";import"./IconWrapper-BzdzWr0W.js";import"./useColorFormatConverter-B37jtvKV.js";import"./index-Cx7jngQ1.js";import"./selectors-BlgRC1BI.js";import"./splitApi-CMYy_OqL.js";import"./config-BFugVsrp.js";import"./apiSlice-DnxoFb21.js";import"./image-Vc2cF4Uk.js";import"./skeleton-wdaRPjIc.js";import"./stack-TMoGmj7S.js";import"./portal-BxR594NP.js";import"./index-CehdyC4B.js";import"./index-BON-wgls.js";import"./index-DzetRwug.js";import"./use-environment-context-DNWTGJq-.js";import"./create-context-Cmurla9d.js";import"./popover-BcGpOoiY.js";import"./create-slot-recipe-context-CA6jRw1R.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-BDhocqkz.js";import"./index-BLVBAjsL.js";import"./index-o1KEF2md.js";import"./use-event-DxPz_GM8.js";import"./index-DM8PzGVk.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-locale-context-Bi91Ai2L.js";import"./factory-HgC5yevf.js";import"./link-D90SZ6o1.js";import"./hooks-pwU7nKhv.js";import"./apiSlice-CNrjcTMF.js";import"./index-CSV-5Pb1.js";import"./chunk-JMJ3UQ3L-eM0q-PjY.js";import"./context-DyIaW1Zx.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},a=new t.Error().stack;a&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[a]="cb8acfbe-317b-422d-a7ec-3ac823d7b83d",t._sentryDebugIdIdentifier="sentry-dbid-cb8acfbe-317b-422d-a7ec-3ac823d7b83d")}catch{}function Y(){const{navigate:t}=z(),{t:a}=L("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:x}=N(),{data:C,isLoading:s}=H(void 0),{data:o,isLoading:p}=V(),{isCAUser:g}=G(),h=()=>{t(j.DASHBOARD_TRADE)},n=c=>{t(`${j.MARKET_DETAILS}?asset=${c}`)},l=b.useMemo(()=>Object.entries(r).map(([c,w])=>({symbol:c,balance:w,value:x(c,w)})),[r,i]),T=b.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:h,coins:l,allAssetDetails:o,dailyInsights:C,isLoading:T,tooltip:a(g?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:a,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:x,onBrowseCoinsClick:C})=>{const{t:s}=L("app"),[o,p]=b.useState(-1),g=$("colors","grey.light.10"),h=b.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*o),[t,o]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{variant:"line",css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(Q,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${g}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:o===1,isDesc:o===-1,px:0,text:s("dashboard.totalPerformance"),justifyContent:"flex-end",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(W,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(M,{},n)):e.jsx(e.Fragment,{children:r&&a&&t.length>0?h.map(({symbol:n,balance:l,value:T})=>n in a&&e.jsx(P,{assetDetails:a[n],assetInsights:r[n],onRowClick:()=>x(n),balance:l,value:T},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(J,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(F,{icon:U,text:s("dashboard.browseCoins"),onClick:C})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const gt={component:Y},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,R,S;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
