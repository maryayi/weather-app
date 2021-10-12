(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,n){},12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(5),s=n.n(r),i=(n(11),n(2)),o=(n(12),n(4)),l=n.n(o),h=n(6);var j=n(0),b=function(e){var t=e.weather,n=void 0===t?null:t,a=e.loading;return void 0!==a&&a?Object(j.jsx)("div",{className:"weather-box__error",children:"Loading..."}):n?(null===n||void 0===n?void 0:n.message)?Object(j.jsx)("div",{className:"weather-box__error",children:n.message}):Object(j.jsxs)("div",{className:"weather-box",children:[Object(j.jsxs)("h2",{className:"weather-box__city",children:[n.name,", ",n.sys.country]}),Object(j.jsxs)("div",{className:"weather-box__result",children:[Object(j.jsx)("img",{src:"http://openweathermap.org/img/wn/".concat(n.weather[0].icon,"@2x.png"),className:"weather-box__icon"}),Object(j.jsx)("p",{className:"weather-box__description",children:n.weather[0].description})]}),Object(j.jsxs)("table",{className:"weather-box__table",children:[Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"weather-box__table--cold",children:"temp min"}),Object(j.jsxs)("td",{children:[n.main.temp_min,"\u2103"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"temp"}),Object(j.jsxs)("td",{children:[n.main.temp,"\u2103"]})]}),Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{className:"weather-box__table--hot",children:"temp max"}),Object(j.jsxs)("td",{children:[n.main.temp_max,"\u2103"]})]})]})]}):null};var u=function(){var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(!1),o=Object(i.a)(s,2),j=o[0],b=o[1],u=function(){var e=Object(h.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,b(!0),e.next=4,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(t,"&units=metric&appid=").concat("2f0b9e0efc3c5016b20f3c2bd4ba1aa0")).then((function(e){return e.json()}));case 4:n=e.sent,b(!1),r(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return[c,u,j]}(),t=Object(i.a)(e,3),n=t[0],c=t[1],r=t[2],s=Object(a.useState)(""),o=Object(i.a)(s,2),u=o[0],d=o[1],p=Object(a.useCallback)(function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];clearTimeout(t),t=setTimeout((function(){e.apply(null,c)}),n)}}(c,500),[]);return Object(a.useEffect)((function(){p(u)}),[u]),Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{className:"weather__title",children:"Find weather of any city"}),Object(j.jsx)("input",{placeholder:"Enter city name...",className:"weather__input",type:"text",value:u,onChange:function(e){return d(e.target.value)}}),Object(j.jsx)(b,{weather:n,loading:r})]})},d=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(u,{})}),document.getElementById("root")),d()}},[[15,1,2]]]);
//# sourceMappingURL=main.eea9ff1f.chunk.js.map