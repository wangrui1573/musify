(this["webpackJsonpmusic-player"]=this["webpackJsonpmusic-player"]||[]).push([[0],{19:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(2),r=c.n(n),i=c(12),s=c.n(i),o=c(4),d=c.n(o),u=c(6),l=c(3),j=c(8),b=(c(19),c(7)),m=c(5),g=function(e){var t=e.isPlaying,c=e.setIsPlaying,n=e.audioRef,r=e.setSongInfo,i=e.songInfo,s=e.currentSong,o=e.songs,j=e.setSongs,g=e.setCurrentSong,p=function(e){var t=o.map((function(t){return t.id===e.id?Object(l.a)(Object(l.a)({},t),{},{active:!0}):Object(l.a)(Object(l.a)({},t),{},{active:!1})}));j(t)},h=function(e){return Math.floor(e/60)+":"+("0"+Math.floor(e%60)).slice(-2)},v=function(){var e=Object(u.a)(d.a.mark((function e(c){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=o.findIndex((function(e){return e.id===s.id})),"skip-forward"!==c){e.next=7;break}return e.next=4,g(o[(a+1)%o.length]);case 4:p(o[(a+1)%o.length]),e.next=17;break;case 7:if("skip-back"!==c){e.next=17;break}if((a-1)%o.length!==-1){e.next=14;break}return e.next=11,g(o[o.length-1]);case 11:return p(o[o.length-1]),t&&n.current.play(),e.abrupt("return");case 14:return e.next=16,g(o[(a-1)%o.length]);case 16:p(o[(a-1)%o.length]);case 17:t&&n.current.play();case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O={transform:"translateX(".concat(i.animationPercentage,"%)")};return Object(a.jsxs)("div",{className:"player",children:[Object(a.jsxs)("div",{className:"time-control",children:[Object(a.jsx)("p",{children:h(i.currentTime)}),Object(a.jsxs)("div",{style:{background:"linear-gradient(to right, ".concat(s.color[0],", ").concat(s.color[1],")")},className:"track",children:[Object(a.jsx)("input",{min:0,max:i.duration||0,value:i.currentTime,onChange:function(e){n.current.currentTime=e.target.value,r(Object(l.a)(Object(l.a)({},i),{},{currentTime:e.target.value}))},type:"range"}),Object(a.jsx)("div",{style:O,className:"animate-track"})]}),Object(a.jsx)("p",{children:i.duration?h(i.duration):"0:00"})]}),Object(a.jsxs)("div",{className:"play-control",children:[Object(a.jsx)(b.a,{onClick:function(){return v("skip-back")},className:"skip-back",icon:m.d,size:"2x"}),Object(a.jsx)(b.a,{onClick:function(){t?n.current.pause():n.current.play(),c(!t)},className:"play",icon:t?m.b:m.c,size:"3x"}),Object(a.jsx)(b.a,{onClick:function(){return v("skip-forward")},className:"skip-forward",icon:m.e,size:"2x"})]})]})},p=function(e){var t=e.currentSong,c=e.isPlaying;return Object(a.jsxs)("div",{className:"song-container",children:[Object(a.jsx)("img",{className:c?"song-playing":"",src:t.cover,alt:t.name}),Object(a.jsx)("h2",{children:t.name}),Object(a.jsx)("h3",{children:t.artist})]})},h=function(e){var t=e.songs,c=e.setSongs,n=e.song,r=e.setCurrentSong,i=e.audioRef,s=e.isPlaying,o=e.id,j=function(){var e=Object(u.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r(n);case 2:return a=t.map((function(e){return e.id===o?Object(l.a)(Object(l.a)({},e),{},{active:!0}):Object(l.a)(Object(l.a)({},e),{},{active:!1})})),e.next=5,c(a);case 5:s&&i.current.play();case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsx)("div",{onClick:j,className:"library-song ".concat(n.active?"selected":""),children:Object(a.jsxs)("div",{className:"song-description",children:[Object(a.jsx)("h6",{children:n.name}),Object(a.jsx)("h4",{children:n.artist})]})})},v=function(e){var t=e.songs,c=e.setSongs,n=e.setCurrentSong,r=e.audioRef,i=e.isPlaying,s=e.libraryStatus;return Object(a.jsxs)("div",{className:"library ".concat(s?"active-library":""),children:[Object(a.jsx)("h2",{children:"\u66f2\u5e93"}),Object(a.jsx)("div",{className:"library-songs",children:t.map((function(e){return Object(a.jsx)(h,{songs:t,setSongs:c,song:e,setCurrentSong:n,audioRef:r,id:e.id,isPlaying:i},e.id)}))})]})},O=function(e){var t=e.libraryStatus,c=e.setLibraryStatus;return Object(a.jsxs)("nav",{children:[Object(a.jsx)("h1",{children:"Real\u7684\u97f3\u4e50\u7a7a\u95f4"}),Object(a.jsxs)("button",{onClick:function(){return c(!t)},children:[Object(a.jsx)(b.a,{icon:m.a})," Library"]})]})},f=c(27),x=c.p+"static/media/Skechers.58c9d5a9.mp3",E=c.p+"static/media/\u7231\u4e2b\u7231\u4e2b.cc081276.flac",k=c.p+"static/media/Mojito.96d7f2f6.flac";var S=function(){return[{name:"\u7231\u4e2b\u7231\u4e2b",cover:"https://upload.wikimedia.org/wikipedia/zh/4/4d/16%E6%9C%AA%E6%88%90%E5%B9%B4.jpg",artist:"BY2 \u5341\u516d\u5c81\u672a\u6210\u5e74",audio:E,color:["#ADA5CE","#213045"],id:Object(f.a)(),active:!0},{name:"\u7ea2\u8272\u9ad8\u8ddf\u978b",cover:"https://pic.baike.soso.com/ugc/baikepic2/17701/20170908013217-955388477.jpg/300",artist:"\u8521\u5065\u96c5",audio:"https://raw.githubusercontent.com/wangrui1573/media/main/music/%E7%BA%A2%E8%89%B2%E9%AB%98%E8%B7%9F%E9%9E%8B.mp3",color:["#ADA5CE","#213045"],id:Object(f.a)(),active:!0},{name:"\u51c9\u51c9",cover:"https://upload.wikimedia.org/wikipedia/en/5/5f/BTS_-_Dynamite_%28official_cover%29.png",artist:"BTS",audio:"https://raw.githubusercontent.com/wangrui1573/media/main/music/%E5%87%89%E5%87%89.mp3",color:["#FBE2E6","#DD5B8C"],id:Object(f.a)(),active:!1},{name:"\u65e0\u4eba\u4e4b\u5c9b",cover:"https://upload.wikimedia.org/wikipedia/en/1/1d/24kGoldn_-_Mood.png",artist:"24kgoldn",audio:"http://realwang.eu5.org/music/%E6%97%A0%E4%BA%BA%E4%B9%8B%E5%B2%9B.mp3",color:["#D888D3","#070922"],id:Object(f.a)(),active:!1},{name:"Mojito",cover:"https://img.alicdn.com/bao/uploaded/i1/2172427566/O1CN01kf4vBN25lHBrauwWP_!!0-item_pic.jpg",artist:"\u5468\u6770\u4f26",audio:k,color:["#F6F6EE","#888984"],id:Object(f.a)(),active:!1},{name:"Cradles",cover:"https://shdbdecdnems09.cdnsrv.jio.com/c.saavncdn.com/585/Cradles-English-2019-20191028124508-500x500.jpg",artist:"Sub Urban",audio:x,color:["#EDDD86","#4A5760"],id:Object(f.a)(),active:!1},{name:"d\u7b2c\u4e94Skechers",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"DripReport",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1},{name:"\u6b4c\u66f2\u540d\u79f0",cover:"https://shdbdecdnems04.cdnsrv.jio.com/c.saavncdn.com/296/Skechers-English-2020-20200403180832-500x500.jpg",artist:"\u6b4c\u624b\uff0c\u4e13\u8f91",audio:x,color:["#DEC254","#E18BB5"],id:Object(f.a)(),active:!1}]},y=function(){var e=Object(n.useRef)(null),t=Object(n.useState)(S()),c=Object(j.a)(t,2),r=c[0],i=c[1],s=Object(n.useState)(r[0]),o=Object(j.a)(s,2),b=o[0],m=o[1],h=Object(n.useState)(!1),f=Object(j.a)(h,2),x=f[0],E=f[1],k=Object(n.useState)({currentTime:0,duration:0,animationPercentage:0}),y=Object(j.a)(k,2),B=y[0],C=y[1],w=Object(n.useState)(!1),D=Object(j.a)(w,2),N=D[0],A=D[1],P=function(e){var t=e.target.currentTime,c=e.target.duration,a=Math.round(t),n=Math.round(c),r=Math.round(a/n*100);C(Object(l.a)(Object(l.a)({},B),{},{currentTime:t,duration:c,animationPercentage:r}))},M=function(){var t=Object(u.a)(d.a.mark((function t(){var c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=r.findIndex((function(e){return e.id===b.id})),t.next=3,m(r[(c+1)%r.length]);case 3:x&&e.current.play();case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(a.jsxs)("div",{className:"App ".concat(N?"library-active":""),children:[Object(a.jsx)(O,{libraryStatus:N,setLibraryStatus:A}),Object(a.jsx)(p,{currentSong:b,isPlaying:x}),Object(a.jsx)(g,{songs:r,audioRef:e,isPlaying:x,setIsPlaying:E,currentSong:b,setSongInfo:C,songInfo:B,setCurrentSong:m,setSongs:i}),Object(a.jsx)(v,{audioRef:e,songs:r,setCurrentSong:m,isPlaying:x,setSongs:i,libraryStatus:N}),Object(a.jsx)("audio",{onTimeUpdate:P,onLoadedMetadata:P,ref:e,src:b.audio,onEnded:M})]})};s.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(y,{})}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.01631fad.chunk.js.map