"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[852],{7370:function(e,n,a){a.d(n,{Z:function(){return y}});a(2791);var s=a(1413),t=a(9439),r=a(1087),o=a(9805),l=a(8241),i=a(3402),c=a(183),d=a(4165),u=a(5861),h=a(5102),m=a(1243),x=a(7689),g=a(184),v=function(){var e=(0,h.R)(),n=(0,t.Z)(e,2),a=n[0],r=n[1],o=(0,x.s0)(),l=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){var t,l;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,m.Z.get("/api/v1/product/search/".concat(a.keyword));case 4:t=e.sent,l=t.data,r((0,s.Z)((0,s.Z)({},a),{},{results:l})),o("/search"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,g.jsx)("div",{children:(0,g.jsxs)("form",{className:"d-flex",role:"search",onSubmit:l,children:[(0,g.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:a.keyword,onChange:function(e){return r((0,s.Z)((0,s.Z)({},a),{},{keyword:e.target.value}))}}),(0,g.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})},j=a(4904),p=a(6224),f=a(574),b=function(){var e,n,a=(0,p.j)(),d=(0,t.Z)(a,1)[0],u=(0,l.a)(),h=(0,t.Z)(u,2),m=h[0],x=h[1],b=(0,j.Z)();return(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[(0,g.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,g.jsx)("span",{className:"navbar-toggler-icon"})}),(0,g.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,g.jsxs)(r.rU,{to:"/",className:"navbar-brand",children:[(0,g.jsx)("img",{src:c,width:100,height:60,alt:"broken"}),"New Century Books"]}),(0,g.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0 p-3",children:[(0,g.jsx)(v,{}),(0,g.jsx)("li",{className:"nav-item",children:(0,g.jsx)(r.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,g.jsxs)("li",{className:"nav-item dropdown",children:[(0,g.jsx)(r.rU,{className:"nav-link dropdown-toggle",to:"/categories","data-bs-toggle":"dropdown",children:"Categories"}),(0,g.jsxs)("ul",{className:"dropdown-menu",children:[(0,g.jsx)("li",{children:(0,g.jsx)(r.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"})}),null===b||void 0===b?void 0:b.map((function(e){return(0,g.jsx)("li",{children:(0,g.jsx)(r.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:e.name})})}))]})]}),(0,g.jsx)("li",{className:"nav-item",children:(0,g.jsx)(r.OL,{to:"/Shop",className:"nav-link",children:"Shop"})}),m.user?(0,g.jsx)(g.Fragment,{children:(0,g.jsxs)("li",{className:"nav-item dropdown",children:[(0,g.jsx)(r.OL,{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:null===m||void 0===m||null===(e=m.user)||void 0===e?void 0:e.firstName}),(0,g.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end",children:[(0,g.jsx)("li",{children:(0,g.jsx)(r.OL,{to:"/dashboard/".concat(1===(null===m||void 0===m||null===(n=m.user)||void 0===n?void 0:n.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,g.jsx)("li",{children:(0,g.jsx)(r.OL,{onClick:function(){x((0,s.Z)((0,s.Z)({},m),{},{user:null,token:""})),localStorage.removeItem("auth"),i.ZP.success("Logout Successfully")},to:"/login",className:"dropdown-item",children:"Logout"})})]})]})}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("li",{className:"nav-item",children:(0,g.jsx)(r.OL,{to:"/register",className:"nav-link",children:"Sign Up"})}),(0,g.jsx)("li",{className:"nav-item",children:(0,g.jsx)(r.OL,{to:"/login",className:"nav-link",children:"Sign In"})})]}),(0,g.jsx)("li",{className:"nav-item",children:(0,g.jsx)(f.Z,{count:null===d||void 0===d?void 0:d.length,showZero:!0,children:(0,g.jsx)(r.OL,{to:"/cart",className:"nav-link",children:(0,g.jsx)(o.FeP,{})})})})]})]})]})})},N=function(){return(0,g.jsxs)("div",{className:"footer",children:[(0,g.jsxs)("h4",{className:"text-center",children:["All Rights Reserved \xa9 New Century Books"," "]}),(0,g.jsxs)("p",{className:"text-center mt-3",children:[(0,g.jsx)(r.rU,{to:"/about",children:"About"}),"|",(0,g.jsx)(r.rU,{to:"/contact",children:"Contact"})]})]})},k=a(4270),w=(a(5462),function(e){var n=e.children,a=e.title,s=e.description,t=e.keywords,r=e.author;return(0,g.jsxs)("div",{children:[(0,g.jsxs)(k.q,{children:[(0,g.jsx)("meta",{charSet:"utf-8"}),(0,g.jsx)("meta",{name:"description",content:s}),(0,g.jsx)("meta",{name:"keywords",content:t}),(0,g.jsx)("meta",{name:"author",content:r}),(0,g.jsx)("title",{children:a})]}),(0,g.jsx)(b,{}),(0,g.jsxs)("main",{style:{minHeight:"90vh"},children:[(0,g.jsx)(i.x7,{}),n]}),(0,g.jsx)(N,{})]})});w.defaultProps={title:"New Century Books",description:"ecommerce shop",keywords:"mern,react,node,mngodb",author:"Yad"};var y=w},4904:function(e,n,a){a.d(n,{Z:function(){return i}});var s=a(4165),t=a(5861),r=a(9439),o=a(2791),l=a(1243);function i(){var e=(0,o.useState)([]),n=(0,r.Z)(e,2),a=n[0],i=n[1],c=function(){var e=(0,t.Z)((0,s.Z)().mark((function e(){var n,a;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.Z.get("/api/v1/category/get-category");case 3:n=e.sent,a=n.data,i(null===a||void 0===a?void 0:a.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,o.useEffect)((function(){c()}),[]),a}},5595:function(e,n,a){a.r(n),a.d(n,{default:function(){return l}});a(2791);var s=a(7370),t=a.p+"static/media/books.0cb6c65c426c99854122.webp",r=a(1087),o=a(184),l=function(){return(0,o.jsx)(s.Z,{title:"Home",children:(0,o.jsx)("section",{id:"hero",class:"hero d-flex align-items-center section-bg",children:(0,o.jsx)("div",{class:"container",children:(0,o.jsxs)("div",{class:"row justify-content-between gy-5",children:[(0,o.jsxs)("div",{class:"col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start",children:[(0,o.jsxs)("h2",{"data-aos":"fade-up",children:["Greetings, ",(0,o.jsx)("br",{}),"book lovers!"]}),(0,o.jsx)("p",{"data-aos":"fade-up","data-aos-delay":"100",children:"Dive into a realm of endless possibilities as you browse through our extensive collection of books. Whether you're seeking thrilling fiction or insightful non-fiction, our online bookstore is your gateway to a universe of knowledge and entertainment. Happy exploring!"}),(0,o.jsx)("div",{class:"d-flex","data-aos":"fade-up","data-aos-delay":"200",children:(0,o.jsx)("a",{href:"#book-a-table",class:"btn-book-a-table",children:(0,o.jsx)(r.OL,{to:"/Shop",className:"nav-link",children:"Click Here To Shop Now"})})})]}),(0,o.jsx)("div",{class:"col-lg-5 order-1 order-lg-2 text-center text-lg-start",children:(0,o.jsx)("img",{src:t,class:"img-fluid",alt:"","data-aos":"zoom-out","data-aos-delay":"300"})})]})})})})}},183:function(e,n,a){e.exports=a.p+"static/media/ncblogo.224df00ba05c159aadbd.png"}}]);
//# sourceMappingURL=852.12452935.chunk.js.map