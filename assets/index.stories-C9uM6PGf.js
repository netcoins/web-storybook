import{j as t}from"./jsx-runtime--lILZ9UO.js";import{C as i}from"./index-I_uwMlYH.js";import"./iframe-DRoK8OQ_.js";import{T as d}from"./tr-DESk_MMe.js";import{T as u}from"./tbody-BtF9yDRw.js";import"./index-fhvgKgRs.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Du8mtcUS.js";import"./index-Dul_QMBV.js";import"./use-style-config-c90O6nFQ.js";import"./factory-cBEL_h0M.js";import"./box-DJeTaR7J.js";import"./flex-BXPhKBIF.js";import"./text-DERrfHeR.js";import"./index-CKUyb80T.js";import"./ReactIconWrapper-PZcFarTi.js";import"./icon-DGPOUiEw.js";import"./numericalFormatting-DzDR9C1Y.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-B7bTTrWA.js";import"./index-DL6zCrAR.js";import"./iconBase-Ck7fV1kq.js";import"./IconWrapper-CLRhBygL.js";import"./useColorFormatConverter-5Fnd0JWq.js";import"./index-Cjn7KozA.js";import"./index-BkIbrStP.js";import"./link-BZaTVQwC.js";import"./popover-trigger-ef7puqwW.js";import"./use-popper-suVR8dFU.js";import"./use-event-listener-ByPY-nI_.js";import"./use-callback-ref-DMyOb9x9.js";import"./use-safe-layout-effect-DtwtbX5i.js";import"./use-update-effect-B7dMLLC1.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-BA2mEcM2.js";import"./use-disclosure-DpTPIjUX.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-DLKV4Tay.js";import"./define-styles-k0dS9I3S.js";import"./context-RwG5JgMk.js";import"./portal-rBKCY6H6.js";import"./index-D37pZpu5.js";import"./index-DZAh7iKA.js";import"./selectors-C02KRKfN.js";import"./splitApi-BNdSKfFy.js";import"./config-zE3a3qdI.js";import"./routes-CwM6m32Y.js";import"./apiSlice-DzI7qubo.js";import"./useTranslation-Bl_qIHyZ.js";import"./context-C48GUBwm.js";import"./image-CkzM4DV7.js";import"./skeleton-circle-dPIEOPvH.js";import"./skeleton-Dl6pY0Y8.js";import"./emotion-react.browser.esm-CVjg8pDV.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-Bw0ZIBSA.js";import"./use-breakpoint-value-DXzkjoNb.js";import"./responsive-DBHL_e5n.js";import"./env-BEWU-fuA.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
