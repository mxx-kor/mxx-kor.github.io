(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{4363:function(t,e,n){var i=n(5787).w_;t.exports.v=function(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(t)}},3959:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/archives/tags/[slug]",function(){return n(3828)}])},3432:function(t,e,n){"use strict";var i=n(5893),r=n(4363),a=n(1664),s=n.n(a),l=n(7294),c=n(3202),o=n(6092),u=n(5832),x=n(3793);let d=(0,l.memo)(function(t){let{...e}=t,{properties:n,created_time:a}=e,d=(0,c.v)(a).replaceAll(" ","").slice(0,-1),m=n.Slug.title[0].plain_text,h=n.Title.rich_text[0].plain_text,g=n.Summary.rich_text[0]&&n.Summary.rich_text[0].plain_text,p=n.Tags.multi_select;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s(),{href:"/blog/".concat(m),children:[(0,i.jsx)("h3",{className:"text-primary mb-2 text-xl font-bold group-hover:underline",children:h}),(0,i.jsx)(u.Z,{className:"group-hover:text-secondary mb-2 transition-all",children:g})]}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("div",{className:"flex flex-wrap gap-2",children:p.map(t=>(0,i.jsx)(l.Fragment,{children:(0,i.jsx)(x.Z,{name:t.name})},t.id))}),(0,i.jsx)(o.Z,{className:"text-tertiary group-hover:text-secondary",Icon:r.v,text:d})]})]})});e.Z=d},9607:function(t,e,n){"use strict";n.d(e,{T:function(){return s},U:function(){return l}});var i=n(5893),r=n(2962),a=n(8725);let s=t=>{let{title:e=a.siteConfig.title,description:n=a.siteConfig.description,path:s,image:l=a.F}=t,c="".concat(a.siteConfig.url,"/").concat(s);return(0,i.jsx)(r.PB,{title:e,description:n,canonical:c,openGraph:{url:c,title:e,description:n,images:[{url:l}]}})},l=t=>{var e;let{...n}=t,{properties:s,created_time:l,last_edited_time:c,cover:o}=n,u=s.Title.rich_text[0].plain_text,x=(null===(e=s.Summary.rich_text[0])||void 0===e?void 0:e.plain_text)||a.siteConfig.description,d=s.Tags.multi_select.map(t=>t.name),m=null===o?a.F:"external"===o.type?o.external.url:o.file.url,h="".concat(a.siteConfig.url,"/blog/").concat(s.Slug.title[0].plain_text),g=new Date(l).toISOString(),p=new Date(c).toISOString();return(0,i.jsx)(r.PB,{title:u,description:x,canonical:h,openGraph:{type:"article",article:{publishedTime:g,modifiedTime:p,authors:["https://github.com/mxx-kor"],tags:d},url:h,title:u,description:x,images:[{url:m,width:285,height:167}]}})}},4205:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("span",{...n,className:(0,r.cn)("inline-flex items-center rounded-md px-2 py-1","text-tertiary bg-tag text-xs font-medium","hover:bg-secondary ring-1 ring-inset ring-gray-500/10 transition-all",e)})}},6092:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{Icon:e,iconsize:n=14,text:a,className:s}=t;return(0,i.jsxs)("div",{className:(0,r.cn)("flex items-center gap-1 text-xs",s),children:[(0,i.jsx)(e,{size:n}),(0,i.jsx)("span",{children:a})]})}},5832:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("p",{...n,className:(0,r.cn)("text-tertiary mb-4",e)})}},7202:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("h2",{...n,className:(0,r.cn)("text-2xl font-bold tracking-tight",e)})}},3793:function(t,e,n){"use strict";var i=n(5893),r=n(1664),a=n.n(r),s=n(1286),l=n(4205);e.Z=t=>{let{className:e,name:n}=t,r=n.replace("\b","");return(0,i.jsx)(a(),{href:"/archives/tags/".concat(r),children:(0,i.jsx)(l.Z,{className:(0,s.cn)(e),children:r})})}},5420:function(t,e,n){"use strict";var i=n(5893),r=n(7294),a=n(1286);let s=(0,r.memo)(function(t){let{className:e,...n}=t;return(0,i.jsx)("h1",{...n,className:(0,a.cn)("mb-4 text-2xl font-extrabold",e)})});e.Z=s},1364:function(t,e,n){"use strict";n.d(e,{Ji:function(){return r},dA:function(){return i},eu:function(){return a}});let i={animate:{transition:{staggerChildren:.1}}},r={initial:{opacity:.3,transition:{duration:.3},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3},willChange:"opacity"}},a={initial:{opacity:0,y:10,transition:{duration:.6}},animate:{opacity:1,y:0,transition:{duration:.6}}}},3202:function(t,e,n){"use strict";n.d(e,{v:function(){return r}});let i={year:"numeric",month:"2-digit",day:"2-digit"},r=(t,e,n)=>{let r=new Date(t);return new Intl.DateTimeFormat(null!=e?e:"ko-KR",null!=n?n:i).format(r)}},3828:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return m}});var i=n(5893),r=n(2560),a=n(4205),s=n(3615),l=n(5832),c=n(7202),o=n(5420),u=n(3432),x=n(9607),d=n(1364),m=!0;e.default=t=>{let{slug:e,posts:n}=t;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x.T,{title:"Tags - ".concat(e," | minjae"),description:"".concat(e," 태그에 관련된 블로그 포스트를 모아놨어요."),path:"archive/tags/".concat(e)}),(0,i.jsxs)(r.m.main,{initial:"initial",animate:"animate",children:[(0,i.jsxs)(o.Z,{className:"my-6 text-4xl font-bold",children:["Tags",(0,i.jsxs)(a.Z,{className:"text-secondary ml-4 rounded-lg text-2xl",children:["#",e]})]}),(0,i.jsxs)(l.Z,{children:[(0,i.jsxs)("span",{className:"text-primary",children:[n.length,"개"]}),"의 포스트가 있습니다."]}),(0,i.jsxs)("section",{children:[(0,i.jsx)(c.Z,{className:"mb-4",children:"Posts"}),(0,i.jsx)(s.Z,{className:"mb-4"}),(0,i.jsx)(r.m.ul,{variants:d.dA,className:"mb-12 grid w-full gap-8 lg:grid-cols-2 lg:gap-12",children:n.map(t=>(0,i.jsx)(r.m.li,{variants:d.eu,className:"group",children:(0,i.jsx)(u.Z,{...t})},t.id))})]})]})]})}},2560:function(t,e,n){"use strict";n.d(e,{m:function(){return a}});var i=n(1150),r=n(4007);let a=(0,i.D)(r.w)}},function(t){t.O(0,[239,774,888,179],function(){return t(t.s=3959)}),_N_E=t.O()}]);