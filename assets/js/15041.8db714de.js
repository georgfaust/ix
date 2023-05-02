"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[15041],{56624:(t,e,n)=>{n.d(e,{A:()=>r});class r{}r.shortTime=0,r.defaultTime=150,r.mediumTime=300,r.slowTime=500,r.xSlowTime=1e3},10161:(t,e,n)=>{n.d(e,{a:()=>at});var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},a={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},i=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],o={CSS:{},springs:{}};function s(t,e,n){return Math.min(Math.max(t,e),n)}function l(t,e){return t.indexOf(e)>-1}function u(t,e){return t.apply(null,e)}var c={arr:function(t){return Array.isArray(t)},obj:function(t){return l(Object.prototype.toString.call(t),"Object")},pth:function(t){return c.obj(t)&&t.hasOwnProperty("totalLength")},svg:function(t){return t instanceof SVGElement},inp:function(t){return t instanceof HTMLInputElement},dom:function(t){return t.nodeType||c.svg(t)},str:function(t){return"string"==typeof t},fnc:function(t){return"function"==typeof t},und:function(t){return void 0===t},nil:function(t){return c.und(t)||null===t},hex:function(t){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(t)},rgb:function(t){return/^rgb/.test(t)},hsl:function(t){return/^hsl/.test(t)},col:function(t){return c.hex(t)||c.rgb(t)||c.hsl(t)},key:function(t){return!r.hasOwnProperty(t)&&!a.hasOwnProperty(t)&&"targets"!==t&&"keyframes"!==t}};function d(t){var e=/\(([^)]+)\)/.exec(t);return e?e[1].split(",").map((function(t){return parseFloat(t)})):[]}function m(t,e){var n=d(t),r=s(c.und(n[0])?1:n[0],.1,100),a=s(c.und(n[1])?100:n[1],.1,100),i=s(c.und(n[2])?10:n[2],.1,100),l=s(c.und(n[3])?0:n[3],.1,100),u=Math.sqrt(a/r),m=i/(2*Math.sqrt(a*r)),f=m<1?u*Math.sqrt(1-m*m):0,h=m<1?(m*u-l)/f:-l+u;function p(t){var n=e?e*t/1e3:t;return n=m<1?Math.exp(-n*m*u)*(1*Math.cos(f*n)+h*Math.sin(f*n)):(1+h*n)*Math.exp(-n*u),0===t||1===t?t:1-n}return e?p:function(){var e=o.springs[t];if(e)return e;for(var n=1/6,r=0,a=0;;)if(1===p(r+=n)){if(++a>=16)break}else a=0;var i=r*n*1e3;return o.springs[t]=i,i}}function f(t){return void 0===t&&(t=10),function(e){return Math.ceil(s(e,1e-6,1)*t)*(1/t)}}var h,p,v=function(){var t=.1;function e(t,e){return 1-3*e+3*t}function n(t,e){return 3*e-6*t}function r(t){return 3*t}function a(t,a,i){return((e(a,i)*t+n(a,i))*t+r(a))*t}function i(t,a,i){return 3*e(a,i)*t*t+2*n(a,i)*t+r(a)}return function(e,n,r,o){if(0<=e&&e<=1&&0<=r&&r<=1){var s=new Float32Array(11);if(e!==n||r!==o)for(var l=0;l<11;++l)s[l]=a(l*t,e,r);return function(t){return e===n&&r===o||0===t||1===t?t:a(u(t),n,o)}}function u(n){for(var o=0,l=1;10!==l&&s[l]<=n;++l)o+=t;--l;var u=o+(n-s[l])/(s[l+1]-s[l])*t,c=i(u,e,r);return c>=.001?function(t,e,n,r){for(var o=0;o<4;++o){var s=i(e,n,r);if(0===s)return e;e-=(a(e,n,r)-t)/s}return e}(n,u,e,r):0===c?u:function(t,e,n,r,i){var o,s,l=0;do{(o=a(s=e+(n-e)/2,r,i)-t)>0?n=s:e=s}while(Math.abs(o)>1e-7&&++l<10);return s}(n,o,o+t,e,r)}}}(),g=(h={linear:function(){return function(t){return t}}},p={Sine:function(){return function(t){return 1-Math.cos(t*Math.PI/2)}},Circ:function(){return function(t){return 1-Math.sqrt(1-t*t)}},Back:function(){return function(t){return t*t*(3*t-2)}},Bounce:function(){return function(t){for(var e,n=4;t<((e=Math.pow(2,--n))-1)/11;);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*e-2)/22-t,2)}},Elastic:function(t,e){void 0===t&&(t=1),void 0===e&&(e=.5);var n=s(t,1,10),r=s(e,.1,2);return function(t){return 0===t||1===t?t:-n*Math.pow(2,10*(t-1))*Math.sin((t-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},["Quad","Cubic","Quart","Quint","Expo"].forEach((function(t,e){p[t]=function(){return function(t){return Math.pow(t,e+2)}}})),Object.keys(p).forEach((function(t){var e=p[t];h["easeIn"+t]=e,h["easeOut"+t]=function(t,n){return function(r){return 1-e(t,n)(1-r)}},h["easeInOut"+t]=function(t,n){return function(r){return r<.5?e(t,n)(2*r)/2:1-e(t,n)(-2*r+2)/2}},h["easeOutIn"+t]=function(t,n){return function(r){return r<.5?(1-e(t,n)(1-2*r))/2:(e(t,n)(2*r-1)+1)/2}}})),h);function y(t,e){if(c.fnc(t))return t;var n=t.split("(")[0],r=g[n],a=d(t);switch(n){case"spring":return m(t,e);case"cubicBezier":return u(v,a);case"steps":return u(f,a);default:return u(r,a)}}function b(t){try{return document.querySelectorAll(t)}catch(e){return}}function x(t,e){for(var n=t.length,r=arguments.length>=2?arguments[1]:void 0,a=[],i=0;i<n;i++)if(i in t){var o=t[i];e.call(r,o,i,t)&&a.push(o)}return a}function w(t){return t.reduce((function(t,e){return t.concat(c.arr(e)?w(e):e)}),[])}function k(t){return c.arr(t)?t:(c.str(t)&&(t=b(t)||t),t instanceof NodeList||t instanceof HTMLCollection?[].slice.call(t):[t])}function C(t,e){return t.some((function(t){return t===e}))}function M(t){var e={};for(var n in t)e[n]=t[n];return e}function D(t,e){var n=M(t);for(var r in t)n[r]=e.hasOwnProperty(r)?e[r]:t[r];return n}function O(t,e){var n=M(t);for(var r in e)n[r]=c.und(t[r])?e[r]:t[r];return n}function T(t){return c.rgb(t)?(n=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e=t))?"rgba("+n[1]+",1)":e:c.hex(t)?function(t){var e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(t,e,n,r){return e+e+n+n+r+r})),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(n[1],16)+","+parseInt(n[2],16)+","+parseInt(n[3],16)+",1)"}(t):c.hsl(t)?function(t){var e,n,r,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(t)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(t),i=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,s=parseInt(a[3],10)/100,l=a[4]||1;function u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}if(0==o)e=n=r=s;else{var c=s<.5?s*(1+o):s+o-s*o,d=2*s-c;e=u(d,c,i+1/3),n=u(d,c,i),r=u(d,c,i-1/3)}return"rgba("+255*e+","+255*n+","+255*r+","+l+")"}(t):void 0;var e,n}function E(t){var e=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(t);if(e)return e[1]}function B(t,e){return c.fnc(t)?t(e.target,e.id,e.total):t}function I(t,e){return t.getAttribute(e)}function P(t,e,n){if(C([n,"deg","rad","turn"],E(e)))return e;var r=o.CSS[e+n];if(!c.und(r))return r;var a=document.createElement(t.tagName),i=t.parentNode&&t.parentNode!==document?t.parentNode:document.body;i.appendChild(a),a.style.position="absolute",a.style.width=100+n;var s=100/a.offsetWidth;i.removeChild(a);var l=s*parseFloat(e);return o.CSS[e+n]=l,l}function S(t,e,n){if(e in t.style){var r=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=t.style[e]||getComputedStyle(t).getPropertyValue(r)||"0";return n?P(t,a,n):a}}function L(t,e){return c.dom(t)&&!c.inp(t)&&(!c.nil(I(t,e))||c.svg(t)&&t[e])?"attribute":c.dom(t)&&C(i,e)?"transform":c.dom(t)&&"transform"!==e&&S(t,e)?"css":null!=t[e]?"object":void 0}function A(t){if(c.dom(t)){for(var e,n=t.style.transform||"",r=/(\w+)\(([^)]*)\)/g,a=new Map;e=r.exec(n);)a.set(e[1],e[2]);return a}}function j(t,e,n,r){var a=l(e,"scale")?1:0+function(t){return l(t,"translate")||"perspective"===t?"px":l(t,"rotate")||l(t,"skew")?"deg":void 0}(e),i=A(t).get(e)||a;return n&&(n.transforms.list.set(e,i),n.transforms.last=e),r?P(t,i,r):i}function F(t,e,n,r){switch(L(t,e)){case"transform":return j(t,e,r,n);case"css":return S(t,e,n);case"attribute":return I(t,e);default:return t[e]||0}}function q(t,e){var n=/^(\*=|\+=|-=)/.exec(t);if(!n)return t;var r=E(t)||0,a=parseFloat(e),i=parseFloat(t.replace(n[0],""));switch(n[0][0]){case"+":return a+i+r;case"-":return a-i+r;case"*":return a*i+r}}function N(t,e){if(c.col(t))return T(t);if(/\s/g.test(t))return t;var n=E(t),r=n?t.substr(0,t.length-n.length):t;return e?r+e:r}function H(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function z(t){for(var e,n=t.points,r=0,a=0;a<n.numberOfItems;a++){var i=n.getItem(a);a>0&&(r+=H(e,i)),e=i}return r}function V(t){if(t.getTotalLength)return t.getTotalLength();switch(t.tagName.toLowerCase()){case"circle":return function(t){return 2*Math.PI*I(t,"r")}(t);case"rect":return function(t){return 2*I(t,"width")+2*I(t,"height")}(t);case"line":return function(t){return H({x:I(t,"x1"),y:I(t,"y1")},{x:I(t,"x2"),y:I(t,"y2")})}(t);case"polyline":return z(t);case"polygon":return function(t){var e=t.points;return z(t)+H(e.getItem(e.numberOfItems-1),e.getItem(0))}(t)}}function $(t,e){var n=e||{},r=n.el||function(t){for(var e=t.parentNode;c.svg(e)&&c.svg(e.parentNode);)e=e.parentNode;return e}(t),a=r.getBoundingClientRect(),i=I(r,"viewBox"),o=a.width,s=a.height,l=n.viewBox||(i?i.split(" "):[0,0,o,s]);return{el:r,viewBox:l,x:l[0]/1,y:l[1]/1,w:o,h:s,vW:l[2],vH:l[3]}}function W(t,e,n){function r(n){void 0===n&&(n=0);var r=e+n>=1?e+n:0;return t.el.getPointAtLength(r)}var a=$(t.el,t.svg),i=r(),o=r(-1),s=r(1),l=n?1:a.w/a.vW,u=n?1:a.h/a.vH;switch(t.property){case"x":return(i.x-a.x)*l;case"y":return(i.y-a.y)*u;case"angle":return 180*Math.atan2(s.y-o.y,s.x-o.x)/Math.PI}}function Y(t,e){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=N(c.pth(t)?t.totalLength:t,e)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:c.str(t)||e?r.split(n):[]}}function K(t){return x(t?w(c.arr(t)?t.map(k):k(t)):[],(function(t,e,n){return n.indexOf(t)===e}))}function _(t){var e=K(t);return e.map((function(t,n){return{target:t,id:n,total:e.length,transforms:{list:A(t)}}}))}function U(t,e){var n=M(e);if(/^spring/.test(n.easing)&&(n.duration=m(n.easing)),c.arr(t)){var r=t.length;2===r&&!c.obj(t[0])?t={value:t}:c.fnc(e.duration)||(n.duration=e.duration/r)}var a=c.arr(t)?t:[t];return a.map((function(t,n){var r=c.obj(t)&&!c.pth(t)?t:{value:t};return c.und(r.delay)&&(r.delay=n?0:e.delay),c.und(r.endDelay)&&(r.endDelay=n===a.length-1?e.endDelay:0),r})).map((function(t){return O(t,n)}))}function X(t,e){var n=[],r=e.keyframes;for(var a in r&&(e=O(function(t){for(var e=x(w(t.map((function(t){return Object.keys(t)}))),(function(t){return c.key(t)})).reduce((function(t,e){return t.indexOf(e)<0&&t.push(e),t}),[]),n={},r=function(r){var a=e[r];n[a]=t.map((function(t){var e={};for(var n in t)c.key(n)?n==a&&(e.value=t[n]):e[n]=t[n];return e}))},a=0;a<e.length;a++)r(a);return n}(r),e)),e)c.key(a)&&n.push({name:a,tweens:U(e[a],t)});return n}function Z(t,e){var n;return t.tweens.map((function(r){var a=function(t,e){var n={};for(var r in t){var a=B(t[r],e);c.arr(a)&&1===(a=a.map((function(t){return B(t,e)}))).length&&(a=a[0]),n[r]=a}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}(r,e),i=a.value,o=c.arr(i)?i[1]:i,s=E(o),l=F(e.target,t.name,s,e),u=n?n.to.original:l,d=c.arr(i)?i[0]:u,m=E(d)||E(l),f=s||m;return c.und(o)&&(o=u),a.from=Y(d,f),a.to=Y(q(o,d),f),a.start=n?n.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=y(a.easing,a.duration),a.isPath=c.pth(i),a.isPathTargetInsideSVG=a.isPath&&c.svg(e.target),a.isColor=c.col(a.from.original),a.isColor&&(a.round=1),n=a,a}))}var G={css:function(t,e,n){return t.style[e]=n},attribute:function(t,e,n){return t.setAttribute(e,n)},object:function(t,e,n){return t[e]=n},transform:function(t,e,n,r,a){if(r.list.set(e,n),e===r.last||a){var i="";r.list.forEach((function(t,e){i+=e+"("+t+") "})),t.style.transform=i}}};function Q(t,e){_(t).forEach((function(t){for(var n in e){var r=B(e[n],t),a=t.target,i=E(r),o=F(a,n,i,t),s=q(N(r,i||E(o)),o),l=L(a,n);G[l](a,n,s,t.transforms,!0)}}))}function R(t,e){return x(w(t.map((function(t){return e.map((function(e){return function(t,e){var n=L(t.target,e.name);if(n){var r=Z(e,t),a=r[r.length-1];return{type:n,property:e.name,animatable:t,tweens:r,duration:a.end,delay:r[0].delay,endDelay:a.endDelay}}}(t,e)}))}))),(function(t){return!c.und(t)}))}function J(t,e){var n=t.length,r=function(t){return t.timelineOffset?t.timelineOffset:0},a={};return a.duration=n?Math.max.apply(Math,t.map((function(t){return r(t)+t.duration}))):e.duration,a.delay=n?Math.min.apply(Math,t.map((function(t){return r(t)+t.delay}))):e.delay,a.endDelay=n?a.duration-Math.max.apply(Math,t.map((function(t){return r(t)+t.duration-t.endDelay}))):e.endDelay,a}var tt=0;var et=[],nt=function(){var t;function e(n){for(var r=et.length,a=0;a<r;){var i=et[a];i.paused?(et.splice(a,1),r--):(i.tick(n),a++)}t=a>0?requestAnimationFrame(e):void 0}return"undefined"!=typeof document&&document.addEventListener("visibilitychange",(function(){at.suspendWhenDocumentHidden&&(rt()?t=cancelAnimationFrame(t):(et.forEach((function(t){return t._onDocumentVisibility()})),nt()))})),function(){t||rt()&&at.suspendWhenDocumentHidden||!(et.length>0)||(t=requestAnimationFrame(e))}}();function rt(){return!!document&&document.hidden}function at(t){void 0===t&&(t={});var e,n=0,i=0,o=0,l=0,u=null;function c(t){var e=window.Promise&&new Promise((function(t){return u=t}));return t.finished=e,e}var d=function(t){var e=D(r,t),n=D(a,t),i=X(n,t),o=_(t.targets),s=R(o,i),l=J(s,n),u=tt;return tt++,O(e,{id:u,children:[],animatables:o,animations:s,duration:l.duration,delay:l.delay,endDelay:l.endDelay})}(t);function m(){var t=d.direction;"alternate"!==t&&(d.direction="normal"!==t?"normal":"reverse"),d.reversed=!d.reversed,e.forEach((function(t){return t.reversed=d.reversed}))}function f(t){return d.reversed?d.duration-t:t}function h(){n=0,i=f(d.currentTime)*(1/at.speed)}function p(t,e){e&&e.seek(t-e.timelineOffset)}function v(t){for(var e=0,n=d.animations,r=n.length;e<r;){var a=n[e],i=a.animatable,o=a.tweens,l=o.length-1,u=o[l];l&&(u=x(o,(function(e){return t<e.end}))[0]||u);for(var c=s(t-u.start-u.delay,0,u.duration)/u.duration,m=isNaN(c)?1:u.easing(c),f=u.to.strings,h=u.round,p=[],v=u.to.numbers.length,g=void 0,y=0;y<v;y++){var b=void 0,w=u.to.numbers[y],k=u.from.numbers[y]||0;b=u.isPath?W(u.value,m*w,u.isPathTargetInsideSVG):k+m*(w-k),h&&(u.isColor&&y>2||(b=Math.round(b*h)/h)),p.push(b)}var C=f.length;if(C){g=f[0];for(var M=0;M<C;M++){var D=f[M+1],O=p[M];isNaN(O)||(g+=D?O+D:O+" ")}}else g=p[0];G[a.type](i.target,a.property,g,i.transforms),a.currentValue=g,e++}}function g(t){d[t]&&!d.passThrough&&d[t](d)}function y(t){var r=d.duration,a=d.delay,h=r-d.endDelay,y=f(t);d.progress=s(y/r*100,0,100),d.reversePlayback=y<d.currentTime,e&&function(t){if(d.reversePlayback)for(var n=l;n--;)p(t,e[n]);else for(var r=0;r<l;r++)p(t,e[r])}(y),!d.began&&d.currentTime>0&&(d.began=!0,g("begin")),!d.loopBegan&&d.currentTime>0&&(d.loopBegan=!0,g("loopBegin")),y<=a&&0!==d.currentTime&&v(0),(y>=h&&d.currentTime!==r||!r)&&v(r),y>a&&y<h?(d.changeBegan||(d.changeBegan=!0,d.changeCompleted=!1,g("changeBegin")),g("change"),v(y)):d.changeBegan&&(d.changeCompleted=!0,d.changeBegan=!1,g("changeComplete")),d.currentTime=s(y,0,r),d.began&&g("update"),t>=r&&(i=0,d.remaining&&!0!==d.remaining&&d.remaining--,d.remaining?(n=o,g("loopComplete"),d.loopBegan=!1,"alternate"===d.direction&&m()):(d.paused=!0,d.completed||(d.completed=!0,g("loopComplete"),g("complete"),!d.passThrough&&"Promise"in window&&(u(),c(d)))))}return c(d),d.reset=function(){var t=d.direction;d.passThrough=!1,d.currentTime=0,d.progress=0,d.paused=!0,d.began=!1,d.loopBegan=!1,d.changeBegan=!1,d.completed=!1,d.changeCompleted=!1,d.reversePlayback=!1,d.reversed="reverse"===t,d.remaining=d.loop,e=d.children;for(var n=l=e.length;n--;)d.children[n].reset();(d.reversed&&!0!==d.loop||"alternate"===t&&1===d.loop)&&d.remaining++,v(d.reversed?d.duration:0)},d._onDocumentVisibility=h,d.set=function(t,e){return Q(t,e),d},d.tick=function(t){o=t,n||(n=o),y((o+(i-n))*at.speed)},d.seek=function(t){y(f(t))},d.pause=function(){d.paused=!0,h()},d.play=function(){d.paused&&(d.completed&&d.reset(),d.paused=!1,et.push(d),h(),nt())},d.reverse=function(){m(),d.completed=!d.reversed,h()},d.restart=function(){d.reset(),d.play()},d.remove=function(t){ot(K(t),d)},d.reset(),d.autoplay&&d.play(),d}function it(t,e){for(var n=e.length;n--;)C(t,e[n].animatable.target)&&e.splice(n,1)}function ot(t,e){var n=e.animations,r=e.children;it(t,n);for(var a=r.length;a--;){var i=r[a],o=i.animations;it(t,o),o.length||i.children.length||r.splice(a,1)}n.length||r.length||e.pause()}at.version="3.2.1",at.speed=1,at.suspendWhenDocumentHidden=!0,at.running=et,at.remove=function(t){for(var e=K(t),n=et.length;n--;){ot(e,et[n])}},at.get=F,at.set=Q,at.convertPx=P,at.path=function(t,e){var n=c.str(t)?b(t)[0]:t,r=e||100;return function(t){return{property:t,el:n,svg:$(n),totalLength:V(n)*(r/100)}}},at.setDashoffset=function(t){var e=V(t);return t.setAttribute("stroke-dasharray",e),e},at.stagger=function(t,e){void 0===e&&(e={});var n=e.direction||"normal",r=e.easing?y(e.easing):null,a=e.grid,i=e.axis,o=e.from||0,s="first"===o,l="center"===o,u="last"===o,d=c.arr(t),m=d?parseFloat(t[0]):parseFloat(t),f=d?parseFloat(t[1]):0,h=E(d?t[1]:t)||0,p=e.start||0+(d?m:0),v=[],g=0;return function(t,e,c){if(s&&(o=0),l&&(o=(c-1)/2),u&&(o=c-1),!v.length){for(var y=0;y<c;y++){if(a){var b=l?(a[0]-1)/2:o%a[0],x=l?(a[1]-1)/2:Math.floor(o/a[0]),w=b-y%a[0],k=x-Math.floor(y/a[0]),C=Math.sqrt(w*w+k*k);"x"===i&&(C=-w),"y"===i&&(C=-k),v.push(C)}else v.push(Math.abs(o-y));g=Math.max.apply(Math,v)}r&&(v=v.map((function(t){return r(t/g)*g}))),"reverse"===n&&(v=v.map((function(t){return i?t<0?-1*t:-t:Math.abs(g-t)})))}return p+(d?(f-m)/g:m)*(Math.round(100*v[e])/100)+h}},at.timeline=function(t){void 0===t&&(t={});var e=at(t);return e.duration=0,e.add=function(n,r){var i=et.indexOf(e),o=e.children;function s(t){t.passThrough=!0}i>-1&&et.splice(i,1);for(var l=0;l<o.length;l++)s(o[l]);var u=O(n,D(a,t));u.targets=u.targets||t.targets;var d=e.duration;u.autoplay=!1,u.direction=e.direction,u.timelineOffset=c.und(r)?d:q(r,d),s(e),e.seek(u.timelineOffset);var m=at(u);s(m),o.push(m);var f=J(o,t);return e.delay=f.delay,e.endDelay=f.endDelay,e.duration=f.duration,e.seek(0),e.reset(),e.autoplay&&e.play(),e},e},at.easing=y,at.penner=g,at.random=function(t,e){return Math.floor(Math.random()*(e-t+1))+t}},15041:(t,e,n)=>{n.r(e),n.d(e,{ix_modal:()=>l,ix_modal_container:()=>c});var r=n(37434),a=n(10161),i=n(56624),o=n(42951);let s=0;const l=class{constructor(t){(0,r.r)(this,t),this.closed=(0,r.c)(this,"closed",7),this.dismissed=(0,r.c)(this,"dismissed",7),this.modalId="ix-modal-instance-"+ ++s,this.onKeydown=this.handleKeydown.bind(this),this.animation=!0,this.ariaDescribedBy=void 0,this.ariaLabelledBy="modal-title",this.backdrop=!0,this.backdropClass=void 0,this.beforeDismiss=void 0,this.centered=!1,this.content=void 0,this.keyboard=!0,this.icon=void 0,this.iconColor="color-std-text",this.modalDialogClass=void 0,this.scrollable=!0,this.size="sm",this.headerTitle=void 0,this.windowClass=void 0}get modal(){return this.hostElement.querySelector(".modal")}get modalDialog(){return this.modal.querySelector(".modal-dialog")}get modalContent(){return this.modalDialog.querySelector(".modal-content")}get modalBackdrop(){return this.hostElement.querySelector(".backdrop")}slideDown(t){const e=this.animation?i.A.mediumTime:0;(0,a.a)({targets:t,duration:e,opacity:[0,1],translateY:["-100%",0],easing:"easeOutSine"})}slideUp(t,e){const n=this.animation?i.A.mediumTime:0;(0,a.a)({targets:t,duration:n,opacity:[1,0],translateY:[0,"-100%"],easing:"easeInSine",complete:()=>{e&&e()}})}onBackdropClick(t){t.target.classList.contains("backdrop")&&this.dismiss(t)}componentDidLoad(){"static"===this.backdrop&&this.modalBackdrop.addEventListener("click",(t=>this.onBackdropClick(t))),this.backdropClass&&this.modalBackdrop.classList.add(this.backdropClass),this.modalDialogClass&&this.modalDialog.classList.add(this.modalDialogClass),this.windowClass&&this.modal.classList.add(this.windowClass),this.keyboard&&window.addEventListener("keydown",this.onKeydown),this.slideDown(this.modalContent)}handleKeydown(t){"Escape"===t.key&&this.dismiss(t.key)}disconnectedCallback(){window.removeEventListener("keydown",this.onKeydown)}async dismiss(t){if(this.beforeDismiss){!1!==await this.beforeDismiss(t)&&this.slideUp(this.modalContent,(()=>this.dismissed.emit(t)))}else this.slideUp(this.modalContent,(()=>this.dismissed.emit(t)))}async close(t){this.slideUp(this.modalContent,(()=>this.closed.emit(t)))}render(){return(0,r.h)(r.H,{id:this.modalId},(0,r.h)("div",{class:{animation:this.animation,modal:!0,backdrop:"static"===this.backdrop||this.backdrop,"align-items-center":this.centered,scrollable:this.scrollable},"aria-describedby":this.ariaDescribedBy,"aria-labelledby":this.ariaLabelledBy},(0,r.h)("div",{class:{"modal-dialog":!0,"modal-sm":"sm"===this.size,"modal-lg":"lg"===this.size,"modal-xl":"xl"===this.size}},(0,r.h)("div",{class:"modal-content"},void 0===this.icon||""===this.icon?"":(0,r.h)("div",{class:"state-icon-container"},(0,r.h)("ix-icon",{name:this.icon,size:"32",color:this.iconColor})),(0,r.h)("div",{class:"slot-container"},(0,r.h)("slot",null))))))}get hostElement(){return(0,r.g)(this)}};l.style=".sc-ix-modal-h{position:relative;width:100vw;height:100vh}.sc-ix-modal-h .modal.sc-ix-modal{display:flex}.sc-ix-modal-h .modal.animation.sc-ix-modal{animation:modal-fade 300ms ease-in-out}.sc-ix-modal-h .modal.backdrop.sc-ix-modal{background-color:var(--theme-color-lightbox);-webkit-backdrop-filter:blur(4px);backdrop-filter:blur(4px);transition:none}.sc-ix-modal-h .modal.backdrop.animation.sc-ix-modal{transition:-webkit-backdrop-filter 0ms ease-in-out;transition:backdrop-filter 0ms ease-in-out;transition:backdrop-filter 0ms ease-in-out, -webkit-backdrop-filter 0ms ease-in-out}.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal{flex-grow:1}.sc-ix-modal-h .modal.scrollable.sc-ix-modal .modal-content.sc-ix-modal{max-height:100%}.sc-ix-modal-h .modal.scrollable.sc-ix-modal .modal-content.sc-ix-modal .modal-body.sc-ix-modal{overflow-y:auto}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal{box-shadow:var(--theme-modal--box-shadow);flex-direction:row;background-color:var(--theme-modal--background);border:var(--modal--border-thickness) solid var(--theme-modal--border-color);padding:1.5rem;max-height:100vh}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal .state-icon-container.sc-ix-modal{-webkit-margin-end:1rem;margin-inline-end:1rem}.sc-ix-modal-h .modal.sc-ix-modal .modal-content.sc-ix-modal .slot-container.sc-ix-modal{flex-grow:1}@media (min-width: 576px){.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal:not(.modal-dialog-centered){margin:2.5rem auto}}@media (max-width: 575.98px){.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal{height:100%;margin:0}.sc-ix-modal-h .modal.sc-ix-modal .modal-dialog.sc-ix-modal .modal-content.sc-ix-modal{height:100%;border-radius:0}}@keyframes modal-fade{from{opacity:0%}to{opacity:100%}}@keyframes slide-down{from{top:-100%}to{top:32px}}";var u=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(t);a<r.length;a++)e.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(t,r[a])&&(n[r[a]]=t[r[a]])}return n};const c=class{constructor(t){(0,r.r)(this,t)}get modalStack(){return this.hostElement.querySelector(":scope > div.modal-stack")}async showModal(t){const e=new o.T,n=new o.T,r=document.createElement("ix-modal");let{title:a,content:i}=t,s=u(t,["title","content"]);if(Object.assign(r,Object.assign({headerTitle:a},s)),"string"==typeof i){const t=document.createElement("template");i=i.trim(),t.innerHTML=i,r.appendChild(t.content.firstChild)}else r.appendChild(i);return this.modalStack.appendChild(r),r.addEventListener("closed",(t=>{t.preventDefault(),t.stopImmediatePropagation(),this.modalStack.removeChild(r),e.emit(t.detail)})),r.addEventListener("dismissed",(t=>{t.preventDefault(),t.stopImmediatePropagation(),this.modalStack.removeChild(r),n.emit(t.detail)})),{htmlElement:r,onClose:e,onDismiss:n}}render(){return(0,r.h)(r.H,null,(0,r.h)("div",{class:"modal-stack"}))}get hostElement(){return(0,r.g)(this)}};c.style=".sc-ix-modal-container-h{position:absolute;top:0;left:0;z-index:9999}"}}]);