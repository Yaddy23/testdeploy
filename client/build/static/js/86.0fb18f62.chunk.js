"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[86],{7370:function(e,a,r){r.d(a,{Z:function(){return y}});r(2791);var n=r(1413),t=r(9439),s=r(1087),l=r(9805),o=r(8241),i=r(3402),c=r(183),d=r(4165),u=r(5861),m=r(5102),h=r(1243),p=r(7689),v=r(184),x=function(){var e=(0,m.R)(),a=(0,t.Z)(e,2),r=a[0],s=a[1],l=(0,p.s0)(),o=function(){var e=(0,u.Z)((0,d.Z)().mark((function e(a){var t,o;return(0,d.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,h.Z.get("/api/v1/product/search/".concat(r.keyword));case 4:t=e.sent,o=t.data,s((0,n.Z)((0,n.Z)({},r),{},{results:o})),l("/search"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a){return e.apply(this,arguments)}}();return(0,v.jsx)("div",{children:(0,v.jsxs)("form",{className:"d-flex",role:"search",onSubmit:o,children:[(0,v.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search",value:r.keyword,onChange:function(e){return s((0,n.Z)((0,n.Z)({},r),{},{keyword:e.target.value}))}}),(0,v.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]})})},g=r(4904),j=r(6224),f=r(574),N=function(){var e,a,r=(0,j.j)(),d=(0,t.Z)(r,1)[0],u=(0,o.a)(),m=(0,t.Z)(u,2),h=m[0],p=m[1],N=(0,g.Z)();return(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[(0,v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,v.jsx)("span",{className:"navbar-toggler-icon"})}),(0,v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[(0,v.jsxs)(s.rU,{to:"/",className:"navbar-brand",children:[(0,v.jsx)("img",{src:c,width:100,height:60,alt:"broken"}),"New Century Books"]}),(0,v.jsxs)("ul",{className:"navbar-nav ms-auto mt-2 mt-lg-0 p-3",children:[(0,v.jsx)(x,{}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/",className:"nav-link",children:"Home"})}),(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(s.rU,{className:"nav-link dropdown-toggle",to:"/categories","data-bs-toggle":"dropdown",children:"Categories"}),(0,v.jsxs)("ul",{className:"dropdown-menu",children:[(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{className:"dropdown-item",to:"/categories",children:"All Categories"})}),null===N||void 0===N?void 0:N.map((function(e){return(0,v.jsx)("li",{children:(0,v.jsx)(s.rU,{className:"dropdown-item",to:"/category/".concat(e.slug),children:e.name})})}))]})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/Shop",className:"nav-link",children:"Shop"})}),h.user?(0,v.jsx)(v.Fragment,{children:(0,v.jsxs)("li",{className:"nav-item dropdown",children:[(0,v.jsx)(s.OL,{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:null===h||void 0===h||null===(e=h.user)||void 0===e?void 0:e.firstName}),(0,v.jsxs)("ul",{className:"dropdown-menu dropdown-menu-end",children:[(0,v.jsx)("li",{children:(0,v.jsx)(s.OL,{to:"/dashboard/".concat(1===(null===h||void 0===h||null===(a=h.user)||void 0===a?void 0:a.role)?"admin":"user"),className:"dropdown-item",children:"Dashboard"})}),(0,v.jsx)("li",{children:(0,v.jsx)(s.OL,{onClick:function(){p((0,n.Z)((0,n.Z)({},h),{},{user:null,token:""})),localStorage.removeItem("auth"),i.ZP.success("Logout Successfully")},to:"/login",className:"dropdown-item",children:"Logout"})})]})]})}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/register",className:"nav-link",children:"Sign Up"})}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(s.OL,{to:"/login",className:"nav-link",children:"Sign In"})})]}),(0,v.jsx)("li",{className:"nav-item",children:(0,v.jsx)(f.Z,{count:null===d||void 0===d?void 0:d.length,showZero:!0,children:(0,v.jsx)(s.OL,{to:"/cart",className:"nav-link",children:(0,v.jsx)(l.FeP,{})})})})]})]})]})})},b=function(){return(0,v.jsxs)("div",{className:"footer",children:[(0,v.jsxs)("h4",{className:"text-center",children:["All Rights Reserved \xa9 New Century Books"," "]}),(0,v.jsxs)("p",{className:"text-center mt-3",children:[(0,v.jsx)(s.rU,{to:"/about",children:"About"}),"|",(0,v.jsx)(s.rU,{to:"/contact",children:"Contact"})]})]})},Z=r(4270),w=(r(5462),function(e){var a=e.children,r=e.title,n=e.description,t=e.keywords,s=e.author;return(0,v.jsxs)("div",{children:[(0,v.jsxs)(Z.q,{children:[(0,v.jsx)("meta",{charSet:"utf-8"}),(0,v.jsx)("meta",{name:"description",content:n}),(0,v.jsx)("meta",{name:"keywords",content:t}),(0,v.jsx)("meta",{name:"author",content:s}),(0,v.jsx)("title",{children:r})]}),(0,v.jsx)(N,{}),(0,v.jsxs)("main",{style:{minHeight:"90vh"},children:[(0,v.jsx)(i.x7,{}),a]}),(0,v.jsx)(b,{})]})});w.defaultProps={title:"New Century Books",description:"ecommerce shop",keywords:"mern,react,node,mngodb",author:"Yad"};var y=w},7600:function(e,a,r){r(2791);var n=r(1087),t=r(184);a.Z=function(){return(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:"text-center",children:(0,t.jsxs)("div",{className:"list-group",children:[(0,t.jsx)("h4",{children:"Dashboard"}),(0,t.jsx)(n.OL,{to:"/dashboard/user/profile",className:"list-group-item list-group-item-action",children:"Profile"}),(0,t.jsx)(n.OL,{to:"/dashboard/user/orders",className:"list-group-item list-group-item-action",children:"View Orders"})]})})})}},4904:function(e,a,r){r.d(a,{Z:function(){return i}});var n=r(4165),t=r(5861),s=r(9439),l=r(2791),o=r(1243);function i(){var e=(0,l.useState)([]),a=(0,s.Z)(e,2),r=a[0],i=a[1],c=function(){var e=(0,t.Z)((0,n.Z)().mark((function e(){var a,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("/api/v1/category/get-category");case 3:a=e.sent,r=a.data,i(null===r||void 0===r?void 0:r.category),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){c()}),[]),r}},2086:function(e,a,r){r.r(a);var n=r(4165),t=r(1413),s=r(5861),l=r(9439),o=r(2791),i=r(7600),c=r(7370),d=r(8241),u=r(3402),m=r(7689),h=r(1243),p=r(184);a.default=function(){var e=(0,d.a)(),a=(0,l.Z)(e,2),r=a[0],v=a[1],x=(0,o.useState)(""),g=(0,l.Z)(x,2),j=g[0],f=g[1],N=(0,o.useState)(""),b=(0,l.Z)(N,2),Z=b[0],w=b[1],y=(0,o.useState)(""),k=(0,l.Z)(y,2),S=k[0],E=k[1],C=(0,o.useState)(""),L=(0,l.Z)(C,2),O=L[0],P=L[1],U=(0,o.useState)(""),I=(0,l.Z)(U,2),D=I[0],F=I[1],Y=(0,o.useState)(""),A=(0,l.Z)(Y,2),R=A[0],T=A[1],B=(0,m.s0)();(0,o.useEffect)((function(){var e=null===r||void 0===r?void 0:r.user,a=e.email,n=e.firstName,t=e.lastName,s=e.phone,l=e.address;f(n),w(t),F(s),E(a),T(l)}),[null===r||void 0===r?void 0:r.user]);var H=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(a){var s,l,o;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.prev=1,e.next=4,h.Z.put("/api/v1/auth/profile",{firstName:j,lastName:Z,email:S,password:O,phone:D,address:R});case 4:s=e.sent,null!==(l=s.data)&&void 0!==l&&l.errro?u.ZP.error(null===l||void 0===l?void 0:l.error):(v((0,t.Z)((0,t.Z)({},r),{},{user:null===l||void 0===l?void 0:l.updatedUser})),o=localStorage.getItem("auth"),(o=JSON.parse(o)).user=l.updatedUser,localStorage.setItem("auth",JSON.stringify(o)),u.ZP.success("Profile Updated Successfully"),B("/dashboard/user")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0),u.ZP.error("Something went wrong");case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(a){return e.apply(this,arguments)}}();return(0,p.jsx)(c.Z,{title:"Your Profile",children:(0,p.jsx)("div",{className:"container-fluid m-3 p-3",children:(0,p.jsxs)("div",{className:"row",children:[(0,p.jsx)("div",{className:"col-md-3",children:(0,p.jsx)(i.Z,{})}),(0,p.jsx)("div",{className:"col-md-9",children:(0,p.jsx)("div",{className:"form-container ",children:(0,p.jsxs)("form",{onSubmit:H,children:[(0,p.jsx)("h4",{className:"title",children:"USER PROFILE"}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"text",value:j,onChange:function(e){return f(e.target.value)},className:"form-control",id:"exampleInputEmail1",placeholder:"Enter Your Name",autoFocus:!0})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"text",value:Z,onChange:function(e){return w(e.target.value)},className:"form-control",id:"exampleInputEmail1",placeholder:"Enter Your Lastname",autoFocus:!0})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"email",value:S,onChange:function(e){return E(e.target.value)},className:"form-control",id:"exampleInputEmail1",placeholder:"Enter Your Email ",disabled:!0})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"password",value:O,onChange:function(e){return P(e.target.value)},className:"form-control",id:"exampleInputPassword1",placeholder:"Enter Your Password"})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"text",value:D,onChange:function(e){return F(e.target.value)},className:"form-control",id:"exampleInputEmail1",placeholder:"Enter Your Phone"})}),(0,p.jsx)("div",{className:"mb-3",children:(0,p.jsx)("input",{type:"text",value:R,onChange:function(e){return T(e.target.value)},className:"form-control",id:"exampleInputEmail1",placeholder:"Enter Your Address"})}),(0,p.jsx)("button",{type:"submit",className:"btn btn-primary",children:"UPDATE"})]})})})]})})})}},183:function(e,a,r){e.exports=r.p+"static/media/ncblogo.224df00ba05c159aadbd.png"}}]);
//# sourceMappingURL=86.0fb18f62.chunk.js.map