(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},102:function(e,t,a){},103:function(e,t,a){},104:function(e,t,a){},105:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),s=a(25),o=a.n(s),u=(a(55),a(6)),i=a(7),l=a(9),p=a(8),m=a(10),h=(a(56),a(23)),f=(a(57),a(58),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.url,a=(e.likes,e.link,e.description),n=e.classNames,r=e.height,s=e.id,o={height:"".concat(r,"px")};return c.a.createElement("article",{className:n},c.a.createElement("a",{className:"title",href:"#/image/".concat(s),style:o},a),c.a.createElement("div",{className:"image"},c.a.createElement("img",{src:t,alt:""})))}}]),t}(c.a.Component)),d=a(1),b=a.n(d),v=a(4),g=a(3),E=a(20),O=a.n(E),y={baseURL:"https://api.unsplash.com",baseURLId:"https://source.unsplash.com/",baseURLId2:" http://unplash.com/",clientId:"995142b5e2f546f4eac828d832606dfba0beaef27d62d77a1ff8cce9ba2bacac",secretKey:"2ba48f233f891ebb88bc9ac2b9387c2162785b57dc9ffc741bb2d518ca59c948",oAuthToken:"https://unsplash.com/oauth/token",oAuth:"https://unsplash.com/oauth/authorize",localAuth:"http://localhost:3000/auth",redirectUri:"",oAuthAll:"https://unsplash.com/oauth/authorize?client_id=995142b5e2f546f4eac828d832606dfba0beaef27d62d77a1ff8cce9ba2bacac&redirect_uri=http://localhost:3000/auth&response_type=code&scope=public",proxy:"https://crossorigin.me/"},j=a(42),I=a.n(j),k=O.a.create({baseURL:y.baseURL,headers:{Authorization:"Client-ID ".concat(y.clientId)}}),_=(O.a.create({baseURL:y.baseURLId2,headers:{Authorization:"Client-ID ".concat(y.clientId)}}),function(){var e=Object(g.a)(b.a.mark(function e(t,a){var n,r,c,s,o,u;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n={params:{query:t,page:a}},e.next=3,k.get("/search/photos",n);case 3:return r=e.sent,c=r.data,s=c.total,o=c.total_pages,u=c.results,e.abrupt("return",{total:s,totalPages:o,items:u});case 6:case"end":return e.stop()}},e)}));return function(t,a){return e.apply(this,arguments)}}()),C=new I.a({applicationId:"".concat(y.clientId),secret:"".concat(y.secretKey)}),N=function(){var e=Object(g.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.photos.getPhoto(t,1920,1080,[0,0,1920,1080]);case 2:return a=e.sent,n=a.json(),e.abrupt("return",n);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(g.a)(b.a.mark(function e(t){var a,n,r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a={params:{client_id:y.clientId,client_secret:y.secretKey,redirect_uri:y.localAuth,code:t,grant_type:"authorization_code"}},n=O.a.create(a),e.next=4,n.post(y.oAuthToken);case 4:return r=e.sent,e.abrupt("return",r.data);case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}();!function(e){e.FETCH="@unsplash/fetch",e.FILTER="@unsplash/filter",e.SUBMIT="@unsplash/submit",e.IMAGE="@image/fetsh"}(n||(n={}));var x,P=a(15),S=a(44),T=(a(99),a(19)),A=a.n(T),L=function(e){var t=e.children,a=e.classNames,n=Object(S.a)(e,["children","classNames"]),r=A()("btn",a);return c.a.createElement("button",Object.assign({className:r},n),c.a.createElement("span",null,t))},U=a(27),F=(a(100),function(e){var t=e.name,a=e.label,n=e.type;return r.createElement("div",{className:"input__native-group"},r.createElement("input",{name:t,type:n,className:"input__native-input",autoComplete:"off",onFocus:function(e){return e.currentTarget.value=""}}),r.createElement("label",{className:"input__native-label"},a),r.createElement("span",{className:"input__native-highlight"},"\xa0"),r.createElement("span",{className:"input__native-bar"},"\xa0"))}),R=(a(101),a(45)),M=a.n(R),D=a(46),B=a.n(D),K=a(47),z=a.n(K),G=(a(102),function(e){var t=e.name,a=e.label,n=e.type,c=e.id,s=e.defaultChecked,o=A()("input__native-group","input__native-radio","input__native-radio-inline");return r.createElement("div",{className:o},r.createElement("input",{id:c,type:n,name:t,defaultChecked:s}),r.createElement("label",{htmlFor:c},a))});!function(e){e.ASC="asc",e.DESC="desc"}(x||(x={}));var H,J=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={searchInput:"",filterInput:"",sortingParam:""},a.onFormChange=function(e){var t=a.props.onChange,n=e.target,r="sortingParam"===n.name?n.id:n.value;a.setState(function(e){return Object(v.a)({},e,Object(U.a)({},n.name,r))},function(){t(a.state.filterInput,a.state.sortingParam)})},a.onSubmit=function(e){e.preventDefault();var t=a.state.searchInput;a.props.searchInput!==t&&a.props.onSubmit(t,1)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.searchInput,a=e.sortingParam;t||this.props.onSubmit("cars",1),this.setState({sortingParam:a})}},{key:"render",value:function(){var e=A()("search-form","native-form");return r.createElement("form",{onSubmit:this.onSubmit,className:e,onChange:this.onFormChange},r.createElement("div",{className:"search"},r.createElement(F,{name:"searchInput",type:"text",label:"Search"}),r.createElement(L,{type:W.SUBMIT,classNames:"btn-search"}," ",r.createElement("img",{src:M.a,alt:"Search",className:"icon-search"}))),r.createElement(F,{name:"filterInput",type:"text",label:"Filter"}),r.createElement("div",{className:"search"},r.createElement(G,{id:"asc",name:"sortingParam",defaultChecked:this.props.sortingParam===x.ASC,type:"radio",label:r.createElement("img",{src:B.a})}),r.createElement(G,{id:"desc",name:"sortingParam",defaultChecked:this.props.sortingParam===x.DESC,type:"radio",label:r.createElement("img",{src:z.a})})))}}]),t}(r.Component),X=Object(P.b)(function(e){return{searchInput:e.unsplash.searchInput,sortingParam:e.unsplash.sortingParam}},function(e){return{onSubmit:function(t,a){var r;e((r={searchInput:t,currentPage:a},function(){var e=Object(g.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r.searchInput,r.currentPage);case 2:a=e.sent,t({type:n.SUBMIT,payload:Object(v.a)({},a,{searchInput:r.searchInput,currentPage:r.currentPage})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))},onChange:function(t,a){var r;e((r={filterInput:t,sortingParam:a},function(e){e({type:n.FILTER,payload:r})}))}}})(J),q=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).loadImages=function(){var e=a.props.currentPage+1;a.props.onItemsAdded(a.props.searchInput,e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleFilter",value:function(){var e=this.props,t=e.items,a=e.filterInput;return Object(h.a)(t).filter(function(e){return e.alt_description.toLowerCase().includes(a.toLowerCase())})}},{key:"handleSort",value:function(){var e=this.props,t=e.items,a=e.sortingParam,n=function(e,t){return e.alt_description>t.alt_description?1:-1},r={asc:function(e,t){return n(e,t)},desc:function(e,t){return n(t,e)}};return t.sort(function(e,t){return r[a](e,t)})}},{key:"render",value:function(){var e=this.props,t=e.items,a=e.total,n=t&&t.length>0&&a>t.length;return this.handleSort(),c.a.createElement(c.a.Fragment,null,c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement("div",{className:"nav__container"},c.a.createElement(X,{className:"nav__search-form"})),c.a.createElement("div",{className:"grid"},this.handleFilter().map(function(e){var t=e.alt_description,a=e.urls,n=e.likes,r=e.id;return c.a.createElement(f,{classNames:"grid__item",key:r,id:r,url:a.small,description:t,likes:n})}))),n?c.a.createElement(L,{className:"native-button",type:W.BUTTON,onClick:this.loadImages},"Show more ",a?"(".concat(t.length," of ").concat(a,")"):""):null)}}]),t}(c.a.PureComponent),V=Object(P.b)(function(e){return{items:e.unsplash.items,total:e.unsplash.total,currentPage:e.unsplash.currentPage,searchInput:e.unsplash.searchInput,filterInput:e.unsplash.filterInput,sortingParam:e.unsplash.sortingParam}},function(e){return{onItemsAdded:function(t,a){var r;e((r={searchInput:t,currentPage:a},function(){var e=Object(g.a)(b.a.mark(function e(t){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(r.searchInput,r.currentPage);case 2:a=e.sent,t({type:n.FETCH,payload:Object(v.a)({},a,{searchInput:r.searchInput,currentPage:r.currentPage})});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))}}})(q),Y=(a(103),function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.onLoad(this.props.match.params.id)}},{key:"render",value:function(){if(this.props.imageItem){var e=this.props.imageItem,t=e.alt_description,a=e.user,n=e.urls;return c.a.createElement(r.Suspense,{fallback:c.a.createElement("div",null,"Loading...")},c.a.createElement("article",null,c.a.createElement("div",{className:"info"},c.a.createElement("h4",null,t),c.a.createElement("i",null,a?a.name:null),c.a.createElement("img",{src:n?n.regular:"",alt:""}))))}return null}}]),t}(c.a.Component)),Q=Object(P.b)(function(e){return{imageItem:e.unsplash.item}},function(e){return{onLoad:function(t){var a;e((a={imageId:t},function(){var e=Object(g.a)(b.a.mark(function e(t){var r;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(a.imageId);case 2:r=e.sent,t({type:n.IMAGE,payload:Object(v.a)({},r)});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()))}}})(Y);!function(e){e.TOKEN="@auth/token"}(H||(H={}));a(104);var W,Z=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=Object(g.a)(b.a.mark(function e(){return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="".concat(y.oAuthAll);case 1:case"end":return e.stop()}},e)})),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.location.search,t=new URLSearchParams(e).get("code");t&&this.props.setToken(t)}},{key:"render",value:function(){var e=this.props,t=e.isAuthenticated,a=e.token;return c.a.createElement(c.a.Fragment,null,t?c.a.createElement("div",null,c.a.createElement("h2",{className:"textCenter"},"You are logged"),c.a.createElement("h3",null,"Token: ",a)):c.a.createElement(L,{className:"native-button",type:W.BUTTON,onClick:this.handleClick},"LogIn"))}}]),t}(c.a.Component),$=Object(P.b)(function(e){return{isAuthenticated:e.auth.isAuthenticated,token:e.auth.token}},function(e){return{setToken:function(t){return e(function(e){return function(){var t=Object(g.a)(b.a.mark(function t(a){var n;return b.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w(e);case 2:n=t.sent,a((r=n,{type:H.TOKEN,payload:r}));case 4:case"end":return t.stop()}var r},t)}));return function(e){return t.apply(this,arguments)}}()}(t))}}})(Z),ee=(a(105),function(e){var t=e.children;return c.a.createElement("nav",{className:"nav"},c.a.createElement("ul",{className:"nav-menu"},c.a.Children.map(t,function(e){return c.a.createElement("li",{key:e.props.children},c.a.cloneElement(e))})))}),te=a(11),ae=a(28);!function(e){e.SUBMIT="submit",e.BUTTON="button"}(W||(W={}));var ne=function(){return c.a.createElement("div",{className:"notfound"},c.a.createElement("h2",null,"Not Found"))},re=[{title:"home",path:"/",exact:!0,Component:V},{title:"about",exact:!1,path:"/about",Component:function(){return c.a.createElement("h1",null,"Some text")}},{title:"auth",exact:!1,path:"/auth",Component:$},{path:"/image/:id",exact:!1,Component:Q},{title:"Contacts",exact:!1,path:"/contacts",Component:function(){return c.a.createElement("h1",null,"Contacts component")}}],ce=function(e){function t(){return Object(u.a)(this,t),Object(l.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"app-wrapper"},c.a.createElement(ee,null,re.map(function(e,t){return c.a.createElement(ae.b,{exact:!0,key:t,to:e.path},e.title)})),c.a.createElement(te.c,null,re.map(function(e){var t=e.path,a=e.exact,n=e.Component;e.title;return c.a.createElement(te.a,{key:t,path:t,exact:a,render:function(e){return c.a.createElement(n,e)}})}),c.a.createElement(te.a,{component:ne})))}}]),t}(r.Component),se=a(17),oe={items:[],total:0,totalPages:0,currentPage:0,searchInput:"",filterInput:"",sortingParam:x.ASC},ue={isAuthenticated:!1,token:""},ie=Object(se.c)({unsplash:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case n.SUBMIT:return Object(v.a)({},e,t.payload);case n.FETCH:var a=[].concat(Object(h.a)(e.items),Object(h.a)(t.payload.items));return Object(v.a)({},e,t.payload,{items:a});case n.FILTER:return Object(v.a)({},e,t.payload);case n.IMAGE:return Object(v.a)({},e,{item:t.payload});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H.TOKEN:var a=t.payload.access_token;return Object(v.a)({},e,{token:a,isAuthenticated:!0});default:return e}}}),le=a(49),pe=window.__REDUX_DEVTOOLS_EXTENSION__,me=Object(se.e)(ie,Object(se.d)(Object(se.a)(le.a),pe()));o.a.render(c.a.createElement(P.a,{store:me},c.a.createElement(ae.a,null,c.a.createElement(ce,null))),document.getElementById("root"))},45:function(e,t,a){e.exports=a.p+"static/media/search-img.0e5b33d6.png"},46:function(e,t,a){e.exports=a.p+"static/media/sort-amount-asc.dc84847d.svg"},47:function(e,t,a){e.exports=a.p+"static/media/sort-amount-desc.66ea0c11.svg"},50:function(e,t,a){e.exports=a(111)},55:function(e,t,a){},56:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},99:function(e,t,a){}},[[50,1,2]]]);
//# sourceMappingURL=main.f5054dcb.chunk.js.map