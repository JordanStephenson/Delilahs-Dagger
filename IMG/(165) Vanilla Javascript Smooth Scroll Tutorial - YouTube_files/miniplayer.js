(function(g){var window=this;var O5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.Y?{D:"div",X:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",M:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",M:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",M:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",M:{points:"0 0 24 0 24 24 0 24"}},{D:"path",M:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";g.R(a.N().experiments,"kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.Y?{D:"div",X:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",M:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",M:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",M:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",M:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.V.call(this,{D:"button",X:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],M:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.u=a;this.ia("click",this.w,this);this.ha("title",g.XM(a,e,"i"));g.le(this,g.hN(b.Za(),this.element))},P5=function(a){g.V.call(this,{D:"div",
I:"ytp-miniplayer-ui"});this.player=a;this.H=!1;this.G=this.w=this.u=void 0;this.L(a,"minimized",this.bI);this.L(a,"onStateChange",this.OO)},Q5=function(a){g.PP.call(this,a);
this.o=new P5(this.player);this.o.hide();g.OL(this.player,this.o.element,4);a.app.H.o&&(this.load(),g.L(g.uL(a),"ytp-player-minimized",!0))};
g.r(O5,g.V);O5.prototype.w=function(){this.u.ka("onExpandMiniplayer")};g.r(P5,g.V);g.h=P5.prototype;
g.h.show=function(){this.u=new g.vn(this.aI,null,this);this.u.start();if(!this.H){this.C=new g.jR(this.player,this);g.H(this,this.C);g.OL(this.player,this.C.element,4);this.C.B=.6;this.S=new g.iQ(this.player);g.H(this,this.S);this.A=new g.V({D:"div",I:"ytp-miniplayer-scrim"});g.H(this,this.A);this.A.ba(this.element);this.L(this.A.element,"click",this.VA);var a=new g.V({D:"button",X:["ytp-miniplayer-close-button","ytp-button"],M:{"aria-label":"Close"},K:[g.qM()]});g.H(this,a);a.ba(this.A.element);
this.L(a.element,"click",this.vz);a=new O5(this.player,this);g.H(this,a);a.ba(this.A.element);this.B=new g.V({D:"div",I:"ytp-miniplayer-controls"});g.H(this,this.B);this.B.ba(this.A.element);this.L(this.B.element,"click",this.VA);var b=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.H(this,b);b.ba(this.B.element);a=new g.V({D:"div",I:"ytp-miniplayer-play-button-container"});g.H(this,a);a.ba(this.B.element);var c=new g.V({D:"div",I:"ytp-miniplayer-button-container"});g.H(this,c);c.ba(this.B.element);
this.O=new g.tO(this.player,this,!1);g.H(this,this.O);this.O.ba(b.element);b=new g.pO(this.player,this);g.H(this,b);b.ba(a.element);this.J=new g.tO(this.player,this,!0);g.H(this,this.J);this.J.ba(c.element);this.G=new g.uP(this.player,this);g.H(this,this.G);this.G.ba(this.A.element);this.w=new g.tN(this.player,this);g.H(this,this.w);g.OL(this.player,this.w.element,4);this.F=new g.V({D:"div",I:"ytp-miniplayer-buttons"});g.H(this,this.F);g.OL(this.player,this.F.element,4);a=new g.V({D:"button",X:["ytp-miniplayer-close-button",
"ytp-button"],M:{"aria-label":"Close"},K:[g.qM()]});g.H(this,a);a.ba(this.F.element);this.L(a.element,"click",this.vz);a=new g.V({D:"button",X:["ytp-miniplayer-replay-button","ytp-button"],M:{"aria-label":"Close"},K:[g.EM()]});g.H(this,a);a.ba(this.F.element);this.L(a.element,"click",this.EM);this.L(this.player,"presentingplayerstatechange",this.cI);this.L(this.player,"appresize",this.Qs);this.L(this.player,"fullscreentoggled",this.Qs);this.Qs();this.H=!0}0!=this.player.getPlayerState()&&g.V.prototype.show.call(this);
this.w.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.hide.call(this);this.player.app.H.o||(this.H&&this.w.hide(),this.player.loadModule("annotations_module"))};
g.h.Y=function(){this.u&&(this.u.dispose(),this.u=void 0);g.V.prototype.Y.call(this)};
g.h.vz=function(){this.player.stopVideo();this.player.ka("onCloseMiniplayer")};
g.h.EM=function(){this.player.playVideo()};
g.h.VA=function(a){if(a.target==this.A.element||a.target==this.B.element)g.R(this.player.N().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.xD(g.wL(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.ka("onExpandMiniplayer")};
g.h.bI=function(){g.L(g.uL(this.player),"ytp-player-minimized",this.player.app.H.o)};
g.h.aI=function(){g.xN(this.w);this.G.w();this.u&&this.u.start()};
g.h.cI=function(a){g.W(a.state,32)&&this.C.hide()};
g.h.Qs=function(){var a=this.w,b=g.tL(this.player).getPlayerSize().width;a.Fa=0;a.C=b;a.B=!1;g.zN(a);this.w.Iu()};
g.h.OO=function(a){this.player.app.H.o&&(0==a?this.hide():this.show())};
g.h.Za=function(){return this.C};
g.h.kc=function(){return!1};
g.h.ge=function(){return!1};
g.h.ij=function(){return!1};
g.h.pu=function(){};
g.h.Mh=function(){};
g.h.uk=function(){};
g.h.vl=function(){return null};
g.h.Ps=function(){return new g.qh(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.Dj=function(a,b,c,d,e){var f=0,k=d=0,l=g.Nh(a);if(b){c=g.In(b,"ytp-prev-button")||g.In(b,"ytp-next-button");var m=g.In(b,"ytp-play-button"),n=g.In(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Kh(b,this.element),k=b.x,f=b.y-12):n&&(k=g.In(b,"ytp-miniplayer-button-top-left"),f=g.Kh(b,this.element),b=g.Nh(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=g.tL(this.player).getPlayerSize().width;e=f+(e||0);l=g.sd(k,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Rs=function(){};
g.h.Uf=function(){};g.r(Q5,g.PP);Q5.prototype.create=function(){};
Q5.prototype.Ef=function(){return!1};
Q5.prototype.load=function(){this.player.hideControls();this.o.show()};
Q5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.dQ.miniplayer=Q5;})(_yt_player);
