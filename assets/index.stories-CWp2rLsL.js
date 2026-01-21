import{j as e}from"./jsx-runtime-B1YqPMzg.js";import{R as v}from"./ReactIconWrapper-slRaoyeL.js";import{u as H,a as M,C as P}from"./index-D5MDl22E.js";import{T as q}from"./index-B359zJuU.js";import{L as F}from"./index-D6-uZyBV.js";import{T as O}from"./index-jptyY5_q.js";import{u as V}from"./useGetAssetDetails-BLkSc5WK.js";import{u as G}from"./useRegion-B6P1y_d9.js";import{u as z}from"./useRestrictNavigation-B1mUY5hS.js";import{R as j}from"./routes-CNzkw0Lf.js";import{u as N}from"./useCalculateBalances-DIv-IVLm.js";import{r as b}from"./index-C6Ifh64Z.js";import{c as U}from"./index-D5wIsm3Z.js";import{I as X}from"./index-CMVgI5E8.js";import"./iframe-DxuRPcUd.js";import{u as L}from"./useTranslation-BOXy3uGt.js";import{u as $}from"./use-token-DLqZ65El.js";import{F as _}from"./flex-BsXV40MI.js";import{T as u}from"./index-DehFT42x.js";import{T as K,e as Q,b as k,d as B,a as W,c as J}from"./table-BIlgVmy5.js";import"./icon-CX4kF63o.js";import"./create-recipe-context-G-F8B2ld.js";import"./factory-D2_oMNtR.js";import"./index-T4COVkHZ.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-owR5wTnY.js";import"./index-BMJVRFE5.js";import"./index-DGDLoG1d.js";import"./numericalFormatting-B_zpb12_.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DfvbczUg.js";import"./index-TK7NCjQ3.js";import"./iconBase-SxvgYEOR.js";import"./IconWrapper-QVujEf73.js";import"./useColorFormatConverter-BKCnzz-k.js";import"./index-CMWNrqDx.js";import"./selectors-C3jotul3.js";import"./splitApi-DNm8AffJ.js";import"./config-DtXU7eIX.js";import"./apiSlice-ChJ-WYre.js";import"./image-BXY_HVj5.js";import"./skeleton-Cofe36cm.js";import"./stack-G0-Hs9UY.js";import"./portal-BUBtbaxR.js";import"./index-CehdyC4B.js";import"./index-DOUhQWuc.js";import"./index-Pe3ZON2l.js";import"./use-environment-context-DBLinOWL.js";import"./create-context-D6u6EDCp.js";import"./popover-CyrxRY-w.js";import"./create-slot-recipe-context-CDJMCMnz.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-vuiXtbuS.js";import"./index-BLVBAjsL.js";import"./index-LaxTnubX.js";import"./use-event-Bhm_p7Wc.js";import"./index-DM8PzGVk.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-locale-context-CWY39VhK.js";import"./factory-BEIpqoMf.js";import"./link-BLfgl-PZ.js";import"./hooks-C_STZBUI.js";import"./apiSlice-CyKofgII.js";import"./index-Btsa_Sov.js";import"./chunk-JMJ3UQ3L-DNGuNCwu.js";import"./context-CC38MYtr.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="6675c20d-6307-4e13-9b62-6bb48e7b2a3d",t._sentryDebugIdIdentifier="sentry-dbid-6675c20d-6307-4e13-9b62-6bb48e7b2a3d")}catch{}function Y(){const{navigate:t}=z(),{t:o}=L("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:x}=N(),{data:g,isLoading:s}=H(void 0),{data:a,isLoading:p}=V(),{isCAUser:C}=G(),h=()=>{t(j.DASHBOARD_TRADE)},n=c=>{t(`${j.MARKET_DETAILS}?asset=${c}`)},l=b.useMemo(()=>Object.entries(r).map(([c,w])=>({symbol:c,balance:w,value:x(c,w)})),[r,i]),T=b.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:h,coins:l,allAssetDetails:a,dailyInsights:g,isLoading:T,tooltip:o(C?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:o,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:x,onBrowseCoinsClick:g})=>{const{t:s}=L("app"),[a,p]=b.useState(-1),C=$("colors","grey.light.10"),h=b.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*a),[t,a]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{variant:"line",css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(Q,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${C}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:a===1,isDesc:a===-1,px:0,text:s("dashboard.totalPerformance"),textAlign:"right",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(W,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(M,{},n)):e.jsx(e.Fragment,{children:r&&o&&t.length>0?h.map(({symbol:n,balance:l,value:T})=>n in o&&e.jsx(P,{assetDetails:o[n],assetInsights:r[n],onRowClick:()=>x(n),balance:l,value:T},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(J,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(F,{icon:U,text:s("dashboard.browseCoins"),onClick:g})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const Ct={component:Y},y=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),f=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,R,S;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(I=(E=f.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const ht=["Default","EmptyTable"];export{y as Default,f as EmptyTable,ht as __namedExportsOrder,Ct as default};
