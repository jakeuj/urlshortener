(this["webpackJsonpurlshortener-front"]=this["webpackJsonpurlshortener-front"]||[]).push([[3],{332:function(t,n,e){"use strict";e.r(n),e.d(n,"getCLS",(function(){return v})),e.d(n,"getFCP",(function(){return y})),e.d(n,"getFID",(function(){return k})),e.d(n,"getLCP",(function(){return C})),e.d(n,"getTTFB",(function(){return P}));var i,r,a,o,u=function(t,n){return{name:t,value:void 0===n?-1:n,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},f=!1,s=function(t,n){f||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),f=!0),addEventListener("visibilitychange",(function e(i){"hidden"===document.visibilityState&&(t(i),n&&removeEventListener("visibilitychange",e,!0))}),!0)},d=function(t){addEventListener("pageshow",(function(n){n.persisted&&t(n)}),!0)},m="function"==typeof WeakSet?new WeakSet:new Set,p=function(t,n,e){var i;return function(){n.value>=0&&(e||m.has(n)||"hidden"===document.visibilityState)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,t(n)))}},v=function(t,n){var e,i=u("CLS",0),r=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),e())},a=c("layout-shift",r);a&&(e=p(t,i,n),s((function(){a.takeRecords().map(r),e()})),d((function(){i=u("CLS",0),e=p(t,i,n)})))},l=-1,h=function(){return"hidden"===document.visibilityState?0:1/0},S=function(){s((function(t){var n=t.timeStamp;l=n}),!0)},g=function(){return l<0&&(l=h(),S(),d((function(){setTimeout((function(){l=h(),S()}),0)}))),{get timeStamp(){return l}}},y=function(t,n){var e,i=g(),r=u("FCP"),a=c("paint",(function(t){"first-contentful-paint"===t.name&&(a&&a.disconnect(),t.startTime<i.timeStamp&&(r.value=t.startTime,r.entries.push(t),m.add(r),e()))}));a&&(e=p(t,r,n),d((function(i){r=u("FCP"),e=p(t,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),e()}))}))})))},w={passive:!0,capture:!0},E=new Date,L=function(t,n){i||(i=n,r=t,a=new Date,F(removeEventListener),T())},T=function(){if(r>=0&&r<a-E){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(n){n(t)})),o=[]}},b=function(t){if(t.cancelable){var n=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,n){var e=function(){L(t,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",e,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",e,w),addEventListener("pointercancel",i,w)}(n,t):L(n,t)}},F=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return t(n,b,w)}))},k=function(t,n){var e,a=g(),f=u("FID"),v=function(t){t.startTime<a.timeStamp&&(f.value=t.processingStart-t.startTime,f.entries.push(t),m.add(f),e())},l=c("first-input",v);e=p(t,f,n),l&&s((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&d((function(){var a;f=u("FID"),e=p(t,f,n),o=[],r=-1,i=null,F(addEventListener),a=v,o.push(a),T()}))},C=function(t,n){var e,i=g(),r=u("LCP"),a=function(t){var n=t.startTime;n<i.timeStamp&&(r.value=n,r.entries.push(t)),e()},o=c("largest-contentful-paint",a);if(o){e=p(t,r,n);var f=function(){m.has(r)||(o.takeRecords().map(a),o.disconnect(),m.add(r),e())};["keydown","click"].forEach((function(t){addEventListener(t,f,{once:!0,capture:!0})})),s(f,!0),d((function(i){r=u("LCP"),e=p(t,r,n),requestAnimationFrame((function(){requestAnimationFrame((function(){r.value=performance.now()-i.timeStamp,m.add(r),e()}))}))}))}},P=function(t){var n,e=u("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)}}}]);
//# sourceMappingURL=3.1dde9222.chunk.js.map