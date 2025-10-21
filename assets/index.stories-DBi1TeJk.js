import{j as t}from"./jsx-runtime-DjPZmkbi.js";import{C as i}from"./index-DneLjrug.js";import"./iframe-BLZSnykw.js";import{T as d}from"./tr-B0PozHrj.js";import{T as u}from"./tbody-B6704X2p.js";import"./index-4SYUKzUb.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-DL3xHmX_.js";import"./index-DTXxPIFw.js";import"./use-style-config-Bj4N7Blw.js";import"./factory-q5wLhK22.js";import"./box-BXTCu-RW.js";import"./flex-DwAoxwu-.js";import"./text-yjNePx3r.js";import"./index-yqQY4EcC.js";import"./ReactIconWrapper-D8Woi65C.js";import"./icon-CyBHApQ9.js";import"./numericalFormatting-BJ3Qq1ip.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DCWJOPQm.js";import"./index-B7mBvpYP.js";import"./iconBase-b8Y9VbFy.js";import"./IconWrapper-B-NuI6_K.js";import"./useColorFormatConverter-B1c4Zw5s.js";import"./index-CCJselGE.js";import"./index-8c6UpNs9.js";import"./link-5NSGpdGw.js";import"./popover-trigger-xc-VAknc.js";import"./use-popper-DMR7w2dU.js";import"./use-event-listener-CjVtIcE1.js";import"./use-callback-ref-D2KL2uja.js";import"./use-safe-layout-effect-CyiLue8j.js";import"./use-update-effect-Y9_yQDSV.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DSzVtLhp.js";import"./use-disclosure-BAQxI5VD.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-B9keJsQg.js";import"./define-styles-k0dS9I3S.js";import"./context-DCjw7QTu.js";import"./portal-qa8nO1cK.js";import"./index-D7svGwnr.js";import"./index-CuHDGiuD.js";import"./selectors-BWi0xHBI.js";import"./splitApi-2T79V_eM.js";import"./config-BpCfqdzz.js";import"./routes-B54B8SR2.js";import"./apiSlice-Dp1ycPHI.js";import"./useTranslation-BZxYWo4e.js";import"./context-BKWgSycx.js";import"./image-DVxTAju0.js";import"./skeleton-circle-RjbLxUYA.js";import"./skeleton-AHM-napM.js";import"./emotion-react.browser.esm-DXBpfigO.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-IsqIGKfG.js";import"./use-breakpoint-value-D7fhMW86.js";import"./responsive-CvmNCj5m.js";import"./env-VYQ8pWCA.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
