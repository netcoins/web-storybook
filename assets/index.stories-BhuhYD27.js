import{j as e}from"./jsx-runtime-DPMpNnXZ.js";import{R as v}from"./ReactIconWrapper-BiBsPajd.js";import{u as H,a as M,C as P}from"./index-DGMmI7LD.js";import{T as q}from"./index-CGB3dwwr.js";import{L as F}from"./index-Dzhhx08H.js";import{T as O}from"./index-rS57psFA.js";import{u as V}from"./useGetAssetDetails-DLcsS6T3.js";import{u as G}from"./useRegion-CGq6kpx4.js";import{u as z}from"./useRestrictNavigation-_4r6mv7_.js";import{R as j}from"./routes-BgvJOLOg.js";import{u as N}from"./useCalculateBalances-BP2MgSuE.js";import{r as x}from"./index-B84vUFZt.js";import{c as U}from"./index-B8mbdxED.js";import{I as X}from"./index-BxloPhpf.js";import"./iframe-D4MesB1-.js";import{u as L}from"./useTranslation-tVwBD663.js";import{u as $}from"./use-token-DF88XSL2.js";import{F as _}from"./flex-DRNaZEXn.js";import{T as u}from"./index-TWaqeXJZ.js";import{e as K,T as Q,f as W,b as A,d as B,a as J,c as Y}from"./table-67YccCTF.js";import"./icon-Bo4cYvSi.js";import"./create-recipe-context-Dvnq3eBD.js";import"./factory-DyNYFw1b.js";import"./index-CYIcUZXV.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Cjk53CWf.js";import"./index-BuaD3O4C.js";import"./index-BHdaQt4V.js";import"./numericalFormatting-v8sCh4V0.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-B0zCRGTk.js";import"./index-BbzQ0eBl.js";import"./iconBase-Ba8qU5zn.js";import"./IconWrapper-D5a_4NF9.js";import"./useColorFormatConverter-BlgdVcHW.js";import"./index-CMlnaBwA.js";import"./selectors-DWbqc_Ly.js";import"./splitApi-Op_XRPKt.js";import"./config-CXliRBvx.js";import"./apiSlice-mKJY_ZW-.js";import"./image-BeoQDwl0.js";import"./skeleton-0FhqIADY.js";import"./stack-zAxET8FT.js";import"./portal-pCdmIA6B.js";import"./index-CehdyC4B.js";import"./index-BAYPxm6O.js";import"./index-CDgzWiXg.js";import"./use-environment-context-BBCdx3we.js";import"./create-context-TtKSSaLt.js";import"./popover-USjj1XlB.js";import"./create-slot-recipe-context-Dcgux3jd.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-CxzNjwr8.js";import"./index-BLVBAjsL.js";import"./index-tKXbQ0NM.js";import"./use-event-D-vCkS8Y.js";import"./index-DM8PzGVk.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-locale-context-Dp4Prn2t.js";import"./factory-BNSsrlYH.js";import"./link-MGL2L3Gd.js";import"./hooks-B8kLR_D7.js";import"./apiSlice-D0ltfi4s.js";import"./index-DvaDaqUS.js";import"./chunk-JMJ3UQ3L-BCL9vpXx.js";import"./context-v5lDWSZy.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="da2052ac-4ae1-4f13-9215-fb43e3801593",t._sentryDebugIdIdentifier="sentry-dbid-da2052ac-4ae1-4f13-9215-fb43e3801593")}catch{}function Z(){const{navigate:t}=z(),{t:s}=L("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=N(),{data:g,isLoading:a}=H(void 0),{data:o,isLoading:p}=V(),{isCAUser:h}=G(),C=()=>{t(j.DASHBOARD_TRADE)},n=c=>{t(`${j.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(r).map(([c,w])=>({symbol:c,balance:w,value:b(c,w)})),[r,i]),T=x.useMemo(()=>p||a||d||i,[p,a,d,i]);return e.jsx(m,{onBrowseCoinsClick:C,coins:l,allAssetDetails:o,dailyInsights:g,isLoading:T,tooltip:s(h?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:s,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:g})=>{const{t:a}=L("app"),[o,p]=x.useState(-1),h=$("colors","grey.light.10"),C=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*o),[t,o]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsx(K,{rounded:"md",maxHeight:"500px","data-sentry-element":"Table.ScrollArea","data-sentry-source-file":"index.tsx",children:e.jsxs(Q,{variant:"line",stickyHeader:!0,css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(W,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(A,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${h}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:o===1,isDesc:o===-1,px:0,text:a("dashboard.totalPerformance"),textAlign:"right",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(J,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(M,{},n)):e.jsx(e.Fragment,{children:r&&s&&t.length>0?C.map(({symbol:n,balance:l,value:T})=>n in s&&e.jsx(P,{assetDetails:s[n],assetInsights:r[n],onRowClick:()=>b(n),balance:l,value:T},n)):e.jsx(A,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(Y,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:a("dashboard.noAssets")}),e.jsx(F,{icon:U,text:a("dashboard.browseCoins"),onClick:g})]})})})})]})})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const Ct={component:Z},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var k,S,R;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
}`,...(R=(S=f.parameters)==null?void 0:S.docs)==null?void 0:R.source}}};var D,E,I;y.parameters={...y.parameters,docs:{...(D=y.parameters)==null?void 0:D.docs,source:{originalSource:`() => {
  return <CoinBalanceTableComponent onAssetClick={() => {}} coins={[]} onBrowseCoinsClick={() => {}} tooltip="tooltip" />;
}`,...(I=(E=y.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const Tt=["Default","EmptyTable"];export{f as Default,y as EmptyTable,Tt as __namedExportsOrder,Ct as default};
