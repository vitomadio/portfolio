!function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}({3:function(t,e){var n=document.querySelector("#chevron-right-img"),o=document.querySelector("#chevron-left-img"),r=document.querySelector("#chevron-right-tt"),l=document.querySelector("#chevron-left-tt"),c=(document.querySelector(".project-right-d"),document.querySelector(".right-overlay")),i=window.innerWidth,u=document.querySelector(".carousel"),s=document.querySelector(".slider");o.style.display="none",l.style.display="none";var a=function(t,e,n){var o=this;this.count=t,this.lastImage=e,this.divider=n,this.setCount=function(t){return o.count=o.count+t},this.getScrollWidth=function(){var t=this.lastImage.getBoundingClientRect().right,e=c.offsetWidth;this.scrollWidth=(t-i+e)/this.divider,this.distanceToScroll=this.scrollWidth,console.log(t)}},d=document.querySelectorAll(".imagenary-image")[5];document.addEventListener("DOMContentLoaded",(function(){slide=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){if(1==Object.values(d.classList).indexOf("loaded")&&d.complete){var t=new a(0,d,5);t.getScrollWidth(),document.removeEventListener("scroll",slide),n.onclick=function(){if(t.count<=4){var e=t.setCount(1),r=t.distanceToScroll*e;u.style.transform="translateX(".concat(-r,"px)"),"none"===o.style.display&&(o.style.display="block")}5===t.count&&(n.style.display="none")},o.onclick=function(){if(t.count>=1){var e=t.setCount(-1),r=t.distanceToScroll*e;u.style.transform="translateX(".concat(-r,"px)")}n.style.display="block",0===t.count&&(o.style.display="none")}}})),document.addEventListener("scroll",slide);var t=document.querySelectorAll(".tt-image")[3];slideTwo=function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){if(1==Object.values(t.classList).indexOf("loaded")&&t.complete){var e=new a(0,t,3);e.getScrollWidth(),document.removeEventListener("scroll",slideTwo),r.onclick=function(){if(e.count<=2){var t=e.setCount(1),n=e.distanceToScroll*t;s.style.transform="translateX(".concat(-n,"px)"),"none"===l.style.display&&(l.style.display="block")}3===e.count&&(r.style.display="none")},l.onclick=function(){if(e.count>=1){var t=e.setCount(-1),n=e.distanceToScroll*t;s.style.transform="translateX(".concat(-n,"px)")}r.style.display="block",0===e.count&&(l.style.display="none")}}})),document.addEventListener("scroll",slideTwo)}))}});