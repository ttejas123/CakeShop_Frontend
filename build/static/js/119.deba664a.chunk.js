(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[119],{1093:function(e,a,t){"use strict";t.r(a);var n=t(7),r=t(8),i=t(2),s=t(21),o=t(53),c=(t(70),t(60)),l=(t(64),t(54),t(0)),u=(t(61),t(410)),d=t(59),m=t.n(d),p=t(63),b=t.n(p),j=t(82),g=t(80),f=t(975),h=t(1012),O=t(175),v=t(798),x=t(653),y=t(1013),w=t(86),N=t(75),k=t(954),z=t(1150),C=t(81),P=t(68),E=t(66),L=t(705),S=t(955),M=t(957),R=t(51),T=t(3),W=Object(l.forwardRef)((function(e,a){var t=e.onClick,n=Object(s.a)(e,["onClick"]);return Object(T.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(T.jsx)("input",Object(i.a)({type:"checkbox",className:"custom-control-input",ref:a},n)),Object(T.jsx)("label",{className:"custom-control-label",onClick:t})]})})),Y=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar.length?Object(T.jsx)(o.a,{className:"mr-1",img:e.avatar,width:"32",height:"32"}):Object(T.jsx)(o.a,{color:a||"primary",className:"mr-1",content:e.Name||"John Doe",initials:!0,status:"online"})};a.default=function(){var e=Object(l.useState)(!1),a=Object(r.a)(e,2),t=(a[0],a[1],Object(l.useState)(0)),i=Object(r.a)(t,2),s=i[0],o=i[1],d=Object(l.useState)(""),p=Object(r.a)(d,2),D=p[0],A=(p[1],Object(l.useState)([])),B=Object(r.a)(A,2),H=B[0],I=(B[1],Object(l.useState)("")),J=Object(r.a)(I,2),V=(J[0],J[1],Object(l.useState)("")),F=Object(r.a)(V,2),U=(F[0],F[1],[{name:"User",minWidth:"250px",selector:"Name",sortable:!0,cell:function(e){return Object(T.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[Y(e),Object(T.jsxs)("div",{className:"d-flex flex-column",children:[Object(T.jsx)("span",{className:"font-weight-bold",children:e.Name}),Object(T.jsxs)("small",{className:"text-truncate text-muted mb-0",children:["@",e.username]})]})]})}},{name:"Transaction",selector:"transaction",sortable:!0,minWidth:"150px"},{name:"Balance",selector:"balance",sortable:!0,minWidth:"150px"},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(T.jsxs)("div",{className:"d-flex",children:[Object(T.jsx)(k.a,{children:Object(T.jsx)(z.a,{className:"pr-1",tag:"span",children:Object(T.jsx)(j.a,{size:15,onClick:function(e){}})})}),Object(T.jsx)(c.b,{to:"/report/bidCoin-edit/".concat(e.id),children:Object(T.jsx)(g.a,{size:15})})]})}}]);function q(e){var a=document.createElement("a"),t=function(e){var a,t=Object.keys(u.a[0]);return a="",a+=t.join(","),a+="\n",e.forEach((function(e){var n=0;t.forEach((function(t){n>0&&(a+=","),a+=e[t],n++})),a+="\n"})),a}(e);if(null!==t){t.match(/^data:text\/csv/i)||(t="data:text/csv;charset=utf-8,".concat(t)),a.setAttribute("href",encodeURI(t)),a.setAttribute("download","export.csv"),a.click()}}return Object(T.jsx)(l.Fragment,{children:Object(T.jsxs)(C.a,{children:[Object(T.jsxs)(P.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(T.jsx)(E.a,{tag:"h4",children:"BidCoin"}),Object(T.jsxs)("div",{className:"d-flex mt-md-0 mt-1",children:[Object(T.jsxs)(L.a,{children:[Object(T.jsxs)(z.a,{color:"secondary",caret:!0,outline:!0,children:[Object(T.jsx)(f.a,{size:15}),Object(T.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(T.jsxs)(S.a,{right:!0,children:[Object(T.jsxs)(M.a,{className:"w-100",children:[Object(T.jsx)(h.a,{size:15}),Object(T.jsx)("span",{className:"align-middle ml-50",children:"Print"})]}),Object(T.jsxs)(M.a,{className:"w-100",onClick:function(){return q(u.a)},children:[Object(T.jsx)(O.a,{size:15}),Object(T.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(T.jsxs)(M.a,{className:"w-100",children:[Object(T.jsx)(v.a,{size:15}),Object(T.jsx)("span",{className:"align-middle ml-50",children:"Excel"})]}),Object(T.jsxs)(M.a,{className:"w-100",children:[Object(T.jsx)(x.a,{size:15}),Object(T.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(T.jsxs)(M.a,{className:"w-100",children:[Object(T.jsx)(y.a,{size:15}),Object(T.jsx)("span",{className:"align-middle ml-50",children:"Copy"})]})]})]}),Object(T.jsx)(c.b,{to:"/report/bidCoin-add",children:Object(T.jsxs)(R.a,{className:"ml-2",color:"primary",children:[Object(T.jsx)(w.a,{size:15}),Object(T.jsx)("span",{className:"align-middle ml-50",children:"Add New"})]})})]})]}),Object(T.jsx)(b.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:U,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(T.jsx)(N.a,{size:10}),paginationDefaultPage:s+1,paginationComponent:function(){var e;return Object(T.jsx)(m.a,(e={previousLabel:"",nextLabel:"",forcePage:s,onPageChange:function(e){return function(e){o(e.selected)}(e)},pageCount:D.length?H.length/7:u.a.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:D.length?H:u.a,selectableRowsComponent:W})]})})}},410:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t(55),r=t(57),i=(t(56),t(58)),s=[{id:1,avatar:"",rating:1,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"Logo of team",username:"tejas",Name:"Tejas"},{id:2,avatar:r.default,rating:7.85,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"differnt Color",username:"pravinn2",Name:"Pravin"},{id:3,avatar:n.default,rating:6.75,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"Company WaterMark",username:"komal12",Name:"Komal"},{id:4,avatar:"",rating:6.5,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"Logo of team",username:"mehulq1",Name:"Mehul"},{id:5,avatar:"",rating:2,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"differnt Color",username:"harpriya23",Name:"Harpriya"},{id:6,avatar:i.a,rating:9,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"Company WaterMark",username:"Reethika45",Name:"Reethika"},{id:7,avatar:"",rating:10,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"Company WaterMark",username:"himanshu23",Name:"Himanshu"},{id:8,avatar:"",rating:2,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"Logo of team",username:"suryadas",Name:"Surya_Das"},{id:9,avatar:"",rating:2,transaction:2e5,balance:3e4,review:"Your product is really good but still it's out of price range and also we can't add much customizations",customizations:"Company WaterMark",username:"avinash",Name:"Avinash"}]},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/komal.71eab2e7.jpg"},56:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/himanshu.db95087a.jpg"},57:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,a,t){"use strict";a.a=t.p+"static/media/reethika.147b588d.jpg"},80:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),s=t.n(i);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,s=void 0===i?24:i,l=c(e,["color","size"]);return r.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),r.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="Edit",a.a=l},82:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),s=t.n(i);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,s=void 0===i?24:i,l=c(e,["color","size"]);return r.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("polyline",{points:"3 6 5 6 21 6"}),r.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="Trash",a.a=l},86:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(1),s=t.n(i);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,i=e.size,s=void 0===i?24:i,l=c(e,["color","size"]);return r.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},l),r.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),r.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));l.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},l.displayName="Plus",a.a=l}}]);
//# sourceMappingURL=119.deba664a.chunk.js.map