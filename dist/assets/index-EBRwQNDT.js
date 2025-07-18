function c0(t,e){for(var n=0;n<e.length;n++){const i=e[n];if(typeof i!="string"&&!Array.isArray(i)){for(const o in i)if(o!=="default"&&!(o in t)){const l=Object.getOwnPropertyDescriptor(i,o);l&&Object.defineProperty(t,o,l.get?l:{enumerable:!0,get:()=>i[o]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&i(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function Z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Wu={exports:{}},Ds={},Vu={exports:{}},se={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Km;function u0(){if(Km)return se;Km=1;var t=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),y=Symbol.iterator;function _(T){return T===null||typeof T!="object"?null:(T=y&&T[y]||T["@@iterator"],typeof T=="function"?T:null)}var I={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,A={};function N(T,O,ie){this.props=T,this.context=O,this.refs=A,this.updater=ie||I}N.prototype.isReactComponent={},N.prototype.setState=function(T,O){if(typeof T!="object"&&typeof T!="function"&&T!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,T,O,"setState")},N.prototype.forceUpdate=function(T){this.updater.enqueueForceUpdate(this,T,"forceUpdate")};function j(){}j.prototype=N.prototype;function H(T,O,ie){this.props=T,this.context=O,this.refs=A,this.updater=ie||I}var U=H.prototype=new j;U.constructor=H,b(U,N.prototype),U.isPureReactComponent=!0;var $=Array.isArray,W=Object.prototype.hasOwnProperty,re={current:null},me={key:!0,ref:!0,__self:!0,__source:!0};function we(T,O,ie){var le,de={},he=null,Ce=null;if(O!=null)for(le in O.ref!==void 0&&(Ce=O.ref),O.key!==void 0&&(he=""+O.key),O)W.call(O,le)&&!me.hasOwnProperty(le)&&(de[le]=O[le]);var ge=arguments.length-2;if(ge===1)de.children=ie;else if(1<ge){for(var Ae=Array(ge),Tt=0;Tt<ge;Tt++)Ae[Tt]=arguments[Tt+2];de.children=Ae}if(T&&T.defaultProps)for(le in ge=T.defaultProps,ge)de[le]===void 0&&(de[le]=ge[le]);return{$$typeof:t,type:T,key:he,ref:Ce,props:de,_owner:re.current}}function ye(T,O){return{$$typeof:t,type:T.type,key:O,ref:T.ref,props:T.props,_owner:T._owner}}function lt(T){return typeof T=="object"&&T!==null&&T.$$typeof===t}function qe(T){var O={"=":"=0",":":"=2"};return"$"+T.replace(/[=:]/g,function(ie){return O[ie]})}var Pt=/\/+/g;function It(T,O){return typeof T=="object"&&T!==null&&T.key!=null?qe(""+T.key):O.toString(36)}function zt(T,O,ie,le,de){var he=typeof T;(he==="undefined"||he==="boolean")&&(T=null);var Ce=!1;if(T===null)Ce=!0;else switch(he){case"string":case"number":Ce=!0;break;case"object":switch(T.$$typeof){case t:case e:Ce=!0}}if(Ce)return Ce=T,de=de(Ce),T=le===""?"."+It(Ce,0):le,$(de)?(ie="",T!=null&&(ie=T.replace(Pt,"$&/")+"/"),zt(de,O,ie,"",function(Tt){return Tt})):de!=null&&(lt(de)&&(de=ye(de,ie+(!de.key||Ce&&Ce.key===de.key?"":(""+de.key).replace(Pt,"$&/")+"/")+T)),O.push(de)),1;if(Ce=0,le=le===""?".":le+":",$(T))for(var ge=0;ge<T.length;ge++){he=T[ge];var Ae=le+It(he,ge);Ce+=zt(he,O,ie,Ae,de)}else if(Ae=_(T),typeof Ae=="function")for(T=Ae.call(T),ge=0;!(he=T.next()).done;)he=he.value,Ae=le+It(he,ge++),Ce+=zt(he,O,ie,Ae,de);else if(he==="object")throw O=String(T),Error("Objects are not valid as a React child (found: "+(O==="[object Object]"?"object with keys {"+Object.keys(T).join(", ")+"}":O)+"). If you meant to render a collection of children, use an array instead.");return Ce}function nn(T,O,ie){if(T==null)return T;var le=[],de=0;return zt(T,le,"","",function(he){return O.call(ie,he,de++)}),le}function mt(T){if(T._status===-1){var O=T._result;O=O(),O.then(function(ie){(T._status===0||T._status===-1)&&(T._status=1,T._result=ie)},function(ie){(T._status===0||T._status===-1)&&(T._status=2,T._result=ie)}),T._status===-1&&(T._status=0,T._result=O)}if(T._status===1)return T._result.default;throw T._result}var Me={current:null},z={transition:null},Z={ReactCurrentDispatcher:Me,ReactCurrentBatchConfig:z,ReactCurrentOwner:re};function K(){throw Error("act(...) is not supported in production builds of React.")}return se.Children={map:nn,forEach:function(T,O,ie){nn(T,function(){O.apply(this,arguments)},ie)},count:function(T){var O=0;return nn(T,function(){O++}),O},toArray:function(T){return nn(T,function(O){return O})||[]},only:function(T){if(!lt(T))throw Error("React.Children.only expected to receive a single React element child.");return T}},se.Component=N,se.Fragment=n,se.Profiler=o,se.PureComponent=H,se.StrictMode=i,se.Suspense=p,se.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,se.act=K,se.cloneElement=function(T,O,ie){if(T==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+T+".");var le=b({},T.props),de=T.key,he=T.ref,Ce=T._owner;if(O!=null){if(O.ref!==void 0&&(he=O.ref,Ce=re.current),O.key!==void 0&&(de=""+O.key),T.type&&T.type.defaultProps)var ge=T.type.defaultProps;for(Ae in O)W.call(O,Ae)&&!me.hasOwnProperty(Ae)&&(le[Ae]=O[Ae]===void 0&&ge!==void 0?ge[Ae]:O[Ae])}var Ae=arguments.length-2;if(Ae===1)le.children=ie;else if(1<Ae){ge=Array(Ae);for(var Tt=0;Tt<Ae;Tt++)ge[Tt]=arguments[Tt+2];le.children=ge}return{$$typeof:t,type:T.type,key:de,ref:he,props:le,_owner:Ce}},se.createContext=function(T){return T={$$typeof:u,_currentValue:T,_currentValue2:T,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},T.Provider={$$typeof:l,_context:T},T.Consumer=T},se.createElement=we,se.createFactory=function(T){var O=we.bind(null,T);return O.type=T,O},se.createRef=function(){return{current:null}},se.forwardRef=function(T){return{$$typeof:h,render:T}},se.isValidElement=lt,se.lazy=function(T){return{$$typeof:v,_payload:{_status:-1,_result:T},_init:mt}},se.memo=function(T,O){return{$$typeof:m,type:T,compare:O===void 0?null:O}},se.startTransition=function(T){var O=z.transition;z.transition={};try{T()}finally{z.transition=O}},se.unstable_act=K,se.useCallback=function(T,O){return Me.current.useCallback(T,O)},se.useContext=function(T){return Me.current.useContext(T)},se.useDebugValue=function(){},se.useDeferredValue=function(T){return Me.current.useDeferredValue(T)},se.useEffect=function(T,O){return Me.current.useEffect(T,O)},se.useId=function(){return Me.current.useId()},se.useImperativeHandle=function(T,O,ie){return Me.current.useImperativeHandle(T,O,ie)},se.useInsertionEffect=function(T,O){return Me.current.useInsertionEffect(T,O)},se.useLayoutEffect=function(T,O){return Me.current.useLayoutEffect(T,O)},se.useMemo=function(T,O){return Me.current.useMemo(T,O)},se.useReducer=function(T,O,ie){return Me.current.useReducer(T,O,ie)},se.useRef=function(T){return Me.current.useRef(T)},se.useState=function(T){return Me.current.useState(T)},se.useSyncExternalStore=function(T,O,ie){return Me.current.useSyncExternalStore(T,O,ie)},se.useTransition=function(){return Me.current.useTransition()},se.version="18.3.1",se}var qm;function Vd(){return qm||(qm=1,Vu.exports=u0()),Vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function d0(){if(Ym)return Ds;Ym=1;var t=Vd(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,p,m){var v,y={},_=null,I=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(I=p.ref);for(v in p)i.call(p,v)&&!l.hasOwnProperty(v)&&(y[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)y[v]===void 0&&(y[v]=p[v]);return{$$typeof:e,type:h,key:_,ref:I,props:y,_owner:o.current}}return Ds.Fragment=n,Ds.jsx=u,Ds.jsxs=u,Ds}var Qm;function h0(){return Qm||(Qm=1,Wu.exports=d0()),Wu.exports}var w=h0(),M=Vd();const ey=Z_(M),f0=c0({__proto__:null,default:ey},[M]);var Va={},Gu={exports:{}},wt={},Ku={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xm;function p0(){return Xm||(Xm=1,function(t){function e(z,Z){var K=z.length;z.push(Z);e:for(;0<K;){var T=K-1>>>1,O=z[T];if(0<o(O,Z))z[T]=Z,z[K]=O,K=T;else break e}}function n(z){return z.length===0?null:z[0]}function i(z){if(z.length===0)return null;var Z=z[0],K=z.pop();if(K!==Z){z[0]=K;e:for(var T=0,O=z.length,ie=O>>>1;T<ie;){var le=2*(T+1)-1,de=z[le],he=le+1,Ce=z[he];if(0>o(de,K))he<O&&0>o(Ce,de)?(z[T]=Ce,z[he]=K,T=he):(z[T]=de,z[le]=K,T=le);else if(he<O&&0>o(Ce,K))z[T]=Ce,z[he]=K,T=he;else break e}}return Z}function o(z,Z){var K=z.sortIndex-Z.sortIndex;return K!==0?K:z.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;t.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();t.unstable_now=function(){return u.now()-h}}var p=[],m=[],v=1,y=null,_=3,I=!1,b=!1,A=!1,N=typeof setTimeout=="function"?setTimeout:null,j=typeof clearTimeout=="function"?clearTimeout:null,H=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(z){for(var Z=n(m);Z!==null;){if(Z.callback===null)i(m);else if(Z.startTime<=z)i(m),Z.sortIndex=Z.expirationTime,e(p,Z);else break;Z=n(m)}}function $(z){if(A=!1,U(z),!b)if(n(p)!==null)b=!0,mt(W);else{var Z=n(m);Z!==null&&Me($,Z.startTime-z)}}function W(z,Z){b=!1,A&&(A=!1,j(we),we=-1),I=!0;var K=_;try{for(U(Z),y=n(p);y!==null&&(!(y.expirationTime>Z)||z&&!qe());){var T=y.callback;if(typeof T=="function"){y.callback=null,_=y.priorityLevel;var O=T(y.expirationTime<=Z);Z=t.unstable_now(),typeof O=="function"?y.callback=O:y===n(p)&&i(p),U(Z)}else i(p);y=n(p)}if(y!==null)var ie=!0;else{var le=n(m);le!==null&&Me($,le.startTime-Z),ie=!1}return ie}finally{y=null,_=K,I=!1}}var re=!1,me=null,we=-1,ye=5,lt=-1;function qe(){return!(t.unstable_now()-lt<ye)}function Pt(){if(me!==null){var z=t.unstable_now();lt=z;var Z=!0;try{Z=me(!0,z)}finally{Z?It():(re=!1,me=null)}}else re=!1}var It;if(typeof H=="function")It=function(){H(Pt)};else if(typeof MessageChannel<"u"){var zt=new MessageChannel,nn=zt.port2;zt.port1.onmessage=Pt,It=function(){nn.postMessage(null)}}else It=function(){N(Pt,0)};function mt(z){me=z,re||(re=!0,It())}function Me(z,Z){we=N(function(){z(t.unstable_now())},Z)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(z){z.callback=null},t.unstable_continueExecution=function(){b||I||(b=!0,mt(W))},t.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ye=0<z?Math.floor(1e3/z):5},t.unstable_getCurrentPriorityLevel=function(){return _},t.unstable_getFirstCallbackNode=function(){return n(p)},t.unstable_next=function(z){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var K=_;_=Z;try{return z()}finally{_=K}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(z,Z){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var K=_;_=z;try{return Z()}finally{_=K}},t.unstable_scheduleCallback=function(z,Z,K){var T=t.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?T+K:T):K=T,z){case 1:var O=-1;break;case 2:O=250;break;case 5:O=1073741823;break;case 4:O=1e4;break;default:O=5e3}return O=K+O,z={id:v++,callback:Z,priorityLevel:z,startTime:K,expirationTime:O,sortIndex:-1},K>T?(z.sortIndex=K,e(m,z),n(p)===null&&z===n(m)&&(A?(j(we),we=-1):A=!0,Me($,K-T))):(z.sortIndex=O,e(p,z),b||I||(b=!0,mt(W))),z},t.unstable_shouldYield=qe,t.unstable_wrapCallback=function(z){var Z=_;return function(){var K=_;_=Z;try{return z.apply(this,arguments)}finally{_=K}}}}(qu)),qu}var Jm;function m0(){return Jm||(Jm=1,Ku.exports=p0()),Ku.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Zm;function g0(){if(Zm)return wt;Zm=1;var t=Vd(),e=m0();function n(r){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+r,a=1;a<arguments.length;a++)s+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+r+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var i=new Set,o={};function l(r,s){u(r,s),u(r+"Capture",s)}function u(r,s){for(o[r]=s,r=0;r<s.length;r++)i.add(s[r])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},y={};function _(r){return p.call(y,r)?!0:p.call(v,r)?!1:m.test(r)?y[r]=!0:(v[r]=!0,!1)}function I(r,s,a,c){if(a!==null&&a.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(r=r.toLowerCase().slice(0,5),r!=="data-"&&r!=="aria-");default:return!1}}function b(r,s,a,c){if(s===null||typeof s>"u"||I(r,s,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function A(r,s,a,c,d,f,g){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=r,this.type=s,this.sanitizeURL=f,this.removeEmptyString=g}var N={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(r){N[r]=new A(r,0,!1,r,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(r){var s=r[0];N[s]=new A(s,1,!1,r[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(r){N[r]=new A(r,2,!1,r.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(r){N[r]=new A(r,2,!1,r,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(r){N[r]=new A(r,3,!1,r.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(r){N[r]=new A(r,3,!0,r,null,!1,!1)}),["capture","download"].forEach(function(r){N[r]=new A(r,4,!1,r,null,!1,!1)}),["cols","rows","size","span"].forEach(function(r){N[r]=new A(r,6,!1,r,null,!1,!1)}),["rowSpan","start"].forEach(function(r){N[r]=new A(r,5,!1,r.toLowerCase(),null,!1,!1)});var j=/[\-:]([a-z])/g;function H(r){return r[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(r){var s=r.replace(j,H);N[s]=new A(s,1,!1,r,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(r){var s=r.replace(j,H);N[s]=new A(s,1,!1,r,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(r){var s=r.replace(j,H);N[s]=new A(s,1,!1,r,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(r){N[r]=new A(r,1,!1,r.toLowerCase(),null,!1,!1)}),N.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(r){N[r]=new A(r,1,!1,r.toLowerCase(),null,!0,!0)});function U(r,s,a,c){var d=N.hasOwnProperty(s)?N[s]:null;(d!==null?d.type!==0:c||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(b(s,a,d,c)&&(a=null),c||d===null?_(s)&&(a===null?r.removeAttribute(s):r.setAttribute(s,""+a)):d.mustUseProperty?r[d.propertyName]=a===null?d.type===3?!1:"":a:(s=d.attributeName,c=d.attributeNamespace,a===null?r.removeAttribute(s):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?r.setAttributeNS(c,s,a):r.setAttribute(s,a))))}var $=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),re=Symbol.for("react.portal"),me=Symbol.for("react.fragment"),we=Symbol.for("react.strict_mode"),ye=Symbol.for("react.profiler"),lt=Symbol.for("react.provider"),qe=Symbol.for("react.context"),Pt=Symbol.for("react.forward_ref"),It=Symbol.for("react.suspense"),zt=Symbol.for("react.suspense_list"),nn=Symbol.for("react.memo"),mt=Symbol.for("react.lazy"),Me=Symbol.for("react.offscreen"),z=Symbol.iterator;function Z(r){return r===null||typeof r!="object"?null:(r=z&&r[z]||r["@@iterator"],typeof r=="function"?r:null)}var K=Object.assign,T;function O(r){if(T===void 0)try{throw Error()}catch(a){var s=a.stack.trim().match(/\n( *(at )?)/);T=s&&s[1]||""}return`
`+T+r}var ie=!1;function le(r,s){if(!r||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(x){var c=x}Reflect.construct(r,[],s)}else{try{s.call()}catch(x){c=x}r.call(s.prototype)}else{try{throw Error()}catch(x){c=x}r()}}catch(x){if(x&&c&&typeof x.stack=="string"){for(var d=x.stack.split(`
`),f=c.stack.split(`
`),g=d.length-1,E=f.length-1;1<=g&&0<=E&&d[g]!==f[E];)E--;for(;1<=g&&0<=E;g--,E--)if(d[g]!==f[E]){if(g!==1||E!==1)do if(g--,E--,0>E||d[g]!==f[E]){var C=`
`+d[g].replace(" at new "," at ");return r.displayName&&C.includes("<anonymous>")&&(C=C.replace("<anonymous>",r.displayName)),C}while(1<=g&&0<=E);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(r=r?r.displayName||r.name:"")?O(r):""}function de(r){switch(r.tag){case 5:return O(r.type);case 16:return O("Lazy");case 13:return O("Suspense");case 19:return O("SuspenseList");case 0:case 2:case 15:return r=le(r.type,!1),r;case 11:return r=le(r.type.render,!1),r;case 1:return r=le(r.type,!0),r;default:return""}}function he(r){if(r==null)return null;if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case me:return"Fragment";case re:return"Portal";case ye:return"Profiler";case we:return"StrictMode";case It:return"Suspense";case zt:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case qe:return(r.displayName||"Context")+".Consumer";case lt:return(r._context.displayName||"Context")+".Provider";case Pt:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case nn:return s=r.displayName||null,s!==null?s:he(r.type)||"Memo";case mt:s=r._payload,r=r._init;try{return he(r(s))}catch{}}return null}function Ce(r){var s=r.type;switch(r.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return r=s.render,r=r.displayName||r.name||"",s.displayName||(r!==""?"ForwardRef("+r+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return he(s);case 8:return s===we?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function ge(r){switch(typeof r){case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Ae(r){var s=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Tt(r){var s=Ae(r)?"checked":"value",a=Object.getOwnPropertyDescriptor(r.constructor.prototype,s),c=""+r[s];if(!r.hasOwnProperty(s)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,f=a.set;return Object.defineProperty(r,s,{configurable:!0,get:function(){return d.call(this)},set:function(g){c=""+g,f.call(this,g)}}),Object.defineProperty(r,s,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(g){c=""+g},stopTracking:function(){r._valueTracker=null,delete r[s]}}}}function Lo(r){r._valueTracker||(r._valueTracker=Tt(r))}function Jh(r){if(!r)return!1;var s=r._valueTracker;if(!s)return!0;var a=s.getValue(),c="";return r&&(c=Ae(r)?r.checked?"true":"false":r.value),r=c,r!==a?(s.setValue(r),!0):!1}function Mo(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}function Xl(r,s){var a=s.checked;return K({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??r._wrapperState.initialChecked})}function Zh(r,s){var a=s.defaultValue==null?"":s.defaultValue,c=s.checked!=null?s.checked:s.defaultChecked;a=ge(s.value!=null?s.value:a),r._wrapperState={initialChecked:c,initialValue:a,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function ef(r,s){s=s.checked,s!=null&&U(r,"checked",s,!1)}function Jl(r,s){ef(r,s);var a=ge(s.value),c=s.type;if(a!=null)c==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+a):r.value!==""+a&&(r.value=""+a);else if(c==="submit"||c==="reset"){r.removeAttribute("value");return}s.hasOwnProperty("value")?Zl(r,s.type,a):s.hasOwnProperty("defaultValue")&&Zl(r,s.type,ge(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(r.defaultChecked=!!s.defaultChecked)}function tf(r,s,a){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var c=s.type;if(!(c!=="submit"&&c!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+r._wrapperState.initialValue,a||s===r.value||(r.value=s),r.defaultValue=s}a=r.name,a!==""&&(r.name=""),r.defaultChecked=!!r._wrapperState.initialChecked,a!==""&&(r.name=a)}function Zl(r,s,a){(s!=="number"||Mo(r.ownerDocument)!==r)&&(a==null?r.defaultValue=""+r._wrapperState.initialValue:r.defaultValue!==""+a&&(r.defaultValue=""+a))}var Yi=Array.isArray;function Xr(r,s,a,c){if(r=r.options,s){s={};for(var d=0;d<a.length;d++)s["$"+a[d]]=!0;for(a=0;a<r.length;a++)d=s.hasOwnProperty("$"+r[a].value),r[a].selected!==d&&(r[a].selected=d),d&&c&&(r[a].defaultSelected=!0)}else{for(a=""+ge(a),s=null,d=0;d<r.length;d++){if(r[d].value===a){r[d].selected=!0,c&&(r[d].defaultSelected=!0);return}s!==null||r[d].disabled||(s=r[d])}s!==null&&(s.selected=!0)}}function ec(r,s){if(s.dangerouslySetInnerHTML!=null)throw Error(n(91));return K({},s,{value:void 0,defaultValue:void 0,children:""+r._wrapperState.initialValue})}function nf(r,s){var a=s.value;if(a==null){if(a=s.children,s=s.defaultValue,a!=null){if(s!=null)throw Error(n(92));if(Yi(a)){if(1<a.length)throw Error(n(93));a=a[0]}s=a}s==null&&(s=""),a=s}r._wrapperState={initialValue:ge(a)}}function rf(r,s){var a=ge(s.value),c=ge(s.defaultValue);a!=null&&(a=""+a,a!==r.value&&(r.value=a),s.defaultValue==null&&r.defaultValue!==a&&(r.defaultValue=a)),c!=null&&(r.defaultValue=""+c)}function sf(r){var s=r.textContent;s===r._wrapperState.initialValue&&s!==""&&s!==null&&(r.value=s)}function of(r){switch(r){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function tc(r,s){return r==null||r==="http://www.w3.org/1999/xhtml"?of(s):r==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":r}var Uo,af=function(r){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,a,c,d){MSApp.execUnsafeLocalFunction(function(){return r(s,a,c,d)})}:r}(function(r,s){if(r.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in r)r.innerHTML=s;else{for(Uo=Uo||document.createElement("div"),Uo.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=Uo.firstChild;r.firstChild;)r.removeChild(r.firstChild);for(;s.firstChild;)r.appendChild(s.firstChild)}});function Qi(r,s){if(s){var a=r.firstChild;if(a&&a===r.lastChild&&a.nodeType===3){a.nodeValue=s;return}}r.textContent=s}var Xi={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},f1=["Webkit","ms","Moz","O"];Object.keys(Xi).forEach(function(r){f1.forEach(function(s){s=s+r.charAt(0).toUpperCase()+r.substring(1),Xi[s]=Xi[r]})});function lf(r,s,a){return s==null||typeof s=="boolean"||s===""?"":a||typeof s!="number"||s===0||Xi.hasOwnProperty(r)&&Xi[r]?(""+s).trim():s+"px"}function cf(r,s){r=r.style;for(var a in s)if(s.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=lf(a,s[a],c);a==="float"&&(a="cssFloat"),c?r.setProperty(a,d):r[a]=d}}var p1=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function nc(r,s){if(s){if(p1[r]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(n(137,r));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(n(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(n(61))}if(s.style!=null&&typeof s.style!="object")throw Error(n(62))}}function rc(r,s){if(r.indexOf("-")===-1)return typeof s.is=="string";switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ic=null;function sc(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var oc=null,Jr=null,Zr=null;function uf(r){if(r=vs(r)){if(typeof oc!="function")throw Error(n(280));var s=r.stateNode;s&&(s=oa(s),oc(r.stateNode,r.type,s))}}function df(r){Jr?Zr?Zr.push(r):Zr=[r]:Jr=r}function hf(){if(Jr){var r=Jr,s=Zr;if(Zr=Jr=null,uf(r),s)for(r=0;r<s.length;r++)uf(s[r])}}function ff(r,s){return r(s)}function pf(){}var ac=!1;function mf(r,s,a){if(ac)return r(s,a);ac=!0;try{return ff(r,s,a)}finally{ac=!1,(Jr!==null||Zr!==null)&&(pf(),hf())}}function Ji(r,s){var a=r.stateNode;if(a===null)return null;var c=oa(a);if(c===null)return null;a=c[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(r=r.type,c=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!c;break e;default:r=!1}if(r)return null;if(a&&typeof a!="function")throw Error(n(231,s,typeof a));return a}var lc=!1;if(h)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){lc=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{lc=!1}function m1(r,s,a,c,d,f,g,E,C){var x=Array.prototype.slice.call(arguments,3);try{s.apply(a,x)}catch(D){this.onError(D)}}var es=!1,Fo=null,Bo=!1,cc=null,g1={onError:function(r){es=!0,Fo=r}};function _1(r,s,a,c,d,f,g,E,C){es=!1,Fo=null,m1.apply(g1,arguments)}function y1(r,s,a,c,d,f,g,E,C){if(_1.apply(this,arguments),es){if(es){var x=Fo;es=!1,Fo=null}else throw Error(n(198));Bo||(Bo=!0,cc=x)}}function vr(r){var s=r,a=r;if(r.alternate)for(;s.return;)s=s.return;else{r=s;do s=r,(s.flags&4098)!==0&&(a=s.return),r=s.return;while(r)}return s.tag===3?a:null}function gf(r){if(r.tag===13){var s=r.memoizedState;if(s===null&&(r=r.alternate,r!==null&&(s=r.memoizedState)),s!==null)return s.dehydrated}return null}function _f(r){if(vr(r)!==r)throw Error(n(188))}function v1(r){var s=r.alternate;if(!s){if(s=vr(r),s===null)throw Error(n(188));return s!==r?null:r}for(var a=r,c=s;;){var d=a.return;if(d===null)break;var f=d.alternate;if(f===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===f.child){for(f=d.child;f;){if(f===a)return _f(d),r;if(f===c)return _f(d),s;f=f.sibling}throw Error(n(188))}if(a.return!==c.return)a=d,c=f;else{for(var g=!1,E=d.child;E;){if(E===a){g=!0,a=d,c=f;break}if(E===c){g=!0,c=d,a=f;break}E=E.sibling}if(!g){for(E=f.child;E;){if(E===a){g=!0,a=f,c=d;break}if(E===c){g=!0,c=f,a=d;break}E=E.sibling}if(!g)throw Error(n(189))}}if(a.alternate!==c)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?r:s}function yf(r){return r=v1(r),r!==null?vf(r):null}function vf(r){if(r.tag===5||r.tag===6)return r;for(r=r.child;r!==null;){var s=vf(r);if(s!==null)return s;r=r.sibling}return null}var Ef=e.unstable_scheduleCallback,wf=e.unstable_cancelCallback,E1=e.unstable_shouldYield,w1=e.unstable_requestPaint,je=e.unstable_now,C1=e.unstable_getCurrentPriorityLevel,uc=e.unstable_ImmediatePriority,Cf=e.unstable_UserBlockingPriority,jo=e.unstable_NormalPriority,S1=e.unstable_LowPriority,Sf=e.unstable_IdlePriority,$o=null,rn=null;function I1(r){if(rn&&typeof rn.onCommitFiberRoot=="function")try{rn.onCommitFiberRoot($o,r,void 0,(r.current.flags&128)===128)}catch{}}var Wt=Math.clz32?Math.clz32:N1,T1=Math.log,k1=Math.LN2;function N1(r){return r>>>=0,r===0?32:31-(T1(r)/k1|0)|0}var Ho=64,zo=4194304;function ts(r){switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return r&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return r}}function Wo(r,s){var a=r.pendingLanes;if(a===0)return 0;var c=0,d=r.suspendedLanes,f=r.pingedLanes,g=a&268435455;if(g!==0){var E=g&~d;E!==0?c=ts(E):(f&=g,f!==0&&(c=ts(f)))}else g=a&~d,g!==0?c=ts(g):f!==0&&(c=ts(f));if(c===0)return 0;if(s!==0&&s!==c&&(s&d)===0&&(d=c&-c,f=s&-s,d>=f||d===16&&(f&4194240)!==0))return s;if((c&4)!==0&&(c|=a&16),s=r.entangledLanes,s!==0)for(r=r.entanglements,s&=c;0<s;)a=31-Wt(s),d=1<<a,c|=r[a],s&=~d;return c}function R1(r,s){switch(r){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function x1(r,s){for(var a=r.suspendedLanes,c=r.pingedLanes,d=r.expirationTimes,f=r.pendingLanes;0<f;){var g=31-Wt(f),E=1<<g,C=d[g];C===-1?((E&a)===0||(E&c)!==0)&&(d[g]=R1(E,s)):C<=s&&(r.expiredLanes|=E),f&=~E}}function dc(r){return r=r.pendingLanes&-1073741825,r!==0?r:r&1073741824?1073741824:0}function If(){var r=Ho;return Ho<<=1,(Ho&4194240)===0&&(Ho=64),r}function hc(r){for(var s=[],a=0;31>a;a++)s.push(r);return s}function ns(r,s,a){r.pendingLanes|=s,s!==536870912&&(r.suspendedLanes=0,r.pingedLanes=0),r=r.eventTimes,s=31-Wt(s),r[s]=a}function b1(r,s){var a=r.pendingLanes&~s;r.pendingLanes=s,r.suspendedLanes=0,r.pingedLanes=0,r.expiredLanes&=s,r.mutableReadLanes&=s,r.entangledLanes&=s,s=r.entanglements;var c=r.eventTimes;for(r=r.expirationTimes;0<a;){var d=31-Wt(a),f=1<<d;s[d]=0,c[d]=-1,r[d]=-1,a&=~f}}function fc(r,s){var a=r.entangledLanes|=s;for(r=r.entanglements;a;){var c=31-Wt(a),d=1<<c;d&s|r[c]&s&&(r[c]|=s),a&=~d}}var _e=0;function Tf(r){return r&=-r,1<r?4<r?(r&268435455)!==0?16:536870912:4:1}var kf,pc,Nf,Rf,xf,mc=!1,Vo=[],Dn=null,Ln=null,Mn=null,rs=new Map,is=new Map,Un=[],A1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function bf(r,s){switch(r){case"focusin":case"focusout":Dn=null;break;case"dragenter":case"dragleave":Ln=null;break;case"mouseover":case"mouseout":Mn=null;break;case"pointerover":case"pointerout":rs.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":is.delete(s.pointerId)}}function ss(r,s,a,c,d,f){return r===null||r.nativeEvent!==f?(r={blockedOn:s,domEventName:a,eventSystemFlags:c,nativeEvent:f,targetContainers:[d]},s!==null&&(s=vs(s),s!==null&&pc(s)),r):(r.eventSystemFlags|=c,s=r.targetContainers,d!==null&&s.indexOf(d)===-1&&s.push(d),r)}function P1(r,s,a,c,d){switch(s){case"focusin":return Dn=ss(Dn,r,s,a,c,d),!0;case"dragenter":return Ln=ss(Ln,r,s,a,c,d),!0;case"mouseover":return Mn=ss(Mn,r,s,a,c,d),!0;case"pointerover":var f=d.pointerId;return rs.set(f,ss(rs.get(f)||null,r,s,a,c,d)),!0;case"gotpointercapture":return f=d.pointerId,is.set(f,ss(is.get(f)||null,r,s,a,c,d)),!0}return!1}function Af(r){var s=Er(r.target);if(s!==null){var a=vr(s);if(a!==null){if(s=a.tag,s===13){if(s=gf(a),s!==null){r.blockedOn=s,xf(r.priority,function(){Nf(a)});return}}else if(s===3&&a.stateNode.current.memoizedState.isDehydrated){r.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}r.blockedOn=null}function Go(r){if(r.blockedOn!==null)return!1;for(var s=r.targetContainers;0<s.length;){var a=_c(r.domEventName,r.eventSystemFlags,s[0],r.nativeEvent);if(a===null){a=r.nativeEvent;var c=new a.constructor(a.type,a);ic=c,a.target.dispatchEvent(c),ic=null}else return s=vs(a),s!==null&&pc(s),r.blockedOn=a,!1;s.shift()}return!0}function Pf(r,s,a){Go(r)&&a.delete(s)}function O1(){mc=!1,Dn!==null&&Go(Dn)&&(Dn=null),Ln!==null&&Go(Ln)&&(Ln=null),Mn!==null&&Go(Mn)&&(Mn=null),rs.forEach(Pf),is.forEach(Pf)}function os(r,s){r.blockedOn===s&&(r.blockedOn=null,mc||(mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,O1)))}function as(r){function s(d){return os(d,r)}if(0<Vo.length){os(Vo[0],r);for(var a=1;a<Vo.length;a++){var c=Vo[a];c.blockedOn===r&&(c.blockedOn=null)}}for(Dn!==null&&os(Dn,r),Ln!==null&&os(Ln,r),Mn!==null&&os(Mn,r),rs.forEach(s),is.forEach(s),a=0;a<Un.length;a++)c=Un[a],c.blockedOn===r&&(c.blockedOn=null);for(;0<Un.length&&(a=Un[0],a.blockedOn===null);)Af(a),a.blockedOn===null&&Un.shift()}var ei=$.ReactCurrentBatchConfig,Ko=!0;function D1(r,s,a,c){var d=_e,f=ei.transition;ei.transition=null;try{_e=1,gc(r,s,a,c)}finally{_e=d,ei.transition=f}}function L1(r,s,a,c){var d=_e,f=ei.transition;ei.transition=null;try{_e=4,gc(r,s,a,c)}finally{_e=d,ei.transition=f}}function gc(r,s,a,c){if(Ko){var d=_c(r,s,a,c);if(d===null)Dc(r,s,c,qo,a),bf(r,c);else if(P1(d,r,s,a,c))c.stopPropagation();else if(bf(r,c),s&4&&-1<A1.indexOf(r)){for(;d!==null;){var f=vs(d);if(f!==null&&kf(f),f=_c(r,s,a,c),f===null&&Dc(r,s,c,qo,a),f===d)break;d=f}d!==null&&c.stopPropagation()}else Dc(r,s,c,null,a)}}var qo=null;function _c(r,s,a,c){if(qo=null,r=sc(c),r=Er(r),r!==null)if(s=vr(r),s===null)r=null;else if(a=s.tag,a===13){if(r=gf(s),r!==null)return r;r=null}else if(a===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;r=null}else s!==r&&(r=null);return qo=r,null}function Of(r){switch(r){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(C1()){case uc:return 1;case Cf:return 4;case jo:case S1:return 16;case Sf:return 536870912;default:return 16}default:return 16}}var Fn=null,yc=null,Yo=null;function Df(){if(Yo)return Yo;var r,s=yc,a=s.length,c,d="value"in Fn?Fn.value:Fn.textContent,f=d.length;for(r=0;r<a&&s[r]===d[r];r++);var g=a-r;for(c=1;c<=g&&s[a-c]===d[f-c];c++);return Yo=d.slice(r,1<c?1-c:void 0)}function Qo(r){var s=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&s===13&&(r=13)):r=s,r===10&&(r=13),32<=r||r===13?r:0}function Xo(){return!0}function Lf(){return!1}function kt(r){function s(a,c,d,f,g){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=f,this.target=g,this.currentTarget=null;for(var E in r)r.hasOwnProperty(E)&&(a=r[E],this[E]=a?a(f):f[E]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Xo:Lf,this.isPropagationStopped=Lf,this}return K(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Xo)},persist:function(){},isPersistent:Xo}),s}var ti={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vc=kt(ti),ls=K({},ti,{view:0,detail:0}),M1=kt(ls),Ec,wc,cs,Jo=K({},ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Sc,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==cs&&(cs&&r.type==="mousemove"?(Ec=r.screenX-cs.screenX,wc=r.screenY-cs.screenY):wc=Ec=0,cs=r),Ec)},movementY:function(r){return"movementY"in r?r.movementY:wc}}),Mf=kt(Jo),U1=K({},Jo,{dataTransfer:0}),F1=kt(U1),B1=K({},ls,{relatedTarget:0}),Cc=kt(B1),j1=K({},ti,{animationName:0,elapsedTime:0,pseudoElement:0}),$1=kt(j1),H1=K({},ti,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),z1=kt(H1),W1=K({},ti,{data:0}),Uf=kt(W1),V1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},G1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},K1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q1(r){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(r):(r=K1[r])?!!s[r]:!1}function Sc(){return q1}var Y1=K({},ls,{key:function(r){if(r.key){var s=V1[r.key]||r.key;if(s!=="Unidentified")return s}return r.type==="keypress"?(r=Qo(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?G1[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Sc,charCode:function(r){return r.type==="keypress"?Qo(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?Qo(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),Q1=kt(Y1),X1=K({},Jo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ff=kt(X1),J1=K({},ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Sc}),Z1=kt(J1),ew=K({},ti,{propertyName:0,elapsedTime:0,pseudoElement:0}),tw=kt(ew),nw=K({},Jo,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),rw=kt(nw),iw=[9,13,27,32],Ic=h&&"CompositionEvent"in window,us=null;h&&"documentMode"in document&&(us=document.documentMode);var sw=h&&"TextEvent"in window&&!us,Bf=h&&(!Ic||us&&8<us&&11>=us),jf=" ",$f=!1;function Hf(r,s){switch(r){case"keyup":return iw.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function zf(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var ni=!1;function ow(r,s){switch(r){case"compositionend":return zf(s);case"keypress":return s.which!==32?null:($f=!0,jf);case"textInput":return r=s.data,r===jf&&$f?null:r;default:return null}}function aw(r,s){if(ni)return r==="compositionend"||!Ic&&Hf(r,s)?(r=Df(),Yo=yc=Fn=null,ni=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return Bf&&s.locale!=="ko"?null:s.data;default:return null}}var lw={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wf(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s==="input"?!!lw[r.type]:s==="textarea"}function Vf(r,s,a,c){df(c),s=ra(s,"onChange"),0<s.length&&(a=new vc("onChange","change",null,a,c),r.push({event:a,listeners:s}))}var ds=null,hs=null;function cw(r){cp(r,0)}function Zo(r){var s=ai(r);if(Jh(s))return r}function uw(r,s){if(r==="change")return s}var Gf=!1;if(h){var Tc;if(h){var kc="oninput"in document;if(!kc){var Kf=document.createElement("div");Kf.setAttribute("oninput","return;"),kc=typeof Kf.oninput=="function"}Tc=kc}else Tc=!1;Gf=Tc&&(!document.documentMode||9<document.documentMode)}function qf(){ds&&(ds.detachEvent("onpropertychange",Yf),hs=ds=null)}function Yf(r){if(r.propertyName==="value"&&Zo(hs)){var s=[];Vf(s,hs,r,sc(r)),mf(cw,s)}}function dw(r,s,a){r==="focusin"?(qf(),ds=s,hs=a,ds.attachEvent("onpropertychange",Yf)):r==="focusout"&&qf()}function hw(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Zo(hs)}function fw(r,s){if(r==="click")return Zo(s)}function pw(r,s){if(r==="input"||r==="change")return Zo(s)}function mw(r,s){return r===s&&(r!==0||1/r===1/s)||r!==r&&s!==s}var Vt=typeof Object.is=="function"?Object.is:mw;function fs(r,s){if(Vt(r,s))return!0;if(typeof r!="object"||r===null||typeof s!="object"||s===null)return!1;var a=Object.keys(r),c=Object.keys(s);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!p.call(s,d)||!Vt(r[d],s[d]))return!1}return!0}function Qf(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function Xf(r,s){var a=Qf(r);r=0;for(var c;a;){if(a.nodeType===3){if(c=r+a.textContent.length,r<=s&&c>=s)return{node:a,offset:s-r};r=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Qf(a)}}function Jf(r,s){return r&&s?r===s?!0:r&&r.nodeType===3?!1:s&&s.nodeType===3?Jf(r,s.parentNode):"contains"in r?r.contains(s):r.compareDocumentPosition?!!(r.compareDocumentPosition(s)&16):!1:!1}function Zf(){for(var r=window,s=Mo();s instanceof r.HTMLIFrameElement;){try{var a=typeof s.contentWindow.location.href=="string"}catch{a=!1}if(a)r=s.contentWindow;else break;s=Mo(r.document)}return s}function Nc(r){var s=r&&r.nodeName&&r.nodeName.toLowerCase();return s&&(s==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||s==="textarea"||r.contentEditable==="true")}function gw(r){var s=Zf(),a=r.focusedElem,c=r.selectionRange;if(s!==a&&a&&a.ownerDocument&&Jf(a.ownerDocument.documentElement,a)){if(c!==null&&Nc(a)){if(s=c.start,r=c.end,r===void 0&&(r=s),"selectionStart"in a)a.selectionStart=s,a.selectionEnd=Math.min(r,a.value.length);else if(r=(s=a.ownerDocument||document)&&s.defaultView||window,r.getSelection){r=r.getSelection();var d=a.textContent.length,f=Math.min(c.start,d);c=c.end===void 0?f:Math.min(c.end,d),!r.extend&&f>c&&(d=c,c=f,f=d),d=Xf(a,f);var g=Xf(a,c);d&&g&&(r.rangeCount!==1||r.anchorNode!==d.node||r.anchorOffset!==d.offset||r.focusNode!==g.node||r.focusOffset!==g.offset)&&(s=s.createRange(),s.setStart(d.node,d.offset),r.removeAllRanges(),f>c?(r.addRange(s),r.extend(g.node,g.offset)):(s.setEnd(g.node,g.offset),r.addRange(s)))}}for(s=[],r=a;r=r.parentNode;)r.nodeType===1&&s.push({element:r,left:r.scrollLeft,top:r.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<s.length;a++)r=s[a],r.element.scrollLeft=r.left,r.element.scrollTop=r.top}}var _w=h&&"documentMode"in document&&11>=document.documentMode,ri=null,Rc=null,ps=null,xc=!1;function ep(r,s,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;xc||ri==null||ri!==Mo(c)||(c=ri,"selectionStart"in c&&Nc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),ps&&fs(ps,c)||(ps=c,c=ra(Rc,"onSelect"),0<c.length&&(s=new vc("onSelect","select",null,s,a),r.push({event:s,listeners:c}),s.target=ri)))}function ea(r,s){var a={};return a[r.toLowerCase()]=s.toLowerCase(),a["Webkit"+r]="webkit"+s,a["Moz"+r]="moz"+s,a}var ii={animationend:ea("Animation","AnimationEnd"),animationiteration:ea("Animation","AnimationIteration"),animationstart:ea("Animation","AnimationStart"),transitionend:ea("Transition","TransitionEnd")},bc={},tp={};h&&(tp=document.createElement("div").style,"AnimationEvent"in window||(delete ii.animationend.animation,delete ii.animationiteration.animation,delete ii.animationstart.animation),"TransitionEvent"in window||delete ii.transitionend.transition);function ta(r){if(bc[r])return bc[r];if(!ii[r])return r;var s=ii[r],a;for(a in s)if(s.hasOwnProperty(a)&&a in tp)return bc[r]=s[a];return r}var np=ta("animationend"),rp=ta("animationiteration"),ip=ta("animationstart"),sp=ta("transitionend"),op=new Map,ap="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Bn(r,s){op.set(r,s),l(s,[r])}for(var Ac=0;Ac<ap.length;Ac++){var Pc=ap[Ac],yw=Pc.toLowerCase(),vw=Pc[0].toUpperCase()+Pc.slice(1);Bn(yw,"on"+vw)}Bn(np,"onAnimationEnd"),Bn(rp,"onAnimationIteration"),Bn(ip,"onAnimationStart"),Bn("dblclick","onDoubleClick"),Bn("focusin","onFocus"),Bn("focusout","onBlur"),Bn(sp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ms="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ew=new Set("cancel close invalid load scroll toggle".split(" ").concat(ms));function lp(r,s,a){var c=r.type||"unknown-event";r.currentTarget=a,y1(c,s,void 0,r),r.currentTarget=null}function cp(r,s){s=(s&4)!==0;for(var a=0;a<r.length;a++){var c=r[a],d=c.event;c=c.listeners;e:{var f=void 0;if(s)for(var g=c.length-1;0<=g;g--){var E=c[g],C=E.instance,x=E.currentTarget;if(E=E.listener,C!==f&&d.isPropagationStopped())break e;lp(d,E,x),f=C}else for(g=0;g<c.length;g++){if(E=c[g],C=E.instance,x=E.currentTarget,E=E.listener,C!==f&&d.isPropagationStopped())break e;lp(d,E,x),f=C}}}if(Bo)throw r=cc,Bo=!1,cc=null,r}function Ne(r,s){var a=s[jc];a===void 0&&(a=s[jc]=new Set);var c=r+"__bubble";a.has(c)||(up(s,r,2,!1),a.add(c))}function Oc(r,s,a){var c=0;s&&(c|=4),up(a,r,c,s)}var na="_reactListening"+Math.random().toString(36).slice(2);function gs(r){if(!r[na]){r[na]=!0,i.forEach(function(a){a!=="selectionchange"&&(Ew.has(a)||Oc(a,!1,r),Oc(a,!0,r))});var s=r.nodeType===9?r:r.ownerDocument;s===null||s[na]||(s[na]=!0,Oc("selectionchange",!1,s))}}function up(r,s,a,c){switch(Of(s)){case 1:var d=D1;break;case 4:d=L1;break;default:d=gc}a=d.bind(null,s,a,r),d=void 0,!lc||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(d=!0),c?d!==void 0?r.addEventListener(s,a,{capture:!0,passive:d}):r.addEventListener(s,a,!0):d!==void 0?r.addEventListener(s,a,{passive:d}):r.addEventListener(s,a,!1)}function Dc(r,s,a,c,d){var f=c;if((s&1)===0&&(s&2)===0&&c!==null)e:for(;;){if(c===null)return;var g=c.tag;if(g===3||g===4){var E=c.stateNode.containerInfo;if(E===d||E.nodeType===8&&E.parentNode===d)break;if(g===4)for(g=c.return;g!==null;){var C=g.tag;if((C===3||C===4)&&(C=g.stateNode.containerInfo,C===d||C.nodeType===8&&C.parentNode===d))return;g=g.return}for(;E!==null;){if(g=Er(E),g===null)return;if(C=g.tag,C===5||C===6){c=f=g;continue e}E=E.parentNode}}c=c.return}mf(function(){var x=f,D=sc(a),L=[];e:{var P=op.get(r);if(P!==void 0){var V=vc,q=r;switch(r){case"keypress":if(Qo(a)===0)break e;case"keydown":case"keyup":V=Q1;break;case"focusin":q="focus",V=Cc;break;case"focusout":q="blur",V=Cc;break;case"beforeblur":case"afterblur":V=Cc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=Mf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=F1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=Z1;break;case np:case rp:case ip:V=$1;break;case sp:V=tw;break;case"scroll":V=M1;break;case"wheel":V=rw;break;case"copy":case"cut":case"paste":V=z1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=Ff}var Y=(s&4)!==0,$e=!Y&&r==="scroll",k=Y?P!==null?P+"Capture":null:P;Y=[];for(var S=x,R;S!==null;){R=S;var F=R.stateNode;if(R.tag===5&&F!==null&&(R=F,k!==null&&(F=Ji(S,k),F!=null&&Y.push(_s(S,F,R)))),$e)break;S=S.return}0<Y.length&&(P=new V(P,q,null,a,D),L.push({event:P,listeners:Y}))}}if((s&7)===0){e:{if(P=r==="mouseover"||r==="pointerover",V=r==="mouseout"||r==="pointerout",P&&a!==ic&&(q=a.relatedTarget||a.fromElement)&&(Er(q)||q[hn]))break e;if((V||P)&&(P=D.window===D?D:(P=D.ownerDocument)?P.defaultView||P.parentWindow:window,V?(q=a.relatedTarget||a.toElement,V=x,q=q?Er(q):null,q!==null&&($e=vr(q),q!==$e||q.tag!==5&&q.tag!==6)&&(q=null)):(V=null,q=x),V!==q)){if(Y=Mf,F="onMouseLeave",k="onMouseEnter",S="mouse",(r==="pointerout"||r==="pointerover")&&(Y=Ff,F="onPointerLeave",k="onPointerEnter",S="pointer"),$e=V==null?P:ai(V),R=q==null?P:ai(q),P=new Y(F,S+"leave",V,a,D),P.target=$e,P.relatedTarget=R,F=null,Er(D)===x&&(Y=new Y(k,S+"enter",q,a,D),Y.target=R,Y.relatedTarget=$e,F=Y),$e=F,V&&q)t:{for(Y=V,k=q,S=0,R=Y;R;R=si(R))S++;for(R=0,F=k;F;F=si(F))R++;for(;0<S-R;)Y=si(Y),S--;for(;0<R-S;)k=si(k),R--;for(;S--;){if(Y===k||k!==null&&Y===k.alternate)break t;Y=si(Y),k=si(k)}Y=null}else Y=null;V!==null&&dp(L,P,V,Y,!1),q!==null&&$e!==null&&dp(L,$e,q,Y,!0)}}e:{if(P=x?ai(x):window,V=P.nodeName&&P.nodeName.toLowerCase(),V==="select"||V==="input"&&P.type==="file")var Q=uw;else if(Wf(P))if(Gf)Q=pw;else{Q=hw;var X=dw}else(V=P.nodeName)&&V.toLowerCase()==="input"&&(P.type==="checkbox"||P.type==="radio")&&(Q=fw);if(Q&&(Q=Q(r,x))){Vf(L,Q,a,D);break e}X&&X(r,P,x),r==="focusout"&&(X=P._wrapperState)&&X.controlled&&P.type==="number"&&Zl(P,"number",P.value)}switch(X=x?ai(x):window,r){case"focusin":(Wf(X)||X.contentEditable==="true")&&(ri=X,Rc=x,ps=null);break;case"focusout":ps=Rc=ri=null;break;case"mousedown":xc=!0;break;case"contextmenu":case"mouseup":case"dragend":xc=!1,ep(L,a,D);break;case"selectionchange":if(_w)break;case"keydown":case"keyup":ep(L,a,D)}var J;if(Ic)e:{switch(r){case"compositionstart":var ne="onCompositionStart";break e;case"compositionend":ne="onCompositionEnd";break e;case"compositionupdate":ne="onCompositionUpdate";break e}ne=void 0}else ni?Hf(r,a)&&(ne="onCompositionEnd"):r==="keydown"&&a.keyCode===229&&(ne="onCompositionStart");ne&&(Bf&&a.locale!=="ko"&&(ni||ne!=="onCompositionStart"?ne==="onCompositionEnd"&&ni&&(J=Df()):(Fn=D,yc="value"in Fn?Fn.value:Fn.textContent,ni=!0)),X=ra(x,ne),0<X.length&&(ne=new Uf(ne,r,null,a,D),L.push({event:ne,listeners:X}),J?ne.data=J:(J=zf(a),J!==null&&(ne.data=J)))),(J=sw?ow(r,a):aw(r,a))&&(x=ra(x,"onBeforeInput"),0<x.length&&(D=new Uf("onBeforeInput","beforeinput",null,a,D),L.push({event:D,listeners:x}),D.data=J))}cp(L,s)})}function _s(r,s,a){return{instance:r,listener:s,currentTarget:a}}function ra(r,s){for(var a=s+"Capture",c=[];r!==null;){var d=r,f=d.stateNode;d.tag===5&&f!==null&&(d=f,f=Ji(r,a),f!=null&&c.unshift(_s(r,f,d)),f=Ji(r,s),f!=null&&c.push(_s(r,f,d))),r=r.return}return c}function si(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5);return r||null}function dp(r,s,a,c,d){for(var f=s._reactName,g=[];a!==null&&a!==c;){var E=a,C=E.alternate,x=E.stateNode;if(C!==null&&C===c)break;E.tag===5&&x!==null&&(E=x,d?(C=Ji(a,f),C!=null&&g.unshift(_s(a,C,E))):d||(C=Ji(a,f),C!=null&&g.push(_s(a,C,E)))),a=a.return}g.length!==0&&r.push({event:s,listeners:g})}var ww=/\r\n?/g,Cw=/\u0000|\uFFFD/g;function hp(r){return(typeof r=="string"?r:""+r).replace(ww,`
`).replace(Cw,"")}function ia(r,s,a){if(s=hp(s),hp(r)!==s&&a)throw Error(n(425))}function sa(){}var Lc=null,Mc=null;function Uc(r,s){return r==="textarea"||r==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Fc=typeof setTimeout=="function"?setTimeout:void 0,Sw=typeof clearTimeout=="function"?clearTimeout:void 0,fp=typeof Promise=="function"?Promise:void 0,Iw=typeof queueMicrotask=="function"?queueMicrotask:typeof fp<"u"?function(r){return fp.resolve(null).then(r).catch(Tw)}:Fc;function Tw(r){setTimeout(function(){throw r})}function Bc(r,s){var a=s,c=0;do{var d=a.nextSibling;if(r.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){r.removeChild(d),as(s);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);as(s)}function jn(r){for(;r!=null;r=r.nextSibling){var s=r.nodeType;if(s===1||s===3)break;if(s===8){if(s=r.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return r}function pp(r){r=r.previousSibling;for(var s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="$"||a==="$!"||a==="$?"){if(s===0)return r;s--}else a==="/$"&&s++}r=r.previousSibling}return null}var oi=Math.random().toString(36).slice(2),sn="__reactFiber$"+oi,ys="__reactProps$"+oi,hn="__reactContainer$"+oi,jc="__reactEvents$"+oi,kw="__reactListeners$"+oi,Nw="__reactHandles$"+oi;function Er(r){var s=r[sn];if(s)return s;for(var a=r.parentNode;a;){if(s=a[hn]||a[sn]){if(a=s.alternate,s.child!==null||a!==null&&a.child!==null)for(r=pp(r);r!==null;){if(a=r[sn])return a;r=pp(r)}return s}r=a,a=r.parentNode}return null}function vs(r){return r=r[sn]||r[hn],!r||r.tag!==5&&r.tag!==6&&r.tag!==13&&r.tag!==3?null:r}function ai(r){if(r.tag===5||r.tag===6)return r.stateNode;throw Error(n(33))}function oa(r){return r[ys]||null}var $c=[],li=-1;function $n(r){return{current:r}}function Re(r){0>li||(r.current=$c[li],$c[li]=null,li--)}function Se(r,s){li++,$c[li]=r.current,r.current=s}var Hn={},it=$n(Hn),gt=$n(!1),wr=Hn;function ci(r,s){var a=r.type.contextTypes;if(!a)return Hn;var c=r.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===s)return c.__reactInternalMemoizedMaskedChildContext;var d={},f;for(f in a)d[f]=s[f];return c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=s,r.__reactInternalMemoizedMaskedChildContext=d),d}function _t(r){return r=r.childContextTypes,r!=null}function aa(){Re(gt),Re(it)}function mp(r,s,a){if(it.current!==Hn)throw Error(n(168));Se(it,s),Se(gt,a)}function gp(r,s,a){var c=r.stateNode;if(s=s.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in s))throw Error(n(108,Ce(r)||"Unknown",d));return K({},a,c)}function la(r){return r=(r=r.stateNode)&&r.__reactInternalMemoizedMergedChildContext||Hn,wr=it.current,Se(it,r),Se(gt,gt.current),!0}function _p(r,s,a){var c=r.stateNode;if(!c)throw Error(n(169));a?(r=gp(r,s,wr),c.__reactInternalMemoizedMergedChildContext=r,Re(gt),Re(it),Se(it,r)):Re(gt),Se(gt,a)}var fn=null,ca=!1,Hc=!1;function yp(r){fn===null?fn=[r]:fn.push(r)}function Rw(r){ca=!0,yp(r)}function zn(){if(!Hc&&fn!==null){Hc=!0;var r=0,s=_e;try{var a=fn;for(_e=1;r<a.length;r++){var c=a[r];do c=c(!0);while(c!==null)}fn=null,ca=!1}catch(d){throw fn!==null&&(fn=fn.slice(r+1)),Ef(uc,zn),d}finally{_e=s,Hc=!1}}return null}var ui=[],di=0,ua=null,da=0,Ot=[],Dt=0,Cr=null,pn=1,mn="";function Sr(r,s){ui[di++]=da,ui[di++]=ua,ua=r,da=s}function vp(r,s,a){Ot[Dt++]=pn,Ot[Dt++]=mn,Ot[Dt++]=Cr,Cr=r;var c=pn;r=mn;var d=32-Wt(c)-1;c&=~(1<<d),a+=1;var f=32-Wt(s)+d;if(30<f){var g=d-d%5;f=(c&(1<<g)-1).toString(32),c>>=g,d-=g,pn=1<<32-Wt(s)+d|a<<d|c,mn=f+r}else pn=1<<f|a<<d|c,mn=r}function zc(r){r.return!==null&&(Sr(r,1),vp(r,1,0))}function Wc(r){for(;r===ua;)ua=ui[--di],ui[di]=null,da=ui[--di],ui[di]=null;for(;r===Cr;)Cr=Ot[--Dt],Ot[Dt]=null,mn=Ot[--Dt],Ot[Dt]=null,pn=Ot[--Dt],Ot[Dt]=null}var Nt=null,Rt=null,Pe=!1,Gt=null;function Ep(r,s){var a=Ft(5,null,null,0);a.elementType="DELETED",a.stateNode=s,a.return=r,s=r.deletions,s===null?(r.deletions=[a],r.flags|=16):s.push(a)}function wp(r,s){switch(r.tag){case 5:var a=r.type;return s=s.nodeType!==1||a.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(r.stateNode=s,Nt=r,Rt=jn(s.firstChild),!0):!1;case 6:return s=r.pendingProps===""||s.nodeType!==3?null:s,s!==null?(r.stateNode=s,Nt=r,Rt=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(a=Cr!==null?{id:pn,overflow:mn}:null,r.memoizedState={dehydrated:s,treeContext:a,retryLane:1073741824},a=Ft(18,null,null,0),a.stateNode=s,a.return=r,r.child=a,Nt=r,Rt=null,!0):!1;default:return!1}}function Vc(r){return(r.mode&1)!==0&&(r.flags&128)===0}function Gc(r){if(Pe){var s=Rt;if(s){var a=s;if(!wp(r,s)){if(Vc(r))throw Error(n(418));s=jn(a.nextSibling);var c=Nt;s&&wp(r,s)?Ep(c,a):(r.flags=r.flags&-4097|2,Pe=!1,Nt=r)}}else{if(Vc(r))throw Error(n(418));r.flags=r.flags&-4097|2,Pe=!1,Nt=r}}}function Cp(r){for(r=r.return;r!==null&&r.tag!==5&&r.tag!==3&&r.tag!==13;)r=r.return;Nt=r}function ha(r){if(r!==Nt)return!1;if(!Pe)return Cp(r),Pe=!0,!1;var s;if((s=r.tag!==3)&&!(s=r.tag!==5)&&(s=r.type,s=s!=="head"&&s!=="body"&&!Uc(r.type,r.memoizedProps)),s&&(s=Rt)){if(Vc(r))throw Sp(),Error(n(418));for(;s;)Ep(r,s),s=jn(s.nextSibling)}if(Cp(r),r.tag===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));e:{for(r=r.nextSibling,s=0;r;){if(r.nodeType===8){var a=r.data;if(a==="/$"){if(s===0){Rt=jn(r.nextSibling);break e}s--}else a!=="$"&&a!=="$!"&&a!=="$?"||s++}r=r.nextSibling}Rt=null}}else Rt=Nt?jn(r.stateNode.nextSibling):null;return!0}function Sp(){for(var r=Rt;r;)r=jn(r.nextSibling)}function hi(){Rt=Nt=null,Pe=!1}function Kc(r){Gt===null?Gt=[r]:Gt.push(r)}var xw=$.ReactCurrentBatchConfig;function Es(r,s,a){if(r=a.ref,r!==null&&typeof r!="function"&&typeof r!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var c=a.stateNode}if(!c)throw Error(n(147,r));var d=c,f=""+r;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===f?s.ref:(s=function(g){var E=d.refs;g===null?delete E[f]:E[f]=g},s._stringRef=f,s)}if(typeof r!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,r))}return r}function fa(r,s){throw r=Object.prototype.toString.call(s),Error(n(31,r==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":r))}function Ip(r){var s=r._init;return s(r._payload)}function Tp(r){function s(k,S){if(r){var R=k.deletions;R===null?(k.deletions=[S],k.flags|=16):R.push(S)}}function a(k,S){if(!r)return null;for(;S!==null;)s(k,S),S=S.sibling;return null}function c(k,S){for(k=new Map;S!==null;)S.key!==null?k.set(S.key,S):k.set(S.index,S),S=S.sibling;return k}function d(k,S){return k=Xn(k,S),k.index=0,k.sibling=null,k}function f(k,S,R){return k.index=R,r?(R=k.alternate,R!==null?(R=R.index,R<S?(k.flags|=2,S):R):(k.flags|=2,S)):(k.flags|=1048576,S)}function g(k){return r&&k.alternate===null&&(k.flags|=2),k}function E(k,S,R,F){return S===null||S.tag!==6?(S=Fu(R,k.mode,F),S.return=k,S):(S=d(S,R),S.return=k,S)}function C(k,S,R,F){var Q=R.type;return Q===me?D(k,S,R.props.children,F,R.key):S!==null&&(S.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===mt&&Ip(Q)===S.type)?(F=d(S,R.props),F.ref=Es(k,S,R),F.return=k,F):(F=Ua(R.type,R.key,R.props,null,k.mode,F),F.ref=Es(k,S,R),F.return=k,F)}function x(k,S,R,F){return S===null||S.tag!==4||S.stateNode.containerInfo!==R.containerInfo||S.stateNode.implementation!==R.implementation?(S=Bu(R,k.mode,F),S.return=k,S):(S=d(S,R.children||[]),S.return=k,S)}function D(k,S,R,F,Q){return S===null||S.tag!==7?(S=Ar(R,k.mode,F,Q),S.return=k,S):(S=d(S,R),S.return=k,S)}function L(k,S,R){if(typeof S=="string"&&S!==""||typeof S=="number")return S=Fu(""+S,k.mode,R),S.return=k,S;if(typeof S=="object"&&S!==null){switch(S.$$typeof){case W:return R=Ua(S.type,S.key,S.props,null,k.mode,R),R.ref=Es(k,null,S),R.return=k,R;case re:return S=Bu(S,k.mode,R),S.return=k,S;case mt:var F=S._init;return L(k,F(S._payload),R)}if(Yi(S)||Z(S))return S=Ar(S,k.mode,R,null),S.return=k,S;fa(k,S)}return null}function P(k,S,R,F){var Q=S!==null?S.key:null;if(typeof R=="string"&&R!==""||typeof R=="number")return Q!==null?null:E(k,S,""+R,F);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case W:return R.key===Q?C(k,S,R,F):null;case re:return R.key===Q?x(k,S,R,F):null;case mt:return Q=R._init,P(k,S,Q(R._payload),F)}if(Yi(R)||Z(R))return Q!==null?null:D(k,S,R,F,null);fa(k,R)}return null}function V(k,S,R,F,Q){if(typeof F=="string"&&F!==""||typeof F=="number")return k=k.get(R)||null,E(S,k,""+F,Q);if(typeof F=="object"&&F!==null){switch(F.$$typeof){case W:return k=k.get(F.key===null?R:F.key)||null,C(S,k,F,Q);case re:return k=k.get(F.key===null?R:F.key)||null,x(S,k,F,Q);case mt:var X=F._init;return V(k,S,R,X(F._payload),Q)}if(Yi(F)||Z(F))return k=k.get(R)||null,D(S,k,F,Q,null);fa(S,F)}return null}function q(k,S,R,F){for(var Q=null,X=null,J=S,ne=S=0,Xe=null;J!==null&&ne<R.length;ne++){J.index>ne?(Xe=J,J=null):Xe=J.sibling;var fe=P(k,J,R[ne],F);if(fe===null){J===null&&(J=Xe);break}r&&J&&fe.alternate===null&&s(k,J),S=f(fe,S,ne),X===null?Q=fe:X.sibling=fe,X=fe,J=Xe}if(ne===R.length)return a(k,J),Pe&&Sr(k,ne),Q;if(J===null){for(;ne<R.length;ne++)J=L(k,R[ne],F),J!==null&&(S=f(J,S,ne),X===null?Q=J:X.sibling=J,X=J);return Pe&&Sr(k,ne),Q}for(J=c(k,J);ne<R.length;ne++)Xe=V(J,k,ne,R[ne],F),Xe!==null&&(r&&Xe.alternate!==null&&J.delete(Xe.key===null?ne:Xe.key),S=f(Xe,S,ne),X===null?Q=Xe:X.sibling=Xe,X=Xe);return r&&J.forEach(function(Jn){return s(k,Jn)}),Pe&&Sr(k,ne),Q}function Y(k,S,R,F){var Q=Z(R);if(typeof Q!="function")throw Error(n(150));if(R=Q.call(R),R==null)throw Error(n(151));for(var X=Q=null,J=S,ne=S=0,Xe=null,fe=R.next();J!==null&&!fe.done;ne++,fe=R.next()){J.index>ne?(Xe=J,J=null):Xe=J.sibling;var Jn=P(k,J,fe.value,F);if(Jn===null){J===null&&(J=Xe);break}r&&J&&Jn.alternate===null&&s(k,J),S=f(Jn,S,ne),X===null?Q=Jn:X.sibling=Jn,X=Jn,J=Xe}if(fe.done)return a(k,J),Pe&&Sr(k,ne),Q;if(J===null){for(;!fe.done;ne++,fe=R.next())fe=L(k,fe.value,F),fe!==null&&(S=f(fe,S,ne),X===null?Q=fe:X.sibling=fe,X=fe);return Pe&&Sr(k,ne),Q}for(J=c(k,J);!fe.done;ne++,fe=R.next())fe=V(J,k,ne,fe.value,F),fe!==null&&(r&&fe.alternate!==null&&J.delete(fe.key===null?ne:fe.key),S=f(fe,S,ne),X===null?Q=fe:X.sibling=fe,X=fe);return r&&J.forEach(function(l0){return s(k,l0)}),Pe&&Sr(k,ne),Q}function $e(k,S,R,F){if(typeof R=="object"&&R!==null&&R.type===me&&R.key===null&&(R=R.props.children),typeof R=="object"&&R!==null){switch(R.$$typeof){case W:e:{for(var Q=R.key,X=S;X!==null;){if(X.key===Q){if(Q=R.type,Q===me){if(X.tag===7){a(k,X.sibling),S=d(X,R.props.children),S.return=k,k=S;break e}}else if(X.elementType===Q||typeof Q=="object"&&Q!==null&&Q.$$typeof===mt&&Ip(Q)===X.type){a(k,X.sibling),S=d(X,R.props),S.ref=Es(k,X,R),S.return=k,k=S;break e}a(k,X);break}else s(k,X);X=X.sibling}R.type===me?(S=Ar(R.props.children,k.mode,F,R.key),S.return=k,k=S):(F=Ua(R.type,R.key,R.props,null,k.mode,F),F.ref=Es(k,S,R),F.return=k,k=F)}return g(k);case re:e:{for(X=R.key;S!==null;){if(S.key===X)if(S.tag===4&&S.stateNode.containerInfo===R.containerInfo&&S.stateNode.implementation===R.implementation){a(k,S.sibling),S=d(S,R.children||[]),S.return=k,k=S;break e}else{a(k,S);break}else s(k,S);S=S.sibling}S=Bu(R,k.mode,F),S.return=k,k=S}return g(k);case mt:return X=R._init,$e(k,S,X(R._payload),F)}if(Yi(R))return q(k,S,R,F);if(Z(R))return Y(k,S,R,F);fa(k,R)}return typeof R=="string"&&R!==""||typeof R=="number"?(R=""+R,S!==null&&S.tag===6?(a(k,S.sibling),S=d(S,R),S.return=k,k=S):(a(k,S),S=Fu(R,k.mode,F),S.return=k,k=S),g(k)):a(k,S)}return $e}var fi=Tp(!0),kp=Tp(!1),pa=$n(null),ma=null,pi=null,qc=null;function Yc(){qc=pi=ma=null}function Qc(r){var s=pa.current;Re(pa),r._currentValue=s}function Xc(r,s,a){for(;r!==null;){var c=r.alternate;if((r.childLanes&s)!==s?(r.childLanes|=s,c!==null&&(c.childLanes|=s)):c!==null&&(c.childLanes&s)!==s&&(c.childLanes|=s),r===a)break;r=r.return}}function mi(r,s){ma=r,qc=pi=null,r=r.dependencies,r!==null&&r.firstContext!==null&&((r.lanes&s)!==0&&(yt=!0),r.firstContext=null)}function Lt(r){var s=r._currentValue;if(qc!==r)if(r={context:r,memoizedValue:s,next:null},pi===null){if(ma===null)throw Error(n(308));pi=r,ma.dependencies={lanes:0,firstContext:r}}else pi=pi.next=r;return s}var Ir=null;function Jc(r){Ir===null?Ir=[r]:Ir.push(r)}function Np(r,s,a,c){var d=s.interleaved;return d===null?(a.next=a,Jc(s)):(a.next=d.next,d.next=a),s.interleaved=a,gn(r,c)}function gn(r,s){r.lanes|=s;var a=r.alternate;for(a!==null&&(a.lanes|=s),a=r,r=r.return;r!==null;)r.childLanes|=s,a=r.alternate,a!==null&&(a.childLanes|=s),a=r,r=r.return;return a.tag===3?a.stateNode:null}var Wn=!1;function Zc(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Rp(r,s){r=r.updateQueue,s.updateQueue===r&&(s.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,effects:r.effects})}function _n(r,s){return{eventTime:r,lane:s,tag:0,payload:null,callback:null,next:null}}function Vn(r,s,a){var c=r.updateQueue;if(c===null)return null;if(c=c.shared,(ue&2)!==0){var d=c.pending;return d===null?s.next=s:(s.next=d.next,d.next=s),c.pending=s,gn(r,a)}return d=c.interleaved,d===null?(s.next=s,Jc(c)):(s.next=d.next,d.next=s),c.interleaved=s,gn(r,a)}function ga(r,s,a){if(s=s.updateQueue,s!==null&&(s=s.shared,(a&4194240)!==0)){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,fc(r,a)}}function xp(r,s){var a=r.updateQueue,c=r.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var g={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};f===null?d=f=g:f=f.next=g,a=a.next}while(a!==null);f===null?d=f=s:f=f.next=s}else d=f=s;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:f,shared:c.shared,effects:c.effects},r.updateQueue=a;return}r=a.lastBaseUpdate,r===null?a.firstBaseUpdate=s:r.next=s,a.lastBaseUpdate=s}function _a(r,s,a,c){var d=r.updateQueue;Wn=!1;var f=d.firstBaseUpdate,g=d.lastBaseUpdate,E=d.shared.pending;if(E!==null){d.shared.pending=null;var C=E,x=C.next;C.next=null,g===null?f=x:g.next=x,g=C;var D=r.alternate;D!==null&&(D=D.updateQueue,E=D.lastBaseUpdate,E!==g&&(E===null?D.firstBaseUpdate=x:E.next=x,D.lastBaseUpdate=C))}if(f!==null){var L=d.baseState;g=0,D=x=C=null,E=f;do{var P=E.lane,V=E.eventTime;if((c&P)===P){D!==null&&(D=D.next={eventTime:V,lane:0,tag:E.tag,payload:E.payload,callback:E.callback,next:null});e:{var q=r,Y=E;switch(P=s,V=a,Y.tag){case 1:if(q=Y.payload,typeof q=="function"){L=q.call(V,L,P);break e}L=q;break e;case 3:q.flags=q.flags&-65537|128;case 0:if(q=Y.payload,P=typeof q=="function"?q.call(V,L,P):q,P==null)break e;L=K({},L,P);break e;case 2:Wn=!0}}E.callback!==null&&E.lane!==0&&(r.flags|=64,P=d.effects,P===null?d.effects=[E]:P.push(E))}else V={eventTime:V,lane:P,tag:E.tag,payload:E.payload,callback:E.callback,next:null},D===null?(x=D=V,C=L):D=D.next=V,g|=P;if(E=E.next,E===null){if(E=d.shared.pending,E===null)break;P=E,E=P.next,P.next=null,d.lastBaseUpdate=P,d.shared.pending=null}}while(!0);if(D===null&&(C=L),d.baseState=C,d.firstBaseUpdate=x,d.lastBaseUpdate=D,s=d.shared.interleaved,s!==null){d=s;do g|=d.lane,d=d.next;while(d!==s)}else f===null&&(d.shared.lanes=0);Nr|=g,r.lanes=g,r.memoizedState=L}}function bp(r,s,a){if(r=s.effects,s.effects=null,r!==null)for(s=0;s<r.length;s++){var c=r[s],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(n(191,d));d.call(c)}}}var ws={},on=$n(ws),Cs=$n(ws),Ss=$n(ws);function Tr(r){if(r===ws)throw Error(n(174));return r}function eu(r,s){switch(Se(Ss,s),Se(Cs,r),Se(on,ws),r=s.nodeType,r){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:tc(null,"");break;default:r=r===8?s.parentNode:s,s=r.namespaceURI||null,r=r.tagName,s=tc(s,r)}Re(on),Se(on,s)}function gi(){Re(on),Re(Cs),Re(Ss)}function Ap(r){Tr(Ss.current);var s=Tr(on.current),a=tc(s,r.type);s!==a&&(Se(Cs,r),Se(on,a))}function tu(r){Cs.current===r&&(Re(on),Re(Cs))}var Oe=$n(0);function ya(r){for(var s=r;s!==null;){if(s.tag===13){var a=s.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var nu=[];function ru(){for(var r=0;r<nu.length;r++)nu[r]._workInProgressVersionPrimary=null;nu.length=0}var va=$.ReactCurrentDispatcher,iu=$.ReactCurrentBatchConfig,kr=0,De=null,We=null,Ye=null,Ea=!1,Is=!1,Ts=0,bw=0;function st(){throw Error(n(321))}function su(r,s){if(s===null)return!1;for(var a=0;a<s.length&&a<r.length;a++)if(!Vt(r[a],s[a]))return!1;return!0}function ou(r,s,a,c,d,f){if(kr=f,De=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,va.current=r===null||r.memoizedState===null?Dw:Lw,r=a(c,d),Is){f=0;do{if(Is=!1,Ts=0,25<=f)throw Error(n(301));f+=1,Ye=We=null,s.updateQueue=null,va.current=Mw,r=a(c,d)}while(Is)}if(va.current=Sa,s=We!==null&&We.next!==null,kr=0,Ye=We=De=null,Ea=!1,s)throw Error(n(300));return r}function au(){var r=Ts!==0;return Ts=0,r}function an(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ye===null?De.memoizedState=Ye=r:Ye=Ye.next=r,Ye}function Mt(){if(We===null){var r=De.alternate;r=r!==null?r.memoizedState:null}else r=We.next;var s=Ye===null?De.memoizedState:Ye.next;if(s!==null)Ye=s,We=r;else{if(r===null)throw Error(n(310));We=r,r={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ye===null?De.memoizedState=Ye=r:Ye=Ye.next=r}return Ye}function ks(r,s){return typeof s=="function"?s(r):s}function lu(r){var s=Mt(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=We,d=c.baseQueue,f=a.pending;if(f!==null){if(d!==null){var g=d.next;d.next=f.next,f.next=g}c.baseQueue=d=f,a.pending=null}if(d!==null){f=d.next,c=c.baseState;var E=g=null,C=null,x=f;do{var D=x.lane;if((kr&D)===D)C!==null&&(C=C.next={lane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),c=x.hasEagerState?x.eagerState:r(c,x.action);else{var L={lane:D,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null};C===null?(E=C=L,g=c):C=C.next=L,De.lanes|=D,Nr|=D}x=x.next}while(x!==null&&x!==f);C===null?g=c:C.next=E,Vt(c,s.memoizedState)||(yt=!0),s.memoizedState=c,s.baseState=g,s.baseQueue=C,a.lastRenderedState=c}if(r=a.interleaved,r!==null){d=r;do f=d.lane,De.lanes|=f,Nr|=f,d=d.next;while(d!==r)}else d===null&&(a.lanes=0);return[s.memoizedState,a.dispatch]}function cu(r){var s=Mt(),a=s.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=r;var c=a.dispatch,d=a.pending,f=s.memoizedState;if(d!==null){a.pending=null;var g=d=d.next;do f=r(f,g.action),g=g.next;while(g!==d);Vt(f,s.memoizedState)||(yt=!0),s.memoizedState=f,s.baseQueue===null&&(s.baseState=f),a.lastRenderedState=f}return[f,c]}function Pp(){}function Op(r,s){var a=De,c=Mt(),d=s(),f=!Vt(c.memoizedState,d);if(f&&(c.memoizedState=d,yt=!0),c=c.queue,uu(Mp.bind(null,a,c,r),[r]),c.getSnapshot!==s||f||Ye!==null&&Ye.memoizedState.tag&1){if(a.flags|=2048,Ns(9,Lp.bind(null,a,c,d,s),void 0,null),Qe===null)throw Error(n(349));(kr&30)!==0||Dp(a,s,d)}return d}function Dp(r,s,a){r.flags|=16384,r={getSnapshot:s,value:a},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.stores=[r]):(a=s.stores,a===null?s.stores=[r]:a.push(r))}function Lp(r,s,a,c){s.value=a,s.getSnapshot=c,Up(s)&&Fp(r)}function Mp(r,s,a){return a(function(){Up(s)&&Fp(r)})}function Up(r){var s=r.getSnapshot;r=r.value;try{var a=s();return!Vt(r,a)}catch{return!0}}function Fp(r){var s=gn(r,1);s!==null&&Qt(s,r,1,-1)}function Bp(r){var s=an();return typeof r=="function"&&(r=r()),s.memoizedState=s.baseState=r,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ks,lastRenderedState:r},s.queue=r,r=r.dispatch=Ow.bind(null,De,r),[s.memoizedState,r]}function Ns(r,s,a,c){return r={tag:r,create:s,destroy:a,deps:c,next:null},s=De.updateQueue,s===null?(s={lastEffect:null,stores:null},De.updateQueue=s,s.lastEffect=r.next=r):(a=s.lastEffect,a===null?s.lastEffect=r.next=r:(c=a.next,a.next=r,r.next=c,s.lastEffect=r)),r}function jp(){return Mt().memoizedState}function wa(r,s,a,c){var d=an();De.flags|=r,d.memoizedState=Ns(1|s,a,void 0,c===void 0?null:c)}function Ca(r,s,a,c){var d=Mt();c=c===void 0?null:c;var f=void 0;if(We!==null){var g=We.memoizedState;if(f=g.destroy,c!==null&&su(c,g.deps)){d.memoizedState=Ns(s,a,f,c);return}}De.flags|=r,d.memoizedState=Ns(1|s,a,f,c)}function $p(r,s){return wa(8390656,8,r,s)}function uu(r,s){return Ca(2048,8,r,s)}function Hp(r,s){return Ca(4,2,r,s)}function zp(r,s){return Ca(4,4,r,s)}function Wp(r,s){if(typeof s=="function")return r=r(),s(r),function(){s(null)};if(s!=null)return r=r(),s.current=r,function(){s.current=null}}function Vp(r,s,a){return a=a!=null?a.concat([r]):null,Ca(4,4,Wp.bind(null,s,r),a)}function du(){}function Gp(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&su(s,c[1])?c[0]:(a.memoizedState=[r,s],r)}function Kp(r,s){var a=Mt();s=s===void 0?null:s;var c=a.memoizedState;return c!==null&&s!==null&&su(s,c[1])?c[0]:(r=r(),a.memoizedState=[r,s],r)}function qp(r,s,a){return(kr&21)===0?(r.baseState&&(r.baseState=!1,yt=!0),r.memoizedState=a):(Vt(a,s)||(a=If(),De.lanes|=a,Nr|=a,r.baseState=!0),s)}function Aw(r,s){var a=_e;_e=a!==0&&4>a?a:4,r(!0);var c=iu.transition;iu.transition={};try{r(!1),s()}finally{_e=a,iu.transition=c}}function Yp(){return Mt().memoizedState}function Pw(r,s,a){var c=Yn(r);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},Qp(r))Xp(s,a);else if(a=Np(r,s,a,c),a!==null){var d=ut();Qt(a,r,c,d),Jp(a,s,c)}}function Ow(r,s,a){var c=Yn(r),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(Qp(r))Xp(s,d);else{var f=r.alternate;if(r.lanes===0&&(f===null||f.lanes===0)&&(f=s.lastRenderedReducer,f!==null))try{var g=s.lastRenderedState,E=f(g,a);if(d.hasEagerState=!0,d.eagerState=E,Vt(E,g)){var C=s.interleaved;C===null?(d.next=d,Jc(s)):(d.next=C.next,C.next=d),s.interleaved=d;return}}catch{}finally{}a=Np(r,s,d,c),a!==null&&(d=ut(),Qt(a,r,c,d),Jp(a,s,c))}}function Qp(r){var s=r.alternate;return r===De||s!==null&&s===De}function Xp(r,s){Is=Ea=!0;var a=r.pending;a===null?s.next=s:(s.next=a.next,a.next=s),r.pending=s}function Jp(r,s,a){if((a&4194240)!==0){var c=s.lanes;c&=r.pendingLanes,a|=c,s.lanes=a,fc(r,a)}}var Sa={readContext:Lt,useCallback:st,useContext:st,useEffect:st,useImperativeHandle:st,useInsertionEffect:st,useLayoutEffect:st,useMemo:st,useReducer:st,useRef:st,useState:st,useDebugValue:st,useDeferredValue:st,useTransition:st,useMutableSource:st,useSyncExternalStore:st,useId:st,unstable_isNewReconciler:!1},Dw={readContext:Lt,useCallback:function(r,s){return an().memoizedState=[r,s===void 0?null:s],r},useContext:Lt,useEffect:$p,useImperativeHandle:function(r,s,a){return a=a!=null?a.concat([r]):null,wa(4194308,4,Wp.bind(null,s,r),a)},useLayoutEffect:function(r,s){return wa(4194308,4,r,s)},useInsertionEffect:function(r,s){return wa(4,2,r,s)},useMemo:function(r,s){var a=an();return s=s===void 0?null:s,r=r(),a.memoizedState=[r,s],r},useReducer:function(r,s,a){var c=an();return s=a!==void 0?a(s):s,c.memoizedState=c.baseState=s,r={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:s},c.queue=r,r=r.dispatch=Pw.bind(null,De,r),[c.memoizedState,r]},useRef:function(r){var s=an();return r={current:r},s.memoizedState=r},useState:Bp,useDebugValue:du,useDeferredValue:function(r){return an().memoizedState=r},useTransition:function(){var r=Bp(!1),s=r[0];return r=Aw.bind(null,r[1]),an().memoizedState=r,[s,r]},useMutableSource:function(){},useSyncExternalStore:function(r,s,a){var c=De,d=an();if(Pe){if(a===void 0)throw Error(n(407));a=a()}else{if(a=s(),Qe===null)throw Error(n(349));(kr&30)!==0||Dp(c,s,a)}d.memoizedState=a;var f={value:a,getSnapshot:s};return d.queue=f,$p(Mp.bind(null,c,f,r),[r]),c.flags|=2048,Ns(9,Lp.bind(null,c,f,a,s),void 0,null),a},useId:function(){var r=an(),s=Qe.identifierPrefix;if(Pe){var a=mn,c=pn;a=(c&~(1<<32-Wt(c)-1)).toString(32)+a,s=":"+s+"R"+a,a=Ts++,0<a&&(s+="H"+a.toString(32)),s+=":"}else a=bw++,s=":"+s+"r"+a.toString(32)+":";return r.memoizedState=s},unstable_isNewReconciler:!1},Lw={readContext:Lt,useCallback:Gp,useContext:Lt,useEffect:uu,useImperativeHandle:Vp,useInsertionEffect:Hp,useLayoutEffect:zp,useMemo:Kp,useReducer:lu,useRef:jp,useState:function(){return lu(ks)},useDebugValue:du,useDeferredValue:function(r){var s=Mt();return qp(s,We.memoizedState,r)},useTransition:function(){var r=lu(ks)[0],s=Mt().memoizedState;return[r,s]},useMutableSource:Pp,useSyncExternalStore:Op,useId:Yp,unstable_isNewReconciler:!1},Mw={readContext:Lt,useCallback:Gp,useContext:Lt,useEffect:uu,useImperativeHandle:Vp,useInsertionEffect:Hp,useLayoutEffect:zp,useMemo:Kp,useReducer:cu,useRef:jp,useState:function(){return cu(ks)},useDebugValue:du,useDeferredValue:function(r){var s=Mt();return We===null?s.memoizedState=r:qp(s,We.memoizedState,r)},useTransition:function(){var r=cu(ks)[0],s=Mt().memoizedState;return[r,s]},useMutableSource:Pp,useSyncExternalStore:Op,useId:Yp,unstable_isNewReconciler:!1};function Kt(r,s){if(r&&r.defaultProps){s=K({},s),r=r.defaultProps;for(var a in r)s[a]===void 0&&(s[a]=r[a]);return s}return s}function hu(r,s,a,c){s=r.memoizedState,a=a(c,s),a=a==null?s:K({},s,a),r.memoizedState=a,r.lanes===0&&(r.updateQueue.baseState=a)}var Ia={isMounted:function(r){return(r=r._reactInternals)?vr(r)===r:!1},enqueueSetState:function(r,s,a){r=r._reactInternals;var c=ut(),d=Yn(r),f=_n(c,d);f.payload=s,a!=null&&(f.callback=a),s=Vn(r,f,d),s!==null&&(Qt(s,r,d,c),ga(s,r,d))},enqueueReplaceState:function(r,s,a){r=r._reactInternals;var c=ut(),d=Yn(r),f=_n(c,d);f.tag=1,f.payload=s,a!=null&&(f.callback=a),s=Vn(r,f,d),s!==null&&(Qt(s,r,d,c),ga(s,r,d))},enqueueForceUpdate:function(r,s){r=r._reactInternals;var a=ut(),c=Yn(r),d=_n(a,c);d.tag=2,s!=null&&(d.callback=s),s=Vn(r,d,c),s!==null&&(Qt(s,r,c,a),ga(s,r,c))}};function Zp(r,s,a,c,d,f,g){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(c,f,g):s.prototype&&s.prototype.isPureReactComponent?!fs(a,c)||!fs(d,f):!0}function em(r,s,a){var c=!1,d=Hn,f=s.contextType;return typeof f=="object"&&f!==null?f=Lt(f):(d=_t(s)?wr:it.current,c=s.contextTypes,f=(c=c!=null)?ci(r,d):Hn),s=new s(a,f),r.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Ia,r.stateNode=s,s._reactInternals=r,c&&(r=r.stateNode,r.__reactInternalMemoizedUnmaskedChildContext=d,r.__reactInternalMemoizedMaskedChildContext=f),s}function tm(r,s,a,c){r=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(a,c),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(a,c),s.state!==r&&Ia.enqueueReplaceState(s,s.state,null)}function fu(r,s,a,c){var d=r.stateNode;d.props=a,d.state=r.memoizedState,d.refs={},Zc(r);var f=s.contextType;typeof f=="object"&&f!==null?d.context=Lt(f):(f=_t(s)?wr:it.current,d.context=ci(r,f)),d.state=r.memoizedState,f=s.getDerivedStateFromProps,typeof f=="function"&&(hu(r,s,f,a),d.state=r.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(s=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),s!==d.state&&Ia.enqueueReplaceState(d,d.state,null),_a(r,a,d,c),d.state=r.memoizedState),typeof d.componentDidMount=="function"&&(r.flags|=4194308)}function _i(r,s){try{var a="",c=s;do a+=de(c),c=c.return;while(c);var d=a}catch(f){d=`
Error generating stack: `+f.message+`
`+f.stack}return{value:r,source:s,stack:d,digest:null}}function pu(r,s,a){return{value:r,source:null,stack:a??null,digest:s??null}}function mu(r,s){try{console.error(s.value)}catch(a){setTimeout(function(){throw a})}}var Uw=typeof WeakMap=="function"?WeakMap:Map;function nm(r,s,a){a=_n(-1,a),a.tag=3,a.payload={element:null};var c=s.value;return a.callback=function(){Aa||(Aa=!0,bu=c),mu(r,s)},a}function rm(r,s,a){a=_n(-1,a),a.tag=3;var c=r.type.getDerivedStateFromError;if(typeof c=="function"){var d=s.value;a.payload=function(){return c(d)},a.callback=function(){mu(r,s)}}var f=r.stateNode;return f!==null&&typeof f.componentDidCatch=="function"&&(a.callback=function(){mu(r,s),typeof c!="function"&&(Kn===null?Kn=new Set([this]):Kn.add(this));var g=s.stack;this.componentDidCatch(s.value,{componentStack:g!==null?g:""})}),a}function im(r,s,a){var c=r.pingCache;if(c===null){c=r.pingCache=new Uw;var d=new Set;c.set(s,d)}else d=c.get(s),d===void 0&&(d=new Set,c.set(s,d));d.has(a)||(d.add(a),r=Xw.bind(null,r,s,a),s.then(r,r))}function sm(r){do{var s;if((s=r.tag===13)&&(s=r.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return r;r=r.return}while(r!==null);return null}function om(r,s,a,c,d){return(r.mode&1)===0?(r===s?r.flags|=65536:(r.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(s=_n(-1,1),s.tag=2,Vn(a,s,1))),a.lanes|=1),r):(r.flags|=65536,r.lanes=d,r)}var Fw=$.ReactCurrentOwner,yt=!1;function ct(r,s,a,c){s.child=r===null?kp(s,null,a,c):fi(s,r.child,a,c)}function am(r,s,a,c,d){a=a.render;var f=s.ref;return mi(s,d),c=ou(r,s,a,c,f,d),a=au(),r!==null&&!yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,yn(r,s,d)):(Pe&&a&&zc(s),s.flags|=1,ct(r,s,c,d),s.child)}function lm(r,s,a,c,d){if(r===null){var f=a.type;return typeof f=="function"&&!Uu(f)&&f.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(s.tag=15,s.type=f,cm(r,s,f,c,d)):(r=Ua(a.type,null,c,s,s.mode,d),r.ref=s.ref,r.return=s,s.child=r)}if(f=r.child,(r.lanes&d)===0){var g=f.memoizedProps;if(a=a.compare,a=a!==null?a:fs,a(g,c)&&r.ref===s.ref)return yn(r,s,d)}return s.flags|=1,r=Xn(f,c),r.ref=s.ref,r.return=s,s.child=r}function cm(r,s,a,c,d){if(r!==null){var f=r.memoizedProps;if(fs(f,c)&&r.ref===s.ref)if(yt=!1,s.pendingProps=c=f,(r.lanes&d)!==0)(r.flags&131072)!==0&&(yt=!0);else return s.lanes=r.lanes,yn(r,s,d)}return gu(r,s,a,c,d)}function um(r,s,a){var c=s.pendingProps,d=c.children,f=r!==null?r.memoizedState:null;if(c.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(vi,xt),xt|=a;else{if((a&1073741824)===0)return r=f!==null?f.baseLanes|a:a,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:r,cachePool:null,transitions:null},s.updateQueue=null,Se(vi,xt),xt|=r,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=f!==null?f.baseLanes:a,Se(vi,xt),xt|=c}else f!==null?(c=f.baseLanes|a,s.memoizedState=null):c=a,Se(vi,xt),xt|=c;return ct(r,s,d,a),s.child}function dm(r,s){var a=s.ref;(r===null&&a!==null||r!==null&&r.ref!==a)&&(s.flags|=512,s.flags|=2097152)}function gu(r,s,a,c,d){var f=_t(a)?wr:it.current;return f=ci(s,f),mi(s,d),a=ou(r,s,a,c,f,d),c=au(),r!==null&&!yt?(s.updateQueue=r.updateQueue,s.flags&=-2053,r.lanes&=~d,yn(r,s,d)):(Pe&&c&&zc(s),s.flags|=1,ct(r,s,a,d),s.child)}function hm(r,s,a,c,d){if(_t(a)){var f=!0;la(s)}else f=!1;if(mi(s,d),s.stateNode===null)ka(r,s),em(s,a,c),fu(s,a,c,d),c=!0;else if(r===null){var g=s.stateNode,E=s.memoizedProps;g.props=E;var C=g.context,x=a.contextType;typeof x=="object"&&x!==null?x=Lt(x):(x=_t(a)?wr:it.current,x=ci(s,x));var D=a.getDerivedStateFromProps,L=typeof D=="function"||typeof g.getSnapshotBeforeUpdate=="function";L||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==c||C!==x)&&tm(s,g,c,x),Wn=!1;var P=s.memoizedState;g.state=P,_a(s,c,g,d),C=s.memoizedState,E!==c||P!==C||gt.current||Wn?(typeof D=="function"&&(hu(s,a,D,c),C=s.memoizedState),(E=Wn||Zp(s,a,E,c,P,C,x))?(L||typeof g.UNSAFE_componentWillMount!="function"&&typeof g.componentWillMount!="function"||(typeof g.componentWillMount=="function"&&g.componentWillMount(),typeof g.UNSAFE_componentWillMount=="function"&&g.UNSAFE_componentWillMount()),typeof g.componentDidMount=="function"&&(s.flags|=4194308)):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=c,s.memoizedState=C),g.props=c,g.state=C,g.context=x,c=E):(typeof g.componentDidMount=="function"&&(s.flags|=4194308),c=!1)}else{g=s.stateNode,Rp(r,s),E=s.memoizedProps,x=s.type===s.elementType?E:Kt(s.type,E),g.props=x,L=s.pendingProps,P=g.context,C=a.contextType,typeof C=="object"&&C!==null?C=Lt(C):(C=_t(a)?wr:it.current,C=ci(s,C));var V=a.getDerivedStateFromProps;(D=typeof V=="function"||typeof g.getSnapshotBeforeUpdate=="function")||typeof g.UNSAFE_componentWillReceiveProps!="function"&&typeof g.componentWillReceiveProps!="function"||(E!==L||P!==C)&&tm(s,g,c,C),Wn=!1,P=s.memoizedState,g.state=P,_a(s,c,g,d);var q=s.memoizedState;E!==L||P!==q||gt.current||Wn?(typeof V=="function"&&(hu(s,a,V,c),q=s.memoizedState),(x=Wn||Zp(s,a,x,c,P,q,C)||!1)?(D||typeof g.UNSAFE_componentWillUpdate!="function"&&typeof g.componentWillUpdate!="function"||(typeof g.componentWillUpdate=="function"&&g.componentWillUpdate(c,q,C),typeof g.UNSAFE_componentWillUpdate=="function"&&g.UNSAFE_componentWillUpdate(c,q,C)),typeof g.componentDidUpdate=="function"&&(s.flags|=4),typeof g.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&P===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&P===r.memoizedState||(s.flags|=1024),s.memoizedProps=c,s.memoizedState=q),g.props=c,g.state=q,g.context=C,c=x):(typeof g.componentDidUpdate!="function"||E===r.memoizedProps&&P===r.memoizedState||(s.flags|=4),typeof g.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&P===r.memoizedState||(s.flags|=1024),c=!1)}return _u(r,s,a,c,f,d)}function _u(r,s,a,c,d,f){dm(r,s);var g=(s.flags&128)!==0;if(!c&&!g)return d&&_p(s,a,!1),yn(r,s,f);c=s.stateNode,Fw.current=s;var E=g&&typeof a.getDerivedStateFromError!="function"?null:c.render();return s.flags|=1,r!==null&&g?(s.child=fi(s,r.child,null,f),s.child=fi(s,null,E,f)):ct(r,s,E,f),s.memoizedState=c.state,d&&_p(s,a,!0),s.child}function fm(r){var s=r.stateNode;s.pendingContext?mp(r,s.pendingContext,s.pendingContext!==s.context):s.context&&mp(r,s.context,!1),eu(r,s.containerInfo)}function pm(r,s,a,c,d){return hi(),Kc(d),s.flags|=256,ct(r,s,a,c),s.child}var yu={dehydrated:null,treeContext:null,retryLane:0};function vu(r){return{baseLanes:r,cachePool:null,transitions:null}}function mm(r,s,a){var c=s.pendingProps,d=Oe.current,f=!1,g=(s.flags&128)!==0,E;if((E=g)||(E=r!==null&&r.memoizedState===null?!1:(d&2)!==0),E?(f=!0,s.flags&=-129):(r===null||r.memoizedState!==null)&&(d|=1),Se(Oe,d&1),r===null)return Gc(s),r=s.memoizedState,r!==null&&(r=r.dehydrated,r!==null)?((s.mode&1)===0?s.lanes=1:r.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(g=c.children,r=c.fallback,f?(c=s.mode,f=s.child,g={mode:"hidden",children:g},(c&1)===0&&f!==null?(f.childLanes=0,f.pendingProps=g):f=Fa(g,c,0,null),r=Ar(r,c,a,null),f.return=s,r.return=s,f.sibling=r,s.child=f,s.child.memoizedState=vu(a),s.memoizedState=yu,r):Eu(s,g));if(d=r.memoizedState,d!==null&&(E=d.dehydrated,E!==null))return Bw(r,s,g,c,E,d,a);if(f){f=c.fallback,g=s.mode,d=r.child,E=d.sibling;var C={mode:"hidden",children:c.children};return(g&1)===0&&s.child!==d?(c=s.child,c.childLanes=0,c.pendingProps=C,s.deletions=null):(c=Xn(d,C),c.subtreeFlags=d.subtreeFlags&14680064),E!==null?f=Xn(E,f):(f=Ar(f,g,a,null),f.flags|=2),f.return=s,c.return=s,c.sibling=f,s.child=c,c=f,f=s.child,g=r.child.memoizedState,g=g===null?vu(a):{baseLanes:g.baseLanes|a,cachePool:null,transitions:g.transitions},f.memoizedState=g,f.childLanes=r.childLanes&~a,s.memoizedState=yu,c}return f=r.child,r=f.sibling,c=Xn(f,{mode:"visible",children:c.children}),(s.mode&1)===0&&(c.lanes=a),c.return=s,c.sibling=null,r!==null&&(a=s.deletions,a===null?(s.deletions=[r],s.flags|=16):a.push(r)),s.child=c,s.memoizedState=null,c}function Eu(r,s){return s=Fa({mode:"visible",children:s},r.mode,0,null),s.return=r,r.child=s}function Ta(r,s,a,c){return c!==null&&Kc(c),fi(s,r.child,null,a),r=Eu(s,s.pendingProps.children),r.flags|=2,s.memoizedState=null,r}function Bw(r,s,a,c,d,f,g){if(a)return s.flags&256?(s.flags&=-257,c=pu(Error(n(422))),Ta(r,s,g,c)):s.memoizedState!==null?(s.child=r.child,s.flags|=128,null):(f=c.fallback,d=s.mode,c=Fa({mode:"visible",children:c.children},d,0,null),f=Ar(f,d,g,null),f.flags|=2,c.return=s,f.return=s,c.sibling=f,s.child=c,(s.mode&1)!==0&&fi(s,r.child,null,g),s.child.memoizedState=vu(g),s.memoizedState=yu,f);if((s.mode&1)===0)return Ta(r,s,g,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var E=c.dgst;return c=E,f=Error(n(419)),c=pu(f,c,void 0),Ta(r,s,g,c)}if(E=(g&r.childLanes)!==0,yt||E){if(c=Qe,c!==null){switch(g&-g){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|g))!==0?0:d,d!==0&&d!==f.retryLane&&(f.retryLane=d,gn(r,d),Qt(c,r,d,-1))}return Mu(),c=pu(Error(n(421))),Ta(r,s,g,c)}return d.data==="$?"?(s.flags|=128,s.child=r.child,s=Jw.bind(null,r),d._reactRetry=s,null):(r=f.treeContext,Rt=jn(d.nextSibling),Nt=s,Pe=!0,Gt=null,r!==null&&(Ot[Dt++]=pn,Ot[Dt++]=mn,Ot[Dt++]=Cr,pn=r.id,mn=r.overflow,Cr=s),s=Eu(s,c.children),s.flags|=4096,s)}function gm(r,s,a){r.lanes|=s;var c=r.alternate;c!==null&&(c.lanes|=s),Xc(r.return,s,a)}function wu(r,s,a,c,d){var f=r.memoizedState;f===null?r.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(f.isBackwards=s,f.rendering=null,f.renderingStartTime=0,f.last=c,f.tail=a,f.tailMode=d)}function _m(r,s,a){var c=s.pendingProps,d=c.revealOrder,f=c.tail;if(ct(r,s,c.children,a),c=Oe.current,(c&2)!==0)c=c&1|2,s.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=s.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&gm(r,a,s);else if(r.tag===19)gm(r,a,s);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===s)break e;for(;r.sibling===null;){if(r.return===null||r.return===s)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}c&=1}if(Se(Oe,c),(s.mode&1)===0)s.memoizedState=null;else switch(d){case"forwards":for(a=s.child,d=null;a!==null;)r=a.alternate,r!==null&&ya(r)===null&&(d=a),a=a.sibling;a=d,a===null?(d=s.child,s.child=null):(d=a.sibling,a.sibling=null),wu(s,!1,d,a,f);break;case"backwards":for(a=null,d=s.child,s.child=null;d!==null;){if(r=d.alternate,r!==null&&ya(r)===null){s.child=d;break}r=d.sibling,d.sibling=a,a=d,d=r}wu(s,!0,a,null,f);break;case"together":wu(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function ka(r,s){(s.mode&1)===0&&r!==null&&(r.alternate=null,s.alternate=null,s.flags|=2)}function yn(r,s,a){if(r!==null&&(s.dependencies=r.dependencies),Nr|=s.lanes,(a&s.childLanes)===0)return null;if(r!==null&&s.child!==r.child)throw Error(n(153));if(s.child!==null){for(r=s.child,a=Xn(r,r.pendingProps),s.child=a,a.return=s;r.sibling!==null;)r=r.sibling,a=a.sibling=Xn(r,r.pendingProps),a.return=s;a.sibling=null}return s.child}function jw(r,s,a){switch(s.tag){case 3:fm(s),hi();break;case 5:Ap(s);break;case 1:_t(s.type)&&la(s);break;case 4:eu(s,s.stateNode.containerInfo);break;case 10:var c=s.type._context,d=s.memoizedProps.value;Se(pa,c._currentValue),c._currentValue=d;break;case 13:if(c=s.memoizedState,c!==null)return c.dehydrated!==null?(Se(Oe,Oe.current&1),s.flags|=128,null):(a&s.child.childLanes)!==0?mm(r,s,a):(Se(Oe,Oe.current&1),r=yn(r,s,a),r!==null?r.sibling:null);Se(Oe,Oe.current&1);break;case 19:if(c=(a&s.childLanes)!==0,(r.flags&128)!==0){if(c)return _m(r,s,a);s.flags|=128}if(d=s.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Se(Oe,Oe.current),c)break;return null;case 22:case 23:return s.lanes=0,um(r,s,a)}return yn(r,s,a)}var ym,Cu,vm,Em;ym=function(r,s){for(var a=s.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===s)break;for(;a.sibling===null;){if(a.return===null||a.return===s)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Cu=function(){},vm=function(r,s,a,c){var d=r.memoizedProps;if(d!==c){r=s.stateNode,Tr(on.current);var f=null;switch(a){case"input":d=Xl(r,d),c=Xl(r,c),f=[];break;case"select":d=K({},d,{value:void 0}),c=K({},c,{value:void 0}),f=[];break;case"textarea":d=ec(r,d),c=ec(r,c),f=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(r.onclick=sa)}nc(a,c);var g;a=null;for(x in d)if(!c.hasOwnProperty(x)&&d.hasOwnProperty(x)&&d[x]!=null)if(x==="style"){var E=d[x];for(g in E)E.hasOwnProperty(g)&&(a||(a={}),a[g]="")}else x!=="dangerouslySetInnerHTML"&&x!=="children"&&x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&x!=="autoFocus"&&(o.hasOwnProperty(x)?f||(f=[]):(f=f||[]).push(x,null));for(x in c){var C=c[x];if(E=d?.[x],c.hasOwnProperty(x)&&C!==E&&(C!=null||E!=null))if(x==="style")if(E){for(g in E)!E.hasOwnProperty(g)||C&&C.hasOwnProperty(g)||(a||(a={}),a[g]="");for(g in C)C.hasOwnProperty(g)&&E[g]!==C[g]&&(a||(a={}),a[g]=C[g])}else a||(f||(f=[]),f.push(x,a)),a=C;else x==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,E=E?E.__html:void 0,C!=null&&E!==C&&(f=f||[]).push(x,C)):x==="children"?typeof C!="string"&&typeof C!="number"||(f=f||[]).push(x,""+C):x!=="suppressContentEditableWarning"&&x!=="suppressHydrationWarning"&&(o.hasOwnProperty(x)?(C!=null&&x==="onScroll"&&Ne("scroll",r),f||E===C||(f=[])):(f=f||[]).push(x,C))}a&&(f=f||[]).push("style",a);var x=f;(s.updateQueue=x)&&(s.flags|=4)}},Em=function(r,s,a,c){a!==c&&(s.flags|=4)};function Rs(r,s){if(!Pe)switch(r.tailMode){case"hidden":s=r.tail;for(var a=null;s!==null;)s.alternate!==null&&(a=s),s=s.sibling;a===null?r.tail=null:a.sibling=null;break;case"collapsed":a=r.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?s||r.tail===null?r.tail=null:r.tail.sibling=null:c.sibling=null}}function ot(r){var s=r.alternate!==null&&r.alternate.child===r.child,a=0,c=0;if(s)for(var d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=r,d=d.sibling;else for(d=r.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=r,d=d.sibling;return r.subtreeFlags|=c,r.childLanes=a,s}function $w(r,s,a){var c=s.pendingProps;switch(Wc(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ot(s),null;case 1:return _t(s.type)&&aa(),ot(s),null;case 3:return c=s.stateNode,gi(),Re(gt),Re(it),ru(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(r===null||r.child===null)&&(ha(s)?s.flags|=4:r===null||r.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Gt!==null&&(Ou(Gt),Gt=null))),Cu(r,s),ot(s),null;case 5:tu(s);var d=Tr(Ss.current);if(a=s.type,r!==null&&s.stateNode!=null)vm(r,s,a,c,d),r.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!c){if(s.stateNode===null)throw Error(n(166));return ot(s),null}if(r=Tr(on.current),ha(s)){c=s.stateNode,a=s.type;var f=s.memoizedProps;switch(c[sn]=s,c[ys]=f,r=(s.mode&1)!==0,a){case"dialog":Ne("cancel",c),Ne("close",c);break;case"iframe":case"object":case"embed":Ne("load",c);break;case"video":case"audio":for(d=0;d<ms.length;d++)Ne(ms[d],c);break;case"source":Ne("error",c);break;case"img":case"image":case"link":Ne("error",c),Ne("load",c);break;case"details":Ne("toggle",c);break;case"input":Zh(c,f),Ne("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!f.multiple},Ne("invalid",c);break;case"textarea":nf(c,f),Ne("invalid",c)}nc(a,f),d=null;for(var g in f)if(f.hasOwnProperty(g)){var E=f[g];g==="children"?typeof E=="string"?c.textContent!==E&&(f.suppressHydrationWarning!==!0&&ia(c.textContent,E,r),d=["children",E]):typeof E=="number"&&c.textContent!==""+E&&(f.suppressHydrationWarning!==!0&&ia(c.textContent,E,r),d=["children",""+E]):o.hasOwnProperty(g)&&E!=null&&g==="onScroll"&&Ne("scroll",c)}switch(a){case"input":Lo(c),tf(c,f,!0);break;case"textarea":Lo(c),sf(c);break;case"select":case"option":break;default:typeof f.onClick=="function"&&(c.onclick=sa)}c=d,s.updateQueue=c,c!==null&&(s.flags|=4)}else{g=d.nodeType===9?d:d.ownerDocument,r==="http://www.w3.org/1999/xhtml"&&(r=of(a)),r==="http://www.w3.org/1999/xhtml"?a==="script"?(r=g.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild)):typeof c.is=="string"?r=g.createElement(a,{is:c.is}):(r=g.createElement(a),a==="select"&&(g=r,c.multiple?g.multiple=!0:c.size&&(g.size=c.size))):r=g.createElementNS(r,a),r[sn]=s,r[ys]=c,ym(r,s,!1,!1),s.stateNode=r;e:{switch(g=rc(a,c),a){case"dialog":Ne("cancel",r),Ne("close",r),d=c;break;case"iframe":case"object":case"embed":Ne("load",r),d=c;break;case"video":case"audio":for(d=0;d<ms.length;d++)Ne(ms[d],r);d=c;break;case"source":Ne("error",r),d=c;break;case"img":case"image":case"link":Ne("error",r),Ne("load",r),d=c;break;case"details":Ne("toggle",r),d=c;break;case"input":Zh(r,c),d=Xl(r,c),Ne("invalid",r);break;case"option":d=c;break;case"select":r._wrapperState={wasMultiple:!!c.multiple},d=K({},c,{value:void 0}),Ne("invalid",r);break;case"textarea":nf(r,c),d=ec(r,c),Ne("invalid",r);break;default:d=c}nc(a,d),E=d;for(f in E)if(E.hasOwnProperty(f)){var C=E[f];f==="style"?cf(r,C):f==="dangerouslySetInnerHTML"?(C=C?C.__html:void 0,C!=null&&af(r,C)):f==="children"?typeof C=="string"?(a!=="textarea"||C!=="")&&Qi(r,C):typeof C=="number"&&Qi(r,""+C):f!=="suppressContentEditableWarning"&&f!=="suppressHydrationWarning"&&f!=="autoFocus"&&(o.hasOwnProperty(f)?C!=null&&f==="onScroll"&&Ne("scroll",r):C!=null&&U(r,f,C,g))}switch(a){case"input":Lo(r),tf(r,c,!1);break;case"textarea":Lo(r),sf(r);break;case"option":c.value!=null&&r.setAttribute("value",""+ge(c.value));break;case"select":r.multiple=!!c.multiple,f=c.value,f!=null?Xr(r,!!c.multiple,f,!1):c.defaultValue!=null&&Xr(r,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(r.onclick=sa)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return ot(s),null;case 6:if(r&&s.stateNode!=null)Em(r,s,r.memoizedProps,c);else{if(typeof c!="string"&&s.stateNode===null)throw Error(n(166));if(a=Tr(Ss.current),Tr(on.current),ha(s)){if(c=s.stateNode,a=s.memoizedProps,c[sn]=s,(f=c.nodeValue!==a)&&(r=Nt,r!==null))switch(r.tag){case 3:ia(c.nodeValue,a,(r.mode&1)!==0);break;case 5:r.memoizedProps.suppressHydrationWarning!==!0&&ia(c.nodeValue,a,(r.mode&1)!==0)}f&&(s.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[sn]=s,s.stateNode=c}return ot(s),null;case 13:if(Re(Oe),c=s.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(Pe&&Rt!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Sp(),hi(),s.flags|=98560,f=!1;else if(f=ha(s),c!==null&&c.dehydrated!==null){if(r===null){if(!f)throw Error(n(318));if(f=s.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(n(317));f[sn]=s}else hi(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;ot(s),f=!1}else Gt!==null&&(Ou(Gt),Gt=null),f=!0;if(!f)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=a,s):(c=c!==null,c!==(r!==null&&r.memoizedState!==null)&&c&&(s.child.flags|=8192,(s.mode&1)!==0&&(r===null||(Oe.current&1)!==0?Ve===0&&(Ve=3):Mu())),s.updateQueue!==null&&(s.flags|=4),ot(s),null);case 4:return gi(),Cu(r,s),r===null&&gs(s.stateNode.containerInfo),ot(s),null;case 10:return Qc(s.type._context),ot(s),null;case 17:return _t(s.type)&&aa(),ot(s),null;case 19:if(Re(Oe),f=s.memoizedState,f===null)return ot(s),null;if(c=(s.flags&128)!==0,g=f.rendering,g===null)if(c)Rs(f,!1);else{if(Ve!==0||r!==null&&(r.flags&128)!==0)for(r=s.child;r!==null;){if(g=ya(r),g!==null){for(s.flags|=128,Rs(f,!1),c=g.updateQueue,c!==null&&(s.updateQueue=c,s.flags|=4),s.subtreeFlags=0,c=a,a=s.child;a!==null;)f=a,r=c,f.flags&=14680066,g=f.alternate,g===null?(f.childLanes=0,f.lanes=r,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,r=g.dependencies,f.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext}),a=a.sibling;return Se(Oe,Oe.current&1|2),s.child}r=r.sibling}f.tail!==null&&je()>Ei&&(s.flags|=128,c=!0,Rs(f,!1),s.lanes=4194304)}else{if(!c)if(r=ya(g),r!==null){if(s.flags|=128,c=!0,a=r.updateQueue,a!==null&&(s.updateQueue=a,s.flags|=4),Rs(f,!0),f.tail===null&&f.tailMode==="hidden"&&!g.alternate&&!Pe)return ot(s),null}else 2*je()-f.renderingStartTime>Ei&&a!==1073741824&&(s.flags|=128,c=!0,Rs(f,!1),s.lanes=4194304);f.isBackwards?(g.sibling=s.child,s.child=g):(a=f.last,a!==null?a.sibling=g:s.child=g,f.last=g)}return f.tail!==null?(s=f.tail,f.rendering=s,f.tail=s.sibling,f.renderingStartTime=je(),s.sibling=null,a=Oe.current,Se(Oe,c?a&1|2:a&1),s):(ot(s),null);case 22:case 23:return Lu(),c=s.memoizedState!==null,r!==null&&r.memoizedState!==null!==c&&(s.flags|=8192),c&&(s.mode&1)!==0?(xt&1073741824)!==0&&(ot(s),s.subtreeFlags&6&&(s.flags|=8192)):ot(s),null;case 24:return null;case 25:return null}throw Error(n(156,s.tag))}function Hw(r,s){switch(Wc(s),s.tag){case 1:return _t(s.type)&&aa(),r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 3:return gi(),Re(gt),Re(it),ru(),r=s.flags,(r&65536)!==0&&(r&128)===0?(s.flags=r&-65537|128,s):null;case 5:return tu(s),null;case 13:if(Re(Oe),r=s.memoizedState,r!==null&&r.dehydrated!==null){if(s.alternate===null)throw Error(n(340));hi()}return r=s.flags,r&65536?(s.flags=r&-65537|128,s):null;case 19:return Re(Oe),null;case 4:return gi(),null;case 10:return Qc(s.type._context),null;case 22:case 23:return Lu(),null;case 24:return null;default:return null}}var Na=!1,at=!1,zw=typeof WeakSet=="function"?WeakSet:Set,G=null;function yi(r,s){var a=r.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ue(r,s,c)}else a.current=null}function Su(r,s,a){try{a()}catch(c){Ue(r,s,c)}}var wm=!1;function Ww(r,s){if(Lc=Ko,r=Zf(),Nc(r)){if("selectionStart"in r)var a={start:r.selectionStart,end:r.selectionEnd};else e:{a=(a=r.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,f=c.focusNode;c=c.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var g=0,E=-1,C=-1,x=0,D=0,L=r,P=null;t:for(;;){for(var V;L!==a||d!==0&&L.nodeType!==3||(E=g+d),L!==f||c!==0&&L.nodeType!==3||(C=g+c),L.nodeType===3&&(g+=L.nodeValue.length),(V=L.firstChild)!==null;)P=L,L=V;for(;;){if(L===r)break t;if(P===a&&++x===d&&(E=g),P===f&&++D===c&&(C=g),(V=L.nextSibling)!==null)break;L=P,P=L.parentNode}L=V}a=E===-1||C===-1?null:{start:E,end:C}}else a=null}a=a||{start:0,end:0}}else a=null;for(Mc={focusedElem:r,selectionRange:a},Ko=!1,G=s;G!==null;)if(s=G,r=s.child,(s.subtreeFlags&1028)!==0&&r!==null)r.return=s,G=r;else for(;G!==null;){s=G;try{var q=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(q!==null){var Y=q.memoizedProps,$e=q.memoizedState,k=s.stateNode,S=k.getSnapshotBeforeUpdate(s.elementType===s.type?Y:Kt(s.type,Y),$e);k.__reactInternalSnapshotBeforeUpdate=S}break;case 3:var R=s.stateNode.containerInfo;R.nodeType===1?R.textContent="":R.nodeType===9&&R.documentElement&&R.removeChild(R.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(F){Ue(s,s.return,F)}if(r=s.sibling,r!==null){r.return=s.return,G=r;break}G=s.return}return q=wm,wm=!1,q}function xs(r,s,a){var c=s.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&r)===r){var f=d.destroy;d.destroy=void 0,f!==void 0&&Su(s,a,f)}d=d.next}while(d!==c)}}function Ra(r,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var a=s=s.next;do{if((a.tag&r)===r){var c=a.create;a.destroy=c()}a=a.next}while(a!==s)}}function Iu(r){var s=r.ref;if(s!==null){var a=r.stateNode;switch(r.tag){case 5:r=a;break;default:r=a}typeof s=="function"?s(r):s.current=r}}function Cm(r){var s=r.alternate;s!==null&&(r.alternate=null,Cm(s)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(s=r.stateNode,s!==null&&(delete s[sn],delete s[ys],delete s[jc],delete s[kw],delete s[Nw])),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}function Sm(r){return r.tag===5||r.tag===3||r.tag===4}function Im(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||Sm(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Tu(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.nodeType===8?a.parentNode.insertBefore(r,s):a.insertBefore(r,s):(a.nodeType===8?(s=a.parentNode,s.insertBefore(r,a)):(s=a,s.appendChild(r)),a=a._reactRootContainer,a!=null||s.onclick!==null||(s.onclick=sa));else if(c!==4&&(r=r.child,r!==null))for(Tu(r,s,a),r=r.sibling;r!==null;)Tu(r,s,a),r=r.sibling}function ku(r,s,a){var c=r.tag;if(c===5||c===6)r=r.stateNode,s?a.insertBefore(r,s):a.appendChild(r);else if(c!==4&&(r=r.child,r!==null))for(ku(r,s,a),r=r.sibling;r!==null;)ku(r,s,a),r=r.sibling}var et=null,qt=!1;function Gn(r,s,a){for(a=a.child;a!==null;)Tm(r,s,a),a=a.sibling}function Tm(r,s,a){if(rn&&typeof rn.onCommitFiberUnmount=="function")try{rn.onCommitFiberUnmount($o,a)}catch{}switch(a.tag){case 5:at||yi(a,s);case 6:var c=et,d=qt;et=null,Gn(r,s,a),et=c,qt=d,et!==null&&(qt?(r=et,a=a.stateNode,r.nodeType===8?r.parentNode.removeChild(a):r.removeChild(a)):et.removeChild(a.stateNode));break;case 18:et!==null&&(qt?(r=et,a=a.stateNode,r.nodeType===8?Bc(r.parentNode,a):r.nodeType===1&&Bc(r,a),as(r)):Bc(et,a.stateNode));break;case 4:c=et,d=qt,et=a.stateNode.containerInfo,qt=!0,Gn(r,s,a),et=c,qt=d;break;case 0:case 11:case 14:case 15:if(!at&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var f=d,g=f.destroy;f=f.tag,g!==void 0&&((f&2)!==0||(f&4)!==0)&&Su(a,s,g),d=d.next}while(d!==c)}Gn(r,s,a);break;case 1:if(!at&&(yi(a,s),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(E){Ue(a,s,E)}Gn(r,s,a);break;case 21:Gn(r,s,a);break;case 22:a.mode&1?(at=(c=at)||a.memoizedState!==null,Gn(r,s,a),at=c):Gn(r,s,a);break;default:Gn(r,s,a)}}function km(r){var s=r.updateQueue;if(s!==null){r.updateQueue=null;var a=r.stateNode;a===null&&(a=r.stateNode=new zw),s.forEach(function(c){var d=Zw.bind(null,r,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Yt(r,s){var a=s.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var f=r,g=s,E=g;e:for(;E!==null;){switch(E.tag){case 5:et=E.stateNode,qt=!1;break e;case 3:et=E.stateNode.containerInfo,qt=!0;break e;case 4:et=E.stateNode.containerInfo,qt=!0;break e}E=E.return}if(et===null)throw Error(n(160));Tm(f,g,d),et=null,qt=!1;var C=d.alternate;C!==null&&(C.return=null),d.return=null}catch(x){Ue(d,s,x)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)Nm(s,r),s=s.sibling}function Nm(r,s){var a=r.alternate,c=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:if(Yt(s,r),ln(r),c&4){try{xs(3,r,r.return),Ra(3,r)}catch(Y){Ue(r,r.return,Y)}try{xs(5,r,r.return)}catch(Y){Ue(r,r.return,Y)}}break;case 1:Yt(s,r),ln(r),c&512&&a!==null&&yi(a,a.return);break;case 5:if(Yt(s,r),ln(r),c&512&&a!==null&&yi(a,a.return),r.flags&32){var d=r.stateNode;try{Qi(d,"")}catch(Y){Ue(r,r.return,Y)}}if(c&4&&(d=r.stateNode,d!=null)){var f=r.memoizedProps,g=a!==null?a.memoizedProps:f,E=r.type,C=r.updateQueue;if(r.updateQueue=null,C!==null)try{E==="input"&&f.type==="radio"&&f.name!=null&&ef(d,f),rc(E,g);var x=rc(E,f);for(g=0;g<C.length;g+=2){var D=C[g],L=C[g+1];D==="style"?cf(d,L):D==="dangerouslySetInnerHTML"?af(d,L):D==="children"?Qi(d,L):U(d,D,L,x)}switch(E){case"input":Jl(d,f);break;case"textarea":rf(d,f);break;case"select":var P=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!f.multiple;var V=f.value;V!=null?Xr(d,!!f.multiple,V,!1):P!==!!f.multiple&&(f.defaultValue!=null?Xr(d,!!f.multiple,f.defaultValue,!0):Xr(d,!!f.multiple,f.multiple?[]:"",!1))}d[ys]=f}catch(Y){Ue(r,r.return,Y)}}break;case 6:if(Yt(s,r),ln(r),c&4){if(r.stateNode===null)throw Error(n(162));d=r.stateNode,f=r.memoizedProps;try{d.nodeValue=f}catch(Y){Ue(r,r.return,Y)}}break;case 3:if(Yt(s,r),ln(r),c&4&&a!==null&&a.memoizedState.isDehydrated)try{as(s.containerInfo)}catch(Y){Ue(r,r.return,Y)}break;case 4:Yt(s,r),ln(r);break;case 13:Yt(s,r),ln(r),d=r.child,d.flags&8192&&(f=d.memoizedState!==null,d.stateNode.isHidden=f,!f||d.alternate!==null&&d.alternate.memoizedState!==null||(xu=je())),c&4&&km(r);break;case 22:if(D=a!==null&&a.memoizedState!==null,r.mode&1?(at=(x=at)||D,Yt(s,r),at=x):Yt(s,r),ln(r),c&8192){if(x=r.memoizedState!==null,(r.stateNode.isHidden=x)&&!D&&(r.mode&1)!==0)for(G=r,D=r.child;D!==null;){for(L=G=D;G!==null;){switch(P=G,V=P.child,P.tag){case 0:case 11:case 14:case 15:xs(4,P,P.return);break;case 1:yi(P,P.return);var q=P.stateNode;if(typeof q.componentWillUnmount=="function"){c=P,a=P.return;try{s=c,q.props=s.memoizedProps,q.state=s.memoizedState,q.componentWillUnmount()}catch(Y){Ue(c,a,Y)}}break;case 5:yi(P,P.return);break;case 22:if(P.memoizedState!==null){bm(L);continue}}V!==null?(V.return=P,G=V):bm(L)}D=D.sibling}e:for(D=null,L=r;;){if(L.tag===5){if(D===null){D=L;try{d=L.stateNode,x?(f=d.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none"):(E=L.stateNode,C=L.memoizedProps.style,g=C!=null&&C.hasOwnProperty("display")?C.display:null,E.style.display=lf("display",g))}catch(Y){Ue(r,r.return,Y)}}}else if(L.tag===6){if(D===null)try{L.stateNode.nodeValue=x?"":L.memoizedProps}catch(Y){Ue(r,r.return,Y)}}else if((L.tag!==22&&L.tag!==23||L.memoizedState===null||L===r)&&L.child!==null){L.child.return=L,L=L.child;continue}if(L===r)break e;for(;L.sibling===null;){if(L.return===null||L.return===r)break e;D===L&&(D=null),L=L.return}D===L&&(D=null),L.sibling.return=L.return,L=L.sibling}}break;case 19:Yt(s,r),ln(r),c&4&&km(r);break;case 21:break;default:Yt(s,r),ln(r)}}function ln(r){var s=r.flags;if(s&2){try{e:{for(var a=r.return;a!==null;){if(Sm(a)){var c=a;break e}a=a.return}throw Error(n(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Qi(d,""),c.flags&=-33);var f=Im(r);ku(r,f,d);break;case 3:case 4:var g=c.stateNode.containerInfo,E=Im(r);Tu(r,E,g);break;default:throw Error(n(161))}}catch(C){Ue(r,r.return,C)}r.flags&=-3}s&4096&&(r.flags&=-4097)}function Vw(r,s,a){G=r,Rm(r)}function Rm(r,s,a){for(var c=(r.mode&1)!==0;G!==null;){var d=G,f=d.child;if(d.tag===22&&c){var g=d.memoizedState!==null||Na;if(!g){var E=d.alternate,C=E!==null&&E.memoizedState!==null||at;E=Na;var x=at;if(Na=g,(at=C)&&!x)for(G=d;G!==null;)g=G,C=g.child,g.tag===22&&g.memoizedState!==null?Am(d):C!==null?(C.return=g,G=C):Am(d);for(;f!==null;)G=f,Rm(f),f=f.sibling;G=d,Na=E,at=x}xm(r)}else(d.subtreeFlags&8772)!==0&&f!==null?(f.return=d,G=f):xm(r)}}function xm(r){for(;G!==null;){var s=G;if((s.flags&8772)!==0){var a=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:at||Ra(5,s);break;case 1:var c=s.stateNode;if(s.flags&4&&!at)if(a===null)c.componentDidMount();else{var d=s.elementType===s.type?a.memoizedProps:Kt(s.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var f=s.updateQueue;f!==null&&bp(s,f,c);break;case 3:var g=s.updateQueue;if(g!==null){if(a=null,s.child!==null)switch(s.child.tag){case 5:a=s.child.stateNode;break;case 1:a=s.child.stateNode}bp(s,g,a)}break;case 5:var E=s.stateNode;if(a===null&&s.flags&4){a=E;var C=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":C.autoFocus&&a.focus();break;case"img":C.src&&(a.src=C.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var x=s.alternate;if(x!==null){var D=x.memoizedState;if(D!==null){var L=D.dehydrated;L!==null&&as(L)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}at||s.flags&512&&Iu(s)}catch(P){Ue(s,s.return,P)}}if(s===r){G=null;break}if(a=s.sibling,a!==null){a.return=s.return,G=a;break}G=s.return}}function bm(r){for(;G!==null;){var s=G;if(s===r){G=null;break}var a=s.sibling;if(a!==null){a.return=s.return,G=a;break}G=s.return}}function Am(r){for(;G!==null;){var s=G;try{switch(s.tag){case 0:case 11:case 15:var a=s.return;try{Ra(4,s)}catch(C){Ue(s,a,C)}break;case 1:var c=s.stateNode;if(typeof c.componentDidMount=="function"){var d=s.return;try{c.componentDidMount()}catch(C){Ue(s,d,C)}}var f=s.return;try{Iu(s)}catch(C){Ue(s,f,C)}break;case 5:var g=s.return;try{Iu(s)}catch(C){Ue(s,g,C)}}}catch(C){Ue(s,s.return,C)}if(s===r){G=null;break}var E=s.sibling;if(E!==null){E.return=s.return,G=E;break}G=s.return}}var Gw=Math.ceil,xa=$.ReactCurrentDispatcher,Nu=$.ReactCurrentOwner,Ut=$.ReactCurrentBatchConfig,ue=0,Qe=null,He=null,tt=0,xt=0,vi=$n(0),Ve=0,bs=null,Nr=0,ba=0,Ru=0,As=null,vt=null,xu=0,Ei=1/0,vn=null,Aa=!1,bu=null,Kn=null,Pa=!1,qn=null,Oa=0,Ps=0,Au=null,Da=-1,La=0;function ut(){return(ue&6)!==0?je():Da!==-1?Da:Da=je()}function Yn(r){return(r.mode&1)===0?1:(ue&2)!==0&&tt!==0?tt&-tt:xw.transition!==null?(La===0&&(La=If()),La):(r=_e,r!==0||(r=window.event,r=r===void 0?16:Of(r.type)),r)}function Qt(r,s,a,c){if(50<Ps)throw Ps=0,Au=null,Error(n(185));ns(r,a,c),((ue&2)===0||r!==Qe)&&(r===Qe&&((ue&2)===0&&(ba|=a),Ve===4&&Qn(r,tt)),Et(r,c),a===1&&ue===0&&(s.mode&1)===0&&(Ei=je()+500,ca&&zn()))}function Et(r,s){var a=r.callbackNode;x1(r,s);var c=Wo(r,r===Qe?tt:0);if(c===0)a!==null&&wf(a),r.callbackNode=null,r.callbackPriority=0;else if(s=c&-c,r.callbackPriority!==s){if(a!=null&&wf(a),s===1)r.tag===0?Rw(Om.bind(null,r)):yp(Om.bind(null,r)),Iw(function(){(ue&6)===0&&zn()}),a=null;else{switch(Tf(c)){case 1:a=uc;break;case 4:a=Cf;break;case 16:a=jo;break;case 536870912:a=Sf;break;default:a=jo}a=$m(a,Pm.bind(null,r))}r.callbackPriority=s,r.callbackNode=a}}function Pm(r,s){if(Da=-1,La=0,(ue&6)!==0)throw Error(n(327));var a=r.callbackNode;if(wi()&&r.callbackNode!==a)return null;var c=Wo(r,r===Qe?tt:0);if(c===0)return null;if((c&30)!==0||(c&r.expiredLanes)!==0||s)s=Ma(r,c);else{s=c;var d=ue;ue|=2;var f=Lm();(Qe!==r||tt!==s)&&(vn=null,Ei=je()+500,xr(r,s));do try{Yw();break}catch(E){Dm(r,E)}while(!0);Yc(),xa.current=f,ue=d,He!==null?s=0:(Qe=null,tt=0,s=Ve)}if(s!==0){if(s===2&&(d=dc(r),d!==0&&(c=d,s=Pu(r,d))),s===1)throw a=bs,xr(r,0),Qn(r,c),Et(r,je()),a;if(s===6)Qn(r,c);else{if(d=r.current.alternate,(c&30)===0&&!Kw(d)&&(s=Ma(r,c),s===2&&(f=dc(r),f!==0&&(c=f,s=Pu(r,f))),s===1))throw a=bs,xr(r,0),Qn(r,c),Et(r,je()),a;switch(r.finishedWork=d,r.finishedLanes=c,s){case 0:case 1:throw Error(n(345));case 2:br(r,vt,vn);break;case 3:if(Qn(r,c),(c&130023424)===c&&(s=xu+500-je(),10<s)){if(Wo(r,0)!==0)break;if(d=r.suspendedLanes,(d&c)!==c){ut(),r.pingedLanes|=r.suspendedLanes&d;break}r.timeoutHandle=Fc(br.bind(null,r,vt,vn),s);break}br(r,vt,vn);break;case 4:if(Qn(r,c),(c&4194240)===c)break;for(s=r.eventTimes,d=-1;0<c;){var g=31-Wt(c);f=1<<g,g=s[g],g>d&&(d=g),c&=~f}if(c=d,c=je()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Gw(c/1960))-c,10<c){r.timeoutHandle=Fc(br.bind(null,r,vt,vn),c);break}br(r,vt,vn);break;case 5:br(r,vt,vn);break;default:throw Error(n(329))}}}return Et(r,je()),r.callbackNode===a?Pm.bind(null,r):null}function Pu(r,s){var a=As;return r.current.memoizedState.isDehydrated&&(xr(r,s).flags|=256),r=Ma(r,s),r!==2&&(s=vt,vt=a,s!==null&&Ou(s)),r}function Ou(r){vt===null?vt=r:vt.push.apply(vt,r)}function Kw(r){for(var s=r;;){if(s.flags&16384){var a=s.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],f=d.getSnapshot;d=d.value;try{if(!Vt(f(),d))return!1}catch{return!1}}}if(a=s.child,s.subtreeFlags&16384&&a!==null)a.return=s,s=a;else{if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Qn(r,s){for(s&=~Ru,s&=~ba,r.suspendedLanes|=s,r.pingedLanes&=~s,r=r.expirationTimes;0<s;){var a=31-Wt(s),c=1<<a;r[a]=-1,s&=~c}}function Om(r){if((ue&6)!==0)throw Error(n(327));wi();var s=Wo(r,0);if((s&1)===0)return Et(r,je()),null;var a=Ma(r,s);if(r.tag!==0&&a===2){var c=dc(r);c!==0&&(s=c,a=Pu(r,c))}if(a===1)throw a=bs,xr(r,0),Qn(r,s),Et(r,je()),a;if(a===6)throw Error(n(345));return r.finishedWork=r.current.alternate,r.finishedLanes=s,br(r,vt,vn),Et(r,je()),null}function Du(r,s){var a=ue;ue|=1;try{return r(s)}finally{ue=a,ue===0&&(Ei=je()+500,ca&&zn())}}function Rr(r){qn!==null&&qn.tag===0&&(ue&6)===0&&wi();var s=ue;ue|=1;var a=Ut.transition,c=_e;try{if(Ut.transition=null,_e=1,r)return r()}finally{_e=c,Ut.transition=a,ue=s,(ue&6)===0&&zn()}}function Lu(){xt=vi.current,Re(vi)}function xr(r,s){r.finishedWork=null,r.finishedLanes=0;var a=r.timeoutHandle;if(a!==-1&&(r.timeoutHandle=-1,Sw(a)),He!==null)for(a=He.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&aa();break;case 3:gi(),Re(gt),Re(it),ru();break;case 5:tu(c);break;case 4:gi();break;case 13:Re(Oe);break;case 19:Re(Oe);break;case 10:Qc(c.type._context);break;case 22:case 23:Lu()}a=a.return}if(Qe=r,He=r=Xn(r.current,null),tt=xt=s,Ve=0,bs=null,Ru=ba=Nr=0,vt=As=null,Ir!==null){for(s=0;s<Ir.length;s++)if(a=Ir[s],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,f=a.pending;if(f!==null){var g=f.next;f.next=d,c.next=g}a.pending=c}Ir=null}return r}function Dm(r,s){do{var a=He;try{if(Yc(),va.current=Sa,Ea){for(var c=De.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ea=!1}if(kr=0,Ye=We=De=null,Is=!1,Ts=0,Nu.current=null,a===null||a.return===null){Ve=1,bs=s,He=null;break}e:{var f=r,g=a.return,E=a,C=s;if(s=tt,E.flags|=32768,C!==null&&typeof C=="object"&&typeof C.then=="function"){var x=C,D=E,L=D.tag;if((D.mode&1)===0&&(L===0||L===11||L===15)){var P=D.alternate;P?(D.updateQueue=P.updateQueue,D.memoizedState=P.memoizedState,D.lanes=P.lanes):(D.updateQueue=null,D.memoizedState=null)}var V=sm(g);if(V!==null){V.flags&=-257,om(V,g,E,f,s),V.mode&1&&im(f,x,s),s=V,C=x;var q=s.updateQueue;if(q===null){var Y=new Set;Y.add(C),s.updateQueue=Y}else q.add(C);break e}else{if((s&1)===0){im(f,x,s),Mu();break e}C=Error(n(426))}}else if(Pe&&E.mode&1){var $e=sm(g);if($e!==null){($e.flags&65536)===0&&($e.flags|=256),om($e,g,E,f,s),Kc(_i(C,E));break e}}f=C=_i(C,E),Ve!==4&&(Ve=2),As===null?As=[f]:As.push(f),f=g;do{switch(f.tag){case 3:f.flags|=65536,s&=-s,f.lanes|=s;var k=nm(f,C,s);xp(f,k);break e;case 1:E=C;var S=f.type,R=f.stateNode;if((f.flags&128)===0&&(typeof S.getDerivedStateFromError=="function"||R!==null&&typeof R.componentDidCatch=="function"&&(Kn===null||!Kn.has(R)))){f.flags|=65536,s&=-s,f.lanes|=s;var F=rm(f,E,s);xp(f,F);break e}}f=f.return}while(f!==null)}Um(a)}catch(Q){s=Q,He===a&&a!==null&&(He=a=a.return);continue}break}while(!0)}function Lm(){var r=xa.current;return xa.current=Sa,r===null?Sa:r}function Mu(){(Ve===0||Ve===3||Ve===2)&&(Ve=4),Qe===null||(Nr&268435455)===0&&(ba&268435455)===0||Qn(Qe,tt)}function Ma(r,s){var a=ue;ue|=2;var c=Lm();(Qe!==r||tt!==s)&&(vn=null,xr(r,s));do try{qw();break}catch(d){Dm(r,d)}while(!0);if(Yc(),ue=a,xa.current=c,He!==null)throw Error(n(261));return Qe=null,tt=0,Ve}function qw(){for(;He!==null;)Mm(He)}function Yw(){for(;He!==null&&!E1();)Mm(He)}function Mm(r){var s=jm(r.alternate,r,xt);r.memoizedProps=r.pendingProps,s===null?Um(r):He=s,Nu.current=null}function Um(r){var s=r;do{var a=s.alternate;if(r=s.return,(s.flags&32768)===0){if(a=$w(a,s,xt),a!==null){He=a;return}}else{if(a=Hw(a,s),a!==null){a.flags&=32767,He=a;return}if(r!==null)r.flags|=32768,r.subtreeFlags=0,r.deletions=null;else{Ve=6,He=null;return}}if(s=s.sibling,s!==null){He=s;return}He=s=r}while(s!==null);Ve===0&&(Ve=5)}function br(r,s,a){var c=_e,d=Ut.transition;try{Ut.transition=null,_e=1,Qw(r,s,a,c)}finally{Ut.transition=d,_e=c}return null}function Qw(r,s,a,c){do wi();while(qn!==null);if((ue&6)!==0)throw Error(n(327));a=r.finishedWork;var d=r.finishedLanes;if(a===null)return null;if(r.finishedWork=null,r.finishedLanes=0,a===r.current)throw Error(n(177));r.callbackNode=null,r.callbackPriority=0;var f=a.lanes|a.childLanes;if(b1(r,f),r===Qe&&(He=Qe=null,tt=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Pa||(Pa=!0,$m(jo,function(){return wi(),null})),f=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||f){f=Ut.transition,Ut.transition=null;var g=_e;_e=1;var E=ue;ue|=4,Nu.current=null,Ww(r,a),Nm(a,r),gw(Mc),Ko=!!Lc,Mc=Lc=null,r.current=a,Vw(a),w1(),ue=E,_e=g,Ut.transition=f}else r.current=a;if(Pa&&(Pa=!1,qn=r,Oa=d),f=r.pendingLanes,f===0&&(Kn=null),I1(a.stateNode),Et(r,je()),s!==null)for(c=r.onRecoverableError,a=0;a<s.length;a++)d=s[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(Aa)throw Aa=!1,r=bu,bu=null,r;return(Oa&1)!==0&&r.tag!==0&&wi(),f=r.pendingLanes,(f&1)!==0?r===Au?Ps++:(Ps=0,Au=r):Ps=0,zn(),null}function wi(){if(qn!==null){var r=Tf(Oa),s=Ut.transition,a=_e;try{if(Ut.transition=null,_e=16>r?16:r,qn===null)var c=!1;else{if(r=qn,qn=null,Oa=0,(ue&6)!==0)throw Error(n(331));var d=ue;for(ue|=4,G=r.current;G!==null;){var f=G,g=f.child;if((G.flags&16)!==0){var E=f.deletions;if(E!==null){for(var C=0;C<E.length;C++){var x=E[C];for(G=x;G!==null;){var D=G;switch(D.tag){case 0:case 11:case 15:xs(8,D,f)}var L=D.child;if(L!==null)L.return=D,G=L;else for(;G!==null;){D=G;var P=D.sibling,V=D.return;if(Cm(D),D===x){G=null;break}if(P!==null){P.return=V,G=P;break}G=V}}}var q=f.alternate;if(q!==null){var Y=q.child;if(Y!==null){q.child=null;do{var $e=Y.sibling;Y.sibling=null,Y=$e}while(Y!==null)}}G=f}}if((f.subtreeFlags&2064)!==0&&g!==null)g.return=f,G=g;else e:for(;G!==null;){if(f=G,(f.flags&2048)!==0)switch(f.tag){case 0:case 11:case 15:xs(9,f,f.return)}var k=f.sibling;if(k!==null){k.return=f.return,G=k;break e}G=f.return}}var S=r.current;for(G=S;G!==null;){g=G;var R=g.child;if((g.subtreeFlags&2064)!==0&&R!==null)R.return=g,G=R;else e:for(g=S;G!==null;){if(E=G,(E.flags&2048)!==0)try{switch(E.tag){case 0:case 11:case 15:Ra(9,E)}}catch(Q){Ue(E,E.return,Q)}if(E===g){G=null;break e}var F=E.sibling;if(F!==null){F.return=E.return,G=F;break e}G=E.return}}if(ue=d,zn(),rn&&typeof rn.onPostCommitFiberRoot=="function")try{rn.onPostCommitFiberRoot($o,r)}catch{}c=!0}return c}finally{_e=a,Ut.transition=s}}return!1}function Fm(r,s,a){s=_i(a,s),s=nm(r,s,1),r=Vn(r,s,1),s=ut(),r!==null&&(ns(r,1,s),Et(r,s))}function Ue(r,s,a){if(r.tag===3)Fm(r,r,a);else for(;s!==null;){if(s.tag===3){Fm(s,r,a);break}else if(s.tag===1){var c=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kn===null||!Kn.has(c))){r=_i(a,r),r=rm(s,r,1),s=Vn(s,r,1),r=ut(),s!==null&&(ns(s,1,r),Et(s,r));break}}s=s.return}}function Xw(r,s,a){var c=r.pingCache;c!==null&&c.delete(s),s=ut(),r.pingedLanes|=r.suspendedLanes&a,Qe===r&&(tt&a)===a&&(Ve===4||Ve===3&&(tt&130023424)===tt&&500>je()-xu?xr(r,0):Ru|=a),Et(r,s)}function Bm(r,s){s===0&&((r.mode&1)===0?s=1:(s=zo,zo<<=1,(zo&130023424)===0&&(zo=4194304)));var a=ut();r=gn(r,s),r!==null&&(ns(r,s,a),Et(r,a))}function Jw(r){var s=r.memoizedState,a=0;s!==null&&(a=s.retryLane),Bm(r,a)}function Zw(r,s){var a=0;switch(r.tag){case 13:var c=r.stateNode,d=r.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=r.stateNode;break;default:throw Error(n(314))}c!==null&&c.delete(s),Bm(r,a)}var jm;jm=function(r,s,a){if(r!==null)if(r.memoizedProps!==s.pendingProps||gt.current)yt=!0;else{if((r.lanes&a)===0&&(s.flags&128)===0)return yt=!1,jw(r,s,a);yt=(r.flags&131072)!==0}else yt=!1,Pe&&(s.flags&1048576)!==0&&vp(s,da,s.index);switch(s.lanes=0,s.tag){case 2:var c=s.type;ka(r,s),r=s.pendingProps;var d=ci(s,it.current);mi(s,a),d=ou(null,s,c,r,d,a);var f=au();return s.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,_t(c)?(f=!0,la(s)):f=!1,s.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Zc(s),d.updater=Ia,s.stateNode=d,d._reactInternals=s,fu(s,c,r,a),s=_u(null,s,c,!0,f,a)):(s.tag=0,Pe&&f&&zc(s),ct(null,s,d,a),s=s.child),s;case 16:c=s.elementType;e:{switch(ka(r,s),r=s.pendingProps,d=c._init,c=d(c._payload),s.type=c,d=s.tag=t0(c),r=Kt(c,r),d){case 0:s=gu(null,s,c,r,a);break e;case 1:s=hm(null,s,c,r,a);break e;case 11:s=am(null,s,c,r,a);break e;case 14:s=lm(null,s,c,Kt(c.type,r),a);break e}throw Error(n(306,c,""))}return s;case 0:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Kt(c,d),gu(r,s,c,d,a);case 1:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Kt(c,d),hm(r,s,c,d,a);case 3:e:{if(fm(s),r===null)throw Error(n(387));c=s.pendingProps,f=s.memoizedState,d=f.element,Rp(r,s),_a(s,c,null,a);var g=s.memoizedState;if(c=g.element,f.isDehydrated)if(f={element:c,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},s.updateQueue.baseState=f,s.memoizedState=f,s.flags&256){d=_i(Error(n(423)),s),s=pm(r,s,c,a,d);break e}else if(c!==d){d=_i(Error(n(424)),s),s=pm(r,s,c,a,d);break e}else for(Rt=jn(s.stateNode.containerInfo.firstChild),Nt=s,Pe=!0,Gt=null,a=kp(s,null,c,a),s.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(hi(),c===d){s=yn(r,s,a);break e}ct(r,s,c,a)}s=s.child}return s;case 5:return Ap(s),r===null&&Gc(s),c=s.type,d=s.pendingProps,f=r!==null?r.memoizedProps:null,g=d.children,Uc(c,d)?g=null:f!==null&&Uc(c,f)&&(s.flags|=32),dm(r,s),ct(r,s,g,a),s.child;case 6:return r===null&&Gc(s),null;case 13:return mm(r,s,a);case 4:return eu(s,s.stateNode.containerInfo),c=s.pendingProps,r===null?s.child=fi(s,null,c,a):ct(r,s,c,a),s.child;case 11:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Kt(c,d),am(r,s,c,d,a);case 7:return ct(r,s,s.pendingProps,a),s.child;case 8:return ct(r,s,s.pendingProps.children,a),s.child;case 12:return ct(r,s,s.pendingProps.children,a),s.child;case 10:e:{if(c=s.type._context,d=s.pendingProps,f=s.memoizedProps,g=d.value,Se(pa,c._currentValue),c._currentValue=g,f!==null)if(Vt(f.value,g)){if(f.children===d.children&&!gt.current){s=yn(r,s,a);break e}}else for(f=s.child,f!==null&&(f.return=s);f!==null;){var E=f.dependencies;if(E!==null){g=f.child;for(var C=E.firstContext;C!==null;){if(C.context===c){if(f.tag===1){C=_n(-1,a&-a),C.tag=2;var x=f.updateQueue;if(x!==null){x=x.shared;var D=x.pending;D===null?C.next=C:(C.next=D.next,D.next=C),x.pending=C}}f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),Xc(f.return,a,s),E.lanes|=a;break}C=C.next}}else if(f.tag===10)g=f.type===s.type?null:f.child;else if(f.tag===18){if(g=f.return,g===null)throw Error(n(341));g.lanes|=a,E=g.alternate,E!==null&&(E.lanes|=a),Xc(g,a,s),g=f.sibling}else g=f.child;if(g!==null)g.return=f;else for(g=f;g!==null;){if(g===s){g=null;break}if(f=g.sibling,f!==null){f.return=g.return,g=f;break}g=g.return}f=g}ct(r,s,d.children,a),s=s.child}return s;case 9:return d=s.type,c=s.pendingProps.children,mi(s,a),d=Lt(d),c=c(d),s.flags|=1,ct(r,s,c,a),s.child;case 14:return c=s.type,d=Kt(c,s.pendingProps),d=Kt(c.type,d),lm(r,s,c,d,a);case 15:return cm(r,s,s.type,s.pendingProps,a);case 17:return c=s.type,d=s.pendingProps,d=s.elementType===c?d:Kt(c,d),ka(r,s),s.tag=1,_t(c)?(r=!0,la(s)):r=!1,mi(s,a),em(s,c,d),fu(s,c,d,a),_u(null,s,c,!0,r,a);case 19:return _m(r,s,a);case 22:return um(r,s,a)}throw Error(n(156,s.tag))};function $m(r,s){return Ef(r,s)}function e0(r,s,a,c){this.tag=r,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ft(r,s,a,c){return new e0(r,s,a,c)}function Uu(r){return r=r.prototype,!(!r||!r.isReactComponent)}function t0(r){if(typeof r=="function")return Uu(r)?1:0;if(r!=null){if(r=r.$$typeof,r===Pt)return 11;if(r===nn)return 14}return 2}function Xn(r,s){var a=r.alternate;return a===null?(a=Ft(r.tag,s,r.key,r.mode),a.elementType=r.elementType,a.type=r.type,a.stateNode=r.stateNode,a.alternate=r,r.alternate=a):(a.pendingProps=s,a.type=r.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=r.flags&14680064,a.childLanes=r.childLanes,a.lanes=r.lanes,a.child=r.child,a.memoizedProps=r.memoizedProps,a.memoizedState=r.memoizedState,a.updateQueue=r.updateQueue,s=r.dependencies,a.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},a.sibling=r.sibling,a.index=r.index,a.ref=r.ref,a}function Ua(r,s,a,c,d,f){var g=2;if(c=r,typeof r=="function")Uu(r)&&(g=1);else if(typeof r=="string")g=5;else e:switch(r){case me:return Ar(a.children,d,f,s);case we:g=8,d|=8;break;case ye:return r=Ft(12,a,s,d|2),r.elementType=ye,r.lanes=f,r;case It:return r=Ft(13,a,s,d),r.elementType=It,r.lanes=f,r;case zt:return r=Ft(19,a,s,d),r.elementType=zt,r.lanes=f,r;case Me:return Fa(a,d,f,s);default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case lt:g=10;break e;case qe:g=9;break e;case Pt:g=11;break e;case nn:g=14;break e;case mt:g=16,c=null;break e}throw Error(n(130,r==null?r:typeof r,""))}return s=Ft(g,a,s,d),s.elementType=r,s.type=c,s.lanes=f,s}function Ar(r,s,a,c){return r=Ft(7,r,c,s),r.lanes=a,r}function Fa(r,s,a,c){return r=Ft(22,r,c,s),r.elementType=Me,r.lanes=a,r.stateNode={isHidden:!1},r}function Fu(r,s,a){return r=Ft(6,r,null,s),r.lanes=a,r}function Bu(r,s,a){return s=Ft(4,r.children!==null?r.children:[],r.key,s),s.lanes=a,s.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},s}function n0(r,s,a,c,d){this.tag=s,this.containerInfo=r,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=hc(0),this.expirationTimes=hc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=hc(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function ju(r,s,a,c,d,f,g,E,C){return r=new n0(r,s,a,E,C),s===1?(s=1,f===!0&&(s|=8)):s=0,f=Ft(3,null,null,s),r.current=f,f.stateNode=r,f.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Zc(f),r}function r0(r,s,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:re,key:c==null?null:""+c,children:r,containerInfo:s,implementation:a}}function Hm(r){if(!r)return Hn;r=r._reactInternals;e:{if(vr(r)!==r||r.tag!==1)throw Error(n(170));var s=r;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(_t(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(n(171))}if(r.tag===1){var a=r.type;if(_t(a))return gp(r,a,s)}return s}function zm(r,s,a,c,d,f,g,E,C){return r=ju(a,c,!0,r,d,f,g,E,C),r.context=Hm(null),a=r.current,c=ut(),d=Yn(a),f=_n(c,d),f.callback=s??null,Vn(a,f,d),r.current.lanes=d,ns(r,d,c),Et(r,c),r}function Ba(r,s,a,c){var d=s.current,f=ut(),g=Yn(d);return a=Hm(a),s.context===null?s.context=a:s.pendingContext=a,s=_n(f,g),s.payload={element:r},c=c===void 0?null:c,c!==null&&(s.callback=c),r=Vn(d,s,g),r!==null&&(Qt(r,d,g,f),ga(r,d,g)),g}function ja(r){if(r=r.current,!r.child)return null;switch(r.child.tag){case 5:return r.child.stateNode;default:return r.child.stateNode}}function Wm(r,s){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var a=r.retryLane;r.retryLane=a!==0&&a<s?a:s}}function $u(r,s){Wm(r,s),(r=r.alternate)&&Wm(r,s)}function i0(){return null}var Vm=typeof reportError=="function"?reportError:function(r){console.error(r)};function Hu(r){this._internalRoot=r}$a.prototype.render=Hu.prototype.render=function(r){var s=this._internalRoot;if(s===null)throw Error(n(409));Ba(r,s,null,null)},$a.prototype.unmount=Hu.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var s=r.containerInfo;Rr(function(){Ba(null,r,null,null)}),s[hn]=null}};function $a(r){this._internalRoot=r}$a.prototype.unstable_scheduleHydration=function(r){if(r){var s=Rf();r={blockedOn:null,target:r,priority:s};for(var a=0;a<Un.length&&s!==0&&s<Un[a].priority;a++);Un.splice(a,0,r),a===0&&Af(r)}};function zu(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function Ha(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11&&(r.nodeType!==8||r.nodeValue!==" react-mount-point-unstable "))}function Gm(){}function s0(r,s,a,c,d){if(d){if(typeof c=="function"){var f=c;c=function(){var x=ja(g);f.call(x)}}var g=zm(s,c,r,0,null,!1,!1,"",Gm);return r._reactRootContainer=g,r[hn]=g.current,gs(r.nodeType===8?r.parentNode:r),Rr(),g}for(;d=r.lastChild;)r.removeChild(d);if(typeof c=="function"){var E=c;c=function(){var x=ja(C);E.call(x)}}var C=ju(r,0,!1,null,null,!1,!1,"",Gm);return r._reactRootContainer=C,r[hn]=C.current,gs(r.nodeType===8?r.parentNode:r),Rr(function(){Ba(s,C,a,c)}),C}function za(r,s,a,c,d){var f=a._reactRootContainer;if(f){var g=f;if(typeof d=="function"){var E=d;d=function(){var C=ja(g);E.call(C)}}Ba(s,g,r,d)}else g=s0(a,s,r,d,c);return ja(g)}kf=function(r){switch(r.tag){case 3:var s=r.stateNode;if(s.current.memoizedState.isDehydrated){var a=ts(s.pendingLanes);a!==0&&(fc(s,a|1),Et(s,je()),(ue&6)===0&&(Ei=je()+500,zn()))}break;case 13:Rr(function(){var c=gn(r,1);if(c!==null){var d=ut();Qt(c,r,1,d)}}),$u(r,1)}},pc=function(r){if(r.tag===13){var s=gn(r,134217728);if(s!==null){var a=ut();Qt(s,r,134217728,a)}$u(r,134217728)}},Nf=function(r){if(r.tag===13){var s=Yn(r),a=gn(r,s);if(a!==null){var c=ut();Qt(a,r,s,c)}$u(r,s)}},Rf=function(){return _e},xf=function(r,s){var a=_e;try{return _e=r,s()}finally{_e=a}},oc=function(r,s,a){switch(s){case"input":if(Jl(r,a),s=a.name,a.type==="radio"&&s!=null){for(a=r;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<a.length;s++){var c=a[s];if(c!==r&&c.form===r.form){var d=oa(c);if(!d)throw Error(n(90));Jh(c),Jl(c,d)}}}break;case"textarea":rf(r,a);break;case"select":s=a.value,s!=null&&Xr(r,!!a.multiple,s,!1)}},ff=Du,pf=Rr;var o0={usingClientEntryPoint:!1,Events:[vs,ai,oa,df,hf,Du]},Os={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},a0={bundleType:Os.bundleType,version:Os.version,rendererPackageName:Os.rendererPackageName,rendererConfig:Os.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$.ReactCurrentDispatcher,findHostInstanceByFiber:function(r){return r=yf(r),r===null?null:r.stateNode},findFiberByHostInstance:Os.findFiberByHostInstance||i0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Wa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Wa.isDisabled&&Wa.supportsFiber)try{$o=Wa.inject(a0),rn=Wa}catch{}}return wt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o0,wt.createPortal=function(r,s){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!zu(s))throw Error(n(200));return r0(r,s,null,a)},wt.createRoot=function(r,s){if(!zu(r))throw Error(n(299));var a=!1,c="",d=Vm;return s!=null&&(s.unstable_strictMode===!0&&(a=!0),s.identifierPrefix!==void 0&&(c=s.identifierPrefix),s.onRecoverableError!==void 0&&(d=s.onRecoverableError)),s=ju(r,1,!1,null,null,a,!1,c,d),r[hn]=s.current,gs(r.nodeType===8?r.parentNode:r),new Hu(s)},wt.findDOMNode=function(r){if(r==null)return null;if(r.nodeType===1)return r;var s=r._reactInternals;if(s===void 0)throw typeof r.render=="function"?Error(n(188)):(r=Object.keys(r).join(","),Error(n(268,r)));return r=yf(s),r=r===null?null:r.stateNode,r},wt.flushSync=function(r){return Rr(r)},wt.hydrate=function(r,s,a){if(!Ha(s))throw Error(n(200));return za(null,r,s,!0,a)},wt.hydrateRoot=function(r,s,a){if(!zu(r))throw Error(n(405));var c=a!=null&&a.hydratedSources||null,d=!1,f="",g=Vm;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(f=a.identifierPrefix),a.onRecoverableError!==void 0&&(g=a.onRecoverableError)),s=zm(s,null,r,1,a??null,d,!1,f,g),r[hn]=s.current,gs(r),c)for(r=0;r<c.length;r++)a=c[r],d=a._getVersion,d=d(a._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[a,d]:s.mutableSourceEagerHydrationData.push(a,d);return new $a(s)},wt.render=function(r,s,a){if(!Ha(s))throw Error(n(200));return za(null,r,s,!1,a)},wt.unmountComponentAtNode=function(r){if(!Ha(r))throw Error(n(40));return r._reactRootContainer?(Rr(function(){za(null,null,r,!1,function(){r._reactRootContainer=null,r[hn]=null})}),!0):!1},wt.unstable_batchedUpdates=Du,wt.unstable_renderSubtreeIntoContainer=function(r,s,a,c){if(!Ha(a))throw Error(n(200));if(r==null||r._reactInternals===void 0)throw Error(n(38));return za(r,s,a,!1,c)},wt.version="18.3.1-next-f1338f8080-20240426",wt}var eg;function ty(){if(eg)return Gu.exports;eg=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(e){console.error(e)}}return t(),Gu.exports=g0(),Gu.exports}var tg;function _0(){if(tg)return Va;tg=1;var t=ty();return Va.createRoot=t.createRoot,Va.hydrateRoot=t.hydrateRoot,Va}var y0=_0();const v0=Z_(y0);ty();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},eo.apply(this,arguments)}var ir;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(ir||(ir={}));const ng="popstate";function E0(t){t===void 0&&(t={});function e(i,o){let{pathname:l,search:u,hash:h}=i.location;return pd("",{pathname:l,search:u,hash:h},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){return typeof o=="string"?o:nl(o)}return C0(e,n,null,t)}function ze(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function ny(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function w0(){return Math.random().toString(36).substr(2,8)}function rg(t,e){return{usr:t.state,key:t.key,idx:e}}function pd(t,e,n,i){return n===void 0&&(n=null),eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?ji(e):e,{state:n,key:e&&e.key||i||w0()})}function nl(t){let{pathname:e="/",search:n="",hash:i=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function ji(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let i=t.indexOf("?");i>=0&&(e.search=t.substr(i),t=t.substr(0,i)),t&&(e.pathname=t)}return e}function C0(t,e,n,i){i===void 0&&(i={});let{window:o=document.defaultView,v5Compat:l=!1}=i,u=o.history,h=ir.Pop,p=null,m=v();m==null&&(m=0,u.replaceState(eo({},u.state,{idx:m}),""));function v(){return(u.state||{idx:null}).idx}function y(){h=ir.Pop;let N=v(),j=N==null?null:N-m;m=N,p&&p({action:h,location:A.location,delta:j})}function _(N,j){h=ir.Push;let H=pd(A.location,N,j);m=v()+1;let U=rg(H,m),$=A.createHref(H);try{u.pushState(U,"",$)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;o.location.assign($)}l&&p&&p({action:h,location:A.location,delta:1})}function I(N,j){h=ir.Replace;let H=pd(A.location,N,j);m=v();let U=rg(H,m),$=A.createHref(H);u.replaceState(U,"",$),l&&p&&p({action:h,location:A.location,delta:0})}function b(N){let j=o.location.origin!=="null"?o.location.origin:o.location.href,H=typeof N=="string"?N:nl(N);return H=H.replace(/ $/,"%20"),ze(j,"No window.location.(origin|href) available to create URL for href: "+H),new URL(H,j)}let A={get action(){return h},get location(){return t(o,u)},listen(N){if(p)throw new Error("A history only accepts one active listener");return o.addEventListener(ng,y),p=N,()=>{o.removeEventListener(ng,y),p=null}},createHref(N){return e(o,N)},createURL:b,encodeLocation(N){let j=b(N);return{pathname:j.pathname,search:j.search,hash:j.hash}},push:_,replace:I,go(N){return u.go(N)}};return A}var ig;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ig||(ig={}));function S0(t,e,n){return n===void 0&&(n="/"),I0(t,e,n)}function I0(t,e,n,i){let o=typeof e=="string"?ji(e):e,l=Gd(o.pathname||"/",n);if(l==null)return null;let u=ry(t);T0(u);let h=null;for(let p=0;h==null&&p<u.length;++p){let m=U0(l);h=D0(u[p],m)}return h}function ry(t,e,n,i){e===void 0&&(e=[]),n===void 0&&(n=[]),i===void 0&&(i="");let o=(l,u,h)=>{let p={relativePath:h===void 0?l.path||"":h,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};p.relativePath.startsWith("/")&&(ze(p.relativePath.startsWith(i),'Absolute route path "'+p.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),p.relativePath=p.relativePath.slice(i.length));let m=or([i,p.relativePath]),v=n.concat(p);l.children&&l.children.length>0&&(ze(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),ry(l.children,e,v,m)),!(l.path==null&&!l.index)&&e.push({path:m,score:P0(m,l.index),routesMeta:v})};return t.forEach((l,u)=>{var h;if(l.path===""||!((h=l.path)!=null&&h.includes("?")))o(l,u);else for(let p of iy(l.path))o(l,u,p)}),e}function iy(t){let e=t.split("/");if(e.length===0)return[];let[n,...i]=e,o=n.endsWith("?"),l=n.replace(/\?$/,"");if(i.length===0)return o?[l,""]:[l];let u=iy(i.join("/")),h=[];return h.push(...u.map(p=>p===""?l:[l,p].join("/"))),o&&h.push(...u),h.map(p=>t.startsWith("/")&&p===""?"/":p)}function T0(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:O0(e.routesMeta.map(i=>i.childrenIndex),n.routesMeta.map(i=>i.childrenIndex)))}const k0=/^:[\w-]+$/,N0=3,R0=2,x0=1,b0=10,A0=-2,sg=t=>t==="*";function P0(t,e){let n=t.split("/"),i=n.length;return n.some(sg)&&(i+=A0),e&&(i+=R0),n.filter(o=>!sg(o)).reduce((o,l)=>o+(k0.test(l)?N0:l===""?x0:b0),i)}function O0(t,e){return t.length===e.length&&t.slice(0,-1).every((i,o)=>i===e[o])?t[t.length-1]-e[e.length-1]:0}function D0(t,e,n){let{routesMeta:i}=t,o={},l="/",u=[];for(let h=0;h<i.length;++h){let p=i[h],m=h===i.length-1,v=l==="/"?e:e.slice(l.length)||"/",y=L0({path:p.relativePath,caseSensitive:p.caseSensitive,end:m},v),_=p.route;if(!y)return null;Object.assign(o,y.params),u.push({params:o,pathname:or([l,y.pathname]),pathnameBase:$0(or([l,y.pathnameBase])),route:_}),y.pathnameBase!=="/"&&(l=or([l,y.pathnameBase]))}return u}function L0(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,i]=M0(t.path,t.caseSensitive,t.end),o=e.match(n);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((m,v,y)=>{let{paramName:_,isOptional:I}=v;if(_==="*"){let A=h[y]||"";u=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const b=h[y];return I&&!b?m[_]=void 0:m[_]=(b||"").replace(/%2F/g,"/"),m},{}),pathname:l,pathnameBase:u,pattern:t}}function M0(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),ny(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let i=[],o="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,h,p)=>(i.push({paramName:h,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(i.push({paramName:"*"}),o+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":t!==""&&t!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),i]}function U0(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return ny(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Gd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,i=t.charAt(n);return i&&i!=="/"?null:t.slice(n)||"/"}function F0(t,e){e===void 0&&(e="/");let{pathname:n,search:i="",hash:o=""}=typeof t=="string"?ji(t):t;return{pathname:n?n.startsWith("/")?n:B0(n,e):e,search:H0(i),hash:z0(o)}}function B0(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Yu(t,e,n,i){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function j0(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function sy(t,e){let n=j0(t);return e?n.map((i,o)=>o===n.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function oy(t,e,n,i){i===void 0&&(i=!1);let o;typeof t=="string"?o=ji(t):(o=eo({},t),ze(!o.pathname||!o.pathname.includes("?"),Yu("?","pathname","search",o)),ze(!o.pathname||!o.pathname.includes("#"),Yu("#","pathname","hash",o)),ze(!o.search||!o.search.includes("#"),Yu("#","search","hash",o)));let l=t===""||o.pathname==="",u=l?"/":o.pathname,h;if(u==null)h=n;else{let y=e.length-1;if(!i&&u.startsWith("..")){let _=u.split("/");for(;_[0]==="..";)_.shift(),y-=1;o.pathname=_.join("/")}h=y>=0?e[y]:"/"}let p=F0(o,h),m=u&&u!=="/"&&u.endsWith("/"),v=(l||u===".")&&n.endsWith("/");return!p.pathname.endsWith("/")&&(m||v)&&(p.pathname+="/"),p}const or=t=>t.join("/").replace(/\/\/+/g,"/"),$0=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),H0=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,z0=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function W0(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const ay=["post","put","patch","delete"];new Set(ay);const V0=["get",...ay];new Set(V0);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},to.apply(this,arguments)}const Kd=M.createContext(null),G0=M.createContext(null),Gr=M.createContext(null),Rl=M.createContext(null),mr=M.createContext({outlet:null,matches:[],isDataRoute:!1}),ly=M.createContext(null);function K0(t,e){let{relative:n}=e===void 0?{}:e;vo()||ze(!1);let{basename:i,navigator:o}=M.useContext(Gr),{hash:l,pathname:u,search:h}=uy(t,{relative:n}),p=u;return i!=="/"&&(p=u==="/"?i:or([i,u])),o.createHref({pathname:p,search:h,hash:l})}function vo(){return M.useContext(Rl)!=null}function xl(){return vo()||ze(!1),M.useContext(Rl).location}function cy(t){M.useContext(Gr).static||M.useLayoutEffect(t)}function $i(){let{isDataRoute:t}=M.useContext(mr);return t?aC():q0()}function q0(){vo()||ze(!1);let t=M.useContext(Kd),{basename:e,future:n,navigator:i}=M.useContext(Gr),{matches:o}=M.useContext(mr),{pathname:l}=xl(),u=JSON.stringify(sy(o,n.v7_relativeSplatPath)),h=M.useRef(!1);return cy(()=>{h.current=!0}),M.useCallback(function(m,v){if(v===void 0&&(v={}),!h.current)return;if(typeof m=="number"){i.go(m);return}let y=oy(m,JSON.parse(u),l,v.relative==="path");t==null&&e!=="/"&&(y.pathname=y.pathname==="/"?e:or([e,y.pathname])),(v.replace?i.replace:i.push)(y,v.state,v)},[e,i,u,l,t])}function Y0(){let{matches:t}=M.useContext(mr),e=t[t.length-1];return e?e.params:{}}function uy(t,e){let{relative:n}=e===void 0?{}:e,{future:i}=M.useContext(Gr),{matches:o}=M.useContext(mr),{pathname:l}=xl(),u=JSON.stringify(sy(o,i.v7_relativeSplatPath));return M.useMemo(()=>oy(t,JSON.parse(u),l,n==="path"),[t,u,l,n])}function Q0(t,e){return X0(t,e)}function X0(t,e,n,i){vo()||ze(!1);let{navigator:o}=M.useContext(Gr),{matches:l}=M.useContext(mr),u=l[l.length-1],h=u?u.params:{};u&&u.pathname;let p=u?u.pathnameBase:"/";u&&u.route;let m=xl(),v;if(e){var y;let N=typeof e=="string"?ji(e):e;p==="/"||(y=N.pathname)!=null&&y.startsWith(p)||ze(!1),v=N}else v=m;let _=v.pathname||"/",I=_;if(p!=="/"){let N=p.replace(/^\//,"").split("/");I="/"+_.replace(/^\//,"").split("/").slice(N.length).join("/")}let b=S0(t,{pathname:I}),A=nC(b&&b.map(N=>Object.assign({},N,{params:Object.assign({},h,N.params),pathname:or([p,o.encodeLocation?o.encodeLocation(N.pathname).pathname:N.pathname]),pathnameBase:N.pathnameBase==="/"?p:or([p,o.encodeLocation?o.encodeLocation(N.pathnameBase).pathname:N.pathnameBase])})),l,n,i);return e&&A?M.createElement(Rl.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},v),navigationType:ir.Pop}},A):A}function J0(){let t=oC(),e=W0(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return M.createElement(M.Fragment,null,M.createElement("h2",null,"Unexpected Application Error!"),M.createElement("h3",{style:{fontStyle:"italic"}},e),n?M.createElement("pre",{style:o},n):null,null)}const Z0=M.createElement(J0,null);class eC extends M.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?M.createElement(mr.Provider,{value:this.props.routeContext},M.createElement(ly.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function tC(t){let{routeContext:e,match:n,children:i}=t,o=M.useContext(Kd);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),M.createElement(mr.Provider,{value:e},i)}function nC(t,e,n,i){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),i===void 0&&(i=null),t==null){var l;if(!n)return null;if(n.errors)t=n.matches;else if((l=i)!=null&&l.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let u=t,h=(o=n)==null?void 0:o.errors;if(h!=null){let v=u.findIndex(y=>y.route.id&&h?.[y.route.id]!==void 0);v>=0||ze(!1),u=u.slice(0,Math.min(u.length,v+1))}let p=!1,m=-1;if(n&&i&&i.v7_partialHydration)for(let v=0;v<u.length;v++){let y=u[v];if((y.route.HydrateFallback||y.route.hydrateFallbackElement)&&(m=v),y.route.id){let{loaderData:_,errors:I}=n,b=y.route.loader&&_[y.route.id]===void 0&&(!I||I[y.route.id]===void 0);if(y.route.lazy||b){p=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((v,y,_)=>{let I,b=!1,A=null,N=null;n&&(I=h&&y.route.id?h[y.route.id]:void 0,A=y.route.errorElement||Z0,p&&(m<0&&_===0?(lC("route-fallback"),b=!0,N=null):m===_&&(b=!0,N=y.route.hydrateFallbackElement||null)));let j=e.concat(u.slice(0,_+1)),H=()=>{let U;return I?U=A:b?U=N:y.route.Component?U=M.createElement(y.route.Component,null):y.route.element?U=y.route.element:U=v,M.createElement(tC,{match:y,routeContext:{outlet:v,matches:j,isDataRoute:n!=null},children:U})};return n&&(y.route.ErrorBoundary||y.route.errorElement||_===0)?M.createElement(eC,{location:n.location,revalidation:n.revalidation,component:A,error:I,children:H(),routeContext:{outlet:null,matches:j,isDataRoute:!0}}):H()},null)}var dy=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(dy||{}),hy=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(hy||{});function rC(t){let e=M.useContext(Kd);return e||ze(!1),e}function iC(t){let e=M.useContext(G0);return e||ze(!1),e}function sC(t){let e=M.useContext(mr);return e||ze(!1),e}function fy(t){let e=sC(),n=e.matches[e.matches.length-1];return n.route.id||ze(!1),n.route.id}function oC(){var t;let e=M.useContext(ly),n=iC(),i=fy();return e!==void 0?e:(t=n.errors)==null?void 0:t[i]}function aC(){let{router:t}=rC(dy.UseNavigateStable),e=fy(hy.UseNavigateStable),n=M.useRef(!1);return cy(()=>{n.current=!0}),M.useCallback(function(o,l){l===void 0&&(l={}),n.current&&(typeof o=="number"?t.navigate(o):t.navigate(o,to({fromRouteId:e},l)))},[t,e])}const og={};function lC(t,e,n){og[t]||(og[t]=!0)}function cC(t,e){t?.v7_startTransition,t?.v7_relativeSplatPath}function Pr(t){ze(!1)}function uC(t){let{basename:e="/",children:n=null,location:i,navigationType:o=ir.Pop,navigator:l,static:u=!1,future:h}=t;vo()&&ze(!1);let p=e.replace(/^\/*/,"/"),m=M.useMemo(()=>({basename:p,navigator:l,static:u,future:to({v7_relativeSplatPath:!1},h)}),[p,h,l,u]);typeof i=="string"&&(i=ji(i));let{pathname:v="/",search:y="",hash:_="",state:I=null,key:b="default"}=i,A=M.useMemo(()=>{let N=Gd(v,p);return N==null?null:{location:{pathname:N,search:y,hash:_,state:I,key:b},navigationType:o}},[p,v,y,_,I,b,o]);return A==null?null:M.createElement(Gr.Provider,{value:m},M.createElement(Rl.Provider,{children:n,value:A}))}function dC(t){let{children:e,location:n}=t;return Q0(md(e),n)}new Promise(()=>{});function md(t,e){e===void 0&&(e=[]);let n=[];return M.Children.forEach(t,(i,o)=>{if(!M.isValidElement(i))return;let l=[...e,o];if(i.type===M.Fragment){n.push.apply(n,md(i.props.children,l));return}i.type!==Pr&&ze(!1),!i.props.index||!i.props.children||ze(!1);let u={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(u.children=md(i.props.children,l)),n.push(u)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function gd(){return gd=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},gd.apply(this,arguments)}function hC(t,e){if(t==null)return{};var n={},i=Object.keys(t),o,l;for(l=0;l<i.length;l++)o=i[l],!(e.indexOf(o)>=0)&&(n[o]=t[o]);return n}function fC(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function pC(t,e){return t.button===0&&(!e||e==="_self")&&!fC(t)}const mC=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],gC="6";try{window.__reactRouterVersion=gC}catch{}const _C="startTransition",ag=f0[_C];function yC(t){let{basename:e,children:n,future:i,window:o}=t,l=M.useRef();l.current==null&&(l.current=E0({window:o,v5Compat:!0}));let u=l.current,[h,p]=M.useState({action:u.action,location:u.location}),{v7_startTransition:m}=i||{},v=M.useCallback(y=>{m&&ag?ag(()=>p(y)):p(y)},[p,m]);return M.useLayoutEffect(()=>u.listen(v),[u,v]),M.useEffect(()=>cC(i),[i]),M.createElement(uC,{basename:e,children:n,location:h.location,navigationType:h.action,navigator:u,future:i})}const vC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",EC=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Hs=M.forwardRef(function(e,n){let{onClick:i,relative:o,reloadDocument:l,replace:u,state:h,target:p,to:m,preventScrollReset:v,viewTransition:y}=e,_=hC(e,mC),{basename:I}=M.useContext(Gr),b,A=!1;if(typeof m=="string"&&EC.test(m)&&(b=m,vC))try{let U=new URL(window.location.href),$=m.startsWith("//")?new URL(U.protocol+m):new URL(m),W=Gd($.pathname,I);$.origin===U.origin&&W!=null?m=W+$.search+$.hash:A=!0}catch{}let N=K0(m,{relative:o}),j=wC(m,{replace:u,state:h,target:p,preventScrollReset:v,relative:o,viewTransition:y});function H(U){i&&i(U),U.defaultPrevented||j(U)}return M.createElement("a",gd({},_,{href:b||N,onClick:A||l?i:H,ref:n,target:p}))});var lg;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(lg||(lg={}));var cg;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(cg||(cg={}));function wC(t,e){let{target:n,replace:i,state:o,preventScrollReset:l,relative:u,viewTransition:h}=e===void 0?{}:e,p=$i(),m=xl(),v=uy(t,{relative:u});return M.useCallback(y=>{if(pC(y,n)){y.preventDefault();let _=i!==void 0?i:nl(m)===nl(v);p(t,{replace:_,state:o,preventScrollReset:l,relative:u,viewTransition:h})}},[m,p,v,i,o,n,t,l,u,h])}/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CC=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),SC=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase()),ug=t=>{const e=SC(t);return e.charAt(0).toUpperCase()+e.slice(1)},py=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim(),IC=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var TC={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kC=M.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:o="",children:l,iconNode:u,...h},p)=>M.createElement("svg",{ref:p,...TC,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:py("lucide",o),...!l&&!IC(h)&&{"aria-hidden":"true"},...h},[...u.map(([m,v])=>M.createElement(m,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=(t,e)=>{const n=M.forwardRef(({className:i,...o},l)=>M.createElement(kC,{ref:l,iconNode:e,className:py(`lucide-${CC(ug(t))}`,`lucide-${t}`,i),...o}));return n.displayName=ug(t),n};/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NC=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]],RC=qd("calendar-check-2",NC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xC=[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]],bC=qd("message-circle",xC);/**
 * @license lucide-react v0.525.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AC=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],PC=qd("shield-check",AC),OC=()=>w.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 text-white flex flex-col relative",children:[w.jsxs("div",{className:"absolute top-4 right-6 space-x-4",children:[w.jsx(Hs,{to:"/login",className:"text-white hover:text-gray-300 font-medium",children:"Login"}),w.jsx(Hs,{to:"/register",className:"bg-white text-blue-800 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition",children:"Sign Up"})]}),w.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center text-center px-4",children:[w.jsx("h1",{className:"text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-yellow-400 to-pink-500 text-transparent bg-clip-text",children:"AI-Powered Task Management"}),w.jsx("p",{className:"text-lg md:text-xl text-gray-200 mb-8 max-w-2xl",children:"Manage your tasks with smart scheduling, natural conversations, and secure real-time syncing."}),w.jsx(Hs,{to:"/register",className:"bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition-all",children:"Get Started"})]}),w.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 p-10 bg-gray-900 rounded-t-3xl shadow-inner",children:[w.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition transform",children:[w.jsx(RC,{className:"w-12 h-12 mx-auto text-yellow-400 mb-4"}),w.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Smart Scheduling"}),w.jsx("p",{className:"text-gray-300 text-sm",children:"Automatically organize your day with AI-powered task suggestions and reminders."})]}),w.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition transform",children:[w.jsx(bC,{className:"w-12 h-12 mx-auto text-green-400 mb-4"}),w.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Conversation Chat"}),w.jsx("p",{className:"text-gray-300 text-sm",children:"Chat with your assistant to manage tasks just like talking to a teammate."})]}),w.jsxs("div",{className:"bg-gray-800 p-6 rounded-xl text-center hover:scale-105 transition transform",children:[w.jsx(PC,{className:"w-12 h-12 mx-auto text-blue-400 mb-4"}),w.jsx("h3",{className:"text-xl font-semibold mb-2",children:"Secure Real-Time Sync"}),w.jsx("p",{className:"text-gray-300 text-sm",children:"Your data is encrypted and instantly synced across devices."})]})]})]}),DC=()=>{};var dg={};/**
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
 */const my=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},LC=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],u=t[n++],h=t[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],u=t[n++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},gy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<t.length;o+=3){const l=t[o],u=o+1<t.length,h=u?t[o+1]:0,p=o+2<t.length,m=p?t[o+2]:0,v=l>>2,y=(l&3)<<4|h>>4;let _=(h&15)<<2|m>>6,I=m&63;p||(I=64,u||(_=64)),i.push(n[v],n[y],n[_],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(my(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):LC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const y=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||m==null||y==null)throw new MC;const _=l<<2|h>>4;if(i.push(_),m!==64){const I=h<<4&240|m>>2;if(i.push(I),y!==64){const b=m<<6&192|y;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let MC=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const UC=function(t){const e=my(t);return gy.encodeByteArray(e,!0)},_y=function(t){return UC(t).replace(/\./g,"")},yy=function(t){try{return gy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function FC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BC=()=>FC().__FIREBASE_DEFAULTS__,jC=()=>{if(typeof process>"u"||typeof dg>"u")return;const t=dg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$C=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&yy(t[1]);return e&&JSON.parse(e)},Yd=()=>{try{return DC()||BC()||jC()||$C()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},HC=t=>{var e,n;return(n=(e=Yd())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},vy=()=>{var t;return(t=Yd())===null||t===void 0?void 0:t.config},Ey=t=>{var e;return(e=Yd())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */let zC=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}};/**
 * @license
 * Copyright 2025 Google LLC
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
 */function bl(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function WC(t){return(await fetch(t,{credentials:"include"})).ok}const zs={};function VC(){const t={prod:[],emulator:[]};for(const e of Object.keys(zs))zs[e]?t.emulator.push(e):t.prod.push(e);return t}function GC(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let hg=!1;function KC(t,e){if(typeof window>"u"||typeof document>"u"||!bl(window.location.host)||zs[t]===e||zs[t]||hg)return;zs[t]=e;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=VC().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function h(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function m(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{hg=!0,u()},_}function v(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function y(){const _=GC(i),I=n("text"),b=document.getElementById(I)||document.createElement("span"),A=n("learnmore"),N=document.getElementById(A)||document.createElement("a"),j=n("preprendIcon"),H=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const U=_.element;h(U),v(N,A);const $=m();p(H,j),U.append(H,b,N,$),document.body.appendChild(U)}l?(b.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function pt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(pt())}function YC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function QC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function XC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function JC(){const t=pt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ZC(){try{return typeof indexedDB=="object"}catch{return!1}}function eS(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var l;e(((l=o.error)===null||l===void 0?void 0:l.message)||"")}}catch(n){e(n)}})}/**
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
 */const tS="FirebaseError";let Hi=class wy extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=tS,Object.setPrototypeOf(this,wy.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Eo.prototype.create)}},Eo=class{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?nS(l,i):"Error",h=`${this.serviceName}: ${u} (${o}).`;return new Hi(o,h,i)}};function nS(t,e){return t.replace(rS,(n,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const rS=/\{\$([^}]+)}/g;function iS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Pi(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const l=t[o],u=e[o];if(fg(l)&&fg(u)){if(!Pi(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function fg(t){return t!==null&&typeof t=="object"}/**
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
 */function wo(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function js(t){const e={};return t.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[o,l]=i.split("=");e[decodeURIComponent(o)]=decodeURIComponent(l)}}),e}function $s(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function sS(t,e){const n=new oS(t,e);return n.subscribe.bind(n)}class oS{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,i){let o;if(e===void 0&&n===void 0&&i===void 0)throw new Error("Missing Observer.");aS(e,["next","error","complete"])?o=e:o={next:e,error:n,complete:i},o.next===void 0&&(o.next=Qu),o.error===void 0&&(o.error=Qu),o.complete===void 0&&(o.complete=Qu);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aS(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qu(){}/**
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
 */function Kr(t){return t&&t._delegate?t._delegate:t}let Oi=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Or="[DEFAULT]";/**
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
 */let lS=class{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new zC;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const i=this.normalizeInstanceIdentifier(e?.identifier),o=(n=e?.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(o)return null;throw l}else{if(o)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uS(e))try{this.getOrInitializeService({instanceIdentifier:Or})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Or){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Or){return this.instances.has(e)}getOptions(e=Or){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&u.resolve(o)}return o}onInit(e,n){var i;const o=this.normalizeInstanceIdentifier(n),l=(i=this.onInitCallbacks.get(o))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(o,l);const u=this.instances.get(o);return u&&e(u,o),()=>{l.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:cS(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Or){return this.component?this.component.multipleInstances?e:Or:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}};function cS(t){return t===Or?void 0:t}function uS(t){return t.instantiationMode==="EAGER"}/**
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
 */let dS=class{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new lS(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}};/**
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
 */var Ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Ee||(Ee={}));const hS={debug:Ee.DEBUG,verbose:Ee.VERBOSE,info:Ee.INFO,warn:Ee.WARN,error:Ee.ERROR,silent:Ee.SILENT},fS=Ee.INFO,pS={[Ee.DEBUG]:"log",[Ee.VERBOSE]:"log",[Ee.INFO]:"info",[Ee.WARN]:"warn",[Ee.ERROR]:"error"},mS=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),o=pS[e];if(o)console[o](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let Cy=class{constructor(e){this.name=e,this._logLevel=fS,this._logHandler=mS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?hS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ee.DEBUG,...e),this._logHandler(this,Ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ee.VERBOSE,...e),this._logHandler(this,Ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ee.INFO,...e),this._logHandler(this,Ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ee.WARN,...e),this._logHandler(this,Ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ee.ERROR,...e),this._logHandler(this,Ee.ERROR,...e)}};const gS=(t,e)=>e.some(n=>t instanceof n);let pg,mg;function _S(){return pg||(pg=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yS(){return mg||(mg=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sy=new WeakMap,_d=new WeakMap,Iy=new WeakMap,Xu=new WeakMap,Qd=new WeakMap;function vS(t){const e=new Promise((n,i)=>{const o=()=>{t.removeEventListener("success",l),t.removeEventListener("error",u)},l=()=>{n(ar(t.result)),o()},u=()=>{i(t.error),o()};t.addEventListener("success",l),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&Sy.set(n,t)}).catch(()=>{}),Qd.set(e,t),e}function ES(t){if(_d.has(t))return;const e=new Promise((n,i)=>{const o=()=>{t.removeEventListener("complete",l),t.removeEventListener("error",u),t.removeEventListener("abort",u)},l=()=>{n(),o()},u=()=>{i(t.error||new DOMException("AbortError","AbortError")),o()};t.addEventListener("complete",l),t.addEventListener("error",u),t.addEventListener("abort",u)});_d.set(t,e)}let yd={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Iy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ar(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function wS(t){yd=t(yd)}function CS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const i=t.call(Ju(this),e,...n);return Iy.set(i,e.sort?e.sort():[e]),ar(i)}:yS().includes(t)?function(...e){return t.apply(Ju(this),e),ar(Sy.get(this))}:function(...e){return ar(t.apply(Ju(this),e))}}function SS(t){return typeof t=="function"?CS(t):(t instanceof IDBTransaction&&ES(t),gS(t,_S())?new Proxy(t,yd):t)}function ar(t){if(t instanceof IDBRequest)return vS(t);if(Xu.has(t))return Xu.get(t);const e=SS(t);return e!==t&&(Xu.set(t,e),Qd.set(e,t)),e}const Ju=t=>Qd.get(t);function Ty(t,e,{blocked:n,upgrade:i,blocking:o,terminated:l}={}){const u=indexedDB.open(t,e),h=ar(u);return i&&u.addEventListener("upgradeneeded",p=>{i(ar(u.result),p.oldVersion,p.newVersion,ar(u.transaction),p)}),n&&u.addEventListener("blocked",p=>n(p.oldVersion,p.newVersion,p)),h.then(p=>{l&&p.addEventListener("close",()=>l()),o&&p.addEventListener("versionchange",m=>o(m.oldVersion,m.newVersion,m))}).catch(()=>{}),h}const IS=["get","getKey","getAll","getAllKeys","count"],TS=["put","add","delete","clear"],Zu=new Map;function gg(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Zu.get(e))return Zu.get(e);const n=e.replace(/FromIndex$/,""),i=e!==n,o=TS.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(o||IS.includes(n)))return;const l=async function(u,...h){const p=this.transaction(u,o?"readwrite":"readonly");let m=p.store;return i&&(m=m.index(h.shift())),(await Promise.all([m[n](...h),o&&p.done]))[0]};return Zu.set(e,l),l}wS(t=>({...t,get:(e,n,i)=>gg(e,n)||t.get(e,n,i),has:(e,n)=>!!gg(e,n)||t.has(e,n)}));/**
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
 */let kS=class{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NS(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}};function NS(t){const e=t.getComponent();return e?.type==="VERSION"}const vd="@firebase/app",_g="0.13.2";/**
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
 */const xn=new Cy("@firebase/app"),RS="@firebase/app-compat",xS="@firebase/analytics-compat",bS="@firebase/analytics",AS="@firebase/app-check-compat",PS="@firebase/app-check",OS="@firebase/auth",DS="@firebase/auth-compat",LS="@firebase/database",MS="@firebase/data-connect",US="@firebase/database-compat",FS="@firebase/functions",BS="@firebase/functions-compat",jS="@firebase/installations",$S="@firebase/installations-compat",HS="@firebase/messaging",zS="@firebase/messaging-compat",WS="@firebase/performance",VS="@firebase/performance-compat",GS="@firebase/remote-config",KS="@firebase/remote-config-compat",qS="@firebase/storage",YS="@firebase/storage-compat",QS="@firebase/firestore",XS="@firebase/ai",JS="@firebase/firestore-compat",ZS="firebase",eI="11.10.0";/**
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
 */const Ed="[DEFAULT]",tI={[vd]:"fire-core",[RS]:"fire-core-compat",[bS]:"fire-analytics",[xS]:"fire-analytics-compat",[PS]:"fire-app-check",[AS]:"fire-app-check-compat",[OS]:"fire-auth",[DS]:"fire-auth-compat",[LS]:"fire-rtdb",[MS]:"fire-data-connect",[US]:"fire-rtdb-compat",[FS]:"fire-fn",[BS]:"fire-fn-compat",[jS]:"fire-iid",[$S]:"fire-iid-compat",[HS]:"fire-fcm",[zS]:"fire-fcm-compat",[WS]:"fire-perf",[VS]:"fire-perf-compat",[GS]:"fire-rc",[KS]:"fire-rc-compat",[qS]:"fire-gcs",[YS]:"fire-gcs-compat",[QS]:"fire-fst",[JS]:"fire-fst-compat",[XS]:"fire-vertex","fire-js":"fire-js",[ZS]:"fire-js-all"};/**
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
 */const rl=new Map,nI=new Map,wd=new Map;function yg(t,e){try{t.container.addComponent(e)}catch(n){xn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function no(t){const e=t.name;if(wd.has(e))return xn.debug(`There were multiple attempts to register component ${e}.`),!1;wd.set(e,t);for(const n of rl.values())yg(n,t);for(const n of nI.values())yg(n,t);return!0}function ky(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Bt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const rI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},lr=new Eo("app","Firebase",rI);/**
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
 */let iI=class{constructor(e,n,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Oi("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw lr.create("app-deleted",{appName:this._name})}};/**
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
 */const Co=eI;function Ny(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ed,automaticDataCollectionEnabled:!0},e),o=i.name;if(typeof o!="string"||!o)throw lr.create("bad-app-name",{appName:String(o)});if(n||(n=vy()),!n)throw lr.create("no-options");const l=rl.get(o);if(l){if(Pi(n,l.options)&&Pi(i,l.config))return l;throw lr.create("duplicate-app",{appName:o})}const u=new dS(o);for(const p of wd.values())u.addComponent(p);const h=new iI(n,i,u);return rl.set(o,h),h}function sI(t=Ed){const e=rl.get(t);if(!e&&t===Ed&&vy())return Ny();if(!e)throw lr.create("no-app",{appName:t});return e}function ki(t,e,n){var i;let o=(i=tI[t])!==null&&i!==void 0?i:t;n&&(o+=`-${n}`);const l=o.match(/\s|\//),u=e.match(/\s|\//);if(l||u){const h=[`Unable to register library "${o}" with version "${e}":`];l&&h.push(`library name "${o}" contains illegal characters (whitespace or "/")`),l&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xn.warn(h.join(" "));return}no(new Oi(`${o}-version`,()=>({library:o,version:e}),"VERSION"))}/**
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
 */const oI="firebase-heartbeat-database",aI=1,ro="firebase-heartbeat-store";let ed=null;function Ry(){return ed||(ed=Ty(oI,aI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ro)}catch(n){console.warn(n)}}}}).catch(t=>{throw lr.create("idb-open",{originalErrorMessage:t.message})})),ed}async function lI(t){try{const n=(await Ry()).transaction(ro),i=await n.objectStore(ro).get(xy(t));return await n.done,i}catch(e){if(e instanceof Hi)xn.warn(e.message);else{const n=lr.create("idb-get",{originalErrorMessage:e?.message});xn.warn(n.message)}}}async function vg(t,e){try{const i=(await Ry()).transaction(ro,"readwrite");await i.objectStore(ro).put(e,xy(t)),await i.done}catch(n){if(n instanceof Hi)xn.warn(n.message);else{const i=lr.create("idb-set",{originalErrorMessage:n?.message});xn.warn(i.message)}}}function xy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cI=1024,uI=30;let dI=class{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fI(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=Eg();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(u=>u.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:o}),this._heartbeatsCache.heartbeats.length>uI){const u=pI(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(u,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){xn.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Eg(),{heartbeatsToSend:i,unsentEntries:o}=hI(this._heartbeatsCache.heartbeats),l=_y(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(n){return xn.warn(n),""}}};function Eg(){return new Date().toISOString().substring(0,10)}function hI(t,e=cI){const n=[];let i=t.slice();for(const o of t){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),wg(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),wg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}let fI=class{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ZC()?eS().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await lI(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const o=await this.read();return vg(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:o.lastSentHeartbeatDate,heartbeats:[...o.heartbeats,...e.heartbeats]})}else return}};function wg(t){return _y(JSON.stringify({version:2,heartbeats:t})).length}function pI(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function mI(t){no(new Oi("platform-logger",e=>new kS(e),"PRIVATE")),no(new Oi("heartbeat",e=>new dI(e),"PRIVATE")),ki(vd,_g,t),ki(vd,_g,"esm2017"),ki("fire-js","")}mI("");var gI="firebase",_I="11.10.0";/**
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
 */ki(gI,_I,"app");function Xd(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]]);return n}function by(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const yI=by,Ay=new Eo("auth","Firebase",by());/**
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
 */const il=new Cy("@firebase/auth");function vI(t,...e){il.logLevel<=Ee.WARN&&il.warn(`Auth (${Co}): ${t}`,...e)}function Xa(t,...e){il.logLevel<=Ee.ERROR&&il.error(`Auth (${Co}): ${t}`,...e)}/**
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
 */function $t(t,...e){throw Zd(t,...e)}function en(t,...e){return Zd(t,...e)}function Jd(t,e,n){const i=Object.assign(Object.assign({},yI()),{[e]:n});return new Eo("auth","Firebase",i).create(e,{appName:t.name})}function kn(t){return Jd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function EI(t,e,n){const i=n;if(!(e instanceof i))throw i.name!==e.constructor.name&&$t(t,"argument-error"),Jd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Zd(t,...e){if(typeof t!="string"){const n=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=t.name),t._errorFactory.create(n,...i)}return Ay.create(t,...e)}function ee(t,e,...n){if(!t)throw Zd(e,...n)}function Sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Xa(e),new Error(e)}function bn(t,e){t||Sn(e)}/**
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
 */function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function wI(){return Cg()==="http:"||Cg()==="https:"}function Cg(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function CI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(wI()||QC()||"connection"in navigator)?navigator.onLine:!0}function SI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class So{constructor(e,n){this.shortDelay=e,this.longDelay=n,bn(n>e,"Short delay should be less than long delay!"),this.isMobile=qC()||XC()}get(){return CI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function eh(t,e){bn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Py{static initialize(e,n,i){this.fetchImpl=e,n&&(this.headersImpl=n),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const II={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const TI=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],kI=new So(3e4,6e4);function gr(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function _r(t,e,n,i,o={}){return Oy(t,o,async()=>{let l={},u={};i&&(e==="GET"?u=i:l={body:JSON.stringify(i)});const h=wo(Object.assign({key:t.config.apiKey},u)).slice(1),p=await t._getAdditionalHeaders();p["Content-Type"]="application/json",t.languageCode&&(p["X-Firebase-Locale"]=t.languageCode);const m=Object.assign({method:e,headers:p},l);return YC()||(m.referrerPolicy="no-referrer"),t.emulatorConfig&&bl(t.emulatorConfig.host)&&(m.credentials="include"),Py.fetch()(await Dy(t,t.config.apiHost,n,h),m)})}async function Oy(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},II),e);try{const o=new RI(t),l=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const u=await l.json();if("needConfirmation"in u)throw Ga(t,"account-exists-with-different-credential",u);if(l.ok&&!("errorMessage"in u))return u;{const h=l.ok?u.errorMessage:u.error.message,[p,m]=h.split(" : ");if(p==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ga(t,"credential-already-in-use",u);if(p==="EMAIL_EXISTS")throw Ga(t,"email-already-in-use",u);if(p==="USER_DISABLED")throw Ga(t,"user-disabled",u);const v=i[p]||p.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Jd(t,v,m);$t(t,v)}}catch(o){if(o instanceof Hi)throw o;$t(t,"network-request-failed",{message:String(o)})}}async function Io(t,e,n,i,o={}){const l=await _r(t,e,n,i,o);return"mfaPendingCredential"in l&&$t(t,"multi-factor-auth-required",{_serverResponse:l}),l}async function Dy(t,e,n,i){const o=`${e}${n}?${i}`,l=t,u=l.config.emulator?eh(t.config,o):`${t.config.apiScheme}://${o}`;return TI.includes(n)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(u).toString():u}function NI(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class RI{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,i)=>{this.timer=setTimeout(()=>i(en(this.auth,"network-request-failed")),kI.get())})}}function Ga(t,e,n){const i={appName:t.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const o=en(t,e,i);return o.customData._tokenResponse=n,o}function Sg(t){return t!==void 0&&t.enterprise!==void 0}class xI{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return NI(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function bI(t,e){return _r(t,"GET","/v2/recaptchaConfig",gr(t,e))}/**
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
 */async function AI(t,e){return _r(t,"POST","/v1/accounts:delete",e)}async function sl(t,e){return _r(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ws(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function PI(t,e=!1){const n=Kr(t),i=await n.getIdToken(e),o=th(i);ee(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const l=typeof o.firebase=="object"?o.firebase:void 0,u=l?.sign_in_provider;return{claims:o,token:i,authTime:Ws(td(o.auth_time)),issuedAtTime:Ws(td(o.iat)),expirationTime:Ws(td(o.exp)),signInProvider:u||null,signInSecondFactor:l?.sign_in_second_factor||null}}function td(t){return Number(t)*1e3}function th(t){const[e,n,i]=t.split(".");if(e===void 0||n===void 0||i===void 0)return Xa("JWT malformed, contained fewer than 3 sections"),null;try{const o=yy(n);return o?JSON.parse(o):(Xa("Failed to decode base64 JWT payload"),null)}catch(o){return Xa("Caught error parsing JWT payload as JSON",o?.toString()),null}}function Ig(t){const e=th(t);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function io(t,e,n=!1){if(n)return e;try{return await e}catch(i){throw i instanceof Hi&&OI(i)&&t.auth.currentUser===t&&await t.auth.signOut(),i}}function OI({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class DI{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const o=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,o)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Sd{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ws(this.lastLoginAt),this.creationTime=Ws(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ol(t){var e;const n=t.auth,i=await t.getIdToken(),o=await io(t,sl(n,{idToken:i}));ee(o?.users.length,n,"internal-error");const l=o.users[0];t._notifyReloadListener(l);const u=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?Ly(l.providerUserInfo):[],h=MI(t.providerData,u),p=t.isAnonymous,m=!(t.email&&l.passwordHash)&&!h?.length,v=p?m:!1,y={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:h,metadata:new Sd(l.createdAt,l.lastLoginAt),isAnonymous:v};Object.assign(t,y)}async function LI(t){const e=Kr(t);await ol(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function MI(t,e){return[...t.filter(i=>!e.some(o=>o.providerId===i.providerId)),...e]}function Ly(t){return t.map(e=>{var{providerId:n}=e,i=Xd(e,["providerId"]);return{providerId:n,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
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
 */async function UI(t,e){const n=await Oy(t,{},async()=>{const i=wo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:o,apiKey:l}=t.config,u=await Dy(t,o,"/v1/token",`key=${l}`),h=await t._getAdditionalHeaders();h["Content-Type"]="application/x-www-form-urlencoded";const p={method:"POST",headers:h,body:i};return t.emulatorConfig&&bl(t.emulatorConfig.host)&&(p.credentials="include"),Py.fetch()(u,p)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function FI(t,e){return _r(t,"POST","/v2/accounts:revokeToken",gr(t,e))}/**
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
 */class Ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ig(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const n=Ig(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:i,refreshToken:o,expiresIn:l}=await UI(e,n);this.updateTokensAndExpiration(i,o,Number(l))}updateTokensAndExpiration(e,n,i){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,n){const{refreshToken:i,accessToken:o,expirationTime:l}=n,u=new Ni;return i&&(ee(typeof i=="string","internal-error",{appName:e}),u.refreshToken=i),o&&(ee(typeof o=="string","internal-error",{appName:e}),u.accessToken=o),l&&(ee(typeof l=="number","internal-error",{appName:e}),u.expirationTime=l),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ni,this.toJSON())}_performRefresh(){return Sn("not implemented")}}/**
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
 */function Zn(t,e){ee(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Jt{constructor(e){var{uid:n,auth:i,stsTokenManager:o}=e,l=Xd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new DI(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=i,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Sd(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const n=await io(this,this.stsTokenManager.getToken(this.auth,e));return ee(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return PI(this,e)}reload(){return LI(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Jt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),n&&await ol(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Bt(this.auth.app))return Promise.reject(kn(this.auth));const e=await this.getIdToken();return await io(this,AI(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var i,o,l,u,h,p,m,v;const y=(i=n.displayName)!==null&&i!==void 0?i:void 0,_=(o=n.email)!==null&&o!==void 0?o:void 0,I=(l=n.phoneNumber)!==null&&l!==void 0?l:void 0,b=(u=n.photoURL)!==null&&u!==void 0?u:void 0,A=(h=n.tenantId)!==null&&h!==void 0?h:void 0,N=(p=n._redirectEventId)!==null&&p!==void 0?p:void 0,j=(m=n.createdAt)!==null&&m!==void 0?m:void 0,H=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:U,emailVerified:$,isAnonymous:W,providerData:re,stsTokenManager:me}=n;ee(U&&me,e,"internal-error");const we=Ni.fromJSON(this.name,me);ee(typeof U=="string",e,"internal-error"),Zn(y,e.name),Zn(_,e.name),ee(typeof $=="boolean",e,"internal-error"),ee(typeof W=="boolean",e,"internal-error"),Zn(I,e.name),Zn(b,e.name),Zn(A,e.name),Zn(N,e.name),Zn(j,e.name),Zn(H,e.name);const ye=new Jt({uid:U,auth:e,email:_,emailVerified:$,displayName:y,isAnonymous:W,photoURL:b,phoneNumber:I,tenantId:A,stsTokenManager:we,createdAt:j,lastLoginAt:H});return re&&Array.isArray(re)&&(ye.providerData=re.map(lt=>Object.assign({},lt))),N&&(ye._redirectEventId=N),ye}static async _fromIdTokenResponse(e,n,i=!1){const o=new Ni;o.updateFromServerResponse(n);const l=new Jt({uid:n.localId,auth:e,stsTokenManager:o,isAnonymous:i});return await ol(l),l}static async _fromGetAccountInfoResponse(e,n,i){const o=n.users[0];ee(o.localId!==void 0,"internal-error");const l=o.providerUserInfo!==void 0?Ly(o.providerUserInfo):[],u=!(o.email&&o.passwordHash)&&!l?.length,h=new Ni;h.updateFromIdToken(i);const p=new Jt({uid:o.localId,auth:e,stsTokenManager:h,isAnonymous:u}),m={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new Sd(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!l?.length};return Object.assign(p,m),p}}/**
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
 */const Tg=new Map;function In(t){bn(t instanceof Function,"Expected a class definition");let e=Tg.get(t);return e?(bn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Tg.set(t,e),e)}/**
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
 */class My{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}My.type="NONE";const kg=My;/**
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
 */function Ja(t,e,n){return`firebase:${t}:${e}:${n}`}class Ri{constructor(e,n,i){this.persistence=e,this.auth=n,this.userKey=i;const{config:o,name:l}=this.auth;this.fullUserKey=Ja(this.userKey,o.apiKey,l),this.fullPersistenceKey=Ja("persistence",o.apiKey,l),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await sl(this.auth,{idToken:e}).catch(()=>{});return n?Jt._fromGetAccountInfoResponse(this.auth,n,e):null}return Jt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,i="authUser"){if(!n.length)return new Ri(In(kg),e,i);const o=(await Promise.all(n.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let l=o[0]||In(kg);const u=Ja(i,e.config.apiKey,e.name);let h=null;for(const m of n)try{const v=await m._get(u);if(v){let y;if(typeof v=="string"){const _=await sl(e,{idToken:v}).catch(()=>{});if(!_)break;y=await Jt._fromGetAccountInfoResponse(e,_,v)}else y=Jt._fromJSON(e,v);m!==l&&(h=y),l=m;break}}catch{}const p=o.filter(m=>m._shouldAllowMigration);return!l._shouldAllowMigration||!p.length?new Ri(l,e,i):(l=p[0],h&&await l._set(u,h.toJSON()),await Promise.all(n.map(async m=>{if(m!==l)try{await m._remove(u)}catch{}})),new Ri(l,e,i))}}/**
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
 */function Ng(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(jy(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Uy(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Hy(e))return"Blackberry";if(zy(e))return"Webos";if(Fy(e))return"Safari";if((e.includes("chrome/")||By(e))&&!e.includes("edge/"))return"Chrome";if($y(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=t.match(n);if(i?.length===2)return i[1]}return"Other"}function Uy(t=pt()){return/firefox\//i.test(t)}function Fy(t=pt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function By(t=pt()){return/crios\//i.test(t)}function jy(t=pt()){return/iemobile/i.test(t)}function $y(t=pt()){return/android/i.test(t)}function Hy(t=pt()){return/blackberry/i.test(t)}function zy(t=pt()){return/webos/i.test(t)}function nh(t=pt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function BI(t=pt()){var e;return nh(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function jI(){return JC()&&document.documentMode===10}function Wy(t=pt()){return nh(t)||$y(t)||zy(t)||Hy(t)||/windows phone/i.test(t)||jy(t)}/**
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
 */function Vy(t,e=[]){let n;switch(t){case"Browser":n=Ng(pt());break;case"Worker":n=`${Ng(pt())}-${t}`;break;default:n=t}const i=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Co}/${i}`}/**
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
 */class $I{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const i=l=>new Promise((u,h)=>{try{const p=e(l);u(p)}catch(p){h(p)}});i.onAbort=n,this.queue.push(i);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const i of this.queue)await i(e),i.onAbort&&n.push(i.onAbort)}catch(i){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */async function HI(t,e={}){return _r(t,"GET","/v2/passwordPolicy",gr(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
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
 */const zI=6;class WI{constructor(e){var n,i,o,l;const u=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=u.minPasswordLength)!==null&&n!==void 0?n:zI,u.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=u.maxPasswordLength),u.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=u.containsLowercaseCharacter),u.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=u.containsUppercaseCharacter),u.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=u.containsNumericCharacter),u.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=u.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(o=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&o!==void 0?o:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,i,o,l,u,h;const p={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,p),this.validatePasswordCharacterOptions(e,p),p.isValid&&(p.isValid=(n=p.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),p.isValid&&(p.isValid=(i=p.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),p.isValid&&(p.isValid=(o=p.containsLowercaseLetter)!==null&&o!==void 0?o:!0),p.isValid&&(p.isValid=(l=p.containsUppercaseLetter)!==null&&l!==void 0?l:!0),p.isValid&&(p.isValid=(u=p.containsNumericCharacter)!==null&&u!==void 0?u:!0),p.isValid&&(p.isValid=(h=p.containsNonAlphanumericCharacter)!==null&&h!==void 0?h:!0),p}validatePasswordLengthOptions(e,n){const i=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;i&&(n.meetsMinPasswordLength=e.length>=i),o&&(n.meetsMaxPasswordLength=e.length<=o)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let i;for(let o=0;o<e.length;o++)i=e.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,n,i,o,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
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
 */class VI{constructor(e,n,i,o){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=i,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Rg(this),this.idTokenSubscription=new Rg(this),this.beforeStateQueue=new $I(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ay,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=In(n)),this._initializationPromise=this.queue(async()=>{var i,o,l;if(!this._deleted&&(this.persistenceManager=await Ri.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((o=this._popupRedirectResolver)===null||o===void 0)&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await sl(this,{idToken:e}),i=await Jt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(i)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Bt(this.app)){const u=this.app.settings.authIdToken;return u?new Promise(h=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(u).then(h,h))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let o=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=o?._redirectEventId,p=await this.tryRedirectSignIn(e);(!u||u===h)&&p?.user&&(o=p.user,l=!0)}if(!o)return this.directlySetCurrentUser(null);if(!o._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(o)}catch(u){o=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return o?this.reloadAndSetCurrentUserOrClear(o):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===o._redirectEventId?this.directlySetCurrentUser(o):this.reloadAndSetCurrentUserOrClear(o)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ol(e)}catch(n){if(n?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=SI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Bt(this.app))return Promise.reject(kn(this));const n=e?Kr(e):null;return n&&ee(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Bt(this.app)?Promise.reject(kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Bt(this.app)?Promise.reject(kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(In(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await HI(this),n=new WI(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Eo("auth","Firebase",e())}onAuthStateChanged(e,n,i){return this.registerStateListener(this.authStateSubscription,e,n,i)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,i){return this.registerStateListener(this.idTokenSubscription,e,n,i)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(i.tenantId=this.tenantId),await FI(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const i=await this.getOrInitRedirectPersistenceManager(n);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&In(e)||this._popupRedirectResolver;ee(n,this,"argument-error"),this.redirectPersistenceManager=await Ri.create(this,[In(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,i;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,i,o){if(this._deleted)return()=>{};const l=typeof n=="function"?n:n.next.bind(n);let u=!1;const h=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(h,this,"internal-error"),h.then(()=>{u||l(this.currentUser)}),typeof n=="function"){const p=e.addObserver(n,i,o);return()=>{u=!0,p()}}else{const p=e.addObserver(n);return()=>{u=!0,p()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vy(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(n["X-Firebase-Client"]=i);const o=await this._getAppCheckToken();return o&&(n["X-Firebase-AppCheck"]=o),n}async _getAppCheckToken(){var e;if(Bt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n?.error&&vI(`Error while retrieving App Check token: ${n.error}`),n?.token}}function yr(t){return Kr(t)}class Rg{constructor(e){this.auth=e,this.observer=null,this.addObserver=sS(n=>this.observer=n)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Al={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function GI(t){Al=t}function Gy(t){return Al.loadJS(t)}function KI(){return Al.recaptchaEnterpriseScript}function qI(){return Al.gapiScript}function YI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class QI{constructor(){this.enterprise=new XI}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class XI{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const JI="recaptcha-enterprise",Ky="NO_RECAPTCHA";class ZI{constructor(e){this.type=JI,this.auth=yr(e)}async verify(e="verify",n=!1){async function i(l){if(!n){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(u,h)=>{bI(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(p=>{if(p.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const m=new xI(p);return l.tenantId==null?l._agentRecaptchaConfig=m:l._tenantRecaptchaConfigs[l.tenantId]=m,u(m.siteKey)}}).catch(p=>{h(p)})})}function o(l,u,h){const p=window.grecaptcha;Sg(p)?p.enterprise.ready(()=>{p.enterprise.execute(l,{action:e}).then(m=>{u(m)}).catch(()=>{u(Ky)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new QI().execute("siteKey",{action:"verify"}):new Promise((l,u)=>{i(this.auth).then(h=>{if(!n&&Sg(window.grecaptcha))o(h,l,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}let p=KI();p.length!==0&&(p+=h),Gy(p).then(()=>{o(h,l,u)}).catch(m=>{u(m)})}}).catch(h=>{u(h)})})}}async function xg(t,e,n,i=!1,o=!1){const l=new ZI(t);let u;if(o)u=Ky;else try{u=await l.verify(n)}catch{u=await l.verify(n,!0)}const h=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in h){const p=h.phoneEnrollmentInfo.phoneNumber,m=h.phoneEnrollmentInfo.recaptchaToken;Object.assign(h,{phoneEnrollmentInfo:{phoneNumber:p,recaptchaToken:m,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in h){const p=h.phoneSignInInfo.recaptchaToken;Object.assign(h,{phoneSignInInfo:{recaptchaToken:p,captchaResponse:u,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return h}return i?Object.assign(h,{captchaResp:u}):Object.assign(h,{captchaResponse:u}),Object.assign(h,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(h,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),h}async function Id(t,e,n,i,o){var l;if(!((l=t._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const u=await xg(t,e,n,n==="getOobCode");return i(t,u)}else return i(t,e).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const h=await xg(t,e,n,n==="getOobCode");return i(t,h)}else return Promise.reject(u)})}/**
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
 */function eT(t,e){const n=ky(t,"auth");if(n.isInitialized()){const o=n.getImmediate(),l=n.getOptions();if(Pi(l,e??{}))return o;$t(o,"already-initialized")}return n.initialize({options:e})}function tT(t,e){const n=e?.persistence||[],i=(Array.isArray(n)?n:[n]).map(In);e?.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(i,e?.popupRedirectResolver)}function nT(t,e,n){const i=yr(t);ee(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const o=!1,l=qy(e),{host:u,port:h}=rT(e),p=h===null?"":`:${h}`,m={url:`${l}//${u}${p}/`},v=Object.freeze({host:u,port:h,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!i._canInitEmulator){ee(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),ee(Pi(m,i.config.emulator)&&Pi(v,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=m,i.emulatorConfig=v,i.settings.appVerificationDisabledForTesting=!0,bl(u)?(WC(`${l}//${u}${p}`),KC("Auth",!0)):iT()}function qy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function rT(t){const e=qy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(i);if(o){const l=o[1];return{host:l,port:bg(i.substr(l.length+1))}}else{const[l,u]=i.split(":");return{host:l,port:bg(u)}}}function bg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function iT(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class rh{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Sn("not implemented")}_getIdTokenResponse(e){return Sn("not implemented")}_linkToIdToken(e,n){return Sn("not implemented")}_getReauthenticationResolver(e){return Sn("not implemented")}}async function sT(t,e){return _r(t,"POST","/v1/accounts:signUp",e)}/**
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
 */async function oT(t,e){return Io(t,"POST","/v1/accounts:signInWithPassword",gr(t,e))}/**
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
 */async function aT(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}async function lT(t,e){return Io(t,"POST","/v1/accounts:signInWithEmailLink",gr(t,e))}/**
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
 */class so extends rh{constructor(e,n,i,o=null){super("password",i),this._email=e,this._password=n,this._tenantId=o}static _fromEmailAndPassword(e,n){return new so(e,n,"password")}static _fromEmailAndCode(e,n,i=null){return new so(e,n,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n?.email&&n?.password){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Id(e,n,"signInWithPassword",oT);case"emailLink":return aT(e,{email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const i={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Id(e,i,"signUpPassword",sT);case"emailLink":return lT(e,{idToken:n,email:this._email,oobCode:this._password});default:$t(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function xi(t,e){return Io(t,"POST","/v1/accounts:signInWithIdp",gr(t,e))}/**
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
 */const cT="http://localhost";class jr extends rh{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new jr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):$t("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:o}=n,l=Xd(n,["providerId","signInMethod"]);if(!i||!o)return null;const u=new jr(i,o);return u.idToken=l.idToken||void 0,u.accessToken=l.accessToken||void 0,u.secret=l.secret,u.nonce=l.nonce,u.pendingToken=l.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return xi(e,n)}_linkToIdToken(e,n){const i=this.buildRequest();return i.idToken=n,xi(e,i)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,xi(e,n)}buildRequest(){const e={requestUri:cT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=wo(n)}return e}}/**
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
 */function uT(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function dT(t){const e=js($s(t)).link,n=e?js($s(e)).deep_link_id:null,i=js($s(t)).deep_link_id;return(i?js($s(i)).link:null)||i||n||e||t}class ih{constructor(e){var n,i,o,l,u,h;const p=js($s(e)),m=(n=p.apiKey)!==null&&n!==void 0?n:null,v=(i=p.oobCode)!==null&&i!==void 0?i:null,y=uT((o=p.mode)!==null&&o!==void 0?o:null);ee(m&&v&&y,"argument-error"),this.apiKey=m,this.operation=y,this.code=v,this.continueUrl=(l=p.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(u=p.lang)!==null&&u!==void 0?u:null,this.tenantId=(h=p.tenantId)!==null&&h!==void 0?h:null}static parseLink(e){const n=dT(e);try{return new ih(n)}catch{return null}}}/**
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
 */class zi{constructor(){this.providerId=zi.PROVIDER_ID}static credential(e,n){return so._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const i=ih.parseLink(n);return ee(i,"argument-error"),so._fromEmailAndCode(e,i.code,i.tenantId)}}zi.PROVIDER_ID="password";zi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";zi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class sh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class To extends sh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class er extends To{constructor(){super("facebook.com")}static credential(e){return jr._fromParams({providerId:er.PROVIDER_ID,signInMethod:er.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return er.credentialFromTaggedObject(e)}static credentialFromError(e){return er.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return er.credential(e.oauthAccessToken)}catch{return null}}}er.FACEBOOK_SIGN_IN_METHOD="facebook.com";er.PROVIDER_ID="facebook.com";/**
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
 */class En extends To{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return jr._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return En.credentialFromTaggedObject(e)}static credentialFromError(e){return En.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:i}=e;if(!n&&!i)return null;try{return En.credential(n,i)}catch{return null}}}En.GOOGLE_SIGN_IN_METHOD="google.com";En.PROVIDER_ID="google.com";/**
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
 */class tr extends To{constructor(){super("github.com")}static credential(e){return jr._fromParams({providerId:tr.PROVIDER_ID,signInMethod:tr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tr.credentialFromTaggedObject(e)}static credentialFromError(e){return tr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tr.credential(e.oauthAccessToken)}catch{return null}}}tr.GITHUB_SIGN_IN_METHOD="github.com";tr.PROVIDER_ID="github.com";/**
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
 */class nr extends To{constructor(){super("twitter.com")}static credential(e,n){return jr._fromParams({providerId:nr.PROVIDER_ID,signInMethod:nr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return nr.credentialFromTaggedObject(e)}static credentialFromError(e){return nr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:i}=e;if(!n||!i)return null;try{return nr.credential(n,i)}catch{return null}}}nr.TWITTER_SIGN_IN_METHOD="twitter.com";nr.PROVIDER_ID="twitter.com";/**
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
 */async function hT(t,e){return Io(t,"POST","/v1/accounts:signUp",gr(t,e))}/**
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
 */class $r{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,i,o=!1){const l=await Jt._fromIdTokenResponse(e,i,o),u=Ag(i);return new $r({user:l,providerId:u,_tokenResponse:i,operationType:n})}static async _forOperation(e,n,i){await e._updateTokensIfNecessary(i,!0);const o=Ag(i);return new $r({user:e,providerId:o,_tokenResponse:i,operationType:n})}}function Ag(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class al extends Hi{constructor(e,n,i,o){var l;super(n.code,n.message),this.operationType=i,this.user=o,Object.setPrototypeOf(this,al.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:n.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,n,i,o){return new al(e,n,i,o)}}function Yy(t,e,n,i){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?al._fromErrorAndOperation(t,l,e,i):l})}async function fT(t,e,n=!1){const i=await io(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $r._forOperation(t,"link",i)}/**
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
 */async function pT(t,e,n=!1){const{auth:i}=t;if(Bt(i.app))return Promise.reject(kn(i));const o="reauthenticate";try{const l=await io(t,Yy(i,o,e,t),n);ee(l.idToken,i,"internal-error");const u=th(l.idToken);ee(u,i,"internal-error");const{sub:h}=u;return ee(t.uid===h,i,"user-mismatch"),$r._forOperation(t,o,l)}catch(l){throw l?.code==="auth/user-not-found"&&$t(i,"user-mismatch"),l}}/**
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
 */async function Qy(t,e,n=!1){if(Bt(t.app))return Promise.reject(kn(t));const i="signIn",o=await Yy(t,i,e),l=await $r._fromIdTokenResponse(t,i,o);return n||await t._updateCurrentUser(l.user),l}async function mT(t,e){return Qy(yr(t),e)}/**
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
 */async function Xy(t){const e=yr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function gT(t,e,n){if(Bt(t.app))return Promise.reject(kn(t));const i=yr(t),u=await Id(i,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",hT).catch(p=>{throw p.code==="auth/password-does-not-meet-requirements"&&Xy(t),p}),h=await $r._fromIdTokenResponse(i,"signIn",u);return await i._updateCurrentUser(h.user),h}function _T(t,e,n){return Bt(t.app)?Promise.reject(kn(t)):mT(Kr(t),zi.credential(e,n)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&Xy(t),i})}function yT(t,e,n,i){return Kr(t).onIdTokenChanged(e,n,i)}function vT(t,e,n){return Kr(t).beforeAuthStateChanged(e,n)}const ll="__sak";/**
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
 */class Jy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ll,"1"),this.storage.removeItem(ll),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ET=1e3,wT=10;class Zy extends Jy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Wy(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const i=this.storage.getItem(n),o=this.localCache[n];i!==o&&e(n,o,i)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,h,p)=>{this.notifyListeners(u,p)});return}const i=e.key;n?this.detachListener():this.stopPolling();const o=()=>{const u=this.storage.getItem(i);!n&&this.localCache[i]===u||this.notifyListeners(i,u)},l=this.storage.getItem(i);jI()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(o,wT):o()}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:i}),!0)})},ET)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Zy.type="LOCAL";const CT=Zy;/**
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
 */class ev extends Jy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ev.type="SESSION";const tv=ev;/**
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
 */function ST(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Pl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(o=>o.isListeningto(e));if(n)return n;const i=new Pl(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:i,eventType:o,data:l}=n.data,u=this.handlersMap[o];if(!u?.size)return;n.ports[0].postMessage({status:"ack",eventId:i,eventType:o});const h=Array.from(u).map(async m=>m(n.origin,l)),p=await ST(h);n.ports[0].postMessage({status:"done",eventId:i,eventType:o,response:p})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Pl.receivers=[];/**
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
 */function oh(t="",e=10){let n="";for(let i=0;i<e;i++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class IT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,i=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let l,u;return new Promise((h,p)=>{const m=oh("",20);o.port1.start();const v=setTimeout(()=>{p(new Error("unsupported_event"))},i);u={messageChannel:o,onMessage(y){const _=y;if(_.data.eventId===m)switch(_.data.status){case"ack":clearTimeout(v),l=setTimeout(()=>{p(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),h(_.data.response);break;default:clearTimeout(v),clearTimeout(l),p(new Error("invalid_response"));break}}},this.handlers.add(u),o.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:m,data:n},[o.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function un(){return window}function TT(t){un().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function nv(){return typeof un().WorkerGlobalScope<"u"&&typeof un().importScripts=="function"}async function kT(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function NT(){var t;return((t=navigator?.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function RT(){return nv()?self:null}/**
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
 */const rv="firebaseLocalStorageDb",xT=1,cl="firebaseLocalStorage",iv="fbase_key";class ko{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ol(t,e){return t.transaction([cl],e?"readwrite":"readonly").objectStore(cl)}function bT(){const t=indexedDB.deleteDatabase(rv);return new ko(t).toPromise()}function Td(){const t=indexedDB.open(rv,xT);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const i=t.result;try{i.createObjectStore(cl,{keyPath:iv})}catch(o){n(o)}}),t.addEventListener("success",async()=>{const i=t.result;i.objectStoreNames.contains(cl)?e(i):(i.close(),await bT(),e(await Td()))})})}async function Pg(t,e,n){const i=Ol(t,!0).put({[iv]:e,value:n});return new ko(i).toPromise()}async function AT(t,e){const n=Ol(t,!1).get(e),i=await new ko(n).toPromise();return i===void 0?null:i.value}function Og(t,e){const n=Ol(t,!0).delete(e);return new ko(n).toPromise()}const PT=800,OT=3;class sv{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Td(),this.db)}async _withRetries(e){let n=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(n++>OT)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return nv()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Pl._getInstance(RT()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await kT(),!this.activeServiceWorker)return;this.sender=new IT(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((n=i[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||NT()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Td();return await Pg(e,ll,"1"),await Og(e,ll),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(i=>Pg(i,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(i=>AT(i,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Og(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(o=>{const l=Ol(o,!1).getAll();return new ko(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],i=new Set;if(e.length!==0)for(const{fbase_key:o,value:l}of e)i.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(l)&&(this.notifyListeners(o,l),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!i.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(e,n){this.localCache[e]=n;const i=this.listeners[e];if(i)for(const o of Array.from(i))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),PT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sv.type="LOCAL";const DT=sv;new So(3e4,6e4);/**
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
 */function ov(t,e){return e?In(e):(ee(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class ah extends rh{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return xi(e,this._buildIdpRequest())}_linkToIdToken(e,n){return xi(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return xi(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function LT(t){return Qy(t.auth,new ah(t),t.bypassAuthState)}function MT(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),pT(n,new ah(t),t.bypassAuthState)}async function UT(t){const{auth:e,user:n}=t;return ee(n,e,"internal-error"),fT(n,new ah(t),t.bypassAuthState)}/**
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
 */class av{constructor(e,n,i,o,l=!1){this.auth=e,this.resolver=i,this.user=o,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:i,postBody:o,tenantId:l,error:u,type:h}=e;if(u){this.reject(u);return}const p={auth:this.auth,requestUri:n,sessionId:i,tenantId:l||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(p))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return LT;case"linkViaPopup":case"linkViaRedirect":return UT;case"reauthViaPopup":case"reauthViaRedirect":return MT;default:$t(this.auth,"internal-error")}}resolve(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){bn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FT=new So(2e3,1e4);async function lv(t,e,n){if(Bt(t.app))return Promise.reject(en(t,"operation-not-supported-in-this-environment"));const i=yr(t);EI(t,e,sh);const o=ov(i,n);return new Mr(i,"signInViaPopup",e,o).executeNotNull()}class Mr extends av{constructor(e,n,i,o,l){super(e,n,o,l),this.provider=i,this.authWindow=null,this.pollId=null,Mr.currentPopupAction&&Mr.currentPopupAction.cancel(),Mr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){bn(this.filter.length===1,"Popup operations only handle one event");const e=oh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(en(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(en(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Mr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,i;if(!((i=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(en(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FT.get())};e()}}Mr.currentPopupAction=null;/**
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
 */const BT="pendingRedirect",Za=new Map;class jT extends av{constructor(e,n,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,i),this.eventId=null}async execute(){let e=Za.get(this.auth._key());if(!e){try{const i=await $T(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(n){e=()=>Promise.reject(n)}Za.set(this.auth._key(),e)}return this.bypassAuthState||Za.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $T(t,e){const n=WT(e),i=zT(t);if(!await i._isAvailable())return!1;const o=await i._get(n)==="true";return await i._remove(n),o}function HT(t,e){Za.set(t._key(),e)}function zT(t){return In(t._redirectPersistence)}function WT(t){return Ja(BT,t.config.apiKey,t.name)}async function VT(t,e,n=!1){if(Bt(t.app))return Promise.reject(kn(t));const i=yr(t),o=ov(i,e),u=await new jT(i,o,n).execute();return u&&!n&&(delete u.user._redirectEventId,await i._persistUserIfCurrent(u.user),await i._setRedirectUser(null,e)),u}/**
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
 */const GT=10*60*1e3;class KT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(n=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var i;if(e.error&&!cv(e)){const o=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";n.onError(en(this.auth,o))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const i=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=GT&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dg(e))}saveEventToCache(e){this.cachedEventUids.add(Dg(e)),this.lastProcessedEventTime=Date.now()}}function Dg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cv({type:t,error:e}){return t==="unknown"&&e?.code==="auth/no-auth-event"}function qT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cv(t);default:return!1}}/**
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
 */async function YT(t,e={}){return _r(t,"GET","/v1/projects",e)}/**
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
 */const QT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XT=/^https?/;async function JT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YT(t);for(const n of e)try{if(ZT(n))return}catch{}$t(t,"unauthorized-domain")}function ZT(t){const e=Cd(),{protocol:n,hostname:i}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&i===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===i}if(!XT.test(n))return!1;if(QT.test(t))return i===t;const o=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const ek=new So(3e4,6e4);function Lg(){const t=un().___jsl;if(t?.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function tk(t){return new Promise((e,n)=>{var i,o,l;function u(){Lg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Lg(),n(en(t,"network-request-failed"))},timeout:ek.get()})}if(!((o=(i=un().gapi)===null||i===void 0?void 0:i.iframes)===null||o===void 0)&&o.Iframe)e(gapi.iframes.getContext());else if(!((l=un().gapi)===null||l===void 0)&&l.load)u();else{const h=YI("iframefcb");return un()[h]=()=>{gapi.load?u():n(en(t,"network-request-failed"))},Gy(`${qI()}?onload=${h}`).catch(p=>n(p))}}).catch(e=>{throw el=null,e})}let el=null;function nk(t){return el=el||tk(t),el}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const rk=new So(5e3,15e3),ik="__/auth/iframe",sk="emulator/auth/iframe",ok={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ak=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lk(t){const e=t.config;ee(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?eh(e,sk):`https://${t.config.authDomain}/${ik}`,i={apiKey:e.apiKey,appName:t.name,v:Co},o=ak.get(t.config.apiHost);o&&(i.eid=o);const l=t._getFrameworks();return l.length&&(i.fw=l.join(",")),`${n}?${wo(i).slice(1)}`}async function ck(t){const e=await nk(t),n=un().gapi;return ee(n,t,"internal-error"),e.open({where:document.body,url:lk(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ok,dontclear:!0},i=>new Promise(async(o,l)=>{await i.restyle({setHideOnLeave:!1});const u=en(t,"network-request-failed"),h=un().setTimeout(()=>{l(u)},rk.get());function p(){un().clearTimeout(h),o(i)}i.ping(p).then(p,()=>{l(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const uk={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dk=500,hk=600,fk="_blank",pk="http://localhost";class Mg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function mk(t,e,n,i=dk,o=hk){const l=Math.max((window.screen.availHeight-o)/2,0).toString(),u=Math.max((window.screen.availWidth-i)/2,0).toString();let h="";const p=Object.assign(Object.assign({},uk),{width:i.toString(),height:o.toString(),top:l,left:u}),m=pt().toLowerCase();n&&(h=By(m)?fk:n),Uy(m)&&(e=e||pk,p.scrollbars="yes");const v=Object.entries(p).reduce((_,[I,b])=>`${_}${I}=${b},`,"");if(BI(m)&&h!=="_self")return gk(e||"",h),new Mg(null);const y=window.open(e||"",h,v);ee(y,t,"popup-blocked");try{y.focus()}catch{}return new Mg(y)}function gk(t,e){const n=document.createElement("a");n.href=t,n.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}/**
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
 */const _k="__/auth/handler",yk="emulator/auth/handler",vk=encodeURIComponent("fac");async function Ug(t,e,n,i,o,l){ee(t.config.authDomain,t,"auth-domain-config-required"),ee(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:i,v:Co,eventId:o};if(e instanceof sh){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",iS(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,y]of Object.entries({}))u[v]=y}if(e instanceof To){const v=e.getScopes().filter(y=>y!=="");v.length>0&&(u.scopes=v.join(","))}t.tenantId&&(u.tid=t.tenantId);const h=u;for(const v of Object.keys(h))h[v]===void 0&&delete h[v];const p=await t._getAppCheckToken(),m=p?`#${vk}=${encodeURIComponent(p)}`:"";return`${Ek(t)}?${wo(h).slice(1)}${m}`}function Ek({config:t}){return t.emulator?eh(t,yk):`https://${t.authDomain}/${_k}`}/**
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
 */const nd="webStorageSupport";class wk{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=tv,this._completeRedirectFn=VT,this._overrideRedirectResult=HT}async _openPopup(e,n,i,o){var l;bn((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const u=await Ug(e,n,i,Cd(),o);return mk(e,u,oh())}async _openRedirect(e,n,i,o){await this._originValidation(e);const l=await Ug(e,n,i,Cd(),o);return TT(l),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:o,promise:l}=this.eventManagers[n];return o?Promise.resolve(o):(bn(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[n]={promise:i},i.catch(()=>{delete this.eventManagers[n]}),i}async initAndGetManager(e){const n=await ck(e),i=new KT(e);return n.register("authEvent",o=>(ee(o?.authEvent,e,"invalid-auth-event"),{status:i.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=n,i}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(nd,{type:nd},o=>{var l;const u=(l=o?.[0])===null||l===void 0?void 0:l[nd];u!==void 0&&n(!!u),$t(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Wy()||Fy()||nh()}}const Ck=wk;var Fg="@firebase/auth",Bg="1.10.8";/**
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
 */class Sk{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(i=>{e(i?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Ik(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Tk(t){no(new Oi("auth",(e,{options:n})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=i.options;ee(u&&!u.includes(":"),"invalid-api-key",{appName:i.name});const p={apiKey:u,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vy(t)},m=new VI(i,o,l,p);return tT(m,n),m},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,i)=>{e.getProvider("auth-internal").initialize()})),no(new Oi("auth-internal",e=>{const n=yr(e.getProvider("auth").getImmediate());return(i=>new Sk(i))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),ki(Fg,Bg,Ik(t)),ki(Fg,Bg,"esm2017")}/**
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
 */const kk=5*60,Nk=Ey("authIdTokenMaxAge")||kk;let jg=null;const Rk=t=>async e=>{const n=e&&await e.getIdTokenResult(),i=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(i&&i>Nk)return;const o=n?.token;jg!==o&&(jg=o,await fetch(t,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function xk(t=sI()){const e=ky(t,"auth");if(e.isInitialized())return e.getImmediate();const n=eT(t,{popupRedirectResolver:Ck,persistence:[DT,CT,tv]}),i=Ey("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const u=Rk(l.toString());vT(n,u,()=>u(n.currentUser)),yT(n,h=>u(h))}}const o=HC("auth");return o&&nT(n,`http://${o}`),n}function bk(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}GI({loadJS(t){return new Promise((e,n)=>{const i=document.createElement("script");i.setAttribute("src",t),i.onload=e,i.onerror=o=>{const l=en("internal-error");l.customData=o,n(l)},i.type="text/javascript",i.charset="UTF-8",bk().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Tk("Browser");const Ak=()=>{};var $g={};/**
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
 */const uv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Pk=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],u=t[n++],h=t[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],u=t[n++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},dv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<t.length;o+=3){const l=t[o],u=o+1<t.length,h=u?t[o+1]:0,p=o+2<t.length,m=p?t[o+2]:0,v=l>>2,y=(l&3)<<4|h>>4;let _=(h&15)<<2|m>>6,I=m&63;p||(I=64,u||(_=64)),i.push(n[v],n[y],n[_],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(uv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Pk(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const y=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||m==null||y==null)throw new Ok;const _=l<<2|h>>4;if(i.push(_),m!==64){const I=h<<4&240|m>>2;if(i.push(I),y!==64){const b=m<<6&192|y;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let Ok=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Dk=function(t){const e=uv(t);return dv.encodeByteArray(e,!0)},hv=function(t){return Dk(t).replace(/\./g,"")},Lk=function(t){try{return dv.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Mk(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Uk=()=>Mk().__FIREBASE_DEFAULTS__,Fk=()=>{if(typeof process>"u"||typeof $g>"u")return;const t=$g.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Bk=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Lk(t[1]);return e&&JSON.parse(e)},jk=()=>{try{return Ak()||Uk()||Fk()||Bk()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},fv=()=>jk()?.config;/**
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
 */let $k=class{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}};function Hk(){try{return typeof indexedDB=="object"}catch{return!1}}function zk(){return new Promise((t,e)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(i);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(i),t(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{e(o.error?.message||"")}}catch(n){e(n)}})}/**
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
 */const Wk="FirebaseError";let lh=class pv extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=Wk,Object.setPrototypeOf(this,pv.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mv.prototype.create)}},mv=class{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?Vk(l,i):"Error",h=`${this.serviceName}: ${u} (${o}).`;return new lh(o,h,i)}};function Vk(t,e){return t.replace(Gk,(n,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const Gk=/\{\$([^}]+)}/g;function kd(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const l=t[o],u=e[o];if(Hg(l)&&Hg(u)){if(!kd(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function Hg(t){return t!==null&&typeof t=="object"}let ul=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */const Dr="[DEFAULT]";/**
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
 */class Kk{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const i=new $k;if(this.instancesDeferred.set(n,i),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&i.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){const n=this.normalizeInstanceIdentifier(e?.identifier),i=e?.optional??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Yk(e))try{this.getOrInitializeService({instanceIdentifier:Dr})}catch{}for(const[n,i]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const l=this.getOrInitializeService({instanceIdentifier:o});i.resolve(l)}catch{}}}}clearInstance(e=Dr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Dr){return this.instances.has(e)}getOptions(e=Dr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:i,options:n});for(const[l,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(l);i===h&&u.resolve(o)}return o}onInit(e,n){const i=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(i)??new Set;o.add(e),this.onInitCallbacks.set(i,o);const l=this.instances.get(i);return l&&e(l,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const i=this.onInitCallbacks.get(n);if(i)for(const o of i)try{o(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:qk(e),options:n}),this.instances.set(e,i),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Dr){return this.component?this.component.multipleInstances?e:Dr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qk(t){return t===Dr?void 0:t}function Yk(t){return t.instantiationMode==="EAGER"}/**
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
 */class Qk{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Kk(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const Xk={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},Jk=xe.INFO,Zk={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},eN=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),o=Zk[e];if(o)console[o](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};let tN=class{constructor(e){this.name=e,this._logLevel=Jk,this._logHandler=eN,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Xk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}};/**
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
 */class nN{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(rN(n)){const i=n.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(n=>n).join(" ")}}function rN(t){return t.getComponent()?.type==="VERSION"}const Nd="@firebase/app",zg="0.14.0";/**
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
 */const An=new tN("@firebase/app"),iN="@firebase/app-compat",sN="@firebase/analytics-compat",oN="@firebase/analytics",aN="@firebase/app-check-compat",lN="@firebase/app-check",cN="@firebase/auth",uN="@firebase/auth-compat",dN="@firebase/database",hN="@firebase/data-connect",fN="@firebase/database-compat",pN="@firebase/functions",mN="@firebase/functions-compat",gN="@firebase/installations",_N="@firebase/installations-compat",yN="@firebase/messaging",vN="@firebase/messaging-compat",EN="@firebase/performance",wN="@firebase/performance-compat",CN="@firebase/remote-config",SN="@firebase/remote-config-compat",IN="@firebase/storage",TN="@firebase/storage-compat",kN="@firebase/firestore",NN="@firebase/ai",RN="@firebase/firestore-compat",xN="firebase",bN="12.0.0";/**
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
 */const Rd="[DEFAULT]",AN={[Nd]:"fire-core",[iN]:"fire-core-compat",[oN]:"fire-analytics",[sN]:"fire-analytics-compat",[lN]:"fire-app-check",[aN]:"fire-app-check-compat",[cN]:"fire-auth",[uN]:"fire-auth-compat",[dN]:"fire-rtdb",[hN]:"fire-data-connect",[fN]:"fire-rtdb-compat",[pN]:"fire-fn",[mN]:"fire-fn-compat",[gN]:"fire-iid",[_N]:"fire-iid-compat",[yN]:"fire-fcm",[vN]:"fire-fcm-compat",[EN]:"fire-perf",[wN]:"fire-perf-compat",[CN]:"fire-rc",[SN]:"fire-rc-compat",[IN]:"fire-gcs",[TN]:"fire-gcs-compat",[kN]:"fire-fst",[RN]:"fire-fst-compat",[NN]:"fire-vertex","fire-js":"fire-js",[xN]:"fire-js-all"};/**
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
 */const dl=new Map,PN=new Map,xd=new Map;function Wg(t,e){try{t.container.addComponent(e)}catch(n){An.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function oo(t){const e=t.name;if(xd.has(e))return An.debug(`There were multiple attempts to register component ${e}.`),!1;xd.set(e,t);for(const n of dl.values())Wg(n,t);for(const n of PN.values())Wg(n,t);return!0}function gv(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _v(t){return t==null?!1:t.settings!==void 0}/**
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
 */const ON={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},cr=new mv("app","Firebase",ON);/**
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
 */class DN{constructor(e,n,i){this._isDeleted=!1,this._options={...e},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new ul("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw cr.create("app-deleted",{appName:this._name})}}/**
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
 */const yv=bN;function LN(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const i={name:Rd,automaticDataCollectionEnabled:!0,...e},o=i.name;if(typeof o!="string"||!o)throw cr.create("bad-app-name",{appName:String(o)});if(n||(n=fv()),!n)throw cr.create("no-options");const l=dl.get(o);if(l){if(kd(n,l.options)&&kd(i,l.config))return l;throw cr.create("duplicate-app",{appName:o})}const u=new Qk(o);for(const p of xd.values())u.addComponent(p);const h=new DN(n,i,u);return dl.set(o,h),h}function vv(t=Rd){const e=dl.get(t);if(!e&&t===Rd&&fv())return LN();if(!e)throw cr.create("no-app",{appName:t});return e}function Fr(t,e,n){let i=AN[t]??t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),l=e.match(/\s|\//);if(o||l){const u=[`Unable to register library "${i}" with version "${e}":`];o&&u.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&l&&u.push("and"),l&&u.push(`version name "${e}" contains illegal characters (whitespace or "/")`),An.warn(u.join(" "));return}oo(new ul(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const MN="firebase-heartbeat-database",UN=1,ao="firebase-heartbeat-store";let rd=null;function Ev(){return rd||(rd=Ty(MN,UN,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(ao)}catch(n){console.warn(n)}}}}).catch(t=>{throw cr.create("idb-open",{originalErrorMessage:t.message})})),rd}async function FN(t){try{const n=(await Ev()).transaction(ao),i=await n.objectStore(ao).get(wv(t));return await n.done,i}catch(e){if(e instanceof lh)An.warn(e.message);else{const n=cr.create("idb-get",{originalErrorMessage:e?.message});An.warn(n.message)}}}async function Vg(t,e){try{const i=(await Ev()).transaction(ao,"readwrite");await i.objectStore(ao).put(e,wv(t)),await i.done}catch(n){if(n instanceof lh)An.warn(n.message);else{const i=cr.create("idb-set",{originalErrorMessage:n?.message});An.warn(i.message)}}}function wv(t){return`${t.name}!${t.options.appId}`}/**
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
 */const BN=1024,jN=30;class $N{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new zN(n),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){try{const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Gg();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:n}),this._heartbeatsCache.heartbeats.length>jN){const o=WN(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){An.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Gg(),{heartbeatsToSend:n,unsentEntries:i}=HN(this._heartbeatsCache.heartbeats),o=hv(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),o}catch(e){return An.warn(e),""}}}function Gg(){return new Date().toISOString().substring(0,10)}function HN(t,e=BN){const n=[];let i=t.slice();for(const o of t){const l=n.find(u=>u.agent===o.agent);if(l){if(l.dates.push(o.date),Kg(n)>e){l.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Kg(n)>e){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class zN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Hk()?zk().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await FN(this.app);return n?.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const i=await this.read();return Vg(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kg(t){return hv(JSON.stringify({version:2,heartbeats:t})).length}function WN(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let i=1;i<t.length;i++)t[i].date<n&&(n=t[i].date,e=i);return e}/**
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
 */function VN(t){oo(new ul("platform-logger",e=>new nN(e),"PRIVATE")),oo(new ul("heartbeat",e=>new $N(e),"PRIVATE")),Fr(Nd,zg,t),Fr(Nd,zg,"esm2020"),Fr("fire-js","")}VN("");const GN=()=>{};var qg={};/**
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
 */const Cv={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const B=function(t,e){if(!t)throw Wi(e)},Wi=function(t){return new Error("Firebase Database ("+Cv.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Sv=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},KN=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],u=t[n++],h=t[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],u=t[n++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},ch={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<t.length;o+=3){const l=t[o],u=o+1<t.length,h=u?t[o+1]:0,p=o+2<t.length,m=p?t[o+2]:0,v=l>>2,y=(l&3)<<4|h>>4;let _=(h&15)<<2|m>>6,I=m&63;p||(I=64,u||(_=64)),i.push(n[v],n[y],n[_],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Sv(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):KN(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const y=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||m==null||y==null)throw new qN;const _=l<<2|h>>4;if(i.push(_),m!==64){const I=h<<4&240|m>>2;if(i.push(I),y!==64){const b=m<<6&192|y;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};let qN=class extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};const Iv=function(t){const e=Sv(t);return ch.encodeByteArray(e,!0)},Yg=function(t){return Iv(t).replace(/\./g,"")},bd=function(t){try{return ch.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function YN(t){return Tv(void 0,t)}function Tv(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!QN(n)||(t[n]=Tv(t[n],e[n]));return t}function QN(t){return t!=="__proto__"}/**
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
 */function XN(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const JN=()=>XN().__FIREBASE_DEFAULTS__,ZN=()=>{if(typeof process>"u"||typeof qg>"u")return;const t=qg.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},eR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&bd(t[1]);return e&&JSON.parse(e)},tR=()=>{try{return GN()||JN()||ZN()||eR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},nR=t=>{var e,n;return(n=(e=tR())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},rR=t=>{const e=nR(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]};/**
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
 */class Dl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,i)=>{n?this.reject(n):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,i))}}}/**
 * @license
 * Copyright 2025 Google LLC
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
 */function uh(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function iR(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function sR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Yg(JSON.stringify(n)),Yg(JSON.stringify(u)),""].join(".")}const Vs={};function oR(){const t={prod:[],emulator:[]};for(const e of Object.keys(Vs))Vs[e]?t.emulator.push(e):t.prod.push(e);return t}function aR(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let Qg=!1;function lR(t,e){if(typeof window>"u"||typeof document>"u"||!uh(window.location.host)||Vs[t]===e||Vs[t]||Qg)return;Vs[t]=e;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=oR().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function h(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function m(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{Qg=!0,u()},_}function v(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function y(){const _=aR(i),I=n("text"),b=document.getElementById(I)||document.createElement("span"),A=n("learnmore"),N=document.getElementById(A)||document.createElement("a"),j=n("preprendIcon"),H=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const U=_.element;h(U),v(N,A);const $=m();p(H,j),U.append(H,b,N,$),document.body.appendChild(U)}l?(b.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */function cR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(cR())}function uR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function dR(){return Cv.NODE_ADMIN===!0}/**
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
 */function lo(t){return JSON.parse(t)}function Ke(t){return JSON.stringify(t)}/**
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
 */const Nv=function(t){let e={},n={},i={},o="";try{const l=t.split(".");e=lo(bd(l[0])||""),n=lo(bd(l[1])||""),o=l[2],i=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:i,signature:o}},hR=function(t){const e=Nv(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},fR=function(t){const e=Nv(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function dn(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Di(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Xg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function hl(t,e,n){const i={};for(const o in t)Object.prototype.hasOwnProperty.call(t,o)&&(i[o]=e.call(n,t[o],o,t));return i}function Rv(t,e){if(t===e)return!0;const n=Object.keys(t),i=Object.keys(e);for(const o of n){if(!i.includes(o))return!1;const l=t[o],u=e[o];if(Jg(l)&&Jg(u)){if(!Rv(l,u))return!1}else if(l!==u)return!1}for(const o of i)if(!n.includes(o))return!1;return!0}function Jg(t){return t!==null&&typeof t=="object"}/**
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
 */function pR(t){const e=[];for(const[n,i]of Object.entries(t))Array.isArray(i)?i.forEach(o=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
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
 */class mR{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const i=this.W_;if(typeof e=="string")for(let y=0;y<16;y++)i[y]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let y=0;y<16;y++)i[y]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let y=16;y<80;y++){const _=i[y-3]^i[y-8]^i[y-14]^i[y-16];i[y]=(_<<1|_>>>31)&4294967295}let o=this.chain_[0],l=this.chain_[1],u=this.chain_[2],h=this.chain_[3],p=this.chain_[4],m,v;for(let y=0;y<80;y++){y<40?y<20?(m=h^l&(u^h),v=1518500249):(m=l^u^h,v=1859775393):y<60?(m=l&u|h&(l|u),v=2400959708):(m=l^u^h,v=3395469782);const _=(o<<5|o>>>27)+m+p+v+i[y]&4294967295;p=h,h=u,u=(l<<30|l>>>2)&4294967295,l=o,o=_}this.chain_[0]=this.chain_[0]+o&4294967295,this.chain_[1]=this.chain_[1]+l&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+h&4294967295,this.chain_[4]=this.chain_[4]+p&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const i=n-this.blockSize;let o=0;const l=this.buf_;let u=this.inbuf_;for(;o<n;){if(u===0)for(;o<=i;)this.compress_(e,o),o+=this.blockSize;if(typeof e=="string"){for(;o<n;)if(l[u]=e.charCodeAt(o),++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}else for(;o<n;)if(l[u]=e[o],++u,++o,u===this.blockSize){this.compress_(l),u=0;break}}this.inbuf_=u,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let o=this.blockSize-1;o>=56;o--)this.buf_[o]=n&255,n/=256;this.compress_(this.buf_);let i=0;for(let o=0;o<5;o++)for(let l=24;l>=0;l-=8)e[i]=this.chain_[o]>>l&255,++i;return e}}function Ll(t,e){return`${t} failed: ${e} argument `}/**
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
 */const gR=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);if(o>=55296&&o<=56319){const l=o-55296;i++,B(i<t.length,"Surrogate pair missing trail surrogate.");const u=t.charCodeAt(i)-56320;o=65536+(l<<10)+u}o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):o<65536?(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},Ml=function(t){let e=0;for(let n=0;n<t.length;n++){const i=t.charCodeAt(n);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function qr(t){return t&&t._delegate?t._delegate:t}let _R=class{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}};/**
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
 */var Te;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(Te||(Te={}));const yR={debug:Te.DEBUG,verbose:Te.VERBOSE,info:Te.INFO,warn:Te.WARN,error:Te.ERROR,silent:Te.SILENT},vR=Te.INFO,ER={[Te.DEBUG]:"log",[Te.VERBOSE]:"log",[Te.INFO]:"info",[Te.WARN]:"warn",[Te.ERROR]:"error"},wR=(t,e,...n)=>{if(e<t.logLevel)return;const i=new Date().toISOString(),o=ER[e];if(o)console[o](`[${i}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class CR{constructor(e){this.name=e,this._logLevel=vR,this._logHandler=wR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Te))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Te.DEBUG,...e),this._logHandler(this,Te.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Te.VERBOSE,...e),this._logHandler(this,Te.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Te.INFO,...e),this._logHandler(this,Te.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Te.WARN,...e),this._logHandler(this,Te.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Te.ERROR,...e),this._logHandler(this,Te.ERROR,...e)}}var Zg={};const e_="@firebase/database",t_="1.0.20";/**
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
 */let xv="";function SR(t){xv=t}/**
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
 */class IR{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ke(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:lo(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class TR{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return dn(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const bv=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new IR(e)}}catch{}return new TR},Ur=bv("localStorage"),kR=bv("sessionStorage");/**
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
 */const bi=new CR("@firebase/database"),NR=function(){let t=1;return function(){return t++}}(),Av=function(t){const e=gR(t),n=new mR;n.update(e);const i=n.digest();return ch.encodeByteArray(i)},No=function(...t){let e="";for(let n=0;n<t.length;n++){const i=t[n];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=No.apply(null,i):typeof i=="object"?e+=Ke(i):e+=i,e+=" "}return e};let Gs=null,n_=!0;const RR=function(t,e){B(!0,"Can't turn on custom loggers persistently."),bi.logLevel=Te.VERBOSE,Gs=bi.log.bind(bi)},nt=function(...t){if(n_===!0&&(n_=!1,Gs===null&&kR.get("logging_enabled")===!0&&RR()),Gs){const e=No.apply(null,t);Gs(e)}},Ro=function(t){return function(...e){nt(t,...e)}},Ad=function(...t){const e="FIREBASE INTERNAL ERROR: "+No(...t);bi.error(e)},Pn=function(...t){const e=`FIREBASE FATAL ERROR: ${No(...t)}`;throw bi.error(e),new Error(e)},ft=function(...t){const e="FIREBASE WARNING: "+No(...t);bi.warn(e)},xR=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ft("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},dh=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},bR=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Li="[MIN_NAME]",Hr="[MAX_NAME]",Yr=function(t,e){if(t===e)return 0;if(t===Li||e===Hr)return-1;if(e===Li||t===Hr)return 1;{const n=r_(t),i=r_(e);return n!==null?i!==null?n-i===0?t.length-e.length:n-i:-1:i!==null?1:t<e?-1:1}},AR=function(t,e){return t===e?0:t<e?-1:1},Ls=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ke(e))},hh=function(t){if(typeof t!="object"||t===null)return Ke(t);const e=[];for(const i in t)e.push(i);e.sort();let n="{";for(let i=0;i<e.length;i++)i!==0&&(n+=","),n+=Ke(e[i]),n+=":",n+=hh(t[e[i]]);return n+="}",n},Pv=function(t,e){const n=t.length;if(n<=e)return[t];const i=[];for(let o=0;o<n;o+=e)o+e>n?i.push(t.substring(o,n)):i.push(t.substring(o,o+e));return i};function rt(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Ov=function(t){B(!dh(t),"Invalid JSON number");const e=11,n=52,i=(1<<e-1)-1;let o,l,u,h,p;t===0?(l=0,u=0,o=1/t===-1/0?1:0):(o=t<0,t=Math.abs(t),t>=Math.pow(2,1-i)?(h=Math.min(Math.floor(Math.log(t)/Math.LN2),i),l=h+i,u=Math.round(t*Math.pow(2,n-h)-Math.pow(2,n))):(l=0,u=Math.round(t/Math.pow(2,1-i-n))));const m=[];for(p=n;p;p-=1)m.push(u%2?1:0),u=Math.floor(u/2);for(p=e;p;p-=1)m.push(l%2?1:0),l=Math.floor(l/2);m.push(o?1:0),m.reverse();const v=m.join("");let y="";for(p=0;p<64;p+=8){let _=parseInt(v.substr(p,8),2).toString(16);_.length===1&&(_="0"+_),y=y+_}return y.toLowerCase()},PR=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},OR=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DR(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const i=new Error(t+" at "+e._path.toString()+": "+n);return i.code=t.toUpperCase(),i}const LR=new RegExp("^-?(0*)\\d{1,10}$"),MR=-2147483648,UR=2147483647,r_=function(t){if(LR.test(t)){const e=Number(t);if(e>=MR&&e<=UR)return e}return null},Vi=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ft("Exception was thrown by user callback.",n),e},Math.floor(0))}},FR=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ks=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class BR{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,_v(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n?.getImmediate({optional:!0}),this.appCheck||n?.get().then(i=>this.appCheck=i)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){ft(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class jR{constructor(e,n,i){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(o=>this.auth_=o)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,i):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ft(e)}}class tl{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}tl.OWNER="owner";/**
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
 */const fh="5",Dv="v",Lv="s",Mv="r",Uv="f",Fv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bv="ls",jv="p",Pd="ac",$v="websocket",Hv="long_polling";/**
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
 */class zv{constructor(e,n,i,o,l=!1,u="",h=!1,p=!1,m=null){this.secure=n,this.namespace=i,this.webSocketOnly=o,this.nodeAdmin=l,this.persistenceKey=u,this.includeNamespaceInQueryParams=h,this.isUsingEmulator=p,this.emulatorOptions=m,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ur.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ur.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function $R(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Wv(t,e,n){B(typeof e=="string","typeof type must == string"),B(typeof n=="object","typeof params must == object");let i;if(e===$v)i=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Hv)i=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);$R(t)&&(n.ns=t.namespace);const o=[];return rt(n,(l,u)=>{o.push(l+"="+u)}),i+o.join("&")}/**
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
 */class HR{constructor(){this.counters_={}}incrementCounter(e,n=1){dn(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return YN(this.counters_)}}/**
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
 */const id={},sd={};function ph(t){const e=t.toString();return id[e]||(id[e]=new HR),id[e]}function zR(t,e){const n=t.toString();return sd[n]||(sd[n]=e()),sd[n]}/**
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
 */class WR{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let o=0;o<i.length;++o)i[o]&&Vi(()=>{this.onMessage_(i[o])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const i_="start",VR="close",GR="pLPCommand",KR="pRTLPCB",Vv="id",Gv="pw",Kv="ser",qR="cb",YR="seg",QR="ts",XR="d",JR="dframe",qv=1870,Yv=30,ZR=qv-Yv,ex=25e3,tx=3e4;class Ti{constructor(e,n,i,o,l,u,h){this.connId=e,this.repoInfo=n,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.transportSessionId=u,this.lastSessionId=h,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Ro(e),this.stats_=ph(n),this.urlFn=p=>(this.appCheckToken&&(p[Pd]=this.appCheckToken),Wv(n,Hv,p))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new WR(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(tx)),bR(()=>{if(this.isClosed_)return;this.scriptTagHolder=new mh((...l)=>{const[u,h,p,m,v]=l;if(this.incrementIncomingBytes_(l),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,u===i_)this.id=h,this.password=p;else if(u===VR)h?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(h,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+u)},(...l)=>{const[u,h]=l;this.incrementIncomingBytes_(l),this.myPacketOrderer.handleResponse(u,h)},()=>{this.onClosed_()},this.urlFn);const i={};i[i_]="t",i[Kv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[qR]=this.scriptTagHolder.uniqueCallbackIdentifier),i[Dv]=fh,this.transportSessionId&&(i[Lv]=this.transportSessionId),this.lastSessionId&&(i[Bv]=this.lastSessionId),this.applicationId&&(i[jv]=this.applicationId),this.appCheckToken&&(i[Pd]=this.appCheckToken),typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(i[Mv]=Uv);const o=this.urlFn(i);this.log_("Connecting via long-poll to "+o),this.scriptTagHolder.addTag(o,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ti.forceAllow_=!0}static forceDisallow(){Ti.forceDisallow_=!0}static isAvailable(){return Ti.forceAllow_?!0:!Ti.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!PR()&&!OR()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Iv(n),o=Pv(i,ZR);for(let l=0;l<o.length;l++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,o.length,o[l]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const i={};i[JR]="t",i[Vv]=e,i[Gv]=n,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ke(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class mh{constructor(e,n,i,o){this.onDisconnect=i,this.urlFn=o,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=NR(),window[GR+this.uniqueCallbackIdentifier]=e,window[KR+this.uniqueCallbackIdentifier]=n,this.myIFrame=mh.createIFrame_();let l="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(l='<script>document.domain="'+document.domain+'";<\/script>');const u="<html><body>"+l+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(u),this.myIFrame.doc.close()}catch(h){nt("frame writing exception"),h.stack&&nt(h.stack),nt(h)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Vv]=this.myID,e[Gv]=this.myPW,e[Kv]=this.currentSerial;let n=this.urlFn(e),i="",o=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Yv+i.length<=qv;){const u=this.pendingSegs.shift();i=i+"&"+YR+o+"="+u.seg+"&"+QR+o+"="+u.ts+"&"+XR+o+"="+u.d,o++}return n=n+i,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,i){this.pendingSegs.push({seg:e,ts:n,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const i=()=>{this.outstandingRequests.delete(n),this.newRequest_()},o=setTimeout(i,Math.floor(ex)),l=()=>{clearTimeout(o),i()};this.addTag(e,l)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const o=i.readyState;(!o||o==="loaded"||o==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),n())},i.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
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
 */const nx=16384,rx=45e3;let fl=null;typeof MozWebSocket<"u"?fl=MozWebSocket:typeof WebSocket<"u"&&(fl=WebSocket);class Xt{constructor(e,n,i,o,l,u,h){this.connId=e,this.applicationId=i,this.appCheckToken=o,this.authToken=l,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Ro(this.connId),this.stats_=ph(n),this.connURL=Xt.connectionURL_(n,u,h,o,i),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,i,o,l){const u={};return u[Dv]=fh,typeof location<"u"&&location.hostname&&Fv.test(location.hostname)&&(u[Mv]=Uv),n&&(u[Lv]=n),i&&(u[Bv]=i),o&&(u[Pd]=o),l&&(u[jv]=l),Wv(e,$v,u)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ur.set("previous_websocket_failure",!0);try{let i;dR(),this.mySock=new fl(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const o=i.message||i.data;o&&this.log_(o),this.onClosed_()}}start(){}static forceDisallow(){Xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(n);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&fl!==null&&!Xt.forceDisallow_}static previouslyFailed(){return Ur.isInMemoryStorage||Ur.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ur.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const i=lo(n);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(B(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const i=this.extractFrameCount_(n);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const n=Ke(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const i=Pv(n,nx);i.length>1&&this.sendString_(String(i.length));for(let o=0;o<i.length;o++)this.sendString_(i[o])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(rx))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xt.responsesRequiredToBeHealthy=2;Xt.healthyTimeout=3e4;/**
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
 */class co{static get ALL_TRANSPORTS(){return[Ti,Xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Xt&&Xt.isAvailable();let i=n&&!Xt.previouslyFailed();if(e.webSocketOnly&&(n||ft("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[Xt];else{const o=this.transports_=[];for(const l of co.ALL_TRANSPORTS)l&&l.isAvailable()&&o.push(l);co.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}co.globalTransportInitialized_=!1;/**
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
 */const ix=6e4,sx=5e3,ox=10*1024,ax=100*1024,od="t",s_="d",lx="s",o_="r",cx="e",a_="o",l_="a",c_="n",u_="p",ux="h";class dx{constructor(e,n,i,o,l,u,h,p,m,v){this.id=e,this.repoInfo_=n,this.applicationId_=i,this.appCheckToken_=o,this.authToken_=l,this.onMessage_=u,this.onReady_=h,this.onDisconnect_=p,this.onKill_=m,this.lastSessionId=v,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Ro("c:"+this.id+":"),this.transportManager_=new co(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,i)},Math.floor(0));const o=e.healthyTimeout||0;o>0&&(this.healthyTimeout_=Ks(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ax?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>ox?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(o)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(od in e){const n=e[od];n===l_?this.upgradeIfSecondaryHealthy_():n===o_?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===a_&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=Ls("t",e),i=Ls("d",e);if(n==="c")this.onSecondaryControl_(i);else if(n==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:u_,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:l_,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:c_,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=Ls("t",e),i=Ls("d",e);n==="c"?this.onControl_(i):n==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=Ls(od,e);if(s_ in e){const i=e[s_];if(n===ux){const o=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(o.h=this.repoInfo_.host),this.onHandshake_(o)}else if(n===c_){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let o=0;o<this.pendingDataMessages.length;++o)this.onDataMessage_(this.pendingDataMessages[o]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===lx?this.onConnectionShutdown_(i):n===o_?this.onReset_(i):n===cx?Ad("Server Error: "+i):n===a_?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ad("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,i=e.v,o=e.h;this.sessionId=e.s,this.repoInfo_.host=o,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),fh!==i&&ft("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,i),Ks(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ix))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ks(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(sx))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:u_,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ur.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Qv{put(e,n,i,o){}merge(e,n,i,o){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,i){}onDisconnectMerge(e,n,i){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */class Xv{constructor(e){this.allowedEvents_=e,this.listeners_={},B(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let o=0;o<i.length;o++)i[o].callback.apply(i[o].context,n)}}on(e,n,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:i});const o=this.getInitialEvent(e);o&&n.apply(i,o)}off(e,n,i){this.validateEventType_(e);const o=this.listeners_[e]||[];for(let l=0;l<o.length;l++)if(o[l].callback===n&&(!i||i===o[l].context)){o.splice(l,1);return}}validateEventType_(e){B(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
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
 */class pl extends Xv{static getInstance(){return new pl}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!kv()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return B(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const d_=32,h_=768;class ve{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let i=0;for(let o=0;o<this.pieces_.length;o++)this.pieces_[o].length>0&&(this.pieces_[i]=this.pieces_[o],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function pe(){return new ve("")}function oe(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function hr(t){return t.pieces_.length-t.pieceNum_}function ke(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ve(t.pieces_,e)}function gh(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function hx(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function uo(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Jv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ve(e,0)}function Fe(t,e){const n=[];for(let i=t.pieceNum_;i<t.pieces_.length;i++)n.push(t.pieces_[i]);if(e instanceof ve)for(let i=e.pieceNum_;i<e.pieces_.length;i++)n.push(e.pieces_[i]);else{const i=e.split("/");for(let o=0;o<i.length;o++)i[o].length>0&&n.push(i[o])}return new ve(n,0)}function ce(t){return t.pieceNum_>=t.pieces_.length}function ht(t,e){const n=oe(t),i=oe(e);if(n===null)return e;if(n===i)return ht(ke(t),ke(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function fx(t,e){const n=uo(t,0),i=uo(e,0);for(let o=0;o<n.length&&o<i.length;o++){const l=Yr(n[o],i[o]);if(l!==0)return l}return n.length===i.length?0:n.length<i.length?-1:1}function _h(t,e){if(hr(t)!==hr(e))return!1;for(let n=t.pieceNum_,i=e.pieceNum_;n<=t.pieces_.length;n++,i++)if(t.pieces_[n]!==e.pieces_[i])return!1;return!0}function jt(t,e){let n=t.pieceNum_,i=e.pieceNum_;if(hr(t)>hr(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[i])return!1;++n,++i}return!0}class px{constructor(e,n){this.errorPrefix_=n,this.parts_=uo(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=Ml(this.parts_[i]);Zv(this)}}function mx(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ml(e),Zv(t)}function gx(t){const e=t.parts_.pop();t.byteLength_-=Ml(e),t.parts_.length>0&&(t.byteLength_-=1)}function Zv(t){if(t.byteLength_>h_)throw new Error(t.errorPrefix_+"has a key path longer than "+h_+" bytes ("+t.byteLength_+").");if(t.parts_.length>d_)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+d_+") or object contains a cycle "+Lr(t))}function Lr(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class yh extends Xv{static getInstance(){return new yh}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}getInitialEvent(e){return B(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Ms=1e3,_x=60*5*1e3,f_=30*1e3,yx=1.3,vx=3e4,Ex="server_kill",p_=3;class Nn extends Qv{constructor(e,n,i,o,l,u,h,p){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=i,this.onConnectStatus_=o,this.onServerInfoUpdate_=l,this.authTokenProvider_=u,this.appCheckTokenProvider_=h,this.authOverride_=p,this.id=Nn.nextPersistentConnectionId_++,this.log_=Ro("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Ms,this.maxReconnectDelay_=_x,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,p)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");yh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&pl.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,i){const o=++this.requestNumber_,l={r:o,a:e,b:n};this.log_(Ke(l)),B(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(l),i&&(this.requestCBHash_[o]=i)}get(e){this.initConnection_();const n=new Dl,o={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:u=>{const h=u.d;u.s==="ok"?n.resolve(h):n.reject(h)}};this.outstandingGets_.push(o),this.outstandingGetCount_++;const l=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(l),n.promise}listen(e,n,i,o){this.initConnection_();const l=e._queryIdentifier,u=e._path.toString();this.log_("Listen called for "+u+" "+l),this.listens.has(u)||this.listens.set(u,new Map),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),B(!this.listens.get(u).has(l),"listen() called twice for same path/queryId.");const h={onComplete:o,hashFn:n,query:e,tag:i};this.listens.get(u).set(l,h),this.connected_&&this.sendListen_(h)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(i)})}sendListen_(e){const n=e.query,i=n._path.toString(),o=n._queryIdentifier;this.log_("Listen on "+i+" for "+o);const l={p:i},u="q";e.tag&&(l.q=n._queryObject,l.t=e.tag),l.h=e.hashFn(),this.sendRequest(u,l,h=>{const p=h.d,m=h.s;Nn.warnOnListenWarnings_(p,n),(this.listens.get(i)&&this.listens.get(i).get(o))===e&&(this.log_("listen response",h),m!=="ok"&&this.removeListen_(i,o),e.onComplete&&e.onComplete(m,p))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&dn(e,"w")){const i=Di(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const o='".indexOn": "'+n._queryParams.getIndex().toString()+'"',l=n._path.toString();ft(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${o} at ${l} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||fR(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=f_)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=hR(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(n,i,o=>{const l=o.s,u=o.d||"error";this.authToken_===e&&(l==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(l,u))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,i=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,i)})}unlisten(e,n){const i=e._path.toString(),o=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+o),B(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,o)&&this.connected_&&this.sendUnlisten_(i,o,e._queryObject,n)}sendUnlisten_(e,n,i,o){this.log_("Unlisten on "+e+" for "+n);const l={p:e},u="n";o&&(l.q=i,l.t=o),this.sendRequest(u,l)}onDisconnectPut(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:i})}onDisconnectMerge(e,n,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:i})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,i,o){const l={p:n,d:i};this.log_("onDisconnect "+e,l),this.sendRequest(e,l,u=>{o&&setTimeout(()=>{o(u.s,u.d)},Math.floor(0))})}put(e,n,i,o){this.putInternal("p",e,n,i,o)}merge(e,n,i,o){this.putInternal("m",e,n,i,o)}putInternal(e,n,i,o,l){this.initConnection_();const u={p:n,d:i};l!==void 0&&(u.h=l),this.outstandingPuts_.push({action:e,request:u,onComplete:o}),this.outstandingPutCount_++;const h=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(h):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,o=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,i,l=>{this.log_(n+" response",l),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),o&&o(l.s,l.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,i=>{if(i.s!=="ok"){const l=i.d;this.log_("reportStats","Error sending stats: "+l)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ke(e));const n=e.r,i=this.requestCBHash_[n];i&&(delete this.requestCBHash_[n],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ad("Unrecognized action received from server: "+Ke(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){B(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vx&&(this.reconnectDelay_=Ms),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*yx)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),o=this.id+":"+Nn.nextConnectionId_++,l=this.lastSessionId;let u=!1,h=null;const p=function(){h?h.close():(u=!0,i())},m=function(y){B(h,"sendRequest call when we're not connected not allowed."),h.sendRequest(y)};this.realtime_={close:p,sendRequest:m};const v=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[y,_]=await Promise.all([this.authTokenProvider_.getToken(v),this.appCheckTokenProvider_.getToken(v)]);u?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=y&&y.accessToken,this.appCheckToken_=_&&_.token,h=new dx(o,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,i,I=>{ft(I+" ("+this.repoInfo_.toString()+")"),this.interrupt(Ex)},l))}catch(y){this.log_("Failed to get token: "+y),u||(this.repoInfo_.nodeAdmin&&ft(y),p())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Xg(this.interruptReasons_)&&(this.reconnectDelay_=Ms,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let i;n?i=n.map(l=>hh(l)).join("$"):i="default";const o=this.removeListen_(e,i);o&&o.onComplete&&o.onComplete("permission_denied")}removeListen_(e,n){const i=new ve(e).toString();let o;if(this.listens.has(i)){const l=this.listens.get(i);o=l.get(n),l.delete(n),l.size===0&&this.listens.delete(i)}else o=void 0;return o}onAuthRevoked_(e,n){nt("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=p_&&(this.reconnectDelay_=f_,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){nt("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=p_&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+xv.replace(/\./g,"-")]=1,kv()?e["framework.cordova"]=1:uR()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=pl.getInstance().currentlyOnline();return Xg(this.interruptReasons_)&&e}}Nn.nextPersistentConnectionId_=0;Nn.nextConnectionId_=0;/**
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
 */class ae{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ae(e,n)}}/**
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
 */class Ul{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const i=new ae(Li,e),o=new ae(Li,n);return this.compare(i,o)!==0}minPost(){return ae.MIN}}/**
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
 */let Ka;class eE extends Ul{static get __EMPTY_NODE(){return Ka}static set __EMPTY_NODE(e){Ka=e}compare(e,n){return Yr(e.name,n.name)}isDefinedOn(e){throw Wi("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ae.MIN}maxPost(){return new ae(Hr,Ka)}makePost(e,n){return B(typeof e=="string","KeyIndex indexValue must always be a string."),new ae(e,Ka)}toString(){return".key"}}const Ai=new eE;/**
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
 */class qa{constructor(e,n,i,o,l=null){this.isReverse_=o,this.resultGenerator_=l,this.nodeStack_=[];let u=1;for(;!e.isEmpty();)if(e=e,u=n?i(e.key,n):1,o&&(u*=-1),u<0)this.isReverse_?e=e.left:e=e.right;else if(u===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ze{constructor(e,n,i,o,l){this.key=e,this.value=n,this.color=i??Ze.RED,this.left=o??St.EMPTY_NODE,this.right=l??St.EMPTY_NODE}copy(e,n,i,o,l){return new Ze(e??this.key,n??this.value,i??this.color,o??this.left,l??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,i){let o=this;const l=i(e,o.key);return l<0?o=o.copy(null,null,null,o.left.insert(e,n,i),null):l===0?o=o.copy(null,n,null,null,null):o=o.copy(null,null,null,null,o.right.insert(e,n,i)),o.fixUp_()}removeMin_(){if(this.left.isEmpty())return St.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let i,o;if(i=this,n(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),n(e,i.key)===0){if(i.right.isEmpty())return St.EMPTY_NODE;o=i.right.min_(),i=i.copy(o.key,o.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ze.RED=!0;Ze.BLACK=!1;class wx{copy(e,n,i,o,l){return this}insert(e,n,i){return new Ze(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class St{constructor(e,n=St.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new St(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Ze.BLACK,null,null))}remove(e){return new St(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ze.BLACK,null,null))}get(e){let n,i=this.root_;for(;!i.isEmpty();){if(n=this.comparator_(e,i.key),n===0)return i.value;n<0?i=i.left:n>0&&(i=i.right)}return null}getPredecessorKey(e){let n,i=this.root_,o=null;for(;!i.isEmpty();)if(n=this.comparator_(e,i.key),n===0){if(i.left.isEmpty())return o?o.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else n<0?i=i.left:n>0&&(o=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new qa(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new qa(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new qa(this.root_,null,this.comparator_,!0,e)}}St.EMPTY_NODE=new wx;/**
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
 */function Cx(t,e){return Yr(t.name,e.name)}function vh(t,e){return Yr(t,e)}/**
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
 */let Od;function Sx(t){Od=t}const tE=function(t){return typeof t=="number"?"number:"+Ov(t):"string:"+t},nE=function(t){if(t.isLeafNode()){const e=t.val();B(typeof e=="string"||typeof e=="number"||typeof e=="object"&&dn(e,".sv"),"Priority must be a string or number.")}else B(t===Od||t.isEmpty(),"priority of unexpected type.");B(t===Od||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let m_;class Je{static set __childrenNodeConstructor(e){m_=e}static get __childrenNodeConstructor(){return m_}constructor(e,n=Je.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,B(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),nE(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Je(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ce(e)?this:oe(e)===".priority"?this.priorityNode_:Je.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Je.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const i=oe(e);return i===null?n:n.isEmpty()&&i!==".priority"?this:(B(i!==".priority"||hr(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,Je.__childrenNodeConstructor.EMPTY_NODE.updateChild(ke(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+tE(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Ov(this.value_):e+=this.value_,this.lazyHash_=Av(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Je.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Je.__childrenNodeConstructor?-1:(B(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,i=typeof this.value_,o=Je.VALUE_TYPE_ORDER.indexOf(n),l=Je.VALUE_TYPE_ORDER.indexOf(i);return B(o>=0,"Unknown leaf type: "+n),B(l>=0,"Unknown leaf type: "+i),o===l?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:l-o}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Je.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let rE,iE;function Ix(t){rE=t}function Tx(t){iE=t}class kx extends Ul{compare(e,n){const i=e.node.getPriority(),o=n.node.getPriority(),l=i.compareTo(o);return l===0?Yr(e.name,n.name):l}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ae.MIN}maxPost(){return new ae(Hr,new Je("[PRIORITY-POST]",iE))}makePost(e,n){const i=rE(e);return new ae(n,new Je("[PRIORITY-POST]",i))}toString(){return".priority"}}const Be=new kx;/**
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
 */const Nx=Math.log(2);class Rx{constructor(e){const n=l=>parseInt(Math.log(l)/Nx,10),i=l=>parseInt(Array(l+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const o=i(this.count);this.bits_=e+1&o}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ml=function(t,e,n,i){t.sort(e);const o=function(p,m){const v=m-p;let y,_;if(v===0)return null;if(v===1)return y=t[p],_=n?n(y):y,new Ze(_,y.node,Ze.BLACK,null,null);{const I=parseInt(v/2,10)+p,b=o(p,I),A=o(I+1,m);return y=t[I],_=n?n(y):y,new Ze(_,y.node,Ze.BLACK,b,A)}},l=function(p){let m=null,v=null,y=t.length;const _=function(b,A){const N=y-b,j=y;y-=b;const H=o(N+1,j),U=t[N],$=n?n(U):U;I(new Ze($,U.node,A,null,H))},I=function(b){m?(m.left=b,m=b):(v=b,m=b)};for(let b=0;b<p.count;++b){const A=p.nextBitIsOne(),N=Math.pow(2,p.count-(b+1));A?_(N,Ze.BLACK):(_(N,Ze.BLACK),_(N,Ze.RED))}return v},u=new Rx(t.length),h=l(u);return new St(i||e,h)};/**
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
 */let ad;const Ci={};class Tn{static get Default(){return B(Ci&&Be,"ChildrenNode.ts has not been loaded"),ad=ad||new Tn({".priority":Ci},{".priority":Be}),ad}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Di(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof St?n:null}hasIndex(e){return dn(this.indexSet_,e.toString())}addIndex(e,n){B(e!==Ai,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let o=!1;const l=n.getIterator(ae.Wrap);let u=l.getNext();for(;u;)o=o||e.isDefinedOn(u.node),i.push(u),u=l.getNext();let h;o?h=ml(i,e.getCompare()):h=Ci;const p=e.toString(),m=Object.assign({},this.indexSet_);m[p]=e;const v=Object.assign({},this.indexes_);return v[p]=h,new Tn(v,m)}addToIndexes(e,n){const i=hl(this.indexes_,(o,l)=>{const u=Di(this.indexSet_,l);if(B(u,"Missing index implementation for "+l),o===Ci)if(u.isDefinedOn(e.node)){const h=[],p=n.getIterator(ae.Wrap);let m=p.getNext();for(;m;)m.name!==e.name&&h.push(m),m=p.getNext();return h.push(e),ml(h,u.getCompare())}else return Ci;else{const h=n.get(e.name);let p=o;return h&&(p=p.remove(new ae(e.name,h))),p.insert(e,e.node)}});return new Tn(i,this.indexSet_)}removeFromIndexes(e,n){const i=hl(this.indexes_,o=>{if(o===Ci)return o;{const l=n.get(e.name);return l?o.remove(new ae(e.name,l)):o}});return new Tn(i,this.indexSet_)}}/**
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
 */let Us;class te{static get EMPTY_NODE(){return Us||(Us=new te(new St(vh),null,Tn.Default))}constructor(e,n,i){this.children_=e,this.priorityNode_=n,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&nE(this.priorityNode_),this.children_.isEmpty()&&B(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Us}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?Us:n}}getChild(e){const n=oe(e);return n===null?this:this.getImmediateChild(n).getChild(ke(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(B(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const i=new ae(e,n);let o,l;n.isEmpty()?(o=this.children_.remove(e),l=this.indexMap_.removeFromIndexes(i,this.children_)):(o=this.children_.insert(e,n),l=this.indexMap_.addToIndexes(i,this.children_));const u=o.isEmpty()?Us:this.priorityNode_;return new te(o,u,l)}}updateChild(e,n){const i=oe(e);if(i===null)return n;{B(oe(e)!==".priority"||hr(e)===1,".priority must be the last token in a path");const o=this.getImmediateChild(i).updateChild(ke(e),n);return this.updateImmediateChild(i,o)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let i=0,o=0,l=!0;if(this.forEachChild(Be,(u,h)=>{n[u]=h.val(e),i++,l&&te.INTEGER_REGEXP_.test(u)?o=Math.max(o,Number(u)):l=!1}),!e&&l&&o<2*i){const u=[];for(const h in n)u[h]=n[h];return u}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+tE(this.getPriority().val())+":"),this.forEachChild(Be,(n,i)=>{const o=i.hash();o!==""&&(e+=":"+n+":"+o)}),this.lazyHash_=e===""?"":Av(e)}return this.lazyHash_}getPredecessorChildName(e,n,i){const o=this.resolveIndex_(i);if(o){const l=o.getPredecessorKey(new ae(e,n));return l?l.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ae(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const i=n.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ae(n,this.children_.get(n)):null}forEachChild(e,n){const i=this.resolveIndex_(e);return i?i.inorderTraversal(o=>n(o.name,o.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getIteratorFrom(e,o=>o);{const o=this.children_.getIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)<0;)o.getNext(),l=o.peek();return o}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const i=this.resolveIndex_(n);if(i)return i.getReverseIteratorFrom(e,o=>o);{const o=this.children_.getReverseIteratorFrom(e.name,ae.Wrap);let l=o.peek();for(;l!=null&&n.compare(l,e)>0;)o.getNext(),l=o.peek();return o}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===xo?-1:0}withIndex(e){if(e===Ai||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ai||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const i=this.getIterator(Be),o=n.getIterator(Be);let l=i.getNext(),u=o.getNext();for(;l&&u;){if(l.name!==u.name||!l.node.equals(u.node))return!1;l=i.getNext(),u=o.getNext()}return l===null&&u===null}else return!1;else return!1}}resolveIndex_(e){return e===Ai?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class xx extends te{constructor(){super(new St(vh),te.EMPTY_NODE,Tn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const xo=new xx;Object.defineProperties(ae,{MIN:{value:new ae(Li,te.EMPTY_NODE)},MAX:{value:new ae(Hr,xo)}});eE.__EMPTY_NODE=te.EMPTY_NODE;Je.__childrenNodeConstructor=te;Sx(xo);Tx(xo);/**
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
 */const bx=!0;function Ge(t,e=null){if(t===null)return te.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),B(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Je(n,Ge(e))}if(!(t instanceof Array)&&bx){const n=[];let i=!1;if(rt(t,(u,h)=>{if(u.substring(0,1)!=="."){const p=Ge(h);p.isEmpty()||(i=i||!p.getPriority().isEmpty(),n.push(new ae(u,p)))}}),n.length===0)return te.EMPTY_NODE;const l=ml(n,Cx,u=>u.name,vh);if(i){const u=ml(n,Be.getCompare());return new te(l,Ge(e),new Tn({".priority":u},{".priority":Be}))}else return new te(l,Ge(e),Tn.Default)}else{let n=te.EMPTY_NODE;return rt(t,(i,o)=>{if(dn(t,i)&&i.substring(0,1)!=="."){const l=Ge(o);(l.isLeafNode()||!l.isEmpty())&&(n=n.updateImmediateChild(i,l))}}),n.updatePriority(Ge(e))}}Ix(Ge);/**
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
 */class Ax extends Ul{constructor(e){super(),this.indexPath_=e,B(!ce(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const i=this.extractChild(e.node),o=this.extractChild(n.node),l=i.compareTo(o);return l===0?Yr(e.name,n.name):l}makePost(e,n){const i=Ge(e),o=te.EMPTY_NODE.updateChild(this.indexPath_,i);return new ae(n,o)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,xo);return new ae(Hr,e)}toString(){return uo(this.indexPath_,0).join("/")}}/**
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
 */class Px extends Ul{compare(e,n){const i=e.node.compareTo(n.node);return i===0?Yr(e.name,n.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ae.MIN}maxPost(){return ae.MAX}makePost(e,n){const i=Ge(e);return new ae(n,i)}toString(){return".value"}}const Ox=new Px;/**
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
 */function sE(t){return{type:"value",snapshotNode:t}}function Mi(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ho(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function fo(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Dx(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Eh{constructor(e){this.index_=e}updateChild(e,n,i,o,l,u){B(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const h=e.getImmediateChild(n);return h.getChild(o).equals(i.getChild(o))&&h.isEmpty()===i.isEmpty()||(u!=null&&(i.isEmpty()?e.hasChild(n)?u.trackChildChange(ho(n,h)):B(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):h.isEmpty()?u.trackChildChange(Mi(n,i)):u.trackChildChange(fo(n,i,h))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(n,i).withIndex(this.index_)}updateFullNode(e,n,i){return i!=null&&(e.isLeafNode()||e.forEachChild(Be,(o,l)=>{n.hasChild(o)||i.trackChildChange(ho(o,l))}),n.isLeafNode()||n.forEachChild(Be,(o,l)=>{if(e.hasChild(o)){const u=e.getImmediateChild(o);u.equals(l)||i.trackChildChange(fo(o,l,u))}else i.trackChildChange(Mi(o,l))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class po{constructor(e){this.indexedFilter_=new Eh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=po.getStartPost_(e),this.endPost_=po.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&i}updateChild(e,n,i,o,l,u){return this.matches(new ae(n,i))||(i=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,i,o,l,u)}updateFullNode(e,n,i){n.isLeafNode()&&(n=te.EMPTY_NODE);let o=n.withIndex(this.index_);o=o.updatePriority(te.EMPTY_NODE);const l=this;return n.forEachChild(Be,(u,h)=>{l.matches(new ae(u,h))||(o=o.updateImmediateChild(u,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,o,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Lx{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=n=>{const i=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new po(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,i,o,l,u){return this.rangedFilter_.matches(new ae(n,i))||(i=te.EMPTY_NODE),e.getImmediateChild(n).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,i,o,l,u):this.fullLimitUpdateChild_(e,n,i,l,u)}updateFullNode(e,n,i){let o;if(n.isLeafNode()||n.isEmpty())o=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){o=te.EMPTY_NODE.withIndex(this.index_);let l;this.reverse_?l=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):l=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let u=0;for(;l.hasNext()&&u<this.limit_;){const h=l.getNext();if(this.withinDirectionalStart(h))if(this.withinDirectionalEnd(h))o=o.updateImmediateChild(h.name,h.node),u++;else break;else continue}}else{o=n.withIndex(this.index_),o=o.updatePriority(te.EMPTY_NODE);let l;this.reverse_?l=o.getReverseIterator(this.index_):l=o.getIterator(this.index_);let u=0;for(;l.hasNext();){const h=l.getNext();u<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h)?u++:o=o.updateImmediateChild(h.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,o,i)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,i,o,l){let u;if(this.reverse_){const y=this.index_.getCompare();u=(_,I)=>y(I,_)}else u=this.index_.getCompare();const h=e;B(h.numChildren()===this.limit_,"");const p=new ae(n,i),m=this.reverse_?h.getFirstChild(this.index_):h.getLastChild(this.index_),v=this.rangedFilter_.matches(p);if(h.hasChild(n)){const y=h.getImmediateChild(n);let _=o.getChildAfterChild(this.index_,m,this.reverse_);for(;_!=null&&(_.name===n||h.hasChild(_.name));)_=o.getChildAfterChild(this.index_,_,this.reverse_);const I=_==null?1:u(_,p);if(v&&!i.isEmpty()&&I>=0)return l?.trackChildChange(fo(n,i,y)),h.updateImmediateChild(n,i);{l?.trackChildChange(ho(n,y));const A=h.updateImmediateChild(n,te.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(l?.trackChildChange(Mi(_.name,_.node)),A.updateImmediateChild(_.name,_.node)):A}}else return i.isEmpty()?e:v&&u(m,p)>=0?(l!=null&&(l.trackChildChange(ho(m.name,m.node)),l.trackChildChange(Mi(n,i))),h.updateImmediateChild(n,i).updateImmediateChild(m.name,te.EMPTY_NODE)):e}}/**
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
 */class wh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Be}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return B(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return B(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Li}hasEnd(){return this.endSet_}getIndexEndValue(){return B(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return B(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Hr}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return B(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Be}copy(){const e=new wh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Mx(t){return t.loadsAllData()?new Eh(t.getIndex()):t.hasLimit()?new Lx(t):new po(t)}function g_(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Be?n="$priority":t.index_===Ox?n="$value":t.index_===Ai?n="$key":(B(t.index_ instanceof Ax,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ke(n),t.startSet_){const i=t.startAfterSet_?"startAfter":"startAt";e[i]=Ke(t.indexStartValue_),t.startNameSet_&&(e[i]+=","+Ke(t.indexStartName_))}if(t.endSet_){const i=t.endBeforeSet_?"endBefore":"endAt";e[i]=Ke(t.indexEndValue_),t.endNameSet_&&(e[i]+=","+Ke(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function __(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Be&&(e.i=t.index_.toString()),e}/**
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
 */class gl extends Qv{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(B(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,i,o){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=i,this.appCheckTokenProvider_=o,this.log_=Ro("p:rest:"),this.listens_={}}listen(e,n,i,o){const l=e._path.toString();this.log_("Listen called for "+l+" "+e._queryIdentifier);const u=gl.getListenId_(e,i),h={};this.listens_[u]=h;const p=g_(e._queryParams);this.restRequest_(l+".json",p,(m,v)=>{let y=v;if(m===404&&(y=null,m=null),m===null&&this.onDataUpdate_(l,y,!1,i),Di(this.listens_,u)===h){let _;m?m===401?_="permission_denied":_="rest_error:"+m:_="ok",o(_,null)}})}unlisten(e,n){const i=gl.getListenId_(e,n);delete this.listens_[i]}get(e){const n=g_(e._queryParams),i=e._path.toString(),o=new Dl;return this.restRequest_(i+".json",n,(l,u)=>{let h=u;l===404&&(h=null,l=null),l===null?(this.onDataUpdate_(i,h,!1,null),o.resolve(h)):o.reject(new Error(h))}),o.promise}refreshAuthToken(e){}restRequest_(e,n={},i){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([o,l])=>{o&&o.accessToken&&(n.auth=o.accessToken),l&&l.token&&(n.ac=l.token);const u=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+pR(n);this.log_("Sending REST request for "+u);const h=new XMLHttpRequest;h.onreadystatechange=()=>{if(i&&h.readyState===4){this.log_("REST Response for "+u+" received. status:",h.status,"response:",h.responseText);let p=null;if(h.status>=200&&h.status<300){try{p=lo(h.responseText)}catch{ft("Failed to parse JSON response for "+u+": "+h.responseText)}i(null,p)}else h.status!==401&&h.status!==404&&ft("Got unsuccessful REST response for "+u+" Status: "+h.status),i(h.status);i=null}},h.open("GET",u,!0),h.send()})}}/**
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
 */class Ux{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function _l(){return{value:null,children:new Map}}function oE(t,e,n){if(ce(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const i=oe(e);t.children.has(i)||t.children.set(i,_l());const o=t.children.get(i);e=ke(e),oE(o,e,n)}}function Dd(t,e,n){t.value!==null?n(e,t.value):Fx(t,(i,o)=>{const l=new ve(e.toString()+"/"+i);Dd(o,l,n)})}function Fx(t,e){t.children.forEach((n,i)=>{e(i,n)})}/**
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
 */class Bx{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&rt(this.last_,(i,o)=>{n[i]=n[i]-o}),this.last_=e,n}}/**
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
 */const y_=10*1e3,jx=30*1e3,$x=5*60*1e3;class Hx{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Bx(e);const i=y_+(jx-y_)*Math.random();Ks(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),n={};let i=!1;rt(e,(o,l)=>{l>0&&dn(this.statsToReport_,o)&&(n[o]=l,i=!0)}),i&&this.server_.reportStats(n),Ks(this.reportStats_.bind(this),Math.floor(Math.random()*2*$x))}}/**
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
 */var Zt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Zt||(Zt={}));function Ch(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Sh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ih(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class yl{constructor(e,n,i){this.path=e,this.affectedTree=n,this.revert=i,this.type=Zt.ACK_USER_WRITE,this.source=Ch()}operationForChild(e){if(ce(this.path)){if(this.affectedTree.value!=null)return B(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ve(e));return new yl(pe(),n,this.revert)}}else return B(oe(this.path)===e,"operationForChild called for unrelated child."),new yl(ke(this.path),this.affectedTree,this.revert)}}/**
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
 */class mo{constructor(e,n){this.source=e,this.path=n,this.type=Zt.LISTEN_COMPLETE}operationForChild(e){return ce(this.path)?new mo(this.source,pe()):new mo(this.source,ke(this.path))}}/**
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
 */class zr{constructor(e,n,i){this.source=e,this.path=n,this.snap=i,this.type=Zt.OVERWRITE}operationForChild(e){return ce(this.path)?new zr(this.source,pe(),this.snap.getImmediateChild(e)):new zr(this.source,ke(this.path),this.snap)}}/**
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
 */class Ui{constructor(e,n,i){this.source=e,this.path=n,this.children=i,this.type=Zt.MERGE}operationForChild(e){if(ce(this.path)){const n=this.children.subtree(new ve(e));return n.isEmpty()?null:n.value?new zr(this.source,pe(),n.value):new Ui(this.source,pe(),n)}else return B(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ui(this.source,ke(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class fr{constructor(e,n,i){this.node_=e,this.fullyInitialized_=n,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ce(e))return this.isFullyInitialized()&&!this.filtered_;const n=oe(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class zx{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Wx(t,e,n,i){const o=[],l=[];return e.forEach(u=>{u.type==="child_changed"&&t.index_.indexedValueChanged(u.oldSnap,u.snapshotNode)&&l.push(Dx(u.childName,u.snapshotNode))}),Fs(t,o,"child_removed",e,i,n),Fs(t,o,"child_added",e,i,n),Fs(t,o,"child_moved",l,i,n),Fs(t,o,"child_changed",e,i,n),Fs(t,o,"value",e,i,n),o}function Fs(t,e,n,i,o,l){const u=i.filter(h=>h.type===n);u.sort((h,p)=>Gx(t,h,p)),u.forEach(h=>{const p=Vx(t,h,l);o.forEach(m=>{m.respondsTo(h.type)&&e.push(m.createEvent(p,t.query_))})})}function Vx(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Gx(t,e,n){if(e.childName==null||n.childName==null)throw Wi("Should only compare child_ events.");const i=new ae(e.childName,e.snapshotNode),o=new ae(n.childName,n.snapshotNode);return t.index_.compare(i,o)}/**
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
 */function Fl(t,e){return{eventCache:t,serverCache:e}}function qs(t,e,n,i){return Fl(new fr(e,n,i),t.serverCache)}function aE(t,e,n,i){return Fl(t.eventCache,new fr(e,n,i))}function vl(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function Wr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ld;const Kx=()=>(ld||(ld=new St(AR)),ld);class Ie{static fromObject(e){let n=new Ie(null);return rt(e,(i,o)=>{n=n.set(new ve(i),o)}),n}constructor(e,n=Kx()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:pe(),value:this.value};if(ce(e))return null;{const i=oe(e),o=this.children.get(i);if(o!==null){const l=o.findRootMostMatchingPathAndValue(ke(e),n);return l!=null?{path:Fe(new ve(i),l.path),value:l.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ce(e))return this;{const n=oe(e),i=this.children.get(n);return i!==null?i.subtree(ke(e)):new Ie(null)}}set(e,n){if(ce(e))return new Ie(n,this.children);{const i=oe(e),l=(this.children.get(i)||new Ie(null)).set(ke(e),n),u=this.children.insert(i,l);return new Ie(this.value,u)}}remove(e){if(ce(e))return this.children.isEmpty()?new Ie(null):new Ie(null,this.children);{const n=oe(e),i=this.children.get(n);if(i){const o=i.remove(ke(e));let l;return o.isEmpty()?l=this.children.remove(n):l=this.children.insert(n,o),this.value===null&&l.isEmpty()?new Ie(null):new Ie(this.value,l)}else return this}}get(e){if(ce(e))return this.value;{const n=oe(e),i=this.children.get(n);return i?i.get(ke(e)):null}}setTree(e,n){if(ce(e))return n;{const i=oe(e),l=(this.children.get(i)||new Ie(null)).setTree(ke(e),n);let u;return l.isEmpty()?u=this.children.remove(i):u=this.children.insert(i,l),new Ie(this.value,u)}}fold(e){return this.fold_(pe(),e)}fold_(e,n){const i={};return this.children.inorderTraversal((o,l)=>{i[o]=l.fold_(Fe(e,o),n)}),n(e,this.value,i)}findOnPath(e,n){return this.findOnPath_(e,pe(),n)}findOnPath_(e,n,i){const o=this.value?i(n,this.value):!1;if(o)return o;if(ce(e))return null;{const l=oe(e),u=this.children.get(l);return u?u.findOnPath_(ke(e),Fe(n,l),i):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,pe(),n)}foreachOnPath_(e,n,i){if(ce(e))return this;{this.value&&i(n,this.value);const o=oe(e),l=this.children.get(o);return l?l.foreachOnPath_(ke(e),Fe(n,o),i):new Ie(null)}}foreach(e){this.foreach_(pe(),e)}foreach_(e,n){this.children.inorderTraversal((i,o)=>{o.foreach_(Fe(e,i),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,i)=>{i.value&&e(n,i.value)})}}/**
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
 */class tn{constructor(e){this.writeTree_=e}static empty(){return new tn(new Ie(null))}}function Ys(t,e,n){if(ce(e))return new tn(new Ie(n));{const i=t.writeTree_.findRootMostValueAndPath(e);if(i!=null){const o=i.path;let l=i.value;const u=ht(o,e);return l=l.updateChild(u,n),new tn(t.writeTree_.set(o,l))}else{const o=new Ie(n),l=t.writeTree_.setTree(e,o);return new tn(l)}}}function Ld(t,e,n){let i=t;return rt(n,(o,l)=>{i=Ys(i,Fe(e,o),l)}),i}function v_(t,e){if(ce(e))return tn.empty();{const n=t.writeTree_.setTree(e,new Ie(null));return new tn(n)}}function Md(t,e){return Qr(t,e)!=null}function Qr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(ht(n.path,e)):null}function E_(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Be,(i,o)=>{e.push(new ae(i,o))}):t.writeTree_.children.inorderTraversal((i,o)=>{o.value!=null&&e.push(new ae(i,o.value))}),e}function ur(t,e){if(ce(e))return t;{const n=Qr(t,e);return n!=null?new tn(new Ie(n)):new tn(t.writeTree_.subtree(e))}}function Ud(t){return t.writeTree_.isEmpty()}function Fi(t,e){return lE(pe(),t.writeTree_,e)}function lE(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let i=null;return e.children.inorderTraversal((o,l)=>{o===".priority"?(B(l.value!==null,"Priority writes must always be leaf nodes"),i=l.value):n=lE(Fe(t,o),l,n)}),!n.getChild(t).isEmpty()&&i!==null&&(n=n.updateChild(Fe(t,".priority"),i)),n}}/**
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
 */function Bl(t,e){return hE(e,t)}function qx(t,e,n,i,o){B(i>t.lastWriteId,"Stacking an older write on top of newer ones"),o===void 0&&(o=!0),t.allWrites.push({path:e,snap:n,writeId:i,visible:o}),o&&(t.visibleWrites=Ys(t.visibleWrites,e,n)),t.lastWriteId=i}function Yx(t,e,n,i){B(i>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:i,visible:!0}),t.visibleWrites=Ld(t.visibleWrites,e,n),t.lastWriteId=i}function Qx(t,e){for(let n=0;n<t.allWrites.length;n++){const i=t.allWrites[n];if(i.writeId===e)return i}return null}function Xx(t,e){const n=t.allWrites.findIndex(h=>h.writeId===e);B(n>=0,"removeWrite called with nonexistent writeId.");const i=t.allWrites[n];t.allWrites.splice(n,1);let o=i.visible,l=!1,u=t.allWrites.length-1;for(;o&&u>=0;){const h=t.allWrites[u];h.visible&&(u>=n&&Jx(h,i.path)?o=!1:jt(i.path,h.path)&&(l=!0)),u--}if(o){if(l)return Zx(t),!0;if(i.snap)t.visibleWrites=v_(t.visibleWrites,i.path);else{const h=i.children;rt(h,p=>{t.visibleWrites=v_(t.visibleWrites,Fe(i.path,p))})}return!0}else return!1}function Jx(t,e){if(t.snap)return jt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&jt(Fe(t.path,n),e))return!0;return!1}function Zx(t){t.visibleWrites=cE(t.allWrites,eb,pe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function eb(t){return t.visible}function cE(t,e,n){let i=tn.empty();for(let o=0;o<t.length;++o){const l=t[o];if(e(l)){const u=l.path;let h;if(l.snap)jt(n,u)?(h=ht(n,u),i=Ys(i,h,l.snap)):jt(u,n)&&(h=ht(u,n),i=Ys(i,pe(),l.snap.getChild(h)));else if(l.children){if(jt(n,u))h=ht(n,u),i=Ld(i,h,l.children);else if(jt(u,n))if(h=ht(u,n),ce(h))i=Ld(i,pe(),l.children);else{const p=Di(l.children,oe(h));if(p){const m=p.getChild(ke(h));i=Ys(i,pe(),m)}}}else throw Wi("WriteRecord should have .snap or .children")}}return i}function uE(t,e,n,i,o){if(!i&&!o){const l=Qr(t.visibleWrites,e);if(l!=null)return l;{const u=ur(t.visibleWrites,e);if(Ud(u))return n;if(n==null&&!Md(u,pe()))return null;{const h=n||te.EMPTY_NODE;return Fi(u,h)}}}else{const l=ur(t.visibleWrites,e);if(!o&&Ud(l))return n;if(!o&&n==null&&!Md(l,pe()))return null;{const u=function(m){return(m.visible||o)&&(!i||!~i.indexOf(m.writeId))&&(jt(m.path,e)||jt(e,m.path))},h=cE(t.allWrites,u,e),p=n||te.EMPTY_NODE;return Fi(h,p)}}}function tb(t,e,n){let i=te.EMPTY_NODE;const o=Qr(t.visibleWrites,e);if(o)return o.isLeafNode()||o.forEachChild(Be,(l,u)=>{i=i.updateImmediateChild(l,u)}),i;if(n){const l=ur(t.visibleWrites,e);return n.forEachChild(Be,(u,h)=>{const p=Fi(ur(l,new ve(u)),h);i=i.updateImmediateChild(u,p)}),E_(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}else{const l=ur(t.visibleWrites,e);return E_(l).forEach(u=>{i=i.updateImmediateChild(u.name,u.node)}),i}}function nb(t,e,n,i,o){B(i||o,"Either existingEventSnap or existingServerSnap must exist");const l=Fe(e,n);if(Md(t.visibleWrites,l))return null;{const u=ur(t.visibleWrites,l);return Ud(u)?o.getChild(n):Fi(u,o.getChild(n))}}function rb(t,e,n,i){const o=Fe(e,n),l=Qr(t.visibleWrites,o);if(l!=null)return l;if(i.isCompleteForChild(n)){const u=ur(t.visibleWrites,o);return Fi(u,i.getNode().getImmediateChild(n))}else return null}function ib(t,e){return Qr(t.visibleWrites,e)}function sb(t,e,n,i,o,l,u){let h;const p=ur(t.visibleWrites,e),m=Qr(p,pe());if(m!=null)h=m;else if(n!=null)h=Fi(p,n);else return[];if(h=h.withIndex(u),!h.isEmpty()&&!h.isLeafNode()){const v=[],y=u.getCompare(),_=l?h.getReverseIteratorFrom(i,u):h.getIteratorFrom(i,u);let I=_.getNext();for(;I&&v.length<o;)y(I,i)!==0&&v.push(I),I=_.getNext();return v}else return[]}function ob(){return{visibleWrites:tn.empty(),allWrites:[],lastWriteId:-1}}function El(t,e,n,i){return uE(t.writeTree,t.treePath,e,n,i)}function Th(t,e){return tb(t.writeTree,t.treePath,e)}function w_(t,e,n,i){return nb(t.writeTree,t.treePath,e,n,i)}function wl(t,e){return ib(t.writeTree,Fe(t.treePath,e))}function ab(t,e,n,i,o,l){return sb(t.writeTree,t.treePath,e,n,i,o,l)}function kh(t,e,n){return rb(t.writeTree,t.treePath,e,n)}function dE(t,e){return hE(Fe(t.treePath,e),t.writeTree)}function hE(t,e){return{treePath:t,writeTree:e}}/**
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
 */class lb{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,i=e.childName;B(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),B(i!==".priority","Only non-priority child changes can be tracked.");const o=this.changeMap.get(i);if(o){const l=o.type;if(n==="child_added"&&l==="child_removed")this.changeMap.set(i,fo(i,e.snapshotNode,o.snapshotNode));else if(n==="child_removed"&&l==="child_added")this.changeMap.delete(i);else if(n==="child_removed"&&l==="child_changed")this.changeMap.set(i,ho(i,o.oldSnap));else if(n==="child_changed"&&l==="child_added")this.changeMap.set(i,Mi(i,e.snapshotNode));else if(n==="child_changed"&&l==="child_changed")this.changeMap.set(i,fo(i,e.snapshotNode,o.oldSnap));else throw Wi("Illegal combination of changes: "+e+" occurred after "+o)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class cb{getCompleteChild(e){return null}getChildAfterChild(e,n,i){return null}}const fE=new cb;class Nh{constructor(e,n,i=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=i}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new fr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return kh(this.writes_,e,i)}}getChildAfterChild(e,n,i){const o=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Wr(this.viewCache_),l=ab(this.writes_,o,n,1,i,e);return l.length===0?null:l[0]}}/**
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
 */function ub(t){return{filter:t}}function db(t,e){B(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),B(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function hb(t,e,n,i,o){const l=new lb;let u,h;if(n.type===Zt.OVERWRITE){const m=n;m.source.fromUser?u=Fd(t,e,m.path,m.snap,i,o,l):(B(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered()&&!ce(m.path),u=Cl(t,e,m.path,m.snap,i,o,h,l))}else if(n.type===Zt.MERGE){const m=n;m.source.fromUser?u=pb(t,e,m.path,m.children,i,o,l):(B(m.source.fromServer,"Unknown source."),h=m.source.tagged||e.serverCache.isFiltered(),u=Bd(t,e,m.path,m.children,i,o,h,l))}else if(n.type===Zt.ACK_USER_WRITE){const m=n;m.revert?u=_b(t,e,m.path,i,o,l):u=mb(t,e,m.path,m.affectedTree,i,o,l)}else if(n.type===Zt.LISTEN_COMPLETE)u=gb(t,e,n.path,i,l);else throw Wi("Unknown operation type: "+n.type);const p=l.getChanges();return fb(e,u,p),{viewCache:u,changes:p}}function fb(t,e,n){const i=e.eventCache;if(i.isFullyInitialized()){const o=i.getNode().isLeafNode()||i.getNode().isEmpty(),l=vl(t);(n.length>0||!t.eventCache.isFullyInitialized()||o&&!i.getNode().equals(l)||!i.getNode().getPriority().equals(l.getPriority()))&&n.push(sE(vl(e)))}}function pE(t,e,n,i,o,l){const u=e.eventCache;if(wl(i,n)!=null)return e;{let h,p;if(ce(n))if(B(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const m=Wr(e),v=m instanceof te?m:te.EMPTY_NODE,y=Th(i,v);h=t.filter.updateFullNode(e.eventCache.getNode(),y,l)}else{const m=El(i,Wr(e));h=t.filter.updateFullNode(e.eventCache.getNode(),m,l)}else{const m=oe(n);if(m===".priority"){B(hr(n)===1,"Can't have a priority with additional path components");const v=u.getNode();p=e.serverCache.getNode();const y=w_(i,n,v,p);y!=null?h=t.filter.updatePriority(v,y):h=u.getNode()}else{const v=ke(n);let y;if(u.isCompleteForChild(m)){p=e.serverCache.getNode();const _=w_(i,n,u.getNode(),p);_!=null?y=u.getNode().getImmediateChild(m).updateChild(v,_):y=u.getNode().getImmediateChild(m)}else y=kh(i,m,e.serverCache);y!=null?h=t.filter.updateChild(u.getNode(),m,y,v,o,l):h=u.getNode()}}return qs(e,h,u.isFullyInitialized()||ce(n),t.filter.filtersNodes())}}function Cl(t,e,n,i,o,l,u,h){const p=e.serverCache;let m;const v=u?t.filter:t.filter.getIndexedFilter();if(ce(n))m=v.updateFullNode(p.getNode(),i,null);else if(v.filtersNodes()&&!p.isFiltered()){const I=p.getNode().updateChild(n,i);m=v.updateFullNode(p.getNode(),I,null)}else{const I=oe(n);if(!p.isCompleteForPath(n)&&hr(n)>1)return e;const b=ke(n),N=p.getNode().getImmediateChild(I).updateChild(b,i);I===".priority"?m=v.updatePriority(p.getNode(),N):m=v.updateChild(p.getNode(),I,N,b,fE,null)}const y=aE(e,m,p.isFullyInitialized()||ce(n),v.filtersNodes()),_=new Nh(o,y,l);return pE(t,y,n,o,_,h)}function Fd(t,e,n,i,o,l,u){const h=e.eventCache;let p,m;const v=new Nh(o,e,l);if(ce(n))m=t.filter.updateFullNode(e.eventCache.getNode(),i,u),p=qs(e,m,!0,t.filter.filtersNodes());else{const y=oe(n);if(y===".priority")m=t.filter.updatePriority(e.eventCache.getNode(),i),p=qs(e,m,h.isFullyInitialized(),h.isFiltered());else{const _=ke(n),I=h.getNode().getImmediateChild(y);let b;if(ce(_))b=i;else{const A=v.getCompleteChild(y);A!=null?gh(_)===".priority"&&A.getChild(Jv(_)).isEmpty()?b=A:b=A.updateChild(_,i):b=te.EMPTY_NODE}if(I.equals(b))p=e;else{const A=t.filter.updateChild(h.getNode(),y,b,_,v,u);p=qs(e,A,h.isFullyInitialized(),t.filter.filtersNodes())}}}return p}function C_(t,e){return t.eventCache.isCompleteForChild(e)}function pb(t,e,n,i,o,l,u){let h=e;return i.foreach((p,m)=>{const v=Fe(n,p);C_(e,oe(v))&&(h=Fd(t,h,v,m,o,l,u))}),i.foreach((p,m)=>{const v=Fe(n,p);C_(e,oe(v))||(h=Fd(t,h,v,m,o,l,u))}),h}function S_(t,e,n){return n.foreach((i,o)=>{e=e.updateChild(i,o)}),e}function Bd(t,e,n,i,o,l,u,h){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let p=e,m;ce(n)?m=i:m=new Ie(null).setTree(n,i);const v=e.serverCache.getNode();return m.children.inorderTraversal((y,_)=>{if(v.hasChild(y)){const I=e.serverCache.getNode().getImmediateChild(y),b=S_(t,I,_);p=Cl(t,p,new ve(y),b,o,l,u,h)}}),m.children.inorderTraversal((y,_)=>{const I=!e.serverCache.isCompleteForChild(y)&&_.value===null;if(!v.hasChild(y)&&!I){const b=e.serverCache.getNode().getImmediateChild(y),A=S_(t,b,_);p=Cl(t,p,new ve(y),A,o,l,u,h)}}),p}function mb(t,e,n,i,o,l,u){if(wl(o,n)!=null)return e;const h=e.serverCache.isFiltered(),p=e.serverCache;if(i.value!=null){if(ce(n)&&p.isFullyInitialized()||p.isCompleteForPath(n))return Cl(t,e,n,p.getNode().getChild(n),o,l,h,u);if(ce(n)){let m=new Ie(null);return p.getNode().forEachChild(Ai,(v,y)=>{m=m.set(new ve(v),y)}),Bd(t,e,n,m,o,l,h,u)}else return e}else{let m=new Ie(null);return i.foreach((v,y)=>{const _=Fe(n,v);p.isCompleteForPath(_)&&(m=m.set(v,p.getNode().getChild(_)))}),Bd(t,e,n,m,o,l,h,u)}}function gb(t,e,n,i,o){const l=e.serverCache,u=aE(e,l.getNode(),l.isFullyInitialized()||ce(n),l.isFiltered());return pE(t,u,n,i,fE,o)}function _b(t,e,n,i,o,l){let u;if(wl(i,n)!=null)return e;{const h=new Nh(i,e,o),p=e.eventCache.getNode();let m;if(ce(n)||oe(n)===".priority"){let v;if(e.serverCache.isFullyInitialized())v=El(i,Wr(e));else{const y=e.serverCache.getNode();B(y instanceof te,"serverChildren would be complete if leaf node"),v=Th(i,y)}v=v,m=t.filter.updateFullNode(p,v,l)}else{const v=oe(n);let y=kh(i,v,e.serverCache);y==null&&e.serverCache.isCompleteForChild(v)&&(y=p.getImmediateChild(v)),y!=null?m=t.filter.updateChild(p,v,y,ke(n),h,l):e.eventCache.getNode().hasChild(v)?m=t.filter.updateChild(p,v,te.EMPTY_NODE,ke(n),h,l):m=p,m.isEmpty()&&e.serverCache.isFullyInitialized()&&(u=El(i,Wr(e)),u.isLeafNode()&&(m=t.filter.updateFullNode(m,u,l)))}return u=e.serverCache.isFullyInitialized()||wl(i,pe())!=null,qs(e,m,u,t.filter.filtersNodes())}}/**
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
 */class yb{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,o=new Eh(i.getIndex()),l=Mx(i);this.processor_=ub(l);const u=n.serverCache,h=n.eventCache,p=o.updateFullNode(te.EMPTY_NODE,u.getNode(),null),m=l.updateFullNode(te.EMPTY_NODE,h.getNode(),null),v=new fr(p,u.isFullyInitialized(),o.filtersNodes()),y=new fr(m,h.isFullyInitialized(),l.filtersNodes());this.viewCache_=Fl(y,v),this.eventGenerator_=new zx(this.query_)}get query(){return this.query_}}function vb(t){return t.viewCache_.serverCache.getNode()}function Eb(t){return vl(t.viewCache_)}function wb(t,e){const n=Wr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!ce(e)&&!n.getImmediateChild(oe(e)).isEmpty())?n.getChild(e):null}function I_(t){return t.eventRegistrations_.length===0}function Cb(t,e){t.eventRegistrations_.push(e)}function T_(t,e,n){const i=[];if(n){B(e==null,"A cancel should cancel all event registrations.");const o=t.query._path;t.eventRegistrations_.forEach(l=>{const u=l.createCancelEvent(n,o);u&&i.push(u)})}if(e){let o=[];for(let l=0;l<t.eventRegistrations_.length;++l){const u=t.eventRegistrations_[l];if(!u.matches(e))o.push(u);else if(e.hasAnyCallback()){o=o.concat(t.eventRegistrations_.slice(l+1));break}}t.eventRegistrations_=o}else t.eventRegistrations_=[];return i}function k_(t,e,n,i){e.type===Zt.MERGE&&e.source.queryId!==null&&(B(Wr(t.viewCache_),"We should always have a full cache before handling merges"),B(vl(t.viewCache_),"Missing event cache, even though we have a server cache"));const o=t.viewCache_,l=hb(t.processor_,o,e,n,i);return db(t.processor_,l.viewCache),B(l.viewCache.serverCache.isFullyInitialized()||!o.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=l.viewCache,mE(t,l.changes,l.viewCache.eventCache.getNode(),null)}function Sb(t,e){const n=t.viewCache_.eventCache,i=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Be,(l,u)=>{i.push(Mi(l,u))}),n.isFullyInitialized()&&i.push(sE(n.getNode())),mE(t,i,n.getNode(),e)}function mE(t,e,n,i){const o=i?[i]:t.eventRegistrations_;return Wx(t.eventGenerator_,e,n,o)}/**
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
 */let Sl;class gE{constructor(){this.views=new Map}}function Ib(t){B(!Sl,"__referenceConstructor has already been defined"),Sl=t}function Tb(){return B(Sl,"Reference.ts has not been loaded"),Sl}function kb(t){return t.views.size===0}function Rh(t,e,n,i){const o=e.source.queryId;if(o!==null){const l=t.views.get(o);return B(l!=null,"SyncTree gave us an op for an invalid query."),k_(l,e,n,i)}else{let l=[];for(const u of t.views.values())l=l.concat(k_(u,e,n,i));return l}}function _E(t,e,n,i,o){const l=e._queryIdentifier,u=t.views.get(l);if(!u){let h=El(n,o?i:null),p=!1;h?p=!0:i instanceof te?(h=Th(n,i),p=!1):(h=te.EMPTY_NODE,p=!1);const m=Fl(new fr(h,p,!1),new fr(i,o,!1));return new yb(e,m)}return u}function Nb(t,e,n,i,o,l){const u=_E(t,e,i,o,l);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,u),Cb(u,n),Sb(u,n)}function Rb(t,e,n,i){const o=e._queryIdentifier,l=[];let u=[];const h=pr(t);if(o==="default")for(const[p,m]of t.views.entries())u=u.concat(T_(m,n,i)),I_(m)&&(t.views.delete(p),m.query._queryParams.loadsAllData()||l.push(m.query));else{const p=t.views.get(o);p&&(u=u.concat(T_(p,n,i)),I_(p)&&(t.views.delete(o),p.query._queryParams.loadsAllData()||l.push(p.query)))}return h&&!pr(t)&&l.push(new(Tb())(e._repo,e._path)),{removed:l,events:u}}function yE(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function dr(t,e){let n=null;for(const i of t.views.values())n=n||wb(i,e);return n}function vE(t,e){if(e._queryParams.loadsAllData())return jl(t);{const i=e._queryIdentifier;return t.views.get(i)}}function EE(t,e){return vE(t,e)!=null}function pr(t){return jl(t)!=null}function jl(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Il;function xb(t){B(!Il,"__referenceConstructor has already been defined"),Il=t}function bb(){return B(Il,"Reference.ts has not been loaded"),Il}let Ab=1;class N_{constructor(e){this.listenProvider_=e,this.syncPointTree_=new Ie(null),this.pendingWriteTree_=ob(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function wE(t,e,n,i,o){return qx(t.pendingWriteTree_,e,n,i,o),o?Gi(t,new zr(Ch(),e,n)):[]}function Pb(t,e,n,i){Yx(t.pendingWriteTree_,e,n,i);const o=Ie.fromObject(n);return Gi(t,new Ui(Ch(),e,o))}function sr(t,e,n=!1){const i=Qx(t.pendingWriteTree_,e);if(Xx(t.pendingWriteTree_,e)){let l=new Ie(null);return i.snap!=null?l=l.set(pe(),!0):rt(i.children,u=>{l=l.set(new ve(u),!0)}),Gi(t,new yl(i.path,l,n))}else return[]}function bo(t,e,n){return Gi(t,new zr(Sh(),e,n))}function Ob(t,e,n){const i=Ie.fromObject(n);return Gi(t,new Ui(Sh(),e,i))}function Db(t,e){return Gi(t,new mo(Sh(),e))}function Lb(t,e,n){const i=bh(t,n);if(i){const o=Ah(i),l=o.path,u=o.queryId,h=ht(l,e),p=new mo(Ih(u),h);return Ph(t,l,p)}else return[]}function Tl(t,e,n,i,o=!1){const l=e._path,u=t.syncPointTree_.get(l);let h=[];if(u&&(e._queryIdentifier==="default"||EE(u,e))){const p=Rb(u,e,n,i);kb(u)&&(t.syncPointTree_=t.syncPointTree_.remove(l));const m=p.removed;if(h=p.events,!o){const v=m.findIndex(_=>_._queryParams.loadsAllData())!==-1,y=t.syncPointTree_.findOnPath(l,(_,I)=>pr(I));if(v&&!y){const _=t.syncPointTree_.subtree(l);if(!_.isEmpty()){const I=Fb(_);for(let b=0;b<I.length;++b){const A=I[b],N=A.query,j=TE(t,A);t.listenProvider_.startListening(Qs(N),go(t,N),j.hashFn,j.onComplete)}}}!y&&m.length>0&&!i&&(v?t.listenProvider_.stopListening(Qs(e),null):m.forEach(_=>{const I=t.queryToTagMap.get($l(_));t.listenProvider_.stopListening(Qs(_),I)}))}Bb(t,m)}return h}function CE(t,e,n,i){const o=bh(t,i);if(o!=null){const l=Ah(o),u=l.path,h=l.queryId,p=ht(u,e),m=new zr(Ih(h),p,n);return Ph(t,u,m)}else return[]}function Mb(t,e,n,i){const o=bh(t,i);if(o){const l=Ah(o),u=l.path,h=l.queryId,p=ht(u,e),m=Ie.fromObject(n),v=new Ui(Ih(h),p,m);return Ph(t,u,v)}else return[]}function jd(t,e,n,i=!1){const o=e._path;let l=null,u=!1;t.syncPointTree_.foreachOnPath(o,(_,I)=>{const b=ht(_,o);l=l||dr(I,b),u=u||pr(I)});let h=t.syncPointTree_.get(o);h?(u=u||pr(h),l=l||dr(h,pe())):(h=new gE,t.syncPointTree_=t.syncPointTree_.set(o,h));let p;l!=null?p=!0:(p=!1,l=te.EMPTY_NODE,t.syncPointTree_.subtree(o).foreachChild((I,b)=>{const A=dr(b,pe());A&&(l=l.updateImmediateChild(I,A))}));const m=EE(h,e);if(!m&&!e._queryParams.loadsAllData()){const _=$l(e);B(!t.queryToTagMap.has(_),"View does not exist, but we have a tag");const I=jb();t.queryToTagMap.set(_,I),t.tagToQueryMap.set(I,_)}const v=Bl(t.pendingWriteTree_,o);let y=Nb(h,e,n,v,l,p);if(!m&&!u&&!i){const _=vE(h,e);y=y.concat($b(t,e,_))}return y}function xh(t,e,n){const o=t.pendingWriteTree_,l=t.syncPointTree_.findOnPath(e,(u,h)=>{const p=ht(u,e),m=dr(h,p);if(m)return m});return uE(o,e,l,n,!0)}function Ub(t,e){const n=e._path;let i=null;t.syncPointTree_.foreachOnPath(n,(m,v)=>{const y=ht(m,n);i=i||dr(v,y)});let o=t.syncPointTree_.get(n);o?i=i||dr(o,pe()):(o=new gE,t.syncPointTree_=t.syncPointTree_.set(n,o));const l=i!=null,u=l?new fr(i,!0,!1):null,h=Bl(t.pendingWriteTree_,e._path),p=_E(o,e,h,l?u.getNode():te.EMPTY_NODE,l);return Eb(p)}function Gi(t,e){return SE(e,t.syncPointTree_,null,Bl(t.pendingWriteTree_,pe()))}function SE(t,e,n,i){if(ce(t.path))return IE(t,e,n,i);{const o=e.get(pe());n==null&&o!=null&&(n=dr(o,pe()));let l=[];const u=oe(t.path),h=t.operationForChild(u),p=e.children.get(u);if(p&&h){const m=n?n.getImmediateChild(u):null,v=dE(i,u);l=l.concat(SE(h,p,m,v))}return o&&(l=l.concat(Rh(o,t,i,n))),l}}function IE(t,e,n,i){const o=e.get(pe());n==null&&o!=null&&(n=dr(o,pe()));let l=[];return e.children.inorderTraversal((u,h)=>{const p=n?n.getImmediateChild(u):null,m=dE(i,u),v=t.operationForChild(u);v&&(l=l.concat(IE(v,h,p,m)))}),o&&(l=l.concat(Rh(o,t,i,n))),l}function TE(t,e){const n=e.query,i=go(t,n);return{hashFn:()=>(vb(e)||te.EMPTY_NODE).hash(),onComplete:o=>{if(o==="ok")return i?Lb(t,n._path,i):Db(t,n._path);{const l=DR(o,n);return Tl(t,n,null,l)}}}}function go(t,e){const n=$l(e);return t.queryToTagMap.get(n)}function $l(t){return t._path.toString()+"$"+t._queryIdentifier}function bh(t,e){return t.tagToQueryMap.get(e)}function Ah(t){const e=t.indexOf("$");return B(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ve(t.substr(0,e))}}function Ph(t,e,n){const i=t.syncPointTree_.get(e);B(i,"Missing sync point for query tag that we're tracking");const o=Bl(t.pendingWriteTree_,e);return Rh(i,n,o,null)}function Fb(t){return t.fold((e,n,i)=>{if(n&&pr(n))return[jl(n)];{let o=[];return n&&(o=yE(n)),rt(i,(l,u)=>{o=o.concat(u)}),o}})}function Qs(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(bb())(t._repo,t._path):t}function Bb(t,e){for(let n=0;n<e.length;++n){const i=e[n];if(!i._queryParams.loadsAllData()){const o=$l(i),l=t.queryToTagMap.get(o);t.queryToTagMap.delete(o),t.tagToQueryMap.delete(l)}}}function jb(){return Ab++}function $b(t,e,n){const i=e._path,o=go(t,e),l=TE(t,n),u=t.listenProvider_.startListening(Qs(e),o,l.hashFn,l.onComplete),h=t.syncPointTree_.subtree(i);if(o)B(!pr(h.value),"If we're adding a query, it shouldn't be shadowed");else{const p=h.fold((m,v,y)=>{if(!ce(m)&&v&&pr(v))return[jl(v).query];{let _=[];return v&&(_=_.concat(yE(v).map(I=>I.query))),rt(y,(I,b)=>{_=_.concat(b)}),_}});for(let m=0;m<p.length;++m){const v=p[m];t.listenProvider_.stopListening(Qs(v),go(t,v))}}return u}/**
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
 */class Oh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Oh(n)}node(){return this.node_}}class Dh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Fe(this.path_,e);return new Dh(this.syncTree_,n)}node(){return xh(this.syncTree_,this.path_)}}const Hb=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},R_=function(t,e,n){if(!t||typeof t!="object")return t;if(B(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return zb(t[".sv"],e,n);if(typeof t[".sv"]=="object")return Wb(t[".sv"],e);B(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},zb=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:B(!1,"Unexpected server value: "+t)}},Wb=function(t,e,n){t.hasOwnProperty("increment")||B(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const i=t.increment;typeof i!="number"&&B(!1,"Unexpected increment value: "+i);const o=e.node();if(B(o!==null&&typeof o<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!o.isLeafNode())return i;const u=o.getValue();return typeof u!="number"?i:u+i},kE=function(t,e,n,i){return Lh(e,new Dh(n,t),i)},NE=function(t,e,n){return Lh(t,new Oh(e),n)};function Lh(t,e,n){const i=t.getPriority().val(),o=R_(i,e.getImmediateChild(".priority"),n);let l;if(t.isLeafNode()){const u=t,h=R_(u.getValue(),e,n);return h!==u.getValue()||o!==u.getPriority().val()?new Je(h,Ge(o)):t}else{const u=t;return l=u,o!==u.getPriority().val()&&(l=l.updatePriority(new Je(o))),u.forEachChild(Be,(h,p)=>{const m=Lh(p,e.getImmediateChild(h),n);m!==p&&(l=l.updateImmediateChild(h,m))}),l}}/**
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
 */class Mh{constructor(e="",n=null,i={children:{},childCount:0}){this.name=e,this.parent=n,this.node=i}}function Uh(t,e){let n=e instanceof ve?e:new ve(e),i=t,o=oe(n);for(;o!==null;){const l=Di(i.node.children,o)||{children:{},childCount:0};i=new Mh(o,i,l),n=ke(n),o=oe(n)}return i}function Ki(t){return t.node.value}function RE(t,e){t.node.value=e,$d(t)}function xE(t){return t.node.childCount>0}function Vb(t){return Ki(t)===void 0&&!xE(t)}function Hl(t,e){rt(t.node.children,(n,i)=>{e(new Mh(n,t,i))})}function bE(t,e,n,i){n&&e(t),Hl(t,o=>{bE(o,e,!0)})}function Gb(t,e,n){let i=t.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Ao(t){return new ve(t.parent===null?t.name:Ao(t.parent)+"/"+t.name)}function $d(t){t.parent!==null&&Kb(t.parent,t.name,t)}function Kb(t,e,n){const i=Vb(n),o=dn(t.node.children,e);i&&o?(delete t.node.children[e],t.node.childCount--,$d(t)):!i&&!o&&(t.node.children[e]=n.node,t.node.childCount++,$d(t))}/**
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
 */const qb=/[\[\].#$\/\u0000-\u001F\u007F]/,Yb=/[\[\].#$\u0000-\u001F\u007F]/,cd=10*1024*1024,Fh=function(t){return typeof t=="string"&&t.length!==0&&!qb.test(t)},AE=function(t){return typeof t=="string"&&t.length!==0&&!Yb.test(t)},Qb=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),AE(t)},Xb=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!dh(t)||t&&typeof t=="object"&&dn(t,".sv")},PE=function(t,e,n,i){i&&e===void 0||zl(Ll(t,"value"),e,n)},zl=function(t,e,n){const i=n instanceof ve?new px(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Lr(i));if(typeof e=="function")throw new Error(t+"contains a function "+Lr(i)+" with contents = "+e.toString());if(dh(e))throw new Error(t+"contains "+e.toString()+" "+Lr(i));if(typeof e=="string"&&e.length>cd/3&&Ml(e)>cd)throw new Error(t+"contains a string greater than "+cd+" utf8 bytes "+Lr(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let o=!1,l=!1;if(rt(e,(u,h)=>{if(u===".value")o=!0;else if(u!==".priority"&&u!==".sv"&&(l=!0,!Fh(u)))throw new Error(t+" contains an invalid key ("+u+") "+Lr(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);mx(i,u),zl(t,h,i),gx(i)}),o&&l)throw new Error(t+' contains ".value" child '+Lr(i)+" in addition to actual children.")}},Jb=function(t,e){let n,i;for(n=0;n<e.length;n++){i=e[n];const l=uo(i);for(let u=0;u<l.length;u++)if(!(l[u]===".priority"&&u===l.length-1)){if(!Fh(l[u]))throw new Error(t+"contains an invalid key ("+l[u]+") in path "+i.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fx);let o=null;for(n=0;n<e.length;n++){if(i=e[n],o!==null&&jt(o,i))throw new Error(t+"contains a path "+o.toString()+" that is ancestor of another path "+i.toString());o=i}},Zb=function(t,e,n,i){const o=Ll(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(o+" must be an object containing the children to replace.");const l=[];rt(e,(u,h)=>{const p=new ve(u);if(zl(o,h,Fe(n,p)),gh(p)===".priority"&&!Xb(h))throw new Error(o+"contains an invalid value for '"+p.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");l.push(p)}),Jb(o,l)},OE=function(t,e,n,i){if(!AE(n))throw new Error(Ll(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eA=function(t,e,n,i){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),OE(t,e,n)},Bh=function(t,e){if(oe(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},tA=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Fh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!Qb(n))throw new Error(Ll(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nA{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Wl(t,e){let n=null;for(let i=0;i<e.length;i++){const o=e[i],l=o.getPath();n!==null&&!_h(l,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:l}),n.events.push(o)}n&&t.eventLists_.push(n)}function DE(t,e,n){Wl(t,n),LE(t,i=>_h(i,e))}function Ht(t,e,n){Wl(t,n),LE(t,i=>jt(i,e)||jt(e,i))}function LE(t,e){t.recursionDepth_++;let n=!0;for(let i=0;i<t.eventLists_.length;i++){const o=t.eventLists_[i];if(o){const l=o.path;e(l)?(rA(t.eventLists_[i]),t.eventLists_[i]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function rA(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const i=n.getEventRunner();Gs&&nt("event: "+n.toString()),Vi(i)}}}/**
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
 */const iA="repo_interrupt",sA=25;class oA{constructor(e,n,i,o){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=i,this.appCheckProvider_=o,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nA,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=_l(),this.transactionQueueTree_=new Mh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aA(t,e,n){if(t.stats_=ph(t.repoInfo_),t.forceRestClient_||FR())t.server_=new gl(t.repoInfo_,(i,o,l,u)=>{x_(t,i,o,l,u)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>b_(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ke(n)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}t.persistentConnection_=new Nn(t.repoInfo_,e,(i,o,l,u)=>{x_(t,i,o,l,u)},i=>{b_(t,i)},i=>{lA(t,i)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(i=>{t.server_.refreshAuthToken(i)}),t.appCheckProvider_.addTokenChangeListener(i=>{t.server_.refreshAppCheckToken(i.token)}),t.statsReporter_=zR(t.repoInfo_,()=>new Hx(t.stats_,t.server_)),t.infoData_=new Ux,t.infoSyncTree_=new N_({startListening:(i,o,l,u)=>{let h=[];const p=t.infoData_.getNode(i._path);return p.isEmpty()||(h=bo(t.infoSyncTree_,i._path,p),setTimeout(()=>{u("ok")},0)),h},stopListening:()=>{}}),jh(t,"connected",!1),t.serverSyncTree_=new N_({startListening:(i,o,l,u)=>(t.server_.listen(i,l,o,(h,p)=>{const m=u(h,p);Ht(t.eventQueue_,i._path,m)}),[]),stopListening:(i,o)=>{t.server_.unlisten(i,o)}})}function ME(t){const n=t.infoData_.getNode(new ve(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Vl(t){return Hb({timestamp:ME(t)})}function x_(t,e,n,i,o){t.dataUpdateCount++;const l=new ve(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let u=[];if(o)if(i){const p=hl(n,m=>Ge(m));u=Mb(t.serverSyncTree_,l,p,o)}else{const p=Ge(n);u=CE(t.serverSyncTree_,l,p,o)}else if(i){const p=hl(n,m=>Ge(m));u=Ob(t.serverSyncTree_,l,p)}else{const p=Ge(n);u=bo(t.serverSyncTree_,l,p)}let h=l;u.length>0&&(h=Bi(t,l)),Ht(t.eventQueue_,h,u)}function b_(t,e){jh(t,"connected",e),e===!1&&hA(t)}function lA(t,e){rt(e,(n,i)=>{jh(t,n,i)})}function jh(t,e,n){const i=new ve("/.info/"+e),o=Ge(n);t.infoData_.updateSnapshot(i,o);const l=bo(t.infoSyncTree_,i,o);Ht(t.eventQueue_,i,l)}function $h(t){return t.nextWriteId_++}function cA(t,e,n){const i=Ub(t.serverSyncTree_,e);return i!=null?Promise.resolve(i):t.server_.get(e).then(o=>{const l=Ge(o).withIndex(e._queryParams.getIndex());jd(t.serverSyncTree_,e,n,!0);let u;if(e._queryParams.loadsAllData())u=bo(t.serverSyncTree_,e._path,l);else{const h=go(t.serverSyncTree_,e);u=CE(t.serverSyncTree_,e._path,l,h)}return Ht(t.eventQueue_,e._path,u),Tl(t.serverSyncTree_,e,n,null,!0),l},o=>(Po(t,"get for query "+Ke(e)+" failed: "+o),Promise.reject(new Error(o))))}function uA(t,e,n,i,o){Po(t,"set",{path:e.toString(),value:n,priority:i});const l=Vl(t),u=Ge(n,i),h=xh(t.serverSyncTree_,e),p=NE(u,h,l),m=$h(t),v=wE(t.serverSyncTree_,e,p,m,!0);Wl(t.eventQueue_,v),t.server_.put(e.toString(),u.val(!0),(_,I)=>{const b=_==="ok";b||ft("set at "+e+" failed: "+_);const A=sr(t.serverSyncTree_,m,!b);Ht(t.eventQueue_,e,A),Hd(t,o,_,I)});const y=zh(t,e);Bi(t,y),Ht(t.eventQueue_,y,[])}function dA(t,e,n,i){Po(t,"update",{path:e.toString(),value:n});let o=!0;const l=Vl(t),u={};if(rt(n,(h,p)=>{o=!1,u[h]=kE(Fe(e,h),Ge(p),t.serverSyncTree_,l)}),o)nt("update() called with empty data.  Don't do anything."),Hd(t,i,"ok",void 0);else{const h=$h(t),p=Pb(t.serverSyncTree_,e,u,h);Wl(t.eventQueue_,p),t.server_.merge(e.toString(),n,(m,v)=>{const y=m==="ok";y||ft("update at "+e+" failed: "+m);const _=sr(t.serverSyncTree_,h,!y),I=_.length>0?Bi(t,e):e;Ht(t.eventQueue_,I,_),Hd(t,i,m,v)}),rt(n,m=>{const v=zh(t,Fe(e,m));Bi(t,v)}),Ht(t.eventQueue_,e,[])}}function hA(t){Po(t,"onDisconnectEvents");const e=Vl(t),n=_l();Dd(t.onDisconnect_,pe(),(o,l)=>{const u=kE(o,l,t.serverSyncTree_,e);oE(n,o,u)});let i=[];Dd(n,pe(),(o,l)=>{i=i.concat(bo(t.serverSyncTree_,o,l));const u=zh(t,o);Bi(t,u)}),t.onDisconnect_=_l(),Ht(t.eventQueue_,pe(),i)}function fA(t,e,n){let i;oe(e._path)===".info"?i=jd(t.infoSyncTree_,e,n):i=jd(t.serverSyncTree_,e,n),DE(t.eventQueue_,e._path,i)}function pA(t,e,n){let i;oe(e._path)===".info"?i=Tl(t.infoSyncTree_,e,n):i=Tl(t.serverSyncTree_,e,n),DE(t.eventQueue_,e._path,i)}function mA(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iA)}function Po(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),nt(n,...e)}function Hd(t,e,n,i){e&&Vi(()=>{if(n==="ok")e(null);else{const o=(n||"error").toUpperCase();let l=o;i&&(l+=": "+i);const u=new Error(l);u.code=o,e(u)}})}function UE(t,e,n){return xh(t.serverSyncTree_,e,n)||te.EMPTY_NODE}function Hh(t,e=t.transactionQueueTree_){if(e||Gl(t,e),Ki(e)){const n=BE(t,e);B(n.length>0,"Sending zero length transaction queue"),n.every(o=>o.status===0)&&gA(t,Ao(e),n)}else xE(e)&&Hl(e,n=>{Hh(t,n)})}function gA(t,e,n){const i=n.map(m=>m.currentWriteId),o=UE(t,e,i);let l=o;const u=o.hash();for(let m=0;m<n.length;m++){const v=n[m];B(v.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),v.status=1,v.retryCount++;const y=ht(e,v.path);l=l.updateChild(y,v.currentOutputSnapshotRaw)}const h=l.val(!0),p=e;t.server_.put(p.toString(),h,m=>{Po(t,"transaction put response",{path:p.toString(),status:m});let v=[];if(m==="ok"){const y=[];for(let _=0;_<n.length;_++)n[_].status=2,v=v.concat(sr(t.serverSyncTree_,n[_].currentWriteId)),n[_].onComplete&&y.push(()=>n[_].onComplete(null,!0,n[_].currentOutputSnapshotResolved)),n[_].unwatcher();Gl(t,Uh(t.transactionQueueTree_,e)),Hh(t,t.transactionQueueTree_),Ht(t.eventQueue_,e,v);for(let _=0;_<y.length;_++)Vi(y[_])}else{if(m==="datastale")for(let y=0;y<n.length;y++)n[y].status===3?n[y].status=4:n[y].status=0;else{ft("transaction at "+p.toString()+" failed: "+m);for(let y=0;y<n.length;y++)n[y].status=4,n[y].abortReason=m}Bi(t,e)}},u)}function Bi(t,e){const n=FE(t,e),i=Ao(n),o=BE(t,n);return _A(t,o,i),i}function _A(t,e,n){if(e.length===0)return;const i=[];let o=[];const u=e.filter(h=>h.status===0).map(h=>h.currentWriteId);for(let h=0;h<e.length;h++){const p=e[h],m=ht(n,p.path);let v=!1,y;if(B(m!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),p.status===4)v=!0,y=p.abortReason,o=o.concat(sr(t.serverSyncTree_,p.currentWriteId,!0));else if(p.status===0)if(p.retryCount>=sA)v=!0,y="maxretry",o=o.concat(sr(t.serverSyncTree_,p.currentWriteId,!0));else{const _=UE(t,p.path,u);p.currentInputSnapshot=_;const I=e[h].update(_.val());if(I!==void 0){zl("transaction failed: Data returned ",I,p.path);let b=Ge(I);typeof I=="object"&&I!=null&&dn(I,".priority")||(b=b.updatePriority(_.getPriority()));const N=p.currentWriteId,j=Vl(t),H=NE(b,_,j);p.currentOutputSnapshotRaw=b,p.currentOutputSnapshotResolved=H,p.currentWriteId=$h(t),u.splice(u.indexOf(N),1),o=o.concat(wE(t.serverSyncTree_,p.path,H,p.currentWriteId,p.applyLocally)),o=o.concat(sr(t.serverSyncTree_,N,!0))}else v=!0,y="nodata",o=o.concat(sr(t.serverSyncTree_,p.currentWriteId,!0))}Ht(t.eventQueue_,n,o),o=[],v&&(e[h].status=2,function(_){setTimeout(_,Math.floor(0))}(e[h].unwatcher),e[h].onComplete&&(y==="nodata"?i.push(()=>e[h].onComplete(null,!1,e[h].currentInputSnapshot)):i.push(()=>e[h].onComplete(new Error(y),!1,null))))}Gl(t,t.transactionQueueTree_);for(let h=0;h<i.length;h++)Vi(i[h]);Hh(t,t.transactionQueueTree_)}function FE(t,e){let n,i=t.transactionQueueTree_;for(n=oe(e);n!==null&&Ki(i)===void 0;)i=Uh(i,n),e=ke(e),n=oe(e);return i}function BE(t,e){const n=[];return jE(t,e,n),n.sort((i,o)=>i.order-o.order),n}function jE(t,e,n){const i=Ki(e);if(i)for(let o=0;o<i.length;o++)n.push(i[o]);Hl(e,o=>{jE(t,o,n)})}function Gl(t,e){const n=Ki(e);if(n){let i=0;for(let o=0;o<n.length;o++)n[o].status!==2&&(n[i]=n[o],i++);n.length=i,RE(e,n.length>0?n:void 0)}Hl(e,i=>{Gl(t,i)})}function zh(t,e){const n=Ao(FE(t,e)),i=Uh(t.transactionQueueTree_,e);return Gb(i,o=>{ud(t,o)}),ud(t,i),bE(i,o=>{ud(t,o)}),n}function ud(t,e){const n=Ki(e);if(n){const i=[];let o=[],l=-1;for(let u=0;u<n.length;u++)n[u].status===3||(n[u].status===1?(B(l===u-1,"All SENT items should be at beginning of queue."),l=u,n[u].status=3,n[u].abortReason="set"):(B(n[u].status===0,"Unexpected transaction status in abort"),n[u].unwatcher(),o=o.concat(sr(t.serverSyncTree_,n[u].currentWriteId,!0)),n[u].onComplete&&i.push(n[u].onComplete.bind(null,new Error("set"),!1,null))));l===-1?RE(e,void 0):n.length=l+1,Ht(t.eventQueue_,Ao(e),o);for(let u=0;u<i.length;u++)Vi(i[u])}}/**
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
 */function yA(t){let e="";const n=t.split("/");for(let i=0;i<n.length;i++)if(n[i].length>0){let o=n[i];try{o=decodeURIComponent(o.replace(/\+/g," "))}catch{}e+="/"+o}return e}function vA(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const i=n.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):ft(`Invalid query segment '${n}' in query '${t}'`)}return e}const A_=function(t,e){const n=EA(t),i=n.namespace;n.domain==="firebase.com"&&Pn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&n.domain!=="localhost"&&Pn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||xR();const o=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new zv(n.host,n.secure,i,o,e,"",i!==n.subdomain),path:new ve(n.pathString)}},EA=function(t){let e="",n="",i="",o="",l="",u=!0,h="https",p=443;if(typeof t=="string"){let m=t.indexOf("//");m>=0&&(h=t.substring(0,m-1),t=t.substring(m+2));let v=t.indexOf("/");v===-1&&(v=t.length);let y=t.indexOf("?");y===-1&&(y=t.length),e=t.substring(0,Math.min(v,y)),v<y&&(o=yA(t.substring(v,y)));const _=vA(t.substring(Math.min(t.length,y)));m=e.indexOf(":"),m>=0?(u=h==="https"||h==="wss",p=parseInt(e.substring(m+1),10)):m=e.length;const I=e.slice(0,m);if(I.toLowerCase()==="localhost")n="localhost";else if(I.split(".").length<=2)n=I;else{const b=e.indexOf(".");i=e.substring(0,b).toLowerCase(),n=e.substring(b+1),l=i}"ns"in _&&(l=_.ns)}return{host:e,port:p,domain:n,subdomain:i,secure:u,scheme:h,pathString:o,namespace:l}};/**
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
 */const P_="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",wA=function(){let t=0;const e=[];return function(n){const i=n===t;t=n;let o;const l=new Array(8);for(o=7;o>=0;o--)l[o]=P_.charAt(n%64),n=Math.floor(n/64);B(n===0,"Cannot push at time == 0");let u=l.join("");if(i){for(o=11;o>=0&&e[o]===63;o--)e[o]=0;e[o]++}else for(o=0;o<12;o++)e[o]=Math.floor(Math.random()*64);for(o=0;o<12;o++)u+=P_.charAt(e[o]);return B(u.length===20,"nextPushId: Length should be 20."),u}}();/**
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
 */class CA{constructor(e,n,i,o){this.eventType=e,this.eventRegistration=n,this.snapshot=i,this.prevName=o}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ke(this.snapshot.exportVal())}}class SA{constructor(e,n,i){this.eventRegistration=e,this.error=n,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class $E{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return B(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class Wh{constructor(e,n,i,o){this._repo=e,this._path=n,this._queryParams=i,this._orderByCalled=o}get key(){return ce(this._path)?null:gh(this._path)}get ref(){return new On(this._repo,this._path)}get _queryIdentifier(){const e=__(this._queryParams),n=hh(e);return n==="{}"?"default":n}get _queryObject(){return __(this._queryParams)}isEqual(e){if(e=qr(e),!(e instanceof Wh))return!1;const n=this._repo===e._repo,i=_h(this._path,e._path),o=this._queryIdentifier===e._queryIdentifier;return n&&i&&o}toJSON(){return this.toString()}toString(){return this._repo.toString()+hx(this._path)}}class On extends Wh{constructor(e,n){super(e,n,new wh,!1)}get parent(){const e=Jv(this._path);return e===null?null:new On(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class _o{constructor(e,n,i){this._node=e,this.ref=n,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ve(e),i=yo(this.ref,e);return new _o(this._node.getChild(n),i,Be)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,o)=>e(new _o(o,yo(this.ref,i),Be)))}hasChild(e){const n=new ve(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function wn(t,e){return t=qr(t),t._checkNotDeleted("ref"),e!==void 0?yo(t._root,e):t._root}function yo(t,e){return t=qr(t),oe(t._path)===null?eA("child","path",e):OE("child","path",e),new On(t._repo,Fe(t._path,e))}function IA(t,e){t=qr(t),Bh("push",t._path),PE("push",e,t._path,!0);const n=ME(t._repo),i=wA(n),o=yo(t,i),l=yo(t,i);let u;return e!=null?u=HE(l,e).then(()=>l):u=Promise.resolve(l),o.then=u.then.bind(u),o.catch=u.then.bind(u,void 0),o}function TA(t){return Bh("remove",t._path),HE(t,null)}function HE(t,e){t=qr(t),Bh("set",t._path),PE("set",e,t._path,!1);const n=new Dl;return uA(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function kl(t,e){Zb("update",e,t._path);const n=new Dl;return dA(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}function kA(t){t=qr(t);const e=new $E(()=>{}),n=new Kl(e);return cA(t._repo,t,n).then(i=>new _o(i,new On(t._repo,t._path),t._queryParams.getIndex()))}class Kl{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const i=n._queryParams.getIndex();return new CA("value",this,new _o(e.snapshotNode,new On(n._repo,n._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new SA(this,e,n):null}matches(e){return e instanceof Kl?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function NA(t,e,n,i,o){const l=new $E(n,void 0),u=new Kl(l);return fA(t._repo,t,u),()=>pA(t._repo,t,u)}function zE(t,e,n,i){return NA(t,"value",e)}Ib(On);xb(On);/**
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
 */const RA="FIREBASE_DATABASE_EMULATOR_HOST",zd={};let xA=!1;function bA(t,e,n,i){const o=e.lastIndexOf(":"),l=e.substring(0,o),u=uh(l);t.repoInfo_=new zv(e,u,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),i&&(t.authTokenProvider_=i)}function AA(t,e,n,i,o){let l=i||t.options.databaseURL;l===void 0&&(t.options.projectId||Pn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",t.options.projectId),l=`${t.options.projectId}-default-rtdb.firebaseio.com`);let u=A_(l,o),h=u.repoInfo,p;typeof process<"u"&&Zg&&(p=Zg[RA]),p?(l=`http://${p}?ns=${h.namespace}`,u=A_(l,o),h=u.repoInfo):u.repoInfo.secure;const m=new jR(t.name,t.options,e);tA("Invalid Firebase Database URL",u),ce(u.path)||Pn("Database URL must point to the root of a Firebase Database (not including a child path).");const v=OA(h,t,m,new BR(t,n));return new DA(v,t)}function PA(t,e){const n=zd[e];(!n||n[t.key]!==t)&&Pn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),mA(t),delete n[t.key]}function OA(t,e,n,i){let o=zd[e.name];o||(o={},zd[e.name]=o);let l=o[t.toURLString()];return l&&Pn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),l=new oA(t,xA,n,i),o[t.toURLString()]=l,l}class DA{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aA(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new On(this._repo,pe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(PA(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Pn("Cannot call "+e+" on a deleted database.")}}function LA(t=vv(),e){const n=gv(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const i=rR("database");i&&MA(n,...i)}return n}function MA(t,e,n,i={}){t=qr(t),t._checkNotDeleted("useEmulator");const o=`${e}:${n}`,l=t._repoInternal;if(t._instanceStarted){if(o===t._repoInternal.repoInfo_.host&&Rv(i,l.repoInfo_.emulatorOptions))return;Pn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let u;if(l.repoInfo_.nodeAdmin)i.mockUserToken&&Pn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),u=new tl(tl.OWNER);else if(i.mockUserToken){const h=typeof i.mockUserToken=="string"?i.mockUserToken:sR(i.mockUserToken,t.app.options.projectId);u=new tl(h)}uh(e)&&(iR(e),lR("Database",!0)),bA(l,o,i,u)}/**
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
 */function UA(t){SR(yv),oo(new _R("database",(e,{instanceIdentifier:n})=>{const i=e.getProvider("app").getImmediate(),o=e.getProvider("auth-internal"),l=e.getProvider("app-check-internal");return AA(i,o,l,n)},"PUBLIC").setMultipleInstances(!0)),Fr(e_,t_,t),Fr(e_,t_,"esm2017")}Nn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Nn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};UA();const FA=()=>{};var O_={};/**
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
 */const WE=function(t){const e=[];let n=0;for(let i=0;i<t.length;i++){let o=t.charCodeAt(i);o<128?e[n++]=o:o<2048?(e[n++]=o>>6|192,e[n++]=o&63|128):(o&64512)===55296&&i+1<t.length&&(t.charCodeAt(i+1)&64512)===56320?(o=65536+((o&1023)<<10)+(t.charCodeAt(++i)&1023),e[n++]=o>>18|240,e[n++]=o>>12&63|128,e[n++]=o>>6&63|128,e[n++]=o&63|128):(e[n++]=o>>12|224,e[n++]=o>>6&63|128,e[n++]=o&63|128)}return e},BA=function(t){const e=[];let n=0,i=0;for(;n<t.length;){const o=t[n++];if(o<128)e[i++]=String.fromCharCode(o);else if(o>191&&o<224){const l=t[n++];e[i++]=String.fromCharCode((o&31)<<6|l&63)}else if(o>239&&o<365){const l=t[n++],u=t[n++],h=t[n++],p=((o&7)<<18|(l&63)<<12|(u&63)<<6|h&63)-65536;e[i++]=String.fromCharCode(55296+(p>>10)),e[i++]=String.fromCharCode(56320+(p&1023))}else{const l=t[n++],u=t[n++];e[i++]=String.fromCharCode((o&15)<<12|(l&63)<<6|u&63)}}return e.join("")},VE={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let o=0;o<t.length;o+=3){const l=t[o],u=o+1<t.length,h=u?t[o+1]:0,p=o+2<t.length,m=p?t[o+2]:0,v=l>>2,y=(l&3)<<4|h>>4;let _=(h&15)<<2|m>>6,I=m&63;p||(I=64,u||(_=64)),i.push(n[v],n[y],n[_],n[I])}return i.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(WE(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):BA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let o=0;o<t.length;){const l=n[t.charAt(o++)],h=o<t.length?n[t.charAt(o)]:0;++o;const m=o<t.length?n[t.charAt(o)]:64;++o;const y=o<t.length?n[t.charAt(o)]:64;if(++o,l==null||h==null||m==null||y==null)throw new jA;const _=l<<2|h>>4;if(i.push(_),m!==64){const I=h<<4&240|m>>2;if(i.push(I),y!==64){const b=m<<6&192|y;i.push(b)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class jA extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const $A=function(t){const e=WE(t);return VE.encodeByteArray(e,!0)},D_=function(t){return $A(t).replace(/\./g,"")},HA=function(t){try{return VE.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zA(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const WA=()=>zA().__FIREBASE_DEFAULTS__,VA=()=>{if(typeof process>"u"||typeof O_>"u")return;const t=O_.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},GA=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&HA(t[1]);return e&&JSON.parse(e)},KA=()=>{try{return FA()||WA()||VA()||GA()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},qA=t=>{var e,n;return(n=(e=KA())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},YA=t=>{const e=qA(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),i]:[e.substring(0,n),i]};/**
 * @license
 * Copyright 2025 Google LLC
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
 */function Vh(t){try{return(t.startsWith("http://")||t.startsWith("https://")?new URL(t).hostname:t).endsWith(".cloudworkstations.dev")}catch{return!1}}async function QA(t){return(await fetch(t,{credentials:"include"})).ok}/**
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
 */function XA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=e||"demo-project",o=t.iat||0,l=t.sub||t.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:o,exp:o+3600,auth_time:o,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},t);return[D_(JSON.stringify(n)),D_(JSON.stringify(u)),""].join(".")}const Xs={};function JA(){const t={prod:[],emulator:[]};for(const e of Object.keys(Xs))Xs[e]?t.emulator.push(e):t.prod.push(e);return t}function ZA(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let L_=!1;function eP(t,e){if(typeof window>"u"||typeof document>"u"||!Vh(window.location.host)||Xs[t]===e||Xs[t]||L_)return;Xs[t]=e;function n(_){return`__firebase__banner__${_}`}const i="__firebase__banner",l=JA().prod.length>0;function u(){const _=document.getElementById(i);_&&_.remove()}function h(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function p(_,I){_.setAttribute("width","24"),_.setAttribute("id",I),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function m(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{L_=!0,u()},_}function v(_,I){_.setAttribute("id",I),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function y(){const _=ZA(i),I=n("text"),b=document.getElementById(I)||document.createElement("span"),A=n("learnmore"),N=document.getElementById(A)||document.createElement("a"),j=n("preprendIcon"),H=document.getElementById(j)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const U=_.element;h(U),v(N,A);const $=m();p(H,j),U.append(H,b,N,$),document.body.appendChild(U)}l?(b.innerText="Preview backend disconnected.",H.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(H.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",I)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",y):y()}/**
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
 */const tP="FirebaseError";class ql extends Error{constructor(e,n,i){super(n),this.code=e,this.customData=i,this.name=tP,Object.setPrototypeOf(this,ql.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,nP.prototype.create)}}class nP{constructor(e,n,i){this.service=e,this.serviceName=n,this.errors=i}create(e,...n){const i=n[0]||{},o=`${this.service}/${e}`,l=this.errors[e],u=l?rP(l,i):"Error",h=`${this.serviceName}: ${u} (${o}).`;return new ql(o,h,i)}}function rP(t,e){return t.replace(iP,(n,i)=>{const o=e[i];return o!=null?String(o):`<${i}?>`})}const iP=/\{\$([^}]+)}/g;/**
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
 */function Yl(t){return t&&t._delegate?t._delegate:t}class sP{constructor(e,n,i){this.name=e,this.instanceFactory=n,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const GE="firebasestorage.googleapis.com",KE="storageBucket",oP=2*60*1e3,aP=10*60*1e3,lP=1e3;/**
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
 */class Le extends ql{constructor(e,n,i=0){super(dd(e),`Firebase Storage: ${n} (${dd(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Le.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return dd(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var be;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(be||(be={}));function dd(t){return"storage/"+t}function Gh(){const t="An unknown error occurred, please check the error payload for server response.";return new Le(be.UNKNOWN,t)}function cP(t){return new Le(be.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function uP(t){return new Le(be.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function dP(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Le(be.UNAUTHENTICATED,t)}function hP(){return new Le(be.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function fP(t){return new Le(be.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function qE(){return new Le(be.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function YE(){return new Le(be.CANCELED,"User canceled the upload/download.")}function pP(t){return new Le(be.INVALID_URL,"Invalid URL '"+t+"'.")}function mP(t){return new Le(be.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function gP(){return new Le(be.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+KE+"' property when initializing the app?")}function QE(){return new Le(be.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function _P(){return new Le(be.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function yP(){return new Le(be.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function vP(t){return new Le(be.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function Wd(t){return new Le(be.INVALID_ARGUMENT,t)}function XE(){return new Le(be.APP_DELETED,"The Firebase app was deleted.")}function EP(t){return new Le(be.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Js(t,e){return new Le(be.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Bs(t){throw new Le(be.INTERNAL_ERROR,"Internal error: "+t)}/**
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
 */class bt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let i;try{i=bt.makeFromUrl(e,n)}catch{return new bt(e,"")}if(i.path==="")return i;throw mP(e)}static makeFromUrl(e,n){let i=null;const o="([A-Za-z0-9.\\-_]+)";function l($){$.path.charAt($.path.length-1)==="/"&&($.path_=$.path_.slice(0,-1))}const u="(/(.*))?$",h=new RegExp("^gs://"+o+u,"i"),p={bucket:1,path:3};function m($){$.path_=decodeURIComponent($.path)}const v="v[A-Za-z0-9_]+",y=n.replace(/[.]/g,"\\."),_="(/([^?#]*).*)?$",I=new RegExp(`^https?://${y}/${v}/b/${o}/o${_}`,"i"),b={bucket:1,path:3},A=n===GE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,N="([^?#]*)",j=new RegExp(`^https?://${A}/${o}/${N}`,"i"),U=[{regex:h,indices:p,postModify:l},{regex:I,indices:b,postModify:m},{regex:j,indices:{bucket:1,path:2},postModify:m}];for(let $=0;$<U.length;$++){const W=U[$],re=W.regex.exec(e);if(re){const me=re[W.indices.bucket];let we=re[W.indices.path];we||(we=""),i=new bt(me,we),W.postModify(i);break}}if(i==null)throw pP(e);return i}}class wP{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
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
 */function CP(t,e,n){let i=1,o=null,l=null,u=!1,h=0;function p(){return h===2}let m=!1;function v(...N){m||(m=!0,e.apply(null,N))}function y(N){o=setTimeout(()=>{o=null,t(I,p())},N)}function _(){l&&clearTimeout(l)}function I(N,...j){if(m){_();return}if(N){_(),v.call(null,N,...j);return}if(p()||u){_(),v.call(null,N,...j);return}i<64&&(i*=2);let U;h===1?(h=2,U=0):U=(i+Math.random())*1e3,y(U)}let b=!1;function A(N){b||(b=!0,_(),!m&&(o!==null?(N||(h=2),clearTimeout(o),y(0)):N||(h=1)))}return y(0),l=setTimeout(()=>{u=!0,A(!0)},n),A}function SP(t){t(!1)}/**
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
 */function IP(t){return t!==void 0}function TP(t){return typeof t=="function"}function kP(t){return typeof t=="object"&&!Array.isArray(t)}function Ql(t){return typeof t=="string"||t instanceof String}function M_(t){return Kh()&&t instanceof Blob}function Kh(){return typeof Blob<"u"}function U_(t,e,n,i){if(i<e)throw Wd(`Invalid value for '${t}'. Expected ${e} or greater.`);if(i>n)throw Wd(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
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
 */function Oo(t,e,n){let i=e;return n==null&&(i=`https://${e}`),`${n}://${i}/v0${t}`}function JE(t){const e=encodeURIComponent;let n="?";for(const i in t)if(t.hasOwnProperty(i)){const o=e(i)+"="+e(t[i]);n=n+o+"&"}return n=n.slice(0,-1),n}var Br;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Br||(Br={}));/**
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
 */function ZE(t,e){const n=t>=500&&t<600,o=[408,429].indexOf(t)!==-1,l=e.indexOf(t)!==-1;return n||o||l}/**
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
 */class NP{constructor(e,n,i,o,l,u,h,p,m,v,y,_=!0,I=!1){this.url_=e,this.method_=n,this.headers_=i,this.body_=o,this.successCodes_=l,this.additionalRetryCodes_=u,this.callback_=h,this.errorCallback_=p,this.timeout_=m,this.progressCallback_=v,this.connectionFactory_=y,this.retry=_,this.isUsingEmulator=I,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,A)=>{this.resolve_=b,this.reject_=A,this.start_()})}start_(){const e=(i,o)=>{if(o){i(!1,new Ya(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const u=h=>{const p=h.loaded,m=h.lengthComputable?h.total:-1;this.progressCallback_!==null&&this.progressCallback_(p,m)};this.progressCallback_!==null&&l.addUploadProgressListener(u),l.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(u),this.pendingConnection_=null;const h=l.getErrorCode()===Br.NO_ERROR,p=l.getStatus();if(!h||ZE(p,this.additionalRetryCodes_)&&this.retry){const v=l.getErrorCode()===Br.ABORT;i(!1,new Ya(!1,null,v));return}const m=this.successCodes_.indexOf(p)!==-1;i(!0,new Ya(m,l))})},n=(i,o)=>{const l=this.resolve_,u=this.reject_,h=o.connection;if(o.wasSuccessCode)try{const p=this.callback_(h,h.getResponse());IP(p)?l(p):l()}catch(p){u(p)}else if(h!==null){const p=Gh();p.serverResponse=h.getErrorText(),this.errorCallback_?u(this.errorCallback_(h,p)):u(p)}else if(o.canceled){const p=this.appDelete_?XE():YE();u(p)}else{const p=qE();u(p)}};this.canceled_?n(!1,new Ya(!1,null,!0)):this.backoffId_=CP(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&SP(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ya{constructor(e,n,i){this.wasSuccessCode=e,this.connection=n,this.canceled=!!i}}function RP(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function xP(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function bP(t,e){e&&(t["X-Firebase-GMPID"]=e)}function AP(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function PP(t,e,n,i,o,l,u=!0,h=!1){const p=JE(t.urlParams),m=t.url+p,v=Object.assign({},t.headers);return bP(v,e),RP(v,n),xP(v,l),AP(v,i),new NP(m,t.method,v,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,o,u,h)}/**
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
 */function OP(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function DP(...t){const e=OP();if(e!==void 0){const n=new e;for(let i=0;i<t.length;i++)n.append(t[i]);return n.getBlob()}else{if(Kh())return new Blob(t);throw new Le(be.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function LP(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
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
 */function MP(t){if(typeof atob>"u")throw vP("base-64");return atob(t)}/**
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
 */const cn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class hd{constructor(e,n){this.data=e,this.contentType=n||null}}function UP(t,e){switch(t){case cn.RAW:return new hd(e1(e));case cn.BASE64:case cn.BASE64URL:return new hd(t1(t,e));case cn.DATA_URL:return new hd(BP(e),jP(e))}throw Gh()}function e1(t){const e=[];for(let n=0;n<t.length;n++){let i=t.charCodeAt(n);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const l=i,u=t.charCodeAt(++n);i=65536|(l&1023)<<10|u&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function FP(t){let e;try{e=decodeURIComponent(t)}catch{throw Js(cn.DATA_URL,"Malformed data URL.")}return e1(e)}function t1(t,e){switch(t){case cn.BASE64:{const o=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(o||l)throw Js(t,"Invalid character '"+(o?"-":"_")+"' found: is it base64url encoded?");break}case cn.BASE64URL:{const o=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(o||l)throw Js(t,"Invalid character '"+(o?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=MP(e)}catch(o){throw o.message.includes("polyfill")?o:Js(t,"Invalid character found")}const i=new Uint8Array(n.length);for(let o=0;o<n.length;o++)i[o]=n.charCodeAt(o);return i}class n1{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Js(cn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=n[1]||null;i!=null&&(this.base64=$P(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function BP(t){const e=new n1(t);return e.base64?t1(cn.BASE64,e.rest):FP(e.rest)}function jP(t){return new n1(t).contentType}function $P(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
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
 */class rr{constructor(e,n){let i=0,o="";M_(e)?(this.data_=e,i=e.size,o=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=o}size(){return this.size_}type(){return this.type_}slice(e,n){if(M_(this.data_)){const i=this.data_,o=LP(i,e,n);return o===null?null:new rr(o)}else{const i=new Uint8Array(this.data_.buffer,e,n-e);return new rr(i,!0)}}static getBlob(...e){if(Kh()){const n=e.map(i=>i instanceof rr?i.data_:i);return new rr(DP.apply(null,n))}else{const n=e.map(u=>Ql(u)?UP(cn.RAW,u).data:u.data_);let i=0;n.forEach(u=>{i+=u.byteLength});const o=new Uint8Array(i);let l=0;return n.forEach(u=>{for(let h=0;h<u.length;h++)o[l++]=u[h]}),new rr(o,!0)}}uploadData(){return this.data_}}/**
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
 */function r1(t){let e;try{e=JSON.parse(t)}catch{return null}return kP(e)?e:null}/**
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
 */function HP(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function zP(t,e){const n=e.split("/").filter(i=>i.length>0).join("/");return t.length===0?n:t+"/"+n}function i1(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
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
 */function WP(t,e){return e}class dt{constructor(e,n,i,o){this.server=e,this.local=n||e,this.writable=!!i,this.xform=o||WP}}let Qa=null;function VP(t){return!Ql(t)||t.length<2?t:i1(t)}function s1(){if(Qa)return Qa;const t=[];t.push(new dt("bucket")),t.push(new dt("generation")),t.push(new dt("metageneration")),t.push(new dt("name","fullPath",!0));function e(l,u){return VP(u)}const n=new dt("name");n.xform=e,t.push(n);function i(l,u){return u!==void 0?Number(u):u}const o=new dt("size");return o.xform=i,t.push(o),t.push(new dt("timeCreated")),t.push(new dt("updated")),t.push(new dt("md5Hash",null,!0)),t.push(new dt("cacheControl",null,!0)),t.push(new dt("contentDisposition",null,!0)),t.push(new dt("contentEncoding",null,!0)),t.push(new dt("contentLanguage",null,!0)),t.push(new dt("contentType",null,!0)),t.push(new dt("metadata","customMetadata",!0)),Qa=t,Qa}function GP(t,e){function n(){const i=t.bucket,o=t.fullPath,l=new bt(i,o);return e._makeStorageReference(l)}Object.defineProperty(t,"ref",{get:n})}function KP(t,e,n){const i={};i.type="file";const o=n.length;for(let l=0;l<o;l++){const u=n[l];i[u.local]=u.xform(i,e[u.server])}return GP(i,t),i}function o1(t,e,n){const i=r1(e);return i===null?null:KP(t,i,n)}function qP(t,e,n,i){const o=r1(e);if(o===null||!Ql(o.downloadTokens))return null;const l=o.downloadTokens;if(l.length===0)return null;const u=encodeURIComponent;return l.split(",").map(m=>{const v=t.bucket,y=t.fullPath,_="/b/"+u(v)+"/o/"+u(y),I=Oo(_,n,i),b=JE({alt:"media",token:m});return I+b})[0]}function a1(t,e){const n={},i=e.length;for(let o=0;o<i;o++){const l=e[o];l.writable&&(n[l.server]=t[l.local])}return JSON.stringify(n)}class qi{constructor(e,n,i,o){this.url=e,this.method=n,this.handler=i,this.timeout=o,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
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
 */function Rn(t){if(!t)throw Gh()}function qh(t,e){function n(i,o){const l=o1(t,o,e);return Rn(l!==null),l}return n}function YP(t,e){function n(i,o){const l=o1(t,o,e);return Rn(l!==null),qP(l,o,t.host,t._protocol)}return n}function Do(t){function e(n,i){let o;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?o=hP():o=dP():n.getStatus()===402?o=uP(t.bucket):n.getStatus()===403?o=fP(t.path):o=i,o.status=n.getStatus(),o.serverResponse=i.serverResponse,o}return e}function l1(t){const e=Do(t);function n(i,o){let l=e(i,o);return i.getStatus()===404&&(l=cP(t.path)),l.serverResponse=o.serverResponse,l}return n}function QP(t,e,n){const i=e.fullServerUrl(),o=Oo(i,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,h=new qi(o,l,qh(t,n),u);return h.errorHandler=l1(e),h}function XP(t,e,n){const i=e.fullServerUrl(),o=Oo(i,t.host,t._protocol),l="GET",u=t.maxOperationRetryTime,h=new qi(o,l,YP(t,n),u);return h.errorHandler=l1(e),h}function JP(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function c1(t,e,n){const i=Object.assign({},n);return i.fullPath=t.path,i.size=e.size(),i.contentType||(i.contentType=JP(null,e)),i}function ZP(t,e,n,i,o){const l=e.bucketOnlyServerUrl(),u={"X-Goog-Upload-Protocol":"multipart"};function h(){let U="";for(let $=0;$<2;$++)U=U+Math.random().toString().slice(2);return U}const p=h();u["Content-Type"]="multipart/related; boundary="+p;const m=c1(e,i,o),v=a1(m,n),y="--"+p+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+v+`\r
--`+p+`\r
Content-Type: `+m.contentType+`\r
\r
`,_=`\r
--`+p+"--",I=rr.getBlob(y,i,_);if(I===null)throw QE();const b={name:m.fullPath},A=Oo(l,t.host,t._protocol),N="POST",j=t.maxUploadRetryTime,H=new qi(A,N,qh(t,n),j);return H.urlParams=b,H.headers=u,H.body=I.uploadData(),H.errorHandler=Do(e),H}class Nl{constructor(e,n,i,o){this.current=e,this.total=n,this.finalized=!!i,this.metadata=o||null}}function Yh(t,e){let n=null;try{n=t.getResponseHeader("X-Goog-Upload-Status")}catch{Rn(!1)}return Rn(!!n&&(e||["active"]).indexOf(n)!==-1),n}function eO(t,e,n,i,o){const l=e.bucketOnlyServerUrl(),u=c1(e,i,o),h={name:u.fullPath},p=Oo(l,t.host,t._protocol),m="POST",v={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":u.contentType,"Content-Type":"application/json; charset=utf-8"},y=a1(u,n),_=t.maxUploadRetryTime;function I(A){Yh(A);let N;try{N=A.getResponseHeader("X-Goog-Upload-URL")}catch{Rn(!1)}return Rn(Ql(N)),N}const b=new qi(p,m,I,_);return b.urlParams=h,b.headers=v,b.body=y,b.errorHandler=Do(e),b}function tO(t,e,n,i){const o={"X-Goog-Upload-Command":"query"};function l(m){const v=Yh(m,["active","final"]);let y=null;try{y=m.getResponseHeader("X-Goog-Upload-Size-Received")}catch{Rn(!1)}y||Rn(!1);const _=Number(y);return Rn(!isNaN(_)),new Nl(_,i.size(),v==="final")}const u="POST",h=t.maxUploadRetryTime,p=new qi(n,u,l,h);return p.headers=o,p.errorHandler=Do(e),p}const F_=256*1024;function nO(t,e,n,i,o,l,u,h){const p=new Nl(0,0);if(u?(p.current=u.current,p.total=u.total):(p.current=0,p.total=i.size()),i.size()!==p.total)throw _P();const m=p.total-p.current;let v=m;o>0&&(v=Math.min(v,o));const y=p.current,_=y+v;let I="";v===0?I="finalize":m===v?I="upload, finalize":I="upload";const b={"X-Goog-Upload-Command":I,"X-Goog-Upload-Offset":`${p.current}`},A=i.slice(y,_);if(A===null)throw QE();function N($,W){const re=Yh($,["active","final"]),me=p.current+v,we=i.size();let ye;return re==="final"?ye=qh(e,l)($,W):ye=null,new Nl(me,we,re==="final",ye)}const j="POST",H=e.maxUploadRetryTime,U=new qi(n,j,N,H);return U.headers=b,U.body=A.uploadData(),U.progressCallback=h||null,U.errorHandler=Do(t),U}const Ct={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function fd(t){switch(t){case"running":case"pausing":case"canceling":return Ct.RUNNING;case"paused":return Ct.PAUSED;case"success":return Ct.SUCCESS;case"canceled":return Ct.CANCELED;case"error":return Ct.ERROR;default:return Ct.ERROR}}/**
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
 */class rO{constructor(e,n,i){if(TP(e)||n!=null||i!=null)this.next=e,this.error=n??void 0,this.complete=i??void 0;else{const l=e;this.next=l.next,this.error=l.error,this.complete=l.complete}}}/**
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
 */function Si(t){return(...e)=>{Promise.resolve().then(()=>t(...e))}}class iO{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=Br.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=Br.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=Br.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,i,o,l){if(this.sent_)throw Bs("cannot .send() more than once");if(Vh(e)&&i&&(this.xhr_.withCredentials=!0),this.sent_=!0,this.xhr_.open(n,e,!0),l!==void 0)for(const u in l)l.hasOwnProperty(u)&&this.xhr_.setRequestHeader(u,l[u].toString());return o!==void 0?this.xhr_.send(o):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Bs("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Bs("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Bs("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Bs("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class sO extends iO{initXhr(){this.xhr_.responseType="text"}}function Ii(){return new sO}/**
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
 */class oO{isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}constructor(e,n,i=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=n,this._metadata=i,this._mappings=s1(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=o=>{if(this._request=void 0,this._chunkMultiplier=1,o._codeEquals(be.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const l=this.isExponentialBackoffExpired();if(ZE(o.status,[]))if(l)o=qE();else{this.sleepTime=Math.max(this.sleepTime*2,lP),this._needToFetchStatus=!0,this.completeTransitions_();return}this._error=o,this._transition("error")}},this._metadataErrorHandler=o=>{this._request=void 0,o._codeEquals(be.CANCELED)?this.completeTransitions_():(this._error=o,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise((o,l)=>{this._resolve=o,this._reject=l,this._start()}),this._promise.then(null,()=>{})}_makeProgressCallback(){const e=this._transferred;return n=>this._updateProgress(e+n)}_shouldDoResumable(e){return e.size()>256*1024}_start(){this._state==="running"&&this._request===void 0&&(this._resumable?this._uploadUrl===void 0?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout(()=>{this.pendingTimeout=void 0,this._continueUpload()},this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then(([n,i])=>{switch(this._state){case"running":e(n,i);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}})}_createResumable(){this._resolveToken((e,n)=>{const i=eO(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(i,Ii,e,n);this._request=o,o.getPromise().then(l=>{this._request=void 0,this._uploadUrl=l,this._needToFetchStatus=!1,this.completeTransitions_()},this._errorHandler)})}_fetchStatus(){const e=this._uploadUrl;this._resolveToken((n,i)=>{const o=tO(this._ref.storage,this._ref._location,e,this._blob),l=this._ref.storage._makeRequest(o,Ii,n,i);this._request=l,l.getPromise().then(u=>{u=u,this._request=void 0,this._updateProgress(u.current),this._needToFetchStatus=!1,u.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()},this._errorHandler)})}_continueUpload(){const e=F_*this._chunkMultiplier,n=new Nl(this._transferred,this._blob.size()),i=this._uploadUrl;this._resolveToken((o,l)=>{let u;try{u=nO(this._ref._location,this._ref.storage,i,this._blob,e,this._mappings,n,this._makeProgressCallback())}catch(p){this._error=p,this._transition("error");return}const h=this._ref.storage._makeRequest(u,Ii,o,l,!1);this._request=h,h.getPromise().then(p=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(p.current),p.finalized?(this._metadata=p.metadata,this._transition("success")):this.completeTransitions_()},this._errorHandler)})}_increaseMultiplier(){F_*this._chunkMultiplier*2<32*1024*1024&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken((e,n)=>{const i=QP(this._ref.storage,this._ref._location,this._mappings),o=this._ref.storage._makeRequest(i,Ii,e,n);this._request=o,o.getPromise().then(l=>{this._request=void 0,this._metadata=l,this._transition("success")},this._metadataErrorHandler)})}_oneShotUpload(){this._resolveToken((e,n)=>{const i=ZP(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),o=this._ref.storage._makeRequest(i,Ii,e,n);this._request=o,o.getPromise().then(l=>{this._request=void 0,this._metadata=l,this._updateProgress(this._blob.size()),this._transition("success")},this._errorHandler)})}_updateProgress(e){const n=this._transferred;this._transferred=e,this._transferred!==n&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,this._request!==void 0?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const n=this._state==="paused";this._state=e,n&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=YE(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=fd(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,n,i,o){const l=new rO(n||void 0,i||void 0,o||void 0);return this._addObserver(l),()=>{this._removeObserver(l)}}then(e,n){return this._promise.then(e,n)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const n=this._observers.indexOf(e);n!==-1&&this._observers.splice(n,1)}_notifyObservers(){this._finishPromise(),this._observers.slice().forEach(n=>{this._notifyObserver(n)})}_finishPromise(){if(this._resolve!==void 0){let e=!0;switch(fd(this._state)){case Ct.SUCCESS:Si(this._resolve.bind(null,this.snapshot))();break;case Ct.CANCELED:case Ct.ERROR:const n=this._reject;Si(n.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){switch(fd(this._state)){case Ct.RUNNING:case Ct.PAUSED:e.next&&Si(e.next.bind(e,this.snapshot))();break;case Ct.SUCCESS:e.complete&&Si(e.complete.bind(e))();break;case Ct.CANCELED:case Ct.ERROR:e.error&&Si(e.error.bind(e,this._error))();break;default:e.error&&Si(e.error.bind(e,this._error))()}}resume(){const e=this._state==="paused"||this._state==="pausing";return e&&this._transition("running"),e}pause(){const e=this._state==="running";return e&&this._transition("pausing"),e}cancel(){const e=this._state==="running"||this._state==="pausing";return e&&this._transition("canceling"),e}}/**
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
 */class Vr{constructor(e,n){this._service=e,n instanceof bt?this._location=n:this._location=bt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Vr(e,n)}get root(){const e=new bt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return i1(this._location.path)}get storage(){return this._service}get parent(){const e=HP(this._location.path);if(e===null)return null;const n=new bt(this._location.bucket,e);return new Vr(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw EP(e)}}function aO(t,e,n){return t._throwIfRoot("uploadBytesResumable"),new oO(t,new rr(e),n)}function lO(t){t._throwIfRoot("getDownloadURL");const e=XP(t.storage,t._location,s1());return t.storage.makeRequestWithTokens(e,Ii).then(n=>{if(n===null)throw yP();return n})}function cO(t,e){const n=zP(t._location.path,e),i=new bt(t._location.bucket,n);return new Vr(t.storage,i)}/**
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
 */function uO(t){return/^[A-Za-z]+:\/\//.test(t)}function dO(t,e){return new Vr(t,e)}function u1(t,e){if(t instanceof Qh){const n=t;if(n._bucket==null)throw gP();const i=new Vr(n,n._bucket);return e!=null?u1(i,e):i}else return e!==void 0?cO(t,e):t}function hO(t,e){if(e&&uO(e)){if(t instanceof Qh)return dO(t,e);throw Wd("To use ref(service, url), the first argument must be a Storage instance.")}else return u1(t,e)}function B_(t,e){const n=e?.[KE];return n==null?null:bt.makeFromBucketSpec(n,t)}function fO(t,e,n,i={}){t.host=`${e}:${n}`;const o=Vh(e);o&&(QA(`https://${t.host}/b`),eP("Storage",!0)),t._isUsingEmulator=!0,t._protocol=o?"https":"http";const{mockUserToken:l}=i;l&&(t._overrideAuthToken=typeof l=="string"?l:XA(l,t.app.options.projectId))}class Qh{constructor(e,n,i,o,l,u=!1){this.app=e,this._authProvider=n,this._appCheckProvider=i,this._url=o,this._firebaseVersion=l,this._isUsingEmulator=u,this._bucket=null,this._host=GE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=oP,this._maxUploadRetryTime=aP,this._requests=new Set,o!=null?this._bucket=bt.makeFromBucketSpec(o,this._host):this._bucket=B_(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=bt.makeFromBucketSpec(this._url,e):this._bucket=B_(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){U_("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){U_("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(_v(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Vr(this,e)}_makeRequest(e,n,i,o,l=!0){if(this._deleted)return new wP(XE());{const u=PP(e,this._appId,i,o,n,this._firebaseVersion,l,this._isUsingEmulator);return this._requests.add(u),u.getPromise().then(()=>this._requests.delete(u),()=>this._requests.delete(u)),u}}async makeRequestWithTokens(e,n){const[i,o]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,i,o).getPromise()}}const j_="@firebase/storage",$_="0.13.14";/**
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
 */const d1="storage";function pO(t,e,n){return t=Yl(t),aO(t,e,n)}function mO(t){return t=Yl(t),lO(t)}function gO(t,e){return t=Yl(t),hO(t,e)}function _O(t=vv(),e){t=Yl(t);const i=gv(t,d1).getImmediate({identifier:e}),o=YA("storage");return o&&yO(i,...o),i}function yO(t,e,n,i={}){fO(t,e,n,i)}function vO(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),i=t.getProvider("auth-internal"),o=t.getProvider("app-check-internal");return new Qh(n,i,o,e,yv)}function EO(){oo(new sP(d1,vO,"PUBLIC").setMultipleInstances(!0)),Fr(j_,$_,""),Fr(j_,$_,"esm2017")}EO();const wO={apiKey:"AIzaSyBTbiBzOC2YIjkguRmUYxxZyMmew3ZPPV8",authDomain:"taskapp-76f3c.firebaseapp.com",databaseURL:"https://taskapp-76f3c-default-rtdb.firebaseio.com",projectId:"taskapp-76f3c",storageBucket:"taskapp-76f3c.firebasestorage.app",messagingSenderId:"65233843809",appId:"1:65233843809:web:6126e7c767ef2c1a341c20",measurementId:"G-QNHBDG9FJ9"},Xh=Ny(wO),At=xk(Xh),h1=new En,Cn=LA(Xh),CO=_O(Xh),SO=()=>{const[t,e]=M.useState(""),[n,i]=M.useState(""),o=$i(),l=async()=>{try{await _T(At,t,n),o("/dashboard")}catch(h){alert(h.message)}},u=async()=>{try{await lv(At,h1),o("/dashboard")}catch(h){alert(h.message)}};return w.jsx("div",{className:"min-h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center text-white",children:w.jsxs("div",{className:"bg-black p-8 rounded-xl w-full max-w-md",children:[w.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Login"}),w.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:h=>e(h.target.value),className:"input"}),w.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:h=>i(h.target.value),className:"input"}),w.jsx("button",{onClick:l,className:"btn-primary",children:"Login"}),w.jsx("div",{className:"text-center text-gray-400 my-2",children:"OR"}),w.jsx("button",{onClick:u,className:"btn-google",children:"Continue with Google"}),w.jsxs("p",{className:"mt-4 text-sm text-center",children:["Don't have an account? ",w.jsx(Hs,{to:"/register",className:"text-blue-400",children:"Register"})]})]})})},IO=()=>{const[t,e]=M.useState(""),[n,i]=M.useState(""),[o,l]=M.useState(""),u=$i(),h=async()=>{if(n!==o)return alert("Passwords do not match");try{await gT(At,t,n),u("/login")}catch(m){alert(m.message)}},p=async()=>{try{await lv(At,h1),u("/login")}catch(m){alert(m.message)}};return w.jsx("div",{className:"min-h-screen bg-gradient-to-b from-black to-blue-900 flex items-center justify-center text-white",children:w.jsxs("div",{className:"bg-black p-8 rounded-xl w-full max-w-md",children:[w.jsx("h2",{className:"text-2xl font-bold mb-2",children:"Create Account"}),w.jsx("input",{type:"email",placeholder:"Email",value:t,onChange:m=>e(m.target.value),className:"input"}),w.jsx("input",{type:"password",placeholder:"Password",value:n,onChange:m=>i(m.target.value),className:"input"}),w.jsx("input",{type:"password",placeholder:"Confirm Password",value:o,onChange:m=>l(m.target.value),className:"input"}),w.jsx("button",{onClick:h,className:"btn-primary",children:"Register"}),w.jsx("div",{className:"text-center text-gray-400 my-2",children:"OR"}),w.jsx("button",{onClick:p,className:"btn-google",children:"Continue with Google"}),w.jsxs("p",{className:"mt-4 text-sm text-center",children:["Already have an account? ",w.jsx(Hs,{to:"/login",className:"text-blue-400",children:"Login"})]})]})})};var H_;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})(H_||(H_={}));/**
 * @license
 * Copyright 2024 Google LLC
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
 */var z_;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(z_||(z_={}));var W_;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(W_||(W_={}));var V_;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT",t.HARM_CATEGORY_CIVIC_INTEGRITY="HARM_CATEGORY_CIVIC_INTEGRITY"})(V_||(V_={}));var G_;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(G_||(G_={}));var K_;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(K_||(K_={}));var q_;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(q_||(q_={}));var Zs;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.BLOCKLIST="BLOCKLIST",t.PROHIBITED_CONTENT="PROHIBITED_CONTENT",t.SPII="SPII",t.MALFORMED_FUNCTION_CALL="MALFORMED_FUNCTION_CALL",t.OTHER="OTHER"})(Zs||(Zs={}));var Y_;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Y_||(Y_={}));var Q_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(Q_||(Q_={}));var X_;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(X_||(X_={}));var J_;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(J_||(J_={}));Zs.RECITATION,Zs.SAFETY,Zs.LANGUAGE;const TO=()=>{const[t,e]=M.useState({}),[n,i]=M.useState(""),[o,l]=M.useState([]),[u,h]=M.useState(!1),[p,m]=M.useState(!1),[v,y]=M.useState(!0),_=$i();M.useEffect(()=>{const $=At.onAuthStateChanged(W=>{if(!W)_("/login");else{y(!1);const re=wn(Cn,"tasks/"+W.uid),me=zE(re,we=>{const ye=we.val()||{};e(ye)});return()=>me()}});return()=>$()},[_]);const I=Object.keys(t).length,b=Object.values(t).filter($=>$.completed).length,A=I===0?0:Math.round(b/I*100),j=Object.entries(t).map(([W,re])=>({id:W,...re})).filter(W=>!W.completed&&(!W.status||W.status==="pending")).sort((W,re)=>new Date(re.createdAt)-new Date(W.createdAt))[0],H=async $=>{if($){m(!0);try{const W=At.currentUser;if(W){const re=wn(Cn,`tasks/${W.uid}/${$}`);await kl(re,{status:"in-progress",acceptedAt:new Date().toISOString()})}}catch(W){console.error("Error accepting task:",W)}finally{m(!1)}}},U=async $=>{$.preventDefault();const W=n.trim();if(W){l(re=>[...re,{sender:"user",content:W}]),i(""),h(!0);try{const me=`
You are a helpful assistant for a task manager app. Reply only with task-related answers based on this data.

${Object.values(t).map((qe,Pt)=>`Task ${Pt+1}:
- Title: ${qe.title}
- Description: ${qe.description}
- Status: ${qe.status||"pending"}
- Priority: ${qe.priority}
- Assignee: ${qe.assignee}
- Completed: ${qe.completed?"Yes":"No"}`).join(`

`)}

User query: "${W}"
`,lt=(await(await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDCpPTfFoOuTDnc57hbfYGY7PKZHyyZ3iQ",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({contents:[{role:"user",parts:[{text:me}]}]})})).json())?.candidates?.[0]?.content?.parts?.map(qe=>qe.text)?.join("")||"Sorry, I could not process your request.";l(qe=>[...qe,{sender:"ai",content:lt}])}catch(re){console.error("AI Error:",re),l(me=>[...me,{sender:"ai",content:"Something went wrong. Please try again later."}])}finally{h(!1)}}};return v?w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center",children:w.jsx("div",{className:"text-white text-2xl",children:"Loading..."})}):w.jsx("div",{className:"dashboard min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white p-8",children:w.jsxs("div",{className:"max-w-7xl mx-auto",children:[w.jsxs("header",{className:"flex justify-between items-center mb-8",children:[w.jsxs("div",{children:[w.jsx("h1",{className:"text-3xl font-bold",children:"TaskFlow AI"}),w.jsxs("p",{className:"text-gray-300",children:["Welcome back, ",At.currentUser?.email]})]}),w.jsxs("div",{className:"flex space-x-4",children:[w.jsx("button",{className:"bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition-colors",onClick:()=>_("/tasks"),children:"+ Add Task"}),w.jsx("button",{className:"bg-black px-4 py-2 rounded-md hover:bg-gray-800 transition-colors",onClick:()=>At.signOut().then(()=>_("/login")),children:"Sign Out"})]})]}),w.jsxs("section",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-8",children:[w.jsxs("div",{className:"bg-black p-4 rounded-lg",children:[w.jsx("h3",{className:"text-gray-300 font-medium",children:"Total Tasks"}),w.jsx("p",{className:"text-3xl font-bold",children:I})]}),w.jsxs("div",{className:"bg-black p-4 rounded-lg",children:[w.jsx("h3",{className:"text-gray-300 font-medium",children:"Completed"}),w.jsx("p",{className:"text-3xl font-bold text-green-400",children:b})]}),w.jsxs("div",{className:"bg-black p-4 rounded-lg",children:[w.jsx("h3",{className:"text-gray-300 font-medium",children:"Progress"}),w.jsxs("div",{className:"flex items-center space-x-2",children:[w.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2.5",children:w.jsx("div",{className:"bg-purple-600 h-2.5 rounded-full",style:{width:`${A}%`}})}),w.jsxs("span",{className:"text-xl font-bold",children:[A,"%"]})]})]})]}),w.jsxs("div",{className:"flex flex-col lg:flex-row gap-6",children:[w.jsxs("section",{className:"bg-black p-6 rounded-lg lg:w-2/3",children:[w.jsx("h2",{className:"text-xl font-bold mb-4",children:"Recent Tasks"}),Object.keys(t).length===0?w.jsxs("div",{className:"text-center py-8 text-gray-400",children:[w.jsx("p",{children:"No tasks found"}),w.jsx("button",{className:"mt-4 bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700",onClick:()=>_("/tasks"),children:"Create Your First Task"})]}):w.jsx("ul",{className:"space-y-3",children:Object.entries(t).sort(([,$],[,W])=>new Date(W.createdAt)-new Date($.createdAt)).map(([$,W])=>w.jsxs("li",{className:`p-4 rounded-md cursor-pointer ${W.completed?"bg-gray-800":"bg-gray-900 hover:bg-gray-800"}`,children:[w.jsxs("div",{className:"flex justify-between items-center mb-2",children:[w.jsx("h3",{className:`font-medium ${W.completed?"line-through text-gray-400":""}`,children:W.title}),W.completed?w.jsx("span",{className:"text-green-400 text-sm",children:"✓ Completed"}):w.jsx("button",{className:"bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700",onClick:re=>{re.stopPropagation(),_(`/complete-task/${$}`)},children:"Mark Complete"})]}),w.jsx("p",{className:`text-sm mb-3 ${W.completed?"text-gray-500":"text-gray-300"}`,children:W.description}),w.jsxs("div",{className:"flex flex-wrap gap-2 text-xs",children:[W.dueDate&&w.jsxs("span",{className:"bg-gray-700 px-2 py-1 rounded",children:["Due: ",new Date(W.dueDate).toLocaleDateString()]}),W.assignee&&w.jsxs("span",{className:"bg-gray-700 px-2 py-1 rounded",children:["Assignee: ",W.assignee]}),w.jsxs("span",{className:`px-2 py-1 rounded ${W.priority==="High"?"bg-red-500 text-white":W.priority==="Medium"?"bg-yellow-500 text-black":"bg-green-500 text-white"}`,children:[W.priority," Priority"]}),w.jsx("span",{className:`px-2 py-1 rounded ${W.status==="completed"?"bg-green-500 text-white":W.status==="in-progress"?"bg-blue-500 text-white":"bg-gray-500 text-white"}`,children:W.status||"pending"})]})]},$))})]}),w.jsxs("section",{className:"bg-black p-6 rounded-lg lg:w-1/3 space-y-6",children:[w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl font-bold mb-3",children:"Action"}),j?w.jsxs("div",{className:"bg-gray-900 p-4 rounded-md",children:[w.jsx("h3",{className:"font-medium mb-1",children:j.title}),w.jsx("p",{className:"text-sm text-gray-300 mb-3",children:j.description}),w.jsxs("div",{className:"flex flex-wrap gap-2 text-xs mb-3",children:[j.dueDate&&w.jsxs("span",{className:"bg-gray-800 px-2 py-1 rounded",children:["Due: ",new Date(j.dueDate).toLocaleDateString()]}),j.assignee&&w.jsxs("span",{className:"bg-gray-800 px-2 py-1 rounded",children:["Assignee: ",j.assignee]}),w.jsxs("span",{className:`px-2 py-1 rounded ${j.priority==="High"?"bg-red-500 text-white":j.priority==="Medium"?"bg-yellow-500 text-black":"bg-green-500 text-white"}`,children:[j.priority," Priority"]})]}),w.jsx("button",{onClick:()=>H(j.id),disabled:p,className:`w-full py-2 rounded-md text-sm font-medium ${p?"bg-gray-600":"bg-green-600 hover:bg-green-700"}`,children:p?"Accepting...":"Accept Task"})]}):w.jsx("div",{className:"bg-gray-900 p-4 rounded-md text-center text-gray-400",children:"No tasks requiring immediate action"})]}),w.jsxs("div",{children:[w.jsx("h2",{className:"text-xl font-bold mb-3",children:"AI Assistant"}),w.jsxs("div",{className:"bg-gray-900 rounded-lg p-4",children:[w.jsx("p",{className:"text-sm text-gray-300 mb-4",children:"Start a conversation with your AI assistant! Ask about your tasks, schedule, or get productivity tips."}),w.jsxs("div",{className:"chat-messages h-64 overflow-y-auto mb-4 bg-gray-800 rounded-lg p-3",children:[o.length===0?w.jsx("p",{className:"text-gray-400 text-center mt-16",children:"Ask your AI assistant anything..."}):o.map(($,W)=>w.jsx("div",{className:`mb-3 ${$.sender==="user"?"text-right":"text-left"}`,children:w.jsx("div",{className:`inline-block max-w-xs p-3 rounded-lg text-sm ${$.sender==="user"?"bg-purple-600":"bg-gray-700"}`,children:$.content})},W)),u&&w.jsx("div",{className:"text-center text-gray-400 py-2",children:w.jsxs("div",{className:"inline-flex space-x-1",children:[w.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce"}),w.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"}),w.jsx("div",{className:"w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"})]})})]}),w.jsxs("form",{onSubmit:U,className:"flex",children:[w.jsx("input",{type:"text",value:n,onChange:$=>i($.target.value),placeholder:"Type your question...",className:"flex-1 bg-gray-800 text-white p-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500",disabled:u}),w.jsx("button",{type:"submit",className:"bg-purple-600 px-4 py-3 rounded-r-lg hover:bg-purple-700 transition-colors",disabled:u,children:u?"...":"Send"})]})]})]})]})]})]})})},kO=()=>{const[t,e]=M.useState({}),[n,i]=M.useState({title:"",description:"",dueDate:"",priority:"Medium",assignee:"",status:"pending",createdAt:new Date().toISOString()}),[o,l]=M.useState(null),[u,h]=M.useState(!0),p=$i();M.useEffect(()=>{const A=At.onAuthStateChanged(N=>{if(!N)p("/login");else{h(!1);const j=wn(Cn,"tasks/"+N.uid),H=zE(j,U=>{e(U.val()||{})});return()=>H()}});return()=>A()},[p]);const m=A=>{i(N=>({...N,[A.target.name]:A.target.value}))},v=()=>{i({title:"",description:"",dueDate:"",priority:"Medium",assignee:"",status:"pending",createdAt:new Date().toISOString()}),l(null)},y=async A=>{if(A.preventDefault(),!n.title||!n.description){alert("Please fill in title and description");return}const N=At.currentUser;if(!N){p("/login");return}const j={...n,completed:!1,createdAt:new Date().toISOString()};try{o?await kl(wn(Cn,`tasks/${N.uid}/${o}`),j):await IA(wn(Cn,"tasks/"+N.uid),j),v()}catch(H){console.error("Error saving task:",H),alert("Error saving task. Please try again.")}},_=A=>{l(A),i(t[A])},I=async A=>{if(window.confirm("Are you sure you want to delete this task?")){const N=At.currentUser;if(!N){p("/login");return}try{await TA(wn(Cn,`tasks/${N.uid}/${A}`)),o===A&&v()}catch(j){console.error("Error deleting task:",j),alert("Error deleting task. Please try again.")}}},b=A=>A?new Date(A).toISOString().split("T")[0]:"";return u?w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center",children:w.jsx("div",{className:"text-white text-2xl",children:"Loading..."})}):w.jsx("div",{className:"task-manager min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white p-8",children:w.jsxs("div",{className:"max-w-4xl mx-auto",children:[w.jsx("button",{onClick:()=>p("/dashboard"),className:"mb-6 px-4 py-2 bg-black rounded-md hover:bg-gray-800 transition-colors",children:"← Back to Dashboard"}),w.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[w.jsxs("div",{className:"bg-black p-6 rounded-lg",children:[w.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Create New Task"}),w.jsxs("form",{onSubmit:y,children:[w.jsx("div",{className:"mb-4",children:w.jsx("input",{type:"text",name:"title",placeholder:"What needs to be done?",className:"w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",value:n.title,onChange:m,required:!0})}),w.jsx("div",{className:"mb-4",children:w.jsx("textarea",{name:"description",placeholder:"Add details about the task",className:"w-full p-3 bg-gray-800 rounded-md h-24 focus:outline-none focus:ring-2 focus:ring-purple-500",value:n.description,onChange:m,required:!0})}),w.jsxs("div",{className:"grid grid-cols-2 gap-4 mb-4",children:[w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Due Date"}),w.jsx("input",{type:"date",name:"dueDate",className:"w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",value:b(n.dueDate),onChange:m})]}),w.jsxs("div",{children:[w.jsx("label",{className:"block text-sm text-gray-400 mb-1",children:"Priority"}),w.jsxs("select",{name:"priority",className:"w-full p-2 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",value:n.priority,onChange:m,children:[w.jsx("option",{value:"High",children:"High"}),w.jsx("option",{value:"Medium",children:"Medium"}),w.jsx("option",{value:"Low",children:"Low"})]})]})]}),w.jsx("div",{className:"mb-6",children:w.jsx("input",{type:"text",name:"assignee",placeholder:"Who should do this task?",className:"w-full p-3 bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500",value:n.assignee,onChange:m})}),w.jsx("button",{type:"submit",className:"w-full bg-purple-600 py-3 rounded-md hover:bg-purple-700 transition-colors font-medium",children:o?"Update Task":"Create Task"})]})]}),w.jsxs("div",{className:"bg-black p-6 rounded-lg",children:[w.jsx("h2",{className:"text-2xl font-bold mb-6",children:"Added Tasks"}),Object.keys(t).length===0?w.jsxs("div",{className:"text-center py-8 text-gray-400",children:[w.jsx("p",{children:"No tasks added yet."}),w.jsx("p",{className:"mt-2",children:"Create your first task using the form"})]}):w.jsx("ul",{className:"space-y-3 max-h-[500px] overflow-y-auto",children:Object.entries(t).map(([A,N])=>w.jsxs("li",{className:`p-4 rounded-md cursor-pointer ${N.completed?"bg-gray-800":"bg-gray-900 hover:bg-gray-800"} ${o===A?"ring-2 ring-purple-500":""}`,children:[w.jsxs("div",{className:"flex justify-between items-start mb-2",children:[w.jsxs("div",{className:"flex items-center",children:[w.jsx("input",{type:"checkbox",checked:N.completed||!1,onChange:()=>{const j=At.currentUser;j&&kl(wn(Cn,`tasks/${j.uid}/${A}`),{completed:!N.completed,status:N.completed?"pending":"completed"})},className:"mr-3 h-5 w-5 rounded focus:ring-purple-500"}),w.jsx("h3",{className:`font-medium ${N.completed?"line-through text-gray-400":""}`,children:N.title})]}),w.jsxs("div",{className:"flex space-x-2",children:[w.jsx("button",{onClick:()=>_(A),className:"text-blue-400 hover:text-blue-300 text-sm",children:"Edit"}),w.jsx("button",{onClick:()=>I(A),className:"text-red-500 hover:text-red-400 text-sm",children:"Delete"})]})]}),w.jsx("p",{className:`text-sm ml-8 ${N.completed?"text-gray-500":"text-gray-300"}`,children:N.description}),w.jsxs("div",{className:"flex flex-wrap gap-2 mt-3 ml-8 text-xs",children:[N.dueDate&&w.jsxs("span",{className:"bg-gray-700 px-2 py-1 rounded",children:["Due: ",new Date(N.dueDate).toLocaleDateString()]}),N.assignee&&w.jsxs("span",{className:"bg-gray-700 px-2 py-1 rounded",children:["Assignee: ",N.assignee]}),w.jsxs("span",{className:`px-2 py-1 rounded ${N.priority==="High"?"bg-red-500 text-white":N.priority==="Medium"?"bg-yellow-500 text-black":"bg-green-500 text-white"}`,children:[N.priority," Priority"]}),w.jsx("span",{className:`px-2 py-1 rounded ${N.status==="completed"?"bg-green-500 text-white":N.status==="in-progress"?"bg-blue-500 text-white":"bg-gray-500 text-white"}`,children:N.status||"pending"})]})]},A))})]})]})]})})},NO=()=>{const{taskId:t}=Y0(),e=$i(),n=At.currentUser,[i,o]=M.useState(null),[l,u]=M.useState(""),[h,p]=M.useState(null),[m,v]=M.useState(!1),[y,_]=M.useState(""),[I,b]=M.useState(0);M.useEffect(()=>{if(!n){e("/login");return}(async()=>{try{const U=await kA(wn(Cn,`tasks/${n.uid}/${t}`));U.exists()?o(U.val()):_("Task not found")}catch(U){_("Failed to load task"),console.error(U)}})()},[n,t,e]);const A=H=>{const U=H.target.files[0];if(U){if(!["application/pdf","image/jpeg","image/png","application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(U.type)){_("Invalid file type. Please upload PDF, JPG, PNG, or DOC files.");return}if(U.size>5*1024*1024){_("File size should be less than 5MB");return}p(U),_("")}},N=async H=>{if(H.preventDefault(),!l.trim()||l.trim().length<10){_("Please add at least 10 characters in completion notes");return}if(!n){_("User not authenticated");return}v(!0),_(""),b(0);try{let U=i?.proofUrl||"";h?U=await j(h,n.uid,t):U="",await kl(wn(Cn,`tasks/${n.uid}/${t}`),{completed:!0,completionNotes:l.trim(),proofUrl:U,completedAt:new Date().toISOString(),status:"completed"}),e("/dashboard",{state:{message:"Task completed successfully!",alertType:"success"}})}catch(U){console.error("Submission error:",U),_(U.message||"Failed to complete task. Please try again.")}finally{v(!1),b(0)}},j=(H,U,$)=>new Promise((W,re)=>{const me=gO(CO,`task-proofs/${U}/${$}/${H.name}`),we=pO(me,H);we.on("state_changed",ye=>{const lt=ye.bytesTransferred/ye.totalBytes*100;b(Math.round(lt))},ye=>re(ye),async()=>{try{const ye=await mO(we.snapshot.ref);W(ye)}catch(ye){re(ye)}})});return i?w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 text-white p-8",children:w.jsxs("div",{className:"max-w-3xl mx-auto",children:[w.jsx("button",{onClick:()=>e("/dashboard"),className:"mb-6 bg-black px-4 py-2 rounded hover:bg-gray-800 transition-colors",children:"← Back to Dashboard"}),w.jsxs("div",{className:"bg-black rounded-lg p-6 shadow-lg",children:[w.jsxs("h1",{className:"text-2xl font-bold mb-2",children:["Complete Task: ",i.title]}),w.jsx("p",{className:"text-gray-300 mb-6",children:i.description}),w.jsxs("form",{onSubmit:N,children:[w.jsxs("div",{className:"mb-6",children:[w.jsx("label",{className:"block text-gray-300 mb-2 font-medium",children:"Completion Notes *"}),w.jsx("textarea",{className:"w-full p-3 bg-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-purple-500",placeholder:"Describe how you completed this task...",rows:"4",value:l,onChange:H=>u(H.target.value),required:!0,minLength:10}),w.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Minimum 10 characters required"})]}),w.jsxs("div",{className:"mb-6",children:[w.jsx("label",{className:"block text-gray-300 mb-2 font-medium",children:"Upload Proof (Optional)"}),w.jsxs("div",{className:"flex items-center",children:[w.jsxs("label",{className:"cursor-pointer bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-md transition-colors",children:[w.jsx("span",{children:h?h.name:"Choose File"}),w.jsx("input",{type:"file",className:"hidden",onChange:A,accept:".pdf,.doc,.docx,.jpg,.jpeg,.png"})]}),h&&w.jsx("button",{type:"button",onClick:()=>p(null),className:"ml-2 text-red-500 hover:text-red-400",children:"Remove"})]}),w.jsx("p",{className:"text-xs text-gray-400 mt-1",children:"Supported formats: PDF, DOC/DOCX, JPG/PNG (Max 5MB)"}),I>0&&I<100&&w.jsxs("div",{className:"mt-2",children:[w.jsx("div",{className:"w-full bg-gray-700 rounded-full h-2.5",children:w.jsx("div",{className:"bg-blue-600 h-2.5 rounded-full",style:{width:`${I}%`}})}),w.jsxs("p",{className:"text-xs text-gray-300 mt-1",children:["Uploading: ",I,"%"]})]})]}),y&&w.jsx("div",{className:"mb-4 p-3 bg-red-900/50 text-red-300 rounded-md text-sm",children:y}),w.jsx("button",{type:"submit",disabled:m,className:`w-full py-3 rounded-md font-medium ${m?"bg-gray-600 cursor-not-allowed":"bg-green-600 hover:bg-green-700"} transition-colors`,children:m?w.jsxs("span",{className:"flex items-center justify-center",children:[w.jsxs("svg",{className:"animate-spin -ml-1 mr-3 h-5 w-5 text-white",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",children:[w.jsx("circle",{className:"opacity-25",cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"4"}),w.jsx("path",{className:"opacity-75",fill:"currentColor",d:"M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"})]}),h?"Uploading and Submitting...":"Submitting..."]}):"Mark as Completed"})]})]})]})}):w.jsx("div",{className:"min-h-screen bg-gradient-to-br from-blue-900 to-indigo-800 flex items-center justify-center text-white",children:w.jsx("div",{className:"text-center",children:y?w.jsxs(w.Fragment,{children:[w.jsx("p",{className:"text-red-500 mb-4",children:y}),w.jsx("button",{onClick:()=>e("/dashboard"),className:"bg-black px-4 py-2 rounded hover:bg-gray-800 transition-colors",children:"Back to Dashboard"})]}):w.jsx("p",{children:"Loading task details..."})})})};function RO(){return w.jsx(yC,{children:w.jsxs(dC,{children:[w.jsx(Pr,{path:"/",element:w.jsx(OC,{})}),w.jsx(Pr,{path:"/login",element:w.jsx(SO,{})}),w.jsx(Pr,{path:"/register",element:w.jsx(IO,{})}),w.jsx(Pr,{path:"/dashboard",element:w.jsx(TO,{})}),w.jsx(Pr,{path:"/tasks",element:w.jsx(kO,{})}),w.jsx(Pr,{path:"/complete-task/:taskId",element:w.jsx(NO,{})})]})})}v0.createRoot(document.getElementById("root")).render(w.jsx(ey.StrictMode,{children:w.jsx(RO,{})}));
