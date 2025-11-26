import{j as t}from"./jsx-runtime-DI6U_4IB.js";import{C as i}from"./index-C3EWnm3-.js";import"./iframe-DgfLTELc.js";import{T as d}from"./tr-D2fYsOxD.js";import{T as u}from"./tbody-DFX9xzvC.js";import"./index-ClffPsV2.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-B3U20ld5.js";import"./index-agZ3C1za.js";import"./use-style-config-EZ6_pcLD.js";import"./factory-CFgWEzc_.js";import"./box-BNRj7k3s.js";import"./flex-QlyG6JVf.js";import"./text-CONdp2M0.js";import"./index-CFt8Ty9a.js";import"./ReactIconWrapper-A5y_ehXy.js";import"./icon-CAuaTpcP.js";import"./numericalFormatting-CpqA-qIt.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BC5e4zJc.js";import"./index-BVgvSdJU.js";import"./iconBase-Cpg_UNgP.js";import"./IconWrapper-CadW8o00.js";import"./useColorFormatConverter-DafA-ueU.js";import"./index-Gqx5unGI.js";import"./index-BlAqH7Wf.js";import"./link-C-KIxL5n.js";import"./popover-trigger-Bx608RCq.js";import"./use-popper-BBFCqSpY.js";import"./use-event-listener-BskXR00q.js";import"./use-callback-ref-HyeqLHBU.js";import"./use-safe-layout-effect-DV-X3m1z.js";import"./use-update-effect-DNq4iLpn.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-Bx6jzr8l.js";import"./use-disclosure-BSrh1nDS.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-ButxGAnF.js";import"./define-styles-k0dS9I3S.js";import"./context-BJm0OUv_.js";import"./portal-DVwiaO86.js";import"./index-DaKGuAiQ.js";import"./index-NjqnnKLE.js";import"./selectors-IQbO_97v.js";import"./splitApi-C1jgN4PV.js";import"./config-CLrn1Lld.js";import"./routes-B_ndicd_.js";import"./apiSlice-D5fhlSHT.js";import"./useTranslation-D4hvxz60.js";import"./context-DV1ILTZb.js";import"./image-BduZkbwl.js";import"./skeleton-circle-vJVtxEfS.js";import"./skeleton-BJ2H8Swm.js";import"./emotion-react.browser.esm-Brdn4Aia.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DUrzvY5M.js";import"./use-breakpoint-value-BAjuE7zO.js";import"./responsive-C4C1brqy.js";import"./env-Dkr2CNEM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
