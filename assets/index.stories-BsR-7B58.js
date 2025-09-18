import{j as t}from"./jsx-runtime-D9lk7ff7.js";import{C as i}from"./index-BzA5A9Mg.js";import"./iframe-4snOr_nA.js";import{T as d}from"./tr-pVfOEv5_.js";import{T as u}from"./tbody-BdWNq3R9.js";import"./index-YNH3KVn7.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BUsXm8_P.js";import"./index-DGSN4z5d.js";import"./use-style-config-BTIaUb99.js";import"./factory-BaMHIHF2.js";import"./box-mIRb2X17.js";import"./flex-Cn4tngKW.js";import"./text-Davp32bw.js";import"./index-Co54AsQl.js";import"./ReactIconWrapper-DBLWKmlh.js";import"./icon-C96Dy3VJ.js";import"./numericalFormatting-XaD3qwq8.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-D7jkVTZX.js";import"./index-CPXKtL05.js";import"./iconBase-CA1HnJL0.js";import"./IconWrapper-Bl5n1G5l.js";import"./useColorFormatConverter-B3Ohx5Ps.js";import"./index-leDtpqK9.js";import"./index-CB7XTSe9.js";import"./link-yC38Pivd.js";import"./popover-trigger-BZheT2k_.js";import"./use-popper-BfN1kkWJ.js";import"./use-event-listener-Wcj-GdVd.js";import"./use-callback-ref-D312f1V-.js";import"./use-safe-layout-effect-XsK3228V.js";import"./use-update-effect-ChZy2cIw.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-FfpTWtbi.js";import"./use-disclosure-XZf61nHt.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion--IkAAy9x.js";import"./define-styles-k0dS9I3S.js";import"./context-DbYNCYOF.js";import"./portal-BcAQyABJ.js";import"./index-CpWUQ-VN.js";import"./index-DjnaG4wI.js";import"./selectors-ByQmaniL.js";import"./splitApi-Cb1fZEuY.js";import"./config-D28zhpbo.js";import"./routes-DHi426Z9.js";import"./apiSlice-BZblxMsx.js";import"./useTranslation-DRnxolO8.js";import"./context-B-AZwJno.js";import"./image-DeOmizmp.js";import"./skeleton-circle-BlzwpBfX.js";import"./skeleton-BOYcla2G.js";import"./emotion-react.browser.esm-DndEamoG.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-B1Pmt9I1.js";import"./use-breakpoint-value-BXgtuBmS.js";import"./responsive-D9h5m_CI.js";import"./env-DJuB3Jst.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
