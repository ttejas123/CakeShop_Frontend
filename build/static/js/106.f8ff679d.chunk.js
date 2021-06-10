(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[106],{1061:function(e,a,t){"use strict";t.r(a);t(7);var s=t(2),r=t(8),n=t(0),i=(t(53),t(11)),l=t.n(i),c=t(296),o=t(80),d=t(67),u=t(66),b=t(73),f=t(77),j=t(78),m=t(85),h=t(945),O=t(75),p=t(68),x=t(1141),v=t(51),g=t(62),y=t(61),N=t(87),R=t(3);a.default=function(){var e=Object(n.useState)(null),a=Object(r.a)(e,2),t=a[0],i=(a[1],Object(N.c)({defaultValues:{isRegisteredOffice:"No"}})),T=i.register,P=i.errors,M=i.control,C=i.setValue,w={id:1,name:"",email:"",isRegisteredOffice:"",isVerified:"",logo:"",phone:"",panNumber:"",VerifiedBy:[{value:"Pravin Poshmani",label:"Pravin Poshmani"}],City:[{value:"city",label:"Mumbai"}],State:[{value:"state",label:"Maharashtra"}],Country:[{value:"country",label:"India"}],Role:[{value:"role",label:"Intern"}]},k=Object(n.useState)(w),V=Object(r.a)(k,2),z=V[0],S=V[1],E=Object(n.useState)(null),A=Object(r.a)(E,2),q=(A[0],A[1],Object(n.useState)(null)),U=Object(r.a)(q,2),I=U[0];U[1];Object(n.useEffect)((function(){}));return Object(R.jsxs)(o.a,{children:[Object(R.jsx)(d.a,{children:Object(R.jsx)(u.a,{tag:"h1",children:"Add User Address"})}),Object(R.jsx)(b.a,{children:Object(R.jsx)(f.a,{children:Object(R.jsx)(j.a,{sm:"12",children:Object(R.jsx)(m.a,{onSubmit:function(e){return e.preventDefault()},children:Object(R.jsxs)(f.a,{children:[Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"id",children:"User Id"}),Object(R.jsx)(p.a,{type:"text",Number:"id",placeholder:"User Id",defaultValue:I&&I.EmployeeNumber})]})}),Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"userName",children:"User Name"}),Object(R.jsx)(p.a,{type:"text",id:"userName",placeholder:"User Name",defaultValue:I&&I.userName})]})}),Object(R.jsx)("hr",{}),Object(R.jsx)(j.a,{md:"12",sm:"12",children:Object(R.jsxs)(f.a,{children:[Object(R.jsx)(j.a,{sm:"12",children:Object(R.jsxs)("h4",{className:"mb-1 mt-2",children:[Object(R.jsx)(c.a,{size:20,className:"mr-50"}),Object(R.jsx)("span",{className:"align-middle",children:"Address"})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"addressName-1",children:"Address Name"}),Object(R.jsx)(p.a,{id:"addressName-1",name:"addressName-1",defaultValue:"Home",innerRef:T({required:!0}),className:l()({"is-invalid":P.addressName1})})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"address-1",children:"Address Line 1"}),Object(R.jsx)(p.a,{id:"address-1",name:"address1",defaultValue:"A-1",innerRef:T({required:!0}),className:l()({"is-invalid":P.address1})})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"address-2",children:"Address Line 2"}),Object(R.jsx)(p.a,{placeholder:"A-1",id:"address-2",name:"address-2"})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"landmark",children:"Landmark"}),Object(R.jsx)(p.a,{id:"landmark",name:"landmark",placeholder:"Temple",innerRef:T({required:!0}),invalid:P.landmark&&!0})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"City",children:"City"}),Object(R.jsx)(g.a,{id:"City",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"Pune",label:"Pune"},{value:"Mumbai",label:"Mumbai"},{value:"Nagpur",label:"Nagpur"},{value:"Nashik",label:"Nashik"},{value:"Solapur",label:"Solapur"}],theme:y.b,value:z.City[0],onChange:function(e){S(Object(s.a)(Object(s.a)({},z),{},{City:e}))}})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"State",children:"State"}),Object(R.jsx)(g.a,{id:"State",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"Maharashtra",label:"Maharashtra"},{value:"Andhra Pradesh",label:"Andhra Pradesh"},{value:"Kerala",label:"Kerala"},{value:"Telangana",label:"Telangana"},{value:"Karnataka",label:"Karnataka"},{value:"Gujarat",label:"Gujarat"}],theme:y.b,value:z.State[0],onChange:function(e){S(Object(s.a)(Object(s.a)({},z),{},{State:e}))}})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"Country",children:"Country"}),Object(R.jsx)(g.a,{id:"Country",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"India",label:"India"},{value:"UK",label:"UK"},{value:"USA",label:"USA"},{value:"Australia",label:"Australia"},{value:"China",label:"China"},{value:"Russia",label:"Russia"}],theme:y.b,value:z.Country[0],onChange:function(e){S(Object(s.a)(Object(s.a)({},z),{},{Country:e}))}})]})}),Object(R.jsx)(j.a,{md:"4",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"addressProof",children:"Address Proof"}),Object(R.jsx)(p.a,{id:"addressProof",name:"addressProof",defaultValue:"Address Proof",innerRef:T({required:!0}),className:l()({"is-invalid":P.addressName1})})]})})]})}),Object(R.jsx)("hr",{}),Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)("label",{className:"d-block mb-1",children:"Is Registered Office"}),Object(R.jsxs)(h.a,{children:[Object(R.jsx)(N.a,{name:"isRegisteredOffice",control:M,render:function(e){return Object(R.jsx)(x.a,{inline:!0,type:"radio",label:"Yes",value:"Yes",id:"Yes",name:e.name,invalid:null!==t&&(void 0===t.isRegisteredOffice||null===t.isRegisteredOffice),onChange:function(){return C("isRegisteredOffice","Yes")}})}}),Object(R.jsx)(N.a,{name:"isRegisteredOffice",control:M,render:function(e){return Object(R.jsx)(x.a,{inline:!0,type:"radio",label:"No",value:"No",id:"No",name:e.name,defaultChecked:!0,invalid:null!==t&&(void 0===t.isRegisteredOffice||null===t.isRegisteredOffice),onChange:function(){return C("isRegisteredOffice","No")}})}})]})]})}),Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)("label",{className:"d-block mb-1",children:"Is Verified"}),Object(R.jsxs)(h.a,{children:[Object(R.jsx)(N.a,{name:"isVerified",control:M,render:function(e){return Object(R.jsx)(x.a,{inline:!0,type:"radio",label:"Yes",value:"Yes",id:"Yes",name:e.name,invalid:null!==t&&(void 0===t.isVerified||null===t.isVerified),onChange:function(){return C("isVerified","Yes")}})}}),Object(R.jsx)(N.a,{name:"isVerified",control:M,render:function(e){return Object(R.jsx)(x.a,{inline:!0,type:"radio",label:"No",value:"No",id:"No",name:e.name,defaultChecked:!0,invalid:null!==t&&(void 0===t.isVerified||null===t.isVerified),onChange:function(){return C("isVerified","No")}})}})]})]})}),Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"verifiedTime",children:"Verified Time"}),Object(R.jsx)(p.a,{type:"text",id:"verifiedTime",placeholder:"Verified Time",defaultValue:I&&I.verifiedTime})]})}),Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"createdTime",children:"Created Time"}),Object(R.jsx)(p.a,{type:"text",id:"createdTime",placeholder:"Created Time",defaultValue:I&&I.createdTime})]})}),Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"updatedTime",children:"Updated Time"}),Object(R.jsx)(p.a,{type:"text",id:"updatedTime",placeholder:"Updated Time",defaultValue:I&&I.updatedTime})]})}),Object(R.jsx)(j.a,{md:"6",sm:"12",children:Object(R.jsxs)(h.a,{children:[Object(R.jsx)(O.a,{for:"VerifiedBy",children:"Verified By"}),Object(R.jsx)(g.a,{id:"VerifiedBy",className:"react-select",classNamePrefix:"select",isClearable:!1,options:[{value:"Pravin Poshmani",label:"Pravin Poshmani"},{value:"Tejas Thakare",label:"Tejas Thakare"},{value:"Komal Kamble",label:"Komal Kamble"}],theme:y.b,value:z.VerifiedBy[0],onChange:function(e){S(Object(s.a)(Object(s.a)({},z),{},{VerifiedBy:e}))}})]})}),Object(R.jsxs)(j.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(R.jsx)(v.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",type:"submit",color:"primary",children:"Save Changes"}),Object(R.jsx)(v.a.Ripple,{color:"secondary",outline:!0,children:"Reset"})]})]})})})})})]})}},296:function(e,a,t){"use strict";var s=t(0),r=t.n(s),n=t(1),i=t.n(n);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}function c(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},n=Object.keys(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(s=0;s<n.length;s++)t=n[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=Object(s.forwardRef)((function(e,a){var t=e.color,s=void 0===t?"currentColor":t,n=e.size,i=void 0===n?24:n,o=c(e,["color","size"]);return r.a.createElement("svg",l({ref:a,xmlns:"http://www.w3.org/2000/svg",width:i,height:i,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},o),r.a.createElement("path",{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}),r.a.createElement("circle",{cx:"12",cy:"10",r:"3"}))}));o.propTypes={color:i.a.string,size:i.a.oneOfType([i.a.string,i.a.number])},o.displayName="MapPin",a.a=o},66:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(0),i=t.n(n),l=t(1),c=t.n(l),o=t(11),d=t.n(o),u=t(12),b={tag:u.q,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.m)(d()(a,"card-title"),t);return i.a.createElement(n,Object(s.a)({},l,{className:c}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},67:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(0),i=t.n(n),l=t(1),c=t.n(l),o=t(11),d=t.n(o),u=t(12),b={tag:u.q,className:c.a.string,cssModule:c.a.object},f=function(e){var a=e.className,t=e.cssModule,n=e.tag,l=Object(r.a)(e,["className","cssModule","tag"]),c=Object(u.m)(d()(a,"card-header"),t);return i.a.createElement(n,Object(s.a)({},l,{className:c}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},68:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(20),i=t(19),l=t(0),c=t.n(l),o=t(1),d=t.n(o),u=t(11),b=t.n(u),f=t(12),j={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.focus=t.focus.bind(Object(n.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.type,i=e.bsSize,l=e.valid,o=e.invalid,d=e.tag,u=e.addon,j=e.plaintext,m=e.innerRef,h=Object(r.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),O=["radio","checkbox"].indexOf(n)>-1,p=new RegExp("\\D","g"),x=d||("select"===n||"textarea"===n?n:"input"),v="form-control";j?(v+="-plaintext",x=d||"input"):"file"===n?v+="-file":"range"===n?v+="-range":O&&(v=u?null:"form-check-input"),h.size&&p.test(h.size)&&(Object(f.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=h.size,delete h.size);var g=Object(f.m)(b()(a,o&&"is-invalid",l&&"is-valid",!!i&&"form-control-"+i,v),t);return("input"===x||d&&"function"===typeof d)&&(h.type=n),h.children&&!j&&"select"!==n&&"string"===typeof x&&"select"!==x&&(Object(f.s)('Input with a type of "'+n+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete h.children),c.a.createElement(x,Object(s.a)({},h,{ref:m,className:g,"aria-invalid":o}))},a}(c.a.Component);m.propTypes=j,m.defaultProps={type:"text"},a.a=m},73:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(0),i=t.n(n),l=t(1),c=t.n(l),o=t(11),d=t.n(o),u=t(12),b={tag:u.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.innerRef,l=e.tag,c=Object(r.a)(e,["className","cssModule","innerRef","tag"]),o=Object(u.m)(d()(a,"card-body"),t);return i.a.createElement(l,Object(s.a)({},c,{className:o,ref:n}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},75:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(0),i=t.n(n),l=t(1),c=t.n(l),o=t(11),d=t.n(o),u=t(12),b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.string,c.a.number,c.a.shape({size:b,order:b,offset:b})]),j={children:c.a.node,hidden:c.a.bool,check:c.a.bool,size:c.a.string,for:c.a.string,tag:u.q,className:c.a.string,cssModule:c.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:c.a.array},m={tag:"label",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,n=e.hidden,l=e.widths,c=e.tag,o=e.check,b=e.size,f=e.for,j=Object(r.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),m=[];l.forEach((function(a,s){var r=e[a];if(delete j[a],r||""===r){var n,i=!s;if(Object(u.k)(r)){var l,c=i?"-":"-"+a+"-";n=h(i,a,r.size),m.push(Object(u.m)(d()(((l={})[n]=r.size||""===r.size,l["order"+c+r.order]=r.order||0===r.order,l["offset"+c+r.offset]=r.offset||0===r.offset,l))),t)}else n=h(i,a,r),m.push(n)}}));var O=Object(u.m)(d()(a,!!n&&"sr-only",!!o&&"form-check-label",!!b&&"col-form-label-"+b,m,!!m.length&&"col-form-label"),t);return i.a.createElement(c,Object(s.a)({htmlFor:f},j,{className:O}))};O.propTypes=j,O.defaultProps=m,a.a=O},77:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(0),i=t.n(n),l=t(1),c=t.n(l),o=t(11),d=t.n(o),u=t(12),b=c.a.oneOfType([c.a.number,c.a.string]),f={tag:u.q,noGutters:c.a.bool,className:c.a.string,cssModule:c.a.object,form:c.a.bool,xs:b,sm:b,md:b,lg:b,xl:b},j={tag:"div",widths:["xs","sm","md","lg","xl"]},m=function(e){var a=e.className,t=e.cssModule,n=e.noGutters,l=e.tag,c=e.form,o=e.widths,b=Object(r.a)(e,["className","cssModule","noGutters","tag","form","widths"]),f=[];o.forEach((function(a,t){var s=e[a];if(delete b[a],s){var r=!t;f.push(r?"row-cols-"+s:"row-cols-"+a+"-"+s)}}));var j=Object(u.m)(d()(a,n?"no-gutters":null,c?"form-row":"row",f),t);return i.a.createElement(l,Object(s.a)({},b,{className:j}))};m.propTypes=f,m.defaultProps=j,a.a=m},78:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(0),i=t.n(n),l=t(1),c=t.n(l),o=t(11),d=t.n(o),u=t(12),b=c.a.oneOfType([c.a.number,c.a.string]),f=c.a.oneOfType([c.a.bool,c.a.number,c.a.string,c.a.shape({size:c.a.oneOfType([c.a.bool,c.a.number,c.a.string]),order:b,offset:b})]),j={tag:u.q,xs:f,sm:f,md:f,lg:f,xl:f,className:c.a.string,cssModule:c.a.object,widths:c.a.array},m={tag:"div",widths:["xs","sm","md","lg","xl"]},h=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},O=function(e){var a=e.className,t=e.cssModule,n=e.widths,l=e.tag,c=Object(r.a)(e,["className","cssModule","widths","tag"]),o=[];n.forEach((function(a,s){var r=e[a];if(delete c[a],r||""===r){var n=!s;if(Object(u.k)(r)){var i,l=n?"-":"-"+a+"-",b=h(n,a,r.size);o.push(Object(u.m)(d()(((i={})[b]=r.size||""===r.size,i["order"+l+r.order]=r.order||0===r.order,i["offset"+l+r.offset]=r.offset||0===r.offset,i)),t))}else{var f=h(n,a,r);o.push(f)}}})),o.length||o.push("col");var b=Object(u.m)(d()(a,o),t);return i.a.createElement(l,Object(s.a)({},c,{className:b}))};O.propTypes=j,O.defaultProps=m,a.a=O},80:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(0),i=t.n(n),l=t(1),c=t.n(l),o=t(11),d=t.n(o),u=t(12),b={tag:u.q,inverse:c.a.bool,color:c.a.string,body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},f=function(e){var a=e.className,t=e.cssModule,n=e.color,l=e.body,c=e.inverse,o=e.outline,b=e.tag,f=e.innerRef,j=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),m=Object(u.m)(d()(a,"card",!!c&&"text-white",!!l&&"card-body",!!n&&(o?"border":"bg")+"-"+n),t);return i.a.createElement(b,Object(s.a)({},j,{className:m,ref:f}))};f.propTypes=b,f.defaultProps={tag:"div"},a.a=f},85:function(e,a,t){"use strict";var s=t(4),r=t(5),n=t(20),i=t(19),l=t(0),c=t.n(l),o=t(1),d=t.n(o),u=t(11),b=t.n(u),f=t(12),j={children:d.a.node,inline:d.a.bool,tag:f.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),className:d.a.string,cssModule:d.a.object},m=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(n.a)(t)),t.submit=t.submit.bind(Object(n.a)(t)),t}Object(i.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,n=e.inline,i=e.tag,l=e.innerRef,o=Object(r.a)(e,["className","cssModule","inline","tag","innerRef"]),d=Object(f.m)(b()(a,!!n&&"form-inline"),t);return c.a.createElement(i,Object(s.a)({},o,{ref:l,className:d}))},a}(l.Component);m.propTypes=j,m.defaultProps={tag:"form"},a.a=m}}]);
//# sourceMappingURL=106.f8ff679d.chunk.js.map