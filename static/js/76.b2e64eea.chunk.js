"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,r,e){e.r(r),e.d(r,{Cast:function(){return x}});var n=e(861),a=e(439),c=e(757),s=e.n(c),u=e(791),o=e(689),i=e(963),p="Cast_movieActors__zHXPo",f="Cast_actorsTitle__C4bih",l="Cast_actorsList__iEq99",v="Cast_actorItem__fXEWx",m="Cast_actorImage__IECZO",h="Cast_actorName__XabVA",d="Cast_actorCharacter__m+TBZ",_=e(184);function x(){var t=(0,u.useState)(null),r=(0,a.Z)(t,2),e=r[0],c=r[1],x=(0,o.UO)().movieId;return(0,u.useEffect)((function(){var t=function(){var t=(0,n.Z)(s().mark((function t(){var r;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,i.zv)(x);case 3:r=t.sent,c(r),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();t()}),[x]),(0,_.jsx)("div",{className:p,children:e&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("h3",{className:f,children:"Actors:"}),(0,_.jsx)("div",{className:l,children:e.cast.map((function(t){return(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("img",{className:m,src:t.profile_path?"https://image.tmdb.org/t/p/w200".concat(t.profile_path):"https://via.placeholder.com/200x300?text=No+Image",alt:t.name}),(0,_.jsx)("p",{className:h,children:t.name}),(0,_.jsx)("p",{className:d,children:t.character})]},t.id)}))})]})})}},963:function(t,r,e){e.d(r,{Df:function(){return u},TP:function(){return i},tx:function(){return f},z1:function(){return o},zv:function(){return p}});var n=e(861),a=e(757),c=e.n(a),s=e(243);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"2ff9a25f6b0d642d0cbe448a4c742d55"};var u=function(){var t=(0,n.Z)(c().mark((function t(){var r,e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/trending/movie/day");case 2:return r=t.sent,e=r.data,t.abrupt("return",e.results);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/search/movie?query=".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n.results);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r,"/credits"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(c().mark((function t(r){var e,n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.Z.get("/movie/".concat(r,"/reviews"));case 2:return e=t.sent,n=e.data,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.b2e64eea.chunk.js.map