import{j as t}from"./jsx-runtime-0j627tJz.js";import{C as i}from"./index-BY4RPhiB.js";import"./iframe-BequwYZt.js";import{T as d}from"./tr-qv9axqVe.js";import{T as u}from"./tbody-EEcJCRaQ.js";import"./index-DzTNWVFF.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-32lQ2NzG.js";import"./index-CqM68cw3.js";import"./use-style-config-K9VkrvYr.js";import"./factory-Bd3V6wa0.js";import"./box-BxwTpzrX.js";import"./flex-BUw3zH7M.js";import"./text-B0fW30gV.js";import"./index-DfpTTFJ6.js";import"./ReactIconWrapper-B_y0NoKf.js";import"./icon-MsGxxGD1.js";import"./numericalFormatting-CNEM4TW3.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-D6DDC22O.js";import"./index-CH_UO4tK.js";import"./iconBase-BZJQX4CJ.js";import"./IconWrapper-5ZHSRTx5.js";import"./useColorFormatConverter-Bqk7RZn8.js";import"./index-CXcoDCxE.js";import"./index-CD3sdQsM.js";import"./link-C7BeQdGD.js";import"./popover-trigger-D0Ok7Wmk.js";import"./use-popper-_gbpm_E0.js";import"./use-event-listener-UqEDgyih.js";import"./use-callback-ref-Bb_HrfCB.js";import"./use-safe-layout-effect-cxAStKeI.js";import"./use-update-effect-Z2q3P0cR.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-JZ-KxWIX.js";import"./use-disclosure-CYveMB9n.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CvhmvcY9.js";import"./define-styles-k0dS9I3S.js";import"./context-CRHpPgiL.js";import"./portal-BP4cpTUT.js";import"./index-ZIUzDdqk.js";import"./index-B4jNgDJm.js";import"./selectors-tUkrB5GA.js";import"./splitApi-DqZRvujU.js";import"./config-C007RWet.js";import"./routes-DggyqOW8.js";import"./apiSlice-Twtsjlty.js";import"./useTranslation-D16A3oi5.js";import"./context-Dak0qW2L.js";import"./image-WVJIwORx.js";import"./skeleton-circle-nhW6koch.js";import"./skeleton-B9INBG9O.js";import"./emotion-react.browser.esm-fXjbUP0y.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-l9aDlI_x.js";import"./use-breakpoint-value-UmUDl5O6.js";import"./responsive-D0buso0D.js";import"./env-Dme436aI.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
