(this["webpackJsonphk-independent-bus-eta"]=this["webpackJsonphk-independent-bus-eta"]||[]).push([[0],{170:function(t){t.exports=JSON.parse('{"en":{"translation":{"kmb":"KMB","ctb":"CTB","nwfb":"NWFB","nlb":"NLB","\u521d\u59cb\u8a2d\u5b9a":"Initizaling","\u6b63\u5728\u66f4\u65b0\u5df4\u58eb\u8def\u7dda\u8cc7\u6599":"ppdating route database","\u7d04\u9700":"approx. ","\u555f\u52d5\u4e2d":"Launching","\u4ecb\u9762\u958b\u555f\u4e2d":"Panel opening","\u7c73":"m","\u79d2":"s","\u7531":"From","\u5f80":"To","\u5206\u9418":"min","\u5e38\u7528":"Home","\u641c\u5c0b":"Search","\u8a2d\u5b9a":"Settings","\u53d6\u6d88":"Clear","\u5df4\u58eb\u7dda":"Route","\u67b6\u69cb\u7248\u672c":"Schema Version","\u66f4\u65b0\u6642\u9593":"Last Update time","\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd":"Geolocation","\u958b\u555f":"On","\u958b\u555f\u4e2d...":"Switching...","\u95dc\u9589":"Off","\u7121\u6cd5\u7372\u5f97\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd\u6b0a\u9650":"Permission denied: Geolocation","\u4e00\u9375\u6e05\u7a7a\u7528\u6236\u8a18\u9304":"Clear Your Usage Records","\u5305\u62ec\u9396\u5b9a\u548c\u5e38\u7528\u5831\u6642":"Includes saved and common use ETA","\u4ea4\u901a\u8cc7\u6599\u4f86\u6e90":"ETA data source","\u8cc7\u6599\u4e00\u7dda\u901a":"DATA.GOV.HK","\u6350\u6b3e\u652f\u6301":"Donate Now","\u8acb\u6350\u6b3e\u5230 612 \u4eba\u9053\u652f\u63f4\u57fa\u91d1":"Please donate to 612 Humanitarian Relief Fund","\u8907\u88fd\u61c9\u7528\u7a0b\u5f0f\u93c8\u7d50":"Copy App URL","\u7d93\u4e0d\u540c\u5a92\u4ecb\u5206\u4eab\u7d66\u89aa\u53cb":"Share it!","\u8eca\u8cbb":"Fee"}},"zh":{"translation":{"kmb":"\u4e5d\u5df4","ctb":"\u57ce\u5df4","nwfb":"\u65b0\u5df4","nlb":"\u65b0\u5927\u5dbc\u5c71\u5df4"}}}')},183:function(t,e,n){},184:function(t,e,n){},252:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),r=n(15),o=n.n(r),i=(n(183),n(184),n(300)),s=n(302),u=n(19),l=n(28),b=n(299),j=n(284),d=n(253),h=n(79),f=n(301),p=n(280),O=n(309),g=n(8),x=n(278),m=n(306),v=n(305),k=n(281),S=n(5),C=n(7),y=n(2),w=c.a.createContext(),I=function(t){var e=Object(a.useState)(localStorage.getItem("schemaVersion")),n=Object(C.a)(e,2),c=n[0],r=n[1],o=Object(a.useState)(localStorage.getItem("versionMd5")),i=Object(C.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(JSON.parse(localStorage.getItem("routeList"))),b=Object(C.a)(l,2),j=b[0],d=b[1],h=Object(a.useState)(JSON.parse(localStorage.getItem("stopList"))),f=Object(C.a)(h,2),p=f[0],O=f[1],g=Object(a.useState)(JSON.parse(localStorage.getItem("stopMap"))),x=Object(C.a)(g,2),m=x[0],v=x[1],k=Object(a.useState)(parseInt(localStorage.getItem("updateTime"),10)),S=Object(C.a)(k,2),I=S[0],N=S[1],T=Object(a.useState)(""),L=Object(C.a)(T,2),M=L[0],R=L[1],P=Object(a.useState)("1+1+CHUK YUEN ESTATE+STAR FERRY"),F=Object(C.a)(P,2),z=F[0],B=F[1],W=Object(a.useState)(localStorage.getItem("geoPermission")),q=Object(C.a)(W,2),J=q[0],A=q[1],D=Object(a.useState)(JSON.parse(localStorage.getItem("geolocation"))||{lat:22.302711,lng:114.177216}),H=Object(C.a)(D,2),U=H[0],G=H[1],_=Object(a.useState)(null),Y=Object(C.a)(_,2),$=Y[0],V=Y[1],K=Object(a.useState)(JSON.parse(localStorage.getItem("hotRoute"))||{}),X=Object(C.a)(K,2),Z=X[0],Q=X[1],tt=Object(a.useState)(JSON.parse(localStorage.getItem("savedEtas"))||[]),et=Object(C.a)(tt,2),nt=et[0],at=et[1],ct=Object(a.useState)([]),rt=Object(C.a)(ct,2),ot=rt[0],it=rt[1],st=function(){fetch("https://hkbus.github.io/hk-bus-crawling/routeFareList.json").then((function(t){return t.json()})).then((function(t){var e=t.routeList,n=t.stopList,a=t.stopMap;d(e),O(n),v(a),N(Date.now())}))};Object(a.useEffect)((function(){if(Promise.all(["/hk-independent-bus-eta/schema-version.txt","https://hkbus.github.io/hk-bus-crawling/routeFareList.md5"].map((function(t){return fetch(t).then((function(t){return t.text()}))}))).then((function(t){var e=Object(C.a)(t,2),n=e[0],a=e[1],o=!1;c!==n&&(r(n),localStorage.setItem("schemaVersion",n),o=!0),s!==a&&(u(a),localStorage.setItem("versionMd5",a),o=!0),(o=o||null==j||null==p)&&st()})),"granted"===J){var t=navigator.geolocation.watchPosition((function(t){var e=t.coords,n=e.latitude,a=e.longitude;G({lat:n,lng:a})}));V(t)}return function(){$&&navigator.geolocation.clearWatch($)}}),[]),Object(a.useEffect)((function(){if("granted"===J){var t=navigator.geolocation.watchPosition((function(t){var e=t.coords,n=e.latitude,a=e.longitude;G({lat:n,lng:a})}));V(t)}else $&&(navigator.geolocation.clearWatch($),V(null));localStorage.setItem("geoPermission",J)}),[J]),Object(a.useEffect)((function(){it(E(M,j))}),[M,j]),Object(a.useEffect)((function(){localStorage.setItem("savedEtas",JSON.stringify(nt))}),[nt]),Object(a.useEffect)((function(){localStorage.setItem("stopList",JSON.stringify(p))}),[p]),Object(a.useEffect)((function(){localStorage.setItem("stopMap",JSON.stringify(m))}),[m]),Object(a.useEffect)((function(){localStorage.setItem("routeList",JSON.stringify(j))}),[j]),Object(a.useEffect)((function(){localStorage.setItem("updateTime",I)}),[I]),Object(a.useEffect)((function(){localStorage.setItem("geolocation",JSON.stringify(U))}),[U]);return Object(y.jsx)(w.Provider,{value:{routeList:j,stopList:p,stopMap:m,setRouteList:d,setStopList:O,searchRoute:M,setSearchRoute:R,updateSearchRouteByButton:function(t){switch(t){case"b":R(M.slice(0,-1));break;case"-":R("");break;default:R(M+t)}},selectedRoute:z,updateSelectedRoute:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";B("".concat(t,"/").concat(e)),e&&Q((function(n){return n[t+"/"+e]=Z[t+"/"+e]?Z[t+"/"+e]+1:1,localStorage.setItem("hotRoute",JSON.stringify(n)),n}))},possibleChar:ot,hotRoute:Z,geolocation:U,setGeolocation:G,savedEtas:nt,updateSavedEtas:function(t){at((function(e){return e.includes(t)?e.filter((function(e){return e!==t})):e.concat(t)}))},resetUsageRecord:function(){Q({}),G({lat:22.302711,lng:114.177216}),at([])},renewDb:st,schemaVersion:c,versionMd5:s,updateTime:I,geoPermission:J,setGeoPermission:A},children:t.children})},N=w,E=function(t,e){if(null==e)return[];var n={};return Object.entries(e).forEach((function(e){if(e[0].startsWith(t.toUpperCase())){var a=e[0].slice(t.length,t.length+1);n[a]=isNaN(n[a])?1:n[a]+1}})),Object.entries(n).map((function(t){return t[0]})).filter((function(t){return"+"!==t}))},T=Object(p.a)((function(t){return{toolbar:{"& a":{color:"black",textDecoration:"none"},display:"flex",justifyContent:"space-between",zIndex:2*t.zIndex.drawer},searchRouteInput:{maxWidth:"50px","& input":{textAlign:"center"}}}})),L=Object(S.a)({root:{borderBottom:"none",minHeight:24},indicator:{backgroundColor:"transparent"}})(v.a),M=Object(S.a)((function(t){return{root:{textTransform:"none",minWidth:36,fontWeight:900,marginRight:t.spacing(0),fontSize:"15px",opacity:1,padding:"6px 6px"},selected:{"& > .MuiTab-wrapper":{color:"#3B3C45",backgroundColor:"#FEFBFA"}},wrapper:{color:"#3B3C45",borderRadius:"30px",padding:"2px 10px 0px 10px"}}}))((function(t){return Object(y.jsx)(k.a,Object(g.a)({disableRipple:!0},t))})),R=function(t){var e=Object(a.useContext)(N),n=e.searchRoute,c=e.setSearchRoute,r=Object(u.j)().path,o=Object(O.a)(),i=o.t,s=o.i18n,b=T(),j=Object(u.h)(),d=Object(u.g)();return Object(y.jsxs)(x.a,{className:b.toolbar,children:[Object(y.jsxs)(l.b,{to:{pathname:"/".concat(s.language,"/search")},children:[Object(y.jsx)(h.a,{variant:"h6",children:"\u9999\u6e2f"}),Object(y.jsx)(h.a,{variant:"subtitle2",children:"\u7368\u7acb\u5df4\u58eb\u9810\u5831"})]}),Object(y.jsx)(m.a,{className:b.searchRouteInput,type:"text",value:n,placeholder:i("\u5df4\u58eb\u7dda"),onChange:function(t){return c(t.target.value)},onFocus:function(t){document.activeElement.blur(),d.replace("/".concat(s.language,"/search"))},disabled:r.includes("route")}),Object(y.jsxs)(L,{value:s.language,onChange:function(t,e){return n=e,d.replace(j.pathname.replace("/"+s.language+"/","/"+n+"/")),void s.changeLanguage(n);var n},children:[Object(y.jsx)(M,{value:"en",label:"En"}),Object(y.jsx)(M,{value:"zh",label:"\u7e41"})]})]})},P=n(286),F=function(t,e){var n=t.lat*Math.PI/180,a=e.lat*Math.PI/180,c=(e.lat-t.lat)*Math.PI/180,r=(e.lng-t.lng)*Math.PI/180,o=Math.sin(c/2)*Math.sin(c/2)+Math.cos(n)*Math.cos(a)*Math.sin(r/2)*Math.sin(r/2);return 6371e3*(2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)))},z=n(282),B=n(283),W=n(285),q=n(124),J=n.n(q),A=n(150),D=n(151),H=n(21),U=n.n(H),G={co:"kmb",fetchEtas:function(t){var e=t.stopId,n=t.route,a=t.seq,c=t.serviceType,r=t.bound;return fetch("https://data.etabus.gov.hk/v1/transport/kmb/eta/".concat(e,"/").concat(n,"/").concat(c),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.dir===r&&t.seq===a+1})).map((function(t){return{eta:t.eta,remark:{zh:t.rmk_tc,en:t.rmk_en},co:"kmb"}}))}))},fetchStopEtas:function(t){return fetch("https://data.etabus.gov.hk/v1/transport/kmb/stop-eta/".concat(t),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return{route:t.route,bound:t.dir,seq:t.seq,eta:t.eta?Math.round(U()(t.eta).diff(U()())/60/1e3):t.eta,dest:{zh:t.dest_tc,en:t.dest_en},remark:{zh:t.rmk,en:t.rmk},serviceType:t.service_type,co:"kmb"}}))}))}},_={co:"nwfb",fetchEtas:function(t){var e=t.stopId,n=t.route,a=t.bound;return fetch("https://rt.data.gov.hk//v1/transport/citybus-nwfb/eta/NWFB/".concat(e,"/").concat(n),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.eta&&t.dir===a})).map((function(t){return{eta:t.eta,remark:{zh:t.rmk_tc,en:t.rmk_en},co:"nwfb"}}))}))},fetchStopEtas:function(t){return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/NWFB/".concat(t),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return{route:t.route,bound:t.dir,seq:t.seq,eta:t.eta?Math.round(U()(t.eta).diff(U()())/60/1e3):t.eta,dest:{en:t.dest.replace("/","\uff0f")},remark:{en:t.rmk},serviceType:1,co:"nwfb"}}))}))}},Y={co:"ctb",fetchEtas:function(t){var e=t.stopId,n=t.route,a=t.bound;return fetch("https://rt.data.gov.hk//v1/transport/citybus-nwfb/eta/CTB/".concat(e,"/").concat(n),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.filter((function(t){return t.eta&&t.dir===a})).map((function(t){return{eta:t.eta,remark:{zh:t.rmk_tc,en:t.rmk_en},co:"ctb"}}))}))},fetchStopEtas:function(t){return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/CTB/".concat(t),{cache:"no-store"}).then((function(t){return t.json()})).then((function(t){return t.data.map((function(t){return{route:t.route,bound:t.dir,seq:t.seq,eta:t.eta?Math.round(U()(t.eta).diff(U()())/60/1e3):t.eta,dest:{en:t.dest.replace("/","\uff0f")},remark:{en:t.rmk},serviceType:1,co:"ctb"}}))}))}},$={co:"nlb",fetchEtas:function(t){var e=t.stopId,n=t.nlbId;return fetch("https://rt.data.gov.hk/v1/transport/nlb/stop.php?action=estimatedArrivals",{body:JSON.stringify({routeId:n,stopId:e,language:"zh"}),headers:{"Content-Type":"text/plain"},method:"POST",cache:"no-store"}).then((function(t){return t.json()})).then((function(t){var e=t.estimatedArrivals;return e?e.filter((function(t){return t.estimatedArrivalTime})).map((function(t){return{eta:t.estimatedArrivalTime,remark:{zh:"",en:""},co:"nlb"}})):[]}))},fetchStopEtas:function(t){return fetch("https://rt.data.gov.hk/v1/transport/batch/stop-eta/NLB/".concat(t),{cache:"no-store"}).then((function(t){if(t.ok)return t.json();throw new Error("Stop not exist")})).then((function(t){return t.data.map((function(t){return{route:t.route,eta:t.eta?Math.round(U()(t.eta).diff(U()())/60/1e3):t.eta,dest:{en:t.dest},remark:{en:t.rmk},co:"nlb"}}))})).catch((function(){return[]}))}},V=function(){var t=Object(D.a)(J.a.mark((function t(e){var n,a,c,r,o,i,s,u,l,b,j;return J.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.route,a=e.routeStops,c=e.bound,r=e.seq,o=e.serviceType,i=e.co,s=e.nlbId,u=[],l=Object(A.a)(i),t.prev=3,l.s();case 5:if((b=l.n()).done){t.next=39;break}if("kmb"!==(j=b.value)||!a.kmb){t.next=15;break}return t.t0=u,t.next=11,G.fetchEtas({route:n,stopId:a.kmb[r],seq:r+1===a.kmb.length?1e3:r,serviceType:o,bound:c[j]});case 11:t.t1=t.sent,u=t.t0.concat.call(t.t0,t.t1),t.next=37;break;case 15:if("ctb"!==j||!a.ctb){t.next=23;break}return t.t2=u,t.next=19,Y.fetchEtas({stopId:a.ctb[r],route:n,bound:c[j]});case 19:t.t3=t.sent,u=t.t2.concat.call(t.t2,t.t3),t.next=37;break;case 23:if("nwfb"!==j||!a.nwfb){t.next=31;break}return t.t4=u,t.next=27,_.fetchEtas({stopId:a.nwfb[r],route:n,bound:c[j]});case 27:t.t5=t.sent,u=t.t4.concat.call(t.t4,t.t5),t.next=37;break;case 31:if("nlb"!==j||!a.nlb){t.next=37;break}return t.t6=u,t.next=35,$.fetchEtas({stopId:a.nlb[r],nlbId:s});case 35:t.t7=t.sent,u=t.t6.concat.call(t.t6,t.t7);case 37:t.next=5;break;case 39:t.next=44;break;case 41:t.prev=41,t.t8=t.catch(3),l.e(t.t8);case 44:return t.prev=44,l.f(),t.finish(44);case 47:return t.abrupt("return",u.sort((function(t,e){return""===t.eta?1:""===e.eta||t.eta<e.eta?-1:1})));case 48:case"end":return t.stop()}}),t,null,[[3,41,44,47]])})));return function(e){return t.apply(this,arguments)}}(),K=function(t){var e=t.name,n=t.location,c=t.fares,r=t.faresHoliday,o=t.seq,i=Object(O.a)().t,s=Object(a.useContext)(N),u=s.geoPermission,l=s.geolocation,b=[c&&c[o]?"$"+c[o]:"",r&&r[o]?"$"+r[o]:""].filter((function(t){return t})).join(", ");return"granted"!==u?e+"\u3000"+(b?"("+b+")":""):e+" - "+F(n,l).toFixed(0)+i("\u7c73")+"\u3000"+(b?"("+b+")":"")},X=function(t){var e=t.routeId,n=Object(O.a)(),c=n.t,r=n.i18n,o=Object(a.useContext)(N),i=o.routeList,s=o.stopList,u=e.split("+"),b=Object(C.a)(u,2),d=b[0],h=b[1],f=e.split("/"),p=Object(C.a)(f,2),g=p[0],x=p[1],m=i[g],v=m.co,k=m.stops,S=m.dest,w=m.bound,I=m.nlbId,E=m.fares,T=m.faresHoliday,L=s[k[v[0]]?k[v[0]][parseInt(x,10)]:null],M=Object(a.useState)(null),R=Object(C.a)(M,2),P=R[0],F=R[1],q=Z();Object(a.useEffect)((function(){var t=!0,e=function(){return V({route:d,routeStops:k,seq:parseInt(x,10),bound:w,serviceType:h,co:v,nlbId:I}).then((function(e){t&&F(e)}))},n=setInterval((function(){e()}),3e4);return e(),function(){t=!1,clearInterval(n)}}),[]);var J=function(t){if(t){var e=Math.round(U()(t.eta).diff(U()())/60/1e3);return e<1?"- "+c("\u5206\u9418"):Number.isInteger(e)?e+" "+c("\u5206\u9418"):t.remark[r.language]}return""};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(z.a,{button:!0,component:l.b,to:"/".concat(r.language,"/route/").concat(e),className:q.listItem,children:[Object(y.jsx)(B.a,{primary:d,className:q.route}),L?Object(y.jsx)(B.a,{primary:c("\u5f80")+" "+S[r.language],secondary:Object(y.jsx)(K,{name:L.name[r.language],location:L.location,fares:E,faresHoliday:T,seq:parseInt(x,10)}),className:q.routeDest}):Object(y.jsx)(j.a,{size:15}),Object(y.jsx)(B.a,{primary:P?J(P[0]):"",secondary:P?J(P[1]):"",className:q.routeEta})]}),Object(y.jsx)(W.a,{})]})},Z=Object(p.a)((function(t){return{listItem:{padding:"4px 16px"},route:{width:"15%"},routeDest:{width:"65%"},routeEta:{width:"20%"}}})),Q=function(){var t=Object(a.useContext)(N),e=t.hotRoute,n=t.savedEtas,c=t.routeList,r=t.stopList,o=Object(a.useState)(n.concat(Object.entries(e).filter((function(t){var e=Object(C.a)(t,2);e[0];return e[1]>5})).sort((function(t,e){return e[1]-t[1]})).map((function(t){return Object(C.a)(t,1)[0]}))).filter((function(t,e,n){return n.indexOf(t)===e})).slice(0,20)),i=Object(C.a)(o,2),s=i[0],u=i[1],l=Object(a.useState)(!1),b=Object(C.a)(l,2),h=b[0],f=b[1];Object(a.useEffect)((function(){var t=!0,e=JSON.parse(localStorage.getItem("geolocation"));return Object.entries(r).map((function(t){return t.concat(F(t[1].location,e))})).filter((function(t){return t[2]<1e3})).sort((function(t,e){return t[2]-e[2]})).slice(0,5).forEach((function(e){var n=Object(C.a)(e,1)[0],a=[];Object.entries(c).forEach((function(t){var e=Object(C.a)(t,2),c=e[0],r=e[1];["kmb","nwfb","ctb"].forEach((function(t){r.stops[t]&&r.stops[t].includes(n)&&a.push(c+"/"+r.stops[t].indexOf(n))}))})),t&&u((function(t){return t.concat(a.map((function(t){return f(!0),t}))).filter((function(t,e,n){return n.indexOf(t)===e})).slice(0,20)}))})),function(){t=!1}}),[]);var p=tt();return Object(y.jsxs)(d.a,{className:p.root,children:[Object(y.jsx)(P.a,{className:p.list,children:s.map((function(t){return Object(y.jsx)(X,{routeId:t},t)}))}),h?Object(y.jsx)(y.Fragment,{}):Object(y.jsx)(j.a,{size:20})]})},tt=Object(p.a)((function(t){return{root:{background:"white",height:"calc(100vh - 120px)",overflowY:"scroll",textAlign:"center"}}})),et=n(100),nt=n(46),at=n(287),ct=n(288),rt=n(303),ot=n(257),it=n(152),st=n.n(it),ut=function(t){var e=t.k,n=t.handleClick,a=t.disabled,c=void 0!==a&&a,r=t.className,o=dt(),i=Object(O.a)().t;return Object(y.jsx)(at.a,{size:"large",variant:"contained",className:"".concat(o.button," ").concat(r),onClick:function(){return n(e)},disabled:c,children:"b"===e?Object(y.jsx)(st.a,{}):"-"===e?Object(y.jsx)("div",{className:o.cancelButton,children:i("\u53d6\u6d88")}):e})},lt=function(){var t=Object(a.useContext)(N),e=t.searchRoute,n=t.updateSearchRouteByButton,c=t.possibleChar;return Object(y.jsx)(ct.a,{container:!0,spacing:0,children:"789456123-0b".split("").map((function(t){return Object(y.jsx)(ct.a,{item:!0,xs:4,children:Object(y.jsx)(ut,{k:t,handleClick:n,disabled:"b"===t&&""===e||!"b-".includes(t)&&!c.includes(t)||"-"===t&&""===e})},"input-"+t)}))})},bt=function(){var t=Object(a.useContext)(N),e=t.updateSearchRouteByButton,n=t.possibleChar,c=dt();return Object(y.jsx)(ct.a,{container:!0,spacing:1,children:n.filter((function(t){return isNaN(t)})).map((function(t){return Object(y.jsx)(ct.a,{item:!0,xs:12,children:Object(y.jsx)(ut,{k:t,handleClick:e,className:c.alphabetButton})},"input-"+t)}))})},jt=function(){var t=dt();return Object(y.jsxs)(rt.a,{className:t.boxContainer,padding:0,children:[Object(y.jsx)(rt.a,{className:t.numPadContainer,padding:0,children:Object(y.jsx)(lt,{})}),Object(y.jsx)(rt.a,{className:t.alphabetPadContainer,padding:0,children:Object(y.jsx)(bt,{})})]})},dt=Object(ot.a)((function(t){return{boxContainer:{display:"flex",flexDirection:"row",height:"180px",justifyContent:"space-around"},numPadContainer:{width:"60%"},alphabetPadContainer:{width:"20%",height:"100%",overflowX:"hidden",overflowY:"scroll"},button:{width:"100%",height:"42px",fontSize:"1.2em",borderRadius:"unset"},cancelButton:{fontSize:"0.8em"},alphabetButton:{height:"42px"}}})),ht=n(289),ft=n(290),pt=n(291),Ot=function(t){var e=t.route,n=Object(O.a)(),a=n.t,c=n.i18n;return Object(y.jsx)(y.Fragment,{children:e.nlbId?Object(y.jsxs)(h.a,{variant:"subtitle2",display:"inline",children:[a("\u5f80")," ",e.dest[c.language]," ",a("\u7531")+" "+e.orig[c.language]]}):Object(y.jsxs)(h.a,{variant:"subtitle2",display:"inline",children:[a("\u5f80")," ",e.dest[c.language]]})})},gt=c.a.memo((function(t){var e=t.data,n=t.index,a=t.style,c=Object(O.a)(),r=c.t,o=c.i18n,i=e.routeList[n],s=i[0].split("+").slice(0,2),u=Object(C.a)(s,2),b=u[0],j=u[1],d=xt();return Object(y.jsx)(l.b,{to:"/"+o.language+"/route/"+i[0],children:Object(y.jsx)(ht.a,{variant:"outlined",style:a,square:!0,children:Object(y.jsx)(ft.a,{children:Object(y.jsxs)(pt.a,{className:d.cardContent,children:[Object(y.jsx)(h.a,{variant:"h5",display:"inline",children:b}),Object(y.jsxs)(h.a,{variant:"caption",children:[" - ",i[1].co.map((function(t){return r(t)})).join("+")]}),Object(y.jsx)("br",{}),Object(y.jsx)(Ot,{route:i[1]}),Object(y.jsx)(h.a,{variant:"caption",children:j>=2?r("\u7279\u5225\u73ed\u6b21"):"\u3000"})]})})},i[0])})}),et.b),xt=Object(p.a)((function(t){return{cardContent:{padding:"8px 16px"}}})),mt=Object(nt.a)((function(t){return{routeList:t}})),vt=function(){var t=Object(a.useContext)(N),e=t.routeList,n=t.searchRoute,c=Object.entries(e).filter((function(t){var e=Object(C.a)(t,2),a=e[0],c=e[1],r=c.stops,o=c.co;return a.startsWith(n.toUpperCase())&&(null==r[o[0]]||r[o[0]].length>0)})),r=mt(c);return Object(y.jsx)(et.a,{height:330,itemCount:c.length,itemSize:69,width:"100%",itemData:r,children:gt})},kt=function(){return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(vt,{}),Object(y.jsx)(jt,{})]})},St=n(66),Ct=n(141),yt=n(142),wt=n(144),It=n(143),Nt=n(153),Et=n.n(Nt),Tt=n(155),Lt=n.n(Tt),Mt=function(t){var e=t.center;t.zoom;return Object(St.a)().flyTo(zt(e)),Object(y.jsx)(y.Fragment,{})},Rt=function(){var t=Object(a.useContext)(N),e=t.geolocation;return"granted"!==t.geoPermission?null:Object(y.jsx)(Ct.a,{center:zt(e),radius:25})},Pt=function(t){var e=t.onClick,n=qt();return Object(y.jsx)("div",{className:"leaflet-bottom leaflet-right",children:Object(y.jsx)("div",{className:"".concat(n.centerControlContainer," leaflet-control leaflet-bar"),onClick:e,children:Object(y.jsx)(Lt.a,{className:n.centerControl})})})},Ft=function(t){var e=t.stops,n=t.stopIdx,c=t.onMarkerClick,r=Object(a.useContext)(N),o=r.stopList,i=r.geoPermission,s=r.setGeoPermission,u=r.setGeolocation,l=qt(),b=Object(a.useState)(o[e[n]]?o[e[n]].location:{}),j=Object(C.a)(b,2),d=j[0],h=j[1],f=Object(a.useState)(null),p=Object(C.a)(f,2),O=p[0],g=p[1];Object(a.useEffect)((function(){h(o[e[n]]?o[e[n]].location:o[e[Math.round(e.length/2)]].location)}),[n]);var x=function(t){h(O.getCenter())};return Object(a.useEffect)((function(){if(O)return O.on("dragend",x),function(){O.off("dragend",x)}}),[O]),Object(y.jsx)(rt.a,{className:"".concat(l.mapContainer),children:Object(y.jsxs)(yt.a,{center:zt(d),zoom:16,scrollWheelZoom:!1,className:l.mapContainer,whenCreated:g,children:[Object(y.jsx)(Mt,{center:zt(d),zoom:16}),Object(y.jsx)(wt.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"}),e.map((function(t,e,a){return Object(y.jsx)(Et.a,{position:o[t].location,icon:Object(y.jsx)(Wt,{active:e===n,passed:e<n}),eventHandlers:{click:function(t){c(e)(t,!0,!0)}}},"".concat(t,"-").concat(e))})),e.slice(1).map((function(t,n){return Object(y.jsx)(It.a,{positions:[Bt(o[e[n]].location),Bt(o[t].location)],color:"#FF9090"},"".concat(t,"-line"))})),Object(y.jsx)(Rt,{}),Object(y.jsx)(Pt,{onClick:function(){"granted"===i?h(zt(JSON.parse(localStorage.getItem("geolocation")))):"denied"!==i&&navigator.geolocation.getCurrentPosition((function(t){var e=t.coords,n=e.latitude,a=e.longitude;u({lat:n,lng:a}),h({lat:n,lng:a}),s("granted")}))}})]})})},zt=function(t){return t&&"number"===typeof t.lat&&isFinite(t.lat)&&"number"===typeof t.lng&&isFinite(t.lng)?t:{lat:22.302711,lng:114.177216}},Bt=function(t){return[t.lat,t.lng]},Wt=function(t){var e=t.active,n=t.passed,a=qt();return Object(y.jsx)("img",{src:"https://unpkg.com/leaflet@1.0.1/dist/images/marker-icon.png",alt:"",tabIndex:"0",className:"".concat(a.marker," ").concat(e?a.active:""),style:{filter:n?"grayscale(100%)":"hue-rotate(130deg)"}})},qt=Object(p.a)((function(t){return{mapContainer:{height:"30vh"},centerControl:{padding:"5px"},centerControlContainer:{background:"white",height:"28px",marginBottom:"20px !important",marginRight:"5px !important"},marker:{marginLeft:"38px",marginTop:"-14px",width:"25px",height:"41px",zIndex:618,outline:"none"},active:{animation:"$blinker 2s linear infinite"},"@keyframes blinker":{"50%":{opacity:.3}}}})),Jt=n(256),At=n(308),Dt=n(292),Ht=n(293),Ut=n(156),Gt=n.n(Ut),_t=n(157),Yt=n.n(_t),$t=function(t){var e=t.route,n=t.routeStops,c=t.seq,r=t.bound,o=t.serviceType,i=t.co,s=t.nlbId,u=Object(O.a)(),l=u.t,b=u.i18n,d=Object(a.useState)(null),f=Object(C.a)(d,2),p=f[0],g=f[1];if(Object(a.useEffect)((function(){var t=!0,a=function(){V({route:e,routeStops:n,seq:c,bound:r,serviceType:o,co:i,nlbId:s}).then((function(e){t&&g(e)}))};a();var u=setInterval((function(){a()}),3e4);return function(){t=!1,clearInterval(u)}}),[]),null==p)return Object(y.jsx)(j.a,{size:20,style:{}});var x=function(t){if(""===t)return"";var e=Math.round(U()(t).diff(U()())/60/1e3);return e<1?"- "+l("\u5206\u9418"):Number.isInteger(e)?e+" "+l("\u5206\u9418"):void 0};return Object(y.jsx)("div",{children:0===p.length?l("\u672a\u6709\u73ed\u6b21\u8cc7\u6599"):p.map((function(t,e){return Object(y.jsxs)(h.a,{variant:"subtitle1",children:[x(t.eta)," - ",t.remark[b.language]?t.remark[b.language]:""," ",l(t.co)]},"route-".concat(e))}))})},Vt=function(t){var e=t.expanded,n=t.setExpanded,c=t.handleChange,r=Object(u.i)(),o=r.id,i=r.panel,s=Object(a.useContext)(N),l=s.routeList,b=s.stopList,j=s.savedEtas,d=s.geoPermission,f=s.updateSavedEtas,p=l[o],g=p.route,x=p.serviceType,m=p.bound,v=p.stops,k=p.co,S=p.fares,C=p.faresHoliday,w=p.nlbId,I=Object(O.a)(),E=I.t,T=I.i18n,L=Object(a.useRef)([]);Object(a.useEffect)((function(){!1!==e&&L.current[e]&&L.current[e].scrollIntoView({behavior:"smooth",block:"center"})}),[e]),Object(a.useEffect)((function(){!function(){if(parseInt(i,10)&&L.current[parseInt(i,10)])n(parseInt(i,10));else if("granted"===d){var t=JSON.parse(localStorage.getItem("geolocation")),e=v[k[0]].map((function(e,n){return[e,n,F(t,b[e].location)]})).sort((function(t,e){return t[2]-e[2]}))[0];if(e){var a=e[1];n(a)}}}()}),[]);var M=Qt();return Object(y.jsx)(rt.a,{className:M.boxContainer,children:v[k[0]].map((function(t,n){return Object(y.jsxs)(Kt,{expanded:e===n,onChange:c(n),TransitionProps:{unmountOnExit:!0},ref:function(t){L.current[n]=t},children:[Object(y.jsxs)(Xt,{children:[Object(y.jsx)(h.a,{variant:"body1",children:b[t].name[T.language]}),Object(y.jsxs)(h.a,{variant:"caption",children:[S&&S[n]?E("\u8eca\u8cbb")+": $"+S[n]:"",C&&C[n]?"\u3000\u3000\u3000\u3000"+E("\u5047\u65e5\u8eca\u8cbb")+": $"+C[n]:""]})]}),Object(y.jsxs)(Zt,{children:[Object(y.jsx)($t,{route:g,seq:n,routeStops:v,serviceType:x,bound:m,co:k,nlbId:w}),Object(y.jsx)(Jt.a,{"aria-label":"favourite",onClick:function(){return t="".concat(o,"/").concat(n),f(t);var t},style:{backgroundColor:"transparent"},children:j.includes("".concat(o,"/").concat(n))?Object(y.jsx)(Gt.a,{}):Object(y.jsx)(Yt.a,{})})]})]},"stop-"+n)}))})},Kt=Object(S.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(At.a),Xt=Object(S.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:56,"&$expanded":{minHeight:56}},content:{"&$expanded":{margin:"12px 0"},flexDirection:"column"},expanded:{}})(Dt.a),Zt=Object(S.a)((function(t){return{root:{padding:t.spacing(2),justifyContent:"space-between"}}}))(Ht.a),Qt=Object(p.a)((function(t){return{boxContainer:{overflowY:"scroll"},loadingContainer:{display:"flex",justifyContent:"center"}}})),te=n(304),ee=n(294),ne=n(295),ae=Object(p.a)((function(t){return{dialog:{"& .MuiPaper-root":{width:"100%",marginTop:"90px",height:"calc(100vh - 100px)"}},title:{background:"#ffff90"}}})),ce=function(t){var e=t.stops,n=t.handleClose,c=Object(a.useContext)(N),r=c.routeList,o=c.stopList,i=Object(O.a)().i18n,s=Object(a.useState)([]),u=Object(C.a)(s,2),l=u[0],b=u[1],j=ae();return Object(a.useEffect)((function(){if(void 0!==e){var t=[];Object.entries(r).forEach((function(n){var a=Object(C.a)(n,2),c=a[0],r=a[1];e.some((function(e){var n=Object(C.a)(e,2),a=n[0],o=n[1];return!(!r.stops[a]||!r.stops[a].includes(o))&&(t.push(c+"/"+r.stops[a].indexOf(o)),!0)}))})),b(t)}else b([])}),[e]),Object(y.jsx)(te.a,{open:!!e,onClose:n,className:j.dialog,children:e?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(ee.a,{className:j.title,children:o[e[0][1]].name[i.language]}),Object(y.jsx)(ne.a,{children:Object(y.jsx)(P.a,{children:l.map((function(t){return Object(y.jsx)(X,{routeId:t},t)}))})})]}):Object(y.jsx)(y.Fragment,{})})},re=function(){var t=Object(u.i)(),e=t.id,n=t.panel,c=Object(a.useState)(parseInt(n,10)),r=Object(C.a)(c,2),o=r[0],i=r[1],s=Object(a.useState)(void 0),l=Object(C.a)(s,2),b=l[0],d=l[1],f=Object(a.useContext)(N),p=f.routeList,g=f.stopMap,x=f.updateSelectedRoute,m=p[e],v=m.route,k=m.stops,S=m.co,w=m.orig,I=m.dest,E=m.nlbId,T=Object(O.a)(),L=T.t,M=T.i18n,R=Object(u.g)(),P=function(t){return function(n,a,c){i(!!a&&t),a&&R.replace("/".concat(M.language,"/route/").concat(e,"/").concat(t))}};Object(a.useEffect)((function(){d(void 0),n&&i(parseInt(n,10))}),[v,n]),Object(a.useEffect)((function(){x(e)}),[]);var F=oe();return null==k[S[0]]?Object(y.jsx)(rt.a,{className:F.loadingContainer,children:Object(y.jsx)(j.a,{size:30})}):0===k[S[0]].length?Object(y.jsx)(y.Fragment,{children:Object(y.jsx)(h.a,{variant:"h5",align:"center",children:L("\u8def\u7dda\u4e0d\u5b58\u5728")})}):Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(h.a,{variant:"subtitle1",align:"center",children:v}),Object(y.jsxs)(h.a,{variant:"caption",align:"center",children:[L("\u5f80")," ",I[M.language]," ",E?L("\u7531")+" "+w[M.language]:""]}),Object(y.jsx)(Ft,{stops:k[S[0]],stopIdx:o,onMarkerClick:function(t){return o===t&&d([[S[0],k[S[0]][t]]].concat(g[k[S[0]][t]]||[])),P(t)}}),Object(y.jsx)(Vt,{expanded:o,setExpanded:i,handleChange:P}),Object(y.jsx)(ce,{stops:b,handleClose:function(){d(void 0)}})]})},oe=Object(p.a)((function(t){return{loadingContainer:{display:"flex",justifyContent:"center"}}})),ie=n(296),se=n(310),ue=n(307),le=n(158),be=n.n(le),je=n(159),de=n.n(je),he=n(160),fe=n.n(he),pe=n(164),Oe=n.n(pe),ge=n(163),xe=n.n(ge),me=n(161),ve=n.n(me),ke=n(162),Se=n.n(ke),Ce=n(165),ye=n.n(Ce),we=function(){var t=Object(a.useContext)(N),e=t.schemaVersion,n=t.versionMd5,c=t.updateTime,r=t.geoPermission,o=t.setGeoPermission,i=t.renewDb,s=t.resetUsageRecord,u=Object(a.useState)(!1),l=Object(C.a)(u,2),b=l[0],j=l[1],h=Object(a.useState)(!1),f=Object(C.a)(h,2),p=f[0],g=f[1],x=Object(a.useState)(!1),m=Object(C.a)(x,2),v=m[0],k=m[1],S=Object(O.a)(),w=S.t,I=S.i18n,E=Ie();return Object(a.useEffect)((function(){j(!1)}),[c]),Object(y.jsxs)(d.a,{className:E.root,children:[Object(y.jsxs)(P.a,{children:[Object(y.jsxs)(z.a,{button:!0,onClick:function(){j(!0),i()},children:[Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{children:Object(y.jsx)(be.a,{})})}),Object(y.jsx)(B.a,{primary:w("\u67b6\u69cb\u7248\u672c")+": "+e+" - "+n.substr(0,6),secondary:w("\u66f4\u65b0\u6642\u9593")+": "+U()(c).format("YYYY-MM-DD HH:mm:ss")})]}),Object(y.jsxs)(z.a,{button:!0,onClick:function(){"granted"===r?o("closed"):(o("opening"),navigator.geolocation.getCurrentPosition((function(t){o("granted")}),(function(){o("denied"),g(!0)})))},children:[Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{children:"granted"===r?Object(y.jsx)(de.a,{}):Object(y.jsx)(fe.a,{})})}),Object(y.jsx)(B.a,{primary:w("\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd"),secondary:w("granted"===r?"\u958b\u555f":"opening"===r?"\u958b\u555f\u4e2d...":"\u95dc\u9589")})]}),Object(y.jsxs)(z.a,{button:!0,onClick:function(){s()},children:[Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{children:Object(y.jsx)(ve.a,{})})}),Object(y.jsx)(B.a,{primary:w("\u4e00\u9375\u6e05\u7a7a\u7528\u6236\u8a18\u9304"),secondary:w("\u5305\u62ec\u9396\u5b9a\u548c\u5e38\u7528\u5831\u6642")})]}),Object(y.jsx)(W.a,{}),Object(y.jsxs)(z.a,{button:!0,component:"a",href:"https://github.com/chunlaw/hk-independent-bus-eta",target:"_blank",children:[Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{children:Object(y.jsx)(Se.a,{})})}),Object(y.jsx)(B.a,{primary:"Source Code",secondary:"GPL-3.0 License"})]}),Object(y.jsxs)(z.a,{children:[Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{children:Object(y.jsx)(xe.a,{})})}),Object(y.jsx)(B.a,{primary:w("\u4ea4\u901a\u8cc7\u6599\u4f86\u6e90"),secondary:w("\u8cc7\u6599\u4e00\u7dda\u901a")+"  https://data.gov.hk"})]}),Object(y.jsx)(W.a,{}),Object(y.jsxs)(z.a,{button:!0,component:"a",href:"https://donate.612fund.hk/".concat(I.language,"/"),target:"_blank",children:[Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{children:Object(y.jsx)(Oe.a,{})})}),Object(y.jsx)(B.a,{primary:w("\u6350\u6b3e\u652f\u6301"),secondary:w("\u8acb\u6350\u6b3e\u5230 612 \u4eba\u9053\u652f\u63f4\u57fa\u91d1")})]}),Object(y.jsxs)(z.a,{button:!0,onClick:function(){navigator.clipboard&&navigator.clipboard.writeText("".concat(window.location.hostname).concat("/hk-independent-bus-eta")).then((function(){k(!0)}))},children:[Object(y.jsx)(ie.a,{children:Object(y.jsx)(se.a,{children:Object(y.jsx)(ye.a,{})})}),Object(y.jsx)(B.a,{primary:w("\u8907\u88fd\u61c9\u7528\u7a0b\u5f0f\u93c8\u7d50"),secondary:w("\u7d93\u4e0d\u540c\u5a92\u4ecb\u5206\u4eab\u7d66\u89aa\u53cb")})]})]}),Object(y.jsx)(ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:b,message:w("\u8cc7\u6599\u66f4\u65b0\u4e2d")+"..."}),Object(y.jsx)(ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:p,autoHideDuration:1500,onClose:function(t,e){g(!1)},message:w("\u7121\u6cd5\u7372\u5f97\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd\u6b0a\u9650")}),Object(y.jsx)(ue.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:v,autoHideDuration:1500,onClose:function(t,e){k(!1)},message:w("\u93c8\u7d50\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f")})]})},Ie=Object(p.a)((function(t){return{root:{background:"white",height:"calc(100vh - 120px)"}}})),Ne=n(297),Ee=n(298),Te=n(166),Le=n.n(Te),Me=n(167),Re=n.n(Me),Pe=n(168),Fe=n.n(Pe),ze=n(169),Be=n.n(ze),We=function(){var t=Object(O.a)(),e=t.t,n=t.i18n,c=Object(u.h)(),r=Object(a.useContext)(N).selectedRoute;return Object(y.jsxs)(Ne.a,{value:c.pathname,showLabels:!0,children:[Object(y.jsx)(Ee.a,{label:e("\u5e38\u7528"),component:l.b,to:"/".concat(n.language),value:"/".concat(n.language),icon:Object(y.jsx)(Le.a,{})}),Object(y.jsx)(Ee.a,{label:e("\u641c\u5c0b"),component:l.b,to:"/".concat(n.language,"/search"),value:"/".concat(n.language,"/search"),icon:Object(y.jsx)(Re.a,{})}),Object(y.jsx)(Ee.a,{label:r.split("+")[0],component:l.b,to:"/".concat(n.language,"/route/").concat(r),value:"/".concat(n.language,"/route/").concat(r),icon:Object(y.jsx)(Fe.a,{})}),Object(y.jsx)(Ee.a,{label:e("\u8a2d\u5b9a"),component:l.b,to:"/".concat(n.language,"/settings"),value:"/".concat(n.language,"/settings"),icon:Object(y.jsx)(Be.a,{})})]})},qe=function(){var t=Object(u.j)().path;return Object(y.jsxs)(u.d,{children:[Object(y.jsx)(u.b,{path:"".concat(t,"/route/:id/:panel?"),children:Object(y.jsx)(re,{})}),Object(y.jsx)(u.b,{path:"".concat(t,"/settings"),children:Object(y.jsx)(we,{})}),Object(y.jsx)(u.b,{path:"".concat(t,"/search"),children:Object(y.jsx)(kt,{})}),Object(y.jsx)(u.b,{path:"".concat(t),children:Object(y.jsx)(Q,{})})]})},Je=function(){var t=Object(a.useContext)(N),e=t.routeList,n=t.stopList,c=Object(O.a)().t,r=De();return null==e||null==n?Object(y.jsxs)(b.a,{maxWidth:"xs",disableGutters:!0,className:r.loadingContainer,children:[Object(y.jsx)(j.a,{size:40}),Object(y.jsx)("br",{}),Object(y.jsx)("br",{}),Object(y.jsx)(d.a,{className:r.loadingTextContainer,elevation:0,children:null==n?Object(y.jsxs)(y.Fragment,{children:[Object(y.jsxs)(h.a,{variant:"subtitle2",align:"center",children:[c("\u521d\u59cb\u8a2d\u5b9a"),"..."]}),Object(y.jsxs)(h.a,{variant:"subtitle2",align:"center",children:[c("\u6b63\u5728\u66f4\u65b0\u5df4\u58eb\u8def\u7dda\u8cc7\u6599"),"..."]})]}):Object(y.jsx)(y.Fragment,{children:c("\u555f\u52d5\u4e2d")})})]}):Object(y.jsx)(i.a,{theme:Ae,children:Object(y.jsx)(b.a,{maxWidth:"xs",disableGutters:!0,className:r.container,children:Object(y.jsxs)(l.a,{children:[Object(y.jsx)(u.b,{exact:!0,path:"/",children:Object(y.jsx)(u.a,{to:"/zh/"})}),Object(y.jsxs)(u.b,{path:"/:lang",children:[Object(y.jsx)(f.a,{}),Object(y.jsx)(R,{}),Object(y.jsx)(qe,{}),Object(y.jsx)(We,{})]})]})})})},Ae=Object(s.a)({typography:{fontFamily:"Noto Sans TC, Chivo, sans-serif"},palette:{background:{default:"#ffff90"}}}),De=Object(p.a)((function(t){return{container:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"},loadingContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}})),He=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ue(t,e){navigator.serviceWorker.register(t).then((function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}})).catch((function(t){console.error("Error during service worker registration:",t)}))}var Ge=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,313)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;n(t),a(t),c(t),r(t),o(t)}))},_e=n(125),Ye=n(78),$e=n(170),Ve="en"===window.location.hash.substr(2,2)?"en":"zh";_e.a.use(Ye.e).init({resources:$e,whitelist:["en","zh"],lowerCaseLng:!0,lng:Ve,nsSeparator:!1,keySeparator:!1,debug:!1,interpolation:{escapeValue:!1}});_e.a;o.a.render(Object(y.jsx)(c.a.StrictMode,{children:Object(y.jsx)(I,{children:Object(y.jsx)(Je,{})})}),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("/hk-independent-bus-eta",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/hk-independent-bus-eta","/service-worker.js");He?(!function(t,e){fetch(t,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(t){t.unregister().then((function(){window.location.reload()}))})):Ue(t,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,t),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ue(e,t)}))}}(),Ge()}},[[252,1,2]]]);