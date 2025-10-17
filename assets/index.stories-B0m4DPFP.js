import{j as t}from"./jsx-runtime-Bf6FIY89.js";import{C as i}from"./index-DFFNvYDP.js";import"./iframe-DzoY9gxD.js";import{T as d}from"./tr-K-khoSR2.js";import{T as u}from"./tbody-A8Fts0_O.js";import"./index-42qvvm2z.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-ia_jymDr.js";import"./index-BI5uO-PF.js";import"./use-style-config-BXPz3sCm.js";import"./factory-B1KwL9fl.js";import"./box-D_riIZ06.js";import"./flex-Cg_eJLpA.js";import"./text-Boo3MJ2c.js";import"./index-D3BfaoQR.js";import"./ReactIconWrapper-CJ39R-EP.js";import"./icon-BVLsEFas.js";import"./numericalFormatting-Bnmyrswu.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-uQAQpuNe.js";import"./index-BJOvK6Do.js";import"./iconBase-BlvCQgOC.js";import"./IconWrapper-DXfDSY2z.js";import"./useColorFormatConverter-C2kmG-cl.js";import"./index-WoWx58_C.js";import"./index-Dp3zlxoY.js";import"./link-Czb9O4I8.js";import"./popover-trigger-C_zZdvOT.js";import"./use-popper-BkAFnx68.js";import"./use-event-listener-CvA1Os5D.js";import"./use-callback-ref-C7rBtymT.js";import"./use-safe-layout-effect-xEfYQs6i.js";import"./use-update-effect-DSBV5QZx.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-B5DWbnO3.js";import"./use-disclosure-MdnrFlwG.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-u6ttxewf.js";import"./define-styles-k0dS9I3S.js";import"./context-rJ4pha0b.js";import"./portal-JDqUJCgr.js";import"./index-BC3vRADw.js";import"./index-CYsu2vrs.js";import"./selectors-NT3JVP2T.js";import"./splitApi-DksTJBAL.js";import"./config-CgD_hNUC.js";import"./routes-7nJymlse.js";import"./apiSlice-CUbzG3-J.js";import"./useTranslation-Ke8gqaJO.js";import"./context-BaCimMZ2.js";import"./image-Z_mSBH4_.js";import"./skeleton-circle-5JFWAKiN.js";import"./skeleton-BF_RP6A0.js";import"./emotion-react.browser.esm-DakPhJjT.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-BV4i6YGD.js";import"./use-breakpoint-value-Bemt8itg.js";import"./responsive-B5RFGaZx.js";import"./env-CqHC6CqO.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
