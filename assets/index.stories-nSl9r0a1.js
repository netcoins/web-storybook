import{j as t}from"./jsx-runtime-f-LqmLrp.js";import{C as i}from"./index-8CdPfmLz.js";import"./iframe-C8iPQQbg.js";import{T as d}from"./tr-wkWqNZJH.js";import{T as u}from"./tbody-BKITVQjH.js";import"./index-MGu8-aZ-.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Byprqnsm.js";import"./index-DdGWbiM8.js";import"./use-style-config-CSQQc7ef.js";import"./factory-Cn76LgBF.js";import"./box-CM5x4BGX.js";import"./flex-D3orRMxn.js";import"./text-DqP0TTVC.js";import"./index-BD3-J3VJ.js";import"./ReactIconWrapper-DIAC3zi-.js";import"./icon-CUWxfBPZ.js";import"./numericalFormatting-Bn8XnUQ-.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-C8hXxqOD.js";import"./index-B9XvT4gi.js";import"./iconBase-D_l9Hyr6.js";import"./IconWrapper-DNo_-gDp.js";import"./useColorFormatConverter-BSymcS_t.js";import"./index-B4zVUTcy.js";import"./index-BHc-sFDu.js";import"./link-uja77377.js";import"./popover-trigger-QajOpGpN.js";import"./use-popper-GAemyZPj.js";import"./use-event-listener-BN4pGAgl.js";import"./use-callback-ref-B1jvunlg.js";import"./use-safe-layout-effect-DkEPWJAu.js";import"./use-update-effect-Crxbl6TK.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-B8PxTFZn.js";import"./use-disclosure-CDfd52lv.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-Cx9rCsFt.js";import"./define-styles-k0dS9I3S.js";import"./context-DGdO9Tsj.js";import"./portal-BThM4vAn.js";import"./index-DzBzEDqR.js";import"./index-D2fP4T6q.js";import"./selectors-a97ev-1d.js";import"./splitApi-nkrJIvUX.js";import"./config-EwwoSmD4.js";import"./routes-D8qjcAXB.js";import"./apiSlice-CwKnbpAU.js";import"./useTranslation-COhdlQwc.js";import"./context-Def0sVG3.js";import"./image-Cd0V1jcU.js";import"./skeleton-circle-zabbPI_0.js";import"./skeleton-CoZuimGs.js";import"./emotion-react.browser.esm-DFQh7K33.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-VsqeiOOg.js";import"./use-breakpoint-value-BbcCnSMB.js";import"./responsive-BcHDOAn0.js";import"./env-DzI7wM0O.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
