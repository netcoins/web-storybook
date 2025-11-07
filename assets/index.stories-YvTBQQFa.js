import{j as t}from"./jsx-runtime-Dv2agtU7.js";import{C as i}from"./index-DPll0BEF.js";import"./iframe-dJqc1-Qj.js";import{T as d}from"./tr-Bjme3IJj.js";import{T as u}from"./tbody-DkWH7HHP.js";import"./index-JHYhm-6V.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-C4SakD54.js";import"./index-BsoArW0f.js";import"./use-style-config-DimwGAZE.js";import"./factory-DItE7Zbf.js";import"./box-Wj3TPIrS.js";import"./flex-C_oEG4_I.js";import"./text-fxYgO8kb.js";import"./index-BT3n16GR.js";import"./ReactIconWrapper-CYSPo76-.js";import"./icon-CFMzBpLt.js";import"./numericalFormatting-DzkoKxc-.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BQAP48Kz.js";import"./index-CXBWWOW0.js";import"./iconBase-QXUzZFCY.js";import"./IconWrapper-Bg16KNiG.js";import"./useColorFormatConverter-DkfLfv3G.js";import"./index-Rxd1T06p.js";import"./index-8B09ueSL.js";import"./link-2Dsxse-z.js";import"./popover-trigger-BEvwmr9v.js";import"./use-popper-BCJUTfdr.js";import"./use-event-listener-BglMcFjq.js";import"./use-callback-ref-2eF-msno.js";import"./use-safe-layout-effect-CpCXk6om.js";import"./use-update-effect-BC_MjMJw.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-zIXrsNDy.js";import"./use-disclosure-0AdMV-E2.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CjxihoIy.js";import"./define-styles-k0dS9I3S.js";import"./context-DCB91Iml.js";import"./portal-Va7SUqSi.js";import"./index-COtoswNF.js";import"./index-DrevQEGZ.js";import"./selectors-BNukrynV.js";import"./splitApi-Dk8MBXT9.js";import"./config-Dw5Yc4UT.js";import"./routes-nW_Qz6GA.js";import"./apiSlice-64Bh7vDU.js";import"./useTranslation-BJC4aqrR.js";import"./context-CJyOgCrg.js";import"./image-waS5i_nE.js";import"./skeleton-circle-B040qNZk.js";import"./skeleton-DdX7CWoA.js";import"./emotion-react.browser.esm-CoTtarx2.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-ftogP6aX.js";import"./use-breakpoint-value-BLIDpakf.js";import"./responsive-5_ItuWFE.js";import"./env-DqtOCitX.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
