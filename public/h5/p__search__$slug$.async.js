(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[20],{UhD9:function(e,t,a){"use strict";a.r(t);a("IzEo");var s=a("bx4M"),i=a("p0pE"),r=a.n(i),n=(a("5NDa"),a("5rEg")),o=(a("Znn+"),a("ZTPi")),c=a("mrSG"),m=a("q1tI"),l=a.n(m),p=a("MuoO"),h=a("vOnD"),u=a("LLXN"),y=a("mNhR"),d=a("mOtZ"),g=a("WqWh"),E=a("faBS"),b=a("/88p"),v=a("gmfD"),Q=a("usdK"),f=a.n(Q),q=o["a"].TabPane,C=n["a"].Search,D=h["a"].div`
  padding: 60px 15px 0 15px;

  .search {
    width: 100%;
    margin: 40px auto;
  }
`,O=class extends m["Component"]{constructor(e){super(e),this.initData=(()=>{var e=this.state.slug,t=this.props.dispatch;e&&(t({type:"post/queryList",payload:{query:{title:e},addon:{type:"search"}}}),t({type:"animate/queryList",payload:{query:{title:e},addon:{type:"search"}}}),t({type:"comic/queryList",payload:{query:{title:e},addon:{type:"search"}}}))}),this.searchChange=((e,t)=>{var a=this.props.dispatch,s=Object(E["b"])({query:e}),i=this.state.slug;a({type:`${t}/queryList`,payload:{query:r()({},s,{title:i}),addon:{type:"search"}}})}),this.listQuery={animate:e=>{var t=this.state.animateQuery,a=r()({},t,e);this.setState({animateQuery:a}),this.searchChange(a,"animate")},comic:e=>{var t=this.state.comicQuery,a=r()({},t,e);this.setState({comicQuery:a}),this.searchChange(a,"comic")},post:e=>{var t=this.state.postQuery,a=r()({},t,e);this.setState({query:a}),this.searchChange(a,"post")}},this.searchSubmit=(e=>{f.a.replace({pathname:`/search/${e}`})}),this.state={slug:e.match.params.slug,animateQuery:{key:"time",sort:!1,list:!1,size:20,page:1},comicQuery:{key:"time",sort:!1,list:!1,size:20,page:1},postQuery:{key:"time",sort:!1,list:!1,size:20,page:1}}}static getDerivedStateFromProps(e,t){return e.match.params.slug!==t.slug?{slug:e.match.params.slug}:null}componentDidMount(){this.initData()}componentDidUpdate(e,t){t.slug!==this.state.slug&&this.initData()}render(){var e=this.props,t=e.post,a=e.post.search,i=e.comic,n=e.comic.search,c=e.animate,m=e.animate.search,p=e.loadingPost,h=e.loadingComic,E=e.loadingAnimate,Q=this.state,f=Q.animateQuery,O=Q.comicQuery,S=Q.postQuery,x={animate:c.total.search||0,comic:i.total.search||0,post:t.total.search||0};return l.a.createElement(D,null,l.a.createElement(s["a"],{bordered:!1},l.a.createElement("div",{className:"search"},l.a.createElement(C,{placeholder:Object(u["formatMessage"])({id:"common.input.tips"}),size:"large",onSearch:this.searchSubmit,enterButton:l.a.createElement(l.a.Fragment,null,l.a.createElement(y["a"],{type:"icon-sousuo"}),l.a.createElement("span",null,Object(u["formatMessage"])({id:"common.search"})))})),l.a.createElement(o["a"],{defaultActiveKey:"1",onChange:()=>{}},l.a.createElement(q,{tab:Object(u["formatMessage"])({id:"common.animate"}),key:"1"},l.a.createElement(s["a"],{bordered:!1,style:{marginBottom:"20px"},loading:E},l.a.createElement(d["a"],{value:f,onChange:this.listQuery.animate}),f.list?l.a.createElement(b["b"],{type:"animate",list:m}):l.a.createElement(b["a"],{type:"animate",list:m}),l.a.createElement(g["a"],{value:r()({},f,{total:x.animate}),onChange:this.listQuery.animate}))),l.a.createElement(q,{tab:Object(u["formatMessage"])({id:"common.comic"}),key:"2"},l.a.createElement(s["a"],{bordered:!1,style:{marginBottom:"20px"},loading:h},l.a.createElement(d["a"],{value:O,onChange:this.listQuery.comic}),O.list?l.a.createElement(b["b"],{type:"comic",list:n}):l.a.createElement(b["a"],{type:"comic",list:n}),l.a.createElement(g["a"],{value:r()({},O,{total:x.comic}),onChange:this.listQuery.comic}))),l.a.createElement(q,{tab:Object(u["formatMessage"])({id:"common.post"}),key:"3"},l.a.createElement(s["a"],{bordered:!1,style:{marginBottom:"20px"},loading:p},l.a.createElement(v["b"],{list:a}),l.a.createElement(g["a"],{value:r()({},S,{total:x.post}),onChange:this.listQuery.post}))))))}};O=c["a"]([Object(p["connect"])(e=>{var t=e.animate,a=e.comic,s=e.post,i=e.loading;return{post:s,animate:t,comic:a,loadingPost:i.effects["post/queryList"],loadingAnimate:i.effects["animate/queryList"],loadingComic:i.effects["comic/queryList"]}})],O),t["default"]=O}}]);