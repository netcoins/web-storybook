import{j as t}from"./jsx-runtime-B791eGeM.js";import{C as i}from"./index-DBoKBy7H.js";import"./iframe-CxvPOnKM.js";import{T as d}from"./tr-IIdL3u_8.js";import{T as u}from"./tbody-DQkV4vl4.js";import"./index-CLCsa0sL.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-AivTgnFY.js";import"./index-DIojWxTx.js";import"./use-style-config-D4hZ3gJS.js";import"./factory-CgJe7pVc.js";import"./box-B80E9g7g.js";import"./flex-DwRBA7jn.js";import"./text-BOMZCICA.js";import"./index-DzTR2wUf.js";import"./ReactIconWrapper-EUt_Lq8I.js";import"./icon-BYdeT4Jt.js";import"./numericalFormatting-CkiMQxeS.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DII244a2.js";import"./index-BFX15_Ms.js";import"./iconBase-BdnFlmf7.js";import"./IconWrapper-C26FGh8I.js";import"./useColorFormatConverter-BTJ0WMQ0.js";import"./index-DzgP4mBd.js";import"./index-DXEr5Ofd.js";import"./link-zYO3tWAP.js";import"./popover-trigger-DuV9V43R.js";import"./use-popper-BatGaK5A.js";import"./use-event-listener-D-_kvGlA.js";import"./use-callback-ref-BTIe4Lfr.js";import"./use-safe-layout-effect-BQz89kL8.js";import"./use-update-effect-B6CgvZue.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-0PJQmlTb.js";import"./use-disclosure-Bbrx3J8Q.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CEvJpgjM.js";import"./define-styles-k0dS9I3S.js";import"./context-lpI2Zs0F.js";import"./portal-DrIQlOad.js";import"./index-BtzpXECg.js";import"./index-C37eouKn.js";import"./selectors-DqG83b8R.js";import"./splitApi-POu6TnWB.js";import"./config-ByIHyRE-.js";import"./routes-DuwQYZnH.js";import"./apiSlice-D8lzB9VR.js";import"./useTranslation-CcFYHi0U.js";import"./context-BkSF-D9k.js";import"./image-wZIttEua.js";import"./skeleton-circle-DpZDB__o.js";import"./skeleton-NSp6S68t.js";import"./emotion-react.browser.esm-DMjDgr_P.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-BwTuWpMz.js";import"./use-breakpoint-value-C4NwLhAq.js";import"./responsive-CBvR500A.js";import"./env-CNGPhNjk.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
