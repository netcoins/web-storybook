import{j as e}from"./jsx-runtime-DBvW3J4P.js";import{R as v}from"./ReactIconWrapper-CV1lDTw4.js";import{u as M,a as P,C as q}from"./index-Cl4U9fYX.js";import{T as F}from"./index-Dr62S7dX.js";import{L as H}from"./index-GrU6Q1vo.js";import{T as O}from"./index-svU8ZD4m.js";import{u as V}from"./useGetAssetDetails-59Uj1ezd.js";import{u as G}from"./useRegion-BoXZQlor.js";import{u as z}from"./useRestrictNavigation-Dw4swT7F.js";import{R as w}from"./routes-aWYugHQk.js";import{u as N}from"./useCalculateBalances-CubG0acH.js";import{r as x}from"./index-eiqMTM-Z.js";import{c as U}from"./index-CBM6AxRX.js";import{I as X}from"./index-BvJwTnfg.js";import"./iframe-CbEszLwV.js";import{u as L}from"./useTranslation-BFxd_HHW.js";import{d as $}from"./use-style-config-CRvEJw1Z.js";import{F as _}from"./flex-CVx7E2fo.js";import{T as K,a as k,b as Q}from"./tr-DowHaKSe.js";import{T as W}from"./thead-peHKkar7.js";import{T as B}from"./th-CoKVFrZs.js";import{T as u}from"./text-drvfSy8p.js";import{T as J}from"./tbody-DeKf7fcb.js";import"./icon-BTh9G9d4.js";import"./factory-CH5OTrax.js";import"./index-861ck25a.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CJCM0Snl.js";import"./box-CilrpWKY.js";import"./index-9C0acIh3.js";import"./numericalFormatting-B4ZqToxX.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DfKtWWHL.js";import"./index-DwpOUU05.js";import"./iconBase-yBK0uS8I.js";import"./IconWrapper-CsQlqFhO.js";import"./useColorFormatConverter-C1qBgSed.js";import"./selectors-BKdckG3u.js";import"./splitApi-lEwDftEO.js";import"./config-CYru4F26.js";import"./apiSlice-k873W_4D.js";import"./image-BIok4FKt.js";import"./use-safe-layout-effect-CnY6VFQP.js";import"./skeleton-circle-DYHKSdL1.js";import"./skeleton-dbyXp8Y3.js";import"./emotion-react.browser.esm-C0TXlc-y.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-CZOhWntm.js";import"./use-breakpoint-value-DPNBFhE8.js";import"./responsive-BsmUsxkC.js";import"./env-Bi_OJ7LG.js";import"./popover-trigger-DK91z1zV.js";import"./use-popper-ZUmmMNcH.js";import"./use-event-listener-XmnQ9wge.js";import"./use-callback-ref-BNql-QHX.js";import"./use-update-effect-BszR8JYu.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-merge-refs-DcwZN5rK.js";import"./use-disclosure-GL4uI0Au.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-F5JqsM7K.js";import"./define-styles-k0dS9I3S.js";import"./context-oDCZUX6j.js";import"./portal-NOwwQ-8M.js";import"./index-LobmqJ3O.js";import"./index-DMuMEP82.js";import"./link-BTBl-JBM.js";import"./hooks-DrZl2buK.js";import"./apiSlice-C63baeiu.js";import"./index-BnD-yEhl.js";import"./index-CKylX286.js";import"./context-BeIFq7kq.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="016a89c9-e84d-4238-901f-00e74fe558e5",t._sentryDebugIdIdentifier="sentry-dbid-016a89c9-e84d-4238-901f-00e74fe558e5")}catch{}function Y(){const{navigate:t}=z(),{t:o}=L("app"),{cryptoBalances:a,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=N(),{data:h,isLoading:s}=M(void 0),{data:r,isLoading:p}=V(),{isCAUser:g}=G(),T=()=>{t(w.DASHBOARD_TRADE)},n=c=>{t(`${w.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(a).map(([c,j])=>({symbol:c,balance:j,value:b(c,j)})),[a,i]),C=x.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:T,coins:l,allAssetDetails:r,dailyInsights:h,isLoading:C,tooltip:o(g?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:o,dailyInsights:a,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:h})=>{const{t:s}=L("app"),[r,p]=x.useState(-1),g=$("colors","grey.light.10"),T=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*r),[t,r]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{"data-sentry-element":"Table","data-sentry-source-file":"index.tsx",children:[e.jsx(W,{bg:"grey.light.5","data-sentry-element":"Thead","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{sx:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${g}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,"data-sentry-element":"Tr","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Th","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(F,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:r===1,isDesc:r===-1,px:0,text:s("dashboard.totalPerformance"),textAlign:"right",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(J,{w:"full",py:1,"data-sentry-element":"Tbody","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(P,{},n)):e.jsx(e.Fragment,{children:a&&o&&t.length>0?T.map(({symbol:n,balance:l,value:C})=>n in o&&e.jsx(q,{assetDetails:o[n],assetInsights:a[n],onRowClick:()=>b(n),balance:l,value:C},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(Q,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(H,{icon:U,text:s("dashboard.browseCoins"),onClick:h})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const Bt={component:Y},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,S,D;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
}`,...(I=(E=y.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const jt=["Default","EmptyTable"];export{f as Default,y as EmptyTable,jt as __namedExportsOrder,Bt as default};
