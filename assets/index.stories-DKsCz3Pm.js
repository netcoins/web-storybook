import{j as t}from"./jsx-runtime-DBvW3J4P.js";import{C as i}from"./index-Cl4U9fYX.js";import"./iframe-CbEszLwV.js";import{T as c}from"./tr-DowHaKSe.js";import{T as u}from"./tbody-DeKf7fcb.js";import"./index-861ck25a.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-CJCM0Snl.js";import"./index-eiqMTM-Z.js";import"./use-style-config-CRvEJw1Z.js";import"./factory-CH5OTrax.js";import"./box-CilrpWKY.js";import"./flex-CVx7E2fo.js";import"./text-drvfSy8p.js";import"./index-9C0acIh3.js";import"./ReactIconWrapper-CV1lDTw4.js";import"./icon-BTh9G9d4.js";import"./numericalFormatting-B4ZqToxX.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-DfKtWWHL.js";import"./index-DwpOUU05.js";import"./iconBase-yBK0uS8I.js";import"./IconWrapper-CsQlqFhO.js";import"./useColorFormatConverter-C1qBgSed.js";import"./index-Dr62S7dX.js";import"./index-GrU6Q1vo.js";import"./link-BTBl-JBM.js";import"./popover-trigger-DK91z1zV.js";import"./use-popper-ZUmmMNcH.js";import"./use-event-listener-XmnQ9wge.js";import"./use-callback-ref-BNql-QHX.js";import"./use-safe-layout-effect-CnY6VFQP.js";import"./use-update-effect-BszR8JYu.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./popper-Bh0pZfd_.js";import"./use-merge-refs-DcwZN5rK.js";import"./use-disclosure-GL4uI0Au.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-F5JqsM7K.js";import"./define-styles-k0dS9I3S.js";import"./context-oDCZUX6j.js";import"./portal-NOwwQ-8M.js";import"./index-LobmqJ3O.js";import"./index-DMuMEP82.js";import"./selectors-BKdckG3u.js";import"./splitApi-lEwDftEO.js";import"./config-CYru4F26.js";import"./routes-aWYugHQk.js";import"./apiSlice-k873W_4D.js";import"./useTranslation-BFxd_HHW.js";import"./context-BeIFq7kq.js";import"./image-BIok4FKt.js";import"./skeleton-circle-DYHKSdL1.js";import"./skeleton-dbyXp8Y3.js";import"./emotion-react.browser.esm-C0TXlc-y.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-CZOhWntm.js";import"./use-breakpoint-value-DPNBFhE8.js";import"./responsive-BsmUsxkC.js";import"./env-Bi_OJ7LG.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="d32cf991-ddaf-452d-9344-ee32d057a988",e._sentryDebugIdIdentifier="sentry-dbid-d32cf991-ddaf-452d-9344-ee32d057a988")}catch{}const De={component:i},r=()=>t.jsx(c,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(c,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var o,a,l;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
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
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};var p,m,d;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
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
}`,...(d=(m=n.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const ke=["Default","TradeOnly"];export{r as Default,n as TradeOnly,ke as __namedExportsOrder,De as default};
