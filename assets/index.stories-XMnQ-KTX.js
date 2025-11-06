import{j as t}from"./jsx-runtime-CtUEez0z.js";import{C as i}from"./index-CrWnh-In.js";import"./iframe-COwPw1VY.js";import{T as d}from"./tr-BfK1l0pf.js";import{T as u}from"./tbody-LWV6HhwR.js";import"./index-CRm5lGo_.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CpAQ5tMk.js";import"./index-Cqmn51YS.js";import"./use-style-config-DWzjkw3h.js";import"./factory-DJYjEkMm.js";import"./box-9BX69DHc.js";import"./flex-WnzeImCB.js";import"./text-DU2wDpPi.js";import"./index-BLwgvquj.js";import"./ReactIconWrapper-s8kSXq-k.js";import"./icon-pHxpQceI.js";import"./numericalFormatting-B7Gp9UWV.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-8D6JRvbe.js";import"./index-CMMXWqW6.js";import"./iconBase-Dn46-paq.js";import"./IconWrapper-BUDF_B9X.js";import"./useColorFormatConverter-DSHGKob3.js";import"./index-B1KVQGGL.js";import"./index-CTGzOJ-z.js";import"./link-DRgt6bZT.js";import"./popover-trigger-DzXUubWb.js";import"./use-popper-Bo3zfxkV.js";import"./use-event-listener-D32HG4Yo.js";import"./use-callback-ref-DrjLitdx.js";import"./use-safe-layout-effect-Bz0q2S9E.js";import"./use-update-effect-3eGvpoH8.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DD_bcvjC.js";import"./use-disclosure-zUyXwX9i.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-BIX3BNxl.js";import"./define-styles-k0dS9I3S.js";import"./context-BxW3_Ype.js";import"./portal-BdY166rg.js";import"./index-DiVBZjDx.js";import"./index-D-8BsizW.js";import"./selectors-C0ekDTwo.js";import"./splitApi-BiXUQwZK.js";import"./config-CSUyxyJD.js";import"./routes-C37qjQgD.js";import"./apiSlice-CSdc3tbK.js";import"./useTranslation-VHApA7df.js";import"./context-CMxGEpSm.js";import"./image-C2QKG39O.js";import"./skeleton-circle-2wWW2JY7.js";import"./skeleton-C7avB-vG.js";import"./emotion-react.browser.esm-Cu-JWzKK.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DrqPGq1M.js";import"./use-breakpoint-value-5UDaI_fu.js";import"./responsive-C0EjYG8g.js";import"./env-DByw9vDA.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
