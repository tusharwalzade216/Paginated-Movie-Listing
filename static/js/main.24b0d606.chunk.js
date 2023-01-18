(this["webpackJsonppaginated-movie-listing"]=this["webpackJsonppaginated-movie-listing"]||[]).push([[0],{48:function(e,t,r){e.exports={cardTitle:"card_cardTitle__3GZsD",image:"card_image__1ghFu"}},57:function(e,t,r){e.exports={container:"cardList_container__2apDn"}},67:function(e,t,r){},76:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),s=r(49),c=(r(67),r(46)),i=r(22),o=r(3),l=r(50),j=r(5),u=r(83),d=(r(68),r(84)),b="682066cf",O="https://www.omdbapi.com",h=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return d.a.get("".concat(O,"/?apikey=").concat(b,"&s=").concat(e,"&page=").concat(t))},x=r(53),m=x.a,v=r(35).a,f=r(54).a,g=r(85),p=r(48),w=r.n(p),y=r(58),E=r(1),k=function(e){var t=e.text;return Object(E.jsx)(y.a,{placement:"bottom",delay:{show:250,hide:400},overlay:Object(E.jsx)(f,{id:t,children:t}),children:Object(E.jsx)(x.a,{children:t})})},P=function(e){var t=e.footer,r=e.header,a=e.imageUrl;return Object(E.jsxs)(g.a,{bg:"light",className:"shadow",children:[Object(E.jsx)(g.a.Header,{bsPrefix:"card-header bg-white",className:w.a.cardTitle,children:Object(E.jsx)(k,{text:r})}),Object(E.jsx)(g.a.Img,{alt:r,className:w.a.image,loading:"lazy",src:a,variant:"top"}),Object(E.jsx)(g.a.Footer,{bsPrefix:"card-footer bg-white d-flex justify-content-between",children:t})]})},S=r(87),_=function(e){var t=e.isOpen,r=e.message,n=e.title,s=e.variant,c=Object(a.useState)(t),i=Object(j.a)(c,2),o=i[0],l=i[1];return Object(a.useLayoutEffect)((function(){setTimeout((function(){l(!1)}),3e3)}),[]),Object(E.jsxs)(S.a,{dismissible:!0,show:o,onClose:function(){return l(!1)},variant:s,children:[Object(E.jsx)(S.a.Heading,{children:n}),Object(E.jsx)("p",{children:r})]})};_.defaultProps={isOpen:!1,title:"Error",variant:"danger"};var N=_,C=r(86),F=function(){return Object(E.jsx)(P,{footer:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(C.a.Button,{variant:"outline-primary",xs:5,children:Object(E.jsx)(C.a,{as:P.Text,animation:"glow",children:Object(E.jsx)(C.a,{xs:8})})}),Object(E.jsx)(C.a.Button,{variant:"outline-success",xs:5,children:Object(E.jsx)(C.a,{as:P.Text,animation:"glow",children:Object(E.jsx)(C.a,{xs:8})})})]}),header:Object(E.jsx)(C.a,{as:P.Title,animation:"glow",children:Object(E.jsx)(C.a,{xs:6})}),imageUrl:"movie_placeholder.webp"})},L=r(17),T=r(88),M=function(e){var t,r=e.noOfPages,a=e.currentPage,n=e.setCurrentPage;return Object(E.jsxs)(T.a,{className:"my-4 flex-wrap",children:[Object(E.jsx)(T.a.First,{disabled:1===a,onClick:function(){return n(a-1)}}),null===(t=Object(L.a)(Array(r+1).keys()).slice(1))||void 0===t?void 0:t.map((function(e,t){return Object(E.jsx)(T.a.Item,{active:a===e,onClick:function(){return n(e)},children:e},t)})),Object(E.jsx)(T.a.Last,{disabled:a===r,onClick:function(){return n(a+1)}})]})},D=r(82),I=r(56),z=r(57),A=r.n(z),B=function(e){var t,r=e.isLoading,a=e.list,n=e.title;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m,{as:"h2",className:"mt-2",children:n}),Object(E.jsx)(D.a,{className:"g-4 mx-0 my-2 ".concat(A.a.container),lg:5,md:3,sm:2,xl:5,xs:1,xxl:5,children:r?null===(t=Object(L.a)(Array(11).keys()).slice(1))||void 0===t?void 0:t.map((function(e,t){return Object(E.jsx)(I.a,{children:Object(E.jsx)(F,{})},t)})):null===a||void 0===a?void 0:a.map((function(e){return Object(E.jsx)(I.a,{children:Object(E.jsx)(P,{header:null===e||void 0===e?void 0:e.Title,imageUrl:null===e||void 0===e?void 0:e.Poster,footer:Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(v,{size:"sm",variant:"outline-primary",children:"LIKE"}),Object(E.jsx)(v,{size:"sm",variant:"outline-success",children:"OWN"})]})})},null===e||void 0===e?void 0:e.imdbID)}))})]})};B.defaultProps={isLoading:!1,title:"Sample Movie List"};var R=B,U=r(11),H=r(12),J=r(42),K=r(41),G=function(e){Object(J.a)(r,e);var t=Object(K.a)(r);function r(e){var a;return Object(U.a)(this,r),(a=t.call(this,e)).state={hasError:!1,errorMessage:""},a}return Object(H.a)(r,[{key:"componentDidCatch",value:function(e,t){console.error(e,t)}},{key:"render",value:function(){return this.state.hasError?Object(E.jsx)(N,{isOpen:this.state.hasError,message:this.state.errorMessage,title:"Something went wrong"}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0,errorMessage:e}}}]),r}(n.a.Component),W=function(){var e,t=Object(a.useState)(0),r=Object(j.a)(t,2),n=r[0],s=r[1],d=Object(a.useState)({}),b=Object(j.a)(d,2),O=b[0],x=b[1],m=Object(a.useState)({hasError:!1,message:""}),v=Object(j.a)(m,2),f=v[0],g=v[1],p=Object(a.useState)(1),w=Object(j.a)(p,2),y=w[0],k=w[1],P=Object(a.useState)(!1),S=Object(j.a)(P,2),_=S[0],C=S[1],F=function(){var e=Object(l.a)(Object(c.a)().mark((function e(){var t,r,a,l=arguments;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=l.length>0&&void 0!==l[0]?l[0]:1,!O[t]){e.next=3;break}return e.abrupt("return");case 3:return C(!0),e.prev=4,e.next=7,h("Kung fu Panda",t);case 7:r=e.sent,"False"===(null===(a=r.data)||void 0===a?void 0:a.Response)?g({hasError:!0,message:null===a||void 0===a?void 0:a.Error}):(0===n&&s(Math.ceil((null===a||void 0===a?void 0:a.totalResults)/10)),x((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(i.a)({},y,null===a||void 0===a?void 0:a.Search))})),g({hasError:!1,message:""})),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(4),console.error(e.t0),g({hasError:!0,message:e.t0});case 16:return e.prev=16,C(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[4,12,16,19]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){F(y)}),[y]),Object(E.jsxs)(u.a,{className:"d-flex flex-column align-items-center",children:[f.hasError&&Object(E.jsx)(N,{isOpen:f.hasError,message:f.message}),Object(E.jsx)(R,{list:null!==(e=O[y])&&void 0!==e?e:[],isLoading:_}),n>1&&Object(E.jsx)(M,{currentPage:y,setCurrentPage:k,noOfPages:n})]})};function Z(){return Object(E.jsx)("div",{className:"App",children:Object(E.jsx)(G,{children:Object(E.jsx)(W,{})})})}var q=document.getElementById("root");Object(s.createRoot)(q).render(Object(E.jsx)(a.StrictMode,{children:Object(E.jsx)(Z,{})}))}},[[76,1,2]]]);
//# sourceMappingURL=main.24b0d606.chunk.js.map