(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[196],{1003:function(e,a,t){"use strict";t.r(a);var n=t(7),s=t(8),i=t(2),r=t(21),c=(t(64),t(54),t(0)),l=t(60),o=t(261),m=t(59),u=t.n(m),d=t(63),b=t.n(d),j=t(82),h=t(80),p=t(86),g=t(75),f=t(954),x=t(1150),O=t(81),N=t(68),v=t(66),C=t(51),k=t(78),y=t(79),w=t(74),P=t(67),L=t(3),D=Object(c.forwardRef)((function(e,a){var t=e.onClick,n=Object(r.a)(e,["onClick"]);return Object(L.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(L.jsx)("input",Object(i.a)({type:"checkbox",className:"custom-control-input",ref:a},n)),Object(L.jsx)("label",{className:"custom-control-label",onClick:t})]})}));a.default=function(){var e=Object(c.useState)(!1),a=Object(s.a)(e,2),t=(a[0],a[1],Object(c.useState)(0)),i=Object(s.a)(t,2),r=i[0],m=i[1],d=Object(c.useState)(""),S=Object(s.a)(d,2),q=S[0],W=S[1],_=Object(c.useState)([]),H=Object(s.a)(_,2),z=H[0],R=H[1],A=Object(c.useState)(""),K=Object(s.a)(A,2),F=(K[0],K[1],Object(c.useState)(0)),M=Object(s.a)(F,2),J=(M[0],M[1],[{name:"Service Name",selector:"Name",sortable:!0,minWidth:"250px",cell:function(e){return Object(L.jsx)("div",{className:"d-flex align-items-center",children:Object(L.jsx)("div",{className:"user-info text-truncate",children:Object(L.jsx)(l.b,{to:"/master/VasDetail/".concat(e.id),children:Object(L.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:e.Name})})})})}},{name:"Rate",selector:"rate",sortable:!0,minWidth:"250px",cell:function(e){return Object(L.jsx)("div",{className:"d-flex align-items-center",children:Object(L.jsx)("div",{className:"user-info text-truncate",children:Object(L.jsx)("span",{className:"d-block font-weight-bold text-truncate",children:"Hours"===e.unit?Object(L.jsxs)(L.Fragment,{children:["\u20b9",e.rate,"/hr"]}):Object(L.jsxs)(L.Fragment,{children:["\u20b9",e.rate,"/min"]})})})})}},{name:"Quantity",selector:"quantity",sortable:!0,minWidth:"250px"},{name:"Unit",selector:"unit",sortable:!0,minWidth:"250px"},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(L.jsxs)("div",{className:"d-flex",children:[Object(L.jsx)(f.a,{children:Object(L.jsx)(x.a,{className:"pr-1",tag:"span",children:Object(L.jsx)(j.a,{size:15,onClick:function(a){a.preventDefault(),e.id,!0===confirm("Are you sure you want to delete")?console.log(" your record is deleted"):console.log("not deleted ")}})})}),Object(L.jsx)(l.b,{to:"/master/vass/edit/".concat(e.id),children:Object(L.jsx)(h.a,{size:15})})]})}}]);return Object(L.jsx)(c.Fragment,{children:Object(L.jsxs)(O.a,{children:[Object(L.jsxs)(N.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(L.jsx)(v.a,{tag:"h4",children:"VAS List"}),Object(L.jsx)("div",{className:"d-flex mt-md-0 mt-1",children:Object(L.jsx)(l.b,{to:"/master/vass/add",children:Object(L.jsxs)(C.a,{className:"ml-2",color:"primary",children:[Object(L.jsx)(p.a,{size:15}),Object(L.jsx)("span",{className:"align-middle ml-50",children:"Add New"})]})})})]}),Object(L.jsx)(k.a,{className:"justify-content-end mx-0",children:Object(L.jsxs)(y.a,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(L.jsx)(w.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(L.jsx)(P.a,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:q,onChange:function(e){var a=e.target.value,t=[];console.log(o.a),W(a),a.length&&(t=o.a.filter((function(e){var t=e.Cost.toString(),n=e.Name.toLowerCase().startsWith(a.toLowerCase())||t.toLowerCase().startsWith(a.toLowerCase()),s=e.Name.toLowerCase().includes(a.toLowerCase())||t.toLowerCase().includes(a.toLowerCase());return n||(!n&&s?s:null)})),R(t),W(a))}})]})}),Object(L.jsx)(b.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:J,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(L.jsx)(g.a,{size:10}),paginationDefaultPage:r+1,paginationComponent:function(){var e;return Object(L.jsx)(u.a,(e={previousLabel:"",nextLabel:"",forcePage:r,onPageChange:function(e){return function(e){m(e.selected)}(e)},pageCount:q.length?z.length/7:o.a.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:q.length?z:o.a,selectableRowsComponent:D})]})})}},261:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t(55),s=t(57),i=(t(56),t(58),[{behalf:"",Name:"instagram manager",Cost:800,id:1,rate:250,quantity:"10hr",D_Name:"Komal Kamble",username:"pravin",avatar:n.default,unit:"Hours"},{behalf:"",Name:"editor",Cost:400,id:2,rate:700,quantity:"20hr",D_Name:"Pravin Poshmani",username:"komal",avatar:s.default,unit:"Minutes"},{behalf:"",Name:"Keyword finder",Cost:200,id:3,rate:700,quantity:"30hr",D_Name:"Pravin Poshmani",username:"pravin",avatar:"",unit:"Minutes"},{behalf:"",Name:"Web devlopment",Cost:300,id:4,rate:650,quantity:"40hr",D_Name:"Pravin Poshmani",username:"pravin",avatar:"",unit:"Minutes"},{behalf:"",Name:"instagram manager",Cost:750,id:5,rate:700,quantity:"50hr",D_Name:"Pravin Poshmani",username:"pravin",avatar:"",unit:"Hours"},{behalf:"",Name:"editor",Cost:400,id:6,rate:340,quantity:"60hr",D_Name:"Pravin Poshmani",username:"pravin",avatar:"",unit:"Hours"},{behalf:"",Name:"Keyword finder",Cost:200,id:7,rate:700,quantity:"70hr",D_Name:"Pravin Poshmani",username:"pravin",avatar:"",unit:"Hours"}])},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/komal.71eab2e7.jpg"},56:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/himanshu.db95087a.jpg"},57:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,a,t){"use strict";a.a=t.p+"static/media/reethika.147b588d.jpg"}}]);
//# sourceMappingURL=196.a03eb00e.chunk.js.map