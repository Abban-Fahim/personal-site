import{S as Ie,i as ke,s as He,e as f,c as h,b as d,f as o,h as p,A as B,j as R,n as I,l as Ce,B as ue,t as _,a as v,d as m,g as b,k as a,C as se,o as _e,p as me,D as Ae,q as ge,r as pe,u as ve,v as be}from"./index.585f9be7.js";import{c as We,w as xe}from"./data.ed71d2d3.js";/* empty css                           */function Ee(i,e,n){const s=i.slice();return s[4]=e[n],s[6]=n,s}function Ge(i){return{c:I,l:I,m:I,p:I,d:I}}function Ne(i){let e,n=i[4]+"",s,l;return{c(){e=f("p"),s=_(n),l=v(),this.h()},l(r){e=h(r,"P",{class:!0});var t=d(e);s=m(t,n),l=b(t),t.forEach(o),this.h()},h(){p(e,"class","secondary")},m(r,t){R(r,e,t),a(e,s),a(e,l)},p(r,t){t&1&&n!==(n=r[4]+"")&&se(s,n)},d(r){r&&o(e)}}}function Re(i){let e,n=i[4]+"",s,l;return{c(){e=f("p"),s=_(n),l=v(),this.h()},l(r){e=h(r,"P",{class:!0});var t=d(e);s=m(t,n),l=b(t),t.forEach(o),this.h()},h(){p(e,"class","secondary")},m(r,t){R(r,e,t),a(e,s),a(e,l)},p(r,t){t&1&&n!==(n=r[4]+"")&&se(s,n)},d(r){r&&o(e)}}}function Se(i){let e,n,s=i[4]+"",l,r;return{c(){e=f("p"),n=f("strong"),l=_(s),r=v()},l(t){e=h(t,"P",{});var c=d(e);n=h(c,"STRONG",{});var W=d(n);l=m(W,s),W.forEach(o),r=b(c),c.forEach(o)},m(t,c){R(t,e,c),a(e,n),a(n,l),a(e,r)},p(t,c){c&1&&s!==(s=t[4]+"")&&se(l,s)},d(t){t&&o(e)}}}function we(i){let e;function n(r,t){return r[6]===r[2]?Se:r[6]===r[2]-1?Re:r[2]+1?Ne:Ge}let s=n(i),l=s(i);return{c(){l.c(),e=ue()},l(r){l.l(r),e=ue()},m(r,t){l.m(r,t),R(r,e,t)},p(r,t){s===(s=n(r))&&l?l.p(r,t):(l.d(1),l=s(r),l&&(l.c(),l.m(e.parentNode,e)))},d(r){l.d(r),r&&o(e)}}}function je(i){let e,n=i[0],s=[];for(let l=0;l<n.length;l+=1)s[l]=we(Ee(i,n,l));return{c(){e=f("div");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=h(l,"DIV",{class:!0,style:!0});var r=d(e);for(let t=0;t<s.length;t+=1)s[t].l(r);r.forEach(o),this.h()},h(){p(e,"class","waterfall"),B(e,"width",i[1].length/1.5+"ch")},m(l,r){R(l,e,r);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null)},p(l,[r]){if(r&5){n=l[0];let t;for(t=0;t<n.length;t+=1){const c=Ee(l,n,t);s[t]?s[t].p(c,r):(s[t]=we(c),s[t].c(),s[t].m(e,null))}for(;t<s.length;t+=1)s[t].d(1);s.length=n.length}r&2&&B(e,"width",l[1].length/1.5+"ch")},i:I,o:I,d(l){l&&o(e),Ce(s,l)}}}function $e(i,e,n){let{words:s}=e,{longestWord:l}=e,r=s.length-1,t=0;return setInterval(()=>{t===r?n(2,t=0):n(2,t++,t)},1500),i.$$set=c=>{"words"in c&&n(0,s=c.words),"longestWord"in c&&n(1,l=c.longestWord)},[s,l,t]}class ye extends Ie{constructor(e){super(),ke(this,e,$e,je,He,{words:0,longestWord:1})}}function Be(i){let e,n,s,l,r,t,c,W,q,k,P,S,V,F,w,M,H,L,z,y,J,C,K,A,j,Q,U,E,x,X,$,G,Y,Z,N,ne,D;return H=new ye({props:{longestWord:"cloistered",words:We}}),C=new ye({props:{longestWord:"setting ambitious goals",words:xe}}),{c(){e=f("main"),n=f("h1"),s=_("Hi there!"),l=v(),r=f("h2"),t=_("I'm "),c=f("strong"),W=_("Abban Fahim"),q=v(),k=f("h2"),P=_("اسمي "),S=f("strong"),V=_("ابان فهيم"),F=v(),w=f("h4"),M=_("I'm a "),_e(H.$$.fragment),L=_(" coder"),z=v(),y=f("h4"),J=_(`I also like\r
    `),_e(C.$$.fragment),K=v(),A=f("div"),j=f("h4"),Q=_("I'm a Robotics Engineer"),U=v(),E=f("div"),x=f("h4"),X=_("And a founder of "),$=f("strong"),G=f("a"),Y=_("Bruh Corp."),Z=v(),N=f("img"),this.h()},l(g){e=h(g,"MAIN",{});var u=d(e);n=h(u,"H1",{});var ae=d(n);s=m(ae,"Hi there!"),ae.forEach(o),l=b(u),r=h(u,"H2",{});var ee=d(r);t=m(ee,"I'm "),c=h(ee,"STRONG",{});var oe=d(c);W=m(oe,"Abban Fahim"),oe.forEach(o),ee.forEach(o),q=b(u),k=h(u,"H2",{dir:!0});var te=d(k);P=m(te,"اسمي "),S=h(te,"STRONG",{});var ce=d(S);V=m(ce,"ابان فهيم"),ce.forEach(o),te.forEach(o),F=b(u),w=h(u,"H4",{class:!0});var O=d(w);M=m(O,"I'm a "),me(H.$$.fragment,O),L=m(O," coder"),O.forEach(o),z=b(u),y=h(u,"H4",{class:!0,style:!0});var re=d(y);J=m(re,`I also like\r
    `),me(C.$$.fragment,re),re.forEach(o),K=b(u),A=h(u,"DIV",{class:!0,style:!0});var ie=d(A);j=h(ie,"H4",{});var fe=d(j);Q=m(fe,"I'm a Robotics Engineer"),fe.forEach(o),ie.forEach(o),U=b(u),E=h(u,"DIV",{class:!0,style:!0});var T=d(E);x=h(T,"H4",{});var le=d(x);X=m(le,"And a founder of "),$=h(le,"STRONG",{});var he=d($);G=h(he,"A",{href:!0});var de=d(G);Y=m(de,"Bruh Corp."),de.forEach(o),he.forEach(o),le.forEach(o),Z=b(T),N=h(T,"IMG",{src:!0,alt:!0}),T.forEach(o),u.forEach(o),this.h()},h(){p(k,"dir","rtl"),p(w,"class","flexCentred big-pad"),p(y,"class","flexCentred big-pad"),B(y,"justify-content","flex-end"),p(A,"class","flexCentred"),B(A,"justify-content","space-around"),p(G,"href","https://bruh-corp.github.io/"),Ae(N.src,ne="/bru.gif")||p(N,"src",ne),p(N,"alt","Gif of Bruh Corp logo"),p(E,"class","flexCentred"),B(E,"justify-content","space-around")},m(g,u){R(g,e,u),a(e,n),a(n,s),a(e,l),a(e,r),a(r,t),a(r,c),a(c,W),a(e,q),a(e,k),a(k,P),a(k,S),a(S,V),a(e,F),a(e,w),a(w,M),ge(H,w,null),a(w,L),a(e,z),a(e,y),a(y,J),ge(C,y,null),a(e,K),a(e,A),a(A,j),a(j,Q),a(e,U),a(e,E),a(E,x),a(x,X),a(x,$),a($,G),a(G,Y),a(E,Z),a(E,N),D=!0},p:I,i(g){D||(pe(H.$$.fragment,g),pe(C.$$.fragment,g),D=!0)},o(g){ve(H.$$.fragment,g),ve(C.$$.fragment,g),D=!1},d(g){g&&o(e),be(H),be(C)}}}class qe extends Ie{constructor(e){super(),ke(this,e,null,Be,He,{})}}export{qe as default};