(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(8204)}])},9607:function(e,t,n){"use strict";n.d(t,{T:function(){return l},U:function(){return a}});var r=n(5893),i=n(2962),s=n(8725);let l=e=>{let{title:t=s.siteConfig.title,description:n=s.siteConfig.description,path:l,image:a=s.F}=e,c="".concat(s.siteConfig.url,"/").concat(l);return(0,r.jsx)(i.PB,{title:t,description:n,canonical:c,openGraph:{url:c,title:t,description:n,images:[{url:a}]}})},a=e=>{var t;let{...n}=e,{properties:l,created_time:a,last_edited_time:c,cover:o}=n,d=l.Title.rich_text[0].plain_text,u=(null===(t=l.Summary.rich_text[0])||void 0===t?void 0:t.plain_text)||s.siteConfig.description,x=l.Tags.multi_select.map(e=>e.name),m=null===o?s.F:"external"===o.type?o.external.url:o.file.url,h="".concat(s.siteConfig.url,"/blog/").concat(l.Slug.title[0].plain_text),f=new Date(a).toISOString(),g=new Date(c).toISOString();return(0,r.jsx)(i.PB,{title:d,description:u,canonical:h,openGraph:{type:"article",article:{publishedTime:f,modifiedTime:g,authors:["https://github.com/mxx-kor"],tags:x},url:h,title:d,description:u,images:[{url:m,width:285,height:167}]}})}},4205:function(e,t,n){"use strict";var r=n(5893),i=n(1286);t.Z=e=>{let{className:t,...n}=e;return(0,r.jsx)("span",{...n,className:(0,i.cn)("inline-flex items-center rounded-md px-2 py-1","text-tertiary bg-tag text-xs font-medium","hover:bg-secondary ring-1 ring-inset ring-gray-500/10 transition-all",t)})}},6092:function(e,t,n){"use strict";var r=n(5893),i=n(1286);t.Z=e=>{let{Icon:t,iconsize:n=14,text:s,className:l}=e;return(0,r.jsxs)("div",{className:(0,i.cn)("flex items-center gap-1 text-xs",l),children:[(0,r.jsx)(t,{size:n}),(0,r.jsx)("span",{children:s})]})}},6870:function(e,t,n){"use strict";var r=n(5893),i=n(1664),s=n.n(i),l=n(1286);t.Z=e=>{let{className:t,...n}=e;return(0,r.jsx)(s(),{...n,className:(0,l.cn)("text-mute hover:text-primary inline-block transition-all",t)})}},7202:function(e,t,n){"use strict";var r=n(5893),i=n(1286);t.Z=e=>{let{className:t,...n}=e;return(0,r.jsx)("h2",{...n,className:(0,i.cn)("text-2xl font-bold tracking-tight",t)})}},3793:function(e,t,n){"use strict";var r=n(5893),i=n(1664),s=n.n(i),l=n(1286),a=n(4205);t.Z=e=>{let{className:t,name:n}=e,i=n.replace("\b","");return(0,r.jsx)(s(),{href:"/archives/tags/".concat(i),children:(0,r.jsx)(a.Z,{className:(0,l.cn)(t),children:i})})}},5420:function(e,t,n){"use strict";var r=n(5893),i=n(7294),s=n(1286);let l=(0,i.memo)(function(e){let{className:t,...n}=e;return(0,r.jsx)("h1",{...n,className:(0,s.cn)("mb-4 text-2xl font-extrabold",t)})});t.Z=l},3202:function(e,t,n){"use strict";n.d(t,{v:function(){return i}});let r={year:"numeric",month:"2-digit",day:"2-digit"},i=(e,t,n)=>{let i=new Date(e);return new Intl.DateTimeFormat(null!=t?t:"ko-KR",null!=n?n:r).format(i)}},8204:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return Q},default:function(){return U}});var r=n(5893);n(9408),n(1067),n(8594);var i=n(4363),s=n(5152),l=n.n(s),a=n(8782),c=n.n(a),o=n(1664),d=n.n(o),u=n(7294),x=n(4793),m=n(6092),h=n(3793),f=n(5420),g=n(2010),p=()=>{let e=(0,u.useRef)(null),{resolvedTheme:t}=(0,g.F)(),n="dark"===t?"dark":"light";return(0,u.useEffect)(()=>{if(!e.current||e.current.hasChildNodes())return;let t=document.createElement("script");t.src="https://giscus.app/client.js",t.async=!0,t.crossOrigin="anonymous",t.setAttribute("data-repo","mxx-kor/mxx-kor.github.io"),t.setAttribute("data-repo-id","R_kgDOJ2XnQw"),t.setAttribute("data-category","Comments"),t.setAttribute("data-category-id","DIC_kwDOJ2XnQ84CXxYD"),t.setAttribute("data-mapping","title"),t.setAttribute("data-strict","0"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("data-input-position","top"),t.setAttribute("data-theme",n),t.setAttribute("data-lang","en"),t.setAttribute("data-loading","lazy");try{e.current.appendChild(t)}catch(e){console.error("Error while rendering giscus widget.",e)}},[]),(0,u.useEffect)(()=>{let e=document.querySelector(".giscus-frame");if(e){var t;null==e||null===(t=e.contentWindow)||void 0===t||t.postMessage({giscus:{setConfig:{theme:n}}},"https://giscus.app")}},[n]),(0,r.jsx)("section",{ref:e})},b=n(6788),j=n(7944),v=n(5396),k=n(8263),N=n(5516),y=n(1286),w=()=>{let{scrollYProgress:e}=(0,k.v)();return(0,r.jsx)(N.E.div,{className:(0,y.cn)("fixed left-0 top-0 z-10 h-1.5 w-full","origin-top-left bg-gradient-to-r from-blue-400 to-sky-600 dark:from-stone-700 dark:to-stone-200"),style:{scaleX:e}})},_=e=>{let{children:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{}),(0,r.jsx)(d(),{href:"/blog",className:"mb-6 inline-block pl-2",children:(0,r.jsx)(v.Z,{className:"w-32",children:(0,r.jsx)(m.Z,{Icon:j.T,text:"Back to posts",className:"text-md gap-1"})})}),t]})},Z=n(9607),C=n(7465),A=n(5242),S=n(4025),T=()=>{let e=(0,u.useRef)(),[t,n]=(0,u.useState)(""),{scrollY:r}=(0,k.v)(),i=()=>{e.current=Array.from(document.querySelectorAll(".notion-h")).filter(e=>{var t;return null===(t=e.querySelector(".notion-h-title"))||void 0===t?void 0:t.textContent}).map(e=>({id:e.dataset.id,top:e.offsetTop+201+1}))};return(0,S.W)(r,"change",t=>{i();let r="";if(e.current)for(let n=0;n<e.current.length;n++){if(t>=e.current[n].top){r=e.current[n].id;continue}break}n(r)}),t},E=n(6870),F=n(7202),I=e=>{let{slug:t,tableOfContents:n}=e,i=T(),s=e=>e.replaceAll("-",""),l=e=>0===e?"text-base":1===e?"ml-4 text-sm":2===e?"ml-10 text-sm":void 0;return 0===n.length?(0,r.jsx)(r.Fragment,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(F.Z,{className:"mb-4 text-lg font-bold",children:"목차"}),(0,r.jsx)("ul",{className:"mb-2",children:n.map(e=>""!==e.text&&(0,r.jsx)("li",{className:"mb-1 font-light tracking-tighter",children:(0,r.jsx)(E.Z,{href:"/blog/".concat(t,"#").concat(s(e.id)),className:(0,y.cn)(l(e.indentLevel),i===s(e.id)?"text-primary font-bold":"hover:font-normal"),children:e.text})},e.id))}),(0,r.jsxs)("div",{className:"bg-tag flex w-44 justify-between gap-2 rounded-xl px-4",children:[(0,r.jsx)(d(),{href:"/blog",children:(0,r.jsx)(v.Z,{children:(0,r.jsx)(j.T,{})})}),(0,r.jsx)(v.Z,{onClick:()=>window.scrollTo({top:0,behavior:"smooth"}),children:(0,r.jsx)(C.a,{size:22})}),(0,r.jsx)(v.Z,{onClick:()=>{var e;return null===(e=document.querySelector(".giscus"))||void 0===e?void 0:e.scrollIntoView({behavior:"smooth"})},children:(0,r.jsx)(A.p,{size:22})})]})]})},O=n(4287),D=n(1331),G=n(3615),P=e=>{let{slug:t,tableOfContents:n}=e;if(0===n.length)return(0,r.jsx)(r.Fragment,{});let i=e=>e.replaceAll("-",""),s=e=>0===e?"text-base":1===e?"ml-8 text-sm":2===e?"ml-16 text-sm":void 0;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(G.Z,{className:"border-1 mb-4 dark:border-neutral-300"}),(0,r.jsx)(F.Z,{className:"mb-2 px-2",children:(0,r.jsx)(m.Z,{Icon:D.b,iconsize:25,text:"Table of Contents",className:"gap-3 text-xl font-bold"})}),(0,r.jsx)("ul",{className:"px-2",children:n.map(e=>""!==e.text&&(0,r.jsx)("li",{className:"mb-1 tracking-tighter",children:(0,r.jsx)(E.Z,{href:"/blog/".concat(t,"#").concat(i(e.id)),children:(0,r.jsx)(m.Z,{Icon:O.r,iconsize:30,text:e.text,className:s(e.indentLevel)})})},e.id))})]})},z=n(3708),X=n(3202);let q=l()(()=>n.e(794).then(n.bind(n,1794)).then(e=>e.Code),{loadableGenerated:{webpack:()=>[1794]}}),L=l()(()=>Promise.all([n.e(276),n.e(853)]).then(n.bind(n,635)).then(e=>e.Collection),{loadableGenerated:{webpack:()=>[635]}}),M=l()(()=>Promise.all([n.e(265),n.e(274)]).then(n.bind(n,7274)).then(e=>e.Equation),{loadableGenerated:{webpack:()=>[7274]}}),R=l()(()=>Promise.all([n.e(824),n.e(595),n.e(738)]).then(n.bind(n,2788)).then(e=>e.Pdf),{loadableGenerated:{webpack:()=>[2788]},ssr:!1}),B=l()(()=>n.e(873).then(n.bind(n,6873)).then(e=>e.Modal),{loadableGenerated:{webpack:()=>[6873]},ssr:!1}),J=e=>{let{post:t,recordMap:n,tableOfContents:s}=e,{resolvedTheme:l}=(0,z.Z)(),[a,o]=(0,u.useState)(!0),{properties:g,created_time:b}=t,j=g.Title.rich_text[0].plain_text,v=g.Tags.multi_select,k=g.Slug.title[0].plain_text,N=(0,X.v)(b).replaceAll(" ","").slice(0,-1);return(0,u.useEffect)(()=>{let e="dark"===l;o(e)},[l]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Z.U,{...t}),(0,r.jsxs)("article",{children:[(0,r.jsx)("aside",{className:"sticky top-12 hidden xl:block",children:(0,r.jsx)("div",{className:"absolute left-full w-64 rounded-2xl p-4",children:(0,r.jsx)(I,{slug:k,tableOfContents:s})})}),(0,r.jsxs)("section",{children:[(0,r.jsx)(f.Z,{className:"mb-2 break-keep text-center text-3xl font-bold",children:j}),(0,r.jsx)(m.Z,{className:"text-tertiary mb-2 justify-center text-sm",Icon:i.v,text:N}),(0,r.jsx)("div",{className:"mb-4 flex justify-center gap-2",children:v.map(e=>(0,r.jsx)(u.Fragment,{children:(0,r.jsx)(h.Z,{name:e.name})},e.id))})]}),(0,r.jsx)("section",{className:"mx-4 transition-all xl:hidden",children:(0,r.jsx)(P,{slug:k,tableOfContents:s})}),(0,r.jsx)(x.cp,{recordMap:n,darkMode:a,components:{Code:q,Collection:L,Equation:M,Modal:B,Pdf:R,nextImage:c(),nextLink:d()}}),(0,r.jsx)(p,{})]})]})};J.getLayout=function(e){return(0,r.jsx)(b.Z,{children:(0,r.jsx)(_,{children:e})})};var Q=!0,U=J},5443:function(){},4129:function(){}},function(e){e.O(0,[239,782,609,774,888,179],function(){return e(e.s=1127)}),_N_E=e.O()}]);