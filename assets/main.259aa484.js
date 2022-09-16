(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function C(){}function K(e,t){for(const n in t)e[n]=t[n];return e}function Yt(e){return e()}function Ot(){return Object.create(null)}function Y(e){e.forEach(Yt)}function Gt(e){return typeof e=="function"}function D(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let et;function Zt(e,t){return et||(et=document.createElement("a")),et.href=t,e===et.href}function se(e){return Object.keys(e).length===0}function Jt(e,...t){if(e==null)return C;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function q(e,t,n){e.$$.on_destroy.push(Jt(t,n))}function wt(e,t,n,o){if(e){const r=Vt(e,t,n,o);return e[0](r)}}function Vt(e,t,n,o){return e[1]&&o?K(n.ctx.slice(),e[1](o(t))):n.ctx}function $t(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],c=Math.max(t.dirty.length,r.length);for(let u=0;u<c;u+=1)s[u]=t.dirty[u]|r[u];return s}return t.dirty|r}return t.dirty}function Pt(e,t,n,o,r,s){if(r){const c=Vt(t,n,o,s);e.p(c,r)}}function Et(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function gt(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Nt(e,t){const n={};t=new Set(t);for(const o in e)!t.has(o)&&o[0]!=="$"&&(n[o]=e[o]);return n}function ie(e){return e==null?"":e}function g(e,t){e.appendChild(t)}function N(e,t,n){e.insertBefore(t,n||null)}function A(e){e.parentNode.removeChild(e)}function Xt(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function w(e){return document.createElement(e)}function z(e){return document.createTextNode(e)}function j(){return z(" ")}function St(){return z("")}function xt(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function E(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Rt(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in t)t[o]==null?e.removeAttribute(o):o==="style"?e.style.cssText=t[o]:o==="__value"?e.value=e[o]=t[o]:n[o]&&n[o].set?e[o]=t[o]:E(e,o,t[o])}function le(e){return Array.from(e.childNodes)}function at(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function ce(e,t,n,o){n===null?e.style.removeProperty(t):e.style.setProperty(t,n,o?"important":"")}function ue(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}let X;function V(e){X=e}function tt(){if(!X)throw new Error("Function called outside component initialization");return X}function ae(e){tt().$$.on_mount.push(e)}function fe(e){tt().$$.on_destroy.push(e)}function pe(){const e=tt();return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t];if(r){const s=ue(t,n,{cancelable:o});return r.slice().forEach(c=>{c.call(e,s)}),!s.defaultPrevented}return!0}}function It(e,t){return tt().$$.context.set(e,t),t}function W(e){return tt().$$.context.get(e)}const Z=[],it=[],rt=[],Mt=[],me=Promise.resolve();let _t=!1;function de(){_t||(_t=!0,me.then(te))}function bt(e){rt.push(e)}const ft=new Set;let nt=0;function te(){const e=X;do{for(;nt<Z.length;){const t=Z[nt];nt++,V(t),he(t.$$)}for(V(null),Z.length=0,nt=0;it.length;)it.pop()();for(let t=0;t<rt.length;t+=1){const n=rt[t];ft.has(n)||(ft.add(n),n())}rt.length=0}while(Z.length);for(;Mt.length;)Mt.pop()();_t=!1,ft.clear(),V(e)}function he(e){if(e.fragment!==null){e.update(),Y(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(bt)}}const st=new Set;let U;function vt(){U={r:0,c:[],p:U}}function Ct(){U.r||Y(U.c),U=U.p}function v(e,t){e&&e.i&&(st.delete(e),e.i(t))}function O(e,t,n,o){if(e&&e.o){if(st.has(e))return;st.add(e),U.c.push(()=>{st.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function ee(e,t){const n={},o={},r={$$scope:1};let s=e.length;for(;s--;){const c=e[s],u=t[s];if(u){for(const l in c)l in u||(o[l]=1);for(const l in u)r[l]||(n[l]=u[l],r[l]=1);e[s]=u}else for(const l in c)r[l]=1}for(const c in o)c in n||(n[c]=void 0);return n}function Tt(e){return typeof e=="object"&&e!==null?e:{}}function H(e){e&&e.c()}function M(e,t,n,o){const{fragment:r,on_mount:s,on_destroy:c,after_update:u}=e.$$;r&&r.m(t,n),o||bt(()=>{const l=s.map(Yt).filter(Gt);c?c.push(...l):Y(l),e.$$.on_mount=[]}),u.forEach(bt)}function T(e,t){const n=e.$$;n.fragment!==null&&(Y(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ge(e,t){e.$$.dirty[0]===-1&&(Z.push(e),de(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function F(e,t,n,o,r,s,c,u=[-1]){const l=X;V(e);const i=e.$$={fragment:null,ctx:null,props:s,update:C,not_equal:r,bound:Ot(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:Ot(),dirty:u,skip_bound:!1,root:t.target||l.$$.root};c&&c(i.root);let a=!1;if(i.ctx=n?n(e,t.props||{},(_,m,...f)=>{const d=f.length?f[0]:m;return i.ctx&&r(i.ctx[_],i.ctx[_]=d)&&(!i.skip_bound&&i.bound[_]&&i.bound[_](d),a&&ge(e,_)),m}):[],i.update(),a=!0,Y(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const _=le(t.target);i.fragment&&i.fragment.l(_),_.forEach(A)}else i.fragment&&i.fragment.c();t.intro&&v(e.$$.fragment),M(e,t.target,t.anchor,t.customElement),te()}V(l)}class B{$destroy(){T(this,1),this.$destroy=C}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!se(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Q=[];function _e(e,t){return{subscribe:J(e,t).subscribe}}function J(e,t=C){let n;const o=new Set;function r(u){if(D(e,u)&&(e=u,n)){const l=!Q.length;for(const i of o)i[1](),Q.push(i,e);if(l){for(let i=0;i<Q.length;i+=2)Q[i][0](Q[i+1]);Q.length=0}}}function s(u){r(u(e))}function c(u,l=C){const i=[u,l];return o.add(i),o.size===1&&(n=t(r)||C),u(e),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:c}}function be(e,t,n){const o=!Array.isArray(e),r=o?[e]:e,s=t.length<2;return _e(n,c=>{let u=!1;const l=[];let i=0,a=C;const _=()=>{if(i)return;a();const f=t(o?l[0]:l,c);s?c(f):a=Gt(f)?f:C},m=r.map((f,d)=>Jt(f,p=>{l[d]=p,i&=~(1<<d),u&&_()},()=>{i|=1<<d}));return u=!0,_(),function(){Y(m),a()}})}const lt={},ct={};function pt(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function ye(e,t){const n=[];let o=pt(e);return{get location(){return o},listen(r){n.push(r);const s=()=>{o=pt(e),r({location:o,action:"POP"})};return e.addEventListener("popstate",s),()=>{e.removeEventListener("popstate",s);const c=n.indexOf(r);n.splice(c,1)}},navigate(r,{state:s,replace:c=!1}={}){s={...s,key:Date.now()+""};try{c?e.history.replaceState(s,null,r):e.history.pushState(s,null,r)}catch{e.location[c?"replace":"assign"](r)}o=pt(e),n.forEach(u=>u({location:o,action:"PUSH"}))}}}function ke(e="/"){let t=0;const n=[{pathname:e,search:""}],o=[];return{get location(){return n[t]},addEventListener(r,s){},removeEventListener(r,s){},history:{get entries(){return n},get index(){return t},get state(){return o[t]},pushState(r,s,c){const[u,l=""]=c.split("?");t++,n.push({pathname:u,search:l}),o.push(r)},replaceState(r,s,c){const[u,l=""]=c.split("?");n[t]={pathname:u,search:l},o[t]=r}}}}const we=Boolean(typeof window<"u"&&window.document&&window.document.createElement),yt=ye(we?window:ke()),{navigate:$e}=yt,ne=/^:(.+)/,zt=4,Pe=3,Ee=2,Se=1,ve=1;function kt(e,t){return e.substr(0,t.length)===t}function Ce(e){return e===""}function Le(e){return ne.test(e)}function oe(e){return e[0]==="*"}function x(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function mt(e){return e.replace(/(^\/+|\/+$)/g,"")}function je(e,t){const n=e.default?0:x(e.path).reduce((o,r)=>(o+=zt,Ce(r)?o+=ve:Le(r)?o+=Ee:oe(r)?o-=zt+Se:o+=Pe,o),0);return{route:e,score:n,index:t}}function Ae(e){return e.map(je).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function re(e,t){let n,o;const[r]=t.split("?"),s=x(r),c=s[0]==="",u=Ae(e);for(let l=0,i=u.length;l<i;l++){const a=u[l].route;let _=!1;if(a.default){o={route:a,params:{},uri:t};continue}const m=x(a.path),f={},d=Math.max(s.length,m.length);let p=0;for(;p<d;p++){const y=m[p],P=s[p];if(y!==void 0&&oe(y)){const S=y==="*"?"*":y.slice(1);f[S]=s.slice(p).map(decodeURIComponent).join("/");break}if(P===void 0){_=!0;break}let L=ne.exec(y);if(L&&!c){const S=decodeURIComponent(P);f[L[1]]=S}else if(y!==P){_=!0;break}}if(!_){n={route:a,params:f,uri:"/"+s.slice(0,p).join("/")};break}}return n||o||null}function Oe(e,t){return re([e],t)}function dt(e,t){return e+(t?`?${t}`:"")}function Ne(e,t){if(kt(e,"/"))return e;const[n,o]=e.split("?"),[r]=t.split("?"),s=x(n),c=x(r);if(s[0]==="")return dt(r,o);if(!kt(s[0],".")){const i=c.concat(s).join("/");return dt((r==="/"?"":"/")+i,o)}const u=c.concat(s),l=[];return u.forEach(i=>{i===".."?l.pop():i!=="."&&l.push(i)}),dt("/"+l.join("/"),o)}function Ht(e,t){return`${mt(t==="/"?e:`${mt(e)}/${mt(t)}`)}/`}function Re(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Ie(e){let t;const n=e[9].default,o=wt(n,e,e[8],null);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,[s]){o&&o.p&&(!t||s&256)&&Pt(o,n,r,r[8],t?$t(n,r[8],s,null):Et(r[8]),null)},i(r){t||(v(o,r),t=!0)},o(r){O(o,r),t=!1},d(r){o&&o.d(r)}}}function Me(e,t,n){let o,r,s,{$$slots:c={},$$scope:u}=t,{basepath:l="/"}=t,{url:i=null}=t;const a=W(lt),_=W(ct),m=J([]);q(e,m,b=>n(6,r=b));const f=J(null);let d=!1;const p=a||J(i?{pathname:i}:yt.location);q(e,p,b=>n(5,o=b));const y=_?_.routerBase:J({path:l,uri:l});q(e,y,b=>n(7,s=b));const P=be([y,f],([b,$])=>{if($===null)return b;const{path:h}=b,{route:R,uri:G}=$;return{path:R.default?h:R.path.replace(/\*.*$/,""),uri:G}});function L(b){const{path:$}=s;let{path:h}=b;if(b._path=h,b.path=Ht($,h),typeof window>"u"){if(d)return;const R=Oe(b,o.pathname);R&&(f.set(R),d=!0)}else m.update(R=>(R.push(b),R))}function S(b){m.update($=>{const h=$.indexOf(b);return $.splice(h,1),$})}return a||(ae(()=>yt.listen($=>{p.set($.location)})),It(lt,p)),It(ct,{activeRoute:f,base:y,routerBase:P,registerRoute:L,unregisterRoute:S}),e.$$set=b=>{"basepath"in b&&n(3,l=b.basepath),"url"in b&&n(4,i=b.url),"$$scope"in b&&n(8,u=b.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:b}=s;m.update($=>($.forEach(h=>h.path=Ht(b,h._path)),$))}if(e.$$.dirty&96){const b=re(r,o.pathname);f.set(b)}},[m,p,y,l,i,o,r,s,u,c]}class Te extends B{constructor(t){super(),F(this,t,Me,Ie,D,{basepath:3,url:4})}}const ze=e=>({params:e&4,location:e&16}),Dt=e=>({params:e[2],location:e[4]});function Ft(e){let t,n,o,r;const s=[De,He],c=[];function u(l,i){return l[0]!==null?0:1}return t=u(e),n=c[t]=s[t](e),{c(){n.c(),o=St()},m(l,i){c[t].m(l,i),N(l,o,i),r=!0},p(l,i){let a=t;t=u(l),t===a?c[t].p(l,i):(vt(),O(c[a],1,1,()=>{c[a]=null}),Ct(),n=c[t],n?n.p(l,i):(n=c[t]=s[t](l),n.c()),v(n,1),n.m(o.parentNode,o))},i(l){r||(v(n),r=!0)},o(l){O(n),r=!1},d(l){c[t].d(l),l&&A(o)}}}function He(e){let t;const n=e[10].default,o=wt(n,e,e[9],Dt);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,s){o&&o.p&&(!t||s&532)&&Pt(o,n,r,r[9],t?$t(n,r[9],s,ze):Et(r[9]),Dt)},i(r){t||(v(o,r),t=!0)},o(r){O(o,r),t=!1},d(r){o&&o.d(r)}}}function De(e){let t,n,o;const r=[{location:e[4]},e[2],e[3]];var s=e[0];function c(u){let l={};for(let i=0;i<r.length;i+=1)l=K(l,r[i]);return{props:l}}return s&&(t=new s(c())),{c(){t&&H(t.$$.fragment),n=St()},m(u,l){t&&M(t,u,l),N(u,n,l),o=!0},p(u,l){const i=l&28?ee(r,[l&16&&{location:u[4]},l&4&&Tt(u[2]),l&8&&Tt(u[3])]):{};if(s!==(s=u[0])){if(t){vt();const a=t;O(a.$$.fragment,1,0,()=>{T(a,1)}),Ct()}s?(t=new s(c()),H(t.$$.fragment),v(t.$$.fragment,1),M(t,n.parentNode,n)):t=null}else s&&t.$set(i)},i(u){o||(t&&v(t.$$.fragment,u),o=!0)},o(u){t&&O(t.$$.fragment,u),o=!1},d(u){u&&A(n),t&&T(t,u)}}}function Fe(e){let t,n,o=e[1]!==null&&e[1].route===e[7]&&Ft(e);return{c(){o&&o.c(),t=St()},m(r,s){o&&o.m(r,s),N(r,t,s),n=!0},p(r,[s]){r[1]!==null&&r[1].route===r[7]?o?(o.p(r,s),s&2&&v(o,1)):(o=Ft(r),o.c(),v(o,1),o.m(t.parentNode,t)):o&&(vt(),O(o,1,1,()=>{o=null}),Ct())},i(r){n||(v(o),n=!0)},o(r){O(o),n=!1},d(r){o&&o.d(r),r&&A(t)}}}function Be(e,t,n){let o,r,{$$slots:s={},$$scope:c}=t,{path:u=""}=t,{component:l=null}=t;const{registerRoute:i,unregisterRoute:a,activeRoute:_}=W(ct);q(e,_,y=>n(1,o=y));const m=W(lt);q(e,m,y=>n(4,r=y));const f={path:u,default:u===""};let d={},p={};return i(f),typeof window<"u"&&fe(()=>{a(f)}),e.$$set=y=>{n(13,t=K(K({},t),gt(y))),"path"in y&&n(8,u=y.path),"component"in y&&n(0,l=y.component),"$$scope"in y&&n(9,c=y.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&o&&o.route===f&&n(2,d=o.params);{const{path:y,component:P,...L}=t;n(3,p=L)}},t=gt(t),[l,o,d,p,r,_,m,f,u,c,s]}class ot extends B{constructor(t){super(),F(this,t,Be,Fe,D,{path:8,component:0})}}function Ue(e){let t,n,o,r;const s=e[16].default,c=wt(s,e,e[15],null);let u=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],l={};for(let i=0;i<u.length;i+=1)l=K(l,u[i]);return{c(){t=w("a"),c&&c.c(),Rt(t,l)},m(i,a){N(i,t,a),c&&c.m(t,null),n=!0,o||(r=xt(t,"click",e[5]),o=!0)},p(i,[a]){c&&c.p&&(!n||a&32768)&&Pt(c,s,i,i[15],n?$t(s,i[15],a,null):Et(i[15]),null),Rt(t,l=ee(u,[(!n||a&1)&&{href:i[0]},(!n||a&4)&&{"aria-current":i[2]},a&2&&i[1],a&64&&i[6]]))},i(i){n||(v(c,i),n=!0)},o(i){O(c,i),n=!1},d(i){i&&A(t),c&&c.d(i),o=!1,r()}}}function qe(e,t,n){let o;const r=["to","replace","state","getProps"];let s=Nt(t,r),c,u,{$$slots:l={},$$scope:i}=t,{to:a="#"}=t,{replace:_=!1}=t,{state:m={}}=t,{getProps:f=()=>({})}=t;const{base:d}=W(ct);q(e,d,h=>n(14,u=h));const p=W(lt);q(e,p,h=>n(13,c=h));const y=pe();let P,L,S,b;function $(h){if(y("click",h),Re(h)){h.preventDefault();const R=c.pathname===P||_;$e(P,{state:m,replace:R})}}return e.$$set=h=>{t=K(K({},t),gt(h)),n(6,s=Nt(t,r)),"to"in h&&n(7,a=h.to),"replace"in h&&n(8,_=h.replace),"state"in h&&n(9,m=h.state),"getProps"in h&&n(10,f=h.getProps),"$$scope"in h&&n(15,i=h.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&n(0,P=a==="/"?u.uri:Ne(a,u.uri)),e.$$.dirty&8193&&n(11,L=kt(c.pathname,P)),e.$$.dirty&8193&&n(12,S=P===c.pathname),e.$$.dirty&4096&&n(2,o=S?"page":void 0),e.$$.dirty&15361&&n(1,b=f({location:c,href:P,isPartiallyCurrent:L,isCurrent:S}))},[P,b,o,d,p,$,s,a,_,m,f,L,S,c,u,i,l]}class ht extends B{constructor(t){super(),F(this,t,qe,Ue,D,{to:7,replace:8,state:9,getProps:10})}}const Bt=[{img:"/notezzz.png",title:"Notezzz",desc:"A cross platform note-taking app",links:[{type:"globe",link:"https://notezzz.web.app"},{type:"github",link:"https://github.com/Abban-Fahim/notezzz"}]},{img:"/ez-mcq.png",title:"EZ MCQs",desc:"A little app to help you prepare for the IGCSE Science MCQs",links:[{type:"globe",link:"https://kzdtp9.deta.dev/"},{type:"github",link:"https://github.com/Abban-Fahim/MCQ"}]}],Ke=["cloistered","clumsy","cautious","crabby","cool","c*nty","crappy","chill"],Qe=["producing music","baking cupcakes","being a nerd","helping people","making terrible jokes","setting ambitious goals","socialist policies","playing video-games"];function Ut(e,t,n){const o=e.slice();return o[0]=t[n],o}function qt(e,t,n){const o=e.slice();return o[3]=t[n],o}function Kt(e){let t,n;return{c(){t=w("a"),n=w("i"),E(n,"class",ie("bi bi-"+e[3].type)+" svelte-1erj9le"),E(t,"class","project-link svelte-1erj9le"),E(t,"href",e[3].link)},m(o,r){N(o,t,r),g(t,n)},p:C,d(o){o&&A(t)}}}function Qt(e){let t,n,o=e[0].title+"",r,s,c,u=e[0].desc+"",l,i,a,_=e[0].links,m=[];for(let f=0;f<_.length;f+=1)m[f]=Kt(qt(e,_,f));return{c(){t=w("div"),n=w("h5"),r=z(o),s=j(),c=w("p"),l=z(u),i=j();for(let f=0;f<m.length;f+=1)m[f].c();a=j(),E(t,"class","item")},m(f,d){N(f,t,d),g(t,n),g(n,r),g(t,s),g(t,c),g(c,l),g(t,i);for(let p=0;p<m.length;p+=1)m[p].m(t,null);g(t,a)},p(f,d){if(d&0){_=f[0].links;let p;for(p=0;p<_.length;p+=1){const y=qt(f,_,p);m[p]?m[p].p(y,d):(m[p]=Kt(y),m[p].c(),m[p].m(t,a))}for(;p<m.length;p+=1)m[p].d(1);m.length=_.length}},d(f){f&&A(t),Xt(m,f)}}}function We(e){let t,n,o,r,s=Bt,c=[];for(let u=0;u<s.length;u+=1)c[u]=Qt(Ut(e,s,u));return{c(){t=w("main"),n=w("h3"),n.textContent="Web related projects",o=j(),r=w("div");for(let u=0;u<c.length;u+=1)c[u].c();E(r,"class","grid")},m(u,l){N(u,t,l),g(t,n),g(t,o),g(t,r);for(let i=0;i<c.length;i+=1)c[i].m(r,null)},p(u,[l]){if(l&0){s=Bt;let i;for(i=0;i<s.length;i+=1){const a=Ut(u,s,i);c[i]?c[i].p(a,l):(c[i]=Qt(a),c[i].c(),c[i].m(r,null))}for(;i<c.length;i+=1)c[i].d(1);c.length=s.length}},i:C,o:C,d(u){u&&A(t),Xt(c,u)}}}class Ye extends B{constructor(t){super(),F(this,t,null,We,D,{})}}const Ge="/assets/abban-logo.a7d22953.svg";function Ze(e){let t;return{c(){t=w("main"),t.innerHTML=`<p>You can use the social media links in the header to contact me.</p> 
  <p>All my accounts are public, but for serious communciation you can <a href="mailto:lloydtechno58@gmail.com">email</a>
    me (serious stuff only)</p> 
  <p>I&#39;d be happy to work on any good-willed project with you, or assisst you as possible.</p>`},m(n,o){N(n,t,o)},p:C,i:C,o:C,d(n){n&&A(t)}}}class Je extends B{constructor(t){super(),F(this,t,null,Ze,D,{})}}function Ve(e){let t,n,o=(e[1]===e[2]?e[0][0]:e[0][e[1]+1])+"",r,s,c,u,l=e[0][e[1]]+"",i,a,_,m=(e[1]===0?e[0][e[2]]:e[0][e[1]-1])+"",f;return{c(){t=w("div"),n=w("p"),r=z(o),s=j(),c=w("p"),u=w("strong"),i=z(l),a=j(),_=w("p"),f=z(m),E(n,"class","secondary"),E(_,"class","secondary"),E(t,"class","waterfall")},m(d,p){N(d,t,p),g(t,n),g(n,r),g(t,s),g(t,c),g(c,u),g(u,i),g(t,a),g(t,_),g(_,f)},p(d,[p]){p&3&&o!==(o=(d[1]===d[2]?d[0][0]:d[0][d[1]+1])+"")&&at(r,o),p&3&&l!==(l=d[0][d[1]]+"")&&at(i,l),p&3&&m!==(m=(d[1]===0?d[0][d[2]]:d[0][d[1]-1])+"")&&at(f,m)},i:C,o:C,d(d){d&&A(t)}}}function Xe(e,t,n){let{words:o}=t,r=o.length-1,s=0;return setInterval(()=>{s===r?n(1,s=0):n(1,s++,s)},1500),e.$$set=c=>{"words"in c&&n(0,o=c.words)},[o,s,r]}class Wt extends B{constructor(t){super(),F(this,t,Xe,Ve,D,{words:0})}}const xe="/assets/pak-flag.ede53474.gif";function tn(e){let t,n,o,r,s,c,u,l,i,a,_,m,f,d,p,y,P,L,S,b,$;return a=new Wt({props:{words:Ke}}),p=new Wt({props:{words:Qe}}),{c(){t=w("main"),n=w("h1"),n.textContent="Hi there!",o=j(),r=w("h2"),r.innerHTML="I&#39;m <strong>Abban Fahim</strong>",s=j(),c=w("h2"),c.innerHTML="\u0627\u0633\u0645\u064A <strong>\u0627\u0628\u0627\u0646 \u0641\u0647\u064A\u0645</strong>",u=j(),l=w("h4"),i=z("I'm a "),H(a.$$.fragment),_=z(" coder"),m=j(),f=w("h4"),d=z("I also like "),H(p.$$.fragment),y=j(),P=w("h4"),L=z("A Proud Pakistani "),S=w("img"),E(c,"dir","rtl"),E(l,"class","flexCentred big-pad"),E(f,"class","flexCentred big-pad"),ce(f,"justify-content","flex-end"),Zt(S.src,b=xe)||E(S,"src",b),E(S,"width","256"),E(S,"alt","gif of Pak flag")},m(h,R){N(h,t,R),g(t,n),g(t,o),g(t,r),g(t,s),g(t,c),g(t,u),g(t,l),g(l,i),M(a,l,null),g(l,_),g(t,m),g(t,f),g(f,d),M(p,f,null),g(t,y),g(t,P),g(P,L),g(P,S),$=!0},p:C,i(h){$||(v(a.$$.fragment,h),v(p.$$.fragment,h),$=!0)},o(h){O(a.$$.fragment,h),O(p.$$.fragment,h),$=!1},d(h){h&&A(t),T(a),T(p)}}}class en extends B{constructor(t){super(),F(this,t,null,tn,D,{})}}function nn(e){let t;return{c(){t=w("main"),t.textContent="nothing was found"},m(n,o){N(n,t,o)},p:C,i:C,o:C,d(n){n&&A(t)}}}class on extends B{constructor(t){super(),F(this,t,null,nn,D,{})}}function rn(e){let t,n;return{c(){t=w("img"),Zt(t.src,n=Ge)||E(t,"src",n),E(t,"width",64),E(t,"alt","Logo")},m(o,r){N(o,t,r)},p:C,d(o){o&&A(t)}}}function sn(e){let t;return{c(){t=z("My projects")},m(n,o){N(n,t,o)},d(n){n&&A(t)}}}function ln(e){let t;return{c(){t=z("Contact")},m(n,o){N(n,t,o)},d(n){n&&A(t)}}}function cn(e){let t,n,o,r,s,c,u,l,i,a,_,m,f,d,p,y,P,L,S,b,$,h,R,G,ut;return n=new ht({props:{to:"/",id:"logo",$$slots:{default:[rn]},$$scope:{ctx:e}}}),l=new ht({props:{to:"work",$$slots:{default:[sn]},$$scope:{ctx:e}}}),a=new ht({props:{to:"contact",$$slots:{default:[ln]},$$scope:{ctx:e}}}),y=new ot({props:{component:Ye,path:"/work"}}),L=new ot({props:{component:Je,path:"/contact"}}),b=new ot({props:{component:en,path:"/"}}),h=new ot({props:{component:on}}),{c(){t=w("header"),H(n.$$.fragment),o=j(),r=w("button"),s=w("i"),c=j(),u=w("nav"),H(l.$$.fragment),i=j(),H(a.$$.fragment),_=j(),m=w("a"),m.textContent="My Blog",f=j(),d=w("div"),d.innerHTML=`<a target="__blank" href="https://github.com/Abban-Fahim/"><i class="bi bi-github"></i></a> 
        <a target="__blank" href="https://www.instagram.com/abbanfahim__/"><i class="bi bi-instagram"></i></a> 
        <a target="__blank" href="https://www.linkedin.com/in/abban-fahim/"><i class="bi bi-linkedin"></i></a>`,p=j(),H(y.$$.fragment),P=j(),H(L.$$.fragment),S=j(),H(b.$$.fragment),$=j(),H(h.$$.fragment),E(s,"class","bi bi-plus hidden"),E(r,"type","button"),E(r,"id","collapser"),E(m,"target","__blank"),E(m,"href","https://abban-fahim.github.io/blog/")},m(k,I){N(k,t,I),M(n,t,null),g(t,o),g(t,r),g(r,s),e[3](s),g(t,c),g(t,u),M(l,u,null),g(u,i),M(a,u,null),g(u,_),g(u,m),g(u,f),g(u,d),e[4](u),N(k,p,I),M(y,k,I),N(k,P,I),M(L,k,I),N(k,S,I),M(b,k,I),N(k,$,I),M(h,k,I),R=!0,G||(ut=xt(r,"click",e[2]),G=!0)},p(k,I){const Lt={};I&32&&(Lt.$$scope={dirty:I,ctx:k}),n.$set(Lt);const jt={};I&32&&(jt.$$scope={dirty:I,ctx:k}),l.$set(jt);const At={};I&32&&(At.$$scope={dirty:I,ctx:k}),a.$set(At)},i(k){R||(v(n.$$.fragment,k),v(l.$$.fragment,k),v(a.$$.fragment,k),v(y.$$.fragment,k),v(L.$$.fragment,k),v(b.$$.fragment,k),v(h.$$.fragment,k),R=!0)},o(k){O(n.$$.fragment,k),O(l.$$.fragment,k),O(a.$$.fragment,k),O(y.$$.fragment,k),O(L.$$.fragment,k),O(b.$$.fragment,k),O(h.$$.fragment,k),R=!1},d(k){k&&A(t),T(n),e[3](null),T(l),T(a),e[4](null),k&&A(p),T(y,k),k&&A(P),T(L,k),k&&A(S),T(b,k),k&&A($),T(h,k),G=!1,ut()}}}function un(e){let t,n;return t=new Te({props:{$$slots:{default:[cn]},$$scope:{ctx:e}}}),{c(){H(t.$$.fragment)},m(o,r){M(t,o,r),n=!0},p(o,[r]){const s={};r&35&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||(v(t.$$.fragment,o),n=!0)},o(o){O(t.$$.fragment,o),n=!1},d(o){T(t,o)}}}function an(e,t,n){let o,r;function s(){o.classList.toggle("hidden"),r.classList.toggle("hidden")}function c(l){it[l?"unshift":"push"](()=>{r=l,n(1,r)})}function u(l){it[l?"unshift":"push"](()=>{o=l,n(0,o)})}return[o,r,s,c,u]}class fn extends B{constructor(t){super(),F(this,t,an,un,D,{})}}new fn({target:document.getElementById("app")});
