import{j as e}from"./jsx-runtime-Cvbzbb4L.js";import{R as v}from"./ReactIconWrapper-Cx7VlQ-8.js";import{u as H,a as M,C as P}from"./index-CLs5CWz-.js";import{T as q}from"./index-C_hhYU9C.js";import{L as F}from"./index-B9rUSflb.js";import{T as O}from"./index-CVMOWaJC.js";import{u as V}from"./useGetAssetDetails-BK4iwrcf.js";import{u as G}from"./useRegion-wIJUxRfY.js";import{u as z}from"./useRestrictNavigation-VNEM0RAW.js";import{R as j}from"./routes-eWMewt9w.js";import{u as N}from"./useCalculateBalances-CzIWadnv.js";import{r as x}from"./index-Bk_lK4dE.js";import{c as U}from"./index-DeQeFTLV.js";import{I as X}from"./index-qd2DGJqe.js";import"./iframe-BANvMm9q.js";import{u as L}from"./useTranslation-BOUHeP_h.js";import{u as $}from"./use-token-DXvWYF7r.js";import{F as _}from"./flex-CimcCm75.js";import{T as u}from"./index-DY4-VTHJ.js";import{e as K,T as Q,f as W,b as A,d as B,a as J,c as Y}from"./table-C60idHWd.js";import"./icon-Ghh1BD4w.js";import"./create-recipe-context-BGOEO3ph.js";import"./factory-C9gVng0o.js";import"./index-DSpFXV1K.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CtP1rFbM.js";import"./index-DB9703Tc.js";import"./index-DSYW4u97.js";import"./numericalFormatting-DLXh8j-G.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-eImMp3Xn.js";import"./index-D5RNH5Gu.js";import"./iconBase-CKnDgKXJ.js";import"./IconWrapper-odx1cDmp.js";import"./useColorFormatConverter-B3hvhfbR.js";import"./index-BEvLBB82.js";import"./selectors-FquFddyC.js";import"./splitApi-ChxfcUtB.js";import"./config-B4lD0mAM.js";import"./apiSlice-DjkNv6ZY.js";import"./image-CXaFrWEk.js";import"./skeleton-l1pwevfO.js";import"./stack-NoryMxyE.js";import"./portal-D8oLY9XX.js";import"./index-CehdyC4B.js";import"./index-hbx5MZN1.js";import"./index-D5p_im79.js";import"./use-environment-context-C0ILbdRR.js";import"./create-context-CoWaMeE1.js";import"./popover-B0jaDuIL.js";import"./create-slot-recipe-context-c-kSauhy.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-3tUKMedf.js";import"./index-BLVBAjsL.js";import"./index-BUxGXZRA.js";import"./use-event-CpHunfgM.js";import"./index-DM8PzGVk.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-locale-context-nuxHRxt6.js";import"./factory-oKi7FqA4.js";import"./link-FcbUd9Hl.js";import"./hooks-Ba2wg9Lv.js";import"./apiSlice-dSD9ZGzc.js";import"./index-D9y_DmFX.js";import"./chunk-JMJ3UQ3L-DyCmJMlU.js";import"./context-B6UT5zVr.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new t.Error().stack;s&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[s]="da2052ac-4ae1-4f13-9215-fb43e3801593",t._sentryDebugIdIdentifier="sentry-dbid-da2052ac-4ae1-4f13-9215-fb43e3801593")}catch{}function Z(){const{navigate:t}=z(),{t:s}=L("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=N(),{data:g,isLoading:a}=H(void 0),{data:o,isLoading:p}=V(),{isCAUser:h}=G(),C=()=>{t(j.DASHBOARD_TRADE)},n=c=>{t(`${j.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(r).map(([c,w])=>({symbol:c,balance:w,value:b(c,w)})),[r,i]),T=x.useMemo(()=>p||a||d||i,[p,a,d,i]);return e.jsx(m,{onBrowseCoinsClick:C,coins:l,allAssetDetails:o,dailyInsights:g,isLoading:T,tooltip:s(h?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:s,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:g})=>{const{t:a}=L("app"),[o,p]=x.useState(-1),h=$("colors","grey.light.10"),C=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*o),[t,o]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsx(K,{rounded:"md",maxHeight:"500px","data-sentry-element":"Table.ScrollArea","data-sentry-source-file":"index.tsx",children:e.jsxs(Q,{variant:"line",stickyHeader:!0,css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(W,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(A,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${h}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:a("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:o===1,isDesc:o===-1,px:0,text:a("dashboard.totalPerformance"),textAlign:"right",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(J,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(M,{},n)):e.jsx(e.Fragment,{children:r&&s&&t.length>0?C.map(({symbol:n,balance:l,value:T})=>n in s&&e.jsx(P,{assetDetails:s[n],assetInsights:r[n],onRowClick:()=>b(n),balance:l,value:T},n)):e.jsx(A,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(Y,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:a("dashboard.noAssets")}),e.jsx(F,{icon:U,text:a("dashboard.browseCoins"),onClick:g})]})})})})]})})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const Ct={component:Z},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var k,S,R;f.parameters={...f.parameters,docs:{...(k=f.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
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
