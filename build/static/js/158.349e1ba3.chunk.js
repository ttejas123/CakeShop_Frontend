(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[158],{1182:function(e,a,t){"use strict";t.r(a);var n=t(8),s=t(2),r=t(21),o=t(0),c=(t(64),t(54),[{userName:"Pravin Poshmani",bidId:"B1001",customization:"Need Logo",approved:"Yes",approvedBy:"John Cena"},{userName:"Tejas Thakare",bidId:"B1002",customization:"Dont want Logo",approved:"Yes",approvedBy:"CM Punk"},{userName:"Komal Kamble",bidId:"B1003",customization:"Need Color Change",approved:"Yes",approvedBy:"Roman Reigns"},{userName:"Himanshu Chanda",bidId:"B1004",customization:"Need Big Logo",approved:"Yes",approvedBy:"John Cena"}]),l=(t(53),t(60)),i=t(59),d=t.n(i),u=t(63),m=t.n(u),b=t(62),j=t(61),p=t(81),f=t(76),O=t(969),h=t(1004),g=t(154),v=t(789),x=t(646),y=t(1005),w=t(86),N=t(72),k=t(948),C=t(1142),z=t(80),P=t(67),L=t(66),E=t(73),S=t(77),T=t(78),B=t(698),M=t(949),I=t(951),R=t(51),W=t(3);a.default=function(){var e=Object(o.forwardRef)((function(e,a){var t=e.onClick,n=Object(r.a)(e,["onClick"]);return Object(W.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(W.jsx)("input",Object(s.a)({type:"checkbox",className:"custom-control-input",ref:a},n)),Object(W.jsx)("label",{className:"custom-control-label",onClick:t})]})})),a=Object(o.useState)(0),t=Object(n.a)(a,2),i=t[0],u=t[1],D=Object(o.useState)(""),F=Object(n.a)(D,2),q=F[0],A=F[1],H=Object(o.useState)([]),J=Object(n.a)(H,2),V=J[0],Y=J[1],G=Object(o.useState)(0),K=Object(n.a)(G,2),U=K[0],Q=K[1],X=Object(o.useState)(0),Z=Object(n.a)(X,2),$=(Z[0],Z[1],Object(o.useState)({})),_=Object(n.a)($,2),ee=(_[0],_[1],Object(o.useState)("")),ae=Object(n.a)(ee,2),te=ae[0],ne=ae[1],se=[{name:"User Name",selector:"userName",sortable:!0,minWidth:"250px"},{name:"Bid Id",selector:"bidId",sortable:!0,minWidth:"250px"},{name:"Customization",selector:"customization",sortable:!0,minWidth:"250px"},{name:"Approved",selector:"approved",sortable:!0,minWidth:"250px"},{name:"Approved By",selector:"approvedBy",sortable:!0,minWidth:"250px"},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(W.jsxs)("div",{className:"d-flex",children:[Object(W.jsx)(k.a,{children:Object(W.jsx)(C.a,{className:"pr-1",tag:"span",children:Object(W.jsx)(p.a,{size:15,onClick:function(a){a.preventDefault(),deleteState(e.id)}})})}),Object(W.jsx)(f.a,{size:15,onClick:function(){setCurrentId(e.id),Q(!U)}})]})}}],re=function(){return Object(W.jsx)(o.Fragment,{children:Object(W.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})},oe=function(){return Object(W.jsx)(o.Fragment,{children:Object(W.jsx)("span",{className:"align-middle d-none d-md-inline-block"})})},ce=function(e){var a=[];ne(e),console.log(e.value);var t="l";t=e.value,A(t),t.length&&(a=c.filter((function(e){var a=e.BidStatus[0].value.toLowerCase().startsWith(t.toLowerCase()),n=e.BidStatus[0].value.toLowerCase().includes(t.toLowerCase());return a||(!a&&n?n:null)})),Y(a),ne(e))};return Object(W.jsxs)(o.Fragment,{children:[Object(W.jsxs)(z.a,{children:[Object(W.jsx)(P.a,{children:Object(W.jsx)(L.a,{tag:"h4",children:"Search Filter"})}),Object(W.jsx)(E.a,{children:Object(W.jsx)(S.a,{children:Object(W.jsx)(T.a,{md:"4",children:Object(W.jsx)("div",{style:{zIndex:1e3,position:"relative"},children:Object(W.jsx)(b.a,{isClearable:!1,theme:j.b,className:"react-select",classNamePrefix:"select",options:[{value:"7days",label:"7 Days"},{value:"1month",label:"1 Month"},{value:"3months",label:"3 Months"},{value:"today",label:"Today"},{value:"overall",label:"Overall"}],value:te,onChange:function(e){ce(e)}})})})})})]}),Object(W.jsxs)(z.a,{children:[Object(W.jsxs)(P.a,{className:"border-bottom",children:[Object(W.jsx)(L.a,{tag:"h4",children:"Customization List"}),Object(W.jsxs)("div",{className:"d-flex mt-md-0 mt-1",children:[Object(W.jsxs)(B.a,{children:[Object(W.jsxs)(C.a,{color:"secondary",caret:!0,outline:!0,children:[Object(W.jsx)(O.a,{size:15}),Object(W.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(W.jsxs)(M.a,{right:!0,children:[Object(W.jsxs)(I.a,{className:"w-100",children:[Object(W.jsx)(h.a,{size:15}),Object(W.jsx)("span",{className:"align-middle ml-50",children:"Print"})]}),Object(W.jsxs)(I.a,{className:"w-100",onClick:function(){return downloadCSV(c)},children:[Object(W.jsx)(g.a,{size:15}),Object(W.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(W.jsxs)(I.a,{className:"w-100",children:[Object(W.jsx)(v.a,{size:15}),Object(W.jsx)("span",{className:"align-middle ml-50",children:"Excel"})]}),Object(W.jsxs)(I.a,{className:"w-100",children:[Object(W.jsx)(x.a,{size:15}),Object(W.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(W.jsxs)(I.a,{className:"w-100",children:[Object(W.jsx)(y.a,{size:15}),Object(W.jsx)("span",{className:"align-middle ml-50",children:"Copy"})]})]})]}),Object(W.jsx)(l.b,{to:"/report/add-sample-request",children:Object(W.jsxs)(R.a,{className:"ml-2",color:"primary",children:[Object(W.jsx)(w.a,{size:15}),Object(W.jsx)("span",{className:"align-middle ml-50",children:"Add Email"})]})})]})]}),Object(W.jsx)(m.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:se,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(W.jsx)(N.a,{size:10}),paginationDefaultPage:i+1,paginationComponent:function(){return Object(W.jsx)(d.a,{previousLabel:Object(W.jsx)(re,{size:15}),nextLabel:Object(W.jsx)(oe,{size:15}),forcePage:i,onPageChange:function(e){return function(e){u(e.selected)}(e)},pageCount:q.length?V.length/7:c.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link",breakClassName:"page-item",breakLinkClassName:"page-link",containerClassName:"pagination react-paginate pagination-sm justify-content-end pr-1 mt-1"})},data:q.length?V:c,selectableRowsComponent:e})]})]})}},54:function(e,a,t){},73:function(e,a,t){"use strict";var n=t(4),s=t(5),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(11),d=t.n(i),u=t(12),m={tag:u.q,className:l.a.string,cssModule:l.a.object,innerRef:l.a.oneOfType([l.a.object,l.a.string,l.a.func])},b=function(e){var a=e.className,t=e.cssModule,r=e.innerRef,c=e.tag,l=Object(s.a)(e,["className","cssModule","innerRef","tag"]),i=Object(u.m)(d()(a,"card-body"),t);return o.a.createElement(c,Object(n.a)({},l,{className:i,ref:r}))};b.propTypes=m,b.defaultProps={tag:"div"},a.a=b},76:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(1),o=t.n(r);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,r=e.size,o=void 0===r?24:r,i=l(e,["color","size"]);return s.a.createElement("svg",c({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),s.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));i.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},i.displayName="Edit",a.a=i},77:function(e,a,t){"use strict";var n=t(4),s=t(5),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(11),d=t.n(i),u=t(12),m=l.a.oneOfType([l.a.number,l.a.string]),b={tag:u.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:m,sm:m,md:m,lg:m,xl:m},j={tag:"div",widths:["xs","sm","md","lg","xl"]},p=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,c=e.tag,l=e.form,i=e.widths,m=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),b=[];i.forEach((function(a,t){var n=e[a];if(delete m[a],n){var s=!t;b.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var j=Object(u.m)(d()(a,r?"no-gutters":null,l?"form-row":"row",b),t);return o.a.createElement(c,Object(n.a)({},m,{className:j}))};p.propTypes=b,p.defaultProps=j,a.a=p},78:function(e,a,t){"use strict";var n=t(4),s=t(5),r=t(0),o=t.n(r),c=t(1),l=t.n(c),i=t(11),d=t.n(i),u=t(12),m=l.a.oneOfType([l.a.number,l.a.string]),b=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:m,offset:m})]),j={tag:u.q,xs:b,sm:b,md:b,lg:b,xl:b,className:l.a.string,cssModule:l.a.object,widths:l.a.array},p={tag:"div",widths:["xs","sm","md","lg","xl"]},f=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,r=e.widths,c=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var r=!n;if(Object(u.k)(s)){var o,c=r?"-":"-"+a+"-",m=f(r,a,s.size);i.push(Object(u.m)(d()(((o={})[m]=s.size||""===s.size,o["order"+c+s.order]=s.order||0===s.order,o["offset"+c+s.offset]=s.offset||0===s.offset,o)),t))}else{var b=f(r,a,s);i.push(b)}}})),i.length||i.push("col");var m=Object(u.m)(d()(a,i),t);return o.a.createElement(c,Object(n.a)({},l,{className:m}))};O.propTypes=j,O.defaultProps=p,a.a=O},81:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(1),o=t.n(r);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,r=e.size,o=void 0===r?24:r,i=l(e,["color","size"]);return s.a.createElement("svg",c({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("polyline",{points:"3 6 5 6 21 6"}),s.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));i.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},i.displayName="Trash",a.a=i},86:function(e,a,t){"use strict";var n=t(0),s=t.n(n),r=t(1),o=t.n(r);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=Object(n.forwardRef)((function(e,a){var t=e.color,n=void 0===t?"currentColor":t,r=e.size,o=void 0===r?24:r,i=l(e,["color","size"]);return s.a.createElement("svg",c({ref:a,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),s.a.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),s.a.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));i.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},i.displayName="Plus",a.a=i}}]);
//# sourceMappingURL=158.349e1ba3.chunk.js.map