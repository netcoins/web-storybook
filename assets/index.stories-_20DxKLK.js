import{j as t}from"./jsx-runtime-C9s0MxPb.js";import{C as i}from"./index-4ojP-pok.js";import"./iframe-DDeUXOzN.js";import{T as d}from"./tr-G0TBVZcJ.js";import{T as u}from"./tbody-CnI1aN0k.js";import"./index-erTGhS12.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Xssg2Xuq.js";import"./index-CbPWoY_S.js";import"./use-style-config-hCi5y6u4.js";import"./factory-ChZTgBT9.js";import"./box-CgtdGRxG.js";import"./flex-BVidIDWj.js";import"./text-BkJb7YbC.js";import"./index-D_he9t-P.js";import"./ReactIconWrapper-Dtt7ISP2.js";import"./icon-nxnZEOa5.js";import"./numericalFormatting-M_ZaJE8Q.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BGY60vxJ.js";import"./index-dyRHPXh6.js";import"./iconBase-RxPoNZwz.js";import"./IconWrapper-sS8W2gov.js";import"./useColorFormatConverter-CPyQayDp.js";import"./index-D7S8YFMX.js";import"./index-Tef1siDo.js";import"./link-y03nINyh.js";import"./popover-trigger-Vcknm0Go.js";import"./use-popper-CZNm01HR.js";import"./use-event-listener-qL3dpgc3.js";import"./use-callback-ref-DB1qIbnU.js";import"./use-safe-layout-effect-FM6UoDXy.js";import"./use-update-effect-DopMb-MJ.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DAystpBg.js";import"./use-disclosure-CHh08HPF.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-OBA1xCp2.js";import"./define-styles-k0dS9I3S.js";import"./context-g_O-K3XP.js";import"./portal-vQMsyF5o.js";import"./index-DRIBYd7d.js";import"./index-BkCmnLUE.js";import"./selectors-Ddq6MPNE.js";import"./splitApi-C4JcbSIm.js";import"./config-CEVnmeX8.js";import"./routes-DnpHGnHU.js";import"./apiSlice-ITXMQPB5.js";import"./useTranslation-CWRq8L5Q.js";import"./context-DmlQQ_9P.js";import"./image-C2ZX4Mfs.js";import"./skeleton-circle-C4V0Hyt1.js";import"./skeleton-BHPMZVb0.js";import"./emotion-react.browser.esm-BU5-KRVf.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-BV9df-rL.js";import"./use-breakpoint-value-D9_iWiD0.js";import"./responsive-D1Hr2uwb.js";import"./env-DnM5DrXN.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
  return <Table layout="fixed" sx={{
    borderCollapse: "collapse"
  }} w="100%">
            <Tbody w="full">
                <CoinBalanceTableRow assetDetails={{
        precision: "8",
        symbol: "BTC",
        name: "Bitcoin",
        price: "10000",
        price_precision: 2,
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
      }} onRowClick={() => {}} value={1000} balance="10" assetInsights={{
        performance: {
          totalCost: "1000",
          simpleReturn: "1000",
          simpleReturnPercent: "10",
          unrealizedGL: "1000",
          unrealizedGLPercent: "10"
        }
      }} />
            </Tbody>
        </Table>;
}`,...(l=(o=r.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,m,c;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  return <Table layout="fixed" sx={{
    borderCollapse: "collapse"
  }} w="100%">
            <Tbody w="full">
                <CoinBalanceTableRow assetDetails={{
        precision: "8",
        symbol: "ETH",
        name: "Ethereum",
        price: "10000",
        price_precision: 2,
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
      }} onRowClick={() => {}} value={1000} balance="10" assetInsights={{
        performance: {
          totalCost: "1000",
          simpleReturn: "1000",
          simpleReturnPercent: "10",
          unrealizedGL: "1000",
          unrealizedGLPercent: "10"
        }
      }} />
            </Tbody>
        </Table>;
}`,...(c=(m=n.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const De=["Default","TradeOnly"];export{r as Default,n as TradeOnly,De as __namedExportsOrder,ge as default};
