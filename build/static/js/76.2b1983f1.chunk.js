(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[76],{1075:function(e,t,a){"use strict";a.r(t);var r=a(7),n=a(8),i=(a(53),a(70),a(60)),s=(a(64),a(54),a(0)),o=(a(61),a(580)),l=a(59),c=a.n(l),u=a(63),p=a.n(u),f=a(82),d=a(80),g=a(75),b=a(954),m=a(1150),v=a(81),h=a(68),y=a(66),O=a(3);t.default=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),a=(t[0],t[1],Object(s.useState)(0)),l=Object(n.a)(a,2),u=l[0],j=l[1],k=Object(s.useState)(""),x=Object(n.a)(k,2),C=x[0],N=(x[1],Object(s.useState)([])),P=Object(n.a)(N,2),L=P[0],w=(P[1],Object(s.useState)("")),E=Object(n.a)(w,2),S=(E[0],E[1],Object(s.useState)("")),R=Object(n.a)(S,2),_=(R[0],R[1],[{name:"Id",selector:"id",sortable:!0,minWidth:"150px"},{name:"type",selector:"type",sortable:!0,minWidth:"150px"},{name:"Default Commission",selector:"default_c",sortable:!0,minWidth:"150px",cell:function(e){return Object(O.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(O.jsx)("div",{className:"d-flex flex-column ml-2",children:Object(O.jsxs)("span",{className:"font-weight-bold",children:[e.default_c,"%"]})})})}},{name:"Actions",allowOverflow:!0,cell:function(e){return Object(O.jsxs)("div",{className:"d-flex",children:[Object(O.jsx)(b.a,{children:Object(O.jsx)(m.a,{className:"pr-1",tag:"span",children:Object(O.jsx)(f.a,{size:15,onClick:function(e){}})})}),Object(O.jsx)(i.b,{to:"/master/cmmi/edit/".concat(e.id),children:Object(O.jsx)(d.a,{size:15})})]})}}]);return Object(O.jsx)(s.Fragment,{children:Object(O.jsxs)(v.a,{children:[Object(O.jsxs)(h.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(O.jsx)(y.a,{tag:"h4",children:"Commission Slab"}),Object(O.jsx)("div",{className:"d-flex mt-md-0 mt-1"})]}),Object(O.jsx)(p.a,{noHeader:!0,pagination:!0,columns:_,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(O.jsx)(g.a,{size:10}),paginationDefaultPage:u+1,paginationComponent:function(){var e;return Object(O.jsx)(c.a,(e={previousLabel:"",nextLabel:"",forcePage:u,onPageChange:function(e){return function(e){j(e.selected)}(e)},pageCount:C.length?L.length/7:o.a.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(r.a)(e,"breakClassName","page-item"),Object(r.a)(e,"breakLinkClassName","page-link"),Object(r.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:C.length?L:o.a})]})})}},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/komal.71eab2e7.jpg"},56:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/himanshu.db95087a.jpg"},57:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/pravin.5a89c6c3.jpg"},58:function(e,t,a){"use strict";t.a=a.p+"static/media/reethika.147b588d.jpg"},580:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(55),a(57),a(56),a(58);var r=[{id:1,type:"Category",default_c:10},{id:2,type:"User",default_c:13},{id:3,type:"Transcation",default_c:6}]},59:function(e,t,a){(function(r){var n;e.exports=(n=a(0),function(e){var t={};function a(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,a),n.l=!0,n.exports}return a.m=e,a.c=t,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=4)}([function(e,t,a){e.exports=a(2)()},function(e,t){e.exports=n},function(e,t,a){"use strict";var r=a(3);function n(){}function i(){}i.resetWarningCache=n,e.exports=function(){function e(e,t,a,n,i,s){if(s!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:n};return a.PropTypes=a,a}},function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,a,r){"use strict";r.r(a);var n=r(1),i=r.n(n),s=r(0),o=r.n(s);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var c=function(e){var t=e.pageClassName,a=e.pageLinkClassName,r=e.page,n=e.selected,s=e.activeClassName,o=e.activeLinkClassName,c=e.getEventListener,u=e.pageSelectedHandler,p=e.href,f=e.extraAriaContext,d=e.ariaLabel||"Page "+r+(f?" "+f:""),g=null;return n&&(g="page",d=e.ariaLabel||"Page "+r+" is your current page",t=void 0!==t?t+" "+s:s,void 0!==a?void 0!==o&&(a=a+" "+o):a=o),i.a.createElement("li",{className:t},i.a.createElement("a",l({role:"button",className:a,href:p,tabIndex:"0","aria-label":d,"aria-current":g,onKeyPress:u},c(u)),r))};c.propTypes={pageSelectedHandler:o.a.func.isRequired,selected:o.a.bool.isRequired,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,extraAriaContext:o.a.string,href:o.a.string,ariaLabel:o.a.string,page:o.a.number.isRequired,getEventListener:o.a.func.isRequired};var u=c;function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PageView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PageView.js")}}();var f=function(e){var t=e.breakLabel,a=e.breakClassName,r=e.breakLinkClassName,n=e.breakHandler,s=e.getEventListener,o=a||"break";return i.a.createElement("li",{className:o},i.a.createElement("a",p({className:r,role:"button",tabIndex:"0",onKeyPress:n},s(n)),t))};f.propTypes={breakLabel:o.a.oneOfType([o.a.string,o.a.node]),breakClassName:o.a.string,breakLinkClassName:o.a.string,breakHandler:o.a.func.isRequired,getEventListener:o.a.func.isRequired};var d=f;function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function m(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,r=j(e);if(t){var n=j(this).constructor;a=Reflect.construct(r,arguments,n)}else a=r.apply(this,arguments);return y(this,a)}}function y(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?O(e):t}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}!function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/BreakView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/BreakView.js")}}();var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(s,e);var t,a,r,n=h(s);function s(e){var t,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),k(O(t=n.call(this,e)),"handlePreviousPage",(function(e){var a=t.state.selected;e.preventDefault?e.preventDefault():e.returnValue=!1,a>0&&t.handlePageSelected(a-1,e)})),k(O(t),"handleNextPage",(function(e){var a=t.state.selected,r=t.props.pageCount;e.preventDefault?e.preventDefault():e.returnValue=!1,a<r-1&&t.handlePageSelected(a+1,e)})),k(O(t),"handlePageSelected",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1,t.state.selected!==e&&(t.setState({selected:e}),t.callCallback(e))})),k(O(t),"getEventListener",(function(e){return k({},t.props.eventListener,e)})),k(O(t),"handleBreakClick",(function(e,a){a.preventDefault?a.preventDefault():a.returnValue=!1;var r=t.state.selected;t.handlePageSelected(r<e?t.getForwardJump():t.getBackwardJump(),a)})),k(O(t),"callCallback",(function(e){void 0!==t.props.onPageChange&&"function"==typeof t.props.onPageChange&&t.props.onPageChange({selected:e})})),k(O(t),"pagination",(function(){var e=[],a=t.props,r=a.pageRangeDisplayed,n=a.pageCount,s=a.marginPagesDisplayed,o=a.breakLabel,l=a.breakClassName,c=a.breakLinkClassName,u=t.state.selected;if(n<=r)for(var p=0;p<n;p++)e.push(t.getPageElement(p));else{var f,g,b,m=r/2,v=r-m;u>n-r/2?m=r-(v=n-u):u<r/2&&(v=r-(m=u));var h=function(e){return t.getPageElement(e)};for(f=0;f<n;f++)(g=f+1)<=s||g>n-s||f>=u-m&&f<=u+v?e.push(h(f)):o&&e[e.length-1]!==b&&(b=i.a.createElement(d,{key:f,breakLabel:o,breakClassName:l,breakLinkClassName:c,breakHandler:t.handleBreakClick.bind(null,f),getEventListener:t.getEventListener}),e.push(b))}return e})),a=e.initialPage?e.initialPage:e.forcePage?e.forcePage:0,t.state={selected:a},t}return t=s,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.initialPage,a=e.disableInitialCallback,r=e.extraAriaContext;void 0===t||a||this.callCallback(t),r&&console.warn("DEPRECATED (react-paginate): The extraAriaContext prop is deprecated. You should now use the ariaLabelBuilder instead.")}},{key:"componentDidUpdate",value:function(e){void 0!==this.props.forcePage&&this.props.forcePage!==e.forcePage&&this.setState({selected:this.props.forcePage})}},{key:"getForwardJump",value:function(){var e=this.state.selected,t=this.props,a=t.pageCount,r=e+t.pageRangeDisplayed;return r>=a?a-1:r}},{key:"getBackwardJump",value:function(){var e=this.state.selected-this.props.pageRangeDisplayed;return e<0?0:e}},{key:"hrefBuilder",value:function(e){var t=this.props,a=t.hrefBuilder,r=t.pageCount;if(a&&e!==this.state.selected&&e>=0&&e<r)return a(e+1)}},{key:"ariaLabelBuilder",value:function(e){var t=e===this.state.selected;if(this.props.ariaLabelBuilder&&e>=0&&e<this.props.pageCount){var a=this.props.ariaLabelBuilder(e+1,t);return this.props.extraAriaContext&&!t&&(a=a+" "+this.props.extraAriaContext),a}}},{key:"getPageElement",value:function(e){var t=this.state.selected,a=this.props,r=a.pageClassName,n=a.pageLinkClassName,s=a.activeClassName,o=a.activeLinkClassName,l=a.extraAriaContext;return i.a.createElement(u,{key:e,pageSelectedHandler:this.handlePageSelected.bind(null,e),selected:t===e,pageClassName:r,pageLinkClassName:n,activeClassName:s,activeLinkClassName:o,extraAriaContext:l,href:this.hrefBuilder(e),ariaLabel:this.ariaLabelBuilder(e),page:e+1,getEventListener:this.getEventListener})}},{key:"render",value:function(){var e=this.props,t=e.disabledClassName,a=e.pageCount,r=e.containerClassName,n=e.previousLabel,s=e.previousClassName,o=e.previousLinkClassName,l=e.previousAriaLabel,c=e.prevRel,u=e.nextLabel,p=e.nextClassName,f=e.nextLinkClassName,d=e.nextAriaLabel,g=e.nextRel,m=this.state.selected,v=s+(0===m?" ".concat(t):""),h=p+(m===a-1?" ".concat(t):""),y=0===m?"true":"false",O=m===a-1?"true":"false";return i.a.createElement("ul",{className:r},i.a.createElement("li",{className:v},i.a.createElement("a",b({className:o,href:this.hrefBuilder(m-1),tabIndex:"0",role:"button",onKeyPress:this.handlePreviousPage,"aria-disabled":y,"aria-label":l,rel:c},this.getEventListener(this.handlePreviousPage)),n)),this.pagination(),i.a.createElement("li",{className:h},i.a.createElement("a",b({className:f,href:this.hrefBuilder(m+1),tabIndex:"0",role:"button",onKeyPress:this.handleNextPage,"aria-disabled":O,"aria-label":d,rel:g},this.getEventListener(this.handleNextPage)),u)))}}])&&m(t.prototype,a),r&&m(t,r),s}(n.Component);k(x,"propTypes",{pageCount:o.a.number.isRequired,pageRangeDisplayed:o.a.number.isRequired,marginPagesDisplayed:o.a.number.isRequired,previousLabel:o.a.node,previousAriaLabel:o.a.string,prevRel:o.a.string,nextLabel:o.a.node,nextAriaLabel:o.a.string,nextRel:o.a.string,breakLabel:o.a.oneOfType([o.a.string,o.a.node]),hrefBuilder:o.a.func,onPageChange:o.a.func,initialPage:o.a.number,forcePage:o.a.number,disableInitialCallback:o.a.bool,containerClassName:o.a.string,pageClassName:o.a.string,pageLinkClassName:o.a.string,activeClassName:o.a.string,activeLinkClassName:o.a.string,previousClassName:o.a.string,nextClassName:o.a.string,previousLinkClassName:o.a.string,nextLinkClassName:o.a.string,disabledClassName:o.a.string,breakClassName:o.a.string,breakLinkClassName:o.a.string,extraAriaContext:o.a.string,ariaLabelBuilder:o.a.func,eventListener:o.a.string}),k(x,"defaultProps",{pageCount:10,pageRangeDisplayed:2,marginPagesDisplayed:3,activeClassName:"selected",previousLabel:"Previous",previousClassName:"previous",previousAriaLabel:"Previous page",prevRel:"prev",nextLabel:"Next",nextClassName:"next",nextAriaLabel:"Next page",nextRel:"next",breakLabel:"...",disabledClassName:"disabled",disableInitialCallback:!1,eventListener:"onClick"}),function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/PaginationBoxView.js")}}(),a.default=x,function(){var e="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0;if(e){var r=void 0!==a?a:t;if(r)if("function"!=typeof r){for(var n in r)if(Object.prototype.hasOwnProperty.call(r,n)){var i=void 0;try{i=r[n]}catch(e){continue}e.register(i,n,"/home/adele/workspace/react-paginate/react_components/index.js")}}else e.register(r,"module.exports","/home/adele/workspace/react-paginate/react_components/index.js")}}()}]))}).call(this,a(22))},66:function(e,t,a){"use strict";var r=a(4),n=a(5),i=a(0),s=a.n(i),o=a(1),l=a.n(o),c=a(11),u=a.n(c),p=a(12),f={tag:p.q,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,a=e.cssModule,i=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(p.m)(u()(t,"card-title"),a);return s.a.createElement(i,Object(r.a)({},o,{className:l}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},68:function(e,t,a){"use strict";var r=a(4),n=a(5),i=a(0),s=a.n(i),o=a(1),l=a.n(o),c=a(11),u=a.n(c),p=a(12),f={tag:p.q,className:l.a.string,cssModule:l.a.object},d=function(e){var t=e.className,a=e.cssModule,i=e.tag,o=Object(n.a)(e,["className","cssModule","tag"]),l=Object(p.m)(u()(t,"card-header"),a);return s.a.createElement(i,Object(r.a)({},o,{className:l}))};d.propTypes=f,d.defaultProps={tag:"div"},t.a=d},75:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),s=a.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polyline",{points:"6 9 12 15 18 9"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="ChevronDown",t.a=c},80:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),s=a.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),n.a.createElement("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="Edit",t.a=c},82:function(e,t,a){"use strict";var r=a(0),n=a.n(r),i=a(1),s=a.n(i);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=Object(r.forwardRef)((function(e,t){var a=e.color,r=void 0===a?"currentColor":a,i=e.size,s=void 0===i?24:i,c=l(e,["color","size"]);return n.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:s,height:s,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),n.a.createElement("polyline",{points:"3 6 5 6 21 6"}),n.a.createElement("path",{d:"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"}))}));c.propTypes={color:s.a.string,size:s.a.oneOfType([s.a.string,s.a.number])},c.displayName="Trash",t.a=c}}]);
//# sourceMappingURL=76.2b1983f1.chunk.js.map