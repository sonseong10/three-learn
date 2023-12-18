(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function tx(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var N_={exports:{}},Fc={},D_={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Da=Symbol.for("react.element"),nx=Symbol.for("react.portal"),ix=Symbol.for("react.fragment"),rx=Symbol.for("react.strict_mode"),sx=Symbol.for("react.profiler"),ox=Symbol.for("react.provider"),ax=Symbol.for("react.context"),lx=Symbol.for("react.forward_ref"),cx=Symbol.for("react.suspense"),ux=Symbol.for("react.memo"),fx=Symbol.for("react.lazy"),hp=Symbol.iterator;function dx(n){return n===null||typeof n!="object"?null:(n=hp&&n[hp]||n["@@iterator"],typeof n=="function"?n:null)}var U_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O_=Object.assign,F_={};function xo(n,e,t){this.props=n,this.context=e,this.refs=F_,this.updater=t||U_}xo.prototype.isReactComponent={};xo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};xo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function k_(){}k_.prototype=xo.prototype;function Gd(n,e,t){this.props=n,this.context=e,this.refs=F_,this.updater=t||U_}var Wd=Gd.prototype=new k_;Wd.constructor=Gd;O_(Wd,xo.prototype);Wd.isPureReactComponent=!0;var pp=Array.isArray,B_=Object.prototype.hasOwnProperty,Xd={current:null},z_={key:!0,ref:!0,__self:!0,__source:!0};function H_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)B_.call(e,i)&&!z_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Da,type:n,key:s,ref:o,props:r,_owner:Xd.current}}function hx(n,e){return{$$typeof:Da,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function jd(n){return typeof n=="object"&&n!==null&&n.$$typeof===Da}function px(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var mp=/\/+/g;function fu(n,e){return typeof n=="object"&&n!==null&&n.key!=null?px(""+n.key):e.toString(36)}function kl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Da:case nx:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+fu(o,0):i,pp(r)?(t="",n!=null&&(t=n.replace(mp,"$&/")+"/"),kl(r,e,t,"",function(c){return c})):r!=null&&(jd(r)&&(r=hx(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(mp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",pp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+fu(s,a);o+=kl(s,e,t,l,r)}else if(l=dx(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+fu(s,a++),o+=kl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(n,e,t){if(n==null)return n;var i=[],r=0;return kl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function mx(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ln={current:null},Bl={transition:null},gx={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:Bl,ReactCurrentOwner:Xd};$e.Children={map:Xa,forEach:function(n,e,t){Xa(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Xa(n,function(){e++}),e},toArray:function(n){return Xa(n,function(e){return e})||[]},only:function(n){if(!jd(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};$e.Component=xo;$e.Fragment=ix;$e.Profiler=sx;$e.PureComponent=Gd;$e.StrictMode=rx;$e.Suspense=cx;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=gx;$e.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=O_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xd.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)B_.call(e,l)&&!z_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Da,type:n.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(n){return n={$$typeof:ax,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:ox,_context:n},n.Consumer=n};$e.createElement=H_;$e.createFactory=function(n){var e=H_.bind(null,n);return e.type=n,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(n){return{$$typeof:lx,render:n}};$e.isValidElement=jd;$e.lazy=function(n){return{$$typeof:fx,_payload:{_status:-1,_result:n},_init:mx}};$e.memo=function(n,e){return{$$typeof:ux,type:n,compare:e===void 0?null:e}};$e.startTransition=function(n){var e=Bl.transition;Bl.transition={};try{n()}finally{Bl.transition=e}};$e.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};$e.useCallback=function(n,e){return ln.current.useCallback(n,e)};$e.useContext=function(n){return ln.current.useContext(n)};$e.useDebugValue=function(){};$e.useDeferredValue=function(n){return ln.current.useDeferredValue(n)};$e.useEffect=function(n,e){return ln.current.useEffect(n,e)};$e.useId=function(){return ln.current.useId()};$e.useImperativeHandle=function(n,e,t){return ln.current.useImperativeHandle(n,e,t)};$e.useInsertionEffect=function(n,e){return ln.current.useInsertionEffect(n,e)};$e.useLayoutEffect=function(n,e){return ln.current.useLayoutEffect(n,e)};$e.useMemo=function(n,e){return ln.current.useMemo(n,e)};$e.useReducer=function(n,e,t){return ln.current.useReducer(n,e,t)};$e.useRef=function(n){return ln.current.useRef(n)};$e.useState=function(n){return ln.current.useState(n)};$e.useSyncExternalStore=function(n,e,t){return ln.current.useSyncExternalStore(n,e,t)};$e.useTransition=function(){return ln.current.useTransition()};$e.version="18.2.0";D_.exports=$e;var _r=D_.exports;const Ks=tx(_r);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _x=_r,vx=Symbol.for("react.element"),yx=Symbol.for("react.fragment"),xx=Object.prototype.hasOwnProperty,Sx=_x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mx={key:!0,ref:!0,__self:!0,__source:!0};function V_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)xx.call(e,i)&&!Mx.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:vx,type:n,key:s,ref:o,props:r,_owner:Sx.current}}Fc.Fragment=yx;Fc.jsx=V_;Fc.jsxs=V_;N_.exports=Fc;var Je=N_.exports,Rf={},G_={exports:{}},bn={},W_={exports:{}},X_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(U,k){var F=U.length;U.push(k);e:for(;0<F;){var L=F-1>>>1,B=U[L];if(0<r(B,k))U[L]=k,U[F]=B,F=L;else break e}}function t(U){return U.length===0?null:U[0]}function i(U){if(U.length===0)return null;var k=U[0],F=U.pop();if(F!==k){U[0]=F;e:for(var L=0,B=U.length,ce=B>>>1;L<ce;){var ae=2*(L+1)-1,fe=U[ae],ge=ae+1,Ae=U[ge];if(0>r(fe,F))ge<B&&0>r(Ae,fe)?(U[L]=Ae,U[ge]=F,L=ge):(U[L]=fe,U[ae]=F,L=ae);else if(ge<B&&0>r(Ae,F))U[L]=Ae,U[ge]=F,L=ge;else break e}}return k}function r(U,k){var F=U.sortIndex-k.sortIndex;return F!==0?F:U.id-k.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(U){for(var k=t(c);k!==null;){if(k.callback===null)i(c);else if(k.startTime<=U)i(c),k.sortIndex=k.expirationTime,e(l,k);else break;k=t(c)}}function x(U){if(y=!1,g(U),!_)if(t(l)!==null)_=!0,q(E);else{var k=t(c);k!==null&&$(x,k.startTime-U)}}function E(U,k){_=!1,y&&(y=!1,h(P),P=-1),p=!0;var F=d;try{for(g(k),f=t(l);f!==null&&(!(f.expirationTime>k)||U&&!W());){var L=f.callback;if(typeof L=="function"){f.callback=null,d=f.priorityLevel;var B=L(f.expirationTime<=k);k=n.unstable_now(),typeof B=="function"?f.callback=B:f===t(l)&&i(l),g(k)}else i(l);f=t(l)}if(f!==null)var ce=!0;else{var ae=t(c);ae!==null&&$(x,ae.startTime-k),ce=!1}return ce}finally{f=null,d=F,p=!1}}var w=!1,M=null,P=-1,S=5,R=-1;function W(){return!(n.unstable_now()-R<S)}function K(){if(M!==null){var U=n.unstable_now();R=U;var k=!0;try{k=M(!0,U)}finally{k?Q():(w=!1,M=null)}}else w=!1}var Q;if(typeof v=="function")Q=function(){v(K)};else if(typeof MessageChannel<"u"){var D=new MessageChannel,X=D.port2;D.port1.onmessage=K,Q=function(){X.postMessage(null)}}else Q=function(){m(K,0)};function q(U){M=U,w||(w=!0,Q())}function $(U,k){P=m(function(){U(n.unstable_now())},k)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(U){U.callback=null},n.unstable_continueExecution=function(){_||p||(_=!0,q(E))},n.unstable_forceFrameRate=function(U){0>U||125<U?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):S=0<U?Math.floor(1e3/U):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(U){switch(d){case 1:case 2:case 3:var k=3;break;default:k=d}var F=d;d=k;try{return U()}finally{d=F}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(U,k){switch(U){case 1:case 2:case 3:case 4:case 5:break;default:U=3}var F=d;d=U;try{return k()}finally{d=F}},n.unstable_scheduleCallback=function(U,k,F){var L=n.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?L+F:L):F=L,U){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=F+B,U={id:u++,callback:k,priorityLevel:U,startTime:F,expirationTime:B,sortIndex:-1},F>L?(U.sortIndex=F,e(c,U),t(l)===null&&U===t(c)&&(y?(h(P),P=-1):y=!0,$(x,F-L))):(U.sortIndex=B,e(l,U),_||p||(_=!0,q(E))),U},n.unstable_shouldYield=W,n.unstable_wrapCallback=function(U){var k=d;return function(){var F=d;d=k;try{return U.apply(this,arguments)}finally{d=F}}}})(X_);W_.exports=X_;var Ex=W_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var j_=_r,Rn=Ex;function te(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var $_=new Set,ha={};function is(n,e){Zs(n,e),Zs(n+"Capture",e)}function Zs(n,e){for(ha[n]=e,n=0;n<e.length;n++)$_.add(e[n])}var Ni=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),bf=Object.prototype.hasOwnProperty,Tx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,gp={},_p={};function wx(n){return bf.call(_p,n)?!0:bf.call(gp,n)?!1:Tx.test(n)?_p[n]=!0:(gp[n]=!0,!1)}function Ax(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function Rx(n,e,t,i){if(e===null||typeof e>"u"||Ax(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Wt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Wt[n]=new cn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Wt[e]=new cn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Wt[n]=new cn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Wt[n]=new cn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Wt[n]=new cn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Wt[n]=new cn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Wt[n]=new cn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Wt[n]=new cn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Wt[n]=new cn(n,5,!1,n.toLowerCase(),null,!1,!1)});var $d=/[\-:]([a-z])/g;function Yd(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace($d,Yd);Wt[e]=new cn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace($d,Yd);Wt[e]=new cn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace($d,Yd);Wt[e]=new cn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Wt[n]=new cn(n,1,!1,n.toLowerCase(),null,!1,!1)});Wt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Wt[n]=new cn(n,1,!1,n.toLowerCase(),null,!0,!0)});function qd(n,e,t,i){var r=Wt.hasOwnProperty(e)?Wt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Rx(e,t,r,i)&&(t=null),i||r===null?wx(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var ki=j_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ja=Symbol.for("react.element"),Rs=Symbol.for("react.portal"),bs=Symbol.for("react.fragment"),Kd=Symbol.for("react.strict_mode"),Cf=Symbol.for("react.profiler"),Y_=Symbol.for("react.provider"),q_=Symbol.for("react.context"),Zd=Symbol.for("react.forward_ref"),Lf=Symbol.for("react.suspense"),Pf=Symbol.for("react.suspense_list"),Qd=Symbol.for("react.memo"),Yi=Symbol.for("react.lazy"),K_=Symbol.for("react.offscreen"),vp=Symbol.iterator;function Lo(n){return n===null||typeof n!="object"?null:(n=vp&&n[vp]||n["@@iterator"],typeof n=="function"?n:null)}var gt=Object.assign,du;function $o(n){if(du===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);du=e&&e[1]||""}return`
`+du+n}var hu=!1;function pu(n,e){if(!n||hu)return"";hu=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(n,[],e)}else{try{e.call()}catch(c){i=c}n.call(e.prototype)}else{try{throw Error()}catch(c){i=c}n()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{hu=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?$o(n):""}function bx(n){switch(n.tag){case 5:return $o(n.type);case 16:return $o("Lazy");case 13:return $o("Suspense");case 19:return $o("SuspenseList");case 0:case 2:case 15:return n=pu(n.type,!1),n;case 11:return n=pu(n.type.render,!1),n;case 1:return n=pu(n.type,!0),n;default:return""}}function If(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case bs:return"Fragment";case Rs:return"Portal";case Cf:return"Profiler";case Kd:return"StrictMode";case Lf:return"Suspense";case Pf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case q_:return(n.displayName||"Context")+".Consumer";case Y_:return(n._context.displayName||"Context")+".Provider";case Zd:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Qd:return e=n.displayName||null,e!==null?e:If(n.type)||"Memo";case Yi:e=n._payload,n=n._init;try{return If(n(e))}catch{}}return null}function Cx(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return If(e);case 8:return e===Kd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function vr(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Z_(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Lx(n){var e=Z_(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function $a(n){n._valueTracker||(n._valueTracker=Lx(n))}function Q_(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=Z_(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function ic(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Nf(n,e){var t=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function yp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=vr(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function J_(n,e){e=e.checked,e!=null&&qd(n,"checked",e,!1)}function Df(n,e){J_(n,e);var t=vr(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?Uf(n,e.type,t):e.hasOwnProperty("defaultValue")&&Uf(n,e.type,vr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function xp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function Uf(n,e,t){(e!=="number"||ic(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Yo=Array.isArray;function Hs(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+vr(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function Of(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Sp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(te(92));if(Yo(t)){if(1<t.length)throw Error(te(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:vr(t)}}function e0(n,e){var t=vr(e.value),i=vr(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Mp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function t0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ff(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?t0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ya,n0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ya=Ya||document.createElement("div"),Ya.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ya.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function pa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Jo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Px=["Webkit","ms","Moz","O"];Object.keys(Jo).forEach(function(n){Px.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Jo[e]=Jo[n]})});function i0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Jo.hasOwnProperty(n)&&Jo[n]?(""+e).trim():e+"px"}function r0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=i0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var Ix=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kf(n,e){if(e){if(Ix[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function Bf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var zf=null;function Jd(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Hf=null,Vs=null,Gs=null;function Ep(n){if(n=Fa(n)){if(typeof Hf!="function")throw Error(te(280));var e=n.stateNode;e&&(e=Vc(e),Hf(n.stateNode,n.type,e))}}function s0(n){Vs?Gs?Gs.push(n):Gs=[n]:Vs=n}function o0(){if(Vs){var n=Vs,e=Gs;if(Gs=Vs=null,Ep(n),e)for(n=0;n<e.length;n++)Ep(e[n])}}function a0(n,e){return n(e)}function l0(){}var mu=!1;function c0(n,e,t){if(mu)return n(e,t);mu=!0;try{return a0(n,e,t)}finally{mu=!1,(Vs!==null||Gs!==null)&&(l0(),o0())}}function ma(n,e){var t=n.stateNode;if(t===null)return null;var i=Vc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(te(231,e,typeof t));return t}var Vf=!1;if(Ni)try{var Po={};Object.defineProperty(Po,"passive",{get:function(){Vf=!0}}),window.addEventListener("test",Po,Po),window.removeEventListener("test",Po,Po)}catch{Vf=!1}function Nx(n,e,t,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(t,c)}catch(u){this.onError(u)}}var ea=!1,rc=null,sc=!1,Gf=null,Dx={onError:function(n){ea=!0,rc=n}};function Ux(n,e,t,i,r,s,o,a,l){ea=!1,rc=null,Nx.apply(Dx,arguments)}function Ox(n,e,t,i,r,s,o,a,l){if(Ux.apply(this,arguments),ea){if(ea){var c=rc;ea=!1,rc=null}else throw Error(te(198));sc||(sc=!0,Gf=c)}}function rs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function u0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Tp(n){if(rs(n)!==n)throw Error(te(188))}function Fx(n){var e=n.alternate;if(!e){if(e=rs(n),e===null)throw Error(te(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Tp(r),n;if(s===i)return Tp(r),e;s=s.sibling}throw Error(te(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(t.alternate!==i)throw Error(te(190))}if(t.tag!==3)throw Error(te(188));return t.stateNode.current===t?n:e}function f0(n){return n=Fx(n),n!==null?d0(n):null}function d0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=d0(n);if(e!==null)return e;n=n.sibling}return null}var h0=Rn.unstable_scheduleCallback,wp=Rn.unstable_cancelCallback,kx=Rn.unstable_shouldYield,Bx=Rn.unstable_requestPaint,St=Rn.unstable_now,zx=Rn.unstable_getCurrentPriorityLevel,eh=Rn.unstable_ImmediatePriority,p0=Rn.unstable_UserBlockingPriority,oc=Rn.unstable_NormalPriority,Hx=Rn.unstable_LowPriority,m0=Rn.unstable_IdlePriority,kc=null,hi=null;function Vx(n){if(hi&&typeof hi.onCommitFiberRoot=="function")try{hi.onCommitFiberRoot(kc,n,void 0,(n.current.flags&128)===128)}catch{}}var Kn=Math.clz32?Math.clz32:Xx,Gx=Math.log,Wx=Math.LN2;function Xx(n){return n>>>=0,n===0?32:31-(Gx(n)/Wx|0)|0}var qa=64,Ka=4194304;function qo(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ac(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=qo(a):(s&=o,s!==0&&(i=qo(s)))}else o=t&~r,o!==0?i=qo(o):s!==0&&(i=qo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-Kn(e),r=1<<t,i|=n[t],e&=~r;return i}function jx(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $x(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-Kn(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=jx(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Wf(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function g0(){var n=qa;return qa<<=1,!(qa&4194240)&&(qa=64),n}function gu(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ua(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-Kn(e),n[e]=t}function Yx(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-Kn(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function th(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-Kn(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var nt=0;function _0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var v0,nh,y0,x0,S0,Xf=!1,Za=[],or=null,ar=null,lr=null,ga=new Map,_a=new Map,Ji=[],qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ap(n,e){switch(n){case"focusin":case"focusout":or=null;break;case"dragenter":case"dragleave":ar=null;break;case"mouseover":case"mouseout":lr=null;break;case"pointerover":case"pointerout":ga.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":_a.delete(e.pointerId)}}function Io(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Fa(e),e!==null&&nh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function Kx(n,e,t,i,r){switch(e){case"focusin":return or=Io(or,n,e,t,i,r),!0;case"dragenter":return ar=Io(ar,n,e,t,i,r),!0;case"mouseover":return lr=Io(lr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ga.set(s,Io(ga.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,_a.set(s,Io(_a.get(s)||null,n,e,t,i,r)),!0}return!1}function M0(n){var e=Or(n.target);if(e!==null){var t=rs(e);if(t!==null){if(e=t.tag,e===13){if(e=u0(t),e!==null){n.blockedOn=e,S0(n.priority,function(){y0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function zl(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=jf(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);zf=i,t.target.dispatchEvent(i),zf=null}else return e=Fa(t),e!==null&&nh(e),n.blockedOn=t,!1;e.shift()}return!0}function Rp(n,e,t){zl(n)&&t.delete(e)}function Zx(){Xf=!1,or!==null&&zl(or)&&(or=null),ar!==null&&zl(ar)&&(ar=null),lr!==null&&zl(lr)&&(lr=null),ga.forEach(Rp),_a.forEach(Rp)}function No(n,e){n.blockedOn===e&&(n.blockedOn=null,Xf||(Xf=!0,Rn.unstable_scheduleCallback(Rn.unstable_NormalPriority,Zx)))}function va(n){function e(r){return No(r,n)}if(0<Za.length){No(Za[0],n);for(var t=1;t<Za.length;t++){var i=Za[t];i.blockedOn===n&&(i.blockedOn=null)}}for(or!==null&&No(or,n),ar!==null&&No(ar,n),lr!==null&&No(lr,n),ga.forEach(e),_a.forEach(e),t=0;t<Ji.length;t++)i=Ji[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<Ji.length&&(t=Ji[0],t.blockedOn===null);)M0(t),t.blockedOn===null&&Ji.shift()}var Ws=ki.ReactCurrentBatchConfig,lc=!0;function Qx(n,e,t,i){var r=nt,s=Ws.transition;Ws.transition=null;try{nt=1,ih(n,e,t,i)}finally{nt=r,Ws.transition=s}}function Jx(n,e,t,i){var r=nt,s=Ws.transition;Ws.transition=null;try{nt=4,ih(n,e,t,i)}finally{nt=r,Ws.transition=s}}function ih(n,e,t,i){if(lc){var r=jf(n,e,t,i);if(r===null)Au(n,e,i,cc,t),Ap(n,i);else if(Kx(r,n,e,t,i))i.stopPropagation();else if(Ap(n,i),e&4&&-1<qx.indexOf(n)){for(;r!==null;){var s=Fa(r);if(s!==null&&v0(s),s=jf(n,e,t,i),s===null&&Au(n,e,i,cc,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else Au(n,e,i,null,t)}}var cc=null;function jf(n,e,t,i){if(cc=null,n=Jd(i),n=Or(n),n!==null)if(e=rs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=u0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return cc=n,null}function E0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zx()){case eh:return 1;case p0:return 4;case oc:case Hx:return 16;case m0:return 536870912;default:return 16}default:return 16}}var tr=null,rh=null,Hl=null;function T0(){if(Hl)return Hl;var n,e=rh,t=e.length,i,r="value"in tr?tr.value:tr.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Hl=r.slice(n,1<i?1-i:void 0)}function Vl(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Qa(){return!0}function bp(){return!1}function Cn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Qa:bp,this.isPropagationStopped=bp,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Qa)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Qa)},persist:function(){},isPersistent:Qa}),e}var So={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=Cn(So),Oa=gt({},So,{view:0,detail:0}),eS=Cn(Oa),_u,vu,Do,Bc=gt({},Oa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:oh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Do&&(Do&&n.type==="mousemove"?(_u=n.screenX-Do.screenX,vu=n.screenY-Do.screenY):vu=_u=0,Do=n),_u)},movementY:function(n){return"movementY"in n?n.movementY:vu}}),Cp=Cn(Bc),tS=gt({},Bc,{dataTransfer:0}),nS=Cn(tS),iS=gt({},Oa,{relatedTarget:0}),yu=Cn(iS),rS=gt({},So,{animationName:0,elapsedTime:0,pseudoElement:0}),sS=Cn(rS),oS=gt({},So,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),aS=Cn(oS),lS=gt({},So,{data:0}),Lp=Cn(lS),cS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},fS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function dS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=fS[n])?!!e[n]:!1}function oh(){return dS}var hS=gt({},Oa,{key:function(n){if(n.key){var e=cS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=Vl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?uS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:oh,charCode:function(n){return n.type==="keypress"?Vl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Vl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),pS=Cn(hS),mS=gt({},Bc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Pp=Cn(mS),gS=gt({},Oa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:oh}),_S=Cn(gS),vS=gt({},So,{propertyName:0,elapsedTime:0,pseudoElement:0}),yS=Cn(vS),xS=gt({},Bc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),SS=Cn(xS),MS=[9,13,27,32],ah=Ni&&"CompositionEvent"in window,ta=null;Ni&&"documentMode"in document&&(ta=document.documentMode);var ES=Ni&&"TextEvent"in window&&!ta,w0=Ni&&(!ah||ta&&8<ta&&11>=ta),Ip=" ",Np=!1;function A0(n,e){switch(n){case"keyup":return MS.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function R0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Cs=!1;function TS(n,e){switch(n){case"compositionend":return R0(e);case"keypress":return e.which!==32?null:(Np=!0,Ip);case"textInput":return n=e.data,n===Ip&&Np?null:n;default:return null}}function wS(n,e){if(Cs)return n==="compositionend"||!ah&&A0(n,e)?(n=T0(),Hl=rh=tr=null,Cs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return w0&&e.locale!=="ko"?null:e.data;default:return null}}var AS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!AS[n.type]:e==="textarea"}function b0(n,e,t,i){s0(i),e=uc(e,"onChange"),0<e.length&&(t=new sh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var na=null,ya=null;function RS(n){B0(n,0)}function zc(n){var e=Is(n);if(Q_(e))return n}function bS(n,e){if(n==="change")return e}var C0=!1;if(Ni){var xu;if(Ni){var Su="oninput"in document;if(!Su){var Up=document.createElement("div");Up.setAttribute("oninput","return;"),Su=typeof Up.oninput=="function"}xu=Su}else xu=!1;C0=xu&&(!document.documentMode||9<document.documentMode)}function Op(){na&&(na.detachEvent("onpropertychange",L0),ya=na=null)}function L0(n){if(n.propertyName==="value"&&zc(ya)){var e=[];b0(e,ya,n,Jd(n)),c0(RS,e)}}function CS(n,e,t){n==="focusin"?(Op(),na=e,ya=t,na.attachEvent("onpropertychange",L0)):n==="focusout"&&Op()}function LS(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return zc(ya)}function PS(n,e){if(n==="click")return zc(e)}function IS(n,e){if(n==="input"||n==="change")return zc(e)}function NS(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ti=typeof Object.is=="function"?Object.is:NS;function xa(n,e){if(ti(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!bf.call(e,r)||!ti(n[r],e[r]))return!1}return!0}function Fp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function kp(n,e){var t=Fp(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=Fp(t)}}function P0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?P0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var n=window,e=ic();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=ic(n.document)}return e}function lh(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function DS(n){var e=I0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&P0(t.ownerDocument.documentElement,t)){if(i!==null&&lh(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=kp(t,s);var o=kp(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var US=Ni&&"documentMode"in document&&11>=document.documentMode,Ls=null,$f=null,ia=null,Yf=!1;function Bp(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Yf||Ls==null||Ls!==ic(i)||(i=Ls,"selectionStart"in i&&lh(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ia&&xa(ia,i)||(ia=i,i=uc($f,"onSelect"),0<i.length&&(e=new sh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ls)))}function Ja(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Ps={animationend:Ja("Animation","AnimationEnd"),animationiteration:Ja("Animation","AnimationIteration"),animationstart:Ja("Animation","AnimationStart"),transitionend:Ja("Transition","TransitionEnd")},Mu={},N0={};Ni&&(N0=document.createElement("div").style,"AnimationEvent"in window||(delete Ps.animationend.animation,delete Ps.animationiteration.animation,delete Ps.animationstart.animation),"TransitionEvent"in window||delete Ps.transitionend.transition);function Hc(n){if(Mu[n])return Mu[n];if(!Ps[n])return n;var e=Ps[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in N0)return Mu[n]=e[t];return n}var D0=Hc("animationend"),U0=Hc("animationiteration"),O0=Hc("animationstart"),F0=Hc("transitionend"),k0=new Map,zp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,e){k0.set(n,e),is(e,[n])}for(var Eu=0;Eu<zp.length;Eu++){var Tu=zp[Eu],OS=Tu.toLowerCase(),FS=Tu[0].toUpperCase()+Tu.slice(1);xr(OS,"on"+FS)}xr(D0,"onAnimationEnd");xr(U0,"onAnimationIteration");xr(O0,"onAnimationStart");xr("dblclick","onDoubleClick");xr("focusin","onFocus");xr("focusout","onBlur");xr(F0,"onTransitionEnd");Zs("onMouseEnter",["mouseout","mouseover"]);Zs("onMouseLeave",["mouseout","mouseover"]);Zs("onPointerEnter",["pointerout","pointerover"]);Zs("onPointerLeave",["pointerout","pointerover"]);is("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));is("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));is("onBeforeInput",["compositionend","keypress","textInput","paste"]);is("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));is("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));is("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));function Hp(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,Ox(i,e,void 0,n),n.currentTarget=null}function B0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Hp(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Hp(r,a,c),s=l}}}if(sc)throw n=Gf,sc=!1,Gf=null,n}function at(n,e){var t=e[Jf];t===void 0&&(t=e[Jf]=new Set);var i=n+"__bubble";t.has(i)||(z0(e,n,2,!1),t.add(i))}function wu(n,e,t){var i=0;e&&(i|=4),z0(t,n,i,e)}var el="_reactListening"+Math.random().toString(36).slice(2);function Sa(n){if(!n[el]){n[el]=!0,$_.forEach(function(t){t!=="selectionchange"&&(kS.has(t)||wu(t,!1,n),wu(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[el]||(e[el]=!0,wu("selectionchange",!1,e))}}function z0(n,e,t,i){switch(E0(e)){case 1:var r=Qx;break;case 4:r=Jx;break;default:r=ih}t=r.bind(null,e,t,n),r=void 0,!Vf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function Au(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}c0(function(){var c=s,u=Jd(t),f=[];e:{var d=k0.get(n);if(d!==void 0){var p=sh,_=n;switch(n){case"keypress":if(Vl(t)===0)break e;case"keydown":case"keyup":p=pS;break;case"focusin":_="focus",p=yu;break;case"focusout":_="blur",p=yu;break;case"beforeblur":case"afterblur":p=yu;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Cp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=nS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=_S;break;case D0:case U0:case O0:p=sS;break;case F0:p=yS;break;case"scroll":p=eS;break;case"wheel":p=SS;break;case"copy":case"cut":case"paste":p=aS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Pp}var y=(e&4)!==0,m=!y&&n==="scroll",h=y?d!==null?d+"Capture":null:d;y=[];for(var v=c,g;v!==null;){g=v;var x=g.stateNode;if(g.tag===5&&x!==null&&(g=x,h!==null&&(x=ma(v,h),x!=null&&y.push(Ma(v,x,g)))),m)break;v=v.return}0<y.length&&(d=new p(d,_,null,t,u),f.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==zf&&(_=t.relatedTarget||t.fromElement)&&(Or(_)||_[Di]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=t.relatedTarget||t.toElement,p=c,_=_?Or(_):null,_!==null&&(m=rs(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=Cp,x="onMouseLeave",h="onMouseEnter",v="mouse",(n==="pointerout"||n==="pointerover")&&(y=Pp,x="onPointerLeave",h="onPointerEnter",v="pointer"),m=p==null?d:Is(p),g=_==null?d:Is(_),d=new y(x,v+"leave",p,t,u),d.target=m,d.relatedTarget=g,x=null,Or(u)===c&&(y=new y(h,v+"enter",_,t,u),y.target=g,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,h=_,v=0,g=y;g;g=os(g))v++;for(g=0,x=h;x;x=os(x))g++;for(;0<v-g;)y=os(y),v--;for(;0<g-v;)h=os(h),g--;for(;v--;){if(y===h||h!==null&&y===h.alternate)break t;y=os(y),h=os(h)}y=null}else y=null;p!==null&&Vp(f,d,p,y,!1),_!==null&&m!==null&&Vp(f,m,_,y,!0)}}e:{if(d=c?Is(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var E=bS;else if(Dp(d))if(C0)E=IS;else{E=LS;var w=CS}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(E=PS);if(E&&(E=E(n,c))){b0(f,E,t,u);break e}w&&w(n,d,c),n==="focusout"&&(w=d._wrapperState)&&w.controlled&&d.type==="number"&&Uf(d,"number",d.value)}switch(w=c?Is(c):window,n){case"focusin":(Dp(w)||w.contentEditable==="true")&&(Ls=w,$f=c,ia=null);break;case"focusout":ia=$f=Ls=null;break;case"mousedown":Yf=!0;break;case"contextmenu":case"mouseup":case"dragend":Yf=!1,Bp(f,t,u);break;case"selectionchange":if(US)break;case"keydown":case"keyup":Bp(f,t,u)}var M;if(ah)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else Cs?A0(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(w0&&t.locale!=="ko"&&(Cs||P!=="onCompositionStart"?P==="onCompositionEnd"&&Cs&&(M=T0()):(tr=u,rh="value"in tr?tr.value:tr.textContent,Cs=!0)),w=uc(c,P),0<w.length&&(P=new Lp(P,n,null,t,u),f.push({event:P,listeners:w}),M?P.data=M:(M=R0(t),M!==null&&(P.data=M)))),(M=ES?TS(n,t):wS(n,t))&&(c=uc(c,"onBeforeInput"),0<c.length&&(u=new Lp("onBeforeInput","beforeinput",null,t,u),f.push({event:u,listeners:c}),u.data=M))}B0(f,e)})}function Ma(n,e,t){return{instance:n,listener:e,currentTarget:t}}function uc(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=ma(n,t),s!=null&&i.unshift(Ma(n,s,r)),s=ma(n,e),s!=null&&i.push(Ma(n,s,r))),n=n.return}return i}function os(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vp(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=ma(t,s),l!=null&&o.unshift(Ma(t,l,a))):r||(l=ma(t,s),l!=null&&o.push(Ma(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var BS=/\r\n?/g,zS=/\u0000|\uFFFD/g;function Gp(n){return(typeof n=="string"?n:""+n).replace(BS,`
`).replace(zS,"")}function tl(n,e,t){if(e=Gp(e),Gp(n)!==e&&t)throw Error(te(425))}function fc(){}var qf=null,Kf=null;function Zf(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,HS=typeof clearTimeout=="function"?clearTimeout:void 0,Wp=typeof Promise=="function"?Promise:void 0,VS=typeof queueMicrotask=="function"?queueMicrotask:typeof Wp<"u"?function(n){return Wp.resolve(null).then(n).catch(GS)}:Qf;function GS(n){setTimeout(function(){throw n})}function Ru(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),va(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);va(e)}function cr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function Xp(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var Mo=Math.random().toString(36).slice(2),ci="__reactFiber$"+Mo,Ea="__reactProps$"+Mo,Di="__reactContainer$"+Mo,Jf="__reactEvents$"+Mo,WS="__reactListeners$"+Mo,XS="__reactHandles$"+Mo;function Or(n){var e=n[ci];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Di]||t[ci]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=Xp(n);n!==null;){if(t=n[ci])return t;n=Xp(n)}return e}n=t,t=n.parentNode}return null}function Fa(n){return n=n[ci]||n[Di],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Is(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(te(33))}function Vc(n){return n[Ea]||null}var ed=[],Ns=-1;function Sr(n){return{current:n}}function ut(n){0>Ns||(n.current=ed[Ns],ed[Ns]=null,Ns--)}function ot(n,e){Ns++,ed[Ns]=n.current,n.current=e}var yr={},Qt=Sr(yr),pn=Sr(!1),Yr=yr;function Qs(n,e){var t=n.type.contextTypes;if(!t)return yr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function mn(n){return n=n.childContextTypes,n!=null}function dc(){ut(pn),ut(Qt)}function jp(n,e,t){if(Qt.current!==yr)throw Error(te(168));ot(Qt,e),ot(pn,t)}function H0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Cx(n)||"Unknown",r));return gt({},t,i)}function hc(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,Yr=Qt.current,ot(Qt,n),ot(pn,pn.current),!0}function $p(n,e,t){var i=n.stateNode;if(!i)throw Error(te(169));t?(n=H0(n,e,Yr),i.__reactInternalMemoizedMergedChildContext=n,ut(pn),ut(Qt),ot(Qt,n)):ut(pn),ot(pn,t)}var Ri=null,Gc=!1,bu=!1;function V0(n){Ri===null?Ri=[n]:Ri.push(n)}function jS(n){Gc=!0,V0(n)}function Mr(){if(!bu&&Ri!==null){bu=!0;var n=0,e=nt;try{var t=Ri;for(nt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ri=null,Gc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(n+1)),h0(eh,Mr),r}finally{nt=e,bu=!1}}return null}var Ds=[],Us=0,pc=null,mc=0,Nn=[],Dn=0,qr=null,bi=1,Ci="";function Pr(n,e){Ds[Us++]=mc,Ds[Us++]=pc,pc=n,mc=e}function G0(n,e,t){Nn[Dn++]=bi,Nn[Dn++]=Ci,Nn[Dn++]=qr,qr=n;var i=bi;n=Ci;var r=32-Kn(i)-1;i&=~(1<<r),t+=1;var s=32-Kn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-Kn(e)+r|t<<r|i,Ci=s+n}else bi=1<<s|t<<r|i,Ci=n}function ch(n){n.return!==null&&(Pr(n,1),G0(n,1,0))}function uh(n){for(;n===pc;)pc=Ds[--Us],Ds[Us]=null,mc=Ds[--Us],Ds[Us]=null;for(;n===qr;)qr=Nn[--Dn],Nn[Dn]=null,Ci=Nn[--Dn],Nn[Dn]=null,bi=Nn[--Dn],Nn[Dn]=null}var An=null,wn=null,dt=!1,Yn=null;function W0(n,e){var t=Fn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Yp(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,An=n,wn=cr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,An=n,wn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=qr!==null?{id:bi,overflow:Ci}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Fn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,An=n,wn=null,!0):!1;default:return!1}}function td(n){return(n.mode&1)!==0&&(n.flags&128)===0}function nd(n){if(dt){var e=wn;if(e){var t=e;if(!Yp(n,e)){if(td(n))throw Error(te(418));e=cr(t.nextSibling);var i=An;e&&Yp(n,e)?W0(i,t):(n.flags=n.flags&-4097|2,dt=!1,An=n)}}else{if(td(n))throw Error(te(418));n.flags=n.flags&-4097|2,dt=!1,An=n}}}function qp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;An=n}function nl(n){if(n!==An)return!1;if(!dt)return qp(n),dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Zf(n.type,n.memoizedProps)),e&&(e=wn)){if(td(n))throw X0(),Error(te(418));for(;e;)W0(n,e),e=cr(e.nextSibling)}if(qp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(te(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){wn=cr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}wn=null}}else wn=An?cr(n.stateNode.nextSibling):null;return!0}function X0(){for(var n=wn;n;)n=cr(n.nextSibling)}function Js(){wn=An=null,dt=!1}function fh(n){Yn===null?Yn=[n]:Yn.push(n)}var $S=ki.ReactCurrentBatchConfig;function jn(n,e){if(n&&n.defaultProps){e=gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var gc=Sr(null),_c=null,Os=null,dh=null;function hh(){dh=Os=_c=null}function ph(n){var e=gc.current;ut(gc),n._currentValue=e}function id(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Xs(n,e){_c=n,dh=Os=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(dn=!0),n.firstContext=null)}function Bn(n){var e=n._currentValue;if(dh!==n)if(n={context:n,memoizedValue:e,next:null},Os===null){if(_c===null)throw Error(te(308));Os=n,_c.dependencies={lanes:0,firstContext:n}}else Os=Os.next=n;return e}var Fr=null;function mh(n){Fr===null?Fr=[n]:Fr.push(n)}function j0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,mh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Ui(n,i)}function Ui(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var qi=!1;function gh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Pi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function ur(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ke&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ui(n,t)}return r=i.interleaved,r===null?(e.next=e,mh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ui(n,t)}function Gl(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,th(n,t)}}function Kp(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function vc(n,e,t,i){var r=n.updateQueue;qi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=n.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=n,y=a;switch(d=e,p=t,y.tag){case 1:if(_=y.payload,typeof _=="function"){f=_.call(p,f,d);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,f,d):_,d==null)break e;f=gt({},f,d);break e;case 2:qi=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Zr|=o,n.lanes=o,n.memoizedState=f}}function Zp(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var Y0=new j_.Component().refs;function rd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var Wc={isMounted:function(n){return(n=n._reactInternals)?rs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=an(),r=dr(n),s=Pi(i,r);s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(Zn(e,n,r,i),Gl(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=an(),r=dr(n),s=Pi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=ur(n,s,r),e!==null&&(Zn(e,n,r,i),Gl(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),i=dr(n),r=Pi(t,i);r.tag=2,e!=null&&(r.callback=e),e=ur(n,r,i),e!==null&&(Zn(e,n,i,t),Gl(e,n,i))}};function Qp(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!xa(t,i)||!xa(r,s):!0}function q0(n,e,t){var i=!1,r=yr,s=e.contextType;return typeof s=="object"&&s!==null?s=Bn(s):(r=mn(e)?Yr:Qt.current,i=e.contextTypes,s=(i=i!=null)?Qs(n,r):yr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Wc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Jp(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&Wc.enqueueReplaceState(e,e.state,null)}function sd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Y0,gh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bn(s):(s=mn(e)?Yr:Qt.current,r.context=Qs(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(rd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Wc.enqueueReplaceState(r,r.state,null),vc(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Uo(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(te(309));var i=t.stateNode}if(!i)throw Error(te(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Y0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(te(284));if(!t._owner)throw Error(te(290,n))}return n}function il(n,e){throw n=Object.prototype.toString.call(e),Error(te(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function em(n){var e=n._init;return e(n._payload)}function K0(n){function e(h,v){if(n){var g=h.deletions;g===null?(h.deletions=[v],h.flags|=16):g.push(v)}}function t(h,v){if(!n)return null;for(;v!==null;)e(h,v),v=v.sibling;return null}function i(h,v){for(h=new Map;v!==null;)v.key!==null?h.set(v.key,v):h.set(v.index,v),v=v.sibling;return h}function r(h,v){return h=hr(h,v),h.index=0,h.sibling=null,h}function s(h,v,g){return h.index=g,n?(g=h.alternate,g!==null?(g=g.index,g<v?(h.flags|=2,v):g):(h.flags|=2,v)):(h.flags|=1048576,v)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,v,g,x){return v===null||v.tag!==6?(v=Uu(g,h.mode,x),v.return=h,v):(v=r(v,g),v.return=h,v)}function l(h,v,g,x){var E=g.type;return E===bs?u(h,v,g.props.children,x,g.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Yi&&em(E)===v.type)?(x=r(v,g.props),x.ref=Uo(h,v,g),x.return=h,x):(x=ql(g.type,g.key,g.props,null,h.mode,x),x.ref=Uo(h,v,g),x.return=h,x)}function c(h,v,g,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==g.containerInfo||v.stateNode.implementation!==g.implementation?(v=Ou(g,h.mode,x),v.return=h,v):(v=r(v,g.children||[]),v.return=h,v)}function u(h,v,g,x,E){return v===null||v.tag!==7?(v=Vr(g,h.mode,x,E),v.return=h,v):(v=r(v,g),v.return=h,v)}function f(h,v,g){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Uu(""+v,h.mode,g),v.return=h,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ja:return g=ql(v.type,v.key,v.props,null,h.mode,g),g.ref=Uo(h,null,v),g.return=h,g;case Rs:return v=Ou(v,h.mode,g),v.return=h,v;case Yi:var x=v._init;return f(h,x(v._payload),g)}if(Yo(v)||Lo(v))return v=Vr(v,h.mode,g,null),v.return=h,v;il(h,v)}return null}function d(h,v,g,x){var E=v!==null?v.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:a(h,v,""+g,x);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:return g.key===E?l(h,v,g,x):null;case Rs:return g.key===E?c(h,v,g,x):null;case Yi:return E=g._init,d(h,v,E(g._payload),x)}if(Yo(g)||Lo(g))return E!==null?null:u(h,v,g,x,null);il(h,g)}return null}function p(h,v,g,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return h=h.get(g)||null,a(v,h,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ja:return h=h.get(x.key===null?g:x.key)||null,l(v,h,x,E);case Rs:return h=h.get(x.key===null?g:x.key)||null,c(v,h,x,E);case Yi:var w=x._init;return p(h,v,g,w(x._payload),E)}if(Yo(x)||Lo(x))return h=h.get(g)||null,u(v,h,x,E,null);il(v,x)}return null}function _(h,v,g,x){for(var E=null,w=null,M=v,P=v=0,S=null;M!==null&&P<g.length;P++){M.index>P?(S=M,M=null):S=M.sibling;var R=d(h,M,g[P],x);if(R===null){M===null&&(M=S);break}n&&M&&R.alternate===null&&e(h,M),v=s(R,v,P),w===null?E=R:w.sibling=R,w=R,M=S}if(P===g.length)return t(h,M),dt&&Pr(h,P),E;if(M===null){for(;P<g.length;P++)M=f(h,g[P],x),M!==null&&(v=s(M,v,P),w===null?E=M:w.sibling=M,w=M);return dt&&Pr(h,P),E}for(M=i(h,M);P<g.length;P++)S=p(M,h,P,g[P],x),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),v=s(S,v,P),w===null?E=S:w.sibling=S,w=S);return n&&M.forEach(function(W){return e(h,W)}),dt&&Pr(h,P),E}function y(h,v,g,x){var E=Lo(g);if(typeof E!="function")throw Error(te(150));if(g=E.call(g),g==null)throw Error(te(151));for(var w=E=null,M=v,P=v=0,S=null,R=g.next();M!==null&&!R.done;P++,R=g.next()){M.index>P?(S=M,M=null):S=M.sibling;var W=d(h,M,R.value,x);if(W===null){M===null&&(M=S);break}n&&M&&W.alternate===null&&e(h,M),v=s(W,v,P),w===null?E=W:w.sibling=W,w=W,M=S}if(R.done)return t(h,M),dt&&Pr(h,P),E;if(M===null){for(;!R.done;P++,R=g.next())R=f(h,R.value,x),R!==null&&(v=s(R,v,P),w===null?E=R:w.sibling=R,w=R);return dt&&Pr(h,P),E}for(M=i(h,M);!R.done;P++,R=g.next())R=p(M,h,P,R.value,x),R!==null&&(n&&R.alternate!==null&&M.delete(R.key===null?P:R.key),v=s(R,v,P),w===null?E=R:w.sibling=R,w=R);return n&&M.forEach(function(K){return e(h,K)}),dt&&Pr(h,P),E}function m(h,v,g,x){if(typeof g=="object"&&g!==null&&g.type===bs&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ja:e:{for(var E=g.key,w=v;w!==null;){if(w.key===E){if(E=g.type,E===bs){if(w.tag===7){t(h,w.sibling),v=r(w,g.props.children),v.return=h,h=v;break e}}else if(w.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Yi&&em(E)===w.type){t(h,w.sibling),v=r(w,g.props),v.ref=Uo(h,w,g),v.return=h,h=v;break e}t(h,w);break}else e(h,w);w=w.sibling}g.type===bs?(v=Vr(g.props.children,h.mode,x,g.key),v.return=h,h=v):(x=ql(g.type,g.key,g.props,null,h.mode,x),x.ref=Uo(h,v,g),x.return=h,h=x)}return o(h);case Rs:e:{for(w=g.key;v!==null;){if(v.key===w)if(v.tag===4&&v.stateNode.containerInfo===g.containerInfo&&v.stateNode.implementation===g.implementation){t(h,v.sibling),v=r(v,g.children||[]),v.return=h,h=v;break e}else{t(h,v);break}else e(h,v);v=v.sibling}v=Ou(g,h.mode,x),v.return=h,h=v}return o(h);case Yi:return w=g._init,m(h,v,w(g._payload),x)}if(Yo(g))return _(h,v,g,x);if(Lo(g))return y(h,v,g,x);il(h,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,v!==null&&v.tag===6?(t(h,v.sibling),v=r(v,g),v.return=h,h=v):(t(h,v),v=Uu(g,h.mode,x),v.return=h,h=v),o(h)):t(h,v)}return m}var eo=K0(!0),Z0=K0(!1),ka={},pi=Sr(ka),Ta=Sr(ka),wa=Sr(ka);function kr(n){if(n===ka)throw Error(te(174));return n}function _h(n,e){switch(ot(wa,e),ot(Ta,n),ot(pi,ka),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ff(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Ff(e,n)}ut(pi),ot(pi,e)}function to(){ut(pi),ut(Ta),ut(wa)}function Q0(n){kr(wa.current);var e=kr(pi.current),t=Ff(e,n.type);e!==t&&(ot(Ta,n),ot(pi,t))}function vh(n){Ta.current===n&&(ut(pi),ut(Ta))}var ht=Sr(0);function yc(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Cu=[];function yh(){for(var n=0;n<Cu.length;n++)Cu[n]._workInProgressVersionPrimary=null;Cu.length=0}var Wl=ki.ReactCurrentDispatcher,Lu=ki.ReactCurrentBatchConfig,Kr=0,pt=null,bt=null,Ut=null,xc=!1,ra=!1,Aa=0,YS=0;function $t(){throw Error(te(321))}function xh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ti(n[t],e[t]))return!1;return!0}function Sh(n,e,t,i,r,s){if(Kr=s,pt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wl.current=n===null||n.memoizedState===null?QS:JS,n=t(i,r),ra){s=0;do{if(ra=!1,Aa=0,25<=s)throw Error(te(301));s+=1,Ut=bt=null,e.updateQueue=null,Wl.current=eM,n=t(i,r)}while(ra)}if(Wl.current=Sc,e=bt!==null&&bt.next!==null,Kr=0,Ut=bt=pt=null,xc=!1,e)throw Error(te(300));return n}function Mh(){var n=Aa!==0;return Aa=0,n}function oi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?pt.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function zn(){if(bt===null){var n=pt.alternate;n=n!==null?n.memoizedState:null}else n=bt.next;var e=Ut===null?pt.memoizedState:Ut.next;if(e!==null)Ut=e,bt=n;else{if(n===null)throw Error(te(310));bt=n,n={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},Ut===null?pt.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function Ra(n,e){return typeof e=="function"?e(n):e}function Pu(n){var e=zn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=bt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Kr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:n(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,pt.lanes|=u,Zr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ti(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,pt.lanes|=s,Zr|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function Iu(n){var e=zn(),t=e.queue;if(t===null)throw Error(te(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ti(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function J0(){}function ev(n,e){var t=pt,i=zn(),r=e(),s=!ti(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Eh(iv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,ba(9,nv.bind(null,t,i,r,e),void 0,null),kt===null)throw Error(te(349));Kr&30||tv(t,e,r)}return r}function tv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function nv(n,e,t,i){e.value=t,e.getSnapshot=i,rv(e)&&sv(n)}function iv(n,e,t){return t(function(){rv(e)&&sv(n)})}function rv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ti(n,t)}catch{return!0}}function sv(n){var e=Ui(n,1);e!==null&&Zn(e,n,1,-1)}function tm(n){var e=oi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ra,lastRenderedState:n},e.queue=n,n=n.dispatch=ZS.bind(null,pt,n),[e.memoizedState,n]}function ba(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=pt.updateQueue,e===null?(e={lastEffect:null,stores:null},pt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function ov(){return zn().memoizedState}function Xl(n,e,t,i){var r=oi();pt.flags|=n,r.memoizedState=ba(1|e,t,void 0,i===void 0?null:i)}function Xc(n,e,t,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&xh(i,o.deps)){r.memoizedState=ba(e,t,s,i);return}}pt.flags|=n,r.memoizedState=ba(1|e,t,s,i)}function nm(n,e){return Xl(8390656,8,n,e)}function Eh(n,e){return Xc(2048,8,n,e)}function av(n,e){return Xc(4,2,n,e)}function lv(n,e){return Xc(4,4,n,e)}function cv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function uv(n,e,t){return t=t!=null?t.concat([n]):null,Xc(4,4,cv.bind(null,e,n),t)}function Th(){}function fv(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function dv(n,e){var t=zn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&xh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function hv(n,e,t){return Kr&21?(ti(t,e)||(t=g0(),pt.lanes|=t,Zr|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,dn=!0),n.memoizedState=t)}function qS(n,e){var t=nt;nt=t!==0&&4>t?t:4,n(!0);var i=Lu.transition;Lu.transition={};try{n(!1),e()}finally{nt=t,Lu.transition=i}}function pv(){return zn().memoizedState}function KS(n,e,t){var i=dr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},mv(n))gv(e,t);else if(t=j0(n,e,t,i),t!==null){var r=an();Zn(t,n,i,r),_v(t,e,i)}}function ZS(n,e,t){var i=dr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(mv(n))gv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ti(a,o)){var l=e.interleaved;l===null?(r.next=r,mh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=j0(n,e,r,i),t!==null&&(r=an(),Zn(t,n,i,r),_v(t,e,i))}}function mv(n){var e=n.alternate;return n===pt||e!==null&&e===pt}function gv(n,e){ra=xc=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function _v(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,th(n,t)}}var Sc={readContext:Bn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},QS={readContext:Bn,useCallback:function(n,e){return oi().memoizedState=[n,e===void 0?null:e],n},useContext:Bn,useEffect:nm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,Xl(4194308,4,cv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return Xl(4194308,4,n,e)},useInsertionEffect:function(n,e){return Xl(4,2,n,e)},useMemo:function(n,e){var t=oi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=oi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=KS.bind(null,pt,n),[i.memoizedState,n]},useRef:function(n){var e=oi();return n={current:n},e.memoizedState=n},useState:tm,useDebugValue:Th,useDeferredValue:function(n){return oi().memoizedState=n},useTransition:function(){var n=tm(!1),e=n[0];return n=qS.bind(null,n[1]),oi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=pt,r=oi();if(dt){if(t===void 0)throw Error(te(407));t=t()}else{if(t=e(),kt===null)throw Error(te(349));Kr&30||tv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,nm(iv.bind(null,i,s,n),[n]),i.flags|=2048,ba(9,nv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=oi(),e=kt.identifierPrefix;if(dt){var t=Ci,i=bi;t=(i&~(1<<32-Kn(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Aa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=YS++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},JS={readContext:Bn,useCallback:fv,useContext:Bn,useEffect:Eh,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:Pu,useRef:ov,useState:function(){return Pu(Ra)},useDebugValue:Th,useDeferredValue:function(n){var e=zn();return hv(e,bt.memoizedState,n)},useTransition:function(){var n=Pu(Ra)[0],e=zn().memoizedState;return[n,e]},useMutableSource:J0,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1},eM={readContext:Bn,useCallback:fv,useContext:Bn,useEffect:Eh,useImperativeHandle:uv,useInsertionEffect:av,useLayoutEffect:lv,useMemo:dv,useReducer:Iu,useRef:ov,useState:function(){return Iu(Ra)},useDebugValue:Th,useDeferredValue:function(n){var e=zn();return bt===null?e.memoizedState=n:hv(e,bt.memoizedState,n)},useTransition:function(){var n=Iu(Ra)[0],e=zn().memoizedState;return[n,e]},useMutableSource:J0,useSyncExternalStore:ev,useId:pv,unstable_isNewReconciler:!1};function no(n,e){try{var t="",i=e;do t+=bx(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Nu(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function od(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var tM=typeof WeakMap=="function"?WeakMap:Map;function vv(n,e,t){t=Pi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Ec||(Ec=!0,gd=i),od(n,e)},t}function yv(n,e,t){t=Pi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){od(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){od(n,e),typeof i!="function"&&(fr===null?fr=new Set([this]):fr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function im(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new tM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=mM.bind(null,n,e,t),e.then(n,n))}function rm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function sm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Pi(-1,1),e.tag=2,ur(t,e,1))),t.lanes|=1),n)}var nM=ki.ReactCurrentOwner,dn=!1;function rn(n,e,t,i){e.child=n===null?Z0(e,null,t,i):eo(e,n.child,t,i)}function om(n,e,t,i,r){t=t.render;var s=e.ref;return Xs(e,r),i=Sh(n,e,t,i,s,r),t=Mh(),n!==null&&!dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(dt&&t&&ch(e),e.flags|=1,rn(n,e,i,r),e.child)}function am(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Ih(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,xv(n,e,s,i,r)):(n=ql(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:xa,t(o,i)&&n.ref===e.ref)return Oi(n,e,r)}return e.flags|=1,n=hr(s,i),n.ref=e.ref,n.return=e,e.child=n}function xv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(xa(s,i)&&n.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(dn=!0);else return e.lanes=n.lanes,Oi(n,e,r)}return ad(n,e,t,i,r)}function Sv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ks,En),En|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,ot(ks,En),En|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,ot(ks,En),En|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,ot(ks,En),En|=i;return rn(n,e,r,t),e.child}function Mv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function ad(n,e,t,i,r){var s=mn(t)?Yr:Qt.current;return s=Qs(e,s),Xs(e,r),t=Sh(n,e,t,i,s,r),i=Mh(),n!==null&&!dn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Oi(n,e,r)):(dt&&i&&ch(e),e.flags|=1,rn(n,e,t,r),e.child)}function lm(n,e,t,i,r){if(mn(t)){var s=!0;hc(e)}else s=!1;if(Xs(e,r),e.stateNode===null)jl(n,e),q0(e,t,i),sd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=t.contextType;typeof c=="object"&&c!==null?c=Bn(c):(c=mn(t)?Yr:Qt.current,c=Qs(e,c));var u=t.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Jp(e,o,i,c),qi=!1;var d=e.memoizedState;o.state=d,vc(e,i,o,r),l=e.memoizedState,a!==i||d!==l||pn.current||qi?(typeof u=="function"&&(rd(e,t,u,i),l=e.memoizedState),(a=qi||Qp(e,t,a,i,d,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,$0(n,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bn(l):(l=mn(t)?Yr:Qt.current,l=Qs(e,l));var p=t.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&Jp(e,o,i,l),qi=!1,d=e.memoizedState,o.state=d,vc(e,i,o,r);var _=e.memoizedState;a!==f||d!==_||pn.current||qi?(typeof p=="function"&&(rd(e,t,p,i),_=e.memoizedState),(c=qi||Qp(e,t,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return ld(n,e,t,i,s,r)}function ld(n,e,t,i,r,s){Mv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&$p(e,t,!1),Oi(n,e,s);i=e.stateNode,nM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=eo(e,n.child,null,s),e.child=eo(e,null,a,s)):rn(n,e,a,s),e.memoizedState=i.state,r&&$p(e,t,!0),e.child}function Ev(n){var e=n.stateNode;e.pendingContext?jp(n,e.pendingContext,e.pendingContext!==e.context):e.context&&jp(n,e.context,!1),_h(n,e.containerInfo)}function cm(n,e,t,i,r){return Js(),fh(r),e.flags|=256,rn(n,e,t,i),e.child}var cd={dehydrated:null,treeContext:null,retryLane:0};function ud(n){return{baseLanes:n,cachePool:null,transitions:null}}function Tv(n,e,t){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),ot(ht,r&1),n===null)return nd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yc(o,i,0,null),n=Vr(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=ud(t),e.memoizedState=cd,n):wh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return iM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=hr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=hr(a,s):(s=Vr(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?ud(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=cd,i}return s=n.child,n=s.sibling,i=hr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function wh(n,e){return e=Yc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function rl(n,e,t,i){return i!==null&&fh(i),eo(e,n.child,null,t),n=wh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function iM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Nu(Error(te(422))),rl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Yc({mode:"visible",children:i.children},r,0,null),s=Vr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&eo(e,n.child,null,o),e.child.memoizedState=ud(o),e.memoizedState=cd,s);if(!(e.mode&1))return rl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=Nu(s,i,void 0),rl(n,e,o,i)}if(a=(o&n.childLanes)!==0,dn||a){if(i=kt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ui(n,r),Zn(i,n,r,-1))}return Ph(),i=Nu(Error(te(421))),rl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=gM.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,wn=cr(r.nextSibling),An=e,dt=!0,Yn=null,n!==null&&(Nn[Dn++]=bi,Nn[Dn++]=Ci,Nn[Dn++]=qr,bi=n.id,Ci=n.overflow,qr=e),e=wh(e,i.children),e.flags|=4096,e)}function um(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),id(n.return,e,t)}function Du(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function wv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(n,e,i.children,t),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&um(n,t,e);else if(n.tag===19)um(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(ot(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&yc(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Du(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&yc(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Du(e,!0,t,null,s);break;case"together":Du(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function jl(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Oi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Zr|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(te(153));if(e.child!==null){for(n=e.child,t=hr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=hr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function rM(n,e,t){switch(e.tag){case 3:Ev(e),Js();break;case 5:Q0(e);break;case 1:mn(e.type)&&hc(e);break;case 4:_h(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(gc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(ht,ht.current&1),e.flags|=128,null):t&e.child.childLanes?Tv(n,e,t):(ot(ht,ht.current&1),n=Oi(n,e,t),n!==null?n.sibling:null);ot(ht,ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return wv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,Sv(n,e,t)}return Oi(n,e,t)}var Av,fd,Rv,bv;Av=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};fd=function(){};Rv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,kr(pi.current);var s=null;switch(t){case"input":r=Nf(n,r),i=Nf(n,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Of(n,r),i=Of(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=fc)}kf(t,i);var o;t=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(c,t)),t=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&at("scroll",n),s||a===l||(s=[])):(s=s||[]).push(c,l))}t&&(s=s||[]).push("style",t);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};bv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Oo(n,e){if(!dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function sM(n,e,t){var i=e.pendingProps;switch(uh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return mn(e.type)&&dc(),Yt(e),null;case 3:return i=e.stateNode,to(),ut(pn),ut(Qt),yh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(nl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Yn!==null&&(yd(Yn),Yn=null))),fd(n,e),Yt(e),null;case 5:vh(e);var r=kr(wa.current);if(t=e.type,n!==null&&e.stateNode!=null)Rv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Yt(e),null}if(n=kr(pi.current),nl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ci]=e,i[Ea]=s,n=(e.mode&1)!==0,t){case"dialog":at("cancel",i),at("close",i);break;case"iframe":case"object":case"embed":at("load",i);break;case"video":case"audio":for(r=0;r<Ko.length;r++)at(Ko[r],i);break;case"source":at("error",i);break;case"img":case"image":case"link":at("error",i),at("load",i);break;case"details":at("toggle",i);break;case"input":yp(i,s),at("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},at("invalid",i);break;case"textarea":Sp(i,s),at("invalid",i)}kf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&tl(i.textContent,a,n),r=["children",""+a]):ha.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&at("scroll",i)}switch(t){case"input":$a(i),xp(i,s,!0);break;case"textarea":$a(i),Mp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=fc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=t0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ci]=e,n[Ea]=i,Av(n,e,!1,!1),e.stateNode=n;e:{switch(o=Bf(t,i),t){case"dialog":at("cancel",n),at("close",n),r=i;break;case"iframe":case"object":case"embed":at("load",n),r=i;break;case"video":case"audio":for(r=0;r<Ko.length;r++)at(Ko[r],n);r=i;break;case"source":at("error",n),r=i;break;case"img":case"image":case"link":at("error",n),at("load",n),r=i;break;case"details":at("toggle",n),r=i;break;case"input":yp(n,i),r=Nf(n,i),at("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),at("invalid",n);break;case"textarea":Sp(n,i),r=Of(n,i),at("invalid",n);break;default:r=i}kf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?r0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&n0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&pa(n,l):typeof l=="number"&&pa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&at("scroll",n):l!=null&&qd(n,s,l,o))}switch(t){case"input":$a(n),xp(n,i,!1);break;case"textarea":$a(n),Mp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+vr(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?Hs(n,!!i.multiple,s,!1):i.defaultValue!=null&&Hs(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=fc)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)bv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(t=kr(wa.current),kr(pi.current),nl(e)){if(i=e.stateNode,t=e.memoizedProps,i[ci]=e,(s=i.nodeValue!==t)&&(n=An,n!==null))switch(n.tag){case 3:tl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ci]=e,e.stateNode=i}return Yt(e),null;case 13:if(ut(ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(dt&&wn!==null&&e.mode&1&&!(e.flags&128))X0(),Js(),e.flags|=98560,s=!1;else if(s=nl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ci]=e}else Js(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Yn!==null&&(yd(Yn),Yn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ht.current&1?Ct===0&&(Ct=3):Ph())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return to(),fd(n,e),n===null&&Sa(e.stateNode.containerInfo),Yt(e),null;case 10:return ph(e.type._context),Yt(e),null;case 17:return mn(e.type)&&dc(),Yt(e),null;case 19:if(ut(ht),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Oo(s,!1);else{if(Ct!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=yc(n),o!==null){for(e.flags|=128,Oo(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return ot(ht,ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&St()>io&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304)}else{if(!i)if(n=yc(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Oo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return Yt(e),null}else 2*St()-s.renderingStartTime>io&&t!==1073741824&&(e.flags|=128,i=!0,Oo(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,t=ht.current,ot(ht,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return Lh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function oM(n,e){switch(uh(e),e.tag){case 1:return mn(e.type)&&dc(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return to(),ut(pn),ut(Qt),yh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return vh(e),null;case 13:if(ut(ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Js()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return ut(ht),null;case 4:return to(),null;case 10:return ph(e.type._context),null;case 22:case 23:return Lh(),null;case 24:return null;default:return null}}var sl=!1,Zt=!1,aM=typeof WeakSet=="function"?WeakSet:Set,me=null;function Fs(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){vt(n,e,i)}else t.current=null}function dd(n,e,t){try{t()}catch(i){vt(n,e,i)}}var fm=!1;function lM(n,e){if(qf=lc,n=I0(),lh(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Kf={focusedElem:n,selectionRange:t},lc=!1,me=e;me!==null;)if(e=me,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,me=n;else for(;me!==null;){e=me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,h=e.stateNode,v=h.getSnapshotBeforeUpdate(e.elementType===e.type?y:jn(e.type,y),m);h.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){vt(e,e.return,x)}if(n=e.sibling,n!==null){n.return=e.return,me=n;break}me=e.return}return _=fm,fm=!1,_}function sa(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&dd(e,t,s)}r=r.next}while(r!==i)}}function jc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function hd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Cv(n){var e=n.alternate;e!==null&&(n.alternate=null,Cv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ci],delete e[Ea],delete e[Jf],delete e[WS],delete e[XS])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lv(n){return n.tag===5||n.tag===3||n.tag===4}function dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function pd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=fc));else if(i!==4&&(n=n.child,n!==null))for(pd(n,e,t),n=n.sibling;n!==null;)pd(n,e,t),n=n.sibling}function md(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(md(n,e,t),n=n.sibling;n!==null;)md(n,e,t),n=n.sibling}var Bt=null,$n=!1;function zi(n,e,t){for(t=t.child;t!==null;)Pv(n,e,t),t=t.sibling}function Pv(n,e,t){if(hi&&typeof hi.onCommitFiberUnmount=="function")try{hi.onCommitFiberUnmount(kc,t)}catch{}switch(t.tag){case 5:Zt||Fs(t,e);case 6:var i=Bt,r=$n;Bt=null,zi(n,e,t),Bt=i,$n=r,Bt!==null&&($n?(n=Bt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):Bt.removeChild(t.stateNode));break;case 18:Bt!==null&&($n?(n=Bt,t=t.stateNode,n.nodeType===8?Ru(n.parentNode,t):n.nodeType===1&&Ru(n,t),va(n)):Ru(Bt,t.stateNode));break;case 4:i=Bt,r=$n,Bt=t.stateNode.containerInfo,$n=!0,zi(n,e,t),Bt=i,$n=r;break;case 0:case 11:case 14:case 15:if(!Zt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&dd(t,e,o),r=r.next}while(r!==i)}zi(n,e,t);break;case 1:if(!Zt&&(Fs(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){vt(t,e,a)}zi(n,e,t);break;case 21:zi(n,e,t);break;case 22:t.mode&1?(Zt=(i=Zt)||t.memoizedState!==null,zi(n,e,t),Zt=i):zi(n,e,t);break;default:zi(n,e,t)}}function hm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new aM),e.forEach(function(i){var r=_M.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Vn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Bt=a.stateNode,$n=!1;break e;case 3:Bt=a.stateNode.containerInfo,$n=!0;break e;case 4:Bt=a.stateNode.containerInfo,$n=!0;break e}a=a.return}if(Bt===null)throw Error(te(160));Pv(s,o,r),Bt=null,$n=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,n),e=e.sibling}function Iv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vn(e,n),si(n),i&4){try{sa(3,n,n.return),jc(3,n)}catch(y){vt(n,n.return,y)}try{sa(5,n,n.return)}catch(y){vt(n,n.return,y)}}break;case 1:Vn(e,n),si(n),i&512&&t!==null&&Fs(t,t.return);break;case 5:if(Vn(e,n),si(n),i&512&&t!==null&&Fs(t,t.return),n.flags&32){var r=n.stateNode;try{pa(r,"")}catch(y){vt(n,n.return,y)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&J_(r,s),Bf(a,o);var c=Bf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?r0(r,f):u==="dangerouslySetInnerHTML"?n0(r,f):u==="children"?pa(r,f):qd(r,u,f,c)}switch(a){case"input":Df(r,s);break;case"textarea":e0(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Hs(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Hs(r,!!s.multiple,s.defaultValue,!0):Hs(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ea]=s}catch(y){vt(n,n.return,y)}}break;case 6:if(Vn(e,n),si(n),i&4){if(n.stateNode===null)throw Error(te(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(y){vt(n,n.return,y)}}break;case 3:if(Vn(e,n),si(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{va(e.containerInfo)}catch(y){vt(n,n.return,y)}break;case 4:Vn(e,n),si(n);break;case 13:Vn(e,n),si(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bh=St())),i&4&&hm(n);break;case 22:if(u=t!==null&&t.memoizedState!==null,n.mode&1?(Zt=(c=Zt)||u,Vn(e,n),Zt=c):Vn(e,n),si(n),i&8192){if(c=n.memoizedState!==null,(n.stateNode.isHidden=c)&&!u&&n.mode&1)for(me=n,u=n.child;u!==null;){for(f=me=u;me!==null;){switch(d=me,p=d.child,d.tag){case 0:case 11:case 14:case 15:sa(4,d,d.return);break;case 1:Fs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,t,y)}}break;case 5:Fs(d,d.return);break;case 22:if(d.memoizedState!==null){mm(f);continue}}p!==null?(p.return=d,me=p):mm(f)}u=u.sibling}e:for(u=null,f=n;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=i0("display",o))}catch(y){vt(n,n.return,y)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(y){vt(n,n.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vn(e,n),si(n),i&4&&hm(n);break;case 21:break;default:Vn(e,n),si(n)}}function si(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Lv(t)){var i=t;break e}t=t.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(pa(r,""),i.flags&=-33);var s=dm(n);md(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=dm(n);pd(n,a,o);break;default:throw Error(te(161))}}catch(l){vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function cM(n,e,t){me=n,Nv(n)}function Nv(n,e,t){for(var i=(n.mode&1)!==0;me!==null;){var r=me,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||sl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Zt;a=sl;var c=Zt;if(sl=o,(Zt=l)&&!c)for(me=r;me!==null;)o=me,l=o.child,o.tag===22&&o.memoizedState!==null?gm(r):l!==null?(l.return=o,me=l):gm(r);for(;s!==null;)me=s,Nv(s),s=s.sibling;me=r,sl=a,Zt=c}pm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,me=s):pm(n)}}function pm(n){for(;me!==null;){var e=me;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Zt||jc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Zt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:jn(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Zp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}Zp(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&va(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Zt||e.flags&512&&hd(e)}catch(d){vt(e,e.return,d)}}if(e===n){me=null;break}if(t=e.sibling,t!==null){t.return=e.return,me=t;break}me=e.return}}function mm(n){for(;me!==null;){var e=me;if(e===n){me=null;break}var t=e.sibling;if(t!==null){t.return=e.return,me=t;break}me=e.return}}function gm(n){for(;me!==null;){var e=me;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{jc(4,e)}catch(l){vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{hd(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{hd(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===n){me=null;break}var a=e.sibling;if(a!==null){a.return=e.return,me=a;break}me=e.return}}var uM=Math.ceil,Mc=ki.ReactCurrentDispatcher,Ah=ki.ReactCurrentOwner,kn=ki.ReactCurrentBatchConfig,Ke=0,kt=null,Rt=null,Ht=0,En=0,ks=Sr(0),Ct=0,Ca=null,Zr=0,$c=0,Rh=0,oa=null,un=null,bh=0,io=1/0,wi=null,Ec=!1,gd=null,fr=null,ol=!1,nr=null,Tc=0,aa=0,_d=null,$l=-1,Yl=0;function an(){return Ke&6?St():$l!==-1?$l:$l=St()}function dr(n){return n.mode&1?Ke&2&&Ht!==0?Ht&-Ht:$S.transition!==null?(Yl===0&&(Yl=g0()),Yl):(n=nt,n!==0||(n=window.event,n=n===void 0?16:E0(n.type)),n):1}function Zn(n,e,t,i){if(50<aa)throw aa=0,_d=null,Error(te(185));Ua(n,t,i),(!(Ke&2)||n!==kt)&&(n===kt&&(!(Ke&2)&&($c|=t),Ct===4&&er(n,Ht)),gn(n,i),t===1&&Ke===0&&!(e.mode&1)&&(io=St()+500,Gc&&Mr()))}function gn(n,e){var t=n.callbackNode;$x(n,e);var i=ac(n,n===kt?Ht:0);if(i===0)t!==null&&wp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&wp(t),e===1)n.tag===0?jS(_m.bind(null,n)):V0(_m.bind(null,n)),VS(function(){!(Ke&6)&&Mr()}),t=null;else{switch(_0(i)){case 1:t=eh;break;case 4:t=p0;break;case 16:t=oc;break;case 536870912:t=m0;break;default:t=oc}t=Hv(t,Dv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Dv(n,e){if($l=-1,Yl=0,Ke&6)throw Error(te(327));var t=n.callbackNode;if(js()&&n.callbackNode!==t)return null;var i=ac(n,n===kt?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=wc(n,i);else{e=i;var r=Ke;Ke|=2;var s=Ov();(kt!==n||Ht!==e)&&(wi=null,io=St()+500,Hr(n,e));do try{hM();break}catch(a){Uv(n,a)}while(!0);hh(),Mc.current=s,Ke=r,Rt!==null?e=0:(kt=null,Ht=0,e=Ct)}if(e!==0){if(e===2&&(r=Wf(n),r!==0&&(i=r,e=vd(n,r))),e===1)throw t=Ca,Hr(n,0),er(n,i),gn(n,St()),t;if(e===6)er(n,i);else{if(r=n.current.alternate,!(i&30)&&!fM(r)&&(e=wc(n,i),e===2&&(s=Wf(n),s!==0&&(i=s,e=vd(n,s))),e===1))throw t=Ca,Hr(n,0),er(n,i),gn(n,St()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:Ir(n,un,wi);break;case 3:if(er(n,i),(i&130023424)===i&&(e=bh+500-St(),10<e)){if(ac(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){an(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Qf(Ir.bind(null,n,un,wi),e);break}Ir(n,un,wi);break;case 4:if(er(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-Kn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*uM(i/1960))-i,10<i){n.timeoutHandle=Qf(Ir.bind(null,n,un,wi),i);break}Ir(n,un,wi);break;case 5:Ir(n,un,wi);break;default:throw Error(te(329))}}}return gn(n,St()),n.callbackNode===t?Dv.bind(null,n):null}function vd(n,e){var t=oa;return n.current.memoizedState.isDehydrated&&(Hr(n,e).flags|=256),n=wc(n,e),n!==2&&(e=un,un=t,e!==null&&yd(e)),n}function yd(n){un===null?un=n:un.push.apply(un,n)}function fM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ti(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(n,e){for(e&=~Rh,e&=~$c,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-Kn(e),i=1<<t;n[t]=-1,e&=~i}}function _m(n){if(Ke&6)throw Error(te(327));js();var e=ac(n,0);if(!(e&1))return gn(n,St()),null;var t=wc(n,e);if(n.tag!==0&&t===2){var i=Wf(n);i!==0&&(e=i,t=vd(n,i))}if(t===1)throw t=Ca,Hr(n,0),er(n,e),gn(n,St()),t;if(t===6)throw Error(te(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Ir(n,un,wi),gn(n,St()),null}function Ch(n,e){var t=Ke;Ke|=1;try{return n(e)}finally{Ke=t,Ke===0&&(io=St()+500,Gc&&Mr())}}function Qr(n){nr!==null&&nr.tag===0&&!(Ke&6)&&js();var e=Ke;Ke|=1;var t=kn.transition,i=nt;try{if(kn.transition=null,nt=1,n)return n()}finally{nt=i,kn.transition=t,Ke=e,!(Ke&6)&&Mr()}}function Lh(){En=ks.current,ut(ks)}function Hr(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,HS(t)),Rt!==null)for(t=Rt.return;t!==null;){var i=t;switch(uh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&dc();break;case 3:to(),ut(pn),ut(Qt),yh();break;case 5:vh(i);break;case 4:to();break;case 13:ut(ht);break;case 19:ut(ht);break;case 10:ph(i.type._context);break;case 22:case 23:Lh()}t=t.return}if(kt=n,Rt=n=hr(n.current,null),Ht=En=e,Ct=0,Ca=null,Rh=$c=Zr=0,un=oa=null,Fr!==null){for(e=0;e<Fr.length;e++)if(t=Fr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Fr=null}return n}function Uv(n,e){do{var t=Rt;try{if(hh(),Wl.current=Sc,xc){for(var i=pt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}xc=!1}if(Kr=0,Ut=bt=pt=null,ra=!1,Aa=0,Ah.current=null,t===null||t.return===null){Ct=1,Ca=e,Rt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=rm(o);if(p!==null){p.flags&=-257,sm(p,o,a,s,e),p.mode&1&&im(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){im(s,c,e),Ph();break e}l=Error(te(426))}}else if(dt&&a.mode&1){var m=rm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),sm(m,o,a,s,e),fh(no(l,a));break e}}s=l=no(l,a),Ct!==4&&(Ct=2),oa===null?oa=[s]:oa.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=vv(s,l,e);Kp(s,h);break e;case 1:a=l;var v=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fr===null||!fr.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=yv(s,a,e);Kp(s,x);break e}}s=s.return}while(s!==null)}kv(t)}catch(E){e=E,Rt===t&&t!==null&&(Rt=t=t.return);continue}break}while(!0)}function Ov(){var n=Mc.current;return Mc.current=Sc,n===null?Sc:n}function Ph(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),kt===null||!(Zr&268435455)&&!($c&268435455)||er(kt,Ht)}function wc(n,e){var t=Ke;Ke|=2;var i=Ov();(kt!==n||Ht!==e)&&(wi=null,Hr(n,e));do try{dM();break}catch(r){Uv(n,r)}while(!0);if(hh(),Ke=t,Mc.current=i,Rt!==null)throw Error(te(261));return kt=null,Ht=0,Ct}function dM(){for(;Rt!==null;)Fv(Rt)}function hM(){for(;Rt!==null&&!kx();)Fv(Rt)}function Fv(n){var e=zv(n.alternate,n,En);n.memoizedProps=n.pendingProps,e===null?kv(n):Rt=e,Ah.current=null}function kv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=oM(t,e),t!==null){t.flags&=32767,Rt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Ct=6,Rt=null;return}}else if(t=sM(t,e,En),t!==null){Rt=t;return}if(e=e.sibling,e!==null){Rt=e;return}Rt=e=n}while(e!==null);Ct===0&&(Ct=5)}function Ir(n,e,t){var i=nt,r=kn.transition;try{kn.transition=null,nt=1,pM(n,e,t,i)}finally{kn.transition=r,nt=i}return null}function pM(n,e,t,i){do js();while(nr!==null);if(Ke&6)throw Error(te(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(te(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(Yx(n,s),n===kt&&(Rt=kt=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||ol||(ol=!0,Hv(oc,function(){return js(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=nt;nt=1;var a=Ke;Ke|=4,Ah.current=null,lM(n,t),Iv(t,n),DS(Kf),lc=!!qf,Kf=qf=null,n.current=t,cM(t),Bx(),Ke=a,nt=o,kn.transition=s}else n.current=t;if(ol&&(ol=!1,nr=n,Tc=r),s=n.pendingLanes,s===0&&(fr=null),Vx(t.stateNode),gn(n,St()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Ec)throw Ec=!1,n=gd,gd=null,n;return Tc&1&&n.tag!==0&&js(),s=n.pendingLanes,s&1?n===_d?aa++:(aa=0,_d=n):aa=0,Mr(),null}function js(){if(nr!==null){var n=_0(Tc),e=kn.transition,t=nt;try{if(kn.transition=null,nt=16>n?16:n,nr===null)var i=!1;else{if(n=nr,nr=null,Tc=0,Ke&6)throw Error(te(331));var r=Ke;for(Ke|=4,me=n.current;me!==null;){var s=me,o=s.child;if(me.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(me=c;me!==null;){var u=me;switch(u.tag){case 0:case 11:case 15:sa(8,u,s)}var f=u.child;if(f!==null)f.return=u,me=f;else for(;me!==null;){u=me;var d=u.sibling,p=u.return;if(Cv(u),u===c){me=null;break}if(d!==null){d.return=p,me=d;break}me=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}me=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,me=o;else e:for(;me!==null;){if(s=me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:sa(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,me=h;break e}me=s.return}}var v=n.current;for(me=v;me!==null;){o=me;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,me=g;else e:for(o=v;me!==null;){if(a=me,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:jc(9,a)}}catch(E){vt(a,a.return,E)}if(a===o){me=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,me=x;break e}me=a.return}}if(Ke=r,Mr(),hi&&typeof hi.onPostCommitFiberRoot=="function")try{hi.onPostCommitFiberRoot(kc,n)}catch{}i=!0}return i}finally{nt=t,kn.transition=e}}return!1}function vm(n,e,t){e=no(t,e),e=vv(n,e,1),n=ur(n,e,1),e=an(),n!==null&&(Ua(n,1,e),gn(n,e))}function vt(n,e,t){if(n.tag===3)vm(n,n,t);else for(;e!==null;){if(e.tag===3){vm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(fr===null||!fr.has(i))){n=no(t,n),n=yv(e,n,1),e=ur(e,n,1),n=an(),e!==null&&(Ua(e,1,n),gn(e,n));break}}e=e.return}}function mM(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,kt===n&&(Ht&t)===t&&(Ct===4||Ct===3&&(Ht&130023424)===Ht&&500>St()-bh?Hr(n,0):Rh|=t),gn(n,e)}function Bv(n,e){e===0&&(n.mode&1?(e=Ka,Ka<<=1,!(Ka&130023424)&&(Ka=4194304)):e=1);var t=an();n=Ui(n,e),n!==null&&(Ua(n,e,t),gn(n,t))}function gM(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Bv(n,t)}function _M(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),Bv(n,t)}var zv;zv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||pn.current)dn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return dn=!1,rM(n,e,t);dn=!!(n.flags&131072)}else dn=!1,dt&&e.flags&1048576&&G0(e,mc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;jl(n,e),n=e.pendingProps;var r=Qs(e,Qt.current);Xs(e,t),r=Sh(null,e,i,n,r,t);var s=Mh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,mn(i)?(s=!0,hc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gh(e),r.updater=Wc,e.stateNode=r,r._reactInternals=e,sd(e,i,n,t),e=ld(null,e,i,!0,s,t)):(e.tag=0,dt&&s&&ch(e),rn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(jl(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=yM(i),n=jn(i,n),r){case 0:e=ad(null,e,i,n,t);break e;case 1:e=lm(null,e,i,n,t);break e;case 11:e=om(null,e,i,n,t);break e;case 14:e=am(null,e,i,jn(i.type,n),t);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ad(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),lm(n,e,i,r,t);case 3:e:{if(Ev(e),n===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,$0(n,e),vc(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=no(Error(te(423)),e),e=cm(n,e,i,t,r);break e}else if(i!==r){r=no(Error(te(424)),e),e=cm(n,e,i,t,r);break e}else for(wn=cr(e.stateNode.containerInfo.firstChild),An=e,dt=!0,Yn=null,t=Z0(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Js(),i===r){e=Oi(n,e,t);break e}rn(n,e,i,t)}e=e.child}return e;case 5:return Q0(e),n===null&&nd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Zf(i,r)?o=null:s!==null&&Zf(i,s)&&(e.flags|=32),Mv(n,e),rn(n,e,o,t),e.child;case 6:return n===null&&nd(e),null;case 13:return Tv(n,e,t);case 4:return _h(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=eo(e,null,i,t):rn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),om(n,e,i,r,t);case 7:return rn(n,e,e.pendingProps,t),e.child;case 8:return rn(n,e,e.pendingProps.children,t),e.child;case 12:return rn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(gc,i._currentValue),i._currentValue=o,s!==null)if(ti(s.value,o)){if(s.children===r.children&&!pn.current){e=Oi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Pi(-1,t&-t),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),id(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),id(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}rn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Xs(e,t),r=Bn(r),i=i(r),e.flags|=1,rn(n,e,i,t),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),am(n,e,i,r,t);case 15:return xv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),jl(n,e),e.tag=1,mn(i)?(n=!0,hc(e)):n=!1,Xs(e,t),q0(e,i,r),sd(e,i,r,t),ld(null,e,i,!0,n,t);case 19:return wv(n,e,t);case 22:return Sv(n,e,t)}throw Error(te(156,e.tag))};function Hv(n,e){return h0(n,e)}function vM(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(n,e,t,i){return new vM(n,e,t,i)}function Ih(n){return n=n.prototype,!(!n||!n.isReactComponent)}function yM(n){if(typeof n=="function")return Ih(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Zd)return 11;if(n===Qd)return 14}return 2}function hr(n,e){var t=n.alternate;return t===null?(t=Fn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function ql(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Ih(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case bs:return Vr(t.children,r,s,e);case Kd:o=8,r|=8;break;case Cf:return n=Fn(12,t,e,r|2),n.elementType=Cf,n.lanes=s,n;case Lf:return n=Fn(13,t,e,r),n.elementType=Lf,n.lanes=s,n;case Pf:return n=Fn(19,t,e,r),n.elementType=Pf,n.lanes=s,n;case K_:return Yc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Y_:o=10;break e;case q_:o=9;break e;case Zd:o=11;break e;case Qd:o=14;break e;case Yi:o=16,i=null;break e}throw Error(te(130,n==null?n:typeof n,""))}return e=Fn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function Vr(n,e,t,i){return n=Fn(7,n,i,e),n.lanes=t,n}function Yc(n,e,t,i){return n=Fn(22,n,i,e),n.elementType=K_,n.lanes=t,n.stateNode={isHidden:!1},n}function Uu(n,e,t){return n=Fn(6,n,null,e),n.lanes=t,n}function Ou(n,e,t){return e=Fn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function xM(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gu(0),this.expirationTimes=gu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nh(n,e,t,i,r,s,o,a,l){return n=new xM(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},gh(s),n}function SM(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Rs,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function Vv(n){if(!n)return yr;n=n._reactInternals;e:{if(rs(n)!==n||n.tag!==1)throw Error(te(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(mn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(n.tag===1){var t=n.type;if(mn(t))return H0(n,t,e)}return e}function Gv(n,e,t,i,r,s,o,a,l){return n=Nh(t,i,!0,n,r,s,o,a,l),n.context=Vv(null),t=n.current,i=an(),r=dr(t),s=Pi(i,r),s.callback=e??null,ur(t,s,r),n.current.lanes=r,Ua(n,r,i),gn(n,i),n}function qc(n,e,t,i){var r=e.current,s=an(),o=dr(r);return t=Vv(t),e.context===null?e.context=t:e.pendingContext=t,e=Pi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=ur(r,e,o),n!==null&&(Zn(n,r,o,s),Gl(n,r,o)),o}function Ac(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ym(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Dh(n,e){ym(n,e),(n=n.alternate)&&ym(n,e)}function MM(){return null}var Wv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Uh(n){this._internalRoot=n}Kc.prototype.render=Uh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(te(409));qc(n,e,null,null)};Kc.prototype.unmount=Uh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Qr(function(){qc(null,n,null,null)}),e[Di]=null}};function Kc(n){this._internalRoot=n}Kc.prototype.unstable_scheduleHydration=function(n){if(n){var e=x0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<Ji.length&&e!==0&&e<Ji[t].priority;t++);Ji.splice(t,0,n),t===0&&M0(n)}};function Oh(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Zc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function xm(){}function EM(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ac(o);s.call(c)}}var o=Gv(e,i,n,0,null,!1,!1,"",xm);return n._reactRootContainer=o,n[Di]=o.current,Sa(n.nodeType===8?n.parentNode:n),Qr(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ac(l);a.call(c)}}var l=Nh(n,0,!1,null,null,!1,!1,"",xm);return n._reactRootContainer=l,n[Di]=l.current,Sa(n.nodeType===8?n.parentNode:n),Qr(function(){qc(e,l,t,i)}),l}function Qc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ac(o);a.call(l)}}qc(e,o,n,r)}else o=EM(t,e,n,r,i);return Ac(o)}v0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=qo(e.pendingLanes);t!==0&&(th(e,t|1),gn(e,St()),!(Ke&6)&&(io=St()+500,Mr()))}break;case 13:Qr(function(){var i=Ui(n,1);if(i!==null){var r=an();Zn(i,n,1,r)}}),Dh(n,1)}};nh=function(n){if(n.tag===13){var e=Ui(n,134217728);if(e!==null){var t=an();Zn(e,n,134217728,t)}Dh(n,134217728)}};y0=function(n){if(n.tag===13){var e=dr(n),t=Ui(n,e);if(t!==null){var i=an();Zn(t,n,e,i)}Dh(n,e)}};x0=function(){return nt};S0=function(n,e){var t=nt;try{return nt=n,e()}finally{nt=t}};Hf=function(n,e,t){switch(e){case"input":if(Df(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Vc(i);if(!r)throw Error(te(90));Q_(i),Df(i,r)}}}break;case"textarea":e0(n,t);break;case"select":e=t.value,e!=null&&Hs(n,!!t.multiple,e,!1)}};a0=Ch;l0=Qr;var TM={usingClientEntryPoint:!1,Events:[Fa,Is,Vc,s0,o0,Ch]},Fo={findFiberByHostInstance:Or,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},wM={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=f0(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||MM,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!al.isDisabled&&al.supportsFiber)try{kc=al.inject(wM),hi=al}catch{}}bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=TM;bn.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Oh(e))throw Error(te(200));return SM(n,e,null,t)};bn.createRoot=function(n,e){if(!Oh(n))throw Error(te(299));var t=!1,i="",r=Wv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nh(n,1,!1,null,null,t,!1,i,r),n[Di]=e.current,Sa(n.nodeType===8?n.parentNode:n),new Uh(e)};bn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(te(188)):(n=Object.keys(n).join(","),Error(te(268,n)));return n=f0(e),n=n===null?null:n.stateNode,n};bn.flushSync=function(n){return Qr(n)};bn.hydrate=function(n,e,t){if(!Zc(e))throw Error(te(200));return Qc(null,n,e,!0,t)};bn.hydrateRoot=function(n,e,t){if(!Oh(n))throw Error(te(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Wv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Gv(e,null,n,1,t??null,r,!1,s,o),n[Di]=e.current,Sa(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Kc(e)};bn.render=function(n,e,t){if(!Zc(e))throw Error(te(200));return Qc(null,n,e,!1,t)};bn.unmountComponentAtNode=function(n){if(!Zc(n))throw Error(te(40));return n._reactRootContainer?(Qr(function(){Qc(null,null,n,!1,function(){n._reactRootContainer=null,n[Di]=null})}),!0):!1};bn.unstable_batchedUpdates=Ch;bn.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Zc(t))throw Error(te(200));if(n==null||n._reactInternals===void 0)throw Error(te(38));return Qc(n,e,t,!1,i)};bn.version="18.2.0-next-9e3b772b8-20220608";function Xv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Xv)}catch(n){console.error(n)}}Xv(),G_.exports=bn;var AM=G_.exports,Sm=AM;Rf.createRoot=Sm.createRoot,Rf.hydrateRoot=Sm.hydrateRoot;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fh="158",as={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},RM=0,Mm=1,bM=2,jv=1,CM=2,Ti=3,Fi=0,_n=1,ui=2,pr=0,$s=1,Em=2,Tm=3,wm=4,LM=5,Dr=100,PM=101,IM=102,Am=103,Rm=104,NM=200,DM=201,UM=202,OM=203,xd=204,Sd=205,FM=206,kM=207,BM=208,zM=209,HM=210,VM=211,GM=212,WM=213,XM=214,jM=0,$M=1,YM=2,Rc=3,qM=4,KM=5,ZM=6,QM=7,kh=0,JM=1,eE=2,mr=0,tE=1,nE=2,iE=3,rE=4,sE=5,bm="attached",oE="detached",$v=300,ro=301,so=302,Md=303,Ed=304,Jc=306,oo=1e3,Un=1001,bc=1002,Ft=1003,Td=1004,Kl=1005,fn=1006,Yv=1007,Jr=1008,gr=1009,aE=1010,lE=1011,Bh=1012,qv=1013,ir=1014,di=1015,La=1016,Kv=1017,Zv=1018,Gr=1020,cE=1021,Tn=1023,uE=1024,fE=1025,Wr=1026,ao=1027,dE=1028,Qv=1029,hE=1030,Jv=1031,ey=1033,Fu=33776,ku=33777,Bu=33778,zu=33779,Cm=35840,Lm=35841,Pm=35842,Im=35843,pE=36196,Nm=37492,Dm=37496,Um=37808,Om=37809,Fm=37810,km=37811,Bm=37812,zm=37813,Hm=37814,Vm=37815,Gm=37816,Wm=37817,Xm=37818,jm=37819,$m=37820,Ym=37821,Hu=36492,qm=36494,Km=36495,mE=36283,Zm=36284,Qm=36285,Jm=36286,Pa=2300,lo=2301,Vu=2302,eg=2400,tg=2401,ng=2402,gE=2500,_E=0,ty=1,wd=2,ny=3e3,Xr=3001,vE=3200,yE=3201,zh=0,xE=1,On="",yt="srgb",Xt="srgb-linear",Hh="display-p3",eu="display-p3-linear",Cc="linear",ct="srgb",Lc="rec709",Pc="p3",cs=7680,ig=519,SE=512,ME=513,EE=514,TE=515,wE=516,AE=517,RE=518,bE=519,Ad=35044,rg="300 es",Rd=1035,Li=2e3,Ic=2001;class ss{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sg=1234567;const la=Math.PI/180,co=180/Math.PI;function Qn(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function zt(n,e,t){return Math.max(e,Math.min(t,n))}function Vh(n,e){return(n%e+e)%e}function CE(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function LE(n,e,t){return n!==e?(t-n)/(e-n):0}function ca(n,e,t){return(1-t)*n+t*e}function PE(n,e,t,i){return ca(n,e,1-Math.exp(-t*i))}function IE(n,e=1){return e-Math.abs(Vh(n,e*2)-e)}function NE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function DE(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function UE(n,e){return n+Math.floor(Math.random()*(e-n+1))}function OE(n,e){return n+Math.random()*(e-n)}function FE(n){return n*(.5-Math.random())}function kE(n){n!==void 0&&(sg=n);let e=sg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BE(n){return n*la}function zE(n){return n*co}function bd(n){return(n&n-1)===0&&n!==0}function iy(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Nc(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function HE(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":n.set(a*u,l*f,l*d,a*c);break;case"YZY":n.set(l*d,a*u,l*f,a*c);break;case"ZXZ":n.set(l*f,l*d,a*u,a*c);break;case"XZX":n.set(a*u,l*_,l*p,a*c);break;case"YXY":n.set(l*p,a*u,l*_,a*c);break;case"ZYZ":n.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function fi(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function it(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Gh={DEG2RAD:la,RAD2DEG:co,generateUUID:Qn,clamp:zt,euclideanModulo:Vh,mapLinear:CE,inverseLerp:LE,lerp:ca,damp:PE,pingpong:IE,smoothstep:NE,smootherstep:DE,randInt:UE,randFloat:OE,randFloatSpread:FE,seededRandom:kE,degToRad:BE,radToDeg:zE,isPowerOfTwo:bd,ceilPowerOfTwo:iy,floorPowerOfTwo:Nc,setQuaternionFromProperEuler:HE,normalize:it,denormalize:fi};class Ne{constructor(e=0,t=0){Ne.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,r,s,o,a,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c)}set(e,t,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],h=r[6],v=r[1],g=r[4],x=r[7],E=r[2],w=r[5],M=r[8];return s[0]=o*y+a*v+l*E,s[3]=o*m+a*g+l*w,s[6]=o*h+a*x+l*M,s[1]=c*y+u*v+f*E,s[4]=c*m+u*g+f*w,s[7]=c*h+u*x+f*M,s[2]=d*y+p*v+_*E,s[5]=d*m+p*g+_*w,s[8]=d*h+p*x+_*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=t*f+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=f*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*t-r*l)*y,e[5]=(r*s-a*t)*y,e[6]=p*y,e[7]=(i*l-c*t)*y,e[8]=(o*t-i*s)*y,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Gu.makeScale(e,t)),this}rotate(e){return this.premultiply(Gu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gu=new Ge;function ry(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function VE(){const n=Ia("canvas");return n.style.display="block",n}const og={};function ua(n){n in og||(og[n]=!0,console.warn(n))}const ag=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),lg=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ll={[Xt]:{transfer:Cc,primaries:Lc,toReference:n=>n,fromReference:n=>n},[yt]:{transfer:ct,primaries:Lc,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[eu]:{transfer:Cc,primaries:Pc,toReference:n=>n.applyMatrix3(lg),fromReference:n=>n.applyMatrix3(ag)},[Hh]:{transfer:ct,primaries:Pc,toReference:n=>n.convertSRGBToLinear().applyMatrix3(lg),fromReference:n=>n.applyMatrix3(ag).convertLinearToSRGB()}},GE=new Set([Xt,eu]),et={enabled:!0,_workingColorSpace:Xt,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!GE.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ll[e].toReference,r=ll[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return ll[n].primaries},getTransfer:function(n){return n===On?Cc:ll[n].transfer}};function Ys(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Wu(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let us;class sy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{us===void 0&&(us=Ia("canvas")),us.width=e.width,us.height=e.height;const i=us.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ia("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Ys(t[i]/255)*255):t[i]=Ys(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WE=0;class oy{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=Qn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Xu(r[o].image)):s.push(Xu(r[o]))}else s=Xu(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Xu(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?sy.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let XE=0;class Vt extends ss{constructor(e=Vt.DEFAULT_IMAGE,t=Vt.DEFAULT_MAPPING,i=Un,r=Un,s=fn,o=Jr,a=Tn,l=gr,c=Vt.DEFAULT_ANISOTROPY,u=On){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:XE++}),this.uuid=Qn(),this.name="",this.source=new oy(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Xr?yt:On),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==$v)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case oo:e.x=e.x-Math.floor(e.x);break;case Un:e.x=e.x<0?0:1;break;case bc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case oo:e.y=e.y-Math.floor(e.y);break;case Un:e.y=e.y<0?0:1;break;case bc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===yt?Xr:ny}set encoding(e){ua("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Xr?yt:On}}Vt.DEFAULT_IMAGE=null;Vt.DEFAULT_MAPPING=$v;Vt.DEFAULT_ANISOTROPY=1;class rt{constructor(e=0,t=0,i=0,r=1){rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],h=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const g=(c+1)/2,x=(p+1)/2,E=(h+1)/2,w=(u+d)/4,M=(f+y)/4,P=(_+m)/4;return g>x&&g>E?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=w/i,s=M/i):x>E?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=w/r,s=P/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=M/s,r=P/s),this.set(i,r,s,t),this}let v=Math.sqrt((m-_)*(m-_)+(f-y)*(f-y)+(d-u)*(d-u));return Math.abs(v)<.001&&(v=1),this.x=(m-_)/v,this.y=(f-y)/v,this.z=(d-u)/v,this.w=Math.acos((c+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jE extends ss{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ua("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Xr?yt:On),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Vt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oy(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class es extends jE{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class ay extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $E extends Vt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Ft,this.minFilter=Ft,this.wrapR=Un,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ni{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=_,e[t+3]=y;return}if(f!==y||l!==d||c!==p||u!==_){let m=1-a;const h=l*d+c*p+u*_+f*y,v=h>=0?1:-1,g=1-h*h;if(g>Number.EPSILON){const E=Math.sqrt(g),w=Math.atan2(E,h*v);m=Math.sin(m*w)/E,a=Math.sin(a*w)/E}const x=a*v;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,f=f*m+y*x,m===1-a){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[t]=a*_+u*f+l*p-c*d,e[t+1]=l*_+u*d+c*f-a*p,e[t+2]=c*_+u*p+a*d-l*f,e[t+3]=u*_-a*f-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"YXZ":this._x=d*u*f+c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"ZXY":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f-d*p*_;break;case"ZYX":this._x=d*u*f-c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f+d*p*_;break;case"YZX":this._x=d*u*f+c*p*_,this._y=c*p*f+d*u*_,this._z=c*u*_-d*p*f,this._w=c*u*f-d*p*_;break;case"XZY":this._x=d*u*f-c*p*_,this._y=c*p*f-d*u*_,this._z=c*u*_+d*p*f,this._w=c*u*f+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(zt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,t=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(cg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(cg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ju.copy(this).projectOnVector(e),this.sub(ju)}reflect(e){return this.sub(ju.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(zt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ju=new N,cg=new ni;class Bi{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Gn):Gn.fromBufferAttribute(s,o),Gn.applyMatrix4(e.matrixWorld),this.expandByPoint(Gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cl.copy(i.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gn),Gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),ul.subVectors(this.max,ko),fs.subVectors(e.a,ko),ds.subVectors(e.b,ko),hs.subVectors(e.c,ko),Hi.subVectors(ds,fs),Vi.subVectors(hs,ds),Ar.subVectors(fs,hs);let t=[0,-Hi.z,Hi.y,0,-Vi.z,Vi.y,0,-Ar.z,Ar.y,Hi.z,0,-Hi.x,Vi.z,0,-Vi.x,Ar.z,0,-Ar.x,-Hi.y,Hi.x,0,-Vi.y,Vi.x,0,-Ar.y,Ar.x,0];return!$u(t,fs,ds,hs,ul)||(t=[1,0,0,0,1,0,0,0,1],!$u(t,fs,ds,hs,ul))?!1:(fl.crossVectors(Hi,Vi),t=[fl.x,fl.y,fl.z],$u(t,fs,ds,hs,ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(vi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),vi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),vi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),vi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),vi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),vi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),vi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),vi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(vi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const vi=[new N,new N,new N,new N,new N,new N,new N,new N],Gn=new N,cl=new Bi,fs=new N,ds=new N,hs=new N,Hi=new N,Vi=new N,Ar=new N,ko=new N,ul=new N,fl=new N,Rr=new N;function $u(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Rr.fromArray(n,s);const a=r.x*Math.abs(Rr.x)+r.y*Math.abs(Rr.y)+r.z*Math.abs(Rr.z),l=e.dot(Rr),c=t.dot(Rr),u=i.dot(Rr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const YE=new Bi,Bo=new N,Yu=new N;class mi{constructor(e=new N,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):YE.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Yu)),this.expandByPoint(Bo.copy(e.center).sub(Yu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yi=new N,qu=new N,dl=new N,Gi=new N,Ku=new N,hl=new N,Zu=new N;class Ba{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,yi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=yi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(yi.copy(this.origin).addScaledVector(this.direction,t),yi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){qu.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),Gi.copy(this.origin).sub(qu);const s=e.distanceTo(t)*.5,o=-this.direction.dot(dl),a=Gi.dot(this.direction),l=-Gi.dot(dl),c=Gi.lengthSq(),u=Math.abs(1-o*o);let f,d,p,_;if(u>0)if(f=o*l-a,d=o*a-l,_=s*u,f>=0)if(d>=-_)if(d<=_){const y=1/u;f*=y,d*=y,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;else d<=-_?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c):d<=_?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(qu).addScaledVector(dl,d),p}intersectSphere(e,t){yi.subVectors(e.center,this.origin);const i=yi.dot(this.direction),r=yi.dot(yi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,yi)!==null}intersectTriangle(e,t,i,r,s){Ku.subVectors(t,e),hl.subVectors(i,e),Zu.crossVectors(Ku,hl);let o=this.direction.dot(Zu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gi.subVectors(this.origin,e);const l=a*this.direction.dot(hl.crossVectors(Gi,hl));if(l<0)return null;const c=a*this.direction.dot(Ku.cross(Gi));if(c<0||l+c>o)return null;const u=-a*Gi.dot(Zu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(e,t,i,r,s,o,a,l,c,u,f,d,p,_,y,m){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,c,u,f,d,p,_,y,m)}set(e,t,i,r,s,o,a,l,c,u,f,d,p,_,y,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=c,h[6]=u,h[10]=f,h[14]=d,h[3]=p,h[7]=_,h[11]=y,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/ps.setFromMatrixColumn(e,0).length(),s=1/ps.setFromMatrixColumn(e,1).length(),o=1/ps.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*f,_=a*u,y=a*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=p+_*c,t[5]=d-y*c,t[9]=-a*l,t[2]=y-d*c,t[6]=_+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*f,_=c*u,y=c*f;t[0]=d+y*a,t[4]=_*a-p,t[8]=o*c,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=p*a-_,t[6]=y+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*f,_=c*u,y=c*f;t[0]=d-y*a,t[4]=-o*f,t[8]=_+p*a,t[1]=p+_*a,t[5]=o*u,t[9]=y-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*f,_=a*u,y=a*f;t[0]=l*u,t[4]=_*c-p,t[8]=d*c+y,t[1]=l*f,t[5]=y*c+d,t[9]=p*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=y-d*f,t[8]=_*f+p,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*f+_,t[10]=d-y*f}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,y=a*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+y,t[5]=o*u,t[9]=p*f-_,t[2]=_*f-p,t[6]=a*u,t[10]=y*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qE,e,KE)}lookAt(e,t,i){const r=this.elements;return xn.subVectors(e,t),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Wi.crossVectors(i,xn),Wi.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Wi.crossVectors(i,xn)),Wi.normalize(),pl.crossVectors(xn,Wi),r[0]=Wi.x,r[4]=pl.x,r[8]=xn.x,r[1]=Wi.y,r[5]=pl.y,r[9]=xn.y,r[2]=Wi.z,r[6]=pl.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],h=i[14],v=i[3],g=i[7],x=i[11],E=i[15],w=r[0],M=r[4],P=r[8],S=r[12],R=r[1],W=r[5],K=r[9],Q=r[13],D=r[2],X=r[6],q=r[10],$=r[14],U=r[3],k=r[7],F=r[11],L=r[15];return s[0]=o*w+a*R+l*D+c*U,s[4]=o*M+a*W+l*X+c*k,s[8]=o*P+a*K+l*q+c*F,s[12]=o*S+a*Q+l*$+c*L,s[1]=u*w+f*R+d*D+p*U,s[5]=u*M+f*W+d*X+p*k,s[9]=u*P+f*K+d*q+p*F,s[13]=u*S+f*Q+d*$+p*L,s[2]=_*w+y*R+m*D+h*U,s[6]=_*M+y*W+m*X+h*k,s[10]=_*P+y*K+m*q+h*F,s[14]=_*S+y*Q+m*$+h*L,s[3]=v*w+g*R+x*D+E*U,s[7]=v*M+g*W+x*X+E*k,s[11]=v*P+g*K+x*q+E*F,s[15]=v*S+g*Q+x*$+E*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],h=e[15];return _*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+t*l*p-t*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+t*c*f-t*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+h*(-r*a*u-t*l*f+t*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],h=e[15],v=f*m*c-y*d*c+y*l*p-a*m*p-f*l*h+a*d*h,g=_*d*c-u*m*c-_*l*p+o*m*p+u*l*h-o*d*h,x=u*y*c-_*f*c+_*a*p-o*y*p-u*a*h+o*f*h,E=_*f*l-u*y*l-_*a*d+o*y*d+u*a*m-o*f*m,w=t*v+i*g+r*x+s*E;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/w;return e[0]=v*M,e[1]=(y*d*s-f*m*s-y*r*p+i*m*p+f*r*h-i*d*h)*M,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*h+i*l*h)*M,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*p-i*l*p)*M,e[4]=g*M,e[5]=(u*m*s-_*d*s+_*r*p-t*m*p-u*r*h+t*d*h)*M,e[6]=(_*l*s-o*m*s-_*r*c+t*m*c+o*r*h-t*l*h)*M,e[7]=(o*d*s-u*l*s+u*r*c-t*d*c-o*r*p+t*l*p)*M,e[8]=x*M,e[9]=(_*f*s-u*y*s-_*i*p+t*y*p+u*i*h-t*f*h)*M,e[10]=(o*y*s-_*a*s+_*i*c-t*y*c-o*i*h+t*a*h)*M,e[11]=(u*a*s-o*f*s-u*i*c+t*f*c+o*i*p-t*a*p)*M,e[12]=E*M,e[13]=(u*y*r-_*f*r+_*i*d-t*y*d-u*i*m+t*f*m)*M,e[14]=(_*a*r-o*y*r-_*i*l+t*y*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-u*a*r+u*i*l-t*f*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,u=o+o,f=a+a,d=s*c,p=s*u,_=s*f,y=o*u,m=o*f,h=a*f,v=l*c,g=l*u,x=l*f,E=i.x,w=i.y,M=i.z;return r[0]=(1-(y+h))*E,r[1]=(p+x)*E,r[2]=(_-g)*E,r[3]=0,r[4]=(p-x)*w,r[5]=(1-(d+h))*w,r[6]=(m+v)*w,r[7]=0,r[8]=(_+g)*M,r[9]=(m-v)*M,r[10]=(1-(d+y))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=ps.set(r[0],r[1],r[2]).length();const o=ps.set(r[4],r[5],r[6]).length(),a=ps.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,u=1/o,f=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=f,Wn.elements[9]*=f,Wn.elements[10]*=f,t.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Li){const l=this.elements,c=2*s/(t-e),u=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,_;if(a===Li)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Ic)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Li){const l=this.elements,c=1/(t-e),u=1/(i-r),f=1/(o-s),d=(t+e)*c,p=(i+r)*u;let _,y;if(a===Li)_=(o+s)*f,y=-2*f;else if(a===Ic)_=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ps=new N,Wn=new Fe,qE=new N(0,0,0),KE=new N(1,1,1),Wi=new N,pl=new N,xn=new N,ug=new Fe,fg=new ni;class rr{constructor(e=0,t=0,i=0,r=rr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(zt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-zt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(zt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ug.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ug,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fg.setFromEuler(this),this.setFromQuaternion(fg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rr.DEFAULT_ORDER="XYZ";class ly{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let ZE=0;const dg=new N,ms=new ni,xi=new Fe,ml=new N,zo=new N,QE=new N,JE=new ni,hg=new N(1,0,0),pg=new N(0,1,0),mg=new N(0,0,1),eT={type:"added"},tT={type:"removed"};class mt extends ss{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ZE++}),this.uuid=Qn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new N,t=new rr,i=new ni,r=new N(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new Ge}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ly,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.multiply(ms),this}rotateOnWorldAxis(e,t){return ms.setFromAxisAngle(e,t),this.quaternion.premultiply(ms),this}rotateX(e){return this.rotateOnAxis(hg,e)}rotateY(e){return this.rotateOnAxis(pg,e)}rotateZ(e){return this.rotateOnAxis(mg,e)}translateOnAxis(e,t){return dg.copy(e).applyQuaternion(this.quaternion),this.position.add(dg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hg,e)}translateY(e){return this.translateOnAxis(pg,e)}translateZ(e){return this.translateOnAxis(mg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(xi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ml.copy(e):ml.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xi.lookAt(zo,ml,this.up):xi.lookAt(ml,zo,this.up),this.quaternion.setFromRotationMatrix(xi),r&&(xi.extractRotation(r.matrixWorld),ms.setFromRotationMatrix(xi),this.quaternion.premultiply(ms.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(eT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(tT)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(xi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,QE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,JE,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new N(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new N,Si=new N,Qu=new N,Mi=new N,gs=new N,_s=new N,gg=new N,Ju=new N,ef=new N,tf=new N;let gl=!1;class qn{constructor(e=new N,t=new N,i=new N){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Xn.subVectors(e,t),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Xn.subVectors(r,t),Si.subVectors(i,t),Qu.subVectors(e,t);const o=Xn.dot(Xn),a=Xn.dot(Si),l=Xn.dot(Qu),c=Si.dot(Si),u=Si.dot(Qu),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Mi),Mi.x>=0&&Mi.y>=0&&Mi.x+Mi.y<=1}static getUV(e,t,i,r,s,o,a,l){return gl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Mi),l.setScalar(0),l.addScaledVector(s,Mi.x),l.addScaledVector(o,Mi.y),l.addScaledVector(a,Mi.z),l}static isFrontFacing(e,t,i,r){return Xn.subVectors(i,t),Si.subVectors(e,t),Xn.cross(Si).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),Si.subVectors(this.a,this.b),Xn.cross(Si).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return gl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),gl=!0),qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return qn.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return qn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;gs.subVectors(r,i),_s.subVectors(s,i),Ju.subVectors(e,i);const l=gs.dot(Ju),c=_s.dot(Ju);if(l<=0&&c<=0)return t.copy(i);ef.subVectors(e,r);const u=gs.dot(ef),f=_s.dot(ef);if(u>=0&&f<=u)return t.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(i).addScaledVector(gs,o);tf.subVectors(e,s);const p=gs.dot(tf),_=_s.dot(tf);if(_>=0&&p<=_)return t.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(i).addScaledVector(_s,a);const m=u*_-p*f;if(m<=0&&f-u>=0&&p-_>=0)return gg.subVectors(s,r),a=(f-u)/(f-u+(p-_)),t.copy(r).addScaledVector(gg,a);const h=1/(m+y+d);return o=y*h,a=d*h,t.copy(i).addScaledVector(gs,o).addScaledVector(_s,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const cy={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xi={h:0,s:0,l:0},_l={h:0,s:0,l:0};function nf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Le{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=yt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=Vh(e,1),t=zt(t,0,1),i=zt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=nf(o,s,e+1/3),this.g=nf(o,s,e),this.b=nf(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=yt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=yt){const i=cy[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Wu(e.r),this.g=Wu(e.g),this.b=Wu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yt){return et.fromWorkingColorSpace(Kt.copy(this),e),Math.round(zt(Kt.r*255,0,255))*65536+Math.round(zt(Kt.g*255,0,255))*256+Math.round(zt(Kt.b*255,0,255))}getHexString(e=yt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(Kt.copy(this),t);const i=Kt.r,r=Kt.g,s=Kt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(Kt.copy(this),t),e.r=Kt.r,e.g=Kt.g,e.b=Kt.b,e}getStyle(e=yt){et.fromWorkingColorSpace(Kt.copy(this),e);const t=Kt.r,i=Kt.g,r=Kt.b;return e!==yt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(Xi),this.setHSL(Xi.h+e,Xi.s+t,Xi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Xi),e.getHSL(_l);const i=ca(Xi.h,_l.h,t),r=ca(Xi.s,_l.s,t),s=ca(Xi.l,_l.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Kt=new Le;Le.NAMES=cy;let nT=0;class Jn extends ss{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nT++}),this.uuid=Qn(),this.name="",this.type="Material",this.blending=$s,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=Sd,this.blendEquation=Dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=Rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ig,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cs,this.stencilZFail=cs,this.stencilZPass=cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==xd&&(i.blendSrc=this.blendSrc),this.blendDst!==Sd&&(i.blendDst=this.blendDst),this.blendEquation!==Dr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Rc&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ig&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==cs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==cs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==cs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Br extends Jn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wt=new N,vl=new Ne;class Gt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Ad,this.updateRange={offset:0,count:-1},this.gpuType=di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vl.fromBufferAttribute(this,t),vl.applyMatrix3(e),this.setXY(t,vl.x,vl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix3(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyMatrix4(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.applyNormalMatrix(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)wt.fromBufferAttribute(this,t),wt.transformDirection(e),this.setXYZ(t,wt.x,wt.y,wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=fi(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=it(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ad&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class uy extends Gt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class fy extends Gt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ii extends Gt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let iT=0;const Pn=new Fe,rf=new mt,vs=new N,Sn=new Bi,Ho=new Bi,Dt=new N;class ii extends ss{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:iT++}),this.uuid=Qn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ry(e)?fy:uy)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Pn.makeRotationFromQuaternion(e),this.applyMatrix4(Pn),this}rotateX(e){return Pn.makeRotationX(e),this.applyMatrix4(Pn),this}rotateY(e){return Pn.makeRotationY(e),this.applyMatrix4(Pn),this}rotateZ(e){return Pn.makeRotationZ(e),this.applyMatrix4(Pn),this}translate(e,t,i){return Pn.makeTranslation(e,t,i),this.applyMatrix4(Pn),this}scale(e,t,i){return Pn.makeScale(e,t,i),this.applyMatrix4(Pn),this}lookAt(e){return rf.lookAt(e),rf.updateMatrix(),this.applyMatrix4(rf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ii(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Dt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Dt),Dt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Dt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Ho.setFromBufferAttribute(a),this.morphTargetsRelative?(Dt.addVectors(Sn.min,Ho.min),Sn.expandByPoint(Dt),Dt.addVectors(Sn.max,Ho.max),Sn.expandByPoint(Dt)):(Sn.expandByPoint(Ho.min),Sn.expandByPoint(Ho.max))}Sn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Dt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Dt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Dt.fromBufferAttribute(a,c),l&&(vs.fromBufferAttribute(e,c),Dt.add(vs)),r=Math.max(r,i.distanceToSquared(Dt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let R=0;R<a;R++)c[R]=new N,u[R]=new N;const f=new N,d=new N,p=new N,_=new Ne,y=new Ne,m=new Ne,h=new N,v=new N;function g(R,W,K){f.fromArray(r,R*3),d.fromArray(r,W*3),p.fromArray(r,K*3),_.fromArray(o,R*2),y.fromArray(o,W*2),m.fromArray(o,K*2),d.sub(f),p.sub(f),y.sub(_),m.sub(_);const Q=1/(y.x*m.y-m.x*y.y);isFinite(Q)&&(h.copy(d).multiplyScalar(m.y).addScaledVector(p,-y.y).multiplyScalar(Q),v.copy(p).multiplyScalar(y.x).addScaledVector(d,-m.x).multiplyScalar(Q),c[R].add(h),c[W].add(h),c[K].add(h),u[R].add(v),u[W].add(v),u[K].add(v))}let x=this.groups;x.length===0&&(x=[{start:0,count:i.length}]);for(let R=0,W=x.length;R<W;++R){const K=x[R],Q=K.start,D=K.count;for(let X=Q,q=Q+D;X<q;X+=3)g(i[X+0],i[X+1],i[X+2])}const E=new N,w=new N,M=new N,P=new N;function S(R){M.fromArray(s,R*3),P.copy(M);const W=c[R];E.copy(W),E.sub(M.multiplyScalar(M.dot(W))).normalize(),w.crossVectors(P,W);const Q=w.dot(u[R])<0?-1:1;l[R*4]=E.x,l[R*4+1]=E.y,l[R*4+2]=E.z,l[R*4+3]=Q}for(let R=0,W=x.length;R<W;++R){const K=x[R],Q=K.start,D=K.count;for(let X=Q,q=Q+D;X<q;X+=3)S(i[X+0]),S(i[X+1]),S(i[X+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,y),o.fromBufferAttribute(t,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Dt.fromBufferAttribute(e,t),Dt.normalize(),e.setXYZ(t,Dt.x,Dt.y,Dt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let h=0;h<u;h++)d[_++]=c[p++]}return new Gt(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,p=f.length;d<p;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const _g=new Fe,br=new Ba,yl=new mi,vg=new N,ys=new N,xs=new N,Ss=new N,sf=new N,xl=new N,Sl=new Ne,Ml=new Ne,El=new Ne,yg=new N,xg=new N,Sg=new N,Tl=new N,wl=new N;class on extends mt{constructor(e=new ii,t=new Br){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){xl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(sf.fromBufferAttribute(f,e),o?xl.addScaledVector(sf,u):xl.addScaledVector(sf.sub(t),u))}t.add(xl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),yl.copy(i.boundingSphere),yl.applyMatrix4(s),br.copy(e.ray).recast(e.near),!(yl.containsPoint(br.origin)===!1&&(br.intersectSphere(yl,vg)===null||br.origin.distanceToSquared(vg)>(e.far-e.near)**2))&&(_g.copy(s).invert(),br.copy(e.ray).applyMatrix4(_g),!(i.boundingBox!==null&&br.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,br)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,E=g;x<E;x+=3){const w=a.getX(x),M=a.getX(x+1),P=a.getX(x+2);r=Al(this,h,e,i,c,u,f,w,M,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=a.getX(m),g=a.getX(m+1),x=a.getX(m+2);r=Al(this,o,e,i,c,u,f,v,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],h=o[m.materialIndex],v=Math.max(m.start,p.start),g=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,E=g;x<E;x+=3){const w=x,M=x+1,P=x+2;r=Al(this,h,e,i,c,u,f,w,M,P),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,h=y;m<h;m+=3){const v=m,g=m+1,x=m+2;r=Al(this,o,e,i,c,u,f,v,g,x),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function rT(n,e,t,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fi,a),l===null)return null;wl.copy(a),wl.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(wl);return c<t.near||c>t.far?null:{distance:c,point:wl.clone(),object:n}}function Al(n,e,t,i,r,s,o,a,l,c){n.getVertexPosition(a,ys),n.getVertexPosition(l,xs),n.getVertexPosition(c,Ss);const u=rT(n,e,t,i,ys,xs,Ss,Tl);if(u){r&&(Sl.fromBufferAttribute(r,a),Ml.fromBufferAttribute(r,l),El.fromBufferAttribute(r,c),u.uv=qn.getInterpolation(Tl,ys,xs,Ss,Sl,Ml,El,new Ne)),s&&(Sl.fromBufferAttribute(s,a),Ml.fromBufferAttribute(s,l),El.fromBufferAttribute(s,c),u.uv1=qn.getInterpolation(Tl,ys,xs,Ss,Sl,Ml,El,new Ne),u.uv2=u.uv1),o&&(yg.fromBufferAttribute(o,a),xg.fromBufferAttribute(o,l),Sg.fromBufferAttribute(o,c),u.normal=qn.getInterpolation(Tl,ys,xs,Ss,yg,xg,Sg,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};qn.getNormal(ys,xs,Ss,f.normal),u.face=f}return u}class za extends ii{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,p=0;_("z","y","x",-1,-1,i,t,e,o,s,0),_("z","y","x",1,-1,i,t,-e,o,s,1),_("x","z","y",1,1,e,i,t,r,o,2),_("x","z","y",1,-1,e,i,-t,r,o,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ii(c,3)),this.setAttribute("normal",new Ii(u,3)),this.setAttribute("uv",new Ii(f,2));function _(y,m,h,v,g,x,E,w,M,P,S){const R=x/M,W=E/P,K=x/2,Q=E/2,D=w/2,X=M+1,q=P+1;let $=0,U=0;const k=new N;for(let F=0;F<q;F++){const L=F*W-Q;for(let B=0;B<X;B++){const ce=B*R-K;k[y]=ce*v,k[m]=L*g,k[h]=D,c.push(k.x,k.y,k.z),k[y]=0,k[m]=0,k[h]=w>0?1:-1,u.push(k.x,k.y,k.z),f.push(B/M),f.push(1-F/P),$+=1}}for(let F=0;F<P;F++)for(let L=0;L<M;L++){const B=d+L+X*F,ce=d+L+X*(F+1),ae=d+(L+1)+X*(F+1),fe=d+(L+1)+X*F;l.push(B,ce,fe),l.push(ce,ae,fe),U+=6}a.addGroup(p,U,S),p+=U,d+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new za(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function uo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function nn(n){const e={};for(let t=0;t<n.length;t++){const i=uo(n[t]);for(const r in i)e[r]=i[r]}return e}function sT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function dy(n){return n.getRenderTarget()===null?n.outputColorSpace:et.workingColorSpace}const oT={clone:uo,merge:nn};var aT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ts extends Jn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=aT,this.fragmentShader=lT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=uo(e.uniforms),this.uniformsGroups=sT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class hy extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe,this.coordinateSystem=Li}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends hy{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=co*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(la*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return co*2*Math.atan(Math.tan(la*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(la*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ms=-90,Es=1;class cT extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new sn(Ms,Es,e,t);r.layers=this.layers,this.add(r);const s=new sn(Ms,Es,e,t);s.layers=this.layers,this.add(s);const o=new sn(Ms,Es,e,t);o.layers=this.layers,this.add(o);const a=new sn(Ms,Es,e,t);a.layers=this.layers,this.add(a);const l=new sn(Ms,Es,e,t);l.layers=this.layers,this.add(l);const c=new sn(Ms,Es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===Li)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ic)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(t,u),e.setRenderTarget(f,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class py extends Vt{constructor(e,t,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ro,super(e,t,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class uT extends es{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ua("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Xr?yt:On),this.texture=new py(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new za(5,5,5),s=new ts({name:"CubemapFromEquirect",uniforms:uo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:pr});s.uniforms.tEquirect.value=t;const o=new on(r,s),a=t.minFilter;return t.minFilter===Jr&&(t.minFilter=fn),new cT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const of=new N,fT=new N,dT=new Ge;class Ki{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=of.subVectors(i,t).cross(fT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(of),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||dT.getNormalMatrix(e),r=this.coplanarPoint(of).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new mi,Rl=new N;class Wh{constructor(e=new Ki,t=new Ki,i=new Ki,r=new Ki,s=new Ki,o=new Ki){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Li){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],h=r[12],v=r[13],g=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-h).normalize(),i[1].setComponents(l+s,d+c,m+p,x+h).normalize(),i[2].setComponents(l+o,d+u,m+_,x+v).normalize(),i[3].setComponents(l-o,d-u,m-_,x-v).normalize(),i[4].setComponents(l-a,d-f,m-y,x-g).normalize(),t===Li)i[5].setComponents(l+a,d+f,m+y,x+g).normalize();else if(t===Ic)i[5].setComponents(a,f,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Cr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Rl.x=r.normal.x>0?e.max.x:e.min.x,Rl.y=r.normal.y>0?e.max.y:e.min.y,Rl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Rl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function my(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function hT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,p=n.createBuffer();n.bindBuffer(u,p),n.bufferData(u,f,d),c.onUploadCallback();let _;if(f instanceof Float32Array)_=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)_=n.SHORT;else if(f instanceof Uint32Array)_=n.UNSIGNED_INT;else if(f instanceof Int32Array)_=n.INT;else if(f instanceof Int8Array)_=n.BYTE;else if(f instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:p,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,p=u.updateRange;n.bindBuffer(f,c),p.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Xh extends ii{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=t/l,p=[],_=[],y=[],m=[];for(let h=0;h<u;h++){const v=h*d-o;for(let g=0;g<c;g++){const x=g*f-s;_.push(x,-v,0),y.push(0,0,1),m.push(g/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let v=0;v<a;v++){const g=v+c*h,x=v+c*(h+1),E=v+1+c*(h+1),w=v+1+c*h;p.push(g,x,w),p.push(x,E,w)}this.setIndex(p),this.setAttribute("position",new Ii(_,3)),this.setAttribute("normal",new Ii(y,3)),this.setAttribute("uv",new Ii(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xh(e.width,e.height,e.widthSegments,e.heightSegments)}}var pT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,yT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,xT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ST=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,MT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ET=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,TT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,wT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,AT=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,bT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,CT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,IT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,NT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,DT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,UT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,FT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,kT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,HT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,VT="gl_FragColor = linearToOutputTexel( gl_FragColor );",GT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,WT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,XT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,qT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,KT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,QT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,JT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,t1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,s1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,o1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,f1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,d1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,h1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,p1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,m1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,v1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,y1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,x1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,A1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,R1=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,b1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,C1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,L1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,P1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,D1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,U1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,F1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,z1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,H1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,G1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,X1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,$1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Y1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,q1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,K1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Z1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,J1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ew=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ow=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,aw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,cw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,dw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,pw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_w=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,yw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,xw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Mw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ew=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ww=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Aw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Lw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Iw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ow=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,zw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hw=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ww=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:pT,alphahash_pars_fragment:mT,alphamap_fragment:gT,alphamap_pars_fragment:_T,alphatest_fragment:vT,alphatest_pars_fragment:yT,aomap_fragment:xT,aomap_pars_fragment:ST,begin_vertex:MT,beginnormal_vertex:ET,bsdfs:TT,iridescence_fragment:wT,bumpmap_pars_fragment:AT,clipping_planes_fragment:RT,clipping_planes_pars_fragment:bT,clipping_planes_pars_vertex:CT,clipping_planes_vertex:LT,color_fragment:PT,color_pars_fragment:IT,color_pars_vertex:NT,color_vertex:DT,common:UT,cube_uv_reflection_fragment:OT,defaultnormal_vertex:FT,displacementmap_pars_vertex:kT,displacementmap_vertex:BT,emissivemap_fragment:zT,emissivemap_pars_fragment:HT,colorspace_fragment:VT,colorspace_pars_fragment:GT,envmap_fragment:WT,envmap_common_pars_fragment:XT,envmap_pars_fragment:jT,envmap_pars_vertex:$T,envmap_physical_pars_fragment:s1,envmap_vertex:YT,fog_vertex:qT,fog_pars_vertex:KT,fog_fragment:ZT,fog_pars_fragment:QT,gradientmap_pars_fragment:JT,lightmap_fragment:e1,lightmap_pars_fragment:t1,lights_lambert_fragment:n1,lights_lambert_pars_fragment:i1,lights_pars_begin:r1,lights_toon_fragment:o1,lights_toon_pars_fragment:a1,lights_phong_fragment:l1,lights_phong_pars_fragment:c1,lights_physical_fragment:u1,lights_physical_pars_fragment:f1,lights_fragment_begin:d1,lights_fragment_maps:h1,lights_fragment_end:p1,logdepthbuf_fragment:m1,logdepthbuf_pars_fragment:g1,logdepthbuf_pars_vertex:_1,logdepthbuf_vertex:v1,map_fragment:y1,map_pars_fragment:x1,map_particle_fragment:S1,map_particle_pars_fragment:M1,metalnessmap_fragment:E1,metalnessmap_pars_fragment:T1,morphcolor_vertex:w1,morphnormal_vertex:A1,morphtarget_pars_vertex:R1,morphtarget_vertex:b1,normal_fragment_begin:C1,normal_fragment_maps:L1,normal_pars_fragment:P1,normal_pars_vertex:I1,normal_vertex:N1,normalmap_pars_fragment:D1,clearcoat_normal_fragment_begin:U1,clearcoat_normal_fragment_maps:O1,clearcoat_pars_fragment:F1,iridescence_pars_fragment:k1,opaque_fragment:B1,packing:z1,premultiplied_alpha_fragment:H1,project_vertex:V1,dithering_fragment:G1,dithering_pars_fragment:W1,roughnessmap_fragment:X1,roughnessmap_pars_fragment:j1,shadowmap_pars_fragment:$1,shadowmap_pars_vertex:Y1,shadowmap_vertex:q1,shadowmask_pars_fragment:K1,skinbase_vertex:Z1,skinning_pars_vertex:Q1,skinning_vertex:J1,skinnormal_vertex:ew,specularmap_fragment:tw,specularmap_pars_fragment:nw,tonemapping_fragment:iw,tonemapping_pars_fragment:rw,transmission_fragment:sw,transmission_pars_fragment:ow,uv_pars_fragment:aw,uv_pars_vertex:lw,uv_vertex:cw,worldpos_vertex:uw,background_vert:fw,background_frag:dw,backgroundCube_vert:hw,backgroundCube_frag:pw,cube_vert:mw,cube_frag:gw,depth_vert:_w,depth_frag:vw,distanceRGBA_vert:yw,distanceRGBA_frag:xw,equirect_vert:Sw,equirect_frag:Mw,linedashed_vert:Ew,linedashed_frag:Tw,meshbasic_vert:ww,meshbasic_frag:Aw,meshlambert_vert:Rw,meshlambert_frag:bw,meshmatcap_vert:Cw,meshmatcap_frag:Lw,meshnormal_vert:Pw,meshnormal_frag:Iw,meshphong_vert:Nw,meshphong_frag:Dw,meshphysical_vert:Uw,meshphysical_frag:Ow,meshtoon_vert:Fw,meshtoon_frag:kw,points_vert:Bw,points_frag:zw,shadow_vert:Hw,shadow_frag:Vw,sprite_vert:Gw,sprite_frag:Ww},ue={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ai={basic:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:nn([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:nn([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:nn([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Le(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:nn([ue.points,ue.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:nn([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:nn([ue.common,ue.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:nn([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:nn([ue.sprite,ue.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:nn([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:nn([ue.lights,ue.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ai.physical={uniforms:nn([ai.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const bl={r:0,b:0,g:0};function Xw(n,e,t,i,r,s,o){const a=new Le(0);let l=s===!0?0:1,c,u,f=null,d=0,p=null;function _(m,h){let v=!1,g=h.isScene===!0?h.background:null;g&&g.isTexture&&(g=(h.backgroundBlurriness>0?t:e).get(g)),g===null?y(a,l):g&&g.isColor&&(y(g,1),v=!0);const x=n.xr.getEnvironmentBlendMode();x==="additive"?i.buffers.color.setClear(0,0,0,1,o):x==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===Jc)?(u===void 0&&(u=new on(new za(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:uo(ai.backgroundCube.uniforms),vertexShader:ai.backgroundCube.vertexShader,fragmentShader:ai.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=g,u.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=et.getTransfer(g.colorSpace)!==ct,(f!==g||d!==g.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=g,d=g.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):g&&g.isTexture&&(c===void 0&&(c=new on(new Xh(2,2),new ts({name:"BackgroundMaterial",uniforms:uo(ai.background.uniforms),vertexShader:ai.background.vertexShader,fragmentShader:ai.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=g,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.toneMapped=et.getTransfer(g.colorSpace)!==ct,g.matrixAutoUpdate===!0&&g.updateMatrix(),c.material.uniforms.uvTransform.value.copy(g.matrix),(f!==g||d!==g.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=g,d=g.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function y(m,h){m.getRGB(bl,dy(n)),i.buffers.color.setClear(bl.r,bl.g,bl.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,y(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,y(a,l)},render:_}}function jw(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(D,X,q,$,U){let k=!1;if(o){const F=y($,q,X);c!==F&&(c=F,p(c.object)),k=h(D,$,q,U),k&&v(D,$,q,U)}else{const F=X.wireframe===!0;(c.geometry!==$.id||c.program!==q.id||c.wireframe!==F)&&(c.geometry=$.id,c.program=q.id,c.wireframe=F,k=!0)}U!==null&&t.update(U,n.ELEMENT_ARRAY_BUFFER),(k||u)&&(u=!1,P(D,X,q,$),U!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(U).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(D){return i.isWebGL2?n.bindVertexArray(D):s.bindVertexArrayOES(D)}function _(D){return i.isWebGL2?n.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function y(D,X,q){const $=q.wireframe===!0;let U=a[D.id];U===void 0&&(U={},a[D.id]=U);let k=U[X.id];k===void 0&&(k={},U[X.id]=k);let F=k[$];return F===void 0&&(F=m(d()),k[$]=F),F}function m(D){const X=[],q=[],$=[];for(let U=0;U<r;U++)X[U]=0,q[U]=0,$[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:q,attributeDivisors:$,object:D,attributes:{},index:null}}function h(D,X,q,$){const U=c.attributes,k=X.attributes;let F=0;const L=q.getAttributes();for(const B in L)if(L[B].location>=0){const ae=U[B];let fe=k[B];if(fe===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(fe=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(fe=D.instanceColor)),ae===void 0||ae.attribute!==fe||fe&&ae.data!==fe.data)return!0;F++}return c.attributesNum!==F||c.index!==$}function v(D,X,q,$){const U={},k=X.attributes;let F=0;const L=q.getAttributes();for(const B in L)if(L[B].location>=0){let ae=k[B];ae===void 0&&(B==="instanceMatrix"&&D.instanceMatrix&&(ae=D.instanceMatrix),B==="instanceColor"&&D.instanceColor&&(ae=D.instanceColor));const fe={};fe.attribute=ae,ae&&ae.data&&(fe.data=ae.data),U[B]=fe,F++}c.attributes=U,c.attributesNum=F,c.index=$}function g(){const D=c.newAttributes;for(let X=0,q=D.length;X<q;X++)D[X]=0}function x(D){E(D,0)}function E(D,X){const q=c.newAttributes,$=c.enabledAttributes,U=c.attributeDivisors;q[D]=1,$[D]===0&&(n.enableVertexAttribArray(D),$[D]=1),U[D]!==X&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,X),U[D]=X)}function w(){const D=c.newAttributes,X=c.enabledAttributes;for(let q=0,$=X.length;q<$;q++)X[q]!==D[q]&&(n.disableVertexAttribArray(q),X[q]=0)}function M(D,X,q,$,U,k,F){F===!0?n.vertexAttribIPointer(D,X,q,U,k):n.vertexAttribPointer(D,X,q,$,U,k)}function P(D,X,q,$){if(i.isWebGL2===!1&&(D.isInstancedMesh||$.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;g();const U=$.attributes,k=q.getAttributes(),F=X.defaultAttributeValues;for(const L in k){const B=k[L];if(B.location>=0){let ce=U[L];if(ce===void 0&&(L==="instanceMatrix"&&D.instanceMatrix&&(ce=D.instanceMatrix),L==="instanceColor"&&D.instanceColor&&(ce=D.instanceColor)),ce!==void 0){const ae=ce.normalized,fe=ce.itemSize,ge=t.get(ce);if(ge===void 0)continue;const Ae=ge.buffer,Se=ge.type,Ce=ge.bytesPerElement,Ze=i.isWebGL2===!0&&(Se===n.INT||Se===n.UNSIGNED_INT||ce.gpuType===qv);if(ce.isInterleavedBufferAttribute){const we=ce.data,z=we.stride,jt=ce.offset;if(we.isInstancedInterleavedBuffer){for(let Ee=0;Ee<B.locationSize;Ee++)E(B.location+Ee,we.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ee=0;Ee<B.locationSize;Ee++)x(B.location+Ee);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<B.locationSize;Ee++)M(B.location+Ee,fe/B.locationSize,Se,ae,z*Ce,(jt+fe/B.locationSize*Ee)*Ce,Ze)}else{if(ce.isInstancedBufferAttribute){for(let we=0;we<B.locationSize;we++)E(B.location+we,ce.meshPerAttribute);D.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let we=0;we<B.locationSize;we++)x(B.location+we);n.bindBuffer(n.ARRAY_BUFFER,Ae);for(let we=0;we<B.locationSize;we++)M(B.location+we,fe/B.locationSize,Se,ae,fe*Ce,fe/B.locationSize*we*Ce,Ze)}}else if(F!==void 0){const ae=F[L];if(ae!==void 0)switch(ae.length){case 2:n.vertexAttrib2fv(B.location,ae);break;case 3:n.vertexAttrib3fv(B.location,ae);break;case 4:n.vertexAttrib4fv(B.location,ae);break;default:n.vertexAttrib1fv(B.location,ae)}}}}w()}function S(){K();for(const D in a){const X=a[D];for(const q in X){const $=X[q];for(const U in $)_($[U].object),delete $[U];delete X[q]}delete a[D]}}function R(D){if(a[D.id]===void 0)return;const X=a[D.id];for(const q in X){const $=X[q];for(const U in $)_($[U].object),delete $[U];delete X[q]}delete a[D.id]}function W(D){for(const X in a){const q=a[X];if(q[D.id]===void 0)continue;const $=q[D.id];for(const U in $)_($[U].object),delete $[U];delete q[D.id]}}function K(){Q(),u=!0,c!==l&&(c=l,p(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:K,resetDefaultState:Q,dispose:S,releaseStatesOfGeometry:R,releaseStatesOfProgram:W,initAttributes:g,enableAttribute:x,disableUnusedAttributes:w}}function $w(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,p;if(r)d=n,p="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,c,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function Yw(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=d>0,x=o||e.has("OES_texture_float"),E=g&&x,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:v,vertexTextures:g,floatFragmentTextures:x,floatVertexTextures:E,maxSamples:w}}function qw(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new Ki,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,p){const _=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,g=v*4;let x=h.clippingState||null;l.value=x,x=u(_,d,g,p);for(let E=0;E!==g;++E)x[E]=t[E];h.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,p,_){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const h=p+y*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<h)&&(m=new Float32Array(h));for(let g=0,x=p;g!==y;++g,x+=4)o.copy(f[g]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Kw(n){let e=new WeakMap;function t(o,a){return a===Md?o.mapping=ro:a===Ed&&(o.mapping=so),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Md||a===Ed)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new uT(l.height/2);return c.fromEquirectangularTexture(n,o),e.set(o,c),o.addEventListener("dispose",r),t(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jh extends hy{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Bs=4,Mg=[.125,.215,.35,.446,.526,.582],Ur=20,af=new jh,Eg=new Le;let lf=null,cf=0,uf=0;const Nr=(1+Math.sqrt(5))/2,Ts=1/Nr,Tg=[new N(1,1,1),new N(-1,1,1),new N(1,1,-1),new N(-1,1,-1),new N(0,Nr,Ts),new N(0,Nr,-Ts),new N(Ts,0,Nr),new N(-Ts,0,Nr),new N(Nr,Ts,0),new N(-Nr,Ts,0)];class wg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),e.scissorTest=!1,Cl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ro||e.mapping===so?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:La,format:Tn,colorSpace:Xt,depthBuffer:!1},r=Ag(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Zw(s)),this._blurMaterial=Qw(s,e,t)}return r}_compileMaterial(e){const t=new on(this._lodPlanes[0],e);this._renderer.compile(t,af)}_sceneToCubeUV(e,t,i,r){const a=new sn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Eg),u.toneMapping=mr,u.autoClear=!1;const p=new Br({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),_=new on(new za,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Eg),y=!0);for(let h=0;h<6;h++){const v=h%3;v===0?(a.up.set(0,l[h],0),a.lookAt(c[h],0,0)):v===1?(a.up.set(0,0,l[h]),a.lookAt(0,c[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,c[h]));const g=this._cubeSize;Cl(r,v*g,h>2?g:0,g,g),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ro||e.mapping===so;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=bg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new on(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Cl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,af)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Tg[(r-1)%Tg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new on(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Ur-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):Ur;m>Ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ur}`);const h=[];let v=0;for(let M=0;M<Ur;++M){const P=M/y,S=Math.exp(-P*P/2);h.push(S),M===0?v+=S:M<m&&(v+=2*S)}for(let M=0;M<h.length;M++)h[M]=h[M]/v;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:g}=this;d.dTheta.value=_,d.mipInt.value=g-i;const x=this._sizeLods[r],E=3*x*(r>g-Bs?r-g+Bs:0),w=4*(this._cubeSize-x);Cl(t,E,w,3*x,2*x),l.setRenderTarget(t),l.render(f,af)}}function Zw(n){const e=[],t=[],i=[];let r=n;const s=n-Bs+1+Mg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Bs?l=Mg[o-n+Bs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,_=6,y=3,m=2,h=1,v=new Float32Array(y*_*p),g=new Float32Array(m*_*p),x=new Float32Array(h*_*p);for(let w=0;w<p;w++){const M=w%3*2/3-1,P=w>2?0:-1,S=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];v.set(S,y*_*w),g.set(d,m*_*w);const R=[w,w,w,w,w,w];x.set(R,h*_*w)}const E=new ii;E.setAttribute("position",new Gt(v,y)),E.setAttribute("uv",new Gt(g,m)),E.setAttribute("faceIndex",new Gt(x,h)),e.push(E),r>Bs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ag(n,e,t){const i=new es(n,e,t);return i.texture.mapping=Jc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Cl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function Qw(n,e,t){const i=new Float32Array(Ur),r=new N(0,1,0);return new ts({name:"SphericalGaussianBlur",defines:{n:Ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function Rg(){return new ts({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function bg(){return new ts({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$h(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function $h(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Jw(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Md||l===Ed,u=l===ro||l===so;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new wg(n)),f=c?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new wg(n));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function eA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function tA(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,h=y.length;m<h;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const _ in d)e.update(d[_],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,h=y.length;m<h;m++)e.update(y[m],n.ARRAY_BUFFER)}}function c(f){const d=[],p=f.index,_=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let g=0,x=v.length;g<x;g+=3){const E=v[g+0],w=v[g+1],M=v[g+2];d.push(E,w,w,M,M,E)}}else if(_!==void 0){const v=_.array;y=_.version;for(let g=0,x=v.length/3-1;g<x;g+=3){const E=g+0,w=g+1,M=g+2;d.push(E,w,w,M,M,E)}}else return;const m=new(ry(d)?fy:uy)(d,1);m.version=y;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function u(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function nA(n,e,t,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,p){n.drawElements(s,p,a,d*l),t.update(p,s,1)}function f(d,p,_){if(_===0)return;let y,m;if(r)y=n,m="drawElementsInstanced";else if(y=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[m](s,p,a,d*l,_),t.update(p,s,_)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function iA(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function rA(n,e){return n[0]-e[0]}function sA(n,e){return Math.abs(e[1])-Math.abs(n[1])}function oA(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new rt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,y=_!==void 0?_.length:0;let m=s.get(u);if(m===void 0||m.count!==y){let X=function(){Q.dispose(),s.delete(u),u.removeEventListener("dispose",X)};var p=X;m!==void 0&&m.texture.dispose();const g=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],M=u.morphAttributes.normal||[],P=u.morphAttributes.color||[];let S=0;g===!0&&(S=1),x===!0&&(S=2),E===!0&&(S=3);let R=u.attributes.position.count*S,W=1;R>e.maxTextureSize&&(W=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const K=new Float32Array(R*W*4*y),Q=new ay(K,R,W,y);Q.type=di,Q.needsUpdate=!0;const D=S*4;for(let q=0;q<y;q++){const $=w[q],U=M[q],k=P[q],F=R*W*4*q;for(let L=0;L<$.count;L++){const B=L*D;g===!0&&(o.fromBufferAttribute($,L),K[F+B+0]=o.x,K[F+B+1]=o.y,K[F+B+2]=o.z,K[F+B+3]=0),x===!0&&(o.fromBufferAttribute(U,L),K[F+B+4]=o.x,K[F+B+5]=o.y,K[F+B+6]=o.z,K[F+B+7]=0),E===!0&&(o.fromBufferAttribute(k,L),K[F+B+8]=o.x,K[F+B+9]=o.y,K[F+B+10]=o.z,K[F+B+11]=k.itemSize===4?o.w:1)}}m={count:y,texture:Q,size:new Ne(R,W)},s.set(u,m),u.addEventListener("dispose",X)}let h=0;for(let g=0;g<d.length;g++)h+=d[g];const v=u.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const _=d===void 0?0:d.length;let y=i[u.id];if(y===void 0||y.length!==_){y=[];for(let x=0;x<_;x++)y[x]=[x,0];i[u.id]=y}for(let x=0;x<_;x++){const E=y[x];E[0]=x,E[1]=d[x]}y.sort(sA);for(let x=0;x<8;x++)x<_&&y[x][1]?(a[x][0]=y[x][0],a[x][1]=y[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(rA);const m=u.morphAttributes.position,h=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const E=a[x],w=E[0],M=E[1];w!==Number.MAX_SAFE_INTEGER&&M?(m&&u.getAttribute("morphTarget"+x)!==m[w]&&u.setAttribute("morphTarget"+x,m[w]),h&&u.getAttribute("morphNormal"+x)!==h[w]&&u.setAttribute("morphNormal"+x,h[w]),r[x]=M,v+=M):(m&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),h&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const g=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",g),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function aA(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const gy=new Vt,_y=new ay,vy=new $E,yy=new py,Cg=[],Lg=[],Pg=new Float32Array(16),Ig=new Float32Array(9),Ng=new Float32Array(4);function Eo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Cg[r];if(s===void 0&&(s=new Float32Array(r),Cg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Pt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function tu(n,e){let t=Lg[e];t===void 0&&(t=new Int32Array(e),Lg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function lA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function cA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Pt(t,e)}}function uA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Pt(t,e)}}function fA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Pt(t,e)}}function dA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;Ng.set(i),n.uniformMatrix2fv(this.addr,!1,Ng),Pt(t,i)}}function hA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;Ig.set(i),n.uniformMatrix3fv(this.addr,!1,Ig),Pt(t,i)}}function pA(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(Lt(t,i))return;Pg.set(i),n.uniformMatrix4fv(this.addr,!1,Pg),Pt(t,i)}}function mA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function gA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Pt(t,e)}}function _A(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Pt(t,e)}}function vA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Pt(t,e)}}function yA(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function xA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Pt(t,e)}}function SA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Pt(t,e)}}function MA(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Pt(t,e)}}function EA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||gy,r)}function TA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||vy,r)}function wA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||yy,r)}function AA(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||_y,r)}function RA(n){switch(n){case 5126:return lA;case 35664:return cA;case 35665:return uA;case 35666:return fA;case 35674:return dA;case 35675:return hA;case 35676:return pA;case 5124:case 35670:return mA;case 35667:case 35671:return gA;case 35668:case 35672:return _A;case 35669:case 35673:return vA;case 5125:return yA;case 36294:return xA;case 36295:return SA;case 36296:return MA;case 35678:case 36198:case 36298:case 36306:case 35682:return EA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return wA;case 36289:case 36303:case 36311:case 36292:return AA}}function bA(n,e){n.uniform1fv(this.addr,e)}function CA(n,e){const t=Eo(e,this.size,2);n.uniform2fv(this.addr,t)}function LA(n,e){const t=Eo(e,this.size,3);n.uniform3fv(this.addr,t)}function PA(n,e){const t=Eo(e,this.size,4);n.uniform4fv(this.addr,t)}function IA(n,e){const t=Eo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function NA(n,e){const t=Eo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function DA(n,e){const t=Eo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function UA(n,e){n.uniform1iv(this.addr,e)}function OA(n,e){n.uniform2iv(this.addr,e)}function FA(n,e){n.uniform3iv(this.addr,e)}function kA(n,e){n.uniform4iv(this.addr,e)}function BA(n,e){n.uniform1uiv(this.addr,e)}function zA(n,e){n.uniform2uiv(this.addr,e)}function HA(n,e){n.uniform3uiv(this.addr,e)}function VA(n,e){n.uniform4uiv(this.addr,e)}function GA(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gy,s[o])}function WA(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vy,s[o])}function XA(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||yy,s[o])}function jA(n,e,t){const i=this.cache,r=e.length,s=tu(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Pt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_y,s[o])}function $A(n){switch(n){case 5126:return bA;case 35664:return CA;case 35665:return LA;case 35666:return PA;case 35674:return IA;case 35675:return NA;case 35676:return DA;case 5124:case 35670:return UA;case 35667:case 35671:return OA;case 35668:case 35672:return FA;case 35669:case 35673:return kA;case 5125:return BA;case 36294:return zA;case 36295:return HA;case 36296:return VA;case 35678:case 36198:case 36298:case 36306:case 35682:return GA;case 35679:case 36299:case 36307:return WA;case 35680:case 36300:case 36308:case 36293:return XA;case 36289:case 36303:case 36311:case 36292:return jA}}class YA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=RA(t.type)}}class qA{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=$A(t.type)}}class KA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function Dg(n,e){n.seq.push(e),n.map[e.id]=e}function ZA(n,e,t){const i=n.name,r=i.length;for(ff.lastIndex=0;;){const s=ff.exec(i),o=ff.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Dg(t,c===void 0?new YA(a,n,e):new qA(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new KA(a),Dg(t,f)),t=f}}}class Zl{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);ZA(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Ug(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const QA=37297;let JA=0;function eR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function tR(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===Pc&&t===Lc?i="LinearDisplayP3ToLinearSRGB":e===Lc&&t===Pc&&(i="LinearSRGBToLinearDisplayP3"),n){case Xt:case eu:return[i,"LinearTransferOETF"];case yt:case Hh:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Og(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+eR(n.getShaderSource(e),o)}else return r}function nR(n,e){const t=tR(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function iR(n,e){let t;switch(e){case tE:t="Linear";break;case nE:t="Reinhard";break;case iE:t="OptimizedCineon";break;case rE:t="ACESFilmic";break;case sE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function rR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zo).join(`
`)}function sR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function oR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Zo(n){return n!==""}function Fg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kg(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const aR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cd(n){return n.replace(aR,cR)}const lR=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function cR(n,e){let t=ze[e];if(t===void 0){const i=lR.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Cd(t)}const uR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bg(n){return n.replace(uR,fR)}function fR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function zg(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jv?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===CM?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ti&&(e="SHADOWMAP_TYPE_VSM"),e}function hR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ro:case so:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function pR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case so:e="ENVMAP_MODE_REFRACTION";break}return e}function mR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case kh:e="ENVMAP_BLENDING_MULTIPLY";break;case JM:e="ENVMAP_BLENDING_MIX";break;case eE:e="ENVMAP_BLENDING_ADD";break}return e}function gR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function _R(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=dR(t),c=hR(t),u=pR(t),f=mR(t),d=gR(t),p=t.isWebGL2?"":rR(t),_=sR(s),y=r.createProgram();let m,h,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zo).join(`
`),m.length>0&&(m+=`
`),h=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zo).join(`
`),h.length>0&&(h+=`
`)):(m=[zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zo).join(`
`),h=[p,zg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==mr?"#define TONE_MAPPING":"",t.toneMapping!==mr?ze.tonemapping_pars_fragment:"",t.toneMapping!==mr?iR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,nR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zo).join(`
`)),o=Cd(o),o=Fg(o,t),o=kg(o,t),a=Cd(a),a=Fg(a,t),a=kg(a,t),o=Bg(o),a=Bg(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,h=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const g=v+m+o,x=v+h+a,E=Ug(r,r.VERTEX_SHADER,g),w=Ug(r,r.FRAGMENT_SHADER,x);r.attachShader(y,E),r.attachShader(y,w),t.index0AttributeName!==void 0?r.bindAttribLocation(y,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function M(W){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(y).trim(),Q=r.getShaderInfoLog(E).trim(),D=r.getShaderInfoLog(w).trim();let X=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,E,w);else{const $=Og(r,E,"vertex"),U=Og(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+K+`
`+$+`
`+U)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(Q===""||D==="")&&(q=!1);q&&(W.diagnostics={runnable:X,programLog:K,vertexShader:{log:Q,prefix:m},fragmentShader:{log:D,prefix:h}})}r.deleteShader(E),r.deleteShader(w),P=new Zl(r,y),S=oR(r,y)}let P;this.getUniforms=function(){return P===void 0&&M(this),P};let S;this.getAttributes=function(){return S===void 0&&M(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(y,QA)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=JA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=E,this.fragmentShader=w,this}let vR=0;class yR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new xR(e),t.set(e,i)),i}}class xR{constructor(e){this.id=vR++,this.code=e,this.usedTimes=0}}function SR(n,e,t,i,r,s,o){const a=new ly,l=new yR,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(S){return S===0?"uv":`uv${S}`}function m(S,R,W,K,Q){const D=K.fog,X=Q.geometry,q=S.isMeshStandardMaterial?K.environment:null,$=(S.isMeshStandardMaterial?t:e).get(S.envMap||q),U=$&&$.mapping===Jc?$.image.height:null,k=_[S.type];S.precision!==null&&(p=r.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const F=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,L=F!==void 0?F.length:0;let B=0;X.morphAttributes.position!==void 0&&(B=1),X.morphAttributes.normal!==void 0&&(B=2),X.morphAttributes.color!==void 0&&(B=3);let ce,ae,fe,ge;if(k){const Et=ai[k];ce=Et.vertexShader,ae=Et.fragmentShader}else ce=S.vertexShader,ae=S.fragmentShader,l.update(S),fe=l.getVertexShaderID(S),ge=l.getFragmentShaderID(S);const Ae=n.getRenderTarget(),Se=Q.isInstancedMesh===!0,Ce=!!S.map,Ze=!!S.matcap,we=!!$,z=!!S.aoMap,jt=!!S.lightMap,Ee=!!S.bumpMap,Pe=!!S.normalMap,Ie=!!S.displacementMap,ft=!!S.emissiveMap,ke=!!S.metalnessMap,Ue=!!S.roughnessMap,qe=S.anisotropy>0,Mt=S.clearcoat>0,It=S.iridescence>0,b=S.sheen>0,T=S.transmission>0,H=qe&&!!S.anisotropyMap,ne=Mt&&!!S.clearcoatMap,J=Mt&&!!S.clearcoatNormalMap,ie=Mt&&!!S.clearcoatRoughnessMap,ve=It&&!!S.iridescenceMap,oe=It&&!!S.iridescenceThicknessMap,de=b&&!!S.sheenColorMap,C=b&&!!S.sheenRoughnessMap,se=!!S.specularMap,Z=!!S.specularColorMap,Re=!!S.specularIntensityMap,ye=T&&!!S.transmissionMap,Te=T&&!!S.thicknessMap,_e=!!S.gradientMap,pe=!!S.alphaMap,We=S.alphaTest>0,I=!!S.alphaHash,le=!!S.extensions,ee=!!X.attributes.uv1,Y=!!X.attributes.uv2,re=!!X.attributes.uv3;let Me=mr;return S.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(Me=n.toneMapping),{isWebGL2:u,shaderID:k,shaderType:S.type,shaderName:S.name,vertexShader:ce,fragmentShader:ae,defines:S.defines,customVertexShaderID:fe,customFragmentShaderID:ge,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,instancing:Se,instancingColor:Se&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:Ae===null?n.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:Xt,map:Ce,matcap:Ze,envMap:we,envMapMode:we&&$.mapping,envMapCubeUVHeight:U,aoMap:z,lightMap:jt,bumpMap:Ee,normalMap:Pe,displacementMap:d&&Ie,emissiveMap:ft,normalMapObjectSpace:Pe&&S.normalMapType===xE,normalMapTangentSpace:Pe&&S.normalMapType===zh,metalnessMap:ke,roughnessMap:Ue,anisotropy:qe,anisotropyMap:H,clearcoat:Mt,clearcoatMap:ne,clearcoatNormalMap:J,clearcoatRoughnessMap:ie,iridescence:It,iridescenceMap:ve,iridescenceThicknessMap:oe,sheen:b,sheenColorMap:de,sheenRoughnessMap:C,specularMap:se,specularColorMap:Z,specularIntensityMap:Re,transmission:T,transmissionMap:ye,thicknessMap:Te,gradientMap:_e,opaque:S.transparent===!1&&S.blending===$s,alphaMap:pe,alphaTest:We,alphaHash:I,combine:S.combine,mapUv:Ce&&y(S.map.channel),aoMapUv:z&&y(S.aoMap.channel),lightMapUv:jt&&y(S.lightMap.channel),bumpMapUv:Ee&&y(S.bumpMap.channel),normalMapUv:Pe&&y(S.normalMap.channel),displacementMapUv:Ie&&y(S.displacementMap.channel),emissiveMapUv:ft&&y(S.emissiveMap.channel),metalnessMapUv:ke&&y(S.metalnessMap.channel),roughnessMapUv:Ue&&y(S.roughnessMap.channel),anisotropyMapUv:H&&y(S.anisotropyMap.channel),clearcoatMapUv:ne&&y(S.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(S.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&y(S.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&y(S.iridescenceThicknessMap.channel),sheenColorMapUv:de&&y(S.sheenColorMap.channel),sheenRoughnessMapUv:C&&y(S.sheenRoughnessMap.channel),specularMapUv:se&&y(S.specularMap.channel),specularColorMapUv:Z&&y(S.specularColorMap.channel),specularIntensityMapUv:Re&&y(S.specularIntensityMap.channel),transmissionMapUv:ye&&y(S.transmissionMap.channel),thicknessMapUv:Te&&y(S.thicknessMap.channel),alphaMapUv:pe&&y(S.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Pe||qe),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:ee,vertexUv2s:Y,vertexUv3s:re,pointsUvs:Q.isPoints===!0&&!!X.attributes.uv&&(Ce||pe),fog:!!D,useFog:S.fog===!0,fogExp2:D&&D.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:L,morphTextureStride:B,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:Me,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ce&&S.map.isVideoTexture===!0&&et.getTransfer(S.map.colorSpace)===ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===ui,flipSided:S.side===_n,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function h(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const W in S.defines)R.push(W),R.push(S.defines[W]);return S.isRawShaderMaterial===!1&&(v(R,S),g(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function v(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function g(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.matcap&&a.enable(4),R.envMap&&a.enable(5),R.normalMapObjectSpace&&a.enable(6),R.normalMapTangentSpace&&a.enable(7),R.clearcoat&&a.enable(8),R.iridescence&&a.enable(9),R.alphaTest&&a.enable(10),R.vertexColors&&a.enable(11),R.vertexAlphas&&a.enable(12),R.vertexUv1s&&a.enable(13),R.vertexUv2s&&a.enable(14),R.vertexUv3s&&a.enable(15),R.vertexTangents&&a.enable(16),R.anisotropy&&a.enable(17),R.alphaHash&&a.enable(18),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function x(S){const R=_[S.type];let W;if(R){const K=ai[R];W=oT.clone(K.uniforms)}else W=S.uniforms;return W}function E(S,R){let W;for(let K=0,Q=c.length;K<Q;K++){const D=c[K];if(D.cacheKey===R){W=D,++W.usedTimes;break}}return W===void 0&&(W=new _R(n,R,S,s),c.push(W)),W}function w(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function M(S){l.remove(S)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:h,getUniforms:x,acquireProgram:E,releaseProgram:w,releaseShaderCache:M,programs:c,dispose:P}}function MR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function ER(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Hg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Vg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,_,y,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:_,renderOrder:f.renderOrder,z:y,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=_,h.renderOrder=f.renderOrder,h.z=y,h.group=m),e++,h}function a(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,_,y,m){const h=o(f,d,p,_,y,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function c(f,d){t.length>1&&t.sort(f||ER),i.length>1&&i.sort(d||Hg),r.length>1&&r.sort(d||Hg)}function u(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function TR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Vg,n.set(i,[o])):r>=s.length?(o=new Vg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function wR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new N,color:new Le};break;case"SpotLight":t={position:new N,direction:new N,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new N,halfWidth:new N,halfHeight:new N};break}return n[e.id]=t,t}}}function AR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let RR=0;function bR(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function CR(n,e){const t=new wR,i=AR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new N);const s=new N,o=new Fe,a=new Fe;function l(u,f){let d=0,p=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let y=0,m=0,h=0,v=0,g=0,x=0,E=0,w=0,M=0,P=0,S=0;u.sort(bR);const R=f===!0?Math.PI:1;for(let K=0,Q=u.length;K<Q;K++){const D=u[K],X=D.color,q=D.intensity,$=D.distance,U=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)d+=X.r*q*R,p+=X.g*q*R,_+=X.b*q*R;else if(D.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(D.sh.coefficients[k],q);S++}else if(D.isDirectionalLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*R),D.castShadow){const F=D.shadow,L=i.get(D);L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,r.directionalShadow[y]=L,r.directionalShadowMap[y]=U,r.directionalShadowMatrix[y]=D.shadow.matrix,x++}r.directional[y]=k,y++}else if(D.isSpotLight){const k=t.get(D);k.position.setFromMatrixPosition(D.matrixWorld),k.color.copy(X).multiplyScalar(q*R),k.distance=$,k.coneCos=Math.cos(D.angle),k.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),k.decay=D.decay,r.spot[h]=k;const F=D.shadow;if(D.map&&(r.spotLightMap[M]=D.map,M++,F.updateMatrices(D),D.castShadow&&P++),r.spotLightMatrix[h]=F.matrix,D.castShadow){const L=i.get(D);L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,r.spotShadow[h]=L,r.spotShadowMap[h]=U,w++}h++}else if(D.isRectAreaLight){const k=t.get(D);k.color.copy(X).multiplyScalar(q),k.halfWidth.set(D.width*.5,0,0),k.halfHeight.set(0,D.height*.5,0),r.rectArea[v]=k,v++}else if(D.isPointLight){const k=t.get(D);if(k.color.copy(D.color).multiplyScalar(D.intensity*R),k.distance=D.distance,k.decay=D.decay,D.castShadow){const F=D.shadow,L=i.get(D);L.shadowBias=F.bias,L.shadowNormalBias=F.normalBias,L.shadowRadius=F.radius,L.shadowMapSize=F.mapSize,L.shadowCameraNear=F.camera.near,L.shadowCameraFar=F.camera.far,r.pointShadow[m]=L,r.pointShadowMap[m]=U,r.pointShadowMatrix[m]=D.shadow.matrix,E++}r.point[m]=k,m++}else if(D.isHemisphereLight){const k=t.get(D);k.skyColor.copy(D.color).multiplyScalar(q*R),k.groundColor.copy(D.groundColor).multiplyScalar(q*R),r.hemi[g]=k,g++}}v>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_FLOAT_1,r.rectAreaLTC2=ue.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ue.LTC_HALF_1,r.rectAreaLTC2=ue.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=_;const W=r.hash;(W.directionalLength!==y||W.pointLength!==m||W.spotLength!==h||W.rectAreaLength!==v||W.hemiLength!==g||W.numDirectionalShadows!==x||W.numPointShadows!==E||W.numSpotShadows!==w||W.numSpotMaps!==M||W.numLightProbes!==S)&&(r.directional.length=y,r.spot.length=h,r.rectArea.length=v,r.point.length=m,r.hemi.length=g,r.directionalShadow.length=x,r.directionalShadowMap.length=x,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=x,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=w+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=S,W.directionalLength=y,W.pointLength=m,W.spotLength=h,W.rectAreaLength=v,W.hemiLength=g,W.numDirectionalShadows=x,W.numPointShadows=E,W.numSpotShadows=w,W.numSpotMaps=M,W.numLightProbes=S,r.version=RR++)}function c(u,f){let d=0,p=0,_=0,y=0,m=0;const h=f.matrixWorldInverse;for(let v=0,g=u.length;v<g;v++){const x=u[v];if(x.isDirectionalLight){const E=r.directional[d];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),d++}else if(x.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(h),_++}else if(x.isRectAreaLight){const E=r.rectArea[y];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),a.identity(),o.copy(x.matrixWorld),o.premultiply(h),a.extractRotation(o),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),y++}else if(x.isPointLight){const E=r.point[p];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(h),p++}else if(x.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(h),m++}}}return{setup:l,setupView:c,state:r}}function Gg(n,e){const t=new CR(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function LR(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Gg(n,e),t.set(s,[l])):o>=a.length?(l=new Gg(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class PR extends Jn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class IR extends Jn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const NR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function UR(n,e,t){let i=new Wh;const r=new Ne,s=new Ne,o=new rt,a=new PR({depthPacking:yE}),l=new IR,c={},u=t.maxTextureSize,f={[Fi]:_n,[_n]:Fi,[ui]:ui},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:NR,fragmentShader:DR}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ii;_.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new on(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jv;let h=this.type;this.render=function(E,w,M){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const P=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),W=n.state;W.setBlending(pr),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const K=h!==Ti&&this.type===Ti,Q=h===Ti&&this.type!==Ti;for(let D=0,X=E.length;D<X;D++){const q=E[D],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const U=$.getFrameExtents();if(r.multiply(U),s.copy($.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/U.x),r.x=s.x*U.x,$.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/U.y),r.y=s.y*U.y,$.mapSize.y=s.y)),$.map===null||K===!0||Q===!0){const F=this.type!==Ti?{minFilter:Ft,magFilter:Ft}:{};$.map!==null&&$.map.dispose(),$.map=new es(r.x,r.y,F),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const k=$.getViewportCount();for(let F=0;F<k;F++){const L=$.getViewport(F);o.set(s.x*L.x,s.y*L.y,s.x*L.z,s.y*L.w),W.viewport(o),$.updateMatrices(q,F),i=$.getFrustum(),x(w,M,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===Ti&&v($,M),$.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(P,S,R)};function v(E,w){const M=e.update(y);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,p.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new es(r.x,r.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,M,d,y,null),p.uniforms.shadow_pass.value=E.mapPass.texture,p.uniforms.resolution.value=E.mapSize,p.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,M,p,y,null)}function g(E,w,M,P){let S=null;const R=M.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(R!==void 0)S=R;else if(S=M.isPointLight===!0?l:a,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=S.uuid,K=w.uuid;let Q=c[W];Q===void 0&&(Q={},c[W]=Q);let D=Q[K];D===void 0&&(D=S.clone(),Q[K]=D),S=D}if(S.visible=w.visible,S.wireframe=w.wireframe,P===Ti?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,M.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=n.properties.get(S);W.light=M}return S}function x(E,w,M,P,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Ti)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(M.matrixWorldInverse,E.matrixWorld);const K=e.update(E),Q=E.material;if(Array.isArray(Q)){const D=K.groups;for(let X=0,q=D.length;X<q;X++){const $=D[X],U=Q[$.materialIndex];if(U&&U.visible){const k=g(E,U,P,S);n.renderBufferDirect(M,null,K,k,E,$)}}}else if(Q.visible){const D=g(E,Q,P,S);n.renderBufferDirect(M,null,K,D,E,null)}}const W=E.children;for(let K=0,Q=W.length;K<Q;K++)x(W[K],w,M,P,S)}}function OR(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const le=new rt;let ee=null;const Y=new rt(0,0,0,0);return{setMask:function(re){ee!==re&&!I&&(n.colorMask(re,re,re,re),ee=re)},setLocked:function(re){I=re},setClear:function(re,Me,Xe,Et,Ln){Ln===!0&&(re*=Et,Me*=Et,Xe*=Et),le.set(re,Me,Xe,Et),Y.equals(le)===!1&&(n.clearColor(re,Me,Xe,Et),Y.copy(le))},reset:function(){I=!1,ee=null,Y.set(-1,0,0,0)}}}function s(){let I=!1,le=null,ee=null,Y=null;return{setTest:function(re){re?Ce(n.DEPTH_TEST):Ze(n.DEPTH_TEST)},setMask:function(re){le!==re&&!I&&(n.depthMask(re),le=re)},setFunc:function(re){if(ee!==re){switch(re){case jM:n.depthFunc(n.NEVER);break;case $M:n.depthFunc(n.ALWAYS);break;case YM:n.depthFunc(n.LESS);break;case Rc:n.depthFunc(n.LEQUAL);break;case qM:n.depthFunc(n.EQUAL);break;case KM:n.depthFunc(n.GEQUAL);break;case ZM:n.depthFunc(n.GREATER);break;case QM:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ee=re}},setLocked:function(re){I=re},setClear:function(re){Y!==re&&(n.clearDepth(re),Y=re)},reset:function(){I=!1,le=null,ee=null,Y=null}}}function o(){let I=!1,le=null,ee=null,Y=null,re=null,Me=null,Xe=null,Et=null,Ln=null;return{setTest:function(st){I||(st?Ce(n.STENCIL_TEST):Ze(n.STENCIL_TEST))},setMask:function(st){le!==st&&!I&&(n.stencilMask(st),le=st)},setFunc:function(st,Jt,ri){(ee!==st||Y!==Jt||re!==ri)&&(n.stencilFunc(st,Jt,ri),ee=st,Y=Jt,re=ri)},setOp:function(st,Jt,ri){(Me!==st||Xe!==Jt||Et!==ri)&&(n.stencilOp(st,Jt,ri),Me=st,Xe=Jt,Et=ri)},setLocked:function(st){I=st},setClear:function(st){Ln!==st&&(n.clearStencil(st),Ln=st)},reset:function(){I=!1,le=null,ee=null,Y=null,re=null,Me=null,Xe=null,Et=null,Ln=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,E=null,w=null,M=null,P=null,S=new Le(0,0,0),R=0,W=!1,K=null,Q=null,D=null,X=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,k=0;const F=n.getParameter(n.VERSION);F.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(F)[1]),U=k>=1):F.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),U=k>=2);let L=null,B={};const ce=n.getParameter(n.SCISSOR_BOX),ae=n.getParameter(n.VIEWPORT),fe=new rt().fromArray(ce),ge=new rt().fromArray(ae);function Ae(I,le,ee,Y){const re=new Uint8Array(4),Me=n.createTexture();n.bindTexture(I,Me),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xe=0;Xe<ee;Xe++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(le,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(le+Xe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Me}const Se={};Se[n.TEXTURE_2D]=Ae(n.TEXTURE_2D,n.TEXTURE_2D,1),Se[n.TEXTURE_CUBE_MAP]=Ae(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Se[n.TEXTURE_2D_ARRAY]=Ae(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Se[n.TEXTURE_3D]=Ae(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(n.DEPTH_TEST),l.setFunc(Rc),ke(!1),Ue(Mm),Ce(n.CULL_FACE),Ie(pr);function Ce(I){d[I]!==!0&&(n.enable(I),d[I]=!0)}function Ze(I){d[I]!==!1&&(n.disable(I),d[I]=!1)}function we(I,le){return p[I]!==le?(n.bindFramebuffer(I,le),p[I]=le,i&&(I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=le),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=le)),!0):!1}function z(I,le){let ee=y,Y=!1;if(I)if(ee=_.get(le),ee===void 0&&(ee=[],_.set(le,ee)),I.isWebGLMultipleRenderTargets){const re=I.texture;if(ee.length!==re.length||ee[0]!==n.COLOR_ATTACHMENT0){for(let Me=0,Xe=re.length;Me<Xe;Me++)ee[Me]=n.COLOR_ATTACHMENT0+Me;ee.length=re.length,Y=!0}}else ee[0]!==n.COLOR_ATTACHMENT0&&(ee[0]=n.COLOR_ATTACHMENT0,Y=!0);else ee[0]!==n.BACK&&(ee[0]=n.BACK,Y=!0);Y&&(t.isWebGL2?n.drawBuffers(ee):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee))}function jt(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const Ee={[Dr]:n.FUNC_ADD,[PM]:n.FUNC_SUBTRACT,[IM]:n.FUNC_REVERSE_SUBTRACT};if(i)Ee[Am]=n.MIN,Ee[Rm]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(Ee[Am]=I.MIN_EXT,Ee[Rm]=I.MAX_EXT)}const Pe={[NM]:n.ZERO,[DM]:n.ONE,[UM]:n.SRC_COLOR,[xd]:n.SRC_ALPHA,[HM]:n.SRC_ALPHA_SATURATE,[BM]:n.DST_COLOR,[FM]:n.DST_ALPHA,[OM]:n.ONE_MINUS_SRC_COLOR,[Sd]:n.ONE_MINUS_SRC_ALPHA,[zM]:n.ONE_MINUS_DST_COLOR,[kM]:n.ONE_MINUS_DST_ALPHA,[VM]:n.CONSTANT_COLOR,[GM]:n.ONE_MINUS_CONSTANT_COLOR,[WM]:n.CONSTANT_ALPHA,[XM]:n.ONE_MINUS_CONSTANT_ALPHA};function Ie(I,le,ee,Y,re,Me,Xe,Et,Ln,st){if(I===pr){h===!0&&(Ze(n.BLEND),h=!1);return}if(h===!1&&(Ce(n.BLEND),h=!0),I!==LM){if(I!==v||st!==W){if((g!==Dr||w!==Dr)&&(n.blendEquation(n.FUNC_ADD),g=Dr,w=Dr),st)switch(I){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Em:n.blendFunc(n.ONE,n.ONE);break;case Tm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Em:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Tm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case wm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}x=null,E=null,M=null,P=null,S.set(0,0,0),R=0,v=I,W=st}return}re=re||le,Me=Me||ee,Xe=Xe||Y,(le!==g||re!==w)&&(n.blendEquationSeparate(Ee[le],Ee[re]),g=le,w=re),(ee!==x||Y!==E||Me!==M||Xe!==P)&&(n.blendFuncSeparate(Pe[ee],Pe[Y],Pe[Me],Pe[Xe]),x=ee,E=Y,M=Me,P=Xe),(Et.equals(S)===!1||Ln!==R)&&(n.blendColor(Et.r,Et.g,Et.b,Ln),S.copy(Et),R=Ln),v=I,W=!1}function ft(I,le){I.side===ui?Ze(n.CULL_FACE):Ce(n.CULL_FACE);let ee=I.side===_n;le&&(ee=!ee),ke(ee),I.blending===$s&&I.transparent===!1?Ie(pr):Ie(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const Y=I.stencilWrite;c.setTest(Y),Y&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Mt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ce(n.SAMPLE_ALPHA_TO_COVERAGE):Ze(n.SAMPLE_ALPHA_TO_COVERAGE)}function ke(I){K!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),K=I)}function Ue(I){I!==RM?(Ce(n.CULL_FACE),I!==Q&&(I===Mm?n.cullFace(n.BACK):I===bM?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ze(n.CULL_FACE),Q=I}function qe(I){I!==D&&(U&&n.lineWidth(I),D=I)}function Mt(I,le,ee){I?(Ce(n.POLYGON_OFFSET_FILL),(X!==le||q!==ee)&&(n.polygonOffset(le,ee),X=le,q=ee)):Ze(n.POLYGON_OFFSET_FILL)}function It(I){I?Ce(n.SCISSOR_TEST):Ze(n.SCISSOR_TEST)}function b(I){I===void 0&&(I=n.TEXTURE0+$-1),L!==I&&(n.activeTexture(I),L=I)}function T(I,le,ee){ee===void 0&&(L===null?ee=n.TEXTURE0+$-1:ee=L);let Y=B[ee];Y===void 0&&(Y={type:void 0,texture:void 0},B[ee]=Y),(Y.type!==I||Y.texture!==le)&&(L!==ee&&(n.activeTexture(ee),L=ee),n.bindTexture(I,le||Se[I]),Y.type=I,Y.texture=le)}function H(){const I=B[L];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ve(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Re(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(I){fe.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),fe.copy(I))}function Te(I){ge.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),ge.copy(I))}function _e(I,le){let ee=f.get(le);ee===void 0&&(ee=new WeakMap,f.set(le,ee));let Y=ee.get(I);Y===void 0&&(Y=n.getUniformBlockIndex(le,I.name),ee.set(I,Y))}function pe(I,le){const Y=f.get(le).get(I);u.get(le)!==Y&&(n.uniformBlockBinding(le,Y,I.__bindingPointIndex),u.set(le,Y))}function We(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},L=null,B={},p={},_=new WeakMap,y=[],m=null,h=!1,v=null,g=null,x=null,E=null,w=null,M=null,P=null,S=new Le(0,0,0),R=0,W=!1,K=null,Q=null,D=null,X=null,q=null,fe.set(0,0,n.canvas.width,n.canvas.height),ge.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Ce,disable:Ze,bindFramebuffer:we,drawBuffers:z,useProgram:jt,setBlending:Ie,setMaterial:ft,setFlipSided:ke,setCullFace:Ue,setLineWidth:qe,setPolygonOffset:Mt,setScissorTest:It,activeTexture:b,bindTexture:T,unbindTexture:H,compressedTexImage2D:ne,compressedTexImage3D:J,texImage2D:Z,texImage3D:Re,updateUBOMapping:_e,uniformBlockBinding:pe,texStorage2D:C,texStorage3D:se,texSubImage2D:ie,texSubImage3D:ve,compressedTexSubImage2D:oe,compressedTexSubImage3D:de,scissor:ye,viewport:Te,reset:We}}function FR(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const m=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(b,T){return h?new OffscreenCanvas(b,T):Ia("canvas")}function g(b,T,H,ne){let J=1;if((b.width>ne||b.height>ne)&&(J=ne/Math.max(b.width,b.height)),J<1||T===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const ie=T?Nc:Math.floor,ve=ie(J*b.width),oe=ie(J*b.height);y===void 0&&(y=v(ve,oe));const de=H?v(ve,oe):y;return de.width=ve,de.height=oe,de.getContext("2d").drawImage(b,0,0,ve,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+ve+"x"+oe+")."),de}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function x(b){return bd(b.width)&&bd(b.height)}function E(b){return a?!1:b.wrapS!==Un||b.wrapT!==Un||b.minFilter!==Ft&&b.minFilter!==fn}function w(b,T){return b.generateMipmaps&&T&&b.minFilter!==Ft&&b.minFilter!==fn}function M(b){n.generateMipmap(b)}function P(b,T,H,ne,J=!1){if(a===!1)return T;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ie=T;if(T===n.RED&&(H===n.FLOAT&&(ie=n.R32F),H===n.HALF_FLOAT&&(ie=n.R16F),H===n.UNSIGNED_BYTE&&(ie=n.R8)),T===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(ie=n.R8UI),H===n.UNSIGNED_SHORT&&(ie=n.R16UI),H===n.UNSIGNED_INT&&(ie=n.R32UI),H===n.BYTE&&(ie=n.R8I),H===n.SHORT&&(ie=n.R16I),H===n.INT&&(ie=n.R32I)),T===n.RG&&(H===n.FLOAT&&(ie=n.RG32F),H===n.HALF_FLOAT&&(ie=n.RG16F),H===n.UNSIGNED_BYTE&&(ie=n.RG8)),T===n.RGBA){const ve=J?Cc:et.getTransfer(ne);H===n.FLOAT&&(ie=n.RGBA32F),H===n.HALF_FLOAT&&(ie=n.RGBA16F),H===n.UNSIGNED_BYTE&&(ie=ve===ct?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(ie=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(ie=n.RGB5_A1)}return(ie===n.R16F||ie===n.R32F||ie===n.RG16F||ie===n.RG32F||ie===n.RGBA16F||ie===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function S(b,T,H){return w(b,H)===!0||b.isFramebufferTexture&&b.minFilter!==Ft&&b.minFilter!==fn?Math.log2(Math.max(T.width,T.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?T.mipmaps.length:1}function R(b){return b===Ft||b===Td||b===Kl?n.NEAREST:n.LINEAR}function W(b){const T=b.target;T.removeEventListener("dispose",W),Q(T),T.isVideoTexture&&_.delete(T)}function K(b){const T=b.target;T.removeEventListener("dispose",K),X(T)}function Q(b){const T=i.get(b);if(T.__webglInit===void 0)return;const H=b.source,ne=m.get(H);if(ne){const J=ne[T.__cacheKey];J.usedTimes--,J.usedTimes===0&&D(b),Object.keys(ne).length===0&&m.delete(H)}i.remove(b)}function D(b){const T=i.get(b);n.deleteTexture(T.__webglTexture);const H=b.source,ne=m.get(H);delete ne[T.__cacheKey],o.memory.textures--}function X(b){const T=b.texture,H=i.get(b),ne=i.get(T);if(ne.__webglTexture!==void 0&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(H.__webglFramebuffer[J]))for(let ie=0;ie<H.__webglFramebuffer[J].length;ie++)n.deleteFramebuffer(H.__webglFramebuffer[J][ie]);else n.deleteFramebuffer(H.__webglFramebuffer[J]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[J])}else{if(Array.isArray(H.__webglFramebuffer))for(let J=0;J<H.__webglFramebuffer.length;J++)n.deleteFramebuffer(H.__webglFramebuffer[J]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let J=0;J<H.__webglColorRenderbuffer.length;J++)H.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[J]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let J=0,ie=T.length;J<ie;J++){const ve=i.get(T[J]);ve.__webglTexture&&(n.deleteTexture(ve.__webglTexture),o.memory.textures--),i.remove(T[J])}i.remove(T),i.remove(b)}let q=0;function $(){q=0}function U(){const b=q;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),q+=1,b}function k(b){const T=[];return T.push(b.wrapS),T.push(b.wrapT),T.push(b.wrapR||0),T.push(b.magFilter),T.push(b.minFilter),T.push(b.anisotropy),T.push(b.internalFormat),T.push(b.format),T.push(b.type),T.push(b.generateMipmaps),T.push(b.premultiplyAlpha),T.push(b.flipY),T.push(b.unpackAlignment),T.push(b.colorSpace),T.join()}function F(b,T){const H=i.get(b);if(b.isVideoTexture&&Mt(b),b.isRenderTargetTexture===!1&&b.version>0&&H.__version!==b.version){const ne=b.image;if(ne===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(H,b,T);return}}t.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+T)}function L(b,T){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ce(H,b,T);return}t.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+T)}function B(b,T){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ce(H,b,T);return}t.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+T)}function ce(b,T){const H=i.get(b);if(b.version>0&&H.__version!==b.version){Ze(H,b,T);return}t.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+T)}const ae={[oo]:n.REPEAT,[Un]:n.CLAMP_TO_EDGE,[bc]:n.MIRRORED_REPEAT},fe={[Ft]:n.NEAREST,[Td]:n.NEAREST_MIPMAP_NEAREST,[Kl]:n.NEAREST_MIPMAP_LINEAR,[fn]:n.LINEAR,[Yv]:n.LINEAR_MIPMAP_NEAREST,[Jr]:n.LINEAR_MIPMAP_LINEAR},ge={[SE]:n.NEVER,[bE]:n.ALWAYS,[ME]:n.LESS,[TE]:n.LEQUAL,[EE]:n.EQUAL,[RE]:n.GEQUAL,[wE]:n.GREATER,[AE]:n.NOTEQUAL};function Ae(b,T,H){if(H?(n.texParameteri(b,n.TEXTURE_WRAP_S,ae[T.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ae[T.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ae[T.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,fe[T.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,fe[T.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(T.wrapS!==Un||T.wrapT!==Un)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,R(T.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,R(T.minFilter)),T.minFilter!==Ft&&T.minFilter!==fn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ge[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ne=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Ft||T.minFilter!==Kl&&T.minFilter!==Jr||T.type===di&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===La&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||i.get(T).__currentAnisotropy)&&(n.texParameterf(b,ne.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy)}}function Se(b,T){let H=!1;b.__webglInit===void 0&&(b.__webglInit=!0,T.addEventListener("dispose",W));const ne=T.source;let J=m.get(ne);J===void 0&&(J={},m.set(ne,J));const ie=k(T);if(ie!==b.__cacheKey){J[ie]===void 0&&(J[ie]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),J[ie].usedTimes++;const ve=J[b.__cacheKey];ve!==void 0&&(J[b.__cacheKey].usedTimes--,ve.usedTimes===0&&D(T)),b.__cacheKey=ie,b.__webglTexture=J[ie].texture}return H}function Ce(b,T,H){let ne=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ne=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ne=n.TEXTURE_3D);const J=Se(b,T),ie=T.source;t.bindTexture(ne,b.__webglTexture,n.TEXTURE0+H);const ve=i.get(ie);if(ie.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+H);const oe=et.getPrimaries(et.workingColorSpace),de=T.colorSpace===On?null:et.getPrimaries(T.colorSpace),C=T.colorSpace===On||oe===de?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const se=E(T)&&x(T.image)===!1;let Z=g(T.image,se,!1,u);Z=It(T,Z);const Re=x(Z)||a,ye=s.convert(T.format,T.colorSpace);let Te=s.convert(T.type),_e=P(T.internalFormat,ye,Te,T.colorSpace,T.isVideoTexture);Ae(ne,T,Re);let pe;const We=T.mipmaps,I=a&&T.isVideoTexture!==!0,le=ve.__version===void 0||J===!0,ee=S(T,Z,Re);if(T.isDepthTexture)_e=n.DEPTH_COMPONENT,a?T.type===di?_e=n.DEPTH_COMPONENT32F:T.type===ir?_e=n.DEPTH_COMPONENT24:T.type===Gr?_e=n.DEPTH24_STENCIL8:_e=n.DEPTH_COMPONENT16:T.type===di&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===Wr&&_e===n.DEPTH_COMPONENT&&T.type!==Bh&&T.type!==ir&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=ir,Te=s.convert(T.type)),T.format===ao&&_e===n.DEPTH_COMPONENT&&(_e=n.DEPTH_STENCIL,T.type!==Gr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Gr,Te=s.convert(T.type))),le&&(I?t.texStorage2D(n.TEXTURE_2D,1,_e,Z.width,Z.height):t.texImage2D(n.TEXTURE_2D,0,_e,Z.width,Z.height,0,ye,Te,null));else if(T.isDataTexture)if(We.length>0&&Re){I&&le&&t.texStorage2D(n.TEXTURE_2D,ee,_e,We[0].width,We[0].height);for(let Y=0,re=We.length;Y<re;Y++)pe=We[Y],I?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,pe.width,pe.height,ye,Te,pe.data):t.texImage2D(n.TEXTURE_2D,Y,_e,pe.width,pe.height,0,ye,Te,pe.data);T.generateMipmaps=!1}else I?(le&&t.texStorage2D(n.TEXTURE_2D,ee,_e,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,ye,Te,Z.data)):t.texImage2D(n.TEXTURE_2D,0,_e,Z.width,Z.height,0,ye,Te,Z.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){I&&le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,_e,We[0].width,We[0].height,Z.depth);for(let Y=0,re=We.length;Y<re;Y++)pe=We[Y],T.format!==Tn?ye!==null?I?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,Z.depth,ye,pe.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,_e,pe.width,pe.height,Z.depth,0,pe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,pe.width,pe.height,Z.depth,ye,Te,pe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,_e,pe.width,pe.height,Z.depth,0,ye,Te,pe.data)}else{I&&le&&t.texStorage2D(n.TEXTURE_2D,ee,_e,We[0].width,We[0].height);for(let Y=0,re=We.length;Y<re;Y++)pe=We[Y],T.format!==Tn?ye!==null?I?t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,pe.width,pe.height,ye,pe.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,_e,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,pe.width,pe.height,ye,Te,pe.data):t.texImage2D(n.TEXTURE_2D,Y,_e,pe.width,pe.height,0,ye,Te,pe.data)}else if(T.isDataArrayTexture)I?(le&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ee,_e,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ye,Te,Z.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,_e,Z.width,Z.height,Z.depth,0,ye,Te,Z.data);else if(T.isData3DTexture)I?(le&&t.texStorage3D(n.TEXTURE_3D,ee,_e,Z.width,Z.height,Z.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ye,Te,Z.data)):t.texImage3D(n.TEXTURE_3D,0,_e,Z.width,Z.height,Z.depth,0,ye,Te,Z.data);else if(T.isFramebufferTexture){if(le)if(I)t.texStorage2D(n.TEXTURE_2D,ee,_e,Z.width,Z.height);else{let Y=Z.width,re=Z.height;for(let Me=0;Me<ee;Me++)t.texImage2D(n.TEXTURE_2D,Me,_e,Y,re,0,ye,Te,null),Y>>=1,re>>=1}}else if(We.length>0&&Re){I&&le&&t.texStorage2D(n.TEXTURE_2D,ee,_e,We[0].width,We[0].height);for(let Y=0,re=We.length;Y<re;Y++)pe=We[Y],I?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,ye,Te,pe):t.texImage2D(n.TEXTURE_2D,Y,_e,ye,Te,pe);T.generateMipmaps=!1}else I?(le&&t.texStorage2D(n.TEXTURE_2D,ee,_e,Z.width,Z.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,ye,Te,Z)):t.texImage2D(n.TEXTURE_2D,0,_e,ye,Te,Z);w(T,Re)&&M(ne),ve.__version=ie.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function Ze(b,T,H){if(T.image.length!==6)return;const ne=Se(b,T),J=T.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+H);const ie=i.get(J);if(J.version!==ie.__version||ne===!0){t.activeTexture(n.TEXTURE0+H);const ve=et.getPrimaries(et.workingColorSpace),oe=T.colorSpace===On?null:et.getPrimaries(T.colorSpace),de=T.colorSpace===On||ve===oe?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const C=T.isCompressedTexture||T.image[0].isCompressedTexture,se=T.image[0]&&T.image[0].isDataTexture,Z=[];for(let Y=0;Y<6;Y++)!C&&!se?Z[Y]=g(T.image[Y],!1,!0,c):Z[Y]=se?T.image[Y].image:T.image[Y],Z[Y]=It(T,Z[Y]);const Re=Z[0],ye=x(Re)||a,Te=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),pe=P(T.internalFormat,Te,_e,T.colorSpace),We=a&&T.isVideoTexture!==!0,I=ie.__version===void 0||ne===!0;let le=S(T,Re,ye);Ae(n.TEXTURE_CUBE_MAP,T,ye);let ee;if(C){We&&I&&t.texStorage2D(n.TEXTURE_CUBE_MAP,le,pe,Re.width,Re.height);for(let Y=0;Y<6;Y++){ee=Z[Y].mipmaps;for(let re=0;re<ee.length;re++){const Me=ee[re];T.format!==Tn?Te!==null?We?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re,0,0,Me.width,Me.height,Te,Me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re,pe,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re,0,0,Me.width,Me.height,Te,_e,Me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re,pe,Me.width,Me.height,0,Te,_e,Me.data)}}}else{ee=T.mipmaps,We&&I&&(ee.length>0&&le++,t.texStorage2D(n.TEXTURE_CUBE_MAP,le,pe,Z[0].width,Z[0].height));for(let Y=0;Y<6;Y++)if(se){We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Z[Y].width,Z[Y].height,Te,_e,Z[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,pe,Z[Y].width,Z[Y].height,0,Te,_e,Z[Y].data);for(let re=0;re<ee.length;re++){const Xe=ee[re].image[Y].image;We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re+1,0,0,Xe.width,Xe.height,Te,_e,Xe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re+1,pe,Xe.width,Xe.height,0,Te,_e,Xe.data)}}else{We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,_e,Z[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,pe,Te,_e,Z[Y]);for(let re=0;re<ee.length;re++){const Me=ee[re];We?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re+1,0,0,Te,_e,Me.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,re+1,pe,Te,_e,Me.image[Y])}}}w(T,ye)&&M(n.TEXTURE_CUBE_MAP),ie.__version=J.version,T.onUpdate&&T.onUpdate(T)}b.__version=T.version}function we(b,T,H,ne,J,ie){const ve=s.convert(H.format,H.colorSpace),oe=s.convert(H.type),de=P(H.internalFormat,ve,oe,H.colorSpace);if(!i.get(T).__hasExternalTextures){const se=Math.max(1,T.width>>ie),Z=Math.max(1,T.height>>ie);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,ie,de,se,Z,T.depth,0,ve,oe,null):t.texImage2D(J,ie,de,se,Z,0,ve,oe,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),qe(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ne,J,i.get(H).__webglTexture,0,Ue(T)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ne,J,i.get(H).__webglTexture,ie),t.bindFramebuffer(n.FRAMEBUFFER,null)}function z(b,T,H){if(n.bindRenderbuffer(n.RENDERBUFFER,b),T.depthBuffer&&!T.stencilBuffer){let ne=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||qe(T)){const J=T.depthTexture;J&&J.isDepthTexture&&(J.type===di?ne=n.DEPTH_COMPONENT32F:J.type===ir&&(ne=n.DEPTH_COMPONENT24));const ie=Ue(T);qe(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ie,ne,T.width,T.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ie,ne,T.width,T.height)}else n.renderbufferStorage(n.RENDERBUFFER,ne,T.width,T.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(T.depthBuffer&&T.stencilBuffer){const ne=Ue(T);H&&qe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):qe(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,n.DEPTH24_STENCIL8,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ne=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let J=0;J<ne.length;J++){const ie=ne[J],ve=s.convert(ie.format,ie.colorSpace),oe=s.convert(ie.type),de=P(ie.internalFormat,ve,oe,ie.colorSpace),C=Ue(T);H&&qe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,de,T.width,T.height):qe(T)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,de,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,de,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function jt(b,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),F(T.depthTexture,0);const ne=i.get(T.depthTexture).__webglTexture,J=Ue(T);if(T.depthTexture.format===Wr)qe(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ne,0);else if(T.depthTexture.format===ao)qe(T)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ne,0);else throw new Error("Unknown depthTexture format")}function Ee(b){const T=i.get(b),H=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!T.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");jt(T.__webglFramebuffer,b)}else if(H){T.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[ne]),T.__webglDepthbuffer[ne]=n.createRenderbuffer(),z(T.__webglDepthbuffer[ne],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=n.createRenderbuffer(),z(T.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Pe(b,T,H){const ne=i.get(b);T!==void 0&&we(ne.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&Ee(b)}function Ie(b){const T=b.texture,H=i.get(b),ne=i.get(T);b.addEventListener("dispose",K),b.isWebGLMultipleRenderTargets!==!0&&(ne.__webglTexture===void 0&&(ne.__webglTexture=n.createTexture()),ne.__version=T.version,o.memory.textures++);const J=b.isWebGLCubeRenderTarget===!0,ie=b.isWebGLMultipleRenderTargets===!0,ve=x(b)||a;if(J){H.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(a&&T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer[oe]=[];for(let de=0;de<T.mipmaps.length;de++)H.__webglFramebuffer[oe][de]=n.createFramebuffer()}else H.__webglFramebuffer[oe]=n.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){H.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)H.__webglFramebuffer[oe]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(ie)if(r.drawBuffers){const oe=b.texture;for(let de=0,C=oe.length;de<C;de++){const se=i.get(oe[de]);se.__webglTexture===void 0&&(se.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&qe(b)===!1){const oe=ie?T:[T];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let de=0;de<oe.length;de++){const C=oe[de];H.__webglColorRenderbuffer[de]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[de]);const se=s.convert(C.format,C.colorSpace),Z=s.convert(C.type),Re=P(C.internalFormat,se,Z,C.colorSpace,b.isXRRenderTarget===!0),ye=Ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,ye,Re,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+de,n.RENDERBUFFER,H.__webglColorRenderbuffer[de])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),z(H.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){t.bindTexture(n.TEXTURE_CUBE_MAP,ne.__webglTexture),Ae(n.TEXTURE_CUBE_MAP,T,ve);for(let oe=0;oe<6;oe++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)we(H.__webglFramebuffer[oe][de],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,de);else we(H.__webglFramebuffer[oe],b,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);w(T,ve)&&M(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){const oe=b.texture;for(let de=0,C=oe.length;de<C;de++){const se=oe[de],Z=i.get(se);t.bindTexture(n.TEXTURE_2D,Z.__webglTexture),Ae(n.TEXTURE_2D,se,ve),we(H.__webglFramebuffer,b,se,n.COLOR_ATTACHMENT0+de,n.TEXTURE_2D,0),w(se,ve)&&M(n.TEXTURE_2D)}t.unbindTexture()}else{let oe=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?oe=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(oe,ne.__webglTexture),Ae(oe,T,ve),a&&T.mipmaps&&T.mipmaps.length>0)for(let de=0;de<T.mipmaps.length;de++)we(H.__webglFramebuffer[de],b,T,n.COLOR_ATTACHMENT0,oe,de);else we(H.__webglFramebuffer,b,T,n.COLOR_ATTACHMENT0,oe,0);w(T,ve)&&M(oe),t.unbindTexture()}b.depthBuffer&&Ee(b)}function ft(b){const T=x(b)||a,H=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ne=0,J=H.length;ne<J;ne++){const ie=H[ne];if(w(ie,T)){const ve=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,oe=i.get(ie).__webglTexture;t.bindTexture(ve,oe),M(ve),t.unbindTexture()}}}function ke(b){if(a&&b.samples>0&&qe(b)===!1){const T=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],H=b.width,ne=b.height;let J=n.COLOR_BUFFER_BIT;const ie=[],ve=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,oe=i.get(b),de=b.isWebGLMultipleRenderTargets===!0;if(de)for(let C=0;C<T.length;C++)t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,oe.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglFramebuffer);for(let C=0;C<T.length;C++){ie.push(n.COLOR_ATTACHMENT0+C),b.depthBuffer&&ie.push(ve);const se=oe.__ignoreDepthValues!==void 0?oe.__ignoreDepthValues:!1;if(se===!1&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),de&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]),se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[ve]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[ve])),de){const Z=i.get(T[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,H,ne,0,0,H,ne,J,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ie)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),de)for(let C=0;C<T.length;C++){t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,oe.__webglColorRenderbuffer[C]);const se=i.get(T[C]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,oe.__webglMultisampledFramebuffer)}}function Ue(b){return Math.min(f,b.samples)}function qe(b){const T=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Mt(b){const T=o.render.frame;_.get(b)!==T&&(_.set(b,T),b.update())}function It(b,T){const H=b.colorSpace,ne=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Rd||H!==Xt&&H!==On&&(et.getTransfer(H)===ct?a===!1?e.has("EXT_sRGB")===!0&&ne===Tn?(b.format=Rd,b.minFilter=fn,b.generateMipmaps=!1):T=sy.sRGBToLinear(T):(ne!==Tn||J!==gr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),T}this.allocateTextureUnit=U,this.resetTextureUnits=$,this.setTexture2D=F,this.setTexture2DArray=L,this.setTexture3D=B,this.setTextureCube=ce,this.rebindTextures=Pe,this.setupRenderTarget=Ie,this.updateRenderTargetMipmap=ft,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=we,this.useMultisampledRTT=qe}function kR(n,e,t){const i=t.isWebGL2;function r(s,o=On){let a;const l=et.getTransfer(o);if(s===gr)return n.UNSIGNED_BYTE;if(s===Kv)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Zv)return n.UNSIGNED_SHORT_5_5_5_1;if(s===aE)return n.BYTE;if(s===lE)return n.SHORT;if(s===Bh)return n.UNSIGNED_SHORT;if(s===qv)return n.INT;if(s===ir)return n.UNSIGNED_INT;if(s===di)return n.FLOAT;if(s===La)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===cE)return n.ALPHA;if(s===Tn)return n.RGBA;if(s===uE)return n.LUMINANCE;if(s===fE)return n.LUMINANCE_ALPHA;if(s===Wr)return n.DEPTH_COMPONENT;if(s===ao)return n.DEPTH_STENCIL;if(s===Rd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===dE)return n.RED;if(s===Qv)return n.RED_INTEGER;if(s===hE)return n.RG;if(s===Jv)return n.RG_INTEGER;if(s===ey)return n.RGBA_INTEGER;if(s===Fu||s===ku||s===Bu||s===zu)if(l===ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Fu)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Fu)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ku)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Bu)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===zu)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Cm||s===Lm||s===Pm||s===Im)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===Cm)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Lm)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Pm)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Im)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===pE)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Nm||s===Dm)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Nm)return l===ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Dm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Um||s===Om||s===Fm||s===km||s===Bm||s===zm||s===Hm||s===Vm||s===Gm||s===Wm||s===Xm||s===jm||s===$m||s===Ym)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Um)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Om)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===km)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Bm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===zm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Hm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Vm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Gm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Wm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Xm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===jm)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===$m)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ym)return l===ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Hu||s===qm||s===Km)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Hu)return l===ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===qm)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Km)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===mE||s===Zm||s===Qm||s===Jm)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===Hu)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Zm)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Qm)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Jm)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Gr?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class BR extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class sr extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const zR={type:"move"};class df{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=t.getJointPose(y,i),h=this._getHandJoint(c,y);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(zR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new sr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class HR extends Vt{constructor(e,t,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:Wr,u!==Wr&&u!==ao)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Wr&&(i=ir),i===void 0&&u===ao&&(i=Gr),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ft,this.minFilter=l!==void 0?l:Ft,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class VR extends ss{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,p=null,_=null;const y=t.getContextAttributes();let m=null,h=null;const v=[],g=[],x=new sn;x.layers.enable(1),x.viewport=new rt;const E=new sn;E.layers.enable(2),E.viewport=new rt;const w=[x,E],M=new BR;M.layers.enable(1),M.layers.enable(2);let P=null,S=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(L){let B=v[L];return B===void 0&&(B=new df,v[L]=B),B.getTargetRaySpace()},this.getControllerGrip=function(L){let B=v[L];return B===void 0&&(B=new df,v[L]=B),B.getGripSpace()},this.getHand=function(L){let B=v[L];return B===void 0&&(B=new df,v[L]=B),B.getHandSpace()};function R(L){const B=g.indexOf(L.inputSource);if(B===-1)return;const ce=v[B];ce!==void 0&&(ce.update(L.inputSource,L.frame,c||o),ce.dispatchEvent({type:L.type,data:L.inputSource}))}function W(){r.removeEventListener("select",R),r.removeEventListener("selectstart",R),r.removeEventListener("selectend",R),r.removeEventListener("squeeze",R),r.removeEventListener("squeezestart",R),r.removeEventListener("squeezeend",R),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let L=0;L<v.length;L++){const B=g[L];B!==null&&(g[L]=null,v[L].disconnect(B))}P=null,S=null,e.setRenderTarget(m),p=null,d=null,f=null,r=null,h=null,F.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(L){s=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(L){a=L,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(L){c=L},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(L){if(r=L,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",R),r.addEventListener("selectstart",R),r.addEventListener("selectend",R),r.addEventListener("squeeze",R),r.addEventListener("squeezestart",R),r.addEventListener("squeezeend",R),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),y.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const B={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,B),r.updateRenderState({baseLayer:p}),h=new es(p.framebufferWidth,p.framebufferHeight,{format:Tn,type:gr,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let B=null,ce=null,ae=null;y.depth&&(ae=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,B=y.stencil?ao:Wr,ce=y.stencil?Gr:ir);const fe={colorFormat:t.RGBA8,depthFormat:ae,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(fe),r.updateRenderState({layers:[d]}),h=new es(d.textureWidth,d.textureHeight,{format:Tn,type:gr,depthTexture:new HR(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,B),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0});const ge=e.properties.get(h);ge.__ignoreDepthValues=d.ignoreDepthValues}h.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),F.setContext(r),F.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function K(L){for(let B=0;B<L.removed.length;B++){const ce=L.removed[B],ae=g.indexOf(ce);ae>=0&&(g[ae]=null,v[ae].disconnect(ce))}for(let B=0;B<L.added.length;B++){const ce=L.added[B];let ae=g.indexOf(ce);if(ae===-1){for(let ge=0;ge<v.length;ge++)if(ge>=g.length){g.push(ce),ae=ge;break}else if(g[ge]===null){g[ge]=ce,ae=ge;break}if(ae===-1)break}const fe=v[ae];fe&&fe.connect(ce)}}const Q=new N,D=new N;function X(L,B,ce){Q.setFromMatrixPosition(B.matrixWorld),D.setFromMatrixPosition(ce.matrixWorld);const ae=Q.distanceTo(D),fe=B.projectionMatrix.elements,ge=ce.projectionMatrix.elements,Ae=fe[14]/(fe[10]-1),Se=fe[14]/(fe[10]+1),Ce=(fe[9]+1)/fe[5],Ze=(fe[9]-1)/fe[5],we=(fe[8]-1)/fe[0],z=(ge[8]+1)/ge[0],jt=Ae*we,Ee=Ae*z,Pe=ae/(-we+z),Ie=Pe*-we;B.matrixWorld.decompose(L.position,L.quaternion,L.scale),L.translateX(Ie),L.translateZ(Pe),L.matrixWorld.compose(L.position,L.quaternion,L.scale),L.matrixWorldInverse.copy(L.matrixWorld).invert();const ft=Ae+Pe,ke=Se+Pe,Ue=jt-Ie,qe=Ee+(ae-Ie),Mt=Ce*Se/ke*ft,It=Ze*Se/ke*ft;L.projectionMatrix.makePerspective(Ue,qe,Mt,It,ft,ke),L.projectionMatrixInverse.copy(L.projectionMatrix).invert()}function q(L,B){B===null?L.matrixWorld.copy(L.matrix):L.matrixWorld.multiplyMatrices(B.matrixWorld,L.matrix),L.matrixWorldInverse.copy(L.matrixWorld).invert()}this.updateCamera=function(L){if(r===null)return;M.near=E.near=x.near=L.near,M.far=E.far=x.far=L.far,(P!==M.near||S!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,S=M.far);const B=L.parent,ce=M.cameras;q(M,B);for(let ae=0;ae<ce.length;ae++)q(ce[ae],B);ce.length===2?X(M,x,E):M.projectionMatrix.copy(x.projectionMatrix),$(L,M,B)};function $(L,B,ce){ce===null?L.matrix.copy(B.matrixWorld):(L.matrix.copy(ce.matrixWorld),L.matrix.invert(),L.matrix.multiply(B.matrixWorld)),L.matrix.decompose(L.position,L.quaternion,L.scale),L.updateMatrixWorld(!0),L.projectionMatrix.copy(B.projectionMatrix),L.projectionMatrixInverse.copy(B.projectionMatrixInverse),L.isPerspectiveCamera&&(L.fov=co*2*Math.atan(1/L.projectionMatrix.elements[5]),L.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(L){l=L,d!==null&&(d.fixedFoveation=L),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=L)};let U=null;function k(L,B){if(u=B.getViewerPose(c||o),_=B,u!==null){const ce=u.views;p!==null&&(e.setRenderTargetFramebuffer(h,p.framebuffer),e.setRenderTarget(h));let ae=!1;ce.length!==M.cameras.length&&(M.cameras.length=0,ae=!0);for(let fe=0;fe<ce.length;fe++){const ge=ce[fe];let Ae=null;if(p!==null)Ae=p.getViewport(ge);else{const Ce=f.getViewSubImage(d,ge);Ae=Ce.viewport,fe===0&&(e.setRenderTargetTextures(h,Ce.colorTexture,d.ignoreDepthValues?void 0:Ce.depthStencilTexture),e.setRenderTarget(h))}let Se=w[fe];Se===void 0&&(Se=new sn,Se.layers.enable(fe),Se.viewport=new rt,w[fe]=Se),Se.matrix.fromArray(ge.transform.matrix),Se.matrix.decompose(Se.position,Se.quaternion,Se.scale),Se.projectionMatrix.fromArray(ge.projectionMatrix),Se.projectionMatrixInverse.copy(Se.projectionMatrix).invert(),Se.viewport.set(Ae.x,Ae.y,Ae.width,Ae.height),fe===0&&(M.matrix.copy(Se.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ae===!0&&M.cameras.push(Se)}}for(let ce=0;ce<v.length;ce++){const ae=g[ce],fe=v[ce];ae!==null&&fe!==void 0&&fe.update(ae,B,c||o)}U&&U(L,B),B.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:B}),_=null}const F=new my;F.setAnimationLoop(k),this.setAnimationLoop=function(L){U=L},this.dispose=function(){}}}function GR(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,dy(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,v,g,x){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),u(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,x)):h.isMeshMatcapMaterial?(s(m,h),_(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),y(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,v,g):h.isSpriteMaterial?c(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===_n&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===_n&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const v=e.get(h).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*g,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,v,g){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*v,m.scale.value=g*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,v){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===_n&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,h){h.matcap&&(m.matcap.value=h.matcap)}function y(m,h){const v=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function WR(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,g){const x=g.program;i.uniformBlockBinding(v,x)}function c(v,g){let x=r[v.id];x===void 0&&(_(v),x=u(v),r[v.id]=x,v.addEventListener("dispose",m));const E=g.program;i.updateUBOMapping(v,E);const w=e.render.frame;s[v.id]!==w&&(d(v),s[v.id]=w)}function u(v){const g=f();v.__bindingPointIndex=g;const x=n.createBuffer(),E=v.__size,w=v.usage;return n.bindBuffer(n.UNIFORM_BUFFER,x),n.bufferData(n.UNIFORM_BUFFER,E,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){const g=r[v.id],x=v.uniforms,E=v.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let w=0,M=x.length;w<M;w++){const P=x[w];if(p(P,w,E)===!0){const S=P.__offset,R=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let K=0;K<R.length;K++){const Q=R[K],D=y(Q);typeof Q=="number"?(P.__data[0]=Q,n.bufferSubData(n.UNIFORM_BUFFER,S+W,P.__data)):Q.isMatrix3?(P.__data[0]=Q.elements[0],P.__data[1]=Q.elements[1],P.__data[2]=Q.elements[2],P.__data[3]=Q.elements[0],P.__data[4]=Q.elements[3],P.__data[5]=Q.elements[4],P.__data[6]=Q.elements[5],P.__data[7]=Q.elements[0],P.__data[8]=Q.elements[6],P.__data[9]=Q.elements[7],P.__data[10]=Q.elements[8],P.__data[11]=Q.elements[0]):(Q.toArray(P.__data,W),W+=D.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,S,P.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(v,g,x){const E=v.value;if(x[g]===void 0){if(typeof E=="number")x[g]=E;else{const w=Array.isArray(E)?E:[E],M=[];for(let P=0;P<w.length;P++)M.push(w[P].clone());x[g]=M}return!0}else if(typeof E=="number"){if(x[g]!==E)return x[g]=E,!0}else{const w=Array.isArray(x[g])?x[g]:[x[g]],M=Array.isArray(E)?E:[E];for(let P=0;P<w.length;P++){const S=w[P];if(S.equals(M[P])===!1)return S.copy(M[P]),!0}}return!1}function _(v){const g=v.uniforms;let x=0;const E=16;let w=0;for(let M=0,P=g.length;M<P;M++){const S=g[M],R={boundary:0,storage:0},W=Array.isArray(S.value)?S.value:[S.value];for(let K=0,Q=W.length;K<Q;K++){const D=W[K],X=y(D);R.boundary+=X.boundary,R.storage+=X.storage}if(S.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=x,M>0){w=x%E;const K=E-w;w!==0&&K-R.boundary<0&&(x+=E-w,S.__offset=x)}x+=R.storage}return w=x%E,w>0&&(x+=E-w),v.__size=x,v.__cache={},this}function y(v){const g={boundary:0,storage:0};return typeof v=="number"?(g.boundary=4,g.storage=4):v.isVector2?(g.boundary=8,g.storage=8):v.isVector3||v.isColor?(g.boundary=16,g.storage=12):v.isVector4?(g.boundary=16,g.storage=16):v.isMatrix3?(g.boundary=48,g.storage=48):v.isMatrix4?(g.boundary=64,g.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),g}function m(v){const g=v.target;g.removeEventListener("dispose",m);const x=o.indexOf(g.__bindingPointIndex);o.splice(x,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function h(){for(const v in r)n.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:h}}class xy{constructor(e={}){const{canvas:t=VE(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),_=new Int32Array(4);let y=null,m=null;const h=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yt,this._useLegacyLights=!1,this.toneMapping=mr,this.toneMappingExposure=1;const g=this;let x=!1,E=0,w=0,M=null,P=-1,S=null;const R=new rt,W=new rt;let K=null;const Q=new Le(0);let D=0,X=t.width,q=t.height,$=1,U=null,k=null;const F=new rt(0,0,X,q),L=new rt(0,0,X,q);let B=!1;const ce=new Wh;let ae=!1,fe=!1,ge=null;const Ae=new Fe,Se=new Ne,Ce=new N,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return M===null?$:1}let z=i;function jt(A,O){for(let V=0;V<A.length;V++){const G=A[V],j=t.getContext(G,O);if(j!==null)return j}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fh}`),t.addEventListener("webglcontextlost",We,!1),t.addEventListener("webglcontextrestored",I,!1),t.addEventListener("webglcontextcreationerror",le,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&O.shift(),z=jt(O,A),z===null)throw jt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let Ee,Pe,Ie,ft,ke,Ue,qe,Mt,It,b,T,H,ne,J,ie,ve,oe,de,C,se,Z,Re,ye,Te;function _e(){Ee=new eA(z),Pe=new Yw(z,Ee,e),Ee.init(Pe),Re=new kR(z,Ee,Pe),Ie=new OR(z,Ee,Pe),ft=new iA(z),ke=new MR,Ue=new FR(z,Ee,Ie,ke,Pe,Re,ft),qe=new Kw(g),Mt=new Jw(g),It=new hT(z,Pe),ye=new jw(z,Ee,It,Pe),b=new tA(z,It,ft,ye),T=new aA(z,b,It,ft),C=new oA(z,Pe,Ue),ve=new qw(ke),H=new SR(g,qe,Mt,Ee,Pe,ye,ve),ne=new GR(g,ke),J=new TR,ie=new LR(Ee,Pe),de=new Xw(g,qe,Mt,Ie,T,d,l),oe=new UR(g,T,Pe),Te=new WR(z,ft,Pe,Ie),se=new $w(z,Ee,ft,Pe),Z=new nA(z,Ee,ft,Pe),ft.programs=H.programs,g.capabilities=Pe,g.extensions=Ee,g.properties=ke,g.renderLists=J,g.shadowMap=oe,g.state=Ie,g.info=ft}_e();const pe=new VR(g,z);this.xr=pe,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=Ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(A){A!==void 0&&($=A,this.setSize(X,q,!1))},this.getSize=function(A){return A.set(X,q)},this.setSize=function(A,O,V=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=A,q=O,t.width=Math.floor(A*$),t.height=Math.floor(O*$),V===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(X*$,q*$).floor()},this.setDrawingBufferSize=function(A,O,V){X=A,q=O,$=V,t.width=Math.floor(A*V),t.height=Math.floor(O*V),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(R)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,O,V,G){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,O,V,G),Ie.viewport(R.copy(F).multiplyScalar($).floor())},this.getScissor=function(A){return A.copy(L)},this.setScissor=function(A,O,V,G){A.isVector4?L.set(A.x,A.y,A.z,A.w):L.set(A,O,V,G),Ie.scissor(W.copy(L).multiplyScalar($).floor())},this.getScissorTest=function(){return B},this.setScissorTest=function(A){Ie.setScissorTest(B=A)},this.setOpaqueSort=function(A){U=A},this.setTransparentSort=function(A){k=A},this.getClearColor=function(A){return A.copy(de.getClearColor())},this.setClearColor=function(){de.setClearColor.apply(de,arguments)},this.getClearAlpha=function(){return de.getClearAlpha()},this.setClearAlpha=function(){de.setClearAlpha.apply(de,arguments)},this.clear=function(A=!0,O=!0,V=!0){let G=0;if(A){let j=!1;if(M!==null){const he=M.texture.format;j=he===ey||he===Jv||he===Qv}if(j){const he=M.texture.type,xe=he===gr||he===ir||he===Bh||he===Gr||he===Kv||he===Zv,be=de.getClearColor(),De=de.getClearAlpha(),Ve=be.r,Oe=be.g,Be=be.b;xe?(p[0]=Ve,p[1]=Oe,p[2]=Be,p[3]=De,z.clearBufferuiv(z.COLOR,0,p)):(_[0]=Ve,_[1]=Oe,_[2]=Be,_[3]=De,z.clearBufferiv(z.COLOR,0,_))}else G|=z.COLOR_BUFFER_BIT}O&&(G|=z.DEPTH_BUFFER_BIT),V&&(G|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",We,!1),t.removeEventListener("webglcontextrestored",I,!1),t.removeEventListener("webglcontextcreationerror",le,!1),J.dispose(),ie.dispose(),ke.dispose(),qe.dispose(),Mt.dispose(),T.dispose(),ye.dispose(),Te.dispose(),H.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ln),pe.removeEventListener("sessionend",st),ge&&(ge.dispose(),ge=null),Jt.stop()};function We(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const A=ft.autoReset,O=oe.enabled,V=oe.autoUpdate,G=oe.needsUpdate,j=oe.type;_e(),ft.autoReset=A,oe.enabled=O,oe.autoUpdate=V,oe.needsUpdate=G,oe.type=j}function le(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ee(A){const O=A.target;O.removeEventListener("dispose",ee),Y(O)}function Y(A){re(A),ke.remove(A)}function re(A){const O=ke.get(A).programs;O!==void 0&&(O.forEach(function(V){H.releaseProgram(V)}),A.isShaderMaterial&&H.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,V,G,j,he){O===null&&(O=Ze);const xe=j.isMesh&&j.matrixWorld.determinant()<0,be=Zy(A,O,V,G,j);Ie.setMaterial(G,xe);let De=V.index,Ve=1;if(G.wireframe===!0){if(De=b.getWireframeAttribute(V),De===void 0)return;Ve=2}const Oe=V.drawRange,Be=V.attributes.position;let xt=Oe.start*Ve,vn=(Oe.start+Oe.count)*Ve;he!==null&&(xt=Math.max(xt,he.start*Ve),vn=Math.min(vn,(he.start+he.count)*Ve)),De!==null?(xt=Math.max(xt,0),vn=Math.min(vn,De.count)):Be!=null&&(xt=Math.max(xt,0),vn=Math.min(vn,Be.count));const Nt=vn-xt;if(Nt<0||Nt===1/0)return;ye.setup(j,G,be,V,De);let _i,_t=se;if(De!==null&&(_i=It.get(De),_t=Z,_t.setIndex(_i)),j.isMesh)G.wireframe===!0?(Ie.setLineWidth(G.wireframeLinewidth*we()),_t.setMode(z.LINES)):_t.setMode(z.TRIANGLES);else if(j.isLine){let je=G.linewidth;je===void 0&&(je=1),Ie.setLineWidth(je*we()),j.isLineSegments?_t.setMode(z.LINES):j.isLineLoop?_t.setMode(z.LINE_LOOP):_t.setMode(z.LINE_STRIP)}else j.isPoints?_t.setMode(z.POINTS):j.isSprite&&_t.setMode(z.TRIANGLES);if(j.isInstancedMesh)_t.renderInstances(xt,Nt,j.count);else if(V.isInstancedBufferGeometry){const je=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,au=Math.min(V.instanceCount,je);_t.renderInstances(xt,Nt,au)}else _t.render(xt,Nt)};function Me(A,O,V){A.transparent===!0&&A.side===ui&&A.forceSinglePass===!1?(A.side=_n,A.needsUpdate=!0,Wa(A,O,V),A.side=Fi,A.needsUpdate=!0,Wa(A,O,V),A.side=ui):Wa(A,O,V)}this.compile=function(A,O,V=null){V===null&&(V=A),m=ie.get(V),m.init(),v.push(m),V.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),A!==V&&A.traverseVisible(function(j){j.isLight&&j.layers.test(O.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(g._useLegacyLights);const G=new Set;return A.traverse(function(j){const he=j.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){const be=he[xe];Me(be,V,j),G.add(be)}else Me(he,V,j),G.add(he)}),v.pop(),m=null,G},this.compileAsync=function(A,O,V=null){const G=this.compile(A,O,V);return new Promise(j=>{function he(){if(G.forEach(function(xe){ke.get(xe).currentProgram.isReady()&&G.delete(xe)}),G.size===0){j(A);return}setTimeout(he,10)}Ee.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let Xe=null;function Et(A){Xe&&Xe(A)}function Ln(){Jt.stop()}function st(){Jt.start()}const Jt=new my;Jt.setAnimationLoop(Et),typeof self<"u"&&Jt.setContext(self),this.setAnimationLoop=function(A){Xe=A,pe.setAnimationLoop(A),A===null?Jt.stop():Jt.start()},pe.addEventListener("sessionstart",Ln),pe.addEventListener("sessionend",st),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(g,A,O,M),m=ie.get(A,v.length),m.init(),v.push(m),Ae.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ce.setFromProjectionMatrix(Ae),fe=this.localClippingEnabled,ae=ve.init(this.clippingPlanes,fe),y=J.get(A,h.length),y.init(),h.push(y),ri(A,O,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(U,k),this.info.render.frame++,ae===!0&&ve.beginShadows();const V=m.state.shadowsArray;if(oe.render(V,A,O),ae===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),de.render(y,A),m.setupLights(g._useLegacyLights),O.isArrayCamera){const G=O.cameras;for(let j=0,he=G.length;j<he;j++){const xe=G[j];ap(y,A,xe,xe.viewport)}}else ap(y,A,O);M!==null&&(Ue.updateMultisampleRenderTarget(M),Ue.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(g,A,O),ye.resetDefaultState(),P=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,h.pop(),h.length>0?y=h[h.length-1]:y=null};function ri(A,O,V,G){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)V=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ce.intersectsSprite(A)){G&&Ce.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const xe=T.update(A),be=A.material;be.visible&&y.push(A,xe,be,V,Ce.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ce.intersectsObject(A))){const xe=T.update(A),be=A.material;if(G&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ce.copy(A.boundingSphere.center)):(xe.boundingSphere===null&&xe.computeBoundingSphere(),Ce.copy(xe.boundingSphere.center)),Ce.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(be)){const De=xe.groups;for(let Ve=0,Oe=De.length;Ve<Oe;Ve++){const Be=De[Ve],xt=be[Be.materialIndex];xt&&xt.visible&&y.push(A,xe,xt,V,Ce.z,Be)}}else be.visible&&y.push(A,xe,be,V,Ce.z,null)}}const he=A.children;for(let xe=0,be=he.length;xe<be;xe++)ri(he[xe],O,V,G)}function ap(A,O,V,G){const j=A.opaque,he=A.transmissive,xe=A.transparent;m.setupLightsView(V),ae===!0&&ve.setGlobalState(g.clippingPlanes,V),he.length>0&&Ky(j,he,O,V),G&&Ie.viewport(R.copy(G)),j.length>0&&Ga(j,O,V),he.length>0&&Ga(he,O,V),xe.length>0&&Ga(xe,O,V),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Ky(A,O,V,G){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const he=Pe.isWebGL2;ge===null&&(ge=new es(1,1,{generateMipmaps:!0,type:Ee.has("EXT_color_buffer_half_float")?La:gr,minFilter:Jr,samples:he?4:0})),g.getDrawingBufferSize(Se),he?ge.setSize(Se.x,Se.y):ge.setSize(Nc(Se.x),Nc(Se.y));const xe=g.getRenderTarget();g.setRenderTarget(ge),g.getClearColor(Q),D=g.getClearAlpha(),D<1&&g.setClearColor(16777215,.5),g.clear();const be=g.toneMapping;g.toneMapping=mr,Ga(A,V,G),Ue.updateMultisampleRenderTarget(ge),Ue.updateRenderTargetMipmap(ge);let De=!1;for(let Ve=0,Oe=O.length;Ve<Oe;Ve++){const Be=O[Ve],xt=Be.object,vn=Be.geometry,Nt=Be.material,_i=Be.group;if(Nt.side===ui&&xt.layers.test(G.layers)){const _t=Nt.side;Nt.side=_n,Nt.needsUpdate=!0,lp(xt,V,G,vn,Nt,_i),Nt.side=_t,Nt.needsUpdate=!0,De=!0}}De===!0&&(Ue.updateMultisampleRenderTarget(ge),Ue.updateRenderTargetMipmap(ge)),g.setRenderTarget(xe),g.setClearColor(Q,D),g.toneMapping=be}function Ga(A,O,V){const G=O.isScene===!0?O.overrideMaterial:null;for(let j=0,he=A.length;j<he;j++){const xe=A[j],be=xe.object,De=xe.geometry,Ve=G===null?xe.material:G,Oe=xe.group;be.layers.test(V.layers)&&lp(be,O,V,De,Ve,Oe)}}function lp(A,O,V,G,j,he){A.onBeforeRender(g,O,V,G,j,he),A.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),j.onBeforeRender(g,O,V,G,A,he),j.transparent===!0&&j.side===ui&&j.forceSinglePass===!1?(j.side=_n,j.needsUpdate=!0,g.renderBufferDirect(V,O,G,j,A,he),j.side=Fi,j.needsUpdate=!0,g.renderBufferDirect(V,O,G,j,A,he),j.side=ui):g.renderBufferDirect(V,O,G,j,A,he),A.onAfterRender(g,O,V,G,j,he)}function Wa(A,O,V){O.isScene!==!0&&(O=Ze);const G=ke.get(A),j=m.state.lights,he=m.state.shadowsArray,xe=j.state.version,be=H.getParameters(A,j.state,he,O,V),De=H.getProgramCacheKey(be);let Ve=G.programs;G.environment=A.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(A.isMeshStandardMaterial?Mt:qe).get(A.envMap||G.environment),Ve===void 0&&(A.addEventListener("dispose",ee),Ve=new Map,G.programs=Ve);let Oe=Ve.get(De);if(Oe!==void 0){if(G.currentProgram===Oe&&G.lightsStateVersion===xe)return up(A,be),Oe}else be.uniforms=H.getUniforms(A),A.onBuild(V,be,g),A.onBeforeCompile(be,g),Oe=H.acquireProgram(be,De),Ve.set(De,Oe),G.uniforms=be.uniforms;const Be=G.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Be.clippingPlanes=ve.uniform),up(A,be),G.needsLights=Jy(A),G.lightsStateVersion=xe,G.needsLights&&(Be.ambientLightColor.value=j.state.ambient,Be.lightProbe.value=j.state.probe,Be.directionalLights.value=j.state.directional,Be.directionalLightShadows.value=j.state.directionalShadow,Be.spotLights.value=j.state.spot,Be.spotLightShadows.value=j.state.spotShadow,Be.rectAreaLights.value=j.state.rectArea,Be.ltc_1.value=j.state.rectAreaLTC1,Be.ltc_2.value=j.state.rectAreaLTC2,Be.pointLights.value=j.state.point,Be.pointLightShadows.value=j.state.pointShadow,Be.hemisphereLights.value=j.state.hemi,Be.directionalShadowMap.value=j.state.directionalShadowMap,Be.directionalShadowMatrix.value=j.state.directionalShadowMatrix,Be.spotShadowMap.value=j.state.spotShadowMap,Be.spotLightMatrix.value=j.state.spotLightMatrix,Be.spotLightMap.value=j.state.spotLightMap,Be.pointShadowMap.value=j.state.pointShadowMap,Be.pointShadowMatrix.value=j.state.pointShadowMatrix),G.currentProgram=Oe,G.uniformsList=null,Oe}function cp(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=Zl.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function up(A,O){const V=ke.get(A);V.outputColorSpace=O.outputColorSpace,V.instancing=O.instancing,V.instancingColor=O.instancingColor,V.skinning=O.skinning,V.morphTargets=O.morphTargets,V.morphNormals=O.morphNormals,V.morphColors=O.morphColors,V.morphTargetsCount=O.morphTargetsCount,V.numClippingPlanes=O.numClippingPlanes,V.numIntersection=O.numClipIntersection,V.vertexAlphas=O.vertexAlphas,V.vertexTangents=O.vertexTangents,V.toneMapping=O.toneMapping}function Zy(A,O,V,G,j){O.isScene!==!0&&(O=Ze),Ue.resetTextureUnits();const he=O.fog,xe=G.isMeshStandardMaterial?O.environment:null,be=M===null?g.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Xt,De=(G.isMeshStandardMaterial?Mt:qe).get(G.envMap||xe),Ve=G.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Oe=!!V.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Be=!!V.morphAttributes.position,xt=!!V.morphAttributes.normal,vn=!!V.morphAttributes.color;let Nt=mr;G.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(Nt=g.toneMapping);const _i=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,_t=_i!==void 0?_i.length:0,je=ke.get(G),au=m.state.lights;if(ae===!0&&(fe===!0||A!==S)){const yn=A===S&&G.id===P;ve.setState(G,A,yn)}let Tt=!1;G.version===je.__version?(je.needsLights&&je.lightsStateVersion!==au.state.version||je.outputColorSpace!==be||j.isInstancedMesh&&je.instancing===!1||!j.isInstancedMesh&&je.instancing===!0||j.isSkinnedMesh&&je.skinning===!1||!j.isSkinnedMesh&&je.skinning===!0||j.isInstancedMesh&&je.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&je.instancingColor===!1&&j.instanceColor!==null||je.envMap!==De||G.fog===!0&&je.fog!==he||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==ve.numPlanes||je.numIntersection!==ve.numIntersection)||je.vertexAlphas!==Ve||je.vertexTangents!==Oe||je.morphTargets!==Be||je.morphNormals!==xt||je.morphColors!==vn||je.toneMapping!==Nt||Pe.isWebGL2===!0&&je.morphTargetsCount!==_t)&&(Tt=!0):(Tt=!0,je.__version=G.version);let Tr=je.currentProgram;Tt===!0&&(Tr=Wa(G,O,j));let fp=!1,Co=!1,lu=!1;const en=Tr.getUniforms(),wr=je.uniforms;if(Ie.useProgram(Tr.program)&&(fp=!0,Co=!0,lu=!0),G.id!==P&&(P=G.id,Co=!0),fp||S!==A){en.setValue(z,"projectionMatrix",A.projectionMatrix),en.setValue(z,"viewMatrix",A.matrixWorldInverse);const yn=en.map.cameraPosition;yn!==void 0&&yn.setValue(z,Ce.setFromMatrixPosition(A.matrixWorld)),Pe.logarithmicDepthBuffer&&en.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&en.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),S!==A&&(S=A,Co=!0,lu=!0)}if(j.isSkinnedMesh){en.setOptional(z,j,"bindMatrix"),en.setOptional(z,j,"bindMatrixInverse");const yn=j.skeleton;yn&&(Pe.floatVertexTextures?(yn.boneTexture===null&&yn.computeBoneTexture(),en.setValue(z,"boneTexture",yn.boneTexture,Ue),en.setValue(z,"boneTextureSize",yn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const cu=V.morphAttributes;if((cu.position!==void 0||cu.normal!==void 0||cu.color!==void 0&&Pe.isWebGL2===!0)&&C.update(j,V,Tr),(Co||je.receiveShadow!==j.receiveShadow)&&(je.receiveShadow=j.receiveShadow,en.setValue(z,"receiveShadow",j.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(wr.envMap.value=De,wr.flipEnvMap.value=De.isCubeTexture&&De.isRenderTargetTexture===!1?-1:1),Co&&(en.setValue(z,"toneMappingExposure",g.toneMappingExposure),je.needsLights&&Qy(wr,lu),he&&G.fog===!0&&ne.refreshFogUniforms(wr,he),ne.refreshMaterialUniforms(wr,G,$,q,ge),Zl.upload(z,cp(je),wr,Ue)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Zl.upload(z,cp(je),wr,Ue),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&en.setValue(z,"center",j.center),en.setValue(z,"modelViewMatrix",j.modelViewMatrix),en.setValue(z,"normalMatrix",j.normalMatrix),en.setValue(z,"modelMatrix",j.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const yn=G.uniformsGroups;for(let uu=0,ex=yn.length;uu<ex;uu++)if(Pe.isWebGL2){const dp=yn[uu];Te.update(dp,Tr),Te.bind(dp,Tr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tr}function Qy(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function Jy(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,O,V){ke.get(A.texture).__webglTexture=O,ke.get(A.depthTexture).__webglTexture=V;const G=ke.get(A);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=V===void 0,G.__autoAllocateDepthBuffer||Ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(A,O){const V=ke.get(A);V.__webglFramebuffer=O,V.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,V=0){M=A,E=O,w=V;let G=!0,j=null,he=!1,xe=!1;if(A){const De=ke.get(A);De.__useDefaultFramebuffer!==void 0?(Ie.bindFramebuffer(z.FRAMEBUFFER,null),G=!1):De.__webglFramebuffer===void 0?Ue.setupRenderTarget(A):De.__hasExternalTextures&&Ue.rebindTextures(A,ke.get(A.texture).__webglTexture,ke.get(A.depthTexture).__webglTexture);const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(xe=!0);const Oe=ke.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Oe[O])?j=Oe[O][V]:j=Oe[O],he=!0):Pe.isWebGL2&&A.samples>0&&Ue.useMultisampledRTT(A)===!1?j=ke.get(A).__webglMultisampledFramebuffer:Array.isArray(Oe)?j=Oe[V]:j=Oe,R.copy(A.viewport),W.copy(A.scissor),K=A.scissorTest}else R.copy(F).multiplyScalar($).floor(),W.copy(L).multiplyScalar($).floor(),K=B;if(Ie.bindFramebuffer(z.FRAMEBUFFER,j)&&Pe.drawBuffers&&G&&Ie.drawBuffers(A,j),Ie.viewport(R),Ie.scissor(W),Ie.setScissorTest(K),he){const De=ke.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,De.__webglTexture,V)}else if(xe){const De=ke.get(A.texture),Ve=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,De.__webglTexture,V||0,Ve)}P=-1},this.readRenderTargetPixels=function(A,O,V,G,j,he,xe){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=ke.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&xe!==void 0&&(be=be[xe]),be){Ie.bindFramebuffer(z.FRAMEBUFFER,be);try{const De=A.texture,Ve=De.format,Oe=De.type;if(Ve!==Tn&&Re.convert(Ve)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Be=Oe===La&&(Ee.has("EXT_color_buffer_half_float")||Pe.isWebGL2&&Ee.has("EXT_color_buffer_float"));if(Oe!==gr&&Re.convert(Oe)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Oe===di&&(Pe.isWebGL2||Ee.has("OES_texture_float")||Ee.has("WEBGL_color_buffer_float")))&&!Be){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-G&&V>=0&&V<=A.height-j&&z.readPixels(O,V,G,j,Re.convert(Ve),Re.convert(Oe),he)}finally{const De=M!==null?ke.get(M).__webglFramebuffer:null;Ie.bindFramebuffer(z.FRAMEBUFFER,De)}}},this.copyFramebufferToTexture=function(A,O,V=0){const G=Math.pow(2,-V),j=Math.floor(O.image.width*G),he=Math.floor(O.image.height*G);Ue.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,A.x,A.y,j,he),Ie.unbindTexture()},this.copyTextureToTexture=function(A,O,V,G=0){const j=O.image.width,he=O.image.height,xe=Re.convert(V.format),be=Re.convert(V.type);Ue.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,G,A.x,A.y,j,he,xe,be,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,G,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,xe,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,G,A.x,A.y,xe,be,O.image),G===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(A,O,V,G,j=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const he=A.max.x-A.min.x+1,xe=A.max.y-A.min.y+1,be=A.max.z-A.min.z+1,De=Re.convert(G.format),Ve=Re.convert(G.type);let Oe;if(G.isData3DTexture)Ue.setTexture3D(G,0),Oe=z.TEXTURE_3D;else if(G.isDataArrayTexture)Ue.setTexture2DArray(G,0),Oe=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,G.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,G.unpackAlignment);const Be=z.getParameter(z.UNPACK_ROW_LENGTH),xt=z.getParameter(z.UNPACK_IMAGE_HEIGHT),vn=z.getParameter(z.UNPACK_SKIP_PIXELS),Nt=z.getParameter(z.UNPACK_SKIP_ROWS),_i=z.getParameter(z.UNPACK_SKIP_IMAGES),_t=V.isCompressedTexture?V.mipmaps[0]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,_t.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,_t.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,A.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,A.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,A.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(Oe,j,O.x,O.y,O.z,he,xe,be,De,Ve,_t.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Oe,j,O.x,O.y,O.z,he,xe,be,De,_t.data)):z.texSubImage3D(Oe,j,O.x,O.y,O.z,he,xe,be,De,Ve,_t),z.pixelStorei(z.UNPACK_ROW_LENGTH,Be),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,xt),z.pixelStorei(z.UNPACK_SKIP_PIXELS,vn),z.pixelStorei(z.UNPACK_SKIP_ROWS,Nt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,_i),j===0&&G.generateMipmaps&&z.generateMipmap(Oe),Ie.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?Ue.setTextureCube(A,0):A.isData3DTexture?Ue.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?Ue.setTexture2DArray(A,0):Ue.setTexture2D(A,0),Ie.unbindTexture()},this.resetState=function(){E=0,w=0,M=null,Ie.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Li}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Hh?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===eu?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===yt?Xr:ny}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Xr?yt:Xt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class XR extends xy{}XR.prototype.isWebGL1Renderer=!0;class jR extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class $R{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ad,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Qn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[i+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Qn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new N;class Yh{constructor(e,t,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyMatrix4(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.applyNormalMatrix(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)tn.fromBufferAttribute(this,t),tn.transformDirection(e),this.setXYZ(t,tn.x,tn.y,tn.z);return this}setX(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=it(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=fi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=fi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=fi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=fi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=it(t,this.array),i=it(i,this.array),r=it(r,this.array),s=it(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Yh(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Wg=new N,Xg=new rt,jg=new rt,YR=new N,$g=new Fe,Ll=new N,hf=new mi,Yg=new Fe,pf=new Ba;class qR extends on{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=bm,this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Bi),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ll),this.boundingBox.expandByPoint(Ll)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,Ll),this.boundingSphere.expandByPoint(Ll)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const i=this.material,r=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),hf.copy(this.boundingSphere),hf.applyMatrix4(r),e.ray.intersectsSphere(hf)!==!1&&(Yg.copy(r).invert(),pf.copy(e.ray).applyMatrix4(Yg),!(this.boundingBox!==null&&pf.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,pf)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new rt,t=this.geometry.attributes.skinWeight;for(let i=0,r=t.count;i<r;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===bm?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===oE?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const i=this.skeleton,r=this.geometry;Xg.fromBufferAttribute(r.attributes.skinIndex,e),jg.fromBufferAttribute(r.attributes.skinWeight,e),Wg.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=jg.getComponent(s);if(o!==0){const a=Xg.getComponent(s);$g.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(YR.copy(Wg).applyMatrix4($g),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Sy extends mt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class My extends Vt{constructor(e=null,t=1,i=1,r,s,o,a,l,c=Ft,u=Ft,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qg=new Fe,KR=new Fe;class qh{constructor(e=[],t=[]){this.uuid=Qn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,r=this.bones.length;i<r;i++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new Fe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:KR;qg.multiplyMatrices(a,t[s]),qg.toArray(i,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new qh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=iy(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new My(t,e,e,Tn,di);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,r=e.bones.length;i<r;i++){const s=e.bones[i];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new Sy),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=i[r];e.boneInverses.push(a.toArray())}return e}}class Ld extends Gt{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ws=new Fe,Kg=new Fe,Pl=[],Zg=new Bi,ZR=new Fe,Vo=new on,Go=new mi;class QR extends on{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ld(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,ZR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Bi),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),Zg.copy(e.boundingBox).applyMatrix4(ws),this.boundingBox.union(Zg)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,ws),Go.copy(e.boundingSphere).applyMatrix4(ws),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,r=this.count;if(Vo.geometry=this.geometry,Vo.material=this.material,Vo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(i),e.ray.intersectsSphere(Go)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,ws),Kg.multiplyMatrices(i,ws),Vo.matrixWorld=Kg,Vo.raycast(e,Pl);for(let o=0,a=Pl.length;o<a;o++){const l=Pl[o];l.instanceId=s,l.object=this,t.push(l)}Pl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ld(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Ey extends Jn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Qg=new N,Jg=new N,e_=new Fe,mf=new Ba,Il=new mi;class Kh extends mt{constructor(e=new ii,t=new Ey){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Qg.fromBufferAttribute(t,r-1),Jg.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Qg.distanceTo(Jg);e.setAttribute("lineDistance",new Ii(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Il.copy(i.boundingSphere),Il.applyMatrix4(r),Il.radius+=s,e.ray.intersectsSphere(Il)===!1)return;e_.copy(r).invert(),mf.copy(e.ray).applyMatrix4(e_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new N,u=new N,f=new N,d=new N,p=this.isLineSegments?2:1,_=i.index,m=i.attributes.position;if(_!==null){const h=Math.max(0,o.start),v=Math.min(_.count,o.start+o.count);for(let g=h,x=v-1;g<x;g+=p){const E=_.getX(g),w=_.getX(g+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,w),mf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let g=h,x=v-1;g<x;g+=p){if(c.fromBufferAttribute(m,g),u.fromBufferAttribute(m,g+1),mf.distanceSqToSegment(c,u,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(d);w<e.near||w>e.far||t.push({distance:w,point:f.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const t_=new N,n_=new N;class JR extends Kh{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)t_.fromBufferAttribute(t,r),n_.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+t_.distanceTo(n_);e.setAttribute("lineDistance",new Ii(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class eb extends Kh{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ty extends Jn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const i_=new Fe,Pd=new Ba,Nl=new mi,Dl=new N;class tb extends mt{constructor(e=new ii,t=new Ty){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Nl.copy(i.boundingSphere),Nl.applyMatrix4(r),Nl.radius+=s,e.ray.intersectsSphere(Nl)===!1)return;i_.copy(r).invert(),Pd.copy(e.ray).applyMatrix4(i_);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let _=d,y=p;_<y;_++){const m=c.getX(_);Dl.fromBufferAttribute(f,m),r_(Dl,m,l,r,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(f.count,o.start+o.count);for(let _=d,y=p;_<y;_++)Dl.fromBufferAttribute(f,_),r_(Dl,_,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function r_(n,e,t,i,r,s,o){const a=Pd.distanceSqToPoint(n);if(a<t){const l=new N;Pd.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class Zh extends Jn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Er extends Zh{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class gf extends Jn{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Le(16777215),this.specular=new Le(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=zh,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}function Ul(n,e,t){return!n||!t&&n.constructor===e?n:typeof e.BYTES_PER_ELEMENT=="number"?new e(n):Array.prototype.slice.call(n)}function nb(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function ib(n){function e(r,s){return n[r]-n[s]}const t=n.length,i=new Array(t);for(let r=0;r!==t;++r)i[r]=r;return i.sort(e),i}function s_(n,e,t){const i=n.length,r=new n.constructor(i);for(let s=0,o=0;o!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)r[o++]=n[a+l]}return r}function wy(n,e,t,i){let r=1,s=n[0];for(;s!==void 0&&s[i]===void 0;)s=n[r++];if(s===void 0)return;let o=s[i];if(o!==void 0)if(Array.isArray(o))do o=s[i],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=n[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[i],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=n[r++];while(s!==void 0);else do o=s[i],o!==void 0&&(e.push(s.time),t.push(o)),s=n[r++];while(s!==void 0)}class Ha{constructor(e,t,i,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,r=t[i],s=t[i-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=i+2;;){if(r===void 0){if(e<s)break i;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=r,r=t[++i],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(r=s,s=t[--i-1],e>=s)break t}o=i,i=0;break n}break e}for(;i<o;){const a=i+o>>>1;e<t[a]?o=a:i=a+1}if(r=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,r)}return this.interpolate_(i,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=i[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rb extends Ha{constructor(e,t,i,r){super(e,t,i,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eg,endingEnd:eg}}intervalChanged_(e,t,i){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],l=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case tg:s=e,a=2*t-i;break;case ng:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case tg:o=e,l=2*i-t;break;case ng:o=1,l=i+r[1]-r[0];break;default:o=e-1,l=t}const c=(i-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,p=this._weightNext,_=(i-t)/(r-t),y=_*_,m=y*_,h=-d*m+2*d*y-d*_,v=(1+d)*m+(-1.5-2*d)*y+(-.5+d)*_+1,g=(-1-p)*m+(1.5+p)*y+.5*_,x=p*m-p*y;for(let E=0;E!==a;++E)s[E]=h*o[u+E]+v*o[c+E]+g*o[l+E]+x*o[f+E];return s}}class sb extends Ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(i-t)/(r-t),f=1-u;for(let d=0;d!==a;++d)s[d]=o[c+d]*f+o[l+d]*u;return s}}class ob extends Ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class gi{constructor(e,t,i,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ul(t,this.TimeBufferType),this.values=Ul(i,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ul(e.times,Array),values:Ul(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(i.interpolation=r)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new ob(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sb(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rb(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Pa:t=this.InterpolantFactoryMethodDiscrete;break;case lo:t=this.InterpolantFactoryMethodLinear;break;case Vu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Pa;case this.InterpolantFactoryMethodLinear:return lo;case this.InterpolantFactoryMethodSmooth:return Vu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,r=t.length;i!==r;++i)t[i]*=e}return this}trim(e,t){const i=this.times,r=i.length;let s=0,o=r-1;for(;s!==r&&i[s]<e;)++s;for(;o!==-1&&i[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=i.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,r=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(r!==void 0&&nb(r))for(let a=0,l=r.length;a!==l;++a){const c=r[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),r=this.getInterpolation()===Vu,s=e.length-1;let o=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(r)l=!0;else{const f=a*i,d=f-i,p=f+i;for(let _=0;_!==i;++_){const y=t[f+_];if(y!==t[d+_]||y!==t[p+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const f=a*i,d=o*i;for(let p=0;p!==i;++p)t[d+p]=t[f+p]}++o}}if(s>0){e[o]=e[s];for(let a=s*i,l=o*i,c=0;c!==i;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*i)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),i=this.constructor,r=new i(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}gi.prototype.TimeBufferType=Float32Array;gi.prototype.ValueBufferType=Float32Array;gi.prototype.DefaultInterpolation=lo;class To extends gi{}To.prototype.ValueTypeName="bool";To.prototype.ValueBufferType=Array;To.prototype.DefaultInterpolation=Pa;To.prototype.InterpolantFactoryMethodLinear=void 0;To.prototype.InterpolantFactoryMethodSmooth=void 0;class Ay extends gi{}Ay.prototype.ValueTypeName="color";class fo extends gi{}fo.prototype.ValueTypeName="number";class ab extends Ha{constructor(e,t,i,r){super(e,t,i,r)}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(i-t)/(r-t);let c=e*a;for(let u=c+a;c!==u;c+=4)ni.slerpFlat(s,0,o,c-a,o,c,l);return s}}class ns extends gi{InterpolantFactoryMethodLinear(e){return new ab(this.times,this.values,this.getValueSize(),e)}}ns.prototype.ValueTypeName="quaternion";ns.prototype.DefaultInterpolation=lo;ns.prototype.InterpolantFactoryMethodSmooth=void 0;class wo extends gi{}wo.prototype.ValueTypeName="string";wo.prototype.ValueBufferType=Array;wo.prototype.DefaultInterpolation=Pa;wo.prototype.InterpolantFactoryMethodLinear=void 0;wo.prototype.InterpolantFactoryMethodSmooth=void 0;class ho extends gi{}ho.prototype.ValueTypeName="vector";class lb{constructor(e,t=-1,i,r=gE){this.name=e,this.tracks=i,this.duration=t,this.blendMode=r,this.uuid=Qn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,r=1/(e.fps||1);for(let o=0,a=i.length;o!==a;++o)t.push(ub(i[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=i.length;s!==o;++s)t.push(gi.toJSON(i[s]));return r}static CreateFromMorphTargetSequence(e,t,i,r){const s=t.length,o=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const u=ib(l);l=s_(l,1,u),c=s_(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),o.push(new fo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,o)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const r=e;i=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<i.length;r++)if(i[r].name===t)return i[r];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(s);if(u&&u.length>1){const f=u[1];let d=r[f];d||(r[f]=d=[]),d.push(c)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,i));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(f,d,p,_,y){if(p.length!==0){const m=[],h=[];wy(p,m,h,_),m.length!==0&&y.push(new f(d,m,h))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let f=0;f<c.length;f++){const d=c[f].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let y=0;y<d[_].morphTargets.length;y++)p[d[_].morphTargets[y]]=-1;for(const y in p){const m=[],h=[];for(let v=0;v!==d[_].morphTargets.length;++v){const g=d[_];m.push(g.time),h.push(g.morphTarget===y?1:0)}r.push(new fo(".morphTargetInfluence["+y+"]",m,h))}l=p.length*o}else{const p=".bones["+t[f].name+"]";i(ho,p+".position",d,"pos",r),i(ns,p+".quaternion",d,"rot",r),i(ho,p+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,r=e.length;i!==r;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cb(n){switch(n.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fo;case"vector":case"vector2":case"vector3":case"vector4":return ho;case"color":return Ay;case"quaternion":return ns;case"bool":case"boolean":return To;case"string":return wo}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+n)}function ub(n){if(n.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cb(n.type);if(n.times===void 0){const t=[],i=[];wy(n.keys,t,i,"value"),n.times=t,n.values=i}return e.parse!==void 0?e.parse(n):new e(n.name,n.times,n.values,n.interpolation)}const po={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class fb{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const p=c[f],_=c[f+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const db=new fb;class Ao{constructor(e){this.manager=e!==void 0?e:db,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ao.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ei={};class hb extends Error{constructor(e,t){super(e),this.response=t}}class Ry extends Ao{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=po.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ei[e]!==void 0){Ei[e].push({onLoad:t,onProgress:i,onError:r});return}Ei[e]=[],Ei[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ei[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=d?parseInt(d):0,_=p!==0;let y=0;const m=new ReadableStream({start(h){v();function v(){f.read().then(({done:g,value:x})=>{if(g)h.close();else{y+=x.byteLength;const E=new ProgressEvent("progress",{lengthComputable:_,loaded:y,total:p});for(let w=0,M=u.length;w<M;w++){const P=u[w];P.onProgress&&P.onProgress(E)}h.enqueue(x),v()}})}}});return new Response(m)}else throw new hb(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(_=>p.decode(_))}}}).then(c=>{po.add(e,c);const u=Ei[e];delete Ei[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ei[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ei[e];for(let f=0,d=u.length;f<d;f++){const p=u[f];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class pb extends Ao{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=po.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ia("img");function l(){u(),po.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class mb extends Ao{constructor(e){super(e)}load(e,t,i,r){const s=new Vt,o=new pb(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class Qh extends mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const _f=new Fe,o_=new N,a_=new N;class Jh{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wh,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;o_.setFromMatrixPosition(e.matrixWorld),t.position.copy(o_),a_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(a_),t.updateMatrixWorld(),_f.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_f),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(_f)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class gb extends Jh{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=co*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class _b extends Qh{constructor(e,t,i=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.distance=i,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new gb}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const l_=new Fe,Wo=new N,vf=new N;class vb extends Jh{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new rt(2,1,1,1),new rt(0,1,1,1),new rt(3,1,1,1),new rt(1,1,1,1),new rt(3,0,1,1),new rt(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Wo),vf.copy(i.position),vf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(vf),i.updateMatrixWorld(),r.makeTranslation(-Wo.x,-Wo.y,-Wo.z),l_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(l_)}}class Id extends Qh{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new vb}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class yb extends Jh{constructor(){super(new jh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xb extends Qh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(mt.DEFAULT_UP),this.updateMatrix(),this.target=new mt,this.shadow=new yb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nd{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,r=e.length;i<r;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Sb extends Ao{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=po.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){po.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}const ep="\\[\\]\\.:\\/",Mb=new RegExp("["+ep+"]","g"),tp="[^"+ep+"]",Eb="[^"+ep.replace("\\.","")+"]",Tb=/((?:WC+[\/:])*)/.source.replace("WC",tp),wb=/(WCOD+)?/.source.replace("WCOD",Eb),Ab=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",tp),Rb=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",tp),bb=new RegExp("^"+Tb+wb+Ab+Rb+"$"),Cb=["material","materials","bones","map"];class Lb{constructor(e,t,i){const r=i||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class tt{constructor(e,t,i){this.path=t,this.parsedPath=i||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,i):new tt(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mb,"")}static parseTrackName(e){const t=bb.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);Cb.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[t++]=i[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=Lb;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class c_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(zt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fh);const u_={type:"change"},yf={type:"start"},f_={type:"end"},Ol=new Ba,d_=new Ki,Pb=Math.cos(70*Gh.DEG2RAD);class Ib extends ss{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",T),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",T),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(u_),i.update(),s=r.NONE},this.update=function(){const C=new N,se=new ni().setFromUnitVectors(e.up,new N(0,1,0)),Z=se.clone().invert(),Re=new N,ye=new ni,Te=new N,_e=2*Math.PI;return function(We=null){const I=i.object.position;C.copy(I).sub(i.target),C.applyQuaternion(se),a.setFromVector3(C),i.autoRotate&&s===r.NONE&&W(S(We)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let le=i.minAzimuthAngle,ee=i.maxAzimuthAngle;isFinite(le)&&isFinite(ee)&&(le<-Math.PI?le+=_e:le>Math.PI&&(le-=_e),ee<-Math.PI?ee+=_e:ee>Math.PI&&(ee-=_e),le<=ee?a.theta=Math.max(le,Math.min(ee,a.theta)):a.theta=a.theta>(le+ee)/2?Math.max(le,a.theta):Math.min(ee,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&w||i.object.isOrthographicCamera?a.radius=k(a.radius):a.radius=k(a.radius*c),C.setFromSpherical(a),C.applyQuaternion(Z),I.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let Y=!1;if(i.zoomToCursor&&w){let re=null;if(i.object.isPerspectiveCamera){const Me=C.length();re=k(Me*c);const Xe=Me-re;i.object.position.addScaledVector(x,Xe),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const Me=new N(E.x,E.y,0);Me.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Y=!0;const Xe=new N(E.x,E.y,0);Xe.unproject(i.object),i.object.position.sub(Xe).add(Me),i.object.updateMatrixWorld(),re=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;re!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(re).add(i.object.position):(Ol.origin.copy(i.object.position),Ol.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ol.direction))<Pb?e.lookAt(i.target):(d_.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ol.intersectPlane(d_,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),Y=!0);return c=1,w=!1,Y||Re.distanceToSquared(i.object.position)>o||8*(1-ye.dot(i.object.quaternion))>o||Te.distanceToSquared(i.target)>0?(i.dispatchEvent(u_),Re.copy(i.object.position),ye.copy(i.object.quaternion),Te.copy(i.target),Y=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",ke),i.domElement.removeEventListener("pointercancel",qe),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",Ue),i.domElement.removeEventListener("pointerup",qe),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",T),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new c_,l=new c_;let c=1;const u=new N,f=new Ne,d=new Ne,p=new Ne,_=new Ne,y=new Ne,m=new Ne,h=new Ne,v=new Ne,g=new Ne,x=new N,E=new Ne;let w=!1;const M=[],P={};function S(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function R(){return Math.pow(.95,i.zoomSpeed)}function W(C){l.theta-=C}function K(C){l.phi-=C}const Q=function(){const C=new N;return function(Z,Re){C.setFromMatrixColumn(Re,0),C.multiplyScalar(-Z),u.add(C)}}(),D=function(){const C=new N;return function(Z,Re){i.screenSpacePanning===!0?C.setFromMatrixColumn(Re,1):(C.setFromMatrixColumn(Re,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Z),u.add(C)}}(),X=function(){const C=new N;return function(Z,Re){const ye=i.domElement;if(i.object.isPerspectiveCamera){const Te=i.object.position;C.copy(Te).sub(i.target);let _e=C.length();_e*=Math.tan(i.object.fov/2*Math.PI/180),Q(2*Z*_e/ye.clientHeight,i.object.matrix),D(2*Re*_e/ye.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Q(Z*(i.object.right-i.object.left)/i.object.zoom/ye.clientWidth,i.object.matrix),D(Re*(i.object.top-i.object.bottom)/i.object.zoom/ye.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function U(C){if(!i.zoomToCursor)return;w=!0;const se=i.domElement.getBoundingClientRect(),Z=C.clientX-se.left,Re=C.clientY-se.top,ye=se.width,Te=se.height;E.x=Z/ye*2-1,E.y=-(Re/Te)*2+1,x.set(E.x,E.y,1).unproject(i.object).sub(i.object.position).normalize()}function k(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function F(C){f.set(C.clientX,C.clientY)}function L(C){U(C),h.set(C.clientX,C.clientY)}function B(C){_.set(C.clientX,C.clientY)}function ce(C){d.set(C.clientX,C.clientY),p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;W(2*Math.PI*p.x/se.clientHeight),K(2*Math.PI*p.y/se.clientHeight),f.copy(d),i.update()}function ae(C){v.set(C.clientX,C.clientY),g.subVectors(v,h),g.y>0?q(R()):g.y<0&&$(R()),h.copy(v),i.update()}function fe(C){y.set(C.clientX,C.clientY),m.subVectors(y,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(y),i.update()}function ge(C){U(C),C.deltaY<0?$(R()):C.deltaY>0&&q(R()),i.update()}function Ae(C){let se=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,i.keyPanSpeed),se=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(0,-i.keyPanSpeed),se=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(i.keyPanSpeed,0),se=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):X(-i.keyPanSpeed,0),se=!0;break}se&&(C.preventDefault(),i.update())}function Se(){if(M.length===1)f.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),se=.5*(M[0].pageY+M[1].pageY);f.set(C,se)}}function Ce(){if(M.length===1)_.set(M[0].pageX,M[0].pageY);else{const C=.5*(M[0].pageX+M[1].pageX),se=.5*(M[0].pageY+M[1].pageY);_.set(C,se)}}function Ze(){const C=M[0].pageX-M[1].pageX,se=M[0].pageY-M[1].pageY,Z=Math.sqrt(C*C+se*se);h.set(0,Z)}function we(){i.enableZoom&&Ze(),i.enablePan&&Ce()}function z(){i.enableZoom&&Ze(),i.enableRotate&&Se()}function jt(C){if(M.length==1)d.set(C.pageX,C.pageY);else{const Z=de(C),Re=.5*(C.pageX+Z.x),ye=.5*(C.pageY+Z.y);d.set(Re,ye)}p.subVectors(d,f).multiplyScalar(i.rotateSpeed);const se=i.domElement;W(2*Math.PI*p.x/se.clientHeight),K(2*Math.PI*p.y/se.clientHeight),f.copy(d)}function Ee(C){if(M.length===1)y.set(C.pageX,C.pageY);else{const se=de(C),Z=.5*(C.pageX+se.x),Re=.5*(C.pageY+se.y);y.set(Z,Re)}m.subVectors(y,_).multiplyScalar(i.panSpeed),X(m.x,m.y),_.copy(y)}function Pe(C){const se=de(C),Z=C.pageX-se.x,Re=C.pageY-se.y,ye=Math.sqrt(Z*Z+Re*Re);v.set(0,ye),g.set(0,Math.pow(v.y/h.y,i.zoomSpeed)),q(g.y),h.copy(v)}function Ie(C){i.enableZoom&&Pe(C),i.enablePan&&Ee(C)}function ft(C){i.enableZoom&&Pe(C),i.enableRotate&&jt(C)}function ke(C){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",Ue),i.domElement.addEventListener("pointerup",qe)),ie(C),C.pointerType==="touch"?H(C):Mt(C))}function Ue(C){i.enabled!==!1&&(C.pointerType==="touch"?ne(C):It(C))}function qe(C){ve(C),M.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",Ue),i.domElement.removeEventListener("pointerup",qe)),i.dispatchEvent(f_),s=r.NONE}function Mt(C){let se;switch(C.button){case 0:se=i.mouseButtons.LEFT;break;case 1:se=i.mouseButtons.MIDDLE;break;case 2:se=i.mouseButtons.RIGHT;break;default:se=-1}switch(se){case as.DOLLY:if(i.enableZoom===!1)return;L(C),s=r.DOLLY;break;case as.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;B(C),s=r.PAN}else{if(i.enableRotate===!1)return;F(C),s=r.ROTATE}break;case as.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;F(C),s=r.ROTATE}else{if(i.enablePan===!1)return;B(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yf)}function It(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ce(C);break;case r.DOLLY:if(i.enableZoom===!1)return;ae(C);break;case r.PAN:if(i.enablePan===!1)return;fe(C);break}}function b(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(yf),ge(C),i.dispatchEvent(f_))}function T(C){i.enabled===!1||i.enablePan===!1||Ae(C)}function H(C){switch(oe(C),M.length){case 1:switch(i.touches.ONE){case ls.ROTATE:if(i.enableRotate===!1)return;Se(),s=r.TOUCH_ROTATE;break;case ls.PAN:if(i.enablePan===!1)return;Ce(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ls.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;we(),s=r.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(yf)}function ne(C){switch(oe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;jt(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ee(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ie(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ft(C),i.update();break;default:s=r.NONE}}function J(C){i.enabled!==!1&&C.preventDefault()}function ie(C){M.push(C)}function ve(C){delete P[C.pointerId];for(let se=0;se<M.length;se++)if(M[se].pointerId==C.pointerId){M.splice(se,1);return}}function oe(C){let se=P[C.pointerId];se===void 0&&(se=new Ne,P[C.pointerId]=se),se.set(C.pageX,C.pageY)}function de(C){const se=C.pointerId===M[0].pointerId?M[1]:M[0];return P[se.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",ke),i.domElement.addEventListener("pointercancel",qe),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}function h_(n,e){if(e===_E)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),n;if(e===wd||e===ty){let t=n.getIndex();if(t===null){const o=[],a=n.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);n.setIndex(o),t=n.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),n}const i=t.count-2,r=[];if(e===wd)for(let o=1;o<=i;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<i;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=n.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),n}class Nb extends Ao{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new kb(t)}),this.register(function(t){return new jb(t)}),this.register(function(t){return new $b(t)}),this.register(function(t){return new Yb(t)}),this.register(function(t){return new zb(t)}),this.register(function(t){return new Hb(t)}),this.register(function(t){return new Vb(t)}),this.register(function(t){return new Gb(t)}),this.register(function(t){return new Fb(t)}),this.register(function(t){return new Wb(t)}),this.register(function(t){return new Bb(t)}),this.register(function(t){return new Xb(t)}),this.register(function(t){return new Ub(t)}),this.register(function(t){return new qb(t)}),this.register(function(t){return new Kb(t)})}load(e,t,i,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Nd.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Ry(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,r){let s;const o={},a={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===by){try{o[Ye.KHR_BINARY_GLTF]=new Zb(e)}catch(f){r&&r(f);return}s=JSON.parse(o[Ye.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new uC(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const f=this.pluginCallbacks[u](c);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[f.name]=f,o[f.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const f=s.extensionsUsed[u],d=s.extensionsRequired||[];switch(f){case Ye.KHR_MATERIALS_UNLIT:o[f]=new Ob;break;case Ye.KHR_DRACO_MESH_COMPRESSION:o[f]=new Qb(s,this.dracoLoader);break;case Ye.KHR_TEXTURE_TRANSFORM:o[f]=new Jb;break;case Ye.KHR_MESH_QUANTIZATION:o[f]=new eC;break;default:d.indexOf(f)>=0&&a[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(i,r)}parseAsync(e,t){const i=this;return new Promise(function(r,s){i.parse(e,t,r,s)})}}function Db(){let n={};return{get:function(e){return n[e]},add:function(e,t){n[e]=t},remove:function(e){delete n[e]},removeAll:function(){n={}}}}const Ye={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Ub{constructor(e){this.parser=e,this.name=Ye.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,r=t.length;i<r;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let r=t.cache.get(i);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],Xt);const f=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new xb(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Id(u),c.distance=f;break;case"spot":c=new _b(u),c.distance=f,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(i,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class Ob{constructor(){this.name=Ye.KHR_MATERIALS_UNLIT}getMaterialType(){return Br}extendParams(e,t,i){const r=[];e.color=new Le(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],Xt),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(i.assignTexture(e,"map",s.baseColorTexture,yt))}return Promise.all(r)}}class Fb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class kb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ne(a,a)}return Promise.all(s)}}class Bb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class zb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],Xt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",o.sheenColorTexture,yt)),o.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Hb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class Vb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],Xt),Promise.all(s)}}class Gb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class Wb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],Xt),o.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",o.specularColorTexture,yt)),Promise.all(s)}}class Xb{constructor(e){this.parser=e,this.name=Ye.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:Er}extendMaterialParams(e,t){const i=this.parser,r=i.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&s.push(i.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(s)}}class jb{constructor(e){this.parser=e,this.name=Ye.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,r=i.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class $b{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Yb{constructor(e){this.parser=e,this.name=Ye.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,r=i.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,o.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class qb{constructor(e){this.name=Ye.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const r=i.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,f=r.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,d,r.mode,r.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(p),u,f,d,r.mode,r.filter),p})})}else return null}}class Kb{constructor(e){this.name=Ye.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const r=t.meshes[i.mesh];for(const c of r.primitives)if(c.mode!==In.TRIANGLES&&c.mode!==In.TRIANGLE_STRIP&&c.mode!==In.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=i.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),f=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const _ of f){const y=new Fe,m=new N,h=new ni,v=new N(1,1,1),g=new QR(_.geometry,_.material,d);for(let x=0;x<d;x++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,x),l.ROTATION&&h.fromBufferAttribute(l.ROTATION,x),l.SCALE&&v.fromBufferAttribute(l.SCALE,x),g.setMatrixAt(x,y.compose(m,h,v));for(const x in l)if(x==="_COLOR_0"){const E=l[x];g.instanceColor=new Ld(E.array,E.itemSize,E.normalized)}else x!=="TRANSLATION"&&x!=="ROTATION"&&x!=="SCALE"&&_.geometry.setAttribute(x,l[x]);mt.prototype.copy.call(g,_),this.parser.assignFinalMaterial(g),p.push(g)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const by="glTF",Xo=12,p_={JSON:1313821514,BIN:5130562};class Zb{constructor(e){this.name=Ye.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Xo),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==by)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-Xo,s=new DataView(e,Xo);let o=0;for(;o<r;){const a=s.getUint32(o,!0);o+=4;const l=s.getUint32(o,!0);if(o+=4,l===p_.JSON){const c=new Uint8Array(e,Xo+o,a);this.content=i.decode(c)}else if(l===p_.BIN){const c=Xo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Qb{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ye.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const f=Dd[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Dd[u]||u.toLowerCase();if(o[u]!==void 0){const d=i.accessors[e.attributes[u]],p=qs[d.componentType];c[f]=p.name,l[f]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(d){for(const p in d.attributes){const _=d.attributes[p],y=l[p];y!==void 0&&(_.normalized=y)}f(d)},a,c)})})}}class Jb{constructor(){this.name=Ye.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eC{constructor(){this.name=Ye.KHR_MESH_QUANTIZATION}}class Cy extends Ha{constructor(e,t,i,r){super(e,t,i,r)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=i[s+o];return t}interpolate_(e,t,i,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=r-t,f=(i-t)/u,d=f*f,p=d*f,_=e*c,y=_-c,m=-2*p+3*d,h=p-d,v=1-m,g=h-d+f;for(let x=0;x!==a;x++){const E=o[y+x+a],w=o[y+x+l]*u,M=o[_+x+a],P=o[_+x]*u;s[x]=v*E+g*w+m*M+h*P}return s}}const tC=new ni;class nC extends Cy{interpolate_(e,t,i,r){const s=super.interpolate_(e,t,i,r);return tC.fromArray(s).normalize().toArray(s),s}}const In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},qs={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},m_={9728:Ft,9729:fn,9984:Td,9985:Yv,9986:Kl,9987:Jr},g_={33071:Un,33648:bc,10497:oo},xf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Dd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iC={CUBICSPLINE:void 0,LINEAR:lo,STEP:Pa},Sf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function rC(n){return n.DefaultMaterial===void 0&&(n.DefaultMaterial=new Zh({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),n.DefaultMaterial}function Lr(n,e,t){for(const i in t.extensions)n[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Zi(n,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(n.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function sC(n,e,t){let i=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const f=e[c];if(f.POSITION!==void 0&&(i=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),i&&r&&s)break}if(!i&&!r&&!s)return Promise.resolve(n);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const f=e[c];if(i){const d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):n.attributes.position;o.push(d)}if(r){const d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):n.attributes.normal;a.push(d)}if(s){const d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):n.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],f=c[1],d=c[2];return i&&(n.morphAttributes.position=u),r&&(n.morphAttributes.normal=f),s&&(n.morphAttributes.color=d),n.morphTargetsRelative=!0,n})}function oC(n,e){if(n.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)n.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(n.morphTargetInfluences.length===t.length){n.morphTargetDictionary={};for(let i=0,r=t.length;i<r;i++)n.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aC(n){let e;const t=n.extensions&&n.extensions[Ye.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Mf(t.attributes):e=n.indices+":"+Mf(n.attributes)+":"+n.mode,n.targets!==void 0)for(let i=0,r=n.targets.length;i<r;i++)e+=":"+Mf(n.targets[i]);return e}function Mf(n){let e="";const t=Object.keys(n).sort();for(let i=0,r=t.length;i<r;i++)e+=t[i]+":"+n[t[i]]+";";return e}function Ud(n){switch(n){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lC(n){return n.search(/\.jpe?g($|\?)/i)>0||n.search(/^data\:image\/jpeg/)===0?"image/jpeg":n.search(/\.webp($|\?)/i)>0||n.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const cC=new Fe;class uC{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Db,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,r=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||r&&s<98?this.textureLoader=new mb(this.options.manager):this.textureLoader=new Sb(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ry(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:i,userData:{}};return Lr(s,a,r),Zi(a,r),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(i[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const r=i.clone(),s=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())s(u,a.children[c])};return s(i,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const r=e(t[i]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let r=this.cache.get(i);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(i,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return i.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ye.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){i.load(Nd.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const r=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+r)})}loadAccessor(e){const t=this,i=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const o=xf[r.type],a=qs[r.componentType],l=r.normalized===!0,c=new a(r.count*o);return Promise.resolve(new Gt(c,o,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],l=xf[r.type],c=qs[r.componentType],u=c.BYTES_PER_ELEMENT,f=u*l,d=r.byteOffset||0,p=r.bufferView!==void 0?i.bufferViews[r.bufferView].byteStride:void 0,_=r.normalized===!0;let y,m;if(p&&p!==f){const h=Math.floor(d/p),v="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+h+":"+r.count;let g=t.cache.get(v);g||(y=new c(a,h*p,r.count*p/u),g=new $R(y,p/u),t.cache.add(v,g)),m=new Yh(g,l,d%p/u,_)}else a===null?y=new c(r.count*l):y=new c(a,d,r.count*l),m=new Gt(y,l,_);if(r.sparse!==void 0){const h=xf.SCALAR,v=qs[r.sparse.indices.componentType],g=r.sparse.indices.byteOffset||0,x=r.sparse.values.byteOffset||0,E=new v(o[1],g,r.sparse.count*h),w=new c(o[2],x,r.sparse.count*l);a!==null&&(m=new Gt(m.array.slice(),m.itemSize,m.normalized));for(let M=0,P=E.length;M<P;M++){const S=E[M];if(m.setX(S,w[M*l]),l>=2&&m.setY(S,w[M*l+1]),l>=3&&m.setZ(S,w[M*l+2]),l>=4&&m.setW(S,w[M*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const l=i.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const r=this,s=this.json,o=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(s.samplers||{})[o.sampler]||{};return u.magFilter=m_[d.magFilter]||fn,u.minFilter=m_[d.minFilter]||Jr,u.wrapS=g_[d.wrapS]||oo,u.wrapT=g_[d.wrapT]||oo,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=i.getDependency("bufferView",o.bufferView).then(function(f){c=!0;const d=new Blob([f],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(f){return new Promise(function(d,p){let _=d;t.isImageBitmapLoader===!0&&(_=function(y){const m=new Vt(y);m.needsUpdate=!0,d(m)}),t.load(Nd.resolveURL(f,s.path),_,void 0,p)})}).then(function(f){return c===!0&&a.revokeObjectURL(l),f.userData.mimeType=o.mimeType||lC(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),f});return this.sourceCache[e]=u,u}assignTexture(e,t,i,r){const s=this;return this.getDependency("texture",i.index).then(function(o){if(!o)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(o=o.clone(),o.channel=i.texCoord),s.extensions[Ye.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Ye.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(o);o=s.extensions[Ye.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,l)}}return r!==void 0&&(o.colorSpace=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ty,Jn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new Ey,Jn.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,this.cache.add(a,l)),i=l}if(r||s||o){let a="ClonedMaterial:"+i.uuid+":";r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),o&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}e.material=i}getMaterialType(){return Zh}loadMaterial(e){const t=this,i=this.json,r=this.extensions,s=i.materials[e];let o;const a={},l=s.extensions||{},c=[];if(l[Ye.KHR_MATERIALS_UNLIT]){const f=r[Ye.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),c.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const d=f.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],Xt),a.opacity=d[3]}f.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",f.baseColorTexture,yt)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=ui);const u=s.alphaMode||Sf.OPAQUE;if(u===Sf.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Sf.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==Br&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new Ne(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}if(s.occlusionTexture!==void 0&&o!==Br&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==Br){const f=s.emissiveFactor;a.emissive=new Le().setRGB(f[0],f[1],f[2],Xt)}return s.emissiveTexture!==void 0&&o!==Br&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,yt)),Promise.all(c).then(function(){const f=new o(a);return s.name&&(f.name=s.name),Zi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Lr(r,f,s),f})}createUniqueName(e){const t=tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,i=this.extensions,r=this.primitiveCache;function s(a){return i[Ye.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return __(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=aC(c),f=r[u];if(f)o.push(f.promise);else{let d;c.extensions&&c.extensions[Ye.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=__(new ii,c,t),r[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,i=this.json,r=this.extensions,s=i.meshes[e],o=s.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?rC(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],f=[];for(let p=0,_=u.length;p<_;p++){const y=u[p],m=o[p];let h;const v=c[p];if(m.mode===In.TRIANGLES||m.mode===In.TRIANGLE_STRIP||m.mode===In.TRIANGLE_FAN||m.mode===void 0)h=s.isSkinnedMesh===!0?new qR(y,v):new on(y,v),h.isSkinnedMesh===!0&&h.normalizeSkinWeights(),m.mode===In.TRIANGLE_STRIP?h.geometry=h_(h.geometry,ty):m.mode===In.TRIANGLE_FAN&&(h.geometry=h_(h.geometry,wd));else if(m.mode===In.LINES)h=new JR(y,v);else if(m.mode===In.LINE_STRIP)h=new Kh(y,v);else if(m.mode===In.LINE_LOOP)h=new eb(y,v);else if(m.mode===In.POINTS)h=new tb(y,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(h.geometry.morphAttributes).length>0&&oC(h,s),h.name=t.createUniqueName(s.name||"mesh_"+e),Zi(h,s),m.extensions&&Lr(r,h,m),t.assignFinalMaterial(h),f.push(h)}for(let p=0,_=f.length;p<_;p++)t.associations.set(f[p],{meshes:e,primitives:p});if(f.length===1)return s.extensions&&Lr(r,f[0],s),f[0];const d=new sr;s.extensions&&Lr(r,d,s),t.associations.set(d,{meshes:e});for(let p=0,_=f.length;p<_;p++)d.add(f[p]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],r=i[i.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new sn(Gh.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):i.type==="orthographic"&&(t=new jh(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Zi(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let r=0,s=t.joints.length;r<s;r++)i.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(r){const s=r.pop(),o=r,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const f=o[c];if(f){a.push(f);const d=new Fe;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new qh(a,l)})}loadAnimation(e){const t=this.json,i=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let f=0,d=r.channels.length;f<d;f++){const p=r.channels[f],_=r.samplers[p.sampler],y=p.target,m=y.node,h=r.parameters!==void 0?r.parameters[_.input]:_.input,v=r.parameters!==void 0?r.parameters[_.output]:_.output;y.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",h)),l.push(this.getDependency("accessor",v)),c.push(_),u.push(y))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(f){const d=f[0],p=f[1],_=f[2],y=f[3],m=f[4],h=[];for(let v=0,g=d.length;v<g;v++){const x=d[v],E=p[v],w=_[v],M=y[v],P=m[v];if(x===void 0)continue;x.updateMatrix&&x.updateMatrix();const S=i._createAnimationTracks(x,E,w,M,P);if(S)for(let R=0;R<S.length;R++)h.push(S[R])}return new lb(s,void 0,h)})}createNodeMesh(e){const t=this.json,i=this,r=t.nodes[e];return r.mesh===void 0?null:i.getDependency("mesh",r.mesh).then(function(s){const o=i._getNodeRef(i.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=r.weights.length;l<c;l++)a.morphTargetInfluences[l]=r.weights[l]}),o})}loadNode(e){const t=this.json,i=this,r=t.nodes[e],s=i._loadNodeShallow(e),o=[],a=r.children||[];for(let c=0,u=a.length;c<u;c++)o.push(i.getDependency("node",a[c]));const l=r.skin===void 0?Promise.resolve(null):i.getDependency("skin",r.skin);return Promise.all([s,Promise.all(o),l]).then(function(c){const u=c[0],f=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,cC)});for(let p=0,_=f.length;p<_;p++)u.add(f[p]);return u})}_loadNodeShallow(e){const t=this.json,i=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"",a=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(s.isBone===!0?u=new Sy:c.length>1?u=new sr:c.length===1?u=c[0]:u=new mt,u!==c[0])for(let f=0,d=c.length;f<d;f++)u.add(c[f]);if(s.name&&(u.userData.name=s.name,u.name=o),Zi(u,s),s.extensions&&Lr(i,u,s),s.matrix!==void 0){const f=new Fe;f.fromArray(s.matrix),u.applyMatrix4(f)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,i=this.json.scenes[e],r=this,s=new sr;i.name&&(s.name=r.createUniqueName(i.name)),Zi(s,i),i.extensions&&Lr(t,s,i);const o=i.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(r.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,f=l.length;u<f;u++)s.add(l[u]);const c=u=>{const f=new Map;for(const[d,p]of r.associations)(d instanceof Jn||d instanceof Vt)&&f.set(d,p);return u.traverse(d=>{const p=r.associations.get(d);p!=null&&f.set(d,p)}),f};return r.associations=c(s),s})}_createAnimationTracks(e,t,i,r,s){const o=[],a=e.name?e.name:e.uuid,l=[];ji[s.path]===ji.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ji[s.path]){case ji.weights:c=fo;break;case ji.rotation:c=ns;break;case ji.position:case ji.scale:c=ho;break;default:switch(i.itemSize){case 1:c=fo;break;case 2:case 3:default:c=ho;break}break}const u=r.interpolation!==void 0?iC[r.interpolation]:lo,f=this._getArrayFromAccessor(i);for(let d=0,p=l.length;d<p;d++){const _=new c(l[d]+"."+ji[s.path],t.array,f,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const i=Ud(t.constructor),r=new Float32Array(t.length);for(let s=0,o=t.length;s<o;s++)r[s]=t[s]*i;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){const r=this instanceof ns?nC:Cy;return new r(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function fC(n,e,t){const i=e.attributes,r=new Bi;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(r.set(new N(l[0],l[1],l[2]),new N(c[0],c[1],c[2])),a.normalized){const u=Ud(qs[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new N,l=new N;for(let c=0,u=s.length;c<u;c++){const f=s[c];if(f.POSITION!==void 0){const d=t.json.accessors[f.POSITION],p=d.min,_=d.max;if(p!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(_[2]))),d.normalized){const y=Ud(qs[d.componentType]);l.multiplyScalar(y)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}n.boundingBox=r;const o=new mi;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,n.boundingSphere=o}function __(n,e,t){const i=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(l){n.setAttribute(a,l)})}for(const o in i){const a=Dd[o]||o.toLowerCase();a in n.attributes||r.push(s(i[o],a))}if(e.indices!==void 0&&!n.index){const o=t.getDependency("accessor",e.indices).then(function(a){n.setIndex(a)});r.push(o)}return et.workingColorSpace!==Xt&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),Zi(n,e),fC(n,e,t),Promise.all(r).then(function(){return e.targets!==void 0?sC(n,e.targets,t):n})}const Qi="_batch_id_",dC=new Fe,v_=new Fe().set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1),hC=`
#ifdef BATCHING
	attribute float ${Qi};
	uniform highp sampler2D batchingTexture;
	uniform int batchingTextureSize;
	mat4 getBatchingMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( batchingTextureSize ) );
		float y = floor( j / float( batchingTextureSize ) );
		float dx = 1.0 / float( batchingTextureSize );
		float dy = 1.0 / float( batchingTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( batchingTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( batchingTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( batchingTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( batchingTexture, vec2( dx * ( x + 3.5 ), y ) );
		return mat4( v1, v2, v3, v4 );
	}
#endif
`,pC=`
#ifdef BATCHING
	mat4 batchingMatrix = getBatchingMatrix( ${Qi} );
#endif
`,mC=`
#ifdef BATCHING
	objectNormal = vec4( batchingMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( batchingMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif
`,gC=`
#ifdef BATCHING
	transformed = ( batchingMatrix * vec4( transformed, 1.0 ) ).xyz;
#endif
`;function _C(n,e,t=0){const i=e.itemSize;if(n.isInterleavedBufferAttribute||n.array.constructor!==e.array.constructor){const r=n.count;for(let s=0;s<r;s++)for(let o=0;o<i;o++)e.setComponent(s+t,o,n.getComponent(s,o))}else e.array.set(n.array,t*i);e.needsUpdate=!0}class vC extends on{constructor(e,t,i=t*2,r){super(new ii,r),this._vertexStarts=[],this._vertexCounts=[],this._indexStarts=[],this._indexCounts=[],this._visible=[],this._active=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=i,this._geometryInitialized=!1,this._geometryCount=0,this._vertexCount=0,this._indexCount=0,this._matrices=[],this._matricesTexture=null,this.frustumCulled=!1,this._customUniforms={batchingTexture:{value:null},batchingTextureSize:{value:0}},this._initMatricesTexture(),this._initShader()}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Gh.ceilPowerOfTwo(e),e=Math.max(e,4);const t=new Float32Array(e*e*4),i=new My(t,e,e,Tn,di);this._matricesTexture=i,this._customUniforms.batchingTexture.value=this._matricesTexture,this._customUniforms.batchingTextureSize.value=e}_initShader(){const e=this.material,t=e.onBeforeCompile,i=this._customUniforms;e.onBeforeCompile=function(s,o){s.vertexShader=s.vertexShader.replace("#include <skinning_pars_vertex>",`#include <skinning_pars_vertex>
`+hC).replace("#include <skinnormal_vertex>",`#include <skinnormal_vertex>
`+pC+mC).replace("#include <skinning_vertex>",`#include <skinning_vertex>
`+gC);for(const a in i)s.uniforms[a]=i[a];t.call(this,s,o)},e.defines=e.defines||{},e.defines.BATCHING=!1}_initializeGeometry(e){const t=this.geometry,i=this._maxVertexCount,r=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const a in e.attributes){const l=e.getAttribute(a),{array:c,itemSize:u,normalized:f}=l,d=new c.constructor(i*u),p=new l.constructor(d,u,f);p.setUsage(l.usage),t.setAttribute(a,p)}if(e.getIndex()!==null){const a=i>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new Gt(a,1))}const o=r>65536?new Uint32Array(i):new Uint16Array(i);t.setAttribute(Qi,new Gt(o,1)),this._geometryInitialized=!0}}getGeometryCount(){return this._geometryCount}getVertexCount(){return this._vertexCount}getIndexCount(){return this._indexCount}applyGeometry(e){if(this._initializeGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");if(e.getAttribute(Qi))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Qi}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const w in t.attributes){if(w===Qi)continue;if(!e.hasAttribute(w))throw new Error(`BatchedMesh: Added geometry missing "${w}". All geometries must have consistent attributes.`);const M=e.getAttribute(w),P=t.getAttribute(w);if(M.itemSize!==P.itemSize||M.normalized!==P.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}const i=e.getAttribute("position"),r=this._vertexCount,s=this._indexCount,o=this._maxVertexCount,a=this._maxIndexCount;if(e.getIndex()!==null&&s+e.getIndex().count>a||r+i.count>o)throw new Error("BatchedMesh: Added geometry is larger than available buffer capacity.");const l=this._visible,c=this._active,u=this._matricesTexture,f=this._matrices,d=this._matricesTexture.image.data,p=this._indexCounts,_=this._indexStarts,y=this._vertexCounts,m=this._vertexStarts,h=t.getIndex()!==null,v=t.getIndex(),g=e.getIndex();m.push(r),y.push(i.count);for(const w in t.attributes){if(w===Qi)continue;const M=e.getAttribute(w),P=t.getAttribute(w);_C(M,P,r)}if(h){_.push(s),p.push(g.count);for(let w=0;w<g.count;w++)v.setX(s+w,r+g.getX(w));this._indexCount+=g.count,v.needsUpdate=!0}const x=this._geometryCount;this._geometryCount++;const E=t.getAttribute(Qi);for(let w=0;w<i.count;w++)E.setX(this._vertexCount+w,x);return E.needsUpdate=!0,this._vertexCount+=i.count,l.push(!0),c.push(!0),f.push(new Fe),dC.toArray(d,x*16),u.needsUpdate=!0,x}deleteGeometry(e){const t=this._active,i=this._matricesTexture.image.data,r=this._matricesTexture;return e>=t.length||t[e]===!1?this:(t[e]=!1,v_.toArray(i,e*16),r.needsUpdate=!0,this)}optimize(){throw new Error("BatchedMesh: Optimize function not implemented.")}setMatrixAt(e,t){const i=this._visible,r=this._active,s=this._matricesTexture,o=this._matrices,a=this._matricesTexture.image.data;return e>=o.length||r[e]===!1?this:(i[e]===!0&&(t.toArray(a,e*16),s.needsUpdate=!0),o[e].copy(t),this)}getMatrixAt(e,t){const i=this._matrices,r=this._active;return e>=i.length||r[e]===!1?t:t.copy(i[e])}setVisibleAt(e,t){const i=this._visible,r=this._active,s=this._matricesTexture,o=this._matrices,a=this._matricesTexture.image.data;return e>=i.length||r[e]===!1||i[e]===t?this:(t===!0?o[e].toArray(a,e*16):v_.toArray(a,e*16),s.needsUpdate=!0,i[e]=t,this)}getVisibleAt(e){const t=this._visible,i=this._active;return e>=t.length||i[e]===!1?!1:t[e]}raycast(){console.warn("BatchedMesh: Raycast function not implemented.")}copy(){throw new Error("BatchedMesh: Copy function not implemented.")}toJSON(){throw new Error("BatchedMesh: toJSON function not implemented.")}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this}onBeforeRender(e,t,i,r,s){s.defines.BATCHING=!0}onAfterRender(e,t,i,r,s){s.defines.BATCHING=!1}}var fa=function(){var n=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(u){u.preventDefault(),i(++n%e.children.length)},!1);function t(u){return e.appendChild(u.dom),u}function i(u){for(var f=0;f<e.children.length;f++)e.children[f].style.display=f===u?"block":"none";n=u}var r=(performance||Date).now(),s=r,o=0,a=t(new fa.Panel("FPS","#0ff","#002")),l=t(new fa.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new fa.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){r=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(l.update(u-r,200),u>=s+1e3&&(a.update(o*1e3/(u-s),100),s=u,o=0,c)){var f=performance.memory;c.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){r=this.end()},domElement:e,setMode:i}};fa.Panel=function(n,e,t){var i=1/0,r=0,s=Math.round,o=s(window.devicePixelRatio||1),a=80*o,l=48*o,c=3*o,u=2*o,f=3*o,d=15*o,p=74*o,_=30*o,y=document.createElement("canvas");y.width=a,y.height=l,y.style.cssText="width:80px;height:48px";var m=y.getContext("2d");return m.font="bold "+9*o+"px Helvetica,Arial,sans-serif",m.textBaseline="top",m.fillStyle=t,m.fillRect(0,0,a,l),m.fillStyle=e,m.fillText(n,c,u),m.fillRect(f,d,p,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(f,d,p,_),{dom:y,update:function(h,v){i=Math.min(i,h),r=Math.max(r,h),m.fillStyle=t,m.globalAlpha=1,m.fillRect(0,0,a,d),m.fillStyle=e,m.fillText(s(h)+" "+n+" ("+s(i)+"-"+s(r)+")",c,u),m.drawImage(y,f+o,d,p-o,_,f,d,p-o,_),m.fillRect(f+p-o,d,o,_),m.fillStyle=t,m.globalAlpha=.9,m.fillRect(f+p-o,d,o,s((1-h/v)*_))}}};const yC=fa,jo=100,xC=()=>{const n=_r.useRef(null);return _r.useEffect(()=>{let e,t,i,r,s,o;const a=new N,l=new rr,c=new ni,u=new N,f=S=>{do a.x=Math.random()*100-50,a.y=Math.random()*100-50,a.z=Math.random()*100-50;while(Math.abs(a.x)<=6||Math.abs(a.y)<=6||Math.abs(a.z)<=6);return l.x=Math.random()*2+Math.PI,l.y=Math.random()*2+Math.PI,l.z=Math.random()*2+Math.PI,c.setFromEuler(l),u.x=u.y=u.z=6,S.compose(a,c,u)},d=S=>(S.x=Math.random()*.01,S.y=Math.random()*.01,S.z=Math.random()*.01,S),p=()=>new gf({color:16777215,shininess:20}),_=()=>{o&&(i.remove(o),o.dispose&&o.dispose())},y=()=>{const S=new Id(16054008,900);S.position.x=Math.sin(Date.now()*.1),S.position.y=Math.cos(Date.now()*.1),S.distance=900,i.add(S),P.position.copy(e.position),i.add(P)},m=()=>{_(),g()},h="/src/assets/lovly_face.glb";function v(){const S=new Nb,R=new sr;S.load(h,W=>{const K=W.scene.children[0].children[0],Q=W.scene.children[0].children[1],D=K.geometry,X=Q.geometry;for(let q=0;q<jo;q++){const $=new gf({color:16763180,shininess:20}),U=new gf({color:16730441,shininess:20}),k=new on(D,$),F=new on(X,U);k.position.set(0,0,0),F.position.copy(k.position),f(k.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),F.matrix.copy(k.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale),k.userData.rotationSpeed=d(new rr),F.userData.rotationSpeed=d(new rr),R.add(k),R.add(F)}i.add(R)})}const g=()=>{const S=jo,R=jo*512,W=jo*1024,K=new rr;o=new vC(S,R,W,p()),o.userData.rotationSpeeds=[];for(let Q=0;Q<jo;Q++){const D=new Fe;D.makeRotationFromEuler(d(K)),o.userData.rotationSpeeds.push(D)}i.add(o)},x=()=>{var W;const S=window.innerWidth,R=window.innerHeight;e=new sn(70,S/R,1,100),e.position.z=66,r=new xy({antialias:!0}),r.setPixelRatio(window.devicePixelRatio),r.setSize(S,R),i=new jR,i.background=new Le(789516),t=new Ib(e,r.domElement),t.autoRotate=!0,t.autoRotateSpeed=1,s=new yC,window.addEventListener("resize",E),n.current&&!n.current.hasChildNodes()&&((W=n.current)==null||W.appendChild(r.domElement))},E=()=>{const S=window.innerWidth,R=window.innerHeight;e.aspect=S/R,e.updateProjectionMatrix(),r.setSize(S,R)},w=()=>{r.render(i,e)},M=()=>{requestAnimationFrame(M),t.update(),s.update(),P.position.copy(e.position),w()},P=new Id(16054008,1600);return x(),y(),m(),v(),M(),()=>{_()}},[]),Je.jsx("div",{ref:n})};var hn=function(){return hn=Object.assign||function(e){for(var t,i=1,r=arguments.length;i<r;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},hn.apply(this,arguments)};function Dc(n,e,t){if(t||arguments.length===2)for(var i=0,r=e.length,s;i<r;i++)(s||!(i in e))&&(s||(s=Array.prototype.slice.call(e,0,i)),s[i]=e[i]);return n.concat(s||Array.prototype.slice.call(e))}var lt="-ms-",da="-moz-",Qe="-webkit-",Ly="comm",nu="rule",np="decl",SC="@import",Py="@keyframes",MC="@layer",EC=Math.abs,ip=String.fromCharCode,Od=Object.assign;function TC(n,e){return Ot(n,0)^45?(((e<<2^Ot(n,0))<<2^Ot(n,1))<<2^Ot(n,2))<<2^Ot(n,3):0}function Iy(n){return n.trim()}function Ai(n,e){return(n=e.exec(n))?n[0]:n}function He(n,e,t){return n.replace(e,t)}function Ql(n,e){return n.indexOf(e)}function Ot(n,e){return n.charCodeAt(e)|0}function mo(n,e,t){return n.slice(e,t)}function li(n){return n.length}function Ny(n){return n.length}function Qo(n,e){return e.push(n),n}function wC(n,e){return n.map(e).join("")}function y_(n,e){return n.filter(function(t){return!Ai(t,e)})}var iu=1,go=1,Dy=0,Hn=0,At=0,Ro="";function ru(n,e,t,i,r,s,o,a){return{value:n,root:e,parent:t,type:i,props:r,children:s,line:iu,column:go,length:o,return:"",siblings:a}}function $i(n,e){return Od(ru("",null,null,"",null,null,0,n.siblings),n,{length:-n.length},e)}function As(n){for(;n.root;)n=$i(n.root,{children:[n]});Qo(n,n.siblings)}function AC(){return At}function RC(){return At=Hn>0?Ot(Ro,--Hn):0,go--,At===10&&(go=1,iu--),At}function ei(){return At=Hn<Dy?Ot(Ro,Hn++):0,go++,At===10&&(go=1,iu++),At}function jr(){return Ot(Ro,Hn)}function Jl(){return Hn}function su(n,e){return mo(Ro,n,e)}function Fd(n){switch(n){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function bC(n){return iu=go=1,Dy=li(Ro=n),Hn=0,[]}function CC(n){return Ro="",n}function Ef(n){return Iy(su(Hn-1,kd(n===91?n+2:n===40?n+1:n)))}function LC(n){for(;(At=jr())&&At<33;)ei();return Fd(n)>2||Fd(At)>3?"":" "}function PC(n,e){for(;--e&&ei()&&!(At<48||At>102||At>57&&At<65||At>70&&At<97););return su(n,Jl()+(e<6&&jr()==32&&ei()==32))}function kd(n){for(;ei();)switch(At){case n:return Hn;case 34:case 39:n!==34&&n!==39&&kd(At);break;case 40:n===41&&kd(n);break;case 92:ei();break}return Hn}function IC(n,e){for(;ei()&&n+At!==57;)if(n+At===84&&jr()===47)break;return"/*"+su(e,Hn-1)+"*"+ip(n===47?n:ei())}function NC(n){for(;!Fd(jr());)ei();return su(n,Hn)}function DC(n){return CC(ec("",null,null,null,[""],n=bC(n),0,[0],n))}function ec(n,e,t,i,r,s,o,a,l){for(var c=0,u=0,f=o,d=0,p=0,_=0,y=1,m=1,h=1,v=0,g="",x=r,E=s,w=i,M=g;m;)switch(_=v,v=ei()){case 40:if(_!=108&&Ot(M,f-1)==58){Ql(M+=He(Ef(v),"&","&\f"),"&\f")!=-1&&(h=-1);break}case 34:case 39:case 91:M+=Ef(v);break;case 9:case 10:case 13:case 32:M+=LC(_);break;case 92:M+=PC(Jl()-1,7);continue;case 47:switch(jr()){case 42:case 47:Qo(UC(IC(ei(),Jl()),e,t,l),l);break;default:M+="/"}break;case 123*y:a[c++]=li(M)*h;case 125*y:case 59:case 0:switch(v){case 0:case 125:m=0;case 59+u:h==-1&&(M=He(M,/\f/g,"")),p>0&&li(M)-f&&Qo(p>32?S_(M+";",i,t,f-1,l):S_(He(M," ","")+";",i,t,f-2,l),l);break;case 59:M+=";";default:if(Qo(w=x_(M,e,t,c,u,r,a,g,x=[],E=[],f,s),s),v===123)if(u===0)ec(M,e,w,w,x,s,f,a,E);else switch(d===99&&Ot(M,3)===110?100:d){case 100:case 108:case 109:case 115:ec(n,w,w,i&&Qo(x_(n,w,w,0,0,r,a,g,r,x=[],f,E),E),r,E,f,a,i?x:E);break;default:ec(M,w,w,w,[""],E,0,a,E)}}c=u=p=0,y=h=1,g=M="",f=o;break;case 58:f=1+li(M),p=_;default:if(y<1){if(v==123)--y;else if(v==125&&y++==0&&RC()==125)continue}switch(M+=ip(v),v*y){case 38:h=u>0?1:(M+="\f",-1);break;case 44:a[c++]=(li(M)-1)*h,h=1;break;case 64:jr()===45&&(M+=Ef(ei())),d=jr(),u=f=li(g=M+=NC(Jl())),v++;break;case 45:_===45&&li(M)==2&&(y=0)}}return s}function x_(n,e,t,i,r,s,o,a,l,c,u,f){for(var d=r-1,p=r===0?s:[""],_=Ny(p),y=0,m=0,h=0;y<i;++y)for(var v=0,g=mo(n,d+1,d=EC(m=o[y])),x=n;v<_;++v)(x=Iy(m>0?p[v]+" "+g:He(g,/&\f/g,p[v])))&&(l[h++]=x);return ru(n,e,t,r===0?nu:a,l,c,u,f)}function UC(n,e,t,i){return ru(n,e,t,Ly,ip(AC()),mo(n,2,-2),0,i)}function S_(n,e,t,i,r){return ru(n,e,t,np,mo(n,0,i),mo(n,i+1,-1),i,r)}function Uy(n,e,t){switch(TC(n,e)){case 5103:return Qe+"print-"+n+n;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return Qe+n+n;case 4789:return da+n+n;case 5349:case 4246:case 4810:case 6968:case 2756:return Qe+n+da+n+lt+n+n;case 5936:switch(Ot(n,e+11)){case 114:return Qe+n+lt+He(n,/[svh]\w+-[tblr]{2}/,"tb")+n;case 108:return Qe+n+lt+He(n,/[svh]\w+-[tblr]{2}/,"tb-rl")+n;case 45:return Qe+n+lt+He(n,/[svh]\w+-[tblr]{2}/,"lr")+n}case 6828:case 4268:case 2903:return Qe+n+lt+n+n;case 6165:return Qe+n+lt+"flex-"+n+n;case 5187:return Qe+n+He(n,/(\w+).+(:[^]+)/,Qe+"box-$1$2"+lt+"flex-$1$2")+n;case 5443:return Qe+n+lt+"flex-item-"+He(n,/flex-|-self/g,"")+(Ai(n,/flex-|baseline/)?"":lt+"grid-row-"+He(n,/flex-|-self/g,""))+n;case 4675:return Qe+n+lt+"flex-line-pack"+He(n,/align-content|flex-|-self/g,"")+n;case 5548:return Qe+n+lt+He(n,"shrink","negative")+n;case 5292:return Qe+n+lt+He(n,"basis","preferred-size")+n;case 6060:return Qe+"box-"+He(n,"-grow","")+Qe+n+lt+He(n,"grow","positive")+n;case 4554:return Qe+He(n,/([^-])(transform)/g,"$1"+Qe+"$2")+n;case 6187:return He(He(He(n,/(zoom-|grab)/,Qe+"$1"),/(image-set)/,Qe+"$1"),n,"")+n;case 5495:case 3959:return He(n,/(image-set\([^]*)/,Qe+"$1$`$1");case 4968:return He(He(n,/(.+:)(flex-)?(.*)/,Qe+"box-pack:$3"+lt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+Qe+n+n;case 4200:if(!Ai(n,/flex-|baseline/))return lt+"grid-column-align"+mo(n,e)+n;break;case 2592:case 3360:return lt+He(n,"template-","")+n;case 4384:case 3616:return t&&t.some(function(i,r){return e=r,Ai(i.props,/grid-\w+-end/)})?~Ql(n+(t=t[e].value),"span")?n:lt+He(n,"-start","")+n+lt+"grid-row-span:"+(~Ql(t,"span")?Ai(t,/\d+/):+Ai(t,/\d+/)-+Ai(n,/\d+/))+";":lt+He(n,"-start","")+n;case 4896:case 4128:return t&&t.some(function(i){return Ai(i.props,/grid-\w+-start/)})?n:lt+He(He(n,"-end","-span"),"span ","")+n;case 4095:case 3583:case 4068:case 2532:return He(n,/(.+)-inline(.+)/,Qe+"$1$2")+n;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(li(n)-1-e>6)switch(Ot(n,e+1)){case 109:if(Ot(n,e+4)!==45)break;case 102:return He(n,/(.+:)(.+)-([^]+)/,"$1"+Qe+"$2-$3$1"+da+(Ot(n,e+3)==108?"$3":"$2-$3"))+n;case 115:return~Ql(n,"stretch")?Uy(He(n,"stretch","fill-available"),e,t)+n:n}break;case 5152:case 5920:return He(n,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(i,r,s,o,a,l,c){return lt+r+":"+s+c+(o?lt+r+"-span:"+(a?l:+l-+s)+c:"")+n});case 4949:if(Ot(n,e+6)===121)return He(n,":",":"+Qe)+n;break;case 6444:switch(Ot(n,Ot(n,14)===45?18:11)){case 120:return He(n,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+Qe+(Ot(n,14)===45?"inline-":"")+"box$3$1"+Qe+"$2$3$1"+lt+"$2box$3")+n;case 100:return He(n,":",":"+lt)+n}break;case 5719:case 2647:case 2135:case 3927:case 2391:return He(n,"scroll-","scroll-snap-")+n}return n}function Uc(n,e){for(var t="",i=0;i<n.length;i++)t+=e(n[i],i,n,e)||"";return t}function OC(n,e,t,i){switch(n.type){case MC:if(n.children.length)break;case SC:case np:return n.return=n.return||n.value;case Ly:return"";case Py:return n.return=n.value+"{"+Uc(n.children,i)+"}";case nu:if(!li(n.value=n.props.join(",")))return""}return li(t=Uc(n.children,i))?n.return=n.value+"{"+t+"}":""}function FC(n){var e=Ny(n);return function(t,i,r,s){for(var o="",a=0;a<e;a++)o+=n[a](t,i,r,s)||"";return o}}function kC(n){return function(e){e.root||(e=e.return)&&n(e)}}function BC(n,e,t,i){if(n.length>-1&&!n.return)switch(n.type){case np:n.return=Uy(n.value,n.length,t);return;case Py:return Uc([$i(n,{value:He(n.value,"@","@"+Qe)})],i);case nu:if(n.length)return wC(t=n.props,function(r){switch(Ai(r,i=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":As($i(n,{props:[He(r,/:(read-\w+)/,":"+da+"$1")]})),As($i(n,{props:[r]})),Od(n,{props:y_(t,i)});break;case"::placeholder":As($i(n,{props:[He(r,/:(plac\w+)/,":"+Qe+"input-$1")]})),As($i(n,{props:[He(r,/:(plac\w+)/,":"+da+"$1")]})),As($i(n,{props:[He(r,/:(plac\w+)/,lt+"input-$1")]})),As($i(n,{props:[r]})),Od(n,{props:y_(t,i)});break}return""})}}var zC={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Mn={},_o=typeof process<"u"&&Mn!==void 0&&(Mn.REACT_APP_SC_ATTR||Mn.SC_ATTR)||"data-styled",rp=typeof window<"u"&&"HTMLElement"in window,HC=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Mn.REACT_APP_SC_DISABLE_SPEEDY!==""?Mn.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Mn.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Mn!==void 0&&Mn.SC_DISABLE_SPEEDY!==void 0&&Mn.SC_DISABLE_SPEEDY!==""&&Mn.SC_DISABLE_SPEEDY!=="false"&&Mn.SC_DISABLE_SPEEDY),ou=Object.freeze([]),vo=Object.freeze({});function VC(n,e,t){return t===void 0&&(t=vo),n.theme!==t.theme&&n.theme||e||t.theme}var Oy=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),GC=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,WC=/(^-|-$)/g;function M_(n){return n.replace(GC,"-").replace(WC,"")}var XC=/(a)(d)/gi,E_=function(n){return String.fromCharCode(n+(n>25?39:97))};function Bd(n){var e,t="";for(e=Math.abs(n);e>52;e=e/52|0)t=E_(e%52)+t;return(E_(e%52)+t).replace(XC,"$1-$2")}var Tf,zs=function(n,e){for(var t=e.length;t;)n=33*n^e.charCodeAt(--t);return n},Fy=function(n){return zs(5381,n)};function jC(n){return Bd(Fy(n)>>>0)}function $C(n){return n.displayName||n.name||"Component"}function wf(n){return typeof n=="string"&&!0}var ky=typeof Symbol=="function"&&Symbol.for,By=ky?Symbol.for("react.memo"):60115,YC=ky?Symbol.for("react.forward_ref"):60112,qC={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},KC={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},zy={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ZC=((Tf={})[YC]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Tf[By]=zy,Tf);function T_(n){return("type"in(e=n)&&e.type.$$typeof)===By?zy:"$$typeof"in n?ZC[n.$$typeof]:qC;var e}var QC=Object.defineProperty,JC=Object.getOwnPropertyNames,w_=Object.getOwnPropertySymbols,eL=Object.getOwnPropertyDescriptor,tL=Object.getPrototypeOf,A_=Object.prototype;function Hy(n,e,t){if(typeof e!="string"){if(A_){var i=tL(e);i&&i!==A_&&Hy(n,i,t)}var r=JC(e);w_&&(r=r.concat(w_(e)));for(var s=T_(n),o=T_(e),a=0;a<r.length;++a){var l=r[a];if(!(l in KC||t&&t[l]||o&&l in o||s&&l in s)){var c=eL(e,l);try{QC(n,l,c)}catch{}}}}return n}function yo(n){return typeof n=="function"}function sp(n){return typeof n=="object"&&"styledComponentId"in n}function zr(n,e){return n&&e?"".concat(n," ").concat(e):n||e||""}function R_(n,e){if(n.length===0)return"";for(var t=n[0],i=1;i<n.length;i++)t+=e?e+n[i]:n[i];return t}function Na(n){return n!==null&&typeof n=="object"&&n.constructor.name===Object.name&&!("props"in n&&n.$$typeof)}function zd(n,e,t){if(t===void 0&&(t=!1),!t&&!Na(n)&&!Array.isArray(n))return e;if(Array.isArray(e))for(var i=0;i<e.length;i++)n[i]=zd(n[i],e[i]);else if(Na(e))for(var i in e)n[i]=zd(n[i],e[i]);return n}function op(n,e){Object.defineProperty(n,"toString",{value:e})}function Va(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(n," for more information.").concat(e.length>0?" Args: ".concat(e.join(", ")):""))}var nL=function(){function n(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return n.prototype.indexOfGroup=function(e){for(var t=0,i=0;i<e;i++)t+=this.groupSizes[i];return t},n.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var i=this.groupSizes,r=i.length,s=r;e>=s;)if((s<<=1)<0)throw Va(16,"".concat(e));this.groupSizes=new Uint32Array(s),this.groupSizes.set(i),this.length=s;for(var o=r;o<s;o++)this.groupSizes[o]=0}for(var a=this.indexOfGroup(e+1),l=(o=0,t.length);o<l;o++)this.tag.insertRule(a,t[o])&&(this.groupSizes[e]++,a++)},n.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],i=this.indexOfGroup(e),r=i+t;this.groupSizes[e]=0;for(var s=i;s<r;s++)this.tag.deleteRule(i)}},n.prototype.getGroup=function(e){var t="";if(e>=this.length||this.groupSizes[e]===0)return t;for(var i=this.groupSizes[e],r=this.indexOfGroup(e),s=r+i,o=r;o<s;o++)t+="".concat(this.tag.getRule(o)).concat(`/*!sc*/
`);return t},n}(),tc=new Map,Oc=new Map,nc=1,Fl=function(n){if(tc.has(n))return tc.get(n);for(;Oc.has(nc);)nc++;var e=nc++;return tc.set(n,e),Oc.set(e,n),e},iL=function(n,e){nc=e+1,tc.set(n,e),Oc.set(e,n)},rL="style[".concat(_o,"][").concat("data-styled-version",'="').concat("6.1.1",'"]'),sL=new RegExp("^".concat(_o,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),oL=function(n,e,t){for(var i,r=t.split(","),s=0,o=r.length;s<o;s++)(i=r[s])&&n.registerName(e,i)},aL=function(n,e){for(var t,i=((t=e.textContent)!==null&&t!==void 0?t:"").split(`/*!sc*/
`),r=[],s=0,o=i.length;s<o;s++){var a=i[s].trim();if(a){var l=a.match(sL);if(l){var c=0|parseInt(l[1],10),u=l[2];c!==0&&(iL(u,c),oL(n,u,l[3]),n.getTag().insertRules(c,r)),r.length=0}else r.push(a)}}};function lL(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Vy=function(n){var e=document.head,t=n||e,i=document.createElement("style"),r=function(a){var l=Array.from(a.querySelectorAll("style[".concat(_o,"]")));return l[l.length-1]}(t),s=r!==void 0?r.nextSibling:null;i.setAttribute(_o,"active"),i.setAttribute("data-styled-version","6.1.1");var o=lL();return o&&i.setAttribute("nonce",o),t.insertBefore(i,s),i},cL=function(){function n(e){this.element=Vy(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var i=document.styleSheets,r=0,s=i.length;r<s;r++){var o=i[r];if(o.ownerNode===t)return o}throw Va(17)}(this.element),this.length=0}return n.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}},n.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},n.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},n}(),uL=function(){function n(e){this.element=Vy(e),this.nodes=this.element.childNodes,this.length=0}return n.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var i=document.createTextNode(t);return this.element.insertBefore(i,this.nodes[e]||null),this.length++,!0}return!1},n.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},n.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},n}(),fL=function(){function n(e){this.rules=[],this.length=0}return n.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},n.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},n.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},n}(),b_=rp,dL={isServer:!rp,useCSSOMInjection:!HC},Gy=function(){function n(e,t,i){e===void 0&&(e=vo),t===void 0&&(t={});var r=this;this.options=hn(hn({},dL),e),this.gs=t,this.names=new Map(i),this.server=!!e.isServer,!this.server&&rp&&b_&&(b_=!1,function(s){for(var o=document.querySelectorAll(rL),a=0,l=o.length;a<l;a++){var c=o[a];c&&c.getAttribute(_o)!=="active"&&(aL(s,c),c.parentNode&&c.parentNode.removeChild(c))}}(this)),op(this,function(){return function(s){for(var o=s.getTag(),a=o.length,l="",c=function(f){var d=function(h){return Oc.get(h)}(f);if(d===void 0)return"continue";var p=s.names.get(d),_=o.getGroup(f);if(p===void 0||_.length===0)return"continue";var y="".concat(_o,".g").concat(f,'[id="').concat(d,'"]'),m="";p!==void 0&&p.forEach(function(h){h.length>0&&(m+="".concat(h,","))}),l+="".concat(_).concat(y,'{content:"').concat(m,'"}').concat(`/*!sc*/
`)},u=0;u<a;u++)c(u);return l}(r)})}return n.registerId=function(e){return Fl(e)},n.prototype.reconstructWithOptions=function(e,t){return t===void 0&&(t=!0),new n(hn(hn({},this.options),e),this.gs,t&&this.names||void 0)},n.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},n.prototype.getTag=function(){return this.tag||(this.tag=(e=function(t){var i=t.useCSSOMInjection,r=t.target;return t.isServer?new fL(r):i?new cL(r):new uL(r)}(this.options),new nL(e)));var e},n.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},n.prototype.registerName=function(e,t){if(Fl(e),this.names.has(e))this.names.get(e).add(t);else{var i=new Set;i.add(t),this.names.set(e,i)}},n.prototype.insertRules=function(e,t,i){this.registerName(e,t),this.getTag().insertRules(Fl(e),i)},n.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},n.prototype.clearRules=function(e){this.getTag().clearGroup(Fl(e)),this.clearNames(e)},n.prototype.clearTag=function(){this.tag=void 0},n}(),hL=/&/g,pL=/^\s*\/\/.*$/gm;function Wy(n,e){return n.map(function(t){return t.type==="rule"&&(t.value="".concat(e," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(e," ")),t.props=t.props.map(function(i){return"".concat(e," ").concat(i)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Wy(t.children,e)),t})}function mL(n){var e,t,i,r=n===void 0?vo:n,s=r.options,o=s===void 0?vo:s,a=r.plugins,l=a===void 0?ou:a,c=function(d,p,_){return _===t||_.startsWith(t)&&_.endsWith(t)&&_.replaceAll(t,"").length>0?".".concat(e):d},u=l.slice();u.push(function(d){d.type===nu&&d.value.includes("&")&&(d.props[0]=d.props[0].replace(hL,t).replace(i,c))}),o.prefix&&u.push(BC),u.push(OC);var f=function(d,p,_,y){p===void 0&&(p=""),_===void 0&&(_=""),y===void 0&&(y="&"),e=y,t=p,i=new RegExp("\\".concat(t,"\\b"),"g");var m=d.replace(pL,""),h=DC(_||p?"".concat(_," ").concat(p," { ").concat(m," }"):m);o.namespace&&(h=Wy(h,o.namespace));var v=[];return Uc(h,FC(u.concat(kC(function(g){return v.push(g)})))),v};return f.hash=l.length?l.reduce(function(d,p){return p.name||Va(15),zs(d,p.name)},5381).toString():"",f}var gL=new Gy,Hd=mL(),Xy=Ks.createContext({shouldForwardProp:void 0,styleSheet:gL,stylis:Hd});Xy.Consumer;Ks.createContext(void 0);function C_(){return _r.useContext(Xy)}var _L=function(){function n(e,t){var i=this;this.inject=function(r,s){s===void 0&&(s=Hd);var o=i.name+s.hash;r.hasNameForId(i.id,o)||r.insertRules(i.id,o,s(i.rules,o,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,op(this,function(){throw Va(12,String(i.name))})}return n.prototype.getName=function(e){return e===void 0&&(e=Hd),this.name+e.hash},n}(),vL=function(n){return n>="A"&&n<="Z"};function L_(n){for(var e="",t=0;t<n.length;t++){var i=n[t];if(t===1&&i==="-"&&n[0]==="-")return n;vL(i)?e+="-"+i.toLowerCase():e+=i}return e.startsWith("ms-")?"-"+e:e}var jy=function(n){return n==null||n===!1||n===""},$y=function(n){var e,t,i=[];for(var r in n){var s=n[r];n.hasOwnProperty(r)&&!jy(s)&&(Array.isArray(s)&&s.isCss||yo(s)?i.push("".concat(L_(r),":"),s,";"):Na(s)?i.push.apply(i,Dc(Dc(["".concat(r," {")],$y(s),!1),["}"],!1)):i.push("".concat(L_(r),": ").concat((e=r,(t=s)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||e in zC||e.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return i};function $r(n,e,t,i){if(jy(n))return[];if(sp(n))return[".".concat(n.styledComponentId)];if(yo(n)){if(!yo(s=n)||s.prototype&&s.prototype.isReactComponent||!e)return[n];var r=n(e);return $r(r,e,t,i)}var s;return n instanceof _L?t?(n.inject(t,i),[n.getName(i)]):[n]:Na(n)?$y(n):Array.isArray(n)?Array.prototype.concat.apply(ou,n.map(function(o){return $r(o,e,t,i)})):[n.toString()]}function yL(n){for(var e=0;e<n.length;e+=1){var t=n[e];if(yo(t)&&!sp(t))return!1}return!0}var xL=Fy("6.1.1"),SL=function(){function n(e,t,i){this.rules=e,this.staticRulesId="",this.isStatic=(i===void 0||i.isStatic)&&yL(e),this.componentId=t,this.baseHash=zs(xL,t),this.baseStyle=i,Gy.registerId(t)}return n.prototype.generateAndInjectStyles=function(e,t,i){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,i):"";if(this.isStatic&&!i.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=zr(r,this.staticRulesId);else{var s=R_($r(this.rules,e,t,i)),o=Bd(zs(this.baseHash,s)>>>0);if(!t.hasNameForId(this.componentId,o)){var a=i(s,".".concat(o),void 0,this.componentId);t.insertRules(this.componentId,o,a)}r=zr(r,o),this.staticRulesId=o}else{for(var l=zs(this.baseHash,i.hash),c="",u=0;u<this.rules.length;u++){var f=this.rules[u];if(typeof f=="string")c+=f;else if(f){var d=R_($r(f,e,t,i));l=zs(l,d+u),c+=d}}if(c){var p=Bd(l>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,i(c,".".concat(p),void 0,this.componentId)),r=zr(r,p)}}return r},n}(),Yy=Ks.createContext(void 0);Yy.Consumer;var Af={};function ML(n,e,t){var i=sp(n),r=n,s=!wf(n),o=e.attrs,a=o===void 0?ou:o,l=e.componentId,c=l===void 0?function(x,E){var w=typeof x!="string"?"sc":M_(x);Af[w]=(Af[w]||0)+1;var M="".concat(w,"-").concat(jC("6.1.1"+w+Af[w]));return E?"".concat(E,"-").concat(M):M}(e.displayName,e.parentComponentId):l,u=e.displayName,f=u===void 0?function(x){return wf(x)?"styled.".concat(x):"Styled(".concat($C(x),")")}(n):u,d=e.displayName&&e.componentId?"".concat(M_(e.displayName),"-").concat(e.componentId):e.componentId||c,p=i&&r.attrs?r.attrs.concat(a).filter(Boolean):a,_=e.shouldForwardProp;if(i&&r.shouldForwardProp){var y=r.shouldForwardProp;if(e.shouldForwardProp){var m=e.shouldForwardProp;_=function(x,E){return y(x,E)&&m(x,E)}}else _=y}var h=new SL(t,d,i?r.componentStyle:void 0);function v(x,E){return function(w,M,P){var S=w.attrs,R=w.componentStyle,W=w.defaultProps,K=w.foldedComponentIds,Q=w.styledComponentId,D=w.target,X=Ks.useContext(Yy),q=C_(),$=w.shouldForwardProp||q.shouldForwardProp,U=function(ae,fe,ge){for(var Ae,Se=hn(hn({},fe),{className:void 0,theme:ge}),Ce=0;Ce<ae.length;Ce+=1){var Ze=yo(Ae=ae[Ce])?Ae(Se):Ae;for(var we in Ze)Se[we]=we==="className"?zr(Se[we],Ze[we]):we==="style"?hn(hn({},Se[we]),Ze[we]):Ze[we]}return fe.className&&(Se.className=zr(Se.className,fe.className)),Se}(S,M,VC(M,X,W)||vo),k=U.as||D,F={};for(var L in U)U[L]===void 0||L[0]==="$"||L==="as"||L==="theme"||(L==="forwardedAs"?F.as=U.forwardedAs:$&&!$(L,k)||(F[L]=U[L]));var B=function(ae,fe){var ge=C_(),Ae=ae.generateAndInjectStyles(fe,ge.styleSheet,ge.stylis);return Ae}(R,U),ce=zr(K,Q);return B&&(ce+=" "+B),U.className&&(ce+=" "+U.className),F[wf(k)&&!Oy.has(k)?"class":"className"]=ce,F.ref=P,_r.createElement(k,F)}(g,x,E)}v.displayName=f;var g=Ks.forwardRef(v);return g.attrs=p,g.componentStyle=h,g.displayName=f,g.shouldForwardProp=_,g.foldedComponentIds=i?zr(r.foldedComponentIds,r.styledComponentId):"",g.styledComponentId=d,g.target=i?r.target:n,Object.defineProperty(g,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=i?function(E){for(var w=[],M=1;M<arguments.length;M++)w[M-1]=arguments[M];for(var P=0,S=w;P<S.length;P++)zd(E,S[P],!0);return E}({},r.defaultProps,x):x}}),op(g,function(){return".".concat(g.styledComponentId)}),s&&Hy(g,n,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),g}function P_(n,e){for(var t=[n[0]],i=0,r=e.length;i<r;i+=1)t.push(e[i],n[i+1]);return t}var I_=function(n){return Object.assign(n,{isCss:!0})};function EL(n){for(var e=[],t=1;t<arguments.length;t++)e[t-1]=arguments[t];if(yo(n)||Na(n)){var i=n;return I_($r(P_(ou,Dc([i],e,!0))))}var r=n;return e.length===0&&r.length===1&&typeof r[0]=="string"?$r(r):I_($r(P_(r,e)))}function Vd(n,e,t){if(t===void 0&&(t=vo),!e)throw Va(1,e);var i=function(r){for(var s=[],o=1;o<arguments.length;o++)s[o-1]=arguments[o];return n(e,t,EL.apply(void 0,Dc([r],s,!1)))};return i.attrs=function(r){return Vd(n,e,hn(hn({},t),{attrs:Array.prototype.concat(t.attrs,r).filter(Boolean)}))},i.withConfig=function(r){return Vd(n,e,hn(hn({},t),r))},i}var qy=function(n){return Vd(ML,n)},bo=qy;Oy.forEach(function(n){bo[n]=qy(n)});const TL="/three-learn/assets/logo-KHicC6zi.svg",wL="/three-learn/assets/loading-zVMJrk1s.svg",AL=bo.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  background-color: transparent;
  transform: translate3d(-50%, -50%, 0);

  span {
    color: #f4f6f8;
    text-align: center;
  }
`,RL=bo.div`
  width: 280px;
  height: 280px;
  background: url(${wL}) no-repeat center center;
  background-size: 260px;
`;function bL(){return Je.jsxs(AL,{children:[Je.jsx(RL,{"aria-hidden":!0}),Je.jsx("span",{children:"마우스로 드래그 해보세요"})]})}const CL=bo.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 60px;
  background-color: transparent;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1140px;

    ul {
      display: flex;
      list-style: none;
      padding-left: 0;

      li {
        a {
          color: #fff;
          text-decoration: none;
        }

        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
`,LL=bo.div`
  width: 140px;
  height: 20px;
  background: url(${TL}) no-repeat center center;
  background-size: 120px;
`,PL=bo.footer`
  position: absolute;
  bottom: 10%;
  left: 50%;
  transform: translate3d(-50%, -10%, 0);

  button {
    padding: 22px 32px;
    font-size: 22px;
    border-radius: 9999px;
    font-weight: 700;
    border: none;
    outline: 0px;
    background-color: white;
    color: #191f28;
    transition: background-color 0.1s ease 0s;
    cursor: pointer;

    &:hover {
      background-color: #eee;
    }
  }
`;function IL(){return Je.jsx(CL,{children:Je.jsxs("div",{children:[Je.jsx(LL,{}),Je.jsx("div",{children:Je.jsxs("ul",{children:[Je.jsx("li",{children:Je.jsx("a",{href:"#","aria-label":"'3D로 체험하기'로 이동하기",children:"3D로 체험하기"})}),Je.jsx("li",{children:Je.jsx("a",{href:"#","aria-label":"'나만에 이모지만들기'로 이동하기",children:"나만에 이모지만들기"})}),Je.jsx("li",{children:Je.jsx("a",{href:"#","aria-label":"'전체보기'로 이동하기",children:"전체보기"})}),Je.jsx("li",{children:Je.jsx("a",{href:"#","aria-label":"'저작권안내'로 이동하기",children:"저작권안내"})}),Je.jsx("li",{children:Je.jsx("a",{href:"#","aria-label":"'다운로드'로 이동하기",children:"다운로드"})})]})})]})})}function NL(){return Je.jsx(PL,{children:Je.jsx("button",{onClick:void 0,children:"토스페이스 알아보기"})})}function DL(){return Je.jsxs(Je.Fragment,{children:[Je.jsx(IL,{}),Je.jsx(_r.Suspense,{fallback:Je.jsx(bL,{}),children:Je.jsx(xC,{})}),Je.jsx(NL,{})]})}Rf.createRoot(document.getElementById("root")).render(Je.jsx(Ks.StrictMode,{children:Je.jsx(DL,{})}));
