import{j as t}from"./jsx-runtime-NXhZHcg6.js";import{C as s}from"./index-BiVroY8J.js";import"./iframe-BUebCkdh.js";import{T as d,a as u}from"./tr-B-nTmbuO.js";import"./index-DjzENcrT.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Ds8bRndB.js";import"./index-Ch-dJqYU.js";import"./use-style-config-BeVa6Ocw.js";import"./factory-BWQouZCw.js";import"./box-C6_2p-KD.js";import"./flex-DfFhdsg3.js";import"./text-DfZTyfAf.js";import"./index-BVoYrKs6.js";import"./ReactIconWrapper-PLrzU-qZ.js";import"./icon-idr_5mYa.js";import"./numericalFormatting-BBLro4Ui.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-CcLzqBeJ.js";import"./index-Bv-lCoQI.js";import"./iconBase-D4f4cSS3.js";import"./IconWrapper-B3KvwTtU.js";import"./useColorFormatConverter-p5siRVUE.js";import"./index-DDXG85FH.js";import"./index-41FjFkpD.js";import"./link-CcZ3Kqip.js";import"./popover-trigger-ChZtGg2i.js";import"./use-popper-BuZCMZMT.js";import"./use-event-listener-DQE33nso.js";import"./use-callback-ref-lCHO6cKy.js";import"./use-safe-layout-effect-CVtmfawi.js";import"./use-update-effect-Dj-cxMAl.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-CNwRwZMM.js";import"./use-disclosure-BONz3KZl.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-BoUmx0w2.js";import"./define-styles-k0dS9I3S.js";import"./context-9zgJCxIX.js";import"./portal-BwLApnkH.js";import"./index-D_orNYzX.js";import"./index-BFYglDq5.js";import"./selectors-CQTFxj6_.js";import"./splitApi-C3kMUdEr.js";import"./config-CY4zrJeK.js";import"./routes-BaXGQrOq.js";import"./apiSlice-BhwkWAmV.js";import"./useTranslation-BrU8jXuL.js";import"./context-BJ2ml8Vt.js";import"./image-7VlbMDDK.js";import"./skeleton-circle-BsYh2CGc.js";import"./skeleton-BwE_GV7S.js";import"./emotion-react.browser.esm-Ba1kZHdS.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DUfcnBA9.js";import"./use-breakpoint-value-DBM2oGbe.js";import"./responsive-BP29ecxU.js";import"./env-BR3KI-7d.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="0b2518d4-cff6-4f70-ae39-a73858677e38",e._sentryDebugIdIdentifier="sentry-dbid-0b2518d4-cff6-4f70-ae39-a73858677e38")}catch{}const Re={component:s},n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ge=["Default","TradeOnly"];export{n as Default,r as TradeOnly,ge as __namedExportsOrder,Re as default};
