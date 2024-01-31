"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[558],{8696:function(e,n,t){t(2791);var r=t(1087),a=t(184);n.Z=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"text-center",children:(0,a.jsxs)("div",{className:"list-group",children:[(0,a.jsx)("h4",{children:"Admin Panel"}),(0,a.jsx)(r.OL,{to:"/dashboard/admin/products",className:"list-group-item list-group-item-action",children:"List of Products"}),(0,a.jsx)(r.OL,{to:"/dashboard/admin/add-category",className:"list-group-item list-group-item-action",children:"Add Category"}),(0,a.jsx)(r.OL,{to:"/dashboard/admin/add-product",className:"list-group-item list-group-item-action",children:"Add Product"}),(0,a.jsx)(r.OL,{to:"/dashboard/admin/orders",className:"list-group-item list-group-item-action",children:"Orders"}),(0,a.jsx)(r.OL,{to:"/dashboard/admin/view-users",className:"list-group-item list-group-item-action",children:"Users"})]})})})}},7370:function(e,n,t){t.d(n,{Z:function(){return y}});t(2791);var r=t(1413),a=t(9439),s=t(1087),c=t(9805),o=t(8241),i=t(3402),l=t(183),d=t(4165),u=t(5861),m=t(5102),h=t(1243),p=t(7689),v=t(184),x=function(){var e=(0,m.R)(),n=(0,a.Z)(e,2),t=n[0],s=n[1],c=(0,p.s0)(),o=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(n){var a,o;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,h.Z.get("/api/v1/product/search/".concat(t.keyword));case 4:a=e.sent,o=a.data,s((0,r.Z)((0,r.Z)({},t),{},{results:o})),c("/search"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(n){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{className:"d-flex",role:"search",onSubmit:o,children:[(0,v.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:t.keyword,onChange:function(e){return s((0,r.Z)((0,r.Z)({},t),{},{keyword:e.target.value}))}}),(0,v.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})},g=t(4904),j=t(6224),f=t(574),b=function(){var e,n,t=(0,j.j)(),d=(0,a.Z)(t,1)[0],u=(0,o.a)(),m=(0,a.Z)(u,2),h=m[0],p=m[1],b=(0,g.Z)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[(0,v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,v.jsx)("span",{className:"navbar-toggler-icon"})}),(0,v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,v.jsxs)(s.rU,{to:"/",className:"navbar-brand",children:[(0,v.jsx)("img",{src:l,width:100,height:60,alt:"broken"}),"New Century Books"]}),(0,v.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0 p-3",children:[(0,v.jsx)(x,{}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(s.rU,{className:"nav-link dropdown-toggle",to:"/categories","data-bs-toggle":"dropdown",children:"Categories"}),(0,v.jsxs)("ul",{className:"dropdown-menu",children:[(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"})}),null===b||void 0===b?void 0:b.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:e.name})})}))]})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/Shop",className:"nav-link",children:"Shop"})}),h.user?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(s.OL,{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:null===h||void 0===h||null===(e=h.user)||void 0===e?void 0:e.firstName}),(0,v.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end",children:[(0,v.jsx)("li",{children:(0,v.jsx)(s.OL,{to:"/dashboard/".concat(1===(null===h||void 0===h||null===(n=h.user)||void 0===n?void 0:n.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,v.jsx)("li",{children:(0,v.jsx)(s.OL,{onClick:function(){p((0,r.Z)((0,r.Z)({},h),{},{user:null,token:""})),localStorage.removeItem("auth"),i.ZP.success("Logout Successfully")},to:"/login",className:"dropdown-item",children:"Logout"})})]})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/register",className:"nav-link",children:"Sign Up"})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/login",className:"nav-link",children:"Sign In"})})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(f.Z,{count:null===d||void 0===d?void 0:d.length,showZero:!0,children:(0,v.jsx)(s.OL,{to:"/cart",className:"nav-link",children:(0,v.jsx)(c.FeP,{})})})})]})]})]})})},Z=function(){return(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsxs)("h4",{className:"text-center",children:["All Rights Reserved \xa9 New Century Books"," "]}),(0,v.jsxs)("p",{className:"text-center mt-3",children:[(0,v.jsx)(s.rU,{to:"/about",children:"About"}),"|",(0,v.jsx)(s.rU,{to:"/contact",children:"Contact"})]})]})},N=t(4270),w=(t(5462),function(e){var n=e.children,t=e.title,r=e.description,a=e.keywords,s=e.author;return(0,v.jsxs)("div",{children:[(0,v.jsxs)(N.q,{children:[(0,v.jsx)("meta",{charSet:"utf-8"}),(0,v.jsx)("meta",{name:"description",content:r}),(0,v.jsx)("meta",{name:"keywords",content:a}),(0,v.jsx)("meta",{name:"author",content:s}),(0,v.jsx)("title",{children:t})]}),(0,v.jsx)(b,{}),(0,v.jsxs)("main",{style:{minHeight:"90vh"},children:[(0,v.jsx)(i.x7,{}),n]}),(0,v.jsx)(Z,{})]})});w.defaultProps={title:"New Century Books",description:"ecommerce shop",keywords:"mern,react,node,mngodb",author:"Yad"};var y=w},4904:function(e,n,t){t.d(n,{Z:function(){return i}});var r=t(4165),a=t(5861),s=t(9439),c=t(2791),o=t(1243);function i(){var e=(0,c.useState)([]),n=(0,s.Z)(e,2),t=n[0],i=n[1],l=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/v1/category/get-category");case 3:n=e.sent,t=n.data,i(null===t||void 0===t?void 0:t.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,c.useEffect)((function(){l()}),[]),t}},558:function(e,n,t){t.r(n),t.d(n,{default:function(){return p}});var r=t(4165),a=t(5861),s=t(9439),c=t(2791),o=t(8696),i=t(7370),l=t(3402),d=t(1243),u=t(184),m=function(e){var n=e.handleSubmit,t=e.value,r=e.setValue;return(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("form",{onSubmit:n,children:[(0,u.jsx)("div",{className:"mb-3",children:(0,u.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter new Category",value:t,onChange:function(e){return r(e.target.value)}})}),(0,u.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})})},h=t(4347),p=function(){var e=(0,c.useState)([]),n=(0,s.Z)(e,2),t=n[0],p=n[1],v=(0,c.useState)(""),x=(0,s.Z)(v,2),g=x[0],j=x[1],f=(0,c.useState)(!1),b=(0,s.Z)(f,2),Z=b[0],N=b[1],w=(0,c.useState)(null),y=(0,s.Z)(w,2),k=y[0],S=y[1],C=(0,c.useState)(""),L=(0,s.Z)(C,2),P=L[0],O=L[1],A=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,d.Z.post("/api/v1/category/create-category",{name:g});case 4:t=e.sent,null!==(a=t.data)&&void 0!==a&&a.success?(l.ZP.success("".concat(g," is created")),U(),j("")):l.ZP.error(a.message),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),l.ZP.error("Something went wrong in input form");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}(),U=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(){var n,t;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.get("/api//v1/category/get-category");case 3:n=e.sent,null!==(t=n.data)&&void 0!==t&&t.success&&p(null===t||void 0===t?void 0:t.category),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0),l.ZP.error("Something went wrong in getting Category");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();(0,c.useEffect)((function(){U()}),[]);var D=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,e.next=4,d.Z.put("/api/v1/category/update-category/".concat(k._id),{name:P});case 4:t=e.sent,(a=t.data).success?(l.ZP.success("".concat(P," is Updated")),S(null),O(""),N(!1),U()):l.ZP.error(a.message),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),l.ZP.error("something went wrong");case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(n){return e.apply(this,arguments)}}(),F=function(){var e=(0,a.Z)((0,r.Z)().mark((function e(n){var t,a;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,d.Z.delete("/api/v1/category/delete-category/".concat(n));case 3:t=e.sent,(a=t.data).success?(l.ZP.success("Category is removed"),U()):l.ZP.error(a.message),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),l.ZP.error("something went wrong");case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(n){return e.apply(this,arguments)}}();return(0,u.jsx)(i.Z,{title:"Add Category",children:(0,u.jsx)("div",{className:"container-fluid m-3 p-3",children:(0,u.jsxs)("div",{className:"row",children:[(0,u.jsx)("div",{className:"col-md-3",children:(0,u.jsx)(o.Z,{})}),(0,u.jsxs)("div",{className:"col-md-9",children:[(0,u.jsx)("h1",{children:"Add Category"}),(0,u.jsx)("div",{className:"p-3 w-50",children:(0,u.jsx)(m,{handleSubmit:A,value:g,setValue:j})}),(0,u.jsx)("div",{className:"w-75",children:(0,u.jsxs)("table",{class:"table",children:[(0,u.jsx)("thead",{children:(0,u.jsxs)("tr",{children:[(0,u.jsx)("th",{scope:"col",children:"Name"}),(0,u.jsx)("th",{scope:"col",children:"Actions"})]})}),(0,u.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,u.jsxs)("tr",{children:[(0,u.jsx)("td",{children:e.name},e._id),(0,u.jsxs)("td",{children:[(0,u.jsx)("button",{className:"btn btn-primary ms-2",onClick:function(){N(!0),O(e.name),S(e)},children:"Edit"}),(0,u.jsx)("button",{className:"btn btn-danger ms-2",onClick:function(){F(e._id)},children:"Delete"})]})]})}))})]})}),(0,u.jsx)(h.Z,{onCancel:function(){return N(!1)},footer:null,visible:Z,children:(0,u.jsx)(m,{value:P,setValue:O,handleSubmit:D})})]})]})})})}},183:function(e,n,t){e.exports=t.p+"static/media/ncblogo.224df00ba05c159aadbd.png"}}]);
//# sourceMappingURL=558.19347743.chunk.js.map