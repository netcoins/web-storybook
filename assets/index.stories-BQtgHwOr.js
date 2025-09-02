import{j as e}from"./jsx-runtime-DCp243fw.js";import{R as v}from"./ReactIconWrapper-XCQmKdjf.js";import{u as M,a as P,C as q}from"./index-Bb8tQ5JQ.js";import{T as F}from"./index-CBcoMaCT.js";import{L as H}from"./index-BASsUmOS.js";import{T as O}from"./index-DbTpg7DA.js";import{u as V}from"./useGetAssetDetails-DMh90xsj.js";import{u as G}from"./useRegion-DvyWkTTE.js";import{u as z}from"./useRestrictNavigation-BZcaQ7_q.js";import{R as w}from"./routes-CIw-1QBj.js";import{u as N}from"./useCalculateBalances-fMtagEy0.js";import{r as x}from"./index-X37gZHMr.js";import{c as U}from"./index-Dfmnj34x.js";import{I as X}from"./index-Ds8BjX2M.js";import"./iframe-CjW4I00D.js";import{u as L}from"./useTranslation-CUzMHgJo.js";import{d as $}from"./use-style-config-BMocqkaz.js";import{F as _}from"./flex-Cd8PCP7_.js";import{T as K,a as k,b as Q}from"./tr-ngr9IF7O.js";import{T as W}from"./thead-heUSlawx.js";import{T as B}from"./th-DNEvLQMg.js";import{T as u}from"./text-ds9L_zFH.js";import{T as J}from"./tbody-BnkDR2yj.js";import"./icon-CT-N4CCY.js";import"./factory-BXOVdwo-.js";import"./index-C0BIHFDV.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BvGvFhyo.js";import"./box-CymiGRYS.js";import"./index-DJ38Aq0k.js";import"./numericalFormatting-AL2xQBU0.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DowMODBc.js";import"./index-BBYp1Flb.js";import"./iconBase-UsA_wLJJ.js";import"./IconWrapper-DtdbBRKI.js";import"./useColorFormatConverter-VtTZoGGA.js";import"./selectors-CZ3UBeHO.js";import"./splitApi-CONS_hts.js";import"./config-DCp5OflX.js";import"./apiSlice-BszDr64C.js";import"./image-BdAFyPcz.js";import"./use-safe-layout-effect-CG6AAKpb.js";import"./skeleton-circle-BS4j6Hcx.js";import"./skeleton-Da6idjCP.js";import"./emotion-react.browser.esm-CkHquzSE.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DpBGeIC1.js";import"./use-breakpoint-value-B50vP6sX.js";import"./responsive-DgesO31w.js";import"./env-BbxG_u6n.js";import"./popover-trigger-CP0XD47N.js";import"./use-popper-DIRq1zIF.js";import"./use-event-listener-DAeWr4Xu.js";import"./use-callback-ref-du5lU8e5.js";import"./use-update-effect-CgawRsEa.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-AqbI99KR.js";import"./use-disclosure-tgJKxLH-.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CwhqQ85l.js";import"./define-styles-k0dS9I3S.js";import"./context-CUL0MZ7i.js";import"./portal-B6_7PtKY.js";import"./index-DmVWu2C1.js";import"./index-BVkPllaf.js";import"./link-evpJKCv2.js";import"./hooks-DmbYuCi-.js";import"./apiSlice-BdQdJI0P.js";import"./index-CU3ZU9wa.js";import"./index-BsOa0OTF.js";import"./context-B35ttG2n.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="2017f231-9ac2-417c-bc8a-d270db892e06",t._sentryDebugIdIdentifier="sentry-dbid-2017f231-9ac2-417c-bc8a-d270db892e06")}catch{}function Y(){const{navigate:t}=z(),{t:o}=L("app"),{cryptoBalances:a,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=N(),{data:h,isLoading:s}=M(void 0),{data:r,isLoading:p}=V(),{isCAUser:g}=G(),T=()=>{t(w.DASHBOARD_TRADE)},n=c=>{t(`${w.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(a).map(([c,j])=>({symbol:c,balance:j,value:b(c,j)})),[a,i]),C=x.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:T,coins:l,allAssetDetails:r,dailyInsights:h,isLoading:C,tooltip:o(g?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:o,dailyInsights:a,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:h})=>{const{t:s}=L("app"),[r,p]=x.useState(-1),g=$("colors","grey.light.10"),T=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*r),[t,r]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{"data-sentry-element":"Table","data-sentry-source-file":"index.tsx",children:[e.jsx(W,{bg:"grey.light.5","data-sentry-element":"Thead","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{sx:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${g}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,"data-sentry-element":"Tr","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(F,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:r===1,isDesc:r===-1,px:0,text:s("dashboard.totalPerformance"),textAlign:"right",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(J,{w:"full",py:1,"data-sentry-element":"Tbody","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(P,{},n)):e.jsx(e.Fragment,{children:a&&o&&t.length>0?T.map(({symbol:n,balance:l,value:C})=>n in o&&e.jsx(q,{assetDetails:o[n],assetInsights:a[n],onRowClick:()=>b(n),balance:l,value:C},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(Q,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(H,{icon:U,text:s("dashboard.browseCoins"),onClick:h})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const _t={component:Y},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,S,D;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(D=(S=f.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var R,E,I;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`() => {
  return <CoinBalanceTableComponent onAssetClick={() => {}} coins={[]} onBrowseCoinsClick={() => {}} tooltip="tooltip" />;
}`,...(I=(E=y.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const Bt=["Default","EmptyTable"];export{f as Default,y as EmptyTable,Bt as __namedExportsOrder,_t as default};
