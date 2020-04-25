!function(e){var r={};function t(n){if(r[n])return r[n].exports;var a=r[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,t),a.l=!0,a.exports}t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var a in e)t.d(n,a,function(r){return e[r]}.bind(null,a));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=6)}([function(e,r,t){e.exports=t(4)()},function(e,r,t){"use strict";e.exports=t(2)},function(e,r,t){"use strict";
/** @license React v16.13.1
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=t(3),a="function"==typeof Symbol&&Symbol.for,o=a?Symbol.for("react.element"):60103,i=a?Symbol.for("react.portal"):60106,c=a?Symbol.for("react.fragment"):60107,l=a?Symbol.for("react.strict_mode"):60108,u=a?Symbol.for("react.profiler"):60114,s=a?Symbol.for("react.provider"):60109,f=a?Symbol.for("react.context"):60110,p=a?Symbol.for("react.forward_ref"):60112,d=a?Symbol.for("react.suspense"):60113,y=a?Symbol.for("react.memo"):60115,m=a?Symbol.for("react.lazy"):60116,b="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},v={};function O(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||h}function j(){}function w(e,r,t){this.props=e,this.context=r,this.refs=v,this.updater=t||h}O.prototype.isReactComponent={},O.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,r,"setState")},O.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=O.prototype;var E=w.prototype=new j;E.constructor=w,n(E,O.prototype),E.isPureReactComponent=!0;var N={current:null},_=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function P(e,r,t){var n,a={},i=null,c=null;if(null!=r)for(n in void 0!==r.ref&&(c=r.ref),void 0!==r.key&&(i=""+r.key),r)_.call(r,n)&&!S.hasOwnProperty(n)&&(a[n]=r[n]);var l=arguments.length-2;if(1===l)a.children=t;else if(1<l){for(var u=Array(l),s=0;s<l;s++)u[s]=arguments[s+2];a.children=u}if(e&&e.defaultProps)for(n in l=e.defaultProps)void 0===a[n]&&(a[n]=l[n]);return{$$typeof:o,type:e,key:i,ref:c,props:a,_owner:N.current}}function A(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var k=/\/+/g,x=[];function C(e,r,t,n){if(x.length){var a=x.pop();return a.result=e,a.keyPrefix=r,a.func=t,a.context=n,a.count=0,a}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function R(e,r,t){return null==e?0:function e(r,t,n,a){var c=typeof r;"undefined"!==c&&"boolean"!==c||(r=null);var l=!1;if(null===r)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(r.$$typeof){case o:case i:l=!0}}if(l)return n(a,r,""===t?"."+I(r,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(r))for(var u=0;u<r.length;u++){var s=t+I(c=r[u],u);l+=e(c,s,n,a)}else if(null===r||"object"!=typeof r?s=null:s="function"==typeof(s=b&&r[b]||r["@@iterator"])?s:null,"function"==typeof s)for(r=s.call(r),u=0;!(c=r.next()).done;)l+=e(c=c.value,s=t+I(c,u++),n,a);else if("object"===c)throw n=""+r,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(r).join(", ")+"}":n,""));return l}(e,"",r,t)}function I(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function q(e,r){e.func.call(e.context,r,e.count++)}function D(e,r,t){var n=e.result,a=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?M(e,n,t,(function(e){return e})):null!=e&&(A(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,a+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(k,"$&/")+"/")+t)),n.push(e))}function M(e,r,t,n,a){var o="";null!=t&&(o=(""+t).replace(k,"$&/")+"/"),R(e,D,r=C(r,o,n,a)),T(r)}var $={current:null};function U(){var e=$.current;if(null===e)throw Error(g(321));return e}var F={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:N,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return M(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;R(e,q,r=C(null,null,r,t)),T(r)},count:function(e){return R(e,(function(){return null}),null)},toArray:function(e){var r=[];return M(e,r,null,(function(e){return e})),r},only:function(e){if(!A(e))throw Error(g(143));return e}},r.Component=O,r.Fragment=c,r.Profiler=u,r.PureComponent=w,r.StrictMode=l,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(g(267,e));var a=n({},e.props),i=e.key,c=e.ref,l=e._owner;if(null!=r){if(void 0!==r.ref&&(c=r.ref,l=N.current),void 0!==r.key&&(i=""+r.key),e.type&&e.type.defaultProps)var u=e.type.defaultProps;for(s in r)_.call(r,s)&&!S.hasOwnProperty(s)&&(a[s]=void 0===r[s]&&void 0!==u?u[s]:r[s])}var s=arguments.length-2;if(1===s)a.children=t;else if(1<s){u=Array(s);for(var f=0;f<s;f++)u[f]=arguments[f+2];a.children=u}return{$$typeof:o,type:e.type,key:i,ref:c,props:a,_owner:l}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=P,r.createFactory=function(e){var r=P.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=A,r.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:y,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return U().useCallback(e,r)},r.useContext=function(e,r){return U().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return U().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return U().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return U().useLayoutEffect(e,r)},r.useMemo=function(e,r){return U().useMemo(e,r)},r.useReducer=function(e,r,t){return U().useReducer(e,r,t)},r.useRef=function(e){return U().useRef(e)},r.useState=function(e){return U().useState(e)},r.version="16.13.1"},function(e,r,t){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var n=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function i(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,r){for(var t,c,l=i(e),u=1;u<arguments.length;u++){for(var s in t=Object(arguments[u]))a.call(t,s)&&(l[s]=t[s]);if(n){c=n(t);for(var f=0;f<c.length;f++)o.call(t,c[f])&&(l[c[f]]=t[c[f]])}}return l}},function(e,r,t){"use strict";var n=t(5);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,r,t,a,o,i){if(i!==n){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function r(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:r,element:e,elementType:e,instanceOf:r,node:e,objectOf:r,oneOf:r,oneOfType:r,shape:r,exact:r,checkPropTypes:o,resetWarningCache:a};return t.PropTypes=t,t}},function(e,r,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,r,t){"use strict";t.r(r),t.d(r,"COLORS",(function(){return n})),t.d(r,"MEDIA",(function(){return a})),t.d(r,"Article",(function(){return y})),t.d(r,"Aside",(function(){return b})),t.d(r,"Body",(function(){return j})),t.d(r,"Button",(function(){return x})),t.d(r,"Card",(function(){return q})),t.d(r,"Checkbox",(function(){return F})),t.d(r,"Dialog",(function(){return W})),t.d(r,"Dl",(function(){return ee})),t.d(r,"Dt",(function(){return Q})),t.d(r,"Dd",(function(){return Z})),t.d(r,"Dropdown",(function(){return fe})),t.d(r,"DropdownItem",(function(){return be})),t.d(r,"Footer",(function(){return he})),t.d(r,"Grid",(function(){return je})),t.d(r,"GridCell",(function(){return _e})),t.d(r,"Input",(function(){return Pe})),t.d(r,"Label",(function(){return ke})),t.d(r,"Main",(function(){return Ce})),t.d(r,"Notification",(function(){return Ue})),t.d(r,"Radio",(function(){return Le})),t.d(r,"RangeInput",(function(){return Ve})),t.d(r,"Section",(function(){return Je})),t.d(r,"Stepper",(function(){return Ze})),t.d(r,"H1",(function(){return er})),t.d(r,"H2",(function(){return rr})),t.d(r,"H3",(function(){return tr})),t.d(r,"P",(function(){return nr})),t.d(r,"Em",(function(){return ar})),t.d(r,"Strong",(function(){return or}));var n={PRIMARY:"#4e4cc1",SECONDARY:"#953495",BODY:"#000000",ACTION:"#ffffff",ERROR:"#900505",NAV:"#333333"},a={SMALL:600,MEDIUM:960,LARGE:1200},o=t(1),i=t.n(o),c=t(0),l=t.n(c);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}var s={spaceXS:"alegrify-space--extra-small",spaceS:"alegrify-space--small",spaceM:"alegrify-space--medium",spaceL:"alegrify-space--large",spaceXL:"alegrify-space--extra-large"};function f(e){var r=(e.className||"").split(" ");return Object.keys(s).forEach((function(t){var n=s[t];e[t]&&r.push(n)})),r}function p(e){var r=function(r){var t=f(r);return i.a.createElement(e,u({},r,{className:t.join(" ")}))};return r.propTypes=e.propTypes,r.defaultProps=e.defaultProps,r}function d(e){var r=["alegrify-article"];return"string"==typeof e.className&&r.push(e.className),i.a.createElement("article",{className:r.join(" ")},e.children)}d.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,className:l.a.string},d.defaultProps={className:""};var y=p(d);function m(e){var r=["alegrify-aside"];return"string"==typeof e.className&&r.push(e.className),i.a.createElement("aside",{className:r.join(" ")},e.children)}m.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,className:l.a.string},m.defaultProps={className:""};var b=p(m);function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function h(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function v(e){var r,t=["alegrify-body"],n=e.children;return"string"==typeof e.className&&t.push(e.className),e.gradient,e.backgroundImage&&(t.push("alegrify-body--fixed-background"),r=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){h(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({},e.style||{},{backgroundImage:"url(".concat(e.backgroundImage,")")}),n=i.a.createElement(O,null,e.children)),i.a.createElement("body",{className:t.join(" "),style:r},n)}function O(e){return i.a.createElement("div",{className:"alegrify-body__page-scroll"},e.children)}v.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,className:l.a.string,style:l.a.object,backgroundImage:l.a.string,gradient:l.a.string};var j=v;var w=function(e){var r={};return e.forEach((function(e){r[e]=l.a.bool})),r};function E(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function N(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _(e){return function(e){if(Array.isArray(e))return S(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return S(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return S(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var P="alegrify-button",A=["primary","destructive","full","link","loading"];function k(e){var r=[P].concat(_(A.filter((function(r){return e[r]})).map((function(e){return"".concat(P,"--").concat(e)}))));return e.className&&r.push(e.className),i.a.createElement("button",{className:r.join(" "),type:e.type||"submit",disabled:e.disabled,onClick:e.onClick},i.a.createElement("span",{className:"".concat(P,"__content")},e.children))}k.propTypes=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?E(Object(t),!0).forEach((function(r){N(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):E(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({children:l.a.node.isRequired,className:l.a.string},w(A),{type:l.a.string,disabled:l.a.bool,onClick:l.a.func}),k.defaultProps={type:"submit"};var x=p(k);function C(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return T(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return T(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var R=0;function I(e){var r=C(Object(o.useState)("string"==typeof e.id&&""!==e.id.trim()?e.id:"alegrify-card--".concat(++R)),1)[0],t=["alegrify-card"],n=e.height||400,a=e.width||"100%";return"string"==typeof e.className&&""!==e.className.trim()&&t.push(e.className),i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:e.checkType||"checkbox",className:"alegrify-card__trigger","aria-hidden":"true",id:r,name:e.name,value:e.value,required:e.required}),i.a.createElement("label",{className:t.join(" "),htmlFor:r,style:{height:"".concat(n,"px"),width:"number"==typeof a?"".concat(a,"px"):"100%",minWidth:"number"==typeof a?"".concat(a,"px"):0}},i.a.createElement("figure",{className:"alegrify-card__figure",style:{height:"".concat(n,"px"),width:"number"==typeof a?"".concat(a,"px"):"100%",minWidth:"number"==typeof a?"".concat(a,"px"):0}},i.a.createElement("img",{className:"alegrify-card__image",src:e.image,alt:e.alt,height:n,width:a})),i.a.createElement("div",{className:"alegrify-card__title-overlay"},i.a.createElement("h2",{className:"alegrify-card__title"},e.title)),i.a.createElement("div",{className:"alegrify-card__content","data-title":e.title},e.children)))}I.propTypes={children:l.a.node.isRequired,title:l.a.string.isRequired,image:l.a.string.isRequired,alt:l.a.string.isRequired,id:l.a.string,required:l.a.bool,checkType:l.a.string,name:l.a.string,value:l.a.string,height:l.a.number,width:l.a.number,className:l.a.string},I.defaultProps={height:400};var q=p(I);function D(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return M(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return M(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var $=0;function U(e){var r=D(Object(o.useState)("string"==typeof e.id&&""!==e.id.trim()?e.id:"alegrify-checkbox--".concat(++$)),1)[0];return i.a.createElement(i.a.Fragment,null,i.a.createElement("input",{type:"checkbox",className:"alegrify-checkbox__trigger".concat(e.loading?" alegrify-checkbox__trigger--loading":""),disabled:e.disabled,checked:e.checked,id:r,name:e.name,"aria-labelledby":"".concat(r,"__label")}),i.a.createElement("label",{className:"alegrify-checkbox__check",htmlFor:r,"aria-hidden":"true"}),i.a.createElement("label",{id:"".concat(r,"__label"),className:"alegrify-checkbox__label",htmlFor:r,"aria-role":"checkbox"},e.children))}U.propTypes={children:l.a.node,id:l.a.string,name:l.a.string,disabled:l.a.bool,checked:l.a.bool,loading:l.a.bool},U.defaultProps={};var F=p(U);var L=function(e){var r=Object(o.useRef)({closeMethod:e});return Object(o.useEffect)((function(){return window.addEventListener("keyup",t),function(){window.removeEventListener("keyup",t)}}),[]),[];function t(e){var t=r.current.closeMethod;27===e.keyCode&&"function"==typeof t&&(e.preventDefault(),e.stopPropagation(),t())}};function B(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return V(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return V(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var K=function(e,r){var t=B(Object(o.useState)(null),2),n=t[0],a=t[1];return Object(o.useEffect)((function(){if(r){a(document.activeElement);var t=e.querySelector("a, button");t&&t.focus()}else n&&n.focus()}),[r]),[n]};function H(e){var r=Object(o.useRef)(null);L(e.onClose),K(r.current,e.open);return e.className&&["alegrify-dialog"].push(e.className),i.a.createElement("dialog",{className:"alegrify-dialog",onClick:e.onClose,open:e.open,id:e.id},i.a.createElement("div",{className:"alegrify-dialog__content",onClick:function(e){return e.stopPropagation()}},e.title?i.a.createElement("h2",{className:"alegrify-dialog__title"},e.title):null,e.children,e.actions?i.a.createElement("div",{className:"alegrify-dialog__actions",ref:r},e.actions):null))}H.propTypes={children:l.a.node.isRequired,className:l.a.string,open:l.a.bool,onClose:l.a.func,title:l.a.string,actions:l.a.node,id:l.a.string},H.defaultProps={};var W=p(H);function Y(e){return function(e){if(Array.isArray(e))return G(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return G(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return G(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function G(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var z={children:l.a.node.isRequired,className:l.a.string};var X=function(e,r,t){var n=[r].concat(Y(f(t)));return"string"==typeof t.className&&n.push(t.className),i.a.cloneElement(e,Object.assign({},t,{className:n.join(" ")}))};function J(e){return X(i.a.createElement("dl",null),"alegrify-dl",e)}function Q(e){return X(i.a.createElement("dt",null),"alegrify-dl__dt",e)}function Z(e){return X(i.a.createElement("dd",null),"alegrify-dl__dd",e)}J.propTypes=z,Q.propTypes=z,Z.propTypes=z;var ee=J;var re=function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];var n=Object(o.useRef)({});return Object(o.useEffect)((function(){return window.addEventListener("keydown",a),function(){window.removeEventListener("keydown",a)}}),[]),r.map((function(e){return function(r){n.current[e]=r}}));function a(e){r.indexOf(e.keyCode)>-1&&n.current[e.keyCode]&&n.current[e.keyCode](e)}};function te(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return ne(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return ne(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function ne(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var ae=38,oe=40,ie=13,ce=32,le=9,ue=0;function se(e){var r=te(Object(o.useState)(N()),2),t=r[0],n=r[1],a=te(Object(o.useState)(!1),2),c=a[0],l=a[1],u=te(Object(o.useState)("string"==typeof e.id&&""!==e.id.trim()?e.id:"alegrify-dropdown--".concat(++ue)),1)[0],s=Object(o.useRef)({active:t,open:c}),f=te(re(ae,oe,ie,le,ce),5),p=f[0],d=f[1],y=f[2],m=f[3],b=f[4];L((function(){return l(!1)})),Object(o.useEffect)((function(){return p(v),d(O),y(j),b(j),m(w),document.body.addEventListener("click",E),function(){document.body.removeEventListener("click",E)}}),[]),Object(o.useEffect)((function(){n(N())}),[e.value]),Object(o.useEffect)((function(){s.current.active=t}),[t]),Object(o.useEffect)((function(){s.current.open=c,c||(s.current.active=N())}),[c]);var g=["alegrify-dropdown"],h=e.value;return"string"==typeof e.className&&""!==e.className.trim()&&g.push(e.className),i.a.createElement("div",{className:g.join(" ")},i.a.createElement("input",{className:"alegrify-dropdown__trigger",type:"checkbox",id:u,onChange:function(){return l(!c)},checked:c,disabled:e.disabled,"aria-hidden":"true"}),i.a.createElement("label",{id:"".concat(u,"__label"),className:"alegrify-dropdown__label",htmlFor:u,"aria-role":"button","aria-haspopup":"listbox"},h||e.placeholder),i.a.createElement("ul",{className:"alegrify-dropdown__list","data-menu-for":u,"aria-role":"listbox","aria-labelledby":"".concat(u,"__label")},function(){if("undefined"!=typeof window&&!c)return null;return"function"==typeof e.children.map?e.children.map(S):i.a.Children.map(e.children,S)}()));function v(e){var r=s.current,t=r.active;r.open&&(e.preventDefault(),n(Math.max(0,t-1)))}function O(r){var t=s.current,a=t.active;t.open&&(r.preventDefault(),n(Math.min((Array.isArray(e.children)?e.children.length:i.a.Children.count(e.children))-1,a+1)))}function j(e){var r=s.current,t=r.active;r.open&&(e.preventDefault(),_(t))}function w(){s.current.open&&l(!1)}function E(e){var r=e.target;if(s.current.open){for(var t=r;t!==document.body;){if(t.hasAttribute("data-menu-for")&&t.getAttribute("data-menu-for")==="".concat(u))return;t=t.parentNode}l(!1)}}function N(){return(Array.isArray(e.children)?e.children:i.a.Children.toArray(e.children)).findIndex((function(r){return r.props.value===e.value}))}function _(r){var t=Array.isArray(e.children)?e.children:i.a.Children.toArray(e.children);if(l(!1),n(r),t[r]){var a=t[r].props.value;e.onValueChange(a)}}function S(r){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return i.a.cloneElement(r,{onSelect:function(){return _(a)},onHover:function(){return n(a)},checked:t===a,name:e.name,key:a})}}se.propTypes={id:l.a.string,name:l.a.string,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,className:l.a.string,value:l.a.string,placeholder:l.a.string,disabled:l.a.bool,onValueChange:l.a.func.isRequired},se.defaultProps={value:null,placeholder:"Please select..."};var fe=p(se);function pe(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],n=!0,a=!1,o=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==c.return||c.return()}finally{if(a)throw o}}return t}(e,r)||function(e,r){if(!e)return;if("string"==typeof e)return de(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return de(e,r)}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function de(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var ye=0;function me(e){var r=pe(Object(o.useState)("string"==typeof e.id&&""!==e.id.trim()?e.id:"alegrify-dropdown-item--".concat(++ye)),1)[0];return i.a.createElement("li",{className:"alegrify-dropdown__list-item",onMouseOver:e.onHover,onClick:e.onSelect,"aria-role":"menuitemradio"},i.a.createElement("input",{type:"radio",className:"alegrify-dropdown__list-item-trigger",name:e.name,value:e.value,id:r,checked:e.checked,onChange:function(){},"aria-hidden":"true"}),i.a.createElement("label",{htmlFor:r,"aria-role":"none",className:"alegrify-dropdown__list-item-label"},e.children))}me.propTypes={value:l.a.string.isRequired,id:l.a.string,children:l.a.node.isRequired};var be=p(me);function ge(e){var r=["alegrify-footer"];return e.className&&r.push(e.className),i.a.createElement("footer",{className:r.join(" ")},e.children)}ge.propTypes={children:l.a.node.isRequired,className:l.a.string},ge.defaultProps={};var he=p(ge),ve=["left","center","right","outline","even","top","middle","bottom","stretch","bleed","reverse","all"];function Oe(e){var r=["alegrify-grid"];return e.className&&r.push(e.className),ve.forEach((function(t){e[t]&&r.push("alegrify-grid--".concat(t))})),i.a.createElement("div",{className:r.join(" "),"aria-role":"grid"},e.children)}Oe.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,className:l.a.string,left:l.a.bool,center:l.a.bool,right:l.a.bool,top:l.a.bool,middle:l.a.bool,bottom:l.a.bool,outline:l.a.bool,even:l.a.bool,reverse:l.a.bool,all:l.a.bool},Oe.defaultProps={},Oe.propExamples={};var je=p(Oe),we=["one","two","three","four","five","six","seven","eight","nine","ten","eleven"],Ee={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10,eleven:11};function Ne(e){var r=["alegrify-grid__cell"];return e.className&&r.push(e.className),we.forEach((function(t){e[t]&&r.push("alegrify-grid__cell--".concat(Ee[t]))})),i.a.createElement("div",{className:r.join(" "),"aria-role":"grid-cell"},e.children)}Ne.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,className:l.a.string,one:l.a.bool,two:l.a.bool,three:l.a.bool,four:l.a.bool,five:l.a.bool,six:l.a.bool,seven:l.a.bool,eight:l.a.bool,nine:l.a.bool,ten:l.a.bool,eleven:l.a.bool},Ne.defaultProps={},Ne.propExamples={};var _e=p(Ne);function Se(e){var r=["alegrify-input"];return e.className&&r.push(e.className),e.full&&r.push("alegrify-input--full"),e.multiline?i.a.createElement("textarea",{id:e.id,name:e.name,className:r.join(" "),placeholder:e.placeholder||"",onChange:t,onKeyUp:e.onKeyUp,onKeyDown:e.onKeyDown,onFocus:e.onFocus,onBlur:e.onBlur,rows:e.rows,value:e.value,disabled:e.disabled,error:e.error,required:e.required}):i.a.createElement("input",{id:e.id,name:e.name,type:e.type||"text",className:r.join(" "),placeholder:e.placeholder||"",value:e.value,disabled:e.disabled,onChange:t,onKeyUp:e.onKeyUp,onKeyDown:e.onKeyDown,onFocus:e.onFocus,onBlur:e.onBlur,error:e.error,required:e.required});function t(r){var t=r.target.value;e.onValueChange(t)}}Se.propTypes={value:l.a.string.isRequired,onValueChange:l.a.func.isRequired,className:l.a.string,type:l.a.string,placeholder:l.a.string,full:l.a.bool,multiline:l.a.bool,rows:l.a.number,required:l.a.bool,disabled:l.a.bool,id:l.a.string,name:l.a.string,onKeyUp:l.a.func,onKeyDown:l.a.func,onFocus:l.a.func,onBlur:l.a.func},Se.defaultProps={type:"text",placeholder:""};var Pe=p(Se);function Ae(e){var r=["alegrify-label"];return e.className&&r.push(e.className),e.error&&r.push("alegrify-label--error"),i.a.createElement("label",{htmlFor:e.htmlFor,className:r.join(" ")},e.children)}Ae.propTypes={children:l.a.node.isRequired,className:l.a.string,htmlFor:l.a.string,error:l.a.bool},Ae.defaultProps={className:"",error:!1};var ke=p(Ae);function xe(e){var r=["alegrify-main"];return e.className&&r.push(e.className),i.a.createElement("main",{className:r.join(" ")},e.children)}xe.propTypes={children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,className:l.a.string},xe.propExamples={children:"Main content",className:""};var Ce=p(xe);function Te(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function Re(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function Ie(e){return function(e){if(Array.isArray(e))return qe(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return qe(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return qe(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function qe(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var De="alegrify-notification",Me=["success","info","warning","error"];function $e(e){var r=[De].concat(Ie(Me.filter((function(r){return e[r]})).map((function(e){return"".concat(De,"--").concat(e)}))));return e.className&&r.push(e.className),i.a.createElement("dialog",{open:!0,"aria-role":"alert",className:r.join(" ")},i.a.createElement("h2",{className:"alegrify-notification__title"},e.title),i.a.createElement("p",{className:"alegrify-notification__description"},e.children))}$e.propTypes=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Te(Object(t),!0).forEach((function(r){Re(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Te(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({children:l.a.node.isRequired,className:l.a.string},w(Me));var Ue=p($e);function Fe(e){var r=["alegrify-radio"];return e.className&&r.push(e.className),e.disabled&&r.push("alegrify-radio--disabled"),i.a.createElement("div",{className:r.join(" ")},i.a.createElement("input",{type:"radio",id:e.id,name:e.name,className:"alegrify-radio__trigger",disabled:e.disabled,checked:e.checked,onChange:e.onChange}),i.a.createElement("label",{htmlFor:e.id,className:"alegrify-radio__check"},i.a.createElement("span",{className:"alegrify-radio__label"},e.children)))}Fe.propTypes={id:l.a.string.isRequired,name:l.a.string.isRequired,children:l.a.oneOfType([l.a.arrayOf(l.a.node),l.a.node]).isRequired,disabled:l.a.bool,checked:l.a.bool,className:l.a.string},Fe.defaultProps={disabled:!1,checked:!1,className:""};var Le=p(Fe);function Be(e){var r=["alegrify-range-input"];return e.className&&r.push(e.className),i.a.createElement("input",{type:"range",id:e.id,name:e.name,className:r.join(" "),disabled:e.disabled,onChange:function(r){return e.onValueChange(r.target.value)},value:e.value,"data-low-indicator":e.lowIndicator,"data-high-indicator":e.highIndicator,min:e.min||1,max:e.max||10,step:e.step||1})}Be.propTypes={className:l.a.string,id:l.a.string.isRequired,name:l.a.string.isRequired,value:l.a.number,disabled:l.a.bool,lowIndicator:l.a.string,highIndicator:l.a.string,min:l.a.number,max:l.a.number,step:l.a.number,onValueChange:l.a.func},Be.defaultProps={min:1,max:10,step:1,disabled:!1,className:""};var Ve=p(Be);function Ke(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function He(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function We(e){return function(e){if(Array.isArray(e))return Ye(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return Ye(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return Ye(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Ye(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}var Ge="alegrify-section",ze=["large"];function Xe(e){var r=[Ge].concat(We(ze.filter((function(r){return e[r]})).map((function(e){return"".concat(Ge,"--").concat(e)}))));return e.className&&r.push(e.className),i.a.createElement("section",{className:r.join(" ")},e.children)}Xe.propTypes=function(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?Ke(Object(t),!0).forEach((function(r){He(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Ke(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({children:l.a.node.isRequired,className:l.a.string},w(ze));var Je=p(Xe);function Qe(e){e.className&&["alegrify-stepper"].push(e.className);var r=Math.min(Math.floor(e.progress/100*(e.steps.length-1)),e.steps.length-1);return i.a.createElement("div",{className:"alegrify-stepper"},i.a.createElement("progress",{className:"alegrify-stepper__progress",min:0,max:100,value:e.progress}),i.a.createElement("ol",{className:"alegrify-stepper__steps"},e.steps.map((function(t,n){return i.a.createElement("li",{key:t,className:"alegrify-stepper__step".concat(n===r?" alegrify-stepper__step--active":""),style:{width:"".concat(100/e.steps.length,"%")}},t)}))))}Qe.propTypes={progress:l.a.number,steps:l.a.arrayOf(l.a.string)};var Ze=p(Qe);function er(e){return X(i.a.createElement("h1",null),"alegrify-h1",e)}function rr(e){return X(i.a.createElement("h2",null),"alegrify-h2",e)}function tr(e){return X(i.a.createElement("h3",null),"alegrify-h3",e)}function nr(e){return X(i.a.createElement("p",null),"alegrify-p",e)}function ar(e){return X(i.a.createElement("em",null),"alegrify-em",e)}function or(e){return X(i.a.createElement("strong",null),"alegrify-strong",e)}er.propTypes=z,rr.propTypes=z,tr.propTypes=z,nr.propTypes=z,ar.propTypes=z,or.propTypes=z}]);