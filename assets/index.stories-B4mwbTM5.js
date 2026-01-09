import{j as t}from"./jsx-runtime-CFb-dJ-y.js";import{C as s}from"./index-2oby_faK.js";import"./iframe-BTnV4qdy.js";import{T as d,a as u}from"./tr-D3ZQSbzf.js";import"./index-CTVnqM5o.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BqBBoW6C.js";import"./index-CiZbjJZF.js";import"./use-style-config-BwOoHieX.js";import"./factory-Ro1QILuS.js";import"./box-BE0ZO1h_.js";import"./flex-Bbi-2o1Z.js";import"./text-Cms4Ma7f.js";import"./index-Dff_kdU3.js";import"./ReactIconWrapper-WO6yOcko.js";import"./icon-QfhRCDRE.js";import"./numericalFormatting-B8lKG8rr.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-D8uBy7mS.js";import"./index-DJin2CTS.js";import"./iconBase-DJsLEq5F.js";import"./IconWrapper-B9WeqKvf.js";import"./useColorFormatConverter-D_qWA8Ou.js";import"./index-w8HaxHns.js";import"./index-BoCLBnfV.js";import"./link-Bv2jjzU9.js";import"./popover-trigger-iuFI8UP8.js";import"./use-popper-DaTe3lhT.js";import"./use-event-listener-Dl5CJ1TO.js";import"./use-callback-ref-BhdtL9aI.js";import"./use-safe-layout-effect-D-nJR4lJ.js";import"./use-update-effect-CWpgkBQd.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DDDr9FUe.js";import"./use-disclosure-M7vHb2_m.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-D6WPvTTt.js";import"./define-styles-k0dS9I3S.js";import"./context-DlYmRpvU.js";import"./portal-CgFXZOZa.js";import"./index-C21gjmiV.js";import"./index-CeVkJDpp.js";import"./selectors-ri3Luao2.js";import"./splitApi-Dx3n0a19.js";import"./config-C4T-Xrfs.js";import"./routes-CzNkZYm2.js";import"./apiSlice-CanN4suC.js";import"./useTranslation-HcHLSnj3.js";import"./context-B_Lo_Vud.js";import"./image-DCBCu1AE.js";import"./skeleton-circle-uGQeMUc7.js";import"./skeleton-dxWpN0Vr.js";import"./emotion-react.browser.esm-Coto_Vv0.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-Bxqgankj.js";import"./use-breakpoint-value-DU7a-fKo.js";import"./responsive-BZM1CppC.js";import"./env-C2-cK840.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="0b2518d4-cff6-4f70-ae39-a73858677e38",e._sentryDebugIdIdentifier="sentry-dbid-0b2518d4-cff6-4f70-ae39-a73858677e38")}catch{}const Re={component:s},n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
