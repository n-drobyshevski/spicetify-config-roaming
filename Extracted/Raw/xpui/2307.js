"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2307],{20701:(e,t,a)=>{a.d(t,{T:()=>u});var n=a(67294),l=a(57784),r=a(37925),o=a(25678),i=a(60289),c=a(23401);const s="profile-editImage-imageContainer",d="profile-editImage-editImageButtonContainer",u=function({onClick:e,name:t,images:a,canEdit:u,placeholderType:m,shape:g=i.Kc.SQUARE,dragUri:E=""}){const[h,p]=(0,r.RH)(a),C=(0,o.VO)(h,p)===o.KO.loaded,b=(0,l.O1)([E],t);return n.createElement("div",{className:s,"data-testid":`${m}-image`,draggable:!!E,onDragStart:b},n.createElement(i.Oe,{loading:"eager",name:t,images:a,placeholderType:m,shape:g}),u&&n.createElement("div",{className:d},n.createElement(c.F,{overlay:C,onClick:e,rounded:g===i.Kc.CIRCLE})))}},12918:(e,t,a)=>{a.d(t,{w:()=>h});var n=a(67294),l=a(65598),r=a.n(l),o=a(32667),i=a(15235),c=a(99027),s=a(67892);const d="playlist-playlist-playlistDescription",u="playlist-playlist-heading",m="playlist-playlist-list",g="playlist-playlist-listItem",E="playlist-playlist-paragraph",h=n.memo((function({html:e,onTimeStampClick:t,enableTimestamps:a=!1}){const l=(0,n.useMemo)((()=>{const n=a?(0,i.f)(e):e;let l;try{l=r()(n,{transform:p(t),dangerouslySetChildren:[]})}catch{l=e}return l}),[a,e,t]);return n.createElement("div",{className:d},l)}));function p(e){let t=0;return{p:e=>n.createElement(o.D,{as:"p",variant:"ballad",semanticColor:"textSubdued",className:E},e.children),a:t=>t.href?.startsWith("#t=")?n.createElement(c.E,{onClick:e},t.children):t.href?n.createElement(s.r,{to:t.href},t.children):n.createElement(n.Fragment,null,t.children),ul:e=>n.createElement("ul",{className:m},e.children),ol:e=>n.createElement("ol",{className:m},e.children),li:e=>n.createElement(o.D,{as:"li",variant:"ballad",semanticColor:"textSubdued",className:g},e.children),br:()=>n.createElement("br",null),h1:e=>n.createElement(o.D,{as:"h1",variant:"balladBold",semanticColor:"textSubdued",className:u},e.children),h2:e=>n.createElement(o.D,{as:"h2",variant:"balladBold",semanticColor:"textSubdued",className:u},e.children),h3:e=>n.createElement(o.D,{as:"h3",variant:"balladBold",semanticColor:"textSubdued",className:u},e.children),h4:e=>n.createElement(o.D,{as:"h4",variant:"balladBold",semanticColor:"textSubdued",className:u},e.children),h5:e=>n.createElement(o.D,{as:"h5",variant:"balladBold",semanticColor:"textSubdued",className:u},e.children),h6:e=>n.createElement(o.D,{as:"h6",variant:"balladBold",semanticColor:"textSubdued",className:u},e.children),time:t=>n.createElement(c.E,{onClick:e},t.children),_:(e,a,l)=>{const r=void 0===a?e:l;return n.createElement(n.Fragment,{key:"fragment"+t++},r)}}}},35213:(e,t,a)=>{a.d(t,{l:()=>h});var n=a(67294),l=a(96206),r=a(76119),o=a(78462),i=a(73785);const c={"custom-order":o.HI,title:{column:i.Q.TITLE,order:i.k.ASC},artist:{column:i.Q.TITLE,order:i.k.SECONDARY_ASC},"added-by":{column:i.Q.ADDED_BY,order:i.k.ASC},"added-at":{column:i.Q.ADDED_AT,order:i.k.ASC},duration:{column:i.Q.DURATION,order:i.k.ASC},album:{column:i.Q.ALBUM,order:i.k.ASC},"album-or-podcast":{column:i.Q.ALBUM_OR_PODCAST,order:i.k.ASC},"album-or-show":{column:i.Q.ALBUM_OR_SHOW,order:i.k.ASC}},s={title:i.Q.TITLE,artist:i.Q.TITLE,"added-by":i.Q.ADDED_BY,"added-at":i.Q.ADDED_AT,duration:i.Q.DURATION,album:i.Q.ALBUM,"album-or-podcast":i.Q.ALBUM_OR_PODCAST,"album-or-show":i.Q.ALBUM_OR_SHOW},d={[i.k.NONE]:i.k.NONE,[i.k.ASC]:i.k.DESC,[i.k.DESC]:i.k.ASC,[i.k.SECONDARY_ASC]:i.k.SECONDARY_DESC,[i.k.SECONDARY_DESC]:i.k.SECONDARY_ASC},u={[i.Q.INDEX]:{key:"custom-order",get value(){return l.ag.get("sort.custom-order")}},[i.Q.TITLE]:{key:"title",get value(){return l.ag.get("sort.title")}},[i.Q.ARTIST]:{key:"artist",get value(){return l.ag.get("sort.artist")}},[i.Q.ADDED_BY]:{key:"added-by",get value(){return l.ag.get("sort.added-by")}},[i.Q.ADDED_AT]:{key:"added-at",get value(){return l.ag.get("sort.date-added")}},[i.Q.DURATION]:{key:"duration",get value(){return l.ag.get("sort.duration")}},[i.Q.EVENT_DATE]:null,[i.Q.ALBUM]:{key:"album",get value(){return l.ag.get("sort.album")}},[i.Q.ALBUM_OR_PODCAST]:{key:"album-or-podcast",get value(){return l.ag.get("sort.album-or-podcast")}},[i.Q.ALBUM_OR_SHOW]:{key:"album-or-show",get value(){return l.ag.get("sort.album-or-show")}},[i.Q.PLAYS]:null,[i.Q.RELEASE_DATE]:null,[i.Q.ADD]:null,[i.Q.ACTIONS]:null};var m=a(28248),g=a(1838);function E(e){return!!e}const h=({columns:e,disabled:t,onSort:a})=>{const h=[...e];h.splice(2,0,m.QD.ARTIST);const{sortState:p,setSortState:C}=(0,n.useContext)(o.Gb),b=function(e){return null===e.column?u[m.QD.INDEX]:(0,g.cB)(e.column,e.order)?u[m.QD.ARTIST]:u[e.column]}(p),k=(0,n.useCallback)((e=>{a?.(),C(((e,t,a)=>e?t!==s[e]||"artist"===e&&[i.k.ASC,i.k.DESC].includes(a)||"title"===e&&[i.k.SECONDARY_ASC,i.k.SECONDARY_DESC].includes(a)?c[e]:{column:s[e],order:d[a]}:o.HI)(e,p.column,p.order))}),[a,C,p.column,p.order]),y=(0,n.useCallback)((()=>null!==p.column),[p.column]),S=h.map((e=>u[e])).filter(E);return n.createElement(r.A,{options:S,onSelect:k,selected:b,isSelectionChanged:y,sortOrder:p.order,heading:l.ag.get("drop_down.sort_by"),disabled:t})}},77495:(e,t,a)=>{a.d(t,{v:()=>b});var n=a(87462),l=a(67294),r=a(94184),o=a.n(r),i=a(72603),c=a(74257),s=a(38910),d=a(96206),u=a(83692),m=a(54444),g=a(45287),E=a(46128);const h="I3oc8sxg8Duq4kYUGnMo",p="LEZf9K5hG4hfCKfgr5Xo",C=e=>l.createElement(i.e,(0,n.Z)({semanticColor:"textPositive"},e)),b=({uri:e,...t})=>{const{isEnhanced:a,toggleIsEnhanced:r}=(0,g.U)(e),{spec:i,logger:b}=(0,m.fU)(s.createDesktopEnhanceButtonEventFactory,{data:{uri:e}}),k=l.createElement(u.w,{label:a?d.ag.get("web-player.enhance.button_aria_label_enhanced"):d.ag.get("web-player.enhance.button_aria_label_not_enhanced")},l.createElement(c.P,(0,n.Z)({buttonSize:"sm",className:o()(h,{[p]:a})},t,{iconLeading:a?C:void 0,onClick:()=>{b.logInteraction(a?i.hitUnenhanceContext({contextToBeUnenhanced:e}):i.hitEnhanceContext({contextToBeEnhanced:e})),r()}}),a?d.ag.get("web-player.enhance.button_text_enhanced"):d.ag.get("web-player.enhance.button_text_not_enhanced")));return a?k:l.createElement(E.T,{id:"enhance-button",bodyText:d.ag.get("web-player.enhance.onboarding.enhance-playlist")},k)}},46128:(e,t,a)=>{a.d(t,{T:()=>g});var n=a(67294),l=a(73935),r=a(55914),o=a(32667),i=a(73753),c=a(34011),s=a(32648),d=a(5229);const u="iW5kFTiudWn9ItsTvZmz",m="OfNgl_iK7pi63fAi8USM",g=function({id:e,title:t,bodyText:a,buttonText:g,shouldScrollIntoView:E,children:h}){const[p,C]=(0,d.z)(`onboarding-dismissed:${e}`,!1),{scrollNodeRef:b}=(0,n.useContext)(s.VX),[k,y]=(0,n.useState)(null),[S,D]=(0,n.useState)(null),v=(0,n.useRef)(!1);(0,n.useEffect)((()=>{E&&S&&!v.current&&(v.current=!0,S.scrollIntoView({behavior:"smooth",block:"center"}))}),[E,S]);const f=(0,n.useCallback)((()=>C(!0)),[C]);(0,n.useEffect)((()=>{if(p)return()=>{};const e=e=>{"Escape"===e.key&&f()},t=e=>{e.target instanceof Node&&!S?.contains(e.target)&&f()};return window.addEventListener("keydown",e,!0),window.addEventListener("click",t,!0),()=>{window.removeEventListener("keydown",e,!0),window.removeEventListener("click",t,!0)}}),[p,f,S]);const w=b.current?.getBoundingClientRect(),T=k?.getBoundingClientRect();return n.createElement(n.Fragment,null,n.createElement("span",{ref:y},h),!p&&T&&(0,l.createPortal)(n.createElement("div",{className:u,style:{top:(T?.top??0)-((w?.top??0)-(b.current?.scrollTop??0)),left:(T?.left??0)-((w?.left??0)-(b.current?.scrollLeft??0)),width:T?.width,height:T?.height},ref:D},n.createElement(r.J,{popoverTitle:t,arrow:r.J.bottom,colorSet:"announcement",className:m},n.createElement(o.D,{as:"p",paddingBottom:g&&i.g4V},a),g&&n.createElement(c.D,{buttonSize:"sm",colorSet:"invertedLight",onClick:f},g))),b.current||document.body))}},61412:(e,t,a)=>{a.d(t,{v:()=>n.v});var n=a(77495)},12498:(e,t,a)=>{a.d(t,{v:()=>n.v});var n=a(27333)},40786:(e,t,a)=>{a.d(t,{s:()=>v});var n=a(67294),l=a(87577),r=a(96206),o=a(35410),i=a(20701),c=a(60289),s=a(59482),d=a(72907),u=a(12918),m=a(55120),g=a(77834),E=a(24172),h=a(49207),p=a(51441),C=a(18261),b=a(51802),k=a(46457);function y(e){return e.user||null}function S(e){return!!e}function D(e,t=!1){return{id:e.username,uri:e.uri,name:e.username,displayName:e.displayName||void 0,images:e.images,isMadeFor:t}}const v=function({metadata:e,isPlaying:t,togglePlay:a,backgroundColor:v,spec:f,specLikedSongs:w}){const{uri:T,name:_,description:A="",images:x,totalLength:N,totalLikes:I,duration:O,owner:R,isOwnedBySelf:L=!1,isCollaborative:B=!1,formatListData:Q,madeFor:U=null,collaborators:P}=e,M=Q?.attributes||{},F=M.header_image_url_desktop||M.image_url||null,X=null!==F?[{url:F,width:null,height:null}]:[],Y=(0,l.W6)(h.G8),K=(0,l.W6)(h.bM),W=Y&&L,G=(0,b.$)(),Z=(0,n.useMemo)((()=>function(e,t,a=[],n){return e?[D(e,!0)]:a.length>1&&n?a.map(y).filter(S).map((e=>D(e))):[D(t)]}(U,R,P?.items,K)),[U,R,P?.items,K]),z=(0,n.useContext)(E.zy),j=(0,n.useContext)(k.S7),V=(0,n.useCallback)((()=>{if(f){const e=f.ownerFactory().hitUiReveal();G.logInteraction(e)}j({type:"open",uri:T})}),[j,T,f,G]),J=(0,n.useCallback)((e=>{if(f){const e=f?.descriptionTextFactory().hitUiReveal();G.logInteraction(e)}z({type:"open",playlistDetails:{name:_,description:A,image:x[0],uri:T},focusedElement:e})}),[f,z,_,A,x,T,G]),H=(0,n.useCallback)((()=>{if(f){const e=f.coverArtFactory().hitUiReveal();G.logInteraction(e)}z({type:"openWithImagePicker",playlistDetails:{name:_,description:A,image:x[0],uri:T}})}),[z,_,A,x,T,G,f]),q=(0,n.useCallback)(((e,t)=>{if(f){const e=f.ownerFactory().hitUiNavigate({destination:t.creator.uri});G.logInteraction(e)}if(w){const e=w.ownerFactory().hitUiNavigate({destination:t.creator.uri});G.logInteraction(e)}}),[G,f,w]),$=K&&e.permissions?e.permissions?.isPrivate?r.ag.get("private_playlist"):r.ag.get("public_playlist"):B?r.ag.get("sidebar.collaborative_playlist"):r.ag.get("playlist");return n.createElement(c.gF,{backgroundColor:v,backgroundImages:X},n.createElement(s.W,null,n.createElement(m.$,{size:p.qE.sm,onClick:a,isPlaying:t,uri:T}),n.createElement(d.i,{text:_,dragUri:T,dragLabel:_})),F?null:n.createElement(C._,{menu:n.createElement(o.X,{uri:T})},n.createElement("div",{className:g.Z.playlistImageContainer},n.createElement(i.T,{canEdit:W,name:_,images:x,onClick:H,placeholderType:"playlist",dragUri:T}))),n.createElement(c.sP,null,n.createElement(c.dy,{small:!0,uppercase:!0},$),n.createElement(C._,{menu:n.createElement(o.X,{uri:T})},n.createElement(c.xd,{canEdit:W,onClick:()=>{if(f){const e=f.titleFactory().hitUiReveal();G.logInteraction(e)}J(E.w.TITLE)},dragUri:T,dragLabel:_,ariaLabel:r.ag.get("playlist.edit-details.button",_)},_)),A&&n.createElement(c.dy,{bold:!1,gray:!0,canEdit:W,onClick:e=>(e=>{e.target.href||J(E.w.DESCRIPTION)})(e)},n.createElement(u.w,{html:A,onTimeStampClick:()=>{}})),n.createElement(c.QS,{creators:Z,onPiledCreatorsClick:V,onCreatorClick:q,totalTracks:N,totalLikes:I??0,durationMilliseconds:O?.milliseconds,isEstimatedDuration:O?.isEstimate,newEntries:parseInt(M.new_entries_count||"0",10)})))}},15235:(e,t,a)=>{a.d(t,{f:()=>l});const n=/(\((?:[0-9]{1,3}:){1,2}[0-9]{2}\))/g;function l(e){return e.split(n).map((e=>{if(e.match(n)){return`(<time>${e.replace("(","").replace(")","")}</time>)`}return e})).join("")}},77834:(e,t,a)=>{a.d(t,{Z:()=>n});const n={xs:"(min-width: 0px)",xsOnly:"(min-width: 0px) and (max-width: 767px)",sm:"(min-width: 768px)",smOnly:"(min-width: 768px) and (max-width: 1023px)",md:"(min-width: 1024px)",mdOnly:"(min-width: 1024px) and (max-width: 1279px)",lg:"(min-width: 1280px)",lgOnly:"(min-width: 1280px) and (max-width: 1919px)",xl:"(min-width: 1920px)",playlist:"playlist-playlist-playlist",searchBoxContainer:"playlist-playlist-searchBoxContainer",recommendedTrackList:"playlist-playlist-recommendedTrackList",playlistContent:"playlist-playlist-playlistContent",playlistDescription:"playlist-playlist-playlistDescription",top:"playlist-playlist-top",header:"playlist-playlist-header",subtitle:"playlist-playlist-subtitle",refreshButton:"plyalist-playlist-refreshButton",playlistImageContainer:"playlist-playlist-playlistImageContainer",playlistInlineCurationSection:"playlist-playlist-playlistInlineCurationSection",playlistInlineCurationTitle:"playlist-playlist-playlistInlineCurationTitle",playlistInlineCurationWrapper:"playlist-playlist-playlistInlineCurationWrapper",playlistInlineCurationCloseButton:"playlist-playlist-playlistInlineCurationCloseButton",playlistInlineCurationBackButton:"playlist-playlist-playlistInlineCurationBackButton",artistResultListTitle:"playlist-playlist-artistResultListTitle",seeMore:"playlist-playlist-seeMore",emptyStateContainer:"playlist-playlist-emptyStateContainer",searchResultListContainer:"playlist-playlist-searchResultListContainer",emptySearchTermContainer:"playlist-playlist-emptySearchTermContainer",icon:"playlist-playlist-icon"}}}]);
//# sourceMappingURL=2307.js.map