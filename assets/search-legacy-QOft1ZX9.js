!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t,n,i){return(n=function(t){var n=function(t,n){if("object"!=e(t)||!t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,n||"default");if("object"!=e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"==e(n)?n:n+""}(n))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}function a(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=Array(t);n<t;n++)i[n]=e[n];return i}System.register(["./vue-legacy-Cm9okHmH.js","./index-legacy-B9SpKe9x.js"],(function(e,t){"use strict";var r,c,o,l,u,f,v,s,d,y,p,b,m,h,g,k,S,I,w,x,j,O,P,V,T,A,_,B,C,E,D,N,z,K,L,U,$,F,M,G,R,Y,q,H,J,Q;return{setters:[function(e){r=e.l,c=e.d,o=e.z,l=e.e,u=e.w,f=e.j,v=e.o,s=e.c,d=e.b,y=e.u,p=e.n,b=e.ag,m=e.S,h=e.R,g=e.T,k=e.a,S=e.t,I=e.P,w=e.r,x=e.U,j=e.Y,O=e.k,P=e.aI},function(e){V=e.am,T=e.n,A=e.ao,_=e.v,B=e.A,C=e.aB,E=e.aj,D=e.an,N=e.aC,z=e.aD,K=e.B,L=e.I,U=e.k,$=e.aE,F=e.aF,M=e.p,G=e.D,R=e.K,Y=e.b,q=e.at,H=e.m,J=e.aG,Q=e.w}],execute:function(){var t=e("i",(function(e){return[""].concat(a(V)).includes(e)})),W=T(n({modelValue:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},size:{type:String,validator:t},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},inactiveActionIcon:{type:A},activeActionIcon:{type:A},activeIcon:{type:A},inactiveIcon:{type:A},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},beforeChange:{type:_(Function)},id:String,tabindex:{type:[String,Number]},label:{type:String,default:void 0}},B(["ariaLabel"]))),X=i(i(i({},C,(function(e){return E(e)||r(e)||D(e)})),N,(function(e){return E(e)||r(e)||D(e)})),z,(function(e){return E(e)||r(e)||D(e)})),Z=["onClick"],ee=["id","aria-checked","aria-disabled","aria-label","name","true-value","false-value","disabled","tabindex","onKeydown"],te=["aria-hidden"],ne=["aria-hidden"],ie=["aria-hidden"],ae="ElSwitch",re=c({name:ae}),ce=c(n(n({},re),{},{props:W,emits:X,setup:function(e,t){var n=t.expose,i=t.emit,a=e,r=K().formItem,c=L(),V=U("switch"),T=$(a,{formItemContext:r}).inputId,A=F(o((function(){return a.loading}))),_=l(!1!==a.modelValue),B=l(),D=l(),H=o((function(){return[V.b(),V.m(c.value),V.is("disabled",A.value),V.is("checked",ce.value)]})),Q=o((function(){return[V.e("label"),V.em("label","left"),V.is("active",!ce.value)]})),W=o((function(){return[V.e("label"),V.em("label","right"),V.is("active",ce.value)]})),X=o((function(){return{width:M(a.width)}}));u((function(){return a.modelValue}),(function(){_.value=!0}));var re=o((function(){return!!_.value&&a.modelValue})),ce=o((function(){return re.value===a.activeValue}));[a.activeValue,a.inactiveValue].includes(re.value)||(i(C,a.inactiveValue),i(N,a.inactiveValue),i(z,a.inactiveValue)),u(ce,(function(e){var t;B.value.checked=e,a.validateEvent&&(null==(t=null==r?void 0:r.validate)||t.call(r,"change").catch((function(e){return G()})))}));var oe=function(){var e=ce.value?a.inactiveValue:a.activeValue;i(C,e),i(N,e),i(z,e),O((function(){B.value.checked=ce.value}))},le=function(){if(!A.value){var e=a.beforeChange;if(e){var t=e();[P(t),E(t)].includes(!0)||J(ae,"beforeChange must return type `Promise<boolean>` or `boolean`"),P(t)?t.then((function(e){e&&oe()})).catch((function(e){})):t&&oe()}else oe()}};return f((function(){B.value.checked=ce.value})),R({from:"label",replacement:"aria-label",version:"2.8.0",scope:"el-switch",ref:"https://element-plus.org/en-US/component/switch.html"},o((function(){return!!a.label}))),n({focus:function(){var e,t;null==(t=null==(e=B.value)?void 0:e.focus)||t.call(e)},checked:ce}),function(e,t){return v(),s("div",{class:p(y(H)),onClick:j(le,["prevent"])},[d("input",{id:y(T),ref_key:"input",ref:B,class:p(y(V).e("input")),type:"checkbox",role:"switch","aria-checked":y(ce),"aria-disabled":y(A),"aria-label":e.label||e.ariaLabel,name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:y(A),tabindex:e.tabindex,onChange:oe,onKeydown:b(le,["enter"])},null,42,ee),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?k("v-if",!0):(v(),s("span",{key:0,class:p(y(Q))},[e.inactiveIcon?(v(),m(y(Y),{key:0},{default:h((function(){return[(v(),m(g(e.inactiveIcon)))]})),_:1})):k("v-if",!0),!e.inactiveIcon&&e.inactiveText?(v(),s("span",{key:1,"aria-hidden":y(ce)},S(e.inactiveText),9,te)):k("v-if",!0)],2)),d("span",{ref_key:"core",ref:D,class:p(y(V).e("core")),style:x(y(X))},[e.inlinePrompt?(v(),s("div",{key:0,class:p(y(V).e("inner"))},[e.activeIcon||e.inactiveIcon?(v(),m(y(Y),{key:0,class:p(y(V).is("icon"))},{default:h((function(){return[(v(),m(g(y(ce)?e.activeIcon:e.inactiveIcon)))]})),_:1},8,["class"])):e.activeText||e.inactiveText?(v(),s("span",{key:1,class:p(y(V).is("text")),"aria-hidden":!y(ce)},S(y(ce)?e.activeText:e.inactiveText),11,ne)):k("v-if",!0)],2)):k("v-if",!0),d("div",{class:p(y(V).e("action"))},[e.loading?(v(),m(y(Y),{key:0,class:p(y(V).is("loading"))},{default:h((function(){return[I(y(q))]})),_:1},8,["class"])):y(ce)?w(e.$slots,"active-action",{key:1},(function(){return[e.activeActionIcon?(v(),m(y(Y),{key:0},{default:h((function(){return[(v(),m(g(e.activeActionIcon)))]})),_:1})):k("v-if",!0)]})):y(ce)?k("v-if",!0):w(e.$slots,"inactive-action",{key:2},(function(){return[e.inactiveActionIcon?(v(),m(y(Y),{key:0},{default:h((function(){return[(v(),m(g(e.inactiveActionIcon)))]})),_:1})):k("v-if",!0)]}))],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?k("v-if",!0):(v(),s("span",{key:1,class:p(y(W))},[e.activeIcon?(v(),m(y(Y),{key:0},{default:h((function(){return[(v(),m(g(e.activeIcon)))]})),_:1})):k("v-if",!0),!e.activeIcon&&e.activeText?(v(),s("span",{key:1,"aria-hidden":!y(ce)},S(e.activeText),9,ie)):k("v-if",!0)],2))],10,Z)}}})),oe=(e("E",Q(H(ce,[["__file","switch.vue"]]))),{style:{"vertical-align":"-0.15em",fill:"currentcolor"},viewBox:"0 0 1024 1024",width:"1em",height:"1em"}),le=[d("path",{fill:"currentColor",d:"m795.904 750.72l124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704"},null,-1)];e("_",{name:"ep-search",render:function(e,t){return v(),s("svg",oe,[].concat(le))}})}}}))}();