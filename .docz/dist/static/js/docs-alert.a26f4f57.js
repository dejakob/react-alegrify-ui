(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docs/alert.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./node_modules/docz/dist/index.m.js");function c(e){var n=["alegrify-alert"];return n.push(e.className),r.a.createElement("dialog",{className:n.join(" "),open:e.open},e.children)}c.propExamples={children:"Alert content",className:"",open:!0};var s=c;function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function u(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,n){return!n||"object"!==l(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,n){return(d=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}c.__docgenInfo={description:"<Alert />\n\nShow a short and temporary message\n\n```jsx\n<Alert\n  open={true}\n>\n  Message sent\n</Alert>\n```",methods:[],displayName:"Alert",props:{children:{type:{name:"union",value:[{name:"arrayOf",value:{name:"node"}},{name:"node"}]},required:!0,description:"Content of the alert"},className:{type:{name:"string"},required:!1,description:"Additional classnames"},open:{type:{name:"bool"},required:!1,description:"Show the alert?"}}},t.d(n,"default",function(){return y});var y=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=f(this,m(n).call(this,e))).layout=null,t}var t,o,c;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&d(e,n)}(n,r.a.Component),t=n,(o=[{key:"render",value:function(){var e=this.props,n=e.components;p(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"alert"}},"Alert"),r.a.createElement(a.MDXTag,{name:"p",components:n},"Use an alert to show a small notification."),r.a.createElement(a.MDXTag,{name:"pre",components:n},r.a.createElement(a.MDXTag,{name:"code",components:n,parentName:"pre",props:{}},"<Alert\n    open\n>\n    Hi, just to let you know\n</Alert>\n")),r.a.createElement(a.MDXTag,{name:"h2",components:n,props:{id:"properties"}},"Properties"),r.a.createElement(i.f,{of:s}))}}])&&u(t.prototype,o),c&&u(t,c),n}();y.__docgenInfo={description:"",methods:[],displayName:"MDXContent"}}}]);
//# sourceMappingURL=docs-alert.cc651a22ddd8b4dcb0c5.js.map