(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[176],{285:function(e,a,t){"use strict";t.d(a,"b",(function(){return l})),t.d(a,"a",(function(){return o}));var n,i=t(7),c=(t(55),t(57)),s=t(56),l=(t(58),[(n={outOfOffice:"Pravin Poshmani",from:"12-11-2020",to:"14-11-2020",backUp:"Tejas Thakare",img:c.a,id:1},Object(i.a)(n,"outOfOffice","Pravin Poshmani"),Object(i.a)(n,"from","12-11-2020"),Object(i.a)(n,"to","14-11-2020"),Object(i.a)(n,"backUp",[{value:"Tejas Thakare",label:"Tejas Thakare"}]),n),Object(i.a)({id:2,outOfOffice:"Tejas Thakare",from:"05-05-2021",to:"11-05-2021",backUp:"Pravin Poshmani",img:c.a},"backUp",[{value:"Pravin Poshmani",label:"Pravin Poshmani"}]),Object(i.a)({id:3,outOfOffice:"Komal Kamble",from:"12-10-2020",to:"14-12-2020",backUp:"Himanshu Chanda",img:s.a},"backUp",[{value:"Himanshu Chanda",label:"Himanshu Chanda"}]),Object(i.a)({id:4,outOfOffice:"Reethika",from:"10-11-2020",to:"19-11-2020",backUp:"Daksh",img:""},"backUp",[{value:"Daksh",label:"Daksh"}]),Object(i.a)({id:5,outOfOffice:"Himanshu Chanda",from:"12-11-2020",to:"14-11-2020",backUp:"Umang Shah",img:""},"backUp",[{value:"Umang Shah",label:"Umang Shah"}])]),o=[{employeeNumber:"EMP 1",firstName:"Pravin",lastName:"Poshmani",email:"abc@xyz.com",mobile:"2345",role:"Intern",lastLoginDate:"01-05-2021"},{employeeNumber:"EMP 2",firstName:"Tejas",lastName:"Thakare",email:"abcd@xyz.com",mobile:"23465",role:"Intern",lastLoginDate:"02-05-2021"},{employeeNumber:"EMP 3",firstName:"Komal",lastName:"Kamble",email:"abc@xyz.com",mobile:"2345",role:"Ios Developer",lastLoginDate:"03-05-2021"},{employeeNumber:"EMP 4",firstName:"Himanshu",lastName:"Chanda",email:"abc@xyz.com",mobile:"24456",role:"Admin",lastLoginDate:"04-05-2021"}]},54:function(e,a,t){},55:function(e,a,t){"use strict";a.a=t.p+"static/media/komal.71eab2e7.jpg"},56:function(e,a,t){"use strict";a.a=t.p+"static/media/himanshu.db95087a.jpg"},57:function(e,a,t){"use strict";a.a=t.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,a,t){"use strict";a.a=t.p+"static/media/reethika.147b588d.jpg"},993:function(e,a,t){"use strict";t.r(a);var n=t(8),i=t(0),c=(t(64),t(54),t(285)),s=t(53),l=t(60),o=t(59),r=t.n(o),m=t(63),b=t.n(m),d=t(81),j=t(76),u=t(86),h=t(72),p=t(948),O=t(1142),f=t(80),g=t(67),x=t(66),k=t(51),N=t(3);a.default=function(){console.log(c.b);var e=Object(i.useState)(0),a=Object(n.a)(e,2),t=a[0],o=a[1],m=Object(i.useState)(""),v=Object(n.a)(m,2),C=v[0],P=(v[1],Object(i.useState)([])),y=Object(n.a)(P,2),U=y[0],D=(y[1],Object(i.useState)(0)),S=Object(n.a)(D,2),T=S[0],z=(S[1],Object(i.useState)(0)),L=Object(n.a)(z,2),A=L[0],w=(L[1],Object(i.useState)({})),E=Object(n.a)(w,2),H=E[0],F=(E[1],function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.img.length?Object(N.jsxs)(l.b,{to:"/bidDetails/".concat(e.id),children:[" ",Object(N.jsx)(s.a,{className:"mr-1",img:e.img,width:"32",height:"32"})," "]}):Object(N.jsxs)(l.b,{to:"/bidDetails/".concat(e.id),children:[Object(N.jsx)(s.a,{color:a||"primary",className:"mr-1",content:e.backUp[0].label||"John Doe",initials:!0})," "]})}),M=[{name:"Out Of Office",selector:"outOfOffice",sortable:!0,minWidth:"250px"},{name:"From",selector:"from",sortable:!1,minWidth:"250px"},{name:"To",selector:"to",sortable:!1,minWidth:"250px"},{name:"Backup Name",minWidth:"250px",selector:"backUp",sortable:!0,cell:function(e){return Object(N.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[F(e),Object(N.jsx)("div",{className:"",children:Object(N.jsx)("div",{className:"backup-info text-truncate d-flex flex-column",children:Object(N.jsx)("span",{className:"font-weight-bold",children:e.backUp[0].label})})})]})}},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(N.jsxs)("div",{className:"d-flex",children:[Object(N.jsx)(p.a,{children:Object(N.jsx)(O.a,{className:"pr-1",tag:"span",children:Object(N.jsx)(d.a,{size:15,onClick:function(e){}})})}),Object(N.jsx)(l.b,{to:"/master/backupA/edit/".concat(e.id),children:Object(N.jsx)(j.a,{size:15})})]})}}],I=function(){return Object(N.jsx)(i.Fragment,{children:Object(N.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})},K=function(){return Object(N.jsx)(i.Fragment,{children:Object(N.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})};return Object(N.jsx)(i.Fragment,{children:Object(N.jsxs)(f.a,{children:[Object(N.jsxs)(g.a,{className:"border-bottom",children:[Object(N.jsx)(x.a,{tag:"h4",children:"Backup Accounts"}),Object(N.jsx)(l.b,{to:"/master/backupA/add",children:Object(N.jsxs)(k.a,{className:"ml-2",color:"primary",children:[Object(N.jsx)(u.a,{size:15}),Object(N.jsx)("span",{className:"align-middle ml-50",children:"Add BackUp"})]})})]}),T?Object(N.jsx)(HorizontalForm,{handleCancel:handleCancelOfAdd,handleSubmit:handleSubmitOfAdd}):null,A?Object(N.jsx)(EditForm,{data:H,handleCancel:handleCancelOfEdit,handleSubmit:handleSubmitOfEdit}):null,Object(N.jsx)(b.a,{noHeader:!0,pagination:!0,selectableRowsNoSelectAll:!0,columns:M,className:"react-dataTable",paginationPerPage:7,sortIcon:Object(N.jsx)(h.a,{size:10}),paginationDefaultPage:t+1,paginationComponent:function(){return Object(N.jsx)(r.a,{previousLabel:Object(N.jsx)(I,{size:15}),nextLabel:Object(N.jsx)(K,{size:15}),forcePage:t,onPageChange:function(e){return function(e){o(e.selected)}(e)},pageCount:C.length?U.length/7:c.b.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate pagination-sm justify-content-end pr-1 mt-1"})},data:c.b})]})})}}}]);
//# sourceMappingURL=176.1acba3c9.chunk.js.map