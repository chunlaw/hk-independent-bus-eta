(this["webpackJsonphk-independent-bus-eta"]=this["webpackJsonphk-independent-bus-eta"]||[]).push([[0],{167:function(e){e.exports=JSON.parse('{"en":{"translation":{"kmb":"KMB","ctb":"CTB","nwfb":"NWFB","nlb":"NLB","\u521d\u59cb\u8a2d\u5b9a":"Initizaling","\u6b63\u5728\u66f4\u65b0\u5df4\u58eb\u8def\u7dda\u8cc7\u6599":"ppdating route database","\u7d04\u9700":"approx. ","\u555f\u52d5\u4e2d":"Launching","\u4ecb\u9762\u958b\u555f\u4e2d":"Panel opening","\u7c73":"m","\u79d2":"s","\u7531":"From","\u5f80":"To","\u5206\u9418":"min","\u5e38\u7528":"Home","\u641c\u5c0b":"Search","\u8a2d\u5b9a":"Settings","\u53d6\u6d88":"Clear","\u5df4\u58eb\u7dda":"Route","\u67b6\u69cb\u7248\u672c":"Schema Version","\u66f4\u65b0\u6642\u9593":"Last Update time","\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd":"Geolocation","\u958b\u555f":"On","\u958b\u555f\u4e2d...":"Switching...","\u95dc\u9589":"Off","\u7121\u6cd5\u7372\u5f97\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd\u6b0a\u9650":"Permission denied: Geolocation","\u4e00\u9375\u6e05\u7a7a\u7528\u6236\u8a18\u9304":"Clear Your Usage Records","\u5305\u62ec\u9396\u5b9a\u548c\u5e38\u7528\u5831\u6642":"Includes saved and common use ETA","\u4ea4\u901a\u8cc7\u6599\u4f86\u6e90":"ETA data source","\u8cc7\u6599\u4e00\u7dda\u901a":"DATA.GOV.HK","\u6350\u6b3e\u652f\u6301":"Donate Now","\u8acb\u6350\u6b3e\u5230 612 \u4eba\u9053\u652f\u63f4\u57fa\u91d1":"Please donate to 612 Humanitarian Relief Fund","\u8907\u88fd\u61c9\u7528\u7a0b\u5f0f\u93c8\u7d50":"Copy App URL","\u7d93\u4e0d\u540c\u5a92\u4ecb\u5206\u4eab\u7d66\u89aa\u53cb":"Share it!","\u8eca\u8cbb":"Fee"}},"zh":{"translation":{"kmb":"\u4e5d\u5df4","ctb":"\u57ce\u5df4","nwfb":"\u65b0\u5df4","nlb":"\u65b0\u5927\u5dbc\u5c71\u5df4"}}}')},180:function(e,t,n){},181:function(e,t,n){},257:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(15),r=n.n(o),i=(n(180),n(181),n(305)),s=n(307),l=n(19),u=n(47),b=n(304),j=n(289),d=n(258),p=n(80),g=n(306),h=n(285),f=n(314),O=n(8),x=n(283),m=n(311),v=n(310),C=n(286),w=n(5),k=n(7),S=n(58),y=function(e,t){var n=e.lat*Math.PI/180,a=t.lat*Math.PI/180,c=(t.lat-e.lat)*Math.PI/180,o=(t.lng-e.lng)*Math.PI/180,r=Math.sin(c/2)*Math.sin(c/2)+Math.cos(n)*Math.cos(a)*Math.sin(o/2)*Math.sin(o/2);return 6371e3*(2*Math.atan2(Math.sqrt(r),Math.sqrt(1-r)))},I=function(e){"vibrate"in navigator&&navigator.vibrate(e)},N=n(78),E=n(2),T=c.a.createContext(),L=function(e){var t=Object(a.useState)(localStorage.getItem("schemaVersion")),n=Object(k.a)(t,2),c=n[0],o=n[1],r=Object(a.useState)(localStorage.getItem("versionMd5")),i=Object(k.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(P(localStorage.getItem("routeList"))),b=Object(k.a)(u,2),j=b[0],d=b[1],p=Object(a.useState)(P(localStorage.getItem("stopList"))),g=Object(k.a)(p,2),h=g[0],f=g[1],O=Object(a.useState)(P(localStorage.getItem("stopMap"))),x=Object(k.a)(O,2),m=x[0],v=x[1],C=Object(a.useState)(parseInt(localStorage.getItem("updateTime"),10)),w=Object(k.a)(C,2),y=w[0],L=w[1],R=Object(a.useState)(""),M=Object(k.a)(R,2),B=M[0],F=M[1],D=Object(a.useState)("1+1+CHUK YUEN ESTATE+STAR FERRY"),W=Object(k.a)(D,2),A=W[0],J=W[1],q=Object(a.useState)(localStorage.getItem("geoPermission")),H=Object(k.a)(q,2),U=H[0],G=H[1],$=Object(a.useState)(JSON.parse(localStorage.getItem("geolocation"))||{lat:22.302711,lng:114.177216}),V=Object(k.a)($,2),Y=V[0],_=V[1],K=Object(a.useState)(null),X=Object(k.a)(K,2),Z=X[0],Q=X[1],ee=Object(a.useState)(JSON.parse(localStorage.getItem("hotRoute"))||{}),te=Object(k.a)(ee,2),ne=te[0],ae=te[1],ce=Object(a.useState)(JSON.parse(localStorage.getItem("savedEtas"))||[]),oe=Object(k.a)(ce,2),re=oe[0],ie=oe[1],se=Object(a.useState)([]),le=Object(k.a)(se,2),ue=le[0],be=le[1],je=function(){Object(S.fetchEtaObj)().then((function(e){var t=e.routeList,n=e.stopList,a=e.stopMap;d(t),f(n),v(a),L(Date.now())}))};Object(a.useEffect)((function(){if(Promise.all([fetch("/hk-independent-bus-eta/schema-version.txt").then((function(e){return e.text()})),Object(S.fetchEtaObjMd5)()]).then((function(e){var t=Object(k.a)(e,2),n=t[0],a=t[1],r=!1;c!==n&&(o(n),localStorage.setItem("schemaVersion",n),r=!0),s!==a&&(l(a),localStorage.setItem("versionMd5",a),r=!0),(r=r||null==j||null==h)&&je()})),"granted"===U){var e=navigator.geolocation.watchPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;_({lat:n,lng:a})}));Q(e)}return function(){Z&&navigator.geolocation.clearWatch(Z)}}),[]),Object(a.useEffect)((function(){if("granted"===U){var e=navigator.geolocation.watchPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;_({lat:n,lng:a})}));Q(e)}else Z&&(navigator.geolocation.clearWatch(Z),Q(null));localStorage.setItem("geoPermission",U)}),[U]),Object(a.useEffect)((function(){be(z(B,j))}),[B,j]),Object(a.useEffect)((function(){localStorage.setItem("savedEtas",JSON.stringify(re))}),[re]),Object(a.useEffect)((function(){localStorage.setItem("stopList",Object(N.compressToBase64)(JSON.stringify(h)))}),[h]),Object(a.useEffect)((function(){localStorage.setItem("stopMap",Object(N.compressToBase64)(JSON.stringify(m)))}),[m]),Object(a.useEffect)((function(){localStorage.setItem("routeList",Object(N.compressToBase64)(JSON.stringify(j)))}),[j]),Object(a.useEffect)((function(){localStorage.setItem("updateTime",y)}),[y]),Object(a.useEffect)((function(){localStorage.setItem("geolocation",JSON.stringify(Y))}),[Y]);return Object(E.jsx)(T.Provider,{value:{AppTitle:"\u5df4\u58eb\u5230\u7ad9\u9810\u5831 App",routeList:j,stopList:h,stopMap:m,setRouteList:d,setStopList:f,searchRoute:B,setSearchRoute:F,updateSearchRouteByButton:function(e){I(1),setTimeout((function(){switch(e){case"b":F((function(e){return e.slice(0,-1)}));break;case"-":F("");break;default:F((function(t){return t+e}))}}),0)},selectedRoute:A,updateSelectedRoute:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";J("".concat(e,"/").concat(t)),t&&ae((function(n){return n[e+"/"+t]=ne[e+"/"+t]?ne[e+"/"+t]+1:1,localStorage.setItem("hotRoute",JSON.stringify(n)),n}))},possibleChar:ue,hotRoute:ne,geolocation:Y,setGeolocation:_,savedEtas:re,updateSavedEtas:function(e){ie((function(t){return t.includes(e)?t.filter((function(t){return t!==e})):t.concat(e)}))},resetUsageRecord:function(){ae({}),_({lat:22.302711,lng:114.177216}),ie([])},renewDb:je,schemaVersion:c,versionMd5:s,updateTime:y,geoPermission:U,setGeoPermission:G},children:e.children})},R=T,z=function(e,t){if(null==t)return[];var n={};return Object.entries(t).forEach((function(t){if(t[0].startsWith(e.toUpperCase())){var a=t[0].slice(e.length,e.length+1);n[a]=isNaN(n[a])?1:n[a]+1}})),Object.entries(n).map((function(e){return e[0]})).filter((function(e){return"+"!==e}))},P=function(e){var t=Object(N.decompressFromBase64)(e);return t&&t.length?JSON.parse(t):null},M=Object(h.a)((function(e){return{toolbar:{"& a":{color:"black",textDecoration:"none"},display:"flex",justifyContent:"space-between",zIndex:2*e.zIndex.drawer},searchRouteInput:{maxWidth:"50px","& input":{textAlign:"center"}}}})),B=Object(w.a)({root:{borderBottom:"none",minHeight:24},indicator:{backgroundColor:"transparent"}})(v.a),F=Object(w.a)((function(e){return{root:{textTransform:"none",minWidth:36,fontWeight:900,marginRight:e.spacing(0),fontSize:"15px",opacity:1,padding:"6px 6px"},selected:{"& > .MuiTab-wrapper":{color:"#3B3C45",backgroundColor:"#FEFBFA"}},wrapper:{color:"#3B3C45",borderRadius:"30px",padding:"2px 10px 0px 10px"}}}))((function(e){return Object(E.jsx)(C.a,Object(O.a)({disableRipple:!0},e))})),D=function(e){var t=Object(a.useContext)(R),n=t.searchRoute,c=t.setSearchRoute,o=Object(l.j)().path,r=Object(f.a)(),i=r.t,s=r.i18n,u=M(),b=Object(l.h)(),j=Object(l.g)();return Object(E.jsxs)(x.a,{className:u.toolbar,children:[Object(E.jsx)("div",{onClick:function(){I(1),j.push("/".concat(s.language,"/search"))},children:Object(E.jsx)(p.a,{variant:"subtitle2",children:"\u7368\u7acb\u5df4\u58eb\u9810\u5831"})}),Object(E.jsx)(m.a,{className:u.searchRouteInput,type:"text",value:n,placeholder:i("\u5df4\u58eb\u7dda"),onChange:function(e){return c(e.target.value)},onFocus:function(e){I(1),function(){var e,t=!1;return e=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0),t}()&&document.activeElement.blur(),j.replace("/".concat(s.language,"/search"))},disabled:o.includes("route")}),Object(E.jsxs)(B,{value:s.language,onChange:function(e,t){return n=t,I(1),j.replace(b.pathname.replace("/"+s.language+"/","/"+n+"/")),void s.changeLanguage(n);var n},children:[Object(E.jsx)(F,{value:"en",label:"En"}),Object(E.jsx)(F,{value:"zh",label:"\u7e41"})]})]})},W=n(291),A=n(287),J=n(288),q=n(290),H=function(e){var t=e.name,n=e.location,c=e.fares,o=e.faresHoliday,r=e.seq,i=Object(f.a)().t,s=Object(a.useContext)(R),l=s.geoPermission,u=s.geolocation,b=[c&&c[r]?"$"+c[r]:"",o&&o[r]?"$"+o[r]:""].filter((function(e){return e})).join(", ");return"granted"!==l?t+"\u3000"+(b?"("+b+")":""):t+" - "+y(n,u).toFixed(0)+i("\u7c73")+"\u3000"+(b?"("+b+")":"")},U=function(e){var t=e.routeId,n=Object(f.a)(),c=n.t,o=n.i18n,r=Object(a.useContext)(R),i=r.routeList,s=r.stopList,u=t.split("+"),b=Object(k.a)(u,2),d=b[0],p=b[1],g=t.split("/"),h=Object(k.a)(g,2),O=h[0],x=h[1],m=i[O],v=m.co,C=m.stops,w=m.dest,y=m.bound,N=m.nlbId,T=m.fares,L=m.faresHoliday,z=s[C[v[0]]?C[v[0]][parseInt(x,10)]:null],P=Object(a.useState)(null),M=Object(k.a)(P,2),B=M[0],F=M[1],D=G();Object(a.useEffect)((function(){var e=!0,t=function(){return Object(S.fetchEtas)({route:d,routeStops:C,seq:parseInt(x,10),bound:y,serviceType:p,co:v,nlbId:N}).then((function(t){e&&F(t)}))},n=setInterval((function(){t()}),3e4);return t(),function(){e=!1,clearInterval(n)}}),[]);var W=function(e){if(e){var t=Math.round((new Date(e.eta)-new Date)/60/1e3);return t<1?"- "+c("\u5206\u9418"):Number.isInteger(t)?t+" "+c("\u5206\u9418"):e.remark[o.language]}return""},U=Object(l.g)();return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(A.a,{button:!0,onClick:function(){I(1),setTimeout((function(){U.push("/".concat(o.language,"/route/").concat(t))}),0)},className:D.listItem,children:[Object(E.jsx)(J.a,{primary:d,className:D.route}),z?Object(E.jsx)(J.a,{primary:c("\u5f80")+" "+w[o.language],secondary:Object(E.jsx)(H,{name:z.name[o.language],location:z.location,fares:T,faresHoliday:L,seq:parseInt(x,10)}),className:D.routeDest}):Object(E.jsx)(j.a,{size:15}),Object(E.jsx)(J.a,{primary:B?W(B[0]):"",secondary:B?W(B[1]):"",className:D.routeEta})]}),Object(E.jsx)(q.a,{})]})},G=Object(h.a)((function(e){return{listItem:{padding:"4px 16px"},route:{width:"15%"},routeDest:{width:"65%"},routeEta:{width:"20%"}}})),$=function(){var e=Object(a.useContext)(R),t=e.hotRoute,n=e.savedEtas,c=e.routeList,o=e.stopList,r=Object(a.useState)(n.concat(Object.entries(t).filter((function(e){var t=Object(k.a)(e,2);t[0];return t[1]>5})).sort((function(e,t){return t[1]-e[1]})).map((function(e){return Object(k.a)(e,1)[0]}))).filter((function(e,t,n){return n.indexOf(e)===t})).slice(0,20)),i=Object(k.a)(r,2),s=i[0],l=i[1],u=Object(a.useState)(!1),b=Object(k.a)(u,2),p=b[0],g=b[1];Object(a.useEffect)((function(){var e=!0,t=JSON.parse(localStorage.getItem("geolocation"));return Object.entries(o).map((function(e){return e.concat(y(e[1].location,t))})).filter((function(e){return e[2]<1e3})).sort((function(e,t){return e[2]-t[2]})).slice(0,5).forEach((function(t){var n=Object(k.a)(t,1)[0],a=[];Object.entries(c).forEach((function(e){var t=Object(k.a)(e,2),c=t[0],o=t[1];["kmb","nwfb","ctb"].forEach((function(e){o.stops[e]&&o.stops[e].includes(n)&&a.push(c+"/"+o.stops[e].indexOf(n))}))})),e&&l((function(e){return e.concat(a.map((function(e){return g(!0),e}))).filter((function(e,t,n){return n.indexOf(e)===t})).slice(0,20)}))})),function(){e=!1}}),[]);var h=V();return Object(E.jsxs)(d.a,{className:h.root,children:[Object(E.jsx)(W.a,{className:h.list,children:s.map((function(e){return Object(E.jsx)(U,{routeId:e},e)}))}),p?Object(E.jsx)(E.Fragment,{}):Object(E.jsx)(j.a,{size:20})]})},V=Object(h.a)((function(e){return{root:{background:"white",height:"calc(100vh - 120px)",overflowY:"scroll",textAlign:"center"}}})),Y=n(101),_=n(44),K=n(292),X=n(293),Z=n(308),Q=n(262),ee=n(149),te=n.n(ee),ne=function(e){var t=e.k,n=e.handleClick,a=e.disabled,c=void 0!==a&&a,o=e.className,r=re(),i=Object(f.a)().t;return Object(E.jsx)(K.a,{size:"large",variant:"contained",className:"".concat(r.button," ").concat(o),onClick:function(){return n(t)},disabled:c,children:"b"===t?Object(E.jsx)(te.a,{}):"-"===t?Object(E.jsx)("div",{className:r.cancelButton,children:i("\u53d6\u6d88")}):t})},ae=function(){var e=Object(a.useContext)(R),t=e.searchRoute,n=e.updateSearchRouteByButton,c=e.possibleChar;return Object(E.jsx)(X.a,{container:!0,spacing:0,children:"789456123-0b".split("").map((function(e){return Object(E.jsx)(X.a,{item:!0,xs:4,children:Object(E.jsx)(ne,{k:e,handleClick:n,disabled:"b"===e&&""===t||!"b-".includes(e)&&!c.includes(e)||"-"===e&&""===t})},"input-"+e)}))})},ce=function(){var e=Object(a.useContext)(R),t=e.updateSearchRouteByButton,n=e.possibleChar,c=re();return Object(E.jsx)(X.a,{container:!0,spacing:1,children:n.filter((function(e){return isNaN(e)})).map((function(e){return Object(E.jsx)(X.a,{item:!0,xs:12,children:Object(E.jsx)(ne,{k:e,handleClick:t,className:c.alphabetButton})},"input-"+e)}))})},oe=function(){var e=re();return Object(E.jsxs)(Z.a,{className:e.boxContainer,padding:0,children:[Object(E.jsx)(Z.a,{className:e.numPadContainer,padding:0,children:Object(E.jsx)(ae,{})}),Object(E.jsx)(Z.a,{className:e.alphabetPadContainer,padding:0,children:Object(E.jsx)(ce,{})})]})},re=Object(Q.a)((function(e){return{boxContainer:{display:"flex",flexDirection:"row",height:"calc(100vh - 330px - 112px)",paddingTop:"calc(50vh - 165px - 56px - 88px)",paddingBottom:"calc(50vh - 165px - 56px - 88px)",justifyContent:"space-around"},numPadContainer:{width:"60%"},alphabetPadContainer:{width:"20%",height:"176px",overflowX:"hidden",overflowY:"scroll"},button:{width:"100%",height:"44px",fontSize:"1.2em",borderRadius:"unset"},cancelButton:{fontSize:"0.8em"},alphabetButton:{height:"42px"}}})),ie=n(294),se=n(295),le=n(296),ue=function(e){var t=e.route,n=Object(f.a)(),a=n.t,c=n.i18n;return Object(E.jsx)(E.Fragment,{children:t.nlbId?Object(E.jsxs)(p.a,{variant:"subtitle2",display:"inline",children:[a("\u5f80")," ",t.dest[c.language]," ",a("\u7531")+" "+t.orig[c.language]]}):Object(E.jsxs)(p.a,{variant:"subtitle2",display:"inline",children:[a("\u5f80")," ",t.dest[c.language]]})})},be=c.a.memo((function(e){var t=e.data,n=e.index,a=e.style,c=Object(f.a)(),o=c.t,r=c.i18n,i=t.routeList[n],s=i[0].split("+").slice(0,2),u=Object(k.a)(s,2),b=u[0],j=u[1],d=je(),g=Object(l.g)();return Object(E.jsx)("div",{onClick:function(){I(1),setTimeout((function(){g.push("/"+r.language+"/route/"+i[0])}),0)},children:Object(E.jsx)(ie.a,{variant:"outlined",style:a,square:!0,children:Object(E.jsx)(se.a,{children:Object(E.jsxs)(le.a,{className:d.cardContent,children:[Object(E.jsx)(p.a,{variant:"h5",display:"inline",children:b}),Object(E.jsxs)(p.a,{variant:"caption",children:[" - ",i[1].co.map((function(e){return o(e)})).join("+")]}),Object(E.jsx)("br",{}),Object(E.jsx)(ue,{route:i[1]}),Object(E.jsx)(p.a,{variant:"caption",children:j>=2?o("\u7279\u5225\u73ed\u6b21"):"\u3000"})]})})},i[0])})}),Y.b),je=Object(h.a)((function(e){return{cardContent:{padding:"8px 16px"}}})),de=Object(_.a)((function(e){return{routeList:e}})),pe=function(){var e=Object(a.useContext)(R),t=e.routeList,n=e.searchRoute,c=Object.entries(t).filter((function(e){var t=Object(k.a)(e,2),a=t[0],c=t[1],o=c.stops,r=c.co;return a.startsWith(n.toUpperCase())&&(null==o[r[0]]||o[r[0]].length>0)})),o=de(c);return Object(E.jsx)(Y.a,{height:330,itemCount:c.length,itemSize:69,width:"100%",itemData:o,children:be})},ge=function(){return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(pe,{}),Object(E.jsx)(oe,{})]})},he=n(66),fe=n(140),Oe=n(141),xe=n(143),me=n(142),ve=n(150),Ce=n.n(ve),we=n(152),ke=n.n(we),Se=function(e){var t=e.center;e.zoom;return Object(he.a)().flyTo(Ee(t)),Object(E.jsx)(E.Fragment,{})},ye=function(){var e=Object(a.useContext)(R),t=e.geolocation;return"granted"!==e.geoPermission?null:Object(E.jsx)(fe.a,{center:Ee(t),radius:25})},Ie=function(e){var t=e.onClick,n=Re();return Object(E.jsx)("div",{className:"leaflet-bottom leaflet-right",children:Object(E.jsx)("div",{className:"".concat(n.centerControlContainer," leaflet-control leaflet-bar"),onClick:t,children:Object(E.jsx)(ke.a,{className:n.centerControl})})})},Ne=function(e){var t=e.stops,n=e.stopIdx,c=e.onMarkerClick,o=Object(a.useContext)(R),r=o.stopList,i=o.geoPermission,s=o.setGeoPermission,l=o.setGeolocation,u=Re(),b=Object(a.useState)(r[t[n]]?r[t[n]].location:{}),j=Object(k.a)(b,2),d=j[0],p=j[1],g=Object(a.useState)(null),h=Object(k.a)(g,2),f=h[0],O=h[1];Object(a.useEffect)((function(){p(r[t[n]]?r[t[n]].location:r[t[Math.round(t.length/2)]].location)}),[n]);var x=function(e){p(f.getCenter())};return Object(a.useEffect)((function(){if(f)return f.on("dragend",x),function(){f.off("dragend",x)}}),[f]),Object(E.jsx)(Z.a,{className:"".concat(u.mapContainer),children:Object(E.jsxs)(Oe.a,{center:Ee(d),zoom:16,scrollWheelZoom:!1,className:u.mapContainer,whenCreated:O,children:[Object(E.jsx)(Se,{center:Ee(d),zoom:16}),Object(E.jsx)(xe.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors \xa9 <a href="https://carto.com/attributions">CARTO</a>',url:"https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"}),t.map((function(e,t,a){return Object(E.jsx)(Ce.a,{position:r[e].location,icon:Object(E.jsx)(Le,{active:t===n,passed:t<n}),eventHandlers:{click:function(e){c(t)(e,!0,!0)}}},"".concat(e,"-").concat(t))})),t.slice(1).map((function(e,n){return Object(E.jsx)(me.a,{positions:[Te(r[t[n]].location),Te(r[e].location)],color:"#FF9090"},"".concat(e,"-line"))})),Object(E.jsx)(ye,{}),Object(E.jsx)(Ie,{onClick:function(){"granted"===i?p(Ee(JSON.parse(localStorage.getItem("geolocation")))):"denied"!==i&&navigator.geolocation.getCurrentPosition((function(e){var t=e.coords,n=t.latitude,a=t.longitude;l({lat:n,lng:a}),p({lat:n,lng:a}),s("granted")}))}})]})})},Ee=function(e){return e&&"number"===typeof e.lat&&isFinite(e.lat)&&"number"===typeof e.lng&&isFinite(e.lng)?e:{lat:22.302711,lng:114.177216}},Te=function(e){return[e.lat,e.lng]},Le=function(e){var t=e.active,n=e.passed,a=Re();return Object(E.jsx)("img",{src:"https://unpkg.com/leaflet@1.0.1/dist/images/marker-icon.png",alt:"",tabIndex:"0",className:"".concat(a.marker," ").concat(t?a.active:""),style:{filter:n?"grayscale(100%)":"hue-rotate(130deg)"}})},Re=Object(h.a)((function(e){return{mapContainer:{height:"30vh"},centerControl:{padding:"5px"},centerControlContainer:{background:"white",height:"28px",marginBottom:"20px !important",marginRight:"5px !important"},marker:{marginLeft:"38px",marginTop:"-14px",width:"25px",height:"41px",zIndex:618,outline:"none"},active:{animation:"$blinker 2s linear infinite"},"@keyframes blinker":{"50%":{opacity:.3}}}})),ze=n(261),Pe=n(313),Me=n(297),Be=n(298),Fe=n(153),De=n.n(Fe),We=n(154),Ae=n.n(We),Je=function(e){var t=e.route,n=e.routeStops,c=e.seq,o=e.bound,r=e.serviceType,i=e.co,s=e.nlbId,l=Object(f.a)(),u=l.t,b=l.i18n,d=Object(a.useState)(null),g=Object(k.a)(d,2),h=g[0],O=g[1];if(Object(a.useEffect)((function(){var e=!0,a=function(){Object(S.fetchEtas)({route:t,routeStops:n,seq:c,bound:o,serviceType:r,co:i,nlbId:s}).then((function(t){e&&O(t)}))};a();var l=setInterval((function(){a()}),3e4);return function(){e=!1,clearInterval(l)}}),[]),null==h)return Object(E.jsx)(j.a,{size:20,style:{}});var x=function(e){if(""===e)return"";var t=Math.round((new Date(e)-new Date)/60/1e3);return t<1?"- "+u("\u5206\u9418"):Number.isInteger(t)?t+" "+u("\u5206\u9418"):void 0};return Object(E.jsx)("div",{children:0===h.length?u("\u672a\u6709\u73ed\u6b21\u8cc7\u6599"):h.map((function(e,t){return Object(E.jsxs)(p.a,{variant:"subtitle1",children:[x(e.eta)," - ",e.remark[b.language]?e.remark[b.language]:""," ",u(e.co)]},"route-".concat(t))}))})},qe=function(e){var t=e.expanded,n=e.setExpanded,c=e.handleChange,o=Object(l.i)(),r=o.id,i=o.panel,s=Object(a.useContext)(R),u=s.routeList,b=s.stopList,j=s.savedEtas,d=s.geoPermission,g=s.updateSavedEtas,h=u[r],O=h.route,x=h.serviceType,m=h.bound,v=h.stops,C=h.co,w=h.fares,k=h.faresHoliday,S=h.nlbId,I=Object(f.a)(),N=I.t,T=I.i18n,L=Object(a.useRef)([]);Object(a.useEffect)((function(){!1!==t&&L.current[t]&&L.current[t].scrollIntoView({behavior:"smooth",block:"center"})}),[t]),Object(a.useEffect)((function(){!function(){if(parseInt(i,10)&&L.current[parseInt(i,10)])n(parseInt(i,10));else if("granted"===d){var e=JSON.parse(localStorage.getItem("geolocation")),t=v[C[0]].map((function(t,n){return[t,n,y(e,b[t].location)]})).sort((function(e,t){return e[2]-t[2]}))[0];if(t){var a=t[1];n(a)}}}()}),[]);var z=$e();return Object(E.jsx)(Z.a,{className:z.boxContainer,children:v[C[0]].map((function(e,n){return Object(E.jsxs)(He,{expanded:t===n,onChange:c(n),TransitionProps:{unmountOnExit:!0},ref:function(e){L.current[n]=e},children:[Object(E.jsxs)(Ue,{children:[Object(E.jsx)(p.a,{variant:"body1",children:b[e].name[T.language]}),Object(E.jsxs)(p.a,{variant:"caption",children:[w&&w[n]?N("\u8eca\u8cbb")+": $"+w[n]:"",k&&k[n]?"\u3000\u3000\u3000\u3000"+N("\u5047\u65e5\u8eca\u8cbb")+": $"+k[n]:""]})]}),Object(E.jsxs)(Ge,{children:[Object(E.jsx)(Je,{route:O,seq:n,routeStops:v,serviceType:x,bound:m,co:C,nlbId:S}),Object(E.jsx)(ze.a,{"aria-label":"favourite",onClick:function(){return e="".concat(r,"/").concat(n),g(e);var e},style:{backgroundColor:"transparent"},children:j.includes("".concat(r,"/").concat(n))?Object(E.jsx)(De.a,{}):Object(E.jsx)(Ae.a,{})})]})]},"stop-"+n)}))})},He=Object(w.a)({root:{border:"1px solid rgba(0, 0, 0, .125)",boxShadow:"none","&:not(:last-child)":{borderBottom:0},"&:before":{display:"none"},"&$expanded":{margin:"auto"}},expanded:{}})(Pe.a),Ue=Object(w.a)({root:{backgroundColor:"rgba(0, 0, 0, .03)",borderBottom:"1px solid rgba(0, 0, 0, .125)",marginBottom:-1,minHeight:44,"&$expanded":{minHeight:44}},content:{"&$expanded":{margin:"8px 0"},margin:"8px 0",flexDirection:"column"},expanded:{}})(Me.a),Ge=Object(w.a)((function(e){return{root:{padding:e.spacing(2),paddingTop:e.spacing(1),paddingBottom:e.spacing(1),justifyContent:"space-between"}}}))(Be.a),$e=Object(h.a)((function(e){return{boxContainer:{overflowY:"scroll"},loadingContainer:{display:"flex",justifyContent:"center"}}})),Ve=n(309),Ye=n(299),_e=n(300),Ke=Object(h.a)((function(e){return{dialog:{"& .MuiPaper-root":{width:"100%",marginTop:"90px",height:"calc(100vh - 100px)"}},title:{background:"#ffff90"}}})),Xe=function(e){var t=e.open,n=e.stops,c=e.handleClose,o=Object(a.useContext)(R),r=o.routeList,i=o.stopList,s=Object(f.a)().i18n,l=Object(a.useState)([]),u=Object(k.a)(l,2),b=u[0],j=u[1],d=Ke();return Object(a.useEffect)((function(){if(void 0!==n){var e=[];Object.entries(r).forEach((function(t){var a=Object(k.a)(t,2),c=a[0],o=a[1];n.some((function(t){var n=Object(k.a)(t,2),a=n[0],r=n[1];return!(!o.stops[a]||!o.stops[a].includes(r))&&(e.push(c+"/"+o.stops[a].indexOf(r)),!0)}))})),j(e)}else j([])}),[n]),Object(E.jsxs)(Ve.a,{open:t,onClose:c,className:d.dialog,children:[Object(E.jsx)(Ye.a,{className:d.title,children:i[n[0][1]].name[s.language]}),Object(E.jsx)(_e.a,{children:Object(E.jsx)(W.a,{children:b.map((function(e){return Object(E.jsx)(U,{routeId:e},e)}))})})]})},Ze=function(){var e=Object(l.i)(),t=e.id,n=e.panel,c=Object(a.useContext)(R),o=c.routeList,r=c.stopMap,i=c.updateSelectedRoute,s=o[t],u=s.route,b=s.stops,d=s.co,g=s.orig,h=s.dest,O=s.nlbId,x=Object(a.useState)(parseInt(n,10)),m=Object(k.a)(x,2),v=m[0],C=m[1],w=Object(a.useState)(!1),S=Object(k.a)(w,2),y=S[0],I=S[1],N=Object(a.useState)([[d[0],b[d[0]][0]]].concat(r[b[d[0]][0]]||[])),T=Object(k.a)(N,2),L=T[0],z=T[1],P=Object(f.a)(),M=P.t,B=P.i18n,F=Object(l.g)(),D=function(e){return function(n,a,c){C(!!a&&e),z([[d[0],b[d[0]][e]]].concat(r[b[d[0]][e]]||[])),a&&F.replace("/".concat(B.language,"/route/").concat(t,"/").concat(e))}};Object(a.useEffect)((function(){I(!1),n&&C(parseInt(n,10))}),[u]),Object(a.useEffect)((function(){i(t)}),[]);var W=Qe();return null==b[d[0]]?Object(E.jsx)(Z.a,{className:W.loadingContainer,children:Object(E.jsx)(j.a,{size:30})}):0===b[d[0]].length?Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(p.a,{variant:"h5",align:"center",children:M("\u8def\u7dda\u4e0d\u5b58\u5728")})}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(p.a,{variant:"subtitle1",align:"center",children:u}),Object(E.jsxs)(p.a,{variant:"caption",align:"center",children:[M("\u5f80")," ",h[B.language]," ",O?M("\u7531")+" "+g[B.language]:""]}),Object(E.jsx)(Ne,{stops:b[d[0]],stopIdx:v,onMarkerClick:function(e){return v===e&&I(!0),D(e)}}),Object(E.jsx)(qe,{expanded:v,setExpanded:C,handleChange:D}),Object(E.jsx)(Xe,{open:y,stops:L,handleClose:function(){I(!1)}})]})},Qe=Object(h.a)((function(e){return{loadingContainer:{display:"flex",justifyContent:"center"}}})),et=n(301),tt=n(315),nt=n(312),at=n(155),ct=n.n(at),ot=n(156),rt=n.n(ot),it=n(157),st=n.n(it),lt=n(161),ut=n.n(lt),bt=n(160),jt=n.n(bt),dt=n(158),pt=n.n(dt),gt=n(159),ht=n.n(gt),ft=n(162),Ot=n.n(ft),xt=function(){var e=Object(a.useContext)(R),t=e.schemaVersion,n=e.versionMd5,c=e.updateTime,o=e.geoPermission,r=e.setGeoPermission,i=e.renewDb,s=e.resetUsageRecord,l=Object(a.useState)(!1),u=Object(k.a)(l,2),b=u[0],j=u[1],p=Object(a.useState)(!1),g=Object(k.a)(p,2),h=g[0],O=g[1],x=Object(a.useState)(!1),m=Object(k.a)(x,2),v=m[0],C=m[1],w=Object(f.a)(),S=w.t,y=w.i18n,N=mt();return Object(a.useEffect)((function(){j(!1)}),[c]),Object(E.jsxs)(d.a,{className:N.root,children:[Object(E.jsxs)(W.a,{children:[Object(E.jsxs)(A.a,{button:!0,onClick:function(){I(1),j(!0),i()},children:[Object(E.jsx)(et.a,{children:Object(E.jsx)(tt.a,{children:Object(E.jsx)(ct.a,{})})}),Object(E.jsx)(J.a,{primary:S("\u67b6\u69cb\u7248\u672c")+": "+t+" - "+n.substr(0,6),secondary:S("\u66f4\u65b0\u6642\u9593")+": "+new Date(c).toLocaleString().slice(0,20).replace(","," ")})]}),Object(E.jsxs)(A.a,{button:!0,onClick:function(){I(1),"granted"===o?r("closed"):(r("opening"),navigator.geolocation.getCurrentPosition((function(e){r("granted")}),(function(){r("denied"),O(!0)})))},children:[Object(E.jsx)(et.a,{children:Object(E.jsx)(tt.a,{children:"granted"===o?Object(E.jsx)(rt.a,{}):Object(E.jsx)(st.a,{})})}),Object(E.jsx)(J.a,{primary:S("\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd"),secondary:S("granted"===o?"\u958b\u555f":"opening"===o?"\u958b\u555f\u4e2d...":"\u95dc\u9589")})]}),Object(E.jsxs)(A.a,{button:!0,onClick:function(){I(1),s()},children:[Object(E.jsx)(et.a,{children:Object(E.jsx)(tt.a,{children:Object(E.jsx)(pt.a,{})})}),Object(E.jsx)(J.a,{primary:S("\u4e00\u9375\u6e05\u7a7a\u7528\u6236\u8a18\u9304"),secondary:S("\u5305\u62ec\u9396\u5b9a\u548c\u5e38\u7528\u5831\u6642")})]}),Object(E.jsx)(q.a,{}),Object(E.jsxs)(A.a,{button:!0,component:"a",href:"https://github.com/chunlaw/hk-independent-bus-eta",target:"_blank",onClick:function(){I(1)},children:[Object(E.jsx)(et.a,{children:Object(E.jsx)(tt.a,{children:Object(E.jsx)(ht.a,{})})}),Object(E.jsx)(J.a,{primary:"Source Code",secondary:"GPL-3.0 License"})]}),Object(E.jsxs)(A.a,{children:[Object(E.jsx)(et.a,{children:Object(E.jsx)(tt.a,{children:Object(E.jsx)(jt.a,{})})}),Object(E.jsx)(J.a,{primary:S("\u4ea4\u901a\u8cc7\u6599\u4f86\u6e90"),secondary:S("\u8cc7\u6599\u4e00\u7dda\u901a")+"  https://data.gov.hk"})]}),Object(E.jsx)(q.a,{}),Object(E.jsxs)(A.a,{button:!0,component:"a",href:"https://donate.612fund.hk/".concat(y.language,"/"),target:"_blank",onClick:function(){I(1)},children:[Object(E.jsx)(et.a,{children:Object(E.jsx)(tt.a,{children:Object(E.jsx)(ut.a,{})})}),Object(E.jsx)(J.a,{primary:S("\u6350\u6b3e\u652f\u6301"),secondary:S("\u8acb\u6350\u6b3e\u5230 612 \u4eba\u9053\u652f\u63f4\u57fa\u91d1")})]}),Object(E.jsxs)(A.a,{button:!0,onClick:function(){I(1),navigator.clipboard&&navigator.clipboard.writeText("".concat(window.location.hostname).concat("/hk-independent-bus-eta")).then((function(){C(!0)}))},children:[Object(E.jsx)(et.a,{children:Object(E.jsx)(tt.a,{children:Object(E.jsx)(Ot.a,{})})}),Object(E.jsx)(J.a,{primary:S("\u8907\u88fd\u61c9\u7528\u7a0b\u5f0f\u93c8\u7d50"),secondary:S("\u7d93\u4e0d\u540c\u5a92\u4ecb\u5206\u4eab\u7d66\u89aa\u53cb")})]})]}),Object(E.jsx)(nt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:b,message:S("\u8cc7\u6599\u66f4\u65b0\u4e2d")+"..."}),Object(E.jsx)(nt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:h,autoHideDuration:1500,onClose:function(e,t){O(!1)},message:S("\u7121\u6cd5\u7372\u5f97\u5730\u7406\u4f4d\u7f6e\u5b9a\u4f4d\u529f\u80fd\u6b0a\u9650")}),Object(E.jsx)(nt.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:v,autoHideDuration:1500,onClose:function(e,t){C(!1)},message:S("\u93c8\u7d50\u5df2\u8907\u88fd\u5230\u526a\u8cbc\u7c3f")})]})},mt=Object(h.a)((function(e){return{root:{background:"white",height:"calc(100vh - 120px)"}}})),vt=n(302),Ct=n(303),wt=n(163),kt=n.n(wt),St=n(164),yt=n.n(St),It=n(165),Nt=n.n(It),Et=n(166),Tt=n.n(Et),Lt=function(){var e=Object(f.a)(),t=e.t,n=e.i18n,c=Object(l.h)(),o=Object(a.useContext)(R).selectedRoute,r=Rt(),i=Object(l.g)(),s=function(e){I(1),setTimeout((function(){return i.push(e)}),0)};return Object(E.jsxs)(vt.a,{value:c.pathname,showLabels:!0,className:r.root,children:[Object(E.jsx)(Ct.a,{label:t("\u5e38\u7528"),onClick:function(){return s("/".concat(n.language))},value:"/".concat(n.language),icon:Object(E.jsx)(kt.a,{})}),Object(E.jsx)(Ct.a,{label:t("\u641c\u5c0b"),onClick:function(){return s("/".concat(n.language,"/search"))},value:"/".concat(n.language,"/search"),icon:Object(E.jsx)(yt.a,{})}),Object(E.jsx)(Ct.a,{label:o.split("+")[0],onClick:function(){return s("/".concat(n.language,"/route/").concat(o))},value:"/".concat(n.language,"/route/").concat(o),icon:Object(E.jsx)(Nt.a,{})}),Object(E.jsx)(Ct.a,{label:t("\u8a2d\u5b9a"),onClick:function(){return s("/".concat(n.language,"/settings"))},value:"/".concat(n.language,"/settings"),icon:Object(E.jsx)(Tt.a,{})})]})},Rt=Object(h.a)((function(e){return{root:{position:"sticky",bottom:"0"}}})),zt=function(){var e=Object(l.j)().path;return Object(E.jsxs)(l.d,{children:[Object(E.jsx)(l.b,{path:"".concat(e,"/route/:id/:panel?"),children:Object(E.jsx)(Ze,{})}),Object(E.jsx)(l.b,{path:"".concat(e,"/settings"),children:Object(E.jsx)(xt,{})}),Object(E.jsx)(l.b,{path:"".concat(e,"/search"),children:Object(E.jsx)(ge,{})}),Object(E.jsx)(l.b,{path:"".concat(e),children:Object(E.jsx)($,{})})]})},Pt=function(){var e=Object(a.useContext)(R),t=e.routeList,n=e.stopList,c=Object(f.a)().t,o=Bt();return null==t||null==n?Object(E.jsxs)(b.a,{maxWidth:"xs",disableGutters:!0,className:o.loadingContainer,children:[Object(E.jsx)(j.a,{size:40}),Object(E.jsx)("br",{}),Object(E.jsx)("br",{}),Object(E.jsx)(d.a,{className:o.loadingTextContainer,elevation:0,children:null==n?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsxs)(p.a,{variant:"subtitle2",align:"center",children:[c("\u521d\u59cb\u8a2d\u5b9a"),"..."]}),Object(E.jsxs)(p.a,{variant:"subtitle2",align:"center",children:[c("\u6b63\u5728\u66f4\u65b0\u5df4\u58eb\u8def\u7dda\u8cc7\u6599"),"..."]})]}):Object(E.jsx)(E.Fragment,{children:c("\u555f\u52d5\u4e2d")})})]}):Object(E.jsx)(i.a,{theme:Mt,children:Object(E.jsx)(b.a,{maxWidth:"xs",disableGutters:!0,className:o.container,children:Object(E.jsxs)(u.a,{children:[Object(E.jsx)(l.b,{exact:!0,path:"/",children:Object(E.jsx)(l.a,{to:"/zh/"})}),Object(E.jsxs)(l.b,{path:"/:lang",children:[Object(E.jsx)(g.a,{}),Object(E.jsx)(D,{}),Object(E.jsx)(zt,{}),Object(E.jsx)(Lt,{})]})]})})})},Mt=Object(s.a)({typography:{fontFamily:"Noto Sans TC, Chivo, sans-serif"},palette:{background:{default:"#ffff90"}},overrides:{MuiCssBaseline:{"@global":{html:{userSelect:"none"}}}}}),Bt=Object(h.a)((function(e){return{container:{display:"flex",flexDirection:"column",justifyContent:"space-between",height:"100vh"},loadingContainer:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh"}}})),Ft=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Dt(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Wt=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,318)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))},At=n(124),Jt=n(79),qt=n(167),Ht="en"===window.location.hash.substr(2,2)?"en":"zh";At.a.use(Jt.e).init({resources:qt,whitelist:["en","zh"],lowerCaseLng:!0,lng:Ht,nsSeparator:!1,keySeparator:!1,debug:!1,interpolation:{escapeValue:!1}});At.a;r.a.render(Object(E.jsx)(c.a.StrictMode,{children:Object(E.jsx)(L,{children:Object(E.jsx)(Pt,{})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/hk-independent-bus-eta",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/hk-independent-bus-eta","/service-worker.js");Ft?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Dt(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Dt(t,e)}))}}(),Wt()}},[[257,1,2]]]);