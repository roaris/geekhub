_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[18],{"5Vd5":function(e,t,s){"use strict";var c=s("nKUr"),n=s("q1tI"),r=s("JZFu"),a=s("YFqc"),i=s.n(a);s("WI49");t.a=function(e){var t=e.session_id,s=Object(n.useState)([]),a=s[0],o=s[1];Object(n.useEffect)((function(){r.a.database().ref("sessions").orderByKey().on("value",(function(e){var t=e.val();o(t)}))}),[]);var l="../static/images/"+t+".png",d="/event/"+t;return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(i.a,{href:d,children:Object(c.jsx)("div",{children:Object(c.jsxs)("section",{className:"card",children:[Object(c.jsx)("img",{className:"w-full h-48 card-img",src:l,alt:"\u753b\u50cf\u304c\u306a\u3044\u3088",style:{objectFit:"contain"},onError:function(e){e.target.src="../static/images/noimage.png"}}),a.length>0&&Object(c.jsxs)("div",{className:"card-content h-64",children:[Object(c.jsx)("h1",{className:"card-title",children:a[t].title}),"hoge"===a[t].belong&&"study"===a[t].type?null:Object(c.jsx)("p",{className:"card-text",children:a[t].belong}),Object(c.jsx)("p",{className:"card-text",children:a[t].author}),Object(c.jsxs)("p",{className:"card-text",children:[a[t].day," ",a[t].time]})]})]})},t)})})}},LLvT:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/recommendation",function(){return s("ghHL")}])},WI49:function(e,t,s){"use strict";s("LmZi")},ghHL:function(e,t,s){"use strict";s.r(t);var c=s("nKUr"),n=(s("YFqc"),s("5Yp1")),r=s("q1tI"),a=s("/MKj"),i=s("JZFu"),o=(s("WI49"),s("5Vd5")),l=Object(a.b)((function(e){return e}))((function(e){var t=Object(r.useState)(!1),s=t[0],n=t[1],a=Object(r.useState)([]),l=a[0],d=a[1],j=Object(r.useState)([]),u=j[0],h=j[1],b=Object(r.useState)([]),f=b[0],v=b[1];function m(e,t){for(var s=0,c=0;c<e.length;c++)s+=1*e[c]*(1*t[c]);return s}return s||function(){var t=[];Array(65).fill(0);var s=i.a.database().ref("user_fav"),r=[];s.orderByKey().on("value",(function(s){t=s.val();var n,a,i=Array(65);i.fill(0),console.log(t,e);for(var l=0;l<t.length;l++)if(l!=e.login_user_id)for(var j=(n=e.login_user_fav,a=t[l],0==m(n,n)||0==m(a,a)?0:m(n,a)/Math.sqrt(m(n,n)*m(a,a))),u=0;u<65;u++)"1"==t[l][u]&&(i[u]+=j);for(var b=0;b<65;b++)r.push({session_id:b,score:i[b]});r.sort((function(e,t){return e.score>t.score?-1:e.score<t.score?1:0}));for(var f=Array(13).fill(-1),O=0;O<65;O++){var _=r[O].session_id;"1"!=e.login_user_fav[_]&&(-1==f[Math.floor(_/5)]&&(f[Math.floor(_/5)]=_))}for(var p=[],g=[],x=[],N=0;N<4;N++)-1!=f[N]&&p.push(Object(c.jsx)(o.a,{session_id:f[N]}));for(var y=4;y<8;y++)-1!=f[y]&&g.push(Object(c.jsx)(o.a,{session_id:f[y]}));for(var w=8;w<13;w++)-1!=f[w]&&x.push(Object(c.jsx)(o.a,{session_id:f[w]}));d(p),h(g),v(x)})),n(!0)}(),Object(c.jsxs)("div",{className:"bg-gray-100",children:[Object(c.jsx)("h1",{className:"p-10 recommendation_h1",children:"\u3042\u306a\u305f\u3078\u304a\u3059\u3059\u3081\u306e\u30b3\u30f3\u30c6\u30f3\u30c4"}),l.length>0&&Object(c.jsx)("p",{className:"recommendation_p",children:"1\u65e5\u76ee"}),Object(c.jsx)("div",{className:"events pb-10",children:l}),u.length>0&&Object(c.jsx)("p",{className:"recommendation_p",children:"2\u65e5\u76ee"}),Object(c.jsx)("div",{className:"events pb-10",children:u}),f.length>0&&Object(c.jsx)("p",{className:"recommendation_p",children:"3\u65e5\u76ee"}),Object(c.jsx)("div",{className:"events pb-10",children:f})]})}));t.default=function(){return Object(c.jsx)(n.a,{title:"recommendation",children:Object(c.jsx)(l,{})})}}},[["LLvT",0,2,5,6,9,1,3,4,8,7]]]);