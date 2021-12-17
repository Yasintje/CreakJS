(()=>{"use strict";var t={154:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(81),a=n.n(r),o=n(645),s=n.n(o)()(a());s.push([t.id,"*{\r\n    margin: 0px;\r\n    font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n.nav{\r\n    padding: 2px;\r\n    display: flex;\r\n    background: rgb(30, 30, 30);\r\n}\r\n\r\n.nav a{\r\n    padding: 20px;\r\n    color: white;\r\n    text-decoration: none;\r\n}\r\n\r\n#test{\r\n    padding: 50px;\r\n}",""]);const i=s},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,a,o){"string"==typeof t&&(t=[[null,t,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var o={},s=[],i=0;i<t.length;i++){var c=t[i],u=r.base?c[0]+r.base:c[0],l=o[u]||0,p="".concat(u," ").concat(l);o[u]=l+1;var d=n(p),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(h);else{var m=a(h,r);r.byIndex=i,e.splice(i,0,{identifier:p,updater:m,references:1})}s.push(p)}return s}function a(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,a){var o=r(t=t||[],a=a||{});return function(t){t=t||[];for(var s=0;s<o.length;s++){var i=n(o[s]);e[i].references--}for(var c=r(t,a),u=0;u<o.length;u++){var l=n(o[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var a=e[r];if(void 0!==a)return a.exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{const t={path:"/",title:"Home",template:`\n        <nav class="nav">\n            <a href="/" data-link>Home</a>\n            <a href="/about/${Math.floor(10*Math.random())}" data-link>About</a>\n        </nav>\n\n        <cjs-counter></cjs-counter>\n    `,onload:({})=>{console.log("Home page 🧱")}},e={path:"/about/:id",title:"about",onload:({id:t})=>{console.log("About page 🧱"),console.log(`id: ${t} 🔥`)},template:`\n        <nav class="nav">\n            <a href="/" data-link>Home</a>\n            <a href="/about/${Math.floor(10*Math.random())}" data-link>About</a>\n        </nav>\n\n        <cjs-counter></cjs-counter>\n    `};class r extends HTMLElement{state={};constructor(){super(),this.update(),this.setAttribute("state",JSON.stringify(this.state))}update(){let t=()=>{JSON.stringify(this.state)!==this.getAttribute("state")?window.requestAnimationFrame((()=>{this.renderComponent(),this.setAttribute("state",JSON.stringify(this.state)),t()})):window.requestAnimationFrame((()=>t()))};window.requestAnimationFrame((()=>t()))}connectedCallback(){this.prepare(),this.renderComponent()}getAttribute(t){return super.getAttribute(t)??""}addEventListener(t,{onclick:e}){let n=this.getElement(t);"function"==typeof e&&(n.onclick=t=>e(t))}getAttributes(){var t={};let e=this.attributes;for(let n=0;n<e.length;n++){let r=e[n];"state"!==r.name&&(t[r.name]=r.value)}return t}getElement(t){return this.querySelector(t)}renderComponent(){this.innerHTML=this.render(),this.handle()}prepare(){}handle(){}render(){return""}static register(t){let e=Object.values(t),n=Object.keys(t);e.forEach(((t,e)=>{customElements.define(n[e],t)}))}}const a=r;var o=n(379),s=n.n(o),i=n(795),c=n.n(i),u=n(569),l=n.n(u),p=n(565),d=n.n(p),h=n(216),m=n.n(h),f=n(589),g=n.n(f),v=n(154),b={};b.styleTagTransform=g(),b.setAttributes=d(),b.insert=l().bind(null,"head"),b.domAPI=c(),b.insertStyleElement=m(),s()(v.Z,b),v.Z&&v.Z.locals&&v.Z.locals,a.register({"cjs-counter":class extends a{prepare(){this.state.count=0}handle(){this.addEventListener("#btn",{onclick:function(t){this.state.count++}.bind(this)})}render(){return`\n            <h1>Counter</h1>\n            <p>${this.state.count}</p>\n            <button id="btn">Increment</button>\n        `}}}),new class{map=null;render=null;lastRout=null;constructor(t,e){this.map=new class{routes={};constructor(t){this.routes=t}getData(t){return this.routes.map((e=>({route:e,result:t.match(new RegExp("^"+t.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$"))})))}get(t,e){return new class{constructor(t,e,n){this.pathname=t,this.map=e,this.mount=n}getParams(){const t=this.getMatch(this.pathname),e=t.result.slice(1),n=Array.from(t.route.path.matchAll(/:(\w+)/g)).map((t=>t[1]));return Object.fromEntries(n.map(((t,n)=>[t,e[n]])))}getRoute(){let t=this.getMatch();return null===t?null:t.route??null}getMatch(){return this.map.routes.map((t=>({route:t,result:location.pathname.match(new RegExp("^"+t.path.replace(/\//g,"\\/").replace(/:\w+/g,"(.+)")+"$"))}))).find((t=>null!==t.result))||null}render(){let t=this.getRoute(),{template:e,title:n}=t;this.mount.innerHTML=e??"",document.title=n??""}onload(){let t=this.getRoute();"function"==typeof t.onload&&t.onload(this.getParams())}unload(){let t=this.getRoute();"function"==typeof t.unload&&t.unload()}}(t,this,e)}exists(t){return void 0===this.getData(t)[0].result}}(e),this.mount=document.querySelector(t)}start(){window.addEventListener("click",(t=>{t.preventDefault(),t.target.matches("[data-link]")||!t.target.matches("[href]")?t.target.matches("[data-link]")&&t.target.matches("[href]")&&(history.pushState(null,null,t.target.href),this.redirect(location.pathname)):window.open(t.target.href)})),window.onpopstate=t=>{this.redirect(location.pathname)},window.onload=this.redirect(location.pathname)}redirect(t){let e=this.map.get(t,this.mount);this.map.exists(t)||null===e.getRoute()?history.back():(null!==this.lastRout&&this.lastRout.unload(),e.onload(),e.render(e),this.lastRout=e)}static getParam(t){if(t=new RegExp("[?&]"+encodeURIComponent(t)+"=([^&]*)").exec(location.search))return decodeURIComponent(t[1]).toString()}}("#App",[t,e]).start()})()})();