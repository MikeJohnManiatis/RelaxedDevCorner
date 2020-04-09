(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{15:function(e,t,a){},29:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(12),c=a.n(o),l=a(5),i=a(6),s=a(8),u=a(7),m=a(9),h=(a(15),a(13)),d=a(3),p=a(43),g=a(23),b=a(11),f=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={isOpen:!1},a.toggle=a.toggle.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"CheckAuthentication",value:function(){return"True"==(new b.a).get("IsAuthenticated")}},{key:"IsAdmin",value:function(){return"True"==(new b.a).get("IsAdmin")}},{key:"GetSignInButton",value:function(){if(!this.CheckAuthentication())return r.a.createElement(g.GoogleLogin,{clientId:"170017586676-2p1e2cpf0jgt8b1946crn20ipduli4g5.apps.googleusercontent.com",buttonText:"Login",onSuccess:function(e){return fetch("https://prd-app-relaxeddevcorner.azurewebsites.net/api/Account/Authenticate?idTokenString="+e.tokenId,{method:"GET",headers:{}}).then((function(e){return e.json()})).then((function(e){null!=e&&null!=e.email&&((new b.a).set("IsAuthenticated","True"),e.isAdmin&&(new b.a).set("IsAdmin","True")),window.location.reload(!0)})).catch((function(e){return console.log(e)}))},onFailure:function(e){(new b.a).set("IsAuthenticated","False")},cookiePolicy:"single_host_origin"})}},{key:"ShowCreatePost",value:function(){if(this.CheckAuthentication()&&this.IsAdmin())return r.a.createElement(d.e,{href:"/CreatePost"},"Create Blog Post")}},{key:"render",value:function(){return r.a.createElement(d.f,{color:"dark",dark:!0,expand:"md",id:"MainNavBar"},r.a.createElement(d.g,{tag:p.a,to:"/"},"Home"),r.a.createElement(d.h,{onClick:this.toggle}),r.a.createElement(d.a,{isOpen:this.state.isOpen,navbar:!0},r.a.createElement(d.c,{className:"ml-auto",navbar:!0},r.a.createElement(d.d,null,this.ShowCreatePost()),r.a.createElement(d.d,null,r.a.createElement(d.e,{href:"https://twitter.com/michaelmaniatis"},"@mikedev")),r.a.createElement(d.d,null,r.a.createElement(d.e,{href:"https://github.com/mikejohnmaniatis"},"GitHub")),r.a.createElement(d.d,null,this.GetSignInButton()))))}}]),t}(n.Component),v=a(25),E=a.n(v),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handlePageClick=function(e){var t=e.selected,n=t*a.state.perPage;a.setState({currentPage:t,offset:n},(function(){a.receivedData()}))},a.state={posts:[],isLoading:!0,offset:0,perPage:3,currentPage:0,pageCount:null},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"receivedData",value:function(){var e=this;fetch("https://prd-app-relaxeddevcorner.azurewebsites.net/api/GetPosts",{method:"get",headers:{}}).then((function(e){return e.json()})).then((function(t){console.log(t.length);var a=t.slice(e.state.offset,e.state.offset+e.state.perPage).map((function(e,t){return r.a.createElement("div",{key:t,className:"container"},r.a.createElement("a",{className:"PostCard",href:"/ViewPost/"+e.category+"/"+e.slug+"/"},r.a.createElement("div",{className:"PostCenter"},r.a.createElement("h3",{className:"PostCardText",id:"Title"},e.title),r.a.createElement("span",{className:"CardFooter"},"Written by: ",e.author," | ",e.cdDate," "))),r.a.createElement("br",null))}));e.setState({pageCount:Math.ceil(t.length/e.state.perPage),postData:a,isLoading:!1})}))}},{key:"componentDidMount",value:function(){this.setState({isLoading:!0}),this.receivedData()}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement("p",null,"Loading..."):r.a.createElement("div",null,r.a.createElement(d.b,{fluid:!0},r.a.createElement("div",{className:"PostContainer"},this.state.postData,r.a.createElement(E.a,{previousLabel:"prev",nextLabel:"next",breakLabel:"...",breakClassName:"break-me",pageCount:this.state.pageCount,marginPagesDisplayed:2,pageRangeDisplayed:5,onPageChange:this.handlePageClick,containerClassName:"pagination",subContainerClassName:"pages pagination",activeClassName:"active"}))))}}]),t}(n.Component),y=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(d.b,{fluid:!0},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Welcome to the, $TheDevCorner.")),r.a.createElement(C,null)))}}]),t}(n.Component),j=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={post:[]},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;if(this.props.match.params){var t=this.props.match.params.slug,a=this.props.match.params.category;fetch("https://prd-app-relaxeddevcorner.azurewebsites.net/api//GetPost?category="+a+"&slug="+t,{method:"GET",cache:"no-cache",headers:{"Content-Type":"application/json"},redirect:"follow",referrerPolicy:"no-referrer"}).then((function(e){return e.json()})).then((function(t){return e.setState({post:t})}))}}},{key:"render",value:function(){var e=this.state.post;return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement(d.b,{fluid:!0},r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,"Written by: ",e.author)),r.a.createElement("div",{className:"article"},r.a.createElement("div",{className:"PostBody"},e.body))))}}]),t}(n.Component),k=a(26),O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={Category:"",Title:"",Slug:"",Body:""},a.handleChange=a.handleChange.bind(Object(h.a)(a)),a.createPost=a.createPost.bind(Object(h.a)(a)),a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(k.a)({},n,a))}},{key:"createPost",value:function(e){var t=this.state.Category,a=this.state.Title,n=this.state.Slug,r=this.state.Body,o=new Date,c=JSON.stringify({category:t,title:a,slug:n,body:r,author:"Michael J. Maniatis",cdDate:o});fetch("https://prd-app-relaxeddevcorner.azurewebsites.net/api/CreatePost",{method:"post",body:c,headers:{"Content-Type":"application/json"}}).then((function(e){return e})).then((function(e){return window.location.reload(!0)})).catch((function(e){return alert(e)}))}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h1",null,"Thanks for contributing!")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"CreatePostForm"},r.a.createElement("label",{className:"CreateFormLabel"},"Category:"),r.a.createElement("input",{className:"CreateFormInput",name:"Category",type:"text",value:this.state.Category,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"CreateFormLabel"},"Title:"),r.a.createElement("input",{className:"CreateFormInput",name:"Title",type:"text",value:this.state.Title,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"CreateFormLabel"},"Slug:"),r.a.createElement("input",{className:"CreateFormInput",name:"Slug",type:"text",value:this.state.Slug,onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"CreateFormLabel"},"Body:"),r.a.createElement("textarea",{className:"CreateFormInput",id:"CreateFormBody",name:"Body",type:"textarea",value:this.state.Body,onChange:this.handleChange}),r.a.createElement("button",{onClick:this.createPost},"Submit"))))}}]),t}(n.Component),P=a(45),w=a(44),N=a(46),T=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(u.a)(t).call(this))).state={},e}return Object(m.a)(t,e),Object(i.a)(t,[{key:"returnAdminRoutes",value:function(){var e=new b.a;if("True"==e.get("IsAdmin")&&"True"==e.get("IsAuthenticated"))return r.a.createElement(P.a,{path:"/CreatePost",exact:!0,component:O})}},{key:"render",value:function(){return r.a.createElement(w.a,null,r.a.createElement(N.a,null,r.a.createElement(P.a,{path:"/",exact:!0,component:y}),r.a.createElement(P.a,{path:"/ViewPost/:category/:slug",exact:!0,component:j}),this.returnAdminRoutes()))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(40);c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[29,1,2]]]);
//# sourceMappingURL=main.16faf5b4.chunk.js.map