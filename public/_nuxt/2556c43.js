(window.webpackJsonp=window.webpackJsonp||[]).push([[7,6],{263:function(t,e,n){"use strict";n.r(e);var r={name:"HeaderComponent",data:function(){return{name:"Abba Sali",profilPicture:n(264),setID:"about"}},computed:{pseudo:function(){return this.$store.state.infos.pseudo},headerLinksWeb:function(){return this.$store.state.header.headerlinks}},mounted:function(){var t=document.querySelector("button.mobile-menu-button"),menu=document.querySelector(".mobile-menu");t.addEventListener("click",(function(){menu.classList.toggle("hidden")}))}},l=n(49),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"site__header sticky top-0 z-50"},[n("nav",{staticClass:"bg-white shadow-lg"},[n("div",{staticClass:"max-w-6xl mx-auto px-4"},[n("div",{staticClass:"flex justify-between"},[n("div",{staticClass:"flex md:w-full md:justify-between"},[n("div",[n("a",{staticClass:"flex items-center py-4",staticStyle:{"font-family":"'Inter', sans-serif"},attrs:{href:"#"}},[n("img",{staticClass:"h-8 w-8 mr-2 rounded-full",attrs:{src:t.profilPicture,alt:"Logo"}}),t._v(" "),n("span",{staticClass:"font-semibold text-gray-500 text-lg"},[t._v("\n                "+t._s(t.pseudo))])])]),t._v(" "),n("div",{staticClass:"hidden md:flex items-center space-x-1 uppercase",staticStyle:{"font-family":"'Inter', sans-serif"}},t._l(t.headerLinksWeb,(function(e,r){return n("div",{key:r,on:{click:function(n){t.setID=e.myLink}}},[n("a",{class:"\n                  py-4\n                  px-2\n                  text-gray-500\n                  font-semibold\n                  hover:text-green-500\n                  transition\n                  duration-300\n                  "+(t.setID===e.myLink?"border-b-4 border-green-500":"")+"\n                  ",attrs:{href:e.myLink}},[t._v(t._s(e.name))])])})),0)]),t._v(" "),n("div",{staticClass:"md:hidden flex items-center",staticStyle:{"font-family":"'Open Sans', sans-serif"}},[n("button",{staticClass:"outline-none mobile-menu-button"},[n("svg",{staticClass:"w-6 h-6 text-gray-500 hover:text-green-500",attrs:{"x-show":"!showMenu",fill:"none","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",viewBox:"0 0 24 24",stroke:"currentColor"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16"}})])])])])]),t._v(" "),n("div",{staticClass:"hidden mobile-menu"},t._l(t.headerLinksWeb,(function(e,r){return n("ul",{key:r,attrs:{"x-show":"!showMenu"},on:{click:function(n){t.setID=e.myLink}}},[n("li",[n("a",{class:"\n              block\n              text-sm\n              px-2\n              py-4\n              hover:bg-green-500\n              transition\n              duration-300\n              "+(t.setID===e.myLink?"bg-green-500":"")+"\n              ",attrs:{href:e.myLink}},[t._v(t._s(e.name))])])])})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(263).default})},264:function(t,e,n){t.exports=n.p+"img/profile.509778d.jpg"},265:function(t,e,n){"use strict";n.r(e);var r={name:"ItemComponent",props:["title","subTitle","content","year","myItem"]},l=n(49),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"site__item pt-5 md:pt-8"},[n("header",{staticClass:"\n      site__item-header\n      flex flex-col\n      md:flex-row md:justify-between md:items-center\n    ",staticStyle:{"font-family":"'Saira Extra Condensed', sans-serif"}},[n("div",{staticClass:"site__item-text"},[n("h4",{staticClass:"\n          site__about__name\n          text-gray-900\n          uppercase\n          text-xl\n          font-medium\n          md:text-3xl\n        "},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),n("p",{staticClass:"\n          site__about__content\n          leading-7\n          text-xs\n          md:text-lg\n          font-medium\n          text-gray-500\n          pb-2\n        ",staticStyle:{"font-family":"'Inter', sans-serif"}},[t._v("\n        "+t._s(t.subTitle)+"\n      ")])]),t._v(" "),n("div",{staticClass:"site__item-year"},[n("p",{staticClass:"\n          site__about__content\n          md:leading-7\n          text-xs\n          font-medium\n          md:text-base\n          text-red-600\n        ",staticStyle:{"font-family":"'Inter', sans-serif"}},[t._v("\n        "+t._s(t.year)+"\n      ")])])]),t._v(" "),n("div",{staticClass:"site__item-content"},[n("p",{staticClass:"\n        site__about__content\n        py-0\n        md:py-2\n        leading-7\n        text-xs\n        md:text-base\n        text-gray-500\n      ",staticStyle:{"font-family":"'Inter', sans-serif"}},[t._v("\n      "+t._s(t.content)+"\n    ")])]),t._v(" "),t._l(t.myItem,(function(e,r){return n("div",{key:r,staticClass:"site__about__content-item"},[n("ul",[n("li",[n("a",{staticClass:"\n            text-green-500 text-xs\n            font-medium\n            transform\n            transition\n            duration-500\n            hover:scale-125 hover:underline\n          ",staticStyle:{"font-family":"'Inter', sans-serif"},attrs:{href:e.link}},[t._v(t._s(e.name))])])])])}))],2)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Header:n(263).default})}}]);