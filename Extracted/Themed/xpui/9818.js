"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9818,4096],{57106:(e,t,a)=>{a.d(t,{Q:()=>l});var s=a(87462),r=a(67294),n=a(94184),c=a.n(n);const o="_pMNGOs2KBLWGpGmunYI";function l(e){return r.createElement("section",(0,s.Z)({},e,{className:c()(o,e.className)}))}},84636:(e,t,a)=>{a.d(t,{q:()=>N});var s=a(87462),r=a(67294),n=a(94184),c=a.n(n),o=a(92877),l=a(32667),i=a(75793),d=a(68501),m=a(60392);const p="RSgScVFD1lR6ekFN1hC9",u="dkOx6BEJI1d0RStHWUm5",g="GVQFdUwCGkHZmyuz4emj",A="BeY8E5ONYVNnO_iOKyvA",E="bPM8ckhKJay0joUDdCMw",h="ge4yAlYYoeKvB29FiG1W",f="og4J6XJtHE8zrFOD3WYQ",v="SMUcY5tIlrmkS1O8tUji",k="110px";function N({figureProps:e,imageProps:t,advertiserTypeProps:a,taglineProps:n,callToActionButtonProps:N,externalLinkIconProps:S,...b}){return r.createElement("a",(0,s.Z)({target:"_blank"},b,{className:c()(p,b.className)}),r.createElement("figure",(0,s.Z)({className:u},e),r.createElement(o.E,(0,s.Z)({placeholderSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8LwkAAh0BGumlBj4AAAAASUVORK5CYII=",imageWidth:k,imageHeight:k,crop:!0},t,{className:c()(A,t.className)})),r.createElement("figcaption",{className:E},r.createElement(l.D,(0,s.Z)({variant:"balladBold",className:h},a)),r.createElement(m.S,(0,s.Z)({className:f},n)),N&&r.createElement("div",{className:v},r.createElement(d.K,N))),S&&r.createElement(i.T,(0,s.Z)({className:g,iconSize:16},S))))}},68501:(e,t,a)=>{a.d(t,{K:()=>d});var s=a(87462),r=a(67294),n=a(94184),c=a.n(n),o=a(34011),l=a(32667);const i="G8b_VGQSxRwZSatAhUTd";function d({children:e,"data-testid":t,className:a,...n}){return r.createElement("div",{className:c()(i,a),"data-testid":t},r.createElement(o.D,(0,s.Z)({},n,{buttonSize:n.buttonSize||o.D.sm}),r.createElement(l.D,{variant:"mestoBold"},e)))}},60392:(e,t,a)=>{a.d(t,{S:()=>i});var s=a(87462),r=a(67294),n=a(94184),c=a.n(n),o=a(32667);const l="eaiLXk0FzOrdfkM6O8jp";function i(e){return r.createElement(o.D,(0,s.Z)({},e,{variant:e.variant||"mesto",className:c()(l,e.className)}))}},34096:(e,t,a)=>{a.r(t),a.d(t,{PodcastSponsorsWrapper:()=>l,default:()=>i});var s=a(87462),r=a(67294),n=a(96206),c=a(13218);const o="Opi2dmbjxhZcr0do4cr9";function l({shelfHeaderProps:e,listProps:t}){return r.createElement(r.Fragment,null,r.createElement(c.r,(0,s.Z)({title:n.ag.get("episode.sponsored_by")},e)),r.createElement("aside",(0,s.Z)({className:o},t)))}const i=l},33641:(e,t,a)=>{a.d(t,{G:()=>c,I:()=>n});var s=a(67294),r=a(86706);const n=e=>e?async e=>{const{adsCosmos:t}=await Promise.resolve().then(a.bind(a,24141));return await t.get(e)}:e=>fetch(e);function c(e){const{isDesktop:t}=(0,r.v9)((e=>e.platform));return(0,s.useMemo)((()=>e(t)),[e,t])}},39818:(e,t,a)=>{a.r(t),a.d(t,{AllShowSponsorsWithData:()=>d,default:()=>m});var s=a(67294),r=a(1486),n=a(8271),c=a(57106),o=a(33641),l=a(84636),i=a(34096);const d=({uri:e,showSponsorsData:t,fireTrackingEvent:a=o.I})=>{const d=(0,n.s4)(),m=(0,s.useCallback)((async a=>d.send((0,r.$)({uri:e,reason:"Show page See All",lineitem_id:t.map((e=>e.metadata.lineitemId)),...a}))),[e,t,d]),p=(0,o.G)(a);return(0,s.useEffect)((function(){t.forEach((({trackingEvents:{viewed:e}={}})=>e?.forEach(p))),m()}),[t,m,p]),s.createElement(c.Q,null,s.createElement(i.PodcastSponsorsWrapper,{shelfHeaderProps:{hasMoreElements:!1},listProps:{children:t?.map(((e,a)=>s.createElement(l.q,{key:`${e.metadata.advertiser||e.metadata.creativeId||e.metadata.creative_id} ${a}`,href:e.clickthrough,onClick:function(){e.trackingEvents?.clicked.forEach(p),m({ui_navigate:t.map((({clickthrough:e},t)=>a===t?e:"")),navigate_to_external_uri:t.map(((e,t)=>a===t))})},"data-testid":"to do",imageProps:{src:e.display,alt:`${e.metadata.advertiser} - ${e.metadata.buttonMessage}`},advertiserTypeProps:{"data-testid":"to do",children:e.metadata.advertiser},taglineProps:{"data-testid":"to do",children:e.metadata.tagline},callToActionButtonProps:{"data-testid":"to do",children:e.metadata.buttonMessage}})))}}))},m=d}}]);
//# sourceMappingURL=9818.js.map