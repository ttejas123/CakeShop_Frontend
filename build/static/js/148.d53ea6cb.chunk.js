(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[148],{1076:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a(2),s=a(8),i=(a(92),a(135)),r=(a(71),a(61),a(0)),o=(a(77),a(580)),l=(a(53),a(81)),d=a(78),u=a(79),b=a(72),f=a(85),j=a(951),p=a(74),m=a(171),O=a(67),h=a(51),g=a(3);t.default=function(e){var t=Object(i.h)().id,a={id:0,type:"Category",default_c:10},v=Object(r.useState)(),x=Object(s.a)(v,2),y=(x[0],x[1],Object(r.useState)(a)),R=Object(s.a)(y,2),N=R[0],z=R[1],S=Object(r.useState)(!1),C=Object(s.a)(S,2),k=(C[0],C[1],Object(r.useState)(new Date)),_=Object(s.a)(k,2);_[0],_[1];Object(r.useEffect)((function(){console.log(o.a[t-1]),z(Object(c.a)({},o.a[t-1]))}),[t]);var w=function(e){var t=e.target,a=t.name,s=t.value;z(Object(c.a)(Object(c.a)({},N),{},Object(n.a)({},a,s)))};return Object(g.jsx)(l.a,{children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(u.a,{sm:"12",className:"pl-5 pt-2",children:Object(g.jsx)("h2",{className:"mb-1",children:"Edit Commission Slab"})}),Object(g.jsx)(b.a,{className:"pl-3 pt-2",children:Object(g.jsx)(u.a,{sm:"12",children:Object(g.jsx)(f.a,{onSubmit:function(e){return e.preventDefault()},children:Object(g.jsxs)(d.a,{children:[Object(g.jsx)(u.a,{md:"6",sm:"12",children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(p.a,{for:"type",children:"Type"}),Object(g.jsx)(m.a,{children:Object(g.jsx)(O.a,{name:"type",disabled:!0,onChange:w,id:"type",value:N.type})})]})}),Object(g.jsx)(u.a,{md:"6",sm:"12",children:Object(g.jsxs)(j.a,{children:[Object(g.jsx)(p.a,{for:"default_c",children:"Default Commission in %"}),Object(g.jsx)(m.a,{children:Object(g.jsx)(O.a,{name:"default_c",type:"number",onChange:w,id:"default_c",value:N.default_c})})]})}),Object(g.jsxs)(u.a,{className:"d-flex flex-sm-row flex-column mt-2",sm:"12",children:[Object(g.jsx)(h.a.Ripple,{className:"mb-1 mb-sm-0 mr-0 mr-sm-1",onClick:function(e){!function(e){var t=e.target,s=t.name;t.value,console.log(Object(c.a)(Object(c.a)({},N),{},Object(n.a)({},s,N))),z(Object(c.a)(Object(c.a)({},N),{},Object(n.a)({},s,N))),z(a),alert("Data successfully inserted")}(e)},color:"primary",children:"Save Changes"}),Object(g.jsx)(h.a.Ripple,{color:"secondary",onClick:function(){return z(a)},outline:!0,children:"Reset"})]})]})})})})]})})}},55:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/komal.71eab2e7.jpg"},56:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/himanshu.db95087a.jpg"},57:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,t,a){"use strict";t.a=a.p+"static/media/reethika.147b588d.jpg"},580:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(55),a(57),a(56),a(58);var n=[{id:1,type:"Category",default_c:10},{id:2,type:"User",default_c:13},{id:3,type:"Transcation",default_c:6}]},67:function(e,t,a){"use strict";var n=a(4),c=a(5),s=a(20),i=a(19),r=a(0),o=a.n(r),l=a(1),d=a.n(l),u=a(11),b=a.n(u),f=a(12),j={children:d.a.node,type:d.a.string,size:d.a.oneOfType([d.a.number,d.a.string]),bsSize:d.a.string,valid:d.a.bool,invalid:d.a.bool,tag:f.q,innerRef:d.a.oneOfType([d.a.object,d.a.func,d.a.string]),plaintext:d.a.bool,addon:d.a.bool,className:d.a.string,cssModule:d.a.object},p=function(e){function t(t){var a;return(a=e.call(this,t)||this).getRef=a.getRef.bind(Object(s.a)(a)),a.focus=a.focus.bind(Object(s.a)(a)),a}Object(i.a)(t,e);var a=t.prototype;return a.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},a.focus=function(){this.ref&&this.ref.focus()},a.render=function(){var e=this.props,t=e.className,a=e.cssModule,s=e.type,i=e.bsSize,r=e.valid,l=e.invalid,d=e.tag,u=e.addon,j=e.plaintext,p=e.innerRef,m=Object(c.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),O=["radio","checkbox"].indexOf(s)>-1,h=new RegExp("\\D","g"),g=d||("select"===s||"textarea"===s?s:"input"),v="form-control";j?(v+="-plaintext",g=d||"input"):"file"===s?v+="-file":"range"===s?v+="-range":O&&(v=u?null:"form-check-input"),m.size&&h.test(m.size)&&(Object(f.s)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),i=m.size,delete m.size);var x=Object(f.m)(b()(t,l&&"is-invalid",r&&"is-valid",!!i&&"form-control-"+i,v),a);return("input"===g||d&&"function"===typeof d)&&(m.type=s),m.children&&!j&&"select"!==s&&"string"===typeof g&&"select"!==g&&(Object(f.s)('Input with a type of "'+s+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete m.children),o.a.createElement(g,Object(n.a)({},m,{ref:p,className:x,"aria-invalid":l}))},t}(o.a.Component);p.propTypes=j,p.defaultProps={type:"text"},t.a=p},71:function(e,t,a){"use strict";var n=a(2),c=a(21),s=a(3),i=function(e){for(var t=e.count,a=e.tag,i=(e.component,e.children),r=Object(c.a)(e,["count","tag","component","children"]),o=a,l=[],d=0;d<t;d++)l.push(i(d));return Object(s.jsx)(o,Object(n.a)(Object(n.a)({},r),{},{children:l}))};i.defaultProps={tag:"div"},t.a=i},81:function(e,t,a){"use strict";var n=a(4),c=a(5),s=a(0),i=a.n(s),r=a(1),o=a.n(r),l=a(11),d=a.n(l),u=a(12),b={tag:u.q,inverse:o.a.bool,color:o.a.string,body:o.a.bool,outline:o.a.bool,className:o.a.string,cssModule:o.a.object,innerRef:o.a.oneOfType([o.a.object,o.a.string,o.a.func])},f=function(e){var t=e.className,a=e.cssModule,s=e.color,r=e.body,o=e.inverse,l=e.outline,b=e.tag,f=e.innerRef,j=Object(c.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),p=Object(u.m)(d()(t,"card",!!o&&"text-white",!!r&&"card-body",!!s&&(l?"border":"bg")+"-"+s),a);return i.a.createElement(b,Object(n.a)({},j,{className:p,ref:f}))};f.propTypes=b,f.defaultProps={tag:"div"},t.a=f}}]);
//# sourceMappingURL=148.d53ea6cb.chunk.js.map