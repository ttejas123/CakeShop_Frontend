(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[212],{1136:function(e,a,t){"use strict";t.r(a);var s=t(2),n=t(8),c=t(0),l=(t(64),t(54),t(958)),i=(t(798),t(62)),o=t(81),r=t(78),m=t(79),b=t(951),j=t(74),d=t(51),u=t(7),h=t(21),p=t(53),g=t(61),O=(t(55),t(57)),x=(t(56),t(58),t(3)),f=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.profilePic.length?Object(x.jsx)(p.a,{className:"mr-1",img:e.profilePic,width:"32",height:"32"}):Object(x.jsx)(p.a,{color:a||"primary",className:"mr-1",content:e.Name||"John Doe",initials:!0,status:"online"})},C=[{name:"Tejas Thakare",profilePic:O.default,assignedTo:"Company1",location:"Location1"},{name:"Komal Kamble",profilePic:O.default,assignedTo:"Company2",location:"Location2"},{name:"Pravin Poshmani",profilePic:O.default,assignedTo:"Company3",location:"Location3"},{name:"Mehul Sir",profilePic:"",assignedTo:"Company4",location:"Location4"}],v=[{name:"Name",selector:"name",sortable:!0,minWidth:"50px"},{name:"Profile Pic",minWidth:"150px",selector:"profilePic",sortable:!0,cell:function(e){return Object(x.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:f(e)})}},{name:"Assigned To",selector:"assignedTo",sortable:!0,minWidth:"150px"},{name:"Location",selector:"location",sortable:!0,minWidth:"150px"}],N=t(59),y=t.n(N),L=t(63),P=t.n(L),k=t(75),w=t(68),T=t(66),S=t(67),U=Object(c.forwardRef)((function(e,a){var t=e.onClick,n=Object(h.a)(e,["onClick"]);return Object(x.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(x.jsx)("input",Object(s.a)({type:"checkbox",className:"custom-control-input",ref:a},n)),Object(x.jsx)("label",{className:"custom-control-label",onClick:t})]})})),M=function(){var e=Object(c.useState)(!1),a=Object(n.a)(e,2),t=(a[0],a[1],Object(c.useState)(0)),s=Object(n.a)(t,2),l=s[0],i=s[1],b=Object(c.useState)(""),d=Object(n.a)(b,2),h=d[0],p=d[1],g=Object(c.useState)([]),O=Object(n.a)(g,2),f=O[0],N=O[1],L=Object(c.useState)(""),M=Object(n.a)(L,2),R=(M[0],M[1],Object(c.useState)("")),W=Object(n.a)(R,2);W[0],W[1];return Object(x.jsx)(c.Fragment,{children:Object(x.jsxs)(o.a,{className:"mb-0",children:[Object(x.jsxs)(w.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(x.jsx)(T.a,{tag:"h4",children:"Users"}),Object(x.jsx)("div",{className:"d-flex mt-md-0 mt-1"})]}),Object(x.jsx)(r.a,{className:"justify-content-end mx-0",children:Object(x.jsxs)(m.a,{className:"d-flex align-items-center justify-content-end mt-1",md:"6",sm:"12",children:[Object(x.jsx)(j.a,{className:"mr-1",for:"search-input",children:"Search"}),Object(x.jsx)(S.a,{className:"dataTable-filter mb-50",type:"text",bsSize:"sm",id:"search-input",value:h,onChange:function(e){var a=e.target.value,t=[];p(a),a.length&&(t=C.filter((function(e){e.NoOfBidder.toString();var t=e.UserName.toLowerCase().startsWith(a.toLowerCase())||e.mrp.toLowerCase().startsWith(a.toLowerCase())||e.gst.toLowerCase().startsWith(a.toLowerCase());console.log(t);var s=e.UserName.toLowerCase().includes(a.toLowerCase())||e.mrp.toLowerCase().includes(a.toLowerCase())||e.gst.toLowerCase().includes(a.toLowerCase());return t||(!t&&s?s:null)})),N(t),p(a))}})]})}),Object(x.jsx)(P.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:v,paginationPerPage:5,className:"react-dataTable",sortIcon:Object(x.jsx)(k.a,{size:10}),paginationDefaultPage:l+1,paginationComponent:function(){var e;return Object(x.jsx)(y.a,(e={previousLabel:"",nextLabel:"",forcePage:l,onPageChange:function(e){return function(e){i(e.selected)}(e)},pageCount:h.length?f.length/5:C.length/5||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(u.a)(e,"breakClassName","page-item"),Object(u.a)(e,"breakLinkClassName","page-link"),Object(u.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:h.length?f:C,selectableRowsComponent:U})]})})},R=t(648),W=t.n(R);a.default=function(){var e=Object(c.useState)({Company:[{value:"company",label:"Accenture"}],Location:[{value:"location",label:"Mumbai"}],User:[{value:"User",label:"Tejas Thakare",id:0}]}),a=Object(n.a)(e,2),t=a[0],u=a[1];return Object(x.jsx)(c.Fragment,{children:Object(x.jsxs)(o.a,{children:[Object(x.jsx)(M,{}),Object(x.jsx)("hr",{}),Object(x.jsx)(W.a,{children:Object(x.jsxs)(r.a,{className:"",children:[Object(x.jsx)(m.a,{sm:"12",children:Object(x.jsxs)("h4",{className:"mb-3",children:[Object(x.jsx)(l.a,{size:20,className:"mr-50"}),Object(x.jsx)("span",{className:"align-middle",children:"Edit User Company / Location"})]})}),Object(x.jsx)(m.a,{md:"4",sm:"12",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(j.a,{for:"User",children:"User"}),Object(x.jsx)(i.a,{theme:g.b,className:"react-select",classNamePrefix:"select",name:"users",options:[{value:"Mehul",label:"Mehul",id:4},{value:"Pravin Poshmani",label:"Pravin Poshmani",id:1},{value:"Tejas Thakare",label:"Tejas Thakare",id:2},{value:"Komal Kamble ",label:"Komal Kamble ",id:3}],value:t.User[0],menuPlacement:"auto",isClearable:!1,onChange:function(e,a){u(Object(s.a)(Object(s.a)({},t),{},{User:e}))}})]})}),Object(x.jsx)(m.a,{md:"4",sm:"12",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(j.a,{for:"Company",children:"Company"}),Object(x.jsx)(i.a,{theme:g.b,className:"react-select",classNamePrefix:"select",name:"Company",menuPlacement:"auto",options:[{value:"TCS",label:"TCS",id:4},{value:"Infosys",label:"Infosys",id:1},{value:"Accenture",label:"Accenture",id:2},{value:"Goldman Sachs",label:"Goldman Sachs",id:3}],value:t.Company[0],isClearable:!1,onChange:function(e,a){u(Object(s.a)(Object(s.a)({},t),{},{Company:e}))}})]})}),Object(x.jsx)(m.a,{md:"4",sm:"12",children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(j.a,{for:"Location",children:"Location"}),Object(x.jsx)(i.a,{theme:g.b,className:"react-select",classNamePrefix:"select",name:"Location",menuPlacement:"auto",options:[{value:"Mumbai",label:"Mumbai",id:4},{value:"Pune",label:"Pune",id:1},{value:"Bangalore",label:"Bangalore",id:2},{value:"Hyderabad",label:"Hyderabad",id:3}],value:t.Location[0],isClearable:!1,onChange:function(e,a){u(Object(s.a)(Object(s.a)({},t),{},{Location:e}))}})]})}),Object(x.jsxs)(m.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(x.jsx)(d.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(x.jsx)(d.a.Ripple,{color:"secondary",outline:!0,children:"Reset"})]})]})})]})})}},54:function(e,a,t){},55:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/komal.71eab2e7.jpg"},56:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/himanshu.db95087a.jpg"},57:function(e,a,t){"use strict";t.r(a),a.default=t.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,a,t){"use strict";a.a=t.p+"static/media/reethika.147b588d.jpg"}}]);
//# sourceMappingURL=212.9f747f36.chunk.js.map