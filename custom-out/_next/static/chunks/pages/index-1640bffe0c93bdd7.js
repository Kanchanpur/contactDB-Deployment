(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(7287)}])},7287:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return Z}});var r=t(5893),a=t(9008),s=t(5773),c=t(5305),i=((0,t(5152).default)((function(){return Promise.all([t.e(279),t.e(229)]).then(t.bind(t,7229))}),{loadableGenerated:{webpack:function(){return[7229]},modules:["..\\src\\components\\dashboard\\SalesChart.js -> react-apexcharts"]},ssr:!1}),t(8520)),o=t.n(i),l=t(7294),d=t(9886),u=t(4610),h=t(9816),x=t(8653),p=t(6333),m=t(1298),f=t(4082);function g(e,n,t,r,a,s,c){try{var i=e[s](c),o=i.value}catch(l){return void t(l)}i.done?n(o):Promise.resolve(o).then(r,a)}function b(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function c(e){g(s,r,a,c,i,"next",e)}function i(e){g(s,r,a,c,i,"throw",e)}c(void 0)}))}}var j="",v=function(){var e=(0,l.useState)(null),n=e[0],t=e[1],a=b(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:"admin",password:"P@ssw0rd"})});case 3:if(!(n=e.sent).ok){e.next=12;break}return e.next=7,n.json();case 7:j=e.sent,console.log(JSON.stringify(j.ticket)),console.log("Authentication successful",j),e.next=13;break;case 12:console.error("Authentication failed");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error occurred while authenticating:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return(0,l.useEffect)((function(){b(o().mark((function e(){var n,r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:return"webreport",e.next=6,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1127021?Format=".concat("webreport"),{method:"GET",headers:{OTCSTicket:j.ticket}});case 6:if(!(n=e.sent).ok){e.next=16;break}return console.log(n),e.next=11,n.json();case 11:r=e.sent,console.log(r),t(r),e.next=17;break;case 16:console.error("Product api failed");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Product api failed:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()}),[]),(0,r.jsx)("div",{children:n?(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(d.Z,{children:(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(h.Z,{tag:"h5",children:"Products"}),(0,r.jsxs)("div",{className:"displayflex",children:[(0,r.jsx)(x.Z,{className:"mb-2 text-muted width50",tag:"h6",children:"Products Name"}),(0,r.jsx)(x.Z,{className:"mb-2 text-muted width50 textright",tag:"h6",children:"Products Users"})]}),(0,r.jsx)(p.Z,{flush:!0,className:"mt-4",children:n.map((function(e){return(0,r.jsxs)(m.Z,{action:!0,href:"/",tag:"a",className:"d-flex align-items-center p-3 border-0",children:[(0,r.jsx)(f.Z,{className:"rounded-circle me-3",size:"sm",color:e.color,children:(0,r.jsx)("i",{className:"bi bi-filter-square"})}),e.productName,(0,r.jsx)("small",{className:"ms-auto text-muted text-small",children:e.UserCount})]},e.productName)}))})]})})}):(0,r.jsx)("p",{children:"Product Unavailable"})})},w=(t(2850),t(5697)),P=t.n(w),k=function(e){var n=e.bg,t=e.icon,a=e.earning,s=e.subtitle;return(0,r.jsx)(d.Z,{children:(0,r.jsx)(u.Z,{children:(0,r.jsxs)("div",{className:"d-flex",children:[(0,r.jsx)("div",{className:"circle-box lg-box d-inline-block ".concat(n),children:(0,r.jsx)("i",{className:t})}),(0,r.jsxs)("div",{className:"ms-3",children:[(0,r.jsx)("h3",{className:"mb-0 font-weight-bold",children:a}),(0,r.jsx)("small",{className:"text-muted",children:s})]})]})})})};k.propTypes={bg:P().string,icon:P().string,earning:P().string,subtitle:P().string};var y=k,N=t(2853);function Z(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)(a.default,{children:[(0,r.jsx)("title",{children:"Contact DB"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsxs)("div",{children:[(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{sm:"6",lg:"4",children:(0,r.jsx)(y,{bg:"bg-light-success text-success",title:"Profit",earning:"Organisation",icon:"bi bi-wallet"})}),(0,r.jsx)(c.Z,{sm:"6",lg:"4",children:(0,r.jsx)(y,{bg:"bg-light-danger text-danger",title:"Refunds",earning:"Contact",icon:"bi bi-person"})}),(0,r.jsx)(c.Z,{sm:"6",lg:"4",children:(0,r.jsx)(y,{bg:"bg-light-warning text-warning",title:"New Project",earning:"Upcoming Event",icon:"bi bi-calendar3"})})]}),(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(c.Z,{sm:"12",lg:"6",xl:"7",xxl:"8"}),(0,r.jsx)(c.Z,{sm:"12",lg:"6",xl:"6",xxl:"4",children:(0,r.jsx)(v,{})})]}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(c.Z,{lg:"12",sm:"12",children:(0,r.jsx)(N.Z,{})})})]})]})}},2853:function(e,n,t){"use strict";var r=t(8520),a=t.n(r),s=t(5893),c=t(7294),i=t(9521),o=t(9886),l=t(4610),d=t(9816),u=t(8653),h=t(4991);function x(e,n,t,r,a,s,c){try{var i=e[s](c),o=i.value}catch(l){return void t(l)}i.done?n(o):Promise.resolve(o).then(r,a)}function p(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){p(e,n,t[n])}))}return e}n.Z=function(){var e,n=(0,c.useState)([]),t=n[0],r=n[1],p=(0,c.useState)(!0),f=p[0],g=p[1],b=(e=a().mark((function e(){var n,t,s,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:"admin",password:"P@ssw0rd"})});case 3:if(!(n=e.sent).ok){e.next=23;break}return e.next=7,n.json();case 7:return t=e.sent,e.next=11,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1126802?Format=".concat("webreport"),{method:"GET",headers:{OTCSTicket:t.ticket}});case 11:if(!(s=e.sent).ok){e.next=20;break}return e.next=15,s.json();case 15:c=e.sent,console.log(c),r(c),e.next=21;break;case 20:console.error("View data API failed");case 21:e.next=24;break;case 23:console.error("Authentication API failed");case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(0),console.error("API request failed:",e.t0);case 29:return e.prev=29,g(!1),e.finish(29);case 32:case"end":return e.stop()}}),e,null,[[0,26,29,32]])})),function(){var n=this,t=arguments;return new Promise((function(r,a){var s=e.apply(n,t);function c(e){x(s,r,a,c,i,"next",e)}function i(e){x(s,r,a,c,i,"throw",e)}c(void 0)}))});(0,c.useEffect)((function(){b()}),[]);var j=(0,c.useMemo)((function(){return[{Header:"Contact Name",accessor:"ContactName",sortType:"alphanumeric"},{Header:"Contact Designation",accessor:"ContactDesignation",sortType:"alphanumeric"},{Header:"Mobile",accessor:"Mobile",sortType:"alphanumeric"},{Header:"Email",accessor:"Email",sortType:"alphanumeric"},{Header:"Department",accessor:"Department",sortType:"alphanumeric"},{Header:"Organization Name",accessor:"OrgName",sortType:"alphanumeric"},{Header:"Influential",accessor:"Influential",sortType:"basic"},{Header:"Decision Maker",accessor:"DecisionMaker",sortType:"basic"},{Header:"Introduced By : Relationship Status",accessor:"IntroducedByRelationshipData",sortType:"alphanumeric"}]}),[]),v=(0,i.useTable)({columns:j,data:t,initialState:{pageIndex:0,pageSize:5}},i.useGlobalFilter,i.usePagination),w=v.getTableProps,P=v.getTableBodyProps,k=v.headerGroups,y=v.page,N=v.prepareRow,Z=v.state,T=Z.pageIndex,C=(Z.pageSize,Z.globalFilter,v.setGlobalFilter,v.canPreviousPage),O=v.canNextPage,S=v.pageCount,E=v.gotoPage,H=v.nextPage,_=v.previousPage;return f?(0,s.jsx)("div",{children:"Loading..."}):(0,s.jsx)(o.Z,{children:(0,s.jsxs)(l.Z,{children:[(0,s.jsx)(d.Z,{tag:"h5",children:"Contact Listing"}),(0,s.jsx)(u.Z,{className:"mb-2 text-muted",tag:"h6",children:"Overview of the Contact"}),(0,s.jsx)("div",{className:"table-responsive",children:(0,s.jsxs)(h.Z,m({},w(),{className:"mt-3 align-middle",borderless:!0,children:[(0,s.jsx)("thead",{children:k.map((function(e){return(0,s.jsx)("tr",m({},e.getHeaderGroupProps(),{style:{textAlign:"left"},children:e.headers.map((function(e){return(0,s.jsx)("th",m({},e.getHeaderProps(),{children:e.render("Header")}))}))}))}))}),(0,s.jsx)("tbody",m({},P(),{children:y.map((function(e){return N(e),(0,s.jsx)("tr",m({},e.getRowProps(),{style:{textAlign:"left"},children:e.cells.map((function(e){return(0,s.jsx)("td",m({},e.getCellProps(),{children:e.render("Cell")}))}))}))}))}))]}))}),(0,s.jsxs)("div",{className:"pagination",children:[(0,s.jsx)("button",{onClick:function(){return E(0)},disabled:!C,children:"<<"}),(0,s.jsx)("button",{onClick:function(){return _()},disabled:!C,children:"<"}),(0,s.jsxs)("span",{children:["Page"," ",(0,s.jsxs)("strong",{children:[T+1," of ",S]})," "]}),(0,s.jsx)("button",{onClick:function(){return H()},disabled:!O,children:">"}),(0,s.jsx)("button",{onClick:function(){return E(S-1)},disabled:!O,children:">>"})]})]})})}}},function(e){e.O(0,[774,166,251,94,628,268,286,888,179],(function(){return n=8581,e(e.s=n);var n}));var n=e.O();_N_E=n}]);