import{j as t}from"./jsx-runtime-DYS3PmO5.js";import{C as i}from"./index-BYpkNpim.js";import"./iframe-CHXOveE0.js";import{T as d}from"./tr-C7XcYJYJ.js";import{T as u}from"./tbody-D_b0VQME.js";import"./index-BsQa-mzF.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-17wQGAtd.js";import"./index-G1StbVMZ.js";import"./use-style-config-CHATY7L4.js";import"./factory-DT96eYgU.js";import"./box-Bvz5ZBjj.js";import"./flex-l2Oq0ReB.js";import"./text-BVzRHyYg.js";import"./index-D2c6e517.js";import"./ReactIconWrapper-YyLHzb7E.js";import"./icon-Nyb6EwFN.js";import"./numericalFormatting-ZshUm8wb.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-1JxzkN4Z.js";import"./index-dBd6rems.js";import"./iconBase-BRhaRC0N.js";import"./IconWrapper-B8ecv7rq.js";import"./useColorFormatConverter-CxjK3LrN.js";import"./index-CZ9AlN5h.js";import"./index-CYesL8K4.js";import"./link-DIY0rgM2.js";import"./popover-trigger-VSJ83XH0.js";import"./use-popper-DA59VA_L.js";import"./use-event-listener-C4WZ2tWD.js";import"./use-callback-ref-CI_DSrbi.js";import"./use-safe-layout-effect-D61lC8va.js";import"./use-update-effect-hVpzPVe_.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-xeHasOaO.js";import"./use-disclosure-BgzpdDmm.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-VMgT8B_6.js";import"./define-styles-k0dS9I3S.js";import"./context-CX54VVWl.js";import"./portal-B2xJEUNb.js";import"./index-BQqC7y0J.js";import"./index-VaYk-Ab3.js";import"./selectors-7TP5dEPC.js";import"./splitApi-liRKGNHn.js";import"./config-qtySQYwc.js";import"./routes-B6jFGqxD.js";import"./apiSlice-QbGvrjEO.js";import"./useTranslation-DczCcn_F.js";import"./context-CkpjnJoC.js";import"./image-BgAzAgRg.js";import"./skeleton-circle-BgNSD8n2.js";import"./skeleton-1fjHVm7r.js";import"./emotion-react.browser.esm-D9lvTt6f.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-CrmsZXoo.js";import"./use-breakpoint-value-BofPROrp.js";import"./responsive-CcrVZyIX.js";import"./env-DLclRt-r.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
