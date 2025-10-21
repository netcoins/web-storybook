import{j as t}from"./jsx-runtime-xcRR_sFE.js";import{C as i}from"./index-CkVdkq4g.js";import"./iframe-Dxt0JsW3.js";import{T as d}from"./tr-BnpqxESg.js";import{T as u}from"./tbody-BjN_JxX0.js";import"./index-BhD34FR3.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BhwWZxb7.js";import"./index-BfxolTsx.js";import"./use-style-config-5ytjCScN.js";import"./factory-Bs5lGMgw.js";import"./box-ehHZiD40.js";import"./flex-48mrT-tZ.js";import"./text-DAhtPMd0.js";import"./index-BmMVfUjI.js";import"./ReactIconWrapper-BeVPFMMw.js";import"./icon-BcEUe3QI.js";import"./numericalFormatting-CT1dC8Y3.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BmeNzv31.js";import"./index-B6IQNkD1.js";import"./iconBase-0rthzjfA.js";import"./IconWrapper-2IQuXshP.js";import"./useColorFormatConverter-Bzx_7CP_.js";import"./index-RgKbuL0w.js";import"./index-B6mJ_54l.js";import"./link-DGTfTWZr.js";import"./popover-trigger-DXWS32dO.js";import"./use-popper-B5-Azuvi.js";import"./use-event-listener-CUfXQy04.js";import"./use-callback-ref-B1WEbRtX.js";import"./use-safe-layout-effect-plSln0B8.js";import"./use-update-effect-KZs9fcHS.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-a_I5UrCu.js";import"./use-disclosure-CqbOGess.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-BBbOG_Z3.js";import"./define-styles-k0dS9I3S.js";import"./context-CrNy_0ll.js";import"./portal-YsereJxH.js";import"./index-DsZ2zoj5.js";import"./index-jms7KwRc.js";import"./selectors-BunIC1wT.js";import"./splitApi-_axuba1e.js";import"./config-Cuz1atiI.js";import"./routes-Dh1aJoYL.js";import"./apiSlice-n1ikz-VM.js";import"./useTranslation-BmnSDlTl.js";import"./context-DmX6m6fm.js";import"./image-DZAWZCjS.js";import"./skeleton-circle-D8vNu_58.js";import"./skeleton-BKh7jBGb.js";import"./emotion-react.browser.esm-DiXB_ngb.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-BUU_sT09.js";import"./use-breakpoint-value-BQ68NxoE.js";import"./responsive-Cir2suua.js";import"./env-df_4vhMP.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
