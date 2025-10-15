import{j as t}from"./jsx-runtime-F2b9qZUC.js";import{C as i}from"./index-CRRm07ev.js";import"./iframe-DO6PTJH3.js";import{T as d}from"./tr-DobHrXwv.js";import{T as u}from"./tbody-DNZpKOdp.js";import"./index-m9Y6V-Mj.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CwHsVPJN.js";import"./index-DEIjWCZM.js";import"./use-style-config-ltM-VqRn.js";import"./factory-D4os3DTv.js";import"./box-DYkp6abn.js";import"./flex-Dmt0vVc3.js";import"./text-f24MqBOH.js";import"./index-A8Z1HBQp.js";import"./ReactIconWrapper-rTqmz8sr.js";import"./icon-w9rwFRe1.js";import"./numericalFormatting-Cym5s0XV.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-sd5mmdp9.js";import"./index-eRWJBuzG.js";import"./iconBase-OOGBl0nZ.js";import"./IconWrapper-jyneDP2o.js";import"./useColorFormatConverter-BxSuu2SB.js";import"./index-DKQDoSGN.js";import"./index-D-5hoI3w.js";import"./link-Bi5Wsd9a.js";import"./popover-trigger-CIK0VGhT.js";import"./use-popper-BFP0DruU.js";import"./use-event-listener-RIwX6lXn.js";import"./use-callback-ref-D7g_qo5-.js";import"./use-safe-layout-effect-B6Y0d9ov.js";import"./use-update-effect-DX9nYMvX.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-BYv1b4Zo.js";import"./use-disclosure-CfaSsXLT.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-BX186klT.js";import"./define-styles-k0dS9I3S.js";import"./context-DZDe_Ksj.js";import"./portal-BrVE5FLc.js";import"./index-UDJwb-6x.js";import"./index-CuI6DWIL.js";import"./selectors-DvDF50Wx.js";import"./splitApi-kThctqjm.js";import"./config-BWovJ6d1.js";import"./routes-BeF8ZY7s.js";import"./apiSlice-D7irPDVG.js";import"./useTranslation-CezddRaN.js";import"./context-ieJEn0X6.js";import"./image-BgBFZeVe.js";import"./skeleton-circle-DBXIzEz0.js";import"./skeleton-DfBjefX2.js";import"./emotion-react.browser.esm-DkvWKo7R.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-BoGUHGWh.js";import"./use-breakpoint-value-CGyTwGb2.js";import"./responsive-CRbMGSGe.js";import"./env-WsiKa0gs.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
