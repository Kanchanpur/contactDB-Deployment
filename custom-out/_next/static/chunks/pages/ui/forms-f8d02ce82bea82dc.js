(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[855],{2562:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/ui/forms",function(){return n(6482)}])},6482:function(e,t,n){"use strict";n.r(t);var r=n(8520),a=n.n(r),o=n(5893),s=n(7294),i=n(1163),c=n(6455),l=n.n(c),d=n(5773),u=n(5305),h=n(1442),m=n(9886),p=n(9816),x=n(4610),f=n(9163),g=n(3126),v=n(7261),j=n(4082);function b(e,t,n,r,a,o,s){try{var i=e[o](s),c=i.value}catch(l){return void n(l)}i.done?t(c):Promise.resolve(c).then(r,a)}function y(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var o=e.apply(t,n);function s(e){b(o,r,a,s,i,"next",e)}function i(e){b(o,r,a,s,i,"throw",e)}s(void 0)}))}}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){O(e,t,n[t])}))}return e}function N(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}var Z,k="",S=function(){var e=new Date,t=String(e.getMonth()+1).padStart(2,"0"),n=String(e.getDate()).padStart(2,"0"),r=e.getFullYear();return"".concat(t,"/").concat(n,"/").concat(r)};t.default=function(){var e=(0,s.useState)({ContactName:"",ProductName:[""],ContactDesignation:"",Department:"",Address:"",City:"",State:"",PostalCode:"",Country:"",Phone:"",Mobile:"",Email:"",Fax:"",LinkedIn:"",Influential:"",ReportingManager:"",PreviousOrganisationName:"",JoinDate:"",EndDate:"",CreatedBy:"",CreatedOn:S(),ModifiedBy:"",ModifiedOn:"",OrgName:"",OrgDesc:"",Size:"",OrgAddress:"",OrgCity:"",OrgState:"",OrgCountry:"",OrgPhone:"",OrgPostalCode:"",OrgMobile:"",OrgEmail:"",OrgFax:"",OrgWebsite:"",OrgLinkedIn:"",BusinessPartner:"",Sector:"",Industry:"",OrgCrtBy:"",OrgCrtOn:"",OrgModBy:"",OrgModOn:"",AccountManager:[],Vertical:[],Lead:"",IntroducedBy:[],RelationshipStatus:[],DiscoveredThrough:"",OtherValue:"",StatusFlag:"1",Comment:"",FactCrtBy:"",FactCrtOn:"",FactModBy:"",FactModOn:"",DecisionMaker:""}),t=e[0],n=e[1],r=(0,i.useRouter)(),c=(0,s.useState)(!0),b=(c[0],c[1]),w=(0,s.useState)(!1),P=(w[0],w[1]),E=(0,s.useState)([]),T=E[0],D=E[1],M=(0,s.useState)([]),I=M[0],B=M[1],A=(0,s.useState)([]),F=A[0],R=A[1],L=(0,s.useState)(!1),z=L[0],G=L[1],V=(0,s.useState)(!1),_=(V[0],V[1]),q=(0,s.useState)(!1),J=(q[0],q[1],function(e){n(C({},t,{BusinessPartner:e.target.value}))}),W=function(e){n(C({},t,{Sector:e.target.value}))},U=y(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/auth",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams({username:"admin",password:"P@ssw0rd"})});case 3:if(!(t=e.sent).ok){e.next=12;break}return e.next=7,t.json();case 7:k=e.sent,console.log(JSON.stringify(k.ticket)),console.log("Authentication successful",k),e.next=13;break;case 12:console.error("Authentication failed");case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error("Error occurred while authenticating:",e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));(0,s.useEffect)((function(){y(a().mark((function e(){var t,n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U();case 3:return"webreport",e.next=6,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/965676?Format=".concat("webreport"),{method:"GET",headers:{OTCSTicket:k.ticket}});case 6:if(!(t=e.sent).ok){e.next=16;break}return console.log(t),e.next=11,t.json();case 11:n=e.sent,console.log(n),D(n),e.next=17;break;case 16:console.error("Product api failed");case 17:e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),console.error("Product api failed:",e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})))()}),[]);var Y=function(e){var r=e.target,a=r.name,o=r.value;n(C({},t,O({},a,o))),"DiscoveredThrough"===a?n(C({},t,"Other"===o?(O(Z={},a,o),O(Z,"OtherValue",""),Z):O({},a,o))):"OtherValue"===a&&n(C({},t,{DiscoveredThrough:"Other",OtherValue:o}))},H=(0,s.useState)(!1),K=H[0],X=(H[1],(0,s.useState)(!1)),Q=X[0],$=X[1],ee=function(e){var r=e.target,o=r.name,s=r.value;n(C({},t,O({},o,s)));var i=y(a().mark((function e(){var t,n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return e.prev=2,e.next=5,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1229297?Format=webreport&OrgName=".concat(encodeURIComponent(s)),{method:"GET",headers:{OTCSTicket:k.ticket}});case 5:if(!(t=e.sent).ok){e.next=18;break}return e.next=9,t.json();case 9:n=e.sent,console.log(n),r=n,console.log(r),o=n.exists,R(r),o?console.log("User with name ".concat(s," already exists.")):console.log("User with name ".concat(s," does not exist.")),e.next=19;break;case 18:console.error("Error fetching data:",t.statusText);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.error("Error fetching data:",e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),c=setTimeout((function(){i()}),200);return function(){return clearTimeout(c)}},te=function(e){var r=e.OrgName,a=e.OrgDesc,o=e.Size,s=e.OrgAddress,i=e.OrgCity,c=e.OrgState,l=e.OrgPostalCode,d=e.OrgCountry,u=e.OrgPhone,h=e.OrgEmail,m=e.OrgFax,p=e.OrgLinkedIn,x=e.OrgWebsite,f=e.BusinessPartner,g=e.Sector,v=e.Industry;window.confirm("Do you mean ".concat(r,"?"))&&(n(C({},t,{OrgName:e.OrgName,OrgDesc:a,Size:o,OrgAddress:s,OrgCity:i,OrgState:c,OrgPostalCode:l,OrgCountry:d,OrgPhone:u,OrgEmail:h,OrgFax:m,OrgLinkedIn:p,OrgWebsite:x,BusinessPartner:f,Sector:g,Industry:v})),$(!0),_(!0),b(!1)),R([])},ne=(0,s.useState)(!1),re=ne[0],ae=ne[1],oe=y(a().mark((function e(r){var o,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.target.value,n(C({},t,{Mobile:o})),""!==o){e.next=5;break}return ae(!1),e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1262274?format=webreport&ContactMobile=".concat(o),{method:"GET",headers:{"Content-Type":"application/json",OTCSTicket:k.ticket}});case 8:if(!(s=e.sent).ok){e.next=17;break}return e.next=12,s.json();case 12:i=e.sent,console.log(i),"NotExists."===i.Exist?ae(!1):ae(!0),e.next=18;break;case 17:console.error("Error checking mobile number existence");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.error("Network error:",e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])}))),se=(0,s.useState)(!1),ie=se[0],ce=se[1],le=y(a().mark((function e(r){var o,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.target.value,n(C({},t,{Email:o})),""!==o){e.next=5;break}return ce(!1),e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1261620?format=webreport&ContactEmail=".concat(o),{method:"GET",headers:{"Content-Type":"application/json",OTCSTicket:k.ticket}});case 8:if(!(s=e.sent).ok){e.next=17;break}return e.next=12,s.json();case 12:i=e.sent,console.log(i),"NotExists."===i.Exist?ce(!1):ce(!0),e.next=18;break;case 17:console.error("Error checking Email existence");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.error("Network error:",e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])}))),de=(0,s.useState)(!1),ue=de[0],he=de[1],me=y(a().mark((function e(r){var o,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.target.value,n(C({},t,{OrgPhone:o})),""!==o){e.next=5;break}return he(!1),e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1261844?format=webreport&OrgPhone=".concat(o),{method:"GET",headers:{"Content-Type":"application/json",OTCSTicket:k.ticket}});case 8:if(!(s=e.sent).ok){e.next=17;break}return e.next=12,s.json();case 12:i=e.sent,console.log(i),"NotExists."===i.OrgPhoneStatus?he(!1):he(!0),e.next=18;break;case 17:console.error("Error checking Organisation phone existence");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.error("Network error:",e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])}))),pe=(0,s.useState)(!1),xe=pe[0],fe=pe[1],ge=y(a().mark((function e(r){var o,s,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.target.value,n(C({},t,{OrgEmail:o})),""!==o){e.next=5;break}return fe(!1),e.abrupt("return");case 5:return e.prev=5,e.next=8,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1269324?format=webreport&OrgEmail=".concat(o),{method:"GET",headers:{"Content-Type":"application/json",OTCSTicket:k.ticket}});case 8:if(!(s=e.sent).ok){e.next=17;break}return e.next=12,s.json();case 12:i=e.sent,console.log(i),"NotExists."===i.OrgEmailStatus?fe(!1):fe(!0),e.next=18;break;case 17:console.error("Error checking Organisation Email existence");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(5),console.error("Network error:",e.t0);case 23:case"end":return e.stop()}}),e,null,[[5,20]])}))),ve=y(a().mark((function e(){var n,r,o,s;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t,r=JSON.stringify(n),console.log(r),"webreport",e.next=7,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1252362?Format=".concat("webreport","&requestJSON=").concat(r),{method:"GET",headers:{OTCSTicket:k.ticket}});case 7:if(!(o=e.sent).ok){e.next=15;break}return e.next=11,o.json();case 11:s=e.sent,console.log("Data inserted successfully",s),e.next=16;break;case 15:console.error("Data insertion failed");case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),console.error("Error occurred while insertation:",e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])}))),je=y(a().mark((function e(n){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),ve(),""!==t.Email.trim()||""!==t.Mobile.trim()){e.next=5;break}return window.alert("Please fill in either email or mobile number field."),e.abrupt("return");case 5:l().fire({icon:"success",title:"Success!",text:"Data submitted successfully!"}),setTimeout((function(){r.push("/")}),2e3);case 7:case"end":return e.stop()}}),e)}))),be=(0,s.useState)([{id:1,accountManager:"",vertical:""}]),ye=be[0],Oe=be[1];(0,s.useEffect)((function(){n(C({},t,{AccountManager:ye.map((function(e){return e.accountManager})),Vertical:ye.map((function(e){return e.vertical?e.vertical:""}))}))}),[ye]);var Ce=(0,s.useState)([{id:1,introducedBy:"",relationshipStatus:""}]),Ne=Ce[0],Ze=Ce[1];(0,s.useEffect)((function(){n(C({},t,{IntroducedBy:Ne.map((function(e){return e.introducedBy})),RelationshipStatus:Ne.map((function(e){return e.relationshipStatus?e.relationshipStatus:""}))}))}),[Ne]);var ke=(0,s.useState)([{id:"ProductName",label:"Product",value:[]}]),Se=ke[0];ke[1];return(0,o.jsxs)(d.Z,{children:[(0,o.jsxs)("h5",{className:"mb-3",children:["New Contact ",(0,o.jsx)("i",{className:"bi bi-person-plus-fill p-2",children:" "})]}),(0,o.jsxs)("div",{className:"form-container",children:[(0,o.jsx)("label",{for:"formFileSm",children:" OR : Add Excel:"}),(0,o.jsx)("input",{className:"form-control form-control-sm",id:"formFileSm",type:"file",accept:".xlsx, .xls"})]}),(0,o.jsx)(u.Z,{children:(0,o.jsxs)(h.Z,{className:"row",onSubmit:je,children:[(0,o.jsxs)(m.Z,{children:[(0,o.jsxs)(p.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,o.jsx)("i",{className:"bi bi-person me-2",children:" "}),"Personal Details"]}),(0,o.jsxs)(x.Z,{className:"row",children:[(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"ContactName",children:"Contact Name"}),(0,o.jsx)(v.Z,{id:"ContactName",name:"ContactName",placeholder:"Contact Name",type:"text",value:t.ContactName,onChange:function(e){var r=e.target,o=r.name,s=r.value,i=K||s.trim().length>=3;n(C({},t,O({},o,s))),P(i);var c=y(a().mark((function e(){var t,n,r,o;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return e.prev=2,e.next=5,fetch("http://eimsdemo.mannaicorp.com.qa/otcs/cs.exe/api/v1/webreports/1270805?Format=webreport&ContactName=".concat(encodeURIComponent(s)),{method:"GET",headers:{OTCSTicket:k.ticket}});case 5:if(!(t=e.sent).ok){e.next=18;break}return e.next=9,t.json();case 9:n=e.sent,console.log(n),r=n,console.log(r),o=n.exists,B(r),o?alert("User with name ".concat(s," already exists.")):console.log("User with name ".concat(s," does not exist.")),e.next=19;break;case 18:console.error("Error fetching data:",t.statusText);case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(2),console.error("Error fetching data:",e.t0);case 24:case"end":return e.stop()}}),e,null,[[2,21]])}))),l=setTimeout((function(){c()}),200);return function(){return clearTimeout(l)}},disabled:z}),t.ContactName.trim().length>=3&&I.length>0&&(0,o.jsx)("div",{children:I.slice(0,1).map((function(e,t){return(0,o.jsx)("div",{onClick:function(){return function(e){e.ContactName,e.ContactDesignation,e.Department,e.Address,e.City,e.State,e.PostalCode,e.Country,e.Phone,e.Mobile,e.Email,e.LinkedIn,e.ProductName;var t=e.JoinDate,n=(e.CreatedBy,e.PreviousOrganisationName,e.ReportingManager,e.Fax,e.Lead,e.Influential,e.OrgName,e.OrgDesc,e.Size,e.OrgAddress,e.OrgCity,e.OrgState,e.OrgPostalCode,e.OrgCountry,e.OrgPhone,e.OrgEmail,e.OrgFax,e.OrgLinkedIn,e.OrgWebsite,e.BusinessPartner,e.Sector,e.Industry,e.DecisionMaker,e.IntroducedBy,e.RelationshipStatus,e.DiscoveredThrough,new Date(t));console.log(n);var r=n.toLocaleDateString("en-GB").split("/").join("-");console.log(r),window.alert("".concat(e.ContactName)+" is aleardy Exist !!")}(e)},children:e.ContactName},t)}))})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"OrginisationName",children:"Orginisation Name"}),(0,o.jsx)(v.Z,{id:"OrginisationName",name:"OrgName",placeholder:"Orginisation Name",type:"text",value:t.OrgName,onChange:ee,disabled:t.OrgName&&Q}),F.length>0&&(0,o.jsx)("div",{children:F.slice(0,1).map((function(e,t){return(0,o.jsx)("div",{onClick:function(){return te(e)},children:e.OrgName},t)}))})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Contactdesignation",children:"Contact Designation"}),(0,o.jsx)(v.Z,{id:"Contactdesignation",name:"ContactDesignation",placeholder:"Contact Designation",type:"text",value:t.ContactDesignation,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Department",children:"Department"}),(0,o.jsx)(v.Z,{id:"Department",name:"Department",placeholder:"Department",type:"text",value:t.Department,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"City",children:"City"}),(0,o.jsx)(v.Z,{id:"City",name:"City",placeholder:"City",type:"text",value:t.City,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"State",children:"State"}),(0,o.jsx)(v.Z,{id:"State",name:"State",placeholder:"State",type:"text",value:t.State,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"PostalCode",children:"Postal Code"}),(0,o.jsx)(v.Z,{id:"PostalCode",name:"PostalCode",placeholder:"PostalCode",type:"text",value:t.PostalCode,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Country",children:"Country"}),(0,o.jsx)(v.Z,{id:"Country",name:"Country",placeholder:"Country",type:"text",value:t.Country,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Phone",children:"Phone"}),(0,o.jsx)(v.Z,{id:"Phone",name:"Phone",placeholder:"Phone",type:"text",value:t.Phone,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Mobile",children:"Mobile"}),(0,o.jsx)(v.Z,{id:"Mobile",name:"Mobile",placeholder:"Mobile",type:"text",value:t.Mobile,onChange:oe}),re&&(0,o.jsx)("p",{style:{color:"red"},children:"This mobile number already exists in the database."})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Email",children:"Email"}),(0,o.jsx)(v.Z,{id:"Email",name:"Email",placeholder:"Email Address",type:"Email",value:t.Email,onChange:le}),ie&&(0,o.jsx)("p",{style:{color:"red"},children:"This Email already exists in the system."})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Fax",children:"Fax"}),(0,o.jsx)(v.Z,{id:"Fax",name:"Fax",placeholder:"Fax",type:"text",value:t.Fax,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"LinkedIn",children:"LinkedIn"}),(0,o.jsx)(v.Z,{id:"LinkedIn",name:"LinkedIn",placeholder:"LinkedIn",type:"text",value:t.LinkedIn,onChange:Y})]})]})]}),(0,o.jsxs)(m.Z,{children:[(0,o.jsxs)(p.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,o.jsx)("i",{className:"bi bi-person me-2",children:" "}),"More Details"]}),(0,o.jsxs)(x.Z,{className:"row",children:[(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"JoinDate",children:"Join Date"}),(0,o.jsx)(v.Z,{id:"JoinDate",name:"JoinDate",placeholder:"dd-mm-yyyy",type:"date",value:t.JoinDate,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Influential",children:"Influential"}),(0,o.jsxs)(v.Z,{id:"Influential",name:"Influential",type:"select",value:t.Influential,onChange:Y,children:[(0,o.jsx)("option",{children:"--Select--"}),(0,o.jsx)("option",{children:"Yes"}),(0,o.jsx)("option",{children:"No"})]})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"ReportingManager",children:"Reporting Manager"}),(0,o.jsx)(v.Z,{id:"ReportingManager",name:"ReportingManager",placeholder:"Reporting Manager",type:"text",value:t.ReportingManager,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"PreviousOrganisationName",children:"Previous Organisation Name"}),(0,o.jsx)(v.Z,{id:"PreviousOrganisationName",name:"PreviousOrganisationName",placeholder:"Previous Organisation Name",type:"text",value:t.PreviousOrganisationName,onChange:Y})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"DecisionMaker",children:"Decision Maker"}),(0,o.jsxs)(v.Z,{id:"DecisionMaker",name:"DecisionMaker",placeholder:"Decision Maker",type:"select",value:t.DecisionMaker,onChange:Y,children:[(0,o.jsx)("option",{children:"--Select--"}),(0,o.jsx)("option",{children:"Yes"}),(0,o.jsx)("option",{children:"No"})]})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"DiscoveredThrough",children:"Discovered Through"}),(0,o.jsxs)(v.Z,{id:"DiscoveredThrough",name:"DiscoveredThrough",type:"select",value:t.DiscoveredThrough,onChange:Y,children:[(0,o.jsx)("option",{children:"--Select--"}),(0,o.jsx)("option",{children:"Event"}),(0,o.jsx)("option",{children:"LinkedIn "}),(0,o.jsx)("option",{children:"News Papar"}),(0,o.jsx)("option",{children:"Business Card"}),(0,o.jsx)("option",{children:"Other"})]}),"Other"===t.DiscoveredThrough&&(0,o.jsx)(v.Z,{className:" other my-2",id:"OtherValue",name:"OtherValue",type:"text",placeholder:"Enter other value",value:t.OtherValue,onChange:Y})]}),Se.map((function(e){return(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"field-".concat(e.id),children:e.label}),(0,o.jsx)(v.Z,{id:"field-".concat(e.id),className:"formaccount inputaccount",name:"field-".concat(e.id),placeholder:e.label,type:"select",multiple:!0,value:t[e.id],onChange:function(t){return function(e,t){var r=Array.from(t,(function(e){return e.value}));n((function(t){return C({},t,O({},e,r))}))}(e.id,t.target.selectedOptions)},children:T.map((function(e){return(0,o.jsx)("option",{value:e.ProductName,children:e.ProductName},e.ProductID)}))})]},e.id)})),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Createdby",children:"Created By"}),(0,o.jsx)(v.Z,{id:"Createdby",name:"CreatedBy",placeholder:"Created By",type:"text",value:"Admin",onChange:Y,disabled:!0})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"CreatedOn",children:"Created On"}),(0,o.jsx)(v.Z,{id:"CreatedOn",name:"CreatedOn",placeholder:"Created On ",type:"text",value:t.CreatedOn,onChange:Y,disabled:!0})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Comment",children:"Comments"}),(0,o.jsx)(v.Z,{id:"Comment",name:"Comment",placeholder:"Commets",type:"textarea",value:t.Comment,onChange:Y})]}),Ne.map((function(e){return(0,o.jsxs)("div",{className:"col-5 row subgroupaccount",children:[(0,o.jsxs)(f.Z,{className:"col",children:[(0,o.jsx)(g.Z,{for:"field-".concat(e.id),children:"Introduced By"}),(0,o.jsx)(v.Z,{id:"field-".concat(e.id),className:"formaccount inputaccount",name:"field-".concat(e.id),placeholder:"Introduced By",type:"text",value:e.introducedBy,onChange:function(t){return r=e.id,a=t.target.value,Ze((function(e){return e.map((function(e){return e.id===r?C({},e,{introducedBy:a}):e}))})),void n((function(e){return C({},e,{IntroducedBy:Ne.map((function(e){return e.introducedBy?e.introducedBy:""}))})}));var r,a}})]}),(0,o.jsxs)(f.Z,{className:"col",children:[(0,o.jsx)(g.Z,{for:"field-".concat(e.id),children:"Relationship Status"}),(0,o.jsxs)(v.Z,{id:"field-".concat(e.id),name:"field-".concat(e.id),placeholder:"Relationship Status",type:"select",value:e.relationshipStatus,onChange:function(t){return r=e.id,a=t.target.value,Ze((function(e){return e.map((function(e){return e.id===r?C({},e,{relationshipStatus:a||""}):e}))})),void n((function(e){return C({},e,{RelationshipStatus:Ne.map((function(e){return e.relationshipStatus?e.relationshipStatus:""}))})}));var r,a},children:[(0,o.jsx)("option",{value:"",children:"--Select--"}),(0,o.jsx)("option",{children:"Acquainted"}),(0,o.jsx)("option",{children:"Good"}),(0,o.jsx)("option",{children:"Excellent"})]})]}),Ne.length>1?(0,o.jsx)("i",{className:"bi bi-backspace-fill redclose",onClick:function(){return t=e.id,void Ze((function(e){return e.filter((function(e){return e.id!==t}))}));var t}}):null]},e.id)})),(0,o.jsx)("div",{className:"addbtndetails",children:(0,o.jsx)("div",{className:"bi bi-plus-circle-fill me-2 addmore",onClick:function(){Ze((function(e){return N(e).concat([{id:e.length+1,introducedBy:"",relationshipStatus:""}])}))}})})]})]}),(0,o.jsxs)(m.Z,{children:[(0,o.jsxs)(p.Z,{tag:"h6",className:"border-bottom p-3 mb-0",children:[(0,o.jsx)("i",{className:"bi bi-person me-2",children:" "}),"Orginisation Details"]}),(0,o.jsxs)(x.Z,{className:"row",children:[(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"OrginisationName",children:"Orginisation Name"}),(0,o.jsx)(v.Z,{id:"OrginisationName",name:"OrgName",placeholder:"Orginisation Name",type:"text",value:t.OrgName,onChange:ee,disabled:t.OrgName&&Q}),F.length>0&&(0,o.jsx)("div",{children:F.map((function(e,t){return(0,o.jsx)("div",{onClick:function(){return te(e)},children:e.OrgName},t)}))})]}),(0,o.jsxs)(f.Z,{className:"col-6",children:[(0,o.jsx)(g.Z,{for:"OrginisationDescription",children:"Orginisation Description"}),(0,o.jsx)(v.Z,{id:"OrginisationDescription",name:"OrgDesc",placeholder:"Orginisation Description",type:"text",value:t.OrgDesc,onChange:Y,disabled:t.OrgDesc&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Size",children:"Size"}),(0,o.jsx)(v.Z,{id:"Size",name:"Size",placeholder:"Size",type:"text",value:t.Size,onChange:Y,disabled:t.Size&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Address1",children:"Address"}),(0,o.jsx)(v.Z,{id:"Address1",name:"OrgAddress",placeholder:"Address",type:"text",value:t.OrgAddress,onChange:Y,disabled:t.OrgAddress&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"City1",children:"City"}),(0,o.jsx)(v.Z,{id:"City1",name:"OrgCity",placeholder:"City",type:"text",value:t.OrgCity,onChange:Y,disabled:t.OrgCity&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"State1",children:"State"}),(0,o.jsx)(v.Z,{id:"State1",name:"OrgState",placeholder:"State",type:"text",value:t.OrgState,onChange:Y,disabled:t.OrgState&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"PostalCode1",children:"Postal Code"}),(0,o.jsx)(v.Z,{id:"PostalCode1",name:"OrgPostalCode",placeholder:"PostalCode",type:"text",value:t.OrgPostalCode,onChange:Y,disabled:t.OrgPostalCode&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Country1",children:"Country"}),(0,o.jsx)(v.Z,{id:"Country1",name:"OrgCountry",placeholder:"Country",type:"text",value:t.OrgCountry,onChange:Y,disabled:t.OrgCountry&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Phone1",children:"Phone"}),(0,o.jsx)(v.Z,{id:"Phone1",name:"OrgPhone",placeholder:"Phone",type:"text",value:t.OrgPhone,onChange:me,disabled:t.OrgPhone&&Q}),ue&&(0,o.jsx)("p",{style:{color:"red"},children:"This Phone number already exists in the database."})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Email1",children:"Email"}),(0,o.jsx)(v.Z,{id:"Email1",name:"OrgEmail",placeholder:"Email Address",type:"Email",value:t.OrgEmail,onChange:ge,disabled:t.OrgEmail&&Q}),xe&&(0,o.jsx)("p",{style:{color:"red"},children:"This Email already exists in the database."})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Fax1",children:"Fax"}),(0,o.jsx)(v.Z,{id:"Fax1",name:"OrgFax",placeholder:"Fax",type:"text",value:t.OrgFax,onChange:Y,disabled:t.OrgFax&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Website1",children:"Website"}),(0,o.jsx)(v.Z,{id:"Website1",name:"OrgWebsite",placeholder:"Website",type:"text",value:t.OrgWebsite,onChange:Y,disabled:t.OrgFax&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"LinkedIn1",children:"LinkedIn"}),(0,o.jsx)(v.Z,{id:"LinkedIn1",name:"OrgLinkedIn",placeholder:"LinkedIn",type:"text",value:t.OrgLinkedIn,onChange:Y,disabled:t.OrgLinkedIn&&Q})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"BusinessPartner",children:"Business Partner"}),(0,o.jsxs)("div",{className:"displayflex",children:[(0,o.jsxs)("div",{className:"mr-2",children:[(0,o.jsx)(v.Z,{name:"BusinessPartner",type:"radio",value:"yes",checked:"yes"===t.BusinessPartner,onChange:J,disabled:t.BusinessPartner&&Q}),(0,o.jsx)(g.Z,{children:" yes"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(v.Z,{name:"BusinessPartner",type:"radio",value:"no",checked:"no"===t.BusinessPartner,onChange:J,disabled:t.BusinessPartner&&Q}),(0,o.jsx)(g.Z,{children:" No"})]})]})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Sector",children:"Sector"}),(0,o.jsxs)("div",{className:"displayflex",children:[(0,o.jsxs)("div",{className:"mr-2",children:[(0,o.jsx)(v.Z,{name:"Sector",type:"radio",value:"Public",checked:"Public"===t.Sector,onChange:W,disabled:t.Sector&&Q}),(0,o.jsx)(g.Z,{children:"Public"})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(v.Z,{name:"Sector",type:"radio",value:"Private",checked:"Private"===t.Sector,onChange:W,disabled:t.Sector&&Q}),(0,o.jsx)(g.Z,{children:"Private"})]})]})]}),(0,o.jsxs)(f.Z,{className:"col-3",children:[(0,o.jsx)(g.Z,{for:"Industry",children:"Industry"}),(0,o.jsxs)(v.Z,{id:"Industry",name:"Industry",type:"select",value:t.Industry,onChange:Y,disabled:t.Industry&&Q,children:[(0,o.jsx)("option",{children:"--Select--"}),(0,o.jsx)("option",{children:"Financial Services"}),(0,o.jsx)("option",{children:"Airlines and Aviation"}),(0,o.jsx)("option",{children:"Banking"}),(0,o.jsx)("option",{children:"Telecommunications"}),(0,o.jsx)("option",{children:"Hospitals and Health Care"}),(0,o.jsx)("option",{children:"Museums"}),(0,o.jsx)("option",{children:"Maritime Transportation"}),(0,o.jsx)("option",{children:"Airlines and Aviation"})]})]}),(0,o.jsx)(f.Z,{className:"col-9"}),ye.map((function(e){return(0,o.jsxs)("div",{className:"col-5 row subgroupaccount",children:[(0,o.jsxs)(f.Z,{className:"col",children:[(0,o.jsx)(g.Z,{for:"field-".concat(e.id),children:"Account Manager"}),(0,o.jsx)(v.Z,{id:"field-".concat(e.id),className:"formaccount inputaccount",name:"field-".concat(e.id),placeholder:"Account Manager",type:"text",value:e.accountManager,onChange:function(t){return r=e.id,a=t.target.value,Oe((function(e){return e.map((function(e){return e.id===r?C({},e,{accountManager:a}):e}))})),void n((function(e){return C({},e,{AccountManager:ye.map((function(e){return e.accountManager?e.accountManager:""}))})}));var r,a}})]}),(0,o.jsxs)(f.Z,{className:"col",children:[(0,o.jsx)(g.Z,{for:"field-".concat(e.id),children:"Vertical"}),(0,o.jsx)(v.Z,{id:"field-".concat(e.id),name:"field-".concat(e.id),placeholder:"Vertical",type:"text",value:e.vertical,onChange:function(t){return r=e.id,a=t.target.value,Oe((function(e){return e.map((function(e){return e.id===r?C({},e,{vertical:a||""}):e}))})),void n((function(e){return C({},e,{Vertical:ye.map((function(e){return e.vertical?e.vertical:""}))})}));var r,a}})]}),ye.length>1?(0,o.jsx)("i",{className:"bi bi-backspace-fill redclose",onClick:function(){return t=e.id,void Oe((function(e){return e.filter((function(e){return e.id!==t}))}));var t}}):null]},e.id)})),(0,o.jsx)("div",{className:"addbtndetails",children:(0,o.jsx)("div",{className:"bi bi-plus-circle-fill me-2 addmore",onClick:function(){Oe((function(e){return N(e).concat([{id:e.length+1,accountManager:"",vertical:""}])}))}})})]})]}),(0,o.jsxs)("div",{children:[(0,o.jsx)(j.Z,{type:"submit",className:"btn btn-primary mr-2",disabled:t.ContactName.trim().length<3||0===t.ContactName.trim().length,children:"Submit"}),(0,o.jsx)(j.Z,{type:"button",onClick:function(){var e=Object.fromEntries(Object.keys(t).map((function(e){return[e,""]})));G(!1),_(!1),b(!0),n(e),l().fire({icon:"success",title:"Success",text:"Data cleared successfully",confirmButtonText:"OK"}),setTimeout((function(){r.push("/")}),2e3)},children:"Cancel"})]})]})})]})}},9886:function(e,t,n){"use strict";var r=n(7294),a=n(5697),o=n.n(a),s=n(4184),i=n.n(s),c=n(2040),l=["className","cssModule","color","body","inverse","outline","tag","innerRef"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={body:o().bool,className:o().string,color:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func]),inverse:o().bool,outline:o().bool,tag:c.iC};function m(e){var t=e.className,n=e.cssModule,a=e.color,o=e.body,s=e.inverse,h=e.outline,m=e.tag,p=void 0===m?"div":m,x=e.innerRef,f=u(e,l),g=(0,c.mx)(i()(t,"card",!!s&&"text-white",!!o&&"card-body",!!a&&"".concat(h?"border":"bg","-").concat(a)),n);return r.createElement(p,d({},f,{className:g,ref:x}))}m.propTypes=h,t.Z=m},4610:function(e,t,n){"use strict";var r=n(7294),a=n(5697),o=n.n(a),s=n(4184),i=n.n(s),c=n(2040),l=["className","cssModule","innerRef","tag"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={className:o().string,cssModule:o().object,innerRef:o().oneOfType([o().object,o().string,o().func]),tag:c.iC};function m(e){var t=e.className,n=e.cssModule,a=e.innerRef,o=e.tag,s=void 0===o?"div":o,h=u(e,l),m=(0,c.mx)(i()(t,"card-body"),n);return r.createElement(s,d({},h,{className:m,ref:a}))}m.propTypes=h,t.Z=m},9816:function(e,t,n){"use strict";var r=n(7294),a=n(5697),o=n.n(a),s=n(4184),i=n.n(s),c=n(2040),l=["className","cssModule","tag"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h={className:o().string,cssModule:o().object,tag:c.iC};function m(e){var t=e.className,n=e.cssModule,a=e.tag,o=void 0===a?"div":a,s=u(e,l),h=(0,c.mx)(i()(t,"card-title"),n);return r.createElement(o,d({},s,{className:h}))}m.propTypes=h,t.Z=m},5305:function(e,t,n){"use strict";var r=n(7294),a=n(5697),o=n.n(a),s=n(4184),i=n.n(s),c=n(2040),l=["className","cssModule","widths","tag"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=["xs","sm","md","lg","xl","xxl"],p=o().oneOfType([o().number,o().string]),x=o().oneOfType([o().bool,o().number,o().string,o().shape({size:o().oneOfType([o().bool,o().number,o().string]),order:p,offset:p})]),f={tag:c.iC,xs:x,sm:x,md:x,lg:x,xl:x,xxl:x,className:o().string,cssModule:o().object,widths:o().array},g=function(e,t,n){return!0===n||""===n?e?"col":"col-".concat(t):"auto"===n?e?"col-auto":"col-".concat(t,"-auto"):e?"col-".concat(n):"col-".concat(t,"-").concat(n)};function v(e){var t=e.className,n=e.cssModule,a=e.widths,o=void 0===a?m:a,s=e.tag,p=void 0===s?"div":s,x=function(e,t){var n=e,r=[];return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:m).forEach((function(e,a){var o=n[e];if(delete n[e],o||""===o){var s=!a;if((0,c.Kn)(o)){var l,d=s?"-":"-".concat(e,"-"),u=g(s,e,o.size);r.push((0,c.mx)(i()((h(l={},u,o.size||""===o.size),h(l,"order".concat(d).concat(o.order),o.order||0===o.order),h(l,"offset".concat(d).concat(o.offset),o.offset||0===o.offset),l)),t))}else{var m=g(s,e,o);r.push(m)}}})),{colClasses:r,modifiedAttributes:n}}(u(e,l),n,o),f=x.modifiedAttributes,v=x.colClasses;v.length||v.push("col");var j=(0,c.mx)(i()(t,v),n);return r.createElement(p,d({},f,{className:j}))}v.propTypes=f,t.Z=v},5773:function(e,t,n){"use strict";var r=n(7294),a=n(5697),o=n.n(a),s=n(4184),i=n.n(s),c=n(2040),l=["className","cssModule","noGutters","tag","widths"];function d(){return(d=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var h=["xs","sm","md","lg","xl","xxl"],m=o().oneOfType([o().number,o().string]),p={tag:c.iC,noGutters:(0,c.x9)(o().bool,"Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"),className:o().string,cssModule:o().object,xs:m,sm:m,md:m,lg:m,xl:m,xxl:m,widths:o().array};function x(e){var t=e.className,n=e.cssModule,a=e.noGutters,o=e.tag,s=void 0===o?"div":o,m=e.widths,p=void 0===m?h:m,x=u(e,l),f=[];p.forEach((function(t,n){var r=e[t];if(delete x[t],r){var a=!n;f.push(a?"row-cols-".concat(r):"row-cols-".concat(t,"-").concat(r))}}));var g=(0,c.mx)(i()(t,a?"gx-0":null,"row",f),n);return r.createElement(s,d({},x,{className:g}))}x.propTypes=p,t.Z=x}},function(e){e.O(0,[166,682,774,888,179],(function(){return t=2562,e(e.s=t);var t}));var t=e.O();_N_E=t}]);