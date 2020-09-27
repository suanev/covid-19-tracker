(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{102:function(e,t,a){},105:function(e,t,a){},106:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(99),a(24)),l=a.n(s),i=a(35),u=a(18),m=a(237),f=a(238),d=a(239),p=a(231),v=a(235),h=a(14),E=a.n(h),b=a(87),y={cases:{hex:"#CC1034",multiplier:800},recovered:{hex:"#7dd71d",multiplier:1200},deaths:{hex:"#fb4443",multiplier:2e3}},j=a(240),x=a(241),O=function(e){return e?"+".concat(E()(e).format("0.0a")):"+0"},g=function(e){return Object(b.a)(e).sort((function(e,t){return e.cases>t.cases?-1:1}))},w=a(54),N=a(236),k=(a(102),function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=Object(w.a)(e,["title","cases","total","active","isRed"]);return c.a.createElement(p.a,{onClick:s.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red")},c.a.createElement(v.a,null,c.a.createElement(N.a,{color:"textSecondary",className:"infoBox__title",gutterBottom:!0},t),c.a.createElement("h2",{className:"infoBox__cases ".concat(!o&&"infoBox__cases--green")},a),c.a.createElement(N.a,{color:"textSecondary",className:"infoBox__total"},n," Total")))}),_=a(242),C=a(243),S=(a(105),function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(_.a,{center:n,zoom:r},c.a.createElement(C.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(j.a,{center:[e.countryInfo.lat,e.countryInfo.long],fillOpacity:.4,color:y[t].hex,fillColor:y[t].hex,radius:Math.sqrt(e[t])*y[t].multiplier},c.a.createElement(x.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",E()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",E()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",E()(e.deaths).format("0,0")))))}))}(t,a)))}),B=(a(106),function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},c.a.createElement("table",null,c.a.createElement("tbody",null,t.map((function(e,t){var a=e.country,n=e.cases;return c.a.createElement("tr",{key:t},c.a.createElement("td",null,a),c.a.createElement("td",null,c.a.createElement("strong",null,E()(n).format("0,0"))))})))))}),I=a(86),R={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return E()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return E()(e).format("0a")}}}]}},T=function(e){var t=e.api,a=e.casesType,r=Object(w.a)(e,["api","casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),m=s[0],f=s[1],d=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n};return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(t,"/historical/all?lastdays=120")).then((function(e){return e.json()})).then((function(e){var t=d(e,a);f(t)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,t]),c.a.createElement("div",{className:r.className},(null===m||void 0===m?void 0:m.length)>0&&c.a.createElement(I.Line,{data:{datasets:[{data:m,borderColor:"#CC1034",backgroundColor:"rgba(204, 16, 52, 0.5)"}]},options:R}))},D=(a(203),a(204),function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)("worldwide"),s=Object(u.a)(o,2),h=s[0],b=s[1],y=Object(n.useState)({}),j=Object(u.a)(y,2),x=j[0],w=j[1],N=Object(n.useState)([]),_=Object(u.a)(N,2),C=_[0],I=_[1],R=Object(n.useState)("cases"),D=Object(u.a)(R,2),M=D[0],z=D[1],A=Object(n.useState)({lat:34.80746,lng:-40.4796}),L=Object(u.a)(A,2),J=L[0],W=L[1],Y=Object(n.useState)(3),q=Object(u.a)(Y,2),F=q[0],G=q[1],H="https://disease.sh/v3/covid-19",K=function(){var e=Object(i.a)(l.a.mark((function e(t){var a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,n="worldwide"===a?"all":"countries/".concat(a),e.next=4,fetch("".concat(H,"/").concat(n)).then((function(e){return e.json()})).then((function(e){b(a),w(e),W("worldwide"===a?[34.80746,-40.4796]:[e.countryInfo.lat,e.countryInfo.long]),G(4)}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(H,"/countries")).then((function(e){return e.json()})).then((function(e){var t=g(e);I(t),r(e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[H]),Object(n.useEffect)((function(){fetch("".concat(H,"/all")).then((function(e){return e.json()})).then((function(e){w(e)}))}),[H]),c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app__left"},c.a.createElement("div",{className:"app__header"},c.a.createElement("h1",null,"Covid-19 Tracker"),c.a.createElement(m.a,{className:"app_dropdown"},c.a.createElement(f.a,{variant:"outlined",onChange:K,value:h},c.a.createElement(d.a,{value:"worldwide",key:"worldwide"},"Worldwide"),a.map((function(e,t){return c.a.createElement(d.a,{value:e.countryInfo.iso3,key:t},e.country)}))))),c.a.createElement("div",{className:"app__stats"},c.a.createElement(k,{isRed:!0,title:"Coronavirus cases",active:"cases"===M,onClick:function(e){return z("cases")},cases:O(x.todayCases),total:E()(x.cases).format("0.0a")}),c.a.createElement(k,{title:"Recovered",active:"recovered"===M,onClick:function(e){return z("recovered")},cases:O(x.todayRecovered),total:E()(x.recovered).format("0.0a")}),c.a.createElement(k,{isRed:!0,title:"Deaths",active:"deaths"===M,onClick:function(e){return z("deaths")},cases:O(x.todayDeaths),total:E()(x.deaths).format("0.0a")})),c.a.createElement(S,{countries:a,casesType:M,center:J,zoom:F})),c.a.createElement(p.a,{className:"app__right"},c.a.createElement(v.a,null,c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(B,{countries:C}),c.a.createElement("h3",{className:"app__graphTitle"},"Worldwide new ",M),c.a.createElement(T,{className:"app__graph",api:H,casesType:M}))))});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(D,null)),document.getElementById("root"))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.58069973.chunk.js.map