import{j as t}from"./jsx-runtime-BYo5s1w_.js";import{C as s}from"./index-_sE-UNwU.js";import"./iframe-CWLIvDKl.js";import{T as d}from"./tr-BJRVpagd.js";import{T as u}from"./tbody-CBm-Zavb.js";import"./index-DBVLXH2X.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-BhC-VHcZ.js";import"./index-gIeeU9h1.js";import"./use-style-config-DKVKIdpu.js";import"./factory-BeGSudYV.js";import"./box-DN_MpGfH.js";import"./flex-UMDGzfpp.js";import"./text-DiywcYHt.js";import"./index-CiHeIEEJ.js";import"./ReactIconWrapper-BNv3A-CZ.js";import"./icon-BCLxeN9j.js";import"./numericalFormatting-D9y_EFUs.js";import"./stringFormatting-CaWdwkl_.js";import"./index-DOFHLmOa.js";import"./iconBase-mJlYVW7K.js";import"./IconWrapper-ogvfkqDf.js";import"./useColorFormatConverter-D9TXYjrZ.js";import"./index-CxjtPGdk.js";import"./index-Bc_X9DDh.js";import"./link-CnPWx1x4.js";import"./popover-trigger-BiIRdlTw.js";import"./use-popper-B6evZFxL.js";import"./use-event-listener-DnWCA7to.js";import"./use-callback-ref-JjQVJ41k.js";import"./use-safe-layout-effect-JHNcjjnH.js";import"./use-update-effect-CgopIYg4.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DxzE3DBk.js";import"./use-disclosure-cW3bZv_W.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-ClbzZSOv.js";import"./define-styles-k0dS9I3S.js";import"./context-D4Zg-Nqv.js";import"./portal-DBGLmZXk.js";import"./index-C0jbPZq4.js";import"./index-C6J7nYBO.js";import"./selectors-N-NaWvec.js";import"./splitApi-BegKFUci.js";import"./config-q8igxtsj.js";import"./routes-BvOmVBfv.js";import"./apiSlice-CabPlPgt.js";import"./useTranslation-DKEYGbFj.js";import"./context-BywUS6CF.js";import"./image-DV_8mL3F.js";import"./skeleton-circle-Bib5uK7s.js";import"./skeleton-DLHfTNP5.js";import"./emotion-react.browser.esm-C79A5DmY.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-ujtkt-2V.js";import"./use-breakpoint-value-BdWYeNeB.js";import"./responsive-BOJiWpMi.js";import"./env-DIPx5haa.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="d3832b14-a4b1-4f11-b962-05f0f39def6a",e._sentryDebugIdIdentifier="sentry-dbid-d3832b14-a4b1-4f11-b962-05f0f39def6a")}catch{}const Re={component:s},n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
