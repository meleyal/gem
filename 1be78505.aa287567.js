(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,n){"use strict";n.r(t);n(12);var a=n(0),r=n.n(a),o=n(141),l=n(142),c=n(47),s=n(153),i=n(1),p=n(143),u=n.n(p),m=n(151),y=n(152),d=n(146),f=n(145),b=n(100),h=n.n(b);function g({item:e,onItemClick:t,collapsible:n}){const{items:o,href:l,label:c,type:s}=e,[p,m]=Object(a.useState)(e.collapsed),[y,b]=Object(a.useState)(null);e.collapsed!==y&&(b(e.collapsed),m(e.collapsed));const h=Object(a.useCallback)(e=>{e.preventDefault(),m(e=>!e)});switch(s){case"category":return o.length>0&&r.a.createElement("li",{className:u()("menu__list-item",{"menu__list-item--collapsed":p}),key:c},r.a.createElement("a",{className:u()("menu__link",{"menu__link--sublist":n,"menu__link--active":n&&!e.collapsed}),href:"#!",onClick:n?h:void 0},c),r.a.createElement("ul",{className:"menu__list"},o.map(e=>r.a.createElement(g,{key:e.label,item:e,onItemClick:t,collapsible:n}))));case"link":default:return r.a.createElement("li",{className:"menu__list-item",key:c},r.a.createElement(d.a,Object(i.a)({className:"menu__link",to:l},Object(f.a)(l)?{activeClassName:"menu__link--active",exact:!0,onClick:t}:{target:"_blank",rel:"noreferrer noopener"}),c))}}var v=function(e){const[t,n]=Object(a.useState)(!1),{siteConfig:{themeConfig:{navbar:{title:o,hideOnScroll:c=!1}={}}}={},isClient:s}=Object(l.a)(),{logoLink:p,logoLinkProps:f,logoImageUrl:b,logoAlt:v}=Object(y.a)(),{docsSidebars:k,path:O,sidebar:E,sidebarCollapsible:j}=e;if(Object(m.a)(t),!E)return null;const w=k[E];if(!w)throw new Error(`Cannot find the sidebar "${E}" in the sidebar config!`);return j&&w.forEach(e=>function e(t,n){const{items:a,href:r,type:o}=t;switch(o){case"category":{const r=a.map(t=>e(t,n)).filter(e=>e).length>0;return t.collapsed=!r,r}case"link":default:return r===n}}(e,O)),r.a.createElement("div",{className:h.a.sidebar},c&&r.a.createElement(d.a,Object(i.a)({className:h.a.sidebarLogo,to:p},f),null!=b&&r.a.createElement("img",{key:s,src:b,alt:v}),null!=o&&r.a.createElement("strong",null,o)),r.a.createElement("div",{className:u()("menu","menu--responsive",h.a.menu,{"menu--show":t})},r.a.createElement("button",{"aria-label":t?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{n(!t)}},t?r.a.createElement("span",{className:u()(h.a.sidebarMenuIcon,h.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement("svg",{"aria-label":"Menu",className:h.a.sidebarMenuIcon,xmlns:"http://www.w3.org/2000/svg",height:24,width:24,viewBox:"0 0 32 32",role:"img",focusable:"false"},r.a.createElement("title",null,"Menu"),r.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),r.a.createElement("ul",{className:"menu__list"},w.map(e=>r.a.createElement(g,{key:e.label,item:e,onItemClick:()=>{n(!1)},collapsible:j})))))},k={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},O={Prism:n(35).a,theme:k};function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var w=/\r\n|\r|\n/,N=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},C=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},P=function(e,t){var n=e.plain,a=Object.create(null),r=e.styles.reduce((function(e,n){var a=n.languages,r=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=j({},e[t],r);e[t]=n})),e}),a);return r.root=n,r.plain=j({},n,{backgroundColor:null}),r};function _(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var T=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),E(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?P(e.theme,e.language):void 0;return t.themeDict=n})),E(this,"getLineProps",(function(e){var n=e.key,a=e.className,r=e.style,o=j({},_(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),l=t.getThemeDict(t.props);return void 0!==l&&(o.style=l.plain),void 0!==r&&(o.style=void 0!==o.style?j({},o.style,r):r),void 0!==n&&(o.key=n),a&&(o.className+=" "+a),o})),E(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,r=n.length,o=t.getThemeDict(t.props);if(void 0!==o){if(1===r&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===r&&!a)return o[n[0]];var l=a?{display:"inline-block"}:{},c=n.map((function(e){return o[e]}));return Object.assign.apply(Object,[l].concat(c))}})),E(this,"getTokenProps",(function(e){var n=e.key,a=e.className,r=e.style,o=e.token,l=j({},_(e,["key","className","style","token"]),{className:"token "+o.types.join(" "),children:o.content,style:t.getStyleForToken(o),key:void 0});return void 0!==r&&(l.style=void 0!==l.style?j({},l.style,r):r),void 0!==n&&(l.key=n),a&&(l.className+=" "+a),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,r=e.children,o=this.getThemeDict(this.props),l=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],a=[0],r=[e.length],o=0,l=0,c=[],s=[c];l>-1;){for(;(o=a[l]++)<r[l];){var i=void 0,p=t[l],u=n[l][o];if("string"==typeof u?(p=l>0?p:["plain"],i=u):(p=C(p,u.type),u.alias&&(p=C(p,u.alias)),i=u.content),"string"==typeof i){var m=i.split(w),y=m.length;c.push({types:p,content:m[0]});for(var d=1;d<y;d++)N(c),s.push(c=[]),c.push({types:p,content:m[d]})}else l++,t.push(p),n.push(i),a.push(0),r.push(i.length)}l--,t.pop(),n.pop(),a.pop(),r.pop()}return N(c),s}(void 0!==l?t.tokenize(a,l,n):[a]),className:"prism-code language-"+n,style:void 0!==o?o.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component),x={plain:{color:"#393A34",backgroundColor:"#f6f8fa"},styles:[{types:["comment","prolog","doctype","cdata"],style:{color:"#999988",fontStyle:"italic"}},{types:["namespace"],style:{opacity:.7}},{types:["string","attr-value"],style:{color:"#e3116c"}},{types:["punctuation","operator"],style:{color:"#393A34"}},{types:["entity","url","symbol","number","boolean","variable","constant","property","regex","inserted"],style:{color:"#36acaa"}},{types:["atrule","keyword","attr-name","selector"],style:{color:"#00a4db"}},{types:["function","deleted","tag"],style:{color:"#d73a49"}},{types:["function-variable"],style:{color:"#6f42c1"}},{types:["tag","selector","keyword"],style:{color:"#00009f"}}]},S=n(101),D=n.n(S),M=({children:e,className:t})=>{const n=Object(a.useRef)(null),o=Object(a.useRef)(null),l=t&&t.replace(/language-/,""),[c,s]=Object(a.useState)(!1),p=r.a.createElement("button",{ref:o,type:"button",className:u()(D.a.runButton),onClick:()=>{c&&window.location.reload(),Function(n.current.innerText)(),s(!0)}},c?"Stop":"Run");return r.a.createElement(T,Object(i.a)({},O,{theme:x,code:e,language:l}),e=>r.a.createElement("div",{className:D.a.codeBlockContent},p,(({className:e,style:t,tokens:a,getLineProps:o,getTokenProps:l})=>r.a.createElement("div",{className:u()(e,D.a.codeBlock)},r.a.createElement("div",{ref:n,className:D.a.codeBlockLines,style:t},a.map((e,t)=>{const n=o({line:e,key:t});return r.a.createElement("div",Object(i.a)({key:t},n),e.map((e,t)=>r.a.createElement("span",Object(i.a)({key:t},l({token:e,key:t})))))}))))(e)))},L=(n(102),n(103)),I=n.n(L);var B=e=>function({id:t,...n}){const{siteConfig:{themeConfig:{navbar:{hideOnScroll:a=!1}={}}={}}={}}=Object(l.a)();return t?r.a.createElement(e,n,r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:u()("anchor",{[I.a.enhancedAnchor]:!a}),id:t}),r.a.createElement("a",{"aria-hidden":"true",tabIndex:"-1",className:"hash-link",href:"#"+t,title:"Direct link to heading"},"#"),n.children):r.a.createElement(e,n)},A=n(104),F=n.n(A),R={code:e=>{const{children:t}=e;return"string"==typeof t?r.a.createElement(M,e):t},a:e=>/\.[^./]+$/.test(e.href)?r.a.createElement("a",e):r.a.createElement(d.a,e),pre:e=>r.a.createElement("div",Object(i.a)({className:F.a.mdxCodeBlock},e)),h1:B("h1"),h2:B("h2"),h3:B("h3"),h4:B("h4"),h5:B("h5"),h6:B("h6")},J=n(154),W=n(147),$=n(105),z=n.n($);t.default=function(e){const{route:t,docsMetadata:n,location:a}=e,i=t.routes.find(e=>Object(W.b)(a.pathname,e))||{},{permalinkToSidebar:p,docsSidebars:u,version:m}=n,y=p[i.path],{siteConfig:{themeConfig:d={}}={},isClient:f}=Object(l.a)(),{sidebarCollapsible:b=!0}=d;return 0===Object.keys(i).length?r.a.createElement(J.default,e):r.a.createElement(s.a,{version:m,key:f},r.a.createElement("div",{className:z.a.docPage},y&&r.a.createElement("div",{className:z.a.docSidebarContainer},r.a.createElement(v,{docsSidebars:u,path:i.path,sidebar:y,sidebarCollapsible:b})),r.a.createElement("main",{className:z.a.docMainContainer},r.a.createElement(o.a,{components:R},Object(c.a)(t.routes)))))}},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},u=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},y=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),u=p(n),y=a,d=u["".concat(l,".").concat(y)]||u[y]||m[y]||o;return n?r.a.createElement(d,c({ref:t},i,{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}y.displayName="MDXCreateElement"}}]);