(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{4363:function(t,e,n){var i=n(5787).w_;t.exports.v=function(t){return i({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"4",width:"18",height:"18",rx:"2",ry:"2"}},{tag:"line",attr:{x1:"16",y1:"2",x2:"16",y2:"6"}},{tag:"line",attr:{x1:"8",y1:"2",x2:"8",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"10",x2:"21",y2:"10"}}]})(t)}},1296:function(t,e,n){var i=0/0,r=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,o=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,u="object"==typeof self&&self&&self.Object===Object&&self,f=c||u||Function("return this")(),d=Object.prototype.toString,x=Math.max,m=Math.min,p=function(){return f.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function h(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==d.call(e))return i;if(g(t)){var e,n="function"==typeof t.valueOf?t.valueOf():t;t=g(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var c=o.test(t);return c||s.test(t)?l(t.slice(2),c?2:8):a.test(t)?i:+t}t.exports=function(t,e,n){var i,r,a,o,s,l,c=0,u=!1,f=!1,d=!0;if("function"!=typeof t)throw TypeError("Expected a function");function y(e){var n=i,a=r;return i=r=void 0,c=e,o=t.apply(a,n)}function v(t){var n=t-l,i=t-c;return void 0===l||n>=e||n<0||f&&i>=a}function j(){var t,n,i,r=p();if(v(r))return b(r);s=setTimeout(j,(t=r-l,n=r-c,i=e-t,f?m(i,a-n):i))}function b(t){return(s=void 0,d&&i)?y(t):(i=r=void 0,o)}function _(){var t,n=p(),a=v(n);if(i=arguments,r=this,l=n,a){if(void 0===s)return c=t=l,s=setTimeout(j,e),u?y(t):o;if(f)return s=setTimeout(j,e),y(l)}return void 0===s&&(s=setTimeout(j,e)),o}return e=h(e)||0,g(n)&&(u=!!n.leading,a=(f="maxWait"in n)?x(h(n.maxWait)||0,e):a,d="trailing"in n?!!n.trailing:d),_.cancel=function(){void 0!==s&&clearTimeout(s),c=0,i=l=r=s=void 0},_.flush=function(){return void 0===s?o:b(p())},_}},7801:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(1173)}])},3432:function(t,e,n){"use strict";var i=n(5893),r=n(6092),a=n(4363),o=n(5832),s=n(1664),l=n.n(s),c=n(3793),u=n(7294),f=n(3202);let d=(0,u.memo)(function(t){let{...e}=t,{properties:n,created_time:s}=e,d=(0,f.v)(s).replaceAll(" ","").slice(0,-1),x=n.Slug.title[0].plain_text,m=n.Title.rich_text[0].plain_text,p=n.Summary.rich_text[0]&&n.Summary.rich_text[0].plain_text,g=n.Tags.multi_select;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l(),{href:"/blog/".concat(x),children:[(0,i.jsx)("h3",{className:"text-primary mb-2 text-xl font-bold group-hover:underline",children:m}),(0,i.jsx)(o.Z,{className:"group-hover:text-secondary mb-2 transition-all",children:p})]}),(0,i.jsxs)("div",{className:"flex justify-between",children:[(0,i.jsx)("div",{className:"flex gap-2",children:g.map(t=>(0,i.jsx)(u.Fragment,{children:(0,i.jsx)(c.Z,{name:t.name})},t.id))}),(0,i.jsx)(r.Z,{className:"text-tertiary group-hover:text-secondary",Icon:a.v,text:d})]})]})});e.Z=d},9607:function(t,e,n){"use strict";n.d(e,{T:function(){return o},U:function(){return s}});var i=n(5893),r=n(8725),a=n(2962);let o=t=>{let{title:e=r.siteConfig.title,description:n=r.siteConfig.description,path:o,image:s=r.F}=t,l="".concat(r.siteConfig.url,"/").concat(o);return(0,i.jsx)(a.PB,{title:e,description:n,canonical:l,openGraph:{url:l,title:e,description:n,images:[{url:s}]}})},s=t=>{var e;let{...n}=t,{properties:o,created_time:s,last_edited_time:l,cover:c}=n,u=o.Title.rich_text[0].plain_text,f=(null===(e=o.Summary.rich_text[0])||void 0===e?void 0:e.plain_text)||r.siteConfig.description,d=o.Tags.multi_select.map(t=>t.name),x=null===c?r.F:"external"===c.type?c.external.url:c.file.url,m="".concat(r.siteConfig.url,"/blog/").concat(o.Slug.title[0].plain_text),p=new Date(s).toISOString(),g=new Date(l).toISOString();return(0,i.jsx)(a.PB,{title:u,description:f,canonical:m,openGraph:{type:"article",article:{publishedTime:p,modifiedTime:g,authors:["https://github.com/mxx-kor"],tags:d},url:m,title:u,description:f,images:[{url:x,width:285,height:167}]}})}},4205:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("span",{...n,className:(0,r.cn)("inline-flex items-center rounded-md px-2 py-1","text-tertiary bg-tag text-xs font-medium","hover:bg-secondary ring-1 ring-inset ring-gray-500/10 transition-all",e)})}},6092:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{Icon:e,iconsize:n=14,text:a,className:o}=t;return(0,i.jsxs)("div",{className:(0,r.cn)("flex items-center gap-1 text-xs",o),children:[(0,i.jsx)(e,{size:n}),(0,i.jsx)("span",{children:a})]})}},5832:function(t,e,n){"use strict";var i=n(5893),r=n(1286);e.Z=t=>{let{className:e,...n}=t;return(0,i.jsx)("p",{...n,className:(0,r.cn)("text-tertiary mb-4",e)})}},3793:function(t,e,n){"use strict";var i=n(5893),r=n(1664),a=n.n(r),o=n(4205),s=n(1286);e.Z=t=>{let{className:e,name:n}=t,r=n.replace("\b","");return(0,i.jsx)(a(),{href:"/archives/tags/".concat(r),children:(0,i.jsx)(o.Z,{className:(0,s.cn)(e),children:r})})}},5420:function(t,e,n){"use strict";var i=n(5893),r=n(1286),a=n(7294);let o=(0,a.memo)(function(t){let{className:e,...n}=t;return(0,i.jsx)("h1",{...n,className:(0,r.cn)("mb-4 text-2xl font-extrabold",e)})});e.Z=o},1364:function(t,e,n){"use strict";n.d(e,{Ji:function(){return r},dA:function(){return i},eu:function(){return a}});let i={animate:{transition:{staggerChildren:.1}}},r={initial:{opacity:.3,transition:{duration:.3},willChange:"opacity"},animate:{opacity:1,transition:{duration:.3},willChange:"opacity"}},a={initial:{opacity:0,y:10,transition:{duration:.6}},animate:{opacity:1,y:0,transition:{duration:.6}}}},3202:function(t,e,n){"use strict";n.d(e,{v:function(){return r}});let i={year:"numeric",month:"2-digit",day:"2-digit"},r=(t,e,n)=>{let r=new Date(t);return new Intl.DateTimeFormat(null!=e?e:"ko-KR",null!=n?n:i).format(r)}},1173:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return g},default:function(){return h}});var i=n(5893),r=n(3432),a=n(9607),o=n(5832),s=n(1286),l=t=>{let{className:e,...n}=t;return(0,i.jsx)("input",{type:"text",className:(0,s.cn)("placeholder:text-tertiary mb-8 w-full rounded-md border px-4 py-2 transition","border-stone-200 bg-stone-50 dark:border-stone-900 dark:bg-stone-800","focus:outline-none focus:ring-1 focus:ring-stone-400",e),...n})},c=n(5420),u=n(1296),f=n.n(u),d=n(7294),x=()=>{let[t,e]=(0,d.useState)(""),n=(0,d.useCallback)(f()(t=>{e(t.target.value)},300),[]);return{searchTerm:t,handleSearchTerm:n}},m=n(1364),p=n(2560),g=!0,h=t=>{let{posts:e}=t,{searchTerm:n,handleSearchTerm:s}=x(),u=e.filter(t=>t.properties.Title.rich_text[0].plain_text.toLowerCase().includes(n.toLowerCase())||t.properties.Tags.multi_select.filter(t=>t.name.toLowerCase().includes(n.toLowerCase())).length);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.T,{path:"blog"}),(0,i.jsxs)(p.m.main,{initial:"initial",animate:"animate",exit:"exit",variants:m.dA,children:[(0,i.jsx)(c.Z,{className:"my-6 text-4xl",children:"Blog"}),(0,i.jsx)(l,{placeholder:"포스트 제목, 태그로 검색",onChange:s}),n&&(0,i.jsxs)(o.Z,{children:["총"," ",(0,i.jsx)("span",{className:"text-primary font-bold",children:"".concat(u.length,"개")})," ","의 포스트가 있습니다."]}),(0,i.jsx)(p.m.ul,{variants:m.dA,className:"grid w-full gap-8 lg:grid-cols-2 lg:gap-12",children:u.map(t=>(0,i.jsx)(p.m.li,{variants:m.eu,className:"group",children:(0,i.jsx)(r.Z,{...t})},t.id))})]})]})}},2560:function(t,e,n){"use strict";n.d(e,{m:function(){return a}});var i=n(1150),r=n(4007);let a=(0,i.D)(r.w)}},function(t){t.O(0,[239,774,888,179],function(){return t(t.s=7801)}),_N_E=t.O()}]);