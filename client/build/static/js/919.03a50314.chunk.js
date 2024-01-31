"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[919],{7370:function(e,n,s){s.d(n,{Z:function(){return k}});s(2791);var r=s(1413),t=s(9439),a=s(1087),c=s(9805),l=s(8241),i=s(3402),o=s(183),d=s(4165),u=s(5861),h=s(5102),m=s(1243),x=s(7689),v=s(184),p=function(){var e=(0,h.R)(),n=(0,t.Z)(e,2),s=n[0],a=n[1],c=(0,x.s0)(),l=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){var t,l;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,m.Z.get("/api/v1/product/search/".concat(s.keyword));case 4:t=e.sent,l=t.data,a((0,r.Z)((0,r.Z)({},s),{},{results:l})),c("/search"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{className:"d-flex",role:"search",onSubmit:l,children:[(0,v.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:s.keyword,onChange:function(e){return a((0,r.Z)((0,r.Z)({},s),{},{keyword:e.target.value}))}}),(0,v.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})},j=s(4904),g=s(6224),f=s(574),N=function(){var e,n,s=(0,g.j)(),d=(0,t.Z)(s,1)[0],u=(0,l.a)(),h=(0,t.Z)(u,2),m=h[0],x=h[1],N=(0,j.Z)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[(0,v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,v.jsx)("span",{className:"navbar-toggler-icon"})}),(0,v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,v.jsxs)(a.rU,{to:"/",className:"navbar-brand",children:[(0,v.jsx)("img",{src:o,width:100,height:60,alt:"broken"}),"New Century Books"]}),(0,v.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0 p-3",children:[(0,v.jsx)(p,{}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(a.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(a.rU,{className:"nav-link dropdown-toggle",to:"/categories","data-bs-toggle":"dropdown",children:"Categories"}),(0,v.jsxs)("ul",{className:"dropdown-menu",children:[(0,v.jsx)("li",{children:(0,v.jsx)(a.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"})}),null===N||void 0===N?void 0:N.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(a.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:e.name})})}))]})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(a.OL,{to:"/Shop",className:"nav-link",children:"Shop"})}),m.user?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(a.OL,{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:null===m||void 0===m||null===(e=m.user)||void 0===e?void 0:e.firstName}),(0,v.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end",children:[(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{to:"/dashboard/".concat(1===(null===m||void 0===m||null===(n=m.user)||void 0===n?void 0:n.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,v.jsx)("li",{children:(0,v.jsx)(a.OL,{onClick:function(){x((0,r.Z)((0,r.Z)({},m),{},{user:null,token:""})),localStorage.removeItem("auth"),i.ZP.success("Logout Successfully")},to:"/login",className:"dropdown-item",children:"Logout"})})]})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(a.OL,{to:"/register",className:"nav-link",children:"Sign Up"})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(a.OL,{to:"/login",className:"nav-link",children:"Sign In"})})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(f.Z,{count:null===d||void 0===d?void 0:d.length,showZero:!0,children:(0,v.jsx)(a.OL,{to:"/cart",className:"nav-link",children:(0,v.jsx)(c.FeP,{})})})})]})]})]})})},b=function(){return(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsxs)("h4",{className:"text-center",children:["All Rights Reserved \xa9 New Century Books"," "]}),(0,v.jsxs)("p",{className:"text-center mt-3",children:[(0,v.jsx)(a.rU,{to:"/about",children:"About"}),"|",(0,v.jsx)(a.rU,{to:"/contact",children:"Contact"})]})]})},w=s(4270),Z=(s(5462),function(e){var n=e.children,s=e.title,r=e.description,t=e.keywords,a=e.author;return(0,v.jsxs)("div",{children:[(0,v.jsxs)(w.q,{children:[(0,v.jsx)("meta",{charSet:"utf-8"}),(0,v.jsx)("meta",{name:"description",content:r}),(0,v.jsx)("meta",{name:"keywords",content:t}),(0,v.jsx)("meta",{name:"author",content:a}),(0,v.jsx)("title",{children:s})]}),(0,v.jsx)(N,{}),(0,v.jsxs)("main",{style:{minHeight:"90vh"},children:[(0,v.jsx)(i.x7,{}),n]}),(0,v.jsx)(b,{})]})});Z.defaultProps={title:"New Century Books",description:"ecommerce shop",keywords:"mern,react,node,mngodb",author:"Yad"};var k=Z},7600:function(e,n,s){s(2791);var r=s(1087),t=s(184);n.Z=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"text-center",children:(0,t.jsxs)("div",{className:"list-group",children:[(0,t.jsx)("h4",{children:"Dashboard"}),(0,t.jsx)(r.OL,{to:"/dashboard/user/profile",className:"list-group-item list-group-item-action",children:"Profile"}),(0,t.jsx)(r.OL,{to:"/dashboard/user/orders",className:"list-group-item list-group-item-action",children:"View Orders"})]})})})}},4904:function(e,n,s){s.d(n,{Z:function(){return i}});var r=s(4165),t=s(5861),a=s(9439),c=s(2791),l=s(1243);function i(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),s=n[0],i=n[1],o=function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("/api/v1/category/get-category");case 3:n=e.sent,s=n.data,i(null===s||void 0===s?void 0:s.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){o()}),[]),s}},3919:function(e,n,s){s.r(n);var r=s(4165),t=s(5861),a=s(9439),c=s(2791),l=s(7600),i=s(7370),o=s(1243),d=s(8241),u=s(2426),h=s.n(u),m=s(184);n.default=function(){var e=(0,c.useState)([]),n=(0,a.Z)(e,2),s=n[0],u=n[1],x=(0,d.a)(),v=(0,a.Z)(x,2),p=v[0],j=(v[1],function(){var e=(0,t.Z)((0,r.Z)().mark((function e(){var n,s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/v1/auth/orders");case 3:n=e.sent,s=n.data,u(s),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}());return(0,c.useEffect)((function(){null!==p&&void 0!==p&&p.token&&j()}),[null===p||void 0===p?void 0:p.token]),(0,m.jsx)(i.Z,{title:"Your Orders",children:(0,m.jsx)("div",{className:"container-flui p-3 m-3 dashboard",children:(0,m.jsxs)("div",{className:"row",children:[(0,m.jsx)("div",{className:"col-md-3",children:(0,m.jsx)(l.Z,{})}),(0,m.jsxs)("div",{className:"col-md-9",children:[(0,m.jsx)("h1",{className:"text-center",children:"All Orders"}),null===s||void 0===s?void 0:s.map((function(e,n){var s,r,t;return(0,m.jsxs)("div",{className:"border shadow",children:[(0,m.jsxs)("table",{className:"table",children:[(0,m.jsx)("thead",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("th",{scope:"col",children:"#"}),(0,m.jsx)("th",{scope:"col",children:"Status"}),(0,m.jsx)("th",{scope:"col",children:"Buyer"}),(0,m.jsx)("th",{scope:"col",children:"Date"}),(0,m.jsx)("th",{scope:"col",children:"Payment"}),(0,m.jsx)("th",{scope:"col",children:"Quantity"})]})}),(0,m.jsx)("tbody",{children:(0,m.jsxs)("tr",{children:[(0,m.jsx)("td",{children:n+1}),(0,m.jsx)("td",{children:null===e||void 0===e?void 0:e.status}),(0,m.jsx)("td",{children:null===e||void 0===e||null===(s=e.buyer)||void 0===s?void 0:s.firstName}),(0,m.jsx)("td",{children:h()(null===e||void 0===e?void 0:e.createdAt).fromNow()}),(0,m.jsx)("td",{children:null!==e&&void 0!==e&&e.payment.success?"Success":"Failed"}),(0,m.jsx)("td",{children:null===e||void 0===e||null===(r=e.products)||void 0===r?void 0:r.reduce((function(e,n){return e+n.quantity}),0)})]})})]}),(0,m.jsx)("div",{className:"container",children:null===e||void 0===e||null===(t=e.products)||void 0===t?void 0:t.map((function(e,n){return(0,m.jsxs)("div",{className:"row mb-2 p-3 card flex-row",children:[(0,m.jsx)("div",{className:"col-md-4",children:(0,m.jsx)("img",{src:"/api/v1/product/product-photo/".concat(e.product._id),className:"card-img-top",alt:e.name,width:"100px",height:"160px"})}),(0,m.jsxs)("div",{className:"col-md-8",children:[(0,m.jsx)("p",{children:e.product.name}),(0,m.jsx)("p",{children:e.product.description.substring(0,30)}),(0,m.jsxs)("p",{children:["Price: ",e.product.price]}),(0,m.jsxs)("p",{children:["Quantity: ",e.quantity]})]})]},e.product._id)}))})]},n)}))]})]})})})}},183:function(e,n,s){e.exports=s.p+"static/media/ncblogo.224df00ba05c159aadbd.png"}}]);
//# sourceMappingURL=919.03a50314.chunk.js.map