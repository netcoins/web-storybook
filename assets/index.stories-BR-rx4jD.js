import{j as t}from"./jsx-runtime-BayhlR5u.js";import{C as i}from"./index-NSfhUXYE.js";import"./iframe-D8eVk18B.js";import{T as d}from"./tr-CNrc0K2C.js";import{T as u}from"./tbody-Bf8-jVXw.js";import"./index-CM5y-8oC.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CL0aM1xz.js";import"./index-U5qNwSAr.js";import"./use-style-config-DTt8EHzL.js";import"./factory-DoaYQroT.js";import"./box-AN_nsAfv.js";import"./flex-BWYaSoaa.js";import"./text-oPYWpNZy.js";import"./index-CmQkxxUb.js";import"./ReactIconWrapper-CEgK6a9m.js";import"./icon-ne3uD5OU.js";import"./numericalFormatting-DyobLN2J.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-V_8Nl0PS.js";import"./index-C6fD7d8H.js";import"./iconBase-CluYtB1G.js";import"./IconWrapper-BQzA96FB.js";import"./useColorFormatConverter-WmrgimdC.js";import"./index-CzmVcKKZ.js";import"./index-Bj3WUAXa.js";import"./link-B2xULh8X.js";import"./popover-trigger--zdHyK16.js";import"./use-popper-BLWtAS5L.js";import"./use-event-listener-BFsTspyO.js";import"./use-callback-ref-CR2Dkp2W.js";import"./use-safe-layout-effect-DQt2CShZ.js";import"./use-update-effect-BoDsm23X.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-Bf7ykLIP.js";import"./use-disclosure-CJQINGRz.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CPmdExVS.js";import"./define-styles-k0dS9I3S.js";import"./context-C0WqI40H.js";import"./portal-2PWVAZ0-.js";import"./index-deVF8YgX.js";import"./index-DMBhrFcc.js";import"./selectors-KQSrWDTK.js";import"./splitApi-BP1rQLO7.js";import"./config-D5w4hRVC.js";import"./routes-BPO0bAnp.js";import"./apiSlice-D-EDGH-l.js";import"./useTranslation-3iNb444D.js";import"./context-Bsmamnza.js";import"./image-BnfS0qNB.js";import"./skeleton-circle-YpKb4VyQ.js";import"./skeleton-BuIRbw3s.js";import"./emotion-react.browser.esm-l5pItYTF.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-DgdH8U1K.js";import"./use-breakpoint-value-Bnls0Zwy.js";import"./responsive-BnQX-o00.js";import"./env-Bf-Fe5lT.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
