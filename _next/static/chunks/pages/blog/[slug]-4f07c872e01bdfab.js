(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[492],{1127:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[slug]",function(){return n(4732)}])},9607:function(t,e,n){"use strict";n.d(e,{T:function(){return s},U:function(){return l}});var r=n(5893),a=n(8725),i=n(2962);let s=t=>{let{title:e=a.siteConfig.title,description:n,path:s,image:l=a.F}=t,c="".concat(a.siteConfig.url,"/").concat(s);return(0,r.jsx)(i.PB,{title:e,description:n,canonical:c,openGraph:{url:c,title:e,description:n,images:[{url:l}]}})},l=t=>{let{...e}=t,{properties:n,created_time:s,last_edited_time:l,cover:c}=e,o=n.Title.rich_text[0].plain_text,u=n.Summary.rich_text[0].plain_text,d=n.Tags.multi_select.map(t=>t.name),p=null===c?a.F:"external"===c.type?c.external.url:c.file.url,h="".concat(a.siteConfig.url,"/blog/").concat(n.Slug.title[0].plain_text),x=new Date(s).toISOString(),m=new Date(l).toISOString();return(0,r.jsx)(i.PB,{title:o,description:u,canonical:h,openGraph:{type:"article",article:{publishedTime:x,modifiedTime:m,authors:["https://github.com/mxx-kor"],tags:d},url:h,title:o,description:u,images:[{url:p,width:285,height:167}]}})}},6092:function(t,e,n){"use strict";var r=n(5893),a=n(1286);e.Z=t=>{let{Icon:e,iconsize:n=14,text:i,className:s}=t;return(0,r.jsxs)("div",{className:(0,a.cn)("flex items-center",null!=s?s:"gap-1 text-xs"),children:[(0,r.jsx)(e,{size:n}),(0,r.jsx)("span",{children:i})]})}},5420:function(t,e,n){"use strict";var r=n(5893),a=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,r.jsx)("h1",{...n,className:(0,a.cn)("mb-4 text-2xl font-extrabold",e)})}},4732:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return v},default:function(){return S}});var r=n(5893),a=n(2010),i=n(7294),s=()=>{let t=(0,i.useRef)(null),{resolvedTheme:e}=(0,a.F)(),n="dark"===e?"dark":"light";return(0,i.useEffect)(()=>{if(!t.current||t.current.hasChildNodes())return;let e=document.createElement("script");e.src="https://giscus.app/client.js",e.async=!0,e.crossOrigin="anonymous",e.setAttribute("data-repo","mxx-kor/mxx-kor.github.io"),e.setAttribute("data-repo-id","R_kgDOJ2XnQw"),e.setAttribute("data-category","Comments"),e.setAttribute("data-category-id","DIC_kwDOJ2XnQ84CXxYD"),e.setAttribute("data-mapping","title"),e.setAttribute("data-strict","0"),e.setAttribute("data-reactions-enabled","1"),e.setAttribute("data-emit-metadata","0"),e.setAttribute("data-input-position","top"),e.setAttribute("data-theme",n),e.setAttribute("data-lang","en"),e.setAttribute("data-loading","lazy");try{t.current.appendChild(e)}catch(t){console.error("Error while rendering giscus widget.",t)}},[]),(0,i.useEffect)(()=>{let t=document.querySelector(".giscus-frame");if(t){var e;null==t||null===(e=t.contentWindow)||void 0===e||e.postMessage({giscus:{setConfig:{theme:n}}},"https://giscus.app")}},[n]),(0,r.jsx)("section",{ref:t})},l=n(1095),c=n(1664),o=n.n(c),u=n(7944),d=n(6092),p=n(5396),h=t=>{let{children:e}=t;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o(),{href:"/blog",className:"hover:bg-gray my-3 inline-block ",children:(0,r.jsx)(p.Z,{className:"w-32",children:(0,r.jsx)(d.Z,{Icon:u.T,text:"Back to posts",className:"text-md gap-1"})})}),e]})},x=n(4793),m=n(5152),b=n.n(m),g=n(3708),f=n(5675),_=n.n(f),k=n(9607);n(4298),n(1067),n(8594);var j=n(5420);let w=b()(()=>n.e(794).then(n.bind(n,1794)).then(t=>t.Code),{loadableGenerated:{webpack:()=>[1794]}}),y=b()(()=>Promise.all([n.e(276),n.e(853)]).then(n.bind(n,635)).then(t=>t.Collection),{loadableGenerated:{webpack:()=>[635]}}),C=b()(()=>Promise.all([n.e(265),n.e(274)]).then(n.bind(n,7274)).then(t=>t.Equation),{loadableGenerated:{webpack:()=>[7274]}}),N=b()(()=>Promise.all([n.e(824),n.e(312),n.e(738)]).then(n.bind(n,2788)).then(t=>t.Pdf),{loadableGenerated:{webpack:()=>[2788]},ssr:!1}),A=b()(()=>n.e(873).then(n.bind(n,6873)).then(t=>t.Modal),{loadableGenerated:{webpack:()=>[6873]},ssr:!1}),E=t=>{let{post:e,recordMap:n}=t,{resolvedTheme:a}=(0,g.Z)(),[l,c]=(0,i.useState)(!0),u=e.properties.Title.rich_text[0].plain_text;return(0,i.useEffect)(()=>{let t="dark"===a;c(t)},[a]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(k.U,{...e}),(0,r.jsxs)("article",{children:[(0,r.jsx)(j.Z,{className:"text-center text-3xl font-bold",children:u}),(0,r.jsx)(x.cp,{recordMap:n,darkMode:l,components:{Code:w,Collection:y,Equation:C,Modal:A,Pdf:N,nextImage:_(),nextLink:o()}})]}),(0,r.jsx)(s,{})]})};E.getLayout=function(t){return(0,r.jsx)(l.Z,{children:(0,r.jsx)(h,{children:t})})};var v=!0,S=E}},function(t){t.O(0,[675,930,774,888,179],function(){return t(t.s=1127)}),_N_E=t.O()}]);