"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[1289],{70369:(e,t,a)=>{a.d(t,{$:()=>l.$});var l=a(22578)},30731:(e,t,a)=>{a.d(t,{u:()=>g});var l=a(67294),r=a(94184),n=a.n(r),i=a(32667),o=a(34011),s=a(6330),c=a(40771);const A="FvfvGU3jvHRskUU9v9_8",E="Q9AlbZn2EGzy3MTWXa8X",u="mxmxS0y8LiwSs5nueKPT",d="GXxVAveNFStY3pBI_NO4",m="eHcXC2s97InYP7rMNT0H",g=l.memo((function(e){const{children:t,message:a,title:r,linkTitle:g,linkTo:T,onClick:C,renderInline:D=!1}=e,{isXSOnly:L,isSMOnly:y}=(0,s.e)(),_=L||y;return l.createElement("section",{className:n()(A,{[E]:D})},t,l.createElement(i.D,{as:"h1",variant:_?"cello":"alto",className:d},r),l.createElement(i.D,{variant:_?"mesto":"ballad",className:m},a),g&&(T||C)&&l.createElement(o.D,{colorSet:"invertedLight",className:u,href:T,onClick:C,component:c.Z},g))}))},76119:(e,t,a)=>{a.d(t,{A:()=>L});var l=a(67294),r=a(94184),n=a.n(r),i=a(32667),o=a(34142),s=a(47921),c=a(20246),A=a(71379),E=a(78267),u=a(30005),d=a(36652),m=a(21691),g=a(28248);const T=({heading:e,selected:t,onSelect:a,options:r,sortOrder:n})=>{let o;return n&&(n===g.kn.ASC||n===g.kn.SECONDARY_ASC?o=l.createElement(A.C,{iconSize:16}):n!==g.kn.DESC&&n!==g.kn.SECONDARY_DESC||(o=l.createElement(E.B,{iconSize:16}))),l.createElement(u.v,null,e?l.createElement(d.F,null,e):null,r.map((({key:e,value:r})=>l.createElement(m.s,{role:"menuitemradio","aria-checked":e===t.key&&!o,key:e,onClick:()=>a(e),icon:e===t.key&&o},l.createElement(i.D,{variant:"mesto"},r)))))},C="x-sortBox-sortDropdown",D="CbHJjxYxldG7uUPMYMaP";const L=({heading:e,options:t,selected:a,onSelect:r,isSelectionChanged:A,sortOrder:E,variant:u="mesto",semanticColor:d,disabled:m,onClick:g})=>{const[L]=t;a||(a=L);const y=A?A(a):a!==L;return l.createElement(c.y,{menu:l.createElement(T,{selected:a,options:t,onSelect:r,sortOrder:E,heading:e})},((e,t,r)=>l.createElement("button",{className:n()(C,{[D]:y}),onClick:e=>{m||(g?.(e),t(e))},ref:r,type:"button"},l.createElement(i.D,{semanticColor:d,variant:u},a.value),e?l.createElement(o.U,{iconSize:16}):l.createElement(s.i,{iconSize:16}))))}},1834:(e,t,a)=>{a.d(t,{$:()=>o,Q:()=>i});var l=a(67294),r=a(22583),n=a(97641);const i=(0,l.createContext)({setSortState:()=>{throw new Error("setSortState must be used within a LibrarySortProvider")},sortState:n.oT.ADDED_AT}),o=l.memo((function({uri:e,children:t,defaultSortOption:a}){return l.createElement(r.r,{uri:e,defaultState:a,sortContext:i},t)}))},97641:(e,t,a)=>{a.d(t,{Aq:()=>E,Bf:()=>O,EY:()=>C,G5:()=>y,JV:()=>h,MY:()=>s,Ru:()=>c,ZP:()=>D,a6:()=>g,aY:()=>P,e3:()=>m,ei:()=>o,o$:()=>u,oT:()=>i,pT:()=>S,rJ:()=>b,u3:()=>f,w0:()=>_});var l=a(96206),r=a(74483),n=a(9659);let i;!function(e){e.SHOW_ALPHABETICAL="SHOW_ALPHABETICAL",e.BOOK_ALPHABETICAL="BOOK_ALPHABETICAL",e.EPISODE_ALPHABETICAL="EPISODE_ALPHABETICAL",e.PLAYLIST_ALPHABETICAL="PLAYLIST_ALPHABETICAL",e.ALBUM_ALPHABETICAL="ALBUM_ALPHABETICAL",e.ADDED_AT="ADDED_AT",e.CREATOR_NAME="CREATOR_NAME",e.CREATOR_NAME_ALPHABETICAL="CREATOR_NAME_ALPHABETICAL",e.ALBUM_CREATOR_NAME="ALBUM_CREATOR_NAME",e.RECENTLY_PLAYED="RECENTLY_PLAYED",e.MOST_RELEVANT="MOST_RELEVANT",e.CUSTOM_ORDER="CUSTOM_ORDER"}(i||(i={}));const o={"show-alphabetical":i.SHOW_ALPHABETICAL,"book-alphabetical":i.BOOK_ALPHABETICAL,"episode-alphabetical":i.EPISODE_ALPHABETICAL,"playlist-alphabetical":i.PLAYLIST_ALPHABETICAL,"album-alphabetical":i.ALBUM_ALPHABETICAL,"recently-added":i.ADDED_AT,"creator-name":i.CREATOR_NAME,"creator-name-alphabetical":i.CREATOR_NAME_ALPHABETICAL,"album-creator-name":i.ALBUM_CREATOR_NAME,"recently-played":i.RECENTLY_PLAYED,"playlist-most-relevant":i.MOST_RELEVANT,"playlist-custom-order":i.CUSTOM_ORDER},s={[i.RECENTLY_PLAYED]:{key:"recently-played",get value(){return l.ag.get("collection.sort.recently-played")}},[i.ADDED_AT]:{key:"recently-added",get value(){return l.ag.get("collection.sort.recently-added")}},[i.SHOW_ALPHABETICAL]:{key:"show-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.BOOK_ALPHABETICAL]:{key:"book-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.EPISODE_ALPHABETICAL]:{key:"episode-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.PLAYLIST_ALPHABETICAL]:{key:"playlist-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.ALBUM_CREATOR_NAME]:{key:"album-creator-name",get value(){return l.ag.get("collection.sort.creator")}},[i.CREATOR_NAME]:{key:"creator-name",get value(){return l.ag.get("collection.sort.creator")}},[i.CREATOR_NAME_ALPHABETICAL]:{key:"creator-name-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.ALBUM_ALPHABETICAL]:{key:"album-alphabetical",get value(){return l.ag.get("collection.sort.alphabetical")}},[i.MOST_RELEVANT]:{key:"playlist-most-relevant",get value(){return l.ag.get("collection.sort.most-relevant")}},[i.CUSTOM_ORDER]:{key:"playlist-custom-order",get value(){return l.ag.get("collection.sort.custom-order")}}},c=[i.ADDED_AT,i.ALBUM_ALPHABETICAL,i.CREATOR_NAME],A={[i.ADDED_AT]:{field:r.lY.ADDED_AT,order:r.As.DESC},[i.ALBUM_ALPHABETICAL]:{field:r.lY.NAME,order:r.As.ASC},[i.CREATOR_NAME]:{field:r.lY.ARTIST_NAME,order:r.As.ASC}},E=e=>{if(c.includes(e))return A[e]},u=[i.ADDED_AT,i.CREATOR_NAME_ALPHABETICAL],d={[i.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[i.CREATOR_NAME_ALPHABETICAL]:{field:r.hx.NAME,order:r.As.ASC}},m=e=>{if(u.includes(e))return d[e]},g=[i.ADDED_AT,i.SHOW_ALPHABETICAL],T={[i.ADDED_AT]:{field:r.hx.ADDED_AT,order:r.As.DESC},[i.SHOW_ALPHABETICAL]:{field:r.aW.NAME,order:r.As.ASC}},C=e=>{if(g.includes(e))return T[e]},D=[i.ADDED_AT,i.BOOK_ALPHABETICAL],L={[i.ADDED_AT]:r.VN.ADDED_AT,[i.BOOK_ALPHABETICAL]:r.VN.NAME},y=e=>{if(D.includes(e))return L[e]},_=[i.MOST_RELEVANT,i.RECENTLY_PLAYED,i.ADDED_AT,i.PLAYLIST_ALPHABETICAL,i.CUSTOM_ORDER],p={[i.ADDED_AT]:{field:n.bD.ADDED_AT,order:n.As.DESC},[i.RECENTLY_PLAYED]:{field:n.bD.RECENTLY_PLAYED,order:n.As.ASC},[i.PLAYLIST_ALPHABETICAL]:{field:n.bD.NAME,order:n.As.ASC},[i.MOST_RELEVANT]:{field:n.bD.RELEVANCE,order:n.As.DESC},[i.CUSTOM_ORDER]:void 0},S=e=>{if(_.includes(e))return p[e]},P=i.ADDED_AT,f=i.ADDED_AT,b=i.ADDED_AT,O=i.MOST_RELEVANT,h=i.ADDED_AT},64971:(e,t,a)=>{a.d(t,{h:()=>d});var l=a(67294),r=a(98816),n=a(98562),i=a(45342),o=a(54444),s=a(76119),c=a(1834),A=a(97641);const E=l.memo((function({sortOptions:e,onSort:t}){const{sortState:a,setSortState:r}=(0,l.useContext)(c.Q),n=(0,l.useCallback)((e=>{const a=A.ei[e];t?.(a),r(a)}),[t,r]),i=e.map((e=>A.MY[e])),o=A.MY[a];return l.createElement(s.A,{options:i,onSelect:n,selected:o})})),u="collection-searchBar-searchBar",d=l.memo((function({filterPlaceholder:e,sortOptions:t}){const{spec:a,logger:s}=(0,o.fU)(r.createDesktopSearchBarEventFactory,{}),c=(0,l.useContext)(i.H),A=(0,l.useCallback)((()=>{s.logInteraction(a.filterFieldFactory().keyStrokeFilter())}),[s,a]),d=(0,l.useCallback)((()=>{s.logInteraction(a.filterFieldFactory().hitClearFilter())}),[s,a]),m=(0,l.useCallback)((()=>{s.logInteraction(a.sortButtonFactory().hitSort())}),[s,a]);return l.createElement("div",{className:u},c?.getCapabilities().canFilter?l.createElement(l.Suspense,{fallback:null},l.createElement(n.K,{placeholder:e,onFilter:A,onClear:d})):null,c?.getCapabilities().canSort?l.createElement(E,{sortOptions:t,onSort:m}):null)}))},47032:(e,t,a)=>{a.d(t,{$:()=>l.$,Q:()=>l.Q});var l=a(1834)},38911:(e,t,a)=>{a.d(t,{Aq:()=>l.Aq,Bf:()=>l.Bf,EY:()=>l.EY,G5:()=>l.G5,JV:()=>l.JV,Ru:()=>l.Ru,ZP:()=>l.ZP,a6:()=>l.a6,aY:()=>l.aY,e3:()=>l.e3,o$:()=>l.o$,oT:()=>l.oT,pT:()=>l.pT,rJ:()=>l.rJ,u3:()=>l.u3,w0:()=>l.w0});var l=a(97641)},61112:(e,t,a)=>{a.r(t),a.d(t,{default:()=>Ae});var l=a(67294),r=a(6695),n=a(96206),i=a(30731),o=a(6158),s=a(1838),c=a(22423),A=a(47032),E=a(38911),u=a(4236),d=a(61901),m=a(45342),g=a(84242),T=a(89952),C=a(70369),D=a(23609),L=a(18270),y=a(55120),_=a(64971),p=a(51441),S=a(74483);const P={[S.yW.NAME]:s.hI.TITLE,[S.yW.SHOW_NAME]:s.hI.SHOW,[S.yW.ADDED_AT]:s.hI.ADDED_AT},f=[E.oT.ADDED_AT,E.oT.CREATOR_NAME,E.oT.EPISODE_ALPHABETICAL],b={[E.oT.ADDED_AT]:{field:S.yW.ADDED_AT,order:S.As.DESC},[E.oT.CREATOR_NAME]:{field:S.yW.SHOW_NAME,order:S.As.ASC},[E.oT.EPISODE_ALPHABETICAL]:{field:S.yW.NAME,order:S.As.ASC}},O=e=>{if(f.includes(e))return b[e]},h=e=>{if(!f.includes(e))return;const t=O(e);if(!t?.field)return;const a=P[t.field];if(!a)return;return s.Vd[a].map((e=>t.order?`${e} ${t.order}`:e)).join(",")},R="m9xwK71Ieq9cySIq4FAP",I="PkEMTu8sGqJeQWJ7HvEs",k="DbH2KkRA8yVWWpXGaNSW",N=({metadata:e,canSort:t,backgroundColor:a,isPlaying:r,isOnline:i,togglePlay:o})=>{const{uri:s,name:c}=e,A=e.totalLength>0;return l.createElement(L.o,{backgroundColor:a},l.createElement(L.F,null,A&&l.createElement(y.$,{onClick:()=>o(),isPlaying:r,size:p.qE.lg,uri:s,disabled:!i,ariaPlayLabel:n.ag.get("playlist.a11y.play",c),ariaPauseLabel:n.ag.get("playlist.a11y.pause",c)}),t&&l.createElement("div",{className:k},l.createElement(_.h,{filterPlaceholder:n.ag.get("playlist.search_in_playlist"),sortOptions:f}))))};var M=a(70937),v=a(42922),B=a(18864),H=a(25988),x=a(91753),Y=a(88435),U=a(56294),w=a(57784),W=a(56802),$=a(18261),F=a(87257),V=a(57978),G=a(4383),K=a(26010),z=a(8341),q=a(5944),J=a(42781),X=a(84788),Q=a(67062);const Z={small:64,standard:300,large:640,xlarge:1024},j=l.memo((function({index:e,contextUri:t,episode:a,onRemove:r,usePlayContextItem:n}){const i=(0,l.useRef)(a.duration.milliseconds-a.timeLeft.milliseconds),o=a.uri,[s,A]=(0,l.useState)(0===a.timeLeft.milliseconds),{filter:E}=(0,l.useContext)(c.fo),d=(0,w.O1)(),m=(0,B.jh)(),T=(0,W.o)(),[C]=(0,G.Z)(o,!0),{useCurrentAvailability:D}=(0,l.useContext)(K.I),[L]=D(o),y=(0,u.k)(),_=(0,z.Y)((e=>{if(e?.item?.uri===a.uri){const t=(0,q.k)(e)??0;return i.current=t,t}return 0})),{isPlaying:p,isActive:S,togglePlay:P}=n({uri:o,index:e}),{isPlaying:f,isActive:b,togglePlay:O}=(0,g.n)({uri:o,pages:[{items:[{type:J.p.EPISODE,uri:o,uid:null,provider:null}]}]},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});(0,l.useEffect)((()=>{C||r()}),[C,r]),(0,l.useEffect)((()=>{p||a.duration.milliseconds<=i.current&&A(!0)}),[p,a.duration.milliseconds]);const h=(0,l.useCallback)((e=>{e||(i.current=0),A(e)}),[]),R=(0,l.useCallback)((()=>{T({type:"click",targetUri:o,intent:"navigate"})}),[o,T]),I=(0,l.useCallback)((()=>{y?(T({type:"click",intent:p?"pause":"play"}),P()):(T({type:"click",intent:f?"pause":"play"}),O())}),[y,p,f,T,P,O]),k=(0,l.useCallback)((e=>l.createElement(Q.o,{searchWords:[E],textToHighlight:e})),[E]),N=a.podcastSubscription?.isPaywalled??!1,M=a.podcastSubscription?.isUserSubscribed??!1,{badges:j}=(0,X.r)({isExplicit:a.isExplicit,isMOGEFRestricted:a.is19PlusOnly,isPaywalled:N});let ee=!1;return(S||!y&&b)&&(ee=!0),C?l.createElement(v.ZP,{value:"row",index:e},l.createElement($._,{menu:l.createElement(H.k,{uri:o,showUri:a.show.uri,isPlayed:s,onMarkAsPlayed:h})},l.createElement(x.X,{requestId:a.requestId,index:e,uri:o,uid:o,size:m,images:a.images.map((e=>({url:e.url,width:e.width||(e.label?Z[e.label]:null),height:e.height||(e.label?Z[e.label]:null)}))),isPaywalled:N,isUserSubscribed:M,name:a.name,highlightText:k,showName:a.show.name,showUri:a.show.uri,description:a.description,isPlayable:a.isPlayable&&L,fullyPlayed:s,durationMs:a.duration.milliseconds,releaseDate:a.release.date||"",resumePositionMs:i.current,handleDragStart:e=>{if(e.target!==e.currentTarget)return;const l=`${a.name} • ${a.show.name}`;d(e,[o],l,t)},handlePlaybackClick:I,handleClick:R,isCurrentlyPlaying:ee,isPlaying:y?p:f,position:ee?_:void 0,episodeSharingInfo:null,onMarkAsPlayed:h,badges:l.createElement(l.Fragment,null,j.explicit&&l.createElement(F.N,null),j.paid&&l.createElement(U.g,null),j.nineteen&&l.createElement(V.X,{size:16})),playButtonWrapper:e=>l.createElement(Y.l,{enabled:N&&!M,showUri:a.show.uri},e)}))):null})),ee="p6DKqBcwmVtxmHt8ju43",te="_OxEpxzAgJiTENfolVUN",ae=l.memo((function({contextUri:e,usePlayContextItem:t}){const a=(0,l.useContext)(m.H),{sortState:r}=(0,l.useContext)(A.Q),[n,i]=(0,l.useState)({totalLength:0,offset:0,items:[],limit:50}),o=(0,l.useRef)(!1),s=(0,l.useRef)(0),E=(0,l.useRef)(0),{filter:u}=(0,l.useContext)(c.fo),d=(0,l.useCallback)((()=>{E.current++}),[]),{ref:g,breakpoint:T}=(0,B.Db)({[B.Uo.MEDIUM]:0,[B.Uo.LARGE]:600}),C=(0,l.useCallback)(((e=!1)=>{const t=s.current;null!==t&&(o.current||(o.current=!0,(async e=>{const t=await a.getEpisodes({offset:e-E.current,limit:50,sort:O(r),filter:u});return E.current=0,t})(Number(t)).then((a=>{i((l=>{const r=Number(a.offset)+a.items.length,n=e?[]:[...l.items];return n.splice(Number(t),a.items.length,...a.items),s.current=r<a.totalLength?r:null,{...a,items:n}})),o.current=!1}))))}),[u,a,r]);return(0,l.useEffect)((()=>{s.current=0,C(!0)}),[C]),l.createElement(B.ZU.Provider,{value:T},l.createElement(v.ZP,{value:"track-list"},l.createElement("div",{ref:g},l.createElement(M.C,{onReachBottom:C,triggerOnInitialLoad:!0},n.items.map(((a,r)=>l.createElement("div",{className:te,key:`${r}${a.uri}`},l.createElement("hr",{className:ee,"aria-hidden":!0}),l.createElement(j,{key:`${a.uri}/${r}`,index:r,episode:a,contextUri:e,onRemove:d,usePlayContextItem:t}))))))))}));var le=a(60289),re=a(59482),ne=a(72907),ie=a(37761),oe=a(83209);const se=({metadata:e,backgroundColor:t,isPlaying:a,isOnline:r,togglePlay:i})=>{const{uri:o,name:s,images:c,totalLength:A,owner:E}=e,u=(0,l.useMemo)((()=>({id:E.username,uri:E.uri,name:E.username,displayName:E.displayName||void 0,images:E.images||[]})),[E]);return l.createElement(le.gF,{backgroundColor:t},l.createElement(re.W,null,l.createElement(y.$,{size:p.qE.sm,onClick:()=>i(),isPlaying:a,uri:o,disabled:!r,ariaPlayLabel:n.ag.get("playlist.a11y.play",s),ariaPauseLabel:n.ag.get("playlist.a11y.pause",s)}),l.createElement(ne.i,{text:s})),l.createElement(le.Oz,{images:c,name:s,shape:ie.K.ROUNDED_CORNERS,renderImage:()=>l.createElement(oe.$,null)}),l.createElement(le.sP,null,l.createElement(le.dy,{small:!0,uppercase:!0},n.ag.get("playlist")),l.createElement(le.xd,{canEdit:!1,onClick:()=>{}},s),l.createElement(le.QS,{creators:[u],totalEpisodes:A})))},ce=({metadata:e,canSort:t})=>{const a=(0,d.Y5)("#006450"),o=(0,u.k)(),{sortState:E}=(0,l.useContext)(A.Q),{filter:m}=(0,l.useContext)(c.fo),{isPlaying:D,togglePlay:L,usePlayContextItem:y}=(0,g.n)({uri:e.uri,metadata:{[T.sb.SORTING_CRITERIA]:h(E),[T.sb.FILTERING_PREDICATE]:(0,s.aK)(m)}},{featureIdentifier:"your_library",referrerIdentifier:"your_library"});return l.createElement("section",{className:I,"data-testid":"your-episodes-page"},l.createElement(C.$,null,n.ag.get("sidebar.your_episodes")),l.createElement(se,{metadata:e,backgroundColor:a,isPlaying:D,isOnline:o,togglePlay:L}),l.createElement("div",{className:R},l.createElement(N,{metadata:e,backgroundColor:a,isPlaying:D,isOnline:o,togglePlay:L,canSort:t}),l.createElement("div",{className:"contentSpacing"},e.totalLength>0?l.createElement(ae,{contextUri:e.uri,usePlayContextItem:y}):l.createElement(i.u,{message:n.ag.get("collection.empty-page.episodes-subtitle"),title:n.ag.get("collection.empty-page.episodes-title"),linkTo:"/genre/podcasts-web",linkTitle:n.ag.get("collection.empty-page.shows-cta"),renderInline:!0},l.createElement(r.G,null)))))},Ae=l.memo((function(){const e=(0,l.useContext)(m.H).getCapabilities(),t=(0,D.x)();return t?l.createElement(A.$,{uri:t.uri,defaultSortOption:E.oT.ADDED_AT},l.createElement(c.hz,{uri:t.uri},l.createElement(ce,{metadata:t,canSort:e.canSort&&t.totalLength>0}))):l.createElement(o.h,{hasError:!1,errorMessage:n.ag.get("error.not_found.title.page"),loadOffline:e.canModifyOffline})}))}}]);
//# sourceMappingURL=xpui-routes-collection-episodes.js.map