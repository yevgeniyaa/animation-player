!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=15)}([function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",r=e[3];if(!r)return t;if(n&&"function"==typeof btoa){var i=(o=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),a=r.sources.map(function(e){return"/*# sourceURL="+r.sourceRoot+e+" */"});return[t].concat(a).concat([i]).join("\n")}var o;return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},i=0;i<this.length;i++){var a=this[i][0];null!=a&&(r[a]=!0)}for(i=0;i<e.length;i++){var o=e[i];null!=o[0]&&r[o[0]]||(t&&!o[2]?o[2]=t:t&&(o[2]="("+o[2]+") and ("+t+")"),n.push(o))}},n}},function(e,n,t){var r,i,a={},o=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=r.apply(this,arguments)),i}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var r=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}n[e]=r}return n[e]}}(),c=null,l=0,d=[],u=t(5);function f(e,n){for(var t=0;t<e.length;t++){var r=e[t],i=a[r.id];if(i){i.refs++;for(var o=0;o<i.parts.length;o++)i.parts[o](r.parts[o]);for(;o<r.parts.length;o++)i.parts.push(b(r.parts[o],n))}else{var s=[];for(o=0;o<r.parts.length;o++)s.push(b(r.parts[o],n));a[r.id]={id:r.id,refs:1,parts:s}}}}function p(e,n){for(var t=[],r={},i=0;i<e.length;i++){var a=e[i],o=n.base?a[0]+n.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[o]?r[o].parts.push(s):t.push(r[o]={id:o,parts:[s]})}return t}function h(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=d[d.length-1];if("top"===e.insertAt)r?r.nextSibling?t.insertBefore(n,r.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),d.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(e.insertAt.before,t);t.insertBefore(n,i)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=d.indexOf(e);n>=0&&d.splice(n,1)}function v(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return t.nc}();r&&(e.attrs.nonce=r)}return g(n,e.attrs),h(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function b(e,n){var t,r,i,a;if(n.transform&&e.css){if(!(a="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=a}if(n.singleton){var o=l++;t=c||(c=v(n)),r=x.bind(null,t,o,!1),i=x.bind(null,t,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(n,e.attrs),h(e,n),n}(n),r=function(e,n,t){var r=t.css,i=t.sourceMap,a=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||a)&&(r=u(r));i&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var o=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(o),s&&URL.revokeObjectURL(s)}.bind(null,t,n),i=function(){m(t),t.href&&URL.revokeObjectURL(t.href)}):(t=v(n),r=function(e,n){var t=n.css,r=n.media;r&&e.setAttribute("media",r);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){m(t)});return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=o()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=p(e,n);return f(t,n),function(e){for(var r=[],i=0;i<t.length;i++){var o=t[i];(s=a[o.id]).refs--,r.push(s)}e&&f(p(e,n),n);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var y,_=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function x(e,n,t,r){var i=t?"":r.css;if(e.styleSheet)e.styleSheet.cssText=_(n,i);else{var a=document.createTextNode(i),o=e.childNodes;o[n]&&e.removeChild(o[n]),o.length?e.insertBefore(a,o[n]):e.appendChild(a)}}},function(e,n,t){var r=t(4);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){var r=t(6);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"html, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed,\r\nfigure, figcaption, footer, header, hgroup,\r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure,\r\nfooter, header, hgroup, menu, nav, section {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol, ul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote, q {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}",""])},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,r=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var i,a=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(i=0===a.indexOf("//")?a:0===a.indexOf("/")?t+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"body {\n    width: 100vw;\n    height: 100vh;\n    font-family: Roboto, sans-serif;\n    min-width: 1300px;\n}\n\n.header {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24), 0 0 4px rgba(0, 0, 0, 0.12);\n    padding-left: 8px;\n}\n\n.header__title {\n    font-weight: 500;\n    font-size: 20px;\n    line-height: 23px;\n    padding: 0 0 8px 0;\n    display: inline-block;\n}\n\n.header__menu-button {\n    padding: 2px 1px;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: left;\n    margin-bottom: 8px;\n    border: 2px solid transparent;\n    background-color: transparent;\n    display: inline-block;\n}\n\n.header__menu-button i {\n    padding: 10px;\n}\n\n.player-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n    padding-top: 80px;\n}\n\n.frame__tile {\n    width: 30px;\n    height: 30px;\n    position: absolute;\n    opacity: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    border: 2px solid lightblue;\n    box-sizing: border-box;\n}\n\n._hidden {\n    opacity: 0;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    box-sizing: border-box;\n}\n",""])},function(e,n,t){var r=t(8);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/*\n* Preview\n*/\n\n.preview-container {\n    position: relative;\n}\n\n.preview__fps {\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.preview__fps span {\n    min-width: 51px;\n}\n\n.preview__full-screen-action {\n    opacity: 0.8;\n    bottom: 0;\n    left: 0;\n    cursor: pointer;\n}\n\n.preview__canvas-container {\n    background-color: white;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n",""])},function(e,n,t){var r=t(10);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/*\n* Canvas\n*/\n\n.canvas {\n    display: inline-flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    width: 731px;\n    height: 731px;\n}\n\n.canvas__item {\n    width: 33%;\n    height: 33%;\n    background: #cccccc;\n    border: 2px solid transparent;\n    box-sizing: border-box;\n}\n\n._round {\n    border-radius: 50%;\n}\n\n._draggable {\n    cursor: move;\n}\n\n._interactable {\n    cursor: cell;\n}\n\n._transparent {\n    opacity: 0.4;\n}\n\n._opaque {\n    opacity: 1;\n}\n\n._underlined {\n    text-decoration: underline;\n}\n\n.canvas__item._over {\n    border: 2px dashed #000;\n}\n",""])},function(e,n,t){var r=t(12);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/*\n* Frames\n*/\n\n.frame-items {\n    display: flex;\n    flex-direction: column;\n}\n\n.frame._current {\n    border: 2px solid lightblue;\n}\n\n.frame__add-new {\n    display: flex;\n    align-items: center;\n    padding: 6px;\n    font-size: 16px;\n    font-family: Roboto, sans-serif;\n}\n\n.frame__add-new,\n.frame-container {\n    cursor: pointer;\n}\n\n.frame__add-new,\n.frame,\n.preview__canvas {\n    border: 2px solid #cccccc;\n    box-sizing: border-box;\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24), 0 0 4px rgba(0, 0, 0, 0.12);\n}\n\n.frame__add-new:hover {\n    box-shadow: 0 4px 4px rgba(173, 216, 230, 0.48), 0 0 4px rgba(173, 216, 230, 0.24);\n}\n\n.frame__add-new-text {\n    font-size: 13px;\n    padding-left: 6px;\n    max-width: 55px;\n}\n\n.frame-container {\n    position: relative;\n    margin-bottom: 15px;\n}\n\n.frames i {\n    pointer-events: none;\n}\n\n.frame-container:hover .frame__tile {\n    opacity: 0.8;\n}\n\n.frame-container:only-child:hover .frame__remove-action {\n    opacity: 0;\n}\n\n.frame__index {\n    background-color: lightblue;\n    top: 0;\n    left: 0;\n    opacity: 0.8;\n}\n\n.frame__remove-action {\n    top: 0;\n    right: 0;\n}\n\n.frame__duplicate-action {\n    bottom: 3px;\n    right: 0;\n}\n",""])},function(e,n,t){var r=t(14);"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(1)(r,i);r.locals&&(e.exports=r.locals)},function(e,n,t){(e.exports=t(0)(!1)).push([e.i,"/*\n* Tools\n*/\n\n.tools {\n    display: inline-flex;\n    flex-direction: column;\n}\n\n.menu {\n    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.24), 0 0 4px rgba(0, 0, 0, 0.12);\n    margin-bottom: 90px;\n}\n\n.menu__button {\n    width: 100%;\n    padding: 14px 16px;\n    font-family: Roboto, sans-serif;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: left;\n    border: 2px solid transparent;\n    background-color: transparent;\n}\n\n.menu__item-text {\n    margin: 0 33px;\n}\n\n.header__menu-button:hover,\n.menu__button:hover,\n.frame__add-new:hover,\n.frame:hover {\n    border: 2px solid lightblue;\n}\n\n.header__menu-button:focus,\n.menu__button:focus {\n    outline: 0;\n}\n\n._active {\n    background-color: lightskyblue;\n}\n\n._circle {\n    height: 20px;\n    width: 20px;\n    border: 1px solid black;\n    border-radius: 50%;\n    display: inline-block;\n    padding: 0;\n}\n\n._red {\n    background-color: red;\n}\n\n._blue {\n    background-color: blue;\n}\n\n._green {\n    background-color: green;\n}\n\n.menu ._circle {\n    margin-bottom: -5px;\n}\n\n.prev-color ._circle {\n    background-color: green;\n}\n\n.current-color ._circle {\n    background-color: #808080;\n}\n\n.current-color ._circle::-webkit-color-swatch {\n    border: none;\n    border-radius: 50%;\n}\n",""])},function(e,n,t){"use strict";t.r(n);class r{constructor(){this.frameList={},this.currentFrame=0,this.appConfig={currentMode:0,currentColor:"#808080"}}getCurrentFrameElement(){return this.frameList[this.currentFrame]}setCurrentFrameElement(e){this.frameList[this.currentFrame]=e}getAppMode(){return this.appConfig.currentMode}updateAppConfig(e,n){this.appConfig[e]=n}}t(2),t(3),t(7);class i{static updateCanvas(e,n){if(e.getContext){const t=e.getContext("2d"),{width:r}=e.getBoundingClientRect();n.forEach((e,n)=>{t.fillStyle=e.color,this.drawFigure(t,(r-4)/3,n%3,Math.floor(n/3),e.isCircle)})}}static drawFigure(e,n,t,r,i){i?(e.clearRect(t*n,r*n,n,n),e.beginPath(),e.arc(t*n+n/2,r*n+n/2,n/2,0,2*Math.PI,!0),e.fill()):e.fillRect(t*n,r*n,n,n)}static rgb2hex(e){if(/^#[0-9A-F]{6}$/i.test(e))return e;function n(e){return`0${parseInt(e,10).toString(16)}`.slice(-2)}return`#${n((e=e.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/))[1])}${n(e[2])}${n(e[3])}`}}class a{constructor(e){this.configHandler=e||new r}handleAnimationPreview(){this.animate&&clearInterval(this.animate);const e=+document.body.querySelector(".preview__fps input").value,n=Object.keys(this.configHandler.frameList);if(!e||n.length<=1)i.updateCanvas(document.body.querySelector(".preview__canvas"),this.configHandler.getCurrentFrameElement());else{let t=0;this.animate=setInterval(()=>{i.updateCanvas(document.body.querySelector(".preview__canvas"),this.configHandler.frameList[n[++t%n.length]])},1e3/e)}}initEventHandlers(){document.body.querySelector(".preview__fps input").addEventListener("input",e=>{document.body.querySelector(".preview__fps span").innerText=`${e.target.value} FPS`,this.handleAnimationPreview()}),document.body.querySelector(".preview__full-screen-action").addEventListener("click",()=>{document.body.querySelector(".preview__canvas-container").requestFullscreen()})}}var o=a;t(9);const s=e=>{e.target.classList.add("_transparent"),e.dataTransfer.effectAllowed="move",e.dataTransfer.setData("text/plain",e.target.id)},c=e=>{e.preventDefault()},l=e=>{e.target.classList.add("_over")},d=e=>{e.target.classList.remove("_over")},u=e=>{e.target.classList.toggle("_round")},f=e=>e.classList.contains("canvas__item");class p{constructor(e){this.configHandler=e.configHandler,this.animationPreview=e.animationPreview||new a(this.configHandler),this.canvasEl=document.body.querySelector(".canvas")}initEventHandlers(){this.canvasEl.addEventListener("click",e=>{if(f(e.target))switch(this.configHandler.getAppMode()){case 1:e.stopPropagation(),this.fillWithColor(e),this.capturePaletteLayout();break;case 4:e.stopPropagation(),u(e),this.capturePaletteLayout()}})}addDnDEvents(){Array.from(this.canvasEl.children).forEach(e=>{e.classList.add("_draggable"),e.addEventListener("dragstart",s),e.addEventListener("dragover",c),e.addEventListener("dragenter",l),e.addEventListener("dragleave",d),e.addEventListener("drop",this.dropHandler.bind(this)),e.addEventListener("dragend",this.dragEndHandler.bind(this))})}removeDnDEvents(){Array.from(this.canvasEl.children).forEach(e=>{e.classList.remove("_draggable"),e.removeEventListener("dragstart",s),e.removeEventListener("dragover",c),e.removeEventListener("dragenter",l),e.removeEventListener("dragleave",d),e.removeEventListener("drop",this.dropHandler.bind(this)),e.removeEventListener("dragend",this.dragEndHandler.bind(this))})}fillWithColor(e){e.target.style.backgroundColor=this.configHandler.appConfig.currentColor}dropHandler(e){e.preventDefault();const n=this.canvasEl.querySelector(`[id="${e.dataTransfer.getData("text")}"]`);if(n===e.target)return!1;const t=n.nextElementSibling;return this.canvasEl.replaceChild(n,e.target),this.canvasEl.insertBefore(e.target,t===e.target?n:t),n.classList.add("_opaque"),this.capturePaletteLayout(),!1}dragEndHandler(){Array.from(this.canvasEl.children).forEach(e=>{e.classList.remove("_over")})}createNewCanvas(){Array.from(this.canvasEl.children).forEach((e,n)=>{e.id=n,e.classList.remove("_round"),e.style.backgroundColor=""})}capturePaletteLayout(){this.configHandler.setCurrentFrameElement(Array.from(this.canvasEl.children,e=>({isCircle:e.classList.contains("_round"),color:getComputedStyle(e).backgroundColor}))),i.updateCanvas(document.body.querySelector(".frame._current"),this.configHandler.getCurrentFrameElement()),this.animationPreview.handleAnimationPreview()}drawPaletteLayout(){const e=this.canvasEl.children;this.configHandler.getCurrentFrameElement().forEach((n,t)=>{n.isCircle?e[t].classList.add("_round"):e[t].classList.remove("_round"),e[t].style.backgroundColor=n.color})}}var h=p;t(11);var m=class{constructor(e){this.configHandler=e.configHandler,this.animationPreview=e.animationPreview||new a(this.configHandler),this.canvas=e.canvas||new p(this.configHandler),this.frameItemsEl=document.body.querySelector(".frame-items"),this.addNewFrameEl=document.body.querySelector(".frame__add-new")}initEventHandlers(){this.addNewFrameEl.addEventListener("click",()=>{this.canvas.createNewCanvas(),this.configHandler.currentFrame=this.getNewIndex(),this.createNewFrame(),this.canvas.capturePaletteLayout()}),this.frameItemsEl.addEventListener("click",e=>{if(e.target.classList.contains("frame__remove-action")&&"0"!==getComputedStyle(e.target).opacity){const n=e.target.parentNode,t=n.querySelector(".frame");t.classList.contains("_current")&&(n.previousElementSibling||n.nextElementSibling).querySelector(".frame").classList.add("_current"),delete this.configHandler.frameList[t.getAttribute("frame-index")],this.configHandler.currentFrame=+this.frameItemsEl.querySelector("._current").getAttribute("frame-index"),this.animationPreview.handleAnimationPreview(),this.canvas.drawPaletteLayout(),this.frameItemsEl.removeChild(n),this.recalculateIndexes()}else if(e.target.classList.contains("frame__duplicate-action")){const n=e.target.parentNode.querySelector(".frame").getAttribute("frame-index");this.configHandler.currentFrame=this.getNewIndex(),this.createNewFrame(),this.configHandler.setCurrentFrameElement([...this.configHandler.frameList[n]]),this.animationPreview.handleAnimationPreview(),this.canvas.drawPaletteLayout(),i.updateCanvas(document.body.querySelector(".frame._current"),this.configHandler.getCurrentFrameElement())}else if(e.target.classList.contains("frame")||e.target.classList.contains("frame__index")||e.target.classList.contains("frame__remove-action")&&"0"===getComputedStyle(e.target).opacity){const n=this.frameItemsEl.querySelector("._current");n.parentNode!==e.target.parentNode&&(n.classList.remove("_current"),e.target.classList.add("_current"),this.configHandler.currentFrame=+e.target.getAttribute("frame-index"),this.animationPreview.handleAnimationPreview(),this.canvas.drawPaletteLayout())}})}recalculateIndexes(){this.frameItemsEl.querySelectorAll(".frame-container").forEach((e,n)=>{e.querySelector(".frame__index").innerText=n+1})}getNewIndex(){const e=this.frameItemsEl.querySelector(".frame-container:last-child");let n;return e&&(n=+e.querySelector(".frame").getAttribute("frame-index")+1),n||0}createNewFrame(){const e=this.frameItemsEl.querySelector("._current");e&&e.classList.remove("_current");const n=document.createElement("div");n.classList.add("frame-container"),n.innerHTML=`<canvas class="frame _current" width="99" height="99" frame-index="${this.configHandler.currentFrame}"></canvas>\n                          <div class="frame__index frame__tile">${Object.keys(this.configHandler.frameList).length+1}</div>\n                          <div class="frame__duplicate-action frame__tile"><i class="fas fa-copy"></i></div>\n                          <div class="frame__remove-action frame__tile"><i class="fas fa-times"></i></div>`,this.frameItemsEl.appendChild(n)}};t(13);class v{constructor(e){this.configHandler=e.configHandler,this.canvas=e.canvas||new p(this.configHandler),this.paletteEl=document.body.querySelector(".palette"),this.colorPickerEl=document.body.querySelector(".color-picker"),this.colorPickerInputEl=this.colorPickerEl.querySelector(".current-color ._circle"),this.currentColorEl=this.colorPickerEl.querySelector(".current-color ._circle"),this.initCurrentColor()}initEventHandlers(){document.addEventListener("keyup",e=>{switch(e.keyCode){case 80:this.setAppMode(1);break;case 67:this.setAppMode(2);break;case 77:this.setAppMode(3);break;case 84:this.setAppMode(4)}}),document.body.addEventListener("click",e=>{switch(this.configHandler.getAppMode()){case 2:this.pickColor(e.target);case 1:case 3:case 4:this.resetAppMode()}}),Array.from(this.paletteEl.children).forEach((e,n)=>{e.addEventListener("click",e=>{e.stopPropagation();const t=this.paletteEl.querySelector("._active");this.setAppMode(t===e.currentTarget?0:n+1,e.currentTarget)})}),Array.from(this.colorPickerEl.children).forEach(e=>{e.addEventListener("click",e=>{e.stopPropagation(),this.pickColor(e.currentTarget.querySelector("._circle")),this.resetAppMode()})}),this.colorPickerInputEl.addEventListener("change",e=>{const n=e.target.value;e.target.style.backgroundColor=n,this.setCurrentColor(n)}),this.colorPickerInputEl.addEventListener("click",e=>{2===this.configHandler.getAppMode()&&e.preventDefault()})}resetAppMode(){switch(this.configHandler.getAppMode()){case 3:this.canvas.removeDnDEvents();break;case 1:case 4:this.canvas.canvasEl.classList.remove("_interactable")}this.configHandler.updateAppConfig("currentMode",0),v.clearActive()}setAppMode(e,n){if(this.configHandler.getAppMode()!==e&&this.resetAppMode(),e)switch((n||this.paletteEl.querySelectorAll("li")[e-1]).classList.add("_active"),this.configHandler.updateAppConfig("currentMode",+e),this.configHandler.getAppMode()){case 1:case 4:this.canvas.canvasEl.classList.add("_interactable");break;case 3:this.canvas.addDnDEvents()}}static clearActive(){document.body.querySelectorAll("._active").forEach(e=>{e.classList.remove("_active")})}pickColor(e){this.setCurrentColor(getComputedStyle(e).backgroundColor)}updateColorPreviews(){const e=Array.from(this.colorPickerEl.children).slice(0,2).map(e=>e.querySelector("._circle"));e[1].style.backgroundColor=this.configHandler.appConfig.prevColor,e[0].style.backgroundColor=this.configHandler.appConfig.currentColor,e[0].value=this.configHandler.appConfig.currentColor}initCurrentColor(){this.configHandler.appConfig.currentColor||this.configHandler.updateAppConfig("currentColor",getComputedStyle(this.currentColorEl).backgroundColor)}setCurrentColor(e){e&&(e=i.rgb2hex(e))!==this.configHandler.appConfig.currentColor&&(this.configHandler.updateAppConfig("prevColor",this.configHandler.appConfig.currentColor),this.configHandler.updateAppConfig("currentColor",e),this.updateColorPreviews())}}var g=v;(new class{constructor(){this.configHandler=new r,this.animationPreview=new o(this.configHandler),this.canvas=new h(this),this.frameManager=new m(this),this.tools=new g(this)}initEventHandler(){this.animationPreview.initEventHandlers(),this.canvas.initEventHandlers(),this.frameManager.initEventHandlers(),this.tools.initEventHandlers()}initApp(){this.initEventHandler(),Array.from(this.canvas.canvasEl.children).forEach((e,n)=>{e.id=n}),this.canvas.capturePaletteLayout()}}).initApp()}]);