(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function w(){}function B(e,t){for(const n in t)e[n]=t[n];return e}function It(e){return e()}function $t(){return Object.create(null)}function K(e){e.forEach(It)}function Dt(e){return typeof e=="function"}function M(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}let V;function Yt(e,t){return V||(V=document.createElement("a")),V.href=t,e===V.href}function Zt(e){return Object.keys(e).length===0}function qt(e,...t){if(e==null)return w;const n=e.subscribe(...t);return n.unsubscribe?()=>n.unsubscribe():n}function q(e,t,n){e.$$.on_destroy.push(qt(t,n))}function dt(e,t,n,o){if(e){const r=Bt(e,t,n,o);return e[0](r)}}function Bt(e,t,n,o){return e[1]&&o?B(n.ctx.slice(),e[1](o(t))):n.ctx}function _t(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(t.dirty===void 0)return r;if(typeof r=="object"){const s=[],l=Math.max(t.dirty.length,r.length);for(let c=0;c<l;c+=1)s[c]=t.dirty[c]|r[c];return s}return t.dirty|r}return t.dirty}function gt(e,t,n,o,r,s){if(r){const l=Bt(t,n,o,s);e.p(l,r)}}function bt(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let o=0;o<n;o++)t[o]=-1;return t}return-1}function ft(e){const t={};for(const n in e)n[0]!=="$"&&(t[n]=e[n]);return t}function Et(e,t){const n={};t=new Set(t);for(const o in e)!t.has(o)&&o[0]!=="$"&&(n[o]=e[o]);return n}function Jt(e){return e==null?"":e}function O(e,t){e.appendChild(t)}function S(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode.removeChild(e)}function Ht(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function L(e){return document.createElement(e)}function U(e){return document.createTextNode(e)}function x(){return U(" ")}function yt(){return U("")}function Vt(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function z(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function Pt(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const o in t)t[o]==null?e.removeAttribute(o):o==="style"?e.style.cssText=t[o]:o==="__value"?e.value=e[o]=t[o]:n[o]&&n[o].set?e[o]=t[o]:z(e,o,t[o])}function Xt(e){return Array.from(e.childNodes)}function te(e,t,{bubbles:n=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(e,n,o,t),r}let Y;function W(e){Y=e}function J(){if(!Y)throw new Error("Function called outside component initialization");return Y}function ee(e){J().$$.on_mount.push(e)}function ne(e){J().$$.on_destroy.push(e)}function oe(){const e=J();return(t,n,{cancelable:o=!1}={})=>{const r=e.$$.callbacks[t];if(r){const s=te(t,n,{cancelable:o});return r.slice().forEach(l=>{l.call(e,s)}),!s.defaultPrevented}return!0}}function St(e,t){return J().$$.context.set(e,t),t}function F(e){return J().$$.context.get(e)}const Q=[],Ct=[],et=[],Ot=[],re=Promise.resolve();let at=!1;function se(){at||(at=!0,re.then(Ut))}function pt(e){et.push(e)}const st=new Set;let X=0;function Ut(){const e=Y;do{for(;X<Q.length;){const t=Q[X];X++,W(t),ie(t.$$)}for(W(null),Q.length=0,X=0;Ct.length;)Ct.pop()();for(let t=0;t<et.length;t+=1){const n=et[t];st.has(n)||(st.add(n),n())}et.length=0}while(Q.length);for(;Ot.length;)Ot.pop()();at=!1,st.clear(),W(e)}function ie(e){if(e.fragment!==null){e.update(),K(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(pt)}}const nt=new Set;let D;function kt(){D={r:0,c:[],p:D}}function wt(){D.r||K(D.c),D=D.p}function $(e,t){e&&e.i&&(nt.delete(e),e.i(t))}function C(e,t,n,o){if(e&&e.o){if(nt.has(e))return;nt.add(e),D.c.push(()=>{nt.delete(e),o&&(n&&e.d(1),o())}),e.o(t)}else o&&o()}function Ft(e,t){const n={},o={},r={$$scope:1};let s=e.length;for(;s--;){const l=e[s],c=t[s];if(c){for(const u in l)u in c||(o[u]=1);for(const u in c)r[u]||(n[u]=c[u],r[u]=1);e[s]=c}else for(const u in l)r[u]=1}for(const l in o)l in n||(n[l]=void 0);return n}function Lt(e){return typeof e=="object"&&e!==null?e:{}}function v(e){e&&e.c()}function A(e,t,n,o){const{fragment:r,on_mount:s,on_destroy:l,after_update:c}=e.$$;r&&r.m(t,n),o||pt(()=>{const u=s.map(It).filter(Dt);l?l.push(...u):K(u),e.$$.on_mount=[]}),c.forEach(pt)}function N(e,t){const n=e.$$;n.fragment!==null&&(K(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ce(e,t){e.$$.dirty[0]===-1&&(Q.push(e),se(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function T(e,t,n,o,r,s,l,c=[-1]){const u=Y;W(e);const i=e.$$={fragment:null,ctx:null,props:s,update:w,not_equal:r,bound:$t(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(u?u.$$.context:[])),callbacks:$t(),dirty:c,skip_bound:!1,root:t.target||u.$$.root};l&&l(i.root);let p=!1;if(i.ctx=n?n(e,t.props||{},(d,_,...f)=>{const y=f.length?f[0]:_;return i.ctx&&r(i.ctx[d],i.ctx[d]=y)&&(!i.skip_bound&&i.bound[d]&&i.bound[d](y),p&&ce(e,d)),_}):[],i.update(),p=!0,K(i.before_update),i.fragment=o?o(i.ctx):!1,t.target){if(t.hydrate){const d=Xt(t.target);i.fragment&&i.fragment.l(d),d.forEach(E)}else i.fragment&&i.fragment.c();t.intro&&$(e.$$.fragment),A(e,t.target,t.anchor,t.customElement),Ut()}W(u)}class I{$destroy(){N(this,1),this.$destroy=w}$on(t,n){const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(n),()=>{const r=o.indexOf(n);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!Zt(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const H=[];function le(e,t){return{subscribe:G(e,t).subscribe}}function G(e,t=w){let n;const o=new Set;function r(c){if(M(e,c)&&(e=c,n)){const u=!H.length;for(const i of o)i[1](),H.push(i,e);if(u){for(let i=0;i<H.length;i+=2)H[i][0](H[i+1]);H.length=0}}}function s(c){r(c(e))}function l(c,u=w){const i=[c,u];return o.add(i),o.size===1&&(n=t(r)||w),c(e),()=>{o.delete(i),o.size===0&&(n(),n=null)}}return{set:r,update:s,subscribe:l}}function ue(e,t,n){const o=!Array.isArray(e),r=o?[e]:e,s=t.length<2;return le(n,l=>{let c=!1;const u=[];let i=0,p=w;const d=()=>{if(i)return;p();const f=t(o?u[0]:u,l);s?l(f):p=Dt(f)?f:w},_=r.map((f,y)=>qt(f,h=>{u[y]=h,i&=~(1<<y),c&&d()},()=>{i|=1<<y}));return c=!0,d(),function(){K(_),p()}})}const ot={},rt={};function it(e){return{...e.location,state:e.history.state,key:e.history.state&&e.history.state.key||"initial"}}function fe(e,t){const n=[];let o=it(e);return{get location(){return o},listen(r){n.push(r);const s=()=>{o=it(e),r({location:o,action:"POP"})};return e.addEventListener("popstate",s),()=>{e.removeEventListener("popstate",s);const l=n.indexOf(r);n.splice(l,1)}},navigate(r,{state:s,replace:l=!1}={}){s={...s,key:Date.now()+""};try{l?e.history.replaceState(s,null,r):e.history.pushState(s,null,r)}catch{e.location[l?"replace":"assign"](r)}o=it(e),n.forEach(c=>c({location:o,action:"PUSH"}))}}}function ae(e="/"){let t=0;const n=[{pathname:e,search:""}],o=[];return{get location(){return n[t]},addEventListener(r,s){},removeEventListener(r,s){},history:{get entries(){return n},get index(){return t},get state(){return o[t]},pushState(r,s,l){const[c,u=""]=l.split("?");t++,n.push({pathname:c,search:u}),o.push(r)},replaceState(r,s,l){const[c,u=""]=l.split("?");n[t]={pathname:c,search:u},o[t]=r}}}}const pe=Boolean(typeof window<"u"&&window.document&&window.document.createElement),mt=fe(pe?window:ae()),{navigate:me}=mt,Kt=/^:(.+)/,Rt=4,he=3,de=2,_e=1,ge=1;function ht(e,t){return e.substr(0,t.length)===t}function be(e){return e===""}function ye(e){return Kt.test(e)}function Qt(e){return e[0]==="*"}function Z(e){return e.replace(/(^\/+|\/+$)/g,"").split("/")}function ct(e){return e.replace(/(^\/+|\/+$)/g,"")}function ke(e,t){const n=e.default?0:Z(e.path).reduce((o,r)=>(o+=Rt,be(r)?o+=ge:ye(r)?o+=de:Qt(r)?o-=Rt+_e:o+=he,o),0);return{route:e,score:n,index:t}}function we(e){return e.map(ke).sort((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index)}function Gt(e,t){let n,o;const[r]=t.split("?"),s=Z(r),l=s[0]==="",c=we(e);for(let u=0,i=c.length;u<i;u++){const p=c[u].route;let d=!1;if(p.default){o={route:p,params:{},uri:t};continue}const _=Z(p.path),f={},y=Math.max(s.length,_.length);let h=0;for(;h<y;h++){const g=_[h],k=s[h];if(g!==void 0&&Qt(g)){const a=g==="*"?"*":g.slice(1);f[a]=s.slice(h).map(decodeURIComponent).join("/");break}if(k===void 0){d=!0;break}let R=Kt.exec(g);if(R&&!l){const a=decodeURIComponent(k);f[R[1]]=a}else if(g!==k){d=!0;break}}if(!d){n={route:p,params:f,uri:"/"+s.slice(0,h).join("/")};break}}return n||o||null}function $e(e,t){return Gt([e],t)}function lt(e,t){return e+(t?`?${t}`:"")}function Ee(e,t){if(ht(e,"/"))return e;const[n,o]=e.split("?"),[r]=t.split("?"),s=Z(n),l=Z(r);if(s[0]==="")return lt(r,o);if(!ht(s[0],".")){const i=l.concat(s).join("/");return lt((r==="/"?"":"/")+i,o)}const c=l.concat(s),u=[];return c.forEach(i=>{i===".."?u.pop():i!=="."&&u.push(i)}),lt("/"+u.join("/"),o)}function jt(e,t){return`${ct(t==="/"?e:`${ct(e)}/${ct(t)}`)}/`}function Pe(e){return!e.defaultPrevented&&e.button===0&&!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Se(e){let t;const n=e[9].default,o=dt(n,e,e[8],null);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,[s]){o&&o.p&&(!t||s&256)&&gt(o,n,r,r[8],t?_t(n,r[8],s,null):bt(r[8]),null)},i(r){t||($(o,r),t=!0)},o(r){C(o,r),t=!1},d(r){o&&o.d(r)}}}function Ce(e,t,n){let o,r,s,{$$slots:l={},$$scope:c}=t,{basepath:u="/"}=t,{url:i=null}=t;const p=F(ot),d=F(rt),_=G([]);q(e,_,m=>n(6,r=m));const f=G(null);let y=!1;const h=p||G(i?{pathname:i}:mt.location);q(e,h,m=>n(5,o=m));const g=d?d.routerBase:G({path:u,uri:u});q(e,g,m=>n(7,s=m));const k=ue([g,f],([m,P])=>{if(P===null)return m;const{path:b}=m,{route:j,uri:Wt}=P;return{path:j.default?b:j.path.replace(/\*.*$/,""),uri:Wt}});function R(m){const{path:P}=s;let{path:b}=m;if(m._path=b,m.path=jt(P,b),typeof window>"u"){if(y)return;const j=$e(m,o.pathname);j&&(f.set(j),y=!0)}else _.update(j=>(j.push(m),j))}function a(m){_.update(P=>{const b=P.indexOf(m);return P.splice(b,1),P})}return p||(ee(()=>mt.listen(P=>{h.set(P.location)})),St(ot,h)),St(rt,{activeRoute:f,base:g,routerBase:k,registerRoute:R,unregisterRoute:a}),e.$$set=m=>{"basepath"in m&&n(3,u=m.basepath),"url"in m&&n(4,i=m.url),"$$scope"in m&&n(8,c=m.$$scope)},e.$$.update=()=>{if(e.$$.dirty&128){const{path:m}=s;_.update(P=>(P.forEach(b=>b.path=jt(m,b._path)),P))}if(e.$$.dirty&96){const m=Gt(r,o.pathname);f.set(m)}},[_,h,g,u,i,o,r,s,c,l]}class Oe extends I{constructor(t){super(),T(this,t,Ce,Se,M,{basepath:3,url:4})}}const Le=e=>({params:e&4,location:e&16}),xt=e=>({params:e[2],location:e[4]});function At(e){let t,n,o,r;const s=[je,Re],l=[];function c(u,i){return u[0]!==null?0:1}return t=c(e),n=l[t]=s[t](e),{c(){n.c(),o=yt()},m(u,i){l[t].m(u,i),S(u,o,i),r=!0},p(u,i){let p=t;t=c(u),t===p?l[t].p(u,i):(kt(),C(l[p],1,1,()=>{l[p]=null}),wt(),n=l[t],n?n.p(u,i):(n=l[t]=s[t](u),n.c()),$(n,1),n.m(o.parentNode,o))},i(u){r||($(n),r=!0)},o(u){C(n),r=!1},d(u){l[t].d(u),u&&E(o)}}}function Re(e){let t;const n=e[10].default,o=dt(n,e,e[9],xt);return{c(){o&&o.c()},m(r,s){o&&o.m(r,s),t=!0},p(r,s){o&&o.p&&(!t||s&532)&&gt(o,n,r,r[9],t?_t(n,r[9],s,Le):bt(r[9]),xt)},i(r){t||($(o,r),t=!0)},o(r){C(o,r),t=!1},d(r){o&&o.d(r)}}}function je(e){let t,n,o;const r=[{location:e[4]},e[2],e[3]];var s=e[0];function l(c){let u={};for(let i=0;i<r.length;i+=1)u=B(u,r[i]);return{props:u}}return s&&(t=new s(l())),{c(){t&&v(t.$$.fragment),n=yt()},m(c,u){t&&A(t,c,u),S(c,n,u),o=!0},p(c,u){const i=u&28?Ft(r,[u&16&&{location:c[4]},u&4&&Lt(c[2]),u&8&&Lt(c[3])]):{};if(s!==(s=c[0])){if(t){kt();const p=t;C(p.$$.fragment,1,0,()=>{N(p,1)}),wt()}s?(t=new s(l()),v(t.$$.fragment),$(t.$$.fragment,1),A(t,n.parentNode,n)):t=null}else s&&t.$set(i)},i(c){o||(t&&$(t.$$.fragment,c),o=!0)},o(c){t&&C(t.$$.fragment,c),o=!1},d(c){c&&E(n),t&&N(t,c)}}}function xe(e){let t,n,o=e[1]!==null&&e[1].route===e[7]&&At(e);return{c(){o&&o.c(),t=yt()},m(r,s){o&&o.m(r,s),S(r,t,s),n=!0},p(r,[s]){r[1]!==null&&r[1].route===r[7]?o?(o.p(r,s),s&2&&$(o,1)):(o=At(r),o.c(),$(o,1),o.m(t.parentNode,t)):o&&(kt(),C(o,1,1,()=>{o=null}),wt())},i(r){n||($(o),n=!0)},o(r){C(o),n=!1},d(r){o&&o.d(r),r&&E(t)}}}function Ae(e,t,n){let o,r,{$$slots:s={},$$scope:l}=t,{path:c=""}=t,{component:u=null}=t;const{registerRoute:i,unregisterRoute:p,activeRoute:d}=F(rt);q(e,d,g=>n(1,o=g));const _=F(ot);q(e,_,g=>n(4,r=g));const f={path:c,default:c===""};let y={},h={};return i(f),typeof window<"u"&&ne(()=>{p(f)}),e.$$set=g=>{n(13,t=B(B({},t),ft(g))),"path"in g&&n(8,c=g.path),"component"in g&&n(0,u=g.component),"$$scope"in g&&n(9,l=g.$$scope)},e.$$.update=()=>{e.$$.dirty&2&&o&&o.route===f&&n(2,y=o.params);{const{path:g,component:k,...R}=t;n(3,h=R)}},t=ft(t),[u,o,y,h,r,d,_,f,c,l,s]}class tt extends I{constructor(t){super(),T(this,t,Ae,xe,M,{path:8,component:0})}}function Ne(e){let t,n,o,r;const s=e[16].default,l=dt(s,e,e[15],null);let c=[{href:e[0]},{"aria-current":e[2]},e[1],e[6]],u={};for(let i=0;i<c.length;i+=1)u=B(u,c[i]);return{c(){t=L("a"),l&&l.c(),Pt(t,u)},m(i,p){S(i,t,p),l&&l.m(t,null),n=!0,o||(r=Vt(t,"click",e[5]),o=!0)},p(i,[p]){l&&l.p&&(!n||p&32768)&&gt(l,s,i,i[15],n?_t(s,i[15],p,null):bt(i[15]),null),Pt(t,u=Ft(c,[(!n||p&1)&&{href:i[0]},(!n||p&4)&&{"aria-current":i[2]},p&2&&i[1],p&64&&i[6]]))},i(i){n||($(l,i),n=!0)},o(i){C(l,i),n=!1},d(i){i&&E(t),l&&l.d(i),o=!1,r()}}}function ve(e,t,n){let o;const r=["to","replace","state","getProps"];let s=Et(t,r),l,c,{$$slots:u={},$$scope:i}=t,{to:p="#"}=t,{replace:d=!1}=t,{state:_={}}=t,{getProps:f=()=>({})}=t;const{base:y}=F(rt);q(e,y,b=>n(14,c=b));const h=F(ot);q(e,h,b=>n(13,l=b));const g=oe();let k,R,a,m;function P(b){if(g("click",b),Pe(b)){b.preventDefault();const j=l.pathname===k||d;me(k,{state:_,replace:j})}}return e.$$set=b=>{t=B(B({},t),ft(b)),n(6,s=Et(t,r)),"to"in b&&n(7,p=b.to),"replace"in b&&n(8,d=b.replace),"state"in b&&n(9,_=b.state),"getProps"in b&&n(10,f=b.getProps),"$$scope"in b&&n(15,i=b.$$scope)},e.$$.update=()=>{e.$$.dirty&16512&&n(0,k=p==="/"?c.uri:Ee(p,c.uri)),e.$$.dirty&8193&&n(11,R=ht(l.pathname,k)),e.$$.dirty&8193&&n(12,a=k===l.pathname),e.$$.dirty&4096&&n(2,o=a?"page":void 0),e.$$.dirty&15361&&n(1,m=f({location:l,href:k,isPartiallyCurrent:R,isCurrent:a}))},[k,m,o,y,h,P,s,p,d,_,f,R,a,l,c,i,u]}class ut extends I{constructor(t){super(),T(this,t,ve,Ne,M,{to:7,replace:8,state:9,getProps:10})}}const ze=[{img:"/notezzz.png",title:"Notezzz",desc:"A cross platform note-taking app",links:[{type:"globe",link:"https://notezzz.web.app"},{type:"github",link:"https://github.com/Abban-Fahim/notezzz"}]},{img:"/ez-mcq.png",title:"EZ MCQs",desc:"A little app to help you prepare for the IGCSE Science MCQs",links:[{type:"globe",link:"https://ez-mcq.herokuapp.com"},{type:"github",link:"https://github.com/Abban-Fahim/MCQ"}]}],Nt={web:ze};function vt(e,t,n){const o=e.slice();return o[0]=t[n],o}function zt(e,t,n){const o=e.slice();return o[3]=t[n],o}function Mt(e){let t,n;return{c(){t=L("a"),n=L("i"),z(n,"class",Jt("bi bi-"+e[3].type)+" svelte-1erj9le"),z(t,"class","project-link svelte-1erj9le"),z(t,"href",e[3].link)},m(o,r){S(o,t,r),O(t,n)},p:w,d(o){o&&E(t)}}}function Tt(e){let t,n,o=e[0].title+"",r,s,l,c=e[0].desc+"",u,i,p,d=e[0].links,_=[];for(let f=0;f<d.length;f+=1)_[f]=Mt(zt(e,d,f));return{c(){t=L("div"),n=L("h5"),r=U(o),s=x(),l=L("p"),u=U(c),i=x();for(let f=0;f<_.length;f+=1)_[f].c();p=x(),z(t,"class","item")},m(f,y){S(f,t,y),O(t,n),O(n,r),O(t,s),O(t,l),O(l,u),O(t,i);for(let h=0;h<_.length;h+=1)_[h].m(t,null);O(t,p)},p(f,y){if(y&0){d=f[0].links;let h;for(h=0;h<d.length;h+=1){const g=zt(f,d,h);_[h]?_[h].p(g,y):(_[h]=Mt(g),_[h].c(),_[h].m(t,p))}for(;h<_.length;h+=1)_[h].d(1);_.length=d.length}},d(f){f&&E(t),Ht(_,f)}}}function Me(e){let t,n,o,r,s=Nt.web,l=[];for(let c=0;c<s.length;c+=1)l[c]=Tt(vt(e,s,c));return{c(){t=L("main"),n=L("h3"),n.textContent="Web related projects",o=x(),r=L("div");for(let c=0;c<l.length;c+=1)l[c].c();z(r,"class","grid")},m(c,u){S(c,t,u),O(t,n),O(t,o),O(t,r);for(let i=0;i<l.length;i+=1)l[i].m(r,null)},p(c,[u]){if(u&0){s=Nt.web;let i;for(i=0;i<s.length;i+=1){const p=vt(c,s,i);l[i]?l[i].p(p,u):(l[i]=Tt(p),l[i].c(),l[i].m(r,null))}for(;i<l.length;i+=1)l[i].d(1);l.length=s.length}},i:w,o:w,d(c){c&&E(t),Ht(l,c)}}}class Te extends I{constructor(t){super(),T(this,t,null,Me,M,{})}}const Ie="/personal-site/assets/abban-logo.e75e67e1.svg";function De(e){let t;return{c(){t=L("main"),t.textContent="Links"},m(n,o){S(n,t,o)},p:w,i:w,o:w,d(n){n&&E(t)}}}class qe extends I{constructor(t){super(),T(this,t,null,De,M,{})}}function Be(e){let t;return{c(){t=L("main"),t.innerHTML=`<h1>Hi there!</h1> 
  <h2>I&#39;m <strong>Abban Fahim</strong></h2> 
  <h2 dir="rtl">\u0627\u0633\u0645\u064A <strong>\u0627\u0628\u0627\u0646 \u0641\u0647\u064A\u0645</strong></h2>`},m(n,o){S(n,t,o)},p:w,i:w,o:w,d(n){n&&E(t)}}}class He extends I{constructor(t){super(),T(this,t,null,Be,M,{})}}function Ue(e){let t;return{c(){t=L("main"),t.textContent="nothing was found"},m(n,o){S(n,t,o)},p:w,i:w,o:w,d(n){n&&E(t)}}}class Fe extends I{constructor(t){super(),T(this,t,null,Ue,M,{})}}function Ke(e){let t,n;return{c(){t=L("img"),Yt(t.src,n=Ie)||z(t,"src",n),z(t,"alt","Logo")},m(o,r){S(o,t,r)},p:w,d(o){o&&E(t)}}}function Qe(e){let t;return{c(){t=U("My projects")},m(n,o){S(n,t,o)},d(n){n&&E(t)}}}function Ge(e){let t;return{c(){t=U("Contact")},m(n,o){S(n,t,o)},d(n){n&&E(t)}}}function We(e){let t,n,o,r,s,l,c,u,i,p,d,_,f,y,h,g,k,R;return n=new ut({props:{to:"/",id:"logo",$$slots:{default:[Ke]},$$scope:{ctx:e}}}),s=new ut({props:{to:"work",$$slots:{default:[Qe]},$$scope:{ctx:e}}}),c=new ut({props:{to:"contact",$$slots:{default:[Ge]},$$scope:{ctx:e}}}),d=new tt({props:{component:Te,path:"/work"}}),f=new tt({props:{component:qe,path:"/contact"}}),h=new tt({props:{component:He,path:"/"}}),k=new tt({props:{component:Fe}}),{c(){t=L("header"),v(n.$$.fragment),o=x(),r=L("nav"),v(s.$$.fragment),l=x(),v(c.$$.fragment),u=x(),i=L("a"),i.textContent="My Blog",p=x(),v(d.$$.fragment),_=x(),v(f.$$.fragment),y=x(),v(h.$$.fragment),g=x(),v(k.$$.fragment),z(i,"href","https://abban-fahim.github.io/blog/")},m(a,m){S(a,t,m),A(n,t,null),O(t,o),O(t,r),A(s,r,null),O(r,l),A(c,r,null),O(r,u),O(r,i),S(a,p,m),A(d,a,m),S(a,_,m),A(f,a,m),S(a,y,m),A(h,a,m),S(a,g,m),A(k,a,m),R=!0},p(a,m){const P={};m&1&&(P.$$scope={dirty:m,ctx:a}),n.$set(P);const b={};m&1&&(b.$$scope={dirty:m,ctx:a}),s.$set(b);const j={};m&1&&(j.$$scope={dirty:m,ctx:a}),c.$set(j)},i(a){R||($(n.$$.fragment,a),$(s.$$.fragment,a),$(c.$$.fragment,a),$(d.$$.fragment,a),$(f.$$.fragment,a),$(h.$$.fragment,a),$(k.$$.fragment,a),R=!0)},o(a){C(n.$$.fragment,a),C(s.$$.fragment,a),C(c.$$.fragment,a),C(d.$$.fragment,a),C(f.$$.fragment,a),C(h.$$.fragment,a),C(k.$$.fragment,a),R=!1},d(a){a&&E(t),N(n),N(s),N(c),a&&E(p),N(d,a),a&&E(_),N(f,a),a&&E(y),N(h,a),a&&E(g),N(k,a)}}}function Ye(e){let t,n;return t=new Oe({props:{basepath:"/personal-site",$$slots:{default:[We]},$$scope:{ctx:e}}}),{c(){v(t.$$.fragment)},m(o,r){A(t,o,r),n=!0},p(o,[r]){const s={};r&1&&(s.$$scope={dirty:r,ctx:o}),t.$set(s)},i(o){n||($(t.$$.fragment,o),n=!0)},o(o){C(t.$$.fragment,o),n=!1},d(o){N(t,o)}}}class Ze extends I{constructor(t){super(),T(this,t,null,Ye,M,{})}}new Ze({target:document.getElementById("app")});