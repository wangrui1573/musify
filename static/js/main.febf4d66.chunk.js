(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{19:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),r=c.n(a),s=c(12),i=c.n(s),o=c(4),d=c.n(o),u=c(6),l=c(3),j=c(8),b=(c(19),c(7)),m=c(5),p=function(e){var t=e.isPlaying,c=e.setIsPlaying,a=e.audioRef,r=e.setSongInfo,s=e.songInfo,i=e.currentSong,o=e.songs,j=e.setSongs,p=e.setCurrentSong,g=function(e){var t=o.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));j(t)},h=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v=function(){var e=Object(u.a)(d.a.mark((function e(c){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=o.findIndex((function(e){return e.id===i.id})),"skip-forward"!==c){e.next=7;break}return e.next=4,p(o[(n+1)%o.length]);case 4:g(o[(n+1)%o.length]),e.next=17;break;case 7:if("skip-back"!==c){e.next=17;break}if((n-1)%o.length!==-1){e.next=14;break}return e.next=11,p(o[o.length-1]);case 11:return g(o[o.length-1]),t&&a.current.play(),e.abrupt("return");case 14:return e.next=16,p(o[(n-1)%o.length]);case 16:g(o[(n-1)%o.length]);case 17:t&&a.current.play();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(s.animationPercentage,"%)")};return Object(n.jsxs)("div",{className:"player",children:[Object(n.jsxs)("div",{className:"time-control",children:[Object(n.jsx)("p",{children:h(s.currentTime)}),Object(n.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(i.color[0],", ").concat(i.color[1],")")},className:"track",children:[Object(n.jsx)("input",{min:0,max:s.duration||0,value:s.currentTime,onChange:function(e){a.current.currentTime=e.target.value,r(Object(l.a)(Object(l.a)({},s),{},{currentTime:e.target.value}))},type:"range"}),Object(n.jsx)("div",{style:O,className:"animate-track"})]}),Object(n.jsx)("p",{children:s.duration?h(s.duration):"0:00"})]}),Object(n.jsxs)("div",{className:"play-control",children:[Object(n.jsx)(b.a,{onClick:function(){return v("skip-back")},className:"skip-back",icon:m.d,size:"2x"}),Object(n.jsx)(b.a,{onClick:function(){t?a.current.pause():a.current.play(),c(!t)},className:"play",icon:t?m.b:m.c,size:"3x"}),Object(n.jsx)(b.a,{onClick:function(){return v("skip-forward")},className:"skip-forward",icon:m.e,size:"2x"})]})]})},g=function(e){var t=e.currentSong,c=e.isPlaying;return Object(n.jsxs)("div",{className:"song-container",children:[Object(n.jsx)("img",{className:c?"song-playing":"",src:t.cover,alt:t.name}),Object(n.jsx)("h2",{children:t.name}),Object(n.jsx)("h3",{children:t.artist})]})},h=function(e){var t=e.songs,c=e.setSongs,a=e.song,r=e.setCurrentSong,s=e.audioRef,i=e.isPlaying,o=e.id,j=function(){var e=Object(u.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(a);case 2:return n=t.map((function(e){return e.id===o?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),e.next=5,c(n);case 5:i&&s.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsx)("div",{onClick:j,className:"library-song ".concat(a.active?"selected":""),children:Object(n.jsxs)("div",{className:"song-description",children:[Object(n.jsx)("h6",{children:a.name}),Object(n.jsx)("h4",{children:a.artist})]})})},v=function(e){var t=e.songs,c=e.setSongs,a=e.setCurrentSong,r=e.audioRef,s=e.isPlaying,i=e.libraryStatus;return Object(n.jsxs)("div",{className:"library ".concat(i?"active-library":""),children:[Object(n.jsx)("h2",{children:"\u66f2\u5e93"}),Object(n.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(n.jsx)(h,{songs:t,setSongs:c,song:e,setCurrentSong:a,audioRef:r,id:e.id,isPlaying:s},e.id)}))})]})},O=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(n.jsxs)("nav",{children:[Object(n.jsx)("h1",{children:"Real\u7684\u97f3\u4e50\u7a7a\u95f4"}),Object(n.jsxs)("button",{onClick:function(){return c(!t)},children:[Object(n.jsx)(b.a,{icon:m.a})," Library"]})]})},f=c(27),x=c.p+"static/media/Skechers.58c9d5a9.mp3",y=c.p+"static/media/\u7231\u4e2b\u7231\u4e2b.cc081276.flac",S=c.p+"static/media/Mojito.96d7f2f6.flac",k=c.p+"static/media/\u51c9\u51c9.2eabb5a2.mp3",E=c.p+"static/media/\u7ea2\u8272\u9ad8\u8ddf\u978b.5412f8de.mp3",B=c.p+"static/media/\u65e0\u4eba\u4e4b\u5c9b.b5d633d0.mp3";var C=function(){return[{name:"\u7231\u4e2b\u7231\u4e2b",cover:"http://p2.music.126.net/DGMOvGYBjOfBKNkMBnC7ug==/19196373509643886.jpg",artist:"BY2 \u5341\u516d\u5c81\u672a\u6210\u5e74",audio:y,color:["#ADA5CE","#213045"],id:Object(f.a)(),active:!0},{name:"\u7ea2\u8272\u9ad8\u8ddf\u978b",cover:"http://p1.music.126.net/jJOaqlez9x5VofjgB7B_Bw==/109951166195459631.jpg",artist:"\u8521\u5065\u96c5",audio:E,color:["#ADA5CE","#213045"],id:Object(f.a)(),active:!0},{name:"\u51c9\u51c9",cover:"https://p1.music.126.net/iJXQigYKHNhTIsLsCddHwA==/109951167254901211.jpg?param=180y180&playlist=2361162900",artist:"BTS",audio:k,color:["#FBE2E6","#DD5B8C"],id:Object(f.a)(),active:!1},{name:"\u65e0\u4eba\u4e4b\u5c9b",cover:"./null.png",artist:"24kgoldn",audio:B,color:["#D888D3","#070922"],id:Object(f.a)(),active:!1},{name:"Mojito",cover:"https://img.alicdn.com/bao/uploaded/i1/2172427566/O1CN01kf4vBN25lHBrauwWP_!!0-item_pic.jpg",artist:"\u5468\u6770\u4f26",audio:S,color:["#F6F6EE","#888984"],id:Object(f.a)(),active:!1},{name:"Cradles",cover:"https://shdbdecdnems09.cdnsrv.jio.com/c.saavncdn.com/585/Cradles-English-2019-20191028124508-500x500.jpg",artist:"Sub Urban",audio:x,color:["#EDDD86","#4A5760"],id:Object(f.a)(),active:!1},{name:"d\u7b2c\u4e94Skechers",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"DripReport",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1}]},D=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(C()),c=Object(j.a)(t,2),r=c[0],s=c[1],i=Object(a.useState)(r[0]),o=Object(j.a)(i,2),b=o[0],m=o[1],h=Object(a.useState)(!1),f=Object(j.a)(h,2),x=f[0],y=f[1],S=Object(a.useState)({currentTime:0,duration:0,animationPercentage:0}),k=Object(j.a)(S,2),E=k[0],B=k[1],D=Object(a.useState)(!1),N=Object(j.a)(D,2),w=N[0],P=N[1],M=function(e){var t=e.target.currentTime,c=e.target.duration,n=Math.round(t),a=Math.round(c),r=Math.round(n/a*100);B(Object(l.a)(Object(l.a)({},E),{},{currentTime:t,duration:c,animationPercentage:r}))},I=function(){var t=Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.findIndex((function(e){return e.id===b.id})),t.next=3,m(r[(c+1)%r.length]);case 3:x&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(n.jsxs)("div",{className:"App ".concat(w?"library-active":""),children:[Object(n.jsx)(O,{libraryStatus:w,setLibraryStatus:P}),Object(n.jsx)(g,{currentSong:b,isPlaying:x}),Object(n.jsx)(p,{songs:r,audioRef:e,isPlaying:x,setIsPlaying:y,currentSong:b,setSongInfo:B,songInfo:E,setCurrentSong:m,setSongs:s}),Object(n.jsx)(v,{audioRef:e,songs:r,setCurrentSong:m,isPlaying:x,setSongs:s,libraryStatus:w}),Object(n.jsx)("audio",{onTimeUpdate:M,onLoadedMetadata:M,ref:e,src:b.audio,onEnded:I})]})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(D,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.febf4d66.chunk.js.map