(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[154],{1137:function(e,a,t){"use strict";t.r(a);var n=t(7),c=t(8),i=(t(53),t(69),t(64),t(54),t(0)),s=(t(61),t(55),t(57),t(56),t(58),[{id:1,invoice_number:555454354564,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:2,invoice_number:435454354575,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:3,invoice_number:574454354595,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:4,invoice_number:324454354534,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:5,invoice_number:324454354534,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:6,invoice_number:324454354534,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:7,invoice_number:324454354534,order_amount:3432843570,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:8,invoice_number:324454354534,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())},{id:9,invoice_number:324454354534,order_amount:343284357,order_number:43274943460,invoice_time:"".concat((new Date).toGMTString())}]),r=t(2),l=t(944),o=(t(79),t(125)),d=t(119),m=t(120),j=t(77),b=t(78),u=t(51),x=(t(74),t(3)),h=function(e){var a=Object(i.useState)(""),t=Object(c.a)(a,2),n=t[0],s=t[1],h=Object(x.jsx)(l.a,{className:"cursor-pointer",size:15,onClick:e.handleModal});return Object(i.useEffect)((function(){""===e.currentId?s(""):s(Object(r.a)({},e.data[e.currentId-1]))}),[e.currentId,e.data]),Object(x.jsxs)(o.a,{isOpen:e.open,toggle:e.handleModal,className:"sidebar-sm",contentClassName:"pt-0",children:[Object(x.jsx)(d.a,{className:"mb-1",toggle:e.handleModal,close:h,tag:"div",children:Object(x.jsx)("h5",{className:"modal-title",children:"Review"})}),Object(x.jsxs)(m.a,{className:"flex-grow-1",children:[Object(x.jsx)(j.a,{children:Object(x.jsxs)(b.a,{xs:"12",children:[Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("div",{className:"font-small-2",children:"ID : "}),Object(x.jsxs)("h5",{className:"mb-1",children:[" ",n.id]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("div",{className:"font-small-2",children:"Invoice Number : "}),Object(x.jsxs)("h5",{className:"mb-1",children:[" ",n.invoice_number]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("div",{className:"font-small-2",children:"Order Amount : "}),Object(x.jsxs)("h5",{className:"mb-1",children:[" ",n.order_amount]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("div",{className:"font-small-2",children:"Order Number : "}),Object(x.jsxs)("h5",{className:"mb-1",children:[" ",n.order_number]})]}),Object(x.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(x.jsx)("div",{className:"font-small-2",children:"Invoice Date : "}),Object(x.jsxs)("h5",{className:"mb-1",children:[" ",n.invoice_time]})]})]})}),Object(x.jsx)(u.a,{color:"secondary",onClick:e.handleModal,outline:!0,children:"Cancel"})]})]})},O=t(59),p=t.n(O),g=t(63),v=t.n(g),f=t(280),N=t(969),_=t(1004),w=t(154),k=t(789),C=t(646),S=t(1005),D=t(72),y=t(948),M=t(1142),I=t(80),W=t(67),T=t(66),z=t(698),G=t(949),L=t(951);a.default=function(){var e=Object(i.useState)(!1),a=Object(c.a)(e,2),t=a[0],r=a[1],l=Object(i.useState)(0),o=Object(c.a)(l,2),d=o[0],m=o[1],j=Object(i.useState)(""),b=Object(c.a)(j,2),u=b[0],O=(b[1],Object(i.useState)([])),g=Object(c.a)(O,2),P=g[0],E=(g[1],Object(i.useState)("")),A=Object(c.a)(E,2),R=A[0],F=A[1],J=Object(i.useState)(""),H=Object(c.a)(J,2),U=(H[0],H[1],[{name:"Id",selector:"id",sortable:!0,minWidth:"120px",maxWidth:"150px"},{name:"Invoice Number",selector:"invoice_number",sortable:!0,minWidth:"120px",maxWidth:"200px"},{name:"invoice_time",selector:"invoice_time",sortable:!0,minWidth:"120px",maxWidth:"200px"},{name:"Order Amount",selector:"order_amount",sortable:!0,minWidth:"120px",maxWidth:"200px"},{name:"Order Number",selector:"order_number",sortable:!0,minWidth:"120px",maxWidth:"200px"},{name:"Actions",allowOverflow:!0,minWidth:"150px",cell:function(e){return Object(x.jsx)("div",{className:"d-flex",children:Object(x.jsx)(y.a,{children:Object(x.jsx)(M.a,{className:"pl-1",tag:"span",children:Object(x.jsx)(f.a,{size:15,onClick:function(a){r(!0),F(e.id)}})})})})}}]);function V(e){var a=document.createElement("a"),t=function(e){var a,t=Object.keys(s[0]);return a="",a+=t.join(","),a+="\n",e.forEach((function(e){var n=0;t.forEach((function(t){n>0&&(a+=","),a+=e[t],n++})),a+="\n"})),a}(e);if(null!==t){t.match(/^data:text\/csv/i)||(t="data:text/csv;charset=utf-8,".concat(t)),a.setAttribute("href",encodeURI(t)),a.setAttribute("download","export.csv"),a.click()}}return Object(x.jsxs)(i.Fragment,{children:[Object(x.jsxs)(I.a,{children:[Object(x.jsxs)(W.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(x.jsx)(T.a,{tag:"h4",children:"Invoice"}),Object(x.jsx)("div",{className:"d-flex mt-md-0 mt-1",children:Object(x.jsxs)(z.a,{children:[Object(x.jsxs)(M.a,{color:"secondary",caret:!0,outline:!0,children:[Object(x.jsx)(N.a,{size:15}),Object(x.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(x.jsxs)(G.a,{right:!0,children:[Object(x.jsxs)(L.a,{className:"w-100",children:[Object(x.jsx)(_.a,{size:15}),Object(x.jsx)("span",{className:"align-middle ml-50",children:"Print"})]}),Object(x.jsxs)(L.a,{className:"w-100",onClick:function(){return V(s)},children:[Object(x.jsx)(w.a,{size:15}),Object(x.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(x.jsxs)(L.a,{className:"w-100",children:[Object(x.jsx)(k.a,{size:15}),Object(x.jsx)("span",{className:"align-middle ml-50",children:"Excel"})]}),Object(x.jsxs)(L.a,{className:"w-100",children:[Object(x.jsx)(C.a,{size:15}),Object(x.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(x.jsxs)(L.a,{className:"w-100",children:[Object(x.jsx)(S.a,{size:15}),Object(x.jsx)("span",{className:"align-middle ml-50",children:"Copy"})]})]})]})})]}),Object(x.jsx)(v.a,{noHeader:!0,pagination:!0,columns:U,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(x.jsx)(D.a,{size:10}),paginationDefaultPage:d+1,paginationComponent:function(){var e;return Object(x.jsx)(p.a,(e={previousLabel:"",nextLabel:"",forcePage:d,onPageChange:function(e){return function(e){m(e.selected)}(e)},pageCount:u.length?P.length/7:s.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:u.length?P:s})]}),Object(x.jsx)(h,{open:t,handleModal:function(){r(!t)},currentId:R,data:s})]})}},54:function(e,a,t){},55:function(e,a,t){"use strict";a.a=t.p+"static/media/komal.71eab2e7.jpg"},56:function(e,a,t){"use strict";a.a=t.p+"static/media/himanshu.db95087a.jpg"},57:function(e,a,t){"use strict";a.a=t.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,a,t){"use strict";a.a=t.p+"static/media/reethika.147b588d.jpg"},74:function(e,a,t){}}]);
//# sourceMappingURL=154.d70e4536.chunk.js.map