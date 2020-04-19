(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{115:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(6),o=(n(0),n(141)),c={title:"Architecture"},i={id:"examples/architecture",title:"Architecture",description:"This chapter focuses on how to structure our programs. The goal is to provide",source:"@site/docs/examples/architecture.md",permalink:"/docs/examples/architecture"},s=[{value:"Model",id:"model",children:[]},{value:"Messages",id:"messages",children:[]},{value:"Update",id:"update",children:[]},{value:"Render",id:"render",children:[]},{value:"Program",id:"program",children:[]}],l={rightToc:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This chapter focuses on how to structure our programs. The goal is to provide\nsome minimal conventions for where to put things, so we can focus on the\ninteresting parts of our program."),Object(o.b)("p",null,"This is not essential, you can certainly structure your program any way that\nmakes sense to you. What's offered here is one way to do it. Even if you don't\nadopt this pattern, it's worth skimming this chapter as the later examples in\nthe book use it."),Object(o.b)("p",null,'The architecture presented here is based on the concept of "one-way data flow",\nand is borrowed from\n',Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://guide.elm-lang.org/architecture/"}),"The Elm Architecture"),". A ",Object(o.b)("inlineCode",{parentName:"p"},"program"),"\ngenerates ",Object(o.b)("inlineCode",{parentName:"p"},"messages")," which are sent to an ",Object(o.b)("inlineCode",{parentName:"p"},"update")," function that updates a data\n",Object(o.b)("inlineCode",{parentName:"p"},"model")," and passes it to a ",Object(o.b)("inlineCode",{parentName:"p"},"render")," function. It's as simple as that!"),Object(o.b)("p",null,Object(o.b)("img",Object(r.a)({parentName:"p"},{src:"/img/architecture/one-way-data-flow.svg",alt:null}))),Object(o.b)("h2",{id:"model"},"Model"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"model"),' is an object that describes the state of our program. Here, we can\nthink about the "shape" of the data that our program will need. We can fill in\nknown values, and provide placeholders for data we need to wait for (e.g.\nsamples being loaded).'),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const model = {\n  tick: 0,\n  bpm: 60,\n  samples: [],\n}\n")),Object(o.b)("h2",{id:"messages"},"Messages"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"messages()")," function describes all the things we want to happen in our\nprogram. It receives the current ",Object(o.b)("inlineCode",{parentName:"p"},"model"),", and a ",Object(o.b)("inlineCode",{parentName:"p"},"send()")," function it can use to\nupdate the model. It returns an object describing the things we want to happen\nin our program."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const messages = (model, send) => {\n  return {\n    tick: () => {\n      setInterval(() => {\n        send({ tick: 1 })\n      }, 1000)\n    },\n  }\n}\n")),Object(o.b)("p",null,"Messages can optionally call other messages:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const messages = (model, send) => {\n  const msgs =  {\n    tick: () => {\n      setInterval(() => {\n        const msg = { tick: 1, ...msgs.hello() }\n        send(msg)\n      }, 1000)\n    }\n\n    hello: () => {\n      return { hello: 'world' }\n    }\n  }\n\n  return msgs\n}\n")),Object(o.b)("h2",{id:"update"},"Update"),Object(o.b)("p",null,"If your update logic is more complicated, you can provide a custom ",Object(o.b)("inlineCode",{parentName:"p"},"update()"),"\nfunction to ",Object(o.b)("inlineCode",{parentName:"p"},"program()"),"."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"update()")," function receives the current ",Object(o.b)("inlineCode",{parentName:"p"},"model"),', and a message (or\n"action") (',Object(o.b)("inlineCode",{parentName:"p"},"msg"),'). It updates the model according to the message type and\nreturns it. While not enforced, you should think of the model as immutable. Each\ntime we update it we get back a new version or "snapshot" of the current model.\nThe benefits of immutable model will become more apparent later in the book.'),Object(o.b)("p",null,"The default implementation just merges the message into the model using the key\nand value of the ",Object(o.b)("inlineCode",{parentName:"p"},"msg"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const update = (model, msg) => {\n  return {\n    ...model,\n    ...msg,\n  }\n}\n\nupdate({ tick: 0 }, { tick: 1 }) // => { tick: 1 }\n")),Object(o.b)("h2",{id:"render"},"Render"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"render()")," function is where we actually make sounds. It takes our model as\ninput, and the result is something that outputs audio to our speakers."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"TODO: Example")),Object(o.b)("h2",{id:"program"},"Program"),Object(o.b)("p",null,"These functions don't currently talk to each other, we still need a way to wire\nthem together."),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"program()")," function takes care of calling ",Object(o.b)("inlineCode",{parentName:"p"},"init()")," to build the initial\nmodel, sends ",Object(o.b)("inlineCode",{parentName:"p"},"messages()")," to ",Object(o.b)("inlineCode",{parentName:"p"},"update()")," our model, and automatically calls\n",Object(o.b)("inlineCode",{parentName:"p"},"render()")," with the updated model, forming a continuous feedback loop."),Object(o.b)("p",null,"This example shows how to setup a metronome to continually update the model with\nthe current beat."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { program, metronome, resolution } = tuplet\n\n// -- MODEL\n\nconst model = {\n  tick: 0\n}\n\n// -- MESSAGES\n\nconst messages = (model, send) => ({\n  const { context } = model\n\n  tick: () => {\n    const metro = resolution(metronome(context, 60), 4)\n\n    metro.subscribe(tick => {\n      send({ tick })\n    })\n  }\n})\n\n// -- RENDER\n\nconst render = model => {\n  console.log('render', model.tick)\n}\n\n// -- PROGRAM\n\nprogram({ model, messages, render })\n")))}p.isMDXComponent=!0},141:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?a.a.createElement(b,i({ref:t},l,{components:n})):a.a.createElement(b,i({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);