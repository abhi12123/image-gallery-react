(this["webpackJsonpimage-gallery"]=this["webpackJsonpimage-gallery"]||[]).push([[0],{10:function(e,t,c){},11:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(1),a=c.n(n),r=c(4),i=c.n(r),j=c(2),b=function(e){var t=e.image;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("img",{src:t.webformatURL}),Object(s.jsxs)("div",{children:["Photo by ",Object(s.jsx)("b",{children:t.user})]}),Object(s.jsxs)("ul",{children:[Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{class:"fas fa-eye"})," ",t.views]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{class:"fas fa-download"})," ",t.downloads]}),Object(s.jsxs)("li",{children:[Object(s.jsx)("i",{class:"fas fa-heart"})," ",t.likes]})]})]})},l=(c(10),function(e){var t=e.searchText,c=Object(n.useState)(""),a=Object(j.a)(c,2),r=a[0],i=a[1];return Object(s.jsx)("div",{className:"search",children:Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(r)},children:[Object(s.jsx)("input",{placeholder:"Enter text here",type:"text",onChange:function(e){return i(e.target.value)}}),Object(s.jsx)("button",{type:"submit",children:"Search"})]})})});var o=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(""),i=Object(j.a)(r,2),o=i[0],u=i[1];return Object(n.useEffect)((function(){fetch("https://pixabay.com/api/?key=19313917-cad86abf6397bc4bbe909475e&q=".concat(o,"&image_type=photo")).then((function(e){return e.json()})).then((function(e){a(e.hits)}))}),[o]),Object(s.jsxs)("div",{children:[Object(s.jsx)(l,{searchText:function(e){return u(e)}}),Object(s.jsx)("div",{className:"cards",children:c.map((function(e){return Object(s.jsx)(b,{image:e},e.id)}))})]})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(o,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.fb0cb5e2.chunk.js.map