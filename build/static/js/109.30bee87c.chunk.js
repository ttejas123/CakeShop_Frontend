(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[109],{1148:function(e,a,t){"use strict";t.r(a);var r=t(7),n=t(8),i=t(53),s=(t(69),t(64),t(54),t(0)),o=(t(61),t(55)),l=t(57),c=(t(56),t(58),[{id:1,P_Name:"Tejas Thakare",P_userName:"tejas",T_Name:"Tejas Thakare",Service:"Web Developer",T_userName:"tejas",service:"Web Developer",P_email:"tthakare73@gmail.com",amount_paid:8e4,Date:"".concat((new Date).toGMTString()),T_email:"tthakare73@gmail.com",address:"Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",avatar_P:"",avatar_T:"",Status:"Receive Service"},{id:2,P_Name:"Komal Kamble",P_userName:"komal",T_Name:"Tejas Thakare",Service:"Web Developer",T_userName:"tejas",T_email:"tthakare73@gmail.com",avatar_T:"",Date:"".concat((new Date).toGMTString()),amount_paid:8e4,service:"Android/IOS Developer",email:"komal@gmail.com",address:"Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",avatar_P:o.a,Status:"Completed"},{id:3,P_Name:"Pravin Poshmani",P_userName:"pravin",T_Name:"Tejas Thakare",Service:"Web Developer",T_userName:"tejas",T_email:"tthakare73@gmail.com",avatar_T:"",Date:"".concat((new Date).toGMTString()),amount_paid:8e4,service:"Web Developer",email:"pravin@gmail.com",address:"Shiv-shakti, so, A-35, 0-4, sector-15, Airoli, Navi Mumbai",avatar_P:l.a,Status:"Service Pending"}]),u=t(59),p=t.n(u),d=t(63),m=t.n(d),f=t(72),g=t(80),b=t(67),v=t(66),h=t(3),y=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar_P.length?Object(h.jsx)(i.a,{className:"mr-1",img:e.avatar_P,width:"32",height:"32"}):Object(h.jsx)(i.a,{color:a||"primary",className:"mr-1",content:e.P_Name||"John Doe",initials:!0,status:"online"})},j=function(e){var a=["light-success","light-danger","light-warning","light-info","light-primary","light-secondary"][Math.floor(6*Math.random())];return e.avatar_T.length?Object(h.jsx)(i.a,{className:"mr-1",img:e.avatar_T,width:"32",height:"32"}):Object(h.jsx)(i.a,{color:a||"primary",className:"mr-1",content:e.T_Name||"John Doe",initials:!0,status:"online"})};a.default=function(){var e=Object(s.useState)(0),a=Object(n.a)(e,2),t=a[0],i=a[1],o=Object(s.useState)(""),l=Object(n.a)(o,2),u=l[0],d=(l[1],Object(s.useState)([])),N=Object(n.a)(d,2),x=N[0],k=(N[1],Object(s.useState)("")),P=Object(n.a)(k,2),O=(P[0],P[1],Object(s.useState)("")),C=Object(n.a)(O,2),L=(C[0],C[1],[{name:"Provider",minWidth:"150px",selector:"P_Name",sortable:!0,cell:function(e){return Object(h.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[y(e),Object(h.jsx)("div",{className:"",children:Object(h.jsxs)("div",{className:"user-info text-truncate d-flex flex-column",children:[Object(h.jsx)("span",{className:"font-weight-bold",children:e.P_Name}),Object(h.jsxs)("small",{className:"text-truncate text-muted mb-0",children:["@",e.P_userName]})]})})]})}},{name:"Provided to",minWidth:"150px",selector:"T_Name",sortable:!0,cell:function(e){return Object(h.jsxs)("div",{className:"d-flex justify-content-left align-items-center",children:[j(e),Object(h.jsx)("div",{className:"",children:Object(h.jsxs)("div",{className:"user-info text-truncate d-flex flex-column",children:[Object(h.jsx)("span",{className:"font-weight-bold",children:e.T_Name}),Object(h.jsxs)("small",{className:"text-truncate text-muted mb-0",children:["@",e.T_userName]})]})})]})}},{name:"Service",selector:"Service",sortable:!0,minWidth:"150px"},{name:"amount_paid",selector:"amount_paid",sortable:!0,minWidth:"150px",cell:function(e){return Object(h.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(h.jsx)("div",{className:"d-flex flex-column ml-2",children:Object(h.jsxs)("span",{className:"font-weight-bold",children:["\u20b9",e.amount_paid]})})})}},{name:"Status",selector:"Status",sortable:!0,minWidth:"150px"},{name:"Date",selector:"Date",sortable:!0,minWidth:"150px"}]);return Object(h.jsx)(s.Fragment,{children:Object(h.jsxs)(g.a,{children:[Object(h.jsxs)(b.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(h.jsx)(v.a,{tag:"h4",children:"VAS Transaction"}),Object(h.jsx)("div",{className:"d-flex mt-md-0 mt-1"})]}),Object(h.jsx)(m.a,{noHeader:!0,pagination:!0,columns:L,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(h.jsx)(f.a,{size:10}),paginationDefaultPage:t+1,paginationComponent:function(){var e;return Object(h.jsx)(p.a,(e={previousLabel:"",nextLabel:"",forcePage:t,onPageChange:function(e){return function(e){i(e.selected)}(e)},pageCount:u.length?x.length/7:c.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(r.a)(e,"breakClassName","page-item"),Object(r.a)(e,"breakLinkClassName","page-link"),Object(r.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:u.length?x:c})]})})}},54:function(e,a,t){},55:function(e,a,t){"use strict";a.a=t.p+"static/media/komal.71eab2e7.jpg"},56:function(e,a,t){"use strict";a.a=t.p+"static/media/himanshu.db95087a.jpg"},57:function(e,a,t){"use strict";a.a=t.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,a,t){"use strict";a.a=t.p+"static/media/reethika.147b588d.jpg"},59:function(e,a,t){(function(r){var n;e.exports=(n=t(0),function(e){var a={};function t(r){if(a[r])return a[r].exports;var n=a[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=a,t.d=function(e,a,r){t.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,a){if(1&a&&(e=t(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)t.d(r,n,function(a){return e[a]}.bind(null,n));return r},t.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(a,"a",a),a},t.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},t.p="",t(t.s=4)}([function(e,a,t){e.exports=t(2)()},function(e,a){e.exports=n},function(e,a,t){"use strict";var r=t(3);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,a,t,n,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function a(){return e}e.isRequired=e;var t={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:a,element:e,elementType:e,instanceOf:a,node:e,objectOf:a,oneOf:a,oneOfType:a,shape:a,exact:a,checkPropTypes:i,resetWarningCache:n};return t.PropTypes=t,t}},function(e,a,t){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,r){"use strict";r.r(t);var n=r(1),i=r.n(n),s=r(0),o=r.n(s);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var c=function(e){var a=e.pageClassName,t=e.pageLinkClassName,r=e.page,n=e.selected,s=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,d=e.extraAriaContext,m=e.ariaLabel||"Page "+r+(d?" "+d:""),f=null;return n&&(f="page",m=e.ariaLabel||"Page "+r+" is your current page",a=void 0!==a?a+" "+s:s,void 0!==t?void 0!==o&&(t=t+" "+o):t=o),i.a.createElement("li",{className:a},i.a.createElement("a",l({role:"button",className:t,href:p,tabIndex:"0","aria-label":m,"aria-current":f,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var d=function(e){var a=e.breakLabel,t=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,s=e.getEventListener,o=t||"break";return i.a.createElement("li",{className:o},i.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},s(n)),a))};d.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var m=d;function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function g(){return(g=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function b(e,a){for(var t=0;t<a.length;t++){var r=a[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,a){return(v=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function h(e){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,r=N(e);if(a){var n=N(this).constructor;t=Reflect.construct(r,arguments,n)}else t=r.apply(this,arguments);return y(this,t)}}function y(e,a){return!a||"object"!==f(a)&&"function"!=typeof a?j(e):a}function j(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function N(e){return(N=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function x(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var k=function(e){!function(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&v(e,a)}(s,e);var a,t,r,n=h(s);function s(e){var a,t;return function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,s),x(j(a=n.call(this,e)),"handlePreviousPage",(function(e){var t=a.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,t>0&&a.handlePageSelected(t-1,e)})),x(j(a),"handleNextPage",(function(e){var t=a.state.selected,r=a.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,t<r-1&&a.handlePageSelected(t+1,e)})),x(j(a),"handlePageSelected",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1,a.state.selected!==e&&(a.setState({selected:e}),a.callCallback(e))})),x(j(a),"getEventListener",(function(e){return x({},a.props.eventListener,e)})),x(j(a),"handleBreakClick",(function(e,t){t.preventDefault?t.preventDefault():t.returnValue=!1;var r=a.state.selected;a.handlePageSelected(r<e?a.getForwardJump():a.getBackwardJump(),t)})),x(j(a),"callCallback",(function(e){void 0!==a.props.onPageChange&&"function"==typeof a.props.onPageChange&&a.props.onPageChange({selected:e})})),x(j(a),"pagination",(function(){var e=[],t=a.props,r=t.pageRangeDisplayed,n=t.pageCount,s=t.marginPagesDisplayed,o=t.breakLabel,l=t.breakClassName,c=t.breakLinkClassName,u=a.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(a.getPageElement(p));else{var d,f,g,b=r/2,v=r-b;u>n-r/2?b=r-(v=n-u):u<r/2&&(v=r-(b=u));var h=function(e){return a.getPageElement(e)};for(d=0;d<n;d++)(f=d+1)<=s||f>n-s||d>=u-b&&d<=u+v?e.push(h(d)):o&&e[e.length-1]!==g&&(g=i.a.createElement(m,{key:d,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:a.handleBreakClick.bind(null,d),getEventListener:a.getEventListener}),e.push(g))}return e})),t=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,a.state={selected:t},a}return a=s,(t=[{key:"componentDidMount",value:function(){var e=this.props,a=e.initialPage,t=e.disableInitialCallback,r=e.extraAriaContext;void 0===a||t||this.callCallback(a),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,a=this.props,t=a.pageCount,r=e+a.pageRangeDisplayed;return r>=t?t-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var a=this.props,t=a.hrefBuilder,r=a.pageCount;if(t&&e!==this.state.selected&&e>=0&&e<r)return t(e+1)}},{key:"ariaLabelBuilder",value:function(e){var a=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var t=this.props.ariaLabelBuilder(e+1,a);return this.props.extraAriaContext&&!a&&(t=t+" "+this.props.extraAriaContext),t}}},{key:"getPageElement",value:function(e){var a=this.state.selected,t=this.props,r=t.pageClassName,n=t.pageLinkClassName,s=t.activeClassName,o=t.activeLinkClassName,l=t.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:a===e,pageClassName:r,pageLinkClassName:n,activeClassName:s,activeLinkClassName:o,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,a=e.disabledClassName,t=e.pageCount,r=e.containerClassName,n=e.previousLabel,s=e.previousClassName,o=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,d=e.nextLinkClassName,m=e.nextAriaLabel,f=e.nextRel,b=this.state.selected,v=s+(0===b?" ".concat(a):""),h=p+(b===t-1?" ".concat(a):""),y=0===b?"true":"false",j=b===t-1?"true":"false";return i.a.createElement("ul",{className:r},i.a.createElement("li",{className:v},i.a.createElement("a",g({className:o,href:this.hrefBuilder(b-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),i.a.createElement("li",{className:h},i.a.createElement("a",g({className:d,href:this.hrefBuilder(b+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":j,"aria-label":m,rel:f},this.getEventListener(this.handleNextPage)),u)))}}])&&b(a.prototype,t),r&&b(a,r),s}(n.Component);x(k,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,prevRel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,nextRel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),x(k,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),t.default=k,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==t?t:a;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,t(22))},66:function(e,a,t){"use strict";var r=t(4),n=t(5),i=t(0),s=t.n(i),o=t(1),l=t.n(o),c=t(11),u=t.n(c),p=t(12),d={tag:p.q,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,i=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(p.m)(u()(a,"card-title"),t);return s.a.createElement(i,Object(r.a)({},o,{className:l}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},67:function(e,a,t){"use strict";var r=t(4),n=t(5),i=t(0),s=t.n(i),o=t(1),l=t.n(o),c=t(11),u=t.n(c),p=t(12),d={tag:p.q,className:l.a.string,cssModule:l.a.object},m=function(e){var a=e.className,t=e.cssModule,i=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(p.m)(u()(a,"card-header"),t);return s.a.createElement(i,Object(r.a)({},o,{className:l}))};m.propTypes=d,m.defaultProps={tag:"div"},a.a=m},72:function(e,a,t){"use strict";var r=t(0),n=t.n(r),i=t(1),s=t.n(i);function o(){return(o=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=Object(r.forwardRef)((function(e,a){var t=e.color,r=void 0===t?"currentColor":t,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.a.createElement("svg",o({ref:a,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="ChevronDown",a.a=c}}]);
//# sourceMappingURL=109.30bee87c.chunk.js.map