!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.AutoKana=n():t.AutoKana=n()}(window,function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s=43)}([function(t,n,e){t.exports=!e(1)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){var e=t.exports={version:"2.5.4"};"number"==typeof __e&&(__e=e)},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(27);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(7),i=e(6);t.exports=function(t){return r(i(t))}},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(35),i=e(34),o=e(32),u=Object.defineProperty;n.f=e(0)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(4),i=e(3),o=e(38),u=e(36),a=e(9),c=function(t,n,e){var s,f,l,v=t&c.F,p=t&c.G,h=t&c.S,g=t&c.P,d=t&c.B,y=t&c.W,b=p?i:i[n]||(i[n]={}),x=b.prototype,m=p?r:h?r[n]:(r[n]||{}).prototype;for(s in p&&(e=n),e)(f=!v&&m&&void 0!==m[s])&&a(b,s)||(l=f?m[s]:e[s],b[s]=p&&"function"!=typeof m[s]?e[s]:d&&f?o(l,r):y&&m[s]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n}(l):g&&"function"==typeof l?o(Function.call,l):l,g&&((b.virtual||(b.virtual={}))[s]=l,t&c.R&&x&&!x[s]&&u(x,s,l)))};c.F=1,c.G=2,c.S=4,c.P=8,c.B=16,c.W=32,c.U=64,c.R=128,t.exports=c},function(t,n,e){var r=e(11);r(r.S+r.F*!e(0),"Object",{defineProperty:e(10).f})},function(t,n,e){e(12);var r=e(3).Object;t.exports=function(t,n,e){return r.defineProperty(t,n,e)}},function(t,n,e){t.exports={default:e(13),__esModule:!0}},function(t,n,e){"use strict";n.__esModule=!0;var r,i=e(14),o=(r=i)&&r.__esModule?r:{default:r};n.default=function(){function t(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,o.default)(t,r.key,r)}}return function(n,e,r){return e&&t(n.prototype,e),r&&t(n,r),n}}()},function(t,n,e){"use strict";n.__esModule=!0,n.default=function(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}},function(t,n,e){var r=e(6);t.exports=function(t){return Object(r(t))}},function(t,n){n.f={}.propertyIsEnumerable},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(4),i=r["__core-js_shared__"]||(r["__core-js_shared__"]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var r=e(22)("keys"),i=e(21);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n,e){var r=e(5),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(5),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n,e){var r=e(8),i=e(25),o=e(24);t.exports=function(t){return function(n,e,u){var a,c=r(n),s=i(c.length),f=o(u,s);if(t&&e!=e){for(;s>f;)if((a=c[f++])!=a)return!0}else for(;s>f;f++)if((t||f in c)&&c[f]===e)return t||f||0;return!t&&-1}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(9),i=e(8),o=e(26)(!1),u=e(23)("IE_PROTO");t.exports=function(t,n){var e,a=i(t),c=0,s=[];for(e in a)e!=u&&r(a,e)&&s.push(e);for(;n.length>c;)r(a,e=n[c++])&&(~o(s,e)||s.push(e));return s}},function(t,n,e){var r=e(28),i=e(20);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n,e){"use strict";var r=e(29),i=e(19),o=e(18),u=e(17),a=e(7),c=Object.assign;t.exports=!c||e(1)(function(){var t={},n={},e=Symbol(),r="abcdefghijklmnopqrst";return t[e]=7,r.split("").forEach(function(t){n[t]=t}),7!=c({},t)[e]||Object.keys(c({},n)).join("")!=r})?function(t,n){for(var e=u(t),c=arguments.length,s=1,f=i.f,l=o.f;c>s;)for(var v,p=a(arguments[s++]),h=f?r(p).concat(f(p)):r(p),g=h.length,d=0;g>d;)l.call(p,v=h[d++])&&(e[v]=p[v]);return e}:c},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(2);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n,e){var r=e(2),i=e(4).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){t.exports=!e(0)&&!e(1)(function(){return 7!=Object.defineProperty(e(33)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(2);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(10),i=e(31);t.exports=e(0)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(37);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(11);r(r.S+r.F,"Object",{assign:e(30)})},function(t,n,e){e(39),t.exports=e(3).Object.assign},function(t,n,e){t.exports={default:e(40),__esModule:!0}},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=u(e(41)),i=u(e(16)),o=u(e(15));function u(t){return t&&t.__esModule?t:{default:t}}function a(t,n){n=n?n.replace(/([[\]().?/*{}+$^:])/g,"$1"):" \\s ";var e=new RegExp("^["+n+"]+","g");return t.replace(e,"")}function c(t){var n=Number(t);return n>=12353&&n<=12435||12445===n||12446===n}var s=/[^ 　ぁあ-んー]/g,f=/[ぁぃぅぇぉっゃゅょ]/g,l=function(){function t(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,i.default)(this,t),this.isActive=!0,this.timer=null,this.initializeValues(),this.option=(0,r.default)({katakana:!1,debug:!1,checkInterval:30},o);var u=document.getElementById(a(n,"#")),c=document.getElementById(a(e,"#"));if(!u)throw new Error("Element not found: "+n);this.elName=u,this.registerEvents(this.elName),c&&(this.elFurigana=c)}return(0,o.default)(t,[{key:"getFurigana",value:function(){return this.furigana}},{key:"start",value:function(){this.isActive=!0}},{key:"stop",value:function(){this.isActive=!1}},{key:"toggle",value:function(t){if(t){var n=Event.element(t);n&&(this.isActive=n.checked)}else this.isActive=!this.isActive}},{key:"initializeValues",value:function(){this.baseKana="",this.furigana="",this.isConverting=!1,this.ignoreString="",this.input="",this.values=[]}},{key:"registerEvents",value:function(t){var n=this;t.addEventListener("blur",function(){n.debug("blur"),n.clearInterval()}),t.addEventListener("focus",function(){n.debug("focus"),n.onInput(),n.setInterval()}),t.addEventListener("keydown",function(){n.debug("keydown"),n.isConverting&&n.onInput()})}},{key:"clearInterval",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){this.timer&&clearInterval(this.timer)})},{key:"toKatakana",value:function(t){if(this.option.katakana){for(var n=void 0,e=void 0,r=0;r<t.length;r+=1)c(n=t.charCodeAt(r))?e+=String.fromCharCode(n+96):e+=t.charAt(r);return e}return t}},{key:"setFurigana",value:function(t){this.isConverting||(t&&(this.values=t),this.isActive&&(this.furigana=this.toKatakana(this.baseKana+this.values.join("")),this.elFurigana&&(this.elFurigana.value=this.furigana)))}},{key:"removeString",value:function(t){if(-1!==t.indexOf(this.ignoreString))return String(t).replace(this.ignoreString,"");for(var n=this.ignoreString.split(""),e=t.split(""),r=0;r<n.length;r+=1)n[r]===e[r]&&(e[r]="");return e}},{key:"checkConvert",value:function(t){if(!this.isConverting)if(Math.abs(this.values.length-t.length)>1){var n=t.join("").replace(f,"").split("");Math.abs(this.values.length-n.length)>1&&this.onConvert()}else this.values.length===this.input.length&&this.values.join("")!==this.input&&this.input.match(s)&&this.onConvert()}},{key:"checkValue",value:function(){var t=void 0;if(""===(t=this.elName.value))this.initializeValues(),this.setFurigana();else{if(t=this.removeString(t),this.input===t)return;if(this.input=t,this.isConverting)return;var n=t.replace(s,"").split("");this.checkConvert(n),this.setFurigana(n)}this.debug(this.input)}},{key:"setInterval",value:function(t){function n(){return t.apply(this,arguments)}return n.toString=function(){return t.toString()},n}(function(){this.timer=setInterval(this.checkValue.bind(this),this.option.checkInterval)})},{key:"onInput",value:function(){this.elFurigana&&(this.baseKana=this.elFurigana.value),this.isConverting=!1,this.ignoreString=this.elName.value}},{key:"onConvert",value:function(){this.baseKana=this.baseKana+this.values.join(""),this.isConverting=!0,this.values=[]}},{key:"debug",value:function(){var t;this.option.debug&&(t=console).log.apply(t,arguments)}}]),t}();n.default=l},function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.bind=function(t,n){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new o.default(t,n,e)};var r,i=e(42),o=(r=i)&&r.__esModule?r:{default:r}}])});