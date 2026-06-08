import{j as e}from"./jsx-runtime-DBWTvkZQ.js";import{R as M}from"./ReactIconWrapper-CfXYhPMH.js";import{u as F,a as O,C as P}from"./index-BaHLS-zz.js";import{T as q}from"./index-DrWSJOvA.js";import{L as V}from"./index-CEwAxqP_.js";import{T as G}from"./index-DrafuZOq.js";import{u as z}from"./useGetAssetDetails-DjApoGti.js";import{u as U}from"./useRegion-CY_tkYBB.js";import{u as N}from"./useRestrictNavigation-Di0a3jmf.js";import{R as A}from"./routes-BDw5Uw9p.js";import{u as X,D as $}from"./useCalculateBalances-Cct6t9LS.js";import{r as x}from"./index-DN5v9M3U.js";import{c as K}from"./index-L8UCgrZ7.js";import{I as Q}from"./index-0N7ne2z7.js";import"./iframe-BpMmzN_y.js";import{u as H}from"./useTranslation-WNvSvoIr.js";import{u as W}from"./use-token-B5krM2Ba.js";import{F as _}from"./flex-B3BAmyYv.js";import{T as u}from"./index-Ch58T9V-.js";import{T as J,e as Y,b as R,d as B,a as Z,c as ee}from"./table-Cnv97lJc.js";import"./icon-DpWJ-Jqk.js";import"./create-recipe-context-D4XxGmVN.js";import"./factory-CnL8o6oZ.js";import"./index-Coi5j2Nm.js";import"./ada-DdEaAUc1.js";import"./btc-CNRURAO_.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BuO1ad1E.js";import"./index-Cnhf3yz8.js";import"./index-DqJrfFGZ.js";import"./numericalFormatting-B-JD5LjY.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-Cnu1nz7l.js";import"./index-DemlsjCA.js";import"./iconBase-CigdmIWU.js";import"./IconWrapper-BR3qE4mA.js";import"./useColorFormatConverter-Dx2cxaEs.js";import"./index-BzcM5yDV.js";import"./selectors-DTD5Za2S.js";import"./splitApi-DHLDNdPD.js";import"./config-sIBknG0d.js";import"./apiSlice-DIUUVtjB.js";import"./image-CMLph7Ck.js";import"./skeleton-sSyYsiKy.js";import"./stack-Tzm9BjVX.js";import"./portal-CNh6Ohbu.js";import"./index-ZoHJkkX0.js";import"./index-BvE0SIBr.js";import"./index-C4eCJrbV.js";import"./use-environment-context-CcjURY_D.js";import"./create-context-B5kKFizl.js";import"./popover-_wZUgr97.js";import"./create-slot-recipe-context-C37483WK.js";import"./split-presence-props-v67ewTJu.js";import"./create-split-props-1H4FxmAF.js";import"./use-presence-context-b2NKB7pb.js";import"./index-BLVBAjsL.js";import"./index-CEpGWQ9E.js";import"./use-event-BP6dekNo.js";import"./index-BeIEPu7L.js";import"./index-pW82Y0Cx.js";import"./index-CsblxyiR.js";import"./floating-ui.utils.dom-CngQ6us8.js";import"./index-ZUPMn3wG.js";import"./index-cMlMUVsx.js";import"./use-locale-context-BJeNXhVl.js";import"./factory-CAUoQwrY.js";import"./link-DLHqeEoX.js";import"./hooks-KP4OzJeu.js";import"./apiSlice-CR5rkhUR.js";import"./index-BBTVcg7F.js";import"./chunk-JMJ3UQ3L-DIV9O4Qs.js";import"./context-CZOfwt71.js";try{let t=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},o=new t.Error().stack;o&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[o]="57173239-ee34-4294-b59e-6750d0a1e445",t._sentryDebugIdIdentifier="sentry-dbid-57173239-ee34-4294-b59e-6750d0a1e445")}catch{}function te(){const{navigate:t}=N(),{t:o}=H("app"),{cryptoBalances:r,isLoadingBalances:d,isLoadingPrices:i,valueForAsset:b}=X(),{data:C,isLoading:s}=F(void 0),{data:a,isLoading:p}=z(),{isCAUser:T}=U(),g=()=>{t(A.DASHBOARD_TRADE)},n=c=>{t(`${A.MARKET_DETAILS}?asset=${c}`)},l=x.useMemo(()=>Object.entries(r).reduce((c,[w,j])=>{const k=b(w,j);return k>=$&&c.push({symbol:w,balance:j,value:k}),c},[]),[r,i]),h=x.useMemo(()=>p||s||d||i,[p,s,d,i]);return e.jsx(m,{onBrowseCoinsClick:g,coins:l,allAssetDetails:a,dailyInsights:C,isLoading:h,tooltip:o(T?"dashboard.tooltip.performance24hCA":"dashboard.tooltip.performance24hUS"),onAssetClick:n,"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"CoinBalanceTable","data-sentry-source-file":"index.tsx"})}const m=({coins:t,allAssetDetails:o,dailyInsights:r,isLoading:d,tooltip:i,onAssetClick:b,onBrowseCoinsClick:C})=>{const{t:s}=H("app"),[a,p]=x.useState(-1),T=W("colors","grey.light.10"),g=x.useMemo(()=>t.sort((n,l)=>(n.value-l.value)*a),[t,a]);return e.jsx(_,{flexDir:"column",w:"100%","data-sentry-element":"Flex","data-sentry-component":"CoinBalanceTableComponent","data-sentry-source-file":"index.tsx",children:e.jsxs(J,{variant:"line",css:{tableLayout:"fixed"},"data-sentry-element":"Table.Root","data-sentry-source-file":"index.tsx",children:[e.jsx(Y,{"data-sentry-element":"Table.Header","data-sentry-source-file":"index.tsx",children:e.jsxs(R,{css:{"& th":{textTransform:"none",height:{base:8,sm:10},paddingTop:0,paddingBottom:0,borderBottom:`1px solid ${T}`}},pr:{base:"0.5rem",md:"1rem"},pl:0,bg:"grey.light.5","data-sentry-element":"Table.Row","data-sentry-source-file":"index.tsx",children:[e.jsx(B,{w:{md:"25%",base:"50%"},px:0,pl:2,"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.cryptoAssets")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.marketPrice")})}),e.jsx(B,{w:"25%",px:0,textAlign:"right",display:{base:"none",md:"table-cell"},"data-sentry-element":"Table.ColumnHeader","data-sentry-source-file":"index.tsx",children:e.jsxs(_,{justifyContent:"flex-end",alignItems:"center","data-sentry-element":"Flex","data-sentry-source-file":"index.tsx",children:[e.jsx(u,{textStyle:"ManropeSemiboldXSmall",color:"grey.light.90",textTransform:"none","data-sentry-element":"Text","data-sentry-source-file":"index.tsx",children:s("dashboard.24hPerformance")}),e.jsx(q,{bodyText:i,triggerComponent:e.jsx(_,{mt:.5,children:e.jsx(M,{icon:Q,size:16,color:"blue.100"})}),"data-sentry-element":"Tooltip","data-sentry-source-file":"index.tsx"})]})}),e.jsx(G,{w:{md:"25%",base:"50%"},isSelected:!1,isAsc:a===1,isDesc:a===-1,px:0,text:s("dashboard.totalPerformance"),justifyContent:"flex-end",onClick:()=>p(n=>n*-1),"data-sentry-element":"ThSorting","data-sentry-source-file":"index.tsx"})]})}),e.jsx(Z,{w:"full",py:1,"data-sentry-element":"Table.Body","data-sentry-source-file":"index.tsx",children:d?[1,2,3].map(n=>e.jsx(O,{},n)):e.jsx(e.Fragment,{children:r&&o&&t.length>0?g.map(({symbol:n,balance:l,value:h})=>n in o&&e.jsx(P,{assetDetails:o[n],assetInsights:r[n],onRowClick:()=>b(n),balance:l,value:h},n)):e.jsx(R,{borderWidth:"1px",borderColor:"grey.light.5",borderRadius:"0px 0px 6px 6px",children:e.jsxs(ee,{px:6,pt:{base:6,sm:9},pb:6,children:[e.jsx(u,{color:"grey.light.50",textStyle:"ManropeSemiboldBodySmall",mb:6,children:s("dashboard.noAssets")}),e.jsx(V,{icon:K,text:s("dashboard.browseCoins"),onClick:C})]})})})})]})})};try{m.displayName="CoinBalanceTableComponent",m.__docgenInfo={description:"",displayName:"CoinBalanceTableComponent",props:{coins:{defaultValue:null,description:"",name:"coins",required:!0,type:{name:"{ symbol: string; balance: string; value: number; }[]"}},allAssetDetails:{defaultValue:null,description:"",name:"allAssetDetails",required:!1,type:{name:"Record<string, any>"}},dailyInsights:{defaultValue:null,description:"",name:"dailyInsights",required:!1,type:{name:"Record<string, any>"}},onBrowseCoinsClick:{defaultValue:null,description:"",name:"onBrowseCoinsClick",required:!0,type:{name:"() => void"}},onAssetClick:{defaultValue:null,description:"",name:"onAssetClick",required:!0,type:{name:"(symbol: string) => void"}},tooltip:{defaultValue:null,description:"",name:"tooltip",required:!0,type:{name:"string"}},isLoading:{defaultValue:null,description:"",name:"isLoading",required:!1,type:{name:"boolean"}}}}}catch{}const _t={component:te},f=()=>e.jsx(m,{tooltip:"tooltip",onBrowseCoinsClick:()=>{},onAssetClick:()=>{},coins:[{balance:"10000",symbol:"BTC",value:1e3},{balance:"10000",symbol:"ETH",value:1e3}],allAssetDetails:{BTC:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000","24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},ETH:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000","24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}}},dailyInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx"}),y=()=>e.jsx(m,{onAssetClick:()=>{},coins:[],onBrowseCoinsClick:()=>{},tooltip:"tooltip","data-sentry-element":"CoinBalanceTableComponent","data-sentry-component":"EmptyTable","data-sentry-source-file":"index.stories.tsx"});var S,D,E;f.parameters={...f.parameters,docs:{...(S=f.parameters)==null?void 0:S.docs,source:{originalSource:`() => {
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
}`,...(E=(D=f.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var I,L,v;y.parameters={...y.parameters,docs:{...(I=y.parameters)==null?void 0:I.docs,source:{originalSource:`() => {
  return <CoinBalanceTableComponent onAssetClick={() => {}} coins={[]} onBrowseCoinsClick={() => {}} tooltip="tooltip" />;
}`,...(v=(L=y.parameters)==null?void 0:L.docs)==null?void 0:v.source}}};const Bt=["Default","EmptyTable"];export{f as Default,y as EmptyTable,Bt as __namedExportsOrder,_t as default};
