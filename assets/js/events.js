(function(e){function t(t){for(var r,a,i=t[0],l=t[1],s=t[2],u=0,p=[];u<i.length;u++)a=i[u],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&p.push(c[a][0]),c[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==c[l]&&(r=!1)}r&&(o.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},c={events:0},o=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var d=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("30ad")},"30ad":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=(n("a4d3"),n("e01a"),{key:0,class:"card-list"}),o={class:"card-img"},a=["src"],i={class:"card-text"},l={class:"card-header"},s={class:"card-title"},d=["href"],u=Object(r["e"])("div",{class:"card-subtitle"},null,-1),p={class:"card-excerpt"},f={class:"card-meta"};function b(e,t,n,b,v,O){return this.loaded_events.length>0?(Object(r["h"])(),Object(r["d"])("div",c,[(Object(r["h"])(!0),Object(r["d"])(r["a"],null,Object(r["k"])(this.loaded_events,(function(e,t){return Object(r["h"])(),Object(r["d"])("div",{class:"card",key:t},[Object(r["e"])("div",o,[Object(r["e"])("img",{src:e.image},null,8,a)]),Object(r["e"])("div",i,[Object(r["e"])("div",l,[Object(r["e"])("div",s,[Object(r["e"])("h3",null,[Object(r["e"])("a",{class:"post-link",href:e.url},Object(r["m"])(e.title),9,d)])]),u]),Object(r["e"])("div",p,Object(r["m"])(e.description),1),Object(r["e"])("div",f,Object(r["m"])(e.date),1)])])})),128))])):Object(r["c"])("",!0)}var v={name:"App",components:{},data:function(){return{loaded_events:[]}},mounted:function(){this.$nextTick((function(){this.loaded_events=window.page_events,console.log(this.loaded_events)}))}},O=n("d959"),j=n.n(O);const h=j()(v,[["render",b]]);var y=h;Object(r["b"])(y).mount("#app")}});
//# sourceMappingURL=events.js.map