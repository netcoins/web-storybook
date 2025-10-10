import{j as t}from"./jsx-runtime-D1fmR_0H.js";import{C as i}from"./index-BYjL0B8r.js";import"./iframe-Djr8TDZX.js";import{T as d}from"./tr-UaRFtJaQ.js";import{T as u}from"./tbody-PIHgan_W.js";import"./index-CwS5SFt5.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BxM6BqzF.js";import"./index-D7kejBr3.js";import"./use-style-config-Daw0etIq.js";import"./factory-B75oiwYl.js";import"./box-Ddo0T5vp.js";import"./flex-B7jvFCuJ.js";import"./text-DIezfyBL.js";import"./index-CXoUJ3gQ.js";import"./ReactIconWrapper-CeG2FVW7.js";import"./icon-Amzc7Rxz.js";import"./numericalFormatting-DTV3hplR.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-C3QzfRha.js";import"./index-DP7MK6eO.js";import"./iconBase-_mle2yPy.js";import"./IconWrapper-CTchPece.js";import"./useColorFormatConverter-CP7R4FjB.js";import"./index-VXGww5Ek.js";import"./index-BA5L0-ay.js";import"./link-DjskeokQ.js";import"./popover-trigger-BbW2rAF-.js";import"./use-popper-CfeTSc3e.js";import"./use-event-listener-CK1Cb9yv.js";import"./use-callback-ref-Dc4T41Io.js";import"./use-safe-layout-effect-BGeZWWWj.js";import"./use-update-effect-B98N2EbP.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DWU1dUnL.js";import"./use-disclosure-DNUjUzU3.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CEMETFki.js";import"./define-styles-k0dS9I3S.js";import"./context-DtPzYcKH.js";import"./portal-UgF000Hs.js";import"./index-CGaiQ1Ba.js";import"./index-Bty6pMn6.js";import"./selectors-CD_oOgop.js";import"./splitApi-BMmtgwEK.js";import"./config-KKoj7UOG.js";import"./routes-CkADwZQ9.js";import"./apiSlice-lo8YyfAc.js";import"./useTranslation-DDKfQC5m.js";import"./context-Dgbi3PHK.js";import"./image-jYYs6nRN.js";import"./skeleton-circle-CYp6AqvX.js";import"./skeleton-C6XKaESu.js";import"./emotion-react.browser.esm-BySdyGr1.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-1eMcZXRx.js";import"./use-breakpoint-value-DsQ8xWAM.js";import"./responsive-C4w5CQAU.js";import"./env-BtqlIudn.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
