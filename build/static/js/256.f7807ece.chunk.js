(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[256],{1173:function(e,t,a){"use strict";a.r(t);var n=a(7),o=a(8),i=a(2),l=a(21),s=(a(53),a(427),a(69),a(64),a(54),a(0)),r=(a(61),[{Task:"Add User Name",Score:10,id:1},{Task:"Add User Email",Score:10,id:2},{Task:"User Verification",Score:10,id:3},{Task:"User Profile pic",Score:10,id:4},{Task:"Add User Name",Score:10,id:5},{Task:"Add User Name",Score:10,id:6},{Task:"Add User Name",Score:10,id:7},{Task:"Add User Name",Score:10,id:8},{Task:"Add User Name",Score:10,id:9},{Task:"Add User Name",Score:10,id:10}]),c=a(59),u=a.n(c),p=a(63),d=a.n(p),h=a(969),b=a(1004),m=a(154),f=a(789),y=a(646),v=a(1005),j=a(72),g=a(80),k=a(67),O=a(66),x=a(698),S=a(1142),C=a(949),N=a(951),w=a(3),M=Object(s.forwardRef)((function(e,t){var a=e.onClick,n=Object(l.a)(e,["onClick"]);return Object(w.jsxs)("div",{className:"custom-control custom-checkbox",children:[Object(w.jsx)("input",Object(i.a)({type:"checkbox",className:"custom-control-input",ref:t},n)),Object(w.jsx)("label",{className:"custom-control-label",onClick:a})]})}));t.default=function(){var e=Object(s.useState)(0),t=Object(o.a)(e,2),a=t[0],i=t[1],l=Object(s.useState)(0),c=Object(o.a)(l,2),p=(c[0],c[1],Object(s.useState)([])),P=Object(o.a)(p,2),T=P[0],V=(P[1],Object(s.useState)("")),E=Object(o.a)(V,2),D=E[0],U=(E[1],Object(s.useState)("")),L=Object(o.a)(U,2),R=(L[0],L[1],[{name:"Id",selector:"id",sortable:!0,minWidth:"50px"},{name:"Task",minWidth:"150px",selector:"Task",sortable:!0,cell:function(e){return Object(w.jsx)("div",{className:"d-flex justify-content-left align-items-center",children:Object(w.jsx)("div",{className:"d-flex flex-column",children:Object(w.jsx)("span",{className:"font-weight-bold",children:e.Task})})})}},{name:"Score",selector:"Score",sortable:!0,minWidth:"130px",cell:function(e){return Object(w.jsx)("div",{className:"d-flex align-items-center",children:Object(w.jsx)("div",{className:"user-info text-truncate",children:Object(w.jsx)("span",{className:"font-weight-bold",children:e.Score})})},e.id)}}]);function _(e){var t=document.createElement("a"),a=function(e){var t,a=Object.keys(r[0]);return t="",t+=a.join(","),t+="\n",e.forEach((function(e){var n=0;a.forEach((function(a){n>0&&(t+=","),t+=e[a],n++})),t+="\n"})),t}(e);if(null!==a){a.match(/^data:text\/csv/i)||(a="data:text/csv;charset=utf-8,".concat(a)),t.setAttribute("href",encodeURI(a)),t.setAttribute("download","export.csv"),t.click()}}return Object(w.jsx)(s.Fragment,{children:Object(w.jsxs)(g.a,{children:[Object(w.jsxs)(k.a,{className:"flex-md-row flex-column align-md-items-center align-items-start border-bottom",children:[Object(w.jsx)(O.a,{tag:"h4",children:"Profile Completion Checklist"}),Object(w.jsx)("div",{className:"d-flex mt-md-0 mt-1",children:Object(w.jsxs)(x.a,{children:[Object(w.jsxs)(S.a,{color:"secondary",caret:!0,outline:!0,children:[Object(w.jsx)(h.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"Export"})]}),Object(w.jsxs)(C.a,{right:!0,children:[Object(w.jsxs)(N.a,{className:"w-100",children:[Object(w.jsx)(b.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"Print"})]}),Object(w.jsxs)(N.a,{className:"w-100",onClick:function(){return _(r)},children:[Object(w.jsx)(m.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"CSV"})]}),Object(w.jsxs)(N.a,{className:"w-100",children:[Object(w.jsx)(f.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"Excel"})]}),Object(w.jsxs)(N.a,{className:"w-100",children:[Object(w.jsx)(y.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"PDF"})]}),Object(w.jsxs)(N.a,{className:"w-100",children:[Object(w.jsx)(v.a,{size:15}),Object(w.jsx)("span",{className:"align-middle ml-50",children:"Copy"})]})]})]})})]}),Object(w.jsx)(d.a,{noHeader:!0,pagination:!0,selectableRows:!0,columns:R,paginationPerPage:7,className:"react-dataTable",sortIcon:Object(w.jsx)(j.a,{size:10}),paginationDefaultPage:a+1,paginationComponent:function(){var e;return Object(w.jsx)(u.a,(e={previousLabel:"",nextLabel:"",forcePage:a,onPageChange:function(e){return function(e){i(e.selected)}(e)},pageCount:D.length?T.length/7:r.length/7||1,breakLabel:"...",pageRangeDisplayed:2,marginPagesDisplayed:2,activeClassName:"active",pageClassName:"page-item",breakClassName:"page-item",breakLinkClassName:"page-link",nextLinkClassName:"page-link",nextClassName:"page-item next",previousClassName:"page-item prev",previousLinkClassName:"page-link",pageLinkClassName:"page-link"},Object(n.a)(e,"breakClassName","page-item"),Object(n.a)(e,"breakLinkClassName","page-link"),Object(n.a)(e,"containerClassName","pagination react-paginate separated-pagination pagination-sm justify-content-end pr-1 mt-1"),e))},data:D.length?T:r,selectableRowsComponent:M})]})})}},427:function(e,t,a){"use strict";var n=a(0),o=a.n(n);function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,a){return t&&s(e.prototype,t),a&&s(e,a),e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){c(e,t,a[t])}))}return e}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?m(e):t}var y={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},v={empty:p({},y,{backgroundColor:"#ccc"}),full:p({},y,{backgroundColor:"black"}),placeholder:p({},y,{backgroundColor:"red"})},j=function(e){return o.a.isValidElement(e)?e:"object"===i(e)&&null!==e?o.a.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?o.a.createElement("span",{className:e}):void 0},g=function(e){function t(){return l(this,t),f(this,h(t).apply(this,arguments))}return d(t,e),r(t,[{key:"render",value:function(){var e,t=this.props,a=t.index,n=t.inactiveIcon,i=t.activeIcon,l=t.percent,s=t.direction,r=t.readonly,u=t.onClick,p=t.onMouseMove,d=j(n),h=l<100?{}:{visibility:"hidden"},b=j(i),m=(c(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===s?"right":"left",0),c(e,"width","".concat(l,"%")),e),f={cursor:r?"inherit":"pointer",display:"inline-block",position:"relative"};function y(e){p&&p(a,e)}function v(e){u&&(e.preventDefault(),u(a,e))}return o.a.createElement("span",{style:f,onClick:v,onMouseMove:y,onTouchMove:y,onTouchEnd:v},o.a.createElement("span",{style:h},d),o.a.createElement("span",{style:m},b))}}]),t}(o.a.PureComponent),k=function(e){function t(e){var a;return l(this,t),(a=f(this,h(t).call(this,e))).state={displayValue:a.props.value,interacting:!1},a.onMouseLeave=a.onMouseLeave.bind(m(m(a))),a.symbolMouseMove=a.symbolMouseMove.bind(m(m(a))),a.symbolClick=a.symbolClick.bind(m(m(a))),a}return d(t,e),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(a){return{displayValue:t?e.value:a.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.props.onClick(a,t)}},{key:"symbolMouseMove",value:function(e,t){var a=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:a})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var a=this.calculateHoverPercentage(t),n=Math.ceil(a%1*this.props.fractions)/this.props.fractions,o=Math.pow(10,3),i=e+(Math.floor(a)+Math.floor(n*o)/o);return i>0?i>this.props.totalSymbols?this.props.totalSymbols:i:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,a=e.target.getBoundingClientRect(),n="rtl"===this.props.direction?a.right-t:t-a.left;return n<0?0:n/a.width}},{key:"render",value:function(){var e,t=this.props,a=t.readonly,n=t.quiet,i=t.totalSymbols,l=t.value,s=t.placeholderValue,r=t.direction,c=t.emptySymbol,d=t.fullSymbol,h=t.placeholderSymbol,b=t.className,m=t.id,f=t.style,y=t.tabIndex,v=this.state,j=v.displayValue,k=v.interacting,O=[],x=[].concat(c),S=[].concat(d),C=[].concat(h),N=0!==s&&0===l&&!k;e=N?s:n?l:j;for(var w=Math.floor(e),M=0;M<i;M++){var P=void 0;P=M-w<0?100:M-w===0?100*(e-M):0,O.push(o.a.createElement(g,u({key:M,index:M,readonly:a,inactiveIcon:x[M%x.length],activeIcon:N?C[M%S.length]:S[M%S.length],percent:P,direction:r},!a&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return o.a.createElement("span",u({id:m,style:p({},f,{display:"inline-block",direction:r}),className:b,tabIndex:y,"aria-label":this.props["aria-label"]},!a&&{onMouseLeave:this.onMouseLeave}),O)}}]),t}(o.a.PureComponent);function O(){}O._name="react_rating_noop";var x=function(e){function t(e){var a;return l(this,t),(a=f(this,h(t).call(this,e))).state={value:e.initialRating},a.handleClick=a.handleClick.bind(m(m(a))),a.handleHover=a.handleHover.bind(m(m(a))),a}return d(t,e),r(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var a=this,n=this.translateDisplayValueToValue(e);this.props.onClick(n),this.state.value!==n&&this.setState({value:n},(function(){return a.props.onChange(a.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,a=e.emptySymbol,n=e.fullSymbol,i=e.placeholderSymbol,l=e.readonly,s=e.quiet,r=e.fractions,c=e.direction,u=e.start,p=e.stop,d=e.id,h=e.className,b=e.style,m=e.tabIndex;return o.a.createElement(k,{id:d,style:b,className:h,tabIndex:m,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,a){return Math.floor((t-e)/a)}(u,p,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:l,quiet:s,fractions:r,direction:c,emptySymbol:a,fullSymbol:n,placeholderSymbol:i,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(o.a.PureComponent);x.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:O,onClick:O,onChange:O,emptySymbol:v.empty,fullSymbol:v.full,placeholderSymbol:v.placeholder},t.a=x},54:function(e,t,a){}}]);
//# sourceMappingURL=256.f7807ece.chunk.js.map