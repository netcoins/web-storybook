import{j as t}from"./jsx-runtime-Dl65b5Ft.js";import{C as i}from"./index-DHwfphGD.js";import"./iframe-CspplzkO.js";import{T as d}from"./tr-BH6Z1vd-.js";import{T as u}from"./tbody-DJN-2UdW.js";import"./index-pLZHwtFW.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Bqw-cT70.js";import"./index-Dx8U6HT0.js";import"./use-style-config-Cg25QPWW.js";import"./factory-BVSOBJDN.js";import"./box-xJmNwxIz.js";import"./flex-CCsjEBiM.js";import"./text-C_yf4AbR.js";import"./index-DOtIoX_3.js";import"./ReactIconWrapper-wAn6i36x.js";import"./icon-BQZJQIlv.js";import"./numericalFormatting-CPboTbjJ.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DFbGkZ-V.js";import"./index-BnQR5SKL.js";import"./iconBase-ypD8OVkJ.js";import"./IconWrapper-1rNE6X67.js";import"./useColorFormatConverter-JZ-CgPFw.js";import"./index-dYUZJE8E.js";import"./index-BtqCm264.js";import"./link-CQmm50fV.js";import"./popover-trigger-Bki07KKN.js";import"./use-popper-Qa1Jhdk4.js";import"./use-event-listener-ekDpyWuY.js";import"./use-callback-ref-D7vYO4C0.js";import"./use-safe-layout-effect-B3ZR_d1v.js";import"./use-update-effect-DyVwXlaJ.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-BN62VkOm.js";import"./use-disclosure-Dr6LLOyo.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-DU7btML2.js";import"./define-styles-k0dS9I3S.js";import"./context-CbOneei4.js";import"./portal-DUVchy_D.js";import"./index-KuSDOgPx.js";import"./index-DOr_Mcsf.js";import"./selectors-CYBoCOkb.js";import"./splitApi-D84xbbrJ.js";import"./config-B6fLDFpr.js";import"./routes-DqEZsoLx.js";import"./apiSlice-Cxg5A4WT.js";import"./useTranslation-DSqpKOvX.js";import"./context-lJ3fCJqv.js";import"./image-DQ9KT_4O.js";import"./skeleton-circle-ZFq4YDhO.js";import"./skeleton-ChpIrRXf.js";import"./emotion-react.browser.esm-DHDzoTUT.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DG7htWRb.js";import"./use-breakpoint-value-BMM0PYeh.js";import"./responsive-J4AcTwud.js";import"./env-Bi4nnKYo.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
