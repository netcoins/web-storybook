import{j as e}from"./jsx-runtime-CtUEez0z.js";import{R as v}from"./ReactIconWrapper-s8kSXq-k.js";import{u as M,a as P,C as q}from"./index-CrWnh-In.js";import{T as F}from"./index-B1KVQGGL.js";import{L as H}from"./index-CTGzOJ-z.js";import{T as O}from"./index-DkMqxyD_.js";import{u as V}from"./useGetAssetDetails-DenmeEJp.js";import{u as G}from"./useRegion-BOaUORgq.js";import{u as z}from"./useRestrictNavigation-CfJa-iX4.js";import{R as w}from"./routes-C37qjQgD.js";import{u as N}from"./useCalculateBalances-Bb_p3mXM.js";import{r as x}from"./index-Cqmn51YS.js";import{c as U}from"./index-CAaVtfEi.js";import{I as X}from"./index-CWbkxcru.js";import"./iframe-COwPw1VY.js";import{u as L}from"./useTranslation-VHApA7df.js";import{d as $}from"./use-style-config-DWzjkw3h.js";import{F as _}from"./flex-WnzeImCB.js";import{T as K,a as k,b as Q}from"./tr-BfK1l0pf.js";import{T as W}from"./thead-Cz65eNl2.js";import{T as B}from"./th-D2pFh6fv.js";import{T as u}from"./text-DU2wDpPi.js";import{T as J}from"./tbody-LWV6HhwR.js";import"./icon-pHxpQceI.js";import"./factory-DJYjEkMm.js";import"./index-CRm5lGo_.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CpAQ5tMk.js";import"./box-9BX69DHc.js";import"./index-BLwgvquj.js";import"./numericalFormatting-B7Gp9UWV.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-8D6JRvbe.js";import"./index-CMMXWqW6.js";import"./iconBase-Dn46-paq.js";import"./IconWrapper-BUDF_B9X.js";import"./useColorFormatConverter-DSHGKob3.js";import"./selectors-C0ekDTwo.js";import"./splitApi-BiXUQwZK.js";import"./config-CSUyxyJD.js";import"./apiSlice-CSdc3tbK.js";import"./image-C2QKG39O.js";import"./use-safe-layout-effect-Bz0q2S9E.js";import"./skeleton-circle-2wWW2JY7.js";import"./skeleton-C7avB-vG.js";import"./emotion-react.browser.esm-Cu-JWzKK.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DrqPGq1M.js";import"./use-breakpoint-value-5UDaI_fu.js";import"./responsive-C0EjYG8g.js";import"./env-DByw9vDA.js";import"./popover-trigger-DzXUubWb.js";import"./use-popper-Bo3zfxkV.js";import"./use-event-listener-D32HG4Yo.js";import"./use-callback-ref-DrjLitdx.js";import"./use-update-effect-3eGvpoH8.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DD_bcvjC.js";import"./use-disclosure-zUyXwX9i.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-BIX3BNxl.js";import"./define-styles-k0dS9I3S.js";import"./context-BxW3_Ype.js";import"./portal-BdY166rg.js";import"./index-DiVBZjDx.js";import"./index-D-8BsizW.js";import"./link-DRgt6bZT.js";import"./hooks-DN1yVrns.js";import"./apiSlice-CqcosPWe.js";import"./index-DidUsahZ.js";import"./index-C8b9AOs6.js";import"./context-CMxGEpSm.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="1cadf8de-fe0c-4527-9fa1-9bd17ce4a6d0",t._sentryDebugIdIdentifier="sentry-dbid-1cadf8de-fe0c-4527-9fa1-9bd17ce4a6d0")}catch{}function Y(){const{navigate:t}=z(),{t:o}=L("app"),{cryptoBalances:a,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=N(),{data:h,isLoading:s}=M(void 0),{data:r,isLoading:p}=V(),{isCAUser:g}=G(),T=()=>{t(w.DASHBOARD_TRADE)},n=c=>{t(`${w.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(a).map(([c,j])=>({symbol:c,balance:j,value:b(c,j)})),[a,i]),C=x.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:T,coins:l,allAssetDetails:r,dailyInsights:h,isLoading:C,tooltip:o(g?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:o,dailyInsights:a,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:h})=>{const{t:s}=L("app"),[r,p]=x.useState(-1),g=$("colors","grey.light.10"),T=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*r),[t,r]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{"data-sentry-element":"Table","data-sentry-source-file":"index.tsx",children:[e.jsx(W,{bg:"grey.light.5","data-sentry-element":"Thead","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{sx:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${g}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,"data-sentry-element":"Tr","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(F,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:r===1,isDesc:r===-1,px:0,text:s("dashboard.totalPerformance"),textAlign:"right",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(J,{w:"full",py:1,"data-sentry-element":"Tbody","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(P,{},n)):e.jsx(e.Fragment,{children:a&&o&&t.length>0?T.map(({symbol:n,balance:l,value:C})=>n in o&&e.jsx(q,{assetDetails:o[n],assetInsights:a[n],onRowClick:()=>b(n),balance:l,value:C},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(Q,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(H,{icon:U,text:s("dashboard.browseCoins"),onClick:h})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const _t={component:Y},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,S,D;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
