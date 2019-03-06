(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"./docs/footer.mdx":function(e,t,o){"use strict";o.r(t);var n,r=o("./node_modules/react/index.js"),a=o.n(r),i=o("./node_modules/@mdx-js/tag/dist/index.js"),l=o("./node_modules/docz/dist/index.m.js"),s=o("./lib/grid.js");try{n=o("./node_modules/react-router-dom/es/index.js")}catch(h){}function c(e){return a.a.createElement("footer",{className:"alegrify-footer"},a.a.createElement("div",{className:"alegrify-footer__content"},a.a.createElement(s.a,{all:!0,outline:!0,middle:!0},a.a.createElement("nav",{className:"alegrify-footer__nav alegrify-grid__cell--4"},a.a.createElement("ul",{className:"alegrify-footer__nav-list"},e.links.map(function(e,t){return a.a.createElement("li",{key:t,className:"alegrify-footer__nav-list-item"},a.a.createElement(A,{href:e.href,title:e.title},e.label))}))),a.a.createElement("div",{className:"alegrify-grid__cell--4 alegrify-footer__logo"},e.logo),a.a.createElement("div",{className:"alegrify-grid__cell--4 alegrify-footer__trademark"},e.children))))}function A(e){var t=n.Link;return"string"===typeof e.href&&["http://","https://","//"].some(function(t){return 0===e.href.indexOf(t)})||!n?a.a.createElement("a",{href:e.href,title:e.title,className:"alegrify-footer__link"},e.children):a.a.createElement(t,{to:e.href,title:e.title,className:"alegrify-footer__link"},e.children)}var g=c;function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}function m(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}c.__docgenInfo={description:"```jsx\n <Footer\n     links={[\n         { href: '/', title: 'Home', label: 'Home' },\n         { href: '/info', title: 'Info', label: 'Info' },\n     ]}\n >\n     <Logo />\n </Footer>\n```",methods:[],displayName:"Footer",props:{children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:"Children to add on the end of the footer"},className:{type:{name:"string"},required:!1,description:"Additional classnames"},links:{type:{name:"arrayOf",value:{name:"shape",value:{title:{name:"string",required:!1},href:{name:"string",required:!0},label:{name:"string",required:!0}}}},required:!1,description:"List of links to show in the footer"},logo:{type:{name:"node"},required:!1,description:"Logo component"}}},o.d(t,"default",function(){return E});var E=function(e){function t(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),(o=p(this,u(t).call(this,e))).layout=null,o}var o,n,r;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,a.a.Component),o=t,(n=[{key:"render",value:function(){var e=this.props,t=e.components,o=f(e,["components"]);return a.a.createElement(i.MDXTag,{name:"wrapper",components:t},a.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"footer"}},"Footer"),a.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"example"}},"Example"),a.a.createElement(l.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYADEXwyN0TXaT0oAgDxJDAWCBH9AV7U1c14LlBVzXaO0NXYYB2E0Hx5Hw-UAAEYCIEQBlQQFhRgYiA1QXRUWOU4AC9nAIRJsXYbgyPWKIBGeVArnaAAGdhkxmLB2n3GsZk7FhZ1kgAWZT2AANmU1T1nQmgoJ9aBElk_hnEORFHUwdgAAUhH4JZGJ-OANMREyazMghnAgPjLnYABGHS1PkcEuOoHiAEE5lE9hI3I8gbCgdBw3YeROVEsQUpjGR2FRYSYG4YBDwEoTsXkbda2AdLoCy4IADJWvGRJ5koZomsy7LuEG-UwFCLie1Qdp2AAfg2Zrw0jPKrj6lrUGimspBkat3zMWFSMwMAwigKYFvywr1sSlca0TIMpRwKDMhSa8CHq2s6xgkQwSu172GQ1BtjgCqAG1V2-8SvtBiw8C6MBZMIW57keeIYBSfowESD5Ij8iHvpiAhYFk-LYBRiA0ax7HaygVxAigAmidRxIyexpQQe-8ioZgGH5Thu4HieYQsX_T5VPGF58flABxfm_SWSnqdkyXKAFybmfB2sAF01uxqBFcoCrGG89wxEAXg3AFg9qQDdQMRNe-l7vrs492EYroiz0GgWakd7aAEW2pBugg7oep76qkC6trMb8QGQ1D0I-gQAK0CgQP0BhsNIv2aMIpVVVQVOHXF_ocmNAjPWJ9AsMglzB0sLr4AzgdKBmC0hPmOB_TMWApjNKVRX2DJtUibOzDRZJgFXLuCB78I-5NMSugAR1CCAuifceLSEKeBCtTHPzMNa4gIdKUuwPLgDWsxjFMcwjHYYpb8oopr7ejCH9B37_qBl_ybZ6HZMkYXcbFu0AAEpEdiMsqYLlkiA48ys1LsEftjb-HNf5oHQv_UWoV2gNFQGg8Bct5TYLQTlOBCD1aa0ftuUhiYAAyOt2Bbk_h7DClCb63wfnyHBo0pTMXYJ7KM9c7gnzHmOPo5hoyq0TDHL2LNQbkEpnAOAAA5H05V-BI2JmjC0UiwQgBkewW22NYysD0djOR_glEqL4CAdR9MtEYQAPr2N0KBUQuiJE2xMRDRg-cuCePJiEBIfjyb7F-kydx_iLBEC4OgWAQTXoGIia9RgqBXDGPCYk2sZiFHKOPFYmxJNEh2Njo4lJHB8maNLo4xECQLQWh0vwOJEMEkZO-owUIUBGktKyRY3Jai6YFKKV7EpqSLTIVRA09JLTmktIhsAARcAcBvwWVEGYkZIxvyWKoY-p1xEzL2XWZCnT9mvW2DARIFUtlYGtscvZ3ScmqOsf0zR2iBDDNYKM2wloXgMQmTcjJ0y_mGL4QIahaBthHMBbWdmYAKpv3wNDa5kKZkAPKsAOFKLEVIvJgCrFsy4WywXJi3FoMmGx1BX9HFkKpDIUpfszknIiXHKkO02lhjvipNZV4mQEKIZ3MsX05GtjKlOIXFAWpOkAmCoGS8xx2sUiUF-Tczl_i5mDgWXKygjKMkbTjDyxM3LJkZL5b0x5UqKkFyqaK8VkqNGFJlfYtEnYGKuAEOCtxfzlVf3mR8DKK0tWJJ1bII5UgfHoFpYG6ZUgXm2x3qtGKI0xo8OBeS7YkZ5lCK-txKY54AAalhzyikUfFah9jqENEUQAaXsc4Sw8VRSWGSsDdx7Rua80Zt9FtNweaPHba9doPbVxq0HpmuKUxyIppyslcek8vb9yINnV6WbOBwHPFgL2KSoATrEs3GAPV-xqvhRzUSQ12iohnCkSa7U9G5vzYW4tpby1VprXWywOA4CgPWWCwSLqpjcFpd66FOBLm6jAJ-v636RR5UGmJOSejY2rhJilWwq713xAnQAH3Q-wAAhNO3uAg50Zuxl0AgoizoBtcEc6FFUAMIqOSimjB6MVHONQ88pdqHH2Lfoq_xnrVUNwWctcM_raxSFcNM2Nr0z5fRI2R3ZXiU1BIiIxgTh6wAiYsAx_jdwcDMcNaxvJTyOPFK42CnjHjDXacE764TeipAppjdnaTwKcACOri3ZKo8voXxBtfewNnggRBCF2PY5gJjdDoDkPd4WjTP3BryVcQm6BXFcg3dz8AcDUBgCB9LkYm3Y1SzMdLCyXWZESCByMhXis4B-JgTkcCIZVZrgs2rYTXpq05EBuA4oF5L2yGpVcPn4vsHil2F4zE-zdJSceOAvmOGLvkT00KTWW5vrRAUAb3mTC-fYKCnie6lnDhKsMMYaACTdBeXN1cSyUtV2azgUrrhyugb0StjLcA_DzFSkpjBt20v3bPQULrQZF5dEWEE6Ff2isA_W7OYHMBetg4a_4glNNK7_dW4DuHtgeug-yHo3Kq56sxVekN7619aHyqLBmfQV2voaqh9V1ru9h27QdPtQ60EMLZwjlHJ4Bd45AWccncCudcJSgzuPcuOF0fQ480XeUAim7NbbrFVAPEABqdaGjxUUZYZwjbVztFgGAV8yP5SIj0Jhc3nQIApEIH5I3EQZjtvaFErs0sjdeBuJjG3IS0BgKNzAVgdBXddBDwIOAgfOJ9viFADiQ6Ypk-vt4gu9CWEv1vsUe-V86yhs_pOYPGQo_oBfiwxM8URSxFibn76BmBW2otMK6pUAbVCotSKmpFoAAcvyEEMNr3WeK-RMAF8yYt-5hmzWFOb6KtvAzZ9d_qe6_vLCQ0FxYVn9hZgE3cJZKGtNaqiOZNHT0CfKi7BiUBu0djTeC7tETzH2siHD-qdY8f2R5-ZuubyHgV_On38F1axpNXotdRQdc9dnAcB0IBBzxJQ_9WAXUIB3Bf0CovNsYX95lAZED-gUCOswZElWMFkZhf9Ixihb9S5akAASYAHA5AmgeQYoSTCGRFXKYdV6WTAQMROzA1Qgr_VFIggCSgNAJ8eUBlPRWlKzH1OaOgLVCNInJzGKUNVzO7DzMSLzQbbbYbRwV2UQeLebTJALGSWXarLLHLGuPLV7VQjLR7Z7SrawlrYsYndxN7Rw0fL6DreHRHfrEnWsMnV6a-UbbsCbVvKbC_OnBbcxe5RnGHc9KKbOZQjndpAgQrS_MieQBIgXARVdH0ckWudQjImKMAiA_XaA4UOA9KSMOglA06dA2sZQtzZrbApAvA5KVwnALwSgDpVaeDF0LAGXJIo6dgUNHnJQEAHybYVwNIeOagIXJOMCEAOo_gabJkJAdgfgIEYkKobwDIC0X8PI9ydYfgCPfIagfgK4fgOSHAK42DEABrfgcocgfoGYcac49YkAeKEqbCWAGELAXIn4zAckSgRIPMPIAoQvc0C0TYkEHYgQQ4msfgKINAN4_gS5eOeEiwB4mAeYCMLiCAeAN4uozEwQLUFEkAAAPTCgMhwB0hwAACYMTax-Alcd1Zs1j-BKSABWHAakhku41cfgVea0Mkyk6k2kvk9YNaeQCOLY6oDGHBO3GY1AOY3QhgUeEAWgX0LIc4jYs0WgNeLUC0WYGYfgaU-Qc0oAA",__position:0,__code:"<Footer\n  links={[\n    { href: 'https://alegrify.com', title: 'Alegrify', label: 'Alegrify' },\n    { href: 'https://google.com', title: 'Google', label: 'Google' },\n  ]}\n  logo={<span>\ud83d\ude0d</span>}\n>\n  Some more content\n</Footer>",__scope:{props:this?this.props:o,Footer:g}},a.a.createElement(g,{links:[{href:"https://alegrify.com",title:"Alegrify",label:"Alegrify"},{href:"https://google.com",title:"Google",label:"Google"}],logo:a.a.createElement("span",null,"\ud83d\ude0d")},"Some more content")),a.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"properties"}},"Properties"),a.a.createElement(l.f,{of:g}))}}])&&m(o.prototype,n),r&&m(o,r),t}();E.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./lib/grid.js":function(e,t,o){"use strict";var n=o("./node_modules/react/index.js"),r=o.n(n),a=o("./node_modules/prop-types/index.js"),i=o.n(a),l=["left","center","right","top","middle","bottom","outline","even","reverse","all"];function s(e){var t=["alegrify-grid"];return e.className&&t.push(e.className),l.forEach(function(o){e[o]&&t.push("alegrify-grid--".concat(o))}),r.a.createElement("div",{className:t.join(" ")},e.children)}s.defaultProps={},s.propExamples={},l.forEach(function(e){s.propTypes[e]=i.a.bool}),t.a=s,s.__docgenInfo={description:'<Grid />\n\n```jsx\n<Grid\n  reversed\n>\n  <Article\n     className="alegrify-grid__cell alegrify-grid__cell--8"\n  />\n  <Aside\n     className="alegrify-grid__cell alegrify-grid__cell--4"\n  />\n</Grid>\n```',methods:[],displayName:"Grid",props:{children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:"Content"},className:{type:{name:"string"},required:!1,description:"Additional classnames"}}}}}]);
//# sourceMappingURL=docs-footer.1a88b183635ed37cb6c9.js.map