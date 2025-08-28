import{j as t}from"./jsx-runtime-MHZvqL_t.js";import{C as i}from"./index-BajzKp3i.js";import"./iframe-BS01ocFG.js";import{T as c}from"./tr-D2tHf09X.js";import{T as u}from"./tbody-CiSW1EDL.js";import"./index-Cw8pPJKX.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-B_onls_a.js";import"./index-BQja5mEm.js";import"./use-style-config-C5kUKhAX.js";import"./factory-CqABM38r.js";import"./box-CNEYIEc2.js";import"./flex-ClNkGKqe.js";import"./text-CFn7IS6o.js";import"./index-CcmpZq17.js";import"./ReactIconWrapper-lGskK6Ai.js";import"./icon-C7PIpLv-.js";import"./numericalFormatting-BzIJKOYd.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-CysaII5y.js";import"./index-CX5TbEnR.js";import"./iconBase-9XpoQhKd.js";import"./IconWrapper-CReWjnlc.js";import"./useColorFormatConverter-B4LwLepL.js";import"./index-BbP1VRm1.js";import"./index-poRBq0YZ.js";import"./link-ZLRvO5lj.js";import"./popover-trigger-DOTOwJtL.js";import"./use-popper-7FaoNOUa.js";import"./use-event-listener-DWKxjR-K.js";import"./use-callback-ref-DVW27AFN.js";import"./use-safe-layout-effect-DB3UvPb9.js";import"./use-update-effect-CWV0QlDb.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-merge-refs-B0dABy0A.js";import"./use-disclosure-CwO_tUym.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-Cq2wECNI.js";import"./define-styles-k0dS9I3S.js";import"./context-CjJ0Wp3S.js";import"./portal-lMhbnvvp.js";import"./index-OO7cPwER.js";import"./index-D6AAmjoO.js";import"./selectors-BFEshlwO.js";import"./splitApi-DiNKnY2c.js";import"./config-CVjc4kio.js";import"./routes-Bs6-m0CC.js";import"./apiSlice-CiExqF2J.js";import"./useTranslation-DGMNydqY.js";import"./context-DmGcVjL-.js";import"./image-DioStymI.js";import"./skeleton-circle-DolMMyD1.js";import"./skeleton-Ds2uJOe6.js";import"./emotion-react.browser.esm-D4mcBU_U.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-CBdSdfJv.js";import"./use-breakpoint-value-FqAU9RiU.js";import"./responsive-bTDqZ7l8.js";import"./env-DeCPGx5E.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d32cf991-ddaf-452d-9344-ee32d057a988",e._sentryDebugIdIdentifier="sentry-dbid-d32cf991-ddaf-452d-9344-ee32d057a988")}catch{}const De={component:i},r=()=>t.jsx(c,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(c,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var o,a,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ke=["Default","TradeOnly"];export{r as Default,n as TradeOnly,ke as __namedExportsOrder,De as default};
