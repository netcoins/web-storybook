import{j as t}from"./jsx-runtime-CCJ18Kz-.js";import{C as i}from"./index-Cec6WonD.js";import"./iframe-DJ4HJDV5.js";import{T as d}from"./tr-FaNycTHy.js";import{T as u}from"./tbody-oErjmo0C.js";import"./index-DRJ906AT.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-RTneGv2M.js";import"./index-CZ6gmXhl.js";import"./use-style-config-CjFLxeBG.js";import"./factory-CDAqzQl4.js";import"./box-FyThfQAW.js";import"./flex-BoGPGpvw.js";import"./text-CwsqMmf5.js";import"./index-mgXwpWda.js";import"./ReactIconWrapper-5xrwkHzj.js";import"./icon-fRpri_pM.js";import"./numericalFormatting-C8lRRYvK.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DFB6IMfc.js";import"./index-C-F356-J.js";import"./iconBase-DaZVHB0C.js";import"./IconWrapper-CozbLQ7Y.js";import"./useColorFormatConverter-CuaM9Q_Y.js";import"./index-BKh9G5zc.js";import"./index-DdzUrdp8.js";import"./link-C2PNHYHY.js";import"./popover-trigger-CZAvZu84.js";import"./use-popper-DanfRe3J.js";import"./use-event-listener-Dgx7ZhVh.js";import"./use-callback-ref-BF4YjfZ_.js";import"./use-safe-layout-effect-DEFZ6YCP.js";import"./use-update-effect-BNRYZS_Y.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DyLhP37g.js";import"./use-disclosure-CO3uvVa6.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-DjHdjte4.js";import"./define-styles-k0dS9I3S.js";import"./context-CjzVIJzQ.js";import"./portal-D4RzTRtt.js";import"./index-DYl-dS4d.js";import"./index-CwLJJBMz.js";import"./selectors-CD5moSpq.js";import"./splitApi-D0NS_Mrw.js";import"./config-B3m1UM77.js";import"./routes-C_6vhcI0.js";import"./apiSlice-DqF6HoyR.js";import"./useTranslation-BEImrcCz.js";import"./context-DGCUbpZ6.js";import"./image-DscGFnL8.js";import"./skeleton-circle-Dnggr0r4.js";import"./skeleton-B0eAqqCw.js";import"./emotion-react.browser.esm-DfXFgfSU.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-BJVIhpxo.js";import"./use-breakpoint-value-nw1YSHXX.js";import"./responsive-Apx2GA89.js";import"./env-Bu7mn2gM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
