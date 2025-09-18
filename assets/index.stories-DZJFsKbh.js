import{j as t}from"./jsx-runtime-BO59uSbh.js";import{C as i}from"./index-OyXH3PpO.js";import"./iframe-Buq5vjeR.js";import{T as d}from"./tr-DEnJt9n0.js";import{T as u}from"./tbody-A6aRH7Ek.js";import"./index-D6ZscxWD.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-0hbVR0Qt.js";import"./index-BgqXGIRq.js";import"./use-style-config-CV80em0b.js";import"./factory-Clpu5yQH.js";import"./box-C0SgsxPP.js";import"./flex-BcUag4Kz.js";import"./text-CxUtm01j.js";import"./index-BQnG4QpS.js";import"./ReactIconWrapper-Bz2umCih.js";import"./icon-CT4IPwKS.js";import"./numericalFormatting-6A0Xbvq9.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BUAMfI3O.js";import"./index-Dol7vJXm.js";import"./iconBase-B1goy4du.js";import"./IconWrapper-BUx9OYHX.js";import"./useColorFormatConverter-BGnNyKXb.js";import"./index-Br-uT-tT.js";import"./index-BICaYCvv.js";import"./link-CfPIAiH7.js";import"./popover-trigger-G0rIX4rs.js";import"./use-popper-DEDyDvn-.js";import"./use-event-listener--QLWm8S9.js";import"./use-callback-ref-CyxOgj_V.js";import"./use-safe-layout-effect-Cu1RChpk.js";import"./use-update-effect-DpfmmSSf.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-CUoZnHPv.js";import"./use-disclosure-CUXcQS-9.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-B5oP4Omx.js";import"./define-styles-k0dS9I3S.js";import"./context-Bv8doexR.js";import"./portal-DjPEr08D.js";import"./index-BSj_rENG.js";import"./index-Dx_I9M-U.js";import"./selectors-C71SSY6l.js";import"./splitApi-O3JNGH5b.js";import"./config-DKGctR_Y.js";import"./routes-CyrNZsbg.js";import"./apiSlice-NsE4iCW7.js";import"./useTranslation-WNTLl7ye.js";import"./context-CdFR_DVJ.js";import"./image-FcD2pmqe.js";import"./skeleton-circle-DG2B93iY.js";import"./skeleton-C2FLxsL5.js";import"./emotion-react.browser.esm-UNCuAYfq.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DUVur1JG.js";import"./use-breakpoint-value-D1XIkkNw.js";import"./responsive-D97B2mJr.js";import"./env-D3gNHxsM.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
