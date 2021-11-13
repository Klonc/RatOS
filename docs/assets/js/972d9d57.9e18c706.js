"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[937],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(r),f=i,h=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9960:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(3366),i=r(7294),a=r(3727),o=r(2263),u=r(3919),s=r(412),c=(0,i.createContext)({collectLink:function(){}}),l=r(4996),p=r(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var t,r,f=e.isNavLink,h=e.to,m=e.href,b=e.activeClassName,v=e.isActive,k=e["data-noBrokenLinkCheck"],g=e.autoAddBaseUrl,y=void 0===g||g,O=(0,n.Z)(e,d),w=(0,o.Z)().siteConfig,R=w.trailingSlash,S=w.baseUrl,C=(0,l.C)().withBaseUrl,N=(0,i.useContext)(c),P=h||m,j=(0,u.Z)(P),M=null==P?void 0:P.replace("pathname://",""),x=void 0!==M?(r=M,y&&function(e){return e.startsWith("/")}(r)?C(r):r):void 0;x&&j&&(x=(0,p.applyTrailingSlash)(x,{trailingSlash:R,baseUrl:S}));var U=(0,i.useRef)(!1),E=f?a.OL:a.rU,_=s.Z.canUseIntersectionObserver,D=(0,i.useRef)();(0,i.useEffect)((function(){return!_&&j&&null!=x&&window.docusaurus.prefetch(x),function(){_&&D.current&&D.current.disconnect()}}),[D,x,_,j]);var T=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,W=!x||!j||T;return x&&j&&!T&&!k&&N.collectLink(x),W?i.createElement("a",Object.assign({href:x},P&&!j&&{target:"_blank",rel:"noopener noreferrer"},O)):i.createElement(E,Object.assign({},O,{onMouseEnter:function(){U.current||null==x||(window.docusaurus.preload(x),U.current=!0)},innerRef:function(e){var t,r;_&&e&&j&&(t=e,r=function(){null!=x&&window.docusaurus.prefetch(x)},D.current=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(D.current.unobserve(t),D.current.disconnect(),r())}))})),D.current.observe(t))},to:x||""},f&&{isActive:v,activeClassName:b}))}},3919:function(e,t,r){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!n(e)}r.d(t,{b:function(){return n},Z:function(){return i}})},4996:function(e,t,r){r.d(t,{C:function(){return a},Z:function(){return o}});var n=r(2263),i=r(3919);function a(){var e=(0,n.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,r=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,r,n){var a=void 0===n?{}:n,o=a.forcePrependBaseUrl,u=void 0!==o&&o,s=a.absolute,c=void 0!==s&&s;if(!r)return r;if(r.startsWith("#"))return r;if((0,i.b)(r))return r;if(u)return t+r;var l=r.startsWith(t)?r:t+r.replace(/^\//,"");return c?e+l:l}(a,r,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=t.trailingSlash,n=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===r)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===n?a:(i=a,r?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=r(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return n(i).default}});var a=r(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return n(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},9880:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=r(9960),u=["components"],s={title:"What is RatOS?",sidebar_label:"Introduction",sidebar_position:0},c="What is RatOS?",l={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"What is RatOS?",description:"RatOS is a preconfigured Raspberry Pi image that aims to make it as painless as possible to get Klipper, Moonraker, Mainsail and KlipperScreen up and running on your printer, via an easy to use, modular configuration. It is developed and maintained by Mikkel Schmidt (miklschmidt#2036 on the Rat Rig Unofficial Discord).",source:"@site/docs/introduction.mdx",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/introduction.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"What is RatOS?",sidebar_label:"Introduction",sidebar_position:0},sidebar:"docsSidebar",next:{title:"Installation",permalink:"/docs/installation"}},p=[{value:"Currently Supported Printers",id:"currently-supported-printers",children:[],level:2},{value:"Contribute",id:"contribute",children:[],level:2},{value:"Software Credits",id:"software-credits",children:[],level:2},{value:"Github links",id:"github-links",children:[],level:2}],d={toc:p};function f(e){var t=e.components,r=(0,i.Z)(e,u);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"what-is-ratos"},"What is RatOS?"),(0,a.kt)("p",null,"RatOS is a preconfigured Raspberry Pi image that aims to make it as painless as possible to get ",(0,a.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/"},"Klipper"),", ",(0,a.kt)("a",{parentName:"p",href:"https://moonraker.readthedocs.io/en/latest/"},"Moonraker"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mainsail.xyz/"},"Mainsail")," and ",(0,a.kt)("a",{parentName:"p",href:"https://klipperscreen.readthedocs.io/"},"KlipperScreen")," up and running on your printer, via an easy to use, modular configuration. It is developed and maintained by Mikkel Schmidt (miklschmidt#2036 on the Rat Rig Unofficial Discord)."),(0,a.kt)("p",null,"To run RatOS on your printer you need a supported control board and a Raspberry Pi."),(0,a.kt)(o.Z,{to:"installation",className:"button button--primary",mdxType:"Link"},"Ready? Get started!"),(0,a.kt)("h2",{id:"currently-supported-printers"},"Currently Supported Printers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/printers/v-core-3"},"Rat Rig V-Core 3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/printers/v-core-pro"},"Rat Rig V-Core Pro 1.3")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/printers/v-minion"},"Rat Rig V-Minion"))),(0,a.kt)("h2",{id:"contribute"},"Contribute"),(0,a.kt)("p",null,"Join the discussion on discord!"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/D62e8XNeYa",title:":class=button"},"Join the Unnofficial RatRig Discord Community")),(0,a.kt)("h2",{id:"software-credits"},"Software Credits"),(0,a.kt)("p",null,"RatOS is based on ",(0,a.kt)("a",{parentName:"p",href:"https://www.klipper3d.org/"},"Klipper"),", ",(0,a.kt)("a",{parentName:"p",href:"https://moonraker.readthedocs.io/en/latest/"},"Moonraker"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mainsail.xyz/"},"Mainsail"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/raymondh2/MainsailOS"},"MainsailOS")," and ",(0,a.kt)("a",{parentName:"p",href:"https://klipperscreen.readthedocs.io/"},"KlipperScreen")," without these and the amazing people behind them, RatOS would not have been possible."),(0,a.kt)("h2",{id:"github-links"},"Github links"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rat-OS/RatOS/"},"RatOS")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/rat-os/ratos-configuration"},"Configuration Repository")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/Rat-Rig/v-core-3-klipper-config"},"Old Configuration Repository (<= RC1)")))}f.isMDXComponent=!0}}]);