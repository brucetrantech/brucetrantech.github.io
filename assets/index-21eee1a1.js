(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Rh(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Ah={exports:{}},bo={},Ph={exports:{}},W={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ns=Symbol.for("react.element"),H0=Symbol.for("react.portal"),V0=Symbol.for("react.fragment"),G0=Symbol.for("react.strict_mode"),K0=Symbol.for("react.profiler"),Q0=Symbol.for("react.provider"),Y0=Symbol.for("react.context"),X0=Symbol.for("react.forward_ref"),q0=Symbol.for("react.suspense"),J0=Symbol.for("react.memo"),Z0=Symbol.for("react.lazy"),pd=Symbol.iterator;function ey(e){return e===null||typeof e!="object"?null:(e=pd&&e[pd]||e["@@iterator"],typeof e=="function"?e:null)}var Oh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Dh=Object.assign,Mh={};function Kr(e,t,n){this.props=e,this.context=t,this.refs=Mh,this.updater=n||Oh}Kr.prototype.isReactComponent={};Kr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Kr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Lh(){}Lh.prototype=Kr.prototype;function zu(e,t,n){this.props=e,this.context=t,this.refs=Mh,this.updater=n||Oh}var $u=zu.prototype=new Lh;$u.constructor=zu;Dh($u,Kr.prototype);$u.isPureReactComponent=!0;var md=Array.isArray,bh=Object.prototype.hasOwnProperty,ju={current:null},Fh={key:!0,ref:!0,__self:!0,__source:!0};function zh(e,t,n){var r,i={},s=null,o=null;if(t!=null)for(r in t.ref!==void 0&&(o=t.ref),t.key!==void 0&&(s=""+t.key),t)bh.call(t,r)&&!Fh.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:ns,type:e,key:s,ref:o,props:i,_owner:ju.current}}function ty(e,t){return{$$typeof:ns,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Bu(e){return typeof e=="object"&&e!==null&&e.$$typeof===ns}function ny(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gd=/\/+/g;function Al(e,t){return typeof e=="object"&&e!==null&&e.key!=null?ny(""+e.key):t.toString(36)}function bs(e,t,n,r,i){var s=typeof e;(s==="undefined"||s==="boolean")&&(e=null);var o=!1;if(e===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(e.$$typeof){case ns:case H0:o=!0}}if(o)return o=e,i=i(o),e=r===""?"."+Al(o,0):r,md(i)?(n="",e!=null&&(n=e.replace(gd,"$&/")+"/"),bs(i,t,n,"",function(u){return u})):i!=null&&(Bu(i)&&(i=ty(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(gd,"$&/")+"/")+e)),t.push(i)),1;if(o=0,r=r===""?".":r+":",md(e))for(var l=0;l<e.length;l++){s=e[l];var a=r+Al(s,l);o+=bs(s,t,n,a,i)}else if(a=ey(e),typeof a=="function")for(e=a.call(e),l=0;!(s=e.next()).done;)s=s.value,a=r+Al(s,l++),o+=bs(s,t,n,a,i);else if(s==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return o}function hs(e,t,n){if(e==null)return e;var r=[],i=0;return bs(e,r,"","",function(s){return t.call(n,s,i++)}),r}function ry(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},Fs={transition:null},iy={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:Fs,ReactCurrentOwner:ju};W.Children={map:hs,forEach:function(e,t,n){hs(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return hs(e,function(){t++}),t},toArray:function(e){return hs(e,function(t){return t})||[]},only:function(e){if(!Bu(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};W.Component=Kr;W.Fragment=V0;W.Profiler=K0;W.PureComponent=zu;W.StrictMode=G0;W.Suspense=q0;W.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;W.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Dh({},e.props),i=e.key,s=e.ref,o=e._owner;if(t!=null){if(t.ref!==void 0&&(s=t.ref,o=ju.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(a in t)bh.call(t,a)&&!Fh.hasOwnProperty(a)&&(r[a]=t[a]===void 0&&l!==void 0?l[a]:t[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:ns,type:e.type,key:i,ref:s,props:r,_owner:o}};W.createContext=function(e){return e={$$typeof:Y0,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Q0,_context:e},e.Consumer=e};W.createElement=zh;W.createFactory=function(e){var t=zh.bind(null,e);return t.type=e,t};W.createRef=function(){return{current:null}};W.forwardRef=function(e){return{$$typeof:X0,render:e}};W.isValidElement=Bu;W.lazy=function(e){return{$$typeof:Z0,_payload:{_status:-1,_result:e},_init:ry}};W.memo=function(e,t){return{$$typeof:J0,type:e,compare:t===void 0?null:t}};W.startTransition=function(e){var t=Fs.transition;Fs.transition={};try{e()}finally{Fs.transition=t}};W.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};W.useCallback=function(e,t){return Je.current.useCallback(e,t)};W.useContext=function(e){return Je.current.useContext(e)};W.useDebugValue=function(){};W.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};W.useEffect=function(e,t){return Je.current.useEffect(e,t)};W.useId=function(){return Je.current.useId()};W.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};W.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};W.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};W.useMemo=function(e,t){return Je.current.useMemo(e,t)};W.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};W.useRef=function(e){return Je.current.useRef(e)};W.useState=function(e){return Je.current.useState(e)};W.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};W.useTransition=function(){return Je.current.useTransition()};W.version="18.2.0";Ph.exports=W;var we=Ph.exports;const dt=Rh(we);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sy=we,oy=Symbol.for("react.element"),ly=Symbol.for("react.fragment"),ay=Object.prototype.hasOwnProperty,uy=sy.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cy={key:!0,ref:!0,__self:!0,__source:!0};function $h(e,t,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),t.key!==void 0&&(s=""+t.key),t.ref!==void 0&&(o=t.ref);for(r in t)ay.call(t,r)&&!cy.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:oy,type:e,key:s,ref:o,props:i,_owner:uy.current}}bo.Fragment=ly;bo.jsx=$h;bo.jsxs=$h;Ah.exports=bo;var _=Ah.exports,va={},jh={exports:{}},pt={},Bh={exports:{}},Uh={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(k,b){var F=k.length;k.push(b);e:for(;0<F;){var ie=F-1>>>1,R=k[ie];if(0<i(R,b))k[ie]=b,k[F]=R,F=ie;else break e}}function n(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var b=k[0],F=k.pop();if(F!==b){k[0]=F;e:for(var ie=0,R=k.length,A=R>>>1;ie<A;){var D=2*(ie+1)-1,z=k[D],y=D+1,H=k[y];if(0>i(z,F))y<R&&0>i(H,z)?(k[ie]=H,k[y]=F,ie=y):(k[ie]=z,k[D]=F,ie=D);else if(y<R&&0>i(H,F))k[ie]=H,k[y]=F,ie=y;else break e}}return b}function i(k,b){var F=k.sortIndex-b.sortIndex;return F!==0?F:k.id-b.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;e.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();e.unstable_now=function(){return o.now()-l}}var a=[],u=[],d=1,c=null,h=3,v=!1,g=!1,x=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function m(k){for(var b=n(u);b!==null;){if(b.callback===null)r(u);else if(b.startTime<=k)r(u),b.sortIndex=b.expirationTime,t(a,b);else break;b=n(u)}}function w(k){if(x=!1,m(k),!g)if(n(a)!==null)g=!0,Gt(C);else{var b=n(u);b!==null&&Ye(w,b.startTime-k)}}function C(k,b){g=!1,x&&(x=!1,p(O),O=-1),v=!0;var F=h;try{for(m(b),c=n(a);c!==null&&(!(c.expirationTime>b)||k&&!Ie());){var ie=c.callback;if(typeof ie=="function"){c.callback=null,h=c.priorityLevel;var R=ie(c.expirationTime<=b);b=e.unstable_now(),typeof R=="function"?c.callback=R:c===n(a)&&r(a),m(b)}else r(a);c=n(a)}if(c!==null)var A=!0;else{var D=n(u);D!==null&&Ye(w,D.startTime-b),A=!1}return A}finally{c=null,h=F,v=!1}}var P=!1,L=null,O=-1,Q=5,$=-1;function Ie(){return!(e.unstable_now()-$<Q)}function Se(){if(L!==null){var k=e.unstable_now();$=k;var b=!0;try{b=L(!0,k)}finally{b?Oe():(P=!1,L=null)}}else P=!1}var Oe;if(typeof f=="function")Oe=function(){f(Se)};else if(typeof MessageChannel<"u"){var at=new MessageChannel,Be=at.port2;at.port1.onmessage=Se,Oe=function(){Be.postMessage(null)}}else Oe=function(){T(Se,0)};function Gt(k){L=k,P||(P=!0,Oe())}function Ye(k,b){O=T(function(){k(e.unstable_now())},b)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(k){k.callback=null},e.unstable_continueExecution=function(){g||v||(g=!0,Gt(C))},e.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Q=0<k?Math.floor(1e3/k):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(a)},e.unstable_next=function(k){switch(h){case 1:case 2:case 3:var b=3;break;default:b=h}var F=h;h=b;try{return k()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(k,b){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var F=h;h=k;try{return b()}finally{h=F}},e.unstable_scheduleCallback=function(k,b,F){var ie=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?ie+F:ie):F=ie,k){case 1:var R=-1;break;case 2:R=250;break;case 5:R=1073741823;break;case 4:R=1e4;break;default:R=5e3}return R=F+R,k={id:d++,callback:b,priorityLevel:k,startTime:F,expirationTime:R,sortIndex:-1},F>ie?(k.sortIndex=F,t(u,k),n(a)===null&&k===n(u)&&(x?(p(O),O=-1):x=!0,Ye(w,F-ie))):(k.sortIndex=R,t(a,k),g||v||(g=!0,Gt(C))),k},e.unstable_shouldYield=Ie,e.unstable_wrapCallback=function(k){var b=h;return function(){var F=h;h=b;try{return k.apply(this,arguments)}finally{h=F}}}})(Uh);Bh.exports=Uh;var dy=Bh.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wh=we,ht=dy;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Hh=new Set,Mi={};function ir(e,t){Mr(e,t),Mr(e+"Capture",t)}function Mr(e,t){for(Mi[e]=t,e=0;e<t.length;e++)Hh.add(t[e])}var en=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wa=Object.prototype.hasOwnProperty,fy=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yd={},_d={};function hy(e){return wa.call(_d,e)?!0:wa.call(yd,e)?!1:fy.test(e)?_d[e]=!0:(yd[e]=!0,!1)}function py(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function my(e,t,n,r){if(t===null||typeof t>"u"||py(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ze(e,t,n,r,i,s,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=o}var je={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){je[e]=new Ze(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];je[t]=new Ze(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){je[e]=new Ze(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){je[e]=new Ze(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){je[e]=new Ze(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){je[e]=new Ze(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){je[e]=new Ze(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){je[e]=new Ze(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){je[e]=new Ze(e,5,!1,e.toLowerCase(),null,!1,!1)});var Uu=/[\-:]([a-z])/g;function Wu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Uu,Wu);je[t]=new Ze(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Uu,Wu);je[t]=new Ze(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Uu,Wu);je[t]=new Ze(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){je[e]=new Ze(e,1,!1,e.toLowerCase(),null,!1,!1)});je.xlinkHref=new Ze("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){je[e]=new Ze(e,1,!1,e.toLowerCase(),null,!0,!0)});function Hu(e,t,n,r){var i=je.hasOwnProperty(t)?je[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(my(t,n,i,r)&&(n=null),r||i===null?hy(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var ln=Wh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ps=Symbol.for("react.element"),cr=Symbol.for("react.portal"),dr=Symbol.for("react.fragment"),Vu=Symbol.for("react.strict_mode"),xa=Symbol.for("react.profiler"),Vh=Symbol.for("react.provider"),Gh=Symbol.for("react.context"),Gu=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),Ca=Symbol.for("react.suspense_list"),Ku=Symbol.for("react.memo"),dn=Symbol.for("react.lazy"),Kh=Symbol.for("react.offscreen"),vd=Symbol.iterator;function ii(e){return e===null||typeof e!="object"?null:(e=vd&&e[vd]||e["@@iterator"],typeof e=="function"?e:null)}var me=Object.assign,Pl;function yi(e){if(Pl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Pl=t&&t[1]||""}return`
`+Pl+e}var Ol=!1;function Dl(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return e.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",e.displayName)),a}while(1<=o&&0<=l);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?yi(e):""}function gy(e){switch(e.tag){case 5:return yi(e.type);case 16:return yi("Lazy");case 13:return yi("Suspense");case 19:return yi("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function Ea(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case dr:return"Fragment";case cr:return"Portal";case xa:return"Profiler";case Vu:return"StrictMode";case Sa:return"Suspense";case Ca:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Gh:return(e.displayName||"Context")+".Consumer";case Vh:return(e._context.displayName||"Context")+".Provider";case Gu:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ku:return t=e.displayName||null,t!==null?t:Ea(e.type)||"Memo";case dn:t=e._payload,e=e._init;try{return Ea(e(t))}catch{}}return null}function yy(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ea(t);case 8:return t===Vu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function An(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Qh(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _y(e){var t=Qh(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ms(e){e._valueTracker||(e._valueTracker=_y(e))}function Yh(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Qh(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Xs(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ka(e,t){var n=t.checked;return me({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function wd(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=An(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Xh(e,t){t=t.checked,t!=null&&Hu(e,"checked",t,!1)}function Ia(e,t){Xh(e,t);var n=An(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&Ta(e,t.type,An(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xd(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Ta(e,t,n){(t!=="number"||Xs(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var _i=Array.isArray;function Er(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+An(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return me({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sd(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(_i(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:An(n)}}function qh(e,t){var n=An(t.value),r=An(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Cd(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Jh(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Jh(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var gs,Zh=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(gs=gs||document.createElement("div"),gs.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=gs.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Li(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},vy=["Webkit","ms","Moz","O"];Object.keys(xi).forEach(function(e){vy.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xi[t]=xi[e]})});function ep(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xi.hasOwnProperty(e)&&xi[e]?(""+t).trim():t+"px"}function tp(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ep(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var wy=me({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Aa(e,t){if(t){if(wy[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Pa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Oa=null;function Qu(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Da=null,kr=null,Ir=null;function Ed(e){if(e=ss(e)){if(typeof Da!="function")throw Error(S(280));var t=e.stateNode;t&&(t=Bo(t),Da(e.stateNode,e.type,t))}}function np(e){kr?Ir?Ir.push(e):Ir=[e]:kr=e}function rp(){if(kr){var e=kr,t=Ir;if(Ir=kr=null,Ed(e),t)for(e=0;e<t.length;e++)Ed(t[e])}}function ip(e,t){return e(t)}function sp(){}var Ml=!1;function op(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return ip(e,t,n)}finally{Ml=!1,(kr!==null||Ir!==null)&&(sp(),rp())}}function bi(e,t){var n=e.stateNode;if(n===null)return null;var r=Bo(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var Ma=!1;if(en)try{var si={};Object.defineProperty(si,"passive",{get:function(){Ma=!0}}),window.addEventListener("test",si,si),window.removeEventListener("test",si,si)}catch{Ma=!1}function xy(e,t,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var Si=!1,qs=null,Js=!1,La=null,Sy={onError:function(e){Si=!0,qs=e}};function Cy(e,t,n,r,i,s,o,l,a){Si=!1,qs=null,xy.apply(Sy,arguments)}function Ey(e,t,n,r,i,s,o,l,a){if(Cy.apply(this,arguments),Si){if(Si){var u=qs;Si=!1,qs=null}else throw Error(S(198));Js||(Js=!0,La=u)}}function sr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function lp(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function kd(e){if(sr(e)!==e)throw Error(S(188))}function ky(e){var t=e.alternate;if(!t){if(t=sr(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return kd(i),e;if(s===r)return kd(i),t;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function ap(e){return e=ky(e),e!==null?up(e):null}function up(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=up(e);if(t!==null)return t;e=e.sibling}return null}var cp=ht.unstable_scheduleCallback,Id=ht.unstable_cancelCallback,Iy=ht.unstable_shouldYield,Ty=ht.unstable_requestPaint,ve=ht.unstable_now,Ny=ht.unstable_getCurrentPriorityLevel,Yu=ht.unstable_ImmediatePriority,dp=ht.unstable_UserBlockingPriority,Zs=ht.unstable_NormalPriority,Ry=ht.unstable_LowPriority,fp=ht.unstable_IdlePriority,Fo=null,Wt=null;function Ay(e){if(Wt&&typeof Wt.onCommitFiberRoot=="function")try{Wt.onCommitFiberRoot(Fo,e,void 0,(e.current.flags&128)===128)}catch{}}var Mt=Math.clz32?Math.clz32:Dy,Py=Math.log,Oy=Math.LN2;function Dy(e){return e>>>=0,e===0?32:31-(Py(e)/Oy|0)|0}var ys=64,_s=4194304;function vi(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function eo(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,s=e.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=vi(l):(s&=o,s!==0&&(r=vi(s)))}else o=n&~i,o!==0?r=vi(o):s!==0&&(r=vi(s));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Mt(t),i=1<<n,r|=e[n],t&=~i;return r}function My(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ly(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var o=31-Mt(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=My(l,t)):a<=t&&(e.expiredLanes|=l),s&=~l}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function hp(){var e=ys;return ys<<=1,!(ys&4194240)&&(ys=64),e}function Ll(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function rs(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Mt(t),e[t]=n}function by(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-Mt(n),s=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~s}}function Xu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Mt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var ee=0;function pp(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var mp,qu,gp,yp,_p,Fa=!1,vs=[],yn=null,_n=null,vn=null,Fi=new Map,zi=new Map,hn=[],Fy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Td(e,t){switch(e){case"focusin":case"focusout":yn=null;break;case"dragenter":case"dragleave":_n=null;break;case"mouseover":case"mouseout":vn=null;break;case"pointerover":case"pointerout":Fi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zi.delete(t.pointerId)}}function oi(e,t,n,r,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},t!==null&&(t=ss(t),t!==null&&qu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function zy(e,t,n,r,i){switch(t){case"focusin":return yn=oi(yn,e,t,n,r,i),!0;case"dragenter":return _n=oi(_n,e,t,n,r,i),!0;case"mouseover":return vn=oi(vn,e,t,n,r,i),!0;case"pointerover":var s=i.pointerId;return Fi.set(s,oi(Fi.get(s)||null,e,t,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,zi.set(s,oi(zi.get(s)||null,e,t,n,r,i)),!0}return!1}function vp(e){var t=jn(e.target);if(t!==null){var n=sr(t);if(n!==null){if(t=n.tag,t===13){if(t=lp(n),t!==null){e.blockedOn=t,_p(e.priority,function(){gp(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function zs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=za(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Oa=r,n.target.dispatchEvent(r),Oa=null}else return t=ss(n),t!==null&&qu(t),e.blockedOn=n,!1;t.shift()}return!0}function Nd(e,t,n){zs(e)&&n.delete(t)}function $y(){Fa=!1,yn!==null&&zs(yn)&&(yn=null),_n!==null&&zs(_n)&&(_n=null),vn!==null&&zs(vn)&&(vn=null),Fi.forEach(Nd),zi.forEach(Nd)}function li(e,t){e.blockedOn===t&&(e.blockedOn=null,Fa||(Fa=!0,ht.unstable_scheduleCallback(ht.unstable_NormalPriority,$y)))}function $i(e){function t(i){return li(i,e)}if(0<vs.length){li(vs[0],e);for(var n=1;n<vs.length;n++){var r=vs[n];r.blockedOn===e&&(r.blockedOn=null)}}for(yn!==null&&li(yn,e),_n!==null&&li(_n,e),vn!==null&&li(vn,e),Fi.forEach(t),zi.forEach(t),n=0;n<hn.length;n++)r=hn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<hn.length&&(n=hn[0],n.blockedOn===null);)vp(n),n.blockedOn===null&&hn.shift()}var Tr=ln.ReactCurrentBatchConfig,to=!0;function jy(e,t,n,r){var i=ee,s=Tr.transition;Tr.transition=null;try{ee=1,Ju(e,t,n,r)}finally{ee=i,Tr.transition=s}}function By(e,t,n,r){var i=ee,s=Tr.transition;Tr.transition=null;try{ee=4,Ju(e,t,n,r)}finally{ee=i,Tr.transition=s}}function Ju(e,t,n,r){if(to){var i=za(e,t,n,r);if(i===null)Vl(e,t,r,no,n),Td(e,r);else if(zy(i,e,t,n,r))r.stopPropagation();else if(Td(e,r),t&4&&-1<Fy.indexOf(e)){for(;i!==null;){var s=ss(i);if(s!==null&&mp(s),s=za(e,t,n,r),s===null&&Vl(e,t,r,no,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else Vl(e,t,r,null,n)}}var no=null;function za(e,t,n,r){if(no=null,e=Qu(r),e=jn(e),e!==null)if(t=sr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=lp(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return no=e,null}function wp(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ny()){case Yu:return 1;case dp:return 4;case Zs:case Ry:return 16;case fp:return 536870912;default:return 16}default:return 16}}var mn=null,Zu=null,$s=null;function xp(){if($s)return $s;var e,t=Zu,n=t.length,r,i="value"in mn?mn.value:mn.textContent,s=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[s-r];r++);return $s=i.slice(e,1<r?1-r:void 0)}function js(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ws(){return!0}function Rd(){return!1}function mt(e){function t(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ws:Rd,this.isPropagationStopped=Rd,this}return me(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ws)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ws)},persist:function(){},isPersistent:ws}),t}var Qr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ec=mt(Qr),is=me({},Qr,{view:0,detail:0}),Uy=mt(is),bl,Fl,ai,zo=me({},is,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ai&&(ai&&e.type==="mousemove"?(bl=e.screenX-ai.screenX,Fl=e.screenY-ai.screenY):Fl=bl=0,ai=e),bl)},movementY:function(e){return"movementY"in e?e.movementY:Fl}}),Ad=mt(zo),Wy=me({},zo,{dataTransfer:0}),Hy=mt(Wy),Vy=me({},is,{relatedTarget:0}),zl=mt(Vy),Gy=me({},Qr,{animationName:0,elapsedTime:0,pseudoElement:0}),Ky=mt(Gy),Qy=me({},Qr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Yy=mt(Qy),Xy=me({},Qr,{data:0}),Pd=mt(Xy),qy={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Zy={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e_(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Zy[e])?!!t[e]:!1}function tc(){return e_}var t_=me({},is,{key:function(e){if(e.key){var t=qy[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=js(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Jy[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(e){return e.type==="keypress"?js(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?js(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),n_=mt(t_),r_=me({},zo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Od=mt(r_),i_=me({},is,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),s_=mt(i_),o_=me({},Qr,{propertyName:0,elapsedTime:0,pseudoElement:0}),l_=mt(o_),a_=me({},zo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),u_=mt(a_),c_=[9,13,27,32],nc=en&&"CompositionEvent"in window,Ci=null;en&&"documentMode"in document&&(Ci=document.documentMode);var d_=en&&"TextEvent"in window&&!Ci,Sp=en&&(!nc||Ci&&8<Ci&&11>=Ci),Dd=String.fromCharCode(32),Md=!1;function Cp(e,t){switch(e){case"keyup":return c_.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ep(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var fr=!1;function f_(e,t){switch(e){case"compositionend":return Ep(t);case"keypress":return t.which!==32?null:(Md=!0,Dd);case"textInput":return e=t.data,e===Dd&&Md?null:e;default:return null}}function h_(e,t){if(fr)return e==="compositionend"||!nc&&Cp(e,t)?(e=xp(),$s=Zu=mn=null,fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Sp&&t.locale!=="ko"?null:t.data;default:return null}}var p_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ld(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!p_[e.type]:t==="textarea"}function kp(e,t,n,r){np(r),t=ro(t,"onChange"),0<t.length&&(n=new ec("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ei=null,ji=null;function m_(e){bp(e,0)}function $o(e){var t=mr(e);if(Yh(t))return e}function g_(e,t){if(e==="change")return t}var Ip=!1;if(en){var $l;if(en){var jl="oninput"in document;if(!jl){var bd=document.createElement("div");bd.setAttribute("oninput","return;"),jl=typeof bd.oninput=="function"}$l=jl}else $l=!1;Ip=$l&&(!document.documentMode||9<document.documentMode)}function Fd(){Ei&&(Ei.detachEvent("onpropertychange",Tp),ji=Ei=null)}function Tp(e){if(e.propertyName==="value"&&$o(ji)){var t=[];kp(t,ji,e,Qu(e)),op(m_,t)}}function y_(e,t,n){e==="focusin"?(Fd(),Ei=t,ji=n,Ei.attachEvent("onpropertychange",Tp)):e==="focusout"&&Fd()}function __(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return $o(ji)}function v_(e,t){if(e==="click")return $o(t)}function w_(e,t){if(e==="input"||e==="change")return $o(t)}function x_(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ft=typeof Object.is=="function"?Object.is:x_;function Bi(e,t){if(Ft(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!wa.call(t,i)||!Ft(e[i],t[i]))return!1}return!0}function zd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function $d(e,t){var n=zd(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zd(n)}}function Np(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Np(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Rp(){for(var e=window,t=Xs();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Xs(e.document)}return t}function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function S_(e){var t=Rp(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Np(n.ownerDocument.documentElement,n)){if(r!==null&&rc(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!e.extend&&s>r&&(i=r,r=s,s=i),i=$d(n,s);var o=$d(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var C_=en&&"documentMode"in document&&11>=document.documentMode,hr=null,$a=null,ki=null,ja=!1;function jd(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ja||hr==null||hr!==Xs(r)||(r=hr,"selectionStart"in r&&rc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ki&&Bi(ki,r)||(ki=r,r=ro($a,"onSelect"),0<r.length&&(t=new ec("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=hr)))}function xs(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var pr={animationend:xs("Animation","AnimationEnd"),animationiteration:xs("Animation","AnimationIteration"),animationstart:xs("Animation","AnimationStart"),transitionend:xs("Transition","TransitionEnd")},Bl={},Ap={};en&&(Ap=document.createElement("div").style,"AnimationEvent"in window||(delete pr.animationend.animation,delete pr.animationiteration.animation,delete pr.animationstart.animation),"TransitionEvent"in window||delete pr.transitionend.transition);function jo(e){if(Bl[e])return Bl[e];if(!pr[e])return e;var t=pr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Ap)return Bl[e]=t[n];return e}var Pp=jo("animationend"),Op=jo("animationiteration"),Dp=jo("animationstart"),Mp=jo("transitionend"),Lp=new Map,Bd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dn(e,t){Lp.set(e,t),ir(t,[e])}for(var Ul=0;Ul<Bd.length;Ul++){var Wl=Bd[Ul],E_=Wl.toLowerCase(),k_=Wl[0].toUpperCase()+Wl.slice(1);Dn(E_,"on"+k_)}Dn(Pp,"onAnimationEnd");Dn(Op,"onAnimationIteration");Dn(Dp,"onAnimationStart");Dn("dblclick","onDoubleClick");Dn("focusin","onFocus");Dn("focusout","onBlur");Dn(Mp,"onTransitionEnd");Mr("onMouseEnter",["mouseout","mouseover"]);Mr("onMouseLeave",["mouseout","mouseover"]);Mr("onPointerEnter",["pointerout","pointerover"]);Mr("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var wi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("cancel close invalid load scroll toggle".split(" ").concat(wi));function Ud(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Ey(r,t,void 0,e),e.currentTarget=null}function bp(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var s=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;Ud(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;Ud(i,l,u),s=a}}}if(Js)throw e=La,Js=!1,La=null,e}function le(e,t){var n=t[Va];n===void 0&&(n=t[Va]=new Set);var r=e+"__bubble";n.has(r)||(Fp(t,e,2,!1),n.add(r))}function Hl(e,t,n){var r=0;t&&(r|=4),Fp(n,e,r,t)}var Ss="_reactListening"+Math.random().toString(36).slice(2);function Ui(e){if(!e[Ss]){e[Ss]=!0,Hh.forEach(function(n){n!=="selectionchange"&&(I_.has(n)||Hl(n,!1,e),Hl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ss]||(t[Ss]=!0,Hl("selectionchange",!1,t))}}function Fp(e,t,n,r){switch(wp(t)){case 1:var i=jy;break;case 4:i=By;break;default:i=Ju}n=i.bind(null,t,n,e),i=void 0,!Ma||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vl(e,t,n,r,i){var s=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=jn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}op(function(){var u=s,d=Qu(n),c=[];e:{var h=Lp.get(e);if(h!==void 0){var v=ec,g=e;switch(e){case"keypress":if(js(n)===0)break e;case"keydown":case"keyup":v=n_;break;case"focusin":g="focus",v=zl;break;case"focusout":g="blur",v=zl;break;case"beforeblur":case"afterblur":v=zl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Hy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=s_;break;case Pp:case Op:case Dp:v=Ky;break;case Mp:v=l_;break;case"scroll":v=Uy;break;case"wheel":v=u_;break;case"copy":case"cut":case"paste":v=Yy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Od}var x=(t&4)!==0,T=!x&&e==="scroll",p=x?h!==null?h+"Capture":null:h;x=[];for(var f=u,m;f!==null;){m=f;var w=m.stateNode;if(m.tag===5&&w!==null&&(m=w,p!==null&&(w=bi(f,p),w!=null&&x.push(Wi(f,w,m)))),T)break;f=f.return}0<x.length&&(h=new v(h,g,null,n,d),c.push({event:h,listeners:x}))}}if(!(t&7)){e:{if(h=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",h&&n!==Oa&&(g=n.relatedTarget||n.fromElement)&&(jn(g)||g[tn]))break e;if((v||h)&&(h=d.window===d?d:(h=d.ownerDocument)?h.defaultView||h.parentWindow:window,v?(g=n.relatedTarget||n.toElement,v=u,g=g?jn(g):null,g!==null&&(T=sr(g),g!==T||g.tag!==5&&g.tag!==6)&&(g=null)):(v=null,g=u),v!==g)){if(x=Ad,w="onMouseLeave",p="onMouseEnter",f="mouse",(e==="pointerout"||e==="pointerover")&&(x=Od,w="onPointerLeave",p="onPointerEnter",f="pointer"),T=v==null?h:mr(v),m=g==null?h:mr(g),h=new x(w,f+"leave",v,n,d),h.target=T,h.relatedTarget=m,w=null,jn(d)===u&&(x=new x(p,f+"enter",g,n,d),x.target=m,x.relatedTarget=T,w=x),T=w,v&&g)t:{for(x=v,p=g,f=0,m=x;m;m=ar(m))f++;for(m=0,w=p;w;w=ar(w))m++;for(;0<f-m;)x=ar(x),f--;for(;0<m-f;)p=ar(p),m--;for(;f--;){if(x===p||p!==null&&x===p.alternate)break t;x=ar(x),p=ar(p)}x=null}else x=null;v!==null&&Wd(c,h,v,x,!1),g!==null&&T!==null&&Wd(c,T,g,x,!0)}}e:{if(h=u?mr(u):window,v=h.nodeName&&h.nodeName.toLowerCase(),v==="select"||v==="input"&&h.type==="file")var C=g_;else if(Ld(h))if(Ip)C=w_;else{C=__;var P=y_}else(v=h.nodeName)&&v.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=v_);if(C&&(C=C(e,u))){kp(c,C,n,d);break e}P&&P(e,h,u),e==="focusout"&&(P=h._wrapperState)&&P.controlled&&h.type==="number"&&Ta(h,"number",h.value)}switch(P=u?mr(u):window,e){case"focusin":(Ld(P)||P.contentEditable==="true")&&(hr=P,$a=u,ki=null);break;case"focusout":ki=$a=hr=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,jd(c,n,d);break;case"selectionchange":if(C_)break;case"keydown":case"keyup":jd(c,n,d)}var L;if(nc)e:{switch(e){case"compositionstart":var O="onCompositionStart";break e;case"compositionend":O="onCompositionEnd";break e;case"compositionupdate":O="onCompositionUpdate";break e}O=void 0}else fr?Cp(e,n)&&(O="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(O="onCompositionStart");O&&(Sp&&n.locale!=="ko"&&(fr||O!=="onCompositionStart"?O==="onCompositionEnd"&&fr&&(L=xp()):(mn=d,Zu="value"in mn?mn.value:mn.textContent,fr=!0)),P=ro(u,O),0<P.length&&(O=new Pd(O,e,null,n,d),c.push({event:O,listeners:P}),L?O.data=L:(L=Ep(n),L!==null&&(O.data=L)))),(L=d_?f_(e,n):h_(e,n))&&(u=ro(u,"onBeforeInput"),0<u.length&&(d=new Pd("onBeforeInput","beforeinput",null,n,d),c.push({event:d,listeners:u}),d.data=L))}bp(c,t)})}function Wi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function ro(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bi(e,n),s!=null&&r.unshift(Wi(e,s,i)),s=bi(e,t),s!=null&&r.push(Wi(e,s,i))),e=e.return}return r}function ar(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wd(e,t,n,r,i){for(var s=t._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=bi(n,s),a!=null&&o.unshift(Wi(n,a,l))):i||(a=bi(n,s),a!=null&&o.push(Wi(n,a,l)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var T_=/\r\n?/g,N_=/\u0000|\uFFFD/g;function Hd(e){return(typeof e=="string"?e:""+e).replace(T_,`
`).replace(N_,"")}function Cs(e,t,n){if(t=Hd(t),Hd(e)!==t&&n)throw Error(S(425))}function io(){}var Ba=null,Ua=null;function Wa(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Ha=typeof setTimeout=="function"?setTimeout:void 0,R_=typeof clearTimeout=="function"?clearTimeout:void 0,Vd=typeof Promise=="function"?Promise:void 0,A_=typeof queueMicrotask=="function"?queueMicrotask:typeof Vd<"u"?function(e){return Vd.resolve(null).then(e).catch(P_)}:Ha;function P_(e){setTimeout(function(){throw e})}function Gl(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),$i(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);$i(t)}function wn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yr=Math.random().toString(36).slice(2),jt="__reactFiber$"+Yr,Hi="__reactProps$"+Yr,tn="__reactContainer$"+Yr,Va="__reactEvents$"+Yr,O_="__reactListeners$"+Yr,D_="__reactHandles$"+Yr;function jn(e){var t=e[jt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[tn]||n[jt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gd(e);e!==null;){if(n=e[jt])return n;e=Gd(e)}return t}e=n,n=e.parentNode}return null}function ss(e){return e=e[jt]||e[tn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function mr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function Bo(e){return e[Hi]||null}var Ga=[],gr=-1;function Mn(e){return{current:e}}function ce(e){0>gr||(e.current=Ga[gr],Ga[gr]=null,gr--)}function oe(e,t){gr++,Ga[gr]=e.current,e.current=t}var Pn={},Qe=Mn(Pn),it=Mn(!1),Qn=Pn;function Lr(e,t){var n=e.type.contextTypes;if(!n)return Pn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=t[s];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function st(e){return e=e.childContextTypes,e!=null}function so(){ce(it),ce(Qe)}function Kd(e,t,n){if(Qe.current!==Pn)throw Error(S(168));oe(Qe,t),oe(it,n)}function zp(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,yy(e)||"Unknown",i));return me({},n,r)}function oo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pn,Qn=Qe.current,oe(Qe,e),oe(it,it.current),!0}function Qd(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=zp(e,t,Qn),r.__reactInternalMemoizedMergedChildContext=e,ce(it),ce(Qe),oe(Qe,e)):ce(it),oe(it,n)}var Qt=null,Uo=!1,Kl=!1;function $p(e){Qt===null?Qt=[e]:Qt.push(e)}function M_(e){Uo=!0,$p(e)}function Ln(){if(!Kl&&Qt!==null){Kl=!0;var e=0,t=ee;try{var n=Qt;for(ee=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Qt=null,Uo=!1}catch(i){throw Qt!==null&&(Qt=Qt.slice(e+1)),cp(Yu,Ln),i}finally{ee=t,Kl=!1}}return null}var yr=[],_r=0,lo=null,ao=0,_t=[],vt=0,Yn=null,Yt=1,Xt="";function bn(e,t){yr[_r++]=ao,yr[_r++]=lo,lo=e,ao=t}function jp(e,t,n){_t[vt++]=Yt,_t[vt++]=Xt,_t[vt++]=Yn,Yn=e;var r=Yt;e=Xt;var i=32-Mt(r)-1;r&=~(1<<i),n+=1;var s=32-Mt(t)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Yt=1<<32-Mt(t)+i|n<<i|r,Xt=s+e}else Yt=1<<s|n<<i|r,Xt=e}function ic(e){e.return!==null&&(bn(e,1),jp(e,1,0))}function sc(e){for(;e===lo;)lo=yr[--_r],yr[_r]=null,ao=yr[--_r],yr[_r]=null;for(;e===Yn;)Yn=_t[--vt],_t[vt]=null,Xt=_t[--vt],_t[vt]=null,Yt=_t[--vt],_t[vt]=null}var ft=null,ct=null,fe=!1,Pt=null;function Bp(e,t){var n=wt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Yd(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ft=e,ct=wn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ft=e,ct=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Yn!==null?{id:Yt,overflow:Xt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=wt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,ft=e,ct=null,!0):!1;default:return!1}}function Ka(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Qa(e){if(fe){var t=ct;if(t){var n=t;if(!Yd(e,t)){if(Ka(e))throw Error(S(418));t=wn(n.nextSibling);var r=ft;t&&Yd(e,t)?Bp(r,n):(e.flags=e.flags&-4097|2,fe=!1,ft=e)}}else{if(Ka(e))throw Error(S(418));e.flags=e.flags&-4097|2,fe=!1,ft=e}}}function Xd(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ft=e}function Es(e){if(e!==ft)return!1;if(!fe)return Xd(e),fe=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Wa(e.type,e.memoizedProps)),t&&(t=ct)){if(Ka(e))throw Up(),Error(S(418));for(;t;)Bp(e,t),t=wn(t.nextSibling)}if(Xd(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){ct=wn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}ct=null}}else ct=ft?wn(e.stateNode.nextSibling):null;return!0}function Up(){for(var e=ct;e;)e=wn(e.nextSibling)}function br(){ct=ft=null,fe=!1}function oc(e){Pt===null?Pt=[e]:Pt.push(e)}var L_=ln.ReactCurrentBatchConfig;function Rt(e,t){if(e&&e.defaultProps){t=me({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var uo=Mn(null),co=null,vr=null,lc=null;function ac(){lc=vr=co=null}function uc(e){var t=uo.current;ce(uo),e._currentValue=t}function Ya(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Nr(e,t){co=e,lc=vr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nt=!0),e.firstContext=null)}function Ct(e){var t=e._currentValue;if(lc!==e)if(e={context:e,memoizedValue:t,next:null},vr===null){if(co===null)throw Error(S(308));vr=e,co.dependencies={lanes:0,firstContext:e}}else vr=vr.next=e;return t}var Bn=null;function cc(e){Bn===null?Bn=[e]:Bn.push(e)}function Wp(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,cc(t)):(n.next=i.next,i.next=n),t.interleaved=n,nn(e,r)}function nn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var fn=!1;function dc(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Hp(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Jt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function xn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,nn(e,n)}return i=r.interleaved,i===null?(t.next=t,cc(r)):(t.next=i.next,i.next=t),r.interleaved=t,nn(e,n)}function Bs(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}function qd(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=t:s=s.next=t}else i=s=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function fo(e,t,n,r){var i=e.updateQueue;fn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==o&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=a))}if(s!==null){var c=i.baseState;o=0,d=u=a=null,l=s;do{var h=l.lane,v=l.eventTime;if((r&h)===h){d!==null&&(d=d.next={eventTime:v,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var g=e,x=l;switch(h=t,v=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){c=g.call(v,c,h);break e}c=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(v,c,h):g,h==null)break e;c=me({},c,h);break e;case 2:fn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else v={eventTime:v,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=v,a=c):d=d.next=v,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(d===null&&(a=c),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);qn|=o,e.lanes=o,e.memoizedState=c}}function Jd(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Vp=new Wh.Component().refs;function Xa(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:me({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Wo={isMounted:function(e){return(e=e._reactInternals)?sr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Cn(e),s=Jt(r,i);s.payload=t,n!=null&&(s.callback=n),t=xn(e,s,i),t!==null&&(Lt(t,e,i,r),Bs(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=qe(),i=Cn(e),s=Jt(r,i);s.tag=1,s.payload=t,n!=null&&(s.callback=n),t=xn(e,s,i),t!==null&&(Lt(t,e,i,r),Bs(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=qe(),r=Cn(e),i=Jt(n,r);i.tag=2,t!=null&&(i.callback=t),t=xn(e,i,r),t!==null&&(Lt(t,e,r,n),Bs(t,e,r))}};function Zd(e,t,n,r,i,s,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,s,o):t.prototype&&t.prototype.isPureReactComponent?!Bi(n,r)||!Bi(i,s):!0}function Gp(e,t,n){var r=!1,i=Pn,s=t.contextType;return typeof s=="object"&&s!==null?s=Ct(s):(i=st(t)?Qn:Qe.current,r=t.contextTypes,s=(r=r!=null)?Lr(e,i):Pn),t=new t(n,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Wo,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function ef(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Wo.enqueueReplaceState(t,t.state,null)}function qa(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Vp,dc(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=Ct(s):(s=st(t)?Qn:Qe.current,i.context=Lr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(Xa(e,t,s,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Wo.enqueueReplaceState(i,i.state,null),fo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function ui(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(o){var l=i.refs;l===Vp&&(l=i.refs={}),o===null?delete l[s]:l[s]=o},t._stringRef=s,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ks(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function tf(e){var t=e._init;return t(e._payload)}function Kp(e){function t(p,f){if(e){var m=p.deletions;m===null?(p.deletions=[f],p.flags|=16):m.push(f)}}function n(p,f){if(!e)return null;for(;f!==null;)t(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=En(p,f),p.index=0,p.sibling=null,p}function s(p,f,m){return p.index=m,e?(m=p.alternate,m!==null?(m=m.index,m<f?(p.flags|=2,f):m):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return e&&p.alternate===null&&(p.flags|=2),p}function l(p,f,m,w){return f===null||f.tag!==6?(f=ea(m,p.mode,w),f.return=p,f):(f=i(f,m),f.return=p,f)}function a(p,f,m,w){var C=m.type;return C===dr?d(p,f,m.props.children,w,m.key):f!==null&&(f.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&tf(C)===f.type)?(w=i(f,m.props),w.ref=ui(p,f,m),w.return=p,w):(w=Ks(m.type,m.key,m.props,null,p.mode,w),w.ref=ui(p,f,m),w.return=p,w)}function u(p,f,m,w){return f===null||f.tag!==4||f.stateNode.containerInfo!==m.containerInfo||f.stateNode.implementation!==m.implementation?(f=ta(m,p.mode,w),f.return=p,f):(f=i(f,m.children||[]),f.return=p,f)}function d(p,f,m,w,C){return f===null||f.tag!==7?(f=Gn(m,p.mode,w,C),f.return=p,f):(f=i(f,m),f.return=p,f)}function c(p,f,m){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ea(""+f,p.mode,m),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case ps:return m=Ks(f.type,f.key,f.props,null,p.mode,m),m.ref=ui(p,null,f),m.return=p,m;case cr:return f=ta(f,p.mode,m),f.return=p,f;case dn:var w=f._init;return c(p,w(f._payload),m)}if(_i(f)||ii(f))return f=Gn(f,p.mode,m,null),f.return=p,f;ks(p,f)}return null}function h(p,f,m,w){var C=f!==null?f.key:null;if(typeof m=="string"&&m!==""||typeof m=="number")return C!==null?null:l(p,f,""+m,w);if(typeof m=="object"&&m!==null){switch(m.$$typeof){case ps:return m.key===C?a(p,f,m,w):null;case cr:return m.key===C?u(p,f,m,w):null;case dn:return C=m._init,h(p,f,C(m._payload),w)}if(_i(m)||ii(m))return C!==null?null:d(p,f,m,w,null);ks(p,m)}return null}function v(p,f,m,w,C){if(typeof w=="string"&&w!==""||typeof w=="number")return p=p.get(m)||null,l(f,p,""+w,C);if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ps:return p=p.get(w.key===null?m:w.key)||null,a(f,p,w,C);case cr:return p=p.get(w.key===null?m:w.key)||null,u(f,p,w,C);case dn:var P=w._init;return v(p,f,m,P(w._payload),C)}if(_i(w)||ii(w))return p=p.get(m)||null,d(f,p,w,C,null);ks(f,w)}return null}function g(p,f,m,w){for(var C=null,P=null,L=f,O=f=0,Q=null;L!==null&&O<m.length;O++){L.index>O?(Q=L,L=null):Q=L.sibling;var $=h(p,L,m[O],w);if($===null){L===null&&(L=Q);break}e&&L&&$.alternate===null&&t(p,L),f=s($,f,O),P===null?C=$:P.sibling=$,P=$,L=Q}if(O===m.length)return n(p,L),fe&&bn(p,O),C;if(L===null){for(;O<m.length;O++)L=c(p,m[O],w),L!==null&&(f=s(L,f,O),P===null?C=L:P.sibling=L,P=L);return fe&&bn(p,O),C}for(L=r(p,L);O<m.length;O++)Q=v(L,p,O,m[O],w),Q!==null&&(e&&Q.alternate!==null&&L.delete(Q.key===null?O:Q.key),f=s(Q,f,O),P===null?C=Q:P.sibling=Q,P=Q);return e&&L.forEach(function(Ie){return t(p,Ie)}),fe&&bn(p,O),C}function x(p,f,m,w){var C=ii(m);if(typeof C!="function")throw Error(S(150));if(m=C.call(m),m==null)throw Error(S(151));for(var P=C=null,L=f,O=f=0,Q=null,$=m.next();L!==null&&!$.done;O++,$=m.next()){L.index>O?(Q=L,L=null):Q=L.sibling;var Ie=h(p,L,$.value,w);if(Ie===null){L===null&&(L=Q);break}e&&L&&Ie.alternate===null&&t(p,L),f=s(Ie,f,O),P===null?C=Ie:P.sibling=Ie,P=Ie,L=Q}if($.done)return n(p,L),fe&&bn(p,O),C;if(L===null){for(;!$.done;O++,$=m.next())$=c(p,$.value,w),$!==null&&(f=s($,f,O),P===null?C=$:P.sibling=$,P=$);return fe&&bn(p,O),C}for(L=r(p,L);!$.done;O++,$=m.next())$=v(L,p,O,$.value,w),$!==null&&(e&&$.alternate!==null&&L.delete($.key===null?O:$.key),f=s($,f,O),P===null?C=$:P.sibling=$,P=$);return e&&L.forEach(function(Se){return t(p,Se)}),fe&&bn(p,O),C}function T(p,f,m,w){if(typeof m=="object"&&m!==null&&m.type===dr&&m.key===null&&(m=m.props.children),typeof m=="object"&&m!==null){switch(m.$$typeof){case ps:e:{for(var C=m.key,P=f;P!==null;){if(P.key===C){if(C=m.type,C===dr){if(P.tag===7){n(p,P.sibling),f=i(P,m.props.children),f.return=p,p=f;break e}}else if(P.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===dn&&tf(C)===P.type){n(p,P.sibling),f=i(P,m.props),f.ref=ui(p,P,m),f.return=p,p=f;break e}n(p,P);break}else t(p,P);P=P.sibling}m.type===dr?(f=Gn(m.props.children,p.mode,w,m.key),f.return=p,p=f):(w=Ks(m.type,m.key,m.props,null,p.mode,w),w.ref=ui(p,f,m),w.return=p,p=w)}return o(p);case cr:e:{for(P=m.key;f!==null;){if(f.key===P)if(f.tag===4&&f.stateNode.containerInfo===m.containerInfo&&f.stateNode.implementation===m.implementation){n(p,f.sibling),f=i(f,m.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else t(p,f);f=f.sibling}f=ta(m,p.mode,w),f.return=p,p=f}return o(p);case dn:return P=m._init,T(p,f,P(m._payload),w)}if(_i(m))return g(p,f,m,w);if(ii(m))return x(p,f,m,w);ks(p,m)}return typeof m=="string"&&m!==""||typeof m=="number"?(m=""+m,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,m),f.return=p,p=f):(n(p,f),f=ea(m,p.mode,w),f.return=p,p=f),o(p)):n(p,f)}return T}var Fr=Kp(!0),Qp=Kp(!1),os={},Ht=Mn(os),Vi=Mn(os),Gi=Mn(os);function Un(e){if(e===os)throw Error(S(174));return e}function fc(e,t){switch(oe(Gi,t),oe(Vi,e),oe(Ht,os),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ra(t,e)}ce(Ht),oe(Ht,t)}function zr(){ce(Ht),ce(Vi),ce(Gi)}function Yp(e){Un(Gi.current);var t=Un(Ht.current),n=Ra(t,e.type);t!==n&&(oe(Vi,e),oe(Ht,n))}function hc(e){Vi.current===e&&(ce(Ht),ce(Vi))}var he=Mn(0);function ho(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ql=[];function pc(){for(var e=0;e<Ql.length;e++)Ql[e]._workInProgressVersionPrimary=null;Ql.length=0}var Us=ln.ReactCurrentDispatcher,Yl=ln.ReactCurrentBatchConfig,Xn=0,pe=null,Ce=null,Ne=null,po=!1,Ii=!1,Ki=0,b_=0;function We(){throw Error(S(321))}function mc(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ft(e[n],t[n]))return!1;return!0}function gc(e,t,n,r,i,s){if(Xn=s,pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Us.current=e===null||e.memoizedState===null?j_:B_,e=n(r,i),Ii){s=0;do{if(Ii=!1,Ki=0,25<=s)throw Error(S(301));s+=1,Ne=Ce=null,t.updateQueue=null,Us.current=U_,e=n(r,i)}while(Ii)}if(Us.current=mo,t=Ce!==null&&Ce.next!==null,Xn=0,Ne=Ce=pe=null,po=!1,t)throw Error(S(300));return e}function yc(){var e=Ki!==0;return Ki=0,e}function $t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ne===null?pe.memoizedState=Ne=e:Ne=Ne.next=e,Ne}function Et(){if(Ce===null){var e=pe.alternate;e=e!==null?e.memoizedState:null}else e=Ce.next;var t=Ne===null?pe.memoizedState:Ne.next;if(t!==null)Ne=t,Ce=e;else{if(e===null)throw Error(S(310));Ce=e,e={memoizedState:Ce.memoizedState,baseState:Ce.baseState,baseQueue:Ce.baseQueue,queue:Ce.queue,next:null},Ne===null?pe.memoizedState=Ne=e:Ne=Ne.next=e}return Ne}function Qi(e,t){return typeof t=="function"?t(e):t}function Xl(e){var t=Et(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=Ce,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var d=u.lane;if((Xn&d)===d)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var c={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=c,o=r):a=a.next=c,pe.lanes|=d,qn|=d}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,Ft(r,t.memoizedState)||(nt=!0),t.memoizedState=r,t.baseState=o,t.baseQueue=a,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do s=i.lane,pe.lanes|=s,qn|=s,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=Et(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,s=t.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=e(s,o.action),o=o.next;while(o!==i);Ft(s,t.memoizedState)||(nt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),n.lastRenderedState=s}return[s,r]}function Xp(){}function qp(e,t){var n=pe,r=Et(),i=t(),s=!Ft(r.memoizedState,i);if(s&&(r.memoizedState=i,nt=!0),r=r.queue,_c(em.bind(null,n,r,e),[e]),r.getSnapshot!==t||s||Ne!==null&&Ne.memoizedState.tag&1){if(n.flags|=2048,Yi(9,Zp.bind(null,n,r,i,t),void 0,null),Ae===null)throw Error(S(349));Xn&30||Jp(n,t,i)}return i}function Jp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Zp(e,t,n,r){t.value=n,t.getSnapshot=r,tm(t)&&nm(e)}function em(e,t,n){return n(function(){tm(t)&&nm(e)})}function tm(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ft(e,n)}catch{return!0}}function nm(e){var t=nn(e,1);t!==null&&Lt(t,e,1,-1)}function nf(e){var t=$t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Qi,lastRenderedState:e},t.queue=e,e=e.dispatch=$_.bind(null,pe,e),[t.memoizedState,e]}function Yi(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=pe.updateQueue,t===null?(t={lastEffect:null,stores:null},pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function rm(){return Et().memoizedState}function Ws(e,t,n,r){var i=$t();pe.flags|=e,i.memoizedState=Yi(1|t,n,void 0,r===void 0?null:r)}function Ho(e,t,n,r){var i=Et();r=r===void 0?null:r;var s=void 0;if(Ce!==null){var o=Ce.memoizedState;if(s=o.destroy,r!==null&&mc(r,o.deps)){i.memoizedState=Yi(t,n,s,r);return}}pe.flags|=e,i.memoizedState=Yi(1|t,n,s,r)}function rf(e,t){return Ws(8390656,8,e,t)}function _c(e,t){return Ho(2048,8,e,t)}function im(e,t){return Ho(4,2,e,t)}function sm(e,t){return Ho(4,4,e,t)}function om(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function lm(e,t,n){return n=n!=null?n.concat([e]):null,Ho(4,4,om.bind(null,t,e),n)}function vc(){}function am(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function um(e,t){var n=Et();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&mc(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cm(e,t,n){return Xn&21?(Ft(n,t)||(n=hp(),pe.lanes|=n,qn|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nt=!0),e.memoizedState=n)}function F_(e,t){var n=ee;ee=n!==0&&4>n?n:4,e(!0);var r=Yl.transition;Yl.transition={};try{e(!1),t()}finally{ee=n,Yl.transition=r}}function dm(){return Et().memoizedState}function z_(e,t,n){var r=Cn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},fm(e))hm(t,n);else if(n=Wp(e,t,n,r),n!==null){var i=qe();Lt(n,e,r,i),pm(n,t,r)}}function $_(e,t,n){var r=Cn(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(fm(e))hm(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var o=t.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,Ft(l,o)){var a=t.interleaved;a===null?(i.next=i,cc(t)):(i.next=a.next,a.next=i),t.interleaved=i;return}}catch{}finally{}n=Wp(e,t,i,r),n!==null&&(i=qe(),Lt(n,e,r,i),pm(n,t,r))}}function fm(e){var t=e.alternate;return e===pe||t!==null&&t===pe}function hm(e,t){Ii=po=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function pm(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Xu(e,n)}}var mo={readContext:Ct,useCallback:We,useContext:We,useEffect:We,useImperativeHandle:We,useInsertionEffect:We,useLayoutEffect:We,useMemo:We,useReducer:We,useRef:We,useState:We,useDebugValue:We,useDeferredValue:We,useTransition:We,useMutableSource:We,useSyncExternalStore:We,useId:We,unstable_isNewReconciler:!1},j_={readContext:Ct,useCallback:function(e,t){return $t().memoizedState=[e,t===void 0?null:t],e},useContext:Ct,useEffect:rf,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Ws(4194308,4,om.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ws(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ws(4,2,e,t)},useMemo:function(e,t){var n=$t();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=$t();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=z_.bind(null,pe,e),[r.memoizedState,e]},useRef:function(e){var t=$t();return e={current:e},t.memoizedState=e},useState:nf,useDebugValue:vc,useDeferredValue:function(e){return $t().memoizedState=e},useTransition:function(){var e=nf(!1),t=e[0];return e=F_.bind(null,e[1]),$t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=pe,i=$t();if(fe){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),Ae===null)throw Error(S(349));Xn&30||Jp(r,t,n)}i.memoizedState=n;var s={value:n,getSnapshot:t};return i.queue=s,rf(em.bind(null,r,s,e),[e]),r.flags|=2048,Yi(9,Zp.bind(null,r,s,n,t),void 0,null),n},useId:function(){var e=$t(),t=Ae.identifierPrefix;if(fe){var n=Xt,r=Yt;n=(r&~(1<<32-Mt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ki++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=b_++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},B_={readContext:Ct,useCallback:am,useContext:Ct,useEffect:_c,useImperativeHandle:lm,useInsertionEffect:im,useLayoutEffect:sm,useMemo:um,useReducer:Xl,useRef:rm,useState:function(){return Xl(Qi)},useDebugValue:vc,useDeferredValue:function(e){var t=Et();return cm(t,Ce.memoizedState,e)},useTransition:function(){var e=Xl(Qi)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:qp,useId:dm,unstable_isNewReconciler:!1},U_={readContext:Ct,useCallback:am,useContext:Ct,useEffect:_c,useImperativeHandle:lm,useInsertionEffect:im,useLayoutEffect:sm,useMemo:um,useReducer:ql,useRef:rm,useState:function(){return ql(Qi)},useDebugValue:vc,useDeferredValue:function(e){var t=Et();return Ce===null?t.memoizedState=e:cm(t,Ce.memoizedState,e)},useTransition:function(){var e=ql(Qi)[0],t=Et().memoizedState;return[e,t]},useMutableSource:Xp,useSyncExternalStore:qp,useId:dm,unstable_isNewReconciler:!1};function $r(e,t){try{var n="",r=t;do n+=gy(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function Jl(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ja(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var W_=typeof WeakMap=="function"?WeakMap:Map;function mm(e,t,n){n=Jt(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){yo||(yo=!0,au=r),Ja(e,t)},n}function gm(e,t,n){n=Jt(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Ja(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ja(e,t),typeof r!="function"&&(Sn===null?Sn=new Set([this]):Sn.add(this));var o=t.stack;this.componentDidCatch(t.value,{componentStack:o!==null?o:""})}),n}function sf(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new W_;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=rv.bind(null,e,t,n),t.then(e,e))}function of(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function lf(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Jt(-1,1),t.tag=2,xn(n,t,1))),n.lanes|=1),e)}var H_=ln.ReactCurrentOwner,nt=!1;function Xe(e,t,n,r){t.child=e===null?Qp(t,null,n,r):Fr(t,e.child,n,r)}function af(e,t,n,r,i){n=n.render;var s=t.ref;return Nr(t,i),r=gc(e,t,n,r,s,i),n=yc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(fe&&n&&ic(t),t.flags|=1,Xe(e,t,r,i),t.child)}function uf(e,t,n,r,i){if(e===null){var s=n.type;return typeof s=="function"&&!Tc(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=s,ym(e,t,s,r,i)):(e=Ks(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,!(e.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Bi,n(o,r)&&e.ref===t.ref)return rn(e,t,i)}return t.flags|=1,e=En(s,r),e.ref=t.ref,e.return=t,t.child=e}function ym(e,t,n,r,i){if(e!==null){var s=e.memoizedProps;if(Bi(s,r)&&e.ref===t.ref)if(nt=!1,t.pendingProps=r=s,(e.lanes&i)!==0)e.flags&131072&&(nt=!0);else return t.lanes=e.lanes,rn(e,t,i)}return Za(e,t,n,r,i)}function _m(e,t,n){var r=t.pendingProps,i=r.children,s=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},oe(xr,ut),ut|=n;else{if(!(n&1073741824))return e=s!==null?s.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,oe(xr,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,oe(xr,ut),ut|=r}else s!==null?(r=s.baseLanes|n,t.memoizedState=null):r=n,oe(xr,ut),ut|=r;return Xe(e,t,i,n),t.child}function vm(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Za(e,t,n,r,i){var s=st(n)?Qn:Qe.current;return s=Lr(t,s),Nr(t,i),n=gc(e,t,n,r,s,i),r=yc(),e!==null&&!nt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,rn(e,t,i)):(fe&&r&&ic(t),t.flags|=1,Xe(e,t,n,i),t.child)}function cf(e,t,n,r,i){if(st(n)){var s=!0;oo(t)}else s=!1;if(Nr(t,i),t.stateNode===null)Hs(e,t),Gp(t,n,r),qa(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,l=t.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ct(u):(u=st(n)?Qn:Qe.current,u=Lr(t,u));var d=n.getDerivedStateFromProps,c=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";c||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&ef(t,o,r,u),fn=!1;var h=t.memoizedState;o.state=h,fo(t,r,o,i),a=t.memoizedState,l!==r||h!==a||it.current||fn?(typeof d=="function"&&(Xa(t,n,d,r),a=t.memoizedState),(l=fn||Zd(t,n,l,r,h,a,u))?(c||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(t.flags|=4194308)):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Hp(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Rt(t.type,l),o.props=u,c=t.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=Ct(a):(a=st(n)?Qn:Qe.current,a=Lr(t,a));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==c||h!==a)&&ef(t,o,r,a),fn=!1,h=t.memoizedState,o.state=h,fo(t,r,o,i);var g=t.memoizedState;l!==c||h!==g||it.current||fn?(typeof v=="function"&&(Xa(t,n,v,r),g=t.memoizedState),(u=fn||Zd(t,n,u,r,h,g,a)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,a)),typeof o.componentDidUpdate=="function"&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=g),o.props=r,o.state=g,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return eu(e,t,n,r,s,i)}function eu(e,t,n,r,i,s){vm(e,t);var o=(t.flags&128)!==0;if(!r&&!o)return i&&Qd(t,n,!1),rn(e,t,s);r=t.stateNode,H_.current=t;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Fr(t,e.child,null,s),t.child=Fr(t,null,l,s)):Xe(e,t,l,s),t.memoizedState=r.state,i&&Qd(t,n,!0),t.child}function wm(e){var t=e.stateNode;t.pendingContext?Kd(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Kd(e,t.context,!1),fc(e,t.containerInfo)}function df(e,t,n,r,i){return br(),oc(i),t.flags|=256,Xe(e,t,n,r),t.child}var tu={dehydrated:null,treeContext:null,retryLane:0};function nu(e){return{baseLanes:e,cachePool:null,transitions:null}}function xm(e,t,n){var r=t.pendingProps,i=he.current,s=!1,o=(t.flags&128)!==0,l;if((l=o)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),oe(he,i&1),e===null)return Qa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,s?(r=t.mode,s=t.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ko(o,r,0,null),e=Gn(e,r,n,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=nu(n),t.memoizedState=tu,e):wc(t,o));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return V_(e,t,o,r,l,i,n);if(s){s=r.fallback,o=t.mode,i=e.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=a,t.deletions=null):(r=En(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=En(l,s):(s=Gn(s,o,n,null),s.flags|=2),s.return=t,r.return=t,r.sibling=s,t.child=r,r=s,s=t.child,o=e.child.memoizedState,o=o===null?nu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=e.childLanes&~n,t.memoizedState=tu,r}return s=e.child,e=s.sibling,r=En(s,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function wc(e,t){return t=Ko({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Is(e,t,n,r){return r!==null&&oc(r),Fr(t,e.child,null,n),e=wc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function V_(e,t,n,r,i,s,o){if(n)return t.flags&256?(t.flags&=-257,r=Jl(Error(S(422))),Is(e,t,o,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=r.fallback,i=t.mode,r=Ko({mode:"visible",children:r.children},i,0,null),s=Gn(s,i,o,null),s.flags|=2,r.return=t,s.return=t,r.sibling=s,t.child=r,t.mode&1&&Fr(t,e.child,null,o),t.child.memoizedState=nu(o),t.memoizedState=tu,s);if(!(t.mode&1))return Is(e,t,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=Jl(s,r,void 0),Is(e,t,o,r)}if(l=(o&e.childLanes)!==0,nt||l){if(r=Ae,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,nn(e,i),Lt(r,e,i,-1))}return Ic(),r=Jl(Error(S(421))),Is(e,t,o,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=iv.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,ct=wn(i.nextSibling),ft=t,fe=!0,Pt=null,e!==null&&(_t[vt++]=Yt,_t[vt++]=Xt,_t[vt++]=Yn,Yt=e.id,Xt=e.overflow,Yn=t),t=wc(t,r.children),t.flags|=4096,t)}function ff(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ya(e.return,t,n)}function Zl(e,t,n,r,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Sm(e,t,n){var r=t.pendingProps,i=r.revealOrder,s=r.tail;if(Xe(e,t,r.children,n),r=he.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&ff(e,n,t);else if(e.tag===19)ff(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(oe(he,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&ho(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Zl(t,!1,i,n,s);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&ho(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Zl(t,!0,n,null,s);break;case"together":Zl(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hs(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function rn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),qn|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=En(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=En(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function G_(e,t,n){switch(t.tag){case 3:wm(t),br();break;case 5:Yp(t);break;case 1:st(t.type)&&oo(t);break;case 4:fc(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;oe(uo,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(oe(he,he.current&1),t.flags|=128,null):n&t.child.childLanes?xm(e,t,n):(oe(he,he.current&1),e=rn(e,t,n),e!==null?e.sibling:null);oe(he,he.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Sm(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),oe(he,he.current),r)break;return null;case 22:case 23:return t.lanes=0,_m(e,t,n)}return rn(e,t,n)}var Cm,ru,Em,km;Cm=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ru=function(){};Em=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,Un(Ht.current);var s=null;switch(n){case"input":i=ka(e,i),r=ka(e,r),s=[];break;case"select":i=me({},i,{value:void 0}),r=me({},r,{value:void 0}),s=[];break;case"textarea":i=Na(e,i),r=Na(e,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=io)}Aa(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Mi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Mi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&le("scroll",e),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(t.updateQueue=u)&&(t.flags|=4)}};km=function(e,t,n,r){n!==r&&(t.flags|=4)};function ci(e,t){if(!fe)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function K_(e,t,n){var r=t.pendingProps;switch(sc(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return st(t.type)&&so(),He(t),null;case 3:return r=t.stateNode,zr(),ce(it),ce(Qe),pc(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Es(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Pt!==null&&(du(Pt),Pt=null))),ru(e,t),He(t),null;case 5:hc(t);var i=Un(Gi.current);if(n=t.type,e!==null&&t.stateNode!=null)Em(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return He(t),null}if(e=Un(Ht.current),Es(t)){r=t.stateNode,n=t.type;var s=t.memoizedProps;switch(r[jt]=t,r[Hi]=s,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(i=0;i<wi.length;i++)le(wi[i],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":wd(r,s),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},le("invalid",r);break;case"textarea":Sd(r,s),le("invalid",r)}Aa(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Cs(r.textContent,l,e),i=["children",""+l]):Mi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&le("scroll",r)}switch(n){case"input":ms(r),xd(r,s,!0);break;case"textarea":ms(r),Cd(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=io)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Jh(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=o.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=o.createElement(n,{is:r.is}):(e=o.createElement(n),n==="select"&&(o=e,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):e=o.createElementNS(e,n),e[jt]=t,e[Hi]=r,Cm(e,t,!1,!1),t.stateNode=e;e:{switch(o=Pa(n,r),n){case"dialog":le("cancel",e),le("close",e),i=r;break;case"iframe":case"object":case"embed":le("load",e),i=r;break;case"video":case"audio":for(i=0;i<wi.length;i++)le(wi[i],e);i=r;break;case"source":le("error",e),i=r;break;case"img":case"image":case"link":le("error",e),le("load",e),i=r;break;case"details":le("toggle",e),i=r;break;case"input":wd(e,r),i=ka(e,r),le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=me({},r,{value:void 0}),le("invalid",e);break;case"textarea":Sd(e,r),i=Na(e,r),le("invalid",e);break;default:i=r}Aa(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?tp(e,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Zh(e,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Li(e,a):typeof a=="number"&&Li(e,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&le("scroll",e):a!=null&&Hu(e,s,a,o))}switch(n){case"input":ms(e),xd(e,r,!1);break;case"textarea":ms(e),Cd(e);break;case"option":r.value!=null&&e.setAttribute("value",""+An(r.value));break;case"select":e.multiple=!!r.multiple,s=r.value,s!=null?Er(e,!!r.multiple,s,!1):r.defaultValue!=null&&Er(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=io)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)km(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=Un(Gi.current),Un(Ht.current),Es(t)){if(r=t.stateNode,n=t.memoizedProps,r[jt]=t,(s=r.nodeValue!==n)&&(e=ft,e!==null))switch(e.tag){case 3:Cs(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Cs(r.nodeValue,n,(e.mode&1)!==0)}s&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[jt]=t,t.stateNode=r}return He(t),null;case 13:if(ce(he),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(fe&&ct!==null&&t.mode&1&&!(t.flags&128))Up(),br(),t.flags|=98560,s=!1;else if(s=Es(t),r!==null&&r.dehydrated!==null){if(e===null){if(!s)throw Error(S(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[jt]=t}else br(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;He(t),s=!1}else Pt!==null&&(du(Pt),Pt=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||he.current&1?ke===0&&(ke=3):Ic())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return zr(),ru(e,t),e===null&&Ui(t.stateNode.containerInfo),He(t),null;case 10:return uc(t.type._context),He(t),null;case 17:return st(t.type)&&so(),He(t),null;case 19:if(ce(he),s=t.memoizedState,s===null)return He(t),null;if(r=(t.flags&128)!==0,o=s.rendering,o===null)if(r)ci(s,!1);else{if(ke!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=ho(e),o!==null){for(t.flags|=128,ci(s,!1),r=o.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)s=n,e=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,e=o.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return oe(he,he.current&1|2),t.child}e=e.sibling}s.tail!==null&&ve()>jr&&(t.flags|=128,r=!0,ci(s,!1),t.lanes=4194304)}else{if(!r)if(e=ho(o),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),ci(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!fe)return He(t),null}else 2*ve()-s.renderingStartTime>jr&&n!==1073741824&&(t.flags|=128,r=!0,ci(s,!1),t.lanes=4194304);s.isBackwards?(o.sibling=t.child,t.child=o):(n=s.last,n!==null?n.sibling=o:t.child=o,s.last=o)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ve(),t.sibling=null,n=he.current,oe(he,r?n&1|2:n&1),t):(He(t),null);case 22:case 23:return kc(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?ut&1073741824&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function Q_(e,t){switch(sc(t),t.tag){case 1:return st(t.type)&&so(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return zr(),ce(it),ce(Qe),pc(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return hc(t),null;case 13:if(ce(he),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));br()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ce(he),null;case 4:return zr(),null;case 10:return uc(t.type._context),null;case 22:case 23:return kc(),null;case 24:return null;default:return null}}var Ts=!1,Ve=!1,Y_=typeof WeakSet=="function"?WeakSet:Set,M=null;function wr(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ye(e,t,r)}else n.current=null}function iu(e,t,n){try{n()}catch(r){ye(e,t,r)}}var hf=!1;function X_(e,t){if(Ba=to,e=Rp(),rc(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,d=0,c=e,h=null;t:for(;;){for(var v;c!==n||i!==0&&c.nodeType!==3||(l=o+i),c!==s||r!==0&&c.nodeType!==3||(a=o+r),c.nodeType===3&&(o+=c.nodeValue.length),(v=c.firstChild)!==null;)h=c,c=v;for(;;){if(c===e)break t;if(h===n&&++u===i&&(l=o),h===s&&++d===r&&(a=o),(v=c.nextSibling)!==null)break;c=h,h=c.parentNode}c=v}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Ua={focusedElem:e,selectionRange:n},to=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var g=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,T=g.memoizedState,p=t.stateNode,f=p.getSnapshotBeforeUpdate(t.elementType===t.type?x:Rt(t.type,x),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var m=t.stateNode.containerInfo;m.nodeType===1?m.textContent="":m.nodeType===9&&m.documentElement&&m.removeChild(m.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(w){ye(t,t.return,w)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return g=hf,hf=!1,g}function Ti(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&iu(t,n,s)}i=i.next}while(i!==r)}}function Vo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function su(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Im(e){var t=e.alternate;t!==null&&(e.alternate=null,Im(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[jt],delete t[Hi],delete t[Va],delete t[O_],delete t[D_])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tm(e){return e.tag===5||e.tag===3||e.tag===4}function pf(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Tm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ou(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=io));else if(r!==4&&(e=e.child,e!==null))for(ou(e,t,n),e=e.sibling;e!==null;)ou(e,t,n),e=e.sibling}function lu(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(lu(e,t,n),e=e.sibling;e!==null;)lu(e,t,n),e=e.sibling}var be=null,At=!1;function cn(e,t,n){for(n=n.child;n!==null;)Nm(e,t,n),n=n.sibling}function Nm(e,t,n){if(Wt&&typeof Wt.onCommitFiberUnmount=="function")try{Wt.onCommitFiberUnmount(Fo,n)}catch{}switch(n.tag){case 5:Ve||wr(n,t);case 6:var r=be,i=At;be=null,cn(e,t,n),be=r,At=i,be!==null&&(At?(e=be,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):be.removeChild(n.stateNode));break;case 18:be!==null&&(At?(e=be,n=n.stateNode,e.nodeType===8?Gl(e.parentNode,n):e.nodeType===1&&Gl(e,n),$i(e)):Gl(be,n.stateNode));break;case 4:r=be,i=At,be=n.stateNode.containerInfo,At=!0,cn(e,t,n),be=r,At=i;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&iu(n,t,o),i=i.next}while(i!==r)}cn(e,t,n);break;case 1:if(!Ve&&(wr(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){ye(n,t,l)}cn(e,t,n);break;case 21:cn(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,cn(e,t,n),Ve=r):cn(e,t,n);break;default:cn(e,t,n)}}function mf(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Y_),t.forEach(function(r){var i=sv.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=e,o=t,l=o;e:for(;l!==null;){switch(l.tag){case 5:be=l.stateNode,At=!1;break e;case 3:be=l.stateNode.containerInfo,At=!0;break e;case 4:be=l.stateNode.containerInfo,At=!0;break e}l=l.return}if(be===null)throw Error(S(160));Nm(s,o,i),be=null,At=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){ye(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Rm(t,e),t=t.sibling}function Rm(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),zt(e),r&4){try{Ti(3,e,e.return),Vo(3,e)}catch(x){ye(e,e.return,x)}try{Ti(5,e,e.return)}catch(x){ye(e,e.return,x)}}break;case 1:Nt(t,e),zt(e),r&512&&n!==null&&wr(n,n.return);break;case 5:if(Nt(t,e),zt(e),r&512&&n!==null&&wr(n,n.return),e.flags&32){var i=e.stateNode;try{Li(i,"")}catch(x){ye(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,o=n!==null?n.memoizedProps:s,l=e.type,a=e.updateQueue;if(e.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&Xh(i,s),Pa(l,o);var u=Pa(l,s);for(o=0;o<a.length;o+=2){var d=a[o],c=a[o+1];d==="style"?tp(i,c):d==="dangerouslySetInnerHTML"?Zh(i,c):d==="children"?Li(i,c):Hu(i,d,c,u)}switch(l){case"input":Ia(i,s);break;case"textarea":qh(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var v=s.value;v!=null?Er(i,!!s.multiple,v,!1):h!==!!s.multiple&&(s.defaultValue!=null?Er(i,!!s.multiple,s.defaultValue,!0):Er(i,!!s.multiple,s.multiple?[]:"",!1))}i[Hi]=s}catch(x){ye(e,e.return,x)}}break;case 6:if(Nt(t,e),zt(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(x){ye(e,e.return,x)}}break;case 3:if(Nt(t,e),zt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{$i(t.containerInfo)}catch(x){ye(e,e.return,x)}break;case 4:Nt(t,e),zt(e);break;case 13:Nt(t,e),zt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(Cc=ve())),r&4&&mf(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,Nt(t,e),Ve=u):Nt(t,e),zt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(M=e,d=e.child;d!==null;){for(c=M=d;M!==null;){switch(h=M,v=h.child,h.tag){case 0:case 11:case 14:case 15:Ti(4,h,h.return);break;case 1:wr(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,g.props=t.memoizedProps,g.state=t.memoizedState,g.componentWillUnmount()}catch(x){ye(r,n,x)}}break;case 5:wr(h,h.return);break;case 22:if(h.memoizedState!==null){yf(c);continue}}v!==null?(v.return=h,M=v):yf(c)}d=d.sibling}e:for(d=null,c=e;;){if(c.tag===5){if(d===null){d=c;try{i=c.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=c.stateNode,a=c.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=ep("display",o))}catch(x){ye(e,e.return,x)}}}else if(c.tag===6){if(d===null)try{c.stateNode.nodeValue=u?"":c.memoizedProps}catch(x){ye(e,e.return,x)}}else if((c.tag!==22&&c.tag!==23||c.memoizedState===null||c===e)&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===e)break e;for(;c.sibling===null;){if(c.return===null||c.return===e)break e;d===c&&(d=null),c=c.return}d===c&&(d=null),c.sibling.return=c.return,c=c.sibling}}break;case 19:Nt(t,e),zt(e),r&4&&mf(e);break;case 21:break;default:Nt(t,e),zt(e)}}function zt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Tm(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Li(i,""),r.flags&=-33);var s=pf(e);lu(e,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=pf(e);ou(e,l,o);break;default:throw Error(S(161))}}catch(a){ye(e,e.return,a)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function q_(e,t,n){M=e,Am(e)}function Am(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Ts;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ve;l=Ts;var u=Ve;if(Ts=o,(Ve=a)&&!u)for(M=i;M!==null;)o=M,a=o.child,o.tag===22&&o.memoizedState!==null?_f(i):a!==null?(a.return=o,M=a):_f(i);for(;s!==null;)M=s,Am(s),s=s.sibling;M=i,Ts=l,Ve=u}gf(e)}else i.subtreeFlags&8772&&s!==null?(s.return=i,M=s):gf(e)}}function gf(e){for(;M!==null;){var t=M;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||Vo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:Rt(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Jd(t,s,r);break;case 3:var o=t.updateQueue;if(o!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jd(t,o,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var a=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var c=d.dehydrated;c!==null&&$i(c)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ve||t.flags&512&&su(t)}catch(h){ye(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function yf(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function _f(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vo(4,t)}catch(a){ye(t,n,a)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(a){ye(t,i,a)}}var s=t.return;try{su(t)}catch(a){ye(t,s,a)}break;case 5:var o=t.return;try{su(t)}catch(a){ye(t,o,a)}}}catch(a){ye(t,t.return,a)}if(t===e){M=null;break}var l=t.sibling;if(l!==null){l.return=t.return,M=l;break}M=t.return}}var J_=Math.ceil,go=ln.ReactCurrentDispatcher,xc=ln.ReactCurrentOwner,St=ln.ReactCurrentBatchConfig,K=0,Ae=null,xe=null,$e=0,ut=0,xr=Mn(0),ke=0,Xi=null,qn=0,Go=0,Sc=0,Ni=null,tt=null,Cc=0,jr=1/0,Kt=null,yo=!1,au=null,Sn=null,Ns=!1,gn=null,_o=0,Ri=0,uu=null,Vs=-1,Gs=0;function qe(){return K&6?ve():Vs!==-1?Vs:Vs=ve()}function Cn(e){return e.mode&1?K&2&&$e!==0?$e&-$e:L_.transition!==null?(Gs===0&&(Gs=hp()),Gs):(e=ee,e!==0||(e=window.event,e=e===void 0?16:wp(e.type)),e):1}function Lt(e,t,n,r){if(50<Ri)throw Ri=0,uu=null,Error(S(185));rs(e,n,r),(!(K&2)||e!==Ae)&&(e===Ae&&(!(K&2)&&(Go|=n),ke===4&&pn(e,$e)),ot(e,r),n===1&&K===0&&!(t.mode&1)&&(jr=ve()+500,Uo&&Ln()))}function ot(e,t){var n=e.callbackNode;Ly(e,t);var r=eo(e,e===Ae?$e:0);if(r===0)n!==null&&Id(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Id(n),t===1)e.tag===0?M_(vf.bind(null,e)):$p(vf.bind(null,e)),A_(function(){!(K&6)&&Ln()}),n=null;else{switch(pp(r)){case 1:n=Yu;break;case 4:n=dp;break;case 16:n=Zs;break;case 536870912:n=fp;break;default:n=Zs}n=zm(n,Pm.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Pm(e,t){if(Vs=-1,Gs=0,K&6)throw Error(S(327));var n=e.callbackNode;if(Rr()&&e.callbackNode!==n)return null;var r=eo(e,e===Ae?$e:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=vo(e,r);else{t=r;var i=K;K|=2;var s=Dm();(Ae!==e||$e!==t)&&(Kt=null,jr=ve()+500,Vn(e,t));do try{tv();break}catch(l){Om(e,l)}while(1);ac(),go.current=s,K=i,xe!==null?t=0:(Ae=null,$e=0,t=ke)}if(t!==0){if(t===2&&(i=ba(e),i!==0&&(r=i,t=cu(e,i))),t===1)throw n=Xi,Vn(e,0),pn(e,r),ot(e,ve()),n;if(t===6)pn(e,r);else{if(i=e.current.alternate,!(r&30)&&!Z_(i)&&(t=vo(e,r),t===2&&(s=ba(e),s!==0&&(r=s,t=cu(e,s))),t===1))throw n=Xi,Vn(e,0),pn(e,r),ot(e,ve()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:Fn(e,tt,Kt);break;case 3:if(pn(e,r),(r&130023424)===r&&(t=Cc+500-ve(),10<t)){if(eo(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Ha(Fn.bind(null,e,tt,Kt),t);break}Fn(e,tt,Kt);break;case 4:if(pn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var o=31-Mt(r);s=1<<o,o=t[o],o>i&&(i=o),r&=~s}if(r=i,r=ve()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*J_(r/1960))-r,10<r){e.timeoutHandle=Ha(Fn.bind(null,e,tt,Kt),r);break}Fn(e,tt,Kt);break;case 5:Fn(e,tt,Kt);break;default:throw Error(S(329))}}}return ot(e,ve()),e.callbackNode===n?Pm.bind(null,e):null}function cu(e,t){var n=Ni;return e.current.memoizedState.isDehydrated&&(Vn(e,t).flags|=256),e=vo(e,t),e!==2&&(t=tt,tt=n,t!==null&&du(t)),e}function du(e){tt===null?tt=e:tt.push.apply(tt,e)}function Z_(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Ft(s(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function pn(e,t){for(t&=~Sc,t&=~Go,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Mt(t),r=1<<n;e[n]=-1,t&=~r}}function vf(e){if(K&6)throw Error(S(327));Rr();var t=eo(e,0);if(!(t&1))return ot(e,ve()),null;var n=vo(e,t);if(e.tag!==0&&n===2){var r=ba(e);r!==0&&(t=r,n=cu(e,r))}if(n===1)throw n=Xi,Vn(e,0),pn(e,t),ot(e,ve()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Fn(e,tt,Kt),ot(e,ve()),null}function Ec(e,t){var n=K;K|=1;try{return e(t)}finally{K=n,K===0&&(jr=ve()+500,Uo&&Ln())}}function Jn(e){gn!==null&&gn.tag===0&&!(K&6)&&Rr();var t=K;K|=1;var n=St.transition,r=ee;try{if(St.transition=null,ee=1,e)return e()}finally{ee=r,St.transition=n,K=t,!(K&6)&&Ln()}}function kc(){ut=xr.current,ce(xr)}function Vn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,R_(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(sc(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&so();break;case 3:zr(),ce(it),ce(Qe),pc();break;case 5:hc(r);break;case 4:zr();break;case 13:ce(he);break;case 19:ce(he);break;case 10:uc(r.type._context);break;case 22:case 23:kc()}n=n.return}if(Ae=e,xe=e=En(e.current,null),$e=ut=t,ke=0,Xi=null,Sc=Go=qn=0,tt=Ni=null,Bn!==null){for(t=0;t<Bn.length;t++)if(n=Bn[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Bn=null}return e}function Om(e,t){do{var n=xe;try{if(ac(),Us.current=mo,po){for(var r=pe.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}po=!1}if(Xn=0,Ne=Ce=pe=null,Ii=!1,Ki=0,xc.current=null,n===null||n.return===null){ke=1,Xi=t,xe=null;break}e:{var s=e,o=n.return,l=n,a=t;if(t=$e,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,d=l,c=d.tag;if(!(d.mode&1)&&(c===0||c===11||c===15)){var h=d.alternate;h?(d.updateQueue=h.updateQueue,d.memoizedState=h.memoizedState,d.lanes=h.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=of(o);if(v!==null){v.flags&=-257,lf(v,o,l,s,t),v.mode&1&&sf(s,u,t),t=v,a=u;var g=t.updateQueue;if(g===null){var x=new Set;x.add(a),t.updateQueue=x}else g.add(a);break e}else{if(!(t&1)){sf(s,u,t),Ic();break e}a=Error(S(426))}}else if(fe&&l.mode&1){var T=of(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),lf(T,o,l,s,t),oc($r(a,l));break e}}s=a=$r(a,l),ke!==4&&(ke=2),Ni===null?Ni=[s]:Ni.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var p=mm(s,a,t);qd(s,p);break e;case 1:l=a;var f=s.type,m=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Sn===null||!Sn.has(m)))){s.flags|=65536,t&=-t,s.lanes|=t;var w=gm(s,l,t);qd(s,w);break e}}s=s.return}while(s!==null)}Lm(n)}catch(C){t=C,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function Dm(){var e=go.current;return go.current=mo,e===null?mo:e}function Ic(){(ke===0||ke===3||ke===2)&&(ke=4),Ae===null||!(qn&268435455)&&!(Go&268435455)||pn(Ae,$e)}function vo(e,t){var n=K;K|=2;var r=Dm();(Ae!==e||$e!==t)&&(Kt=null,Vn(e,t));do try{ev();break}catch(i){Om(e,i)}while(1);if(ac(),K=n,go.current=r,xe!==null)throw Error(S(261));return Ae=null,$e=0,ke}function ev(){for(;xe!==null;)Mm(xe)}function tv(){for(;xe!==null&&!Iy();)Mm(xe)}function Mm(e){var t=Fm(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?Lm(e):xe=t,xc.current=null}function Lm(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Q_(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ke=6,xe=null;return}}else if(n=K_(n,t,ut),n!==null){xe=n;return}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);ke===0&&(ke=5)}function Fn(e,t,n){var r=ee,i=St.transition;try{St.transition=null,ee=1,nv(e,t,n,r)}finally{St.transition=i,ee=r}return null}function nv(e,t,n,r){do Rr();while(gn!==null);if(K&6)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var s=n.lanes|n.childLanes;if(by(e,s),e===Ae&&(xe=Ae=null,$e=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ns||(Ns=!0,zm(Zs,function(){return Rr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=St.transition,St.transition=null;var o=ee;ee=1;var l=K;K|=4,xc.current=null,X_(e,n),Rm(n,e),S_(Ua),to=!!Ba,Ua=Ba=null,e.current=n,q_(n),Ty(),K=l,ee=o,St.transition=s}else e.current=n;if(Ns&&(Ns=!1,gn=e,_o=i),s=e.pendingLanes,s===0&&(Sn=null),Ay(n.stateNode),ot(e,ve()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(yo)throw yo=!1,e=au,au=null,e;return _o&1&&e.tag!==0&&Rr(),s=e.pendingLanes,s&1?e===uu?Ri++:(Ri=0,uu=e):Ri=0,Ln(),null}function Rr(){if(gn!==null){var e=pp(_o),t=St.transition,n=ee;try{if(St.transition=null,ee=16>e?16:e,gn===null)var r=!1;else{if(e=gn,gn=null,_o=0,K&6)throw Error(S(331));var i=K;for(K|=4,M=e.current;M!==null;){var s=M,o=s.child;if(M.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(M=u;M!==null;){var d=M;switch(d.tag){case 0:case 11:case 15:Ti(8,d,s)}var c=d.child;if(c!==null)c.return=d,M=c;else for(;M!==null;){d=M;var h=d.sibling,v=d.return;if(Im(d),d===u){M=null;break}if(h!==null){h.return=v,M=h;break}M=v}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var T=x.sibling;x.sibling=null,x=T}while(x!==null)}}M=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,M=o;else e:for(;M!==null;){if(s=M,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ti(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,M=p;break e}M=s.return}}var f=e.current;for(M=f;M!==null;){o=M;var m=o.child;if(o.subtreeFlags&2064&&m!==null)m.return=o,M=m;else e:for(o=f;M!==null;){if(l=M,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vo(9,l)}}catch(C){ye(l,l.return,C)}if(l===o){M=null;break e}var w=l.sibling;if(w!==null){w.return=l.return,M=w;break e}M=l.return}}if(K=i,Ln(),Wt&&typeof Wt.onPostCommitFiberRoot=="function")try{Wt.onPostCommitFiberRoot(Fo,e)}catch{}r=!0}return r}finally{ee=n,St.transition=t}}return!1}function wf(e,t,n){t=$r(n,t),t=mm(e,t,1),e=xn(e,t,1),t=qe(),e!==null&&(rs(e,1,t),ot(e,t))}function ye(e,t,n){if(e.tag===3)wf(e,e,n);else for(;t!==null;){if(t.tag===3){wf(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sn===null||!Sn.has(r))){e=$r(n,e),e=gm(t,e,1),t=xn(t,e,1),e=qe(),t!==null&&(rs(t,1,e),ot(t,e));break}}t=t.return}}function rv(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=qe(),e.pingedLanes|=e.suspendedLanes&n,Ae===e&&($e&n)===n&&(ke===4||ke===3&&($e&130023424)===$e&&500>ve()-Cc?Vn(e,0):Sc|=n),ot(e,t)}function bm(e,t){t===0&&(e.mode&1?(t=_s,_s<<=1,!(_s&130023424)&&(_s=4194304)):t=1);var n=qe();e=nn(e,t),e!==null&&(rs(e,t,n),ot(e,n))}function iv(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),bm(e,n)}function sv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),bm(e,n)}var Fm;Fm=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||it.current)nt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return nt=!1,G_(e,t,n);nt=!!(e.flags&131072)}else nt=!1,fe&&t.flags&1048576&&jp(t,ao,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hs(e,t),e=t.pendingProps;var i=Lr(t,Qe.current);Nr(t,n),i=gc(null,t,r,e,i,n);var s=yc();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,st(r)?(s=!0,oo(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,dc(t),i.updater=Wo,t.stateNode=i,i._reactInternals=t,qa(t,r,e,n),t=eu(null,t,r,!0,s,n)):(t.tag=0,fe&&s&&ic(t),Xe(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hs(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=lv(r),e=Rt(r,e),i){case 0:t=Za(null,t,r,e,n);break e;case 1:t=cf(null,t,r,e,n);break e;case 11:t=af(null,t,r,e,n);break e;case 14:t=uf(null,t,r,Rt(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Za(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),cf(e,t,r,i,n);case 3:e:{if(wm(t),e===null)throw Error(S(387));r=t.pendingProps,s=t.memoizedState,i=s.element,Hp(e,t),fo(t,r,null,n);var o=t.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=$r(Error(S(423)),t),t=df(e,t,r,n,i);break e}else if(r!==i){i=$r(Error(S(424)),t),t=df(e,t,r,n,i);break e}else for(ct=wn(t.stateNode.containerInfo.firstChild),ft=t,fe=!0,Pt=null,n=Qp(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(br(),r===i){t=rn(e,t,n);break e}Xe(e,t,r,n)}t=t.child}return t;case 5:return Yp(t),e===null&&Qa(t),r=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,o=i.children,Wa(r,i)?o=null:s!==null&&Wa(r,s)&&(t.flags|=32),vm(e,t),Xe(e,t,o,n),t.child;case 6:return e===null&&Qa(t),null;case 13:return xm(e,t,n);case 4:return fc(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Fr(t,null,r,n):Xe(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),af(e,t,r,i,n);case 7:return Xe(e,t,t.pendingProps,n),t.child;case 8:return Xe(e,t,t.pendingProps.children,n),t.child;case 12:return Xe(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,s=t.memoizedProps,o=i.value,oe(uo,r._currentValue),r._currentValue=o,s!==null)if(Ft(s.value,o)){if(s.children===i.children&&!it.current){t=rn(e,t,n);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Jt(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?a.next=a:(a.next=d.next,d.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ya(s.return,n,t),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===t.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ya(o,n,t),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===t){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Xe(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Nr(t,n),i=Ct(i),r=r(i),t.flags|=1,Xe(e,t,r,n),t.child;case 14:return r=t.type,i=Rt(r,t.pendingProps),i=Rt(r.type,i),uf(e,t,r,i,n);case 15:return ym(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:Rt(r,i),Hs(e,t),t.tag=1,st(r)?(e=!0,oo(t)):e=!1,Nr(t,n),Gp(t,r,i),qa(t,r,i,n),eu(null,t,r,!0,e,n);case 19:return Sm(e,t,n);case 22:return _m(e,t,n)}throw Error(S(156,t.tag))};function zm(e,t){return cp(e,t)}function ov(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wt(e,t,n,r){return new ov(e,t,n,r)}function Tc(e){return e=e.prototype,!(!e||!e.isReactComponent)}function lv(e){if(typeof e=="function")return Tc(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Gu)return 11;if(e===Ku)return 14}return 2}function En(e,t){var n=e.alternate;return n===null?(n=wt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ks(e,t,n,r,i,s){var o=2;if(r=e,typeof e=="function")Tc(e)&&(o=1);else if(typeof e=="string")o=5;else e:switch(e){case dr:return Gn(n.children,i,s,t);case Vu:o=8,i|=8;break;case xa:return e=wt(12,n,t,i|2),e.elementType=xa,e.lanes=s,e;case Sa:return e=wt(13,n,t,i),e.elementType=Sa,e.lanes=s,e;case Ca:return e=wt(19,n,t,i),e.elementType=Ca,e.lanes=s,e;case Kh:return Ko(n,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Vh:o=10;break e;case Gh:o=9;break e;case Gu:o=11;break e;case Ku:o=14;break e;case dn:o=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=wt(o,n,t,i),t.elementType=e,t.type=r,t.lanes=s,t}function Gn(e,t,n,r){return e=wt(7,e,r,t),e.lanes=n,e}function Ko(e,t,n,r){return e=wt(22,e,r,t),e.elementType=Kh,e.lanes=n,e.stateNode={isHidden:!1},e}function ea(e,t,n){return e=wt(6,e,null,t),e.lanes=n,e}function ta(e,t,n){return t=wt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function av(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ll(0),this.expirationTimes=Ll(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ll(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Nc(e,t,n,r,i,s,o,l,a){return e=new av(e,t,n,l,a),t===1?(t=1,s===!0&&(t|=8)):t=0,s=wt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dc(s),e}function uv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:cr,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function $m(e){if(!e)return Pn;e=e._reactInternals;e:{if(sr(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(st(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(st(n))return zp(e,n,t)}return t}function jm(e,t,n,r,i,s,o,l,a){return e=Nc(n,r,!0,e,i,s,o,l,a),e.context=$m(null),n=e.current,r=qe(),i=Cn(n),s=Jt(r,i),s.callback=t??null,xn(n,s,i),e.current.lanes=i,rs(e,i,r),ot(e,r),e}function Qo(e,t,n,r){var i=t.current,s=qe(),o=Cn(i);return n=$m(n),t.context===null?t.context=n:t.pendingContext=n,t=Jt(s,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=xn(i,t,o),e!==null&&(Lt(e,i,o,s),Bs(e,i,o)),o}function wo(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xf(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Rc(e,t){xf(e,t),(e=e.alternate)&&xf(e,t)}function cv(){return null}var Bm=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ac(e){this._internalRoot=e}Yo.prototype.render=Ac.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));Qo(e,t,null,null)};Yo.prototype.unmount=Ac.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Jn(function(){Qo(null,e,null,null)}),t[tn]=null}};function Yo(e){this._internalRoot=e}Yo.prototype.unstable_scheduleHydration=function(e){if(e){var t=yp();e={blockedOn:null,target:e,priority:t};for(var n=0;n<hn.length&&t!==0&&t<hn[n].priority;n++);hn.splice(n,0,e),n===0&&vp(e)}};function Pc(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Xo(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function Sf(){}function dv(e,t,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=wo(o);s.call(u)}}var o=jm(t,r,e,0,null,!1,!1,"",Sf);return e._reactRootContainer=o,e[tn]=o.current,Ui(e.nodeType===8?e.parentNode:e),Jn(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=wo(a);l.call(u)}}var a=Nc(e,0,!1,null,null,!1,!1,"",Sf);return e._reactRootContainer=a,e[tn]=a.current,Ui(e.nodeType===8?e.parentNode:e),Jn(function(){Qo(t,a,n,r)}),a}function qo(e,t,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=wo(o);l.call(a)}}Qo(t,o,e,i)}else o=dv(n,t,e,i,r);return wo(o)}mp=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=vi(t.pendingLanes);n!==0&&(Xu(t,n|1),ot(t,ve()),!(K&6)&&(jr=ve()+500,Ln()))}break;case 13:Jn(function(){var r=nn(e,1);if(r!==null){var i=qe();Lt(r,e,1,i)}}),Rc(e,1)}};qu=function(e){if(e.tag===13){var t=nn(e,134217728);if(t!==null){var n=qe();Lt(t,e,134217728,n)}Rc(e,134217728)}};gp=function(e){if(e.tag===13){var t=Cn(e),n=nn(e,t);if(n!==null){var r=qe();Lt(n,e,t,r)}Rc(e,t)}};yp=function(){return ee};_p=function(e,t){var n=ee;try{return ee=e,t()}finally{ee=n}};Da=function(e,t,n){switch(t){case"input":if(Ia(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Bo(r);if(!i)throw Error(S(90));Yh(r),Ia(r,i)}}}break;case"textarea":qh(e,n);break;case"select":t=n.value,t!=null&&Er(e,!!n.multiple,t,!1)}};ip=Ec;sp=Jn;var fv={usingClientEntryPoint:!1,Events:[ss,mr,Bo,np,rp,Ec]},di={findFiberByHostInstance:jn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hv={bundleType:di.bundleType,version:di.version,rendererPackageName:di.rendererPackageName,rendererConfig:di.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ln.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=ap(e),e===null?null:e.stateNode},findFiberByHostInstance:di.findFiberByHostInstance||cv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Rs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Rs.isDisabled&&Rs.supportsFiber)try{Fo=Rs.inject(hv),Wt=Rs}catch{}}pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fv;pt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Pc(t))throw Error(S(200));return uv(e,t,null,n)};pt.createRoot=function(e,t){if(!Pc(e))throw Error(S(299));var n=!1,r="",i=Bm;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Nc(e,1,!1,null,null,n,!1,r,i),e[tn]=t.current,Ui(e.nodeType===8?e.parentNode:e),new Ac(t)};pt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=ap(t),e=e===null?null:e.stateNode,e};pt.flushSync=function(e){return Jn(e)};pt.hydrate=function(e,t,n){if(!Xo(t))throw Error(S(200));return qo(null,e,t,!0,n)};pt.hydrateRoot=function(e,t,n){if(!Pc(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Bm;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),t=jm(t,null,e,1,n??null,i,!1,s,o),e[tn]=t.current,Ui(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Yo(t)};pt.render=function(e,t,n){if(!Xo(t))throw Error(S(200));return qo(null,e,t,!1,n)};pt.unmountComponentAtNode=function(e){if(!Xo(e))throw Error(S(40));return e._reactRootContainer?(Jn(function(){qo(null,null,e,!1,function(){e._reactRootContainer=null,e[tn]=null})}),!0):!1};pt.unstable_batchedUpdates=Ec;pt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xo(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return qo(e,t,n,!1,r)};pt.version="18.2.0-next-9e3b772b8-20220608";function Um(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Um)}catch(e){console.error(e)}}Um(),jh.exports=pt;var pv=jh.exports,Cf=pv;va.createRoot=Cf.createRoot,va.hydrateRoot=Cf.hydrateRoot;var Wm={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ef=dt.createContext&&dt.createContext(Wm),kn=globalThis&&globalThis.__assign||function(){return kn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},kn.apply(this,arguments)},mv=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function Hm(e){return e&&e.map(function(t,n){return dt.createElement(t.tag,kn({key:n},t.attr),Hm(t.child))})}function Vt(e){return function(t){return dt.createElement(gv,kn({attr:kn({},e.attr)},t),Hm(e.child))}}function gv(e){var t=function(n){var r=e.attr,i=e.size,s=e.title,o=mv(e,["attr","size","title"]),l=i||n.size||"1em",a;return n.className&&(a=n.className),e.className&&(a=(a?a+" ":"")+e.className),dt.createElement("svg",kn({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,o,{className:a,style:kn(kn({color:e.color||n.color},n.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),s&&dt.createElement("title",null,s),e.children)};return Ef!==void 0?dt.createElement(Ef.Consumer,null,function(n){return t(n)}):t(Wm)}function yv(e){return Vt({tag:"svg",attr:{viewBox:"0 0 488 512"},child:[{tag:"path",attr:{d:"M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"}}]})(e)}function _v(e){return Vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"}}]})(e)}function vv(e){return Vt({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function wv(e){return Vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"}}]})(e)}function xv(e){return Vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"}}]})(e)}function Sv(e){return Vt({tag:"svg",attr:{viewBox:"0 0 384 512"},child:[{tag:"path",attr:{d:"M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"}}]})(e)}function Cv(e){return Vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"}}]})(e)}function kf(e){return Vt({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"}}]})(e)}function Ev(e){return Vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"}}]})(e)}function kv(e){return Vt({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"}}]})(e)}var Vm={exports:{}},te={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Oc=Symbol.for("react.element"),Dc=Symbol.for("react.portal"),Jo=Symbol.for("react.fragment"),Zo=Symbol.for("react.strict_mode"),el=Symbol.for("react.profiler"),tl=Symbol.for("react.provider"),nl=Symbol.for("react.context"),Iv=Symbol.for("react.server_context"),rl=Symbol.for("react.forward_ref"),il=Symbol.for("react.suspense"),sl=Symbol.for("react.suspense_list"),ol=Symbol.for("react.memo"),ll=Symbol.for("react.lazy"),Tv=Symbol.for("react.offscreen"),Gm;Gm=Symbol.for("react.module.reference");function It(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Oc:switch(e=e.type,e){case Jo:case el:case Zo:case il:case sl:return e;default:switch(e=e&&e.$$typeof,e){case Iv:case nl:case rl:case ll:case ol:case tl:return e;default:return t}}case Dc:return t}}}te.ContextConsumer=nl;te.ContextProvider=tl;te.Element=Oc;te.ForwardRef=rl;te.Fragment=Jo;te.Lazy=ll;te.Memo=ol;te.Portal=Dc;te.Profiler=el;te.StrictMode=Zo;te.Suspense=il;te.SuspenseList=sl;te.isAsyncMode=function(){return!1};te.isConcurrentMode=function(){return!1};te.isContextConsumer=function(e){return It(e)===nl};te.isContextProvider=function(e){return It(e)===tl};te.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Oc};te.isForwardRef=function(e){return It(e)===rl};te.isFragment=function(e){return It(e)===Jo};te.isLazy=function(e){return It(e)===ll};te.isMemo=function(e){return It(e)===ol};te.isPortal=function(e){return It(e)===Dc};te.isProfiler=function(e){return It(e)===el};te.isStrictMode=function(e){return It(e)===Zo};te.isSuspense=function(e){return It(e)===il};te.isSuspenseList=function(e){return It(e)===sl};te.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Jo||e===el||e===Zo||e===il||e===sl||e===Tv||typeof e=="object"&&e!==null&&(e.$$typeof===ll||e.$$typeof===ol||e.$$typeof===tl||e.$$typeof===nl||e.$$typeof===rl||e.$$typeof===Gm||e.getModuleId!==void 0)};te.typeOf=It;Vm.exports=te;var Km=Vm.exports;function Nv(e){function t(R,A,D,z,y){for(var H=0,N=0,ge=0,X=0,Z,B,De=0,et=0,Y,Ue=Y=Z=0,q=0,Me=0,ni=0,Le=0,fs=D.length,ri=fs-1,Tt,j="",_e="",Nl="",Rl="",un;q<fs;){if(B=D.charCodeAt(q),q===ri&&N+X+ge+H!==0&&(N!==0&&(B=N===47?10:47),X=ge=H=0,fs++,ri++),N+X+ge+H===0){if(q===ri&&(0<Me&&(j=j.replace(h,"")),0<j.trim().length)){switch(B){case 32:case 9:case 59:case 13:case 10:break;default:j+=D.charAt(q)}B=59}switch(B){case 123:for(j=j.trim(),Z=j.charCodeAt(0),Y=1,Le=++q;q<fs;){switch(B=D.charCodeAt(q)){case 123:Y++;break;case 125:Y--;break;case 47:switch(B=D.charCodeAt(q+1)){case 42:case 47:e:{for(Ue=q+1;Ue<ri;++Ue)switch(D.charCodeAt(Ue)){case 47:if(B===42&&D.charCodeAt(Ue-1)===42&&q+2!==Ue){q=Ue+1;break e}break;case 10:if(B===47){q=Ue+1;break e}}q=Ue}}break;case 91:B++;case 40:B++;case 34:case 39:for(;q++<ri&&D.charCodeAt(q)!==B;);}if(Y===0)break;q++}switch(Y=D.substring(Le,q),Z===0&&(Z=(j=j.replace(c,"").trim()).charCodeAt(0)),Z){case 64:switch(0<Me&&(j=j.replace(h,"")),B=j.charCodeAt(1),B){case 100:case 109:case 115:case 45:Me=A;break;default:Me=Gt}if(Y=t(A,Me,Y,B,y+1),Le=Y.length,0<k&&(Me=n(Gt,j,ni),un=l(3,Y,Me,A,Oe,Se,Le,B,y,z),j=Me.join(""),un!==void 0&&(Le=(Y=un.trim()).length)===0&&(B=0,Y="")),0<Le)switch(B){case 115:j=j.replace(P,o);case 100:case 109:case 45:Y=j+"{"+Y+"}";break;case 107:j=j.replace(f,"$1 $2"),Y=j+"{"+Y+"}",Y=Be===1||Be===2&&s("@"+Y,3)?"@-webkit-"+Y+"@"+Y:"@"+Y;break;default:Y=j+Y,z===112&&(Y=(_e+=Y,""))}else Y="";break;default:Y=t(A,n(A,j,ni),Y,z,y+1)}Nl+=Y,Y=ni=Me=Ue=Z=0,j="",B=D.charCodeAt(++q);break;case 125:case 59:if(j=(0<Me?j.replace(h,""):j).trim(),1<(Le=j.length))switch(Ue===0&&(Z=j.charCodeAt(0),Z===45||96<Z&&123>Z)&&(Le=(j=j.replace(" ",":")).length),0<k&&(un=l(1,j,A,R,Oe,Se,_e.length,z,y,z))!==void 0&&(Le=(j=un.trim()).length)===0&&(j="\0\0"),Z=j.charCodeAt(0),B=j.charCodeAt(1),Z){case 0:break;case 64:if(B===105||B===99){Rl+=j+D.charAt(q);break}default:j.charCodeAt(Le-1)!==58&&(_e+=i(j,Z,B,j.charCodeAt(2)))}ni=Me=Ue=Z=0,j="",B=D.charCodeAt(++q)}}switch(B){case 13:case 10:N===47?N=0:1+Z===0&&z!==107&&0<j.length&&(Me=1,j+="\0"),0<k*F&&l(0,j,A,R,Oe,Se,_e.length,z,y,z),Se=1,Oe++;break;case 59:case 125:if(N+X+ge+H===0){Se++;break}default:switch(Se++,Tt=D.charAt(q),B){case 9:case 32:if(X+H+N===0)switch(De){case 44:case 58:case 9:case 32:Tt="";break;default:B!==32&&(Tt=" ")}break;case 0:Tt="\\0";break;case 12:Tt="\\f";break;case 11:Tt="\\v";break;case 38:X+N+H===0&&(Me=ni=1,Tt="\f"+Tt);break;case 108:if(X+N+H+at===0&&0<Ue)switch(q-Ue){case 2:De===112&&D.charCodeAt(q-3)===58&&(at=De);case 8:et===111&&(at=et)}break;case 58:X+N+H===0&&(Ue=q);break;case 44:N+ge+X+H===0&&(Me=1,Tt+="\r");break;case 34:case 39:N===0&&(X=X===B?0:X===0?B:X);break;case 91:X+N+ge===0&&H++;break;case 93:X+N+ge===0&&H--;break;case 41:X+N+H===0&&ge--;break;case 40:if(X+N+H===0){if(Z===0)switch(2*De+3*et){case 533:break;default:Z=1}ge++}break;case 64:N+ge+X+H+Ue+Y===0&&(Y=1);break;case 42:case 47:if(!(0<X+H+ge))switch(N){case 0:switch(2*B+3*D.charCodeAt(q+1)){case 235:N=47;break;case 220:Le=q,N=42}break;case 42:B===47&&De===42&&Le+2!==q&&(D.charCodeAt(Le+2)===33&&(_e+=D.substring(Le,q+1)),Tt="",N=0)}}N===0&&(j+=Tt)}et=De,De=B,q++}if(Le=_e.length,0<Le){if(Me=A,0<k&&(un=l(2,_e,Me,R,Oe,Se,Le,z,y,z),un!==void 0&&(_e=un).length===0))return Rl+_e+Nl;if(_e=Me.join(",")+"{"+_e+"}",Be*at!==0){switch(Be!==2||s(_e,2)||(at=0),at){case 111:_e=_e.replace(w,":-moz-$1")+_e;break;case 112:_e=_e.replace(m,"::-webkit-input-$1")+_e.replace(m,"::-moz-$1")+_e.replace(m,":-ms-input-$1")+_e}at=0}}return Rl+_e+Nl}function n(R,A,D){var z=A.trim().split(T);A=z;var y=z.length,H=R.length;switch(H){case 0:case 1:var N=0;for(R=H===0?"":R[0]+" ";N<y;++N)A[N]=r(R,A[N],D).trim();break;default:var ge=N=0;for(A=[];N<y;++N)for(var X=0;X<H;++X)A[ge++]=r(R[X]+" ",z[N],D).trim()}return A}function r(R,A,D){var z=A.charCodeAt(0);switch(33>z&&(z=(A=A.trim()).charCodeAt(0)),z){case 38:return A.replace(p,"$1"+R.trim());case 58:return R.trim()+A.replace(p,"$1"+R.trim());default:if(0<1*D&&0<A.indexOf("\f"))return A.replace(p,(R.charCodeAt(0)===58?"":"$1")+R.trim())}return R+A}function i(R,A,D,z){var y=R+";",H=2*A+3*D+4*z;if(H===944){R=y.indexOf(":",9)+1;var N=y.substring(R,y.length-1).trim();return N=y.substring(0,R).trim()+N+";",Be===1||Be===2&&s(N,1)?"-webkit-"+N+N:N}if(Be===0||Be===2&&!s(y,1))return y;switch(H){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(Ie,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return N=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+N+"-webkit-"+y+"-ms-flex-pack"+N+y;case 1005:return g.test(y)?y.replace(v,":-webkit-")+y.replace(v,":-moz-")+y:y;case 1e3:switch(N=y.substring(13).trim(),A=N.indexOf("-")+1,N.charCodeAt(0)+N.charCodeAt(A)){case 226:N=y.replace(C,"tb");break;case 232:N=y.replace(C,"tb-rl");break;case 220:N=y.replace(C,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+N+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(A=(y=R).length-10,N=(y.charCodeAt(A)===33?y.substring(0,A):y).substring(R.indexOf(":",7)+1).trim(),H=N.charCodeAt(0)+(N.charCodeAt(7)|0)){case 203:if(111>N.charCodeAt(8))break;case 115:y=y.replace(N,"-webkit-"+N)+";"+y;break;case 207:case 102:y=y.replace(N,"-webkit-"+(102<H?"inline-":"")+"box")+";"+y.replace(N,"-webkit-"+N)+";"+y.replace(N,"-ms-"+N+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return N=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+N+"-ms-flex-"+N+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(O,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(O,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if($.test(R)===!0)return(N=R.substring(R.indexOf(":")+1)).charCodeAt(0)===115?i(R.replace("stretch","fill-available"),A,D,z).replace(":fill-available",":stretch"):y.replace(N,"-webkit-"+N)+y.replace(N,"-moz-"+N.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,D+z===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(x,"$1-webkit-$2")+y}return y}function s(R,A){var D=R.indexOf(A===1?":":"{"),z=R.substring(0,A!==3?D:10);return D=R.substring(D+1,R.length-1),b(A!==2?z:z.replace(Q,"$1"),D,A)}function o(R,A){var D=i(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return D!==A+";"?D.replace(L," or ($1)").substring(4):"("+A+")"}function l(R,A,D,z,y,H,N,ge,X,Z){for(var B=0,De=A,et;B<k;++B)switch(et=Ye[B].call(d,R,De,D,z,y,H,N,ge,X,Z)){case void 0:case!1:case!0:case null:break;default:De=et}if(De!==A)return De}function a(R){switch(R){case void 0:case null:k=Ye.length=0;break;default:if(typeof R=="function")Ye[k++]=R;else if(typeof R=="object")for(var A=0,D=R.length;A<D;++A)a(R[A]);else F=!!R|0}return a}function u(R){return R=R.prefix,R!==void 0&&(b=null,R?typeof R!="function"?Be=1:(Be=2,b=R):Be=0),u}function d(R,A){var D=R;if(33>D.charCodeAt(0)&&(D=D.trim()),ie=D,D=[ie],0<k){var z=l(-1,A,D,D,Oe,Se,0,0,0,0);z!==void 0&&typeof z=="string"&&(A=z)}var y=t(Gt,D,A,0,0);return 0<k&&(z=l(-2,y,D,D,Oe,Se,y.length,0,0,0),z!==void 0&&(y=z)),ie="",at=0,Se=Oe=1,y}var c=/^\0+/g,h=/[\0\r\f]/g,v=/: */g,g=/zoo|gra/,x=/([,: ])(transform)/g,T=/,\r+?/g,p=/([\t\r\n ])*\f?&/g,f=/@(k\w+)\s*(\S*)\s*/,m=/::(place)/g,w=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,P=/\(\s*(.*)\s*\)/g,L=/([\s\S]*?);/g,O=/-self|flex-/g,Q=/[^]*?(:[rp][el]a[\w-]+)[^]*/,$=/stretch|:\s*\w+\-(?:conte|avail)/,Ie=/([^-])(image-set\()/,Se=1,Oe=1,at=0,Be=1,Gt=[],Ye=[],k=0,b=null,F=0,ie="";return d.use=a,d.set=u,e!==void 0&&u(e),d}var Rv={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function Av(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var Pv=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,If=Av(function(e){return Pv.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Qm={exports:{}},ne={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=typeof Symbol=="function"&&Symbol.for,Mc=Pe?Symbol.for("react.element"):60103,Lc=Pe?Symbol.for("react.portal"):60106,al=Pe?Symbol.for("react.fragment"):60107,ul=Pe?Symbol.for("react.strict_mode"):60108,cl=Pe?Symbol.for("react.profiler"):60114,dl=Pe?Symbol.for("react.provider"):60109,fl=Pe?Symbol.for("react.context"):60110,bc=Pe?Symbol.for("react.async_mode"):60111,hl=Pe?Symbol.for("react.concurrent_mode"):60111,pl=Pe?Symbol.for("react.forward_ref"):60112,ml=Pe?Symbol.for("react.suspense"):60113,Ov=Pe?Symbol.for("react.suspense_list"):60120,gl=Pe?Symbol.for("react.memo"):60115,yl=Pe?Symbol.for("react.lazy"):60116,Dv=Pe?Symbol.for("react.block"):60121,Mv=Pe?Symbol.for("react.fundamental"):60117,Lv=Pe?Symbol.for("react.responder"):60118,bv=Pe?Symbol.for("react.scope"):60119;function gt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Mc:switch(e=e.type,e){case bc:case hl:case al:case cl:case ul:case ml:return e;default:switch(e=e&&e.$$typeof,e){case fl:case pl:case yl:case gl:case dl:return e;default:return t}}case Lc:return t}}}function Ym(e){return gt(e)===hl}ne.AsyncMode=bc;ne.ConcurrentMode=hl;ne.ContextConsumer=fl;ne.ContextProvider=dl;ne.Element=Mc;ne.ForwardRef=pl;ne.Fragment=al;ne.Lazy=yl;ne.Memo=gl;ne.Portal=Lc;ne.Profiler=cl;ne.StrictMode=ul;ne.Suspense=ml;ne.isAsyncMode=function(e){return Ym(e)||gt(e)===bc};ne.isConcurrentMode=Ym;ne.isContextConsumer=function(e){return gt(e)===fl};ne.isContextProvider=function(e){return gt(e)===dl};ne.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Mc};ne.isForwardRef=function(e){return gt(e)===pl};ne.isFragment=function(e){return gt(e)===al};ne.isLazy=function(e){return gt(e)===yl};ne.isMemo=function(e){return gt(e)===gl};ne.isPortal=function(e){return gt(e)===Lc};ne.isProfiler=function(e){return gt(e)===cl};ne.isStrictMode=function(e){return gt(e)===ul};ne.isSuspense=function(e){return gt(e)===ml};ne.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===al||e===hl||e===cl||e===ul||e===ml||e===Ov||typeof e=="object"&&e!==null&&(e.$$typeof===yl||e.$$typeof===gl||e.$$typeof===dl||e.$$typeof===fl||e.$$typeof===pl||e.$$typeof===Mv||e.$$typeof===Lv||e.$$typeof===bv||e.$$typeof===Dv)};ne.typeOf=gt;Qm.exports=ne;var Fv=Qm.exports,Fc=Fv,zv={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$v={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},jv={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xm={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},zc={};zc[Fc.ForwardRef]=jv;zc[Fc.Memo]=Xm;function Tf(e){return Fc.isMemo(e)?Xm:zc[e.$$typeof]||zv}var Bv=Object.defineProperty,Uv=Object.getOwnPropertyNames,Nf=Object.getOwnPropertySymbols,Wv=Object.getOwnPropertyDescriptor,Hv=Object.getPrototypeOf,Rf=Object.prototype;function qm(e,t,n){if(typeof t!="string"){if(Rf){var r=Hv(t);r&&r!==Rf&&qm(e,r,n)}var i=Uv(t);Nf&&(i=i.concat(Nf(t)));for(var s=Tf(e),o=Tf(t),l=0;l<i.length;++l){var a=i[l];if(!$v[a]&&!(n&&n[a])&&!(o&&o[a])&&!(s&&s[a])){var u=Wv(t,a);try{Bv(e,a,u)}catch{}}}}return e}var Vv=qm;const Gv=Rh(Vv);function Bt(){return(Bt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Af=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},fu=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Km.typeOf(e)},xo=Object.freeze([]),In=Object.freeze({});function Br(e){return typeof e=="function"}function Pf(e){return e.displayName||e.name||"Component"}function $c(e){return e&&typeof e.styledComponentId=="string"}var Ur=typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",jc=typeof window<"u"&&"HTMLElement"in window,Kv=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&process.env!==void 0&&({}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""&&{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY));function Zn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var Qv=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,s=i.length,o=s;n>=o;)(o<<=1)<0&&Zn(16,""+n);this.groupSizes=new Uint32Array(o),this.groupSizes.set(i),this.length=o;for(var l=s;l<o;l++)this.groupSizes[l]=0}for(var a=this.indexOfGroup(n+1),u=0,d=r.length;u<d;u++)this.tag.insertRule(a,r[u])&&(this.groupSizes[n]++,a++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),s=i+r;this.groupSizes[n]=0;for(var o=i;o<s;o++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],s=this.indexOfGroup(n),o=s+i,l=s;l<o;l++)r+=this.tag.getRule(l)+`/*!sc*/
`;return r},e}(),Qs=new Map,So=new Map,Ai=1,As=function(e){if(Qs.has(e))return Qs.get(e);for(;So.has(Ai);)Ai++;var t=Ai++;return Qs.set(e,t),So.set(t,e),t},Yv=function(e){return So.get(e)},Xv=function(e,t){t>=Ai&&(Ai=t+1),Qs.set(e,t),So.set(t,e)},qv="style["+Ur+'][data-styled-version="5.3.10"]',Jv=new RegExp("^"+Ur+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),Zv=function(e,t,n){for(var r,i=n.split(","),s=0,o=i.length;s<o;s++)(r=i[s])&&e.registerName(t,r)},e1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,s=n.length;i<s;i++){var o=n[i].trim();if(o){var l=o.match(Jv);if(l){var a=0|parseInt(l[1],10),u=l[2];a!==0&&(Xv(u,a),Zv(e,u,l[3]),e.getTag().insertRules(a,r)),r.length=0}else r.push(o)}}},t1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},Jm=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){for(var a=l.childNodes,u=a.length;u>=0;u--){var d=a[u];if(d&&d.nodeType===1&&d.hasAttribute(Ur))return d}}(n),s=i!==void 0?i.nextSibling:null;r.setAttribute(Ur,"active"),r.setAttribute("data-styled-version","5.3.10");var o=t1();return o&&r.setAttribute("nonce",o),n.insertBefore(r,s),r},n1=function(){function e(n){var r=this.element=Jm(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var s=document.styleSheets,o=0,l=s.length;o<l;o++){var a=s[o];if(a.ownerNode===i)return a}Zn(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),r1=function(){function e(n){var r=this.element=Jm(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),s=this.nodes[n];return this.element.insertBefore(i,s||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),i1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Of=jc,s1={isServer:!jc,useCSSOMInjection:!Kv},Zm=function(){function e(n,r,i){n===void 0&&(n=In),r===void 0&&(r={}),this.options=Bt({},s1,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&jc&&Of&&(Of=!1,function(s){for(var o=document.querySelectorAll(qv),l=0,a=o.length;l<a;l++){var u=o[l];u&&u.getAttribute(Ur)!=="active"&&(e1(s,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(n){return As(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Bt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,s=r.useCSSOMInjection,o=r.target,n=i?new i1(o):s?new n1(o):new r1(o),new Qv(n)));var n,r,i,s,o},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(As(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(As(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(As(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,s="",o=0;o<i;o++){var l=Yv(o);if(l!==void 0){var a=n.names.get(l),u=r.getGroup(o);if(a&&u&&a.size){var d=Ur+".g"+o+'[id="'+l+'"]',c="";a!==void 0&&a.forEach(function(h){h.length>0&&(c+=h+",")}),s+=""+u+d+'{content:"'+c+`"}/*!sc*/
`}}}return s}(this)},e}(),o1=/(a)(d)/gi,Df=function(e){return String.fromCharCode(e+(e>25?39:97))};function hu(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Df(t%52)+n;return(Df(t%52)+n).replace(o1,"$1-$2")}var Sr=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},eg=function(e){return Sr(5381,e)};function l1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Br(n)&&!$c(n))return!1}return!0}var a1=eg("5.3.10"),u1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&l1(t),this.componentId=n,this.baseHash=Sr(a1,n),this.baseStyle=r,Zm.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,s=[];if(this.baseStyle&&s.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))s.push(this.staticRulesId);else{var o=Wr(this.rules,t,n,r).join(""),l=hu(Sr(this.baseHash,o)>>>0);if(!n.hasNameForId(i,l)){var a=r(o,"."+l,void 0,i);n.insertRules(i,l,a)}s.push(l),this.staticRulesId=l}else{for(var u=this.rules.length,d=Sr(this.baseHash,r.hash),c="",h=0;h<u;h++){var v=this.rules[h];if(typeof v=="string")c+=v;else if(v){var g=Wr(v,t,n,r),x=Array.isArray(g)?g.join(""):g;d=Sr(d,x+h),c+=x}}if(c){var T=hu(d>>>0);if(!n.hasNameForId(i,T)){var p=r(c,"."+T,void 0,i);n.insertRules(i,T,p)}s.push(T)}}return s.join(" ")},e}(),c1=/^\s*\/\/.*$/gm,d1=[":","[",".","#"];function f1(e){var t,n,r,i,s=e===void 0?In:e,o=s.options,l=o===void 0?In:o,a=s.plugins,u=a===void 0?xo:a,d=new Nv(l),c=[],h=function(x){function T(p){if(p)try{x(p+"}")}catch{}}return function(p,f,m,w,C,P,L,O,Q,$){switch(p){case 1:if(Q===0&&f.charCodeAt(0)===64)return x(f+";"),"";break;case 2:if(O===0)return f+"/*|*/";break;case 3:switch(O){case 102:case 112:return x(m[0]+f),"";default:return f+($===0?"/*|*/":"")}case-2:f.split("/*|*/}").forEach(T)}}}(function(x){c.push(x)}),v=function(x,T,p){return T===0&&d1.indexOf(p[n.length])!==-1||p.match(i)?x:"."+t};function g(x,T,p,f){f===void 0&&(f="&");var m=x.replace(c1,""),w=T&&p?p+" "+T+" { "+m+" }":m;return t=f,n=T,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),d(p||!T?"":T,w)}return d.use([].concat(u,[function(x,T,p){x===2&&p.length&&p[0].lastIndexOf(n)>0&&(p[0]=p[0].replace(r,v))},h,function(x){if(x===-2){var T=c;return c=[],T}}])),g.hash=u.length?u.reduce(function(x,T){return T.name||Zn(15),Sr(x,T.name)},5381).toString():"",g}var tg=dt.createContext();tg.Consumer;var ng=dt.createContext(),h1=(ng.Consumer,new Zm),pu=f1();function p1(){return we.useContext(tg)||h1}function m1(){return we.useContext(ng)||pu}var g1=function(){function e(t,n){var r=this;this.inject=function(i,s){s===void 0&&(s=pu);var o=r.name+s.hash;i.hasNameForId(r.id,o)||i.insertRules(r.id,o,s(r.rules,o,"@keyframes"))},this.toString=function(){return Zn(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=pu),this.name+t.hash},e}(),y1=/([A-Z])/,_1=/([A-Z])/g,v1=/^ms-/,w1=function(e){return"-"+e.toLowerCase()};function Mf(e){return y1.test(e)?e.replace(_1,w1).replace(v1,"-ms-"):e}var Lf=function(e){return e==null||e===!1||e===""};function Wr(e,t,n,r){if(Array.isArray(e)){for(var i,s=[],o=0,l=e.length;o<l;o+=1)(i=Wr(e[o],t,n,r))!==""&&(Array.isArray(i)?s.push.apply(s,i):s.push(i));return s}if(Lf(e))return"";if($c(e))return"."+e.styledComponentId;if(Br(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var a=e(t);return Wr(a,t,n,r)}var u;return e instanceof g1?n?(e.inject(n,r),e.getName(r)):e:fu(e)?function d(c,h){var v,g,x=[];for(var T in c)c.hasOwnProperty(T)&&!Lf(c[T])&&(Array.isArray(c[T])&&c[T].isCss||Br(c[T])?x.push(Mf(T)+":",c[T],";"):fu(c[T])?x.push.apply(x,d(c[T],T)):x.push(Mf(T)+": "+(v=T,(g=c[T])==null||typeof g=="boolean"||g===""?"":typeof g!="number"||g===0||v in Rv||v.startsWith("--")?String(g).trim():g+"px")+";"));return h?[h+" {"].concat(x,["}"]):x}(e):e.toString()}var bf=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function x1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Br(e)||fu(e)?bf(Wr(Af(xo,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:bf(Wr(Af(e,n)))}var S1=function(e,t,n){return n===void 0&&(n=In),e.theme!==n.theme&&e.theme||t||n.theme},C1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,E1=/(^-|-$)/g;function na(e){return e.replace(C1,"-").replace(E1,"")}var k1=function(e){return hu(eg(e)>>>0)};function Ps(e){return typeof e=="string"&&!0}var mu=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},I1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function T1(e,t,n){var r=e[n];mu(t)&&mu(r)?rg(r,t):e[n]=t}function rg(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,s=n;i<s.length;i++){var o=s[i];if(mu(o))for(var l in o)I1(l)&&T1(e,o[l],l)}return e}var Co=dt.createContext();Co.Consumer;function N1(e){var t=we.useContext(Co),n=we.useMemo(function(){return function(r,i){if(!r)return Zn(14);if(Br(r)){var s=r(i);return s}return Array.isArray(r)||typeof r!="object"?Zn(8):i?Bt({},i,{},r):r}(e.theme,t)},[e.theme,t]);return e.children?dt.createElement(Co.Provider,{value:n},e.children):null}var ra={};function ig(e,t,n){var r=$c(e),i=!Ps(e),s=t.attrs,o=s===void 0?xo:s,l=t.componentId,a=l===void 0?function(f,m){var w=typeof f!="string"?"sc":na(f);ra[w]=(ra[w]||0)+1;var C=w+"-"+k1("5.3.10"+w+ra[w]);return m?m+"-"+C:C}(t.displayName,t.parentComponentId):l,u=t.displayName,d=u===void 0?function(f){return Ps(f)?"styled."+f:"Styled("+Pf(f)+")"}(e):u,c=t.displayName&&t.componentId?na(t.displayName)+"-"+t.componentId:t.componentId||a,h=r&&e.attrs?Array.prototype.concat(e.attrs,o).filter(Boolean):o,v=t.shouldForwardProp;r&&e.shouldForwardProp&&(v=t.shouldForwardProp?function(f,m,w){return e.shouldForwardProp(f,m,w)&&t.shouldForwardProp(f,m,w)}:e.shouldForwardProp);var g,x=new u1(n,c,r?e.componentStyle:void 0),T=x.isStatic&&o.length===0,p=function(f,m){return function(w,C,P,L){var O=w.attrs,Q=w.componentStyle,$=w.defaultProps,Ie=w.foldedComponentIds,Se=w.shouldForwardProp,Oe=w.styledComponentId,at=w.target,Be=function(z,y,H){z===void 0&&(z=In);var N=Bt({},y,{theme:z}),ge={};return H.forEach(function(X){var Z,B,De,et=X;for(Z in Br(et)&&(et=et(N)),et)N[Z]=ge[Z]=Z==="className"?(B=ge[Z],De=et[Z],B&&De?B+" "+De:B||De):et[Z]}),[N,ge]}(S1(C,we.useContext(Co),$)||In,C,O),Gt=Be[0],Ye=Be[1],k=function(z,y,H,N){var ge=p1(),X=m1(),Z=y?z.generateAndInjectStyles(In,ge,X):z.generateAndInjectStyles(H,ge,X);return Z}(Q,L,Gt),b=P,F=Ye.$as||C.$as||Ye.as||C.as||at,ie=Ps(F),R=Ye!==C?Bt({},C,{},Ye):C,A={};for(var D in R)D[0]!=="$"&&D!=="as"&&(D==="forwardedAs"?A.as=R[D]:(Se?Se(D,If,F):!ie||If(D))&&(A[D]=R[D]));return C.style&&Ye.style!==C.style&&(A.style=Bt({},C.style,{},Ye.style)),A.className=Array.prototype.concat(Ie,Oe,k!==Oe?k:null,C.className,Ye.className).filter(Boolean).join(" "),A.ref=b,we.createElement(F,A)}(g,f,m,T)};return p.displayName=d,(g=dt.forwardRef(p)).attrs=h,g.componentStyle=x,g.displayName=d,g.shouldForwardProp=v,g.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):xo,g.styledComponentId=c,g.target=r?e.target:e,g.withComponent=function(f){var m=t.componentId,w=function(P,L){if(P==null)return{};var O,Q,$={},Ie=Object.keys(P);for(Q=0;Q<Ie.length;Q++)O=Ie[Q],L.indexOf(O)>=0||($[O]=P[O]);return $}(t,["componentId"]),C=m&&m+"-"+(Ps(f)?f:na(Pf(f)));return ig(f,Bt({},w,{attrs:h,componentId:C}),n)},Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(f){this._foldedDefaultProps=r?rg({},e.defaultProps,f):f}}),Object.defineProperty(g,"toString",{value:function(){return"."+g.styledComponentId}}),i&&Gv(g,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),g}var gu=function(e){return function t(n,r,i){if(i===void 0&&(i=In),!Km.isValidElementType(r))return Zn(1,String(r));var s=function(){return n(r,i,x1.apply(void 0,arguments))};return s.withConfig=function(o){return t(n,r,Bt({},i,{},o))},s.attrs=function(o){return t(n,r,Bt({},i,{attrs:Array.prototype.concat(i.attrs,o).filter(Boolean)}))},s}(ig,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){gu[e]=gu(e)});const E=gu,_l=we.createContext({show:!1,updateShow:()=>!0,success:!1,setSuccess:()=>!0,content:"",setContent:()=>!0});function R1(){const{show:e,success:t,content:n}=we.useContext(_l);return e?_.jsx(A1,{bg:t?"blue":"#e91e63",children:_.jsxs(P1,{children:[t?_.jsx(xv,{style:{width:24,height:24}}):_.jsx(kv,{}),_.jsx("span",{children:n})]})}):null}const A1=E.div`
  position: fixed;
  display: flex;
  flex-direction: column-reverse;
  justify-content: flex-end;
  flex-wrap: wrap-reverse;
  align-items: flex-start;
  bottom: 50px;
  left: 30px;
  max-height: 100vh;
  background-color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t[e.bg])||e.bg}};
  color: white;
  border-radius: 12px;
  padding: 10px;
  z-index: 999;
`,P1=E.div`
  display: flex;
  align-items: center;
  gap: 10px;
`,sg="/assets/gsbench-logo-1bc38a39.svg",Ys={colors:{main:"#13A6FA",blue:"#293FCC",dark_blue:"#090F4E",gray:"#63657E",white:"#ffffff",light_blue:"#F8FAFF",border:"#f5f6fa"},radius:{sm:6,md:8,lg:10,xl:12,xxl:14,input:50}};function Xr({color:e=Ys.colors.white,bg:t=Ys.colors.main,radius:n=Ys.radius.sm,padding:r="8px 12px",fontSize:i=14,fontWeight:s=500,breakpoint:o=768,small:l={},...a}){return _.jsx(O1,{color:e,bg:t,radius:n,padding:r,fontSize:i,fontWeight:s,breakpoint:o,smallRadius:l==null?void 0:l.radius,smallPadding:l==null?void 0:l.padding,smallFontSize:l==null?void 0:l.fontSize,smallFontWeight:l==null?void 0:l.fontWeight,...a,children:a.children})}const O1=E.button`
  outline: none;
  border: none;
  border-radius: ${e=>{var t;return`${((t=e.theme.radius)==null?void 0:t[e.radius])||e.radius}px`}};
  cursor: pointer;
  padding: ${e=>e.padding};
  color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t[e.color])||e.color}};
  background-color: ${e=>{var t;return((t=e.theme.colors)==null?void 0:t[e.bg])||e.bg}};
  font-weight: ${e=>e.fontWeight};
  font-size: ${e=>`${e.fontSize}px`};
  transition: 1s ease-out;
  -webkit-transition: 1s ease-out;
  -o-transition: 1s ease-out;
  ${e=>e.loading&&"cursor: wait;"}

  &:hover {
    filter: brightness(88%);
    -webkit-filter: brightness(88%);
  }

  ${e=>e.breakpoint&&`
    @media screen and (max-width: ${e.breakpoint}px) {
      padding: ${e.smallPadding};
      border-radius: ${e.smallRadius};
      font-weight: ${e.smallFontWeight};
      font-size: ${e.smallFontSize}px;
    }
  `}
`;function vl({children:e,background:t,paddingSmall:n=!0,...r}){return _.jsx(D1,{background:t,paddingSmall:n,...r,children:e})}const D1=E.section`
  padding-inline: 14vw;
  ${e=>e.background&&`background: ${e.background}`};

  @media screen and (max-width: 1570px) {
    padding-inline: 8vw;
  }

  /* @media screen and (max-width: 1440px) {
    padding-inline: 10vw;
  } */

  @media screen and (max-width: 1200px) {
    padding-inline: 8vw;
  }

  @media screen and (max-width: 992px) {
    padding-inline: 6vw;
  }

  @media screen and (max-width: 768px) {
    padding-inline: ${e=>e.paddingSmall?"10px":"0px"};
  }
`;function og({radius:e="input",name:t,required:n=!0,...r}){return _.jsx(M1,{required:n,radius:e,name:t,...r})}const M1=E.input`
  height: 27px;
  border: none;
  background: white;
  padding: 10px 20px;
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  color: ${e=>e.theme.colors.gray};
  border-radius: ${e=>{var t;return`${((t=e.theme.radius)==null?void 0:t[e.radius])||e.radius}px`}};
  &:focus {
    outline: none;
  }
  &::placeholder {
    color: rgba(11, 7, 87, 0.2);
  }

  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`,L1=e=>we.createElement("svg",{id:"L9",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 100 100",enableBackground:"new 0 0 0 0",xmlSpace:"preserve",...e},we.createElement("path",{fill:"#fff",d:"M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50"},we.createElement("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})));function lg(){return _.jsx(L1,{style:{display:"inline",height:"22px",width:"22px",verticalAlign:"middle"}})}function b1(){return _.jsxs(F1,{id:"header",children:[_.jsx(z1,{src:sg,alt:"GSBench",id:"logo"}),_.jsx("nav",{children:_.jsxs($1,{children:[_.jsx(Os,{children:_.jsx(ia,{href:"#effective",children:"Effective"})}),_.jsx(Os,{children:_.jsx(ia,{href:"#pricing",children:"Pricing"})}),_.jsx(Os,{children:_.jsx(ia,{href:"#services",children:"Services"})}),_.jsx(Os,{children:_.jsx("a",{href:"#contact",children:_.jsx(Xr,{color:"white",padding:"12px 32px",fontSize:18,small:{fontSize:12,fontWeight:500,padding:"6px 9px"},children:"Contact us"})})})]})})]})}const F1=E.header`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-block: 18px;

  @media screen and (max-width: 768px) {
    padding-top: 6px;
  }
`,z1=E.img`
  cursor: pointer;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`,$1=E.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  gap: 5vw;

  @media screen and (max-width: 768px) {
    gap: 16px;
  }
`,Os=E.li`
  font-size: 18px;
  cursor: pointer;
  color: ${e=>e.theme.colors.dark_blue};

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`,ia=E.a`
  color: inherit;
  &:hover,
  &:focus {
    color: inherit;
  }
`,j1="/assets/Intro-a49b874f.png";function B1(){return _.jsxs(U1,{children:[_.jsxs(W1,{children:[_.jsx(Q1,{bg:"light_blue",color:"blue",radius:"md",fontWeight:600,padding:"10px 20px",children:"Welcome GSBench"}),_.jsx(H1,{children:"Make your business easily with the good and seamless infrastructure"}),_.jsx(V1,{children:"Get something better together, you have a best business, we make sure the best infrastructure for you"}),_.jsx("a",{href:"#contact",children:_.jsx(Xr,{color:"white",padding:"12px 32px",fontSize:18,small:{fontSize:12,fontWeight:500,padding:"6px 9px"},children:"Contact us"})})]}),_.jsx(G1,{children:_.jsx(K1,{src:j1,alt:"Make your business easily with the good and seamless infrastructure"})})]})}const U1=E.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  @media screen and (max-width: 768px) {
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
  }
`,W1=E.div`
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  width: 40vw;
  margin-block: 70px;

  @media screen and (max-width: 992px) {
    margin-block: 30px;
  }

  @media screen and (max-width: 768px) {
    -webkit-box-ordinal-group: 3;
    -ms-flex-order: 2;
    order: 2;
    -webkit-order: 2;
    width: 100%;
    text-align: center;
    margin-block: 10px;
  }
`,H1=E.h1`
  font-size: 44px;
  color: ${e=>e.theme.colors.dark_blue};
  font-weight: 600;
  line-height: 120%;
  margin-block: 20px;

  @media screen and (max-width: 1440px) {
    font-size: 40px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 36px;
  }

  @media screen and (max-width: 992px) {
    font-size: 32px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-inline: 20px;
  }
`,V1=E.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 180%;
  opacity: 0.7;
  color: ${e=>e.theme.colors.gray};
  margin-block: 0 20px;

  @media screen and (max-width: 1200px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`,G1=E.div`
  width: 50vw;
  @media screen and (max-width: 768px) {
    -webkit-box-ordinal-group: 2;
    -ms-flex-order: 1;
    order: 1;
    -webkit-order: 1;
    width: 100%;
    text-align: center;
  }
`,K1=E.img`
  width: 100%;
  height: auto;
`,Q1=E(Xr)`
  cursor: auto;

  &:hover {
    filter: brightness(100%);
  }
`,Y1="/assets/AnsibleLogo-629b1d70.svg",X1="/assets/GithubLogo-7e457a5a.svg",q1="/assets/JenkinLogo-228a367c.svg",J1="/assets/KubernetesLogo-0a0c0777.svg",Z1="/assets/TerraformLogo-87c28762.svg",ew="/assets/MVP-33ae9327.svg",tw="/assets/Infra-bb46d77a.svg",nw="/assets/Microservice-0f2e726f.svg",rw="/assets/KubernetesClustering-809265e2.svg",iw="/assets/CICD-95e007b0.svg",sw="/assets/Secure-f55057ed.svg",ow="/assets/GrowBusiness-aa09a0e0.svg",lw="/assets/OptimizeCost-6f516162.svg",aw="/assets/AccessTalents-298d25b7.svg",uw=[{logo:X1,alt:"Github"},{logo:Z1,alt:"Terraform"},{logo:Y1,alt:"Ansible"},{logo:q1,alt:"Jenkins"},{logo:J1,alt:"Kubernetes"}],cw=[{type:"Consulting",description:"Review, consult and get the solution details for client",price:1e3,price_desc:"At least for a contract",detail:[{content:"Review and analysis requirements"},{content:"Design the system architectures"},{content:"Get props & cons in the solutions"},{content:"Return document costs details"},{content:"Return the architecture details"}]},{type:"Release",description:"Join to develop and release the infrastructure",price:3e3,price_desc:"At least for a contract",detail:[{content:"Apply all process from Consulting",highlight:!0},{content:"Develop following the solution"},{content:"Insure the quality of the system"},{content:"Transfer all resource for the client"},{content:"Maintain 6 months after release",highlight:!0}]},{type:"Maintain",description:"Help to fix bugs, improve, optimize or upgrade the services",price:2e3,price_desc:"At least for a contract",detail:[{content:"Review and report all issues"},{content:"Get some methods for maintaince"},{content:"Fix bugs and improve the system"},{content:"Transfer all resources for the client"},{content:"Maintain 6 or 12 months",highlight:!0}]}],dw=[{icon:ew,text:"Simple architecture for MVP"},{icon:tw,text:"Infrastructure as Code"},{icon:nw,text:"Microservice architecture"},{icon:rw,text:"Kubernetes clustering"},{icon:iw,text:"CI/CD Pipelines"},{icon:sw,text:"Security Operations"}],fw=[{icon:yv,link:""},{icon:wv,link:""},{icon:_v,link:""},{icon:vv,link:""}],yt=[{icon:ow,title:"Grow Your Business",description:"Focusing on business how to grow the best profile",star:1},{icon:lw,title:"Optimize your cost",description:"Improve and manage cost for infrastructure as well",star:2},{icon:aw,title:"Access to talents",description:"Can support, maintain and get faster deliveries with better quality",star:3}];function hw(){return _.jsx(pw,{children:uw.map(e=>_.jsx(mw,{children:_.jsx(gw,{src:e.logo,alt:e.alt,title:e.alt})},e.alt))})}const pw=E.ul`
  margin-block: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-evenly;
`,mw=E.li``,gw=E.img`
  @media screen and (max-width: 768px) {
    width: 88px;
    height: auto;
  }
`;function yw(){return _.jsxs(vl,{id:"header",background:"linear-gradient(178.7deg, #e4ecff 1.11%, rgba(234, 240, 255, 0) 103.22%);",children:[_.jsx(b1,{}),_.jsx(B1,{}),_.jsx(hw,{})]})}function _w({star:e}){return _.jsxs(Cw,{children:[Array(e).fill(0).map((t,n)=>_.jsx(kf,{style:{color:"#FFCB4B",width:13}},n)),Array(3-e).fill(0).map((t,n)=>_.jsx(kf,{style:{color:"#B3B3C8",width:13}},n))]})}function sa({icon:e,title:t,description:n,star:r}){return _.jsxs(vw,{children:[_.jsx(ww,{src:e,alt:t}),_.jsx(xw,{children:t}),_.jsx(Sw,{children:n}),_.jsx(Ew,{children:_.jsx(_w,{star:r})})]})}const vw=E.div`
  background: #ffffff;
  border: 1px solid #e9edff;
  box-shadow: 0px 20px 47px rgba(0, 0, 0, 0.05);
  border-radius: 10px;
  padding: 10px 20px 30px;
  width: 240px;

  @media screen and (max-width: 992px) {
    width: 148px;
    padding: 11px 10px;
  }
  @media screen and (max-width: 360px) {
    width: 135px;
  }
`,ww=E.img`
  @media screen and (max-width: 992px) {
    width: 32px;
    height: auto;
  }
`,xw=E.h2`
  font-weight: 500;
  font-size: 20px;
  color: ${e=>e.theme.colors.dark_blue};
  text-shadow: 1px 1px 1px #e9edff;
  @media screen and (max-width: 992px) {
    font-size: 12px;
  }
`,Sw=E.p`
  font-weight: 400;
  font-size: 16px;
  color: ${e=>e.theme.colors.gray};
  text-shadow: 1px 1px 1px #e9edff;
  @media screen and (max-width: 992px) {
    font-size: 8px;
  }
`,Cw=E.div`
  display: flex;
  gap: 4px;
`,Ew=E.div`
  display: flex;
  justify-content: right;
`,kw="/assets/Effective-cabf21eb.png";function Iw(){return _.jsx(vl,{id:"effective",children:_.jsxs(Fw,{children:[_.jsxs(Nw,{children:[_.jsx(Rw,{children:"Perfect Solution For Your Business"}),_.jsx(Aw,{children:"Graphs displaying your performance for metrics like follower evolution, average rate per post and reach and impressions to give you the insights."})]}),_.jsxs(Pw,{children:[_.jsxs(Tw,{children:[_.jsx(Mw,{children:_.jsx(sa,{title:yt[0].title,description:yt[0].description,icon:yt[0].icon,star:yt[0].star})}),_.jsx(Lw,{children:_.jsx(sa,{title:yt[1].title,description:yt[1].description,icon:yt[1].icon,star:yt[1].star})}),_.jsx(bw,{children:_.jsx(sa,{title:yt[2].title,description:yt[2].description,icon:yt[2].icon,star:yt[2].star})})]}),_.jsx(Ow,{children:_.jsx(Dw,{src:kw,alt:"effective"})})]})]})})}const Tw=E.div`
  display: flex;
  flex-wrap: wrap;
  width: 900px;
  gap: 0px;

  @media screen and (max-width: 1600px) {
    width: 700px;
  }

  @media screen and (max-width: 1440px) {
    width: 600px;
  }

  @media screen and (max-width: 1200px) {
    width: 500px;
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    gap: 16px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    gap: 10px;
    margin-left: 40px;
  }

  @media screen and (max-width: 540px) {
    margin-left: 0px;
  }
`,Nw=E.div`
  text-align: center;
`,Rw=E.h2`
  font-size: 30px;
  color: ${e=>e.theme.colors.dark_blue};

  @media screen and (max-width: 992px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`,Aw=E.p`
  font-size: 18px;
  color: ${e=>e.theme.colors.gray};
  padding-inline: 11vw;

  @media screen and (max-width: 992px) {
    font-size: 14px;
  }

  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Pw=E.div`
  display: flex;
  flex-wrap: wrap;
`,Ow=E.div`
  flex-grow: 1;
  margin-left: -400px;
  width: 800px;

  @media screen and (max-width: 1600px) {
    margin-left: -400px;
    width: 600px;
  }

  @media screen and (max-width: 1440px) {
    margin-left: -300px;
    width: 400px;
  }

  @media screen and (max-width: 1200px) {
    margin-left: -100px;
    width: 200px;
  }

  @media screen and (max-width: 992px) {
    display: flex;
    justify-content: right;
    margin-top: -130px;
  }

  @media screen and (max-width: 820px) {
    margin-top: -220px;
  }

  @media screen and (max-width: 540px) {
    margin-top: -130px;
  }
`,Dw=E.img`
  width: 100%;
  height: auto;
  max-width: 100vw;
  @media screen and (max-width: 992px) {
    width: 75vw;
  }
`,Mw=E.div`
  width: 100%;
  margin-left: 140px;
  z-index: 3;

  @media screen and (max-width: 992px) {
    margin-left: 0px;
    width: auto;
  }
`,Lw=E.div`
  margin-top: -250px;
  z-index: 4;

  @media screen and (max-width: 1200px) {
    margin-top: -30px;
  }

  @media screen and (max-width: 992px) {
    margin-top: 0px;
  }
`,bw=E.div`
  margin-top: -220px;
  margin-left: 60px;
  z-index: 2;

  @media screen and (max-width: 1200px) {
    margin-top: -20px;
  }

  @media screen and (max-width: 992px) {
    margin-top: 0px;
    margin-left: 0px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`,Fw=E.div`
  margin-block: 60px 20px;
`,zw="/assets/Checkmark-8b249f27.svg";function $w({price:e}){return _.jsxs(jw,{children:[_.jsx(Bw,{children:e.type}),_.jsx(Uw,{children:e.description}),_.jsx(Ww,{}),_.jsx("ul",{children:e.detail.map((t,n)=>_.jsxs(Hw,{children:[_.jsx(Gw,{src:zw,alt:"check-mark"}),_.jsx(Vw,{highlight:!!t.highlight,children:t.content})]},n))})]})}const jw=E.li`
  border-radius: 15px;
  padding: 43px 39px;
  border: 2px solid ${e=>e.theme.colors.border};
  text-align: left;
  width: 280px;
  background-color: white;

  @media screen and (max-width: 992px) {
    width: 250px;
    margin-inline: 6px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 16px;
    margin-inline: 20px;
  }
`,Bw=E.h3`
  font-size: 28px;
  font-weight: 600;
  color: ${e=>e.theme.colors.dark_blue};
  margin-block: 0px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
`,Uw=E.p`
  color: ${e=>e.theme.colors.gray};
  font-size: 16px;
  line-height: 150%;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`,Ww=E.hr`
  border: 1px solid ${e=>e.theme.colors.border};
  margin-block: 20px;

  @media screen and (max-width: 768px) {
    border: 2px solid ${e=>e.theme.colors.border};
    margin-block: 16px;
  }
`,Hw=E.li`
  margin-block: 10px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`,Vw=E.span`
  color: ${e=>e.highlight?e.theme.colors.blue:e.theme.colors.gray};
  font-weight: ${e=>e.highlight?700:500};
  vertical-align: super;
  margin-left: 10px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    font-size: 12px;
    vertical-align: text-top;
  }
`,Gw=E.img`
  width: 24px;

  @media screen and (max-width: 768px) {
    width: 18px;
  }
`;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ag={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I=function(e,t){if(!e)throw qr(t)},qr=function(e){return new Error("Firebase Database ("+ag.SDK_VERSION+") INTERNAL ASSERT FAILED: "+e)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ug=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Kw=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],o=e[n++],l=e[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(a&1023))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return t.join("")},Bc={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],o=i+1<e.length,l=o?e[i+1]:0,a=i+2<e.length,u=a?e[i+2]:0,d=s>>2,c=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,v=u&63;a||(v=64,o||(h=64)),r.push(n[d],n[c],n[h],n[v])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(ug(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Kw(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],l=i<e.length?n[e.charAt(i)]:0;++i;const u=i<e.length?n[e.charAt(i)]:64;++i;const c=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||l==null||u==null||c==null)throw new Qw;const h=s<<2|l>>4;if(r.push(h),u!==64){const v=l<<4&240|u>>2;if(r.push(v),c!==64){const g=u<<6&192|c;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Qw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const cg=function(e){const t=ug(e);return Bc.encodeByteArray(t,!0)},Eo=function(e){return cg(e).replace(/\./g,"")},yu=function(e){try{return Bc.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yw(e){return dg(void 0,e)}function dg(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:e===void 0&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)!t.hasOwnProperty(n)||!Xw(n)||(e[n]=dg(e[n],t[n]));return e}function Xw(e){return e!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jw=()=>qw().__FIREBASE_DEFAULTS__,Zw=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},ex=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&yu(e[1]);return t&&JSON.parse(t)},fg=()=>{try{return Jw()||Zw()||ex()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},tx=e=>{var t,n;return(n=(t=fg())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},nx=e=>{const t=tx(e);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const r=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),r]:[t.substring(0,n),r]},hg=()=>{var e;return(e=fg())===null||e===void 0?void 0:e.config};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rx(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),l="";return[Eo(JSON.stringify(n)),Eo(JSON.stringify(o)),l].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ix(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pg(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ix())}function sx(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mg(){return ag.NODE_ADMIN===!0}function ox(){try{return typeof indexedDB=="object"}catch{return!1}}function lx(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ax="FirebaseError";class ls extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=ax,Object.setPrototypeOf(this,ls.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gg.prototype.create)}}class gg{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],o=s?ux(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new ls(i,l,r)}}function ux(e,t){return e.replace(cx,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const cx=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(e){return JSON.parse(e)}function ze(e){return JSON.stringify(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=function(e){let t={},n={},r={},i="";try{const s=e.split(".");t=qi(yu(s[0])||""),n=qi(yu(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:t,claims:n,data:r,signature:i}},dx=function(e){const t=yg(e),n=t.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fx=function(e){const t=yg(e).claims;return typeof t=="object"&&t.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function an(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function Hr(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]}function Ff(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function ko(e,t,n){const r={};for(const i in e)Object.prototype.hasOwnProperty.call(e,i)&&(r[i]=t.call(n,e[i],i,e));return r}function _u(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],o=t[i];if(zf(s)&&zf(o)){if(!_u(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function zf(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hx(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class px{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(t,n){n||(n=0);const r=this.W_;if(typeof t=="string")for(let c=0;c<16;c++)r[c]=t.charCodeAt(n)<<24|t.charCodeAt(n+1)<<16|t.charCodeAt(n+2)<<8|t.charCodeAt(n+3),n+=4;else for(let c=0;c<16;c++)r[c]=t[n]<<24|t[n+1]<<16|t[n+2]<<8|t[n+3],n+=4;for(let c=16;c<80;c++){const h=r[c-3]^r[c-8]^r[c-14]^r[c-16];r[c]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,d;for(let c=0;c<80;c++){c<40?c<20?(u=l^s&(o^l),d=1518500249):(u=s^o^l,d=1859775393):c<60?(u=s&o|l&(s|o),d=2400959708):(u=s^o^l,d=3395469782);const h=(i<<5|i>>>27)+u+a+d+r[c]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(t,n){if(t==null)return;n===void 0&&(n=t.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<n;)if(s[o]=t.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=t[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const t=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)t[r]=this.chain_[i]>>s&255,++r;return t}}function Uc(e,t){return`${e} failed: ${t} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mx=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,I(r<e.length,"Surrogate pair missing trail surrogate.");const o=e.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):i<65536?(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},xl=function(e){let t=0;for(let n=0;n<e.length;n++){const r=e.charCodeAt(n);r<128?t++:r<2048?t+=2:r>=55296&&r<=56319?(t+=4,n++):t+=3}return t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){return e&&e._delegate?e._delegate:e}class Ji{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gx{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new wl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(_x(t))try{this.getOrInitializeService({instanceIdentifier:zn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=zn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=zn){return this.instances.has(t)}getOptions(t=zn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&t(o,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:yx(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=zn){return this.component?this.component.multipleInstances?t:zn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function yx(e){return e===zn?void 0:e}function _x(e){return e.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vx{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new gx(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var se;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(se||(se={}));const wx={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},xx=se.INFO,Sx={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},Cx=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=Sx[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class _g{constructor(t){this.name=t,this._logLevel=xx,this._logHandler=Cx,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in se))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?wx[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...t),this._logHandler(this,se.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...t),this._logHandler(this,se.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,se.INFO,...t),this._logHandler(this,se.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,se.WARN,...t),this._logHandler(this,se.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...t),this._logHandler(this,se.ERROR,...t)}}const Ex=(e,t)=>t.some(n=>e instanceof n);let $f,jf;function kx(){return $f||($f=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ix(){return jf||(jf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const vg=new WeakMap,vu=new WeakMap,wg=new WeakMap,oa=new WeakMap,Wc=new WeakMap;function Tx(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",o)},s=()=>{n(Tn(e.result)),i()},o=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",o)});return t.then(n=>{n instanceof IDBCursor&&vg.set(n,e)}).catch(()=>{}),Wc.set(t,e),t}function Nx(e){if(vu.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",o),e.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",o),e.addEventListener("abort",o)});vu.set(e,t)}let wu={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return vu.get(e);if(t==="objectStoreNames")return e.objectStoreNames||wg.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Rx(e){wu=e(wu)}function Ax(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(la(this),t,...n);return wg.set(r,t.sort?t.sort():[t]),Tn(r)}:Ix().includes(e)?function(...t){return e.apply(la(this),t),Tn(vg.get(this))}:function(...t){return Tn(e.apply(la(this),t))}}function Px(e){return typeof e=="function"?Ax(e):(e instanceof IDBTransaction&&Nx(e),Ex(e,kx())?new Proxy(e,wu):e)}function Tn(e){if(e instanceof IDBRequest)return Tx(e);if(oa.has(e))return oa.get(e);const t=Px(e);return t!==e&&(oa.set(e,t),Wc.set(t,e)),t}const la=e=>Wc.get(e);function Ox(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),l=Tn(o);return r&&o.addEventListener("upgradeneeded",a=>{r(Tn(o.result),a.oldVersion,a.newVersion,Tn(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const Dx=["get","getKey","getAll","getAllKeys","count"],Mx=["put","add","delete","clear"],aa=new Map;function Bf(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(aa.get(t))return aa.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=Mx.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Dx.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return aa.set(t,s),s}Rx(e=>({...e,get:(t,n,r)=>Bf(t,n)||e.get(t,n,r),has:(t,n)=>!!Bf(t,n)||e.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lx{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(bx(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function bx(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const xu="@firebase/app",Uf="0.9.10";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const er=new _g("@firebase/app"),Fx="@firebase/app-compat",zx="@firebase/analytics-compat",$x="@firebase/analytics",jx="@firebase/app-check-compat",Bx="@firebase/app-check",Ux="@firebase/auth",Wx="@firebase/auth-compat",Hx="@firebase/database",Vx="@firebase/database-compat",Gx="@firebase/functions",Kx="@firebase/functions-compat",Qx="@firebase/installations",Yx="@firebase/installations-compat",Xx="@firebase/messaging",qx="@firebase/messaging-compat",Jx="@firebase/performance",Zx="@firebase/performance-compat",eS="@firebase/remote-config",tS="@firebase/remote-config-compat",nS="@firebase/storage",rS="@firebase/storage-compat",iS="@firebase/firestore",sS="@firebase/firestore-compat",oS="firebase",lS="9.22.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Su="[DEFAULT]",aS={[xu]:"fire-core",[Fx]:"fire-core-compat",[$x]:"fire-analytics",[zx]:"fire-analytics-compat",[Bx]:"fire-app-check",[jx]:"fire-app-check-compat",[Ux]:"fire-auth",[Wx]:"fire-auth-compat",[Hx]:"fire-rtdb",[Vx]:"fire-rtdb-compat",[Gx]:"fire-fn",[Kx]:"fire-fn-compat",[Qx]:"fire-iid",[Yx]:"fire-iid-compat",[Xx]:"fire-fcm",[qx]:"fire-fcm-compat",[Jx]:"fire-perf",[Zx]:"fire-perf-compat",[eS]:"fire-rc",[tS]:"fire-rc-compat",[nS]:"fire-gcs",[rS]:"fire-gcs-compat",[iS]:"fire-fst",[sS]:"fire-fst-compat","fire-js":"fire-js",[oS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=new Map,Cu=new Map;function uS(e,t){try{e.container.addComponent(t)}catch(n){er.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function To(e){const t=e.name;if(Cu.has(t))return er.debug(`There were multiple attempts to register component ${t}.`),!1;Cu.set(t,e);for(const n of Io.values())uS(n,e);return!0}function cS(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dS={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Nn=new gg("app","Firebase",dS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ji("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Nn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hS=lS;function xg(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:Su,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Nn.create("bad-app-name",{appName:String(i)});if(n||(n=hg()),!n)throw Nn.create("no-options");const s=Io.get(i);if(s){if(_u(n,s.options)&&_u(r,s.config))return s;throw Nn.create("duplicate-app",{appName:i})}const o=new vx(i);for(const a of Cu.values())o.addComponent(a);const l=new fS(n,r,o);return Io.set(i,l),l}function pS(e=Su){const t=Io.get(e);if(!t&&e===Su&&hg())return xg();if(!t)throw Nn.create("no-app",{appName:e});return t}function Ar(e,t,n){var r;let i=(r=aS[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=t.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${t}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),er.warn(l.join(" "));return}To(new Ji(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mS="firebase-heartbeat-database",gS=1,Zi="firebase-heartbeat-store";let ua=null;function Sg(){return ua||(ua=Ox(mS,gS,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Zi)}}}).catch(e=>{throw Nn.create("idb-open",{originalErrorMessage:e.message})})),ua}async function yS(e){try{return await(await Sg()).transaction(Zi).objectStore(Zi).get(Cg(e))}catch(t){if(t instanceof ls)er.warn(t.message);else{const n=Nn.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});er.warn(n.message)}}}async function Wf(e,t){try{const r=(await Sg()).transaction(Zi,"readwrite");await r.objectStore(Zi).put(t,Cg(e)),await r.done}catch(n){if(n instanceof ls)er.warn(n.message);else{const r=Nn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});er.warn(r.message)}}}function Cg(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _S=1024,vS=30*24*60*60*1e3;class wS{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Hf();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=vS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Hf(),{heartbeatsToSend:n,unsentEntries:r}=xS(this._heartbeatsCache.heartbeats),i=Eo(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hf(){return new Date().toISOString().substring(0,10)}function xS(e,t=_S){const n=[];let r=e.slice();for(const i of e){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Vf(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Vf(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SS{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ox()?lx().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await yS(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wf(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function Vf(e){return Eo(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(e){To(new Ji("platform-logger",t=>new Lx(t),"PRIVATE")),To(new Ji("heartbeat",t=>new wS(t),"PRIVATE")),Ar(xu,Uf,e),Ar(xu,Uf,"esm2017"),Ar("fire-js","")}CS("");const Gf="@firebase/database",Kf="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Eg="";function ES(e){Eg=e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kS{constructor(t){this.domStorage_=t,this.prefix_="firebase:"}set(t,n){n==null?this.domStorage_.removeItem(this.prefixedName_(t)):this.domStorage_.setItem(this.prefixedName_(t),ze(n))}get(t){const n=this.domStorage_.getItem(this.prefixedName_(t));return n==null?null:qi(n)}remove(t){this.domStorage_.removeItem(this.prefixedName_(t))}prefixedName_(t){return this.prefix_+t}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IS{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(t,n){n==null?delete this.cache_[t]:this.cache_[t]=n}get(t){return an(this.cache_,t)?this.cache_[t]:null}remove(t){delete this.cache_[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kg=function(e){try{if(typeof window<"u"&&typeof window[e]<"u"){const t=window[e];return t.setItem("firebase:sentinel","cache"),t.removeItem("firebase:sentinel"),new kS(t)}}catch{}return new IS},Wn=kg("localStorage"),Eu=kg("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pr=new _g("@firebase/database"),TS=function(){let e=1;return function(){return e++}}(),Ig=function(e){const t=mx(e),n=new px;n.update(t);const r=n.digest();return Bc.encodeByteArray(r)},as=function(...e){let t="";for(let n=0;n<e.length;n++){const r=e[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?t+=as.apply(null,r):typeof r=="object"?t+=ze(r):t+=r,t+=" "}return t};let Kn=null,Qf=!0;const NS=function(e,t){I(!t||e===!0||e===!1,"Can't turn on custom loggers persistently."),e===!0?(Pr.logLevel=se.VERBOSE,Kn=Pr.log.bind(Pr),t&&Eu.set("logging_enabled",!0)):typeof e=="function"?Kn=e:(Kn=null,Eu.remove("logging_enabled"))},Ge=function(...e){if(Qf===!0&&(Qf=!1,Kn===null&&Eu.get("logging_enabled")===!0&&NS(!0)),Kn){const t=as.apply(null,e);Kn(t)}},us=function(e){return function(...t){Ge(e,...t)}},ku=function(...e){const t="FIREBASE INTERNAL ERROR: "+as(...e);Pr.error(t)},sn=function(...e){const t=`FIREBASE FATAL ERROR: ${as(...e)}`;throw Pr.error(t),new Error(t)},lt=function(...e){const t="FIREBASE WARNING: "+as(...e);Pr.warn(t)},RS=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&lt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Tg=function(e){return typeof e=="number"&&(e!==e||e===Number.POSITIVE_INFINITY||e===Number.NEGATIVE_INFINITY)},AS=function(e){if(document.readyState==="complete")e();else{let t=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}t||(t=!0,e())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Vr="[MIN_NAME]",tr="[MAX_NAME]",Zr=function(e,t){if(e===t)return 0;if(e===Vr||t===tr)return-1;if(t===Vr||e===tr)return 1;{const n=Yf(e),r=Yf(t);return n!==null?r!==null?n-r===0?e.length-t.length:n-r:-1:r!==null?1:e<t?-1:1}},PS=function(e,t){return e===t?0:e<t?-1:1},fi=function(e,t){if(t&&e in t)return t[e];throw new Error("Missing required key ("+e+") in object: "+ze(t))},Hc=function(e){if(typeof e!="object"||e===null)return ze(e);const t=[];for(const r in e)t.push(r);t.sort();let n="{";for(let r=0;r<t.length;r++)r!==0&&(n+=","),n+=ze(t[r]),n+=":",n+=Hc(e[t[r]]);return n+="}",n},Ng=function(e,t){const n=e.length;if(n<=t)return[e];const r=[];for(let i=0;i<n;i+=t)i+t>n?r.push(e.substring(i,n)):r.push(e.substring(i,i+t));return r};function kt(e,t){for(const n in e)e.hasOwnProperty(n)&&t(n,e[n])}const Rg=function(e){I(!Tg(e),"Invalid JSON number");const t=11,n=52,r=(1<<t-1)-1;let i,s,o,l,a;e===0?(s=0,o=0,i=1/e===-1/0?1:0):(i=e<0,e=Math.abs(e),e>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(e)/Math.LN2),r),s=l+r,o=Math.round(e*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(e/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=t;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const d=u.join("");let c="";for(a=0;a<64;a+=8){let h=parseInt(d.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),c=c+h}return c.toLowerCase()},OS=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},DS=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"},MS=new RegExp("^-?(0*)\\d{1,10}$"),LS=-2147483648,bS=2147483647,Yf=function(e){if(MS.test(e)){const t=Number(e);if(t>=LS&&t<=bS)return t}return null},ei=function(e){try{e()}catch(t){setTimeout(()=>{const n=t.stack||"";throw lt("Exception was thrown by user callback.",n),t},Math.floor(0))}},FS=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Pi=function(e,t){const n=setTimeout(e,t);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zS{constructor(t,n){this.appName_=t,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(t){return this.appCheck?this.appCheck.getToken(t):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(t))}notifyForInvalidToken(){lt(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $S{constructor(t,n,r){this.appName_=t,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(t){return this.auth_?this.auth_.getToken(t).catch(n=>n&&n.code==="auth/token-not-initialized"?(Ge("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(t).then(n,r):n(null)},0)})}addTokenChangeListener(t){this.auth_?this.auth_.addAuthTokenListener(t):this.authProvider_.get().then(n=>n.addAuthTokenListener(t))}removeTokenChangeListener(t){this.authProvider_.get().then(n=>n.removeAuthTokenListener(t))}notifyForInvalidToken(){let t='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?t+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?t+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':t+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',lt(t)}}class Or{constructor(t){this.accessToken=t}getToken(t){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(t){t(this.accessToken)}removeTokenChangeListener(t){}notifyForInvalidToken(){}}Or.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="5",Ag="v",Pg="s",Og="r",Dg="f",Mg=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Lg="ls",bg="p",Iu="ac",Fg="websocket",zg="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $g{constructor(t,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=t.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+t)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(t){t!==this.internalHost&&(this.internalHost=t,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let t=this.toURLString();return this.persistenceKey&&(t+="<"+this.persistenceKey+">"),t}toURLString(){const t=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${t}${this.host}/${n}`}}function jS(e){return e.host!==e.internalHost||e.isCustomHost()||e.includeNamespaceInQueryParams}function jg(e,t,n){I(typeof t=="string","typeof type must == string"),I(typeof n=="object","typeof params must == object");let r;if(t===Fg)r=(e.secure?"wss://":"ws://")+e.internalHost+"/.ws?";else if(t===zg)r=(e.secure?"https://":"http://")+e.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+t);jS(e)&&(n.ns=e.namespace);const i=[];return kt(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BS{constructor(){this.counters_={}}incrementCounter(t,n=1){an(this.counters_,t)||(this.counters_[t]=0),this.counters_[t]+=n}get(){return Yw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ca={},da={};function Gc(e){const t=e.toString();return ca[t]||(ca[t]=new BS),ca[t]}function US(e,t){const n=e.toString();return da[n]||(da[n]=t()),da[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WS{constructor(t){this.onMessage_=t,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(t,n){this.closeAfterResponse=t,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(t,n){for(this.pendingResponses[t]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&ei(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xf="start",HS="close",VS="pLPCommand",GS="pRTLPCB",Bg="id",Ug="pw",Wg="ser",KS="cb",QS="seg",YS="ts",XS="d",qS="dframe",Hg=1870,Vg=30,JS=Hg-Vg,ZS=25e3,eC=3e4;class Cr{constructor(t,n,r,i,s,o,l){this.connId=t,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=us(t),this.stats_=Gc(n),this.urlFn=a=>(this.appCheckToken&&(a[Iu]=this.appCheckToken),jg(n,zg,a))}open(t,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WS(t),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eC)),AS(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Kc((...s)=>{const[o,l,a,u,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Xf)this.id=l,this.password=a;else if(o===HS)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Xf]="t",r[Wg]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[KS]=this.scriptTagHolder.uniqueCallbackIdentifier),r[Ag]=Vc,this.transportSessionId&&(r[Pg]=this.transportSessionId),this.lastSessionId&&(r[Lg]=this.lastSessionId),this.applicationId&&(r[bg]=this.applicationId),this.appCheckToken&&(r[Iu]=this.appCheckToken),typeof location<"u"&&location.hostname&&Mg.test(location.hostname)&&(r[Og]=Dg);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!OS()&&!DS()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(t){const n=ze(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=cg(n),i=Ng(r,JS);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(t,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[qS]="t",r[Bg]=t,r[Ug]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(t){const n=ze(t).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Kc{constructor(t,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=TS(),window[VS+this.uniqueCallbackIdentifier]=t,window[GS+this.uniqueCallbackIdentifier]=n,this.myIFrame=Kc.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){Ge("frame writing exception"),l.stack&&Ge(l.stack),Ge(l)}}}static createIFrame_(){const t=document.createElement("iframe");if(t.style.display="none",document.body){document.body.appendChild(t);try{t.contentWindow.document||Ge("No IE domain setting required")}catch{const r=document.domain;t.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return t.contentDocument?t.doc=t.contentDocument:t.contentWindow?t.doc=t.contentWindow.document:t.document&&(t.doc=t.document),t}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const t=this.onDisconnect;t&&(this.onDisconnect=null,t())}startLongPoll(t,n){for(this.myID=t,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const t={};t[Bg]=this.myID,t[Ug]=this.myPW,t[Wg]=this.currentSerial;let n=this.urlFn(t),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vg+r.length<=Hg;){const o=this.pendingSegs.shift();r=r+"&"+QS+i+"="+o.seg+"&"+YS+i+"="+o.ts+"&"+XS+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(t,n,r){this.pendingSegs.push({seg:t,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(t,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(ZS)),s=()=>{clearTimeout(i),r()};this.addTag(t,s)}addTag(t,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=t,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{Ge("Long-poll script failed to load: "+t),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=16384,nC=45e3;let No=null;typeof MozWebSocket<"u"?No=MozWebSocket:typeof WebSocket<"u"&&(No=WebSocket);class Ot{constructor(t,n,r,i,s,o,l){this.connId=t,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=us(this.connId),this.stats_=Gc(n),this.connURL=Ot.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(t,n,r,i,s){const o={};return o[Ag]=Vc,typeof location<"u"&&location.hostname&&Mg.test(location.hostname)&&(o[Og]=Dg),n&&(o[Pg]=n),r&&(o[Lg]=r),i&&(o[Iu]=i),s&&(o[bg]=s),jg(t,Fg,o)}open(t,n){this.onDisconnect=n,this.onMessage=t,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let r;mg(),this.mySock=new No(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Ot.forceDisallow_=!0}static isAvailable(){let t=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(t=!0)}return!t&&No!==null&&!Ot.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(t){if(this.frames.push(t),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=qi(n);this.onMessage(r)}}handleNewFrameCount_(t){this.totalFrames=t,this.frames=[]}extractFrameCount_(t){if(I(this.frames===null,"We already have a frame buffer"),t.length<=6){const n=Number(t);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),t}handleIncomingFrame(t){if(this.mySock===null)return;const n=t.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(t){this.resetKeepAlive();const n=ze(t);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=Ng(n,tC);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nC))}sendString_(t){try{this.mySock.send(t)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Ot.responsesRequiredToBeHealthy=2;Ot.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(t){this.initTransports_(t)}static get ALL_TRANSPORTS(){return[Cr,Ot]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(t){const n=Ot&&Ot.isAvailable();let r=n&&!Ot.previouslyFailed();if(t.webSocketOnly&&(n||lt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[Ot];else{const i=this.transports_=[];for(const s of es.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);es.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}es.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC=6e4,iC=5e3,sC=10*1024,oC=100*1024,fa="t",qf="d",lC="s",Jf="r",aC="e",Zf="o",eh="a",th="n",nh="p",uC="h";class cC{constructor(t,n,r,i,s,o,l,a,u,d){this.id=t,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=us("c:"+this.id+":"),this.transportManager_=new es(n),this.log_("Connection created"),this.start_()}start_(){const t=this.transportManager_.initialTransport();this.conn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=t.healthyTimeout||0;i>0&&(this.healthyTimeout_=Pi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oC?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sC?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(t){return n=>{t===this.conn_?this.onConnectionLost_(n):t===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(t){return n=>{this.state_!==2&&(t===this.rx_?this.onPrimaryMessageReceived_(n):t===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(t){const n={t:"d",d:t};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(t){if(fa in t){const n=t[fa];n===eh?this.upgradeIfSecondaryHealthy_():n===Jf?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Zf&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(t){const n=fi("t",t),r=fi("d",t);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:nh,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:eh,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:th,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(t){const n=fi("t",t),r=fi("d",t);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(t){this.onPrimaryResponse_(),this.onMessage_(t)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(t){const n=fi(fa,t);if(qf in t){const r=t[qf];if(n===uC){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===th){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lC?this.onConnectionShutdown_(r):n===Jf?this.onReset_(r):n===aC?ku("Server Error: "+r):n===Zf?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ku("Unknown control packet command: "+n)}}onHandshake_(t){const n=t.ts,r=t.v,i=t.h;this.sessionId=t.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Vc!==r&&lt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const t=this.transportManager_.upgradeTransport();t&&this.startUpgrade_(t)}startUpgrade_(t){this.secondaryConn_=new t(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=t.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Pi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(rC))}onReset_(t){this.log_("Reset packet received.  New host: "+t),this.repoInfo_.host=t,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(t,n){this.log_("Realtime connection established."),this.conn_=t,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Pi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(iC))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:nh,d:{}}}))}onSecondaryConnectionLost_(){const t=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===t||this.rx_===t)&&this.close()}onConnectionLost_(t){this.conn_=null,!t&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(t){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(t),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(t){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(t)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg{put(t,n,r,i){}merge(t,n,r,i){}refreshAuthToken(t){}refreshAppCheckToken(t){}onDisconnectPut(t,n,r){}onDisconnectMerge(t,n,r){}onDisconnectCancel(t,n){}reportStats(t){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kg{constructor(t){this.allowedEvents_=t,this.listeners_={},I(Array.isArray(t)&&t.length>0,"Requires a non-empty array")}trigger(t,...n){if(Array.isArray(this.listeners_[t])){const r=[...this.listeners_[t]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(t,n,r){this.validateEventType_(t),this.listeners_[t]=this.listeners_[t]||[],this.listeners_[t].push({callback:n,context:r});const i=this.getInitialEvent(t);i&&n.apply(r,i)}off(t,n,r){this.validateEventType_(t);const i=this.listeners_[t]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(t){I(this.allowedEvents_.find(n=>n===t),"Unknown event: "+t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro extends Kg{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pg()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new Ro}getInitialEvent(t){return I(t==="online","Unknown event type: "+t),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh=32,ih=768;class de{constructor(t,n){if(n===void 0){this.pieces_=t.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=t,this.pieceNum_=n}toString(){let t="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(t+="/"+this.pieces_[n]);return t||"/"}}function re(){return new de("")}function U(e){return e.pieceNum_>=e.pieces_.length?null:e.pieces_[e.pieceNum_]}function On(e){return e.pieces_.length-e.pieceNum_}function ue(e){let t=e.pieceNum_;return t<e.pieces_.length&&t++,new de(e.pieces_,t)}function Qg(e){return e.pieceNum_<e.pieces_.length?e.pieces_[e.pieces_.length-1]:null}function dC(e){let t="";for(let n=e.pieceNum_;n<e.pieces_.length;n++)e.pieces_[n]!==""&&(t+="/"+encodeURIComponent(String(e.pieces_[n])));return t||"/"}function Yg(e,t=0){return e.pieces_.slice(e.pieceNum_+t)}function Xg(e){if(e.pieceNum_>=e.pieces_.length)return null;const t=[];for(let n=e.pieceNum_;n<e.pieces_.length-1;n++)t.push(e.pieces_[n]);return new de(t,0)}function Ee(e,t){const n=[];for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);if(t instanceof de)for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);else{const r=t.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new de(n,0)}function V(e){return e.pieceNum_>=e.pieces_.length}function xt(e,t){const n=U(e),r=U(t);if(n===null)return t;if(n===r)return xt(ue(e),ue(t));throw new Error("INTERNAL ERROR: innerPath ("+t+") is not within outerPath ("+e+")")}function qg(e,t){if(On(e)!==On(t))return!1;for(let n=e.pieceNum_,r=t.pieceNum_;n<=e.pieces_.length;n++,r++)if(e.pieces_[n]!==t.pieces_[r])return!1;return!0}function Dt(e,t){let n=e.pieceNum_,r=t.pieceNum_;if(On(e)>On(t))return!1;for(;n<e.pieces_.length;){if(e.pieces_[n]!==t.pieces_[r])return!1;++n,++r}return!0}class fC{constructor(t,n){this.errorPrefix_=n,this.parts_=Yg(t,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=xl(this.parts_[r]);Jg(this)}}function hC(e,t){e.parts_.length>0&&(e.byteLength_+=1),e.parts_.push(t),e.byteLength_+=xl(t),Jg(e)}function pC(e){const t=e.parts_.pop();e.byteLength_-=xl(t),e.parts_.length>0&&(e.byteLength_-=1)}function Jg(e){if(e.byteLength_>ih)throw new Error(e.errorPrefix_+"has a key path longer than "+ih+" bytes ("+e.byteLength_+").");if(e.parts_.length>rh)throw new Error(e.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+rh+") or object contains a cycle "+$n(e))}function $n(e){return e.parts_.length===0?"":"in property '"+e.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qc extends Kg{constructor(){super(["visible"]);let t,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",t="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",t="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",t="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",t="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[t];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new Qc}getInitialEvent(t){return I(t==="visible","Unknown event type: "+t),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hi=1e3,mC=60*5*1e3,sh=30*1e3,gC=1.3,yC=3e4,_C="server_kill",oh=3;class Zt extends Gg{constructor(t,n,r,i,s,o,l,a){if(super(),this.repoInfo_=t,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Zt.nextPersistentConnectionId_++,this.log_=us("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hi,this.maxReconnectDelay_=mC,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a&&!mg())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Qc.getInstance().on("visible",this.onVisible_,this),t.host.indexOf("fblocal")===-1&&Ro.getInstance().on("online",this.onOnline_,this)}sendRequest(t,n,r){const i=++this.requestNumber_,s={r:i,a:t,b:n};this.log_(ze(s)),I(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(t){this.initConnection_();const n=new wl,i={action:"g",request:{p:t._path.toString(),q:t._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(t,n,r,i){this.initConnection_();const s=t._queryIdentifier,o=t._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"listen() called for non-default but complete query"),I(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:t,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(t){const n=this.outstandingGets_[t];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[t],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(t){const n=t.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";t.tag&&(s.q=n._queryObject,s.t=t.tag),s.h=t.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Zt.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===t&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),t.onComplete&&t.onComplete(u,a))})}static warnOnListenWarnings_(t,n){if(t&&typeof t=="object"&&an(t,"w")){const r=Hr(t,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();lt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(t){this.authToken_=t,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(t)}reduceReconnectDelayIfAdminCredential_(t){(t&&t.length===40||fx(t))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=sh)}refreshAppCheckToken(t){this.appCheckToken_=t,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const t=this.authToken_,n=dx(t)?"auth":"gauth",r={cred:t};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===t&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},t=>{const n=t.s,r=t.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(t,n){const r=t._path.toString(),i=t._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),I(t._queryParams.isDefault()||!t._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,t._queryObject,n)}sendUnlisten_(t,n,r,i){this.log_("Unlisten on "+t+" for "+n);const s={p:t},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"o",data:n,onComplete:r})}onDisconnectMerge(t,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",t,n,r):this.onDisconnectRequestQueue_.push({pathString:t,action:"om",data:n,onComplete:r})}onDisconnectCancel(t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",t,null,n):this.onDisconnectRequestQueue_.push({pathString:t,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(t,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+t,s),this.sendRequest(t,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(t,n,r,i){this.putInternal("p",t,n,r,i)}merge(t,n,r,i){this.putInternal("m",t,n,r,i)}putInternal(t,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:t,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(t){const n=this.outstandingPuts_[t].action,r=this.outstandingPuts_[t].request,i=this.outstandingPuts_[t].onComplete;this.outstandingPuts_[t].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[t],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(t){if(this.connected_){const n={c:t};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(t){if("r"in t){this.log_("from server: "+ze(t));const n=t.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(t.b))}else{if("error"in t)throw"A server-side error has occurred: "+t.error;"a"in t&&this.onDataPush_(t.a,t.b)}}onDataPush_(t,n){this.log_("handleServerMessage",t,n),t==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):t==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):t==="c"?this.onListenRevoked_(n.p,n.q):t==="ac"?this.onAuthRevoked_(n.s,n.d):t==="apc"?this.onAppCheckRevoked_(n.s,n.d):t==="sd"?this.onSecurityDebugPacket_(n):ku("Unrecognized action received from server: "+ze(t)+`
Are you using the latest client?`)}onReady_(t,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(t),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(t){I(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(t))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(t){t&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)),this.visible_=t}onOnline_(t){t?(this.log_("Browser went online."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>yC&&(this.reconnectDelay_=hi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const t=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-t);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gC)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const t=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Zt.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(c){I(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(c)};this.realtime_={close:a,sendRequest:u};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[c,h]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);o?Ge("getToken() completed but was canceled"):(Ge("getToken() completed. Creating connection."),this.authToken_=c&&c.accessToken,this.appCheckToken_=h&&h.token,l=new cC(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,t,n,r,v=>{lt(v+" ("+this.repoInfo_.toString()+")"),this.interrupt(_C)},s))}catch(c){this.log_("Failed to get token: "+c),o||(this.repoInfo_.nodeAdmin&&lt(c),a())}}}interrupt(t){Ge("Interrupting connection for reason: "+t),this.interruptReasons_[t]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(t){Ge("Resuming connection for reason: "+t),delete this.interruptReasons_[t],Ff(this.interruptReasons_)&&(this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(t){const n=t-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let t=0;t<this.outstandingPuts_.length;t++){const n=this.outstandingPuts_[t];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[t],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(t,n){let r;n?r=n.map(s=>Hc(s)).join("$"):r="default";const i=this.removeListen_(t,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(t,n){const r=new de(t).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(t,n){Ge("Auth token revoked: "+t+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(t==="invalid_token"||t==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=oh&&(this.reconnectDelay_=sh,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(t,n){Ge("App check token revoked: "+t+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(t==="invalid_token"||t==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=oh&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(t){this.securityDebugCallback_?this.securityDebugCallback_(t):"msg"in t&&console.log("FIREBASE: "+t.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const t of this.listens.values())for(const n of t.values())this.sendListen_(n);for(let t=0;t<this.outstandingPuts_.length;t++)this.outstandingPuts_[t]&&this.sendPut_(t);for(;this.onDisconnectRequestQueue_.length;){const t=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(t.action,t.pathString,t.data,t.onComplete)}for(let t=0;t<this.outstandingGets_.length;t++)this.outstandingGets_[t]&&this.sendGet_(t)}sendConnectStats_(){const t={};let n="js";t["sdk."+n+"."+Eg.replace(/\./g,"-")]=1,pg()?t["framework.cordova"]=1:sx()&&(t["framework.reactnative"]=1),this.reportStats(t)}shouldReconnect_(){const t=Ro.getInstance().currentlyOnline();return Ff(this.interruptReasons_)&&t}}Zt.nextPersistentConnectionId_=0;Zt.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t,n){this.name=t,this.node=n}static Wrap(t,n){return new G(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{getCompare(){return this.compare.bind(this)}indexedValueChanged(t,n){const r=new G(Vr,t),i=new G(Vr,n);return this.compare(r,i)!==0}minPost(){return G.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ds;class Zg extends Sl{static get __EMPTY_NODE(){return Ds}static set __EMPTY_NODE(t){Ds=t}compare(t,n){return Zr(t.name,n.name)}isDefinedOn(t){throw qr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(t,n){return!1}minPost(){return G.MIN}maxPost(){return new G(tr,Ds)}makePost(t,n){return I(typeof t=="string","KeyIndex indexValue must always be a string."),new G(t,Ds)}toString(){return".key"}}const Dr=new Zg;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(t,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!t.isEmpty();)if(t=t,o=n?r(t.key,n):1,i&&(o*=-1),o<0)this.isReverse_?t=t.left:t=t.right;else if(o===0){this.nodeStack_.push(t);break}else this.nodeStack_.push(t),this.isReverse_?t=t.right:t=t.left}getNext(){if(this.nodeStack_.length===0)return null;let t=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(t.key,t.value):n={key:t.key,value:t.value},this.isReverse_)for(t=t.left;!t.isEmpty();)this.nodeStack_.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack_.push(t),t=t.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const t=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(t.key,t.value):{key:t.key,value:t.value}}}class Re{constructor(t,n,r,i,s){this.key=t,this.value=n,this.color=r??Re.RED,this.left=i??rt.EMPTY_NODE,this.right=s??rt.EMPTY_NODE}copy(t,n,r,i,s){return new Re(t??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||!!t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,r){let i=this;const s=r(t,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(t,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(t,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let t=this;return!t.left.isRed_()&&!t.left.left.isRed_()&&(t=t.moveRedLeft_()),t=t.copy(null,null,null,t.left.removeMin_(),null),t.fixUp_()}remove(t,n){let r,i;if(r=this,n(t,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(t,r.key)===0){if(r.right.isEmpty())return rt.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let t=this;return t.right.isRed_()&&!t.left.isRed_()&&(t=t.rotateLeft_()),t.left.isRed_()&&t.left.left.isRed_()&&(t=t.rotateRight_()),t.left.isRed_()&&t.right.isRed_()&&(t=t.colorFlip_()),t}moveRedLeft_(){let t=this.colorFlip_();return t.right.left.isRed_()&&(t=t.copy(null,null,null,null,t.right.rotateRight_()),t=t.rotateLeft_(),t=t.colorFlip_()),t}moveRedRight_(){let t=this.colorFlip_();return t.left.left.isRed_()&&(t=t.rotateRight_(),t=t.colorFlip_()),t}rotateLeft_(){const t=this.copy(null,null,Re.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight_(){const t=this.copy(null,null,Re.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip_(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth_(){const t=this.check_();return Math.pow(2,t)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const t=this.left.check_();if(t!==this.right.check_())throw new Error("Black depths differ");return t+(this.isRed_()?0:1)}}Re.RED=!0;Re.BLACK=!1;class vC{copy(t,n,r,i,s){return this}insert(t,n,r){return new Re(t,n,null)}remove(t,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(t,n=rt.EMPTY_NODE){this.comparator_=t,this.root_=n}insert(t,n){return new rt(this.comparator_,this.root_.insert(t,n,this.comparator_).copy(null,null,Re.BLACK,null,null))}remove(t){return new rt(this.comparator_,this.root_.remove(t,this.comparator_).copy(null,null,Re.BLACK,null,null))}get(t){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(t,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(t){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(t,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(t){return this.root_.inorderTraversal(t)}reverseTraversal(t){return this.root_.reverseTraversal(t)}getIterator(t){return new Ms(this.root_,null,this.comparator_,!1,t)}getIteratorFrom(t,n){return new Ms(this.root_,t,this.comparator_,!1,n)}getReverseIteratorFrom(t,n){return new Ms(this.root_,t,this.comparator_,!0,n)}getReverseIterator(t){return new Ms(this.root_,null,this.comparator_,!0,t)}}rt.EMPTY_NODE=new vC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(e,t){return Zr(e.name,t.name)}function Yc(e,t){return Zr(e,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tu;function xC(e){Tu=e}const e0=function(e){return typeof e=="number"?"number:"+Rg(e):"string:"+e},t0=function(e){if(e.isLeafNode()){const t=e.val();I(typeof t=="string"||typeof t=="number"||typeof t=="object"&&an(t,".sv"),"Priority must be a string or number.")}else I(e===Tu||e.isEmpty(),"priority of unexpected type.");I(e===Tu||e.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let lh;class Te{constructor(t,n=Te.__childrenNodeConstructor.EMPTY_NODE){this.value_=t,this.priorityNode_=n,this.lazyHash_=null,I(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),t0(this.priorityNode_)}static set __childrenNodeConstructor(t){lh=t}static get __childrenNodeConstructor(){return lh}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(t){return new Te(this.value_,t)}getImmediateChild(t){return t===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}getChild(t){return V(t)?this:U(t)===".priority"?this.priorityNode_:Te.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(t,n){return null}updateImmediateChild(t,n){return t===".priority"?this.updatePriority(n):n.isEmpty()&&t!==".priority"?this:Te.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(t,n).updatePriority(this.priorityNode_)}updateChild(t,n){const r=U(t);return r===null?n:n.isEmpty()&&r!==".priority"?this:(I(r!==".priority"||On(t)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,Te.__childrenNodeConstructor.EMPTY_NODE.updateChild(ue(t),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(t,n){return!1}val(t){return t&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let t="";this.priorityNode_.isEmpty()||(t+="priority:"+e0(this.priorityNode_.val())+":");const n=typeof this.value_;t+=n+":",n==="number"?t+=Rg(this.value_):t+=this.value_,this.lazyHash_=Ig(t)}return this.lazyHash_}getValue(){return this.value_}compareTo(t){return t===Te.__childrenNodeConstructor.EMPTY_NODE?1:t instanceof Te.__childrenNodeConstructor?-1:(I(t.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(t))}compareToLeafNode_(t){const n=typeof t.value_,r=typeof this.value_,i=Te.VALUE_TYPE_ORDER.indexOf(n),s=Te.VALUE_TYPE_ORDER.indexOf(r);return I(i>=0,"Unknown leaf type: "+n),I(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<t.value_?-1:this.value_===t.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(t){if(t===this)return!0;if(t.isLeafNode()){const n=t;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Te.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let n0,r0;function SC(e){n0=e}function CC(e){r0=e}class EC extends Sl{compare(t,n){const r=t.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?Zr(t.name,n.name):s}isDefinedOn(t){return!t.getPriority().isEmpty()}indexedValueChanged(t,n){return!t.getPriority().equals(n.getPriority())}minPost(){return G.MIN}maxPost(){return new G(tr,new Te("[PRIORITY-POST]",r0))}makePost(t,n){const r=n0(t);return new G(n,new Te("[PRIORITY-POST]",r))}toString(){return".priority"}}const Ke=new EC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kC=Math.log(2);class IC{constructor(t){const n=s=>parseInt(Math.log(s)/kC,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(t+1),this.current_=this.count-1;const i=r(this.count);this.bits_=t+1&i}nextBitIsOne(){const t=!(this.bits_&1<<this.current_);return this.current_--,t}}const Ao=function(e,t,n,r){e.sort(t);const i=function(a,u){const d=u-a;let c,h;if(d===0)return null;if(d===1)return c=e[a],h=n?n(c):c,new Re(h,c.node,Re.BLACK,null,null);{const v=parseInt(d/2,10)+a,g=i(a,v),x=i(v+1,u);return c=e[v],h=n?n(c):c,new Re(h,c.node,Re.BLACK,g,x)}},s=function(a){let u=null,d=null,c=e.length;const h=function(g,x){const T=c-g,p=c;c-=g;const f=i(T+1,p),m=e[T],w=n?n(m):m;v(new Re(w,m.node,x,null,f))},v=function(g){u?(u.left=g,u=g):(d=g,u=g)};for(let g=0;g<a.count;++g){const x=a.nextBitIsOne(),T=Math.pow(2,a.count-(g+1));x?h(T,Re.BLACK):(h(T,Re.BLACK),h(T,Re.RED))}return d},o=new IC(e.length),l=s(o);return new rt(r||t,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;const ur={};class qt{constructor(t,n){this.indexes_=t,this.indexSet_=n}static get Default(){return I(ur&&Ke,"ChildrenNode.ts has not been loaded"),ha=ha||new qt({".priority":ur},{".priority":Ke}),ha}get(t){const n=Hr(this.indexes_,t);if(!n)throw new Error("No index defined for "+t);return n instanceof rt?n:null}hasIndex(t){return an(this.indexSet_,t.toString())}addIndex(t,n){I(t!==Dr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(G.Wrap);let o=s.getNext();for(;o;)i=i||t.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=Ao(r,t.getCompare()):l=ur;const a=t.toString(),u=Object.assign({},this.indexSet_);u[a]=t;const d=Object.assign({},this.indexes_);return d[a]=l,new qt(d,u)}addToIndexes(t,n){const r=ko(this.indexes_,(i,s)=>{const o=Hr(this.indexSet_,s);if(I(o,"Missing index implementation for "+s),i===ur)if(o.isDefinedOn(t.node)){const l=[],a=n.getIterator(G.Wrap);let u=a.getNext();for(;u;)u.name!==t.name&&l.push(u),u=a.getNext();return l.push(t),Ao(l,o.getCompare())}else return ur;else{const l=n.get(t.name);let a=i;return l&&(a=a.remove(new G(t.name,l))),a.insert(t,t.node)}});return new qt(r,this.indexSet_)}removeFromIndexes(t,n){const r=ko(this.indexes_,i=>{if(i===ur)return i;{const s=n.get(t.name);return s?i.remove(new G(t.name,s)):i}});return new qt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pi;class J{constructor(t,n,r){this.children_=t,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&t0(this.priorityNode_),this.children_.isEmpty()&&I(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return pi||(pi=new J(new rt(Yc),null,qt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||pi}updatePriority(t){return this.children_.isEmpty()?this:new J(this.children_,t,this.indexMap_)}getImmediateChild(t){if(t===".priority")return this.getPriority();{const n=this.children_.get(t);return n===null?pi:n}}getChild(t){const n=U(t);return n===null?this:this.getImmediateChild(n).getChild(ue(t))}hasChild(t){return this.children_.get(t)!==null}updateImmediateChild(t,n){if(I(n,"We should always be passing snapshot nodes"),t===".priority")return this.updatePriority(n);{const r=new G(t,n);let i,s;n.isEmpty()?(i=this.children_.remove(t),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(t,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?pi:this.priorityNode_;return new J(i,o,s)}}updateChild(t,n){const r=U(t);if(r===null)return n;{I(U(t)!==".priority"||On(t)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(ue(t),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(t){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(Ke,(o,l)=>{n[o]=l.val(t),r++,s&&J.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!t&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return t&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let t="";this.getPriority().isEmpty()||(t+="priority:"+e0(this.getPriority().val())+":"),this.forEachChild(Ke,(n,r)=>{const i=r.hash();i!==""&&(t+=":"+n+":"+i)}),this.lazyHash_=t===""?"":Ig(t)}return this.lazyHash_}getPredecessorChildName(t,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new G(t,n));return s?s.name:null}else return this.children_.getPredecessorKey(t)}getFirstChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(t){const n=this.getFirstChildName(t);return n?new G(n,this.children_.get(n)):null}getLastChildName(t){const n=this.resolveIndex_(t);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(t){const n=this.getLastChildName(t);return n?new G(n,this.children_.get(n)):null}forEachChild(t,n){const r=this.resolveIndex_(t);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(t){return this.getIteratorFrom(t.minPost(),t)}getIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(t,i=>i);{const i=this.children_.getIteratorFrom(t.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(t){return this.getReverseIteratorFrom(t.maxPost(),t)}getReverseIteratorFrom(t,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(t,i=>i);{const i=this.children_.getReverseIteratorFrom(t.name,G.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,t)>0;)i.getNext(),s=i.peek();return i}}compareTo(t){return this.isEmpty()?t.isEmpty()?0:-1:t.isLeafNode()||t.isEmpty()?1:t===cs?-1:0}withIndex(t){if(t===Dr||this.indexMap_.hasIndex(t))return this;{const n=this.indexMap_.addIndex(t,this.children_);return new J(this.children_,this.priorityNode_,n)}}isIndexed(t){return t===Dr||this.indexMap_.hasIndex(t)}equals(t){if(t===this)return!0;if(t.isLeafNode())return!1;{const n=t;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(Ke),i=n.getIterator(Ke);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(t){return t===Dr?null:this.indexMap_.get(t.toString())}}J.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class TC extends J{constructor(){super(new rt(Yc),J.EMPTY_NODE,qt.Default)}compareTo(t){return t===this?0:1}equals(t){return t===this}getPriority(){return this}getImmediateChild(t){return J.EMPTY_NODE}isEmpty(){return!1}}const cs=new TC;Object.defineProperties(G,{MIN:{value:new G(Vr,J.EMPTY_NODE)},MAX:{value:new G(tr,cs)}});Zg.__EMPTY_NODE=J.EMPTY_NODE;Te.__childrenNodeConstructor=J;xC(cs);CC(cs);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=!0;function Fe(e,t=null){if(e===null)return J.EMPTY_NODE;if(typeof e=="object"&&".priority"in e&&(t=e[".priority"]),I(t===null||typeof t=="string"||typeof t=="number"||typeof t=="object"&&".sv"in t,"Invalid priority type found: "+typeof t),typeof e=="object"&&".value"in e&&e[".value"]!==null&&(e=e[".value"]),typeof e!="object"||".sv"in e){const n=e;return new Te(n,Fe(t))}if(!(e instanceof Array)&&NC){const n=[];let r=!1;if(kt(e,(o,l)=>{if(o.substring(0,1)!=="."){const a=Fe(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new G(o,a)))}}),n.length===0)return J.EMPTY_NODE;const s=Ao(n,wC,o=>o.name,Yc);if(r){const o=Ao(n,Ke.getCompare());return new J(s,Fe(t),new qt({".priority":o},{".priority":Ke}))}else return new J(s,Fe(t),qt.Default)}else{let n=J.EMPTY_NODE;return kt(e,(r,i)=>{if(an(e,r)&&r.substring(0,1)!=="."){const s=Fe(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(Fe(t))}}SC(Fe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RC extends Sl{constructor(t){super(),this.indexPath_=t,I(!V(t)&&U(t)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(t){return t.getChild(this.indexPath_)}isDefinedOn(t){return!t.getChild(this.indexPath_).isEmpty()}compare(t,n){const r=this.extractChild(t.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?Zr(t.name,n.name):s}makePost(t,n){const r=Fe(t),i=J.EMPTY_NODE.updateChild(this.indexPath_,r);return new G(n,i)}maxPost(){const t=J.EMPTY_NODE.updateChild(this.indexPath_,cs);return new G(tr,t)}toString(){return Yg(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AC extends Sl{compare(t,n){const r=t.node.compareTo(n.node);return r===0?Zr(t.name,n.name):r}isDefinedOn(t){return!0}indexedValueChanged(t,n){return!t.equals(n)}minPost(){return G.MIN}maxPost(){return G.MAX}makePost(t,n){const r=Fe(t);return new G(n,r)}toString(){return".value"}}const PC=new AC;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function OC(e){return{type:"value",snapshotNode:e}}function DC(e,t){return{type:"child_added",snapshotNode:t,childName:e}}function MC(e,t){return{type:"child_removed",snapshotNode:t,childName:e}}function ah(e,t,n){return{type:"child_changed",snapshotNode:t,childName:e,oldSnap:n}}function LC(e,t){return{type:"child_moved",snapshotNode:t,childName:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ke}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return I(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return I(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Vr}hasEnd(){return this.endSet_}getIndexEndValue(){return I(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return I(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:tr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return I(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ke}copy(){const t=new Xc;return t.limitSet_=this.limitSet_,t.limit_=this.limit_,t.startSet_=this.startSet_,t.startAfterSet_=this.startAfterSet_,t.indexStartValue_=this.indexStartValue_,t.startNameSet_=this.startNameSet_,t.indexStartName_=this.indexStartName_,t.endSet_=this.endSet_,t.endBeforeSet_=this.endBeforeSet_,t.indexEndValue_=this.indexEndValue_,t.endNameSet_=this.endNameSet_,t.indexEndName_=this.indexEndName_,t.index_=this.index_,t.viewFrom_=this.viewFrom_,t}}function uh(e){const t={};if(e.isDefault())return t;let n;if(e.index_===Ke?n="$priority":e.index_===PC?n="$value":e.index_===Dr?n="$key":(I(e.index_ instanceof RC,"Unrecognized index type!"),n=e.index_.toString()),t.orderBy=ze(n),e.startSet_){const r=e.startAfterSet_?"startAfter":"startAt";t[r]=ze(e.indexStartValue_),e.startNameSet_&&(t[r]+=","+ze(e.indexStartName_))}if(e.endSet_){const r=e.endBeforeSet_?"endBefore":"endAt";t[r]=ze(e.indexEndValue_),e.endNameSet_&&(t[r]+=","+ze(e.indexEndName_))}return e.limitSet_&&(e.isViewFromLeft()?t.limitToFirst=e.limit_:t.limitToLast=e.limit_),t}function ch(e){const t={};if(e.startSet_&&(t.sp=e.indexStartValue_,e.startNameSet_&&(t.sn=e.indexStartName_),t.sin=!e.startAfterSet_),e.endSet_&&(t.ep=e.indexEndValue_,e.endNameSet_&&(t.en=e.indexEndName_),t.ein=!e.endBeforeSet_),e.limitSet_){t.l=e.limit_;let n=e.viewFrom_;n===""&&(e.isViewFromLeft()?n="l":n="r"),t.vf=n}return e.index_!==Ke&&(t.i=e.index_.toString()),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po extends Gg{constructor(t,n,r,i){super(),this.repoInfo_=t,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=us("p:rest:"),this.listens_={}}reportStats(t){throw new Error("Method not implemented.")}static getListenId_(t,n){return n!==void 0?"tag$"+n:(I(t._queryParams.isDefault(),"should have a tag if it's not a default query."),t._path.toString())}listen(t,n,r,i){const s=t._path.toString();this.log_("Listen called for "+s+" "+t._queryIdentifier);const o=Po.getListenId_(t,r),l={};this.listens_[o]=l;const a=uh(t._queryParams);this.restRequest_(s+".json",a,(u,d)=>{let c=d;if(u===404&&(c=null,u=null),u===null&&this.onDataUpdate_(s,c,!1,r),Hr(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(t,n){const r=Po.getListenId_(t,n);delete this.listens_[r]}get(t){const n=uh(t._queryParams),r=t._path.toString(),i=new wl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(t){}restRequest_(t,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+t+"?ns="+this.repoInfo_.namespace+hx(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=qi(l.responseText)}catch{lt("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&lt("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(){this.rootNode_=J.EMPTY_NODE}getNode(t){return this.rootNode_.getChild(t)}updateSnapshot(t,n){this.rootNode_=this.rootNode_.updateChild(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(){return{value:null,children:new Map}}function i0(e,t,n){if(V(t))e.value=n,e.children.clear();else if(e.value!==null)e.value=e.value.updateChild(t,n);else{const r=U(t);e.children.has(r)||e.children.set(r,Oo());const i=e.children.get(r);t=ue(t),i0(i,t,n)}}function Nu(e,t,n){e.value!==null?n(t,e.value):FC(e,(r,i)=>{const s=new de(t.toString()+"/"+r);Nu(i,s,n)})}function FC(e,t){e.children.forEach((n,r)=>{t(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(t){this.collection_=t,this.last_=null}get(){const t=this.collection_.get(),n=Object.assign({},t);return this.last_&&kt(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dh=10*1e3,$C=30*1e3,jC=5*60*1e3;class BC{constructor(t,n){this.server_=n,this.statsToReport_={},this.statsListener_=new zC(t);const r=dh+($C-dh)*Math.random();Pi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const t=this.statsListener_.get(),n={};let r=!1;kt(t,(i,s)=>{s>0&&an(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Pi(this.reportStats_.bind(this),Math.floor(Math.random()*2*jC))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ut;(function(e){e[e.OVERWRITE=0]="OVERWRITE",e[e.MERGE=1]="MERGE",e[e.ACK_USER_WRITE=2]="ACK_USER_WRITE",e[e.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ut||(Ut={}));function s0(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function o0(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function l0(e){return{fromUser:!1,fromServer:!0,queryId:e,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do{constructor(t,n,r){this.path=t,this.affectedTree=n,this.revert=r,this.type=Ut.ACK_USER_WRITE,this.source=s0()}operationForChild(t){if(V(this.path)){if(this.affectedTree.value!=null)return I(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new de(t));return new Do(re(),n,this.revert)}}else return I(U(this.path)===t,"operationForChild called for unrelated child."),new Do(ue(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n,r){this.source=t,this.path=n,this.snap=r,this.type=Ut.OVERWRITE}operationForChild(t){return V(this.path)?new nr(this.source,re(),this.snap.getImmediateChild(t)):new nr(this.source,ue(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(t,n,r){this.source=t,this.path=n,this.children=r,this.type=Ut.MERGE}operationForChild(t){if(V(this.path)){const n=this.children.subtree(new de(t));return n.isEmpty()?null:n.value?new nr(this.source,re(),n.value):new ts(this.source,re(),n)}else return I(U(this.path)===t,"Can't get a merge for a child not on the path of the operation"),new ts(this.source,ue(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qc{constructor(t,n,r){this.node_=t,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(t){if(V(t))return this.isFullyInitialized()&&!this.filtered_;const n=U(t);return this.isCompleteForChild(n)}isCompleteForChild(t){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(t)}getNode(){return this.node_}}function UC(e,t,n,r){const i=[],s=[];return t.forEach(o=>{o.type==="child_changed"&&e.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(LC(o.childName,o.snapshotNode))}),mi(e,i,"child_removed",t,r,n),mi(e,i,"child_added",t,r,n),mi(e,i,"child_moved",s,r,n),mi(e,i,"child_changed",t,r,n),mi(e,i,"value",t,r,n),i}function mi(e,t,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>HC(e,l,a)),o.forEach(l=>{const a=WC(e,l,s);i.forEach(u=>{u.respondsTo(l.type)&&t.push(u.createEvent(a,e.query_))})})}function WC(e,t,n){return t.type==="value"||t.type==="child_removed"||(t.prevName=n.getPredecessorChildName(t.childName,t.snapshotNode,e.index_)),t}function HC(e,t,n){if(t.childName==null||n.childName==null)throw qr("Should only compare child_ events.");const r=new G(t.childName,t.snapshotNode),i=new G(n.childName,n.snapshotNode);return e.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a0(e,t){return{eventCache:e,serverCache:t}}function Oi(e,t,n,r){return a0(new qc(t,n,r),e.serverCache)}function u0(e,t,n,r){return a0(e.eventCache,new qc(t,n,r))}function Ru(e){return e.eventCache.isFullyInitialized()?e.eventCache.getNode():null}function rr(e){return e.serverCache.isFullyInitialized()?e.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa;const VC=()=>(pa||(pa=new rt(PS)),pa);class ae{constructor(t,n=VC()){this.value=t,this.children=n}static fromObject(t){let n=new ae(null);return kt(t,(r,i)=>{n=n.set(new de(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(t,n){if(this.value!=null&&n(this.value))return{path:re(),value:this.value};if(V(t))return null;{const r=U(t),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(ue(t),n);return s!=null?{path:Ee(new de(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(t){return this.findRootMostMatchingPathAndValue(t,()=>!0)}subtree(t){if(V(t))return this;{const n=U(t),r=this.children.get(n);return r!==null?r.subtree(ue(t)):new ae(null)}}set(t,n){if(V(t))return new ae(n,this.children);{const r=U(t),s=(this.children.get(r)||new ae(null)).set(ue(t),n),o=this.children.insert(r,s);return new ae(this.value,o)}}remove(t){if(V(t))return this.children.isEmpty()?new ae(null):new ae(null,this.children);{const n=U(t),r=this.children.get(n);if(r){const i=r.remove(ue(t));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new ae(null):new ae(this.value,s)}else return this}}get(t){if(V(t))return this.value;{const n=U(t),r=this.children.get(n);return r?r.get(ue(t)):null}}setTree(t,n){if(V(t))return n;{const r=U(t),s=(this.children.get(r)||new ae(null)).setTree(ue(t),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new ae(this.value,o)}}fold(t){return this.fold_(re(),t)}fold_(t,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(Ee(t,i),n)}),n(t,this.value,r)}findOnPath(t,n){return this.findOnPath_(t,re(),n)}findOnPath_(t,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(V(t))return null;{const s=U(t),o=this.children.get(s);return o?o.findOnPath_(ue(t),Ee(n,s),r):null}}foreachOnPath(t,n){return this.foreachOnPath_(t,re(),n)}foreachOnPath_(t,n,r){if(V(t))return this;{this.value&&r(n,this.value);const i=U(t),s=this.children.get(i);return s?s.foreachOnPath_(ue(t),Ee(n,i),r):new ae(null)}}foreach(t){this.foreach_(re(),t)}foreach_(t,n){this.children.inorderTraversal((r,i)=>{i.foreach_(Ee(t,r),n)}),this.value&&n(t,this.value)}foreachChild(t){this.children.inorderTraversal((n,r)=>{r.value&&t(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(t){this.writeTree_=t}static empty(){return new bt(new ae(null))}}function Di(e,t,n){if(V(t))return new bt(new ae(n));{const r=e.writeTree_.findRootMostValueAndPath(t);if(r!=null){const i=r.path;let s=r.value;const o=xt(i,t);return s=s.updateChild(o,n),new bt(e.writeTree_.set(i,s))}else{const i=new ae(n),s=e.writeTree_.setTree(t,i);return new bt(s)}}}function fh(e,t,n){let r=e;return kt(n,(i,s)=>{r=Di(r,Ee(t,i),s)}),r}function hh(e,t){if(V(t))return bt.empty();{const n=e.writeTree_.setTree(t,new ae(null));return new bt(n)}}function Au(e,t){return or(e,t)!=null}function or(e,t){const n=e.writeTree_.findRootMostValueAndPath(t);return n!=null?e.writeTree_.get(n.path).getChild(xt(n.path,t)):null}function ph(e){const t=[],n=e.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Ke,(r,i)=>{t.push(new G(r,i))}):e.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&t.push(new G(r,i.value))}),t}function Rn(e,t){if(V(t))return e;{const n=or(e,t);return n!=null?new bt(new ae(n)):new bt(e.writeTree_.subtree(t))}}function Pu(e){return e.writeTree_.isEmpty()}function Gr(e,t){return c0(re(),e.writeTree_,t)}function c0(e,t,n){if(t.value!=null)return n.updateChild(e,t.value);{let r=null;return t.children.inorderTraversal((i,s)=>{i===".priority"?(I(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=c0(Ee(e,i),s,n)}),!n.getChild(e).isEmpty()&&r!==null&&(n=n.updateChild(Ee(e,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d0(e,t){return g0(t,e)}function GC(e,t,n,r,i){I(r>e.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),e.allWrites.push({path:t,snap:n,writeId:r,visible:i}),i&&(e.visibleWrites=Di(e.visibleWrites,t,n)),e.lastWriteId=r}function KC(e,t){for(let n=0;n<e.allWrites.length;n++){const r=e.allWrites[n];if(r.writeId===t)return r}return null}function QC(e,t){const n=e.allWrites.findIndex(l=>l.writeId===t);I(n>=0,"removeWrite called with nonexistent writeId.");const r=e.allWrites[n];e.allWrites.splice(n,1);let i=r.visible,s=!1,o=e.allWrites.length-1;for(;i&&o>=0;){const l=e.allWrites[o];l.visible&&(o>=n&&YC(l,r.path)?i=!1:Dt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return XC(e),!0;if(r.snap)e.visibleWrites=hh(e.visibleWrites,r.path);else{const l=r.children;kt(l,a=>{e.visibleWrites=hh(e.visibleWrites,Ee(r.path,a))})}return!0}else return!1}function YC(e,t){if(e.snap)return Dt(e.path,t);for(const n in e.children)if(e.children.hasOwnProperty(n)&&Dt(Ee(e.path,n),t))return!0;return!1}function XC(e){e.visibleWrites=f0(e.allWrites,qC,re()),e.allWrites.length>0?e.lastWriteId=e.allWrites[e.allWrites.length-1].writeId:e.lastWriteId=-1}function qC(e){return e.visible}function f0(e,t,n){let r=bt.empty();for(let i=0;i<e.length;++i){const s=e[i];if(t(s)){const o=s.path;let l;if(s.snap)Dt(n,o)?(l=xt(n,o),r=Di(r,l,s.snap)):Dt(o,n)&&(l=xt(o,n),r=Di(r,re(),s.snap.getChild(l)));else if(s.children){if(Dt(n,o))l=xt(n,o),r=fh(r,l,s.children);else if(Dt(o,n))if(l=xt(o,n),V(l))r=fh(r,re(),s.children);else{const a=Hr(s.children,U(l));if(a){const u=a.getChild(ue(l));r=Di(r,re(),u)}}}else throw qr("WriteRecord should have .snap or .children")}}return r}function h0(e,t,n,r,i){if(!r&&!i){const s=or(e.visibleWrites,t);if(s!=null)return s;{const o=Rn(e.visibleWrites,t);if(Pu(o))return n;if(n==null&&!Au(o,re()))return null;{const l=n||J.EMPTY_NODE;return Gr(o,l)}}}else{const s=Rn(e.visibleWrites,t);if(!i&&Pu(s))return n;if(!i&&n==null&&!Au(s,re()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(Dt(u.path,t)||Dt(t,u.path))},l=f0(e.allWrites,o,t),a=n||J.EMPTY_NODE;return Gr(l,a)}}}function JC(e,t,n){let r=J.EMPTY_NODE;const i=or(e.visibleWrites,t);if(i)return i.isLeafNode()||i.forEachChild(Ke,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=Rn(e.visibleWrites,t);return n.forEachChild(Ke,(o,l)=>{const a=Gr(Rn(s,new de(o)),l);r=r.updateImmediateChild(o,a)}),ph(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=Rn(e.visibleWrites,t);return ph(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function ZC(e,t,n,r,i){I(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=Ee(t,n);if(Au(e.visibleWrites,s))return null;{const o=Rn(e.visibleWrites,s);return Pu(o)?i.getChild(n):Gr(o,i.getChild(n))}}function e2(e,t,n,r){const i=Ee(t,n),s=or(e.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=Rn(e.visibleWrites,i);return Gr(o,r.getNode().getImmediateChild(n))}else return null}function t2(e,t){return or(e.visibleWrites,t)}function n2(e,t,n,r,i,s,o){let l;const a=Rn(e.visibleWrites,t),u=or(a,re());if(u!=null)l=u;else if(n!=null)l=Gr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const d=[],c=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let v=h.getNext();for(;v&&d.length<i;)c(v,r)!==0&&d.push(v),v=h.getNext();return d}else return[]}function r2(){return{visibleWrites:bt.empty(),allWrites:[],lastWriteId:-1}}function Ou(e,t,n,r){return h0(e.writeTree,e.treePath,t,n,r)}function p0(e,t){return JC(e.writeTree,e.treePath,t)}function mh(e,t,n,r){return ZC(e.writeTree,e.treePath,t,n,r)}function Mo(e,t){return t2(e.writeTree,Ee(e.treePath,t))}function i2(e,t,n,r,i,s){return n2(e.writeTree,e.treePath,t,n,r,i,s)}function Jc(e,t,n){return e2(e.writeTree,e.treePath,t,n)}function m0(e,t){return g0(Ee(e.treePath,t),e.writeTree)}function g0(e,t){return{treePath:e,writeTree:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s2{constructor(){this.changeMap=new Map}trackChildChange(t){const n=t.type,r=t.childName;I(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),I(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,ah(r,t.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,MC(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,DC(r,t.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,ah(r,t.snapshotNode,i.oldSnap));else throw qr("Illegal combination of changes: "+t+" occurred after "+i)}else this.changeMap.set(r,t)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o2{getCompleteChild(t){return null}getChildAfterChild(t,n,r){return null}}const y0=new o2;class Zc{constructor(t,n,r=null){this.writes_=t,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(t){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(t))return n.getNode().getImmediateChild(t);{const r=this.optCompleteServerCache_!=null?new qc(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Jc(this.writes_,t,r)}}getChildAfterChild(t,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rr(this.viewCache_),s=i2(this.writes_,i,n,1,r,t);return s.length===0?null:s[0]}}function l2(e,t){I(t.eventCache.getNode().isIndexed(e.filter.getIndex()),"Event snap not indexed"),I(t.serverCache.getNode().isIndexed(e.filter.getIndex()),"Server snap not indexed")}function a2(e,t,n,r,i){const s=new s2;let o,l;if(n.type===Ut.OVERWRITE){const u=n;u.source.fromUser?o=Du(e,t,u.path,u.snap,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered()&&!V(u.path),o=Lo(e,t,u.path,u.snap,r,i,l,s))}else if(n.type===Ut.MERGE){const u=n;u.source.fromUser?o=c2(e,t,u.path,u.children,r,i,s):(I(u.source.fromServer,"Unknown source."),l=u.source.tagged||t.serverCache.isFiltered(),o=Mu(e,t,u.path,u.children,r,i,l,s))}else if(n.type===Ut.ACK_USER_WRITE){const u=n;u.revert?o=h2(e,t,u.path,r,i,s):o=d2(e,t,u.path,u.affectedTree,r,i,s)}else if(n.type===Ut.LISTEN_COMPLETE)o=f2(e,t,n.path,r,s);else throw qr("Unknown operation type: "+n.type);const a=s.getChanges();return u2(t,o,a),{viewCache:o,changes:a}}function u2(e,t,n){const r=t.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Ru(e);(n.length>0||!e.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(OC(Ru(t)))}}function _0(e,t,n,r,i,s){const o=t.eventCache;if(Mo(r,n)!=null)return t;{let l,a;if(V(n))if(I(t.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),t.serverCache.isFiltered()){const u=rr(t),d=u instanceof J?u:J.EMPTY_NODE,c=p0(r,d);l=e.filter.updateFullNode(t.eventCache.getNode(),c,s)}else{const u=Ou(r,rr(t));l=e.filter.updateFullNode(t.eventCache.getNode(),u,s)}else{const u=U(n);if(u===".priority"){I(On(n)===1,"Can't have a priority with additional path components");const d=o.getNode();a=t.serverCache.getNode();const c=mh(r,n,d,a);c!=null?l=e.filter.updatePriority(d,c):l=o.getNode()}else{const d=ue(n);let c;if(o.isCompleteForChild(u)){a=t.serverCache.getNode();const h=mh(r,n,o.getNode(),a);h!=null?c=o.getNode().getImmediateChild(u).updateChild(d,h):c=o.getNode().getImmediateChild(u)}else c=Jc(r,u,t.serverCache);c!=null?l=e.filter.updateChild(o.getNode(),u,c,d,i,s):l=o.getNode()}}return Oi(t,l,o.isFullyInitialized()||V(n),e.filter.filtersNodes())}}function Lo(e,t,n,r,i,s,o,l){const a=t.serverCache;let u;const d=o?e.filter:e.filter.getIndexedFilter();if(V(n))u=d.updateFullNode(a.getNode(),r,null);else if(d.filtersNodes()&&!a.isFiltered()){const v=a.getNode().updateChild(n,r);u=d.updateFullNode(a.getNode(),v,null)}else{const v=U(n);if(!a.isCompleteForPath(n)&&On(n)>1)return t;const g=ue(n),T=a.getNode().getImmediateChild(v).updateChild(g,r);v===".priority"?u=d.updatePriority(a.getNode(),T):u=d.updateChild(a.getNode(),v,T,g,y0,null)}const c=u0(t,u,a.isFullyInitialized()||V(n),d.filtersNodes()),h=new Zc(i,c,s);return _0(e,c,n,i,h,l)}function Du(e,t,n,r,i,s,o){const l=t.eventCache;let a,u;const d=new Zc(i,t,s);if(V(n))u=e.filter.updateFullNode(t.eventCache.getNode(),r,o),a=Oi(t,u,!0,e.filter.filtersNodes());else{const c=U(n);if(c===".priority")u=e.filter.updatePriority(t.eventCache.getNode(),r),a=Oi(t,u,l.isFullyInitialized(),l.isFiltered());else{const h=ue(n),v=l.getNode().getImmediateChild(c);let g;if(V(h))g=r;else{const x=d.getCompleteChild(c);x!=null?Qg(h)===".priority"&&x.getChild(Xg(h)).isEmpty()?g=x:g=x.updateChild(h,r):g=J.EMPTY_NODE}if(v.equals(g))a=t;else{const x=e.filter.updateChild(l.getNode(),c,g,h,d,o);a=Oi(t,x,l.isFullyInitialized(),e.filter.filtersNodes())}}}return a}function gh(e,t){return e.eventCache.isCompleteForChild(t)}function c2(e,t,n,r,i,s,o){let l=t;return r.foreach((a,u)=>{const d=Ee(n,a);gh(t,U(d))&&(l=Du(e,l,d,u,i,s,o))}),r.foreach((a,u)=>{const d=Ee(n,a);gh(t,U(d))||(l=Du(e,l,d,u,i,s,o))}),l}function yh(e,t,n){return n.foreach((r,i)=>{t=t.updateChild(r,i)}),t}function Mu(e,t,n,r,i,s,o,l){if(t.serverCache.getNode().isEmpty()&&!t.serverCache.isFullyInitialized())return t;let a=t,u;V(n)?u=r:u=new ae(null).setTree(n,r);const d=t.serverCache.getNode();return u.children.inorderTraversal((c,h)=>{if(d.hasChild(c)){const v=t.serverCache.getNode().getImmediateChild(c),g=yh(e,v,h);a=Lo(e,a,new de(c),g,i,s,o,l)}}),u.children.inorderTraversal((c,h)=>{const v=!t.serverCache.isCompleteForChild(c)&&h.value===null;if(!d.hasChild(c)&&!v){const g=t.serverCache.getNode().getImmediateChild(c),x=yh(e,g,h);a=Lo(e,a,new de(c),x,i,s,o,l)}}),a}function d2(e,t,n,r,i,s,o){if(Mo(i,n)!=null)return t;const l=t.serverCache.isFiltered(),a=t.serverCache;if(r.value!=null){if(V(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Lo(e,t,n,a.getNode().getChild(n),i,s,l,o);if(V(n)){let u=new ae(null);return a.getNode().forEachChild(Dr,(d,c)=>{u=u.set(new de(d),c)}),Mu(e,t,n,u,i,s,l,o)}else return t}else{let u=new ae(null);return r.foreach((d,c)=>{const h=Ee(n,d);a.isCompleteForPath(h)&&(u=u.set(d,a.getNode().getChild(h)))}),Mu(e,t,n,u,i,s,l,o)}}function f2(e,t,n,r,i){const s=t.serverCache,o=u0(t,s.getNode(),s.isFullyInitialized()||V(n),s.isFiltered());return _0(e,o,n,r,y0,i)}function h2(e,t,n,r,i,s){let o;if(Mo(r,n)!=null)return t;{const l=new Zc(r,t,i),a=t.eventCache.getNode();let u;if(V(n)||U(n)===".priority"){let d;if(t.serverCache.isFullyInitialized())d=Ou(r,rr(t));else{const c=t.serverCache.getNode();I(c instanceof J,"serverChildren would be complete if leaf node"),d=p0(r,c)}d=d,u=e.filter.updateFullNode(a,d,s)}else{const d=U(n);let c=Jc(r,d,t.serverCache);c==null&&t.serverCache.isCompleteForChild(d)&&(c=a.getImmediateChild(d)),c!=null?u=e.filter.updateChild(a,d,c,ue(n),l,s):t.eventCache.getNode().hasChild(d)?u=e.filter.updateChild(a,d,J.EMPTY_NODE,ue(n),l,s):u=a,u.isEmpty()&&t.serverCache.isFullyInitialized()&&(o=Ou(r,rr(t)),o.isLeafNode()&&(u=e.filter.updateFullNode(u,o,s)))}return o=t.serverCache.isFullyInitialized()||Mo(r,re())!=null,Oi(t,u,o,e.filter.filtersNodes())}}function p2(e,t){const n=rr(e.viewCache_);return n&&(e.query._queryParams.loadsAllData()||!V(t)&&!n.getImmediateChild(U(t)).isEmpty())?n.getChild(t):null}function _h(e,t,n,r){t.type===Ut.MERGE&&t.source.queryId!==null&&(I(rr(e.viewCache_),"We should always have a full cache before handling merges"),I(Ru(e.viewCache_),"Missing event cache, even though we have a server cache"));const i=e.viewCache_,s=a2(e.processor_,i,t,n,r);return l2(e.processor_,s.viewCache),I(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),e.viewCache_=s.viewCache,m2(e,s.changes,s.viewCache.eventCache.getNode(),null)}function m2(e,t,n,r){const i=r?[r]:e.eventRegistrations_;return UC(e.eventGenerator_,t,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vh;function g2(e){I(!vh,"__referenceConstructor has already been defined"),vh=e}function ed(e,t,n,r){const i=t.source.queryId;if(i!==null){const s=e.views.get(i);return I(s!=null,"SyncTree gave us an op for an invalid query."),_h(s,t,n,r)}else{let s=[];for(const o of e.views.values())s=s.concat(_h(o,t,n,r));return s}}function td(e,t){let n=null;for(const r of e.views.values())n=n||p2(r,t);return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let wh;function y2(e){I(!wh,"__referenceConstructor has already been defined"),wh=e}class xh{constructor(t){this.listenProvider_=t,this.syncPointTree_=new ae(null),this.pendingWriteTree_=r2(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function v0(e,t,n,r,i){return GC(e.pendingWriteTree_,t,n,r,i),i?El(e,new nr(s0(),t,n)):[]}function Hn(e,t,n=!1){const r=KC(e.pendingWriteTree_,t);if(QC(e.pendingWriteTree_,t)){let s=new ae(null);return r.snap!=null?s=s.set(re(),!0):kt(r.children,o=>{s=s.set(new de(o),!0)}),El(e,new Do(r.path,s,n))}else return[]}function Cl(e,t,n){return El(e,new nr(o0(),t,n))}function _2(e,t,n){const r=ae.fromObject(n);return El(e,new ts(o0(),t,r))}function v2(e,t,n,r){const i=S0(e,r);if(i!=null){const s=C0(i),o=s.path,l=s.queryId,a=xt(o,t),u=new nr(l0(l),a,n);return E0(e,o,u)}else return[]}function w2(e,t,n,r){const i=S0(e,r);if(i){const s=C0(i),o=s.path,l=s.queryId,a=xt(o,t),u=ae.fromObject(n),d=new ts(l0(l),a,u);return E0(e,o,d)}else return[]}function nd(e,t,n){const i=e.pendingWriteTree_,s=e.syncPointTree_.findOnPath(t,(o,l)=>{const a=xt(o,t),u=td(l,a);if(u)return u});return h0(i,t,s,n,!0)}function El(e,t){return w0(t,e.syncPointTree_,null,d0(e.pendingWriteTree_,re()))}function w0(e,t,n,r){if(V(e.path))return x0(e,t,n,r);{const i=t.get(re());n==null&&i!=null&&(n=td(i,re()));let s=[];const o=U(e.path),l=e.operationForChild(o),a=t.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,d=m0(r,o);s=s.concat(w0(l,a,u,d))}return i&&(s=s.concat(ed(i,e,r,n))),s}}function x0(e,t,n,r){const i=t.get(re());n==null&&i!=null&&(n=td(i,re()));let s=[];return t.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=m0(r,o),d=e.operationForChild(o);d&&(s=s.concat(x0(d,l,a,u)))}),i&&(s=s.concat(ed(i,e,r,n))),s}function S0(e,t){return e.tagToQueryMap.get(t)}function C0(e){const t=e.indexOf("$");return I(t!==-1&&t<e.length-1,"Bad queryKey."),{queryId:e.substr(t+1),path:new de(e.substr(0,t))}}function E0(e,t,n){const r=e.syncPointTree_.get(t);I(r,"Missing sync point for query tag that we're tracking");const i=d0(e.pendingWriteTree_,t);return ed(r,n,i,null)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(t){this.node_=t}getImmediateChild(t){const n=this.node_.getImmediateChild(t);return new rd(n)}node(){return this.node_}}class id{constructor(t,n){this.syncTree_=t,this.path_=n}getImmediateChild(t){const n=Ee(this.path_,t);return new id(this.syncTree_,n)}node(){return nd(this.syncTree_,this.path_)}}const x2=function(e){return e=e||{},e.timestamp=e.timestamp||new Date().getTime(),e},Sh=function(e,t,n){if(!e||typeof e!="object")return e;if(I(".sv"in e,"Unexpected leaf node or priority contents"),typeof e[".sv"]=="string")return S2(e[".sv"],t,n);if(typeof e[".sv"]=="object")return C2(e[".sv"],t);I(!1,"Unexpected server value: "+JSON.stringify(e,null,2))},S2=function(e,t,n){switch(e){case"timestamp":return n.timestamp;default:I(!1,"Unexpected server value: "+e)}},C2=function(e,t,n){e.hasOwnProperty("increment")||I(!1,"Unexpected server value: "+JSON.stringify(e,null,2));const r=e.increment;typeof r!="number"&&I(!1,"Unexpected increment value: "+r);const i=t.node();if(I(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},E2=function(e,t,n,r){return sd(t,new id(n,e),r)},k0=function(e,t,n){return sd(e,new rd(t),n)};function sd(e,t,n){const r=e.getPriority().val(),i=Sh(r,t.getImmediateChild(".priority"),n);let s;if(e.isLeafNode()){const o=e,l=Sh(o.getValue(),t,n);return l!==o.getValue()||i!==o.getPriority().val()?new Te(l,Fe(i)):e}else{const o=e;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new Te(i))),o.forEachChild(Ke,(l,a)=>{const u=sd(a,t.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(t="",n=null,r={children:{},childCount:0}){this.name=t,this.parent=n,this.node=r}}function ld(e,t){let n=t instanceof de?t:new de(t),r=e,i=U(n);for(;i!==null;){const s=Hr(r.node.children,i)||{children:{},childCount:0};r=new od(i,r,s),n=ue(n),i=U(n)}return r}function ti(e){return e.node.value}function I0(e,t){e.node.value=t,Lu(e)}function T0(e){return e.node.childCount>0}function k2(e){return ti(e)===void 0&&!T0(e)}function kl(e,t){kt(e.node.children,(n,r)=>{t(new od(n,e,r))})}function N0(e,t,n,r){n&&!r&&t(e),kl(e,i=>{N0(i,t,!0,r)}),n&&r&&t(e)}function I2(e,t,n){let r=n?e:e.parent;for(;r!==null;){if(t(r))return!0;r=r.parent}return!1}function ds(e){return new de(e.parent===null?e.name:ds(e.parent)+"/"+e.name)}function Lu(e){e.parent!==null&&T2(e.parent,e.name,e)}function T2(e,t,n){const r=k2(n),i=an(e.node.children,t);r&&i?(delete e.node.children[t],e.node.childCount--,Lu(e)):!r&&!i&&(e.node.children[t]=n.node,e.node.childCount++,Lu(e))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N2=/[\[\].#$\/\u0000-\u001F\u007F]/,R2=/[\[\].#$\u0000-\u001F\u007F]/,ma=10*1024*1024,R0=function(e){return typeof e=="string"&&e.length!==0&&!N2.test(e)},A0=function(e){return typeof e=="string"&&e.length!==0&&!R2.test(e)},A2=function(e){return e&&(e=e.replace(/^\/*\.info(\/|$)/,"/")),A0(e)},P0=function(e,t,n,r){r&&t===void 0||ad(Uc(e,"value"),t,n)},ad=function(e,t,n){const r=n instanceof de?new fC(n,e):n;if(t===void 0)throw new Error(e+"contains undefined "+$n(r));if(typeof t=="function")throw new Error(e+"contains a function "+$n(r)+" with contents = "+t.toString());if(Tg(t))throw new Error(e+"contains "+t.toString()+" "+$n(r));if(typeof t=="string"&&t.length>ma/3&&xl(t)>ma)throw new Error(e+"contains a string greater than "+ma+" utf8 bytes "+$n(r)+" ('"+t.substring(0,50)+"...')");if(t&&typeof t=="object"){let i=!1,s=!1;if(kt(t,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!R0(o)))throw new Error(e+" contains an invalid key ("+o+") "+$n(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hC(r,o),ad(e,l,r),pC(r)}),i&&s)throw new Error(e+' contains ".value" child '+$n(r)+" in addition to actual children.")}},O0=function(e,t,n,r){if(!(r&&n===void 0)&&!A0(n))throw new Error(Uc(e,t)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},P2=function(e,t,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),O0(e,t,n,r)},D0=function(e,t){if(U(t)===".info")throw new Error(e+" failed = Can't modify data under /.info/")},O2=function(e,t){const n=t.path.toString();if(typeof t.repoInfo.host!="string"||t.repoInfo.host.length===0||!R0(t.repoInfo.namespace)&&t.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!A2(n))throw new Error(Uc(e,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function M0(e,t){let n=null;for(let r=0;r<t.length;r++){const i=t[r],s=i.getPath();n!==null&&!qg(s,n.path)&&(e.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&e.eventLists_.push(n)}function on(e,t,n){M0(e,n),M2(e,r=>Dt(r,t)||Dt(t,r))}function M2(e,t){e.recursionDepth_++;let n=!0;for(let r=0;r<e.eventLists_.length;r++){const i=e.eventLists_[r];if(i){const s=i.path;t(s)?(L2(e.eventLists_[r]),e.eventLists_[r]=null):n=!1}}n&&(e.eventLists_=[]),e.recursionDepth_--}function L2(e){for(let t=0;t<e.events.length;t++){const n=e.events[t];if(n!==null){e.events[t]=null;const r=n.getEventRunner();Kn&&Ge("event: "+n.toString()),ei(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b2="repo_interrupt",F2=25;class z2{constructor(t,n,r,i){this.repoInfo_=t,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new D2,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oo(),this.transactionQueueTree_=new od,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function $2(e,t,n){if(e.stats_=Gc(e.repoInfo_),e.forceRestClient_||FS())e.server_=new Po(e.repoInfo_,(r,i,s,o)=>{Ch(e,r,i,s,o)},e.authTokenProvider_,e.appCheckProvider_),setTimeout(()=>Eh(e,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{ze(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}e.persistentConnection_=new Zt(e.repoInfo_,t,(r,i,s,o)=>{Ch(e,r,i,s,o)},r=>{Eh(e,r)},r=>{j2(e,r)},e.authTokenProvider_,e.appCheckProvider_,n),e.server_=e.persistentConnection_}e.authTokenProvider_.addTokenChangeListener(r=>{e.server_.refreshAuthToken(r)}),e.appCheckProvider_.addTokenChangeListener(r=>{e.server_.refreshAppCheckToken(r.token)}),e.statsReporter_=US(e.repoInfo_,()=>new BC(e.stats_,e.server_)),e.infoData_=new bC,e.infoSyncTree_=new xh({startListening:(r,i,s,o)=>{let l=[];const a=e.infoData_.getNode(r._path);return a.isEmpty()||(l=Cl(e.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),cd(e,"connected",!1),e.serverSyncTree_=new xh({startListening:(r,i,s,o)=>(e.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);on(e.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{e.server_.unlisten(r,i)}})}function L0(e){const n=e.infoData_.getNode(new de(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function ud(e){return x2({timestamp:L0(e)})}function Ch(e,t,n,r,i){e.dataUpdateCount++;const s=new de(t);n=e.interceptServerDataCallback_?e.interceptServerDataCallback_(t,n):n;let o=[];if(i)if(r){const a=ko(n,u=>Fe(u));o=w2(e.serverSyncTree_,s,a,i)}else{const a=Fe(n);o=v2(e.serverSyncTree_,s,a,i)}else if(r){const a=ko(n,u=>Fe(u));o=_2(e.serverSyncTree_,s,a)}else{const a=Fe(n);o=Cl(e.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=Il(e,s)),on(e.eventQueue_,l,o)}function Eh(e,t){cd(e,"connected",t),t===!1&&U2(e)}function j2(e,t){kt(t,(n,r)=>{cd(e,n,r)})}function cd(e,t,n){const r=new de("/.info/"+t),i=Fe(n);e.infoData_.updateSnapshot(r,i);const s=Cl(e.infoSyncTree_,r,i);on(e.eventQueue_,r,s)}function b0(e){return e.nextWriteId_++}function B2(e,t,n,r,i){dd(e,"set",{path:t.toString(),value:n,priority:r});const s=ud(e),o=Fe(n,r),l=nd(e.serverSyncTree_,t),a=k0(o,l,s),u=b0(e),d=v0(e.serverSyncTree_,t,a,u,!0);M0(e.eventQueue_,d),e.server_.put(t.toString(),o.val(!0),(h,v)=>{const g=h==="ok";g||lt("set at "+t+" failed: "+h);const x=Hn(e.serverSyncTree_,u,!g);on(e.eventQueue_,t,x),H2(e,i,h,v)});const c=B0(e,t);Il(e,c),on(e.eventQueue_,c,[])}function U2(e){dd(e,"onDisconnectEvents");const t=ud(e),n=Oo();Nu(e.onDisconnect_,re(),(i,s)=>{const o=E2(i,s,e.serverSyncTree_,t);i0(n,i,o)});let r=[];Nu(n,re(),(i,s)=>{r=r.concat(Cl(e.serverSyncTree_,i,s));const o=B0(e,i);Il(e,o)}),e.onDisconnect_=Oo(),on(e.eventQueue_,re(),r)}function W2(e){e.persistentConnection_&&e.persistentConnection_.interrupt(b2)}function dd(e,...t){let n="";e.persistentConnection_&&(n=e.persistentConnection_.id+":"),Ge(n,...t)}function H2(e,t,n,r){t&&ei(()=>{if(n==="ok")t(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,t(o)}})}function F0(e,t,n){return nd(e.serverSyncTree_,t,n)||J.EMPTY_NODE}function fd(e,t=e.transactionQueueTree_){if(t||Tl(e,t),ti(t)){const n=$0(e,t);I(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&V2(e,ds(t),n)}else T0(t)&&kl(t,n=>{fd(e,n)})}function V2(e,t,n){const r=n.map(u=>u.currentWriteId),i=F0(e,t,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const d=n[u];I(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const c=xt(t,d.path);s=s.updateChild(c,d.currentOutputSnapshotRaw)}const l=s.val(!0),a=t;e.server_.put(a.toString(),l,u=>{dd(e,"transaction put response",{path:a.toString(),status:u});let d=[];if(u==="ok"){const c=[];for(let h=0;h<n.length;h++)n[h].status=2,d=d.concat(Hn(e.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&c.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Tl(e,ld(e.transactionQueueTree_,t)),fd(e,e.transactionQueueTree_),on(e.eventQueue_,t,d);for(let h=0;h<c.length;h++)ei(c[h])}else{if(u==="datastale")for(let c=0;c<n.length;c++)n[c].status===3?n[c].status=4:n[c].status=0;else{lt("transaction at "+a.toString()+" failed: "+u);for(let c=0;c<n.length;c++)n[c].status=4,n[c].abortReason=u}Il(e,t)}},o)}function Il(e,t){const n=z0(e,t),r=ds(n),i=$0(e,n);return G2(e,i,r),r}function G2(e,t,n){if(t.length===0)return;const r=[];let i=[];const o=t.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<t.length;l++){const a=t[l],u=xt(n,a.path);let d=!1,c;if(I(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)d=!0,c=a.abortReason,i=i.concat(Hn(e.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=F2)d=!0,c="maxretry",i=i.concat(Hn(e.serverSyncTree_,a.currentWriteId,!0));else{const h=F0(e,a.path,o);a.currentInputSnapshot=h;const v=t[l].update(h.val());if(v!==void 0){ad("transaction failed: Data returned ",v,a.path);let g=Fe(v);typeof v=="object"&&v!=null&&an(v,".priority")||(g=g.updatePriority(h.getPriority()));const T=a.currentWriteId,p=ud(e),f=k0(g,h,p);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=f,a.currentWriteId=b0(e),o.splice(o.indexOf(T),1),i=i.concat(v0(e.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Hn(e.serverSyncTree_,T,!0))}else d=!0,c="nodata",i=i.concat(Hn(e.serverSyncTree_,a.currentWriteId,!0))}on(e.eventQueue_,n,i),i=[],d&&(t[l].status=2,function(h){setTimeout(h,Math.floor(0))}(t[l].unwatcher),t[l].onComplete&&(c==="nodata"?r.push(()=>t[l].onComplete(null,!1,t[l].currentInputSnapshot)):r.push(()=>t[l].onComplete(new Error(c),!1,null))))}Tl(e,e.transactionQueueTree_);for(let l=0;l<r.length;l++)ei(r[l]);fd(e,e.transactionQueueTree_)}function z0(e,t){let n,r=e.transactionQueueTree_;for(n=U(t);n!==null&&ti(r)===void 0;)r=ld(r,n),t=ue(t),n=U(t);return r}function $0(e,t){const n=[];return j0(e,t,n),n.sort((r,i)=>r.order-i.order),n}function j0(e,t,n){const r=ti(t);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);kl(t,i=>{j0(e,i,n)})}function Tl(e,t){const n=ti(t);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,I0(t,n.length>0?n:void 0)}kl(t,r=>{Tl(e,r)})}function B0(e,t){const n=ds(z0(e,t)),r=ld(e.transactionQueueTree_,t);return I2(r,i=>{ga(e,i)}),ga(e,r),N0(r,i=>{ga(e,i)}),n}function ga(e,t){const n=ti(t);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(I(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(I(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Hn(e.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?I0(t,void 0):n.length=s+1,on(e.eventQueue_,ds(t),i);for(let o=0;o<r.length;o++)ei(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K2(e){let t="";const n=e.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}t+="/"+i}return t}function Q2(e){const t={};e.charAt(0)==="?"&&(e=e.substring(1));for(const n of e.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):lt(`Invalid query segment '${n}' in query '${e}'`)}return t}const kh=function(e,t){const n=Y2(e),r=n.namespace;n.domain==="firebase.com"&&sn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&sn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||RS();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new $g(n.host,n.secure,r,i,t,"",r!==n.subdomain),path:new de(n.pathString)}},Y2=function(e){let t="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof e=="string"){let u=e.indexOf("//");u>=0&&(l=e.substring(0,u-1),e=e.substring(u+2));let d=e.indexOf("/");d===-1&&(d=e.length);let c=e.indexOf("?");c===-1&&(c=e.length),t=e.substring(0,Math.min(d,c)),d<c&&(i=K2(e.substring(d,c)));const h=Q2(e.substring(Math.min(e.length,c)));u=t.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(t.substring(u+1),10)):u=t.length;const v=t.slice(0,u);if(v.toLowerCase()==="localhost")n="localhost";else if(v.split(".").length<=2)n=v;else{const g=t.indexOf(".");r=t.substring(0,g).toLowerCase(),n=t.substring(g+1),s=r}"ns"in h&&(s=h.ns)}return{host:t,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",X2=function(){let e=0;const t=[];return function(n){const r=n===e;e=n;let i;const s=new Array(8);for(i=7;i>=0;i--)s[i]=Ih.charAt(n%64),n=Math.floor(n/64);I(n===0,"Cannot push at time == 0");let o=s.join("");if(r){for(i=11;i>=0&&t[i]===63;i--)t[i]=0;t[i]++}else for(i=0;i<12;i++)t[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=Ih.charAt(t[i]);return I(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(t,n,r,i){this._repo=t,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return V(this._path)?null:Qg(this._path)}get ref(){return new lr(this._repo,this._path)}get _queryIdentifier(){const t=ch(this._queryParams),n=Hc(t);return n==="{}"?"default":n}get _queryObject(){return ch(this._queryParams)}isEqual(t){if(t=Jr(t),!(t instanceof hd))return!1;const n=this._repo===t._repo,r=qg(this._path,t._path),i=this._queryIdentifier===t._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dC(this._path)}}class lr extends hd{constructor(t,n){super(t,n,new Xc,!1)}get parent(){const t=Xg(this._path);return t===null?null:new lr(this._repo,t)}get root(){let t=this;for(;t.parent!==null;)t=t.parent;return t}}function q2(e,t){return e=Jr(e),e._checkNotDeleted("ref"),t!==void 0?bu(e._root,t):e._root}function bu(e,t){return e=Jr(e),U(e._path)===null?P2("child","path",t,!1):O0("child","path",t,!1),new lr(e._repo,Ee(e._path,t))}function J2(e,t){e=Jr(e),D0("push",e._path),P0("push",t,e._path,!0);const n=L0(e._repo),r=X2(n),i=bu(e,r),s=bu(e,r);let o;return t!=null?o=U0(s,t).then(()=>s):o=Promise.resolve(s),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function U0(e,t){e=Jr(e),D0("set",e._path),P0("set",t,e._path,!1);const n=new wl;return B2(e._repo,e._path,t,null,n.wrapCallback(()=>{})),n.promise}g2(lr);y2(lr);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z2="FIREBASE_DATABASE_EMULATOR_HOST",Fu={};let eE=!1;function tE(e,t,n,r){e.repoInfo_=new $g(`${t}:${n}`,!1,e.repoInfo_.namespace,e.repoInfo_.webSocketOnly,e.repoInfo_.nodeAdmin,e.repoInfo_.persistenceKey,e.repoInfo_.includeNamespaceInQueryParams,!0),r&&(e.authTokenProvider_=r)}function nE(e,t,n,r,i){let s=r||e.options.databaseURL;s===void 0&&(e.options.projectId||sn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Ge("Using default host for project ",e.options.projectId),s=`${e.options.projectId}-default-rtdb.firebaseio.com`);let o=kh(s,i),l=o.repoInfo,a,u;typeof process<"u"&&process.env&&(u=process.env[Z2]),u?(a=!0,s=`http://${u}?ns=${l.namespace}`,o=kh(s,i),l=o.repoInfo):a=!o.repoInfo.secure;const d=i&&a?new Or(Or.OWNER):new $S(e.name,e.options,t);O2("Invalid Firebase Database URL",o),V(o.path)||sn("Database URL must point to the root of a Firebase Database (not including a child path).");const c=iE(l,e,d,new zS(e.name,n));return new sE(c,e)}function rE(e,t){const n=Fu[t];(!n||n[e.key]!==e)&&sn(`Database ${t}(${e.repoInfo_}) has already been deleted.`),W2(e),delete n[e.key]}function iE(e,t,n,r){let i=Fu[t.name];i||(i={},Fu[t.name]=i);let s=i[e.toURLString()];return s&&sn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new z2(e,eE,n,r),i[e.toURLString()]=s,s}class sE{constructor(t,n){this._repoInternal=t,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||($2(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new lr(this._repo,re())),this._rootInternal}_delete(){return this._rootInternal!==null&&(rE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(t){this._rootInternal===null&&sn("Cannot call "+t+" on a deleted database.")}}function oE(e=pS(),t){const n=cS(e,"database").getImmediate({identifier:t});if(!n._instanceStarted){const r=nx("database");r&&lE(n,...r)}return n}function lE(e,t,n,r={}){e=Jr(e),e._checkNotDeleted("useEmulator"),e._instanceStarted&&sn("Cannot call useEmulator() after instance has already been initialized.");const i=e._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&sn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Or(Or.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:rx(r.mockUserToken,e.app.options.projectId);s=new Or(o)}tE(i,t,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aE(e){ES(hS),To(new Ji("database",(t,{instanceIdentifier:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),s=t.getProvider("app-check-internal");return nE(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),Ar(Gf,Kf,e),Ar(Gf,Kf,"esm2017")}Zt.prototype.simpleListen=function(e,t){this.sendRequest("q",{p:e},t)};Zt.prototype.echo=function(e,t){this.sendRequest("echo",{d:e},t)};aE();var uE="firebase",cE="9.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ar(uE,cE,"app");const dE=(e,t)=>{let n="";for(let r=0;r<e.length;r++){let i=e[r];if(i.match(/[a-z]/i)){const s=e.charCodeAt(r);s>=65&&s<=90?i=String.fromCharCode((s-65+t)%26+65):s>=97&&s<=122&&(i=String.fromCharCode((s-97+t)%26+97))}n+=i}return n},gi=(e,t)=>dE(e,26-t),{VITE_APP_DB_URL:fE,VITE_APP_FIREBASE_API_KEY:hE,VITE_APP_FIREBASE_AUTH_DOMAIN:pE,VITE_APP_FIREBASE_PROJECT_ID:mE,VITE_APP_FIREBASE_APP_ID:gE}={VITE_APP_FIREBASE_API_KEY:"FNefXdHLhm09VNXoxdiU_eXnfNKjY8Ri5xf7y9x",VITE_APP_FIREBASE_AUTH_DOMAIN:"iewckst-7g064.jmvifewiett.gsq",VITE_APP_FIREBASE_PROJECT_ID:"lhzfnvw-7j064",VITE_APP_FIREBASE_APP_ID:"1:983925368378:emj:7j7j715258066m2783j703",VITE_APP_DB_URL:"kwwsv://hdvbjrs-7f064.iluhedvhlr.frp",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},yE={apiKey:gi(hE,5),authDomain:gi(pE,4),projectId:gi(mE,7),appId:gi(gE,8),databaseURL:gi(fE,3)},_E=xg(yE),vE=oE(_E),wE=(e,t)=>{const n=q2(vE,"registers"),r=J2(n),i=new Date;return U0(r,{time:`${i.toLocaleTimeString()} - ${i.toLocaleDateString()}`,name:e,contact:t})},W0=(e,t,n,r)=>new Promise(i=>{e.preventDefault();const s=document.getElementById(t);if(s){const o=Object.fromEntries(new FormData(s).entries());if(o.email&&o.name)return wE(o.name.toString(),o.email.toString()).then(()=>{const l=document.getElementById(n),a=document.getElementById(r);l&&(l.value=""),a&&(a.value=""),i(0)});i(1)}else i(-1)});function xE(){const{setSuccess:e,updateShow:t,setContent:n}=we.useContext(_l),[r,i]=we.useState(!1),s=o=>{i(!0),W0(o,"form-pricing","name-pricing","email-pricing").then(()=>{i(!1),t(),e(!0),n("Cảm ơn bạn. Chúng tôi sẽ liên hệ với bạn sớm.")}).catch(()=>{i(!1),t(),e(!1),n("Rất tiếc! Có lỗi xảy ra, vui lòng thử lại sau.")})};return _.jsxs(SE,{children:[_.jsx(CE,{children:"Contact Us"}),_.jsxs(EE,{id:"form-pricing",onSubmit:r?()=>!0:s,children:[_.jsx(Th,{name:"name",id:"name-pricing",placeholder:"Enter your name or company"}),_.jsx(Th,{name:"email",id:"email-pricing",placeholder:"Enter your phone or email"}),_.jsx(kE,{children:_.jsxs(IE,{radius:"input",padding:"13px 103px",fontSize:14,fontWeight:700,loading:r,children:[r&&_.jsx(lg,{})," Submit"]})})]})]})}const SE=E.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding-block: 100px 10px;
  @media screen and (max-width: 768px) {
    text-align: left;
    display: block;
    padding-top: 30px;
  }
`,CE=E.h2`
  font-size: 36px;
  color: ${e=>e.theme.colors.dark_blue};
  font-weight: 600;

  @media screen and (max-width: 1440px) {
    font-size: 28px;
  }

  @media screen and (max-width: 1200px) {
    font-size: 24px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`,EE=E.form`
  display: flex;
  gap: 20px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;

  @media screen and (max-width: 920px) {
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    text-align: center;
  }
`,kE=E.div`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`,IE=E(Xr)`
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`,Th=E(og)`
  width: auto;

  @media screen and (max-width: 1570px) {
    width: 220px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;function TE(){return _.jsx(vl,{id:"pricing",background:"linear-gradient(359.64deg, #F0F4FF 0.29%, rgba(242, 245, 255, 0) 103.06%);",children:_.jsxs(NE,{children:[_.jsx(AE,{radius:"lg",color:"blue",bg:"#E9EDFF",fontSize:14,fontWeight:600,padding:"8px 50px",children:"Discover Pricing"}),_.jsx(RE,{children:cw.map(e=>_.jsx($w,{price:e},e.type))}),_.jsx(xE,{})]})})}const NE=E.div`
  text-align: center;
  padding-bottom: 40px;

  @media screen and (max-width: 928px) {
    padding-bottom: 20px;
  }
`,RE=E.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: space-evenly;
  -ms-flex-pack: space-evenly;
  justify-content: space-evenly;
  gap: 15px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-top: 20px;
`,AE=E(Xr)`
  cursor: auto;

  &:hover {
    filter: brightness(100%);
  }
`,PE="/assets/BlockQuote-acd105ad.svg";function OE({icon:e,text:t}){return _.jsxs(DE,{children:[_.jsx(ME,{src:e,alt:t}),_.jsx(LE,{children:t})]})}const DE=E.div`
  border-radius: 15px;
  -webkit-box-shadow: 0px 25px 47px rgba(0, 0, 0, 0.05);
  box-shadow: 0px 25px 47px rgba(0, 0, 0, 0.05);
  border: 1px solid #e5f1ff;
  background: white;
  padding: 30px 40px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-block: 20px;
  width: 25vw;
  gap: 13px;

  @media screen and (max-width: 1200px) {
    width: 30vw;
    padding: 20px 30px;
  }

  @media screen and (max-width: 992px) {
    width: 32vw;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-block: 4px;
    padding: 12px 20px;
  }
`,ME=E.img`
  @media screen and (max-width: 768px) {
    width: 48px;
    height: 48px;
  }
`,LE=E.h6`
  font-size: 20px;
  font-weight: 400;
  color: #818195;
  margin-block: 0;
  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;function bE(){return _.jsx(vl,{id:"services",children:_.jsxs(FE,{children:[_.jsxs("div",{children:[_.jsx(zE,{src:PE,alt:"block-quote"}),_.jsx($E,{children:"Explore Services"})]}),_.jsx(jE,{children:dw.map((e,t)=>_.jsx(OE,{icon:e.icon,text:e.text},t))})]})})}const FE=E.div`
  margin-block: 50px;
`,zE=E.img`
  @media screen and (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`,$E=E.h2`
  margin-block: 0;
  display: inline;
  margin-left: -30px;
  font-size: 48px;
  font-weight: 500;
  margin-bottom: -10px;

  @media screen and (max-width: 1200px) {
    font-size: 40px;
    margin-left: -24px;
  }

  @media screen and (max-width: 920px) {
    font-size: 34px;
    margin-left: -20px;
  }

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: -16px;
  }
`,jE=E.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  gap: 20px;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    gap: 10px;
  }
`;function ya({Icon:e,content:t}){return _.jsxs(XE,{children:[_.jsx(e,{style:{color:"#63657E",height:"20px",width:"20px"}}),_.jsx(qE,{children:t})]})}function BE(){const{setSuccess:e,updateShow:t,setContent:n}=we.useContext(_l),[r,i]=we.useState(!1),s=o=>{i(!0),W0(o,"form-footer","name-footer","email-footer").then(()=>{i(!1),t(),e(!0),n("Cảm ơn bạn. Chúng tôi sẽ liên hệ với bạn sớm.")}).catch(()=>{i(!1),t(),e(!1),n("Rất tiếc! Có lỗi xảy ra, vui lòng thử lại sau.")})};return _.jsx(UE,{id:"contact",children:_.jsxs(WE,{children:[_.jsxs(VE,{children:[_.jsx(HE,{children:"Contact Us"}),_.jsxs(GE,{onSubmit:r?()=>!0:s,id:"form-footer",children:[_.jsx(Nh,{name:"name",id:"name-footer",placeholder:"Enter your name or company"}),_.jsx(Nh,{name:"email",id:"email-footer",placeholder:"Enter your phone or email"}),_.jsxs(KE,{loading:r,radius:50,padding:"12px 100px",children:[r&&_.jsx(lg,{})," Submit"]})]})]}),_.jsxs(QE,{children:[_.jsxs(JE,{children:[_.jsx(YE,{children:fw.map((o,l)=>_.jsx("li",{children:_.jsx(o.icon,{style:{color:"#63657E",height:"20px",width:"20px",cursor:"pointer"}})},l))}),_.jsx(ya,{Icon:Sv,content:"District 2, Ho Chi Minh City, Vietnam"}),_.jsx(ya,{Icon:Ev,content:"gsbench@gmail.com"}),_.jsx(ya,{Icon:Cv,content:"(+84) 77 9291 669"})]}),_.jsxs(ZE,{children:[_.jsxs("div",{children:[_.jsx("nav",{children:_.jsxs(tk,{children:[_.jsx(_a,{children:_.jsx(Ls,{href:"#header",children:"Company"})}),_.jsx(_a,{children:_.jsx(Ls,{href:"#services",children:"Services"})}),_.jsx(_a,{children:_.jsx(Ls,{href:"#pricing",children:"Pricing"})})]})}),_.jsx(nk,{children:"Copyright ©2023 GSBench. All Rights Reserved"})]}),_.jsx(Ls,{href:"#header",children:_.jsx(ek,{src:sg,alt:"GSBench"})})]})]})]})})}const UE=E.footer`
  padding-inline: 14vw;

  @media screen and (max-width: 1570px) {
    padding-inline: 8vw;
  }

  /* @media screen and (max-width: 1200px) {
    padding-inline: 8vw;
  } */

  @media screen and (max-width: 992px) {
    padding-inline: 6vw;
  }

  @media screen and (max-width: 768px) {
    padding-inline: 0px;
  }
`,WE=E.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  background-color: #e7f5ff;
  padding: 20px 40px 40px 40px;
  border-radius: 30px;
  margin-bottom: 100px;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    border-radius: 0px;
    padding: 12px;
    margin-bottom: 0px;
  }
`,HE=E.h2`
  font-weight: 600;
  font-size: 36px;
  margin-block: 10px 25px;
  color: ${e=>e.theme.colors.dark_blue};
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`,VE=E.div`
  padding-right: 100px;
  @media screen and (max-width: 768px) {
    padding-right: 0px;
    width: 100%;
    margin-bottom: 20px;
  }
`,GE=E.form`
  width: 100%;

  @media screen and (max-width: 768px) {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }
`,Nh=E(og)`
  display: block;
  margin-block: 15px;
  width: 100%;
  box-sizing: border-box;
  height: 48px;

  @media screen and (max-width: 768px) {
    margin-block: 6px;
  }
`,KE=E(Xr)`
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-block: 6px;
  }
`,QE=E.div`
  margin-left: 20px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  gap: 50px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    gap: 30px;
  }
`,YE=E.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 20px;
`,XE=E.div`
  margin-block: 10px;
`,qE=E.span`
  margin-left: 20px;
  font-size: 18px;
  color: ${e=>e.theme.colors.gray};
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`,JE=E.div``,ZE=E.div`
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
`,ek=E.img`
  cursor: pointer;
  -ms-flex-item-align: end;
  -ms-grid-row-align: end;
  align-self: end;

  @media screen and (max-width: 768px) {
    width: 50px;
  }
`,tk=E.ul`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  gap: 20px;
  margin-block: 10px;
`,_a=E.li`
  font-size: 18px;
  color: ${e=>e.theme.colors.dark_blue};
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`,nk=E.span`
  font-size: 16px;
  font-weight: 400;
  color: ${e=>e.theme.colors.gray};

  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`,Ls=E.a`
  color: inherit;
  font-size: inherit;
`;function rk(){return _.jsxs("main",{children:[_.jsx(yw,{}),_.jsx(Iw,{}),_.jsx(TE,{}),_.jsx(bE,{}),_.jsx(BE,{})]})}function ik(){const[e,t]=we.useState(!1),[n,r]=we.useState(""),[i,s]=we.useState(!1),o=()=>{t(!0),setTimeout(()=>{t(!1)},4e3)};return _.jsxs(_l.Provider,{value:{show:e,updateShow:o,content:n,setContent:r,success:i,setSuccess:s},children:[_.jsx(rk,{}),_.jsx(R1,{})]})}va.createRoot(document.getElementById("root")).render(_.jsx(dt.StrictMode,{children:_.jsx(N1,{theme:Ys,children:_.jsx(ik,{})})}));
