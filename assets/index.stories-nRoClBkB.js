import{j as t}from"./jsx-runtime-BBdz9i8f.js";import{C as s}from"./index-BwCo6rkS.js";import"./iframe-nhziNmIE.js";import{T as d,a as u}from"./tr-6tN7CHGz.js";import"./index-CuWipPBv.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BcfPfX3-.js";import"./index-CLDyqeFf.js";import"./use-style-config-CnySYLUd.js";import"./factory-3hpRlgfl.js";import"./box-regrXMqG.js";import"./flex-Bptw1u-e.js";import"./text-qmt3YJXZ.js";import"./index-DZGy8WTD.js";import"./ReactIconWrapper-BlQr67La.js";import"./icon-Bjc4M7s7.js";import"./numericalFormatting-HF6_cqjo.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BgeUGq-9.js";import"./index-CYsx-XtB.js";import"./iconBase-CpSDsPtS.js";import"./IconWrapper-Bz45jgG1.js";import"./useColorFormatConverter-CbG93XDd.js";import"./index-BGiDSKVW.js";import"./index-By6cn8XJ.js";import"./link-DcHIpSQu.js";import"./popover-trigger-CweULEjQ.js";import"./use-popper-CmQorO98.js";import"./use-event-listener-DTPBW4jY.js";import"./use-callback-ref-CyHNAcAu.js";import"./use-safe-layout-effect-CL_piIiz.js";import"./use-update-effect-DMAr7OVE.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-BcDpRs3V.js";import"./use-disclosure-ClQodmHm.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CT_UHRWS.js";import"./define-styles-k0dS9I3S.js";import"./context-CKU252FF.js";import"./portal-DfRp6blt.js";import"./index-B28Ei4Jf.js";import"./index-DoXu-AJr.js";import"./selectors-B-DxiPGx.js";import"./splitApi-Bzohmwyt.js";import"./config-DWd7VNC1.js";import"./routes-D5NNV_gH.js";import"./apiSlice-BuFmdmTa.js";import"./useTranslation-ZDq8JxxY.js";import"./context-Bj3gIHED.js";import"./image-BZrQHGEE.js";import"./skeleton-circle-Brio-nAO.js";import"./skeleton-BYy7Jbpb.js";import"./emotion-react.browser.esm-cCAfUX2b.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-D8bYC7gB.js";import"./use-breakpoint-value-DlpvJ1Q2.js";import"./responsive-Cbj0Y2PK.js";import"./env-Fvi0CQ1C.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="0b2518d4-cff6-4f70-ae39-a73858677e38",e._sentryDebugIdIdentifier="sentry-dbid-0b2518d4-cff6-4f70-ae39-a73858677e38")}catch{}const Re={component:s},n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
}`,...(l=(o=n.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};var p,m,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const ge=["Default","TradeOnly"];export{n as Default,r as TradeOnly,ge as __namedExportsOrder,Re as default};
