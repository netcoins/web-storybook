import{j as t}from"./jsx-runtime-NJXZv2PR.js";import{C as s}from"./index-DB4V1TXB.js";import"./iframe-D_8vC5L7.js";import{T as d,a as u}from"./tr-Dvjqo6Rh.js";import"./index-nFbt9F0p.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-D5UVUVm3.js";import"./index-jqPUURTV.js";import"./use-style-config-BaJboJXq.js";import"./factory-BN2D0nrS.js";import"./box-DCs53uzh.js";import"./flex-dv_TXrRW.js";import"./text-CG0-vbsY.js";import"./index-ACRDnFor.js";import"./ReactIconWrapper-ClK3z-Uj.js";import"./icon-DJN3705U.js";import"./numericalFormatting-Cz9WRFvV.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DD7mbiPz.js";import"./index-DFng6eQ4.js";import"./iconBase-WKWH4fTh.js";import"./IconWrapper-BcnsE8Qa.js";import"./useColorFormatConverter-Ddm8l03i.js";import"./index-DECOABk5.js";import"./index-B-IaOehN.js";import"./link-BhZ8D6Ah.js";import"./popover-trigger-BkjEdO0S.js";import"./use-popper-c2kXiIQs.js";import"./use-event-listener-BUShPiHF.js";import"./use-callback-ref-DD63nx6B.js";import"./use-safe-layout-effect-bh2HzAmb.js";import"./use-update-effect-B0MC4zum.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DnXyTSsO.js";import"./use-disclosure-BFdiv1nt.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-DUc9Loml.js";import"./define-styles-k0dS9I3S.js";import"./context-Bmm7nclc.js";import"./portal-BpTGPyTA.js";import"./index-Bn3Kfyus.js";import"./index-Ib0Ma8sA.js";import"./selectors-BHIJNXBq.js";import"./splitApi-CNFrNeSy.js";import"./config-DxllSodx.js";import"./routes-Cd0tABBS.js";import"./apiSlice-DHBOJakr.js";import"./useTranslation-Bt-ieQSb.js";import"./context-r2NDd6Mj.js";import"./image-DJ1QWl7s.js";import"./skeleton-circle-vrfsCYL3.js";import"./skeleton-BT7EnM5H.js";import"./emotion-react.browser.esm-DzHtxD6p.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-D_QpvQYj.js";import"./use-breakpoint-value-VCWDww6r.js";import"./responsive-1cy2zAjo.js";import"./env-Fam3dvfQ.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="0b2518d4-cff6-4f70-ae39-a73858677e38",e._sentryDebugIdIdentifier="sentry-dbid-0b2518d4-cff6-4f70-ae39-a73858677e38")}catch{}const Re={component:s},n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
