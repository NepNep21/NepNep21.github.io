import{S as e,i as t,s as o,e as s,a as i,b as r,c as n,d as a,f as l,g as c,l as p,n as d,h as u,m,j as f,k as h}from"./vendor.a3139610.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const o of e)if("childList"===o.type)for(const e of o.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();function g(e){let t,o,g,v,x,w,b,k,N,B,L,j,M,C,E,I;return{c(){t=s("main"),o=s("h4"),o.textContent="Hello, i'm nep (not real name), i'm 15, pan, male, and i spend most of my time playing games or working on projects :3",g=i(),v=s("a"),x=r("svg"),w=r("path"),b=i(),k=s("a"),N=r("svg"),B=r("path"),L=i(),j=s("button"),M=r("svg"),C=r("path"),n(o,"class","svelte-o70u5k"),n(w,"d",m),n(x,"viewBox","0 0 24 24"),n(x,"width","64px"),n(x,"height","64px"),a(x,"filter","invert(100%)"),n(v,"href","https://github.com/NepNep21"),n(v,"title","My github"),n(B,"d",f),n(N,"viewBox","0 0 24 24"),n(N,"width","64px"),n(N,"height","64px"),n(k,"href","https://steamcommunity.com/profiles/76561198303469579"),n(k,"title","My steam"),n(C,"d",h),n(M,"viewBox","0 0 24 24"),n(M,"width","64px"),n(M,"height","64px"),n(j,"title","Copy discord tag"),n(j,"class","svelte-o70u5k"),n(t,"class","svelte-o70u5k")},m(e,s){l(e,t,s),c(t,o),c(t,g),c(t,v),c(v,x),c(x,w),c(t,b),c(t,k),c(k,N),c(N,B),c(t,L),c(t,j),c(j,M),c(M,C),E||(I=p(j,"click",y),E=!0)},p:d,i:d,o:d,d(e){e&&u(t),E=!1,I()}}}function y(){navigator.clipboard.writeText("Nep Nep#3025")}new class extends e{constructor(e){super(),t(this,e,null,g,o,{})}}({target:document.getElementById("app")});
