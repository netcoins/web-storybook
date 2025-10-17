import{j as t}from"./jsx-runtime-zGFq_C62.js";import{C as i}from"./index-B1bbLNM-.js";import"./iframe-Cki2KkBY.js";import{T as d}from"./tr-mklOeuHc.js";import{T as u}from"./tbody-C1XYcL3B.js";import"./index-CvVwbvcQ.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-DUUXZ1T_.js";import"./index-yNGeAoM8.js";import"./use-style-config-Day8Q7qP.js";import"./factory-B-orROQ2.js";import"./box-D9oSJl1u.js";import"./flex-DXtktOtT.js";import"./text-BNtRnHpB.js";import"./index-CG0nSmez.js";import"./ReactIconWrapper-DZLi-HpD.js";import"./icon-DX5MWoK7.js";import"./numericalFormatting-Bi5Mn6dY.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-C9BZEETT.js";import"./index-BvhrlOX8.js";import"./iconBase-6Mbyj9fK.js";import"./IconWrapper-C_BlUv6B.js";import"./useColorFormatConverter-BkCCeILI.js";import"./index-hSpfR2ol.js";import"./index-BKQX6mGO.js";import"./link-DAxPaj3o.js";import"./popover-trigger-BEsvGPhw.js";import"./use-popper-C6wsYazR.js";import"./use-event-listener-CMpck3vV.js";import"./use-callback-ref-BwTn-8qm.js";import"./use-safe-layout-effect-CZn_zMT5.js";import"./use-update-effect-Bq1UiBd1.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-wqF3_X0V.js";import"./use-disclosure-C8IprfUz.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-FW5wo-U4.js";import"./define-styles-k0dS9I3S.js";import"./context-DzU3Ccpl.js";import"./portal-BaUDzvjH.js";import"./index-koZE331m.js";import"./index-DrfxZoK6.js";import"./selectors-DjSyeVV2.js";import"./splitApi-CNXeJdLY.js";import"./config-Dn73o7oV.js";import"./routes-SAnWq1FA.js";import"./apiSlice-CCOLw2IO.js";import"./useTranslation-C9Cf6z0E.js";import"./context-DSHNjmW3.js";import"./image-Bhjk2oY0.js";import"./skeleton-circle-Cve5agAx.js";import"./skeleton-BkKV0SB6.js";import"./emotion-react.browser.esm-DibK7BRk.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-Brj_VQoZ.js";import"./use-breakpoint-value-CeD2nilX.js";import"./responsive-DO5UCD0D.js";import"./env-sFVpaesd.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
