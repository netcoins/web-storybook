import{j as t}from"./jsx-runtime-kt9n4iwU.js";import{C as i}from"./index-D5lBUPN3.js";import"./iframe-D7wbNBmz.js";import{T as d}from"./tr-epk1cSWX.js";import{T as u}from"./tbody-BtMzTcTz.js";import"./index-CMb1GLSI.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-ChMev2E6.js";import"./index-C5-kSor8.js";import"./use-style-config-BE1MhXTw.js";import"./factory-C6_WZdci.js";import"./box-CZUQNIQs.js";import"./flex-1MUZeXBn.js";import"./text-D0xi-gj7.js";import"./index-VvyBKk6l.js";import"./ReactIconWrapper-CjMTLHYT.js";import"./icon-DFb405kj.js";import"./numericalFormatting-B6tTSdOH.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-02fe0S7f.js";import"./index-BvQliYax.js";import"./iconBase-CoO-FPPt.js";import"./IconWrapper-D5UY6zRL.js";import"./useColorFormatConverter-BGIk7649.js";import"./index-CSLdzN6M.js";import"./index-Bjtg3a6r.js";import"./link-Cdw5tx3M.js";import"./popover-trigger-BXgR5ZCU.js";import"./use-popper-CT58cCL5.js";import"./use-event-listener-BeHW0YbW.js";import"./use-callback-ref-CD8hS37E.js";import"./use-safe-layout-effect-CsQxp-Nf.js";import"./use-update-effect-BUeBa4Sg.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-B5p8p7Vm.js";import"./use-disclosure-BCJO0-vj.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-tWvBTjRy.js";import"./define-styles-k0dS9I3S.js";import"./context-EacpbQHw.js";import"./portal-Dd0e1lou.js";import"./index-BZF8o6eA.js";import"./index-CZQLJW5d.js";import"./selectors-BYjG1LCU.js";import"./splitApi-DPeIEH7p.js";import"./config-BsqlJY5C.js";import"./routes-Dgv9MVgI.js";import"./apiSlice-B9_yJSOM.js";import"./useTranslation-boSNlJuy.js";import"./context-DoSMJOVg.js";import"./image-Ccd7ZpcY.js";import"./skeleton-circle-DJ-qipPU.js";import"./skeleton-BB-sR9w8.js";import"./emotion-react.browser.esm-CWP-a7bu.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-qpcnJ_l-.js";import"./use-breakpoint-value-D9_Iv2Sv.js";import"./responsive-BpIlk7_J.js";import"./env-BKIX_BBS.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
