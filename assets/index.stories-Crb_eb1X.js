import{j as e}from"./jsx-runtime-aDiBerqi.js";import{R as v}from"./ReactIconWrapper-DwGnhdBs.js";import{u as H,a as M,C as P}from"./index-Dq4qMgEz.js";import{T as q}from"./index-C9qS27Y-.js";import{L as F}from"./index-C2dNhbP-.js";import{T as O}from"./index-BW1b_hjw.js";import{u as V}from"./useGetAssetDetails-DEvHuORS.js";import{u as G}from"./useRegion-B93vC07H.js";import{u as z}from"./useRestrictNavigation-B5d8zjbO.js";import{R as j}from"./routes-BNxpnIx4.js";import{u as N}from"./useCalculateBalances-Cokp9Skx.js";import{r as x}from"./index-QHtmZMOc.js";import{c as U}from"./index-CL7m1zOX.js";import{I as X}from"./index-B8BySqri.js";import"./iframe-BWGQ-e-y.js";import{u as L}from"./useTranslation-CGgulXDx.js";import{u as $}from"./use-token-DbNQ4Ath.js";import{F as _}from"./flex-8HDKQfdF.js";import{T as u}from"./index-MQf2AjTF.js";import{T as K,e as Q,b as k,d as B,a as W,c as J}from"./table-1nJoUNQU.js";import"./icon-Db8B1RaL.js";import"./create-recipe-context-C2eWbnfB.js";import"./factory-CAiCcLdZ.js";import"./index-ZWGU0PYT.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CZV9_SY6.js";import"./index-DX2m3BLu.js";import"./index-Tk124Bk-.js";import"./numericalFormatting-CbqT6ww3.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-B9DaibkR.js";import"./index-CG0T9QDm.js";import"./iconBase-Bhx-vmP5.js";import"./IconWrapper-2MrEA18q.js";import"./useColorFormatConverter-BLmyuoSu.js";import"./index-E35ZmiOz.js";import"./selectors-CaNTmkoH.js";import"./splitApi-2RGZLOHm.js";import"./config-Db8_4Q47.js";import"./apiSlice-DmEqZ3jc.js";import"./image-C-4FLPl8.js";import"./skeleton-5QSm1s_2.js";import"./stack-Cqe9oQFW.js";import"./portal-CnfI3ZRY.js";import"./index-CehdyC4B.js";import"./index-Bc4lnCfi.js";import"./index-Cx4ZODQ4.js";import"./use-environment-context-BoXqgBC9.js";import"./create-context-CjGUCdtg.js";import"./popover-BPQFN1kh.js";import"./create-slot-recipe-context-DZDh3thd.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-B2GTqbEU.js";import"./index-BLVBAjsL.js";import"./index-BRWKyAje.js";import"./use-event-D3pFQRsx.js";import"./index-DM8PzGVk.js";import"./index-pW82Y0Cx.js";import"./index-BTpWAZSs.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-CsHGuxHM.js";import"./index-BpECUZYK.js";import"./use-locale-context-DfLxTiQ3.js";import"./factory-BoaWCybp.js";import"./link-Dsd5wlRm.js";import"./hooks-SB81NLSo.js";import"./apiSlice-BPkxbo8K.js";import"./index-nXMeWPkE.js";import"./chunk-JMJ3UQ3L-C9GyL-zv.js";import"./context-zwS_Nzoe.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="2e74092b-7992-46bc-970f-6e98d4d981cf",t._sentryDebugIdIdentifier="sentry-dbid-2e74092b-7992-46bc-970f-6e98d4d981cf")}catch{}function Y(){const{navigate:t}=z(),{t:o}=L("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=N(),{data:C,isLoading:s}=H(void 0),{data:a,isLoading:p}=V(),{isCAUser:g}=G(),h=()=>{t(j.DASHBOARD_TRADE)},n=c=>{t(`${j.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(r).map(([c,w])=>({symbol:c,balance:w,value:b(c,w)})),[r,i]),T=x.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:h,coins:l,allAssetDetails:a,dailyInsights:C,isLoading:T,tooltip:o(g?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:o,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:C})=>{const{t:s}=L("app"),[a,p]=x.useState(-1),g=$("colors","grey.light.10"),h=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*a),[t,a]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(K,{variant:"line",css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(Q,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(k,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${g}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(v,{icon:X,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(O,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:a===1,isDesc:a===-1,px:0,text:s("dashboard.totalPerformance"),justifyContent:"flex-end",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(W,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(M,{},n)):e.jsx(e.Fragment,{children:r&&o&&t.length>0?h.map(({symbol:n,balance:l,value:T})=>n in o&&e.jsx(P,{assetDetails:o[n],assetInsights:r[n],onRowClick:()=>b(n),balance:l,value:T},n)):e.jsx(k,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(J,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(F,{icon:U,text:s("dashboard.browseCoins"),onClick:C})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const gt={component:Y},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var A,R,S;f.parameters={...f.parameters,docs:{...(A=f.parameters)==null?void 0:A.docs,source:{originalSource:`() => {
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
