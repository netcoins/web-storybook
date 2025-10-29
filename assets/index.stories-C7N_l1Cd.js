import{j as t}from"./jsx-runtime-DZYSgAPK.js";import{C as s}from"./index-B1Ha6oj2.js";import"./iframe-D_zOel9O.js";import{T as d}from"./tr-gPbJbZ3A.js";import{T as u}from"./tbody-BdbbuJTL.js";import"./index-C9Tt2Xkz.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BP0D9zkY.js";import"./index-Ddgoexym.js";import"./use-style-config-A9Clw6KN.js";import"./factory-DBKxysTQ.js";import"./box-UwOhYLuN.js";import"./flex-T2gP-ZcI.js";import"./text-CFlvWPPt.js";import"./index-F38xTMz6.js";import"./ReactIconWrapper-DuygxyXP.js";import"./icon-CPv7nqrf.js";import"./numericalFormatting-4MGmtXII.js";import"./stringFormatting-BZ2iCSrH.js";import"./index-Bl_iX48n.js";import"./iconBase-DV5UXlGQ.js";import"./IconWrapper-zA_pDARh.js";import"./useColorFormatConverter-u_6Cn4Ce.js";import"./index-Ci4RJ58e.js";import"./index-Rq_DUYxa.js";import"./link-DSvaImVV.js";import"./popover-trigger-CnMxW7yM.js";import"./use-popper-CfbMKgn1.js";import"./use-event-listener-BDlbKOki.js";import"./use-callback-ref-D0GXHZ7w.js";import"./use-safe-layout-effect-Cu2YOrtN.js";import"./use-update-effect-XDFDZ0or.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-BgOG3T2G.js";import"./use-disclosure-q-u7NnYL.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-xFrErBE1.js";import"./define-styles-k0dS9I3S.js";import"./context-Cz3Oemje.js";import"./portal-CyzA-4cl.js";import"./index-uZkk-0kY.js";import"./index-CiEo5zRs.js";import"./selectors-qsuqtFcU.js";import"./splitApi-CdGkwYVd.js";import"./config-C4BJiv1A.js";import"./routes-DNLDovTG.js";import"./apiSlice-D7v3gYFr.js";import"./useTranslation-yCuG2ll8.js";import"./context-DIl3cEjS.js";import"./image-DW5gL9nb.js";import"./skeleton-circle-CmSdnwGY.js";import"./skeleton-YC5iYJII.js";import"./emotion-react.browser.esm-fZhfOcIz.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-CwX0ytp9.js";import"./use-breakpoint-value-Bz7GR02Y.js";import"./responsive-B0eMkKes.js";import"./env-BHar4UWT.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="d3832b14-a4b1-4f11-b962-05f0f39def6a",e._sentryDebugIdIdentifier="sentry-dbid-d3832b14-a4b1-4f11-b962-05f0f39def6a")}catch{}const Re={component:s},n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
