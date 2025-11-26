import{j as t}from"./jsx-runtime-CZkq8z0z.js";import{C as i}from"./index-CdRFQX7Q.js";import"./iframe-BVBjFYr0.js";import{T as d}from"./tr-BNHsWHSM.js";import{T as u}from"./tbody-BfmK50pf.js";import"./index-Dukb-J8t.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-Cn_jbsa4.js";import"./index-CKAFE1Br.js";import"./use-style-config-BEiOxPkt.js";import"./factory-C_DTyCp0.js";import"./box-Bw_hwRh1.js";import"./flex-D4D6Hnue.js";import"./text-xcBgO68X.js";import"./index-DVESwsqy.js";import"./ReactIconWrapper-Bk_7npXj.js";import"./icon-DGC3k6da.js";import"./numericalFormatting-B8ovaBS-.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-BvxZErlq.js";import"./index-C8Di1zHG.js";import"./iconBase-DSyHl9us.js";import"./IconWrapper-9E3hAHq3.js";import"./useColorFormatConverter-yKd7wXaj.js";import"./index-tXEY-mQF.js";import"./index-C3pkaq0q.js";import"./link-G5Sl_9AJ.js";import"./popover-trigger-BsWrGJ8N.js";import"./use-popper-Swn97_28.js";import"./use-event-listener-CagsjyVX.js";import"./use-callback-ref-xEm3rI_V.js";import"./use-safe-layout-effect-Dzqzh0uU.js";import"./use-update-effect-Be51hUgx.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-D9BTl6tE.js";import"./use-disclosure-CVliogna.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-CMMjmirs.js";import"./define-styles-k0dS9I3S.js";import"./context-lTEyNo82.js";import"./portal-BnBqFJXA.js";import"./index-DUH0WTKR.js";import"./index-C7bi28-m.js";import"./selectors-C3iJe8CL.js";import"./splitApi-DFPuJOCy.js";import"./config-C7OVAi9I.js";import"./routes-Tk7r10QW.js";import"./apiSlice-BNq8BQVv.js";import"./useTranslation-OnBfe1IZ.js";import"./context-FORaNgra.js";import"./image-FlpM5iVu.js";import"./skeleton-circle-Vj487WNm.js";import"./skeleton-BkSics1r.js";import"./emotion-react.browser.esm-CTpMU2m2.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-CIasqKwL.js";import"./use-breakpoint-value-syNUyoOR.js";import"./responsive-QVGRQ4yV.js";import"./env-q3w2wyLH.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
