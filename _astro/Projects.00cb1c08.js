import{S as M,i as N,s as w,f as g,g as q,h as x,j as k,k as b,l as A,n as v,o as y,p as E,q as H,r as u,x as D,y as C,z as B}from"./index.5b3c6127.js";/* empty css                           */import{p as P}from"./data.ed71d2d3.js";/* empty css                          */function S(o,e,l){const c=o.slice();return c[0]=e[l],c}function V(o,e,l){const c=o.slice();return c[3]=e[l],c}function W(o){let e,l;return{c(){e=g("a"),l=g("i"),this.h()},l(c){e=k(c,"A",{class:!0,href:!0});var f=b(e);l=k(f,"I",{class:!0}),b(l).forEach(v),f.forEach(v),this.h()},h(){E(l,"class",B("bi bi-"+o[3].type)+" svelte-1erj9le"),E(e,"class","project-link svelte-1erj9le"),E(e,"href",o[3].link)},m(c,f){H(c,e,f),u(e,l)},p:D,d(c){c&&v(e)}}}function z(o){let e,l,c=o[0].title+"",f,m,_,r=o[0].desc+"",a,h,t,d=o[0].links,s=[];for(let i=0;i<d.length;i+=1)s[i]=W(V(o,d,i));return{c(){e=g("div"),l=g("h5"),f=q(c),m=x(),_=g("p"),a=q(r),h=x();for(let i=0;i<s.length;i+=1)s[i].c();t=x(),this.h()},l(i){e=k(i,"DIV",{class:!0});var p=b(e);l=k(p,"H5",{});var n=b(l);f=A(n,c),n.forEach(v),m=y(p),_=k(p,"P",{});var j=b(_);a=A(j,r),j.forEach(v),h=y(p);for(let I=0;I<s.length;I+=1)s[I].l(p);t=y(p),p.forEach(v),this.h()},h(){E(e,"class","item")},m(i,p){H(i,e,p),u(e,l),u(l,f),u(e,m),u(e,_),u(_,a),u(e,h);for(let n=0;n<s.length;n+=1)s[n]&&s[n].m(e,null);u(e,t)},p(i,p){if(p&0){d=i[0].links;let n;for(n=0;n<d.length;n+=1){const j=V(i,d,n);s[n]?s[n].p(j,p):(s[n]=W(j),s[n].c(),s[n].m(e,t))}for(;n<s.length;n+=1)s[n].d(1);s.length=d.length}},d(i){i&&v(e),C(s,i)}}}function F(o){let e,l,c,f,m,_=P,r=[];for(let a=0;a<_.length;a+=1)r[a]=z(S(o,_,a));return{c(){e=g("main"),l=g("h3"),c=q("Web related projects"),f=x(),m=g("div");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=k(a,"MAIN",{});var h=b(e);l=k(h,"H3",{});var t=b(l);c=A(t,"Web related projects"),t.forEach(v),f=y(h),m=k(h,"DIV",{class:!0});var d=b(m);for(let s=0;s<r.length;s+=1)r[s].l(d);d.forEach(v),h.forEach(v),this.h()},h(){E(m,"class","grid")},m(a,h){H(a,e,h),u(e,l),u(l,c),u(e,f),u(e,m);for(let t=0;t<r.length;t+=1)r[t]&&r[t].m(m,null)},p(a,[h]){if(h&0){_=P;let t;for(t=0;t<_.length;t+=1){const d=S(a,_,t);r[t]?r[t].p(d,h):(r[t]=z(d),r[t].c(),r[t].m(m,null))}for(;t<r.length;t+=1)r[t].d(1);r.length=_.length}},i:D,o:D,d(a){a&&v(e),C(r,a)}}}class O extends M{constructor(e){super(),N(this,e,null,F,w,{})}}export{O as default};