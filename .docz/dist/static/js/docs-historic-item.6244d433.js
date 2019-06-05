(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"./docs/historic-item.mdx":function(e,o,l){"use strict";l.r(o);var m=l("./node_modules/react/index.js"),n=l.n(m),s=l("./node_modules/@mdx-js/tag/dist/index.js"),t=l("./node_modules/docz/dist/index.m.js"),d=l("./lib/date-indicator.js");function a(e){var o=["alegrify-historic-item"];return"string"===typeof e.className&&""!==e.className.trim()&&o.push(e.className),n.a.createElement("section",{className:o.join(" ")},n.a.createElement(d.a,{className:"alegrify-historic-item__date",date:e.date}),n.a.createElement("div",{className:"alegrify-historic-item__content"},e.children))}a.defaultProps={children:null,date:(new Date).toString(),className:""},a.propExamples=a.defaultProps;var c=a;a.__docgenInfo={description:'```jsx\n<HistoricItem\n  date="2018-10-28T09:00:00"\n>\n    <H2>Something interesting happened</H2>\n    <P>Lorem ipsum...</P>\n</HistoricItem>\n```',methods:[],displayName:"HistoricItem",props:{children:{defaultValue:{value:"null",computed:!1},type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!1,description:"Content for the historic item"},date:{defaultValue:{value:"new Date().toString()",computed:!0},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:"Date to show / When did this occur?"},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Additional classnames"}}};var u=l("./lib/abstract/simple-ui-component.js");function j(e){return Object(u.a)(n.a.createElement("h2",null),"alegrify-h2",e)}function r(e){return Object(u.a)(n.a.createElement("p",null),"alegrify-p",e)}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,o){if(null==e)return{};var l,m,n=function(e,o){if(null==e)return{};var l,m,n={},s=Object.keys(e);for(m=0;m<s.length;m++)l=s[m],o.indexOf(l)>=0||(n[l]=e[l]);return n}(e,o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(m=0;m<s.length;m++)l=s[m],o.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}function p(e,o){for(var l=0;l<o.length;l++){var m=o[l];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(e,m.key,m)}}function A(e,o){return!o||"object"!==i(o)&&"function"!==typeof o?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):o}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,o){return(g=Object.setPrototypeOf||function(e,o){return e.__proto__=o,e})(e,o)}l.d(o,"default",function(){return f});var f=function(e){function o(e){var l;return function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,o),(l=A(this,h(o).call(this,e))).layout=null,l}var l,m,d;return function(e,o){if("function"!==typeof o&&null!==o)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(o&&o.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),o&&g(e,o)}(o,n.a.Component),l=o,(m=[{key:"render",value:function(){var e=this.props,o=e.components,l=_(e,["components"]);return n.a.createElement(s.MDXTag,{name:"wrapper",components:o},n.a.createElement(s.MDXTag,{name:"h1",components:o,props:{id:"historic-item"}},"Historic Item"),n.a.createElement(s.MDXTag,{name:"h2",components:o,props:{id:"example"}},"Example"),n.a.createElement(t.e,{__codesandbox:"N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbBbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkKfj5gs7EYMzEkYaUyiyRdedc6BYMWo8XYMyEd3GlFSMCmL3Y4cw_VQKXzMASnKkDYTdfTztdkmriekccUZhOvSI-hwaQIAFFYMeaAAhRINdCRzrCAjtbmoTnKhTKb2-mA4TQyB0ahaHoRAVBzKYAAlbAifpyGbGA5WNOV2k9KAIA8SRCTg2ILReJD_QFe0pmAdgoIAJiWAAFdh5DdE00MkDCsIIRIhRSTIZjwRIiMg9ggylBjULNJU7Q1dgyM0Hx6JQ-UAAEkJEAZUEBYUYHacFUF0VFjlOAAvZw2OxdhuEk9YogEZ5UCudoAAZ2GTGYsHafcaxmTsWFnWyABZnPYAA2ZzXPWMAQIAMR9aBEls_hnEORFHUwdhqKEfgliIahKDgDzERCmswpoZwIH0y52AARh8tz5C0nSpgAQTmUz2EjMjyBsKB0HDOjOVMsQWpjGR2FRRJYG4YBD0M4z4Hkbda2AdroC64IADIVvGdiYEoZpFs67ruAO-UwFCbSe1Qdp2AAfg2Jbw0jXqrl25bUBqmspBkat3zMWEJMwMAwigKZ7r6ga3salca0TQSCBwcLMhSa8CDm2s6xg1FhViRC5XQLI-BACi7PKgAOC1yrsi0KKJyw7IATkQOy7PpuzxFXFHGEosR4uPCYCk4PQulRXm_DmBYpA51na0YaixAAGXUuUIDuUIiBwVWpGliWxdgjGENoIhkbrSRodh-HEbmqRwc-sxvxAFjsO1-D8L1gCtAoED9AYYiJOh4TTS1PiSJSwdLE2uw5PaAdKBmC02PmOAA4k7UsgaDBYmiYVfaYnHaHw1O4jg_0zGMUxzCMdhigr6SijL9mHcxvXq9rbOYDxgnidJ8nKepumGaZ_hG-3Mu2Y5rmxxsWc-doAWYgn4X5hddAxYoweUbraW5a6BWlZVtXJA10vDbR3DdaQleK-Kau-VQY7TpU8i65PohI0ju5euAVc6p6KB_DgAA5H14DNQANrtHiDATiEAwCJAtDhHWTtCIAF1VQBkhpwZokZY5bWaC_OAHxv5wD_gA0yh12iohnCkC6a1-yDlweQfBhDjw4DRAKYGABCEhb5zKoJRnQn-_9jy4JmHkPAz8aF4L4QAz8q5Xqri6AQPo5hozcMlnALYZ0Jary_hI4841eEEP4fAAClA0BPnlJyV6miLAG0sXWJOtAU4sHzsKDRNitH6IAXjMBECoEwIfvAogAB9AJzd-7KNcccXGwAcE4GbhY8J7AtwuLZjIJJli9EMJbvwLx_QfGwMdgRQJATdCgVECAVJVjymryiWIp64Y4nhPenGFxUhVFShUgbKRL0tJHx1ljHAL8Q5x2au_FBKNi6szLo4PQWYwpHAmN0PJsROAN24byD-HVnpXFSlHQZhjqAwF1GAXZkYgEuO2TMXZuDXACEyIkQ5kZzmXJwD8TAnI3I2MeaHZ5xZVwIM5DgWw4oACOoQIBdEWFpMZJgJnsHql2F4Kk-zpNQAAuAEyr48PoQYrZwcvlkIKG5Vc4zVnsDsd0CIw1hhjEkOwAA6pscwLAcg8zsKcXoAhLrotXM3HFOyvn7MOcc05YSg58rjs85WgQBDvMsZ88V-LZy_P-YCmAIKwXZDMPIZBPT4J9L-gDAg5y7BmRGTwjZ4YrioFCAkGVFgeXsBdGMMl90mGUCMuQ-6tq3EZNsppLpqAdX1yQv0wc54sA-nJIAsygbH4xJgP9a1hqaHIO-lgQO-rE333RrqvWyCbZ21jpQTisweIuyAsUj24EvYOh9uHUSr5kHVqmMVP8ABVCA659k0CWGRFtkb22dszEmsVgDZLuiYq4DwZDzSSHyH-C0oKLSfA3DQQuqloUH3ZuVBJK95IeUyHKYAuoPDqDUfRHB7BL5mBvm0lkUFyqiKjnAN-sixwKPYH22AA6nRdoIJGJM26txLFAbAbx0C8DlVctQp9nSZHrpLuwGulEd2Nz3dcn0klj2nqlOemhl7S5XxvWdciFFH2vy4SjOR77P0wG_RmfQ_68AUR3cB7JkDwMUSgzg2DWliWIdRsmFDB80MHswyes90GhxXuvidW95goLJjI8-ijtYqMCHMDRujK6_1JkE0B-UbHcnJi4zQnjKC-M11ook4T-6MNHvEzhyTdhpNEbvtRJTL7UFqY08RL9Haf1Dv_TMFjBnQM5OgTMEzMHkFwYs3Wc8cprP8ZE3ZrDEmL0udk8RhLHmVMWG8x-3ztH_P0ZoP-pCIWQPgPCxaQiZJTMxd4xu_jjB3XUDnElsuKXD1pccxlgj16st3za7OXLprVNvvU4VttJXtP_rIe1yrhnoELdnFF1-jWUH3pDSO4103-2zd_XK-A2qKI7YuaHZqmnDtDuO3AbVyZzuXKu0VrTR3cVx2QdRJ7l2zLXcHfoO7yCEs_aGX917N3AcfZO2YEbKRQdRv235gHNAgdaR-g6cbFh71esorj5MXrqJeoS16uHmq81KFtphaQWRc6OPTgIMt2gK1gQgoHWt4760JwdJlRGmdef6G51MO7mcX4x1DmuuLjAyUOLTnBIT_HG7nyrpumXecGeNztZE9obcSZkwplTXuRu7LtAsWXTr5cK6ZdviyNX9O4JjY_tQXS6SDF7ZActq0tPVBy-FO0JBkLayQJapg7aTnxHuOPMQsypDmFrfYFQ6JruAFMP6E_Xq7CY-cKx6vZPAj-nCKUxHjJnSUZwZ4c7lskR9BkuagLsr0Tm6dNffIqbSibGMBiMeSpeeW4LSxaioxJiLpvnqa45ulgBR9_rzqLIOBZlRD_eYlx1jLGMBymsEVNje-eLC-xr3OcfdOIEEEzKNA8ChPiewVf4TgAz7JfP4Ui-nz6lf6PypLSPKoBv6vdfX_KmYraKZIgCe7Nx06-4n7BKuCJCX7xI_42J37V40AP4L7RBPjajv5b6Syzpf4_5SBd4wAdKbZmB24QEI57YjJErNYoyTLuw0BcqoL2p3Y4ACpHKbQnJnLQ64JWpEBSpeoozMEKqFCoJ_IApwDAqgrgqEqoJ8Y0GwrwpnRIr0IooCIMGAGR5lSCFx7CGvSkHH5xoJqAxGrDLcpZCWowBOpZAuoRDuoFCeofwD7Hi-qaokHJzq5wTnZhoRomRmR6EM4GEGpGopouhpq_TxoGqkpuH27CgU7KB2yTrTpSizpFYLoQBLoBYniATM50EGBVr8Qc6MRc6Nr8Qi7hxi6YLxzBGfz_YZGo5cEmGoK1J0C8oXbiqsFCqcG7Y4DXK3L3LMEvIwBvKdGtGGIDFKpiESHqoQqNGOGaFcE4BCHk5NYIZlw0ZFilZTATDRD9g_yAIXqVAhA3CSibB2DzLeoGKoa2aHrGwo4ED0QLj4bJZXGSS2Gzj0S96PFdbPH2bYZ3FOafGEZDYsg1EbGRgLhLC971YwZ5ZFioAu6zHu7nFEIB6jJB7oKh7YI1KzHR7yhCHZ4uK96CKF5J6zGl61jl4Tat7mDGx0L7KXhIQMYuLgkuK9Yww_wQApCoCtRKBOY9pIlOH8mGLqDGJckj69TyDvgoxmaprprhGZognabIIY6kSrgKnva7ZLGoA2y5TbCuBpAuzUDlo5EMDjb8AqFMhICXrATlAgjeAZC1bhp_jpTrD8CsAZD5DUD8BXD8B2Q4C-nMwgAyr8DlDkD9AzDqKWn8D1TDRFYwiOmRrHAwDkiUCJB5h5C8z1rpE2mlhgiBkukgBRBoBelWmqDYAuzOk1jBlJl0CYDaQQDwDFk578D1rFn8AAB65UAUOAPkOAFEFZKM_A5RocrZIAHZAArDgF2X2XmagvwDPiOW2WdhREuf2bWM2VqFaJEAuZ2d2b2bAa9PIDbMSFUN4B8NQJAPDpoIadkdMrkSAO_CAHrOSFkF6fwKGRKDnJmbMDMPwIefIP-UAA",__position:0,__code:'<HistoricItem date="2018-10-28T09:00:00">\n  <H2>Something interesting happened</H2>\n  <P>Lorem ipsum...</P>\n</HistoricItem>',__scope:{props:this?this.props:l,HistoricItem:c,H2:j,P:r}},n.a.createElement(c,{date:"2018-10-28T09:00:00"},n.a.createElement(j,null,"Something interesting happened"),n.a.createElement(r,null,"Lorem ipsum..."))),n.a.createElement(s.MDXTag,{name:"h2",components:o,props:{id:"properties"}},"Properties"),n.a.createElement(t.f,{of:c}))}}])&&p(l.prototype,m),d&&p(l,d),o}();f.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}},"./lib/abstract/simple-ui-component.js":function(e,o,l){"use strict";var m=l("./node_modules/react/index.js"),n=l.n(m),s=l("./node_modules/prop-types/index.js"),t=l.n(s);t.a.oneOfType([t.a.arrayOf(t.a.node),t.a.node]).isRequired,t.a.string;function d(e,o,l){var m=[o];return"string"===typeof l.className&&m.push(l.className),n.a.cloneElement(e,Object.assign({},l,{className:m.join(" ")}))}o.a=d,d.__docgenInfo={description:"Simple component that passes props and attaches the className\n@param {React.Component} el \n@param {String} className \n@param {Object} props",methods:[],displayName:"SimpleUiComponent"}},"./lib/date-indicator.js":function(e,o,l){"use strict";var m=l("./node_modules/react/index.js"),n=l.n(m),s=l("./node_modules/moment/moment.js"),t=l.n(s);function d(e){var o=["alegrify-date-indicator"];"string"===typeof e.className&&""!==e.className.trim()&&o.push(e.className);var l=t()(e.date);return n.a.createElement("time",{className:o.join(" "),dateTime:l.format()},n.a.createElement("span",{className:"alegrify-date-indicator__month"},l.format("MMM")),n.a.createElement("span",{className:"alegrify-date-indicator__day"},l.format("D")))}d.defaultProps={date:(new Date).toString(),className:""},d.propExamples=d.defaultProps,o.a=d,d.__docgenInfo={description:"<DateIndicator />\n\n```jsx\n<DateIndicator\n  date={'2018-10-28T00:00:00'}\n/>\n```",methods:[],displayName:"DateIndicator",props:{date:{defaultValue:{value:"new Date().toString()",computed:!0},type:{name:"union",value:[{name:"number"},{name:"string"}]},required:!1,description:"Content"},className:{defaultValue:{value:"''",computed:!1},type:{name:"string"},required:!1,description:"Additional classnames"}}}},"./node_modules/moment/locale sync recursive ^\\.\\/.*$":function(e,o,l){var m={"./af":"./node_modules/moment/locale/af.js","./af.js":"./node_modules/moment/locale/af.js","./ar":"./node_modules/moment/locale/ar.js","./ar-dz":"./node_modules/moment/locale/ar-dz.js","./ar-dz.js":"./node_modules/moment/locale/ar-dz.js","./ar-kw":"./node_modules/moment/locale/ar-kw.js","./ar-kw.js":"./node_modules/moment/locale/ar-kw.js","./ar-ly":"./node_modules/moment/locale/ar-ly.js","./ar-ly.js":"./node_modules/moment/locale/ar-ly.js","./ar-ma":"./node_modules/moment/locale/ar-ma.js","./ar-ma.js":"./node_modules/moment/locale/ar-ma.js","./ar-sa":"./node_modules/moment/locale/ar-sa.js","./ar-sa.js":"./node_modules/moment/locale/ar-sa.js","./ar-tn":"./node_modules/moment/locale/ar-tn.js","./ar-tn.js":"./node_modules/moment/locale/ar-tn.js","./ar.js":"./node_modules/moment/locale/ar.js","./az":"./node_modules/moment/locale/az.js","./az.js":"./node_modules/moment/locale/az.js","./be":"./node_modules/moment/locale/be.js","./be.js":"./node_modules/moment/locale/be.js","./bg":"./node_modules/moment/locale/bg.js","./bg.js":"./node_modules/moment/locale/bg.js","./bm":"./node_modules/moment/locale/bm.js","./bm.js":"./node_modules/moment/locale/bm.js","./bn":"./node_modules/moment/locale/bn.js","./bn.js":"./node_modules/moment/locale/bn.js","./bo":"./node_modules/moment/locale/bo.js","./bo.js":"./node_modules/moment/locale/bo.js","./br":"./node_modules/moment/locale/br.js","./br.js":"./node_modules/moment/locale/br.js","./bs":"./node_modules/moment/locale/bs.js","./bs.js":"./node_modules/moment/locale/bs.js","./ca":"./node_modules/moment/locale/ca.js","./ca.js":"./node_modules/moment/locale/ca.js","./cs":"./node_modules/moment/locale/cs.js","./cs.js":"./node_modules/moment/locale/cs.js","./cv":"./node_modules/moment/locale/cv.js","./cv.js":"./node_modules/moment/locale/cv.js","./cy":"./node_modules/moment/locale/cy.js","./cy.js":"./node_modules/moment/locale/cy.js","./da":"./node_modules/moment/locale/da.js","./da.js":"./node_modules/moment/locale/da.js","./de":"./node_modules/moment/locale/de.js","./de-at":"./node_modules/moment/locale/de-at.js","./de-at.js":"./node_modules/moment/locale/de-at.js","./de-ch":"./node_modules/moment/locale/de-ch.js","./de-ch.js":"./node_modules/moment/locale/de-ch.js","./de.js":"./node_modules/moment/locale/de.js","./dv":"./node_modules/moment/locale/dv.js","./dv.js":"./node_modules/moment/locale/dv.js","./el":"./node_modules/moment/locale/el.js","./el.js":"./node_modules/moment/locale/el.js","./en-SG":"./node_modules/moment/locale/en-SG.js","./en-SG.js":"./node_modules/moment/locale/en-SG.js","./en-au":"./node_modules/moment/locale/en-au.js","./en-au.js":"./node_modules/moment/locale/en-au.js","./en-ca":"./node_modules/moment/locale/en-ca.js","./en-ca.js":"./node_modules/moment/locale/en-ca.js","./en-gb":"./node_modules/moment/locale/en-gb.js","./en-gb.js":"./node_modules/moment/locale/en-gb.js","./en-ie":"./node_modules/moment/locale/en-ie.js","./en-ie.js":"./node_modules/moment/locale/en-ie.js","./en-il":"./node_modules/moment/locale/en-il.js","./en-il.js":"./node_modules/moment/locale/en-il.js","./en-nz":"./node_modules/moment/locale/en-nz.js","./en-nz.js":"./node_modules/moment/locale/en-nz.js","./eo":"./node_modules/moment/locale/eo.js","./eo.js":"./node_modules/moment/locale/eo.js","./es":"./node_modules/moment/locale/es.js","./es-do":"./node_modules/moment/locale/es-do.js","./es-do.js":"./node_modules/moment/locale/es-do.js","./es-us":"./node_modules/moment/locale/es-us.js","./es-us.js":"./node_modules/moment/locale/es-us.js","./es.js":"./node_modules/moment/locale/es.js","./et":"./node_modules/moment/locale/et.js","./et.js":"./node_modules/moment/locale/et.js","./eu":"./node_modules/moment/locale/eu.js","./eu.js":"./node_modules/moment/locale/eu.js","./fa":"./node_modules/moment/locale/fa.js","./fa.js":"./node_modules/moment/locale/fa.js","./fi":"./node_modules/moment/locale/fi.js","./fi.js":"./node_modules/moment/locale/fi.js","./fo":"./node_modules/moment/locale/fo.js","./fo.js":"./node_modules/moment/locale/fo.js","./fr":"./node_modules/moment/locale/fr.js","./fr-ca":"./node_modules/moment/locale/fr-ca.js","./fr-ca.js":"./node_modules/moment/locale/fr-ca.js","./fr-ch":"./node_modules/moment/locale/fr-ch.js","./fr-ch.js":"./node_modules/moment/locale/fr-ch.js","./fr.js":"./node_modules/moment/locale/fr.js","./fy":"./node_modules/moment/locale/fy.js","./fy.js":"./node_modules/moment/locale/fy.js","./ga":"./node_modules/moment/locale/ga.js","./ga.js":"./node_modules/moment/locale/ga.js","./gd":"./node_modules/moment/locale/gd.js","./gd.js":"./node_modules/moment/locale/gd.js","./gl":"./node_modules/moment/locale/gl.js","./gl.js":"./node_modules/moment/locale/gl.js","./gom-latn":"./node_modules/moment/locale/gom-latn.js","./gom-latn.js":"./node_modules/moment/locale/gom-latn.js","./gu":"./node_modules/moment/locale/gu.js","./gu.js":"./node_modules/moment/locale/gu.js","./he":"./node_modules/moment/locale/he.js","./he.js":"./node_modules/moment/locale/he.js","./hi":"./node_modules/moment/locale/hi.js","./hi.js":"./node_modules/moment/locale/hi.js","./hr":"./node_modules/moment/locale/hr.js","./hr.js":"./node_modules/moment/locale/hr.js","./hu":"./node_modules/moment/locale/hu.js","./hu.js":"./node_modules/moment/locale/hu.js","./hy-am":"./node_modules/moment/locale/hy-am.js","./hy-am.js":"./node_modules/moment/locale/hy-am.js","./id":"./node_modules/moment/locale/id.js","./id.js":"./node_modules/moment/locale/id.js","./is":"./node_modules/moment/locale/is.js","./is.js":"./node_modules/moment/locale/is.js","./it":"./node_modules/moment/locale/it.js","./it-ch":"./node_modules/moment/locale/it-ch.js","./it-ch.js":"./node_modules/moment/locale/it-ch.js","./it.js":"./node_modules/moment/locale/it.js","./ja":"./node_modules/moment/locale/ja.js","./ja.js":"./node_modules/moment/locale/ja.js","./jv":"./node_modules/moment/locale/jv.js","./jv.js":"./node_modules/moment/locale/jv.js","./ka":"./node_modules/moment/locale/ka.js","./ka.js":"./node_modules/moment/locale/ka.js","./kk":"./node_modules/moment/locale/kk.js","./kk.js":"./node_modules/moment/locale/kk.js","./km":"./node_modules/moment/locale/km.js","./km.js":"./node_modules/moment/locale/km.js","./kn":"./node_modules/moment/locale/kn.js","./kn.js":"./node_modules/moment/locale/kn.js","./ko":"./node_modules/moment/locale/ko.js","./ko.js":"./node_modules/moment/locale/ko.js","./ku":"./node_modules/moment/locale/ku.js","./ku.js":"./node_modules/moment/locale/ku.js","./ky":"./node_modules/moment/locale/ky.js","./ky.js":"./node_modules/moment/locale/ky.js","./lb":"./node_modules/moment/locale/lb.js","./lb.js":"./node_modules/moment/locale/lb.js","./lo":"./node_modules/moment/locale/lo.js","./lo.js":"./node_modules/moment/locale/lo.js","./lt":"./node_modules/moment/locale/lt.js","./lt.js":"./node_modules/moment/locale/lt.js","./lv":"./node_modules/moment/locale/lv.js","./lv.js":"./node_modules/moment/locale/lv.js","./me":"./node_modules/moment/locale/me.js","./me.js":"./node_modules/moment/locale/me.js","./mi":"./node_modules/moment/locale/mi.js","./mi.js":"./node_modules/moment/locale/mi.js","./mk":"./node_modules/moment/locale/mk.js","./mk.js":"./node_modules/moment/locale/mk.js","./ml":"./node_modules/moment/locale/ml.js","./ml.js":"./node_modules/moment/locale/ml.js","./mn":"./node_modules/moment/locale/mn.js","./mn.js":"./node_modules/moment/locale/mn.js","./mr":"./node_modules/moment/locale/mr.js","./mr.js":"./node_modules/moment/locale/mr.js","./ms":"./node_modules/moment/locale/ms.js","./ms-my":"./node_modules/moment/locale/ms-my.js","./ms-my.js":"./node_modules/moment/locale/ms-my.js","./ms.js":"./node_modules/moment/locale/ms.js","./mt":"./node_modules/moment/locale/mt.js","./mt.js":"./node_modules/moment/locale/mt.js","./my":"./node_modules/moment/locale/my.js","./my.js":"./node_modules/moment/locale/my.js","./nb":"./node_modules/moment/locale/nb.js","./nb.js":"./node_modules/moment/locale/nb.js","./ne":"./node_modules/moment/locale/ne.js","./ne.js":"./node_modules/moment/locale/ne.js","./nl":"./node_modules/moment/locale/nl.js","./nl-be":"./node_modules/moment/locale/nl-be.js","./nl-be.js":"./node_modules/moment/locale/nl-be.js","./nl.js":"./node_modules/moment/locale/nl.js","./nn":"./node_modules/moment/locale/nn.js","./nn.js":"./node_modules/moment/locale/nn.js","./pa-in":"./node_modules/moment/locale/pa-in.js","./pa-in.js":"./node_modules/moment/locale/pa-in.js","./pl":"./node_modules/moment/locale/pl.js","./pl.js":"./node_modules/moment/locale/pl.js","./pt":"./node_modules/moment/locale/pt.js","./pt-br":"./node_modules/moment/locale/pt-br.js","./pt-br.js":"./node_modules/moment/locale/pt-br.js","./pt.js":"./node_modules/moment/locale/pt.js","./ro":"./node_modules/moment/locale/ro.js","./ro.js":"./node_modules/moment/locale/ro.js","./ru":"./node_modules/moment/locale/ru.js","./ru.js":"./node_modules/moment/locale/ru.js","./sd":"./node_modules/moment/locale/sd.js","./sd.js":"./node_modules/moment/locale/sd.js","./se":"./node_modules/moment/locale/se.js","./se.js":"./node_modules/moment/locale/se.js","./si":"./node_modules/moment/locale/si.js","./si.js":"./node_modules/moment/locale/si.js","./sk":"./node_modules/moment/locale/sk.js","./sk.js":"./node_modules/moment/locale/sk.js","./sl":"./node_modules/moment/locale/sl.js","./sl.js":"./node_modules/moment/locale/sl.js","./sq":"./node_modules/moment/locale/sq.js","./sq.js":"./node_modules/moment/locale/sq.js","./sr":"./node_modules/moment/locale/sr.js","./sr-cyrl":"./node_modules/moment/locale/sr-cyrl.js","./sr-cyrl.js":"./node_modules/moment/locale/sr-cyrl.js","./sr.js":"./node_modules/moment/locale/sr.js","./ss":"./node_modules/moment/locale/ss.js","./ss.js":"./node_modules/moment/locale/ss.js","./sv":"./node_modules/moment/locale/sv.js","./sv.js":"./node_modules/moment/locale/sv.js","./sw":"./node_modules/moment/locale/sw.js","./sw.js":"./node_modules/moment/locale/sw.js","./ta":"./node_modules/moment/locale/ta.js","./ta.js":"./node_modules/moment/locale/ta.js","./te":"./node_modules/moment/locale/te.js","./te.js":"./node_modules/moment/locale/te.js","./tet":"./node_modules/moment/locale/tet.js","./tet.js":"./node_modules/moment/locale/tet.js","./tg":"./node_modules/moment/locale/tg.js","./tg.js":"./node_modules/moment/locale/tg.js","./th":"./node_modules/moment/locale/th.js","./th.js":"./node_modules/moment/locale/th.js","./tl-ph":"./node_modules/moment/locale/tl-ph.js","./tl-ph.js":"./node_modules/moment/locale/tl-ph.js","./tlh":"./node_modules/moment/locale/tlh.js","./tlh.js":"./node_modules/moment/locale/tlh.js","./tr":"./node_modules/moment/locale/tr.js","./tr.js":"./node_modules/moment/locale/tr.js","./tzl":"./node_modules/moment/locale/tzl.js","./tzl.js":"./node_modules/moment/locale/tzl.js","./tzm":"./node_modules/moment/locale/tzm.js","./tzm-latn":"./node_modules/moment/locale/tzm-latn.js","./tzm-latn.js":"./node_modules/moment/locale/tzm-latn.js","./tzm.js":"./node_modules/moment/locale/tzm.js","./ug-cn":"./node_modules/moment/locale/ug-cn.js","./ug-cn.js":"./node_modules/moment/locale/ug-cn.js","./uk":"./node_modules/moment/locale/uk.js","./uk.js":"./node_modules/moment/locale/uk.js","./ur":"./node_modules/moment/locale/ur.js","./ur.js":"./node_modules/moment/locale/ur.js","./uz":"./node_modules/moment/locale/uz.js","./uz-latn":"./node_modules/moment/locale/uz-latn.js","./uz-latn.js":"./node_modules/moment/locale/uz-latn.js","./uz.js":"./node_modules/moment/locale/uz.js","./vi":"./node_modules/moment/locale/vi.js","./vi.js":"./node_modules/moment/locale/vi.js","./x-pseudo":"./node_modules/moment/locale/x-pseudo.js","./x-pseudo.js":"./node_modules/moment/locale/x-pseudo.js","./yo":"./node_modules/moment/locale/yo.js","./yo.js":"./node_modules/moment/locale/yo.js","./zh-cn":"./node_modules/moment/locale/zh-cn.js","./zh-cn.js":"./node_modules/moment/locale/zh-cn.js","./zh-hk":"./node_modules/moment/locale/zh-hk.js","./zh-hk.js":"./node_modules/moment/locale/zh-hk.js","./zh-tw":"./node_modules/moment/locale/zh-tw.js","./zh-tw.js":"./node_modules/moment/locale/zh-tw.js"};function n(e){var o=s(e);return l(o)}function s(e){if(!l.o(m,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return m[e]}n.keys=function(){return Object.keys(m)},n.resolve=s,e.exports=n,n.id="./node_modules/moment/locale sync recursive ^\\.\\/.*$"}}]);
//# sourceMappingURL=docs-historic-item.773eb3a8f165c879e792.js.map