import{j as t}from"./jsx-runtime-CHyxX_5n.js";import{C as i}from"./index-bics_RUj.js";import"./iframe-C3Vznt8H.js";import{T as d}from"./tr-DA3Y4ZHr.js";import{T as u}from"./tbody-DSl766WV.js";import"./index-Bdqkl4I-.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-eo9wUE-i.js";import"./index-BCTaj__g.js";import"./use-style-config-BXPCbPng.js";import"./factory-D36qWwKB.js";import"./box-CQ4YIrS1.js";import"./flex-DAOyVrXN.js";import"./text-CIBszfI9.js";import"./index-DYPXZy1z.js";import"./ReactIconWrapper-67jIO5o9.js";import"./icon-54qfchxO.js";import"./numericalFormatting-ZkSQ6GFV.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DEH4fgq4.js";import"./index-Ihh17YBv.js";import"./iconBase-BEozv2MW.js";import"./IconWrapper-DswvVErM.js";import"./useColorFormatConverter-DVOvKiCp.js";import"./index-BS9jcxjl.js";import"./index-GzgxXZTL.js";import"./link-DpS2C6v1.js";import"./popover-trigger-BR19-qqO.js";import"./use-popper-DxkzUJsn.js";import"./use-event-listener-DhB1fxOR.js";import"./use-callback-ref-AXr5jWp6.js";import"./use-safe-layout-effect-rR6xqPwy.js";import"./use-update-effect-yGGxCaHf.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DPXjVske.js";import"./use-disclosure-gqlSRIci.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-DljH8rSL.js";import"./define-styles-k0dS9I3S.js";import"./context-B1S3rUf_.js";import"./portal-Ee1BlQRi.js";import"./index-C9SEgkda.js";import"./index-CI6TVnz_.js";import"./selectors-CT8tsemV.js";import"./splitApi-X0BJ0YOI.js";import"./config-BugtUsCQ.js";import"./routes-B97wpvq0.js";import"./apiSlice-DlmHKQNr.js";import"./useTranslation-CIkR91I8.js";import"./context-BTA3T-59.js";import"./image-DszkzwYU.js";import"./skeleton-circle-weLYjKNE.js";import"./skeleton-J0f29Nc6.js";import"./emotion-react.browser.esm-BnEgYPP7.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DwHCkuKL.js";import"./use-breakpoint-value--GgAv3G_.js";import"./responsive-C9ircmYZ.js";import"./env-CCHad45F.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
