"use strict";(self.webpackChunkgps_tracking_app=self.webpackChunkgps_tracking_app||[]).push([[9233],{9233:(q,O,g)=>{g.r(O),g.d(O,{startInputShims:()=>X});var w=g(5861),l=g(1848),T=g(2818),y=g(4298),R=g(3920);g(1836);const M=new WeakMap,P=(e,t,s,r=0,o=!1)=>{M.has(e)!==s&&(s?H(e,t,r,o):Z(e,t))},H=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),M.set(e,n);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},Z=(e,t)=>{const s=M.get(e);s&&(M.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",U="$ionPaddingTimer",p=(e,t,s)=>{const r=e[U];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[U]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},N=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&p(t,0,s)},{once:!0})};let D=0;const B="data-ionic-skip-scroll-assist",J=(e,t,s,r,o,n,i,a=!1)=>{const _=n&&(void 0===i||i.mode===R.a.None);let m=!1;const c=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==m?F(e,t,s,r,S.detail.keyboardHeight,_,a,c,!1):m=!0},u=()=>{m=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)},h=function(){var S=(0,w.Z)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(F(e,t,s,r,o,_,a,c),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",u))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",h),()=>{e.removeEventListener("focusin",h),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)}},x=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},F=function(){var e=(0,w.Z)(function*(t,s,r,o,n,i,a=!1,_=0,m=!0){if(!r&&!o)return;const c=((e,t,s,r)=>{var o;return((e,t,s,r)=>{const o=e.top,n=e.bottom,i=t.top,_=i+15,c=Math.min(t.bottom,r-s)-50-n,f=_-o,u=Math.round(c<0?-c:f>0?-f:0),h=Math.min(u,o-i),L=Math.abs(h)/.3;return{scrollAmount:h,scrollDuration:Math.min(400,Math.max(150,L)),scrollPadding:s,inputSafeY:4-(o-_)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||o,n,_);if(r&&Math.abs(c.scrollAmount)<4)return x(s),void(i&&null!==r&&(p(r,D),N(s,r,()=>D=0)));if(P(t,s,!0,c.inputSafeY,a),x(s),(0,y.r)(()=>t.click()),i&&r&&(D=c.scrollPadding,p(r,D)),typeof window<"u"){let f;const u=function(){var S=(0,w.Z)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",h),window.removeEventListener("ionKeyboardDidShow",u),r&&(yield(0,T.c)(r,0,c.scrollAmount,c.scrollDuration)),P(t,s,!1,c.inputSafeY),x(s),i&&N(s,r,()=>D=0)});return function(){return S.apply(this,arguments)}}(),h=()=>{window.removeEventListener("ionKeyboardDidShow",h),window.addEventListener("ionKeyboardDidShow",u)};if(r){const S=yield(0,T.g)(r);if(m&&c.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",h)):window.addEventListener("ionKeyboardDidShow",u),void(f=setTimeout(u,1e3))}u()}});return function(s,r,o,n,i,a){return e.apply(this,arguments)}}(),X=function(){var e=(0,w.Z)(function*(t,s){if(void 0===l.d)return;const r="ios"===s,o="android"===s,n=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",r),_=t.getBoolean("inputBlurring",!1),m=t.getBoolean("scrollPadding",!0),c=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,u=new WeakMap,h=yield R.K.getResizeMode(),S=function(){var v=(0,w.Z)(function*(d){yield new Promise(I=>(0,y.c)(d,I));const K=d.shadowRoot||d,b=K.querySelector("input")||K.querySelector("textarea"),A=(0,T.f)(d),W=A?null:d.closest("ion-footer");if(b){if(A&&a&&!f.has(d)){const I=((e,t,s)=>{if(!s||!t)return()=>{};const r=a=>{(e=>e===e.getRootNode().activeElement)(t)&&P(e,t,a)},o=()=>P(e,t,!1),n=()=>r(!0),i=()=>r(!1);return(0,y.a)(s,"ionScrollStart",n),(0,y.a)(s,"ionScrollEnd",i),t.addEventListener("blur",o),()=>{(0,y.b)(s,"ionScrollStart",n),(0,y.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",o)}})(d,b,A);f.set(d,I)}if("date"!==b.type&&"datetime-local"!==b.type&&(A||W)&&i&&!u.has(d)){const I=J(d,b,A,W,n,m,h,o);u.set(d,I)}}});return function(K){return v.apply(this,arguments)}}();_&&(()=>{let e=!0,t=!1;const s=document;(0,y.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const _=i.target;_!==a&&(_.matches(C)||_.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const v of c)S(v);l.d.addEventListener("ionInputDidLoad",v=>{S(v.detail)}),l.d.addEventListener("ionInputDidUnload",v=>{(v=>{if(a){const d=f.get(v);d&&d(),f.delete(v)}if(i){const d=u.get(v);d&&d(),u.delete(v)}})(v.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);