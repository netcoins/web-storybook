import{j as t}from"./jsx-runtime-C2GWZ_W3.js";import{C as i}from"./index-C1medgJS.js";import"./iframe-BhoQJi6U.js";import{T as d}from"./tr-CqsP-w7I.js";import{T as u}from"./tbody-fXtae0Ix.js";import"./index-CSazvqdk.js";import"./ada-DdEaAUc1.js";import"./btc-D7SNUmvZ.js";import"./eth-Rbed9pP_.js";import"./sol-DhXqqGh8.js";import"./index-ECPpYc4s.js";import"./index-ELNt7lwK.js";import"./use-style-config-Cf47N2Lw.js";import"./factory-ByB9Vezk.js";import"./box-DTedscfu.js";import"./flex-CzMWTp_E.js";import"./text-B7yE0Q6c.js";import"./index-CdP7zevh.js";import"./ReactIconWrapper-DZk0kYqD.js";import"./icon-Ch91KDQR.js";import"./numericalFormatting-Dpoio3kf.js";import"./decimal-C6g1TQWS.js";import"./stringFormatting-G-v8441W.js";import"./index-CWXQ1UYx.js";import"./iconBase-DPcfMA0j.js";import"./IconWrapper-v7oo7eus.js";import"./useColorFormatConverter-BIkeUeBn.js";import"./index-COpufmOy.js";import"./index-DXs2Jyer.js";import"./link-0xUu2Gb_.js";import"./popover-trigger-CRahT1hL.js";import"./use-popper-C5aH09Ua.js";import"./use-event-listener-Bv4rFJ8W.js";import"./use-callback-ref-z_gf96Ga.js";import"./use-safe-layout-effect-CJT_4pGR.js";import"./use-update-effect-CMEQEZjR.js";import"./focusable-CtBmCjwl.js";import"./is-element-O0rWTUfl.js";import"./use-merge-refs-DiUX7u9z.js";import"./use-disclosure-BhYVcYwS.js";import"./lazy-oo6M69xf.js";import"./call-all--NRVVPhS.js";import"./motion-W1DD8qk0.js";import"./define-styles-k0dS9I3S.js";import"./context-DEaw93aE.js";import"./portal-BdsQ-yDN.js";import"./index-7q34W03X.js";import"./index-CvgrbISo.js";import"./selectors-BNosVq06.js";import"./splitApi-CHPi444I.js";import"./config-C1KqFAEX.js";import"./routes-Buj1mbfh.js";import"./apiSlice-Bdt0iFS7.js";import"./useTranslation-ByBukGxF.js";import"./context-Bmqf5lZO.js";import"./image-D0gsOemW.js";import"./skeleton-circle-yi3BSM6k.js";import"./skeleton-Cj1101uy.js";import"./emotion-react.browser.esm-ql283oEk.js";import"./css-var-BrkJIZpq.js";import"./skeleton-text-C8p_2xtb.js";import"./use-breakpoint-value-DoHt-brl.js";import"./responsive-B86ljmhN.js";import"./env-p-uY5riG.js";try{let e=typeof window<"u"?window:typeof global<"u"?global:typeof globalThis<"u"?globalThis:typeof self<"u"?self:{},s=new e.Error().stack;s&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[s]="a7599512-73ac-41a1-b5c1-982adf15f153",e._sentryDebugIdIdentifier="sentry-dbid-a7599512-73ac-41a1-b5c1-982adf15f153")}catch{}const ge={component:i},r=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"Default","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"BTC",name:"Bitcoin",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!0,deposit:!0,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})}),n=()=>t.jsx(d,{layout:"fixed",sx:{borderCollapse:"collapse"},w:"100%","data-sentry-element":"Table","data-sentry-component":"TradeOnly","data-sentry-source-file":"index.stories.tsx",children:t.jsx(u,{w:"full","data-sentry-element":"Tbody","data-sentry-source-file":"index.stories.tsx",children:t.jsx(i,{assetDetails:{precision:"8",symbol:"ETH",name:"Ethereum",price:"10000",price_precision:2,"24h_percent":1.23,restrictions:{withdraw:!1,deposit:!1,instant_buy:!1,instant_sell:!1,limit_buy:!1,limit_sell:!1,can_stake:!1}},onRowClick:()=>{},value:1e3,balance:"10",assetInsights:{performance:{totalCost:"1000",simpleReturn:"1000",simpleReturnPercent:"10",unrealizedGL:"1000",unrealizedGLPercent:"10"}},"data-sentry-element":"CoinBalanceTableRow","data-sentry-source-file":"index.stories.tsx"})})});var a,o,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`() => {
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
