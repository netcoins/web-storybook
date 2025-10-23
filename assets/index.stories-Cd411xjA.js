import{j as t}from"./jsx-runtime-DtacxP_4.js";import{C as s}from"./index-C-_iIlSb.js";import"./iframe-CkPY_Ypo.js";import{T as d}from"./tr-DRtzqf4H.js";import{T as u}from"./tbody-DeraGSWQ.js";import"./index-Iu218KQj.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Dk3LlvGr.js";import"./index-DHs_mBbP.js";import"./use-style-config-DU0N-5r8.js";import"./factory-BSZ2LSit.js";import"./box-cqxK0scF.js";import"./flex-D8UJ-dAy.js";import"./text-f8pfWaXy.js";import"./index-DwsUQQds.js";import"./ReactIconWrapper-CtcI2lQg.js";import"./icon-DCg-fDMN.js";import"./numericalFormatting-CCUsu81F.js";import"./stringFormatting-Bs5nCwpA.js";import"./index-DUbLpLX5.js";import"./iconBase-CgTwkM-e.js";import"./IconWrapper-Bsz0deDn.js";import"./useColorFormatConverter-ClaBWUD0.js";import"./index-B4BZkK6O.js";import"./index-_mYXgZP3.js";import"./link-Db9aOXP5.js";import"./popover-trigger-9FK0PbUZ.js";import"./use-popper-DobN8miS.js";import"./use-event-listener-Bllo18Fx.js";import"./use-callback-ref-BYXMBTH6.js";import"./use-safe-layout-effect-BQyxOZ8O.js";import"./use-update-effect-BJrD3U-Y.js";import"./focusable-A0SfKoM-.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-D4qh9Xfz.js";import"./use-disclosure-DajkOMfY.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-Bl_T4ZxL.js";import"./define-styles-k0dS9I3S.js";import"./context-BdSOZ7Q5.js";import"./portal-C50T6fFJ.js";import"./index-BkzFVZbI.js";import"./index-Qe50-JNk.js";import"./selectors-CBTCU-WF.js";import"./splitApi-C55sPelN.js";import"./config-DPFwEp3h.js";import"./routes-Diaz_hB6.js";import"./apiSlice-Mv4FLndx.js";import"./useTranslation-BnAMZxQ6.js";import"./context-BByTchsv.js";import"./image-CBCfF9OA.js";import"./skeleton-circle-BmEJ3yw_.js";import"./skeleton-qA1bd7xt.js";import"./emotion-react.browser.esm-BTiaz6S_.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-Bt67Sbm6.js";import"./use-breakpoint-value-CWRD-MpD.js";import"./responsive-CwBsweGM.js";import"./env-CwqdsbK1.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},i=new e.Error().stack;i&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[i]="d3832b14-a4b1-4f11-b962-05f0f39def6a",e._sentryDebugIdIdentifier="sentry-dbid-d3832b14-a4b1-4f11-b962-05f0f39def6a")}catch{}const Re={component:s},n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(s,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
