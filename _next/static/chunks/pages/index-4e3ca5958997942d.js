(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4363:function(t,e,n){var i=n(5787).w_;t.exports.v=function(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(t)}},5696:function(t,e,n){var i=n(5787).w_;t.exports.j=function(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm14 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-7 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"}}]}]})(t)}},8312:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4037)}])},6092:function(t,e,n){"use strict";var i=n(5893),a=n(1286);e.Z=t=>{let{Icon:e,iconsize:n=14,text:r,position:s="left",className:l}=t;return(0,i.jsxs)("div",{className:(0,a.cn)("flex items-center gap-1 text-xs",l),children:["left"===s&&(0,i.jsx)(e,{size:n}),(0,i.jsx)("span",{children:r}),"right"===s&&(0,i.jsx)(e,{size:n})]})}},6870:function(t,e,n){"use strict";var i=n(5893),a=n(1664),r=n.n(a),s=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)(r(),{...n,className:(0,s.cn)("text-mute hover:text-primary inline-block transition-all",e)})}},5832:function(t,e,n){"use strict";var i=n(5893),a=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("p",{...n,className:(0,a.cn)("text-tertiary mb-4",e)})}},7202:function(t,e,n){"use strict";var i=n(5893),a=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("h2",{...n,className:(0,a.cn)("text-2xl font-bold tracking-tight",e)})}},5420:function(t,e,n){"use strict";var i=n(5893),a=n(7294),r=n(1286);let s=(0,a.memo)(function(t){let{className:e,...n}=t;return(0,i.jsx)("h1",{...n,className:(0,r.cn)("mb-4 text-2xl font-extrabold",e)})});e.Z=s},1364:function(t,e,n){"use strict";n.d(e,{Ji:function(){return a},dA:function(){return i},eu:function(){return r}});let i={animate:{transition:{staggerChildren:.1}}},a={initial:{opacity:.3,transition:{duration:.3},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3},willChange:"opacity"}},r={initial:{opacity:0,y:10,transition:{duration:.6}},animate:{opacity:1,y:0,transition:{duration:.6}}}},3202:function(t,e,n){"use strict";n.d(e,{v:function(){return a}});let i={year:"numeric",month:"2-digit",day:"2-digit"},a=(t,e,n)=>{let a=new Date(t);return new Intl.DateTimeFormat(null!=e?e:"ko-KR",null!=n?n:i).format(a)}},7906:function(t,e,n){"use strict";n.d(e,{E6:function(){return a},sy:function(){return r}});var i=n(3202);let a=t=>[...t].sort((t,e)=>new Date(e.created_time).getTime()-new Date(t.created_time).getTime()).reduce((t,e)=>{let n=new Date(e.created_time).getFullYear();return t[n]||(t[n]=[]),t[n].push(e),t},{}),r=t=>{let{properties:e,created_time:n,cover:a}=t,r=e.Title.rich_text[0].plain_text,s=e.Tags.multi_select,l=e.Slug.title[0].plain_text,c=(0,i.v)(n).replaceAll(" ","").slice(0,-1),o=e.Summary.rich_text[0]&&e.Summary.rich_text[0].plain_text;return{title:r,tags:s,slug:l,createdTime:c,summary:o,cover:a}}},4037:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return N},default:function(){return w}});var i=n(5893),a=n(5696),r=n(2560),s=n(7294),l=n(6092),c=n(6870),o=n(5832),u=n(7202),d=n(5420),x=n(4363),m=n(8782),h=n.n(m),f=n(1664),g=n.n(f),j=n(8725);let p=["/images/unsplash-1.jpg","/images/unsplash-2.jpg","/images/unsplash-3.jpg"];var v=n(1364),y=n(7906),_=t=>{let{idx:e,...n}=t,{title:a,slug:s,createdTime:c,cover:o}=(0,y.sy)(n),u=null===o?j.F:p[e];return(0,i.jsx)(g(),{href:"/blog/".concat(s),className:"overflow-hidden rounded-xl",children:(0,i.jsxs)(r.m.div,{variants:v.eu,whileHover:{scale:1.1},whileTap:{scale:.9},className:"relative",children:[(0,i.jsx)(h(),{src:u,alt:a,width:300,height:300,className:"h-64 w-full rounded-xl object-cover",draggable:!1,priority:!0}),(0,i.jsxs)("div",{className:"absolute bottom-2 w-full px-6 py-4 text-neutral-100",children:[(0,i.jsx)("p",{className:"mb-2 text-xl font-bold tracking-tight md:text-lg",children:a}),(0,i.jsx)("div",{className:"flex justify-end",children:(0,i.jsx)(l.Z,{Icon:x.v,text:c})})]})]})})},N=!0,w=t=>{let{posts:e}=t;return(0,i.jsxs)("main",{children:[(0,i.jsxs)(r.m.section,{initial:"initial",animate:"animate",children:[(0,i.jsx)(d.Z,{className:"mt-6",children:"\uD83D\uDC4B 안녕하세요, 개발자 김민재입니다."}),(0,i.jsxs)(r.m.div,{variants:v.Ji,children:[(0,i.jsx)(o.Z,{className:"text-secondary",children:"개발 과정에 마주하는 다양한 문제를 해결하는 것을 좋아합니다."}),(0,i.jsx)(o.Z,{children:"경험과 변화을 공유하며 성장하는 것에 가치를 두고 있습니다."}),(0,i.jsx)(c.Z,{href:"/about",className:"text-sm",children:(0,i.jsx)(l.Z,{Icon:a.j,iconsize:24,text:"More about me",className:"text-md gap-1"})})]})]}),(0,i.jsxs)(r.m.section,{variants:v.Ji,initial:"initial",animate:"animate",className:"mt-6",children:[(0,i.jsx)(u.Z,{className:"mb-4",children:(0,i.jsx)("i",{children:"Featured."})}),(0,i.jsx)(r.m.div,{variants:v.dA,className:"mb-4 grid gap-6 md:grid-cols-3",children:e.map((t,e)=>(0,i.jsx)(s.Fragment,{children:(0,i.jsx)(_,{...t,idx:e})},t.id))}),(0,i.jsx)(c.Z,{href:"/blog",className:"text-sm",children:(0,i.jsx)(l.Z,{Icon:a.j,iconsize:24,text:"Check all posts",className:"text-md gap-1"})})]})]})}},5443:function(){},4129:function(){}},function(t){t.O(0,[239,764,16,774,888,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);