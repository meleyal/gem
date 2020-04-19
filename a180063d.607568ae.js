(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{123:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return c})),t.d(e,"metadata",(function(){return s})),t.d(e,"rightToc",(function(){return i})),t.d(e,"default",(function(){return u}));var r=t(1),o=t(6),a=(t(0),t(141)),c={title:"Canon"},s={id:"examples/canon",title:"Canon",description:"```js",source:"@site/docs/examples/canon.md",permalink:"/docs/examples/canon",sidebar:"main",previous:{title:"Phasing",permalink:"/docs/examples/phasing"},next:{title:"API Reference",permalink:"/docs/api/index"}},i=[],p={rightToc:i};function u(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"/**\n * \"Row Your Boat\"\n *\n * Adapted from https://git.io/fjyri\n */\n\nconst { createEnv, fx, inst, seq, music } = tuplet\nconst { c4, d4, e4, f4, g4, c5, rest } = music.pitches\nconst { wn, qn, den, sn, hn, ent } = music.durations\n\n;(async () => {\n  const rests = [[rest, wn]]\n\n  const notes = [\n    [c4, qn],\n    [c4, qn],\n    [c4, den],\n    [d4, sn],\n    [e4, qn],\n\n    [e4, den],\n    [d4, sn],\n    [e4, den],\n    [f4, sn],\n    [g4, hn],\n\n    [c5, ent],\n    [c5, ent],\n    [c5, ent],\n    [g4, ent],\n    [g4, ent],\n    [g4, ent],\n    [e4, ent],\n    [e4, ent],\n    [e4, ent],\n    [c4, ent],\n    [c4, ent],\n    [c4, ent],\n\n    [g4, den],\n    [f4, sn],\n    [e4, den],\n    [d4, sn],\n    [c4, hn],\n  ]\n\n  const bpm = 90.0\n  const env = createEnv()\n\n  env.connect(await fx.compressor(env), await fx.reverb(env), env.master)\n\n  const piano = await inst.sampler(env, 'piano')\n\n  const theme = seq(notes).repeat(2).quantize(bpm)\n\n  const res1 = seq\n    .concat(seq(rests), seq(notes).repeat(2).transpose(12))\n    .quantize(bpm)\n\n  const res2 = seq\n    .concat(seq(rests).repeat(2), seq(notes).repeat(2).transpose(-12))\n    .quantize(bpm)\n\n  seq.play(theme, piano)\n  seq.play(res1, piano)\n  seq.play(res2, piano)\n})()\n")))}u.isMDXComponent=!0},141:function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return d}));var r=t(0),o=t.n(r);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function c(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?c(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=o.a.createContext({}),u=function(n){var e=o.a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):s({},e,{},n)),t},l=function(n){var e=u(n.components);return o.a.createElement(p.Provider,{value:e},n.children)},f={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},m=Object(r.forwardRef)((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,c=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),l=u(t),m=r,d=l["".concat(c,".").concat(m)]||l[m]||f[m]||a;return t?o.a.createElement(d,s({ref:e},p,{components:t})):o.a.createElement(d,s({ref:e},p))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,c=new Array(a);c[0]=m;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=n,s.mdxType="string"==typeof n?n:r,c[1]=s;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);