(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{20:function(e,a,t){e.exports=t(47)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),o=t(3),c=t.n(o),m=t(14),l=t(15),u=t(18),v=t(16),d=t(19),p=t(17),g=t.n(p),y=t(2),f=t.n(y);t(45);function E(e){var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie_title"},t),r.a.createElement("h4",{className:"movie_year"},a),r.a.createElement("ul",{className:"movie_genres"},i.map((function(e,a){return r.a.createElement("li",{key:a,className:"genres_genre"},e)}))),r.a.createElement("p",{className:"movie_summary"},n.slice(0,180))))}E.prototype={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var _=E,h=(t(46),function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(t=Object(u.a)(this,(e=Object(v.a)(a)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},t.getMovies=function(){var e,a;return c.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.a.awrap(g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating"));case 2:e=n.sent,a=e.data.data.movies,console.log(a),t.setState({movies:a,isLoading:!1});case 6:case"end":return n.stop()}}))},t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader_text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(_,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),a}(r.a.Component));i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.3172d3d0.chunk.js.map